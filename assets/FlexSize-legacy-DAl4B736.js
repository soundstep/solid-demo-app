!function () {
  function t(t, r) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != r) {
        var n,
          i,
          g,
          h,
          u = [],
          l = !0,
          o = !1;
        try {
          if (g = (r = r.call(t)).next, 0 === e) {
            if (Object(r) !== r) return;
            l = !1;
          } else for (; !(l = (n = g.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            if (!l && null != r["return"] && (h = r["return"](), Object(h) !== h)) return;
          } finally {
            if (o) throw i;
          }
        }
        return u;
      }
    }(t, r) || function (t, r) {
      if (!t) return;
      if ("string" == typeof t) return e(t, r);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e(t, r);
    }(t, r) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, r) {
    "use strict";

    var n, i, g, h, u, l, o, a, c, s, f;
    return {
      setters: [function (t) {
        n = t.h, i = t.c, g = t.g, h = t.i, u = t.C, l = t.j, o = t.T, a = t.R, c = t.V, s = t.m, f = t.s;
      }, null],
      execute: function execute() {
        e("default", function () {
          var e = {
              display: "flex",
              justifyContent: "flexStart",
              width: 1600,
              height: 110,
              color: n("#4dabf5")
            },
            r = {
              fontSize: 44,
              marginTop: 25,
              marginBottom: -20,
              skipFocus: !0
            };
          function y(t) {
            return h(c, s(t, {
              style: {
                width: 200,
                height: 100,
                y: 5,
                color: 392801023
              }
            }));
          }
          function d() {
            return Math.floor(91 * Math.random()) + 10;
          }
          var p = t(i(50), 2),
            m = p[0],
            x = p[1];
          function S() {
            var t;
            null === (t = this.children.selected) || void 0 === t || t.setFocus(), x(150 + -1 * (this.y || 0));
          }
          g(function () {
            f("#333333");
          });
          var v = 50;
          return h(u, {
            x: 160,
            get y() {
              return m();
            },
            gap: 30,
            height: 850,
            get width() {
              return e.width;
            },
            get style() {
              return l.Column;
            },
            get children() {
              return [h(o, {
                style: r,
                children: "Flex Start - AlignItems: center"
              }), h(a, {
                alignItems: "center",
                gap: v,
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    autofocus: !0,
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  })];
                }
              }), h(o, {
                style: r,
                children: "Flex Start - Margin Left - AlignItems: flexStart"
              }), h(a, {
                gap: v,
                alignItems: "flexStart",
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    marginLeft: 100,
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    marginLeft: 100,
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  })];
                }
              }), h(o, {
                style: r,
                children: "Flex End - AlignItems: flexEnd"
              }), h(a, {
                gap: v,
                justifyContent: "flexEnd",
                alignItems: "flexEnd",
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  })];
                }
              }), h(o, {
                style: r,
                children: "Flex End - Margin Right"
              }), h(a, {
                gap: v,
                justifyContent: "flexEnd",
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    marginRight: 100,
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    marginRight: 100,
                    get height() {
                      return d();
                    }
                  })];
                }
              }), h(o, {
                style: r,
                children: "Center - No Margin Support"
              }), h(a, {
                gap: v,
                justifyContent: "center",
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  })];
                }
              }), h(o, {
                style: r,
                children: "Space Between - No Margin Support"
              }), h(a, {
                gap: v,
                justifyContent: "spaceBetween",
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  })];
                }
              }), h(o, {
                style: r,
                children: "Space Evenly - No Margin Support"
              }), h(a, {
                gap: v,
                justifyContent: "spaceEvenly",
                style: e,
                onFocus: S,
                get children() {
                  return [h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  }), h(y, {
                    get height() {
                      return d();
                    }
                  })];
                }
              })];
            }
          });
        });
      }
    };
  });
}();