import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { AuthorInfo } from '../../components/pages/about/types'
import About from '../../components/pages/about/About'
import { Layout } from '../../components/Layout'
import { AboutQuery } from './types'

const AboutPage = ({ data }: { data: AboutQuery }) => {
    const [aboutHtml, setAboutHtml] = useState<string>()
    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>()
    const [authorImageFluid, setAuthorImageFluid] = useState<FluidObject>()

    useEffect(() => {
        const { allMarkdownRemark: { edges }, site: { siteMetadata: { authorInfo } } } = data

        if (!edges.length) throw new Error('About me content not found.')

        const { html, frontmatter: { featured: { childImageSharp: { fluid } } } } = edges[0].node

        setAboutHtml(html)
        setAuthorImageFluid(fluid)
        setAuthorInfo(authorInfo)
    }, [data])

    return (
        (authorInfo && aboutHtml && authorImageFluid)
        ? (
            <About
                authorDescriptionInHtml={aboutHtml}
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

        allMarkdownRemark(filter: {frontmatter: {type: {eq: "about-me"}}}) {
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
                    html
                }
            }
        }
    }
`

export default AboutPage
