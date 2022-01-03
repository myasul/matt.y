import React, { useEffect } from 'react'
import styled from 'styled-components'

import { BlogHighlights } from '../../types'
import { HighlightListContainer } from './styles'
import { HighlightCard } from './HighlightCard'

export const HighlightList = ({ highlights }: { highlights: BlogHighlights[] }) => (
    <HighlightListContainer>
        {
            highlights.map(highlight => (
                <HighlightCard key={highlight.title} highlight={highlight} />
            ))
        }
    </HighlightListContainer>
)
