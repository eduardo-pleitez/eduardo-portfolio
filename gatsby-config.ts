import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'portfolio-project',
    siteUrl: 'https://www.yourdomain.tld'
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', 'gatsby-transformer-json', {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'images',
      'path': './src/images/'
    },
    __key: 'images'
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: './data/',
    },
    __key: 'data'
  },
  {
    resolve: 'gatsby-omni-font-loader',
    options: {
      enableListener: true,
      preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
      web: [
        {
          name: 'Oswald, Noto Sans',
          file: 'https://fonts.googleapis.com/css?family=Oswald|Noto+Sans',
        },
      ],
    },
  }
  ]
};

export default config;
