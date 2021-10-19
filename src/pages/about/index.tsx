import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

import { AboutQuery } from '../../components/pages/about/types'
import About from '../../components/pages/about/About'

const AboutPage = ({ data }: { data: AboutQuery }) => <About data={data} />

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
