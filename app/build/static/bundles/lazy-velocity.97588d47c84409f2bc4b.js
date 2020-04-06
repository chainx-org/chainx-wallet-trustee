webpackJsonp([0], {
  514: function(e, t, r) {
    var n, a;
    !(function(e) {
      'use strict';
      function t(e) {
        var t = e.length,
          n = r.type(e);
        return (
          'function' !== n &&
          !r.isWindow(e) &&
          (!(1 !== e.nodeType || !t) || ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e)))
        );
      }
      var r, n, a, i, o, s, l;
      if (!e.jQuery) {
        (r = function(e, t) {
          return new r.fn.init(e, t);
        }),
          (r.isWindow = function(e) {
            return e && e === e.window;
          }),
          (r.type = function(e) {
            return e ? ('object' == typeof e || 'function' == typeof e ? a[o.call(e)] || 'object' : typeof e) : e + '';
          }),
          (r.isArray =
            Array.isArray ||
            function(e) {
              return 'array' === r.type(e);
            }),
          (r.isPlainObject = function(e) {
            var t;
            if (!e || 'object' !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;
            try {
              if (e.constructor && !i.call(e, 'constructor') && !i.call(e.constructor.prototype, 'isPrototypeOf'))
                return !1;
            } catch (e) {
              return !1;
            }
            for (t in e);
            return void 0 === t || i.call(e, t);
          }),
          (r.each = function(e, r, n) {
            var a = 0,
              i = e.length,
              o = t(e);
            if (n) {
              if (o) for (; a < i && !1 !== r.apply(e[a], n); a++);
              else for (a in e) if (e.hasOwnProperty(a) && !1 === r.apply(e[a], n)) break;
            } else if (o) for (; a < i && !1 !== r.call(e[a], a, e[a]); a++);
            else for (a in e) if (e.hasOwnProperty(a) && !1 === r.call(e[a], a, e[a])) break;
            return e;
          }),
          (r.data = function(e, t, a) {
            var i, o, s;
            if (void 0 === a) {
              if (((i = e[r.expando]), (o = i && n[i]), void 0 === t)) return o;
              if (o && t in o) return o[t];
            } else if (void 0 !== t)
              return (s = e[r.expando] || (e[r.expando] = ++r.uuid)), (n[s] = n[s] || {}), (n[s][t] = a), a;
          }),
          (r.removeData = function(e, t) {
            var a = e[r.expando],
              i = a && n[a];
            i &&
              (t
                ? r.each(t, function(e, t) {
                    delete i[t];
                  })
                : delete n[a]);
          }),
          (r.extend = function() {
            var e,
              t,
              n,
              a,
              i,
              o,
              s = arguments[0] || {},
              l = 1,
              u = arguments.length,
              c = !1;
            for (
              'boolean' == typeof s && ((c = s), (s = arguments[l] || {}), l++),
                'object' != typeof s && 'function' !== r.type(s) && (s = {}),
                l === u && ((s = this), l--);
              l < u;
              l++
            )
              if ((i = arguments[l]))
                for (a in i)
                  i.hasOwnProperty(a) &&
                    ((e = s[a]),
                    (n = i[a]),
                    s !== n &&
                      (c && n && (r.isPlainObject(n) || (t = r.isArray(n)))
                        ? (t ? ((t = !1), (o = e && r.isArray(e) ? e : [])) : (o = e && r.isPlainObject(e) ? e : {}),
                          (s[a] = r.extend(c, o, n)))
                        : void 0 !== n && (s[a] = n)));
            return s;
          }),
          (r.queue = function(e, n, a) {
            function i(e, r) {
              var n = r || [];
              return (
                e &&
                  (t(Object(e))
                    ? (function(e, t) {
                        for (var r = +t.length, n = 0, a = e.length; n < r; ) e[a++] = t[n++];
                        if (r !== r) for (; void 0 !== t[n]; ) e[a++] = t[n++];
                        e.length = a;
                      })(n, 'string' == typeof e ? [e] : e)
                    : [].push.call(n, e)),
                n
              );
            }
            if (e) {
              n = (n || 'fx') + 'queue';
              var o = r.data(e, n);
              return a ? (!o || r.isArray(a) ? (o = r.data(e, n, i(a))) : o.push(a), o) : o || [];
            }
          }),
          (r.dequeue = function(e, t) {
            r.each(e.nodeType ? [e] : e, function(e, n) {
              t = t || 'fx';
              var a = r.queue(n, t),
                i = a.shift();
              'inprogress' === i && (i = a.shift()),
                i &&
                  ('fx' === t && a.unshift('inprogress'),
                  i.call(n, function() {
                    r.dequeue(n, t);
                  }));
            });
          }),
          (r.fn = r.prototype = {
            init: function(e) {
              if (e.nodeType) return (this[0] = e), this;
              throw Error('Not a DOM node.');
            },
            offset: function() {
              var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
              return {
                top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0),
              };
            },
            position: function() {
              function e(e) {
                for (
                  var t = e.offsetParent;
                  t && 'html' !== t.nodeName.toLowerCase() && t.style && 'static' === t.style.position;

                )
                  t = t.offsetParent;
                return t || document;
              }
              var t = this[0],
                n = e(t),
                a = this.offset(),
                i = /^(?:body|html)$/i.test(n.nodeName) ? { top: 0, left: 0 } : r(n).offset();
              return (
                (a.top -= parseFloat(t.style.marginTop) || 0),
                (a.left -= parseFloat(t.style.marginLeft) || 0),
                n.style &&
                  ((i.top += parseFloat(n.style.borderTopWidth) || 0),
                  (i.left += parseFloat(n.style.borderLeftWidth) || 0)),
                { top: a.top - i.top, left: a.left - i.left }
              );
            },
          }),
          (n = {}),
          (r.expando = 'velocity' + new Date().getTime()),
          (r.uuid = 0),
          (a = {}),
          (i = a.hasOwnProperty),
          (o = a.toString),
          (s = 'Boolean Number String Function Array Date RegExp Object Error'.split(' '));
        for (l = 0; l < s.length; l++) a['[object ' + s[l] + ']'] = s[l].toLowerCase();
        (r.fn.init.prototype = r.fn), (e.Velocity = { Utilities: r });
      }
    })(window),
      (function(i) {
        'use strict';
        'object' == typeof e && 'object' == typeof e.exports
          ? (e.exports = i())
          : ((n = i), void 0 !== (a = 'function' == typeof n ? n.call(t, r, t, e) : n) && (e.exports = a));
      })(function() {
        'use strict';
        return (function(e, t, r, n) {
          function a(e) {
            for (var t, r = -1, n = e ? e.length : 0, a = []; ++r < n; ) (t = e[r]) && a.push(t);
            return a;
          }
          function i(e) {
            return A.isWrapped(e) ? (e = T.call(e)) : A.isNode(e) && (e = [e]), e;
          }
          function o(e) {
            var t = g.data(e, 'velocity');
            return null === t ? n : t;
          }
          function s(e, t) {
            var r = o(e);
            r &&
              r.delayTimer &&
              !r.delayPaused &&
              ((r.delayRemaining = r.delay - t + r.delayBegin),
              (r.delayPaused = !0),
              clearTimeout(r.delayTimer.setTimeout));
          }
          function l(e, t) {
            var r = o(e);
            r &&
              r.delayTimer &&
              r.delayPaused &&
              ((r.delayPaused = !1), (r.delayTimer.setTimeout = setTimeout(r.delayTimer.next, r.delayRemaining)));
          }
          function u(e) {
            return function(t) {
              return Math.round(t * e) * (1 / e);
            };
          }
          function c(e, r, n, a) {
            function i(e, t) {
              return 1 - 3 * t + 3 * e;
            }
            function o(e, t) {
              return 3 * t - 6 * e;
            }
            function s(e) {
              return 3 * e;
            }
            function l(e, t, r) {
              return ((i(t, r) * e + o(t, r)) * e + s(t)) * e;
            }
            function u(e, t, r) {
              return 3 * i(t, r) * e * e + 2 * o(t, r) * e + s(t);
            }
            function c(t, r) {
              var a, i, o;
              for (a = 0; a < x; ++a) {
                if (0 === (i = u(r, e, n))) return r;
                (o = l(r, e, n) - t), (r -= o / i);
              }
              return r;
            }
            function p() {
              for (var t = 0; t < k; ++t) h[t] = l(t * V, e, n);
            }
            function d(t, r, a) {
              var i,
                o,
                s = 0;
              do {
                (o = r + (a - r) / 2), (i = l(o, e, n) - t), i > 0 ? (a = o) : (r = o);
              } while (Math.abs(i) > S && ++s < P);
              return o;
            }
            function f(t) {
              for (var r, a, i, o = 0, s = 1, l = k - 1; s !== l && h[s] <= t; ++s) o += V;
              return (
                --s,
                (r = (t - h[s]) / (h[s + 1] - h[s])),
                (a = o + r * V),
                (i = u(a, e, n)),
                i >= w ? c(t, a) : 0 === i ? a : d(t, o, o + V)
              );
            }
            function g() {
              (y = !0), (e === r && n === a) || p();
            }
            var m,
              h,
              y,
              b,
              v,
              x = 4,
              w = 0.001,
              S = 1e-7,
              P = 10,
              k = 11,
              V = 1 / (k - 1),
              T = 'Float32Array' in t;
            if (4 !== arguments.length) return !1;
            for (m = 0; m < 4; ++m)
              if ('number' != typeof arguments[m] || isNaN(arguments[m]) || !isFinite(arguments[m])) return !1;
            return (
              (e = Math.min(e, 1)),
              (n = Math.min(n, 1)),
              (e = Math.max(e, 0)),
              (n = Math.max(n, 0)),
              (h = T ? new Float32Array(k) : Array(k)),
              (y = !1),
              (b = function(t) {
                return y || g(), e === r && n === a ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), r, a);
              }),
              (b.getControlPoints = function() {
                return [{ x: e, y: r }, { x: n, y: a }];
              }),
              (v = 'generateBezier(' + [e, r, n, a] + ')'),
              (b.toString = function() {
                return v;
              }),
              b
            );
          }
          function p(e, t) {
            var r = e;
            return (
              A.isString(e)
                ? y.Easings[e] || (r = !1)
                : (r =
                    A.isArray(e) && 1 === e.length
                      ? u.apply(null, e)
                      : A.isArray(e) && 2 === e.length
                      ? b.apply(null, e.concat([t]))
                      : !(!A.isArray(e) || 4 !== e.length) && c.apply(null, e)),
              !1 === r && (r = y.Easings[y.defaults.easing] ? y.defaults.easing : h),
              r
            );
          }
          function d(e) {
            var t, r, i, s, l, u, c, p, m, h, b, x, S, k, T, C, F, E, N, H, O, j, q, L, z, R, M;
            if (e)
              for (
                t = y.timestamp && !0 !== e ? e : V.now(),
                  r = y.State.calls.length,
                  r > 1e4 && ((y.State.calls = a(y.State.calls)), (r = y.State.calls.length)),
                  i = 0;
                i < r;
                i++
              )
                if (y.State.calls[i]) {
                  if (
                    ((s = y.State.calls[i]),
                    (l = s[0]),
                    (u = s[2]),
                    (c = s[3]),
                    (p = !!c),
                    (m = null),
                    (h = s[5]),
                    (b = s[6]),
                    c || (c = y.State.calls[i][3] = t - 16),
                    h)
                  ) {
                    if (!0 !== h.resume) continue;
                    (c = s[3] = Math.round(t - b - 16)), (s[5] = null);
                  }
                  for (b = s[6] = t - c, x = Math.min(b / u.duration, 1), S = 0, k = l.length; S < k; S++)
                    if (((T = l[S]), (C = T.element), o(C))) {
                      (F = !1),
                        u.display !== n &&
                          null !== u.display &&
                          'none' !== u.display &&
                          ('flex' === u.display &&
                            ((E = ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex']),
                            g.each(E, function(e, t) {
                              v.setPropertyValue(C, 'display', t);
                            })),
                          v.setPropertyValue(C, 'display', u.display)),
                        u.visibility !== n &&
                          'hidden' !== u.visibility &&
                          v.setPropertyValue(C, 'visibility', u.visibility);
                      for (N in T)
                        if (T.hasOwnProperty(N) && 'element' !== N) {
                          if (
                            ((H = T[N]),
                            (j = A.isString(H.easing) ? y.Easings[H.easing] : H.easing),
                            A.isString(H.pattern)
                              ? ((q =
                                  1 === x
                                    ? function(e, t, r) {
                                        var n = H.endValue[t];
                                        return r ? Math.round(n) : n;
                                      }
                                    : function(e, t, r) {
                                        var n = H.startValue[t],
                                          a = H.endValue[t] - n,
                                          i = n + a * j(x, u, a);
                                        return r ? Math.round(i) : i;
                                      }),
                                (O = H.pattern.replace(/{(\d+)(!)?}/g, q)))
                              : 1 === x
                              ? (O = H.endValue)
                              : ((L = H.endValue - H.startValue), (O = H.startValue + L * j(x, u, L))),
                            !p && O === H.currentValue)
                          )
                            continue;
                          (H.currentValue = O),
                            'tween' === N
                              ? (m = O)
                              : (v.Hooks.registered[N] &&
                                  ((z = v.Hooks.getRoot(N)),
                                  (R = o(C).rootPropertyValueCache[z]) && (H.rootPropertyValue = R)),
                                (M = v.setPropertyValue(
                                  C,
                                  N,
                                  H.currentValue + (P < 9 && 0 === parseFloat(O) ? '' : H.unitType),
                                  H.rootPropertyValue,
                                  H.scrollData
                                )),
                                v.Hooks.registered[N] &&
                                  (v.Normalizations.registered[z]
                                    ? (o(C).rootPropertyValueCache[z] = v.Normalizations.registered[z](
                                        'extract',
                                        null,
                                        M[1]
                                      ))
                                    : (o(C).rootPropertyValueCache[z] = M[1])),
                                'transform' === M[0] && (F = !0));
                        }
                      u.mobileHA &&
                        o(C).transformCache.translate3d === n &&
                        ((o(C).transformCache.translate3d = '(0px, 0px, 0px)'), (F = !0)),
                        F && v.flushTransformCache(C);
                    }
                  u.display !== n && 'none' !== u.display && (y.State.calls[i][2].display = !1),
                    u.visibility !== n && 'hidden' !== u.visibility && (y.State.calls[i][2].visibility = !1),
                    u.progress && u.progress.call(s[1], s[1], x, Math.max(0, c + u.duration - t), c, m),
                    1 === x && f(i);
                }
            y.State.isTicking && w(d);
          }
          function f(e, t) {
            var r, a, i, s, l, u, c, p, d, f, m, h;
            if (!y.State.calls[e]) return !1;
            for (
              r = y.State.calls[e][0],
                a = y.State.calls[e][1],
                i = y.State.calls[e][2],
                s = y.State.calls[e][4],
                l = !1,
                u = 0,
                c = r.length;
              u < c;
              u++
            ) {
              if (
                ((p = r[u].element),
                t ||
                  i.loop ||
                  ('none' === i.display && v.setPropertyValue(p, 'display', i.display),
                  'hidden' === i.visibility && v.setPropertyValue(p, 'visibility', i.visibility)),
                (d = o(p)),
                !0 === i.loop ||
                  (g.queue(p)[1] !== n && /\.velocityQueueEntryFlag/i.test(g.queue(p)[1])) ||
                  (d &&
                    ((d.isAnimating = !1),
                    (d.rootPropertyValueCache = {}),
                    (f = !1),
                    g.each(v.Lists.transforms3D, function(e, t) {
                      var r = /^scale/.test(t) ? 1 : 0,
                        a = d.transformCache[t];
                      d.transformCache[t] !== n &&
                        RegExp('^\\(' + r + '[^.]').test(a) &&
                        ((f = !0), delete d.transformCache[t]);
                    }),
                    i.mobileHA && ((f = !0), delete d.transformCache.translate3d),
                    f && v.flushTransformCache(p),
                    v.Values.removeClass(p, 'velocity-animating'))),
                !t && i.complete && !i.loop && u === c - 1)
              )
                try {
                  i.complete.call(a, a);
                } catch (e) {
                  setTimeout(function() {
                    throw e;
                  }, 1);
                }
              s && !0 !== i.loop && s(a),
                d &&
                  !0 === i.loop &&
                  !t &&
                  (g.each(d.tweensContainer, function(e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                      var r = t.startValue;
                      (t.startValue = t.endValue), (t.endValue = r);
                    }
                    /^backgroundPosition/.test(e) &&
                      100 === parseFloat(t.endValue) &&
                      '%' === t.unitType &&
                      ((t.endValue = 0), (t.startValue = 100));
                  }),
                  y(p, 'reverse', { loop: !0, delay: i.delay })),
                !1 !== i.queue && g.dequeue(p, i.queue);
            }
            for (y.State.calls[e] = !1, m = 0, h = y.State.calls.length; m < h; m++)
              if (!1 !== y.State.calls[m]) {
                l = !0;
                break;
              }
            !1 === l && ((y.State.isTicking = !1), delete y.State.calls, (y.State.calls = []));
          }
          var g,
            m,
            h,
            y,
            b,
            v,
            x,
            w,
            S,
            P = (function() {
              var e, t;
              if (r.documentMode) return r.documentMode;
              for (e = 7; e > 4; e--)
                if (
                  ((t = r.createElement('div')),
                  (t.innerHTML = '\x3c!--[if IE ' + e + ']><span></span><![endif]--\x3e'),
                  t.getElementsByTagName('span').length)
                )
                  return (t = null), e;
              return n;
            })(),
            k = (function() {
              var e = 0;
              return (
                t.webkitRequestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                function(t) {
                  var r,
                    n = new Date().getTime();
                  return (
                    (r = Math.max(0, 16 - (n - e))),
                    (e = n + r),
                    setTimeout(function() {
                      t(n + r);
                    }, r)
                  );
                }
              );
            })(),
            V = (function() {
              var e,
                r = t.performance || {};
              return (
                'function' != typeof r.now &&
                  ((e = r.timing && r.timing.navigationStart ? r.timing.navigationStart : new Date().getTime()),
                  (r.now = function() {
                    return new Date().getTime() - e;
                  })),
                r
              );
            })(),
            T = (function() {
              var e = Array.prototype.slice;
              try {
                return e.call(r.documentElement), e;
              } catch (t) {
                return function(t, r) {
                  var n,
                    a,
                    i,
                    o,
                    s,
                    l = this.length;
                  if (('number' != typeof t && (t = 0), 'number' != typeof r && (r = l), this.slice))
                    return e.call(this, t, r);
                  if (
                    ((a = []),
                    (i = t >= 0 ? t : Math.max(0, l + t)),
                    (o = r < 0 ? l + r : Math.min(r, l)),
                    (s = o - i),
                    s > 0)
                  )
                    if (((a = Array(s)), this.charAt)) for (n = 0; n < s; n++) a[n] = this.charAt(i + n);
                    else for (n = 0; n < s; n++) a[n] = this[i + n];
                  return a;
                };
              }
            })(),
            C = function() {
              return Array.prototype.includes
                ? function(e, t) {
                    return e.includes(t);
                  }
                : Array.prototype.indexOf
                ? function(e, t) {
                    return e.indexOf(t) >= 0;
                  }
                : function(e, t) {
                    for (var r = 0; r < e.length; r++) if (e[r] === t) return !0;
                    return !1;
                  };
            },
            A = {
              isNumber: function(e) {
                return 'number' == typeof e;
              },
              isString: function(e) {
                return 'string' == typeof e;
              },
              isArray:
                Array.isArray ||
                function(e) {
                  return '[object Array]' === Object.prototype.toString.call(e);
                },
              isFunction: function(e) {
                return '[object Function]' === Object.prototype.toString.call(e);
              },
              isNode: function(e) {
                return e && e.nodeType;
              },
              isWrapped: function(e) {
                return (
                  e &&
                  e !== t &&
                  A.isNumber(e.length) &&
                  !A.isString(e) &&
                  !A.isFunction(e) &&
                  !A.isNode(e) &&
                  (0 === e.length || A.isNode(e[0]))
                );
              },
              isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement;
              },
              isEmptyObject: function(e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0;
              },
            },
            F = !1;
          if ((e.fn && e.fn.jquery ? ((g = e), (F = !0)) : (g = t.Velocity.Utilities), P <= 8 && !F))
            throw Error('Velocity: IE8 and below require jQuery to be loaded before Velocity.');
          return P <= 7
            ? void (jQuery.fn.velocity = jQuery.fn.animate)
            : ((m = 400),
              (h = 'swing'),
              (y = {
                State: {
                  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                  isAndroid: /Android/i.test(navigator.userAgent),
                  isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                  isChrome: t.chrome,
                  isFirefox: /Firefox/i.test(navigator.userAgent),
                  prefixElement: r.createElement('div'),
                  prefixMatches: {},
                  scrollAnchor: null,
                  scrollPropertyLeft: null,
                  scrollPropertyTop: null,
                  isTicking: !1,
                  calls: [],
                  delayedElements: { count: 0 },
                },
                CSS: {},
                Utilities: g,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                  queue: '',
                  duration: m,
                  easing: h,
                  begin: n,
                  complete: n,
                  progress: n,
                  display: n,
                  visibility: n,
                  loop: !1,
                  delay: !1,
                  mobileHA: !0,
                  _cacheValues: !0,
                  promiseRejectEmpty: !0,
                },
                init: function(e) {
                  g.data(e, 'velocity', {
                    isSVG: A.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {},
                  });
                },
                hook: null,
                mock: !1,
                version: { major: 1, minor: 5, patch: 0 },
                debug: !1,
                timestamp: !0,
                pauseAll: function(e) {
                  var t = new Date().getTime();
                  g.each(y.State.calls, function(t, r) {
                    if (r) {
                      if (e !== n && (r[2].queue !== e || !1 === r[2].queue)) return !0;
                      r[5] = { resume: !1 };
                    }
                  }),
                    g.each(y.State.delayedElements, function(e, r) {
                      r && s(r, t);
                    });
                },
                resumeAll: function(e) {
                  var t = new Date().getTime();
                  g.each(y.State.calls, function(t, r) {
                    if (r) {
                      if (e !== n && (r[2].queue !== e || !1 === r[2].queue)) return !0;
                      r[5] && (r[5].resume = !0);
                    }
                  }),
                    g.each(y.State.delayedElements, function(e, r) {
                      r && l(r, t);
                    });
                },
              }),
              t.pageYOffset !== n
                ? ((y.State.scrollAnchor = t),
                  (y.State.scrollPropertyLeft = 'pageXOffset'),
                  (y.State.scrollPropertyTop = 'pageYOffset'))
                : ((y.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body),
                  (y.State.scrollPropertyLeft = 'scrollLeft'),
                  (y.State.scrollPropertyTop = 'scrollTop')),
              (b = (function() {
                function e(e) {
                  return -e.tension * e.x - e.friction * e.v;
                }
                function t(t, r, n) {
                  var a = { x: t.x + n.dx * r, v: t.v + n.dv * r, tension: t.tension, friction: t.friction };
                  return { dx: a.v, dv: e(a) };
                }
                function r(r, n) {
                  var a = { dx: r.v, dv: e(r) },
                    i = t(r, 0.5 * n, a),
                    o = t(r, 0.5 * n, i),
                    s = t(r, n, o),
                    l = (1 / 6) * (a.dx + 2 * (i.dx + o.dx) + s.dx),
                    u = (1 / 6) * (a.dv + 2 * (i.dv + o.dv) + s.dv);
                  return (r.x = r.x + l * n), (r.v = r.v + u * n), r;
                }
                return function e(t, n, a) {
                  var i,
                    o,
                    s,
                    l = { x: -1, v: 0, tension: null, friction: null },
                    u = [0],
                    c = 0,
                    p = 1e-4,
                    d = 0.016;
                  for (
                    t = parseFloat(t) || 500,
                      n = parseFloat(n) || 20,
                      a = a || null,
                      l.tension = t,
                      l.friction = n,
                      i = null !== a,
                      i ? ((c = e(t, n)), (o = (c / a) * d)) : (o = d);
                    ;

                  )
                    if (((s = r(s || l, o)), u.push(1 + s.x), (c += 16), !(Math.abs(s.x) > p && Math.abs(s.v) > p)))
                      break;
                  return i
                    ? function(e) {
                        return u[(e * (u.length - 1)) | 0];
                      }
                    : c;
                };
              })()),
              (y.Easings = {
                linear: function(e) {
                  return e;
                },
                swing: function(e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                spring: function(e) {
                  return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                },
              }),
              g.each(
                [
                  ['ease', [0.25, 0.1, 0.25, 1]],
                  ['ease-in', [0.42, 0, 1, 1]],
                  ['ease-out', [0, 0, 0.58, 1]],
                  ['ease-in-out', [0.42, 0, 0.58, 1]],
                  ['easeInSine', [0.47, 0, 0.745, 0.715]],
                  ['easeOutSine', [0.39, 0.575, 0.565, 1]],
                  ['easeInOutSine', [0.445, 0.05, 0.55, 0.95]],
                  ['easeInQuad', [0.55, 0.085, 0.68, 0.53]],
                  ['easeOutQuad', [0.25, 0.46, 0.45, 0.94]],
                  ['easeInOutQuad', [0.455, 0.03, 0.515, 0.955]],
                  ['easeInCubic', [0.55, 0.055, 0.675, 0.19]],
                  ['easeOutCubic', [0.215, 0.61, 0.355, 1]],
                  ['easeInOutCubic', [0.645, 0.045, 0.355, 1]],
                  ['easeInQuart', [0.895, 0.03, 0.685, 0.22]],
                  ['easeOutQuart', [0.165, 0.84, 0.44, 1]],
                  ['easeInOutQuart', [0.77, 0, 0.175, 1]],
                  ['easeInQuint', [0.755, 0.05, 0.855, 0.06]],
                  ['easeOutQuint', [0.23, 1, 0.32, 1]],
                  ['easeInOutQuint', [0.86, 0, 0.07, 1]],
                  ['easeInExpo', [0.95, 0.05, 0.795, 0.035]],
                  ['easeOutExpo', [0.19, 1, 0.22, 1]],
                  ['easeInOutExpo', [1, 0, 0, 1]],
                  ['easeInCirc', [0.6, 0.04, 0.98, 0.335]],
                  ['easeOutCirc', [0.075, 0.82, 0.165, 1]],
                  ['easeInOutCirc', [0.785, 0.135, 0.15, 0.86]],
                ],
                function(e, t) {
                  y.Easings[t[0]] = c.apply(null, t[1]);
                }
              ),
              (v = y.CSS = {
                RegEx: {
                  isHex: /^#([A-f\d]{3}){1,2}$/i,
                  valueUnwrap: /^[A-z]+\((.*)\)$/i,
                  wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                  valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
                },
                Lists: {
                  colors: [
                    'fill',
                    'stroke',
                    'stopColor',
                    'color',
                    'backgroundColor',
                    'borderColor',
                    'borderTopColor',
                    'borderRightColor',
                    'borderBottomColor',
                    'borderLeftColor',
                    'outlineColor',
                  ],
                  transformsBase: [
                    'translateX',
                    'translateY',
                    'scale',
                    'scaleX',
                    'scaleY',
                    'skewX',
                    'skewY',
                    'rotateZ',
                  ],
                  transforms3D: ['transformPerspective', 'translateZ', 'scaleZ', 'rotateX', 'rotateY'],
                  units: [
                    '%',
                    'em',
                    'ex',
                    'ch',
                    'rem',
                    'vw',
                    'vh',
                    'vmin',
                    'vmax',
                    'cm',
                    'mm',
                    'Q',
                    'in',
                    'pc',
                    'pt',
                    'px',
                    'deg',
                    'grad',
                    'rad',
                    'turn',
                    's',
                    'ms',
                  ],
                  colorNames: {
                    aliceblue: '240,248,255',
                    antiquewhite: '250,235,215',
                    aquamarine: '127,255,212',
                    aqua: '0,255,255',
                    azure: '240,255,255',
                    beige: '245,245,220',
                    bisque: '255,228,196',
                    black: '0,0,0',
                    blanchedalmond: '255,235,205',
                    blueviolet: '138,43,226',
                    blue: '0,0,255',
                    brown: '165,42,42',
                    burlywood: '222,184,135',
                    cadetblue: '95,158,160',
                    chartreuse: '127,255,0',
                    chocolate: '210,105,30',
                    coral: '255,127,80',
                    cornflowerblue: '100,149,237',
                    cornsilk: '255,248,220',
                    crimson: '220,20,60',
                    cyan: '0,255,255',
                    darkblue: '0,0,139',
                    darkcyan: '0,139,139',
                    darkgoldenrod: '184,134,11',
                    darkgray: '169,169,169',
                    darkgrey: '169,169,169',
                    darkgreen: '0,100,0',
                    darkkhaki: '189,183,107',
                    darkmagenta: '139,0,139',
                    darkolivegreen: '85,107,47',
                    darkorange: '255,140,0',
                    darkorchid: '153,50,204',
                    darkred: '139,0,0',
                    darksalmon: '233,150,122',
                    darkseagreen: '143,188,143',
                    darkslateblue: '72,61,139',
                    darkslategray: '47,79,79',
                    darkturquoise: '0,206,209',
                    darkviolet: '148,0,211',
                    deeppink: '255,20,147',
                    deepskyblue: '0,191,255',
                    dimgray: '105,105,105',
                    dimgrey: '105,105,105',
                    dodgerblue: '30,144,255',
                    firebrick: '178,34,34',
                    floralwhite: '255,250,240',
                    forestgreen: '34,139,34',
                    fuchsia: '255,0,255',
                    gainsboro: '220,220,220',
                    ghostwhite: '248,248,255',
                    gold: '255,215,0',
                    goldenrod: '218,165,32',
                    gray: '128,128,128',
                    grey: '128,128,128',
                    greenyellow: '173,255,47',
                    green: '0,128,0',
                    honeydew: '240,255,240',
                    hotpink: '255,105,180',
                    indianred: '205,92,92',
                    indigo: '75,0,130',
                    ivory: '255,255,240',
                    khaki: '240,230,140',
                    lavenderblush: '255,240,245',
                    lavender: '230,230,250',
                    lawngreen: '124,252,0',
                    lemonchiffon: '255,250,205',
                    lightblue: '173,216,230',
                    lightcoral: '240,128,128',
                    lightcyan: '224,255,255',
                    lightgoldenrodyellow: '250,250,210',
                    lightgray: '211,211,211',
                    lightgrey: '211,211,211',
                    lightgreen: '144,238,144',
                    lightpink: '255,182,193',
                    lightsalmon: '255,160,122',
                    lightseagreen: '32,178,170',
                    lightskyblue: '135,206,250',
                    lightslategray: '119,136,153',
                    lightsteelblue: '176,196,222',
                    lightyellow: '255,255,224',
                    limegreen: '50,205,50',
                    lime: '0,255,0',
                    linen: '250,240,230',
                    magenta: '255,0,255',
                    maroon: '128,0,0',
                    mediumaquamarine: '102,205,170',
                    mediumblue: '0,0,205',
                    mediumorchid: '186,85,211',
                    mediumpurple: '147,112,219',
                    mediumseagreen: '60,179,113',
                    mediumslateblue: '123,104,238',
                    mediumspringgreen: '0,250,154',
                    mediumturquoise: '72,209,204',
                    mediumvioletred: '199,21,133',
                    midnightblue: '25,25,112',
                    mintcream: '245,255,250',
                    mistyrose: '255,228,225',
                    moccasin: '255,228,181',
                    navajowhite: '255,222,173',
                    navy: '0,0,128',
                    oldlace: '253,245,230',
                    olivedrab: '107,142,35',
                    olive: '128,128,0',
                    orangered: '255,69,0',
                    orange: '255,165,0',
                    orchid: '218,112,214',
                    palegoldenrod: '238,232,170',
                    palegreen: '152,251,152',
                    paleturquoise: '175,238,238',
                    palevioletred: '219,112,147',
                    papayawhip: '255,239,213',
                    peachpuff: '255,218,185',
                    peru: '205,133,63',
                    pink: '255,192,203',
                    plum: '221,160,221',
                    powderblue: '176,224,230',
                    purple: '128,0,128',
                    red: '255,0,0',
                    rosybrown: '188,143,143',
                    royalblue: '65,105,225',
                    saddlebrown: '139,69,19',
                    salmon: '250,128,114',
                    sandybrown: '244,164,96',
                    seagreen: '46,139,87',
                    seashell: '255,245,238',
                    sienna: '160,82,45',
                    silver: '192,192,192',
                    skyblue: '135,206,235',
                    slateblue: '106,90,205',
                    slategray: '112,128,144',
                    snow: '255,250,250',
                    springgreen: '0,255,127',
                    steelblue: '70,130,180',
                    tan: '210,180,140',
                    teal: '0,128,128',
                    thistle: '216,191,216',
                    tomato: '255,99,71',
                    turquoise: '64,224,208',
                    violet: '238,130,238',
                    wheat: '245,222,179',
                    whitesmoke: '245,245,245',
                    white: '255,255,255',
                    yellowgreen: '154,205,50',
                    yellow: '255,255,0',
                  },
                },
                Hooks: {
                  templates: {
                    textShadow: ['Color X Y Blur', 'black 0px 0px 0px'],
                    boxShadow: ['Color X Y Blur Spread', 'black 0px 0px 0px 0px'],
                    clip: ['Top Right Bottom Left', '0px 0px 0px 0px'],
                    backgroundPosition: ['X Y', '0% 0%'],
                    transformOrigin: ['X Y Z', '50% 50% 0px'],
                    perspectiveOrigin: ['X Y', '50% 50%'],
                  },
                  registered: {},
                  register: function() {
                    var e, t, r, n, a, i, o, s, l;
                    for (e = 0; e < v.Lists.colors.length; e++)
                      (t = 'color' === v.Lists.colors[e] ? '0 0 0 1' : '255 255 255 1'),
                        (v.Hooks.templates[v.Lists.colors[e]] = ['Red Green Blue Alpha', t]);
                    if (P)
                      for (r in v.Hooks.templates)
                        v.Hooks.templates.hasOwnProperty(r) &&
                          ((n = v.Hooks.templates[r]),
                          (a = n[0].split(' ')),
                          (i = n[1].match(v.RegEx.valueSplit)),
                          'Color' === a[0] &&
                            (a.push(a.shift()),
                            i.push(i.shift()),
                            (v.Hooks.templates[r] = [a.join(' '), i.join(' ')])));
                    for (r in v.Hooks.templates)
                      if (v.Hooks.templates.hasOwnProperty(r)) {
                        (n = v.Hooks.templates[r]), (a = n[0].split(' '));
                        for (o in a) a.hasOwnProperty(o) && ((s = r + a[o]), (l = o), (v.Hooks.registered[s] = [r, l]));
                      }
                  },
                  getRoot: function(e) {
                    var t = v.Hooks.registered[e];
                    return t ? t[0] : e;
                  },
                  getUnit: function(e, t) {
                    var r = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || '';
                    return r && C(v.Lists.units, r) ? r : '';
                  },
                  fixColors: function(e) {
                    return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, r) {
                      return v.Lists.colorNames.hasOwnProperty(r)
                        ? (t || 'rgba(') + v.Lists.colorNames[r] + (t ? '' : ',1)')
                        : t + r;
                    });
                  },
                  cleanRootPropertyValue: function(e, t) {
                    return (
                      v.RegEx.valueUnwrap.test(t) && (t = t.match(v.RegEx.valueUnwrap)[1]),
                      v.Values.isCSSNullValue(t) && (t = v.Hooks.templates[e][1]),
                      t
                    );
                  },
                  extractValue: function(e, t) {
                    var r,
                      n,
                      a = v.Hooks.registered[e];
                    return a
                      ? ((r = a[0]),
                        (n = a[1]),
                        (t = v.Hooks.cleanRootPropertyValue(r, t)),
                        ('' + t).match(v.RegEx.valueSplit)[n])
                      : t;
                  },
                  injectValue: function(e, t, r) {
                    var n,
                      a,
                      i,
                      o = v.Hooks.registered[e];
                    return o
                      ? ((n = o[0]),
                        (a = o[1]),
                        (r = v.Hooks.cleanRootPropertyValue(n, r)),
                        (i = ('' + r).match(v.RegEx.valueSplit)),
                        (i[a] = t),
                        i.join(' '))
                      : r;
                  },
                },
                Normalizations: {
                  registered: {
                    clip: function(e, t, r) {
                      switch (e) {
                        case 'name':
                          return 'clip';
                        case 'extract':
                          var n;
                          return (
                            v.RegEx.wrappedValueAlreadyExtracted.test(r)
                              ? (n = r)
                              : ((n = ('' + r).match(v.RegEx.valueUnwrap)),
                                (n = n ? n[1].replace(/,(\s+)?/g, ' ') : r)),
                            n
                          );
                        case 'inject':
                          return 'rect(' + r + ')';
                      }
                    },
                    blur: function(e, t, r) {
                      var n, a;
                      switch (e) {
                        case 'name':
                          return y.State.isFirefox ? 'filter' : '-webkit-filter';
                        case 'extract':
                          return (
                            (n = parseFloat(r)),
                            n || 0 === n || ((a = ('' + r).match(/blur\(([0-9]+[A-z]+)\)/i)), (n = a ? a[1] : 0)),
                            n
                          );
                        case 'inject':
                          return parseFloat(r) ? 'blur(' + r + ')' : 'none';
                      }
                    },
                    opacity: function(e, t, r) {
                      if (P <= 8)
                        switch (e) {
                          case 'name':
                            return 'filter';
                          case 'extract':
                            var n = ('' + r).match(/alpha\(opacity=(.*)\)/i);
                            return (r = n ? n[1] / 100 : 1);
                          case 'inject':
                            return (
                              (t.style.zoom = 1),
                              parseFloat(r) >= 1 ? '' : 'alpha(opacity=' + parseInt(100 * parseFloat(r), 10) + ')'
                            );
                        }
                      else
                        switch (e) {
                          case 'name':
                            return 'opacity';
                          case 'extract':
                          case 'inject':
                            return r;
                        }
                    },
                  },
                  register: function() {
                    function e(e, t, r) {
                      var n, a, i, o, s;
                      if (('border-box' === ('' + v.getPropertyValue(t, 'boxSizing')).toLowerCase()) === (r || !1)) {
                        for (
                          i = 0,
                            o = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'],
                            s = [
                              'padding' + o[0],
                              'padding' + o[1],
                              'border' + o[0] + 'Width',
                              'border' + o[1] + 'Width',
                            ],
                            n = 0;
                          n < s.length;
                          n++
                        )
                          (a = parseFloat(v.getPropertyValue(t, s[n]))), isNaN(a) || (i += a);
                        return r ? -i : i;
                      }
                      return 0;
                    }
                    function t(t, r) {
                      return function(n, a, i) {
                        switch (n) {
                          case 'name':
                            return t;
                          case 'extract':
                            return parseFloat(i) + e(t, a, r);
                          case 'inject':
                            return parseFloat(i) - e(t, a, r) + 'px';
                        }
                      };
                    }
                    var r, a;
                    for (
                      (P && !(P > 9)) ||
                        y.State.isGingerbread ||
                        (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D)),
                        r = 0;
                      r < v.Lists.transformsBase.length;
                      r++
                    )
                      !(function() {
                        var e = v.Lists.transformsBase[r];
                        v.Normalizations.registered[e] = function(t, r, a) {
                          switch (t) {
                            case 'name':
                              return 'transform';
                            case 'extract':
                              return o(r) === n || o(r).transformCache[e] === n
                                ? /^scale/i.test(e)
                                  ? 1
                                  : 0
                                : o(r).transformCache[e].replace(/[()]/g, '');
                            case 'inject':
                              var i = !1;
                              switch (e.substr(0, e.length - 1)) {
                                case 'translate':
                                  i = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                  break;
                                case 'scal':
                                case 'scale':
                                  y.State.isAndroid && o(r).transformCache[e] === n && a < 1 && (a = 1),
                                    (i = !/(\d)$/i.test(a));
                                  break;
                                case 'skew':
                                case 'rotate':
                                  i = !/(deg|\d)$/i.test(a);
                              }
                              return i || (o(r).transformCache[e] = '(' + a + ')'), o(r).transformCache[e];
                          }
                        };
                      })();
                    for (a = 0; a < v.Lists.colors.length; a++)
                      !(function() {
                        var e = v.Lists.colors[a];
                        v.Normalizations.registered[e] = function(t, r, a) {
                          var i, o, s;
                          switch (t) {
                            case 'name':
                              return e;
                            case 'extract':
                              return (
                                v.RegEx.wrappedValueAlreadyExtracted.test(a)
                                  ? (i = a)
                                  : ((s = {
                                      black: 'rgb(0, 0, 0)',
                                      blue: 'rgb(0, 0, 255)',
                                      gray: 'rgb(128, 128, 128)',
                                      green: 'rgb(0, 128, 0)',
                                      red: 'rgb(255, 0, 0)',
                                      white: 'rgb(255, 255, 255)',
                                    }),
                                    /^[A-z]+$/i.test(a)
                                      ? (o = s[a] !== n ? s[a] : s.black)
                                      : v.RegEx.isHex.test(a)
                                      ? (o = 'rgb(' + v.Values.hexToRgb(a).join(' ') + ')')
                                      : /^rgba?\(/i.test(a) || (o = s.black),
                                    (i = ('' + (o || a)).match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, ' '))),
                                (!P || P > 8) && 3 === i.split(' ').length && (i += ' 1'),
                                i
                              );
                            case 'inject':
                              return /^rgb/.test(a)
                                ? a
                                : (P <= 8
                                    ? 4 === a.split(' ').length &&
                                      (a = a
                                        .split(/\s+/)
                                        .slice(0, 3)
                                        .join(' '))
                                    : 3 === a.split(' ').length && (a += ' 1'),
                                  (P <= 8 ? 'rgb' : 'rgba') +
                                    '(' +
                                    a.replace(/\s+/g, ',').replace(/\.(\d)+(?=,)/g, '') +
                                    ')');
                          }
                        };
                      })();
                    (v.Normalizations.registered.innerWidth = t('width', !0)),
                      (v.Normalizations.registered.innerHeight = t('height', !0)),
                      (v.Normalizations.registered.outerWidth = t('width')),
                      (v.Normalizations.registered.outerHeight = t('height'));
                  },
                },
                Names: {
                  camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                      return t.toUpperCase();
                    });
                  },
                  SVGAttribute: function(e) {
                    var t = 'width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2';
                    return (
                      (P || (y.State.isAndroid && !y.State.isChrome)) && (t += '|transform'),
                      RegExp('^(' + t + ')$', 'i').test(e)
                    );
                  },
                  prefixCheck: function(e) {
                    var t, r, n, a;
                    if (y.State.prefixMatches[e]) return [y.State.prefixMatches[e], !0];
                    for (t = ['', 'Webkit', 'Moz', 'ms', 'O'], r = 0, n = t.length; r < n; r++)
                      if (
                        ((a =
                          0 === r
                            ? e
                            : t[r] +
                              e.replace(/^\w/, function(e) {
                                return e.toUpperCase();
                              })),
                        A.isString(y.State.prefixElement.style[a]))
                      )
                        return (y.State.prefixMatches[e] = a), [a, !0];
                    return [e, !1];
                  },
                },
                Values: {
                  hexToRgb: function(e) {
                    var t,
                      r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return (
                      (e = e.replace(r, function(e, t, r, n) {
                        return t + t + r + r + n + n;
                      })),
                      (t = n.exec(e)),
                      t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    );
                  },
                  isCSSNullValue: function(e) {
                    return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                  },
                  getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e)
                      ? 'deg'
                      : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                          e
                        )
                      ? ''
                      : 'px';
                  },
                  getDisplayType: function(e) {
                    var t = e && ('' + e.tagName).toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                      t
                    )
                      ? 'inline'
                      : /^(li)$/i.test(t)
                      ? 'list-item'
                      : /^(tr)$/i.test(t)
                      ? 'table-row'
                      : /^(table)$/i.test(t)
                      ? 'table'
                      : /^(tbody)$/i.test(t)
                      ? 'table-row-group'
                      : 'block';
                  },
                  addClass: function(e, t) {
                    if (e)
                      if (e.classList) e.classList.add(t);
                      else if (A.isString(e.className)) e.className += (e.className.length ? ' ' : '') + t;
                      else {
                        var r = e.getAttribute(P <= 7 ? 'className' : 'class') || '';
                        e.setAttribute('class', r + (r ? ' ' : '') + t);
                      }
                  },
                  removeClass: function(e, t) {
                    if (e)
                      if (e.classList) e.classList.remove(t);
                      else if (A.isString(e.className))
                        e.className = ('' + e.className).replace(
                          RegExp('(^|\\s)' + t.split(' ').join('|') + '(\\s|$)', 'gi'),
                          ' '
                        );
                      else {
                        var r = e.getAttribute(P <= 7 ? 'className' : 'class') || '';
                        e.setAttribute(
                          'class',
                          r.replace(RegExp('(^|s)' + t.split(' ').join('|') + '(s|$)', 'gi'), ' ')
                        );
                      }
                  },
                },
                getPropertyValue: function(e, r, a, i) {
                  function s(e, r) {
                    var a,
                      l,
                      u,
                      c,
                      p,
                      d,
                      f = 0;
                    if (P <= 8) f = g.css(e, r);
                    else {
                      if (
                        ((a = !1),
                        /^(width|height)$/.test(r) &&
                          0 === v.getPropertyValue(e, 'display') &&
                          ((a = !0), v.setPropertyValue(e, 'display', v.Values.getDisplayType(e))),
                        (l = function() {
                          a && v.setPropertyValue(e, 'display', 'none');
                        }),
                        !i)
                      ) {
                        if ('height' === r && 'border-box' !== ('' + v.getPropertyValue(e, 'boxSizing')).toLowerCase())
                          return (
                            (u =
                              e.offsetHeight -
                              (parseFloat(v.getPropertyValue(e, 'borderTopWidth')) || 0) -
                              (parseFloat(v.getPropertyValue(e, 'borderBottomWidth')) || 0) -
                              (parseFloat(v.getPropertyValue(e, 'paddingTop')) || 0) -
                              (parseFloat(v.getPropertyValue(e, 'paddingBottom')) || 0)),
                            l(),
                            u
                          );
                        if ('width' === r && 'border-box' !== ('' + v.getPropertyValue(e, 'boxSizing')).toLowerCase())
                          return (
                            (c =
                              e.offsetWidth -
                              (parseFloat(v.getPropertyValue(e, 'borderLeftWidth')) || 0) -
                              (parseFloat(v.getPropertyValue(e, 'borderRightWidth')) || 0) -
                              (parseFloat(v.getPropertyValue(e, 'paddingLeft')) || 0) -
                              (parseFloat(v.getPropertyValue(e, 'paddingRight')) || 0)),
                            l(),
                            c
                          );
                      }
                      (p =
                        o(e) === n
                          ? t.getComputedStyle(e, null)
                          : o(e).computedStyle
                          ? o(e).computedStyle
                          : (o(e).computedStyle = t.getComputedStyle(e, null))),
                        'borderColor' === r && (r = 'borderTopColor'),
                        (f = 9 === P && 'filter' === r ? p.getPropertyValue(r) : p[r]),
                        ('' !== f && null !== f) || (f = e.style[r]),
                        l();
                    }
                    return (
                      'auto' === f &&
                        /^(top|right|bottom|left)$/i.test(r) &&
                        ('fixed' === (d = s(e, 'position')) || ('absolute' === d && /top|left/i.test(r))) &&
                        (f = g(e).position()[r] + 'px'),
                      f
                    );
                  }
                  var l, u, c, p, d, f;
                  if (
                    (v.Hooks.registered[r]
                      ? ((u = r),
                        (c = v.Hooks.getRoot(u)),
                        a === n && (a = v.getPropertyValue(e, v.Names.prefixCheck(c)[0])),
                        v.Normalizations.registered[c] && (a = v.Normalizations.registered[c]('extract', e, a)),
                        (l = v.Hooks.extractValue(u, a)))
                      : v.Normalizations.registered[r] &&
                        ((p = v.Normalizations.registered[r]('name', e)),
                        'transform' !== p &&
                          ((d = s(e, v.Names.prefixCheck(p)[0])),
                          v.Values.isCSSNullValue(d) && v.Hooks.templates[r] && (d = v.Hooks.templates[r][1])),
                        (l = v.Normalizations.registered[r]('extract', e, d))),
                    !/^[\d-]/.test(l))
                  )
                    if ((f = o(e)) && f.isSVG && v.Names.SVGAttribute(r))
                      if (/^(height|width)$/i.test(r))
                        try {
                          l = e.getBBox()[r];
                        } catch (e) {
                          l = 0;
                        }
                      else l = e.getAttribute(r);
                    else l = s(e, v.Names.prefixCheck(r)[0]);
                  return v.Values.isCSSNullValue(l) && (l = 0), y.debug >= 2 && console.log('Get ' + r + ': ' + l), l;
                },
                setPropertyValue: function(e, r, n, a, i) {
                  var s,
                    l,
                    u,
                    c = r;
                  if ('scroll' === r)
                    i.container
                      ? (i.container['scroll' + i.direction] = n)
                      : 'Left' === i.direction
                      ? t.scrollTo(n, i.alternateValue)
                      : t.scrollTo(i.alternateValue, n);
                  else if (v.Normalizations.registered[r] && 'transform' === v.Normalizations.registered[r]('name', e))
                    v.Normalizations.registered[r]('inject', e, n), (c = 'transform'), (n = o(e).transformCache[r]);
                  else {
                    if (
                      (v.Hooks.registered[r] &&
                        ((s = r),
                        (l = v.Hooks.getRoot(r)),
                        (a = a || v.getPropertyValue(e, l)),
                        (n = v.Hooks.injectValue(s, n, a)),
                        (r = l)),
                      v.Normalizations.registered[r] &&
                        ((n = v.Normalizations.registered[r]('inject', e, n)),
                        (r = v.Normalizations.registered[r]('name', e))),
                      (c = v.Names.prefixCheck(r)[0]),
                      P <= 8)
                    )
                      try {
                        e.style[c] = n;
                      } catch (e) {
                        y.debug && console.log('Browser does not support [' + n + '] for [' + c + ']');
                      }
                    else (u = o(e)), u && u.isSVG && v.Names.SVGAttribute(r) ? e.setAttribute(r, n) : (e.style[c] = n);
                    y.debug >= 2 && console.log('Set ' + r + ' (' + c + '): ' + n);
                  }
                  return [c, n];
                },
                flushTransformCache: function(e) {
                  var t,
                    r,
                    n,
                    a,
                    i = '',
                    s = o(e);
                  (P || (y.State.isAndroid && !y.State.isChrome)) && s && s.isSVG
                    ? ((t = function(t) {
                        return parseFloat(v.getPropertyValue(e, t));
                      }),
                      (r = {
                        translate: [t('translateX'), t('translateY')],
                        skewX: [t('skewX')],
                        skewY: [t('skewY')],
                        scale: 1 !== t('scale') ? [t('scale'), t('scale')] : [t('scaleX'), t('scaleY')],
                        rotate: [t('rotateZ'), 0, 0],
                      }),
                      g.each(o(e).transformCache, function(e) {
                        /^translate/i.test(e)
                          ? (e = 'translate')
                          : /^scale/i.test(e)
                          ? (e = 'scale')
                          : /^rotate/i.test(e) && (e = 'rotate'),
                          r[e] && ((i += e + '(' + r[e].join(' ') + ') '), delete r[e]);
                      }))
                    : (g.each(o(e).transformCache, function(t) {
                        if (((n = o(e).transformCache[t]), 'transformPerspective' === t)) return (a = n), !0;
                        9 === P && 'rotateZ' === t && (t = 'rotate'), (i += t + n + ' ');
                      }),
                      a && (i = 'perspective' + a + ' ' + i)),
                    v.setPropertyValue(e, 'transform', i);
                },
              }),
              v.Hooks.register(),
              v.Normalizations.register(),
              (y.hook = function(e, t, r) {
                var a;
                return (
                  (e = i(e)),
                  g.each(e, function(e, i) {
                    if ((o(i) === n && y.init(i), r === n)) a === n && (a = v.getPropertyValue(i, t));
                    else {
                      var s = v.setPropertyValue(i, t, r);
                      'transform' === s[0] && y.CSS.flushTransformCache(i), (a = s);
                    }
                  }),
                  a
                );
              }),
              (x = function() {
                function e() {
                  return c ? k.promise || null : h;
                }
                function a(e, a) {
                  function i(i) {
                    var l, u, m, h, b, x, F, E, H, O, j, q, L, M, $, B, W, I, D, G, Q, X;
                    if (c.begin && 0 === T)
                      try {
                        c.begin.call(w, w);
                      } catch (e) {
                        setTimeout(function() {
                          throw e;
                        }, 1);
                      }
                    if ('scroll' === N)
                      (m = /^x$/i.test(c.axis) ? 'Left' : 'Top'),
                        (h = parseFloat(c.offset) || 0),
                        c.container
                          ? A.isWrapped(c.container) || A.isNode(c.container)
                            ? ((c.container = c.container[0] || c.container),
                              (b = c.container['scroll' + m]),
                              (F = b + g(e).position()[m.toLowerCase()] + h))
                            : (c.container = null)
                          : ((b = y.State.scrollAnchor[y.State['scrollProperty' + m]]),
                            (x = y.State.scrollAnchor[y.State['scrollProperty' + ('Left' === m ? 'Top' : 'Left')]]),
                            (F = g(e).offset()[m.toLowerCase()] + h)),
                        (f = {
                          scroll: {
                            rootPropertyValue: !1,
                            startValue: b,
                            currentValue: b,
                            endValue: F,
                            unitType: '',
                            easing: c.easing,
                            scrollData: { container: c.container, direction: m, alternateValue: x },
                          },
                          element: e,
                        }),
                        y.debug && console.log('tweensContainer (scroll): ', f.scroll, e);
                    else if ('reverse' === N) {
                      if (!(l = o(e))) return;
                      if (!l.tweensContainer) return void g.dequeue(e, c.queue);
                      'none' === l.opts.display && (l.opts.display = 'auto'),
                        'hidden' === l.opts.visibility && (l.opts.visibility = 'visible'),
                        (l.opts.loop = !1),
                        (l.opts.begin = null),
                        (l.opts.complete = null),
                        P.easing || delete c.easing,
                        P.duration || delete c.duration,
                        (c = g.extend({}, l.opts, c)),
                        (u = g.extend(!0, {}, l ? l.tweensContainer : null));
                      for (E in u)
                        u.hasOwnProperty(E) &&
                          'element' !== E &&
                          ((H = u[E].startValue),
                          (u[E].startValue = u[E].currentValue = u[E].endValue),
                          (u[E].endValue = H),
                          A.isEmptyObject(P) || (u[E].easing = c.easing),
                          y.debug && console.log('reverse tweensContainer (' + E + '): ' + JSON.stringify(u[E]), e));
                      f = u;
                    } else if ('start' === N) {
                      (l = o(e)),
                        l && l.tweensContainer && !0 === l.isAnimating && (u = l.tweensContainer),
                        (O = function(t, r) {
                          var n, i, o;
                          return (
                            A.isFunction(t) && (t = t.call(e, a, V)),
                            A.isArray(t)
                              ? ((n = t[0]),
                                (!A.isArray(t[1]) && /^[\d-]/.test(t[1])) ||
                                A.isFunction(t[1]) ||
                                v.RegEx.isHex.test(t[1])
                                  ? (o = t[1])
                                  : (A.isString(t[1]) && !v.RegEx.isHex.test(t[1]) && y.Easings[t[1]]) ||
                                    A.isArray(t[1])
                                  ? ((i = r ? t[1] : p(t[1], c.duration)), (o = t[2]))
                                  : (o = t[1] || t[2]))
                              : (n = t),
                            r || (i = i || c.easing),
                            A.isFunction(n) && (n = n.call(e, a, V)),
                            A.isFunction(o) && (o = o.call(e, a, V)),
                            [n || 0, i, o]
                          );
                        }),
                        (j = function(a, i) {
                          var o,
                            p,
                            d,
                            m,
                            h,
                            b,
                            x,
                            w,
                            S,
                            P,
                            k,
                            V,
                            T,
                            C,
                            F,
                            E,
                            N,
                            H,
                            O,
                            j,
                            q,
                            L,
                            R,
                            M,
                            $,
                            B = v.Hooks.getRoot(a),
                            W = !1,
                            I = i[0],
                            D = i[1],
                            G = i[2];
                          if (
                            !(
                              (l && l.isSVG) ||
                              'tween' === B ||
                              !1 !== v.Names.prefixCheck(B)[1] ||
                              v.Normalizations.registered[B] !== n
                            )
                          )
                            return void (
                              y.debug && console.log('Skipping [' + B + '] due to a lack of browser support.')
                            );
                          if (
                            (((c.display !== n && null !== c.display && 'none' !== c.display) ||
                              (c.visibility !== n && 'hidden' !== c.visibility)) &&
                              /opacity|filter/.test(a) &&
                              !G &&
                              0 !== I &&
                              (G = 0),
                            c._cacheValues && u && u[a]
                              ? (G === n && (G = u[a].endValue + u[a].unitType), (W = l.rootPropertyValueCache[B]))
                              : v.Hooks.registered[a]
                              ? G === n
                                ? ((W = v.getPropertyValue(e, B)), (G = v.getPropertyValue(e, a, W)))
                                : (W = v.Hooks.templates[B][1])
                              : G === n && (G = v.getPropertyValue(e, a)),
                            (h = !1),
                            (b = function(e, t) {
                              var r, n;
                              return (
                                (n = ('' + (t || '0')).toLowerCase().replace(/[%A-z]+$/, function(e) {
                                  return (r = e), '';
                                })),
                                r || (r = v.Values.getUnitType(e)),
                                [n, r]
                              );
                            }),
                            G !== I && A.isString(G) && A.isString(I))
                          ) {
                            for (
                              o = '',
                                x = 0,
                                w = 0,
                                S = [],
                                P = [],
                                k = 0,
                                V = 0,
                                T = 0,
                                G = v.Hooks.fixColors(G),
                                I = v.Hooks.fixColors(I);
                              x < G.length && w < I.length;

                            )
                              if (((C = G[x]), (F = I[w]), /[\d\.-]/.test(C) && /[\d\.-]/.test(F))) {
                                for (E = C, N = F, H = '.', O = '.'; ++x < G.length; ) {
                                  if ((C = G[x]) === H) H = '..';
                                  else if (!/\d/.test(C)) break;
                                  E += C;
                                }
                                for (; ++w < I.length; ) {
                                  if ((F = I[w]) === O) O = '..';
                                  else if (!/\d/.test(F)) break;
                                  N += F;
                                }
                                (j = v.Hooks.getUnit(G, x)),
                                  (q = v.Hooks.getUnit(I, w)),
                                  (x += j.length),
                                  (w += q.length),
                                  j === q
                                    ? E === N
                                      ? (o += E + j)
                                      : ((o += '{' + S.length + (V ? '!' : '') + '}' + j),
                                        S.push(parseFloat(E)),
                                        P.push(parseFloat(N)))
                                    : ((L = parseFloat(E)),
                                      (R = parseFloat(N)),
                                      (o +=
                                        (k < 5 ? 'calc' : '') +
                                        '(' +
                                        (L ? '{' + S.length + (V ? '!' : '') + '}' : '0') +
                                        j +
                                        ' + ' +
                                        (R ? '{' + (S.length + (L ? 1 : 0)) + (V ? '!' : '') + '}' : '0') +
                                        q +
                                        ')'),
                                      L && (S.push(L), P.push(0)),
                                      R && (S.push(0), P.push(R)));
                              } else {
                                if (C !== F) {
                                  k = 0;
                                  break;
                                }
                                (o += C),
                                  x++,
                                  w++,
                                  (0 === k && 'c' === C) ||
                                  (1 === k && 'a' === C) ||
                                  (2 === k && 'l' === C) ||
                                  (3 === k && 'c' === C) ||
                                  (k >= 4 && '(' === C)
                                    ? k++
                                    : ((k && k < 5) || (k >= 4 && ')' === C && --k < 5)) && (k = 0),
                                  (0 === V && 'r' === C) ||
                                  (1 === V && 'g' === C) ||
                                  (2 === V && 'b' === C) ||
                                  (3 === V && 'a' === C) ||
                                  (V >= 3 && '(' === C)
                                    ? (3 === V && 'a' === C && (T = 1), V++)
                                    : T && ',' === C
                                    ? ++T > 3 && (V = T = 0)
                                    : ((T && V < (T ? 5 : 4)) ||
                                        (V >= (T ? 4 : 3) && ')' === C && --V < (T ? 5 : 4))) &&
                                      (V = T = 0);
                              }
                            (x === G.length && w === I.length) ||
                              (y.debug &&
                                console.error('Trying to pattern match mis-matched strings ["' + I + '", "' + G + '"]'),
                              (o = n)),
                              o &&
                                (S.length
                                  ? (y.debug &&
                                      console.log('Pattern found "' + o + '" -> ', S, P, '[' + G + ',' + I + ']'),
                                    (G = S),
                                    (I = P),
                                    (d = m = ''))
                                  : (o = n));
                          }
                          if (
                            (o ||
                              ((p = b(a, G)),
                              (G = p[0]),
                              (m = p[1]),
                              (p = b(a, I)),
                              (I = p[0].replace(/^([+-\/*])=/, function(e, t) {
                                return (h = t), '';
                              })),
                              (d = p[1]),
                              (G = parseFloat(G) || 0),
                              (I = parseFloat(I) || 0),
                              '%' === d &&
                                (/^(fontSize|lineHeight)$/.test(a)
                                  ? ((I /= 100), (d = 'em'))
                                  : /^scale/.test(a)
                                  ? ((I /= 100), (d = ''))
                                  : /(Red|Green|Blue)$/i.test(a) && ((I = (I / 100) * 255), (d = '')))),
                            (M = function() {
                              var n,
                                a,
                                i,
                                o = {
                                  myParent: e.parentNode || r.body,
                                  position: v.getPropertyValue(e, 'position'),
                                  fontSize: v.getPropertyValue(e, 'fontSize'),
                                },
                                s = o.position === z.lastPosition && o.myParent === z.lastParent,
                                u = o.fontSize === z.lastFontSize;
                              return (
                                (z.lastParent = o.myParent),
                                (z.lastPosition = o.position),
                                (z.lastFontSize = o.fontSize),
                                (n = 100),
                                (a = {}),
                                u && s
                                  ? ((a.emToPx = z.lastEmToPx),
                                    (a.percentToPxWidth = z.lastPercentToPxWidth),
                                    (a.percentToPxHeight = z.lastPercentToPxHeight))
                                  : ((i =
                                      l && l.isSVG
                                        ? r.createElementNS('http://www.w3.org/2000/svg', 'rect')
                                        : r.createElement('div')),
                                    y.init(i),
                                    o.myParent.appendChild(i),
                                    g.each(['overflow', 'overflowX', 'overflowY'], function(e, t) {
                                      y.CSS.setPropertyValue(i, t, 'hidden');
                                    }),
                                    y.CSS.setPropertyValue(i, 'position', o.position),
                                    y.CSS.setPropertyValue(i, 'fontSize', o.fontSize),
                                    y.CSS.setPropertyValue(i, 'boxSizing', 'content-box'),
                                    g.each(
                                      ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height'],
                                      function(e, t) {
                                        y.CSS.setPropertyValue(i, t, n + '%');
                                      }
                                    ),
                                    y.CSS.setPropertyValue(i, 'paddingLeft', n + 'em'),
                                    (a.percentToPxWidth = z.lastPercentToPxWidth =
                                      (parseFloat(v.getPropertyValue(i, 'width', null, !0)) || 1) / n),
                                    (a.percentToPxHeight = z.lastPercentToPxHeight =
                                      (parseFloat(v.getPropertyValue(i, 'height', null, !0)) || 1) / n),
                                    (a.emToPx = z.lastEmToPx =
                                      (parseFloat(v.getPropertyValue(i, 'paddingLeft')) || 1) / n),
                                    o.myParent.removeChild(i)),
                                null === z.remToPx &&
                                  (z.remToPx = parseFloat(v.getPropertyValue(r.body, 'fontSize')) || 16),
                                null === z.vwToPx &&
                                  ((z.vwToPx = parseFloat(t.innerWidth) / 100),
                                  (z.vhToPx = parseFloat(t.innerHeight) / 100)),
                                (a.remToPx = z.remToPx),
                                (a.vwToPx = z.vwToPx),
                                (a.vhToPx = z.vhToPx),
                                y.debug >= 1 && console.log('Unit ratios: ' + JSON.stringify(a), e),
                                a
                              );
                            }),
                            /[\/*]/.test(h))
                          )
                            d = m;
                          else if (m !== d && 0 !== G)
                            if (0 === I) d = m;
                            else {
                              switch (
                                ((s = s || M()),
                                ($ =
                                  /margin|padding|left|right|width|text|word|letter/i.test(a) ||
                                  /X$/.test(a) ||
                                  'x' === a
                                    ? 'x'
                                    : 'y'),
                                m)
                              ) {
                                case '%':
                                  G *= 'x' === $ ? s.percentToPxWidth : s.percentToPxHeight;
                                  break;
                                case 'px':
                                  break;
                                default:
                                  G *= s[m + 'ToPx'];
                              }
                              switch (d) {
                                case '%':
                                  G *= 1 / ('x' === $ ? s.percentToPxWidth : s.percentToPxHeight);
                                  break;
                                case 'px':
                                  break;
                                default:
                                  G *= 1 / s[d + 'ToPx'];
                              }
                            }
                          switch (h) {
                            case '+':
                              I = G + I;
                              break;
                            case '-':
                              I = G - I;
                              break;
                            case '*':
                              I *= G;
                              break;
                            case '/':
                              I = G / I;
                          }
                          (f[a] = {
                            rootPropertyValue: W,
                            startValue: G,
                            currentValue: G,
                            endValue: I,
                            unitType: d,
                            easing: D,
                          }),
                            o && (f[a].pattern = o),
                            y.debug && console.log('tweensContainer (' + a + '): ' + JSON.stringify(f[a]), e);
                        });
                      for (q in S)
                        if (S.hasOwnProperty(q))
                          if (
                            ((L = v.Names.camelCase(q)),
                            (M = O(S[q])),
                            C(v.Lists.colors, L) && (($ = M[0]), (B = M[1]), (W = M[2]), v.RegEx.isHex.test($)))
                          )
                            for (
                              I = ['Red', 'Green', 'Blue'],
                                D = v.Values.hexToRgb($),
                                G = W ? v.Values.hexToRgb(W) : n,
                                Q = 0;
                              Q < I.length;
                              Q++
                            )
                              (X = [D[Q]]), B && X.push(B), G !== n && X.push(G[Q]), j(L + I[Q], X);
                          else j(L, M);
                      f.element = e;
                    }
                    f.element &&
                      (v.Values.addClass(e, 'velocity-animating'),
                      R.push(f),
                      (l = o(e)),
                      l && ('' === c.queue && ((l.tweensContainer = f), (l.opts = c)), (l.isAnimating = !0)),
                      T === V - 1
                        ? (y.State.calls.push([R, w, c, null, k.resolver, null, 0]),
                          !1 === y.State.isTicking && ((y.State.isTicking = !0), d()))
                        : T++);
                  }
                  var s,
                    l,
                    u,
                    c = g.extend({}, y.defaults, P),
                    f = {};
                  switch (
                    (o(e) === n && y.init(e),
                    parseFloat(c.delay) &&
                      !1 !== c.queue &&
                      g.queue(e, c.queue, function(t) {
                        var r, n;
                        (y.velocityQueueEntryFlag = !0),
                          (r = y.State.delayedElements.count++),
                          (y.State.delayedElements[r] = e),
                          (n = (function(e) {
                            return function() {
                              (y.State.delayedElements[e] = !1), t();
                            };
                          })(r)),
                          (o(e).delayBegin = new Date().getTime()),
                          (o(e).delay = parseFloat(c.delay)),
                          (o(e).delayTimer = { setTimeout: setTimeout(t, parseFloat(c.delay)), next: n });
                      }),
                    ('' + c.duration).toLowerCase())
                  ) {
                    case 'fast':
                      c.duration = 200;
                      break;
                    case 'normal':
                      c.duration = m;
                      break;
                    case 'slow':
                      c.duration = 600;
                      break;
                    default:
                      c.duration = parseFloat(c.duration) || 1;
                  }
                  !1 !== y.mock &&
                    (!0 === y.mock
                      ? (c.duration = c.delay = 1)
                      : ((c.duration *= parseFloat(y.mock) || 1), (c.delay *= parseFloat(y.mock) || 1))),
                    (c.easing = p(c.easing, c.duration)),
                    c.begin && !A.isFunction(c.begin) && (c.begin = null),
                    c.progress && !A.isFunction(c.progress) && (c.progress = null),
                    c.complete && !A.isFunction(c.complete) && (c.complete = null),
                    c.display !== n &&
                      null !== c.display &&
                      ((c.display = ('' + c.display).toLowerCase()),
                      'auto' === c.display && (c.display = y.CSS.Values.getDisplayType(e))),
                    c.visibility !== n && null !== c.visibility && (c.visibility = ('' + c.visibility).toLowerCase()),
                    (c.mobileHA = c.mobileHA && y.State.isMobile && !y.State.isGingerbread),
                    !1 === c.queue
                      ? c.delay
                        ? ((l = y.State.delayedElements.count++),
                          (y.State.delayedElements[l] = e),
                          (u = (function(e) {
                            return function() {
                              (y.State.delayedElements[e] = !1), i();
                            };
                          })(l)),
                          (o(e).delayBegin = new Date().getTime()),
                          (o(e).delay = parseFloat(c.delay)),
                          (o(e).delayTimer = { setTimeout: setTimeout(i, parseFloat(c.delay)), next: u }))
                        : i()
                      : g.queue(e, c.queue, function(e, t) {
                          if (!0 === t) return k.promise && k.resolver(w), !0;
                          (y.velocityQueueEntryFlag = !0), i(e);
                        }),
                    ('' !== c.queue && 'fx' !== c.queue) || 'inprogress' === g.queue(e)[0] || g.dequeue(e);
                }
                var u,
                  c,
                  h,
                  b,
                  w,
                  S,
                  P,
                  k,
                  V,
                  T,
                  F,
                  E,
                  N,
                  H,
                  O,
                  j,
                  q,
                  L,
                  z,
                  R,
                  M,
                  $,
                  B,
                  W =
                    arguments[0] &&
                    (arguments[0].p ||
                      (g.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) ||
                      A.isString(arguments[0].properties));
                if (
                  (A.isWrapped(this)
                    ? ((c = !1), (b = 0), (w = this), (h = this))
                    : ((c = !0), (b = 1), (w = W ? arguments[0].elements || arguments[0].e : arguments[0])),
                  (k = { promise: null, resolver: null, rejecter: null }),
                  c &&
                    y.Promise &&
                    (k.promise = new y.Promise(function(e, t) {
                      (k.resolver = e), (k.rejecter = t);
                    })),
                  W
                    ? ((S = arguments[0].properties || arguments[0].p), (P = arguments[0].options || arguments[0].o))
                    : ((S = arguments[b]), (P = arguments[b + 1])),
                  !(w = i(w)))
                )
                  return void (k.promise && (S && P && !1 === P.promiseRejectEmpty ? k.resolver() : k.rejecter()));
                if (
                  ((V = w.length), (T = 0), !/^(stop|finish|finishAll|pause|resume)$/i.test(S) && !g.isPlainObject(P))
                )
                  for (F = b + 1, P = {}, E = F; E < arguments.length; E++)
                    A.isArray(arguments[E]) ||
                    (!/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]))
                      ? A.isString(arguments[E]) || A.isArray(arguments[E])
                        ? (P.easing = arguments[E])
                        : A.isFunction(arguments[E]) && (P.complete = arguments[E])
                      : (P.duration = arguments[E]);
                switch (S) {
                  case 'scroll':
                    N = 'scroll';
                    break;
                  case 'reverse':
                    N = 'reverse';
                    break;
                  case 'pause':
                    return (
                      (H = new Date().getTime()),
                      g.each(w, function(e, t) {
                        s(t, H);
                      }),
                      g.each(y.State.calls, function(e, t) {
                        var r = !1;
                        t &&
                          g.each(t[1], function(e, a) {
                            var i = P === n ? '' : P;
                            return (
                              (!0 !== i && t[2].queue !== i && (P !== n || !1 !== t[2].queue)) ||
                              (g.each(w, function(e, n) {
                                if (n === a) return (t[5] = { resume: !1 }), (r = !0), !1;
                              }),
                              !r && n)
                            );
                          });
                      }),
                      e()
                    );
                  case 'resume':
                    return (
                      g.each(w, function(e, t) {
                        l(t, H);
                      }),
                      g.each(y.State.calls, function(e, t) {
                        var r = !1;
                        t &&
                          g.each(t[1], function(e, a) {
                            var i = P === n ? '' : P;
                            return (
                              (!0 !== i && t[2].queue !== i && (P !== n || !1 !== t[2].queue)) ||
                              (!t[5] ||
                                (g.each(w, function(e, n) {
                                  if (n === a) return (t[5].resume = !0), (r = !0), !1;
                                }),
                                !r && n))
                            );
                          });
                      }),
                      e()
                    );
                  case 'finish':
                  case 'finishAll':
                  case 'stop':
                    return (
                      g.each(w, function(e, t) {
                        o(t) &&
                          o(t).delayTimer &&
                          (clearTimeout(o(t).delayTimer.setTimeout),
                          o(t).delayTimer.next && o(t).delayTimer.next(),
                          delete o(t).delayTimer),
                          'finishAll' !== S ||
                            (!0 !== P && !A.isString(P)) ||
                            (g.each(g.queue(t, A.isString(P) ? P : ''), function(e, t) {
                              A.isFunction(t) && t();
                            }),
                            g.queue(t, A.isString(P) ? P : '', []));
                      }),
                      (O = []),
                      g.each(y.State.calls, function(e, t) {
                        t &&
                          g.each(t[1], function(r, a) {
                            var i = P === n ? '' : P;
                            if (!0 !== i && t[2].queue !== i && (P !== n || !1 !== t[2].queue)) return !0;
                            g.each(w, function(r, n) {
                              if (n === a)
                                if (
                                  ((!0 === P || A.isString(P)) &&
                                    (g.each(g.queue(n, A.isString(P) ? P : ''), function(e, t) {
                                      A.isFunction(t) && t(null, !0);
                                    }),
                                    g.queue(n, A.isString(P) ? P : '', [])),
                                  'stop' === S)
                                ) {
                                  var s = o(n);
                                  s &&
                                    s.tweensContainer &&
                                    !1 !== i &&
                                    g.each(s.tweensContainer, function(e, t) {
                                      t.endValue = t.currentValue;
                                    }),
                                    O.push(e);
                                } else ('finish' !== S && 'finishAll' !== S) || (t[2].duration = 1);
                            });
                          });
                      }),
                      'stop' === S &&
                        (g.each(O, function(e, t) {
                          f(t, !0);
                        }),
                        k.promise && k.resolver(w)),
                      e()
                    );
                  default:
                    if (!g.isPlainObject(S) || A.isEmptyObject(S))
                      return A.isString(S) && y.Redirects[S]
                        ? ((u = g.extend({}, P)),
                          (j = u.duration),
                          (q = u.delay || 0),
                          !0 === u.backwards && (w = g.extend(!0, [], w).reverse()),
                          g.each(w, function(e, t) {
                            parseFloat(u.stagger)
                              ? (u.delay = q + parseFloat(u.stagger) * e)
                              : A.isFunction(u.stagger) && (u.delay = q + u.stagger.call(t, e, V)),
                              u.drag &&
                                ((u.duration = parseFloat(j) || (/^(callout|transition)/.test(S) ? 1e3 : m)),
                                (u.duration = Math.max(
                                  u.duration * (u.backwards ? 1 - e / V : (e + 1) / V),
                                  0.75 * u.duration,
                                  200
                                ))),
                              y.Redirects[S].call(t, t, u || {}, e, V, w, k.promise ? k : n);
                          }),
                          e())
                        : ((L =
                            'Velocity: First argument (' +
                            S +
                            ') was not a property map, a known action, or a registered redirect. Aborting.'),
                          k.promise ? k.rejecter(Error(L)) : t.console && console.log(L),
                          e());
                    N = 'start';
                }
                if (
                  ((z = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null,
                  }),
                  (R = []),
                  g.each(w, function(e, t) {
                    A.isNode(t) && a(t, e);
                  }),
                  (u = g.extend({}, y.defaults, P)),
                  (u.loop = parseInt(u.loop, 10)),
                  (M = 2 * u.loop - 1),
                  u.loop)
                )
                  for ($ = 0; $ < M; $++)
                    (B = { delay: u.delay, progress: u.progress }),
                      $ === M - 1 &&
                        ((B.display = u.display), (B.visibility = u.visibility), (B.complete = u.complete)),
                      x(w, 'reverse', B);
                return e();
              }),
              (y = g.extend(x, y)),
              (y.animate = x),
              (w = t.requestAnimationFrame || k),
              y.State.isMobile ||
                r.hidden === n ||
                ((S = function() {
                  r.hidden
                    ? ((w = function(e) {
                        return setTimeout(function() {
                          e(!0);
                        }, 16);
                      }),
                      d())
                    : (w = t.requestAnimationFrame || k);
                }),
                S(),
                r.addEventListener('visibilitychange', S)),
              (e.Velocity = y),
              e !== t && ((e.fn.velocity = x), (e.fn.velocity.defaults = y.defaults)),
              g.each(['Down', 'Up'], function(e, t) {
                y.Redirects['slide' + t] = function(e, r, a, i, o, s) {
                  var l = g.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {},
                    d = { height: '', marginTop: '', marginBottom: '', paddingTop: '', paddingBottom: '' };
                  l.display === n &&
                    (l.display =
                      'Down' === t ? ('inline' === y.CSS.Values.getDisplayType(e) ? 'inline-block' : 'block') : 'none'),
                    (l.begin = function() {
                      var r, n;
                      0 === a && u && u.call(o, o);
                      for (r in d)
                        d.hasOwnProperty(r) &&
                          ((p[r] = e.style[r]),
                          (n = v.getPropertyValue(e, r)),
                          (d[r] = 'Down' === t ? [n, 0] : [0, n]));
                      (p.overflow = e.style.overflow), (e.style.overflow = 'hidden');
                    }),
                    (l.complete = function() {
                      for (var t in p) p.hasOwnProperty(t) && (e.style[t] = p[t]);
                      a === i - 1 && (c && c.call(o, o), s && s.resolver(o));
                    }),
                    y(e, d, l);
                };
              }),
              g.each(['In', 'Out'], function(e, t) {
                y.Redirects['fade' + t] = function(e, r, a, i, o, s) {
                  var l = g.extend({}, r),
                    u = l.complete,
                    c = { opacity: 'In' === t ? 1 : 0 };
                  0 !== a && (l.begin = null),
                    (l.complete =
                      a !== i - 1
                        ? null
                        : function() {
                            u && u.call(o, o), s && s.resolver(o);
                          }),
                    l.display === n && (l.display = 'In' === t ? 'auto' : 'none'),
                    y(this, c, l);
                };
              }),
              y);
        })(window.jQuery || window.Zepto || window, window, window ? window.document : void 0);
      });
  },
});
