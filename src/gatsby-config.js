module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Alberto Mora`,
    siteTitleAlt: `Alberto Mora portfpolio`,
    siteHeadline: `Alberto Mora - Portfolio`,
    siteUrl: `https://portfolio.mora.wtf`,
    siteDescription: `Personal portfolio to show tome of my personal projects`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: ``,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
