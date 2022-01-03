import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Home } from '../components/pages/home/Home'
import { BlogHighlights } from '../components/types'

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

export type HomeQuery = {
    allMdx: {
        edges: Edge[]
    }
}

const HomePage = ({ data }: { data: HomeQuery }) => {
    const [highlights, setHighlights] = useState<BlogHighlights[]>([])

    useEffect(() => {
        const { allMdx: { edges } } = data
        const postHighlights = edges.map(edge => {
            const { title, published, slug } = edge.node.frontmatter

            return { title, published, slug }
        })

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
                        title
                        published
                        slug
                    }
                }
            }
        }
    }
`

export default HomePage