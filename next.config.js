const withPWA = require('next-pwa')

module.exports = withPWA({
  basePath: '/gitmoji',
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
})
