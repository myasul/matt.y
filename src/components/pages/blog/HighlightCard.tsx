import { navigate } from 'gatsby'
import React from 'react'
import { DateUtil } from '../../../lib/utils/DateUtil'

import { BlogHighlights } from '../../types'
import { HighlightCardContainer, Metadata, Title } from './styles'


export const HighlightCard = ({ highlight }: { highlight: BlogHighlights }) => {
    return (
        <HighlightCardContainer onClick={() => navigate(`/blog/${highlight.slug}`)}>
            <Title>{highlight.title}</Title>
            <Metadata>
                <h6>{DateUtil.toAbbrevDateTime(new Date(highlight.published))}</h6>
            </Metadata>
        </HighlightCardContainer>
    )
}
