import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../Layout'
import { BlogHighlights } from '../../types'
import { HighlightList } from '../blog/HighlightList'

const Introduction = styled.section`
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

const BlogSectionContainer = styled.section`
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

export const Home = ({ highlights }: { highlights: BlogHighlights[] }) => {
    return (
        <Layout>
            <Introduction>
                <h1>Hey, I'm Matt!</h1>
                <h3>
                    I'm a software developer at <a href='https://okrasolar.com' target='_blank'>Okra Solar</a>.
                    This website is my first open-source project where I share my thoughts, learnings, and ideas! Feel free to roam around and read about my shenanigans.
                    I hope you'll learn a thing or two afterwards!
                </h3>
            </Introduction>
            <BlogSectionContainer>
                <h2><Link to='/blog'>My Kwaderno</Link></h2>
                <h4>Proin in mi sit amet nisi dictum sagittis. In rutrum enim eu orci molestie, vitae luctus dui tristique.</h4>
                <HighlightList highlights={highlights} />
            </BlogSectionContainer>
        </Layout>
    )
}
