import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'

import { Blog } from '../../components/pages/blog/Blog'
import { BlogHighlights } from '../../components/types'
import { BlogQuery } from './types'

const BlogPage = ({ data }: { data: BlogQuery }) => {
    const [highlights, setHighlights] = useState<BlogHighlights[]>([])

    useEffect(() => {
        const { allMdx: { edges } } = data
        const postHighlights = edges.map(edge => ({
            title: edge.node.frontmatter.title,
            published: edge.node.frontmatter.published
        }))

        setHighlights(postHighlights)
    }, [data])

    return <Blog highlights={highlights} />
}

export const blogQuery = graphql`
    query Blog {
        allMdx(
            sort: {fields: frontmatter___published, order: DESC}
            filter: {frontmatter: {type: {eq: "post"}}}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        published
                    }
                }
            }
        }
    }
`

export default BlogPage
