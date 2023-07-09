import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  router: {
    base: '/mangaSite/'
  },
  // router: {
  //   base: '/comicsAnime/'
  // },
  generate: {
    fallback: true
  },
  head: {
    titleTemplate: '%s - The Manhwa Maven',
    title: 'Manhwa Maven',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "~/assets/css/navbar/navbar.css",
    "~/assets/css/footer/footer.css",
    "~/assets/css/posts/popularposts/popularposts.css",
    "~/assets/css/posts/popularposts/popularpostsidebar.css",
    "~/assets/css/posts/latestupdates/latestupdates.css",
    "~/assets/css/posts/postdetail.css",

  ],
  // // Apollo GraphQL Options
  apollo: {
    cookieAttributes: {
      expires: 7 // optional, default: 7 (days)
    },
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Bearer', // optional, default: 'Bearer'
    // optional
    errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: '~/graphQl/clientConfig.js'
    }
  },

  // // Apollo GraphQL Options
  // apollo: {
  //   cookieAttributes: {
  //     expires: 7 // optional, default: 7 (days)
  //   },
  //   includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  //   authenticationType: 'Bearer', // optional, default: 'Bearer'
  //   // optional
  //   // required
  //   clientConfigs: {
  //     default: '~/graphql/clientConfig.js'
  //   }
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client' },
    // { src: "~/plugins/nhost/client.js", mode: 'client' },
  ],
  // client: {
  //   // ...
  //   plugins: [
  //     { src: "~/plugins/nhost/client.js", mode: 'client' },

  //   ],
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Apollo for GraphQL
    '@nuxtjs/apollo',

  ],
  // apollo: {
  //   cookieAttributes: {
  //     expires: 7 // optional, default: 7 (days)
  //   },
  //   includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  //   authenticationType: 'Bearer', // optional, default: 'Bearer'
  //   clientConfigs: {
  //     default: '~/graphql/clientConfig.js'
  //   }
  // },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      theme: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  }
}