function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { h as i, c as g, g as h, i as t, T as d, R as f, C as s, V as m, m as p, s as C } from "./index-CQr2WdTS.js";
import "./CoreExtension-BwzX6MG-.js";
var B = function B() {
  var c = {
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
      width: 60
    },
    a = {
      fontSize: 44,
      y: 20,
      x: 150
    };
  function e(l) {
    var y = {
      width: 50,
      height: 80,
      x: 5,
      color: i("#1769aa")
    };
    return t(m, p(l, {
      style: y
    }));
  }
  var _g = g(50),
    _g2 = _slicedToArray(_g, 2),
    x = _g2[0],
    u = _g2[1];
  function o() {
    var l;
    (l = this.children.selected) == null || l.setFocus(), u(150 + (this.y || 0) * -1);
  }
  h(function () {
    C("#333333");
  });
  var r = 50;
  return [t(d, {
    style: a,
    children: "Start, MarginTop, End, MarginBottom, Center, Between, Evenly"
  }), t(f, {
    gap: r,
    style: c,
    onFocus: o,
    get children() {
      return [t(s, {
        gap: 30,
        style: n,
        get children() {
          return [t(e, {
            autofocus: !0
          }), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(s, {
        gap: r,
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {
            marginTop: 100
          }), t(e, {}), t(e, {
            marginTop: 100
          }), t(e, {}), t(e, {})];
        }
      }), t(s, {
        gap: r,
        justifyContent: "flexEnd",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(s, {
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
      }), t(s, {
        gap: r,
        justifyContent: "center",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(s, {
        gap: r,
        justifyContent: "spaceBetween",
        style: n,
        onFocus: o,
        get children() {
          return [t(e, {}), t(e, {}), t(e, {}), t(e, {}), t(e, {})];
        }
      }), t(s, {
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