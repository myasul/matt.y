import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { Layout } from '../../Layout'
import { AboutMeta } from './AboutMeta'

import { AboutQuery, AuthorInfo } from './types'
import {
    AboutBody,
    AboutContainer,
    AboutDescription,
    AboutHeader,
    AboutImageContainer
} from './styles'

type Props = {
    authorDescriptionInHtml: string
    authorInfo: AuthorInfo
    authorImageFluid: FluidObject
}

export const About = ({ authorDescriptionInHtml, authorInfo, authorImageFluid }: Props) => {
    return (
        <Layout>
            <AboutMeta name={authorInfo.name} description={authorInfo.description} />
            <AboutContainer>
                <AboutHeader>About Me</AboutHeader>
                <AboutBody style={{ display: 'flex' }}>
                    <AboutImageContainer>
                        <Img alt={`${authorInfo.name}'s picture`} fluid={authorImageFluid} />
                    </AboutImageContainer>
                    <AboutDescription>
                        <div dangerouslySetInnerHTML={{ __html: authorDescriptionInHtml }} />
                    </AboutDescription>
                </AboutBody>
            </AboutContainer>
        </Layout>
    )
}

export default About
