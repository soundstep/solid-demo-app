System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, t) {
  "use strict";

  var r, s, n, i, l, d, a;
  return {
    setters: [function (e) {
      r = e.h, s = e.i, n = e.R, i = e.V, l = e.m, d = e.T, a = e.M;
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
            y: 400,
            x: 100
          },
          c = {
            width: 386,
            height: 136,
            color: "0x715cabff",
            focus: {
              color: "0x5a39a2ff"
            },
            disabled: {
              color: "0x291d43ff"
            }
          },
          o = ["RoundedRectangle", {
            radius: 65
          }];
        function u(e) {
          return s(i, l(e, {
            forwardStates: !0,
            style: c,
            shader: o,
            get children() {
              return s(d, {
                style: a,
                get children() {
                  return e.children;
                }
              });
            }
          }));
        }
        return s(n, {
          style: t,
          get children() {
            return [s(u, {
              autofocus: !0,
              onEnter: e,
              children: "Focused"
            }), s(u, {
              states: {
                active: !0,
                disabled: !1
              },
              children: "Normal"
            }), s(u, {
              states: "disabled",
              children: "Disabled"
            })];
          }
        });
      });
    }
  };
});