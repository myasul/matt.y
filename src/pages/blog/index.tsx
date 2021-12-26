import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'

import { Blog } from '../../components/pages/blog/Blog'
import { BlogHighlights } from '../../components/types'

type Edge = {
    node: {
        body: string
        frontmatter: {
            title: string
            published: string
            slug: string
        }
    }
}

export type BlogQuery = {
    allMdx: {
        edges: Edge[]
    }
}


const BlogPage = ({ data }: { data: BlogQuery }) => {
    const [highlights, setHighlights] = useState<BlogHighlights[]>([])

    useEffect(() => {
        const { allMdx: { edges } } = data
        const postHighlights = edges.map(edge => {
            const { node: { frontmatter: { title, published, slug } } } = edge

            return { title, published, slug }
        })

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
                        slug
                    }
                }
            }
        }
    }
`

export default BlogPage
