import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tesfamichael Molla`,
    siteUrl: `https://tesfamichael.dev/`,
    description:
      "Tesfamichael Molla is a backend developer based in Poland. Currently working on USSD mobile banking and Fraud management systems at Equity Bank Limited.",
    image: "/profile.jpeg",
    twitterUsername: "@hope_miky10",
    og: {
      siteName: "Tesfamichael Portfolio",
      twitterCreator: "@hope_miky10",
    },
  },

  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
    `gatsby-plugin-open-graph-images`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tesfamichael`,
        short_name: `Hope1074`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: "minimal-ui",
        icon: "static/profile.jpeg",
      },
    },
    // "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
        template: "<div class=''>Custom Loading Page</div>",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/fav_icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
