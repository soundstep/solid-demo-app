function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { c as u, i as e, V as r, T as i, R as c, F as o, S as h, C as g } from "./index-CMXG2PLb.js";
import "./CoreExtension-DUlHFTtP.js";
var a = ["Mary", "had", "a", "little", "lamb", "her", "fleece", "was", "white", "as", "snow"],
  f = {
    PageContainer: {
      width: 1920,
      height: 1080,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99
    }
  },
  y = function y() {
    var _u = u(!1),
      _u2 = _slicedToArray(_u, 2),
      l = _u2[0],
      d = _u2[1];
    var s;
    return setTimeout(function () {
      d(!0), s.alpha = 0;
    }, 2e3), [e(r, {
      ref: function ref(t) {
        var n = s;
        typeof n == "function" ? n(t) : s = t;
      },
      get style() {
        return f.PageContainer;
      },
      get children() {
        return [e(i, {
          children: "Center - gif doesnt animate"
        }), e(r, {
          autosize: !0,
          src: "./assets/spinner.gif"
        }), e(i, {
          children: "Spinner"
        })];
      }
    }), e(c, {
      scroll: "always",
      gap: 20,
      selected: 2,
      autofocus: !0,
      x: 150,
      y: 50,
      transition: {
        x: {
          duration: 350
        }
      },
      get children() {
        return e(o, {
          each: a,
          children: function children(t, n) {
            return e(r, {
              width: 100,
              height: 200,
              style: {
                color: 4278190335,
                focus: {
                  color: 4294967295
                }
              }
            });
          }
        });
      }
    }), e(h, {
      get when() {
        return l();
      },
      get children() {
        return e(c, {
          scroll: "none",
          gap: 20,
          selected: 2,
          autofocus: !0,
          x: 150,
          y: 350,
          transition: {
            x: {
              duration: 350
            }
          },
          get children() {
            return e(o, {
              each: a,
              children: function children(t, n) {
                return e(r, {
                  width: 100,
                  height: 200,
                  style: {
                    color: 4278190335,
                    focus: {
                      color: 4294967295
                    }
                  }
                });
              }
            });
          }
        });
      }
    }), e(h, {
      get when() {
        return l();
      },
      get children() {
        return e(c, {
          scroll: "none",
          gap: 20,
          selected: 2,
          x: 150,
          y: 650,
          transition: {
            x: {
              duration: 350
            }
          },
          get children() {
            return e(o, {
              each: a,
              children: function children(t, n) {
                return e(i, {
                  fontSize: 24,
                  children: t
                });
              }
            });
          }
        });
      }
    }), e(h, {
      get when() {
        return l();
      },
      get children() {
        return e(g, {
          scroll: "none",
          gap: 20,
          selected: 2,
          x: 350,
          y: 450,
          get children() {
            return e(o, {
              each: a,
              children: function children(t, n) {
                return e(i, {
                  fontSize: 24,
                  children: t
                });
              }
            });
          }
        });
      }
    })];
  };
export { y as default, f as styles };