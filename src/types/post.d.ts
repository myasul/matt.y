import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface PostPlain {
    title: string
    description: string
    published: string
    slug: string
}

export interface Post extends PostPlain {
    thumbnail: IGatsbyImageData
}
