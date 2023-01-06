import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { Layout } from '@components/Layout'
import { BreakPoint } from '@lib/utils/breakpoints'

const Container = styled.main<{ breakpointSize: number }>`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 2rem;

    @media (max-width: ${props => props.breakpointSize}px) {
        width: 80%;
    }
`

const NotFound = () => (
    <Layout>
        <Container breakpointSize={BreakPoint.MinimumLarge - 1}>
            <h1>Sorry! The page you&apos;re looking for is not on my website.</h1>
            <small>
                But you might want to check my&nbsp;
                <Link to='/blog'>articles</Link> or know more&nbsp;
                <Link to='/about'>about me</Link>!
            </small>
        </Container>
    </Layout>
)

export default NotFound
