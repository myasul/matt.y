import styled from 'styled-components'

export const BlogContainer = styled.div`
    margin: 2rem auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`

export const BlogHeader = styled.section`
    h1 {
        font-size: 3rem;
    }
    h3 {
        color: rgb(69, 73, 99);
        line-height: 2rem;
    }
    text-align: left;
    width: 70%;
    margin-bottom: 2rem;
`

export const HighlightListContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`

export const HighlightCardContainer = styled.div`
    color: rgb(69, 73, 99);
    border: 1px solid rgba(52, 61, 68, 0.05);
    box-shadow: 0px 1px 2px rgba(52, 61, 68, 0.1);
    max-width: 25vw;
    grid-column: 1/4;
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
    height: 70%;
`

export const Metadata = styled.div`
    border-top: 1px solid rgb(235,236,242);
    height: 30%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`