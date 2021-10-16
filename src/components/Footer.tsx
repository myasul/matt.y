import * as React from 'react'
import { Instagram, Facebook, GitHub, Linkedin } from 'react-feather'
import styled from 'styled-components'

import { AuthorInfo } from '../types/siteMetadata'

type Props = {
    authorInfo: AuthorInfo
}

const FooterContainer = styled.footer`
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-self: center;
    a {
        text-decoration: none;
        color: black;
    }
    padding: 0.8rem 0;
    margin: 0 10px;
    flex-shrink: 0;
    width: 100%;
`

const FooterIconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-width: 25%;
`

export const Footer = ({ authorInfo }: Props) => {
    const { name, email, profiles } = authorInfo

    return (
        <FooterContainer>
            <div>&copy;{name}</div>
            <FooterIconContainer>
                <a href={profiles.facebook} target="_blank">
                    <Facebook />
                </a>
                <a href={profiles.instagram} target="_blank">
                    <Instagram />
                </a>
                <a href={profiles.linkedin} target="_blank">
                    <Linkedin />
                </a>
                <a href={profiles.github} target="_blank">
                    <GitHub />
                </a>
            </FooterIconContainer>
            <div>
                <a href={`mailto:${email}`}>Contact Me</a>
            </div>
        </FooterContainer>
    )
}