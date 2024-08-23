function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
function _wrapAsyncGenerator(e) { return function () { return new AsyncGenerator(e.apply(this, arguments)); }; }
function AsyncGenerator(e) { var r, t; function resume(r, t) { try { var n = e[r](t), o = n.value, u = o instanceof _OverloadYield; Promise.resolve(u ? o.v : o).then(function (t) { if (u) { var i = "return" === r ? "return" : "next"; if (!o.k || t.done) return resume(i, t); t = e[i](t).value; } settle(n.done ? "return" : "normal", t); }, function (e) { resume("throw", e); }); } catch (e) { settle("throw", e); } } function settle(e, n) { switch (e) { case "return": r.resolve({ value: n, done: !0 }); break; case "throw": r.reject(n); break; default: r.resolve({ value: n, done: !1 }); } (r = r.next) ? resume(r.key, r.arg) : t = null; } this._invoke = function (e, n) { return new Promise(function (o, u) { var i = { key: e, arg: n, resolve: o, reject: u, next: null }; t ? t = t.next = i : (r = t = i, resume(e, n)); }); }, "function" != typeof e["return"] && (this["return"] = void 0); }
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, AsyncGenerator.prototype.next = function (e) { return this._invoke("next", e); }, AsyncGenerator.prototype["throw"] = function (e) { return this._invoke("throw", e); }, AsyncGenerator.prototype["return"] = function (e) { return this._invoke("return", e); };
function _OverloadYield(e, d) { this.v = e, this.k = d; }
var __vite__fileDeps = ["./Grid-BqeSAKOi.js", "./CoreExtension-BwzX6MG-.js", "./Portal-ax0u5TsO.js", "./Text-BFFgAZ6j.js", "./Create-BspVoMkd.js", "./Viewport-VtWgzAHS.js", "./Buttons-CeupXiir.js", "./Flex-o1dtVujL.js", "./FlexSize-CDd7SYH5.js", "./FlexColumnSize-C-Mme3PK.js", "./FlexColumn-BOf3vjvo.js", "./ButtonsMaterial-BK6_33XZ.js", "./SuperFlex-CVltOT27.js", "./Entity-Btpx2HN5.js", "./People-CDm83lx2.js"],
  __vite__mapDeps = function __vite__mapDeps(i) {
    return i.map(function (i) {
      return __vite__fileDeps[i];
    });
  };
var _0 = Object.defineProperty;
var P0 = function P0(r, t, e) {
  return t in r ? _0(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : r[t] = e;
};
var b = function b(r, t, e) {
  return P0(r, _typeof(t) != "symbol" ? t + "" : t, e), e;
};
import { a as k, i as Sp, T as N0, g as Fa, c as jr, E as fr, b as vt, d as L0, e as fc, f as F0, m as Pn, W as nn, C as k0, h as wp, j as B0, k as ka, S as Nu, l as Tp, B as M0, n as D0, o as Ip, p as j0, q as U0, r as z0, s as W0, t as Lu, u as Fu, v as H0, w as Ap, R as Y0, x as K0, y as G0, z as V0, A as X0 } from "./CoreExtension-BwzX6MG-.js";
function iK() {
  import.meta.url, import("_")["catch"](function () {
    return 1;
  }), _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))().next();
}
(function () {
  var t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var o = _step.value;
      n(o);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(function (o) {
    var _iterator2 = _createForOfIteratorHelper(o),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var i = _step2.value;
        if (i.type === "childList") {
          var _iterator3 = _createForOfIteratorHelper(i.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var a = _step3.value;
              a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function e(o) {
    var i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    var i = e(o);
    fetch(o.href, i);
  }
})();
var Q0 = "modulepreload",
  q0 = function q0(r, t) {
    return new URL(r, t).href;
  },
  ku = {},
  _e = function _e(t, e, n) {
    var o = Promise.resolve();
    if (e && e.length > 0) {
      var i = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        s = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.all(e.map(function (l) {
        if (l = q0(l, n), l in ku) return;
        ku[l] = !0;
        var c = l.endsWith(".css"),
          u = c ? '[rel="stylesheet"]' : "";
        if (!!n) for (var p = i.length - 1; p >= 0; p--) {
          var m = i[p];
          if (m.href === l && (!c || m.rel === "stylesheet")) return;
        } else if (document.querySelector('link[href="'.concat(l, '"]').concat(u))) return;
        var v = document.createElement("link");
        if (v.rel = c ? "stylesheet" : Q0, c || (v.as = "script", v.crossOrigin = ""), v.href = l, s && v.setAttribute("nonce", s), document.head.appendChild(v), c) return new Promise(function (p, m) {
          v.addEventListener("load", p), v.addEventListener("error", function () {
            return m(new Error("Unable to preload CSS for ".concat(l)));
          });
        });
      }));
    }
    return o.then(function () {
      return t();
    })["catch"](function (i) {
      var a = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i;
    });
  },
  te = {
    context: void 0,
    registry: void 0
  };
function Nn(r) {
  te.context = r;
}
var Ep = function Ep(r, t) {
    return r === t;
  },
  wi = Symbol("solid-proxy"),
  Cp = Symbol("solid-track"),
  Ti = {
    equals: Ep
  };
var Rp = Bp;
var rt = 1,
  Ii = 2,
  Op = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  Ba = {};
var W = null;
var Ma = null,
  J0 = null,
  V = null,
  Ae = null,
  ft = null,
  qi = 0;
function Ut(r, t) {
  var e = V,
    n = W,
    o = r.length === 0,
    i = t === void 0 ? n : t,
    a = o ? Op : {
      owned: null,
      cleanups: null,
      context: i ? i.context : null,
      owner: i
    },
    s = o ? r : function () {
      return r(function () {
        return me(function () {
          return Ji(a);
        });
      });
    };
  W = a, V = null;
  try {
    return ht(s, !0);
  } finally {
    V = e, W = n;
  }
}
function X(r, t) {
  t = t ? Object.assign({}, Ti, t) : Ti;
  var e = {
      value: r,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0
    },
    n = function n(o) {
      return typeof o == "function" && (o = o(e.value)), kp(e, o);
    };
  return [Fp.bind(e), n];
}
function rl(r, t, e) {
  var n = Jn(r, t, !0, rt);
  dr(n);
}
function ct(r, t, e) {
  var n = Jn(r, t, !1, rt);
  dr(n);
}
function cr(r, t, e) {
  Rp = ax;
  var n = Jn(r, t, !1, rt);
  (!e || !e.render) && (n.user = !0), ft ? ft.push(n) : dr(n);
}
function ie(r, t, e) {
  e = e ? Object.assign({}, Ti, e) : Ti;
  var n = Jn(r, t, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = e.equals || void 0, dr(n), Fp.bind(n);
}
function Z0(r) {
  return r && _typeof(r) == "object" && "then" in r;
}
function _p(r, t, e) {
  var n, o, i;
  arguments.length === 2 && _typeof(t) == "object" || arguments.length === 1 ? (n = !0, o = r, i = t || {}) : (n = r, o = t, i = e || {});
  var a = null,
    s = Ba,
    l = null,
    c = !1,
    u = "initialValue" in i,
    f = typeof n == "function" && ie(n);
  var v = new Set(),
    _ref2 = (i.storage || X)(i.initialValue),
    _ref3 = _slicedToArray(_ref2, 2),
    p = _ref3[0],
    m = _ref3[1],
    _X = X(void 0),
    _X2 = _slicedToArray(_X, 2),
    S = _X2[0],
    w = _X2[1],
    _X3 = X(void 0, {
      equals: !1
    }),
    _X4 = _slicedToArray(_X3, 2),
    $ = _X4[0],
    y = _X4[1],
    _X5 = X(u ? "ready" : "unresolved"),
    _X6 = _slicedToArray(_X5, 2),
    d = _X6[0],
    h = _X6[1];
  if (te.context) {
    l = "".concat(te.context.id).concat(te.context.count++);
    var A;
    i.ssrLoadFrom === "initial" ? s = i.initialValue : te.load && (A = te.load(l)) && (s = A);
  }
  function g(A, O, N, _) {
    return a === A && (a = null, _ !== void 0 && (u = !0), (A === s || O === s) && i.onHydrated && queueMicrotask(function () {
      return i.onHydrated(_, {
        value: O
      });
    }), s = Ba, T(O, N)), O;
  }
  function T(A, O) {
    ht(function () {
      O === void 0 && m(function () {
        return A;
      }), h(O !== void 0 ? "errored" : u ? "ready" : "unresolved"), w(O);
      var _iterator4 = _createForOfIteratorHelper(v.keys()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var N = _step4.value;
          N.decrement();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      v.clear();
    }, !1);
  }
  function I() {
    var A = nx,
      O = p(),
      N = S();
    if (N !== void 0 && !a) throw N;
    return V && !V.user && A && rl(function () {
      $(), a && (A.resolved || v.has(A) || (A.increment(), v.add(A)));
    }), O;
  }
  function C() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
    if (A !== !1 && c) return;
    c = !1;
    var O = f ? f() : n;
    if (O == null || O === !1) {
      g(a, me(p));
      return;
    }
    var N = s !== Ba ? s : me(function () {
      return o(O, {
        value: p(),
        refetching: A
      });
    });
    return Z0(N) ? (a = N, "value" in N ? (N.status === "success" ? g(a, N.value, void 0, O) : g(a, void 0, void 0, O), N) : (c = !0, queueMicrotask(function () {
      return c = !1;
    }), ht(function () {
      h(u ? "refreshing" : "pending"), y();
    }, !1), N.then(function (_) {
      return g(N, _, void 0, O);
    }, function (_) {
      return g(N, void 0, Dp(_), O);
    }))) : (g(a, N, void 0, O), N);
  }
  return Object.defineProperties(I, {
    state: {
      get: function get() {
        return d();
      }
    },
    error: {
      get: function get() {
        return S();
      }
    },
    loading: {
      get: function get() {
        var A = d();
        return A === "pending" || A === "refreshing";
      }
    },
    latest: {
      get: function get() {
        if (!u) return I();
        var A = S();
        if (A && !a) throw A;
        return p();
      }
    }
  }), f ? rl(function () {
    return C(!1);
  }) : C(!1), [I, {
    refetch: C,
    mutate: m
  }];
}
function ex(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ep;
  var e = arguments.length > 2 ? arguments[2] : undefined;
  var n = new Map(),
    o = Jn(function (i) {
      var a = r();
      var _iterator5 = _createForOfIteratorHelper(n.entries()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
            s = _step5$value[0],
            l = _step5$value[1];
          if (t(s, a) !== t(s, i)) {
            var _iterator6 = _createForOfIteratorHelper(l.values()),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var c = _step6.value;
                c.state = rt, c.pure ? Ae.push(c) : ft.push(c);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return a;
    }, void 0, !0, rt);
  return dr(o), function (i) {
    var a = V;
    if (a) {
      var s;
      (s = n.get(i)) ? s.add(a) : n.set(i, s = new Set([a])), dt(function () {
        s["delete"](a), !s.size && n["delete"](i);
      });
    }
    return t(i, o.value);
  };
}
function tx(r) {
  return ht(r, !1);
}
function me(r) {
  if (V === null) return r();
  var t = V;
  V = null;
  try {
    return r();
  } finally {
    V = t;
  }
}
function on(r, t, e) {
  var n = Array.isArray(r);
  var o,
    i = e && e.defer;
  return function (a) {
    var s;
    if (n) {
      s = Array(r.length);
      for (var c = 0; c < r.length; c++) s[c] = r[c]();
    } else s = r();
    if (i) return i = !1, a;
    var l = me(function () {
      return t(s, o, a);
    });
    return o = s, l;
  };
}
function sK(r) {
  cr(function () {
    return me(r);
  });
}
function dt(r) {
  return W === null || (W.cleanups === null ? W.cleanups = [r] : W.cleanups.push(r)), r;
}
function an() {
  return W;
}
function Pp(r, t) {
  var e = W,
    n = V;
  W = r, V = null;
  try {
    return ht(t, !0);
  } catch (o) {
    hc(o);
  } finally {
    W = e, V = n;
  }
}
function rx(r) {
  var t = V,
    e = W;
  return Promise.resolve().then(function () {
    V = t, W = e;
    var n;
    return ht(r, !1), V = W = null, n ? n.done : void 0;
  });
}
function Np(r, t) {
  var e = Symbol("context");
  return {
    id: e,
    Provider: sx(e),
    defaultValue: r
  };
}
function Lp(r) {
  return W && W.context && W.context[r.id] !== void 0 ? W.context[r.id] : r.defaultValue;
}
function dc(r) {
  var t = ie(r),
    e = ie(function () {
      return nl(t());
    });
  return e.toArray = function () {
    var n = e();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, e;
}
var nx;
function Fp() {
  var _this = this;
  if (this.sources && this.state) if (this.state === rt) dr(this);else {
    var r = Ae;
    Ae = null, ht(function () {
      return Ei(_this);
    }, !1), Ae = r;
  }
  if (V) {
    var _r2 = this.observers ? this.observers.length : 0;
    V.sources ? (V.sources.push(this), V.sourceSlots.push(_r2)) : (V.sources = [this], V.sourceSlots = [_r2]), this.observers ? (this.observers.push(V), this.observerSlots.push(V.sources.length - 1)) : (this.observers = [V], this.observerSlots = [V.sources.length - 1]);
  }
  return this.value;
}
function kp(r, t, e) {
  var n = r.value;
  return (!r.comparator || !r.comparator(n, t)) && (r.value = t, r.observers && r.observers.length && ht(function () {
    for (var o = 0; o < r.observers.length; o += 1) {
      var i = r.observers[o],
        a = Ma && Ma.running;
      a && Ma.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Ae.push(i) : ft.push(i), i.observers && Mp(i)), a || (i.state = rt);
    }
    if (Ae.length > 1e6) throw Ae = [], new Error();
  }, !1)), t;
}
function dr(r) {
  if (!r.fn) return;
  Ji(r);
  var t = qi;
  ox(r, r.value, t);
}
function ox(r, t, e) {
  var n;
  var o = W,
    i = V;
  V = W = r;
  try {
    n = r.fn(t);
  } catch (a) {
    return r.pure && (r.state = rt, r.owned && r.owned.forEach(Ji), r.owned = null), r.updatedAt = e + 1, hc(a);
  } finally {
    V = i, W = o;
  }
  (!r.updatedAt || r.updatedAt <= e) && (r.updatedAt != null && "observers" in r ? kp(r, n) : r.value = n, r.updatedAt = e);
}
function Jn(r, t, e) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : rt;
  var o = arguments.length > 4 ? arguments[4] : undefined;
  var i = {
    fn: r,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: W,
    context: W ? W.context : null,
    pure: e
  };
  return W === null || W !== Op && (W.owned ? W.owned.push(i) : W.owned = [i]), i;
}
function Ai(r) {
  if (r.state === 0) return;
  if (r.state === Ii) return Ei(r);
  if (r.suspense && me(r.suspense.inFallback)) return r.suspense.effects.push(r);
  var t = [r];
  for (; (r = r.owner) && (!r.updatedAt || r.updatedAt < qi);) r.state && t.push(r);
  for (var _e2 = t.length - 1; _e2 >= 0; _e2--) if (r = t[_e2], r.state === rt) dr(r);else if (r.state === Ii) {
    var n = Ae;
    Ae = null, ht(function () {
      return Ei(r, t[0]);
    }, !1), Ae = n;
  }
}
function ht(r, t) {
  if (Ae) return r();
  var e = !1;
  t || (Ae = []), ft ? e = !0 : ft = [], qi++;
  try {
    var n = r();
    return ix(e), n;
  } catch (n) {
    e || (ft = null), Ae = null, hc(n);
  }
}
function ix(r) {
  if (Ae && (Bp(Ae), Ae = null), r) return;
  var t = ft;
  ft = null, t.length && ht(function () {
    return Rp(t);
  }, !1);
}
function Bp(r) {
  for (var t = 0; t < r.length; t++) Ai(r[t]);
}
function ax(r) {
  var t,
    e = 0;
  for (t = 0; t < r.length; t++) {
    var n = r[t];
    n.user ? r[e++] = n : Ai(n);
  }
  if (te.context) {
    if (te.count) {
      var _te$effects;
      te.effects || (te.effects = []), (_te$effects = te.effects).push.apply(_te$effects, _toConsumableArray(r.slice(0, e)));
      return;
    } else te.effects && (r = [].concat(_toConsumableArray(te.effects), _toConsumableArray(r)), e += te.effects.length, delete te.effects);
    Nn();
  }
  for (t = 0; t < e; t++) Ai(r[t]);
}
function Ei(r, t) {
  r.state = 0;
  for (var _e3 = 0; _e3 < r.sources.length; _e3 += 1) {
    var n = r.sources[_e3];
    if (n.sources) {
      var o = n.state;
      o === rt ? n !== t && (!n.updatedAt || n.updatedAt < qi) && Ai(n) : o === Ii && Ei(n, t);
    }
  }
}
function Mp(r) {
  for (var t = 0; t < r.observers.length; t += 1) {
    var _e4 = r.observers[t];
    _e4.state || (_e4.state = Ii, _e4.pure ? Ae.push(_e4) : ft.push(_e4), _e4.observers && Mp(_e4));
  }
}
function Ji(r) {
  var t;
  if (r.sources) for (; r.sources.length;) {
    var _e5 = r.sources.pop(),
      n = r.sourceSlots.pop(),
      o = _e5.observers;
    if (o && o.length) {
      var i = o.pop(),
        a = _e5.observerSlots.pop();
      n < o.length && (i.sourceSlots[a] = n, o[n] = i, _e5.observerSlots[n] = a);
    }
  }
  if (r.owned) {
    for (t = r.owned.length - 1; t >= 0; t--) Ji(r.owned[t]);
    r.owned = null;
  }
  if (r.cleanups) {
    for (t = r.cleanups.length - 1; t >= 0; t--) r.cleanups[t]();
    r.cleanups = null;
  }
  r.state = 0;
}
function Dp(r) {
  return r instanceof Error ? r : new Error(typeof r == "string" ? r : "Unknown error", {
    cause: r
  });
}
function hc(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : W;
  throw Dp(r);
}
function nl(r) {
  if (typeof r == "function" && !r.length) return nl(r());
  if (Array.isArray(r)) {
    var t = [];
    for (var _e6 = 0; _e6 < r.length; _e6++) {
      var n = nl(r[_e6]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return r;
}
function sx(r, t) {
  return function (n) {
    var o;
    return ct(function () {
      return o = me(function () {
        return W.context = _objectSpread(_objectSpread({}, W.context), {}, _defineProperty({}, r, n.value)), dc(function () {
          return n.children;
        });
      });
    }, void 0), o;
  };
}
var ol = Symbol("fallback");
function Ci(r) {
  for (var t = 0; t < r.length; t++) r[t]();
}
function lx(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var n = [],
    o = [],
    i = [],
    a = 0,
    s = t.length > 1 ? [] : null;
  return dt(function () {
    return Ci(i);
  }), function () {
    var l = r() || [],
      c,
      u;
    return l[Cp], me(function () {
      var v = l.length,
        p,
        m,
        S,
        w,
        $,
        y,
        d,
        h,
        g;
      if (v === 0) a !== 0 && (Ci(i), i = [], n = [], o = [], a = 0, s && (s = [])), e.fallback && (n = [ol], o[0] = Ut(function (T) {
        return i[0] = T, e.fallback();
      }), a = 1);else if (a === 0) {
        for (o = new Array(v), u = 0; u < v; u++) n[u] = l[u], o[u] = Ut(f);
        a = v;
      } else {
        for (S = new Array(v), w = new Array(v), s && ($ = new Array(v)), y = 0, d = Math.min(a, v); y < d && n[y] === l[y]; y++);
        for (d = a - 1, h = v - 1; d >= y && h >= y && n[d] === l[h]; d--, h--) S[h] = o[d], w[h] = i[d], s && ($[h] = s[d]);
        for (p = new Map(), m = new Array(h + 1), u = h; u >= y; u--) g = l[u], c = p.get(g), m[u] = c === void 0 ? -1 : c, p.set(g, u);
        for (c = y; c <= d; c++) g = n[c], u = p.get(g), u !== void 0 && u !== -1 ? (S[u] = o[c], w[u] = i[c], s && ($[u] = s[c]), u = m[u], p.set(g, u)) : i[c]();
        for (u = y; u < v; u++) u in S ? (o[u] = S[u], i[u] = w[u], s && (s[u] = $[u], s[u](u))) : o[u] = Ut(f);
        o = o.slice(0, a = v), n = l.slice(0);
      }
      return o;
    });
    function f(v) {
      if (i[u] = v, s) {
        var _X7 = X(u),
          _X8 = _slicedToArray(_X7, 2),
          p = _X8[0],
          m = _X8[1];
        return s[u] = m, t(l[u], p);
      }
      return t(l[u]);
    }
  };
}
function cx(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var n = [],
    o = [],
    i = [],
    a = [],
    s = 0,
    l;
  return dt(function () {
    return Ci(i);
  }), function () {
    var c = r() || [];
    return c[Cp], me(function () {
      if (c.length === 0) return s !== 0 && (Ci(i), i = [], n = [], o = [], s = 0, a = []), e.fallback && (n = [ol], o[0] = Ut(function (f) {
        return i[0] = f, e.fallback();
      }), s = 1), o;
      for (n[0] === ol && (i[0](), i = [], n = [], o = [], s = 0), l = 0; l < c.length; l++) l < n.length && n[l] !== c[l] ? a[l](function () {
        return c[l];
      }) : l >= n.length && (o[l] = Ut(u));
      for (; l < n.length; l++) i[l]();
      return s = a.length = i.length = c.length, n = c.slice(0), o = o.slice(0, s);
    });
    function u(f) {
      i[l] = f;
      var _X9 = X(c[l]),
        _X10 = _slicedToArray(_X9, 2),
        v = _X10[0],
        p = _X10[1];
      return a[l] = p, t(v, l);
    }
  };
}
function jp(r, t) {
  return me(function () {
    return r(t || {});
  });
}
function Eo() {
  return !0;
}
var il = {
  get: function get(r, t, e) {
    return t === wi ? e : r.get(t);
  },
  has: function has(r, t) {
    return t === wi ? !0 : r.has(t);
  },
  set: Eo,
  deleteProperty: Eo,
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(r, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return r.get(t);
      },
      set: Eo,
      deleteProperty: Eo
    };
  },
  ownKeys: function ownKeys(r) {
    return r.keys();
  }
};
function Da(r) {
  return (r = typeof r == "function" ? r() : r) ? r : {};
}
function ux() {
  for (var r = 0, t = this.length; r < t; ++r) {
    var _e7 = this[r]();
    if (_e7 !== void 0) return _e7;
  }
}
function vc() {
  for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
    r[_key] = arguments[_key];
  }
  var t = !1;
  for (var a = 0; a < r.length; a++) {
    var s = r[a];
    t = t || !!s && wi in s, r[a] = typeof s == "function" ? (t = !0, ie(s)) : s;
  }
  if (t) return new Proxy({
    get: function get(a) {
      for (var _s2 = r.length - 1; _s2 >= 0; _s2--) {
        var l = Da(r[_s2])[a];
        if (l !== void 0) return l;
      }
    },
    has: function has(a) {
      for (var _s3 = r.length - 1; _s3 >= 0; _s3--) if (a in Da(r[_s3])) return !0;
      return !1;
    },
    keys: function keys() {
      var a = [];
      for (var _s4 = 0; _s4 < r.length; _s4++) a.push.apply(a, _toConsumableArray(Object.keys(Da(r[_s4]))));
      return _toConsumableArray(new Set(a));
    }
  }, il);
  var e = {},
    n = Object.create(null);
  for (var _a2 = r.length - 1; _a2 >= 0; _a2--) {
    var _s5 = r[_a2];
    if (!_s5) continue;
    var l = Object.getOwnPropertyNames(_s5);
    var _loop = function _loop() {
      var u = l[c];
      if (u === "__proto__" || u === "constructor") return 1; // continue
      var f = Object.getOwnPropertyDescriptor(_s5, u);
      if (!n[u]) n[u] = f.get ? {
        enumerable: !0,
        configurable: !0,
        get: ux.bind(e[u] = [f.get.bind(_s5)])
      } : f.value !== void 0 ? f : void 0;else {
        var v = e[u];
        v && (f.get ? v.push(f.get.bind(_s5)) : f.value !== void 0 && v.push(function () {
          return f.value;
        }));
      }
    };
    for (var c = l.length - 1; c >= 0; c--) {
      if (_loop()) continue;
    }
  }
  var o = {},
    i = Object.keys(n);
  for (var _a3 = i.length - 1; _a3 >= 0; _a3--) {
    var _s6 = i[_a3],
      _l2 = n[_s6];
    _l2 && _l2.get ? Object.defineProperty(o, _s6, _l2) : o[_s6] = _l2 ? _l2.value : void 0;
  }
  return o;
}
function fx(r) {
  for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    t[_key2 - 1] = arguments[_key2];
  }
  if (wi in r) {
    var o = new Set(t.length > 1 ? t.flat() : t[0]),
      i = t.map(function (a) {
        return new Proxy({
          get: function get(s) {
            return a.includes(s) ? r[s] : void 0;
          },
          has: function has(s) {
            return a.includes(s) && s in r;
          },
          keys: function keys() {
            return a.filter(function (s) {
              return s in r;
            });
          }
        }, il);
      });
    return i.push(new Proxy({
      get: function get(a) {
        return o.has(a) ? void 0 : r[a];
      },
      has: function has(a) {
        return o.has(a) ? !1 : a in r;
      },
      keys: function keys() {
        return Object.keys(r).filter(function (a) {
          return !o.has(a);
        });
      }
    }, il)), i;
  }
  var e = {},
    n = t.map(function () {
      return {};
    });
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(r)),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _o2 = _step7.value;
      var _i2 = Object.getOwnPropertyDescriptor(r, _o2),
        a = !_i2.get && !_i2.set && _i2.enumerable && _i2.writable && _i2.configurable;
      var s = !1,
        l = 0;
      var _iterator8 = _createForOfIteratorHelper(t),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var c = _step8.value;
          c.includes(_o2) && (s = !0, a ? n[l][_o2] = _i2.value : Object.defineProperty(n[l], _o2, _i2)), ++l;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      s || (a ? e[_o2] = _i2.value : Object.defineProperty(e, _o2, _i2));
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return [].concat(_toConsumableArray(n), [e]);
}
function Fe(r) {
  var t, e;
  var n = function n(o) {
    var i = te.context;
    if (i) {
      var _X11 = X(),
        _X12 = _slicedToArray(_X11, 2),
        s = _X12[0],
        l = _X12[1];
      te.count || (te.count = 0), te.count++, (e || (e = r())).then(function (c) {
        Nn(i), te.count--, l(function () {
          return c["default"];
        }), Nn();
      }), t = s;
    } else if (!t) {
      var _p2 = _p(function () {
          return (e || (e = r())).then(function (l) {
            return l["default"];
          });
        }),
        _p3 = _slicedToArray(_p2, 1),
        _s7 = _p3[0];
      t = _s7;
    }
    var a;
    return ie(function () {
      return (a = t()) && me(function () {
        if (!i) return a(o);
        var s = te.context;
        Nn(i);
        var l = a(o);
        return Nn(s), l;
      });
    });
  };
  return n.preload = function () {
    return e || ((e = r()).then(function (o) {
      return t = function t() {
        return o["default"];
      };
    }), e);
  }, n;
}
var dx = function dx(r) {
  return "Stale read from <".concat(r, ">.");
};
function pc(r) {
  var t = "fallback" in r && {
    fallback: function fallback() {
      return r.fallback;
    }
  };
  return ie(lx(function () {
    return r.each;
  }, r.children, t || void 0));
}
function lK(r) {
  var t = "fallback" in r && {
    fallback: function fallback() {
      return r.fallback;
    }
  };
  return ie(cx(function () {
    return r.each;
  }, r.children, t || void 0));
}
function Zi(r) {
  var t = r.keyed,
    e = ie(function () {
      return r.when;
    }, void 0, {
      equals: function equals(n, o) {
        return t ? n === o : !n == !o;
      }
    });
  return ie(function () {
    var n = e();
    if (n) {
      var o = r.children;
      return typeof o == "function" && o.length > 0 ? me(function () {
        return o(t ? n : function () {
          if (!me(e)) throw dx("Show");
          return r.when;
        });
      }) : o;
    }
    return r.fallback;
  }, void 0, void 0);
}
var hx = void 0,
  _X13 = X(void 0),
  _X14 = _slicedToArray(_X13, 2),
  gc = _X14[0],
  vx = _X14[1];
var Up = /*#__PURE__*/_createClass(function Up(t) {
  _classCallCheck(this, Up);
  b(this, "releaseCallback");
  this.releaseCallback = t;
});
var px = /*#__PURE__*/function (_Up) {
  function px(e, n) {
    var _this2;
    _classCallCheck(this, px);
    var o, i;
    _this2 = _callSuper(this, px, [e]);
    b(_this2, "textureMap", new Map());
    b(_this2, "zeroReferenceTextureSet", new Set());
    b(_this2, "options");
    _this2.options = {
      textureCleanupIntervalMs: (o = n.textureCleanupIntervalMs) != null ? o : 1e4,
      textureCleanupAgeThreadholdMs: (i = n.textureCleanupAgeThreadholdMs) != null ? i : 6e4
    }, setInterval(function () {
      var a = Date.now(),
        s = _this2.options.textureCleanupAgeThreadholdMs;
      var _iterator9 = _createForOfIteratorHelper(_this2.zeroReferenceTextureSet),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var l = _step9.value;
          a - l.lastUpdate > s && (_this2.releaseCallback(l.id), _this2.textureMap["delete"](l.id), _this2.zeroReferenceTextureSet["delete"](l));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }, _this2.options.textureCleanupIntervalMs);
    return _this2;
  }
  _inherits(px, _Up);
  return _createClass(px, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var o;
      var n = (o = e.options) == null ? void 0 : o.id;
      if (k(n, "Texture must have an id to be registered"), !this.textureMap.has(n)) {
        var i = {
          id: n,
          nodeRefCount: 0,
          lastUpdate: Date.now()
        };
        this.textureMap.set(n, i), this.zeroReferenceTextureSet.add(i);
      }
    }
  }, {
    key: "incrementTextureRefCount",
    value: function incrementTextureRefCount(e) {
      var i;
      var n = (i = e.options) == null ? void 0 : i.id;
      k(n, "Texture must have an id to be registered");
      var o = this.textureMap.get(n);
      o || (this.registerTexture(e), o = this.textureMap.get(n)), k(o, "Texture must have been registered"), e.txType === "SubTexture" && this.incrementTextureRefCount(e.props.texture), o.nodeRefCount++, o.lastUpdate = Date.now(), this.zeroReferenceTextureSet.has(o) && this.zeroReferenceTextureSet["delete"](o);
    }
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount(e) {
      var i;
      var n = (i = e.options) == null ? void 0 : i.id;
      k(n, "Texture must have an id to be registered");
      var o = this.textureMap.get(n);
      k(o, "Texture must have been registered"), o.nodeRefCount--, o.lastUpdate = Date.now(), o.nodeRefCount === 0 && this.zeroReferenceTextureSet.add(o), e.txType === "SubTexture" && this.decrementTextureRefCount(e.props.texture);
    }
  }]);
}(Up);
var gx = /*#__PURE__*/function (_Up2) {
  function gx(e) {
    var _this3;
    _classCallCheck(this, gx);
    _this3 = _callSuper(this, gx, [e]);
    b(_this3, "registry");
    _this3.registry = new FinalizationRegistry(e);
    return _this3;
  }
  _inherits(gx, _Up2);
  return _createClass(gx, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var n, o;
      k((n = e.options) == null ? void 0 : n.id, "Texture must have an ID to be registered"), this.registry.register(e, (o = e.options) == null ? void 0 : o.id);
    }
  }, {
    key: "incrementTextureRefCount",
    value: function incrementTextureRefCount() {}
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount() {}
  }]);
}(Up);
var xn = {
    alpha: function alpha(r) {
      return r === 1 ? null : {
        prop: "opacity",
        value: "".concat(r)
      };
    },
    x: function x(r) {
      return {
        prop: "left",
        value: "".concat(r, "px")
      };
    },
    y: function y(r) {
      return {
        prop: "top",
        value: "".concat(r, "px")
      };
    },
    width: function width(r) {
      return r === 0 ? null : {
        prop: "width",
        value: "".concat(r, "px")
      };
    },
    height: function height(r) {
      return r === 0 ? null : {
        prop: "height",
        value: "".concat(r, "px")
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
    clipping: function clipping(r) {
      return r === !1 ? null : {
        prop: "overflow",
        value: r ? "hidden" : "visible"
      };
    },
    rotation: function rotation(r) {
      return r === 0 ? null : {
        prop: "transform",
        value: "rotate(".concat(r, "rad)")
      };
    },
    scale: function scale(r) {
      return r === 1 ? null : {
        prop: "transform",
        value: "scale(".concat(r, ")")
      };
    },
    scaleX: function scaleX(r) {
      return r === 1 ? null : {
        prop: "transform",
        value: "scaleX(".concat(r, ")")
      };
    },
    scaleY: function scaleY(r) {
      return r === 1 ? null : {
        prop: "transform",
        value: "scaleY(".concat(r, ")")
      };
    },
    color: function color(r) {
      return r === 0 ? null : {
        prop: "color",
        value: zp(r)
      };
    }
  },
  zp = function zp(r) {
    var t = (r & 255) / 255,
      e = r >> 8 & 255,
      n = r >> 16 & 255,
      o = r >> 24 & 255;
    return "rgba(".concat(o, ",").concat(n, ",").concat(e, ",").concat(t, ")");
  },
  mx = {
    id: "id"
  };
var yx = /*#__PURE__*/function () {
  function yx(t, e) {
    _classCallCheck(this, yx);
    b(this, "root", null);
    b(this, "canvas", null);
    b(this, "height", 1080);
    b(this, "width", 1920);
    b(this, "scaleX", 1);
    b(this, "scaleY", 1);
    var i, a, s, l, c, u;
    if (Sp()) return;
    if (!e) throw new Error("settings is required");
    this.height = Math.ceil((a = e.appHeight) != null ? a : 1080 / ((i = e.deviceLogicalPixelRatio) != null ? i : 1)), this.width = Math.ceil((l = e.appWidth) != null ? l : 1900 / ((s = e.deviceLogicalPixelRatio) != null ? s : 1)), this.scaleX = (c = e.deviceLogicalPixelRatio) != null ? c : 1, this.scaleY = (u = e.deviceLogicalPixelRatio) != null ? u : 1, this.canvas = t, this.root = document.createElement("div"), this.setRootPosition(), document.body.appendChild(this.root), new MutationObserver(this.setRootPosition.bind(this)).observe(t, {
      attributes: !0,
      childList: !1,
      subtree: !1
    }), new ResizeObserver(this.setRootPosition.bind(this)).observe(t), window.addEventListener("resize", this.setRootPosition.bind(this)), console.warn("Inspector is enabled, this will impact performance");
  }
  return _createClass(yx, [{
    key: "setRootPosition",
    value: function setRootPosition() {
      if (this.root === null || this.canvas === null) return;
      var t = this.canvas.getBoundingClientRect(),
        e = document.documentElement.scrollTop + t.top,
        n = document.documentElement.scrollLeft + t.left;
      this.root.id = "root", this.root.style.left = "".concat(n, "px"), this.root.style.top = "".concat(e, "px"), this.root.style.width = "".concat(this.width, "px"), this.root.style.height = "".concat(this.height, "px"), this.root.style.position = "absolute", this.root.style.transformOrigin = "0 0 0", this.root.style.transform = "scale(".concat(this.scaleX, ", ").concat(this.scaleY, ")"), this.root.style.overflow = "hidden", this.root.style.zIndex = "65534";
    }
  }, {
    key: "createDiv",
    value: function createDiv(t, e) {
      var n = document.createElement("div");
      n.style.position = "absolute", n.id = t.id.toString();
      for (var o in e) this.updateNodeProperty(n, o, e[o]);
      return n;
    }
  }, {
    key: "createNode",
    value: function createNode(t, e) {
      var n = t.createNode(e),
        o = this.createDiv(n, e);
      return o.node = n, n.div = o, this.createProxy(n, o);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(t, e) {
      var n = t.createTextNode(e),
        o = this.createDiv(n, e);
      return o.node = n, n.div = o, this.createProxy(n, o);
    }
  }, {
    key: "createProxy",
    value: function createProxy(t, e) {
      var _this4 = this;
      return new Proxy(t, {
        set: function set(n, o, i) {
          return _this4.updateNodeProperty(e, o, i), Reflect.set(n, o, i);
        },
        get: function get(n, o, i) {
          return o === "destroy" && _this4.destroyNode(n), o === "animate" ? function (a, s) {
            var l = n.animate(a, s);
            return new Proxy(l, {
              get: function get(c, u, f) {
                return u === "start" && _this4.animateNode(e, t, a, s), Reflect.get(c, u, f);
              }
            });
          } : Reflect.get(n, o, i);
        }
      });
    }
  }, {
    key: "destroyNode",
    value: function destroyNode(t) {
      var e = document.getElementById(t.id.toString());
      e == null || e.remove();
    }
  }, {
    key: "updateNodeProperty",
    value: function updateNodeProperty(t, e, n) {
      var o;
      if (!(this.root === null || n === void 0 || n === null)) {
        if (e === "parent") {
          var i = n.id;
          if (i === 1) {
            this.root.appendChild(t);
            return;
          }
          var a = document.getElementById(i.toString());
          a == null || a.appendChild(t);
          return;
        }
        if (e === "text") {
          t.innerHTML = String(n), t.style.visibility = "hidden";
          return;
        }
        if (e === "src" && n) {
          t.setAttribute("data-src", String(n));
          return;
        }
        if (xn[e]) {
          var _i3 = (o = xn[e]) == null ? void 0 : o.call(xn, n);
          if (_i3 === null) return;
          if (typeof _i3 == "string") {
            t.style.setProperty(_i3, String(n));
            return;
          }
          _typeof(_i3) == "object" && t.style.setProperty(_i3.prop, _i3.value);
          return;
        }
        if (mx[e]) {
          t.setAttribute(String(xn[e]), String(n));
          return;
        }
        if (e === "data") {
          for (var _i4 in n) {
            var _a4 = n[_i4];
            _a4 === void 0 ? t.removeAttribute("data-".concat(_i4)) : t.setAttribute("data-".concat(_i4), String(_a4));
          }
          return;
        }
      }
    }
  }, {
    key: "animateNode",
    value: function animateNode(t, e, n, o) {
      var _o$duration = o.duration,
        i = _o$duration === void 0 ? 1e3 : _o$duration,
        _o$delay = o.delay,
        a = _o$delay === void 0 ? 0 : _o$delay,
        s = n.x,
        l = n.y,
        c = n.width,
        u = n.height,
        _n$alpha = n.alpha,
        f = _n$alpha === void 0 ? 1 : _n$alpha,
        _n$rotation = n.rotation,
        v = _n$rotation === void 0 ? 0 : _n$rotation,
        _n$scale = n.scale,
        p = _n$scale === void 0 ? 1 : _n$scale,
        m = n.color;
      function S() {
        setTimeout(function () {
          t.style.top = "".concat(l, "px"), t.style.left = "".concat(s, "px"), t.style.width = "".concat(c, "px"), t.style.height = "".concat(u, "px"), t.style.opacity = "".concat(f), t.style.rotate = "".concat(v, "rad"), t.style.scale = "".concat(p), t.style.color = zp(m);
        }, i);
      }
      setTimeout(S, a);
    }
  }]);
}();
var $e = /*#__PURE__*/function () {
  function $e(t) {
    _classCallCheck(this, $e);
    b(this, "priority", 1);
    b(this, "name", "");
    b(this, "ref");
    b(this, "target");
    b(this, "passParameters", "");
    b(this, "declaredUniforms", "");
    b(this, "uniformInfo", {});
    var e = t.ref,
      n = t.target,
      _t$props = t.props,
      o = _t$props === void 0 ? {} : _t$props;
    this.ref = e, this.target = n;
    var i = {},
      a = [];
    var s = "";
    var l = this.constructor.uniforms || {};
    for (var c in l) {
      var u = l[c],
        f = u.type,
        v = "".concat(e, "_").concat(c);
      var p = "";
      u.size && (p = "[".concat(u.size(o), "]")), a.push(v), s += "uniform ".concat(f, " ").concat(v).concat(p, ";"), i[c] = {
        name: v,
        uniform: l[c].method
      };
    }
    this.passParameters = a.join(","), this.declaredUniforms = s, this.uniformInfo = i;
  }
  return _createClass($e, null, [{
    key: "getEffectKey",
    value: function getEffectKey(t) {
      return "";
    }
  }, {
    key: "getMethodParameters",
    value: function getMethodParameters(t, e) {
      var n = [];
      for (var o in t) {
        var i = t[o];
        var a = "";
        i.size && (a = "[".concat(i.size(e), "]")), n.push("".concat(i.type, " ").concat(o).concat(a));
      }
      return n.join(",");
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(t) {
      return {};
    }
  }, {
    key: "makeEffectKey",
    value: function makeEffectKey(t) {
      return !1;
    }
  }]);
}();
b($e, "uniforms", {}), b($e, "methods"), b($e, "onShaderMask"), b($e, "onColorize"), b($e, "onEffectMask");
var xx = {
  x: function x(r, t) {
    r.props.x = t;
  },
  y: function y(r, t) {
    r.props.y = t;
  },
  width: function width(r, t) {
    r.props.width = t;
  },
  height: function height(r, t) {
    r.props.height = t;
  },
  color: function color(r, t) {
    r.props.color = t;
  },
  zIndex: function zIndex(r, t) {
    r.props.zIndex = t;
  },
  fontFamily: function fontFamily(r, t) {
    r.props.fontFamily = t;
  },
  fontWeight: function fontWeight(r, t) {
    r.props.fontWeight = t;
  },
  fontStyle: function fontStyle(r, t) {
    r.props.fontStyle = t;
  },
  fontStretch: function fontStretch(r, t) {
    r.props.fontStretch = t;
  },
  fontSize: function fontSize(r, t) {
    r.props.fontSize = t;
  },
  text: function text(r, t) {
    r.props.text = t;
  },
  textAlign: function textAlign(r, t) {
    r.props.textAlign = t;
  },
  contain: function contain(r, t) {
    r.props.contain = t;
  },
  offsetY: function offsetY(r, t) {
    r.props.offsetY = t;
  },
  scrollable: function scrollable(r, t) {
    r.props.scrollable = t;
  },
  scrollY: function scrollY(r, t) {
    r.props.scrollY = t;
  },
  letterSpacing: function letterSpacing(r, t) {
    r.props.letterSpacing = t;
  },
  lineHeight: function lineHeight(r, t) {
    r.props.lineHeight = t;
  },
  maxLines: function maxLines(r, t) {
    r.props.maxLines = t;
  },
  textBaseline: function textBaseline(r, t) {
    r.props.textBaseline = t;
  },
  verticalAlign: function verticalAlign(r, t) {
    r.props.verticalAlign = t;
  },
  overflowSuffix: function overflowSuffix(r, t) {
    r.props.overflowSuffix = t;
  },
  debug: function debug(r, t) {
    r.props.debug = t;
  }
};
var Wp = /*#__PURE__*/function () {
  function Wp(t) {
    var _this5 = this;
    _classCallCheck(this, Wp);
    b(this, "stage");
    b(this, "set");
    this.stage = t;
    var e = _objectSpread(_objectSpread({}, xx), this.getPropertySetters());
    this.set = Object.freeze(Object.fromEntries(Object.entries(e).map(function (_ref) {
      var _ref4 = _slicedToArray(_ref, 2),
        n = _ref4[0],
        o = _ref4[1];
      return [n, function (i, a) {
        i.props[n] !== a && (o(i, a), _this5.stage.requestRender());
      }];
    })));
  }
  return _createClass(Wp, [{
    key: "setStatus",
    value: function setStatus(t, e, n) {
      t.status !== e && (t.status = e, t.emitter.emit(e, n));
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(t, e) {
      t.isRenderable = e;
    }
  }, {
    key: "destroyState",
    value: function destroyState(t) {
      ["loading", "loaded", "failed"].forEach(function (n) {
        t.emitter.off(n);
      });
    }
  }, {
    key: "scheduleUpdateState",
    value: function scheduleUpdateState(t) {
      var _this6 = this;
      t.updateScheduled || (t.updateScheduled = !0, queueMicrotask(function () {
        t.updateScheduled = !1, _this6.updateState(t);
      }));
    }
  }]);
}();
var Bu = /*#__PURE__*/function (_N2) {
  function Bu(e, n, o) {
    var _this7;
    _classCallCheck(this, Bu);
    _this7 = _callSuper(this, Bu, [e, n]);
    b(_this7, "fontFace");
    b(_this7, "fontUrl");
    var i = o.replace(/\(|\)/g, ""),
      a = _this7.descriptors,
      s = {
        style: a.style,
        weight: typeof a.weight == "number" ? "".concat(a.weight) : a.weight,
        stretch: a.stretch,
        unicodeRange: a.unicodeRange,
        variant: a.variant,
        featureSettings: a.featureSettings,
        display: a.display
      },
      l = new FontFace(e, "url(".concat(i, ")"), s);
    l.load().then(function () {
      _this7.loaded = !0, _this7.emit("loaded");
    })["catch"](console.error), _this7.fontFace = l, _this7.fontUrl = o;
    return _this7;
  }
  _inherits(Bu, _N2);
  return _createClass(Bu);
}(N0);
var Mu = 2048;
function Du(r, t, e, n, o) {
  var i = r !== "bottom" ? .5 * t : 0;
  return e * (n - 1) + i + Math.max(e, t) + (o || 0);
}
var bx = /*#__PURE__*/function () {
  function bx(t, e) {
    _classCallCheck(this, bx);
    b(this, "_canvas");
    b(this, "_context");
    b(this, "_settings");
    b(this, "renderInfo");
    this._canvas = t, this._context = e, this._settings = this.mergeDefaults({});
  }
  return _createClass(bx, [{
    key: "settings",
    get: function get() {
      return this._settings;
    },
    set: function set(t) {
      this._settings = this.mergeDefaults(t);
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
      var t = [this._settings.fontFace],
        e = [];
      for (var n = 0, o = t.length; n < o; n++) t[n] === "serif" || t[n] === "sans-serif" ? e.push(t[n]) : e.push('"'.concat(t[n], '"'));
      return "".concat(this._settings.fontStyle, " ").concat(this._settings.fontSize * this.getPrecision(), "px ").concat(e.join(","));
    }
  }, {
    key: "_load",
    value: function _load() {
      var _this8 = this;
      if (document.fonts) {
        var t = this._getFontSetting();
        try {
          if (!document.fonts.check(t, this._settings.text)) return document.fonts.load(t, this._settings.text)["catch"](function (e) {
            console.warn("[Lightning] Font load error", e, t);
          }).then(function () {
            document.fonts.check(t, _this8._settings.text) || console.warn("[Lightning] Font not found", t);
          });
        } catch (e) {
          console.warn("[Lightning] Can't check font loading for " + t);
        }
      }
    }
  }, {
    key: "calculateRenderInfo",
    value: function calculateRenderInfo() {
      var t = {},
        e = this.getPrecision(),
        n = this._settings.paddingLeft * e,
        o = this._settings.paddingRight * e,
        i = this._settings.fontSize * e;
      var a = this._settings.offsetY === null ? null : this._settings.offsetY * e,
        s = (this._settings.lineHeight || i) * e;
      var l = this._settings.w * e,
        c = this._settings.h * e;
      var u = this._settings.wordWrapWidth * e;
      var f = this._settings.cutSx * e,
        v = this._settings.cutEx * e,
        p = this._settings.cutSy * e,
        m = this._settings.cutEy * e,
        S = (this._settings.letterSpacing || 0) * e,
        w = this._settings.textIndent * e;
      this.setFontProperties();
      var $ = l || 2048 / this.getPrecision(),
        y = $ - n;
      if (y < 10 && ($ += 10 - y, y = 10), u || (u = y), this._settings.textOverflow && !this._settings.wordWrap) {
        var C;
        switch (this._settings.textOverflow) {
          case "clip":
            C = "";
            break;
          case "ellipsis":
            C = this._settings.overflowSuffix;
            break;
          default:
            C = this._settings.textOverflow;
        }
        this._settings.text = this.wrapWord(this._settings.text, u - w, C);
      }
      var d;
      if (this._settings.wordWrap) d = this.wrapText(this._settings.text, u, S, w);else {
        d = {
          l: this._settings.text.split(/(?:\r\n|\r|\n)/),
          n: []
        };
        var _C2 = d.l.length;
        for (var A = 0; A < _C2 - 1; A++) d.n.push(A);
      }
      var h = d.l;
      if (this._settings.maxLines && h.length > this._settings.maxLines) {
        var _C3 = h.slice(0, this._settings.maxLines);
        var _A2 = null;
        if (this._settings.overflowSuffix) {
          var L = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0,
            D = this.wrapText(_C3[_C3.length - 1], u - L, S, w);
          _C3[_C3.length - 1] = "".concat(D.l[0]).concat(this._settings.overflowSuffix), _A2 = [D.l.length > 1 ? D.l[1] : ""];
        } else _A2 = [""];
        var O;
        var N = h.length;
        var _ = 0;
        var F = d.n.length;
        for (O = this._settings.maxLines; O < N; O++) _A2[_] += "".concat(_A2[_] ? " " : "").concat(h[O]), O + 1 < F && d.n[O + 1] && _++;
        t.remainingText = _A2.join("\n"), t.moreTextLines = !0, h = _C3;
      } else t.moreTextLines = !1, t.remainingText = "";
      var g = 0;
      var T = [];
      for (var _C4 = 0; _C4 < h.length; _C4++) {
        var _A3 = this.measureText(h[_C4], S) + (_C4 === 0 ? w : 0);
        T.push(_A3), g = Math.max(g, _A3);
      }
      t.lineWidths = T, l || ($ = g + n + o, y = g), s = s || i;
      var I;
      return c ? I = c : I = Du(this._settings.textBaseline, i, s, h.length, a), a === null && (a = i), t.w = $, t.h = I, t.lines = h, t.precision = e, $ || ($ = 1), I || (I = 1), (f || v) && ($ = Math.min($, v - f)), (p || m) && (I = Math.min(I, m - p)), t.width = $, t.innerWidth = y, t.height = I, t.fontSize = i, t.cutSx = f, t.cutSy = p, t.cutEx = v, t.cutEy = m, t.lineHeight = s, t.lineWidths = T, t.offsetY = a, t.paddingLeft = n, t.paddingRight = o, t.letterSpacing = S, t.textIndent = w, t;
    }
  }, {
    key: "draw",
    value: function draw(t, e) {
      var n = this.getPrecision(),
        o = (e == null ? void 0 : e.lines) || t.lines,
        i = (e == null ? void 0 : e.lineWidths) || t.lineWidths,
        a = e ? Du(this._settings.textBaseline, t.fontSize, t.lineHeight, e.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * n) : t.height;
      this._canvas.width = Math.min(Math.ceil(t.width + this._settings.textRenderIssueMargin), Mu), this._canvas.height = Math.min(Math.ceil(a), Mu), this.setFontProperties(), t.fontSize >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (t.cutSx || t.cutSy) && this._context.translate(-t.cutSx, -t.cutSy);
      var s, l;
      var c = [];
      for (var f = 0, v = o.length; f < v; f++) s = f === 0 ? t.textIndent : 0, l = f * t.lineHeight + t.offsetY, this._settings.verticalAlign == "middle" ? l += (t.lineHeight - t.fontSize) / 2 : this._settings.verticalAlign == "bottom" && (l += t.lineHeight - t.fontSize), this._settings.textAlign === "right" ? s += t.innerWidth - i[f] : this._settings.textAlign === "center" && (s += (t.innerWidth - i[f]) / 2), s += t.paddingLeft, c.push({
        text: o[f],
        x: s,
        y: l,
        w: i[f]
      });
      if (this._settings.highlight) {
        var _f2 = this._settings.highlightColor,
          _v2 = this._settings.highlightHeight * n || t.fontSize * 1.5,
          p = this._settings.highlightOffset * n,
          m = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * n : t.paddingLeft,
          S = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * n : t.paddingRight;
        this._context.fillStyle = Fa(_f2);
        for (var w = 0; w < c.length; w++) {
          var $ = c[w];
          this._context.fillRect($.x - m, $.y - t.offsetY + p, $.w + S + m, _v2);
        }
      }
      var u = null;
      this._settings.shadow && (u = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = Fa(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * n, this._context.shadowOffsetY = this._settings.shadowOffsetY * n, this._context.shadowBlur = this._settings.shadowBlur * n), this._context.fillStyle = Fa(this._settings.textColor);
      for (var _f3 = 0, _v3 = c.length; _f3 < _v3; _f3++) {
        var _p4 = c[_f3];
        if (t.letterSpacing === 0) this._context.fillText(_p4.text, _p4.x, _p4.y);else {
          var _m2 = _p4.text.split("");
          var _S2 = _p4.x;
          for (var _w2 = 0, _$2 = _m2.length; _w2 < _$2; _w2++) this._context.fillText(_m2[_w2], _S2, _p4.y), _S2 += this.measureText(_m2[_w2], t.letterSpacing);
        }
      }
      u && (this._context.shadowColor = u[0], this._context.shadowOffsetX = u[1], this._context.shadowOffsetY = u[2], this._context.shadowBlur = u[3]), (t.cutSx || t.cutSy) && this._context.translate(t.cutSx, t.cutSy), this.renderInfo = t;
    }
  }, {
    key: "wrapWord",
    value: function wrapWord(t, e, n) {
      var o = this._context.measureText(n).width,
        i = t.length,
        a = this._context.measureText(t).width;
      if (a <= e) return t;
      var s = Math.floor(e * i / a),
        l = this._context.measureText(t.substring(0, s)).width + o;
      if (l > e) for (; s > 0 && (l = this._context.measureText(t.substring(0, s)).width + o, l > e);) s -= 1;else for (; s < i;) if (l = this._context.measureText(t.substring(0, s)).width + o, l < e) s += 1;else {
        s -= 1;
        break;
      }
      return t.substring(0, s) + (e >= o ? n : "");
    }
  }, {
    key: "wrapText",
    value: function wrapText(t, e, n) {
      var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var i = t.split(/\r?\n/g);
      var a = [];
      var s = [];
      for (var l = 0; l < i.length; l++) {
        var c = [];
        var u = "",
          f = e - o;
        var v = i[l].split(" ");
        for (var p = 0; p < v.length; p++) {
          var m = this.measureText(v[p], n),
            S = m + this.measureText(" ", n);
          p === 0 || S > f ? (p > 0 && (c.push(u), u = ""), u += v[p], f = e - m - (p === 0 ? o : 0)) : (f -= S, u += " ".concat(v[p]));
        }
        c.push(u), u = "", a = a.concat(c), l < i.length - 1 && s.push(a.length);
      }
      return {
        l: a,
        n: s
      };
    }
  }, {
    key: "measureText",
    value: function measureText(t) {
      var _this9 = this;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return e ? t.split("").reduce(function (n, o) {
        return n + _this9._context.measureText(o).width + e;
      }, 0) : this._context.measureText(t).width;
    }
  }, {
    key: "mergeDefaults",
    value: function mergeDefaults(t) {
      return _objectSpread({
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
      }, t);
    }
  }]);
}();
var ju = (typeof self === "undefined" ? "undefined" : _typeof(self)) > "u" ? globalThis : self;
var $p;
var Uu = (($p = ju.document) == null ? void 0 : $p.fonts) || ju.fonts;
function $x(r) {
  var t = r.fontFamily,
    e = r.fontStyle,
    n = r.fontWeight,
    o = r.fontStretch,
    i = r.fontSize;
  return [e, n, o, "".concat(i, "px"), t].join(" ");
}
var Sx = jr(0, 0, 0, 0);
var zu = /*#__PURE__*/function (_Wp) {
  function zu(e) {
    var _this10;
    _classCallCheck(this, zu);
    _this10 = _callSuper(this, zu, [e]);
    b(_this10, "canvas");
    b(_this10, "context");
    b(_this10, "rendererBounds");
    (typeof OffscreenCanvas === "undefined" ? "undefined" : _typeof(OffscreenCanvas)) < "u" ? _this10.canvas = new OffscreenCanvas(0, 0) : _this10.canvas = document.createElement("canvas");
    var n = _this10.canvas.getContext("2d");
    n || (_this10.canvas = document.createElement("canvas"), n = _this10.canvas.getContext("2d")), k(n), _this10.context = n, _this10.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this10.stage.options.appWidth,
      y2: _this10.stage.options.appHeight
    };
    return _this10;
  }
  _inherits(zu, _Wp);
  return _createClass(zu, [{
    key: "getPropertySetters",
    value: function getPropertySetters() {
      var _this11 = this;
      return {
        fontFamily: function fontFamily(e, n) {
          e.props.fontFamily = n, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
        },
        fontWeight: function fontWeight(e, n) {
          e.props.fontWeight = n, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
        },
        fontStyle: function fontStyle(e, n) {
          e.props.fontStyle = n, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
        },
        fontStretch: function fontStretch(e, n) {
          e.props.fontStretch = n, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
        },
        fontSize: function fontSize(e, n) {
          e.props.fontSize = n, e.fontInfo = void 0, _this11.invalidateLayoutCache(e);
        },
        text: function text(e, n) {
          e.props.text = n, _this11.invalidateLayoutCache(e);
        },
        textAlign: function textAlign(e, n) {
          e.props.textAlign = n, _this11.invalidateLayoutCache(e);
        },
        color: function color(e, n) {
          e.props.color = n, _this11.invalidateLayoutCache(e);
        },
        x: function x(e, n) {
          e.props.x = n, _this11.invalidateVisibleWindowCache(e);
        },
        y: function y(e, n) {
          e.props.y = n, _this11.invalidateVisibleWindowCache(e);
        },
        contain: function contain(e, n) {
          e.props.contain = n, _this11.invalidateLayoutCache(e);
        },
        width: function width(e, n) {
          e.props.width = n, e.props.contain !== "none" && _this11.invalidateLayoutCache(e);
        },
        height: function height(e, n) {
          e.props.height = n, e.props.contain === "both" && _this11.invalidateLayoutCache(e);
        },
        offsetY: function offsetY(e, n) {
          e.props.offsetY = n, _this11.invalidateLayoutCache(e);
        },
        scrollY: function scrollY(e, n) {
          e.props.scrollY = n;
        },
        letterSpacing: function letterSpacing(e, n) {
          e.props.letterSpacing = n, _this11.invalidateLayoutCache(e);
        },
        lineHeight: function lineHeight(e, n) {
          e.props.lineHeight = n, _this11.invalidateLayoutCache(e);
        },
        maxLines: function maxLines(e, n) {
          e.props.maxLines = n, _this11.invalidateLayoutCache(e);
        },
        textBaseline: function textBaseline(e, n) {
          e.props.textBaseline = n, _this11.invalidateLayoutCache(e);
        },
        verticalAlign: function verticalAlign(e, n) {
          e.props.verticalAlign = n, _this11.invalidateLayoutCache(e);
        },
        overflowSuffix: function overflowSuffix(e, n) {
          e.props.overflowSuffix = n, _this11.invalidateLayoutCache(e);
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
      return e instanceof Bu;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      k(e instanceof Bu), Uu.add(e.fontFace);
    }
  }, {
    key: "createState",
    value: function createState(e) {
      return {
        props: e,
        status: "initialState",
        updateScheduled: !1,
        emitter: new fr(),
        canvasPages: void 0,
        lightning2TextRenderer: new bx(this.canvas, this.context),
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
      var m, S;
      if (e.status === "initialState" && this.setStatus(e, "loading"), !e.fontInfo) {
        var w = $x(e.props);
        if (e.fontInfo = {
          cssString: w,
          loaded: !1
        }, !e.fontInfo.loaded) {
          Uu.load(w).then(this.onFontLoaded.bind(this, e, w))["catch"](this.onFontLoadError.bind(this, e, w));
          return;
        }
      }
      if (!e.fontInfo.loaded) return;
      if (!e.renderInfo) {
        var _w3 = e.props.maxLines,
          $ = e.props.contain === "both" ? Math.floor((e.props.height - e.props.offsetY) / e.props.lineHeight) : 0,
          y = $ > 0 && _w3 > 0 ? Math.min($, _w3) : Math.max($, _w3);
        e.lightning2TextRenderer.settings = {
          text: e.props.text,
          textAlign: e.props.textAlign,
          fontFace: e.props.fontFamily,
          fontSize: e.props.fontSize,
          fontStyle: [e.props.fontStretch, e.props.fontStyle, e.props.fontWeight].join(" "),
          textColor: vt(e.props.color),
          offsetY: e.props.fontSize + e.props.offsetY,
          wordWrap: e.props.contain !== "none",
          wordWrapWidth: e.props.contain === "none" ? void 0 : e.props.width,
          letterSpacing: e.props.letterSpacing,
          lineHeight: e.props.lineHeight,
          maxLines: y,
          textBaseline: e.props.textBaseline,
          verticalAlign: e.props.verticalAlign,
          overflowSuffix: e.props.overflowSuffix
        }, e.renderInfo = e.lightning2TextRenderer.calculateRenderInfo(), e.textH = e.renderInfo.lineHeight * e.renderInfo.lines.length, e.textW = e.renderInfo.width, e.renderWindow = void 0;
      }
      var _e$props = e.props,
        n = _e$props.x,
        o = _e$props.y,
        i = _e$props.width,
        a = _e$props.height,
        s = _e$props.scrollY,
        l = _e$props.contain,
        c = e.visibleWindow;
      var u = e.renderWindow,
        f = e.canvasPages;
      if (!c.valid) {
        var _w4 = jr(n, o, l !== "none" ? n + i : 1 / 0, l === "both" ? o + a : 1 / 0, Sx);
        L0(this.rendererBounds, _w4, c), c.valid = !0;
      }
      var v = c.y2 - c.y1,
        p = Math.ceil(v / e.renderInfo.lineHeight);
      if (v === 0) {
        f = void 0, u = void 0, this.setStatus(e, "loaded");
        return;
      } else if (u && f) {
        var _w5 = n + u.x1,
          _$3 = o - s + u.y1,
          _y2 = n + u.x2,
          d = o - s + u.y2;
        if (_w5 <= c.x1 && _y2 >= c.x2 && _$3 <= c.y1 && d >= c.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        d < c.y2 ? (u.y1 += p * e.renderInfo.lineHeight, u.y2 += p * e.renderInfo.lineHeight, f.push(f.shift()), f[2].lineNumStart = f[1].lineNumStart + p, f[2].lineNumEnd = f[2].lineNumStart + p, f[2].valid = !1) : _$3 > c.y1 && (u.y1 -= p * e.renderInfo.lineHeight, u.y2 -= p * e.renderInfo.lineHeight, f.unshift(f.pop()), f[0].lineNumStart = f[1].lineNumStart - p, f[0].lineNumEnd = f[0].lineNumStart + p, f[0].valid = !1);
      } else {
        var _w6 = e.renderInfo.lineHeight * p,
          _$4 = Math.ceil(s / _w6),
          _y3 = _$4 * p,
          _d2 = _y3 - p,
          h = _y3 + p;
        f = [{
          texture: f == null ? void 0 : f[0].texture,
          lineNumStart: _d2,
          lineNumEnd: _d2 + p,
          valid: !1
        }, {
          texture: f == null ? void 0 : f[1].texture,
          lineNumStart: _y3,
          lineNumEnd: _y3 + p,
          valid: !1
        }, {
          texture: f == null ? void 0 : f[2].texture,
          lineNumStart: h,
          lineNumEnd: h + p,
          valid: !1
        }], e.canvasPages = f;
        var g = _$4 * _w6;
        u = {
          x1: 0,
          y1: g - _w6,
          x2: i,
          y2: g + _w6 * 2
        };
      }
      e.renderWindow = u, performance.now();
      var _iterator10 = _createForOfIteratorHelper(f),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _w7 = _step10.value;
          if (!_w7.valid) {
            if (_w7.lineNumStart < 0) {
              (m = _w7.texture) == null || m.setRenderableOwner(e, !1), _w7.texture = this.stage.txManager.loadTexture("ImageTexture", {
                src: ""
              }), _w7.texture.setRenderableOwner(e, e.isRenderable), _w7.valid = !0;
              continue;
            }
            e.lightning2TextRenderer.draw(e.renderInfo, {
              lines: e.renderInfo.lines.slice(_w7.lineNumStart, _w7.lineNumEnd),
              lineWidths: e.renderInfo.lineWidths.slice(_w7.lineNumStart, _w7.lineNumEnd)
            }), this.canvas.width === 0 || this.canvas.height === 0 || ((S = _w7.texture) == null || S.setRenderableOwner(e, !1), _w7.texture = this.stage.txManager.loadTexture("ImageTexture", {
              src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
            }, {
              preload: !0
            }), _w7.texture.setRenderableOwner(e, e.isRenderable)), _w7.valid = !0;
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      this.setStatus(e, "loaded");
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e, n, o, i) {
      var C, A, O, N, _, F, L, D, j, G, pe, ae;
      var a = this.stage,
        s = e.canvasPages,
        _e$textW = e.textW,
        l = _e$textW === void 0 ? 0 : _e$textW,
        _e$textH = e.textH,
        c = _e$textH === void 0 ? 0 : _e$textH,
        u = e.renderWindow;
      if (!s || !u) return;
      var _e$props2 = e.props,
        f = _e$props2.x,
        v = _e$props2.y,
        p = _e$props2.scrollY,
        m = _e$props2.contain,
        S = _e$props2.width,
        w = _e$props2.height,
        $ = {
          x: f,
          y: v,
          width: m !== "none" ? S : l,
          height: m === "both" ? w : c
        };
      fc({
        x: 0,
        y: 0,
        width: a.options.appWidth,
        height: a.options.appHeight
      }, $), k(s, "canvasPages is not defined"), k(u, "renderWindow is not defined");
      var d = (u.y2 - u.y1) / 3,
        _e$props3 = e.props,
        h = _e$props3.zIndex,
        g = _e$props3.color,
        T = i * F0(g),
        I = Pn(4294967295, T);
      s[0].valid && this.stage.renderer.addQuad({
        alpha: T,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((A = (C = s[0].texture) == null ? void 0 : C.dimensions) == null ? void 0 : A.width) || 0,
        height: ((N = (O = s[0].texture) == null ? void 0 : O.dimensions) == null ? void 0 : N.height) || 0,
        texture: s[0].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: h,
        tx: n.tx,
        ty: n.ty - p + u.y1,
        ta: n.ta,
        tb: n.tb,
        tc: n.tc,
        td: n.td
      }), s[1].valid && this.stage.renderer.addQuad({
        alpha: T,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((F = (_ = s[1].texture) == null ? void 0 : _.dimensions) == null ? void 0 : F.width) || 0,
        height: ((D = (L = s[1].texture) == null ? void 0 : L.dimensions) == null ? void 0 : D.height) || 0,
        texture: s[1].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: h,
        tx: n.tx,
        ty: n.ty - p + u.y1 + d,
        ta: n.ta,
        tb: n.tb,
        tc: n.tc,
        td: n.td
      }), s[2].valid && this.stage.renderer.addQuad({
        alpha: T,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((G = (j = s[2].texture) == null ? void 0 : j.dimensions) == null ? void 0 : G.width) || 0,
        height: ((ae = (pe = s[2].texture) == null ? void 0 : pe.dimensions) == null ? void 0 : ae.height) || 0,
        texture: s[2].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: h,
        tx: n.tx,
        ty: n.ty - p + u.y1 + d + d,
        ta: n.ta,
        tb: n.tb,
        tc: n.tc,
        td: n.td
      });
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(e, n) {
      var o;
      _superPropGet(zu, "setIsRenderable", this, 3)([e, n]), (o = e.canvasPages) == null || o.forEach(function (i) {
        var a;
        (a = i.texture) == null || a.setRenderableOwner(e, n);
      });
    }
  }, {
    key: "destroyState",
    value: function destroyState(e) {
      var n;
      (n = e.canvasPages) == null || n.forEach(function (o) {
        var i;
        (i = o.texture) == null || i.setRenderableOwner(e, !1);
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
    value: function onFontLoaded(e, n) {
      var o;
      n !== ((o = e.fontInfo) == null ? void 0 : o.cssString) || !e.fontInfo || (e.fontInfo.loaded = !0, this.scheduleUpdateState(e));
    }
  }, {
    key: "onFontLoadError",
    value: function onFontLoadError(e, n, o) {
      var i;
      n !== ((i = e.fontInfo) == null ? void 0 : i.cssString) || !e.fontInfo || (e.fontInfo.loaded = !0, console.error("CanvasTextRenderer: Error loading font '".concat(e.fontInfo.cssString, "'"), o), this.scheduleUpdateState(e));
    }
  }]);
}(Wp);
var Hp = /*#__PURE__*/function (_nn) {
  function Hp(t) {
    _classCallCheck(this, Hp);
    return _callSuper(this, Hp, [{
      renderer: t,
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
  _inherits(Hp, _nn);
  return _createClass(Hp, [{
    key: "bindTextures",
    value: function bindTextures(t) {
      var e = this.glw;
      e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
    }
  }]);
}(nn);
b(Hp, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
var Yp = /*#__PURE__*/function (_nn2) {
  function Yp(e) {
    var _this12;
    _classCallCheck(this, Yp);
    _this12 = _callSuper(this, Yp, [{
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
    }]);
    b(_this12, "supportsIndexedTextures", !0);
    return _this12;
  }
  _inherits(Yp, _nn2);
  return _createClass(Yp, [{
    key: "bindTextures",
    value: function bindTextures(e) {
      var n = this.renderer,
        o = this.glw;
      if (e.length > n.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) throw new Error("DefaultShaderBatched: Cannot bind more than ".concat(n.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS, " textures"));
      e.forEach(function (a, s) {
        o.activeTexture(s), o.bindTexture(a.ctxTexture);
      });
      var i = Array.from(Array(e.length).keys());
      this.setUniform("u_textures[0]", i);
    }
  }]);
}(nn);
b(Yp, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: function fragment(e) {
    return "\n      #define txUnits ".concat(e, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(e, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(e).keys()).map(function (n) {
      return "\n          ".concat(n !== 0 ? "else " : "", "if (idx == ").concat(n, ") {\n            return texture2D(textures[").concat(n, "], uv);\n          }\n        ");
    }).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ");
  }
});
function Kp(r, t) {
  var e = 0,
    n,
    o;
  t = t || {};
  function i() {
    var a = n,
      s = arguments.length,
      l,
      c;
    e: for (; a;) {
      if (a.args.length !== arguments.length) {
        a = a.next;
        continue;
      }
      for (c = 0; c < s; c++) if (a.args[c] !== arguments[c]) {
        a = a.next;
        continue e;
      }
      return a !== n && (a === o && (o = a.prev), a.prev.next = a.next, a.next && (a.next.prev = a.prev), a.next = n, a.prev = null, n.prev = a, n = a), a.val;
    }
    for (l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
    return a = {
      args: l,
      val: r.apply(null, l)
    }, n ? (n.prev = a, a.next = n) : o = a, e === t.maxSize ? (o = o.prev, o.next = null) : e++, n = a, a.val;
  }
  return i.clear = function () {
    n = null, o = null, e = 0;
  }, i;
}
var ja = new Map(),
  wx = function wx(r, t) {
    var e = JSON.stringify(r);
    if (ja.has(e)) return ja.get(e);
    var n = (r != null ? r : []).map(function (o) {
      return {
        type: o.type,
        props: t[o.type].resolveDefaults(o.props || {})
      };
    });
    return ja.set(e, n), n;
  },
  xt = /*#__PURE__*/function (_nn3) {
    function xt(e, n, o) {
      var _this13;
      _classCallCheck(this, xt);
      var i = xt.createShader(n, o);
      _this13 = _callSuper(this, xt, [{
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
        }].concat(_toConsumableArray(i.uniforms)),
        shaderSources: {
          vertex: i.vertex,
          fragment: i.fragment
        }
      }]);
      b(_this13, "effects", []);
      _this13.effects = i.effects, _this13.calculateProps = Kp(_this13.calculateProps.bind(_this13));
      return _this13;
    }
    _inherits(xt, _nn3);
    return _createClass(xt, [{
      key: "bindTextures",
      value: function bindTextures(e) {
        var n = this.glw;
        n.activeTexture(0), n.bindTexture(e[0].ctxTexture);
      }
    }, {
      key: "calculateProps",
      value: function calculateProps(e) {
        var _this14 = this;
        var n = this.renderer.shManager.getRegisteredEffects(),
          o = [];
        return e == null || e.forEach(function (i, a) {
          var f;
          var s = _this14.effects[a],
            l = n[s.name],
            c = (f = i.props) != null ? f : {},
            u = s.uniformInfo;
          Object.keys(c).forEach(function (v) {
            var p = l.uniforms[v],
              m = u[v];
            var S = p.validator ? p.validator(c[v], c) : c[v];
            Array.isArray(S) && (S = new Float32Array(S)), o.push({
              name: m.name,
              value: S
            });
          });
        }), o;
      }
    }, {
      key: "bindProps",
      value: function bindProps(e) {
        var _this15 = this;
        this.calculateProps(e.effects).forEach(function (o) {
          _this15.setUniform(o.name, o.value);
        });
      }
    }, {
      key: "canBatchShaderProps",
      value: function canBatchShaderProps(e, n) {
        if (e.$dimensions.width !== n.$dimensions.width || e.$dimensions.height !== n.$dimensions.height || e.effects.length !== n.effects.length) return !1;
        var o = e.effects.length;
        var i = 0;
        for (; i < o; i++) {
          var a = e.effects[i],
            s = n.effects[i];
          if (a.type !== s.type) return !1;
          for (var l in a.props) if (s.props && !s.props[l] || a.props[l] !== s.props[l]) return !1;
        }
        return !0;
      }
    }], [{
      key: "createShader",
      value: function createShader(e, n) {
        var o = {},
          i = {};
        var a = "";
        var s = [],
          l = [],
          c = e.effects.map(function (m) {
            var S = n[m.type],
              w = S.getEffectKey(m.props || {});
            o[w] = o[w] ? ++o[w] : 1;
            var $ = o[w];
            $ === 1 && l.push({
              key: w,
              type: m.type,
              props: m.props
            });
            var y = new S({
              ref: "".concat(w).concat($ === 1 ? "" : $),
              target: w,
              props: m.props
            });
            return a += y.declaredUniforms, s.push.apply(s, _toConsumableArray(Object.values(y.uniformInfo))), y;
          });
        var u = "";
        l == null || l.forEach(function (m) {
          var I;
          var S = n[m.type],
            w = S.resolveDefaults((I = m.props) != null ? I : {}),
            $ = [];
          for (var C in S.methods) {
            var A = C;
            var O = S.methods[C];
            i[C] && i[C] !== O && (A = xt.resolveMethodDuplicate(C, O, i)), i[A] = O.replace("function", A), $.push({
              m: C,
              cm: A
            });
          }
          var y = S.onShaderMask instanceof Function ? S.onShaderMask(w) : S.onShaderMask,
            d = S.onColorize instanceof Function ? S.onColorize(w) : S.onColorize,
            h = S.onEffectMask instanceof Function ? S.onEffectMask(w) : S.onEffectMask;
          $.forEach(function (C) {
            var A = C.m,
              O = C.cm,
              N = new RegExp("\\$".concat(A), "g");
            y && (y = y.replace(N, O)), d && (d = d.replace(N, O)), h && (h = h.replace(N, O));
          });
          var g = S.getMethodParameters(S.uniforms, w),
            T = g.length > 0 ? ", ".concat(g) : "";
          y && (u += "\n        float fx_".concat(m.key, "_onShaderMask(float shaderMask ").concat(T, ") {\n          ").concat(y, "\n        }\n        ")), d && (u += "\n          vec4 fx_".concat(m.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(T, ") {\n            ").concat(d, "\n          }\n        ")), h && (u += "\n          vec4 fx_".concat(m.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(T, ") {\n            ").concat(h, "\n          }\n        "));
        });
        var f = "";
        for (var m in i) f += i[m];
        var v = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))",
          p = "\n\n    ";
        for (var _m3 = 0; _m3 < c.length; _m3++) {
          var S = c[_m3],
            w = S.passParameters.length > 0 ? ", ".concat(S.passParameters) : "",
            $ = n[S.name];
          $.onShaderMask && (p += "\n        shaderMask = fx_".concat(S.target, "_onShaderMask(shaderMask ").concat(w, ");\n        ")), $.onColorize && (p += "\n        maskColor = fx_".concat(S.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(w, ");\n        ")), $.onEffectMask && (v = "fx_".concat(S.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(w, ")"));
          var y = c[_m3 + 1];
          (y === void 0 || n[y.name].onEffectMask) && (p += "\n          shaderColor = ".concat(v, ";\n        "));
        }
        return {
          effects: c,
          uniforms: s,
          fragment: xt.fragment(a, f, u, p),
          vertex: xt.vertex()
        };
      }
    }, {
      key: "resolveMethodDuplicate",
      value: function resolveMethodDuplicate(e, n, o) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var a = e + (i > 0 ? i : "");
        return o[a] && o[a] !== n ? this.resolveMethodDuplicate(e, n, o, ++i) : a;
      }
    }, {
      key: "resolveDefaults",
      value: function resolveDefaults(e, n) {
        return {
          effects: wx(e.effects, n),
          $dimensions: {
            width: 0,
            height: 0
          },
          $alpha: 0
        };
      }
    }, {
      key: "makeCacheKey",
      value: function makeCacheKey(e, n) {
        var i;
        var o = "";
        return (i = e.effects) == null || i.forEach(function (a) {
          var l = n[a.type].getEffectKey(a.props || {});
          o += ",".concat(l);
        }), "DynamicShader".concat(o);
      }
    }]);
  }(nn);
b(xt, "z$__type__Props"), b(xt, "vertex", function () {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ";
}), b(xt, "fragment", function (e, n, o, i) {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(e, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(n, "\n\n    ").concat(o, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(i, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  ");
});
var Ur = xt;
var al = /*#__PURE__*/function (_nn4) {
  function al(t) {
    _classCallCheck(this, al);
    return _callSuper(this, al, [{
      renderer: t,
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
  _inherits(al, _nn4);
  return _createClass(al, [{
    key: "bindTextures",
    value: function bindTextures(t) {
      var e = this.glw;
      e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
    }
  }, {
    key: "bindProps",
    value: function bindProps(t) {
      this.setUniform("u_radius", t.radius);
    }
  }, {
    key: "canBatchShaderProps",
    value: function canBatchShaderProps(t, e) {
      return t.radius === e.radius && t.$dimensions.width === e.$dimensions.width && t.$dimensions.height === e.$dimensions.height;
    }
  }], [{
    key: "resolveDefaults",
    value: function resolveDefaults(t) {
      return {
        radius: t.radius || 10,
        $dimensions: {
          width: 0,
          height: 0
        }
      };
    }
  }]);
}(nn);
b(al, "z$__type__Props"), b(al, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
var Tx = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
  Qi = /*#__PURE__*/function (_nn5) {
    function Qi(t) {
      _classCallCheck(this, Qi);
      return _callSuper(this, Qi, [{
        renderer: t,
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
    _inherits(Qi, _nn5);
    return _createClass(Qi, [{
      key: "bindTextures",
      value: function bindTextures(t) {
        var e = this.glw;
        e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
      }
    }, {
      key: "bindProps",
      value: function bindProps(t) {
        var e = Qi.resolveDefaults(t);
        for (var n in e) if (n === "transform") this.setUniform("u_transform", !1, e[n]);else if (n === "scrollY") this.setUniform("u_scrollY", e[n]);else if (n === "color") {
          var o = vt(e.color);
          this.setUniform("u_color", o);
        } else n === "size" ? this.setUniform("u_size", e[n]) : n === "distanceRange" ? this.setUniform("u_distanceRange", e[n]) : n === "debug" && this.setUniform("u_debug", e[n] ? 1 : 0);
      }
    }], [{
      key: "resolveDefaults",
      value: function resolveDefaults() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e, n, o, i, a, s;
        return {
          transform: (e = t.transform) != null ? e : Tx,
          scrollY: (n = t.scrollY) != null ? n : 0,
          color: (o = t.color) != null ? o : 4294967295,
          size: (i = t.size) != null ? i : 16,
          distanceRange: (a = t.distanceRange) != null ? a : 1,
          debug: (s = t.debug) != null ? s : !1
        };
      }
    }]);
  }(nn);
b(Qi, "shaderSources", {
  vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
var sl = Qi;
var Pr = /*#__PURE__*/function (_$e) {
  function Pr() {
    var _this16;
    _classCallCheck(this, Pr);
    _this16 = _callSuper(this, Pr, arguments);
    b(_this16, "name", "radius");
    return _this16;
  }
  _inherits(Pr, _$e);
  return _createClass(Pr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "radius";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n;
      return {
        radius: (n = e.radius) != null ? n : 10
      };
    }
  }]);
}($e);
b(Pr, "z$__type__Props"), b(Pr, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), b(Pr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), b(Pr, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  "), b(Pr, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
var Ln = /*#__PURE__*/function (_$e2) {
  function Ln() {
    var _this17;
    _classCallCheck(this, Ln);
    _this17 = _callSuper(this, Ln, arguments);
    b(_this17, "name", "border");
    return _this17;
  }
  _inherits(Ln, _$e2);
  return _createClass(Ln, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "border";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o;
      return {
        width: (n = e.width) != null ? n : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}($e);
b(Ln, "z$__type__Props"), b(Ln, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return vt(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), b(Ln, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  "), b(Ln, "onColorize", "\n    return color;\n  ");
var Bt = /*#__PURE__*/function (_$e3) {
  function Bt() {
    var _this18;
    _classCallCheck(this, Bt);
    _this18 = _callSuper(this, Bt, arguments);
    b(_this18, "name", "linearGradient");
    return _this18;
  }
  _inherits(Bt, _$e3);
  return _createClass(Bt, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "linearGradient".concat(e.colors.length);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var i, a;
      var n = (i = e.colors) != null ? i : [4278190080, 4294967295];
      var o = e.stops || [];
      if (o.length === 0 || o.length !== n.length) {
        var s = n.length;
        var l = 0;
        var c = o;
        for (; l < s; l++) o[l] ? (c[l] = o[l], o[l - 1] === void 0 && c[l - 2] !== void 0 && (c[l - 1] = c[l - 2] + (o[l] - c[l - 2]) / 2)) : c[l] = l * (1 / (n.length - 1));
        o = c;
      }
      return {
        colors: n,
        stops: o,
        angle: (a = e.angle) != null ? a : 0
      };
    }
  }]);
}($e);
b(Bt, "z$__type__Props"), b(Bt, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: function validator(e) {
      return e.map(function (o) {
        return vt(o);
      }).reduce(function (o, i) {
        return o.concat(i);
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
}), b(Bt, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
}), b(Bt, "ColorLoop", function (e) {
  var n = "";
  for (var o = 2; o < e; o++) n += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return n;
}), b(Bt, "onColorize", function (e) {
  var n = e.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(Bt.ColorLoop(n), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var ll = Bt;
var cl = /*#__PURE__*/function (_$e4) {
  function cl() {
    var _this19;
    _classCallCheck(this, cl);
    _this19 = _callSuper(this, cl, arguments);
    b(_this19, "name", "grayscale");
    return _this19;
  }
  _inherits(cl, _$e4);
  return _createClass(cl, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "grayscale";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n;
      return {
        amount: (n = e.amount) != null ? n : 1
      };
    }
  }]);
}($e);
b(cl, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
}), b(cl, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
var Nr = /*#__PURE__*/function (_$e5) {
  function Nr() {
    var _this20;
    _classCallCheck(this, Nr);
    _this20 = _callSuper(this, Nr, arguments);
    b(_this20, "name", "borderRight");
    return _this20;
  }
  _inherits(Nr, _$e5);
  return _createClass(Nr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderRight";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o;
      return {
        width: (n = e.width) != null ? n : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}($e);
b(Nr, "z$__type__Props"), b(Nr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return vt(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), b(Nr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), b(Nr, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), b(Nr, "onColorize", "\n    return color;\n  ");
var Lr = /*#__PURE__*/function (_$e6) {
  function Lr() {
    var _this21;
    _classCallCheck(this, Lr);
    _this21 = _callSuper(this, Lr, arguments);
    b(_this21, "name", "borderTop");
    return _this21;
  }
  _inherits(Lr, _$e6);
  return _createClass(Lr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderTop";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o;
      return {
        width: (n = e.width) != null ? n : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}($e);
b(Lr, "z$__type__Props"), b(Lr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return vt(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), b(Lr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), b(Lr, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), b(Lr, "onColorize", "\n    return color;\n  ");
var Fr = /*#__PURE__*/function (_$e7) {
  function Fr() {
    var _this22;
    _classCallCheck(this, Fr);
    _this22 = _callSuper(this, Fr, arguments);
    b(_this22, "name", "borderBottom");
    return _this22;
  }
  _inherits(Fr, _$e7);
  return _createClass(Fr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderBottom";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o;
      return {
        width: (n = e.width) != null ? n : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}($e);
b(Fr, "z$__type__Props"), b(Fr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return vt(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), b(Fr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), b(Fr, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), b(Fr, "onColorize", "\n    return color;\n  ");
var kr = /*#__PURE__*/function (_$e8) {
  function kr() {
    var _this23;
    _classCallCheck(this, kr);
    _this23 = _callSuper(this, kr, arguments);
    b(_this23, "name", "borderLeft");
    return _this23;
  }
  _inherits(kr, _$e8);
  return _createClass(kr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderLeft";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o;
      return {
        width: (n = e.width) != null ? n : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}($e);
b(kr, "z$__type__Props"), b(kr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return vt(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), b(kr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), b(kr, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), b(kr, "onColorize", "\n    return color;\n  ");
var Fn = /*#__PURE__*/function (_$e9) {
  function Fn() {
    var _this24;
    _classCallCheck(this, Fn);
    _this24 = _callSuper(this, Fn, arguments);
    b(_this24, "name", "glitch");
    return _this24;
  }
  _inherits(Fn, _$e9);
  return _createClass(Fn, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "glitch";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o, i, a, s;
      return {
        amplitude: (n = e.amplitude) != null ? n : .2,
        narrowness: (o = e.narrowness) != null ? o : 4,
        blockiness: (i = e.blockiness) != null ? i : 2,
        minimizer: (a = e.minimizer) != null ? a : 8,
        time: (s = e.time) != null ? s : Date.now()
      };
    }
  }]);
}($e);
b(Fn, "z$__type__Props"), b(Fn, "uniforms", {
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
}), b(Fn, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
}), b(Fn, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
var vi = /*#__PURE__*/function (_$e10) {
  function vi() {
    var _this25;
    _classCallCheck(this, vi);
    _this25 = _callSuper(this, vi, arguments);
    b(_this25, "name", "fadeOut");
    return _this25;
  }
  _inherits(vi, _$e10);
  return _createClass(vi, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "fadeOut";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n;
      return {
        fade: (n = e.fade) != null ? n : 10
      };
    }
  }]);
}($e);
b(vi, "z$__type__Props"), b(vi, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), b(vi, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
var or = /*#__PURE__*/function (_$e11) {
  function or() {
    var _this26;
    _classCallCheck(this, or);
    _this26 = _callSuper(this, or, arguments);
    b(_this26, "name", "radialGradient");
    return _this26;
  }
  _inherits(or, _$e11);
  return _createClass(or, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "radialGradient".concat(e.colors.length);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var i, a, s, l, c;
      var n = (i = e.colors) != null ? i : [4278190080, 4294967295];
      var o = e.stops || [];
      if (o.length === 0 || o.length !== n.length) {
        var u = n.length;
        var f = 0;
        var v = o;
        for (; f < u; f++) o[f] ? (v[f] = o[f], o[f - 1] === void 0 && v[f - 2] !== void 0 && (v[f - 1] = v[f - 2] + (o[f] - v[f - 2]) / 2)) : v[f] = f * (1 / (n.length - 1));
        o = v;
      }
      return {
        colors: n,
        stops: o,
        width: (a = e.width) != null ? a : 0,
        height: (l = (s = e.height) != null ? s : e.width) != null ? l : 0,
        pivot: (c = e.pivot) != null ? c : [.5, .5]
      };
    }
  }]);
}($e);
b(or, "z$__type__Props"), b(or, "uniforms", {
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
      return e.map(function (o) {
        return vt(o);
      }).reduce(function (o, i) {
        return o.concat(i);
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
}), b(or, "ColorLoop", function (e) {
  var n = "";
  for (var o = 2; o < e; o++) n += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return n;
}), b(or, "onColorize", function (e) {
  var n = e.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(or.ColorLoop(n), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var ul = or;
var Br = /*#__PURE__*/function (_$e12) {
  function Br() {
    var _this27;
    _classCallCheck(this, Br);
    _this27 = _callSuper(this, Br, arguments);
    b(_this27, "name", "radialProgress");
    return _this27;
  }
  _inherits(Br, _$e12);
  return _createClass(Br, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "radialProgress";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o, i, a, s, l, c;
      return {
        width: (n = e.width) != null ? n : 10,
        progress: (o = e.progress) != null ? o : .5,
        offset: (i = e.offset) != null ? i : 0,
        range: (a = e.range) != null ? a : Math.PI * 2,
        rounded: (s = e.rounded) != null ? s : !1,
        radius: (l = e.radius) != null ? l : 1,
        color: (c = e.color) != null ? c : 4294967295
      };
    }
  }]);
}($e);
b(Br, "z$__type__Props"), b(Br, "uniforms", {
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
      return vt(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), b(Br, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
}), b(Br, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  "), b(Br, "onColorize", "\n    return color;\n  ");
var Mr = /*#__PURE__*/function (_$e13) {
  function Mr() {
    var _this28;
    _classCallCheck(this, Mr);
    _this28 = _callSuper(this, Mr, arguments);
    b(_this28, "name", "holePunch");
    return _this28;
  }
  _inherits(Mr, _$e13);
  return _createClass(Mr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "holePunch";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n;
      return {
        x: e.x || 0,
        y: e.y || 0,
        width: e.width || 50,
        height: e.height || 50,
        radius: (n = e.radius) != null ? n : 0
      };
    }
  }]);
}($e);
b(Mr, "z$__type__Props"), b(Mr, "uniforms", {
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
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), b(Mr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), b(Mr, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  "), b(Mr, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
var Gp = "RoundedRectangle";
var Vp = /*#__PURE__*/function (_k2) {
  function Vp(e) {
    var _this29;
    _classCallCheck(this, Vp);
    _this29 = _callSuper(this, Vp);
    b(_this29, "shType");
    _this29.shType = e, e !== Gp && console.warn("Unsupported shader:", e);
    return _this29;
  }
  _inherits(Vp, _k2);
  return _createClass(Vp, [{
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
}(k0);
var Ix = /*#__PURE__*/function () {
  function Ix() {
    _classCallCheck(this, Ix);
    b(this, "shCache", new Map());
    b(this, "shConstructors", {});
    b(this, "attachedShader", null);
    b(this, "effectConstructors", {});
    b(this, "renderer");
    this.registerShaderType("DefaultShader", Hp), this.registerShaderType("DefaultShaderBatched", Yp), this.registerShaderType("RoundedRectangle", al), this.registerShaderType("DynamicShader", Ur), this.registerShaderType("SdfShader", sl), this.registerEffectType("border", Ln), this.registerEffectType("borderBottom", Fr), this.registerEffectType("borderLeft", kr), this.registerEffectType("borderRight", Nr), this.registerEffectType("borderTop", Lr), this.registerEffectType("fadeOut", vi), this.registerEffectType("linearGradient", ll), this.registerEffectType("radialGradient", ul), this.registerEffectType("grayscale", cl), this.registerEffectType("glitch", Fn), this.registerEffectType("radius", Pr), this.registerEffectType("radialProgress", Br), this.registerEffectType("holePunch", Mr);
  }
  return _createClass(Ix, [{
    key: "registerShaderType",
    value: function registerShaderType(t, e) {
      this.shConstructors[t] = e;
    }
  }, {
    key: "registerEffectType",
    value: function registerEffectType(t, e) {
      this.effectConstructors[t] = e;
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
    value: function loadShader(t, e) {
      if (!this.renderer) throw new Error("Renderer is not been defined");
      var n = this.shConstructors[t];
      if (!n) throw new Error('Shader type "'.concat(t, '" is not registered'));
      if (this.renderer.mode === "canvas" && n.prototype instanceof nn) return {
        shader: new Vp(t),
        props: e
      };
      if (t === "DynamicShader") return this.loadDynamicShader(e);
      var o = n.resolveDefaults(e),
        i = n.makeCacheKey(o) || n.name;
      if (i && this.shCache.has(i)) return {
        shader: this.shCache.get(i),
        props: o
      };
      var a = new n(this.renderer, e);
      return i && this.shCache.set(i, a), {
        shader: a,
        props: o
      };
    }
  }, {
    key: "loadDynamicShader",
    value: function loadDynamicShader(t) {
      if (!this.renderer) throw new Error("Renderer is not been defined");
      var e = Ur.resolveDefaults(t, this.effectConstructors),
        n = Ur.makeCacheKey(e, this.effectConstructors);
      if (n && this.shCache.has(n)) return {
        shader: this.shCache.get(n),
        props: e
      };
      var o = new Ur(this.renderer, t, this.effectConstructors);
      return n && this.shCache.set(n, o), {
        shader: o,
        props: e
      };
    }
  }, {
    key: "useShader",
    value: function useShader(t) {
      this.attachedShader !== t && (this.attachedShader && this.attachedShader.detach(), t.attach(), this.attachedShader = t);
    }
  }]);
}();
function Ax(r) {
  return /\.(ktx|pvr)$/.test(r);
}
var Ex = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(r) {
      var e;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(r);
          case 2:
            _context2.next = 4;
            return _context2.sent.arrayBuffer();
          case 4:
            e = _context2.sent;
            return _context2.abrupt("return", r.indexOf(".ktx") !== -1 ? Cx(e) : Rx(e));
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function Ex(_x2) {
      return _ref5.apply(this, arguments);
    };
  }(),
  Cx = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(r) {
      var t, e, n, o, i, a, s;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            t = new DataView(r), e = t.getUint32(12) === 16909060, n = [], o = {
              glInternalFormat: t.getUint32(28, e),
              pixelWidth: t.getUint32(36, e),
              pixelHeight: t.getUint32(40, e),
              numberOfMipmapLevels: t.getUint32(56, e),
              bytesOfKeyValueData: t.getUint32(60, e)
            };
            i = 64;
            i += o.bytesOfKeyValueData;
            for (a = 0; a < o.numberOfMipmapLevels; a++) {
              s = t.getUint32(i);
              i += 4, n.push(t.buffer.slice(i, s)), i += s;
            }
            return _context3.abrupt("return", {
              data: {
                glInternalFormat: o.glInternalFormat,
                mipmaps: n,
                width: o.pixelWidth || 0,
                height: o.pixelHeight || 0,
                type: "ktx"
              },
              premultiplyAlpha: !1
            });
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function Cx(_x3) {
      return _ref6.apply(this, arguments);
    };
  }(),
  Rx = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(r) {
      var s, l, c, u, f, v, p, m, S, w, $, y;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            s = r, l = new Int32Array(s, 0, 13), c = l[12] + 52, u = new Uint8Array(s, c), f = [], v = {
              pixelWidth: l[7],
              pixelHeight: l[6],
              numberOfMipmapLevels: l[11] || 0
            };
            p = 0, m = v.pixelWidth || 0, S = v.pixelHeight || 0;
            for (w = 0; w < v.numberOfMipmapLevels; w++) {
              $ = (m + 3 >> 2) * (S + 3 >> 2) * 8, y = new Uint8Array(s, u.byteOffset + p, $);
              f.push(y), p += $, m = m >> 1, S = S >> 1;
            }
            return _context4.abrupt("return", {
              data: {
                glInternalFormat: 36196,
                mipmaps: f,
                width: v.pixelWidth || 0,
                height: v.pixelHeight || 0,
                type: "pvr"
              },
              premultiplyAlpha: !1
            });
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function Rx(_x4) {
      return _ref7.apply(this, arguments);
    };
  }(),
  Yn = /*#__PURE__*/function (_wp) {
    function Yn(e, n) {
      var _this30;
      _classCallCheck(this, Yn);
      _this30 = _callSuper(this, Yn, [e]);
      b(_this30, "props");
      _this30.props = Yn.resolveDefaults(n);
      return _this30;
    }
    _inherits(Yn, _wp);
    return _createClass(Yn, [{
      key: "hasAlphaChannel",
      value: function hasAlphaChannel(e) {
        return e.indexOf("image/png") !== -1;
      }
    }, {
      key: "getTextureData",
      value: function () {
        var _getTextureData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var _this$props, e, n, i, a, o;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _this$props = this.props, e = _this$props.src, n = _this$props.premultiplyAlpha;
                if (e) {
                  _context5.next = 3;
                  break;
                }
                return _context5.abrupt("return", {
                  data: null
                });
              case 3:
                if (!(e instanceof ImageData)) {
                  _context5.next = 5;
                  break;
                }
                return _context5.abrupt("return", {
                  data: e,
                  premultiplyAlpha: n
                });
              case 5:
                if (!Ax(e)) {
                  _context5.next = 7;
                  break;
                }
                return _context5.abrupt("return", Ex(e));
              case 7:
                if (!this.txManager.imageWorkerManager) {
                  _context5.next = 11;
                  break;
                }
                _context5.next = 10;
                return this.txManager.imageWorkerManager.getImage(e, n);
              case 10:
                return _context5.abrupt("return", _context5.sent);
              case 11:
                if (!this.txManager.hasCreateImageBitmap) {
                  _context5.next = 25;
                  break;
                }
                _context5.next = 14;
                return fetch(e);
              case 14:
                _context5.next = 16;
                return _context5.sent.blob();
              case 16:
                i = _context5.sent;
                a = n != null ? n : this.hasAlphaChannel(i.type);
                _context5.next = 20;
                return createImageBitmap(i, {
                  premultiplyAlpha: a ? "premultiply" : "none",
                  colorSpaceConversion: "none",
                  imageOrientation: "none"
                });
              case 20:
                _context5.t0 = _context5.sent;
                _context5.t1 = a;
                return _context5.abrupt("return", {
                  data: _context5.t0,
                  premultiplyAlpha: _context5.t1
                });
              case 25:
                o = new Image();
                e.substr(0, 5) !== "data:" && (o.crossOrigin = "Anonymous");
                o.src = e;
                _context5.next = 30;
                return new Promise(function (i, a) {
                  o.onload = function () {
                    return i();
                  }, o.onerror = function () {
                    return a(new Error("Failed to load image"));
                  };
                })["catch"](function (i) {
                  console.error(i);
                });
              case 30:
                return _context5.abrupt("return", {
                  data: o,
                  premultiplyAlpha: n != null ? n : !0
                });
              case 31:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
        function getTextureData() {
          return _getTextureData.apply(this, arguments);
        }
        return getTextureData;
      }()
    }], [{
      key: "makeCacheKey",
      value: function makeCacheKey(e) {
        var n = Yn.resolveDefaults(e);
        return n.src instanceof ImageData ? !1 : "ImageTexture,".concat(n.src, ",").concat(n.premultiplyAlpha);
      }
    }, {
      key: "resolveDefaults",
      value: function resolveDefaults(e) {
        var n, o;
        return {
          src: (n = e.src) != null ? n : "",
          premultiplyAlpha: (o = e.premultiplyAlpha) != null ? o : !0
        };
      }
    }]);
  }(wp);
b(Yn, "z$__type__Props");
var fl = Yn;
var Ox = 24;
function _x(r, t, e, n, o, i, a, s, l) {
  var c = Math.min(Math.max(a.firstLineIdx, 0), s.length),
    u = 0;
  var f = 0;
  n === "middle" ? f = (t - r) / 2 : n === "bottom" && (f = t - r);
  var p = o / i + c * t + f;
  if (!(l && p >= l / i)) return {
    sdfX: u,
    sdfY: p,
    lineIndex: c
  };
}
var kn = /*#__PURE__*/function () {
  function kn(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, kn);
    b(this, "iterator");
    b(this, "peekBuffer", []);
    b(this, "_lastIndex");
    this.iterator = t, this.iterator = t, this._lastIndex = e - 1, this.peekBuffer = [];
  }
  return _createClass(kn, [{
    key: "next",
    value: function next() {
      var t = this.peekBuffer.length > 0 ? this.peekBuffer.pop() : this.iterator.next();
      return t.done ? this._lastIndex = -1 : this._lastIndex++, t;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.peekBuffer.length > 0) return this.peekBuffer[0];
      var t = this.iterator.next();
      return this.peekBuffer.push(t), t;
    }
  }, {
    key: "lastIndex",
    get: function get() {
      return this._lastIndex;
    }
  }]);
}();
function Bn(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var e, n;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          e = t;
        case 1:
          if (!(e < r.length)) {
            _context6.next = 10;
            break;
          }
          n = r.codePointAt(e);
          if (!(n === void 0)) {
            _context6.next = 5;
            break;
          }
          throw new Error("Invalid Unicode code point");
        case 5:
          _context6.next = 7;
          return n;
        case 7:
          e += n <= 65535 ? 1 : 2;
        case 8:
          _context6.next = 1;
          break;
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })();
}
function Px(r, t, e) {
  var n = e.shapeText(t, new kn(Bn(r, 0), 0));
  var o = 0;
  var _iterator11 = _createForOfIteratorHelper(n),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var i = _step11.value;
      i.mapped && (o += i.xAdvance);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  return o;
}
function Nx(r, t, e, n, o, i, a, s, l, c, u, f, v, p, m, S, w, $, y) {
  k(m, "Font face must be loaded"), k(m.loaded, "Font face must be loaded"), k(m.data, "Font face must be loaded"), k(m.shaper, "Font face must be loaded");
  var d = s / m.data.info.size,
    h = l / d,
    g = i / d,
    T = c / d,
    I = v[r],
    C = (I == null ? void 0 : I.codepointIndex) || 0,
    A = (I == null ? void 0 : I.maxX) || 0,
    O = (I == null ? void 0 : I.maxY) || 0;
  var N = A,
    _ = O,
    F = t,
    L = e,
    D = 0;
  var j = {
      codepointIndex: -1,
      bufferOffset: -1,
      xStart: -1
    },
    G = m.shaper,
    pe = {
      letterSpacing: T
    };
  var ae = G.shapeText(pe, new kn(Bn(n, C), C)),
    Re,
    it = -1;
  var Ot = [],
    To = a / d,
    Io = Px($, pe, G);
  var Xt = !0;
  for (; Xt;) {
    var Ze = (y === 0 || r + 1 < y) && (f !== "both" || w || L + h + m.maxCharHeight <= To),
      Ke = Ze ? g : g - Io;
    var xe = 0;
    var _t = L + h >= p.y1,
      Pt = L <= p.y2,
      Ge = _t && Pt;
    for (; (Re = ae.next()) && !Re.done;) {
      var se = Re.value;
      if (r === v.length) v.push({
        codepointIndex: se.cluster,
        maxY: _,
        maxX: N
      });else if (r > v.length) throw new Error("Unexpected lineCache length");
      if (se.codepoint === 32 || se.codepoint === 10 ? j.codepointIndex !== -1 && (j.codepointIndex = -1, xe = F) : j.codepointIndex === -1 && (j.codepointIndex = se.cluster, j.bufferOffset = D, j.xStart = xe), se.mapped) {
        var Ao = F + se.xOffset + se.width;
        if (f !== "none" && Ao >= Ke && j.codepointIndex !== -1 && j.xStart > 0) {
          if (Ze) {
            ae = G.shapeText(pe, new kn(Bn(n, j.codepointIndex), j.codepointIndex)), D = j.bufferOffset;
            break;
          } else ae = G.shapeText(pe, new kn(Bn($, 0), 0)), F = j.xStart, D = j.bufferOffset, f = "none";
        } else {
          var Nt = F + se.xOffset,
            Lt = L + se.yOffset;
          if (Ge) {
            it === -1 && (it = D);
            var Qt = m.getAtlasEntry(se.glyphId),
              qt = Qt.x / m.data.common.scaleW,
              Jt = Qt.y / m.data.common.scaleH,
              mn = Qt.width / m.data.common.scaleW,
              yn = Qt.height / m.data.common.scaleH;
            u[D++] = Nt, u[D++] = Lt, u[D++] = qt, u[D++] = Jt, u[D++] = Nt + se.width, u[D++] = Lt, u[D++] = qt + mn, u[D++] = Jt, u[D++] = Nt, u[D++] = Lt + se.height, u[D++] = qt, u[D++] = Jt + yn, u[D++] = Nt + se.width, u[D++] = Lt + se.height, u[D++] = qt + mn, u[D++] = Jt + yn;
          }
          _ = Math.max(_, Lt + se.height), N = Math.max(N, Nt + se.width), F += se.xAdvance;
        }
      } else if (se.codepoint === 10) {
        if (Ze) break;
        ae = G.shapeText(pe, new kn(Bn($, 0), 0)), f = "none";
      }
    }
    it !== -1 && (Ot.push({
      bufferStart: it,
      bufferEnd: D
    }), it = -1), F = 0, L += h, r++, j.codepointIndex = -1, xe = 0, !S && f === "both" && L > p.y2 || Re && Re.done ? Xt = !1 : Ze || (Xt = !1);
  }
  if (o === "center") {
    var _Ze = f === "none" ? N : g;
    for (var _Ke = 0; _Ke < Ot.length; _Ke++) {
      var _xe = Ot[_Ke],
        _t2 = u[_xe.bufferEnd - 4] - u[_xe.bufferStart],
        _Pt = (_Ze - _t2) / 2;
      for (var _Ge = _xe.bufferStart; _Ge < _xe.bufferEnd; _Ge += 4) u[_Ge] += _Pt;
    }
  } else if (o === "right") {
    var _Ze2 = f === "none" ? N : g;
    for (var _Ke2 = 0; _Ke2 < Ot.length; _Ke2++) {
      var _xe2 = Ot[_Ke2],
        _t3 = _xe2.bufferEnd === _xe2.bufferStart ? 0 : u[_xe2.bufferEnd - 4] - u[_xe2.bufferStart],
        _Pt2 = _Ze2 - _t3;
      for (var _Ge2 = _xe2.bufferStart; _Ge2 < _xe2.bufferEnd; _Ge2 += 4) u[_Ge2] += _Pt2;
    }
  }
  return k(Re), {
    bufferNumFloats: D,
    bufferNumQuads: D / 16,
    layoutNumCharacters: Re.done ? n.length - C : Re.value.cluster - C + 1,
    fullyProcessed: !!Re.done,
    maxX: N,
    maxY: _
  };
}
function Lx(r, t) {
  return Math.ceil(r / t) * t;
}
function Fx(r, t) {
  return Math.floor(r / t) * t;
}
function kx(r, t, e, n, o, i, a, s) {
  var l = r.screen,
    c = r.sdf;
  if (!B0(a)) l.x1 = 0, l.y1 = 0, l.x2 = 0, l.y2 = 0, c.x1 = 0, c.y1 = 0, c.x2 = 0, c.y2 = 0, r.numLines = 0, r.firstLineIdx = 0;else {
    var u = a.x1 - t,
      f = u + (a.x2 - a.x1),
      v = a.y1 - e + n,
      p = Fx(v - i, o || 1),
      m = Lx(v + (a.y2 - a.y1) + i, o || 1);
    l.x1 = u, l.y1 = p, l.x2 = f, l.y2 = m, c.x1 = u / s, c.y1 = p / s, c.x2 = f / s, c.y2 = m / s, r.numLines = Math.ceil((m - p) / o), r.firstLineIdx = o ? Math.floor(p / o) : 0;
  }
  r.valid = !0;
}
var Bx = {
    normal: 400,
    bold: 700,
    bolder: 900,
    lighter: 100
  },
  Wu = function Wu(r) {
    return typeof r == "number" ? r : Bx[r] || 400;
  };
function Mx(r, t, e, n, o) {
  var i = Wu(e);
  var _iterator12 = _createForOfIteratorHelper(r),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var a = _step12.value;
      var s = a[t];
      if (!s) continue;
      if (s.size === 1) return console.warn("TrFontManager: Only one font face found for family: '".concat(t, "' - will be used for all weights and styles")), s.values().next().value;
      var l = new Map();
      var _iterator13 = _createForOfIteratorHelper(s),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var u = _step13.value;
          var f = Wu(u.descriptors.weight);
          if (f === i && u.descriptors.style === n && u.descriptors.stretch === o) return u;
          l.set(f, u);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      var c = "TrFontManager: No exact match: '".concat(t, " Weight: ").concat(i, " Style: ").concat(n, " Stretch: ").concat(o, "'");
      if (console.error(c), i === 400 && l.has(500)) return l.get(500);
      if (i === 500 && l.has(400)) return l.get(400);
      if (i < 400) {
        for (; i > 0;) {
          if (l.has(i)) return l.get(i);
          i -= 100;
        }
        i = 600;
      }
      for (; i < 1e3;) {
        if (l.has(i)) return l.get(i);
        i += 100;
      }
      for (i = 500; i > 0;) {
        if (l.has(i)) return l.get(i);
        i -= 100;
      }
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
}
var Dx = Kp(Mx);
var Xp = /*#__PURE__*/function () {
  function Xp(t) {
    _classCallCheck(this, Xp);
    b(this, "textRenderers");
    this.textRenderers = t;
  }
  return _createClass(Xp, [{
    key: "addFontFace",
    value: function addFontFace(t) {
      for (var e in this.textRenderers) {
        var n = this.textRenderers[e];
        n && n.isFontFaceSupported(t) && n.addFontFace(t);
      }
    }
  }], [{
    key: "resolveFontFace",
    value: function resolveFontFace(t, e) {
      var n = e.fontFamily,
        o = e.fontWeight,
        i = e.fontStyle,
        a = e.fontStretch;
      return Dx(t, n, o, i, a);
    }
  }]);
}();
var jx = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var Ux = /*#__PURE__*/function (_Wp2) {
  function Ux(e) {
    var _this31;
    _classCallCheck(this, Ux);
    _this31 = _callSuper(this, Ux, [e]);
    b(_this31, "ssdfFontFamilies", {});
    b(_this31, "msdfFontFamilies", {});
    b(_this31, "fontFamilyArray", [_this31.ssdfFontFamilies, _this31.msdfFontFamilies]);
    b(_this31, "sdfShader");
    b(_this31, "rendererBounds");
    _this31.sdfShader = _this31.stage.shManager.loadShader("SdfShader").shader, _this31.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this31.stage.options.appWidth,
      y2: _this31.stage.options.appHeight
    };
    return _this31;
  }
  _inherits(Ux, _Wp2);
  return _createClass(Ux, [{
    key: "getPropertySetters",
    value: function getPropertySetters() {
      var _this32 = this;
      return {
        fontFamily: function fontFamily(e, n) {
          e.props.fontFamily = n, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
        },
        fontWeight: function fontWeight(e, n) {
          e.props.fontWeight = n, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
        },
        fontStyle: function fontStyle(e, n) {
          e.props.fontStyle = n, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
        },
        fontStretch: function fontStretch(e, n) {
          e.props.fontStretch = n, _this32.releaseFontFace(e), _this32.invalidateLayoutCache(e);
        },
        fontSize: function fontSize(e, n) {
          e.props.fontSize = n, _this32.invalidateLayoutCache(e);
        },
        text: function text(e, n) {
          e.props.text = n, _this32.invalidateLayoutCache(e);
        },
        textAlign: function textAlign(e, n) {
          e.props.textAlign = n, _this32.invalidateLayoutCache(e);
        },
        color: function color(e, n) {
          e.props.color = n;
        },
        x: function x(e, n) {
          e.props.x = n, e.elementBounds.valid && (_this32.setElementBoundsX(e), !e.renderWindow.valid && ka(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
        },
        y: function y(e, n) {
          e.props.y = n, e.elementBounds.valid && (_this32.setElementBoundsY(e), !e.renderWindow.valid && ka(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
        },
        contain: function contain(e, n) {
          e.props.contain = n, _this32.invalidateLayoutCache(e);
        },
        width: function width(e, n) {
          e.props.width = n, e.props.contain !== "none" && _this32.invalidateLayoutCache(e);
        },
        height: function height(e, n) {
          e.props.height = n, e.props.contain === "both" && _this32.invalidateLayoutCache(e);
        },
        offsetY: function offsetY(e, n) {
          e.props.offsetY = n, _this32.invalidateLayoutCache(e);
        },
        scrollable: function scrollable(e, n) {
          e.props.scrollable = n, _this32.invalidateLayoutCache(e);
        },
        scrollY: function scrollY(e, n) {
          e.props.scrollY = n, _this32.scheduleUpdateState(e);
        },
        letterSpacing: function letterSpacing(e, n) {
          e.props.letterSpacing = n, _this32.invalidateLayoutCache(e);
        },
        lineHeight: function lineHeight(e, n) {
          e.props.lineHeight = n, _this32.invalidateLayoutCache(e);
        },
        maxLines: function maxLines(e, n) {
          e.props.maxLines = n, _this32.invalidateLayoutCache(e);
        },
        textBaseline: function textBaseline(e, n) {
          e.props.textBaseline = n, _this32.invalidateLayoutCache(e);
        },
        verticalAlign: function verticalAlign(e, n) {
          e.props.verticalAlign = n, _this32.invalidateLayoutCache(e);
        },
        overflowSuffix: function overflowSuffix(e, n) {
          e.props.overflowSuffix = n, _this32.invalidateLayoutCache(e);
        },
        debug: function debug(e, n) {
          e.props.debug = n;
        }
      };
    }
  }, {
    key: "canRenderFont",
    value: function canRenderFont(e) {
      var n = e.fontFamily;
      return n in this.ssdfFontFamilies || n in this.msdfFontFamilies || n === "$$SDF_FAILURE_TEST$$";
    }
  }, {
    key: "isFontFaceSupported",
    value: function isFontFaceSupported(e) {
      return e instanceof Nu;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      k(e instanceof Nu);
      var n = e.fontFamily,
        o = e.type === "ssdf" ? this.ssdfFontFamilies : e.type === "msdf" ? this.msdfFontFamilies : void 0;
      if (!o) {
        console.warn("Invalid font face type: ".concat(e.type));
        return;
      }
      var i = o[n];
      i || (i = new Set(), o[n] = i), i.add(e);
    }
  }, {
    key: "createState",
    value: function createState(e) {
      return {
        props: e,
        status: "initialState",
        updateScheduled: !1,
        emitter: new fr(),
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
      var n = e.trFontFace;
      var o = e.textH,
        i = e.lineCache,
        a = e.debugData,
        s = e.forceFullLayoutCalc;
      if (a.updateCount++, e.status === "initialState" && this.setStatus(e, "loading"), !n) {
        if (n = this.resolveFontFace(e.props), e.trFontFace = n, !n) {
          var G = "SdfTextRenderer: Could not resolve font face for family: '".concat(e.props.fontFamily, "'");
          console.error(G), this.setStatus(e, "failed", new Error(G));
          return;
        }
        n.texture.setRenderableOwner(e, e.isRenderable);
      }
      if (!n.loaded) {
        n.once("loaded", function () {
          _this33.scheduleUpdateState(e);
        });
        return;
      }
      k(n.data, "Font face data should be loaded");
      var _e$props4 = e.props,
        l = _e$props4.text,
        c = _e$props4.fontSize,
        u = _e$props4.x,
        f = _e$props4.y,
        v = _e$props4.contain,
        p = _e$props4.width,
        m = _e$props4.height,
        S = _e$props4.lineHeight,
        w = _e$props4.verticalAlign,
        $ = _e$props4.scrollable,
        y = _e$props4.overflowSuffix,
        d = _e$props4.maxLines,
        h = v === "both" && $ ? e.props.scrollY : 0,
        g = e.renderWindow,
        T = n.data.info.size,
        I = c / T,
        C = S / I;
      e.distanceRange = I * n.data.distanceField.distanceRange;
      var A = l.length * Ox;
      var O = e.vertexBuffer;
      (!O || O.length < A) && (O = new Float32Array(A * 2));
      var N = e.elementBounds;
      if (N.valid || (this.setElementBoundsX(e), this.setElementBoundsY(e), N.valid = !0), !s && g.valid) {
        var _G = g.screen;
        if (u + _G.x1 <= N.x1 && u + _G.x2 >= N.x2 && f - h + _G.y1 <= N.y1 && f - h + _G.y2 >= N.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        g.valid = !1, this.setStatus(e, "loading");
      }
      var _e$props5 = e.props,
        _ = _e$props5.offsetY,
        F = _e$props5.textAlign;
      if (!g.valid) {
        if (!ka(N, this.rendererBounds)) return;
        kx(g, u, f, h, S, v === "both" ? N.y2 - N.y1 : 0, N, I);
      }
      var L = _x(T, C, S, w, _, I, g, i, o);
      if (!L) {
        this.setStatus(e, "loaded");
        return;
      }
      var D = e.props.letterSpacing,
        j = Nx(L.lineIndex, L.sdfX, L.sdfY, l, F, p, m, c, S, D, O, v, i, g.sdf, n, s, $, y, d);
      e.bufferUploaded = !1, e.bufferNumFloats = j.bufferNumFloats, e.bufferNumQuads = j.bufferNumQuads, e.vertexBuffer = O, e.renderWindow = g, a.lastLayoutNumCharacters = j.layoutNumCharacters, a.bufferSize = O.byteLength, j.fullyProcessed && (e.textW = j.maxX * I, e.textH = j.maxY * I), this.setStatus(e, "loaded");
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e, n, o, i, a, s) {
      var N, _, F;
      if (!e.vertexBuffer) return;
      var l = this.stage.renderer;
      k(l instanceof Tp);
      var _e$props6 = e.props,
        c = _e$props6.fontSize,
        u = _e$props6.color,
        f = _e$props6.contain,
        v = _e$props6.scrollable,
        p = _e$props6.zIndex,
        m = _e$props6.debug,
        S = f === "both" && v ? e.props.scrollY : 0,
        _e$textW2 = e.textW,
        w = _e$textW2 === void 0 ? 0 : _e$textW2,
        _e$textH2 = e.textH,
        $ = _e$textH2 === void 0 ? 0 : _e$textH2,
        y = e.distanceRange,
        d = e.vertexBuffer,
        h = e.bufferUploaded,
        g = e.trFontFace,
        T = e.elementBounds;
      var I = e.webGlBuffers;
      if (!I) {
        var L = l.glw,
          D = 4 * Float32Array.BYTES_PER_ELEMENT,
          j = L.createBuffer();
        k(j), e.webGlBuffers = new M0([{
          buffer: j,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: L.FLOAT,
              normalized: !1,
              stride: D,
              offset: 0
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: L.FLOAT,
              normalized: !1,
              stride: D,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }]), e.bufferUploaded = !1, k(e.webGlBuffers), I = e.webGlBuffers;
      }
      if (!h) {
        var _L2 = l.glw,
          _D2 = (N = I == null ? void 0 : I.getBuffer("a_textureCoordinate")) != null ? N : null;
        _L2.arrayBufferData(_D2, d, _L2.STATIC_DRAW), e.bufferUploaded = !0;
      }
      if (k(g), v && f === "both") {
        k(T.valid);
        var _L3 = D0(T, jx);
        o.valid ? (e.clippingRect.valid = !0, o = fc(o, _L3, e.clippingRect)) : (e.clippingRect.valid = !0, o = Ip(_L3, e.clippingRect));
      }
      var C = new j0(l.glw, l.options, I, this.sdfShader, {
          transform: n.data,
          color: U0(u, i),
          size: c / (((_ = g.data) == null ? void 0 : _.info.size) || 0),
          scrollY: S,
          distanceRange: y,
          debug: m.sdfShaderDebug
        }, i, o, {
          height: $,
          width: w
        }, 0, p, !1, a, s),
        A = (F = e.trFontFace) == null ? void 0 : F.texture;
      k(A);
      var O = this.stage.txManager.getCtxTexture(A);
      C.addTexture(O), C.length = e.bufferNumFloats, C.numQuads = e.bufferNumQuads, l.addRenderOp(C);
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(e, n) {
      var o;
      _superPropGet(Ux, "setIsRenderable", this, 3)([e, n]), (o = e.trFontFace) == null || o.texture.setRenderableOwner(e, n);
    }
  }, {
    key: "destroyState",
    value: function destroyState(e) {
      var n;
      _superPropGet(Ux, "destroyState", this, 3)([e]), (n = e.trFontFace) == null || n.texture.setRenderableOwner(e, !1);
    }
  }, {
    key: "resolveFontFace",
    value: function resolveFontFace(e) {
      return Xp.resolveFontFace(this.fontFamilyArray, e);
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
      var _e$props7 = e.props,
        n = _e$props7.x,
        o = _e$props7.contain,
        i = _e$props7.width,
        a = e.elementBounds;
      a.x1 = n, a.x2 = o !== "none" ? n + i : 1 / 0;
    }
  }, {
    key: "setElementBoundsY",
    value: function setElementBoundsY(e) {
      var _e$props8 = e.props,
        n = _e$props8.y,
        o = _e$props8.contain,
        i = _e$props8.height,
        a = e.elementBounds;
      a.y1 = n, a.y2 = o === "both" ? n + i : 1 / 0;
    }
  }]);
}(Wp);
function zx(r) {
  return r.prototype instanceof z0;
}
function Wx(_x5, _x6) {
  return _Wx.apply(this, arguments);
}
function _Wx() {
  _Wx = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(r, t) {
    var e, n, o;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          console.log("Loading core extension", r);
          _context15.next = 4;
          return _e(function () {
            return import(r);
          }, [], import.meta.url);
        case 4:
          e = _context15.sent;
          _context15.next = 11;
          break;
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          console.error("The core extension module at '".concat(r, "' could not be loaded.")), console.error(_context15.t0);
          return _context15.abrupt("return");
        case 11:
          if (e["default"]) {
            _context15.next = 14;
            break;
          }
          console.error("The core extension module at '".concat(r, "' does not have a default export."));
          return _context15.abrupt("return");
        case 14:
          n = e["default"];
          if (!zx(n)) {
            _context15.next = 27;
            break;
          }
          o = new n();
          _context15.prev = 17;
          _context15.next = 20;
          return o.run(t);
        case 20:
          _context15.next = 25;
          break;
        case 22:
          _context15.prev = 22;
          _context15.t1 = _context15["catch"](17);
          console.error("The core extension at '".concat(r, "' threw an error.")), console.error(_context15.t1);
        case 25:
          _context15.next = 28;
          break;
        case 27:
          console.error("The core extension at '".concat(r, "' does not extend CoreExtension."));
        case 28:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7], [17, 22]]);
  }));
  return _Wx.apply(this, arguments);
}
function Qp(r) {
  var t = {
      "boolean": !0,
      string: !0,
      number: !0,
      undefined: !0
    },
    e = Object.keys(r);
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    if (!o) continue;
    var i = r[o],
      a = _typeof(i);
    a === "string" && i.length > 2048 && (console.warn("Custom Data value for ".concat(o, " is too long, it will be truncated to 2048 characters")), r[o] = i.substring(0, 2048)), t[a] || (console.warn("Custom Data value for ".concat(o, " is not a boolean, string, or number, it will be ignored")), delete r[o]);
  }
  return r;
}
var Hx = /*#__PURE__*/function (_fr) {
  function Hx(e, n, o) {
    var _this34;
    _classCallCheck(this, Hx);
    var $, y, d, h, g;
    _this34 = _callSuper(this, Hx);
    b(_this34, "root", null);
    b(_this34, "driver");
    b(_this34, "canvas");
    b(_this34, "settings");
    b(_this34, "inspector", null);
    b(_this34, "nodes", new Map());
    b(_this34, "nextTextureId", 1);
    b(_this34, "textureTracker");
    var i = {
      appWidth: e.appWidth || 1920,
      appHeight: e.appHeight || 1080,
      txMemByteThreshold: e.txMemByteThreshold || 124e6,
      boundsMargin: e.boundsMargin || 0,
      deviceLogicalPixelRatio: e.deviceLogicalPixelRatio || 1,
      devicePhysicalPixelRatio: e.devicePhysicalPixelRatio || window.devicePixelRatio,
      clearColor: ($ = e.clearColor) != null ? $ : 0,
      coreExtensionModule: e.coreExtensionModule || null,
      experimental_FinalizationRegistryTextureUsageTracker: (y = e.experimental_FinalizationRegistryTextureUsageTracker) != null ? y : !1,
      textureCleanupOptions: e.textureCleanupOptions || {},
      fpsUpdateInterval: e.fpsUpdateInterval || 0,
      numImageWorkers: e.numImageWorkers !== void 0 ? e.numImageWorkers : 2,
      enableContextSpy: (d = e.enableContextSpy) != null ? d : !1,
      enableInspector: (h = e.enableInspector) != null ? h : !1,
      renderMode: (g = e.renderMode) != null ? g : "webgl"
    };
    _this34.settings = i;
    var a = i.appWidth,
      s = i.appHeight,
      l = i.deviceLogicalPixelRatio,
      c = i.devicePhysicalPixelRatio,
      u = i.enableInspector,
      f = function f(T) {
        _this34.driver.releaseTexture(T);
      },
      v = i.experimental_FinalizationRegistryTextureUsageTracker && typeof FinalizationRegistry == "function";
    _this34.textureTracker = v ? new gx(f) : new px(f, _this34.settings.textureCleanupOptions);
    var p = a * l,
      m = s * l;
    _this34.driver = o;
    var S = document.createElement("canvas");
    _this34.canvas = S, S.width = p * c, S.height = m * c, S.style.width = "".concat(p, "px"), S.style.height = "".concat(m, "px");
    var w;
    if (typeof n == "string" ? w = document.getElementById(n) : w = n, !w) throw new Error("Could not find target element");
    o.onCreateNode = function (T) {
      _this34.nodes.set(T.id, T);
    }, o.onBeforeDestroyNode = function (T) {
      _this34.nodes["delete"](T.id);
    }, o.onFpsUpdate = function (T) {
      _this34.emit("fpsUpdate", T);
    }, o.onFrameTick = function (T) {
      _this34.emit("frameTick", T);
    }, o.onIdle = function () {
      _this34.emit("idle");
    }, w.appendChild(S), u && !Sp() && (_this34.inspector = new yx(S, i));
    return _this34;
  }
  _inherits(Hx, _fr);
  return _createClass(Hx, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.driver.init(this, this.settings, this.canvas);
            case 2:
              this.root = this.driver.getRootNode();
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "createNode",
    value: function createNode(e) {
      return this.inspector ? this.inspector.createNode(this.driver, this.resolveNodeDefaults(e)) : this.driver.createNode(this.resolveNodeDefaults(e));
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(e) {
      var i, a, s, l, c, u, f, v, p, m, S, w, $, y, d, h, g, T, I;
      var n = (i = e.fontSize) != null ? i : 16,
        o = _objectSpread(_objectSpread({}, this.resolveNodeDefaults(e)), {}, {
          text: (a = e.text) != null ? a : "",
          textRendererOverride: (s = e.textRendererOverride) != null ? s : null,
          fontSize: n,
          fontFamily: (l = e.fontFamily) != null ? l : "sans-serif",
          fontStyle: (c = e.fontStyle) != null ? c : "normal",
          fontWeight: (u = e.fontWeight) != null ? u : "normal",
          fontStretch: (f = e.fontStretch) != null ? f : "normal",
          textAlign: (v = e.textAlign) != null ? v : "left",
          contain: (p = e.contain) != null ? p : "none",
          scrollable: (m = e.scrollable) != null ? m : !1,
          scrollY: (S = e.scrollY) != null ? S : 0,
          offsetY: (w = e.offsetY) != null ? w : 0,
          letterSpacing: ($ = e.letterSpacing) != null ? $ : 0,
          lineHeight: (y = e.lineHeight) != null ? y : n,
          maxLines: (d = e.maxLines) != null ? d : 0,
          textBaseline: (h = e.textBaseline) != null ? h : "alphabetic",
          verticalAlign: (g = e.verticalAlign) != null ? g : "top",
          overflowSuffix: (T = e.overflowSuffix) != null ? T : "...",
          debug: (I = e.debug) != null ? I : {}
        });
      return this.inspector ? this.inspector.createTextNode(this.driver, o) : this.driver.createTextNode(o);
    }
  }, {
    key: "resolveNodeDefaults",
    value: function resolveNodeDefaults(e) {
      var c, u, f, v, p, m, S, w, $, y, d, h, g, T, I, C, A, O, N, _, F, L, D, j, G, pe, ae, Re, it, Ot, To, Io, Xt, Ze, Ke, xe, _t, Pt, Ge, se, Ao, Nt, Lt, Qt, qt, Jt, mn, yn;
      var n = (c = e.color) != null ? c : 4294967295,
        o = (v = (f = (u = e.colorTl) != null ? u : e.colorTop) != null ? f : e.colorLeft) != null ? v : n,
        i = (S = (m = (p = e.colorTr) != null ? p : e.colorTop) != null ? m : e.colorRight) != null ? S : n,
        a = (y = ($ = (w = e.colorBl) != null ? w : e.colorBottom) != null ? $ : e.colorLeft) != null ? y : n,
        s = (g = (h = (d = e.colorBr) != null ? d : e.colorBottom) != null ? h : e.colorRight) != null ? g : n,
        l = Qp((T = e.data) != null ? T : {});
      return {
        x: (I = e.x) != null ? I : 0,
        y: (C = e.y) != null ? C : 0,
        width: (A = e.width) != null ? A : 0,
        height: (O = e.height) != null ? O : 0,
        alpha: (N = e.alpha) != null ? N : 1,
        autosize: (_ = e.autosize) != null ? _ : !1,
        clipping: (F = e.clipping) != null ? F : !1,
        color: n,
        colorTop: (L = e.colorTop) != null ? L : n,
        colorBottom: (D = e.colorBottom) != null ? D : n,
        colorLeft: (j = e.colorLeft) != null ? j : n,
        colorRight: (G = e.colorRight) != null ? G : n,
        colorBl: a,
        colorBr: s,
        colorTl: o,
        colorTr: i,
        zIndex: (pe = e.zIndex) != null ? pe : 0,
        zIndexLocked: (ae = e.zIndexLocked) != null ? ae : 0,
        parent: (Re = e.parent) != null ? Re : null,
        texture: (it = e.texture) != null ? it : null,
        shader: (Ot = e.shader) != null ? Ot : null,
        src: (To = e.src) != null ? To : "",
        scale: (Io = e.scale) != null ? Io : null,
        scaleX: (Ze = (Xt = e.scaleX) != null ? Xt : e.scale) != null ? Ze : 1,
        scaleY: (xe = (Ke = e.scaleY) != null ? Ke : e.scale) != null ? xe : 1,
        mount: (_t = e.mount) != null ? _t : 0,
        mountX: (Ge = (Pt = e.mountX) != null ? Pt : e.mount) != null ? Ge : 0,
        mountY: (Ao = (se = e.mountY) != null ? se : e.mount) != null ? Ao : 0,
        pivot: (Nt = e.pivot) != null ? Nt : .5,
        pivotX: (Qt = (Lt = e.pivotX) != null ? Lt : e.pivot) != null ? Qt : .5,
        pivotY: (Jt = (qt = e.pivotY) != null ? qt : e.pivot) != null ? Jt : .5,
        rotation: (mn = e.rotation) != null ? mn : 0,
        rtt: (yn = e.rtt) != null ? yn : !1,
        data: l
      };
    }
  }, {
    key: "destroyNode",
    value: function destroyNode(e) {
      return this.inspector && this.inspector.destroyNode(e), this.driver.destroyNode(e);
    }
  }, {
    key: "createTexture",
    value: function createTexture(e, n, o) {
      var i = this.nextTextureId++,
        a = {
          descType: "texture",
          txType: e,
          props: n,
          options: _objectSpread(_objectSpread({}, o), {}, {
            id: i
          })
        };
      return this.textureTracker.registerTexture(a), a;
    }
  }, {
    key: "createShader",
    value: function createShader(e, n) {
      return {
        descType: "shader",
        shType: e,
        props: n
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
}(fr);
var Yx = /*#__PURE__*/function (_fr2) {
  function Yx(e, n, o) {
    var _this35;
    _classCallCheck(this, Yx);
    _this35 = _callSuper(this, Yx);
    b(_this35, "node");
    b(_this35, "props");
    b(_this35, "settings");
    b(_this35, "propStartValues", {});
    b(_this35, "restoreValues", {});
    b(_this35, "progress", 0);
    b(_this35, "delayFor", 0);
    b(_this35, "timingFunction");
    b(_this35, "propsList");
    _this35.node = e, _this35.props = n, _this35.settings = o, _this35.propStartValues = {}, _this35.propsList = Object.keys(n), _this35.propsList.forEach(function (i) {
      _this35.propStartValues[i] = e[i];
    }), _this35.timingFunction = function (i) {
      return i;
    }, o.easing && typeof o.easing == "string" && (_this35.timingFunction = W0(o.easing)), _this35.delayFor = o.delay || 0;
    return _this35;
  }
  _inherits(Yx, _fr2);
  return _createClass(Yx, [{
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
        var n = _this37.props[e],
          o = _this37.propStartValues[e];
        _this37.props[e] = o, _this37.propStartValues[e] = n;
      }), this.settings.loop || (this.settings.stopMethod = !1);
    }
  }, {
    key: "applyEasing",
    value: function applyEasing(e, n, o) {
      return (this.timingFunction(e) || e) * (o - n) + n;
    }
  }, {
    key: "update",
    value: function update(e) {
      var _this$settings = this.settings,
        n = _this$settings.duration,
        o = _this$settings.loop,
        i = _this$settings.easing,
        a = _this$settings.stopMethod;
      if (!n) {
        this.emit("finished", {});
        return;
      }
      if (this.delayFor > 0) {
        this.delayFor -= e;
        return;
      }
      if (this.delayFor <= 0 && this.progress === 0 && this.emit("start", {}), this.progress += e / n, this.progress > 1 && (this.progress = o ? 0 : 1, a)) {
        this.emit("finished", {});
        return;
      }
      for (var s = 0; s < this.propsList.length; s++) {
        var l = this.propsList[s],
          c = this.props[l],
          u = this.propStartValues[l],
          f = c;
        if (l.indexOf("color") !== -1) {
          if (u === f) {
            this.node[l] = u;
            continue;
          }
          if (i) {
            var v = this.timingFunction(this.progress) || this.progress,
              p = Lu(u, f, v);
            this.node[l] = p;
            continue;
          }
          this.node[l] = Lu(u, f, this.progress);
          continue;
        }
        if (i) {
          this.node[l] = this.applyEasing(this.progress, u, f);
          continue;
        }
        this.node[l] = u + (f - u) * this.progress;
      }
      this.progress === 1 && this.emit("finished", {});
    }
  }]);
}(fr);
var Kx = /*#__PURE__*/function () {
  function Kx(t, e) {
    _classCallCheck(this, Kx);
    b(this, "manager");
    b(this, "animation");
    b(this, "startedPromise", null);
    b(this, "startedResolve", null);
    b(this, "stoppedPromise", null);
    b(this, "stoppedResolve", null);
    b(this, "state");
    this.manager = t, this.animation = e, this.state = "stopped";
  }
  return _createClass(Kx, [{
    key: "start",
    value: function start() {
      return this.makeStartedPromise(), this.animation.once("start", this.started.bind(this)), this.makeStoppedPromise(), this.animation.once("finished", this.finished.bind(this)), this.manager.activeAnimations.has(this.animation) || this.manager.registerAnimation(this.animation), this.state = "running", this;
    }
  }, {
    key: "stop",
    value: function stop() {
      return this.manager.unregisterAnimation(this.animation), this.stoppedResolve !== null && (this.stoppedResolve(), this.stoppedResolve = null), this.animation.reset(), this.state = "stopped", this;
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
      var t = this.startedPromise;
      return k(t), t;
    }
  }, {
    key: "waitUntilStopped",
    value: function waitUntilStopped() {
      this.makeStoppedPromise();
      var t = this.stoppedPromise;
      return k(t), t;
    }
  }, {
    key: "makeStartedPromise",
    value: function makeStartedPromise() {
      var _this38 = this;
      this.startedResolve === null && (this.startedPromise = new Promise(function (t) {
        _this38.startedResolve = t;
      }));
    }
  }, {
    key: "makeStoppedPromise",
    value: function makeStoppedPromise() {
      var _this39 = this;
      this.stoppedResolve === null && (this.stoppedPromise = new Promise(function (t) {
        _this39.stoppedResolve = t;
      }));
    }
  }, {
    key: "started",
    value: function started() {
      k(this.startedResolve), this.startedResolve(this), this.startedResolve = null;
    }
  }, {
    key: "finished",
    value: function finished() {
      k(this.stoppedResolve);
      var _this$animation$setti = this.animation.settings,
        t = _this$animation$setti.loop,
        e = _this$animation$setti.stopMethod;
      if (e === "reverse") {
        this.animation.reverse(), this.start();
        return;
      }
      this.stoppedResolve(), this.stoppedResolve = null, !t && this.manager.unregisterAnimation(this.animation);
    }
  }]);
}();
var ue = 0,
  fe = 3,
  Ee = 6,
  le = 1,
  de = 4,
  Oe = 7,
  Ve = 2,
  Xe = 5,
  Qe = 8;
var Ne = /*#__PURE__*/function () {
  function Ne(t) {
    _classCallCheck(this, Ne);
    b(this, "data");
    t ? (this.data = new Float32Array(9), this.data[ue] = t[0], this.data[fe] = t[3], this.data[Ee] = t[6], this.data[le] = t[1], this.data[de] = t[4], this.data[Oe] = t[7], this.data[Ve] = t[2], this.data[Xe] = t[5], this.data[Qe] = t[8]) : this.data = new Float32Array(9);
  }
  return _createClass(Ne, [{
    key: "translate",
    value: function translate(t, e) {
      return this.data[Ee] = this.data[ue] * t + this.data[fe] * e + this.data[Ee], this.data[Oe] = this.data[le] * t + this.data[de] * e + this.data[Oe], this;
    }
  }, {
    key: "scale",
    value: function scale(t, e) {
      return this.data[ue] = this.data[ue] * t, this.data[fe] = this.data[fe] * e, this.data[le] = this.data[le] * t, this.data[de] = this.data[de] * e, this;
    }
  }, {
    key: "rotate",
    value: function rotate(t) {
      if (t === 0 || !(t % Math.PI * 2)) return this;
      var e = Math.cos(t),
        n = Math.sin(t),
        o = this.data[ue] * e + this.data[fe] * n,
        i = this.data[fe] * e - this.data[ue] * n,
        a = this.data[le] * e + this.data[de] * n,
        s = this.data[de] * e - this.data[le] * n;
      return this.data[ue] = o, this.data[fe] = i, this.data[le] = a, this.data[de] = s, this;
    }
  }, {
    key: "multiply",
    value: function multiply(t) {
      return Ne.multiply(this, t, this);
    }
  }, {
    key: "tx",
    get: function get() {
      return this.data[Ee];
    }
  }, {
    key: "ty",
    get: function get() {
      return this.data[Oe];
    }
  }, {
    key: "ta",
    get: function get() {
      return this.data[ue];
    }
  }, {
    key: "tb",
    get: function get() {
      return this.data[fe];
    }
  }, {
    key: "tc",
    get: function get() {
      return this.data[le];
    }
  }, {
    key: "td",
    get: function get() {
      return this.data[de];
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(t, e) {
      return [this.data[ue] * t + this.data[fe] * e + this.data[Ee], this.data[le] * t + this.data[de] * e + this.data[le]];
    }
  }], [{
    key: "temp",
    get: function get() {
      return Gx;
    }
  }, {
    key: "multiply",
    value: function multiply(t, e, n) {
      var o = t.data[ue] * e.data[ue] + t.data[fe] * e.data[le] + t.data[Ee] * e.data[Ve],
        i = t.data[ue] * e.data[fe] + t.data[fe] * e.data[de] + t.data[Ee] * e.data[Xe],
        a = t.data[ue] * e.data[Ee] + t.data[fe] * e.data[Oe] + t.data[Ee] * e.data[Qe],
        s = t.data[le] * e.data[ue] + t.data[de] * e.data[le] + t.data[Oe] * e.data[Ve],
        l = t.data[le] * e.data[fe] + t.data[de] * e.data[de] + t.data[Oe] * e.data[Xe],
        c = t.data[le] * e.data[Ee] + t.data[de] * e.data[Oe] + t.data[Oe] * e.data[Qe],
        u = t.data[Ve] * e.data[ue] + t.data[Xe] * e.data[le] + t.data[Qe] * e.data[Ve],
        f = t.data[Ve] * e.data[fe] + t.data[Xe] * e.data[de] + t.data[Qe] * e.data[Xe],
        v = t.data[Ve] * e.data[Ee] + t.data[Xe] * e.data[Oe] + t.data[Qe] * e.data[Qe];
      return n || (n = new Ne()), n.data[ue] = o, n.data[fe] = i, n.data[Ee] = a, n.data[le] = s, n.data[de] = l, n.data[Oe] = c, n.data[Ve] = u, n.data[Xe] = f, n.data[Qe] = v, n;
    }
  }, {
    key: "identity",
    value: function identity(t) {
      return t || (t = new Ne()), t.data[ue] = 1, t.data[fe] = 0, t.data[Ee] = 0, t.data[le] = 0, t.data[de] = 1, t.data[Oe] = 0, t.data[Ve] = 0, t.data[Xe] = 0, t.data[Qe] = 1, t;
    }
  }, {
    key: "translate",
    value: function translate(t, e, n) {
      return n || (n = new Ne()), n.data[ue] = 1, n.data[fe] = 0, n.data[Ee] = t, n.data[le] = 0, n.data[de] = 1, n.data[Oe] = e, n.data[Ve] = 0, n.data[Xe] = 0, n.data[Qe] = 1, n;
    }
  }, {
    key: "scale",
    value: function scale(t, e, n) {
      return n || (n = new Ne()), n.data[ue] = t, n.data[fe] = 0, n.data[Ee] = 0, n.data[le] = 0, n.data[de] = e, n.data[Oe] = 0, n.data[Ve] = 0, n.data[Xe] = 0, n.data[Qe] = 1, n;
    }
  }, {
    key: "rotate",
    value: function rotate(t, e) {
      var n = Math.cos(t),
        o = Math.sin(t);
      return e || (e = new Ne()), e.data[ue] = n, e.data[fe] = -o, e.data[Ee] = 0, e.data[le] = o, e.data[de] = n, e.data[Oe] = 0, e.data[Ve] = 0, e.data[Xe] = 0, e.data[Qe] = 1, e;
    }
  }, {
    key: "copy",
    value: function copy(t, e, n) {
      return e || (e = new Ne()), e.data[0] = t.data[0], e.data[1] = t.data[1], e.data[2] = t.data[2], e.data[3] = t.data[3], e.data[4] = t.data[4], e.data[5] = t.data[5], e.data[6] = t.data[6], e.data[7] = t.data[7], e.data[8] = t.data[8], e;
    }
  }]);
}();
var Gx = new Ne(),
  Co = 0,
  Ro = 2,
  Oo = 4,
  _o = 6,
  Po = 1,
  No = 3,
  Lo = 5,
  Fo = 7;
var Ri = /*#__PURE__*/function () {
  function Ri(t) {
    _classCallCheck(this, Ri);
    b(this, "data");
    this.data = new Float32Array(8), t && (this.data[Co] = t[Co], this.data[Ro] = t[Ro], this.data[Oo] = t[Oo], this.data[_o] = t[_o], this.data[Po] = t[Po], this.data[No] = t[No], this.data[Lo] = t[Lo], this.data[Fo] = t[Fo]);
  }
  return _createClass(Ri, [{
    key: "x1",
    get: function get() {
      return this.data[Co];
    }
  }, {
    key: "x2",
    get: function get() {
      return this.data[Ro];
    }
  }, {
    key: "x3",
    get: function get() {
      return this.data[Oo];
    }
  }, {
    key: "x4",
    get: function get() {
      return this.data[_o];
    }
  }, {
    key: "y1",
    get: function get() {
      return this.data[Po];
    }
  }, {
    key: "y2",
    get: function get() {
      return this.data[No];
    }
  }, {
    key: "y3",
    get: function get() {
      return this.data[Lo];
    }
  }, {
    key: "y4",
    get: function get() {
      return this.data[Fo];
    }
  }], [{
    key: "translate",
    value: function translate(t, e, n, o, i, a, s, l, c) {
      return c || (c = new Ri()), c.data[Co] = t, c.data[Ro] = n, c.data[Oo] = i, c.data[_o] = s, c.data[Po] = e, c.data[No] = o, c.data[Lo] = a, c.data[Fo] = l, c;
    }
  }]);
}();
var ce;
(function (r) {
  r[r.Init = 0] = "Init", r[r.OutOfBounds = 2] = "OutOfBounds", r[r.InBounds = 4] = "InBounds", r[r.InViewport = 8] = "InViewport";
})(ce || (ce = {}));
var ar = new Map();
ar.set(ce.Init, "init");
ar.set(ce.OutOfBounds, "outOfBounds");
ar.set(ce.InBounds, "inBounds");
ar.set(ce.InViewport, "inViewport");
var P;
(function (r) {
  r[r.Children = 1] = "Children", r[r.ScaleRotate = 2] = "ScaleRotate", r[r.Local = 4] = "Local", r[r.Global = 8] = "Global", r[r.Clipping = 16] = "Clipping", r[r.CalculatedZIndex = 32] = "CalculatedZIndex", r[r.ZIndexSortedChildren = 64] = "ZIndexSortedChildren", r[r.PremultipliedColors = 128] = "PremultipliedColors", r[r.WorldAlpha = 256] = "WorldAlpha", r[r.RenderState = 512] = "RenderState", r[r.IsRenderable = 1024] = "IsRenderable", r[r.RenderTexture = 2048] = "RenderTexture", r[r.ParentRenderTexture = 4096] = "ParentRenderTexture", r[r.None = 0] = "None", r[r.All = 8191] = "All";
})(P || (P = {}));
var mc = /*#__PURE__*/function (_fr3) {
  function mc(e, n) {
    var _this40;
    _classCallCheck(this, mc);
    _this40 = _callSuper(this, mc);
    b(_this40, "stage");
    b(_this40, "children", []);
    b(_this40, "props");
    b(_this40, "updateType", P.All);
    b(_this40, "globalTransform");
    b(_this40, "scaleRotateTransform");
    b(_this40, "localTransform");
    b(_this40, "renderCoords");
    b(_this40, "renderBound");
    b(_this40, "strictBound");
    b(_this40, "preloadBound");
    b(_this40, "clippingRect", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      valid: !1
    });
    b(_this40, "isRenderable", !1);
    b(_this40, "renderState", ce.Init);
    b(_this40, "worldAlpha", 1);
    b(_this40, "premultipliedColorTl", 0);
    b(_this40, "premultipliedColorTr", 0);
    b(_this40, "premultipliedColorBl", 0);
    b(_this40, "premultipliedColorBr", 0);
    b(_this40, "calcZIndex", 0);
    b(_this40, "hasRTTupdates", !1);
    b(_this40, "parentHasRenderTexture", !1);
    b(_this40, "onTextureLoaded", function (e, n) {
      _this40.autosizeNode(n), _this40.stage.requestRender(), _this40.parentHasRenderTexture && _this40.setRTTUpdates(1), _this40.emit("loaded", {
        type: "texture",
        dimensions: n
      });
    });
    b(_this40, "onTextureFailed", function (e, n) {
      _this40.emit("failed", {
        type: "texture",
        error: n
      });
    });
    b(_this40, "onTextureFreed", function (e) {
      _this40.emit("freed", {
        type: "texture"
      });
    });
    _this40.stage = e, _this40.props = _objectSpread(_objectSpread({}, n), {}, {
      parent: null
    }), _this40.parent = n.parent, _this40.rtt = n.rtt, _this40.updateScaleRotateTransform();
    return _this40;
  }
  _inherits(mc, _fr3);
  return _createClass(mc, [{
    key: "loadTexture",
    value: function loadTexture(e, n) {
      var _this41 = this;
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.props.texture && this.unloadTexture();
      var i = this.stage.txManager,
        a = i.loadTexture(e, n, o);
      this.props.texture = a, this.props.textureOptions = o, this.setUpdateType(P.IsRenderable), queueMicrotask(function () {
        a.state === "loaded" ? _this41.onTextureLoaded(a, a.dimensions) : a.state === "failed" ? _this41.onTextureFailed(a, a.error) : a.state === "freed" && _this41.onTextureFreed(a), a.on("loaded", _this41.onTextureLoaded), a.on("failed", _this41.onTextureFailed), a.on("freed", _this41.onTextureFreed);
      });
    }
  }, {
    key: "unloadTexture",
    value: function unloadTexture() {
      if (this.props.texture) {
        var e = this.props.texture;
        e.off("loaded", this.onTextureLoaded), e.off("failed", this.onTextureFailed), e.off("freed", this.onTextureFreed), e.setRenderableOwner(this, !1);
      }
      this.props.texture = null, this.props.textureOptions = null, this.setUpdateType(P.IsRenderable);
    }
  }, {
    key: "autosizeNode",
    value: function autosizeNode(e) {
      this.autosize && (this.width = e.width, this.height = e.height);
    }
  }, {
    key: "loadShader",
    value: function loadShader(e, n) {
      var o = this.stage.renderer.getShaderManager();
      k(o);
      var _o$loadShader = o.loadShader(e, n),
        i = _o$loadShader.shader,
        a = _o$loadShader.props;
      this.props.shader = i, this.props.shaderProps = a, this.setUpdateType(P.IsRenderable);
    }
  }, {
    key: "setUpdateType",
    value: function setUpdateType(e) {
      this.updateType |= e;
      var n = this.props.parent;
      n && !(n.updateType & P.Children) && n.setUpdateType(P.Children), this.parentHasRenderTexture && this.setRTTUpdates(e);
    }
  }, {
    key: "sortChildren",
    value: function sortChildren() {
      this.children.sort(function (e, n) {
        return e.calcZIndex - n.calcZIndex;
      });
    }
  }, {
    key: "updateScaleRotateTransform",
    value: function updateScaleRotateTransform() {
      this.scaleRotateTransform = Ne.rotate(this.props.rotation, this.scaleRotateTransform).scale(this.props.scaleX, this.props.scaleY);
    }
  }, {
    key: "updateLocalTransform",
    value: function updateLocalTransform() {
      k(this.scaleRotateTransform);
      var e = this.props.pivotX * this.props.width,
        n = this.props.pivotY * this.props.height,
        o = this.props.mountX * this.props.width,
        i = this.props.mountY * this.props.height;
      this.localTransform = Ne.translate(e - o + this.props.x, n - i + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-e, -n), this.setUpdateType(P.Global);
    }
  }, {
    key: "update",
    value: function update(e, n) {
      var _this42 = this;
      var a;
      this.updateType & P.ScaleRotate && (this.updateScaleRotateTransform(), this.setUpdateType(P.Local)), this.updateType & P.Local && (this.updateLocalTransform(), this.setUpdateType(P.Global));
      var o = this.props.parent;
      var i = P.None;
      if (this.updateType & P.ParentRenderTexture) {
        var s = this.parent;
        for (; s;) s.rtt && (this.parentHasRenderTexture = !0), s = s.parent;
      }
      this.updateType ^ P.All && this.updateType & P.RenderTexture && this.children.forEach(function (s) {
        s.setUpdateType(P.All);
      }), this.updateType & P.Global && (k(this.localTransform), this.globalTransform = Ne.copy((o == null ? void 0 : o.globalTransform) || this.localTransform, this.globalTransform), this.parentHasRenderTexture && (a = this.props.parent) != null && a.rtt && (this.globalTransform = Ne.identity()), o && this.globalTransform.multiply(this.localTransform), this.calculateRenderCoords(), this.updateBoundingRect(), this.setUpdateType(P.Clipping | P.RenderState | P.Children), i |= P.Global), this.updateType & P.Clipping && (this.calculateClippingRect(n), this.setUpdateType(P.Children), i |= P.Clipping), this.updateType & P.WorldAlpha && (o ? this.worldAlpha = o.worldAlpha * this.props.alpha : this.worldAlpha = this.props.alpha, this.setUpdateType(P.Children | P.PremultipliedColors | P.IsRenderable), i |= P.WorldAlpha), this.updateType & P.PremultipliedColors && (this.premultipliedColorTl = Pn(this.props.colorTl, this.worldAlpha, !0), this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl : (this.premultipliedColorTr = Pn(this.props.colorTr, this.worldAlpha, !0), this.premultipliedColorBl = Pn(this.props.colorBl, this.worldAlpha, !0), this.premultipliedColorBr = Pn(this.props.colorBr, this.worldAlpha, !0))), this.updateType & P.RenderState && (this.updateRenderState(n), this.setUpdateType(P.IsRenderable)), this.updateType & P.IsRenderable && this.updateIsRenderable(), o && this.updateType & P.CalculatedZIndex && (this.calculateZIndex(), o.setUpdateType(P.ZIndexSortedChildren)), this.updateType & P.Children && this.children.length && !this.rtt && this.children.forEach(function (s) {
        s.setUpdateType(i), s.updateType !== 0 && s.update(e, _this42.clippingRect);
      }), this.updateType & P.ZIndexSortedChildren && this.sortChildren(), this.updateType = 0;
    }
  }, {
    key: "checkRenderProps",
    value: function checkRenderProps() {
      return this.props.texture ? !0 : !this.props.width || !this.props.height ? !1 : !!(this.props.shader || this.props.clipping || this.props.color !== 0 || this.props.colorTop !== 0 || this.props.colorBottom !== 0 || this.props.colorLeft !== 0 || this.props.colorRight !== 0 || this.props.colorTl !== 0 || this.props.colorTr !== 0 || this.props.colorBl !== 0 || this.props.colorBr !== 0);
    }
  }, {
    key: "checkRenderBounds",
    value: function checkRenderBounds(e) {
      k(this.renderBound);
      var n = e.width || this.stage.root.width,
        o = e.height || this.stage.root.height;
      this.strictBound = jr(e.x, e.y, e.x + n, e.y + o, this.strictBound);
      var i = this.stage.boundsMargin;
      return this.preloadBound = jr(e.x - i[3], e.y - i[0], e.x + n + i[1], e.y + o + i[2], this.preloadBound), Fu(this.renderBound, this.strictBound) ? ce.InViewport : Fu(this.renderBound, this.preloadBound) ? ce.InBounds : ce.OutOfBounds;
    }
  }, {
    key: "updateRenderState",
    value: function updateRenderState(e) {
      var n = this.checkRenderBounds(e);
      if (n !== this.renderState) {
        var o = this.renderState;
        this.renderState = n, o === ce.InViewport && this.emit("outOfViewport", {
          previous: o,
          current: n
        }), o < ce.InBounds && n === ce.InViewport ? (this.emit(ar.get(ce.InBounds), {
          previous: o,
          current: n
        }), o = ce.InBounds) : o > ce.InBounds && n === ce.OutOfBounds && (this.emit(ar.get(ce.InBounds), {
          previous: o,
          current: n
        }), o = ce.InBounds);
        var i = ar.get(n);
        k(i), this.emit(i, {
          previous: o,
          current: n
        });
      }
    }
  }, {
    key: "setRenderState",
    value: function setRenderState(e) {
      e !== this.renderState && (this.renderState = e, this.emit(ce[e]));
    }
  }, {
    key: "updateIsRenderable",
    value: function updateIsRenderable() {
      var e;
      this.worldAlpha === 0 || !this.checkRenderProps() ? e = !1 : e = this.renderState > ce.OutOfBounds, this.isRenderable !== e && (this.isRenderable = e, this.onChangeIsRenderable(e));
    }
  }, {
    key: "onChangeIsRenderable",
    value: function onChangeIsRenderable(e) {
      var n;
      (n = this.props.texture) == null || n.setRenderableOwner(this, e);
    }
  }, {
    key: "calculateRenderCoords",
    value: function calculateRenderCoords() {
      var e = this.width,
        n = this.height,
        o = this.globalTransform;
      k(o);
      var i = o.tx,
        a = o.ty,
        s = o.ta,
        l = o.tb,
        c = o.tc,
        u = o.td;
      if (l === 0 && c === 0) {
        var f = i,
          v = i + e * s,
          p = a,
          m = a + n * u;
        this.renderCoords = Ri.translate(f, p, v, p, v, m, f, m, this.renderCoords);
      } else this.renderCoords = Ri.translate(i, a, i + e * s, a + e * c, i + e * s + n * l, a + e * c + n * u, i + n * l, a + n * u, this.renderCoords);
    }
  }, {
    key: "updateBoundingRect",
    value: function updateBoundingRect() {
      var e = this.renderCoords,
        n = this.globalTransform;
      k(n), k(e);
      var o = n.tb,
        i = n.tc,
        a = e.x1,
        s = e.y1,
        l = e.x3,
        c = e.y3;
      if (o === 0 || i === 0) this.renderBound = jr(a, s, l, c, this.renderBound);else {
        var u = e.x2,
          f = e.x4,
          v = e.y2,
          p = e.y4;
        this.renderBound = jr(Math.min(a, u, l, f), Math.min(s, v, c, p), Math.max(a, u, l, f), Math.max(s, v, c, p), this.renderBound);
      }
    }
  }, {
    key: "calculateClippingRect",
    value: function calculateClippingRect(e) {
      k(this.globalTransform);
      var n = this.clippingRect,
        o = this.props,
        i = this.globalTransform,
        a = o.clipping,
        s = i.tb !== 0 || i.tc !== 0;
      a && !s ? (n.x = i.tx, n.y = i.ty, n.width = this.width * i.ta, n.height = this.height * i.td, n.valid = !0) : n.valid = !1, e.valid && n.valid ? fc(e, n, n) : e.valid && (Ip(e, n), n.valid = !0);
    }
  }, {
    key: "calculateZIndex",
    value: function calculateZIndex() {
      var a, s;
      var e = this.props,
        n = e.zIndex || 0,
        o = ((a = e.parent) == null ? void 0 : a.zIndex) || 0;
      var i = n;
      (s = e.parent) != null && s.zIndexLocked && (i = n < o ? n : o), this.calcZIndex = i;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unloadTexture(), this.clippingRect.valid = !1, this.isRenderable = !1, delete this.renderCoords, delete this.renderBound, delete this.strictBound, delete this.preloadBound, delete this.globalTransform, delete this.scaleRotateTransform, delete this.localTransform, this.props.texture = null, this.props.shader = null, this.rtt && this.stage.renderer.removeRTTNode(this), this.removeAllListeners(), this.parent = null;
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e) {
      var _this$props2 = this.props,
        n = _this$props2.width,
        o = _this$props2.height,
        i = _this$props2.texture,
        a = _this$props2.textureOptions,
        s = _this$props2.shader,
        l = _this$props2.shaderProps,
        c = _this$props2.rtt;
      if (this.parentHasRenderTexture && (!e.renderToTextureActive || this.parentRenderTexture !== e.activeRttNode)) return;
      var u = this.premultipliedColorTl,
        f = this.premultipliedColorTr,
        v = this.premultipliedColorBl,
        p = this.premultipliedColorBr,
        m = this.zIndex,
        S = this.worldAlpha,
        w = this.globalTransform,
        $ = this.clippingRect;
      k(w), e.addQuad({
        width: n,
        height: o,
        colorTl: u,
        colorTr: f,
        colorBl: v,
        colorBr: p,
        texture: i,
        textureOptions: a,
        zIndex: m,
        shader: s,
        shaderProps: l,
        alpha: S,
        clippingRect: $,
        tx: w.tx,
        ty: w.ty,
        ta: w.ta,
        tb: w.tb,
        tc: w.tc,
        td: w.td,
        rtt: c,
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
      this.props.x !== e && (this.props.x = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "absX",
    get: function get() {
      var e, n, o;
      return this.props.x + (((e = this.props.parent) == null ? void 0 : e.absX) || ((o = (n = this.props.parent) == null ? void 0 : n.globalTransform) == null ? void 0 : o.tx) || 0);
    }
  }, {
    key: "absY",
    get: function get() {
      var e, n;
      return this.props.y + ((n = (e = this.props.parent) == null ? void 0 : e.absY) != null ? n : 0);
    }
  }, {
    key: "y",
    get: function get() {
      return this.props.y;
    },
    set: function set(e) {
      this.props.y !== e && (this.props.y = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width !== e && (this.props.width = e, this.setUpdateType(P.Local), this.props.rtt && this.setUpdateType(P.RenderTexture));
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height !== e && (this.props.height = e, this.setUpdateType(P.Local), this.props.rtt && this.setUpdateType(P.RenderTexture));
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
      this.props.scaleX !== e && (this.props.scaleX = e, this.setUpdateType(P.ScaleRotate));
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this.props.scaleY;
    },
    set: function set(e) {
      this.props.scaleY !== e && (this.props.scaleY = e, this.setUpdateType(P.ScaleRotate));
    }
  }, {
    key: "mount",
    get: function get() {
      return this.props.mount;
    },
    set: function set(e) {
      (this.props.mountX !== e || this.props.mountY !== e) && (this.props.mountX = e, this.props.mountY = e, this.props.mount = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "mountX",
    get: function get() {
      return this.props.mountX;
    },
    set: function set(e) {
      this.props.mountX !== e && (this.props.mountX = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "mountY",
    get: function get() {
      return this.props.mountY;
    },
    set: function set(e) {
      this.props.mountY !== e && (this.props.mountY = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "pivot",
    get: function get() {
      return this.props.pivot;
    },
    set: function set(e) {
      (this.props.pivotX !== e || this.props.pivotY !== e) && (this.props.pivotX = e, this.props.pivotY = e, this.props.pivot = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "pivotX",
    get: function get() {
      return this.props.pivotX;
    },
    set: function set(e) {
      this.props.pivotX !== e && (this.props.pivotX = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "pivotY",
    get: function get() {
      return this.props.pivotY;
    },
    set: function set(e) {
      this.props.pivotY !== e && (this.props.pivotY = e, this.setUpdateType(P.Local));
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.props.rotation;
    },
    set: function set(e) {
      this.props.rotation !== e && (this.props.rotation = e, this.setUpdateType(P.ScaleRotate));
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.props.alpha;
    },
    set: function set(e) {
      this.props.alpha = e, this.setUpdateType(P.PremultipliedColors | P.WorldAlpha);
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
      this.props.clipping = e, this.setUpdateType(P.Clipping);
    }
  }, {
    key: "color",
    get: function get() {
      return this.props.color;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorTr !== e || this.props.colorBl !== e || this.props.colorBr !== e) && (this.colorTl = e, this.colorTr = e, this.colorBl = e, this.colorBr = e), this.props.color = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorTop",
    get: function get() {
      return this.props.colorTop;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorTr !== e) && (this.colorTl = e, this.colorTr = e), this.props.colorTop = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorBottom",
    get: function get() {
      return this.props.colorBottom;
    },
    set: function set(e) {
      (this.props.colorBl !== e || this.props.colorBr !== e) && (this.colorBl = e, this.colorBr = e), this.props.colorBottom = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorLeft",
    get: function get() {
      return this.props.colorLeft;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorBl !== e) && (this.colorTl = e, this.colorBl = e), this.props.colorLeft = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorRight",
    get: function get() {
      return this.props.colorRight;
    },
    set: function set(e) {
      (this.props.colorTr !== e || this.props.colorBr !== e) && (this.colorTr = e, this.colorBr = e), this.props.colorRight = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorTl",
    get: function get() {
      return this.props.colorTl;
    },
    set: function set(e) {
      this.props.colorTl = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorTr",
    get: function get() {
      return this.props.colorTr;
    },
    set: function set(e) {
      this.props.colorTr = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorBl",
    get: function get() {
      return this.props.colorBl;
    },
    set: function set(e) {
      this.props.colorBl = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "colorBr",
    get: function get() {
      return this.props.colorBr;
    },
    set: function set(e) {
      this.props.colorBr = e, this.setUpdateType(P.PremultipliedColors);
    }
  }, {
    key: "zIndexLocked",
    get: function get() {
      return this.props.zIndexLocked || 0;
    },
    set: function set(e) {
      this.props.zIndexLocked = e, this.setUpdateType(P.CalculatedZIndex | P.Children), this.children.forEach(function (n) {
        n.setUpdateType(P.CalculatedZIndex);
      });
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.props.zIndex;
    },
    set: function set(e) {
      this.props.zIndex = e, this.setUpdateType(P.CalculatedZIndex | P.Children), this.children.forEach(function (n) {
        n.setUpdateType(P.CalculatedZIndex);
      });
    }
  }, {
    key: "parent",
    get: function get() {
      return this.props.parent;
    },
    set: function set(e) {
      var n = this.props.parent;
      if (n !== e) {
        if (this.props.parent = e, n) {
          var o = n.children.indexOf(this);
          k(o !== -1, "CoreNode.parent: Node not found in old parent's children!"), n.children.splice(o, 1), n.setUpdateType(P.Children | P.ZIndexSortedChildren);
        }
        e && (e.children.push(this), this.setUpdateType(P.All), e.setUpdateType(P.Children | P.ZIndexSortedChildren), (e.rtt || e.parentHasRenderTexture) && this.setRTTUpdates(P.All)), this.updateScaleRotateTransform();
      }
    }
  }, {
    key: "rtt",
    get: function get() {
      return this.props.rtt;
    },
    set: function set(e) {
      var n, o;
      if (!e) {
        this.props.rtt && (this.props.rtt = !1, this.unloadTexture(), this.setUpdateType(P.All), this.children.forEach(function (i) {
          i.parentHasRenderTexture = !1;
        }), (n = this.stage.renderer) == null || n.removeRTTNode(this));
        return;
      }
      this.props.rtt = !0, this.hasRTTupdates = !0, this.setUpdateType(P.All), this.children.forEach(function (i) {
        i.setUpdateType(P.All);
      }), (o = this.stage.renderer) == null || o.renderToTexture(this);
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
      var e = this.parent;
      for (; e;) {
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
      var n;
      this.hasRTTupdates = !0, (n = this.parent) == null || n.setRTTUpdates(e);
    }
  }]);
}(fr);
var Vx = 1;
function yc() {
  return Vx++;
}
var dl = /*#__PURE__*/function (_fr4) {
  function dl(e, n, o, i) {
    var _this43;
    _classCallCheck(this, dl);
    var a;
    _this43 = _callSuper(this, dl);
    b(_this43, "rendererMain");
    b(_this43, "stage");
    b(_this43, "id");
    b(_this43, "coreNode");
    b(_this43, "_children", []);
    b(_this43, "_src", "");
    b(_this43, "_parent", null);
    b(_this43, "_texture", null);
    b(_this43, "_shader", null);
    b(_this43, "_data", {});
    b(_this43, "onTextureLoaded", function (e, n) {
      _this43.emit("loaded", n);
    });
    b(_this43, "onTextureFailed", function (e, n) {
      _this43.emit("failed", n);
    });
    b(_this43, "onTextureFreed", function (e, n) {
      _this43.emit("freed", n);
    });
    b(_this43, "onOutOfBounds", function (e, n) {
      _this43.emit("outOfBounds", n);
    });
    b(_this43, "onInBounds", function (e, n) {
      _this43.emit("inBounds", n);
    });
    b(_this43, "onOutOfViewport", function (e, n) {
      _this43.emit("outOfViewport", n);
    });
    b(_this43, "onInViewport", function (e, n) {
      _this43.emit("inViewport", n);
    });
    _this43.rendererMain = n, _this43.stage = o, _this43.id = (a = i == null ? void 0 : i.id) != null ? a : yc(), _this43.coreNode = i || new mc(_this43.stage, {
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
  _inherits(dl, _fr4);
  return _createClass(dl, [{
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
      e !== null && (this.coreNode.scaleX = e, this.coreNode.scaleY = e);
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
      var o;
      var n = this._parent;
      if (this._parent = e, this.coreNode.parent = (o = e == null ? void 0 : e.coreNode) != null ? o : null, n) {
        var i = n.children.indexOf(this);
        k(i !== -1, "MainOnlyNode.parent: Node not found in old parent's children!"), n.children.splice(i, 1);
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
      if (this._src !== e) {
        if (this._src = e, !e) {
          this.texture = null;
          return;
        }
        this.texture = this.rendererMain.createTexture("ImageTexture", {
          src: e
        });
      }
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
      this._data = Qp(e);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.emit("beforeDestroy", {});
      var e = this.children[0];
      for (; e;) e.destroy(), e = this.children[0];
      this.coreNode.destroy(), this.parent = null, this.texture = null, this.emit("afterDestroy", {}), this.removeAllListeners();
    }
  }, {
    key: "flush",
    value: function flush() {}
  }, {
    key: "animate",
    value: function animate(e, n) {
      var o = new Yx(this.coreNode, e, n);
      return new Kx(this.stage.animationManager, o);
    }
  }]);
}(fr);
var Xx = function Xx(r) {
    var t = !1;
    var _e8 = function e() {
      if (r.updateAnimations(), !r.hasSceneUpdates()) {
        r.calculateFps(), setTimeout(_e8, 16.666666666666668), t || (r.emit("idle"), t = !0);
        return;
      }
      t = !1, r.drawFrame(), requestAnimationFrame(_e8);
    };
    requestAnimationFrame(_e8);
  },
  Qx = function Qx() {
    return performance ? performance.now() : Date.now();
  };
var qx = /*#__PURE__*/function () {
  function qx() {
    _classCallCheck(this, qx);
    b(this, "activeAnimations", new Set());
  }
  return _createClass(qx, [{
    key: "registerAnimation",
    value: function registerAnimation(t) {
      this.activeAnimations.add(t);
    }
  }, {
    key: "unregisterAnimation",
    value: function unregisterAnimation(t) {
      this.activeAnimations["delete"](t);
    }
  }, {
    key: "update",
    value: function update(t) {
      this.activeAnimations.forEach(function (e) {
        e.update(t);
      });
    }
  }]);
}();
var Jx = /*#__PURE__*/function () {
  function Jx(t) {
    var _this44 = this;
    _classCallCheck(this, Jx);
    b(this, "imageWorkersEnabled", !0);
    b(this, "messageManager", {});
    b(this, "workers", []);
    b(this, "workerIndex", 0);
    b(this, "nextId", 0);
    this.workers = this.createWorkers(t), this.workers.forEach(function (e) {
      e.onmessage = _this44.handleMessage.bind(_this44);
    });
  }
  return _createClass(Jx, [{
    key: "handleMessage",
    value: function handleMessage(t) {
      var _t$data = t.data,
        e = _t$data.id,
        n = _t$data.data,
        o = _t$data.error,
        i = this.messageManager[e];
      if (i) {
        var _i5 = _slicedToArray(i, 2),
          a = _i5[0],
          s = _i5[1];
        delete this.messageManager[e], o ? s(new Error(o)) : a(n);
      }
    }
  }, {
    key: "createWorkers",
    value: function createWorkers() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = "\n      function hasAlphaChannel(mimeType) {\n          return (mimeType.indexOf(\"image/png\") !== -1);\n      }\n\n      function getImage(src, premultiplyAlpha) {\n        return new Promise(function(resolve, reject) {\n          var xhr = new XMLHttpRequest();\n          xhr.open('GET', src, true);\n          xhr.responseType = 'blob';\n\n          xhr.onload = function() {\n            if (xhr.status === 200) {\n              var blob = xhr.response;\n              var hasAlphaChannel = premultiplyAlpha !== undefined ? premultiplyAlpha : hasAlphaChannel(blob.type);\n\n              createImageBitmap(blob, {\n                premultiplyAlpha: hasAlphaChannel ? 'premultiply' : 'none',\n                colorSpaceConversion: 'none',\n                imageOrientation: 'none'\n              }).then(function(data) {\n                resolve({ data: data, premultiplyAlpha: premultiplyAlpha });\n              }).catch(function(error) {\n                reject(error);\n              });\n            } else {\n              reject(new Error('Failed to load image: ' + xhr.statusText));\n            }\n          };\n\n          xhr.onerror = function() {\n            reject(new Error('Network error occurred while trying to fetch the image.'));\n          };\n\n          xhr.send();\n        });\n      }\n\n      self.onmessage = (event) => {\n        var id = event.data.id;\n        var src = event.data.src;\n        var premultiplyAlpha = event.data.premultiplyAlpha;\n\n        getImage(src, premultiplyAlpha)\n          .then(function(data) {\n              self.postMessage({ id: id, data: data }, [data.data]);\n          })\n          .catch(function(error) {\n              self.postMessage({ id: id, error: error.message });\n          });\n      };\n    ",
        n = new Blob([e.replace('"use strict";', "")], {
          type: "application/javascript"
        }),
        o = (self.URL ? URL : webkitURL).createObjectURL(n),
        i = [];
      for (var a = 0; a < t; a++) i.push(new Worker(o));
      return i;
    }
  }, {
    key: "getNextWorker",
    value: function getNextWorker() {
      var t = this.workers[this.workerIndex];
      return this.workerIndex = (this.workerIndex + 1) % this.workers.length, t;
    }
  }, {
    key: "convertUrlToAbsolute",
    value: function convertUrlToAbsolute(t) {
      return new URL(t, self.location.href).href;
    }
  }, {
    key: "getImage",
    value: function getImage(t, e) {
      var _this45 = this;
      return new Promise(function (n, o) {
        try {
          if (_this45.workers) {
            var i = _this45.convertUrlToAbsolute(t),
              a = _this45.nextId++;
            _this45.messageManager[a] = [n, o], _this45.getNextWorker().postMessage({
              id: a,
              src: i,
              premultiplyAlpha: e
            });
          }
        } catch (i) {
          o(i);
        }
      });
    }
  }]);
}();
var Kn = /*#__PURE__*/function (_wp2) {
  function Kn(e, n) {
    var _this46;
    _classCallCheck(this, Kn);
    _this46 = _callSuper(this, Kn, [e]);
    b(_this46, "props");
    _this46.props = Kn.resolveDefaults(n);
    return _this46;
  }
  _inherits(Kn, _wp2);
  return _createClass(Kn, [{
    key: "getTextureData",
    value: function () {
      var _getTextureData2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this$props3, e, n, o, i, a, s;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this$props3 = this.props, e = _this$props3.width, n = _this$props3.height, o = e * n * 4, i = new Uint8ClampedArray(o);
              for (a = 0; a < o; a += 4) {
                s = Math.floor(Math.random() * 256);
                i[a] = s, i[a + 1] = s, i[a + 2] = s, i[a + 3] = 255;
              }
              return _context8.abrupt("return", {
                data: new ImageData(i, e, n)
              });
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getTextureData() {
        return _getTextureData2.apply(this, arguments);
      }
      return getTextureData;
    }()
  }], [{
    key: "makeCacheKey",
    value: function makeCacheKey(e) {
      var n = Kn.resolveDefaults(e);
      return "NoiseTexture,".concat(n.width, ",").concat(n.height, ",").concat(n.cacheId);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var n, o, i;
      return {
        width: (n = e.width) != null ? n : 128,
        height: (o = e.height) != null ? o : 128,
        cacheId: (i = e.cacheId) != null ? i : 0
      };
    }
  }]);
}(wp);
b(Kn, "z$__type__Props");
var hl = Kn;
var Zx = /*#__PURE__*/function () {
  function Zx(t) {
    _classCallCheck(this, Zx);
    b(this, "usedMemory", 0);
    b(this, "txConstructors", {});
    b(this, "textureKeyCache", new Map());
    b(this, "textureIdCache", new Map());
    b(this, "ctxTextureCache", new WeakMap());
    b(this, "textureRefCountMap", new WeakMap());
    b(this, "imageWorkerManager", null);
    b(this, "hasCreateImageBitmap", !!self.createImageBitmap);
    b(this, "hasWorker", !!self.Worker);
    b(this, "renderer");
    this.hasCreateImageBitmap && this.hasWorker && (this.imageWorkerManager = new Jx(t)), this.hasCreateImageBitmap || console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), this.registerTextureType("ImageTexture", fl), this.registerTextureType("ColorTexture", H0), this.registerTextureType("NoiseTexture", hl), this.registerTextureType("SubTexture", Ap), this.registerTextureType("RenderTexture", Y0);
  }
  return _createClass(Zx, [{
    key: "registerTextureType",
    value: function registerTextureType(t, e) {
      this.txConstructors[t] = e;
    }
  }, {
    key: "loadTexture",
    value: function loadTexture(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var a;
      var o = this.txConstructors[t];
      if (!o) throw new Error('Texture type "'.concat(t, '" is not registered'));
      var i;
      if ((n == null ? void 0 : n.id) !== void 0 && this.textureIdCache.has(n.id) && (i = this.textureIdCache.get(n.id)), !i) {
        var s = n == null ? void 0 : n.id,
          l = (a = n == null ? void 0 : n.cacheKey) != null ? a : o.makeCacheKey(e);
        l && this.textureKeyCache.has(l) ? i = this.textureKeyCache.get(l) : i = new o(this, e), s && this.addTextureIdToCache(s, l, i);
      }
      return n != null && n.preload && this.getCtxTexture(i).load(), i;
    }
  }, {
    key: "addTextureIdToCache",
    value: function addTextureIdToCache(t, e, n) {
      var o = this.textureIdCache,
        i = this.textureRefCountMap;
      o.set(t, n), i.has(n) ? i.get(n).count++ : (i.set(n, {
        cacheKey: e,
        count: 1
      }), e && this.textureKeyCache.set(e, n));
    }
  }, {
    key: "removeTextureIdFromCache",
    value: function removeTextureIdFromCache(t) {
      var i;
      var e = this.textureIdCache,
        n = this.textureRefCountMap,
        o = e.get(t);
      if (o) {
        if (e["delete"](t), n.has(o)) {
          var a = n.get(o);
          k(a), a.count--, a.count === 0 && (n["delete"](o), a.cacheKey && this.textureKeyCache["delete"](a.cacheKey));
        }
        (i = this.ctxTextureCache.get(o)) == null || i.free();
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
    value: function getCtxTexture(t) {
      if (this.ctxTextureCache.has(t)) return this.ctxTextureCache.get(t);
      var e = this.renderer.createCtxTexture(t);
      return this.ctxTextureCache.set(t, e), e;
    }
  }]);
}();
var eb = /*#__PURE__*/function () {
  function eb() {
    _classCallCheck(this, eb);
    b(this, "data", {});
  }
  return _createClass(eb, [{
    key: "reset",
    value: function reset() {
      this.data = {};
    }
  }, {
    key: "increment",
    value: function increment(t) {
      this.data[t] || (this.data[t] = 0), this.data[t]++;
    }
  }, {
    key: "getData",
    value: function getData() {
      return _objectSpread({}, this.data);
    }
  }]);
}();
var tb = /*#__PURE__*/function () {
  function tb(t) {
    _classCallCheck(this, tb);
    b(this, "memUsed", 0);
    b(this, "textures", new Map());
    b(this, "threshold");
    b(this, "gcRequested", !1);
    this.threshold = t, t === 0 && (this.setTextureMemUse = function () {});
  }
  return _createClass(tb, [{
    key: "setTextureMemUse",
    value: function setTextureMemUse(t, e) {
      if (this.textures.has(t) && (this.memUsed -= this.textures.get(t)), e === 0) {
        this.textures["delete"](t);
        return;
      } else this.memUsed += e, this.textures.set(t, e);
      this.memUsed > this.threshold && (this.gcRequested = !0);
    }
  }, {
    key: "gc",
    value: function gc() {
      this.gcRequested = !1, this.textures.forEach(function (t, e) {
        e.renderable || e.free();
      });
    }
  }]);
}();
var rb = {
  isWhite: !0,
  a: 1,
  r: 255,
  g: 255,
  b: 255
};
function Ua(r) {
  if (r === 4294967295) return rb;
  var t = (r >>> 24 & 255) / 255,
    e = r >>> 16 & 255 & 255,
    n = r >>> 8 & 255 & 255,
    o = r & 255 & 255;
  return {
    isWhite: !1,
    a: t,
    r: o,
    g: n,
    b: e
  };
}
function pi(_ref8) {
  var r = _ref8.a,
    t = _ref8.r,
    e = _ref8.g,
    n = _ref8.b;
  return "rgba(".concat(t, ",").concat(e, ",").concat(n, ",").concat(r, ")");
}
var nb = /*#__PURE__*/function (_K2) {
  function nb() {
    var _this47;
    _classCallCheck(this, nb);
    _this47 = _callSuper(this, nb, arguments);
    b(_this47, "image");
    b(_this47, "tintCache");
    return _this47;
  }
  _inherits(nb, _K2);
  return _createClass(nb, [{
    key: "load",
    value: function load() {
      var _this48 = this;
      this.textureSource.state === "freed" && (this.textureSource.setState("loading"), this.onLoadRequest().then(function (e) {
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
        var _this$textureSource$d = this.textureSource.dimensions,
          n = _this$textureSource$d.width,
          o = _this$textureSource$d.height;
        this.memManager.setTextureMemUse(this, n * o * e);
      }
    }
  }, {
    key: "hasImage",
    value: function hasImage() {
      return this.image !== void 0;
    }
  }, {
    key: "getImage",
    value: function getImage(e) {
      var a;
      var n = this.image;
      if (k(n, "Attempt to get unloaded image texture"), e.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), n;
      var o = pi(e);
      if (((a = this.tintCache) == null ? void 0 : a.key) === o) return this.tintCache.image;
      var i = this.tintTexture(n, o);
      return this.tintCache = {
        key: o,
        image: i
      }, this.updateMemSize(), i;
    }
  }, {
    key: "tintTexture",
    value: function tintTexture(e, n) {
      var o = e.width,
        i = e.height,
        a = document.createElement("canvas");
      a.width = o, a.height = i;
      var s = a.getContext("2d");
      return s && (s.fillStyle = n, s.globalCompositeOperation = "copy", s.fillRect(0, 0, o, i), s.globalCompositeOperation = "multiply", s.drawImage(e, 0, 0, o, i, 0, 0, o, i), s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0, o, i, 0, 0, o, i)), a;
    }
  }, {
    key: "renderable",
    get: function get() {
      return this.textureSource.renderable;
    }
  }, {
    key: "onLoadRequest",
    value: function () {
      var _onLoadRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _yield$this$textureSo, e, n, o;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.textureSource.getTextureData();
            case 2:
              _yield$this$textureSo = _context9.sent;
              e = _yield$this$textureSo.data;
              if (!(e instanceof ImageData)) {
                _context9.next = 11;
                break;
              }
              n = document.createElement("canvas");
              n.width = e.width, n.height = e.height;
              o = n.getContext("2d");
              return _context9.abrupt("return", (o && o.putImageData(e, 0, 0), this.image = n, {
                width: e.width,
                height: e.height
              }));
            case 11:
              if (!(e instanceof ImageBitmap)) {
                _context9.next = 13;
                break;
              }
              return _context9.abrupt("return", (this.image = e, {
                width: e.width,
                height: e.height
              }));
            case 13:
              return _context9.abrupt("return", {
                width: 0,
                height: 0
              });
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function onLoadRequest() {
        return _onLoadRequest.apply(this, arguments);
      }
      return onLoadRequest;
    }()
  }]);
}(K0);
function ob(r) {
  var t, e;
  return r.shader instanceof Vp && r.shader.shType === Gp && (e = (t = r.shaderProps) == null ? void 0 : t.radius) != null ? e : 0;
}
var ib = /*#__PURE__*/function (_G2) {
  function ib(e) {
    var _this49;
    _classCallCheck(this, ib);
    _this49 = _callSuper(this, ib, [e]);
    b(_this49, "context");
    b(_this49, "canvas");
    b(_this49, "pixelRatio");
    b(_this49, "clearColor");
    b(_this49, "renderToTextureActive", !1);
    b(_this49, "activeRttNode", null);
    _this49.mode = "canvas", _this49.shManager.renderer = _this49;
    var n = e.canvas,
      o = e.pixelRatio,
      i = e.clearColor;
    _this49.canvas = n, _this49.context = n.getContext("2d"), _this49.pixelRatio = o, _this49.clearColor = i ? V0(i) : void 0;
    return _this49;
  }
  _inherits(ib, _G2);
  return _createClass(ib, [{
    key: "reset",
    value: function reset() {
      this.canvas.width = this.canvas.width;
      var e = this.context;
      if (this.clearColor) {
        var _this$clearColor = _slicedToArray(this.clearColor, 4),
          n = _this$clearColor[0],
          o = _this$clearColor[1],
          i = _this$clearColor[2],
          a = _this$clearColor[3];
        e.fillStyle = "rgba(".concat(n, ", ").concat(o, ", ").concat(i, ", ").concat(a / 255, ")"), e.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
      e.scale(this.pixelRatio, this.pixelRatio);
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "addQuad",
    value: function addQuad(e) {
      var n = this.context,
        o = e.tx,
        i = e.ty,
        a = e.width,
        s = e.height,
        l = e.alpha,
        c = e.colorTl,
        u = e.colorTr,
        f = e.colorBr,
        v = e.ta,
        p = e.tb,
        m = e.tc,
        S = e.td,
        w = e.clippingRect;
      var $ = e.texture,
        y,
        d;
      if ($) {
        if ($ instanceof Ap && (d = $.props, $ = $.parentTexture), y = this.txManager.getCtxTexture($), $.state === "freed") {
          y.load();
          return;
        }
        if ($.state !== "loaded" || !y.hasImage()) return;
      }
      var h = Ua(c),
        g = v !== 1,
        T = w.width !== 0 && w.height !== 0,
        I = c !== u || c !== f,
        C = e.shader ? ob(e) : 0;
      if ((g || T || C) && n.save(), T) {
        var A = new Path2D(),
          O = w.x,
          N = w.y,
          _ = w.width,
          F = w.height;
        A.rect(O, N, _, F), n.clip(A);
      }
      if (g) {
        var _A4 = this.pixelRatio;
        n.setTransform(v, m, p, S, o * _A4, i * _A4), n.scale(_A4, _A4), n.translate(-o, -i);
      }
      if (C) {
        var _A5 = new Path2D();
        _A5.roundRect(o, i, a, s, C), n.clip(_A5);
      }
      if (y) {
        var _A6 = y.getImage(h);
        n.globalAlpha = l, d ? n.drawImage(_A6, d.x, d.y, d.width, d.height, o, i, a, s) : n.drawImage(_A6, o, i, a, s), n.globalAlpha = 1;
      } else if (I) {
        var _A7 = o,
          _O2 = i,
          _N3;
        c === u ? (_A7 = o, _O2 = i + s, _N3 = Ua(f)) : (_A7 = o + a, _O2 = i, _N3 = Ua(u));
        var _6 = n.createLinearGradient(o, i, _A7, _O2);
        _6.addColorStop(0, pi(h)), _6.addColorStop(1, pi(_N3)), n.fillStyle = _6, n.fillRect(o, i, a, s);
      } else n.fillStyle = pi(h), n.fillRect(o, i, a, s);
      (g || T || C) && n.restore();
    }
  }, {
    key: "createCtxTexture",
    value: function createCtxTexture(e) {
      return new nb(this.txMemManager, e);
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
}(G0);
var ab = 2e6;
var sb = /*#__PURE__*/function (_fr5) {
  function sb(e) {
    var _this50;
    _classCallCheck(this, sb);
    _this50 = _callSuper(this, sb);
    b(_this50, "options");
    b(_this50, "animationManager");
    b(_this50, "txManager");
    b(_this50, "txMemManager");
    b(_this50, "fontManager");
    b(_this50, "textRenderers");
    b(_this50, "shManager");
    b(_this50, "renderer");
    b(_this50, "root");
    b(_this50, "boundsMargin");
    b(_this50, "deltaTime", 0);
    b(_this50, "lastFrameTime", 0);
    b(_this50, "currentFrameTime", 0);
    b(_this50, "fpsNumFrames", 0);
    b(_this50, "fpsElapsedTime", 0);
    b(_this50, "renderRequested", !1);
    b(_this50, "contextSpy", null);
    _this50.options = e;
    var n = e.canvas,
      o = e.clearColor,
      i = e.rootId,
      a = e.debug,
      s = e.appWidth,
      l = e.appHeight,
      c = e.boundsMargin,
      u = e.enableContextSpy,
      f = e.numImageWorkers,
      v = e.txMemByteThreshold,
      p = e.renderMode;
    _this50.txManager = new Zx(f), _this50.txMemManager = new tb(v), _this50.shManager = new Ix(), _this50.animationManager = new qx(), _this50.contextSpy = u ? new eb() : null;
    var m = [0, 0, 0, 0];
    c && (m = Array.isArray(c) ? c : [c, c, c, c]), _this50.boundsMargin = m, a != null && a.monitorTextureCache && setInterval(function () {
      k(_this50.txManager);
      var $ = _this50.txManager.getDebugInfo();
      console.log("Texture ID Cache Size: ", $.idCacheSize), console.log("Texture Key Cache Size: ", $.keyCacheSize);
    }, 1e3);
    var S = {
      stage: _this50,
      canvas: n,
      pixelRatio: e.devicePhysicalPixelRatio * e.deviceLogicalPixelRatio,
      clearColor: o != null ? o : 4278190080,
      bufferMemory: ab,
      txManager: _this50.txManager,
      txMemManager: _this50.txMemManager,
      shManager: _this50.shManager,
      contextSpy: _this50.contextSpy
    };
    p === "canvas" ? _this50.renderer = new ib(S) : _this50.renderer = new Tp(S), X0(p), _this50.txManager.renderer = _this50.renderer, _this50.textRenderers = p === "webgl" ? {
      canvas: new zu(_this50),
      sdf: new Ux(_this50)
    } : {
      canvas: new zu(_this50)
    }, _this50.fontManager = new Xp(_this50.textRenderers);
    var w = new mc(_this50, {
      id: i,
      x: 0,
      y: 0,
      width: s,
      height: l,
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
    _this50.root = w, Xx(_this50);
    return _this50;
  }
  _inherits(sb, _fr5);
  return _createClass(sb, [{
    key: "updateAnimations",
    value: function updateAnimations() {
      var e = this.animationManager;
      this.root && (this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = Qx(), this.deltaTime = this.lastFrameTime ? this.currentFrameTime - this.lastFrameTime : 100 / 6, this.emit("frameTick", {
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
        n = this.renderRequested;
      k(e), this.root.updateType !== 0 && this.root.update(this.deltaTime, this.root.clippingRect), e.reset(), e.txMemManager.gcRequested && e.txMemManager.gc(), e.rttNodes.length > 0 && e.renderRTTNodes(), this.addQuads(this.root), e == null || e.render(), this.calculateFps(), n && (this.renderRequested = !1);
    }
  }, {
    key: "calculateFps",
    value: function calculateFps() {
      var n, o, i;
      var e = this.options.fpsUpdateInterval;
      if (e && (this.fpsNumFrames++, this.fpsElapsedTime += this.deltaTime, this.fpsElapsedTime >= e)) {
        var a = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
        this.fpsNumFrames = 0, this.fpsElapsedTime = 0, this.emit("fpsUpdate", {
          fps: a,
          contextSpyData: (o = (n = this.contextSpy) == null ? void 0 : n.getData()) != null ? o : null
        }), (i = this.contextSpy) == null || i.reset();
      }
    }
  }, {
    key: "addQuads",
    value: function addQuads(e) {
      k(this.renderer && e.globalTransform), e.isRenderable && e.renderQuads(this.renderer);
      for (var n = 0; n < e.children.length; n++) {
        var o = e.children[n];
        o && (o == null ? void 0 : o.worldAlpha) !== 0 && this.addQuads(o);
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
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var o = n,
        i = !1;
      if (o) {
        var s = this.textRenderers[o];
        s ? s.canRenderFont(e) || (console.warn("Cannot use override text renderer '".concat(o, "' for font"), e), o = null, i = !0) : (console.warn("Text renderer override '".concat(o, "' not found.")), o = null, i = !0);
      }
      if (!o) {
        for (var _i6 = 0, _Object$entries = Object.entries(this.textRenderers); _i6 < _Object$entries.length; _i6++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i6], 2),
            _s8 = _Object$entries$_i[0],
            l = _Object$entries$_i[1];
          if (_s8 !== "canvas" && l.canRenderFont(e)) {
            o = _s8;
            break;
          }
        }
        o || (o = "canvas");
      }
      i && console.warn("Falling back to text renderer ".concat(String(o)));
      var a = this.textRenderers[o];
      return k(a, "resolvedTextRenderer undefined"), a;
    }
  }]);
}(fr);
var lb = /*#__PURE__*/function (_mc) {
  function lb(e, n) {
    var _this51;
    _classCallCheck(this, lb);
    _this51 = _callSuper(this, lb, [e, n]);
    b(_this51, "textRenderer");
    b(_this51, "trState");
    b(_this51, "_textRendererOverride", null);
    b(_this51, "onTextLoaded", function () {
      var _this52 = _this51,
        e = _this52.contain,
        n = _this51.trState.props.width,
        o = _this51.trState.props.height,
        i = _this51.trState.textW || 0,
        a = _this51.trState.textH || 0;
      e === "both" ? (_this51.props.width = n, _this51.props.height = o) : e === "width" ? (_this51.props.width = n, _this51.props.height = a) : e === "none" && (_this51.props.width = i, _this51.props.height = a), _this51.updateLocalTransform(), _this51.stage.requestRender(), _this51.emit("loaded", {
        type: "text",
        dimensions: {
          width: _this51.trState.textW || 0,
          height: _this51.trState.textH || 0
        }
      });
    });
    b(_this51, "onTextFailed", function (e, n) {
      _this51.emit("failed", {
        type: "text",
        error: n
      });
    });
    _this51._textRendererOverride = n.textRendererOverride;
    var _this51$resolveTextRe = _this51.resolveTextRendererAndState({
        x: _this51.absX,
        y: _this51.absY,
        width: n.width,
        height: n.height,
        textAlign: n.textAlign,
        color: n.color,
        zIndex: n.zIndex,
        contain: n.contain,
        scrollable: n.scrollable,
        scrollY: n.scrollY,
        offsetY: n.offsetY,
        letterSpacing: n.letterSpacing,
        debug: n.debug,
        fontFamily: n.fontFamily,
        fontSize: n.fontSize,
        fontStretch: n.fontStretch,
        fontStyle: n.fontStyle,
        fontWeight: n.fontWeight,
        text: n.text,
        lineHeight: n.lineHeight,
        maxLines: n.maxLines,
        textBaseline: n.textBaseline,
        verticalAlign: n.verticalAlign,
        overflowSuffix: n.overflowSuffix
      }),
      o = _this51$resolveTextRe.resolvedTextRenderer,
      i = _this51$resolveTextRe.textRendererState;
    _this51.textRenderer = o, _this51.trState = i;
    return _this51;
  }
  _inherits(lb, _mc);
  return _createClass(lb, [{
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width = e, this.textRenderer.set.width(this.trState, e), this.contain === "none" && this.setUpdateType(P.Local);
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height = e, this.textRenderer.set.height(this.trState, e), this.contain !== "both" && this.setUpdateType(P.Local);
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
      var _this$resolveTextRend = this.resolveTextRendererAndState(this.trState.props),
        n = _this$resolveTextRend.resolvedTextRenderer,
        o = _this$resolveTextRend.textRendererState;
      this.textRenderer = n, this.trState = o;
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
    value: function update(e, n) {
      _superPropGet(lb, "update", this, 3)([e, n]), k(this.globalTransform), this.textRenderer.set.x(this.trState, this.globalTransform.tx), this.textRenderer.set.y(this.trState, this.globalTransform.ty);
    }
  }, {
    key: "checkRenderProps",
    value: function checkRenderProps() {
      return this.trState.props.text !== "" ? !0 : _superPropGet(lb, "checkRenderProps", this, 3)([]);
    }
  }, {
    key: "onChangeIsRenderable",
    value: function onChangeIsRenderable(e) {
      _superPropGet(lb, "onChangeIsRenderable", this, 3)([e]), this.textRenderer.setIsRenderable(this.trState, e);
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e) {
      var n;
      k(this.globalTransform), !(this.parentHasRenderTexture && (!e.renderToTextureActive || this.parentRenderTexture !== e.activeRttNode)) && (this.parentHasRenderTexture && (n = this.props.parent) != null && n.rtt && (this.globalTransform = Ne.identity(), this.localTransform && this.globalTransform.multiply(this.localTransform)), k(this.globalTransform), this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _superPropGet(lb, "destroy", this, 3)([]), this.textRenderer.destroyState(this.trState);
    }
  }, {
    key: "resolveTextRendererAndState",
    value: function resolveTextRendererAndState(e) {
      var n = this.stage.resolveTextRenderer(e, this._textRendererOverride),
        o = n.createState(e);
      return o.emitter.on("loaded", this.onTextLoaded), o.emitter.on("failed", this.onTextFailed), n.scheduleUpdateState(o), {
        resolvedTextRenderer: n,
        textRendererState: o
      };
    }
  }]);
}(mc);
var cb = /*#__PURE__*/function (_dl) {
  function cb(t, e, n) {
    _classCallCheck(this, cb);
    return _callSuper(this, cb, [t, e, n, new lb(n, {
      id: yc(),
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      alpha: t.alpha,
      autosize: t.autosize,
      clipping: t.clipping,
      color: t.color,
      colorTop: t.colorTop,
      colorBottom: t.colorBottom,
      colorLeft: t.colorLeft,
      colorRight: t.colorRight,
      colorTl: t.colorTl,
      colorTr: t.colorTr,
      colorBl: t.colorBl,
      colorBr: t.colorBr,
      zIndex: t.zIndex,
      zIndexLocked: t.zIndexLocked,
      scaleX: t.scaleX,
      scaleY: t.scaleY,
      mountX: t.mountX,
      mountY: t.mountY,
      mount: t.mount,
      pivot: t.pivot,
      pivotX: t.pivotX,
      pivotY: t.pivotY,
      rotation: t.rotation,
      text: t.text,
      fontSize: t.fontSize,
      fontFamily: t.fontFamily,
      fontWeight: t.fontWeight,
      fontStretch: t.fontStretch,
      fontStyle: t.fontStyle,
      contain: t.contain,
      scrollable: t.scrollable,
      letterSpacing: t.letterSpacing,
      textAlign: t.textAlign,
      scrollY: t.scrollY,
      offsetY: t.offsetY,
      textRendererOverride: t.textRendererOverride,
      lineHeight: t.lineHeight,
      maxLines: t.maxLines,
      textBaseline: t.textBaseline,
      verticalAlign: t.verticalAlign,
      overflowSuffix: t.overflowSuffix,
      debug: t.debug,
      parent: null,
      texture: null,
      textureOptions: null,
      shader: null,
      shaderProps: null,
      rtt: !1
    })]);
  }
  _inherits(cb, _dl);
  return _createClass(cb, [{
    key: "text",
    get: function get() {
      return this.coreNode.text;
    },
    set: function set(t) {
      this.coreNode.text = t;
    }
  }, {
    key: "textRendererOverride",
    get: function get() {
      return this.coreNode.textRendererOverride;
    },
    set: function set(t) {
      this.coreNode.textRendererOverride = t;
    }
  }, {
    key: "fontSize",
    get: function get() {
      return this.coreNode.fontSize;
    },
    set: function set(t) {
      this.coreNode.fontSize = t;
    }
  }, {
    key: "fontFamily",
    get: function get() {
      return this.coreNode.fontFamily;
    },
    set: function set(t) {
      this.coreNode.fontFamily = t;
    }
  }, {
    key: "fontWeight",
    get: function get() {
      return this.coreNode.fontWeight;
    },
    set: function set(t) {
      this.coreNode.fontWeight = t;
    }
  }, {
    key: "fontStretch",
    get: function get() {
      return this.coreNode.fontStretch;
    },
    set: function set(t) {
      this.coreNode.fontStretch = t;
    }
  }, {
    key: "fontStyle",
    get: function get() {
      return this.coreNode.fontStyle;
    },
    set: function set(t) {
      this.coreNode.fontStyle = t;
    }
  }, {
    key: "textAlign",
    get: function get() {
      return this.coreNode.textAlign;
    },
    set: function set(t) {
      this.coreNode.textAlign = t;
    }
  }, {
    key: "contain",
    get: function get() {
      return this.coreNode.contain;
    },
    set: function set(t) {
      this.coreNode.contain = t;
    }
  }, {
    key: "scrollable",
    get: function get() {
      return this.coreNode.scrollable;
    },
    set: function set(t) {
      this.coreNode.scrollable = t;
    }
  }, {
    key: "scrollY",
    get: function get() {
      return this.coreNode.scrollY;
    },
    set: function set(t) {
      this.coreNode.scrollY = t;
    }
  }, {
    key: "offsetY",
    get: function get() {
      return this.coreNode.offsetY;
    },
    set: function set(t) {
      this.coreNode.offsetY = t;
    }
  }, {
    key: "letterSpacing",
    get: function get() {
      return this.coreNode.letterSpacing;
    },
    set: function set(t) {
      this.coreNode.letterSpacing = t;
    }
  }, {
    key: "lineHeight",
    get: function get() {
      return this.coreNode.lineHeight;
    },
    set: function set(t) {
      t && (this.coreNode.lineHeight = t);
    }
  }, {
    key: "maxLines",
    get: function get() {
      return this.coreNode.maxLines;
    },
    set: function set(t) {
      t && (this.coreNode.maxLines = t);
    }
  }, {
    key: "textBaseline",
    get: function get() {
      return this.coreNode.textBaseline;
    },
    set: function set(t) {
      t && (this.coreNode.textBaseline = t);
    }
  }, {
    key: "verticalAlign",
    get: function get() {
      return this.coreNode.verticalAlign;
    },
    set: function set(t) {
      t && (this.coreNode.verticalAlign = t);
    }
  }, {
    key: "overflowSuffix",
    get: function get() {
      return this.coreNode.overflowSuffix;
    },
    set: function set(t) {
      t && (this.coreNode.overflowSuffix = t);
    }
  }, {
    key: "debug",
    get: function get() {
      return this.coreNode.debug;
    },
    set: function set(t) {
      this.coreNode.debug = t;
    }
  }]);
}(dl);
var ub = /*#__PURE__*/function () {
  function ub() {
    _classCallCheck(this, ub);
    b(this, "root", null);
    b(this, "stage", null);
    b(this, "rendererMain", null);
  }
  return _createClass(ub, [{
    key: "init",
    value: function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(t, e, n) {
        var _this53 = this;
        var o;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.stage = new sb({
                rootId: yc(),
                appWidth: e.appWidth,
                appHeight: e.appHeight,
                txMemByteThreshold: e.txMemByteThreshold,
                boundsMargin: e.boundsMargin,
                deviceLogicalPixelRatio: e.deviceLogicalPixelRatio,
                devicePhysicalPixelRatio: e.devicePhysicalPixelRatio,
                clearColor: e.clearColor,
                canvas: n,
                fpsUpdateInterval: e.fpsUpdateInterval,
                enableContextSpy: e.enableContextSpy,
                numImageWorkers: e.numImageWorkers,
                renderMode: e.renderMode,
                debug: {
                  monitorTextureCache: !1
                }
              }), this.rendererMain = t, k(this.stage.root);
              o = new dl(t.resolveNodeDefaults({}), this.rendererMain, this.stage, this.stage.root);
              this.root = o;
              o.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, o));
              this.onCreateNode(o);
              _context10.t0 = e.coreExtensionModule;
              if (!_context10.t0) {
                _context10.next = 9;
                break;
              }
              _context10.next = 9;
              return Wx(e.coreExtensionModule, this.stage);
            case 9:
              this.stage.on("fpsUpdate", function (i, a) {
                _this53.onFpsUpdate(a);
              });
              this.stage.on("frameTick", function (i, a) {
                _this53.onFrameTick(a);
              });
              this.stage.on("idle", function () {
                _this53.onIdle();
              });
            case 12:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function init(_x7, _x8, _x9) {
        return _init2.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "createNode",
    value: function createNode(t) {
      k(this.rendererMain), k(this.stage);
      var e = new dl(t, this.rendererMain, this.stage);
      return e.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, e)), this.onCreateNode(e), e;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(t) {
      k(this.rendererMain), k(this.stage);
      var e = new cb(t, this.rendererMain, this.stage);
      return e.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, e)), this.onCreateNode(e), e;
    }
  }, {
    key: "destroyNode",
    value: function destroyNode(t) {
      t.destroy();
    }
  }, {
    key: "releaseTexture",
    value: function releaseTexture(t) {
      var e = this.stage;
      k(e), e.txManager.removeTextureIdFromCache(t);
    }
  }, {
    key: "getRootNode",
    value: function getRootNode() {
      return k(this.root), this.root;
    }
  }, {
    key: "onCreateNode",
    value: function onCreateNode(t) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onBeforeDestroyNode",
    value: function onBeforeDestroyNode(t) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onFpsUpdate",
    value: function onFpsUpdate(t) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onFrameTick",
    value: function onFrameTick(t) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onIdle",
    value: function onIdle() {
      throw new Error("Method not implemented.");
    }
  }]);
}();
var bt, xc;
function fb() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
  var e = new ub();
  return bt = new Hx(r, t, e), xc = bt.createShader.bind(bt), bt;
}
var db = /*#__PURE__*/function (_Array) {
  function db(t) {
    var _this54;
    _classCallCheck(this, db);
    _this54 = _callSuper(this, db), _this54._parent = t;
    return _this54;
  }
  _inherits(db, _Array);
  return _createClass(db, [{
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
    value: function insert(t, e) {
      if (e) {
        var n = this.indexOf(e);
        this.splice(n, 0, t);
      } else this.push(t);
      t.parent = this._parent;
    }
  }, {
    key: "remove",
    value: function remove(t) {
      var e = this.indexOf(t);
      e >= 0 && this.splice(e, 1);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Array));
function hb() {
  return !0 && !1;
}
var vb = hb() || !1,
  Me = {
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
function Hu(r) {
  return pb(r) && r.debug;
}
function ir(r, t) {
  var _console;
  for (var _len3 = arguments.length, e = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    e[_key3 - 2] = arguments[_key3];
  }
  vb && (Me.debug || Hu(t) || Hu(e[0])) && (_console = console).log.apply(_console, [r, t].concat(e));
}
var ko = function ko(r) {
  return r instanceof Function;
};
function pb(r) {
  return _typeof(r) == "object";
}
function Oi(r) {
  return Array.isArray(r);
}
function gb(r) {
  return typeof r == "string";
}
function mb(r) {
  return typeof r == "number";
}
function yb(r) {
  return Number.isInteger(r);
}
function xb(r, t) {
  var _iterator14 = _createForOfIteratorHelper(t),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var e = _step14.value;
      if (e in r) return !0;
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return !1;
}
function qp(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (Oi(r)) r.forEach(function (e) {
    qp(e, t);
  });else if (r) for (var e in r) t[e] === void 0 && r[e] && (t[e] = r[e]);
  return t;
}
var Yu = /*#__PURE__*/function (_Array2) {
  function Yu(t) {
    var _this55;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Yu);
    return _possibleConstructorReturn(_this55, (Oi(e) ? _this55 = _callSuper(this, Yu, _toConsumableArray(e)) : gb(e) ? _this55 = _callSuper(this, Yu, [e]) : _this55 = _callSuper(this, Yu, _toConsumableArray(Object.entries(e).filter(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
        n = _ref10[0],
        o = _ref10[1];
      return o;
    }).map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 1),
        n = _ref12[0];
      return n;
    }))), _this55.onChange = t, _assertThisInitialized(_this55)));
  }
  _inherits(Yu, _Array2);
  return _createClass(Yu, [{
    key: "has",
    value: function has(t) {
      return this.indexOf(t) >= 0;
    }
  }, {
    key: "is",
    value: function is(t) {
      return this.indexOf(t) >= 0;
    }
  }, {
    key: "add",
    value: function add(t) {
      this.push(t), this.onChange();
    }
  }, {
    key: "toggle",
    value: function toggle(t) {
      this.has(t) ? this.remove(t) : this.add(t);
    }
  }, {
    key: "remove",
    value: function remove(t) {
      var e = this.indexOf(t);
      e >= 0 && (this.splice(e, 1), this.onChange());
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Array));
var Mt = function (r) {
  return r[r.Element = 0] = "Element", r[r.TextNode = 1] = "TextNode", r[r.Text = 2] = "Text", r;
}(Mt || {});
function bb(r) {
  var t = [];
  var e = !1;
  for (var d = 0; d < r.children.length; d++) {
    var h = r.children[d];
    if (h.type !== Mt.Text && h.flexItem !== !1) {
      if (h.type === Mt.TextNode && h.text && !(h.width || h.height)) return !1;
      h.flexOrder !== void 0 && (e = !0), t.push(h);
    }
  }
  e && t.sort(function (d, h) {
    return (d.flexOrder || 0) - (h.flexOrder || 0);
  });
  var n = t.length,
    i = (r.flexDirection || "row") === "row",
    a = i ? "width" : "height",
    s = i ? "height" : "width",
    l = i ? "marginLeft" : "marginTop",
    c = i ? "marginRight" : "marginBottom",
    u = i ? "x" : "y",
    f = i ? "y" : "x",
    v = r[a] || 0,
    p = r[s] || 0,
    m = r.gap || 0,
    S = r.justifyContent || "flexStart",
    w = r.alignItems;
  var $ = 0;
  ["center", "spaceBetween", "spaceEvenly"].includes(S) && ($ = t.reduce(function (d, h) {
    return d + (h[a] || 0);
  }, 0));
  var y = p && w ? function (d) {
    w === "flexStart" ? d[f] = 0 : w === "center" ? d[f] = (p - (d[s] || 0)) / 2 : w === "flexEnd" && (d[f] = p - (d[s] || 0));
  } : function (d) {
    return d;
  };
  if (S === "flexStart") {
    var _d3 = 0;
    for (var _h2 = 0; _h2 < t.length; _h2++) {
      var g = t[_h2];
      g[u] = _d3 + (g[l] || 0), _d3 += (g[a] || 0) + m + (g[l] || 0) + (g[c] || 0), y(g);
    }
    if (r.flexBoundary !== "fixed") {
      var _h3 = _d3 - m;
      if (_h3 !== r[a]) return r[a] = _h3, !0;
    }
  } else if (S === "flexEnd") {
    var _d4 = v;
    for (var _h4 = n - 1; _h4 >= 0; _h4--) {
      var _g2 = t[_h4];
      k(_g2), _g2[u] = _d4 - (_g2[a] || 0) - (_g2[c] || 0), _d4 -= (_g2[a] || 0) + m + (_g2[l] || 0) + (_g2[c] || 0), y(_g2);
    }
  } else if (S === "center") {
    var _d5 = (v - ($ + m * (n - 1))) / 2;
    for (var _h5 = 0; _h5 < t.length; _h5++) {
      var _g3 = t[_h5];
      _g3[u] = _d5, _d5 += (_g3[a] || 0) + m, y(_g3);
    }
  } else if (S === "spaceBetween") {
    var _d6 = (v - $) / (n - 1);
    var _h6 = 0;
    for (var _g4 = 0; _g4 < t.length; _g4++) {
      var T = t[_g4];
      T[u] = _h6, _h6 += (T[a] || 0) + _d6, y(T);
    }
  } else if (S === "spaceEvenly") {
    var _d7 = (v - $) / (n + 1);
    var _h7 = _d7;
    for (var _g5 = 0; _g5 < t.length; _g5++) {
      var _T2 = t[_g5];
      _T2[u] = _h7, _h7 += (_T2[a] || 0) + _d7, y(_T2);
    }
  }
  return !1;
}
var $b = Me.animationSettings,
  Bo = new Set();
var za = !0;
function Ku(r) {
  var t = [];
  for (var _i7 = 0, _Object$entries2 = Object.entries(r); _i7 < _Object$entries2.length; _i7++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i7], 2),
      e = _Object$entries2$_i[0],
      n = _Object$entries2$_i[1];
    t.push({
      type: e,
      props: n
    });
  }
  return xc("DynamicShader", {
    effects: t
  });
}
function bn() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return {
    set: function set(t) {
      mb(t) && (t = {
        width: t,
        color: 255
      }), this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects || {}), {}, _defineProperty({}, "border".concat(r), t)) : _defineProperty({}, "border".concat(r), t);
    }
  };
}
var Sb = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"],
  wb = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"];
var tt = /*#__PURE__*/function (_Object) {
  function tt(t) {
    var _this56;
    _classCallCheck(this, tt);
    _this56 = _callSuper(this, tt), _this56._animationQueue = [], _this56._animationRunning = !1, _this56.type = t === "text" ? Mt.TextNode : Mt.Element, _this56.rendered = !1, _this56.lng = {}, _this56.children = new db(_assertThisInitialized(_this56));
    return _this56;
  }
  _inherits(tt, _Object);
  return _createClass(tt, [{
    key: "effects",
    get: function get() {
      return this._effects;
    },
    set: function set(t) {
      this._effects = t, this.rendered && (this.shader = Ku(t));
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(t) {
      var e;
      this._parent = t, this.rendered && (this.lng.parent = (e = t == null ? void 0 : t.lng) != null ? e : null);
    }
  }, {
    key: "shader",
    set: function set(t) {
      Oi(t) && (t = xc.apply(void 0, _toConsumableArray(t))), this.lng.shader = t;
    }
  }, {
    key: "_sendToLightningAnimatable",
    value: function _sendToLightningAnimatable(t, e) {
      if (this.rendered && Me.animationsEnabled && this.transition && (this.transition === !0 || this.transition[t])) {
        var n = this.transition === !0 || this.transition[t] === !0 ? void 0 : this.transition[t];
        return this.animate(_defineProperty({}, t, e), n).start();
      }
      this.lng[t] = e;
    }
  }, {
    key: "animate",
    value: function animate(t, e) {
      return k(this.rendered, "Node must be rendered before animating"), this.lng.animate(t, e || this.animationSettings);
    }
  }, {
    key: "chain",
    value: function chain(t, e) {
      return this._animationRunning && (this._animationQueue = [], this._animationRunning = !1), e ? this._animationQueueSettings = e : this._animationQueueSettings || (this._animationQueueSettings = e || this.animationSettings), e = e || this._animationQueueSettings, this._animationQueue.push({
        props: t,
        animationSettings: e
      }), this;
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var t;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              t = this._animationQueue.shift();
            case 1:
              if (!t) {
                _context11.next = 8;
                break;
              }
              this._animationRunning = !0;
              _context11.next = 5;
              return this.animate(t.props, t.animationSettings).start().waitUntilStopped();
            case 5:
              t = this._animationQueue.shift();
            case 6:
              _context11.next = 1;
              break;
            case 8:
              this._animationRunning = !1, this._animationQueueSettings = void 0;
            case 9:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "setFocus",
    value: function setFocus() {
      var _this57 = this;
      if (this.rendered) {
        if (this.forwardFocus !== void 0) if (ko(this.forwardFocus)) {
          if (this.forwardFocus.call(this, this) !== !1) return;
        } else {
          var t = typeof this.forwardFocus == "number" ? this.forwardFocus : null;
          if (t !== null && t < this.children.length) {
            var e = this.children[t];
            e instanceof tt && e.setFocus();
            return;
          }
        }
        queueMicrotask(function () {
          return vx(_this57);
        });
      } else this.autofocus = !0;
    }
  }, {
    key: "isTextNode",
    value: function isTextNode() {
      return this.type === Mt.TextNode;
    }
  }, {
    key: "_layoutOnLoad",
    value: function _layoutOnLoad() {
      var _this58 = this;
      this.lng.on("loaded", function (t, e) {
        var n = e.dimensions;
        _this58.parent.updateLayout(_this58, n);
      });
    }
  }, {
    key: "getText",
    value: function getText() {
      var t = "";
      for (var e = 0; e < this.children.length; e++) t += this.children[e].text;
      return t;
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
    set: function set(t) {
      this._events = t;
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    },
    set: function set(t) {
      Oi(t) ? this._style = qp(t) : this._style = t;
      for (var e in this._style) this[e] === void 0 && (this[e] = this._style[e]);
    }
  }, {
    key: "hasChildren",
    get: function get() {
      return this.children.length > 0;
    }
  }, {
    key: "getChildById",
    value: function getChildById(t) {
      return this.children.find(function (e) {
        return e.id === t;
      });
    }
  }, {
    key: "searchChildrenById",
    value: function searchChildrenById(t) {
      for (var e = 0; e < this.children.length; e++) {
        var n = this.children[e];
        if (n instanceof tt) {
          if (n.id === t) return n;
          var o = n.searchChildrenById(t);
          if (o) return o;
        }
      }
    }
  }, {
    key: "states",
    get: function get() {
      return this._states = this._states || new Yu(this._stateChanged.bind(this)), this._states;
    },
    set: function set(t) {
      this._states = new Yu(this._stateChanged.bind(this), t), this.rendered && this._stateChanged();
    }
  }, {
    key: "animationSettings",
    get: function get() {
      return this._animationSettings || $b;
    },
    set: function set(t) {
      this._animationSettings = t;
    }
  }, {
    key: "requiresLayout",
    value: function requiresLayout() {
      return this.display === "flex" || this.onBeforeLayout;
    }
  }, {
    key: "updateLayout",
    value: function updateLayout(t, e) {
      var n, o;
      if (this.hasChildren) {
        ir("Layout: ", this);
        var i = !1;
        ko(this.onBeforeLayout) && (i = this.onBeforeLayout.call(this, this, t, e) || !1), this.display === "flex" ? (bb(this) || i) && ((n = this.parent) == null || n.updateLayout()) : i && ((o = this.parent) == null || o.updateLayout()), ko(this.onLayout) && this.onLayout.call(this, this, t, e);
      }
    }
  }, {
    key: "_stateChanged",
    value: function _stateChanged() {
      var _this59 = this;
      if (ir("State Changed: ", this, this.states), this.forwardStates) {
        var e = this.states.slice();
        this.children.forEach(function (n) {
          return n.states = e;
        });
      }
      var t = this.states;
      if (this._undoStyles || this.style && xb(this.style, t)) {
        this._undoStyles = this._undoStyles || [];
        var _e9 = {};
        this._undoStyles.forEach(function (o) {
          _e9[o] = _this59.style[o];
        });
        var n = t.reduce(function (o, i) {
          var a = _this59.style[i];
          return a && (o = _objectSpread(_objectSpread({}, o), a)), o;
        }, {});
        this._undoStyles = Object.keys(n), n.transition !== void 0 && (this.transition = n.transition), Object.assign(this, _e9, n);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var o;
      var t = this,
        e = this.parent;
      if (!e) {
        console.warn("Parent not set - no node created for: ", this);
        return;
      }
      if (!e.rendered) {
        console.warn("Parent not rendered yet: ", this);
        return;
      }
      if (this.rendered) {
        console.warn("Node already rendered: ", this);
        return;
      }
      e.requiresLayout() && !Bo.has(e) && (Bo.add(e), za && (za = !1, queueMicrotask(function () {
        za = !0;
        var i = _toConsumableArray(Bo);
        Bo.clear();
        for (var a = i.length - 1; a >= 0; a--) i[a].updateLayout();
      }))), this.states.length && this._stateChanged();
      var n = t.lng;
      if (n.x = n.x || 0, n.y = n.y || 0, e.rendered && (n.parent = e.lng), t._effects && (n.shader = Ku(t._effects)), t.isTextNode()) {
        if (Me.fontSettings) for (var i in Me.fontSettings) n[i] === void 0 && (n[i] = Me.fontSettings[i]);
        n.text = t.getText(), n.textAlign && !n.contain && console.warn("Text align requires contain: ", t.getText()), n.contain && (n.width || (n.width = (e.width || 0) - n.x - (n.marginRight || 0)), n.contain === "both" && !n.height && !n.maxLines ? n.height = (e.height || 0) - n.y - (n.marginBottom || 0) : n.maxLines === 1 && (n.height = n.height || n.lineHeight || n.fontSize)), ir("Rendering: ", this, n), t.lng = bt.createTextNode(n), e.requiresLayout() && (!n.width || !n.height) && t._layoutOnLoad();
      } else n.texture || (isNaN(n.width) && (n.width = (e.width || 0) - n.x), isNaN(n.height) && (n.height = (e.height || 0) - n.y), n.rtt && !n.color && (n.color = 4294967295), !n.color && !n.src && (n.color = 0)), ir("Rendering: ", this, n), t.lng = bt.createNode(n);
      if (t.rendered = !0, t.autosize && e.requiresLayout() && t._layoutOnLoad(), t.onFail && t.lng.on("failed", t.onFail), t.onLoad && t.lng.on("loaded", t.onLoad), ko(this.onCreate) && this.onCreate.call(this, t), t.onEvents && t.onEvents.forEach(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
          i = _ref15[0],
          a = _ref15[1];
        t.lng.on(i, function (s, l) {
          return a(t, l);
        });
      }), (o = t.lng) != null && o.div && (t.lng.div.element = t), t.type === Mt.Element) for (var _i8 = 0; _i8 < t.children.length; _i8++) {
        var a = t.children[_i8];
        k(a, "Child is undefined"), "render" in a ? a.render() : a.text && console.warn("TextNode outside of <Text>: ", a);
      }
      t.autofocus && t.setFocus();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Object));
var _loop2 = function _loop2() {
  var r = _Sb[_i9];
  Object.defineProperty(tt.prototype, r, {
    get: function get() {
      return this.lng[r];
    },
    set: function set(t) {
      this._sendToLightningAnimatable(r, t);
    }
  });
};
for (var _i9 = 0, _Sb = Sb; _i9 < _Sb.length; _i9++) {
  _loop2();
}
var _loop3 = function _loop3() {
  var r = _wb[_i10];
  Object.defineProperty(tt.prototype, r, {
    get: function get() {
      return this.lng[r];
    },
    set: function set(t) {
      this.lng[r] = t;
    }
  });
};
for (var _i10 = 0, _wb = wb; _i10 < _wb.length; _i10++) {
  _loop3();
}
Object.defineProperties(tt.prototype, {
  borderRadius: {
    set: function set(r) {
      this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects), {}, {
        radius: {
          radius: r
        }
      }) : {
        radius: {
          radius: r
        }
      };
    }
  },
  border: bn(),
  borderLeft: bn("Left"),
  borderRight: bn("Right"),
  borderTop: bn("Top"),
  borderBottom: bn("Bottom")
});
Object.defineProperties(tt.prototype, {
  linearGradient: {
    set: function set() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects), {}, {
        linearGradient: r
      }) : {
        linearGradient: r
      };
    }
  }
});
var oe = function oe(r) {
    return function () {
      var t = ea("text");
      return $c(t, r, !1), t;
    }();
  },
  H = function H(r) {
    return function () {
      var t = ea("node");
      return $c(t, r, !1), t;
    }();
  };
function Tb(_ref16) {
  var r = _ref16.createElement,
    t = _ref16.createTextNode,
    e = _ref16.isTextNode,
    n = _ref16.replaceText,
    o = _ref16.insertNode,
    i = _ref16.removeNode,
    a = _ref16.setProperty,
    s = _ref16.getParentNode,
    l = _ref16.getFirstChild,
    c = _ref16.getNextSibling;
  function u(y, d, h, g) {
    if (h !== void 0 && !g && (g = []), typeof d != "function") return f(y, d, g, h);
    ct(function (T) {
      return f(y, d(), T, h);
    }, g);
  }
  function f(y, d, h, g, T) {
    for (; typeof h == "function";) h = h();
    if (d === h) return h;
    var I = _typeof(d),
      C = g !== void 0;
    if (I === "string" || I === "number") {
      if (I === "number" && (d = d.toString()), C) {
        var A = h[0];
        A && e(A) ? n(A, d) : A = t(d), h = m(y, h, g, A);
      } else h !== "" && typeof h == "string" ? n(l(y), h = d) : (m(y, h, g, t(d)), h = d);
    } else if (d == null || I === "boolean") h = m(y, h, g);else {
      if (I === "function") return ct(function () {
        var A = d();
        for (; typeof A == "function";) A = A();
        h = f(y, A, h, g);
      }), function () {
        return h;
      };
      if (Array.isArray(d)) {
        var _A8 = [];
        if (v(_A8, d, T)) return ct(function () {
          return h = f(y, _A8, h, g, !0);
        }), function () {
          return h;
        };
        if (_A8.length === 0) {
          var O = m(y, h, g);
          if (C) return h = O;
        } else Array.isArray(h) ? h.length === 0 ? S(y, _A8, g) : p(y, h, _A8) : h == null || h === "" ? S(y, _A8) : p(y, C && h || [l(y)], _A8);
        h = _A8;
      } else {
        if (Array.isArray(h)) {
          if (C) return h = m(y, h, g, d);
          m(y, h, null, d);
        } else h == null || h === "" || !l(y) ? o(y, d) : w(y, d, l(y));
        h = d;
      }
    }
    return h;
  }
  function v(y, d, h) {
    var g = !1;
    for (var T = 0, I = d.length; T < I; T++) {
      var C = d[T],
        A = void 0;
      if (!(C == null || C === !0 || C === !1)) if (Array.isArray(C)) g = v(y, C) || g;else if ((A = _typeof(C)) == "string" || A === "number") y.push(t(C));else if (A === "function") {
        if (h) {
          for (; typeof C == "function";) C = C();
          g = v(y, Array.isArray(C) ? C : [C]) || g;
        } else y.push(C), g = !0;
      } else y.push(C);
    }
    return g;
  }
  function p(y, d, h) {
    var g = h.length,
      T = d.length,
      I = g,
      C = 0,
      A = 0,
      O = c(d[T - 1]),
      N = null;
    for (; C < T || A < I;) {
      if (d[C] === h[A]) {
        C++, A++;
        continue;
      }
      for (; d[T - 1] === h[I - 1];) T--, I--;
      if (T === C) {
        var _ = I < g ? A ? c(h[A - 1]) : h[I - A] : O;
        for (; A < I;) o(y, h[A++], _);
      } else if (I === A) for (; C < T;) (!N || !N.has(d[C])) && i(y, d[C]), C++;else if (d[C] === h[I - 1] && h[A] === d[T - 1]) {
        var _7 = c(d[--T]);
        o(y, h[A++], c(d[C++])), o(y, h[--I], _7), d[T] = h[I];
      } else {
        if (!N) {
          N = new Map();
          var F = A;
          for (; F < I;) N.set(h[F], F++);
        }
        var _9 = N.get(d[C]);
        if (_9 != null) {
          if (A < _9 && _9 < I) {
            var _F2 = C,
              L = 1,
              D = void 0;
            for (; ++_F2 < T && _F2 < I && !((D = N.get(d[_F2])) == null || D !== _9 + L);) L++;
            if (L > _9 - A) {
              var j = d[C];
              for (; A < _9;) o(y, h[A++], j);
            } else w(y, h[A++], d[C++]);
          } else C++;
        } else i(y, d[C++]);
      }
    }
  }
  function m(y, d, h, g) {
    if (h === void 0) {
      var I;
      for (; I = l(y);) i(y, I);
      return g && o(y, g), "";
    }
    var T = g || t("");
    if (d.length) {
      var _I2 = !1;
      for (var C = d.length - 1; C >= 0; C--) {
        var A = d[C];
        if (T !== A) {
          var O = s(A) === y;
          !_I2 && !C ? O ? w(y, T, A) : o(y, T, h) : O && i(y, A);
        } else _I2 = !0;
      }
    } else o(y, T, h);
    return [T];
  }
  function S(y, d, h) {
    for (var g = 0, T = d.length; g < T; g++) o(y, d[g], h);
  }
  function w(y, d, h) {
    o(y, d, h), i(y, h);
  }
  function $(y, d) {
    var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var g = arguments.length > 3 ? arguments[3] : undefined;
    return d || (d = {}), g || ct(function () {
      return h.children = f(y, d.children, h.children);
    }), ct(function () {
      return d.ref && d.ref(y);
    }), ct(function () {
      for (var T in d) {
        if (T === "children" || T === "ref") continue;
        var I = d[T];
        I !== h[T] && (a(y, T, I, h[T]), h[T] = I);
      }
    }), h;
  }
  return {
    render: function render(y, d) {
      var h;
      return Ut(function (g) {
        h = g, u(d, y());
      }), h;
    },
    insert: u,
    spread: function spread(y, d, h) {
      typeof d == "function" ? ct(function (g) {
        return $(y, d(), g, h);
      }) : $(y, d, void 0, h);
    },
    createElement: r,
    createTextNode: t,
    insertNode: o,
    setProp: function setProp(y, d, h, g) {
      return a(y, d, h, g), h;
    },
    mergeProps: vc,
    effect: ct,
    memo: ie,
    createComponent: jp,
    use: function use(y, d, h) {
      return me(function () {
        return y(d, h);
      });
    }
  };
}
function Ib(r) {
  var t = Tb(r);
  return t.mergeProps = vc, t;
}
var Jp = {
    createElement: function createElement(r) {
      return new tt(r);
    },
    createTextNode: function createTextNode(r) {
      return {
        type: Mt.Text,
        text: r,
        parent: void 0
      };
    },
    replaceText: function replaceText(r, t) {
      ir("Replace Text: ", r, t), r.text = t;
      var e = r.parent;
      k(e), e.text = e.getText();
    },
    setProperty: function setProperty(r, t) {
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      r[t] = e;
    },
    insertNode: function insertNode(r, t, e) {
      ir("INSERT: ", r, t, e), r.children.insert(t, e), t._queueDelete = !1, t instanceof tt ? r.rendered && t.render() : r.isTextNode() && (r.text = r.getText());
    },
    isTextNode: function isTextNode(r) {
      return r.isTextNode();
    },
    removeNode: function removeNode(r, t) {
      ir("REMOVE: ", r, t), r.children.remove(t), t._queueDelete = !0, t instanceof tt && queueMicrotask(function () {
        return t.destroy();
      });
    },
    getParentNode: function getParentNode(r) {
      return r.parent;
    },
    getFirstChild: function getFirstChild(r) {
      return r.children[0];
    },
    getNextSibling: function getNextSibling(r) {
      var t = r.parent.children || [],
        e = t.indexOf(r) + 1;
      if (e < t.length) return t[e];
    }
  },
  Zp = Ib(Jp);
var _i;
function Ab(_x10, _x11) {
  return _Ab.apply(this, arguments);
}
function _Ab() {
  _Ab = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(r, t) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _i = fb(r || Me.rendererOptions, t || "app");
          _context16.next = 3;
          return _i.init();
        case 3:
          return _context16.abrupt("return", _context16.sent);
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _Ab.apply(this, arguments);
}
var Eb = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(r, t) {
      var e;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            e = Jp.createElement("App");
            _context12.next = 3;
            return Ab(void 0, t);
          case 3:
            e.lng = _i.root;
            e.rendered = !0;
            return _context12.abrupt("return", {
              dispose: Zp.render(r, e),
              rootNode: e,
              renderer: _i
            });
          case 6:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function Eb(_x12, _x13) {
      return _ref13.apply(this, arguments);
    };
  }(),
  cK = Zp.effect,
  bc = Zp.memo,
  R = Zp.createComponent,
  ea = Zp.createElement,
  uK = Zp.createTextNode,
  fK = Zp.insertNode,
  Cb = Zp.insert,
  $c = Zp.spread,
  Rb = Zp.setProp,
  Ue = Zp.mergeProps,
  Ob = Zp.use;
function ge() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return yb(r) ? r : typeof r == "string" ? r.startsWith("#") ? +(r.replace("#", "0x") + (r.length === 7 ? "ff" : "")) : r.startsWith("0x") ? Number(r) : +("0x" + (r.length === 6 ? r + "ff" : r)) : 0;
}
var De = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : {},
  B = function B(r) {
    try {
      return !!r();
    } catch (t) {
      return !0;
    }
  },
  _b = B,
  Zn = !_b(function () {
    var r = function () {}.bind();
    return typeof r != "function" || r.hasOwnProperty("prototype");
  }),
  eg = Zn,
  tg = Function.prototype,
  vl = tg.call,
  Pb = eg && tg.bind.bind(vl, vl),
  M = eg ? Pb : function (r) {
    return function () {
      return vl.apply(r, arguments);
    };
  },
  rg = M,
  Nb = rg({}.toString),
  Lb = rg("".slice),
  ze = function ze(r) {
    return Lb(Nb(r), 8, -1);
  },
  Fb = M,
  kb = B,
  Bb = ze,
  Wa = Object,
  Mb = Fb("".split),
  sn = kb(function () {
    return !Wa("z").propertyIsEnumerable(0);
  }) ? function (r) {
    return Bb(r) === "String" ? Mb(r, "") : Wa(r);
  } : Wa,
  Je = function Je(r) {
    return r == null;
  },
  Db = Je,
  jb = TypeError,
  re = function re(r) {
    if (Db(r)) throw new jb("Can't call method on " + r);
    return r;
  },
  Ub = sn,
  zb = re,
  we = function we(r) {
    return Ub(zb(r));
  },
  $n = function $n(r) {
    return r && r.Math === Math && r;
  },
  z = $n((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || $n((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || $n((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || $n(_typeof(De) == "object" && De) || $n(_typeof(De) == "object" && De) || function () {
    return this;
  }() || Function("return this")(),
  ng = {
    exports: {}
  },
  og = !1,
  Gu = z,
  Wb = Object.defineProperty,
  Sc = function Sc(r, t) {
    try {
      Wb(Gu, r, {
        value: t,
        configurable: !0,
        writable: !0
      });
    } catch (e) {
      Gu[r] = t;
    }
    return t;
  },
  Hb = z,
  Yb = Sc,
  Vu = "__core-js_shared__",
  Xu = ng.exports = Hb[Vu] || Yb(Vu, {});
(Xu.versions || (Xu.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var wc = ng.exports,
  Qu = wc,
  ln = function ln(r, t) {
    return Qu[r] || (Qu[r] = t || {});
  },
  Kb = re,
  Gb = Object,
  ee = function ee(r) {
    return Gb(Kb(r));
  },
  Vb = M,
  Xb = ee,
  Qb = Vb({}.hasOwnProperty),
  he = Object.hasOwn || function (t, e) {
    return Qb(Xb(t), e);
  },
  qb = M,
  Jb = 0,
  Zb = Math.random(),
  e$ = qb(1 .toString),
  ta = function ta(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + e$(++Jb + Zb, 36);
  },
  t$ = z,
  qu = t$.navigator,
  Ju = qu && qu.userAgent,
  Tt = Ju ? String(Ju) : "",
  ig = z,
  Ha = Tt,
  Zu = ig.process,
  ef = ig.Deno,
  tf = Zu && Zu.versions || ef && ef.version,
  rf = tf && tf.v8,
  et,
  Pi;
rf && (et = rf.split("."), Pi = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1]));
!Pi && Ha && (et = Ha.match(/Edge\/(\d+)/), (!et || et[1] >= 74) && (et = Ha.match(/Chrome\/(\d+)/), et && (Pi = +et[1])));
var hr = Pi,
  nf = hr,
  r$ = B,
  n$ = z,
  o$ = n$.String,
  cn = !!Object.getOwnPropertySymbols && !r$(function () {
    var r = Symbol("symbol detection");
    return !o$(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && nf && nf < 41;
  }),
  i$ = cn,
  ag = i$ && !Symbol.sham && _typeof(Symbol.iterator) == "symbol",
  a$ = z,
  s$ = ln,
  of = he,
  l$ = ta,
  c$ = cn,
  u$ = ag,
  zr = a$.Symbol,
  Ya = s$("wks"),
  f$ = u$ ? zr["for"] || zr : zr && zr.withoutSetter || l$,
  J = function J(r) {
    return of(Ya, r) || (Ya[r] = c$ && of(zr, r) ? zr[r] : f$("Symbol." + r)), Ya[r];
  },
  Ka = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all,
  Q = _typeof(Ka) > "u" && Ka !== void 0 ? function (r) {
    return typeof r == "function" || r === Ka;
  } : function (r) {
    return typeof r == "function";
  },
  d$ = Q,
  Z = function Z(r) {
    return _typeof(r) == "object" ? r !== null : d$(r);
  },
  h$ = Z,
  v$ = String,
  p$ = TypeError,
  ye = function ye(r) {
    if (h$(r)) return r;
    throw new p$(v$(r) + " is not an object");
  },
  ra = {},
  g$ = B,
  Y = !g$(function () {
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  }),
  m$ = Y,
  y$ = B,
  sg = m$ && y$(function () {
    return Object.defineProperty(function () {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }),
  Te = {},
  x$ = z,
  af = Z,
  pl = x$.document,
  b$ = af(pl) && af(pl.createElement),
  Tc = function Tc(r) {
    return b$ ? pl.createElement(r) : {};
  },
  $$ = Y,
  S$ = B,
  w$ = Tc,
  lg = !$$ && !S$(function () {
    return Object.defineProperty(w$("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  }),
  T$ = Zn,
  Mo = Function.prototype.call,
  K = T$ ? Mo.bind(Mo) : function () {
    return Mo.apply(Mo, arguments);
  },
  Ga = z,
  I$ = Q,
  A$ = function A$(r) {
    return I$(r) ? r : void 0;
  },
  Pe = function Pe(r, t) {
    return arguments.length < 2 ? A$(Ga[r]) : Ga[r] && Ga[r][t];
  },
  E$ = M,
  It = E$({}.isPrototypeOf),
  C$ = Pe,
  R$ = Q,
  O$ = It,
  _$ = ag,
  P$ = Object,
  eo = _$ ? function (r) {
    return _typeof(r) == "symbol";
  } : function (r) {
    var t = C$("Symbol");
    return R$(t) && O$(t.prototype, P$(r));
  },
  N$ = String,
  un = function un(r) {
    try {
      return N$(r);
    } catch (t) {
      return "Object";
    }
  },
  L$ = Q,
  F$ = un,
  k$ = TypeError,
  ve = function ve(r) {
    if (L$(r)) return r;
    throw new k$(F$(r) + " is not a function");
  },
  B$ = ve,
  M$ = Je,
  At = function At(r, t) {
    var e = r[t];
    return M$(e) ? void 0 : B$(e);
  },
  Va = K,
  Xa = Q,
  Qa = Z,
  D$ = TypeError,
  j$ = function j$(r, t) {
    var e, n;
    if (t === "string" && Xa(e = r.toString) && !Qa(n = Va(e, r)) || Xa(e = r.valueOf) && !Qa(n = Va(e, r)) || t !== "string" && Xa(e = r.toString) && !Qa(n = Va(e, r))) return n;
    throw new D$("Can't convert object to primitive value");
  },
  U$ = K,
  sf = Z,
  lf = eo,
  z$ = At,
  W$ = j$,
  H$ = J,
  Y$ = TypeError,
  K$ = H$("toPrimitive"),
  cg = function cg(r, t) {
    if (!sf(r) || lf(r)) return r;
    var e = z$(r, K$),
      n;
    if (e) {
      if (t === void 0 && (t = "default"), n = U$(e, r, t), !sf(n) || lf(n)) return n;
      throw new Y$("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), W$(r, t);
  },
  G$ = cg,
  V$ = eo,
  fn = function fn(r) {
    var t = G$(r, "string");
    return V$(t) ? t : t + "";
  },
  X$ = Y,
  Q$ = lg,
  q$ = sg,
  Do = ye,
  cf = fn,
  J$ = TypeError,
  qa = Object.defineProperty,
  Z$ = Object.getOwnPropertyDescriptor,
  Ja = "enumerable",
  Za = "configurable",
  es = "writable";
Te.f = X$ ? q$ ? function (t, e, n) {
  if (Do(t), e = cf(e), Do(n), typeof t == "function" && e === "prototype" && "value" in n && es in n && !n[es]) {
    var o = Z$(t, e);
    o && o[es] && (t[e] = n.value, n = {
      configurable: Za in n ? n[Za] : o[Za],
      enumerable: Ja in n ? n[Ja] : o[Ja],
      writable: !1
    });
  }
  return qa(t, e, n);
} : qa : function (t, e, n) {
  if (Do(t), e = cf(e), Do(n), Q$) try {
    return qa(t, e, n);
  } catch (o) {}
  if ("get" in n || "set" in n) throw new J$("Accessors not supported");
  return "value" in n && (t[e] = n.value), t;
};
var eS = Math.ceil,
  tS = Math.floor,
  rS = Math.trunc || function (t) {
    var e = +t;
    return (e > 0 ? tS : eS)(e);
  },
  nS = rS,
  Ce = function Ce(r) {
    var t = +r;
    return t !== t || t === 0 ? 0 : nS(t);
  },
  oS = Ce,
  iS = Math.max,
  aS = Math.min,
  vr = function vr(r, t) {
    var e = oS(r);
    return e < 0 ? iS(e + t, 0) : aS(e, t);
  },
  sS = Ce,
  lS = Math.min,
  Ht = function Ht(r) {
    var t = sS(r);
    return t > 0 ? lS(t, 9007199254740991) : 0;
  },
  cS = Ht,
  ne = function ne(r) {
    return cS(r.length);
  },
  uS = we,
  fS = vr,
  dS = ne,
  uf = function uf(r) {
    return function (t, e, n) {
      var o = uS(t),
        i = dS(o);
      if (i === 0) return !r && -1;
      var a = fS(n, i),
        s;
      if (r && e !== e) {
        for (; i > a;) if (s = o[a++], s !== s) return !0;
      } else for (; i > a; a++) if ((r || a in o) && o[a] === e) return r || a || 0;
      return !r && -1;
    };
  },
  Ic = {
    includes: uf(!0),
    indexOf: uf(!1)
  },
  to = {},
  hS = M,
  ts = he,
  vS = we,
  pS = Ic.indexOf,
  gS = to,
  ff = hS([].push),
  ug = function ug(r, t) {
    var e = vS(r),
      n = 0,
      o = [],
      i;
    for (i in e) !ts(gS, i) && ts(e, i) && ff(o, i);
    for (; t.length > n;) ts(e, i = t[n++]) && (~pS(o, i) || ff(o, i));
    return o;
  },
  Ac = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  mS = ug,
  yS = Ac,
  ro = Object.keys || function (t) {
    return mS(t, yS);
  },
  xS = Y,
  bS = sg,
  $S = Te,
  SS = ye,
  wS = we,
  TS = ro;
ra.f = xS && !bS ? Object.defineProperties : function (t, e) {
  SS(t);
  for (var n = wS(e), o = TS(e), i = o.length, a = 0, s; i > a;) $S.f(t, s = o[a++], n[s]);
  return t;
};
var IS = Pe,
  fg = IS("document", "documentElement"),
  AS = ln,
  ES = ta,
  df = AS("keys"),
  na = function na(r) {
    return df[r] || (df[r] = ES(r));
  },
  CS = ye,
  RS = ra,
  hf = Ac,
  OS = to,
  _S = fg,
  PS = Tc,
  NS = na,
  vf = ">",
  pf = "<",
  gl = "prototype",
  ml = "script",
  dg = NS("IE_PROTO"),
  rs = function rs() {},
  hg = function hg(r) {
    return pf + ml + vf + r + pf + "/" + ml + vf;
  },
  gf = function gf(r) {
    r.write(hg("")), r.close();
    var t = r.parentWindow.Object;
    return r = null, t;
  },
  LS = function LS() {
    var r = PS("iframe"),
      t = "java" + ml + ":",
      e;
    return r.style.display = "none", _S.appendChild(r), r.src = String(t), e = r.contentWindow.document, e.open(), e.write(hg("document.F=Object")), e.close(), e.F;
  },
  jo,
  _gi = function gi() {
    try {
      jo = new ActiveXObject("htmlfile");
    } catch (t) {}
    _gi = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && jo ? gf(jo) : LS() : gf(jo);
    for (var r = hf.length; r--;) delete _gi[gl][hf[r]];
    return _gi();
  };
OS[dg] = !0;
var pr = Object.create || function (t, e) {
    var n;
    return t !== null ? (rs[gl] = CS(t), n = new rs(), rs[gl] = null, n[dg] = t) : n = _gi(), e === void 0 ? n : RS.f(n, e);
  },
  FS = J,
  kS = pr,
  BS = Te.f,
  yl = FS("unscopables"),
  xl = Array.prototype;
xl[yl] === void 0 && BS(xl, yl, {
  configurable: !0,
  value: kS(null)
});
var ke = function ke(r) {
    xl[yl][r] = !0;
  },
  no = {},
  MS = z,
  DS = Q,
  mf = MS.WeakMap,
  jS = DS(mf) && /native code/.test(String(mf)),
  gr = function gr(r, t) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: t
    };
  },
  US = Y,
  zS = Te,
  WS = gr,
  mr = US ? function (r, t, e) {
    return zS.f(r, t, WS(1, e));
  } : function (r, t, e) {
    return r[t] = e, r;
  },
  HS = jS,
  vg = z,
  YS = Z,
  KS = mr,
  ns = he,
  os = wc,
  GS = na,
  VS = to,
  yf = "Object already initialized",
  bl = vg.TypeError,
  XS = vg.WeakMap,
  Ni,
  Gn,
  Li,
  QS = function QS(r) {
    return Li(r) ? Gn(r) : Ni(r, {});
  },
  qS = function qS(r) {
    return function (t) {
      var e;
      if (!YS(t) || (e = Gn(t)).type !== r) throw new bl("Incompatible receiver, " + r + " required");
      return e;
    };
  };
if (HS || os.state) {
  var at = os.state || (os.state = new XS());
  at.get = at.get, at.has = at.has, at.set = at.set, Ni = function Ni(r, t) {
    if (at.has(r)) throw new bl(yf);
    return t.facade = r, at.set(r, t), t;
  }, Gn = function Gn(r) {
    return at.get(r) || {};
  }, Li = function Li(r) {
    return at.has(r);
  };
} else {
  var Tr = GS("state");
  VS[Tr] = !0, Ni = function Ni(r, t) {
    if (ns(r, Tr)) throw new bl(yf);
    return t.facade = r, KS(r, Tr, t), t;
  }, Gn = function Gn(r) {
    return ns(r, Tr) ? r[Tr] : {};
  }, Li = function Li(r) {
    return ns(r, Tr);
  };
}
var Yt = {
    set: Ni,
    get: Gn,
    has: Li,
    enforce: QS,
    getterFor: qS
  },
  nt = {},
  oo = {},
  pg = {}.propertyIsEnumerable,
  gg = Object.getOwnPropertyDescriptor,
  JS = gg && !pg.call({
    1: 2
  }, 1);
oo.f = JS ? function (t) {
  var e = gg(this, t);
  return !!e && e.enumerable;
} : pg;
var ZS = Y,
  ew = K,
  tw = oo,
  rw = gr,
  nw = we,
  ow = fn,
  iw = he,
  aw = lg,
  xf = Object.getOwnPropertyDescriptor;
nt.f = ZS ? xf : function (t, e) {
  if (t = nw(t), e = ow(e), aw) try {
    return xf(t, e);
  } catch (n) {}
  if (iw(t, e)) return rw(!ew(tw.f, t, e), t[e]);
};
var mg = {
    exports: {}
  },
  $l = Y,
  sw = he,
  yg = Function.prototype,
  lw = $l && Object.getOwnPropertyDescriptor,
  Ec = sw(yg, "name"),
  cw = Ec && function () {}.name === "something",
  uw = Ec && (!$l || $l && lw(yg, "name").configurable),
  oa = {
    EXISTS: Ec,
    PROPER: cw,
    CONFIGURABLE: uw
  },
  fw = M,
  dw = Q,
  Sl = wc,
  hw = fw(Function.toString);
dw(Sl.inspectSource) || (Sl.inspectSource = function (r) {
  return hw(r);
});
var Cc = Sl.inspectSource,
  Rc = M,
  vw = B,
  pw = Q,
  Uo = he,
  wl = Y,
  gw = oa.CONFIGURABLE,
  mw = Cc,
  xg = Yt,
  yw = xg.enforce,
  xw = xg.get,
  bf = String,
  mi = Object.defineProperty,
  bw = Rc("".slice),
  $w = Rc("".replace),
  Sw = Rc([].join),
  ww = wl && !vw(function () {
    return mi(function () {}, "length", {
      value: 8
    }).length !== 8;
  }),
  Tw = String(String).split("String"),
  Iw = mg.exports = function (r, t, e) {
    bw(bf(t), 0, 7) === "Symbol(" && (t = "[" + $w(bf(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!Uo(r, "name") || gw && r.name !== t) && (wl ? mi(r, "name", {
      value: t,
      configurable: !0
    }) : r.name = t), ww && e && Uo(e, "arity") && r.length !== e.arity && mi(r, "length", {
      value: e.arity
    });
    try {
      e && Uo(e, "constructor") && e.constructor ? wl && mi(r, "prototype", {
        writable: !1
      }) : r.prototype && (r.prototype = void 0);
    } catch (o) {}
    var n = yw(r);
    return Uo(n, "source") || (n.source = Sw(Tw, typeof t == "string" ? t : "")), r;
  };
Function.prototype.toString = Iw(function () {
  return pw(this) && xw(this).source || mw(this);
}, "toString");
var Oc = mg.exports,
  Aw = Q,
  Ew = Te,
  Cw = Oc,
  Rw = Sc,
  We = function We(r, t, e, n) {
    n || (n = {});
    var o = n.enumerable,
      i = n.name !== void 0 ? n.name : t;
    if (Aw(e) && Cw(e, i, n), n.global) o ? r[t] = e : Rw(t, e);else {
      try {
        n.unsafe ? r[t] && (o = !0) : delete r[t];
      } catch (a) {}
      o ? r[t] = e : Ew.f(r, t, {
        value: e,
        enumerable: !1,
        configurable: !n.nonConfigurable,
        writable: !n.nonWritable
      });
    }
    return r;
  },
  dn = {},
  Ow = ug,
  _w = Ac,
  Pw = _w.concat("length", "prototype");
dn.f = Object.getOwnPropertyNames || function (t) {
  return Ow(t, Pw);
};
var io = {};
io.f = Object.getOwnPropertySymbols;
var Nw = Pe,
  Lw = M,
  Fw = dn,
  kw = io,
  Bw = ye,
  Mw = Lw([].concat),
  bg = Nw("Reflect", "ownKeys") || function (t) {
    var e = Fw.f(Bw(t)),
      n = kw.f;
    return n ? Mw(e, n(t)) : e;
  },
  $f = he,
  Dw = bg,
  jw = nt,
  Uw = Te,
  _c = function _c(r, t, e) {
    for (var n = Dw(t), o = Uw.f, i = jw.f, a = 0; a < n.length; a++) {
      var s = n[a];
      !$f(r, s) && !(e && $f(e, s)) && o(r, s, i(t, s));
    }
  },
  zw = B,
  Ww = Q,
  Hw = /#|\.prototype\./,
  ao = function ao(r, t) {
    var e = Kw[Yw(r)];
    return e === Vw ? !0 : e === Gw ? !1 : Ww(t) ? zw(t) : !!t;
  },
  Yw = ao.normalize = function (r) {
    return String(r).replace(Hw, ".").toLowerCase();
  },
  Kw = ao.data = {},
  Gw = ao.NATIVE = "N",
  Vw = ao.POLYFILL = "P",
  ia = ao,
  zo = z,
  Xw = nt.f,
  Qw = mr,
  qw = We,
  Jw = Sc,
  Zw = _c,
  eT = ia,
  E = function E(r, t) {
    var e = r.target,
      n = r.global,
      o = r.stat,
      i,
      a,
      s,
      l,
      c,
      u;
    if (n ? a = zo : o ? a = zo[e] || Jw(e, {}) : a = zo[e] && zo[e].prototype, a) for (s in t) {
      if (c = t[s], r.dontCallGetSet ? (u = Xw(a, s), l = u && u.value) : l = a[s], i = eT(n ? s : e + (o ? "." : "#") + s, r.forced), !i && l !== void 0) {
        if (_typeof(c) == _typeof(l)) continue;
        Zw(c, l);
      }
      (r.sham || l && l.sham) && Qw(c, "sham", !0), qw(a, s, c, r);
    }
  },
  tT = B,
  $g = !tT(function () {
    function r() {}
    return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
  }),
  rT = he,
  nT = Q,
  oT = ee,
  iT = na,
  aT = $g,
  Sf = iT("IE_PROTO"),
  Tl = Object,
  sT = Tl.prototype,
  yr = aT ? Tl.getPrototypeOf : function (r) {
    var t = oT(r);
    if (rT(t, Sf)) return t[Sf];
    var e = t.constructor;
    return nT(e) && t instanceof e ? e.prototype : t instanceof Tl ? sT : null;
  },
  lT = B,
  cT = Q,
  uT = Z,
  wf = yr,
  fT = We,
  dT = J,
  Il = dT("iterator"),
  Sg = !1,
  ur,
  is,
  as;
[].keys && (as = [].keys(), "next" in as ? (is = wf(wf(as)), is !== Object.prototype && (ur = is)) : Sg = !0);
var hT = !uT(ur) || lT(function () {
  var r = {};
  return ur[Il].call(r) !== r;
});
hT && (ur = {});
cT(ur[Il]) || fT(ur, Il, function () {
  return this;
});
var wg = {
    IteratorPrototype: ur,
    BUGGY_SAFARI_ITERATORS: Sg
  },
  vT = Te.f,
  pT = he,
  gT = J,
  Tf = gT("toStringTag"),
  Et = function Et(r, t, e) {
    r && !e && (r = r.prototype), r && !pT(r, Tf) && vT(r, Tf, {
      configurable: !0,
      value: t
    });
  },
  mT = wg.IteratorPrototype,
  yT = pr,
  xT = gr,
  bT = Et,
  $T = no,
  ST = function ST() {
    return this;
  },
  Tg = function Tg(r, t, e, n) {
    var o = t + " Iterator";
    return r.prototype = yT(mT, {
      next: xT(+!n, e)
    }), bT(r, o, !1), $T[o] = ST, r;
  },
  wT = M,
  TT = ve,
  Ig = function Ig(r, t, e) {
    try {
      return wT(TT(Object.getOwnPropertyDescriptor(r, t)[e]));
    } catch (n) {}
  },
  IT = Z,
  Ag = function Ag(r) {
    return IT(r) || r === null;
  },
  AT = Ag,
  ET = String,
  CT = TypeError,
  RT = function RT(r) {
    if (AT(r)) return r;
    throw new CT("Can't set " + ET(r) + " as a prototype");
  },
  OT = Ig,
  _T = Z,
  PT = re,
  NT = RT,
  so = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var r = !1,
      t = {},
      e;
    try {
      e = OT(Object.prototype, "__proto__", "set"), e(t, []), r = t instanceof Array;
    } catch (n) {}
    return function (o, i) {
      return PT(o), NT(i), _T(o) && (r ? e(o, i) : o.__proto__ = i), o;
    };
  }() : void 0),
  LT = E,
  FT = K,
  Eg = oa,
  kT = Q,
  BT = Tg,
  If = yr,
  Af = so,
  MT = Et,
  DT = mr,
  ss = We,
  jT = J,
  UT = no,
  Cg = wg,
  zT = Eg.PROPER,
  WT = Eg.CONFIGURABLE,
  Ef = Cg.IteratorPrototype,
  Wo = Cg.BUGGY_SAFARI_ITERATORS,
  Sn = jT("iterator"),
  Cf = "keys",
  wn = "values",
  Rf = "entries",
  HT = function HT() {
    return this;
  },
  Pc = function Pc(r, t, e, n, o, i, a) {
    BT(e, t, n);
    var s = function s($) {
        if ($ === o && v) return v;
        if (!Wo && $ && $ in u) return u[$];
        switch ($) {
          case Cf:
            return function () {
              return new e(this, $);
            };
          case wn:
            return function () {
              return new e(this, $);
            };
          case Rf:
            return function () {
              return new e(this, $);
            };
        }
        return function () {
          return new e(this);
        };
      },
      l = t + " Iterator",
      c = !1,
      u = r.prototype,
      f = u[Sn] || u["@@iterator"] || o && u[o],
      v = !Wo && f || s(o),
      p = t === "Array" && u.entries || f,
      m,
      S,
      w;
    if (p && (m = If(p.call(new r())), m !== Object.prototype && m.next && (If(m) !== Ef && (Af ? Af(m, Ef) : kT(m[Sn]) || ss(m, Sn, HT)), MT(m, l, !0))), zT && o === wn && f && f.name !== wn && (WT ? DT(u, "name", wn) : (c = !0, v = function v() {
      return FT(f, this);
    })), o) if (S = {
      values: s(wn),
      keys: i ? v : s(Cf),
      entries: s(Rf)
    }, a) for (w in S) (Wo || c || !(w in u)) && ss(u, w, S[w]);else LT({
      target: t,
      proto: !0,
      forced: Wo || c
    }, S);
    return u[Sn] !== v && ss(u, Sn, v, {
      name: o
    }), UT[t] = v, S;
  },
  aa = function aa(r, t) {
    return {
      value: r,
      done: t
    };
  },
  YT = we,
  Nc = ke,
  Of = no,
  Rg = Yt,
  KT = Te.f,
  GT = Pc,
  Ho = aa,
  VT = Y,
  Og = "Array Iterator",
  XT = Rg.set,
  QT = Rg.getterFor(Og);
GT(Array, "Array", function (r, t) {
  XT(this, {
    type: Og,
    target: YT(r),
    index: 0,
    kind: t
  });
}, function () {
  var r = QT(this),
    t = r.target,
    e = r.index++;
  if (!t || e >= t.length) return r.target = null, Ho(void 0, !0);
  switch (r.kind) {
    case "keys":
      return Ho(e, !1);
    case "values":
      return Ho(t[e], !1);
  }
  return Ho([e, t[e]], !1);
}, "values");
var _f = Of.Arguments = Of.Array;
Nc("keys");
Nc("values");
Nc("entries");
if (VT && _f.name !== "values") try {
  KT(_f, "name", {
    value: "values"
  });
} catch (r) {}
var _g = {
    exports: {}
  },
  sa = {},
  qT = M,
  hn = qT([].slice),
  JT = ze,
  ZT = we,
  Pg = dn.f,
  e1 = hn,
  Ng = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  t1 = function t1(r) {
    try {
      return Pg(r);
    } catch (t) {
      return e1(Ng);
    }
  };
sa.f = function (t) {
  return Ng && JT(t) === "Window" ? t1(t) : Pg(ZT(t));
};
var r1 = B,
  Lc = r1(function () {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      });
    }
  }),
  n1 = B,
  o1 = Z,
  i1 = ze,
  Pf = Lc,
  yi = Object.isExtensible,
  a1 = n1(function () {
    yi(1);
  }),
  Lg = a1 || Pf ? function (t) {
    return !o1(t) || Pf && i1(t) === "ArrayBuffer" ? !1 : yi ? yi(t) : !0;
  } : yi,
  s1 = B,
  la = !s1(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  l1 = E,
  c1 = M,
  u1 = to,
  f1 = Z,
  Fc = he,
  d1 = Te.f,
  Nf = dn,
  h1 = sa,
  kc = Lg,
  v1 = ta,
  p1 = la,
  Fg = !1,
  St = v1("meta"),
  g1 = 0,
  Bc = function Bc(r) {
    d1(r, St, {
      value: {
        objectID: "O" + g1++,
        weakData: {}
      }
    });
  },
  m1 = function m1(r, t) {
    if (!f1(r)) return _typeof(r) == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!Fc(r, St)) {
      if (!kc(r)) return "F";
      if (!t) return "E";
      Bc(r);
    }
    return r[St].objectID;
  },
  y1 = function y1(r, t) {
    if (!Fc(r, St)) {
      if (!kc(r)) return !0;
      if (!t) return !1;
      Bc(r);
    }
    return r[St].weakData;
  },
  x1 = function x1(r) {
    return p1 && Fg && kc(r) && !Fc(r, St) && Bc(r), r;
  },
  b1 = function b1() {
    $1.enable = function () {}, Fg = !0;
    var r = Nf.f,
      t = c1([].splice),
      e = {};
    e[St] = 1, r(e).length && (Nf.f = function (n) {
      for (var o = r(n), i = 0, a = o.length; i < a; i++) if (o[i] === St) {
        t(o, i, 1);
        break;
      }
      return o;
    }, l1({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: h1.f
    }));
  },
  $1 = _g.exports = {
    enable: b1,
    fastKey: m1,
    getWeakData: y1,
    onFreeze: x1
  };
u1[St] = !0;
var lo = _g.exports,
  S1 = ze,
  w1 = M,
  co = function co(r) {
    if (S1(r) === "Function") return w1(r);
  },
  Lf = co,
  T1 = ve,
  I1 = Zn,
  A1 = Lf(Lf.bind),
  Kt = function Kt(r, t) {
    return T1(r), t === void 0 ? r : I1 ? A1(r, t) : function () {
      return r.apply(t, arguments);
    };
  },
  E1 = J,
  C1 = no,
  R1 = E1("iterator"),
  O1 = Array.prototype,
  kg = function kg(r) {
    return r !== void 0 && (C1.Array === r || O1[R1] === r);
  },
  _1 = J,
  P1 = _1("toStringTag"),
  Bg = {};
Bg[P1] = "z";
var Mc = String(Bg) === "[object z]",
  N1 = Mc,
  L1 = Q,
  xi = ze,
  F1 = J,
  k1 = F1("toStringTag"),
  B1 = Object,
  M1 = xi(function () {
    return arguments;
  }()) === "Arguments",
  D1 = function D1(r, t) {
    try {
      return r[t];
    } catch (e) {}
  },
  ca = N1 ? xi : function (r) {
    var t, e, n;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (e = D1(t = B1(r), k1)) == "string" ? e : M1 ? xi(t) : (n = xi(t)) === "Object" && L1(t.callee) ? "Arguments" : n;
  },
  j1 = ca,
  Ff = At,
  U1 = Je,
  z1 = no,
  W1 = J,
  H1 = W1("iterator"),
  Dc = function Dc(r) {
    if (!U1(r)) return Ff(r, H1) || Ff(r, "@@iterator") || z1[j1(r)];
  },
  Y1 = K,
  K1 = ve,
  G1 = ye,
  V1 = un,
  X1 = Dc,
  Q1 = TypeError,
  Mg = function Mg(r, t) {
    var e = arguments.length < 2 ? X1(r) : t;
    if (K1(e)) return G1(Y1(e, r));
    throw new Q1(V1(r) + " is not iterable");
  },
  q1 = K,
  kf = ye,
  J1 = At,
  ua = function ua(r, t, e) {
    var n, o;
    kf(r);
    try {
      if (n = J1(r, "return"), !n) {
        if (t === "throw") throw e;
        return e;
      }
      n = q1(n, r);
    } catch (i) {
      o = !0, n = i;
    }
    if (t === "throw") throw e;
    if (o) throw n;
    return kf(n), e;
  },
  Z1 = Kt,
  eI = K,
  tI = ye,
  rI = un,
  nI = kg,
  oI = ne,
  Bf = It,
  iI = Mg,
  aI = Dc,
  Mf = ua,
  sI = TypeError,
  bi = function bi(r, t) {
    this.stopped = r, this.result = t;
  },
  Df = bi.prototype,
  pt = function pt(r, t, e) {
    var n = e && e.that,
      o = !!(e && e.AS_ENTRIES),
      i = !!(e && e.IS_RECORD),
      a = !!(e && e.IS_ITERATOR),
      s = !!(e && e.INTERRUPTED),
      l = Z1(t, n),
      c,
      u,
      f,
      v,
      p,
      m,
      S,
      w = function w(y) {
        return c && Mf(c, "normal", y), new bi(!0, y);
      },
      $ = function $(y) {
        return o ? (tI(y), s ? l(y[0], y[1], w) : l(y[0], y[1])) : s ? l(y, w) : l(y);
      };
    if (i) c = r.iterator;else if (a) c = r;else {
      if (u = aI(r), !u) throw new sI(rI(r) + " is not iterable");
      if (nI(u)) {
        for (f = 0, v = oI(r); v > f; f++) if (p = $(r[f]), p && Bf(Df, p)) return p;
        return new bi(!1);
      }
      c = iI(r, u);
    }
    for (m = i ? r.next : c.next; !(S = eI(m, c)).done;) {
      try {
        p = $(S.value);
      } catch (y) {
        Mf(c, "throw", y);
      }
      if (_typeof(p) == "object" && p && Bf(Df, p)) return p;
    }
    return new bi(!1);
  },
  lI = It,
  cI = TypeError,
  jc = function jc(r, t) {
    if (lI(t, r)) return r;
    throw new cI("Incorrect invocation");
  },
  uI = J,
  Dg = uI("iterator"),
  jg = !1;
try {
  var fI = 0,
    jf = {
      next: function next() {
        return {
          done: !!fI++
        };
      },
      "return": function _return() {
        jg = !0;
      }
    };
  jf[Dg] = function () {
    return this;
  }, Array.from(jf, function () {
    throw 2;
  });
} catch (r) {}
var Uc = function Uc(r, t) {
    try {
      if (!t && !jg) return !1;
    } catch (o) {
      return !1;
    }
    var e = !1;
    try {
      var n = {};
      n[Dg] = function () {
        return {
          next: function next() {
            return {
              done: e = !0
            };
          }
        };
      }, r(n);
    } catch (o) {}
    return e;
  },
  dI = Q,
  hI = Z,
  Uf = so,
  Ug = function Ug(r, t, e) {
    var n, o;
    return Uf && dI(n = t.constructor) && n !== e && hI(o = n.prototype) && o !== e.prototype && Uf(r, o), r;
  },
  vI = E,
  pI = z,
  gI = M,
  zf = ia,
  mI = We,
  yI = lo,
  xI = pt,
  bI = jc,
  $I = Q,
  SI = Je,
  ls = Z,
  cs = B,
  wI = Uc,
  TI = Et,
  II = Ug,
  zg = function zg(r, t, e) {
    var n = r.indexOf("Map") !== -1,
      o = r.indexOf("Weak") !== -1,
      i = n ? "set" : "add",
      a = pI[r],
      s = a && a.prototype,
      l = a,
      c = {},
      u = function u($) {
        var y = gI(s[$]);
        mI(s, $, $ === "add" ? function (h) {
          return y(this, h === 0 ? 0 : h), this;
        } : $ === "delete" ? function (d) {
          return o && !ls(d) ? !1 : y(this, d === 0 ? 0 : d);
        } : $ === "get" ? function (h) {
          return o && !ls(h) ? void 0 : y(this, h === 0 ? 0 : h);
        } : $ === "has" ? function (h) {
          return o && !ls(h) ? !1 : y(this, h === 0 ? 0 : h);
        } : function (h, g) {
          return y(this, h === 0 ? 0 : h, g), this;
        });
      },
      f = zf(r, !$I(a) || !(o || s.forEach && !cs(function () {
        new a().entries().next();
      })));
    if (f) l = e.getConstructor(t, r, n, i), yI.enable();else if (zf(r, !0)) {
      var v = new l(),
        p = v[i](o ? {} : -0, 1) !== v,
        m = cs(function () {
          v.has(1);
        }),
        S = wI(function ($) {
          new a($);
        }),
        w = !o && cs(function () {
          for (var $ = new a(), y = 5; y--;) $[i](y, y);
          return !$.has(-0);
        });
      S || (l = t(function ($, y) {
        bI($, s);
        var d = II(new a(), $, l);
        return SI(y) || xI(y, d[i], {
          that: d,
          AS_ENTRIES: n
        }), d;
      }), l.prototype = s, s.constructor = l), (m || w) && (u("delete"), u("has"), n && u("get")), (w || p) && u(i), o && s.clear && delete s.clear;
    }
    return c[r] = l, vI({
      global: !0,
      constructor: !0,
      forced: l !== a
    }, c), TI(l, r), o || e.setStrong(l, r, n), l;
  },
  Wf = Oc,
  AI = Te,
  vn = function vn(r, t, e) {
    return e.get && Wf(e.get, t, {
      getter: !0
    }), e.set && Wf(e.set, t, {
      setter: !0
    }), AI.f(r, t, e);
  },
  EI = We,
  CI = function CI(r, t, e) {
    for (var n in t) EI(r, n, t[n], e);
    return r;
  },
  RI = Pe,
  OI = vn,
  _I = J,
  PI = Y,
  Hf = _I("species"),
  zc = function zc(r) {
    var t = RI(r);
    PI && t && !t[Hf] && OI(t, Hf, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  },
  Yf = pr,
  NI = vn,
  Kf = CI,
  LI = Kt,
  FI = jc,
  kI = Je,
  BI = pt,
  MI = Pc,
  Yo = aa,
  DI = zc,
  Tn = Y,
  Gf = lo.fastKey,
  Wg = Yt,
  Vf = Wg.set,
  us = Wg.getterFor,
  Hg = {
    getConstructor: function getConstructor(r, t, e, n) {
      var o = r(function (c, u) {
          FI(c, i), Vf(c, {
            type: t,
            index: Yf(null),
            first: null,
            last: null,
            size: 0
          }), Tn || (c.size = 0), kI(u) || BI(u, c[n], {
            that: c,
            AS_ENTRIES: e
          });
        }),
        i = o.prototype,
        a = us(t),
        s = function s(c, u, f) {
          var v = a(c),
            p = l(c, u),
            m,
            S;
          return p ? p.value = f : (v.last = p = {
            index: S = Gf(u, !0),
            key: u,
            value: f,
            previous: m = v.last,
            next: null,
            removed: !1
          }, v.first || (v.first = p), m && (m.next = p), Tn ? v.size++ : c.size++, S !== "F" && (v.index[S] = p)), c;
        },
        l = function l(c, u) {
          var f = a(c),
            v = Gf(u),
            p;
          if (v !== "F") return f.index[v];
          for (p = f.first; p; p = p.next) if (p.key === u) return p;
        };
      return Kf(i, {
        clear: function clear() {
          for (var u = this, f = a(u), v = f.first; v;) v.removed = !0, v.previous && (v.previous = v.previous.next = null), v = v.next;
          f.first = f.last = null, f.index = Yf(null), Tn ? f.size = 0 : u.size = 0;
        },
        "delete": function _delete(c) {
          var u = this,
            f = a(u),
            v = l(u, c);
          if (v) {
            var p = v.next,
              m = v.previous;
            delete f.index[v.index], v.removed = !0, m && (m.next = p), p && (p.previous = m), f.first === v && (f.first = p), f.last === v && (f.last = m), Tn ? f.size-- : u.size--;
          }
          return !!v;
        },
        forEach: function forEach(u) {
          for (var f = a(this), v = LI(u, arguments.length > 1 ? arguments[1] : void 0), p; p = p ? p.next : f.first;) for (v(p.value, p.key, this); p && p.removed;) p = p.previous;
        },
        has: function has(u) {
          return !!l(this, u);
        }
      }), Kf(i, e ? {
        get: function get(u) {
          var f = l(this, u);
          return f && f.value;
        },
        set: function set(u, f) {
          return s(this, u === 0 ? 0 : u, f);
        }
      } : {
        add: function add(u) {
          return s(this, u = u === 0 ? 0 : u, u);
        }
      }), Tn && NI(i, "size", {
        configurable: !0,
        get: function get() {
          return a(this).size;
        }
      }), o;
    },
    setStrong: function setStrong(r, t, e) {
      var n = t + " Iterator",
        o = us(t),
        i = us(n);
      MI(r, t, function (a, s) {
        Vf(this, {
          type: n,
          target: a,
          state: o(a),
          kind: s,
          last: null
        });
      }, function () {
        for (var a = i(this), s = a.kind, l = a.last; l && l.removed;) l = l.previous;
        return !a.target || !(a.last = l = l ? l.next : a.state.first) ? (a.target = null, Yo(void 0, !0)) : Yo(s === "keys" ? l.key : s === "values" ? l.value : [l.key, l.value], !1);
      }, e ? "entries" : "values", !e, !0), DI(t);
    }
  },
  jI = zg,
  UI = Hg;
jI("Map", function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, UI);
var Ko = M,
  In = Map.prototype,
  zI = {
    Map: Map,
    set: Ko(In.set),
    get: Ko(In.get),
    has: Ko(In.has),
    remove: Ko(In["delete"]),
    proto: In
  },
  WI = E,
  HI = M,
  YI = ve,
  KI = re,
  GI = pt,
  fa = zI,
  VI = B,
  Yg = fa.Map,
  XI = fa.has,
  QI = fa.get,
  qI = fa.set,
  JI = HI([].push),
  ZI = VI(function () {
    return Yg.groupBy("ab", function (r) {
      return r;
    }).get("a").length !== 1;
  });
WI({
  target: "Map",
  stat: !0,
  forced: ZI
}, {
  groupBy: function groupBy(t, e) {
    KI(t), YI(e);
    var n = new Yg(),
      o = 0;
    return GI(t, function (i) {
      var a = e(i, o++);
      XI(n, a) ? JI(QI(n, a), i) : qI(n, a, [i]);
    }), n;
  }
});
var eA = Mc,
  tA = ca,
  rA = eA ? {}.toString : function () {
    return "[object " + tA(this) + "]";
  },
  nA = Mc,
  oA = We,
  iA = rA;
nA || oA(Object.prototype, "toString", iA, {
  unsafe: !0
});
var aA = ca,
  sA = String,
  q = function q(r) {
    if (aA(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return sA(r);
  },
  Wc = M,
  lA = Ce,
  cA = q,
  uA = re,
  fA = Wc("".charAt),
  Xf = Wc("".charCodeAt),
  dA = Wc("".slice),
  Qf = function Qf(r) {
    return function (t, e) {
      var n = cA(uA(t)),
        o = lA(e),
        i = n.length,
        a,
        s;
      return o < 0 || o >= i ? r ? "" : void 0 : (a = Xf(n, o), a < 55296 || a > 56319 || o + 1 === i || (s = Xf(n, o + 1)) < 56320 || s > 57343 ? r ? fA(n, o) : a : r ? dA(n, o, o + 2) : (a - 55296 << 10) + (s - 56320) + 65536);
    };
  },
  Hc = {
    codeAt: Qf(!1),
    charAt: Qf(!0)
  },
  hA = Hc.charAt,
  vA = q,
  Kg = Yt,
  pA = Pc,
  qf = aa,
  Gg = "String Iterator",
  gA = Kg.set,
  mA = Kg.getterFor(Gg);
pA(String, "String", function (r) {
  gA(this, {
    type: Gg,
    string: vA(r),
    index: 0
  });
}, function () {
  var t = mA(this),
    e = t.string,
    n = t.index,
    o;
  return n >= e.length ? qf(void 0, !0) : (o = hA(e, n), t.index += o.length, qf(o, !1));
});
var yA = z,
  ot = yA,
  xA = ot;
xA.Map;
var bA = zg,
  $A = Hg;
bA("Set", function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, $A);
var fs = M,
  Go = Set.prototype,
  gt = {
    Set: Set,
    add: fs(Go.add),
    has: fs(Go.has),
    remove: fs(Go["delete"]),
    proto: Go
  },
  SA = gt.has,
  xr = function xr(r) {
    return SA(r), r;
  },
  wA = K,
  br = function br(r, t, e) {
    for (var n = e ? r : r.iterator, o = r.next, i, a; !(i = wA(o, n)).done;) if (a = t(i.value), a !== void 0) return a;
  },
  Vg = M,
  TA = br,
  Xg = gt,
  IA = Xg.Set,
  Qg = Xg.proto,
  AA = Vg(Qg.forEach),
  qg = Vg(Qg.keys),
  EA = qg(new IA()).next,
  uo = function uo(r, t, e) {
    return e ? TA({
      iterator: qg(r),
      next: EA
    }, t) : AA(r, t);
  },
  Jg = gt,
  CA = uo,
  RA = Jg.Set,
  OA = Jg.add,
  Yc = function Yc(r) {
    var t = new RA();
    return CA(r, function (e) {
      OA(t, e);
    }), t;
  },
  _A = Ig,
  PA = gt,
  fo = _A(PA.proto, "size", "get") || function (r) {
    return r.size;
  },
  NA = function NA(r) {
    return {
      iterator: r,
      next: r.next,
      done: !1
    };
  },
  Jf = ve,
  Zg = ye,
  Zf = K,
  LA = Ce,
  FA = NA,
  ed = "Invalid size",
  kA = RangeError,
  BA = TypeError,
  MA = Math.max,
  em = function em(r, t) {
    this.set = r, this.size = MA(t, 0), this.has = Jf(r.has), this.keys = Jf(r.keys);
  };
em.prototype = {
  getIterator: function getIterator() {
    return FA(Zg(Zf(this.keys, this.set)));
  },
  includes: function includes(r) {
    return Zf(this.has, this.set, r);
  }
};
var $r = function $r(r) {
    Zg(r);
    var t = +r.size;
    if (t !== t) throw new BA(ed);
    var e = LA(t);
    if (e < 0) throw new kA(ed);
    return new em(r, e);
  },
  DA = xr,
  tm = gt,
  jA = Yc,
  UA = fo,
  zA = $r,
  WA = uo,
  HA = br,
  YA = tm.has,
  td = tm.remove,
  KA = function KA(t) {
    var e = DA(this),
      n = zA(t),
      o = jA(e);
    return UA(e) <= n.size ? WA(e, function (i) {
      n.includes(i) && td(o, i);
    }) : HA(n.getIterator(), function (i) {
      YA(e, i) && td(o, i);
    }), o;
  },
  GA = Pe,
  rd = function rd(r) {
    return {
      size: r,
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
  Sr = function Sr(r) {
    var t = GA("Set");
    try {
      new t()[r](rd(0));
      try {
        return new t()[r](rd(-1)), !1;
      } catch (e) {
        return !0;
      }
    } catch (e) {
      return !1;
    }
  },
  VA = E,
  XA = KA,
  QA = Sr;
VA({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !QA("difference")
}, {
  difference: XA
});
var qA = xr,
  Kc = gt,
  JA = fo,
  ZA = $r,
  eE = uo,
  tE = br,
  rE = Kc.Set,
  nd = Kc.add,
  nE = Kc.has,
  oE = function oE(t) {
    var e = qA(this),
      n = ZA(t),
      o = new rE();
    return JA(e) > n.size ? tE(n.getIterator(), function (i) {
      nE(e, i) && nd(o, i);
    }) : eE(e, function (i) {
      n.includes(i) && nd(o, i);
    }), o;
  },
  iE = E,
  aE = B,
  sE = oE,
  lE = Sr,
  cE = !lE("intersection") || aE(function () {
    return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
  });
iE({
  target: "Set",
  proto: !0,
  real: !0,
  forced: cE
}, {
  intersection: sE
});
var uE = xr,
  fE = gt.has,
  dE = fo,
  hE = $r,
  vE = uo,
  pE = br,
  gE = ua,
  mE = function mE(t) {
    var e = uE(this),
      n = hE(t);
    if (dE(e) <= n.size) return vE(e, function (i) {
      if (n.includes(i)) return !1;
    }, !0) !== !1;
    var o = n.getIterator();
    return pE(o, function (i) {
      if (fE(e, i)) return gE(o, "normal", !1);
    }) !== !1;
  },
  yE = E,
  xE = mE,
  bE = Sr;
yE({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !bE("isDisjointFrom")
}, {
  isDisjointFrom: xE
});
var $E = xr,
  SE = fo,
  wE = uo,
  TE = $r,
  IE = function IE(t) {
    var e = $E(this),
      n = TE(t);
    return SE(e) > n.size ? !1 : wE(e, function (o) {
      if (!n.includes(o)) return !1;
    }, !0) !== !1;
  },
  AE = E,
  EE = IE,
  CE = Sr;
AE({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !CE("isSubsetOf")
}, {
  isSubsetOf: EE
});
var RE = xr,
  OE = gt.has,
  _E = fo,
  PE = $r,
  NE = br,
  LE = ua,
  FE = function FE(t) {
    var e = RE(this),
      n = PE(t);
    if (_E(e) < n.size) return !1;
    var o = n.getIterator();
    return NE(o, function (i) {
      if (!OE(e, i)) return LE(o, "normal", !1);
    }) !== !1;
  },
  kE = E,
  BE = FE,
  ME = Sr;
kE({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !ME("isSupersetOf")
}, {
  isSupersetOf: BE
});
var DE = xr,
  Gc = gt,
  jE = Yc,
  UE = $r,
  zE = br,
  WE = Gc.add,
  HE = Gc.has,
  YE = Gc.remove,
  KE = function KE(t) {
    var e = DE(this),
      n = UE(t).getIterator(),
      o = jE(e);
    return zE(n, function (i) {
      HE(e, i) ? YE(o, i) : WE(o, i);
    }), o;
  },
  GE = E,
  VE = KE,
  XE = Sr;
GE({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !XE("symmetricDifference")
}, {
  symmetricDifference: VE
});
var QE = xr,
  qE = gt.add,
  JE = Yc,
  ZE = $r,
  eC = br,
  tC = function tC(t) {
    var e = QE(this),
      n = ZE(t).getIterator(),
      o = JE(e);
    return eC(n, function (i) {
      qE(o, i);
    }), o;
  },
  rC = E,
  nC = tC,
  oC = Sr;
rC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !oC("union")
}, {
  union: nC
});
var iC = ot;
iC.Set;
var aC = Z,
  sC = mr,
  lC = function lC(r, t) {
    aC(t) && "cause" in t && sC(r, "cause", t.cause);
  },
  cC = M,
  rm = Error,
  uC = cC("".replace),
  fC = function (r) {
    return String(new rm(r).stack);
  }("zxcasd"),
  nm = /\n\s*at [^:]*:[^\n]*/,
  dC = nm.test(fC),
  hC = function hC(r, t) {
    if (dC && typeof r == "string" && !rm.prepareStackTrace) for (; t--;) r = uC(r, nm, "");
    return r;
  },
  vC = B,
  pC = gr,
  gC = !vC(function () {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", pC(1, 7)), r.stack !== 7) : !0;
  }),
  mC = mr,
  yC = hC,
  xC = gC,
  od = Error.captureStackTrace,
  bC = function bC(r, t, e, n) {
    xC && (od ? od(r, t) : mC(r, "stack", yC(e, n)));
  },
  $C = q,
  SC = function SC(r, t) {
    return r === void 0 ? arguments.length < 2 ? "" : t : $C(r);
  },
  wC = E,
  TC = It,
  IC = yr,
  Fi = so,
  AC = _c,
  om = pr,
  ds = mr,
  hs = gr,
  EC = lC,
  CC = bC,
  RC = pt,
  OC = SC,
  _C = J,
  PC = _C("toStringTag"),
  ki = Error,
  NC = [].push,
  _Qr = function Qr(t, e) {
    var n = TC(vs, this),
      o;
    Fi ? o = Fi(new ki(), n ? IC(this) : vs) : (o = n ? this : om(vs), ds(o, PC, "Error")), e !== void 0 && ds(o, "message", OC(e)), CC(o, _Qr, o.stack, 1), arguments.length > 2 && EC(o, arguments[2]);
    var i = [];
    return RC(t, NC, {
      that: i
    }), ds(o, "errors", i), o;
  };
Fi ? Fi(_Qr, ki) : AC(_Qr, ki, {
  name: !0
});
var vs = _Qr.prototype = om(ki.prototype, {
  constructor: hs(1, _Qr),
  message: hs(1, ""),
  name: hs(1, "AggregateError")
});
wC({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: _Qr
});
var An = z,
  LC = Tt,
  FC = ze,
  Vo = function Vo(r) {
    return LC.slice(0, r.length) === r;
  },
  im = function () {
    return Vo("Bun/") ? "BUN" : Vo("Cloudflare-Workers") ? "CLOUDFLARE" : Vo("Deno/") ? "DENO" : Vo("Node.js/") ? "NODE" : An.Bun && typeof Bun.version == "string" ? "BUN" : An.Deno && _typeof(Deno.version) == "object" ? "DENO" : FC(An.process) === "process" ? "NODE" : An.window && An.document ? "BROWSER" : "REST";
  }(),
  kC = im,
  ho = kC === "NODE",
  BC = M,
  MC = B,
  am = Q,
  DC = ca,
  jC = Pe,
  UC = Cc,
  sm = function sm() {},
  lm = jC("Reflect", "construct"),
  Vc = /^\s*(?:class|function)\b/,
  zC = BC(Vc.exec),
  WC = !Vc.test(sm),
  En = function En(t) {
    if (!am(t)) return !1;
    try {
      return lm(sm, [], t), !0;
    } catch (e) {
      return !1;
    }
  },
  cm = function cm(t) {
    if (!am(t)) return !1;
    switch (DC(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return WC || !!zC(Vc, UC(t));
    } catch (e) {
      return !0;
    }
  };
cm.sham = !0;
var vo = !lm || MC(function () {
    var r;
    return En(En.call) || !En(Object) || !En(function () {
      r = !0;
    }) || r;
  }) ? cm : En,
  HC = vo,
  YC = un,
  KC = TypeError,
  GC = function GC(r) {
    if (HC(r)) return r;
    throw new KC(YC(r) + " is not a constructor");
  },
  id = ye,
  VC = GC,
  XC = Je,
  QC = J,
  qC = QC("species"),
  da = function da(r, t) {
    var e = id(r).constructor,
      n;
    return e === void 0 || XC(n = id(e)[qC]) ? t : VC(n);
  },
  JC = Zn,
  um = Function.prototype,
  ad = um.apply,
  sd = um.call,
  ha = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (JC ? sd.bind(ad) : function () {
    return sd.apply(ad, arguments);
  }),
  ZC = TypeError,
  eR = function eR(r, t) {
    if (r < t) throw new ZC("Not enough arguments");
    return r;
  },
  tR = Tt,
  fm = /(?:ipad|iphone|ipod).*applewebkit/i.test(tR),
  je = z,
  rR = ha,
  nR = Kt,
  ld = Q,
  oR = he,
  dm = B,
  cd = fg,
  iR = hn,
  ud = Tc,
  aR = eR,
  sR = fm,
  lR = ho,
  Al = je.setImmediate,
  El = je.clearImmediate,
  cR = je.process,
  ps = je.Dispatch,
  uR = je.Function,
  fd = je.MessageChannel,
  fR = je.String,
  gs = 0,
  jn = {},
  dd = "onreadystatechange",
  Vn,
  Zt,
  ms,
  ys;
dm(function () {
  Vn = je.location;
});
var Xc = function Xc(r) {
    if (oR(jn, r)) {
      var t = jn[r];
      delete jn[r], t();
    }
  },
  xs = function xs(r) {
    return function () {
      Xc(r);
    };
  },
  hd = function hd(r) {
    Xc(r.data);
  },
  vd = function vd(r) {
    je.postMessage(fR(r), Vn.protocol + "//" + Vn.host);
  };
(!Al || !El) && (Al = function Al(t) {
  aR(arguments.length, 1);
  var e = ld(t) ? t : uR(t),
    n = iR(arguments, 1);
  return jn[++gs] = function () {
    rR(e, void 0, n);
  }, Zt(gs), gs;
}, El = function El(t) {
  delete jn[t];
}, lR ? Zt = function Zt(r) {
  cR.nextTick(xs(r));
} : ps && ps.now ? Zt = function Zt(r) {
  ps.now(xs(r));
} : fd && !sR ? (ms = new fd(), ys = ms.port2, ms.port1.onmessage = hd, Zt = nR(ys.postMessage, ys)) : je.addEventListener && ld(je.postMessage) && !je.importScripts && Vn && Vn.protocol !== "file:" && !dm(vd) ? (Zt = vd, je.addEventListener("message", hd, !1)) : dd in ud("script") ? Zt = function Zt(r) {
  cd.appendChild(ud("script"))[dd] = function () {
    cd.removeChild(this), Xc(r);
  };
} : Zt = function Zt(r) {
  setTimeout(xs(r), 0);
});
var hm = {
    set: Al,
    clear: El
  },
  pd = z,
  dR = Y,
  hR = Object.getOwnPropertyDescriptor,
  vR = function vR(r) {
    if (!dR) return pd[r];
    var t = hR(pd, r);
    return t && t.value;
  },
  vm = function vm() {
    this.head = null, this.tail = null;
  };
vm.prototype = {
  add: function add(r) {
    var t = {
        item: r,
        next: null
      },
      e = this.tail;
    e ? e.next = t : this.head = t, this.tail = t;
  },
  get: function get() {
    var r = this.head;
    if (r) {
      var t = this.head = r.next;
      return t === null && (this.tail = null), r.item;
    }
  }
};
var pm = vm,
  pR = Tt,
  gR = /ipad|iphone|ipod/i.test(pR) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u",
  mR = Tt,
  yR = /web0s(?!.*chrome)/i.test(mR),
  qr = z,
  xR = vR,
  gd = Kt,
  bs = hm.set,
  bR = pm,
  $R = fm,
  SR = gR,
  wR = yR,
  $s = ho,
  md = qr.MutationObserver || qr.WebKitMutationObserver,
  yd = qr.document,
  xd = qr.process,
  Xo = qr.Promise,
  Cl = xR("queueMicrotask"),
  Ir,
  Ss,
  ws,
  Qo,
  bd;
if (!Cl) {
  var qo = new bR(),
    Jo = function Jo() {
      var r, t;
      for ($s && (r = xd.domain) && r.exit(); t = qo.get();) try {
        t();
      } catch (e) {
        throw qo.head && Ir(), e;
      }
      r && r.enter();
    };
  !$R && !$s && !wR && md && yd ? (Ss = !0, ws = yd.createTextNode(""), new md(Jo).observe(ws, {
    characterData: !0
  }), Ir = function Ir() {
    ws.data = Ss = !Ss;
  }) : !SR && Xo && Xo.resolve ? (Qo = Xo.resolve(void 0), Qo.constructor = Xo, bd = gd(Qo.then, Qo), Ir = function Ir() {
    bd(Jo);
  }) : $s ? Ir = function Ir() {
    xd.nextTick(Jo);
  } : (bs = gd(bs, qr), Ir = function Ir() {
    bs(Jo);
  }), Cl = function Cl(r) {
    qo.head || Ir(), qo.add(r);
  };
}
var TR = Cl,
  IR = function IR(r, t) {
    try {
      arguments.length === 1 ? console.error(r) : console.error(r, t);
    } catch (e) {}
  },
  po = function po(r) {
    try {
      return {
        error: !1,
        value: r()
      };
    } catch (t) {
      return {
        error: !0,
        value: t
      };
    }
  },
  AR = z,
  go = AR.Promise,
  ER = z,
  Un = go,
  CR = Q,
  RR = ia,
  OR = Cc,
  _R = J,
  $d = im,
  Ts = hr;
Un && Un.prototype;
var PR = _R("species"),
  Rl = !1,
  gm = CR(ER.PromiseRejectionEvent),
  NR = RR("Promise", function () {
    var r = OR(Un),
      t = r !== String(Un);
    if (!t && Ts === 66) return !0;
    if (!Ts || Ts < 51 || !/native code/.test(r)) {
      var e = new Un(function (i) {
          i(1);
        }),
        n = function n(i) {
          i(function () {}, function () {});
        },
        o = e.constructor = {};
      if (o[PR] = n, Rl = e.then(function () {}) instanceof n, !Rl) return !0;
    }
    return !t && ($d === "BROWSER" || $d === "DENO") && !gm;
  }),
  mo = {
    CONSTRUCTOR: NR,
    REJECTION_EVENT: gm,
    SUBCLASSING: Rl
  },
  Ct = {},
  Sd = ve,
  LR = TypeError,
  FR = function FR(r) {
    var t, e;
    this.promise = new r(function (n, o) {
      if (t !== void 0 || e !== void 0) throw new LR("Bad Promise constructor");
      t = n, e = o;
    }), this.resolve = Sd(t), this.reject = Sd(e);
  };
Ct.f = function (r) {
  return new FR(r);
};
var kR = E,
  Bi = ho,
  Wt = z,
  Jr = K,
  wd = We,
  Td = so,
  BR = Et,
  MR = zc,
  DR = ve,
  $i = Q,
  jR = Z,
  UR = jc,
  zR = da,
  mm = hm.set,
  Qc = TR,
  WR = IR,
  HR = po,
  YR = pm,
  ym = Yt,
  Mi = go,
  qc = mo,
  xm = Ct,
  va = "Promise",
  bm = qc.CONSTRUCTOR,
  KR = qc.REJECTION_EVENT,
  GR = qc.SUBCLASSING,
  Is = ym.getterFor(va),
  VR = ym.set,
  Dr = Mi && Mi.prototype,
  nr = Mi,
  Zo = Dr,
  $m = Wt.TypeError,
  Ol = Wt.document,
  Jc = Wt.process,
  _l = xm.f,
  XR = _l,
  QR = !!(Ol && Ol.createEvent && Wt.dispatchEvent),
  Sm = "unhandledrejection",
  qR = "rejectionhandled",
  Id = 0,
  wm = 1,
  JR = 2,
  Zc = 1,
  Tm = 2,
  ei,
  Ad,
  ZR,
  Ed,
  Im = function Im(r) {
    var t;
    return jR(r) && $i(t = r.then) ? t : !1;
  },
  Am = function Am(r, t) {
    var e = t.value,
      n = t.state === wm,
      o = n ? r.ok : r.fail,
      i = r.resolve,
      a = r.reject,
      s = r.domain,
      l,
      c,
      u;
    try {
      o ? (n || (t.rejection === Tm && tO(t), t.rejection = Zc), o === !0 ? l = e : (s && s.enter(), l = o(e), s && (s.exit(), u = !0)), l === r.promise ? a(new $m("Promise-chain cycle")) : (c = Im(l)) ? Jr(c, l, i, a) : i(l)) : a(e);
    } catch (f) {
      s && !u && s.exit(), a(f);
    }
  },
  Em = function Em(r, t) {
    r.notified || (r.notified = !0, Qc(function () {
      for (var e = r.reactions, n; n = e.get();) Am(n, r);
      r.notified = !1, t && !r.rejection && eO(r);
    }));
  },
  Cm = function Cm(r, t, e) {
    var n, o;
    QR ? (n = Ol.createEvent("Event"), n.promise = t, n.reason = e, n.initEvent(r, !1, !0), Wt.dispatchEvent(n)) : n = {
      promise: t,
      reason: e
    }, !KR && (o = Wt["on" + r]) ? o(n) : r === Sm && WR("Unhandled promise rejection", e);
  },
  eO = function eO(r) {
    Jr(mm, Wt, function () {
      var t = r.facade,
        e = r.value,
        n = Cd(r),
        o;
      if (n && (o = HR(function () {
        Bi ? Jc.emit("unhandledRejection", e, t) : Cm(Sm, t, e);
      }), r.rejection = Bi || Cd(r) ? Tm : Zc, o.error)) throw o.value;
    });
  },
  Cd = function Cd(r) {
    return r.rejection !== Zc && !r.parent;
  },
  tO = function tO(r) {
    Jr(mm, Wt, function () {
      var t = r.facade;
      Bi ? Jc.emit("rejectionHandled", t) : Cm(qR, t, r.value);
    });
  },
  Wr = function Wr(r, t, e) {
    return function (n) {
      r(t, n, e);
    };
  },
  Kr = function Kr(r, t, e) {
    r.done || (r.done = !0, e && (r = e), r.value = t, r.state = JR, Em(r, !0));
  },
  _Pl = function Pl(r, t, e) {
    if (!r.done) {
      r.done = !0, e && (r = e);
      try {
        if (r.facade === t) throw new $m("Promise can't be resolved itself");
        var n = Im(t);
        n ? Qc(function () {
          var o = {
            done: !1
          };
          try {
            Jr(n, t, Wr(_Pl, o, r), Wr(Kr, o, r));
          } catch (i) {
            Kr(o, i, r);
          }
        }) : (r.value = t, r.state = wm, Em(r, !1));
      } catch (o) {
        Kr({
          done: !1
        }, o, r);
      }
    }
  };
if (bm && (nr = function nr(t) {
  UR(this, Zo), DR(t), Jr(ei, this);
  var e = Is(this);
  try {
    t(Wr(_Pl, e), Wr(Kr, e));
  } catch (n) {
    Kr(e, n);
  }
}, Zo = nr.prototype, ei = function ei(t) {
  VR(this, {
    type: va,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new YR(),
    rejection: !1,
    state: Id,
    value: null
  });
}, ei.prototype = wd(Zo, "then", function (t, e) {
  var n = Is(this),
    o = _l(zR(this, nr));
  return n.parent = !0, o.ok = $i(t) ? t : !0, o.fail = $i(e) && e, o.domain = Bi ? Jc.domain : void 0, n.state === Id ? n.reactions.add(o) : Qc(function () {
    Am(o, n);
  }), o.promise;
}), Ad = function Ad() {
  var r = new ei(),
    t = Is(r);
  this.promise = r, this.resolve = Wr(_Pl, t), this.reject = Wr(Kr, t);
}, xm.f = _l = function _l(r) {
  return r === nr || r === ZR ? new Ad(r) : XR(r);
}, $i(Mi) && Dr !== Object.prototype)) {
  Ed = Dr.then, GR || wd(Dr, "then", function (t, e) {
    var n = this;
    return new nr(function (o, i) {
      Jr(Ed, n, o, i);
    }).then(t, e);
  }, {
    unsafe: !0
  });
  try {
    delete Dr.constructor;
  } catch (r) {}
  Td && Td(Dr, Zo);
}
kR({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: bm
}, {
  Promise: nr
});
BR(nr, va, !1);
MR(va);
var rO = go,
  nO = Uc,
  oO = mo.CONSTRUCTOR,
  pa = oO || !nO(function (r) {
    rO.all(r).then(void 0, function () {});
  }),
  iO = E,
  aO = K,
  sO = ve,
  lO = Ct,
  cO = po,
  uO = pt,
  fO = pa;
iO({
  target: "Promise",
  stat: !0,
  forced: fO
}, {
  all: function all(t) {
    var e = this,
      n = lO.f(e),
      o = n.resolve,
      i = n.reject,
      a = cO(function () {
        var s = sO(e.resolve),
          l = [],
          c = 0,
          u = 1;
        uO(t, function (f) {
          var v = c++,
            p = !1;
          u++, aO(s, e, f).then(function (m) {
            p || (p = !0, l[v] = m, --u || o(l));
          }, i);
        }), --u || o(l);
      });
    return a.error && i(a.value), n.promise;
  }
});
var dO = E,
  hO = mo.CONSTRUCTOR,
  Nl = go,
  vO = Pe,
  pO = Q,
  gO = We,
  Rd = Nl && Nl.prototype;
dO({
  target: "Promise",
  proto: !0,
  forced: hO,
  real: !0
}, {
  "catch": function _catch(r) {
    return this.then(void 0, r);
  }
});
if (pO(Nl)) {
  var Od = vO("Promise").prototype["catch"];
  Rd["catch"] !== Od && gO(Rd, "catch", Od, {
    unsafe: !0
  });
}
var mO = E,
  yO = K,
  xO = ve,
  bO = Ct,
  $O = po,
  SO = pt,
  wO = pa;
mO({
  target: "Promise",
  stat: !0,
  forced: wO
}, {
  race: function race(t) {
    var e = this,
      n = bO.f(e),
      o = n.reject,
      i = $O(function () {
        var a = xO(e.resolve);
        SO(t, function (s) {
          yO(a, e, s).then(n.resolve, o);
        });
      });
    return i.error && o(i.value), n.promise;
  }
});
var TO = E,
  IO = Ct,
  AO = mo.CONSTRUCTOR;
TO({
  target: "Promise",
  stat: !0,
  forced: AO
}, {
  reject: function reject(t) {
    var e = IO.f(this),
      n = e.reject;
    return n(t), e.promise;
  }
});
var EO = ye,
  CO = Z,
  RO = Ct,
  Rm = function Rm(r, t) {
    if (EO(r), CO(t) && t.constructor === r) return t;
    var e = RO.f(r),
      n = e.resolve;
    return n(t), e.promise;
  },
  OO = E,
  _O = Pe,
  PO = mo.CONSTRUCTOR,
  NO = Rm;
_O("Promise");
OO({
  target: "Promise",
  stat: !0,
  forced: PO
}, {
  resolve: function resolve(t) {
    return NO(this, t);
  }
});
var LO = E,
  FO = K,
  kO = ve,
  BO = Ct,
  MO = po,
  DO = pt,
  jO = pa;
LO({
  target: "Promise",
  stat: !0,
  forced: jO
}, {
  allSettled: function allSettled(t) {
    var e = this,
      n = BO.f(e),
      o = n.resolve,
      i = n.reject,
      a = MO(function () {
        var s = kO(e.resolve),
          l = [],
          c = 0,
          u = 1;
        DO(t, function (f) {
          var v = c++,
            p = !1;
          u++, FO(s, e, f).then(function (m) {
            p || (p = !0, l[v] = {
              status: "fulfilled",
              value: m
            }, --u || o(l));
          }, function (m) {
            p || (p = !0, l[v] = {
              status: "rejected",
              reason: m
            }, --u || o(l));
          });
        }), --u || o(l);
      });
    return a.error && i(a.value), n.promise;
  }
});
var UO = E,
  zO = K,
  WO = ve,
  HO = Pe,
  YO = Ct,
  KO = po,
  GO = pt,
  VO = pa,
  _d = "No one promise resolved";
UO({
  target: "Promise",
  stat: !0,
  forced: VO
}, {
  any: function any(t) {
    var e = this,
      n = HO("AggregateError"),
      o = YO.f(e),
      i = o.resolve,
      a = o.reject,
      s = KO(function () {
        var l = WO(e.resolve),
          c = [],
          u = 0,
          f = 1,
          v = !1;
        GO(t, function (p) {
          var m = u++,
            S = !1;
          f++, zO(l, e, p).then(function (w) {
            S || v || (v = !0, i(w));
          }, function (w) {
            S || v || (S = !0, c[m] = w, --f || a(new n(c, _d)));
          });
        }), --f || a(new n(c, _d));
      });
    return s.error && a(s.value), o.promise;
  }
});
var XO = E,
  QO = Ct;
XO({
  target: "Promise",
  stat: !0
}, {
  withResolvers: function withResolvers() {
    var t = QO.f(this);
    return {
      promise: t.promise,
      resolve: t.resolve,
      reject: t.reject
    };
  }
});
var qO = E,
  Di = go,
  JO = B,
  Om = Pe,
  _m = Q,
  ZO = da,
  Pd = Rm,
  e_ = We,
  Ll = Di && Di.prototype,
  t_ = !!Di && JO(function () {
    Ll["finally"].call({
      then: function then() {}
    }, function () {});
  });
qO({
  target: "Promise",
  proto: !0,
  real: !0,
  forced: t_
}, {
  "finally": function _finally(r) {
    var t = ZO(this, Om("Promise")),
      e = _m(r);
    return this.then(e ? function (n) {
      return Pd(t, r()).then(function () {
        return n;
      });
    } : r, e ? function (n) {
      return Pd(t, r()).then(function () {
        throw n;
      });
    } : r);
  }
});
if (_m(Di)) {
  var Nd = Om("Promise").prototype["finally"];
  Ll["finally"] !== Nd && e_(Ll, "finally", Nd, {
    unsafe: !0
  });
}
var r_ = ot;
r_.Promise;
var n_ = ye,
  o_ = ua,
  i_ = function i_(r, t, e, n) {
    try {
      return n ? t(n_(e)[0], e[1]) : t(e);
    } catch (o) {
      o_(r, "throw", o);
    }
  },
  a_ = Y,
  s_ = Te,
  l_ = gr,
  wr = function wr(r, t, e) {
    a_ ? s_.f(r, t, l_(0, e)) : r[t] = e;
  },
  c_ = Kt,
  u_ = K,
  f_ = ee,
  d_ = i_,
  h_ = kg,
  v_ = vo,
  p_ = ne,
  Ld = wr,
  g_ = Mg,
  m_ = Dc,
  Fd = Array,
  y_ = function y_(t) {
    var e = f_(t),
      n = v_(this),
      o = arguments.length,
      i = o > 1 ? arguments[1] : void 0,
      a = i !== void 0;
    a && (i = c_(i, o > 2 ? arguments[2] : void 0));
    var s = m_(e),
      l = 0,
      c,
      u,
      f,
      v,
      p,
      m;
    if (s && !(this === Fd && h_(s))) for (u = n ? new this() : [], v = g_(e, s), p = v.next; !(f = u_(p, v)).done; l++) m = a ? d_(v, i, [f.value, l], !0) : f.value, Ld(u, l, m);else for (c = p_(e), u = n ? new this(c) : Fd(c); c > l; l++) m = a ? i(e[l], l) : e[l], Ld(u, l, m);
    return u.length = l, u;
  },
  x_ = E,
  b_ = y_,
  $_ = Uc,
  S_ = !$_(function (r) {
    Array.from(r);
  });
x_({
  target: "Array",
  stat: !0,
  forced: S_
}, {
  from: b_
});
var w_ = ze,
  Gt = Array.isArray || function (t) {
    return w_(t) === "Array";
  },
  T_ = E,
  I_ = Gt;
T_({
  target: "Array",
  stat: !0
}, {
  isArray: I_
});
var A_ = E,
  E_ = B,
  C_ = vo,
  R_ = wr,
  Pm = Array,
  O_ = E_(function () {
    function r() {}
    return !(Pm.of.call(r) instanceof r);
  });
A_({
  target: "Array",
  stat: !0,
  forced: O_
}, {
  of: function of() {
    for (var t = 0, e = arguments.length, n = new (C_(this) ? this : Pm)(e); e > t;) R_(n, t, arguments[t++]);
    return n.length = e, n;
  }
});
var __ = E,
  P_ = ee,
  N_ = ne,
  L_ = Ce,
  F_ = ke;
__({
  target: "Array",
  proto: !0
}, {
  at: function at(t) {
    var e = P_(this),
      n = N_(e),
      o = L_(t),
      i = o >= 0 ? o : n + o;
    return i < 0 || i >= n ? void 0 : e[i];
  }
});
F_("at");
var k_ = TypeError,
  B_ = 9007199254740991,
  pn = function pn(r) {
    if (r > B_) throw k_("Maximum allowed index exceeded");
    return r;
  },
  kd = Gt,
  M_ = vo,
  D_ = Z,
  j_ = J,
  U_ = j_("species"),
  Bd = Array,
  z_ = function z_(r) {
    var t;
    return kd(r) && (t = r.constructor, M_(t) && (t === Bd || kd(t.prototype)) ? t = void 0 : D_(t) && (t = t[U_], t === null && (t = void 0))), t === void 0 ? Bd : t;
  },
  W_ = z_,
  yo = function yo(r, t) {
    return new (W_(r))(t === 0 ? 0 : t);
  },
  H_ = B,
  Y_ = J,
  K_ = hr,
  G_ = Y_("species"),
  xo = function xo(r) {
    return K_ >= 51 || !H_(function () {
      var t = [],
        e = t.constructor = {};
      return e[G_] = function () {
        return {
          foo: 1
        };
      }, t[r](Boolean).foo !== 1;
    });
  },
  V_ = E,
  X_ = B,
  Q_ = Gt,
  q_ = Z,
  J_ = ee,
  Z_ = ne,
  Md = pn,
  Dd = wr,
  eP = yo,
  tP = xo,
  rP = J,
  nP = hr,
  Nm = rP("isConcatSpreadable"),
  oP = nP >= 51 || !X_(function () {
    var r = [];
    return r[Nm] = !1, r.concat()[0] !== r;
  }),
  iP = function iP(r) {
    if (!q_(r)) return !1;
    var t = r[Nm];
    return t !== void 0 ? !!t : Q_(r);
  },
  aP = !oP || !tP("concat");
V_({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: aP
}, {
  concat: function concat(t) {
    var e = J_(this),
      n = eP(e, 0),
      o = 0,
      i,
      a,
      s,
      l,
      c;
    for (i = -1, s = arguments.length; i < s; i++) if (c = i === -1 ? e : arguments[i], iP(c)) for (l = Z_(c), Md(o + l), a = 0; a < l; a++, o++) a in c && Dd(n, o, c[a]);else Md(o + 1), Dd(n, o++, c);
    return n.length = o, n;
  }
});
var jd = un,
  sP = TypeError,
  ga = function ga(r, t) {
    if (!delete r[t]) throw new sP("Cannot delete property " + jd(t) + " of " + jd(r));
  },
  lP = ee,
  As = vr,
  cP = ne,
  uP = ga,
  fP = Math.min,
  dP = [].copyWithin || function (t, e) {
    var n = lP(this),
      o = cP(n),
      i = As(t, o),
      a = As(e, o),
      s = arguments.length > 2 ? arguments[2] : void 0,
      l = fP((s === void 0 ? o : As(s, o)) - a, o - i),
      c = 1;
    for (a < i && i < a + l && (c = -1, a += l - 1, i += l - 1); l-- > 0;) a in n ? n[i] = n[a] : uP(n, i), i += c, a += c;
    return n;
  },
  hP = E,
  vP = dP,
  pP = ke;
hP({
  target: "Array",
  proto: !0
}, {
  copyWithin: vP
});
pP("copyWithin");
var gP = Kt,
  mP = M,
  yP = sn,
  xP = ee,
  bP = ne,
  $P = yo,
  Ud = mP([].push),
  Ft = function Ft(r) {
    var t = r === 1,
      e = r === 2,
      n = r === 3,
      o = r === 4,
      i = r === 6,
      a = r === 7,
      s = r === 5 || i;
    return function (l, c, u, f) {
      for (var v = xP(l), p = yP(v), m = bP(p), S = gP(c, u), w = 0, $ = f || $P, y = t ? $(l, m) : e || a ? $(l, 0) : void 0, d, h; m > w; w++) if ((s || w in p) && (d = p[w], h = S(d, w, v), r)) if (t) y[w] = h;else if (h) switch (r) {
        case 3:
          return !0;
        case 5:
          return d;
        case 6:
          return w;
        case 2:
          Ud(y, d);
      } else switch (r) {
        case 4:
          return !1;
        case 7:
          Ud(y, d);
      }
      return i ? -1 : n || o ? o : y;
    };
  },
  Vt = {
    forEach: Ft(0),
    map: Ft(1),
    filter: Ft(2),
    some: Ft(3),
    every: Ft(4),
    find: Ft(5),
    findIndex: Ft(6),
    filterReject: Ft(7)
  },
  SP = B,
  Rt = function Rt(r, t) {
    var e = [][r];
    return !!e && SP(function () {
      e.call(null, t || function () {
        return 1;
      }, 1);
    });
  },
  wP = E,
  TP = Vt.every,
  IP = Rt,
  AP = IP("every");
wP({
  target: "Array",
  proto: !0,
  forced: !AP
}, {
  every: function every(t) {
    return TP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var EP = ee,
  zd = vr,
  CP = ne,
  RP = function RP(t) {
    for (var e = EP(this), n = CP(e), o = arguments.length, i = zd(o > 1 ? arguments[1] : void 0, n), a = o > 2 ? arguments[2] : void 0, s = a === void 0 ? n : zd(a, n); s > i;) e[i++] = t;
    return e;
  },
  OP = E,
  _P = RP,
  PP = ke;
OP({
  target: "Array",
  proto: !0
}, {
  fill: _P
});
PP("fill");
var NP = E,
  LP = Vt.filter,
  FP = xo,
  kP = FP("filter");
NP({
  target: "Array",
  proto: !0,
  forced: !kP
}, {
  filter: function filter(t) {
    return LP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var BP = E,
  MP = Vt.find,
  DP = ke,
  Fl = "find",
  Lm = !0;
Fl in [] && Array(1)[Fl](function () {
  Lm = !1;
});
BP({
  target: "Array",
  proto: !0,
  forced: Lm
}, {
  find: function find(t) {
    return MP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
DP(Fl);
var jP = E,
  UP = Vt.findIndex,
  zP = ke,
  kl = "findIndex",
  Fm = !0;
kl in [] && Array(1)[kl](function () {
  Fm = !1;
});
jP({
  target: "Array",
  proto: !0,
  forced: Fm
}, {
  findIndex: function findIndex(t) {
    return UP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
zP(kl);
var WP = Kt,
  HP = sn,
  YP = ee,
  KP = ne,
  Wd = function Wd(r) {
    var t = r === 1;
    return function (e, n, o) {
      for (var i = YP(e), a = HP(i), s = KP(a), l = WP(n, o), c, u; s-- > 0;) if (c = a[s], u = l(c, s, i), u) switch (r) {
        case 0:
          return c;
        case 1:
          return s;
      }
      return t ? -1 : void 0;
    };
  },
  km = {
    findLast: Wd(0),
    findLastIndex: Wd(1)
  },
  GP = E,
  VP = km.findLast,
  XP = ke;
GP({
  target: "Array",
  proto: !0
}, {
  findLast: function findLast(t) {
    return VP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
XP("findLast");
var QP = E,
  qP = km.findLastIndex,
  JP = ke;
QP({
  target: "Array",
  proto: !0
}, {
  findLastIndex: function findLastIndex(t) {
    return qP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
JP("findLastIndex");
var ZP = Gt,
  e2 = ne,
  t2 = pn,
  r2 = Kt,
  _Bm = function Bm(r, t, e, n, o, i, a, s) {
    for (var l = o, c = 0, u = a ? r2(a, s) : !1, f, v; c < n;) c in e && (f = u ? u(e[c], c, t) : e[c], i > 0 && ZP(f) ? (v = e2(f), l = _Bm(r, t, f, v, l, i - 1) - 1) : (t2(l + 1), r[l] = f), l++), c++;
    return l;
  },
  Mm = _Bm,
  n2 = E,
  o2 = Mm,
  i2 = ee,
  a2 = ne,
  s2 = Ce,
  l2 = yo;
n2({
  target: "Array",
  proto: !0
}, {
  flat: function flat() {
    var t = arguments.length ? arguments[0] : void 0,
      e = i2(this),
      n = a2(e),
      o = l2(e, 0);
    return o.length = o2(o, e, e, n, 0, t === void 0 ? 1 : s2(t)), o;
  }
});
var c2 = E,
  u2 = Mm,
  f2 = ve,
  d2 = ee,
  h2 = ne,
  v2 = yo;
c2({
  target: "Array",
  proto: !0
}, {
  flatMap: function flatMap(t) {
    var e = d2(this),
      n = h2(e),
      o;
    return f2(t), o = v2(e, 0), o.length = u2(o, e, e, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), o;
  }
});
var p2 = Vt.forEach,
  g2 = Rt,
  m2 = g2("forEach"),
  y2 = m2 ? [].forEach : function (t) {
    return p2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  },
  x2 = E,
  Hd = y2;
x2({
  target: "Array",
  proto: !0,
  forced: [].forEach !== Hd
}, {
  forEach: Hd
});
var b2 = E,
  $2 = Ic.includes,
  S2 = B,
  w2 = ke,
  T2 = S2(function () {
    return !Array(1).includes();
  });
b2({
  target: "Array",
  proto: !0,
  forced: T2
}, {
  includes: function includes(t) {
    return $2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
w2("includes");
var I2 = E,
  A2 = co,
  E2 = Ic.indexOf,
  C2 = Rt,
  Bl = A2([].indexOf),
  Dm = !!Bl && 1 / Bl([1], 1, -0) < 0,
  R2 = Dm || !C2("indexOf");
I2({
  target: "Array",
  proto: !0,
  forced: R2
}, {
  indexOf: function indexOf(t) {
    var e = arguments.length > 1 ? arguments[1] : void 0;
    return Dm ? Bl(this, t, e) || 0 : E2(this, t, e);
  }
});
var O2 = E,
  _2 = M,
  P2 = sn,
  N2 = we,
  L2 = Rt,
  F2 = _2([].join),
  k2 = P2 !== Object,
  B2 = k2 || !L2("join", ",");
O2({
  target: "Array",
  proto: !0,
  forced: B2
}, {
  join: function join(t) {
    return F2(N2(this), t === void 0 ? "," : t);
  }
});
var M2 = ha,
  D2 = we,
  j2 = Ce,
  U2 = ne,
  z2 = Rt,
  W2 = Math.min,
  Ml = [].lastIndexOf,
  jm = !!Ml && 1 / [1].lastIndexOf(1, -0) < 0,
  H2 = z2("lastIndexOf"),
  Y2 = jm || !H2,
  K2 = Y2 ? function (t) {
    if (jm) return M2(Ml, this, arguments) || 0;
    var e = D2(this),
      n = U2(e);
    if (n === 0) return -1;
    var o = n - 1;
    for (arguments.length > 1 && (o = W2(o, j2(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) if (o in e && e[o] === t) return o || 0;
    return -1;
  } : Ml,
  G2 = E,
  Yd = K2;
G2({
  target: "Array",
  proto: !0,
  forced: Yd !== [].lastIndexOf
}, {
  lastIndexOf: Yd
});
var V2 = E,
  X2 = Vt.map,
  Q2 = xo,
  q2 = Q2("map");
V2({
  target: "Array",
  proto: !0,
  forced: !q2
}, {
  map: function map(t) {
    return X2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var J2 = Y,
  Z2 = Gt,
  eN = TypeError,
  tN = Object.getOwnPropertyDescriptor,
  rN = J2 && !function () {
    if (this !== void 0) return !0;
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).length = 1;
    } catch (r) {
      return r instanceof TypeError;
    }
  }(),
  eu = rN ? function (r, t) {
    if (Z2(r) && !tN(r, "length").writable) throw new eN("Cannot set read only .length");
    return r.length = t;
  } : function (r, t) {
    return r.length = t;
  },
  nN = E,
  oN = ee,
  iN = ne,
  aN = eu,
  sN = pn,
  lN = B,
  cN = lN(function () {
    return [].push.call({
      length: 4294967296
    }, 1) !== 4294967297;
  }),
  uN = function uN() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).push();
    } catch (r) {
      return r instanceof TypeError;
    }
  },
  fN = cN || !uN();
nN({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: fN
}, {
  push: function push(t) {
    var e = oN(this),
      n = iN(e),
      o = arguments.length;
    sN(n + o);
    for (var i = 0; i < o; i++) e[n] = arguments[i], n++;
    return aN(e, n), n;
  }
});
var dN = ve,
  hN = ee,
  vN = sn,
  pN = ne,
  Kd = TypeError,
  Gd = "Reduce of empty array with no initial value",
  Vd = function Vd(r) {
    return function (t, e, n, o) {
      var i = hN(t),
        a = vN(i),
        s = pN(i);
      if (dN(e), s === 0 && n < 2) throw new Kd(Gd);
      var l = r ? s - 1 : 0,
        c = r ? -1 : 1;
      if (n < 2) for (;;) {
        if (l in a) {
          o = a[l], l += c;
          break;
        }
        if (l += c, r ? l < 0 : s <= l) throw new Kd(Gd);
      }
      for (; r ? l >= 0 : s > l; l += c) l in a && (o = e(o, a[l], l, i));
      return o;
    };
  },
  Um = {
    left: Vd(!1),
    right: Vd(!0)
  },
  gN = E,
  mN = Um.left,
  yN = Rt,
  Xd = hr,
  xN = ho,
  bN = !xN && Xd > 79 && Xd < 83,
  $N = bN || !yN("reduce");
gN({
  target: "Array",
  proto: !0,
  forced: $N
}, {
  reduce: function reduce(t) {
    var e = arguments.length;
    return mN(this, t, e, e > 1 ? arguments[1] : void 0);
  }
});
var SN = E,
  wN = Um.right,
  TN = Rt,
  Qd = hr,
  IN = ho,
  AN = !IN && Qd > 79 && Qd < 83,
  EN = AN || !TN("reduceRight");
SN({
  target: "Array",
  proto: !0,
  forced: EN
}, {
  reduceRight: function reduceRight(t) {
    return wN(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var CN = E,
  RN = M,
  ON = Gt,
  _N = RN([].reverse),
  qd = [1, 2];
CN({
  target: "Array",
  proto: !0,
  forced: String(qd) === String(qd.reverse())
}, {
  reverse: function reverse() {
    return ON(this) && (this.length = this.length), _N(this);
  }
});
var PN = E,
  Jd = Gt,
  NN = vo,
  LN = Z,
  Zd = vr,
  FN = ne,
  kN = we,
  BN = wr,
  MN = J,
  DN = xo,
  jN = hn,
  UN = DN("slice"),
  zN = MN("species"),
  Es = Array,
  WN = Math.max;
PN({
  target: "Array",
  proto: !0,
  forced: !UN
}, {
  slice: function slice(t, e) {
    var n = kN(this),
      o = FN(n),
      i = Zd(t, o),
      a = Zd(e === void 0 ? o : e, o),
      s,
      l,
      c;
    if (Jd(n) && (s = n.constructor, NN(s) && (s === Es || Jd(s.prototype)) ? s = void 0 : LN(s) && (s = s[zN], s === null && (s = void 0)), s === Es || s === void 0)) return jN(n, i, a);
    for (l = new (s === void 0 ? Es : s)(WN(a - i, 0)), c = 0; i < a; i++, c++) i in n && BN(l, c, n[i]);
    return l.length = c, l;
  }
});
var HN = E,
  YN = Vt.some,
  KN = Rt,
  GN = KN("some");
HN({
  target: "Array",
  proto: !0,
  forced: !GN
}, {
  some: function some(t) {
    return YN(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var eh = hn,
  VN = Math.floor,
  _Dl = function Dl(r, t) {
    var e = r.length;
    if (e < 8) for (var n = 1, o, i; n < e;) {
      for (i = n, o = r[n]; i && t(r[i - 1], o) > 0;) r[i] = r[--i];
      i !== n++ && (r[i] = o);
    } else for (var a = VN(e / 2), s = _Dl(eh(r, 0, a), t), l = _Dl(eh(r, a), t), c = s.length, u = l.length, f = 0, v = 0; f < c || v < u;) r[f + v] = f < c && v < u ? t(s[f], l[v]) <= 0 ? s[f++] : l[v++] : f < c ? s[f++] : l[v++];
    return r;
  },
  XN = _Dl,
  QN = Tt,
  th = QN.match(/firefox\/(\d+)/i),
  qN = !!th && +th[1],
  JN = Tt,
  ZN = /MSIE|Trident/.test(JN),
  eL = Tt,
  rh = eL.match(/AppleWebKit\/(\d+)\./),
  zm = !!rh && +rh[1],
  tL = E,
  Wm = M,
  rL = ve,
  nL = ee,
  nh = ne,
  oL = ga,
  oh = q,
  tu = B,
  iL = XN,
  aL = Rt,
  ih = qN,
  sL = ZN,
  ah = hr,
  sh = zm,
  Dt = [],
  lh = Wm(Dt.sort),
  lL = Wm(Dt.push),
  cL = tu(function () {
    Dt.sort(void 0);
  }),
  uL = tu(function () {
    Dt.sort(null);
  }),
  fL = aL("sort"),
  Hm = !tu(function () {
    if (ah) return ah < 70;
    if (!(ih && ih > 3)) {
      if (sL) return !0;
      if (sh) return sh < 603;
      var r = "",
        t,
        e,
        n,
        o;
      for (t = 65; t < 76; t++) {
        switch (e = String.fromCharCode(t), t) {
          case 66:
          case 69:
          case 70:
          case 72:
            n = 3;
            break;
          case 68:
          case 71:
            n = 4;
            break;
          default:
            n = 2;
        }
        for (o = 0; o < 47; o++) Dt.push({
          k: e + o,
          v: n
        });
      }
      for (Dt.sort(function (i, a) {
        return a.v - i.v;
      }), o = 0; o < Dt.length; o++) e = Dt[o].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
      return r !== "DGBEFHACIJK";
    }
  }),
  dL = cL || !uL || !fL || !Hm,
  hL = function hL(r) {
    return function (t, e) {
      return e === void 0 ? -1 : t === void 0 ? 1 : r !== void 0 ? +r(t, e) || 0 : oh(t) > oh(e) ? 1 : -1;
    };
  };
tL({
  target: "Array",
  proto: !0,
  forced: dL
}, {
  sort: function sort(t) {
    t !== void 0 && rL(t);
    var e = nL(this);
    if (Hm) return t === void 0 ? lh(e) : lh(e, t);
    var n = [],
      o = nh(e),
      i,
      a;
    for (a = 0; a < o; a++) a in e && lL(n, e[a]);
    for (iL(n, hL(t)), i = nh(n), a = 0; a < i;) e[a] = n[a++];
    for (; a < o;) oL(e, a++);
    return e;
  }
});
var vL = zc;
vL("Array");
var pL = E,
  gL = ee,
  mL = vr,
  yL = Ce,
  xL = ne,
  bL = eu,
  $L = pn,
  SL = yo,
  wL = wr,
  Cs = ga,
  TL = xo,
  IL = TL("splice"),
  AL = Math.max,
  EL = Math.min;
pL({
  target: "Array",
  proto: !0,
  forced: !IL
}, {
  splice: function splice(t, e) {
    var n = gL(this),
      o = xL(n),
      i = mL(t, o),
      a = arguments.length,
      s,
      l,
      c,
      u,
      f,
      v;
    for (a === 0 ? s = l = 0 : a === 1 ? (s = 0, l = o - i) : (s = a - 2, l = EL(AL(yL(e), 0), o - i)), $L(o + s - l), c = SL(n, l), u = 0; u < l; u++) f = i + u, f in n && wL(c, u, n[f]);
    if (c.length = l, s < l) {
      for (u = i; u < o - l; u++) f = u + l, v = u + s, f in n ? n[v] = n[f] : Cs(n, v);
      for (u = o; u > o - l + s; u--) Cs(n, u - 1);
    } else if (s > l) for (u = o - l; u > i; u--) f = u + l - 1, v = u + s - 1, f in n ? n[v] = n[f] : Cs(n, v);
    for (u = 0; u < s; u++) n[u + i] = arguments[u + 2];
    return bL(n, o - l + s), c;
  }
});
var CL = ne,
  RL = function RL(r, t) {
    for (var e = CL(r), n = new t(e), o = 0; o < e; o++) n[o] = r[e - o - 1];
    return n;
  },
  OL = E,
  _L = RL,
  PL = we,
  NL = ke,
  LL = Array;
OL({
  target: "Array",
  proto: !0
}, {
  toReversed: function toReversed() {
    return _L(PL(this), LL);
  }
});
NL("toReversed");
var FL = ne,
  kL = function kL(r, t, e) {
    for (var n = 0, o = arguments.length > 2 ? e : FL(t), i = new r(o); o > n;) i[n] = t[n++];
    return i;
  },
  BL = z,
  ML = function ML(r, t) {
    var e = BL[r],
      n = e && e.prototype;
    return n && n[t];
  },
  DL = E,
  jL = M,
  UL = ve,
  zL = we,
  WL = kL,
  HL = ML,
  YL = ke,
  KL = Array,
  GL = jL(HL("Array", "sort"));
DL({
  target: "Array",
  proto: !0
}, {
  toSorted: function toSorted(t) {
    t !== void 0 && UL(t);
    var e = zL(this),
      n = WL(KL, e);
    return GL(n, t);
  }
});
YL("toSorted");
var VL = E,
  XL = ke,
  QL = pn,
  qL = ne,
  JL = vr,
  ZL = we,
  eF = Ce,
  tF = Array,
  rF = Math.max,
  nF = Math.min;
VL({
  target: "Array",
  proto: !0
}, {
  toSpliced: function toSpliced(t, e) {
    var n = ZL(this),
      o = qL(n),
      i = JL(t, o),
      a = arguments.length,
      s = 0,
      l,
      c,
      u,
      f;
    for (a === 0 ? l = c = 0 : a === 1 ? (l = 0, c = o - i) : (l = a - 2, c = nF(rF(eF(e), 0), o - i)), u = QL(o + l - c), f = tF(u); s < i; s++) f[s] = n[s];
    for (; s < i + l; s++) f[s] = arguments[s - i + 2];
    for (; s < u; s++) f[s] = n[s + c - l];
    return f;
  }
});
XL("toSpliced");
var oF = ke;
oF("flat");
var iF = ke;
iF("flatMap");
var aF = E,
  sF = ee,
  lF = ne,
  cF = eu,
  uF = ga,
  fF = pn,
  dF = [].unshift(0) !== 1,
  hF = function hF() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).unshift();
    } catch (r) {
      return r instanceof TypeError;
    }
  },
  vF = dF || !hF();
aF({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: vF
}, {
  unshift: function unshift(t) {
    var e = sF(this),
      n = lF(e),
      o = arguments.length;
    if (o) {
      fF(n + o);
      for (var i = n; i--;) {
        var a = i + o;
        i in e ? e[a] = e[i] : uF(e, a);
      }
      for (var s = 0; s < o; s++) e[s] = arguments[s];
    }
    return cF(e, n + o);
  }
});
var pF = ne,
  gF = Ce,
  mF = RangeError,
  yF = function yF(r, t, e, n) {
    var o = pF(r),
      i = gF(e),
      a = i < 0 ? o + i : i;
    if (a >= o || a < 0) throw new mF("Incorrect index");
    for (var s = new t(o), l = 0; l < o; l++) s[l] = l === a ? n : r[l];
    return s;
  },
  xF = E,
  bF = yF,
  $F = we,
  SF = Array;
xF({
  target: "Array",
  proto: !0
}, {
  "with": function _with(r, t) {
    return bF($F(this), SF, r, t);
  }
});
var wF = ot;
wF.Array;
var TF = ye,
  Ym = function Ym() {
    var r = TF(this),
      t = "";
    return r.hasIndices && (t += "d"), r.global && (t += "g"), r.ignoreCase && (t += "i"), r.multiline && (t += "m"), r.dotAll && (t += "s"), r.unicode && (t += "u"), r.unicodeSets && (t += "v"), r.sticky && (t += "y"), t;
  },
  ru = B,
  IF = z,
  nu = IF.RegExp,
  ou = ru(function () {
    var r = nu("a", "y");
    return r.lastIndex = 2, r.exec("abcd") !== null;
  }),
  AF = ou || ru(function () {
    return !nu("a", "y").sticky;
  }),
  EF = ou || ru(function () {
    var r = nu("^r", "gy");
    return r.lastIndex = 2, r.exec("str") !== null;
  }),
  Km = {
    BROKEN_CARET: EF,
    MISSED_STICKY: AF,
    UNSUPPORTED_Y: ou
  },
  CF = B,
  RF = z,
  OF = RF.RegExp,
  _F = CF(function () {
    var r = OF(".", "s");
    return !(r.dotAll && r.test("\n") && r.flags === "s");
  }),
  PF = B,
  NF = z,
  LF = NF.RegExp,
  FF = PF(function () {
    var r = LF("(?<a>b)", "g");
    return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
  }),
  Hr = K,
  ma = M,
  kF = q,
  BF = Ym,
  MF = Km,
  DF = ln,
  jF = pr,
  UF = Yt.get,
  zF = _F,
  WF = FF,
  HF = DF("native-string-replace", String.prototype.replace),
  ji = RegExp.prototype.exec,
  _jl = ji,
  YF = ma("".charAt),
  KF = ma("".indexOf),
  GF = ma("".replace),
  Rs = ma("".slice),
  Ul = function () {
    var r = /a/,
      t = /b*/g;
    return Hr(ji, r, "a"), Hr(ji, t, "a"), r.lastIndex !== 0 || t.lastIndex !== 0;
  }(),
  Gm = MF.BROKEN_CARET,
  zl = /()??/.exec("")[1] !== void 0,
  VF = Ul || zl || Gm || zF || WF;
VF && (_jl = function jl(t) {
  var e = this,
    n = UF(e),
    o = kF(t),
    i = n.raw,
    a,
    s,
    l,
    c,
    u,
    f,
    v;
  if (i) return i.lastIndex = e.lastIndex, a = Hr(_jl, i, o), e.lastIndex = i.lastIndex, a;
  var p = n.groups,
    m = Gm && e.sticky,
    S = Hr(BF, e),
    w = e.source,
    $ = 0,
    y = o;
  if (m && (S = GF(S, "y", ""), KF(S, "g") === -1 && (S += "g"), y = Rs(o, e.lastIndex), e.lastIndex > 0 && (!e.multiline || e.multiline && YF(o, e.lastIndex - 1) !== "\n") && (w = "(?: " + w + ")", y = " " + y, $++), s = new RegExp("^(?:" + w + ")", S)), zl && (s = new RegExp("^" + w + "$(?!\\s)", S)), Ul && (l = e.lastIndex), c = Hr(ji, m ? s : e, y), m ? c ? (c.input = Rs(c.input, $), c[0] = Rs(c[0], $), c.index = e.lastIndex, e.lastIndex += c[0].length) : e.lastIndex = 0 : Ul && c && (e.lastIndex = e.global ? c.index + c[0].length : l), zl && c && c.length > 1 && Hr(HF, c[0], s, function () {
    for (u = 1; u < arguments.length - 2; u++) arguments[u] === void 0 && (c[u] = void 0);
  }), c && p) for (c.groups = f = jF(null), u = 0; u < p.length; u++) v = p[u], f[v[0]] = c[v[1]];
  return c;
});
var iu = _jl,
  XF = E,
  ch = iu;
XF({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== ch
}, {
  exec: ch
});
var QF = E,
  qF = M,
  JF = vr,
  ZF = RangeError,
  uh = String.fromCharCode,
  fh = String.fromCodePoint,
  ek = qF([].join),
  tk = !!fh && fh.length !== 1;
QF({
  target: "String",
  stat: !0,
  arity: 1,
  forced: tk
}, {
  fromCodePoint: function fromCodePoint(t) {
    for (var e = [], n = arguments.length, o = 0, i; n > o;) {
      if (i = +arguments[o++], JF(i, 1114111) !== i) throw new ZF(i + " is not a valid code point");
      e[o] = i < 65536 ? uh(i) : uh(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
    }
    return ek(e, "");
  }
});
var rk = E,
  Vm = M,
  nk = we,
  ok = ee,
  dh = q,
  ik = ne,
  hh = Vm([].push),
  ak = Vm([].join);
rk({
  target: "String",
  stat: !0
}, {
  raw: function raw(t) {
    var e = nk(ok(t).raw),
      n = ik(e);
    if (!n) return "";
    for (var o = arguments.length, i = [], a = 0;;) {
      if (hh(i, dh(e[a++])), a === n) return ak(i, "");
      a < o && hh(i, dh(arguments[a]));
    }
  }
});
var sk = E,
  lk = Hc.codeAt;
sk({
  target: "String",
  proto: !0
}, {
  codePointAt: function codePointAt(t) {
    return lk(this, t);
  }
});
var ck = E,
  uk = M,
  fk = re,
  dk = Ce,
  hk = q,
  vk = B,
  pk = uk("".charAt),
  gk = vk(function () {
    return "𠮷".at(-2) !== "\uD842";
  });
ck({
  target: "String",
  proto: !0,
  forced: gk
}, {
  at: function at(t) {
    var e = hk(fk(this)),
      n = e.length,
      o = dk(t),
      i = o >= 0 ? o : n + o;
    return i < 0 || i >= n ? void 0 : pk(e, i);
  }
});
var mk = Z,
  yk = ze,
  xk = J,
  bk = xk("match"),
  au = function au(r) {
    var t;
    return mk(r) && ((t = r[bk]) !== void 0 ? !!t : yk(r) === "RegExp");
  },
  $k = au,
  Sk = TypeError,
  su = function su(r) {
    if ($k(r)) throw new Sk("The method doesn't accept regular expressions");
    return r;
  },
  wk = J,
  Tk = wk("match"),
  lu = function lu(r) {
    var t = /./;
    try {
      "/./"[r](t);
    } catch (e) {
      try {
        return t[Tk] = !1, "/./"[r](t);
      } catch (n) {}
    }
    return !1;
  },
  Ik = E,
  Ak = co,
  Ek = nt.f,
  Ck = Ht,
  vh = q,
  Rk = su,
  Ok = re,
  _k = lu,
  Pk = Ak("".slice),
  Nk = Math.min,
  Xm = _k("endsWith"),
  Lk = !Xm && !!function () {
    var r = Ek(String.prototype, "endsWith");
    return r && !r.writable;
  }();
Ik({
  target: "String",
  proto: !0,
  forced: !Lk && !Xm
}, {
  endsWith: function endsWith(t) {
    var e = vh(Ok(this));
    Rk(t);
    var n = arguments.length > 1 ? arguments[1] : void 0,
      o = e.length,
      i = n === void 0 ? o : Nk(Ck(n), o),
      a = vh(t);
    return Pk(e, i - a.length, i) === a;
  }
});
var Fk = E,
  kk = M,
  Bk = su,
  Mk = re,
  ph = q,
  Dk = lu,
  jk = kk("".indexOf);
Fk({
  target: "String",
  proto: !0,
  forced: !Dk("includes")
}, {
  includes: function includes(t) {
    return !!~jk(ph(Mk(this)), ph(Bk(t)), arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Uk = E,
  zk = M,
  Wk = re,
  Hk = q,
  gh = zk("".charCodeAt);
Uk({
  target: "String",
  proto: !0
}, {
  isWellFormed: function isWellFormed() {
    for (var t = Hk(Wk(this)), e = t.length, n = 0; n < e; n++) {
      var o = gh(t, n);
      if ((o & 63488) === 55296 && (o >= 56320 || ++n >= e || (gh(t, n) & 64512) !== 56320)) return !1;
    }
    return !0;
  }
});
var mh = K,
  yh = We,
  Yk = iu,
  xh = B,
  Qm = J,
  Kk = mr,
  Gk = Qm("species"),
  Os = RegExp.prototype,
  ya = function ya(r, t, e, n) {
    var o = Qm(r),
      i = !xh(function () {
        var c = {};
        return c[o] = function () {
          return 7;
        }, ""[r](c) !== 7;
      }),
      a = i && !xh(function () {
        var c = !1,
          u = /a/;
        return r === "split" && (u = {}, u.constructor = {}, u.constructor[Gk] = function () {
          return u;
        }, u.flags = "", u[o] = /./[o]), u.exec = function () {
          return c = !0, null;
        }, u[o](""), !c;
      });
    if (!i || !a || e) {
      var s = /./[o],
        l = t(o, ""[r], function (c, u, f, v, p) {
          var m = u.exec;
          return m === Yk || m === Os.exec ? i && !p ? {
            done: !0,
            value: mh(s, u, f, v)
          } : {
            done: !0,
            value: mh(c, f, u, v)
          } : {
            done: !1
          };
        });
      yh(String.prototype, r, l[0]), yh(Os, o, l[1]);
    }
    n && Kk(Os[o], "sham", !0);
  },
  Vk = Hc.charAt,
  xa = function xa(r, t, e) {
    return t + (e ? Vk(r, t).length : 1);
  },
  bh = K,
  Xk = ye,
  Qk = Q,
  qk = ze,
  Jk = iu,
  Zk = TypeError,
  bo = function bo(r, t) {
    var e = r.exec;
    if (Qk(e)) {
      var n = bh(e, r, t);
      return n !== null && Xk(n), n;
    }
    if (qk(r) === "RegExp") return bh(Jk, r, t);
    throw new Zk("RegExp#exec called on incompatible receiver");
  },
  eB = K,
  tB = ya,
  rB = ye,
  nB = Je,
  oB = Ht,
  _s = q,
  iB = re,
  aB = At,
  sB = xa,
  $h = bo;
tB("match", function (r, t, e) {
  return [function (o) {
    var i = iB(this),
      a = nB(o) ? void 0 : aB(o, r);
    return a ? eB(a, o, i) : new RegExp(o)[r](_s(i));
  }, function (n) {
    var o = rB(this),
      i = _s(n),
      a = e(t, o, i);
    if (a.done) return a.value;
    if (!o.global) return $h(o, i);
    var s = o.unicode;
    o.lastIndex = 0;
    for (var l = [], c = 0, u; (u = $h(o, i)) !== null;) {
      var f = _s(u[0]);
      l[c] = f, f === "" && (o.lastIndex = sB(i, oB(o.lastIndex), s)), c++;
    }
    return c === 0 ? null : l;
  }];
});
var lB = K,
  cB = he,
  uB = It,
  fB = Ym,
  Sh = RegExp.prototype,
  qm = function qm(r) {
    var t = r.flags;
    return t === void 0 && !("flags" in Sh) && !cB(r, "flags") && uB(Sh, r) ? lB(fB, r) : t;
  },
  dB = E,
  hB = K,
  Jm = co,
  vB = Tg,
  ti = aa,
  wh = re,
  Zm = Ht,
  Xn = q,
  pB = ye,
  gB = Je,
  mB = ze,
  yB = au,
  ey = qm,
  xB = At,
  bB = We,
  $B = B,
  SB = J,
  wB = da,
  TB = xa,
  IB = bo,
  ty = Yt,
  AB = og,
  Ui = SB("matchAll"),
  ry = "RegExp String",
  ny = ry + " Iterator",
  EB = ty.set,
  CB = ty.getterFor(ny),
  Th = RegExp.prototype,
  RB = TypeError,
  Wl = Jm("".indexOf),
  zi = Jm("".matchAll),
  Ps = !!zi && !$B(function () {
    zi("a", /./);
  }),
  OB = vB(function (t, e, n, o) {
    EB(this, {
      type: ny,
      regexp: t,
      string: e,
      global: n,
      unicode: o,
      done: !1
    });
  }, ry, function () {
    var t = CB(this);
    if (t.done) return ti(void 0, !0);
    var e = t.regexp,
      n = t.string,
      o = IB(e, n);
    return o === null ? (t.done = !0, ti(void 0, !0)) : t.global ? (Xn(o[0]) === "" && (e.lastIndex = TB(n, Zm(e.lastIndex), t.unicode)), ti(o, !1)) : (t.done = !0, ti(o, !1));
  }),
  oy = function oy(r) {
    var t = pB(this),
      e = Xn(r),
      n = wB(t, RegExp),
      o = Xn(ey(t)),
      i,
      a,
      s;
    return i = new n(n === RegExp ? t.source : t, o), a = !!~Wl(o, "g"), s = !!~Wl(o, "u"), i.lastIndex = Zm(t.lastIndex), new OB(i, e, a, s);
  };
dB({
  target: "String",
  proto: !0,
  forced: Ps
}, {
  matchAll: function matchAll(t) {
    var e = wh(this),
      n,
      o,
      i,
      a;
    if (gB(t)) {
      if (Ps) return zi(e, t);
    } else {
      if (yB(t) && (n = Xn(wh(ey(t))), !~Wl(n, "g"))) throw new RB("`.matchAll` does not allow non-global regexes");
      if (Ps) return zi(e, t);
      if (i = xB(t, Ui), i === void 0 && AB && mB(t) === "RegExp" && (i = oy), i) return hB(i, t, e);
    }
    return o = Xn(e), a = new RegExp(t, "g"), a[Ui](o);
  }
});
Ui in Th || bB(Th, Ui, oy);
var _B = Ce,
  PB = q,
  NB = re,
  LB = RangeError,
  ba = function ba(t) {
    var e = PB(NB(this)),
      n = "",
      o = _B(t);
    if (o < 0 || o === 1 / 0) throw new LB("Wrong number of repetitions");
    for (; o > 0; (o >>>= 1) && (e += e)) o & 1 && (n += e);
    return n;
  },
  iy = M,
  FB = Ht,
  Ih = q,
  kB = ba,
  BB = re,
  MB = iy(kB),
  DB = iy("".slice),
  jB = Math.ceil,
  Ah = function Ah(r) {
    return function (t, e, n) {
      var o = Ih(BB(t)),
        i = FB(e),
        a = o.length,
        s = n === void 0 ? " " : Ih(n),
        l,
        c;
      return i <= a || s === "" ? o : (l = i - a, c = MB(s, jB(l / s.length)), c.length > l && (c = DB(c, 0, l)), r ? o + c : c + o);
    };
  },
  ay = {
    start: Ah(!1),
    end: Ah(!0)
  },
  UB = Tt,
  sy = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(UB),
  zB = E,
  WB = ay.end,
  HB = sy;
zB({
  target: "String",
  proto: !0,
  forced: HB
}, {
  padEnd: function padEnd(t) {
    return WB(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var YB = E,
  KB = ay.start,
  GB = sy;
YB({
  target: "String",
  proto: !0,
  forced: GB
}, {
  padStart: function padStart(t) {
    return KB(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var VB = E,
  XB = ba;
VB({
  target: "String",
  proto: !0
}, {
  repeat: XB
});
var cu = M,
  QB = ee,
  qB = Math.floor,
  Ns = cu("".charAt),
  JB = cu("".replace),
  Ls = cu("".slice),
  ZB = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  eM = /\$([$&'`]|\d{1,2})/g,
  ly = function ly(r, t, e, n, o, i) {
    var a = e + r.length,
      s = n.length,
      l = eM;
    return o !== void 0 && (o = QB(o), l = ZB), JB(i, l, function (c, u) {
      var f;
      switch (Ns(u, 0)) {
        case "$":
          return "$";
        case "&":
          return r;
        case "`":
          return Ls(t, 0, e);
        case "'":
          return Ls(t, a);
        case "<":
          f = o[Ls(u, 1, -1)];
          break;
        default:
          var v = +u;
          if (v === 0) return c;
          if (v > s) {
            var p = qB(v / 10);
            return p === 0 ? c : p <= s ? n[p - 1] === void 0 ? Ns(u, 1) : n[p - 1] + Ns(u, 1) : c;
          }
          f = n[v - 1];
      }
      return f === void 0 ? "" : f;
    });
  },
  tM = ha,
  Eh = K,
  $a = M,
  rM = ya,
  nM = B,
  oM = ye,
  iM = Q,
  aM = Je,
  sM = Ce,
  lM = Ht,
  Ar = q,
  cM = re,
  uM = xa,
  fM = At,
  dM = ly,
  hM = bo,
  vM = J,
  Hl = vM("replace"),
  pM = Math.max,
  gM = Math.min,
  mM = $a([].concat),
  Fs = $a([].push),
  Ch = $a("".indexOf),
  Rh = $a("".slice),
  yM = function yM(r) {
    return r === void 0 ? r : String(r);
  },
  xM = function () {
    return "a".replace(/./, "$0") === "$0";
  }(),
  Oh = function () {
    return /./[Hl] ? /./[Hl]("a", "$0") === "" : !1;
  }(),
  bM = !nM(function () {
    var r = /./;
    return r.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "".replace(r, "$<a>") !== "7";
  });
rM("replace", function (r, t, e) {
  var n = Oh ? "$" : "$0";
  return [function (i, a) {
    var s = cM(this),
      l = aM(i) ? void 0 : fM(i, Hl);
    return l ? Eh(l, i, s, a) : Eh(t, Ar(s), i, a);
  }, function (o, i) {
    var a = oM(this),
      s = Ar(o);
    if (typeof i == "string" && Ch(i, n) === -1 && Ch(i, "$<") === -1) {
      var l = e(t, a, s, i);
      if (l.done) return l.value;
    }
    var c = iM(i);
    c || (i = Ar(i));
    var u = a.global,
      f;
    u && (f = a.unicode, a.lastIndex = 0);
    for (var v = [], p; p = hM(a, s), !(p === null || (Fs(v, p), !u));) {
      var m = Ar(p[0]);
      m === "" && (a.lastIndex = uM(s, lM(a.lastIndex), f));
    }
    for (var S = "", w = 0, $ = 0; $ < v.length; $++) {
      p = v[$];
      for (var y = Ar(p[0]), d = pM(gM(sM(p.index), s.length), 0), h = [], g, T = 1; T < p.length; T++) Fs(h, yM(p[T]));
      var I = p.groups;
      if (c) {
        var C = mM([y], h, d, s);
        I !== void 0 && Fs(C, I), g = Ar(tM(i, void 0, C));
      } else g = dM(y, s, d, h, I, i);
      d >= w && (S += Rh(s, w, d) + g, w = d + y.length);
    }
    return S + Rh(s, w);
  }];
}, !bM || !xM || Oh);
var $M = E,
  SM = K,
  uu = M,
  _h = re,
  wM = Q,
  TM = Je,
  IM = au,
  Cn = q,
  AM = At,
  EM = qm,
  CM = ly,
  RM = J,
  OM = RM("replace"),
  _M = TypeError,
  ks = uu("".indexOf);
uu("".replace);
var Ph = uu("".slice),
  PM = Math.max;
$M({
  target: "String",
  proto: !0
}, {
  replaceAll: function replaceAll(t, e) {
    var n = _h(this),
      o,
      i,
      a,
      s,
      l,
      c,
      u,
      f,
      v,
      p,
      m = 0,
      S = "";
    if (!TM(t)) {
      if (o = IM(t), o && (i = Cn(_h(EM(t))), !~ks(i, "g"))) throw new _M("`.replaceAll` does not allow non-global regexes");
      if (a = AM(t, OM), a) return SM(a, t, n, e);
    }
    for (s = Cn(n), l = Cn(t), c = wM(e), c || (e = Cn(e)), u = l.length, f = PM(1, u), v = ks(s, l); v !== -1;) p = c ? Cn(e(l, v, s)) : CM(l, s, v, [], void 0, e), S += Ph(s, m, v) + p, m = v + u, v = v + f > s.length ? -1 : ks(s, l, v + f);
    return m < s.length && (S += Ph(s, m)), S;
  }
});
var cy = Object.is || function (t, e) {
    return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
  },
  NM = K,
  LM = ya,
  FM = ye,
  kM = Je,
  BM = re,
  Nh = cy,
  Lh = q,
  MM = At,
  DM = bo;
LM("search", function (r, t, e) {
  return [function (o) {
    var i = BM(this),
      a = kM(o) ? void 0 : MM(o, r);
    return a ? NM(a, o, i) : new RegExp(o)[r](Lh(i));
  }, function (n) {
    var o = FM(this),
      i = Lh(n),
      a = e(t, o, i);
    if (a.done) return a.value;
    var s = o.lastIndex;
    Nh(s, 0) || (o.lastIndex = 0);
    var l = DM(o, i);
    return Nh(o.lastIndex, s) || (o.lastIndex = s), l === null ? -1 : l.index;
  }];
});
var Bs = K,
  uy = M,
  jM = ya,
  UM = ye,
  zM = Je,
  WM = re,
  HM = da,
  YM = xa,
  KM = Ht,
  Fh = q,
  GM = At,
  kh = bo,
  VM = Km,
  XM = B,
  Er = VM.UNSUPPORTED_Y,
  QM = 4294967295,
  qM = Math.min,
  Ms = uy([].push),
  Ds = uy("".slice),
  JM = !XM(function () {
    var r = /(?:)/,
      t = r.exec;
    r.exec = function () {
      return t.apply(this, arguments);
    };
    var e = "ab".split(r);
    return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
  }),
  Bh = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
jM("split", function (r, t, e) {
  var n = "0".split(void 0, 0).length ? function (o, i) {
    return o === void 0 && i === 0 ? [] : Bs(t, this, o, i);
  } : t;
  return [function (i, a) {
    var s = WM(this),
      l = zM(i) ? void 0 : GM(i, r);
    return l ? Bs(l, i, s, a) : Bs(n, Fh(s), i, a);
  }, function (o, i) {
    var a = UM(this),
      s = Fh(o);
    if (!Bh) {
      var l = e(n, a, s, i, n !== t);
      if (l.done) return l.value;
    }
    var c = HM(a, RegExp),
      u = a.unicode,
      f = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Er ? "g" : "y"),
      v = new c(Er ? "^(?:" + a.source + ")" : a, f),
      p = i === void 0 ? QM : i >>> 0;
    if (p === 0) return [];
    if (s.length === 0) return kh(v, s) === null ? [s] : [];
    for (var m = 0, S = 0, w = []; S < s.length;) {
      v.lastIndex = Er ? 0 : S;
      var $ = kh(v, Er ? Ds(s, S) : s),
        y;
      if ($ === null || (y = qM(KM(v.lastIndex + (Er ? S : 0)), s.length)) === m) S = YM(s, S, u);else {
        if (Ms(w, Ds(s, m, S)), w.length === p) return w;
        for (var d = 1; d <= $.length - 1; d++) if (Ms(w, $[d]), w.length === p) return w;
        S = m = y;
      }
    }
    return Ms(w, Ds(s, m)), w;
  }];
}, Bh || !JM, Er);
var ZM = E,
  eD = co,
  tD = nt.f,
  rD = Ht,
  Mh = q,
  nD = su,
  oD = re,
  iD = lu,
  aD = eD("".slice),
  sD = Math.min,
  fy = iD("startsWith"),
  lD = !fy && !!function () {
    var r = tD(String.prototype, "startsWith");
    return r && !r.writable;
  }();
ZM({
  target: "String",
  proto: !0,
  forced: !lD && !fy
}, {
  startsWith: function startsWith(t) {
    var e = Mh(oD(this));
    nD(t);
    var n = rD(sD(arguments.length > 1 ? arguments[1] : void 0, e.length)),
      o = Mh(t);
    return aD(e, n, n + o.length) === o;
  }
});
var cD = E,
  uD = M,
  fD = re,
  Dh = Ce,
  dD = q,
  hD = uD("".slice),
  vD = Math.max,
  pD = Math.min,
  gD = !"".substr || "ab".substr(-1) !== "b";
cD({
  target: "String",
  proto: !0,
  forced: gD
}, {
  substr: function substr(t, e) {
    var n = dD(fD(this)),
      o = n.length,
      i = Dh(t),
      a,
      s;
    return i === 1 / 0 && (i = 0), i < 0 && (i = vD(o + i, 0)), a = e === void 0 ? o : Dh(e), a <= 0 || a === 1 / 0 ? "" : (s = pD(i + a, o), i >= s ? "" : hD(n, i, s));
  }
});
var mD = E,
  dy = K,
  fu = M,
  yD = re,
  xD = q,
  bD = B,
  $D = Array,
  js = fu("".charAt),
  jh = fu("".charCodeAt),
  SD = fu([].join),
  Yl = "".toWellFormed,
  wD = "�",
  Uh = Yl && bD(function () {
    return dy(Yl, 1) !== "1";
  });
mD({
  target: "String",
  proto: !0,
  forced: Uh
}, {
  toWellFormed: function toWellFormed() {
    var t = xD(yD(this));
    if (Uh) return dy(Yl, t);
    for (var e = t.length, n = $D(e), o = 0; o < e; o++) {
      var i = jh(t, o);
      (i & 63488) !== 55296 ? n[o] = js(t, o) : i >= 56320 || o + 1 >= e || (jh(t, o + 1) & 64512) !== 56320 ? n[o] = wD : (n[o] = js(t, o), n[++o] = js(t, o));
    }
    return SD(n, "");
  }
});
var Sa = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
  TD = M,
  ID = re,
  AD = q,
  Kl = Sa,
  zh = TD("".replace),
  ED = RegExp("^[" + Kl + "]+"),
  CD = RegExp("(^|[^" + Kl + "])[" + Kl + "]+$"),
  Us = function Us(r) {
    return function (t) {
      var e = AD(ID(t));
      return r & 1 && (e = zh(e, ED, "")), r & 2 && (e = zh(e, CD, "$1")), e;
    };
  },
  gn = {
    start: Us(1),
    end: Us(2),
    trim: Us(3)
  },
  RD = oa.PROPER,
  OD = B,
  Wh = Sa,
  Hh = "​᠎",
  du = function du(r) {
    return OD(function () {
      return !!Wh[r]() || Hh[r]() !== Hh || RD && Wh[r].name !== r;
    });
  },
  _D = E,
  PD = gn.trim,
  ND = du;
_D({
  target: "String",
  proto: !0,
  forced: ND("trim")
}, {
  trim: function trim() {
    return PD(this);
  }
});
var LD = gn.start,
  FD = du,
  hy = FD("trimStart") ? function () {
    return LD(this);
  } : "".trimStart,
  kD = E,
  Yh = hy;
kD({
  target: "String",
  proto: !0,
  name: "trimStart",
  forced: "".trimLeft !== Yh
}, {
  trimLeft: Yh
});
var BD = E,
  Kh = hy;
BD({
  target: "String",
  proto: !0,
  name: "trimStart",
  forced: "".trimStart !== Kh
}, {
  trimStart: Kh
});
var MD = gn.end,
  DD = du,
  vy = DD("trimEnd") ? function () {
    return MD(this);
  } : "".trimEnd,
  jD = E,
  Gh = vy;
jD({
  target: "String",
  proto: !0,
  name: "trimEnd",
  forced: "".trimRight !== Gh
}, {
  trimRight: Gh
});
var UD = E,
  Vh = vy;
UD({
  target: "String",
  proto: !0,
  name: "trimEnd",
  forced: "".trimEnd !== Vh
}, {
  trimEnd: Vh
});
var zD = M,
  WD = re,
  Xh = q,
  HD = /"/g,
  YD = zD("".replace),
  He = function He(r, t, e, n) {
    var o = Xh(WD(r)),
      i = "<" + t;
    return e !== "" && (i += " " + e + '="' + YD(Xh(n), HD, "&quot;") + '"'), i + ">" + o + "</" + t + ">";
  },
  KD = B,
  Ye = function Ye(r) {
    return KD(function () {
      var t = ""[r]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3;
    });
  },
  GD = E,
  VD = He,
  XD = Ye;
GD({
  target: "String",
  proto: !0,
  forced: XD("anchor")
}, {
  anchor: function anchor(t) {
    return VD(this, "a", "name", t);
  }
});
var QD = E,
  qD = He,
  JD = Ye;
QD({
  target: "String",
  proto: !0,
  forced: JD("big")
}, {
  big: function big() {
    return qD(this, "big", "", "");
  }
});
var ZD = E,
  ej = He,
  tj = Ye;
ZD({
  target: "String",
  proto: !0,
  forced: tj("blink")
}, {
  blink: function blink() {
    return ej(this, "blink", "", "");
  }
});
var rj = E,
  nj = He,
  oj = Ye;
rj({
  target: "String",
  proto: !0,
  forced: oj("bold")
}, {
  bold: function bold() {
    return nj(this, "b", "", "");
  }
});
var ij = E,
  aj = He,
  sj = Ye;
ij({
  target: "String",
  proto: !0,
  forced: sj("fixed")
}, {
  fixed: function fixed() {
    return aj(this, "tt", "", "");
  }
});
var lj = E,
  cj = He,
  uj = Ye;
lj({
  target: "String",
  proto: !0,
  forced: uj("fontcolor")
}, {
  fontcolor: function fontcolor(t) {
    return cj(this, "font", "color", t);
  }
});
var fj = E,
  dj = He,
  hj = Ye;
fj({
  target: "String",
  proto: !0,
  forced: hj("fontsize")
}, {
  fontsize: function fontsize(t) {
    return dj(this, "font", "size", t);
  }
});
var vj = E,
  pj = He,
  gj = Ye;
vj({
  target: "String",
  proto: !0,
  forced: gj("italics")
}, {
  italics: function italics() {
    return pj(this, "i", "", "");
  }
});
var mj = E,
  yj = He,
  xj = Ye;
mj({
  target: "String",
  proto: !0,
  forced: xj("link")
}, {
  link: function link(t) {
    return yj(this, "a", "href", t);
  }
});
var bj = E,
  $j = He,
  Sj = Ye;
bj({
  target: "String",
  proto: !0,
  forced: Sj("small")
}, {
  small: function small() {
    return $j(this, "small", "", "");
  }
});
var wj = E,
  Tj = He,
  Ij = Ye;
wj({
  target: "String",
  proto: !0,
  forced: Ij("strike")
}, {
  strike: function strike() {
    return Tj(this, "strike", "", "");
  }
});
var Aj = E,
  Ej = He,
  Cj = Ye;
Aj({
  target: "String",
  proto: !0,
  forced: Cj("sub")
}, {
  sub: function sub() {
    return Ej(this, "sub", "", "");
  }
});
var Rj = E,
  Oj = He,
  _j = Ye;
Rj({
  target: "String",
  proto: !0,
  forced: _j("sup")
}, {
  sup: function sup() {
    return Oj(this, "sup", "", "");
  }
});
var Pj = ot;
Pj.String;
var Nj = M,
  wa = Nj(1 .valueOf),
  Lj = E,
  py = og,
  Fj = Y,
  gy = z,
  my = ot,
  yy = M,
  kj = ia,
  Qh = he,
  Bj = Ug,
  Mj = It,
  Dj = eo,
  xy = cg,
  jj = B,
  Uj = dn.f,
  zj = nt.f,
  Wj = Te.f,
  Hj = wa,
  Yj = gn.trim,
  Ta = "Number",
  Gr = gy[Ta];
my[Ta];
var hu = Gr.prototype,
  Kj = gy.TypeError,
  Gj = yy("".slice),
  ri = yy("".charCodeAt),
  Vj = function Vj(r) {
    var t = xy(r, "number");
    return typeof t == "bigint" ? t : Xj(t);
  },
  Xj = function Xj(r) {
    var t = xy(r, "number"),
      e,
      n,
      o,
      i,
      a,
      s,
      l,
      c;
    if (Dj(t)) throw new Kj("Cannot convert a Symbol value to a number");
    if (typeof t == "string" && t.length > 2) {
      if (t = Yj(t), e = ri(t, 0), e === 43 || e === 45) {
        if (n = ri(t, 2), n === 88 || n === 120) return NaN;
      } else if (e === 48) {
        switch (ri(t, 1)) {
          case 66:
          case 98:
            o = 2, i = 49;
            break;
          case 79:
          case 111:
            o = 8, i = 55;
            break;
          default:
            return +t;
        }
        for (a = Gj(t, 2), s = a.length, l = 0; l < s; l++) if (c = ri(a, l), c < 48 || c > i) return NaN;
        return parseInt(a, o);
      }
    }
    return +t;
  },
  vu = kj(Ta, !Gr(" 0o1") || !Gr("0b1") || Gr("+0x1")),
  Qj = function Qj(r) {
    return Mj(hu, r) && jj(function () {
      Hj(r);
    });
  },
  _Ia = function Ia(t) {
    var e = arguments.length < 1 ? 0 : Gr(Vj(t));
    return Qj(this) ? Bj(Object(e), this, _Ia) : e;
  };
_Ia.prototype = hu;
vu && !py && (hu.constructor = _Ia);
Lj({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: vu
}, {
  Number: _Ia
});
var qj = function qj(r, t) {
  for (var e = Fj ? Uj(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0, o; e.length > n; n++) Qh(t, o = e[n]) && !Qh(r, o) && Wj(r, o, zj(t, o));
};
(vu || py) && qj(my[Ta], Gr);
var Jj = E;
Jj({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  EPSILON: Math.pow(2, -52)
});
var Zj = z,
  eU = Zj.isFinite,
  tU = Number.isFinite || function (t) {
    return typeof t == "number" && eU(t);
  },
  rU = E,
  nU = tU;
rU({
  target: "Number",
  stat: !0
}, {
  isFinite: nU
});
var oU = Z,
  iU = Math.floor,
  by = Number.isInteger || function (t) {
    return !oU(t) && isFinite(t) && iU(t) === t;
  },
  aU = E,
  sU = by;
aU({
  target: "Number",
  stat: !0
}, {
  isInteger: sU
});
var lU = E;
lU({
  target: "Number",
  stat: !0
}, {
  isNaN: function isNaN(t) {
    return t !== t;
  }
});
var cU = E,
  uU = by,
  fU = Math.abs;
cU({
  target: "Number",
  stat: !0
}, {
  isSafeInteger: function isSafeInteger(t) {
    return uU(t) && fU(t) <= 9007199254740991;
  }
});
var dU = E;
dU({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  MAX_SAFE_INTEGER: 9007199254740991
});
var hU = E;
hU({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  MIN_SAFE_INTEGER: -9007199254740991
});
var $y = z,
  vU = B,
  pU = M,
  gU = q,
  mU = gn.trim,
  yU = Sa,
  xU = pU("".charAt),
  Wi = $y.parseFloat,
  qh = $y.Symbol,
  Jh = qh && qh.iterator,
  bU = 1 / Wi(yU + "-0") !== -1 / 0 || Jh && !vU(function () {
    Wi(Object(Jh));
  }),
  $U = bU ? function (t) {
    var e = mU(gU(t)),
      n = Wi(e);
    return n === 0 && xU(e, 0) === "-" ? -0 : n;
  } : Wi,
  SU = E,
  Zh = $U;
SU({
  target: "Number",
  stat: !0,
  forced: Number.parseFloat !== Zh
}, {
  parseFloat: Zh
});
var Sy = z,
  wU = B,
  TU = M,
  IU = q,
  AU = gn.trim,
  ev = Sa,
  zn = Sy.parseInt,
  tv = Sy.Symbol,
  rv = tv && tv.iterator,
  wy = /^[+-]?0x/i,
  EU = TU(wy.exec),
  CU = zn(ev + "08") !== 8 || zn(ev + "0x16") !== 22 || rv && !wU(function () {
    zn(Object(rv));
  }),
  RU = CU ? function (t, e) {
    var n = AU(IU(t));
    return zn(n, e >>> 0 || (EU(wy, n) ? 16 : 10));
  } : zn,
  OU = E,
  nv = RU;
OU({
  target: "Number",
  stat: !0,
  forced: Number.parseInt !== nv
}, {
  parseInt: nv
});
var _U = Math.log,
  PU = Math.LOG10E,
  NU = Math.log10 || function (t) {
    return _U(t) * PU;
  },
  LU = E,
  pu = M,
  FU = Ce,
  kU = wa,
  BU = ba,
  MU = NU,
  Gl = B,
  DU = RangeError,
  ov = String,
  jU = isFinite,
  UU = Math.abs,
  zU = Math.floor,
  iv = Math.pow,
  WU = Math.round,
  ut = pu(1 .toExponential),
  HU = pu(BU),
  av = pu("".slice),
  Ty = ut(-69e-12, 4) === "-6.9000e-11" && ut(1.255, 2) === "1.25e+0" && ut(12345, 3) === "1.235e+4" && ut(25, 0) === "3e+1",
  YU = function YU() {
    return Gl(function () {
      ut(1, 1 / 0);
    }) && Gl(function () {
      ut(1, -1 / 0);
    });
  },
  KU = function KU() {
    return !Gl(function () {
      ut(1 / 0, 1 / 0), ut(NaN, 1 / 0);
    });
  },
  GU = !Ty || !YU() || !KU();
LU({
  target: "Number",
  proto: !0,
  forced: GU
}, {
  toExponential: function toExponential(t) {
    var e = kU(this);
    if (t === void 0) return ut(e);
    var n = FU(t);
    if (!jU(e)) return String(e);
    if (n < 0 || n > 20) throw new DU("Incorrect fraction digits");
    if (Ty) return ut(e, n);
    var o = "",
      i,
      a,
      s,
      l;
    if (e < 0 && (o = "-", e = -e), e === 0) a = 0, i = HU("0", n + 1);else {
      var c = MU(e);
      a = zU(c);
      var u = iv(10, a - n),
        f = WU(e / u);
      2 * e >= (2 * f + 1) * u && (f += 1), f >= iv(10, n + 1) && (f /= 10, a += 1), i = ov(f);
    }
    return n !== 0 && (i = av(i, 0, 1) + "." + av(i, 1)), a === 0 ? (s = "+", l = "0") : (s = a > 0 ? "+" : "-", l = ov(UU(a))), i += "e" + s + l, o + i;
  }
});
var VU = E,
  gu = M,
  XU = Ce,
  QU = wa,
  qU = ba,
  sv = B,
  JU = RangeError,
  Iy = String,
  Ay = Math.floor,
  Vl = gu(qU),
  lv = gu("".slice),
  Rn = gu(1 .toFixed),
  _Yr = function Yr(r, t, e) {
    return t === 0 ? e : t % 2 === 1 ? _Yr(r, t - 1, e * r) : _Yr(r * r, t / 2, e);
  },
  ZU = function ZU(r) {
    for (var t = 0, e = r; e >= 4096;) t += 12, e /= 4096;
    for (; e >= 2;) t += 1, e /= 2;
    return t;
  },
  Cr = function Cr(r, t, e) {
    for (var n = -1, o = e; ++n < 6;) o += t * r[n], r[n] = o % 1e7, o = Ay(o / 1e7);
  },
  zs = function zs(r, t) {
    for (var e = 6, n = 0; --e >= 0;) n += r[e], r[e] = Ay(n / t), n = n % t * 1e7;
  },
  cv = function cv(r) {
    for (var t = 6, e = ""; --t >= 0;) if (e !== "" || t === 0 || r[t] !== 0) {
      var n = Iy(r[t]);
      e = e === "" ? n : e + Vl("0", 7 - n.length) + n;
    }
    return e;
  },
  ez = sv(function () {
    return Rn(8e-5, 3) !== "0.000" || Rn(.9, 0) !== "1" || Rn(1.255, 2) !== "1.25" || Rn(0xde0b6b3a7640080, 0) !== "1000000000000000128";
  }) || !sv(function () {
    Rn({});
  });
VU({
  target: "Number",
  proto: !0,
  forced: ez
}, {
  toFixed: function toFixed(t) {
    var e = QU(this),
      n = XU(t),
      o = [0, 0, 0, 0, 0, 0],
      i = "",
      a = "0",
      s,
      l,
      c,
      u;
    if (n < 0 || n > 20) throw new JU("Incorrect fraction digits");
    if (e !== e) return "NaN";
    if (e <= -1e21 || e >= 1e21) return Iy(e);
    if (e < 0 && (i = "-", e = -e), e > 1e-21) if (s = ZU(e * _Yr(2, 69, 1)) - 69, l = s < 0 ? e * _Yr(2, -s, 1) : e / _Yr(2, s, 1), l *= 4503599627370496, s = 52 - s, s > 0) {
      for (Cr(o, 0, l), c = n; c >= 7;) Cr(o, 1e7, 0), c -= 7;
      for (Cr(o, _Yr(10, c, 1), 0), c = s - 1; c >= 23;) zs(o, 1 << 23), c -= 23;
      zs(o, 1 << c), Cr(o, 1, 1), zs(o, 2), a = cv(o);
    } else Cr(o, 0, l), Cr(o, 1 << -s, 0), a = cv(o) + Vl("0", n);
    return n > 0 ? (u = a.length, a = i + (u <= n ? "0." + Vl("0", n - u) + a : lv(a, 0, u - n) + "." + lv(a, u - n))) : a = i + a, a;
  }
});
var tz = E,
  rz = M,
  uv = B,
  fv = wa,
  Hi = rz(1 .toPrecision),
  nz = uv(function () {
    return Hi(1, void 0) !== "1";
  }) || !uv(function () {
    Hi({});
  });
tz({
  target: "Number",
  proto: !0,
  forced: nz
}, {
  toPrecision: function toPrecision(t) {
    return t === void 0 ? Hi(fv(this)) : Hi(fv(this), t);
  }
});
var oz = ot;
oz.Number;
var mu = {},
  iz = J;
mu.f = iz;
var dv = ot,
  az = he,
  sz = mu,
  lz = Te.f,
  Be = function Be(r) {
    var t = dv.Symbol || (dv.Symbol = {});
    az(t, r) || lz(t, r, {
      value: sz.f(r)
    });
  },
  cz = K,
  uz = Pe,
  fz = J,
  dz = We,
  Ey = function Ey() {
    var r = uz("Symbol"),
      t = r && r.prototype,
      e = t && t.valueOf,
      n = fz("toPrimitive");
    t && !t[n] && dz(t, n, function (o) {
      return cz(e, this);
    }, {
      arity: 1
    });
  },
  Aa = E,
  $o = z,
  yu = K,
  hz = M,
  Zr = Y,
  en = cn,
  vz = B,
  Se = he,
  pz = It,
  Xl = ye,
  Ea = we,
  xu = fn,
  gz = q,
  Ql = gr,
  tn = pr,
  Cy = ro,
  mz = dn,
  Ry = sa,
  yz = io,
  Oy = nt,
  _y = Te,
  xz = ra,
  Py = oo,
  Ws = We,
  bz = vn,
  bu = ln,
  $z = na,
  Ny = to,
  hv = ta,
  Sz = J,
  wz = mu,
  Tz = Be,
  Iz = Ey,
  Az = Et,
  Ly = Yt,
  Ca = Vt.forEach,
  Le = $z("hidden"),
  Ra = "Symbol",
  Qn = "prototype",
  Ez = Ly.set,
  vv = Ly.getterFor(Ra),
  qe = Object[Qn],
  sr = $o.Symbol,
  Mn = sr && sr[Qn],
  Cz = $o.RangeError,
  Rz = $o.TypeError,
  Hs = $o.QObject,
  Fy = Oy.f,
  lr = _y.f,
  ky = Ry.f,
  Oz = Py.f,
  By = hz([].push),
  wt = bu("symbols"),
  So = bu("op-symbols"),
  _z = bu("wks"),
  ql = !Hs || !Hs[Qn] || !Hs[Qn].findChild,
  My = function My(r, t, e) {
    var n = Fy(qe, t);
    n && delete qe[t], lr(r, t, e), n && r !== qe && lr(qe, t, n);
  },
  Jl = Zr && vz(function () {
    return tn(lr({}, "a", {
      get: function get() {
        return lr(this, "a", {
          value: 7
        }).a;
      }
    })).a !== 7;
  }) ? My : lr,
  Ys = function Ys(r, t) {
    var e = wt[r] = tn(Mn);
    return Ez(e, {
      type: Ra,
      tag: r,
      description: t
    }), Zr || (e.description = t), e;
  },
  _Oa = function Oa(t, e, n) {
    t === qe && _Oa(So, e, n), Xl(t);
    var o = xu(e);
    return Xl(n), Se(wt, o) ? (n.enumerable ? (Se(t, Le) && t[Le][o] && (t[Le][o] = !1), n = tn(n, {
      enumerable: Ql(0, !1)
    })) : (Se(t, Le) || lr(t, Le, Ql(1, tn(null))), t[Le][o] = !0), Jl(t, o, n)) : lr(t, o, n);
  },
  $u = function $u(t, e) {
    Xl(t);
    var n = Ea(e),
      o = Cy(n).concat(Uy(n));
    return Ca(o, function (i) {
      (!Zr || yu(Zl, n, i)) && _Oa(t, i, n[i]);
    }), t;
  },
  Pz = function Pz(t, e) {
    return e === void 0 ? tn(t) : $u(tn(t), e);
  },
  Zl = function Zl(t) {
    var e = xu(t),
      n = yu(Oz, this, e);
    return this === qe && Se(wt, e) && !Se(So, e) ? !1 : n || !Se(this, e) || !Se(wt, e) || Se(this, Le) && this[Le][e] ? n : !0;
  },
  Dy = function Dy(t, e) {
    var n = Ea(t),
      o = xu(e);
    if (!(n === qe && Se(wt, o) && !Se(So, o))) {
      var i = Fy(n, o);
      return i && Se(wt, o) && !(Se(n, Le) && n[Le][o]) && (i.enumerable = !0), i;
    }
  },
  jy = function jy(t) {
    var e = ky(Ea(t)),
      n = [];
    return Ca(e, function (o) {
      !Se(wt, o) && !Se(Ny, o) && By(n, o);
    }), n;
  },
  Uy = function Uy(r) {
    var t = r === qe,
      e = ky(t ? So : Ea(r)),
      n = [];
    return Ca(e, function (o) {
      Se(wt, o) && (!t || Se(qe, o)) && By(n, wt[o]);
    }), n;
  };
en || (sr = function sr() {
  if (pz(Mn, this)) throw new Rz("Symbol is not a constructor");
  var t = !arguments.length || arguments[0] === void 0 ? void 0 : gz(arguments[0]),
    e = hv(t),
    _n2 = function n(o) {
      var i = this === void 0 ? $o : this;
      i === qe && yu(_n2, So, o), Se(i, Le) && Se(i[Le], e) && (i[Le][e] = !1);
      var a = Ql(1, o);
      try {
        Jl(i, e, a);
      } catch (s) {
        if (!(s instanceof Cz)) throw s;
        My(i, e, a);
      }
    };
  return Zr && ql && Jl(qe, e, {
    configurable: !0,
    set: _n2
  }), Ys(e, t);
}, Mn = sr[Qn], Ws(Mn, "toString", function () {
  return vv(this).tag;
}), Ws(sr, "withoutSetter", function (r) {
  return Ys(hv(r), r);
}), Py.f = Zl, _y.f = _Oa, xz.f = $u, Oy.f = Dy, mz.f = Ry.f = jy, yz.f = Uy, wz.f = function (r) {
  return Ys(Sz(r), r);
}, Zr && (bz(Mn, "description", {
  configurable: !0,
  get: function get() {
    return vv(this).description;
  }
}), Ws(qe, "propertyIsEnumerable", Zl, {
  unsafe: !0
})));
Aa({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: !en,
  sham: !en
}, {
  Symbol: sr
});
Ca(Cy(_z), function (r) {
  Tz(r);
});
Aa({
  target: Ra,
  stat: !0,
  forced: !en
}, {
  useSetter: function useSetter() {
    ql = !0;
  },
  useSimple: function useSimple() {
    ql = !1;
  }
});
Aa({
  target: "Object",
  stat: !0,
  forced: !en,
  sham: !Zr
}, {
  create: Pz,
  defineProperty: _Oa,
  defineProperties: $u,
  getOwnPropertyDescriptor: Dy
});
Aa({
  target: "Object",
  stat: !0,
  forced: !en
}, {
  getOwnPropertyNames: jy
});
Iz();
Az(sr, Ra);
Ny[Le] = !0;
var Nz = cn,
  zy = Nz && !!Symbol["for"] && !!Symbol.keyFor,
  Lz = E,
  Fz = Pe,
  kz = he,
  Bz = q,
  Wy = ln,
  Mz = zy,
  Ks = Wy("string-to-symbol-registry"),
  Dz = Wy("symbol-to-string-registry");
Lz({
  target: "Symbol",
  stat: !0,
  forced: !Mz
}, {
  "for": function _for(r) {
    var t = Bz(r);
    if (kz(Ks, t)) return Ks[t];
    var e = Fz("Symbol")(t);
    return Ks[t] = e, Dz[e] = t, e;
  }
});
var jz = E,
  Uz = he,
  zz = eo,
  Wz = un,
  Hz = ln,
  Yz = zy,
  pv = Hz("symbol-to-string-registry");
jz({
  target: "Symbol",
  stat: !0,
  forced: !Yz
}, {
  keyFor: function keyFor(t) {
    if (!zz(t)) throw new TypeError(Wz(t) + " is not a symbol");
    if (Uz(pv, t)) return pv[t];
  }
});
var Kz = M,
  gv = Gt,
  Gz = Q,
  mv = ze,
  Vz = q,
  yv = Kz([].push),
  Xz = function Xz(r) {
    if (Gz(r)) return r;
    if (gv(r)) {
      for (var t = r.length, e = [], n = 0; n < t; n++) {
        var o = r[n];
        typeof o == "string" ? yv(e, o) : (typeof o == "number" || mv(o) === "Number" || mv(o) === "String") && yv(e, Vz(o));
      }
      var i = e.length,
        a = !0;
      return function (s, l) {
        if (a) return a = !1, l;
        if (gv(this)) return l;
        for (var c = 0; c < i; c++) if (e[c] === s) return l;
      };
    }
  },
  Qz = E,
  Hy = Pe,
  Yy = ha,
  qz = K,
  wo = M,
  Ky = B,
  xv = Q,
  bv = eo,
  Gy = hn,
  Jz = Xz,
  Zz = cn,
  e4 = String,
  zt = Hy("JSON", "stringify"),
  ni = wo(/./.exec),
  $v = wo("".charAt),
  t4 = wo("".charCodeAt),
  r4 = wo("".replace),
  n4 = wo(1 .toString),
  o4 = /[\uD800-\uDFFF]/g,
  Sv = /^[\uD800-\uDBFF]$/,
  wv = /^[\uDC00-\uDFFF]$/,
  Tv = !Zz || Ky(function () {
    var r = Hy("Symbol")("stringify detection");
    return zt([r]) !== "[null]" || zt({
      a: r
    }) !== "{}" || zt(Object(r)) !== "{}";
  }),
  Iv = Ky(function () {
    return zt("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || zt("\uDEAD") !== "\"\\udead\"";
  }),
  i4 = function i4(r, t) {
    var e = Gy(arguments),
      n = Jz(t);
    if (!(!xv(n) && (r === void 0 || bv(r)))) return e[1] = function (o, i) {
      if (xv(n) && (i = qz(n, this, e4(o), i)), !bv(i)) return i;
    }, Yy(zt, null, e);
  },
  a4 = function a4(r, t, e) {
    var n = $v(e, t - 1),
      o = $v(e, t + 1);
    return ni(Sv, r) && !ni(wv, o) || ni(wv, r) && !ni(Sv, n) ? "\\u" + n4(t4(r, 0), 16) : r;
  };
zt && Qz({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: Tv || Iv
}, {
  stringify: function stringify(t, e, n) {
    var o = Gy(arguments),
      i = Yy(Tv ? i4 : zt, null, o);
    return Iv && typeof i == "string" ? r4(i, o4, a4) : i;
  }
});
var s4 = E,
  l4 = cn,
  c4 = B,
  Vy = io,
  u4 = ee,
  f4 = !l4 || c4(function () {
    Vy.f(1);
  });
s4({
  target: "Object",
  stat: !0,
  forced: f4
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(t) {
    var e = Vy.f;
    return e ? e(u4(t)) : [];
  }
});
var Av = Y,
  d4 = M,
  h4 = K,
  v4 = B,
  Gs = ro,
  p4 = io,
  g4 = oo,
  m4 = ee,
  y4 = sn,
  Rr = Object.assign,
  Ev = Object.defineProperty,
  x4 = d4([].concat),
  b4 = !Rr || v4(function () {
    if (Av && Rr({
      b: 1
    }, Rr(Ev({}, "a", {
      enumerable: !0,
      get: function get() {
        Ev(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b !== 1) return !0;
    var r = {},
      t = {},
      e = Symbol("assign detection"),
      n = "abcdefghijklmnopqrst";
    return r[e] = 7, n.split("").forEach(function (o) {
      t[o] = o;
    }), Rr({}, r)[e] !== 7 || Gs(Rr({}, t)).join("") !== n;
  }) ? function (t, e) {
    for (var n = m4(t), o = arguments.length, i = 1, a = p4.f, s = g4.f; o > i;) for (var l = y4(arguments[i++]), c = a ? x4(Gs(l), a(l)) : Gs(l), u = c.length, f = 0, v; u > f;) v = c[f++], (!Av || h4(s, l, v)) && (n[v] = l[v]);
    return n;
  } : Rr,
  $4 = E,
  Cv = b4;
$4({
  target: "Object",
  stat: !0,
  arity: 2,
  forced: Object.assign !== Cv
}, {
  assign: Cv
});
var S4 = E,
  w4 = Y,
  T4 = pr;
S4({
  target: "Object",
  stat: !0,
  sham: !w4
}, {
  create: T4
});
var I4 = E,
  A4 = Y,
  Rv = Te.f;
I4({
  target: "Object",
  stat: !0,
  forced: Object.defineProperty !== Rv,
  sham: !A4
}, {
  defineProperty: Rv
});
var E4 = E,
  C4 = Y,
  Ov = ra.f;
E4({
  target: "Object",
  stat: !0,
  forced: Object.defineProperties !== Ov,
  sham: !C4
}, {
  defineProperties: Ov
});
var Xy = Y,
  R4 = B,
  Qy = M,
  O4 = yr,
  _4 = ro,
  P4 = we,
  N4 = oo.f,
  qy = Qy(N4),
  L4 = Qy([].push),
  F4 = Xy && R4(function () {
    var r = Object.create(null);
    return r[2] = 2, !qy(r, 2);
  }),
  _v = function _v(r) {
    return function (t) {
      for (var e = P4(t), n = _4(e), o = F4 && O4(e) === null, i = n.length, a = 0, s = [], l; i > a;) l = n[a++], (!Xy || (o ? l in e : qy(e, l))) && L4(s, r ? [l, e[l]] : e[l]);
      return s;
    };
  },
  Jy = {
    entries: _v(!0),
    values: _v(!1)
  },
  k4 = E,
  B4 = Jy.entries;
k4({
  target: "Object",
  stat: !0
}, {
  entries: function entries(t) {
    return B4(t);
  }
});
var M4 = E,
  D4 = la,
  j4 = B,
  U4 = Z,
  z4 = lo.onFreeze,
  ec = Object.freeze,
  W4 = j4(function () {
    ec(1);
  });
M4({
  target: "Object",
  stat: !0,
  forced: W4,
  sham: !D4
}, {
  freeze: function freeze(t) {
    return ec && U4(t) ? ec(z4(t)) : t;
  }
});
var H4 = E,
  Y4 = pt,
  K4 = wr;
H4({
  target: "Object",
  stat: !0
}, {
  fromEntries: function fromEntries(t) {
    var e = {};
    return Y4(t, function (n, o) {
      K4(e, n, o);
    }, {
      AS_ENTRIES: !0
    }), e;
  }
});
var G4 = E,
  V4 = B,
  X4 = we,
  Zy = nt.f,
  e0 = Y,
  Q4 = !e0 || V4(function () {
    Zy(1);
  });
G4({
  target: "Object",
  stat: !0,
  forced: Q4,
  sham: !e0
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
    return Zy(X4(t), e);
  }
});
var q4 = E,
  J4 = Y,
  Z4 = bg,
  e3 = we,
  t3 = nt,
  r3 = wr;
q4({
  target: "Object",
  stat: !0,
  sham: !J4
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
    for (var e = e3(t), n = t3.f, o = Z4(e), i = {}, a = 0, s, l; o.length > a;) l = n(e, s = o[a++]), l !== void 0 && r3(i, s, l);
    return i;
  }
});
var n3 = E,
  o3 = B,
  i3 = sa.f,
  a3 = o3(function () {
    return !Object.getOwnPropertyNames(1);
  });
n3({
  target: "Object",
  stat: !0,
  forced: a3
}, {
  getOwnPropertyNames: i3
});
var s3 = E,
  l3 = B,
  c3 = ee,
  t0 = yr,
  u3 = $g,
  f3 = l3(function () {
    t0(1);
  });
s3({
  target: "Object",
  stat: !0,
  forced: f3,
  sham: !u3
}, {
  getPrototypeOf: function getPrototypeOf(t) {
    return t0(c3(t));
  }
});
var d3 = E,
  h3 = Pe,
  v3 = M,
  p3 = ve,
  g3 = re,
  m3 = fn,
  y3 = pt,
  x3 = B,
  Pv = Object.groupBy,
  b3 = h3("Object", "create"),
  $3 = v3([].push),
  S3 = !Pv || x3(function () {
    return Pv("ab", function (r) {
      return r;
    }).a.length !== 1;
  });
d3({
  target: "Object",
  stat: !0,
  forced: S3
}, {
  groupBy: function groupBy(t, e) {
    g3(t), p3(e);
    var n = b3(null),
      o = 0;
    return y3(t, function (i) {
      var a = m3(e(i, o++));
      a in n ? $3(n[a], i) : n[a] = [i];
    }), n;
  }
});
var w3 = E,
  T3 = he;
w3({
  target: "Object",
  stat: !0
}, {
  hasOwn: T3
});
var I3 = E,
  A3 = cy;
I3({
  target: "Object",
  stat: !0
}, {
  is: A3
});
var E3 = E,
  Nv = Lg;
E3({
  target: "Object",
  stat: !0,
  forced: Object.isExtensible !== Nv
}, {
  isExtensible: Nv
});
var C3 = E,
  R3 = B,
  O3 = Z,
  _3 = ze,
  r0 = Lc,
  tc = Object.isFrozen,
  P3 = r0 || R3(function () {
    tc(1);
  });
C3({
  target: "Object",
  stat: !0,
  forced: P3
}, {
  isFrozen: function isFrozen(t) {
    return !O3(t) || r0 && _3(t) === "ArrayBuffer" ? !0 : tc ? tc(t) : !1;
  }
});
var N3 = E,
  L3 = B,
  F3 = Z,
  k3 = ze,
  n0 = Lc,
  rc = Object.isSealed,
  B3 = n0 || L3(function () {
    rc(1);
  });
N3({
  target: "Object",
  stat: !0,
  forced: B3
}, {
  isSealed: function isSealed(t) {
    return !F3(t) || n0 && k3(t) === "ArrayBuffer" ? !0 : rc ? rc(t) : !1;
  }
});
var M3 = E,
  D3 = ee,
  o0 = ro,
  j3 = B,
  U3 = j3(function () {
    o0(1);
  });
M3({
  target: "Object",
  stat: !0,
  forced: U3
}, {
  keys: function keys(t) {
    return o0(D3(t));
  }
});
var z3 = E,
  W3 = Z,
  H3 = lo.onFreeze,
  Y3 = la,
  K3 = B,
  nc = Object.preventExtensions,
  G3 = K3(function () {
    nc(1);
  });
z3({
  target: "Object",
  stat: !0,
  forced: G3,
  sham: !Y3
}, {
  preventExtensions: function preventExtensions(t) {
    return nc && W3(t) ? nc(H3(t)) : t;
  }
});
var V3 = Y,
  X3 = vn,
  Q3 = Z,
  q3 = Ag,
  J3 = ee,
  Z3 = re,
  Lv = Object.getPrototypeOf,
  Fv = Object.setPrototypeOf,
  kv = Object.prototype,
  Bv = "__proto__";
if (V3 && Lv && Fv && !(Bv in kv)) try {
  X3(kv, Bv, {
    configurable: !0,
    get: function get() {
      return Lv(J3(this));
    },
    set: function set(t) {
      var e = Z3(this);
      q3(t) && Q3(e) && Fv(e, t);
    }
  });
} catch (r) {}
var eW = E,
  tW = Z,
  rW = lo.onFreeze,
  nW = la,
  oW = B,
  oc = Object.seal,
  iW = oW(function () {
    oc(1);
  });
eW({
  target: "Object",
  stat: !0,
  forced: iW,
  sham: !nW
}, {
  seal: function seal(t) {
    return oc && tW(t) ? oc(rW(t)) : t;
  }
});
var aW = E,
  sW = so;
aW({
  target: "Object",
  stat: !0
}, {
  setPrototypeOf: sW
});
var lW = E,
  cW = Jy.values;
lW({
  target: "Object",
  stat: !0
}, {
  values: function values(t) {
    return cW(t);
  }
});
var uW = z,
  fW = B,
  Mv = zm,
  _a = !fW(function () {
    if (!(Mv && Mv < 535)) {
      var r = Math.random();
      __defineSetter__.call(null, r, function () {}), delete uW[r];
    }
  }),
  dW = E,
  hW = Y,
  vW = _a,
  pW = ve,
  gW = ee,
  mW = Te;
hW && dW({
  target: "Object",
  proto: !0,
  forced: vW
}, {
  __defineGetter__: function __defineGetter__(t, e) {
    mW.f(gW(this), t, {
      get: pW(e),
      enumerable: !0,
      configurable: !0
    });
  }
});
var yW = E,
  xW = Y,
  bW = _a,
  $W = ve,
  SW = ee,
  wW = Te;
xW && yW({
  target: "Object",
  proto: !0,
  forced: bW
}, {
  __defineSetter__: function __defineSetter__(t, e) {
    wW.f(SW(this), t, {
      set: $W(e),
      enumerable: !0,
      configurable: !0
    });
  }
});
var TW = E,
  IW = Y,
  AW = _a,
  EW = ee,
  CW = fn,
  RW = yr,
  OW = nt.f;
IW && TW({
  target: "Object",
  proto: !0,
  forced: AW
}, {
  __lookupGetter__: function __lookupGetter__(t) {
    var e = EW(this),
      n = CW(t),
      o;
    do if (o = OW(e, n)) return o.get; while (e = RW(e));
  }
});
var _W = E,
  PW = Y,
  NW = _a,
  LW = ee,
  FW = fn,
  kW = yr,
  BW = nt.f;
PW && _W({
  target: "Object",
  proto: !0,
  forced: NW
}, {
  __lookupSetter__: function __lookupSetter__(t) {
    var e = LW(this),
      n = FW(t),
      o;
    do if (o = BW(e, n)) return o.set; while (e = kW(e));
  }
});
var MW = z,
  DW = Et;
DW(MW.JSON, "JSON", !0);
var jW = Et;
jW(Math, "Math", !0);
var UW = E,
  zW = z,
  WW = Et;
UW({
  global: !0
}, {
  Reflect: {}
});
WW(zW.Reflect, "Reflect", !0);
var HW = ot;
HW.Object;
var YW = Be;
YW("asyncIterator");
var KW = E,
  GW = Y,
  VW = z,
  oi = M,
  XW = he,
  QW = Q,
  qW = It,
  JW = q,
  ZW = vn,
  e5 = _c,
  yt = VW.Symbol,
  er = yt && yt.prototype;
if (GW && QW(yt) && (!("description" in er) || yt().description !== void 0)) {
  var Dv = {},
    ii = function ii() {
      var t = arguments.length < 1 || arguments[0] === void 0 ? void 0 : JW(arguments[0]),
        e = qW(er, this) ? new yt(t) : t === void 0 ? yt() : yt(t);
      return t === "" && (Dv[e] = !0), e;
    };
  e5(ii, yt), ii.prototype = er, er.constructor = ii;
  var t5 = String(yt("description detection")) === "Symbol(description detection)",
    r5 = oi(er.valueOf),
    n5 = oi(er.toString),
    o5 = /^Symbol\((.*)\)[^)]+$/,
    i5 = oi("".replace),
    a5 = oi("".slice);
  ZW(er, "description", {
    configurable: !0,
    get: function get() {
      var t = r5(this);
      if (XW(Dv, t)) return "";
      var e = n5(t),
        n = t5 ? a5(e, 7, -1) : i5(e, o5, "$1");
      return n === "" ? void 0 : n;
    }
  }), KW({
    global: !0,
    constructor: !0,
    forced: !0
  }, {
    Symbol: ii
  });
}
var s5 = Be;
s5("hasInstance");
var l5 = Be;
l5("isConcatSpreadable");
var c5 = Be;
c5("iterator");
var u5 = Be;
u5("match");
var f5 = Be;
f5("matchAll");
var d5 = Be;
d5("replace");
var h5 = Be;
h5("search");
var v5 = Be;
v5("species");
var p5 = Be;
p5("split");
var g5 = Be,
  m5 = Ey;
g5("toPrimitive");
m5();
var y5 = Pe,
  x5 = Be,
  b5 = Et;
x5("toStringTag");
b5(y5("Symbol"), "Symbol");
var $5 = Be;
$5("unscopables");
var S5 = ot;
S5.Symbol;
var i0 = M,
  w5 = ve,
  T5 = Z,
  I5 = he,
  jv = hn,
  A5 = Zn,
  a0 = Function,
  E5 = i0([].concat),
  C5 = i0([].join),
  Vs = {},
  R5 = function R5(r, t, e) {
    if (!I5(Vs, t)) {
      for (var n = [], o = 0; o < t; o++) n[o] = "a[" + o + "]";
      Vs[t] = a0("C,a", "return new C(" + C5(n, ",") + ")");
    }
    return Vs[t](r, e);
  },
  O5 = A5 ? a0.bind : function (t) {
    var e = w5(this),
      n = e.prototype,
      o = jv(arguments, 1),
      _i11 = function i() {
        var s = E5(o, jv(arguments));
        return this instanceof _i11 ? R5(e, s.length, s) : e.apply(t, s);
      };
    return T5(n) && (_i11.prototype = n), _i11;
  },
  _5 = E,
  Uv = O5;
_5({
  target: "Function",
  proto: !0,
  forced: Function.bind !== Uv
}, {
  bind: Uv
});
var P5 = Y,
  N5 = oa.EXISTS,
  s0 = M,
  L5 = vn,
  l0 = Function.prototype,
  F5 = s0(l0.toString),
  c0 = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
  k5 = s0(c0.exec),
  B5 = "name";
P5 && !N5 && L5(l0, B5, {
  configurable: !0,
  get: function get() {
    try {
      return k5(c0, F5(this))[1];
    } catch (r) {
      return "";
    }
  }
});
var M5 = Q,
  zv = Z,
  D5 = Te,
  j5 = It,
  U5 = J,
  z5 = Oc,
  Xs = U5("hasInstance"),
  Wv = Function.prototype;
Xs in Wv || D5.f(Wv, Xs, {
  value: z5(function (r) {
    if (!M5(this) || !zv(r)) return !1;
    var t = this.prototype;
    return zv(t) ? j5(t, r) : r instanceof this;
  }, Xs)
});
var W5 = ot;
W5.Function;
var Pa = {
    exports: {}
  },
  Dn = {
    exports: {}
  };
(function () {
  var r, t, e, n, o, i;
  (typeof performance === "undefined" ? "undefined" : _typeof(performance)) < "u" && performance !== null && performance.now ? Dn.exports = function () {
    return performance.now();
  } : (typeof process === "undefined" ? "undefined" : _typeof(process)) < "u" && process !== null && process.hrtime ? (Dn.exports = function () {
    return (r() - o) / 1e6;
  }, t = process.hrtime, r = function r() {
    var a;
    return a = t(), a[0] * 1e9 + a[1];
  }, n = r(), i = process.uptime() * 1e9, o = n - i) : Date.now ? (Dn.exports = function () {
    return Date.now() - e;
  }, e = Date.now()) : (Dn.exports = function () {
    return new Date().getTime() - e;
  }, e = new Date().getTime());
}).call(De);
var H5 = Dn.exports,
  Y5 = H5,
  $t = (typeof window === "undefined" ? "undefined" : _typeof(window)) > "u" ? De : window,
  ai = ["moz", "webkit"],
  Vr = "AnimationFrame",
  rn = $t["request" + Vr],
  qn = $t["cancel" + Vr] || $t["cancelRequest" + Vr];
for (var On = 0; !rn && On < ai.length; On++) rn = $t[ai[On] + "Request" + Vr], qn = $t[ai[On] + "Cancel" + Vr] || $t[ai[On] + "CancelRequest" + Vr];
if (!rn || !qn) {
  var Qs = 0,
    Hv = 0,
    tr = [],
    K5 = 1e3 / 60;
  rn = function rn(r) {
    if (tr.length === 0) {
      var t = Y5(),
        e = Math.max(0, K5 - (t - Qs));
      Qs = e + t, setTimeout(function () {
        var n = tr.slice(0);
        tr.length = 0;
        var _loop4 = function _loop4() {
          if (!n[o].cancelled) try {
            n[o].callback(Qs);
          } catch (i) {
            setTimeout(function () {
              throw i;
            }, 0);
          }
        };
        for (var o = 0; o < n.length; o++) {
          _loop4();
        }
      }, Math.round(e));
    }
    return tr.push({
      handle: ++Hv,
      callback: r,
      cancelled: !1
    }), Hv;
  }, qn = function qn(r) {
    for (var t = 0; t < tr.length; t++) tr[t].handle === r && (tr[t].cancelled = !0);
  };
}
Pa.exports = function (r) {
  return rn.call($t, r);
};
Pa.exports.cancel = function () {
  qn.apply($t, arguments);
};
Pa.exports.polyfill = function (r) {
  r || (r = $t), r.requestAnimationFrame = rn, r.cancelAnimationFrame = qn;
};
var G5 = Pa.exports;
G5.polyfill();
(function (r) {
  var t = function t() {
      try {
        return !!Symbol.iterator;
      } catch (c) {
        return !1;
      }
    },
    e = t(),
    n = function n(c) {
      var u = {
        next: function next() {
          var f = c.shift();
          return {
            done: f === void 0,
            value: f
          };
        }
      };
      return e && (u[Symbol.iterator] = function () {
        return u;
      }), u;
    },
    o = function o(c) {
      return encodeURIComponent(c).replace(/%20/g, "+");
    },
    i = function i(c) {
      return decodeURIComponent(String(c).replace(/\+/g, " "));
    },
    a = function a() {
      var _c2 = function c(f) {
          Object.defineProperty(this, "_entries", {
            writable: !0,
            value: {}
          });
          var v = _typeof(f);
          if (v !== "undefined") if (v === "string") f !== "" && this._fromString(f);else if (f instanceof _c2) {
            var p = this;
            f.forEach(function ($, y) {
              p.append(y, $);
            });
          } else if (f !== null && v === "object") {
            if (Object.prototype.toString.call(f) === "[object Array]") for (var m = 0; m < f.length; m++) {
              var S = f[m];
              if (Object.prototype.toString.call(S) === "[object Array]" || S.length !== 2) this.append(S[0], S[1]);else throw new TypeError("Expected [string, any] as entry at index " + m + " of URLSearchParams's input");
            } else for (var w in f) f.hasOwnProperty(w) && this.append(w, f[w]);
          } else throw new TypeError("Unsupported input's type for URLSearchParams");
        },
        u = _c2.prototype;
      u.append = function (f, v) {
        f in this._entries ? this._entries[f].push(String(v)) : this._entries[f] = [String(v)];
      }, u["delete"] = function (f) {
        delete this._entries[f];
      }, u.get = function (f) {
        return f in this._entries ? this._entries[f][0] : null;
      }, u.getAll = function (f) {
        return f in this._entries ? this._entries[f].slice(0) : [];
      }, u.has = function (f) {
        return f in this._entries;
      }, u.set = function (f, v) {
        this._entries[f] = [String(v)];
      }, u.forEach = function (f, v) {
        var p;
        for (var m in this._entries) if (this._entries.hasOwnProperty(m)) {
          p = this._entries[m];
          for (var S = 0; S < p.length; S++) f.call(v, p[S], m, this);
        }
      }, u.keys = function () {
        var f = [];
        return this.forEach(function (v, p) {
          f.push(p);
        }), n(f);
      }, u.values = function () {
        var f = [];
        return this.forEach(function (v) {
          f.push(v);
        }), n(f);
      }, u.entries = function () {
        var f = [];
        return this.forEach(function (v, p) {
          f.push([p, v]);
        }), n(f);
      }, e && (u[Symbol.iterator] = u.entries), u.toString = function () {
        var f = [];
        return this.forEach(function (v, p) {
          f.push(o(p) + "=" + o(v));
        }), f.join("&");
      }, r.URLSearchParams = _c2;
    },
    s = function s() {
      try {
        var c = r.URLSearchParams;
        return new c("?a=1").toString() === "a=1" && typeof c.prototype.set == "function" && typeof c.prototype.entries == "function";
      } catch (u) {
        return !1;
      }
    };
  s() || a();
  var l = r.URLSearchParams.prototype;
  typeof l.sort != "function" && (l.sort = function () {
    var c = this,
      u = [];
    this.forEach(function (v, p) {
      u.push([p, v]), c._entries || c["delete"](p);
    }), u.sort(function (v, p) {
      return v[0] < p[0] ? -1 : v[0] > p[0] ? 1 : 0;
    }), c._entries && (c._entries = {});
    for (var f = 0; f < u.length; f++) this.append(u[f][0], u[f][1]);
  }), typeof l._fromString != "function" && Object.defineProperty(l, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function value(c) {
      if (this._entries) this._entries = {};else {
        var u = [];
        this.forEach(function (m, S) {
          u.push(S);
        });
        for (var f = 0; f < u.length; f++) this["delete"](u[f]);
      }
      c = c.replace(/^\?/, "");
      for (var v = c.split("&"), p, f = 0; f < v.length; f++) p = v[f].split("="), this.append(i(p[0]), p.length > 1 ? i(p[1]) : "");
    }
  });
})(_typeof(De) < "u" ? De : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : De);
(function (r) {
  var t = function t() {
      try {
        var o = new r.URL("b", "http://a");
        return o.pathname = "c d", o.href === "http://a/c%20d" && o.searchParams;
      } catch (i) {
        return !1;
      }
    },
    e = function e() {
      var o = r.URL,
        i = function i(l, c) {
          typeof l != "string" && (l = String(l)), c && typeof c != "string" && (c = String(c));
          var u = document,
            f;
          if (c && (r.location === void 0 || c !== r.location.href)) {
            c = c.toLowerCase(), u = document.implementation.createHTMLDocument(""), f = u.createElement("base"), f.href = c, u.head.appendChild(f);
            try {
              if (f.href.indexOf(c) !== 0) throw new Error(f.href);
            } catch (d) {
              throw new Error("URL unable to set base " + c + " due to " + d);
            }
          }
          var v = u.createElement("a");
          v.href = l, f && (u.body.appendChild(v), v.href = v.href);
          var p = u.createElement("input");
          if (p.type = "url", p.value = l, v.protocol === ":" || !/:/.test(v.href) || !p.checkValidity() && !c) throw new TypeError("Invalid URL");
          Object.defineProperty(this, "_anchorElement", {
            value: v
          });
          var m = new r.URLSearchParams(this.search),
            S = !0,
            w = !0,
            $ = this;
          ["append", "delete", "set"].forEach(function (d) {
            var h = m[d];
            m[d] = function () {
              h.apply(m, arguments), S && (w = !1, $.search = m.toString(), w = !0);
            };
          }), Object.defineProperty(this, "searchParams", {
            value: m,
            enumerable: !0
          });
          var y = void 0;
          Object.defineProperty(this, "_updateSearchParams", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function value() {
              this.search !== y && (y = this.search, w && (S = !1, this.searchParams._fromString(this.search), S = !0));
            }
          });
        },
        a = i.prototype,
        s = function s(l) {
          Object.defineProperty(a, l, {
            get: function get() {
              return this._anchorElement[l];
            },
            set: function set(c) {
              this._anchorElement[l] = c;
            },
            enumerable: !0
          });
        };
      ["hash", "host", "hostname", "port", "protocol"].forEach(function (l) {
        s(l);
      }), Object.defineProperty(a, "search", {
        get: function get() {
          return this._anchorElement.search;
        },
        set: function set(l) {
          this._anchorElement.search = l, this._updateSearchParams();
        },
        enumerable: !0
      }), Object.defineProperties(a, {
        toString: {
          get: function get() {
            var l = this;
            return function () {
              return l.href;
            };
          }
        },
        href: {
          get: function get() {
            return this._anchorElement.href.replace(/\?$/, "");
          },
          set: function set(l) {
            this._anchorElement.href = l, this._updateSearchParams();
          },
          enumerable: !0
        },
        pathname: {
          get: function get() {
            return this._anchorElement.pathname.replace(/(^\/?)/, "/");
          },
          set: function set(l) {
            this._anchorElement.pathname = l;
          },
          enumerable: !0
        },
        origin: {
          get: function get() {
            var l = {
                "http:": 80,
                "https:": 443,
                "ftp:": 21
              }[this._anchorElement.protocol],
              c = this._anchorElement.port != l && this._anchorElement.port !== "";
            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (c ? ":" + this._anchorElement.port : "");
          },
          enumerable: !0
        },
        password: {
          get: function get() {
            return "";
          },
          set: function set(l) {},
          enumerable: !0
        },
        username: {
          get: function get() {
            return "";
          },
          set: function set(l) {},
          enumerable: !0
        }
      }), i.createObjectURL = function (l) {
        return o.createObjectURL.apply(o, arguments);
      }, i.revokeObjectURL = function (l) {
        return o.revokeObjectURL.apply(o, arguments);
      }, r.URL = i;
    };
  if (t() || e(), r.location !== void 0 && !("origin" in r.location)) {
    var n = function n() {
      return r.location.protocol + "//" + r.location.hostname + (r.location.port ? ":" + r.location.port : "");
    };
    try {
      Object.defineProperty(r.location, "origin", {
        get: n,
        enumerable: !0
      });
    } catch (o) {
      setInterval(function () {
        r.location.origin = n();
      }, 100);
    }
  }
})(_typeof(De) < "u" ? De : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : De);
(function () {
  if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) > "u" || (typeof document === "undefined" ? "undefined" : _typeof(document)) > "u" || (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) > "u")) {
    var r = !1;
    try {
      var t = document.createElement("div");
      t.addEventListener("focus", function (i) {
        i.preventDefault(), i.stopPropagation();
      }, !0), t.focus(Object.defineProperty({}, "preventScroll", {
        get: function get() {
          if (navigator && _typeof(navigator.userAgent) < "u" && navigator.userAgent && navigator.userAgent.match(/Edge\/1[7-8]/)) return r = !1;
          r = !0;
        }
      }));
    } catch (i) {}
    if (HTMLElement.prototype.nativeFocus === void 0 && !r) {
      HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
      var e = function e(i) {
          for (var a = i.parentNode, s = [], l = document.scrollingElement || document.documentElement; a && a !== l;) (a.offsetHeight < a.scrollHeight || a.offsetWidth < a.scrollWidth) && s.push([a, a.scrollTop, a.scrollLeft]), a = a.parentNode;
          return a = l, s.push([a, a.scrollTop, a.scrollLeft]), s;
        },
        n = function n(i) {
          for (var a = 0; a < i.length; a++) i[a][0].scrollTop = i[a][1], i[a][0].scrollLeft = i[a][2];
          i = [];
        },
        o = function o(i) {
          if (i && i.preventScroll) {
            var a = e(this);
            if (typeof setTimeout == "function") {
              var s = this;
              setTimeout(function () {
                s.nativeFocus(), n(a);
              }, 0);
            } else this.nativeFocus(), n(a);
          } else this.nativeFocus();
        };
      HTMLElement.prototype.focus = o;
    }
  }
})();
self.fetch || (self.fetch = function (r, t) {
  return t = t || {}, new Promise(function (e, n) {
    var o = new XMLHttpRequest(),
      i = [],
      a = {},
      s = function c() {
        return {
          ok: (o.status / 100 | 0) == 2,
          statusText: o.statusText,
          status: o.status,
          url: o.responseURL,
          text: function text() {
            return Promise.resolve(o.responseText);
          },
          json: function json() {
            return Promise.resolve(o.responseText).then(JSON.parse);
          },
          blob: function blob() {
            return Promise.resolve(new Blob([o.response]));
          },
          clone: c,
          headers: {
            keys: function keys() {
              return i;
            },
            entries: function entries() {
              return i.map(function (u) {
                return [u, o.getResponseHeader(u)];
              });
            },
            get: function get(u) {
              return o.getResponseHeader(u);
            },
            has: function has(u) {
              return o.getResponseHeader(u) != null;
            }
          }
        };
      };
    for (var l in o.open(t.method || "get", r, !0), o.onload = function () {
      o.getAllResponseHeaders().toLowerCase().replace(/^(.+?):/gm, function (c, u) {
        a[u] || i.push(a[u] = u);
      }), e(s());
    }, o.onerror = n, o.withCredentials = t.credentials == "include", t.headers) o.setRequestHeader(l, t.headers[l]);
    o.send(t.body || null);
  });
});
(function (r) {
  r();
})(function () {
  function r($, y) {
    if (!($ instanceof y)) throw new TypeError("Cannot call a class as a function");
  }
  function t($, y) {
    for (var d = 0; d < y.length; d++) {
      var h = y[d];
      h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty($, h.key, h);
    }
  }
  function e($, y, d) {
    return y && t($.prototype, y), d && t($, d), Object.defineProperty($, "prototype", {
      writable: !1
    }), $;
  }
  function n($, y) {
    if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
    $.prototype = Object.create(y && y.prototype, {
      constructor: {
        value: $,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty($, "prototype", {
      writable: !1
    }), y && i($, y);
  }
  function o($) {
    return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, o($);
  }
  function i($, y) {
    return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (h, g) {
      return h.__proto__ = g, h;
    }, i($, y);
  }
  function a() {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch ($) {
      return !1;
    }
  }
  function s($) {
    if ($ === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return $;
  }
  function l($, y) {
    if (y && (_typeof(y) == "object" || typeof y == "function")) return y;
    if (y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return s($);
  }
  function c($) {
    var y = a();
    return function () {
      var h = o($),
        g;
      if (y) {
        var T = o(this).constructor;
        g = Reflect.construct(h, arguments, T);
      } else g = h.apply(this, arguments);
      return l(this, g);
    };
  }
  function u($, y) {
    for (; !Object.prototype.hasOwnProperty.call($, y) && ($ = o($), $ !== null););
    return $;
  }
  function f() {
    return (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) < "u" && Reflect.get ? f = Reflect.get.bind() : f = function f(y, d, h) {
      var g = u(y, d);
      if (g) {
        var T = Object.getOwnPropertyDescriptor(g, d);
        return T.get ? T.get.call(arguments.length < 3 ? y : h) : T.value;
      }
    }, f.apply(this, arguments);
  }
  var v = function () {
      function $() {
        r(this, $), Object.defineProperty(this, "listeners", {
          value: {},
          writable: !0,
          configurable: !0
        });
      }
      return e($, [{
        key: "addEventListener",
        value: function value(d, h, g) {
          d in this.listeners || (this.listeners[d] = []), this.listeners[d].push({
            callback: h,
            options: g
          });
        }
      }, {
        key: "removeEventListener",
        value: function value(d, h) {
          if (d in this.listeners) {
            for (var g = this.listeners[d], T = 0, I = g.length; T < I; T++) if (g[T].callback === h) {
              g.splice(T, 1);
              return;
            }
          }
        }
      }, {
        key: "dispatchEvent",
        value: function value(d) {
          var _this60 = this;
          if (d.type in this.listeners) {
            var _loop5 = function _loop5() {
                C = g[T];
                try {
                  C.callback.call(_this60, d);
                } catch (A) {
                  Promise.resolve().then(function () {
                    throw A;
                  });
                }
                C.options && C.options.once && _this60.removeEventListener(d.type, C.callback);
              },
              C;
            for (var h = this.listeners[d.type], g = h.slice(), T = 0, I = g.length; T < I; T++) {
              _loop5();
            }
            return !d.defaultPrevented;
          }
        }
      }]), $;
    }(),
    p = function ($) {
      n(d, $);
      var y = c(d);
      function d() {
        var h;
        return r(this, d), h = y.call(this), h.listeners || v.call(s(h)), Object.defineProperty(s(h), "aborted", {
          value: !1,
          writable: !0,
          configurable: !0
        }), Object.defineProperty(s(h), "onabort", {
          value: null,
          writable: !0,
          configurable: !0
        }), Object.defineProperty(s(h), "reason", {
          value: void 0,
          writable: !0,
          configurable: !0
        }), h;
      }
      return e(d, [{
        key: "toString",
        value: function value() {
          return "[object AbortSignal]";
        }
      }, {
        key: "dispatchEvent",
        value: function value(g) {
          g.type === "abort" && (this.aborted = !0, typeof this.onabort == "function" && this.onabort.call(this, g)), f(o(d.prototype), "dispatchEvent", this).call(this, g);
        }
      }]), d;
    }(v),
    m = function () {
      function $() {
        r(this, $), Object.defineProperty(this, "signal", {
          value: new p(),
          writable: !0,
          configurable: !0
        });
      }
      return e($, [{
        key: "abort",
        value: function value(d) {
          var h;
          try {
            h = new Event("abort");
          } catch (T) {
            (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.createEvent ? (h = document.createEvent("Event"), h.initEvent("abort", !1, !1)) : (h = document.createEventObject(), h.type = "abort") : h = {
              type: "abort",
              bubbles: !1,
              cancelable: !1
            };
          }
          var g = d;
          if (g === void 0) if ((typeof document === "undefined" ? "undefined" : _typeof(document)) > "u") g = new Error("This operation was aborted"), g.name = "AbortError";else try {
            g = new DOMException("signal is aborted without reason");
          } catch (T) {
            g = new Error("This operation was aborted"), g.name = "AbortError";
          }
          this.signal.reason = g, this.signal.dispatchEvent(h);
        }
      }, {
        key: "toString",
        value: function value() {
          return "[object AbortController]";
        }
      }]), $;
    }();
  (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toStringTag && (m.prototype[Symbol.toStringTag] = "AbortController", p.prototype[Symbol.toStringTag] = "AbortSignal");
  function S($) {
    return $.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof $.Request == "function" && !$.Request.prototype.hasOwnProperty("signal") || !$.AbortController;
  }
  function w($) {
    typeof $ == "function" && ($ = {
      fetch: $
    });
    var y = $,
      d = y.fetch,
      h = y.Request,
      g = h === void 0 ? d.Request : h,
      T = y.AbortController,
      I = y.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
      C = I === void 0 ? !1 : I;
    if (!S({
      fetch: d,
      Request: g,
      AbortController: T,
      __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: C
    })) return {
      fetch: d,
      Request: A
    };
    var A = g;
    (A && !A.prototype.hasOwnProperty("signal") || C) && (A = function A(F, L) {
      var D;
      L && L.signal && (D = L.signal, delete L.signal);
      var j = new g(F, L);
      return D && Object.defineProperty(j, "signal", {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: D
      }), j;
    }, A.prototype = g.prototype);
    var O = d,
      N = function N(F, L) {
        var D = A && A.prototype.isPrototypeOf(F) ? F.signal : L ? L.signal : void 0;
        if (D) {
          var j;
          try {
            j = new DOMException("Aborted", "AbortError");
          } catch (pe) {
            j = new Error("Aborted"), j.name = "AbortError";
          }
          if (D.aborted) return Promise.reject(j);
          var G = new Promise(function (pe, ae) {
            D.addEventListener("abort", function () {
              return ae(j);
            }, {
              once: !0
            });
          });
          return L && L.signal && delete L.signal, Promise.race([G, O(F, L)]);
        }
        return O(F, L);
      };
    return {
      fetch: N,
      Request: A
    };
  }
  (function ($) {
    if (S($)) {
      if (!$.fetch) {
        console.warn("fetch() is not available, cannot install abortcontroller-polyfill");
        return;
      }
      var y = w($),
        d = y.fetch,
        h = y.Request;
      $.fetch = d, $.Request = h, Object.defineProperty($, "AbortController", {
        writable: !0,
        enumerable: !1,
        configurable: !0,
        value: m
      }), Object.defineProperty($, "AbortSignal", {
        writable: !0,
        enumerable: !1,
        configurable: !0,
        value: p
      });
    }
  })((typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : De);
});
Promise.allSettled = Promise.allSettled || function (r) {
  return Promise.all(r.map(function (t) {
    return t.then(function (e) {
      return {
        status: "fulfilled",
        value: e
      };
    })["catch"](function (e) {
      return {
        status: "rejected",
        reason: e
      };
    });
  }));
};
(function () {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) != "object") return;
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
      get: function get() {
        return this.intersectionRatio > 0;
      }
    });
    return;
  }
  function r(d) {
    try {
      return d.defaultView && d.defaultView.frameElement || null;
    } catch (h) {
      return null;
    }
  }
  var t = function (d) {
      for (var h = d, g = r(h); g;) h = g.ownerDocument, g = r(h);
      return h;
    }(window.document),
    e = [],
    n = null,
    o = null;
  function i(d) {
    this.time = d.time, this.target = d.target, this.rootBounds = m(d.rootBounds), this.boundingClientRect = m(d.boundingClientRect), this.intersectionRect = m(d.intersectionRect || p()), this.isIntersecting = !!d.intersectionRect;
    var h = this.boundingClientRect,
      g = h.width * h.height,
      T = this.intersectionRect,
      I = T.width * T.height;
    g ? this.intersectionRatio = Number((I / g).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
  function a(d, h) {
    var g = h || {};
    if (typeof d != "function") throw new Error("callback must be a function");
    if (g.root && g.root.nodeType != 1 && g.root.nodeType != 9) throw new Error("root must be a Document or Element");
    this._checkForIntersections = l(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = d, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(g.rootMargin), this.thresholds = this._initThresholds(g.threshold), this.root = g.root || null, this.rootMargin = this._rootMarginValues.map(function (T) {
      return T.value + T.unit;
    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = [];
  }
  a.prototype.THROTTLE_TIMEOUT = 100, a.prototype.POLL_INTERVAL = null, a.prototype.USE_MUTATION_OBSERVER = !0, a._setupCrossOriginUpdater = function () {
    return n || (n = function n(d, h) {
      !d || !h ? o = p() : o = S(d, h), e.forEach(function (g) {
        g._checkForIntersections();
      });
    }), n;
  }, a._resetCrossOriginUpdater = function () {
    n = null, o = null;
  }, a.prototype.observe = function (d) {
    var h = this._observationTargets.some(function (g) {
      return g.element == d;
    });
    if (!h) {
      if (!(d && d.nodeType == 1)) throw new Error("target must be an Element");
      this._registerInstance(), this._observationTargets.push({
        element: d,
        entry: null
      }), this._monitorIntersections(d.ownerDocument), this._checkForIntersections();
    }
  }, a.prototype.unobserve = function (d) {
    this._observationTargets = this._observationTargets.filter(function (h) {
      return h.element != d;
    }), this._unmonitorIntersections(d.ownerDocument), this._observationTargets.length == 0 && this._unregisterInstance();
  }, a.prototype.disconnect = function () {
    this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance();
  }, a.prototype.takeRecords = function () {
    var d = this._queuedEntries.slice();
    return this._queuedEntries = [], d;
  }, a.prototype._initThresholds = function (d) {
    var h = d || [0];
    return Array.isArray(h) || (h = [h]), h.sort().filter(function (g, T, I) {
      if (typeof g != "number" || isNaN(g) || g < 0 || g > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
      return g !== I[T - 1];
    });
  }, a.prototype._parseRootMargin = function (d) {
    var h = d || "0px",
      g = h.split(/\s+/).map(function (T) {
        var I = /^(-?\d*\.?\d+)(px|%)$/.exec(T);
        if (!I) throw new Error("rootMargin must be specified in pixels or percent");
        return {
          value: parseFloat(I[1]),
          unit: I[2]
        };
      });
    return g[1] = g[1] || g[0], g[2] = g[2] || g[0], g[3] = g[3] || g[1], g;
  }, a.prototype._monitorIntersections = function (d) {
    var h = d.defaultView;
    if (h && this._monitoringDocuments.indexOf(d) == -1) {
      var g = this._checkForIntersections,
        T = null,
        I = null;
      this.POLL_INTERVAL ? T = h.setInterval(g, this.POLL_INTERVAL) : (c(h, "resize", g, !0), c(d, "scroll", g, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in h && (I = new h.MutationObserver(g), I.observe(d, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }))), this._monitoringDocuments.push(d), this._monitoringUnsubscribes.push(function () {
        var O = d.defaultView;
        O && (T && O.clearInterval(T), u(O, "resize", g, !0)), u(d, "scroll", g, !0), I && I.disconnect();
      });
      var C = this.root && (this.root.ownerDocument || this.root) || t;
      if (d != C) {
        var A = r(d);
        A && this._monitorIntersections(A.ownerDocument);
      }
    }
  }, a.prototype._unmonitorIntersections = function (d) {
    var h = this._monitoringDocuments.indexOf(d);
    if (h != -1) {
      var g = this.root && (this.root.ownerDocument || this.root) || t,
        T = this._observationTargets.some(function (A) {
          var O = A.element.ownerDocument;
          if (O == d) return !0;
          for (; O && O != g;) {
            var N = r(O);
            if (O = N && N.ownerDocument, O == d) return !0;
          }
          return !1;
        });
      if (!T) {
        var I = this._monitoringUnsubscribes[h];
        if (this._monitoringDocuments.splice(h, 1), this._monitoringUnsubscribes.splice(h, 1), I(), d != g) {
          var C = r(d);
          C && this._unmonitorIntersections(C.ownerDocument);
        }
      }
    }
  }, a.prototype._unmonitorAllIntersections = function () {
    var d = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
    for (var h = 0; h < d.length; h++) d[h]();
  }, a.prototype._checkForIntersections = function () {
    if (!(!this.root && n && !o)) {
      var d = this._rootIsInDom(),
        h = d ? this._getRootRect() : p();
      this._observationTargets.forEach(function (g) {
        var T = g.element,
          I = v(T),
          C = this._rootContainsTarget(T),
          A = g.entry,
          O = d && C && this._computeTargetAndRootIntersection(T, I, h),
          N = null;
        this._rootContainsTarget(T) ? (!n || this.root) && (N = h) : N = p();
        var _ = g.entry = new i({
          time: s(),
          target: T,
          boundingClientRect: I,
          rootBounds: N,
          intersectionRect: O
        });
        A ? d && C ? this._hasCrossedThreshold(A, _) && this._queuedEntries.push(_) : A && A.isIntersecting && this._queuedEntries.push(_) : this._queuedEntries.push(_);
      }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
    }
  }, a.prototype._computeTargetAndRootIntersection = function (d, h, g) {
    if (window.getComputedStyle(d).display != "none") {
      for (var T = h, I = $(d), C = !1; !C && I;) {
        var A = null,
          O = I.nodeType == 1 ? window.getComputedStyle(I) : {};
        if (O.display == "none") return null;
        if (I == this.root || I.nodeType == 9) {
          if (C = !0, I == this.root || I == t) n && !this.root ? !o || o.width == 0 && o.height == 0 ? (I = null, A = null, T = null) : A = o : A = g;else {
            var N = $(I),
              _ = N && v(N),
              F = N && this._computeTargetAndRootIntersection(N, _, g);
            _ && F ? (I = N, A = S(_, F)) : (I = null, T = null);
          }
        } else {
          var L = I.ownerDocument;
          I != L.body && I != L.documentElement && O.overflow != "visible" && (A = v(I));
        }
        if (A && (T = f(A, T)), !T) break;
        I = I && $(I);
      }
      return T;
    }
  }, a.prototype._getRootRect = function () {
    var d;
    if (this.root && !y(this.root)) d = v(this.root);else {
      var h = y(this.root) ? this.root : t,
        g = h.documentElement,
        T = h.body;
      d = {
        top: 0,
        left: 0,
        right: g.clientWidth || T.clientWidth,
        width: g.clientWidth || T.clientWidth,
        bottom: g.clientHeight || T.clientHeight,
        height: g.clientHeight || T.clientHeight
      };
    }
    return this._expandRectByRootMargin(d);
  }, a.prototype._expandRectByRootMargin = function (d) {
    var h = this._rootMarginValues.map(function (T, I) {
        return T.unit == "px" ? T.value : T.value * (I % 2 ? d.width : d.height) / 100;
      }),
      g = {
        top: d.top - h[0],
        right: d.right + h[1],
        bottom: d.bottom + h[2],
        left: d.left - h[3]
      };
    return g.width = g.right - g.left, g.height = g.bottom - g.top, g;
  }, a.prototype._hasCrossedThreshold = function (d, h) {
    var g = d && d.isIntersecting ? d.intersectionRatio || 0 : -1,
      T = h.isIntersecting ? h.intersectionRatio || 0 : -1;
    if (g !== T) for (var I = 0; I < this.thresholds.length; I++) {
      var C = this.thresholds[I];
      if (C == g || C == T || C < g != C < T) return !0;
    }
  }, a.prototype._rootIsInDom = function () {
    return !this.root || w(t, this.root);
  }, a.prototype._rootContainsTarget = function (d) {
    var h = this.root && (this.root.ownerDocument || this.root) || t;
    return w(h, d) && (!this.root || h == d.ownerDocument);
  }, a.prototype._registerInstance = function () {
    e.indexOf(this) < 0 && e.push(this);
  }, a.prototype._unregisterInstance = function () {
    var d = e.indexOf(this);
    d != -1 && e.splice(d, 1);
  };
  function s() {
    return window.performance && performance.now && performance.now();
  }
  function l(d, h) {
    var g = null;
    return function () {
      g || (g = setTimeout(function () {
        d(), g = null;
      }, h));
    };
  }
  function c(d, h, g, T) {
    typeof d.addEventListener == "function" ? d.addEventListener(h, g, T || !1) : typeof d.attachEvent == "function" && d.attachEvent("on" + h, g);
  }
  function u(d, h, g, T) {
    typeof d.removeEventListener == "function" ? d.removeEventListener(h, g, T || !1) : typeof d.detachEvent == "function" && d.detachEvent("on" + h, g);
  }
  function f(d, h) {
    var g = Math.max(d.top, h.top),
      T = Math.min(d.bottom, h.bottom),
      I = Math.max(d.left, h.left),
      C = Math.min(d.right, h.right),
      A = C - I,
      O = T - g;
    return A >= 0 && O >= 0 && {
      top: g,
      bottom: T,
      left: I,
      right: C,
      width: A,
      height: O
    } || null;
  }
  function v(d) {
    var h;
    try {
      h = d.getBoundingClientRect();
    } catch (g) {}
    return h ? (h.width && h.height || (h = {
      top: h.top,
      right: h.right,
      bottom: h.bottom,
      left: h.left,
      width: h.right - h.left,
      height: h.bottom - h.top
    }), h) : p();
  }
  function p() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function m(d) {
    return !d || "x" in d ? d : {
      top: d.top,
      y: d.top,
      bottom: d.bottom,
      left: d.left,
      x: d.left,
      right: d.right,
      width: d.width,
      height: d.height
    };
  }
  function S(d, h) {
    var g = h.top - d.top,
      T = h.left - d.left;
    return {
      top: g,
      left: T,
      height: h.height,
      width: h.width,
      bottom: g + h.height,
      right: T + h.width
    };
  }
  function w(d, h) {
    for (var g = h; g;) {
      if (g == d) return !0;
      g = $(g);
    }
    return !1;
  }
  function $(d) {
    var h = d.parentNode;
    return d.nodeType == 9 && d != t ? r(d) : (h && h.assignedSlot && (h = h.assignedSlot.parentNode), h && h.nodeType == 11 && h.host ? h.host : h);
  }
  function y(d) {
    return d && d.nodeType === 9;
  }
  window.IntersectionObserver = a, window.IntersectionObserverEntry = i;
})();
var Yv = "_$DX_DELEGATE";
function V5(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var e = t[Yv] || (t[Yv] = new Set());
  for (var n = 0, o = r.length; n < o; n++) {
    var i = r[n];
    e.has(i) || (e.add(i), t.addEventListener(i, X5));
  }
}
function X5(r) {
  var t = "$$".concat(r.type);
  var e = r.composedPath && r.composedPath()[0] || r.target;
  for (r.target !== e && Object.defineProperty(r, "target", {
    configurable: !0,
    value: e
  }), Object.defineProperty(r, "currentTarget", {
    configurable: !0,
    get: function get() {
      return e || document;
    }
  }), te.registry && !te.done && (te.done = _$HY.done = !0); e;) {
    var n = e[t];
    if (n && !e.disabled) {
      var o = e["".concat(t, "Data")];
      if (o !== void 0 ? n.call(e, o, r) : n.call(e, r), r.cancelBubble) return;
    }
    e = e._$host || e.parentNode || e.host;
  }
}
var Q5 = !1;
function u0() {
  var r = new Set();
  function t(o) {
    return r.add(o), function () {
      return r["delete"](o);
    };
  }
  var e = !1;
  function n(o, i) {
    if (e) return !(e = !1);
    var a = {
      to: o,
      options: i,
      defaultPrevented: !1,
      preventDefault: function preventDefault() {
        return a.defaultPrevented = !0;
      }
    };
    var _iterator15 = _createForOfIteratorHelper(r),
      _step15;
    try {
      var _loop6 = function _loop6() {
        var s = _step15.value;
        s.listener(_objectSpread(_objectSpread({}, a), {}, {
          from: s.location,
          retry: function retry(l) {
            l && (e = !0), s.navigate(o, _objectSpread(_objectSpread({}, i), {}, {
              resolve: !1
            }));
          }
        }));
      };
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        _loop6();
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    return !a.defaultPrevented;
  }
  return {
    subscribe: t,
    confirm: n
  };
}
var ic;
function Su() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
    _depth: window.history.length - 1
  }), ""), ic = window.history.state._depth;
}
Su();
function q5(r) {
  return _objectSpread(_objectSpread({}, r), {}, {
    _depth: window.history.state && window.history.state._depth
  });
}
function J5(r, t) {
  var e = !1;
  return function () {
    var n = ic;
    Su();
    var o = n == null ? null : ic - n;
    if (e) {
      e = !1;
      return;
    }
    o && t(o) ? (e = !0, window.history.go(-o)) : r();
  };
}
var Z5 = /^(?:[a-z0-9]+:)?\/\//i,
  eH = /^\/+|(\/)\/+$/g,
  f0 = "http://sr";
function Wn(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = r.replace(eH, "$1");
  return e ? t || /^[?#]/.test(e) ? e : "/" + e : "";
}
function Si(r, t, e) {
  if (Z5.test(t)) return;
  var n = Wn(r),
    o = e && Wn(e);
  var i = "";
  return !o || t.startsWith("/") ? i = n : o.toLowerCase().indexOf(n.toLowerCase()) !== 0 ? i = n + o : i = o, (i || "/") + Wn(t, !i);
}
function tH(r, t) {
  if (r == null) throw new Error(t);
  return r;
}
function rH(r, t) {
  return Wn(r).replace(/\/*(\*.*)?$/g, "") + Wn(t);
}
function d0(r) {
  var t = {};
  return r.searchParams.forEach(function (e, n) {
    t[n] = e;
  }), t;
}
function h0(r, t, e) {
  var _r$split = r.split("/*", 2),
    _r$split2 = _slicedToArray(_r$split, 2),
    n = _r$split2[0],
    o = _r$split2[1],
    i = n.split("/").filter(Boolean),
    a = i.length;
  return function (s) {
    var l = s.split("/").filter(Boolean),
      c = l.length - a;
    if (c < 0 || c > 0 && o === void 0 && !t) return null;
    var u = {
        path: a ? "" : "/",
        params: {}
      },
      f = function f(v) {
        return e === void 0 ? void 0 : e[v];
      };
    for (var v = 0; v < a; v++) {
      var p = i[v],
        m = l[v],
        S = p[0] === ":",
        w = S ? p.slice(1) : p;
      if (S && qs(m, f(w))) u.params[w] = m;else if (S || !qs(m, p)) return null;
      u.path += "/".concat(m);
    }
    if (o) {
      var _v4 = c ? l.slice(-c).join("/") : "";
      if (qs(_v4, f(o))) u.params[o] = _v4;else return null;
    }
    return u;
  };
}
function qs(r, t) {
  var e = function e(n) {
    return n.localeCompare(r, void 0, {
      sensitivity: "base"
    }) === 0;
  };
  return t === void 0 ? !0 : typeof t == "string" ? e(t) : typeof t == "function" ? t(r) : Array.isArray(t) ? t.some(e) : t instanceof RegExp ? t.test(r) : !1;
}
function nH(r) {
  var _r$pattern$split = r.pattern.split("/*", 2),
    _r$pattern$split2 = _slicedToArray(_r$pattern$split, 2),
    t = _r$pattern$split2[0],
    e = _r$pattern$split2[1],
    n = t.split("/").filter(Boolean);
  return n.reduce(function (o, i) {
    return o + (i.startsWith(":") ? 2 : 3);
  }, n.length - (e === void 0 ? 0 : 1));
}
function v0(r) {
  var t = new Map(),
    e = an();
  return new Proxy({}, {
    get: function get(n, o) {
      return t.has(o) || Pp(e, function () {
        return t.set(o, ie(function () {
          return r()[o];
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
      return Reflect.ownKeys(r());
    }
  });
}
function wu(r) {
  var t = /(\/?\:[^\/]+)\?/.exec(r);
  if (!t) return [r];
  var e = r.slice(0, t.index),
    n = r.slice(t.index + t[0].length);
  var o = [e, e += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(n);) o.push(e += t[1]), n = n.slice(t[0].length);
  return wu(n).reduce(function (i, a) {
    return [].concat(_toConsumableArray(i), _toConsumableArray(o.map(function (s) {
      return s + a;
    })));
  }, []);
}
var oH = 100,
  p0 = Np(),
  g0 = Np(),
  Tu = function Tu() {
    return tH(Lp(p0), "<A> and 'use' router primitives can be only used inside a Route.");
  },
  Iu = function Iu() {
    return Tu().navigatorFactory();
  },
  m0 = function m0() {
    return Tu().location;
  },
  iH = function iH(r, t) {
    var e = m0(),
      n = ie(function () {
        return wu(r()).map(function (o) {
          return h0(o, void 0, t);
        });
      });
    return ie(function () {
      var _iterator16 = _createForOfIteratorHelper(n()),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var o = _step16.value;
          var i = o(e.pathname);
          if (i) return i;
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    });
  },
  aH = function aH() {
    return Tu().params;
  };
function sH(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var e = r.component,
    n = r.load,
    o = r.children,
    i = r.info,
    a = !o || Array.isArray(o) && !o.length,
    s = {
      key: r,
      component: e,
      load: n,
      info: i
    };
  return y0(r.path).reduce(function (l, c) {
    var _iterator17 = _createForOfIteratorHelper(wu(c)),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var u = _step17.value;
        var f = rH(t, u);
        var v = a ? f : f.split("/*", 1)[0];
        v = v.split("/").map(function (p) {
          return p.startsWith(":") || p.startsWith("*") ? p : encodeURIComponent(p);
        }).join("/"), l.push(_objectSpread(_objectSpread({}, s), {}, {
          originalPath: c,
          pattern: v,
          matcher: h0(v, !a, r.matchFilters)
        }));
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return l;
  }, []);
}
function lH(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    routes: r,
    score: nH(r[r.length - 1]) * 1e4 - t,
    matcher: function matcher(e) {
      var n = [];
      for (var o = r.length - 1; o >= 0; o--) {
        var i = r[o],
          a = i.matcher(e);
        if (!a) return null;
        n.unshift(_objectSpread(_objectSpread({}, a), {}, {
          route: i
        }));
      }
      return n;
    }
  };
}
function y0(r) {
  return Array.isArray(r) ? r : [r];
}
function x0(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var o = y0(r);
  for (var i = 0, a = o.length; i < a; i++) {
    var s = o[i];
    if (s && _typeof(s) == "object") {
      s.hasOwnProperty("path") || (s.path = "");
      var l = sH(s, t);
      var _iterator18 = _createForOfIteratorHelper(l),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var c = _step18.value;
          e.push(c);
          var u = Array.isArray(s.children) && s.children.length === 0;
          if (s.children && !u) x0(s.children, c.pattern, e, n);else {
            var f = lH(_toConsumableArray(e), n.length);
            n.push(f);
          }
          e.pop();
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
  }
  return e.length ? n : n.sort(function (i, a) {
    return a.score - i.score;
  });
}
function Kv(r, t) {
  for (var e = 0, n = r.length; e < n; e++) {
    var o = r[e].matcher(t);
    if (o) return o;
  }
  return [];
}
function cH(r, t) {
  var e = new URL(f0),
    n = ie(function (l) {
      var c = r();
      try {
        return new URL(c, e);
      } catch (u) {
        return console.error("Invalid path ".concat(c)), l;
      }
    }, e, {
      equals: function equals(l, c) {
        return l.href === c.href;
      }
    }),
    o = ie(function () {
      return n().pathname;
    }),
    i = ie(function () {
      return n().search;
    }, !0),
    a = ie(function () {
      return n().hash;
    }),
    s = function s() {
      return "";
    };
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
      return s();
    },
    query: v0(on(i, function () {
      return d0(n());
    }))
  };
}
var kt;
function uH(r, t, e) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _r$signal = _slicedToArray(r.signal, 2),
    o = _r$signal[0],
    i = _r$signal[1],
    _r$utils = r.utils,
    a = _r$utils === void 0 ? {} : _r$utils,
    s = a.parsePath || function (_) {
      return _;
    },
    l = a.renderPath || function (_) {
      return _;
    },
    c = a.beforeLeave || u0(),
    u = Si("", n.base || "");
  if (u === void 0) throw new Error("".concat(u, " is not a valid base path"));
  u && !o().value && i({
    value: u,
    replace: !0,
    scroll: !1
  });
  var _X15 = X(!1),
    _X16 = _slicedToArray(_X15, 2),
    f = _X16[0],
    v = _X16[1],
    p = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              v(!0);
              _context13.prev = 1;
              _context13.next = 4;
              return rx(_);
            case 4:
              _context13.prev = 4;
              v(!1);
              return _context13.finish(4);
            case 7:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[1,, 4, 7]]);
      }));
      return function p(_x14) {
        return _ref17.apply(this, arguments);
      };
    }(),
    _X17 = X(o().value),
    _X18 = _slicedToArray(_X17, 2),
    m = _X18[0],
    S = _X18[1],
    _X19 = X(o().state),
    _X20 = _slicedToArray(_X19, 2),
    w = _X20[0],
    $ = _X20[1],
    y = cH(m, w),
    d = [],
    h = X([]),
    g = ie(function () {
      return Kv(t(), y.pathname);
    }),
    T = v0(function () {
      var _ = g(),
        F = {};
      for (var L = 0; L < _.length; L++) Object.assign(F, _[L].params);
      return F;
    }),
    I = {
      pattern: u,
      path: function path() {
        return u;
      },
      outlet: function outlet() {
        return null;
      },
      resolvePath: function resolvePath(_) {
        return Si(u, _);
      }
    };
  return ct(function () {
    var _o3 = o(),
      _ = _o3.value,
      F = _o3.state;
    me(function () {
      _ !== m() && p(function () {
        kt = "native", S(_), $(F), h[1]([]);
      }).then(function () {
        kt = void 0;
      });
    });
  }), {
    base: I,
    location: y,
    params: T,
    isRouting: f,
    renderPath: l,
    parsePath: s,
    navigatorFactory: A,
    matches: g,
    beforeLeave: c,
    preloadRoute: N,
    singleFlight: n.singleFlight === void 0 ? !0 : n.singleFlight,
    submissions: h
  };
  function C(_, F, L) {
    me(function () {
      if (typeof F == "number") {
        F && (a.go ? a.go(F) : console.warn("Router integration does not support relative routing"));
        return;
      }
      var _replace$resolve$scro = _objectSpread({
          replace: !1,
          resolve: !0,
          scroll: !0
        }, L),
        D = _replace$resolve$scro.replace,
        j = _replace$resolve$scro.resolve,
        G = _replace$resolve$scro.scroll,
        pe = _replace$resolve$scro.state,
        ae = j ? _.resolvePath(F) : Si("", F);
      if (ae === void 0) throw new Error("Path '".concat(F, "' is not a routable path"));
      if (d.length >= oH) throw new Error("Too many redirects");
      var Re = m();
      if ((ae !== Re || pe !== w()) && !Q5) {
        if (c.confirm(ae, L)) {
          var it = d.push({
            value: Re,
            replace: D,
            scroll: G,
            state: w()
          });
          p(function () {
            kt = "navigate", S(ae), $(pe), h[1]([]);
          }).then(function () {
            d.length === it && (kt = void 0, O({
              value: ae,
              state: pe
            }));
          });
        }
      }
    });
  }
  function A(_) {
    return _ = _ || Lp(g0) || I, function (F, L) {
      return C(_, F, L);
    };
  }
  function O(_) {
    var F = d[0];
    F && ((_.value !== F.value || _.state !== F.state) && i(_objectSpread(_objectSpread({}, _), {}, {
      replace: F.replace,
      scroll: F.scroll
    })), d.length = 0);
  }
  function N(_, F) {
    var L = Kv(t(), _.pathname),
      D = kt;
    kt = "preload";
    var _loop7 = function _loop7() {
      var _L$j = L[j],
        G = _L$j.route,
        pe = _L$j.params;
      G.component && G.component.preload && G.component.preload();
      var ae = G.load;
      F && ae && Pp(e(), function () {
        return ae({
          params: pe,
          location: {
            pathname: _.pathname,
            search: _.search,
            hash: _.hash,
            query: d0(_),
            state: null,
            key: ""
          },
          intent: "preload"
        });
      });
    };
    for (var j in L) {
      _loop7();
    }
    kt = D;
  }
}
function fH(r, t, e, n) {
  var o = r.base,
    i = r.location,
    a = r.params,
    _n$route = n().route,
    s = _n$route.pattern,
    l = _n$route.component,
    c = _n$route.load,
    u = ie(function () {
      return n().path;
    });
  l && l.preload && l.preload();
  var f = c ? c({
    params: a,
    location: i,
    intent: kt || "initial"
  }) : void 0;
  return {
    parent: t,
    pattern: s,
    path: u,
    outlet: function outlet() {
      return l ? jp(l, {
        params: a,
        location: i,
        data: f,
        get children() {
          return e();
        }
      }) : e();
    },
    resolvePath: function resolvePath(p) {
      return Si(o.path(), p, u());
    }
  };
}
var dH = function dH(r) {
  return function (t) {
    var e = t.base,
      n = dc(function () {
        return t.children;
      }),
      o = ie(function () {
        return x0(n(), t.base || "");
      });
    var i;
    var a = uH(r, o, function () {
      return i;
    }, {
      base: e,
      singleFlight: t.singleFlight
    });
    return r.create && r.create(a), R(p0.Provider, {
      value: a,
      get children() {
        return R(hH, {
          routerState: a,
          get root() {
            return t.root;
          },
          get load() {
            return t.rootLoad;
          },
          get children() {
            return [bc(function () {
              return (i = an()) && null;
            }), R(vH, {
              routerState: a,
              get branches() {
                return o();
              }
            })];
          }
        });
      }
    });
  };
};
function hH(r) {
  var t = r.routerState.location,
    e = r.routerState.params,
    n = ie(function () {
      return r.load && me(function () {
        return r.load({
          params: e,
          location: t,
          intent: "preload"
        });
      });
    });
  return R(Zi, {
    get when() {
      return r.root;
    },
    keyed: !0,
    get fallback() {
      return r.children;
    },
    children: function children(o) {
      return R(o, {
        params: e,
        location: t,
        get data() {
          return n();
        },
        get children() {
          return r.children;
        }
      });
    }
  });
}
function vH(r) {
  var t = [];
  var e;
  var n = ie(on(r.routerState.matches, function (o, i, a) {
    var s = i && o.length === i.length;
    var l = [];
    var _loop8 = function _loop8(c) {
      var f = i && i[c],
        v = o[c];
      a && f && v.route.key === f.route.key ? l[c] = a[c] : (s = !1, t[c] && t[c](), Ut(function (p) {
        t[c] = p, l[c] = fH(r.routerState, l[c - 1] || r.routerState.base, Gv(function () {
          return n()[c + 1];
        }), function () {
          return r.routerState.matches()[c];
        });
      }));
    };
    for (var c = 0, u = o.length; c < u; c++) {
      _loop8(c);
    }
    return t.splice(o.length).forEach(function (c) {
      return c();
    }), a && s ? a : (e = l[0], l);
  }));
  return Gv(function () {
    return n() && e;
  })();
}
var Gv = function Gv(r) {
    return function () {
      return R(Zi, {
        get when() {
          return r();
        },
        keyed: !0,
        children: function children(t) {
          return R(g0.Provider, {
            value: t,
            get children() {
              return t.outlet();
            }
          });
        }
      });
    };
  },
  Ie = function Ie(r) {
    var t = dc(function () {
      return r.children;
    });
    return vc(r, {
      get children() {
        return t();
      }
    });
  };
function pH(_ref18, e, n) {
  var _ref19 = _slicedToArray(_ref18, 2),
    r = _ref19[0],
    t = _ref19[1];
  return [e ? function () {
    return e(r());
  } : r, n ? function (o) {
    return t(n(o));
  } : t];
}
function gH(r) {
  if (r === "#") return null;
  try {
    return document.querySelector(r);
  } catch (t) {
    return null;
  }
}
function mH(r) {
  var t = !1;
  var e = function e(o) {
      return typeof o == "string" ? {
        value: o
      } : o;
    },
    n = pH(X(e(r.get()), {
      equals: function equals(o, i) {
        return o.value === i.value;
      }
    }), void 0, function (o) {
      return !t && r.set(o), o;
    });
  return r.init && dt(r.init(function () {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r.get();
    t = !0, n[1](e(o)), t = !1;
  })), dH({
    signal: n,
    create: r.create,
    utils: r.utils
  });
}
function yH(r, t, e) {
  return r.addEventListener(t, e), function () {
    return r.removeEventListener(t, e);
  };
}
function xH(r, t) {
  var e = gH("#".concat(r));
  e ? e.scrollIntoView() : t && window.scrollTo(0, 0);
}
var bH = new Map();
function $H() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/_server";
  return function (n) {
    var o = n.base.path(),
      i = n.navigatorFactory(n.base);
    var a = {};
    function s(m) {
      return m.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function l(m) {
      if (m.defaultPrevented || m.button !== 0 || m.metaKey || m.altKey || m.ctrlKey || m.shiftKey) return;
      var S = m.composedPath().find(function (g) {
        return g instanceof Node && g.nodeName.toUpperCase() === "A";
      });
      if (!S || t && !S.hasAttribute("link")) return;
      var w = s(S),
        $ = w ? S.href.baseVal : S.href;
      if ((w ? S.target.baseVal : S.target) || !$ && !S.hasAttribute("state")) return;
      var d = (S.getAttribute("rel") || "").split(/\s+/);
      if (S.hasAttribute("download") || d && d.includes("external")) return;
      var h = w ? new URL($, document.baseURI) : new URL($);
      if (!(h.origin !== window.location.origin || o && h.pathname && !h.pathname.toLowerCase().startsWith(o.toLowerCase()))) return [S, h];
    }
    function c(m) {
      var S = l(m);
      if (!S) return;
      var _S3 = _slicedToArray(S, 2),
        w = _S3[0],
        $ = _S3[1],
        y = n.parsePath($.pathname + $.search + $.hash),
        d = w.getAttribute("state");
      m.preventDefault(), i(y, {
        resolve: !1,
        replace: w.hasAttribute("replace"),
        scroll: !w.hasAttribute("noscroll"),
        state: d && JSON.parse(d)
      });
    }
    function u(m) {
      var S = l(m);
      if (!S) return;
      var _S4 = _slicedToArray(S, 2),
        w = _S4[0],
        $ = _S4[1];
      a[$.pathname] || n.preloadRoute($, w.getAttribute("preload") !== "false");
    }
    function f(m) {
      var S = l(m);
      if (!S) return;
      var _S5 = _slicedToArray(S, 2),
        w = _S5[0],
        $ = _S5[1];
      a[$.pathname] || (a[$.pathname] = setTimeout(function () {
        n.preloadRoute($, w.getAttribute("preload") !== "false"), delete a[$.pathname];
      }, 200));
    }
    function v(m) {
      var S = l(m);
      if (!S) return;
      var _S6 = _slicedToArray(S, 2),
        w = _S6[1];
      a[w.pathname] && (clearTimeout(a[w.pathname]), delete a[w.pathname]);
    }
    function p(m) {
      if (m.defaultPrevented) return;
      var S = m.submitter && m.submitter.hasAttribute("formaction") ? m.submitter.getAttribute("formaction") : m.target.getAttribute("action");
      if (!S) return;
      if (!S.startsWith("https://action/")) {
        var $ = new URL(S, f0);
        if (S = n.parsePath($.pathname + $.search), !S.startsWith(e)) return;
      }
      if (m.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      var w = bH.get(S);
      if (w) {
        m.preventDefault();
        var _$5 = new FormData(m.target);
        m.submitter && m.submitter.name && _$5.append(m.submitter.name, m.submitter.value), w.call({
          r: n,
          f: m.target
        }, _$5);
      }
    }
    V5(["click", "submit"]), document.addEventListener("click", c), r && (document.addEventListener("mouseover", f), document.addEventListener("mouseout", v), document.addEventListener("focusin", u), document.addEventListener("touchstart", u)), document.addEventListener("submit", p), dt(function () {
      document.removeEventListener("click", c), r && (document.removeEventListener("mouseover", f), document.removeEventListener("mouseout", v), document.removeEventListener("focusin", u), document.removeEventListener("touchstart", u)), document.removeEventListener("submit", p);
    });
  };
}
function SH(r) {
  var t = r.replace(/^.*?#/, "");
  if (!t.startsWith("/")) {
    var _window$location$hash = window.location.hash.split("#", 2),
      _window$location$hash2 = _slicedToArray(_window$location$hash, 2),
      _window$location$hash3 = _window$location$hash2[1],
      e = _window$location$hash3 === void 0 ? "/" : _window$location$hash3;
    return "".concat(e, "#").concat(t);
  }
  return t;
}
function wH(r) {
  var t = function t() {
      return window.location.hash.slice(1);
    },
    e = u0();
  return mH({
    get: t,
    set: function set(_ref20) {
      var n = _ref20.value,
        o = _ref20.replace,
        i = _ref20.scroll,
        a = _ref20.state;
      o ? window.history.replaceState(q5(a), "", "#" + n) : window.location.hash = n;
      var s = n.indexOf("#"),
        l = s >= 0 ? n.slice(s + 1) : "";
      xH(l, i), Su();
    },
    init: function init(n) {
      return yH(window, "hashchange", J5(n, function (o) {
        return !e.confirm(o && o < 0 ? o : t());
      }));
    },
    create: $H(r.preload, r.explicitLinks, r.actionBase),
    utils: {
      go: function go(n) {
        return window.history.go(n);
      },
      renderPath: function renderPath(n) {
        return "#".concat(n);
      },
      parsePath: SH,
      beforeLeave: e
    }
  })(r);
}
var TH = !!hx,
  IH = TH ? function (r) {
    return an() ? dt(r) : r;
  } : dt;
function AH(r, t, e, n) {
  return r.addEventListener(t, e, n), IH(r.removeEventListener.bind(r, t, e, n));
}
function EH(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : an();
  var e = 0,
    n,
    o;
  return function () {
    return e++, dt(function () {
      e--, queueMicrotask(function () {
        !e && o && (o(), o = n = void 0);
      });
    }), o || Ut(function (i) {
      return n = r(o = i);
    }, t), n;
  };
}
var CH = EH(function () {
  var _X21 = X(null),
    _X22 = _slicedToArray(_X21, 2),
    r = _X22[0],
    t = _X22[1];
  return AH(window, "keydown", function (e) {
    t(e), setTimeout(function () {
      return t(null);
    });
  }), r;
});
function si(r) {
  return typeof r == "function";
}
function RH(r) {
  return Array.isArray(r);
}
var li = {
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
  _X23 = X([]),
  _X24 = _slicedToArray(_X23, 2),
  Yi = _X24[0],
  OH = _X24[1],
  _H = function _H(r) {
    var t = CH();
    if (r) {
      var _loop9 = function _loop9() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i12], 2),
          e = _Object$entries3$_i[0],
          n = _Object$entries3$_i[1];
        RH(n) ? n.forEach(function (o) {
          li[o] = e;
        }) : li[n] = e;
      };
      for (var _i12 = 0, _Object$entries3 = Object.entries(r); _i12 < _Object$entries3.length; _i12++) {
        _loop9();
      }
    }
    return cr(on(gc, function (e, n) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var i = e;
      var a = [];
      for (; i;) i.states.has("focus") || (i.states.add("focus"), si(i.onFocus) && i.onFocus.call(i, e, n)), a.push(i), i = i.parent;
      return o.forEach(function (s) {
        a.includes(s) || (s.states.remove("focus"), si(s.onBlur) && s.onBlur.call(s, e, n));
      }), OH(a), a;
    }, {
      defer: !0
    })), cr(function () {
      var e = t();
      if (e) {
        var n = li[e.key] || li[e.keyCode];
        me(function () {
          var o = Yi();
          var i;
          var _iterator19 = _createForOfIteratorHelper(o),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var a = _step19.value;
              if (i = i || a, n) {
                var s = a["on".concat(n)];
                if (si(s) && s.call(a, e, a, i) === !0) break;
              } else console.log("Unhandled key event: ".concat(e.key || e.keyCode));
              if (si(a.onKeyPress) && a.onKeyPress.call(a, e, n, a, i) === !0) break;
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          return !1;
        });
      }
    }), Yi;
  };
function PH(r, t) {
  var _e10, _e11;
  var e = t();
  var n, o, i, a;
  Array.isArray(e) ? e.length === 2 ? (n = a = e[0], o = i = e[1]) : e.length === 3 ? (n = e[0], o = i = e[1], a = e[2]) : (_e10 = e, _e11 = _slicedToArray(_e10, 4), n = _e11[0], i = _e11[1], a = _e11[2], o = _e11[3], _e10) : n = i = a = o = e, r.onBeforeLayout = function (s, l) {
    if (l) {
      r.width = r.children.reduce(function (f, v) {
        return f + (v.width || 0);
      }, 0) + o + i;
      var c = r.children[0];
      c && (c.x = o, c.marginLeft = o);
      var u = 0;
      return r.children.forEach(function (f) {
        f.y = n, f.marginTop = n, u = Math.max(u, f.height || 0);
      }), r.height = u + n + a, !0;
    }
  };
}
function NH() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = [];
  var e;
  for (e = 0; e < r.length; e++) {
    var n = r[e];
    if (typeof n == "string" && !n.includes("PAUSE-")) t.push(r[e]);else break;
  }
  return [t.join(",\b ")].concat(r.slice(e));
}
function Vv(r) {
  return new Promise(function (t) {
    setTimeout(t, r);
  });
}
function LH(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en-US";
  var n = window.speechSynthesis;
  return new Promise(function (o, i) {
    var a = new SpeechSynthesisUtterance(r);
    a.lang = e, a.onend = function () {
      o();
    }, a.onerror = function (s) {
      i(s);
    }, t.push(a), n.speak(a);
  });
}
function ac(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var n = window.speechSynthesis,
    o = NH(Array.isArray(r) ? r : [r]),
    i = [],
    a = [];
  var s = !0;
  return {
    series: _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var c, u, f, _u2, _u3;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
          case 1:
            if (!(s && o.length)) {
              _context14.next = 61;
              break;
            }
            _context14.next = 4;
            return Promise.resolve(o.shift());
          case 4:
            c = _context14.sent;
            if (!s) {
              _context14.next = 58;
              break;
            }
            if (!(typeof c == "string" && c.includes("PAUSE-"))) {
              _context14.next = 13;
              break;
            }
            u = Number(c.split("PAUSE-")[1]) * 1e3;
            isNaN(u) && (u = 0);
            _context14.next = 11;
            return Vv(u);
          case 11:
            _context14.next = 56;
            break;
          case 13:
            if (!(typeof c == "string" && c.length)) {
              _context14.next = 44;
              break;
            }
            f = 3;
          case 15:
            if (!(s && f > 0)) {
              _context14.next = 42;
              break;
            }
            _context14.prev = 16;
            _context14.next = 19;
            return LH(c, a, t);
          case 19:
            f = 0;
            _context14.next = 40;
            break;
          case 22:
            _context14.prev = 22;
            _context14.t0 = _context14["catch"](16);
            if (!(_context14.t0 instanceof SpeechSynthesisErrorEvent)) {
              _context14.next = 39;
              break;
            }
            if (!(_context14.t0.error === "network")) {
              _context14.next = 32;
              break;
            }
            f--;
            console.warn("Speech synthesis network error. Retries left: ".concat(f));
            _context14.next = 30;
            return Vv(500 * (3 - f));
          case 30:
            _context14.next = 37;
            break;
          case 32:
            if (!(_context14.t0.error === "canceled" || _context14.t0.error === "interrupted")) {
              _context14.next = 36;
              break;
            }
            f = 0;
            _context14.next = 37;
            break;
          case 36:
            throw new Error("SpeechSynthesisErrorEvent: ".concat(_context14.t0.error));
          case 37:
            _context14.next = 40;
            break;
          case 39:
            throw _context14.t0;
          case 40:
            _context14.next = 15;
            break;
          case 42:
            _context14.next = 56;
            break;
          case 44:
            if (!(typeof c == "function")) {
              _context14.next = 51;
              break;
            }
            _u2 = ac(c(), t, !1);
            i.push(_u2);
            _context14.next = 49;
            return _u2.series;
          case 49:
            _context14.next = 56;
            break;
          case 51:
            if (!Array.isArray(c)) {
              _context14.next = 56;
              break;
            }
            _u3 = ac(c, t, !1);
            i.push(_u3);
            _context14.next = 56;
            return _u3.series;
          case 56:
            _context14.next = 59;
            break;
          case 58:
            return _context14.abrupt("break", 61);
          case 59:
            _context14.next = 1;
            break;
          case 61:
            _context14.prev = 61;
            s = !1;
            return _context14.finish(61);
          case 64:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0,, 61, 64], [16, 22]]);
    }))(),
    get active() {
      return s;
    },
    append: function append(c) {
      o.push(c);
    },
    cancel: function cancel() {
      s && (e && n.cancel(), i.forEach(function (c) {
        c.cancel();
      }), s = !1);
    }
  };
}
var ci;
function FH(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
  return ci && ci.cancel(), ci = ac(r, t), ci;
}
var kH = function kH(r, t) {
  var e;
  var n = function n() {
    return clearTimeout(e);
  };
  return an() && dt(n), Object.assign(function () {
    for (var _len4 = arguments.length, i = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      i[_key4] = arguments[_key4];
    }
    e !== void 0 && n(), e = setTimeout(function () {
      return r.apply(void 0, i);
    }, t);
  }, {
    clear: n
  });
};
var sc,
  Hn = [],
  lt,
  lc = !1;
var BH = 3e5;
function Xv(r, t) {
  var e = kH(r, t);
  var n;
  var o = function o(i) {
    n = i, e(i);
  };
  return o.flush = function () {
    e.clear(), r(n);
  }, o.clear = e.clear, o;
}
function _n(r) {
  return r.id || r.name;
}
function MH() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!be.onFocusChange || !be.enabled) return;
  var t = r.every(function (i) {
      return !i.loading;
    }),
    e = r.filter(function (i) {
      return !Hn.includes(i);
    });
  if (sc(), !t && be.onFocusChange) {
    be.onFocusChange([]);
    return;
  }
  Hn = r.slice(0);
  var n = [],
    o = e.reduce(function (i, a) {
      return a.announce ? (i.push([_n(a), "Announce", a.announce]), n.push(a.announce)) : a.title ? (i.push([_n(a), "Title", a.title]), n.push(a.title)) : i.push([_n(a), "No Announce", ""]), i;
    }, []);
  if (e.reverse().reduce(function (i, a) {
    return a.announceContext ? (i.push([_n(a), "Context", a.announceContext]), n.push(a.announceContext)) : i.push([_n(a), "No Context", ""]), i;
  }, o), be.debug && console.table(o), n.length) return be.speak(n.reduce(function (i, a) {
    return i.concat(a);
  }, []));
}
function DH(r) {
  if (!lc) return lt = FH(r);
}
var be = {
    debug: !1,
    enabled: !0,
    cancel: function cancel() {
      lt && lt.cancel();
    },
    clearPrevFocus: function clearPrevFocus() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      Hn = Hn.slice(0, r), sc();
    },
    speak: function speak(r) {
      var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref22$append = _ref22.append,
        t = _ref22$append === void 0 ? !1 : _ref22$append,
        _ref22$notification = _ref22.notification,
        e = _ref22$notification === void 0 ? !1 : _ref22$notification;
      return be.onFocusChange && be.enabled && (be.onFocusChange.flush(), t && lt && lt.active ? lt.append(r) : (be.cancel(), DH(r)), e && (lc = !0, lt == null || lt.series["finally"](function () {
        lc = !1, be.refresh();
      })["catch"](console.error))), lt;
    },
    refresh: function refresh() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      be.clearPrevFocus(r), be.onFocusChange && be.onFocusChange(me(function () {
        return Yi();
      }));
    },
    setupTimers: function setupTimers() {
      var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref23$focusDebounce = _ref23.focusDebounce,
        r = _ref23$focusDebounce === void 0 ? 400 : _ref23$focusDebounce,
        _ref23$focusChangeTim = _ref23.focusChangeTimeout,
        t = _ref23$focusChangeTim === void 0 ? BH : _ref23$focusChangeTim;
      be.onFocusChange = Xv(MH, r), sc = Xv(function () {
        Hn = [];
      }, t);
    }
  },
  jH = function jH() {
    return be.setupTimers(), cr(on(Yi, be.onFocusChange, {
      defer: !0
    })), be;
  };
function UH(r, t) {
  var e = bt.createTexture("ImageTexture", {
    src: r
  });
  return t.reduce(function (n, o) {
    var i = o.x,
      a = o.y,
      s = o.width,
      l = o.height;
    return n[o.name] = bt.createTexture("SubTexture", {
      texture: e,
      x: i,
      y: a,
      width: s,
      height: l
    }), n;
  }, {});
}
var _X25 = X(""),
  _X26 = _slicedToArray(_X25, 2),
  zH = _X26[0],
  WH = _X26[1],
  x = {
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
  };
function HH() {
  var r,
    t,
    e,
    n = 0;
  var o = 1,
    i = {
      duration: 750,
      easing: "ease-in-out"
    },
    a = {
      alpha: o,
      color: 4294967295
    };
  function s(l) {
    if (l.startsWith("#")) {
      r.color = ge(l), r.src = "", r.alpha = 1, n = 1, t.alpha = 0, e.alpha = 0;
      return;
    } else r.color = 4294967295, e.alpha = 1;
    if (n === 0) {
      r.src = l, n = 1;
      return;
    }
    if (n === 1) {
      t.src = l, n = 2, t.alpha = 0, t.animate({
        alpha: o
      }, i).start(), r.animate({
        alpha: 0
      }, i).start();
      return;
    }
    n === 2 && (r.src = l, n = 1, r.alpha = 0, r.animate({
      alpha: o
    }, i).start(), t.animate({
      alpha: 0
    }, i).start());
  }
  return cr(on(zH, function (l) {
    s(l);
  }, {
    defer: !0
  })), R(H, {
    width: 1920,
    height: 1080,
    zIndex: -5,
    get children() {
      return [R(H, {
        ref: function ref(l) {
          var c = r;
          typeof c == "function" ? c(l) : r = l;
        },
        style: a
      }), R(H, {
        ref: function ref(l) {
          var c = t;
          typeof c == "function" ? c(l) : t = l;
        },
        style: a,
        alpha: 0
      }), R(H, {
        ref: function ref(l) {
          var c = e;
          typeof c == "function" ? c(l) : e = l;
        },
        src: "./assets/hero-mask-inverted.png",
        get color() {
          return ge(x.color.materialBrand);
        },
        width: 1920,
        height: 1080
      })];
    }
  });
}
var Qv, qv, Jv, Zv, ep, tp, rp, np, op, ip, ap, sp, lp, cp, up, fp, dp, hp, vp;
function ui(r) {
  if (!r || !r[Symbol.iterator]) throw new Error("objectFromEntries requires a single iterable argument");
  var t = {};
  var _iterator20 = _createForOfIteratorHelper(r),
    _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var _step20$value = _slicedToArray(_step20.value, 2),
        e = _step20$value[0],
        n = _step20$value[1];
      t[e] = n;
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
  return t;
}
var YH = ["focus", "disabled"],
  KH = ["brand", "inverse", "neutral"];
function U(_ref21) {
  var r = _ref21.themeKeys,
    t = _ref21.base,
    e = _ref21.modes,
    n = _ref21.tones,
    o = _ref21.themeStyles,
    _ref21$modeKeys = _ref21.modeKeys,
    i = _ref21$modeKeys === void 0 ? YH : _ref21$modeKeys,
    _ref21$toneKeys = _ref21.toneKeys,
    a = _ref21$toneKeys === void 0 ? KH : _ref21$toneKeys;
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var l = function l(m, S, w) {
      var $ = a.map(function (y) {
        var g, T;
        var d = {};
        return new Set([].concat.apply([], [(g = m == null ? void 0 : m[y]) != null ? g : {}, (T = S == null ? void 0 : S[y]) != null ? T : {}].map(Object.keys))).forEach(function (I) {
          var O;
          var C, A;
          i.includes(I) || (d[I] = (O = (C = S == null ? void 0 : S[y]) == null ? void 0 : C[I]) != null ? O : (A = m == null ? void 0 : m[y]) == null ? void 0 : A[I]);
        }), i.forEach(function (I) {
          var C, A;
          d[I] = _objectSpread(_objectSpread(_objectSpread({}, w[I]), (C = m == null ? void 0 : m[y]) == null ? void 0 : C[I]), (A = S == null ? void 0 : S[y]) == null ? void 0 : A[I]);
        }), [y, d];
      });
      return ui($);
    },
    c = function c(m, S) {
      var w = i.map(function (y) {
        return [y, _objectSpread(_objectSpread({}, m == null ? void 0 : m[y]), S == null ? void 0 : S[y])];
      });
      return ui(w);
    },
    u = function u(m, S) {
      return _objectSpread(_objectSpread({}, m), S.base);
    },
    f = function f(m) {
      return ui(Object.entries(r).filter(function (_ref24) {
        var _ref25 = _slicedToArray(_ref24, 2),
          S = _ref25[0],
          w = _ref25[1];
        return m[w];
      }).map(function (_ref26) {
        var _ref27 = _slicedToArray(_ref26, 2),
          S = _ref27[0],
          w = _ref27[1];
        return [S, m[w]];
      }));
    },
    v = function v(m) {
      return ui(Object.entries(m).map(function (_ref28) {
        var _ref29 = _slicedToArray(_ref28, 2),
          w = _ref29[0],
          $ = _ref29[1];
        var y = f($);
        return Object.entries($).filter(function (_ref30) {
          var _ref31 = _slicedToArray(_ref30, 2),
            d = _ref31[0],
            h = _ref31[1];
          return i.includes(d);
        }).forEach(function (_ref32) {
          var _ref33 = _slicedToArray(_ref32, 2),
            d = _ref33[0],
            h = _ref33[1];
          y[d] = f(h);
        }), [w, y];
      }));
    };
  return function (m, S, w) {
    var $ = v(o);
    s && console.log($);
    var y = u(m, $);
    s && console.log(y);
    var d = c(S, $);
    s && console.log(d);
    var h = l(w, $, d);
    return s && console.log(h), {
      base: _objectSpread(_objectSpread({}, y), d),
      tones: h
    };
  }(t, e, n);
}
function Ki() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = arguments.length > 3 ? arguments[3] : undefined;
    var w, $, y, d;
    if (t.children.length === 0) return;
    var i = t.flexDirection === "row" ? "width" : "height",
      a = t.flexDirection === "row" ? "x" : "y",
      s = t.gap || 0,
      l = t.scroll || "auto",
      _GH = GH(t),
      _GH2 = _slicedToArray(_GH, 2),
      c = _GH2[0],
      u = _GH2[1];
    var f = (w = t[a]) != null ? w : 0;
    var v = ($ = e == null ? void 0 : e[a]) != null ? $ : 0,
      p = (y = e == null ? void 0 : e[i]) != null ? y : 0,
      m = o === void 0 ? "none" : n > o ? "positive" : "negative";
    var S = f;
    if (l === "auto") t.scrollIndex != null && t.scrollIndex >= 0 ? t.selected >= t.scrollIndex && (m === "positive" ? S = f - p - s : S = f + p + s) : (Math.abs(f) + u < c.position + c.size || v < Math.abs(f)) && (S = -v + r);else if (l === "always" || l === "edge" && m === "negative" && Math.abs(f) > v) S = -v + r;else if (l === "edge" && m === "positive" && Math.abs(f) + u < v + p) S = f - p - s;else if (l === "edge" && m === "none") {
      var h = 0,
        g,
        T;
      for (; h < t.children.length && Math.abs(f) + u < v + p;) g = t.children[h++], T = (d = g[i]) != null ? d : 0, f -= T + s;
      S = f;
    }
    a === "x" && t.x !== S ? t.x = S : a === "y" && t.y !== S && (t.y = S);
  };
}
function GH(r) {
  var n, o, i, a, s, l;
  var t, e;
  return r.flexDirection === "row" ? (t = {
    position: (n = r.children[r.children.length - 1].x) != null ? n : 0,
    size: (o = r.children[r.children.length - 1].width) != null ? o : 0
  }, e = (i = r.width) != null ? i : 0) : (t = {
    position: (a = r.children[r.children.length - 1].y) != null ? a : 0,
    size: (s = r.children[r.children.length - 1].height) != null ? s : 0
  }, e = (l = r.height) != null ? l : 0), [t, e];
}
function jt() {
  for (var _len5 = arguments.length, r = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    r[_key5] = arguments[_key5];
  }
  var t = r.filter(function (e) {
    return typeof e == "function";
  });
  if (t.length !== 0) return t.length === 1 ? t[0] : function () {
    var n;
    for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      e[_key6] = arguments[_key6];
    }
    var _iterator21 = _createForOfIteratorHelper(t),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var o = _step21.value;
        if (n = o.apply(this, e), n === !0) return n;
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return n;
  };
}
function b0() {
  if (!this || this.selected === void 0 || this.children.length === 0) return !1;
  var r = this.children[this.selected];
  for (; r != null && r.skipFocus;) this.selected++, r = this.children[this.selected];
  return r instanceof tt ? (r.setFocus(), !0) : !1;
}
function Gi(r) {
  return function () {
    var t, e, n;
    var o = this.children.length,
      i = this.wrap,
      a = this.selected || 0;
    if (o === 0) return !1;
    if (r === "right" || r === "down") {
      do if (this.selected = (this.selected || 0) % o + 1, this.selected >= o) {
        if (!i) {
          this.selected = void 0;
          break;
        }
        this.selected = 0;
      } while ((t = this.children[this.selected]) != null && t.skipFocus);
    } else if (r === "left" || r === "up") do if (this.selected = (this.selected || 0) % o - 1, this.selected < 0) {
      if (!i) {
        this.selected = void 0;
        break;
      }
      this.selected = o - 1;
    } while ((e = this.children[this.selected]) != null && e.skipFocus);
    if (this.selected === void 0 && (this.selected = a, (n = this.children[this.selected]) != null && n.states.has("focus"))) return !1;
    var s = this.children[this.selected];
    if (this.onSelectedChanged && this.onSelectedChanged.call(this, this, s, this.selected, a), this.plinko && a !== void 0) {
      var c = this.children[a].selected || 0;
      s.selected = c < s.children.length ? c : s.children.length - 1;
    }
    return s.setFocus(), !0;
  };
}
function VH() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var t = x.layout.screenW,
    e = x.layout.columnCount,
    n = x.layout.marginX,
    o = x.layout.gutterX;
  if (r < 1 || r > e) {
    console.error("Column expects a number between 1 & ".concat(e, ". Received ").concat(r));
    return;
  }
  var i = t - n * 2,
    a = (r - 1) * o;
  return (i - a) / r;
}
var _ref34 = (Qv = x) == null ? void 0 : Qv.componentConfig,
  _ref34$Artwork = _ref34.Artwork,
  _ref34$Artwork2 = _ref34$Artwork === void 0 ? {
    styles: {}
  } : _ref34$Artwork,
  dK = _ref34$Artwork2.defaultTone,
  XH = _objectWithoutProperties(_ref34$Artwork2, ["defaultTone"]),
  QH = {
    themeKeys: {
      fillColor: "fillColor",
      scale: "imageScale",
      pivotX: "imageScalePivotX",
      pivotY: "imageScalePivotY"
    },
    base: {
      fallbackSrc: void 0,
      fillColor: x.color.overlay,
      gradientColor: x.color.material,
      pivotX: .5,
      pivotY: .5,
      scale: void 0,
      borderRadius: x.radius.md
    },
    themeStyles: XH
  };
U(QH);
var _ref35 = (qv = x) == null ? void 0 : qv.componentConfig,
  _ref35$Badge = _ref35.Badge,
  _ref35$Badge2 = _ref35$Badge === void 0 ? {
    styles: {}
  } : _ref35$Badge,
  hK = _ref35$Badge2.defaultTone,
  Au = _objectWithoutProperties(_ref35$Badge2, ["defaultTone"]),
  qH = {
    themeKeys: {
      color: "backgroundColor"
    },
    base: {
      color: x.color.fillInverseSecondary,
      borderRadius: x.radius.sm,
      border: {
        color: x.color.strokeInverse,
        width: x.stroke.sm
      },
      display: "flex",
      justifyContent: "spaceEvenly",
      padding: [x.spacer.md - x.stroke.sm, x.spacer.xs + x.stroke.sm, x.spacer.md + x.stroke.sm, x.spacer.md + x.stroke.sm]
    },
    tones: {
      inverse: {
        color: x.color.fillNeutralSecondary,
        borderRadius: x.radius.sm,
        border: {
          color: x.color.strokeInverseSecondary,
          width: x.stroke.sm
        }
      },
      brand: {
        color: x.color.fillBrand,
        borderRadius: x.radius.sm,
        border: {
          color: x.color.strokeInverseSecondary,
          width: x.stroke.sm
        }
      }
    },
    themeStyles: Au
  },
  JH = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({}, x.typography.tag1), {}, {
      color: x.color.textNeutral
    }),
    tones: {
      inverse: {
        color: x.color.textInverse
      },
      brand: {
        color: x.color.textNeutral
      }
    },
    themeStyles: Au
  },
  ZH = {
    themeKeys: {
      color: "iconColor"
    },
    base: {
      color: x.color.textNeutral
    },
    tones: {
      inverse: {
        color: x.color.textInverse
      },
      brand: {
        color: x.color.textNeutral
      }
    },
    themeStyles: Au
  };
U(qH);
U(ZH);
U(JH);
var _ref36 = (Jv = x) == null ? void 0 : Jv.componentConfig,
  _ref36$Button = _ref36.Button,
  _ref36$Button2 = _ref36$Button === void 0 ? {
    styles: {}
  } : _ref36$Button,
  e8 = _ref36$Button2.defaultTone,
  Eu = _objectWithoutProperties(_ref36$Button2, ["defaultTone"]),
  _ref37 = (Zv = x) == null ? void 0 : Zv.componentConfig,
  _ref37$Surface = _ref37.Surface,
  _ref37$Surface2 = _ref37$Surface === void 0 ? {
    styles: {}
  } : _ref37$Surface,
  t8 = _ref37$Surface2.surfaceDefaultTone,
  Cu = _objectWithoutProperties(_ref37$Surface2, ["surfaceDefaultTone"]),
  r8 = {
    themeKeys: {
      textAlign: "textAlign",
      borderRadius: "radius",
      color: "backgroundColor",
      justifyContent: "justifyContent"
    },
    base: {
      height: x.typography.button1.lineHeight + x.spacer.xl * 2,
      display: "flex",
      padding: [x.spacer.xxxl, x.spacer.xl],
      color: x.color.interactiveNeutral,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: x.radius.sm,
      contentColor: x.color.fillNeutral
    },
    modes: {
      focus: {
        color: x.color.interactiveNeutralFocus,
        contentColor: x.color.fillInverse
      },
      disabled: {
        color: x.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: x.color.interactiveInverse
      },
      brand: {
        color: x.color.interactiveBrand,
        focus: {
          color: x.color.fillNeutral
        }
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, Cu), Eu)
  },
  n8 = {
    themeKeys: {
      color: "contentColor"
    },
    base: {
      color: x.color.textNeutral
    },
    modes: {
      focus: {
        color: x.color.textInverse
      },
      disabled: {
        color: x.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: x.color.fillNeutral
      },
      brand: {
        color: x.color.fillBrand,
        focus: {
          color: x.color.fillBrand
        }
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, Cu), Eu)
  },
  o8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: x.color.textNeutral
    }, x.typography.button1),
    modes: {
      focus: {
        color: x.color.textInverse
      },
      disabled: {
        color: x.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: x.color.fillNeutral
      },
      brand: {
        color: x.color.fillBrand,
        focus: {
          color: x.color.fillBrand
        }
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, Cu), Eu)
  },
  i8 = U(r8),
  a8 = U(n8),
  s8 = U(o8),
  Or = {
    tone: e8 || t8 || "neutral",
    Container: i8,
    Content: a8,
    Text: s8
  },
  vK = function vK(r) {
    return R(H, Ue(r, {
      get style() {
        var e;
        var t;
        return [r.style, (t = Or.Container.tones) == null ? void 0 : t[(e = r.tone) != null ? e : Or.tone], Or.Container.base];
      },
      forwardStates: !0,
      get children() {
        return R(oe, {
          get style() {
            var t;
            return [Or.Text.tones[(t = r.tone) != null ? t : Or.tone], Or.Text.base];
          },
          get children() {
            return r.children;
          }
        });
      }
    }));
  },
  _ref38 = (ep = x) == null ? void 0 : ep.componentConfig,
  _ref38$Checkbox = _ref38.Checkbox,
  _ref38$Checkbox2 = _ref38$Checkbox === void 0 ? {
    styles: {}
  } : _ref38$Checkbox,
  pK = _ref38$Checkbox2.defaultTone,
  $0 = _objectWithoutProperties(_ref38$Checkbox2, ["defaultTone"]),
  rr = x.stroke.sm,
  mt = x.spacer.xxl,
  l8 = {
    themeKeys: {
      color: "color",
      borderRadius: "borderRadius",
      border: "border",
      justifyContent: "justifyContent"
    },
    base: {
      width: mt,
      height: mt,
      display: "flex",
      justifyContent: "center",
      color: x.color.fillNeutral,
      alignItems: "center",
      borderRadius: mt / 4,
      border: {
        color: x.color.strokeInverse,
        width: rr
      }
    },
    modes: {
      disabled: {
        alpha: x.alpha.inactive
      }
    },
    tones: {
      brand: {
        borderRadius: mt / 4,
        border: {
          color: x.color.strokeNeutralSecondary,
          width: rr
        },
        color: x.color.fillNeutralSecondary,
        checked: {
          borderRadius: mt / 4,
          border: {
            color: x.color.strokeNeutralSecondary,
            width: rr
          },
          color: x.color.fillBrand
        }
      },
      neutral: {
        borderRadius: mt / 4,
        border: {
          color: x.color.strokeNeutralSecondary,
          width: rr
        },
        color: x.color.fillInverseSecondary,
        checked: {
          borderRadius: mt / 4,
          border: {
            color: x.color.strokeNeutralSecondary,
            width: rr
          },
          color: x.color.fillNeutral
        }
      },
      inverse: {
        borderRadius: mt / 4,
        border: {
          color: x.color.strokeInverseSecondary,
          width: rr
        },
        color: x.color.fillNeutralSecondary,
        checked: {
          borderRadius: mt / 4,
          border: {
            color: x.color.strokeInverseSecondary,
            width: rr
          },
          color: x.color.fillInverse
        }
      }
    },
    modeKeys: ["focus", "disabled", "checked"],
    themeStyles: $0
  },
  c8 = {
    themeKeys: {
      color: "color"
    },
    base: {
      width: x.spacer.lg,
      height: x.spacer.lg,
      src: x.asset.check
    },
    tones: {
      neutral: {
        color: x.color.fillInverse
      },
      inverse: {
        color: x.color.fillNeutral
      },
      brand: {
        color: x.color.fillInverse
      }
    },
    themeStyles: $0
  };
U(l8);
U(c8);
var _ref39 = (tp = x) == null ? void 0 : tp.componentConfig,
  _ref39$Icon = _ref39.Icon,
  _ref39$Icon2 = _ref39$Icon === void 0 ? {
    styles: {}
  } : _ref39$Icon,
  gK = _ref39$Icon2.defaultTone,
  u8 = _objectWithoutProperties(_ref39$Icon2, ["defaultTone"]),
  f8 = {
    themeKeys: {
      color: "color"
    },
    base: {
      width: 100,
      height: 100,
      color: x.color.fillInverse
    },
    tones: {
      inverse: {
        color: x.color.fillInverse
      },
      brand: {
        color: x.color.fillBrand
      }
    },
    themeStyles: u8
  };
U(f8);
var _ref40 = (rp = x) == null ? void 0 : rp.componentConfig,
  _ref40$Column = _ref40.Column,
  _ref40$Column2 = _ref40$Column === void 0 ? {
    styles: {}
  } : _ref40$Column,
  d8 = _ref40$Column2.defaultTone,
  h8 = _objectWithoutProperties(_ref40$Column2, ["defaultTone"]),
  v8 = {
    themeKeys: {
      gap: "itemSpacing",
      scrollIndex: "scrollIndex",
      itemTransition: "itemTransition"
    },
    base: {
      display: "flex",
      flexBoundary: "fixed",
      flexDirection: "column",
      gap: x.layout.gutterY,
      itemTransition: _objectSpread(_objectSpread({}, x.animation.standardEntrance), {}, {
        duration: x.animation.duration.fast
      })
    },
    themeStyles: h8
  },
  p8 = U(v8),
  Js = {
    tone: d8 || "neutral",
    Container: p8
  },
  S0 = function S0(r) {
    var t = Gi("up"),
      e = Gi("down");
    return R(H, Ue(r, {
      get onUp() {
        return jt(r.onUp, t);
      },
      get onDown() {
        return jt(r.onDown, e);
      },
      get selected() {
        return r.selected || 0;
      },
      forwardFocus: b0,
      get onLayout() {
        return jt(function (n) {
          var o, i;
          return Ki(r.y).call(n, n, n.children[(o = r.selected) != null ? o : 0], (i = r.selected) != null ? i : 0, void 0);
        }, r.onLayout);
      },
      get onSelectedChanged() {
        return jt(r.onSelectedChanged, r.scroll !== "none" ? Ki(r.y) : void 0);
      },
      get style() {
        var n;
        return [r.style, Js.Container.tones[(n = r.tone) != null ? n : Js.tone], Js.Container.base];
      }
    }));
  },
  _ref41 = (np = x) == null ? void 0 : np.componentConfig,
  _ref41$Label = _ref41.Label,
  _ref41$Label2 = _ref41$Label === void 0 ? {
    styles: {}
  } : _ref41$Label,
  mK = _ref41$Label2.defaultTone,
  w0 = _objectWithoutProperties(_ref41$Label2, ["defaultTone"]),
  g8 = {
    themeKeys: {
      color: "backgroundColor",
      borderRadius: "radius"
    },
    base: {
      display: "flex",
      justifyContent: "center",
      color: x.color.textNeutral,
      padding: [x.spacer.md, x.spacer.lg],
      borderRadius: [x.radius.md, x.radius.md, x.radius.md, x.radius.none],
      height: x.typography.caption1.lineHeight + x.spacer.md,
      neutral: {
        backgroundColor: x.color.fillNeutral
      }
    },
    tones: {
      inverse: {
        color: x.color.fillInverse
      },
      brand: {
        color: x.color.fillBrand,
        focus: {
          color: x.color.orange
        }
      }
    },
    themeStyles: w0
  },
  m8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({}, x.typography.caption1), {}, {
      color: x.color.textInverse
    }),
    tones: {
      inverse: {
        color: x.color.textNeutral
      },
      brand: {
        color: x.color.textNeutral
      }
    },
    themeStyles: w0
  };
U(g8);
U(m8);
var _ref42 = (op = x) == null ? void 0 : op.componentConfig,
  _ref42$Details = _ref42.Details,
  _ref42$Details2 = _ref42$Details === void 0 ? {
    styles: {}
  } : _ref42$Details,
  yK = _ref42$Details2.defaultTone,
  T0 = _objectWithoutProperties(_ref42$Details2, ["defaultTone"]),
  y8 = {
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
      contentSpacing: x.spacer.lg,
      badgeContentSpacing: x.spacer.sm,
      ratingContentSpacing: x.spacer.lg
    },
    themeStyles: T0
  },
  x8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({}, x.typography.body2), {}, {
      marginRight: x.spacer.lg,
      color: x.color.textNeutral
    }),
    tones: {
      neutral: {
        disabled: {
          color: x.color.textNeutralDisabled
        }
      },
      inverse: {
        color: x.color.textInverse,
        disabled: {
          color: x.color.textNeutralDisabled
        }
      },
      brand: {
        color: x.color.textNeutral,
        disabled: {
          color: x.color.textNeutralDisabled
        }
      }
    },
    themeStyles: T0
  };
U(y8);
U(x8);
var _ref43 = (ip = x) == null ? void 0 : ip.componentConfig,
  _ref43$Rating = _ref43.Rating,
  _ref43$Rating2 = _ref43$Rating === void 0 ? {
    styles: {},
    defaultTone: "neutral"
  } : _ref43$Rating,
  Ru = _ref43$Rating2.styles,
  xK = _ref43$Rating2.defaultTone,
  b8 = {
    themeKeys: {
      justifyContent: "justifyContent",
      itemSpacing: "itemSpacing"
    },
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      itemSpacing: x.spacer.sm
    },
    toneModes: {},
    themeStyles: Ru
  },
  $8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      color: x.color.textNeutral
    }, x.typography.body2),
    toneModes: {},
    themeStyles: Ru
  },
  S8 = {
    themeKeys: {
      color: "color"
    },
    base: {
      height: x.typography.body2.lineHeight,
      width: x.typography.body2.lineHeight,
      color: x.color.fillNeutral,
      marginRight: x.spacer.sm
    },
    toneModes: {},
    themeStyles: Ru
  };
U(b8);
U(S8);
U($8);
var _ref44 = (ap = x) == null ? void 0 : ap.componentConfig,
  _ref44$Metadata = _ref44.Metadata,
  _ref44$Metadata2 = _ref44$Metadata === void 0 ? {
    styles: {}
  } : _ref44$Metadata,
  bK = _ref44$Metadata2.defaultTone,
  Ou = _objectWithoutProperties(_ref44$Metadata2, ["defaultTone"]),
  w8 = {
    themeKeys: {
      justifyContent: "justifyContent",
      alpha: "alpha"
    },
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      flexBoundary: "contain",
      alpha: x.alpha.primary
    },
    modes: {
      disabled: {
        alpha: x.alpha.inactive
      }
    },
    themeStyles: Ou
  },
  T8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({
      maxLines: 1,
      contain: "width"
    }, x.typography.headline3), {}, {
      color: x.color.textNeutral
    }),
    tones: {
      neutral: {
        disabled: {
          color: x.color.textNeutralDisabled
        }
      },
      inverse: {
        color: x.color.textInverse,
        disabled: {
          color: x.color.textNeutralDisabled
        }
      },
      brand: {
        color: x.color.textNeutral,
        disabled: {
          color: x.color.textNeutralDisabled
        }
      }
    },
    themeStyles: Ou
  },
  I8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({
      contain: "width",
      maxLines: 2
    }, x.typography.body2), {}, {
      color: x.color.textNeutralSecondary
    }),
    tones: {
      neutral: {
        disabled: {
          color: x.color.textNeutralDisabled
        }
      },
      inverse: {
        color: x.color.textInverseSecondary,
        disabled: {
          color: x.color.textNeutralDisabled
        }
      },
      brand: {
        color: x.color.textNeutralSecondary,
        disabled: {
          color: x.color.textNeutralDisabled
        }
      }
    },
    themeStyles: Ou
  };
U(w8);
U(I8);
U(T8);
var _ref45 = (sp = x) == null ? void 0 : sp.componentConfig,
  _ref45$ProgressBar = _ref45.ProgressBar,
  _ref45$ProgressBar2 = _ref45$ProgressBar === void 0 ? {
    styles: {}
  } : _ref45$ProgressBar,
  $K = _ref45$ProgressBar2.defaultTone,
  I0 = _objectWithoutProperties(_ref45$ProgressBar2, ["defaultTone"]),
  A8 = {
    themeKeys: {
      color: "barColor",
      borderRadius: "borderRadius"
    },
    base: {
      height: x.spacer.md,
      color: x.color.fillNeutralTertiary,
      borderRadius: x.radius.xs
    },
    tones: {
      inverse: {
        color: x.color.fillInverseTertiary
      }
    },
    themeStyles: I0
  },
  E8 = {
    themeKeys: {
      color: "progressColor",
      borderRadius: "borderRadius"
    },
    base: {
      borderRadius: x.radius.xs,
      color: x.color.fillNeutral
    },
    tones: {
      inverse: {
        color: x.color.fillInverse
      },
      brand: {
        color: x.color.fillBrand
      }
    },
    themeStyles: I0
  };
U(A8);
U(E8);
var _ref46 = (lp = x) == null ? void 0 : lp.componentConfig,
  _ref46$Radio = _ref46.Radio,
  _ref46$Radio2 = _ref46$Radio === void 0 ? {
    themeStyles: {}
  } : _ref46$Radio,
  SK = _ref46$Radio2.defaultTone,
  A0 = _objectWithoutProperties(_ref46$Radio2, ["defaultTone"]),
  Xr = x.spacer.xxl,
  _r = x.stroke.sm,
  C8 = {
    themeKeys: {
      borderRadius: "strokeRadius",
      color: "backgroundColor",
      colorChecked: "backgroundColorChecked"
    },
    base: {
      color: x.color.fillNeutralSecondary,
      colorChecked: x.color.fillInverse,
      height: Xr + _r * 2,
      width: Xr + _r * 2,
      borderRadius: Xr / 2 + _r,
      border: {
        color: x.color.strokeNeutralSecondary,
        width: _r
      }
    },
    tones: {
      inverse: {
        border: {
          color: x.color.strokeInverseSecondary,
          width: _r
        }
      },
      brand: {
        border: {
          color: x.color.fillBrand,
          width: _r
        }
      }
    },
    themeStyles: A0
  },
  R8 = {
    themeKeys: {
      width: "knobWidth",
      height: "knobHeight",
      borderRadius: "knobRadius",
      color: "knobColor"
    },
    base: {
      color: x.color.fillInverse,
      width: Xr,
      height: Xr,
      borderRadius: Xr / 2
    },
    tones: {
      inverse: {
        color: x.color.fillNeutral
      }
    },
    themeStyles: A0
  };
U(C8);
U(R8);
var _ref47 = (cp = x) == null ? void 0 : cp.componentConfig,
  _ref47$Row = _ref47.Row,
  _ref47$Row2 = _ref47$Row === void 0 ? {
    styles: {}
  } : _ref47$Row,
  O8 = _ref47$Row2.defaultTone,
  _8 = _objectWithoutProperties(_ref47$Row2, ["defaultTone"]),
  P8 = {
    themeKeys: {
      gap: "itemSpacing",
      scrollIndex: "scrollIndex",
      itemTransition: "itemTransition"
    },
    base: {
      display: "flex",
      flexBoundary: "fixed",
      flexDirection: "row",
      gap: x.layout.gutterX,
      itemTransition: _objectSpread(_objectSpread({}, x.animation.standardEntrance), {}, {
        duration: x.animation.duration.fast
      })
    },
    themeStyles: _8
  },
  N8 = U(P8),
  Zs = {
    tone: O8,
    Container: N8
  },
  L8 = function L8(r) {
    var t = Gi("left"),
      e = Gi("right");
    return R(H, Ue(r, {
      get selected() {
        return r.selected || 0;
      },
      get onLeft() {
        return jt(r.onLeft, t);
      },
      get onRight() {
        return jt(r.onRight, e);
      },
      forwardFocus: b0,
      get onLayout() {
        return jt(function (n) {
          return Ki(r.x).call(n, n, n.children[n.selected], n.selected, void 0);
        }, r.onLayout);
      },
      get onSelectedChanged() {
        return jt(r.onSelectedChanged, r.scroll !== "none" ? Ki(r.x) : void 0);
      },
      get style() {
        return [r.style, Zs.Container.tones[r.tone || Zs.tone], Zs.Container.base];
      }
    }));
  },
  _ref48 = (up = x) == null ? void 0 : up.componentConfig,
  _ref48$Keyboard = _ref48.Keyboard,
  _ref48$Keyboard2 = _ref48$Keyboard === void 0 ? {
    styles: {}
  } : _ref48$Keyboard,
  wK = _ref48$Keyboard2.defaultTone,
  _u = _objectWithoutProperties(_ref48$Keyboard2, ["defaultTone"]),
  F8 = {
    themeKeys: {
      keySpacing: "keySpacing",
      screenW: "screenW",
      marginX: "marginX"
    },
    base: {
      keySpacing: x.spacer.md,
      screenW: x.layout.screenW,
      marginX: x.layout.marginX,
      height: 100
    },
    themeStyles: _u
  },
  k8 = {
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
      keySpacing: x.spacer.md,
      height: x.spacer.md * 9,
      paddingX: x.spacer.md,
      sizes: {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5
      },
      contentColor: x.color.fillNeutral,
      padding: [x.spacer.xxxl, x.spacer.xl],
      baseWidth: x.spacer.md * 7,
      color: x.color.interactiveNeutral,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: x.radius.sm
    },
    modes: {
      focus: {
        color: x.color.interactiveNeutralFocus,
        contentColor: x.color.fillInverse
      },
      disabled: {
        color: x.color.fillNeutralDisabled,
        contentColor: x.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: x.color.interactiveInverse,
        focus: {
          color: x.color.interactiveInverseFocus,
          contentColor: x.color.fillNeutral
        }
      },
      brand: {
        focus: {
          contentColor: x.color.fillNeutral
        }
      }
    },
    themeStyles: _u
  },
  B8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: x.color.textNeutral
    }, x.typography.headline2),
    modes: {
      focus: {
        color: x.color.textInverse
      },
      disabled: {
        color: x.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        focus: {
          color: x.color.textNeutral
        }
      }
    },
    themeStyles: _u
  };
U(F8);
U(k8);
U(B8);
var _ref49 = (fp = x) == null ? void 0 : fp.componentConfig,
  _ref49$Key = _ref49.Key,
  _ref49$Key2 = _ref49$Key === void 0 ? {
    styles: {}
  } : _ref49$Key,
  TK = _ref49$Key2.defaultTone,
  E0 = _objectWithoutProperties(_ref49$Key2, ["defaultTone"]),
  M8 = {
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
      keySpacing: x.spacer.md,
      height: x.spacer.md * 9,
      paddingX: x.spacer.md,
      contentColor: x.color.fillNeutral,
      sizes: {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5
      },
      padding: [x.spacer.md],
      baseWidth: x.spacer.md * 7,
      color: x.color.interactiveNeutral,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: x.radius.sm
    },
    modes: {
      focus: {
        color: x.color.interactiveNeutralFocus,
        contentColor: x.color.fillInverse
      },
      disabled: {
        color: x.color.fillNeutralDisabled,
        contentColor: x.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: x.color.interactiveInverse,
        focus: {
          color: x.color.interactiveInverseFocus,
          contentColor: x.color.fillNeutral
        }
      },
      brand: {
        focus: {
          contentColor: x.color.fillNeutral
        }
      }
    },
    themeStyles: E0
  },
  D8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: x.color.textNeutral
    }, x.typography.headline2),
    modes: {
      focus: {
        color: x.color.textInverse
      },
      disabled: {
        color: x.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        focus: {
          color: x.color.textNeutral
        }
      }
    },
    themeStyles: E0
  };
U(M8);
U(D8);
var _ref50 = (dp = x) == null ? void 0 : dp.componentConfig,
  _ref50$Input = _ref50.Input,
  _ref50$Input2 = _ref50$Input === void 0 ? {
    styles: {}
  } : _ref50$Input,
  IK = _ref50$Input2.defaultTone,
  Pu = _objectWithoutProperties(_ref50$Input2, ["defaultTone"]),
  j8 = {
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
    themeStyles: Pu
  },
  U8 = {
    themeKeys: {
      borderRadius: "borderRadius",
      color: "backgroundColor"
    },
    base: {
      width: VH(4),
      height: 100,
      display: "flex",
      flexDirection: "column",
      padding: [x.spacer.xxxl, x.spacer.xl],
      color: x.color.interactiveNeutral,
      contentColor: x.color.fillInverse,
      borderRadius: x.radius.sm,
      marginX: x.spacer.xxxl
    },
    modes: {
      focus: {
        color: x.color.interactiveNeutralFocus
      },
      disabled: {
        color: x.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: x.color.interactiveInverse
      },
      brand: {
        color: x.color.interactiveBrand,
        focus: {
          color: x.color.fillNeutral
        }
      }
    },
    themeStyles: Pu
  },
  z8 = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: x.color.textNeutral
    }, x.typography.button1),
    themeStyles: Pu
  };
U(j8);
U(U8);
U(z8);
var _ref51 = (hp = x) == null ? void 0 : hp.componentConfig,
  _ref51$Tile = _ref51.Tile,
  _ref51$Tile2 = _ref51$Tile === void 0 ? {
    styles: {}
  } : _ref51$Tile,
  AK = _ref51$Tile2.defaultTone,
  Na = _objectWithoutProperties(_ref51$Tile2, ["defaultTone"]),
  _ref52 = (vp = x) == null ? void 0 : vp.componentConfig,
  _ref52$Surface = _ref52.Surface,
  _ref52$Surface2 = _ref52$Surface === void 0 ? {
    styles: {}
  } : _ref52$Surface,
  EK = _ref52$Surface2.defaultSurfaceTone,
  W8 = _objectWithoutProperties(_ref52$Surface2, ["defaultSurfaceTone"]),
  H8 = {
    themeKeys: {
      alpha: "alpha",
      paddingYProgress: "paddingYProgress",
      borderRadius: "radius"
    },
    base: {
      width: 400,
      height: 240,
      padding: [40, 10],
      paddingYProgress: x.spacer.xl,
      paddingYBetweenContent: x.spacer.md,
      borderRadius: x.radius.md,
      alpha: x.alpha.primary
    },
    modes: {
      disabled: {
        alpha: x.alpha.inactive
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, W8), Na)
  },
  Y8 = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      flexBoundary: "contain",
      mountY: 1
    },
    themeStyles: Na
  },
  K8 = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart"
    },
    themeStyles: Na
  },
  G8 = {
    themeKeys: {},
    base: {
      width: x.spacer.lg * 5,
      height: x.spacer.xxl + x.spacer.md
    },
    themeStyles: Na
  };
U(H8);
U(Y8);
U(K8);
U(G8);
var V8 = {
    color: 255,
    height: 150,
    width: 330,
    x: 1910,
    y: 10,
    mountX: 1,
    alpha: .8,
    zIndex: 100
  },
  st = {
    x: 10,
    fontSize: 22,
    textColor: ge("#f6f6f6")
  },
  fi = {
    fontSize: 22,
    textColor: ge("#f6f6f6")
  },
  _X27 = X(0),
  _X28 = _slicedToArray(_X27, 2),
  X8 = _X28[0],
  Q8 = _X28[1],
  _X29 = X(0),
  _X30 = _slicedToArray(_X29, 2),
  q8 = _X30[0],
  J8 = _X30[1],
  _X31 = X(99),
  _X32 = _slicedToArray(_X31, 2),
  Z8 = _X32[0],
  eY = _X32[1],
  _X33 = X(0),
  _X34 = _slicedToArray(_X33, 2),
  tY = _X34[0],
  rY = _X34[1],
  _X35 = X(0),
  _X36 = _slicedToArray(_X35, 2),
  nY = _X36[0],
  oY = _X36[1],
  _X37 = X(0),
  _X38 = _slicedToArray(_X37, 2),
  iY = _X38[0],
  aY = _X38[1],
  _X39 = X(0),
  _X40 = _slicedToArray(_X39, 2),
  sY = _X40[0],
  lY = _X40[1];
var pp = 0,
  gp = 0;
var cY = function cY(r) {
    r && (Q8(r), eY(function (t) {
      return Math.min(r, t);
    }), rY(function (t) {
      return Math.max(r, t);
    }), gp += r, pp++, J8(Math.round(gp / pp)));
  },
  uY = function uY(r) {
    var t = 0,
      e = 0,
      n = 0;
    r.txManager.textureIdCache.forEach(function (o, i, a) {
      o.state === "loaded" && t++, o.state === "loading" && e++, o.state === "failed" && n++;
    }), oY(t), aY(e), lY(n);
  };
function fY(r) {
  r.renderer.on("fpsUpdate", function (t, e) {
    var n = typeof e == "number" ? e : e.fps;
    n > 5 && (cY(n), uY(t.root.stage));
  });
}
var dY = function dY(r) {
    return R(H, Ue(r, {
      style: V8,
      get children() {
        return [R(H, {
          get children() {
            return [R(oe, {
              style: st,
              children: "FPS:"
            }), R(oe, {
              style: fi,
              x: 90,
              get children() {
                return X8();
              }
            })];
          }
        }), R(H, {
          x: 160,
          get children() {
            return [R(oe, {
              style: st,
              children: "AVG:"
            }), R(oe, {
              style: fi,
              x: 100,
              get children() {
                return q8();
              }
            })];
          }
        }), R(H, {
          x: 0,
          y: 20,
          get children() {
            return [R(oe, {
              style: st,
              children: "MIN:"
            }), R(oe, {
              style: fi,
              x: 90,
              get children() {
                return Z8();
              }
            })];
          }
        }), R(H, {
          x: 160,
          y: 20,
          get children() {
            return [R(oe, {
              style: st,
              children: "MAX:"
            }), R(oe, {
              style: fi,
              x: 100,
              get children() {
                return tY();
              }
            })];
          }
        }), R(H, {
          x: 0,
          y: 50,
          get children() {
            return [R(oe, {
              style: st,
              children: "Loaded Textures Cnt:"
            }), R(oe, {
              style: st,
              x: 270,
              get children() {
                return nY();
              }
            })];
          }
        }), R(H, {
          x: 0,
          y: 80,
          get children() {
            return [R(oe, {
              style: st,
              children: "Loading Textures Cnt:"
            }), R(oe, {
              style: st,
              x: 270,
              get children() {
                return iY();
              }
            })];
          }
        }), R(H, {
          x: 0,
          y: 110,
          get children() {
            return [R(oe, {
              style: st,
              children: "Failed Textures Cnt:"
            }), R(oe, {
              style: st,
              x: 270,
              get children() {
                return sY();
              }
            })];
          }
        })];
      }
    }));
  },
  cc = {
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
        x: x.layout.marginX
      }
    },
    Gradient: {
      zIndex: 99,
      color: ge("#000000"),
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
        color: ge("#424242")
      },
      active: {
        width: 328,
        height: 70
      }
    }
  },
  hY = "./",
  vY = [{
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
function pY(r) {
  var t = UH(hY + "assets/icons_white.png", vY);
  return R(H, Ue(r, {
    get texture() {
      return t[r.name];
    },
    get width() {
      return t[r.name].props.width;
    },
    get height() {
      return t[r.name].props.height;
    },
    get x() {
      return (100 - (t[r.name].props.width || 0)) / 2;
    },
    get y() {
      return (100 - (t[r.name].props.height || 0)) / 2;
    }
  }));
}
function di(r) {
  return R(H, Ue(r, {
    forwardStates: !0,
    get style() {
      return cc.NavButton;
    },
    get children() {
      return [R(H, {
        y: -16,
        get children() {
          return R(pY, {
            scale: .5,
            get name() {
              return r.icon;
            }
          });
        }
      }), R(oe, {
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
          return r.children;
        }
      })];
    }
  }));
}
function gY(r) {
  var t;
  var e = Iu();
  function n() {
    t.states.add("focus"), this.children.forEach(function (a) {
      return a.states.add("active");
    }), this.children.selected.setFocus();
  }
  function o() {
    t.states.remove("focus"), this.selected = 0, this.children.forEach(function (a) {
      return a.states.remove("active");
    });
  }
  function i(a) {
    if (iH(function () {
      return a;
    })()) return r.focusPage();
    e(a);
  }
  return [R(H, {
    flexItem: !1,
    width: 300,
    height: 150,
    x: 30,
    y: 15,
    zIndex: 105,
    get alpha() {
      return r.showWidgets ? 1 : 0;
    },
    get children() {
      return [R(oe, {
        x: 80,
        fontSize: 28,
        color: 4143380036,
        children: "Built With:"
      }), R(H, {
        y: 22,
        src: "./assets/solidWord.png",
        width: 280,
        height: 52
      }), R(H, {
        x: 0,
        y: 110,
        src: "./assets/tmdb.png",
        width: 80,
        height: 41
      }), R(oe, {
        x: 90,
        y: 110,
        contain: "width",
        width: 160,
        fontSize: 12,
        color: 4143380036,
        children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
      })];
    }
  }), R(S0, Ue(r, {
    onFocus: n,
    onBlur: o,
    get style() {
      return cc.Column;
    },
    scroll: "none",
    get children() {
      return [R(di, {
        onEnter: function onEnter() {
          return i("/browse/all");
        },
        icon: "trending",
        children: "Trending"
      }), R(di, {
        icon: "movie",
        onEnter: function onEnter() {
          return i("/browse/movie");
        },
        children: "Movies"
      }), R(di, {
        icon: "tv",
        onEnter: function onEnter() {
          return i("/browse/tv");
        },
        children: "TV"
      }), R(di, {
        icon: "experiment",
        onEnter: function onEnter() {
          return i("/examples");
        },
        children: "Examples"
      })];
    }
  })), R(H, {
    skipFocus: !0,
    ref: function ref(a) {
      var s = t;
      typeof s == "function" ? s(a) : t = a;
    },
    get style() {
      return cc.Gradient;
    }
  })];
}
var mY = function mY(r) {
    _H({
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
    var t = jH();
    t.enabled = !1;
    var e = Iu();
    var n, o;
    fY({
      renderer: bt
    });
    function i() {
      return n.states.has("focus") ? !1 : (o = gc(), n.setFocus());
    }
    var _X41 = X(!0),
      _X42 = _slicedToArray(_X41, 2),
      a = _X42[0],
      s = _X42[1],
      l = m0(),
      c = ["/browse", "/entity"];
    return cr(function () {
      var u = l.pathname;
      var f = c.some(function (v) {
        return u.startsWith(v);
      });
      u === "/" && (f = !0), s(f);
    }), R(H, {
      ref: function ref(u) {
        var f = window.APP;
        typeof f == "function" ? f(u) : window.APP = u;
      },
      onAnnouncer: function onAnnouncer() {
        return t.enabled = !t.enabled;
      },
      onLast: function onLast() {
        return history.back();
      },
      onMenu: function onMenu() {
        return e("/");
      },
      style: {
        width: 1920,
        height: 1080
      },
      onBackspace: i,
      onLeft: i,
      onRight: function onRight() {
        return n.states.has("focus") && o.setFocus();
      },
      get children() {
        return [R(HH, {}), R(dY, {
          mountX: 1,
          x: 1910,
          y: 10,
          get alpha() {
            return a() ? 1 : 0;
          }
        }), bc(function () {
          return r.children;
        }), R(gY, {
          ref: function ref(u) {
            var f = n;
            typeof f == "function" ? f(u) : n = u;
          },
          focusPage: function focusPage() {
            return o.setFocus();
          },
          get showWidgets() {
            return a();
          }
        })];
      }
    });
  },
  Vi = {
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
      width: x.layout.screenW,
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
      textColor: ge("#ffffff")
    },
    FPSValue: {
      x: 90,
      y: 0,
      fontSize: 36,
      textColor: ge("#ffffff")
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
      color: ge("#000000")
    },
    RowTitle: {
      height: 60,
      width: 300,
      marginBottom: -40,
      fontSize: 36,
      color: ge("#f0f0f0"),
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
      width: x.layout.screenW - 2 * x.layout.marginX,
      x: x.layout.marginX + x.layout.gutterX,
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
      color: ge("#0000ff")
    },
    peopleBio: _objectSpread(_objectSpread({}, x.typography.body1), {}, {
      fontFamily: "Ubuntu",
      fontWeight: "normal",
      contain: "both",
      width: 780,
      height: 340
    })
  },
  Xi = {
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
  yY = {
    color: ge("#00A699"),
    height: 8,
    y: 2,
    x: -4,
    width: Xi.width + 8
  },
  xY = {
    fontSize: 12,
    y: 12,
    contain: "width",
    textAlign: "center",
    color: ge("#F6F6F9"),
    height: Xi.height,
    width: Xi.width
  },
  CK = {
    container: Xi,
    topBar: yY,
    text: xY
  },
  mp = {
    width: 386,
    height: 136,
    color: ge("#715cab"),
    focus: {
      color: ge("#5a39a2")
    },
    disabled: {
      color: ge("#291d43")
    }
  },
  RK = {
    fontSize: 32,
    contain: "width",
    textAlign: "center",
    mountY: -.35,
    color: ge("#FFFFFF"),
    height: mp.height,
    width: mp.width,
    focus: {
      fontSize: 40
    },
    disabled: {
      color: ge("#909090")
    }
  };
function bY(r) {
  return R(H, Ue(r, {
    get style() {
      return Vi.Thumbnail;
    }
  }));
}
function $Y(r) {
  var _fx = fx(r, ["items"]),
    _fx2 = _slicedToArray(_fx, 2),
    t = _fx2[0],
    e = _fx2[1];
  return R(L8, Ue(e, {
    get style() {
      return Vi.Row;
    },
    get children() {
      return R(pc, {
        get each() {
          return t.items;
        },
        children: function children(n) {
          return R(bY, n);
        }
      });
    }
  }));
}
var SY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZiMDhiODgwZjc2MzEzMmIyMjExYWNjYjQ5MzZiZSIsIm5iZiI6MTcyNDA1NjEwMC4yMzQ4MzgsInN1YiI6IjY2YzMwMTg1Y2NlNzA0ZWJlYWQzNWY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dedjZUuwhiOFTlvO6FohvFkC-cEmS9QEw97du52t3bk",
  wY = "https://api.themoviedb.org/3";
var C0, R0;
var TY = "w185",
  IY = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + SY
    }
  };
function el(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TY;
  return R0 + t + r;
}
function AY(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return C0 ? uc(r, t) : O0().then(function () {
    return uc(r, t);
  });
}
function uc(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(wY + r, _objectSpread(_objectSpread({}, IY), t)).then(function (e) {
    return e.json();
  });
}
function O0() {
  return uc("/configuration").then(function (r) {
    var t;
    return C0 = r, R0 = (t = r.images) == null ? void 0 : t.secure_base_url, r;
  });
}
var EY = {
  get: AY,
  loadConfig: O0
};
function CY(r, t) {
  return r.length > t ? r.substring(0, t - 3) + "..." : r;
}
function RY(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var e = [];
  for (var n = 0, o = r.length; n < o; n += t) e.push(r.slice(n, n + t));
  return e;
}
function OY() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return r.map(function (t) {
    return {
      src: el(t.poster_path || t.profile_path),
      tileSrc: el(t.backdrop_path || t.profile_path, "w300"),
      backdrop: el(t.backdrop_path, "w1280"),
      href: "/entity/".concat(t.media_type || "people", "/").concat(t.id),
      shortTitle: CY(t.title || t.name, 30),
      title: t.title || t.name,
      data: t,
      entityInfo: {
        type: t.media_type || "people",
        id: t.id
      },
      heroContent: {
        title: t.title || t.name,
        description: t.overview
      }
    };
  });
}
var tl = new Map();
var hi = new Map();
function _Y(r) {
  return function (t) {
    var e = "/trending/".concat(r, "/week?page=").concat(t);
    if (tl.has(e)) return tl.get(e);
    var n = EY.get(e).then(function (o) {
      var i = o.results.filter(function (l) {
          return !l.adult;
        }),
        a = (hi.has(r) ? hi.get(r) : []).concat(OY(i)),
        s = RY(a);
      return s[s.length - 1].length < 7 ? hi.set(r, s.pop()) : hi["delete"](r), s;
    });
    return tl.set(e, n), n;
  };
}
function PY(r) {
  var _X43 = X([]),
    _X44 = _slicedToArray(_X43, 2),
    t = _X44[0],
    e = _X44[1],
    _X45 = X(1),
    _X46 = _slicedToArray(_X45, 2),
    n = _X46[0],
    o = _X46[1],
    _X47 = X(!1),
    _X48 = _slicedToArray(_X47, 2),
    i = _X48[0],
    a = _X48[1],
    _p5 = _p(n, r),
    _p6 = _slicedToArray(_p5, 1),
    s = _p6[0];
  return rl(function () {
    var l = s();
    l && tx(function () {
      l.length === 0 && a(!0), e(function (c) {
        return [].concat(_toConsumableArray(c), _toConsumableArray(l));
      });
    });
  }), {
    pages: t,
    page: n,
    setPage: o,
    setPages: e,
    end: i,
    setEnd: a
  };
}
var La = 900,
  NY = {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "fixed",
    width: La,
    height: 220,
    gap: 16
  },
  LY = _objectSpread(_objectSpread({}, x.typography.display2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    maxLines: 1,
    width: La,
    contain: "width"
  }),
  FY = function FY(r) {
    return R(oe, Ue(r, {
      style: LY
    }));
  },
  kY = _objectSpread(_objectSpread({}, x.typography.body1), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400,
    lineHeight: 32,
    width: La,
    maxLines: 3,
    contain: "width"
  }),
  BY = {
    fontSize: 16,
    lineHeight: 20
  },
  MY = function MY(r) {
    return R(oe, Ue(r, {
      style: kY,
      get children() {
        return r.children;
      }
    }));
  },
  DY = function DY(r) {
    return function () {
      var t = ea("node");
      return Ob(PH, t, function () {
        return [8, 13, 11, 13];
      }), $c(t, Ue(r, {
        style: {
          color: "0x00000099",
          borderRadius: 8,
          border: {
            width: 2,
            color: "0xffffffff"
          }
        }
      }), !0), Cb(t, R(oe, {
        style: BY,
        get children() {
          return r.children;
        }
      })), t;
    }();
  },
  yp = _objectSpread(_objectSpread({}, x.typography.body2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400
  }),
  jY = function jY(r) {
    return R(H, {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 18,
        width: La,
        height: 48
      },
      get children() {
        return [R(H, {
          y: -4,
          src: "./assets/stars.png",
          width: 188,
          height: 31
        }), R(H, {
          y: -4,
          flexItem: !1,
          clipping: !0,
          get width() {
            return 188 * r.voteAverage / 10;
          },
          height: 31,
          get children() {
            return R(H, {
              src: "./assets/stars-full.png",
              width: 188,
              height: 31
            });
          }
        }), R(oe, {
          style: yp,
          get children() {
            return [bc(function () {
              return r.voteCount;
            }), " reviews"];
          }
        }), R(oe, {
          style: yp,
          get children() {
            return r.metaText;
          }
        }), R(pc, {
          get each() {
            return r.badges;
          },
          children: function children(t) {
            return R(DY, {
              y: -5,
              children: t
            });
          }
        })];
      }
    });
  },
  UY = function UY(r) {
    return R(H, Ue({
      id: "contentBlock",
      style: NY
    }, r, {
      get children() {
        return [R(FY, {
          get children() {
            return r.content.title;
          }
        }), R(MY, {
          get children() {
            return r.content.description;
          }
        }), R(Zi, {
          get when() {
            return r.content.voteCount;
          },
          get children() {
            return R(jY, {
              get metaText() {
                return r.content.metaText;
              },
              get badges() {
                return r.content.badges;
              },
              get voteCount() {
                return r.content.voteCount;
              },
              get voteAverage() {
                return r.content.voteAverage;
              }
            });
          }
        })];
      }
    }));
  };
var xp = function xp(r, t) {
  var e;
  var n = function n() {
    return clearTimeout(e);
  };
  return an() && dt(n), Object.assign(function () {
    for (var _len7 = arguments.length, i = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      i[_key7] = arguments[_key7];
    }
    e !== void 0 && n(), e = setTimeout(function () {
      return r.apply(void 0, i);
    }, t);
  }, {
    clear: n
  });
};
var bp = function bp() {
    var r = aH(),
      _X49 = X(0),
      _X50 = _slicedToArray(_X49, 2),
      t = _X50[0],
      e = _X50[1],
      _X51 = X({}),
      _X52 = _slicedToArray(_X51, 2),
      n = _X52[0],
      o = _X52[1],
      i = Iu(),
      a = ex(function () {
        return 0;
      }),
      s = ie(function () {
        return PY(_Y(r.filter || "all"));
      }),
      l = xp(function (v) {
        return WH(v);
      }, 400),
      c = xp(function (v) {
        return o(v || {});
      }, 200);
    cr(on(gc, function (v) {
      v.backdrop && l(v.backdrop), v.heroContent && c(v.heroContent);
    }, {
      defer: !0
    }));
    function u() {
      var p;
      (p = this.children.selected) == null || p.setFocus(), e((this.y || 0) * -1 + 24);
      var v = s().pages().length;
      this.parent.selected = this.parent.children.indexOf(this), (v === 0 || this.parent.selected && this.parent.selected >= v - 2) && s().setPage(function (m) {
        return m + 1;
      });
    }
    function f() {
      var v = this.children.find(function (p) {
        return p.states.has("focus");
      });
      return k(v && v.href), i(v.href), !0;
    }
    return R(Zi, {
      get when() {
        return s().pages().length;
      },
      get children() {
        return [R(UY, {
          y: 360,
          x: 162,
          get content() {
            return n();
          }
        }), R(H, {
          clipping: !0,
          get style() {
            return Vi.itemsContainer;
          },
          get children() {
            return R(S0, {
              id: "BrowseColumn",
              plinko: !0,
              announce: "All Trending - Week",
              get y() {
                return t();
              },
              scroll: "none",
              get style() {
                return Vi.Column;
              },
              get children() {
                return R(pc, {
                  get each() {
                    return s().pages();
                  },
                  children: function children(v, p) {
                    return R($Y, {
                      get autofocus() {
                        return a(p());
                      },
                      items: v,
                      width: 1620,
                      onFocus: u,
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
  zY = function zY() {
    return function () {
      var r = ea("node");
      return Rb(r, "style", {
        width: 1920,
        height: 1080,
        color: 868483072
      }), r;
    }();
  },
  WY = new URL("AppCoreExtensions-CoxKajqS.js", import.meta.url).href,
  HY = Fe(function () {
    return _e(function () {
      return import("./Grid-BqeSAKOi.js");
    }, __vite__mapDeps([0, 1]), import.meta.url);
  }),
  YY = Fe(function () {
    return _e(function () {
      return import("./Portal-ax0u5TsO.js");
    }, __vite__mapDeps([2, 1]), import.meta.url);
  }),
  KY = Fe(function () {
    return _e(function () {
      return import("./Text-BFFgAZ6j.js");
    }, __vite__mapDeps([3, 1]), import.meta.url);
  }),
  GY = Fe(function () {
    return _e(function () {
      return import("./Create-BspVoMkd.js");
    }, __vite__mapDeps([4, 1]), import.meta.url);
  }),
  VY = Fe(function () {
    return _e(function () {
      return import("./Viewport-VtWgzAHS.js");
    }, __vite__mapDeps([5, 1]), import.meta.url);
  }),
  XY = Fe(function () {
    return _e(function () {
      return import("./Buttons-CeupXiir.js");
    }, __vite__mapDeps([6, 1]), import.meta.url);
  }),
  QY = Fe(function () {
    return _e(function () {
      return import("./Flex-o1dtVujL.js");
    }, __vite__mapDeps([7, 1]), import.meta.url);
  }),
  qY = Fe(function () {
    return _e(function () {
      return import("./FlexSize-CDd7SYH5.js");
    }, __vite__mapDeps([8, 1]), import.meta.url);
  }),
  JY = Fe(function () {
    return _e(function () {
      return import("./FlexColumnSize-C-Mme3PK.js");
    }, __vite__mapDeps([9, 1]), import.meta.url);
  }),
  ZY = Fe(function () {
    return _e(function () {
      return import("./FlexColumn-BOf3vjvo.js");
    }, __vite__mapDeps([10, 1]), import.meta.url);
  }),
  eK = Fe(function () {
    return _e(function () {
      return import("./ButtonsMaterial-BK6_33XZ.js");
    }, __vite__mapDeps([11, 1]), import.meta.url);
  }),
  tK = Fe(function () {
    return _e(function () {
      return import("./SuperFlex-CVltOT27.js");
    }, __vite__mapDeps([12, 1]), import.meta.url);
  }),
  rK = Fe(function () {
    return _e(function () {
      return import("./Entity-Btpx2HN5.js");
    }, __vite__mapDeps([13, 1]), import.meta.url);
  }),
  nK = Fe(function () {
    return _e(function () {
      return import("./People-CDm83lx2.js");
    }, __vite__mapDeps([14, 1]), import.meta.url);
  });
Me.debug = !1;
Me.animationsEnabled = !0;
Me.fontSettings.fontFamily = "Ubuntu";
Me.fontSettings.color = ge("#f6f6f6");
Me.fontSettings.fontSize = 32;
Me.rendererOptions = {
  coreExtensionModule: WY,
  fpsUpdateInterval: 200,
  enableInspector: !0,
  deviceLogicalPixelRatio: window.innerHeight / 1080
};
Eb(function () {
  return R(wH, {
    root: function root(r) {
      return R(mY, r);
    },
    get children() {
      return [R(Ie, {
        path: "",
        component: bp
      }), R(Ie, {
        path: "examples",
        component: YY
      }), R(Ie, {
        path: "browse/:filter",
        component: bp
      }), R(Ie, {
        path: "grid",
        component: HY
      }), R(Ie, {
        path: "text",
        component: KY
      }), R(Ie, {
        path: "buttons",
        component: XY
      }), R(Ie, {
        path: "flex",
        component: QY
      }), R(Ie, {
        path: "create",
        component: GY
      }), R(Ie, {
        path: "viewport",
        component: VY
      }), R(Ie, {
        path: "flexsize",
        component: qY
      }), R(Ie, {
        path: "flexcolumnsize",
        component: JY
      }), R(Ie, {
        path: "flexcolumn",
        component: ZY
      }), R(Ie, {
        path: "superflex",
        component: tK
      }), R(Ie, {
        path: "buttonsmaterial",
        component: eK
      }), R(Ie, {
        path: "entity/people/:id",
        component: nK
      }), R(Ie, {
        path: "entity/:type/:id",
        component: rK
      }), R(Ie, {
        path: "*all",
        component: zY
      })];
    }
  });
});
function OK() {
  var r = document.getElementById("video");
  return r.hidden = !1, setTimeout(function () {
    return r.play();
  }, 50), r.focus(), r;
}
function _K() {
  var r = document.getElementById("video");
  return r.hidden = !0, r.pause(), r;
}
export { el as A, aH as B, S0 as C, UY as D, vK as E, pc as F, $Y as G, _K as H, lK as I, OK as J, vx as K, RK as M, L8 as R, Zi as S, oe as T, H as V, iK as __vite_legacy_guard, _p as a, rl as b, X as c, tx as d, ex as e, cr as f, sK as g, ge as h, R as i, Vi as j, bc as k, dc as l, Ue as m, dt as n, on as o, CK as p, ea as q, Ob as r, WH as s, x as t, Iu as u, $c as v, PH as w, Cb as x, EY as y, OY as z };