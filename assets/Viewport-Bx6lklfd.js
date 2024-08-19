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
import { c as g, h, g as m, n as p, i as r, V as l, T as y, s as w } from "./index-oincxhML.js";
import "./CoreExtension-BwzX6MG-.js";
var v = function v() {
  var e, i;
  var _g = g([]),
    _g2 = _slicedToArray(_g, 2),
    s = _g2[0],
    u = _g2[1],
    c = {
      width: 100,
      height: 100,
      x: -400,
      y: -400,
      rotation: 0,
      borderRadius: 50,
      color: h("#4287f5"),
      transition: {
        x: {
          duration: 1250,
          easing: "linear"
        },
        y: {
          duration: 1250,
          easing: "linear"
        },
        rotation: {
          duration: 1400,
          easing: "ease-in-out"
        }
      }
    },
    d = {
      fontSize: 32,
      x: 960,
      y: 540,
      mount: .5,
      lineheight: 52
    },
    a = function a(t, n) {
      return Math.floor(Math.random() * (n - t + 1) + t);
    };
  m(function () {
    w("#000000"), e.x = 1820 / 2, e.y = 980 / 2, i = setInterval(function () {
      e.rotation = a(-90, 90), e.x = a(-300, 2220), e.y = a(-300, 1380);
    }, 2500);
  });
  function o(t, n) {
    u(function (f) {
      return [].concat(_toConsumableArray(f), [t]).slice(-4);
    }), console.log(t);
  }
  return p(function () {
    clearInterval(i);
  }), r(l, {
    get children() {
      return [r(y, {
        style: d,
        get children() {
          return s().join("\n");
        }
      }), r(l, {
        autofocus: !0,
        style: c,
        ref: function ref(t) {
          var n = e;
          typeof n == "function" ? n(t) : e = t;
        },
        onEvents: [["inBounds", function (t) {
          return o("inBounds");
        }], ["outOfBounds", function (t) {
          return o("outOfBounds");
        }], ["inViewport", function (t) {
          return o("inViewport");
        }], ["outOfViewport", function (t) {
          return o("outOfViewport");
        }]]
      })];
    }
  });
};
export { v as default };