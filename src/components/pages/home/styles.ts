import styled from 'styled-components'

export const Introduction = styled.section<{breakpointSize: number}>`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
        color: black;
        font-size: 4rem;
    }

    h3 {
        line-height: 2rem;
    }

    @media (max-width: ${props => props.breakpointSize}px) {
        width: 100%;
    }
`

export const BlogSectionContainer = styled.section`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
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
        line-height: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
    }
`

export const HomeContainer = styled.main<{breakpointSize: number}>`
    display: flex;
    flex-direction: column;

    @media (max-width: ${props => props.breakpointSize}px) {
        margin-top: 0;
    }
`

export const AuthorImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
