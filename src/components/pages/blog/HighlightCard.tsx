import { navigate } from 'gatsby'
import React from 'react'

import { BreakPoint } from '@lib/utils/breakpoints'
import { DateUtil } from '@lib/utils/DateUtil'
import { PostPlain } from '@shared-types/post'

import { Description, HighlightCardContainer, Metadata, Title } from './styles'

export const HighlightCard = ({ highlight }: { highlight: PostPlain }) => {
    const handleClick = () => { void navigate(`/blog/${highlight.slug}`) }

    return (
        <HighlightCardContainer
            onClick={handleClick}
            breakpointSize={BreakPoint.MinimumMedium - 1}
        >
            <Title>{highlight.title}</Title>
            <Description>{highlight.description}</Description>
            <Metadata>
                <h6>{DateUtil.toAbbrevDateTime(new Date(highlight.published))}</h6>
            </Metadata>
        </HighlightCardContainer>
    )
}
