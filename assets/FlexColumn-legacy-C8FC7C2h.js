!function () {
  function t(t, n) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != n) {
        var r,
          o,
          i,
          l,
          u = [],
          a = !0,
          c = !1;
        try {
          if (i = (n = n.call(t)).next, 0 === e) {
            if (Object(n) !== n) return;
            a = !1;
          } else for (; !(a = (r = i.call(n)).done) && (u.push(r.value), u.length !== e); a = !0);
        } catch (t) {
          c = !0, o = t;
        } finally {
          try {
            if (!a && null != n.return && (l = n.return(), Object(l) !== l)) return;
          } finally {
            if (c) throw o;
          }
        }
        return u;
      }
    }(t, n) || function (t, n) {
      if (!t) return;
      if ("string" == typeof t) return e(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === r && t.constructor && (r = t.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(t);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return e(t, n);
    }(t, n) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, n) {
    "use strict";

    var r, o, i, l, u, a, c, s, f, y;
    return {
      setters: [function (t) {
        r = t.h, o = t.c, i = t.g, l = t.i, u = t.T, a = t.R, c = t.C, s = t.V, f = t.m, y = t.s;
      }, null],
      execute: function execute() {
        e("default", function () {
          var e = {
              display: "flex",
              justifyContent: "spaceEvenly",
              width: 1920,
              y: 100,
              height: 880,
              color: r("00000000")
            },
            n = {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              color: r("#4dabf5"),
              height: 850,
              width: 60
            };
          function g(t) {
            var e = {
              width: 50,
              height: 80,
              x: 5,
              color: r("#1769aa")
            };
            return l(s, f(t, {
              style: e
            }));
          }
          var h = t(o(50), 2),
            d = (h[0], h[1]);
          function p() {
            var t;
            null === (t = this.children.selected) || void 0 === t || t.setFocus(), d(150 + -1 * (this.y || 0));
          }
          i(function () {
            y("#333333");
          });
          var m = 50;
          return [l(u, {
            style: {
              fontSize: 44,
              y: 20,
              x: 150
            },
            children: "Start, MarginTop, End, MarginBottom, Center, Between, Evenly"
          }), l(a, {
            gap: m,
            style: e,
            onFocus: p,
            get children() {
              return [l(c, {
                gap: 30,
                style: n,
                get children() {
                  return [l(g, {
                    autofocus: !0
                  }), l(g, {}), l(g, {}), l(g, {}), l(g, {})];
                }
              }), l(c, {
                gap: m,
                style: n,
                onFocus: p,
                get children() {
                  return [l(g, {
                    marginTop: 100
                  }), l(g, {}), l(g, {
                    marginTop: 100
                  }), l(g, {}), l(g, {})];
                }
              }), l(c, {
                gap: m,
                justifyContent: "flexEnd",
                style: n,
                onFocus: p,
                get children() {
                  return [l(g, {}), l(g, {}), l(g, {}), l(g, {}), l(g, {})];
                }
              }), l(c, {
                gap: m,
                justifyContent: "flexEnd",
                style: n,
                onFocus: p,
                get children() {
                  return [l(g, {}), l(g, {
                    marginBottom: 100
                  }), l(g, {}), l(g, {}), l(g, {
                    marginBottom: 100
                  })];
                }
              }), l(c, {
                gap: m,
                justifyContent: "center",
                style: n,
                onFocus: p,
                get children() {
                  return [l(g, {}), l(g, {}), l(g, {}), l(g, {}), l(g, {})];
                }
              }), l(c, {
                gap: m,
                justifyContent: "spaceBetween",
                style: n,
                onFocus: p,
                get children() {
                  return [l(g, {}), l(g, {}), l(g, {}), l(g, {}), l(g, {})];
                }
              }), l(c, {
                gap: m,
                justifyContent: "spaceEvenly",
                style: n,
                onFocus: p,
                get children() {
                  return [l(g, {}), l(g, {}), l(g, {}), l(g, {}), l(g, {})];
                }
              })];
            }
          })];
        });
      }
    };
  });
}();