const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/404.js"))),
  "component---src-pages-affiliates-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/affiliates.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/index.js"))),
  "component---src-pages-press-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/press.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/privacy.js"))),
  "component---src-pages-team-pennybank-js": hot(preferDefault(require("/Users/rlterry/Desktop/pennybank-landing/src/pages/team-pennybank.js")))
}

