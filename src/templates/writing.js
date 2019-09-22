import React from "react"
import { graphql } from "gatsby"
import PostWrapper from "../components/post-wrapper"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostWrapper>
      <div>
        {/* <h1>{post.frontmatter.title}</h1> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </PostWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
