import React from 'react'
import styled from 'styled-components'
import { DateUtil } from '../../../utils/DateUtil'

import { BlogHighlights } from './types'

const Container = styled.div`
    border: 1px solid rgba(52, 61, 68, 0.05);
    min-width: 15vw;
    grid-column: 1/4;
    margin: 0.5rem auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`

const Title = styled.h4`
    height: 60%;
`

const Metadata = styled.div`
    border-top: 1px solid rgb(235,236,242);
    margin: 0;
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
