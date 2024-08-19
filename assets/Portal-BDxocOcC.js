function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { u as p, e as w, i as e, V as n, T as r, C as y, R as d, j as u, F as g, m as l, c as C } from "./index-oincxhML.js";
import { a as F } from "./CoreExtension-BwzX6MG-.js";
var T = function T() {
  var h = p(),
    x = w(function () {
      return 0;
    });
  function s() {
    var t = this.children.selected;
    F(t && t.id), h("/" + t.id);
  }
  var m = [{
      title: "Flex Row",
      id: "flex",
      description: "Flex Row Implementation"
    }, {
      title: "Flex Column",
      id: "flexcolumn",
      description: "Flex Column Implementation"
    }, {
      title: "Flex Row Vertical Align",
      id: "flexsize",
      description: "Flex Row Vertical Align Implementation"
    }, {
      title: "Flex Column Vertical Align",
      id: "flexcolumnsize",
      description: "Flex Column Vertical Align Implementation"
    }, {
      title: "Flex Layout Tests",
      id: "superflex",
      description: "Complicated flex layouts"
    }],
    f = [{
      title: "Grid",
      id: "grid",
      description: "Infinite Scroll Grid"
    }, {
      title: "Buttons",
      id: "buttons",
      description: "Demo a few buttons"
    }, {
      title: "Text",
      id: "text",
      description: "Text layout with flexbox"
    }, {
      title: "Create Elements",
      id: "create",
      description: "Testing Show + children + inserting text"
    }, {
      title: "Viewport",
      id: "viewport",
      description: "Events going in and out of viewport"
    }];
  function c(t) {
    var i = {
        width: 370,
        height: 320,
        borderRadius: 6,
        scale: 1,
        color: 405488895,
        transition: {
          color: !0,
          scale: !0
        },
        focus: {
          scale: 1.1,
          color: 4294967295
        }
      },
      _C = C(4294967295),
      _C2 = _slicedToArray(_C, 2),
      o = _C2[0],
      a = _C2[1];
    return e(n, l(t, {
      onFocus: function onFocus() {
        return a(255);
      },
      onBlur: function onBlur() {
        return a(4294967295);
      },
      style: i,
      get children() {
        return e(n, {
          x: 30,
          get children() {
            return [e(r, {
              y: 30,
              fontSize: 84,
              get color() {
                return o();
              },
              get children() {
                return t.index;
              }
            }), e(r, {
              y: 140,
              fontSize: 42,
              width: 340,
              height: 42,
              contain: "both",
              get color() {
                return o();
              },
              get children() {
                return t.title;
              }
            }), e(r, {
              y: 200,
              fontSize: 28,
              width: 330,
              contain: "width",
              get color() {
                return o();
              },
              get children() {
                return t.description;
              }
            })];
          }
        });
      }
    }));
  }
  return e(n, {
    colorTop: 1147903743,
    colorBottom: 743406847,
    get children() {
      return [e(n, {
        x: 120,
        get children() {
          return [e(n, {
            src: "./assets/solidjs.png",
            width: 101,
            height: 90,
            y: 40
          }), e(r, {
            fontSize: 90,
            x: 110,
            y: 40,
            children: "Examples"
          }), e(n, {
            y: 140,
            height: 1,
            width: 1800,
            color: 3906468351
          })];
        }
      }), e(y, {
        scroll: "none",
        y: 200,
        x: 170,
        gap: 80,
        get children() {
          return [e(d, {
            onEnter: s,
            get style() {
              return u.Row;
            },
            justifyContent: "flexStart",
            gap: 40,
            get children() {
              return e(g, {
                each: f,
                children: function children(t, i) {
                  return e(c, l({
                    get autofocus() {
                      return x(i());
                    },
                    get index() {
                      return i();
                    }
                  }, t));
                }
              });
            }
          }), e(d, {
            onEnter: s,
            get style() {
              return u.Row;
            },
            justifyContent: "flexStart",
            gap: 40,
            get children() {
              return e(g, {
                each: m,
                children: function children(t, i) {
                  return e(c, l({
                    get index() {
                      return i();
                    }
                  }, t));
                }
              });
            }
          })];
        }
      })];
    }
  });
};
export { T as default };