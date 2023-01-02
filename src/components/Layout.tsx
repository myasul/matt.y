import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import '@fontsource/dm-mono'
import '@fontsource/fira-mono'

import { Header } from './Header'
import { LayoutMeta } from './LayoutMeta'
import { Footer } from './Footer'
import { SiteInfo, AuthorInfo } from '../types/siteMetadata'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Fira Mono', monospace;
        margin: 0;
        padding: 0;
        color: rgb(69, 73, 99);
    }

    a {
        color: rgb(0, 161, 227);
        text-decoration: none;
        transition: all 0.4s ease 0s;
        
        :hover {
            color: #ed7842
        }
    }
`

type LayoutData = {
    site: {
        siteMetadata: {
            siteInfo: SiteInfo
            authorInfo: AuthorInfo
        }
    }
}

type Props = {
    children: ReactNode
}

const HEADER_HEIGHT = 65
const SITE_MAX_WIDTH = 900

const LayoutBody = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`

const LayoutChildrenContainer = styled.div<{
    maxWidth: number
    marginTop: number
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${props => props.maxWidth}px;
    margin-top: ${props => props.marginTop}px;
    flex: 1;
    width: 100%;
`

export const Layout = ({ children }: Props) => {
    const { site: { siteMetadata: { siteInfo, authorInfo } } } = useStaticQuery<LayoutData>(
        graphql`
            query { 
                site {
                    siteMetadata {
                        siteInfo {
                            title
                            metaTitle
                            metaDescription
                            url
                        }
                        authorInfo {
                            name
                            description
                            email
                            jobTitle
                            profiles {
                                linkedin
                                facebook
                                instagram
                                github
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <div>
            <GlobalStyle />
            <LayoutMeta title={authorInfo.name} description={siteInfo.description} />
            <LayoutBody>
                <Header
                    title={siteInfo.title}
                    height={HEADER_HEIGHT}
                    bodyWidth={SITE_MAX_WIDTH}
                />
                <LayoutChildrenContainer
                    maxWidth={SITE_MAX_WIDTH}
                    marginTop={30}
                >
                    {children}
                </LayoutChildrenContainer>
                <Footer authorInfo={authorInfo} maxWidth={SITE_MAX_WIDTH} />
            </LayoutBody>
        </div>
    )
}
