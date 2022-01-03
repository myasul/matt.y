import styled from 'styled-components'

export const Introduction = styled.section<{breakpointSize: number}>`
    width: 70%;

    h1 {
        font-size: 4rem;
    }

    /* TODO: Make the text color below available globally */
    h3 {
        color: rgb(69, 73, 99);
        line-height: 2rem;
    }


    @media (max-width: ${props => props.breakpointSize}px) {
        width: 100%;
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
        width: 100%;
        color: rgb(69, 73, 99);
        line-height: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
    }
`

export const HomeContainer = styled.main<{breakpointSize: number}>`
    margin: 5rem auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;

    @media (max-width: ${props => props.breakpointSize}px) {
        margin-top: 0;
    }
`