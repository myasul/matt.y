import React, { useEffect, useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { Layout } from '../../Layout'
import { AboutMeta } from './AboutMeta'

import { AboutQuery } from './types'
import {
    AboutBody,
    AboutContainer,
    AboutDescription,
    AboutHeader,
    AboutImageContainer
} from './styles'

export const About = ({ data }: { data: AboutQuery }) => {
    const [aboutHtml, setAboutHtml] = useState<string>()
    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>()
    const [imageFluid, setImageFluid] = useState<FluidObject>()

    useEffect(() => {
        const { allMarkdownRemark: { edges }, site: { siteMetadata: { authorInfo } } } = data

        if (!edges.length) throw new Error('About me content not found.')

        const { html, frontmatter: { featured: { childImageSharp: { fluid } } } } = edges[0].node

        setAboutHtml(html)
        setImageFluid(fluid)
        setAuthorInfo(authorInfo)
    }, [data])

    return (
        <Layout>
            {authorInfo && aboutHtml && imageFluid && (
                <>
                    <AboutMeta name={authorInfo.name} description={authorInfo.description} />
                    <AboutContainer>
                        <AboutHeader>About Me</AboutHeader>
                        <AboutBody style={{ display: 'flex' }}>
                            <AboutImageContainer>
                                <Img alt={`${authorInfo.name}'s picture`} fluid={imageFluid} />
                            </AboutImageContainer>
                            <AboutDescription>
                                <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
                            </AboutDescription>
                        </AboutBody>
                    </AboutContainer>
                </>
            )}
        </Layout>
    )
}

export default About
