import React from 'react'
import  { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Layout } from '../../Layout'
import { AboutMeta } from './AboutMeta'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { AuthorInfo } from './types'
import {
    AboutContainer,
    AboutDescription,
    AboutHeader,
    AboutImageContainer
} from './styles'

type Props = {
    authorDescriptionBody: string
    authorInfo: AuthorInfo
    authorImage: IGatsbyImageData
}

export const About = ({ authorDescriptionBody, authorInfo, authorImage}: Props) => {
    return (
        <Layout>
            <AboutMeta name={authorInfo.name} description={authorInfo.description} />
            <AboutContainer>
                <AboutDescription>
                    <AboutHeader>Matt Yasul</AboutHeader>
                    <MDXRenderer>{authorDescriptionBody}</MDXRenderer>
                </AboutDescription>
                <AboutImageContainer>
                    <GatsbyImage alt={`${authorInfo.name}'s picture`} image={authorImage} />
                </AboutImageContainer>
            </AboutContainer>
        </Layout>
    )
}

export default About
