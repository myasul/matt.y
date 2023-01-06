import { graphql } from 'gatsby'
import { getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

import { Home } from '@components/pages/home/Home'
import { Post } from '@shared-types/post'
import { AuthorInfo } from '@shared-types/siteMetadata'

type Edge = {
    node: {
        frontmatter: Post
    }
}

export type HomeQuery = {
    site: {
        siteMetadata: {
            authorInfo: AuthorInfo
        }
    }
    allMdx: {
        edges: Edge[]
    }
    mdx: {
        frontmatter: {
            featured: ImageDataLike
        }
        body: string
    }
}

const HomePage = ({ data }: { data: HomeQuery }) => {
    const [authorImage, setAuthorImage] = useState<IGatsbyImageData>()

    useEffect(() => {
        const { mdx: { frontmatter: { featured } } } = data
        const image = getImage(featured)

        setAuthorImage(image)
    }, [data])

    if (!authorImage) return null

    return (
        <Home
            authorImage={authorImage}
            description={data.mdx.body}
            highlights={data.allMdx.edges.map(edge => edge.node.frontmatter)}
            authorInfo={data.site.siteMetadata.authorInfo}
        />
    )
}

export const homeQuery = graphql`
    query Home {
        site {
            siteMetadata {
                authorInfo {
                    nickname
                    description
                }
            }
        }

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

        mdx(frontmatter: {type: {eq: "home"}}) {
            frontmatter {
                featured {
                    childImageSharp {   
                        gatsbyImageData(width: 350, layout: FIXED)
                    }
                }
            }
            body
        }
    }
`

export default HomePage
