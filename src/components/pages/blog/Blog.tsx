import React from 'react'

import { BreakPoint } from '@lib/utils/breakpoints'
import { PostPlain } from '@shared-types/post'
import { Layout } from '@components/Layout'
import { HighlightList } from './HighlightList'
import { BlogContainer, BlogHeader } from './styles'

export const Blog = ({ highlights }: { highlights: PostPlain[] }) => {
    return (
        <Layout>
            <BlogContainer>
                <BlogHeader breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <h1>Posts</h1>
                </BlogHeader>
                <HighlightList highlights={highlights} postsPerCol={2}/>
            </BlogContainer>
        </Layout>
    )
}
