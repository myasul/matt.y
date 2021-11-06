import styled from 'styled-components'

export const Introduction = styled.section`
    margin-top: 7rem;
    width: 60%;

    h1 {
        font-size: 3rem;
    }

    h3 {
        color: rgb(69, 73, 99);
        line-height: 2rem;
    }
`

export const BlogSectionContainer = styled.section`
    margin-top: 5rem;
    
    a {
        color: black;
    }

    h2 {
        a:hover {
            color: #ed7842 !important;
        }
    }

    h4 {
        width: 70%;
        color: rgb(69, 73, 99);
        line-height: 2rem;
        margin-bottom: 3rem;
    }
`

export const HomeContainer = styled.main`
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`