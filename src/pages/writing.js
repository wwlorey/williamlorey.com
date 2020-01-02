import React from "react"
import { Link, graphql } from "gatsby"
import PostWrapper from "../components/post-wrapper"

export default ({ data }) => {
  return (
    <PostWrapper>
        <h2>Writing</h2>
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
    allMarkdownRemark(sort: {fields: [frontmatter___title], order: ASC}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
