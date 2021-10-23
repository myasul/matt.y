import styled from 'styled-components'

export const BlogContainer = styled.div`
    margin: 2rem auto;
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
`

export const HighlightListContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`