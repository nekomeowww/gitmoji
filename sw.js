if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let i = Promise.resolve()
      return (
        s[e] ||
          (i = new Promise(async (i) => {
            if ('document' in self) {
              const s = document.createElement('script')
              ;(s.src = e), document.head.appendChild(s), (s.onload = i)
            } else importScripts(e), i()
          })),
        i.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`)
          return s[e]
        })
      )
    },
    i = (i, s) => {
      Promise.all(i.map(e)).then((e) => s(1 === e.length ? e[0] : e))
    },
    s = { require: Promise.resolve(i) }
  self.define = (i, t, a) => {
    s[i] ||
      (s[i] = Promise.resolve().then(() => {
        let s = {}
        const n = { uri: location.origin + i.slice(1) }
        return Promise.all(
          t.map((i) => {
            switch (i) {
              case 'exports':
                return s
              case 'module':
                return n
              default:
                return e(i)
            }
          })
        ).then((e) => {
          const i = a(...e)
          return s.default || (s.default = i), s
        })
      }))
  }
}
define('./sw.js', ['./workbox-3bbf1214'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/gitmoji/_next/static/chunks/main-1dc4dcc14b4a9d2edfae.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/pages/_app-7b12aafda50414d56aa4.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/pages/_error-75dca612a8fabbfd958d.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/pages/about-79ae89525c1224236c31.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/pages/contributors-7aa8d8f892c4777f8838.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/pages/index-b7b3b45d5f330f7801d8.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/pages/related-tools-640761c6a8f5fb461bf5.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/chunks/webpack-76d1d6ce28e3df779515.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/css/1cc56ec5924e41d80629.css',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/css/76cfbc34e8b6df449131.css',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/css/e9a88298b2c8022fd874.css',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/qGNaRVjlXAO38w8KszRKt/_buildManifest.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/_next/static/qGNaRVjlXAO38w8KszRKt/_ssgManifest.js',
          revision: 'qGNaRVjlXAO38w8KszRKt',
        },
        {
          url: '/gitmoji/static/android-icon-144x144.png',
          revision: '19f6387266e9d4909d35e799ebff257b',
        },
        {
          url: '/gitmoji/static/android-icon-192x192.png',
          revision: '518eb455976259bfc059c737ad4b116f',
        },
        {
          url: '/gitmoji/static/android-icon-36x36.png',
          revision: 'b2142412663a2572fca05b7a90246af3',
        },
        {
          url: '/gitmoji/static/android-icon-48x48.png',
          revision: 'd625f435a1ff018480245a90a5c5d69b',
        },
        {
          url: '/gitmoji/static/android-icon-512x512.png',
          revision: '11a024ae46dec20b77bee5463cfb14d1',
        },
        {
          url: '/gitmoji/static/android-icon-72x72.png',
          revision: 'a750a2ed4cda004e27cc5da8396a8ef5',
        },
        {
          url: '/gitmoji/static/android-icon-96x96.png',
          revision: 'e5a2fb4d38fec059063849668357c0e1',
        },
        {
          url: '/gitmoji/static/apple-icon-114x114.png',
          revision: 'fd6b5857baaa61cb804793531433aa29',
        },
        {
          url: '/gitmoji/static/apple-icon-120x120.png',
          revision: '205a69e7448a44ff015c2886110630df',
        },
        {
          url: '/gitmoji/static/apple-icon-144x144.png',
          revision: '19f6387266e9d4909d35e799ebff257b',
        },
        {
          url: '/gitmoji/static/apple-icon-152x152.png',
          revision: '253d8afb4df01e0830c4a2d343b526af',
        },
        {
          url: '/gitmoji/static/apple-icon-180x180.png',
          revision: '67f5e431c2df95191dc2be1891c7df51',
        },
        {
          url: '/gitmoji/static/apple-icon-57x57.png',
          revision: '6a973d83eb6c9f7049b3bb8839e79033',
        },
        {
          url: '/gitmoji/static/apple-icon-60x60.png',
          revision: '8aa47cbb0d734031e65984f824f12ab2',
        },
        {
          url: '/gitmoji/static/apple-icon-72x72.png',
          revision: 'a750a2ed4cda004e27cc5da8396a8ef5',
        },
        {
          url: '/gitmoji/static/apple-icon-76x76.png',
          revision: 'ba4a07816ce495b3d60a4634d2824b41',
        },
        {
          url: '/gitmoji/static/apple-icon-precomposed.png',
          revision: 'b5d5868acc80b1b621414e6b56d84fb0',
        },
        {
          url: '/gitmoji/static/apple-icon.png',
          revision: 'b5d5868acc80b1b621414e6b56d84fb0',
        },
        {
          url: '/gitmoji/static/browserconfig.xml',
          revision: '5a3d56aaca6559da9d71b654de4d9e20',
        },
        {
          url: '/gitmoji/static/favicon-16x16.png',
          revision: 'db1c26f319f953afb2e50c5bda300b25',
        },
        {
          url: '/gitmoji/static/favicon-32x32.png',
          revision: '8ac3d505923eaa43ef3c72f628c8594f',
        },
        {
          url: '/gitmoji/static/favicon-96x96.png',
          revision: 'e5a2fb4d38fec059063849668357c0e1',
        },
        {
          url: '/gitmoji/static/favicon.ico',
          revision: 'd75913a1e7d6e4e09f08e73ddd442af4',
        },
        {
          url: '/gitmoji/static/gitmoji.gif',
          revision: 'f63c28a54be0362584d3ecad72417ae9',
        },
        {
          url: '/gitmoji/static/gitmoji.svg',
          revision: '337499af789def943e02014b58256e13',
        },
        {
          url: '/gitmoji/static/manifest.json',
          revision: '917b6f96f2e16cfc2cf3eceed5e9e68e',
        },
        {
          url: '/gitmoji/static/maskable_icon.png',
          revision: '5e0a576bbfa75012ce4c1484f6a964d1',
        },
        {
          url: '/gitmoji/static/ms-icon-144x144.png',
          revision: '19f6387266e9d4909d35e799ebff257b',
        },
        {
          url: '/gitmoji/static/ms-icon-150x150.png',
          revision: '2f21c57327287666eb205305017e5363',
        },
        {
          url: '/gitmoji/static/ms-icon-310x310.png',
          revision: 'b7b1f76a5a45052ca74b2fb63d10d920',
        },
        {
          url: '/gitmoji/static/ms-icon-70x70.png',
          revision: '38abcf6d8b3ea4471356345769d5c3fe',
        },
        {
          url: '/gitmoji/static/opensearchdescription.xml',
          revision: '6dcd56ba1a26972ab6263d565ce70e21',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/gitmoji',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: s,
              state: t,
            }) =>
              i && 'opaqueredirect' === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const i = e.pathname
        return !i.startsWith('/api/auth/') && !!i.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    )
})
