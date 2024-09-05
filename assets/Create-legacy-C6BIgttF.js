!function () {
  function t(t, r) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != r) {
        var n,
          o,
          i,
          l,
          c = [],
          u = !0,
          f = !1;
        try {
          if (i = (r = r.call(t)).next, 0 === e) {
            if (Object(r) !== r) return;
            u = !1;
          } else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
        } catch (t) {
          f = !0, o = t;
        } finally {
          try {
            if (!u && null != r["return"] && (l = r["return"](), Object(l) !== l)) return;
          } finally {
            if (f) throw o;
          }
        }
        return c;
      }
    }(t, r) || function (t, r) {
      if (!t) return;
      if ("string" == typeof t) return e(t, r);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e(t, r);
    }(t, r) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  System.register(["./index-legacy-eVDxr7Bx.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, r) {
    "use strict";

    var n, o, i, l, c, u, f, h, a, d, s;
    return {
      setters: [function (t) {
        n = t.h, o = t.g, i = t.c, l = t.i, c = t.V, u = t.T, f = t.k, h = t.S, a = t.s, d = t.l, s = t.m;
      }, null],
      execute: function execute() {
        e("default", function () {
          var e,
            r,
            g = {
              width: 900,
              height: 500,
              y: 50,
              x: 150,
              gap: 25,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              color: n("00000000")
            },
            y = {
              width: 900,
              height: 36,
              gap: 6,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flexStart",
              color: n("00000000")
            },
            p = {
              fontSize: 42
            },
            w = {
              fontSize: 26
            };
          o(function () {
            a("#000000"), e.animate({
              x: 100
            }, {
              duration: 2e3
            }).start();
          });
          var b = t(i(), 2),
            m = b[0],
            x = b[1],
            v = t(i(), 2),
            S = v[0];
          v[1];
          setTimeout(function () {
            var t;
            x("- Inserted -"), null === (t = r.getChildById("child1")) || void 0 === t || t.animate({
              x: 600
            }, {
              duration: 2e3
            }).start();
          }, 2e3);
          var j = {
              width: 400,
              height: 300,
              color: n("#0000ff")
            },
            T = {
              color: n("#f54242"),
              focus: {
                color: n("#4287f5")
              }
            };
          function C(t) {
            var e = d(function () {
              return t.children;
            });
            return l(c, s(t, {
              get style() {
                return [T, t.style, [j]];
              },
              get children() {
                return [l(c, {
                  id: "child1",
                  width: 100,
                  height: 100,
                  get color() {
                    return n("#ff0000");
                  },
                  y: 25,
                  get children() {
                    return [f(function () {
                      return e();
                    }), l(c, {
                      id: "subChild",
                      x: 150,
                      width: 100,
                      height: 100,
                      get color() {
                        return n("#00ff00");
                      }
                    }), l(u, {
                      get children() {
                        return t.title;
                      }
                    })];
                  }
                }), l(c, {
                  width: 100,
                  height: 100,
                  get color() {
                    return n("#ffff00");
                  },
                  y: 175,
                  get children() {
                    return e();
                  }
                })];
              }
            }));
          }
          var A = {
              borderLeft: {
                width: 8,
                color: 95598118
              },
              borderTop: {
                width: 8,
                color: 631422246
              },
              borderRight: {
                width: 8,
                color: 95598118
              },
              borderBottom: {
                width: 8,
                color: 3316790822
              }
            },
            I = {
              color: n("#cccccc"),
              focus: {
                color: n("#000000")
              }
            },
            O = {
              color: n("#ffffff"),
              focus: {
                color: n("#f6f6cc")
              }
            };
          return l(c, {
            style: g,
            get children() {
              return [l(u, {
                style: p,
                children: "Title of the Page"
              }), l(c, {
                style: y,
                get children() {
                  return [l(u, {
                    get children() {
                      return S();
                    }
                  }), l(u, {
                    style: w,
                    get children() {
                      return ["Sub ", f(function () {
                        return m();
                      }), " Text"];
                    }
                  }), l(h, {
                    get when() {
                      return m();
                    },
                    get children() {
                      return l(c, {
                        width: 28,
                        height: 28,
                        src: "./assets/rt-popcorn.png"
                      });
                    }
                  }), l(u, {
                    style: w,
                    children: "More Text"
                  })];
                }
              }), l(C, {
                autofocus: !0,
                ref: function ref(t) {
                  "function" == typeof r ? r(t) : r = t;
                },
                style: [O, I],
                get children() {
                  return l(u, {
                    children: "Child Test"
                  });
                }
              }), l(c, {
                ref: function ref(t) {
                  "function" == typeof e ? e(t) : e = t;
                },
                style: A,
                width: 100,
                height: 100,
                get color() {
                  return n("#00ff00");
                },
                x: 900,
                y: 400,
                get alpha() {
                  return e.states.has("focus") ? 1 : .2;
                }
              })];
            }
          });
        });
      }
    };
  });
}();