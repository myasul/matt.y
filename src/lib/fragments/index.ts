import { graphql } from 'gatsby'

export const postsFragment = graphql`
    fragment Post on MdxFrontmatter {
        title
        description
        published
        slug
    }
`

export const siteInfoFragment = graphql`
    fragment SiteInfoAll on SiteSiteMetadataSiteInfo {
      title
      metaDescription
      metaTitle
      metaDescription
      url
      repositoryUrl
    }
`

export const authorInfoFragment = graphql`
    fragment AuthorInfoAll on SiteSiteMetadataAuthorInfo {
      name
      description
      email
      jobTitle
      profiles {
        instagram
        linkedin
        github
        facebook
      }
      usernames {
        twitter
      }
    }   
`
