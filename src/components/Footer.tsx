import * as React from 'react'
import { Instagram, Facebook, GitHub, Linkedin } from 'react-feather'
import styled from 'styled-components'
import { BreakPoint } from '@lib/utils/breakpoints'

import { AuthorInfo } from '@shared-types/siteMetadata'

type Props = {
    authorInfo: AuthorInfo
    maxWidth: number
}

const FooterContainer = styled.footer<{maxWidth: number}>`
    font-size: 1.1rem;
    font-family: "DM Mono", serif;
    color: rgb(69, 73, 99);
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5vh;
    /* padding: 0 1rem; */
    margin: 0 auto;
    max-width: ${props => props.maxWidth}px;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;

    a {
        text-decoration: none;
        color: rgb(69, 73, 99);
    }
`

const FooterIconContainer = styled.div<{ breakpointSize: number }>`
    display: flex;
    justify-content: space-evenly;
    min-width: 30%;

    @media (max-width: ${props => props.breakpointSize}px) {
        min-width: 45%;
    }
`

const CopyrightContainer = styled.div`
    min-width: 20%;
    margin-left: 1rem;
`

export const Footer = ({ authorInfo, maxWidth }: Props) => {
    const { name, profiles } = authorInfo
    const currentYear = new Date().getFullYear()

    return (
        <FooterContainer maxWidth={maxWidth}>
            <CopyrightContainer>{name} &copy; {currentYear}</CopyrightContainer>
            <FooterIconContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
                <a href={profiles.facebook} target="_blank" rel='noreferrer'>
                    <Facebook size='23' />
                </a>
                <a href={profiles.instagram} target="_blank" rel='noreferrer'>
                    <Instagram size='23' />
                </a>
                <a href={profiles.linkedin} target="_blank" rel='noreferrer'>
                    <Linkedin size='23' />
                </a>
                <a href={profiles.github} target="_blank" rel='noreferrer'>
                    <GitHub size='23' />
                </a>
            </FooterIconContainer>
        </FooterContainer>
    )
}
