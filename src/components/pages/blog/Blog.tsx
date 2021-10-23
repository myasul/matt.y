import React from 'react'

import { Layout } from '../../Layout'
import { HighlightList } from './HighlightList'
import { BlogContainer, BlogHeader } from './styles'
import { BlogHighlights } from './types'


export const Blog = ({ highlights }: { highlights: BlogHighlights[] }) => {
    return (
        <Layout>
            <BlogContainer>
                <BlogHeader>
                    <h1>My Digital Sala</h1>
                    <h3>
                        Sala <i>(living room)</i> in Filipino is a room where you mingle with friends and family.
                        It's a place where you share your ideas, adventures, learnings and such. My digital sala is filled with the same things along with my notes, rants, and everything in between.
                    </h3>
                </BlogHeader>
                <HighlightList highlights={highlights} />
            </BlogContainer>
        </Layout>
    )
}
