import React from 'react'

import { Layout } from '../../Layout'
import { HighlightList } from './HighlightList'
import { BlogContainer, BlogHeader } from './styles'
import { BlogHighlights } from '../../types'


export const Blog = ({ highlights }: { highlights: BlogHighlights[] }) => {
    return (
        <Layout>
            <BlogContainer>
                <BlogHeader>
                    <h1>My Digital Kwaderno</h1>
                    <h3>
                        Kwaderno is notebook in Filipino. I loved to scribble and just write in my notebook when I was a kid.
                        Learning to program gave me the opportunity to my own digital notebook. This is a place where I write and dump my thoughts, ideas, and learnings.
                        
                    </h3>
                </BlogHeader>
                <HighlightList highlights={highlights} />
            </BlogContainer>
        </Layout>
    )
}
