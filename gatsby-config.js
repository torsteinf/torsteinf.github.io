module.exports = {
  siteMetadata: {
    title: `Torstein Frogner`,
    description: `Nettside for Torstein Frogner. Webutvikling, portefølje.`,
    author: `Torstein Frogner`,
    siteUrl: `https://www.torsteinfrogner.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117828415-1",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.torsteinfrogner.com`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Torstein Frogner`,
        short_name: `torsteinf`,
        start_url: `/`,
        background_color: `#183B66`,
        theme_color: `#183B66`,
        display: `standalone`,
        include_favicon: true, // Include favicon
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
