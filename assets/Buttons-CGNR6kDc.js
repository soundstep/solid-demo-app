import { h as a, i as e, R as o, T as i, V as h, m as d, p as c, q as f, r as g, w as y, v as w, x } from "./index-oincxhML.js";
import "./CoreExtension-BwzX6MG-.js";
var p = function p() {
  function u(t, r) {
    this.states.toggle("disabled");
  }
  var l = {
    display: "flex",
    justifyContent: "flexStart",
    width: 1500,
    height: 300,
    color: a("00000000"),
    gap: 26,
    y: 400
  };
  function n(t) {
    return e(h, d(t, {
      forwardStates: !0,
      get style() {
        return c.container;
      },
      get children() {
        return e(i, {
          get style() {
            return c.text;
          },
          get children() {
            return t.children;
          }
        });
      }
    }));
  }
  var s = function s(t) {
    return function () {
      var r = f("node");
      return g(y, r, function () {
        return [10, 15];
      }), w(r, d(t, {
        get style() {
          return {
            color: a("#000000be"),
            borderRadius: 8,
            border: {
              width: 2,
              color: a("#ffffff")
            }
          };
        }
      }), !0), x(r, e(i, {
        style: {
          fontSize: 20
        },
        get children() {
          return t.children;
        }
      })), r;
    }();
  };
  return [e(o, {
    x: 100,
    y: 200,
    gap: 5,
    style: l,
    get children() {
      return [e(s, {
        children: "HD"
      }), e(s, {
        children: "PG13"
      }), e(s, {
        children: "NC17"
      }), e(i, {
        fontSize: 30,
        children: "I like bananas"
      }), e(s, {
        children: "DOLBY"
      })];
    }
  }), e(o, {
    x: 100,
    gap: 40,
    style: l,
    get children() {
      return [e(n, {
        autofocus: !0,
        onEnter: u,
        children: "TV Shows"
      }), e(n, {
        states: {
          active: !0,
          disabled: !1
        },
        children: "Movies"
      }), e(n, {
        states: "active",
        children: "Sports"
      }), e(n, {
        states: "disabled",
        children: "News"
      })];
    }
  })];
};
export { p as default };