import styled, { css } from 'styled-components'

const PrismStyles = css`
     /**
     * Add back the container background-color, border-radius, padding, margin
     * and overflow that we removed from <pre>.
     */
    .gatsby-highlight {
      /* padding: 1em; */
    }

    /**
     * Remove the default PrismJS theme background-color, border-radius, margin,
     * padding and overflow.
     * 1. Make the element just wide enough to fit its content.
     * 2. Always fill the visible space in .gatsby-highlight.
     * 3. Adjust the position of the line numbers
     */
    .gatsby-highlight pre[class*="language-"] {
      border-radius: 10px;
    }

    .gatsby-highlight-code-line {
      background-color: #feb;
      display: block;
      margin-right: -1em;
      margin-left: -1em;
      padding-right: 1em;
      padding-left: 0.75em;
    }

    /* Adjust the position of the line numbers */
    .gatsby-highlight pre[class*="language-"].line-numbers {
      padding-left: 3em;
      margin: 1rem 0;
    }

    .gatsby-highlight pre[class*="language-"] span.line-numbers-rows {
       padding: 1rem 0.5rem !important;
       left: 10px !important;
       top: 0;
       border: 0;
    }

    code.language-text {
        background: #F0F0F0;
        color: #334259;
        padding: 2px 8px;
        margin: 0px 4px;
    }

`

export const Title = styled.h1<{ breakpointSize: number }>`
    font-size: 3.5rem;
    text-align: left;
    width: 100%;
    color: black;

    @media (max-width: ${props => props.breakpointSize}px) {
        font-size: 2.3rem;
    }
`

export const TitleMeta = styled.div`
    border-top: 1px solid #EFF4F8;
    width: 100%;
`

export const BlogContainer = styled.article<{ breakpointSize: number }>`
    margin: 0 auto;
    padding: 0 1rem;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr min(80ch, 100%) 1fr;
    * {
        grid-column: 2;
    }

    @media (max-width: ${props => props.breakpointSize}px) {
        margin: 0 2rem;
        padding: 0;
    }

    ${PrismStyles}
`
