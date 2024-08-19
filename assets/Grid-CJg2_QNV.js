function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { c as o, a as I, b as p, d as P, h as R, t as C, e as T, f as b, o as S, g as E, i as r, V as w, C as k, I as G, T as y, s as H } from "./index-oincxhML.js";
import "./CoreExtension-BwzX6MG-.js";
function W(e) {
  var _o = o([]),
    _o2 = _slicedToArray(_o, 2),
    g = _o2[0],
    u = _o2[1],
    _o3 = o(0),
    _o4 = _slicedToArray(_o3, 2),
    i = _o4[0],
    h = _o4[1],
    _o5 = o(!1),
    _o6 = _slicedToArray(_o5, 2),
    a = _o6[0],
    l = _o6[1],
    _I = I(i, e),
    _I2 = _slicedToArray(_I, 1),
    f = _I2[0];
  return p(function () {
    var c = f();
    c && P(function () {
      c.length === 0 && l(!0), u(function (d) {
        return [].concat(_toConsumableArray(d), _toConsumableArray(c));
      });
    });
  }), [g, {
    page: i,
    setPage: h,
    setItems: u,
    end: a,
    setEnd: l
  }];
}
var j = 50,
  s = {
    ProductRow: {
      width: 500,
      display: "flex",
      flexDirection: "row",
      gap: 40,
      height: j,
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
      color: R("#f6f6f6"),
      focus: {
        color: 336861183
      }
    },
    itemsContainer: {
      width: C.layout.screenW,
      height: 600,
      y: 180,
      x: 180,
      zIndex: 2
    }
  };
function z(e) {
  return r(w, {
    get y() {
      return e.y;
    },
    get autofocus() {
      return e.autofocus;
    },
    get style() {
      return s.ProductRow;
    },
    forwardStates: !0,
    get children() {
      return [r(y, {
        get style() {
          return s.ProductText;
        },
        get children() {
          return e.item.id;
        }
      }), r(y, {
        get style() {
          return s.ProductText;
        },
        get children() {
          return e.item.title;
        }
      }), r(y, {
        get style() {
          return s.ProductText;
        },
        get children() {
          return e.item.price;
        }
      })];
    }
  });
}
var A = function A() {
  var _o7 = o(0),
    _o8 = _slicedToArray(_o7, 2),
    e = _o8[0],
    g = _o8[1],
    u = T(function () {
      return 0;
    }),
    _o9 = o(0),
    _o10 = _slicedToArray(_o9, 2),
    i = _o10[0],
    h = _o10[1],
    _o11 = o([]),
    _o12 = _slicedToArray(_o11, 2),
    a = _o12[0],
    l = _o12[1],
    _W = W(function (n) {
      return fetch("https://dummyjson.com/products?limit=20&skip=".concat(20 * n)).then(function (t) {
        return t.json();
      }).then(function (t) {
        return t.total, t.products;
      });
    }),
    _W2 = _slicedToArray(_W, 2),
    f = _W2[0],
    c = _W2[1].setPage,
    d = 8;
  b(S([f, i], function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      n = _ref2[0],
      t = _ref2[1];
    a().length - d > t || (l(n.slice(0, t + d)), t > n.length - 5 && c(function (m) {
      return m + 1;
    }));
  }, {
    defer: !0
  })), E(function () {
    H("#000000");
  });
  function x(n, t, m, V) {
    g((t.y || 0) * -1 + 50), h(m);
  }
  return r(w, {
    clipping: !0,
    get style() {
      return s.itemsContainer;
    },
    get children() {
      return r(k, {
        plinko: !0,
        get y() {
          return e();
        },
        scroll: "none",
        onSelectedChanged: x,
        get children() {
          return r(G, {
            get each() {
              return a();
            },
            children: function children(n, t) {
              return r(z, {
                y: t * 50,
                get item() {
                  return n();
                },
                get autofocus() {
                  return u(t);
                }
              });
            }
          });
        }
      });
    }
  });
};
export { A as default };