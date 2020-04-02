
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~assets/css/reset.css','~assets/common.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
     src: '~plugins/custom/rootFontSize.js', ssr: false
   },
   {
      src: '~plugins/vant.js', ssr: true
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
     '@nuxtjs/style-resources','@nuxtjs/axios'
  ],
   styleResources: {
    scss: '~assets/common.scss'
  },
  axios: {
      proxy: true
  },
  proxy: {
      '/api/': {
        target: 'http://xxx:xxx',
        pathRewrite: {'^/api': ''}}
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
