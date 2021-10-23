import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 65vw;
    margin-top: 3rem;
`

export const AboutDescription = styled.div`
    width: 50%;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;
    p {
        margin-top: 0;
    }
`

export const AboutBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const AboutImageContainer = styled.div`
    width: 40%;
`

export const AboutHeader = styled.h1`
    text-align: left;
`