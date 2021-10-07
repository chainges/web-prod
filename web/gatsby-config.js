// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});


const path = require("path");
const clientConfig = require("./client-config");
const { languages, baseLanguage } = require('./src/intl/languages');

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: languages.map((language) => language.name),
        // language file path
        defaultLanguage: baseLanguage.name,
        // option to redirect to `/en` when connecting `/`
        // redirect: true,
      },
    },
    `gatsby-plugin-styled-components`,
    { resolve: `gatsby-plugin-emotion` }
  ]
};
