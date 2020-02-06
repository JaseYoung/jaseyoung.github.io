import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PostLink from '../components/post-link.js'

const HomeIndex = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  const siteTitle = 'Jason Young'
  const siteDescription = 'Personal Site'
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Blog Posts</h2>
          </header>
          <p>
            These blog posts are helpful notes from setting up a macbook from
            scratch to starting development.
            <br /> To gists and useful tools.
          </p>
          <div>{Posts}</div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
