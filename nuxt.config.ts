import { fileURLToPath, URL } from 'url'

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s',
      title: 'Blank - Project',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    },
    baseURL: '/portfolio/', // 👈 เปลี่ยนตรงนี้ให้ตรงกับชื่อ repo ของคุณ!
  },

  nitro: {
    preset: 'static', // 👈 เพิ่มตรงนี้เพื่อ build แบบ static
  },

  devtools: { enabled: true },

  css: [
    '@styles/styles.scss',
  ],

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '@images': fileURLToPath(new URL('./assets/images/', import.meta.url)),
        '@styles': fileURLToPath(new URL('./assets/styles/', import.meta.url)),
      },
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@images/*': ['../assets/images/*'],
          '@styles/*': ['../assets/styles/*'],
        },
      },
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  compatibilityDate: '2025-04-20',
})