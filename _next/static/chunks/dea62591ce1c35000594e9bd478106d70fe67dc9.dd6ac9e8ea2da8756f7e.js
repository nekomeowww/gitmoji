(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n||r&&(void 0!==i&&i)}},"/OlT":function(e,t,n){},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},o=n("lwAK"),c=n("FYa8"),l=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var s=p[c];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var u=r.props[s],f=a[s]||new Set;f.has(u)?i=!1:(f.add(u),a[s]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function d(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,l.isInAmpMode)(n)},t)}d.rewind=function(){};var h=d;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},ODXe:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,i=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return a(e)||r(e)||i(e)||o()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),i=n("W8MJ"),o=n("PJYZ"),c=n("7W2i"),l=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,m=function(e){c(n,e);var t=u(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,p&&i._hasHeadManager&&(i.props.headManager.mountedInstances.add(o(i)),i.emitChange()),i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=m},YFqc:function(e,t,n){e.exports=n("cTJO")},Zttt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("i6OX"),o=n("ww3E"),c=n("ODXe"),l=r.a.createElement,s=function(){return l("g",{id:"tongue",transform:"translate(304 32)"},l("g",{id:"Group"},l("ellipse",{id:"Oval",rx:39,ry:39,cy:39,cx:39,fill:"#FFDD67"}),l("path",{id:"Shape",fill:"#fff",d:"m38 29.4c0 7.1-5.8 13-13 13s-13-5.9-13-13c0-7.2 5.8-13 13-13s13 5.8 13 13z"}),l("ellipse",{id:"Oval",rx:"5.85",ry:"5.85",cy:"29.4",cx:25,fill:"#664E27"}),l("path",{id:"Shape",fill:"#664E27",d:"m63.7 35.3c-2.5-5.3-6.1-8-9.7-8-3.7 0-7.3 2.7-9.8 8-0.2 0.5 1 1.5 1.7 0.9 2.3-1.9 5.1-2.7 8.1-2.7 2.9 0 5.7 0.8 8 2.7 0.7 0.6 1.9-0.4 1.7-0.9z"}),l("g",{id:"Shape",transform:"translate(16.9 46.8)"},l("path",{d:"m42.7 0h-41.2c-0.989 0-1.5 0.659-1.5 1.3 0.0013 9.5 7.75 19.5 22.1 19.5s22.1-10 22.1-19.5c0-0.641-0.5-1.3-1.5-1.3z",fill:"#664E27"}),l("path",{d:"m34 7.8h-11.9-11.9c-0.95 0-1.1 0.41-1.1 1.1v5.2c0 11.4 5.8 17.1 13 17.1s13-5.7 13-17.1v-5.2c0-0.69-0.1-1.1-1.1-1.1z",fill:"#FF717F"}),l("polygon",{points:"24 7.8 22.1 25.7 20.2 7.8",fill:"#E2596C"}))))},u=function(){return l("g",{id:"sexy",transform:"translate(304 32)"},l("g",{id:"Group"},l("ellipse",{id:"Oval",rx:39,ry:39,cy:39,cx:39,fill:"#FFDD67"}),l("ellipse",{id:"Oval",rx:"10.4",ry:"10.4",cy:"45.7",cx:"66.1",fill:"#FF717F"}),l("ellipse",{id:"Oval",rx:"10.4",ry:"10.4",cy:"45.7",cx:"11.9",fill:"#FF717F"}),l("path",{id:"Shape",fill:"#917524",d:"m68.4 24.2c-3.5-4.2-8.7-6.7-14.2-6.6-0.8 0-1-2.9 0-2.9 6.3 0 12.4 2.8 16.4 7.7 0.6 0.7-1.7 2.4-2.2 1.8zm-44.6-6.8c-5.5 0-10.7 2.4-14.2 6.6-0.52 0.6-2.81-1.1-2.23-1.8 4.03-4.9 10.1-7.7 16.4-7.7 1 0 0.8 2.9 0 2.9z"}),l("ellipse",{id:"Oval",rx:"5.85",ry:"5.85",cy:"61.7",cx:39,fill:"#664E27"}),l("path",{id:"Shape",fill:"#fff",d:"m35.8 35.3c0 6.4-5.3 11.7-11.8 11.7-6.4 0-11.6-5.3-11.6-11.7 0-6.5 5.2-11.7 11.6-11.7 6.5 0 11.8 5.2 11.8 11.7z"}),l("ellipse",{id:"Oval",rx:"5.85",ry:"5.85",cy:"35.3",cx:24,fill:"#664E27"}),l("g",{transform:"translate(41.6 23.4)"},l("path",{id:"Shape",fill:"#fff",d:"m24 11.9c0 6.4-5.2 11.7-11.6 11.7-6.51 0-11.8-5.3-11.8-11.7 0.05-6.48 5.29-11.7 11.8-11.7 6.4-0.022 11.6 5.22 11.6 11.7z"}),l("ellipse",{id:"Oval",rx:"5.85",ry:"5.85",cy:"11.9",cx:"12.4",fill:"#664E27"}))))},f=function(){return l("g",{id:"sunglasses",transform:"translate(304 32)"},l("g",{id:"Group"},l("path",{id:"Shape",fill:"#FFDD67",d:"m39 0c21.5 0 39 17.5 39 39s-17.5 39-39 39-39-17.5-39-39 17.5-39 39-39"}),l("path",{id:"Shape",fill:"#494949",d:"m44 24c-2.9 1.4-7.1 1.4-10 0-3.1-1.6-6.8-2.6-11.3-2.9-4.3-0.4-13.6-0.4-18.2 1.2-0.52 0.2-1.04 0.4-1.55 0.7-0.28 0.1-0.34 0.2-0.34 0.8v0.7c0 1.3-0.16 0.8 0.76 1.3 1.8 1 2.82 3.8 3.36 7.5 0.78 5.5 3.47 8.9 7.87 10.6 4 1.5 8.5 1.5 12.6-0.2 2.2-0.8 4.1-2.2 5.6-4.5 2.7-3.9 1.9-6.4 3.3-9.8 1.2-2.9 4.6-2.9 5.8 0 1.4 3.4 0.6 5.9 3.3 9.8 1.5 2.3 3.4 3.7 5.6 4.5 4.1 1.7 8.6 1.7 12.6 0.2 4.4-1.7 7.1-5.1 7.9-10.6 0.5-3.7 1.5-6.5 3.3-7.5 0.9-0.5 0.8 0 0.8-1.3v-0.7c0-0.6-0.1-0.7-0.4-0.8-0.5-0.3-1-0.5-1.5-0.7-4.6-1.6-13.9-1.6-18.2-1.2-4.5 0.3-8.2 1.3-11.3 2.9"}),l("path",{id:"Shape",fill:"#664E27",d:"m55.4 52.4c-10.6 7.3-22.3 7.3-32.8 0-1.2-0.9-2.4 0.6-1.5 2 3.2 5.3 9.6 10 17.9 10s14.7-4.7 17.9-10c0.9-1.4-0.3-2.9-1.5-2z"})))},p=function(){return l("g",{id:"haha",className:"single-emoji-logo emoji-visible",transform:"translate(304 32)"},l("g",{id:"Group"},l("path",{id:"Oval",fill:"#FFDD67",d:"m39 78c21.5 0 39-17.5 39-39s-17.5-39-39-39-39 17.5-39 39 17.5 39 39 39z"}),l("g",{id:"Shape",fill:"#664E27",transform:"translate(11.7 20.5)"},l("path",{d:"m52.9 2.09c0.3 0.15 0.4 0.47 0.4 0.79-0.1 0.32-0.3 0.57-0.6 0.63-3.5 0.52-7.3 1.12-10.8 3.07 5.2 0.87 9.4 3.52 11.7 6.32 0.5 0.6-0.1 1.4-0.7 1.2-6.2-2.3-12.6-3.5-20.6-2.6-0.6 0-1.2-0.3-1-0.9 2.1-9.39 14.2-12.9 21.6-8.51zm-51.2 0c-0.29 0.15-0.45 0.47-0.4 0.79s0.3 0.57 0.62 0.63c3.5 0.52 7.21 1.12 10.8 3.07-5.35 0.87-9.55 3.52-11.8 6.32-0.538 0.6 0.11 1.4 0.68 1.2 6.2-2.3 12.6-3.5 20.6-2.6 0.6 0 1.2-0.3 1-0.9-2.1-9.39-14.2-12.9-21.6-8.51h0.03z"})),l("path",{id:"Shape",fill:"#664E27",d:"m62 42.2c-0.5-0.7-1.5-0.6-2.5-0.6h-41c-1 0-2-0.1-2.5 0.6-5.1 6.4 0.9 25.4 23 25.4s28.1-19 23-25.4z"}),l("path",{id:"Shape",fill:"#4C3526",d:"m41.4 51.7c-0.8-0.1-1.9 0.6-1.5 2.5 0.2 0.9 1.6 2.1 1.6 3.6 0 3.1-5 3.1-5 0 0-1.5 1.4-2.7 1.6-3.6 0.4-1.9-0.7-2.6-1.5-2.5-2 0-5.4 2.2-5.4 5.9 0 4.2 3.5 7.6 7.8 7.6s7.8-3.4 7.8-7.6c0-3.7-3.4-5.9-5.4-5.9z"}),l("path",{id:"Shape",fill:"#FF717F",d:"m29 63.3c2.9 1.2 6.2 1.9 10 1.9s7.1-0.7 10-1.9c-2.8-1.4-6.1-2.2-10-2.2s-7.2 0.8-10 2.2z"}),l("path",{id:"Shape",fill:"#fff",d:"m58.4 44.2h-38.8c-2.7 0-2.7 5.2-0.1 5.2h39c2.6 0 2.6-5.2-0.1-5.2z"})))},m=function(){return l("g",{id:"loved",transform:"translate(304 32)"},l("g",{id:"Group"},l("path",{id:"Shape",fill:"#FFDD67",d:"m78 39c0 21.5-17.5 39-39 39s-39-17.5-39-39 17.5-39 39-39 39 17.5 39 39z"}),l("path",{id:"Shape",fill:"#F46767",d:"m77.8 14.6c-0.6-3.5-2.6-6.37-5.8-7.23-3.4-0.95-6.6 0.41-9.7 3.53-1.7-4.74-4.3-8.24-8.4-10-4.3-1.89-8.4-0.645-11 2.64-2.7 3.42-3.8 8.66-0.9 15.6 2.7 6.5 14.9 19.5 15.2 19.9 0.5-0.3 14-8.7 17.3-12.9 3.2-4 3.9-8.1 3.3-11.5zm-42.7-11.1c-2.6-3.28-6.7-4.53-11-2.68-4.1 1.8-6.7 5.3-8.4 10-3.1-3.12-6.25-4.48-9.7-3.53-3.16 0.86-5.2 3.73-5.8 7.23-0.599 3.4 0.072 7.5 3.31 11.5 3.31 4.2 16.8 12.6 17.3 12.9 0.3-0.4 12.5-13.4 15.2-19.9 2.9-6.9 1.8-12.1-0.9-15.6v0.04z"}),l("path",{id:"Shape",fill:"#664E27",d:"m61.1 46.9c0-1.1-0.6-2.4-2.4-2.7-4.5-0.9-11.1-1.8-19.7-1.8s-15.2 0.9-19.7 1.8c-1.8 0.3-2.4 1.6-2.4 2.7 0 9.4 7.3 18.9 22.1 18.9s22.1-9.5 22.1-18.9z"}),l("path",{id:"Shape",fill:"#fff",d:"m55.5 47.2c-2.9-0.5-8.9-1.3-16.5-1.3s-13.6 0.8-16.5 1.3c-1.7 0.3-1.8 0.9-1.7 1.9 0.1 0.6 0.2 1.3 0.4 2 0.2 0.9 0.3 1.2 1.6 1.1 2.5-0.3 29.9-0.3 32.4 0 1.3 0.1 1.4-0.2 1.6-1.1 0.2-0.7 0.3-1.4 0.4-2 0.1-1 0-1.6-1.7-1.9z"})))},d=function(){return l("g",{id:"joy",transform:"translate(304 32)"},l("g",{id:"Group"},l("circle",{id:"Oval",cy:39,cx:39,r:39,fill:"#FFDD67"}),l("path",{id:"Shape",fill:"#664E27",d:"m62 42.2c-0.5-0.7-1.5-0.6-2.5-0.6h-41c-1 0-2-0.1-2.5 0.6-5.1 6.4 0.9 25.4 23 25.4s28.1-19 23-25.4z"}),l("path",{id:"Shape",fill:"#4C3526",d:"m41.4 51.7c-0.8-0.1-1.9 0.6-1.5 2.5 0.2 0.9 1.6 2.1 1.6 3.6 0 3.1-5 3.1-5 0 0-1.5 1.4-2.7 1.6-3.6 0.4-1.9-0.7-2.6-1.5-2.5-2 0-5.4 2.2-5.4 5.9 0 4.2 3.5 7.6 7.8 7.6s7.8-3.4 7.8-7.6c0-3.7-3.4-5.9-5.4-5.9z"}),l("path",{id:"Shape",fill:"#FF717F",d:"m29 63.3c2.9 1.2 6.2 1.9 10 1.9s7.1-0.7 10-1.9c-2.8-1.4-6.1-2.2-10-2.2s-7.2 0.8-10 2.2z"}),l("path",{id:"Shape",fill:"#fff",d:"m58.4 44.2h-38.8c-2.7 0-2.7 5.2-0.1 5.2h39c2.6 0 2.6-5.2-0.1-5.2z"}),l("g",{id:"Shape",fill:"#65B1EF",transform:"translate(0 37.7)"},l("path",{d:"m74.7 7.64c9.5 9.96-3.4 23.6-12.9 13.6-7-7.3-7.3-21.2-7.3-21.2 0 0.013 13.2 0.347 20.2 7.64zm-58.5 13.6c-9.46 10-22.4-3.6-12.9-13.6 7-7.25 20.2-7.59 20.2-7.59 0 0.003-0.3 13.9-7.3 21.2z"})),l("g",{id:"Shape",fill:"#664E27",transform:"translate(14.3 24.7)"},l("path",{d:"m20.2 9.97c-2.4-6.64-6.1-9.97-9.7-9.97-3.66 0-7.3 3.33-9.71 9.97-0.243 0.63 1 1.83 1.63 1.23 2.34-2.48 5.14-3.47 8.08-3.47 2.9 0 5.7 0.99 8.1 3.47 0.6 0.6 1.8-0.6 1.6-1.23zm28.4 0c-2.4-6.64-6-9.97-9.7-9.97-3.6 0-7.3 3.33-9.7 9.97-0.2 0.63 1 1.83 1.6 1.23 2.4-2.48 5.2-3.47 8.1-3.47s5.7 0.99 8.1 3.47c0.6 0.6 1.9-0.6 1.6-1.23z"}))))},h={JOY:"joy",LOVED:"loved",SEXY:"sexy",SMILING:"smiling",SUNGLASSES:"sunglasses",TONGUE:"tongue"},g=r.a.createElement,v=function(){var e=Object.values(h).map((function(e){return e})),t=r.a.useState(""),n=Object(c.a)(t,2),a=n[0],i=n[1];return r.a.useEffect((function(){i(e[Math.floor(Math.random()*e.length)])}),[]),g("svg",{xmlns:"http://www.w3.org/2000/svg",className:"gitmoji-logo",height:"137px",width:"457px",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 457 137"},g("title",null,"gitmoji"),g("g",{id:"gitmoji",fillRule:"evenodd",fill:"none"},g("g",{id:"Logo",transform:"translate(-270 -430)"},g("g",{id:"gitmoji",transform:"translate(270 430)"},g("path",{d:"m17.5 106c0.6 4 2.4 7 5.3 10 2.9 2 6.6 4 11.2 4 6.1 0 10.7-2 14-5s4.9-8 4.9-15.1v-5.1c-1.5 2.3-3.8 4.4-7.1 6.2-3.2 2-7.5 3-12.6 3-4.7 0-9.1-1-13.1-3-4.1-1.5-7.6-3.9-10.5-7-2.91-3-5.22-6.7-6.9-10.8-1.68-4.2-2.52-8.8-2.52-13.8 0.004-4.7 0.82-9.1 2.45-13.3s3.89-7.9 6.77-11c2.9-3.2 6.3-5.7 10.4-7.5 4-1.8 8.5-2.7 13.4-2.7 5.6 0 10.1 1 13.4 3 3.2 2 5.5 4.2 6.7 6.6v-8.3h18.5v63.2c0 4.6-0.7 9.6-2.1 13.6-1.4 5-3.6 9-6.6 12-3 4-6.8 6-11.5 8s-10.4 4-17 4c-4.9 0-9.3-1-13.3-3-4-1-7.5-3-10.5-5-2.94-3-5.34-5-7.16-8-1.82-4-2.98-7-3.46-10l17.3-5zm19-18.6c4.9 0 8.9-1.6 12-4.9 3.1-3.2 4.7-7.6 4.7-13.1s-1.7-9.8-4.9-13c-3.3-3.2-7.2-4.8-11.8-4.8-2.4 0-4.7 0.4-6.7 1.2-2.1 0.8-3.9 2-5.4 3.6-1.6 1.6-2.8 3.5-3.6 5.7-0.9 2.2-1.3 4.6-1.3 7.3 0 5.6 1.6 10 4.7 13.2 3.2 3.2 7.3 4.8 12.3 4.8zm54.7 19.6v-70.8h18.8v70.8h-18.8zm-2.3-94c0-3.39 1.1-6.22 3.4-8.53 2.3-2.3 5.1-3.45 8.7-3.45 3 0 6 1.15 8 3.45 2 2.31 4 5.14 4 8.53 0 3.1-2 5.9-4 8.2s-5 3.4-8 3.4c-3.6 0-6.4-1.1-8.7-3.4s-3.4-5.1-3.4-8.2zm65.1 23.2h15v16.9h-15v29.7c0 3.1 1 5.2 2 6.4 2 1.2 4 1.8 7 1.8 1 0 2 0 3-0.1s2-0.3 3-0.5v15.6c-1 1-3 1-4 1-2 1-4 1-7 1-7 0-13-2-17-6-4-3.6-6-9-6-15.9v-33h-12v-16.9h3c4 0 7-1.1 8-3.3 2-2.1 3-4.8 3-8v-9.9h17v21.2zm30 70.8v-70.8h18v8.6c1-1.7 2-3.3 4-4.6 1-1.4 3-2.5 5-3.3 2-0.9 4-1.6 6-2 2-0.5 4-0.8 6-0.8 5 0 9 1 13 3.1 3 2 6 4.9 8 8.7 3-4.3 6-7.3 10-9.1s8-2.7 12-2.7 7 0.5 10 1.5c3 1.1 6 2.7 8 4.9 3 2.2 4 5 6 8.4 1 3.4 2 7.5 2 12.2v45.9h-19v-42c0-3.9 0-7.1-2-9.6-2-2.6-6-3.8-10-3.8s-7 1.3-10 4.1c-2 2.7-3 6-3 9.8v41.5h-19v-42c0-3.9-1-7.1-3-9.6-2-2.6-5-3.8-10-3.8-4 0-7 1.3-9 4-3 2.7-4 6-4 9.9v41.5h-19zm159-15.3c3 0 5-0.4 7-1.3 2-0.8 4-2.1 6-3.8 1-1.7 3-3.7 4-6.2s1-5.5 1-8.8c0-3.4 0-6.3-1-8.8s-3-4.6-4-6.3c-2-1.7-4-2.9-6-3.8s-4-1.3-7-1.3c-2 0-4 0.4-6 1.3-3 0.9-5 2.1-6 3.8-2 1.7-3 3.8-4 6.3s-2 5.4-2 8.8c0 3.3 1 6.3 2 8.8s2 4.5 4 6.2c1 1.7 3 3 6 3.8 2 0.9 4 1.3 6 1.3zm0-57.7c6 0 11 0.9 15 2.8 5 1.9 9 4.5 12 7.8s6 7.2 8 11.9c2 4.6 2 9.6 2 15.1 0 5.4 0 10.5-2 15-2 4.6-5 8.5-8 11.9-3 3.5-7 5.5-12 7.5-4 2-9 3-15 3-5 0-10-1-14-3-5-2-9-4-12-7.5-4-3.4-6-7.3-8-11.9-2-4.5-3-9.6-3-15 0-5.5 1-10.5 3-15.1 2-4.7 4-8.6 8-11.9 3-3.3 7-5.9 12-7.8 4-1.9 9-2.8 14-2.8zm53 2.2h19v76.8c0 4-1 7-2 10-1 2-2 5-4 7s-4 4-7 5-6 2-9 2-6-1-8-1c-2-1-3-1-3-1v-16h2c1 1 2 1 4 1 3 0 5-1 6-3 1-1 2-3 2-6v-74.8zm-3-23.4c0-3.34 1-6.17 4-8.47 2-2.31 5-3.46 8-3.46 3 0.002 6 1.15 9 3.46 2 2.3 3 5.13 3 8.47 0 3.3-1 6-3 8.3-3 2.3-6 3.4-9 3.4s-6-1.1-8-3.4c-3-2.3-4-5-4-8.3zm42 94.2v-70.8h19v70.8h-19zm-2-94c0-3.39 1-6.22 3-8.53 3-2.3 5-3.45 9-3.45 3 0 6 1.15 8 3.45 2 2.31 4 5.14 4 8.53 0 3.1-2 5.9-4 8.2s-5 3.4-8 3.4c-4 0-6-1.1-9-3.4-2-2.3-3-5.1-3-8.2z",fill:"#000"}),function(e){switch(e){case h.JOY:return g(d,null);case h.LOVED:return g(m,null);case h.SEXY:return g(u,null);case h.SMILING:return g(p,null);case h.SUNGLASSES:return g(f,null);case h.TONGUE:return g(s,null)}}(a)))))},y=r.a.createElement,w=function(e){return y("header",{className:"header"},y(v,null),e.withHeadline&&y("h2",null,"\u63d0\u4ea4 commit \u4fe1\u606f\u7684 Emoji \u6307\u5357"),e.withSocialButtons&&y("div",{className:"header-buttons"},y(o.a,{icon:"star",link:"https://github.com/nekomeowww/gitmoji-zhcn",text:"GitHub"}),y(o.a,{icon:"twitter",link:"https://twitter.com/intent/tweet?text=gitmoji%20%E2%80%93%20\u4e00\u4e2a\u63d0\u4ea4%20commit%20\u4fe1\u606f\u7684%20%23emoji%20\u6307\u5357%20by%20%40crloscuesta%20\u4e2d\u6587\u672c\u5730\u5316\u7531%20@ayakaneko%20\u5b8c\u6210%20%F0%9F%98%8D%F0%9F%98%9C&url=https://neko.ayaka.moe/gitmoji",target:"_blank",text:"\u53d1\u63a8 Tweet"})))},x=n("YFqc"),b=n.n(x),k=r.a.createElement,S=function(){return k("nav",{className:"nav row middle-xs"},k("input",{className:"c-hamburger__input",id:"hamburger-menu",type:"checkbox"}),k("label",{className:"c-hamburger c-hamburger--htx",htmlFor:"hamburger-menu"},k("span",null)),k("div",{className:"modal"},k("div",{className:"modal-content"},k("ul",{className:"navigation"},k("li",{className:"item"},k(b.a,{href:"/"},k("a",{onMouseDown:function(){return window.ga("send","event","Menu","Gitmoji")}},"\u9996\u9875"))),k("li",{className:"item"},k(b.a,{href:"/about"},k("a",{onMouseDown:function(){return window.ga("send","event","Menu","About")}},"\u5173\u4e8e"))),k("li",{className:"item"},k(b.a,{href:"/contributors"},k("a",{onMouseDown:function(){return window.ga("send","event","Menu","Contributors")}},"\u8d21\u732e\u8005"))),k("li",{className:"item"},k("a",{href:"https://github.com/nekomeowww/gitmoji-zhcn",onMouseDown:function(){return window.ga("send","event","Menu","GitHub")}},"GitHub"))))))},E=r.a.createElement,z=function(){return E("footer",{className:"footer"},E("div",{className:"wrap"},E("div",{className:"row middle-xs"},E("div",{className:"col-sm-6 made-with-love"},E("h3",null,"\u7531",E("a",{href:"https://carloscuesta.me"}," Carlos Cuesta "),"\u5236\u4f5c \u7531",E("a",{href:"https://github.com/nekomeowww"}," Ayaka Neko "),"\u5b8c\u6210\u4e2d\u6587\u672c\u5730\u5316")),E("div",{className:"col-sm-6 footer-nav"},E("nav",null,E(b.a,{href:"/about"},E("a",null,"\u5173\u4e8e")),E(b.a,{href:"/contributors"},E("a",null,"\u8d21\u732e\u8005")),E("a",{href:"https://github.com/nekomeowww/gitmoji-zhcn"},"GitHub"))))))},M=a.createElement;t.a=function(e){return M(a.Fragment,null,M(i.a,null),M(S,null),M(w,{withHeadline:!0,withSocialButtons:e.headerWithSocialButtons}),M("main",{className:"wrap"},e.children),M(z,null))}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i,o=r(n("q1tI")),c=n("elyg"),l=(n("g/15"),n("nOHt")),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=i||(u?i=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function m(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=o.default.useState(),r=a(n,2),i=r[0],s=r[1],d=(0,l.useRouter)(),h=d&&d.pathname||"/",g=o.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),v=g.href,y=g.as;o.default.useEffect((function(){if(t&&u&&i&&i.tagName&&(0,c.isLocalURL)(v)&&!f[v+"%"+y])return p(i,(function(){m(d,v,y)}))}),[t,i,v,y,d]);var w=e.children,x=e.replace,b=e.shallow,k=e.scroll;"string"===typeof w&&(w=o.default.createElement("a",null,w));var S=o.Children.only(w),E={ref:function(e){e&&s(e),S&&"object"===typeof S&&S.ref&&("function"===typeof S.ref?S.ref(e):"object"===typeof S.ref&&(S.ref.current=e))},onClick:function(e){S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,v,y,x,b,k)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(v)&&(S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),m(d,v,y,{priority:!0}))}),!e.passHref&&("a"!==S.type||"href"in S.props)||(E.href=(0,c.addBasePath)(y)),o.default.cloneElement(S,E)};t.default=d},i6OX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=r.a.createElement,o=function(){return i("svg",{style:{position:"absolute",width:0,height:0},width:0,height:0,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i("defs",null,i("symbol",{id:"icon-heart",viewBox:"0 0 64 64"},i("title",null,"heart"),i("path",{className:"heart",d:"m61.1 18.2c-6.4-17-27.2-9.4-29.1-.9-2.6-9-22.9-15.7-29.1.9-6.9 18.5 26.7 35.1 29.1 37.8 2.4-2.2 36-19.6 29.1-37.8",fill:"#ff5a79"})),i("symbol",{id:"icon-star",viewBox:"0 0 64 64"},i("title",null,"star"),i("path",{className:"twitter",d:"M62,25.2H39.1L32,3l-7.1,22.2H2l18.5,13.7l-7,22.1L32,47.3L50.5,61l-7.1-22.2L62,25.2z",fill:"#FFDD67"})),i("symbol",{id:"icon-twitter",viewBox:"0 0 64 64"},i("title",null,"twitter"),i("g",{fill:"#42ade2"},i("path",{d:"m59.8 24.3c0 0 1.1-6.2-3.5-3.4 0 0-.4-6.3-4.3-1.9 0 0-2.1-3.9-4.4-.3-3.1 4.8-5.2 12.4-3.2 25l3.8-2.5c2.7-7.9 12.4-8.8 13.7-13.1.9-3-2.1-3.8-2.1-3.8"}),i("path",{d:"m22.1 17.6l-9.9 3.6c2.2-12 16.6-11.2 16.6-11.2s-6.8 3.2-6.7 7.6"}),i("path",{d:"m23.7 19.8l-10.5 1.4c4.8-11.2 18.7-7.3 18.7-7.3s-7.3 1.6-8.2 5.9"})),i("g",{fill:"#ffd93b"},i("path",{d:"m2 29l5.4-1.4v3.6c0-.1-3.3-.6-5.4-2.2"}),i("path",{d:"M7.4,27.5L2,24.8c3.6-2.8,7.7-1.9,7.7-1.9L7.4,27.5z"})),i("g",{fill:"#e08828"},i("path",{d:"m33.8 53h-2.1v7.9c-.3.1-2.1-.1-2.9-.1-1.8 0-3.3 1.3-3.3 1.3h8.3v-9.1"}),i("path",{d:"m25 53h-2.1v7.9c-.3.1-2.1-.1-2.9-.1-1.8 0-3.3 1.3-3.3 1.3h8.3v-9.1"}),i("path",{d:"m54 36.2c3.9 0-4.1 17.5-23.3 17.5-13 0-23.9-5.2-23.9-21.5 0-10.1 6.4-18.3 19.5-15 13.3 3.5 6.5 19 27.7 19",fill:"#42ade2"}),i("path",{d:"m37.6 51.7c-15.6 0-14-12-27.9-11.2 5.1 15.8 27.9 11.2 27.9 11.2",fill:"#fff"}),i("path",{d:"m39.1 29.2c-10-9.8-20.2 6.2-7.9 12.6 12.1 6.2 20.4-4.8 20.4-4.8s-6.1-1.5-12.5-7.8",fill:"#297b9d"})),i("circle",{cx:"15.1",cy:"24.9",r:"2.5",fill:"#3e4347"}))))},c=r.a.createElement;t.b=function(e){return c("svg",{className:"icon icon-".concat(e.name)},c("use",{xlinkHref:"#icon-".concat(e.name)}))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},wtQ5:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("8Kt/"),o=n.n(i),c=r.a.createElement;t.a=function(e){return c(o.a,null,c("title",null,"gitmoji ".concat(e.pageTitle?"| "+e.pageTitle+" |":"|"," \u63d0\u4ea4 commit \u4fe1\u606f\u7684 Emoji \u6307\u5357")),c("link",{rel:"canonical",href:"https://neko.ayaka.moe/gitmoji/".concat(e.pageUrl||"")}),c("meta",{name:"author",content:"Ayaka Neko"}),c("meta",{name:"description",content:"\u63d0\u4ea4 commit \u4fe1\u606f\u7684 Emoji \u6307\u5357\u3002\u65e8\u5728\u6210\u4e3a\u5728 GitHub \u7684\u63d0\u4ea4\u6d88\u606f\u4e0a\u4f7f\u7528 Emoji \u7684\u6807\u51c6\u5316\u901f\u67e5\u8868\u3002"}),c("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c("meta",{name:"twitter:card",content:"summary"}),c("meta",{name:"twitter:title",content:"gitmoji"}),c("meta",{name:"twitter:description",content:"\u63d0\u4ea4 commit \u4fe1\u606f\u7684 Emoji \u6307\u5357"}),c("meta",{name:"twitter:image",content:"https://neko.ayaka.moe/gitmoji/static/gitmoji.gif"}),c("meta",{name:"twitter:creator",content:"@ayakaneko"}),c("meta",{name:"twitter:url",content:"https://neko.ayaka.moe/gitmoji"}),c("meta",{property:"og:title",content:"gitmoji"}),c("meta",{name:"og:description",content:"\u63d0\u4ea4 commit \u4fe1\u606f\u7684 Emoji \u6307\u5357"}),c("meta",{property:"og:image",content:"https://neko.ayaka.moe/gitmoji/static/gitmoji.gif"}),c("meta",{name:"og:url",content:"https://neko.ayaka.moe/gitmoji"}),c("meta",{name:"robots",content:"index, follow"}),c("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/apple-icon-57x57.png"}),c("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/apple-icon-60x60.png"}),c("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/apple-icon-72x72.png"}),c("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/apple-icon-76x76.png"}),c("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/apple-icon-114x114.png"}),c("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/apple-icon-120x120.png"}),c("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/apple-icon-144x144.png"}),c("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/apple-icon-152x152.png"}),c("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/apple-icon-180x180.png"}),c("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/static/android-icon-192x192.png"}),c("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/favicon-32x32.png"}),c("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/static/favicon-96x96.png"}),c("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/favicon-16x16.png"}),c("link",{rel:"manifest",href:"/static/manifest.json"}),c("meta",{name:"msapplication-TileColor",content:"#FFDD67"}),c("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),c("meta",{name:"theme-color",content:"#FFDD67"}))}},ww3E:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("i6OX"),o=r.a.createElement;t.a=function(e){return o("a",{className:"btn btn-pink",target:e.target&&e.target,href:e.link},e.icon&&o(i.b,{name:e.icon}),e.text)}}}]);