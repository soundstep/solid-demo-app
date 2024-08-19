function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
    d = ["defaultTone"],
    h = ["defaultTone"],
    u = ["defaultTone"],
    c = ["defaultTone"],
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
    function d(e, t, r) {
      return Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), e[t];
    }
    try {
      d({}, "");
    } catch (e) {
      d = function d(e, t, r) {
        return e[t] = r;
      };
    }
    function h(e, t, r, n) {
      var i = t && t.prototype instanceof m ? t : m,
        a = Object.create(i.prototype),
        s = new N(n || []);
      return o(a, "_invoke", {
        value: _(e, r, s)
      }), a;
    }
    function u(e, t, r) {
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
    t.wrap = h;
    var c = "suspendedStart",
      f = "suspendedYield",
      p = "executing",
      v = "completed",
      g = {};
    function m() {}
    function x() {}
    function b() {}
    var w = {};
    d(w, a, function () {
      return this;
    });
    var A = Object.getPrototypeOf,
      S = A && A(A(E([])));
    S && S !== r && n.call(S, a) && (w = S);
    var T = b.prototype = m.prototype = Object.create(w);
    function C(e) {
      ["next", "throw", "return"].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function R(e, t) {
      function r(o, i, a, s) {
        var l = u(e[o], e, i);
        if ("throw" !== l.type) {
          var d = l.arg,
            h = d.value;
          return h && "object" == _typeof(h) && n.call(h, "__await") ? t.resolve(h.__await).then(function (e) {
            r("next", e, a, s);
          }, function (e) {
            r("throw", e, a, s);
          }) : t.resolve(h).then(function (e) {
            d.value = e, a(d);
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
    function _(t, r, n) {
      var o = c;
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
            var l = k(s, n);
            if (l) {
              if (l === g) continue;
              return l;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === c) throw o = v, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = p;
          var d = u(t, r, n);
          if ("normal" === d.type) {
            if (o = n.done ? v : f, d.arg === g) continue;
            return {
              value: d.arg,
              done: n.done
            };
          }
          "throw" === d.type && (o = v, n.method = "throw", n.arg = d.arg);
        }
      };
    }
    function k(t, r) {
      var n = r.method,
        o = t.iterator[n];
      if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, k(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
      var i = u(o, t.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, g;
      var a = i.arg;
      return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
    }
    function I(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }
    function B(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t;
    }
    function N(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(I, this), this.reset(!0);
    }
    function E(t) {
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
    }), x.displayName = d(b, l, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name));
    }, t.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, d(e, l, "GeneratorFunction")), e.prototype = Object.create(T), e;
    }, t.awrap = function (e) {
      return {
        __await: e
      };
    }, C(R.prototype), d(R.prototype, s, function () {
      return this;
    }), t.AsyncIterator = R, t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new R(h(e, r, n, o), i);
      return t.isGeneratorFunction(r) ? a : a.next().then(function (e) {
        return e.done ? e.value : a.next();
      });
    }, C(T), d(T, l, "Generator"), d(T, a, function () {
      return this;
    }), d(T, "toString", function () {
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
    }, t.values = E, N.prototype = {
      constructor: N,
      reset: function reset(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
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
              d = n.call(a, "finallyLoc");
            if (l && d) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (l) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!d) throw Error("try statement without catch or finally");
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
          if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), B(r), g;
        }
      },
      catch: function _catch(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.tryLoc === e) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              B(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(t, r, n) {
        return this.delegate = {
          iterator: E(t),
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
    } catch (d) {
      return void r(d);
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
  function A(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? A(Object(r), !0).forEach(function (t) {
        T(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function (t) {
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
          d = !1;
        try {
          if (i = (r = r.call(e)).next, 0 === t) {
            if (Object(r) !== r) return;
            l = !1;
          } else for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
        } catch (e) {
          d = !0, o = e;
        } finally {
          try {
            if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return;
          } finally {
            if (d) throw o;
          }
        }
        return s;
      }
    }(e, t) || _(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function R(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = _(e)) || t && e && "number" == typeof e.length) {
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
          a || null == r.return || r.return();
        } finally {
          if (s) throw i;
        }
      }
    };
  }
  function _(e, t) {
    if (e) {
      if ("string" == typeof e) return k(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? k(e, t) : void 0;
    }
  }
  function k(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  System.register(["./CoreExtension-legacy-BFxy46Zv.js"], function (b, A) {
    "use strict";

    var _, k, I, B, N, E, F, L, z, M, P, O, D, U, W, Y, H, j, Q, K, $, X, G, V, Z, q, J, ee, te, re, ne, oe, ie, ae;
    return {
      setters: [function (e) {
        _ = e.a, k = e.i, I = e.T, B = e.g, N = e.c, E = e.E, F = e.b, L = e.d, z = e.e, M = e.f, P = e.m, O = e.W, D = e.C, U = e.h, W = e.j, Y = e.k, H = e.S, j = e.l, Q = e.B, K = e.n, $ = e.o, X = e.p, G = e.q, V = e.r, Z = e.s, q = e.t, J = e.u, ee = e.v, te = e.w, re = e.R, ne = e.x, oe = e.y, ie = e.z, ae = e.A;
      }],
      execute: function execute() {
        var se,
          le,
          de,
          he = y().mark(xr),
          ue = document.createElement("style");
        ue.textContent = "html,body,*{padding:0;margin:0}video{position:absolute;top:0;left:0;z-index:2;outline:none}.center-element{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n", document.head.appendChild(ue), b({
          A: Al,
          F: bt,
          G: gl,
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
            return Me(function (e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var n,
                o = [],
                i = [],
                a = [],
                s = [],
                l = 0;
              return Ye(function () {
                return ut(a);
              }), function () {
                var d = e() || [];
                return d[xe], Ue(function () {
                  if (0 === d.length) return 0 !== l && (ut(a), a = [], o = [], i = [], l = 0, s = []), r.fallback && (o = [ht], i[0] = Ne(function (e) {
                    return a[0] = e, r.fallback();
                  }), l = 1), i;
                  for (o[0] === ht && (a[0](), a = [], o = [], i = [], l = 0), n = 0; n < d.length; n++) n < o.length && o[n] !== d[n] ? s[n](function () {
                    return d[n];
                  }) : n >= o.length && (i[n] = Ne(h));
                  for (; n < o.length; n++) a[n]();
                  return l = s.length = a.length = d.length, o = d.slice(0), i = i.slice(0, l);
                });
                function h(e) {
                  a[n] = e;
                  var r = C(Ee(d[n]), 2),
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
          a: Pe,
          b: Fe,
          c: Ee,
          d: De,
          e: Oe,
          f: ze,
          g: function g(e) {
            ze(function () {
              return Ue(e);
            });
          },
          h: Qn,
          l: Xe,
          n: Ye,
          o: We,
          w: Wo,
          z: Rl
        });
        var ce = function ce(e, t, r) {
            var n = Promise.resolve();
            return n.then(function () {
              return e();
            }).catch(function (e) {
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
          Ae = 2,
          Se = {
            owned: null,
            cleanups: null,
            context: null,
            owner: null
          },
          Te = {},
          Ce = null,
          Re = null,
          _e = null,
          ke = null,
          Ie = null,
          Be = 0;
        function Ne(e, t) {
          var r = _e,
            n = Ce,
            o = 0 === e.length,
            i = void 0 === t ? n : t,
            a = o ? Se : {
              owned: null,
              cleanups: null,
              context: i ? i.context : null,
              owner: i
            },
            s = o ? e : function () {
              return e(function () {
                return Ue(function () {
                  return it(a);
                });
              });
            };
          Ce = a, _e = null;
          try {
            return et(s, !0);
          } finally {
            _e = r, Ce = n;
          }
        }
        function Ee(e, t) {
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
        function Fe(e, t, r) {
          Ze(qe(e, t, !0, we));
        }
        function Le(e, t, r) {
          Ze(qe(e, t, !1, we));
        }
        function ze(e, t, r) {
          be = rt;
          var n = qe(e, t, !1, we);
          r && r.render || (n.user = !0), Ie ? Ie.push(n) : Ze(n);
        }
        function Me(e, t, r) {
          r = r ? Object.assign({}, ye, r) : ye;
          var n = qe(e, t, !0, 0);
          return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Ze(n), Ge.bind(n);
        }
        function Pe(e, t, r) {
          var n, o, i;
          2 === arguments.length && "object" == _typeof(t) || 1 === arguments.length ? (n = !0, o = e, i = t || {}) : (n = e, o = t, i = r || {});
          var a,
            s = null,
            l = Te,
            d = null,
            h = !1,
            u = "initialValue" in i,
            c = "function" == typeof n && Me(n),
            f = new Set(),
            p = C((i.storage || Ee)(i.initialValue), 2),
            v = p[0],
            g = p[1],
            m = C(Ee(void 0), 2),
            x = m[0],
            y = m[1],
            b = C(Ee(void 0, {
              equals: !1
            }), 2),
            w = b[0],
            A = b[1],
            S = C(Ee(u ? "ready" : "unresolved"), 2),
            T = S[0],
            _ = S[1];
          fe.context && (d = "".concat(fe.context.id).concat(fe.context.count++), "initial" === i.ssrLoadFrom ? l = i.initialValue : fe.load && (a = fe.load(d)) && (l = a));
          function k(e, t, r, n) {
            return s === e && (s = null, void 0 !== n && (u = !0), e !== l && t !== l || !i.onHydrated || queueMicrotask(function () {
              return i.onHydrated(n, {
                value: t
              });
            }), l = Te, function (e, t) {
              et(function () {
                void 0 === t && g(function () {
                  return e;
                }), _(void 0 !== t ? "errored" : u ? "ready" : "unresolved"), y(t);
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
          function I() {
            var e = ve,
              t = v(),
              r = x();
            if (void 0 !== r && !s) throw r;
            return _e && !_e.user && e && Fe(function () {
              w(), s && (e.resolved || f.has(e) || (e.increment(), f.add(e)));
            }), t;
          }
          function B() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            if (!1 === e || !h) {
              h = !1;
              var t = c ? c() : n;
              if (null != t && !1 !== t) {
                var r = l !== Te ? l : Ue(function () {
                  return o(t, {
                    value: v(),
                    refetching: e
                  });
                });
                return function (e) {
                  return e && "object" == _typeof(e) && "then" in e;
                }(r) ? (s = r, "value" in r ? ("success" === r.status ? k(s, r.value, void 0, t) : k(s, void 0, void 0, t), r) : (h = !0, queueMicrotask(function () {
                  return h = !1;
                }), et(function () {
                  _(u ? "refreshing" : "pending"), A();
                }, !1), r.then(function (e) {
                  return k(r, e, void 0, t);
                }, function (e) {
                  return k(r, void 0, at(e), t);
                }))) : (k(s, r, void 0, t), r);
              }
              k(s, Ue(v));
            }
          }
          return Object.defineProperties(I, {
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
                if (!u) return I();
                var e = x();
                if (e && !s) throw e;
                return v();
              }
            }
          }), c ? Fe(function () {
            return B(!1);
          }) : B(!1), [I, {
            refetch: B,
            mutate: g
          }];
        }
        function Oe(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ge;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var n = new Map(),
            o = qe(function (r) {
              var o,
                i = e(),
                a = R(n.entries());
              try {
                for (a.s(); !(o = a.n()).done;) {
                  var s = C(o.value, 2),
                    l = s[0],
                    d = s[1];
                  if (t(l, i) !== t(l, r)) {
                    var h,
                      u = R(d.values());
                    try {
                      for (u.s(); !(h = u.n()).done;) {
                        var c = h.value;
                        c.state = we, c.pure ? ke.push(c) : Ie.push(c);
                      }
                    } catch (f) {
                      u.e(f);
                    } finally {
                      u.f();
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
          return Ze(o), function (e) {
            var r,
              i = _e;
            i && ((r = n.get(e)) ? r.add(i) : n.set(e, r = new Set([i])), Ye(function () {
              r.delete(i), !r.size && n.delete(e);
            }));
            return t(e, o.value);
          };
        }
        function De(e) {
          return et(e, !1);
        }
        function Ue(e) {
          if (null === _e) return e();
          var t = _e;
          _e = null;
          try {
            return e();
          } finally {
            _e = t;
          }
        }
        function We(e, t, r) {
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
            var l = Ue(function () {
              return t(a, n, r);
            });
            return n = a, l;
          };
        }
        function Ye(e) {
          return null === Ce || (null === Ce.cleanups ? Ce.cleanups = [e] : Ce.cleanups.push(e)), e;
        }
        function He() {
          return Ce;
        }
        function je(e, t) {
          var r = Ce,
            n = _e;
          Ce = e, _e = null;
          try {
            return et(t, !0);
          } catch (o) {
            st(o);
          } finally {
            Ce = r, _e = n;
          }
        }
        function Qe(e) {
          var t = _e,
            r = Ce;
          return Promise.resolve().then(function () {
            _e = t, Ce = r, et(e, !1), _e = Ce = null;
          });
        }
        function Ke(e, t) {
          var r = Symbol("context");
          return {
            id: r,
            Provider: dt(r),
            defaultValue: e
          };
        }
        function $e(e) {
          return Ce && Ce.context && void 0 !== Ce.context[e.id] ? Ce.context[e.id] : e.defaultValue;
        }
        function Xe(e) {
          var t = Me(e),
            r = Me(function () {
              return lt(t());
            });
          return r.toArray = function () {
            var e = r();
            return Array.isArray(e) ? e : null != e ? [e] : [];
          }, r;
        }
        function Ge() {
          var _this = this;
          if (this.sources && this.state) if (this.state === we) Ze(this);else {
            var e = ke;
            ke = null, et(function () {
              return nt(_this);
            }, !1), ke = e;
          }
          if (_e) {
            var t = this.observers ? this.observers.length : 0;
            _e.sources ? (_e.sources.push(this), _e.sourceSlots.push(t)) : (_e.sources = [this], _e.sourceSlots = [t]), this.observers ? (this.observers.push(_e), this.observerSlots.push(_e.sources.length - 1)) : (this.observers = [_e], this.observerSlots = [_e.sources.length - 1]);
          }
          return this.value;
        }
        function Ve(e, t, r) {
          var n = e.value;
          return e.comparator && e.comparator(n, t) || (e.value = t, e.observers && e.observers.length && et(function () {
            for (var t = 0; t < e.observers.length; t += 1) {
              var r = e.observers[t],
                n = Re && Re.running;
              n && Re.disposed.has(r), (n ? r.tState : r.state) || (r.pure ? ke.push(r) : Ie.push(r), r.observers && ot(r)), n || (r.state = we);
            }
            if (ke.length > 1e6) throw ke = [], new Error();
          }, !1)), t;
        }
        function Ze(e) {
          if (e.fn) {
            it(e);
            var t = Be;
            !function (e, t, r) {
              var n,
                o = Ce,
                i = _e;
              _e = Ce = e;
              try {
                n = e.fn(t);
              } catch (a) {
                return e.pure && (e.state = we, e.owned && e.owned.forEach(it), e.owned = null), e.updatedAt = r + 1, st(a);
              } finally {
                _e = i, Ce = o;
              }
              (!e.updatedAt || e.updatedAt <= r) && (null != e.updatedAt && "observers" in e ? Ve(e, n) : e.value = n, e.updatedAt = r);
            }(e, e.value, t);
          }
        }
        function qe(e, t, r) {
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
          return null === Ce || Ce !== Se && (Ce.owned ? Ce.owned.push(i) : Ce.owned = [i]), i;
        }
        function Je(e) {
          if (0 !== e.state) {
            if (e.state === Ae) return nt(e);
            if (e.suspense && Ue(e.suspense.inFallback)) return e.suspense.effects.push(e);
            for (var t = [e]; (e = e.owner) && (!e.updatedAt || e.updatedAt < Be);) e.state && t.push(e);
            for (var r = t.length - 1; r >= 0; r--) if ((e = t[r]).state === we) Ze(e);else if (e.state === Ae) {
              var n = ke;
              ke = null, et(function () {
                return nt(e, t[0]);
              }, !1), ke = n;
            }
          }
        }
        function et(e, t) {
          if (ke) return e();
          var r = !1;
          t || (ke = []), Ie ? r = !0 : Ie = [], Be++;
          try {
            var n = e();
            return function (e) {
              ke && (tt(ke), ke = null);
              if (e) return;
              var t = Ie;
              Ie = null, t.length && et(function () {
                return be(t);
              }, !1);
            }(r), n;
          } catch (o) {
            r || (Ie = null), ke = null, st(o);
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
              o === we ? n !== t && (!n.updatedAt || n.updatedAt < Be) && Je(n) : o === Ae && nt(n, t);
            }
          }
        }
        function ot(e) {
          for (var t = 0; t < e.observers.length; t += 1) {
            var r = e.observers[t];
            r.state || (r.state = Ae, r.pure ? ke.push(r) : Ie.push(r), r.observers && ot(r));
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
        function dt(e, t) {
          return function (t) {
            var r;
            return Le(function () {
              return r = Ue(function () {
                return Ce.context = S(S({}, Ce.context), {}, _defineProperty({}, e, t.value)), Xe(function () {
                  return t.children;
                });
              });
            }, void 0), r;
          };
        }
        var ht = Symbol("fallback");
        function ut(e) {
          for (var t = 0; t < e.length; t++) e[t]();
        }
        function ct(e, t) {
          return Ue(function () {
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
            t = t || !!n && me in n, e[r] = "function" == typeof n ? (t = !0, Me(n)) : n;
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
            if (s) for (var l = Object.getOwnPropertyNames(s), d = function d() {
                var e = l[h];
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
              }, h = l.length - 1; h >= 0; h--) d();
          }
          for (var u = {}, c = Object.keys(i), f = c.length - 1; f >= 0; f--) {
            var p = c[f],
              v = i[p];
            v && v.get ? Object.defineProperty(u, p, v) : u[p] = v ? v.value : void 0;
          }
          return u;
        }
        function xt(e) {
          var t,
            r,
            n = function n(_n3) {
              var o,
                i = fe.context;
              if (i) {
                var a = C(Ee(), 2),
                  s = a[0],
                  l = a[1];
                fe.count || (fe.count = 0), fe.count++, (r || (r = e())).then(function (e) {
                  pe(i), fe.count--, l(function () {
                    return e.default;
                  }), pe();
                }), t = s;
              } else if (!t) {
                var d = C(Pe(function () {
                  return (r || (r = e())).then(function (e) {
                    return e.default;
                  });
                }), 1)[0];
                t = d;
              }
              return Me(function () {
                return (o = t()) && Ue(function () {
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
                return e.default;
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
          return Me(function (e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var n = [],
              o = [],
              i = [],
              a = 0,
              s = t.length > 1 ? [] : null;
            return Ye(function () {
              return ut(i);
            }), function () {
              var l,
                d,
                h = e() || [];
              return h[xe], Ue(function () {
                var e,
                  t,
                  c,
                  f,
                  p,
                  v,
                  g,
                  m,
                  x,
                  y = h.length;
                if (0 === y) 0 !== a && (ut(i), i = [], n = [], o = [], a = 0, s && (s = [])), r.fallback && (n = [ht], o[0] = Ne(function (e) {
                  return i[0] = e, r.fallback();
                }), a = 1);else if (0 === a) {
                  for (o = new Array(y), d = 0; d < y; d++) n[d] = h[d], o[d] = Ne(u);
                  a = y;
                } else {
                  for (c = new Array(y), f = new Array(y), s && (p = new Array(y)), v = 0, g = Math.min(a, y); v < g && n[v] === h[v]; v++);
                  for (g = a - 1, m = y - 1; g >= v && m >= v && n[g] === h[m]; g--, m--) c[m] = o[g], f[m] = i[g], s && (p[m] = s[g]);
                  for (e = new Map(), t = new Array(m + 1), d = m; d >= v; d--) x = h[d], l = e.get(x), t[d] = void 0 === l ? -1 : l, e.set(x, d);
                  for (l = v; l <= g; l++) x = n[l], void 0 !== (d = e.get(x)) && -1 !== d ? (c[d] = o[l], f[d] = i[l], s && (p[d] = s[l]), d = t[d], e.set(x, d)) : i[l]();
                  for (d = v; d < y; d++) d in c ? (o[d] = c[d], i[d] = f[d], s && (s[d] = p[d], s[d](d))) : o[d] = Ne(u);
                  o = o.slice(0, a = y), n = h.slice(0);
                }
                return o;
              });
              function u(e) {
                if (i[d] = e, s) {
                  var r = C(Ee(d), 2),
                    n = r[0],
                    o = r[1];
                  return s[d] = o, t(h[d], n);
                }
                return t(h[d]);
              }
            };
          }(function () {
            return e.each;
          }, e.children, t || void 0));
        }
        function wt(e) {
          var t = e.keyed,
            r = Me(function () {
              return e.when;
            }, void 0, {
              equals: function equals(e, r) {
                return t ? e === r : !e == !r;
              }
            });
          return Me(function () {
            var n = r();
            if (n) {
              var o = e.children;
              return "function" == typeof o && o.length > 0 ? Ue(function () {
                return o(t ? n : function () {
                  if (!Ue(r)) throw yt("Show");
                  return e.when;
                });
              }) : o;
            }
            return e.fallback;
          }, void 0, void 0);
        }
        var At = C(Ee(void 0), 2),
          St = At[0],
          Tt = At[1];
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
                  t - o.lastUpdate > r && (_this2.releaseCallback(o.id), _this2.textureMap.delete(o.id), _this2.zeroReferenceTextureSet.delete(o));
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
              if (_(r, "Texture must have an id to be registered"), !this.textureMap.has(r)) {
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
              _(r, "Texture must have an id to be registered");
              var n = this.textureMap.get(r);
              n || (this.registerTexture(e), n = this.textureMap.get(r)), _(n, "Texture must have been registered"), "SubTexture" === e.txType && this.incrementTextureRefCount(e.props.texture), n.nodeRefCount++, n.lastUpdate = Date.now(), this.zeroReferenceTextureSet.has(n) && this.zeroReferenceTextureSet.delete(n);
            }
          }, {
            key: "decrementTextureRefCount",
            value: function decrementTextureRefCount(e) {
              var t,
                r = null === (t = e.options) || void 0 === t ? void 0 : t.id;
              _(r, "Texture must have an id to be registered");
              var n = this.textureMap.get(r);
              _(n, "Texture must have been registered"), n.nodeRefCount--, n.lastUpdate = Date.now(), 0 === n.nodeRefCount && this.zeroReferenceTextureSet.add(n), "SubTexture" === e.txType && this.decrementTextureRefCount(e.props.texture);
            }
          }]);
        }(Ct);
        var _t = /*#__PURE__*/function (_Ct2) {
          function _t(e) {
            var _this3;
            _classCallCheck(this, _t);
            _this3 = _callSuper(this, _t, [e]), T(_assertThisInitialized(_this3), "registry", void 0), _this3.registry = new FinalizationRegistry(e);
            return _this3;
          }
          _inherits(_t, _Ct2);
          return _createClass(_t, [{
            key: "registerTexture",
            value: function registerTexture(e) {
              var t, r;
              _(null === (t = e.options) || void 0 === t ? void 0 : t.id, "Texture must have an ID to be registered"), this.registry.register(e, null === (r = e.options) || void 0 === r ? void 0 : r.id);
            }
          }, {
            key: "incrementTextureRefCount",
            value: function incrementTextureRefCount() {}
          }, {
            key: "decrementTextureRefCount",
            value: function decrementTextureRefCount() {}
          }]);
        }(Ct);
        var kt = {
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
                value: It(e)
              };
            }
          },
          It = function It(e) {
            return "rgba(".concat(e >> 24 & 255, ",").concat(e >> 16 & 255, ",").concat(e >> 8 & 255, ",").concat((255 & e) / 255, ")");
          },
          Bt = {
            id: "id"
          };
        var Nt = /*#__PURE__*/function () {
          function Nt(e, t) {
            _classCallCheck(this, Nt);
            var r, n, o, i, a, s;
            if (T(this, "root", null), T(this, "canvas", null), T(this, "height", 1080), T(this, "width", 1920), T(this, "scaleX", 1), T(this, "scaleY", 1), !k()) {
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
                  if (kt[t]) {
                    var n,
                      o = null === (n = kt[t]) || void 0 === n ? void 0 : n.call(kt, r);
                    if (null === o) return;
                    return "string" == typeof o ? void e.style.setProperty(o, String(r)) : void ("object" == _typeof(o) && e.style.setProperty(o.prop, o.value));
                  }
                  if (Bt[t]) e.setAttribute(String(kt[t]), String(r));else if ("data" !== t) ;else for (var i in r) {
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
                d = r.y,
                h = r.width,
                u = r.height,
                c = r.alpha,
                f = void 0 === c ? 1 : c,
                p = r.rotation,
                v = void 0 === p ? 0 : p,
                g = r.scale,
                m = void 0 === g ? 1 : g,
                x = r.color;
              setTimeout(function () {
                setTimeout(function () {
                  e.style.top = "".concat(d, "px"), e.style.left = "".concat(l, "px"), e.style.width = "".concat(h, "px"), e.style.height = "".concat(u, "px"), e.style.opacity = "".concat(f), e.style.rotate = "".concat(v, "rad"), e.style.scale = "".concat(m), e.style.color = It(x);
                }, i);
              }, s);
            }
          }]);
        }();
        var Et = /*#__PURE__*/function () {
          function Et(e) {
            _classCallCheck(this, Et);
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
            for (var d in l) {
              var h = l[d],
                u = h.type,
                c = "".concat(t, "_").concat(d),
                f = "";
              h.size && (f = "[".concat(h.size(o), "]")), a.push(c), s += "uniform ".concat(u, " ").concat(c).concat(f, ";"), i[d] = {
                name: c,
                uniform: l[d].method
              };
            }
            this.passParameters = a.join(","), this.declaredUniforms = s, this.uniformInfo = i;
          }
          return _createClass(Et, null, [{
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
        T(Et, "uniforms", {}), T(Et, "methods", void 0), T(Et, "onShaderMask", void 0), T(Et, "onColorize", void 0), T(Et, "onEffectMask", void 0);
        var Ft = {
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
        var Lt = /*#__PURE__*/function () {
          function Lt(e) {
            var _this5 = this;
            _classCallCheck(this, Lt);
            T(this, "stage", void 0), T(this, "set", void 0), this.stage = e;
            var t = S(S({}, Ft), this.getPropertySetters());
            this.set = Object.freeze(Object.fromEntries(Object.entries(t).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                e = _ref2[0],
                t = _ref2[1];
              return [e, function (r, n) {
                r.props[e] !== n && (t(r, n), _this5.stage.requestRender());
              }];
            })));
          }
          return _createClass(Lt, [{
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
        var zt = /*#__PURE__*/function (_I) {
          function zt(e, t, r) {
            var _this7;
            _classCallCheck(this, zt);
            _this7 = _callSuper(this, zt, [e, t]), T(_assertThisInitialized(_this7), "fontFace", void 0), T(_assertThisInitialized(_this7), "fontUrl", void 0);
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
            }).catch(console.error), _this7.fontFace = a, _this7.fontUrl = r;
            return _this7;
          }
          _inherits(zt, _I);
          return _createClass(zt);
        }(I);
        function Mt(e, t, r, n, o) {
          return r * (n - 1) + ("bottom" !== e ? .5 * t : 0) + Math.max(r, t) + (o || 0);
        }
        var Pt = /*#__PURE__*/function () {
          function Pt(e, t) {
            _classCallCheck(this, Pt);
            T(this, "_canvas", void 0), T(this, "_context", void 0), T(this, "_settings", void 0), T(this, "renderInfo", void 0), this._canvas = e, this._context = t, this._settings = this.mergeDefaults({});
          }
          return _createClass(Pt, [{
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
                  if (!document.fonts.check(e, this._settings.text)) return document.fonts.load(e, this._settings.text).catch(function (t) {
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
                d = this._settings.wordWrapWidth * t,
                h = this._settings.cutSx * t,
                u = this._settings.cutEx * t,
                c = this._settings.cutSy * t,
                f = this._settings.cutEy * t,
                p = (this._settings.letterSpacing || 0) * t,
                v = this._settings.textIndent * t;
              this.setFontProperties();
              var g,
                m = s || 2048 / this.getPrecision(),
                x = m - r;
              if (x < 10 && (m += 10 - x, x = 10), d || (d = x), this._settings.textOverflow && !this._settings.wordWrap) {
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
                this._settings.text = this.wrapWord(this._settings.text, d - v, y);
              }
              if (this._settings.wordWrap) g = this.wrapText(this._settings.text, d, p, v);else for (var b = (g = {
                  l: this._settings.text.split(/(?:\r\n|\r|\n)/),
                  n: []
                }).l.length, w = 0; w < b - 1; w++) g.n.push(w);
              var A = g.l;
              if (this._settings.maxLines && A.length > this._settings.maxLines) {
                var S,
                  T = A.slice(0, this._settings.maxLines),
                  C = null;
                if (this._settings.overflowSuffix) {
                  var R = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0,
                    _ = this.wrapText(T[T.length - 1], d - R, p, v);
                  T[T.length - 1] = "".concat(_.l[0]).concat(this._settings.overflowSuffix), C = [_.l.length > 1 ? _.l[1] : ""];
                } else C = [""];
                var k = A.length,
                  I = 0,
                  B = g.n.length;
                for (S = this._settings.maxLines; S < k; S++) C[I] += "".concat(C[I] ? " " : "").concat(A[S]), S + 1 < B && g.n[S + 1] && I++;
                e.remainingText = C.join("\n"), e.moreTextLines = !0, A = T;
              } else e.moreTextLines = !1, e.remainingText = "";
              for (var N, E = 0, F = [], L = 0; L < A.length; L++) {
                var z = this.measureText(A[L], p) + (0 === L ? v : 0);
                F.push(z), E = Math.max(E, z);
              }
              return e.lineWidths = F, s || (m = E + r + n, x = E), a = a || o, N = l || Mt(this._settings.textBaseline, o, a, A.length, i), null === i && (i = o), e.w = m, e.h = N, e.lines = A, e.precision = t, m || (m = 1), N || (N = 1), (h || u) && (m = Math.min(m, u - h)), (c || f) && (N = Math.min(N, f - c)), e.width = m, e.innerWidth = x, e.height = N, e.fontSize = o, e.cutSx = h, e.cutSy = c, e.cutEx = u, e.cutEy = f, e.lineHeight = a, e.lineWidths = F, e.offsetY = i, e.paddingLeft = r, e.paddingRight = n, e.letterSpacing = p, e.textIndent = v, e;
            }
          }, {
            key: "draw",
            value: function draw(e, t) {
              var r,
                n,
                o = this.getPrecision(),
                i = (null == t ? void 0 : t.lines) || e.lines,
                a = (null == t ? void 0 : t.lineWidths) || e.lineWidths,
                s = t ? Mt(this._settings.textBaseline, e.fontSize, e.lineHeight, t.lines.length, null === this._settings.offsetY ? null : this._settings.offsetY * o) : e.height;
              this._canvas.width = Math.min(Math.ceil(e.width + this._settings.textRenderIssueMargin), 2048), this._canvas.height = Math.min(Math.ceil(s), 2048), this.setFontProperties(), e.fontSize >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (e.cutSx || e.cutSy) && this._context.translate(-e.cutSx, -e.cutSy);
              for (var l = [], d = 0, h = i.length; d < h; d++) r = 0 === d ? e.textIndent : 0, n = d * e.lineHeight + e.offsetY, "middle" == this._settings.verticalAlign ? n += (e.lineHeight - e.fontSize) / 2 : "bottom" == this._settings.verticalAlign && (n += e.lineHeight - e.fontSize), "right" === this._settings.textAlign ? r += e.innerWidth - a[d] : "center" === this._settings.textAlign && (r += (e.innerWidth - a[d]) / 2), r += e.paddingLeft, l.push({
                text: i[d],
                x: r,
                y: n,
                w: a[d]
              });
              if (this._settings.highlight) {
                var u = this._settings.highlightColor,
                  c = this._settings.highlightHeight * o || 1.5 * e.fontSize,
                  f = this._settings.highlightOffset * o,
                  p = null !== this._settings.highlightPaddingLeft ? this._settings.highlightPaddingLeft * o : e.paddingLeft,
                  v = null !== this._settings.highlightPaddingRight ? this._settings.highlightPaddingRight * o : e.paddingRight;
                this._context.fillStyle = B(u);
                for (var g = 0; g < l.length; g++) {
                  var m = l[g];
                  this._context.fillRect(m.x - p, m.y - e.offsetY + f, m.w + v + p, c);
                }
              }
              var x = null;
              this._settings.shadow && (x = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = B(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * o, this._context.shadowOffsetY = this._settings.shadowOffsetY * o, this._context.shadowBlur = this._settings.shadowBlur * o), this._context.fillStyle = B(this._settings.textColor);
              for (var y = 0, b = l.length; y < b; y++) {
                var w = l[y];
                if (0 === e.letterSpacing) this._context.fillText(w.text, w.x, w.y);else for (var A = w.text.split(""), S = w.x, T = 0, C = A.length; T < C; T++) this._context.fillText(A[T], S, w.y), S += this.measureText(A[T], e.letterSpacing);
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
                for (var l = [], d = "", h = t - n, u = o[s].split(" "), c = 0; c < u.length; c++) {
                  var f = this.measureText(u[c], r),
                    p = f + this.measureText(" ", r);
                  0 === c || p > h ? (c > 0 && (l.push(d), d = ""), d += u[c], h = t - f - (0 === c ? n : 0)) : (h -= p, d += " ".concat(u[c]));
                }
                l.push(d), d = "", i = i.concat(l), s < o.length - 1 && a.push(i.length);
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
              return S({
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
        var Ot = "undefined" == typeof self ? globalThis : self,
          Dt = (null === (se = Ot.document) || void 0 === se ? void 0 : se.fonts) || Ot.fonts;
        var Ut = N(0, 0, 0, 0);
        var Wt = /*#__PURE__*/function (_Lt) {
          function Wt(e) {
            var _this10;
            _classCallCheck(this, Wt);
            _this10 = _callSuper(this, Wt, [e]), T(_assertThisInitialized(_this10), "canvas", void 0), T(_assertThisInitialized(_this10), "context", void 0), T(_assertThisInitialized(_this10), "rendererBounds", void 0), "undefined" != typeof OffscreenCanvas ? _this10.canvas = new OffscreenCanvas(0, 0) : _this10.canvas = document.createElement("canvas");
            var t = _this10.canvas.getContext("2d");
            t || (_this10.canvas = document.createElement("canvas"), t = _this10.canvas.getContext("2d")), _(t), _this10.context = t, _this10.rendererBounds = {
              x1: 0,
              y1: 0,
              x2: _this10.stage.options.appWidth,
              y2: _this10.stage.options.appHeight
            };
            return _this10;
          }
          _inherits(Wt, _Lt);
          return _createClass(Wt, [{
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
              return e instanceof zt;
            }
          }, {
            key: "addFontFace",
            value: function addFontFace(e) {
              _(e instanceof zt), Dt.add(e.fontFace);
            }
          }, {
            key: "createState",
            value: function createState(e) {
              return {
                props: e,
                status: "initialState",
                updateScheduled: !1,
                emitter: new E(),
                canvasPages: void 0,
                lightning2TextRenderer: new Pt(this.canvas, this.context),
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
                }, !e.fontInfo.loaded) return void Dt.load(t).then(this.onFontLoaded.bind(this, e, t)).catch(this.onFontLoadError.bind(this, e, t));
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
                    textColor: F(e.props.color),
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
                  d = s.y,
                  h = s.width,
                  u = s.height,
                  c = s.scrollY,
                  f = s.contain,
                  p = e.visibleWindow,
                  v = e.renderWindow,
                  g = e.canvasPages;
                if (!p.valid) {
                  var m = N(l, d, "none" !== f ? l + h : 1 / 0, "both" === f ? d + u : 1 / 0, Ut);
                  L(this.rendererBounds, m, p), p.valid = !0;
                }
                var x = p.y2 - p.y1,
                  y = Math.ceil(x / e.renderInfo.lineHeight);
                if (0 === x) return g = void 0, v = void 0, void this.setStatus(e, "loaded");
                if (v && g) {
                  var b = l + v.x1,
                    w = d - c + v.y1,
                    A = l + v.x2,
                    S = d - c + v.y2;
                  if (b <= p.x1 && A >= p.x2 && w <= p.y1 && S >= p.y2) return void this.setStatus(e, "loaded");
                  S < p.y2 ? (v.y1 += y * e.renderInfo.lineHeight, v.y2 += y * e.renderInfo.lineHeight, g.push(g.shift()), g[2].lineNumStart = g[1].lineNumStart + y, g[2].lineNumEnd = g[2].lineNumStart + y, g[2].valid = !1) : w > p.y1 && (v.y1 -= y * e.renderInfo.lineHeight, v.y2 -= y * e.renderInfo.lineHeight, g.unshift(g.pop()), g[0].lineNumStart = g[1].lineNumStart - y, g[0].lineNumEnd = g[0].lineNumStart + y, g[0].valid = !1);
                } else {
                  var T,
                    C,
                    _,
                    k = e.renderInfo.lineHeight * y,
                    I = Math.ceil(c / k),
                    B = I * y,
                    E = B - y,
                    z = B + y;
                  g = [{
                    texture: null === (T = g) || void 0 === T ? void 0 : T[0].texture,
                    lineNumStart: E,
                    lineNumEnd: E + y,
                    valid: !1
                  }, {
                    texture: null === (C = g) || void 0 === C ? void 0 : C[1].texture,
                    lineNumStart: B,
                    lineNumEnd: B + y,
                    valid: !1
                  }, {
                    texture: null === (_ = g) || void 0 === _ ? void 0 : _[2].texture,
                    lineNumStart: z,
                    lineNumEnd: z + y,
                    valid: !1
                  }], e.canvasPages = g;
                  var M = I * k;
                  v = {
                    x1: 0,
                    y1: M - k,
                    x2: h,
                    y2: M + 2 * k
                  };
                }
                e.renderWindow = v, performance.now();
                var P,
                  O = R(g);
                try {
                  for (O.s(); !(P = O.n()).done;) {
                    var D = P.value;
                    if (!D.valid) if (D.lineNumStart < 0) {
                      var U;
                      null === (U = D.texture) || void 0 === U || U.setRenderableOwner(e, !1), D.texture = this.stage.txManager.loadTexture("ImageTexture", {
                        src: ""
                      }), D.texture.setRenderableOwner(e, e.isRenderable), D.valid = !0;
                    } else {
                      var W;
                      if (e.lightning2TextRenderer.draw(e.renderInfo, {
                        lines: e.renderInfo.lines.slice(D.lineNumStart, D.lineNumEnd),
                        lineWidths: e.renderInfo.lineWidths.slice(D.lineNumStart, D.lineNumEnd)
                      }), 0 !== this.canvas.width && 0 !== this.canvas.height) null === (W = D.texture) || void 0 === W || W.setRenderableOwner(e, !1), D.texture = this.stage.txManager.loadTexture("ImageTexture", {
                        src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
                      }, {
                        preload: !0
                      }), D.texture.setRenderableOwner(e, e.isRenderable);
                      D.valid = !0;
                    }
                  }
                } catch (Y) {
                  O.e(Y);
                } finally {
                  O.f();
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
                d = void 0 === l ? 0 : l,
                h = e.renderWindow;
              if (i && h) {
                var u = e.props,
                  c = u.x,
                  f = u.y,
                  p = u.scrollY,
                  v = u.contain,
                  g = u.width,
                  m = u.height,
                  x = {
                    x: c,
                    y: f,
                    width: "none" !== v ? g : s,
                    height: "both" === v ? m : d
                  };
                z({
                  x: 0,
                  y: 0,
                  width: o.options.appWidth,
                  height: o.options.appHeight
                }, x), _(i, "canvasPages is not defined"), _(h, "renderWindow is not defined");
                var y,
                  b,
                  w,
                  A,
                  S,
                  T,
                  C = (h.y2 - h.y1) / 3,
                  R = e.props,
                  k = R.zIndex,
                  I = R.color,
                  B = n * M(I),
                  N = P(4294967295, B);
                if (i[0].valid) this.stage.renderer.addQuad({
                  alpha: B,
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
                  zIndex: k,
                  tx: t.tx,
                  ty: t.ty - p + h.y1,
                  ta: t.ta,
                  tb: t.tb,
                  tc: t.tc,
                  td: t.td
                });
                if (i[1].valid) this.stage.renderer.addQuad({
                  alpha: B,
                  clippingRect: r,
                  colorBl: N,
                  colorBr: N,
                  colorTl: N,
                  colorTr: N,
                  width: (null === (w = i[1].texture) || void 0 === w || null === (w = w.dimensions) || void 0 === w ? void 0 : w.width) || 0,
                  height: (null === (A = i[1].texture) || void 0 === A || null === (A = A.dimensions) || void 0 === A ? void 0 : A.height) || 0,
                  texture: i[1].texture,
                  textureOptions: {},
                  shader: null,
                  shaderProps: null,
                  zIndex: k,
                  tx: t.tx,
                  ty: t.ty - p + h.y1 + C,
                  ta: t.ta,
                  tb: t.tb,
                  tc: t.tc,
                  td: t.td
                });
                if (i[2].valid) this.stage.renderer.addQuad({
                  alpha: B,
                  clippingRect: r,
                  colorBl: N,
                  colorBr: N,
                  colorTl: N,
                  colorTr: N,
                  width: (null === (S = i[2].texture) || void 0 === S || null === (S = S.dimensions) || void 0 === S ? void 0 : S.width) || 0,
                  height: (null === (T = i[2].texture) || void 0 === T || null === (T = T.dimensions) || void 0 === T ? void 0 : T.height) || 0,
                  texture: i[2].texture,
                  textureOptions: {},
                  shader: null,
                  shaderProps: null,
                  zIndex: k,
                  tx: t.tx,
                  ty: t.ty - p + h.y1 + C + C,
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
              _superPropGet(Wt, "setIsRenderable", this, 3)([e, t]), null === (r = e.canvasPages) || void 0 === r || r.forEach(function (r) {
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
        }(Lt);
        var Yt = /*#__PURE__*/function (_O) {
          function Yt(e) {
            _classCallCheck(this, Yt);
            return _callSuper(this, Yt, [{
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
          _inherits(Yt, _O);
          return _createClass(Yt, [{
            key: "bindTextures",
            value: function bindTextures(e) {
              var t = this.glw;
              t.activeTexture(0), t.bindTexture(e[0].ctxTexture);
            }
          }]);
        }(O);
        T(Yt, "shaderSources", {
          vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
          fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
        });
        var Ht = /*#__PURE__*/function (_O2) {
          function Ht(e) {
            var _this12;
            _classCallCheck(this, Ht);
            _this12 = _callSuper(this, Ht, [{
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
          _inherits(Ht, _O2);
          return _createClass(Ht, [{
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
        }(O);
        function jt(e, t) {
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
        T(Ht, "shaderSources", {
          vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
          fragment: function fragment(e) {
            return "\n      #define txUnits ".concat(e, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(e, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(e).keys()).map(function (e) {
              return "\n          ".concat(0 !== e ? "else " : "", "if (idx == ").concat(e, ") {\n            return texture2D(textures[").concat(e, "], uv);\n          }\n        ");
            }).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ");
          }
        });
        var Qt = new Map(),
          Kt = function Kt(e, t) {
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
        var $t = /*#__PURE__*/function (_O3) {
          function $t(e, t, r) {
            var _this13;
            _classCallCheck(this, $t);
            var n = $t.createShader(t, r);
            _this13 = _callSuper(this, $t, [{
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
            }]), T(_assertThisInitialized(_this13), "effects", []), _this13.effects = n.effects, _this13.calculateProps = jt(_this13.calculateProps.bind(_assertThisInitialized(_this13)));
            return _this13;
          }
          _inherits($t, _O3);
          return _createClass($t, [{
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
                  var d = new n({
                    ref: "".concat(s).concat(1 === l ? "" : l),
                    target: s,
                    props: e.props
                  });
                  return o += d.declaredUniforms, i.push.apply(i, _toConsumableArray(Object.values(d.uniformInfo))), d;
                }),
                l = "";
              null == a || a.forEach(function (e) {
                var r,
                  o = t[e.type],
                  i = o.resolveDefaults(null !== (r = e.props) && void 0 !== r ? r : {}),
                  a = [];
                for (var s in o.methods) {
                  var d = s,
                    h = o.methods[s];
                  n[s] && n[s] !== h && (d = $t.resolveMethodDuplicate(s, h, n)), n[d] = h.replace("function", d), a.push({
                    m: s,
                    cm: d
                  });
                }
                var u = o.onShaderMask instanceof Function ? o.onShaderMask(i) : o.onShaderMask,
                  c = o.onColorize instanceof Function ? o.onColorize(i) : o.onColorize,
                  f = o.onEffectMask instanceof Function ? o.onEffectMask(i) : o.onEffectMask;
                a.forEach(function (e) {
                  var t = e.m,
                    r = e.cm,
                    n = new RegExp("\\$".concat(t), "g");
                  u && (u = u.replace(n, r)), c && (c = c.replace(n, r)), f && (f = f.replace(n, r));
                });
                var p = o.getMethodParameters(o.uniforms, i),
                  v = p.length > 0 ? ", ".concat(p) : "";
                u && (l += "\n        float fx_".concat(e.key, "_onShaderMask(float shaderMask ").concat(v, ") {\n          ").concat(u, "\n        }\n        ")), c && (l += "\n          vec4 fx_".concat(e.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(v, ") {\n            ").concat(c, "\n          }\n        ")), f && (l += "\n          vec4 fx_".concat(e.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(v, ") {\n            ").concat(f, "\n          }\n        "));
              });
              var d = "";
              for (var h in n) d += n[h];
              for (var u = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))", c = "\n\n    ", f = 0; f < s.length; f++) {
                var p = s[f],
                  v = p.passParameters.length > 0 ? ", ".concat(p.passParameters) : "",
                  g = t[p.name];
                g.onShaderMask && (c += "\n        shaderMask = fx_".concat(p.target, "_onShaderMask(shaderMask ").concat(v, ");\n        ")), g.onColorize && (c += "\n        maskColor = fx_".concat(p.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(v, ");\n        ")), g.onEffectMask && (u = "fx_".concat(p.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(v, ")"));
                var m = s[f + 1];
                (void 0 === m || t[m.name].onEffectMask) && (c += "\n          shaderColor = ".concat(u, ";\n        "));
              }
              return {
                effects: s,
                uniforms: i,
                fragment: $t.fragment(o, d, l, c),
                vertex: $t.vertex()
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
                effects: Kt(e.effects, t),
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
        }(O);
        T($t, "z$__type__Props", void 0), T($t, "vertex", function () {
          return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ";
        }), T($t, "fragment", function (e, t, r, n) {
          return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(e, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(t, "\n\n    ").concat(r, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(n, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  ");
        });
        var Xt = /*#__PURE__*/function (_O4) {
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
          _inherits(Xt, _O4);
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
        }(O);
        T(Xt, "z$__type__Props", void 0), T(Xt, "shaderSources", {
          vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
          fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
        });
        var Gt = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        var Vt = /*#__PURE__*/function (_O5) {
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
          _inherits(Vt, _O5);
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
                var n = F(t.color);
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
        }(O);
        T(Vt, "shaderSources", {
          vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
          fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
        });
        var Zt = /*#__PURE__*/function (_Et) {
          function Zt() {
            var _this16;
            _classCallCheck(this, Zt);
            for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              e[_key2] = arguments[_key2];
            }
            _this16 = _callSuper(this, Zt, [].concat(e)), T(_assertThisInitialized(_this16), "name", "radius");
            return _this16;
          }
          _inherits(Zt, _Et);
          return _createClass(Zt, null, [{
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
        }(Et);
        T(Zt, "z$__type__Props", void 0), T(Zt, "uniforms", {
          radius: {
            value: 0,
            method: "uniform4fv",
            type: "vec4",
            validator: function validator(e) {
              var t = e;
              return Array.isArray(t) ? 2 === t.length ? t = [t[0], t[1], t[0], t[1]] : 3 === t.length ? t = [t[0], t[1], t[2], t[0]] : 4 !== t.length && (t = [t[0], t[0], t[0], t[0]]) : "number" == typeof t && (t = [t, t, t, t]), t;
            }
          }
        }), T(Zt, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
        }), T(Zt, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  "), T(Zt, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
        var qt = /*#__PURE__*/function (_Et2) {
          function qt() {
            var _this17;
            _classCallCheck(this, qt);
            for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              e[_key3] = arguments[_key3];
            }
            _this17 = _callSuper(this, qt, [].concat(e)), T(_assertThisInitialized(_this17), "name", "border");
            return _this17;
          }
          _inherits(qt, _Et2);
          return _createClass(qt, null, [{
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
        }(Et);
        T(qt, "z$__type__Props", void 0), T(qt, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return F(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(qt, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  "), T(qt, "onColorize", "\n    return color;\n  ");
        var Jt = /*#__PURE__*/function (_Et3) {
          function Jt() {
            var _this18;
            _classCallCheck(this, Jt);
            for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              e[_key4] = arguments[_key4];
            }
            _this18 = _callSuper(this, Jt, [].concat(e)), T(_assertThisInitialized(_this18), "name", "linearGradient");
            return _this18;
          }
          _inherits(Jt, _Et3);
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
        }(Et);
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
                return F(e);
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
        var er = /*#__PURE__*/function (_Et4) {
          function er() {
            var _this19;
            _classCallCheck(this, er);
            for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              e[_key5] = arguments[_key5];
            }
            _this19 = _callSuper(this, er, [].concat(e)), T(_assertThisInitialized(_this19), "name", "grayscale");
            return _this19;
          }
          _inherits(er, _Et4);
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
        }(Et);
        T(er, "uniforms", {
          amount: {
            value: 1,
            method: "uniform1f",
            type: "float"
          }
        }), T(er, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
        var tr = /*#__PURE__*/function (_Et5) {
          function tr() {
            var _this20;
            _classCallCheck(this, tr);
            for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              e[_key6] = arguments[_key6];
            }
            _this20 = _callSuper(this, tr, [].concat(e)), T(_assertThisInitialized(_this20), "name", "borderRight");
            return _this20;
          }
          _inherits(tr, _Et5);
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
        }(Et);
        T(tr, "z$__type__Props", void 0), T(tr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return F(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(tr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(tr, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(tr, "onColorize", "\n    return color;\n  ");
        var rr = /*#__PURE__*/function (_Et6) {
          function rr() {
            var _this21;
            _classCallCheck(this, rr);
            for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              e[_key7] = arguments[_key7];
            }
            _this21 = _callSuper(this, rr, [].concat(e)), T(_assertThisInitialized(_this21), "name", "borderTop");
            return _this21;
          }
          _inherits(rr, _Et6);
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
        }(Et);
        T(rr, "z$__type__Props", void 0), T(rr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return F(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(rr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(rr, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(rr, "onColorize", "\n    return color;\n  ");
        var nr = /*#__PURE__*/function (_Et7) {
          function nr() {
            var _this22;
            _classCallCheck(this, nr);
            for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              e[_key8] = arguments[_key8];
            }
            _this22 = _callSuper(this, nr, [].concat(e)), T(_assertThisInitialized(_this22), "name", "borderBottom");
            return _this22;
          }
          _inherits(nr, _Et7);
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
        }(Et);
        T(nr, "z$__type__Props", void 0), T(nr, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return F(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(nr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(nr, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(nr, "onColorize", "\n    return color;\n  ");
        var or = /*#__PURE__*/function (_Et8) {
          function or() {
            var _this23;
            _classCallCheck(this, or);
            for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              e[_key9] = arguments[_key9];
            }
            _this23 = _callSuper(this, or, [].concat(e)), T(_assertThisInitialized(_this23), "name", "borderLeft");
            return _this23;
          }
          _inherits(or, _Et8);
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
        }(Et);
        T(or, "z$__type__Props", void 0), T(or, "uniforms", {
          width: {
            value: 0,
            method: "uniform1f",
            type: "float"
          },
          color: {
            value: 4294967295,
            validator: function validator(e) {
              return F(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(or, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
        }), T(or, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), T(or, "onColorize", "\n    return color;\n  ");
        var ir = /*#__PURE__*/function (_Et9) {
          function ir() {
            var _this24;
            _classCallCheck(this, ir);
            for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              e[_key10] = arguments[_key10];
            }
            _this24 = _callSuper(this, ir, [].concat(e)), T(_assertThisInitialized(_this24), "name", "glitch");
            return _this24;
          }
          _inherits(ir, _Et9);
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
        }(Et);
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
        var ar = /*#__PURE__*/function (_Et10) {
          function ar() {
            var _this25;
            _classCallCheck(this, ar);
            for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              e[_key11] = arguments[_key11];
            }
            _this25 = _callSuper(this, ar, [].concat(e)), T(_assertThisInitialized(_this25), "name", "fadeOut");
            return _this25;
          }
          _inherits(ar, _Et10);
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
        }(Et);
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
        var sr = /*#__PURE__*/function (_Et11) {
          function sr() {
            var _this26;
            _classCallCheck(this, sr);
            for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              e[_key12] = arguments[_key12];
            }
            _this26 = _callSuper(this, sr, [].concat(e)), T(_assertThisInitialized(_this26), "name", "radialGradient");
            return _this26;
          }
          _inherits(sr, _Et11);
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
                for (var l = a.length, d = 0, h = s; d < l; d++) s[d] ? (h[d] = s[d], void 0 === s[d - 1] && void 0 !== h[d - 2] && (h[d - 1] = h[d - 2] + (s[d] - h[d - 2]) / 2)) : h[d] = d * (1 / (a.length - 1));
                s = h;
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
        }(Et);
        de = sr, T(sr, "z$__type__Props", void 0), T(sr, "uniforms", {
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
                return F(e);
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
          return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(de.ColorLoop(t), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
        });
        var lr = /*#__PURE__*/function (_Et12) {
          function lr() {
            var _this27;
            _classCallCheck(this, lr);
            for (var _len13 = arguments.length, e = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
              e[_key13] = arguments[_key13];
            }
            _this27 = _callSuper(this, lr, [].concat(e)), T(_assertThisInitialized(_this27), "name", "radialProgress");
            return _this27;
          }
          _inherits(lr, _Et12);
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
        }(Et);
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
              return F(e);
            },
            method: "uniform4fv",
            type: "vec4"
          }
        }), T(lr, "methods", {
          rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
          drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
        }), T(lr, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  "), T(lr, "onColorize", "\n    return color;\n  ");
        var dr = /*#__PURE__*/function (_Et13) {
          function dr() {
            var _this28;
            _classCallCheck(this, dr);
            for (var _len14 = arguments.length, e = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
              e[_key14] = arguments[_key14];
            }
            _this28 = _callSuper(this, dr, [].concat(e)), T(_assertThisInitialized(_this28), "name", "holePunch");
            return _this28;
          }
          _inherits(dr, _Et13);
          return _createClass(dr, null, [{
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
        }(Et);
        T(dr, "z$__type__Props", void 0), T(dr, "uniforms", {
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
        }), T(dr, "methods", {
          fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
          boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
        }), T(dr, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  "), T(dr, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
        var hr = "RoundedRectangle";
        var ur = /*#__PURE__*/function (_D) {
          function ur(e) {
            var _this29;
            _classCallCheck(this, ur);
            _this29 = _callSuper(this, ur), T(_assertThisInitialized(_this29), "shType", void 0), _this29.shType = e, e !== hr && console.warn("Unsupported shader:", e);
            return _this29;
          }
          _inherits(ur, _D);
          return _createClass(ur, [{
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
        var cr = /*#__PURE__*/function () {
          function cr() {
            _classCallCheck(this, cr);
            T(this, "shCache", new Map()), T(this, "shConstructors", {}), T(this, "attachedShader", null), T(this, "effectConstructors", {}), T(this, "renderer", void 0), this.registerShaderType("DefaultShader", Yt), this.registerShaderType("DefaultShaderBatched", Ht), this.registerShaderType("RoundedRectangle", Xt), this.registerShaderType("DynamicShader", $t), this.registerShaderType("SdfShader", Vt), this.registerEffectType("border", qt), this.registerEffectType("borderBottom", nr), this.registerEffectType("borderLeft", or), this.registerEffectType("borderRight", tr), this.registerEffectType("borderTop", rr), this.registerEffectType("fadeOut", ar), this.registerEffectType("linearGradient", Jt), this.registerEffectType("radialGradient", sr), this.registerEffectType("grayscale", er), this.registerEffectType("glitch", ir), this.registerEffectType("radius", Zt), this.registerEffectType("radialProgress", lr), this.registerEffectType("holePunch", dr);
          }
          return _createClass(cr, [{
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
              if ("canvas" === this.renderer.mode && r.prototype instanceof O) return {
                shader: new ur(e),
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
              var t = $t.resolveDefaults(e, this.effectConstructors),
                r = $t.makeCacheKey(t, this.effectConstructors);
              if (r && this.shCache.has(r)) return {
                shader: this.shCache.get(r),
                props: t
              };
              var n = new $t(this.renderer, e, this.effectConstructors);
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
              var r, n, o, i, a, s, l, d, h, u, c, f;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (13, 36196, 7, 6, 11, 12, r = t, n = new Int32Array(r, 0, 13), o = n[12] + 52, i = new Uint8Array(r, o), a = [], s = {
                      pixelWidth: n[7],
                      pixelHeight: n[6],
                      numberOfMipmapLevels: n[11] || 0
                    }, l = 0, d = s.pixelWidth || 0, h = s.pixelHeight || 0, u = 0; u < s.numberOfMipmapLevels; u++) c = (d + 3 >> 2) * (h + 3 >> 2) * 8, f = new Uint8Array(r, i.byteOffset + l, c), a.push(f), l += c, d >>= 1, h >>= 1;
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
        var gr = /*#__PURE__*/function (_U) {
          function gr(e, t) {
            var _this30;
            _classCallCheck(this, gr);
            _this30 = _callSuper(this, gr, [e]), T(_assertThisInitialized(_this30), "props", void 0), _this30.props = gr.resolveDefaults(t);
            return _this30;
          }
          _inherits(gr, _U);
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
                      }).catch(function (e) {
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
        }(U);
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
          }, he);
        }
        function yr(e, t, r, n, o, i, a, s, l, d, h, u, c, f, p, v, g, m, x) {
          _(p, "Font face must be loaded"), _(p.loaded, "Font face must be loaded"), _(p.data, "Font face must be loaded"), _(p.shaper, "Font face must be loaded");
          for (var y, b = s / p.data.info.size, w = l / b, A = i / b, S = d / b, T = c[e], C = (null == T ? void 0 : T.codepointIndex) || 0, k = (null == T ? void 0 : T.maxX) || 0, I = (null == T ? void 0 : T.maxY) || 0, B = t, N = r, E = 0, F = {
              codepointIndex: -1,
              bufferOffset: -1,
              xStart: -1
            }, L = p.shaper, z = {
              letterSpacing: S
            }, M = L.shapeText(z, new mr(xr(n, C), C)), P = -1, O = [], D = a / b, U = function (e, t, r) {
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
            }(m, z, L), W = !0; W;) {
            for (var Y = (0 === x || e + 1 < x) && ("both" !== u || g || N + w + p.maxCharHeight <= D), H = Y ? A : A - U, j = 0, Q = N + w >= f.y1, K = N <= f.y2, $ = Q && K; (y = M.next()) && !y.done;) {
              var X = y.value;
              if (e === c.length) c.push({
                codepointIndex: X.cluster,
                maxY: I,
                maxX: k
              });else if (e > c.length) throw new Error("Unexpected lineCache length");
              if (32 === X.codepoint || 10 === X.codepoint ? -1 !== F.codepointIndex && (F.codepointIndex = -1, j = B) : -1 === F.codepointIndex && (F.codepointIndex = X.cluster, F.bufferOffset = E, F.xStart = j), X.mapped) {
                var G = B + X.xOffset + X.width;
                if ("none" !== u && G >= H && -1 !== F.codepointIndex && F.xStart > 0) {
                  if (Y) {
                    M = L.shapeText(z, new mr(xr(n, F.codepointIndex), F.codepointIndex)), E = F.bufferOffset;
                    break;
                  }
                  M = L.shapeText(z, new mr(xr(m, 0), 0)), B = F.xStart, E = F.bufferOffset, u = "none";
                } else {
                  var V = B + X.xOffset,
                    Z = N + X.yOffset;
                  if ($) {
                    -1 === P && (P = E);
                    var q = p.getAtlasEntry(X.glyphId),
                      J = q.x / p.data.common.scaleW,
                      ee = q.y / p.data.common.scaleH,
                      te = q.width / p.data.common.scaleW,
                      re = q.height / p.data.common.scaleH;
                    h[E++] = V, h[E++] = Z, h[E++] = J, h[E++] = ee, h[E++] = V + X.width, h[E++] = Z, h[E++] = J + te, h[E++] = ee, h[E++] = V, h[E++] = Z + X.height, h[E++] = J, h[E++] = ee + re, h[E++] = V + X.width, h[E++] = Z + X.height, h[E++] = J + te, h[E++] = ee + re;
                  }
                  I = Math.max(I, Z + X.height), k = Math.max(k, V + X.width), B += X.xAdvance;
                }
              } else if (10 === X.codepoint) {
                if (Y) break;
                M = L.shapeText(z, new mr(xr(m, 0), 0)), u = "none";
              }
            }
            -1 !== P && (O.push({
              bufferStart: P,
              bufferEnd: E
            }), P = -1), B = 0, N += w, e++, F.codepointIndex = -1, j = 0, !v && "both" === u && N > f.y2 || y && y.done ? W = !1 : Y || (W = !1);
          }
          if ("center" === o) for (var ne = "none" === u ? k : A, oe = 0; oe < O.length; oe++) for (var ie = O[oe], ae = (ne - (h[ie.bufferEnd - 4] - h[ie.bufferStart])) / 2, se = ie.bufferStart; se < ie.bufferEnd; se += 4) h[se] += ae;else if ("right" === o) for (var le = "none" === u ? k : A, de = 0; de < O.length; de++) for (var he = O[de], ue = le - (he.bufferEnd === he.bufferStart ? 0 : h[he.bufferEnd - 4] - h[he.bufferStart]), ce = he.bufferStart; ce < he.bufferEnd; ce += 4) h[ce] += ue;
          return _(y), {
            bufferNumFloats: E,
            bufferNumQuads: E / 16,
            layoutNumCharacters: y.done ? n.length - C : y.value.cluster - C + 1,
            fullyProcessed: !!y.done,
            maxX: k,
            maxY: I
          };
        }
        function br(e, t, r, n, o, i, a, s) {
          var l,
            d,
            h = e.screen,
            u = e.sdf;
          if (W(a)) {
            var c = a.x1 - t,
              f = c + (a.x2 - a.x1),
              p = a.y1 - r + n,
              v = (l = p - i, d = o || 1, Math.floor(l / d) * d),
              g = function (e, t) {
                return Math.ceil(e / t) * t;
              }(p + (a.y2 - a.y1) + i, o || 1);
            h.x1 = c, h.y1 = v, h.x2 = f, h.y2 = g, u.x1 = c / s, u.y1 = v / s, u.x2 = f / s, u.y2 = g / s, e.numLines = Math.ceil((g - v) / o), e.firstLineIdx = o ? Math.floor(v / o) : 0;
          } else h.x1 = 0, h.y1 = 0, h.x2 = 0, h.y2 = 0, u.x1 = 0, u.y1 = 0, u.x2 = 0, u.y2 = 0, e.numLines = 0, e.firstLineIdx = 0;
          e.valid = !0;
        }
        var wr = {
            normal: 400,
            bold: 700,
            bolder: 900,
            lighter: 100
          },
          Ar = function Ar(e) {
            return "number" == typeof e ? e : wr[e] || 400;
          };
        var Sr = jt(function (e, t, r, n, o) {
          var i,
            a = Ar(r),
            s = R(e);
          try {
            for (s.s(); !(i = s.n()).done;) {
              var l = i.value[t];
              if (l) {
                if (1 === l.size) return console.warn("TrFontManager: Only one font face found for family: '".concat(t, "' - will be used for all weights and styles")), l.values().next().value;
                var d,
                  h = new Map(),
                  u = R(l);
                try {
                  for (u.s(); !(d = u.n()).done;) {
                    var c = d.value,
                      f = Ar(c.descriptors.weight);
                    if (f === a && c.descriptors.style === n && c.descriptors.stretch === o) return c;
                    h.set(f, c);
                  }
                } catch (v) {
                  u.e(v);
                } finally {
                  u.f();
                }
                var p = "TrFontManager: No exact match: '".concat(t, " Weight: ").concat(a, " Style: ").concat(n, " Stretch: ").concat(o, "'");
                if (console.error(p), 400 === a && h.has(500)) return h.get(500);
                if (500 === a && h.has(400)) return h.get(400);
                if (a < 400) {
                  for (; a > 0;) {
                    if (h.has(a)) return h.get(a);
                    a -= 100;
                  }
                  a = 600;
                }
                for (; a < 1e3;) {
                  if (h.has(a)) return h.get(a);
                  a += 100;
                }
                for (a = 500; a > 0;) {
                  if (h.has(a)) return h.get(a);
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
              return Sr(e, r, n, o, i);
            }
          }]);
        }();
        var Cr = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        var Rr = /*#__PURE__*/function (_Lt2) {
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
          _inherits(Rr, _Lt2);
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
                  e.props.x = t, e.elementBounds.valid && (_this32.setElementBoundsX(e), !e.renderWindow.valid && Y(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
                },
                y: function y(e, t) {
                  e.props.y = t, e.elementBounds.valid && (_this32.setElementBoundsY(e), !e.renderWindow.valid && Y(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
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
              return e instanceof H;
            }
          }, {
            key: "addFontFace",
            value: function addFontFace(e) {
              _(e instanceof H);
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
                emitter: new E(),
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
                _(t.data, "Font face data should be loaded");
                var s = e.props,
                  l = s.text,
                  d = s.fontSize,
                  h = s.x,
                  u = s.y,
                  c = s.contain,
                  f = s.width,
                  p = s.height,
                  v = s.lineHeight,
                  g = s.verticalAlign,
                  m = s.scrollable,
                  x = s.overflowSuffix,
                  y = s.maxLines,
                  b = "both" === c && m ? e.props.scrollY : 0,
                  w = e.renderWindow,
                  A = t.data.info.size,
                  S = d / A,
                  T = v / S;
                e.distanceRange = S * t.data.distanceField.distanceRange;
                var C = 24 * l.length,
                  R = e.vertexBuffer;
                (!R || R.length < C) && (R = new Float32Array(2 * C));
                var k = e.elementBounds;
                if (k.valid || (this.setElementBoundsX(e), this.setElementBoundsY(e), k.valid = !0), !i && w.valid) {
                  var I = w.screen;
                  if (h + I.x1 <= k.x1 && h + I.x2 >= k.x2 && u - b + I.y1 <= k.y1 && u - b + I.y2 >= k.y2) return void this.setStatus(e, "loaded");
                  w.valid = !1, this.setStatus(e, "loading");
                }
                var B = e.props,
                  N = B.offsetY,
                  E = B.textAlign;
                if (!w.valid) {
                  if (!Y(k, this.rendererBounds)) return;
                  br(w, h, u, b, v, "both" === c ? k.y2 - k.y1 : 0, k, S);
                }
                var F = function (e, t, r, n, o, i, a, s, l) {
                  var d = Math.min(Math.max(a.firstLineIdx, 0), s.length),
                    h = 0;
                  "middle" === n ? h = (t - e) / 2 : "bottom" === n && (h = t - e);
                  var u = o / i + d * t + h;
                  if (!(l && u >= l / i)) return {
                    sdfX: 0,
                    sdfY: u,
                    lineIndex: d
                  };
                }(A, T, 0, g, N, S, w, n, r);
                if (F) {
                  var L = e.props.letterSpacing,
                    z = yr(F.lineIndex, F.sdfX, F.sdfY, l, E, f, p, d, v, L, R, c, n, w.sdf, t, i, m, x, y);
                  e.bufferUploaded = !1, e.bufferNumFloats = z.bufferNumFloats, e.bufferNumQuads = z.bufferNumQuads, e.vertexBuffer = R, e.renderWindow = w, o.lastLayoutNumCharacters = z.layoutNumCharacters, o.bufferSize = R.byteLength, z.fullyProcessed && (e.textW = z.maxX * S, e.textH = z.maxY * S), this.setStatus(e, "loaded");
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
                _(l instanceof j);
                var d = e.props,
                  h = d.fontSize,
                  u = d.color,
                  c = d.contain,
                  f = d.scrollable,
                  p = d.zIndex,
                  v = d.debug,
                  g = "both" === c && f ? e.props.scrollY : 0,
                  m = e.textW,
                  x = void 0 === m ? 0 : m,
                  y = e.textH,
                  b = void 0 === y ? 0 : y,
                  w = e.distanceRange,
                  A = e.vertexBuffer,
                  S = e.bufferUploaded,
                  T = e.trFontFace,
                  C = e.elementBounds,
                  R = e.webGlBuffers;
                if (!R) {
                  var k = l.glw,
                    I = 4 * Float32Array.BYTES_PER_ELEMENT,
                    B = k.createBuffer();
                  _(B), e.webGlBuffers = new Q([{
                    buffer: B,
                    attributes: {
                      a_position: {
                        name: "a_position",
                        size: 2,
                        type: k.FLOAT,
                        normalized: !1,
                        stride: I,
                        offset: 0
                      },
                      a_textureCoordinate: {
                        name: "a_textureCoordinate",
                        size: 2,
                        type: k.FLOAT,
                        normalized: !1,
                        stride: I,
                        offset: 2 * Float32Array.BYTES_PER_ELEMENT
                      }
                    }
                  }]), e.bufferUploaded = !1, _(e.webGlBuffers), R = e.webGlBuffers;
                }
                if (!S) {
                  var N,
                    E,
                    F = l.glw,
                    L = null !== (N = null === (E = R) || void 0 === E ? void 0 : E.getBuffer("a_textureCoordinate")) && void 0 !== N ? N : null;
                  F.arrayBufferData(L, A, F.STATIC_DRAW), e.bufferUploaded = !0;
                }
                if (_(T), f && "both" === c) {
                  _(C.valid);
                  var M = K(C, Cr);
                  r.valid ? (e.clippingRect.valid = !0, r = z(r, M, e.clippingRect)) : (e.clippingRect.valid = !0, r = $(M, e.clippingRect));
                }
                var P = new X(l.glw, l.options, R, this.sdfShader, {
                    transform: t.data,
                    color: G(u, n),
                    size: h / ((null === (a = T.data) || void 0 === a ? void 0 : a.info.size) || 0),
                    scrollY: g,
                    distanceRange: w,
                    debug: v.sdfShaderDebug
                  }, n, r, {
                    height: b,
                    width: x
                  }, 0, p, !1, o, i),
                  O = null === (s = e.trFontFace) || void 0 === s ? void 0 : s.texture;
                _(O);
                var D = this.stage.txManager.getCtxTexture(O);
                P.addTexture(D), P.length = e.bufferNumFloats, P.numQuads = e.bufferNumQuads, l.addRenderOp(P);
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
        }(Lt);
        function _r(e, t) {
          return kr.apply(this, arguments);
        }
        function kr() {
          return (kr = w(y().mark(function e(t, r) {
            var n, o, i;
            return y().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, console.log("Loading core extension", t), e.next = 4, ce(function () {
                    return A.import(t);
                  }, void 0, A.meta.url);
                case 4:
                  n = e.sent, e.next = 12;
                  break;
                case 7:
                  return e.prev = 7, e.t0 = e.catch(0), console.error("The core extension module at '".concat(t, "' could not be loaded.")), console.error(e.t0), e.abrupt("return");
                case 12:
                  if (n.default) {
                    e.next = 15;
                    break;
                  }
                  return console.error("The core extension module at '".concat(t, "' does not have a default export.")), e.abrupt("return");
                case 15:
                  if (o = n.default, !(o.prototype instanceof V)) {
                    e.next = 29;
                    break;
                  }
                  return i = new o(), e.prev = 18, e.next = 21, i.run(r);
                case 21:
                  e.next = 27;
                  break;
                case 23:
                  e.prev = 23, e.t1 = e.catch(18), console.error("The core extension at '".concat(t, "' threw an error.")), console.error(e.t1);
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
        function Ir(e) {
          for (var t = {
              boolean: !0,
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
        var Br = /*#__PURE__*/function (_E) {
          function Br(e, t, r) {
            var _this34;
            _classCallCheck(this, Br);
            var n, o, i, a, s;
            _this34 = _callSuper(this, Br), T(_assertThisInitialized(_this34), "root", null), T(_assertThisInitialized(_this34), "driver", void 0), T(_assertThisInitialized(_this34), "canvas", void 0), T(_assertThisInitialized(_this34), "settings", void 0), T(_assertThisInitialized(_this34), "inspector", null), T(_assertThisInitialized(_this34), "nodes", new Map()), T(_assertThisInitialized(_this34), "nextTextureId", 1), T(_assertThisInitialized(_this34), "textureTracker", void 0);
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
            var d = l.appWidth,
              h = l.appHeight,
              u = l.deviceLogicalPixelRatio,
              c = l.devicePhysicalPixelRatio,
              f = l.enableInspector,
              p = function p(e) {
                _this34.driver.releaseTexture(e);
              },
              v = l.experimental_FinalizationRegistryTextureUsageTracker && "function" == typeof FinalizationRegistry;
            _this34.textureTracker = v ? new _t(p) : new Rt(p, _this34.settings.textureCleanupOptions);
            var g = d * u,
              m = h * u;
            _this34.driver = r;
            var x,
              y = document.createElement("canvas");
            if (_this34.canvas = y, y.width = g * c, y.height = m * c, y.style.width = "".concat(g, "px"), y.style.height = "".concat(m, "px"), !(x = "string" == typeof t ? document.getElementById(t) : t)) throw new Error("Could not find target element");
            r.onCreateNode = function (e) {
              _this34.nodes.set(e.id, e);
            }, r.onBeforeDestroyNode = function (e) {
              _this34.nodes.delete(e.id);
            }, r.onFpsUpdate = function (e) {
              _this34.emit("fpsUpdate", e);
            }, r.onFrameTick = function (e) {
              _this34.emit("frameTick", e);
            }, r.onIdle = function () {
              _this34.emit("idle");
            }, x.appendChild(y), f && !k() && (_this34.inspector = new Nt(y, l));
            return _this34;
          }
          _inherits(Br, _E);
          return _createClass(Br, [{
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
                d,
                h,
                u,
                c,
                f,
                p,
                v,
                g,
                m,
                x,
                y,
                b = null !== (t = e.fontSize) && void 0 !== t ? t : 16,
                w = S(S({}, this.resolveNodeDefaults(e)), {}, {
                  text: null !== (r = e.text) && void 0 !== r ? r : "",
                  textRendererOverride: null !== (n = e.textRendererOverride) && void 0 !== n ? n : null,
                  fontSize: b,
                  fontFamily: null !== (o = e.fontFamily) && void 0 !== o ? o : "sans-serif",
                  fontStyle: null !== (i = e.fontStyle) && void 0 !== i ? i : "normal",
                  fontWeight: null !== (a = e.fontWeight) && void 0 !== a ? a : "normal",
                  fontStretch: null !== (s = e.fontStretch) && void 0 !== s ? s : "normal",
                  textAlign: null !== (l = e.textAlign) && void 0 !== l ? l : "left",
                  contain: null !== (d = e.contain) && void 0 !== d ? d : "none",
                  scrollable: null !== (h = e.scrollable) && void 0 !== h && h,
                  scrollY: null !== (u = e.scrollY) && void 0 !== u ? u : 0,
                  offsetY: null !== (c = e.offsetY) && void 0 !== c ? c : 0,
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
                d,
                h,
                u,
                c,
                f,
                p,
                v,
                g,
                m,
                x,
                y,
                b,
                w,
                A,
                S,
                T,
                C,
                R,
                _,
                k,
                I,
                B,
                N,
                E,
                F,
                L,
                z,
                M,
                P,
                O,
                D,
                U,
                W,
                Y,
                H,
                j,
                Q,
                K,
                $,
                X,
                G = null !== (t = e.color) && void 0 !== t ? t : 4294967295,
                V = null !== (r = null !== (n = null !== (o = e.colorTl) && void 0 !== o ? o : e.colorTop) && void 0 !== n ? n : e.colorLeft) && void 0 !== r ? r : G,
                Z = null !== (i = null !== (a = null !== (s = e.colorTr) && void 0 !== s ? s : e.colorTop) && void 0 !== a ? a : e.colorRight) && void 0 !== i ? i : G,
                q = null !== (l = null !== (d = null !== (h = e.colorBl) && void 0 !== h ? h : e.colorBottom) && void 0 !== d ? d : e.colorLeft) && void 0 !== l ? l : G,
                J = null !== (u = null !== (c = null !== (f = e.colorBr) && void 0 !== f ? f : e.colorBottom) && void 0 !== c ? c : e.colorRight) && void 0 !== u ? u : G,
                ee = Ir(null !== (p = e.data) && void 0 !== p ? p : {});
              return {
                x: null !== (v = e.x) && void 0 !== v ? v : 0,
                y: null !== (g = e.y) && void 0 !== g ? g : 0,
                width: null !== (m = e.width) && void 0 !== m ? m : 0,
                height: null !== (x = e.height) && void 0 !== x ? x : 0,
                alpha: null !== (y = e.alpha) && void 0 !== y ? y : 1,
                autosize: null !== (b = e.autosize) && void 0 !== b && b,
                clipping: null !== (w = e.clipping) && void 0 !== w && w,
                color: G,
                colorTop: null !== (A = e.colorTop) && void 0 !== A ? A : G,
                colorBottom: null !== (S = e.colorBottom) && void 0 !== S ? S : G,
                colorLeft: null !== (T = e.colorLeft) && void 0 !== T ? T : G,
                colorRight: null !== (C = e.colorRight) && void 0 !== C ? C : G,
                colorBl: q,
                colorBr: J,
                colorTl: V,
                colorTr: Z,
                zIndex: null !== (R = e.zIndex) && void 0 !== R ? R : 0,
                zIndexLocked: null !== (_ = e.zIndexLocked) && void 0 !== _ ? _ : 0,
                parent: null !== (k = e.parent) && void 0 !== k ? k : null,
                texture: null !== (I = e.texture) && void 0 !== I ? I : null,
                shader: null !== (B = e.shader) && void 0 !== B ? B : null,
                src: null !== (N = e.src) && void 0 !== N ? N : "",
                scale: null !== (E = e.scale) && void 0 !== E ? E : null,
                scaleX: null !== (F = null !== (L = e.scaleX) && void 0 !== L ? L : e.scale) && void 0 !== F ? F : 1,
                scaleY: null !== (z = null !== (M = e.scaleY) && void 0 !== M ? M : e.scale) && void 0 !== z ? z : 1,
                mount: null !== (P = e.mount) && void 0 !== P ? P : 0,
                mountX: null !== (O = null !== (D = e.mountX) && void 0 !== D ? D : e.mount) && void 0 !== O ? O : 0,
                mountY: null !== (U = null !== (W = e.mountY) && void 0 !== W ? W : e.mount) && void 0 !== U ? U : 0,
                pivot: null !== (Y = e.pivot) && void 0 !== Y ? Y : .5,
                pivotX: null !== (H = null !== (j = e.pivotX) && void 0 !== j ? j : e.pivot) && void 0 !== H ? H : .5,
                pivotY: null !== (Q = null !== (K = e.pivotY) && void 0 !== K ? K : e.pivot) && void 0 !== Q ? Q : .5,
                rotation: null !== ($ = e.rotation) && void 0 !== $ ? $ : 0,
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
                  options: S(S({}, r), {}, {
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
        }(E);
        var Nr = /*#__PURE__*/function (_E2) {
          function Nr(e, t, r) {
            var _this35;
            _classCallCheck(this, Nr);
            _this35 = _callSuper(this, Nr), T(_assertThisInitialized(_this35), "node", void 0), T(_assertThisInitialized(_this35), "props", void 0), T(_assertThisInitialized(_this35), "settings", void 0), T(_assertThisInitialized(_this35), "propStartValues", {}), T(_assertThisInitialized(_this35), "restoreValues", {}), T(_assertThisInitialized(_this35), "progress", 0), T(_assertThisInitialized(_this35), "delayFor", 0), T(_assertThisInitialized(_this35), "timingFunction", void 0), T(_assertThisInitialized(_this35), "propsList", void 0), _this35.node = e, _this35.props = t, _this35.settings = r, _this35.propStartValues = {}, _this35.propsList = Object.keys(t), _this35.propsList.forEach(function (t) {
              _this35.propStartValues[t] = e[t];
            }), _this35.timingFunction = function (e) {
              return e;
            }, r.easing && "string" == typeof r.easing && (_this35.timingFunction = Z(r.easing)), _this35.delayFor = r.delay || 0;
            return _this35;
          }
          _inherits(Nr, _E2);
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
                      d = this.propStartValues[s],
                      h = l;
                    if (-1 === s.indexOf("color")) this.node[s] = o ? this.applyEasing(this.progress, d, h) : d + (h - d) * this.progress;else {
                      if (d === h) {
                        this.node[s] = d;
                        continue;
                      }
                      if (o) {
                        var u = this.timingFunction(this.progress) || this.progress,
                          c = q(d, h, u);
                        this.node[s] = c;
                        continue;
                      }
                      this.node[s] = q(d, h, this.progress);
                    }
                  }
                  1 === this.progress && this.emit("finished", {});
                }
              } else this.emit("finished", {});
            }
          }]);
        }(E);
        var Er = /*#__PURE__*/function () {
          function Er(e, t) {
            _classCallCheck(this, Er);
            T(this, "manager", void 0), T(this, "animation", void 0), T(this, "startedPromise", null), T(this, "startedResolve", null), T(this, "stoppedPromise", null), T(this, "stoppedResolve", null), T(this, "state", void 0), this.manager = e, this.animation = t, this.state = "stopped";
          }
          return _createClass(Er, [{
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
              return _(e), e;
            }
          }, {
            key: "waitUntilStopped",
            value: function waitUntilStopped() {
              this.makeStoppedPromise();
              var e = this.stoppedPromise;
              return _(e), e;
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
              _(this.startedResolve), this.startedResolve(this), this.startedResolve = null;
            }
          }, {
            key: "finished",
            value: function finished() {
              _(this.stoppedResolve);
              var e = this.animation.settings,
                t = e.loop;
              if ("reverse" === e.stopMethod) return this.animation.reverse(), void this.start();
              this.stoppedResolve(), this.stoppedResolve = null, t || this.manager.unregisterAnimation(this.animation);
            }
          }]);
        }();
        var Fr = /*#__PURE__*/function () {
          function Fr(e) {
            _classCallCheck(this, Fr);
            T(this, "data", void 0), e ? (this.data = new Float32Array(9), this.data[0] = e[0], this.data[3] = e[3], this.data[6] = e[6], this.data[1] = e[1], this.data[4] = e[4], this.data[7] = e[7], this.data[2] = e[2], this.data[5] = e[5], this.data[8] = e[8]) : this.data = new Float32Array(9);
          }
          return _createClass(Fr, [{
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
              return Fr.multiply(this, e, this);
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
              return zr;
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
                d = e.data[2] * t.data[0] + e.data[5] * t.data[1] + e.data[8] * t.data[2],
                h = e.data[2] * t.data[3] + e.data[5] * t.data[4] + e.data[8] * t.data[5],
                u = e.data[2] * t.data[6] + e.data[5] * t.data[7] + e.data[8] * t.data[8];
              return r || (r = new Fr()), r.data[0] = n, r.data[3] = o, r.data[6] = i, r.data[1] = a, r.data[4] = s, r.data[7] = l, r.data[2] = d, r.data[5] = h, r.data[8] = u, r;
            }
          }, {
            key: "identity",
            value: function identity(e) {
              return e || (e = new Fr()), e.data[0] = 1, e.data[3] = 0, e.data[6] = 0, e.data[1] = 0, e.data[4] = 1, e.data[7] = 0, e.data[2] = 0, e.data[5] = 0, e.data[8] = 1, e;
            }
          }, {
            key: "translate",
            value: function translate(e, t, r) {
              return r || (r = new Fr()), r.data[0] = 1, r.data[3] = 0, r.data[6] = e, r.data[1] = 0, r.data[4] = 1, r.data[7] = t, r.data[2] = 0, r.data[5] = 0, r.data[8] = 1, r;
            }
          }, {
            key: "scale",
            value: function scale(e, t, r) {
              return r || (r = new Fr()), r.data[0] = e, r.data[3] = 0, r.data[6] = 0, r.data[1] = 0, r.data[4] = t, r.data[7] = 0, r.data[2] = 0, r.data[5] = 0, r.data[8] = 1, r;
            }
          }, {
            key: "rotate",
            value: function rotate(e, t) {
              var r = Math.cos(e),
                n = Math.sin(e);
              return t || (t = new Fr()), t.data[0] = r, t.data[3] = -n, t.data[6] = 0, t.data[1] = n, t.data[4] = r, t.data[7] = 0, t.data[2] = 0, t.data[5] = 0, t.data[8] = 1, t;
            }
          }, {
            key: "copy",
            value: function copy(e, t, r) {
              return t || (t = new Fr()), t.data[0] = e.data[0], t.data[1] = e.data[1], t.data[2] = e.data[2], t.data[3] = e.data[3], t.data[4] = e.data[4], t.data[5] = e.data[5], t.data[6] = e.data[6], t.data[7] = e.data[7], t.data[8] = e.data[8], t;
            }
          }]);
        }();
        var Lr,
          zr = new Fr();
        var Mr = /*#__PURE__*/function () {
          function Mr(e) {
            _classCallCheck(this, Mr);
            T(this, "data", void 0), this.data = new Float32Array(8), e && (this.data[0] = e[0], this.data[2] = e[2], this.data[4] = e[4], this.data[6] = e[6], this.data[1] = e[1], this.data[3] = e[3], this.data[5] = e[5], this.data[7] = e[7]);
          }
          return _createClass(Mr, [{
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
              return l || (l = new Mr()), l.data[0] = e, l.data[2] = r, l.data[4] = o, l.data[6] = a, l.data[1] = t, l.data[3] = n, l.data[5] = i, l.data[7] = s, l;
            }
          }]);
        }();
        !function (e) {
          e[e.Init = 0] = "Init", e[e.OutOfBounds = 2] = "OutOfBounds", e[e.InBounds = 4] = "InBounds", e[e.InViewport = 8] = "InViewport";
        }(Lr || (Lr = {}));
        var Pr,
          Or = new Map();
        Or.set(Lr.Init, "init"), Or.set(Lr.OutOfBounds, "outOfBounds"), Or.set(Lr.InBounds, "inBounds"), Or.set(Lr.InViewport, "inViewport"), function (e) {
          e[e.Children = 1] = "Children", e[e.ScaleRotate = 2] = "ScaleRotate", e[e.Local = 4] = "Local", e[e.Global = 8] = "Global", e[e.Clipping = 16] = "Clipping", e[e.CalculatedZIndex = 32] = "CalculatedZIndex", e[e.ZIndexSortedChildren = 64] = "ZIndexSortedChildren", e[e.PremultipliedColors = 128] = "PremultipliedColors", e[e.WorldAlpha = 256] = "WorldAlpha", e[e.RenderState = 512] = "RenderState", e[e.IsRenderable = 1024] = "IsRenderable", e[e.RenderTexture = 2048] = "RenderTexture", e[e.ParentRenderTexture = 4096] = "ParentRenderTexture", e[e.None = 0] = "None", e[e.All = 8191] = "All";
        }(Pr || (Pr = {}));
        var Dr = /*#__PURE__*/function (_E3) {
          function Dr(e, t) {
            var _this40;
            _classCallCheck(this, Dr);
            _this40 = _callSuper(this, Dr), T(_assertThisInitialized(_this40), "stage", void 0), T(_assertThisInitialized(_this40), "children", []), T(_assertThisInitialized(_this40), "props", void 0), T(_assertThisInitialized(_this40), "updateType", Pr.All), T(_assertThisInitialized(_this40), "globalTransform", void 0), T(_assertThisInitialized(_this40), "scaleRotateTransform", void 0), T(_assertThisInitialized(_this40), "localTransform", void 0), T(_assertThisInitialized(_this40), "renderCoords", void 0), T(_assertThisInitialized(_this40), "renderBound", void 0), T(_assertThisInitialized(_this40), "strictBound", void 0), T(_assertThisInitialized(_this40), "preloadBound", void 0), T(_assertThisInitialized(_this40), "clippingRect", {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              valid: !1
            }), T(_assertThisInitialized(_this40), "isRenderable", !1), T(_assertThisInitialized(_this40), "renderState", Lr.Init), T(_assertThisInitialized(_this40), "worldAlpha", 1), T(_assertThisInitialized(_this40), "premultipliedColorTl", 0), T(_assertThisInitialized(_this40), "premultipliedColorTr", 0), T(_assertThisInitialized(_this40), "premultipliedColorBl", 0), T(_assertThisInitialized(_this40), "premultipliedColorBr", 0), T(_assertThisInitialized(_this40), "calcZIndex", 0), T(_assertThisInitialized(_this40), "hasRTTupdates", !1), T(_assertThisInitialized(_this40), "parentHasRenderTexture", !1), T(_assertThisInitialized(_this40), "onTextureLoaded", function (e, t) {
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
            }), _this40.stage = e, _this40.props = S(S({}, t), {}, {
              parent: null
            }), _this40.parent = t.parent, _this40.rtt = t.rtt, _this40.updateScaleRotateTransform();
            return _this40;
          }
          _inherits(Dr, _E3);
          return _createClass(Dr, [{
            key: "loadTexture",
            value: function loadTexture(e, t) {
              var _this41 = this;
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
              this.props.texture && this.unloadTexture();
              var n = this.stage.txManager.loadTexture(e, t, r);
              this.props.texture = n, this.props.textureOptions = r, this.setUpdateType(Pr.IsRenderable), queueMicrotask(function () {
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
              this.props.texture = null, this.props.textureOptions = null, this.setUpdateType(Pr.IsRenderable);
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
              _(r);
              var n = r.loadShader(e, t),
                o = n.shader,
                i = n.props;
              this.props.shader = o, this.props.shaderProps = i, this.setUpdateType(Pr.IsRenderable);
            }
          }, {
            key: "setUpdateType",
            value: function setUpdateType(e) {
              this.updateType |= e;
              var t = this.props.parent;
              !t || t.updateType & Pr.Children || t.setUpdateType(Pr.Children), this.parentHasRenderTexture && this.setRTTUpdates(e);
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
              this.scaleRotateTransform = Fr.rotate(this.props.rotation, this.scaleRotateTransform).scale(this.props.scaleX, this.props.scaleY);
            }
          }, {
            key: "updateLocalTransform",
            value: function updateLocalTransform() {
              _(this.scaleRotateTransform);
              var e = this.props.pivotX * this.props.width,
                t = this.props.pivotY * this.props.height,
                r = this.props.mountX * this.props.width,
                n = this.props.mountY * this.props.height;
              this.localTransform = Fr.translate(e - r + this.props.x, t - n + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-e, -t), this.setUpdateType(Pr.Global);
            }
          }, {
            key: "update",
            value: function update(e, t) {
              var _this42 = this;
              this.updateType & Pr.ScaleRotate && (this.updateScaleRotateTransform(), this.setUpdateType(Pr.Local)), this.updateType & Pr.Local && (this.updateLocalTransform(), this.setUpdateType(Pr.Global));
              var r,
                n = this.props.parent,
                o = Pr.None;
              if (this.updateType & Pr.ParentRenderTexture) for (var i = this.parent; i;) i.rtt && (this.parentHasRenderTexture = !0), i = i.parent;
              (this.updateType ^ Pr.All && this.updateType & Pr.RenderTexture && this.children.forEach(function (e) {
                e.setUpdateType(Pr.All);
              }), this.updateType & Pr.Global) && (_(this.localTransform), this.globalTransform = Fr.copy((null == n ? void 0 : n.globalTransform) || this.localTransform, this.globalTransform), this.parentHasRenderTexture && null !== (r = this.props.parent) && void 0 !== r && r.rtt && (this.globalTransform = Fr.identity()), n && this.globalTransform.multiply(this.localTransform), this.calculateRenderCoords(), this.updateBoundingRect(), this.setUpdateType(Pr.Clipping | Pr.RenderState | Pr.Children), o |= Pr.Global);
              this.updateType & Pr.Clipping && (this.calculateClippingRect(t), this.setUpdateType(Pr.Children), o |= Pr.Clipping), this.updateType & Pr.WorldAlpha && (this.worldAlpha = n ? n.worldAlpha * this.props.alpha : this.props.alpha, this.setUpdateType(Pr.Children | Pr.PremultipliedColors | Pr.IsRenderable), o |= Pr.WorldAlpha), this.updateType & Pr.PremultipliedColors && (this.premultipliedColorTl = P(this.props.colorTl, this.worldAlpha, !0), this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl : (this.premultipliedColorTr = P(this.props.colorTr, this.worldAlpha, !0), this.premultipliedColorBl = P(this.props.colorBl, this.worldAlpha, !0), this.premultipliedColorBr = P(this.props.colorBr, this.worldAlpha, !0))), this.updateType & Pr.RenderState && (this.updateRenderState(t), this.setUpdateType(Pr.IsRenderable)), this.updateType & Pr.IsRenderable && this.updateIsRenderable(), n && this.updateType & Pr.CalculatedZIndex && (this.calculateZIndex(), n.setUpdateType(Pr.ZIndexSortedChildren)), this.updateType & Pr.Children && this.children.length && !this.rtt && this.children.forEach(function (t) {
                t.setUpdateType(o), 0 !== t.updateType && t.update(e, _this42.clippingRect);
              }), this.updateType & Pr.ZIndexSortedChildren && this.sortChildren(), this.updateType = 0;
            }
          }, {
            key: "checkRenderProps",
            value: function checkRenderProps() {
              return !!this.props.texture || !(!this.props.width || !this.props.height) && (!!this.props.shader || !!this.props.clipping || 0 !== this.props.color || 0 !== this.props.colorTop || 0 !== this.props.colorBottom || 0 !== this.props.colorLeft || 0 !== this.props.colorRight || 0 !== this.props.colorTl || 0 !== this.props.colorTr || 0 !== this.props.colorBl || 0 !== this.props.colorBr);
            }
          }, {
            key: "checkRenderBounds",
            value: function checkRenderBounds(e) {
              _(this.renderBound);
              var t = e.width || this.stage.root.width,
                r = e.height || this.stage.root.height;
              this.strictBound = N(e.x, e.y, e.x + t, e.y + r, this.strictBound);
              var n = this.stage.boundsMargin;
              return this.preloadBound = N(e.x - n[3], e.y - n[0], e.x + t + n[1], e.y + r + n[2], this.preloadBound), J(this.renderBound, this.strictBound) ? Lr.InViewport : J(this.renderBound, this.preloadBound) ? Lr.InBounds : Lr.OutOfBounds;
            }
          }, {
            key: "updateRenderState",
            value: function updateRenderState(e) {
              var t = this.checkRenderBounds(e);
              if (t !== this.renderState) {
                var r = this.renderState;
                this.renderState = t, r === Lr.InViewport && this.emit("outOfViewport", {
                  previous: r,
                  current: t
                }), (r < Lr.InBounds && t === Lr.InViewport || r > Lr.InBounds && t === Lr.OutOfBounds) && (this.emit(Or.get(Lr.InBounds), {
                  previous: r,
                  current: t
                }), r = Lr.InBounds);
                var n = Or.get(t);
                _(n), this.emit(n, {
                  previous: r,
                  current: t
                });
              }
            }
          }, {
            key: "setRenderState",
            value: function setRenderState(e) {
              e !== this.renderState && (this.renderState = e, this.emit(Lr[e]));
            }
          }, {
            key: "updateIsRenderable",
            value: function updateIsRenderable() {
              var e;
              e = !(0 === this.worldAlpha || !this.checkRenderProps()) && this.renderState > Lr.OutOfBounds, this.isRenderable !== e && (this.isRenderable = e, this.onChangeIsRenderable(e));
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
              _(r);
              var n = r.tx,
                o = r.ty,
                i = r.ta,
                a = r.tb,
                s = r.tc,
                l = r.td;
              if (0 === a && 0 === s) {
                var d = n,
                  h = n + e * i,
                  u = o,
                  c = o + t * l;
                this.renderCoords = Mr.translate(d, u, h, u, h, c, d, c, this.renderCoords);
              } else this.renderCoords = Mr.translate(n, o, n + e * i, o + e * s, n + e * i + t * a, o + e * s + t * l, n + t * a, o + t * l, this.renderCoords);
            }
          }, {
            key: "updateBoundingRect",
            value: function updateBoundingRect() {
              var e = this.renderCoords,
                t = this.globalTransform;
              _(t), _(e);
              var r = t.tb,
                n = t.tc,
                o = e.x1,
                i = e.y1,
                a = e.x3,
                s = e.y3;
              if (0 === r || 0 === n) this.renderBound = N(o, i, a, s, this.renderBound);else {
                var l = e.x2,
                  d = e.x4,
                  h = e.y2,
                  u = e.y4;
                this.renderBound = N(Math.min(o, l, a, d), Math.min(i, h, s, u), Math.max(o, l, a, d), Math.max(i, h, s, u), this.renderBound);
              }
            }
          }, {
            key: "calculateClippingRect",
            value: function calculateClippingRect(e) {
              _(this.globalTransform);
              var t = this.clippingRect,
                r = this.props,
                n = this.globalTransform,
                o = r.clipping,
                i = 0 !== n.tb || 0 !== n.tc;
              o && !i ? (t.x = n.tx, t.y = n.ty, t.width = this.width * n.ta, t.height = this.height * n.td, t.valid = !0) : t.valid = !1, e.valid && t.valid ? z(e, t, t) : e.valid && ($(e, t), t.valid = !0);
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
              var d = this.premultipliedColorTl,
                h = this.premultipliedColorTr,
                u = this.premultipliedColorBl,
                c = this.premultipliedColorBr,
                f = this.zIndex,
                p = this.worldAlpha,
                v = this.globalTransform,
                g = this.clippingRect;
              _(v), e.addQuad({
                width: r,
                height: n,
                colorTl: d,
                colorTr: h,
                colorBl: u,
                colorBr: c,
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
              this.props.x !== e && (this.props.x = e, this.setUpdateType(Pr.Local));
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
              this.props.y !== e && (this.props.y = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "width",
            get: function get() {
              return this.props.width;
            },
            set: function set(e) {
              this.props.width !== e && (this.props.width = e, this.setUpdateType(Pr.Local), this.props.rtt && this.setUpdateType(Pr.RenderTexture));
            }
          }, {
            key: "height",
            get: function get() {
              return this.props.height;
            },
            set: function set(e) {
              this.props.height !== e && (this.props.height = e, this.setUpdateType(Pr.Local), this.props.rtt && this.setUpdateType(Pr.RenderTexture));
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
              this.props.scaleX !== e && (this.props.scaleX = e, this.setUpdateType(Pr.ScaleRotate));
            }
          }, {
            key: "scaleY",
            get: function get() {
              return this.props.scaleY;
            },
            set: function set(e) {
              this.props.scaleY !== e && (this.props.scaleY = e, this.setUpdateType(Pr.ScaleRotate));
            }
          }, {
            key: "mount",
            get: function get() {
              return this.props.mount;
            },
            set: function set(e) {
              this.props.mountX === e && this.props.mountY === e || (this.props.mountX = e, this.props.mountY = e, this.props.mount = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "mountX",
            get: function get() {
              return this.props.mountX;
            },
            set: function set(e) {
              this.props.mountX !== e && (this.props.mountX = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "mountY",
            get: function get() {
              return this.props.mountY;
            },
            set: function set(e) {
              this.props.mountY !== e && (this.props.mountY = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "pivot",
            get: function get() {
              return this.props.pivot;
            },
            set: function set(e) {
              this.props.pivotX === e && this.props.pivotY === e || (this.props.pivotX = e, this.props.pivotY = e, this.props.pivot = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "pivotX",
            get: function get() {
              return this.props.pivotX;
            },
            set: function set(e) {
              this.props.pivotX !== e && (this.props.pivotX = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "pivotY",
            get: function get() {
              return this.props.pivotY;
            },
            set: function set(e) {
              this.props.pivotY !== e && (this.props.pivotY = e, this.setUpdateType(Pr.Local));
            }
          }, {
            key: "rotation",
            get: function get() {
              return this.props.rotation;
            },
            set: function set(e) {
              this.props.rotation !== e && (this.props.rotation = e, this.setUpdateType(Pr.ScaleRotate));
            }
          }, {
            key: "alpha",
            get: function get() {
              return this.props.alpha;
            },
            set: function set(e) {
              this.props.alpha = e, this.setUpdateType(Pr.PremultipliedColors | Pr.WorldAlpha);
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
              this.props.clipping = e, this.setUpdateType(Pr.Clipping);
            }
          }, {
            key: "color",
            get: function get() {
              return this.props.color;
            },
            set: function set(e) {
              this.props.colorTl === e && this.props.colorTr === e && this.props.colorBl === e && this.props.colorBr === e || (this.colorTl = e, this.colorTr = e, this.colorBl = e, this.colorBr = e), this.props.color = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorTop",
            get: function get() {
              return this.props.colorTop;
            },
            set: function set(e) {
              this.props.colorTl === e && this.props.colorTr === e || (this.colorTl = e, this.colorTr = e), this.props.colorTop = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorBottom",
            get: function get() {
              return this.props.colorBottom;
            },
            set: function set(e) {
              this.props.colorBl === e && this.props.colorBr === e || (this.colorBl = e, this.colorBr = e), this.props.colorBottom = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorLeft",
            get: function get() {
              return this.props.colorLeft;
            },
            set: function set(e) {
              this.props.colorTl === e && this.props.colorBl === e || (this.colorTl = e, this.colorBl = e), this.props.colorLeft = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorRight",
            get: function get() {
              return this.props.colorRight;
            },
            set: function set(e) {
              this.props.colorTr === e && this.props.colorBr === e || (this.colorTr = e, this.colorBr = e), this.props.colorRight = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorTl",
            get: function get() {
              return this.props.colorTl;
            },
            set: function set(e) {
              this.props.colorTl = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorTr",
            get: function get() {
              return this.props.colorTr;
            },
            set: function set(e) {
              this.props.colorTr = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorBl",
            get: function get() {
              return this.props.colorBl;
            },
            set: function set(e) {
              this.props.colorBl = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "colorBr",
            get: function get() {
              return this.props.colorBr;
            },
            set: function set(e) {
              this.props.colorBr = e, this.setUpdateType(Pr.PremultipliedColors);
            }
          }, {
            key: "zIndexLocked",
            get: function get() {
              return this.props.zIndexLocked || 0;
            },
            set: function set(e) {
              this.props.zIndexLocked = e, this.setUpdateType(Pr.CalculatedZIndex | Pr.Children), this.children.forEach(function (e) {
                e.setUpdateType(Pr.CalculatedZIndex);
              });
            }
          }, {
            key: "zIndex",
            get: function get() {
              return this.props.zIndex;
            },
            set: function set(e) {
              this.props.zIndex = e, this.setUpdateType(Pr.CalculatedZIndex | Pr.Children), this.children.forEach(function (e) {
                e.setUpdateType(Pr.CalculatedZIndex);
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
                  _(-1 !== r, "CoreNode.parent: Node not found in old parent's children!"), t.children.splice(r, 1), t.setUpdateType(Pr.Children | Pr.ZIndexSortedChildren);
                }
                e && (e.children.push(this), this.setUpdateType(Pr.All), e.setUpdateType(Pr.Children | Pr.ZIndexSortedChildren), (e.rtt || e.parentHasRenderTexture) && this.setRTTUpdates(Pr.All)), this.updateScaleRotateTransform();
              }
            }
          }, {
            key: "rtt",
            get: function get() {
              return this.props.rtt;
            },
            set: function set(e) {
              var t, r;
              e ? (this.props.rtt = !0, this.hasRTTupdates = !0, this.setUpdateType(Pr.All), this.children.forEach(function (e) {
                e.setUpdateType(Pr.All);
              }), null === (t = this.stage.renderer) || void 0 === t || t.renderToTexture(this)) : this.props.rtt && (this.props.rtt = !1, this.unloadTexture(), this.setUpdateType(Pr.All), this.children.forEach(function (e) {
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
        }(E);
        var Ur = 1;
        function Wr() {
          return Ur++;
        }
        var Yr = /*#__PURE__*/function (_E4) {
          function Yr(e, t, r, n) {
            var _this43;
            _classCallCheck(this, Yr);
            var o;
            _this43 = _callSuper(this, Yr), T(_assertThisInitialized(_this43), "rendererMain", void 0), T(_assertThisInitialized(_this43), "stage", void 0), T(_assertThisInitialized(_this43), "id", void 0), T(_assertThisInitialized(_this43), "coreNode", void 0), T(_assertThisInitialized(_this43), "_children", []), T(_assertThisInitialized(_this43), "_src", ""), T(_assertThisInitialized(_this43), "_parent", null), T(_assertThisInitialized(_this43), "_texture", null), T(_assertThisInitialized(_this43), "_shader", null), T(_assertThisInitialized(_this43), "_data", {}), T(_assertThisInitialized(_this43), "onTextureLoaded", function (e, t) {
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
            }), _this43.rendererMain = t, _this43.stage = r, _this43.id = null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : Wr(), _this43.coreNode = n || new Dr(_this43.stage, {
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
          _inherits(Yr, _E4);
          return _createClass(Yr, [{
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
                _(-1 !== n, "MainOnlyNode.parent: Node not found in old parent's children!"), r.children.splice(n, 1);
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
              this._data = Ir(e);
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
              return new Er(this.stage.animationManager, r);
            }
          }]);
        }(E);
        var Hr = /*#__PURE__*/function () {
          function Hr() {
            _classCallCheck(this, Hr);
            T(this, "activeAnimations", new Set());
          }
          return _createClass(Hr, [{
            key: "registerAnimation",
            value: function registerAnimation(e) {
              this.activeAnimations.add(e);
            }
          }, {
            key: "unregisterAnimation",
            value: function unregisterAnimation(e) {
              this.activeAnimations.delete(e);
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
        var jr = /*#__PURE__*/function () {
          function jr(e) {
            var _this44 = this;
            _classCallCheck(this, jr);
            T(this, "imageWorkersEnabled", !0), T(this, "messageManager", {}), T(this, "workers", []), T(this, "workerIndex", 0), T(this, "nextId", 0), this.workers = this.createWorkers(e), this.workers.forEach(function (e) {
              e.onmessage = _this44.handleMessage.bind(_this44);
            });
          }
          return _createClass(jr, [{
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
        var Qr = /*#__PURE__*/function (_U2) {
          function Qr(e, t) {
            var _this46;
            _classCallCheck(this, Qr);
            _this46 = _callSuper(this, Qr, [e]), T(_assertThisInitialized(_this46), "props", void 0), _this46.props = Qr.resolveDefaults(t);
            return _this46;
          }
          _inherits(Qr, _U2);
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
        }(U);
        T(Qr, "z$__type__Props", void 0);
        var Kr = /*#__PURE__*/function () {
          function Kr(e) {
            _classCallCheck(this, Kr);
            T(this, "usedMemory", 0), T(this, "txConstructors", {}), T(this, "textureKeyCache", new Map()), T(this, "textureIdCache", new Map()), T(this, "ctxTextureCache", new WeakMap()), T(this, "textureRefCountMap", new WeakMap()), T(this, "imageWorkerManager", null), T(this, "hasCreateImageBitmap", !!self.createImageBitmap), T(this, "hasWorker", !!self.Worker), T(this, "renderer", void 0), this.hasCreateImageBitmap && this.hasWorker && (this.imageWorkerManager = new jr(e)), this.hasCreateImageBitmap || console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), this.registerTextureType("ImageTexture", gr), this.registerTextureType("ColorTexture", ee), this.registerTextureType("NoiseTexture", Qr), this.registerTextureType("SubTexture", te), this.registerTextureType("RenderTexture", re);
          }
          return _createClass(Kr, [{
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
                if (r.delete(e), n.has(o)) {
                  var i = n.get(o);
                  _(i), i.count--, 0 === i.count && (n.delete(o), i.cacheKey && this.textureKeyCache.delete(i.cacheKey));
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
        var $r = /*#__PURE__*/function () {
          function $r() {
            _classCallCheck(this, $r);
            T(this, "data", {});
          }
          return _createClass($r, [{
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
              return S({}, this.data);
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
              this.textures.has(e) && (this.memUsed -= this.textures.get(e)), 0 !== t ? (this.memUsed += t, this.textures.set(e, t), this.memUsed > this.threshold && (this.gcRequested = !0)) : this.textures.delete(e);
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
        function Zr(_ref3) {
          var e = _ref3.a,
            t = _ref3.r,
            r = _ref3.g,
            n = _ref3.b;
          return "rgba(".concat(t, ",").concat(r, ",").concat(n, ",").concat(e, ")");
        }
        var qr = /*#__PURE__*/function (_ne) {
          function qr() {
            var _this47;
            _classCallCheck(this, qr);
            for (var _len15 = arguments.length, e = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
              e[_key15] = arguments[_key15];
            }
            _this47 = _callSuper(this, qr, [].concat(e)), T(_assertThisInitialized(_this47), "image", void 0), T(_assertThisInitialized(_this47), "tintCache", void 0);
            return _this47;
          }
          _inherits(qr, _ne);
          return _createClass(qr, [{
            key: "load",
            value: function load() {
              var _this48 = this;
              "freed" === this.textureSource.state && (this.textureSource.setState("loading"), this.onLoadRequest().then(function (e) {
                _this48.textureSource.setState("loaded", e), _this48.updateMemSize();
              }).catch(function (e) {
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
              if (_(r, "Attempt to get unloaded image texture"), e.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), r;
              var n = Zr(e);
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
                d = e.colorTr,
                h = e.colorBr,
                u = e.ta,
                c = e.tb,
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
                y = 1 !== u,
                b = 0 !== v.width && 0 !== v.height,
                w = l !== d || l !== h,
                A = e.shader ? function (e) {
                  var t, r;
                  return e.shader instanceof ur && e.shader.shType === hr && null !== (t = null === (r = e.shaderProps) || void 0 === r ? void 0 : r.radius) && void 0 !== t ? t : 0;
                }(e) : 0;
              if ((y || b || A) && r.save(), b) {
                var S = new Path2D(),
                  T = v.x,
                  C = v.y,
                  R = v.width,
                  _ = v.height;
                S.rect(T, C, R, _), r.clip(S);
              }
              if (y) {
                var k = this.pixelRatio;
                r.setTransform(u, f, c, p, n * k, o * k), r.scale(k, k), r.translate(-n, -o);
              }
              if (A) {
                var I = new Path2D();
                I.roundRect(n, o, i, a, A), r.clip(I);
              }
              if (m) {
                var B = m.getImage(x);
                r.globalAlpha = s, t ? r.drawImage(B, t.x, t.y, t.width, t.height, n, o, i, a) : r.drawImage(B, n, o, i, a), r.globalAlpha = 1;
              } else if (w) {
                var N,
                  E = n,
                  F = o;
                l === d ? (E = n, F = o + a, N = Vr(h)) : (E = n + i, F = o, N = Vr(d));
                var L = r.createLinearGradient(n, o, E, F);
                L.addColorStop(0, Zr(x)), L.addColorStop(1, Zr(N)), r.fillStyle = L, r.fillRect(n, o, i, a);
              } else r.fillStyle = Zr(x), r.fillRect(n, o, i, a);
              (y || b || A) && r.restore();
            }
          }, {
            key: "createCtxTexture",
            value: function createCtxTexture(e) {
              return new qr(this.txMemManager, e);
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
        var rn = /*#__PURE__*/function (_E5) {
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
              d = e.numImageWorkers,
              h = e.txMemByteThreshold,
              u = e.renderMode;
            _this50.txManager = new Kr(d), _this50.txMemManager = new Xr(h), _this50.shManager = new cr(), _this50.animationManager = new Hr(), _this50.contextSpy = l ? new $r() : null;
            var c = [0, 0, 0, 0];
            s && (c = Array.isArray(s) ? s : [s, s, s, s]), _this50.boundsMargin = c, null != o && o.monitorTextureCache && setInterval(function () {
              _(_this50.txManager);
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
            _this50.renderer = "canvas" === u ? new Jr(f) : new j(f), ae(u), _this50.txManager.renderer = _this50.renderer, _this50.textRenderers = "webgl" === u ? {
              canvas: new Wt(_this50),
              sdf: new Rr(_this50)
            } : {
              canvas: new Wt(_this50)
            }, _this50.fontManager = new Tr(_this50.textRenderers);
            var p,
              v,
              _g,
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
            _this50.root = m, p = _this50, v = !1, _g = function g() {
              if (p.updateAnimations(), !p.hasSceneUpdates()) return p.calculateFps(), setTimeout(_g, 16.666666666666668), void (v || (p.emit("idle"), v = !0));
              v = !1, p.drawFrame(), requestAnimationFrame(_g);
            }, requestAnimationFrame(_g);
            return _this50;
          }
          _inherits(rn, _E5);
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
              _(e), 0 !== this.root.updateType && this.root.update(this.deltaTime, this.root.clippingRect), e.reset(), e.txMemManager.gcRequested && e.txMemManager.gc(), e.rttNodes.length > 0 && e.renderRTTNodes(), this.addQuads(this.root), null == e || e.render(), this.calculateFps(), t && (this.renderRequested = !1);
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
              _(this.renderer && e.globalTransform), e.isRenderable && e.renderQuads(this.renderer);
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
                    d = s[1];
                  if ("canvas" !== l && d.canRenderFont(e)) {
                    r = l;
                    break;
                  }
                }
                r || (r = "canvas");
              }
              n && console.warn("Falling back to text renderer ".concat(String(r)));
              var h = this.textRenderers[r];
              return _(h, "resolvedTextRenderer undefined"), h;
            }
          }]);
        }(E);
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
              this.props.width = e, this.textRenderer.set.width(this.trState, e), "none" === this.contain && this.setUpdateType(Pr.Local);
            }
          }, {
            key: "height",
            get: function get() {
              return this.props.height;
            },
            set: function set(e) {
              this.props.height = e, this.textRenderer.set.height(this.trState, e), "both" !== this.contain && this.setUpdateType(Pr.Local);
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
              _superPropGet(nn, "update", this, 3)([e, t]), _(this.globalTransform), this.textRenderer.set.x(this.trState, this.globalTransform.tx), this.textRenderer.set.y(this.trState, this.globalTransform.ty);
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
              if (_(this.globalTransform), this.parentHasRenderTexture) {
                if (!e.renderToTextureActive) return;
                if (this.parentRenderTexture !== e.activeRttNode) return;
              }
              this.parentHasRenderTexture && null !== (t = this.props.parent) && void 0 !== t && t.rtt && (this.globalTransform = Fr.identity(), this.localTransform && this.globalTransform.multiply(this.localTransform)), _(this.globalTransform), this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions);
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
        var on = /*#__PURE__*/function (_Yr) {
          function on(e, t, r) {
            _classCallCheck(this, on);
            return _callSuper(this, on, [e, t, r, new nn(r, {
              id: Wr(),
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
          _inherits(on, _Yr);
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
        }(Yr);
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
                        rootId: Wr(),
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
                      }), n.rendererMain = e, _(n.stage.root), i = new Yr(e.resolveNodeDefaults({}), n.rendererMain, n.stage, n.stage.root), n.root = i, i.once("beforeDestroy", n.onBeforeDestroyNode.bind(n, i)), n.onCreateNode(i), !t.coreExtensionModule) {
                        o.next = 10;
                        break;
                      }
                      return o.next = 10, _r(t.coreExtensionModule, n.stage);
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
              _(this.rendererMain), _(this.stage);
              var t = new Yr(e, this.rendererMain, this.stage);
              return t.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, t)), this.onCreateNode(t), t;
            }
          }, {
            key: "createTextNode",
            value: function createTextNode(e) {
              _(this.rendererMain), _(this.stage);
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
              _(t), t.txManager.removeTextureIdFromCache(e);
            }
          }, {
            key: "getRootNode",
            value: function getRootNode() {
              return _(this.root), this.root;
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
          return en = new Br(e, t, r), tn = en.createShader.bind(en), en;
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
        var dn = {
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
        function hn(e, t) {
          false;
        }
        var un = function un(e) {
          return e instanceof Function;
        };
        function cn(e) {
          return Array.isArray(e);
        }
        function fn(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (cn(e)) e.forEach(function (e) {
            fn(e, t);
          });else if (e) for (var r in e) void 0 === t[r] && e[r] && (t[r] = e[r]);
          return t;
        }
        var pn = /*#__PURE__*/function (_Array2) {
          function pn(e) {
            var _this53;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, pn);
            return _possibleConstructorReturn(_this53, (cn(t) ? _this53 = _callSuper(this, pn, _toConsumableArray(t)) : "string" == typeof t ? _this53 = _callSuper(this, pn, [t]) : _this53 = _callSuper(this, pn, _toConsumableArray(Object.entries(t).filter(function (_ref4) {
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
        var gn = dn.animationSettings,
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
              }), this.effects = this.effects ? S(S({}, this.effects || {}), _defineProperty({}, "border".concat(e), t)) : _defineProperty({}, "border".concat(e), t);
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
              cn(e) && (e = tn.apply(void 0, _toConsumableArray(e))), this.lng.shader = e;
            }
          }, {
            key: "_sendToLightningAnimatable",
            value: function _sendToLightningAnimatable(e, t) {
              if (this.rendered && dn.animationsEnabled && this.transition && (!0 === this.transition || this.transition[e])) {
                var r = !0 === this.transition || !0 === this.transition[e] ? void 0 : this.transition[e];
                return this.animate(_defineProperty({}, e, t), r).start();
              }
              this.lng[e] = t;
            }
          }, {
            key: "animate",
            value: function animate(e, t) {
              return _(this.rendered, "Node must be rendered before animating"), this.lng.animate(e, t || this.animationSettings);
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
                if (void 0 !== this.forwardFocus) if (un(this.forwardFocus)) {
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
              for (var t in cn(e) ? this._style = fn(e) : this._style = e, this._style) void 0 === this[t] && (this[t] = this._style[t]);
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
                hn();
                var r,
                  n = !1;
                if (un(this.onBeforeLayout) && (n = this.onBeforeLayout.call(this, this, e, t) || !1), "flex" === this.display) {
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
                      d = a ? "marginLeft" : "marginTop",
                      h = a ? "marginRight" : "marginBottom",
                      u = a ? "x" : "y",
                      c = a ? "y" : "x",
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
                      "flexStart" === m ? e[c] = 0 : "center" === m ? e[c] = (p - (e[l] || 0)) / 2 : "flexEnd" === m && (e[c] = p - (e[l] || 0));
                    } : function (e) {
                      return e;
                    };
                    if ("flexStart" === g) {
                      for (var b = 0, w = 0; w < t.length; w++) {
                        var A = t[w];
                        A[u] = b + (A[d] || 0), b += (A[s] || 0) + v + (A[d] || 0) + (A[h] || 0), y(A);
                      }
                      if ("fixed" !== e.flexBoundary) {
                        var S = b - v;
                        if (S !== e[s]) return e[s] = S, !0;
                      }
                    } else if ("flexEnd" === g) for (var T = f, C = i - 1; C >= 0; C--) {
                      var R = t[C];
                      _(R), R[u] = T - (R[s] || 0) - (R[h] || 0), T -= (R[s] || 0) + v + (R[d] || 0) + (R[h] || 0), y(R);
                    } else if ("center" === g) for (var k = (f - (x + v * (i - 1))) / 2, I = 0; I < t.length; I++) {
                      var B = t[I];
                      B[u] = k, k += (B[s] || 0) + v, y(B);
                    } else if ("spaceBetween" === g) for (var N = (f - x) / (i - 1), E = 0, F = 0; F < t.length; F++) {
                      var L = t[F];
                      L[u] = E, E += (L[s] || 0) + N, y(L);
                    } else if ("spaceEvenly" === g) for (var z = (f - x) / (i + 1), M = z, P = 0; P < t.length; P++) {
                      var O = t[P];
                      O[u] = M, M += (O[s] || 0) + z, y(O);
                    }
                    return !1;
                  }(this) || n) null === (r = this.parent) || void 0 === r || r.updateLayout();
                } else if (n) {
                  var o;
                  null === (o = this.parent) || void 0 === o || o.updateLayout();
                }
                un(this.onLayout) && this.onLayout.call(this, this, e, t);
              }
            }
          }, {
            key: "_stateChanged",
            value: function _stateChanged() {
              var _this57 = this;
              if (hn(0, 0, this.states), this.forwardStates) {
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
                  return r && (e = S(S({}, e), r)), e;
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
                      if (dn.fontSettings) for (var o in dn.fontSettings) void 0 === n[o] && (n[o] = dn.fontSettings[o]);
                      n.text = t.getText(), n.textAlign && !n.contain && console.warn("Text align requires contain: ", t.getText()), n.contain && (n.width || (n.width = (r.width || 0) - n.x - (n.marginRight || 0)), "both" !== n.contain || n.height || n.maxLines ? 1 === n.maxLines && (n.height = n.height || n.lineHeight || n.fontSize) : n.height = (r.height || 0) - n.y - (n.marginBottom || 0)), hn(0, 0), t.lng = en.createTextNode(n), !r.requiresLayout() || n.width && n.height || t._layoutOnLoad();
                    } else n.texture || (isNaN(n.width) && (n.width = (r.width || 0) - n.x), isNaN(n.height) && (n.height = (r.height || 0) - n.y), n.rtt && !n.color && (n.color = 4294967295), n.color || n.src || (n.color = 0)), hn(0, 0), t.lng = en.createNode(n);
                    if (t.rendered = !0, t.autosize && r.requiresLayout() && t._layoutOnLoad(), t.onFail && t.lng.on("failed", t.onFail), t.onLoad && t.lng.on("loaded", t.onLoad), un(this.onCreate) && this.onCreate.call(this, t), t.onEvents && t.onEvents.forEach(function (_ref9) {
                      var _ref10 = _slicedToArray(_ref9, 2),
                        e = _ref10[0],
                        r = _ref10[1];
                      t.lng.on(e, function (e, n) {
                        return r(t, n);
                      });
                    }), null !== (e = t.lng) && void 0 !== e && e.div && (t.lng.div.element = t), t.type === vn.Element) for (var i = 0; i < t.children.length; i++) {
                      var a = t.children[i];
                      _(a, "Child is undefined"), "render" in a ? a.render() : a.text && console.warn("TextNode outside of <Text>: ", a);
                    }
                    t.autofocus && t.setFocus();
                  }
                } else console.warn("Parent not rendered yet: ", this);
              } else console.warn("Parent not set - no node created for: ", this);
            }
          }]);
        }( /*#__PURE__*/_wrapNativeSuper(Object));
        for (var An = function An() {
            var e = Tn[Sn];
            Object.defineProperty(wn.prototype, e, {
              get: function get() {
                return this.lng[e];
              },
              set: function set(t) {
                this._sendToLightningAnimatable(e, t);
              }
            });
          }, Sn = 0, Tn = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"]; Sn < Tn.length; Sn++) An();
        for (var Cn = function Cn() {
            var e = _n[Rn];
            Object.defineProperty(wn.prototype, e, {
              get: function get() {
                return this.lng[e];
              },
              set: function set(t) {
                this.lng[e] = t;
              }
            });
          }, Rn = 0, _n = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"]; Rn < _n.length; Rn++) Cn();
        Object.defineProperties(wn.prototype, {
          borderRadius: {
            set: function set(e) {
              this.effects = this.effects ? S(S({}, this.effects), {
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
              this.effects = this.effects ? S(S({}, this.effects), {
                linearGradient: e
              }) : {
                linearGradient: e
              };
            }
          }
        });
        var kn = b("T", function (e) {
            return t = Dn("text"), Wn(t, e, !1), t;
            var t;
          }),
          In = b("V", function (e) {
            return t = Dn("node"), Wn(t, e, !1), t;
            var t;
          });
        function Bn(_ref11) {
          var e = _ref11.createElement,
            t = _ref11.createTextNode,
            r = _ref11.isTextNode,
            n = _ref11.replaceText,
            o = _ref11.insertNode,
            i = _ref11.removeNode,
            a = _ref11.setProperty,
            s = _ref11.getParentNode,
            l = _ref11.getFirstChild,
            d = _ref11.getNextSibling;
          function h(e, t, r, n) {
            if (void 0 === r || n || (n = []), "function" != typeof t) return u(e, t, n, r);
            Le(function (n) {
              return u(e, t(), n, r);
            }, n);
          }
          function u(e, i, a, s, d) {
            for (; "function" == typeof a;) a = a();
            if (i === a) return a;
            var h = _typeof(i),
              m = void 0 !== s;
            if ("string" === h || "number" === h) {
              if ("number" === h && (i = i.toString()), m) {
                var x = a[0];
                x && r(x) ? n(x, i) : x = t(i), a = p(e, a, s, x);
              } else "" !== a && "string" == typeof a ? n(l(e), a = i) : (p(e, a, s, t(i)), a = i);
            } else if (null == i || "boolean" === h) a = p(e, a, s);else {
              if ("function" === h) return Le(function () {
                for (var t = i(); "function" == typeof t;) t = t();
                a = u(e, t, a, s);
              }), function () {
                return a;
              };
              if (Array.isArray(i)) {
                var y = [];
                if (c(y, i, d)) return Le(function () {
                  return a = u(e, y, a, s, !0);
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
          function c(e, r, n) {
            for (var o = !1, i = 0, a = r.length; i < a; i++) {
              var s = r[i],
                l = void 0;
              if (null == s || !0 === s || !1 === s) ;else if (Array.isArray(s)) o = c(e, s) || o;else if ("string" == (l = _typeof(s)) || "number" === l) e.push(t(s));else if ("function" === l) {
                if (n) {
                  for (; "function" == typeof s;) s = s();
                  o = c(e, Array.isArray(s) ? s : [s]) || o;
                } else e.push(s), o = !0;
              } else e.push(s);
            }
            return o;
          }
          function f(e, t, r) {
            for (var n = r.length, a = t.length, s = n, l = 0, h = 0, u = d(t[a - 1]), c = null; l < a || h < s;) if (t[l] !== r[h]) {
              for (; t[a - 1] === r[s - 1];) a--, s--;
              if (a === l) for (var f = s < n ? h ? d(r[h - 1]) : r[s - h] : u; h < s;) o(e, r[h++], f);else if (s === h) for (; l < a;) c && c.has(t[l]) || i(e, t[l]), l++;else if (t[l] === r[s - 1] && r[h] === t[a - 1]) {
                var p = d(t[--a]);
                o(e, r[h++], d(t[l++])), o(e, r[--s], p), t[a] = r[s];
              } else {
                if (!c) {
                  c = new Map();
                  for (var v = h; v < s;) c.set(r[v], v++);
                }
                var m = c.get(t[l]);
                if (null != m) {
                  if (h < m && m < s) {
                    for (var x = l, y = 1, b = void 0; ++x < a && x < s && null != (b = c.get(t[x])) && b === m + y;) y++;
                    if (y > m - h) for (var w = t[l]; h < m;) o(e, r[h++], w);else g(e, r[h++], t[l++]);
                  } else l++;
                } else i(e, t[l++]);
              }
            } else l++, h++;
          }
          function p(e, r, n, a) {
            if (void 0 === n) {
              for (var d; d = l(e);) i(e, d);
              return a && o(e, a), "";
            }
            var h = a || t("");
            if (r.length) for (var u = !1, c = r.length - 1; c >= 0; c--) {
              var f = r[c];
              if (h !== f) {
                var p = s(f) === e;
                u || c ? p && i(e, f) : p ? g(e, h, f) : o(e, h, n);
              } else u = !0;
            } else o(e, h, n);
            return [h];
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
            return t || (t = {}), n || Le(function () {
              return r.children = u(e, t.children, r.children);
            }), Le(function () {
              return t.ref && t.ref(e);
            }), Le(function () {
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
                r = n, h(t, e());
              }), r;
            },
            insert: h,
            spread: function spread(e, t, r) {
              "function" == typeof t ? Le(function (n) {
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
            effect: Le,
            memo: Me,
            createComponent: ct,
            use: function use(e, t, r) {
              return Ue(function () {
                return e(t, r);
              });
            }
          };
        }
        var Nn,
          En = {
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
              hn(0, 0), e.text = t;
              var r = e.parent;
              _(r), r.text = r.getText();
            },
            setProperty: function setProperty(e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
              e[t] = r;
            },
            insertNode: function insertNode(e, t, r) {
              hn(0, 0), e.children.insert(t, r), t._queueDelete = !1, t instanceof wn ? e.rendered && t.render() : e.isTextNode() && (e.text = e.getText());
            },
            isTextNode: function isTextNode(e) {
              return e.isTextNode();
            },
            removeNode: function removeNode(e, t) {
              hn(0, 0), e.children.remove(t), t._queueDelete = !0, t instanceof wn && queueMicrotask(function () {
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
          Fn = function (e) {
            var t = Bn(e);
            return t.mergeProps = mt, t;
          }(En);
        function Ln(e, t) {
          return zn.apply(this, arguments);
        }
        function zn() {
          return (zn = w(y().mark(function e(t, r) {
            return y().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return Nn = sn(t || dn.rendererOptions, r || "app"), e.next = 3, Nn.init();
                case 3:
                  return e.abrupt("return", e.sent);
                case 4:
                case "end":
                  return e.stop();
              }
            }, e);
          }))).apply(this, arguments);
        }
        var Mn = function () {
            var e = w(y().mark(function e(t, r) {
              var n, o;
              return y().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = En.createElement("App"), e.next = 3, Ln(void 0, r);
                  case 3:
                    return n.lng = Nn.root, n.rendered = !0, o = Fn.render(t, n), e.abrupt("return", {
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
          Pn = (Fn.effect, Fn.memo),
          On = Fn.createComponent,
          Dn = Fn.createElement,
          Un = (Fn.createTextNode, Fn.insertNode, Fn.insert),
          Wn = Fn.spread,
          Yn = Fn.setProp,
          Hn = Fn.mergeProps,
          jn = Fn.use;
        function Qn() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return t = e, Number.isInteger(t) ? e : "string" == typeof e ? e.startsWith("#") ? Number(e.replace("#", "0x") + (7 === e.length ? "ff" : "")) : e.startsWith("0x") ? Number(e) : Number("0x" + (6 === e.length ? e + "ff" : e)) : 0;
          var t;
        }
        b({
          k: Pn,
          i: On,
          q: Dn,
          x: Un,
          v: Wn,
          m: Hn,
          r: jn
        });
        var Kn = "_$DX_DELEGATE";
        function $n(e) {
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
        var Xn;
        function Gn() {
          var e = new Set();
          var t = !1;
          return {
            subscribe: function subscribe(t) {
              return e.add(t), function () {
                return e.delete(t);
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
                  e.listener(S(S({}, i), {}, {
                    from: e.location,
                    retry: function retry(o) {
                      o && (t = !0), e.navigate(r, S(S({}, n), {}, {
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
        function Vn() {
          window.history.state && null != window.history.state._depth || window.history.replaceState(S(S({}, window.history.state), {}, {
            _depth: window.history.length - 1
          }), ""), Xn = window.history.state._depth;
        }
        Vn();
        var Zn = /^(?:[a-z0-9]+:)?\/\//i,
          qn = /^\/+|(\/)\/+$/g,
          Jn = "http://sr";
        function eo(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var r = e.replace(qn, "$1");
          return r ? t || /^[?#]/.test(r) ? r : "/" + r : "";
        }
        function to(e, t, r) {
          if (!Zn.test(t)) {
            var n = eo(e),
              o = r && eo(r),
              i = "";
            return ((i = !o || t.startsWith("/") ? n : 0 !== o.toLowerCase().indexOf(n.toLowerCase()) ? n + o : o) || "/") + eo(t, !i);
          }
        }
        function ro(e) {
          var t = {};
          return e.searchParams.forEach(function (e, r) {
            t[r] = e;
          }), t;
        }
        function no(e, t, r) {
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
              }, d = function d(e) {
                return void 0 === r ? void 0 : r[e];
              }, h = 0; h < s; h++) {
              var u = a[h],
                c = n[h],
                f = ":" === u[0],
                p = f ? u.slice(1) : u;
              if (f && oo(c, d(p))) l.params[p] = c;else if (f || !oo(c, u)) return null;
              l.path += "/".concat(c);
            }
            if (i) {
              var v = o ? n.slice(-o).join("/") : "";
              if (!oo(v, d(i))) return null;
              l.params[i] = v;
            }
            return l;
          };
        }
        function oo(e, t) {
          var r = function r(t) {
            return 0 === t.localeCompare(e, void 0, {
              sensitivity: "base"
            });
          };
          return void 0 === t || ("string" == typeof t ? r(t) : "function" == typeof t ? t(e) : Array.isArray(t) ? t.some(r) : t instanceof RegExp && t.test(e));
        }
        function io(e) {
          var t = new Map(),
            r = He();
          return new Proxy({}, {
            get: function get(n, o) {
              return t.has(o) || je(r, function () {
                return t.set(o, Me(function () {
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
        function ao(e) {
          var t = /(\/?\:[^\/]+)\?/.exec(e);
          if (!t) return [e];
          for (var r = e.slice(0, t.index), n = e.slice(t.index + t[0].length), o = [r, r += t[1]]; t = /^(\/\:[^\/]+)\?/.exec(n);) o.push(r += t[1]), n = n.slice(t[0].length);
          return ao(n).reduce(function (e, t) {
            return [].concat(_toConsumableArray(e), _toConsumableArray(o.map(function (e) {
              return e + t;
            })));
          }, []);
        }
        var so,
          lo = Ke(),
          ho = Ke(),
          uo = function uo() {
            return function (e, t) {
              if (null == e) throw new Error(t);
              return e;
            }($e(lo), "<A> and 'use' router primitives can be only used inside a Route.");
          },
          co = b("u", function () {
            return uo().navigatorFactory();
          }),
          fo = function fo() {
            return uo().location;
          },
          po = b("B", function () {
            return uo().params;
          });
        function vo(e) {
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
          return mo(e.path).reduce(function (r, n) {
            var o,
              i,
              l = R(ao(n));
            try {
              for (l.s(); !(o = l.n()).done;) {
                var d = o.value,
                  h = (i = d, eo(t).replace(/\/*(\*.*)?$/g, "") + eo(i)),
                  u = a ? h : h.split("/*", 1)[0];
                u = u.split("/").map(function (e) {
                  return e.startsWith(":") || e.startsWith("*") ? e : encodeURIComponent(e);
                }).join("/"), r.push(S(S({}, s), {}, {
                  originalPath: n,
                  pattern: u,
                  matcher: no(u, !a, e.matchFilters)
                }));
              }
            } catch (c) {
              l.e(c);
            } finally {
              l.f();
            }
            return r;
          }, []);
        }
        function go(e) {
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
                r.unshift(S(S({}, i), {}, {
                  route: o
                }));
              }
              return r;
            }
          };
          var r, n, o, i, a;
        }
        function mo(e) {
          return Array.isArray(e) ? e : [e];
        }
        function xo(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
          for (var o = mo(e), i = 0, a = o.length; i < a; i++) {
            var s = o[i];
            if (s && "object" == _typeof(s)) {
              s.hasOwnProperty("path") || (s.path = "");
              var l,
                d = R(vo(s, t));
              try {
                for (d.s(); !(l = d.n()).done;) {
                  var h = l.value;
                  r.push(h);
                  var u = Array.isArray(s.children) && 0 === s.children.length;
                  if (s.children && !u) xo(s.children, h.pattern, r, n);else {
                    var c = go(_toConsumableArray(r), n.length);
                    n.push(c);
                  }
                  r.pop();
                }
              } catch (f) {
                d.e(f);
              } finally {
                d.f();
              }
            }
          }
          return r.length ? n : n.sort(function (e, t) {
            return t.score - e.score;
          });
        }
        function yo(e, t) {
          for (var r = 0, n = e.length; r < n; r++) {
            var o = e[r].matcher(t);
            if (o) return o;
          }
          return [];
        }
        function bo(e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var o = C(e.signal, 2),
            i = o[0],
            a = o[1],
            s = e.utils,
            l = void 0 === s ? {} : s,
            d = l.parsePath || function (e) {
              return e;
            },
            h = l.renderPath || function (e) {
              return e;
            },
            u = l.beforeLeave || Gn(),
            c = to("", n.base || "");
          if (void 0 === c) throw new Error("".concat(c, " is not a valid base path"));
          c && !i().value && a({
            value: c,
            replace: !0,
            scroll: !1
          });
          var f = C(Ee(!1), 2),
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
            m = C(Ee(i().value), 2),
            x = m[0],
            b = m[1],
            A = C(Ee(i().state), 2),
            T = A[0],
            R = A[1],
            _ = function (e, t) {
              var r = new URL(Jn),
                n = Me(function (t) {
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
                o = Me(function () {
                  return n().pathname;
                }),
                i = Me(function () {
                  return n().search;
                }, !0),
                a = Me(function () {
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
                query: io(We(i, function () {
                  return ro(n());
                }))
              };
            }(x, T),
            k = [],
            I = Ee([]),
            B = Me(function () {
              return yo(t(), _.pathname);
            }),
            N = io(function () {
              for (var e = B(), t = {}, r = 0; r < e.length; r++) Object.assign(t, e[r].params);
              return t;
            }),
            E = {
              pattern: c,
              path: function path() {
                return c;
              },
              outlet: function outlet() {
                return null;
              },
              resolvePath: function resolvePath(e) {
                return to(c, e);
              }
            };
          return Le(function () {
            var e = i(),
              t = e.value,
              r = e.state;
            Ue(function () {
              t !== x() && g(function () {
                so = "native", b(t), R(r), I[1]([]);
              }).then(function () {
                so = void 0;
              });
            });
          }), {
            base: E,
            location: _,
            params: N,
            isRouting: p,
            renderPath: h,
            parsePath: d,
            navigatorFactory: function navigatorFactory(e) {
              return e = e || $e(ho) || E, function (t, r) {
                return function (e, t, r) {
                  Ue(function () {
                    if ("number" != typeof t) {
                      var n = S({
                          replace: !1,
                          resolve: !0,
                          scroll: !0
                        }, r),
                        o = n.replace,
                        i = n.resolve,
                        s = n.scroll,
                        d = n.state,
                        h = i ? e.resolvePath(t) : to("", t);
                      if (void 0 === h) throw new Error("Path '".concat(t, "' is not a routable path"));
                      if (k.length >= 100) throw new Error("Too many redirects");
                      var c = x();
                      if ((h !== c || d !== T()) && u.confirm(h, r)) {
                        var f = k.push({
                          value: c,
                          replace: o,
                          scroll: s,
                          state: T()
                        });
                        g(function () {
                          so = "navigate", b(h), R(d), I[1]([]);
                        }).then(function () {
                          var e, t;
                          k.length === f && (so = void 0, e = {
                            value: h,
                            state: d
                          }, (t = k[0]) && (e.value === t.value && e.state === t.state || a(S(S({}, e), {}, {
                            replace: t.replace,
                            scroll: t.scroll
                          })), k.length = 0));
                        });
                      }
                    } else t && (l.go ? l.go(t) : console.warn("Router integration does not support relative routing"));
                  });
                }(e, t, r);
              };
            },
            matches: B,
            beforeLeave: u,
            preloadRoute: function preloadRoute(e, n) {
              var o = yo(t(), e.pathname),
                i = so;
              so = "preload";
              var a = function a() {
                var t = o[s],
                  i = t.route,
                  a = t.params;
                i.component && i.component.preload && i.component.preload();
                var l = i.load;
                n && l && je(r(), function () {
                  return l({
                    params: a,
                    location: {
                      pathname: e.pathname,
                      search: e.search,
                      hash: e.hash,
                      query: ro(e),
                      state: null,
                      key: ""
                    },
                    intent: "preload"
                  });
                });
              };
              for (var s in o) a();
              so = i;
            },
            singleFlight: void 0 === n.singleFlight || n.singleFlight,
            submissions: I
          };
        }
        var wo = function wo(e) {
          return function (t) {
            var r,
              n = t.base,
              o = Xe(function () {
                return t.children;
              }),
              i = Me(function () {
                return xo(o(), t.base || "");
              }),
              a = bo(e, i, function () {
                return r;
              }, {
                base: n,
                singleFlight: t.singleFlight
              });
            return e.create && e.create(a), On(lo.Provider, {
              value: a,
              get children() {
                return On(Ao, {
                  routerState: a,
                  get root() {
                    return t.root;
                  },
                  get load() {
                    return t.rootLoad;
                  },
                  get children() {
                    return [Pn(function () {
                      return (r = He()) && null;
                    }), On(So, {
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
        function Ao(e) {
          var t = e.routerState.location,
            r = e.routerState.params,
            n = Me(function () {
              return e.load && Ue(function () {
                return e.load({
                  params: r,
                  location: t,
                  intent: "preload"
                });
              });
            });
          return On(wt, {
            get when() {
              return e.root;
            },
            keyed: !0,
            get fallback() {
              return e.children;
            },
            children: function children(o) {
              return On(o, {
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
        function So(e) {
          var t,
            r = [],
            n = Me(We(e.routerState.matches, function (o, i, a) {
              for (var s = i && o.length === i.length, l = [], d = function d(t) {
                  var d = i && i[t],
                    h = o[t];
                  a && d && h.route.key === d.route.key ? l[t] = a[t] : (s = !1, r[t] && r[t](), Ne(function (o) {
                    r[t] = o, l[t] = function (e, t, r, n) {
                      var o = e.base,
                        i = e.location,
                        a = e.params,
                        s = n().route,
                        l = s.pattern,
                        d = s.component,
                        h = s.load,
                        u = Me(function () {
                          return n().path;
                        });
                      d && d.preload && d.preload();
                      var c = h ? h({
                        params: a,
                        location: i,
                        intent: so || "initial"
                      }) : void 0;
                      return {
                        parent: t,
                        pattern: l,
                        path: u,
                        outlet: function outlet() {
                          return d ? ct(d, {
                            params: a,
                            location: i,
                            data: c,
                            get children() {
                              return r();
                            }
                          }) : r();
                        },
                        resolvePath: function resolvePath(e) {
                          return to(o.path(), e, u());
                        }
                      };
                    }(e.routerState, l[t - 1] || e.routerState.base, To(function () {
                      return n()[t + 1];
                    }), function () {
                      return e.routerState.matches()[t];
                    });
                  }));
                }, h = 0, u = o.length; h < u; h++) d(h);
              return r.splice(o.length).forEach(function (e) {
                return e();
              }), a && s ? a : (t = l[0], l);
            }));
          return To(function () {
            return n() && t;
          })();
        }
        var To = function To(e) {
            return function () {
              return On(wt, {
                get when() {
                  return e();
                },
                keyed: !0,
                children: function children(e) {
                  return On(ho.Provider, {
                    value: e,
                    get children() {
                      return e.outlet();
                    }
                  });
                }
              });
            };
          },
          Co = function Co(e) {
            var t = Xe(function () {
              return e.children;
            });
            return mt(e, {
              get children() {
                return t();
              }
            });
          };
        function Ro(e, t) {
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
        var _o = new Map();
        function ko() {
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
                  d = o.getAttribute("state");
                e.preventDefault(), i(l, {
                  resolve: !1,
                  replace: o.hasAttribute("replace"),
                  scroll: !o.hasAttribute("noscroll"),
                  state: d && JSON.parse(d)
                });
              }
            }
            function d(e) {
              var t = s(e);
              if (t) {
                var r = C(t, 2),
                  o = r[0],
                  i = r[1];
                a[i.pathname] || n.preloadRoute(i, "false" !== o.getAttribute("preload"));
              }
            }
            function h(e) {
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
            function u(e) {
              var t = s(e);
              if (t) {
                var r = C(t, 2)[1];
                a[r.pathname] && (clearTimeout(a[r.pathname]), delete a[r.pathname]);
              }
            }
            function c(e) {
              if (!e.defaultPrevented) {
                var t = e.submitter && e.submitter.hasAttribute("formaction") ? e.submitter.getAttribute("formaction") : e.target.getAttribute("action");
                if (t) {
                  if (!t.startsWith("https://action/")) {
                    var o = new URL(t, Jn);
                    if (!(t = n.parsePath(o.pathname + o.search)).startsWith(r)) return;
                  }
                  if ("POST" !== e.target.method.toUpperCase()) throw new Error("Only POST forms are supported for Actions");
                  var i = _o.get(t);
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
              for (var r = t[Kn] || (t[Kn] = new Set()), n = 0, o = e.length; n < o; n++) {
                var i = e[n];
                r.has(i) || (r.add(i), t.addEventListener(i, $n));
              }
            }(["click", "submit"]), document.addEventListener("click", l), e && (document.addEventListener("mouseover", h), document.addEventListener("mouseout", u), document.addEventListener("focusin", d), document.addEventListener("touchstart", d)), document.addEventListener("submit", c), Ye(function () {
              document.removeEventListener("click", l), e && (document.removeEventListener("mouseover", h), document.removeEventListener("mouseout", u), document.removeEventListener("focusin", d), document.removeEventListener("touchstart", d)), document.removeEventListener("submit", c);
            });
          };
        }
        function Io(e) {
          var t = e.replace(/^.*?#/, "");
          if (!t.startsWith("/")) {
            var r = C(window.location.hash.split("#", 2), 2)[1];
            return "".concat(void 0 === r ? "/" : r, "#").concat(t);
          }
          return t;
        }
        function Bo(e) {
          var t = function t() {
              return window.location.hash.slice(1);
            },
            r = Gn();
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
              }(Ee(r(e.get()), {
                equals: function equals(e, t) {
                  return e.value === t.value;
                }
              }), void 0, function (r) {
                return !t && e.set(r), r;
              });
            return e.init && Ye(e.init(function () {
              var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.get();
              t = !0, n[1](r(o)), t = !1;
            })), wo({
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
                return S(S({}, e), {}, {
                  _depth: window.history.state && window.history.state._depth
                });
              }(n), "", "#" + e) : window.location.hash = e;
              var o = e.indexOf("#");
              Ro(o >= 0 ? e.slice(o + 1) : "", r), Vn();
            },
            init: function init(e) {
              return n = window, o = "hashchange", i = function (e, t) {
                var r = !1;
                return function () {
                  var n = Xn;
                  Vn();
                  var o = null == n ? null : Xn - n;
                  r ? r = !1 : o && t(o) ? (r = !0, window.history.go(-o)) : e();
                };
              }(e, function (e) {
                return !r.confirm(e && e < 0 ? e : t());
              }), n.addEventListener(o, i), function () {
                return n.removeEventListener(o, i);
              };
              var n, o, i;
            },
            create: ko(e.preload, e.explicitLinks, e.actionBase),
            utils: {
              go: function go(e) {
                return window.history.go(e);
              },
              renderPath: function renderPath(e) {
                return "#".concat(e);
              },
              parsePath: Io,
              beforeLeave: r
            }
          })(e);
        }
        var No = Ye;
        function Eo(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : He();
          var r,
            n,
            o = 0;
          return function () {
            return o++, Ye(function () {
              o--, queueMicrotask(function () {
                !o && n && (n(), n = r = void 0);
              });
            }), n || Ne(function (t) {
              return r = e(n = t);
            }, t), r;
          };
        }
        var Fo = Eo(function () {
          var e,
            t,
            r,
            n,
            o = C(Ee(null), 2),
            i = o[0],
            a = o[1];
          return e = window, t = "keydown", r = function r(e) {
            a(e), setTimeout(function () {
              return a(null);
            });
          }, e.addEventListener(t, r, n), No(e.removeEventListener.bind(e, t, r, n)), i;
        });
        function Lo(e) {
          return "function" == typeof e;
        }
        var zo,
          Mo = {
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
          Po = C(Ee([]), 2),
          Oo = Po[0],
          Do = Po[1],
          Uo = function Uo(e) {
            var t = Fo();
            if (e) for (var r = function r() {
                var e,
                  t = C(o[n], 2),
                  r = t[0],
                  i = t[1];
                e = i, Array.isArray(e) ? i.forEach(function (e) {
                  Mo[e] = r;
                }) : Mo[i] = r;
              }, n = 0, o = Object.entries(e); n < o.length; n++) r();
            return ze(We(St, function (e, t) {
              var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
              for (var n = e, o = []; n;) n.states.has("focus") || (n.states.add("focus"), Lo(n.onFocus) && n.onFocus.call(n, e, t)), o.push(n), n = n.parent;
              return r.forEach(function (r) {
                o.includes(r) || (r.states.remove("focus"), Lo(r.onBlur) && r.onBlur.call(r, e, t));
              }), Do(o), o;
            }, {
              defer: !0
            })), ze(function () {
              var e = t();
              if (e) {
                var r = Mo[e.key] || Mo[e.keyCode];
                Ue(function () {
                  var t,
                    n = void 0,
                    o = R(Oo());
                  try {
                    for (o.s(); !(t = o.n()).done;) {
                      var i = t.value;
                      if (n = n || i, r) {
                        var a = i["on".concat(r)];
                        if (Lo(a) && !0 === a.call(i, e, i, n)) break;
                      } else console.log("Unhandled key event: ".concat(e.key || e.keyCode));
                      if (Lo(i.onKeyPress) && !0 === i.onKeyPress.call(i, e, r, i, n)) break;
                    }
                  } catch (s) {
                    o.e(s);
                  } finally {
                    o.f();
                  }
                  return !1;
                });
              }
            }), Oo;
          };
        function Wo(e, t) {
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
        function Yo(e) {
          return new Promise(function (t) {
            setTimeout(t, e);
          });
        }
        function Ho(e, t) {
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
        function jo(e, t) {
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
              var r, n, l, d, h, u;
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
                    return n = 1e3 * Number(r.split("PAUSE-")[1]), isNaN(n) && (n = 0), e.next = 14, Yo(n);
                  case 14:
                    e.next = 60;
                    break;
                  case 16:
                    if ("string" != typeof r || !r.length) {
                      e.next = 48;
                      break;
                    }
                    d = l = 3;
                  case 19:
                    if (!(s && d > 0)) {
                      e.next = 46;
                      break;
                    }
                    return e.prev = 20, e.next = 23, Ho(r, a, t);
                  case 23:
                    d = 0, e.next = 44;
                    break;
                  case 26:
                    if (e.prev = 26, e.t0 = e.catch(20), !(e.t0 instanceof SpeechSynthesisErrorEvent)) {
                      e.next = 43;
                      break;
                    }
                    if ("network" !== e.t0.error) {
                      e.next = 36;
                      break;
                    }
                    return d--, console.warn("Speech synthesis network error. Retries left: ".concat(d)), e.next = 34, Yo(500 * (l - d));
                  case 34:
                    e.next = 41;
                    break;
                  case 36:
                    if ("canceled" !== e.t0.error && "interrupted" !== e.t0.error) {
                      e.next = 40;
                      break;
                    }
                    d = 0, e.next = 41;
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
                    return h = jo(r(), t, !1), i.push(h), e.next = 53, h.series;
                  case 53:
                    e.next = 60;
                    break;
                  case 55:
                    if (!Array.isArray(r)) {
                      e.next = 60;
                      break;
                    }
                    return u = jo(r, t, !1), i.push(u), e.next = 60, u.series;
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
        function Qo(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
          return zo && zo.cancel(), zo = jo(e, t);
        }
        var Ko,
          $o,
          Xo = [],
          Go = !1;
        function Vo(e, t) {
          var r,
            n = function (e, t) {
              var r,
                n = function n() {
                  return clearTimeout(r);
                };
              return He() && Ye(n), Object.assign(function () {
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
        function Zo(e) {
          return e.id || e.name;
        }
        function qo() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          if (Jo.onFocusChange && Jo.enabled) {
            var t = e.every(function (e) {
                return !e.loading;
              }),
              r = e.filter(function (e) {
                return !Xo.includes(e);
              });
            if (Ko(), t || !Jo.onFocusChange) {
              Xo = e.slice(0);
              var n = [],
                o = r.reduce(function (e, t) {
                  return t.announce ? (e.push([Zo(t), "Announce", t.announce]), n.push(t.announce)) : t.title ? (e.push([Zo(t), "Title", t.title]), n.push(t.title)) : e.push([Zo(t), "No Announce", ""]), e;
                }, []);
              return r.reverse().reduce(function (e, t) {
                return t.announceContext ? (e.push([Zo(t), "Context", t.announceContext]), n.push(t.announceContext)) : e.push([Zo(t), "No Context", ""]), e;
              }, o), Jo.debug && console.table(o), n.length ? Jo.speak(n.reduce(function (e, t) {
                return e.concat(t);
              }, [])) : void 0;
            }
            Jo.onFocusChange([]);
          }
        }
        var Jo = {
          debug: !1,
          enabled: !0,
          cancel: function cancel() {
            $o && $o.cancel();
          },
          clearPrevFocus: function clearPrevFocus() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            Xo = Xo.slice(0, e), Ko();
          },
          speak: function speak(e) {
            var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref15$append = _ref15.append,
              t = _ref15$append === void 0 ? !1 : _ref15$append,
              _ref15$notification = _ref15.notification,
              r = _ref15$notification === void 0 ? !1 : _ref15$notification;
            var n;
            Jo.onFocusChange && Jo.enabled && (Jo.onFocusChange.flush(), t && $o && $o.active ? $o.append(e) : (Jo.cancel(), function (e) {
              if (!Go) $o = Qo(e);
            }(e)), r && (Go = !0, null === (n = $o) || void 0 === n || n.series.finally(function () {
              Go = !1, Jo.refresh();
            }).catch(console.error)));
            return $o;
          },
          refresh: function refresh() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            Jo.clearPrevFocus(e), Jo.onFocusChange && Jo.onFocusChange(Ue(function () {
              return Oo();
            }));
          },
          setupTimers: function setupTimers() {
            var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref16$focusDebounce = _ref16.focusDebounce,
              e = _ref16$focusDebounce === void 0 ? 400 : _ref16$focusDebounce,
              _ref16$focusChangeTim = _ref16.focusChangeTimeout,
              t = _ref16$focusChangeTim === void 0 ? 3e5 : _ref16$focusChangeTim;
            Jo.onFocusChange = Vo(qo, e), Ko = Vo(function () {
              Xo = [];
            }, t);
          }
        };
        var ei = C(Ee(""), 2),
          ti = ei[0],
          ri = ei[1];
        b("s", ri);
        var ni,
          oi,
          ii,
          ai,
          si,
          li,
          di,
          hi,
          ui,
          ci,
          fi,
          pi,
          vi,
          gi,
          mi,
          xi,
          yi,
          bi,
          wi,
          Ai = b("t", {
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
                    delete: {
                      title: null,
                      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
                    }
                  }
                }
              }
            }
          });
        function Si() {
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
          return ze(We(ti, function (i) {
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
          })), On(In, {
            width: 1920,
            height: 1080,
            zIndex: -5,
            get children() {
              return [On(In, {
                ref: function ref(t) {
                  "function" == typeof e ? e(t) : e = t;
                },
                style: i
              }), On(In, {
                ref: function ref(e) {
                  "function" == typeof t ? t(e) : t = e;
                },
                style: i,
                alpha: 0
              }), On(In, {
                ref: function ref(e) {
                  "function" == typeof r ? r(e) : r = e;
                },
                src: "./assets/hero-mask-inverted.png",
                get color() {
                  return Qn(Ai.color.materialBrand);
                },
                width: 1920,
                height: 1080
              })];
            }
          });
        }
        function Ti(e) {
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
        var Ci = ["focus", "disabled"],
          Ri = ["brand", "inverse", "neutral"];
        function _i(_ref17) {
          var e = _ref17.themeKeys,
            t = _ref17.base,
            r = _ref17.modes,
            n = _ref17.tones,
            o = _ref17.themeStyles,
            _ref17$modeKeys = _ref17.modeKeys,
            i = _ref17$modeKeys === void 0 ? Ci : _ref17$modeKeys,
            _ref17$toneKeys = _ref17.toneKeys,
            a = _ref17$toneKeys === void 0 ? Ri : _ref17$toneKeys;
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var l = function l(t) {
            return Ti(Object.entries(e).filter(function (_ref18) {
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
              d = (n = o, Ti(Object.entries(n).map(function (_ref22) {
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
            s && console.log(d);
            var h = function (e, t) {
              return S(S({}, e), t.base);
            }(e, d);
            s && console.log(h);
            var u = function (e, t) {
              return Ti(i.map(function (r) {
                return [r, S(S({}, null == e ? void 0 : e[r]), null == t ? void 0 : t[r])];
              }));
            }(t, d);
            s && console.log(u);
            var c = function (e, t, r) {
              return Ti(a.map(function (n) {
                var o,
                  a,
                  s = {};
                return new Set([].concat.apply([], [null !== (o = null == e ? void 0 : e[n]) && void 0 !== o ? o : {}, null !== (a = null == t ? void 0 : t[n]) && void 0 !== a ? a : {}].map(Object.keys))).forEach(function (r) {
                  var o, a, l;
                  i.includes(r) || (s[r] = null !== (l = null == (o = null == t ? void 0 : t[n]) ? void 0 : o[r]) && void 0 !== l ? l : null == (a = null == e ? void 0 : e[n]) ? void 0 : a[r]);
                }), i.forEach(function (o) {
                  var i, a;
                  s[o] = S(S(S({}, r[o]), null == (i = null == e ? void 0 : e[n]) ? void 0 : i[o]), null == (a = null == t ? void 0 : t[n]) ? void 0 : a[o]);
                }), [n, s];
              }));
            }(r, d, u);
            return s && console.log(c), {
              base: S(S({}, h), u),
              tones: c
            };
          }(t, r, n);
        }
        function ki() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return function (t, r) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var o = arguments.length > 3 ? arguments[3] : undefined;
            var i, a, s;
            if (0 !== t.children.length) {
              var l = "row" === t.flexDirection ? "width" : "height",
                d = "row" === t.flexDirection ? "x" : "y",
                h = t.gap || 0,
                u = t.scroll || "auto",
                c = function (e) {
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
                f = C(c, 2),
                p = f[0],
                v = f[1],
                g = null !== (i = t[d]) && void 0 !== i ? i : 0,
                m = null !== (a = null == r ? void 0 : r[d]) && void 0 !== a ? a : 0,
                x = null !== (s = null == r ? void 0 : r[l]) && void 0 !== s ? s : 0,
                y = void 0 === o ? "none" : n > o ? "positive" : "negative",
                b = g;
              if ("auto" === u) null != t.scrollIndex && t.scrollIndex >= 0 ? t.selected >= t.scrollIndex && (b = "positive" === y ? g - x - h : g + x + h) : (Math.abs(g) + v < p.position + p.size || m < Math.abs(g)) && (b = -m + e);else if ("always" === u || "edge" === u && "negative" === y && Math.abs(g) > m) b = -m + e;else if ("edge" === u && "positive" === y && Math.abs(g) + v < m + x) b = g - x - h;else if ("edge" === u && "none" === y) {
                for (var w = 0; w < t.children.length && Math.abs(g) + v < m + x;) {
                  var A;
                  g -= (null !== (A = t.children[w++][l]) && void 0 !== A ? A : 0) + h;
                }
                b = g;
              }
              "x" === d && t.x !== b ? t.x = b : "y" === d && t.y !== b && (t.y = b);
            }
          };
        }
        function Ii() {
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
        function Bi() {
          if (!this || void 0 === this.selected || 0 === this.children.length) return !1;
          for (var e = this.children[this.selected]; null == e ? void 0 : e.skipFocus;) this.selected++, e = this.children[this.selected];
          return e instanceof wn && (e.setFocus(), !0);
        }
        function Ni(e) {
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
        var Ei = (null == (ni = Ai) ? void 0 : ni.componentConfig).Artwork,
          Fi = void 0 === Ei ? {
            styles: {}
          } : Ei,
          Li = (Fi.defaultTone, x(Fi, e));
        _i({
          themeKeys: {
            fillColor: "fillColor",
            scale: "imageScale",
            pivotX: "imageScalePivotX",
            pivotY: "imageScalePivotY"
          },
          base: {
            fallbackSrc: void 0,
            fillColor: Ai.color.overlay,
            gradientColor: Ai.color.material,
            pivotX: .5,
            pivotY: .5,
            scale: void 0,
            borderRadius: Ai.radius.md
          },
          themeStyles: Li
        });
        var zi = (null == (oi = Ai) ? void 0 : oi.componentConfig).Badge,
          Mi = void 0 === zi ? {
            styles: {}
          } : zi,
          Pi = (Mi.defaultTone, x(Mi, t)),
          Oi = {
            themeKeys: {
              color: "backgroundColor"
            },
            base: {
              color: Ai.color.fillInverseSecondary,
              borderRadius: Ai.radius.sm,
              border: {
                color: Ai.color.strokeInverse,
                width: Ai.stroke.sm
              },
              display: "flex",
              justifyContent: "spaceEvenly",
              padding: [Ai.spacer.md - Ai.stroke.sm, Ai.spacer.xs + Ai.stroke.sm, Ai.spacer.md + Ai.stroke.sm, Ai.spacer.md + Ai.stroke.sm]
            },
            tones: {
              inverse: {
                color: Ai.color.fillNeutralSecondary,
                borderRadius: Ai.radius.sm,
                border: {
                  color: Ai.color.strokeInverseSecondary,
                  width: Ai.stroke.sm
                }
              },
              brand: {
                color: Ai.color.fillBrand,
                borderRadius: Ai.radius.sm,
                border: {
                  color: Ai.color.strokeInverseSecondary,
                  width: Ai.stroke.sm
                }
              }
            },
            themeStyles: Pi
          },
          Di = {
            themeKeys: {
              color: "textColor"
            },
            base: S(S({}, Ai.typography.tag1), {}, {
              color: Ai.color.textNeutral
            }),
            tones: {
              inverse: {
                color: Ai.color.textInverse
              },
              brand: {
                color: Ai.color.textNeutral
              }
            },
            themeStyles: Pi
          },
          Ui = {
            themeKeys: {
              color: "iconColor"
            },
            base: {
              color: Ai.color.textNeutral
            },
            tones: {
              inverse: {
                color: Ai.color.textInverse
              },
              brand: {
                color: Ai.color.textNeutral
              }
            },
            themeStyles: Pi
          };
        _i(Oi), _i(Ui), _i(Di);
        var Wi = (null == (ii = Ai) ? void 0 : ii.componentConfig).Button,
          Yi = void 0 === Wi ? {
            styles: {}
          } : Wi,
          Hi = Yi.defaultTone,
          ji = x(Yi, r),
          Qi = (null == (ai = Ai) ? void 0 : ai.componentConfig).Surface,
          Ki = void 0 === Qi ? {
            styles: {}
          } : Qi,
          $i = Ki.surfaceDefaultTone,
          Xi = x(Ki, n),
          Gi = {
            themeKeys: {
              textAlign: "textAlign",
              borderRadius: "radius",
              color: "backgroundColor",
              justifyContent: "justifyContent"
            },
            base: {
              height: Ai.typography.button1.lineHeight + 2 * Ai.spacer.xl,
              display: "flex",
              padding: [Ai.spacer.xxxl, Ai.spacer.xl],
              color: Ai.color.interactiveNeutral,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: Ai.radius.sm,
              contentColor: Ai.color.fillNeutral
            },
            modes: {
              focus: {
                color: Ai.color.interactiveNeutralFocus,
                contentColor: Ai.color.fillInverse
              },
              disabled: {
                color: Ai.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: Ai.color.interactiveInverse
              },
              brand: {
                color: Ai.color.interactiveBrand,
                focus: {
                  color: Ai.color.fillNeutral
                }
              }
            },
            themeStyles: S(S({}, Xi), ji)
          },
          Vi = {
            themeKeys: {
              color: "contentColor"
            },
            base: {
              color: Ai.color.textNeutral
            },
            modes: {
              focus: {
                color: Ai.color.textInverse
              },
              disabled: {
                color: Ai.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: Ai.color.fillNeutral
              },
              brand: {
                color: Ai.color.fillBrand,
                focus: {
                  color: Ai.color.fillBrand
                }
              }
            },
            themeStyles: S(S({}, Xi), ji)
          },
          Zi = {
            themeKeys: {
              color: "textColor"
            },
            base: S({
              textAlign: "left",
              color: Ai.color.textNeutral
            }, Ai.typography.button1),
            modes: {
              focus: {
                color: Ai.color.textInverse
              },
              disabled: {
                color: Ai.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: Ai.color.fillNeutral
              },
              brand: {
                color: Ai.color.fillBrand,
                focus: {
                  color: Ai.color.fillBrand
                }
              }
            },
            themeStyles: S(S({}, Xi), ji)
          },
          qi = {
            tone: Hi || $i || "neutral",
            Container: _i(Gi),
            Content: _i(Vi),
            Text: _i(Zi)
          },
          Ji = (b("E", function (e) {
            return On(In, Hn(e, {
              get style() {
                var t, r;
                return [e.style, null == (r = qi.Container.tones) ? void 0 : r[null !== (t = e.tone) && void 0 !== t ? t : qi.tone], qi.Container.base];
              },
              forwardStates: !0,
              get children() {
                return On(kn, {
                  get style() {
                    var t;
                    return [qi.Text.tones[null !== (t = e.tone) && void 0 !== t ? t : qi.tone], qi.Text.base];
                  },
                  get children() {
                    return e.children;
                  }
                });
              }
            }));
          }), (null == (si = Ai) ? void 0 : si.componentConfig).Checkbox),
          ea = void 0 === Ji ? {
            styles: {}
          } : Ji,
          ta = (ea.defaultTone, x(ea, o)),
          ra = Ai.stroke.sm,
          na = Ai.spacer.xxl,
          oa = {
            themeKeys: {
              color: "color",
              borderRadius: "borderRadius",
              border: "border",
              justifyContent: "justifyContent"
            },
            base: {
              width: na,
              height: na,
              display: "flex",
              justifyContent: "center",
              color: Ai.color.fillNeutral,
              alignItems: "center",
              borderRadius: na / 4,
              border: {
                color: Ai.color.strokeInverse,
                width: ra
              }
            },
            modes: {
              disabled: {
                alpha: Ai.alpha.inactive
              }
            },
            tones: {
              brand: {
                borderRadius: na / 4,
                border: {
                  color: Ai.color.strokeNeutralSecondary,
                  width: ra
                },
                color: Ai.color.fillNeutralSecondary,
                checked: {
                  borderRadius: na / 4,
                  border: {
                    color: Ai.color.strokeNeutralSecondary,
                    width: ra
                  },
                  color: Ai.color.fillBrand
                }
              },
              neutral: {
                borderRadius: na / 4,
                border: {
                  color: Ai.color.strokeNeutralSecondary,
                  width: ra
                },
                color: Ai.color.fillInverseSecondary,
                checked: {
                  borderRadius: na / 4,
                  border: {
                    color: Ai.color.strokeNeutralSecondary,
                    width: ra
                  },
                  color: Ai.color.fillNeutral
                }
              },
              inverse: {
                borderRadius: na / 4,
                border: {
                  color: Ai.color.strokeInverseSecondary,
                  width: ra
                },
                color: Ai.color.fillNeutralSecondary,
                checked: {
                  borderRadius: na / 4,
                  border: {
                    color: Ai.color.strokeInverseSecondary,
                    width: ra
                  },
                  color: Ai.color.fillInverse
                }
              }
            },
            modeKeys: ["focus", "disabled", "checked"],
            themeStyles: ta
          },
          ia = {
            themeKeys: {
              color: "color"
            },
            base: {
              width: Ai.spacer.lg,
              height: Ai.spacer.lg,
              src: Ai.asset.check
            },
            tones: {
              neutral: {
                color: Ai.color.fillInverse
              },
              inverse: {
                color: Ai.color.fillNeutral
              },
              brand: {
                color: Ai.color.fillInverse
              }
            },
            themeStyles: ta
          };
        _i(oa), _i(ia);
        var aa = (null == (li = Ai) ? void 0 : li.componentConfig).Icon,
          sa = void 0 === aa ? {
            styles: {}
          } : aa,
          la = (sa.defaultTone, x(sa, i));
        _i({
          themeKeys: {
            color: "color"
          },
          base: {
            width: 100,
            height: 100,
            color: Ai.color.fillInverse
          },
          tones: {
            inverse: {
              color: Ai.color.fillInverse
            },
            brand: {
              color: Ai.color.fillBrand
            }
          },
          themeStyles: la
        });
        var da = (null == (di = Ai) ? void 0 : di.componentConfig).Column,
          ha = void 0 === da ? {
            styles: {}
          } : da,
          ua = ha.defaultTone,
          ca = x(ha, a),
          fa = {
            tone: ua || "neutral",
            Container: _i({
              themeKeys: {
                gap: "itemSpacing",
                scrollIndex: "scrollIndex",
                itemTransition: "itemTransition"
              },
              base: {
                display: "flex",
                flexBoundary: "fixed",
                flexDirection: "column",
                gap: Ai.layout.gutterY,
                itemTransition: S(S({}, Ai.animation.standardEntrance), {}, {
                  duration: Ai.animation.duration.fast
                })
              },
              themeStyles: ca
            })
          },
          pa = b("C", function (e) {
            var t = Ni("up"),
              r = Ni("down");
            return On(In, Hn(e, {
              get onUp() {
                return Ii(e.onUp, t);
              },
              get onDown() {
                return Ii(e.onDown, r);
              },
              get selected() {
                return e.selected || 0;
              },
              forwardFocus: Bi,
              get onLayout() {
                return Ii(function (t) {
                  var r, n;
                  return ki(e.y).call(t, t, t.children[null !== (r = e.selected) && void 0 !== r ? r : 0], null !== (n = e.selected) && void 0 !== n ? n : 0, void 0);
                }, e.onLayout);
              },
              get onSelectedChanged() {
                return Ii(e.onSelectedChanged, "none" !== e.scroll ? ki(e.y) : void 0);
              },
              get style() {
                var t;
                return [e.style, fa.Container.tones[null !== (t = e.tone) && void 0 !== t ? t : fa.tone], fa.Container.base];
              }
            }));
          }),
          va = (null == (hi = Ai) ? void 0 : hi.componentConfig).Label,
          ga = void 0 === va ? {
            styles: {}
          } : va,
          ma = (ga.defaultTone, x(ga, s)),
          xa = {
            themeKeys: {
              color: "backgroundColor",
              borderRadius: "radius"
            },
            base: {
              display: "flex",
              justifyContent: "center",
              color: Ai.color.textNeutral,
              padding: [Ai.spacer.md, Ai.spacer.lg],
              borderRadius: [Ai.radius.md, Ai.radius.md, Ai.radius.md, Ai.radius.none],
              height: Ai.typography.caption1.lineHeight + Ai.spacer.md,
              neutral: {
                backgroundColor: Ai.color.fillNeutral
              }
            },
            tones: {
              inverse: {
                color: Ai.color.fillInverse
              },
              brand: {
                color: Ai.color.fillBrand,
                focus: {
                  color: Ai.color.orange
                }
              }
            },
            themeStyles: ma
          },
          ya = {
            themeKeys: {
              color: "textColor"
            },
            base: S(S({}, Ai.typography.caption1), {}, {
              color: Ai.color.textInverse
            }),
            tones: {
              inverse: {
                color: Ai.color.textNeutral
              },
              brand: {
                color: Ai.color.textNeutral
              }
            },
            themeStyles: ma
          };
        _i(xa), _i(ya);
        var ba = (null == (ui = Ai) ? void 0 : ui.componentConfig).Details,
          wa = void 0 === ba ? {
            styles: {}
          } : ba,
          Aa = (wa.defaultTone, x(wa, l)),
          Sa = {
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
              contentSpacing: Ai.spacer.lg,
              badgeContentSpacing: Ai.spacer.sm,
              ratingContentSpacing: Ai.spacer.lg
            },
            themeStyles: Aa
          },
          Ta = {
            themeKeys: {
              color: "textColor"
            },
            base: S(S({}, Ai.typography.body2), {}, {
              marginRight: Ai.spacer.lg,
              color: Ai.color.textNeutral
            }),
            tones: {
              neutral: {
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              },
              inverse: {
                color: Ai.color.textInverse,
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              },
              brand: {
                color: Ai.color.textNeutral,
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              }
            },
            themeStyles: Aa
          };
        _i(Sa), _i(Ta);
        var Ca = (null == (ci = Ai) ? void 0 : ci.componentConfig).Rating,
          Ra = void 0 === Ca ? {
            styles: {},
            defaultTone: "neutral"
          } : Ca,
          _a = Ra.styles,
          ka = (Ra.defaultTone, {
            themeKeys: {
              justifyContent: "justifyContent",
              itemSpacing: "itemSpacing"
            },
            base: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              itemSpacing: Ai.spacer.sm
            },
            toneModes: {},
            themeStyles: _a
          }),
          Ia = {
            themeKeys: {
              color: "textColor"
            },
            base: S({
              color: Ai.color.textNeutral
            }, Ai.typography.body2),
            toneModes: {},
            themeStyles: _a
          },
          Ba = {
            themeKeys: {
              color: "color"
            },
            base: {
              height: Ai.typography.body2.lineHeight,
              width: Ai.typography.body2.lineHeight,
              color: Ai.color.fillNeutral,
              marginRight: Ai.spacer.sm
            },
            toneModes: {},
            themeStyles: _a
          };
        _i(ka), _i(Ba), _i(Ia);
        var Na = (null == (fi = Ai) ? void 0 : fi.componentConfig).Metadata,
          Ea = void 0 === Na ? {
            styles: {}
          } : Na,
          Fa = (Ea.defaultTone, x(Ea, d)),
          La = {
            themeKeys: {
              justifyContent: "justifyContent",
              alpha: "alpha"
            },
            base: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
              flexBoundary: "contain",
              alpha: Ai.alpha.primary
            },
            modes: {
              disabled: {
                alpha: Ai.alpha.inactive
              }
            },
            themeStyles: Fa
          },
          za = {
            themeKeys: {
              color: "textColor"
            },
            base: S(S({
              maxLines: 1,
              contain: "width"
            }, Ai.typography.headline3), {}, {
              color: Ai.color.textNeutral
            }),
            tones: {
              neutral: {
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              },
              inverse: {
                color: Ai.color.textInverse,
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              },
              brand: {
                color: Ai.color.textNeutral,
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              }
            },
            themeStyles: Fa
          },
          Ma = {
            themeKeys: {
              color: "textColor"
            },
            base: S(S({
              contain: "width",
              maxLines: 2
            }, Ai.typography.body2), {}, {
              color: Ai.color.textNeutralSecondary
            }),
            tones: {
              neutral: {
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              },
              inverse: {
                color: Ai.color.textInverseSecondary,
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              },
              brand: {
                color: Ai.color.textNeutralSecondary,
                disabled: {
                  color: Ai.color.textNeutralDisabled
                }
              }
            },
            themeStyles: Fa
          };
        _i(La), _i(Ma), _i(za);
        var Pa = (null == (pi = Ai) ? void 0 : pi.componentConfig).ProgressBar,
          Oa = void 0 === Pa ? {
            styles: {}
          } : Pa,
          Da = (Oa.defaultTone, x(Oa, h)),
          Ua = {
            themeKeys: {
              color: "barColor",
              borderRadius: "borderRadius"
            },
            base: {
              height: Ai.spacer.md,
              color: Ai.color.fillNeutralTertiary,
              borderRadius: Ai.radius.xs
            },
            tones: {
              inverse: {
                color: Ai.color.fillInverseTertiary
              }
            },
            themeStyles: Da
          },
          Wa = {
            themeKeys: {
              color: "progressColor",
              borderRadius: "borderRadius"
            },
            base: {
              borderRadius: Ai.radius.xs,
              color: Ai.color.fillNeutral
            },
            tones: {
              inverse: {
                color: Ai.color.fillInverse
              },
              brand: {
                color: Ai.color.fillBrand
              }
            },
            themeStyles: Da
          };
        _i(Ua), _i(Wa);
        var Ya = (null == (vi = Ai) ? void 0 : vi.componentConfig).Radio,
          Ha = void 0 === Ya ? {
            themeStyles: {}
          } : Ya,
          ja = (Ha.defaultTone, x(Ha, u)),
          Qa = Ai.spacer.xxl,
          Ka = Ai.stroke.sm,
          $a = {
            themeKeys: {
              borderRadius: "strokeRadius",
              color: "backgroundColor",
              colorChecked: "backgroundColorChecked"
            },
            base: {
              color: Ai.color.fillNeutralSecondary,
              colorChecked: Ai.color.fillInverse,
              height: Qa + 2 * Ka,
              width: Qa + 2 * Ka,
              borderRadius: Qa / 2 + Ka,
              border: {
                color: Ai.color.strokeNeutralSecondary,
                width: Ka
              }
            },
            tones: {
              inverse: {
                border: {
                  color: Ai.color.strokeInverseSecondary,
                  width: Ka
                }
              },
              brand: {
                border: {
                  color: Ai.color.fillBrand,
                  width: Ka
                }
              }
            },
            themeStyles: ja
          },
          Xa = {
            themeKeys: {
              width: "knobWidth",
              height: "knobHeight",
              borderRadius: "knobRadius",
              color: "knobColor"
            },
            base: {
              color: Ai.color.fillInverse,
              width: Qa,
              height: Qa,
              borderRadius: Qa / 2
            },
            tones: {
              inverse: {
                color: Ai.color.fillNeutral
              }
            },
            themeStyles: ja
          };
        _i($a), _i(Xa);
        var Ga = (null == (gi = Ai) ? void 0 : gi.componentConfig).Row,
          Va = void 0 === Ga ? {
            styles: {}
          } : Ga,
          Za = Va.defaultTone,
          qa = x(Va, c),
          Ja = {
            tone: Za,
            Container: _i({
              themeKeys: {
                gap: "itemSpacing",
                scrollIndex: "scrollIndex",
                itemTransition: "itemTransition"
              },
              base: {
                display: "flex",
                flexBoundary: "fixed",
                flexDirection: "row",
                gap: Ai.layout.gutterX,
                itemTransition: S(S({}, Ai.animation.standardEntrance), {}, {
                  duration: Ai.animation.duration.fast
                })
              },
              themeStyles: qa
            })
          },
          es = b("R", function (e) {
            var t = Ni("left"),
              r = Ni("right");
            return On(In, Hn(e, {
              get selected() {
                return e.selected || 0;
              },
              get onLeft() {
                return Ii(e.onLeft, t);
              },
              get onRight() {
                return Ii(e.onRight, r);
              },
              forwardFocus: Bi,
              get onLayout() {
                return Ii(function (t) {
                  return ki(e.x).call(t, t, t.children[t.selected], t.selected, void 0);
                }, e.onLayout);
              },
              get onSelectedChanged() {
                return Ii(e.onSelectedChanged, "none" !== e.scroll ? ki(e.x) : void 0);
              },
              get style() {
                return [e.style, Ja.Container.tones[e.tone || Ja.tone], Ja.Container.base];
              }
            }));
          }),
          ts = (null == (mi = Ai) ? void 0 : mi.componentConfig).Keyboard,
          rs = void 0 === ts ? {
            styles: {}
          } : ts,
          ns = (rs.defaultTone, x(rs, f)),
          os = {
            themeKeys: {
              keySpacing: "keySpacing",
              screenW: "screenW",
              marginX: "marginX"
            },
            base: {
              keySpacing: Ai.spacer.md,
              screenW: Ai.layout.screenW,
              marginX: Ai.layout.marginX,
              height: 100
            },
            themeStyles: ns
          },
          is = {
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
              keySpacing: Ai.spacer.md,
              height: 9 * Ai.spacer.md,
              paddingX: Ai.spacer.md,
              sizes: {
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5
              },
              contentColor: Ai.color.fillNeutral,
              padding: [Ai.spacer.xxxl, Ai.spacer.xl],
              baseWidth: 7 * Ai.spacer.md,
              color: Ai.color.interactiveNeutral,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: Ai.radius.sm
            },
            modes: {
              focus: {
                color: Ai.color.interactiveNeutralFocus,
                contentColor: Ai.color.fillInverse
              },
              disabled: {
                color: Ai.color.fillNeutralDisabled,
                contentColor: Ai.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: Ai.color.interactiveInverse,
                focus: {
                  color: Ai.color.interactiveInverseFocus,
                  contentColor: Ai.color.fillNeutral
                }
              },
              brand: {
                focus: {
                  contentColor: Ai.color.fillNeutral
                }
              }
            },
            themeStyles: ns
          },
          as = {
            themeKeys: {
              color: "textColor"
            },
            base: S({
              textAlign: "left",
              color: Ai.color.textNeutral
            }, Ai.typography.headline2),
            modes: {
              focus: {
                color: Ai.color.textInverse
              },
              disabled: {
                color: Ai.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                focus: {
                  color: Ai.color.textNeutral
                }
              }
            },
            themeStyles: ns
          };
        _i(os), _i(is), _i(as);
        var ss = (null == (xi = Ai) ? void 0 : xi.componentConfig).Key,
          ls = void 0 === ss ? {
            styles: {}
          } : ss,
          ds = (ls.defaultTone, x(ls, p)),
          hs = {
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
              keySpacing: Ai.spacer.md,
              height: 9 * Ai.spacer.md,
              paddingX: Ai.spacer.md,
              contentColor: Ai.color.fillNeutral,
              sizes: {
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5
              },
              padding: [Ai.spacer.md],
              baseWidth: 7 * Ai.spacer.md,
              color: Ai.color.interactiveNeutral,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: Ai.radius.sm
            },
            modes: {
              focus: {
                color: Ai.color.interactiveNeutralFocus,
                contentColor: Ai.color.fillInverse
              },
              disabled: {
                color: Ai.color.fillNeutralDisabled,
                contentColor: Ai.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: Ai.color.interactiveInverse,
                focus: {
                  color: Ai.color.interactiveInverseFocus,
                  contentColor: Ai.color.fillNeutral
                }
              },
              brand: {
                focus: {
                  contentColor: Ai.color.fillNeutral
                }
              }
            },
            themeStyles: ds
          },
          us = {
            themeKeys: {
              color: "textColor"
            },
            base: S({
              textAlign: "left",
              color: Ai.color.textNeutral
            }, Ai.typography.headline2),
            modes: {
              focus: {
                color: Ai.color.textInverse
              },
              disabled: {
                color: Ai.color.textNeutralDisabled
              }
            },
            tones: {
              inverse: {
                focus: {
                  color: Ai.color.textNeutral
                }
              }
            },
            themeStyles: ds
          };
        _i(hs), _i(us);
        var cs = (null == (yi = Ai) ? void 0 : yi.componentConfig).Input,
          fs = void 0 === cs ? {
            styles: {}
          } : cs,
          ps = (fs.defaultTone, x(fs, v)),
          vs = {
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
            themeStyles: ps
          },
          gs = {
            themeKeys: {
              borderRadius: "borderRadius",
              color: "backgroundColor"
            },
            base: {
              width: function () {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var t = Ai.layout.screenW,
                  r = Ai.layout.columnCount,
                  n = Ai.layout.marginX,
                  o = Ai.layout.gutterX;
                if (!(e < 1 || e > r)) return (t - 2 * n - (e - 1) * o) / e;
                console.error("Column expects a number between 1 & ".concat(r, ". Received ").concat(e));
              }(4),
              height: 100,
              display: "flex",
              flexDirection: "column",
              padding: [Ai.spacer.xxxl, Ai.spacer.xl],
              color: Ai.color.interactiveNeutral,
              contentColor: Ai.color.fillInverse,
              borderRadius: Ai.radius.sm,
              marginX: Ai.spacer.xxxl
            },
            modes: {
              focus: {
                color: Ai.color.interactiveNeutralFocus
              },
              disabled: {
                color: Ai.color.fillNeutralDisabled
              }
            },
            tones: {
              inverse: {
                color: Ai.color.interactiveInverse
              },
              brand: {
                color: Ai.color.interactiveBrand,
                focus: {
                  color: Ai.color.fillNeutral
                }
              }
            },
            themeStyles: ps
          },
          ms = {
            themeKeys: {
              color: "textColor"
            },
            base: S({
              textAlign: "left",
              color: Ai.color.textNeutral
            }, Ai.typography.button1),
            themeStyles: ps
          };
        _i(vs), _i(gs), _i(ms);
        var xs = (null == (bi = Ai) ? void 0 : bi.componentConfig).Tile,
          ys = void 0 === xs ? {
            styles: {}
          } : xs,
          bs = (ys.defaultTone, x(ys, g)),
          ws = (null == (wi = Ai) ? void 0 : wi.componentConfig).Surface,
          As = void 0 === ws ? {
            styles: {}
          } : ws,
          Ss = (As.defaultSurfaceTone, x(As, m)),
          Ts = {
            themeKeys: {
              alpha: "alpha",
              paddingYProgress: "paddingYProgress",
              borderRadius: "radius"
            },
            base: {
              width: 400,
              height: 240,
              padding: [40, 10],
              paddingYProgress: Ai.spacer.xl,
              paddingYBetweenContent: Ai.spacer.md,
              borderRadius: Ai.radius.md,
              alpha: Ai.alpha.primary
            },
            modes: {
              disabled: {
                alpha: Ai.alpha.inactive
              }
            },
            themeStyles: S(S({}, Ss), bs)
          },
          Cs = {
            themeKeys: {},
            base: {
              display: "flex",
              flexDirection: "column",
              flexBoundary: "contain",
              mountY: 1
            },
            themeStyles: bs
          },
          Rs = {
            themeKeys: {},
            base: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart"
            },
            themeStyles: bs
          },
          _s = {
            themeKeys: {},
            base: {
              width: 5 * Ai.spacer.lg,
              height: Ai.spacer.xxl + Ai.spacer.md
            },
            themeStyles: bs
          };
        _i(Ts), _i(Cs), _i(Rs), _i(_s);
        var ks = {
            color: 255,
            height: 150,
            width: 330,
            x: 1910,
            y: 10,
            mountX: 1,
            alpha: .8,
            zIndex: 100
          },
          Is = {
            x: 10,
            fontSize: 22,
            textColor: Qn("#f6f6f6")
          },
          Bs = {
            fontSize: 22,
            textColor: Qn("#f6f6f6")
          },
          Ns = C(Ee(0), 2),
          Es = Ns[0],
          Fs = Ns[1],
          Ls = C(Ee(0), 2),
          zs = Ls[0],
          Ms = Ls[1],
          Ps = C(Ee(99), 2),
          Os = Ps[0],
          Ds = Ps[1],
          Us = C(Ee(0), 2),
          Ws = Us[0],
          Ys = Us[1],
          Hs = C(Ee(0), 2),
          js = Hs[0],
          Qs = Hs[1],
          Ks = C(Ee(0), 2),
          $s = Ks[0],
          Xs = Ks[1],
          Gs = C(Ee(0), 2),
          Vs = Gs[0],
          Zs = Gs[1],
          qs = 0,
          Js = 0;
        function el(e) {
          e.renderer.on("fpsUpdate", function (e, t) {
            var r,
              n,
              o,
              i,
              a = "number" == typeof t ? t : t.fps;
            a > 5 && (function (e) {
              e && (Fs(e), Ds(function (t) {
                return Math.min(e, t);
              }), Ys(function (t) {
                return Math.max(e, t);
              }), Js += e, qs++, Ms(Math.round(Js / qs)));
            }(a), r = e.root.stage, n = 0, o = 0, i = 0, r.txManager.textureIdCache.forEach(function (e, t, r) {
              "loaded" === e.state && n++, "loading" === e.state && o++, "failed" === e.state && i++;
            }), Qs(n), Xs(o), Zs(i));
          });
        }
        var tl = function tl(e) {
            return On(In, Hn(e, {
              style: ks,
              get children() {
                return [On(In, {
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "FPS:"
                    }), On(kn, {
                      style: Bs,
                      x: 90,
                      get children() {
                        return Es();
                      }
                    })];
                  }
                }), On(In, {
                  x: 160,
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "AVG:"
                    }), On(kn, {
                      style: Bs,
                      x: 100,
                      get children() {
                        return zs();
                      }
                    })];
                  }
                }), On(In, {
                  x: 0,
                  y: 20,
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "MIN:"
                    }), On(kn, {
                      style: Bs,
                      x: 90,
                      get children() {
                        return Os();
                      }
                    })];
                  }
                }), On(In, {
                  x: 160,
                  y: 20,
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "MAX:"
                    }), On(kn, {
                      style: Bs,
                      x: 100,
                      get children() {
                        return Ws();
                      }
                    })];
                  }
                }), On(In, {
                  x: 0,
                  y: 50,
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "Loaded Textures Cnt:"
                    }), On(kn, {
                      style: Is,
                      x: 270,
                      get children() {
                        return js();
                      }
                    })];
                  }
                }), On(In, {
                  x: 0,
                  y: 80,
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "Loading Textures Cnt:"
                    }), On(kn, {
                      style: Is,
                      x: 270,
                      get children() {
                        return $s();
                      }
                    })];
                  }
                }), On(In, {
                  x: 0,
                  y: 110,
                  get children() {
                    return [On(kn, {
                      style: Is,
                      children: "Failed Textures Cnt:"
                    }), On(kn, {
                      style: Is,
                      x: 270,
                      get children() {
                        return Vs();
                      }
                    })];
                  }
                })];
              }
            }));
          },
          rl = {
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
                x: Ai.layout.marginX
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
          nl = "./",
          ol = [{
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
        function il(e) {
          var t,
            r,
            n,
            o = (t = nl + "assets/icons_white.png", r = ol, n = en.createTexture("ImageTexture", {
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
          return On(In, Hn(e, {
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
        function al(e) {
          return On(In, Hn(e, {
            forwardStates: !0,
            get style() {
              return rl.NavButton;
            },
            get children() {
              return [On(In, {
                y: -16,
                get children() {
                  return On(il, {
                    scale: .5,
                    get name() {
                      return e.icon;
                    }
                  });
                }
              }), On(kn, {
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
        function sl(e) {
          var t,
            r = co();
          function n(t) {
            var n, o, i, a;
            if ((n = function n() {
              return t;
            }, i = fo(), a = Me(function () {
              return ao(n()).map(function (e) {
                return no(e, void 0, o);
              });
            }), Me(function () {
              var e,
                t = R(a());
              try {
                for (t.s(); !(e = t.n()).done;) {
                  var r = (0, e.value)(i.pathname);
                  if (r) return r;
                }
              } catch (n) {
                t.e(n);
              } finally {
                t.f();
              }
            }))()) return e.focusPage();
            r(t);
          }
          return [On(In, {
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
              return [On(kn, {
                x: 80,
                fontSize: 28,
                color: 4143380036,
                children: "Built With:"
              }), On(In, {
                y: 22,
                src: "./assets/solidWord.png",
                width: 280,
                height: 52
              }), On(In, {
                x: 0,
                y: 110,
                src: "./assets/tmdb.png",
                width: 80,
                height: 41
              }), On(kn, {
                x: 90,
                y: 110,
                contain: "width",
                width: 160,
                fontSize: 12,
                color: 4143380036,
                children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
              })];
            }
          }), On(pa, Hn(e, {
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
              return rl.Column;
            },
            scroll: "none",
            get children() {
              return [On(al, {
                onEnter: function onEnter() {
                  return n("/browse/all");
                },
                icon: "trending",
                children: "Trending"
              }), On(al, {
                icon: "movie",
                onEnter: function onEnter() {
                  return n("/browse/movie");
                },
                children: "Movies"
              }), On(al, {
                icon: "tv",
                onEnter: function onEnter() {
                  return n("/browse/tv");
                },
                children: "TV"
              }), On(al, {
                icon: "experiment",
                onEnter: function onEnter() {
                  return n("/examples");
                },
                children: "Examples"
              })];
            }
          })), On(In, {
            skipFocus: !0,
            ref: function ref(e) {
              "function" == typeof t ? t(e) : t = e;
            },
            get style() {
              return rl.Gradient;
            }
          })];
        }
        var ll = function ll(e) {
            Uo({
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
            var t = (Jo.setupTimers(), ze(We(Oo, Jo.onFocusChange, {
              defer: !0
            })), Jo);
            t.enabled = !1;
            var r,
              n,
              o = co();
            function i() {
              return !r.states.has("focus") && (n = St(), r.setFocus());
            }
            el({
              renderer: en
            });
            var a = C(Ee(!0), 2),
              s = a[0],
              l = a[1],
              d = fo(),
              h = ["/browse", "/entity"];
            return ze(function () {
              var e = d.pathname,
                t = h.some(function (t) {
                  return e.startsWith(t);
                });
              "/" === e && (t = !0), l(t);
            }), On(In, {
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
                return [On(Si, {}), On(tl, {
                  mountX: 1,
                  x: 1910,
                  y: 10,
                  get alpha() {
                    return s() ? 1 : 0;
                  }
                }), Pn(function () {
                  return e.children;
                }), On(sl, {
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
          dl = b("j", {
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
              width: Ai.layout.screenW,
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
              width: Ai.layout.screenW - 2 * Ai.layout.marginX,
              x: Ai.layout.marginX + Ai.layout.gutterX,
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
            peopleBio: S(S({}, Ai.typography.body1), {}, {
              fontFamily: "Ubuntu",
              fontWeight: "normal",
              contain: "both",
              width: 780,
              height: 340
            })
          }),
          hl = {
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
          ul = {
            color: Qn("#00A699"),
            height: 8,
            y: 2,
            x: -4,
            width: hl.width + 8
          },
          cl = {
            fontSize: 12,
            y: 12,
            contain: "width",
            textAlign: "center",
            color: Qn("#F6F6F9"),
            height: hl.height,
            width: hl.width
          },
          fl = (b("p", {
            container: hl,
            topBar: ul,
            text: cl
          }), 386),
          pl = 136;
        Qn("#715cab"), Qn("#5a39a2"), Qn("#291d43"), b("M", {
          fontSize: 32,
          contain: "width",
          textAlign: "center",
          mountY: -.35,
          color: Qn("#FFFFFF"),
          height: pl,
          width: fl,
          focus: {
            fontSize: 40
          },
          disabled: {
            color: Qn("#909090")
          }
        });
        function vl(e) {
          return On(In, Hn(e, {
            get style() {
              return dl.Thumbnail;
            }
          }));
        }
        function gl(e) {
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
                    d = o.value,
                    h = Object.getOwnPropertyDescriptor(e, d),
                    u = !h.get && !h.set && h.enumerable && h.writable && h.configurable,
                    c = !1,
                    f = 0,
                    p = R(t);
                  try {
                    for (p.s(); !(l = p.n()).done;) l.value.includes(d) && (c = !0, u ? a[f][d] = h.value : Object.defineProperty(a[f], d, h)), ++f;
                  } catch (v) {
                    p.e(v);
                  } finally {
                    p.f();
                  }
                  c || (u ? i[d] = h.value : Object.defineProperty(i, d, h));
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
          return On(es, Hn(o, {
            get style() {
              return dl.Row;
            },
            get children() {
              return On(bt, {
                get each() {
                  return n.items;
                },
                children: function children(e) {
                  return On(vl, e);
                }
              });
            }
          }));
        }
        var ml,
          xl,
          yl = "https://api.themoviedb.org/3",
          bl = "w185",
          wl = {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZiMDhiODgwZjc2MzEzMmIyMjExYWNjYjQ5MzZiZSIsIm5iZiI6MTcyNDA1NjEwMC4yMzQ4MzgsInN1YiI6IjY2YzMwMTg1Y2NlNzA0ZWJlYWQzNWY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dedjZUuwhiOFTlvO6FohvFkC-cEmS9QEw97du52t3bk"
            }
          };
        function Al(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bl;
          return xl + t + e;
        }
        function Sl(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return fetch(yl + e, S(S({}, wl), t)).then(function (e) {
            return e.json();
          });
        }
        function Tl() {
          return Sl("/configuration").then(function (e) {
            var t;
            return ml = e, xl = null === (t = e.images) || void 0 === t ? void 0 : t.secure_base_url, e;
          });
        }
        var Cl = b("y", {
          get: function get(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return ml ? Sl(e, t) : Tl().then(function () {
              return Sl(e, t);
            });
          },
          loadConfig: Tl
        });
        function Rl() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return e.map(function (e) {
            return {
              src: Al(e.poster_path || e.profile_path),
              tileSrc: Al(e.backdrop_path || e.profile_path, "w300"),
              backdrop: Al(e.backdrop_path, "w1280"),
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
        var _l = new Map(),
          kl = new Map();
        var Il = 900,
          Bl = {
            display: "flex",
            flexDirection: "column",
            flexBoundary: "fixed",
            width: Il,
            height: 220,
            gap: 16
          },
          Nl = S(S({}, Ai.typography.display2), {}, {
            fontFamily: "Ubuntu",
            fontWeight: 700,
            maxLines: 1,
            width: Il,
            contain: "width"
          }),
          El = function El(e) {
            return On(kn, Hn(e, {
              style: Nl
            }));
          },
          Fl = S(S({}, Ai.typography.body1), {}, {
            fontFamily: "Ubuntu",
            fontWeight: 400,
            lineHeight: 32,
            width: Il,
            maxLines: 3,
            contain: "width"
          }),
          Ll = {
            fontSize: 16,
            lineHeight: 20
          },
          zl = function zl(e) {
            return On(kn, Hn(e, {
              style: Fl,
              get children() {
                return e.children;
              }
            }));
          },
          Ml = function Ml(e) {
            return t = Dn("node"), jn(Wo, t, function () {
              return [8, 13, 11, 13];
            }), Wn(t, Hn(e, {
              style: {
                color: "0x00000099",
                borderRadius: 8,
                border: {
                  width: 2,
                  color: "0xffffffff"
                }
              }
            }), !0), Un(t, On(kn, {
              style: Ll,
              get children() {
                return e.children;
              }
            })), t;
            var t;
          },
          Pl = S(S({}, Ai.typography.body2), {}, {
            fontFamily: "Ubuntu",
            fontWeight: 400
          }),
          Ol = function Ol(e) {
            return On(In, {
              style: {
                display: "flex",
                flexDirection: "row",
                gap: 18,
                width: Il,
                height: 48
              },
              get children() {
                return [On(In, {
                  y: -4,
                  src: "./assets/stars.png",
                  width: 188,
                  height: 31
                }), On(In, {
                  y: -4,
                  flexItem: !1,
                  clipping: !0,
                  get width() {
                    return 188 * e.voteAverage / 10;
                  },
                  height: 31,
                  get children() {
                    return On(In, {
                      src: "./assets/stars-full.png",
                      width: 188,
                      height: 31
                    });
                  }
                }), On(kn, {
                  style: Pl,
                  get children() {
                    return [Pn(function () {
                      return e.voteCount;
                    }), " reviews"];
                  }
                }), On(kn, {
                  style: Pl,
                  get children() {
                    return e.metaText;
                  }
                }), On(bt, {
                  get each() {
                    return e.badges;
                  },
                  children: function children(e) {
                    return On(Ml, {
                      y: -5,
                      children: e
                    });
                  }
                })];
              }
            });
          },
          Dl = b("D", function (e) {
            return On(In, Hn({
              id: "contentBlock",
              style: Bl
            }, e, {
              get children() {
                return [On(El, {
                  get children() {
                    return e.content.title;
                  }
                }), On(zl, {
                  get children() {
                    return e.content.description;
                  }
                }), On(wt, {
                  get when() {
                    return e.content.voteCount;
                  },
                  get children() {
                    return On(Ol, {
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
          Ul = function Ul(e, t) {
            var r,
              n = function n() {
                return clearTimeout(r);
              };
            He() && Ye(n);
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
          Wl = function Wl() {
            var e = po(),
              t = C(Ee(0), 2),
              r = t[0],
              n = t[1],
              o = C(Ee({}), 2),
              i = o[0],
              a = o[1],
              s = co(),
              l = Oe(function () {
                return 0;
              }),
              d = Me(function () {
                return c = e.filter || "all", t = function t(e) {
                  var t = "/trending/".concat(c, "/week?page=").concat(e);
                  if (_l.has(t)) return _l.get(t);
                  var r = Cl.get(t).then(function (e) {
                    var t = e.results.filter(function (e) {
                        return !e.adult;
                      }),
                      r = function (e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
                        for (var r = [], n = 0, o = e.length; n < o; n += t) r.push(e.slice(n, n + t));
                        return r;
                      }((kl.has(c) ? kl.get(c) : []).concat(Rl(t)));
                    return r[r.length - 1].length < 7 ? kl.set(c, r.pop()) : kl.delete(c), r;
                  });
                  return _l.set(t, r), r;
                }, r = C(Ee([]), 2), n = r[0], o = r[1], i = C(Ee(1), 2), a = i[0], s = i[1], l = C(Ee(!1), 2), d = l[0], h = l[1], u = C(Pe(a, t), 1)[0], Fe(function () {
                  var e = u();
                  e && De(function () {
                    0 === e.length && h(!0), o(function (t) {
                      return [].concat(_toConsumableArray(t), _toConsumableArray(e));
                    });
                  });
                }), {
                  pages: n,
                  page: a,
                  setPage: s,
                  setPages: o,
                  end: d,
                  setEnd: h
                };
                var t, r, n, o, i, a, s, l, d, h, u, c;
              }),
              h = Ul(function (e) {
                return ri(e);
              }, 400),
              u = Ul(function (e) {
                return a(e || {});
              }, 200);
            function c() {
              var e;
              null === (e = this.children.selected) || void 0 === e || e.setFocus(), n(-1 * (this.y || 0) + 24);
              var t = d().pages().length;
              this.parent.selected = this.parent.children.indexOf(this), (0 === t || this.parent.selected && this.parent.selected >= t - 2) && d().setPage(function (e) {
                return e + 1;
              });
            }
            function f() {
              var e = this.children.find(function (e) {
                return e.states.has("focus");
              });
              return _(e && e.href), s(e.href), !0;
            }
            return ze(We(St, function (e) {
              e.backdrop && h(e.backdrop), e.heroContent && u(e.heroContent);
            }, {
              defer: !0
            })), On(wt, {
              get when() {
                return d().pages().length;
              },
              get children() {
                return [On(Dl, {
                  y: 360,
                  x: 162,
                  get content() {
                    return i();
                  }
                }), On(In, {
                  clipping: !0,
                  get style() {
                    return dl.itemsContainer;
                  },
                  get children() {
                    return On(pa, {
                      id: "BrowseColumn",
                      plinko: !0,
                      announce: "All Trending - Week",
                      get y() {
                        return r();
                      },
                      scroll: "none",
                      get style() {
                        return dl.Column;
                      },
                      get children() {
                        return On(bt, {
                          get each() {
                            return d().pages();
                          },
                          children: function children(e, t) {
                            return On(gl, {
                              get autofocus() {
                                return l(t());
                              },
                              items: e,
                              width: 1620,
                              onFocus: c,
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
          Yl = function Yl() {
            return e = Dn("node"), Yn(e, "style", {
              width: 1920,
              height: 1080,
              color: 868483072
            }), e;
            var e;
          },
          Hl = new URL("AppCoreExtensions-legacy-DXcEaW6c.js", A.meta.url).href,
          jl = xt(function () {
            return ce(function () {
              return A.import("./Grid-legacy-YDrzolwM.js");
            }, void 0, A.meta.url);
          }),
          Ql = xt(function () {
            return ce(function () {
              return A.import("./Portal-legacy-DsBqEG6K.js");
            }, void 0, A.meta.url);
          }),
          Kl = xt(function () {
            return ce(function () {
              return A.import("./Text-legacy-D97JSden.js");
            }, void 0, A.meta.url);
          }),
          $l = xt(function () {
            return ce(function () {
              return A.import("./Create-legacy-Ca9UL4Pq.js");
            }, void 0, A.meta.url);
          }),
          Xl = xt(function () {
            return ce(function () {
              return A.import("./Viewport-legacy-y7UvoUUa.js");
            }, void 0, A.meta.url);
          }),
          Gl = xt(function () {
            return ce(function () {
              return A.import("./Buttons-legacy-DoShHRE8.js");
            }, void 0, A.meta.url);
          }),
          Vl = xt(function () {
            return ce(function () {
              return A.import("./Flex-legacy-CkfGD2tp.js");
            }, void 0, A.meta.url);
          }),
          Zl = xt(function () {
            return ce(function () {
              return A.import("./FlexSize-legacy-DAl4B736.js");
            }, void 0, A.meta.url);
          }),
          ql = xt(function () {
            return ce(function () {
              return A.import("./FlexColumnSize-legacy-D2CUnhJY.js");
            }, void 0, A.meta.url);
          }),
          Jl = xt(function () {
            return ce(function () {
              return A.import("./FlexColumn-legacy-C8FC7C2h.js");
            }, void 0, A.meta.url);
          }),
          ed = xt(function () {
            return ce(function () {
              return A.import("./ButtonsMaterial-legacy-uAT8J-6A.js");
            }, void 0, A.meta.url);
          }),
          td = xt(function () {
            return ce(function () {
              return A.import("./SuperFlex-legacy-CVrzC_jD.js");
            }, void 0, A.meta.url);
          }),
          rd = xt(function () {
            return ce(function () {
              return A.import("./Entity-legacy-D-t8W9u_.js");
            }, void 0, A.meta.url);
          }),
          nd = xt(function () {
            return ce(function () {
              return A.import("./People-legacy-CkcDYcuT.js");
            }, void 0, A.meta.url);
          });
        dn.debug = !1, dn.animationsEnabled = !0, dn.fontSettings.fontFamily = "Ubuntu", dn.fontSettings.color = Qn("#f6f6f6"), dn.fontSettings.fontSize = 32, dn.rendererOptions = {
          coreExtensionModule: Hl,
          fpsUpdateInterval: 200,
          enableInspector: !0,
          deviceLogicalPixelRatio: window.innerHeight / 1080
        }, Mn(function () {
          return On(Bo, {
            root: function root(e) {
              return On(ll, e);
            },
            get children() {
              return [On(Co, {
                path: "",
                component: Wl
              }), On(Co, {
                path: "examples",
                component: Ql
              }), On(Co, {
                path: "browse/:filter",
                component: Wl
              }), On(Co, {
                path: "grid",
                component: jl
              }), On(Co, {
                path: "text",
                component: Kl
              }), On(Co, {
                path: "buttons",
                component: Gl
              }), On(Co, {
                path: "flex",
                component: Vl
              }), On(Co, {
                path: "create",
                component: $l
              }), On(Co, {
                path: "viewport",
                component: Xl
              }), On(Co, {
                path: "flexsize",
                component: Zl
              }), On(Co, {
                path: "flexcolumnsize",
                component: ql
              }), On(Co, {
                path: "flexcolumn",
                component: Jl
              }), On(Co, {
                path: "superflex",
                component: td
              }), On(Co, {
                path: "buttonsmaterial",
                component: ed
              }), On(Co, {
                path: "entity/people/:id",
                component: nd
              }), On(Co, {
                path: "entity/:type/:id",
                component: rd
              }), On(Co, {
                path: "*all",
                component: Yl
              })];
            }
          });
        });
      }
    };
  });
}();