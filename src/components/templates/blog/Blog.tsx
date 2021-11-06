import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../../Layout'
import { DateUtil } from '../../../utils/DateUtil'
import { BlogContainer, BodyContainer, Title, TitleContainer, TitleMeta } from './styles'
import components from '../../mdx'


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
            <BlogContainer>
                <TitleContainer>
                    <Title>{frontmatter.title}</Title>
                    <TitleMeta>
                        <h6>Last Updated {DateUtil.toAbbrevDateTime(new Date(frontmatter.published))}</h6>
                    </TitleMeta>
                </TitleContainer>
                <BodyContainer>
                    <MDXProvider components={components}>
                        <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
                    </MDXProvider>
                </BodyContainer>
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