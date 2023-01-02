import React from 'react'

import { HighlightListContainer } from './styles'
import { HighlightCard } from './HighlightCard'
import { BreakPoint } from '../../../lib/utils/breakpoints'
import { PostPlain } from '../../../types/post'

export const HighlightList = ({ highlights }: { highlights: PostPlain[] }) => (
    <HighlightListContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
        {
            highlights.map(highlight => (
                <HighlightCard key={highlight.title} highlight={highlight} />
            ))
        }
    </HighlightListContainer>
)
