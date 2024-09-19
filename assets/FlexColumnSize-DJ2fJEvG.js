function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { h as i, c as d, g as h, i as t, T as f, R as m, C as l, V as p, m as C, s as x } from "./index-oincxhML.js";
import "./CoreExtension-BwzX6MG-.js";
var B = function B() {
  var a = {
      display: "flex",
      justifyContent: "spaceEvenly",
      width: 1920,
      y: 100,
      height: 880,
      color: i("00000000")
    },
    n = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      color: i("#4dabf5"),
      height: 850,
      width: 80
    },
    c = {
      fontSize: 44,
      y: 20,
      x: 150
    };
  function e(s) {
    var g = {
      width: u(),
      height: 80,
      x: 5,
      color: i("#1769aa")
    };
    return t(p, C(s, {
      style: g
    }));
  }
  function u() {
    return Math.floor(Math.random() * 61) + 10;
  }
  var _d = d(50),
    _d2 = _slicedToArray(_d, 2),
    w = _d2[0],
    y = _d2[1];
  function o() {
    var s;
    (s = this.children.selected) == null || s.setFocus(), y(150 + (this.y || 0) * -1);
  }
  h(function () {
    x("#333333");
  });
  var r = 50;
  return [t(f, {
    style: c,
    children: "Start, MarginTop, End, MarginBottom, Center, Between, Evenly"
  }), t(m, {
    gap: r,
    style: a,
    onFocus: o,
    get children() {
      return [t(l, {
        gap: 30,
        style: n,
        alignItems: "center",
        get children() {
          return [t(e, {
            autofocus: !0
          }), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(l, {
        gap: r,
        style: n,
        onFocus: o,
        alignItems: "flexStart",
        get children() {
          return [t(e, {
            marginTop: 100
          }), t(e, {}), t(e, {
            marginTop: 100
          }), t(e, {}), t(e, {})];
        }
      }), t(l, {
        gap: r,
        alignItems: "flexEnd",
        justifyContent: "flexEnd",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(l, {
        gap: r,
        justifyContent: "flexEnd",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {
            marginBottom: 100
          }), t(e, {}), t(e, {}), t(e, {
            marginBottom: 100
          })];
        }
      }), t(l, {
        gap: r,
        justifyContent: "center",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(l, {
        gap: r,
        justifyContent: "spaceBetween",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(l, {
        gap: r,
        justifyContent: "spaceEvenly",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      })];
    }
  })];
};
export { B as default };