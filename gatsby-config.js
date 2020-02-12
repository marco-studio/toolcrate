module.exports = {
  siteMetadata: {
    title: `The Tool Crate`,
    description: `Weekly Podcast Radio Show focused on the world of Music Production & the Business of Music`,
    author: `TIMOTHY TITSWORTH`,
    twitter: ``,
    instagram: `https://www.instagram.com/toolcratebeats/`,
    facebook: `https://www.facebook.com/watch/thetoolcrate/`,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1049686848?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cDovL3RoZXRvb2xjcmF0ZS5wb2RvbWF0aWMuY29tL3JzczIueG1s`,
    pocket: `https://pca.st/itunes/1049686848`,
    spotify: `https://open.spotify.com/show/3Xh4uxWtCg8jxM8ZJRnm8V`,
    overcast: `https://overcast.fm/itunes1049686848`,
    castbox: `https://castbox.fm/vic/1049686848`,
    castro: `https://castro.fm/itunes/1049686848`,
    podbean: `https://player.fm/series/http%253A%252F%252Fthetoolcrate%252Epodomatic%252Ecom%252Frss2%252Exml`,
    beaker: `https://www.breaker.audio/shows?feed_url=http%3A%2F%2Fthetoolcrate.podomatic.com%2Frss2.xml`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://thetoolcrate.podomatic.com/rss2.xml`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
