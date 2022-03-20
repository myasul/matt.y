import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../../Layout'
import { DateUtil } from '../../../lib/utils/DateUtil'
import { BlogContainer, Title, TitleMeta } from './styles'
import components from '../../mdx'
import { BreakPoint } from '../../../lib/utils/breakpoints'

type BlogQueryData = {
    mdx: {
        frontmatter: {
            title: string
            published: string
        }
        body: string
    }
}

type Props = {
    data: BlogQueryData
}

const Blog = ({ data }: Props) => {
    const { mdx: { frontmatter, body } } = data

    return (
        <Layout>
            <BlogContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
                <Title breakpointSize={BreakPoint.MinimumMedium - 1}>{frontmatter.title}</Title>
                <TitleMeta>
                    <h6>Last Updated {DateUtil.toAbbrevDateTime(new Date(frontmatter.published))}</h6>
                </TitleMeta>
                <MDXProvider components={components}>
                    <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
                </MDXProvider>
            </BlogContainer>
        </Layout>
    )
}

export const blogQuery = graphql`
    query BlogBySlug($slug: String!) {
        mdx (frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                published
            }
            body
        }
    }
`

export default Blog
