function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { y as h, z as m, A as B, B as I, u as D, a as d, c as M, f as V, o as z, s as H, h as v, i as o, S as k, V as g, D as S, R as j, E as C, C as G, j as f, k as N, T as R, G as F, H as P, J as U, K as Y } from "./index-CMXG2PLb.js";
import { a as J } from "./CoreExtension-DUlHFTtP.js";
function K(t) {
  var r = Math.floor(t / 60),
    s = t % 60;
  return r + "h " + (s < 10 ? "0" : "") + s + "min";
}
function q(t) {
  var r = t.split("-");
  return r[1] + "/" + r[2] + "/" + r[0];
}
function T(t) {
  return t.split("-")[0];
}
function L(_ref) {
  var t = _ref.type,
    r = _ref.id;
  return h.get("/".concat(t, "/").concat(r, "/recommendations")).then(function (_ref2) {
    var s = _ref2.results;
    return s.length ? m(s.slice(0, 7)) : h.get("/trending/".concat(t, "/week?page=1")).then(function (_ref3) {
      var n = _ref3.results;
      return m(n.slice(0, 7));
    });
  });
}
function O(_ref4) {
  var t = _ref4.type,
    r = _ref4.id;
  return h.get("/".concat(t, "/").concat(r, "/credits")).then(function (_ref5) {
    var s = _ref5.cast;
    return m(s.slice(0, 7));
  });
}
function Q(_ref6) {
  var t = _ref6.type,
    r = _ref6.id;
  var s = t === "movie" ? {
    rtCrit: 86,
    rtFan: 92
  } : {};
  return h.get("/".concat(t, "/").concat(r)).then(function (n) {
    return _objectSpread({
      backgroundImage: B(n.backdrop_path, "w1280"),
      heroContent: {
        title: n.title || n.name,
        description: n.overview,
        badges: ["HD", "CC"],
        voteAverage: n.vote_average,
        voteCount: n.vote_count,
        metaText: t === "movie" ? K(n.runtime) + "   " + q(n.release_date) : "".concat(T(n.first_air_date), " - ").concat(T(n.last_air_date)),
        reviews: s
      }
    }, n);
  });
}
var Z = function Z() {
  var t = I(),
    r = D(),
    _d = d(function () {
      return _objectSpread({}, t);
    }, Q),
    _d2 = _slicedToArray(_d, 1),
    s = _d2[0],
    _d3 = d(function () {
      return _objectSpread({}, t);
    }, O),
    _d4 = _slicedToArray(_d3, 1),
    n = _d4[0],
    _d5 = d(function () {
      return _objectSpread({}, t);
    }, L),
    _d6 = _slicedToArray(_d5, 1),
    p = _d6[0],
    _M = M(0),
    _M2 = _slicedToArray(_M, 2),
    _ = _M2[0],
    y = _M2[1];
  V(z(s, function (e) {
    H(e.backgroundImage);
  }, {
    defer: !0
  }));
  var u = 640,
    x = {
      color: v("#000000"),
      alpha: 0,
      width: 1900,
      height: 890,
      x: -160,
      y: u,
      borderRadius: 30
    };
  function E() {
    var e;
    (e = this.children.selected) == null || e.setFocus(), c.y = u, i.y = u, i.alpha = 0;
  }
  function $() {
    var e;
    (e = this.children.selected) == null || e.setFocus(), c.y = 200, i.y = 160, i.alpha = .9;
  }
  function w() {
    var e = this.children.find(function (a) {
      return a.states.has("focus");
    });
    J(e && e.href), r(e.href);
  }
  function b() {
    P(), document.getElementsByTagName("canvas")[0].focus(), l.setFocus(), y(0);
  }
  function A() {
    var e = U();
    Y(e), y(.9);
  }
  var c, i, l;
  return o(k, {
    get when() {
      return s();
    },
    keyed: !0,
    get children() {
      return [o(g, {
        x: 170,
        onUp: function onUp() {
          return l.setFocus();
        },
        onEscape: b,
        get children() {
          return [o(S, {
            y: 260,
            get content() {
              return s().heroContent;
            }
          }), o(j, {
            ref: function ref(e) {
              var a = l;
              typeof a == "function" ? a(e) : l = e;
            },
            y: 500,
            scroll: "none",
            height: 90,
            width: 640,
            gap: 40,
            onDown: function onDown() {
              return c.setFocus();
            },
            onEnter: A,
            get children() {
              return [o(C, {
                width: 300,
                autofocus: !0,
                children: "Play"
              }), o(C, {
                width: 300,
                children: "Resume"
              })];
            }
          }), o(G, {
            ref: function ref(e) {
              var a = c;
              typeof a == "function" ? a(e) : c = e;
            },
            x: 0,
            y: u,
            get style() {
              return f.Column;
            },
            height: 880,
            scroll: "none",
            zIndex: 5,
            get children() {
              return o(k, {
                get when() {
                  return N(function () {
                    return !!p();
                  })() && n();
                },
                get children() {
                  return [o(R, {
                    skipFocus: !0,
                    get style() {
                      return f.RowTitle;
                    },
                    children: "Recommendations"
                  }), o(F, {
                    onFocus: E,
                    onEnter: w,
                    get items() {
                      return p();
                    },
                    width: 1620
                  }), o(R, {
                    skipFocus: !0,
                    get style() {
                      return f.RowTitle;
                    },
                    children: "Cast and Crew"
                  }), o(F, {
                    onFocus: $,
                    onEnter: w,
                    get items() {
                      return n();
                    },
                    width: 1620
                  })];
                }
              });
            }
          }), o(g, {
            ref: function ref(e) {
              var a = i;
              typeof a == "function" ? a(e) : i = e;
            },
            style: x,
            transition: {
              alpha: !0,
              y: !0
            }
          })];
        }
      }), o(g, {
        get alpha() {
          return _();
        },
        get color() {
          return v("#000000");
        },
        skipFocus: !0,
        zIndex: 200,
        transition: {
          alpha: !0
        }
      })];
    }
  });
};
export { Z as default };