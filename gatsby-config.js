/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { siteUrl } = require('./gatsby/config/site-metada')

require('dotenv').config({ path: '.env' })

module.exports = {
    /* Your site config here */
    siteMetadata: require('./gatsby/config/site-metada'),
    trailingSlash: "always",
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-sharp`,
            options: { defaults: { quality: 100 } }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`
            }
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
                            quality: 100
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            showLineNumbers: true,
                            noInlineHighlight: false
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GA_TRACKING_ID],
                pluginConfig: { head: true }
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    {
                        pages: allSitePage {
                            nodes {
                                path
                            }
                        }
                    }
               `,
                resolveSiteUrl: () => siteUrl,
                resolvePages: ({ pages: { nodes: allPages } }) => allPages,
                serialize: ({ path }) => ({ url: path })
            }
        },
        {
          resolve: `gatsby-alias-imports`,
          options: {
            aliases: {
              "@components": "src/components",
              "@pages": "src/pages",
              "@lib": "src/lib",
              "@types": "src/types"
            }
          }
        }
    ]
}
