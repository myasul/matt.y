import React from 'react'

import { BlogHighlights } from '../../types'
import { HighlightListContainer } from './styles'
import { HighlightCard } from './HighlightCard'
import { BreakPoint } from '../../../lib/utils/breakpoints'

export const HighlightList = ({ highlights }: { highlights: BlogHighlights[] }) => (
    <HighlightListContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
        {
            highlights.map(highlight => (
                <HighlightCard key={highlight.title} highlight={highlight} />
            ))
        }
    </HighlightListContainer>
)
