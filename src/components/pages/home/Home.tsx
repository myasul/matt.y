import { Link } from 'gatsby'
import React from 'react'
import { BreakPoint } from '../../../lib/utils/breakpoints'
import { Layout } from '../../Layout'
import { BlogHighlights } from '../../types'
import { HighlightList } from '../blog/HighlightList'
import { BlogSectionContainer, HomeContainer, Introduction } from './styles'

export const Home = ({ highlights }: { highlights: BlogHighlights[] }) => {
    return (
        <Layout>
            <HomeContainer breakpointSize={BreakPoint.MinimumMedium - 1}>
                <Introduction breakpointSize={BreakPoint.MinimumMedium - 1}>
                    <h1>Hey, I&apos;m Matt!</h1>
                    <h3>
                        I&apos;m a software developer at <a href='https://okrasolar.com' target="_blank" rel='noreferrer'>Okra Solar</a>.
                        This website is my first open-source project where I share my thoughts, learnings, and ideas! Feel free to roam around and read about my shenanigans.
                        I hope you&apos;ll learn a thing or two afterwards!
                    </h3>
                </Introduction>
                <BlogSectionContainer>
                    <h2><Link to='/blog'>Kwaderno</Link></h2>
                    <h4>Consistently tended collection of notes, articles, and tutorials.</h4>
                    <HighlightList highlights={highlights} />
                </BlogSectionContainer>
            </HomeContainer>
        </Layout>
    )
}
