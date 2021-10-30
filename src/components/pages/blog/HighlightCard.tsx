import React from 'react'
import styled from 'styled-components'
import { DateUtil } from '../../../utils/DateUtil'

import { BlogHighlights } from '../../types'

const Container = styled.div`
    border: 1px solid rgba(52, 61, 68, 0.05);
    box-shadow: 0px 1px 2px rgba(52, 61, 68, 0.1);
    max-width: 15vw;
    grid-column: 1/4;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 6px;

    &::before {
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: transparent;
        transition:background-color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    }

    &:hover {
        transform: scale(1.015);
        border-radius: 6px;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
        &::before {
            background-color: #F98B3B;
        }
    }
`

const Title = styled.h3`
    height: 70%;
`

const Metadata = styled.div`
    border-top: 1px solid rgb(235,236,242);
    height: 30%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const HighlightCard = ({ highlight }: { highlight: BlogHighlights }) => {
    return (
        <Container>
            <Title>{highlight.title}</Title>
            <Metadata>
                <h6>{DateUtil.toAbbrevDateTime(new Date(highlight.published))}</h6>
            </Metadata>
        </Container>
    )
}
