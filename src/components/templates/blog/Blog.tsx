import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import { Layout } from '../../Layout'


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

const shortcodes = { Link }

const Blog = ({ data }: Props) => {
    const { mdx: { frontmatter, body } } = data

    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <h6>{new Date(frontmatter.published).toDateString()}</h6>
            <MDXProvider components={shortcodes}>
                <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
            </MDXProvider>
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