module.exports = {
  siteMetadata: {
    title: `Colorblind Environment Themes`,
    description: `Helping colorblind developers find accessible environment themes which work best for them. Search for themes for your preferred programming environments based on your colorblindness`,
    author: `@dan_spratling`,
  },
  mapping: { "Theme.images": `File.relativePath` },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themeImages`,
        path: `${__dirname}/src/images/themes/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: "gatsby-plugin-emoji-favicon",
      options: {
        emoji: "🌈",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Rokkitt", "Roboto:300,400"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300, 400`],
          },
          {
            family: `Rokkitt`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `colorblind-accessible-environment-themes`,
        short_name: `colorblind-environments`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
