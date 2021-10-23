import React, { useEffect } from 'react'
import { Layout } from '../../Layout'
import { PostHighlights } from './types'

type Props = {
    highlights: PostHighlights[]
}

export const Blog = ({ highlights }: Props) => {
    console.log(highlights)

    return (
        <Layout>
            <div>This is my blog!</div>
        </Layout>
    )
}
