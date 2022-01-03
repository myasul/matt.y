import React from 'react'

import { Layout } from '../../Layout'
import { HighlightList } from './HighlightList'
import { BlogContainer, BlogHeader } from './styles'
import { BlogHighlights } from '../../types'
import { BreakPoint } from '../../../lib/utils/breakpoints'


export const Blog = ({ highlights }: { highlights: BlogHighlights[] }) => {
    return (
        <Layout>
            <BlogContainer>
                <BlogHeader breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <h1>Kwaderno</h1>
                    <h3>
                        Kwaderno is <i>notebook</i> in Filipino. I loved to scribble and write about anything in my notebook when I was a kid.
                        Learning to program gave me the opportunity to create my own digital notebook. This is a place where I write and dump my thoughts, ideas, and learnings.

                    </h3>
                </BlogHeader>
                <HighlightList highlights={highlights} />
            </BlogContainer>
        </Layout>
    )
}
