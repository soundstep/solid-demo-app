function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { h as r, g as v, c as d, i as e, V as n, T as i, k as f, S as P, s as B, l as I, m as j } from "./index-CQr2WdTS.js";
import "./CoreExtension-BwzX6MG-.js";
var M = function M() {
  var a = {
      width: 900,
      height: 500,
      y: 50,
      x: 150,
      gap: 25,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      color: r("00000000")
    },
    u = {
      width: 900,
      height: 36,
      gap: 6,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flexStart",
      color: r("00000000")
    },
    g = {
      fontSize: 42
    },
    c = {
      fontSize: 26
    };
  var l, s;
  v(function () {
    B("#000000"), l.animate({
      x: 100
    }, {
      duration: 2e3
    }).start();
  });
  var _d = d(),
    _d2 = _slicedToArray(_d, 2),
    h = _d2[0],
    y = _d2[1],
    _d3 = d(),
    _d4 = _slicedToArray(_d3, 2),
    m = _d4[0],
    k = _d4[1];
  setTimeout(function () {
    var t;
    y("- Inserted -"), (t = s.getChildById("child1")) == null || t.animate({
      x: 600
    }, {
      duration: 2e3
    }).start();
  }, 2e3);
  var w = {
      width: 400,
      height: 300,
      color: r("#0000ff")
    },
    x = {
      color: r("#f54242"),
      focus: {
        color: r("#4287f5")
      }
    };
  function T(t) {
    var o = I(function () {
      return t.children;
    });
    return e(n, j(t, {
      get style() {
        return [x, t.style, [w]];
      },
      get children() {
        return [e(n, {
          id: "child1",
          width: 100,
          height: 100,
          get color() {
            return r("#ff0000");
          },
          y: 25,
          get children() {
            return [f(function () {
              return o();
            }), e(n, {
              id: "subChild",
              x: 150,
              width: 100,
              height: 100,
              get color() {
                return r("#00ff00");
              }
            }), e(i, {
              get children() {
                return t.title;
              }
            })];
          }
        }), e(n, {
          width: 100,
          height: 100,
          get color() {
            return r("#ffff00");
          },
          y: 175,
          get children() {
            return o();
          }
        })];
      }
    }));
  }
  var S = {
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
    p = {
      color: r("#cccccc"),
      focus: {
        color: r("#000000")
      }
    },
    C = {
      color: r("#ffffff"),
      focus: {
        color: r("#f6f6cc")
      }
    };
  function b(t) {
    return t.states.has("focus");
  }
  return e(n, {
    style: a,
    get children() {
      return [e(i, {
        style: g,
        children: "Title of the Page"
      }), e(n, {
        style: u,
        get children() {
          return [e(i, {
            get children() {
              return m();
            }
          }), e(i, {
            style: c,
            get children() {
              return ["Sub ", f(function () {
                return h();
              }), " Text"];
            }
          }), e(P, {
            get when() {
              return h();
            },
            get children() {
              return e(n, {
                width: 28,
                height: 28,
                src: "./assets/rt-popcorn.png"
              });
            }
          }), e(i, {
            style: c,
            children: "More Text"
          })];
        }
      }), e(T, {
        autofocus: !0,
        ref: function ref(t) {
          var o = s;
          typeof o == "function" ? o(t) : s = t;
        },
        style: [C, p],
        get children() {
          return e(i, {
            children: "Child Test"
          });
        }
      }), e(n, {
        ref: function ref(t) {
          var o = l;
          typeof o == "function" ? o(t) : l = t;
        },
        style: S,
        width: 100,
        height: 100,
        get color() {
          return r("#00ff00");
        },
        x: 900,
        y: 400,
        get alpha() {
          return b(l) ? 1 : .2;
        }
      })];
    }
  });
};
export { M as default };