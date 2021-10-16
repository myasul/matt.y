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
    flex-shrink: 0;
`

const HeaderItems = styled.div`
    display: flex;
    min-width: 40%;
    justify-content: space-around;
`


export const Header = ({ title }: Props) => {
    return (
        <HeaderContainer>
            <h2><Link to='/'>{title}</Link></h2>
            <HeaderItems>
                <h2><Link to='/blog'>Blog</Link></h2>
                <h2><Link to='/about'>About</Link></h2>
            </HeaderItems>
        </HeaderContainer>
    )
}