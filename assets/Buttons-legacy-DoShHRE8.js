System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, t) {
  "use strict";

  var r, n, i, l, s, d, c, a, o, h, u, f;
  return {
    setters: [function (e) {
      r = e.h, n = e.i, i = e.R, l = e.T, s = e.V, d = e.m, c = e.p, a = e.q, o = e.r, h = e.w, u = e.v, f = e.x;
    }, null],
    execute: function execute() {
      e("default", function () {
        function e(e, t) {
          this.states.toggle("disabled");
        }
        var t = {
          display: "flex",
          justifyContent: "flexStart",
          width: 1500,
          height: 300,
          color: r("00000000"),
          gap: 26,
          y: 400
        };
        function g(e) {
          return n(s, d(e, {
            forwardStates: !0,
            get style() {
              return c.container;
            },
            get children() {
              return n(l, {
                get style() {
                  return c.text;
                },
                get children() {
                  return e.children;
                }
              });
            }
          }));
        }
        var y = function y(e) {
          return t = a("node"), o(h, t, function () {
            return [10, 15];
          }), u(t, d(e, {
            get style() {
              return {
                color: r("#000000be"),
                borderRadius: 8,
                border: {
                  width: 2,
                  color: r("#ffffff")
                }
              };
            }
          }), !0), f(t, n(l, {
            style: {
              fontSize: 20
            },
            get children() {
              return e.children;
            }
          })), t;
          var t;
        };
        return [n(i, {
          x: 100,
          y: 200,
          gap: 5,
          style: t,
          get children() {
            return [n(y, {
              children: "HD"
            }), n(y, {
              children: "PG13"
            }), n(y, {
              children: "NC17"
            }), n(l, {
              fontSize: 30,
              children: "I like bananas"
            }), n(y, {
              children: "DOLBY"
            })];
          }
        }), n(i, {
          x: 100,
          gap: 40,
          style: t,
          get children() {
            return [n(g, {
              autofocus: !0,
              onEnter: e,
              children: "TV Shows"
            }), n(g, {
              states: {
                active: !0,
                disabled: !1
              },
              children: "Movies"
            }), n(g, {
              states: "active",
              children: "Sports"
            }), n(g, {
              states: "disabled",
              children: "News"
            })];
          }
        })];
      });
    }
  };
});