import { FluidObject } from 'gatsby-image'
import { AuthorInfo } from '../../components/pages/about/types'

type Edge = {
    node: {
        body: string
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
    allMdx: {
        edges: Edge[]
    }
    site: {
        siteMetadata: {
            authorInfo: AuthorInfo
        }
    }
}