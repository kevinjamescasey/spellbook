/**
 * @type {import('gatsby').GatsbyConfig}
 */
import remarkGfm from "remark-gfm";

import { dirname } from "path";
import { fileURLToPath } from "url";

// https://www.gatsbyjs.com/docs/how-to/custom-configuration/es-modules/#migrating-from-commonjs-to-es-modules
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  siteMetadata: {
    title: `spellbook`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/android-chrome-512x512.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  ],
};
