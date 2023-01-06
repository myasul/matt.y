import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
    title: string
    height: number
    bodyWidth: number
}

const HeaderContainer = styled.header<{height: number}>`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 22px -20px #000;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: white;
    height: ${props => props.height}px
`

const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    min-width: 25%;
    justify-content: space-between;
    font-size: 0.9rem;

    h2 {
        padding: 0 0.5rem;
    }
`

const HeaderBody = styled.div<{maxWidth: number}>`
    max-width: ${props => props.maxWidth}px;
    width: 100%;
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    font-family: "DM Mono", serif;
    font-size: 1rem;

    a {
        text-decoration: none;
        color:rgb(69, 73, 99);

        :hover {
            color: #ed7842
        }
    }
`

export const Header = ({ title, height, bodyWidth }: Props) => {
    return (
        <HeaderContainer height={height}>
            <HeaderBody maxWidth={bodyWidth}>
                <h2><Link to='/'>{title}</Link></h2>
                <HeaderItems>
                    <h2><Link to='/blog'>Blog</Link></h2>
                    <h2><Link to='/about'>About</Link></h2>
                </HeaderItems>
            </HeaderBody>
        </HeaderContainer>
    )
}
