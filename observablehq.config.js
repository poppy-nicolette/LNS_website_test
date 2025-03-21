// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Literacy Nova Scotia",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Pages",
      pages: [
        { name: "Summary Dashboard", path: "/example-dashboard" },
        { name: "Point in time Report", path: "/example-report" },
        { name: "Bibliometric Analysis", path: "/biblio_analysis" },
        { name: "Project Documentation", path: "/project_documentation" },
      ],
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="icon.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "docs",

  // Some additional configuration options and their defaults:
  theme: "ink", // try "default", "light", "dark", "slate", "air", "cotton", "coffee", "deep-space", "ink", "midnight" etc.
  // header: "", // what to show in the header (HTML)
  footer: "Built with Observable. And by Poppy Riddle 2025.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  //search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
