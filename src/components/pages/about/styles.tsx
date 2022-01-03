import styled from 'styled-components'

export const AboutIntro = styled.div<{breakpointSize: number}>`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 85%;

    h1 {
        color: black;
        text-align: left;
        font-size: 4rem;
        margin: auto 0;
    }

    h2 {
        font-weight: 100;
        font-size: 2rem;
    }


    @media (max-width: ${props => props.breakpointSize}px) {
        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 1.7rem;
            font-weight: lighter;
        }
    }
`

export const AboutBody = styled.div<{breakpointSize: number}>`
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: ${props => props.breakpointSize}px) {
        grid-template-columns: 1fr;
    }
`

export const AboutContainer = styled.div<{breakpointSize: number}>`
    display: flex;
    flex-direction: column;
    height: 85%;
    padding-top: 3rem;
    justify-content: space-evenly;
    margin: auto 1.5rem;

    @media (max-width: ${props => props.breakpointSize}px) {
        padding-top: 1rem;
    }
`

export const AboutDescription = styled.div`
    width: 100%;
    font-size: 1.2rem;
    line-height: 2.5rem;
    text-align: left;
    p { margin-top: 0;}
`

export const AboutImageContainer = styled.div`
    width: 80%;
    border-radius: 5px;
    margin: 0 auto;
`