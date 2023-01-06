import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image'

import { AuthorInfo } from '@components/pages/about/types'
import About from '@components/pages/about/About'
import { Layout } from '@components/Layout'

interface Edge {
    node: {
        body: string
        frontmatter: {
            featured: ImageDataLike
        }
    }
}

export interface AboutQuery {
    allMdx: {
        edges: Edge[]
    }
    site: {
        siteMetadata: {
            authorInfo: AuthorInfo
        }
    }
}

const AboutPage = ({ data }: { data: AboutQuery }) => {
    const [aboutBody, setAboutBody] = useState<string>()
    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>()
    const [authorImage, setAuthorImage] = useState<IGatsbyImageData>()

    useEffect(() => {
        const { allMdx: { edges }, site: { siteMetadata: { authorInfo } } } = data

        if (edges.length === 0) throw new Error('About me content not found.')

        const { body, frontmatter: { featured } } = edges[0].node
        const image = getImage(featured)

        setAboutBody(body)
        setAuthorImage(image)
        setAuthorInfo(authorInfo)
    }, [data])

    return (
        (
            authorInfo !== undefined &&
            aboutBody !== undefined &&
            authorImage !== undefined
        )
            ? (
                <About
                    authorDescriptionBody={aboutBody}
                    authorInfo={authorInfo}
                    authorImage={authorImage}
                />
            )
            // Add a basic loading component
            : <Layout>Loading</Layout>
    )
}

export const aboutQuery = graphql`
    query About {
        site {
            siteMetadata {
                authorInfo {
                    name
                    description
                }
            }
        }

        allMdx(filter: {frontmatter: {type: {eq: "about-me"}}}) {
            edges {
                node {
                    frontmatter {
                        featured {
                            childImageSharp {   
                                gatsbyImageData(width: 400, layout: FULL_WIDTH)
                            }
                        }
                    }
                    body
                }
            }
        }
    }
`

export default AboutPage
