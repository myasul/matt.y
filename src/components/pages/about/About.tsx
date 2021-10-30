import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
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
    authorImageFluid: FluidObject
}

export const About = ({ authorDescriptionBody, authorInfo, authorImageFluid }: Props) => {
    return (
        <Layout>
            <AboutMeta name={authorInfo.name} description={authorInfo.description} />
            <AboutContainer>
                <AboutDescription>
                    <AboutHeader>Matt Yasul</AboutHeader>
                    <MDXRenderer>{authorDescriptionBody}</MDXRenderer>
                </AboutDescription>
                <AboutImageContainer>
                    <Img alt={`${authorInfo.name}'s picture`} fluid={authorImageFluid} />
                </AboutImageContainer>
            </AboutContainer>
        </Layout>
    )
}

export default About
