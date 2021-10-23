import React from 'react'
import styled from 'styled-components'
import { DateUtil } from '../../../utils/DateUtil'

import { BlogHighlights } from './types'

const Container = styled.div`
    border: 1px solid rgba(52, 61, 68, 0.05);
    max-width: 15vw;
    grid-column: 1/4;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
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
