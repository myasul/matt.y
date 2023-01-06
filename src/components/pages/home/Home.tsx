import React from 'react'
import { Link } from 'gatsby'

import { BreakPoint } from '../../../lib/utils/breakpoints'
import { Post } from '../../../types/post'
import { Layout } from '../../Layout'
import { HighlightList } from '../blog/HighlightList'
import {
    AuthorImageContainer,
    BlogSectionContainer,
    HomeContainer,
    Introduction
} from './styles'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { AuthorInfo } from '../../../types/siteMetadata'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type Props = {
    highlights: Post[]
    description: string
    authorInfo: AuthorInfo
    authorImage: IGatsbyImageData
}

export const Home = ({ highlights, description, authorImage, authorInfo }: Props) => {
    return (
        <Layout>
            <HomeContainer breakpointSize={BreakPoint.MinimumLarge - 1}>
                <Introduction breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <section>
                        <h1>Hey, I&apos;m {authorInfo.nickname}!</h1>
                        <MDXRenderer>{description}</MDXRenderer>
                    </section>
                    <AuthorImageContainer>
                        <GatsbyImage
                            alt={`${authorInfo.nickname}'s picture`}
                            image={authorImage}
                        />
                    </AuthorImageContainer>
                </Introduction>
                <BlogSectionContainer>
                    <h2>
                        <Link to='/blog'>
                            Latest Posts
                        </Link>
                    </h2>
                    <HighlightList postsPerCol={1} highlights={highlights.slice(0, 3)} />
                </BlogSectionContainer>
            </HomeContainer>
        </Layout>
    )
}
