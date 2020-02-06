import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { rhythm, scale } from '../components/typography.js'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const siteDescription = data.excerpt
  return (
    <div className="blog-post-container">
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${frontmatter.title}`}
      />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {frontmatter.date}
        </p>
        {/*<div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />*/}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {/*<code><pre>{JSON.stringify(post,null,4)}</pre></code>*/}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </div>
      {/* <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div> */}
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
