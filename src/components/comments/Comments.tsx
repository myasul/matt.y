import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { H3 } from '../mdx/Headings'
import { CommentSkeleton } from './CommentSkeleton'

const WEBSITE_REPO = 'myasul/matt.y'

const CommentThreadContainer = styled.div`
    margin-top: 2rem;
`

const Delimiter = styled.div`
    margin-top: 2rem;
    border-top: 1px solid #EFF4F8;
    width: 100%;
`

const createUtterancesScriptTag = () => {
    const scriptElement = document.createElement('script')

    scriptElement.async = true
    scriptElement.src = 'https://utteranc.es/client.js'
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.setAttribute('repo', WEBSITE_REPO)
    scriptElement.setAttribute('issue-term', 'pathname')
    scriptElement.setAttribute('label', 'comments')
    scriptElement.setAttribute('theme', 'github-light')
    scriptElement.setAttribute('id', 'utterances')

    return scriptElement
}

export const Comments = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const commentBox = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (commentBox?.current) {
            const scriptElement = createUtterancesScriptTag()

            scriptElement.addEventListener('load', () => {
                const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

                if (iframe) iframe.onload = () => setTimeout(() => setIsLoaded(true), 1000)
            })

            commentBox.current.appendChild(scriptElement)
        } else {
            console.error('Failed to add utterances comments.')
        }
    }, [])

    return (
        <section className='comments'>
            <Delimiter />
            <H3>Comments</H3>
            {!isLoaded && <CommentSkeleton />}
            <CommentThreadContainer ref={commentBox} />
        </section>
    )
}
