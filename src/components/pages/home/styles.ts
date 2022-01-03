import styled from 'styled-components'

export const Introduction = styled.section`
    margin-top: 3rem;
    width: 90%;

    h1 {
        font-size: 4rem;
    }

    /* TODO: Make the text color below available globally */
    h3 {
        color: rgb(69, 73, 99);
        line-height: 2rem;
    }
`

export const BlogSectionContainer = styled.section`
    margin-top: 1rem;
    
    a {
        color: black;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        a:hover {
            color: #ed7842 !important;
        }
    }

    h4 {
        width: 70%;
        color: rgb(69, 73, 99);
        line-height: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
    }
`

export const HomeContainer = styled.main`
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`