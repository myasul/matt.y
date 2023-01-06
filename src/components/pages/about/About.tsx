import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { BreakPoint } from '@lib/utils/breakpoints'
import { Layout } from '@components/Layout'
import { AuthorInfo } from './types'
import {
    AboutContainer,
    AboutDescription,
    AboutImageContainer,
    AboutIntro,
    AboutBody
} from './styles'
import { AboutMeta } from './AboutMeta'

type Props = {
    authorDescriptionBody: string
    authorInfo: AuthorInfo
    authorImage: IGatsbyImageData
}

export const About = ({ authorDescriptionBody, authorInfo, authorImage }: Props) => {
    return (
        <Layout>
            <AboutMeta name={authorInfo.name} description={authorInfo.description} />
            <AboutContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
                <AboutIntro breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>ABOUT</p>
                    <h1>{authorInfo.name}</h1>
                    <h2>
                        Software developer, coffee enthusiast, part-time freelancer, and full-time hustler.
                    </h2>
                </AboutIntro>
                <AboutBody breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <AboutDescription>
                        <MDXRenderer>{authorDescriptionBody}</MDXRenderer>
                    </AboutDescription>
                    <AboutImageContainer>
                        <GatsbyImage alt={`${authorInfo.name}'s picture`} image={authorImage} />
                    </AboutImageContainer>
                </AboutBody>
            </AboutContainer>
        </Layout>
    )
}

export default About
