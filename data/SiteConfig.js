module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "tink-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "evan", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "T-INK", // Site title.
  siteTitleAlt: "T-INK", // Alternative site title for SEO.
  siteLogo:
    "/logos/tink-circle-512.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://t-ink.org", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "T-INK Website.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Evan", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "t-ink", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Android App",
      url: "https://play.google.com/store/apps/details?id=com.tink.app"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "T-INK" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
