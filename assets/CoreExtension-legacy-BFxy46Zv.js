function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function () {
  function t(t, r) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != r) {
        var i,
          n,
          s,
          a,
          o = [],
          h = !0,
          u = !1;
        try {
          if (s = (r = r.call(t)).next, 0 === e) {
            if (Object(r) !== r) return;
            h = !1;
          } else for (; !(h = (i = s.call(r)).done) && (o.push(i.value), o.length !== e); h = !0);
        } catch (t) {
          u = !0, n = t;
        } finally {
          try {
            if (!h && null != r["return"] && (a = r["return"](), Object(a) !== a)) return;
          } finally {
            if (u) throw n;
          }
        }
        return o;
      }
    }(t, r) || function (t, r) {
      if (!t) return;
      if ("string" == typeof t) return e(t, r);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === i && t.constructor && (i = t.constructor.name);
      if ("Map" === i || "Set" === i) return Array.from(t);
      if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return e(t, r);
    }(t, r) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
    return i;
  }
  function r() {
    "use strict";

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    r = function r() {
      return e;
    };
    var t,
      e = {},
      i = Object.prototype,
      n = i.hasOwnProperty,
      s = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      a = "function" == typeof Symbol ? Symbol : {},
      o = a.iterator || "@@iterator",
      h = a.asyncIterator || "@@asyncIterator",
      u = a.toStringTag || "@@toStringTag";
    function d(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      d({}, "");
    } catch (t) {
      d = function d(t, e, r) {
        return t[e] = r;
      };
    }
    function c(t, e, r, i) {
      var n = e && e.prototype instanceof T ? e : T,
        a = Object.create(n.prototype),
        o = new N(i || []);
      return s(a, "_invoke", {
        value: S(t, r, o)
      }), a;
    }
    function l(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = c;
    var f = "suspendedStart",
      v = "suspendedYield",
      g = "executing",
      p = "completed",
      E = {};
    function T() {}
    function x() {}
    function _() {}
    var m = {};
    d(m, o, function () {
      return this;
    });
    var R = Object.getPrototypeOf,
      A = R && R(R(U([])));
    A && A !== i && n.call(A, o) && (m = A);
    var b = _.prototype = T.prototype = Object.create(m);
    function y(t) {
      ["next", "throw", "return"].forEach(function (e) {
        d(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function w(t, e) {
      function r(i, s, a, o) {
        var h = l(t[i], t, s);
        if ("throw" !== h.type) {
          var u = h.arg,
            d = u.value;
          return d && "object" == _typeof(d) && n.call(d, "__await") ? e.resolve(d.__await).then(function (t) {
            r("next", t, a, o);
          }, function (t) {
            r("throw", t, a, o);
          }) : e.resolve(d).then(function (t) {
            u.value = t, a(u);
          }, function (t) {
            return r("throw", t, a, o);
          });
        }
        o(h.arg);
      }
      var i;
      s(this, "_invoke", {
        value: function value(t, n) {
          function s() {
            return new e(function (e, i) {
              r(t, n, e, i);
            });
          }
          return i = i ? i.then(s, s) : s();
        }
      });
    }
    function S(e, r, i) {
      var n = f;
      return function (s, a) {
        if (n === g) throw Error("Generator is already running");
        if (n === p) {
          if ("throw" === s) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (i.method = s, i.arg = a;;) {
          var o = i.delegate;
          if (o) {
            var h = M(o, i);
            if (h) {
              if (h === E) continue;
              return h;
            }
          }
          if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
            if (n === f) throw n = p, i.arg;
            i.dispatchException(i.arg);
          } else "return" === i.method && i.abrupt("return", i.arg);
          n = g;
          var u = l(e, r, i);
          if ("normal" === u.type) {
            if (n = i.done ? p : v, u.arg === E) continue;
            return {
              value: u.arg,
              done: i.done
            };
          }
          "throw" === u.type && (n = p, i.method = "throw", i.arg = u.arg);
        }
      };
    }
    function M(e, r) {
      var i = r.method,
        n = e.iterator[i];
      if (n === t) return r.delegate = null, "throw" === i && e.iterator["return"] && (r.method = "return", r.arg = t, M(e, r), "throw" === r.method) || "return" !== i && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + i + "' method")), E;
      var s = l(n, e.iterator, r.arg);
      if ("throw" === s.type) return r.method = "throw", r.arg = s.arg, r.delegate = null, E;
      var a = s.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, E) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, E);
    }
    function I(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function L(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function N(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(I, this), this.reset(!0);
    }
    function U(e) {
      if (e || "" === e) {
        var r = e[o];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var i = -1,
            s = function r() {
              for (; ++i < e.length;) if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
              return r.value = t, r.done = !0, r;
            };
          return s.next = s;
        }
      }
      throw new TypeError(_typeof(e) + " is not iterable");
    }
    return x.prototype = _, s(b, "constructor", {
      value: _,
      configurable: !0
    }), s(_, "constructor", {
      value: x,
      configurable: !0
    }), x.displayName = d(_, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === x || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, d(t, u, "GeneratorFunction")), t.prototype = Object.create(b), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, y(w.prototype), d(w.prototype, h, function () {
      return this;
    }), e.AsyncIterator = w, e.async = function (t, r, i, n, s) {
      void 0 === s && (s = Promise);
      var a = new w(c(t, r, i, n), s);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, y(b), d(b, u, "Generator"), d(b, o, function () {
      return this;
    }), d(b, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var i in e) r.push(i);
      return r.reverse(), function t() {
        for (; r.length;) {
          var i = r.pop();
          if (i in e) return t.value = i, t.done = !1, t;
        }
        return t.done = !0, t;
      };
    }, e.values = U, N.prototype = {
      constructor: N,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(L), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function i(i, n) {
          return o.type = "throw", o.arg = e, r.next = i, n && (r.method = "next", r.arg = t), !!n;
        }
        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
          var a = this.tryEntries[s],
            o = a.completion;
          if ("root" === a.tryLoc) return i("end");
          if (a.tryLoc <= this.prev) {
            var h = n.call(a, "catchLoc"),
              u = n.call(a, "finallyLoc");
            if (h && u) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            } else if (h) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var i = this.tryEntries[r];
          if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
            var s = i;
            break;
          }
        }
        s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
        var a = s ? s.completion : {};
        return a.type = t, a.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, E) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), E;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), E;
        }
      },
      "catch": function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var i = r.completion;
            if ("throw" === i.type) {
              var n = i.arg;
              L(r);
            }
            return n;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, i) {
        return this.delegate = {
          iterator: U(e),
          resultName: r,
          nextLoc: i
        }, "next" === this.method && (this.arg = t), E;
      }
    }, e;
  }
  function i(t, e, r, i, n, s, a) {
    try {
      var o = t[s](a),
        h = o.value;
    } catch (u) {
      return void r(u);
    }
    o.done ? e(h) : Promise.resolve(h).then(i, n);
  }
  function n(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (n, s) {
        var a = t.apply(e, r);
        function o(t) {
          i(a, n, s, o, h, "next", t);
        }
        function h(t) {
          i(a, n, s, o, h, "throw", t);
        }
        o(void 0);
      });
    };
  }
  function s(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), r.push.apply(r, i);
    }
    return r;
  }
  function a(t, e, r) {
    var i;
    return (e = "symbol" == _typeof(i = function (t, e) {
      if ("object" != _typeof(t) || !t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var i = r.call(t, e || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }(e, "string")) ? i : i + "") in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }
  System.register([], function (e, i) {
    "use strict";

    return {
      execute: function execute() {
        function i(t, e) {}
        e({
          A: function A(t) {
            o = "webgl" === t;
          },
          a: i,
          c: p,
          d: function d(t, e, r) {
            var i = p(Math.max(t.x1, e.x1), Math.max(t.y1, e.y1), Math.min(t.x2, e.x2), Math.min(t.y2, e.y2), r);
            if (i.x1 < i.x2 && i.y1 < i.y2) return i;
            return p(0, 0, 0, 0, i);
          },
          e: function e(t, _e, r) {
            var i = Math.max(t.x, _e.x),
              n = Math.max(t.y, _e.y),
              s = Math.min(t.x + t.width, _e.x + _e.width) - i,
              a = Math.min(t.y + t.height, _e.y + _e.height) - n;
            if (s > 0 && a > 0) return r ? (r.x = i, r.y = n, r.width = s, r.height = a, r) : {
              x: i,
              y: n,
              width: s,
              height: a
            };
            if (r) return r.x = 0, r.y = 0, r.width = 0, r.height = 0, r;
            return {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          },
          f: function f(t) {
            return (255 & t) / 255;
          },
          g: function g(t) {
            var e = Math.floor(255 * t[0]),
              r = Math.floor(255 * t[1]),
              i = Math.floor(255 * t[2]),
              n = Math.floor(255 * t[3]);
            return "rgba(".concat(e, ",").concat(r, ",").concat(i, ",").concat(n.toFixed(4), ")");
          },
          i: u,
          j: function j(t) {
            return t.x1 < t.x2 && t.y1 < t.y2;
          },
          k: function k(t, e) {
            return t.x1 < e.x2 && t.x2 > e.x1 && t.y1 < e.y2 && t.y2 > e.y1;
          },
          m: function m(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var i = (255 & t) / 255 * e,
              n = o ? i : 1,
              s = Math.trunc((t >>> 24) * n),
              a = Math.trunc((t >>> 16 & 255) * n),
              h = Math.trunc((t >>> 8 & 255) * n),
              u = Math.trunc(255 * i);
            if (r) return (u << 24 | h << 16 | a << 8 | s) >>> 0;
            return (s << 24 | a << 16 | h << 8 | u) >>> 0;
          },
          n: function n(t, e) {
            if (e) return e.x = t.x1, e.y = t.y1, e.width = t.x2 - t.x1, e.height = t.y2 - t.y1, e;
            return {
              x: t.x1,
              y: t.y1,
              width: t.x2 - t.x1,
              height: t.y2 - t.y1
            };
          },
          o: function o(t, e) {
            if (e) return e.x = t.x, e.y = t.y, e.width = t.width, e.height = t.height, e;
            return {
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height
            };
          },
          q: function q(t, e) {
            var r = t >>> 24,
              i = t >>> 16 & 255,
              n = t >>> 8 & 255,
              s = Math.trunc((255 & t) * e);
            return (r << 24 | i << 16 | n << 8 | s) >>> 0;
          },
          t: function t(_t, e, r) {
            var i = Math.trunc(_t >>> 24),
              n = Math.trunc(_t >>> 16 & 255),
              s = Math.trunc(_t >>> 8 & 255),
              a = Math.trunc(255 & _t),
              o = Math.trunc(e >>> 24),
              h = Math.trunc(e >>> 16 & 255),
              u = Math.trunc(e >>> 8 & 255),
              d = Math.trunc(255 & e),
              c = Math.round(o * r + i * (1 - r)),
              l = Math.round(h * r + n * (1 - r)),
              f = Math.round(u * r + s * (1 - r)),
              v = Math.round(d * r + a * (1 - r));
            return (c << 24 | l << 16 | f << 8 | v) >>> 0;
          },
          u: function u(t, e) {
            return t.x1 <= e.x2 && t.y1 <= e.y2 && t.x2 >= e.x1 && t.y2 >= e.y1;
          }
        });
        var o = !0;
        function h(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function u() {
          return {
            BASE_URL: "./",
            MODE: "production",
            DEV: !1,
            PROD: !0,
            SSR: !1,
            LEGACY: !0
          } && !0;
        }
        var d = /*#__PURE__*/function () {
          function d() {
            _classCallCheck(this, d);
            a(this, "eventListeners", {});
          }
          return _createClass(d, [{
            key: "on",
            value: function on(t, e) {
              var r = this.eventListeners[t];
              r || (r = []), r.push(e), this.eventListeners[t] = r;
            }
          }, {
            key: "off",
            value: function off(t, e) {
              var r = this.eventListeners[t];
              if (r) if (e) {
                var i = r.indexOf(e);
                i >= 0 && r.splice(i, 1);
              } else delete this.eventListeners[t];
            }
          }, {
            key: "once",
            value: function once(t, e) {
              var _this = this;
              var _r = function r(i, n) {
                _this.off(t, _r), e(i, n);
              };
              this.on(t, _r);
            }
          }, {
            key: "emit",
            value: function emit(t, e) {
              var _this2 = this;
              var r = this.eventListeners[t];
              r && _toConsumableArray(r).forEach(function (t) {
                t(_this2, e);
              });
            }
          }, {
            key: "removeAllListeners",
            value: function removeAllListeners() {
              this.eventListeners = {};
            }
          }]);
        }();
        e("E", d);
        var c = /*#__PURE__*/function () {
          function c() {
            _classCallCheck(this, c);
          }
          return _createClass(c, null, [{
            key: "makeCacheKey",
            value: function makeCacheKey(t) {
              return !1;
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(t) {
              return {};
            }
          }]);
        }();
        function l(t, e, r) {
          var i = t.createShader(e);
          if (!i) throw new Error();
          if (t.shaderSource(i, r), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS)) return i;
          console.log(t.getShaderInfoLog(i)), t.deleteShader(i);
        }
        e("C", c);
        var f = /*#__PURE__*/function (_c) {
          function f(t) {
            var _this3;
            _classCallCheck(this, f);
            _this3 = _callSuper(this, f), a(_assertThisInitialized(_this3), "boundBufferCollection", null), a(_assertThisInitialized(_this3), "buffersBound", !1), a(_assertThisInitialized(_this3), "program", void 0), a(_assertThisInitialized(_this3), "vao", void 0), a(_assertThisInitialized(_this3), "renderer", void 0), a(_assertThisInitialized(_this3), "glw", void 0), a(_assertThisInitialized(_this3), "attributeBuffers", void 0), a(_assertThisInitialized(_this3), "attributeLocations", void 0), a(_assertThisInitialized(_this3), "attributeNames", void 0), a(_assertThisInitialized(_this3), "uniformLocations", void 0), a(_assertThisInitialized(_this3), "uniformTypes", void 0), a(_assertThisInitialized(_this3), "supportsIndexedTextures", void 0);
            var e = _this3.renderer = t.renderer,
              r = _this3.glw = _this3.renderer.glw;
            _this3.supportsIndexedTextures = t.supportsIndexedTextures || !1;
            var i = r.isWebGl2(),
              n = i && t.webgl2Extensions || !i && t.webgl1Extensions || [],
              s = i ? "2.0" : "1.0";
            n.forEach(function (t) {
              if (!r.getExtension(t)) throw new Error("Shader \"".concat(_this3.constructor.name, "\" requires extension \"").concat(t, "\" for WebGL ").concat(s, " but wasn't found"));
            });
            var o = t.shaderSources || _this3.constructor.shaderSources;
            if (!o) throw new Error("Shader \"".concat(_this3.constructor.name, "\" is missing shaderSources."));
            i && null != o && o.webGl2 && (o.fragment = o.webGl2.fragment, o.vertex = o.webGl2.vertex, delete o.webGl2);
            var h = e.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS,
              u = o.vertex instanceof Function ? o.vertex(h) : o.vertex,
              d = o.fragment instanceof Function ? o.fragment(h) : o.fragment,
              c = l(r, r.VERTEX_SHADER, u),
              _f = l(r, r.FRAGMENT_SHADER, d);
            if (!c || !_f) throw new Error();
            var v = function (t, e, r) {
              var i = t.createProgram();
              if (!i) throw new Error();
              if (t.attachShader(i, e), t.attachShader(i, r), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS)) return i;
              console.log(t.getProgramInfoLog(i)), t.deleteProgram(i);
            }(r, c, _f);
            if (!v) throw new Error();
            if (_this3.program = v, i) {
              var g = r.createVertexArray();
              if (!g) throw new Error();
              _this3.vao = g, r.bindVertexArray(_this3.vao);
            }
            _this3.attributeLocations = {}, _this3.attributeBuffers = {}, _this3.attributeNames = [], _toConsumableArray(t.attributes).forEach(function (t) {
              var e = r.getAttribLocation(_this3.program, t);
              if (e < 0) throw new Error("".concat(_this3.constructor.name, ": Vertex shader must have an attribute \"").concat(t, "\"!"));
              var i = r.createBuffer();
              if (!i) throw new Error("".concat(_this3.constructor.name, ": Could not create buffer for attribute \"").concat(t, "\""));
              _this3.attributeLocations[t] = e, _this3.attributeBuffers[t] = i, _this3.attributeNames.push(t);
            }), _this3.uniformLocations = {}, _this3.uniformTypes = {}, t.uniforms.forEach(function (t) {
              var e = r.getUniformLocation(_this3.program, t.name);
              _this3.uniformTypes[t.name] = t.uniform, e ? _this3.uniformLocations[t.name] = e : console.warn("Shader \"".concat(_this3.constructor.name, "\" could not get uniform location for \"").concat(t.name, "\""));
            });
            return _this3;
          }
          _inherits(f, _c);
          return _createClass(f, [{
            key: "bindBufferAttribute",
            value: function bindBufferAttribute(t, e, r) {
              var i = this.glw;
              i.enableVertexAttribArray(t), i.vertexAttribPointer(e, t, r.size, r.type, r.normalized, r.stride, r.offset);
            }
          }, {
            key: "disableAttribute",
            value: function disableAttribute(t) {
              this.glw.disableVertexAttribArray(t);
            }
          }, {
            key: "disableAttributes",
            value: function disableAttributes() {
              for (var t in this.attributeLocations) this.disableAttribute(this.attributeLocations[t]);
              this.boundBufferCollection = null;
            }
          }, {
            key: "canBatchShaderProps",
            value: function canBatchShaderProps(t, e) {
              return !1;
            }
          }, {
            key: "bindRenderOp",
            value: function bindRenderOp(t, e) {
              this.bindBufferCollection(t.buffers), t.textures.length > 0 && this.bindTextures(t.textures);
              var r = t.glw,
                i = t.parentHasRenderTexture;
              if (!t.renderToTexture || !i) {
                if (i) {
                  var n = t.framebufferDimensions || {},
                    s = n.width,
                    a = n.height;
                  this.setUniform("u_pixelRatio", 1), this.setUniform("u_resolution", new Float32Array([null != s ? s : 0, null != a ? a : 0]));
                } else this.setUniform("u_pixelRatio", t.options.pixelRatio), this.setUniform("u_resolution", new Float32Array([r.canvas.width, r.canvas.height]));
                if (e) {
                  if (h(e, "$dimensions")) {
                    var o = e.$dimensions;
                    o || (o = t.dimensions), this.setUniform("u_dimensions", [o.width, o.height]);
                  }
                  if (h(e, "$alpha")) {
                    var u = e.$alpha;
                    u || (u = t.alpha), this.setUniform("u_alpha", u);
                  }
                  this.bindProps(e);
                }
              }
            }
          }, {
            key: "setUniform",
            value: function setUniform(t) {
              var _this$glw;
              for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                e[_key - 1] = arguments[_key];
              }
              (_this$glw = this.glw).setUniform.apply(_this$glw, [this.uniformTypes[t], this.uniformLocations[t]].concat(e));
            }
          }, {
            key: "bindBufferCollection",
            value: function bindBufferCollection(t) {
              if (this.boundBufferCollection !== t) {
                for (var e in this.attributeLocations) {
                  var r = t.getBuffer(e),
                    i = t.getAttributeInfo(e);
                  this.bindBufferAttribute(this.attributeLocations[e], r, i);
                }
                this.boundBufferCollection = t;
              }
            }
          }, {
            key: "bindProps",
            value: function bindProps(t) {}
          }, {
            key: "bindTextures",
            value: function bindTextures(t) {}
          }, {
            key: "attach",
            value: function attach() {
              this.glw.useProgram(this.program), this.glw.useProgram(this.program), this.glw.isWebGl2() && this.vao && this.glw.bindVertexArray(this.vao);
            }
          }, {
            key: "detach",
            value: function detach() {
              this.disableAttributes();
            }
          }]);
        }(c);
        a(f, "shaderSources", void 0), e("W", f);
        var v = /*#__PURE__*/function (_d) {
          function v(t) {
            var _this4;
            _classCallCheck(this, v);
            _this4 = _callSuper(this, v), a(_assertThisInitialized(_this4), "txManager", void 0), a(_assertThisInitialized(_this4), "dimensions", null), a(_assertThisInitialized(_this4), "error", null), a(_assertThisInitialized(_this4), "state", "freed"), a(_assertThisInitialized(_this4), "renderableOwners", new Set()), _this4.txManager = t;
            return _this4;
          }
          _inherits(v, _d);
          return _createClass(v, [{
            key: "setRenderableOwner",
            value: function setRenderableOwner(t, e) {
              e ? this.renderableOwners.add(t) : this.renderableOwners["delete"](t);
            }
          }, {
            key: "renderable",
            get: function get() {
              return this.renderableOwners.size > 0;
            }
          }, {
            key: "setState",
            value: function setState(t) {
              if (this.state !== t) {
                for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  e[_key2 - 1] = arguments[_key2];
                }
                if (this.state = t, "loaded" === t) {
                  var r = e;
                  this.dimensions = r[0];
                } else if ("failed" === t) {
                  var i = e;
                  this.error = i[0];
                }
                this.emit.apply(this, [t].concat(e));
              }
            }
          }], [{
            key: "makeCacheKey",
            value: function makeCacheKey(t) {
              return !1;
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(t) {
              return {};
            }
          }]);
        }(d);
        e("h", v);
        var g = e("b", function (t) {
          return [(t >>> 24) / 255, (t >>> 16 & 255) / 255, (t >>> 8 & 255) / 255, (255 & t) / 255];
        });
        e("z", function (t) {
          return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
        });
        function p(t, e, r, i, n) {
          return n ? (n.x1 = t, n.y1 = e, n.x2 = r, n.y2 = i, n) : {
            x1: t,
            y1: e,
            x2: r,
            y2: i
          };
        }
        var E = /*#__PURE__*/function (_d2) {
          function E(t, e) {
            var _this5;
            _classCallCheck(this, E);
            _this5 = _callSuper(this, E), a(_assertThisInitialized(_this5), "fontFamily", void 0), a(_assertThisInitialized(_this5), "descriptors", void 0), a(_assertThisInitialized(_this5), "loaded", !1), _this5.fontFamily = t, _this5.descriptors = function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(r), !0).forEach(function (e) {
                  a(t, e, r[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                });
              }
              return t;
            }({
              style: "normal",
              weight: "normal",
              stretch: "normal"
            }, e);
            return _this5;
          }
          _inherits(E, _d2);
          return _createClass(E, null, [{
            key: "convertToCssFontFaceDescriptors",
            value: function convertToCssFontFaceDescriptors(t) {
              return {
                style: t.style,
                weight: "number" == typeof t.weight ? "".concat(t.weight) : t.weight,
                stretch: t.stretch,
                unicodeRange: t.unicodeRange,
                variant: t.variant,
                featureSettings: t.featureSettings,
                display: t.display
              };
            }
          }]);
        }(d);
        e("T", E);
        var T = /*#__PURE__*/function (_v) {
          function T(t, e) {
            var _this6;
            _classCallCheck(this, T);
            _this6 = _callSuper(this, T, [t]), a(_assertThisInitialized(_this6), "props", void 0), _this6.props = T.resolveDefaults(e || {});
            return _this6;
          }
          _inherits(T, _v);
          return _createClass(T, [{
            key: "color",
            get: function get() {
              return this.props.color;
            },
            set: function set(t) {
              this.props.color = t;
            }
          }, {
            key: "getTextureData",
            value: function getTextureData() {
              var t = this;
              return n(r().mark(function e() {
                var i, n;
                return r().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return i = new Uint32Array([t.color]), n = new Uint8ClampedArray(i.buffer), e.abrupt("return", {
                        data: new ImageData(n, 1, 1),
                        premultiplyAlpha: !0
                      });
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }))();
            }
          }], [{
            key: "makeCacheKey",
            value: function makeCacheKey(t) {
              return "ColorTexture,".concat(T.resolveDefaults(t).color);
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(t) {
              return {
                color: t.color || 4294967295
              };
            }
          }]);
        }(v);
        a(T, "z$__type__Props", void 0), e("v", T);
        var x = /*#__PURE__*/_createClass(function x(t, e) {
          _classCallCheck(this, x);
          a(this, "memManager", void 0), a(this, "textureSource", void 0), this.memManager = t, this.textureSource = e;
        });
        e("x", x);
        var _ = /*#__PURE__*/_createClass(function _(t) {
          _classCallCheck(this, _);
          a(this, "options", void 0), a(this, "mode", void 0), a(this, "stage", void 0), a(this, "txManager", void 0), a(this, "txMemManager", void 0), a(this, "shManager", void 0), a(this, "rttNodes", []), this.options = t, this.stage = t.stage, this.txManager = t.txManager, this.txMemManager = t.txMemManager, this.shManager = t.shManager;
        });
        e("y", _);
        var m = /*#__PURE__*/_createClass(function m() {
          _classCallCheck(this, m);
        });
        var R = /*#__PURE__*/function (_m) {
          function R(t, e, r, i, n, s, o, h, u, d, c, l, f) {
            var _this7;
            _classCallCheck(this, R);
            _this7 = _callSuper(this, R), a(_assertThisInitialized(_this7), "glw", void 0), a(_assertThisInitialized(_this7), "options", void 0), a(_assertThisInitialized(_this7), "buffers", void 0), a(_assertThisInitialized(_this7), "shader", void 0), a(_assertThisInitialized(_this7), "shaderProps", void 0), a(_assertThisInitialized(_this7), "alpha", void 0), a(_assertThisInitialized(_this7), "clippingRect", void 0), a(_assertThisInitialized(_this7), "dimensions", void 0), a(_assertThisInitialized(_this7), "bufferIdx", void 0), a(_assertThisInitialized(_this7), "zIndex", void 0), a(_assertThisInitialized(_this7), "renderToTexture", void 0), a(_assertThisInitialized(_this7), "parentHasRenderTexture", void 0), a(_assertThisInitialized(_this7), "framebufferDimensions", void 0), a(_assertThisInitialized(_this7), "length", 0), a(_assertThisInitialized(_this7), "numQuads", 0), a(_assertThisInitialized(_this7), "textures", []), a(_assertThisInitialized(_this7), "maxTextures", void 0), _this7.glw = t, _this7.options = e, _this7.buffers = r, _this7.shader = i, _this7.shaderProps = n, _this7.alpha = s, _this7.clippingRect = o, _this7.dimensions = h, _this7.bufferIdx = u, _this7.zIndex = d, _this7.renderToTexture = c, _this7.parentHasRenderTexture = l, _this7.framebufferDimensions = f, _this7.maxTextures = i.supportsIndexedTextures ? t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS) : 1;
            return _this7;
          }
          _inherits(R, _m);
          return _createClass(R, [{
            key: "addTexture",
            value: function addTexture(t) {
              var e = this.textures,
                r = this.maxTextures,
                i = e.findIndex(function (e) {
                  return e === t;
                });
              if (-1 !== i) return i;
              var n = e.length;
              return n >= r ? 4294967295 : (this.textures.push(t), n);
            }
          }, {
            key: "draw",
            value: function draw() {
              var t = this.glw,
                e = this.shader,
                r = this.shaderProps,
                i = this.options;
              i.shManager.useShader(e), e.bindRenderOp(this, r);
              var n = this.bufferIdx / 24 * 6 * 2;
              if (this.clippingRect.valid) {
                var s = this.clippingRect,
                  a = s.x,
                  o = s.y,
                  h = s.width,
                  u = s.height,
                  d = i.pixelRatio,
                  c = i.canvas.height,
                  l = Math.round(a * d),
                  f = Math.round(h * d),
                  v = Math.round(u * d),
                  g = Math.round(c - v - o * d);
                t.setScissorTest(!0), t.scissor(l, g, f, v);
              } else t.setScissorTest(!1);
              t.drawElements(t.TRIANGLES, 6 * this.numQuads, t.UNSIGNED_SHORT, n);
            }
          }]);
        }(m);
        function A(t) {
          var e = {
            MAX_RENDERBUFFER_SIZE: 0,
            MAX_TEXTURE_SIZE: 0,
            MAX_VIEWPORT_DIMS: 0,
            MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
            MAX_TEXTURE_IMAGE_UNITS: 0,
            MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
            MAX_VERTEX_ATTRIBS: 0,
            MAX_VARYING_VECTORS: 0,
            MAX_VERTEX_UNIFORM_VECTORS: 0,
            MAX_FRAGMENT_UNIFORM_VECTORS: 0
          };
          return Object.keys(e).forEach(function (r) {
            e[r] = t.getParameter(t[r]);
          }), e;
        }
        function b(t) {
          var e = {
            ANGLE_instanced_arrays: null,
            WEBGL_compressed_texture_s3tc: null,
            WEBGL_compressed_texture_astc: null,
            WEBGL_compressed_texture_etc: null,
            WEBGL_compressed_texture_etc1: null,
            WEBGL_compressed_texture_pvrtc: null,
            WEBKIT_WEBGL_compressed_texture_pvrtc: null,
            WEBGL_compressed_texture_s3tc_srgb: null,
            OES_vertex_array_object: null
          };
          return Object.keys(e).forEach(function (r) {
            e[r] = t.getExtension(r);
          }), e;
        }
        e("p", R);
        var y = function y(t) {
            return t && !(t & t - 1);
          },
          w = function w(t, e, r, i) {
            var n = 3 * t,
              s = 3 * (r - t) - n,
              a = 1 - n - s,
              o = 3 * e,
              h = 3 * (i - e) - o,
              u = 1 - o - h;
            return function (t) {
              if (t >= 1) return 1;
              if (t <= 0) return 0;
              for (var e, r, i = .5, d = 0; d < 20; d++) {
                if ((r = t - i * (i * (i * a + s) + n)) > -1e-8 && r < 1e-8) return i * (i * (i * u + h) + o);
                if ((e = i * (i * (3 * a) + 2 * s) + n) > 1e-10 && e < 1e-10) break;
                i += r / e;
              }
              for (var c = 0, l = 1, f = 0; f < 20; f++) {
                if ((r = t - (i = .5 * (c + l)) * (i * (i * a + s) + n)) > -1e-8 && r < 1e-8) return i * (i * (i * u + h) + o);
                r < 0 ? l = i : c = i;
              }
            };
          },
          S = {},
          M = {
            ease: [.25, .1, .25, 1],
            "ease-in": [.42, 0, 1, 1],
            "ease-out": [0, 0, .58, 1],
            "ease-in-out": [.42, 0, .58, 1],
            "ease-in-sine": [.12, 0, .39, 0],
            "ease-out-sine": [.12, 0, .39, 0],
            "ease-in-out-sine": [.37, 0, .63, 1],
            "ease-in-cubic": [.32, 0, .67, 0],
            "ease-out-cubic": [.33, 1, .68, 1],
            "ease-in-out-cubic": [.65, 0, .35, 1],
            "ease-in-circ": [.55, 0, 1, .45],
            "ease-out-circ": [0, .55, .45, 1],
            "ease-in-out-circ": [.85, 0, .15, 1],
            "ease-in-back": [.36, 0, .66, -.56],
            "ease-out-back": [.34, 1.56, .64, 1],
            "ease-in-out-back": [.68, -.6, .32, 1.6]
          },
          I = function I(t) {
            return t;
          };
        e("s", function (e) {
          if ("" === e) return I;
          if (void 0 !== S[e]) return S[e] || I;
          if ("linear" === e) return function (t) {
            return t;
          };
          if ("step-start" === e) return function () {
            return 1;
          };
          if ("step-end" === e) return function (t) {
            return 1 === t ? 1 : 0;
          };
          if (void 0 !== M[e]) {
            var r = t(M[e], 4),
              i = r[0],
              n = r[1],
              s = r[2],
              a = r[3],
              o = w(i, n, s, a);
            return S[e] = o, o;
          }
          return e.startsWith("cubic-bezier") ? function (e) {
            var r = e.match(/-?\d*\.?\d+/g);
            if (r) {
              var i = t(r, 4),
                n = i[0],
                s = i[1],
                a = i[2],
                o = i[3],
                h = parseFloat(n || "0.42"),
                u = parseFloat(s || "0"),
                d = parseFloat(a || "1"),
                c = parseFloat(o || "1"),
                l = w(h, u, d, c);
              return S[e] = l, l;
            }
            return console.warn("Unknown cubic-bezier timing: " + e), I;
          }(e) : (console.warn("Unknown timing function: " + e), I);
        });
        Math.hypot || (Math.hypot = function () {
          for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            t[_key3] = arguments[_key3];
          }
          for (var e = 0, r = t.length; r--;) e += t[r] * t[r];
          return Math.sqrt(e);
        });
        var L = new Uint8Array([0, 0, 0, 0]);
        var N = /*#__PURE__*/function (_x) {
          function N(t, e, r) {
            var _this8;
            _classCallCheck(this, N);
            _this8 = _callSuper(this, N, [e, r]), a(_assertThisInitialized(_this8), "glw", void 0), a(_assertThisInitialized(_this8), "_nativeCtxTexture", null), a(_assertThisInitialized(_this8), "_state", "freed"), a(_assertThisInitialized(_this8), "_w", 0), a(_assertThisInitialized(_this8), "_h", 0), _this8.glw = t;
            return _this8;
          }
          _inherits(N, _x);
          return _createClass(N, [{
            key: "ctxTexture",
            get: function get() {
              return "freed" === this._state && this.load(), this._nativeCtxTexture, this._nativeCtxTexture;
            }
          }, {
            key: "renderable",
            get: function get() {
              return this.textureSource.renderable;
            }
          }, {
            key: "w",
            get: function get() {
              return this._w;
            }
          }, {
            key: "h",
            get: function get() {
              return this._h;
            }
          }, {
            key: "load",
            value: function load() {
              var _this9 = this;
              "loading" !== this._state && "loaded" !== this._state && (this._state = "loading", this.textureSource.setState("loading"), this._nativeCtxTexture = this.createNativeCtxTexture(), this.onLoadRequest().then(function (_ref) {
                var t = _ref.width,
                  e = _ref.height;
                "freed" !== _this9._state && (_this9._state = "loaded", _this9._w = t, _this9._h = e, _this9.textureSource.setState("loaded", {
                  width: t,
                  height: e
                }));
              })["catch"](function (t) {
                _this9._state = "failed", _this9.textureSource.setState("failed", t), console.error(t);
              }));
            }
          }, {
            key: "onLoadRequest",
            value: function onLoadRequest() {
              var t = this;
              return n(r().mark(function e() {
                var i, n, s, a, o, h, u, d, c, l, f, v, g, p, E, T, x;
                return r().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return n = t.glw, s = t.memManager, n.texImage2D(0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, null), s.setTextureMemUse(t, L.byteLength), e.next = 5, null === (i = t.textureSource) || void 0 === i ? void 0 : i.getTextureData();
                    case 5:
                      if (a = e.sent, t._nativeCtxTexture) {
                        e.next = 9;
                        break;
                      }
                      return t._state, e.abrupt("return", {
                        width: 0,
                        height: 0
                      });
                    case 9:
                      return o = 0, h = 0, t._nativeCtxTexture, n.activeTexture(0), a.data instanceof ImageBitmap || a.data instanceof ImageData || null !== (r = a.data) && "object" == _typeof(r) && r.constructor && "HTMLImageElement" === r.constructor.name ? (u = a.data, o = u.width, h = u.height, n.bindTexture(t._nativeCtxTexture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!a.premultiplyAlpha), n.texImage2D(0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, u), s.setTextureMemUse(t, o * h * 4), (n.isWebGl2() || y(o) && y(h)) && n.generateMipmap()) : null === a.data ? (o = 0, h = 0, n.bindTexture(t._nativeCtxTexture), n.texImage2D(0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, L), s.setTextureMemUse(t, L.byteLength)) : "mipmaps" in a.data && a.data.mipmaps ? (c = a.data, l = c.mipmaps, f = c.width, v = void 0 === f ? 0 : f, g = c.height, p = void 0 === g ? 0 : g, E = c.type, T = c.glInternalFormat, x = "ktx" === E ? new DataView(null !== (d = l[0]) && void 0 !== d ? d : new ArrayBuffer(0)) : l[0], n.bindTexture(t._nativeCtxTexture), n.compressedTexImage2D(0, T, v, p, 0, x), n.texParameteri(n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_MIN_FILTER, n.LINEAR), s.setTextureMemUse(t, x.byteLength)) : console.error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned", a), e.abrupt("return", {
                        width: o,
                        height: h
                      });
                    case 15:
                    case "end":
                      return e.stop();
                  }
                  var r;
                }, e);
              }))();
            }
          }, {
            key: "free",
            value: function free() {
              if ("freed" !== this._state && (this._state = "freed", this.textureSource.setState("freed"), this._w = 0, this._h = 0, this._nativeCtxTexture)) {
                var t = this.glw,
                  e = this.memManager;
                t.deleteTexture(this._nativeCtxTexture), e.setTextureMemUse(this, 0), this._nativeCtxTexture = null;
              }
            }
          }, {
            key: "createNativeCtxTexture",
            value: function createNativeCtxTexture() {
              var t = this.glw,
                e = t.createTexture();
              if (!e) throw new Error("Could not create WebGL Texture");
              return t.activeTexture(0), t.bindTexture(e), t.texParameteri(t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), e;
            }
          }]);
        }(x);
        var U = /*#__PURE__*/function (_v2) {
          function U(t, e) {
            var _this10;
            _classCallCheck(this, U);
            _this10 = _callSuper(this, U, [t]), a(_assertThisInitialized(_this10), "props", void 0), a(_assertThisInitialized(_this10), "parentTexture", void 0), a(_assertThisInitialized(_this10), "onParentTxLoaded", function () {
              _this10.setState("loaded", {
                width: _this10.props.width,
                height: _this10.props.height
              });
            }), a(_assertThisInitialized(_this10), "onParentTxFailed", function (t, e) {
              _this10.setState("failed", e);
            }), _this10.parentTexture = _this10.txManager.loadTexture(e.texture.txType, e.texture.props, e.texture.options), _this10.props = U.resolveDefaults(e || {}), queueMicrotask(function () {
              var t = _this10.parentTexture;
              "loaded" === t.state ? _this10.onParentTxLoaded(t, t.dimensions) : "failed" === t.state && _this10.onParentTxFailed(t, t.error), t.on("loaded", _this10.onParentTxLoaded), t.on("failed", _this10.onParentTxFailed);
            });
            return _this10;
          }
          _inherits(U, _v2);
          return _createClass(U, [{
            key: "getTextureData",
            value: function getTextureData() {
              var t = this;
              return n(r().mark(function e() {
                return r().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", {
                        data: t.props
                      });
                    case 1:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }))();
            }
          }], [{
            key: "makeCacheKey",
            value: function makeCacheKey(t) {
              return !1;
            }
          }, {
            key: "resolveDefaults",
            value: function resolveDefaults(t) {
              return {
                texture: t.texture,
                x: t.x || 0,
                y: t.y || 0,
                width: t.width || 0,
                height: t.height || 0
              };
            }
          }]);
        }(v);
        a(U, "z$__type__Props", void 0), e("w", U);
        var P = /*#__PURE__*/function (_N) {
          function P(t, e, r) {
            _classCallCheck(this, P);
            return _callSuper(this, P, [t, e, r]);
          }
          _inherits(P, _N);
          return _createClass(P, [{
            key: "onLoadRequest",
            value: function onLoadRequest() {
              var t = this;
              return n(r().mark(function e() {
                var i, n, s;
                return r().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, t.textureSource.getTextureData();
                    case 2:
                      return s = e.sent, e.abrupt("return", {
                        width: (null === (i = s.data) || void 0 === i ? void 0 : i.width) || 0,
                        height: (null === (n = s.data) || void 0 === n ? void 0 : n.height) || 0
                      });
                    case 4:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }))();
            }
          }]);
        }(N);
        var O = /*#__PURE__*/function () {
          function O(t) {
            _classCallCheck(this, O);
            a(this, "config", void 0), this.config = t;
          }
          return _createClass(O, [{
            key: "getBuffer",
            value: function getBuffer(t) {
              var e;
              return null === (e = this.config.find(function (e) {
                return e.attributes[t];
              })) || void 0 === e ? void 0 : e.buffer;
            }
          }, {
            key: "getAttributeInfo",
            value: function getAttributeInfo(t) {
              var e;
              return null === (e = this.config.find(function (e) {
                return e.attributes[t];
              })) || void 0 === e ? void 0 : e.attributes[t];
            }
          }]);
        }();
        e("B", O);
        var B = /*#__PURE__*/function () {
          function B(t) {
            var _this11 = this;
            _classCallCheck(this, B);
            a(this, "gl", void 0), a(this, "activeTextureUnit", 0), a(this, "texture2dUnits", void 0), a(this, "texture2dParams", new WeakMap()), a(this, "scissorEnabled", void 0), a(this, "scissorX", void 0), a(this, "scissorY", void 0), a(this, "scissorWidth", void 0), a(this, "scissorHeight", void 0), a(this, "blendEnabled", void 0), a(this, "blendSrcRgb", void 0), a(this, "blendDstRgb", void 0), a(this, "blendSrcAlpha", void 0), a(this, "blendDstAlpha", void 0), a(this, "boundArrayBuffer", void 0), a(this, "boundElementArrayBuffer", void 0), a(this, "curProgram", void 0), a(this, "programUniforms", new WeakMap()), a(this, "canvas", void 0), a(this, "MAX_RENDERBUFFER_SIZE", void 0), a(this, "MAX_TEXTURE_SIZE", void 0), a(this, "MAX_VIEWPORT_DIMS", void 0), a(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", void 0), a(this, "MAX_TEXTURE_IMAGE_UNITS", void 0), a(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", void 0), a(this, "MAX_VERTEX_ATTRIBS", void 0), a(this, "MAX_VARYING_VECTORS", void 0), a(this, "MAX_VERTEX_UNIFORM_VECTORS", void 0), a(this, "MAX_FRAGMENT_UNIFORM_VECTORS", void 0), a(this, "TEXTURE_MAG_FILTER", void 0), a(this, "TEXTURE_MIN_FILTER", void 0), a(this, "TEXTURE_WRAP_S", void 0), a(this, "TEXTURE_WRAP_T", void 0), a(this, "LINEAR", void 0), a(this, "CLAMP_TO_EDGE", void 0), a(this, "RGBA", void 0), a(this, "UNSIGNED_BYTE", void 0), a(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", void 0), a(this, "UNPACK_FLIP_Y_WEBGL", void 0), a(this, "FLOAT", void 0), a(this, "TRIANGLES", void 0), a(this, "UNSIGNED_SHORT", void 0), a(this, "ONE", void 0), a(this, "ONE_MINUS_SRC_ALPHA", void 0), a(this, "VERTEX_SHADER", void 0), a(this, "FRAGMENT_SHADER", void 0), a(this, "STATIC_DRAW", void 0), a(this, "COMPILE_STATUS", void 0), a(this, "LINK_STATUS", void 0), a(this, "DYNAMIC_DRAW", void 0), a(this, "COLOR_ATTACHMENT0", void 0), this.gl = t, this.activeTextureUnit = t.getParameter(t.ACTIVE_TEXTURE) - t.TEXTURE0;
            var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
            this.texture2dUnits = new Array(e).fill(void 0).map(function (e, r) {
              return _this11.activeTexture(r), t.getParameter(t.TEXTURE_BINDING_2D);
            }), this.activeTexture(this.activeTextureUnit), this.scissorEnabled = t.isEnabled(t.SCISSOR_TEST);
            var r = t.getParameter(t.SCISSOR_BOX);
            this.scissorX = r[0], this.scissorY = r[1], this.scissorWidth = r[2], this.scissorHeight = r[3], this.blendEnabled = t.isEnabled(t.BLEND), this.blendSrcRgb = t.getParameter(t.BLEND_SRC_RGB), this.blendDstRgb = t.getParameter(t.BLEND_DST_RGB), this.blendSrcAlpha = t.getParameter(t.BLEND_SRC_ALPHA), this.blendDstAlpha = t.getParameter(t.BLEND_DST_ALPHA), this.boundArrayBuffer = t.getParameter(t.ARRAY_BUFFER_BINDING), this.boundElementArrayBuffer = t.getParameter(t.ELEMENT_ARRAY_BUFFER_BINDING), this.curProgram = t.getParameter(t.CURRENT_PROGRAM), this.canvas = t.canvas, this.MAX_RENDERBUFFER_SIZE = t.MAX_RENDERBUFFER_SIZE, this.MAX_TEXTURE_SIZE = t.MAX_TEXTURE_SIZE, this.MAX_VIEWPORT_DIMS = t.MAX_VIEWPORT_DIMS, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.MAX_VERTEX_TEXTURE_IMAGE_UNITS, this.MAX_TEXTURE_IMAGE_UNITS = t.MAX_TEXTURE_IMAGE_UNITS, this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS, this.MAX_VERTEX_ATTRIBS = t.MAX_VERTEX_ATTRIBS, this.MAX_VARYING_VECTORS = t.MAX_VARYING_VECTORS, this.MAX_VERTEX_UNIFORM_VECTORS = t.MAX_VERTEX_UNIFORM_VECTORS, this.MAX_FRAGMENT_UNIFORM_VECTORS = t.MAX_FRAGMENT_UNIFORM_VECTORS, this.TEXTURE_MAG_FILTER = t.TEXTURE_MAG_FILTER, this.TEXTURE_MIN_FILTER = t.TEXTURE_MIN_FILTER, this.TEXTURE_WRAP_S = t.TEXTURE_WRAP_S, this.TEXTURE_WRAP_T = t.TEXTURE_WRAP_T, this.LINEAR = t.LINEAR, this.CLAMP_TO_EDGE = t.CLAMP_TO_EDGE, this.RGBA = t.RGBA, this.UNSIGNED_BYTE = t.UNSIGNED_BYTE, this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.UNPACK_FLIP_Y_WEBGL = t.UNPACK_FLIP_Y_WEBGL, this.FLOAT = t.FLOAT, this.TRIANGLES = t.TRIANGLES, this.UNSIGNED_SHORT = t.UNSIGNED_SHORT, this.ONE = t.ONE, this.ONE_MINUS_SRC_ALPHA = t.ONE_MINUS_SRC_ALPHA, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.MAX_VERTEX_TEXTURE_IMAGE_UNITS, this.TRIANGLES = t.TRIANGLES, this.UNSIGNED_SHORT = t.UNSIGNED_SHORT, this.VERTEX_SHADER = t.VERTEX_SHADER, this.FRAGMENT_SHADER = t.FRAGMENT_SHADER, this.STATIC_DRAW = t.STATIC_DRAW, this.COMPILE_STATUS = t.COMPILE_STATUS, this.LINK_STATUS = t.LINK_STATUS, this.DYNAMIC_DRAW = t.DYNAMIC_DRAW, this.COLOR_ATTACHMENT0 = t.COLOR_ATTACHMENT0;
          }
          return _createClass(B, [{
            key: "isWebGl2",
            value: function isWebGl2() {
              return t = this.gl, self.WebGL2RenderingContext && t instanceof self.WebGL2RenderingContext;
              var t;
            }
          }, {
            key: "activeTexture",
            value: function activeTexture(t) {
              var e = this.gl;
              this.activeTextureUnit !== t && (e.activeTexture(t + e.TEXTURE0), this.activeTextureUnit = t);
            }
          }, {
            key: "bindTexture",
            value: function bindTexture(t) {
              var e = this.gl,
                r = this.activeTextureUnit,
                i = this.texture2dUnits;
              i[r] !== t && (i[r] = t, e.bindTexture(this.gl.TEXTURE_2D, t));
            }
          }, {
            key: "_getActiveTexture",
            value: function _getActiveTexture() {
              var t = this.activeTextureUnit;
              return this.texture2dUnits[t];
            }
          }, {
            key: "texParameteri",
            value: function texParameteri(t, e) {
              var r = this.gl,
                i = this.texture2dParams,
                n = this._getActiveTexture();
              if (!n) throw new Error("No active texture");
              var s = i.get(n);
              s || (s = {}, i.set(n, s)), s[t] !== e && (s[t] = e, r.texParameteri(r.TEXTURE_2D, t, e));
            }
          }, {
            key: "texImage2D",
            value: function texImage2D(t, e, r, i, n, s, a, o) {
              var h = this.gl;
              s ? h.texImage2D(h.TEXTURE_2D, t, e, r, i, n, s, a, o) : h.texImage2D(h.TEXTURE_2D, t, e, r, i, n);
            }
          }, {
            key: "compressedTexImage2D",
            value: function compressedTexImage2D(t, e, r, i, n, s) {
              var a = this.gl;
              a.compressedTexImage2D(a.TEXTURE_2D, t, e, r, i, n, s);
            }
          }, {
            key: "pixelStorei",
            value: function pixelStorei(t, e) {
              this.gl.pixelStorei(t, e);
            }
          }, {
            key: "generateMipmap",
            value: function generateMipmap() {
              var t = this.gl;
              t.generateMipmap(t.TEXTURE_2D);
            }
          }, {
            key: "createTexture",
            value: function createTexture() {
              return this.gl.createTexture();
            }
          }, {
            key: "deleteTexture",
            value: function deleteTexture(t) {
              var e = this.gl;
              t && this.texture2dParams["delete"](t), e.deleteTexture(t);
            }
          }, {
            key: "viewport",
            value: function viewport(t, e, r, i) {
              this.gl.viewport(t, e, r, i);
            }
          }, {
            key: "clearColor",
            value: function clearColor(t, e, r, i) {
              this.gl.clearColor(t, e, r, i);
            }
          }, {
            key: "setScissorTest",
            value: function setScissorTest(t) {
              var e = this.gl;
              t !== this.scissorEnabled && (t ? e.enable(e.SCISSOR_TEST) : e.disable(e.SCISSOR_TEST), this.scissorEnabled = t);
            }
          }, {
            key: "scissor",
            value: function scissor(t, e, r, i) {
              var n = this.gl,
                s = this.scissorX,
                a = this.scissorY,
                o = this.scissorWidth,
                h = this.scissorHeight;
              t === s && e === a && r === o && i === h || (n.scissor(t, e, r, i), this.scissorX = t, this.scissorY = e, this.scissorWidth = r, this.scissorHeight = i);
            }
          }, {
            key: "setBlend",
            value: function setBlend(t) {
              var e = this.gl;
              t !== this.blendEnabled && (t ? e.enable(e.BLEND) : e.disable(e.BLEND), this.blendEnabled = t);
            }
          }, {
            key: "blendFunc",
            value: function blendFunc(t, e) {
              var r = this.gl,
                i = this.blendSrcRgb,
                n = this.blendDstRgb,
                s = this.blendSrcAlpha,
                a = this.blendDstAlpha;
              t === i && e === n && t === s && e === a || (r.blendFunc(t, e), this.blendSrcRgb = t, this.blendDstRgb = e, this.blendSrcAlpha = t, this.blendDstAlpha = e);
            }
          }, {
            key: "createBuffer",
            value: function createBuffer() {
              return this.gl.createBuffer();
            }
          }, {
            key: "createFramebuffer",
            value: function createFramebuffer() {
              return this.gl.createFramebuffer();
            }
          }, {
            key: "bindFramebuffer",
            value: function bindFramebuffer(t) {
              var e = this.gl;
              e.bindFramebuffer(e.FRAMEBUFFER, t);
            }
          }, {
            key: "framebufferTexture2D",
            value: function framebufferTexture2D(t, e, r) {
              var i = this.gl;
              i.framebufferTexture2D(i.FRAMEBUFFER, t, i.TEXTURE_2D, e, r);
            }
          }, {
            key: "clear",
            value: function clear() {
              var t = this.gl;
              t.clear(t.COLOR_BUFFER_BIT);
            }
          }, {
            key: "arrayBufferData",
            value: function arrayBufferData(t, e, r) {
              var i = this.gl;
              this.boundArrayBuffer !== t && (i.bindBuffer(i.ARRAY_BUFFER, t), this.boundArrayBuffer = t), i.bufferData(i.ARRAY_BUFFER, e, r);
            }
          }, {
            key: "elementArrayBufferData",
            value: function elementArrayBufferData(t, e, r) {
              var i = this.gl;
              this.boundElementArrayBuffer !== t && (i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t), this.boundElementArrayBuffer = t), i.bufferData(i.ELEMENT_ARRAY_BUFFER, e, r);
            }
          }, {
            key: "vertexAttribPointer",
            value: function vertexAttribPointer(t, e, r, i, n, s, a) {
              var o = this.gl;
              this.boundArrayBuffer !== t && (o.bindBuffer(o.ARRAY_BUFFER, t), this.boundArrayBuffer = t), o.vertexAttribPointer(e, r, i, n, s, a);
            }
          }, {
            key: "useProgram",
            value: function useProgram(t) {
              var e = this.gl;
              this.curProgram !== t && (e.useProgram(t), this.curProgram = t);
            }
          }, {
            key: "setUniform",
            value: function setUniform(t, e) {
              var i = this.gl,
                n = this.programUniforms,
                s = n.get(this.curProgram);
              s || (s = new Map(), n.set(this.curProgram, s));
              var a = s.get(e);
              for (var _len4 = arguments.length, r = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                r[_key4 - 2] = arguments[_key4];
              }
              a && function (t, e) {
                if (t.length !== e.length) return !1;
                return t.every(function (t, r) {
                  return !(Array.isArray(t) || t instanceof Float32Array) && t === e[r];
                });
              }(a, r) || (s.set(e, r), i[t].apply(i, [e].concat(r)));
            }
          }, {
            key: "getParameter",
            value: function getParameter(t) {
              return this.gl.getParameter(t);
            }
          }, {
            key: "drawElements",
            value: function drawElements(t, e, r, i) {
              this.gl.drawElements(t, e, r, i);
            }
          }, {
            key: "getExtension",
            value: function getExtension(t) {
              return this.gl.getExtension(t);
            }
          }, {
            key: "createVertexArray",
            value: function createVertexArray() {
              var t = this.gl;
              return WebGL2RenderingContext, t.createVertexArray();
            }
          }, {
            key: "bindVertexArray",
            value: function bindVertexArray(t) {
              var e = this.gl;
              WebGL2RenderingContext, e.bindVertexArray(t);
            }
          }, {
            key: "getAttribLocation",
            value: function getAttribLocation(t, e) {
              return this.gl.getAttribLocation(t, e);
            }
          }, {
            key: "getUniformLocation",
            value: function getUniformLocation(t, e) {
              return this.gl.getUniformLocation(t, e);
            }
          }, {
            key: "enableVertexAttribArray",
            value: function enableVertexAttribArray(t) {
              this.gl.enableVertexAttribArray(t);
            }
          }, {
            key: "disableVertexAttribArray",
            value: function disableVertexAttribArray(t) {
              this.gl.disableVertexAttribArray(t);
            }
          }, {
            key: "createShader",
            value: function createShader(t) {
              return this.gl.createShader(t);
            }
          }, {
            key: "compileShader",
            value: function compileShader(t) {
              this.gl.compileShader(t);
            }
          }, {
            key: "attachShader",
            value: function attachShader(t, e) {
              this.gl.attachShader(t, e);
            }
          }, {
            key: "linkProgram",
            value: function linkProgram(t) {
              this.gl.linkProgram(t);
            }
          }, {
            key: "deleteProgram",
            value: function deleteProgram(t) {
              this.gl.deleteProgram(t);
            }
          }, {
            key: "getShaderParameter",
            value: function getShaderParameter(t, e) {
              return this.gl.getShaderParameter(t, e);
            }
          }, {
            key: "getShaderInfoLog",
            value: function getShaderInfoLog(t) {
              return this.gl.getShaderInfoLog(t);
            }
          }, {
            key: "createProgram",
            value: function createProgram() {
              return this.gl.createProgram();
            }
          }, {
            key: "getProgramParameter",
            value: function getProgramParameter(t, e) {
              return this.gl.getProgramParameter(t, e);
            }
          }, {
            key: "getProgramInfoLog",
            value: function getProgramInfoLog(t) {
              return this.gl.getProgramInfoLog(t);
            }
          }, {
            key: "shaderSource",
            value: function shaderSource(t, e) {
              this.gl.shaderSource(t, e);
            }
          }, {
            key: "deleteShader",
            value: function deleteShader(t) {
              this.gl.deleteShader(t);
            }
          }]);
        }();
        var D = /*#__PURE__*/function (_v3) {
          function D(t, e) {
            var _this12;
            _classCallCheck(this, D);
            _this12 = _callSuper(this, D, [t]), a(_assertThisInitialized(_this12), "props", void 0), _this12.props = D.resolveDefaults(e || {});
            return _this12;
          }
          _inherits(D, _v3);
          return _createClass(D, [{
            key: "width",
            get: function get() {
              return this.props.width;
            },
            set: function set(t) {
              this.props.width = t;
            }
          }, {
            key: "height",
            get: function get() {
              return this.props.height;
            },
            set: function set(t) {
              this.props.height = t;
            }
          }, {
            key: "getTextureData",
            value: function getTextureData() {
              return n(r().mark(function t() {
                return r().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.abrupt("return", {
                        data: null,
                        premultiplyAlpha: null
                      });
                    case 1:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))();
            }
          }], [{
            key: "resolveDefaults",
            value: function resolveDefaults(t) {
              return {
                width: t.width || 256,
                height: t.height || 256
              };
            }
          }]);
        }(v);
        a(D, "z$__type__Props", void 0), e("R", D);
        var X = /*#__PURE__*/function (_N2) {
          function X(t, e, r) {
            var _this13;
            _classCallCheck(this, X);
            _this13 = _callSuper(this, X, [t, e, r]), a(_assertThisInitialized(_this13), "framebuffer", void 0);
            var i = t.createFramebuffer();
            _this13.framebuffer = i;
            return _this13;
          }
          _inherits(X, _N2);
          return _createClass(X, [{
            key: "onLoadRequest",
            value: function onLoadRequest() {
              var t = this;
              return n(r().mark(function e() {
                var i, n, s, a, o, h;
                return r().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return i = t.glw, n = t.memManager, s = t._nativeCtxTexture = t.createNativeCtxTexture(), a = t.textureSource, o = a.width, h = a.height, i.texImage2D(0, i.RGBA, o, h, 0, i.RGBA, i.UNSIGNED_BYTE, null), n.setTextureMemUse(t, o * h * 4), i.bindFramebuffer(t.framebuffer), i.framebufferTexture2D(i.COLOR_ATTACHMENT0, s, 0), i.bindFramebuffer(null), e.abrupt("return", {
                        width: o,
                        height: h
                      });
                    case 9:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }))();
            }
          }]);
        }(N);
        var C = /*#__PURE__*/function (_ref2) {
          function C(t) {
            var _this14;
            _classCallCheck(this, C);
            _this14 = _callSuper(this, C, [t]), a(_assertThisInitialized(_this14), "glw", void 0), a(_assertThisInitialized(_this14), "system", void 0), a(_assertThisInitialized(_this14), "quadBuffer", new ArrayBuffer(4194304)), a(_assertThisInitialized(_this14), "fQuadBuffer", new Float32Array(_this14.quadBuffer)), a(_assertThisInitialized(_this14), "uiQuadBuffer", new Uint32Array(_this14.quadBuffer)), a(_assertThisInitialized(_this14), "renderOps", []), a(_assertThisInitialized(_this14), "curBufferIdx", 0), a(_assertThisInitialized(_this14), "curRenderOp", null), a(_assertThisInitialized(_this14), "rttNodes", []), a(_assertThisInitialized(_this14), "activeRttNode", null), a(_assertThisInitialized(_this14), "defaultShader", void 0), a(_assertThisInitialized(_this14), "quadBufferCollection", void 0), a(_assertThisInitialized(_this14), "defaultTexture", void 0), a(_assertThisInitialized(_this14), "renderToTextureActive", !1), _this14.mode = "webgl";
            var e = t.canvas,
              r = t.clearColor,
              i = t.bufferMemory;
            _this14.defaultTexture = new T(_this14.txManager), _this14.defaultTexture.setRenderableOwner(_this14, !0), _this14.defaultTexture.once("loaded", function () {
              _this14.stage.requestRender();
            });
            var n = function (t, e) {
                var r = {
                    alpha: !0,
                    antialias: !1,
                    depth: !1,
                    stencil: !0,
                    desynchronized: !1,
                    powerPreference: "high-performance",
                    premultipliedAlpha: !0,
                    preserveDrawingBuffer: !1
                  },
                  i = t.getContext("webgl", r) || t.getContext("experimental-webgl", r);
                if (!i) throw new Error("Unable to create WebGL context");
                return e ? new Proxy(i, {
                  get: function get(t, r) {
                    var i = t[r];
                    return "function" == typeof i ? (e.increment(String(r)), i.bind(t)) : i;
                  }
                }) : i;
              }(e, t.contextSpy),
              s = _this14.glw = new B(n),
              o = g(r);
            s.viewport(0, 0, e.width, e.height), s.clearColor(o[0], o[1], o[2], o[3]), s.setBlend(!0), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA), function (t, e) {
              for (var r = ~~(e / 80), i = new Uint16Array(6 * r), n = 0, s = 0; n < r; n += 6, s += 4) i[n] = s, i[n + 1] = s + 1, i[n + 2] = s + 2, i[n + 3] = s + 2, i[n + 4] = s + 1, i[n + 5] = s + 3;
              var a = t.createBuffer();
              t.elementArrayBufferData(a, i, t.STATIC_DRAW);
            }(s, i), _this14.system = {
              parameters: A(_this14.glw),
              extensions: b(_this14.glw)
            }, _this14.shManager.renderer = _this14, _this14.defaultShader = _this14.shManager.loadShader("DefaultShader").shader;
            var h = s.createBuffer(),
              u = 6 * Float32Array.BYTES_PER_ELEMENT;
            _this14.quadBufferCollection = new O([{
              buffer: h,
              attributes: {
                a_position: {
                  name: "a_position",
                  size: 2,
                  type: s.FLOAT,
                  normalized: !1,
                  stride: u,
                  offset: 0
                },
                a_textureCoordinate: {
                  name: "a_textureCoordinate",
                  size: 2,
                  type: s.FLOAT,
                  normalized: !1,
                  stride: u,
                  offset: 2 * Float32Array.BYTES_PER_ELEMENT
                },
                a_color: {
                  name: "a_color",
                  size: 4,
                  type: s.UNSIGNED_BYTE,
                  normalized: !0,
                  stride: u,
                  offset: 4 * Float32Array.BYTES_PER_ELEMENT
                },
                a_textureIndex: {
                  name: "a_textureIndex",
                  size: 1,
                  type: s.FLOAT,
                  normalized: !1,
                  stride: u,
                  offset: 5 * Float32Array.BYTES_PER_ELEMENT
                }
              }
            }]);
            return _this14;
          }
          _inherits(C, _ref2);
          return _createClass(C, [{
            key: "reset",
            value: function reset() {
              var t = this.glw;
              this.curBufferIdx = 0, this.curRenderOp = null, this.renderOps.length = 0, t.setScissorTest(!1), t.clear();
            }
          }, {
            key: "getShaderManager",
            value: function getShaderManager() {
              return this.shManager;
            }
          }, {
            key: "createCtxTexture",
            value: function createCtxTexture(t) {
              return t instanceof U ? new P(this.glw, this.txMemManager, t) : t instanceof D ? new X(this.glw, this.txMemManager, t) : new N(this.glw, this.txMemManager, t);
            }
          }, {
            key: "addQuad",
            value: function addQuad(t) {
              var e,
                r,
                i,
                n = this.fQuadBuffer,
                s = this.uiQuadBuffer,
                a = t.width,
                o = t.height,
                u = t.colorTl,
                d = t.colorTr,
                c = t.colorBl,
                l = t.colorBr,
                f = t.textureOptions,
                v = t.shader,
                g = t.shaderProps,
                p = t.alpha,
                E = t.clippingRect,
                T = t.tx,
                x = t.ty,
                _ = t.ta,
                m = t.tb,
                R = t.tc,
                A = t.td,
                b = t.rtt,
                y = t.parentHasRenderTexture,
                w = t.framebufferDimensions,
                S = t.texture;
              if (g && h(g, "$dimensions")) {
                var M = g.$dimensions;
                M.width = a, M.height = o;
              }
              S = null !== (e = S) && void 0 !== e ? e : this.defaultTexture;
              var I = this.curBufferIdx,
                L = this.curRenderOp,
                N = {
                  width: a,
                  height: o
                },
                P = v || this.defaultShader;
              this.reuseRenderOp(t) || (this.newRenderOp(P, g, p, N, E, I, b, y, w), L = this.curRenderOp);
              var O = null !== (r = null == f ? void 0 : f.flipX) && void 0 !== r && r,
                B = null !== (i = null == f ? void 0 : f.flipY) && void 0 !== i && i,
                D = 0,
                X = 0,
                _C = 1,
                G = 1;
              if (S instanceof U) {
                var F = S.props,
                  V = F.x,
                  W = F.y,
                  k = F.width,
                  Y = F.height,
                  H = S.parentTexture.dimensions || {
                    width: 0,
                    height: 0
                  },
                  j = H.width,
                  $ = void 0 === j ? 0 : j,
                  z = H.height,
                  q = void 0 === z ? 0 : z;
                _C = (D = V / $) + k / $, G = (X = W / q) + Y / q, S = S.parentTexture;
              }
              if (O) {
                var K = [_C, D];
                D = K[0], _C = K[1];
              }
              if (B) {
                var Q = [G, X];
                X = Q[0], G = Q[1];
              }
              var Z = this.stage.txManager.getCtxTexture(S),
                J = this.addTexture(Z, I);
              if (L = this.curRenderOp, 0 !== m || 0 !== R) n[I++] = T, n[I++] = x, n[I++] = D, n[I++] = X, s[I++] = u, n[I++] = J, n[I++] = T + a * _, n[I++] = x + a * R, n[I++] = _C, n[I++] = X, s[I++] = d, n[I++] = J, n[I++] = T + o * m, n[I++] = x + o * A, n[I++] = D, n[I++] = G, s[I++] = c, n[I++] = J, n[I++] = T + a * _ + o * m, n[I++] = x + a * R + o * A, n[I++] = _C, n[I++] = G, s[I++] = l, n[I++] = J;else {
                var tt = T + a * _,
                  et = x + o * A;
                n[I++] = T, n[I++] = x, n[I++] = D, n[I++] = X, s[I++] = u, n[I++] = J, n[I++] = tt, n[I++] = x, n[I++] = _C, n[I++] = X, s[I++] = d, n[I++] = J, n[I++] = T, n[I++] = et, n[I++] = D, n[I++] = G, s[I++] = c, n[I++] = J, n[I++] = tt, n[I++] = et, n[I++] = _C, n[I++] = G, s[I++] = l, n[I++] = J;
              }
              L.length += 24, L.numQuads++, this.curBufferIdx = I;
            }
          }, {
            key: "newRenderOp",
            value: function newRenderOp(t, e, r, i, n, s, a, o, h) {
              var u = new R(this.glw, this.options, this.quadBufferCollection, t, e, r, n, i, s, 0, a, o, h);
              this.curRenderOp = u, this.renderOps.push(u);
            }
          }, {
            key: "addTexture",
            value: function addTexture(t, e, r) {
              var i = this.curRenderOp,
                n = i.addTexture(t);
              if (4294967295 === n) {
                if (r) throw new Error("Unable to add texture to render op");
                var s = i.shader,
                  a = i.shaderProps,
                  o = i.dimensions,
                  h = i.clippingRect,
                  u = i.alpha;
                return this.newRenderOp(s, a, u, o, h, e), this.addTexture(t, e, !0);
              }
              return n;
            }
          }, {
            key: "reuseRenderOp",
            value: function reuseRenderOp(t) {
              var e,
                r,
                i,
                n = t.shader,
                s = t.shaderProps,
                a = t.parentHasRenderTexture,
                o = t.rtt,
                h = t.clippingRect,
                u = n || this.defaultShader;
              return (null === (e = this.curRenderOp) || void 0 === e ? void 0 : e.shader) === u && ((r = this.curRenderOp.clippingRect) === (i = h) || null !== r && null !== i && r.x === i.x && r.y === i.y && r.width === i.width && r.height === i.height) && !a && !o && !!(this.curRenderOp.shader === this.defaultShader || s && this.curRenderOp.shader.canBatchShaderProps(this.curRenderOp.shaderProps, s));
            }
          }, {
            key: "addRenderOp",
            value: function addRenderOp(t) {
              this.renderOps.push(t), this.curRenderOp = null;
            }
          }, {
            key: "render",
            value: function render() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "screen";
              var e,
                r = this.glw,
                i = this.quadBuffer,
                n = new Float32Array(i, 0, this.curBufferIdx),
                s = null !== (e = this.quadBufferCollection.getBuffer("a_position")) && void 0 !== e ? e : null;
              r.arrayBufferData(s, n, r.STATIC_DRAW), this.renderOps.forEach(function (t, e) {
                t.draw();
              });
            }
          }, {
            key: "renderToTexture",
            value: function renderToTexture(t) {
              for (var e = 0; e < this.rttNodes.length; e++) if (this.rttNodes[e] === t) return;
              this.rttNodes.unshift(t);
            }
          }, {
            key: "renderRTTNodes",
            value: function renderRTTNodes() {
              for (var t = this.glw, e = this.stage.txManager, r = 0; r < this.rttNodes.length; r++) {
                var i = this.rttNodes[r];
                if (i && i.hasRTTupdates) {
                  this.activeRttNode = i, i.texture;
                  var n = e.getCtxTexture(i.texture);
                  this.renderToTextureActive = !0, t.bindFramebuffer(n.framebuffer), t.viewport(0, 0, n.w, n.h), t.clear();
                  for (var s = 0; s < i.children.length; s++) {
                    var a = i.children[s];
                    a && (a.update(this.stage.deltaTime, {
                      x: 0,
                      y: 0,
                      width: 0,
                      height: 0,
                      valid: !1
                    }), this.stage.addQuads(a), a.hasRTTupdates = !1);
                  }
                  this.render(), this.renderOps.length = 0, i.hasRTTupdates = !1;
                }
              }
              t.bindFramebuffer(null), t.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height), this.renderToTextureActive = !1;
            }
          }, {
            key: "removeRTTNode",
            value: function removeRTTNode(t) {
              var e = this.rttNodes.indexOf(t);
              -1 !== e && this.rttNodes.splice(e, 1);
            }
          }]);
        }(_);
        e("l", C);
        var G = 10;
        var F = /*#__PURE__*/_createClass(function F() {
          _classCallCheck(this, F);
        });
        var V = /*#__PURE__*/function (_F) {
          function V(t, e) {
            var _this15;
            _classCallCheck(this, V);
            _this15 = _callSuper(this, V), a(_assertThisInitialized(_this15), "data", void 0), a(_assertThisInitialized(_this15), "glyphMap", void 0), a(_assertThisInitialized(_this15), "kernings", void 0), _this15.data = t, _this15.glyphMap = e;
            var r = _this15.kernings = {};
            t.kernings.forEach(function (t) {
              var e = t.second;
              (r[e] = r[e] || {})[t.first] = t.amount;
            }), _this15.kernings = r;
            return _this15;
          }
          _inherits(V, _F);
          return _createClass(V, [{
            key: "shapeText",
            value: function shapeText(t, e) {
              var i = this;
              return r().mark(function n() {
                var s, a, o, h, u, d;
                return r().wrap(function (r) {
                  for (;;) switch (r.prev = r.next) {
                    case 0:
                      a = void 0;
                    case 1:
                      if (!(s = e.peek()) || s.done) {
                        r.next = 17;
                        break;
                      }
                      if (o = s.value, h = i.glyphMap.get(o), e.next(), void 0 === h) {
                        r.next = 12;
                        break;
                      }
                      return d = void 0 !== a ? ((null === (u = i.kernings[h.id]) || void 0 === u ? void 0 : u[a]) || 0) + t.letterSpacing : 0, a = h.id, r.next = 10, {
                        mapped: !0,
                        glyphId: h.id,
                        codepoint: o,
                        cluster: e.lastIndex,
                        xAdvance: h.xadvance + d,
                        yAdvance: 0,
                        xOffset: h.xoffset + d,
                        yOffset: h.yoffset,
                        xBearing: 0,
                        yBearing: 0,
                        width: h.width,
                        height: h.height
                      };
                    case 10:
                      r.next = 15;
                      break;
                    case 12:
                      return o === G && (a = void 0), r.next = 15, {
                        mapped: !1,
                        codepoint: o,
                        cluster: e.lastIndex
                      };
                    case 15:
                      r.next = 1;
                      break;
                    case 17:
                    case "end":
                      return r.stop();
                  }
                }, n);
              })();
            }
          }]);
        }(F);
        e("S", /*#__PURE__*/function (_E) {
          function _class(t, e, i, s, o, h) {
            var _this16;
            _classCallCheck(this, _class);
            var u;
            _this16 = _callSuper(this, _class, [t, e]), u = _assertThisInitialized(_this16), a(_assertThisInitialized(_this16), "type", void 0), a(_assertThisInitialized(_this16), "texture", void 0), a(_assertThisInitialized(_this16), "maxCharHeight", 0), a(_assertThisInitialized(_this16), "data", void 0), a(_assertThisInitialized(_this16), "shaper", void 0), a(_assertThisInitialized(_this16), "glyphMap", new Map()), _this16.type = i;
            s.renderer;
            _this16.texture = s.txManager.loadTexture("ImageTexture", {
              src: o,
              premultiplyAlpha: !1
            }, {
              preload: !0
            }), _this16.texture.on("loaded", function () {
              _this16.checkLoaded();
            }), fetch(h).then(function () {
              var t = n(r().mark(function t(e) {
                var i;
                return r().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.json();
                    case 2:
                      u.data = t.sent, i = 0, u.data.chars.forEach(function (t) {
                        u.glyphMap.set(t.id, t);
                        var e = t.yoffset + t.height;
                        e > i && (i = e);
                      }), u.maxCharHeight = i, u.shaper = new V(u.data, u.glyphMap), u.checkLoaded();
                    case 8:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }())["catch"](console.error);
            return _this16;
          }
          _inherits(_class, _E);
          return _createClass(_class, [{
            key: "getAtlasEntry",
            value: function getAtlasEntry(t) {
              var e = this.glyphMap.get(t);
              if (void 0 === e) throw new Error("Glyph ".concat(t, " not found in font ").concat(this.fontFamily));
              return {
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
              };
            }
          }, {
            key: "checkLoaded",
            value: function checkLoaded() {
              this.loaded || "loaded" === this.texture.state && this.data && (this.loaded = !0, this.emit("loaded"));
            }
          }]);
        }(E));
        e("r", /*#__PURE__*/_createClass(function _class2() {
          _classCallCheck(this, _class2);
        }));
      }
    };
  });
}();