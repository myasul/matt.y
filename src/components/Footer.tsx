import * as React from 'react'
import { Instagram, Facebook, GitHub, Linkedin } from 'react-feather'
import styled from 'styled-components'

import { AuthorInfo } from '../types/siteMetadata'

type Props = {
    authorInfo: AuthorInfo
}

const FooterContainer = styled.footer`
    font-size: 1.1rem;
    color: rgb(69, 73, 99);
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5vh;
    width: 100%;
    max-width: 80vw;

    a {
        text-decoration: none;
        color: rgb(69, 73, 99);
    }
`

const FooterIconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-width: 15%;
`

export const Footer = ({ authorInfo }: Props) => {
    const { name, profiles } = authorInfo
    const currentYear = new Date().getFullYear()

    return (
        <FooterContainer>
            <div>{name} &copy; {currentYear}</div>
            <FooterIconContainer>
                <a href={profiles.facebook} target="_blank">
                    <Facebook size='28' />
                </a>
                <a href={profiles.instagram} target="_blank">
                    <Instagram size='28' />
                </a>
                <a href={profiles.linkedin} target="_blank">
                    <Linkedin size='28' />
                </a>
                <a href={profiles.github} target="_blank">
                    <GitHub size='28' />
                </a>
            </FooterIconContainer>
        </FooterContainer>
    )
}