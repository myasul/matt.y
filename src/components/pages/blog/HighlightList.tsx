import React from 'react'

import { HighlightListContainer } from './styles'
import { HighlightCard } from './HighlightCard'
import { BreakPoint } from '../../../lib/utils/breakpoints'
import { PostPlain } from '../../../types/post'

type Props = {
    highlights: PostPlain[]
    postsPerCol: number
}

export const HighlightList = ({ highlights, postsPerCol }: Props) => (
    <HighlightListContainer
        breakpointSize={BreakPoint.MinimumMedium - 1}
        postsPerCol={postsPerCol}
    >
        {
            highlights.map(highlight => (
                <HighlightCard key={highlight.title} highlight={highlight} />
            ))
        }
    </HighlightListContainer>
)
