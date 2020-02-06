const siteMeta = {
  title: 'Jason Young - Personal Website',
  author: 'Jason Young',
  description: 'A website / blog to house personal information and projects',
  siteUrl: `https://jaseyoung.github.io/`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}

module.exports = {
  siteMetadata: siteMeta,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-remark-prismjs',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/components/typography',
      },
    },
  ],
}
