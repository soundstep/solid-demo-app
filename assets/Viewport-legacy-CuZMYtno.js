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
    }(t) || function (t, n) {
      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != r) {
        var e,
          o,
          i,
          u,
          a = [],
          l = !0,
          c = !1;
        try {
          if (i = (r = r.call(t)).next, 0 === n) {
            if (Object(r) !== r) return;
            l = !1;
          } else for (; !(l = (e = i.call(r)).done) && (a.push(e.value), a.length !== n); l = !0);
        } catch (t) {
          c = !0, o = t;
        } finally {
          try {
            if (!l && null != r["return"] && (u = r["return"](), Object(u) !== u)) return;
          } finally {
            if (c) throw o;
          }
        }
        return a;
      }
    }(t, r) || function (t, r) {
      if (!t) return;
      if ("string" == typeof t) return n(t, r);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === e && t.constructor && (e = t.constructor.name);
      if ("Map" === e || "Set" === e) return Array.from(t);
      if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return n(t, r);
    }(t, r) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function n(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e;
  }
  System.register(["./index-legacy-wrywicEH.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (n, r) {
    "use strict";

    var e, o, i, u, a, l, c, f;
    return {
      setters: [function (t) {
        e = t.c, o = t.h, i = t.g, u = t.n, a = t.i, l = t.V, c = t.T, f = t.s;
      }, null],
      execute: function execute() {
        n("default", function () {
          var n,
            r,
            s = t(e([]), 2),
            y = s[0],
            d = s[1],
            h = {
              width: 100,
              height: 100,
              x: -400,
              y: -400,
              rotation: 0,
              borderRadius: 50,
              color: o("#4287f5"),
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
            g = {
              fontSize: 32,
              x: 960,
              y: 540,
              mount: .5,
              lineheight: 52
            },
            p = function p(t, n) {
              return Math.floor(Math.random() * (n - t + 1) + t);
            };
          function m(t, n) {
            d(function (n) {
              return [].concat(_toConsumableArray(n), [t]).slice(-4);
            }), console.log(t);
          }
          return i(function () {
            f("#000000"), n.x = 910, n.y = 490, r = setInterval(function () {
              n.rotation = p(-90, 90), n.x = p(-300, 2220), n.y = p(-300, 1380);
            }, 2500);
          }), u(function () {
            clearInterval(r);
          }), a(l, {
            get children() {
              return [a(c, {
                style: g,
                get children() {
                  return y().join("\n");
                }
              }), a(l, {
                autofocus: !0,
                style: h,
                ref: function ref(t) {
                  "function" == typeof n ? n(t) : n = t;
                },
                onEvents: [["inBounds", function (t) {
                  return m("inBounds");
                }], ["outOfBounds", function (t) {
                  return m("outOfBounds");
                }], ["inViewport", function (t) {
                  return m("inViewport");
                }], ["outOfViewport", function (t) {
                  return m("outOfViewport");
                }]]
              })];
            }
          });
        });
      }
    };
  });
}();