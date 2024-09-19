function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function () {
  function e(e, r) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != r) {
        var n,
          o,
          i,
          u,
          c = [],
          a = !0,
          l = !1;
        try {
          if (i = (r = r.call(e)).next, 0 === t) {
            if (Object(r) !== r) return;
            a = !1;
          } else for (; !(a = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); a = !0);
        } catch (e) {
          l = !0, o = e;
        } finally {
          try {
            if (!a && null != r["return"] && (u = r["return"](), Object(u) !== u)) return;
          } finally {
            if (l) throw o;
          }
        }
        return c;
      }
    }(e, r) || function (e, r) {
      if (!e) return;
      if ("string" == typeof e) return t(e, r);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t(e, r);
    }(e, r) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function r(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? r(Object(n), !0).forEach(function (t) {
        o(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function o(e, t, r) {
    var n;
    return (t = "symbol" == _typeof(n = function (e, t) {
      if ("object" != _typeof(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" != _typeof(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (t, r) {
    "use strict";

    var o, i, u, c, a, l, s, f, h, d, y, g, p, v, m, b, w, j, O, C, P, E, F, S, k, x;
    return {
      setters: [function (e) {
        o = e.y, i = e.z, u = e.A, c = e.B, a = e.u, l = e.a, s = e.c, f = e.f, h = e.o, d = e.s, y = e.h, g = e.i, p = e.S, v = e.V, m = e.D, b = e.R, w = e.E, j = e.C, O = e.j, C = e.k, P = e.T, E = e.G, F = e.H, S = e.J, k = e.K;
      }, function (e) {
        x = e.a;
      }],
      execute: function execute() {
        function r(e) {
          return e.split("-")[0];
        }
        function $(_ref) {
          var e = _ref.type,
            t = _ref.id;
          return o.get("/".concat(e, "/").concat(t, "/recommendations")).then(function (_ref2) {
            var t = _ref2.results;
            return t.length ? i(t.slice(0, 7)) : o.get("/trending/".concat(e, "/week?page=1")).then(function (_ref3) {
              var e = _ref3.results;
              return i(e.slice(0, 7));
            });
          });
        }
        function A(_ref4) {
          var e = _ref4.type,
            t = _ref4.id;
          return o.get("/".concat(e, "/").concat(t, "/credits")).then(function (_ref5) {
            var e = _ref5.cast;
            return i(e.slice(0, 7));
          });
        }
        function _(_ref6) {
          var e = _ref6.type,
            t = _ref6.id;
          var i = "movie" === e ? {
            rtCrit: 86,
            rtFan: 92
          } : {};
          return o.get("/".concat(e, "/").concat(t)).then(function (t) {
            return n({
              backgroundImage: u(t.backdrop_path, "w1280"),
              heroContent: {
                title: t.title || t.name,
                description: t.overview,
                badges: ["HD", "CC"],
                voteAverage: t.vote_average,
                voteCount: t.vote_count,
                metaText: "movie" === e ? (a = t.runtime, l = a % 60, Math.floor(a / 60) + "h " + (l < 10 ? "0" : "") + l + "min   " + (o = t.release_date, c = o.split("-"), c[1] + "/" + c[2] + "/" + c[0])) : "".concat(r(t.first_air_date), " - ").concat(r(t.last_air_date)),
                reviews: i
              }
            }, t);
            var o, c, a, l;
          });
        }
        t("default", function () {
          var t = c(),
            r = a(),
            o = e(l(function () {
              return n({}, t);
            }, _), 1)[0],
            i = e(l(function () {
              return n({}, t);
            }, A), 1)[0],
            u = e(l(function () {
              return n({}, t);
            }, $), 1)[0],
            D = e(s(0), 2),
            I = D[0],
            T = D[1];
          f(h(o, function (e) {
            d(e.backgroundImage);
          }, {
            defer: !0
          }));
          var R,
            z,
            B,
            H = 640,
            M = {
              color: y("#000000"),
              alpha: 0,
              width: 1900,
              height: 890,
              x: -160,
              y: H,
              borderRadius: 30
            };
          function N() {
            var e;
            null === (e = this.children.selected) || void 0 === e || e.setFocus(), R.y = H, z.y = H, z.alpha = 0;
          }
          function U() {
            var e;
            null === (e = this.children.selected) || void 0 === e || e.setFocus(), R.y = 200, z.y = 160, z.alpha = .9;
          }
          function G() {
            var e = this.children.find(function (e) {
              return e.states.has("focus");
            });
            x(e && e.href), r(e.href);
          }
          function J() {
            F(), document.getElementsByTagName("canvas")[0].focus(), B.setFocus(), T(0);
          }
          function K() {
            var e = S();
            k(e), T(.9);
          }
          return g(p, {
            get when() {
              return o();
            },
            keyed: !0,
            get children() {
              return [g(v, {
                x: 170,
                onUp: function onUp() {
                  return B.setFocus();
                },
                onEscape: J,
                get children() {
                  return [g(m, {
                    y: 260,
                    get content() {
                      return o().heroContent;
                    }
                  }), g(b, {
                    ref: function ref(e) {
                      "function" == typeof B ? B(e) : B = e;
                    },
                    y: 500,
                    scroll: "none",
                    height: 90,
                    width: 640,
                    gap: 40,
                    onDown: function onDown() {
                      return R.setFocus();
                    },
                    onEnter: K,
                    get children() {
                      return [g(w, {
                        width: 300,
                        autofocus: !0,
                        children: "Play"
                      }), g(w, {
                        width: 300,
                        children: "Resume"
                      })];
                    }
                  }), g(j, {
                    ref: function ref(e) {
                      "function" == typeof R ? R(e) : R = e;
                    },
                    x: 0,
                    y: H,
                    get style() {
                      return O.Column;
                    },
                    height: 880,
                    scroll: "none",
                    zIndex: 5,
                    get children() {
                      return g(p, {
                        get when() {
                          return C(function () {
                            return !!u();
                          })() && i();
                        },
                        get children() {
                          return [g(P, {
                            skipFocus: !0,
                            get style() {
                              return O.RowTitle;
                            },
                            children: "Recommendations"
                          }), g(E, {
                            onFocus: N,
                            onEnter: G,
                            get items() {
                              return u();
                            },
                            width: 1620
                          }), g(P, {
                            skipFocus: !0,
                            get style() {
                              return O.RowTitle;
                            },
                            children: "Cast and Crew"
                          }), g(E, {
                            onFocus: U,
                            onEnter: G,
                            get items() {
                              return i();
                            },
                            width: 1620
                          })];
                        }
                      });
                    }
                  }), g(v, {
                    ref: function ref(e) {
                      "function" == typeof z ? z(e) : z = e;
                    },
                    style: M,
                    transition: {
                      alpha: !0,
                      y: !0
                    }
                  })];
                }
              }), g(v, {
                get alpha() {
                  return I();
                },
                get color() {
                  return y("#000000");
                },
                skipFocus: !0,
                zIndex: 200,
                transition: {
                  alpha: !0
                }
              })];
            }
          });
        });
      }
    };
  });
}();