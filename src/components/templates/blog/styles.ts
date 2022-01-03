import styled, { css } from 'styled-components'

const PrismStyles = css`
     /**
     * Add back the container background-color, border-radius, padding, margin
     * and overflow that we removed from <pre>.
     */
    .gatsby-highlight {
      padding: 1em;
    }

    /**
     * Remove the default PrismJS theme background-color, border-radius, margin,
     * padding and overflow.
     * 1. Make the element just wide enough to fit its content.
     * 2. Always fill the visible space in .gatsby-highlight.
     * 3. Adjust the position of the line numbers
     */
    .gatsby-highlight pre[class*="lan pguage-"] {
      border-radius: 10px;
      overflow: initial;
      float: left; /* 1 */
      min-width: 100%; /* 2 */
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

export const Title = styled.h1`
    font-size: 3.5rem;
    text-align: left;
    width: 100%;
`

export const TitleMeta = styled.div`
    border-top: 1px solid #EFF4F8;
    width: 100%;
`

export const TitleContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
`

export const BlogContainer = styled.article`
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;

    ${PrismStyles}
`

export const BodyContainer = styled.section`
    width: 85%;
    margin: 0 auto;
    margin-top: 6rem;
`