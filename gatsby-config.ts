import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'portfolio-project',
    siteUrl: 'https://www.yourdomain.tld'
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'images',
      'path': './src/images/'
    },
    __key: 'images'
  }]
};

export default config;
