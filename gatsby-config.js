1/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: require('./gatsby/config/site-metada'),
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    `gatsby-remark-smartypants`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            linkImagesToOriginal: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            showLineNumbers: true,
                            noInlineHighlight: false
                        },
                    },
                ],
            }
        },
    ]
}
