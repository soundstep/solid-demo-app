!function () {
  function e(e, r) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != r) {
        var n,
          i,
          l,
          o,
          c = [],
          a = !0,
          u = !1;
        try {
          if (l = (r = r.call(e)).next, 0 === t) {
            if (Object(r) !== r) return;
            a = !1;
          } else for (; !(a = (n = l.call(r)).done) && (c.push(n.value), c.length !== t); a = !0);
        } catch (e) {
          u = !0, i = e;
        } finally {
          try {
            if (!a && null != r["return"] && (o = r["return"](), Object(o) !== o)) return;
          } finally {
            if (u) throw i;
          }
        }
        return c;
      }
    }(e, r) || function (e, r) {
      if (!e) return;
      if ("string" == typeof e) return t(e, r);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t(e, r);
    }(e, r) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (t, r) {
    "use strict";

    var n, i, l, o, c, a, u, s;
    return {
      setters: [function (e) {
        n = e.c, i = e.i, l = e.V, o = e.T, c = e.R, a = e.F, u = e.S, s = e.C;
      }, null],
      execute: function execute() {
        var r = ["Mary", "had", "a", "little", "lamb", "her", "fleece", "was", "white", "as", "snow"],
          h = t("styles", {
            PageContainer: {
              width: 1920,
              height: 1080,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99
            }
          });
        t("default", function () {
          var t,
            f = e(n(!1), 2),
            d = f[0],
            g = f[1];
          return setTimeout(function () {
            g(!0), t.alpha = 0;
          }, 2e3), [i(l, {
            ref: function ref(e) {
              "function" == typeof t ? t(e) : t = e;
            },
            get style() {
              return h.PageContainer;
            },
            get children() {
              return [i(o, {
                children: "Center - gif doesnt animate"
              }), i(l, {
                autosize: !0,
                src: "./assets/spinner.gif"
              }), i(o, {
                children: "Spinner"
              })];
            }
          }), i(c, {
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
              return i(a, {
                each: r,
                children: function children(e, t) {
                  return i(l, {
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
          }), i(u, {
            get when() {
              return d();
            },
            get children() {
              return i(c, {
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
                  return i(a, {
                    each: r,
                    children: function children(e, t) {
                      return i(l, {
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
          }), i(u, {
            get when() {
              return d();
            },
            get children() {
              return i(c, {
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
                  return i(a, {
                    each: r,
                    children: function children(e, t) {
                      return i(o, {
                        fontSize: 24,
                        children: e
                      });
                    }
                  });
                }
              });
            }
          }), i(u, {
            get when() {
              return d();
            },
            get children() {
              return i(s, {
                scroll: "none",
                gap: 20,
                selected: 2,
                x: 350,
                y: 450,
                get children() {
                  return i(a, {
                    each: r,
                    children: function children(e, t) {
                      return i(o, {
                        fontSize: 24,
                        children: e
                      });
                    }
                  });
                }
              });
            }
          })];
        });
      }
    };
  });
}();