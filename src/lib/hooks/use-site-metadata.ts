import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadataQuery } from '../../types/siteMetadata'

export const useSiteMetadata = () => {
    const data = useStaticQuery<SiteMetadataQuery>(
        graphql`
            query AuthorInfoAndPictures {
              site {
                siteMetadata {
                  authorInfo {
                    # See fragments/index.ts
                    ...AuthorInfoAll
                  }
                  siteInfo {
                    # See fragments/index.ts
                    ...SiteInfoAll
                  }
                }
              }
            }
        `
    )

    const { site: { siteMetadata: { authorInfo: author, siteInfo: site } } } = data

    return { author, site }
}
