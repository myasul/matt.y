import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../../Layout'
import { DateUtil } from '../../../lib/utils/DateUtil'
import { BlogContainer, Title, TitleMeta } from './styles'
import components from '../../mdx'
import { BreakPoint } from '../../../lib/utils/breakpoints'
import { Comments } from '../../comments/Comments'
import { PostPlain } from '../../../types/post'
import { MetaTags } from './MetaTags'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type BlogQueryData = {
    mdx: {
        frontmatter: PostPlain & {
            thumbnail: {
                childImageSharp: { gatsbyImageData: IGatsbyImageData }
            }
        }
        body: string
    }
}

type Props = {
    data: BlogQueryData
}

const Blog = ({ data }: Props) => {
    const { mdx: { frontmatter, body } } = data
    const post = {
        ...frontmatter,
        thumbnail: frontmatter.thumbnail.childImageSharp.gatsbyImageData
    }

    return (
        <Layout>
            <MetaTags post={post} />
            <BlogContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
                <Title breakpointSize={BreakPoint.MinimumMedium - 1}>{post.title}</Title>
                <TitleMeta>
                    <h6>Last Updated {DateUtil.toAbbrevDateTime(new Date(post.published))}</h6>
                </TitleMeta>
                <MDXProvider components={components}>
                    <MDXRenderer frontmatter={post}>{body}</MDXRenderer>
                </MDXProvider>
                <Comments />
            </BlogContainer>
        </Layout>
    )
}

export const blogQuery = graphql`
    query BlogBySlug($slug: String!) {
        mdx (frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                # See fragments/index.ts!
                ...Post
                thumbnail {
                    childImageSharp {
                        gatsbyImageData(quality: 100)
                    }
                }
            }
            body
        }
    }
`

export default Blog
