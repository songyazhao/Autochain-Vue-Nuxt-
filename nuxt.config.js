module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Autochain',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'AUTOCHAIN 车信链' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#ffbb00' },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/zh-cn', '/en', '/zh-hant']
  },
  css: [
    'normalize.css',
    { src: '~/styles/animate.styl', lang: 'stylus' },
    { src: '~/styles/scrollbar.styl', lang: 'stylus' },
    { src: '~/styles/layout.styl', lang: 'stylus' }
  ],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue-i18n', 'js-cookie'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('autoprefixer')({
        browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
      })
    ]
  }
}
