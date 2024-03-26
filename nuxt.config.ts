// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
export default {
    server: {
        host: '0.0.0.0' // This allows connections from any IP address
      },
    runtimeConfig: {
        public: {
          strapiBaseUrl: process.env.PUBLIC_STRAPI_BASE_URL,
        },
      },
    vite: {
        plugins: [
          require('vite-svg-loader')(),
        ],
      },
    layout: 'default',
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        // display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
        families: {
            Roboto: true,
            Inter: [300, 500, 700],
            Quicksand: [300, 500, 700],
        }
    },
    head: {
    },

    modules: ['@nuxtjs/tailwindcss'],
    styleResources: {
        scss: [
            '~assets/style/_transitions.scss',
            '~assets/style/main.scss'
        ]
    },
    css: [
        '~/assets/style/main.scss',
    ],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
    plugins: [
      ],
      
}
