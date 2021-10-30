type Edge = {
    node: {
        body: string
        frontmatter: {
            title: string
            published: string
            slug: string
        }
    }
}

export type BlogQuery = {
    allMdx: {
        edges: Edge[]
    }
}
