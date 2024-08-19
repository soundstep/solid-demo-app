!function () {
  function t(t, r) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != r) {
        var n,
          i,
          l,
          o,
          u = [],
          a = !0,
          c = !1;
        try {
          if (l = (r = r.call(t)).next, 0 === e) {
            if (Object(r) !== r) return;
            a = !1;
          } else for (; !(a = (n = l.call(r)).done) && (u.push(n.value), u.length !== e); a = !0);
        } catch (t) {
          c = !0, i = t;
        } finally {
          try {
            if (!a && null != r.return && (o = r.return(), Object(o) !== o)) return;
          } finally {
            if (c) throw i;
          }
        }
        return u;
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
  System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, r) {
    "use strict";

    var n, i, l, o, u, a, c, s, y, f, g;
    return {
      setters: [function (t) {
        n = t.h, i = t.c, l = t.g, o = t.i, u = t.C, a = t.j, c = t.T, s = t.R, y = t.V, f = t.m, g = t.s;
      }, null],
      execute: function execute() {
        e("default", function () {
          var e = {
              display: "flex",
              justifyContent: "flexStart",
              width: 1600,
              height: 110,
              color: n("#4dabf5")
            },
            r = {
              fontSize: 44,
              marginTop: 25,
              marginBottom: -20,
              skipFocus: !0
            };
          function h(t) {
            return o(y, f(t, {
              style: {
                width: 200,
                height: 100,
                y: 5,
                color: 392801023
              }
            }));
          }
          var d = t(i(50), 2),
            p = d[0],
            m = d[1];
          function v() {
            var t;
            null === (t = this.children.selected) || void 0 === t || t.setFocus(), m(150 + -1 * (this.y || 0));
          }
          l(function () {
            g("#333333");
          });
          var S = 50;
          return o(u, {
            x: 160,
            get y() {
              return p();
            },
            gap: 30,
            height: 850,
            get width() {
              return e.width;
            },
            get style() {
              return a.Column;
            },
            get children() {
              return [o(c, {
                style: r,
                children: "Flex Start"
              }), o(s, {
                gap: S,
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {
                    autofocus: !0
                  }), o(h, {}), o(h, {}), o(h, {}), o(h, {})];
                }
              }), o(c, {
                style: r,
                children: "Flex Start - Margin Left"
              }), o(s, {
                gap: S,
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {
                    marginLeft: 100
                  }), o(h, {}), o(h, {
                    marginLeft: 100
                  }), o(h, {}), o(h, {})];
                }
              }), o(c, {
                style: r,
                children: "Flex End"
              }), o(s, {
                gap: S,
                justifyContent: "flexEnd",
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {}), o(h, {}), o(h, {}), o(h, {}), o(h, {})];
                }
              }), o(c, {
                style: r,
                children: "Flex End - Margin Right"
              }), o(s, {
                gap: S,
                justifyContent: "flexEnd",
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {}), o(h, {
                    marginRight: 100
                  }), o(h, {}), o(h, {}), o(h, {
                    marginRight: 100
                  })];
                }
              }), o(c, {
                style: r,
                children: "Center - No Margin Support"
              }), o(s, {
                gap: S,
                justifyContent: "center",
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {}), o(h, {}), o(h, {}), o(h, {}), o(h, {})];
                }
              }), o(c, {
                style: r,
                children: "Space Between - No Margin Support"
              }), o(s, {
                gap: S,
                justifyContent: "spaceBetween",
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {}), o(h, {}), o(h, {}), o(h, {}), o(h, {})];
                }
              }), o(c, {
                style: r,
                children: "Space Evenly - No Margin Support"
              }), o(s, {
                gap: S,
                justifyContent: "spaceEvenly",
                style: e,
                onFocus: v,
                get children() {
                  return [o(h, {}), o(h, {}), o(h, {}), o(h, {}), o(h, {})];
                }
              })];
            }
          });
        });
      }
    };
  });
}();