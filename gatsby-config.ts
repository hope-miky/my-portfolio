import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://tesfamichael.dev/`,
    og: {
      siteName: 'Tesfamichael Portfolio',
      twitterCreator: '@hopemichael1074',
    },
  },
  
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark", 
    'gatsby-plugin-postcss', 
    `gatsby-plugin-open-graph-images`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/fav_icon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images"
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
