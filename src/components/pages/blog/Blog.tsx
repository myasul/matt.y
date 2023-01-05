import React from 'react'

import { Layout } from '../../Layout'
import { HighlightList } from './HighlightList'
import { BlogContainer, BlogHeader } from './styles'
import { BreakPoint } from '../../../lib/utils/breakpoints'
import { PostPlain } from '../../../types/post'

export const Blog = ({ highlights }: { highlights: PostPlain[] }) => {
    return (
        <Layout>
            <BlogContainer>
                <BlogHeader breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <h1>Posts</h1>
                </BlogHeader>
                <HighlightList highlights={highlights} />
            </BlogContainer>
        </Layout>
    )
}
