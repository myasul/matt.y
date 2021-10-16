export interface AuthorInfo {
  name: string;
  description: string;
  email: string;
  jobTitle: string;
  profiles: Profiles;
  nicknames: Nicknames;
}

export interface SiteInfo {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  url: string;
  repositoryUrl: string;
}
