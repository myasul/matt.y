type Edge = {
    node: {
        html: string
        frontmatter: {
            title: string
            published: string
        }
    }
}

export type BlogQuery = {
    allMarkdownRemark: {
        edges: Edge[]
    }
}
