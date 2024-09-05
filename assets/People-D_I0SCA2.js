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
import { y as g, z as p, A as m, B as y, u as f, a as l, h as w, g as b, i as e, S as c, V as a, j as o, T as i, t as C, C as x, G as T, s as k } from "./index-BirKWmgi.js";
import { a as I } from "./CoreExtension-BwzX6MG-.js";
function B(_ref) {
  var r = _ref.id;
  return g.get("/person/".concat(r, "/combined_credits")).then(function (_ref2) {
    var t = _ref2.cast;
    return p(t.slice(0, 7));
  });
}
function R(_ref3) {
  var r = _ref3.id;
  return g.get("/person/".concat(r)).then(function (t) {
    return _objectSpread({
      backgroundImage: m(t.profile_path, "original"),
      heroContent: {
        title: t.title || t.name,
        description: t.biography
      }
    }, t);
  });
}
var F = function F() {
  var r = y(),
    t = f(),
    _l = l(function () {
      return _objectSpread({}, r);
    }, R),
    _l2 = _slicedToArray(_l, 1),
    n = _l2[0],
    _l3 = l(function () {
      return _objectSpread({}, r);
    }, B),
    _l4 = _slicedToArray(_l3, 1),
    u = _l4[0],
    h = {
      color: w("#000000"),
      alpha: .8,
      width: 800,
      height: 440,
      x: 130,
      y: 180,
      borderRadius: 30
    };
  function d() {
    var s = this.children.selected;
    I(s && s.href), t(s.href);
  }
  return b(function () {
    k("#333333");
  }), e(c, {
    get when() {
      return n();
    },
    keyed: !0,
    get children() {
      return [e(a, {
        get src() {
          return n().backgroundImage;
        },
        width: 400,
        autosize: !0,
        y: 0,
        x: 1800,
        mountX: 1
      }), e(a, {
        x: 150,
        y: 200,
        width: 800,
        gap: 24,
        get style() {
          return o.Column;
        },
        zIndex: 3,
        get children() {
          return [e(i, {
            contain: "width",
            fontFamily: "Ubuntu",
            get style() {
              return C.typography.display2;
            },
            get children() {
              return n().name;
            }
          }), e(i, {
            contain: "both",
            get style() {
              return o.peopleBio;
            },
            get children() {
              return n().biography;
            }
          })];
        }
      }), e(a, {
        style: h
      }), e(x, {
        y: 670,
        x: 140,
        get style() {
          return o.Column;
        },
        scroll: "none",
        get children() {
          return e(c, {
            get when() {
              return u();
            },
            get children() {
              return [e(i, {
                skipFocus: !0,
                get style() {
                  return o.RowTitle;
                },
                children: "Credits"
              }), e(T, {
                autofocus: !0,
                onEnter: d,
                get items() {
                  return u();
                }
              })];
            }
          });
        }
      })];
    }
  });
};
export { F as default };