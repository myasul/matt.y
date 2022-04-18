import * as React from 'react'
import { Helmet } from 'react-helmet'
import { compile } from 'path-to-regexp'

import { useSiteMetadata } from '../../../lib/hooks/use-site-metadata'
import { Post } from '../../../types/post'
import { getSrc } from 'gatsby-plugin-image'

const toPost = compile('/:slug([a-zA-Z0-9-]+)/')


// {/* TODO: Tags should be added here */}
// {/* <meta property="article:tag" content="" key="" /> */}
// {/* <meta property="og:image" content={imageUrl} />
// <meta property="og:image:secure_url" content={imageUrl} />
// <meta property="og:image:type" content="image/jpeg" />
// <meta property="og:image:width" content="640" />
// <meta property="og:image:height" content="360" />
// <meta property="og:image:alt" content="Post cover" /> */}


// {/* Meta properties to transform links in
// the website as cards in twitter */}
// <meta property="twitter:card" content="summary_large_image" />
// <meta property="twitter:title" content={post.title} />
// <meta property="twitter:description" content={post.description} />
// <meta property="twitter:url" content={postUrl} />
// <meta property="twitter:image" content={imageUrl} />
// <meta property="twitter:label1" content="Written by" />
// <meta property="twitter:data1" content={author.name} />
// <meta property="twitter:label2" content="Filed under" />
// {/* TODO: Tags should be added here */}
// <meta property="twitter:data2" content="" />
// {/* TODO: Tags should be added here */}
// <meta property="twitter:creator" content={author.usernames.twitter} />

export const MetaTags = ({ post }: { post: Post }) => {
    const { author, site } = useSiteMetadata()

    const postUrl = `${site.url}/blog${toPost({ slug: post.slug })}`
    const imageUrl = `${site.url}${getSrc(post.thumbnail) ?? ''}`

    return (
        <Helmet titleTemplate="%s">
            <title>{post.title}</title>
            <meta name="description" content={post.description} />
            <link rel="canonical" href={postUrl} />

            {/* Meta properties to transform links in
            the website as cards in FB and Messenger */}
            <meta property="og:site_name" content={site.metaTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${post.title} | ${author.name}`} />
            <meta property="og:description" content={post.description} />
            <meta property="og:url" content={postUrl} />
            <meta name="author" property="article:author" content={author.profiles.facebook} />
            <meta property="article:published_time" content={post.published} />
            <meta property="fb:page_id" content="3164064200532295"/>
        </Helmet>
    )
}
