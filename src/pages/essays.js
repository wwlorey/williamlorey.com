import React from "react"
import { Link, graphql } from "gatsby"
import PostWrapper from "../components/post-wrapper"

export default ({ data }) => {
  return (
    <PostWrapper>
        <h2>Essays</h2>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
              {/* <p>{node.excerpt}</p> */}
            </Link>
          </div>
        ))}
    </PostWrapper>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
