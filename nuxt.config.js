export default {
  target: 'static',
  router: {
    base: '/'
  },

  generate: {
    fallback: true
  },

  head: {
    title: 'DevOps Hello World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
