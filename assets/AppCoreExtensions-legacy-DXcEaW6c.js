function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function () {
  function t() {
    "use strict";

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    t = function t() {
      return e;
    };
    var r,
      e = {},
      n = Object.prototype,
      o = n.hasOwnProperty,
      i = Object.defineProperty || function (t, r, e) {
        t[r] = e.value;
      },
      a = "function" == typeof Symbol ? Symbol : {},
      c = a.iterator || "@@iterator",
      u = a.asyncIterator || "@@asyncIterator",
      f = a.toStringTag || "@@toStringTag";
    function s(t, r, e) {
      return Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[r];
    }
    try {
      s({}, "");
    } catch (r) {
      s = function s(t, r, e) {
        return t[r] = e;
      };
    }
    function h(t, r, e, n) {
      var o = r && r.prototype instanceof m ? r : m,
        a = Object.create(o.prototype),
        c = new N(n || []);
      return i(a, "_invoke", {
        value: k(t, e, c)
      }), a;
    }
    function l(t, r, e) {
      try {
        return {
          type: "normal",
          arg: t.call(r, e)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = h;
    var p = "suspendedStart",
      y = "suspendedYield",
      v = "executing",
      d = "completed",
      g = {};
    function m() {}
    function w() {}
    function b() {}
    var x = {};
    s(x, c, function () {
      return this;
    });
    var L = Object.getPrototypeOf,
      E = L && L(L(S([])));
    E && E !== n && o.call(E, c) && (x = E);
    var j = b.prototype = m.prototype = Object.create(x);
    function _(t) {
      ["next", "throw", "return"].forEach(function (r) {
        s(t, r, function (t) {
          return this._invoke(r, t);
        });
      });
    }
    function O(t, r) {
      function e(n, i, a, c) {
        var u = l(t[n], t, i);
        if ("throw" !== u.type) {
          var f = u.arg,
            s = f.value;
          return s && "object" == _typeof(s) && o.call(s, "__await") ? r.resolve(s.__await).then(function (t) {
            e("next", t, a, c);
          }, function (t) {
            e("throw", t, a, c);
          }) : r.resolve(s).then(function (t) {
            f.value = t, a(f);
          }, function (t) {
            return e("throw", t, a, c);
          });
        }
        c(u.arg);
      }
      var n;
      i(this, "_invoke", {
        value: function value(t, o) {
          function i() {
            return new r(function (r, n) {
              e(t, o, r, n);
            });
          }
          return n = n ? n.then(i, i) : i();
        }
      });
    }
    function k(t, e, n) {
      var o = p;
      return function (i, a) {
        if (o === v) throw Error("Generator is already running");
        if (o === d) {
          if ("throw" === i) throw a;
          return {
            value: r,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = F(c, n);
            if (u) {
              if (u === g) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === p) throw o = d, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = v;
          var f = l(t, e, n);
          if ("normal" === f.type) {
            if (o = n.done ? d : y, f.arg === g) continue;
            return {
              value: f.arg,
              done: n.done
            };
          }
          "throw" === f.type && (o = d, n.method = "throw", n.arg = f.arg);
        }
      };
    }
    function F(t, e) {
      var n = e.method,
        o = t.iterator[n];
      if (o === r) return e.delegate = null, "throw" === n && t.iterator["return"] && (e.method = "return", e.arg = r, F(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
      var i = l(o, t.iterator, e.arg);
      if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, g;
      var a = i.arg;
      return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, g) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, g);
    }
    function P(t) {
      var r = {
        tryLoc: t[0]
      };
      1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
    }
    function G(t) {
      var r = t.completion || {};
      r.type = "normal", delete r.arg, t.completion = r;
    }
    function N(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(P, this), this.reset(!0);
    }
    function S(t) {
      if (t || "" === t) {
        var e = t[c];
        if (e) return e.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var n = -1,
            i = function e() {
              for (; ++n < t.length;) if (o.call(t, n)) return e.value = t[n], e.done = !1, e;
              return e.value = r, e.done = !0, e;
            };
          return i.next = i;
        }
      }
      throw new TypeError(_typeof(t) + " is not iterable");
    }
    return w.prototype = b, i(j, "constructor", {
      value: b,
      configurable: !0
    }), i(b, "constructor", {
      value: w,
      configurable: !0
    }), w.displayName = s(b, f, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var r = "function" == typeof t && t.constructor;
      return !!r && (r === w || "GeneratorFunction" === (r.displayName || r.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, f, "GeneratorFunction")), t.prototype = Object.create(j), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, _(O.prototype), s(O.prototype, u, function () {
      return this;
    }), e.AsyncIterator = O, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new O(h(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, _(j), s(j, f, "Generator"), s(j, c, function () {
      return this;
    }), s(j, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var r = Object(t),
        e = [];
      for (var n in r) e.push(n);
      return e.reverse(), function t() {
        for (; e.length;) {
          var n = e.pop();
          if (n in r) return t.value = n, t.done = !1, t;
        }
        return t.done = !0, t;
      };
    }, e.values = S, N.prototype = {
      constructor: N,
      reset: function reset(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(G), !t) for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(t) {
        if (this.done) throw t;
        var e = this;
        function n(n, o) {
          return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i],
            c = a.completion;
          if ("root" === a.tryLoc) return n("end");
          if (a.tryLoc <= this.prev) {
            var u = o.call(a, "catchLoc"),
              f = o.call(a, "finallyLoc");
            if (u && f) {
              if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return n(a.finallyLoc);
            } else if (u) {
              if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
            } else {
              if (!f) throw Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return n(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
            var i = n;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a);
      },
      complete: function complete(t, r) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), g;
      },
      finish: function finish(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), G(e), g;
        }
      },
      "catch": function _catch(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e.tryLoc === t) {
            var n = e.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              G(e);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(t, e, n) {
        return this.delegate = {
          iterator: S(t),
          resultName: e,
          nextLoc: n
        }, "next" === this.method && (this.arg = r), g;
      }
    }, e;
  }
  function r(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (f) {
      return void e(f);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, o);
  }
  System.register(["./CoreExtension-legacy-BFxy46Zv.js"], function (e, n) {
    "use strict";

    var o, i;
    return {
      setters: [function (t) {
        o = t.r, i = t.S;
      }],
      execute: function execute() {
        e("default", /*#__PURE__*/function (_o) {
          function _class() {
            _classCallCheck(this, _class);
            return _callSuper(this, _class, arguments);
          }
          _inherits(_class, _o);
          return _createClass(_class, [{
            key: "run",
            value: function run(e) {
              return (n = t().mark(function r() {
                return t().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      e.fontManager.addFontFace(new i("Ubuntu", {
                        weight: 700
                      }, "msdf", e, "./fonts/Ubuntu-Bold.msdf.png", "./fonts/Ubuntu-Bold.msdf.json")), e.fontManager.addFontFace(new i("Ubuntu", {
                        weight: 400
                      }, "msdf", e, "./fonts/Ubuntu-Regular.msdf.png", "./fonts/Ubuntu-Regular.msdf.json"));
                    case 2:
                    case "end":
                      return t.stop();
                  }
                }, r);
              }), function () {
                var t = this,
                  e = arguments;
                return new Promise(function (o, i) {
                  var a = n.apply(t, e);
                  function c(t) {
                    r(a, o, i, c, u, "next", t);
                  }
                  function u(t) {
                    r(a, o, i, c, u, "throw", t);
                  }
                  c(void 0);
                });
              })();
              var n;
            }
          }]);
        }(o));
      }
    };
  });
}();