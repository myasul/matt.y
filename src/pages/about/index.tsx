import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import { AuthorInfo, AboutQuery } from './types'
import { Layout } from '../../components/Layout'
import { AboutMeta } from '../../components/pages/about/AboutMeta'
import styled from 'styled-components'

type Props = {
    data: AboutQuery
}

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AboutDescription = styled.div`
    width: 50%;
    margin-left: 1rem;
    p {
        margin-top: 0;
    }
`

const AboutBody = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 1rem;
`

const AboutImageContainer = styled.div`
    width: 40%;
`

const AboutHeader = styled.h1`
    text-align: center;
`

const About = ({ data }: Props) => {
    const [aboutHtml, setAboutHtml] = useState<string>()
    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>()
    const [imageFluid, setImageFluid] = useState<FluidObject>()

    useEffect(() => {
        const { allMarkdownRemark: { edges }, site: { siteMetadata: { authorInfo } } } = data

        if (!edges.length) throw new Error('About me content not found.')

        const { html, frontmatter: { featured: { childImageSharp: { fluid } } } } = edges[0].node

        setAboutHtml(html)
        setImageFluid(fluid)
        setAuthorInfo(authorInfo)
    }, [data])

    return (
        <Layout>
            {authorInfo && aboutHtml && imageFluid && (
                <>
                    <AboutMeta name={authorInfo.name} description={authorInfo.description} />
                    <AboutContainer>
                        <AboutHeader>About Me</AboutHeader>
                        <AboutBody style={{ display: 'flex' }}>
                            <AboutImageContainer>
                                <Img alt={`${authorInfo.name}'s picture`} fluid={imageFluid} />
                            </AboutImageContainer>
                            <AboutDescription>
                                <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
                            </AboutDescription>
                        </AboutBody>
                    </AboutContainer>
                </>
            )}
        </Layout>
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

export default About
