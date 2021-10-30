const createBlogs = require('./gatsby/page/create-blogs')

const query = `
    {
        allMdx(
            sort: {
                fields: [frontmatter___published],
                order: DESC
            }
            filter: {
                frontmatter: {
                    type: {
                        eq: "post"
                    }
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data, errors } = await graphql(query)

    if (errors) {
        console.log(errors)
        throw errors
    }

    const posts = data.allMdx.edges

    createBlogs(createPage, posts)
}
