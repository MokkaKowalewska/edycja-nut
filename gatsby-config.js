module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Jost`, `Righteous`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WORDPRESS",
        fieldName: "wordpress",
        url: "http://wp.edycjanut.pl/graphql",
        refetchInterval: 60,
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "ACF",
    //     fieldName: "acf",
    //     url: "http://wp.edycjanut.pl/wp-json/acf/",
    //     refetchInterval: 60,
    //   },
    // },
    {
      resolve: "gatsby-plugin-graphql-image",
      options: {
        schemaName: "WORDPRESS",
        imageFieldName: "sourceUrl",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "wp.edycjanut.pl",
        protocol: "http",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#83BBC9`,
    //     theme_color: `#83BBC9`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
