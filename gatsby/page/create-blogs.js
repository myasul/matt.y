const path = require('path')

const POST_COMPONENT_PATH = path.resolve(__dirname, '../../src/components/templates/blog/Blog.tsx')

function createBlogs (createPage, posts) {
    for (const post of posts) {
        const { node: { frontmatter: { slug } } } = post
        const options = {
            path: `/blog/${slug}`,
            component: POST_COMPONENT_PATH,
            context: { slug }
        }

        createPage(options)
    }
}

module.exports = createBlogs