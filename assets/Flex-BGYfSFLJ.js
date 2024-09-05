function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { h as g, c as h, g as y, i as e, C as d, j as f, T as i, R as o, V as p, m, s as x } from "./index-CQr2WdTS.js";
import "./CoreExtension-BwzX6MG-.js";
var F = function F() {
  var n = {
      display: "flex",
      justifyContent: "flexStart",
      width: 1600,
      height: 110,
      color: g("#4dabf5")
    },
    r = {
      fontSize: 44,
      marginTop: 25,
      marginBottom: -20,
      skipFocus: !0
    };
  function t(a) {
    return e(p, m(a, {
      style: {
        width: 200,
        height: 100,
        y: 5,
        color: 392801023
      }
    }));
  }
  var _h = h(50),
    _h2 = _slicedToArray(_h, 2),
    c = _h2[0],
    u = _h2[1];
  function s() {
    var a;
    (a = this.children.selected) == null || a.setFocus(), u(150 + (this.y || 0) * -1);
  }
  y(function () {
    x("#333333");
  });
  var l = 50;
  return e(d, {
    x: 160,
    get y() {
      return c();
    },
    gap: 30,
    height: 850,
    get width() {
      return n.width;
    },
    get style() {
      return f.Column;
    },
    get children() {
      return [e(i, {
        style: r,
        children: "Flex Start"
      }), e(o, {
        gap: l,
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {
            autofocus: !0
          }), e(t, {}), e(t, {}), e(t, {}), e(t, {})];
        }
      }), e(i, {
        style: r,
        children: "Flex Start - Margin Left"
      }), e(o, {
        gap: l,
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {
            marginLeft: 100
          }), e(t, {}), e(t, {
            marginLeft: 100
          }), e(t, {}), e(t, {})];
        }
      }), e(i, {
        style: r,
        children: "Flex End"
      }), e(o, {
        gap: l,
        justifyContent: "flexEnd",
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {}), e(t, {}), e(t, {}), e(t, {}), e(t, {})];
        }
      }), e(i, {
        style: r,
        children: "Flex End - Margin Right"
      }), e(o, {
        gap: l,
        justifyContent: "flexEnd",
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {}), e(t, {
            marginRight: 100
          }), e(t, {}), e(t, {}), e(t, {
            marginRight: 100
          })];
        }
      }), e(i, {
        style: r,
        children: "Center - No Margin Support"
      }), e(o, {
        gap: l,
        justifyContent: "center",
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {}), e(t, {}), e(t, {}), e(t, {}), e(t, {})];
        }
      }), e(i, {
        style: r,
        children: "Space Between - No Margin Support"
      }), e(o, {
        gap: l,
        justifyContent: "spaceBetween",
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {}), e(t, {}), e(t, {}), e(t, {}), e(t, {})];
        }
      }), e(i, {
        style: r,
        children: "Space Evenly - No Margin Support"
      }), e(o, {
        gap: l,
        justifyContent: "spaceEvenly",
        style: n,
        onFocus: s,
        get children() {
          return [e(t, {}), e(t, {}), e(t, {}), e(t, {}), e(t, {})];
        }
      })];
    }
  });
};
export { F as default };