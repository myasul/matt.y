import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
    title: string
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: black;
    }
    width: 100%;
    box-shadow: 0 5px 20px -10px #000;
`

const HeaderItems = styled.div`
    display: flex;
    min-width: 40%;
    justify-content: space-around;
`

const Title = styled.h2`
    margin-left: 1rem;
`


export const Header = ({ title }: Props) => {
    return (
        <HeaderContainer>
            <Title><Link to='/'>{title}</Link></Title>
            <HeaderItems>
                <h2><Link to='/blog'>Blog</Link></h2>
                <h2><Link to='/about'>About</Link></h2>
            </HeaderItems>
        </HeaderContainer>
    )
}