import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { AuthorInfo } from '../../components/pages/about/types'
import About from '../../components/pages/about/About'
import { Layout } from '../../components/Layout'
import { AboutQuery } from './types'

const AboutPage = ({ data }: { data: AboutQuery }) => {
    const [aboutBody, setAboutBody] = useState<string>()
    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>()
    const [authorImageFluid, setAuthorImageFluid] = useState<FluidObject>()

    useEffect(() => {
        const { allMdx: { edges }, site: { siteMetadata: { authorInfo } } } = data

        if (!edges.length) throw new Error('About me content not found.')

        const { body, frontmatter: { featured: { childImageSharp: { fluid } } } } = edges[0].node

        setAboutBody(body)
        setAuthorImageFluid(fluid)
        setAuthorInfo(authorInfo)
    }, [data])

    return (
        (authorInfo && aboutBody && authorImageFluid)
        ? (
            <About
                authorDescriptionBody={aboutBody}
                authorInfo={authorInfo}
                authorImageFluid={authorImageFluid}
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
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
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
