import { FluidObject } from 'gatsby-image'
import { AuthorInfo } from '../../components/pages/about/types'

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