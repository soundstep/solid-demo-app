function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
          u,
          l = [],
          c = !0,
          a = !1;
        try {
          if (i = (r = r.call(t)).next, 0 === e) {
            if (Object(r) !== r) return;
            c = !1;
          } else for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== e); c = !0);
        } catch (t) {
          a = !0, o = t;
        } finally {
          try {
            if (!c && null != r["return"] && (u = r["return"](), Object(u) !== u)) return;
          } finally {
            if (a) throw o;
          }
        }
        return l;
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

    var n, o, i, u, l, c, a, s, d, f, g, h, y, m, p, b;
    return {
      setters: [function (t) {
        n = t.c, o = t.a, i = t.b, u = t.d, l = t.h, c = t.t, a = t.e, s = t.f, d = t.o, f = t.g, g = t.i, h = t.V, y = t.C, m = t.I, p = t.T, b = t.s;
      }, null],
      execute: function execute() {
        var r = {
          ProductRow: {
            width: 500,
            display: "flex",
            flexDirection: "row",
            gap: 40,
            height: 50,
            borderRadius: 16,
            color: 4294967053,
            border: {
              color: 8422911,
              width: 0
            },
            active: {
              color: 960052479
            },
            focus: {
              color: 4143380991,
              border: {
                color: 8422911,
                width: 6
              }
            },
            transition: {
              x: {
                duration: 300
              },
              width: {
                duration: 300
              },
              alpha: {
                duration: 300
              }
            }
          },
          ProductText: {
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 24,
            color: l("#f6f6f6"),
            focus: {
              color: 336861183
            }
          },
          itemsContainer: {
            width: c.layout.screenW,
            height: 600,
            y: 180,
            x: 180,
            zIndex: 2
          }
        };
        function v(t) {
          return g(h, {
            get y() {
              return t.y;
            },
            get autofocus() {
              return t.autofocus;
            },
            get style() {
              return r.ProductRow;
            },
            forwardStates: !0,
            get children() {
              return [g(p, {
                get style() {
                  return r.ProductText;
                },
                get children() {
                  return t.item.id;
                }
              }), g(p, {
                get style() {
                  return r.ProductText;
                },
                get children() {
                  return t.item.title;
                }
              }), g(p, {
                get style() {
                  return r.ProductText;
                },
                get children() {
                  return t.item.price;
                }
              })];
            }
          });
        }
        e("default", function () {
          var e = t(n(0), 2),
            l = e[0],
            c = e[1],
            p = a(function () {
              return 0;
            }),
            w = t(n(0), 2),
            x = w[0],
            j = w[1],
            S = t(n([]), 2),
            P = S[0],
            A = S[1],
            C = function (e) {
              var r = t(n([]), 2),
                l = r[0],
                c = r[1],
                a = t(n(0), 2),
                s = a[0],
                d = a[1],
                f = t(n(!1), 2),
                g = f[0],
                h = f[1],
                y = t(o(s, e), 1)[0];
              return i(function () {
                var t = y();
                t && u(function () {
                  0 === t.length && h(!0), c(function (e) {
                    return [].concat(_toConsumableArray(e), _toConsumableArray(t));
                  });
                });
              }), [l, {
                page: s,
                setPage: d,
                setItems: c,
                end: g,
                setEnd: h
              }];
            }(function (t) {
              return fetch("https://dummyjson.com/products?limit=20&skip=" + 20 * t).then(function (t) {
                return t.json();
              }).then(function (t) {
                return t.total, t.products;
              });
            }),
            I = t(C, 2),
            T = I[0],
            O = I[1].setPage;
          function E(t, e, r, n) {
            c(-1 * (e.y || 0) + 50), j(r);
          }
          return s(d([T, x], function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              t = _ref2[0],
              e = _ref2[1];
            P().length - 8 > e || (A(t.slice(0, e + 8)), e > t.length - 5 && O(function (t) {
              return t + 1;
            }));
          }, {
            defer: !0
          })), f(function () {
            b("#000000");
          }), g(h, {
            clipping: !0,
            get style() {
              return r.itemsContainer;
            },
            get children() {
              return g(y, {
                plinko: !0,
                get y() {
                  return l();
                },
                scroll: "none",
                onSelectedChanged: E,
                get children() {
                  return g(m, {
                    get each() {
                      return P();
                    },
                    children: function children(t, e) {
                      return g(v, {
                        y: 50 * e,
                        get item() {
                          return t();
                        },
                        get autofocus() {
                          return p(e);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        });
      }
    };
  });
}();