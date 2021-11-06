import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
    title: string
}

const HeaderContainer = styled.header`
    width: 100vw;
    box-shadow: 0 5px 22px -20px #000;
`

const HeaderItems = styled.div`
    display: flex;
    min-width: 25%;
    justify-content: space-between;
`

const HeaderBody = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    a {
        font-size: 1.1rem;
        text-decoration: none;
        color:rgb(69, 73, 99);

        :hover {
            color: #ed7842
        }
    }
    margin: 0 auto;
    padding: 0 1rem;
`


export const Header = ({ title }: Props) => {
    return (
        <HeaderContainer>
            <HeaderBody>
                <h2><Link to='/'>{title}</Link></h2>
                <HeaderItems>
                    <h2><Link to='/blog'>Blog</Link></h2>
                    <h2><Link to='/about'>About</Link></h2>
                </HeaderItems>
            </HeaderBody>
        </HeaderContainer>
    )
}