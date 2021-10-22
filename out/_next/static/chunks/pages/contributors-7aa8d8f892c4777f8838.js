;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [965],
  {
    9077: function (t, e, i) {
      'use strict'
      i(9496)
      var n = i(8288),
        s = i(4637)
      e.Z = function (t) {
        return (0, s.jsxs)(n.default, {
          children: [
            (0, s.jsx)('title', {
              children: 'gitmoji '.concat(
                t.pageTitle ? '| ' + t.pageTitle + ' |' : '|',
                ' An emoji guide for your commit messages'
              ),
            }),
            (0, s.jsx)('link', {
              rel: 'canonical',
              href: 'https://gitmoji.dev'.concat(t.pageUrl || ''),
            }),
            (0, s.jsx)('meta', { name: 'author', content: 'Carlos Cuesta' }),
            (0, s.jsx)('meta', {
              name: 'description',
              content:
                "Gitmoji is an emoji guide for your commit messages. Aims to be a standarization cheatshee /t for using emojis on GitHub's commit messages.",
            }),
            (0, s.jsx)('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            }),
            (0, s.jsx)('meta', { name: 'twitter:card', content: 'summary' }),
            (0, s.jsx)('meta', { name: 'twitter:title', content: 'gitmoji' }),
            (0, s.jsx)('meta', {
              name: 'twitter:description',
              content: 'An emoji guide for your commit messages.',
            }),
            (0, s.jsx)('meta', {
              name: 'twitter:image',
              content: 'https://gitmoji.dev/static/gitmoji.gif',
            }),
            (0, s.jsx)('meta', {
              name: 'twitter:creator',
              content: '@crloscuesta',
            }),
            (0, s.jsx)('meta', {
              name: 'twitter:url',
              content: 'https://gitmoji.dev',
            }),
            (0, s.jsx)('meta', { property: 'og:title', content: 'gitmoji' }),
            (0, s.jsx)('meta', {
              name: 'og:description',
              content: 'An emoji guide for your commit messages.',
            }),
            (0, s.jsx)('meta', {
              property: 'og:image',
              content: 'https://gitmoji.dev/static/gitmoji.gif',
            }),
            (0, s.jsx)('meta', {
              name: 'og:url',
              content: 'https://gitmoji.dev',
            }),
            (0, s.jsx)('meta', { name: 'robots', content: 'index, follow' }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '57x57',
              href: '/static/apple-icon-57x57.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '60x60',
              href: '/static/apple-icon-60x60.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '72x72',
              href: '/static/apple-icon-72x72.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '76x76',
              href: '/static/apple-icon-76x76.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '114x114',
              href: '/static/apple-icon-114x114.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '120x120',
              href: '/static/apple-icon-120x120.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '144x144',
              href: '/static/apple-icon-144x144.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '152x152',
              href: '/static/apple-icon-152x152.png',
            }),
            (0, s.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/static/apple-icon-180x180.png',
            }),
            (0, s.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '192x192',
              href: '/static/android-icon-192x192.png',
            }),
            (0, s.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/static/favicon-32x32.png',
            }),
            (0, s.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '96x96',
              href: '/static/favicon-96x96.png',
            }),
            (0, s.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/static/favicon-16x16.png',
            }),
            (0, s.jsx)('link', {
              rel: 'manifest',
              href: '/static/manifest.json',
            }),
            (0, s.jsx)('meta', {
              name: 'msapplication-TileColor',
              content: '#FFDD67',
            }),
            (0, s.jsx)('meta', {
              name: 'msapplication-TileImage',
              content: '/ms-icon-144x144.png',
            }),
            (0, s.jsx)('meta', { name: 'theme-color', content: '#FFDD67' }),
            (0, s.jsx)('meta', {
              name: 'google-site-verification',
              content: '78vmlhi_erc-UGybxcGwHyiUtf04wzYExTLa-4LoWio',
            }),
            (0, s.jsx)('link', {
              rel: 'search',
              type: 'application/opensearchdescription+xml',
              href: '/static/opensearchdescription.xml',
            }),
          ],
        })
      }
    },
    4025: function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, {
          __N_SSG: function () {
            return l
          },
          default: function () {
            return p
          },
        })
      i(9496)
      var n = i(1923),
        s = i.n(n),
        o = i(4637),
        a = function (t) {
          return (0, o.jsx)('article', {
            className: 'col-xs-3 col-sm-2',
            children: (0, o.jsx)('a', {
              href: t.url,
              target: '_blank',
              children: (0, o.jsx)('img', {
                className: s().picture,
                src: t.avatar,
              }),
            }),
          })
        },
        c = function (t) {
          return (0, o.jsx)('div', {
            className: 'row center-xs',
            children: t.contributors.map(function (t) {
              return (0, o.jsx)(a, { url: t.url, avatar: t.avatar }, t.id)
            }),
          })
        },
        r = i(9077),
        l = !0,
        p = function (t) {
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(r.Z, {
                pageTitle: 'Contributors',
                pageUrl: '/contributors',
              }),
              (0, o.jsx)('main', {
                children: (0, o.jsxs)('section', {
                  children: [
                    (0, o.jsx)('h1', { children: '\u8d21\u732e\u8005' }),
                    (0, o.jsx)(c, { contributors: t.contributors }),
                  ],
                }),
              }),
            ],
          })
        }
    },
    3322: function (t, e, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/contributors',
        function () {
          return i(4025)
        },
      ])
    },
    1923: function (t) {
      t.exports = { picture: 'styles_picture__1Y2k2' }
    },
    8288: function (t, e, i) {
      t.exports = i(9490)
    },
  },
  function (t) {
    t.O(0, [888, 179], function () {
      return (e = 3322), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
