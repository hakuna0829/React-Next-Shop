// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

// module.exports = withCSS({
//   /* config options here */
//   cssModules: false
// })
module.exports = withSass({
  /* config options here */
})