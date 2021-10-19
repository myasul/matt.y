import { FluidObject } from 'gatsby-image'

type Edge = {
    node: {
        html: string
        frontmatter: {
            featured: {
                childImageSharp: {
                    fluid: FluidObject
                }
            }
        }
    }
}

export type AuthorInfo = {
    name: string
    description: string
}

export type AboutQuery = {
    allMarkdownRemark: {
        edges: Edge[]
    }
    site: {
        siteMetadata: {
            authorInfo: AuthorInfo
        }
    }
}