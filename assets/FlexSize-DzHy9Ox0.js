function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { h as c, c as d, g as y, i as e, C as f, j as m, T as u, R as l, V as p, m as x, s as S } from "./index-oincxhML.js";
import "./CoreExtension-BwzX6MG-.js";
var F = function F() {
  var n = {
      display: "flex",
      justifyContent: "flexStart",
      width: 1600,
      height: 110,
      color: c("#4dabf5")
    },
    g = {
      fontSize: 44,
      marginTop: 25,
      marginBottom: -20,
      skipFocus: !0
    };
  function t(s) {
    return e(p, x(s, {
      style: {
        width: 200,
        height: 100,
        y: 5,
        color: 392801023
      }
    }));
  }
  function r() {
    return Math.floor(Math.random() * 91) + 10;
  }
  var _d = d(50),
    _d2 = _slicedToArray(_d, 2),
    o = _d2[0],
    a = _d2[1];
  function h() {
    var s;
    (s = this.children.selected) == null || s.setFocus(), a(150 + (this.y || 0) * -1);
  }
  y(function () {
    S("#333333");
  });
  var i = 50;
  return e(f, {
    x: 160,
    get y() {
      return o();
    },
    gap: 30,
    height: 850,
    get width() {
      return n.width;
    },
    get style() {
      return m.Column;
    },
    get children() {
      return [e(u, {
        style: g,
        children: "Flex Start - AlignItems: center"
      }), e(l, {
        alignItems: "center",
        gap: i,
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            autofocus: !0,
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          })];
        }
      }), e(u, {
        style: g,
        children: "Flex Start - Margin Left - AlignItems: flexStart"
      }), e(l, {
        gap: i,
        alignItems: "flexStart",
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            marginLeft: 100,
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            marginLeft: 100,
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          })];
        }
      }), e(u, {
        style: g,
        children: "Flex End - AlignItems: flexEnd"
      }), e(l, {
        gap: i,
        justifyContent: "flexEnd",
        alignItems: "flexEnd",
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          })];
        }
      }), e(u, {
        style: g,
        children: "Flex End - Margin Right"
      }), e(l, {
        gap: i,
        justifyContent: "flexEnd",
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            marginRight: 100,
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            marginRight: 100,
            get height() {
              return r();
            }
          })];
        }
      }), e(u, {
        style: g,
        children: "Center - No Margin Support"
      }), e(l, {
        gap: i,
        justifyContent: "center",
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          })];
        }
      }), e(u, {
        style: g,
        children: "Space Between - No Margin Support"
      }), e(l, {
        gap: i,
        justifyContent: "spaceBetween",
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          })];
        }
      }), e(u, {
        style: g,
        children: "Space Evenly - No Margin Support"
      }), e(l, {
        gap: i,
        justifyContent: "spaceEvenly",
        style: n,
        onFocus: h,
        get children() {
          return [e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          }), e(t, {
            get height() {
              return r();
            }
          })];
        }
      })];
    }
  });
};
export { F as default };