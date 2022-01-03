import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { SiteInfo, AuthorInfo } from '../types/siteMetadata'

import { Header } from './Header'
import { LayoutMeta } from './LayoutMeta'
import { Footer } from './Footer'
import { BreakPoint } from '../lib/utils/breakpoints'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Libre Baskerville', serif;
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

const LayoutBody = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const LayoutChildrenContainer = styled.div<{breakpointSize: number}>`
    width: 65%;
    margin: 0 auto;
    flex: 1;

    @media (max-width: ${props => props.breakpointSize}px) {
        width: 100%;
    }
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
                <Header title={siteInfo.title} />
                <LayoutChildrenContainer breakpointSize={BreakPoint.MinimumLarge -1}>
                    {children}
                </LayoutChildrenContainer>
                <Footer authorInfo={authorInfo} />
            </LayoutBody>
        </div>
    )
}
