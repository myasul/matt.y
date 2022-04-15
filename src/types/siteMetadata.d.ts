interface Profiles {
    linkedin: string
    github: string
    facebook: string
    instagram: string
}

export interface AuthorInfo {
    name: string
    description: string
    email: string
    jobTitle: string
    profiles: Profiles
    usernames: {
        twitter: string
    }
}

export interface SiteInfo {
    title: string
    description: string
    metaTitle: string
    metaDescription: string
    url: string
    repositoryUrl: string
}

export interface SiteMetadataQuery {
    site: {
        siteMetadata: {
            authorInfo: AuthorInfo
            siteInfo: SiteInfo
        }
    }
}
