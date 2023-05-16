import React from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { BreakPoint } from '@lib/utils/breakpoints'
import { Post } from '@shared-types/post'
import { Layout } from '@components/Layout'
import { HighlightList } from '@components/pages/blog/HighlightList'
import {
    AuthorImageContainer,
    BlogSectionContainer,
    HomeContainer,
    Introduction
} from './styles'
import { AuthorInfo } from '@shared-types/siteMetadata'

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
                        <span>
                            <MDXRenderer>{description}</MDXRenderer>
                        </span>
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
