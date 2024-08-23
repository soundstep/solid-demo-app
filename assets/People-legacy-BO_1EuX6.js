function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function () {
  function e(e, r) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != r) {
        var n,
          i,
          o,
          u,
          c = [],
          l = !0,
          a = !1;
        try {
          if (o = (r = r.call(e)).next, 0 === t) {
            if (Object(r) !== r) return;
            l = !1;
          } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
        } catch (e) {
          a = !0, i = e;
        } finally {
          try {
            if (!l && null != r["return"] && (u = r["return"](), Object(u) !== u)) return;
          } finally {
            if (a) throw i;
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
  function r(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? r(Object(n), !0).forEach(function (t) {
        i(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function i(e, t, r) {
    var n;
    return (t = "symbol" == _typeof(n = function (e, t) {
      if ("object" != _typeof(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" != _typeof(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  System.register(["./index-legacy-wrywicEH.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (t, r) {
    "use strict";

    var i, o, u, c, l, a, s, f, y, g, p, h, b, d, m, v, j, O;
    return {
      setters: [function (e) {
        i = e.y, o = e.z, u = e.A, c = e.B, l = e.u, a = e.a, s = e.h, f = e.g, y = e.i, g = e.S, p = e.V, h = e.j, b = e.T, d = e.t, m = e.C, v = e.G, j = e.s;
      }, function (e) {
        O = e.a;
      }],
      execute: function execute() {
        function r(_ref) {
          var e = _ref.id;
          return i.get("/person/".concat(e, "/combined_credits")).then(function (_ref2) {
            var e = _ref2.cast;
            return o(e.slice(0, 7));
          });
        }
        function w(_ref3) {
          var e = _ref3.id;
          return i.get("/person/".concat(e)).then(function (e) {
            return n({
              backgroundImage: u(e.profile_path, "original"),
              heroContent: {
                title: e.title || e.name,
                description: e.biography
              }
            }, e);
          });
        }
        t("default", function () {
          var t = c(),
            i = l(),
            o = e(a(function () {
              return n({}, t);
            }, w), 1)[0],
            u = e(a(function () {
              return n({}, t);
            }, r), 1)[0],
            P = {
              color: s("#000000"),
              alpha: .8,
              width: 800,
              height: 440,
              x: 130,
              y: 180,
              borderRadius: 30
            };
          function S() {
            var e = this.children.selected;
            O(e && e.href), i(e.href);
          }
          return f(function () {
            j("#333333");
          }), y(g, {
            get when() {
              return o();
            },
            keyed: !0,
            get children() {
              return [y(p, {
                get src() {
                  return o().backgroundImage;
                },
                width: 400,
                autosize: !0,
                y: 0,
                x: 1800,
                mountX: 1
              }), y(p, {
                x: 150,
                y: 200,
                width: 800,
                gap: 24,
                get style() {
                  return h.Column;
                },
                zIndex: 3,
                get children() {
                  return [y(b, {
                    contain: "width",
                    fontFamily: "Ubuntu",
                    get style() {
                      return d.typography.display2;
                    },
                    get children() {
                      return o().name;
                    }
                  }), y(b, {
                    contain: "both",
                    get style() {
                      return h.peopleBio;
                    },
                    get children() {
                      return o().biography;
                    }
                  })];
                }
              }), y(p, {
                style: P
              }), y(m, {
                y: 670,
                x: 140,
                get style() {
                  return h.Column;
                },
                scroll: "none",
                get children() {
                  return y(g, {
                    get when() {
                      return u();
                    },
                    get children() {
                      return [y(b, {
                        skipFocus: !0,
                        get style() {
                          return h.RowTitle;
                        },
                        children: "Credits"
                      }), y(v, {
                        autofocus: !0,
                        onEnter: S,
                        get items() {
                          return u();
                        }
                      })];
                    }
                  });
                }
              })];
            }
          });
        });
      }
    };
  });
}();