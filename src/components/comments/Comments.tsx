import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { H3 } from '../mdx/Headings'
import { CommentSkeleton } from './CommentSkeleton'

const WEBSITE_REPO = 'myasul/matt.y'

const CommentThreadContainer = styled.div<{ isVisible: boolean }>`
    margin-top: 2rem;
    display: ${props => props.isVisible ? 'block' : 'hidden'}
`

const Delimiter = styled.div`
    margin-top: 2rem;
    border-top: 1px solid #EFF4F8;
    width: 100%;
`

const createUtterancesScriptTag = () => {
    const script = document.createElement('script')

    script.async = true
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', WEBSITE_REPO)
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'comments')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('id', 'utterances')
    script.setAttribute('crossorigin', 'anonymous')

    return script
}

export const Comments = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const commentBox = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScriptLoad = () => {
            const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

            if (!iframe) return

            iframe.onload = () => {
                // Add delay to make sure comments are already rendered
                setTimeout(() => setIsLoaded(true), 500)
            }
        }

        const scriptElement = createUtterancesScriptTag()

        if (commentBox?.current) {
            scriptElement.addEventListener('load', handleScriptLoad)

            commentBox.current.appendChild(scriptElement)
        } else {
            console.error('Failed to add utterances comments.')
        }

        return () => scriptElement.removeEventListener('load', handleScriptLoad)
    }, [])

    return (
        <section className='comments'>
            <Delimiter />
            <H3>Comments</H3>
            {!isLoaded && <CommentSkeleton />}
            <CommentThreadContainer ref={commentBox} isVisible={isLoaded} />
        </section>
    )
}
