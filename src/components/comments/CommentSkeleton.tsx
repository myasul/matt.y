import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '../Skeleton'

type TextProps = {
    readonly widthPercentage: number
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    margin: 30px 0;
    /* width: 100%; */
`

const Header = styled.div`
    background: #f2f2f2;
    height: 45px;
    margin-bottom: 16px;
`

const Avatar = styled.div`
    width: 53px;
    height: 45px;
    background: #f2f2f2;
    margin-right: 20px;
`

const Text = styled.div<TextProps>`
    width: ${(props) => props.widthPercentage}%;
    margin-bottom: 16px;
    background: #F2F2F2;
    height: 10px;
`

export const CommentSkeleton = () => (
    <Container>
        <Avatar />
        <div style={{ width: '100%' }}>
            <Header />
            <Text widthPercentage={60} />
            <Text widthPercentage={100} />
            <Text widthPercentage={70} />
            <Text widthPercentage={100} />
            <Skeleton />
        </div>
        <Skeleton />
    </Container>
)
