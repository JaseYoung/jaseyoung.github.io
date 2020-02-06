import React from 'react'
import { Link } from 'gatsby'
const PostLink = ({ post }) => (
  <div id="posts" style={{}}>
    <h3 style={{}}>
      <Link style={{ boxShadow: 'none' }} to={post.frontmatter.path}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <small>{post.frontmatter.date}</small>
    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
  </div>
)
export default PostLink
