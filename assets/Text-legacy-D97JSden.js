System.register(["./index-legacy-DZyoAwiK.js", "./CoreExtension-legacy-BFxy46Zv.js"], function (e, t) {
  "use strict";

  var i, s, l, u, r, n;
  return {
    setters: [function (e) {
      i = e.h, s = e.g, l = e.i, u = e.V, r = e.T, n = e.s;
    }, null],
    execute: function execute() {
      e("default", function () {
        var e = {
            width: 900,
            height: 500,
            y: 350,
            x: 150,
            gap: 25,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
            color: i("00000000")
          },
          t = {
            width: 900,
            height: 36,
            gap: 6,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexStart",
            color: i("00000000")
          },
          o = {
            fontSize: 42
          },
          c = {
            width: e.width,
            fontSize: 26,
            contain: "width"
          },
          a = {
            fontSize: 26
          };
        return s(function () {
          n("#000000");
        }), l(u, {
          autofocus: !0,
          style: e,
          get children() {
            return [l(r, {
              style: o,
              children: "Title of the Page"
            }), l(r, {
              style: c,
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tempor tellus. Sed eu leo purus. Vestibulum sollicitudin eget tellus a varius. Phasellus est turpis, volutpat sed blandit sit amet, rutrum sit amet mauris. In dignissim elit orci, a sollicitudin ipsum faucibus et. Quisque vel quam rutrum, faucibus augue sed, scelerisque nunc."
            }), l(u, {
              style: t,
              get children() {
                return [l(r, {
                  style: a,
                  children: "Subline Text"
                }), l(u, {
                  width: 28,
                  height: 28,
                  src: "./assets/rt-popcorn.png"
                }), l(r, {
                  style: a,
                  children: "More Text"
                })];
              }
            })];
          }
        });
      });
    }
  };
});