import { h as l, i as e, R as i, V as d, m as c, T as u, M as f } from "./index-oincxhML.js";
import "./CoreExtension-BwzX6MG-.js";
var m = function m() {
  function r(a, h) {
    this.states.toggle("disabled");
  }
  var o = {
      display: "flex",
      justifyContent: "flexStart",
      width: 1500,
      height: 300,
      color: l("00000000"),
      gap: 26,
      y: 400,
      x: 100
    },
    s = {
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
    n = ["RoundedRectangle", {
      radius: 65
    }];
  function t(a) {
    return e(d, c(a, {
      forwardStates: !0,
      style: s,
      shader: n,
      get children() {
        return e(u, {
          style: f,
          get children() {
            return a.children;
          }
        });
      }
    }));
  }
  return e(i, {
    style: o,
    get children() {
      return [e(t, {
        autofocus: !0,
        onEnter: r,
        children: "Focused"
      }), e(t, {
        states: {
          active: !0,
          disabled: !1
        },
        children: "Normal"
      }), e(t, {
        states: "disabled",
        children: "Disabled"
      })];
    }
  });
};
export { m as default };