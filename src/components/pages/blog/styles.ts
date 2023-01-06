import styled from 'styled-components'

export const BlogContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Description = styled.div`
    height: 100%;
    margin-bottom: 0.5rem;
`

export const BlogHeader = styled.section<{ breakpointSize: number }>`
    h1 {
        color: black;
        font-size: 3rem;
    }

    h3 {
        color: rgb(69, 73, 99);
        line-height: 2rem;
    }

    text-align: left;
    width: 70%;

    @media (max-width: ${props => props.breakpointSize}px) {
        width: 100%;

        h1 { margin-top: 1rem; }
    }
`

export const HighlightListContainer = styled.div<{ breakpointSize: number, postsPerCol: number }>`
    display: grid;
    grid-template-columns: ${props => Array(props.postsPerCol).fill('1fr').join(' ')};
    grid-template-rows: auto;
    gap: 1.5rem;

    @media (max-width: ${props => props.breakpointSize}px) {
        justify-content: space-evenly;
        grid-template-columns: 1fr;
    }
`

export const HighlightCardContainer = styled.div<{ breakpointSize: number }>`
    border: 1px solid rgba(52, 61, 68, 0.05);
    box-shadow: 0px 1px 2px rgba(52, 61, 68, 0.1);
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 6px;

    &::before {
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: transparent;
        transition:background-color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    }

    &:hover {
        transform: scale(1.015);
        border-radius: 6px;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
        &::before {
            background-color: #F98B3B;
        }
        cursor: pointer;
        transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    }
`

export const Title = styled.h3`
    font-weight: bolder;
    color: black;
`

export const Metadata = styled.div`
    border-top: 1px solid rgb(235,236,242);
    height: 30%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
