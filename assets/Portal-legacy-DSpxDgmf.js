!function () {
  function t(t, r) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != r) {
        var n,
          i,
          o,
          l,
          c = [],
          u = !0,
          a = !1;
        try {
          if (o = (r = r.call(t)).next, 0 === e) {
            if (Object(r) !== r) return;
            u = !1;
          } else for (; !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
        } catch (t) {
          a = !0, i = t;
        } finally {
          try {
            if (!u && null != r["return"] && (l = r["return"](), Object(l) !== l)) return;
          } finally {
            if (a) throw i;
          }
        }
        return c;
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
  System.register(["./index-legacy-eVDxr7Bx.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, r) {
    "use strict";

    var n, i, o, l, c, u, a, s, d, f, h, g;
    return {
      setters: [function (t) {
        n = t.u, i = t.e, o = t.i, l = t.V, c = t.T, u = t.C, a = t.R, s = t.j, d = t.F, f = t.m, h = t.c;
      }, function (t) {
        g = t.a;
      }],
      execute: function execute() {
        e("default", function () {
          var e = n(),
            r = i(function () {
              return 0;
            });
          function p() {
            var t = this.children.selected;
            g(t && t.id), e("/" + t.id);
          }
          var x = [{
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
            y = [{
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
          function m(e) {
            var r = t(h(4294967295), 2),
              n = r[0],
              i = r[1];
            return o(l, f(e, {
              onFocus: function onFocus() {
                return i(255);
              },
              onBlur: function onBlur() {
                return i(4294967295);
              },
              style: {
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
              get children() {
                return o(l, {
                  x: 30,
                  get children() {
                    return [o(c, {
                      y: 30,
                      fontSize: 84,
                      get color() {
                        return n();
                      },
                      get children() {
                        return e.index;
                      }
                    }), o(c, {
                      y: 140,
                      fontSize: 42,
                      width: 340,
                      height: 42,
                      contain: "both",
                      get color() {
                        return n();
                      },
                      get children() {
                        return e.title;
                      }
                    }), o(c, {
                      y: 200,
                      fontSize: 28,
                      width: 330,
                      contain: "width",
                      get color() {
                        return n();
                      },
                      get children() {
                        return e.description;
                      }
                    })];
                  }
                });
              }
            }));
          }
          return o(l, {
            colorTop: 1147903743,
            colorBottom: 743406847,
            get children() {
              return [o(l, {
                x: 120,
                get children() {
                  return [o(l, {
                    src: "./assets/solidjs.png",
                    width: 101,
                    height: 90,
                    y: 40
                  }), o(c, {
                    fontSize: 90,
                    x: 110,
                    y: 40,
                    children: "Examples"
                  }), o(l, {
                    y: 140,
                    height: 1,
                    width: 1800,
                    color: 3906468351
                  })];
                }
              }), o(u, {
                scroll: "none",
                y: 200,
                x: 170,
                gap: 80,
                get children() {
                  return [o(a, {
                    onEnter: p,
                    get style() {
                      return s.Row;
                    },
                    justifyContent: "flexStart",
                    gap: 40,
                    get children() {
                      return o(d, {
                        each: y,
                        children: function children(t, e) {
                          return o(m, f({
                            get autofocus() {
                              return r(e());
                            },
                            get index() {
                              return e();
                            }
                          }, t));
                        }
                      });
                    }
                  }), o(a, {
                    onEnter: p,
                    get style() {
                      return s.Row;
                    },
                    justifyContent: "flexStart",
                    gap: 40,
                    get children() {
                      return o(d, {
                        each: x,
                        children: function children(t, e) {
                          return o(m, f({
                            get index() {
                              return e();
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
        });
      }
    };
  });
}();