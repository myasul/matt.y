import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Home } from '../components/pages/home/Home'
import { Post } from '../types/post'

type Edge = {
    node: {
        body: string
        frontmatter: Post
    }
}

export type HomeQuery = {
    allMdx: {
        edges: Edge[]
    }
}

const HomePage = ({ data }: { data: HomeQuery }) => {
    const [highlights, setHighlights] = useState<Post[]>([])

    useEffect(() => {
        const { allMdx: { edges } } = data
        const postHighlights = edges.map(edge => edge.node.frontmatter)

        setHighlights(postHighlights)
    }, [data])

    return <Home highlights={highlights} />
}

export const homeQuery = graphql`
    query Home {
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

export default HomePage
