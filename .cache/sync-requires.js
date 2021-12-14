const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/404.js"))),
  "component---src-pages-affiliates-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/affiliates.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/index.js"))),
  "component---src-pages-leaderboards-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/leaderboards.js"))),
  "component---src-pages-press-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/press.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/privacy.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/team.js")))
}

