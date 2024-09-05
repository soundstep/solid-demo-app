function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function () {
  var e = ["defaultTone"],
    t = ["defaultTone"],
    r = ["defaultTone"],
    n = ["surfaceDefaultTone"],
    o = ["defaultTone"],
    i = ["defaultTone"],
    a = ["defaultTone"],
    s = ["defaultTone"],
    l = ["defaultTone"],
    u = ["defaultTone"],
    c = ["defaultTone"],
    d = ["defaultTone"],
    h = ["defaultTone"],
    f = ["defaultTone"],
    p = ["defaultTone"],
    v = ["defaultTone"],
    g = ["defaultTone"],
    m = ["defaultSurfaceTone"];
  function x(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }
  function y() {
    "use strict";

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    y = function y() {
      return t;
    };
    var e,
      t = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (e, t, r) {
        e[t] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      s = i.asyncIterator || "@@asyncIterator",
      l = i.toStringTag || "@@toStringTag";
    function u(e, t, r) {
      return Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), e[t];
    }
    try {
      u({}, "");
    } catch (e) {
      u = function u(e, t, r) {
        return e[t] = r;
      };
    }
    function c(e, t, r, n) {
      var i = t && t.prototype instanceof m ? t : m,
        a = Object.create(i.prototype),
        s = new N(n || []);
      return o(a, "_invoke", {
        value: I(e, r, s)
      }), a;
    }
    function d(e, t, r) {
      try {
        return {
          type: "normal",
          arg: e.call(t, r)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }
    t.wrap = c;
    var h = "suspendedStart",
      f = "suspendedYield",
      p = "executing",
      v = "completed",
      g = {};
    function m() {}
    function x() {}
    function b() {}
    var w = {};
    u(w, a, function () {
      return this;
    });
    var S = Object.getPrototypeOf,
      A = S && S(S(B([])));
    A && A !== r && n.call(A, a) && (w = A);
    var T = b.prototype = m.prototype = Object.create(w);
    function C(e) {
      ["next", "throw", "return"].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function R(e, t) {
      function r(o, i, a, s) {
        var l = d(e[o], e, i);
        if ("throw" !== l.type) {
          var u = l.arg,
            c = u.value;
          return c && "object" == _typeof(c) && n.call(c, "__await") ? t.resolve(c.__await).then(function (e) {
            r("next", e, a, s);
          }, function (e) {
            r("throw", e, a, s);
          }) : t.resolve(c).then(function (e) {
            u.value = e, a(u);
          }, function (e) {
            return r("throw", e, a, s);
          });
        }
        s(l.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function value(e, n) {
          function o() {
            return new t(function (t, o) {
              r(e, n, t, o);
            });
          }
          return i = i ? i.then(o, o) : o();
        }
      });
    }
    function I(t, r, n) {
      var o = h;
      return function (i, a) {
        if (o === p) throw Error("Generator is already running");
        if (o === v) {
          if ("throw" === i) throw a;
          return {
            value: e,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var s = n.delegate;
          if (s) {
            var l = _(s, n);
            if (l) {
              if (l === g) continue;
              return l;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = v, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = p;
          var u = d(t, r, n);
          if ("normal" === u.type) {
            if (o = n.done ? v : f, u.arg === g) continue;
            return {
              value: u.arg,
              done: n.done
            };
          }
          "throw" === u.type && (o = v, n.method = "throw", n.arg = u.arg);
        }
      };
    }
    function _(t, r) {
      var n = r.method,
        o = t.iterator[n];
      if (o === e) return r.delegate = null, "throw" === n && t.iterator["return"] && (r.method = "return", r.arg = e, _(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
      var i = d(o, t.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, g;
      var a = i.arg;
      return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
    }
    function E(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }
    function k(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t;
    }
    function N(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(E, this), this.reset(!0);
    }
    function B(t) {
      if (t || "" === t) {
        var r = t[a];
        if (r) return r.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < t.length;) if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
              return r.value = e, r.done = !0, r;
            };
          return i.next = i;
        }
      }
      throw new TypeError(_typeof(t) + " is not iterable");
    }
    return x.prototype = b, o(T, "constructor", {
      value: b,
      configurable: !0
    }), o(b, "constructor", {
      value: x,
      configurable: !0
    }), x.displayName = u(b, l, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name));
    }, t.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, l, "GeneratorFunction")), e.prototype = Object.create(T), e;
    }, t.awrap = function (e) {
      return {
        __await: e
      };
    }, C(R.prototype), u(R.prototype, s, function () {
      return this;
    }), t.AsyncIterator = R, t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new R(c(e, r, n, o), i);
      return t.isGeneratorFunction(r) ? a : a.next().then(function (e) {
        return e.done ? e.value : a.next();
      });
    }, C(T), u(T, l, "Generator"), u(T, a, function () {
      return this;
    }), u(T, "toString", function () {
      return "[object Generator]";
    }), t.keys = function (e) {
      var t = Object(e),
        r = [];
      for (var n in t) r.push(n);
      return r.reverse(), function e() {
        for (; r.length;) {
          var n = r.pop();
          if (n in t) return e.value = n, e.done = !1, e;
        }
        return e.done = !0, e;
      };
    }, t.values = B, N.prototype = {
      constructor: N,
      reset: function reset(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
      },
      stop: function stop() {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(t) {
        if (this.done) throw t;
        var r = this;
        function o(n, o) {
          return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i],
            s = a.completion;
          if ("root" === a.tryLoc) return o("end");
          if (a.tryLoc <= this.prev) {
            var l = n.call(a, "catchLoc"),
              u = n.call(a, "finallyLoc");
            if (l && u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (l) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(e, t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a);
      },
      complete: function complete(e, t) {
        if ("throw" === e.type) throw e.arg;
        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
      },
      finish: function finish(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), g;
        }
      },
      "catch": function _catch(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.tryLoc === e) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              k(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(t, r, n) {
        return this.delegate = {
          iterator: B(t),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = e), g;
      }
    }, t;
  }
  function b(e, t, r, n, o, i, a) {
    try {
      var s = e[i](a),
        l = s.value;
    } catch (u) {
      return void r(u);
    }
    s.done ? t(l) : Promise.resolve(l).then(n, o);
  }
  function w(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = e.apply(t, r);
        function a(e) {
          b(i, n, o, a, s, "next", e);
        }
        function s(e) {
          b(i, n, o, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        T(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function T(e, t, r) {
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
  function C(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != r) {
        var n,
          o,
          i,
          a,
          s = [],
          l = !0,
          u = !1;
        try {
          if (i = (r = r.call(e)).next, 0 === t) {
            if (Object(r) !== r) return;
            l = !1;
          } else for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
        } catch (e) {
          u = !0, o = e;
        } finally {
          try {
            if (!l && null != r["return"] && (a = r["return"](), Object(a) !== a)) return;
          } finally {
            if (u) throw o;
          }
        }
        return s;
      }
    }(e, t) || I(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function R(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = I(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var _n2 = 0,
          o = function o() {};
        return {
          s: o,
          n: function n() {
            return _n2 >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[_n2++]
            };
          },
          e: function e(_e2) {
            throw _e2;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var i,
      a = !0,
      s = !1;
    return {
      s: function s() {
        r = r.call(e);
      },
      n: function n() {
        var e = r.next();
        return a = e.done, e;
      },
      e: function e(_e3) {
        s = !0, i = _e3;
      },
      f: function f() {
        try {
          a || null == r["return"] || r["return"]();
        } finally {
          if (s) throw i;
        }
      }
    };
  }
  function I(e, t) {
    if (e) {
      if ("string" == typeof e) return _(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(e, t) : void 0;
    }
  }
  function _(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  System.register(["./CoreExtension-legacy-BFxy46Zv.js"], function (b, S) {
    "use strict";

    var I, _, E, k, N, B, O, F, L, P, M, z, D, j, U, W, Y, H, Q, $, K, X, G, V, q, Z, J, ee, te, re, ne, oe, ie, ae;
    return {
      setters: [function (e) {
        I = e.a, _ = e.i, E = e.T, k = e.g, N = e.c, B = e.E, O = e.b, F = e.d, L = e.e, P = e.f, M = e.m, z = e.W, D = e.C, j = e.h, U = e.j, W = e.k, Y = e.S, H = e.l, Q = e.B, $ = e.n, K = e.o, X = e.p, G = e.q, V = e.r, q = e.s, Z = e.t, J = e.u, ee = e.v, te = e.w, re = e.R, ne = e.x, oe = e.y, ie = e.z, ae = e.A;
      }],
      execute: function execute() {
        var se,
          le,
          ue,
          ce = y().mark(xr),
          de = document.createElement("style");
        de.textContent = "html,body,*{padding:0;margin:0}video{position:absolute;top:0;left:0;z-index:2;outline:none}.center-element{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n", document.head.appendChild(de), b({
          A: QW,
          F: bt,
          G: DW,
          H: function H() {
            var e = document.getElementById("video");
            return e.hidden = !0, e.pause(), e;
          },
          I: function I(e) {
            var t = "fallback" in e && {
              fallback: function fallback() {
                return e.fallback;
              }
            };
            return Pe(function (e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var n,
                o = [],
                i = [],
                a = [],
                s = [],
                l = 0;
              return We(function () {
                return dt(a);
              }), function () {
                var u = e() || [];
                return u[xe], je(function () {
                  if (0 === u.length) return 0 !== l && (dt(a), a = [], o = [], i = [], l = 0, s = []), r.fallback && (o = [ct], i[0] = Ne(function (e) {
                    return a[0] = e, r.fallback();
                  }), l = 1), i;
                  for (o[0] === ct && (a[0](), a = [], o = [], i = [], l = 0), n = 0; n < u.length; n++) n < o.length && o[n] !== u[n] ? s[n](function () {
                    return u[n];
                  }) : n >= o.length && (i[n] = Ne(c));
                  for (; n < o.length; n++) a[n]();
                  return l = s.length = a.length = u.length, o = u.slice(0), i = i.slice(0, l);
                });
                function c(e) {
                  a[n] = e;
                  var r = C(Be(u[n]), 2),
                    o = r[0],
                    i = r[1];
                  return s[n] = i, t(o, n);
                }
              };
            }(function () {
              return e.each;
            }, e.children, t || void 0));
          },
          J: function J() {
            var e = document.getElementById("video");
            return e.hidden = !1, setTimeout(function () {
              return e.play();
            }, 50), e.focus(), e;
          },
          S: wt,
          a: Me,
          b: Oe,
          c: Be,
          d: De,
          e: ze,
          f: Le,
          g: function g(e) {
            Le(function () {
              return je(e);
            });
          },
          h: Qn,
          l: Xe,
          n: We,
          o: Ue,
          w: cD,
          z: GW
        });
        var he = function he(e, t, r) {
            var n = Promise.resolve();
            return n.then(function () {
              return e();
            })["catch"](function (e) {
              var t = new Event("vite:preloadError", {
                cancelable: !0
              });
              if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
            });
          },
          fe = {
            context: void 0,
            registry: void 0
          };
        function pe(e) {
          fe.context = e;
        }
        var ve,
          ge = function ge(e, t) {
            return e === t;
          },
          me = Symbol("solid-proxy"),
          xe = Symbol("solid-track"),
          ye = {
            equals: ge
          },
          be = tt,
          we = 1,
          Se = 2,
          Ae = {
            owned: null,
            cleanups: null,
            context: null,
            owner: null
          },
          Te = {},
          Ce = null,
          Re = null,
          Ie = null,
          _e = null,
          Ee = null,
          ke = 0;
        function Ne(e, t) {
          var r = Ie,
            n = Ce,
            o = 0 === e.length,
            i = void 0 === t ? n : t,
            a = o ? Ae : {
              owned: null,
              cleanups: null,
              context: i ? i.context : null,
              owner: i
            },
            s = o ? e : function () {
              return e(function () {
                return je(function () {
                  return it(a);
                });
              });
            };
          Ce = a, Ie = null;
          try {
            return et(s, !0);
          } finally {
            Ie = r, Ce = n;
          }
        }
        function Be(e, t) {
          var r = {
            value: e,
            observers: null,
            observerSlots: null,
            comparator: (t = t ? Object.assign({}, ye, t) : ye).equals || void 0
          };
          return [Ge.bind(r), function (e) {
            return "function" == typeof e && (e = e(r.value)), Ve(r, e);
          }];
        }
        function Oe(e, t, r) {
          qe(Ze(e, t, !0, we));
        }
        function Fe(e, t, r) {
          qe(Ze(e, t, !1, we));
        }
        function Le(e, t, r) {
          be = rt;
          var n = Ze(e, t, !1, we);
          r && r.render || (n.user = !0), Ee ? Ee.push(n) : qe(n);
        }
        function Pe(e, t, r) {
          r = r ? Object.assign({}, ye, r) : ye;
          var n = Ze(e, t, !0, 0);
          return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, qe(n), Ge.bind(n);
        }
        function Me(e, t, r) {
          var n, o, i;
          2 === arguments.length && "object" == _typeof(t) || 1 === arguments.length ? (n = !0, o = e, i = t || {}) : (n = e, o = t, i = r || {});
          var a,
            s = null,
            l = Te,
            u = null,
            c = !1,
            d = "initialValue" in i,
            h = "function" == typeof n && Pe(n),
            f = new Set(),
            p = C((i.storage || Be)(i.initialValue), 2),
            v = p[0],
            g = p[1],
            m = C(Be(void 0), 2),
            x = m[0],
            y = m[1],
            b = C(Be(void 0, {
              equals: !1
            }), 2),
            w = b[0],
            S = b[1],
            A = C(Be(d ? "ready" : "unresolved"), 2),
            T = A[0],
            I = A[1];
          fe.context && (u = "".concat(fe.context.id).concat(fe.context.count++), "initial" === i.ssrLoadFrom ? l = i.initialValue : fe.load && (a = fe.load(u)) && (l = a));
          function _(e, t, r, n) {
            return s === e && (s = null, void 0 !== n && (d = !0), e !== l && t !== l || !i.onHydrated || queueMicrotask(function () {
              return i.onHydrated(n, {
                value: t
              });
            }), l = Te, function (e, t) {
              et(function () {
                void 0 === t && g(function () {
                  return e;
                }), I(void 0 !== t ? "errored" : d ? "ready" : "unresolved"), y(t);
                var r,
                  n = R(f.keys());
                try {
                  for (n.s(); !(r = n.n()).done;) {
                    r.value.decrement();
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                f.clear();
              }, !1);
            }(t, r)), t;
          }
          function E() {
            var e = ve,
              t = v(),
              r = x();
            if (void 0 !== r && !s) throw r;
            return Ie && !Ie.user && e && Oe(function () {
              w(), s && (e.resolved || f.has(e) || (e.increment(), f.add(e)));
            }), t;
          }
          function k() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            if (!1 === e || !c) {
              c = !1;
              var t = h ? h() : n;
              if (null != t && !1 !== t) {
                var r = l !== Te ? l : je(function () {
                  return o(t, {
                    value: v(),
                    refetching: e
                  });
                });
                return function (e) {
                  return e && "object" == _typeof(e) && "then" in e;
                }(r) ? (s = r, "value" in r ? ("success" === r.status ? _(s, r.value, void 0, t) : _(s, void 0, void 0, t), r) : (c = !0, queueMicrotask(function () {
                  return c = !1;
                }), et(function () {
                  I(d ? "refreshing" : "pending"), S();
                }, !1), r.then(function (e) {
                  return _(r, e, void 0, t);
                }, function (e) {
                  return _(r, void 0, at(e), t);
                }))) : (_(s, r, void 0, t), r);
              }
              _(s, je(v));
            }
          }
          return Object.defineProperties(E, {
            state: {
              get: function get() {
                return T();
              }
            },
            error: {
              get: function get() {
                return x();
              }
            },
            loading: {
              get: function get() {
                var e = T();
                return "pending" === e || "refreshing" === e;
              }
            },
            latest: {
              get: function get() {
                if (!d) return E();
                var e = x();
                if (e && !s) throw e;
                return v();
              }
            }
          }), h ? Oe(function () {
            return k(!1);
          }) : k(!1), [E, {
            refetch: k,
            mutate: g
          }];
        }
        function ze(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ge;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var n = new Map(),
            o = Ze(function (r) {
              var o,
                i = e(),
                a = R(n.entries());
              try {
                for (a.s(); !(o = a.n()).done;) {
                  var s = C(o.value, 2),
                    l = s[0],
                    u = s[1];
                  if (t(l, i) !== t(l, r)) {
                    var c,
                      d = R(u.values());
                    try {
                      for (d.s(); !(c = d.n()).done;) {
                        var h = c.value;
                        h.state = we, h.pure ? _e.push(h) : Ee.push(h);
                      }
                    } catch (f) {
                      d.e(f);
                    } finally {
                      d.f();
                    }
                  }
                }
              } catch (f) {
                a.e(f);
              } finally {
                a.f();
              }
              return i;
            }, void 0, !0, we);
          return qe(o), function (e) {
            var r,
              i = Ie;
            i && ((r = n.get(e)) ? r.add(i) : n.set(e, r = new Set([i])), We(function () {
              r["delete"](i), !r.size && n["delete"](e);
            }));
            return t(e, o.value);
          };
        }
        function De(e) {
          return et(e, !1);
        }
        function je(e) {
          if (null === Ie) return e();
          var t = Ie;
          Ie = null;
          try {
            return e();
          } finally {
            Ie = t;
          }
        }
        function Ue(e, t, r) {
          var n,
            o = Array.isArray(e),
            i = r && r.defer;
          return function (r) {
            var a;
            if (o) {
              a = Array(e.length);
              for (var s = 0; s < e.length; s++) a[s] = e[s]();
            } else a = e();
            if (i) return i = !1, r;
            var l = je(function () {
              return t(a, n, r);
            });
            return n = a, l;
          };
        }
        function We(e) {
          return null === Ce || (null === Ce.cleanups ? Ce.cleanups = [e] : Ce.cleanups.push(e)), e;
        }
        function Ye() {
          return Ce;
        }
        function He(e, t) {
          var r = Ce,
            n = Ie;
          Ce = e, Ie = null;
          try {
            return et(t, !0);
          } catch (o) {
            st(o);
          } finally {
            Ce = r, Ie = n;
          }
        }
        function Qe(e) {
          var t = Ie,
            r = Ce;
          return Promise.resolve().then(function () {
            Ie = t, Ce = r, et(e, !1), Ie = Ce = null;
          });
        }
        function $e(e, t) {
          var r = Symbol("context");
          return {
            id: r,
            Provider: ut(r),
            defaultValue: e
          };
        }
        function Ke(e) {
          return Ce && Ce.context && void 0 !== Ce.context[e.id] ? Ce.context[e.id] : e.defaultValue;
        }
        function Xe(e) {
          var t = Pe(e),
            r = Pe(function () {
              return lt(t());
            });
          return r.toArray = function () {
            var e = r();
            return Array.isArray(e) ? e : null != e ? [e] : [];
          }, r;
        }
        function Ge() {
          var _this = this;
          if (this.sources && this.state) if (this.state === we) qe(this);else {
            var e = _e;
            _e = null, et(function () {
              return nt(_this);
            }, !1), _e = e;
          }
          if (Ie) {
            var t = this.observers ? this.observers.length : 0;
            Ie.sources ? (Ie.sources.push(this), Ie.sourceSlots.push(t)) : (Ie.sources = [this], Ie.sourceSlots = [t]), this.observers ? (this.observers.push(Ie), this.observerSlots.push(Ie.sources.length - 1)) : (this.observers = [Ie], this.observerSlots = [Ie.sources.length - 1]);
          }
          return this.value;
        }
        function Ve(e, t, r) {
          var n = e.value;
          return e.comparator && e.comparator(n, t) || (e.value = t, e.observers && e.observers.length && et(function () {
            for (var t = 0; t < e.observers.length; t += 1) {
              var r = e.observers[t],
                n = Re && Re.running;
              n && Re.disposed.has(r), (n ? r.tState : r.state) || (r.pure ? _e.push(r) : Ee.push(r), r.observers && ot(r)), n || (r.state = we);
            }
            if (_e.length > 1e6) throw _e = [], new Error();
          }, !1)), t;
        }
        function qe(e) {
          if (e.fn) {
            it(e);
            var t = ke;
            !function (e, t, r) {
              var n,
                o = Ce,
                i = Ie;
              Ie = Ce = e;
              try {
                n = e.fn(t);
              } catch (a) {
                return e.pure && (e.state = we, e.owned && e.owned.forEach(it), e.owned = null), e.updatedAt = r + 1, st(a);
              } finally {
                Ie = i, Ce = o;
              }
              (!e.updatedAt || e.updatedAt <= r) && (null != e.updatedAt && "observers" in e ? Ve(e, n) : e.value = n, e.updatedAt = r);
            }(e, e.value, t);
          }
        }
        function Ze(e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : we;
          var o = arguments.length > 4 ? arguments[4] : undefined;
          var i = {
            fn: e,
            state: n,
            updatedAt: null,
            owned: null,
            sources: null,
            sourceSlots: null,
            cleanups: null,
            value: t,
            owner: Ce,
            context: Ce ? Ce.context : null,
            pure: r
          };
          return null === Ce || Ce !== Ae && (Ce.owned ? Ce.owned.push(i) : Ce.owned = [i]), i;
        }
        function Je(e) {
          if (0 !== e.state) {
            if (e.state === Se) return nt(e);
            if (e.suspense && je(e.suspense.inFallback)) return e.suspense.effects.push(e);
            for (var t = [e]; (e = e.owner) && (!e.updatedAt || e.updatedAt < ke);) e.state && t.push(e);
            for (var r = t.length - 1; r >= 0; r--) if ((e = t[r]).state === we) qe(e);else if (e.state === Se) {
              var n = _e;
              _e = null, et(function () {
                return nt(e, t[0]);
              }, !1), _e = n;
            }
          }
        }
        function et(e, t) {
          if (_e) return e();
          var r = !1;
          t || (_e = []), Ee ? r = !0 : Ee = [], ke++;
          try {
            var n = e();
            return function (e) {
              _e && (tt(_e), _e = null);
              if (e) return;
              var t = Ee;
              Ee = null, t.length && et(function () {
                return be(t);
              }, !1);
            }(r), n;
          } catch (o) {
            r || (Ee = null), _e = null, st(o);
          }
        }
        function tt(e) {
          for (var t = 0; t < e.length; t++) Je(e[t]);
        }
        function rt(e) {
          var t,
            r = 0;
          for (t = 0; t < e.length; t++) {
            var n = e[t];
            n.user ? e[r++] = n : Je(n);
          }
          if (fe.context) {
            var _fe$effects;
            if (fe.count) return fe.effects || (fe.effects = []), void (_fe$effects = fe.effects).push.apply(_fe$effects, _toConsumableArray(e.slice(0, r)));
            fe.effects && (e = [].concat(_toConsumableArray(fe.effects), _toConsumableArray(e)), r += fe.effects.length, delete fe.effects), pe();
          }
          for (t = 0; t < r; t++) Je(e[t]);
        }
        function nt(e, t) {
          e.state = 0;
          for (var r = 0; r < e.sources.length; r += 1) {
            var n = e.sources[r];
            if (n.sources) {
              var o = n.state;
              o === we ? n !== t && (!n.updatedAt || n.updatedAt < ke) && Je(n) : o === Se && nt(n, t);
            }
          }
        }
        function ot(e) {
          for (var t = 0; t < e.observers.length; t += 1) {
            var r = e.observers[t];
            r.state || (r.state = Se, r.pure ? _e.push(r) : Ee.push(r), r.observers && ot(r));
          }
        }
        function it(e) {
          var t;
          if (e.sources) for (; e.sources.length;) {
            var r = e.sources.pop(),
              n = e.sourceSlots.pop(),
              o = r.observers;
            if (o && o.length) {
              var i = o.pop(),
                a = r.observerSlots.pop();
              n < o.length && (i.sourceSlots[a] = n, o[n] = i, r.observerSlots[n] = a);
            }
          }
          if (e.owned) {
            for (t = e.owned.length - 1; t >= 0; t--) it(e.owned[t]);
            e.owned = null;
          }
          if (e.cleanups) {
            for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
            e.cleanups = null;
          }
          e.state = 0;
        }
        function at(e) {
          return e instanceof Error ? e : new Error("string" == typeof e ? e : "Unknown error", {
            cause: e
          });
        }
        function st(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ce;
          throw at(e);
        }
        function lt(e) {
          if ("function" == typeof e && !e.length) return lt(e());
          if (Array.isArray(e)) {
            for (var t = [], r = 0; r < e.length; r++) {
              var n = lt(e[r]);
              Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
            }
            return t;
          }
          return e;
        }
        function ut(e, t) {
          return function (t) {
            var r;
            return Fe(function () {
              return r = je(function () {
                return Ce.context = A(A({}, Ce.context), {}, _defineProperty({}, e, t.value)), Xe(function () {
                  return t.children;
                });
              });
            }, void 0), r;
          };
        }
        var ct = Symbol("fallback");
        function dt(e) {
          for (var t = 0; t < e.length; t++) e[t]();
        }
        function ht(e, t) {
          return je(function () {
            return e(t || {});
          });
        }
        function ft() {
          return !0;
        }
        var pt = {
          get: function get(e, t, r) {
            return t === me ? r : e.get(t);
          },
          has: function has(e, t) {
            return t === me || e.has(t);
          },
          set: ft,
          deleteProperty: ft,
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return {
              configurable: !0,
              enumerable: !0,
              get: function get() {
                return e.get(t);
              },
              set: ft,
              deleteProperty: ft
            };
          },
          ownKeys: function ownKeys(e) {
            return e.keys();
          }
        };
        function vt(e) {
          return (e = "function" == typeof e ? e() : e) ? e : {};
        }
        function gt() {
          for (var e = 0, t = this.length; e < t; ++e) {
            var r = this[e]();
            if (void 0 !== r) return r;
          }
        }
        function mt() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }
          for (var t = !1, r = 0; r < e.length; r++) {
            var n = e[r];
            t = t || !!n && me in n, e[r] = "function" == typeof n ? (t = !0, Pe(n)) : n;
          }
          if (t) return new Proxy({
            get: function get(t) {
              for (var r = e.length - 1; r >= 0; r--) {
                var n = vt(e[r])[t];
                if (void 0 !== n) return n;
              }
            },
            has: function has(t) {
              for (var r = e.length - 1; r >= 0; r--) if (t in vt(e[r])) return !0;
              return !1;
            },
            keys: function keys() {
              for (var t = [], r = 0; r < e.length; r++) t.push.apply(t, _toConsumableArray(Object.keys(vt(e[r]))));
              return _toConsumableArray(new Set(t));
            }
          }, pt);
          for (var o = {}, i = Object.create(null), a = e.length - 1; a >= 0; a--) {
            var s = e[a];
            if (s) for (var l = Object.getOwnPropertyNames(s), u = function u() {
                var e = l[c];
                if ("__proto__" === e || "constructor" === e) return 1;
                var t = Object.getOwnPropertyDescriptor(s, e);
                if (i[e]) {
                  var r = o[e];
                  r && (t.get ? r.push(t.get.bind(s)) : void 0 !== t.value && r.push(function () {
                    return t.value;
                  }));
                } else i[e] = t.get ? {
                  enumerable: !0,
                  configurable: !0,
                  get: gt.bind(o[e] = [t.get.bind(s)])
                } : void 0 !== t.value ? t : void 0;
              }, c = l.length - 1; c >= 0; c--) u();
          }
          for (var d = {}, h = Object.keys(i), f = h.length - 1; f >= 0; f--) {
            var p = h[f],
              v = i[p];
            v && v.get ? Object.defineProperty(d, p, v) : d[p] = v ? v.value : void 0;
          }
          return d;
        }
        function xt(e) {
          var t,
            r,
            n = function n(_n3) {
              var o,
                i = fe.context;
              if (i) {
                var a = C(Be(), 2),
                  s = a[0],
                  l = a[1];
                fe.count || (fe.count = 0), fe.count++, (r || (r = e())).then(function (e) {
                  pe(i), fe.count--, l(function () {
                    return e["default"];
                  }), pe();
                }), t = s;
              } else if (!t) {
                var u = C(Me(function () {
                  return (r || (r = e())).then(function (e) {
                    return e["default"];
                  });
                }), 1)[0];
                t = u;
              }
              return Pe(function () {
                return (o = t()) && je(function () {
                  if (!i) return o(_n3);
                  var e = fe.context;
                  pe(i);
                  var t = o(_n3);
                  return pe(e), t;
                });
              });
            };
          return n.preload = function () {
            return r || ((r = e()).then(function (e) {
              return t = function t() {
                return e["default"];
              };
            }), r);
          }, n;
        }
        var yt = function yt(e) {
          return "Stale read from <".concat(e, ">.");
        };
        function bt(e) {
          var t = "fallback" in e && {
            fallback: function fallback() {
              return e.fallback;
            }
          };
          return Pe(function (e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var n = [],
              o = [],
              i = [],
              a = 0,
              s = t.length > 1 ? [] : null;
            return We(function () {
              return dt(i);
            }), function () {
              var l,
                u,
                c = e() || [];
              return c[xe], je(function () {
                var e,
                  t,
                  h,
                  f,
                  p,
                  v,
                  g,
                  m,
                  x,
                  y = c.length;
                if (0 === y) 0 !== a && (dt(i), i = [], n = [], o = [], a = 0, s && (s = [])), r.fallback && (n = [ct], o[0] = Ne(function (e) {
                  return i[0] = e, r.fallback();
                }), a = 1);else if (0 === a) {
                  for (o = new Array(y), u = 0; u < y; u++) n[u] = c[u], o[u] = Ne(d);
                  a = y;
                } else {
                  for (h = new Array(y), f = new Array(y), s && (p = new Array(y)), v = 0, g = Math.min(a, y); v < g && n[v] === c[v]; v++);
                  for (g = a - 1, m = y - 1; g >= v && m >= v && n[g] === c[m]; g--, m--) h[m] = o[g], f[m] = i[g], s && (p[m] = s[g]);
                  for (e = new Map(), t = new Array(m + 1), u = m; u >= v; u--) x = c[u], l = e.get(x), t[u] = void 0 === l ? -1 : l, e.set(x, u);
                  for (l = v; l <= g; l++) x = n[l], void 0 !== (u = e.get(x)) && -1 !== u ? (h[u] = o[l], f[u] = i[l], s && (p[u] = s[l]), u = t[u], e.set(x, u)) : i[l]();
                  for (u = v; u < y; u++) u in h ? (o[u] = h[u], i[u] = f[u], s && (s[u] = p[u], s[u](u))) : o[u] = Ne(d);
                  o = o.slice(0, a = y), n = c.slice(0);
                }
                return o;
              });
              function d(e) {
                if (i[u] = e, s) {
                  var r = C(Be(u), 2),
                    n = r[0],
                    o = r[1];
                  return s[u] = o, t(c[u], n);
                }
                return t(c[u]);
              }
            };
          }(function () {
            return e.each;
          }, e.children, t || void 0));
        }
        function wt(e) {
          var t = e.keyed,
            r = Pe(function () {
              return e.when;
            }, void 0, {
              equals: function equals(e, r) {
                return t ? e === r : !e == !r;
              }
            });
          return Pe(function () {
            var n = r();
            if (n) {
              var o = e.children;
              return "function" == typeof o && o.length > 0 ? je(function () {
                return o(t ? n : function () {
                  if (!je(r)) throw yt("Show");
                  return e.when;
                });
              }) : o;
            }
            return e.fallback;
          }, void 0, void 0);
        }
        var St = C(Be(void 0), 2),
          At = St[0],
          Tt = St[1];
        b("K", Tt);
        var Ct = /*#__PURE__*/_createClass(function Ct(e) {
          _classCallCheck(this, Ct);
          T(this, "releaseCallback", void 0), this.releaseCallback = e;
        });
        var Rt = /*#__PURE__*/function (_Ct) {
          function Rt(e, t) {
            var _this2;
            _classCallCheck(this, Rt);
            var r, n;
            _this2 = _callSuper(this, Rt, [e]), T(_assertThisInitialized(_this2), "textureMap", new Map()), T(_assertThisInitialized(_this2), "zeroReferenceTextureSet", new Set()), T(_assertThisInitialized(_this2), "options", void 0), _this2.options = {
              textureCleanupIntervalMs: null !== (r = t.textureCleanupIntervalMs) && void 0 !== r ? r : 1e4,
              textureCleanupAgeThreadholdMs: null !== (n = t.textureCleanupAgeThreadholdMs) && void 0 !== n ? n : 6e4
            }, setInterval(function () {
              var e,
                t = Date.now(),
                r = _this2.options.textureCleanupAgeThreadholdMs,
                n = R(_this2.zeroReferenceTextureSet);
              try {
                for (n.s(); !(e = n.n()).done;) {
                  var o = e.value;
                  t - o.lastUpdate > r && (_this2.releaseCallback(o.id), _this2.textureMap["delete"](o.id), _this2.zeroReferenceTextureSet["delete"](o));
                }
              } catch (i) {
                n.e(i);
              } finally {
                n.f();
              }
            }, _this2.options.textureCleanupIntervalMs);
            return _this2;
          }
          _inherits(Rt, _Ct);
          return _createClass(Rt, [{
            key: "registerTexture",
            value: function registerTexture(e) {
              var t,
                r = null === (t = e.options) || void 0 === t ? void 0 : t.id;
              if (I(r, "Texture must have an id to be registered"), !this.textureMap.has(r)) {
                var n = {
                  id: r,
                  nodeRefCount: 0,
                  lastUpdate: Date.now()
                };
                this.textureMap.set(r, n), this.zeroReferenceTextureSet.add(n);
              }
            }
          }, {
            key: "incrementTextureRefCount",
            value: function incrementTextureRefCount(e) {
              var t,
                r = null === (t = e.options) || void 0 === t ? void 0 : t.id;
              I(r, "Texture must have an id to be registered");
              var n = this.textureMap.get(r);
              n || (this.registerTexture(e), n = this.textureMap.get(r)), I(n, "Texture must have been registered"), "SubTexture" === e.txType && this.incrementTextureRefCount(e.props.texture), n.nodeRefCount++, n.lastUpdate = Date.now(), this.zeroReferenceTextureSet.has(n) && this.zeroReferenceTextureSet["delete"](n);
            }
          }, {
            key: "decrementTextureRefCount",
            value: function decrementTextureRefCount(e) {
              var t,
                r = null === (t = e.options) || void 0 === t ? void 0 : t.id;
              I(r, "Texture must have an id to be registered");
              var n = this.textureMap.get(r);
              I(n, "Texture must have been registered"), n.nodeRefCount--, n.lastUpdate = Date.now(), 0 === n.nodeRefCount && this.zeroReferenceTextureSet.add(n), "SubTexture" === e.txType && this.decrementTextureRefCount(e.props.texture);
            }
          }]);
        }(Ct);
        var It = /*#__PURE__*/function (_Ct2) {
          function It(e) {
            var _this3;
            _classCallCheck(this, It);
            _this3 = _callSuper(this, It, [e]), T(_assertThisInitialized(_this3), "registry", void 0), _this3.registry = new FinalizationRegistry(e);
            return _this3;
          }
          _inherits(It, _Ct2);
          return _createClass(It, [{
            key: "registerTexture",
            value: function registerTexture(e) {
              var t, r;
              I(null === (t = e.options) || void 0 === t ? void 0 : t.id, "Texture must have an ID to be registered"), this.registry.register(e, null === (r = e.options) || void 0 === r ? void 0 : r.id);
            }
          }, {
            key: "incrementTextureRefCount",
            value: function incrementTextureRefCount() {}
          }, {
            key: "decrementTextureRefCount",
            value: function decrementTextureRefCount() {}
          }]);
        }(Ct);
        var _t = {
            alpha: function alpha(e) {
              return 1 === e ? null : {
                prop: "opacity",
                value: "".concat(e)
              };
            },
            x: function x(e) {
              return {
                prop: "left",
                value: "".concat(e, "px")
              };
            },
            y: function y(e) {
              return {
                prop: "top",
                value: "".concat(e, "px")
              };
            },
            width: function width(e) {
              return 0 === e ? null : {
                prop: "width",
                value: "".concat(e, "px")
              };
            },
            height: function height(e) {
              return 0 === e ? null : {
                prop: "height",
                value: "".concat(e, "px")
              };
            },
            zIndex: function zIndex() {
              return "zIndex";
            },
            fontFamily: function fontFamily() {
              return "font-family";
            },
            fontSize: function fontSize() {
              return "font-size";
            },
            fontStyle: function fontStyle() {
              return "font-style";
            },
            fontWeight: function fontWeight() {
              return "font-weight";
            },
            fontStretch: function fontStretch() {
              return "font-stretch";
            },
            lineHeight: function lineHeight() {
              return "line-height";
            },
            letterSpacing: function letterSpacing() {
              return "letter-spacing";
            },
            textAlign: function textAlign() {
              return "text-align";
            },
            overflowSuffix: function overflowSuffix() {
              return "overflow-suffix";
            },
            maxLines: function maxLines() {
              return "max-lines";
            },
            contain: function contain() {
              return "contain";
            },
            verticalAlign: function verticalAlign() {
              return "vertical-align";
            },
            clipping: function clipping(e) {
              return !1 === e ? null : {
                prop: "overflow",
                value: e ? "hidden" : "visible"
              };
            },
            rotation: function rotation(e) {
              return 0 === e ? null : {
                prop: "transform",
                value: "rotate(".concat(e, "rad)")
              };
            },
            scale: function scale(e) {
              return 1 === e ? null : {
                prop: "transform",
                value: "scale(".concat(e, ")")
              };
            },
            scaleX: function scaleX(e) {
              return 1 === e ? null : {
                prop: "transform",
                value: "scaleX(".concat(e, ")")
              };
            },
            scaleY: function scaleY(e) {
              return 1 === e ? null : {
                prop: "transform",
                value: "scaleY(".concat(e, ")")
              };
            },
            color: function color(e) {
              return 0 === e ? null : {
                prop: "color",
                value: Et(e)
              };
            }
          },
          Et = function Et(e) {
            return "rgba(".concat(e >> 24 & 255, ",").concat(e >> 16 & 255, ",").concat(e >> 8 & 255, ",").concat((255 & e) / 255, ")");
          },
          kt = {
            id: "id"
          };
        var Nt = /*#__PURE__*/function () {
          function Nt(e, t) {
            _classCallCheck(this, Nt);
            var r, n, o, i, a, s;
            if (T(this, "root", null), T(this, "canvas", null), T(this, "height", 1080), T(this, "width", 1920), T(this, "scaleX", 1), T(this, "scaleY", 1), !_()) {
              if (!t) throw new Error("settings is required");
              this.height = Math.ceil(null !== (r = t.appHeight) && void 0 !== r ? r : 1080 / (null !== (n = t.deviceLogicalPixelRatio) && void 0 !== n ? n : 1)), this.width = Math.ceil(null !== (o = t.appWidth) && void 0 !== o ? o : 1900 / (null !== (i = t.deviceLogicalPixelRatio) && void 0 !== i ? i : 1)), this.scaleX = null !== (a = t.deviceLogicalPixelRatio) && void 0 !== a ? a : 1, this.scaleY = null !== (s = t.deviceLogicalPixelRatio) && void 0 !== s ? s : 1, this.canvas = e, this.root = document.createElement("div"), this.setRootPosition(), document.body.appendChild(this.root), new MutationObserver(this.setRootPosition.bind(this)).observe(e, {
                attributes: !0,
                childList: !1,
                subtree: !1
              }), new ResizeObserver(this.setRootPosition.bind(this)).observe(e), window.addEventListener("resize", this.setRootPosition.bind(this)), console.warn("Inspector is enabled, this will impact performance");
            }
          }
          return _createClass(Nt, [{
            key: "setRootPosition",
            value: function setRootPosition() {
              if (null !== this.root && null !== this.canvas) {
                var e = this.canvas.getBoundingClientRect(),
                  t = document.documentElement.scrollTop + e.top,
                  r = document.documentElement.scrollLeft + e.left;
                this.root.id = "root", this.root.style.left = "".concat(r, "px"), this.root.style.top = "".concat(t, "px"), this.root.style.width = "".concat(this.width, "px"), this.root.style.height = "".concat(this.height, "px"), this.root.style.position = "absolute", this.root.style.transformOrigin = "0 0 0", this.root.style.transform = "scale(".concat(this.scaleX, ", ").concat(this.scaleY, ")"), this.root.style.overflow = "hidden", this.root.style.zIndex = "65534";
              }
            }
          }, {
            key: "createDiv",
            value: function createDiv(e, t) {
              var r = document.createElement("div");
              for (var n in r.style.position = "absolute", r.id = e.id.toString(), t) this.updateNodeProperty(r, n, t[n]);
              return r;
            }
          }, {
            key: "createNode",
            value: function createNode(e, t) {
              var r = e.createNode(t),
                n = this.createDiv(r, t);
              return n.node = r, r.div = n, this.createProxy(r, n);
            }
          }, {
            key: "createTextNode",
            value: function createTextNode(e, t) {
              var r = e.createTextNode(t),
                n = this.createDiv(r, t);
              return n.node = r, r.div = n, this.createProxy(r, n);
            }
          }, {
            key: "createProxy",
            value: function createProxy(e, t) {
              var _this4 = this;
              return new Proxy(e, {
                set: function set(e, r, n) {
                  return _this4.updateNodeProperty(t, r, n), Reflect.set(e, r, n);
                },
                get: function get(r, n, o) {
                  return "destroy" === n && _this4.destroyNode(r), "animate" === n ? function (n, o) {
                    var i = r.animate(n, o);
                    return new Proxy(i, {
                      get: function get(r, i, a) {
                        return "start" === i && _this4.animateNode(t, e, n, o), Reflect.get(r, i, a);
                      }
                    });
                  } : Reflect.get(r, n, o);
                }
              });
            }
          }, {
            key: "destroyNode",
            value: function destroyNode(e) {
              var t = document.getElementById(e.id.toString());
              null == t || t.remove();
            }
          }, {
            key: "updateNodeProperty",
            value: function updateNodeProperty(e, t, r) {
              if (null !== this.root && null != r) if ("parent" !== t) {
                if ("text" === t) return e.innerHTML = String(r), void (e.style.visibility = "hidden");
                if ("src" === t && r) e.setAttribute("data-src", String(r));else {
                  if (_t[t]) {
                    var n,
                      o = null === (n = _t[t]) || void 0 === n ? void 0 : n.call(_t, r);
                    if (null === o) return;
                    return "string" == typeof o ? void e.style.setProperty(o, String(r)) : void ("object" == _typeof(o) && e.style.setProperty(o.prop, o.value));
                  }
                  if (kt[t]) e.setAttribute(String(_t[t]), String(r));else if ("data" !== t) ;else for (var i in r) {
                    var a = r[i];
                    void 0 === a ? e.removeAttribute("data-".concat(i)) : e.setAttribute("data-".concat(i), String(a));
                  }
                }
              } else {
                var s = r.id;
                if (1 === s) return void this.root.appendChild(e);
                var l = document.getElementById(s.toString());
                null == l || l.appendChild(e);
              }
            }
          }, {
            key: "animateNode",
            value: function animateNode(e, t, r, n) {
              var o = n.duration,
                i = void 0 === o ? 1e3 : o,
                a = n.delay,
                s = void 0 === a ? 0 : a,
                l = r.x,
                u = r.y,
                c = r.width,
                d = r.height,
                h = r.alpha,
                f = void 0 === h ? 1 : h,
                p = r.rotation,
                v = void 0 === p ? 0 : p,
                g = r.scale,
                m = void 0 === g ? 1 : g,
                x = r.color;
              setTimeout(function () {
                setTimeout(function () {
                  e.style.top = "".concat(u, "px"), e.style.left = "".concat(l, "px"), e.style.width = "".concat(c, "px"), e.style.height = "".concat(d, "px"), e.style.opacity = "".concat(f), e.style.rotate = "".concat(v, "rad"), e.style.scale = "".concat(m), e.style.color = Et(x);
                }, i);
              }, s);
            }
          }]);
        }();
        var Bt = /*#__PURE__*/function () {
          function Bt(e) {
            _classCallCheck(this, Bt);
            T(this, "priority", 1), T(this, "name", ""), T(this, "ref", void 0), T(this, "target", void 0), T(this, "passParameters", ""), T(this, "declaredUniforms", ""), T(this, "uniformInfo", {});
            var t = e.ref,
              r = e.target,
              n = e.props,
              o = void 0 === n ? {} : n;
            this.ref = t, this.target = r;
            var i = {},
              a = [],
              s = "",
              l = this.constructor.uniforms || {};
            for (var u in l) {
              var c = l[u],
                d = c.type,
                h = "".concat(t, "_").concat(u),
                f = "";
              c.size && (f = "[".concat(c.size(o), "]")), a.push(h), s += "uniform ".concat(d, " ").concat(h).concat(f, ";"), i[u] = {
                name: h,
                uniform: l[u].method
              };
            }
            this.passParameters = a.join(","), this.declaredUniforms = s, this.uniformInfo = i;
          }
          return _createClass(Bt, null, [{
            key: "getEffectKey",
            value: function getEffectKey(e) {
              return "";
            }
          }, {
            key: "getMethodParameters",
            value: function getMethodParameters(e, t) {
              var r = [];
              for (var n in e) {
                var o = e[n],
                  i = "";
                o.size && (i = "[".concat(o.size(t), "]")), r.push("".concat(o.type, " ").concat(n).concat(i));
              }
              return r.join(",");
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              return {};
            }
          }, {
            key: "makeEffectKey",
            value: function makeEffectKey(e) {
              return !1;
            }
          }]);
        }();
        T(Bt, "uniforms", {}), T(Bt, "methods", void 0), T(Bt, "onShaderMask", void 0), T(Bt, "onColorize", void 0), T(Bt, "onEffectMask", void 0);
        var Ot = {
          x: function x(e, t) {
            e.props.x = t;
          },
          y: function y(e, t) {
            e.props.y = t;
          },
          width: function width(e, t) {
            e.props.width = t;
          },
          height: function height(e, t) {
            e.props.height = t;
          },
          color: function color(e, t) {
            e.props.color = t;
          },
          zIndex: function zIndex(e, t) {
            e.props.zIndex = t;
          },
          fontFamily: function fontFamily(e, t) {
            e.props.fontFamily = t;
          },
          fontWeight: function fontWeight(e, t) {
            e.props.fontWeight = t;
          },
          fontStyle: function fontStyle(e, t) {
            e.props.fontStyle = t;
          },
          fontStretch: function fontStretch(e, t) {
            e.props.fontStretch = t;
          },
          fontSize: function fontSize(e, t) {
            e.props.fontSize = t;
          },
          text: function text(e, t) {
            e.props.text = t;
          },
          textAlign: function textAlign(e, t) {
            e.props.textAlign = t;
          },
          contain: function contain(e, t) {
            e.props.contain = t;
          },
          offsetY: function offsetY(e, t) {
            e.props.offsetY = t;
          },
          scrollable: function scrollable(e, t) {
            e.props.scrollable = t;
          },
          scrollY: function scrollY(e, t) {
            e.props.scrollY = t;
          },
          letterSpacing: function letterSpacing(e, t) {
            e.props.letterSpacing = t;
          },
          lineHeight: function lineHeight(e, t) {
            e.props.lineHeight = t;
          },
          maxLines: function maxLines(e, t) {
            e.props.maxLines = t;
          },
          textBaseline: function textBaseline(e, t) {
            e.props.textBaseline = t;
          },
          verticalAlign: function verticalAlign(e, t) {
            e.props.verticalAlign = t;
          },
          overflowSuffix: function overflowSuffix(e, t) {
            e.props.overflowSuffix = t;
          },
          debug: function debug(e, t) {
            e.props.debug = t;
          }
        };
        var Ft = /*#__PURE__*/function () {
          function Ft(e) {
            var _this5 = this;
            _classCallCheck(this, Ft);
            T(this, "stage", void 0), T(this, "set", void 0), this.stage = e;
            var t = A(A({}, Ot), this.getPropertySetters());
            this.set = Object.freeze(Object.fromEntries(Object.entries(t).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                e = _ref2[0],
                t = _ref2[1];
              return [e, function (r, n) {
                r.props[e] !== n && (t(r, n), _this5.stage.requestRender());
              }];
            })));
          }
          return _createClass(Ft, [{
            key: "setStatus",
            value: function setStatus(e, t, r) {
              e.status !== t && (e.status = t, e.emitter.emit(t, r));
            }
          }, {
            key: "setIsRenderable",
            value: function setIsRenderable(e, t) {
              e.isRenderable = t;
            }
          }, {
            key: "destroyState",
            value: function destroyState(e) {
              ["loading", "loaded", "failed"].forEach(function (t) {
                e.emitter.off(t);
              });
            }
          }, {
            key: "scheduleUpdateState",
            value: function scheduleUpdateState(e) {
              var _this6 = this;
              e.updateScheduled || (e.updateScheduled = !0, queueMicrotask(function () {
                e.updateScheduled = !1, _this6.updateState(e);
              }));
            }
          }]);
        }();
        var Lt = /*#__PURE__*/function (_E2) {
          function Lt(e, t, r) {
            var _this7;
            _classCallCheck(this, Lt);
            _this7 = _callSuper(this, Lt, [e, t]), T(_assertThisInitialized(_this7), "fontFace", void 0), T(_assertThisInitialized(_this7), "fontUrl", void 0);
            var n = r.replace(/\(|\)/g, ""),
              o = _this7.descriptors,
              i = {
                style: o.style,
                weight: "number" == typeof o.weight ? "".concat(o.weight) : o.weight,
                stretch: o.stretch,
                unicodeRange: o.unicodeRange,
                variant: o.variant,
                featureSettings: o.featureSettings,
                display: o.display
              },
              a = new FontFace(e, "url(".concat(n, ")"), i);
            a.load().then(function () {
              _this7.loaded = !0, _this7.emit("loaded");
            })["catch"](console.error), _this7.fontFace = a, _this7.fontUrl = r;
            return _this7;
          }
          _inherits(Lt, _E2);
          return _createClass(Lt);
        }(E);
        function Pt(e, t, r, n, o) {
          return r * (n - 1) + ("bottom" !== e ? .5 * t : 0) + Math.max(r, t) + (o || 0);
        }
        var Mt = /*#__PURE__*/function () {
          function Mt(e, t) {
            _classCallCheck(this, Mt);
            T(this, "_canvas", void 0), T(this, "_context", void 0), T(this, "_settings", void 0), T(this, "renderInfo", void 0), this._canvas = e, this._context = t, this._settings = this.mergeDefaults({});
          }
          return _createClass(Mt, [{
            key: "settings",
            get: function get() {
              return this._settings;
            },
            set: function set(e) {
              this._settings = this.mergeDefaults(e);
            }
          }, {
            key: "getPrecision",
            value: function getPrecision() {
              return this._settings.precision;
            }
          }, {
            key: "setFontProperties",
            value: function setFontProperties() {
              this._context.font = this._getFontSetting(), this._context.textBaseline = this._settings.textBaseline;
            }
          }, {
            key: "_getFontSetting",
            value: function _getFontSetting() {
              for (var e = [this._settings.fontFace], t = [], r = 0, n = e.length; r < n; r++) "serif" === e[r] || "sans-serif" === e[r] ? t.push(e[r]) : t.push("\"".concat(e[r], "\""));
              return "".concat(this._settings.fontStyle, " ").concat(this._settings.fontSize * this.getPrecision(), "px ").concat(t.join(","));
            }
          }, {
            key: "_load",
            value: function _load() {
              var _this8 = this;
              if (document.fonts) {
                var e = this._getFontSetting();
                try {
                  if (!document.fonts.check(e, this._settings.text)) return document.fonts.load(e, this._settings.text)["catch"](function (t) {
                    console.warn("[Lightning] Font load error", t, e);
                  }).then(function () {
                    document.fonts.check(e, _this8._settings.text) || console.warn("[Lightning] Font not found", e);
                  });
                } catch (t) {
                  console.warn("[Lightning] Can't check font loading for " + e);
                }
              }
            }
          }, {
            key: "calculateRenderInfo",
            value: function calculateRenderInfo() {
              var e = {},
                t = this.getPrecision(),
                r = this._settings.paddingLeft * t,
                n = this._settings.paddingRight * t,
                o = this._settings.fontSize * t,
                i = null === this._settings.offsetY ? null : this._settings.offsetY * t,
                a = (this._settings.lineHeight || o) * t,
                s = this._settings.w * t,
                l = this._settings.h * t,
                u = this._settings.wordWrapWidth * t,
                c = this._settings.cutSx * t,
                d = this._settings.cutEx * t,
                h = this._settings.cutSy * t,
                f = this._settings.cutEy * t,
                p = (this._settings.letterSpacing || 0) * t,
                v = this._settings.textIndent * t;
              this.setFontProperties();
              var g,
                m = s || 2048 / this.getPrecision(),
                x = m - r;
              if (x < 10 && (m += 10 - x, x = 10), u || (u = x), this._settings.textOverflow && !this._settings.wordWrap) {
                var y;
                switch (this._settings.textOverflow) {
                  case "clip":
                    y = "";
                    break;
                  case "ellipsis":
                    y = this._settings.overflowSuffix;
                    break;
                  default:
                    y = this._settings.textOverflow;
                }
                this._settings.text = this.wrapWord(this._settings.text, u - v, y);
              }
              if (this._settings.wordWrap) g = this.wrapText(this._settings.text, u, p, v);else for (var b = (g = {
                  l: this._settings.text.split(/(?:\r\n|\r|\n)/),
                  n: []
                }).l.length, w = 0; w < b - 1; w++) g.n.push(w);
              var S = g.l;
              if (this._settings.maxLines && S.length > this._settings.maxLines) {
                var A,
                  T = S.slice(0, this._settings.maxLines),
                  C = null;
                if (this._settings.overflowSuffix) {
                  var R = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0,
                    I = this.wrapText(T[T.length - 1], u - R, p, v);
                  T[T.length - 1] = "".concat(I.l[0]).concat(this._settings.overflowSuffix), C = [I.l.length > 1 ? I.l[1] : ""];
                } else C = [""];
                var _ = S.length,
                  E = 0,
                  k = g.n.length;
                for (A = this._settings.maxLines; A < _; A++) C[E] += "".concat(C[E] ? " " : "").concat(S[A]), A + 1 < k && g.n[A + 1] && E++;
                e.remainingText = C.join("\n"), e.moreTextLines = !0, S = T;
              } else e.moreTextLines = !1, e.remainingText = "";
              for (var N, B = 0, O = [], F = 0; F < S.length; F++) {
                var L = this.measureText(S[F], p) + (0 === F ? v : 0);
                O.push(L), B = Math.max(B, L);
              }
              return e.lineWidths = O, s || (m = B + r + n, x = B), a = a || o, N = l || Pt(this._settings.textBaseline, o, a, S.length, i), null === i && (i = o), e.w = m, e.h = N, e.lines = S, e.precision = t, m || (m = 1), N || (N = 1), (c || d) && (m = Math.min(m, d - c)), (h || f) && (N = Math.min(N, f - h)), e.width = m, e.innerWidth = x, e.height = N, e.fontSize = o, e.cutSx = c, e.cutSy = h, e.cutEx = d, e.cutEy = f, e.lineHeight = a, e.lineWidths = O, e.offsetY = i, e.paddingLeft = r, e.paddingRight = n, e.letterSpacing = p, e.textIndent = v, e;
            }
          }, {
            key: "draw",
            value: function draw(e, t) {
              var r,
                n,
                o = this.getPrecision(),
                i = (null == t ? void 0 : t.lines) || e.lines,
                a = (null == t ? void 0 : t.lineWidths) || e.lineWidths,
                s = t ? Pt(this._settings.textBaseline, e.fontSize, e.lineHeight, t.lines.length, null === this._settings.offsetY ? null : this._settings.offsetY * o) : e.height;
              this._canvas.width = Math.min(Math.ceil(e.width + this._settings.textRenderIssueMargin), 2048), this._canvas.height = Math.min(Math.ceil(s), 2048), this.setFontProperties(), e.fontSize >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (e.cutSx || e.cutSy) && this._context.translate(-e.cutSx, -e.cutSy);
              for (var l = [], u = 0, c = i.length; u < c; u++) r = 0 === u ? e.textIndent : 0, n = u * e.lineHeight + e.offsetY, "middle" == this._settings.verticalAlign ? n += (e.lineHeight - e.fontSize) / 2 : "bottom" == this._settings.verticalAlign && (n += e.lineHeight - e.fontSize), "right" === this._settings.textAlign ? r += e.innerWidth - a[u] : "center" === this._settings.textAlign && (r += (e.innerWidth - a[u]) / 2), r += e.paddingLeft, l.push({
                text: i[u],
                x: r,
                y: n,
                w: a[u]
              });
              if (this._settings.highlight) {
                var d = this._settings.highlightColor,
                  h = this._settings.highlightHeight * o || 1.5 * e.fontSize,
                  f = this._settings.highlightOffset * o,
                  p = null !== this._settings.highlightPaddingLeft ? this._settings.highlightPaddingLeft * o : e.paddingLeft,
                  v = null !== this._settings.highlightPaddingRight ? this._settings.highlightPaddingRight * o : e.paddingRight;
                this._context.fillStyle = k(d);
                for (var g = 0; g < l.length; g++) {
                  var m = l[g];
                  this._context.fillRect(m.x - p, m.y - e.offsetY + f, m.w + v + p, h);
                }
              }
              var x = null;
              this._settings.shadow && (x = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = k(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * o, this._context.shadowOffsetY = this._settings.shadowOffsetY * o, this._context.shadowBlur = this._settings.shadowBlur * o), this._context.fillStyle = k(this._settings.textColor);
              for (var y = 0, b = l.length; y < b; y++) {
                var w = l[y];
                if (0 === e.letterSpacing) this._context.fillText(w.text, w.x, w.y);else for (var S = w.text.split(""), A = w.x, T = 0, C = S.length; T < C; T++) this._context.fillText(S[T], A, w.y), A += this.measureText(S[T], e.letterSpacing);
              }
              x && (this._context.shadowColor = x[0], this._context.shadowOffsetX = x[1], this._context.shadowOffsetY = x[2], this._context.shadowBlur = x[3]), (e.cutSx || e.cutSy) && this._context.translate(e.cutSx, e.cutSy), this.renderInfo = e;
            }
          }, {
            key: "wrapWord",
            value: function wrapWord(e, t, r) {
              var n = this._context.measureText(r).width,
                o = e.length,
                i = this._context.measureText(e).width;
              if (i <= t) return e;
              var a = Math.floor(t * o / i),
                s = this._context.measureText(e.substring(0, a)).width + n;
              if (s > t) for (; a > 0 && (s = this._context.measureText(e.substring(0, a)).width + n) > t;) a -= 1;else for (; a < o;) {
                if (!((s = this._context.measureText(e.substring(0, a)).width + n) < t)) {
                  a -= 1;
                  break;
                }
                a += 1;
              }
              return e.substring(0, a) + (t >= n ? r : "");
            }
          }, {
            key: "wrapText",
            value: function wrapText(e, t, r) {
              var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
              for (var o = e.split(/\r?\n/g), i = [], a = [], s = 0; s < o.length; s++) {
                for (var l = [], u = "", c = t - n, d = o[s].split(" "), h = 0; h < d.length; h++) {
                  var f = this.measureText(d[h], r),
                    p = f + this.measureText(" ", r);
                  0 === h || p > c ? (h > 0 && (l.push(u), u = ""), u += d[h], c = t - f - (0 === h ? n : 0)) : (c -= p, u += " ".concat(d[h]));
                }
                l.push(u), u = "", i = i.concat(l), s < o.length - 1 && a.push(i.length);
              }
              return {
                l: i,
                n: a
              };
            }
          }, {
            key: "measureText",
            value: function measureText(e) {
              var _this9 = this;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              return t ? e.split("").reduce(function (e, r) {
                return e + _this9._context.measureText(r).width + t;
              }, 0) : this._context.measureText(e).width;
            }
          }, {
            key: "mergeDefaults",
            value: function mergeDefaults(e) {
              return A({
                text: "",
                w: 0,
                h: 0,
                fontStyle: "normal",
                fontSize: 40,
                fontFace: null,
                wordWrap: !0,
                wordWrapWidth: 0,
                wordBreak: !1,
                textOverflow: "",
                lineHeight: null,
                textBaseline: "alphabetic",
                textAlign: "left",
                verticalAlign: "top",
                offsetY: null,
                maxLines: 0,
                overflowSuffix: "...",
                textColor: [1, 1, 1, 1],
                paddingLeft: 0,
                paddingRight: 0,
                shadow: !1,
                shadowColor: [0, 0, 0, 1],
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                highlight: !1,
                highlightHeight: 0,
                highlightColor: [0, 0, 0, 1],
                highlightOffset: 0,
                highlightPaddingLeft: 0,
                highlightPaddingRight: 0,
                letterSpacing: 0,
                textIndent: 0,
                cutSx: 0,
                cutEx: 0,
                cutSy: 0,
                cutEy: 0,
                advancedRenderer: !1,
                fontBaselineRatio: 0,
                precision: 1,
                textRenderIssueMargin: 0
              }, e);
            }
          }]);
        }();
        var zt = "undefined" == typeof self ? globalThis : self,
          Dt = (null === (se = zt.document) || void 0 === se ? void 0 : se.fonts) || zt.fonts;
        var jt = N(0, 0, 0, 0);
        var Ut = /*#__PURE__*/function (_Ft) {
          function Ut(e) {
            var _this10;
            _classCallCheck(this, Ut);
            _this10 = _callSuper(this, Ut, [e]), T(_assertThisInitialized(_this10), "canvas", void 0), T(_assertThisInitialized(_this10), "context", void 0), T(_assertThisInitialized(_this10), "rendererBounds", void 0), "undefined" != typeof OffscreenCanvas ? _this10.canvas = new OffscreenCanvas(0, 0) : _this10.canvas = document.createElement("canvas");
            var t = _this10.canvas.getContext("2d");
            t || (_this10.canvas = document.createElement("canvas"), t = _this10.canvas.getContext("2d")), I(t), _this10.context = t, _this10.rendererBounds = {
              x1: 0,
              y1: 0,
              x2: _this10.stage.options.appWidth,
              y2: _this10.stage.options.appHeight
            };
            return _this10;
          }
          _inherits(Ut, _Ft);
          return _createClass(Ut, [{
            key: "getPropertySetters",
            value: function getPropertySetters() {
              var _this11 = this;
              return {
                fontFamily: function fontFamily(e, t) {
                  e.props.fontFamily = t, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
                },
                fontWeight: function fontWeight(e, t) {
                  e.props.fontWeight = t, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
                },
                fontStyle: function fontStyle(e, t) {
                  e.props.fontStyle = t, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
                },
                fontStretch: function fontStretch(e, t) {
                  e.props.fontStretch = t, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
                },
                fontSize: function fontSize(e, t) {
                  e.props.fontSize = t, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
                },
                text: function text(e, t) {
                  e.props.text = t, _this11.invalidateLayoutCache(e);
                },
                textAlign: function textAlign(e, t) {
                  e.props.textAlign = t, _this11.invalidateLayoutCache(e);
                },
                color: function color(e, t) {
                  e.props.color = t, _this11.invalidateLayoutCache(e);
                },
                x: function x(e, t) {
                  e.props.x = t, _this11.invalidateVisibleWindowCache(e);
                },
                y: function y(e, t) {
                  e.props.y = t, _this11.invalidateVisibleWindowCache(e);
                },
                contain: function contain(e, t) {
                  e.props.contain = t, _this11.invalidateLayoutCache(e);
                },
                width: function width(e, t) {
                  e.props.width = t, "none" !== e.props.contain && _this11.invalidateLayoutCache(e);
                },
                height: function height(e, t) {
                  e.props.height = t, "both" === e.props.contain && _this11.invalidateLayoutCache(e);
                },
                offsetY: function offsetY(e, t) {
                  e.props.offsetY = t, _this11.invalidateLayoutCache(e);
                },
                scrollY: function scrollY(e, t) {
                  e.props.scrollY = t;
                },
                letterSpacing: function letterSpacing(e, t) {
                  e.props.letterSpacing = t, _this11.invalidateLayoutCache(e);
                },
                lineHeight: function lineHeight(e, t) {
                  e.props.lineHeight = t, _this11.invalidateLayoutCache(e);
                },
                maxLines: function maxLines(e, t) {
                  e.props.maxLines = t, _this11.invalidateLayoutCache(e);
                },
                textBaseline: function textBaseline(e, t) {
                  e.props.textBaseline = t, _this11.invalidateLayoutCache(e);
                },
                verticalAlign: function verticalAlign(e, t) {
                  e.props.verticalAlign = t, _this11.invalidateLayoutCache(e);
                },
                overflowSuffix: function overflowSuffix(e, t) {
                  e.props.overflowSuffix = t, _this11.invalidateLayoutCache(e);
                }
              };
            }
          }, {
            key: "canRenderFont",
            value: function canRenderFont(e) {
              return !0;
            }
          }, {
            key: "isFontFaceSupported",
            value: function isFontFaceSupported(e) {
              return e instanceof Lt;
            }
          }, {
            key: "addFontFace",
            value: function addFontFace(e) {
              I(e instanceof Lt), Dt.add(e.fontFace);
            }
          }, {
            key: "createState",
            value: function createState(e) {
              return {
                props: e,
                status: "initialState",
                updateScheduled: !1,
                emitter: new B(),
                canvasPages: void 0,
                lightning2TextRenderer: new Mt(this.canvas, this.context),
                renderWindow: void 0,
                visibleWindow: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0,
                  valid: !1
                },
                renderInfo: void 0,
                forceFullLayoutCalc: !1,
                textW: 0,
                textH: 0,
                fontInfo: void 0,
                fontFaceLoadedHandler: void 0,
                isRenderable: !1,
                debugData: {
                  updateCount: 0,
                  layoutCount: 0,
                  drawCount: 0,
                  lastLayoutNumCharacters: 0,
                  layoutSum: 0,
                  drawSum: 0,
                  bufferSize: 0
                }
              };
            }
          }, {
            key: "updateState",
            value: function updateState(e) {
              if ("initialState" === e.status && this.setStatus(e, "loading"), !e.fontInfo) {
                var t = (r = e.props, n = r.fontFamily, [r.fontStyle, r.fontWeight, r.fontStretch, "".concat(r.fontSize, "px"), n].join(" "));
                if (e.fontInfo = {
                  cssString: t,
                  loaded: !1
                }, !e.fontInfo.loaded) return void Dt.load(t).then(this.onFontLoaded.bind(this, e, t))["catch"](this.onFontLoadError.bind(this, e, t));
              }
              var r, n;
              if (e.fontInfo.loaded) {
                if (!e.renderInfo) {
                  var o = e.props.maxLines,
                    i = "both" === e.props.contain ? Math.floor((e.props.height - e.props.offsetY) / e.props.lineHeight) : 0,
                    a = i > 0 && o > 0 ? Math.min(i, o) : Math.max(i, o);
                  e.lightning2TextRenderer.settings = {
                    text: e.props.text,
                    textAlign: e.props.textAlign,
                    fontFace: e.props.fontFamily,
                    fontSize: e.props.fontSize,
                    fontStyle: [e.props.fontStretch, e.props.fontStyle, e.props.fontWeight].join(" "),
                    textColor: O(e.props.color),
                    offsetY: e.props.fontSize + e.props.offsetY,
                    wordWrap: "none" !== e.props.contain,
                    wordWrapWidth: "none" === e.props.contain ? void 0 : e.props.width,
                    letterSpacing: e.props.letterSpacing,
                    lineHeight: e.props.lineHeight,
                    maxLines: a,
                    textBaseline: e.props.textBaseline,
                    verticalAlign: e.props.verticalAlign,
                    overflowSuffix: e.props.overflowSuffix
                  }, e.renderInfo = e.lightning2TextRenderer.calculateRenderInfo(), e.textH = e.renderInfo.lineHeight * e.renderInfo.lines.length, e.textW = e.renderInfo.width, e.renderWindow = void 0;
                }
                var s = e.props,
                  l = s.x,
                  u = s.y,
                  c = s.width,
                  d = s.height,
                  h = s.scrollY,
                  f = s.contain,
                  p = e.visibleWindow,
                  v = e.renderWindow,
                  g = e.canvasPages;
                if (!p.valid) {
                  var m = N(l, u, "none" !== f ? l + c : 1 / 0, "both" === f ? u + d : 1 / 0, jt);
                  F(this.rendererBounds, m, p), p.valid = !0;
                }
                var x = p.y2 - p.y1,
                  y = Math.ceil(x / e.renderInfo.lineHeight);
                if (0 === x) return g = void 0, v = void 0, void this.setStatus(e, "loaded");
                if (v && g) {
                  var b = l + v.x1,
                    w = u - h + v.y1,
                    S = l + v.x2,
                    A = u - h + v.y2;
                  if (b <= p.x1 && S >= p.x2 && w <= p.y1 && A >= p.y2) return void this.setStatus(e, "loaded");
                  A < p.y2 ? (v.y1 += y * e.renderInfo.lineHeight, v.y2 += y * e.renderInfo.lineHeight, g.push(g.shift()), g[2].lineNumStart = g[1].lineNumStart + y, g[2].lineNumEnd = g[2].lineNumStart + y, g[2].valid = !1) : w > p.y1 && (v.y1 -= y * e.renderInfo.lineHeight, v.y2 -= y * e.renderInfo.lineHeight, g.unshift(g.pop()), g[0].lineNumStart = g[1].lineNumStart - y, g[0].lineNumEnd = g[0].lineNumStart + y, g[0].valid = !1);
                } else {
                  var T,
                    C,
                    I,
                    _ = e.renderInfo.lineHeight * y,
                    E = Math.ceil(h / _),
                    k = E * y,
                    B = k - y,
                    L = k + y;
                  g = [{
                    texture: null === (T = g) || void 0 === T ? void 0 : T[0].texture,
                    lineNumStart: B,
                    lineNumEnd: B + y,
                    valid: !1
                  }, {
                    texture: null === (C = g) || void 0 === C ? void 0 : C[1].texture,
                    lineNumStart: k,
                    lineNumEnd: k + y,
                    valid: !1
                  }, {
                    texture: null === (I = g) || void 0 === I ? void 0 : I[2].texture,
                    lineNumStart: L,
                    lineNumEnd: L + y,
                    valid: !1
                  }], e.canvasPages = g;
                  var P = E * _;
                  v = {
                    x1: 0,
                    y1: P - _,
                    x2: c,
                    y2: P + 2 * _
                  };
                }
                e.renderWindow = v, performance.now();
                var M,
                  z = R(g);
                try {
                  for (z.s(); !(M = z.n()).done;) {
                    var D = M.value;
                    if (!D.valid) if (D.lineNumStart < 0) {
                      var j;
                      null === (j = D.texture) || void 0 === j || j.setRenderableOwner(e, !1), D.texture = this.stage.txManager.loadTexture("ImageTexture", {
                        src: ""
                      }), D.texture.setRenderableOwner(e, e.isRenderable), D.valid = !0;
                    } else {
                      var U;
                      if (e.lightning2TextRenderer.draw(e.renderInfo, {
                        lines: e.renderInfo.lines.slice(D.lineNumStart, D.lineNumEnd),
                        lineWidths: e.renderInfo.lineWidths.slice(D.lineNumStart, D.lineNumEnd)
                      }), 0 !== this.canvas.width && 0 !== this.canvas.height) null === (U = D.texture) || void 0 === U || U.setRenderableOwner(e, !1), D.texture = this.stage.txManager.loadTexture("ImageTexture", {
                        src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
                      }, {
                        preload: !0
                      }), D.texture.setRenderableOwner(e, e.isRenderable);
                      D.valid = !0;
                    }
                  }
                } catch (W) {
                  z.e(W);
                } finally {
                  z.f();
                }
                this.setStatus(e, "loaded");
              }
            }
          }, {
            key: "renderQuads",
            value: function renderQuads(e, t, r, n) {
              var o = this.stage,
                i = e.canvasPages,
                a = e.textW,
                s = void 0 === a ? 0 : a,
                l = e.textH,
                u = void 0 === l ? 0 : l,
                c = e.renderWindow;
              if (i && c) {
                var d = e.props,
                  h = d.x,
                  f = d.y,
                  p = d.scrollY,
                  v = d.contain,
                  g = d.width,
                  m = d.height,
                  x = {
                    x: h,
                    y: f,
                    width: "none" !== v ? g : s,
                    height: "both" === v ? m : u
                  };
                L({
                  x: 0,
                  y: 0,
                  width: o.options.appWidth,
                  height: o.options.appHeight
                }, x), I(i, "canvasPages is not defined"), I(c, "renderWindow is not defined");
                var y,
                  b,
                  w,
                  S,
                  A,
                  T,
                  C = (c.y2 - c.y1) / 3,
                  R = e.props,
                  _ = R.zIndex,
                  E = R.color,
                  k = n * P(E),
                  N = M(4294967295, k);
                if (i[0].valid) this.stage.renderer.addQuad({
                  alpha: k,
                  clippingRect: r,
                  colorBl: N,
                  colorBr: N,
                  colorTl: N,
                  colorTr: N,
                  width: (null === (y = i[0].texture) || void 0 === y || null === (y = y.dimensions) || void 0 === y ? void 0 : y.width) || 0,
                  height: (null === (b = i[0].texture) || void 0 === b || null === (b = b.dimensions) || void 0 === b ? void 0 : b.height) || 0,
                  texture: i[0].texture,
                  textureOptions: {},
                  shader: null,
                  shaderProps: null,
                  zIndex: _,
                  tx: t.tx,
                  ty: t.ty - p + c.y1,
                  ta: t.ta,
                  tb: t.tb,
                  tc: t.tc,
                  td: t.td
                });
                if (i[1].valid) this.stage.renderer.addQuad({
                  alpha: k,
                  clippingRect: r,
                  colorBl: N,
                  colorBr: N,
                  colorTl: N,
                  colorTr: N,
                  width: (null === (w = i[1].texture) || void 0 === w || null === (w = w.dimensions) || void 0 === w ? void 0 : w.width) || 0,
                  height: (null === (S = i[1].texture) || void 0 === S || null === (S = S.dimensions) || void 0 === S ? void 0 : S.height) || 0,
                  texture: i[1].texture,
                  textureOptions: {},
                  shader: null,
                  shaderProps: null,
                  zIndex: _,
                  tx: t.tx,
                  ty: t.ty - p + c.y1 + C,
                  ta: t.ta,
                  tb: t.tb,
                  tc: t.tc,
                  td: t.td
                });
                if (i[2].valid) this.stage.renderer.addQuad({
                  alpha: k,
                  clippingRect: r,
                  colorBl: N,
                  colorBr: N,
                  colorTl: N,
                  colorTr: N,
                  width: (null === (A = i[2].texture) || void 0 === A || null === (A = A.dimensions) || void 0 === A ? void 0 : A.width) || 0,
                  height: (null === (T = i[2].texture) || void 0 === T || null === (T = T.dimensions) || void 0 === T ? void 0 : T.height) || 0,
                  texture: i[2].texture,
                  textureOptions: {},
                  shader: null,
                  shaderProps: null,
                  zIndex: _,
                  tx: t.tx,
                  ty: t.ty - p + c.y1 + C + C,
                  ta: t.ta,
                  tb: t.tb,
                  tc: t.tc,
                  td: t.td
                });
              }
            }
          }, {
            key: "setIsRenderable",
            value: function setIsRenderable(e, t) {
              var r;
              _superPropGet(Ut, "setIsRenderable", this, 3)([e, t]), null === (r = e.canvasPages) || void 0 === r || r.forEach(function (r) {
                var n;
                null === (n = r.texture) || void 0 === n || n.setRenderableOwner(e, t);
              });
            }
          }, {
            key: "destroyState",
            value: function destroyState(e) {
              var t;
              null === (t = e.canvasPages) || void 0 === t || t.forEach(function (t) {
                var r;
                null === (r = t.texture) || void 0 === r || r.setRenderableOwner(e, !1);
              });
            }
          }, {
            key: "invalidateVisibleWindowCache",
            value: function invalidateVisibleWindowCache(e) {
              e.visibleWindow.valid = !1, this.setStatus(e, "loading"), this.scheduleUpdateState(e);
            }
          }, {
            key: "invalidateLayoutCache",
            value: function invalidateLayoutCache(e) {
              e.renderInfo = void 0, e.visibleWindow.valid = !1, this.setStatus(e, "loading"), this.scheduleUpdateState(e);
            }
          }, {
            key: "onFontLoaded",
            value: function onFontLoaded(e, t) {
              var r;
              t === (null === (r = e.fontInfo) || void 0 === r ? void 0 : r.cssString) && e.fontInfo && (e.fontInfo.loaded = !0, this.scheduleUpdateState(e));
            }
          }, {
            key: "onFontLoadError",
            value: function onFontLoadError(e, t, r) {
              var n;
              t === (null === (n = e.fontInfo) || void 0 === n ? void 0 : n.cssString) && e.fontInfo && (e.fontInfo.loaded = !0, console.error("CanvasTextRenderer: Error loading font '".concat(e.fontInfo.cssString, "'"), r), this.scheduleUpdateState(e));
            }
          }]);
        }(Ft);
        var Wt = /*#__PURE__*/function (_z2) {
          function Wt(e) {
            _classCallCheck(this, Wt);
            return _callSuper(this, Wt, [{
              renderer: e,
              attributes: ["a_position", "a_textureCoordinate", "a_color"],
              uniforms: [{
                name: "u_resolution",
                uniform: "uniform2fv"
              }, {
                name: "u_pixelRatio",
                uniform: "uniform1f"
              }, {
                name: "u_texture",
                uniform: "uniform2fv"
              }]
            }]);
          }
          _inherits(Wt, _z2);
          return _createClass(Wt, [{
            key: "bindTextures",
            value: function bindTextures(e) {
              var t = this.glw;
              t.activeTexture(0), t.bindTexture(e[0].ctxTexture);
            }
          }]);
        }(z);
        T(Wt, "shaderSources", {
          vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
          fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
        });
        var Yt = /*#__PURE__*/function (_z3) {
          function Yt(e) {
            var _this12;
            _classCallCheck(this, Yt);
            _this12 = _callSuper(this, Yt, [{
              renderer: e,
              attributes: ["a_position", "a_textureCoordinate", "a_color", "a_textureIndex"],
              uniforms: [{
                name: "u_resolution",
                uniform: "uniform2fv"
              }, {
                name: "u_pixelRatio",
                uniform: "uniform1f"
              }, {
                name: "u_textures[0]",
                uniform: "uniform1iv"
              }]
            }]), T(_assertThisInitialized(_this12), "supportsIndexedTextures", !0);
            return _this12;
          }
          _inherits(Yt, _z3);
          return _createClass(Yt, [{
            key: "bindTextures",
            value: function bindTextures(e) {
              var t = this.renderer,
                r = this.glw;
              if (e.length > t.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) throw new Error("DefaultShaderBatched: Cannot bind more than ".concat(t.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS, " textures"));
              e.forEach(function (e, t) {
                r.activeTexture(t), r.bindTexture(e.ctxTexture);
              });
              var n = Array.from(Array(e.length).keys());
              this.setUniform("u_textures[0]", n);
            }
          }]);
        }(z);
        function Ht(e, t) {
          var r,
            n,
            o = 0;
          function i() {
            var i,
              a,
              s = r,
              l = arguments.length;
            e: for (; s;) {
              if (s.args.length === arguments.length) {
                for (a = 0; a < l; a++) if (s.args[a] !== arguments[a]) {
                  s = s.next;
                  continue e;
                }
                return s !== r && (s === n && (n = s.prev), s.prev.next = s.next, s.next && (s.next.prev = s.prev), s.next = r, s.prev = null, r.prev = s, r = s), s.val;
              }
              s = s.next;
            }
            for (i = new Array(l), a = 0; a < l; a++) i[a] = arguments[a];
            return s = {
              args: i,
              val: e.apply(null, i)
            }, r ? (r.prev = s, s.next = r) : n = s, o === t.maxSize ? (n = n.prev).next = null : o++, r = s, s.val;
          }
          return t = t || {}, i.clear = function () {
            r = null, n = null, o = 0;
          }, i;
        }
        T(Yt, "shaderSources", {
          vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
          fragment: function fragment(e) {
            return "\n      #define txUnits ".concat(e, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(e, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(e).keys()).map(function (e) {
              return "\n          ".concat(0 !== e ? "else " : "", "if (idx == ").concat(e, ") {\n            return texture2D(textures[").concat(e, "], uv);\n          }\n        ");
            }).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ");
          }
        });
        var Qt = new Map(),
          $t = function $t(e, t) {
            var r = JSON.stringify(e);
            if (Qt.has(r)) return Qt.get(r);
            var n = (null != e ? e : []).map(function (e) {
              return {
                type: e.type,
                props: t[e.type].resolveDefaults(e.props || {})
              };
            });
            return Qt.set(r, n), n;
          };
        var Kt = /*#__PURE__*/function (_z4) {
          function Kt(e, t, r) {
            var _this13;
            _classCallCheck(this, Kt);
            var n = Kt.createShader(t, r);
            _this13 = _callSuper(this, Kt, [{
              renderer: e,
              attributes: ["a_position", "a_textureCoordinate", "a_color"],
              uniforms: [{
                name: "u_resolution",
                uniform: "uniform2fv"
              }, {
                name: "u_pixelRatio",
                uniform: "uniform1f"
              }, {
                name: "u_texture",
                uniform: "uniform2fv"
              }, {
                name: "u_dimensions",
                uniform: "uniform2fv"
              }, {
                name: "u_alpha",
                uniform: "uniform1f"
              }].concat(_toConsumableArray(n.uniforms)),
              shaderSources: {
                vertex: n.vertex,
                fragment: n.fragment
              }
            }]), T(_assertThisInitialized(_this13), "effects", []), _this13.effects = n.effects, _this13.calculateProps = Ht(_this13.calculateProps.bind(_assertThisInitialized(_this13)));
            return _this13;
          }
          _inherits(Kt, _z4);
          return _createClass(Kt, [{
            key: "bindTextures",
            value: function bindTextures(e) {
              var t = this.glw;
              t.activeTexture(0), t.bindTexture(e[0].ctxTexture);
            }
          }, {
            key: "calculateProps",
            value: function calculateProps(e) {
              var _this14 = this;
              var t = this.renderer.shManager.getRegisteredEffects(),
                r = [];
              return null == e || e.forEach(function (e, n) {
                var o,
                  i = _this14.effects[n],
                  a = t[i.name],
                  s = null !== (o = e.props) && void 0 !== o ? o : {},
                  l = i.uniformInfo;
                Object.keys(s).forEach(function (e) {
                  var t = a.uniforms[e],
                    n = l[e],
                    o = t.validator ? t.validator(s[e], s) : s[e];
                  Array.isArray(o) && (o = new Float32Array(o)), r.push({
                    name: n.name,
                    value: o
                  });
                });
              }), r;
            }
          }, {
            key: "bindProps",
            value: function bindProps(e) {
              var _this15 = this;
              this.calculateProps(e.effects).forEach(function (e) {
                _this15.setUniform(e.name, e.value);
              });
            }
          }, {
            key: "canBatchShaderProps",
            value: function canBatchShaderProps(e, t) {
              if (e.$dimensions.width !== t.$dimensions.width || e.$dimensions.height !== t.$dimensions.height || e.effects.length !== t.effects.length) return !1;
              for (var r = e.effects.length, n = 0; n < r; n++) {
                var o = e.effects[n],
                  i = t.effects[n];
                if (o.type !== i.type) return !1;
                for (var a in o.props) if (i.props && !i.props[a] || o.props[a] !== i.props[a]) return !1;
              }
              return !0;
            }
          }], [{
            key: "createShader",
            value: function createShader(e, t) {
              var r = {},
                n = {},
                o = "",
                i = [],
                a = [],
                s = e.effects.map(function (e) {
                  var n = t[e.type],
                    s = n.getEffectKey(e.props || {});
                  r[s] = r[s] ? ++r[s] : 1;
                  var l = r[s];
                  1 === l && a.push({
                    key: s,
                    type: e.type,
                    props: e.props
                  });
                  var u = new n({
                    ref: "".concat(s).concat(1 === l ? "" : l),
                    target: s,
                    props: e.props
                  });
                  return o += u.declaredUniforms, i.push.apply(i, _toConsumableArray(Object.values(u.uniformInfo))), u;
                }),
                l = "";
              null == a || a.forEach(function (e) {
                var r,
                  o = t[e.type],
                  i = o.resolveDefaults(null !== (r = e.props) && void 0 !== r ? r : {}),
                  a = [];
                for (var s in o.methods) {
                  var u = s,
                    c = o.methods[s];
                  n[s] && n[s] !== c && (u = Kt.resolveMethodDuplicate(s, c, n)), n[u] = c.replace("function", u), a.push({
                    m: s,
                    cm: u
                  });
                }
                var d = o.onShaderMask instanceof Function ? o.onShaderMask(i) : o.onShaderMask,
                  h = o.onColorize instanceof Function ? o.onColorize(i) : o.onColorize,
                  f = o.onEffectMask instanceof Function ? o.onEffectMask(i) : o.onEffectMask;
                a.forEach(function (e) {
                  var t = e.m,
                    r = e.cm,
                    n = new RegExp("\\$".concat(t), "g");
                  d && (d = d.replace(n, r)), h && (h = h.replace(n, r)), f && (f = f.replace(n, r));
                });
                var p = o.getMethodParameters(o.uniforms, i),
                  v = p.length > 0 ? ", ".concat(p) : "";
                d && (l += "\n        float fx_".concat(e.key, "_onShaderMask(float shaderMask ").concat(v, ") {\n          ").concat(d, "\n        }\n        ")), h && (l += "\n          vec4 fx_".concat(e.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(v, ") {\n            ").concat(h, "\n          }\n        ")), f && (l += "\n          vec4 fx_".concat(e.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(v, ") {\n            ").concat(f, "\n          }\n        "));
              });
              var u = "";
              for (var c in n) u += n[c];
              for (var d = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))", h = "\n\n    ", f = 0; f < s.length; f++) {
                var p = s[f],
                  v = p.passParameters.length > 0 ? ", ".concat(p.passParameters) : "",
                  g = t[p.name];
                g.onShaderMask && (h += "\n        shaderMask = fx_".concat(p.target, "_onShaderMask(shaderMask ").concat(v, ");\n        ")), g.onColorize && (h += "\n        maskColor = fx_".concat(p.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(v, ");\n        ")), g.onEffectMask && (d = "fx_".concat(p.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(v, ")"));
                var m = s[f + 1];
                (void 0 === m || t[m.name].onEffectMask) && (h += "\n          shaderColor = ".concat(d, ";\n        "));
              }
              return {
                effects: s,
                uniforms: i,
                fragment: Kt.fragment(o, u, l, h),
                vertex: Kt.vertex()
              };
            }
          }, {
            key: "resolveMethodDuplicate",
            value: function resolveMethodDuplicate(e, t, r) {
              var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
              var o = e + (n > 0 ? n : "");
              return r[o] && r[o] !== t ? this.resolveMethodDuplicate(e, t, r, ++n) : o;
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e, t) {
              return {
                effects: $t(e.effects, t),
                $dimensions: {
                  width: 0,
                  height: 0
                },
                $alpha: 0
              };
            }
          }, {
            key: "makeCacheKey",
            value: function makeCacheKey(e, t) {
              var r,
                n = "";
              return null === (r = e.effects) || void 0 === r || r.forEach(function (e) {
                var r = t[e.type].getEffectKey(e.props || {});
                n += ",".concat(r);
              }), "DynamicShader".concat(n);
            }
          }]);
        }(z);
        T(Kt, "z$__type__Props", void 0), T(Kt, "vertex", function () {
          return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ";
        }), T(Kt, "fragment", function (e, t, r, n) {
          return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(e, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(t, "\n\n    ").concat(r, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(n, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  ");
        });
        var Xt = /*#__PURE__*/function (_z5) {
          function Xt(e) {
            _classCallCheck(this, Xt);
            return _callSuper(this, Xt, [{
              renderer: e,
              attributes: ["a_position", "a_textureCoordinate", "a_color"],
              uniforms: [{
                name: "u_resolution",
                uniform: "uniform2fv"
              }, {
                name: "u_pixelRatio",
                uniform: "uniform1f"
              }, {
                name: "u_texture",
                uniform: "uniform2f"
              }, {
                name: "u_dimensions",
                uniform: "uniform2fv"
              }, {
                name: "u_radius",
                uniform: "uniform1f"
              }]
            }]);
          }
          _inherits(Xt, _z5);
          return _createClass(Xt, [{
            key: "bindTextures",
            value: function bindTextures(e) {
              var t = this.glw;
              t.activeTexture(0), t.bindTexture(e[0].ctxTexture);
            }
          }, {
            key: "bindProps",
            value: function bindProps(e) {
              this.setUniform("u_radius", e.radius);
            }
          }, {
            key: "canBatchShaderProps",
            value: function canBatchShaderProps(e, t) {
              return e.radius === t.radius && e.$dimensions.width === t.$dimensions.width && e.$dimensions.height === t.$dimensions.height;
            }
          }], [{
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              return {
                radius: e.radius || 10,
                $dimensions: {
                  width: 0,
                  height: 0
                }
              };
            }
          }]);
        }(z);
        T(Xt, "z$__type__Props", void 0), T(Xt, "shaderSources", {
          vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
          fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
        });
        var Gt = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        var Vt = /*#__PURE__*/function (_z6) {
          function Vt(e) {
            _classCallCheck(this, Vt);
            return _callSuper(this, Vt, [{
              renderer: e,
              attributes: ["a_position", "a_textureCoordinate"],
              uniforms: [{
                name: "u_resolution",
                uniform: "uniform2fv"
              }, {
                name: "u_transform",
                uniform: "uniformMatrix3fv"
              }, {
                name: "u_scrollY",
                uniform: "uniform1f"
              }, {
                name: "u_pixelRatio",
                uniform: "uniform1f"
              }, {
                name: "u_texture",
                uniform: "uniform2f"
              }, {
                name: "u_color",
                uniform: "uniform4fv"
              }, {
                name: "u_size",
                uniform: "uniform1f"
              }, {
                name: "u_distanceRange",
                uniform: "uniform1f"
              }, {
                name: "u_debug",
                uniform: "uniform1i"
              }]
            }]);
          }
          _inherits(Vt, _z6);
          return _createClass(Vt, [{
            key: "bindTextures",
            value: function bindTextures(e) {
              var t = this.glw;
              t.activeTexture(0), t.bindTexture(e[0].ctxTexture);
            }
          }, {
            key: "bindProps",
            value: function bindProps(e) {
              var t = Vt.resolveDefaults(e);
              for (var r in t) if ("transform" === r) this.setUniform("u_transform", !1, t[r]);else if ("scrollY" === r) this.setUniform("u_scrollY", t[r]);else if ("color" === r) {
                var n = O(t.color);
                this.setUniform("u_color", n);
              } else "size" === r ? this.setUniform("u_size", t[r]) : "distanceRange" === r ? this.setUniform("u_distanceRange", t[r]) : "debug" === r && this.setUniform("u_debug", t[r] ? 1 : 0);
            }
          }], [{
            key: "resolveDefaults",
            value: function resolveDefaults() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var t, r, n, o, i, a;
              return {
                transform: null !== (t = e.transform) && void 0 !== t ? t : Gt,
                scrollY: null !== (r = e.scrollY) && void 0 !== r ? r : 0,
                color: null !== (n = e.color) && void 0 !== n ? n : 4294967295,
                size: null !== (o = e.size) && void 0 !== o ? o : 16,
                distanceRange: null !== (i = e.distanceRange) && void 0 !== i ? i : 1,
                debug: null !== (a = e.debug) && void 0 !== a && a
              };
            }
          }]);
        }(z);
        T(Vt, "shaderSources", {
          vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
          fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
        });
        var qt = /*#__PURE__*/function (_Bt) {
          function qt() {
            var _this16;
            _classCallCheck(this, qt);
            for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              e[_key2] = arguments[_key2];
            }
            _this16 = _callSuper(this, qt, [].concat(e)), T(_assertThisInitialized(_this16), "name", "radius");
            return _this16;
          }
          _inherits(qt, _Bt);
          return _createClass(qt, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "radius";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t;
              return {
                radius: null !== (t = e.radius) && void 0 !== t ? t : 10
              };
            }
          }]);
        }(Bt);
        T(qt, "z$__type__Props", void 0), T(qt, "uniforms", {
          radius: {
            value: 0,
            method: "uniform4fv",
            type: "vec4",
            validator: function validator(e) {
              var t = e;
              return Array.isArray(t) ? 2 === t.length ? t = [t[0], t[1], t[0], t[1]] : 3 === t.length ? t = [t[0], t[1], t[2], t[0]] : 4 !== t.length && (t = [t[0], t[0], t[0], t[0]]) : "number" == typeof t && (t = [t, t, t, t]), t;
            }
          }
        }), T(qt, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
        }), T(qt, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  "), T(qt, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
        var Zt = /*#__PURE__*/function (_Bt2) {
          function Zt() {
            var _this17;
            _classCallCheck(this, Zt);
            for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              e[_key3] = arguments[_key3];
            }
            _this17 = _callSuper(this, Zt, [].concat(e)), T(_assertThisInitialized(_this17), "name", "border");
            return _this17;
          }
          _inherits(Zt, _Bt2);
          return _createClass(Zt, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "border";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 10,
                color: null !== (r = e.color) && void 0 !== r ? r : 4294967295
              };
            }
          }]);
        }(Bt);
        T(Zt, "z$__type__Props", void 0), T(Zt, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return O(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(Zt, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  "), T(Zt, "onColorize", "\n    return color;\n  ");
        var Jt = /*#__PURE__*/function (_Bt3) {
          function Jt() {
            var _this18;
            _classCallCheck(this, Jt);
            for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              e[_key4] = arguments[_key4];
            }
            _this18 = _callSuper(this, Jt, [].concat(e)), T(_assertThisInitialized(_this18), "name", "linearGradient");
            return _this18;
          }
          _inherits(Jt, _Bt3);
          return _createClass(Jt, null, [{
            key: "getEffectKey",
            value: function getEffectKey(e) {
              return "linearGradient".concat(e.colors.length);
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t,
                r,
                n = null !== (t = e.colors) && void 0 !== t ? t : [4278190080, 4294967295],
                o = e.stops || [];
              if (0 === o.length || o.length !== n.length) {
                for (var i = n.length, a = 0, s = o; a < i; a++) o[a] ? (s[a] = o[a], void 0 === o[a - 1] && void 0 !== s[a - 2] && (s[a - 1] = s[a - 2] + (o[a] - s[a - 2]) / 2)) : s[a] = a * (1 / (n.length - 1));
                o = s;
              }
              return {
                colors: n,
                stops: o,
                angle: null !== (r = e.angle) && void 0 !== r ? r : 0
              };
            }
          }]);
        }(Bt);
        le = Jt, T(Jt, "z$__type__Props", void 0), T(Jt, "uniforms", {
          angle: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          colors: {
            value: 4294967295,
            validator: function validator(e) {
              return e.map(function (e) {
                return O(e);
              }).reduce(function (e, t) {
                return e.concat(t);
              }, []);
            },
            size: function size(e) {
              return e.colors.length;
            },
            method: "uniform4fv",
            type: "vec4"
          },
          stops: {
            value: [],
            size: function size(e) {
              return e.colors.length;
            },
            method: "uniform1fv",
            type: "float"
          }
        }), T(Jt, "methods", {
          fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
          toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
          calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
        }), T(Jt, "ColorLoop", function (e) {
          for (var t = "", r = 2; r < e; r++) t += "colorOut = mix(colorOut, colors[".concat(r, "], clamp((dist - stops[").concat(r - 1, "]) / (stops[").concat(r, "] - stops[").concat(r - 1, "]), 0.0, 1.0));");
          return t;
        }), T(Jt, "onColorize", function (e) {
          var t = e.colors.length || 1;
          return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(le.ColorLoop(t), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
        });
        var er = /*#__PURE__*/function (_Bt4) {
          function er() {
            var _this19;
            _classCallCheck(this, er);
            for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              e[_key5] = arguments[_key5];
            }
            _this19 = _callSuper(this, er, [].concat(e)), T(_assertThisInitialized(_this19), "name", "grayscale");
            return _this19;
          }
          _inherits(er, _Bt4);
          return _createClass(er, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "grayscale";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t;
              return {
                amount: null !== (t = e.amount) && void 0 !== t ? t : 1
              };
            }
          }]);
        }(Bt);
        T(er, "uniforms", {
          amount: {
            value: 1,
            method: "uniform1f",
            type: "float"
          }
        }), T(er, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
        var tr = /*#__PURE__*/function (_Bt5) {
          function tr() {
            var _this20;
            _classCallCheck(this, tr);
            for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              e[_key6] = arguments[_key6];
            }
            _this20 = _callSuper(this, tr, [].concat(e)), T(_assertThisInitialized(_this20), "name", "borderRight");
            return _this20;
          }
          _inherits(tr, _Bt5);
          return _createClass(tr, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "borderRight";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 10,
                color: null !== (r = e.color) && void 0 !== r ? r : 4294967295
              };
            }
          }]);
        }(Bt);
        T(tr, "z$__type__Props", void 0), T(tr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return O(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(tr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(tr, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(tr, "onColorize", "\n    return color;\n  ");
        var rr = /*#__PURE__*/function (_Bt6) {
          function rr() {
            var _this21;
            _classCallCheck(this, rr);
            for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              e[_key7] = arguments[_key7];
            }
            _this21 = _callSuper(this, rr, [].concat(e)), T(_assertThisInitialized(_this21), "name", "borderTop");
            return _this21;
          }
          _inherits(rr, _Bt6);
          return _createClass(rr, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "borderTop";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 10,
                color: null !== (r = e.color) && void 0 !== r ? r : 4294967295
              };
            }
          }]);
        }(Bt);
        T(rr, "z$__type__Props", void 0), T(rr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return O(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(rr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(rr, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(rr, "onColorize", "\n    return color;\n  ");
        var nr = /*#__PURE__*/function (_Bt7) {
          function nr() {
            var _this22;
            _classCallCheck(this, nr);
            for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              e[_key8] = arguments[_key8];
            }
            _this22 = _callSuper(this, nr, [].concat(e)), T(_assertThisInitialized(_this22), "name", "borderBottom");
            return _this22;
          }
          _inherits(nr, _Bt7);
          return _createClass(nr, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "borderBottom";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 10,
                color: null !== (r = e.color) && void 0 !== r ? r : 4294967295
              };
            }
          }]);
        }(Bt);
        T(nr, "z$__type__Props", void 0), T(nr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return O(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(nr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(nr, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(nr, "onColorize", "\n    return color;\n  ");
        var or = /*#__PURE__*/function (_Bt8) {
          function or() {
            var _this23;
            _classCallCheck(this, or);
            for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              e[_key9] = arguments[_key9];
            }
            _this23 = _callSuper(this, or, [].concat(e)), T(_assertThisInitialized(_this23), "name", "borderLeft");
            return _this23;
          }
          _inherits(or, _Bt8);
          return _createClass(or, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "borderLeft";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 10,
                color: null !== (r = e.color) && void 0 !== r ? r : 4294967295
              };
            }
          }]);
        }(Bt);
        T(or, "z$__type__Props", void 0), T(or, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return O(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(or, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(or, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(or, "onColorize", "\n    return color;\n  ");
        var ir = /*#__PURE__*/function (_Bt9) {
          function ir() {
            var _this24;
            _classCallCheck(this, ir);
            for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              e[_key10] = arguments[_key10];
            }
            _this24 = _callSuper(this, ir, [].concat(e)), T(_assertThisInitialized(_this24), "name", "glitch");
            return _this24;
          }
          _inherits(ir, _Bt9);
          return _createClass(ir, null, [{
            key: "getEffectKey",
            value: function getEffectKey(e) {
              return "glitch";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r, n, o, i;
              return {
                amplitude: null !== (t = e.amplitude) && void 0 !== t ? t : .2,
                narrowness: null !== (r = e.narrowness) && void 0 !== r ? r : 4,
                blockiness: null !== (n = e.blockiness) && void 0 !== n ? n : 2,
                minimizer: null !== (o = e.minimizer) && void 0 !== o ? o : 8,
                time: null !== (i = e.time) && void 0 !== i ? i : Date.now()
              };
            }
          }]);
        }(Bt);
        T(ir, "z$__type__Props", void 0), T(ir, "uniforms", {
          amplitude: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          narrowness: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          blockiness: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          minimizer: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          time: {
            value: 0,
            method: "uniform1f",
            validator: function validator(e) {
              return (Date.now() - e) % 1e3;
            },
            type: "float"
          }
        }), T(ir, "methods", {
          rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
          noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
          fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
        }), T(ir, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
        var ar = /*#__PURE__*/function (_Bt10) {
          function ar() {
            var _this25;
            _classCallCheck(this, ar);
            for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              e[_key11] = arguments[_key11];
            }
            _this25 = _callSuper(this, ar, [].concat(e)), T(_assertThisInitialized(_this25), "name", "fadeOut");
            return _this25;
          }
          _inherits(ar, _Bt10);
          return _createClass(ar, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "fadeOut";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t;
              return {
                fade: null !== (t = e.fade) && void 0 !== t ? t : 10
              };
            }
          }]);
        }(Bt);
        T(ar, "z$__type__Props", void 0), T(ar, "uniforms", {
          fade: {
            value: 0,
            method: "uniform4fv",
            type: "vec4",
            validator: function validator(e) {
              var t = e;
              return Array.isArray(t) ? 2 === t.length ? t = [t[0], t[1], t[0], t[1]] : 3 === t.length ? t = [t[0], t[1], t[2], t[0]] : 4 !== t.length && (t = [t[0], t[0], t[0], t[0]]) : "number" == typeof t && (t = [t, t, t, t]), t;
            }
          }
        }), T(ar, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
        var sr = /*#__PURE__*/function (_Bt11) {
          function sr() {
            var _this26;
            _classCallCheck(this, sr);
            for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              e[_key12] = arguments[_key12];
            }
            _this26 = _callSuper(this, sr, [].concat(e)), T(_assertThisInitialized(_this26), "name", "radialGradient");
            return _this26;
          }
          _inherits(sr, _Bt11);
          return _createClass(sr, null, [{
            key: "getEffectKey",
            value: function getEffectKey(e) {
              return "radialGradient".concat(e.colors.length);
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t,
                r,
                n,
                o,
                i,
                a = null !== (t = e.colors) && void 0 !== t ? t : [4278190080, 4294967295],
                s = e.stops || [];
              if (0 === s.length || s.length !== a.length) {
                for (var l = a.length, u = 0, c = s; u < l; u++) s[u] ? (c[u] = s[u], void 0 === s[u - 1] && void 0 !== c[u - 2] && (c[u - 1] = c[u - 2] + (s[u] - c[u - 2]) / 2)) : c[u] = u * (1 / (a.length - 1));
                s = c;
              }
              return {
                colors: a,
                stops: s,
                width: null !== (r = e.width) && void 0 !== r ? r : 0,
                height: null !== (n = null !== (o = e.height) && void 0 !== o ? o : e.width) && void 0 !== n ? n : 0,
                pivot: null !== (i = e.pivot) && void 0 !== i ? i : [.5, .5]
              };
            }
          }]);
        }(Bt);
        ue = sr, T(sr, "z$__type__Props", void 0), T(sr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          height: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          pivot: {
            value: [.5, .5],
            method: "uniform2fv",
            type: "vec2"
          },
          colors: {
            value: 4294967295,
            validator: function validator(e) {
              return e.map(function (e) {
                return O(e);
              }).reduce(function (e, t) {
                return e.concat(t);
              }, []);
            },
            size: function size(e) {
              return e.colors.length;
            },
            method: "uniform4fv",
            type: "vec4"
          },
          stops: {
            value: [],
            size: function size(e) {
              return e.colors.length;
            },
            method: "uniform1fv",
            type: "float"
          }
        }), T(sr, "ColorLoop", function (e) {
          for (var t = "", r = 2; r < e; r++) t += "colorOut = mix(colorOut, colors[".concat(r, "], clamp((dist - stops[").concat(r - 1, "]) / (stops[").concat(r, "] - stops[").concat(r - 1, "]), 0.0, 1.0));");
          return t;
        }), T(sr, "onColorize", function (e) {
          var t = e.colors.length || 1;
          return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(ue.ColorLoop(t), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
        });
        var lr = /*#__PURE__*/function (_Bt12) {
          function lr() {
            var _this27;
            _classCallCheck(this, lr);
            for (var _len13 = arguments.length, e = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
              e[_key13] = arguments[_key13];
            }
            _this27 = _callSuper(this, lr, [].concat(e)), T(_assertThisInitialized(_this27), "name", "radialProgress");
            return _this27;
          }
          _inherits(lr, _Bt12);
          return _createClass(lr, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "radialProgress";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r, n, o, i, a, s;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 10,
                progress: null !== (r = e.progress) && void 0 !== r ? r : .5,
                offset: null !== (n = e.offset) && void 0 !== n ? n : 0,
                range: null !== (o = e.range) && void 0 !== o ? o : 2 * Math.PI,
                rounded: null !== (i = e.rounded) && void 0 !== i && i,
                radius: null !== (a = e.radius) && void 0 !== a ? a : 1,
                color: null !== (s = e.color) && void 0 !== s ? s : 4294967295
              };
            }
          }]);
        }(Bt);
        T(lr, "z$__type__Props", void 0), T(lr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          progress: {
            value: .5,
            method: "uniform1f",
            type: "float"
          },
          offset: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          range: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          rounded: {
            value: 0,
            method: "uniform1f",
            type: "float",
            validator: function validator(e) {
              return e ? 1 : 0;
            }
          },
          radius: {
            value: 1,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return O(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(lr, "methods", {
          rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
          drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
        }), T(lr, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  "), T(lr, "onColorize", "\n    return color;\n  ");
        var ur = /*#__PURE__*/function (_Bt13) {
          function ur() {
            var _this28;
            _classCallCheck(this, ur);
            for (var _len14 = arguments.length, e = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
              e[_key14] = arguments[_key14];
            }
            _this28 = _callSuper(this, ur, [].concat(e)), T(_assertThisInitialized(_this28), "name", "holePunch");
            return _this28;
          }
          _inherits(ur, _Bt13);
          return _createClass(ur, null, [{
            key: "getEffectKey",
            value: function getEffectKey() {
              return "holePunch";
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t;
              return {
                x: e.x || 0,
                y: e.y || 0,
                width: e.width || 50,
                height: e.height || 50,
                radius: null !== (t = e.radius) && void 0 !== t ? t : 0
              };
            }
          }]);
        }(Bt);
        T(ur, "z$__type__Props", void 0), T(ur, "uniforms", {
          x: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          y: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          height: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          radius: {
            value: 0,
            method: "uniform4fv",
            type: "vec4",
            validator: function validator(e) {
              var t = e;
              return Array.isArray(t) ? 2 === t.length ? t = [t[0], t[1], t[0], t[1]] : 3 === t.length ? t = [t[0], t[1], t[2], t[0]] : 4 !== t.length && (t = [t[0], t[0], t[0], t[0]]) : "number" == typeof t && (t = [t, t, t, t]), t;
            }
          }
        }), T(ur, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
        }), T(ur, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  "), T(ur, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
        var cr = "RoundedRectangle";
        var dr = /*#__PURE__*/function (_D2) {
          function dr(e) {
            var _this29;
            _classCallCheck(this, dr);
            _this29 = _callSuper(this, dr), T(_assertThisInitialized(_this29), "shType", void 0), _this29.shType = e, e !== cr && console.warn("Unsupported shader:", e);
            return _this29;
          }
          _inherits(dr, _D2);
          return _createClass(dr, [{
            key: "bindRenderOp",
            value: function bindRenderOp() {}
          }, {
            key: "bindProps",
            value: function bindProps() {}
          }, {
            key: "attach",
            value: function attach() {}
          }, {
            key: "detach",
            value: function detach() {}
          }]);
        }(D);
        var hr = /*#__PURE__*/function () {
          function hr() {
            _classCallCheck(this, hr);
            T(this, "shCache", new Map()), T(this, "shConstructors", {}), T(this, "attachedShader", null), T(this, "effectConstructors", {}), T(this, "renderer", void 0), this.registerShaderType("DefaultShader", Wt), this.registerShaderType("DefaultShaderBatched", Yt), this.registerShaderType("RoundedRectangle", Xt), this.registerShaderType("DynamicShader", Kt), this.registerShaderType("SdfShader", Vt), this.registerEffectType("border", Zt), this.registerEffectType("borderBottom", nr), this.registerEffectType("borderLeft", or), this.registerEffectType("borderRight", tr), this.registerEffectType("borderTop", rr), this.registerEffectType("fadeOut", ar), this.registerEffectType("linearGradient", Jt), this.registerEffectType("radialGradient", sr), this.registerEffectType("grayscale", er), this.registerEffectType("glitch", ir), this.registerEffectType("radius", qt), this.registerEffectType("radialProgress", lr), this.registerEffectType("holePunch", ur);
          }
          return _createClass(hr, [{
            key: "registerShaderType",
            value: function registerShaderType(e, t) {
              this.shConstructors[e] = t;
            }
          }, {
            key: "registerEffectType",
            value: function registerEffectType(e, t) {
              this.effectConstructors[e] = t;
            }
          }, {
            key: "getRegisteredEffects",
            value: function getRegisteredEffects() {
              return this.effectConstructors;
            }
          }, {
            key: "getRegisteredShaders",
            value: function getRegisteredShaders() {
              return this.shConstructors;
            }
          }, {
            key: "loadShader",
            value: function loadShader(e, t) {
              if (!this.renderer) throw new Error("Renderer is not been defined");
              var r = this.shConstructors[e];
              if (!r) throw new Error("Shader type \"".concat(e, "\" is not registered"));
              if ("canvas" === this.renderer.mode && r.prototype instanceof z) return {
                shader: new dr(e),
                props: t
              };
              if ("DynamicShader" === e) return this.loadDynamicShader(t);
              var n = r.resolveDefaults(t),
                o = r.makeCacheKey(n) || r.name;
              if (o && this.shCache.has(o)) return {
                shader: this.shCache.get(o),
                props: n
              };
              var i = new r(this.renderer, t);
              return o && this.shCache.set(o, i), {
                shader: i,
                props: n
              };
            }
          }, {
            key: "loadDynamicShader",
            value: function loadDynamicShader(e) {
              if (!this.renderer) throw new Error("Renderer is not been defined");
              var t = Kt.resolveDefaults(e, this.effectConstructors),
                r = Kt.makeCacheKey(t, this.effectConstructors);
              if (r && this.shCache.has(r)) return {
                shader: this.shCache.get(r),
                props: t
              };
              var n = new Kt(this.renderer, e, this.effectConstructors);
              return r && this.shCache.set(r, n), {
                shader: n,
                props: t
              };
            }
          }, {
            key: "useShader",
            value: function useShader(e) {
              this.attachedShader !== e && (this.attachedShader && this.attachedShader.detach(), e.attach(), this.attachedShader = e);
            }
          }]);
        }();
        var fr = function () {
            var e = w(y().mark(function e(t) {
              var r, n;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, fetch(t);
                  case 2:
                    return r = e.sent, e.next = 5, r.arrayBuffer();
                  case 5:
                    if (n = e.sent, -1 === t.indexOf(".ktx")) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", pr(n));
                  case 8:
                    return e.abrupt("return", vr(n));
                  case 9:
                  case "end":
                    return e.stop();
                }
              }, e);
            }));
            return function (t) {
              return e.apply(this, arguments);
            };
          }(),
          pr = function () {
            var e = w(y().mark(function e(t) {
              var r, n, o, i, a, s, l;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (r = new DataView(t), n = 16909060 === r.getUint32(12), o = [], i = {
                      glInternalFormat: r.getUint32(28, n),
                      pixelWidth: r.getUint32(36, n),
                      pixelHeight: r.getUint32(40, n),
                      numberOfMipmapLevels: r.getUint32(56, n),
                      bytesOfKeyValueData: r.getUint32(60, n)
                    }, a = 64, a += i.bytesOfKeyValueData, s = 0; s < i.numberOfMipmapLevels; s++) l = r.getUint32(a), a += 4, o.push(r.buffer.slice(a, l)), a += l;
                    return e.abrupt("return", {
                      data: {
                        glInternalFormat: i.glInternalFormat,
                        mipmaps: o,
                        width: i.pixelWidth || 0,
                        height: i.pixelHeight || 0,
                        type: "ktx"
                      },
                      premultiplyAlpha: !1
                    });
                  case 8:
                  case "end":
                    return e.stop();
                }
              }, e);
            }));
            return function (t) {
              return e.apply(this, arguments);
            };
          }(),
          vr = function () {
            var e = w(y().mark(function e(t) {
              var r, n, o, i, a, s, l, u, c, d, h, f;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (13, 36196, 7, 6, 11, 12, r = t, n = new Int32Array(r, 0, 13), o = n[12] + 52, i = new Uint8Array(r, o), a = [], s = {
                      pixelWidth: n[7],
                      pixelHeight: n[6],
                      numberOfMipmapLevels: n[11] || 0
                    }, l = 0, u = s.pixelWidth || 0, c = s.pixelHeight || 0, d = 0; d < s.numberOfMipmapLevels; d++) h = (u + 3 >> 2) * (c + 3 >> 2) * 8, f = new Uint8Array(r, i.byteOffset + l, h), a.push(f), l += h, u >>= 1, c >>= 1;
                    return e.abrupt("return", {
                      data: {
                        glInternalFormat: 36196,
                        mipmaps: a,
                        width: s.pixelWidth || 0,
                        height: s.pixelHeight || 0,
                        type: "pvr"
                      },
                      premultiplyAlpha: !1
                    });
                  case 17:
                  case "end":
                    return e.stop();
                }
              }, e);
            }));
            return function (t) {
              return e.apply(this, arguments);
            };
          }();
        var gr = /*#__PURE__*/function (_j2) {
          function gr(e, t) {
            var _this30;
            _classCallCheck(this, gr);
            _this30 = _callSuper(this, gr, [e]), T(_assertThisInitialized(_this30), "props", void 0), _this30.props = gr.resolveDefaults(t);
            return _this30;
          }
          _inherits(gr, _j2);
          return _createClass(gr, [{
            key: "hasAlphaChannel",
            value: function hasAlphaChannel(e) {
              return -1 !== e.indexOf("image/png");
            }
          }, {
            key: "getTextureData",
            value: function getTextureData() {
              var e = this;
              return w(y().mark(function t() {
                var r, n, o, i, a, s, l;
                return y().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (r = e.props, n = r.src, o = r.premultiplyAlpha, n) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", {
                        data: null
                      });
                    case 3:
                      if (!(n instanceof ImageData)) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", {
                        data: n,
                        premultiplyAlpha: o
                      });
                    case 5:
                      if (!/\.(ktx|pvr)$/.test(n)) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return", fr(n));
                    case 7:
                      if (!e.txManager.imageWorkerManager) {
                        t.next = 13;
                        break;
                      }
                      return t.next = 10, e.txManager.imageWorkerManager.getImage(n, o);
                    case 10:
                      return t.abrupt("return", t.sent);
                    case 13:
                      if (!e.txManager.hasCreateImageBitmap) {
                        t.next = 28;
                        break;
                      }
                      return t.next = 16, fetch(n);
                    case 16:
                      return i = t.sent, t.next = 19, i.blob();
                    case 19:
                      return a = t.sent, s = null != o ? o : e.hasAlphaChannel(a.type), t.next = 23, createImageBitmap(a, {
                        premultiplyAlpha: s ? "premultiply" : "none",
                        colorSpaceConversion: "none",
                        imageOrientation: "none"
                      });
                    case 23:
                      return t.t0 = t.sent, t.t1 = s, t.abrupt("return", {
                        data: t.t0,
                        premultiplyAlpha: t.t1
                      });
                    case 28:
                      return l = new Image(), "data:" !== n.substr(0, 5) && (l.crossOrigin = "Anonymous"), l.src = n, t.next = 33, new Promise(function (e, t) {
                        l.onload = function () {
                          return e();
                        }, l.onerror = function () {
                          return t(new Error("Failed to load image"));
                        };
                      })["catch"](function (e) {
                        console.error(e);
                      });
                    case 33:
                      return t.abrupt("return", {
                        data: l,
                        premultiplyAlpha: null == o || o
                      });
                    case 34:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))();
            }
          }], [{
            key: "makeCacheKey",
            value: function makeCacheKey(e) {
              var t = gr.resolveDefaults(e);
              return !(t.src instanceof ImageData) && "ImageTexture,".concat(t.src, ",").concat(t.premultiplyAlpha);
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r;
              return {
                src: null !== (t = e.src) && void 0 !== t ? t : "",
                premultiplyAlpha: null === (r = e.premultiplyAlpha) || void 0 === r || r
              };
            }
          }]);
        }(j);
        T(gr, "z$__type__Props", void 0);
        var mr = /*#__PURE__*/function () {
          function mr(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            _classCallCheck(this, mr);
            T(this, "iterator", void 0), T(this, "peekBuffer", []), T(this, "_lastIndex", void 0), this.iterator = e, this.iterator = e, this._lastIndex = t - 1, this.peekBuffer = [];
          }
          return _createClass(mr, [{
            key: "next",
            value: function next() {
              var e = this.peekBuffer.length > 0 ? this.peekBuffer.pop() : this.iterator.next();
              return e.done ? this._lastIndex = -1 : this._lastIndex++, e;
            }
          }, {
            key: "peek",
            value: function peek() {
              if (this.peekBuffer.length > 0) return this.peekBuffer[0];
              var e = this.iterator.next();
              return this.peekBuffer.push(e), e;
            }
          }, {
            key: "lastIndex",
            get: function get() {
              return this._lastIndex;
            }
          }]);
        }();
        function xr(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r, n;
          return y().wrap(function (o) {
            for (;;) switch (o.prev = o.next) {
              case 0:
                r = t;
              case 1:
                if (!(r < e.length)) {
                  o.next = 10;
                  break;
                }
                if (void 0 !== (n = e.codePointAt(r))) {
                  o.next = 5;
                  break;
                }
                throw new Error("Invalid Unicode code point");
              case 5:
                return o.next = 7, n;
              case 7:
                r += n <= 65535 ? 1 : 2, o.next = 1;
                break;
              case 10:
              case "end":
                return o.stop();
            }
          }, ce);
        }
        function yr(e, t, r, n, o, i, a, s, l, u, c, d, h, f, p, v, g, m, x) {
          I(p, "Font face must be loaded"), I(p.loaded, "Font face must be loaded"), I(p.data, "Font face must be loaded"), I(p.shaper, "Font face must be loaded");
          for (var y, b = s / p.data.info.size, w = l / b, S = i / b, A = u / b, T = h[e], C = (null == T ? void 0 : T.codepointIndex) || 0, _ = (null == T ? void 0 : T.maxX) || 0, E = (null == T ? void 0 : T.maxY) || 0, k = t, N = r, B = 0, O = {
              codepointIndex: -1,
              bufferOffset: -1,
              xStart: -1
            }, F = p.shaper, L = {
              letterSpacing: A
            }, P = F.shapeText(L, new mr(xr(n, C), C)), M = -1, z = [], D = a / b, j = function (e, t, r) {
              var n,
                o = 0,
                i = R(r.shapeText(t, new mr(xr(e, 0), 0)));
              try {
                for (i.s(); !(n = i.n()).done;) {
                  var a = n.value;
                  a.mapped && (o += a.xAdvance);
                }
              } catch (s) {
                i.e(s);
              } finally {
                i.f();
              }
              return o;
            }(m, L, F), U = !0; U;) {
            for (var W = (0 === x || e + 1 < x) && ("both" !== d || g || N + w + p.maxCharHeight <= D), Y = W ? S : S - j, H = 0, Q = N + w >= f.y1, $ = N <= f.y2, K = Q && $; (y = P.next()) && !y.done;) {
              var X = y.value;
              if (e === h.length) h.push({
                codepointIndex: X.cluster,
                maxY: E,
                maxX: _
              });else if (e > h.length) throw new Error("Unexpected lineCache length");
              if (32 === X.codepoint || 10 === X.codepoint ? -1 !== O.codepointIndex && (O.codepointIndex = -1, H = k) : -1 === O.codepointIndex && (O.codepointIndex = X.cluster, O.bufferOffset = B, O.xStart = H), X.mapped) {
                var G = k + X.xOffset + X.width;
                if ("none" !== d && G >= Y && -1 !== O.codepointIndex && O.xStart > 0) {
                  if (W) {
                    P = F.shapeText(L, new mr(xr(n, O.codepointIndex), O.codepointIndex)), B = O.bufferOffset;
                    break;
                  }
                  P = F.shapeText(L, new mr(xr(m, 0), 0)), k = O.xStart, B = O.bufferOffset, d = "none";
                } else {
                  var V = k + X.xOffset,
                    q = N + X.yOffset;
                  if (K) {
                    -1 === M && (M = B);
                    var Z = p.getAtlasEntry(X.glyphId),
                      J = Z.x / p.data.common.scaleW,
                      ee = Z.y / p.data.common.scaleH,
                      te = Z.width / p.data.common.scaleW,
                      re = Z.height / p.data.common.scaleH;
                    c[B++] = V, c[B++] = q, c[B++] = J, c[B++] = ee, c[B++] = V + X.width, c[B++] = q, c[B++] = J + te, c[B++] = ee, c[B++] = V, c[B++] = q + X.height, c[B++] = J, c[B++] = ee + re, c[B++] = V + X.width, c[B++] = q + X.height, c[B++] = J + te, c[B++] = ee + re;
                  }
                  E = Math.max(E, q + X.height), _ = Math.max(_, V + X.width), k += X.xAdvance;
                }
              } else if (10 === X.codepoint) {
                if (W) break;
                P = F.shapeText(L, new mr(xr(m, 0), 0)), d = "none";
              }
            }
            -1 !== M && (z.push({
              bufferStart: M,
              bufferEnd: B
            }), M = -1), k = 0, N += w, e++, O.codepointIndex = -1, H = 0, !v && "both" === d && N > f.y2 || y && y.done ? U = !1 : W || (U = !1);
          }
          if ("center" === o) for (var ne = "none" === d ? _ : S, oe = 0; oe < z.length; oe++) for (var ie = z[oe], ae = (ne - (c[ie.bufferEnd - 4] - c[ie.bufferStart])) / 2, se = ie.bufferStart; se < ie.bufferEnd; se += 4) c[se] += ae;else if ("right" === o) for (var le = "none" === d ? _ : S, ue = 0; ue < z.length; ue++) for (var ce = z[ue], de = le - (ce.bufferEnd === ce.bufferStart ? 0 : c[ce.bufferEnd - 4] - c[ce.bufferStart]), he = ce.bufferStart; he < ce.bufferEnd; he += 4) c[he] += de;
          return I(y), {
            bufferNumFloats: B,
            bufferNumQuads: B / 16,
            layoutNumCharacters: y.done ? n.length - C : y.value.cluster - C + 1,
            fullyProcessed: !!y.done,
            maxX: _,
            maxY: E
          };
        }
        function br(e, t, r, n, o, i, a, s) {
          var l,
            u,
            c = e.screen,
            d = e.sdf;
          if (U(a)) {
            var h = a.x1 - t,
              f = h + (a.x2 - a.x1),
              p = a.y1 - r + n,
              v = (l = p - i, u = o || 1, Math.floor(l / u) * u),
              g = function (e, t) {
                return Math.ceil(e / t) * t;
              }(p + (a.y2 - a.y1) + i, o || 1);
            c.x1 = h, c.y1 = v, c.x2 = f, c.y2 = g, d.x1 = h / s, d.y1 = v / s, d.x2 = f / s, d.y2 = g / s, e.numLines = Math.ceil((g - v) / o), e.firstLineIdx = o ? Math.floor(v / o) : 0;
          } else c.x1 = 0, c.y1 = 0, c.x2 = 0, c.y2 = 0, d.x1 = 0, d.y1 = 0, d.x2 = 0, d.y2 = 0, e.numLines = 0, e.firstLineIdx = 0;
          e.valid = !0;
        }
        var wr = {
            normal: 400,
            bold: 700,
            bolder: 900,
            lighter: 100
          },
          Sr = function Sr(e) {
            return "number" == typeof e ? e : wr[e] || 400;
          };
        var Ar = Ht(function (e, t, r, n, o) {
          var i,
            a = Sr(r),
            s = R(e);
          try {
            for (s.s(); !(i = s.n()).done;) {
              var l = i.value[t];
              if (l) {
                if (1 === l.size) return console.warn("TrFontManager: Only one font face found for family: '".concat(t, "' - will be used for all weights and styles")), l.values().next().value;
                var u,
                  c = new Map(),
                  d = R(l);
                try {
                  for (d.s(); !(u = d.n()).done;) {
                    var h = u.value,
                      f = Sr(h.descriptors.weight);
                    if (f === a && h.descriptors.style === n && h.descriptors.stretch === o) return h;
                    c.set(f, h);
                  }
                } catch (v) {
                  d.e(v);
                } finally {
                  d.f();
                }
                var p = "TrFontManager: No exact match: '".concat(t, " Weight: ").concat(a, " Style: ").concat(n, " Stretch: ").concat(o, "'");
                if (console.error(p), 400 === a && c.has(500)) return c.get(500);
                if (500 === a && c.has(400)) return c.get(400);
                if (a < 400) {
                  for (; a > 0;) {
                    if (c.has(a)) return c.get(a);
                    a -= 100;
                  }
                  a = 600;
                }
                for (; a < 1e3;) {
                  if (c.has(a)) return c.get(a);
                  a += 100;
                }
                for (a = 500; a > 0;) {
                  if (c.has(a)) return c.get(a);
                  a -= 100;
                }
              }
            }
          } catch (v) {
            s.e(v);
          } finally {
            s.f();
          }
        });
        var Tr = /*#__PURE__*/function () {
          function Tr(e) {
            _classCallCheck(this, Tr);
            T(this, "textRenderers", void 0), this.textRenderers = e;
          }
          return _createClass(Tr, [{
            key: "addFontFace",
            value: function addFontFace(e) {
              for (var t in this.textRenderers) {
                var r = this.textRenderers[t];
                r && r.isFontFaceSupported(e) && r.addFontFace(e);
              }
            }
          }], [{
            key: "resolveFontFace",
            value: function resolveFontFace(e, t) {
              var r = t.fontFamily,
                n = t.fontWeight,
                o = t.fontStyle,
                i = t.fontStretch;
              return Ar(e, r, n, o, i);
            }
          }]);
        }();
        var Cr = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        var Rr = /*#__PURE__*/function (_Ft2) {
          function Rr(e) {
            var _this31;
            _classCallCheck(this, Rr);
            _this31 = _callSuper(this, Rr, [e]), T(_assertThisInitialized(_this31), "ssdfFontFamilies", {}), T(_assertThisInitialized(_this31), "msdfFontFamilies", {}), T(_assertThisInitialized(_this31), "fontFamilyArray", [_this31.ssdfFontFamilies, _this31.msdfFontFamilies]), T(_assertThisInitialized(_this31), "sdfShader", void 0), T(_assertThisInitialized(_this31), "rendererBounds", void 0), _this31.sdfShader = _this31.stage.shManager.loadShader("SdfShader").shader, _this31.rendererBounds = {
              x1: 0,
              y1: 0,
              x2: _this31.stage.options.appWidth,
              y2: _this31.stage.options.appHeight
            };
            return _this31;
          }
          _inherits(Rr, _Ft2);
          return _createClass(Rr, [{
            key: "getPropertySetters",
            value: function getPropertySetters() {
              var _this32 = this;
              return {
                fontFamily: function fontFamily(e, t) {
                  e.props.fontFamily = t, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
                },
                fontWeight: function fontWeight(e, t) {
                  e.props.fontWeight = t, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
                },
                fontStyle: function fontStyle(e, t) {
                  e.props.fontStyle = t, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
                },
                fontStretch: function fontStretch(e, t) {
                  e.props.fontStretch = t, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
                },
                fontSize: function fontSize(e, t) {
                  e.props.fontSize = t, _this32.invalidateLayoutCache(e);
                },
                text: function text(e, t) {
                  e.props.text = t, _this32.invalidateLayoutCache(e);
                },
                textAlign: function textAlign(e, t) {
                  e.props.textAlign = t, _this32.invalidateLayoutCache(e);
                },
                color: function color(e, t) {
                  e.props.color = t;
                },
                x: function x(e, t) {
                  e.props.x = t, e.elementBounds.valid && (_this32.setElementBoundsX(e), !e.renderWindow.valid && W(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
                },
                y: function y(e, t) {
                  e.props.y = t, e.elementBounds.valid && (_this32.setElementBoundsY(e), !e.renderWindow.valid && W(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
                },
                contain: function contain(e, t) {
                  e.props.contain = t, _this32.invalidateLayoutCache(e);
                },
                width: function width(e, t) {
                  e.props.width = t, "none" !== e.props.contain && _this32.invalidateLayoutCache(e);
                },
                height: function height(e, t) {
                  e.props.height = t, "both" === e.props.contain && _this32.invalidateLayoutCache(e);
                },
                offsetY: function offsetY(e, t) {
                  e.props.offsetY = t, _this32.invalidateLayoutCache(e);
                },
                scrollable: function scrollable(e, t) {
                  e.props.scrollable = t, _this32.invalidateLayoutCache(e);
                },
                scrollY: function scrollY(e, t) {
                  e.props.scrollY = t, _this32.scheduleUpdateState(e);
                },
                letterSpacing: function letterSpacing(e, t) {
                  e.props.letterSpacing = t, _this32.invalidateLayoutCache(e);
                },
                lineHeight: function lineHeight(e, t) {
                  e.props.lineHeight = t, _this32.invalidateLayoutCache(e);
                },
                maxLines: function maxLines(e, t) {
                  e.props.maxLines = t, _this32.invalidateLayoutCache(e);
                },
                textBaseline: function textBaseline(e, t) {
                  e.props.textBaseline = t, _this32.invalidateLayoutCache(e);
                },
                verticalAlign: function verticalAlign(e, t) {
                  e.props.verticalAlign = t, _this32.invalidateLayoutCache(e);
                },
                overflowSuffix: function overflowSuffix(e, t) {
                  e.props.overflowSuffix = t, _this32.invalidateLayoutCache(e);
                },
                debug: function debug(e, t) {
                  e.props.debug = t;
                }
              };
            }
          }, {
            key: "canRenderFont",
            value: function canRenderFont(e) {
              var t = e.fontFamily;
              return t in this.ssdfFontFamilies || t in this.msdfFontFamilies || "$$SDF_FAILURE_TEST$$" === t;
            }
          }, {
            key: "isFontFaceSupported",
            value: function isFontFaceSupported(e) {
              return e instanceof Y;
            }
          }, {
            key: "addFontFace",
            value: function addFontFace(e) {
              I(e instanceof Y);
              var t = e.fontFamily,
                r = "ssdf" === e.type ? this.ssdfFontFamilies : "msdf" === e.type ? this.msdfFontFamilies : void 0;
              if (r) {
                var n = r[t];
                n || (n = new Set(), r[t] = n), n.add(e);
              } else console.warn("Invalid font face type: ".concat(e.type));
            }
          }, {
            key: "createState",
            value: function createState(e) {
              return {
                props: e,
                status: "initialState",
                updateScheduled: !1,
                emitter: new B(),
                lineCache: [],
                forceFullLayoutCalc: !1,
                renderWindow: {
                  screen: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0
                  },
                  sdf: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0
                  },
                  firstLineIdx: 0,
                  numLines: 0,
                  valid: !1
                },
                elementBounds: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0,
                  valid: !1
                },
                clippingRect: {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0,
                  valid: !1
                },
                bufferNumFloats: 0,
                bufferNumQuads: 0,
                vertexBuffer: void 0,
                webGlBuffers: null,
                bufferUploaded: !1,
                textH: void 0,
                textW: void 0,
                distanceRange: 0,
                trFontFace: void 0,
                isRenderable: !1,
                debugData: {
                  updateCount: 0,
                  layoutCount: 0,
                  lastLayoutNumCharacters: 0,
                  layoutSum: 0,
                  drawSum: 0,
                  drawCount: 0,
                  bufferSize: 0
                }
              };
            }
          }, {
            key: "updateState",
            value: function updateState(e) {
              var _this33 = this;
              var t = e.trFontFace,
                r = e.textH,
                n = e.lineCache,
                o = e.debugData,
                i = e.forceFullLayoutCalc;
              if (o.updateCount++, "initialState" === e.status && this.setStatus(e, "loading"), !t) {
                if (t = this.resolveFontFace(e.props), e.trFontFace = t, !t) {
                  var a = "SdfTextRenderer: Could not resolve font face for family: '".concat(e.props.fontFamily, "'");
                  return console.error(a), void this.setStatus(e, "failed", new Error(a));
                }
                t.texture.setRenderableOwner(e, e.isRenderable);
              }
              if (t.loaded) {
                I(t.data, "Font face data should be loaded");
                var s = e.props,
                  l = s.text,
                  u = s.fontSize,
                  c = s.x,
                  d = s.y,
                  h = s.contain,
                  f = s.width,
                  p = s.height,
                  v = s.lineHeight,
                  g = s.verticalAlign,
                  m = s.scrollable,
                  x = s.overflowSuffix,
                  y = s.maxLines,
                  b = "both" === h && m ? e.props.scrollY : 0,
                  w = e.renderWindow,
                  S = t.data.info.size,
                  A = u / S,
                  T = v / A;
                e.distanceRange = A * t.data.distanceField.distanceRange;
                var C = 24 * l.length,
                  R = e.vertexBuffer;
                (!R || R.length < C) && (R = new Float32Array(2 * C));
                var _ = e.elementBounds;
                if (_.valid || (this.setElementBoundsX(e), this.setElementBoundsY(e), _.valid = !0), !i && w.valid) {
                  var E = w.screen;
                  if (c + E.x1 <= _.x1 && c + E.x2 >= _.x2 && d - b + E.y1 <= _.y1 && d - b + E.y2 >= _.y2) return void this.setStatus(e, "loaded");
                  w.valid = !1, this.setStatus(e, "loading");
                }
                var k = e.props,
                  N = k.offsetY,
                  B = k.textAlign;
                if (!w.valid) {
                  if (!W(_, this.rendererBounds)) return;
                  br(w, c, d, b, v, "both" === h ? _.y2 - _.y1 : 0, _, A);
                }
                var O = function (e, t, r, n, o, i, a, s, l) {
                  var u = Math.min(Math.max(a.firstLineIdx, 0), s.length),
                    c = 0;
                  "middle" === n ? c = (t - e) / 2 : "bottom" === n && (c = t - e);
                  var d = o / i + u * t + c;
                  if (!(l && d >= l / i)) return {
                    sdfX: 0,
                    sdfY: d,
                    lineIndex: u
                  };
                }(S, T, 0, g, N, A, w, n, r);
                if (O) {
                  var F = e.props.letterSpacing,
                    L = yr(O.lineIndex, O.sdfX, O.sdfY, l, B, f, p, u, v, F, R, h, n, w.sdf, t, i, m, x, y);
                  e.bufferUploaded = !1, e.bufferNumFloats = L.bufferNumFloats, e.bufferNumQuads = L.bufferNumQuads, e.vertexBuffer = R, e.renderWindow = w, o.lastLayoutNumCharacters = L.layoutNumCharacters, o.bufferSize = R.byteLength, L.fullyProcessed && (e.textW = L.maxX * A, e.textH = L.maxY * A), this.setStatus(e, "loaded");
                } else this.setStatus(e, "loaded");
              } else t.once("loaded", function () {
                _this33.scheduleUpdateState(e);
              });
            }
          }, {
            key: "renderQuads",
            value: function renderQuads(e, t, r, n, o, i) {
              var a, s;
              if (e.vertexBuffer) {
                var l = this.stage.renderer;
                I(l instanceof H);
                var u = e.props,
                  c = u.fontSize,
                  d = u.color,
                  h = u.contain,
                  f = u.scrollable,
                  p = u.zIndex,
                  v = u.debug,
                  g = "both" === h && f ? e.props.scrollY : 0,
                  m = e.textW,
                  x = void 0 === m ? 0 : m,
                  y = e.textH,
                  b = void 0 === y ? 0 : y,
                  w = e.distanceRange,
                  S = e.vertexBuffer,
                  A = e.bufferUploaded,
                  T = e.trFontFace,
                  C = e.elementBounds,
                  R = e.webGlBuffers;
                if (!R) {
                  var _ = l.glw,
                    E = 4 * Float32Array.BYTES_PER_ELEMENT,
                    k = _.createBuffer();
                  I(k), e.webGlBuffers = new Q([{
                    buffer: k,
                    attributes: {
                      a_position: {
                        name: "a_position",
                        size: 2,
                        type: _.FLOAT,
                        normalized: !1,
                        stride: E,
                        offset: 0
                      },
                      a_textureCoordinate: {
                        name: "a_textureCoordinate",
                        size: 2,
                        type: _.FLOAT,
                        normalized: !1,
                        stride: E,
                        offset: 2 * Float32Array.BYTES_PER_ELEMENT
                      }
                    }
                  }]), e.bufferUploaded = !1, I(e.webGlBuffers), R = e.webGlBuffers;
                }
                if (!A) {
                  var N,
                    B,
                    O = l.glw,
                    F = null !== (N = null === (B = R) || void 0 === B ? void 0 : B.getBuffer("a_textureCoordinate")) && void 0 !== N ? N : null;
                  O.arrayBufferData(F, S, O.STATIC_DRAW), e.bufferUploaded = !0;
                }
                if (I(T), f && "both" === h) {
                  I(C.valid);
                  var P = $(C, Cr);
                  r.valid ? (e.clippingRect.valid = !0, r = L(r, P, e.clippingRect)) : (e.clippingRect.valid = !0, r = K(P, e.clippingRect));
                }
                var M = new X(l.glw, l.options, R, this.sdfShader, {
                    transform: t.data,
                    color: G(d, n),
                    size: c / ((null === (a = T.data) || void 0 === a ? void 0 : a.info.size) || 0),
                    scrollY: g,
                    distanceRange: w,
                    debug: v.sdfShaderDebug
                  }, n, r, {
                    height: b,
                    width: x
                  }, 0, p, !1, o, i),
                  z = null === (s = e.trFontFace) || void 0 === s ? void 0 : s.texture;
                I(z);
                var D = this.stage.txManager.getCtxTexture(z);
                M.addTexture(D), M.length = e.bufferNumFloats, M.numQuads = e.bufferNumQuads, l.addRenderOp(M);
              }
            }
          }, {
            key: "setIsRenderable",
            value: function setIsRenderable(e, t) {
              var r;
              _superPropGet(Rr, "setIsRenderable", this, 3)([e, t]), null === (r = e.trFontFace) || void 0 === r || r.texture.setRenderableOwner(e, t);
            }
          }, {
            key: "destroyState",
            value: function destroyState(e) {
              var t;
              _superPropGet(Rr, "destroyState", this, 3)([e]), null === (t = e.trFontFace) || void 0 === t || t.texture.setRenderableOwner(e, !1);
            }
          }, {
            key: "resolveFontFace",
            value: function resolveFontFace(e) {
              return Tr.resolveFontFace(this.fontFamilyArray, e);
            }
          }, {
            key: "releaseFontFace",
            value: function releaseFontFace(e) {
              e.trFontFace && (e.trFontFace.texture.setRenderableOwner(e, !1), e.trFontFace = void 0);
            }
          }, {
            key: "invalidateLayoutCache",
            value: function invalidateLayoutCache(e) {
              e.renderWindow.valid = !1, e.elementBounds.valid = !1, e.textH = void 0, e.textW = void 0, e.lineCache = [], this.setStatus(e, "loading"), this.scheduleUpdateState(e);
            }
          }, {
            key: "setElementBoundsX",
            value: function setElementBoundsX(e) {
              var t = e.props,
                r = t.x,
                n = t.contain,
                o = t.width,
                i = e.elementBounds;
              i.x1 = r, i.x2 = "none" !== n ? r + o : 1 / 0;
            }
          }, {
            key: "setElementBoundsY",
            value: function setElementBoundsY(e) {
              var t = e.props,
                r = t.y,
                n = t.contain,
                o = t.height,
                i = e.elementBounds;
              i.y1 = r, i.y2 = "both" === n ? r + o : 1 / 0;
            }
          }]);
        }(Ft);
        function Ir(e, t) {
          return _r.apply(this, arguments);
        }
        function _r() {
          return (_r = w(y().mark(function e(t, r) {
            var n, o, i;
            return y().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, console.log("Loading core extension", t), e.next = 4, he(function () {
                    return S["import"](t);
                  }, void 0, S.meta.url);
                case 4:
                  n = e.sent, e.next = 12;
                  break;
                case 7:
                  return e.prev = 7, e.t0 = e["catch"](0), console.error("The core extension module at '".concat(t, "' could not be loaded.")), console.error(e.t0), e.abrupt("return");
                case 12:
                  if (n["default"]) {
                    e.next = 15;
                    break;
                  }
                  return console.error("The core extension module at '".concat(t, "' does not have a default export.")), e.abrupt("return");
                case 15:
                  if (o = n["default"], !(o.prototype instanceof V)) {
                    e.next = 29;
                    break;
                  }
                  return i = new o(), e.prev = 18, e.next = 21, i.run(r);
                case 21:
                  e.next = 27;
                  break;
                case 23:
                  e.prev = 23, e.t1 = e["catch"](18), console.error("The core extension at '".concat(t, "' threw an error.")), console.error(e.t1);
                case 27:
                  e.next = 30;
                  break;
                case 29:
                  console.error("The core extension at '".concat(t, "' does not extend CoreExtension."));
                case 30:
                case "end":
                  return e.stop();
              }
            }, e, null, [[0, 7], [18, 23]]);
          }))).apply(this, arguments);
        }
        function Er(e) {
          for (var t = {
              "boolean": !0,
              string: !0,
              number: !0,
              undefined: !0
            }, r = Object.keys(e), n = 0; n < r.length; n++) {
            var o = r[n];
            if (o) {
              var i = e[o],
                a = _typeof(i);
              "string" === a && i.length > 2048 && (console.warn("Custom Data value for ".concat(o, " is too long, it will be truncated to 2048 characters")), e[o] = i.substring(0, 2048)), t[a] || (console.warn("Custom Data value for ".concat(o, " is not a boolean, string, or number, it will be ignored")), delete e[o]);
            }
          }
          return e;
        }
        var kr = /*#__PURE__*/function (_B2) {
          function kr(e, t, r) {
            var _this34;
            _classCallCheck(this, kr);
            var n, o, i, a, s;
            _this34 = _callSuper(this, kr), T(_assertThisInitialized(_this34), "root", null), T(_assertThisInitialized(_this34), "driver", void 0), T(_assertThisInitialized(_this34), "canvas", void 0), T(_assertThisInitialized(_this34), "settings", void 0), T(_assertThisInitialized(_this34), "inspector", null), T(_assertThisInitialized(_this34), "nodes", new Map()), T(_assertThisInitialized(_this34), "nextTextureId", 1), T(_assertThisInitialized(_this34), "textureTracker", void 0);
            var l = {
              appWidth: e.appWidth || 1920,
              appHeight: e.appHeight || 1080,
              txMemByteThreshold: e.txMemByteThreshold || 124e6,
              boundsMargin: e.boundsMargin || 0,
              deviceLogicalPixelRatio: e.deviceLogicalPixelRatio || 1,
              devicePhysicalPixelRatio: e.devicePhysicalPixelRatio || window.devicePixelRatio,
              clearColor: null !== (n = e.clearColor) && void 0 !== n ? n : 0,
              coreExtensionModule: e.coreExtensionModule || null,
              experimental_FinalizationRegistryTextureUsageTracker: null !== (o = e.experimental_FinalizationRegistryTextureUsageTracker) && void 0 !== o && o,
              textureCleanupOptions: e.textureCleanupOptions || {},
              fpsUpdateInterval: e.fpsUpdateInterval || 0,
              numImageWorkers: void 0 !== e.numImageWorkers ? e.numImageWorkers : 2,
              enableContextSpy: null !== (i = e.enableContextSpy) && void 0 !== i && i,
              enableInspector: null !== (a = e.enableInspector) && void 0 !== a && a,
              renderMode: null !== (s = e.renderMode) && void 0 !== s ? s : "webgl"
            };
            _this34.settings = l;
            var u = l.appWidth,
              c = l.appHeight,
              d = l.deviceLogicalPixelRatio,
              h = l.devicePhysicalPixelRatio,
              f = l.enableInspector,
              p = function p(e) {
                _this34.driver.releaseTexture(e);
              },
              v = l.experimental_FinalizationRegistryTextureUsageTracker && "function" == typeof FinalizationRegistry;
            _this34.textureTracker = v ? new It(p) : new Rt(p, _this34.settings.textureCleanupOptions);
            var g = u * d,
              m = c * d;
            _this34.driver = r;
            var x,
              y = document.createElement("canvas");
            if (_this34.canvas = y, y.width = g * h, y.height = m * h, y.style.width = "".concat(g, "px"), y.style.height = "".concat(m, "px"), !(x = "string" == typeof t ? document.getElementById(t) : t)) throw new Error("Could not find target element");
            r.onCreateNode = function (e) {
              _this34.nodes.set(e.id, e);
            }, r.onBeforeDestroyNode = function (e) {
              _this34.nodes["delete"](e.id);
            }, r.onFpsUpdate = function (e) {
              _this34.emit("fpsUpdate", e);
            }, r.onFrameTick = function (e) {
              _this34.emit("frameTick", e);
            }, r.onIdle = function () {
              _this34.emit("idle");
            }, x.appendChild(y), f && !_() && (_this34.inspector = new Nt(y, l));
            return _this34;
          }
          _inherits(kr, _B2);
          return _createClass(kr, [{
            key: "init",
            value: function init() {
              var e = this;
              return w(y().mark(function t() {
                return y().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.driver.init(e, e.settings, e.canvas);
                    case 2:
                      e.root = e.driver.getRootNode();
                    case 3:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))();
            }
          }, {
            key: "createNode",
            value: function createNode(e) {
              return this.inspector ? this.inspector.createNode(this.driver, this.resolveNodeDefaults(e)) : this.driver.createNode(this.resolveNodeDefaults(e));
            }
          }, {
            key: "createTextNode",
            value: function createTextNode(e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                d,
                h,
                f,
                p,
                v,
                g,
                m,
                x,
                y,
                b = null !== (t = e.fontSize) && void 0 !== t ? t : 16,
                w = A(A({}, this.resolveNodeDefaults(e)), {}, {
                  text: null !== (r = e.text) && void 0 !== r ? r : "",
                  textRendererOverride: null !== (n = e.textRendererOverride) && void 0 !== n ? n : null,
                  fontSize: b,
                  fontFamily: null !== (o = e.fontFamily) && void 0 !== o ? o : "sans-serif",
                  fontStyle: null !== (i = e.fontStyle) && void 0 !== i ? i : "normal",
                  fontWeight: null !== (a = e.fontWeight) && void 0 !== a ? a : "normal",
                  fontStretch: null !== (s = e.fontStretch) && void 0 !== s ? s : "normal",
                  textAlign: null !== (l = e.textAlign) && void 0 !== l ? l : "left",
                  contain: null !== (u = e.contain) && void 0 !== u ? u : "none",
                  scrollable: null !== (c = e.scrollable) && void 0 !== c && c,
                  scrollY: null !== (d = e.scrollY) && void 0 !== d ? d : 0,
                  offsetY: null !== (h = e.offsetY) && void 0 !== h ? h : 0,
                  letterSpacing: null !== (f = e.letterSpacing) && void 0 !== f ? f : 0,
                  lineHeight: null !== (p = e.lineHeight) && void 0 !== p ? p : b,
                  maxLines: null !== (v = e.maxLines) && void 0 !== v ? v : 0,
                  textBaseline: null !== (g = e.textBaseline) && void 0 !== g ? g : "alphabetic",
                  verticalAlign: null !== (m = e.verticalAlign) && void 0 !== m ? m : "top",
                  overflowSuffix: null !== (x = e.overflowSuffix) && void 0 !== x ? x : "...",
                  debug: null !== (y = e.debug) && void 0 !== y ? y : {}
                });
              return this.inspector ? this.inspector.createTextNode(this.driver, w) : this.driver.createTextNode(w);
            }
          }, {
            key: "resolveNodeDefaults",
            value: function resolveNodeDefaults(e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                d,
                h,
                f,
                p,
                v,
                g,
                m,
                x,
                y,
                b,
                w,
                S,
                A,
                T,
                C,
                R,
                I,
                _,
                E,
                k,
                N,
                B,
                O,
                F,
                L,
                P,
                M,
                z,
                D,
                j,
                U,
                W,
                Y,
                H,
                Q,
                $,
                K,
                X,
                G = null !== (t = e.color) && void 0 !== t ? t : 4294967295,
                V = null !== (r = null !== (n = null !== (o = e.colorTl) && void 0 !== o ? o : e.colorTop) && void 0 !== n ? n : e.colorLeft) && void 0 !== r ? r : G,
                q = null !== (i = null !== (a = null !== (s = e.colorTr) && void 0 !== s ? s : e.colorTop) && void 0 !== a ? a : e.colorRight) && void 0 !== i ? i : G,
                Z = null !== (l = null !== (u = null !== (c = e.colorBl) && void 0 !== c ? c : e.colorBottom) && void 0 !== u ? u : e.colorLeft) && void 0 !== l ? l : G,
                J = null !== (d = null !== (h = null !== (f = e.colorBr) && void 0 !== f ? f : e.colorBottom) && void 0 !== h ? h : e.colorRight) && void 0 !== d ? d : G,
                ee = Er(null !== (p = e.data) && void 0 !== p ? p : {});
              return {
                x: null !== (v = e.x) && void 0 !== v ? v : 0,
                y: null !== (g = e.y) && void 0 !== g ? g : 0,
                width: null !== (m = e.width) && void 0 !== m ? m : 0,
                height: null !== (x = e.height) && void 0 !== x ? x : 0,
                alpha: null !== (y = e.alpha) && void 0 !== y ? y : 1,
                autosize: null !== (b = e.autosize) && void 0 !== b && b,
                clipping: null !== (w = e.clipping) && void 0 !== w && w,
                color: G,
                colorTop: null !== (S = e.colorTop) && void 0 !== S ? S : G,
                colorBottom: null !== (A = e.colorBottom) && void 0 !== A ? A : G,
                colorLeft: null !== (T = e.colorLeft) && void 0 !== T ? T : G,
                colorRight: null !== (C = e.colorRight) && void 0 !== C ? C : G,
                colorBl: Z,
                colorBr: J,
                colorTl: V,
                colorTr: q,
                zIndex: null !== (R = e.zIndex) && void 0 !== R ? R : 0,
                zIndexLocked: null !== (I = e.zIndexLocked) && void 0 !== I ? I : 0,
                parent: null !== (_ = e.parent) && void 0 !== _ ? _ : null,
                texture: null !== (E = e.texture) && void 0 !== E ? E : null,
                shader: null !== (k = e.shader) && void 0 !== k ? k : null,
                src: null !== (N = e.src) && void 0 !== N ? N : "",
                scale: null !== (B = e.scale) && void 0 !== B ? B : null,
                scaleX: null !== (O = null !== (F = e.scaleX) && void 0 !== F ? F : e.scale) && void 0 !== O ? O : 1,
                scaleY: null !== (L = null !== (P = e.scaleY) && void 0 !== P ? P : e.scale) && void 0 !== L ? L : 1,
                mount: null !== (M = e.mount) && void 0 !== M ? M : 0,
                mountX: null !== (z = null !== (D = e.mountX) && void 0 !== D ? D : e.mount) && void 0 !== z ? z : 0,
                mountY: null !== (j = null !== (U = e.mountY) && void 0 !== U ? U : e.mount) && void 0 !== j ? j : 0,
                pivot: null !== (W = e.pivot) && void 0 !== W ? W : .5,
                pivotX: null !== (Y = null !== (H = e.pivotX) && void 0 !== H ? H : e.pivot) && void 0 !== Y ? Y : .5,
                pivotY: null !== (Q = null !== ($ = e.pivotY) && void 0 !== $ ? $ : e.pivot) && void 0 !== Q ? Q : .5,
                rotation: null !== (K = e.rotation) && void 0 !== K ? K : 0,
                rtt: null !== (X = e.rtt) && void 0 !== X && X,
                data: ee
              };
            }
          }, {
            key: "destroyNode",
            value: function destroyNode(e) {
              return this.inspector && this.inspector.destroyNode(e), this.driver.destroyNode(e);
            }
          }, {
            key: "createTexture",
            value: function createTexture(e, t, r) {
              var n = this.nextTextureId++,
                o = {
                  descType: "texture",
                  txType: e,
                  props: t,
                  options: A(A({}, r), {}, {
                    id: n
                  })
                };
              return this.textureTracker.registerTexture(o), o;
            }
          }, {
            key: "createShader",
            value: function createShader(e, t) {
              return {
                descType: "shader",
                shType: e,
                props: t
              };
            }
          }, {
            key: "getNodeById",
            value: function getNodeById(e) {
              return this.nodes.get(e) || null;
            }
          }, {
            key: "toggleFreeze",
            value: function toggleFreeze() {
              throw new Error("Not implemented");
            }
          }, {
            key: "advanceFrame",
            value: function advanceFrame() {
              throw new Error("Not implemented");
            }
          }, {
            key: "rerender",
            value: function rerender() {
              throw new Error("Not implemented");
            }
          }]);
        }(B);
        var Nr = /*#__PURE__*/function (_B3) {
          function Nr(e, t, r) {
            var _this35;
            _classCallCheck(this, Nr);
            _this35 = _callSuper(this, Nr), T(_assertThisInitialized(_this35), "node", void 0), T(_assertThisInitialized(_this35), "props", void 0), T(_assertThisInitialized(_this35), "settings", void 0), T(_assertThisInitialized(_this35), "propStartValues", {}), T(_assertThisInitialized(_this35), "restoreValues", {}), T(_assertThisInitialized(_this35), "progress", 0), T(_assertThisInitialized(_this35), "delayFor", 0), T(_assertThisInitialized(_this35), "timingFunction", void 0), T(_assertThisInitialized(_this35), "propsList", void 0), _this35.node = e, _this35.props = t, _this35.settings = r, _this35.propStartValues = {}, _this35.propsList = Object.keys(t), _this35.propsList.forEach(function (t) {
              _this35.propStartValues[t] = e[t];
            }), _this35.timingFunction = function (e) {
              return e;
            }, r.easing && "string" == typeof r.easing && (_this35.timingFunction = q(r.easing)), _this35.delayFor = r.delay || 0;
            return _this35;
          }
          _inherits(Nr, _B3);
          return _createClass(Nr, [{
            key: "reset",
            value: function reset() {
              this.progress = 0, this.delayFor = this.settings.delay || 0, this.update(0);
            }
          }, {
            key: "restore",
            value: function restore() {
              var _this36 = this;
              this.reset(), Object.keys(this.props).forEach(function (e) {
                _this36.node[e] = _this36.propStartValues[e];
              });
            }
          }, {
            key: "reverse",
            value: function reverse() {
              var _this37 = this;
              this.progress = 0, Object.keys(this.props).forEach(function (e) {
                var t = _this37.props[e],
                  r = _this37.propStartValues[e];
                _this37.props[e] = r, _this37.propStartValues[e] = t;
              }), this.settings.loop || (this.settings.stopMethod = !1);
            }
          }, {
            key: "applyEasing",
            value: function applyEasing(e, t, r) {
              return (this.timingFunction(e) || e) * (r - t) + t;
            }
          }, {
            key: "update",
            value: function update(e) {
              var t = this.settings,
                r = t.duration,
                n = t.loop,
                o = t.easing,
                i = t.stopMethod;
              if (r) {
                if (this.delayFor > 0) this.delayFor -= e;else if (this.delayFor <= 0 && 0 === this.progress && this.emit("start", {}), this.progress += e / r, this.progress > 1 && (this.progress = n ? 0 : 1, i)) this.emit("finished", {});else {
                  for (var a = 0; a < this.propsList.length; a++) {
                    var s = this.propsList[a],
                      l = this.props[s],
                      u = this.propStartValues[s],
                      c = l;
                    if (-1 === s.indexOf("color")) this.node[s] = o ? this.applyEasing(this.progress, u, c) : u + (c - u) * this.progress;else {
                      if (u === c) {
                        this.node[s] = u;
                        continue;
                      }
                      if (o) {
                        var d = this.timingFunction(this.progress) || this.progress,
                          h = Z(u, c, d);
                        this.node[s] = h;
                        continue;
                      }
                      this.node[s] = Z(u, c, this.progress);
                    }
                  }
                  1 === this.progress && this.emit("finished", {});
                }
              } else this.emit("finished", {});
            }
          }]);
        }(B);
        var Br = /*#__PURE__*/function () {
          function Br(e, t) {
            _classCallCheck(this, Br);
            T(this, "manager", void 0), T(this, "animation", void 0), T(this, "startedPromise", null), T(this, "startedResolve", null), T(this, "stoppedPromise", null), T(this, "stoppedResolve", null), T(this, "state", void 0), this.manager = e, this.animation = t, this.state = "stopped";
          }
          return _createClass(Br, [{
            key: "start",
            value: function start() {
              return this.makeStartedPromise(), this.animation.once("start", this.started.bind(this)), this.makeStoppedPromise(), this.animation.once("finished", this.finished.bind(this)), this.manager.activeAnimations.has(this.animation) || this.manager.registerAnimation(this.animation), this.state = "running", this;
            }
          }, {
            key: "stop",
            value: function stop() {
              return this.manager.unregisterAnimation(this.animation), null !== this.stoppedResolve && (this.stoppedResolve(), this.stoppedResolve = null), this.animation.reset(), this.state = "stopped", this;
            }
          }, {
            key: "pause",
            value: function pause() {
              return this.manager.unregisterAnimation(this.animation), this.state = "paused", this;
            }
          }, {
            key: "restore",
            value: function restore() {
              return this.stoppedResolve = null, this.animation.restore(), this;
            }
          }, {
            key: "waitUntilStarted",
            value: function waitUntilStarted() {
              this.makeStartedPromise();
              var e = this.startedPromise;
              return I(e), e;
            }
          }, {
            key: "waitUntilStopped",
            value: function waitUntilStopped() {
              this.makeStoppedPromise();
              var e = this.stoppedPromise;
              return I(e), e;
            }
          }, {
            key: "makeStartedPromise",
            value: function makeStartedPromise() {
              var _this38 = this;
              null === this.startedResolve && (this.startedPromise = new Promise(function (e) {
                _this38.startedResolve = e;
              }));
            }
          }, {
            key: "makeStoppedPromise",
            value: function makeStoppedPromise() {
              var _this39 = this;
              null === this.stoppedResolve && (this.stoppedPromise = new Promise(function (e) {
                _this39.stoppedResolve = e;
              }));
            }
          }, {
            key: "started",
            value: function started() {
              I(this.startedResolve), this.startedResolve(this), this.startedResolve = null;
            }
          }, {
            key: "finished",
            value: function finished() {
              I(this.stoppedResolve);
              var e = this.animation.settings,
                t = e.loop;
              if ("reverse" === e.stopMethod) return this.animation.reverse(), void this.start();
              this.stoppedResolve(), this.stoppedResolve = null, t || this.manager.unregisterAnimation(this.animation);
            }
          }]);
        }();
        var Or = /*#__PURE__*/function () {
          function Or(e) {
            _classCallCheck(this, Or);
            T(this, "data", void 0), e ? (this.data = new Float32Array(9), this.data[0] = e[0], this.data[3] = e[3], this.data[6] = e[6], this.data[1] = e[1], this.data[4] = e[4], this.data[7] = e[7], this.data[2] = e[2], this.data[5] = e[5], this.data[8] = e[8]) : this.data = new Float32Array(9);
          }
          return _createClass(Or, [{
            key: "translate",
            value: function translate(e, t) {
              return this.data[6] = this.data[0] * e + this.data[3] * t + this.data[6], this.data[7] = this.data[1] * e + this.data[4] * t + this.data[7], this;
            }
          }, {
            key: "scale",
            value: function scale(e, t) {
              return this.data[0] = this.data[0] * e, this.data[3] = this.data[3] * t, this.data[1] = this.data[1] * e, this.data[4] = this.data[4] * t, this;
            }
          }, {
            key: "rotate",
            value: function rotate(e) {
              if (0 === e || !(e % Math.PI * 2)) return this;
              var t = Math.cos(e),
                r = Math.sin(e),
                n = this.data[0] * t + this.data[3] * r,
                o = this.data[3] * t - this.data[0] * r,
                i = this.data[1] * t + this.data[4] * r,
                a = this.data[4] * t - this.data[1] * r;
              return this.data[0] = n, this.data[3] = o, this.data[1] = i, this.data[4] = a, this;
            }
          }, {
            key: "multiply",
            value: function multiply(e) {
              return Or.multiply(this, e, this);
            }
          }, {
            key: "tx",
            get: function get() {
              return this.data[6];
            }
          }, {
            key: "ty",
            get: function get() {
              return this.data[7];
            }
          }, {
            key: "ta",
            get: function get() {
              return this.data[0];
            }
          }, {
            key: "tb",
            get: function get() {
              return this.data[3];
            }
          }, {
            key: "tc",
            get: function get() {
              return this.data[1];
            }
          }, {
            key: "td",
            get: function get() {
              return this.data[4];
            }
          }, {
            key: "transformPoint",
            value: function transformPoint(e, t) {
              return [this.data[0] * e + this.data[3] * t + this.data[6], this.data[1] * e + this.data[4] * t + this.data[1]];
            }
          }], [{
            key: "temp",
            get: function get() {
              return Lr;
            }
          }, {
            key: "multiply",
            value: function multiply(e, t, r) {
              var n = e.data[0] * t.data[0] + e.data[3] * t.data[1] + e.data[6] * t.data[2],
                o = e.data[0] * t.data[3] + e.data[3] * t.data[4] + e.data[6] * t.data[5],
                i = e.data[0] * t.data[6] + e.data[3] * t.data[7] + e.data[6] * t.data[8],
                a = e.data[1] * t.data[0] + e.data[4] * t.data[1] + e.data[7] * t.data[2],
                s = e.data[1] * t.data[3] + e.data[4] * t.data[4] + e.data[7] * t.data[5],
                l = e.data[1] * t.data[6] + e.data[4] * t.data[7] + e.data[7] * t.data[8],
                u = e.data[2] * t.data[0] + e.data[5] * t.data[1] + e.data[8] * t.data[2],
                c = e.data[2] * t.data[3] + e.data[5] * t.data[4] + e.data[8] * t.data[5],
                d = e.data[2] * t.data[6] + e.data[5] * t.data[7] + e.data[8] * t.data[8];
              return r || (r = new Or()), r.data[0] = n, r.data[3] = o, r.data[6] = i, r.data[1] = a, r.data[4] = s, r.data[7] = l, r.data[2] = u, r.data[5] = c, r.data[8] = d, r;
            }
          }, {
            key: "identity",
            value: function identity(e) {
              return e || (e = new Or()), e.data[0] = 1, e.data[3] = 0, e.data[6] = 0, e.data[1] = 0, e.data[4] = 1, e.data[7] = 0, e.data[2] = 0, e.data[5] = 0, e.data[8] = 1, e;
            }
          }, {
            key: "translate",
            value: function translate(e, t, r) {
              return r || (r = new Or()), r.data[0] = 1, r.data[3] = 0, r.data[6] = e, r.data[1] = 0, r.data[4] = 1, r.data[7] = t, r.data[2] = 0, r.data[5] = 0, r.data[8] = 1, r;
            }
          }, {
            key: "scale",
            value: function scale(e, t, r) {
              return r || (r = new Or()), r.data[0] = e, r.data[3] = 0, r.data[6] = 0, r.data[1] = 0, r.data[4] = t, r.data[7] = 0, r.data[2] = 0, r.data[5] = 0, r.data[8] = 1, r;
            }
          }, {
            key: "rotate",
            value: function rotate(e, t) {
              var r = Math.cos(e),
                n = Math.sin(e);
              return t || (t = new Or()), t.data[0] = r, t.data[3] = -n, t.data[6] = 0, t.data[1] = n, t.data[4] = r, t.data[7] = 0, t.data[2] = 0, t.data[5] = 0, t.data[8] = 1, t;
            }
          }, {
            key: "copy",
            value: function copy(e, t, r) {
              return t || (t = new Or()), t.data[0] = e.data[0], t.data[1] = e.data[1], t.data[2] = e.data[2], t.data[3] = e.data[3], t.data[4] = e.data[4], t.data[5] = e.data[5], t.data[6] = e.data[6], t.data[7] = e.data[7], t.data[8] = e.data[8], t;
            }
          }]);
        }();
        var Fr,
          Lr = new Or();
        var Pr = /*#__PURE__*/function () {
          function Pr(e) {
            _classCallCheck(this, Pr);
            T(this, "data", void 0), this.data = new Float32Array(8), e && (this.data[0] = e[0], this.data[2] = e[2], this.data[4] = e[4], this.data[6] = e[6], this.data[1] = e[1], this.data[3] = e[3], this.data[5] = e[5], this.data[7] = e[7]);
          }
          return _createClass(Pr, [{
            key: "x1",
            get: function get() {
              return this.data[0];
            }
          }, {
            key: "x2",
            get: function get() {
              return this.data[2];
            }
          }, {
            key: "x3",
            get: function get() {
              return this.data[4];
            }
          }, {
            key: "x4",
            get: function get() {
              return this.data[6];
            }
          }, {
            key: "y1",
            get: function get() {
              return this.data[1];
            }
          }, {
            key: "y2",
            get: function get() {
              return this.data[3];
            }
          }, {
            key: "y3",
            get: function get() {
              return this.data[5];
            }
          }, {
            key: "y4",
            get: function get() {
              return this.data[7];
            }
          }], [{
            key: "translate",
            value: function translate(e, t, r, n, o, i, a, s, l) {
              return l || (l = new Pr()), l.data[0] = e, l.data[2] = r, l.data[4] = o, l.data[6] = a, l.data[1] = t, l.data[3] = n, l.data[5] = i, l.data[7] = s, l;
            }
          }]);
        }();
        !function (e) {
          e[e.Init = 0] = "Init", e[e.OutOfBounds = 2] = "OutOfBounds", e[e.InBounds = 4] = "InBounds", e[e.InViewport = 8] = "InViewport";
        }(Fr || (Fr = {}));
        var Mr,
          zr = new Map();
        zr.set(Fr.Init, "init"), zr.set(Fr.OutOfBounds, "outOfBounds"), zr.set(Fr.InBounds, "inBounds"), zr.set(Fr.InViewport, "inViewport"), function (e) {
          e[e.Children = 1] = "Children", e[e.ScaleRotate = 2] = "ScaleRotate", e[e.Local = 4] = "Local", e[e.Global = 8] = "Global", e[e.Clipping = 16] = "Clipping", e[e.CalculatedZIndex = 32] = "CalculatedZIndex", e[e.ZIndexSortedChildren = 64] = "ZIndexSortedChildren", e[e.PremultipliedColors = 128] = "PremultipliedColors", e[e.WorldAlpha = 256] = "WorldAlpha", e[e.RenderState = 512] = "RenderState", e[e.IsRenderable = 1024] = "IsRenderable", e[e.RenderTexture = 2048] = "RenderTexture", e[e.ParentRenderTexture = 4096] = "ParentRenderTexture", e[e.None = 0] = "None", e[e.All = 8191] = "All";
        }(Mr || (Mr = {}));
        var Dr = /*#__PURE__*/function (_B4) {
          function Dr(e, t) {
            var _this40;
            _classCallCheck(this, Dr);
            _this40 = _callSuper(this, Dr), T(_assertThisInitialized(_this40), "stage", void 0), T(_assertThisInitialized(_this40), "children", []), T(_assertThisInitialized(_this40), "props", void 0), T(_assertThisInitialized(_this40), "updateType", Mr.All), T(_assertThisInitialized(_this40), "globalTransform", void 0), T(_assertThisInitialized(_this40), "scaleRotateTransform", void 0), T(_assertThisInitialized(_this40), "localTransform", void 0), T(_assertThisInitialized(_this40), "renderCoords", void 0), T(_assertThisInitialized(_this40), "renderBound", void 0), T(_assertThisInitialized(_this40), "strictBound", void 0), T(_assertThisInitialized(_this40), "preloadBound", void 0), T(_assertThisInitialized(_this40), "clippingRect", {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              valid: !1
            }), T(_assertThisInitialized(_this40), "isRenderable", !1), T(_assertThisInitialized(_this40), "renderState", Fr.Init), T(_assertThisInitialized(_this40), "worldAlpha", 1), T(_assertThisInitialized(_this40), "premultipliedColorTl", 0), T(_assertThisInitialized(_this40), "premultipliedColorTr", 0), T(_assertThisInitialized(_this40), "premultipliedColorBl", 0), T(_assertThisInitialized(_this40), "premultipliedColorBr", 0), T(_assertThisInitialized(_this40), "calcZIndex", 0), T(_assertThisInitialized(_this40), "hasRTTupdates", !1), T(_assertThisInitialized(_this40), "parentHasRenderTexture", !1), T(_assertThisInitialized(_this40), "onTextureLoaded", function (e, t) {
              _this40.autosizeNode(t), _this40.stage.requestRender(), _this40.parentHasRenderTexture && _this40.setRTTUpdates(1), _this40.emit("loaded", {
                type: "texture",
                dimensions: t
              });
            }), T(_assertThisInitialized(_this40), "onTextureFailed", function (e, t) {
              _this40.emit("failed", {
                type: "texture",
                error: t
              });
            }), T(_assertThisInitialized(_this40), "onTextureFreed", function (e) {
              _this40.emit("freed", {
                type: "texture"
              });
            }), _this40.stage = e, _this40.props = A(A({}, t), {}, {
              parent: null
            }), _this40.parent = t.parent, _this40.rtt = t.rtt, _this40.updateScaleRotateTransform();
            return _this40;
          }
          _inherits(Dr, _B4);
          return _createClass(Dr, [{
            key: "loadTexture",
            value: function loadTexture(e, t) {
              var _this41 = this;
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
              this.props.texture && this.unloadTexture();
              var n = this.stage.txManager.loadTexture(e, t, r);
              this.props.texture = n, this.props.textureOptions = r, this.setUpdateType(Mr.IsRenderable), queueMicrotask(function () {
                "loaded" === n.state ? _this41.onTextureLoaded(n, n.dimensions) : "failed" === n.state ? _this41.onTextureFailed(n, n.error) : "freed" === n.state && _this41.onTextureFreed(n), n.on("loaded", _this41.onTextureLoaded), n.on("failed", _this41.onTextureFailed), n.on("freed", _this41.onTextureFreed);
              });
            }
          }, {
            key: "unloadTexture",
            value: function unloadTexture() {
              if (this.props.texture) {
                var e = this.props.texture;
                e.off("loaded", this.onTextureLoaded), e.off("failed", this.onTextureFailed), e.off("freed", this.onTextureFreed), e.setRenderableOwner(this, !1);
              }
              this.props.texture = null, this.props.textureOptions = null, this.setUpdateType(Mr.IsRenderable);
            }
          }, {
            key: "autosizeNode",
            value: function autosizeNode(e) {
              this.autosize && (this.width = e.width, this.height = e.height);
            }
          }, {
            key: "loadShader",
            value: function loadShader(e, t) {
              var r = this.stage.renderer.getShaderManager();
              I(r);
              var n = r.loadShader(e, t),
                o = n.shader,
                i = n.props;
              this.props.shader = o, this.props.shaderProps = i, this.setUpdateType(Mr.IsRenderable);
            }
          }, {
            key: "setUpdateType",
            value: function setUpdateType(e) {
              this.updateType |= e;
              var t = this.props.parent;
              !t || t.updateType & Mr.Children || t.setUpdateType(Mr.Children), this.parentHasRenderTexture && this.setRTTUpdates(e);
            }
          }, {
            key: "sortChildren",
            value: function sortChildren() {
              this.children.sort(function (e, t) {
                return e.calcZIndex - t.calcZIndex;
              });
            }
          }, {
            key: "updateScaleRotateTransform",
            value: function updateScaleRotateTransform() {
              this.scaleRotateTransform = Or.rotate(this.props.rotation, this.scaleRotateTransform).scale(this.props.scaleX, this.props.scaleY);
            }
          }, {
            key: "updateLocalTransform",
            value: function updateLocalTransform() {
              I(this.scaleRotateTransform);
              var e = this.props.pivotX * this.props.width,
                t = this.props.pivotY * this.props.height,
                r = this.props.mountX * this.props.width,
                n = this.props.mountY * this.props.height;
              this.localTransform = Or.translate(e - r + this.props.x, t - n + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-e, -t), this.setUpdateType(Mr.Global);
            }
          }, {
            key: "update",
            value: function update(e, t) {
              var _this42 = this;
              this.updateType & Mr.ScaleRotate && (this.updateScaleRotateTransform(), this.setUpdateType(Mr.Local)), this.updateType & Mr.Local && (this.updateLocalTransform(), this.setUpdateType(Mr.Global));
              var r,
                n = this.props.parent,
                o = Mr.None;
              if (this.updateType & Mr.ParentRenderTexture) for (var i = this.parent; i;) i.rtt && (this.parentHasRenderTexture = !0), i = i.parent;
              (this.updateType ^ Mr.All && this.updateType & Mr.RenderTexture && this.children.forEach(function (e) {
                e.setUpdateType(Mr.All);
              }), this.updateType & Mr.Global) && (I(this.localTransform), this.globalTransform = Or.copy((null == n ? void 0 : n.globalTransform) || this.localTransform, this.globalTransform), this.parentHasRenderTexture && null !== (r = this.props.parent) && void 0 !== r && r.rtt && (this.globalTransform = Or.identity()), n && this.globalTransform.multiply(this.localTransform), this.calculateRenderCoords(), this.updateBoundingRect(), this.setUpdateType(Mr.Clipping | Mr.RenderState | Mr.Children), o |= Mr.Global);
              this.updateType & Mr.Clipping && (this.calculateClippingRect(t), this.setUpdateType(Mr.Children), o |= Mr.Clipping), this.updateType & Mr.WorldAlpha && (this.worldAlpha = n ? n.worldAlpha * this.props.alpha : this.props.alpha, this.setUpdateType(Mr.Children | Mr.PremultipliedColors | Mr.IsRenderable), o |= Mr.WorldAlpha), this.updateType & Mr.PremultipliedColors && (this.premultipliedColorTl = M(this.props.colorTl, this.worldAlpha, !0), this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl : (this.premultipliedColorTr = M(this.props.colorTr, this.worldAlpha, !0), this.premultipliedColorBl = M(this.props.colorBl, this.worldAlpha, !0), this.premultipliedColorBr = M(this.props.colorBr, this.worldAlpha, !0))), this.updateType & Mr.RenderState && (this.updateRenderState(t), this.setUpdateType(Mr.IsRenderable)), this.updateType & Mr.IsRenderable && this.updateIsRenderable(), n && this.updateType & Mr.CalculatedZIndex && (this.calculateZIndex(), n.setUpdateType(Mr.ZIndexSortedChildren)), this.updateType & Mr.Children && this.children.length && !this.rtt && this.children.forEach(function (t) {
                t.setUpdateType(o), 0 !== t.updateType && t.update(e, _this42.clippingRect);
              }), this.updateType & Mr.ZIndexSortedChildren && this.sortChildren(), this.updateType = 0;
            }
          }, {
            key: "checkRenderProps",
            value: function checkRenderProps() {
              return !!this.props.texture || !(!this.props.width || !this.props.height) && (!!this.props.shader || !!this.props.clipping || 0 !== this.props.color || 0 !== this.props.colorTop || 0 !== this.props.colorBottom || 0 !== this.props.colorLeft || 0 !== this.props.colorRight || 0 !== this.props.colorTl || 0 !== this.props.colorTr || 0 !== this.props.colorBl || 0 !== this.props.colorBr);
            }
          }, {
            key: "checkRenderBounds",
            value: function checkRenderBounds(e) {
              I(this.renderBound);
              var t = e.width || this.stage.root.width,
                r = e.height || this.stage.root.height;
              this.strictBound = N(e.x, e.y, e.x + t, e.y + r, this.strictBound);
              var n = this.stage.boundsMargin;
              return this.preloadBound = N(e.x - n[3], e.y - n[0], e.x + t + n[1], e.y + r + n[2], this.preloadBound), J(this.renderBound, this.strictBound) ? Fr.InViewport : J(this.renderBound, this.preloadBound) ? Fr.InBounds : Fr.OutOfBounds;
            }
          }, {
            key: "updateRenderState",
            value: function updateRenderState(e) {
              var t = this.checkRenderBounds(e);
              if (t !== this.renderState) {
                var r = this.renderState;
                this.renderState = t, r === Fr.InViewport && this.emit("outOfViewport", {
                  previous: r,
                  current: t
                }), (r < Fr.InBounds && t === Fr.InViewport || r > Fr.InBounds && t === Fr.OutOfBounds) && (this.emit(zr.get(Fr.InBounds), {
                  previous: r,
                  current: t
                }), r = Fr.InBounds);
                var n = zr.get(t);
                I(n), this.emit(n, {
                  previous: r,
                  current: t
                });
              }
            }
          }, {
            key: "setRenderState",
            value: function setRenderState(e) {
              e !== this.renderState && (this.renderState = e, this.emit(Fr[e]));
            }
          }, {
            key: "updateIsRenderable",
            value: function updateIsRenderable() {
              var e;
              e = !(0 === this.worldAlpha || !this.checkRenderProps()) && this.renderState > Fr.OutOfBounds, this.isRenderable !== e && (this.isRenderable = e, this.onChangeIsRenderable(e));
            }
          }, {
            key: "onChangeIsRenderable",
            value: function onChangeIsRenderable(e) {
              var t;
              null === (t = this.props.texture) || void 0 === t || t.setRenderableOwner(this, e);
            }
          }, {
            key: "calculateRenderCoords",
            value: function calculateRenderCoords() {
              var e = this.width,
                t = this.height,
                r = this.globalTransform;
              I(r);
              var n = r.tx,
                o = r.ty,
                i = r.ta,
                a = r.tb,
                s = r.tc,
                l = r.td;
              if (0 === a && 0 === s) {
                var u = n,
                  c = n + e * i,
                  d = o,
                  h = o + t * l;
                this.renderCoords = Pr.translate(u, d, c, d, c, h, u, h, this.renderCoords);
              } else this.renderCoords = Pr.translate(n, o, n + e * i, o + e * s, n + e * i + t * a, o + e * s + t * l, n + t * a, o + t * l, this.renderCoords);
            }
          }, {
            key: "updateBoundingRect",
            value: function updateBoundingRect() {
              var e = this.renderCoords,
                t = this.globalTransform;
              I(t), I(e);
              var r = t.tb,
                n = t.tc,
                o = e.x1,
                i = e.y1,
                a = e.x3,
                s = e.y3;
              if (0 === r || 0 === n) this.renderBound = N(o, i, a, s, this.renderBound);else {
                var l = e.x2,
                  u = e.x4,
                  c = e.y2,
                  d = e.y4;
                this.renderBound = N(Math.min(o, l, a, u), Math.min(i, c, s, d), Math.max(o, l, a, u), Math.max(i, c, s, d), this.renderBound);
              }
            }
          }, {
            key: "calculateClippingRect",
            value: function calculateClippingRect(e) {
              I(this.globalTransform);
              var t = this.clippingRect,
                r = this.props,
                n = this.globalTransform,
                o = r.clipping,
                i = 0 !== n.tb || 0 !== n.tc;
              o && !i ? (t.x = n.tx, t.y = n.ty, t.width = this.width * n.ta, t.height = this.height * n.td, t.valid = !0) : t.valid = !1, e.valid && t.valid ? L(e, t, t) : e.valid && (K(e, t), t.valid = !0);
            }
          }, {
            key: "calculateZIndex",
            value: function calculateZIndex() {
              var e,
                t,
                r = this.props,
                n = r.zIndex || 0,
                o = (null === (e = r.parent) || void 0 === e ? void 0 : e.zIndex) || 0,
                i = n;
              null !== (t = r.parent) && void 0 !== t && t.zIndexLocked && (i = n < o ? n : o), this.calcZIndex = i;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.unloadTexture(), this.clippingRect.valid = !1, this.isRenderable = !1, delete this.renderCoords, delete this.renderBound, delete this.strictBound, delete this.preloadBound, delete this.globalTransform, delete this.scaleRotateTransform, delete this.localTransform, this.props.texture = null, this.props.shader = null, this.rtt && this.stage.renderer.removeRTTNode(this), this.removeAllListeners(), this.parent = null;
            }
          }, {
            key: "renderQuads",
            value: function renderQuads(e) {
              var t = this.props,
                r = t.width,
                n = t.height,
                o = t.texture,
                i = t.textureOptions,
                a = t.shader,
                s = t.shaderProps,
                l = t.rtt;
              if (this.parentHasRenderTexture) {
                if (!e.renderToTextureActive) return;
                if (this.parentRenderTexture !== e.activeRttNode) return;
              }
              var u = this.premultipliedColorTl,
                c = this.premultipliedColorTr,
                d = this.premultipliedColorBl,
                h = this.premultipliedColorBr,
                f = this.zIndex,
                p = this.worldAlpha,
                v = this.globalTransform,
                g = this.clippingRect;
              I(v), e.addQuad({
                width: r,
                height: n,
                colorTl: u,
                colorTr: c,
                colorBl: d,
                colorBr: h,
                texture: o,
                textureOptions: i,
                zIndex: f,
                shader: a,
                shaderProps: s,
                alpha: p,
                clippingRect: g,
                tx: v.tx,
                ty: v.ty,
                ta: v.ta,
                tb: v.tb,
                tc: v.tc,
                td: v.td,
                rtt: l,
                parentHasRenderTexture: this.parentHasRenderTexture,
                framebufferDimensions: this.framebufferDimensions
              });
            }
          }, {
            key: "id",
            get: function get() {
              return this.props.id;
            }
          }, {
            key: "x",
            get: function get() {
              return this.props.x;
            },
            set: function set(e) {
              this.props.x !== e && (this.props.x = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "absX",
            get: function get() {
              var e, t;
              return this.props.x + ((null === (e = this.props.parent) || void 0 === e ? void 0 : e.absX) || (null === (t = this.props.parent) || void 0 === t || null === (t = t.globalTransform) || void 0 === t ? void 0 : t.tx) || 0);
            }
          }, {
            key: "absY",
            get: function get() {
              var e, t;
              return this.props.y + (null !== (e = null === (t = this.props.parent) || void 0 === t ? void 0 : t.absY) && void 0 !== e ? e : 0);
            }
          }, {
            key: "y",
            get: function get() {
              return this.props.y;
            },
            set: function set(e) {
              this.props.y !== e && (this.props.y = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "width",
            get: function get() {
              return this.props.width;
            },
            set: function set(e) {
              this.props.width !== e && (this.props.width = e, this.setUpdateType(Mr.Local), this.props.rtt && this.setUpdateType(Mr.RenderTexture));
            }
          }, {
            key: "height",
            get: function get() {
              return this.props.height;
            },
            set: function set(e) {
              this.props.height !== e && (this.props.height = e, this.setUpdateType(Mr.Local), this.props.rtt && this.setUpdateType(Mr.RenderTexture));
            }
          }, {
            key: "scale",
            get: function get() {
              return this.scaleX;
            },
            set: function set(e) {
              this.scaleX = e, this.scaleY = e;
            }
          }, {
            key: "scaleX",
            get: function get() {
              return this.props.scaleX;
            },
            set: function set(e) {
              this.props.scaleX !== e && (this.props.scaleX = e, this.setUpdateType(Mr.ScaleRotate));
            }
          }, {
            key: "scaleY",
            get: function get() {
              return this.props.scaleY;
            },
            set: function set(e) {
              this.props.scaleY !== e && (this.props.scaleY = e, this.setUpdateType(Mr.ScaleRotate));
            }
          }, {
            key: "mount",
            get: function get() {
              return this.props.mount;
            },
            set: function set(e) {
              this.props.mountX === e && this.props.mountY === e || (this.props.mountX = e, this.props.mountY = e, this.props.mount = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "mountX",
            get: function get() {
              return this.props.mountX;
            },
            set: function set(e) {
              this.props.mountX !== e && (this.props.mountX = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "mountY",
            get: function get() {
              return this.props.mountY;
            },
            set: function set(e) {
              this.props.mountY !== e && (this.props.mountY = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "pivot",
            get: function get() {
              return this.props.pivot;
            },
            set: function set(e) {
              this.props.pivotX === e && this.props.pivotY === e || (this.props.pivotX = e, this.props.pivotY = e, this.props.pivot = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "pivotX",
            get: function get() {
              return this.props.pivotX;
            },
            set: function set(e) {
              this.props.pivotX !== e && (this.props.pivotX = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "pivotY",
            get: function get() {
              return this.props.pivotY;
            },
            set: function set(e) {
              this.props.pivotY !== e && (this.props.pivotY = e, this.setUpdateType(Mr.Local));
            }
          }, {
            key: "rotation",
            get: function get() {
              return this.props.rotation;
            },
            set: function set(e) {
              this.props.rotation !== e && (this.props.rotation = e, this.setUpdateType(Mr.ScaleRotate));
            }
          }, {
            key: "alpha",
            get: function get() {
              return this.props.alpha;
            },
            set: function set(e) {
              this.props.alpha = e, this.setUpdateType(Mr.PremultipliedColors | Mr.WorldAlpha);
            }
          }, {
            key: "autosize",
            get: function get() {
              return this.props.autosize;
            },
            set: function set(e) {
              this.props.autosize = e;
            }
          }, {
            key: "clipping",
            get: function get() {
              return this.props.clipping;
            },
            set: function set(e) {
              this.props.clipping = e, this.setUpdateType(Mr.Clipping);
            }
          }, {
            key: "color",
            get: function get() {
              return this.props.color;
            },
            set: function set(e) {
              this.props.colorTl === e && this.props.colorTr === e && this.props.colorBl === e && this.props.colorBr === e || (this.colorTl = e, this.colorTr = e, this.colorBl = e, this.colorBr = e), this.props.color = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorTop",
            get: function get() {
              return this.props.colorTop;
            },
            set: function set(e) {
              this.props.colorTl === e && this.props.colorTr === e || (this.colorTl = e, this.colorTr = e), this.props.colorTop = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorBottom",
            get: function get() {
              return this.props.colorBottom;
            },
            set: function set(e) {
              this.props.colorBl === e && this.props.colorBr === e || (this.colorBl = e, this.colorBr = e), this.props.colorBottom = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorLeft",
            get: function get() {
              return this.props.colorLeft;
            },
            set: function set(e) {
              this.props.colorTl === e && this.props.colorBl === e || (this.colorTl = e, this.colorBl = e), this.props.colorLeft = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorRight",
            get: function get() {
              return this.props.colorRight;
            },
            set: function set(e) {
              this.props.colorTr === e && this.props.colorBr === e || (this.colorTr = e, this.colorBr = e), this.props.colorRight = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorTl",
            get: function get() {
              return this.props.colorTl;
            },
            set: function set(e) {
              this.props.colorTl = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorTr",
            get: function get() {
              return this.props.colorTr;
            },
            set: function set(e) {
              this.props.colorTr = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorBl",
            get: function get() {
              return this.props.colorBl;
            },
            set: function set(e) {
              this.props.colorBl = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "colorBr",
            get: function get() {
              return this.props.colorBr;
            },
            set: function set(e) {
              this.props.colorBr = e, this.setUpdateType(Mr.PremultipliedColors);
            }
          }, {
            key: "zIndexLocked",
            get: function get() {
              return this.props.zIndexLocked || 0;
            },
            set: function set(e) {
              this.props.zIndexLocked = e, this.setUpdateType(Mr.CalculatedZIndex | Mr.Children), this.children.forEach(function (e) {
                e.setUpdateType(Mr.CalculatedZIndex);
              });
            }
          }, {
            key: "zIndex",
            get: function get() {
              return this.props.zIndex;
            },
            set: function set(e) {
              this.props.zIndex = e, this.setUpdateType(Mr.CalculatedZIndex | Mr.Children), this.children.forEach(function (e) {
                e.setUpdateType(Mr.CalculatedZIndex);
              });
            }
          }, {
            key: "parent",
            get: function get() {
              return this.props.parent;
            },
            set: function set(e) {
              var t = this.props.parent;
              if (t !== e) {
                if (this.props.parent = e, t) {
                  var r = t.children.indexOf(this);
                  I(-1 !== r, "CoreNode.parent: Node not found in old parent's children!"), t.children.splice(r, 1), t.setUpdateType(Mr.Children | Mr.ZIndexSortedChildren);
                }
                e && (e.children.push(this), this.setUpdateType(Mr.All), e.setUpdateType(Mr.Children | Mr.ZIndexSortedChildren), (e.rtt || e.parentHasRenderTexture) && this.setRTTUpdates(Mr.All)), this.updateScaleRotateTransform();
              }
            }
          }, {
            key: "rtt",
            get: function get() {
              return this.props.rtt;
            },
            set: function set(e) {
              var t, r;
              e ? (this.props.rtt = !0, this.hasRTTupdates = !0, this.setUpdateType(Mr.All), this.children.forEach(function (e) {
                e.setUpdateType(Mr.All);
              }), null === (t = this.stage.renderer) || void 0 === t || t.renderToTexture(this)) : this.props.rtt && (this.props.rtt = !1, this.unloadTexture(), this.setUpdateType(Mr.All), this.children.forEach(function (e) {
                e.parentHasRenderTexture = !1;
              }), null === (r = this.stage.renderer) || void 0 === r || r.removeRTTNode(this));
            }
          }, {
            key: "framebufferDimensions",
            get: function get() {
              return this.parentHasRenderTexture && !this.rtt && this.parent ? this.parent.framebufferDimensions : {
                width: this.width,
                height: this.height
              };
            }
          }, {
            key: "parentRenderTexture",
            get: function get() {
              for (var e = this.parent; e;) {
                if (e.rtt) return e;
                e = e.parent;
              }
              return null;
            }
          }, {
            key: "texture",
            get: function get() {
              return this.props.texture;
            }
          }, {
            key: "setRTTUpdates",
            value: function setRTTUpdates(e) {
              var t;
              this.hasRTTupdates = !0, null === (t = this.parent) || void 0 === t || t.setRTTUpdates(e);
            }
          }]);
        }(B);
        var jr = 1;
        function Ur() {
          return jr++;
        }
        var Wr = /*#__PURE__*/function (_B5) {
          function Wr(e, t, r, n) {
            var _this43;
            _classCallCheck(this, Wr);
            var o;
            _this43 = _callSuper(this, Wr), T(_assertThisInitialized(_this43), "rendererMain", void 0), T(_assertThisInitialized(_this43), "stage", void 0), T(_assertThisInitialized(_this43), "id", void 0), T(_assertThisInitialized(_this43), "coreNode", void 0), T(_assertThisInitialized(_this43), "_children", []), T(_assertThisInitialized(_this43), "_src", ""), T(_assertThisInitialized(_this43), "_parent", null), T(_assertThisInitialized(_this43), "_texture", null), T(_assertThisInitialized(_this43), "_shader", null), T(_assertThisInitialized(_this43), "_data", {}), T(_assertThisInitialized(_this43), "onTextureLoaded", function (e, t) {
              _this43.emit("loaded", t);
            }), T(_assertThisInitialized(_this43), "onTextureFailed", function (e, t) {
              _this43.emit("failed", t);
            }), T(_assertThisInitialized(_this43), "onTextureFreed", function (e, t) {
              _this43.emit("freed", t);
            }), T(_assertThisInitialized(_this43), "onOutOfBounds", function (e, t) {
              _this43.emit("outOfBounds", t);
            }), T(_assertThisInitialized(_this43), "onInBounds", function (e, t) {
              _this43.emit("inBounds", t);
            }), T(_assertThisInitialized(_this43), "onOutOfViewport", function (e, t) {
              _this43.emit("outOfViewport", t);
            }), T(_assertThisInitialized(_this43), "onInViewport", function (e, t) {
              _this43.emit("inViewport", t);
            }), _this43.rendererMain = t, _this43.stage = r, _this43.id = null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : Ur(), _this43.coreNode = n || new Dr(_this43.stage, {
              id: _this43.id,
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
              alpha: e.alpha,
              autosize: e.autosize,
              clipping: e.clipping,
              color: e.color,
              colorTop: e.colorTop,
              colorBottom: e.colorBottom,
              colorLeft: e.colorLeft,
              colorRight: e.colorRight,
              colorTl: e.colorTl,
              colorTr: e.colorTr,
              colorBl: e.colorBl,
              colorBr: e.colorBr,
              zIndex: e.zIndex,
              zIndexLocked: e.zIndexLocked,
              scaleX: e.scaleX,
              scaleY: e.scaleY,
              mountX: e.mountX,
              mountY: e.mountY,
              mount: e.mount,
              pivot: e.pivot,
              pivotX: e.pivotX,
              pivotY: e.pivotY,
              rotation: e.rotation,
              parent: null,
              shader: null,
              shaderProps: null,
              texture: null,
              textureOptions: null,
              rtt: e.rtt
            }), _this43.coreNode.on("loaded", _this43.onTextureLoaded), _this43.coreNode.on("failed", _this43.onTextureFailed), _this43.coreNode.on("freed", _this43.onTextureFreed), _this43.coreNode.on("outOfBounds", _this43.onOutOfBounds), _this43.coreNode.on("inBounds", _this43.onInBounds), _this43.coreNode.on("outOfViewport", _this43.onOutOfViewport), _this43.coreNode.on("inViewport", _this43.onInViewport), _this43.parent = e.parent, _this43.shader = e.shader, _this43.texture = e.texture, _this43.src = e.src, _this43.rtt = e.rtt, _this43._data = e.data;
            return _this43;
          }
          _inherits(Wr, _B5);
          return _createClass(Wr, [{
            key: "x",
            get: function get() {
              return this.coreNode.x;
            },
            set: function set(e) {
              this.coreNode.x = e;
            }
          }, {
            key: "y",
            get: function get() {
              return this.coreNode.y;
            },
            set: function set(e) {
              this.coreNode.y = e;
            }
          }, {
            key: "width",
            get: function get() {
              return this.coreNode.width;
            },
            set: function set(e) {
              e !== this.coreNode.width && this.coreNode.rtt && (this.texture = this.rendererMain.createTexture("RenderTexture", {
                width: this.width,
                height: this.height
              }, {
                preload: !0,
                flipY: !0
              })), this.coreNode.width = e;
            }
          }, {
            key: "height",
            get: function get() {
              return this.coreNode.height;
            },
            set: function set(e) {
              e !== this.coreNode.height && this.coreNode.rtt && (this.texture = this.rendererMain.createTexture("RenderTexture", {
                width: this.width,
                height: this.height
              }, {
                preload: !0,
                flipY: !0
              })), this.coreNode.height = e;
            }
          }, {
            key: "alpha",
            get: function get() {
              return this.coreNode.alpha;
            },
            set: function set(e) {
              this.coreNode.alpha = e;
            }
          }, {
            key: "autosize",
            get: function get() {
              return this.coreNode.autosize;
            },
            set: function set(e) {
              this.coreNode.autosize = e;
            }
          }, {
            key: "clipping",
            get: function get() {
              return this.coreNode.clipping;
            },
            set: function set(e) {
              this.coreNode.clipping = e;
            }
          }, {
            key: "color",
            get: function get() {
              return this.coreNode.color;
            },
            set: function set(e) {
              this.coreNode.color = e;
            }
          }, {
            key: "colorTop",
            get: function get() {
              return this.coreNode.colorTop;
            },
            set: function set(e) {
              this.coreNode.colorTop = e;
            }
          }, {
            key: "colorBottom",
            get: function get() {
              return this.coreNode.colorBottom;
            },
            set: function set(e) {
              this.coreNode.colorBottom = e;
            }
          }, {
            key: "colorLeft",
            get: function get() {
              return this.coreNode.colorLeft;
            },
            set: function set(e) {
              this.coreNode.colorLeft = e;
            }
          }, {
            key: "colorRight",
            get: function get() {
              return this.coreNode.colorRight;
            },
            set: function set(e) {
              this.coreNode.colorRight = e;
            }
          }, {
            key: "colorTl",
            get: function get() {
              return this.coreNode.colorTl;
            },
            set: function set(e) {
              this.coreNode.colorTl = e;
            }
          }, {
            key: "colorTr",
            get: function get() {
              return this.coreNode.colorTr;
            },
            set: function set(e) {
              this.coreNode.colorTr = e;
            }
          }, {
            key: "colorBl",
            get: function get() {
              return this.coreNode.colorBl;
            },
            set: function set(e) {
              this.coreNode.colorBl = e;
            }
          }, {
            key: "colorBr",
            get: function get() {
              return this.coreNode.colorBr;
            },
            set: function set(e) {
              this.coreNode.colorBr = e;
            }
          }, {
            key: "scale",
            get: function get() {
              return this.scaleX !== this.scaleY ? null : this.coreNode.scaleX;
            },
            set: function set(e) {
              null !== e && (this.coreNode.scaleX = e, this.coreNode.scaleY = e);
            }
          }, {
            key: "scaleX",
            get: function get() {
              return this.coreNode.scaleX;
            },
            set: function set(e) {
              this.coreNode.scaleX = e;
            }
          }, {
            key: "scaleY",
            get: function get() {
              return this.coreNode.scaleY;
            },
            set: function set(e) {
              this.coreNode.scaleY = e;
            }
          }, {
            key: "mount",
            get: function get() {
              return this.coreNode.mount;
            },
            set: function set(e) {
              this.coreNode.mount = e;
            }
          }, {
            key: "mountX",
            get: function get() {
              return this.coreNode.mountX;
            },
            set: function set(e) {
              this.coreNode.mountX = e;
            }
          }, {
            key: "mountY",
            get: function get() {
              return this.coreNode.mountY;
            },
            set: function set(e) {
              this.coreNode.mountY = e;
            }
          }, {
            key: "pivot",
            get: function get() {
              return this.coreNode.pivot;
            },
            set: function set(e) {
              this.coreNode.pivot = e;
            }
          }, {
            key: "pivotX",
            get: function get() {
              return this.coreNode.pivotX;
            },
            set: function set(e) {
              this.coreNode.pivotX = e;
            }
          }, {
            key: "pivotY",
            get: function get() {
              return this.coreNode.pivotY;
            },
            set: function set(e) {
              this.coreNode.pivotY = e;
            }
          }, {
            key: "rotation",
            get: function get() {
              return this.coreNode.rotation;
            },
            set: function set(e) {
              this.coreNode.rotation = e;
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            },
            set: function set(e) {
              var t,
                r = this._parent;
              if (this._parent = e, this.coreNode.parent = null !== (t = null == e ? void 0 : e.coreNode) && void 0 !== t ? t : null, r) {
                var n = r.children.indexOf(this);
                I(-1 !== n, "MainOnlyNode.parent: Node not found in old parent's children!"), r.children.splice(n, 1);
              }
              e && e.children.push(this);
            }
          }, {
            key: "children",
            get: function get() {
              return this._children;
            }
          }, {
            key: "zIndex",
            get: function get() {
              return this.coreNode.zIndex;
            },
            set: function set(e) {
              this.coreNode.zIndex = e;
            }
          }, {
            key: "zIndexLocked",
            get: function get() {
              return this.coreNode.zIndexLocked;
            },
            set: function set(e) {
              this.coreNode.zIndexLocked = e;
            }
          }, {
            key: "src",
            get: function get() {
              return this._src;
            },
            set: function set(e) {
              this._src !== e && (this._src = e, this.texture = e ? this.rendererMain.createTexture("ImageTexture", {
                src: e
              }) : null);
            }
          }, {
            key: "texture",
            get: function get() {
              return this._texture;
            },
            set: function set(e) {
              this._texture !== e && (this._texture && this.rendererMain.textureTracker.decrementTextureRefCount(this._texture), e && this.rendererMain.textureTracker.incrementTextureRefCount(e), this._texture = e, e ? this.coreNode.loadTexture(e.txType, e.props, e.options) : this.coreNode.unloadTexture());
            }
          }, {
            key: "rtt",
            get: function get() {
              return this.coreNode.rtt;
            },
            set: function set(e) {
              e && (this.texture = this.rendererMain.createTexture("RenderTexture", {
                width: this.width,
                height: this.height
              }, {
                preload: !0,
                flipY: !0
              })), this.coreNode.rtt = e;
            }
          }, {
            key: "parentHasRenderTexture",
            get: function get() {
              return this.coreNode.parentHasRenderTexture;
            }
          }, {
            key: "shader",
            get: function get() {
              return this._shader;
            },
            set: function set(e) {
              this._shader !== e && (this._shader = e, e && this.coreNode.loadShader(e.shType, e.props));
            }
          }, {
            key: "data",
            get: function get() {
              return this._data;
            },
            set: function set(e) {
              this._data = Er(e);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.emit("beforeDestroy", {});
              for (var e = this.children[0]; e;) e.destroy(), e = this.children[0];
              this.coreNode.destroy(), this.parent = null, this.texture = null, this.emit("afterDestroy", {}), this.removeAllListeners();
            }
          }, {
            key: "flush",
            value: function flush() {}
          }, {
            key: "animate",
            value: function animate(e, t) {
              var r = new Nr(this.coreNode, e, t);
              return new Br(this.stage.animationManager, r);
            }
          }]);
        }(B);
        var Yr = /*#__PURE__*/function () {
          function Yr() {
            _classCallCheck(this, Yr);
            T(this, "activeAnimations", new Set());
          }
          return _createClass(Yr, [{
            key: "registerAnimation",
            value: function registerAnimation(e) {
              this.activeAnimations.add(e);
            }
          }, {
            key: "unregisterAnimation",
            value: function unregisterAnimation(e) {
              this.activeAnimations["delete"](e);
            }
          }, {
            key: "update",
            value: function update(e) {
              this.activeAnimations.forEach(function (t) {
                t.update(e);
              });
            }
          }]);
        }();
        var Hr = /*#__PURE__*/function () {
          function Hr(e) {
            var _this44 = this;
            _classCallCheck(this, Hr);
            T(this, "imageWorkersEnabled", !0), T(this, "messageManager", {}), T(this, "workers", []), T(this, "workerIndex", 0), T(this, "nextId", 0), this.workers = this.createWorkers(e), this.workers.forEach(function (e) {
              e.onmessage = _this44.handleMessage.bind(_this44);
            });
          }
          return _createClass(Hr, [{
            key: "handleMessage",
            value: function handleMessage(e) {
              var t = e.data,
                r = t.id,
                n = t.data,
                o = t.error,
                i = this.messageManager[r];
              if (i) {
                var a = C(i, 2),
                  s = a[0],
                  l = a[1];
                delete this.messageManager[r], o ? l(new Error(o)) : s(n);
              }
            }
          }, {
            key: "createWorkers",
            value: function createWorkers() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              for (var t = new Blob(["\n      function hasAlphaChannel(mimeType) {\n          return (mimeType.indexOf(\"image/png\") !== -1);\n      }\n\n      function getImage(src, premultiplyAlpha) {\n        return new Promise(function(resolve, reject) {\n          var xhr = new XMLHttpRequest();\n          xhr.open('GET', src, true);\n          xhr.responseType = 'blob';\n\n          xhr.onload = function() {\n            if (xhr.status === 200) {\n              var blob = xhr.response;\n              var hasAlphaChannel = premultiplyAlpha !== undefined ? premultiplyAlpha : hasAlphaChannel(blob.type);\n\n              createImageBitmap(blob, {\n                premultiplyAlpha: hasAlphaChannel ? 'premultiply' : 'none',\n                colorSpaceConversion: 'none',\n                imageOrientation: 'none'\n              }).then(function(data) {\n                resolve({ data: data, premultiplyAlpha: premultiplyAlpha });\n              }).catch(function(error) {\n                reject(error);\n              });\n            } else {\n              reject(new Error('Failed to load image: ' + xhr.statusText));\n            }\n          };\n\n          xhr.onerror = function() {\n            reject(new Error('Network error occurred while trying to fetch the image.'));\n          };\n\n          xhr.send();\n        });\n      }\n\n      self.onmessage = (event) => {\n        var id = event.data.id;\n        var src = event.data.src;\n        var premultiplyAlpha = event.data.premultiplyAlpha;\n\n        getImage(src, premultiplyAlpha)\n          .then(function(data) {\n              self.postMessage({ id: id, data: data }, [data.data]);\n          })\n          .catch(function(error) {\n              self.postMessage({ id: id, error: error.message });\n          });\n      };\n    ".replace('"use strict";', "")], {
                  type: "application/javascript"
                }), r = (self.URL ? URL : webkitURL).createObjectURL(t), n = [], o = 0; o < e; o++) n.push(new Worker(r));
              return n;
            }
          }, {
            key: "getNextWorker",
            value: function getNextWorker() {
              var e = this.workers[this.workerIndex];
              return this.workerIndex = (this.workerIndex + 1) % this.workers.length, e;
            }
          }, {
            key: "convertUrlToAbsolute",
            value: function convertUrlToAbsolute(e) {
              return new URL(e, self.location.href).href;
            }
          }, {
            key: "getImage",
            value: function getImage(e, t) {
              var _this45 = this;
              return new Promise(function (r, n) {
                try {
                  if (_this45.workers) {
                    var o = _this45.convertUrlToAbsolute(e),
                      i = _this45.nextId++;
                    _this45.messageManager[i] = [r, n], _this45.getNextWorker().postMessage({
                      id: i,
                      src: o,
                      premultiplyAlpha: t
                    });
                  }
                } catch (a) {
                  n(a);
                }
              });
            }
          }]);
        }();
        var Qr = /*#__PURE__*/function (_j3) {
          function Qr(e, t) {
            var _this46;
            _classCallCheck(this, Qr);
            _this46 = _callSuper(this, Qr, [e]), T(_assertThisInitialized(_this46), "props", void 0), _this46.props = Qr.resolveDefaults(t);
            return _this46;
          }
          _inherits(Qr, _j3);
          return _createClass(Qr, [{
            key: "getTextureData",
            value: function getTextureData() {
              var e = this;
              return w(y().mark(function t() {
                var r, n, o, i, a, s, l;
                return y().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      for (r = e.props, n = r.width, o = r.height, i = n * o * 4, a = new Uint8ClampedArray(i), s = 0; s < i; s += 4) l = Math.floor(256 * Math.random()), a[s] = l, a[s + 1] = l, a[s + 2] = l, a[s + 3] = 255;
                      return t.abrupt("return", {
                        data: new ImageData(a, n, o)
                      });
                    case 5:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))();
            }
          }], [{
            key: "makeCacheKey",
            value: function makeCacheKey(e) {
              var t = Qr.resolveDefaults(e);
              return "NoiseTexture,".concat(t.width, ",").concat(t.height, ",").concat(t.cacheId);
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(e) {
              var t, r, n;
              return {
                width: null !== (t = e.width) && void 0 !== t ? t : 128,
                height: null !== (r = e.height) && void 0 !== r ? r : 128,
                cacheId: null !== (n = e.cacheId) && void 0 !== n ? n : 0
              };
            }
          }]);
        }(j);
        T(Qr, "z$__type__Props", void 0);
        var $r = /*#__PURE__*/function () {
          function $r(e) {
            _classCallCheck(this, $r);
            T(this, "usedMemory", 0), T(this, "txConstructors", {}), T(this, "textureKeyCache", new Map()), T(this, "textureIdCache", new Map()), T(this, "ctxTextureCache", new WeakMap()), T(this, "textureRefCountMap", new WeakMap()), T(this, "imageWorkerManager", null), T(this, "hasCreateImageBitmap", !!self.createImageBitmap), T(this, "hasWorker", !!self.Worker), T(this, "renderer", void 0), this.hasCreateImageBitmap && this.hasWorker && (this.imageWorkerManager = new Hr(e)), this.hasCreateImageBitmap || console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), this.registerTextureType("ImageTexture", gr), this.registerTextureType("ColorTexture", ee), this.registerTextureType("NoiseTexture", Qr), this.registerTextureType("SubTexture", te), this.registerTextureType("RenderTexture", re);
          }
          return _createClass($r, [{
            key: "registerTextureType",
            value: function registerTextureType(e, t) {
              this.txConstructors[e] = t;
            }
          }, {
            key: "loadTexture",
            value: function loadTexture(e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
              var n,
                o = this.txConstructors[e];
              if (!o) throw new Error("Texture type \"".concat(e, "\" is not registered"));
              if (void 0 !== (null == r ? void 0 : r.id) && this.textureIdCache.has(r.id) && (n = this.textureIdCache.get(r.id)), !n) {
                var i,
                  a = null == r ? void 0 : r.id,
                  s = null !== (i = null == r ? void 0 : r.cacheKey) && void 0 !== i ? i : o.makeCacheKey(t);
                n = s && this.textureKeyCache.has(s) ? this.textureKeyCache.get(s) : new o(this, t), a && this.addTextureIdToCache(a, s, n);
              }
              null != r && r.preload && this.getCtxTexture(n).load();
              return n;
            }
          }, {
            key: "addTextureIdToCache",
            value: function addTextureIdToCache(e, t, r) {
              var n = this.textureIdCache,
                o = this.textureRefCountMap;
              n.set(e, r), o.has(r) ? o.get(r).count++ : (o.set(r, {
                cacheKey: t,
                count: 1
              }), t && this.textureKeyCache.set(t, r));
            }
          }, {
            key: "removeTextureIdFromCache",
            value: function removeTextureIdFromCache(e) {
              var t,
                r = this.textureIdCache,
                n = this.textureRefCountMap,
                o = r.get(e);
              if (o) {
                if (r["delete"](e), n.has(o)) {
                  var i = n.get(o);
                  I(i), i.count--, 0 === i.count && (n["delete"](o), i.cacheKey && this.textureKeyCache["delete"](i.cacheKey));
                }
                null === (t = this.ctxTextureCache.get(o)) || void 0 === t || t.free();
              }
            }
          }, {
            key: "getDebugInfo",
            value: function getDebugInfo() {
              return {
                keyCacheSize: this.textureKeyCache.size,
                idCacheSize: this.textureIdCache.size
              };
            }
          }, {
            key: "getCtxTexture",
            value: function getCtxTexture(e) {
              if (this.ctxTextureCache.has(e)) return this.ctxTextureCache.get(e);
              var t = this.renderer.createCtxTexture(e);
              return this.ctxTextureCache.set(e, t), t;
            }
          }]);
        }();
        var Kr = /*#__PURE__*/function () {
          function Kr() {
            _classCallCheck(this, Kr);
            T(this, "data", {});
          }
          return _createClass(Kr, [{
            key: "reset",
            value: function reset() {
              this.data = {};
            }
          }, {
            key: "increment",
            value: function increment(e) {
              this.data[e] || (this.data[e] = 0), this.data[e]++;
            }
          }, {
            key: "getData",
            value: function getData() {
              return A({}, this.data);
            }
          }]);
        }();
        var Xr = /*#__PURE__*/function () {
          function Xr(e) {
            _classCallCheck(this, Xr);
            T(this, "memUsed", 0), T(this, "textures", new Map()), T(this, "threshold", void 0), T(this, "gcRequested", !1), this.threshold = e, 0 === e && (this.setTextureMemUse = function () {});
          }
          return _createClass(Xr, [{
            key: "setTextureMemUse",
            value: function setTextureMemUse(e, t) {
              this.textures.has(e) && (this.memUsed -= this.textures.get(e)), 0 !== t ? (this.memUsed += t, this.textures.set(e, t), this.memUsed > this.threshold && (this.gcRequested = !0)) : this.textures["delete"](e);
            }
          }, {
            key: "gc",
            value: function gc() {
              this.gcRequested = !1, this.textures.forEach(function (e, t) {
                t.renderable || t.free();
              });
            }
          }]);
        }();
        var Gr = {
          isWhite: !0,
          a: 1,
          r: 255,
          g: 255,
          b: 255
        };
        function Vr(e) {
          return 4294967295 === e ? Gr : {
            isWhite: !1,
            a: (e >>> 24 & 255) / 255,
            r: 255 & e,
            g: 255 & e >>> 8,
            b: 255 & e >>> 16
          };
        }
        function qr(_ref3) {
          var e = _ref3.a,
            t = _ref3.r,
            r = _ref3.g,
            n = _ref3.b;
          return "rgba(".concat(t, ",").concat(r, ",").concat(n, ",").concat(e, ")");
        }
        var Zr = /*#__PURE__*/function (_ne) {
          function Zr() {
            var _this47;
            _classCallCheck(this, Zr);
            for (var _len15 = arguments.length, e = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
              e[_key15] = arguments[_key15];
            }
            _this47 = _callSuper(this, Zr, [].concat(e)), T(_assertThisInitialized(_this47), "image", void 0), T(_assertThisInitialized(_this47), "tintCache", void 0);
            return _this47;
          }
          _inherits(Zr, _ne);
          return _createClass(Zr, [{
            key: "load",
            value: function load() {
              var _this48 = this;
              "freed" === this.textureSource.state && (this.textureSource.setState("loading"), this.onLoadRequest().then(function (e) {
                _this48.textureSource.setState("loaded", e), _this48.updateMemSize();
              })["catch"](function (e) {
                _this48.textureSource.setState("failed", e);
              }));
            }
          }, {
            key: "free",
            value: function free() {
              this.image = void 0, this.tintCache = void 0, this.textureSource.setState("freed"), this.memManager.setTextureMemUse(this, 0);
            }
          }, {
            key: "updateMemSize",
            value: function updateMemSize() {
              var e = this.tintCache ? 8 : 4;
              if (this.textureSource.dimensions) {
                var t = this.textureSource.dimensions,
                  r = t.width,
                  n = t.height;
                this.memManager.setTextureMemUse(this, r * n * e);
              }
            }
          }, {
            key: "hasImage",
            value: function hasImage() {
              return void 0 !== this.image;
            }
          }, {
            key: "getImage",
            value: function getImage(e) {
              var t,
                r = this.image;
              if (I(r, "Attempt to get unloaded image texture"), e.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), r;
              var n = qr(e);
              if ((null === (t = this.tintCache) || void 0 === t ? void 0 : t.key) === n) return this.tintCache.image;
              var o = this.tintTexture(r, n);
              return this.tintCache = {
                key: n,
                image: o
              }, this.updateMemSize(), o;
            }
          }, {
            key: "tintTexture",
            value: function tintTexture(e, t) {
              var r = e.width,
                n = e.height,
                o = document.createElement("canvas");
              o.width = r, o.height = n;
              var i = o.getContext("2d");
              return i && (i.fillStyle = t, i.globalCompositeOperation = "copy", i.fillRect(0, 0, r, n), i.globalCompositeOperation = "multiply", i.drawImage(e, 0, 0, r, n, 0, 0, r, n), i.globalCompositeOperation = "destination-in", i.drawImage(e, 0, 0, r, n, 0, 0, r, n)), o;
            }
          }, {
            key: "renderable",
            get: function get() {
              return this.textureSource.renderable;
            }
          }, {
            key: "onLoadRequest",
            value: function onLoadRequest() {
              var e = this;
              return w(y().mark(function t() {
                var r, n, o, i;
                return y().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.textureSource.getTextureData();
                    case 2:
                      if (r = t.sent, !((n = r.data) instanceof ImageData)) {
                        t.next = 14;
                        break;
                      }
                      return (o = document.createElement("canvas")).width = n.width, o.height = n.height, (i = o.getContext("2d")) && i.putImageData(n, 0, 0), e.image = o, t.abrupt("return", {
                        width: n.width,
                        height: n.height
                      });
                    case 14:
                      if (!(n instanceof ImageBitmap)) {
                        t.next = 17;
                        break;
                      }
                      return e.image = n, t.abrupt("return", {
                        width: n.width,
                        height: n.height
                      });
                    case 17:
                      return t.abrupt("return", {
                        width: 0,
                        height: 0
                      });
                    case 18:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))();
            }
          }]);
        }(ne);
        var Jr = /*#__PURE__*/function (_oe) {
          function Jr(e) {
            var _this49;
            _classCallCheck(this, Jr);
            _this49 = _callSuper(this, Jr, [e]), T(_assertThisInitialized(_this49), "context", void 0), T(_assertThisInitialized(_this49), "canvas", void 0), T(_assertThisInitialized(_this49), "pixelRatio", void 0), T(_assertThisInitialized(_this49), "clearColor", void 0), T(_assertThisInitialized(_this49), "renderToTextureActive", !1), T(_assertThisInitialized(_this49), "activeRttNode", null), _this49.mode = "canvas", _this49.shManager.renderer = _assertThisInitialized(_this49);
            var t = e.canvas,
              r = e.pixelRatio,
              n = e.clearColor;
            _this49.canvas = t, _this49.context = t.getContext("2d"), _this49.pixelRatio = r, _this49.clearColor = n ? ie(n) : void 0;
            return _this49;
          }
          _inherits(Jr, _oe);
          return _createClass(Jr, [{
            key: "reset",
            value: function reset() {
              this.canvas.width = this.canvas.width;
              var e = this.context;
              if (this.clearColor) {
                var t = C(this.clearColor, 4),
                  r = t[0],
                  n = t[1],
                  o = t[2],
                  i = t[3];
                e.fillStyle = "rgba(".concat(r, ", ").concat(n, ", ").concat(o, ", ").concat(i / 255, ")"), e.fillRect(0, 0, this.canvas.width, this.canvas.height);
              }
              e.scale(this.pixelRatio, this.pixelRatio);
            }
          }, {
            key: "render",
            value: function render() {}
          }, {
            key: "addQuad",
            value: function addQuad(e) {
              var t,
                r = this.context,
                n = e.tx,
                o = e.ty,
                i = e.width,
                a = e.height,
                s = e.alpha,
                l = e.colorTl,
                u = e.colorTr,
                c = e.colorBr,
                d = e.ta,
                h = e.tb,
                f = e.tc,
                p = e.td,
                v = e.clippingRect,
                g = e.texture,
                m = void 0;
              if (g) {
                if (g instanceof te && (t = g.props, g = g.parentTexture), m = this.txManager.getCtxTexture(g), "freed" === g.state) return void m.load();
                if ("loaded" !== g.state || !m.hasImage()) return;
              }
              var x = Vr(l),
                y = 1 !== d,
                b = 0 !== v.width && 0 !== v.height,
                w = l !== u || l !== c,
                S = e.shader ? function (e) {
                  var t, r;
                  return e.shader instanceof dr && e.shader.shType === cr && null !== (t = null === (r = e.shaderProps) || void 0 === r ? void 0 : r.radius) && void 0 !== t ? t : 0;
                }(e) : 0;
              if ((y || b || S) && r.save(), b) {
                var A = new Path2D(),
                  T = v.x,
                  C = v.y,
                  R = v.width,
                  I = v.height;
                A.rect(T, C, R, I), r.clip(A);
              }
              if (y) {
                var _ = this.pixelRatio;
                r.setTransform(d, f, h, p, n * _, o * _), r.scale(_, _), r.translate(-n, -o);
              }
              if (S) {
                var E = new Path2D();
                E.roundRect(n, o, i, a, S), r.clip(E);
              }
              if (m) {
                var k = m.getImage(x);
                r.globalAlpha = s, t ? r.drawImage(k, t.x, t.y, t.width, t.height, n, o, i, a) : r.drawImage(k, n, o, i, a), r.globalAlpha = 1;
              } else if (w) {
                var N,
                  B = n,
                  O = o;
                l === u ? (B = n, O = o + a, N = Vr(c)) : (B = n + i, O = o, N = Vr(u));
                var F = r.createLinearGradient(n, o, B, O);
                F.addColorStop(0, qr(x)), F.addColorStop(1, qr(N)), r.fillStyle = F, r.fillRect(n, o, i, a);
              } else r.fillStyle = qr(x), r.fillRect(n, o, i, a);
              (y || b || S) && r.restore();
            }
          }, {
            key: "createCtxTexture",
            value: function createCtxTexture(e) {
              return new Zr(this.txMemManager, e);
            }
          }, {
            key: "getShaderManager",
            value: function getShaderManager() {
              return this.shManager;
            }
          }, {
            key: "renderRTTNodes",
            value: function renderRTTNodes() {}
          }, {
            key: "removeRTTNode",
            value: function removeRTTNode(e) {}
          }, {
            key: "renderToTexture",
            value: function renderToTexture(e) {}
          }]);
        }(oe);
        var en, tn;
        var rn = /*#__PURE__*/function (_B6) {
          function rn(e) {
            var _this50;
            _classCallCheck(this, rn);
            _this50 = _callSuper(this, rn), T(_assertThisInitialized(_this50), "options", void 0), T(_assertThisInitialized(_this50), "animationManager", void 0), T(_assertThisInitialized(_this50), "txManager", void 0), T(_assertThisInitialized(_this50), "txMemManager", void 0), T(_assertThisInitialized(_this50), "fontManager", void 0), T(_assertThisInitialized(_this50), "textRenderers", void 0), T(_assertThisInitialized(_this50), "shManager", void 0), T(_assertThisInitialized(_this50), "renderer", void 0), T(_assertThisInitialized(_this50), "root", void 0), T(_assertThisInitialized(_this50), "boundsMargin", void 0), T(_assertThisInitialized(_this50), "deltaTime", 0), T(_assertThisInitialized(_this50), "lastFrameTime", 0), T(_assertThisInitialized(_this50), "currentFrameTime", 0), T(_assertThisInitialized(_this50), "fpsNumFrames", 0), T(_assertThisInitialized(_this50), "fpsElapsedTime", 0), T(_assertThisInitialized(_this50), "renderRequested", !1), T(_assertThisInitialized(_this50), "contextSpy", null), _this50.options = e;
            var t = e.canvas,
              r = e.clearColor,
              n = e.rootId,
              o = e.debug,
              i = e.appWidth,
              a = e.appHeight,
              s = e.boundsMargin,
              l = e.enableContextSpy,
              u = e.numImageWorkers,
              c = e.txMemByteThreshold,
              d = e.renderMode;
            _this50.txManager = new $r(u), _this50.txMemManager = new Xr(c), _this50.shManager = new hr(), _this50.animationManager = new Yr(), _this50.contextSpy = l ? new Kr() : null;
            var h = [0, 0, 0, 0];
            s && (h = Array.isArray(s) ? s : [s, s, s, s]), _this50.boundsMargin = h, null != o && o.monitorTextureCache && setInterval(function () {
              I(_this50.txManager);
              var e = _this50.txManager.getDebugInfo();
              console.log("Texture ID Cache Size: ", e.idCacheSize), console.log("Texture Key Cache Size: ", e.keyCacheSize);
            }, 1e3);
            var f = {
              stage: _this50,
              canvas: t,
              pixelRatio: e.devicePhysicalPixelRatio * e.deviceLogicalPixelRatio,
              clearColor: null != r ? r : 4278190080,
              bufferMemory: 2e6,
              txManager: _this50.txManager,
              txMemManager: _this50.txMemManager,
              shManager: _this50.shManager,
              contextSpy: _this50.contextSpy
            };
            _this50.renderer = "canvas" === d ? new Jr(f) : new H(f), ae(d), _this50.txManager.renderer = _this50.renderer, _this50.textRenderers = "webgl" === d ? {
              canvas: new Ut(_this50),
              sdf: new Rr(_this50)
            } : {
              canvas: new Ut(_this50)
            }, _this50.fontManager = new Tr(_this50.textRenderers);
            var p,
              v,
              _g2,
              m = new Dr(_this50, {
                id: n,
                x: 0,
                y: 0,
                width: i,
                height: a,
                alpha: 1,
                autosize: !1,
                clipping: !1,
                color: 0,
                colorTop: 0,
                colorBottom: 0,
                colorLeft: 0,
                colorRight: 0,
                colorTl: 0,
                colorTr: 0,
                colorBl: 0,
                colorBr: 0,
                zIndex: 0,
                zIndexLocked: 0,
                scaleX: 1,
                scaleY: 1,
                mountX: 0,
                mountY: 0,
                mount: 0,
                pivot: .5,
                pivotX: .5,
                pivotY: .5,
                rotation: 0,
                parent: null,
                texture: null,
                textureOptions: null,
                shader: null,
                shaderProps: null,
                rtt: !1
              });
            _this50.root = m, p = _this50, v = !1, _g2 = function g() {
              if (p.updateAnimations(), !p.hasSceneUpdates()) return p.calculateFps(), setTimeout(_g2, 16.666666666666668), void (v || (p.emit("idle"), v = !0));
              v = !1, p.drawFrame(), requestAnimationFrame(_g2);
            }, requestAnimationFrame(_g2);
            return _this50;
          }
          _inherits(rn, _B6);
          return _createClass(rn, [{
            key: "updateAnimations",
            value: function updateAnimations() {
              var e = this.animationManager;
              this.root && (this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = performance ? performance.now() : Date.now(), this.deltaTime = this.lastFrameTime ? this.currentFrameTime - this.lastFrameTime : 100 / 6, this.emit("frameTick", {
                time: this.currentFrameTime,
                delta: this.deltaTime
              }), e.update(this.deltaTime));
            }
          }, {
            key: "hasSceneUpdates",
            value: function hasSceneUpdates() {
              return !!this.root.updateType || this.renderRequested;
            }
          }, {
            key: "drawFrame",
            value: function drawFrame() {
              var e = this.renderer,
                t = this.renderRequested;
              I(e), 0 !== this.root.updateType && this.root.update(this.deltaTime, this.root.clippingRect), e.reset(), e.txMemManager.gcRequested && e.txMemManager.gc(), e.rttNodes.length > 0 && e.renderRTTNodes(), this.addQuads(this.root), null == e || e.render(), this.calculateFps(), t && (this.renderRequested = !1);
            }
          }, {
            key: "calculateFps",
            value: function calculateFps() {
              var e = this.options.fpsUpdateInterval;
              if (e && (this.fpsNumFrames++, this.fpsElapsedTime += this.deltaTime, this.fpsElapsedTime >= e)) {
                var t,
                  r,
                  n,
                  o = Math.round(1e3 * this.fpsNumFrames / this.fpsElapsedTime);
                this.fpsNumFrames = 0, this.fpsElapsedTime = 0, this.emit("fpsUpdate", {
                  fps: o,
                  contextSpyData: null !== (t = null === (r = this.contextSpy) || void 0 === r ? void 0 : r.getData()) && void 0 !== t ? t : null
                }), null === (n = this.contextSpy) || void 0 === n || n.reset();
              }
            }
          }, {
            key: "addQuads",
            value: function addQuads(e) {
              I(this.renderer && e.globalTransform), e.isRenderable && e.renderQuads(this.renderer);
              for (var t = 0; t < e.children.length; t++) {
                var r = e.children[t];
                r && 0 !== (null == r ? void 0 : r.worldAlpha) && this.addQuads(r);
              }
            }
          }, {
            key: "requestRender",
            value: function requestRender() {
              this.renderRequested = !0;
            }
          }, {
            key: "resolveTextRenderer",
            value: function resolveTextRenderer(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var r = t,
                n = !1;
              if (r) {
                var o = this.textRenderers[r];
                o ? o.canRenderFont(e) || (console.warn("Cannot use override text renderer '".concat(r, "' for font"), e), r = null, n = !0) : (console.warn("Text renderer override '".concat(r, "' not found.")), r = null, n = !0);
              }
              if (!r) {
                for (var i = 0, a = Object.entries(this.textRenderers); i < a.length; i++) {
                  var s = C(a[i], 2),
                    l = s[0],
                    u = s[1];
                  if ("canvas" !== l && u.canRenderFont(e)) {
                    r = l;
                    break;
                  }
                }
                r || (r = "canvas");
              }
              n && console.warn("Falling back to text renderer ".concat(String(r)));
              var c = this.textRenderers[r];
              return I(c, "resolvedTextRenderer undefined"), c;
            }
          }]);
        }(B);
        var nn = /*#__PURE__*/function (_Dr) {
          function nn(e, t) {
            var _this51;
            _classCallCheck(this, nn);
            _this51 = _callSuper(this, nn, [e, t]), T(_assertThisInitialized(_this51), "textRenderer", void 0), T(_assertThisInitialized(_this51), "trState", void 0), T(_assertThisInitialized(_this51), "_textRendererOverride", null), T(_assertThisInitialized(_this51), "onTextLoaded", function () {
              var e = _this51.contain,
                t = _this51.trState.props.width,
                r = _this51.trState.props.height,
                n = _this51.trState.textW || 0,
                o = _this51.trState.textH || 0;
              "both" === e ? (_this51.props.width = t, _this51.props.height = r) : "width" === e ? (_this51.props.width = t, _this51.props.height = o) : "none" === e && (_this51.props.width = n, _this51.props.height = o), _this51.updateLocalTransform(), _this51.stage.requestRender(), _this51.emit("loaded", {
                type: "text",
                dimensions: {
                  width: _this51.trState.textW || 0,
                  height: _this51.trState.textH || 0
                }
              });
            }), T(_assertThisInitialized(_this51), "onTextFailed", function (e, t) {
              _this51.emit("failed", {
                type: "text",
                error: t
              });
            }), _this51._textRendererOverride = t.textRendererOverride;
            var r = _this51.resolveTextRendererAndState({
                x: _this51.absX,
                y: _this51.absY,
                width: t.width,
                height: t.height,
                textAlign: t.textAlign,
                color: t.color,
                zIndex: t.zIndex,
                contain: t.contain,
                scrollable: t.scrollable,
                scrollY: t.scrollY,
                offsetY: t.offsetY,
                letterSpacing: t.letterSpacing,
                debug: t.debug,
                fontFamily: t.fontFamily,
                fontSize: t.fontSize,
                fontStretch: t.fontStretch,
                fontStyle: t.fontStyle,
                fontWeight: t.fontWeight,
                text: t.text,
                lineHeight: t.lineHeight,
                maxLines: t.maxLines,
                textBaseline: t.textBaseline,
                verticalAlign: t.verticalAlign,
                overflowSuffix: t.overflowSuffix
              }),
              n = r.resolvedTextRenderer,
              o = r.textRendererState;
            _this51.textRenderer = n, _this51.trState = o;
            return _this51;
          }
          _inherits(nn, _Dr);
          return _createClass(nn, [{
            key: "width",
            get: function get() {
              return this.props.width;
            },
            set: function set(e) {
              this.props.width = e, this.textRenderer.set.width(this.trState, e), "none" === this.contain && this.setUpdateType(Mr.Local);
            }
          }, {
            key: "height",
            get: function get() {
              return this.props.height;
            },
            set: function set(e) {
              this.props.height = e, this.textRenderer.set.height(this.trState, e), "both" !== this.contain && this.setUpdateType(Mr.Local);
            }
          }, {
            key: "color",
            get: function get() {
              return this.trState.props.color;
            },
            set: function set(e) {
              this.textRenderer.set.color(this.trState, e);
            }
          }, {
            key: "text",
            get: function get() {
              return this.trState.props.text;
            },
            set: function set(e) {
              this.textRenderer.set.text(this.trState, e);
            }
          }, {
            key: "textRendererOverride",
            get: function get() {
              return this._textRendererOverride;
            },
            set: function set(e) {
              this._textRendererOverride = e, this.textRenderer.destroyState(this.trState);
              var t = this.resolveTextRendererAndState(this.trState.props),
                r = t.resolvedTextRenderer,
                n = t.textRendererState;
              this.textRenderer = r, this.trState = n;
            }
          }, {
            key: "fontSize",
            get: function get() {
              return this.trState.props.fontSize;
            },
            set: function set(e) {
              this.textRenderer.set.fontSize(this.trState, e);
            }
          }, {
            key: "fontFamily",
            get: function get() {
              return this.trState.props.fontFamily;
            },
            set: function set(e) {
              this.textRenderer.set.fontFamily(this.trState, e);
            }
          }, {
            key: "fontStretch",
            get: function get() {
              return this.trState.props.fontStretch;
            },
            set: function set(e) {
              this.textRenderer.set.fontStretch(this.trState, e);
            }
          }, {
            key: "fontStyle",
            get: function get() {
              return this.trState.props.fontStyle;
            },
            set: function set(e) {
              this.textRenderer.set.fontStyle(this.trState, e);
            }
          }, {
            key: "fontWeight",
            get: function get() {
              return this.trState.props.fontWeight;
            },
            set: function set(e) {
              this.textRenderer.set.fontWeight(this.trState, e);
            }
          }, {
            key: "textAlign",
            get: function get() {
              return this.trState.props.textAlign;
            },
            set: function set(e) {
              this.textRenderer.set.textAlign(this.trState, e);
            }
          }, {
            key: "contain",
            get: function get() {
              return this.trState.props.contain;
            },
            set: function set(e) {
              this.textRenderer.set.contain(this.trState, e);
            }
          }, {
            key: "scrollable",
            get: function get() {
              return this.trState.props.scrollable;
            },
            set: function set(e) {
              this.textRenderer.set.scrollable(this.trState, e);
            }
          }, {
            key: "scrollY",
            get: function get() {
              return this.trState.props.scrollY;
            },
            set: function set(e) {
              this.textRenderer.set.scrollY(this.trState, e);
            }
          }, {
            key: "offsetY",
            get: function get() {
              return this.trState.props.offsetY;
            },
            set: function set(e) {
              this.textRenderer.set.offsetY(this.trState, e);
            }
          }, {
            key: "letterSpacing",
            get: function get() {
              return this.trState.props.letterSpacing;
            },
            set: function set(e) {
              this.textRenderer.set.letterSpacing(this.trState, e);
            }
          }, {
            key: "lineHeight",
            get: function get() {
              return this.trState.props.lineHeight;
            },
            set: function set(e) {
              this.textRenderer.set.lineHeight && this.textRenderer.set.lineHeight(this.trState, e);
            }
          }, {
            key: "maxLines",
            get: function get() {
              return this.trState.props.maxLines;
            },
            set: function set(e) {
              this.textRenderer.set.maxLines && this.textRenderer.set.maxLines(this.trState, e);
            }
          }, {
            key: "textBaseline",
            get: function get() {
              return this.trState.props.textBaseline;
            },
            set: function set(e) {
              this.textRenderer.set.textBaseline && this.textRenderer.set.textBaseline(this.trState, e);
            }
          }, {
            key: "verticalAlign",
            get: function get() {
              return this.trState.props.verticalAlign;
            },
            set: function set(e) {
              this.textRenderer.set.verticalAlign && this.textRenderer.set.verticalAlign(this.trState, e);
            }
          }, {
            key: "overflowSuffix",
            get: function get() {
              return this.trState.props.overflowSuffix;
            },
            set: function set(e) {
              this.textRenderer.set.overflowSuffix && this.textRenderer.set.overflowSuffix(this.trState, e);
            }
          }, {
            key: "debug",
            get: function get() {
              return this.trState.props.debug;
            },
            set: function set(e) {
              this.textRenderer.set.debug(this.trState, e);
            }
          }, {
            key: "update",
            value: function update(e, t) {
              _superPropGet(nn, "update", this, 3)([e, t]), I(this.globalTransform), this.textRenderer.set.x(this.trState, this.globalTransform.tx), this.textRenderer.set.y(this.trState, this.globalTransform.ty);
            }
          }, {
            key: "checkRenderProps",
            value: function checkRenderProps() {
              return "" !== this.trState.props.text || _superPropGet(nn, "checkRenderProps", this, 3)([]);
            }
          }, {
            key: "onChangeIsRenderable",
            value: function onChangeIsRenderable(e) {
              _superPropGet(nn, "onChangeIsRenderable", this, 3)([e]), this.textRenderer.setIsRenderable(this.trState, e);
            }
          }, {
            key: "renderQuads",
            value: function renderQuads(e) {
              var t;
              if (I(this.globalTransform), this.parentHasRenderTexture) {
                if (!e.renderToTextureActive) return;
                if (this.parentRenderTexture !== e.activeRttNode) return;
              }
              this.parentHasRenderTexture && null !== (t = this.props.parent) && void 0 !== t && t.rtt && (this.globalTransform = Or.identity(), this.localTransform && this.globalTransform.multiply(this.localTransform)), I(this.globalTransform), this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              _superPropGet(nn, "destroy", this, 3)([]), this.textRenderer.destroyState(this.trState);
            }
          }, {
            key: "resolveTextRendererAndState",
            value: function resolveTextRendererAndState(e) {
              var t = this.stage.resolveTextRenderer(e, this._textRendererOverride),
                r = t.createState(e);
              return r.emitter.on("loaded", this.onTextLoaded), r.emitter.on("failed", this.onTextFailed), t.scheduleUpdateState(r), {
                resolvedTextRenderer: t,
                textRendererState: r
              };
            }
          }]);
        }(Dr);
        var on = /*#__PURE__*/function (_Wr) {
          function on(e, t, r) {
            _classCallCheck(this, on);
            return _callSuper(this, on, [e, t, r, new nn(r, {
              id: Ur(),
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
              alpha: e.alpha,
              autosize: e.autosize,
              clipping: e.clipping,
              color: e.color,
              colorTop: e.colorTop,
              colorBottom: e.colorBottom,
              colorLeft: e.colorLeft,
              colorRight: e.colorRight,
              colorTl: e.colorTl,
              colorTr: e.colorTr,
              colorBl: e.colorBl,
              colorBr: e.colorBr,
              zIndex: e.zIndex,
              zIndexLocked: e.zIndexLocked,
              scaleX: e.scaleX,
              scaleY: e.scaleY,
              mountX: e.mountX,
              mountY: e.mountY,
              mount: e.mount,
              pivot: e.pivot,
              pivotX: e.pivotX,
              pivotY: e.pivotY,
              rotation: e.rotation,
              text: e.text,
              fontSize: e.fontSize,
              fontFamily: e.fontFamily,
              fontWeight: e.fontWeight,
              fontStretch: e.fontStretch,
              fontStyle: e.fontStyle,
              contain: e.contain,
              scrollable: e.scrollable,
              letterSpacing: e.letterSpacing,
              textAlign: e.textAlign,
              scrollY: e.scrollY,
              offsetY: e.offsetY,
              textRendererOverride: e.textRendererOverride,
              lineHeight: e.lineHeight,
              maxLines: e.maxLines,
              textBaseline: e.textBaseline,
              verticalAlign: e.verticalAlign,
              overflowSuffix: e.overflowSuffix,
              debug: e.debug,
              parent: null,
              texture: null,
              textureOptions: null,
              shader: null,
              shaderProps: null,
              rtt: !1
            })]);
          }
          _inherits(on, _Wr);
          return _createClass(on, [{
            key: "text",
            get: function get() {
              return this.coreNode.text;
            },
            set: function set(e) {
              this.coreNode.text = e;
            }
          }, {
            key: "textRendererOverride",
            get: function get() {
              return this.coreNode.textRendererOverride;
            },
            set: function set(e) {
              this.coreNode.textRendererOverride = e;
            }
          }, {
            key: "fontSize",
            get: function get() {
              return this.coreNode.fontSize;
            },
            set: function set(e) {
              this.coreNode.fontSize = e;
            }
          }, {
            key: "fontFamily",
            get: function get() {
              return this.coreNode.fontFamily;
            },
            set: function set(e) {
              this.coreNode.fontFamily = e;
            }
          }, {
            key: "fontWeight",
            get: function get() {
              return this.coreNode.fontWeight;
            },
            set: function set(e) {
              this.coreNode.fontWeight = e;
            }
          }, {
            key: "fontStretch",
            get: function get() {
              return this.coreNode.fontStretch;
            },
            set: function set(e) {
              this.coreNode.fontStretch = e;
            }
          }, {
            key: "fontStyle",
            get: function get() {
              return this.coreNode.fontStyle;
            },
            set: function set(e) {
              this.coreNode.fontStyle = e;
            }
          }, {
            key: "textAlign",
            get: function get() {
              return this.coreNode.textAlign;
            },
            set: function set(e) {
              this.coreNode.textAlign = e;
            }
          }, {
            key: "contain",
            get: function get() {
              return this.coreNode.contain;
            },
            set: function set(e) {
              this.coreNode.contain = e;
            }
          }, {
            key: "scrollable",
            get: function get() {
              return this.coreNode.scrollable;
            },
            set: function set(e) {
              this.coreNode.scrollable = e;
            }
          }, {
            key: "scrollY",
            get: function get() {
              return this.coreNode.scrollY;
            },
            set: function set(e) {
              this.coreNode.scrollY = e;
            }
          }, {
            key: "offsetY",
            get: function get() {
              return this.coreNode.offsetY;
            },
            set: function set(e) {
              this.coreNode.offsetY = e;
            }
          }, {
            key: "letterSpacing",
            get: function get() {
              return this.coreNode.letterSpacing;
            },
            set: function set(e) {
              this.coreNode.letterSpacing = e;
            }
          }, {
            key: "lineHeight",
            get: function get() {
              return this.coreNode.lineHeight;
            },
            set: function set(e) {
              e && (this.coreNode.lineHeight = e);
            }
          }, {
            key: "maxLines",
            get: function get() {
              return this.coreNode.maxLines;
            },
            set: function set(e) {
              e && (this.coreNode.maxLines = e);
            }
          }, {
            key: "textBaseline",
            get: function get() {
              return this.coreNode.textBaseline;
            },
            set: function set(e) {
              e && (this.coreNode.textBaseline = e);
            }
          }, {
            key: "verticalAlign",
            get: function get() {
              return this.coreNode.verticalAlign;
            },
            set: function set(e) {
              e && (this.coreNode.verticalAlign = e);
            }
          }, {
            key: "overflowSuffix",
            get: function get() {
              return this.coreNode.overflowSuffix;
            },
            set: function set(e) {
              e && (this.coreNode.overflowSuffix = e);
            }
          }, {
            key: "debug",
            get: function get() {
              return this.coreNode.debug;
            },
            set: function set(e) {
              this.coreNode.debug = e;
            }
          }]);
        }(Wr);
        var an = /*#__PURE__*/function () {
          function an() {
            _classCallCheck(this, an);
            T(this, "root", null), T(this, "stage", null), T(this, "rendererMain", null);
          }
          return _createClass(an, [{
            key: "init",
            value: function init(e, t, r) {
              var n = this;
              return w(y().mark(function o() {
                var i;
                return y().wrap(function (o) {
                  for (;;) switch (o.prev = o.next) {
                    case 0:
                      if (n.stage = new rn({
                        rootId: Ur(),
                        appWidth: t.appWidth,
                        appHeight: t.appHeight,
                        txMemByteThreshold: t.txMemByteThreshold,
                        boundsMargin: t.boundsMargin,
                        deviceLogicalPixelRatio: t.deviceLogicalPixelRatio,
                        devicePhysicalPixelRatio: t.devicePhysicalPixelRatio,
                        clearColor: t.clearColor,
                        canvas: r,
                        fpsUpdateInterval: t.fpsUpdateInterval,
                        enableContextSpy: t.enableContextSpy,
                        numImageWorkers: t.numImageWorkers,
                        renderMode: t.renderMode,
                        debug: {
                          monitorTextureCache: !1
                        }
                      }), n.rendererMain = e, I(n.stage.root), i = new Wr(e.resolveNodeDefaults({}), n.rendererMain, n.stage, n.stage.root), n.root = i, i.once("beforeDestroy", n.onBeforeDestroyNode.bind(n, i)), n.onCreateNode(i), !t.coreExtensionModule) {
                        o.next = 10;
                        break;
                      }
                      return o.next = 10, Ir(t.coreExtensionModule, n.stage);
                    case 10:
                      n.stage.on("fpsUpdate", function (e, t) {
                        n.onFpsUpdate(t);
                      }), n.stage.on("frameTick", function (e, t) {
                        n.onFrameTick(t);
                      }), n.stage.on("idle", function () {
                        n.onIdle();
                      });
                    case 13:
                    case "end":
                      return o.stop();
                  }
                }, o);
              }))();
            }
          }, {
            key: "createNode",
            value: function createNode(e) {
              I(this.rendererMain), I(this.stage);
              var t = new Wr(e, this.rendererMain, this.stage);
              return t.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, t)), this.onCreateNode(t), t;
            }
          }, {
            key: "createTextNode",
            value: function createTextNode(e) {
              I(this.rendererMain), I(this.stage);
              var t = new on(e, this.rendererMain, this.stage);
              return t.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, t)), this.onCreateNode(t), t;
            }
          }, {
            key: "destroyNode",
            value: function destroyNode(e) {
              e.destroy();
            }
          }, {
            key: "releaseTexture",
            value: function releaseTexture(e) {
              var t = this.stage;
              I(t), t.txManager.removeTextureIdFromCache(e);
            }
          }, {
            key: "getRootNode",
            value: function getRootNode() {
              return I(this.root), this.root;
            }
          }, {
            key: "onCreateNode",
            value: function onCreateNode(e) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "onBeforeDestroyNode",
            value: function onBeforeDestroyNode(e) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "onFpsUpdate",
            value: function onFpsUpdate(e) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "onFrameTick",
            value: function onFrameTick(e) {
              throw new Error("Method not implemented.");
            }
          }, {
            key: "onIdle",
            value: function onIdle() {
              throw new Error("Method not implemented.");
            }
          }]);
        }();
        function sn() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
          var r = new an();
          return en = new kr(e, t, r), tn = en.createShader.bind(en), en;
        }
        var ln = /*#__PURE__*/function (_Array) {
          function ln(e) {
            var _this52;
            _classCallCheck(this, ln);
            _this52 = _callSuper(this, ln), _this52._parent = e;
            return _this52;
          }
          _inherits(ln, _Array);
          return _createClass(ln, [{
            key: "selected",
            get: function get() {
              return this[this._parent.selected || 0];
            }
          }, {
            key: "firstChild",
            get: function get() {
              return this[0];
            }
          }, {
            key: "insert",
            value: function insert(e, t) {
              if (t) {
                var r = this.indexOf(t);
                this.splice(r, 0, e);
              } else this.push(e);
              e.parent = this._parent;
            }
          }, {
            key: "remove",
            value: function remove(e) {
              var t = this.indexOf(e);
              t >= 0 && this.splice(t, 1);
            }
          }]);
        }( /*#__PURE__*/_wrapNativeSuper(Array));
        var un = {
          debug: !1,
          animationsEnabled: !0,
          animationSettings: {
            duration: 250,
            easing: "ease-in-out"
          },
          fontSettings: {
            fontFamily: "Ubuntu",
            fontSize: 100
          }
        };
        function cn(e, t) {
          false;
        }
        var dn = function dn(e) {
          return e instanceof Function;
        };
        function hn(e) {
          return Array.isArray(e);
        }
        function fn(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (hn(e)) e.forEach(function (e) {
            fn(e, t);
          });else if (e) for (var r in e) void 0 === t[r] && e[r] && (t[r] = e[r]);
          return t;
        }
        var pn = /*#__PURE__*/function (_Array2) {
          function pn(e) {
            var _this53;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, pn);
            return _possibleConstructorReturn(_this53, (hn(t) ? _this53 = _callSuper(this, pn, _toConsumableArray(t)) : "string" == typeof t ? _this53 = _callSuper(this, pn, [t]) : _this53 = _callSuper(this, pn, _toConsumableArray(Object.entries(t).filter(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                e = _ref5[0],
                t = _ref5[1];
              return t;
            }).map(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 1),
                e = _ref7[0];
              return e;
            }))), _this53.onChange = e, _assertThisInitialized(_this53)));
          }
          _inherits(pn, _Array2);
          return _createClass(pn, [{
            key: "has",
            value: function has(e) {
              return this.indexOf(e) >= 0;
            }
          }, {
            key: "is",
            value: function is(e) {
              return this.indexOf(e) >= 0;
            }
          }, {
            key: "add",
            value: function add(e) {
              this.push(e), this.onChange();
            }
          }, {
            key: "toggle",
            value: function toggle(e) {
              this.has(e) ? this.remove(e) : this.add(e);
            }
          }, {
            key: "remove",
            value: function remove(e) {
              var t = this.indexOf(e);
              t >= 0 && (this.splice(t, 1), this.onChange());
            }
          }]);
        }( /*#__PURE__*/_wrapNativeSuper(Array));
        var vn = function (e) {
          return e[e.Element = 0] = "Element", e[e.TextNode = 1] = "TextNode", e[e.Text = 2] = "Text", e;
        }(vn || {});
        var gn = un.animationSettings,
          mn = new Set(),
          xn = !0;
        function yn(e) {
          for (var t = [], r = 0, n = Object.entries(e); r < n.length; r++) {
            var o = C(n[r], 2),
              i = o[0],
              a = o[1];
            t.push({
              type: i,
              props: a
            });
          }
          return tn("DynamicShader", {
            effects: t
          });
        }
        function bn() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return {
            set: function set(t) {
              "number" == typeof t && (t = {
                width: t,
                color: 255
              }), this.effects = this.effects ? A(A({}, this.effects || {}), _defineProperty({}, "border".concat(e), t)) : _defineProperty({}, "border".concat(e), t);
            }
          };
        }
        var wn = /*#__PURE__*/function (_Object) {
          function wn(e) {
            var _this54;
            _classCallCheck(this, wn);
            _this54 = _callSuper(this, wn), _this54._animationQueue = [], _this54._animationRunning = !1, _this54.type = "text" === e ? vn.TextNode : vn.Element, _this54.rendered = !1, _this54.lng = {}, _this54.children = new ln(_assertThisInitialized(_this54));
            return _this54;
          }
          _inherits(wn, _Object);
          return _createClass(wn, [{
            key: "effects",
            get: function get() {
              return this._effects;
            },
            set: function set(e) {
              this._effects = e, this.rendered && (this.shader = yn(e));
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            },
            set: function set(e) {
              var t;
              (this._parent = e, this.rendered) && (this.lng.parent = null !== (t = null == e ? void 0 : e.lng) && void 0 !== t ? t : null);
            }
          }, {
            key: "shader",
            set: function set(e) {
              hn(e) && (e = tn.apply(void 0, _toConsumableArray(e))), this.lng.shader = e;
            }
          }, {
            key: "_sendToLightningAnimatable",
            value: function _sendToLightningAnimatable(e, t) {
              if (this.rendered && un.animationsEnabled && this.transition && (!0 === this.transition || this.transition[e])) {
                var r = !0 === this.transition || !0 === this.transition[e] ? void 0 : this.transition[e];
                return this.animate(_defineProperty({}, e, t), r).start();
              }
              this.lng[e] = t;
            }
          }, {
            key: "animate",
            value: function animate(e, t) {
              return I(this.rendered, "Node must be rendered before animating"), this.lng.animate(e, t || this.animationSettings);
            }
          }, {
            key: "chain",
            value: function chain(e, t) {
              return this._animationRunning && (this._animationQueue = [], this._animationRunning = !1), t ? this._animationQueueSettings = t : this._animationQueueSettings || (this._animationQueueSettings = t || this.animationSettings), t = t || this._animationQueueSettings, this._animationQueue.push({
                props: e,
                animationSettings: t
              }), this;
            }
          }, {
            key: "start",
            value: function start() {
              var e = this;
              return w(y().mark(function t() {
                var r;
                return y().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      r = e._animationQueue.shift();
                    case 1:
                      if (!r) {
                        t.next = 8;
                        break;
                      }
                      return e._animationRunning = !0, t.next = 5, e.animate(r.props, r.animationSettings).start().waitUntilStopped();
                    case 5:
                      r = e._animationQueue.shift(), t.next = 1;
                      break;
                    case 8:
                      e._animationRunning = !1, e._animationQueueSettings = void 0;
                    case 10:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))();
            }
          }, {
            key: "setFocus",
            value: function setFocus() {
              var _this55 = this;
              if (this.rendered) {
                if (void 0 !== this.forwardFocus) if (dn(this.forwardFocus)) {
                  if (!1 !== this.forwardFocus.call(this, this)) return;
                } else {
                  var e = "number" == typeof this.forwardFocus ? this.forwardFocus : null;
                  if (null !== e && e < this.children.length) {
                    var t = this.children[e];
                    return void (t instanceof wn && t.setFocus());
                  }
                }
                queueMicrotask(function () {
                  return Tt(_this55);
                });
              } else this.autofocus = !0;
            }
          }, {
            key: "isTextNode",
            value: function isTextNode() {
              return this.type === vn.TextNode;
            }
          }, {
            key: "_layoutOnLoad",
            value: function _layoutOnLoad() {
              var _this56 = this;
              this.lng.on("loaded", function (e, t) {
                var r = t.dimensions;
                _this56.parent.updateLayout(_this56, r);
              });
            }
          }, {
            key: "getText",
            value: function getText() {
              for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].text;
              return e;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this._queueDelete && this.lng.destroy();
            }
          }, {
            key: "onEvents",
            get: function get() {
              return this._events;
            },
            set: function set(e) {
              this._events = e;
            }
          }, {
            key: "style",
            get: function get() {
              return this._style;
            },
            set: function set(e) {
              for (var t in hn(e) ? this._style = fn(e) : this._style = e, this._style) void 0 === this[t] && (this[t] = this._style[t]);
            }
          }, {
            key: "hasChildren",
            get: function get() {
              return this.children.length > 0;
            }
          }, {
            key: "getChildById",
            value: function getChildById(e) {
              return this.children.find(function (t) {
                return t.id === e;
              });
            }
          }, {
            key: "searchChildrenById",
            value: function searchChildrenById(e) {
              for (var t = 0; t < this.children.length; t++) {
                var r = this.children[t];
                if (r instanceof wn) {
                  if (r.id === e) return r;
                  var n = r.searchChildrenById(e);
                  if (n) return n;
                }
              }
            }
          }, {
            key: "states",
            get: function get() {
              return this._states = this._states || new pn(this._stateChanged.bind(this)), this._states;
            },
            set: function set(e) {
              this._states = new pn(this._stateChanged.bind(this), e), this.rendered && this._stateChanged();
            }
          }, {
            key: "animationSettings",
            get: function get() {
              return this._animationSettings || gn;
            },
            set: function set(e) {
              this._animationSettings = e;
            }
          }, {
            key: "requiresLayout",
            value: function requiresLayout() {
              return "flex" === this.display || this.onBeforeLayout;
            }
          }, {
            key: "updateLayout",
            value: function updateLayout(e, t) {
              if (this.hasChildren) {
                cn();
                var r,
                  n = !1;
                if (dn(this.onBeforeLayout) && (n = this.onBeforeLayout.call(this, this, e, t) || !1), "flex" === this.display) {
                  if (function (e) {
                    for (var t = [], r = !1, n = 0; n < e.children.length; n++) {
                      var o = e.children[n];
                      if (o.type !== vn.Text && !1 !== o.flexItem) {
                        if (o.type === vn.TextNode && o.text && !o.width && !o.height) return !1;
                        void 0 !== o.flexOrder && (r = !0), t.push(o);
                      }
                    }
                    r && t.sort(function (e, t) {
                      return (e.flexOrder || 0) - (t.flexOrder || 0);
                    });
                    var i = t.length,
                      a = "row" === (e.flexDirection || "row"),
                      s = a ? "width" : "height",
                      l = a ? "height" : "width",
                      u = a ? "marginLeft" : "marginTop",
                      c = a ? "marginRight" : "marginBottom",
                      d = a ? "x" : "y",
                      h = a ? "y" : "x",
                      f = e[s] || 0,
                      p = e[l] || 0,
                      v = e.gap || 0,
                      g = e.justifyContent || "flexStart",
                      m = e.alignItems,
                      x = 0;
                    ["center", "spaceBetween", "spaceEvenly"].includes(g) && (x = t.reduce(function (e, t) {
                      return e + (t[s] || 0);
                    }, 0));
                    var y = p && m ? function (e) {
                      "flexStart" === m ? e[h] = 0 : "center" === m ? e[h] = (p - (e[l] || 0)) / 2 : "flexEnd" === m && (e[h] = p - (e[l] || 0));
                    } : function (e) {
                      return e;
                    };
                    if ("flexStart" === g) {
                      for (var b = 0, w = 0; w < t.length; w++) {
                        var S = t[w];
                        S[d] = b + (S[u] || 0), b += (S[s] || 0) + v + (S[u] || 0) + (S[c] || 0), y(S);
                      }
                      if ("fixed" !== e.flexBoundary) {
                        var A = b - v;
                        if (A !== e[s]) return e[s] = A, !0;
                      }
                    } else if ("flexEnd" === g) for (var T = f, C = i - 1; C >= 0; C--) {
                      var R = t[C];
                      I(R), R[d] = T - (R[s] || 0) - (R[c] || 0), T -= (R[s] || 0) + v + (R[u] || 0) + (R[c] || 0), y(R);
                    } else if ("center" === g) for (var _ = (f - (x + v * (i - 1))) / 2, E = 0; E < t.length; E++) {
                      var k = t[E];
                      k[d] = _, _ += (k[s] || 0) + v, y(k);
                    } else if ("spaceBetween" === g) for (var N = (f - x) / (i - 1), B = 0, O = 0; O < t.length; O++) {
                      var F = t[O];
                      F[d] = B, B += (F[s] || 0) + N, y(F);
                    } else if ("spaceEvenly" === g) for (var L = (f - x) / (i + 1), P = L, M = 0; M < t.length; M++) {
                      var z = t[M];
                      z[d] = P, P += (z[s] || 0) + L, y(z);
                    }
                    return !1;
                  }(this) || n) null === (r = this.parent) || void 0 === r || r.updateLayout();
                } else if (n) {
                  var o;
                  null === (o = this.parent) || void 0 === o || o.updateLayout();
                }
                dn(this.onLayout) && this.onLayout.call(this, this, e, t);
              }
            }
          }, {
            key: "_stateChanged",
            value: function _stateChanged() {
              var _this57 = this;
              if (cn(0, 0, this.states), this.forwardStates) {
                var e = this.states.slice();
                this.children.forEach(function (t) {
                  return t.states = e;
                });
              }
              var t = this.states;
              if (this._undoStyles || this.style && function (e, t) {
                var r,
                  n = R(t);
                try {
                  for (n.s(); !(r = n.n()).done;) if (r.value in e) return !0;
                } catch (o) {
                  n.e(o);
                } finally {
                  n.f();
                }
                return !1;
              }(this.style, t)) {
                this._undoStyles = this._undoStyles || [];
                var r = {};
                this._undoStyles.forEach(function (e) {
                  r[e] = _this57.style[e];
                });
                var n = t.reduce(function (e, t) {
                  var r = _this57.style[t];
                  return r && (e = A(A({}, e), r)), e;
                }, {});
                this._undoStyles = Object.keys(n), void 0 !== n.transition && (this.transition = n.transition), Object.assign(this, r, n);
              }
            }
          }, {
            key: "render",
            value: function render() {
              var e,
                t = this,
                r = this.parent;
              if (r) {
                if (r.rendered) {
                  if (this.rendered) console.warn("Node already rendered: ", this);else {
                    r.requiresLayout() && !mn.has(r) && (mn.add(r), xn && (xn = !1, queueMicrotask(function () {
                      xn = !0;
                      var e = _toConsumableArray(mn);
                      mn.clear();
                      for (var t = e.length - 1; t >= 0; t--) e[t].updateLayout();
                    }))), this.states.length && this._stateChanged();
                    var n = t.lng;
                    if (n.x = n.x || 0, n.y = n.y || 0, r.rendered && (n.parent = r.lng), t._effects && (n.shader = yn(t._effects)), t.isTextNode()) {
                      if (un.fontSettings) for (var o in un.fontSettings) void 0 === n[o] && (n[o] = un.fontSettings[o]);
                      n.text = t.getText(), n.textAlign && !n.contain && console.warn("Text align requires contain: ", t.getText()), n.contain && (n.width || (n.width = (r.width || 0) - n.x - (n.marginRight || 0)), "both" !== n.contain || n.height || n.maxLines ? 1 === n.maxLines && (n.height = n.height || n.lineHeight || n.fontSize) : n.height = (r.height || 0) - n.y - (n.marginBottom || 0)), cn(0, 0), t.lng = en.createTextNode(n), !r.requiresLayout() || n.width && n.height || t._layoutOnLoad();
                    } else n.texture || (isNaN(n.width) && (n.width = (r.width || 0) - n.x), isNaN(n.height) && (n.height = (r.height || 0) - n.y), n.rtt && !n.color && (n.color = 4294967295), n.color || n.src || (n.color = 0)), cn(0, 0), t.lng = en.createNode(n);
                    if (t.rendered = !0, t.autosize && r.requiresLayout() && t._layoutOnLoad(), t.onFail && t.lng.on("failed", t.onFail), t.onLoad && t.lng.on("loaded", t.onLoad), dn(this.onCreate) && this.onCreate.call(this, t), t.onEvents && t.onEvents.forEach(function (_ref9) {
                      var _ref10 = _slicedToArray(_ref9, 2),
                        e = _ref10[0],
                        r = _ref10[1];
                      t.lng.on(e, function (e, n) {
                        return r(t, n);
                      });
                    }), null !== (e = t.lng) && void 0 !== e && e.div && (t.lng.div.element = t), t.type === vn.Element) for (var i = 0; i < t.children.length; i++) {
                      var a = t.children[i];
                      I(a, "Child is undefined"), "render" in a ? a.render() : a.text && console.warn("TextNode outside of <Text>: ", a);
                    }
                    t.autofocus && t.setFocus();
                  }
                } else console.warn("Parent not rendered yet: ", this);
              } else console.warn("Parent not set - no node created for: ", this);
            }
          }]);
        }( /*#__PURE__*/_wrapNativeSuper(Object));
        for (var Sn = function Sn() {
            var e = Tn[An];
            Object.defineProperty(wn.prototype, e, {
              get: function get() {
                return this.lng[e];
              },
              set: function set(t) {
                this._sendToLightningAnimatable(e, t);
              }
            });
          }, An = 0, Tn = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"]; An < Tn.length; An++) Sn();
        for (var Cn = function Cn() {
            var e = In[Rn];
            Object.defineProperty(wn.prototype, e, {
              get: function get() {
                return this.lng[e];
              },
              set: function set(t) {
                this.lng[e] = t;
              }
            });
          }, Rn = 0, In = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"]; Rn < In.length; Rn++) Cn();
        Object.defineProperties(wn.prototype, {
          borderRadius: {
            set: function set(e) {
              this.effects = this.effects ? A(A({}, this.effects), {
                radius: {
                  radius: e
                }
              }) : {
                radius: {
                  radius: e
                }
              };
            }
          },
          border: bn(),
          borderLeft: bn("Left"),
          borderRight: bn("Right"),
          borderTop: bn("Top"),
          borderBottom: bn("Bottom")
        }), Object.defineProperties(wn.prototype, {
          linearGradient: {
            set: function set() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              this.effects = this.effects ? A(A({}, this.effects), {
                linearGradient: e
              }) : {
                linearGradient: e
              };
            }
          }
        });
        var _n = b("T", function (e) {
            return t = Dn("text"), Un(t, e, !1), t;
            var t;
          }),
          En = b("V", function (e) {
            return t = Dn("node"), Un(t, e, !1), t;
            var t;
          });
        function kn(_ref11) {
          var e = _ref11.createElement,
            t = _ref11.createTextNode,
            r = _ref11.isTextNode,
            n = _ref11.replaceText,
            o = _ref11.insertNode,
            i = _ref11.removeNode,
            a = _ref11.setProperty,
            s = _ref11.getParentNode,
            l = _ref11.getFirstChild,
            u = _ref11.getNextSibling;
          function c(e, t, r, n) {
            if (void 0 === r || n || (n = []), "function" != typeof t) return d(e, t, n, r);
            Fe(function (n) {
              return d(e, t(), n, r);
            }, n);
          }
          function d(e, i, a, s, u) {
            for (; "function" == typeof a;) a = a();
            if (i === a) return a;
            var c = _typeof(i),
              m = void 0 !== s;
            if ("string" === c || "number" === c) {
              if ("number" === c && (i = i.toString()), m) {
                var x = a[0];
                x && r(x) ? n(x, i) : x = t(i), a = p(e, a, s, x);
              } else "" !== a && "string" == typeof a ? n(l(e), a = i) : (p(e, a, s, t(i)), a = i);
            } else if (null == i || "boolean" === c) a = p(e, a, s);else {
              if ("function" === c) return Fe(function () {
                for (var t = i(); "function" == typeof t;) t = t();
                a = d(e, t, a, s);
              }), function () {
                return a;
              };
              if (Array.isArray(i)) {
                var y = [];
                if (h(y, i, u)) return Fe(function () {
                  return a = d(e, y, a, s, !0);
                }), function () {
                  return a;
                };
                if (0 === y.length) {
                  var b = p(e, a, s);
                  if (m) return a = b;
                } else Array.isArray(a) ? 0 === a.length ? v(e, y, s) : f(e, a, y) : null == a || "" === a ? v(e, y) : f(e, m && a || [l(e)], y);
                a = y;
              } else {
                if (Array.isArray(a)) {
                  if (m) return a = p(e, a, s, i);
                  p(e, a, null, i);
                } else null != a && "" !== a && l(e) ? g(e, i, l(e)) : o(e, i);
                a = i;
              }
            }
            return a;
          }
          function h(e, r, n) {
            for (var o = !1, i = 0, a = r.length; i < a; i++) {
              var s = r[i],
                l = void 0;
              if (null == s || !0 === s || !1 === s) ;else if (Array.isArray(s)) o = h(e, s) || o;else if ("string" == (l = _typeof(s)) || "number" === l) e.push(t(s));else if ("function" === l) {
                if (n) {
                  for (; "function" == typeof s;) s = s();
                  o = h(e, Array.isArray(s) ? s : [s]) || o;
                } else e.push(s), o = !0;
              } else e.push(s);
            }
            return o;
          }
          function f(e, t, r) {
            for (var n = r.length, a = t.length, s = n, l = 0, c = 0, d = u(t[a - 1]), h = null; l < a || c < s;) if (t[l] !== r[c]) {
              for (; t[a - 1] === r[s - 1];) a--, s--;
              if (a === l) for (var f = s < n ? c ? u(r[c - 1]) : r[s - c] : d; c < s;) o(e, r[c++], f);else if (s === c) for (; l < a;) h && h.has(t[l]) || i(e, t[l]), l++;else if (t[l] === r[s - 1] && r[c] === t[a - 1]) {
                var p = u(t[--a]);
                o(e, r[c++], u(t[l++])), o(e, r[--s], p), t[a] = r[s];
              } else {
                if (!h) {
                  h = new Map();
                  for (var v = c; v < s;) h.set(r[v], v++);
                }
                var m = h.get(t[l]);
                if (null != m) {
                  if (c < m && m < s) {
                    for (var x = l, y = 1, b = void 0; ++x < a && x < s && null != (b = h.get(t[x])) && b === m + y;) y++;
                    if (y > m - c) for (var w = t[l]; c < m;) o(e, r[c++], w);else g(e, r[c++], t[l++]);
                  } else l++;
                } else i(e, t[l++]);
              }
            } else l++, c++;
          }
          function p(e, r, n, a) {
            if (void 0 === n) {
              for (var u; u = l(e);) i(e, u);
              return a && o(e, a), "";
            }
            var c = a || t("");
            if (r.length) for (var d = !1, h = r.length - 1; h >= 0; h--) {
              var f = r[h];
              if (c !== f) {
                var p = s(f) === e;
                d || h ? p && i(e, f) : p ? g(e, c, f) : o(e, c, n);
              } else d = !0;
            } else o(e, c, n);
            return [c];
          }
          function v(e, t, r) {
            for (var n = 0, i = t.length; n < i; n++) o(e, t[n], r);
          }
          function g(e, t, r) {
            o(e, t, r), i(e, r);
          }
          function m(e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var n = arguments.length > 3 ? arguments[3] : undefined;
            return t || (t = {}), n || Fe(function () {
              return r.children = d(e, t.children, r.children);
            }), Fe(function () {
              return t.ref && t.ref(e);
            }), Fe(function () {
              for (var n in t) if ("children" !== n && "ref" !== n) {
                var o = t[n];
                o !== r[n] && (a(e, n, o, r[n]), r[n] = o);
              }
            }), r;
          }
          return {
            render: function render(e, t) {
              var r;
              return Ne(function (n) {
                r = n, c(t, e());
              }), r;
            },
            insert: c,
            spread: function spread(e, t, r) {
              "function" == typeof t ? Fe(function (n) {
                return m(e, t(), n, r);
              }) : m(e, t, void 0, r);
            },
            createElement: e,
            createTextNode: t,
            insertNode: o,
            setProp: function setProp(e, t, r, n) {
              return a(e, t, r, n), r;
            },
            mergeProps: mt,
            effect: Fe,
            memo: Pe,
            createComponent: ht,
            use: function use(e, t, r) {
              return je(function () {
                return e(t, r);
              });
            }
          };
        }
        var Nn,
          Bn = {
            createElement: function createElement(e) {
              return new wn(e);
            },
            createTextNode: function createTextNode(e) {
              return {
                type: vn.Text,
                text: e,
                parent: void 0
              };
            },
            replaceText: function replaceText(e, t) {
              cn(0, 0), e.text = t;
              var r = e.parent;
              I(r), r.text = r.getText();
            },
            setProperty: function setProperty(e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
              e[t] = r;
            },
            insertNode: function insertNode(e, t, r) {
              cn(0, 0), e.children.insert(t, r), t._queueDelete = !1, t instanceof wn ? e.rendered && t.render() : e.isTextNode() && (e.text = e.getText());
            },
            isTextNode: function isTextNode(e) {
              return e.isTextNode();
            },
            removeNode: function removeNode(e, t) {
              cn(0, 0), e.children.remove(t), t._queueDelete = !0, t instanceof wn && queueMicrotask(function () {
                return t.destroy();
              });
            },
            getParentNode: function getParentNode(e) {
              return e.parent;
            },
            getFirstChild: function getFirstChild(e) {
              return e.children[0];
            },
            getNextSibling: function getNextSibling(e) {
              var t = e.parent.children || [],
                r = t.indexOf(e) + 1;
              if (r < t.length) return t[r];
            }
          },
          On = function (e) {
            var t = kn(e);
            return t.mergeProps = mt, t;
          }(Bn);
        function Fn(e, t) {
          return Ln.apply(this, arguments);
        }
        function Ln() {
          return (Ln = w(y().mark(function e(t, r) {
            return y().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return Nn = sn(t || un.rendererOptions, r || "app"), e.next = 3, Nn.init();
                case 3:
                  return e.abrupt("return", e.sent);
                case 4:
                case "end":
                  return e.stop();
              }
            }, e);
          }))).apply(this, arguments);
        }
        var Pn = function () {
            var e = w(y().mark(function e(t, r) {
              var n, o;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = Bn.createElement("App"), e.next = 3, Fn(void 0, r);
                  case 3:
                    return n.lng = Nn.root, n.rendered = !0, o = On.render(t, n), e.abrupt("return", {
                      dispose: o,
                      rootNode: n,
                      renderer: Nn
                    });
                  case 7:
                  case "end":
                    return e.stop();
                }
              }, e);
            }));
            return function (t, r) {
              return e.apply(this, arguments);
            };
          }(),
          Mn = (On.effect, On.memo),
          zn = On.createComponent,
          Dn = On.createElement,
          jn = (On.createTextNode, On.insertNode, On.insert),
          Un = On.spread,
          Wn = On.setProp,
          Yn = On.mergeProps,
          Hn = On.use;
        function Qn() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return t = e, Number.isInteger(t) ? e : "string" == typeof e ? e.startsWith("#") ? Number(e.replace("#", "0x") + (7 === e.length ? "ff" : "")) : e.startsWith("0x") ? Number(e) : Number("0x" + (6 === e.length ? e + "ff" : e)) : 0;
          var t;
        }
        b({
          k: Mn,
          i: zn,
          q: Dn,
          x: jn,
          v: Un,
          m: Yn,
          r: Hn
        });
        var $n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
          Kn = function Kn(e) {
            try {
              return !!e();
            } catch (t) {
              return !0;
            }
          },
          Xn = !Kn(function () {
            var e = function () {}.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype");
          }),
          Gn = Xn,
          Vn = Function.prototype,
          qn = Vn.call,
          Zn = Gn && Vn.bind.bind(qn, qn),
          Jn = Gn ? Zn : function (e) {
            return function () {
              return qn.apply(e, arguments);
            };
          },
          eo = Jn,
          to = eo({}.toString),
          ro = eo("".slice),
          no = function no(e) {
            return ro(to(e), 8, -1);
          },
          oo = Kn,
          io = no,
          ao = Object,
          so = Jn("".split),
          lo = oo(function () {
            return !ao("z").propertyIsEnumerable(0);
          }) ? function (e) {
            return "String" === io(e) ? so(e, "") : ao(e);
          } : ao,
          uo = function uo(e) {
            return null == e;
          },
          co = uo,
          ho = TypeError,
          fo = function fo(e) {
            if (co(e)) throw new ho("Can't call method on " + e);
            return e;
          },
          po = lo,
          vo = fo,
          go = function go(e) {
            return po(vo(e));
          },
          mo = function mo(e) {
            return e && e.Math === Math && e;
          },
          xo = mo("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || mo("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || mo("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || mo("object" == _typeof($n) && $n) || mo("object" == _typeof($n) && $n) || function () {
            return this;
          }() || Function("return this")(),
          yo = {
            exports: {}
          },
          bo = xo,
          wo = Object.defineProperty,
          So = function So(e, t) {
            try {
              wo(bo, e, {
                value: t,
                configurable: !0,
                writable: !0
              });
            } catch (r) {
              bo[e] = t;
            }
            return t;
          },
          Ao = xo,
          To = So,
          Co = "__core-js_shared__",
          Ro = yo.exports = Ao[Co] || To(Co, {});
        (Ro.versions || (Ro.versions = [])).push({
          version: "3.38.1",
          mode: "global",
          copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
        var Io,
          _o,
          Eo = yo.exports,
          ko = Eo,
          No = function No(e, t) {
            return ko[e] || (ko[e] = t || {});
          },
          Bo = fo,
          Oo = Object,
          Fo = function Fo(e) {
            return Oo(Bo(e));
          },
          Lo = Fo,
          Po = Jn({}.hasOwnProperty),
          Mo = Object.hasOwn || function (e, t) {
            return Po(Lo(e), t);
          },
          zo = Jn,
          Do = 0,
          jo = Math.random(),
          Uo = zo(1..toString),
          Wo = function Wo(e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + Uo(++Do + jo, 36);
          },
          Yo = xo.navigator,
          Ho = Yo && Yo.userAgent,
          Qo = Ho ? String(Ho) : "",
          $o = xo,
          Ko = Qo,
          Xo = $o.process,
          Go = $o.Deno,
          Vo = Xo && Xo.versions || Go && Go.version,
          qo = Vo && Vo.v8;
        qo && (_o = (Io = qo.split("."))[0] > 0 && Io[0] < 4 ? 1 : +(Io[0] + Io[1])), !_o && Ko && (!(Io = Ko.match(/Edge\/(\d+)/)) || Io[1] >= 74) && (Io = Ko.match(/Chrome\/(\d+)/)) && (_o = +Io[1]);
        var Zo = _o,
          Jo = Zo,
          ei = Kn,
          ti = xo.String,
          ri = !!Object.getOwnPropertySymbols && !ei(function () {
            var e = Symbol("symbol detection");
            return !ti(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Jo && Jo < 41;
          }),
          ni = ri && !Symbol.sham && "symbol" == _typeof(Symbol.iterator),
          oi = No,
          ii = Mo,
          ai = Wo,
          si = ri,
          li = ni,
          ui = xo.Symbol,
          ci = oi("wks"),
          di = li ? ui["for"] || ui : ui && ui.withoutSetter || ai,
          hi = function hi(e) {
            return ii(ci, e) || (ci[e] = si && ii(ui, e) ? ui[e] : di("Symbol." + e)), ci[e];
          },
          fi = "object" == (typeof document === "undefined" ? "undefined" : _typeof(document)) && document.all,
          pi = void 0 === fi && void 0 !== fi ? function (e) {
            return "function" == typeof e || e === fi;
          } : function (e) {
            return "function" == typeof e;
          },
          vi = pi,
          gi = function gi(e) {
            return "object" == _typeof(e) ? null !== e : vi(e);
          },
          mi = gi,
          xi = String,
          yi = TypeError,
          bi = function bi(e) {
            if (mi(e)) return e;
            throw new yi(xi(e) + " is not an object");
          },
          wi = {},
          Si = !Kn(function () {
            return 7 !== Object.defineProperty({}, 1, {
              get: function get() {
                return 7;
              }
            })[1];
          }),
          Ai = Si && Kn(function () {
            return 42 !== Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1
            }).prototype;
          }),
          Ti = {},
          Ci = gi,
          Ri = xo.document,
          Ii = Ci(Ri) && Ci(Ri.createElement),
          _i = function _i(e) {
            return Ii ? Ri.createElement(e) : {};
          },
          Ei = _i,
          ki = !Si && !Kn(function () {
            return 7 !== Object.defineProperty(Ei("div"), "a", {
              get: function get() {
                return 7;
              }
            }).a;
          }),
          Ni = Xn,
          Bi = Function.prototype.call,
          Oi = Ni ? Bi.bind(Bi) : function () {
            return Bi.apply(Bi, arguments);
          },
          Fi = xo,
          Li = pi,
          Pi = function Pi(e, t) {
            return arguments.length < 2 ? (r = Fi[e], Li(r) ? r : void 0) : Fi[e] && Fi[e][t];
            var r;
          },
          Mi = Jn({}.isPrototypeOf),
          zi = Pi,
          Di = pi,
          ji = Mi,
          Ui = Object,
          Wi = ni ? function (e) {
            return "symbol" == _typeof(e);
          } : function (e) {
            var t = zi("Symbol");
            return Di(t) && ji(t.prototype, Ui(e));
          },
          Yi = String,
          Hi = function Hi(e) {
            try {
              return Yi(e);
            } catch (t) {
              return "Object";
            }
          },
          Qi = pi,
          $i = Hi,
          Ki = TypeError,
          Xi = function Xi(e) {
            if (Qi(e)) return e;
            throw new Ki($i(e) + " is not a function");
          },
          Gi = Xi,
          Vi = uo,
          qi = function qi(e, t) {
            var r = e[t];
            return Vi(r) ? void 0 : Gi(r);
          },
          Zi = Oi,
          Ji = pi,
          ea = gi,
          ta = TypeError,
          ra = Oi,
          na = gi,
          oa = Wi,
          ia = qi,
          aa = function aa(e, t) {
            var r, n;
            if ("string" === t && Ji(r = e.toString) && !ea(n = Zi(r, e))) return n;
            if (Ji(r = e.valueOf) && !ea(n = Zi(r, e))) return n;
            if ("string" !== t && Ji(r = e.toString) && !ea(n = Zi(r, e))) return n;
            throw new ta("Can't convert object to primitive value");
          },
          sa = TypeError,
          la = hi("toPrimitive"),
          ua = function ua(e, t) {
            if (!na(e) || oa(e)) return e;
            var r,
              n = ia(e, la);
            if (n) {
              if (void 0 === t && (t = "default"), r = ra(n, e, t), !na(r) || oa(r)) return r;
              throw new sa("Can't convert object to primitive value");
            }
            return void 0 === t && (t = "number"), aa(e, t);
          },
          ca = ua,
          da = Wi,
          ha = function ha(e) {
            var t = ca(e, "string");
            return da(t) ? t : t + "";
          },
          fa = Si,
          pa = ki,
          va = Ai,
          ga = bi,
          ma = ha,
          xa = TypeError,
          ya = Object.defineProperty,
          ba = Object.getOwnPropertyDescriptor,
          wa = "enumerable",
          Sa = "configurable",
          Aa = "writable";
        Ti.f = fa ? va ? function (e, t, r) {
          if (ga(e), t = ma(t), ga(r), "function" == typeof e && "prototype" === t && "value" in r && Aa in r && !r[Aa]) {
            var n = ba(e, t);
            n && n[Aa] && (e[t] = r.value, r = {
              configurable: Sa in r ? r[Sa] : n[Sa],
              enumerable: wa in r ? r[wa] : n[wa],
              writable: !1
            });
          }
          return ya(e, t, r);
        } : ya : function (e, t, r) {
          if (ga(e), t = ma(t), ga(r), pa) try {
            return ya(e, t, r);
          } catch (n) {}
          if ("get" in r || "set" in r) throw new xa("Accessors not supported");
          return "value" in r && (e[t] = r.value), e;
        };
        var Ta = Math.ceil,
          Ca = Math.floor,
          Ra = Math.trunc || function (e) {
            var t = +e;
            return (t > 0 ? Ca : Ta)(t);
          },
          Ia = function Ia(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : Ra(t);
          },
          _a = Ia,
          Ea = Math.max,
          ka = Math.min,
          Na = function Na(e, t) {
            var r = _a(e);
            return r < 0 ? Ea(r + t, 0) : ka(r, t);
          },
          Ba = Ia,
          Oa = Math.min,
          Fa = function Fa(e) {
            var t = Ba(e);
            return t > 0 ? Oa(t, 9007199254740991) : 0;
          },
          La = Fa,
          Pa = function Pa(e) {
            return La(e.length);
          },
          Ma = go,
          za = Na,
          Da = Pa,
          ja = function ja(e) {
            return function (t, r, n) {
              var o = Ma(t),
                i = Da(o);
              if (0 === i) return !e && -1;
              var a,
                s = za(n, i);
              if (e && r != r) {
                for (; i > s;) if ((a = o[s++]) != a) return !0;
              } else for (; i > s; s++) if ((e || s in o) && o[s] === r) return e || s || 0;
              return !e && -1;
            };
          },
          Ua = {
            includes: ja(!0),
            indexOf: ja(!1)
          },
          Wa = {},
          Ya = Mo,
          Ha = go,
          Qa = Ua.indexOf,
          $a = Wa,
          Ka = Jn([].push),
          Xa = function Xa(e, t) {
            var r,
              n = Ha(e),
              o = 0,
              i = [];
            for (r in n) !Ya($a, r) && Ya(n, r) && Ka(i, r);
            for (; t.length > o;) Ya(n, r = t[o++]) && (~Qa(i, r) || Ka(i, r));
            return i;
          },
          Ga = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
          Va = Xa,
          qa = Ga,
          Za = Object.keys || function (e) {
            return Va(e, qa);
          },
          Ja = Si,
          es = Ai,
          ts = Ti,
          rs = bi,
          ns = go,
          os = Za;
        wi.f = Ja && !es ? Object.defineProperties : function (e, t) {
          rs(e);
          for (var r, n = ns(t), o = os(t), i = o.length, a = 0; i > a;) ts.f(e, r = o[a++], n[r]);
          return e;
        };
        var is,
          as = Pi("document", "documentElement"),
          ss = Wo,
          ls = No("keys"),
          us = function us(e) {
            return ls[e] || (ls[e] = ss(e));
          },
          cs = bi,
          ds = wi,
          hs = Ga,
          fs = Wa,
          ps = as,
          vs = _i,
          gs = "prototype",
          ms = "script",
          xs = us("IE_PROTO"),
          ys = function ys() {},
          bs = function bs(e) {
            return "<" + ms + ">" + e + "</" + ms + ">";
          },
          ws = function ws(e) {
            e.write(bs("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t;
          },
          _Ss = function Ss() {
            try {
              is = new ActiveXObject("htmlfile");
            } catch (o) {}
            var e, t, r;
            _Ss = "undefined" != typeof document ? document.domain && is ? ws(is) : (t = vs("iframe"), r = "java" + ms + ":", t.style.display = "none", ps.appendChild(t), t.src = String(r), (e = t.contentWindow.document).open(), e.write(bs("document.F=Object")), e.close(), e.F) : ws(is);
            for (var n = hs.length; n--;) delete _Ss[gs][hs[n]];
            return _Ss();
          };
        fs[xs] = !0;
        var As = Object.create || function (e, t) {
            var r;
            return null !== e ? (ys[gs] = cs(e), r = new ys(), ys[gs] = null, r[xs] = e) : r = _Ss(), void 0 === t ? r : ds.f(r, t);
          },
          Ts = hi,
          Cs = As,
          Rs = Ti.f,
          Is = Ts("unscopables"),
          _s = Array.prototype;
        void 0 === _s[Is] && Rs(_s, Is, {
          configurable: !0,
          value: Cs(null)
        });
        var Es,
          ks,
          Ns,
          Bs = function Bs(e) {
            _s[Is][e] = !0;
          },
          Os = {},
          Fs = pi,
          Ls = xo.WeakMap,
          Ps = Fs(Ls) && /native code/.test(String(Ls)),
          Ms = function Ms(e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
            };
          },
          zs = Ti,
          Ds = Ms,
          js = Si ? function (e, t, r) {
            return zs.f(e, t, Ds(1, r));
          } : function (e, t, r) {
            return e[t] = r, e;
          },
          Us = Ps,
          Ws = xo,
          Ys = gi,
          Hs = js,
          Qs = Mo,
          $s = Eo,
          Ks = us,
          Xs = Wa,
          Gs = "Object already initialized",
          Vs = Ws.TypeError,
          qs = Ws.WeakMap;
        if (Us || $s.state) {
          var Zs = $s.state || ($s.state = new qs());
          Zs.get = Zs.get, Zs.has = Zs.has, Zs.set = Zs.set, Es = function Es(e, t) {
            if (Zs.has(e)) throw new Vs(Gs);
            return t.facade = e, Zs.set(e, t), t;
          }, ks = function ks(e) {
            return Zs.get(e) || {};
          }, Ns = function Ns(e) {
            return Zs.has(e);
          };
        } else {
          var Js = Ks("state");
          Xs[Js] = !0, Es = function Es(e, t) {
            if (Qs(e, Js)) throw new Vs(Gs);
            return t.facade = e, Hs(e, Js, t), t;
          }, ks = function ks(e) {
            return Qs(e, Js) ? e[Js] : {};
          }, Ns = function Ns(e) {
            return Qs(e, Js);
          };
        }
        var el = {
            set: Es,
            get: ks,
            has: Ns,
            enforce: function enforce(e) {
              return Ns(e) ? ks(e) : Es(e, {});
            },
            getterFor: function getterFor(e) {
              return function (t) {
                var r;
                if (!Ys(t) || (r = ks(t)).type !== e) throw new Vs("Incompatible receiver, " + e + " required");
                return r;
              };
            }
          },
          tl = {},
          rl = {},
          nl = {}.propertyIsEnumerable,
          ol = Object.getOwnPropertyDescriptor,
          il = ol && !nl.call({
            1: 2
          }, 1);
        rl.f = il ? function (e) {
          var t = ol(this, e);
          return !!t && t.enumerable;
        } : nl;
        var al = Si,
          sl = Oi,
          ll = rl,
          ul = Ms,
          cl = go,
          dl = ha,
          hl = Mo,
          fl = ki,
          pl = Object.getOwnPropertyDescriptor;
        tl.f = al ? pl : function (e, t) {
          if (e = cl(e), t = dl(t), fl) try {
            return pl(e, t);
          } catch (r) {}
          if (hl(e, t)) return ul(!sl(ll.f, e, t), e[t]);
        };
        var vl = {
            exports: {}
          },
          gl = Si,
          ml = Mo,
          xl = Function.prototype,
          yl = gl && Object.getOwnPropertyDescriptor,
          bl = ml(xl, "name"),
          wl = {
            EXISTS: bl,
            PROPER: bl && "something" === function () {}.name,
            CONFIGURABLE: bl && (!gl || gl && yl(xl, "name").configurable)
          },
          Sl = pi,
          Al = Eo,
          Tl = Jn(Function.toString);
        Sl(Al.inspectSource) || (Al.inspectSource = function (e) {
          return Tl(e);
        });
        var Cl = Al.inspectSource,
          Rl = Jn,
          Il = Kn,
          _l = pi,
          El = Mo,
          kl = Si,
          Nl = wl.CONFIGURABLE,
          Bl = Cl,
          Ol = el.enforce,
          Fl = el.get,
          Ll = String,
          Pl = Object.defineProperty,
          Ml = Rl("".slice),
          zl = Rl("".replace),
          Dl = Rl([].join),
          jl = kl && !Il(function () {
            return 8 !== Pl(function () {}, "length", {
              value: 8
            }).length;
          }),
          Ul = String(String).split("String"),
          Wl = vl.exports = function (e, t, r) {
            "Symbol(" === Ml(Ll(t), 0, 7) && (t = "[" + zl(Ll(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!El(e, "name") || Nl && e.name !== t) && (kl ? Pl(e, "name", {
              value: t,
              configurable: !0
            }) : e.name = t), jl && r && El(r, "arity") && e.length !== r.arity && Pl(e, "length", {
              value: r.arity
            });
            try {
              r && El(r, "constructor") && r.constructor ? kl && Pl(e, "prototype", {
                writable: !1
              }) : e.prototype && (e.prototype = void 0);
            } catch (o) {}
            var n = Ol(e);
            return El(n, "source") || (n.source = Dl(Ul, "string" == typeof t ? t : "")), e;
          };
        Function.prototype.toString = Wl(function () {
          return _l(this) && Fl(this).source || Bl(this);
        }, "toString");
        var Yl = vl.exports,
          Hl = pi,
          Ql = Ti,
          $l = Yl,
          Kl = So,
          Xl = function Xl(e, t, r, n) {
            n || (n = {});
            var o = n.enumerable,
              i = void 0 !== n.name ? n.name : t;
            if (Hl(r) && $l(r, i, n), n.global) o ? e[t] = r : Kl(t, r);else {
              try {
                n.unsafe ? e[t] && (o = !0) : delete e[t];
              } catch (a) {}
              o ? e[t] = r : Ql.f(e, t, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
              });
            }
            return e;
          },
          Gl = {},
          Vl = Xa,
          ql = Ga.concat("length", "prototype");
        Gl.f = Object.getOwnPropertyNames || function (e) {
          return Vl(e, ql);
        };
        var Zl = {};
        Zl.f = Object.getOwnPropertySymbols;
        var Jl,
          eu,
          tu,
          ru = Pi,
          nu = Gl,
          ou = Zl,
          iu = bi,
          au = Jn([].concat),
          su = ru("Reflect", "ownKeys") || function (e) {
            var t = nu.f(iu(e)),
              r = ou.f;
            return r ? au(t, r(e)) : t;
          },
          lu = Mo,
          uu = su,
          cu = tl,
          du = Ti,
          hu = function hu(e, t, r) {
            for (var n = uu(t), o = du.f, i = cu.f, a = 0; a < n.length; a++) {
              var s = n[a];
              lu(e, s) || r && lu(r, s) || o(e, s, i(t, s));
            }
          },
          fu = Kn,
          pu = pi,
          vu = /#|\.prototype\./,
          gu = function gu(e, t) {
            var r = xu[mu(e)];
            return r === bu || r !== yu && (pu(t) ? fu(t) : !!t);
          },
          mu = gu.normalize = function (e) {
            return String(e).replace(vu, ".").toLowerCase();
          },
          xu = gu.data = {},
          yu = gu.NATIVE = "N",
          bu = gu.POLYFILL = "P",
          wu = gu,
          Su = xo,
          Au = tl.f,
          Tu = js,
          Cu = Xl,
          Ru = So,
          Iu = hu,
          _u = wu,
          Eu = function Eu(e, t) {
            var r,
              n,
              o,
              i,
              a,
              s = e.target,
              l = e.global,
              u = e.stat;
            if (r = l ? Su : u ? Su[s] || Ru(s, {}) : Su[s] && Su[s].prototype) for (n in t) {
              if (i = t[n], o = e.dontCallGetSet ? (a = Au(r, n)) && a.value : r[n], !_u(l ? n : s + (u ? "." : "#") + n, e.forced) && void 0 !== o) {
                if (_typeof(i) == _typeof(o)) continue;
                Iu(i, o);
              }
              (e.sham || o && o.sham) && Tu(i, "sham", !0), Cu(r, n, i, e);
            }
          },
          ku = !Kn(function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
          }),
          Nu = Mo,
          Bu = pi,
          Ou = Fo,
          Fu = ku,
          Lu = us("IE_PROTO"),
          Pu = Object,
          Mu = Pu.prototype,
          zu = Fu ? Pu.getPrototypeOf : function (e) {
            var t = Ou(e);
            if (Nu(t, Lu)) return t[Lu];
            var r = t.constructor;
            return Bu(r) && t instanceof r ? r.prototype : t instanceof Pu ? Mu : null;
          },
          Du = Kn,
          ju = pi,
          Uu = gi,
          Wu = zu,
          Yu = Xl,
          Hu = hi("iterator"),
          Qu = !1;
        [].keys && ("next" in (tu = [].keys()) ? (eu = Wu(Wu(tu))) !== Object.prototype && (Jl = eu) : Qu = !0);
        var $u = !Uu(Jl) || Du(function () {
          var e = {};
          return Jl[Hu].call(e) !== e;
        });
        $u && (Jl = {}), ju(Jl[Hu]) || Yu(Jl, Hu, function () {
          return this;
        });
        var Ku = {
            IteratorPrototype: Jl,
            BUGGY_SAFARI_ITERATORS: Qu
          },
          Xu = Ti.f,
          Gu = Mo,
          Vu = hi("toStringTag"),
          qu = function qu(e, t, r) {
            e && !r && (e = e.prototype), e && !Gu(e, Vu) && Xu(e, Vu, {
              configurable: !0,
              value: t
            });
          },
          Zu = Ku.IteratorPrototype,
          Ju = As,
          ec = Ms,
          tc = qu,
          rc = Os,
          nc = function nc() {
            return this;
          },
          oc = function oc(e, t, r, n) {
            var o = t + " Iterator";
            return e.prototype = Ju(Zu, {
              next: ec(+!n, r)
            }), tc(e, o, !1), rc[o] = nc, e;
          },
          ic = Jn,
          ac = Xi,
          sc = function sc(e, t, r) {
            try {
              return ic(ac(Object.getOwnPropertyDescriptor(e, t)[r]));
            } catch (n) {}
          },
          lc = gi,
          uc = function uc(e) {
            return lc(e) || null === e;
          },
          cc = uc,
          dc = String,
          hc = TypeError,
          fc = sc,
          pc = gi,
          vc = fo,
          gc = function gc(e) {
            if (cc(e)) return e;
            throw new hc("Can't set " + dc(e) + " as a prototype");
          },
          mc = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e,
              t = !1,
              r = {};
            try {
              (e = fc(Object.prototype, "__proto__", "set"))(r, []), t = r instanceof Array;
            } catch (n) {}
            return function (r, n) {
              return vc(r), gc(n), pc(r) ? (t ? e(r, n) : r.__proto__ = n, r) : r;
            };
          }() : void 0),
          xc = Eu,
          yc = Oi,
          bc = pi,
          wc = oc,
          Sc = zu,
          Ac = mc,
          Tc = qu,
          Cc = js,
          Rc = Xl,
          Ic = Os,
          _c = wl.PROPER,
          Ec = wl.CONFIGURABLE,
          kc = Ku.IteratorPrototype,
          Nc = Ku.BUGGY_SAFARI_ITERATORS,
          Bc = hi("iterator"),
          Oc = "keys",
          Fc = "values",
          Lc = "entries",
          Pc = function Pc() {
            return this;
          },
          Mc = function Mc(e, t, r, n, o, i, a) {
            wc(r, t, n);
            var s,
              l,
              u,
              c = function c(e) {
                if (e === o && v) return v;
                if (!Nc && e && e in f) return f[e];
                switch (e) {
                  case Oc:
                  case Fc:
                  case Lc:
                    return function () {
                      return new r(this, e);
                    };
                }
                return function () {
                  return new r(this);
                };
              },
              d = t + " Iterator",
              h = !1,
              f = e.prototype,
              p = f[Bc] || f["@@iterator"] || o && f[o],
              v = !Nc && p || c(o),
              g = "Array" === t && f.entries || p;
            if (g && (s = Sc(g.call(new e()))) !== Object.prototype && s.next && (Sc(s) !== kc && (Ac ? Ac(s, kc) : bc(s[Bc]) || Rc(s, Bc, Pc)), Tc(s, d, !0)), _c && o === Fc && p && p.name !== Fc && (Ec ? Cc(f, "name", Fc) : (h = !0, v = function v() {
              return yc(p, this);
            })), o) if (l = {
              values: c(Fc),
              keys: i ? v : c(Oc),
              entries: c(Lc)
            }, a) for (u in l) (Nc || h || !(u in f)) && Rc(f, u, l[u]);else xc({
              target: t,
              proto: !0,
              forced: Nc || h
            }, l);
            return f[Bc] !== v && Rc(f, Bc, v, {
              name: o
            }), Ic[t] = v, l;
          },
          zc = function zc(e, t) {
            return {
              value: e,
              done: t
            };
          },
          Dc = go,
          jc = Bs,
          Uc = Os,
          Wc = el,
          Yc = Ti.f,
          Hc = Mc,
          Qc = zc,
          $c = Si,
          Kc = "Array Iterator",
          Xc = Wc.set,
          Gc = Wc.getterFor(Kc);
        Hc(Array, "Array", function (e, t) {
          Xc(this, {
            type: Kc,
            target: Dc(e),
            index: 0,
            kind: t
          });
        }, function () {
          var e = Gc(this),
            t = e.target,
            r = e.index++;
          if (!t || r >= t.length) return e.target = null, Qc(void 0, !0);
          switch (e.kind) {
            case "keys":
              return Qc(r, !1);
            case "values":
              return Qc(t[r], !1);
          }
          return Qc([r, t[r]], !1);
        }, "values");
        var Vc = Uc.Arguments = Uc.Array;
        if (jc("keys"), jc("values"), jc("entries"), $c && "values" !== Vc.name) try {
          Yc(Vc, "name", {
            value: "values"
          });
        } catch (IY) {}
        var qc = {
            exports: {}
          },
          Zc = {},
          Jc = Jn([].slice),
          ed = no,
          td = go,
          rd = Gl.f,
          nd = Jc,
          od = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        Zc.f = function (e) {
          return od && "Window" === ed(e) ? function (e) {
            try {
              return rd(e);
            } catch (IY) {
              return nd(od);
            }
          }(e) : rd(td(e));
        };
        var id = Kn(function () {
            if ("function" == typeof ArrayBuffer) {
              var e = new ArrayBuffer(8);
              Object.isExtensible(e) && Object.defineProperty(e, "a", {
                value: 8
              });
            }
          }),
          ad = Kn,
          sd = gi,
          ld = no,
          ud = id,
          cd = Object.isExtensible,
          dd = ad(function () {
            cd(1);
          }) || ud ? function (e) {
            return !!sd(e) && (!ud || "ArrayBuffer" !== ld(e)) && (!cd || cd(e));
          } : cd,
          hd = !Kn(function () {
            return Object.isExtensible(Object.preventExtensions({}));
          }),
          fd = Eu,
          pd = Jn,
          vd = Wa,
          gd = gi,
          md = Mo,
          xd = Ti.f,
          yd = Gl,
          bd = Zc,
          wd = dd,
          Sd = hd,
          Ad = !1,
          Td = Wo("meta"),
          Cd = 0,
          Rd = function Rd(e) {
            xd(e, Td, {
              value: {
                objectID: "O" + Cd++,
                weakData: {}
              }
            });
          },
          Id = qc.exports = {
            enable: function enable() {
              Id.enable = function () {}, Ad = !0;
              var e = yd.f,
                t = pd([].splice),
                r = {};
              r[Td] = 1, e(r).length && (yd.f = function (r) {
                for (var n = e(r), o = 0, i = n.length; o < i; o++) if (n[o] === Td) {
                  t(n, o, 1);
                  break;
                }
                return n;
              }, fd({
                target: "Object",
                stat: !0,
                forced: !0
              }, {
                getOwnPropertyNames: bd.f
              }));
            },
            fastKey: function fastKey(e, t) {
              if (!gd(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;
              if (!md(e, Td)) {
                if (!wd(e)) return "F";
                if (!t) return "E";
                Rd(e);
              }
              return e[Td].objectID;
            },
            getWeakData: function getWeakData(e, t) {
              if (!md(e, Td)) {
                if (!wd(e)) return !0;
                if (!t) return !1;
                Rd(e);
              }
              return e[Td].weakData;
            },
            onFreeze: function onFreeze(e) {
              return Sd && Ad && wd(e) && !md(e, Td) && Rd(e), e;
            }
          };
        vd[Td] = !0;
        var _d = qc.exports,
          Ed = no,
          kd = Jn,
          Nd = function Nd(e) {
            if ("Function" === Ed(e)) return kd(e);
          },
          Bd = Xi,
          Od = Xn,
          Fd = Nd(Nd.bind),
          Ld = function Ld(e, t) {
            return Bd(e), void 0 === t ? e : Od ? Fd(e, t) : function () {
              return e.apply(t, arguments);
            };
          },
          Pd = Os,
          Md = hi("iterator"),
          zd = Array.prototype,
          Dd = function Dd(e) {
            return void 0 !== e && (Pd.Array === e || zd[Md] === e);
          },
          jd = {};
        jd[hi("toStringTag")] = "z";
        var Ud = "[object z]" === String(jd),
          Wd = Ud,
          Yd = pi,
          Hd = no,
          Qd = hi("toStringTag"),
          $d = Object,
          Kd = "Arguments" === Hd(function () {
            return arguments;
          }()),
          Xd = Wd ? Hd : function (e) {
            var t, r, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
              try {
                return e[t];
              } catch (IY) {}
            }(t = $d(e), Qd)) ? r : Kd ? Hd(t) : "Object" === (n = Hd(t)) && Yd(t.callee) ? "Arguments" : n;
          },
          Gd = Xd,
          Vd = qi,
          qd = uo,
          Zd = Os,
          Jd = hi("iterator"),
          eh = function eh(e) {
            if (!qd(e)) return Vd(e, Jd) || Vd(e, "@@iterator") || Zd[Gd(e)];
          },
          th = Oi,
          rh = Xi,
          nh = bi,
          oh = Hi,
          ih = eh,
          ah = TypeError,
          sh = function sh(e, t) {
            var r = arguments.length < 2 ? ih(e) : t;
            if (rh(r)) return nh(th(r, e));
            throw new ah(oh(e) + " is not iterable");
          },
          lh = Oi,
          uh = bi,
          ch = qi,
          dh = function dh(e, t, r) {
            var n, o;
            uh(e);
            try {
              if (!(n = ch(e, "return"))) {
                if ("throw" === t) throw r;
                return r;
              }
              n = lh(n, e);
            } catch (IY) {
              o = !0, n = IY;
            }
            if ("throw" === t) throw r;
            if (o) throw n;
            return uh(n), r;
          },
          hh = Ld,
          fh = Oi,
          ph = bi,
          vh = Hi,
          gh = Dd,
          mh = Pa,
          xh = Mi,
          yh = sh,
          bh = eh,
          wh = dh,
          Sh = TypeError,
          Ah = function Ah(e, t) {
            this.stopped = e, this.result = t;
          },
          Th = Ah.prototype,
          Ch = function Ch(e, t, r) {
            var n,
              o,
              i,
              a,
              s,
              l,
              u,
              c = r && r.that,
              d = !(!r || !r.AS_ENTRIES),
              h = !(!r || !r.IS_RECORD),
              f = !(!r || !r.IS_ITERATOR),
              p = !(!r || !r.INTERRUPTED),
              v = hh(t, c),
              g = function g(e) {
                return n && wh(n, "normal", e), new Ah(!0, e);
              },
              m = function m(e) {
                return d ? (ph(e), p ? v(e[0], e[1], g) : v(e[0], e[1])) : p ? v(e, g) : v(e);
              };
            if (h) n = e.iterator;else if (f) n = e;else {
              if (!(o = bh(e))) throw new Sh(vh(e) + " is not iterable");
              if (gh(o)) {
                for (i = 0, a = mh(e); a > i; i++) if ((s = m(e[i])) && xh(Th, s)) return s;
                return new Ah(!1);
              }
              n = yh(e, o);
            }
            for (l = h ? e.next : n.next; !(u = fh(l, n)).done;) {
              try {
                s = m(u.value);
              } catch (IY) {
                wh(n, "throw", IY);
              }
              if ("object" == _typeof(s) && s && xh(Th, s)) return s;
            }
            return new Ah(!1);
          },
          Rh = Mi,
          Ih = TypeError,
          _h = function _h(e, t) {
            if (Rh(t, e)) return e;
            throw new Ih("Incorrect invocation");
          },
          Eh = hi("iterator"),
          kh = !1;
        try {
          var Nh = 0,
            Bh = {
              next: function next() {
                return {
                  done: !!Nh++
                };
              },
              "return": function _return() {
                kh = !0;
              }
            };
          Bh[Eh] = function () {
            return this;
          }, Array.from(Bh, function () {
            throw 2;
          });
        } catch (IY) {}
        var Oh = function Oh(e, t) {
            try {
              if (!t && !kh) return !1;
            } catch (IY) {
              return !1;
            }
            var r = !1;
            try {
              var n = {};
              n[Eh] = function () {
                return {
                  next: function next() {
                    return {
                      done: r = !0
                    };
                  }
                };
              }, e(n);
            } catch (IY) {}
            return r;
          },
          Fh = pi,
          Lh = gi,
          Ph = mc,
          Mh = function Mh(e, t, r) {
            var n, o;
            return Ph && Fh(n = t.constructor) && n !== r && Lh(o = n.prototype) && o !== r.prototype && Ph(e, o), e;
          },
          zh = Eu,
          Dh = xo,
          jh = Jn,
          Uh = wu,
          Wh = Xl,
          Yh = _d,
          Hh = Ch,
          Qh = _h,
          $h = pi,
          Kh = uo,
          Xh = gi,
          Gh = Kn,
          Vh = Oh,
          qh = qu,
          Zh = Mh,
          Jh = function Jh(e, t, r) {
            var n = -1 !== e.indexOf("Map"),
              o = -1 !== e.indexOf("Weak"),
              i = n ? "set" : "add",
              a = Dh[e],
              s = a && a.prototype,
              l = a,
              u = {},
              c = function c(e) {
                var t = jh(s[e]);
                Wh(s, e, "add" === e ? function (e) {
                  return t(this, 0 === e ? 0 : e), this;
                } : "delete" === e ? function (e) {
                  return !(o && !Xh(e)) && t(this, 0 === e ? 0 : e);
                } : "get" === e ? function (e) {
                  return o && !Xh(e) ? void 0 : t(this, 0 === e ? 0 : e);
                } : "has" === e ? function (e) {
                  return !(o && !Xh(e)) && t(this, 0 === e ? 0 : e);
                } : function (e, r) {
                  return t(this, 0 === e ? 0 : e, r), this;
                });
              };
            if (Uh(e, !$h(a) || !(o || s.forEach && !Gh(function () {
              new a().entries().next();
            })))) l = r.getConstructor(t, e, n, i), Yh.enable();else if (Uh(e, !0)) {
              var d = new l(),
                h = d[i](o ? {} : -0, 1) !== d,
                f = Gh(function () {
                  d.has(1);
                }),
                p = Vh(function (e) {
                  new a(e);
                }),
                v = !o && Gh(function () {
                  for (var e = new a(), t = 5; t--;) e[i](t, t);
                  return !e.has(-0);
                });
              p || ((l = t(function (e, t) {
                Qh(e, s);
                var r = Zh(new a(), e, l);
                return Kh(t) || Hh(t, r[i], {
                  that: r,
                  AS_ENTRIES: n
                }), r;
              })).prototype = s, s.constructor = l), (f || v) && (c("delete"), c("has"), n && c("get")), (v || h) && c(i), o && s.clear && delete s.clear;
            }
            return u[e] = l, zh({
              global: !0,
              constructor: !0,
              forced: l !== a
            }, u), qh(l, e), o || r.setStrong(l, e, n), l;
          },
          ef = Yl,
          tf = Ti,
          rf = function rf(e, t, r) {
            return r.get && ef(r.get, t, {
              getter: !0
            }), r.set && ef(r.set, t, {
              setter: !0
            }), tf.f(e, t, r);
          },
          nf = Xl,
          of = Pi,
          af = rf,
          sf = Si,
          lf = hi("species"),
          uf = function uf(e) {
            var t = of(e);
            sf && t && !t[lf] && af(t, lf, {
              configurable: !0,
              get: function get() {
                return this;
              }
            });
          },
          cf = As,
          df = rf,
          hf = function hf(e, t, r) {
            for (var n in t) nf(e, n, t[n], r);
            return e;
          },
          ff = Ld,
          pf = _h,
          vf = uo,
          gf = Ch,
          mf = Mc,
          xf = zc,
          yf = uf,
          bf = Si,
          wf = _d.fastKey,
          Sf = el.set,
          Af = el.getterFor,
          Tf = {
            getConstructor: function getConstructor(e, t, r, n) {
              var o = e(function (e, o) {
                  pf(e, i), Sf(e, {
                    type: t,
                    index: cf(null),
                    first: null,
                    last: null,
                    size: 0
                  }), bf || (e.size = 0), vf(o) || gf(o, e[n], {
                    that: e,
                    AS_ENTRIES: r
                  });
                }),
                i = o.prototype,
                a = Af(t),
                s = function s(e, t, r) {
                  var n,
                    o,
                    i = a(e),
                    s = l(e, t);
                  return s ? s.value = r : (i.last = s = {
                    index: o = wf(t, !0),
                    key: t,
                    value: r,
                    previous: n = i.last,
                    next: null,
                    removed: !1
                  }, i.first || (i.first = s), n && (n.next = s), bf ? i.size++ : e.size++, "F" !== o && (i.index[o] = s)), e;
                },
                l = function l(e, t) {
                  var r,
                    n = a(e),
                    o = wf(t);
                  if ("F" !== o) return n.index[o];
                  for (r = n.first; r; r = r.next) if (r.key === t) return r;
                };
              return hf(i, {
                clear: function clear() {
                  for (var e = a(this), t = e.first; t;) t.removed = !0, t.previous && (t.previous = t.previous.next = null), t = t.next;
                  e.first = e.last = null, e.index = cf(null), bf ? e.size = 0 : this.size = 0;
                },
                "delete": function _delete(e) {
                  var t = this,
                    r = a(t),
                    n = l(t, e);
                  if (n) {
                    var o = n.next,
                      i = n.previous;
                    delete r.index[n.index], n.removed = !0, i && (i.next = o), o && (o.previous = i), r.first === n && (r.first = o), r.last === n && (r.last = i), bf ? r.size-- : t.size--;
                  }
                  return !!n;
                },
                forEach: function forEach(e) {
                  for (var t, r = a(this), n = ff(e, arguments.length > 1 ? arguments[1] : void 0); t = t ? t.next : r.first;) for (n(t.value, t.key, this); t && t.removed;) t = t.previous;
                },
                has: function has(e) {
                  return !!l(this, e);
                }
              }), hf(i, r ? {
                get: function get(e) {
                  var t = l(this, e);
                  return t && t.value;
                },
                set: function set(e, t) {
                  return s(this, 0 === e ? 0 : e, t);
                }
              } : {
                add: function add(e) {
                  return s(this, e = 0 === e ? 0 : e, e);
                }
              }), bf && df(i, "size", {
                configurable: !0,
                get: function get() {
                  return a(this).size;
                }
              }), o;
            },
            setStrong: function setStrong(e, t, r) {
              var n = t + " Iterator",
                o = Af(t),
                i = Af(n);
              mf(e, t, function (e, t) {
                Sf(this, {
                  type: n,
                  target: e,
                  state: o(e),
                  kind: t,
                  last: null
                });
              }, function () {
                for (var e = i(this), t = e.kind, r = e.last; r && r.removed;) r = r.previous;
                return e.target && (e.last = r = r ? r.next : e.state.first) ? xf("keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value], !1) : (e.target = null, xf(void 0, !0));
              }, r ? "entries" : "values", !r, !0), yf(t);
            }
          };
        Jh("Map", function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        }, Tf);
        var Cf = Jn,
          Rf = Map.prototype,
          If = {
            Map: Map,
            set: Cf(Rf.set),
            get: Cf(Rf.get),
            has: Cf(Rf.has),
            remove: Cf(Rf["delete"]),
            proto: Rf
          },
          _f = Eu,
          Ef = Xi,
          kf = fo,
          Nf = Ch,
          Bf = Kn,
          Of = If.Map,
          Ff = If.has,
          Lf = If.get,
          Pf = If.set,
          Mf = Jn([].push);
        _f({
          target: "Map",
          stat: !0,
          forced: Bf(function () {
            return 1 !== Of.groupBy("ab", function (e) {
              return e;
            }).get("a").length;
          })
        }, {
          groupBy: function groupBy(e, t) {
            kf(e), Ef(t);
            var r = new Of(),
              n = 0;
            return Nf(e, function (e) {
              var o = t(e, n++);
              Ff(r, o) ? Mf(Lf(r, o), e) : Pf(r, o, [e]);
            }), r;
          }
        });
        var zf = Xd,
          Df = Ud ? {}.toString : function () {
            return "[object " + zf(this) + "]";
          };
        Ud || Xl(Object.prototype, "toString", Df, {
          unsafe: !0
        });
        var jf = Xd,
          Uf = String,
          Wf = function Wf(e) {
            if ("Symbol" === jf(e)) throw new TypeError("Cannot convert a Symbol value to a string");
            return Uf(e);
          },
          Yf = Jn,
          Hf = Ia,
          Qf = Wf,
          $f = fo,
          Kf = Yf("".charAt),
          Xf = Yf("".charCodeAt),
          Gf = Yf("".slice),
          Vf = function Vf(e) {
            return function (t, r) {
              var n,
                o,
                i = Qf($f(t)),
                a = Hf(r),
                s = i.length;
              return a < 0 || a >= s ? e ? "" : void 0 : (n = Xf(i, a)) < 55296 || n > 56319 || a + 1 === s || (o = Xf(i, a + 1)) < 56320 || o > 57343 ? e ? Kf(i, a) : n : e ? Gf(i, a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536;
            };
          },
          qf = {
            codeAt: Vf(!1),
            charAt: Vf(!0)
          },
          Zf = qf.charAt,
          Jf = Wf,
          ep = el,
          tp = Mc,
          rp = zc,
          np = "String Iterator",
          op = ep.set,
          ip = ep.getterFor(np);
        tp(String, "String", function (e) {
          op(this, {
            type: np,
            string: Jf(e),
            index: 0
          });
        }, function () {
          var e,
            t = ip(this),
            r = t.string,
            n = t.index;
          return n >= r.length ? rp(void 0, !0) : (e = Zf(r, n), t.index += e.length, rp(e, !1));
        });
        var ap = xo;
        ap.Map, Jh("Set", function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        }, Tf);
        var sp = Jn,
          lp = Set.prototype,
          up = {
            Set: Set,
            add: sp(lp.add),
            has: sp(lp.has),
            remove: sp(lp["delete"]),
            proto: lp
          },
          cp = up.has,
          dp = function dp(e) {
            return cp(e), e;
          },
          hp = Oi,
          fp = function fp(e, t, r) {
            for (var n, o, i = r ? e : e.iterator, a = e.next; !(n = hp(a, i)).done;) if (void 0 !== (o = t(n.value))) return o;
          },
          pp = Jn,
          vp = fp,
          gp = up.Set,
          mp = up.proto,
          xp = pp(mp.forEach),
          yp = pp(mp.keys),
          bp = yp(new gp()).next,
          wp = function wp(e, t, r) {
            return r ? vp({
              iterator: yp(e),
              next: bp
            }, t) : xp(e, t);
          },
          Sp = wp,
          Ap = up.Set,
          Tp = up.add,
          Cp = function Cp(e) {
            var t = new Ap();
            return Sp(e, function (e) {
              Tp(t, e);
            }), t;
          },
          Rp = sc(up.proto, "size", "get") || function (e) {
            return e.size;
          },
          Ip = Xi,
          _p = bi,
          Ep = Oi,
          kp = Ia,
          Np = function Np(e) {
            return {
              iterator: e,
              next: e.next,
              done: !1
            };
          },
          Bp = "Invalid size",
          Op = RangeError,
          Fp = TypeError,
          Lp = Math.max,
          Pp = function Pp(e, t) {
            this.set = e, this.size = Lp(t, 0), this.has = Ip(e.has), this.keys = Ip(e.keys);
          };
        Pp.prototype = {
          getIterator: function getIterator() {
            return Np(_p(Ep(this.keys, this.set)));
          },
          includes: function includes(e) {
            return Ep(this.has, this.set, e);
          }
        };
        var Mp = function Mp(e) {
            _p(e);
            var t = +e.size;
            if (t != t) throw new Fp(Bp);
            var r = kp(t);
            if (r < 0) throw new Op(Bp);
            return new Pp(e, r);
          },
          zp = dp,
          Dp = Cp,
          jp = Rp,
          Up = Mp,
          Wp = wp,
          Yp = fp,
          Hp = up.has,
          Qp = up.remove,
          $p = Pi,
          Kp = function Kp(e) {
            return {
              size: e,
              has: function has() {
                return !1;
              },
              keys: function keys() {
                return {
                  next: function next() {
                    return {
                      done: !0
                    };
                  }
                };
              }
            };
          },
          Xp = function Xp(e) {
            var t = $p("Set");
            try {
              new t()[e](Kp(0));
              try {
                return new t()[e](Kp(-1)), !1;
              } catch (r) {
                return !0;
              }
            } catch (IY) {
              return !1;
            }
          },
          Gp = function Gp(e) {
            var t = zp(this),
              r = Up(e),
              n = Dp(t);
            return jp(t) <= r.size ? Wp(t, function (e) {
              r.includes(e) && Qp(n, e);
            }) : Yp(r.getIterator(), function (e) {
              Hp(t, e) && Qp(n, e);
            }), n;
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("difference")
        }, {
          difference: Gp
        });
        var Vp = dp,
          qp = Rp,
          Zp = Mp,
          Jp = wp,
          ev = fp,
          tv = up.Set,
          rv = up.add,
          nv = up.has,
          ov = Kn,
          iv = function iv(e) {
            var t = Vp(this),
              r = Zp(e),
              n = new tv();
            return qp(t) > r.size ? ev(r.getIterator(), function (e) {
              nv(t, e) && rv(n, e);
            }) : Jp(t, function (e) {
              r.includes(e) && rv(n, e);
            }), n;
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("intersection") || ov(function () {
            return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))));
          })
        }, {
          intersection: iv
        });
        var av = dp,
          sv = up.has,
          lv = Rp,
          uv = Mp,
          cv = wp,
          dv = fp,
          hv = dh,
          fv = function fv(e) {
            var t = av(this),
              r = uv(e);
            if (lv(t) <= r.size) return !1 !== cv(t, function (e) {
              if (r.includes(e)) return !1;
            }, !0);
            var n = r.getIterator();
            return !1 !== dv(n, function (e) {
              if (sv(t, e)) return hv(n, "normal", !1);
            });
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("isDisjointFrom")
        }, {
          isDisjointFrom: fv
        });
        var pv = dp,
          vv = Rp,
          gv = wp,
          mv = Mp,
          xv = function xv(e) {
            var t = pv(this),
              r = mv(e);
            return !(vv(t) > r.size) && !1 !== gv(t, function (e) {
              if (!r.includes(e)) return !1;
            }, !0);
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("isSubsetOf")
        }, {
          isSubsetOf: xv
        });
        var yv = dp,
          bv = up.has,
          wv = Rp,
          Sv = Mp,
          Av = fp,
          Tv = dh,
          Cv = function Cv(e) {
            var t = yv(this),
              r = Sv(e);
            if (wv(t) < r.size) return !1;
            var n = r.getIterator();
            return !1 !== Av(n, function (e) {
              if (!bv(t, e)) return Tv(n, "normal", !1);
            });
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("isSupersetOf")
        }, {
          isSupersetOf: Cv
        });
        var Rv = dp,
          Iv = Cp,
          _v = Mp,
          Ev = fp,
          kv = up.add,
          Nv = up.has,
          Bv = up.remove,
          Ov = function Ov(e) {
            var t = Rv(this),
              r = _v(e).getIterator(),
              n = Iv(t);
            return Ev(r, function (e) {
              Nv(t, e) ? Bv(n, e) : kv(n, e);
            }), n;
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("symmetricDifference")
        }, {
          symmetricDifference: Ov
        });
        var Fv = dp,
          Lv = up.add,
          Pv = Cp,
          Mv = Mp,
          zv = fp,
          Dv = function Dv(e) {
            var t = Fv(this),
              r = Mv(e).getIterator(),
              n = Pv(t);
            return zv(r, function (e) {
              Lv(n, e);
            }), n;
          };
        Eu({
          target: "Set",
          proto: !0,
          real: !0,
          forced: !Xp("union")
        }, {
          union: Dv
        }), ap.Set;
        var jv = gi,
          Uv = js,
          Wv = Error,
          Yv = Jn("".replace),
          Hv = String(new Wv("zxcasd").stack),
          Qv = /\n\s*at [^:]*:[^\n]*/,
          $v = Qv.test(Hv),
          Kv = Ms,
          Xv = !Kn(function () {
            var e = new Error("a");
            return !("stack" in e) || (Object.defineProperty(e, "stack", Kv(1, 7)), 7 !== e.stack);
          }),
          Gv = js,
          Vv = function Vv(e, t) {
            if ($v && "string" == typeof e && !Wv.prepareStackTrace) for (; t--;) e = Yv(e, Qv, "");
            return e;
          },
          qv = Xv,
          Zv = Error.captureStackTrace,
          Jv = Wf,
          eg = Eu,
          tg = Mi,
          rg = zu,
          ng = mc,
          og = hu,
          ig = As,
          ag = js,
          sg = Ms,
          lg = function lg(e, t) {
            jv(t) && "cause" in t && Uv(e, "cause", t.cause);
          },
          ug = function ug(e, t, r, n) {
            qv && (Zv ? Zv(e, t) : Gv(e, "stack", Vv(r, n)));
          },
          cg = Ch,
          dg = function dg(e, t) {
            return void 0 === e ? arguments.length < 2 ? "" : t : Jv(e);
          },
          hg = hi("toStringTag"),
          fg = Error,
          pg = [].push,
          _vg = function vg(e, t) {
            var r,
              n = tg(gg, this);
            ng ? r = ng(new fg(), n ? rg(this) : gg) : (r = n ? this : ig(gg), ag(r, hg, "Error")), void 0 !== t && ag(r, "message", dg(t)), ug(r, _vg, r.stack, 1), arguments.length > 2 && lg(r, arguments[2]);
            var o = [];
            return cg(e, pg, {
              that: o
            }), ag(r, "errors", o), r;
          };
        ng ? ng(_vg, fg) : og(_vg, fg, {
          name: !0
        });
        var gg = _vg.prototype = ig(fg.prototype, {
          constructor: sg(1, _vg),
          message: sg(1, ""),
          name: sg(1, "AggregateError")
        });
        eg({
          global: !0,
          constructor: !0,
          arity: 2
        }, {
          AggregateError: _vg
        });
        var mg = xo,
          xg = Qo,
          yg = no,
          bg = function bg(e) {
            return xg.slice(0, e.length) === e;
          },
          wg = bg("Bun/") ? "BUN" : bg("Cloudflare-Workers") ? "CLOUDFLARE" : bg("Deno/") ? "DENO" : bg("Node.js/") ? "NODE" : mg.Bun && "string" == typeof Bun.version ? "BUN" : mg.Deno && "object" == _typeof(Deno.version) ? "DENO" : "process" === yg(mg.process) ? "NODE" : mg.window && mg.document ? "BROWSER" : "REST",
          Sg = "NODE" === wg,
          Ag = Jn,
          Tg = Kn,
          Cg = pi,
          Rg = Xd,
          Ig = Cl,
          _g = function _g() {},
          Eg = Pi("Reflect", "construct"),
          kg = /^\s*(?:class|function)\b/,
          Ng = Ag(kg.exec),
          Bg = !kg.test(_g),
          Og = function Og(e) {
            if (!Cg(e)) return !1;
            try {
              return Eg(_g, [], e), !0;
            } catch (IY) {
              return !1;
            }
          },
          Fg = function Fg(e) {
            if (!Cg(e)) return !1;
            switch (Rg(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return Bg || !!Ng(kg, Ig(e));
            } catch (IY) {
              return !0;
            }
          };
        Fg.sham = !0;
        var Lg,
          Pg,
          Mg,
          zg,
          Dg = !Eg || Tg(function () {
            var e;
            return Og(Og.call) || !Og(Object) || !Og(function () {
              e = !0;
            }) || e;
          }) ? Fg : Og,
          jg = Dg,
          Ug = Hi,
          Wg = TypeError,
          Yg = bi,
          Hg = function Hg(e) {
            if (jg(e)) return e;
            throw new Wg(Ug(e) + " is not a constructor");
          },
          Qg = uo,
          $g = hi("species"),
          Kg = function Kg(e, t) {
            var r,
              n = Yg(e).constructor;
            return void 0 === n || Qg(r = Yg(n)[$g]) ? t : Hg(r);
          },
          Xg = Xn,
          Gg = Function.prototype,
          Vg = Gg.apply,
          qg = Gg.call,
          Zg = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.apply || (Xg ? qg.bind(Vg) : function () {
            return qg.apply(Vg, arguments);
          }),
          Jg = TypeError,
          em = /(?:ipad|iphone|ipod).*applewebkit/i.test(Qo),
          tm = xo,
          rm = Zg,
          nm = Ld,
          om = pi,
          im = Mo,
          am = Kn,
          sm = as,
          lm = Jc,
          um = _i,
          cm = function cm(e, t) {
            if (e < t) throw new Jg("Not enough arguments");
            return e;
          },
          dm = em,
          hm = Sg,
          fm = tm.setImmediate,
          pm = tm.clearImmediate,
          vm = tm.process,
          gm = tm.Dispatch,
          mm = tm.Function,
          xm = tm.MessageChannel,
          ym = tm.String,
          bm = 0,
          wm = {},
          Sm = "onreadystatechange";
        am(function () {
          Lg = tm.location;
        });
        var Am = function Am(e) {
            if (im(wm, e)) {
              var t = wm[e];
              delete wm[e], t();
            }
          },
          Tm = function Tm(e) {
            return function () {
              Am(e);
            };
          },
          Cm = function Cm(e) {
            Am(e.data);
          },
          Rm = function Rm(e) {
            tm.postMessage(ym(e), Lg.protocol + "//" + Lg.host);
          };
        fm && pm || (fm = function fm(e) {
          cm(arguments.length, 1);
          var t = om(e) ? e : mm(e),
            r = lm(arguments, 1);
          return wm[++bm] = function () {
            rm(t, void 0, r);
          }, Pg(bm), bm;
        }, pm = function pm(e) {
          delete wm[e];
        }, hm ? Pg = function Pg(e) {
          vm.nextTick(Tm(e));
        } : gm && gm.now ? Pg = function Pg(e) {
          gm.now(Tm(e));
        } : xm && !dm ? (zg = (Mg = new xm()).port2, Mg.port1.onmessage = Cm, Pg = nm(zg.postMessage, zg)) : tm.addEventListener && om(tm.postMessage) && !tm.importScripts && Lg && "file:" !== Lg.protocol && !am(Rm) ? (Pg = Rm, tm.addEventListener("message", Cm, !1)) : Pg = Sm in um("script") ? function (e) {
          sm.appendChild(um("script"))[Sm] = function () {
            sm.removeChild(this), Am(e);
          };
        } : function (e) {
          setTimeout(Tm(e), 0);
        });
        var Im = {
            set: fm,
            clear: pm
          },
          _m = xo,
          Em = Si,
          km = Object.getOwnPropertyDescriptor,
          Nm = function Nm() {
            this.head = null, this.tail = null;
          };
        Nm.prototype = {
          add: function add(e) {
            var t = {
                item: e,
                next: null
              },
              r = this.tail;
            r ? r.next = t : this.head = t, this.tail = t;
          },
          get: function get() {
            var e = this.head;
            if (e) return null === (this.head = e.next) && (this.tail = null), e.item;
          }
        };
        var Bm,
          Om,
          Fm,
          Lm,
          Pm,
          Mm = Nm,
          zm = /ipad|iphone|ipod/i.test(Qo) && "undefined" != typeof Pebble,
          Dm = /web0s(?!.*chrome)/i.test(Qo),
          jm = xo,
          Um = function Um(e) {
            if (!Em) return _m[e];
            var t = km(_m, e);
            return t && t.value;
          },
          Wm = Ld,
          Ym = Im.set,
          Hm = Mm,
          Qm = em,
          $m = zm,
          Km = Dm,
          Xm = Sg,
          Gm = jm.MutationObserver || jm.WebKitMutationObserver,
          Vm = jm.document,
          qm = jm.process,
          Zm = jm.Promise,
          Jm = Um("queueMicrotask");
        if (!Jm) {
          var ex = new Hm(),
            tx = function tx() {
              var e, t;
              for (Xm && (e = qm.domain) && e.exit(); t = ex.get();) try {
                t();
              } catch (IY) {
                throw ex.head && Bm(), IY;
              }
              e && e.enter();
            };
          Qm || Xm || Km || !Gm || !Vm ? !$m && Zm && Zm.resolve ? ((Lm = Zm.resolve(void 0)).constructor = Zm, Pm = Wm(Lm.then, Lm), Bm = function Bm() {
            Pm(tx);
          }) : Xm ? Bm = function Bm() {
            qm.nextTick(tx);
          } : (Ym = Wm(Ym, jm), Bm = function Bm() {
            Ym(tx);
          }) : (Om = !0, Fm = Vm.createTextNode(""), new Gm(tx).observe(Fm, {
            characterData: !0
          }), Bm = function Bm() {
            Fm.data = Om = !Om;
          }), Jm = function Jm(e) {
            ex.head || Bm(), ex.add(e);
          };
        }
        var rx = Jm,
          nx = function nx(e) {
            try {
              return {
                error: !1,
                value: e()
              };
            } catch (IY) {
              return {
                error: !0,
                value: IY
              };
            }
          },
          ox = xo.Promise,
          ix = xo,
          ax = ox,
          sx = pi,
          lx = wu,
          ux = Cl,
          cx = hi,
          dx = wg,
          hx = Zo;
        ax && ax.prototype;
        var fx = cx("species"),
          px = !1,
          vx = sx(ix.PromiseRejectionEvent),
          gx = lx("Promise", function () {
            var e = ux(ax),
              t = e !== String(ax);
            if (!t && 66 === hx) return !0;
            if (!hx || hx < 51 || !/native code/.test(e)) {
              var r = new ax(function (e) {
                  e(1);
                }),
                n = function n(e) {
                  e(function () {}, function () {});
                };
              if ((r.constructor = {})[fx] = n, !(px = r.then(function () {}) instanceof n)) return !0;
            }
            return !(t || "BROWSER" !== dx && "DENO" !== dx || vx);
          }),
          mx = {
            CONSTRUCTOR: gx,
            REJECTION_EVENT: vx,
            SUBCLASSING: px
          },
          xx = {},
          yx = Xi,
          bx = TypeError,
          wx = function wx(e) {
            var t, r;
            this.promise = new e(function (e, n) {
              if (void 0 !== t || void 0 !== r) throw new bx("Bad Promise constructor");
              t = e, r = n;
            }), this.resolve = yx(t), this.reject = yx(r);
          };
        xx.f = function (e) {
          return new wx(e);
        };
        var Sx,
          Ax,
          Tx,
          Cx = Eu,
          Rx = Sg,
          Ix = xo,
          _x = Oi,
          Ex = Xl,
          kx = mc,
          Nx = qu,
          Bx = uf,
          Ox = Xi,
          Fx = pi,
          Lx = gi,
          Px = _h,
          Mx = Kg,
          zx = Im.set,
          Dx = rx,
          jx = function jx(e, t) {
            try {
              1 === arguments.length ? console.error(e) : console.error(e, t);
            } catch (IY) {}
          },
          Ux = nx,
          Wx = Mm,
          Yx = el,
          Hx = ox,
          Qx = xx,
          $x = "Promise",
          Kx = mx.CONSTRUCTOR,
          Xx = mx.REJECTION_EVENT,
          Gx = mx.SUBCLASSING,
          Vx = Yx.getterFor($x),
          qx = Yx.set,
          Zx = Hx && Hx.prototype,
          Jx = Hx,
          ey = Zx,
          ty = Ix.TypeError,
          ry = Ix.document,
          ny = Ix.process,
          oy = Qx.f,
          iy = oy,
          ay = !!(ry && ry.createEvent && Ix.dispatchEvent),
          sy = "unhandledrejection",
          ly = function ly(e) {
            var t;
            return !(!Lx(e) || !Fx(t = e.then)) && t;
          },
          uy = function uy(e, t) {
            var r,
              n,
              o,
              i = t.value,
              a = 1 === t.state,
              s = a ? e.ok : e.fail,
              l = e.resolve,
              u = e.reject,
              c = e.domain;
            try {
              s ? (a || (2 === t.rejection && py(t), t.rejection = 1), !0 === s ? r = i : (c && c.enter(), r = s(i), c && (c.exit(), o = !0)), r === e.promise ? u(new ty("Promise-chain cycle")) : (n = ly(r)) ? _x(n, r, l, u) : l(r)) : u(i);
            } catch (IY) {
              c && !o && c.exit(), u(IY);
            }
          },
          cy = function cy(e, t) {
            e.notified || (e.notified = !0, Dx(function () {
              for (var r, n = e.reactions; r = n.get();) uy(r, e);
              e.notified = !1, t && !e.rejection && hy(e);
            }));
          },
          dy = function dy(e, t, r) {
            var n, o;
            ay ? ((n = ry.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), Ix.dispatchEvent(n)) : n = {
              promise: t,
              reason: r
            }, !Xx && (o = Ix["on" + e]) ? o(n) : e === sy && jx("Unhandled promise rejection", r);
          },
          hy = function hy(e) {
            _x(zx, Ix, function () {
              var t,
                r = e.facade,
                n = e.value;
              if (fy(e) && (t = Ux(function () {
                Rx ? ny.emit("unhandledRejection", n, r) : dy(sy, r, n);
              }), e.rejection = Rx || fy(e) ? 2 : 1, t.error)) throw t.value;
            });
          },
          fy = function fy(e) {
            return 1 !== e.rejection && !e.parent;
          },
          py = function py(e) {
            _x(zx, Ix, function () {
              var t = e.facade;
              Rx ? ny.emit("rejectionHandled", t) : dy("rejectionhandled", t, e.value);
            });
          },
          vy = function vy(e, t, r) {
            return function (n) {
              e(t, n, r);
            };
          },
          gy = function gy(e, t, r) {
            e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, cy(e, !0));
          },
          my = function e(t, r, n) {
            if (!t.done) {
              t.done = !0, n && (t = n);
              try {
                if (t.facade === r) throw new ty("Promise can't be resolved itself");
                var o = ly(r);
                o ? Dx(function () {
                  var n = {
                    done: !1
                  };
                  try {
                    _x(o, r, vy(e, n, t), vy(gy, n, t));
                  } catch (IY) {
                    gy(n, IY, t);
                  }
                }) : (t.value = r, t.state = 1, cy(t, !1));
              } catch (IY) {
                gy({
                  done: !1
                }, IY, t);
              }
            }
          };
        if (Kx && (ey = (Jx = function Jx(e) {
          Px(this, ey), Ox(e), _x(Sx, this);
          var t = Vx(this);
          try {
            e(vy(my, t), vy(gy, t));
          } catch (IY) {
            gy(t, IY);
          }
        }).prototype, (Sx = function Sx(e) {
          qx(this, {
            type: $x,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new Wx(),
            rejection: !1,
            state: 0,
            value: null
          });
        }).prototype = Ex(ey, "then", function (e, t) {
          var r = Vx(this),
            n = oy(Mx(this, Jx));
          return r.parent = !0, n.ok = !Fx(e) || e, n.fail = Fx(t) && t, n.domain = Rx ? ny.domain : void 0, 0 === r.state ? r.reactions.add(n) : Dx(function () {
            uy(n, r);
          }), n.promise;
        }), Ax = function Ax() {
          var e = new Sx(),
            t = Vx(e);
          this.promise = e, this.resolve = vy(my, t), this.reject = vy(gy, t);
        }, Qx.f = oy = function oy(e) {
          return e === Jx || undefined === e ? new Ax(e) : iy(e);
        }, Fx(Hx) && Zx !== Object.prototype)) {
          Tx = Zx.then, Gx || Ex(Zx, "then", function (e, t) {
            var r = this;
            return new Jx(function (e, t) {
              _x(Tx, r, e, t);
            }).then(e, t);
          }, {
            unsafe: !0
          });
          try {
            delete Zx.constructor;
          } catch (IY) {}
          kx && kx(Zx, ey);
        }
        Cx({
          global: !0,
          constructor: !0,
          wrap: !0,
          forced: Kx
        }, {
          Promise: Jx
        }), Nx(Jx, $x, !1), Bx($x);
        var xy = ox,
          yy = mx.CONSTRUCTOR || !Oh(function (e) {
            xy.all(e).then(void 0, function () {});
          }),
          by = Oi,
          wy = Xi,
          Sy = xx,
          Ay = nx,
          Ty = Ch;
        Eu({
          target: "Promise",
          stat: !0,
          forced: yy
        }, {
          all: function all(e) {
            var t = this,
              r = Sy.f(t),
              n = r.resolve,
              o = r.reject,
              i = Ay(function () {
                var r = wy(t.resolve),
                  i = [],
                  a = 0,
                  s = 1;
                Ty(e, function (e) {
                  var l = a++,
                    u = !1;
                  s++, by(r, t, e).then(function (e) {
                    u || (u = !0, i[l] = e, --s || n(i));
                  }, o);
                }), --s || n(i);
              });
            return i.error && o(i.value), r.promise;
          }
        });
        var Cy = Eu,
          Ry = mx.CONSTRUCTOR,
          Iy = ox,
          _y = Pi,
          Ey = pi,
          ky = Xl,
          Ny = Iy && Iy.prototype;
        if (Cy({
          target: "Promise",
          proto: !0,
          forced: Ry,
          real: !0
        }, {
          "catch": function _catch(e) {
            return this.then(void 0, e);
          }
        }), Ey(Iy)) {
          var By = _y("Promise").prototype["catch"];
          Ny["catch"] !== By && ky(Ny, "catch", By, {
            unsafe: !0
          });
        }
        var Oy = Oi,
          Fy = Xi,
          Ly = xx,
          Py = nx,
          My = Ch;
        Eu({
          target: "Promise",
          stat: !0,
          forced: yy
        }, {
          race: function race(e) {
            var t = this,
              r = Ly.f(t),
              n = r.reject,
              o = Py(function () {
                var o = Fy(t.resolve);
                My(e, function (e) {
                  Oy(o, t, e).then(r.resolve, n);
                });
              });
            return o.error && n(o.value), r.promise;
          }
        });
        var zy = xx;
        Eu({
          target: "Promise",
          stat: !0,
          forced: mx.CONSTRUCTOR
        }, {
          reject: function reject(e) {
            var t = zy.f(this);
            return (0, t.reject)(e), t.promise;
          }
        });
        var Dy = bi,
          jy = gi,
          Uy = xx,
          Wy = function Wy(e, t) {
            if (Dy(e), jy(t) && t.constructor === e) return t;
            var r = Uy.f(e);
            return (0, r.resolve)(t), r.promise;
          },
          Yy = Eu,
          Hy = mx.CONSTRUCTOR,
          Qy = Wy;
        Pi("Promise"), Yy({
          target: "Promise",
          stat: !0,
          forced: Hy
        }, {
          resolve: function resolve(e) {
            return Qy(this, e);
          }
        });
        var $y = Oi,
          Ky = Xi,
          Xy = xx,
          Gy = nx,
          Vy = Ch;
        Eu({
          target: "Promise",
          stat: !0,
          forced: yy
        }, {
          allSettled: function allSettled(e) {
            var t = this,
              r = Xy.f(t),
              n = r.resolve,
              o = r.reject,
              i = Gy(function () {
                var r = Ky(t.resolve),
                  o = [],
                  i = 0,
                  a = 1;
                Vy(e, function (e) {
                  var s = i++,
                    l = !1;
                  a++, $y(r, t, e).then(function (e) {
                    l || (l = !0, o[s] = {
                      status: "fulfilled",
                      value: e
                    }, --a || n(o));
                  }, function (e) {
                    l || (l = !0, o[s] = {
                      status: "rejected",
                      reason: e
                    }, --a || n(o));
                  });
                }), --a || n(o);
              });
            return i.error && o(i.value), r.promise;
          }
        });
        var qy = Oi,
          Zy = Xi,
          Jy = Pi,
          eb = xx,
          tb = nx,
          rb = Ch,
          nb = "No one promise resolved";
        Eu({
          target: "Promise",
          stat: !0,
          forced: yy
        }, {
          any: function any(e) {
            var t = this,
              r = Jy("AggregateError"),
              n = eb.f(t),
              o = n.resolve,
              i = n.reject,
              a = tb(function () {
                var n = Zy(t.resolve),
                  a = [],
                  s = 0,
                  l = 1,
                  u = !1;
                rb(e, function (e) {
                  var c = s++,
                    d = !1;
                  l++, qy(n, t, e).then(function (e) {
                    d || u || (u = !0, o(e));
                  }, function (e) {
                    d || u || (d = !0, a[c] = e, --l || i(new r(a, nb)));
                  });
                }), --l || i(new r(a, nb));
              });
            return a.error && i(a.value), n.promise;
          }
        });
        var ob = xx;
        Eu({
          target: "Promise",
          stat: !0
        }, {
          withResolvers: function withResolvers() {
            var e = ob.f(this);
            return {
              promise: e.promise,
              resolve: e.resolve,
              reject: e.reject
            };
          }
        });
        var ib = Eu,
          ab = ox,
          sb = Kn,
          lb = Pi,
          ub = pi,
          cb = Kg,
          db = Wy,
          hb = Xl,
          fb = ab && ab.prototype;
        if (ib({
          target: "Promise",
          proto: !0,
          real: !0,
          forced: !!ab && sb(function () {
            fb["finally"].call({
              then: function then() {}
            }, function () {});
          })
        }, {
          "finally": function _finally(e) {
            var t = cb(this, lb("Promise")),
              r = ub(e);
            return this.then(r ? function (r) {
              return db(t, e()).then(function () {
                return r;
              });
            } : e, r ? function (r) {
              return db(t, e()).then(function () {
                throw r;
              });
            } : e);
          }
        }), ub(ab)) {
          var pb = lb("Promise").prototype["finally"];
          fb["finally"] !== pb && hb(fb, "finally", pb, {
            unsafe: !0
          });
        }
        ap.Promise;
        var vb = bi,
          gb = dh,
          mb = Si,
          xb = Ti,
          yb = Ms,
          bb = function bb(e, t, r) {
            mb ? xb.f(e, t, yb(0, r)) : e[t] = r;
          },
          wb = Ld,
          Sb = Oi,
          Ab = Fo,
          Tb = function Tb(e, t, r, n) {
            try {
              return n ? t(vb(r)[0], r[1]) : t(r);
            } catch (IY) {
              gb(e, "throw", IY);
            }
          },
          Cb = Dd,
          Rb = Dg,
          Ib = Pa,
          _b = bb,
          Eb = sh,
          kb = eh,
          Nb = Array,
          Bb = function Bb(e) {
            var t = Ab(e),
              r = Rb(this),
              n = arguments.length,
              o = n > 1 ? arguments[1] : void 0,
              i = void 0 !== o;
            i && (o = wb(o, n > 2 ? arguments[2] : void 0));
            var a,
              s,
              l,
              u,
              c,
              d,
              h = kb(t),
              f = 0;
            if (!h || this === Nb && Cb(h)) for (a = Ib(t), s = r ? new this(a) : Nb(a); a > f; f++) d = i ? o(t[f], f) : t[f], _b(s, f, d);else for (s = r ? new this() : [], c = (u = Eb(t, h)).next; !(l = Sb(c, u)).done; f++) d = i ? Tb(u, o, [l.value, f], !0) : l.value, _b(s, f, d);
            return s.length = f, s;
          };
        Eu({
          target: "Array",
          stat: !0,
          forced: !Oh(function (e) {
            Array.from(e);
          })
        }, {
          from: Bb
        });
        var Ob = no,
          Fb = Array.isArray || function (e) {
            return "Array" === Ob(e);
          };
        Eu({
          target: "Array",
          stat: !0
        }, {
          isArray: Fb
        });
        var Lb = Dg,
          Pb = bb,
          Mb = Array;
        Eu({
          target: "Array",
          stat: !0,
          forced: Kn(function () {
            function e() {}
            return !(Mb.of.call(e) instanceof e);
          })
        }, {
          of: function of() {
            for (var e = 0, t = arguments.length, r = new (Lb(this) ? this : Mb)(t); t > e;) Pb(r, e, arguments[e++]);
            return r.length = t, r;
          }
        });
        var zb = Fo,
          Db = Pa,
          jb = Ia,
          Ub = Bs;
        Eu({
          target: "Array",
          proto: !0
        }, {
          at: function at(e) {
            var t = zb(this),
              r = Db(t),
              n = jb(e),
              o = n >= 0 ? n : r + n;
            return o < 0 || o >= r ? void 0 : t[o];
          }
        }), Ub("at");
        var Wb = TypeError,
          Yb = function Yb(e) {
            if (e > 9007199254740991) throw Wb("Maximum allowed index exceeded");
            return e;
          },
          Hb = Fb,
          Qb = Dg,
          $b = gi,
          Kb = hi("species"),
          Xb = Array,
          Gb = function Gb(e) {
            var t;
            return Hb(e) && (t = e.constructor, (Qb(t) && (t === Xb || Hb(t.prototype)) || $b(t) && null === (t = t[Kb])) && (t = void 0)), void 0 === t ? Xb : t;
          },
          Vb = function Vb(e, t) {
            return new (Gb(e))(0 === t ? 0 : t);
          },
          qb = Kn,
          Zb = Zo,
          Jb = hi("species"),
          ew = function ew(e) {
            return Zb >= 51 || !qb(function () {
              var t = [];
              return (t.constructor = {})[Jb] = function () {
                return {
                  foo: 1
                };
              }, 1 !== t[e](Boolean).foo;
            });
          },
          tw = Eu,
          rw = Kn,
          nw = Fb,
          ow = gi,
          iw = Fo,
          aw = Pa,
          sw = Yb,
          lw = bb,
          uw = Vb,
          cw = ew,
          dw = Zo,
          hw = hi("isConcatSpreadable"),
          fw = dw >= 51 || !rw(function () {
            var e = [];
            return e[hw] = !1, e.concat()[0] !== e;
          }),
          pw = function pw(e) {
            if (!ow(e)) return !1;
            var t = e[hw];
            return void 0 !== t ? !!t : nw(e);
          };
        tw({
          target: "Array",
          proto: !0,
          arity: 1,
          forced: !fw || !cw("concat")
        }, {
          concat: function concat(e) {
            var t,
              r,
              n,
              o,
              i,
              a = iw(this),
              s = uw(a, 0),
              l = 0;
            for (t = -1, n = arguments.length; t < n; t++) if (pw(i = -1 === t ? a : arguments[t])) for (o = aw(i), sw(l + o), r = 0; r < o; r++, l++) r in i && lw(s, l, i[r]);else sw(l + 1), lw(s, l++, i);
            return s.length = l, s;
          }
        });
        var vw = Hi,
          gw = TypeError,
          mw = function mw(e, t) {
            if (!delete e[t]) throw new gw("Cannot delete property " + vw(t) + " of " + vw(e));
          },
          xw = Fo,
          yw = Na,
          bw = Pa,
          ww = mw,
          Sw = Math.min,
          Aw = [].copyWithin || function (e, t) {
            var r = xw(this),
              n = bw(r),
              o = yw(e, n),
              i = yw(t, n),
              a = arguments.length > 2 ? arguments[2] : void 0,
              s = Sw((void 0 === a ? n : yw(a, n)) - i, n - o),
              l = 1;
            for (i < o && o < i + s && (l = -1, i += s - 1, o += s - 1); s-- > 0;) i in r ? r[o] = r[i] : ww(r, o), o += l, i += l;
            return r;
          },
          Tw = Bs;
        Eu({
          target: "Array",
          proto: !0
        }, {
          copyWithin: Aw
        }), Tw("copyWithin");
        var Cw = Ld,
          Rw = lo,
          Iw = Fo,
          _w = Pa,
          Ew = Vb,
          kw = Jn([].push),
          Nw = function Nw(e) {
            var t = 1 === e,
              r = 2 === e,
              n = 3 === e,
              o = 4 === e,
              i = 6 === e,
              a = 7 === e,
              s = 5 === e || i;
            return function (l, u, c, d) {
              for (var h, f, p = Iw(l), v = Rw(p), g = _w(v), m = Cw(u, c), x = 0, y = d || Ew, b = t ? y(l, g) : r || a ? y(l, 0) : void 0; g > x; x++) if ((s || x in v) && (f = m(h = v[x], x, p), e)) if (t) b[x] = f;else if (f) switch (e) {
                case 3:
                  return !0;
                case 5:
                  return h;
                case 6:
                  return x;
                case 2:
                  kw(b, h);
              } else switch (e) {
                case 4:
                  return !1;
                case 7:
                  kw(b, h);
              }
              return i ? -1 : n || o ? o : b;
            };
          },
          Bw = {
            forEach: Nw(0),
            map: Nw(1),
            filter: Nw(2),
            some: Nw(3),
            every: Nw(4),
            find: Nw(5),
            findIndex: Nw(6),
            filterReject: Nw(7)
          },
          Ow = Kn,
          Fw = function Fw(e, t) {
            var r = [][e];
            return !!r && Ow(function () {
              r.call(null, t || function () {
                return 1;
              }, 1);
            });
          },
          Lw = Bw.every;
        Eu({
          target: "Array",
          proto: !0,
          forced: !Fw("every")
        }, {
          every: function every(e) {
            return Lw(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var Pw = Fo,
          Mw = Na,
          zw = Pa,
          Dw = function Dw(e) {
            for (var t = Pw(this), r = zw(t), n = arguments.length, o = Mw(n > 1 ? arguments[1] : void 0, r), i = n > 2 ? arguments[2] : void 0, a = void 0 === i ? r : Mw(i, r); a > o;) t[o++] = e;
            return t;
          },
          jw = Bs;
        Eu({
          target: "Array",
          proto: !0
        }, {
          fill: Dw
        }), jw("fill");
        var Uw = Bw.filter;
        Eu({
          target: "Array",
          proto: !0,
          forced: !ew("filter")
        }, {
          filter: function filter(e) {
            return Uw(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var Ww = Eu,
          Yw = Bw.find,
          Hw = Bs,
          Qw = "find",
          $w = !0;
        Qw in [] && Array(1)[Qw](function () {
          $w = !1;
        }), Ww({
          target: "Array",
          proto: !0,
          forced: $w
        }, {
          find: function find(e) {
            return Yw(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), Hw(Qw);
        var Kw = Eu,
          Xw = Bw.findIndex,
          Gw = Bs,
          Vw = "findIndex",
          qw = !0;
        Vw in [] && Array(1)[Vw](function () {
          qw = !1;
        }), Kw({
          target: "Array",
          proto: !0,
          forced: qw
        }, {
          findIndex: function findIndex(e) {
            return Xw(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), Gw(Vw);
        var Zw = Ld,
          Jw = lo,
          eS = Fo,
          tS = Pa,
          rS = function rS(e) {
            var t = 1 === e;
            return function (r, n, o) {
              for (var i, a = eS(r), s = Jw(a), l = tS(s), u = Zw(n, o); l-- > 0;) if (u(i = s[l], l, a)) switch (e) {
                case 0:
                  return i;
                case 1:
                  return l;
              }
              return t ? -1 : void 0;
            };
          },
          nS = {
            findLast: rS(0),
            findLastIndex: rS(1)
          },
          oS = nS.findLast,
          iS = Bs;
        Eu({
          target: "Array",
          proto: !0
        }, {
          findLast: function findLast(e) {
            return oS(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), iS("findLast");
        var aS = nS.findLastIndex,
          sS = Bs;
        Eu({
          target: "Array",
          proto: !0
        }, {
          findLastIndex: function findLastIndex(e) {
            return aS(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), sS("findLastIndex");
        var lS = Fb,
          uS = Pa,
          cS = Yb,
          dS = Ld,
          hS = function e(t, r, n, o, i, a, s, l) {
            for (var u, c = i, d = 0, h = !!s && dS(s, l); d < o;) d in n && (u = h ? h(n[d], d, r) : n[d], a > 0 && lS(u) ? c = e(t, r, u, uS(u), c, a - 1) - 1 : (cS(c + 1), t[c] = u), c++), d++;
            return c;
          },
          fS = hS,
          pS = Fo,
          vS = Pa,
          gS = Ia,
          mS = Vb;
        Eu({
          target: "Array",
          proto: !0
        }, {
          flat: function flat() {
            var e = arguments.length ? arguments[0] : void 0,
              t = pS(this),
              r = vS(t),
              n = mS(t, 0);
            return n.length = fS(n, t, t, r, 0, void 0 === e ? 1 : gS(e)), n;
          }
        });
        var xS = hS,
          yS = Xi,
          bS = Fo,
          wS = Pa,
          SS = Vb;
        Eu({
          target: "Array",
          proto: !0
        }, {
          flatMap: function flatMap(e) {
            var t,
              r = bS(this),
              n = wS(r);
            return yS(e), (t = SS(r, 0)).length = xS(t, r, r, n, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t;
          }
        });
        var AS = Bw.forEach,
          TS = Fw("forEach") ? [].forEach : function (e) {
            return AS(this, e, arguments.length > 1 ? arguments[1] : void 0);
          };
        Eu({
          target: "Array",
          proto: !0,
          forced: [].forEach !== TS
        }, {
          forEach: TS
        });
        var CS = Ua.includes,
          RS = Bs;
        Eu({
          target: "Array",
          proto: !0,
          forced: Kn(function () {
            return !Array(1).includes();
          })
        }, {
          includes: function includes(e) {
            return CS(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), RS("includes");
        var IS = Eu,
          _S = Ua.indexOf,
          ES = Fw,
          kS = Nd([].indexOf),
          NS = !!kS && 1 / kS([1], 1, -0) < 0;
        IS({
          target: "Array",
          proto: !0,
          forced: NS || !ES("indexOf")
        }, {
          indexOf: function indexOf(e) {
            var t = arguments.length > 1 ? arguments[1] : void 0;
            return NS ? kS(this, e, t) || 0 : _S(this, e, t);
          }
        });
        var BS = Eu,
          OS = lo,
          FS = go,
          LS = Fw,
          PS = Jn([].join);
        BS({
          target: "Array",
          proto: !0,
          forced: OS !== Object || !LS("join", ",")
        }, {
          join: function join(e) {
            return PS(FS(this), void 0 === e ? "," : e);
          }
        });
        var MS = Zg,
          zS = go,
          DS = Ia,
          jS = Pa,
          US = Fw,
          WS = Math.min,
          YS = [].lastIndexOf,
          HS = !!YS && 1 / [1].lastIndexOf(1, -0) < 0,
          QS = US("lastIndexOf"),
          $S = HS || !QS ? function (e) {
            if (HS) return MS(YS, this, arguments) || 0;
            var t = zS(this),
              r = jS(t);
            if (0 === r) return -1;
            var n = r - 1;
            for (arguments.length > 1 && (n = WS(n, DS(arguments[1]))), n < 0 && (n = r + n); n >= 0; n--) if (n in t && t[n] === e) return n || 0;
            return -1;
          } : YS;
        Eu({
          target: "Array",
          proto: !0,
          forced: $S !== [].lastIndexOf
        }, {
          lastIndexOf: $S
        });
        var KS = Bw.map;
        Eu({
          target: "Array",
          proto: !0,
          forced: !ew("map")
        }, {
          map: function map(e) {
            return KS(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var XS = Si,
          GS = Fb,
          VS = TypeError,
          qS = Object.getOwnPropertyDescriptor,
          ZS = XS && !function () {
            if (void 0 !== this) return !0;
            try {
              Object.defineProperty([], "length", {
                writable: !1
              }).length = 1;
            } catch (IY) {
              return IY instanceof TypeError;
            }
          }() ? function (e, t) {
            if (GS(e) && !qS(e, "length").writable) throw new VS("Cannot set read only .length");
            return e.length = t;
          } : function (e, t) {
            return e.length = t;
          },
          JS = Fo,
          eA = Pa,
          tA = ZS,
          rA = Yb;
        Eu({
          target: "Array",
          proto: !0,
          arity: 1,
          forced: Kn(function () {
            return 4294967297 !== [].push.call({
              length: 4294967296
            }, 1);
          }) || !function () {
            try {
              Object.defineProperty([], "length", {
                writable: !1
              }).push();
            } catch (IY) {
              return IY instanceof TypeError;
            }
          }()
        }, {
          push: function push(e) {
            var t = JS(this),
              r = eA(t),
              n = arguments.length;
            rA(r + n);
            for (var o = 0; o < n; o++) t[r] = arguments[o], r++;
            return tA(t, r), r;
          }
        });
        var nA = Xi,
          oA = Fo,
          iA = lo,
          aA = Pa,
          sA = TypeError,
          lA = "Reduce of empty array with no initial value",
          uA = function uA(e) {
            return function (t, r, n, o) {
              var i = oA(t),
                a = iA(i),
                s = aA(i);
              if (nA(r), 0 === s && n < 2) throw new sA(lA);
              var l = e ? s - 1 : 0,
                u = e ? -1 : 1;
              if (n < 2) for (;;) {
                if (l in a) {
                  o = a[l], l += u;
                  break;
                }
                if (l += u, e ? l < 0 : s <= l) throw new sA(lA);
              }
              for (; e ? l >= 0 : s > l; l += u) l in a && (o = r(o, a[l], l, i));
              return o;
            };
          },
          cA = {
            left: uA(!1),
            right: uA(!0)
          },
          dA = cA.left;
        Eu({
          target: "Array",
          proto: !0,
          forced: !Sg && Zo > 79 && Zo < 83 || !Fw("reduce")
        }, {
          reduce: function reduce(e) {
            var t = arguments.length;
            return dA(this, e, t, t > 1 ? arguments[1] : void 0);
          }
        });
        var hA = cA.right;
        Eu({
          target: "Array",
          proto: !0,
          forced: !Sg && Zo > 79 && Zo < 83 || !Fw("reduceRight")
        }, {
          reduceRight: function reduceRight(e) {
            return hA(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var fA = Eu,
          pA = Fb,
          vA = Jn([].reverse),
          gA = [1, 2];
        fA({
          target: "Array",
          proto: !0,
          forced: String(gA) === String(gA.reverse())
        }, {
          reverse: function reverse() {
            return pA(this) && (this.length = this.length), vA(this);
          }
        });
        var mA = Eu,
          xA = Fb,
          yA = Dg,
          bA = gi,
          wA = Na,
          SA = Pa,
          AA = go,
          TA = bb,
          CA = hi,
          RA = Jc,
          IA = ew("slice"),
          _A = CA("species"),
          EA = Array,
          kA = Math.max;
        mA({
          target: "Array",
          proto: !0,
          forced: !IA
        }, {
          slice: function slice(e, t) {
            var r,
              n,
              o,
              i = AA(this),
              a = SA(i),
              s = wA(e, a),
              l = wA(void 0 === t ? a : t, a);
            if (xA(i) && (r = i.constructor, (yA(r) && (r === EA || xA(r.prototype)) || bA(r) && null === (r = r[_A])) && (r = void 0), r === EA || void 0 === r)) return RA(i, s, l);
            for (n = new (void 0 === r ? EA : r)(kA(l - s, 0)), o = 0; s < l; s++, o++) s in i && TA(n, o, i[s]);
            return n.length = o, n;
          }
        });
        var NA = Bw.some;
        Eu({
          target: "Array",
          proto: !0,
          forced: !Fw("some")
        }, {
          some: function some(e) {
            return NA(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var BA = Jc,
          OA = Math.floor,
          FA = function e(t, r) {
            var n = t.length;
            if (n < 8) for (var o, i, a = 1; a < n;) {
              for (i = a, o = t[a]; i && r(t[i - 1], o) > 0;) t[i] = t[--i];
              i !== a++ && (t[i] = o);
            } else for (var s = OA(n / 2), l = e(BA(t, 0, s), r), u = e(BA(t, s), r), c = l.length, d = u.length, h = 0, f = 0; h < c || f < d;) t[h + f] = h < c && f < d ? r(l[h], u[f]) <= 0 ? l[h++] : u[f++] : h < c ? l[h++] : u[f++];
            return t;
          },
          LA = Qo.match(/firefox\/(\d+)/i),
          PA = !!LA && +LA[1],
          MA = /MSIE|Trident/.test(Qo),
          zA = Qo.match(/AppleWebKit\/(\d+)\./),
          DA = !!zA && +zA[1],
          jA = Eu,
          UA = Jn,
          WA = Xi,
          YA = Fo,
          HA = Pa,
          QA = mw,
          $A = Wf,
          KA = Kn,
          XA = FA,
          GA = Fw,
          VA = PA,
          qA = MA,
          ZA = Zo,
          JA = DA,
          eT = [],
          tT = UA(eT.sort),
          rT = UA(eT.push),
          nT = KA(function () {
            eT.sort(void 0);
          }),
          oT = KA(function () {
            eT.sort(null);
          }),
          iT = GA("sort"),
          aT = !KA(function () {
            if (ZA) return ZA < 70;
            if (!(VA && VA > 3)) {
              if (qA) return !0;
              if (JA) return JA < 603;
              var e,
                t,
                r,
                n,
                o = "";
              for (e = 65; e < 76; e++) {
                switch (t = String.fromCharCode(e), e) {
                  case 66:
                  case 69:
                  case 70:
                  case 72:
                    r = 3;
                    break;
                  case 68:
                  case 71:
                    r = 4;
                    break;
                  default:
                    r = 2;
                }
                for (n = 0; n < 47; n++) eT.push({
                  k: t + n,
                  v: r
                });
              }
              for (eT.sort(function (e, t) {
                return t.v - e.v;
              }), n = 0; n < eT.length; n++) t = eT[n].k.charAt(0), o.charAt(o.length - 1) !== t && (o += t);
              return "DGBEFHACIJK" !== o;
            }
          });
        jA({
          target: "Array",
          proto: !0,
          forced: nT || !oT || !iT || !aT
        }, {
          sort: function sort(e) {
            void 0 !== e && WA(e);
            var t = YA(this);
            if (aT) return void 0 === e ? tT(t) : tT(t, e);
            var r,
              n,
              o = [],
              i = HA(t);
            for (n = 0; n < i; n++) n in t && rT(o, t[n]);
            for (XA(o, function (e) {
              return function (t, r) {
                return void 0 === r ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, r) || 0 : $A(t) > $A(r) ? 1 : -1;
              };
            }(e)), r = HA(o), n = 0; n < r;) t[n] = o[n++];
            for (; n < i;) QA(t, n++);
            return t;
          }
        }), uf("Array");
        var sT = Eu,
          lT = Fo,
          uT = Na,
          cT = Ia,
          dT = Pa,
          hT = ZS,
          fT = Yb,
          pT = Vb,
          vT = bb,
          gT = mw,
          mT = ew("splice"),
          xT = Math.max,
          yT = Math.min;
        sT({
          target: "Array",
          proto: !0,
          forced: !mT
        }, {
          splice: function splice(e, t) {
            var r,
              n,
              o,
              i,
              a,
              s,
              l = lT(this),
              u = dT(l),
              c = uT(e, u),
              d = arguments.length;
            for (0 === d ? r = n = 0 : 1 === d ? (r = 0, n = u - c) : (r = d - 2, n = yT(xT(cT(t), 0), u - c)), fT(u + r - n), o = pT(l, n), i = 0; i < n; i++) (a = c + i) in l && vT(o, i, l[a]);
            if (o.length = n, r < n) {
              for (i = c; i < u - n; i++) s = i + r, (a = i + n) in l ? l[s] = l[a] : gT(l, s);
              for (i = u; i > u - n + r; i--) gT(l, i - 1);
            } else if (r > n) for (i = u - n; i > c; i--) s = i + r - 1, (a = i + n - 1) in l ? l[s] = l[a] : gT(l, s);
            for (i = 0; i < r; i++) l[i + c] = arguments[i + 2];
            return hT(l, u - n + r), o;
          }
        });
        var bT = Pa,
          wT = function wT(e, t) {
            for (var r = bT(e), n = new t(r), o = 0; o < r; o++) n[o] = e[r - o - 1];
            return n;
          },
          ST = go,
          AT = Bs,
          TT = Array;
        Eu({
          target: "Array",
          proto: !0
        }, {
          toReversed: function toReversed() {
            return wT(ST(this), TT);
          }
        }), AT("toReversed");
        var CT = Pa,
          RT = xo,
          IT = Eu,
          _T = Xi,
          ET = go,
          kT = function kT(e, t, r) {
            for (var n = 0, o = arguments.length > 2 ? r : CT(t), i = new e(o); o > n;) i[n] = t[n++];
            return i;
          },
          NT = Bs,
          BT = Array,
          OT = Jn(function (e, t) {
            var r = RT[e],
              n = r && r.prototype;
            return n && n[t];
          }("Array", "sort"));
        IT({
          target: "Array",
          proto: !0
        }, {
          toSorted: function toSorted(e) {
            void 0 !== e && _T(e);
            var t = ET(this),
              r = kT(BT, t);
            return OT(r, e);
          }
        }), NT("toSorted");
        var FT = Eu,
          LT = Bs,
          PT = Yb,
          MT = Pa,
          zT = Na,
          DT = go,
          jT = Ia,
          UT = Array,
          WT = Math.max,
          YT = Math.min;
        FT({
          target: "Array",
          proto: !0
        }, {
          toSpliced: function toSpliced(e, t) {
            var r,
              n,
              o,
              i,
              a = DT(this),
              s = MT(a),
              l = zT(e, s),
              u = arguments.length,
              c = 0;
            for (0 === u ? r = n = 0 : 1 === u ? (r = 0, n = s - l) : (r = u - 2, n = YT(WT(jT(t), 0), s - l)), o = PT(s + r - n), i = UT(o); c < l; c++) i[c] = a[c];
            for (; c < l + r; c++) i[c] = arguments[c - l + 2];
            for (; c < o; c++) i[c] = a[c + n - r];
            return i;
          }
        }), LT("toSpliced"), Bs("flat"), Bs("flatMap");
        var HT = Fo,
          QT = Pa,
          $T = ZS,
          KT = mw,
          XT = Yb;
        Eu({
          target: "Array",
          proto: !0,
          arity: 1,
          forced: 1 !== [].unshift(0) || !function () {
            try {
              Object.defineProperty([], "length", {
                writable: !1
              }).unshift();
            } catch (IY) {
              return IY instanceof TypeError;
            }
          }()
        }, {
          unshift: function unshift(e) {
            var t = HT(this),
              r = QT(t),
              n = arguments.length;
            if (n) {
              XT(r + n);
              for (var o = r; o--;) {
                var i = o + n;
                o in t ? t[i] = t[o] : KT(t, i);
              }
              for (var a = 0; a < n; a++) t[a] = arguments[a];
            }
            return $T(t, r + n);
          }
        });
        var GT = Pa,
          VT = Ia,
          qT = RangeError,
          ZT = function ZT(e, t, r, n) {
            var o = GT(e),
              i = VT(r),
              a = i < 0 ? o + i : i;
            if (a >= o || a < 0) throw new qT("Incorrect index");
            for (var s = new t(o), l = 0; l < o; l++) s[l] = l === a ? n : e[l];
            return s;
          },
          JT = go,
          eC = Array;
        Eu({
          target: "Array",
          proto: !0
        }, {
          "with": function _with(e, t) {
            return ZT(JT(this), eC, e, t);
          }
        }), ap.Array;
        var tC,
          rC,
          nC = bi,
          oC = function oC() {
            var e = nC(this),
              t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
          },
          iC = Kn,
          aC = xo.RegExp,
          sC = iC(function () {
            var e = aC("a", "y");
            return e.lastIndex = 2, null !== e.exec("abcd");
          }),
          lC = sC || iC(function () {
            return !aC("a", "y").sticky;
          }),
          uC = {
            BROKEN_CARET: sC || iC(function () {
              var e = aC("^r", "gy");
              return e.lastIndex = 2, null !== e.exec("str");
            }),
            MISSED_STICKY: lC,
            UNSUPPORTED_Y: sC
          },
          cC = Kn,
          dC = xo.RegExp,
          hC = cC(function () {
            var e = dC(".", "s");
            return !(e.dotAll && e.test("\n") && "s" === e.flags);
          }),
          fC = Kn,
          pC = xo.RegExp,
          vC = fC(function () {
            var e = pC("(?<a>b)", "g");
            return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
          }),
          gC = Oi,
          mC = Jn,
          xC = Wf,
          yC = oC,
          bC = uC,
          wC = As,
          SC = el.get,
          AC = hC,
          TC = vC,
          CC = No("native-string-replace", String.prototype.replace),
          RC = RegExp.prototype.exec,
          _IC = RC,
          _C = mC("".charAt),
          EC = mC("".indexOf),
          kC = mC("".replace),
          NC = mC("".slice),
          BC = (rC = /b*/g, gC(RC, tC = /a/, "a"), gC(RC, rC, "a"), 0 !== tC.lastIndex || 0 !== rC.lastIndex),
          OC = bC.BROKEN_CARET,
          FC = void 0 !== /()??/.exec("")[1];
        (BC || FC || OC || AC || TC) && (_IC = function IC(e) {
          var t,
            r,
            n,
            o,
            i,
            a,
            s,
            l = this,
            u = SC(l),
            c = xC(e),
            d = u.raw;
          if (d) return d.lastIndex = l.lastIndex, t = gC(_IC, d, c), l.lastIndex = d.lastIndex, t;
          var h = u.groups,
            f = OC && l.sticky,
            p = gC(yC, l),
            v = l.source,
            g = 0,
            m = c;
          if (f && (p = kC(p, "y", ""), -1 === EC(p, "g") && (p += "g"), m = NC(c, l.lastIndex), l.lastIndex > 0 && (!l.multiline || l.multiline && "\n" !== _C(c, l.lastIndex - 1)) && (v = "(?: " + v + ")", m = " " + m, g++), r = new RegExp("^(?:" + v + ")", p)), FC && (r = new RegExp("^" + v + "$(?!\\s)", p)), BC && (n = l.lastIndex), o = gC(RC, f ? r : l, m), f ? o ? (o.input = NC(o.input, g), o[0] = NC(o[0], g), o.index = l.lastIndex, l.lastIndex += o[0].length) : l.lastIndex = 0 : BC && o && (l.lastIndex = l.global ? o.index + o[0].length : n), FC && o && o.length > 1 && gC(CC, o[0], r, function () {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0);
          }), o && h) for (o.groups = a = wC(null), i = 0; i < h.length; i++) a[(s = h[i])[0]] = o[s[1]];
          return o;
        });
        var LC = _IC;
        Eu({
          target: "RegExp",
          proto: !0,
          forced: /./.exec !== LC
        }, {
          exec: LC
        });
        var PC = Eu,
          MC = Jn,
          zC = Na,
          DC = RangeError,
          jC = String.fromCharCode,
          UC = String.fromCodePoint,
          WC = MC([].join);
        PC({
          target: "String",
          stat: !0,
          arity: 1,
          forced: !!UC && 1 !== UC.length
        }, {
          fromCodePoint: function fromCodePoint(e) {
            for (var t, r = [], n = arguments.length, o = 0; n > o;) {
              if (t = +arguments[o++], zC(t, 1114111) !== t) throw new DC(t + " is not a valid code point");
              r[o] = t < 65536 ? jC(t) : jC(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
            }
            return WC(r, "");
          }
        });
        var YC = Eu,
          HC = Jn,
          QC = go,
          $C = Fo,
          KC = Wf,
          XC = Pa,
          GC = HC([].push),
          VC = HC([].join);
        YC({
          target: "String",
          stat: !0
        }, {
          raw: function raw(e) {
            var t = QC($C(e).raw),
              r = XC(t);
            if (!r) return "";
            for (var n = arguments.length, o = [], i = 0;;) {
              if (GC(o, KC(t[i++])), i === r) return VC(o, "");
              i < n && GC(o, KC(arguments[i]));
            }
          }
        });
        var qC = qf.codeAt;
        Eu({
          target: "String",
          proto: !0
        }, {
          codePointAt: function codePointAt(e) {
            return qC(this, e);
          }
        });
        var ZC = Eu,
          JC = fo,
          eR = Ia,
          tR = Wf,
          rR = Kn,
          nR = Jn("".charAt);
        ZC({
          target: "String",
          proto: !0,
          forced: rR(function () {
            return "\uD842" !== "𠮷".at(-2);
          })
        }, {
          at: function at(e) {
            var t = tR(JC(this)),
              r = t.length,
              n = eR(e),
              o = n >= 0 ? n : r + n;
            return o < 0 || o >= r ? void 0 : nR(t, o);
          }
        });
        var oR,
          iR = gi,
          aR = no,
          sR = hi("match"),
          lR = function lR(e) {
            var t;
            return iR(e) && (void 0 !== (t = e[sR]) ? !!t : "RegExp" === aR(e));
          },
          uR = lR,
          cR = TypeError,
          dR = function dR(e) {
            if (uR(e)) throw new cR("The method doesn't accept regular expressions");
            return e;
          },
          hR = hi("match"),
          fR = function fR(e) {
            var t = /./;
            try {
              "/./"[e](t);
            } catch (r) {
              try {
                return t[hR] = !1, "/./"[e](t);
              } catch (n) {}
            }
            return !1;
          },
          pR = Eu,
          vR = Nd,
          gR = tl.f,
          mR = Fa,
          xR = Wf,
          yR = dR,
          bR = fo,
          wR = fR,
          SR = vR("".slice),
          AR = Math.min,
          TR = wR("endsWith");
        pR({
          target: "String",
          proto: !0,
          forced: !!(TR || (oR = gR(String.prototype, "endsWith"), !oR || oR.writable)) && !TR
        }, {
          endsWith: function endsWith(e) {
            var t = xR(bR(this));
            yR(e);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              n = t.length,
              o = void 0 === r ? n : AR(mR(r), n),
              i = xR(e);
            return SR(t, o - i.length, o) === i;
          }
        });
        var CR = Eu,
          RR = dR,
          IR = fo,
          _R = Wf,
          ER = fR,
          kR = Jn("".indexOf);
        CR({
          target: "String",
          proto: !0,
          forced: !ER("includes")
        }, {
          includes: function includes(e) {
            return !!~kR(_R(IR(this)), _R(RR(e)), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var NR = Eu,
          BR = fo,
          OR = Wf,
          FR = Jn("".charCodeAt);
        NR({
          target: "String",
          proto: !0
        }, {
          isWellFormed: function isWellFormed() {
            for (var e = OR(BR(this)), t = e.length, r = 0; r < t; r++) {
              var n = FR(e, r);
              if (55296 == (63488 & n) && (n >= 56320 || ++r >= t || 56320 != (64512 & FR(e, r)))) return !1;
            }
            return !0;
          }
        });
        var LR = Oi,
          PR = Xl,
          MR = LC,
          zR = Kn,
          DR = hi,
          jR = js,
          UR = DR("species"),
          WR = RegExp.prototype,
          YR = function YR(e, t, r, n) {
            var o = DR(e),
              i = !zR(function () {
                var t = {};
                return t[o] = function () {
                  return 7;
                }, 7 !== ""[e](t);
              }),
              a = i && !zR(function () {
                var t = !1,
                  r = /a/;
                return "split" === e && ((r = {}).constructor = {}, r.constructor[UR] = function () {
                  return r;
                }, r.flags = "", r[o] = /./[o]), r.exec = function () {
                  return t = !0, null;
                }, r[o](""), !t;
              });
            if (!i || !a || r) {
              var s = /./[o],
                l = t(o, ""[e], function (e, t, r, n, o) {
                  var a = t.exec;
                  return a === MR || a === WR.exec ? i && !o ? {
                    done: !0,
                    value: LR(s, t, r, n)
                  } : {
                    done: !0,
                    value: LR(e, r, t, n)
                  } : {
                    done: !1
                  };
                });
              PR(String.prototype, e, l[0]), PR(WR, o, l[1]);
            }
            n && jR(WR[o], "sham", !0);
          },
          HR = qf.charAt,
          QR = function QR(e, t, r) {
            return t + (r ? HR(e, t).length : 1);
          },
          $R = Oi,
          KR = bi,
          XR = pi,
          GR = no,
          VR = LC,
          qR = TypeError,
          ZR = function ZR(e, t) {
            var r = e.exec;
            if (XR(r)) {
              var n = $R(r, e, t);
              return null !== n && KR(n), n;
            }
            if ("RegExp" === GR(e)) return $R(VR, e, t);
            throw new qR("RegExp#exec called on incompatible receiver");
          },
          JR = Oi,
          eI = bi,
          tI = uo,
          rI = Fa,
          nI = Wf,
          oI = fo,
          iI = qi,
          aI = QR,
          sI = ZR;
        YR("match", function (e, t, r) {
          return [function (t) {
            var r = oI(this),
              n = tI(t) ? void 0 : iI(t, e);
            return n ? JR(n, t, r) : new RegExp(t)[e](nI(r));
          }, function (e) {
            var n = eI(this),
              o = nI(e),
              i = r(t, n, o);
            if (i.done) return i.value;
            if (!n.global) return sI(n, o);
            var a = n.unicode;
            n.lastIndex = 0;
            for (var s, l = [], u = 0; null !== (s = sI(n, o));) {
              var c = nI(s[0]);
              l[u] = c, "" === c && (n.lastIndex = aI(o, rI(n.lastIndex), a)), u++;
            }
            return 0 === u ? null : l;
          }];
        });
        var lI = Oi,
          uI = Mo,
          cI = Mi,
          dI = oC,
          hI = RegExp.prototype,
          fI = function fI(e) {
            var t = e.flags;
            return void 0 !== t || "flags" in hI || uI(e, "flags") || !cI(hI, e) ? t : lI(dI, e);
          },
          pI = Eu,
          vI = Oi,
          gI = Nd,
          mI = oc,
          xI = zc,
          yI = fo,
          bI = Fa,
          wI = Wf,
          SI = bi,
          AI = uo,
          TI = lR,
          CI = fI,
          RI = qi,
          II = Xl,
          _I = Kn,
          EI = Kg,
          kI = QR,
          NI = ZR,
          BI = el,
          OI = hi("matchAll"),
          FI = "RegExp String",
          LI = FI + " Iterator",
          PI = BI.set,
          MI = BI.getterFor(LI),
          zI = RegExp.prototype,
          DI = TypeError,
          jI = gI("".indexOf),
          UI = gI("".matchAll),
          WI = !!UI && !_I(function () {
            UI("a", /./);
          }),
          YI = mI(function (e, t, r, n) {
            PI(this, {
              type: LI,
              regexp: e,
              string: t,
              global: r,
              unicode: n,
              done: !1
            });
          }, FI, function () {
            var e = MI(this);
            if (e.done) return xI(void 0, !0);
            var t = e.regexp,
              r = e.string,
              n = NI(t, r);
            return null === n ? (e.done = !0, xI(void 0, !0)) : e.global ? ("" === wI(n[0]) && (t.lastIndex = kI(r, bI(t.lastIndex), e.unicode)), xI(n, !1)) : (e.done = !0, xI(n, !1));
          }),
          HI = function HI(e) {
            var t,
              r,
              n,
              o = SI(this),
              i = wI(e),
              a = EI(o, RegExp),
              s = wI(CI(o));
            return t = new a(a === RegExp ? o.source : o, s), r = !!~jI(s, "g"), n = !!~jI(s, "u"), t.lastIndex = bI(o.lastIndex), new YI(t, i, r, n);
          };
        pI({
          target: "String",
          proto: !0,
          forced: WI
        }, {
          matchAll: function matchAll(e) {
            var t,
              r,
              n,
              o = yI(this);
            if (AI(e)) {
              if (WI) return UI(o, e);
            } else {
              if (TI(e) && (t = wI(yI(CI(e))), !~jI(t, "g"))) throw new DI("`.matchAll` does not allow non-global regexes");
              if (WI) return UI(o, e);
              if (n = RI(e, OI)) return vI(n, e, o);
            }
            return r = wI(o), new RegExp(e, "g")[OI](r);
          }
        }), OI in zI || II(zI, OI, HI);
        var QI = Ia,
          $I = Wf,
          KI = fo,
          XI = RangeError,
          GI = function GI(e) {
            var t = $I(KI(this)),
              r = "",
              n = QI(e);
            if (n < 0 || n === 1 / 0) throw new XI("Wrong number of repetitions");
            for (; n > 0; (n >>>= 1) && (t += t)) 1 & n && (r += t);
            return r;
          },
          VI = Jn,
          qI = Fa,
          ZI = Wf,
          JI = fo,
          e_ = VI(GI),
          t_ = VI("".slice),
          r_ = Math.ceil,
          n_ = function n_(e) {
            return function (t, r, n) {
              var o,
                i,
                a = ZI(JI(t)),
                s = qI(r),
                l = a.length,
                u = void 0 === n ? " " : ZI(n);
              return s <= l || "" === u ? a : ((i = e_(u, r_((o = s - l) / u.length))).length > o && (i = t_(i, 0, o)), e ? a + i : i + a);
            };
          },
          o_ = {
            start: n_(!1),
            end: n_(!0)
          },
          i_ = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(Qo),
          a_ = o_.end;
        Eu({
          target: "String",
          proto: !0,
          forced: i_
        }, {
          padEnd: function padEnd(e) {
            return a_(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        var s_ = o_.start;
        Eu({
          target: "String",
          proto: !0,
          forced: i_
        }, {
          padStart: function padStart(e) {
            return s_(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), Eu({
          target: "String",
          proto: !0
        }, {
          repeat: GI
        });
        var l_ = Jn,
          u_ = Fo,
          c_ = Math.floor,
          d_ = l_("".charAt),
          h_ = l_("".replace),
          f_ = l_("".slice),
          p_ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          v_ = /\$([$&'`]|\d{1,2})/g,
          g_ = function g_(e, t, r, n, o, i) {
            var a = r + e.length,
              s = n.length,
              l = v_;
            return void 0 !== o && (o = u_(o), l = p_), h_(i, l, function (i, l) {
              var u;
              switch (d_(l, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return f_(t, 0, r);
                case "'":
                  return f_(t, a);
                case "<":
                  u = o[f_(l, 1, -1)];
                  break;
                default:
                  var c = +l;
                  if (0 === c) return i;
                  if (c > s) {
                    var d = c_(c / 10);
                    return 0 === d ? i : d <= s ? void 0 === n[d - 1] ? d_(l, 1) : n[d - 1] + d_(l, 1) : i;
                  }
                  u = n[c - 1];
              }
              return void 0 === u ? "" : u;
            });
          },
          m_ = Zg,
          x_ = Oi,
          y_ = Jn,
          b_ = YR,
          w_ = Kn,
          S_ = bi,
          A_ = pi,
          T_ = uo,
          C_ = Ia,
          R_ = Fa,
          I_ = Wf,
          __ = fo,
          E_ = QR,
          k_ = qi,
          N_ = g_,
          B_ = ZR,
          O_ = hi("replace"),
          F_ = Math.max,
          L_ = Math.min,
          P_ = y_([].concat),
          M_ = y_([].push),
          z_ = y_("".indexOf),
          D_ = y_("".slice),
          j_ = "$0" === "a".replace(/./, "$0"),
          U_ = !!/./[O_] && "" === /./[O_]("a", "$0");
        b_("replace", function (e, t, r) {
          var n = U_ ? "$" : "$0";
          return [function (e, r) {
            var n = __(this),
              o = T_(e) ? void 0 : k_(e, O_);
            return o ? x_(o, e, n, r) : x_(t, I_(n), e, r);
          }, function (e, o) {
            var i = S_(this),
              a = I_(e);
            if ("string" == typeof o && -1 === z_(o, n) && -1 === z_(o, "$<")) {
              var s = r(t, i, a, o);
              if (s.done) return s.value;
            }
            var l = A_(o);
            l || (o = I_(o));
            var u,
              c = i.global;
            c && (u = i.unicode, i.lastIndex = 0);
            for (var d, h = []; null !== (d = B_(i, a)) && (M_(h, d), c);) {
              "" === I_(d[0]) && (i.lastIndex = E_(a, R_(i.lastIndex), u));
            }
            for (var f, p = "", v = 0, g = 0; g < h.length; g++) {
              for (var m, x = I_((d = h[g])[0]), y = F_(L_(C_(d.index), a.length), 0), b = [], w = 1; w < d.length; w++) M_(b, void 0 === (f = d[w]) ? f : String(f));
              var S = d.groups;
              if (l) {
                var A = P_([x], b, y, a);
                void 0 !== S && M_(A, S), m = I_(m_(o, void 0, A));
              } else m = N_(x, a, y, b, S, o);
              y >= v && (p += D_(a, v, y) + m, v = y + x.length);
            }
            return p + D_(a, v);
          }];
        }, !!w_(function () {
          var e = /./;
          return e.exec = function () {
            var e = [];
            return e.groups = {
              a: "7"
            }, e;
          }, "7" !== "".replace(e, "$<a>");
        }) || !j_ || U_);
        var W_ = Eu,
          Y_ = Oi,
          H_ = Jn,
          Q_ = fo,
          $_ = pi,
          K_ = uo,
          X_ = lR,
          G_ = Wf,
          V_ = qi,
          q_ = fI,
          Z_ = g_,
          J_ = hi("replace"),
          eE = TypeError,
          tE = H_("".indexOf);
        H_("".replace);
        var rE = H_("".slice),
          nE = Math.max;
        W_({
          target: "String",
          proto: !0
        }, {
          replaceAll: function replaceAll(e, t) {
            var r,
              n,
              o,
              i,
              a,
              s,
              l,
              u,
              c,
              d = Q_(this),
              h = 0,
              f = "";
            if (!K_(e)) {
              if (X_(e) && (r = G_(Q_(q_(e))), !~tE(r, "g"))) throw new eE("`.replaceAll` does not allow non-global regexes");
              if (n = V_(e, J_)) return Y_(n, e, d, t);
            }
            for (o = G_(d), i = G_(e), (a = $_(t)) || (t = G_(t)), s = i.length, l = nE(1, s), u = tE(o, i); -1 !== u;) c = a ? G_(t(i, u, o)) : Z_(i, o, u, [], void 0, t), f += rE(o, h, u) + c, h = u + s, u = u + l > o.length ? -1 : tE(o, i, u + l);
            return h < o.length && (f += rE(o, h)), f;
          }
        });
        var oE = Object.is || function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
          },
          iE = Oi,
          aE = bi,
          sE = uo,
          lE = fo,
          uE = oE,
          cE = Wf,
          dE = qi,
          hE = ZR;
        YR("search", function (e, t, r) {
          return [function (t) {
            var r = lE(this),
              n = sE(t) ? void 0 : dE(t, e);
            return n ? iE(n, t, r) : new RegExp(t)[e](cE(r));
          }, function (e) {
            var n = aE(this),
              o = cE(e),
              i = r(t, n, o);
            if (i.done) return i.value;
            var a = n.lastIndex;
            uE(a, 0) || (n.lastIndex = 0);
            var s = hE(n, o);
            return uE(n.lastIndex, a) || (n.lastIndex = a), null === s ? -1 : s.index;
          }];
        });
        var fE = Oi,
          pE = Jn,
          vE = YR,
          gE = bi,
          mE = uo,
          xE = fo,
          yE = Kg,
          bE = QR,
          wE = Fa,
          SE = Wf,
          AE = qi,
          TE = ZR,
          CE = Kn,
          RE = uC.UNSUPPORTED_Y,
          IE = Math.min,
          _E = pE([].push),
          EE = pE("".slice),
          kE = !CE(function () {
            var e = /(?:)/,
              t = e.exec;
            e.exec = function () {
              return t.apply(this, arguments);
            };
            var r = "ab".split(e);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
          }),
          NE = "c" === "abbc".split(/(b)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length;
        vE("split", function (e, t, r) {
          var n = "0".split(void 0, 0).length ? function (e, r) {
            return void 0 === e && 0 === r ? [] : fE(t, this, e, r);
          } : t;
          return [function (t, r) {
            var o = xE(this),
              i = mE(t) ? void 0 : AE(t, e);
            return i ? fE(i, t, o, r) : fE(n, SE(o), t, r);
          }, function (e, o) {
            var i = gE(this),
              a = SE(e);
            if (!NE) {
              var s = r(n, i, a, o, n !== t);
              if (s.done) return s.value;
            }
            var l = yE(i, RegExp),
              u = i.unicode,
              c = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (RE ? "g" : "y"),
              d = new l(RE ? "^(?:" + i.source + ")" : i, c),
              h = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === h) return [];
            if (0 === a.length) return null === TE(d, a) ? [a] : [];
            for (var f = 0, p = 0, v = []; p < a.length;) {
              d.lastIndex = RE ? 0 : p;
              var g,
                m = TE(d, RE ? EE(a, p) : a);
              if (null === m || (g = IE(wE(d.lastIndex + (RE ? p : 0)), a.length)) === f) p = bE(a, p, u);else {
                if (_E(v, EE(a, f, p)), v.length === h) return v;
                for (var x = 1; x <= m.length - 1; x++) if (_E(v, m[x]), v.length === h) return v;
                p = f = g;
              }
            }
            return _E(v, EE(a, f)), v;
          }];
        }, NE || !kE, RE);
        var BE = Eu,
          OE = Nd,
          FE = tl.f,
          LE = Fa,
          PE = Wf,
          ME = dR,
          zE = fo,
          DE = fR,
          jE = OE("".slice),
          UE = Math.min,
          WE = DE("startsWith"),
          YE = !WE && !!function () {
            var e = FE(String.prototype, "startsWith");
            return e && !e.writable;
          }();
        BE({
          target: "String",
          proto: !0,
          forced: !YE && !WE
        }, {
          startsWith: function startsWith(e) {
            var t = PE(zE(this));
            ME(e);
            var r = LE(UE(arguments.length > 1 ? arguments[1] : void 0, t.length)),
              n = PE(e);
            return jE(t, r, r + n.length) === n;
          }
        });
        var HE = Eu,
          QE = fo,
          $E = Ia,
          KE = Wf,
          XE = Jn("".slice),
          GE = Math.max,
          VE = Math.min;
        HE({
          target: "String",
          proto: !0,
          forced: !"".substr || "b" !== "ab".substr(-1)
        }, {
          substr: function substr(e, t) {
            var r,
              n,
              o = KE(QE(this)),
              i = o.length,
              a = $E(e);
            return a === 1 / 0 && (a = 0), a < 0 && (a = GE(i + a, 0)), (r = void 0 === t ? i : $E(t)) <= 0 || r === 1 / 0 || a >= (n = VE(a + r, i)) ? "" : XE(o, a, n);
          }
        });
        var qE = Eu,
          ZE = Oi,
          JE = Jn,
          ek = fo,
          tk = Wf,
          rk = Kn,
          nk = Array,
          ok = JE("".charAt),
          ik = JE("".charCodeAt),
          ak = JE([].join),
          sk = "".toWellFormed,
          lk = sk && rk(function () {
            return "1" !== ZE(sk, 1);
          });
        qE({
          target: "String",
          proto: !0,
          forced: lk
        }, {
          toWellFormed: function toWellFormed() {
            var e = tk(ek(this));
            if (lk) return ZE(sk, e);
            for (var t = e.length, r = nk(t), n = 0; n < t; n++) {
              var o = ik(e, n);
              55296 != (63488 & o) ? r[n] = ok(e, n) : o >= 56320 || n + 1 >= t || 56320 != (64512 & ik(e, n + 1)) ? r[n] = "�" : (r[n] = ok(e, n), r[++n] = ok(e, n));
            }
            return ak(r, "");
          }
        });
        var uk = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
          ck = fo,
          dk = Wf,
          hk = uk,
          fk = Jn("".replace),
          pk = RegExp("^[" + hk + "]+"),
          vk = RegExp("(^|[^" + hk + "])[" + hk + "]+$"),
          gk = function gk(e) {
            return function (t) {
              var r = dk(ck(t));
              return 1 & e && (r = fk(r, pk, "")), 2 & e && (r = fk(r, vk, "$1")), r;
            };
          },
          mk = {
            start: gk(1),
            end: gk(2),
            trim: gk(3)
          },
          xk = wl.PROPER,
          yk = Kn,
          bk = uk,
          wk = function wk(e) {
            return yk(function () {
              return !!bk[e]() || "​᠎" !== "​᠎"[e]() || xk && bk[e].name !== e;
            });
          },
          Sk = mk.trim;
        Eu({
          target: "String",
          proto: !0,
          forced: wk("trim")
        }, {
          trim: function trim() {
            return Sk(this);
          }
        });
        var Ak = mk.start,
          Tk = wk("trimStart") ? function () {
            return Ak(this);
          } : "".trimStart;
        Eu({
          target: "String",
          proto: !0,
          name: "trimStart",
          forced: "".trimLeft !== Tk
        }, {
          trimLeft: Tk
        });
        Eu({
          target: "String",
          proto: !0,
          name: "trimStart",
          forced: "".trimStart !== Tk
        }, {
          trimStart: Tk
        });
        var Ck = mk.end,
          Rk = wk("trimEnd") ? function () {
            return Ck(this);
          } : "".trimEnd;
        Eu({
          target: "String",
          proto: !0,
          name: "trimEnd",
          forced: "".trimRight !== Rk
        }, {
          trimRight: Rk
        });
        Eu({
          target: "String",
          proto: !0,
          name: "trimEnd",
          forced: "".trimEnd !== Rk
        }, {
          trimEnd: Rk
        });
        var Ik = fo,
          _k = Wf,
          Ek = /"/g,
          kk = Jn("".replace),
          Nk = function Nk(e, t, r, n) {
            var o = _k(Ik(e)),
              i = "<" + t;
            return "" !== r && (i += " " + r + '="' + kk(_k(n), Ek, "&quot;") + '"'), i + ">" + o + "</" + t + ">";
          },
          Bk = Kn,
          Ok = function Ok(e) {
            return Bk(function () {
              var t = ""[e]('"');
              return t !== t.toLowerCase() || t.split('"').length > 3;
            });
          },
          Fk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("anchor")
        }, {
          anchor: function anchor(e) {
            return Fk(this, "a", "name", e);
          }
        });
        var Lk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("big")
        }, {
          big: function big() {
            return Lk(this, "big", "", "");
          }
        });
        var Pk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("blink")
        }, {
          blink: function blink() {
            return Pk(this, "blink", "", "");
          }
        });
        var Mk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("bold")
        }, {
          bold: function bold() {
            return Mk(this, "b", "", "");
          }
        });
        var zk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("fixed")
        }, {
          fixed: function fixed() {
            return zk(this, "tt", "", "");
          }
        });
        var Dk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("fontcolor")
        }, {
          fontcolor: function fontcolor(e) {
            return Dk(this, "font", "color", e);
          }
        });
        var jk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("fontsize")
        }, {
          fontsize: function fontsize(e) {
            return jk(this, "font", "size", e);
          }
        });
        var Uk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("italics")
        }, {
          italics: function italics() {
            return Uk(this, "i", "", "");
          }
        });
        var Wk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("link")
        }, {
          link: function link(e) {
            return Wk(this, "a", "href", e);
          }
        });
        var Yk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("small")
        }, {
          small: function small() {
            return Yk(this, "small", "", "");
          }
        });
        var Hk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("strike")
        }, {
          strike: function strike() {
            return Hk(this, "strike", "", "");
          }
        });
        var Qk = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("sub")
        }, {
          sub: function sub() {
            return Qk(this, "sub", "", "");
          }
        });
        var $k = Nk;
        Eu({
          target: "String",
          proto: !0,
          forced: Ok("sup")
        }, {
          sup: function sup() {
            return $k(this, "sup", "", "");
          }
        }), ap.String;
        var Kk = Jn(1..valueOf),
          Xk = Eu,
          Gk = Si,
          Vk = xo,
          qk = ap,
          Zk = Jn,
          Jk = wu,
          eN = Mo,
          tN = Mh,
          rN = Mi,
          nN = Wi,
          oN = ua,
          iN = Kn,
          aN = Gl.f,
          sN = tl.f,
          lN = Ti.f,
          uN = Kk,
          cN = mk.trim,
          dN = "Number",
          hN = Vk[dN];
        qk[dN];
        var fN = hN.prototype,
          pN = Vk.TypeError,
          vN = Zk("".slice),
          gN = Zk("".charCodeAt),
          mN = function mN(e) {
            var t,
              r,
              n,
              o,
              i,
              a,
              s,
              l,
              u = oN(e, "number");
            if (nN(u)) throw new pN("Cannot convert a Symbol value to a number");
            if ("string" == typeof u && u.length > 2) if (u = cN(u), 43 === (t = gN(u, 0)) || 45 === t) {
              if (88 === (r = gN(u, 2)) || 120 === r) return NaN;
            } else if (48 === t) {
              switch (gN(u, 1)) {
                case 66:
                case 98:
                  n = 2, o = 49;
                  break;
                case 79:
                case 111:
                  n = 8, o = 55;
                  break;
                default:
                  return +u;
              }
              for (a = (i = vN(u, 2)).length, s = 0; s < a; s++) if ((l = gN(i, s)) < 48 || l > o) return NaN;
              return parseInt(i, n);
            }
            return +u;
          },
          xN = Jk(dN, !hN(" 0o1") || !hN("0b1") || hN("+0x1")),
          _yN = function yN(e) {
            var t,
              r = arguments.length < 1 ? 0 : hN(function (e) {
                var t = oN(e, "number");
                return "bigint" == typeof t ? t : mN(t);
              }(e));
            return rN(fN, t = this) && iN(function () {
              uN(t);
            }) ? tN(Object(r), this, _yN) : r;
          };
        _yN.prototype = fN, xN && (fN.constructor = _yN), Xk({
          global: !0,
          constructor: !0,
          wrap: !0,
          forced: xN
        }, {
          Number: _yN
        });
        xN && function (e, t) {
          for (var r, n = Gk ? aN(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++) eN(t, r = n[o]) && !eN(e, r) && lN(e, r, sN(t, r));
        }(qk[dN], hN), Eu({
          target: "Number",
          stat: !0,
          nonConfigurable: !0,
          nonWritable: !0
        }, {
          EPSILON: Math.pow(2, -52)
        });
        var bN = xo.isFinite;
        Eu({
          target: "Number",
          stat: !0
        }, {
          isFinite: Number.isFinite || function (e) {
            return "number" == typeof e && bN(e);
          }
        });
        var wN = gi,
          SN = Math.floor,
          AN = Number.isInteger || function (e) {
            return !wN(e) && isFinite(e) && SN(e) === e;
          };
        Eu({
          target: "Number",
          stat: !0
        }, {
          isInteger: AN
        }), Eu({
          target: "Number",
          stat: !0
        }, {
          isNaN: function isNaN(e) {
            return e != e;
          }
        });
        var TN = Eu,
          CN = AN,
          RN = Math.abs;
        TN({
          target: "Number",
          stat: !0
        }, {
          isSafeInteger: function isSafeInteger(e) {
            return CN(e) && RN(e) <= 9007199254740991;
          }
        }), Eu({
          target: "Number",
          stat: !0,
          nonConfigurable: !0,
          nonWritable: !0
        }, {
          MAX_SAFE_INTEGER: 9007199254740991
        }), Eu({
          target: "Number",
          stat: !0,
          nonConfigurable: !0,
          nonWritable: !0
        }, {
          MIN_SAFE_INTEGER: -9007199254740991
        });
        var IN = xo,
          _N = Kn,
          EN = Wf,
          kN = mk.trim,
          NN = uk,
          BN = Jn("".charAt),
          ON = IN.parseFloat,
          FN = IN.Symbol,
          LN = FN && FN.iterator,
          PN = 1 / ON(NN + "-0") != -1 / 0 || LN && !_N(function () {
            ON(Object(LN));
          }) ? function (e) {
            var t = kN(EN(e)),
              r = ON(t);
            return 0 === r && "-" === BN(t, 0) ? -0 : r;
          } : ON;
        Eu({
          target: "Number",
          stat: !0,
          forced: Number.parseFloat !== PN
        }, {
          parseFloat: PN
        });
        var MN = xo,
          zN = Kn,
          DN = Jn,
          jN = Wf,
          UN = mk.trim,
          WN = uk,
          YN = MN.parseInt,
          HN = MN.Symbol,
          QN = HN && HN.iterator,
          $N = /^[+-]?0x/i,
          KN = DN($N.exec),
          XN = 8 !== YN(WN + "08") || 22 !== YN(WN + "0x16") || QN && !zN(function () {
            YN(Object(QN));
          }) ? function (e, t) {
            var r = UN(jN(e));
            return YN(r, t >>> 0 || (KN($N, r) ? 16 : 10));
          } : YN;
        Eu({
          target: "Number",
          stat: !0,
          forced: Number.parseInt !== XN
        }, {
          parseInt: XN
        });
        var GN = Math.log,
          VN = Math.LOG10E,
          qN = Math.log10 || function (e) {
            return GN(e) * VN;
          },
          ZN = Eu,
          JN = Jn,
          eB = Ia,
          tB = Kk,
          rB = GI,
          nB = qN,
          oB = Kn,
          iB = RangeError,
          aB = String,
          sB = isFinite,
          lB = Math.abs,
          uB = Math.floor,
          cB = Math.pow,
          dB = Math.round,
          hB = JN(1..toExponential),
          fB = JN(rB),
          pB = JN("".slice),
          vB = "-6.9000e-11" === hB(-69e-12, 4) && "1.25e+0" === hB(1.255, 2) && "1.235e+4" === hB(12345, 3) && "3e+1" === hB(25, 0);
        ZN({
          target: "Number",
          proto: !0,
          forced: !vB || !(oB(function () {
            hB(1, 1 / 0);
          }) && oB(function () {
            hB(1, -1 / 0);
          })) || !!oB(function () {
            hB(1 / 0, 1 / 0), hB(NaN, 1 / 0);
          })
        }, {
          toExponential: function toExponential(e) {
            var t = tB(this);
            if (void 0 === e) return hB(t);
            var r = eB(e);
            if (!sB(t)) return String(t);
            if (r < 0 || r > 20) throw new iB("Incorrect fraction digits");
            if (vB) return hB(t, r);
            var n,
              o,
              i,
              a,
              s = "";
            if (t < 0 && (s = "-", t = -t), 0 === t) o = 0, n = fB("0", r + 1);else {
              var l = nB(t);
              o = uB(l);
              var u = cB(10, o - r),
                c = dB(t / u);
              2 * t >= (2 * c + 1) * u && (c += 1), c >= cB(10, r + 1) && (c /= 10, o += 1), n = aB(c);
            }
            return 0 !== r && (n = pB(n, 0, 1) + "." + pB(n, 1)), 0 === o ? (i = "+", a = "0") : (i = o > 0 ? "+" : "-", a = aB(lB(o))), s + (n += "e" + i + a);
          }
        });
        var gB = Eu,
          mB = Jn,
          xB = Ia,
          yB = Kk,
          bB = GI,
          wB = Kn,
          SB = RangeError,
          AB = String,
          TB = Math.floor,
          CB = mB(bB),
          RB = mB("".slice),
          IB = mB(1..toFixed),
          _B = function e(t, r, n) {
            return 0 === r ? n : r % 2 == 1 ? e(t, r - 1, n * t) : e(t * t, r / 2, n);
          },
          EB = function EB(e, t, r) {
            for (var n = -1, o = r; ++n < 6;) o += t * e[n], e[n] = o % 1e7, o = TB(o / 1e7);
          },
          kB = function kB(e, t) {
            for (var r = 6, n = 0; --r >= 0;) n += e[r], e[r] = TB(n / t), n = n % t * 1e7;
          },
          NB = function NB(e) {
            for (var t = 6, r = ""; --t >= 0;) if ("" !== r || 0 === t || 0 !== e[t]) {
              var n = AB(e[t]);
              r = "" === r ? n : r + CB("0", 7 - n.length) + n;
            }
            return r;
          };
        gB({
          target: "Number",
          proto: !0,
          forced: wB(function () {
            return "0.000" !== IB(8e-5, 3) || "1" !== IB(.9, 0) || "1.25" !== IB(1.255, 2) || "1000000000000000128" !== IB(0xde0b6b3a7640080, 0);
          }) || !wB(function () {
            IB({});
          })
        }, {
          toFixed: function toFixed(e) {
            var t,
              r,
              n,
              o,
              i = yB(this),
              a = xB(e),
              s = [0, 0, 0, 0, 0, 0],
              l = "",
              u = "0";
            if (a < 0 || a > 20) throw new SB("Incorrect fraction digits");
            if (i != i) return "NaN";
            if (i <= -1e21 || i >= 1e21) return AB(i);
            if (i < 0 && (l = "-", i = -i), i > 1e-21) if (r = (t = function (e) {
              for (var t = 0, r = e; r >= 4096;) t += 12, r /= 4096;
              for (; r >= 2;) t += 1, r /= 2;
              return t;
            }(i * _B(2, 69, 1)) - 69) < 0 ? i * _B(2, -t, 1) : i / _B(2, t, 1), r *= 4503599627370496, (t = 52 - t) > 0) {
              for (EB(s, 0, r), n = a; n >= 7;) EB(s, 1e7, 0), n -= 7;
              for (EB(s, _B(10, n, 1), 0), n = t - 1; n >= 23;) kB(s, 1 << 23), n -= 23;
              kB(s, 1 << n), EB(s, 1, 1), kB(s, 2), u = NB(s);
            } else EB(s, 0, r), EB(s, 1 << -t, 0), u = NB(s) + CB("0", a);
            return u = a > 0 ? l + ((o = u.length) <= a ? "0." + CB("0", a - o) + u : RB(u, 0, o - a) + "." + RB(u, o - a)) : l + u;
          }
        });
        var BB = Eu,
          OB = Kn,
          FB = Kk,
          LB = Jn(1..toPrecision);
        BB({
          target: "Number",
          proto: !0,
          forced: OB(function () {
            return "1" !== LB(1, void 0);
          }) || !OB(function () {
            LB({});
          })
        }, {
          toPrecision: function toPrecision(e) {
            return void 0 === e ? LB(FB(this)) : LB(FB(this), e);
          }
        }), ap.Number;
        var PB = {},
          MB = hi;
        PB.f = MB;
        var zB = ap,
          DB = Mo,
          jB = PB,
          UB = Ti.f,
          WB = function WB(e) {
            var t = zB.Symbol || (zB.Symbol = {});
            DB(t, e) || UB(t, e, {
              value: jB.f(e)
            });
          },
          YB = Oi,
          HB = Pi,
          QB = hi,
          $B = Xl,
          KB = function KB() {
            var e = HB("Symbol"),
              t = e && e.prototype,
              r = t && t.valueOf,
              n = QB("toPrimitive");
            t && !t[n] && $B(t, n, function (e) {
              return YB(r, this);
            }, {
              arity: 1
            });
          },
          XB = Eu,
          GB = xo,
          VB = Oi,
          qB = Jn,
          ZB = Si,
          JB = ri,
          eO = Kn,
          tO = Mo,
          rO = Mi,
          nO = bi,
          oO = go,
          iO = ha,
          aO = Wf,
          sO = Ms,
          lO = As,
          uO = Za,
          cO = Gl,
          dO = Zc,
          hO = Zl,
          fO = tl,
          pO = Ti,
          vO = wi,
          gO = rl,
          mO = Xl,
          xO = rf,
          yO = No,
          bO = Wa,
          wO = Wo,
          SO = hi,
          AO = PB,
          TO = WB,
          CO = KB,
          RO = qu,
          IO = el,
          _O = Bw.forEach,
          EO = us("hidden"),
          kO = "Symbol",
          NO = "prototype",
          BO = IO.set,
          OO = IO.getterFor(kO),
          FO = Object[NO],
          LO = GB.Symbol,
          PO = LO && LO[NO],
          MO = GB.RangeError,
          zO = GB.TypeError,
          DO = GB.QObject,
          jO = fO.f,
          UO = pO.f,
          WO = dO.f,
          YO = gO.f,
          HO = qB([].push),
          QO = yO("symbols"),
          $O = yO("op-symbols"),
          KO = yO("wks"),
          XO = !DO || !DO[NO] || !DO[NO].findChild,
          GO = function GO(e, t, r) {
            var n = jO(FO, t);
            n && delete FO[t], UO(e, t, r), n && e !== FO && UO(FO, t, n);
          },
          VO = ZB && eO(function () {
            return 7 !== lO(UO({}, "a", {
              get: function get() {
                return UO(this, "a", {
                  value: 7
                }).a;
              }
            })).a;
          }) ? GO : UO,
          qO = function qO(e, t) {
            var r = QO[e] = lO(PO);
            return BO(r, {
              type: kO,
              tag: e,
              description: t
            }), ZB || (r.description = t), r;
          },
          _ZO = function ZO(e, t, r) {
            e === FO && _ZO($O, t, r), nO(e);
            var n = iO(t);
            return nO(r), tO(QO, n) ? (r.enumerable ? (tO(e, EO) && e[EO][n] && (e[EO][n] = !1), r = lO(r, {
              enumerable: sO(0, !1)
            })) : (tO(e, EO) || UO(e, EO, sO(1, lO(null))), e[EO][n] = !0), VO(e, n, r)) : UO(e, n, r);
          },
          JO = function JO(e, t) {
            nO(e);
            var r = oO(t),
              n = uO(r).concat(nF(r));
            return _O(n, function (t) {
              ZB && !VB(eF, r, t) || _ZO(e, t, r[t]);
            }), e;
          },
          eF = function eF(e) {
            var t = iO(e),
              r = VB(YO, this, t);
            return !(this === FO && tO(QO, t) && !tO($O, t)) && (!(r || !tO(this, t) || !tO(QO, t) || tO(this, EO) && this[EO][t]) || r);
          },
          tF = function tF(e, t) {
            var r = oO(e),
              n = iO(t);
            if (r !== FO || !tO(QO, n) || tO($O, n)) {
              var o = jO(r, n);
              return !o || !tO(QO, n) || tO(r, EO) && r[EO][n] || (o.enumerable = !0), o;
            }
          },
          rF = function rF(e) {
            var t = WO(oO(e)),
              r = [];
            return _O(t, function (e) {
              tO(QO, e) || tO(bO, e) || HO(r, e);
            }), r;
          },
          nF = function nF(e) {
            var t = e === FO,
              r = WO(t ? $O : oO(e)),
              n = [];
            return _O(r, function (e) {
              !tO(QO, e) || t && !tO(FO, e) || HO(n, QO[e]);
            }), n;
          };
        JB || (LO = function LO() {
          if (rO(PO, this)) throw new zO("Symbol is not a constructor");
          var e = arguments.length && void 0 !== arguments[0] ? aO(arguments[0]) : void 0,
            t = wO(e);
          return ZB && XO && VO(FO, t, {
            configurable: !0,
            set: function e(r) {
              var n = void 0 === this ? GB : this;
              n === FO && VB(e, $O, r), tO(n, EO) && tO(n[EO], t) && (n[EO][t] = !1);
              var o = sO(1, r);
              try {
                VO(n, t, o);
              } catch (IY) {
                if (!(IY instanceof MO)) throw IY;
                GO(n, t, o);
              }
            }
          }), qO(t, e);
        }, mO(PO = LO[NO], "toString", function () {
          return OO(this).tag;
        }), mO(LO, "withoutSetter", function (e) {
          return qO(wO(e), e);
        }), gO.f = eF, pO.f = _ZO, vO.f = JO, fO.f = tF, cO.f = dO.f = rF, hO.f = nF, AO.f = function (e) {
          return qO(SO(e), e);
        }, ZB && (xO(PO, "description", {
          configurable: !0,
          get: function get() {
            return OO(this).description;
          }
        }), mO(FO, "propertyIsEnumerable", eF, {
          unsafe: !0
        }))), XB({
          global: !0,
          constructor: !0,
          wrap: !0,
          forced: !JB,
          sham: !JB
        }, {
          Symbol: LO
        }), _O(uO(KO), function (e) {
          TO(e);
        }), XB({
          target: kO,
          stat: !0,
          forced: !JB
        }, {
          useSetter: function useSetter() {
            XO = !0;
          },
          useSimple: function useSimple() {
            XO = !1;
          }
        }), XB({
          target: "Object",
          stat: !0,
          forced: !JB,
          sham: !ZB
        }, {
          create: function create(e, t) {
            return void 0 === t ? lO(e) : JO(lO(e), t);
          },
          defineProperty: _ZO,
          defineProperties: JO,
          getOwnPropertyDescriptor: tF
        }), XB({
          target: "Object",
          stat: !0,
          forced: !JB
        }, {
          getOwnPropertyNames: rF
        }), CO(), RO(LO, kO), bO[EO] = !0;
        var oF = ri && !!Symbol["for"] && !!Symbol.keyFor,
          iF = Eu,
          aF = Pi,
          sF = Mo,
          lF = Wf,
          uF = No,
          cF = oF,
          dF = uF("string-to-symbol-registry"),
          hF = uF("symbol-to-string-registry");
        iF({
          target: "Symbol",
          stat: !0,
          forced: !cF
        }, {
          "for": function _for(e) {
            var t = lF(e);
            if (sF(dF, t)) return dF[t];
            var r = aF("Symbol")(t);
            return dF[t] = r, hF[r] = t, r;
          }
        });
        var fF = Eu,
          pF = Mo,
          vF = Wi,
          gF = Hi,
          mF = oF,
          xF = No("symbol-to-string-registry");
        fF({
          target: "Symbol",
          stat: !0,
          forced: !mF
        }, {
          keyFor: function keyFor(e) {
            if (!vF(e)) throw new TypeError(gF(e) + " is not a symbol");
            if (pF(xF, e)) return xF[e];
          }
        });
        var yF = Fb,
          bF = pi,
          wF = no,
          SF = Wf,
          AF = Jn([].push),
          TF = Eu,
          CF = Pi,
          RF = Zg,
          IF = Oi,
          _F = Jn,
          EF = Kn,
          kF = pi,
          NF = Wi,
          BF = Jc,
          OF = function OF(e) {
            if (bF(e)) return e;
            if (yF(e)) {
              for (var t = e.length, r = [], n = 0; n < t; n++) {
                var o = e[n];
                "string" == typeof o ? AF(r, o) : "number" != typeof o && "Number" !== wF(o) && "String" !== wF(o) || AF(r, SF(o));
              }
              var i = r.length,
                a = !0;
              return function (e, t) {
                if (a) return a = !1, t;
                if (yF(this)) return t;
                for (var n = 0; n < i; n++) if (r[n] === e) return t;
              };
            }
          },
          FF = ri,
          LF = String,
          PF = CF("JSON", "stringify"),
          MF = _F(/./.exec),
          zF = _F("".charAt),
          DF = _F("".charCodeAt),
          jF = _F("".replace),
          UF = _F(1..toString),
          WF = /[\uD800-\uDFFF]/g,
          YF = /^[\uD800-\uDBFF]$/,
          HF = /^[\uDC00-\uDFFF]$/,
          QF = !FF || EF(function () {
            var e = CF("Symbol")("stringify detection");
            return "[null]" !== PF([e]) || "{}" !== PF({
              a: e
            }) || "{}" !== PF(Object(e));
          }),
          $F = EF(function () {
            return "\"\\udf06\\ud834\"" !== PF("\uDF06\uD834") || "\"\\udead\"" !== PF("\uDEAD");
          }),
          KF = function KF(e, t) {
            var r = BF(arguments),
              n = OF(t);
            if (kF(n) || void 0 !== e && !NF(e)) return r[1] = function (e, t) {
              if (kF(n) && (t = IF(n, this, LF(e), t)), !NF(t)) return t;
            }, RF(PF, null, r);
          },
          XF = function XF(e, t, r) {
            var n = zF(r, t - 1),
              o = zF(r, t + 1);
            return MF(YF, e) && !MF(HF, o) || MF(HF, e) && !MF(YF, n) ? "\\u" + UF(DF(e, 0), 16) : e;
          };
        PF && TF({
          target: "JSON",
          stat: !0,
          arity: 3,
          forced: QF || $F
        }, {
          stringify: function stringify(e, t, r) {
            var n = BF(arguments),
              o = RF(QF ? KF : PF, null, n);
            return $F && "string" == typeof o ? jF(o, WF, XF) : o;
          }
        });
        var GF = Zl,
          VF = Fo;
        Eu({
          target: "Object",
          stat: !0,
          forced: !ri || Kn(function () {
            GF.f(1);
          })
        }, {
          getOwnPropertySymbols: function getOwnPropertySymbols(e) {
            var t = GF.f;
            return t ? t(VF(e)) : [];
          }
        });
        var qF = Si,
          ZF = Jn,
          JF = Oi,
          eL = Kn,
          tL = Za,
          rL = Zl,
          nL = rl,
          oL = Fo,
          iL = lo,
          aL = Object.assign,
          sL = Object.defineProperty,
          lL = ZF([].concat),
          uL = !aL || eL(function () {
            if (qF && 1 !== aL({
              b: 1
            }, aL(sL({}, "a", {
              enumerable: !0,
              get: function get() {
                sL(this, "b", {
                  value: 3,
                  enumerable: !1
                });
              }
            }), {
              b: 2
            })).b) return !0;
            var e = {},
              t = {},
              r = Symbol("assign detection"),
              n = "abcdefghijklmnopqrst";
            return e[r] = 7, n.split("").forEach(function (e) {
              t[e] = e;
            }), 7 !== aL({}, e)[r] || tL(aL({}, t)).join("") !== n;
          }) ? function (e, t) {
            for (var r = oL(e), n = arguments.length, o = 1, i = rL.f, a = nL.f; n > o;) for (var s, l = iL(arguments[o++]), u = i ? lL(tL(l), i(l)) : tL(l), c = u.length, d = 0; c > d;) s = u[d++], qF && !JF(a, l, s) || (r[s] = l[s]);
            return r;
          } : aL,
          cL = uL;
        Eu({
          target: "Object",
          stat: !0,
          arity: 2,
          forced: Object.assign !== cL
        }, {
          assign: cL
        }), Eu({
          target: "Object",
          stat: !0,
          sham: !Si
        }, {
          create: As
        });
        var dL = Eu,
          hL = Si,
          fL = Ti.f;
        dL({
          target: "Object",
          stat: !0,
          forced: Object.defineProperty !== fL,
          sham: !hL
        }, {
          defineProperty: fL
        });
        var pL = Eu,
          vL = Si,
          gL = wi.f;
        pL({
          target: "Object",
          stat: !0,
          forced: Object.defineProperties !== gL,
          sham: !vL
        }, {
          defineProperties: gL
        });
        var mL = Si,
          xL = Kn,
          yL = Jn,
          bL = zu,
          wL = Za,
          SL = go,
          AL = yL(rl.f),
          TL = yL([].push),
          CL = mL && xL(function () {
            var e = Object.create(null);
            return e[2] = 2, !AL(e, 2);
          }),
          RL = function RL(e) {
            return function (t) {
              for (var r, n = SL(t), o = wL(n), i = CL && null === bL(n), a = o.length, s = 0, l = []; a > s;) r = o[s++], mL && !(i ? r in n : AL(n, r)) || TL(l, e ? [r, n[r]] : n[r]);
              return l;
            };
          },
          IL = {
            entries: RL(!0),
            values: RL(!1)
          },
          _L = IL.entries;
        Eu({
          target: "Object",
          stat: !0
        }, {
          entries: function entries(e) {
            return _L(e);
          }
        });
        var EL = Eu,
          kL = hd,
          NL = Kn,
          BL = gi,
          OL = _d.onFreeze,
          FL = Object.freeze;
        EL({
          target: "Object",
          stat: !0,
          forced: NL(function () {
            FL(1);
          }),
          sham: !kL
        }, {
          freeze: function freeze(e) {
            return FL && BL(e) ? FL(OL(e)) : e;
          }
        });
        var LL = Ch,
          PL = bb;
        Eu({
          target: "Object",
          stat: !0
        }, {
          fromEntries: function fromEntries(e) {
            var t = {};
            return LL(e, function (e, r) {
              PL(t, e, r);
            }, {
              AS_ENTRIES: !0
            }), t;
          }
        });
        var ML = Eu,
          zL = Kn,
          DL = go,
          jL = tl.f,
          UL = Si;
        ML({
          target: "Object",
          stat: !0,
          forced: !UL || zL(function () {
            jL(1);
          }),
          sham: !UL
        }, {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return jL(DL(e), t);
          }
        });
        var WL = su,
          YL = go,
          HL = tl,
          QL = bb;
        Eu({
          target: "Object",
          stat: !0,
          sham: !Si
        }, {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
            for (var t, r, n = YL(e), o = HL.f, i = WL(n), a = {}, s = 0; i.length > s;) void 0 !== (r = o(n, t = i[s++])) && QL(a, t, r);
            return a;
          }
        });
        var $L = Eu,
          KL = Kn,
          XL = Zc.f;
        $L({
          target: "Object",
          stat: !0,
          forced: KL(function () {
            return !Object.getOwnPropertyNames(1);
          })
        }, {
          getOwnPropertyNames: XL
        });
        var GL = Fo,
          VL = zu,
          qL = ku;
        Eu({
          target: "Object",
          stat: !0,
          forced: Kn(function () {
            VL(1);
          }),
          sham: !qL
        }, {
          getPrototypeOf: function getPrototypeOf(e) {
            return VL(GL(e));
          }
        });
        var ZL = Eu,
          JL = Pi,
          eP = Jn,
          tP = Xi,
          rP = fo,
          nP = ha,
          oP = Ch,
          iP = Kn,
          aP = Object.groupBy,
          sP = JL("Object", "create"),
          lP = eP([].push);
        ZL({
          target: "Object",
          stat: !0,
          forced: !aP || iP(function () {
            return 1 !== aP("ab", function (e) {
              return e;
            }).a.length;
          })
        }, {
          groupBy: function groupBy(e, t) {
            rP(e), tP(t);
            var r = sP(null),
              n = 0;
            return oP(e, function (e) {
              var o = nP(t(e, n++));
              o in r ? lP(r[o], e) : r[o] = [e];
            }), r;
          }
        }), Eu({
          target: "Object",
          stat: !0
        }, {
          hasOwn: Mo
        }), Eu({
          target: "Object",
          stat: !0
        }, {
          is: oE
        });
        var uP = dd;
        Eu({
          target: "Object",
          stat: !0,
          forced: Object.isExtensible !== uP
        }, {
          isExtensible: uP
        });
        var cP = Eu,
          dP = Kn,
          hP = gi,
          fP = no,
          pP = id,
          vP = Object.isFrozen;
        cP({
          target: "Object",
          stat: !0,
          forced: pP || dP(function () {
            vP(1);
          })
        }, {
          isFrozen: function isFrozen(e) {
            return !hP(e) || !(!pP || "ArrayBuffer" !== fP(e)) || !!vP && vP(e);
          }
        });
        var gP = Eu,
          mP = Kn,
          xP = gi,
          yP = no,
          bP = id,
          wP = Object.isSealed;
        gP({
          target: "Object",
          stat: !0,
          forced: bP || mP(function () {
            wP(1);
          })
        }, {
          isSealed: function isSealed(e) {
            return !xP(e) || !(!bP || "ArrayBuffer" !== yP(e)) || !!wP && wP(e);
          }
        });
        var SP = Fo,
          AP = Za;
        Eu({
          target: "Object",
          stat: !0,
          forced: Kn(function () {
            AP(1);
          })
        }, {
          keys: function keys(e) {
            return AP(SP(e));
          }
        });
        var TP = Eu,
          CP = gi,
          RP = _d.onFreeze,
          IP = hd,
          _P = Kn,
          EP = Object.preventExtensions;
        TP({
          target: "Object",
          stat: !0,
          forced: _P(function () {
            EP(1);
          }),
          sham: !IP
        }, {
          preventExtensions: function preventExtensions(e) {
            return EP && CP(e) ? EP(RP(e)) : e;
          }
        });
        var kP = Si,
          NP = rf,
          BP = gi,
          OP = uc,
          FP = Fo,
          LP = fo,
          PP = Object.getPrototypeOf,
          MP = Object.setPrototypeOf,
          zP = Object.prototype,
          DP = "__proto__";
        if (kP && PP && MP && !(DP in zP)) try {
          NP(zP, DP, {
            configurable: !0,
            get: function get() {
              return PP(FP(this));
            },
            set: function set(e) {
              var t = LP(this);
              OP(e) && BP(t) && MP(t, e);
            }
          });
        } catch (IY) {}
        var jP = Eu,
          UP = gi,
          WP = _d.onFreeze,
          YP = hd,
          HP = Kn,
          QP = Object.seal;
        jP({
          target: "Object",
          stat: !0,
          forced: HP(function () {
            QP(1);
          }),
          sham: !YP
        }, {
          seal: function seal(e) {
            return QP && UP(e) ? QP(WP(e)) : e;
          }
        }), Eu({
          target: "Object",
          stat: !0
        }, {
          setPrototypeOf: mc
        });
        var $P = IL.values;
        Eu({
          target: "Object",
          stat: !0
        }, {
          values: function values(e) {
            return $P(e);
          }
        });
        var KP = xo,
          XP = DA,
          GP = !Kn(function () {
            if (!(XP && XP < 535)) {
              var e = Math.random();
              __defineSetter__.call(null, e, function () {}), delete KP[e];
            }
          }),
          VP = Xi,
          qP = Fo,
          ZP = Ti;
        Si && Eu({
          target: "Object",
          proto: !0,
          forced: GP
        }, {
          __defineGetter__: function __defineGetter__(e, t) {
            ZP.f(qP(this), e, {
              get: VP(t),
              enumerable: !0,
              configurable: !0
            });
          }
        });
        var JP = Xi,
          eM = Fo,
          tM = Ti;
        Si && Eu({
          target: "Object",
          proto: !0,
          forced: GP
        }, {
          __defineSetter__: function __defineSetter__(e, t) {
            tM.f(eM(this), e, {
              set: JP(t),
              enumerable: !0,
              configurable: !0
            });
          }
        });
        var rM = Eu,
          nM = Si,
          oM = GP,
          iM = Fo,
          aM = ha,
          sM = zu,
          lM = tl.f;
        nM && rM({
          target: "Object",
          proto: !0,
          forced: oM
        }, {
          __lookupGetter__: function __lookupGetter__(e) {
            var t,
              r = iM(this),
              n = aM(e);
            do {
              if (t = lM(r, n)) return t.get;
            } while (r = sM(r));
          }
        });
        var uM = Eu,
          cM = Si,
          dM = GP,
          hM = Fo,
          fM = ha,
          pM = zu,
          vM = tl.f;
        cM && uM({
          target: "Object",
          proto: !0,
          forced: dM
        }, {
          __lookupSetter__: function __lookupSetter__(e) {
            var t,
              r = hM(this),
              n = fM(e);
            do {
              if (t = vM(r, n)) return t.set;
            } while (r = pM(r));
          }
        }), qu(xo.JSON, "JSON", !0), qu(Math, "Math", !0);
        var gM = xo,
          mM = qu;
        Eu({
          global: !0
        }, {
          Reflect: {}
        }), mM(gM.Reflect, "Reflect", !0), ap.Object, WB("asyncIterator");
        var xM = Eu,
          yM = Si,
          bM = Jn,
          wM = Mo,
          SM = pi,
          AM = Mi,
          TM = Wf,
          CM = rf,
          RM = hu,
          IM = xo.Symbol,
          _M = IM && IM.prototype;
        if (yM && SM(IM) && (!("description" in _M) || void 0 !== IM().description)) {
          var EM = {},
            kM = function kM() {
              var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : TM(arguments[0]),
                t = AM(_M, this) ? new IM(e) : void 0 === e ? IM() : IM(e);
              return "" === e && (EM[t] = !0), t;
            };
          RM(kM, IM), kM.prototype = _M, _M.constructor = kM;
          var NM = "Symbol(description detection)" === String(IM("description detection")),
            BM = bM(_M.valueOf),
            OM = bM(_M.toString),
            FM = /^Symbol\((.*)\)[^)]+$/,
            LM = bM("".replace),
            PM = bM("".slice);
          CM(_M, "description", {
            configurable: !0,
            get: function get() {
              var e = BM(this);
              if (wM(EM, e)) return "";
              var t = OM(e),
                r = NM ? PM(t, 7, -1) : LM(t, FM, "$1");
              return "" === r ? void 0 : r;
            }
          }), xM({
            global: !0,
            constructor: !0,
            forced: !0
          }, {
            Symbol: kM
          });
        }
        WB("hasInstance"), WB("isConcatSpreadable"), WB("iterator"), WB("match"), WB("matchAll"), WB("replace"), WB("search"), WB("species"), WB("split");
        var MM = KB;
        WB("toPrimitive"), MM();
        var zM = Pi,
          DM = qu;
        WB("toStringTag"), DM(zM("Symbol"), "Symbol"), WB("unscopables"), ap.Symbol;
        var jM = Jn,
          UM = Xi,
          WM = gi,
          YM = Mo,
          HM = Jc,
          QM = Xn,
          $M = Function,
          KM = jM([].concat),
          XM = jM([].join),
          GM = {},
          VM = QM ? $M.bind : function (e) {
            var t = UM(this),
              r = t.prototype,
              n = HM(arguments, 1),
              _o2 = function o() {
                var r = KM(n, HM(arguments));
                return this instanceof _o2 ? function (e, t, r) {
                  if (!YM(GM, t)) {
                    for (var n = [], o = 0; o < t; o++) n[o] = "a[" + o + "]";
                    GM[t] = $M("C,a", "return new C(" + XM(n, ",") + ")");
                  }
                  return GM[t](e, r);
                }(t, r.length, r) : t.apply(e, r);
              };
            return WM(r) && (_o2.prototype = r), _o2;
          },
          qM = VM;
        Eu({
          target: "Function",
          proto: !0,
          forced: Function.bind !== qM
        }, {
          bind: qM
        });
        var ZM = Si,
          JM = wl.EXISTS,
          ez = Jn,
          tz = rf,
          rz = Function.prototype,
          nz = ez(rz.toString),
          oz = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          iz = ez(oz.exec);
        ZM && !JM && tz(rz, "name", {
          configurable: !0,
          get: function get() {
            try {
              return iz(oz, nz(this))[1];
            } catch (IY) {
              return "";
            }
          }
        });
        var az = pi,
          sz = gi,
          lz = Ti,
          uz = Mi,
          cz = Yl,
          dz = hi("hasInstance"),
          hz = Function.prototype;
        dz in hz || lz.f(hz, dz, {
          value: cz(function (e) {
            if (!az(this) || !sz(e)) return !1;
            var t = this.prototype;
            return sz(t) ? uz(t, e) : e instanceof this;
          }, dz)
        }), ap.Function;
        /**
                     * es6-proxy-polyfill
                     * @version 2.1.1
                     * @author Ambit-Tsai <ambit_tsai@qq.com>
                     * @license Apache-2.0
                     * @see {@link https://github.com/ambit-tsai/es6-proxy-polyfill#readme}
                     */
        Object.defineProperty;
        var fz = Object.defineProperties;
        function pz(e) {
          return "function" == typeof e && /\[native code\]/.test(e.toString());
        }
        fz && pz(fz), pz(Object.setPrototypeOf) ? Object.setPrototypeOf : Object.__proto__;
        var vz = "_$DX_DELEGATE";
        function gz(e) {
          var t = "$$".concat(e.type),
            r = e.composedPath && e.composedPath()[0] || e.target;
          for (e.target !== r && Object.defineProperty(e, "target", {
            configurable: !0,
            value: r
          }), Object.defineProperty(e, "currentTarget", {
            configurable: !0,
            get: function get() {
              return r || document;
            }
          }), fe.registry && !fe.done && (fe.done = _$HY.done = !0); r;) {
            var n = r[t];
            if (n && !r.disabled) {
              var o = r["".concat(t, "Data")];
              if (void 0 !== o ? n.call(r, o, e) : n.call(r, e), e.cancelBubble) return;
            }
            r = r._$host || r.parentNode || r.host;
          }
        }
        var mz;
        function xz() {
          var e = new Set();
          var t = !1;
          return {
            subscribe: function subscribe(t) {
              return e.add(t), function () {
                return e["delete"](t);
              };
            },
            confirm: function confirm(r, n) {
              if (t) return !(t = !1);
              var o,
                i = {
                  to: r,
                  options: n,
                  defaultPrevented: !1,
                  preventDefault: function preventDefault() {
                    return i.defaultPrevented = !0;
                  }
                },
                a = R(e);
              try {
                var s = function s() {
                  var e = o.value;
                  e.listener(A(A({}, i), {}, {
                    from: e.location,
                    retry: function retry(o) {
                      o && (t = !0), e.navigate(r, A(A({}, n), {}, {
                        resolve: !1
                      }));
                    }
                  }));
                };
                for (a.s(); !(o = a.n()).done;) s();
              } catch (l) {
                a.e(l);
              } finally {
                a.f();
              }
              return !i.defaultPrevented;
            }
          };
        }
        function yz() {
          window.history.state && null != window.history.state._depth || window.history.replaceState(A(A({}, window.history.state), {}, {
            _depth: window.history.length - 1
          }), ""), mz = window.history.state._depth;
        }
        yz();
        var bz = /^(?:[a-z0-9]+:)?\/\//i,
          wz = /^\/+|(\/)\/+$/g,
          Sz = "http://sr";
        function Az(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var r = e.replace(wz, "$1");
          return r ? t || /^[?#]/.test(r) ? r : "/" + r : "";
        }
        function Tz(e, t, r) {
          if (!bz.test(t)) {
            var n = Az(e),
              o = r && Az(r),
              i = "";
            return ((i = !o || t.startsWith("/") ? n : 0 !== o.toLowerCase().indexOf(n.toLowerCase()) ? n + o : o) || "/") + Az(t, !i);
          }
        }
        function Cz(e, t) {
          return Az(e).replace(/\/*(\*.*)?$/g, "") + Az(t);
        }
        function Rz(e) {
          var t = {};
          return e.searchParams.forEach(function (e, r) {
            t[r] = e;
          }), t;
        }
        function Iz(e, t, r) {
          var n = C(e.split("/*", 2), 2),
            o = n[0],
            i = n[1],
            a = o.split("/").filter(Boolean),
            s = a.length;
          return function (e) {
            var n = e.split("/").filter(Boolean),
              o = n.length - s;
            if (o < 0 || o > 0 && void 0 === i && !t) return null;
            for (var l = {
                path: s ? "" : "/",
                params: {}
              }, u = function u(e) {
                return void 0 === r ? void 0 : r[e];
              }, c = 0; c < s; c++) {
              var d = a[c],
                h = n[c],
                f = ":" === d[0],
                p = f ? d.slice(1) : d;
              if (f && _z(h, u(p))) l.params[p] = h;else if (f || !_z(h, d)) return null;
              l.path += "/".concat(h);
            }
            if (i) {
              var v = o ? n.slice(-o).join("/") : "";
              if (!_z(v, u(i))) return null;
              l.params[i] = v;
            }
            return l;
          };
        }
        function _z(e, t) {
          var r = function r(t) {
            return 0 === t.localeCompare(e, void 0, {
              sensitivity: "base"
            });
          };
          return void 0 === t || ("string" == typeof t ? r(t) : "function" == typeof t ? t(e) : Array.isArray(t) ? t.some(r) : t instanceof RegExp && t.test(e));
        }
        function Ez(e) {
          var t = new Map(),
            r = Ye();
          return new Proxy({}, {
            get: function get(n, o) {
              return t.has(o) || He(r, function () {
                return t.set(o, Pe(function () {
                  return e()[o];
                }));
              }), t.get(o)();
            },
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
              return {
                enumerable: !0,
                configurable: !0
              };
            },
            ownKeys: function ownKeys() {
              return Reflect.ownKeys(e());
            }
          });
        }
        function kz(e) {
          var t = /(\/?\:[^\/]+)\?/.exec(e);
          if (!t) return [e];
          for (var r = e.slice(0, t.index), n = e.slice(t.index + t[0].length), o = [r, r += t[1]]; t = /^(\/\:[^\/]+)\?/.exec(n);) o.push(r += t[1]), n = n.slice(t[0].length);
          return kz(n).reduce(function (e, t) {
            return [].concat(_toConsumableArray(e), _toConsumableArray(o.map(function (e) {
              return e + t;
            })));
          }, []);
        }
        var Nz,
          Bz = $e(),
          Oz = $e(),
          Fz = function Fz() {
            return function (e, t) {
              if (null == e) throw new Error(t);
              return e;
            }(Ke(Bz), "<A> and 'use' router primitives can be only used inside a Route.");
          },
          Lz = b("u", function () {
            return Fz().navigatorFactory();
          }),
          Pz = function Pz() {
            return Fz().location;
          },
          Mz = b("B", function () {
            return Fz().params;
          });
        function zz(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var r = e.component,
            n = e.load,
            o = e.children,
            i = e.info,
            a = !o || Array.isArray(o) && !o.length,
            s = {
              key: e,
              component: r,
              load: n,
              info: i
            };
          return jz(e.path).reduce(function (r, n) {
            var o,
              i = R(kz(n));
            try {
              for (i.s(); !(o = i.n()).done;) {
                var l = o.value,
                  u = Cz(t, l),
                  c = a ? u : u.split("/*", 1)[0];
                c = c.split("/").map(function (e) {
                  return e.startsWith(":") || e.startsWith("*") ? e : encodeURIComponent(e);
                }).join("/"), r.push(A(A({}, s), {}, {
                  originalPath: n,
                  pattern: c,
                  matcher: Iz(c, !a, e.matchFilters)
                }));
              }
            } catch (d) {
              i.e(d);
            } finally {
              i.f();
            }
            return r;
          }, []);
        }
        function Dz(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return {
            routes: e,
            score: 1e4 * (r = e[e.length - 1], n = C(r.pattern.split("/*", 2), 2), o = n[0], i = n[1], a = o.split("/").filter(Boolean), a.reduce(function (e, t) {
              return e + (t.startsWith(":") ? 2 : 3);
            }, a.length - (void 0 === i ? 0 : 1))) - t,
            matcher: function matcher(t) {
              for (var r = [], n = e.length - 1; n >= 0; n--) {
                var o = e[n],
                  i = o.matcher(t);
                if (!i) return null;
                r.unshift(A(A({}, i), {}, {
                  route: o
                }));
              }
              return r;
            }
          };
          var r, n, o, i, a;
        }
        function jz(e) {
          return Array.isArray(e) ? e : [e];
        }
        function Uz(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
          for (var o = jz(e), i = 0, a = o.length; i < a; i++) {
            var s = o[i];
            if (s && "object" == _typeof(s)) {
              s.hasOwnProperty("path") || (s.path = "");
              var l,
                u = R(zz(s, t));
              try {
                for (u.s(); !(l = u.n()).done;) {
                  var c = l.value;
                  r.push(c);
                  var d = Array.isArray(s.children) && 0 === s.children.length;
                  if (s.children && !d) Uz(s.children, c.pattern, r, n);else {
                    var h = Dz(_toConsumableArray(r), n.length);
                    n.push(h);
                  }
                  r.pop();
                }
              } catch (f) {
                u.e(f);
              } finally {
                u.f();
              }
            }
          }
          return r.length ? n : n.sort(function (e, t) {
            return t.score - e.score;
          });
        }
        function Wz(e, t) {
          for (var r = 0, n = e.length; r < n; r++) {
            var o = e[r].matcher(t);
            if (o) return o;
          }
          return [];
        }
        function Yz(e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var o = C(e.signal, 2),
            i = o[0],
            a = o[1],
            s = e.utils,
            l = void 0 === s ? {} : s,
            u = l.parsePath || function (e) {
              return e;
            },
            c = l.renderPath || function (e) {
              return e;
            },
            d = l.beforeLeave || xz(),
            h = Tz("", n.base || "");
          if (void 0 === h) throw new Error("".concat(h, " is not a valid base path"));
          h && !i().value && a({
            value: h,
            replace: !0,
            scroll: !1
          });
          var f = C(Be(!1), 2),
            p = f[0],
            v = f[1],
            g = function () {
              var e = w(y().mark(function e(t) {
                return y().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return v(!0), e.prev = 1, e.next = 4, Qe(t);
                    case 4:
                      return e.prev = 4, v(!1), e.finish(4);
                    case 7:
                    case "end":
                      return e.stop();
                  }
                }, e, null, [[1,, 4, 7]]);
              }));
              return function (t) {
                return e.apply(this, arguments);
              };
            }(),
            m = C(Be(i().value), 2),
            x = m[0],
            b = m[1],
            S = C(Be(i().state), 2),
            T = S[0],
            R = S[1],
            I = function (e, t) {
              var r = new URL(Sz),
                n = Pe(function (t) {
                  var n = e();
                  try {
                    return new URL(n, r);
                  } catch (o) {
                    return console.error("Invalid path ".concat(n)), t;
                  }
                }, r, {
                  equals: function equals(e, t) {
                    return e.href === t.href;
                  }
                }),
                o = Pe(function () {
                  return n().pathname;
                }),
                i = Pe(function () {
                  return n().search;
                }, !0),
                a = Pe(function () {
                  return n().hash;
                });
              return {
                get pathname() {
                  return o();
                },
                get search() {
                  return i();
                },
                get hash() {
                  return a();
                },
                get state() {
                  return t();
                },
                get key() {
                  return "";
                },
                query: Ez(Ue(i, function () {
                  return Rz(n());
                }))
              };
            }(x, T),
            _ = [],
            E = Be([]),
            k = Pe(function () {
              return Wz(t(), I.pathname);
            }),
            N = Ez(function () {
              for (var e = k(), t = {}, r = 0; r < e.length; r++) Object.assign(t, e[r].params);
              return t;
            }),
            B = {
              pattern: h,
              path: function path() {
                return h;
              },
              outlet: function outlet() {
                return null;
              },
              resolvePath: function resolvePath(e) {
                return Tz(h, e);
              }
            };
          return Fe(function () {
            var e = i(),
              t = e.value,
              r = e.state;
            je(function () {
              t !== x() && g(function () {
                Nz = "native", b(t), R(r), E[1]([]);
              }).then(function () {
                Nz = void 0;
              });
            });
          }), {
            base: B,
            location: I,
            params: N,
            isRouting: p,
            renderPath: c,
            parsePath: u,
            navigatorFactory: function navigatorFactory(e) {
              return e = e || Ke(Oz) || B, function (t, r) {
                return function (e, t, r) {
                  je(function () {
                    if ("number" != typeof t) {
                      var n = A({
                          replace: !1,
                          resolve: !0,
                          scroll: !0
                        }, r),
                        o = n.replace,
                        i = n.resolve,
                        s = n.scroll,
                        u = n.state,
                        c = i ? e.resolvePath(t) : Tz("", t);
                      if (void 0 === c) throw new Error("Path '".concat(t, "' is not a routable path"));
                      if (_.length >= 100) throw new Error("Too many redirects");
                      var h = x();
                      if ((c !== h || u !== T()) && d.confirm(c, r)) {
                        var f = _.push({
                          value: h,
                          replace: o,
                          scroll: s,
                          state: T()
                        });
                        g(function () {
                          Nz = "navigate", b(c), R(u), E[1]([]);
                        }).then(function () {
                          _.length === f && (Nz = void 0, function (e) {
                            var t = _[0];
                            t && (e.value === t.value && e.state === t.state || a(A(A({}, e), {}, {
                              replace: t.replace,
                              scroll: t.scroll
                            })), _.length = 0);
                          }({
                            value: c,
                            state: u
                          }));
                        });
                      }
                    } else t && (l.go ? l.go(t) : console.warn("Router integration does not support relative routing"));
                  });
                }(e, t, r);
              };
            },
            matches: k,
            beforeLeave: d,
            preloadRoute: function preloadRoute(e, n) {
              var o = Wz(t(), e.pathname),
                i = Nz;
              Nz = "preload";
              var a = function a() {
                var t = o[s],
                  i = t.route,
                  a = t.params;
                i.component && i.component.preload && i.component.preload();
                var l = i.load;
                n && l && He(r(), function () {
                  return l({
                    params: a,
                    location: {
                      pathname: e.pathname,
                      search: e.search,
                      hash: e.hash,
                      query: Rz(e),
                      state: null,
                      key: ""
                    },
                    intent: "preload"
                  });
                });
              };
              for (var s in o) a();
              Nz = i;
            },
            singleFlight: void 0 === n.singleFlight || n.singleFlight,
            submissions: E
          };
        }
        var Hz = function Hz(e) {
          return function (t) {
            var r,
              n = t.base,
              o = Xe(function () {
                return t.children;
              }),
              i = Pe(function () {
                return Uz(o(), t.base || "");
              }),
              a = Yz(e, i, function () {
                return r;
              }, {
                base: n,
                singleFlight: t.singleFlight
              });
            return e.create && e.create(a), zn(Bz.Provider, {
              value: a,
              get children() {
                return zn(Qz, {
                  routerState: a,
                  get root() {
                    return t.root;
                  },
                  get load() {
                    return t.rootLoad;
                  },
                  get children() {
                    return [Mn(function () {
                      return (r = Ye()) && null;
                    }), zn($z, {
                      routerState: a,
                      get branches() {
                        return i();
                      }
                    })];
                  }
                });
              }
            });
          };
        };
        function Qz(e) {
          var t = e.routerState.location,
            r = e.routerState.params,
            n = Pe(function () {
              return e.load && je(function () {
                return e.load({
                  params: r,
                  location: t,
                  intent: "preload"
                });
              });
            });
          return zn(wt, {
            get when() {
              return e.root;
            },
            keyed: !0,
            get fallback() {
              return e.children;
            },
            children: function children(o) {
              return zn(o, {
                params: r,
                location: t,
                get data() {
                  return n();
                },
                get children() {
                  return e.children;
                }
              });
            }
          });
        }
        function $z(e) {
          var t,
            r = [],
            n = Pe(Ue(e.routerState.matches, function (o, i, a) {
              for (var s = i && o.length === i.length, l = [], u = function u(t) {
                  var u = i && i[t],
                    c = o[t];
                  a && u && c.route.key === u.route.key ? l[t] = a[t] : (s = !1, r[t] && r[t](), Ne(function (o) {
                    r[t] = o, l[t] = function (e, t, r, n) {
                      var o = e.base,
                        i = e.location,
                        a = e.params,
                        s = n().route,
                        l = s.pattern,
                        u = s.component,
                        c = s.load,
                        d = Pe(function () {
                          return n().path;
                        });
                      u && u.preload && u.preload();
                      var h = c ? c({
                        params: a,
                        location: i,
                        intent: Nz || "initial"
                      }) : void 0;
                      return {
                        parent: t,
                        pattern: l,
                        path: d,
                        outlet: function outlet() {
                          return u ? ht(u, {
                            params: a,
                            location: i,
                            data: h,
                            get children() {
                              return r();
                            }
                          }) : r();
                        },
                        resolvePath: function resolvePath(e) {
                          return Tz(o.path(), e, d());
                        }
                      };
                    }(e.routerState, l[t - 1] || e.routerState.base, Kz(function () {
                      return n()[t + 1];
                    }), function () {
                      return e.routerState.matches()[t];
                    });
                  }));
                }, c = 0, d = o.length; c < d; c++) u(c);
              return r.splice(o.length).forEach(function (e) {
                return e();
              }), a && s ? a : (t = l[0], l);
            }));
          return Kz(function () {
            return n() && t;
          })();
        }
        var Kz = function Kz(e) {
            return function () {
              return zn(wt, {
                get when() {
                  return e();
                },
                keyed: !0,
                children: function children(e) {
                  return zn(Oz.Provider, {
                    value: e,
                    get children() {
                      return e.outlet();
                    }
                  });
                }
              });
            };
          },
          Xz = function Xz(e) {
            var t = Xe(function () {
              return e.children;
            });
            return mt(e, {
              get children() {
                return t();
              }
            });
          };
        function Gz(e, t) {
          var r = function (e) {
            if ("#" === e) return null;
            try {
              return document.querySelector(e);
            } catch (t) {
              return null;
            }
          }("#".concat(e));
          r ? r.scrollIntoView() : t && window.scrollTo(0, 0);
        }
        var Vz = new Map();
        function qz() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/_server";
          return function (n) {
            var o = n.base.path(),
              i = n.navigatorFactory(n.base),
              a = {};
            function s(e) {
              if (!(e.defaultPrevented || 0 !== e.button || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
                var r = e.composedPath().find(function (e) {
                  return e instanceof Node && "A" === e.nodeName.toUpperCase();
                });
                if (r && (!t || r.hasAttribute("link"))) {
                  var n = "http://www.w3.org/2000/svg" === r.namespaceURI,
                    i = n ? r.href.baseVal : r.href;
                  if (!(n ? r.target.baseVal : r.target) && (i || r.hasAttribute("state"))) {
                    var a = (r.getAttribute("rel") || "").split(/\s+/);
                    if (!(r.hasAttribute("download") || a && a.includes("external"))) {
                      var s = n ? new URL(i, document.baseURI) : new URL(i);
                      if (!(s.origin !== window.location.origin || o && s.pathname && !s.pathname.toLowerCase().startsWith(o.toLowerCase()))) return [r, s];
                    }
                  }
                }
              }
            }
            function l(e) {
              var t = s(e);
              if (t) {
                var r = C(t, 2),
                  o = r[0],
                  a = r[1],
                  l = n.parsePath(a.pathname + a.search + a.hash),
                  u = o.getAttribute("state");
                e.preventDefault(), i(l, {
                  resolve: !1,
                  replace: o.hasAttribute("replace"),
                  scroll: !o.hasAttribute("noscroll"),
                  state: u && JSON.parse(u)
                });
              }
            }
            function u(e) {
              var t = s(e);
              if (t) {
                var r = C(t, 2),
                  o = r[0],
                  i = r[1];
                a[i.pathname] || n.preloadRoute(i, "false" !== o.getAttribute("preload"));
              }
            }
            function c(e) {
              var t = s(e);
              if (t) {
                var r = C(t, 2),
                  o = r[0],
                  i = r[1];
                a[i.pathname] || (a[i.pathname] = setTimeout(function () {
                  n.preloadRoute(i, "false" !== o.getAttribute("preload")), delete a[i.pathname];
                }, 200));
              }
            }
            function d(e) {
              var t = s(e);
              if (t) {
                var r = C(t, 2)[1];
                a[r.pathname] && (clearTimeout(a[r.pathname]), delete a[r.pathname]);
              }
            }
            function h(e) {
              if (!e.defaultPrevented) {
                var t = e.submitter && e.submitter.hasAttribute("formaction") ? e.submitter.getAttribute("formaction") : e.target.getAttribute("action");
                if (t) {
                  if (!t.startsWith("https://action/")) {
                    var o = new URL(t, Sz);
                    if (!(t = n.parsePath(o.pathname + o.search)).startsWith(r)) return;
                  }
                  if ("POST" !== e.target.method.toUpperCase()) throw new Error("Only POST forms are supported for Actions");
                  var i = Vz.get(t);
                  if (i) {
                    e.preventDefault();
                    var a = new FormData(e.target);
                    e.submitter && e.submitter.name && a.append(e.submitter.name, e.submitter.value), i.call({
                      r: n,
                      f: e.target
                    }, a);
                  }
                }
              }
            }
            !function (e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
              for (var r = t[vz] || (t[vz] = new Set()), n = 0, o = e.length; n < o; n++) {
                var i = e[n];
                r.has(i) || (r.add(i), t.addEventListener(i, gz));
              }
            }(["click", "submit"]), document.addEventListener("click", l), e && (document.addEventListener("mouseover", c), document.addEventListener("mouseout", d), document.addEventListener("focusin", u), document.addEventListener("touchstart", u)), document.addEventListener("submit", h), We(function () {
              document.removeEventListener("click", l), e && (document.removeEventListener("mouseover", c), document.removeEventListener("mouseout", d), document.removeEventListener("focusin", u), document.removeEventListener("touchstart", u)), document.removeEventListener("submit", h);
            });
          };
        }
        function Zz(e) {
          var t = e.replace(/^.*?#/, "");
          if (!t.startsWith("/")) {
            var r = C(window.location.hash.split("#", 2), 2)[1];
            return "".concat(void 0 === r ? "/" : r, "#").concat(t);
          }
          return t;
        }
        function Jz(e) {
          var t = function t() {
              return window.location.hash.slice(1);
            },
            r = xz();
          return function (e) {
            var t = !1,
              r = function r(e) {
                return "string" == typeof e ? {
                  value: e
                } : e;
              },
              n = function (_ref12, r, n) {
                var _ref13 = _slicedToArray(_ref12, 2),
                  e = _ref13[0],
                  t = _ref13[1];
                return [r ? function () {
                  return r(e());
                } : e, n ? function (e) {
                  return t(n(e));
                } : t];
              }(Be(r(e.get()), {
                equals: function equals(e, t) {
                  return e.value === t.value;
                }
              }), void 0, function (r) {
                return !t && e.set(r), r;
              });
            return e.init && We(e.init(function () {
              var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.get();
              t = !0, n[1](r(o)), t = !1;
            })), Hz({
              signal: n,
              create: e.create,
              utils: e.utils
            });
          }({
            get: t,
            set: function set(_ref14) {
              var e = _ref14.value,
                t = _ref14.replace,
                r = _ref14.scroll,
                n = _ref14.state;
              t ? window.history.replaceState(function (e) {
                return A(A({}, e), {}, {
                  _depth: window.history.state && window.history.state._depth
                });
              }(n), "", "#" + e) : window.location.hash = e;
              var o = e.indexOf("#");
              Gz(o >= 0 ? e.slice(o + 1) : "", r), yz();
            },
            init: function init(e) {
              return n = window, o = "hashchange", i = function (e, t) {
                var r = !1;
                return function () {
                  var n = mz;
                  yz();
                  var o = null == n ? null : mz - n;
                  r ? r = !1 : o && t(o) ? (r = !0, window.history.go(-o)) : e();
                };
              }(e, function (e) {
                return !r.confirm(e && e < 0 ? e : t());
              }), n.addEventListener(o, i), function () {
                return n.removeEventListener(o, i);
              };
              var n, o, i;
            },
            create: qz(e.preload, e.explicitLinks, e.actionBase),
            utils: {
              go: function go(e) {
                return window.history.go(e);
              },
              renderPath: function renderPath(e) {
                return "#".concat(e);
              },
              parsePath: Zz,
              beforeLeave: r
            }
          })(e);
        }
        var eD = We;
        function tD(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ye();
          var r,
            n,
            o = 0;
          return function () {
            return o++, We(function () {
              o--, queueMicrotask(function () {
                !o && n && (n(), n = r = void 0);
              });
            }), n || Ne(function (t) {
              return r = e(n = t);
            }, t), r;
          };
        }
        var rD = tD(function () {
          var e,
            t,
            r,
            n,
            o = C(Be(null), 2),
            i = o[0],
            a = o[1];
          return e = window, t = "keydown", r = function r(e) {
            a(e), setTimeout(function () {
              return a(null);
            });
          }, e.addEventListener(t, r, n), eD(e.removeEventListener.bind(e, t, r, n)), i;
        });
        function nD(e) {
          return "function" == typeof e;
        }
        var oD,
          iD = {
            ArrowLeft: "Left",
            ArrowRight: "Right",
            ArrowUp: "Up",
            ArrowDown: "Down",
            Enter: "Enter",
            l: "Last",
            " ": "Space",
            Backspace: "Back",
            Escape: "Escape"
          },
          aD = C(Be([]), 2),
          sD = aD[0],
          lD = aD[1],
          uD = function uD(e) {
            var t = rD();
            if (e) for (var r = function r() {
                var e,
                  t = C(o[n], 2),
                  r = t[0],
                  i = t[1];
                e = i, Array.isArray(e) ? i.forEach(function (e) {
                  iD[e] = r;
                }) : iD[i] = r;
              }, n = 0, o = Object.entries(e); n < o.length; n++) r();
            return Le(Ue(At, function (e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
              for (var n = e, o = []; n;) n.states.has("focus") || (n.states.add("focus"), nD(n.onFocus) && n.onFocus.call(n, e, t)), o.push(n), n = n.parent;
              return r.forEach(function (r) {
                o.includes(r) || (r.states.remove("focus"), nD(r.onBlur) && r.onBlur.call(r, e, t));
              }), lD(o), o;
            }, {
              defer: !0
            })), Le(function () {
              var e = t();
              if (e) {
                var r = iD[e.key] || iD[e.keyCode];
                je(function () {
                  var t,
                    n = void 0,
                    o = R(sD());
                  try {
                    for (o.s(); !(t = o.n()).done;) {
                      var i = t.value;
                      if (n = n || i, r) {
                        var a = i["on".concat(r)];
                        if (nD(a) && !0 === a.call(i, e, i, n)) break;
                      } else console.log("Unhandled key event: ".concat(e.key || e.keyCode));
                      if (nD(i.onKeyPress) && !0 === i.onKeyPress.call(i, e, r, i, n)) break;
                    }
                  } catch (s) {
                    o.e(s);
                  } finally {
                    o.f();
                  }
                  return !1;
                });
              }
            }), sD;
          };
        function cD(e, t) {
          var r,
            n,
            o,
            i,
            a = t();
          if (Array.isArray(a)) {
            if (2 === a.length) r = i = a[0], n = o = a[1];else if (3 === a.length) r = a[0], n = o = a[1], i = a[2];else {
              var s = C(a, 4);
              r = s[0], o = s[1], i = s[2], n = s[3];
            }
          } else r = o = i = n = a;
          e.onBeforeLayout = function (t, a) {
            if (a) {
              e.width = e.children.reduce(function (e, t) {
                return e + (t.width || 0);
              }, 0) + n + o;
              var s = e.children[0];
              s && (s.x = n, s.marginLeft = n);
              var l = 0;
              return e.children.forEach(function (e) {
                e.y = r, e.marginTop = r, l = Math.max(l, e.height || 0);
              }), e.height = l + r + i, !0;
            }
          };
        }
        function dD(e) {
          return new Promise(function (t) {
            setTimeout(t, e);
          });
        }
        function hD(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en-US";
          var n = window.speechSynthesis;
          return new Promise(function (o, i) {
            var a = new SpeechSynthesisUtterance(e);
            a.lang = r, a.onend = function () {
              o();
            }, a.onerror = function (e) {
              i(e);
            }, t.push(a), n.speak(a);
          });
        }
        function fD(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var n = window.speechSynthesis,
            o = function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var t,
                r = [];
              for (t = 0; t < e.length; t++) {
                var n = e[t];
                if ("string" != typeof n || n.includes("PAUSE-")) break;
                r.push(e[t]);
              }
              return [r.join(",\b ")].concat(e.slice(t));
            }(Array.isArray(e) ? e : [e]),
            i = [],
            a = [],
            s = !0;
          return {
            series: w(y().mark(function e() {
              var r, n, l, u, c, d;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.prev = 0;
                  case 1:
                    if (!s || !o.length) {
                      e.next = 62;
                      break;
                    }
                    return e.next = 4, Promise.resolve(o.shift());
                  case 4:
                    if (r = e.sent, s) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("break", 62);
                  case 9:
                    if ("string" != typeof r || !r.includes("PAUSE-")) {
                      e.next = 16;
                      break;
                    }
                    return n = 1e3 * Number(r.split("PAUSE-")[1]), isNaN(n) && (n = 0), e.next = 14, dD(n);
                  case 14:
                    e.next = 60;
                    break;
                  case 16:
                    if ("string" != typeof r || !r.length) {
                      e.next = 48;
                      break;
                    }
                    u = l = 3;
                  case 19:
                    if (!(s && u > 0)) {
                      e.next = 46;
                      break;
                    }
                    return e.prev = 20, e.next = 23, hD(r, a, t);
                  case 23:
                    u = 0, e.next = 44;
                    break;
                  case 26:
                    if (e.prev = 26, e.t0 = e["catch"](20), !(e.t0 instanceof SpeechSynthesisErrorEvent)) {
                      e.next = 43;
                      break;
                    }
                    if ("network" !== e.t0.error) {
                      e.next = 36;
                      break;
                    }
                    return u--, console.warn("Speech synthesis network error. Retries left: ".concat(u)), e.next = 34, dD(500 * (l - u));
                  case 34:
                    e.next = 41;
                    break;
                  case 36:
                    if ("canceled" !== e.t0.error && "interrupted" !== e.t0.error) {
                      e.next = 40;
                      break;
                    }
                    u = 0, e.next = 41;
                    break;
                  case 40:
                    throw new Error("SpeechSynthesisErrorEvent: ".concat(e.t0.error));
                  case 41:
                    e.next = 44;
                    break;
                  case 43:
                    throw e.t0;
                  case 44:
                    e.next = 19;
                    break;
                  case 46:
                    e.next = 60;
                    break;
                  case 48:
                    if ("function" != typeof r) {
                      e.next = 55;
                      break;
                    }
                    return c = fD(r(), t, !1), i.push(c), e.next = 53, c.series;
                  case 53:
                    e.next = 60;
                    break;
                  case 55:
                    if (!Array.isArray(r)) {
                      e.next = 60;
                      break;
                    }
                    return d = fD(r, t, !1), i.push(d), e.next = 60, d.series;
                  case 60:
                    e.next = 1;
                    break;
                  case 62:
                    return e.prev = 62, s = !1, e.finish(62);
                  case 65:
                  case "end":
                    return e.stop();
                }
              }, e, null, [[0,, 62, 65], [20, 26]]);
            }))(),
            get active() {
              return s;
            },
            append: function append(e) {
              o.push(e);
            },
            cancel: function cancel() {
              s && (r && n.cancel(), i.forEach(function (e) {
                e.cancel();
              }), s = !1);
            }
          };
        }
        function pD(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
          return oD && oD.cancel(), oD = fD(e, t);
        }
        var vD,
          gD,
          mD = [],
          xD = !1;
        function yD(e, t) {
          var r,
            n = function (e, t) {
              var r,
                n = function n() {
                  return clearTimeout(r);
                };
              return Ye() && We(n), Object.assign(function () {
                for (var _len16 = arguments.length, o = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                  o[_key16] = arguments[_key16];
                }
                void 0 !== r && n(), r = setTimeout(function () {
                  return e.apply(void 0, o);
                }, t);
              }, {
                clear: n
              });
            }(e, t),
            o = function o(e) {
              r = e, n(e);
            };
          return o.flush = function () {
            n.clear(), e(r);
          }, o.clear = n.clear, o;
        }
        function bD(e) {
          return e.id || e.name;
        }
        function wD() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          if (SD.onFocusChange && SD.enabled) {
            var t = e.every(function (e) {
                return !e.loading;
              }),
              r = e.filter(function (e) {
                return !mD.includes(e);
              });
            if (vD(), t || !SD.onFocusChange) {
              mD = e.slice(0);
              var n = [],
                o = r.reduce(function (e, t) {
                  return t.announce ? (e.push([bD(t), "Announce", t.announce]), n.push(t.announce)) : t.title ? (e.push([bD(t), "Title", t.title]), n.push(t.title)) : e.push([bD(t), "No Announce", ""]), e;
                }, []);
              return r.reverse().reduce(function (e, t) {
                return t.announceContext ? (e.push([bD(t), "Context", t.announceContext]), n.push(t.announceContext)) : e.push([bD(t), "No Context", ""]), e;
              }, o), SD.debug && console.table(o), n.length ? SD.speak(n.reduce(function (e, t) {
                return e.concat(t);
              }, [])) : void 0;
            }
            SD.onFocusChange([]);
          }
        }
        var SD = {
          debug: !1,
          enabled: !0,
          cancel: function cancel() {
            gD && gD.cancel();
          },
          clearPrevFocus: function clearPrevFocus() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            mD = mD.slice(0, e), vD();
          },
          speak: function speak(e) {
            var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref15$append = _ref15.append,
              t = _ref15$append === void 0 ? !1 : _ref15$append,
              _ref15$notification = _ref15.notification,
              r = _ref15$notification === void 0 ? !1 : _ref15$notification;
            var n;
            SD.onFocusChange && SD.enabled && (SD.onFocusChange.flush(), t && gD && gD.active ? gD.append(e) : (SD.cancel(), function (e) {
              if (!xD) gD = pD(e);
            }(e)), r && (xD = !0, null === (n = gD) || void 0 === n || n.series["finally"](function () {
              xD = !1, SD.refresh();
            })["catch"](console.error)));
            return gD;
          },
          refresh: function refresh() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            SD.clearPrevFocus(e), SD.onFocusChange && SD.onFocusChange(je(function () {
              return sD();
            }));
          },
          setupTimers: function setupTimers() {
            var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref16$focusDebounce = _ref16.focusDebounce,
              e = _ref16$focusDebounce === void 0 ? 400 : _ref16$focusDebounce,
              _ref16$focusChangeTim = _ref16.focusChangeTimeout,
              t = _ref16$focusChangeTim === void 0 ? 3e5 : _ref16$focusChangeTim;
            SD.onFocusChange = yD(wD, e), vD = yD(function () {
              mD = [];
            }, t);
          }
        };
        var AD = C(Be(""), 2),
          TD = AD[0],
          CD = AD[1];
        b("s", CD);
        var RD,
          ID,
          _D,
          ED,
          kD,
          ND,
          BD,
          OD,
          FD,
          LD,
          PD,
          MD,
          zD,
          DD,
          jD,
          UD,
          WD,
          YD,
          HD,
          QD = b("t", {
            name: "Base Lightning TV",
            alpha: {
              primary: 1,
              secondary: .7,
              tertiary: .1,
              inactive: .5,
              full: 1,
              none: 0,
              alpha1: .1,
              alpha2: .3,
              alpha3: .5,
              alpha4: .7,
              alpha5: .9,
              alpha6: .95
            },
            animation: {
              duration: {
                none: 0,
                xfast: 100,
                fast: 250,
                normal: 500,
                slow: 750,
                xslow: 900
              },
              delay: {
                none: 0,
                xfast: 10,
                fast: 25,
                normal: 50,
                slow: 75,
                xslow: 90
              },
              expressive: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              expressiveEntrance: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              expressiveExit: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              standard: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              standardEntrance: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              standardExit: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              utility: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              utilityEntrance: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              },
              utilityExit: {
                timingFunction: "cubic-bezier(0, 0, 1, 1)",
                delay: 0,
                duration: .25
              }
            },
            asset: {
              arrowLeft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==",
              arrowRight: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=",
              backspaceOutline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC",
              check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=="
            },
            color: {
              palette: {},
              white: "0xffffffff",
              black: "0x000000ff",
              grey: "0x929096ff",
              red: "0xe74c3cff",
              orange: "0xdc7633ff",
              yellow: "0xf7dc6fff",
              green: "0x2ecc71ff",
              blue: "0x93a9fdff",
              purple: "0x663399ff",
              overlay: "0x181819b3",
              material: "0x181819ff",
              materialNeutral: "0x181819ff",
              materialNeutralElevated: "0x373639ff",
              materialInverse: "0xf8f7faff",
              materialInverseElevated: "0xffffffff",
              materialBrand: "0x000033ff",
              materialBrandElevated: "0x242a65ff",
              textNeutral: "0xf8f7faff",
              textNeutralSecondary: "0xf8f7fab3",
              textNeutralTertiary: "0xf8f7fa1a",
              textNeutralDisabled: "0xf8f7fa80",
              textInverse: "0x181819ff",
              textInverseSecondary: "0x181819b3",
              textInverseTertiary: "0x1818191a",
              textInverseDisabled: "0x18181980",
              textBrand: "0x93a9fdff",
              textBrandSecondary: "0x93a9fdb3",
              textBrandTertiary: "0x93a9fd1a",
              textBrandDisabled: "0x93a9fd80",
              textPositive: "0x2ecc71ff",
              textNegative: "0xe74c3cff",
              textInfo: "0x93a9fdff",
              textCaution: "0xdc7633ff",
              fillTransparent: "0xffffff0",
              fillNeutral: "0xf8f7faff",
              fillNeutralSecondary: "0xf8f7fab3",
              fillNeutralTertiary: "0xf8f7fa1a",
              fillNeutralDisabled: "0xf8f7fa80",
              fillInverse: "0x181819ff",
              fillInverseSecondary: "0x181819b3",
              fillInverseTertiary: "0x1818191a",
              fillInverseDisabled: "0x18181980",
              fillBrand: "0x93a9fdff",
              fillBrandSecondary: "0x93a9fdb3",
              fillBrandTertiary: "0x93a9fd1a",
              fillBrandDisabled: "0x93a9fd80",
              fillPositive: "0x2ecc71ff",
              fillNegative: "0xe74c3cff",
              fillInfo: "0x93a9fdff",
              fillCaution: "0xdc7633ff",
              strokeNeutral: "0xf8f7faff",
              strokeNeutralSecondary: "0xf8f7fab3",
              strokeNeutralTertiary: "0xf8f7fa1a",
              strokeNeutralDisabled: "0xf8f7fa80",
              strokeInverse: "0x181819ff",
              strokeInverseSecondary: "0x181819b3",
              strokeInverseTertiary: "0x1818191a",
              strokeInverseDisabled: "0x18181980",
              strokeBrand: "0x93a9fdff",
              strokeBrandSecondary: "0x93a9fdb3",
              strokeBrandTertiary: "0x93a9fd1a",
              strokeBrandDisabled: "0x93a9fd80",
              strokePositive: "0x2ecc71ff",
              strokeNegative: "0xe74c3cff",
              strokeInfo: "0x93a9fdff",
              strokeCaution: "0xdc7633ff",
              interactiveNeutral: "0xffffff1a",
              interactiveNeutralFocus: "0xffffffff",
              interactiveNeutralFocusSoft: "0xffffff1a",
              interactiveInverse: "0x48474b1a",
              interactiveInverseFocus: "0x48474bff",
              interactiveInverseFocusSoft: "0x48474b1a",
              interactiveBrand: "0xbecffe1a",
              interactiveBrandFocus: "0xbecffeff",
              interactiveBrandFocusSoft: "0xbecffe1a",
              shadowNeutral: "0x000000b3",
              shadowNeutralFocus: "0x000000b3",
              shadowNeutralFocusSoft: "0x000000b3",
              shadowNeutralText: "0x000000ff",
              shadowInverse: "0x000000b3",
              shadowInverseFocus: "0x000000b3",
              shadowInverseFocusSoft: "0x000000b3",
              shadowInverseText: "0x000000ff",
              shadowBrand: "0x000000b3",
              shadowBrandFocus: "0x000000b3",
              shadowBrandFocusSoft: "0x000000b3",
              shadowBrandText: "0x000000ff"
            },
            font: [],
            layout: {
              columnCount: 10,
              focusScale: 1.2,
              gutterX: 20,
              gutterY: 20,
              marginX: 150,
              marginY: 150,
              safe: 50,
              screenW: 1920,
              screenH: 1080
            },
            radius: {
              none: 0,
              xs: 2,
              sm: 4,
              md: 8,
              lg: 16,
              xl: 24
            },
            spacer: {
              none: 0,
              xxs: 2,
              xs: 4,
              sm: 8,
              md: 10,
              lg: 20,
              xl: 30,
              xxl: 40,
              xxxl: 50
            },
            stroke: {
              none: 0,
              sm: 2,
              md: 4,
              lg: 6,
              xl: 8
            },
            typography: {
              display1: {
                fontFamily: "Arial",
                fontSize: 75,
                lineHeight: 85,
                fontWeight: 500,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              display2: {
                fontFamily: "Arial",
                fontSize: 50,
                lineHeight: 60,
                fontWeight: 500,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              display3: {
                fontFamily: "Arial",
                fontSize: 56,
                fontWeight: 400,
                lineHeight: 68,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              display4: {
                fontFamily: "Arial",
                fontSize: 48,
                fontWeight: 400,
                lineHeight: 64,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              headline1: {
                fontFamily: "Arial",
                fontSize: 35,
                fontWeight: 500,
                lineHeight: 48,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              headline2: {
                fontFamily: "Arial",
                fontSize: 30,
                fontWeight: 500,
                lineHeight: 40,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              headline3: {
                fontFamily: "Arial",
                fontSize: 25,
                fontWeight: 500,
                lineHeight: 36,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              body1: {
                fontFamily: "Arial",
                fontSize: 25,
                fontWeight: 300,
                lineHeight: 40,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              body2: {
                fontFamily: "Arial",
                fontSize: 22,
                fontWeight: 300,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              body3: {
                fontFamily: "Arial",
                fontSize: 20,
                fontWeight: 300,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              button1: {
                fontFamily: "Arial",
                fontSize: 25,
                fontWeight: 500,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              button2: {
                fontFamily: "Arial",
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              callout1: {
                fontFamily: "Arial",
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              caption1: {
                fontFamily: "Arial",
                fontSize: 15,
                fontWeight: 500,
                lineHeight: 24,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              tag1: {
                fontFamily: "Arial",
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 24,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              footnote1: {
                fontFamily: "Arial",
                fontSize: 22,
                fontWeight: 300,
                lineHeight: 30,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              subtitle1: {
                fontFamily: "Arial",
                fontSize: 32,
                fontWeight: 400,
                lineHeight: 36,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              subtitle2: {
                fontFamily: "Arial",
                fontSize: 28,
                fontWeight: 500,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              },
              navigation: {
                fontFamily: "Arial",
                fontSize: 28,
                fontWeight: 400,
                lineHeight: 32,
                verticalAlign: "middle",
                textBaseline: "bottom"
              }
            },
            componentConfig: {
              Keyboard: {
                base: {
                  keyProps: {
                    "delete": {
                      title: null,
                      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
                    }
                  }
                }
              }
            }
          });
        function $D() {
          var e,
            t,
            r,
            n = 0,
            o = {
              duration: 750,
              easing: "ease-in-out"
            },
            i = {
              alpha: 1,
              color: 4294967295
            };
          return Le(Ue(TD, function (i) {
            !function (i) {
              i.startsWith("#") ? (e.color = Qn(i), e.src = "", e.alpha = 1, n = 1, t.alpha = 0, r.alpha = 0) : (e.color = 4294967295, r.alpha = 1, 0 === n ? (e.src = i, n = 1) : 1 === n ? (t.src = i, n = 2, t.alpha = 0, t.animate({
                alpha: 1
              }, o).start(), e.animate({
                alpha: 0
              }, o).start()) : 2 === n && (e.src = i, n = 1, e.alpha = 0, e.animate({
                alpha: 1
              }, o).start(), t.animate({
                alpha: 0
              }, o).start()));
            }(i);
          }, {
            defer: !0
          })), zn(En, {
            width: 1920,
            height: 1080,
            zIndex: -5,
            get children() {
              return [zn(En, {
                ref: function ref(t) {
                  "function" == typeof e ? e(t) : e = t;
                },
                style: i
              }), zn(En, {
                ref: function ref(e) {
                  "function" == typeof t ? t(e) : t = e;
                },
                style: i,
                alpha: 0
              }), zn(En, {
                ref: function ref(e) {
                  "function" == typeof r ? r(e) : r = e;
                },
                src: "./assets/hero-mask-inverted.png",
                get color() {
                  return Qn(QD.color.materialBrand);
                },
                width: 1920,
                height: 1080
              })];
            }
          });
        }
        function KD(e) {
          if (!e || !e[Symbol.iterator]) throw new Error("objectFromEntries requires a single iterable argument");
          var t,
            r = {},
            n = R(e);
          try {
            for (n.s(); !(t = n.n()).done;) {
              var o = C(t.value, 2),
                i = o[0],
                a = o[1];
              r[i] = a;
            }
          } catch (s) {
            n.e(s);
          } finally {
            n.f();
          }
          return r;
        }
        var XD = ["focus", "disabled"],
          GD = ["brand", "inverse", "neutral"];
        function VD(_ref17) {
          var e = _ref17.themeKeys,
            t = _ref17.base,
            r = _ref17.modes,
            n = _ref17.tones,
            o = _ref17.themeStyles,
            _ref17$modeKeys = _ref17.modeKeys,
            i = _ref17$modeKeys === void 0 ? XD : _ref17$modeKeys,
            _ref17$toneKeys = _ref17.toneKeys,
            a = _ref17$toneKeys === void 0 ? GD : _ref17$toneKeys;
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var l = function l(t) {
            return KD(Object.entries(e).filter(function (_ref18) {
              var _ref19 = _slicedToArray(_ref18, 2),
                e = _ref19[0],
                r = _ref19[1];
              return t[r];
            }).map(function (_ref20) {
              var _ref21 = _slicedToArray(_ref20, 2),
                e = _ref21[0],
                r = _ref21[1];
              return [e, t[r]];
            }));
          };
          return function (e, t, r) {
            var n,
              u = (n = o, KD(Object.entries(n).map(function (_ref22) {
                var _ref23 = _slicedToArray(_ref22, 2),
                  e = _ref23[0],
                  t = _ref23[1];
                var r = l(t);
                return Object.entries(t).filter(function (_ref24) {
                  var _ref25 = _slicedToArray(_ref24, 2),
                    e = _ref25[0],
                    t = _ref25[1];
                  return i.includes(e);
                }).forEach(function (_ref26) {
                  var _ref27 = _slicedToArray(_ref26, 2),
                    e = _ref27[0],
                    t = _ref27[1];
                  r[e] = l(t);
                }), [e, r];
              })));
            s && console.log(u);
            var c = function (e, t) {
              return A(A({}, e), t.base);
            }(e, u);
            s && console.log(c);
            var d = function (e, t) {
              return KD(i.map(function (r) {
                return [r, A(A({}, null == e ? void 0 : e[r]), null == t ? void 0 : t[r])];
              }));
            }(t, u);
            s && console.log(d);
            var h = function (e, t, r) {
              return KD(a.map(function (n) {
                var o,
                  a,
                  s = {};
                return new Set([].concat.apply([], [null !== (o = null == e ? void 0 : e[n]) && void 0 !== o ? o : {}, null !== (a = null == t ? void 0 : t[n]) && void 0 !== a ? a : {}].map(Object.keys))).forEach(function (r) {
                  var o, a, l;
                  i.includes(r) || (s[r] = null !== (l = null == (o = null == t ? void 0 : t[n]) ? void 0 : o[r]) && void 0 !== l ? l : null == (a = null == e ? void 0 : e[n]) ? void 0 : a[r]);
                }), i.forEach(function (o) {
                  var i, a;
                  s[o] = A(A(A({}, r[o]), null == (i = null == e ? void 0 : e[n]) ? void 0 : i[o]), null == (a = null == t ? void 0 : t[n]) ? void 0 : a[o]);
                }), [n, s];
              }));
            }(r, u, d);
            return s && console.log(h), {
              base: A(A({}, c), d),
              tones: h
            };
          }(t, r, n);
        }
        function qD() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return function (t, r) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var o = arguments.length > 3 ? arguments[3] : undefined;
            var i, a, s;
            if (0 !== t.children.length) {
              var l = "row" === t.flexDirection ? "width" : "height",
                u = "row" === t.flexDirection ? "x" : "y",
                c = t.gap || 0,
                d = t.scroll || "auto",
                h = function (e) {
                  var t, r;
                  if ("row" === e.flexDirection) {
                    var n, o, i;
                    t = {
                      position: null !== (n = e.children[e.children.length - 1].x) && void 0 !== n ? n : 0,
                      size: null !== (o = e.children[e.children.length - 1].width) && void 0 !== o ? o : 0
                    }, r = null !== (i = e.width) && void 0 !== i ? i : 0;
                  } else {
                    var a, s, l;
                    t = {
                      position: null !== (a = e.children[e.children.length - 1].y) && void 0 !== a ? a : 0,
                      size: null !== (s = e.children[e.children.length - 1].height) && void 0 !== s ? s : 0
                    }, r = null !== (l = e.height) && void 0 !== l ? l : 0;
                  }
                  return [t, r];
                }(t),
                f = C(h, 2),
                p = f[0],
                v = f[1],
                g = null !== (i = t[u]) && void 0 !== i ? i : 0,
                m = null !== (a = null == r ? void 0 : r[u]) && void 0 !== a ? a : 0,
                x = null !== (s = null == r ? void 0 : r[l]) && void 0 !== s ? s : 0,
                y = void 0 === o ? "none" : n > o ? "positive" : "negative",
                b = g;
              if ("auto" === d) null != t.scrollIndex && t.scrollIndex >= 0 ? t.selected >= t.scrollIndex && (b = "positive" === y ? g - x - c : g + x + c) : (Math.abs(g) + v < p.position + p.size || m < Math.abs(g)) && (b = -m + e);else if ("always" === d || "edge" === d && "negative" === y && Math.abs(g) > m) b = -m + e;else if ("edge" === d && "positive" === y && Math.abs(g) + v < m + x) b = g - x - c;else if ("edge" === d && "none" === y) {
                for (var w = 0; w < t.children.length && Math.abs(g) + v < m + x;) {
                  var S;
                  g -= (null !== (S = t.children[w++][l]) && void 0 !== S ? S : 0) + c;
                }
                b = g;
              }
              "x" === u && t.x !== b ? t.x = b : "y" === u && t.y !== b && (t.y = b);
            }
          };
        }
        function ZD() {
          for (var _len17 = arguments.length, e = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
            e[_key17] = arguments[_key17];
          }
          var t = e.filter(function (e) {
            return "function" == typeof e;
          });
          if (0 !== t.length) return 1 === t.length ? t[0] : function () {
            var r,
              n,
              o = R(t);
            try {
              for (var _len18 = arguments.length, e = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
                e[_key18] = arguments[_key18];
              }
              for (o.s(); !(n = o.n()).done;) {
                if (!0 === (r = n.value.apply(this, e))) return r;
              }
            } catch (i) {
              o.e(i);
            } finally {
              o.f();
            }
            return r;
          };
        }
        function JD() {
          if (!this || void 0 === this.selected || 0 === this.children.length) return !1;
          for (var e = this.children[this.selected]; null == e ? void 0 : e.skipFocus;) this.selected++, e = this.children[this.selected];
          return e instanceof wn && (e.setFocus(), !0);
        }
        function ej(e) {
          return function () {
            var t,
              r,
              n,
              o = this.children.length,
              i = this.wrap,
              a = this.selected || 0;
            if (0 === o) return !1;
            if ("right" === e || "down" === e) {
              do {
                if (this.selected = (this.selected || 0) % o + 1, this.selected >= o) {
                  if (!i) {
                    this.selected = void 0;
                    break;
                  }
                  this.selected = 0;
                }
              } while (null == (t = this.children[this.selected]) ? void 0 : t.skipFocus);
            } else if ("left" === e || "up" === e) do {
              if (this.selected = (this.selected || 0) % o - 1, this.selected < 0) {
                if (!i) {
                  this.selected = void 0;
                  break;
                }
                this.selected = o - 1;
              }
            } while (null == (r = this.children[this.selected]) ? void 0 : r.skipFocus);
            if (void 0 === this.selected && (this.selected = a, null == (n = this.children[this.selected]) ? void 0 : n.states.has("focus"))) return !1;
            var s = this.children[this.selected];
            if (this.onSelectedChanged && this.onSelectedChanged.call(this, this, s, this.selected, a), this.plinko && void 0 !== a) {
              var l = this.children[a].selected || 0;
              s.selected = l < s.children.length ? l : s.children.length - 1;
            }
            return s.setFocus(), !0;
          };
        }
        var tj = (null == (RD = QD) ? void 0 : RD.componentConfig).Artwork,
          rj = void 0 === tj ? {
            styles: {}
          } : tj,
          nj = (rj.defaultTone, x(rj, e));
        VD({
          themeKeys: {
            fillColor: "fillColor",
            scale: "imageScale",
            pivotX: "imageScalePivotX",
            pivotY: "imageScalePivotY"
          },
          base: {
            fallbackSrc: void 0,
            fillColor: QD.color.overlay,
            gradientColor: QD.color.material,
            pivotX: .5,
            pivotY: .5,
            scale: void 0,
            borderRadius: QD.radius.md
          },
          themeStyles: nj
        });
        var oj = (null == (ID = QD) ? void 0 : ID.componentConfig).Badge,
          ij = void 0 === oj ? {
            styles: {}
          } : oj,
          aj = (ij.defaultTone, x(ij, t)),
          sj = {
            themeKeys: {
              color: "backgroundColor"
            },
            base: {
              color: QD.color.fillInverseSecondary,
              borderRadius: QD.radius.sm,
              border: {
                color: QD.color.strokeInverse,
                width: QD.stroke.sm
              },
              display: "flex",
              justifyContent: "spaceEvenly",
              padding: [QD.spacer.md - QD.stroke.sm, QD.spacer.xs + QD.stroke.sm, QD.spacer.md + QD.stroke.sm, QD.spacer.md + QD.stroke.sm]
            },
            tones: {
              inverse: {
                color: QD.color.fillNeutralSecondary,
                borderRadius: QD.radius.sm,
                border: {
                  color: QD.color.strokeInverseSecondary,
                  width: QD.stroke.sm
                }
              },
              brand: {
                color: QD.color.fillBrand,
                borderRadius: QD.radius.sm,
                border: {
                  color: QD.color.strokeInverseSecondary,
                  width: QD.stroke.sm
                }
              }
            },
            themeStyles: aj
          },
          lj = {
            themeKeys: {
              color: "textColor"
            },
            base: A(A({}, QD.typography.tag1), {}, {
              color: QD.color.textNeutral
            }),
            tones: {
              inverse: {
                color: QD.color.textInverse
              },
              brand: {
                color: QD.color.textNeutral
              }
            },
            themeStyles: aj
          },
          uj = {
            themeKeys: {
              color: "iconColor"
            },
            base: {
              color: QD.color.textNeutral
            },
            tones: {
              inverse: {
                color: QD.color.textInverse
              },
              brand: {
                color: QD.color.textNeutral
              }
            },
            themeStyles: aj
          };
        VD(sj), VD(uj), VD(lj);
        var cj = (null == (_D = QD) ? void 0 : _D.componentConfig).Button,
          dj = void 0 === cj ? {
            styles: {}
          } : cj,
          hj = dj.defaultTone,
          fj = x(dj, r),
          pj = (null == (ED = QD) ? void 0 : ED.componentConfig).Surface,
          vj = void 0 === pj ? {
            styles: {}
          } : pj,
          gj = vj.surfaceDefaultTone,
          mj = x(vj, n),
          xj = {
            themeKeys: {
              textAlign: "textAlign",
              borderRadius: "radius",
              color: "backgroundColor",
              justifyContent: "justifyContent"
            },
            base: {
              height: QD.typography.button1.lineHeight + 2 * QD.spacer.xl,
              display: "flex",
              padding: [QD.spacer.xxxl, QD.spacer.xl],
              color: QD.color.interactiveNeutral,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: QD.radius.sm,
              contentColor: QD.color.fillNeutral
            },
            modes: {
              focus: {
                color: QD.color.interactiveNeutralFocus,
                contentColor: QD.color.fillInverse
              },
              disabled: {
                color: QD.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: QD.color.interactiveInverse
              },
              brand: {
                color: QD.color.interactiveBrand,
                focus: {
                  color: QD.color.fillNeutral
                }
              }
            },
            themeStyles: A(A({}, mj), fj)
          },
          yj = {
            themeKeys: {
              color: "contentColor"
            },
            base: {
              color: QD.color.textNeutral
            },
            modes: {
              focus: {
                color: QD.color.textInverse
              },
              disabled: {
                color: QD.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: QD.color.fillNeutral
              },
              brand: {
                color: QD.color.fillBrand,
                focus: {
                  color: QD.color.fillBrand
                }
              }
            },
            themeStyles: A(A({}, mj), fj)
          },
          bj = {
            themeKeys: {
              color: "textColor"
            },
            base: A({
              textAlign: "left",
              color: QD.color.textNeutral
            }, QD.typography.button1),
            modes: {
              focus: {
                color: QD.color.textInverse
              },
              disabled: {
                color: QD.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: QD.color.fillNeutral
              },
              brand: {
                color: QD.color.fillBrand,
                focus: {
                  color: QD.color.fillBrand
                }
              }
            },
            themeStyles: A(A({}, mj), fj)
          },
          wj = {
            tone: hj || gj || "neutral",
            Container: VD(xj),
            Content: VD(yj),
            Text: VD(bj)
          },
          Sj = (b("E", function (e) {
            return zn(En, Yn(e, {
              get style() {
                var t, r;
                return [e.style, null == (r = wj.Container.tones) ? void 0 : r[null !== (t = e.tone) && void 0 !== t ? t : wj.tone], wj.Container.base];
              },
              forwardStates: !0,
              get children() {
                return zn(_n, {
                  get style() {
                    var t;
                    return [wj.Text.tones[null !== (t = e.tone) && void 0 !== t ? t : wj.tone], wj.Text.base];
                  },
                  get children() {
                    return e.children;
                  }
                });
              }
            }));
          }), (null == (kD = QD) ? void 0 : kD.componentConfig).Checkbox),
          Aj = void 0 === Sj ? {
            styles: {}
          } : Sj,
          Tj = (Aj.defaultTone, x(Aj, o)),
          Cj = QD.stroke.sm,
          Rj = QD.spacer.xxl,
          Ij = {
            themeKeys: {
              color: "color",
              borderRadius: "borderRadius",
              border: "border",
              justifyContent: "justifyContent"
            },
            base: {
              width: Rj,
              height: Rj,
              display: "flex",
              justifyContent: "center",
              color: QD.color.fillNeutral,
              alignItems: "center",
              borderRadius: Rj / 4,
              border: {
                color: QD.color.strokeInverse,
                width: Cj
              }
            },
            modes: {
              disabled: {
                alpha: QD.alpha.inactive
              }
            },
            tones: {
              brand: {
                borderRadius: Rj / 4,
                border: {
                  color: QD.color.strokeNeutralSecondary,
                  width: Cj
                },
                color: QD.color.fillNeutralSecondary,
                checked: {
                  borderRadius: Rj / 4,
                  border: {
                    color: QD.color.strokeNeutralSecondary,
                    width: Cj
                  },
                  color: QD.color.fillBrand
                }
              },
              neutral: {
                borderRadius: Rj / 4,
                border: {
                  color: QD.color.strokeNeutralSecondary,
                  width: Cj
                },
                color: QD.color.fillInverseSecondary,
                checked: {
                  borderRadius: Rj / 4,
                  border: {
                    color: QD.color.strokeNeutralSecondary,
                    width: Cj
                  },
                  color: QD.color.fillNeutral
                }
              },
              inverse: {
                borderRadius: Rj / 4,
                border: {
                  color: QD.color.strokeInverseSecondary,
                  width: Cj
                },
                color: QD.color.fillNeutralSecondary,
                checked: {
                  borderRadius: Rj / 4,
                  border: {
                    color: QD.color.strokeInverseSecondary,
                    width: Cj
                  },
                  color: QD.color.fillInverse
                }
              }
            },
            modeKeys: ["focus", "disabled", "checked"],
            themeStyles: Tj
          },
          _j = {
            themeKeys: {
              color: "color"
            },
            base: {
              width: QD.spacer.lg,
              height: QD.spacer.lg,
              src: QD.asset.check
            },
            tones: {
              neutral: {
                color: QD.color.fillInverse
              },
              inverse: {
                color: QD.color.fillNeutral
              },
              brand: {
                color: QD.color.fillInverse
              }
            },
            themeStyles: Tj
          };
        VD(Ij), VD(_j);
        var Ej = (null == (ND = QD) ? void 0 : ND.componentConfig).Icon,
          kj = void 0 === Ej ? {
            styles: {}
          } : Ej,
          Nj = (kj.defaultTone, x(kj, i));
        VD({
          themeKeys: {
            color: "color"
          },
          base: {
            width: 100,
            height: 100,
            color: QD.color.fillInverse
          },
          tones: {
            inverse: {
              color: QD.color.fillInverse
            },
            brand: {
              color: QD.color.fillBrand
            }
          },
          themeStyles: Nj
        });
        var Bj = (null == (BD = QD) ? void 0 : BD.componentConfig).Column,
          Oj = void 0 === Bj ? {
            styles: {}
          } : Bj,
          Fj = Oj.defaultTone,
          Lj = x(Oj, a),
          Pj = {
            tone: Fj || "neutral",
            Container: VD({
              themeKeys: {
                gap: "itemSpacing",
                scrollIndex: "scrollIndex",
                itemTransition: "itemTransition"
              },
              base: {
                display: "flex",
                flexBoundary: "fixed",
                flexDirection: "column",
                gap: QD.layout.gutterY,
                itemTransition: A(A({}, QD.animation.standardEntrance), {}, {
                  duration: QD.animation.duration.fast
                })
              },
              themeStyles: Lj
            })
          },
          Mj = b("C", function (e) {
            var t = ej("up"),
              r = ej("down");
            return zn(En, Yn(e, {
              get onUp() {
                return ZD(e.onUp, t);
              },
              get onDown() {
                return ZD(e.onDown, r);
              },
              get selected() {
                return e.selected || 0;
              },
              forwardFocus: JD,
              get onLayout() {
                return ZD(function (t) {
                  var r, n;
                  return qD(e.y).call(t, t, t.children[null !== (r = e.selected) && void 0 !== r ? r : 0], null !== (n = e.selected) && void 0 !== n ? n : 0, void 0);
                }, e.onLayout);
              },
              get onSelectedChanged() {
                return ZD(e.onSelectedChanged, "none" !== e.scroll ? qD(e.y) : void 0);
              },
              get style() {
                var t;
                return [e.style, Pj.Container.tones[null !== (t = e.tone) && void 0 !== t ? t : Pj.tone], Pj.Container.base];
              }
            }));
          }),
          zj = (null == (OD = QD) ? void 0 : OD.componentConfig).Label,
          Dj = void 0 === zj ? {
            styles: {}
          } : zj,
          jj = (Dj.defaultTone, x(Dj, s)),
          Uj = {
            themeKeys: {
              color: "backgroundColor",
              borderRadius: "radius"
            },
            base: {
              display: "flex",
              justifyContent: "center",
              color: QD.color.textNeutral,
              padding: [QD.spacer.md, QD.spacer.lg],
              borderRadius: [QD.radius.md, QD.radius.md, QD.radius.md, QD.radius.none],
              height: QD.typography.caption1.lineHeight + QD.spacer.md,
              neutral: {
                backgroundColor: QD.color.fillNeutral
              }
            },
            tones: {
              inverse: {
                color: QD.color.fillInverse
              },
              brand: {
                color: QD.color.fillBrand,
                focus: {
                  color: QD.color.orange
                }
              }
            },
            themeStyles: jj
          },
          Wj = {
            themeKeys: {
              color: "textColor"
            },
            base: A(A({}, QD.typography.caption1), {}, {
              color: QD.color.textInverse
            }),
            tones: {
              inverse: {
                color: QD.color.textNeutral
              },
              brand: {
                color: QD.color.textNeutral
              }
            },
            themeStyles: jj
          };
        VD(Uj), VD(Wj);
        var Yj = (null == (FD = QD) ? void 0 : FD.componentConfig).Details,
          Hj = void 0 === Yj ? {
            styles: {}
          } : Yj,
          Qj = (Hj.defaultTone, x(Hj, l)),
          $j = {
            themeKeys: {
              alignItems: "alignItems",
              contentSpacing: "contentSpacing",
              badgeContentSpacing: "badgeContentSpacing",
              ratingContentSpacing: "ratingContentSpacing"
            },
            base: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              contentSpacing: QD.spacer.lg,
              badgeContentSpacing: QD.spacer.sm,
              ratingContentSpacing: QD.spacer.lg
            },
            themeStyles: Qj
          },
          Kj = {
            themeKeys: {
              color: "textColor"
            },
            base: A(A({}, QD.typography.body2), {}, {
              marginRight: QD.spacer.lg,
              color: QD.color.textNeutral
            }),
            tones: {
              neutral: {
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              },
              inverse: {
                color: QD.color.textInverse,
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              },
              brand: {
                color: QD.color.textNeutral,
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              }
            },
            themeStyles: Qj
          };
        VD($j), VD(Kj);
        var Xj = (null == (LD = QD) ? void 0 : LD.componentConfig).Rating,
          Gj = void 0 === Xj ? {
            styles: {},
            defaultTone: "neutral"
          } : Xj,
          Vj = Gj.styles,
          qj = (Gj.defaultTone, {
            themeKeys: {
              justifyContent: "justifyContent",
              itemSpacing: "itemSpacing"
            },
            base: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              itemSpacing: QD.spacer.sm
            },
            toneModes: {},
            themeStyles: Vj
          }),
          Zj = {
            themeKeys: {
              color: "textColor"
            },
            base: A({
              color: QD.color.textNeutral
            }, QD.typography.body2),
            toneModes: {},
            themeStyles: Vj
          },
          Jj = {
            themeKeys: {
              color: "color"
            },
            base: {
              height: QD.typography.body2.lineHeight,
              width: QD.typography.body2.lineHeight,
              color: QD.color.fillNeutral,
              marginRight: QD.spacer.sm
            },
            toneModes: {},
            themeStyles: Vj
          };
        VD(qj), VD(Jj), VD(Zj);
        var eU = (null == (PD = QD) ? void 0 : PD.componentConfig).Metadata,
          tU = void 0 === eU ? {
            styles: {}
          } : eU,
          rU = (tU.defaultTone, x(tU, u)),
          nU = {
            themeKeys: {
              justifyContent: "justifyContent",
              alpha: "alpha"
            },
            base: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              flexBoundary: "contain",
              alpha: QD.alpha.primary
            },
            modes: {
              disabled: {
                alpha: QD.alpha.inactive
              }
            },
            themeStyles: rU
          },
          oU = {
            themeKeys: {
              color: "textColor"
            },
            base: A(A({
              maxLines: 1,
              contain: "width"
            }, QD.typography.headline3), {}, {
              color: QD.color.textNeutral
            }),
            tones: {
              neutral: {
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              },
              inverse: {
                color: QD.color.textInverse,
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              },
              brand: {
                color: QD.color.textNeutral,
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              }
            },
            themeStyles: rU
          },
          iU = {
            themeKeys: {
              color: "textColor"
            },
            base: A(A({
              contain: "width",
              maxLines: 2
            }, QD.typography.body2), {}, {
              color: QD.color.textNeutralSecondary
            }),
            tones: {
              neutral: {
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              },
              inverse: {
                color: QD.color.textInverseSecondary,
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              },
              brand: {
                color: QD.color.textNeutralSecondary,
                disabled: {
                  color: QD.color.textNeutralDisabled
                }
              }
            },
            themeStyles: rU
          };
        VD(nU), VD(iU), VD(oU);
        var aU = (null == (MD = QD) ? void 0 : MD.componentConfig).ProgressBar,
          sU = void 0 === aU ? {
            styles: {}
          } : aU,
          lU = (sU.defaultTone, x(sU, c)),
          uU = {
            themeKeys: {
              color: "barColor",
              borderRadius: "borderRadius"
            },
            base: {
              height: QD.spacer.md,
              color: QD.color.fillNeutralTertiary,
              borderRadius: QD.radius.xs
            },
            tones: {
              inverse: {
                color: QD.color.fillInverseTertiary
              }
            },
            themeStyles: lU
          },
          cU = {
            themeKeys: {
              color: "progressColor",
              borderRadius: "borderRadius"
            },
            base: {
              borderRadius: QD.radius.xs,
              color: QD.color.fillNeutral
            },
            tones: {
              inverse: {
                color: QD.color.fillInverse
              },
              brand: {
                color: QD.color.fillBrand
              }
            },
            themeStyles: lU
          };
        VD(uU), VD(cU);
        var dU = (null == (zD = QD) ? void 0 : zD.componentConfig).Radio,
          hU = void 0 === dU ? {
            themeStyles: {}
          } : dU,
          fU = (hU.defaultTone, x(hU, d)),
          pU = QD.spacer.xxl,
          vU = QD.stroke.sm,
          gU = {
            themeKeys: {
              borderRadius: "strokeRadius",
              color: "backgroundColor",
              colorChecked: "backgroundColorChecked"
            },
            base: {
              color: QD.color.fillNeutralSecondary,
              colorChecked: QD.color.fillInverse,
              height: pU + 2 * vU,
              width: pU + 2 * vU,
              borderRadius: pU / 2 + vU,
              border: {
                color: QD.color.strokeNeutralSecondary,
                width: vU
              }
            },
            tones: {
              inverse: {
                border: {
                  color: QD.color.strokeInverseSecondary,
                  width: vU
                }
              },
              brand: {
                border: {
                  color: QD.color.fillBrand,
                  width: vU
                }
              }
            },
            themeStyles: fU
          },
          mU = {
            themeKeys: {
              width: "knobWidth",
              height: "knobHeight",
              borderRadius: "knobRadius",
              color: "knobColor"
            },
            base: {
              color: QD.color.fillInverse,
              width: pU,
              height: pU,
              borderRadius: pU / 2
            },
            tones: {
              inverse: {
                color: QD.color.fillNeutral
              }
            },
            themeStyles: fU
          };
        VD(gU), VD(mU);
        var xU = (null == (DD = QD) ? void 0 : DD.componentConfig).Row,
          yU = void 0 === xU ? {
            styles: {}
          } : xU,
          bU = yU.defaultTone,
          wU = x(yU, h),
          SU = {
            tone: bU,
            Container: VD({
              themeKeys: {
                gap: "itemSpacing",
                scrollIndex: "scrollIndex",
                itemTransition: "itemTransition"
              },
              base: {
                display: "flex",
                flexBoundary: "fixed",
                flexDirection: "row",
                gap: QD.layout.gutterX,
                itemTransition: A(A({}, QD.animation.standardEntrance), {}, {
                  duration: QD.animation.duration.fast
                })
              },
              themeStyles: wU
            })
          },
          AU = b("R", function (e) {
            var t = ej("left"),
              r = ej("right");
            return zn(En, Yn(e, {
              get selected() {
                return e.selected || 0;
              },
              get onLeft() {
                return ZD(e.onLeft, t);
              },
              get onRight() {
                return ZD(e.onRight, r);
              },
              forwardFocus: JD,
              get onLayout() {
                return ZD(function (t) {
                  return qD(e.x).call(t, t, t.children[t.selected], t.selected, void 0);
                }, e.onLayout);
              },
              get onSelectedChanged() {
                return ZD(e.onSelectedChanged, "none" !== e.scroll ? qD(e.x) : void 0);
              },
              get style() {
                return [e.style, SU.Container.tones[e.tone || SU.tone], SU.Container.base];
              }
            }));
          }),
          TU = (null == (jD = QD) ? void 0 : jD.componentConfig).Keyboard,
          CU = void 0 === TU ? {
            styles: {}
          } : TU,
          RU = (CU.defaultTone, x(CU, f)),
          IU = {
            themeKeys: {
              keySpacing: "keySpacing",
              screenW: "screenW",
              marginX: "marginX"
            },
            base: {
              keySpacing: QD.spacer.md,
              screenW: QD.layout.screenW,
              marginX: QD.layout.marginX,
              height: 100
            },
            themeStyles: RU
          },
          _U = {
            themeKeys: {
              keySpacing: "keySpacing",
              textAlign: "textAlign",
              borderRadius: "borderRadius",
              color: "backgroundColor",
              justifyContent: "justifyContent",
              baseWidth: "baseWidth",
              sizes: "sizes",
              contentColor: "contentColor"
            },
            base: {
              keySpacing: QD.spacer.md,
              height: 9 * QD.spacer.md,
              paddingX: QD.spacer.md,
              sizes: {
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5
              },
              contentColor: QD.color.fillNeutral,
              padding: [QD.spacer.xxxl, QD.spacer.xl],
              baseWidth: 7 * QD.spacer.md,
              color: QD.color.interactiveNeutral,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: QD.radius.sm
            },
            modes: {
              focus: {
                color: QD.color.interactiveNeutralFocus,
                contentColor: QD.color.fillInverse
              },
              disabled: {
                color: QD.color.fillNeutralDisabled,
                contentColor: QD.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: QD.color.interactiveInverse,
                focus: {
                  color: QD.color.interactiveInverseFocus,
                  contentColor: QD.color.fillNeutral
                }
              },
              brand: {
                focus: {
                  contentColor: QD.color.fillNeutral
                }
              }
            },
            themeStyles: RU
          },
          EU = {
            themeKeys: {
              color: "textColor"
            },
            base: A({
              textAlign: "left",
              color: QD.color.textNeutral
            }, QD.typography.headline2),
            modes: {
              focus: {
                color: QD.color.textInverse
              },
              disabled: {
                color: QD.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                focus: {
                  color: QD.color.textNeutral
                }
              }
            },
            themeStyles: RU
          };
        VD(IU), VD(_U), VD(EU);
        var kU = (null == (UD = QD) ? void 0 : UD.componentConfig).Key,
          NU = void 0 === kU ? {
            styles: {}
          } : kU,
          BU = (NU.defaultTone, x(NU, p)),
          OU = {
            themeKeys: {
              keySpacing: "keySpacing",
              textAlign: "textAlign",
              borderRadius: "borderRadius",
              color: "backgroundColor",
              justifyContent: "justifyContent",
              baseWidth: "baseWidth",
              sizes: "sizes",
              contentColor: "contentColor"
            },
            base: {
              keySpacing: QD.spacer.md,
              height: 9 * QD.spacer.md,
              paddingX: QD.spacer.md,
              contentColor: QD.color.fillNeutral,
              sizes: {
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5
              },
              padding: [QD.spacer.md],
              baseWidth: 7 * QD.spacer.md,
              color: QD.color.interactiveNeutral,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: QD.radius.sm
            },
            modes: {
              focus: {
                color: QD.color.interactiveNeutralFocus,
                contentColor: QD.color.fillInverse
              },
              disabled: {
                color: QD.color.fillNeutralDisabled,
                contentColor: QD.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: QD.color.interactiveInverse,
                focus: {
                  color: QD.color.interactiveInverseFocus,
                  contentColor: QD.color.fillNeutral
                }
              },
              brand: {
                focus: {
                  contentColor: QD.color.fillNeutral
                }
              }
            },
            themeStyles: BU
          },
          FU = {
            themeKeys: {
              color: "textColor"
            },
            base: A({
              textAlign: "left",
              color: QD.color.textNeutral
            }, QD.typography.headline2),
            modes: {
              focus: {
                color: QD.color.textInverse
              },
              disabled: {
                color: QD.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                focus: {
                  color: QD.color.textNeutral
                }
              }
            },
            themeStyles: BU
          };
        VD(OU), VD(FU);
        var LU = (null == (WD = QD) ? void 0 : WD.componentConfig).Input,
          PU = void 0 === LU ? {
            styles: {}
          } : LU,
          MU = (PU.defaultTone, x(PU, v)),
          zU = {
            themeKeys: {
              justifyContent: "justifyContent"
            },
            base: {
              display: "flex",
              justifyContent: "flexStart",
              flexDirection: "column",
              width: 100,
              height: 100,
              actualTitle: ""
            },
            themeStyles: MU
          },
          DU = {
            themeKeys: {
              borderRadius: "borderRadius",
              color: "backgroundColor"
            },
            base: {
              width: function () {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var t = QD.layout.screenW,
                  r = QD.layout.columnCount,
                  n = QD.layout.marginX,
                  o = QD.layout.gutterX;
                if (!(e < 1 || e > r)) return (t - 2 * n - (e - 1) * o) / e;
                console.error("Column expects a number between 1 & ".concat(r, ". Received ").concat(e));
              }(4),
              height: 100,
              display: "flex",
              flexDirection: "column",
              padding: [QD.spacer.xxxl, QD.spacer.xl],
              color: QD.color.interactiveNeutral,
              contentColor: QD.color.fillInverse,
              borderRadius: QD.radius.sm,
              marginX: QD.spacer.xxxl
            },
            modes: {
              focus: {
                color: QD.color.interactiveNeutralFocus
              },
              disabled: {
                color: QD.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: QD.color.interactiveInverse
              },
              brand: {
                color: QD.color.interactiveBrand,
                focus: {
                  color: QD.color.fillNeutral
                }
              }
            },
            themeStyles: MU
          },
          jU = {
            themeKeys: {
              color: "textColor"
            },
            base: A({
              textAlign: "left",
              color: QD.color.textNeutral
            }, QD.typography.button1),
            themeStyles: MU
          };
        VD(zU), VD(DU), VD(jU);
        var UU = (null == (YD = QD) ? void 0 : YD.componentConfig).Tile,
          WU = void 0 === UU ? {
            styles: {}
          } : UU,
          YU = (WU.defaultTone, x(WU, g)),
          HU = (null == (HD = QD) ? void 0 : HD.componentConfig).Surface,
          QU = void 0 === HU ? {
            styles: {}
          } : HU,
          $U = (QU.defaultSurfaceTone, x(QU, m)),
          KU = {
            themeKeys: {
              alpha: "alpha",
              paddingYProgress: "paddingYProgress",
              borderRadius: "radius"
            },
            base: {
              width: 400,
              height: 240,
              padding: [40, 10],
              paddingYProgress: QD.spacer.xl,
              paddingYBetweenContent: QD.spacer.md,
              borderRadius: QD.radius.md,
              alpha: QD.alpha.primary
            },
            modes: {
              disabled: {
                alpha: QD.alpha.inactive
              }
            },
            themeStyles: A(A({}, $U), YU)
          },
          XU = {
            themeKeys: {},
            base: {
              display: "flex",
              flexDirection: "column",
              flexBoundary: "contain",
              mountY: 1
            },
            themeStyles: YU
          },
          GU = {
            themeKeys: {},
            base: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart"
            },
            themeStyles: YU
          },
          VU = {
            themeKeys: {},
            base: {
              width: 5 * QD.spacer.lg,
              height: QD.spacer.xxl + QD.spacer.md
            },
            themeStyles: YU
          };
        VD(KU), VD(XU), VD(GU), VD(VU);
        var qU = {
            color: 255,
            height: 150,
            width: 330,
            x: 1910,
            y: 10,
            mountX: 1,
            alpha: .8,
            zIndex: 100
          },
          ZU = {
            x: 10,
            fontSize: 22,
            textColor: Qn("#f6f6f6")
          },
          JU = {
            fontSize: 22,
            textColor: Qn("#f6f6f6")
          },
          eW = C(Be(0), 2),
          tW = eW[0],
          rW = eW[1],
          nW = C(Be(0), 2),
          oW = nW[0],
          iW = nW[1],
          aW = C(Be(99), 2),
          sW = aW[0],
          lW = aW[1],
          uW = C(Be(0), 2),
          cW = uW[0],
          dW = uW[1],
          hW = C(Be(0), 2),
          fW = hW[0],
          pW = hW[1],
          vW = C(Be(0), 2),
          gW = vW[0],
          mW = vW[1],
          xW = C(Be(0), 2),
          yW = xW[0],
          bW = xW[1],
          wW = 0,
          SW = 0;
        function AW(e) {
          e.renderer.on("fpsUpdate", function (e, t) {
            var r,
              n,
              o,
              i,
              a = "number" == typeof t ? t : t.fps;
            a > 5 && (function (e) {
              e && (rW(e), lW(function (t) {
                return Math.min(e, t);
              }), dW(function (t) {
                return Math.max(e, t);
              }), SW += e, wW++, iW(Math.round(SW / wW)));
            }(a), r = e.root.stage, n = 0, o = 0, i = 0, r.txManager.textureIdCache.forEach(function (e, t, r) {
              "loaded" === e.state && n++, "loading" === e.state && o++, "failed" === e.state && i++;
            }), pW(n), mW(o), bW(i));
          });
        }
        var TW = function TW(e) {
            return zn(En, Yn(e, {
              style: qU,
              get children() {
                return [zn(En, {
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "FPS:"
                    }), zn(_n, {
                      style: JU,
                      x: 90,
                      get children() {
                        return tW();
                      }
                    })];
                  }
                }), zn(En, {
                  x: 160,
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "AVG:"
                    }), zn(_n, {
                      style: JU,
                      x: 100,
                      get children() {
                        return oW();
                      }
                    })];
                  }
                }), zn(En, {
                  x: 0,
                  y: 20,
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "MIN:"
                    }), zn(_n, {
                      style: JU,
                      x: 90,
                      get children() {
                        return sW();
                      }
                    })];
                  }
                }), zn(En, {
                  x: 160,
                  y: 20,
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "MAX:"
                    }), zn(_n, {
                      style: JU,
                      x: 100,
                      get children() {
                        return cW();
                      }
                    })];
                  }
                }), zn(En, {
                  x: 0,
                  y: 50,
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "Loaded Textures Cnt:"
                    }), zn(_n, {
                      style: ZU,
                      x: 270,
                      get children() {
                        return fW();
                      }
                    })];
                  }
                }), zn(En, {
                  x: 0,
                  y: 80,
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "Loading Textures Cnt:"
                    }), zn(_n, {
                      style: ZU,
                      x: 270,
                      get children() {
                        return gW();
                      }
                    })];
                  }
                }), zn(En, {
                  x: 0,
                  y: 110,
                  get children() {
                    return [zn(_n, {
                      style: ZU,
                      children: "Failed Textures Cnt:"
                    }), zn(_n, {
                      style: ZU,
                      x: 270,
                      get children() {
                        return yW();
                      }
                    })];
                  }
                })];
              }
            }));
          },
          CW = {
            Column: {
              flexDirection: "column",
              display: "flex",
              width: 140,
              height: 600,
              y: 360,
              gap: 20,
              zIndex: 101,
              transition: {
                x: {
                  duration: 250,
                  easing: "ease-in-out"
                }
              },
              x: 8,
              focus: {
                width: 500,
                x: QD.layout.marginX
              }
            },
            Gradient: {
              zIndex: 99,
              color: Qn("#000000"),
              src: "./assets/sidenav.png",
              alpha: 0,
              width: 1200,
              height: 1080,
              focus: {
                alpha: 1
              },
              transition: {
                alpha: !0
              }
            },
            NavButton: {
              zIndex: 102,
              height: 70,
              width: 100,
              borderRadius: 8,
              focus: {
                color: Qn("#424242")
              },
              active: {
                width: 328,
                height: 70
              }
            }
          },
          RW = "./",
          IW = [{
            name: "experiment",
            width: 81,
            height: 100,
            x: 0,
            y: 0
          }, {
            name: "trending",
            width: 100,
            height: 56,
            x: 81,
            y: 0
          }, {
            name: "tv",
            width: 100,
            height: 68,
            x: 181,
            y: 0
          }, {
            name: "movie",
            width: 94,
            height: 100,
            x: 282,
            y: 0
          }];
        function _W(e) {
          var t,
            r,
            n,
            o = (t = RW + "assets/icons_white.png", r = IW, n = en.createTexture("ImageTexture", {
              src: t
            }), r.reduce(function (e, t) {
              var r = t.x,
                o = t.y,
                i = t.width,
                a = t.height;
              return e[t.name] = en.createTexture("SubTexture", {
                texture: n,
                x: r,
                y: o,
                width: i,
                height: a
              }), e;
            }, {}));
          return zn(En, Yn(e, {
            get texture() {
              return o[e.name];
            },
            get width() {
              return o[e.name].props.width;
            },
            get height() {
              return o[e.name].props.height;
            },
            get x() {
              return (100 - (o[e.name].props.width || 0)) / 2;
            },
            get y() {
              return (100 - (o[e.name].props.height || 0)) / 2;
            }
          }));
        }
        function EW(e) {
          return zn(En, Yn(e, {
            forwardStates: !0,
            get style() {
              return CW.NavButton;
            },
            get children() {
              return [zn(En, {
                y: -16,
                get children() {
                  return zn(_W, {
                    scale: .5,
                    get name() {
                      return e.icon;
                    }
                  });
                }
              }), zn(_n, {
                style: {
                  fontSize: 38,
                  x: 116,
                  y: 18,
                  height: 50,
                  alpha: 0,
                  active: {
                    alpha: 1
                  }
                },
                get children() {
                  return e.children;
                }
              })];
            }
          }));
        }
        function kW(e) {
          var t,
            r = Lz();
          function n(t) {
            var n = function (e, t) {
              var r = Pz(),
                n = Pe(function () {
                  return kz(e()).map(function (e) {
                    return Iz(e, void 0, t);
                  });
                });
              return Pe(function () {
                var e,
                  t = R(n());
                try {
                  for (t.s(); !(e = t.n()).done;) {
                    var o = (0, e.value)(r.pathname);
                    if (o) return o;
                  }
                } catch (i) {
                  t.e(i);
                } finally {
                  t.f();
                }
              });
            }(function () {
              return t;
            });
            if (n()) return e.focusPage();
            r(t);
          }
          return [zn(En, {
            flexItem: !1,
            width: 300,
            height: 150,
            x: 30,
            y: 15,
            zIndex: 105,
            get alpha() {
              return e.showWidgets ? 1 : 0;
            },
            get children() {
              return [zn(_n, {
                x: 80,
                fontSize: 28,
                color: 4143380036,
                children: "Built With:"
              }), zn(En, {
                y: 22,
                src: "./assets/solidWord.png",
                width: 280,
                height: 52
              }), zn(En, {
                x: 0,
                y: 110,
                src: "./assets/tmdb.png",
                width: 80,
                height: 41
              }), zn(_n, {
                x: 90,
                y: 110,
                contain: "width",
                width: 160,
                fontSize: 12,
                color: 4143380036,
                children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
              })];
            }
          }), zn(Mj, Yn(e, {
            onFocus: function onFocus() {
              t.states.add("focus"), this.children.forEach(function (e) {
                return e.states.add("active");
              }), this.children.selected.setFocus();
            },
            onBlur: function onBlur() {
              t.states.remove("focus"), this.selected = 0, this.children.forEach(function (e) {
                return e.states.remove("active");
              });
            },
            get style() {
              return CW.Column;
            },
            scroll: "none",
            get children() {
              return [zn(EW, {
                onEnter: function onEnter() {
                  return n("/browse/all");
                },
                icon: "trending",
                children: "Trending"
              }), zn(EW, {
                icon: "movie",
                onEnter: function onEnter() {
                  return n("/browse/movie");
                },
                children: "Movies"
              }), zn(EW, {
                icon: "tv",
                onEnter: function onEnter() {
                  return n("/browse/tv");
                },
                children: "TV"
              }), zn(EW, {
                icon: "experiment",
                onEnter: function onEnter() {
                  return n("/examples");
                },
                children: "Examples"
              })];
            }
          })), zn(En, {
            skipFocus: !0,
            ref: function ref(e) {
              "function" == typeof t ? t(e) : t = e;
            },
            get style() {
              return CW.Gradient;
            }
          })];
        }
        var NW = function NW(e) {
            uD({
              Announcer: ["a"],
              Menu: ["m"],
              Escape: ["Escape", 27],
              Backspace: ["Backspace", 8],
              Left: ["ArrowLeft", 37],
              Right: ["ArrowRight", 39],
              Up: ["ArrowUp", 38],
              Down: ["ArrowDown", 40],
              Enter: ["Enter", 13]
            });
            var t = (SD.setupTimers(), Le(Ue(sD, SD.onFocusChange, {
              defer: !0
            })), SD);
            t.enabled = !1;
            var r,
              n,
              o = Lz();
            function i() {
              return !r.states.has("focus") && (n = At(), r.setFocus());
            }
            AW({
              renderer: en
            });
            var a = C(Be(!0), 2),
              s = a[0],
              l = a[1],
              u = Pz(),
              c = ["/browse", "/entity"];
            return Le(function () {
              var e = u.pathname,
                t = c.some(function (t) {
                  return e.startsWith(t);
                });
              "/" === e && (t = !0), l(t);
            }), zn(En, {
              ref: function ref(e) {
                var t = window.APP;
                "function" == typeof t ? t(e) : window.APP = e;
              },
              onAnnouncer: function onAnnouncer() {
                return t.enabled = !t.enabled;
              },
              onLast: function onLast() {
                return history.back();
              },
              onMenu: function onMenu() {
                return o("/");
              },
              style: {
                width: 1920,
                height: 1080
              },
              onBackspace: i,
              onLeft: i,
              onRight: function onRight() {
                return r.states.has("focus") && n.setFocus();
              },
              get children() {
                return [zn($D, {}), zn(TW, {
                  mountX: 1,
                  x: 1910,
                  y: 10,
                  get alpha() {
                    return s() ? 1 : 0;
                  }
                }), Mn(function () {
                  return e.children;
                }), zn(kW, {
                  ref: function ref(e) {
                    "function" == typeof r ? r(e) : r = e;
                  },
                  focusPage: function focusPage() {
                    return n.setFocus();
                  },
                  get showWidgets() {
                    return s();
                  }
                })];
              }
            });
          },
          BW = b("j", {
            Page: {
              width: 1920,
              height: 1080
            },
            headlineText: {
              width: 1200,
              height: 240,
              x: 360,
              y: 455,
              contain: "both",
              fontSize: 66,
              textAlign: "center"
            },
            headlineSubText: {
              width: 960,
              height: 170,
              x: 530,
              y: 655,
              contain: "both",
              fontSize: 48,
              textAlign: "center"
            },
            itemsContainer: {
              width: QD.layout.screenW,
              height: 800,
              y: 560,
              x: 0,
              zIndex: 2
            },
            Thumbnail: {
              borderRadius: 16,
              width: 185,
              height: 278,
              scale: 1,
              zIndex: 2,
              transition: {
                scale: {
                  duration: 250,
                  easing: "ease-in-out"
                }
              },
              border: {
                width: 0,
                color: 0
              },
              focus: {
                scale: 1.1,
                border: {
                  color: 4294967142,
                  width: 8
                }
              }
            },
            FocusRing: {
              borderRadius: 16,
              width: 194,
              height: 286,
              y: -5,
              x: -5,
              zIndex: -1
            },
            FPS: {
              color: 255,
              height: 42,
              width: 140,
              x: 20,
              y: 20,
              zIndex: 100
            },
            FPSLabel: {
              x: 10,
              y: 0,
              fontSize: 36,
              textColor: Qn("#ffffff")
            },
            FPSValue: {
              x: 90,
              y: 0,
              fontSize: 36,
              textColor: Qn("#ffffff")
            },
            showHeadline: {
              x: 70,
              y: 20
            },
            headlineBlur: {
              width: 1920,
              height: 150,
              x: 0,
              y: 0,
              zIndex: 14,
              alpha: .9,
              color: Qn("#000000")
            },
            RowTitle: {
              height: 60,
              width: 300,
              marginBottom: -40,
              fontSize: 36,
              color: Qn("#f0f0f0"),
              zIndex: 2
            },
            Row: {
              display: "flex",
              justifyContent: "spaceBetween",
              height: 300
            },
            Column: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              flexBoundary: "contain",
              gap: 64,
              width: QD.layout.screenW - 2 * QD.layout.marginX,
              x: QD.layout.marginX + QD.layout.gutterX,
              y: 48,
              transition: {
                y: {
                  duration: 250,
                  easing: "ease-in-out"
                }
              },
              zIndex: 2
            },
            Rect: {
              width: 250,
              height: 100,
              y: 10,
              x: 300,
              color: Qn("#0000ff")
            },
            peopleBio: A(A({}, QD.typography.body1), {}, {
              fontFamily: "Ubuntu",
              fontWeight: "normal",
              contain: "both",
              width: 780,
              height: 340
            })
          }),
          OW = {
            width: 120,
            height: 40,
            mount: .5,
            color: 179,
            borderRadius: 8,
            borderBottom: {
              width: 2,
              color: 4278254335
            },
            border: {
              width: 2,
              color: 4210752051
            },
            focus: {
              color: 4210752255,
              borderRadius: 20,
              borderBottom: {
                width: 0,
                color: 0
              }
            }
          },
          FW = {
            color: Qn("#00A699"),
            height: 8,
            y: 2,
            x: -4,
            width: OW.width + 8
          },
          LW = {
            fontSize: 12,
            y: 12,
            contain: "width",
            textAlign: "center",
            color: Qn("#F6F6F9"),
            height: OW.height,
            width: OW.width
          },
          PW = (b("p", {
            container: OW,
            topBar: FW,
            text: LW
          }), 386),
          MW = 136;
        Qn("#715cab"), Qn("#5a39a2"), Qn("#291d43"), b("M", {
          fontSize: 32,
          contain: "width",
          textAlign: "center",
          mountY: -.35,
          color: Qn("#FFFFFF"),
          height: MW,
          width: PW,
          focus: {
            fontSize: 40
          },
          disabled: {
            color: Qn("#909090")
          }
        });
        function zW(e) {
          return zn(En, Yn(e, {
            get style() {
              return BW.Thumbnail;
            }
          }));
        }
        function DW(e) {
          var t = function (e) {
              for (var _len19 = arguments.length, t = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
                t[_key19 - 1] = arguments[_key19];
              }
              if (me in e) {
                var r = new Set(t.length > 1 ? t.flat() : t[0]),
                  n = t.map(function (t) {
                    return new Proxy({
                      get: function get(r) {
                        return t.includes(r) ? e[r] : void 0;
                      },
                      has: function has(r) {
                        return t.includes(r) && r in e;
                      },
                      keys: function keys() {
                        return t.filter(function (t) {
                          return t in e;
                        });
                      }
                    }, pt);
                  });
                return n.push(new Proxy({
                  get: function get(t) {
                    return r.has(t) ? void 0 : e[t];
                  },
                  has: function has(t) {
                    return !r.has(t) && t in e;
                  },
                  keys: function keys() {
                    return Object.keys(e).filter(function (e) {
                      return !r.has(e);
                    });
                  }
                }, pt)), n;
              }
              var o,
                i = {},
                a = t.map(function () {
                  return {};
                }),
                s = R(Object.getOwnPropertyNames(e));
              try {
                for (s.s(); !(o = s.n()).done;) {
                  var l,
                    u = o.value,
                    c = Object.getOwnPropertyDescriptor(e, u),
                    d = !c.get && !c.set && c.enumerable && c.writable && c.configurable,
                    h = !1,
                    f = 0,
                    p = R(t);
                  try {
                    for (p.s(); !(l = p.n()).done;) l.value.includes(u) && (h = !0, d ? a[f][u] = c.value : Object.defineProperty(a[f], u, c)), ++f;
                  } catch (v) {
                    p.e(v);
                  } finally {
                    p.f();
                  }
                  h || (d ? i[u] = c.value : Object.defineProperty(i, u, c));
                }
              } catch (v) {
                s.e(v);
              } finally {
                s.f();
              }
              return [].concat(_toConsumableArray(a), [i]);
            }(e, ["items"]),
            r = C(t, 2),
            n = r[0],
            o = r[1];
          return zn(AU, Yn(o, {
            get style() {
              return BW.Row;
            },
            get children() {
              return zn(bt, {
                get each() {
                  return n.items;
                },
                children: function children(e) {
                  return zn(zW, e);
                }
              });
            }
          }));
        }
        var jW,
          UW,
          WW = "https://api.themoviedb.org/3",
          YW = "w185",
          HW = {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZiMDhiODgwZjc2MzEzMmIyMjExYWNjYjQ5MzZiZSIsIm5iZiI6MTcyNDA1NjEwMC4yMzQ4MzgsInN1YiI6IjY2YzMwMTg1Y2NlNzA0ZWJlYWQzNWY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dedjZUuwhiOFTlvO6FohvFkC-cEmS9QEw97du52t3bk"
            }
          };
        function QW(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : YW;
          return UW + t + e;
        }
        function $W(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return fetch(WW + e, A(A({}, HW), t)).then(function (e) {
            return e.json();
          });
        }
        function KW() {
          return $W("/configuration").then(function (e) {
            var t;
            return jW = e, UW = null === (t = e.images) || void 0 === t ? void 0 : t.secure_base_url, e;
          });
        }
        var XW = b("y", {
          get: function get(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return jW ? $W(e, t) : KW().then(function () {
              return $W(e, t);
            });
          },
          loadConfig: KW
        });
        function GW() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return e.map(function (e) {
            return {
              src: QW(e.poster_path || e.profile_path),
              tileSrc: QW(e.backdrop_path || e.profile_path, "w300"),
              backdrop: QW(e.backdrop_path, "w1280"),
              href: "/entity/".concat(e.media_type || "people", "/").concat(e.id),
              shortTitle: (t = e.title || e.name, r = 30, t.length > r ? t.substring(0, r - 3) + "..." : t),
              title: e.title || e.name,
              data: e,
              entityInfo: {
                type: e.media_type || "people",
                id: e.id
              },
              heroContent: {
                title: e.title || e.name,
                description: e.overview
              }
            };
            var t, r;
          });
        }
        var VW = new Map(),
          qW = new Map();
        var ZW = 900,
          JW = {
            display: "flex",
            flexDirection: "column",
            flexBoundary: "fixed",
            width: ZW,
            height: 220,
            gap: 16
          },
          eY = A(A({}, QD.typography.display2), {}, {
            fontFamily: "Ubuntu",
            fontWeight: 700,
            maxLines: 1,
            width: ZW,
            contain: "width"
          }),
          tY = function tY(e) {
            return zn(_n, Yn(e, {
              style: eY
            }));
          },
          rY = A(A({}, QD.typography.body1), {}, {
            fontFamily: "Ubuntu",
            fontWeight: 400,
            lineHeight: 32,
            width: ZW,
            maxLines: 3,
            contain: "width"
          }),
          nY = {
            fontSize: 16,
            lineHeight: 20
          },
          oY = function oY(e) {
            return zn(_n, Yn(e, {
              style: rY,
              get children() {
                return e.children;
              }
            }));
          },
          iY = function iY(e) {
            return t = Dn("node"), Hn(cD, t, function () {
              return [8, 13, 11, 13];
            }), Un(t, Yn(e, {
              style: {
                color: "0x00000099",
                borderRadius: 8,
                border: {
                  width: 2,
                  color: "0xffffffff"
                }
              }
            }), !0), jn(t, zn(_n, {
              style: nY,
              get children() {
                return e.children;
              }
            })), t;
            var t;
          },
          aY = A(A({}, QD.typography.body2), {}, {
            fontFamily: "Ubuntu",
            fontWeight: 400
          }),
          sY = function sY(e) {
            return zn(En, {
              style: {
                display: "flex",
                flexDirection: "row",
                gap: 18,
                width: ZW,
                height: 48
              },
              get children() {
                return [zn(En, {
                  y: -4,
                  src: "./assets/stars.png",
                  width: 188,
                  height: 31
                }), zn(En, {
                  y: -4,
                  flexItem: !1,
                  clipping: !0,
                  get width() {
                    return 188 * e.voteAverage / 10;
                  },
                  height: 31,
                  get children() {
                    return zn(En, {
                      src: "./assets/stars-full.png",
                      width: 188,
                      height: 31
                    });
                  }
                }), zn(_n, {
                  style: aY,
                  get children() {
                    return [Mn(function () {
                      return e.voteCount;
                    }), " reviews"];
                  }
                }), zn(_n, {
                  style: aY,
                  get children() {
                    return e.metaText;
                  }
                }), zn(bt, {
                  get each() {
                    return e.badges;
                  },
                  children: function children(e) {
                    return zn(iY, {
                      y: -5,
                      children: e
                    });
                  }
                })];
              }
            });
          },
          lY = b("D", function (e) {
            return zn(En, Yn({
              id: "contentBlock",
              style: JW
            }, e, {
              get children() {
                return [zn(tY, {
                  get children() {
                    return e.content.title;
                  }
                }), zn(oY, {
                  get children() {
                    return e.content.description;
                  }
                }), zn(wt, {
                  get when() {
                    return e.content.voteCount;
                  },
                  get children() {
                    return zn(sY, {
                      get metaText() {
                        return e.content.metaText;
                      },
                      get badges() {
                        return e.content.badges;
                      },
                      get voteCount() {
                        return e.content.voteCount;
                      },
                      get voteAverage() {
                        return e.content.voteAverage;
                      }
                    });
                  }
                })];
              }
            }));
          }),
          uY = function uY(e, t) {
            var r,
              n = function n() {
                return clearTimeout(r);
              };
            Ye() && We(n);
            return Object.assign(function () {
              for (var _len20 = arguments.length, o = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
                o[_key20] = arguments[_key20];
              }
              void 0 !== r && n(), r = setTimeout(function () {
                return e.apply(void 0, o);
              }, t);
            }, {
              clear: n
            });
          },
          cY = function cY() {
            var e = Mz(),
              t = C(Be(0), 2),
              r = t[0],
              n = t[1],
              o = C(Be({}), 2),
              i = o[0],
              a = o[1],
              s = Lz(),
              l = ze(function () {
                return 0;
              }),
              u = Pe(function () {
                return h = e.filter || "all", t = function t(e) {
                  var t = "/trending/".concat(h, "/week?page=").concat(e);
                  if (VW.has(t)) return VW.get(t);
                  var r = XW.get(t).then(function (e) {
                    var t = e.results.filter(function (e) {
                        return !e.adult;
                      }),
                      r = function (e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
                        for (var r = [], n = 0, o = e.length; n < o; n += t) r.push(e.slice(n, n + t));
                        return r;
                      }((qW.has(h) ? qW.get(h) : []).concat(GW(t)));
                    return r[r.length - 1].length < 7 ? qW.set(h, r.pop()) : qW["delete"](h), r;
                  });
                  return VW.set(t, r), r;
                }, r = C(Be([]), 2), n = r[0], o = r[1], i = C(Be(1), 2), a = i[0], s = i[1], l = C(Be(!1), 2), u = l[0], c = l[1], d = C(Me(a, t), 1)[0], Oe(function () {
                  var e = d();
                  e && De(function () {
                    0 === e.length && c(!0), o(function (t) {
                      return [].concat(_toConsumableArray(t), _toConsumableArray(e));
                    });
                  });
                }), {
                  pages: n,
                  page: a,
                  setPage: s,
                  setPages: o,
                  end: u,
                  setEnd: c
                };
                var t, r, n, o, i, a, s, l, u, c, d, h;
              }),
              c = uY(function (e) {
                return CD(e);
              }, 400),
              d = uY(function (e) {
                return a(e || {});
              }, 200);
            function h() {
              var e;
              null === (e = this.children.selected) || void 0 === e || e.setFocus(), n(-1 * (this.y || 0) + 24);
              var t = u().pages().length;
              this.parent.selected = this.parent.children.indexOf(this), (0 === t || this.parent.selected && this.parent.selected >= t - 2) && u().setPage(function (e) {
                return e + 1;
              });
            }
            function f() {
              var e = this.children.find(function (e) {
                return e.states.has("focus");
              });
              return I(e && e.href), s(e.href), !0;
            }
            return Le(Ue(At, function (e) {
              e.backdrop && c(e.backdrop), e.heroContent && d(e.heroContent);
            }, {
              defer: !0
            })), zn(wt, {
              get when() {
                return u().pages().length;
              },
              get children() {
                return [zn(lY, {
                  y: 360,
                  x: 162,
                  get content() {
                    return i();
                  }
                }), zn(En, {
                  clipping: !0,
                  get style() {
                    return BW.itemsContainer;
                  },
                  get children() {
                    return zn(Mj, {
                      id: "BrowseColumn",
                      plinko: !0,
                      announce: "All Trending - Week",
                      get y() {
                        return r();
                      },
                      scroll: "none",
                      get style() {
                        return BW.Column;
                      },
                      get children() {
                        return zn(bt, {
                          get each() {
                            return u().pages();
                          },
                          children: function children(e, t) {
                            return zn(DW, {
                              get autofocus() {
                                return l(t());
                              },
                              items: e,
                              width: 1620,
                              onFocus: h,
                              onEnter: f
                            });
                          }
                        });
                      }
                    });
                  }
                })];
              }
            });
          },
          dY = function dY() {
            return e = Dn("node"), Wn(e, "style", {
              width: 1920,
              height: 1080,
              color: 868483072
            }), e;
            var e;
          },
          hY = new URL("AppCoreExtensions-legacy-DXcEaW6c.js", S.meta.url).href,
          fY = xt(function () {
            return he(function () {
              return S["import"]("./Grid-legacy-tF0mgulz.js");
            }, void 0, S.meta.url);
          }),
          pY = xt(function () {
            return he(function () {
              return S["import"]("./Portal-legacy-DeFfS7e0.js");
            }, void 0, S.meta.url);
          }),
          vY = xt(function () {
            return he(function () {
              return S["import"]("./Text-legacy-D4U5aVlC.js");
            }, void 0, S.meta.url);
          }),
          gY = xt(function () {
            return he(function () {
              return S["import"]("./Create-legacy-B_kS4Xbr.js");
            }, void 0, S.meta.url);
          }),
          mY = xt(function () {
            return he(function () {
              return S["import"]("./Viewport-legacy-B6Dh_6XQ.js");
            }, void 0, S.meta.url);
          }),
          xY = xt(function () {
            return he(function () {
              return S["import"]("./Buttons-legacy-BI_LUzCe.js");
            }, void 0, S.meta.url);
          }),
          yY = xt(function () {
            return he(function () {
              return S["import"]("./Flex-legacy-B4BpxRcr.js");
            }, void 0, S.meta.url);
          }),
          bY = xt(function () {
            return he(function () {
              return S["import"]("./FlexSize-legacy-B_s1ZkUE.js");
            }, void 0, S.meta.url);
          }),
          wY = xt(function () {
            return he(function () {
              return S["import"]("./FlexColumnSize-legacy-CoXVBNK0.js");
            }, void 0, S.meta.url);
          }),
          SY = xt(function () {
            return he(function () {
              return S["import"]("./FlexColumn-legacy-C800G2Vi.js");
            }, void 0, S.meta.url);
          }),
          AY = xt(function () {
            return he(function () {
              return S["import"]("./ButtonsMaterial-legacy-DHbFeEdb.js");
            }, void 0, S.meta.url);
          }),
          TY = xt(function () {
            return he(function () {
              return S["import"]("./SuperFlex-legacy-CWamIWKM.js");
            }, void 0, S.meta.url);
          }),
          CY = xt(function () {
            return he(function () {
              return S["import"]("./Entity-legacy-DRGzRMoV.js");
            }, void 0, S.meta.url);
          }),
          RY = xt(function () {
            return he(function () {
              return S["import"]("./People-legacy-Dvirv4-w.js");
            }, void 0, S.meta.url);
          });
        un.debug = !1, un.animationsEnabled = !0, un.fontSettings.fontFamily = "Ubuntu", un.fontSettings.color = Qn("#f6f6f6"), un.fontSettings.fontSize = 32, un.rendererOptions = {
          coreExtensionModule: hY,
          fpsUpdateInterval: 200,
          enableInspector: !0,
          deviceLogicalPixelRatio: window.innerHeight / 1080
        }, Pn(function () {
          return zn(Jz, {
            root: function root(e) {
              return zn(NW, e);
            },
            get children() {
              return [zn(Xz, {
                path: "",
                component: cY
              }), zn(Xz, {
                path: "examples",
                component: pY
              }), zn(Xz, {
                path: "browse/:filter",
                component: cY
              }), zn(Xz, {
                path: "grid",
                component: fY
              }), zn(Xz, {
                path: "text",
                component: vY
              }), zn(Xz, {
                path: "buttons",
                component: xY
              }), zn(Xz, {
                path: "flex",
                component: yY
              }), zn(Xz, {
                path: "create",
                component: gY
              }), zn(Xz, {
                path: "viewport",
                component: mY
              }), zn(Xz, {
                path: "flexsize",
                component: bY
              }), zn(Xz, {
                path: "flexcolumnsize",
                component: wY
              }), zn(Xz, {
                path: "flexcolumn",
                component: SY
              }), zn(Xz, {
                path: "superflex",
                component: TY
              }), zn(Xz, {
                path: "buttonsmaterial",
                component: AY
              }), zn(Xz, {
                path: "entity/people/:id",
                component: RY
              }), zn(Xz, {
                path: "entity/:type/:id",
                component: CY
              }), zn(Xz, {
                path: "*all",
                component: dY
              })];
            }
          });
        });
      }
    };
  });
}();