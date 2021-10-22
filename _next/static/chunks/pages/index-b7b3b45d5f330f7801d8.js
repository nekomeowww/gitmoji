;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    286: function (e) {
      var t
      ;(t = function () {
        return (function () {
          var e = {
              134: function (e, t, n) {
                'use strict'
                n.d(t, {
                  default: function () {
                    return j
                  },
                })
                var i = n(279),
                  o = n.n(i),
                  r = n(370),
                  c = n.n(r),
                  a = n(817),
                  s = n.n(a)
                function l(e) {
                  return (l =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e
                        })(e)
                }
                function u(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i)
                  }
                }
                var m = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function')
                    })(this, e),
                      this.resolveOptions(t),
                      this.initSelection()
                  }
                  var t, n, i
                  return (
                    (t = e),
                    (n = [
                      {
                        key: 'resolveOptions',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                          ;(this.action = e.action),
                            (this.container = e.container),
                            (this.emitter = e.emitter),
                            (this.target = e.target),
                            (this.text = e.text),
                            (this.trigger = e.trigger),
                            (this.selectedText = '')
                        },
                      },
                      {
                        key: 'initSelection',
                        value: function () {
                          this.text
                            ? this.selectFake()
                            : this.target && this.selectTarget()
                        },
                      },
                      {
                        key: 'createFakeElement',
                        value: function () {
                          var e =
                            'rtl' ===
                            document.documentElement.getAttribute('dir')
                          ;(this.fakeElem = document.createElement('textarea')),
                            (this.fakeElem.style.fontSize = '12pt'),
                            (this.fakeElem.style.border = '0'),
                            (this.fakeElem.style.padding = '0'),
                            (this.fakeElem.style.margin = '0'),
                            (this.fakeElem.style.position = 'absolute'),
                            (this.fakeElem.style[e ? 'right' : 'left'] =
                              '-9999px')
                          var t =
                            window.pageYOffset ||
                            document.documentElement.scrollTop
                          return (
                            (this.fakeElem.style.top = ''.concat(t, 'px')),
                            this.fakeElem.setAttribute('readonly', ''),
                            (this.fakeElem.value = this.text),
                            this.fakeElem
                          )
                        },
                      },
                      {
                        key: 'selectFake',
                        value: function () {
                          var e = this,
                            t = this.createFakeElement()
                          ;(this.fakeHandlerCallback = function () {
                            return e.removeFake()
                          }),
                            (this.fakeHandler =
                              this.container.addEventListener(
                                'click',
                                this.fakeHandlerCallback
                              ) || !0),
                            this.container.appendChild(t),
                            (this.selectedText = s()(t)),
                            this.copyText(),
                            this.removeFake()
                        },
                      },
                      {
                        key: 'removeFake',
                        value: function () {
                          this.fakeHandler &&
                            (this.container.removeEventListener(
                              'click',
                              this.fakeHandlerCallback
                            ),
                            (this.fakeHandler = null),
                            (this.fakeHandlerCallback = null)),
                            this.fakeElem &&
                              (this.container.removeChild(this.fakeElem),
                              (this.fakeElem = null))
                        },
                      },
                      {
                        key: 'selectTarget',
                        value: function () {
                          ;(this.selectedText = s()(this.target)),
                            this.copyText()
                        },
                      },
                      {
                        key: 'copyText',
                        value: function () {
                          var e
                          try {
                            e = document.execCommand(this.action)
                          } catch (t) {
                            e = !1
                          }
                          this.handleResult(e)
                        },
                      },
                      {
                        key: 'handleResult',
                        value: function (e) {
                          this.emitter.emit(e ? 'success' : 'error', {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this),
                          })
                        },
                      },
                      {
                        key: 'clearSelection',
                        value: function () {
                          this.trigger && this.trigger.focus(),
                            document.activeElement.blur(),
                            window.getSelection().removeAllRanges()
                        },
                      },
                      {
                        key: 'destroy',
                        value: function () {
                          this.removeFake()
                        },
                      },
                      {
                        key: 'action',
                        set: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 'copy'
                          if (
                            ((this._action = e),
                            'copy' !== this._action && 'cut' !== this._action)
                          )
                            throw new Error(
                              'Invalid "action" value, use either "copy" or "cut"'
                            )
                        },
                        get: function () {
                          return this._action
                        },
                      },
                      {
                        key: 'target',
                        set: function (e) {
                          if (void 0 !== e) {
                            if (!e || 'object' !== l(e) || 1 !== e.nodeType)
                              throw new Error(
                                'Invalid "target" value, use a valid Element'
                              )
                            if (
                              'copy' === this.action &&
                              e.hasAttribute('disabled')
                            )
                              throw new Error(
                                'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                              )
                            if (
                              'cut' === this.action &&
                              (e.hasAttribute('readonly') ||
                                e.hasAttribute('disabled'))
                            )
                              throw new Error(
                                'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                              )
                            this._target = e
                          }
                        },
                        get: function () {
                          return this._target
                        },
                      },
                    ]) && u(t.prototype, n),
                    i && u(t, i),
                    e
                  )
                })()
                function d(e) {
                  return (d =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e
                        })(e)
                }
                function f(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i)
                  }
                }
                function p(e, t) {
                  return (p =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e
                    })(e, t)
                }
                function h(e) {
                  var t = (function () {
                    if ('undefined' === typeof Reflect || !Reflect.construct)
                      return !1
                    if (Reflect.construct.sham) return !1
                    if ('function' === typeof Proxy) return !0
                    try {
                      return (
                        Date.prototype.toString.call(
                          Reflect.construct(Date, [], function () {})
                        ),
                        !0
                      )
                    } catch (e) {
                      return !1
                    }
                  })()
                  return function () {
                    var n,
                      i = g(e)
                    if (t) {
                      var o = g(this).constructor
                      n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments)
                    return y(this, n)
                  }
                }
                function y(e, t) {
                  return !t || ('object' !== d(t) && 'function' !== typeof t)
                    ? (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          )
                        return e
                      })(e)
                    : t
                }
                function g(e) {
                  return (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                      })(e)
                }
                function v(e, t) {
                  var n = 'data-clipboard-'.concat(e)
                  if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var j = (function (e) {
                  !(function (e, t) {
                    if ('function' !== typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      )
                    ;(e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && p(e, t)
                  })(r, e)
                  var t,
                    n,
                    i,
                    o = h(r)
                  function r(e, t) {
                    var n
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          )
                      })(this, r),
                      (n = o.call(this)).resolveOptions(t),
                      n.listenClick(e),
                      n
                    )
                  }
                  return (
                    (t = r),
                    (i = [
                      {
                        key: 'isSupported',
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : ['copy', 'cut'],
                            t = 'string' === typeof e ? [e] : e,
                            n = !!document.queryCommandSupported
                          return (
                            t.forEach(function (e) {
                              n = n && !!document.queryCommandSupported(e)
                            }),
                            n
                          )
                        },
                      },
                    ]),
                    (n = [
                      {
                        key: 'resolveOptions',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                          ;(this.action =
                            'function' === typeof e.action
                              ? e.action
                              : this.defaultAction),
                            (this.target =
                              'function' === typeof e.target
                                ? e.target
                                : this.defaultTarget),
                            (this.text =
                              'function' === typeof e.text
                                ? e.text
                                : this.defaultText),
                            (this.container =
                              'object' === d(e.container)
                                ? e.container
                                : document.body)
                        },
                      },
                      {
                        key: 'listenClick',
                        value: function (e) {
                          var t = this
                          this.listener = c()(e, 'click', function (e) {
                            return t.onClick(e)
                          })
                        },
                      },
                      {
                        key: 'onClick',
                        value: function (e) {
                          var t = e.delegateTarget || e.currentTarget
                          this.clipboardAction && (this.clipboardAction = null),
                            (this.clipboardAction = new m({
                              action: this.action(t),
                              target: this.target(t),
                              text: this.text(t),
                              container: this.container,
                              trigger: t,
                              emitter: this,
                            }))
                        },
                      },
                      {
                        key: 'defaultAction',
                        value: function (e) {
                          return v('action', e)
                        },
                      },
                      {
                        key: 'defaultTarget',
                        value: function (e) {
                          var t = v('target', e)
                          if (t) return document.querySelector(t)
                        },
                      },
                      {
                        key: 'defaultText',
                        value: function (e) {
                          return v('text', e)
                        },
                      },
                      {
                        key: 'destroy',
                        value: function () {
                          this.listener.destroy(),
                            this.clipboardAction &&
                              (this.clipboardAction.destroy(),
                              (this.clipboardAction = null))
                        },
                      },
                    ]) && f(t.prototype, n),
                    i && f(t, i),
                    r
                  )
                })(o())
              },
              828: function (e) {
                if (
                  'undefined' !== typeof Element &&
                  !Element.prototype.matches
                ) {
                  var t = Element.prototype
                  t.matches =
                    t.matchesSelector ||
                    t.mozMatchesSelector ||
                    t.msMatchesSelector ||
                    t.oMatchesSelector ||
                    t.webkitMatchesSelector
                }
                e.exports = function (e, t) {
                  for (; e && 9 !== e.nodeType; ) {
                    if ('function' === typeof e.matches && e.matches(t))
                      return e
                    e = e.parentNode
                  }
                }
              },
              438: function (e, t, n) {
                var i = n(828)
                function o(e, t, n, i, o) {
                  var c = r.apply(this, arguments)
                  return (
                    e.addEventListener(n, c, o),
                    {
                      destroy: function () {
                        e.removeEventListener(n, c, o)
                      },
                    }
                  )
                }
                function r(e, t, n, o) {
                  return function (n) {
                    ;(n.delegateTarget = i(n.target, t)),
                      n.delegateTarget && o.call(e, n)
                  }
                }
                e.exports = function (e, t, n, i, r) {
                  return 'function' === typeof e.addEventListener
                    ? o.apply(null, arguments)
                    : 'function' === typeof n
                    ? o.bind(null, document).apply(null, arguments)
                    : ('string' === typeof e &&
                        (e = document.querySelectorAll(e)),
                      Array.prototype.map.call(e, function (e) {
                        return o(e, t, n, i, r)
                      }))
                }
              },
              879: function (e, t) {
                ;(t.node = function (e) {
                  return (
                    void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                  )
                }),
                  (t.nodeList = function (e) {
                    var n = Object.prototype.toString.call(e)
                    return (
                      void 0 !== e &&
                      ('[object NodeList]' === n ||
                        '[object HTMLCollection]' === n) &&
                      'length' in e &&
                      (0 === e.length || t.node(e[0]))
                    )
                  }),
                  (t.string = function (e) {
                    return 'string' === typeof e || e instanceof String
                  }),
                  (t.fn = function (e) {
                    return (
                      '[object Function]' === Object.prototype.toString.call(e)
                    )
                  })
              },
              370: function (e, t, n) {
                var i = n(879),
                  o = n(438)
                e.exports = function (e, t, n) {
                  if (!e && !t && !n)
                    throw new Error('Missing required arguments')
                  if (!i.string(t))
                    throw new TypeError('Second argument must be a String')
                  if (!i.fn(n))
                    throw new TypeError('Third argument must be a Function')
                  if (i.node(e))
                    return (function (e, t, n) {
                      return (
                        e.addEventListener(t, n),
                        {
                          destroy: function () {
                            e.removeEventListener(t, n)
                          },
                        }
                      )
                    })(e, t, n)
                  if (i.nodeList(e))
                    return (function (e, t, n) {
                      return (
                        Array.prototype.forEach.call(e, function (e) {
                          e.addEventListener(t, n)
                        }),
                        {
                          destroy: function () {
                            Array.prototype.forEach.call(e, function (e) {
                              e.removeEventListener(t, n)
                            })
                          },
                        }
                      )
                    })(e, t, n)
                  if (i.string(e))
                    return (function (e, t, n) {
                      return o(document.body, e, t, n)
                    })(e, t, n)
                  throw new TypeError(
                    'First argument must be a String, HTMLElement, HTMLCollection, or NodeList'
                  )
                }
              },
              817: function (e) {
                e.exports = function (e) {
                  var t
                  if ('SELECT' === e.nodeName) e.focus(), (t = e.value)
                  else if (
                    'INPUT' === e.nodeName ||
                    'TEXTAREA' === e.nodeName
                  ) {
                    var n = e.hasAttribute('readonly')
                    n || e.setAttribute('readonly', ''),
                      e.select(),
                      e.setSelectionRange(0, e.value.length),
                      n || e.removeAttribute('readonly'),
                      (t = e.value)
                  } else {
                    e.hasAttribute('contenteditable') && e.focus()
                    var i = window.getSelection(),
                      o = document.createRange()
                    o.selectNodeContents(e),
                      i.removeAllRanges(),
                      i.addRange(o),
                      (t = i.toString())
                  }
                  return t
                }
              },
              279: function (e) {
                function t() {}
                ;(t.prototype = {
                  on: function (e, t, n) {
                    var i = this.e || (this.e = {})
                    return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this
                  },
                  once: function (e, t, n) {
                    var i = this
                    function o() {
                      i.off(e, o), t.apply(n, arguments)
                    }
                    return (o._ = t), this.on(e, o, n)
                  },
                  emit: function (e) {
                    for (
                      var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        i = 0,
                        o = n.length;
                      i < o;
                      i++
                    )
                      n[i].fn.apply(n[i].ctx, t)
                    return this
                  },
                  off: function (e, t) {
                    var n = this.e || (this.e = {}),
                      i = n[e],
                      o = []
                    if (i && t)
                      for (var r = 0, c = i.length; r < c; r++)
                        i[r].fn !== t && i[r].fn._ !== t && o.push(i[r])
                    return o.length ? (n[e] = o) : delete n[e], this
                  },
                }),
                  (e.exports = t),
                  (e.exports.TinyEmitter = t)
              },
            },
            t = {}
          function n(i) {
            if (t[i]) return t[i].exports
            var o = (t[i] = { exports: {} })
            return e[i](o, o.exports, n), o.exports
          }
          return (
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default
                    }
                  : function () {
                      return e
                    }
              return n.d(t, { a: t }), t
            }),
            (n.d = function (e, t) {
              for (var i in t)
                n.o(t, i) &&
                  !n.o(e, i) &&
                  Object.defineProperty(e, i, { enumerable: !0, get: t[i] })
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            n(134)
          )
        })().default
      }),
        (e.exports = t())
    },
    9077: function (e, t, n) {
      'use strict'
      n(9496)
      var i = n(8288),
        o = n(4637)
      t.Z = function (e) {
        return (0, o.jsxs)(i.default, {
          children: [
            (0, o.jsx)('title', {
              children: 'gitmoji '.concat(
                e.pageTitle ? '| ' + e.pageTitle + ' |' : '|',
                ' An emoji guide for your commit messages'
              ),
            }),
            (0, o.jsx)('link', {
              rel: 'canonical',
              href: 'https://gitmoji.dev'.concat(e.pageUrl || ''),
            }),
            (0, o.jsx)('meta', { name: 'author', content: 'Carlos Cuesta' }),
            (0, o.jsx)('meta', {
              name: 'description',
              content:
                "Gitmoji is an emoji guide for your commit messages. Aims to be a standarization cheatshee /t for using emojis on GitHub's commit messages.",
            }),
            (0, o.jsx)('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            }),
            (0, o.jsx)('meta', { name: 'twitter:card', content: 'summary' }),
            (0, o.jsx)('meta', { name: 'twitter:title', content: 'gitmoji' }),
            (0, o.jsx)('meta', {
              name: 'twitter:description',
              content: 'An emoji guide for your commit messages.',
            }),
            (0, o.jsx)('meta', {
              name: 'twitter:image',
              content: 'https://gitmoji.dev/static/gitmoji.gif',
            }),
            (0, o.jsx)('meta', {
              name: 'twitter:creator',
              content: '@crloscuesta',
            }),
            (0, o.jsx)('meta', {
              name: 'twitter:url',
              content: 'https://gitmoji.dev',
            }),
            (0, o.jsx)('meta', { property: 'og:title', content: 'gitmoji' }),
            (0, o.jsx)('meta', {
              name: 'og:description',
              content: 'An emoji guide for your commit messages.',
            }),
            (0, o.jsx)('meta', {
              property: 'og:image',
              content: 'https://gitmoji.dev/static/gitmoji.gif',
            }),
            (0, o.jsx)('meta', {
              name: 'og:url',
              content: 'https://gitmoji.dev',
            }),
            (0, o.jsx)('meta', { name: 'robots', content: 'index, follow' }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '57x57',
              href: '/static/apple-icon-57x57.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '60x60',
              href: '/static/apple-icon-60x60.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '72x72',
              href: '/static/apple-icon-72x72.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '76x76',
              href: '/static/apple-icon-76x76.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '114x114',
              href: '/static/apple-icon-114x114.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '120x120',
              href: '/static/apple-icon-120x120.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '144x144',
              href: '/static/apple-icon-144x144.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '152x152',
              href: '/static/apple-icon-152x152.png',
            }),
            (0, o.jsx)('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/static/apple-icon-180x180.png',
            }),
            (0, o.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '192x192',
              href: '/static/android-icon-192x192.png',
            }),
            (0, o.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/static/favicon-32x32.png',
            }),
            (0, o.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '96x96',
              href: '/static/favicon-96x96.png',
            }),
            (0, o.jsx)('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/static/favicon-16x16.png',
            }),
            (0, o.jsx)('link', {
              rel: 'manifest',
              href: '/static/manifest.json',
            }),
            (0, o.jsx)('meta', {
              name: 'msapplication-TileColor',
              content: '#FFDD67',
            }),
            (0, o.jsx)('meta', {
              name: 'msapplication-TileImage',
              content: '/ms-icon-144x144.png',
            }),
            (0, o.jsx)('meta', { name: 'theme-color', content: '#FFDD67' }),
            (0, o.jsx)('meta', {
              name: 'google-site-verification',
              content: '78vmlhi_erc-UGybxcGwHyiUtf04wzYExTLa-4LoWio',
            }),
            (0, o.jsx)('link', {
              rel: 'search',
              type: 'application/opensearchdescription+xml',
              href: '/static/opensearchdescription.xml',
            }),
          ],
        })
      }
    },
    3907: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return w
          },
        })
      var i = n(9496),
        o =
          (n(8288),
          JSON.parse(
            '{"v":[{"emoji":"\ud83c\udfa8","entity":"&#x1f3a8;","code":":art:","description":"\u63d0\u5347\u4ee3\u7801\u7684\u7ed3\u6784 / \u6392\u7248","name":"art","semver":null},{"emoji":"\u26a1\ufe0f","entity":"&#x26a1;","code":":zap:","description":"\u63d0\u5347\u6027\u80fd","name":"zap","semver":"patch"},{"emoji":"\ud83d\udd25","entity":"&#x1f525;","code":":fire:","description":"\u79fb\u9664\u4ee3\u7801\u6216\u8005\u662f\u6587\u4ef6","name":"fire","semver":null},{"emoji":"\ud83d\udc1b","entity":"&#x1f41b;","code":":bug:","description":"\u4fee\u590d Bug","name":"bug","semver":"patch"},{"emoji":"\ud83d\ude91\ufe0f","entity":"&#128657;","code":":ambulance:","description":"\u91cd\u8981\u8865\u4e01","name":"ambulance","semver":"patch"},{"emoji":"\u2728","entity":"&#x2728;","code":":sparkles:","description":"\u63a8\u51fa\u65b0\u7684\u7279\u6027","name":"sparkles","semver":"minor"},{"emoji":"\ud83d\udcdd","entity":"&#x1f4dd;","code":":memo:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u6587\u6863","name":"memo","semver":null},{"emoji":"\ud83d\ude80","entity":"&#x1f680;","code":":rocket:","description":"\u90e8\u7f72","name":"rocket","semver":null},{"emoji":"\ud83d\udc84","entity":"&#ff99cc;","code":":lipstick:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0 UI \u6837\u5f0f\u6587\u4ef6","name":"lipstick","semver":"patch"},{"emoji":"\ud83c\udf89","entity":"&#127881;","code":":tada:","description":"\u5f00\u59cb\u4e00\u4e2a\u9879\u76ee","name":"tada","semver":null},{"emoji":"\u2705","entity":"&#x2705;","code":":white_check_mark:","description":"\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u6216\u901a\u8fc7\u4e00\u4e2a\u6d4b\u8bd5","name":"white-check-mark","semver":null},{"emoji":"\ud83d\udd12\ufe0f","entity":"&#x1f512;","code":":lock:","description":"\u4fee\u590d\u5b89\u5168\u6027\u7f3a\u9677","name":"lock","semver":"patch"},{"emoji":"\ud83d\udd16","entity":"&#x1f516;","code":":bookmark:","description":"\u53d1\u5e03\u6216\u662f\u521b\u5efa\u6807\u7b7e","name":"bookmark","semver":null},{"emoji":"\ud83d\udea8","entity":"&#x1f6a8;","code":":rotating_light:","description":"\u4fee\u590d\u7f16\u8bd1\u5668\u6216\u662f\u89c4\u8303\u5316\u5de5\u5177\u8b66\u544a","name":"rotating-light","semver":null},{"emoji":"\ud83d\udea7","entity":"&#x1f6a7;","code":":construction:","description":"\u6b63\u5728\u65bd\u5de5","name":"construction","semver":null},{"emoji":"\ud83d\udc9a","entity":"&#x1f49a;","code":":green_heart:","description":"\u4fee\u590d CI","name":"green-heart","semver":null},{"emoji":"\u2b07\ufe0f","entity":"\u2b07\ufe0f","code":":arrow_down:","description":"\u964d\u7ea7\u4f9d\u8d56","name":"arrow-down","semver":"patch"},{"emoji":"\u2b06\ufe0f","entity":"\u2b06\ufe0f","code":":arrow_up:","description":"\u5347\u7ea7\u4f9d\u8d56","name":"arrow-up","semver":"patch"},{"emoji":"\ud83d\udccc","entity":"&#x1F4CC;","code":":pushpin:","description":"\u6307\u5b9a\u67d0\u4e2a\u4f9d\u8d56\u5230\u7279\u5b9a\u7248\u672c","name":"pushpin","semver":"patch"},{"emoji":"\ud83d\udc77","entity":"&#x1f477;","code":":construction_worker:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0 CI","name":"construction-worker","semver":null},{"emoji":"\ud83d\udcc8","entity":"&#x1F4C8;","code":":chart_with_upwards_trend:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u5206\u6790\u548c\u8ffd\u8e2a\u4ee3\u7801","name":"chart-with-upwards-trend","semver":"patch"},{"emoji":"\u267b\ufe0f","entity":"&#x2672;","code":":recycle:","description":"\u91cd\u6784","name":"recycle","semver":null},{"emoji":"\u2795","entity":"&#10133;","code":":heavy_plus_sign:","description":"\u6dfb\u52a0\u4f9d\u8d56","name":"heavy-plus-sign","semver":"patch"},{"emoji":"\u2796","entity":"&#10134;","code":":heavy_minus_sign:","description":"\u79fb\u9664\u4f9d\u8d56","name":"heavy-minus-sign","semver":"patch"},{"emoji":"\ud83d\udd27","entity":"&#x1f527;","code":":wrench:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6","name":"wrench","semver":"patch"},{"emoji":"\ud83d\udd28","entity":"&#128296;","code":":hammer:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u5f00\u53d1\u811a\u672c","name":"hammer","semver":null},{"emoji":"\ud83c\udf10","entity":"&#127760;","code":":globe_with_meridians:","description":"\u56fd\u9645\u5316\u4e0e\u672c\u5730\u5316","name":"globe-with-meridians","semver":"patch"},{"emoji":"\u270f\ufe0f","entity":"&#59161;","code":":pencil2:","description":"\u4fee\u590d\u62fc\u5199\u9519\u8bef\u6216\u63aa\u8f9e\u95ee\u9898","name":"pencil2","semver":"patch"},{"emoji":"\ud83d\udca9","entity":"&#58613;","code":":poop:","description":"\u7f16\u5199\u9700\u8981\u6539\u8fdb\u7684\u7cdf\u7cd5\u4ee3\u7801","name":"poop","semver":null},{"emoji":"\u23ea\ufe0f","entity":"&#9194;","code":":rewind:","description":"\u56de\u6eda\u53d8\u66f4","name":"rewind","semver":"patch"},{"emoji":"\ud83d\udd00","entity":"&#128256;","code":":twisted_rightwards_arrows:","description":"\u5408\u5e76\u5206\u652f","name":"twisted-rightwards-arrows","semver":null},{"emoji":"\ud83d\udce6\ufe0f","entity":"&#1F4E6;","code":":package:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u5df2\u7f16\u8bd1\u6587\u4ef6\u6216\u5305","name":"package","semver":"patch"},{"emoji":"\ud83d\udc7d\ufe0f","entity":"&#1F47D;","code":":alien:","description":"\u56e0\u7b2c\u4e09\u65b9 API \u53d8\u66f4\u800c\u66f4\u65b0\u7684\u4ee3\u7801","name":"alien","semver":"patch"},{"emoji":"\ud83d\ude9a","entity":"&#1F69A;","code":":truck:","description":"\u79fb\u52a8\u6216\u91cd\u547d\u540d\u6587\u4ef6\u548c\u8d44\u6e90 (\u6bd4\u5982\uff1a\u6587\u4ef6\uff0c\u8def\u5f84\uff0c\u8def\u7531)","name":"truck","semver":null},{"emoji":"\ud83d\udcc4","entity":"&#1F4C4;","code":":page_facing_up:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u8bc1\u4e66 LICENSE \u6587\u4ef6","name":"page-facing-up","semver":null},{"emoji":"\ud83d\udca5","entity":"&#x1f4a5;","code":":boom:","description":"\u7834\u574f\u6027\u66f4\u65b0","name":"boom","semver":"major"},{"emoji":"\ud83c\udf71","entity":"&#1F371","code":":bento:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u9759\u6001\u8d44\u6e90","name":"bento","semver":"patch"},{"emoji":"\u267f\ufe0f","entity":"&#9855;","code":":wheelchair:","description":"\u63d0\u5347\u65e0\u969c\u788d\u53ef\u7528\u6027","name":"wheelchair","semver":"patch"},{"emoji":"\ud83d\udca1","entity":"&#128161;","code":":bulb:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca","name":"bulb","semver":null},{"emoji":"\ud83c\udf7b","entity":"&#x1f37b;","code":":beers:","description":"\u9189\u91ba\u91ba\u5730\u5199\u7cdf\u7cd5\u4ee3\u7801","name":"beers","semver":null},{"emoji":"\ud83d\udcac","entity":"&#128172;","code":":speech_balloon:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u6587\u672c\u548c\u6587\u5b57","name":"speech-balloon","semver":"patch"},{"emoji":"\ud83d\uddc3\ufe0f","entity":"&#128451;","code":":card_file_box:","description":"\u6267\u884c\u4e0e\u6570\u636e\u5e93\u76f8\u5173\u7684\u66f4\u6539","name":"card-file-box","semver":"patch"},{"emoji":"\ud83d\udd0a","entity":"&#128266;","code":":loud_sound:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u65e5\u5fd7","name":"loud-sound","semver":null},{"emoji":"\ud83d\udd07","entity":"&#128263;","code":":mute:","description":"\u79fb\u9664\u65e5\u5fd7","name":"mute","semver":null},{"emoji":"\ud83d\udc65","entity":"&#128101;","code":":busts_in_silhouette:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u8d21\u732e\u8005","name":"busts-in-silhouette","semver":null},{"emoji":"\ud83d\udeb8","entity":"&#128696;","code":":children_crossing:","description":"\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u548c\u5b9e\u7528\u6027","name":"children-crossing","semver":"patch"},{"emoji":"\ud83c\udfd7\ufe0f","entity":"&#1f3d7;","code":":building_construction:","description":"\u67b6\u6784\u5c42\u9762\u7684\u53d8\u66f4","name":"building-construction","semver":null},{"emoji":"\ud83d\udcf1","entity":"&#128241;","code":":iphone:","description":"\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u53d8\u66f4","name":"iphone","semver":"patch"},{"emoji":"\ud83e\udd21","entity":"&#129313;","code":":clown_face:","description":"\u6a21\u62df\u4ee3\u7801 / \u6a21\u62df\u6784\u5efa","name":"clown-face","semver":null},{"emoji":"\ud83e\udd5a","entity":"&#129370;","code":":egg:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u5f69\u86cb","name":"egg","semver":"patch"},{"emoji":"\ud83d\ude48","entity":"&#8bdfe7;","code":":see_no_evil:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0 .gitignore \u6587\u4ef6","name":"see-no-evil","semver":null},{"emoji":"\ud83d\udcf8","entity":"&#128248;","code":":camera_flash:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u5feb\u7167","name":"camera-flash","semver":null},{"emoji":"\u2697\ufe0f","entity":"&#128248;","code":":alembic:","description":"\u6267\u884c\u5b9e\u9a8c / \u5b9e\u9a8c\u6027\u66f4\u65b0","name":"alembic","semver":"patch"},{"emoji":"\ud83d\udd0d\ufe0f","entity":"&#128269;","code":":mag:","description":"\u63d0\u5347\u641c\u7d22\u5f15\u64ce\u4f18\u5316 SEO","name":"mag","semver":"patch"},{"emoji":"\ud83c\udff7\ufe0f","entity":"&#127991;","code":":label:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u7c7b\u578b (Flow, TypeScript)","name":"label","semver":"patch"},{"emoji":"\ud83c\udf31","entity":"&#127793;","code":":seedling:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u79cd\u5b50\u6587\u4ef6","name":"seedling","semver":null},{"emoji":"\ud83d\udea9","entity":"&#x1F6A9;","code":":triangular_flag_on_post:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\uff0c\u79fb\u9664\u65d7\u6807","name":"triangular-flag-on-post","semver":"patch"},{"emoji":"\ud83e\udd45","entity":"&#x1F945;","code":":goal_net:","description":"\u9519\u8bef\u5904\u7406","name":"goal-net","semver":"patch"},{"emoji":"\ud83d\udcab","entity":"&#x1f4ab;","code":":dizzy:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u52a8\u753b\u548c\u79fb\u52a8\u6548\u679c","name":"animation","semver":"patch"},{"emoji":"\ud83d\uddd1\ufe0f","entity":"&#x1F5D1;","code":":wastebasket:","description":"\u6807\u8bb0\u9700\u8981\u88ab\u6e05\u7406\u7684\u5e9f\u5f03\u4ee3\u7801","name":"wastebasket","semver":"patch"},{"emoji":"\ud83d\udec2","entity":"&#x1F6C2;","code":":passport_control:","description":"\u4e0e\u9a8c\u8bc1\u3001\u7528\u6237\u7ec4\u548c\u6743\u9650\u76f8\u5173\u7684\u4ee3\u7801\u53d8\u66f4","name":"passport-control","semver":"patch"},{"emoji":"\ud83e\ude79","entity":"&#x1FA79;","code":":adhesive_bandage:","description":"\u975e\u81f4\u547d\u7f3a\u9677\u7684\u7b80\u5355\u4fee\u590d","name":"adhesive-bandage","semver":"patch"},{"emoji":"\ud83e\uddd0","entity":"&#x1F9D0;","code":":monocle_face:","description":"\u6570\u636e\u63a2\u7d22\u548c\u5ba1\u67e5","name":"monocle-face","semver":null},{"emoji":"\u26b0\ufe0f","entity":"&#x26B0;","code":":coffin:","description":"\u79fb\u9664\u574f\u6389\u7684\u4ee3\u7801","name":"coffin","semver":null},{"emoji":"\ud83e\uddea","entity":"&#x1F9EA;","code":":test_tube:","description":"\u6dfb\u52a0\u4e86\u5931\u8d25\u7684\u6d4b\u8bd5","name":"test-tube","semver":null},{"emoji":"\ud83d\udc54","entity":"&#128084;","code":":necktie:","description":"\u6dfb\u52a0\u6216\u66f4\u65b0\u4e1a\u52a1\u903b\u8f91","name":"necktie","semver":"patch"}]}'
          )),
        r = n(5052),
        c = n(286),
        a = n.n(c),
        s = n(5572),
        l = {
          'adhesive-bandage': '#fbcfb7',
          alembic: '#7f39fb',
          alien: '#c5e763',
          ambulance: '#fb584a',
          animation: '#ffdb3a',
          'arrow-down': '#ef5350',
          'arrow-up': '#00e676',
          art: '#ff7281',
          beers: '#fbb64b',
          bento: '#ff5864',
          bookmark: '#80deea',
          boom: '#f94f28',
          bug: '#8cd842',
          'building-construction': '#ffe55f',
          bulb: '#ffce49',
          'busts-in-silhouette': '#ffce49',
          'camera-flash': '#00a9f0',
          'card-file-box': '#c5e763',
          'chart-with-upwards-trend': '#cedae6',
          'children-crossing': '#ffce49',
          'clown-face': '#ff7281',
          'construction-worker': '#64b5f6',
          construction: '#ffb74d',
          egg: '#77e856',
          fire: '#ff9d44',
          'globe-with-meridians': '#e7f4ff',
          'goal-net': '#c7cb12',
          'green-heart': '#c5e763',
          hammer: '#ffc400',
          coffin: '#d9e3e8',
          'heavy-minus-sign': '#ef5350',
          'heavy-plus-sign': '#00e676',
          iphone: '#40c4ff',
          label: '#cb63e6',
          lipstick: '#80deea',
          lock: '#ffce49',
          'loud-sound': '#23b4d2',
          mag: '#ffe55f',
          memo: '#00e676',
          mute: '#e6ebef',
          'ok-hand': '#c5e763',
          package: '#fdd0ae',
          'page-facing-up': '#d9e3e8',
          'passport-control': '#4dc6dc',
          pencil: '#ffce49',
          pencil2: '#ffce49',
          poop: '#a78674',
          pushpin: '#39c2f1',
          recycle: '#77e856',
          rewind: '#56d1d8',
          rocket: '#00a9f0',
          'rotating-light': '#536dfe',
          'see-no-evil': '#8bdfe7',
          seedling: '#c5e763',
          sparkles: '#ffe55f',
          'speech-balloon': '#cedae6',
          tada: '#f74d5f',
          'test-tube': '#fb584a',
          'triangular-flag-on-post': '#ffce49',
          truck: '#ef584a',
          'twisted-rightwards-arrows': '#56d1d8',
          wastebasket: '#d9e3e8',
          wheelchair: '#00b1fb',
          'white-check-mark': '#77e856',
          wrench: '#ffc400',
          zap: '#40c4ff',
          'monocle-face': '#ffe55f',
          necktie: '#83beec',
        },
        u = n(3064),
        m = n.n(u),
        d = n(4637),
        f = function (e) {
          return (0, d.jsx)('article', {
            style: { '--emojiColor': l[e.name] },
            className: ''
              .concat(m().emoji, ' col-xs-12 col-sm-6 ')
              .concat(e.isListMode ? 'col-md-4' : 'col-md-3'),
            children: (0, d.jsxs)('div', {
              className: ''
                .concat(m().card, ' ')
                .concat(e.isListMode ? m().cardList : ''),
              children: [
                (0, d.jsx)('header', {
                  className: ''.concat(m().cardHeader),
                  children: (0, d.jsx)('button', {
                    type: 'button',
                    className: 'gitmoji-clipboard-emoji '.concat(m().gitmoji),
                    'data-clipboard-text': e.emoji,
                    children: e.emoji,
                  }),
                }),
                (0, d.jsxs)('div', {
                  className: m().gitmojiInfo,
                  children: [
                    (0, d.jsx)('button', {
                      className: 'gitmoji-clipboard-code '.concat(
                        m().gitmojiCode
                      ),
                      'data-clipboard-text': e.code,
                      tabIndex: '-1',
                      type: 'button',
                      children: (0, d.jsx)('code', { children: e.code }),
                    }),
                    (0, d.jsx)('p', { children: e.description }),
                  ],
                }),
              ],
            }),
          })
        },
        p = n(9991),
        h = n(2143),
        y = n.n(h),
        g = function (e) {
          return (0, d.jsxs)('div', {
            className: y().container,
            children: [
              (0, d.jsx)('button', {
                className: ''
                  .concat(y().button, ' ')
                  .concat(e.isListMode ? '' : y().buttonActive),
                disabled: !e.isListMode,
                onClick: function () {
                  return e.setIsListMode(!1)
                },
                children: (0, d.jsx)(p.Z, { name: 'grid' }),
              }),
              (0, d.jsx)('button', {
                className: ''
                  .concat(y().button, ' ')
                  .concat(e.isListMode ? y().buttonActive : ''),
                disabled: e.isListMode,
                onClick: function () {
                  return e.setIsListMode(!0)
                },
                children: (0, d.jsx)(p.Z, { name: 'list' }),
              }),
            ],
          })
        },
        v = n(8698),
        j = n.n(v),
        b = function (e) {
          return (0, d.jsxs)('div', {
            className: j().container,
            children: [
              (0, d.jsx)('input', {
                className: j().searchInput,
                name: 'searchInput',
                onChange: function (t) {
                  return e.setSearchInput(t.target.value)
                },
                placeholder: '\u641c\u7d22 gitmoji...',
                type: 'text',
                value: e.searchInput,
              }),
              (0, d.jsx)(g, {
                isListMode: e.isListMode,
                setIsListMode: e.setIsListMode,
              }),
            ],
          })
        }
      var x = function (e) {
          var t = (0, s.useRouter)(),
            n = i.useState(''),
            o = (0, r.Z)(n, 2),
            c = o[0],
            l = o[1],
            u = (function (e, t) {
              var n = i.useState(t),
                o = (0, r.Z)(n, 2),
                c = o[0],
                a = o[1]
              return (
                i.useEffect(function () {
                  try {
                    var t = window.localStorage.getItem(e)
                    null !== t && a(JSON.parse(t))
                  } catch (n) {
                    console.error(
                      'ERROR: Loading '
                        .concat(e, ' from localStorage \u2013 ')
                        .concat(n)
                    )
                  }
                }, []),
                i.useEffect(
                  function () {
                    window.localStorage.setItem(e, c)
                  },
                  [c]
                ),
                [c, a]
              )
            })('isListMode', !1),
            m = (0, r.Z)(u, 2),
            p = m[0],
            h = m[1],
            y = c
              ? e.gitmojis.filter(function (e) {
                  var t = e.code,
                    n = e.description,
                    i = c.toLowerCase()
                  return t.includes(i) || n.toLowerCase().includes(i)
                })
              : e.gitmojis
          return (
            i.useEffect(
              function () {
                t.query.search && l(t.query.search)
              },
              [t.query.search]
            ),
            i.useEffect(
              function () {
                t.query.search && !c && t.push('/', void 0, { shallow: !0 })
              },
              [c]
            ),
            i.useEffect(function () {
              var e = new (a())(
                '.gitmoji-clipboard-emoji, .gitmoji-clipboard-code'
              )
              return (
                e.on('success', function (e) {
                  window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard'),
                    new window.NotificationFx({
                      message: e.trigger.classList.contains(
                        'gitmoji-clipboard-emoji'
                      )
                        ? '<p>Hey! Gitmoji '.concat(
                            e.text,
                            ' copied to the clipboard \ud83d\ude1c</p>'
                          )
                        : '<p>Hey! Gitmoji <span class="gitmoji-code">'.concat(
                            e.text,
                            '</span> copied to the clipboard \ud83d\ude1c</p>'
                          ),
                      layout: 'growl',
                      effect: 'scale',
                      type: 'notice',
                      ttl: 2e3,
                    }).show()
                }),
                function () {
                  return e.destroy()
                }
              )
            }, []),
            (0, d.jsxs)('div', {
              className: 'row',
              id: 'gitmoji-list',
              children: [
                (0, d.jsx)('div', {
                  className: 'col-xs-12',
                  children: (0, d.jsx)(b, {
                    isListMode: p,
                    searchInput: c,
                    setIsListMode: h,
                    setSearchInput: l,
                  }),
                }),
                0 === y.length
                  ? (0, d.jsxs)('h2', {
                      children: ['No gitmojis found for search: ', c],
                    })
                  : y.map(function (e, t) {
                      return (0,
                      d.jsx)(f, { code: e.code, description: e.description, emoji: e.emoji, isListMode: p, name: e.name }, t)
                    }),
              ],
            })
          )
        },
        k = n(9077),
        w = function () {
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(k.Z, {}),
              (0, d.jsx)('main', {
                children: (0, d.jsx)(x, { gitmojis: o.v }),
              }),
            ],
          })
        }
    },
    3645: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(3907)
        },
      ])
    },
    3064: function (e) {
      e.exports = {
        emoji: 'styles_emoji__3XHLm',
        card: 'styles_card__2jSMO',
        cardList: 'styles_cardList__3a_Lj',
        gitmoji: 'styles_gitmoji__Cu8hd',
        cardHeader: 'styles_cardHeader__3K7wH',
        gitmojiInfo: 'styles_gitmojiInfo__2Dl1s',
        gitmojiCode: 'styles_gitmojiCode__33OTu',
        bounce: 'styles_bounce__gnjPI',
      }
    },
    2143: function (e) {
      e.exports = {
        container: 'styles_container__3rfws',
        button: 'styles_button__TrnYm',
        buttonActive: 'styles_buttonActive__22Idm',
      }
    },
    8698: function (e) {
      e.exports = {
        container: 'styles_container__oLf2W',
        searchInput: 'styles_searchInput__hraem',
      }
    },
    8288: function (e, t, n) {
      e.exports = n(9490)
    },
  },
  function (e) {
    e.O(0, [888, 179], function () {
      return (t = 3645), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
