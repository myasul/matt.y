import styled from 'styled-components'

export const Title = styled.h1<{ breakpointSize: number }>`
    font-size: 3.5rem;
    text-align: left;
    width: 100%;
    color: black;
    word-break: break-word;

    @media (max-width: ${props => props.breakpointSize}px) {
        font-size: 2.3rem;
    }
`

export const TitleMeta = styled.div`
    border-top: 1px solid #EFF4F8;
    width: 100%;
`

export const BlogContainer = styled.article<{ breakpointSize: number }>`
    display: grid;
    grid-template-columns: 1fr min(80ch, 100%) 1fr;
    font-size: 1.1rem;
    font-weight: 100;

    * {
        grid-column: 2;
    }

    pre {
        font-size: 0.9rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media (max-width: ${props => props.breakpointSize}px) {
        grid-template-columns: 1fr min(80ch, 90%) 1fr;
    }
`
