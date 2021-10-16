import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'
import { SiteInfo, AuthorInfo } from '../types/siteMetadata'

import { Header } from './Header'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans - serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
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
    const data = useStaticQuery<LayoutData>(
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
            <Header title={data.site.siteMetadata.siteInfo.title} />
            {children}
        </div>
    )
}
