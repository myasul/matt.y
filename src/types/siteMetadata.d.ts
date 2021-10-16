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
}

export interface SiteInfo {
    title: string
    description: string
    metaTitle: string
    metaDescription: string
    url: string
    repositoryUrl: string
}
