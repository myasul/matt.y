import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'

import { Blog } from '../../components/pages/blog/Blog'
import { PostPlain } from '../../types/post'

type Edge = {
    node: {
        body: string
        frontmatter: PostPlain
    }
}

export type BlogQuery = {
    allMdx: {
        edges: Edge[]
    }
}

const BlogPage = ({ data }: { data: BlogQuery }) => {
    const [highlights, setHighlights] = useState<PostPlain[]>([])

    useEffect(() => {
        const { allMdx: { edges } } = data
        const postHighlights = edges.map(edge => edge.node.frontmatter)

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
                        # See fragments/index.ts
                        ...Post
                    }
                }
            }
        }
    }
`

export default BlogPage
