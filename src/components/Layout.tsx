import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'
import { SiteInfo, AuthorInfo } from '../types/siteMetadata'

import { Header } from './Header'
import { LayoutMeta } from './LayoutMeta'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
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
            <LayoutMeta title={siteInfo.title} description={siteInfo.description} />
            <Header title={siteInfo.title} />
            {children}
        </div>
    )
}
