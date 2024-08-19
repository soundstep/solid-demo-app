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
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
function _wrapAsyncGenerator(e) { return function () { return new AsyncGenerator(e.apply(this, arguments)); }; }
function AsyncGenerator(e) { var r, t; function resume(r, t) { try { var n = e[r](t), o = n.value, u = o instanceof _OverloadYield; Promise.resolve(u ? o.v : o).then(function (t) { if (u) { var i = "return" === r ? "return" : "next"; if (!o.k || t.done) return resume(i, t); t = e[i](t).value; } settle(n.done ? "return" : "normal", t); }, function (e) { resume("throw", e); }); } catch (e) { settle("throw", e); } } function settle(e, n) { switch (e) { case "return": r.resolve({ value: n, done: !0 }); break; case "throw": r.reject(n); break; default: r.resolve({ value: n, done: !1 }); } (r = r.next) ? resume(r.key, r.arg) : t = null; } this._invoke = function (e, n) { return new Promise(function (o, u) { var i = { key: e, arg: n, resolve: o, reject: u, next: null }; t ? t = t.next = i : (r = t = i, resume(e, n)); }); }, "function" != typeof e.return && (this.return = void 0); }
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, AsyncGenerator.prototype.next = function (e) { return this._invoke("next", e); }, AsyncGenerator.prototype.throw = function (e) { return this._invoke("throw", e); }, AsyncGenerator.prototype.return = function (e) { return this._invoke("return", e); };
function _OverloadYield(e, d) { this.v = e, this.k = d; }
var __vite__fileDeps = ["./Grid-CJg2_QNV.js", "./CoreExtension-BwzX6MG-.js", "./Portal-BDxocOcC.js", "./Text-CYwp40R-.js", "./Create-DMzC559o.js", "./Viewport-Bx6lklfd.js", "./Buttons-CGNR6kDc.js", "./Flex-fl5J46G4.js", "./FlexSize-DzHy9Ox0.js", "./FlexColumnSize-DJ2fJEvG.js", "./FlexColumn-E6Uh3rpK.js", "./ButtonsMaterial-BOW2weQt.js", "./SuperFlex-BJTNJH87.js", "./Entity-CwSAWwUU.js", "./People-PoV__Hur.js"],
  __vite__mapDeps = function __vite__mapDeps(i) {
    return i.map(function (i) {
      return __vite__fileDeps[i];
    });
  };
var gi = Object.defineProperty;
var mi = function mi(n, r, e) {
  return r in n ? gi(n, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : n[r] = e;
};
var u = function u(n, r, e) {
  return mi(n, _typeof(r) != "symbol" ? r + "" : r, e), e;
};
import { a as L, i as mo, T as xi, g as Cr, c as ht, E as et, b as Ee, d as yi, e as tn, f as vi, m as St, W as pt, C as wi, h as xo, j as bi, k as Tr, S as Cn, l as yo, B as Si, n as Ai, o as vo, p as Ci, q as Ti, r as _i, s as Ri, t as Tn, u as _n, v as Ii, w as wo, R as ki, x as Bi, y as Ei, z as Ni, A as Li } from "./CoreExtension-BwzX6MG-.js";
function _d() {
  import.meta.url, import("_").catch(function () {
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
  var r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var o = _step.value;
      t(o);
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
              var s = _step3.value;
              s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
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
  function t(o) {
    if (o.ep) return;
    o.ep = !0;
    var i = e(o);
    fetch(o.href, i);
  }
})();
var Fi = "modulepreload",
  Mi = function Mi(n, r) {
    return new URL(n, r).href;
  },
  Rn = {},
  he = function he(r, e, t) {
    var o = Promise.resolve();
    if (e && e.length > 0) {
      var i = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.all(e.map(function (l) {
        if (l = Mi(l, t), l in Rn) return;
        Rn[l] = !0;
        var c = l.endsWith(".css"),
          d = c ? '[rel="stylesheet"]' : "";
        if (!!t) for (var w = i.length - 1; w >= 0; w--) {
          var x = i[w];
          if (x.href === l && (!c || x.rel === "stylesheet")) return;
        } else if (document.querySelector('link[href="'.concat(l, '"]').concat(d))) return;
        var g = document.createElement("link");
        if (g.rel = c ? "stylesheet" : Fi, c || (g.as = "script", g.crossOrigin = ""), g.href = l, a && g.setAttribute("nonce", a), document.head.appendChild(g), c) return new Promise(function (w, x) {
          g.addEventListener("load", w), g.addEventListener("error", function () {
            return x(new Error("Unable to preload CSS for ".concat(l)));
          });
        });
      }));
    }
    return o.then(function () {
      return r();
    }).catch(function (i) {
      var s = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (s.payload = i, window.dispatchEvent(s), !s.defaultPrevented) throw i;
    });
  },
  H = {
    context: void 0,
    registry: void 0
  };
function At(n) {
  H.context = n;
}
var bo = function bo(n, r) {
    return n === r;
  },
  nr = Symbol("solid-proxy"),
  So = Symbol("solid-track"),
  or = {
    equals: bo
  };
var Ao = Eo;
var Ae = 1,
  ir = 2,
  Co = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  _r = {};
var O = null;
var Rr = null,
  zi = null,
  U = null,
  ae = null,
  Ie = null,
  yr = 0;
function He(n, r) {
  var e = U,
    t = O,
    o = n.length === 0,
    i = r === void 0 ? t : r,
    s = o ? Co : {
      owned: null,
      cleanups: null,
      context: i ? i.context : null,
      owner: i
    },
    a = o ? n : function () {
      return n(function () {
        return te(function () {
          return vr(s);
        });
      });
    };
  O = s, U = null;
  try {
    return Be(a, !0);
  } finally {
    U = e, O = t;
  }
}
function Y(n, r) {
  r = r ? Object.assign({}, or, r) : or;
  var e = {
      value: n,
      observers: null,
      observerSlots: null,
      comparator: r.equals || void 0
    },
    t = function t(o) {
      return typeof o == "function" && (o = o(e.value)), Bo(e, o);
    };
  return [ko.bind(e), t];
}
function Pr(n, r, e) {
  var t = Nt(n, r, !0, Ae);
  tt(t);
}
function Re(n, r, e) {
  var t = Nt(n, r, !1, Ae);
  tt(t);
}
function Je(n, r, e) {
  Ao = Hi;
  var t = Nt(n, r, !1, Ae);
  (!e || !e.render) && (t.user = !0), Ie ? Ie.push(t) : tt(t);
}
function X(n, r, e) {
  e = e ? Object.assign({}, or, e) : or;
  var t = Nt(n, r, !0, 0);
  return t.observers = null, t.observerSlots = null, t.comparator = e.equals || void 0, tt(t), ko.bind(t);
}
function Pi(n) {
  return n && _typeof(n) == "object" && "then" in n;
}
function To(n, r, e) {
  var t, o, i;
  arguments.length === 2 && _typeof(r) == "object" || arguments.length === 1 ? (t = !0, o = n, i = r || {}) : (t = n, o = r, i = e || {});
  var s = null,
    a = _r,
    l = null,
    c = !1,
    d = "initialValue" in i,
    f = typeof t == "function" && X(t);
  var g = new Set(),
    _ref2 = (i.storage || Y)(i.initialValue),
    _ref3 = _slicedToArray(_ref2, 2),
    w = _ref3[0],
    x = _ref3[1],
    _Y = Y(void 0),
    _Y2 = _slicedToArray(_Y, 2),
    y = _Y2[0],
    b = _Y2[1],
    _Y3 = Y(void 0, {
      equals: !1
    }),
    _Y4 = _slicedToArray(_Y3, 2),
    C = _Y4[0],
    v = _Y4[1],
    _Y5 = Y(d ? "ready" : "unresolved"),
    _Y6 = _slicedToArray(_Y5, 2),
    m = _Y6[0],
    p = _Y6[1];
  if (H.context) {
    l = "".concat(H.context.id).concat(H.context.count++);
    var A;
    i.ssrLoadFrom === "initial" ? a = i.initialValue : H.load && (A = H.load(l)) && (a = A);
  }
  function S(A, E, N, B) {
    return s === A && (s = null, B !== void 0 && (d = !0), (A === a || E === a) && i.onHydrated && queueMicrotask(function () {
      return i.onHydrated(B, {
        value: E
      });
    }), a = _r, I(E, N)), E;
  }
  function I(A, E) {
    Be(function () {
      E === void 0 && x(function () {
        return A;
      }), p(E !== void 0 ? "errored" : d ? "ready" : "unresolved"), b(E);
      var _iterator4 = _createForOfIteratorHelper(g.keys()),
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
      g.clear();
    }, !1);
  }
  function T() {
    var A = Ui,
      E = w(),
      N = y();
    if (N !== void 0 && !s) throw N;
    return U && !U.user && A && Pr(function () {
      C(), s && (A.resolved || g.has(A) || (A.increment(), g.add(A)));
    }), E;
  }
  function _() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
    if (A !== !1 && c) return;
    c = !1;
    var E = f ? f() : t;
    if (E == null || E === !1) {
      S(s, te(w));
      return;
    }
    var N = a !== _r ? a : te(function () {
      return o(E, {
        value: w(),
        refetching: A
      });
    });
    return Pi(N) ? (s = N, "value" in N ? (N.status === "success" ? S(s, N.value, void 0, E) : S(s, void 0, void 0, E), N) : (c = !0, queueMicrotask(function () {
      return c = !1;
    }), Be(function () {
      p(d ? "refreshing" : "pending"), v();
    }, !1), N.then(function (B) {
      return S(N, B, void 0, E);
    }, function (B) {
      return S(N, void 0, Lo(B), E);
    }))) : (S(s, N, void 0, E), N);
  }
  return Object.defineProperties(T, {
    state: {
      get: function get() {
        return m();
      }
    },
    error: {
      get: function get() {
        return y();
      }
    },
    loading: {
      get: function get() {
        var A = m();
        return A === "pending" || A === "refreshing";
      }
    },
    latest: {
      get: function get() {
        if (!d) return T();
        var A = y();
        if (A && !s) throw A;
        return w();
      }
    }
  }), f ? Pr(function () {
    return _(!1);
  }) : _(!1), [T, {
    refetch: _,
    mutate: x
  }];
}
function Di(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bo;
  var e = arguments.length > 2 ? arguments[2] : undefined;
  var t = new Map(),
    o = Nt(function (i) {
      var s = n();
      var _iterator5 = _createForOfIteratorHelper(t.entries()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
            a = _step5$value[0],
            l = _step5$value[1];
          if (r(a, s) !== r(a, i)) {
            var _iterator6 = _createForOfIteratorHelper(l.values()),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var c = _step6.value;
                c.state = Ae, c.pure ? ae.push(c) : Ie.push(c);
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
      return s;
    }, void 0, !0, Ae);
  return tt(o), function (i) {
    var s = U;
    if (s) {
      var a;
      (a = t.get(i)) ? a.add(s) : t.set(i, a = new Set([s])), ke(function () {
        a.delete(s), !a.size && t.delete(i);
      });
    }
    return r(i, o.value);
  };
}
function Oi(n) {
  return Be(n, !1);
}
function te(n) {
  if (U === null) return n();
  var r = U;
  U = null;
  try {
    return n();
  } finally {
    U = r;
  }
}
function gt(n, r, e) {
  var t = Array.isArray(n);
  var o,
    i = e && e.defer;
  return function (s) {
    var a;
    if (t) {
      a = Array(n.length);
      for (var c = 0; c < n.length; c++) a[c] = n[c]();
    } else a = n();
    if (i) return i = !1, s;
    var l = te(function () {
      return r(a, o, s);
    });
    return o = a, l;
  };
}
function Id(n) {
  Je(function () {
    return te(n);
  });
}
function ke(n) {
  return O === null || (O.cleanups === null ? O.cleanups = [n] : O.cleanups.push(n)), n;
}
function mt() {
  return O;
}
function _o(n, r) {
  var e = O,
    t = U;
  O = n, U = null;
  try {
    return Be(r, !0);
  } catch (o) {
    nn(o);
  } finally {
    O = e, U = t;
  }
}
function Wi(n) {
  var r = U,
    e = O;
  return Promise.resolve().then(function () {
    U = r, O = e;
    var t;
    return Be(n, !1), U = O = null, t ? t.done : void 0;
  });
}
function Ro(n, r) {
  var e = Symbol("context");
  return {
    id: e,
    Provider: Qi(e),
    defaultValue: n
  };
}
function Io(n) {
  return O && O.context && O.context[n.id] !== void 0 ? O.context[n.id] : n.defaultValue;
}
function rn(n) {
  var r = X(n),
    e = X(function () {
      return Dr(r());
    });
  return e.toArray = function () {
    var t = e();
    return Array.isArray(t) ? t : t != null ? [t] : [];
  }, e;
}
var Ui;
function ko() {
  var _this = this;
  if (this.sources && this.state) if (this.state === Ae) tt(this);else {
    var n = ae;
    ae = null, Be(function () {
      return ar(_this);
    }, !1), ae = n;
  }
  if (U) {
    var _n2 = this.observers ? this.observers.length : 0;
    U.sources ? (U.sources.push(this), U.sourceSlots.push(_n2)) : (U.sources = [this], U.sourceSlots = [_n2]), this.observers ? (this.observers.push(U), this.observerSlots.push(U.sources.length - 1)) : (this.observers = [U], this.observerSlots = [U.sources.length - 1]);
  }
  return this.value;
}
function Bo(n, r, e) {
  var t = n.value;
  return (!n.comparator || !n.comparator(t, r)) && (n.value = r, n.observers && n.observers.length && Be(function () {
    for (var o = 0; o < n.observers.length; o += 1) {
      var i = n.observers[o],
        s = Rr && Rr.running;
      s && Rr.disposed.has(i), (s ? !i.tState : !i.state) && (i.pure ? ae.push(i) : Ie.push(i), i.observers && No(i)), s || (i.state = Ae);
    }
    if (ae.length > 1e6) throw ae = [], new Error();
  }, !1)), r;
}
function tt(n) {
  if (!n.fn) return;
  vr(n);
  var r = yr;
  Yi(n, n.value, r);
}
function Yi(n, r, e) {
  var t;
  var o = O,
    i = U;
  U = O = n;
  try {
    t = n.fn(r);
  } catch (s) {
    return n.pure && (n.state = Ae, n.owned && n.owned.forEach(vr), n.owned = null), n.updatedAt = e + 1, nn(s);
  } finally {
    U = i, O = o;
  }
  (!n.updatedAt || n.updatedAt <= e) && (n.updatedAt != null && "observers" in n ? Bo(n, t) : n.value = t, n.updatedAt = e);
}
function Nt(n, r, e) {
  var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ae;
  var o = arguments.length > 4 ? arguments[4] : undefined;
  var i = {
    fn: n,
    state: t,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: r,
    owner: O,
    context: O ? O.context : null,
    pure: e
  };
  return O === null || O !== Co && (O.owned ? O.owned.push(i) : O.owned = [i]), i;
}
function sr(n) {
  if (n.state === 0) return;
  if (n.state === ir) return ar(n);
  if (n.suspense && te(n.suspense.inFallback)) return n.suspense.effects.push(n);
  var r = [n];
  for (; (n = n.owner) && (!n.updatedAt || n.updatedAt < yr);) n.state && r.push(n);
  for (var _e2 = r.length - 1; _e2 >= 0; _e2--) if (n = r[_e2], n.state === Ae) tt(n);else if (n.state === ir) {
    var t = ae;
    ae = null, Be(function () {
      return ar(n, r[0]);
    }, !1), ae = t;
  }
}
function Be(n, r) {
  if (ae) return n();
  var e = !1;
  r || (ae = []), Ie ? e = !0 : Ie = [], yr++;
  try {
    var t = n();
    return $i(e), t;
  } catch (t) {
    e || (Ie = null), ae = null, nn(t);
  }
}
function $i(n) {
  if (ae && (Eo(ae), ae = null), n) return;
  var r = Ie;
  Ie = null, r.length && Be(function () {
    return Ao(r);
  }, !1);
}
function Eo(n) {
  for (var r = 0; r < n.length; r++) sr(n[r]);
}
function Hi(n) {
  var r,
    e = 0;
  for (r = 0; r < n.length; r++) {
    var t = n[r];
    t.user ? n[e++] = t : sr(t);
  }
  if (H.context) {
    if (H.count) {
      var _H$effects;
      H.effects || (H.effects = []), (_H$effects = H.effects).push.apply(_H$effects, _toConsumableArray(n.slice(0, e)));
      return;
    } else H.effects && (n = [].concat(_toConsumableArray(H.effects), _toConsumableArray(n)), e += H.effects.length, delete H.effects);
    At();
  }
  for (r = 0; r < e; r++) sr(n[r]);
}
function ar(n, r) {
  n.state = 0;
  for (var _e3 = 0; _e3 < n.sources.length; _e3 += 1) {
    var t = n.sources[_e3];
    if (t.sources) {
      var o = t.state;
      o === Ae ? t !== r && (!t.updatedAt || t.updatedAt < yr) && sr(t) : o === ir && ar(t, r);
    }
  }
}
function No(n) {
  for (var r = 0; r < n.observers.length; r += 1) {
    var _e4 = n.observers[r];
    _e4.state || (_e4.state = ir, _e4.pure ? ae.push(_e4) : Ie.push(_e4), _e4.observers && No(_e4));
  }
}
function vr(n) {
  var r;
  if (n.sources) for (; n.sources.length;) {
    var _e5 = n.sources.pop(),
      t = n.sourceSlots.pop(),
      o = _e5.observers;
    if (o && o.length) {
      var i = o.pop(),
        s = _e5.observerSlots.pop();
      t < o.length && (i.sourceSlots[s] = t, o[t] = i, _e5.observerSlots[t] = s);
    }
  }
  if (n.owned) {
    for (r = n.owned.length - 1; r >= 0; r--) vr(n.owned[r]);
    n.owned = null;
  }
  if (n.cleanups) {
    for (r = n.cleanups.length - 1; r >= 0; r--) n.cleanups[r]();
    n.cleanups = null;
  }
  n.state = 0;
}
function Lo(n) {
  return n instanceof Error ? n : new Error(typeof n == "string" ? n : "Unknown error", {
    cause: n
  });
}
function nn(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : O;
  throw Lo(n);
}
function Dr(n) {
  if (typeof n == "function" && !n.length) return Dr(n());
  if (Array.isArray(n)) {
    var r = [];
    for (var _e6 = 0; _e6 < n.length; _e6++) {
      var t = Dr(n[_e6]);
      Array.isArray(t) ? r.push.apply(r, t) : r.push(t);
    }
    return r;
  }
  return n;
}
function Qi(n, r) {
  return function (t) {
    var o;
    return Re(function () {
      return o = te(function () {
        return O.context = _objectSpread(_objectSpread({}, O.context), {}, _defineProperty({}, n, t.value)), rn(function () {
          return t.children;
        });
      });
    }, void 0), o;
  };
}
var Or = Symbol("fallback");
function lr(n) {
  for (var r = 0; r < n.length; r++) n[r]();
}
function Xi(n, r) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var t = [],
    o = [],
    i = [],
    s = 0,
    a = r.length > 1 ? [] : null;
  return ke(function () {
    return lr(i);
  }), function () {
    var l = n() || [],
      c,
      d;
    return l[So], te(function () {
      var g = l.length,
        w,
        x,
        y,
        b,
        C,
        v,
        m,
        p,
        S;
      if (g === 0) s !== 0 && (lr(i), i = [], t = [], o = [], s = 0, a && (a = [])), e.fallback && (t = [Or], o[0] = He(function (I) {
        return i[0] = I, e.fallback();
      }), s = 1);else if (s === 0) {
        for (o = new Array(g), d = 0; d < g; d++) t[d] = l[d], o[d] = He(f);
        s = g;
      } else {
        for (y = new Array(g), b = new Array(g), a && (C = new Array(g)), v = 0, m = Math.min(s, g); v < m && t[v] === l[v]; v++);
        for (m = s - 1, p = g - 1; m >= v && p >= v && t[m] === l[p]; m--, p--) y[p] = o[m], b[p] = i[m], a && (C[p] = a[m]);
        for (w = new Map(), x = new Array(p + 1), d = p; d >= v; d--) S = l[d], c = w.get(S), x[d] = c === void 0 ? -1 : c, w.set(S, d);
        for (c = v; c <= m; c++) S = t[c], d = w.get(S), d !== void 0 && d !== -1 ? (y[d] = o[c], b[d] = i[c], a && (C[d] = a[c]), d = x[d], w.set(S, d)) : i[c]();
        for (d = v; d < g; d++) d in y ? (o[d] = y[d], i[d] = b[d], a && (a[d] = C[d], a[d](d))) : o[d] = He(f);
        o = o.slice(0, s = g), t = l.slice(0);
      }
      return o;
    });
    function f(g) {
      if (i[d] = g, a) {
        var _Y7 = Y(d),
          _Y8 = _slicedToArray(_Y7, 2),
          w = _Y8[0],
          x = _Y8[1];
        return a[d] = x, r(l[d], w);
      }
      return r(l[d]);
    }
  };
}
function Ki(n, r) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var t = [],
    o = [],
    i = [],
    s = [],
    a = 0,
    l;
  return ke(function () {
    return lr(i);
  }), function () {
    var c = n() || [];
    return c[So], te(function () {
      if (c.length === 0) return a !== 0 && (lr(i), i = [], t = [], o = [], a = 0, s = []), e.fallback && (t = [Or], o[0] = He(function (f) {
        return i[0] = f, e.fallback();
      }), a = 1), o;
      for (t[0] === Or && (i[0](), i = [], t = [], o = [], a = 0), l = 0; l < c.length; l++) l < t.length && t[l] !== c[l] ? s[l](function () {
        return c[l];
      }) : l >= t.length && (o[l] = He(d));
      for (; l < t.length; l++) i[l]();
      return a = s.length = i.length = c.length, t = c.slice(0), o = o.slice(0, a);
    });
    function d(f) {
      i[l] = f;
      var _Y9 = Y(c[l]),
        _Y10 = _slicedToArray(_Y9, 2),
        g = _Y10[0],
        w = _Y10[1];
      return s[l] = w, r(g, l);
    }
  };
}
function Fo(n, r) {
  return te(function () {
    return n(r || {});
  });
}
function zt() {
  return !0;
}
var Wr = {
  get: function get(n, r, e) {
    return r === nr ? e : n.get(r);
  },
  has: function has(n, r) {
    return r === nr ? !0 : n.has(r);
  },
  set: zt,
  deleteProperty: zt,
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(n, r) {
    return {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return n.get(r);
      },
      set: zt,
      deleteProperty: zt
    };
  },
  ownKeys: function ownKeys(n) {
    return n.keys();
  }
};
function Ir(n) {
  return (n = typeof n == "function" ? n() : n) ? n : {};
}
function ji() {
  for (var n = 0, r = this.length; n < r; ++n) {
    var _e7 = this[n]();
    if (_e7 !== void 0) return _e7;
  }
}
function on() {
  for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
    n[_key] = arguments[_key];
  }
  var r = !1;
  for (var s = 0; s < n.length; s++) {
    var a = n[s];
    r = r || !!a && nr in a, n[s] = typeof a == "function" ? (r = !0, X(a)) : a;
  }
  if (r) return new Proxy({
    get: function get(s) {
      for (var _a2 = n.length - 1; _a2 >= 0; _a2--) {
        var l = Ir(n[_a2])[s];
        if (l !== void 0) return l;
      }
    },
    has: function has(s) {
      for (var _a3 = n.length - 1; _a3 >= 0; _a3--) if (s in Ir(n[_a3])) return !0;
      return !1;
    },
    keys: function keys() {
      var s = [];
      for (var _a4 = 0; _a4 < n.length; _a4++) s.push.apply(s, _toConsumableArray(Object.keys(Ir(n[_a4]))));
      return _toConsumableArray(new Set(s));
    }
  }, Wr);
  var e = {},
    t = Object.create(null);
  for (var _s2 = n.length - 1; _s2 >= 0; _s2--) {
    var _a5 = n[_s2];
    if (!_a5) continue;
    var l = Object.getOwnPropertyNames(_a5);
    var _loop = function _loop() {
      var d = l[c];
      if (d === "__proto__" || d === "constructor") return 1; // continue
      var f = Object.getOwnPropertyDescriptor(_a5, d);
      if (!t[d]) t[d] = f.get ? {
        enumerable: !0,
        configurable: !0,
        get: ji.bind(e[d] = [f.get.bind(_a5)])
      } : f.value !== void 0 ? f : void 0;else {
        var g = e[d];
        g && (f.get ? g.push(f.get.bind(_a5)) : f.value !== void 0 && g.push(function () {
          return f.value;
        }));
      }
    };
    for (var c = l.length - 1; c >= 0; c--) {
      if (_loop()) continue;
    }
  }
  var o = {},
    i = Object.keys(t);
  for (var _s3 = i.length - 1; _s3 >= 0; _s3--) {
    var _a6 = i[_s3],
      _l2 = t[_a6];
    _l2 && _l2.get ? Object.defineProperty(o, _a6, _l2) : o[_a6] = _l2 ? _l2.value : void 0;
  }
  return o;
}
function Vi(n) {
  for (var _len2 = arguments.length, r = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    r[_key2 - 1] = arguments[_key2];
  }
  if (nr in n) {
    var o = new Set(r.length > 1 ? r.flat() : r[0]),
      i = r.map(function (s) {
        return new Proxy({
          get: function get(a) {
            return s.includes(a) ? n[a] : void 0;
          },
          has: function has(a) {
            return s.includes(a) && a in n;
          },
          keys: function keys() {
            return s.filter(function (a) {
              return a in n;
            });
          }
        }, Wr);
      });
    return i.push(new Proxy({
      get: function get(s) {
        return o.has(s) ? void 0 : n[s];
      },
      has: function has(s) {
        return o.has(s) ? !1 : s in n;
      },
      keys: function keys() {
        return Object.keys(n).filter(function (s) {
          return !o.has(s);
        });
      }
    }, Wr)), i;
  }
  var e = {},
    t = r.map(function () {
      return {};
    });
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(n)),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _o2 = _step7.value;
      var _i2 = Object.getOwnPropertyDescriptor(n, _o2),
        s = !_i2.get && !_i2.set && _i2.enumerable && _i2.writable && _i2.configurable;
      var a = !1,
        l = 0;
      var _iterator8 = _createForOfIteratorHelper(r),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var c = _step8.value;
          c.includes(_o2) && (a = !0, s ? t[l][_o2] = _i2.value : Object.defineProperty(t[l], _o2, _i2)), ++l;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      a || (s ? e[_o2] = _i2.value : Object.defineProperty(e, _o2, _i2));
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return [].concat(_toConsumableArray(t), [e]);
}
function fe(n) {
  var r, e;
  var t = function t(o) {
    var i = H.context;
    if (i) {
      var _Y11 = Y(),
        _Y12 = _slicedToArray(_Y11, 2),
        a = _Y12[0],
        l = _Y12[1];
      H.count || (H.count = 0), H.count++, (e || (e = n())).then(function (c) {
        At(i), H.count--, l(function () {
          return c.default;
        }), At();
      }), r = a;
    } else if (!r) {
      var _To = To(function () {
          return (e || (e = n())).then(function (l) {
            return l.default;
          });
        }),
        _To2 = _slicedToArray(_To, 1),
        _a7 = _To2[0];
      r = _a7;
    }
    var s;
    return X(function () {
      return (s = r()) && te(function () {
        if (!i) return s(o);
        var a = H.context;
        At(i);
        var l = s(o);
        return At(a), l;
      });
    });
  };
  return t.preload = function () {
    return e || ((e = n()).then(function (o) {
      return r = function r() {
        return o.default;
      };
    }), e);
  }, t;
}
var Gi = function Gi(n) {
  return "Stale read from <".concat(n, ">.");
};
function sn(n) {
  var r = "fallback" in n && {
    fallback: function fallback() {
      return n.fallback;
    }
  };
  return X(Xi(function () {
    return n.each;
  }, n.children, r || void 0));
}
function kd(n) {
  var r = "fallback" in n && {
    fallback: function fallback() {
      return n.fallback;
    }
  };
  return X(Ki(function () {
    return n.each;
  }, n.children, r || void 0));
}
function wr(n) {
  var r = n.keyed,
    e = X(function () {
      return n.when;
    }, void 0, {
      equals: function equals(t, o) {
        return r ? t === o : !t == !o;
      }
    });
  return X(function () {
    var t = e();
    if (t) {
      var o = n.children;
      return typeof o == "function" && o.length > 0 ? te(function () {
        return o(r ? t : function () {
          if (!te(e)) throw Gi("Show");
          return n.when;
        });
      }) : o;
    }
    return n.fallback;
  }, void 0, void 0);
}
var qi = void 0,
  _Y13 = Y(void 0),
  _Y14 = _slicedToArray(_Y13, 2),
  an = _Y14[0],
  Zi = _Y14[1];
var Mo = /*#__PURE__*/_createClass(function Mo(r) {
  _classCallCheck(this, Mo);
  u(this, "releaseCallback");
  this.releaseCallback = r;
});
var Ji = /*#__PURE__*/function (_Mo) {
  function Ji(e, t) {
    var _this2;
    _classCallCheck(this, Ji);
    var o, i;
    _this2 = _callSuper(this, Ji, [e]);
    u(_this2, "textureMap", new Map());
    u(_this2, "zeroReferenceTextureSet", new Set());
    u(_this2, "options");
    _this2.options = {
      textureCleanupIntervalMs: (o = t.textureCleanupIntervalMs) != null ? o : 1e4,
      textureCleanupAgeThreadholdMs: (i = t.textureCleanupAgeThreadholdMs) != null ? i : 6e4
    }, setInterval(function () {
      var s = Date.now(),
        a = _this2.options.textureCleanupAgeThreadholdMs;
      var _iterator9 = _createForOfIteratorHelper(_this2.zeroReferenceTextureSet),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var l = _step9.value;
          s - l.lastUpdate > a && (_this2.releaseCallback(l.id), _this2.textureMap.delete(l.id), _this2.zeroReferenceTextureSet.delete(l));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }, _this2.options.textureCleanupIntervalMs);
    return _this2;
  }
  _inherits(Ji, _Mo);
  return _createClass(Ji, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var o;
      var t = (o = e.options) == null ? void 0 : o.id;
      if (L(t, "Texture must have an id to be registered"), !this.textureMap.has(t)) {
        var i = {
          id: t,
          nodeRefCount: 0,
          lastUpdate: Date.now()
        };
        this.textureMap.set(t, i), this.zeroReferenceTextureSet.add(i);
      }
    }
  }, {
    key: "incrementTextureRefCount",
    value: function incrementTextureRefCount(e) {
      var i;
      var t = (i = e.options) == null ? void 0 : i.id;
      L(t, "Texture must have an id to be registered");
      var o = this.textureMap.get(t);
      o || (this.registerTexture(e), o = this.textureMap.get(t)), L(o, "Texture must have been registered"), e.txType === "SubTexture" && this.incrementTextureRefCount(e.props.texture), o.nodeRefCount++, o.lastUpdate = Date.now(), this.zeroReferenceTextureSet.has(o) && this.zeroReferenceTextureSet.delete(o);
    }
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount(e) {
      var i;
      var t = (i = e.options) == null ? void 0 : i.id;
      L(t, "Texture must have an id to be registered");
      var o = this.textureMap.get(t);
      L(o, "Texture must have been registered"), o.nodeRefCount--, o.lastUpdate = Date.now(), o.nodeRefCount === 0 && this.zeroReferenceTextureSet.add(o), e.txType === "SubTexture" && this.decrementTextureRefCount(e.props.texture);
    }
  }]);
}(Mo);
var es = /*#__PURE__*/function (_Mo2) {
  function es(e) {
    var _this3;
    _classCallCheck(this, es);
    _this3 = _callSuper(this, es, [e]);
    u(_this3, "registry");
    _this3.registry = new FinalizationRegistry(e);
    return _this3;
  }
  _inherits(es, _Mo2);
  return _createClass(es, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var t, o;
      L((t = e.options) == null ? void 0 : t.id, "Texture must have an ID to be registered"), this.registry.register(e, (o = e.options) == null ? void 0 : o.id);
    }
  }, {
    key: "incrementTextureRefCount",
    value: function incrementTextureRefCount() {}
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount() {}
  }]);
}(Mo);
var vt = {
    alpha: function alpha(n) {
      return n === 1 ? null : {
        prop: "opacity",
        value: "".concat(n)
      };
    },
    x: function x(n) {
      return {
        prop: "left",
        value: "".concat(n, "px")
      };
    },
    y: function y(n) {
      return {
        prop: "top",
        value: "".concat(n, "px")
      };
    },
    width: function width(n) {
      return n === 0 ? null : {
        prop: "width",
        value: "".concat(n, "px")
      };
    },
    height: function height(n) {
      return n === 0 ? null : {
        prop: "height",
        value: "".concat(n, "px")
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
    clipping: function clipping(n) {
      return n === !1 ? null : {
        prop: "overflow",
        value: n ? "hidden" : "visible"
      };
    },
    rotation: function rotation(n) {
      return n === 0 ? null : {
        prop: "transform",
        value: "rotate(".concat(n, "rad)")
      };
    },
    scale: function scale(n) {
      return n === 1 ? null : {
        prop: "transform",
        value: "scale(".concat(n, ")")
      };
    },
    scaleX: function scaleX(n) {
      return n === 1 ? null : {
        prop: "transform",
        value: "scaleX(".concat(n, ")")
      };
    },
    scaleY: function scaleY(n) {
      return n === 1 ? null : {
        prop: "transform",
        value: "scaleY(".concat(n, ")")
      };
    },
    color: function color(n) {
      return n === 0 ? null : {
        prop: "color",
        value: zo(n)
      };
    }
  },
  zo = function zo(n) {
    var r = (n & 255) / 255,
      e = n >> 8 & 255,
      t = n >> 16 & 255,
      o = n >> 24 & 255;
    return "rgba(".concat(o, ",").concat(t, ",").concat(e, ",").concat(r, ")");
  },
  ts = {
    id: "id"
  };
var rs = /*#__PURE__*/function () {
  function rs(r, e) {
    _classCallCheck(this, rs);
    u(this, "root", null);
    u(this, "canvas", null);
    u(this, "height", 1080);
    u(this, "width", 1920);
    u(this, "scaleX", 1);
    u(this, "scaleY", 1);
    var i, s, a, l, c, d;
    if (mo()) return;
    if (!e) throw new Error("settings is required");
    this.height = Math.ceil((s = e.appHeight) != null ? s : 1080 / ((i = e.deviceLogicalPixelRatio) != null ? i : 1)), this.width = Math.ceil((l = e.appWidth) != null ? l : 1900 / ((a = e.deviceLogicalPixelRatio) != null ? a : 1)), this.scaleX = (c = e.deviceLogicalPixelRatio) != null ? c : 1, this.scaleY = (d = e.deviceLogicalPixelRatio) != null ? d : 1, this.canvas = r, this.root = document.createElement("div"), this.setRootPosition(), document.body.appendChild(this.root), new MutationObserver(this.setRootPosition.bind(this)).observe(r, {
      attributes: !0,
      childList: !1,
      subtree: !1
    }), new ResizeObserver(this.setRootPosition.bind(this)).observe(r), window.addEventListener("resize", this.setRootPosition.bind(this)), console.warn("Inspector is enabled, this will impact performance");
  }
  return _createClass(rs, [{
    key: "setRootPosition",
    value: function setRootPosition() {
      if (this.root === null || this.canvas === null) return;
      var r = this.canvas.getBoundingClientRect(),
        e = document.documentElement.scrollTop + r.top,
        t = document.documentElement.scrollLeft + r.left;
      this.root.id = "root", this.root.style.left = "".concat(t, "px"), this.root.style.top = "".concat(e, "px"), this.root.style.width = "".concat(this.width, "px"), this.root.style.height = "".concat(this.height, "px"), this.root.style.position = "absolute", this.root.style.transformOrigin = "0 0 0", this.root.style.transform = "scale(".concat(this.scaleX, ", ").concat(this.scaleY, ")"), this.root.style.overflow = "hidden", this.root.style.zIndex = "65534";
    }
  }, {
    key: "createDiv",
    value: function createDiv(r, e) {
      var t = document.createElement("div");
      t.style.position = "absolute", t.id = r.id.toString();
      for (var o in e) this.updateNodeProperty(t, o, e[o]);
      return t;
    }
  }, {
    key: "createNode",
    value: function createNode(r, e) {
      var t = r.createNode(e),
        o = this.createDiv(t, e);
      return o.node = t, t.div = o, this.createProxy(t, o);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(r, e) {
      var t = r.createTextNode(e),
        o = this.createDiv(t, e);
      return o.node = t, t.div = o, this.createProxy(t, o);
    }
  }, {
    key: "createProxy",
    value: function createProxy(r, e) {
      var _this4 = this;
      return new Proxy(r, {
        set: function set(t, o, i) {
          return _this4.updateNodeProperty(e, o, i), Reflect.set(t, o, i);
        },
        get: function get(t, o, i) {
          return o === "destroy" && _this4.destroyNode(t), o === "animate" ? function (s, a) {
            var l = t.animate(s, a);
            return new Proxy(l, {
              get: function get(c, d, f) {
                return d === "start" && _this4.animateNode(e, r, s, a), Reflect.get(c, d, f);
              }
            });
          } : Reflect.get(t, o, i);
        }
      });
    }
  }, {
    key: "destroyNode",
    value: function destroyNode(r) {
      var e = document.getElementById(r.id.toString());
      e == null || e.remove();
    }
  }, {
    key: "updateNodeProperty",
    value: function updateNodeProperty(r, e, t) {
      var o;
      if (!(this.root === null || t === void 0 || t === null)) {
        if (e === "parent") {
          var i = t.id;
          if (i === 1) {
            this.root.appendChild(r);
            return;
          }
          var s = document.getElementById(i.toString());
          s == null || s.appendChild(r);
          return;
        }
        if (e === "text") {
          r.innerHTML = String(t), r.style.visibility = "hidden";
          return;
        }
        if (e === "src" && t) {
          r.setAttribute("data-src", String(t));
          return;
        }
        if (vt[e]) {
          var _i3 = (o = vt[e]) == null ? void 0 : o.call(vt, t);
          if (_i3 === null) return;
          if (typeof _i3 == "string") {
            r.style.setProperty(_i3, String(t));
            return;
          }
          _typeof(_i3) == "object" && r.style.setProperty(_i3.prop, _i3.value);
          return;
        }
        if (ts[e]) {
          r.setAttribute(String(vt[e]), String(t));
          return;
        }
        if (e === "data") {
          for (var _i4 in t) {
            var _s4 = t[_i4];
            _s4 === void 0 ? r.removeAttribute("data-".concat(_i4)) : r.setAttribute("data-".concat(_i4), String(_s4));
          }
          return;
        }
      }
    }
  }, {
    key: "animateNode",
    value: function animateNode(r, e, t, o) {
      var _o$duration = o.duration,
        i = _o$duration === void 0 ? 1e3 : _o$duration,
        _o$delay = o.delay,
        s = _o$delay === void 0 ? 0 : _o$delay,
        a = t.x,
        l = t.y,
        c = t.width,
        d = t.height,
        _t$alpha = t.alpha,
        f = _t$alpha === void 0 ? 1 : _t$alpha,
        _t$rotation = t.rotation,
        g = _t$rotation === void 0 ? 0 : _t$rotation,
        _t$scale = t.scale,
        w = _t$scale === void 0 ? 1 : _t$scale,
        x = t.color;
      function y() {
        setTimeout(function () {
          r.style.top = "".concat(l, "px"), r.style.left = "".concat(a, "px"), r.style.width = "".concat(c, "px"), r.style.height = "".concat(d, "px"), r.style.opacity = "".concat(f), r.style.rotate = "".concat(g, "rad"), r.style.scale = "".concat(w), r.style.color = zo(x);
        }, i);
      }
      setTimeout(y, s);
    }
  }]);
}();
var oe = /*#__PURE__*/function () {
  function oe(r) {
    _classCallCheck(this, oe);
    u(this, "priority", 1);
    u(this, "name", "");
    u(this, "ref");
    u(this, "target");
    u(this, "passParameters", "");
    u(this, "declaredUniforms", "");
    u(this, "uniformInfo", {});
    var e = r.ref,
      t = r.target,
      _r$props = r.props,
      o = _r$props === void 0 ? {} : _r$props;
    this.ref = e, this.target = t;
    var i = {},
      s = [];
    var a = "";
    var l = this.constructor.uniforms || {};
    for (var c in l) {
      var d = l[c],
        f = d.type,
        g = "".concat(e, "_").concat(c);
      var w = "";
      d.size && (w = "[".concat(d.size(o), "]")), s.push(g), a += "uniform ".concat(f, " ").concat(g).concat(w, ";"), i[c] = {
        name: g,
        uniform: l[c].method
      };
    }
    this.passParameters = s.join(","), this.declaredUniforms = a, this.uniformInfo = i;
  }
  return _createClass(oe, null, [{
    key: "getEffectKey",
    value: function getEffectKey(r) {
      return "";
    }
  }, {
    key: "getMethodParameters",
    value: function getMethodParameters(r, e) {
      var t = [];
      for (var o in r) {
        var i = r[o];
        var s = "";
        i.size && (s = "[".concat(i.size(e), "]")), t.push("".concat(i.type, " ").concat(o).concat(s));
      }
      return t.join(",");
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(r) {
      return {};
    }
  }, {
    key: "makeEffectKey",
    value: function makeEffectKey(r) {
      return !1;
    }
  }]);
}();
u(oe, "uniforms", {}), u(oe, "methods"), u(oe, "onShaderMask"), u(oe, "onColorize"), u(oe, "onEffectMask");
var ns = {
  x: function x(n, r) {
    n.props.x = r;
  },
  y: function y(n, r) {
    n.props.y = r;
  },
  width: function width(n, r) {
    n.props.width = r;
  },
  height: function height(n, r) {
    n.props.height = r;
  },
  color: function color(n, r) {
    n.props.color = r;
  },
  zIndex: function zIndex(n, r) {
    n.props.zIndex = r;
  },
  fontFamily: function fontFamily(n, r) {
    n.props.fontFamily = r;
  },
  fontWeight: function fontWeight(n, r) {
    n.props.fontWeight = r;
  },
  fontStyle: function fontStyle(n, r) {
    n.props.fontStyle = r;
  },
  fontStretch: function fontStretch(n, r) {
    n.props.fontStretch = r;
  },
  fontSize: function fontSize(n, r) {
    n.props.fontSize = r;
  },
  text: function text(n, r) {
    n.props.text = r;
  },
  textAlign: function textAlign(n, r) {
    n.props.textAlign = r;
  },
  contain: function contain(n, r) {
    n.props.contain = r;
  },
  offsetY: function offsetY(n, r) {
    n.props.offsetY = r;
  },
  scrollable: function scrollable(n, r) {
    n.props.scrollable = r;
  },
  scrollY: function scrollY(n, r) {
    n.props.scrollY = r;
  },
  letterSpacing: function letterSpacing(n, r) {
    n.props.letterSpacing = r;
  },
  lineHeight: function lineHeight(n, r) {
    n.props.lineHeight = r;
  },
  maxLines: function maxLines(n, r) {
    n.props.maxLines = r;
  },
  textBaseline: function textBaseline(n, r) {
    n.props.textBaseline = r;
  },
  verticalAlign: function verticalAlign(n, r) {
    n.props.verticalAlign = r;
  },
  overflowSuffix: function overflowSuffix(n, r) {
    n.props.overflowSuffix = r;
  },
  debug: function debug(n, r) {
    n.props.debug = r;
  }
};
var Po = /*#__PURE__*/function () {
  function Po(r) {
    var _this5 = this;
    _classCallCheck(this, Po);
    u(this, "stage");
    u(this, "set");
    this.stage = r;
    var e = _objectSpread(_objectSpread({}, ns), this.getPropertySetters());
    this.set = Object.freeze(Object.fromEntries(Object.entries(e).map(function (_ref) {
      var _ref4 = _slicedToArray(_ref, 2),
        t = _ref4[0],
        o = _ref4[1];
      return [t, function (i, s) {
        i.props[t] !== s && (o(i, s), _this5.stage.requestRender());
      }];
    })));
  }
  return _createClass(Po, [{
    key: "setStatus",
    value: function setStatus(r, e, t) {
      r.status !== e && (r.status = e, r.emitter.emit(e, t));
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(r, e) {
      r.isRenderable = e;
    }
  }, {
    key: "destroyState",
    value: function destroyState(r) {
      ["loading", "loaded", "failed"].forEach(function (t) {
        r.emitter.off(t);
      });
    }
  }, {
    key: "scheduleUpdateState",
    value: function scheduleUpdateState(r) {
      var _this6 = this;
      r.updateScheduled || (r.updateScheduled = !0, queueMicrotask(function () {
        r.updateScheduled = !1, _this6.updateState(r);
      }));
    }
  }]);
}();
var In = /*#__PURE__*/function (_xi) {
  function In(e, t, o) {
    var _this7;
    _classCallCheck(this, In);
    _this7 = _callSuper(this, In, [e, t]);
    u(_this7, "fontFace");
    u(_this7, "fontUrl");
    var i = o.replace(/\(|\)/g, ""),
      s = _this7.descriptors,
      a = {
        style: s.style,
        weight: typeof s.weight == "number" ? "".concat(s.weight) : s.weight,
        stretch: s.stretch,
        unicodeRange: s.unicodeRange,
        variant: s.variant,
        featureSettings: s.featureSettings,
        display: s.display
      },
      l = new FontFace(e, "url(".concat(i, ")"), a);
    l.load().then(function () {
      _this7.loaded = !0, _this7.emit("loaded");
    }).catch(console.error), _this7.fontFace = l, _this7.fontUrl = o;
    return _this7;
  }
  _inherits(In, _xi);
  return _createClass(In);
}(xi);
var kn = 2048;
function Bn(n, r, e, t, o) {
  var i = n !== "bottom" ? .5 * r : 0;
  return e * (t - 1) + i + Math.max(e, r) + (o || 0);
}
var os = /*#__PURE__*/function () {
  function os(r, e) {
    _classCallCheck(this, os);
    u(this, "_canvas");
    u(this, "_context");
    u(this, "_settings");
    u(this, "renderInfo");
    this._canvas = r, this._context = e, this._settings = this.mergeDefaults({});
  }
  return _createClass(os, [{
    key: "settings",
    get: function get() {
      return this._settings;
    },
    set: function set(r) {
      this._settings = this.mergeDefaults(r);
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
      var r = [this._settings.fontFace],
        e = [];
      for (var t = 0, o = r.length; t < o; t++) r[t] === "serif" || r[t] === "sans-serif" ? e.push(r[t]) : e.push('"'.concat(r[t], '"'));
      return "".concat(this._settings.fontStyle, " ").concat(this._settings.fontSize * this.getPrecision(), "px ").concat(e.join(","));
    }
  }, {
    key: "_load",
    value: function _load() {
      var _this8 = this;
      if (document.fonts) {
        var r = this._getFontSetting();
        try {
          if (!document.fonts.check(r, this._settings.text)) return document.fonts.load(r, this._settings.text).catch(function (e) {
            console.warn("[Lightning] Font load error", e, r);
          }).then(function () {
            document.fonts.check(r, _this8._settings.text) || console.warn("[Lightning] Font not found", r);
          });
        } catch (e) {
          console.warn("[Lightning] Can't check font loading for " + r);
        }
      }
    }
  }, {
    key: "calculateRenderInfo",
    value: function calculateRenderInfo() {
      var r = {},
        e = this.getPrecision(),
        t = this._settings.paddingLeft * e,
        o = this._settings.paddingRight * e,
        i = this._settings.fontSize * e;
      var s = this._settings.offsetY === null ? null : this._settings.offsetY * e,
        a = (this._settings.lineHeight || i) * e;
      var l = this._settings.w * e,
        c = this._settings.h * e;
      var d = this._settings.wordWrapWidth * e;
      var f = this._settings.cutSx * e,
        g = this._settings.cutEx * e,
        w = this._settings.cutSy * e,
        x = this._settings.cutEy * e,
        y = (this._settings.letterSpacing || 0) * e,
        b = this._settings.textIndent * e;
      this.setFontProperties();
      var C = l || 2048 / this.getPrecision(),
        v = C - t;
      if (v < 10 && (C += 10 - v, v = 10), d || (d = v), this._settings.textOverflow && !this._settings.wordWrap) {
        var _;
        switch (this._settings.textOverflow) {
          case "clip":
            _ = "";
            break;
          case "ellipsis":
            _ = this._settings.overflowSuffix;
            break;
          default:
            _ = this._settings.textOverflow;
        }
        this._settings.text = this.wrapWord(this._settings.text, d - b, _);
      }
      var m;
      if (this._settings.wordWrap) m = this.wrapText(this._settings.text, d, y, b);else {
        m = {
          l: this._settings.text.split(/(?:\r\n|\r|\n)/),
          n: []
        };
        var _2 = m.l.length;
        for (var A = 0; A < _2 - 1; A++) m.n.push(A);
      }
      var p = m.l;
      if (this._settings.maxLines && p.length > this._settings.maxLines) {
        var _3 = p.slice(0, this._settings.maxLines);
        var _A = null;
        if (this._settings.overflowSuffix) {
          var z = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0,
            M = this.wrapText(_3[_3.length - 1], d - z, y, b);
          _3[_3.length - 1] = "".concat(M.l[0]).concat(this._settings.overflowSuffix), _A = [M.l.length > 1 ? M.l[1] : ""];
        } else _A = [""];
        var E;
        var N = p.length;
        var B = 0;
        var F = m.n.length;
        for (E = this._settings.maxLines; E < N; E++) _A[B] += "".concat(_A[B] ? " " : "").concat(p[E]), E + 1 < F && m.n[E + 1] && B++;
        r.remainingText = _A.join("\n"), r.moreTextLines = !0, p = _3;
      } else r.moreTextLines = !1, r.remainingText = "";
      var S = 0;
      var I = [];
      for (var _4 = 0; _4 < p.length; _4++) {
        var _A2 = this.measureText(p[_4], y) + (_4 === 0 ? b : 0);
        I.push(_A2), S = Math.max(S, _A2);
      }
      r.lineWidths = I, l || (C = S + t + o, v = S), a = a || i;
      var T;
      return c ? T = c : T = Bn(this._settings.textBaseline, i, a, p.length, s), s === null && (s = i), r.w = C, r.h = T, r.lines = p, r.precision = e, C || (C = 1), T || (T = 1), (f || g) && (C = Math.min(C, g - f)), (w || x) && (T = Math.min(T, x - w)), r.width = C, r.innerWidth = v, r.height = T, r.fontSize = i, r.cutSx = f, r.cutSy = w, r.cutEx = g, r.cutEy = x, r.lineHeight = a, r.lineWidths = I, r.offsetY = s, r.paddingLeft = t, r.paddingRight = o, r.letterSpacing = y, r.textIndent = b, r;
    }
  }, {
    key: "draw",
    value: function draw(r, e) {
      var t = this.getPrecision(),
        o = (e == null ? void 0 : e.lines) || r.lines,
        i = (e == null ? void 0 : e.lineWidths) || r.lineWidths,
        s = e ? Bn(this._settings.textBaseline, r.fontSize, r.lineHeight, e.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * t) : r.height;
      this._canvas.width = Math.min(Math.ceil(r.width + this._settings.textRenderIssueMargin), kn), this._canvas.height = Math.min(Math.ceil(s), kn), this.setFontProperties(), r.fontSize >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (r.cutSx || r.cutSy) && this._context.translate(-r.cutSx, -r.cutSy);
      var a, l;
      var c = [];
      for (var f = 0, g = o.length; f < g; f++) a = f === 0 ? r.textIndent : 0, l = f * r.lineHeight + r.offsetY, this._settings.verticalAlign == "middle" ? l += (r.lineHeight - r.fontSize) / 2 : this._settings.verticalAlign == "bottom" && (l += r.lineHeight - r.fontSize), this._settings.textAlign === "right" ? a += r.innerWidth - i[f] : this._settings.textAlign === "center" && (a += (r.innerWidth - i[f]) / 2), a += r.paddingLeft, c.push({
        text: o[f],
        x: a,
        y: l,
        w: i[f]
      });
      if (this._settings.highlight) {
        var _f = this._settings.highlightColor,
          _g = this._settings.highlightHeight * t || r.fontSize * 1.5,
          w = this._settings.highlightOffset * t,
          x = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * t : r.paddingLeft,
          y = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * t : r.paddingRight;
        this._context.fillStyle = Cr(_f);
        for (var b = 0; b < c.length; b++) {
          var C = c[b];
          this._context.fillRect(C.x - x, C.y - r.offsetY + w, C.w + y + x, _g);
        }
      }
      var d = null;
      this._settings.shadow && (d = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = Cr(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * t, this._context.shadowOffsetY = this._settings.shadowOffsetY * t, this._context.shadowBlur = this._settings.shadowBlur * t), this._context.fillStyle = Cr(this._settings.textColor);
      for (var _f2 = 0, _g2 = c.length; _f2 < _g2; _f2++) {
        var _w = c[_f2];
        if (r.letterSpacing === 0) this._context.fillText(_w.text, _w.x, _w.y);else {
          var _x = _w.text.split("");
          var _y = _w.x;
          for (var _b = 0, _C = _x.length; _b < _C; _b++) this._context.fillText(_x[_b], _y, _w.y), _y += this.measureText(_x[_b], r.letterSpacing);
        }
      }
      d && (this._context.shadowColor = d[0], this._context.shadowOffsetX = d[1], this._context.shadowOffsetY = d[2], this._context.shadowBlur = d[3]), (r.cutSx || r.cutSy) && this._context.translate(r.cutSx, r.cutSy), this.renderInfo = r;
    }
  }, {
    key: "wrapWord",
    value: function wrapWord(r, e, t) {
      var o = this._context.measureText(t).width,
        i = r.length,
        s = this._context.measureText(r).width;
      if (s <= e) return r;
      var a = Math.floor(e * i / s),
        l = this._context.measureText(r.substring(0, a)).width + o;
      if (l > e) for (; a > 0 && (l = this._context.measureText(r.substring(0, a)).width + o, l > e);) a -= 1;else for (; a < i;) if (l = this._context.measureText(r.substring(0, a)).width + o, l < e) a += 1;else {
        a -= 1;
        break;
      }
      return r.substring(0, a) + (e >= o ? t : "");
    }
  }, {
    key: "wrapText",
    value: function wrapText(r, e, t) {
      var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var i = r.split(/\r?\n/g);
      var s = [];
      var a = [];
      for (var l = 0; l < i.length; l++) {
        var c = [];
        var d = "",
          f = e - o;
        var g = i[l].split(" ");
        for (var w = 0; w < g.length; w++) {
          var x = this.measureText(g[w], t),
            y = x + this.measureText(" ", t);
          w === 0 || y > f ? (w > 0 && (c.push(d), d = ""), d += g[w], f = e - x - (w === 0 ? o : 0)) : (f -= y, d += " ".concat(g[w]));
        }
        c.push(d), d = "", s = s.concat(c), l < i.length - 1 && a.push(s.length);
      }
      return {
        l: s,
        n: a
      };
    }
  }, {
    key: "measureText",
    value: function measureText(r) {
      var _this9 = this;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return e ? r.split("").reduce(function (t, o) {
        return t + _this9._context.measureText(o).width + e;
      }, 0) : this._context.measureText(r).width;
    }
  }, {
    key: "mergeDefaults",
    value: function mergeDefaults(r) {
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
      }, r);
    }
  }]);
}();
var En = (typeof self === "undefined" ? "undefined" : _typeof(self)) > "u" ? globalThis : self;
var go;
var Nn = ((go = En.document) == null ? void 0 : go.fonts) || En.fonts;
function is(n) {
  var r = n.fontFamily,
    e = n.fontStyle,
    t = n.fontWeight,
    o = n.fontStretch,
    i = n.fontSize;
  return [e, t, o, "".concat(i, "px"), r].join(" ");
}
var ss = ht(0, 0, 0, 0);
var Ln = /*#__PURE__*/function (_Po) {
  function Ln(e) {
    var _this10;
    _classCallCheck(this, Ln);
    _this10 = _callSuper(this, Ln, [e]);
    u(_this10, "canvas");
    u(_this10, "context");
    u(_this10, "rendererBounds");
    (typeof OffscreenCanvas === "undefined" ? "undefined" : _typeof(OffscreenCanvas)) < "u" ? _this10.canvas = new OffscreenCanvas(0, 0) : _this10.canvas = document.createElement("canvas");
    var t = _this10.canvas.getContext("2d");
    t || (_this10.canvas = document.createElement("canvas"), t = _this10.canvas.getContext("2d")), L(t), _this10.context = t, _this10.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this10.stage.options.appWidth,
      y2: _this10.stage.options.appHeight
    };
    return _this10;
  }
  _inherits(Ln, _Po);
  return _createClass(Ln, [{
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
          e.props.width = t, e.props.contain !== "none" && _this11.invalidateLayoutCache(e);
        },
        height: function height(e, t) {
          e.props.height = t, e.props.contain === "both" && _this11.invalidateLayoutCache(e);
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
      return e instanceof In;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      L(e instanceof In), Nn.add(e.fontFace);
    }
  }, {
    key: "createState",
    value: function createState(e) {
      return {
        props: e,
        status: "initialState",
        updateScheduled: !1,
        emitter: new et(),
        canvasPages: void 0,
        lightning2TextRenderer: new os(this.canvas, this.context),
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
      var x, y;
      if (e.status === "initialState" && this.setStatus(e, "loading"), !e.fontInfo) {
        var b = is(e.props);
        if (e.fontInfo = {
          cssString: b,
          loaded: !1
        }, !e.fontInfo.loaded) {
          Nn.load(b).then(this.onFontLoaded.bind(this, e, b)).catch(this.onFontLoadError.bind(this, e, b));
          return;
        }
      }
      if (!e.fontInfo.loaded) return;
      if (!e.renderInfo) {
        var _b2 = e.props.maxLines,
          C = e.props.contain === "both" ? Math.floor((e.props.height - e.props.offsetY) / e.props.lineHeight) : 0,
          v = C > 0 && _b2 > 0 ? Math.min(C, _b2) : Math.max(C, _b2);
        e.lightning2TextRenderer.settings = {
          text: e.props.text,
          textAlign: e.props.textAlign,
          fontFace: e.props.fontFamily,
          fontSize: e.props.fontSize,
          fontStyle: [e.props.fontStretch, e.props.fontStyle, e.props.fontWeight].join(" "),
          textColor: Ee(e.props.color),
          offsetY: e.props.fontSize + e.props.offsetY,
          wordWrap: e.props.contain !== "none",
          wordWrapWidth: e.props.contain === "none" ? void 0 : e.props.width,
          letterSpacing: e.props.letterSpacing,
          lineHeight: e.props.lineHeight,
          maxLines: v,
          textBaseline: e.props.textBaseline,
          verticalAlign: e.props.verticalAlign,
          overflowSuffix: e.props.overflowSuffix
        }, e.renderInfo = e.lightning2TextRenderer.calculateRenderInfo(), e.textH = e.renderInfo.lineHeight * e.renderInfo.lines.length, e.textW = e.renderInfo.width, e.renderWindow = void 0;
      }
      var _e$props = e.props,
        t = _e$props.x,
        o = _e$props.y,
        i = _e$props.width,
        s = _e$props.height,
        a = _e$props.scrollY,
        l = _e$props.contain,
        c = e.visibleWindow;
      var d = e.renderWindow,
        f = e.canvasPages;
      if (!c.valid) {
        var _b3 = ht(t, o, l !== "none" ? t + i : 1 / 0, l === "both" ? o + s : 1 / 0, ss);
        yi(this.rendererBounds, _b3, c), c.valid = !0;
      }
      var g = c.y2 - c.y1,
        w = Math.ceil(g / e.renderInfo.lineHeight);
      if (g === 0) {
        f = void 0, d = void 0, this.setStatus(e, "loaded");
        return;
      } else if (d && f) {
        var _b4 = t + d.x1,
          _C2 = o - a + d.y1,
          _v = t + d.x2,
          m = o - a + d.y2;
        if (_b4 <= c.x1 && _v >= c.x2 && _C2 <= c.y1 && m >= c.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        m < c.y2 ? (d.y1 += w * e.renderInfo.lineHeight, d.y2 += w * e.renderInfo.lineHeight, f.push(f.shift()), f[2].lineNumStart = f[1].lineNumStart + w, f[2].lineNumEnd = f[2].lineNumStart + w, f[2].valid = !1) : _C2 > c.y1 && (d.y1 -= w * e.renderInfo.lineHeight, d.y2 -= w * e.renderInfo.lineHeight, f.unshift(f.pop()), f[0].lineNumStart = f[1].lineNumStart - w, f[0].lineNumEnd = f[0].lineNumStart + w, f[0].valid = !1);
      } else {
        var _b5 = e.renderInfo.lineHeight * w,
          _C3 = Math.ceil(a / _b5),
          _v2 = _C3 * w,
          _m = _v2 - w,
          p = _v2 + w;
        f = [{
          texture: f == null ? void 0 : f[0].texture,
          lineNumStart: _m,
          lineNumEnd: _m + w,
          valid: !1
        }, {
          texture: f == null ? void 0 : f[1].texture,
          lineNumStart: _v2,
          lineNumEnd: _v2 + w,
          valid: !1
        }, {
          texture: f == null ? void 0 : f[2].texture,
          lineNumStart: p,
          lineNumEnd: p + w,
          valid: !1
        }], e.canvasPages = f;
        var S = _C3 * _b5;
        d = {
          x1: 0,
          y1: S - _b5,
          x2: i,
          y2: S + _b5 * 2
        };
      }
      e.renderWindow = d, performance.now();
      var _iterator10 = _createForOfIteratorHelper(f),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _b6 = _step10.value;
          if (!_b6.valid) {
            if (_b6.lineNumStart < 0) {
              (x = _b6.texture) == null || x.setRenderableOwner(e, !1), _b6.texture = this.stage.txManager.loadTexture("ImageTexture", {
                src: ""
              }), _b6.texture.setRenderableOwner(e, e.isRenderable), _b6.valid = !0;
              continue;
            }
            e.lightning2TextRenderer.draw(e.renderInfo, {
              lines: e.renderInfo.lines.slice(_b6.lineNumStart, _b6.lineNumEnd),
              lineWidths: e.renderInfo.lineWidths.slice(_b6.lineNumStart, _b6.lineNumEnd)
            }), this.canvas.width === 0 || this.canvas.height === 0 || ((y = _b6.texture) == null || y.setRenderableOwner(e, !1), _b6.texture = this.stage.txManager.loadTexture("ImageTexture", {
              src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
            }, {
              preload: !0
            }), _b6.texture.setRenderableOwner(e, e.isRenderable)), _b6.valid = !0;
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
    value: function renderQuads(e, t, o, i) {
      var _, A, E, N, B, F, z, M, D, $, ie, J;
      var s = this.stage,
        a = e.canvasPages,
        _e$textW = e.textW,
        l = _e$textW === void 0 ? 0 : _e$textW,
        _e$textH = e.textH,
        c = _e$textH === void 0 ? 0 : _e$textH,
        d = e.renderWindow;
      if (!a || !d) return;
      var _e$props2 = e.props,
        f = _e$props2.x,
        g = _e$props2.y,
        w = _e$props2.scrollY,
        x = _e$props2.contain,
        y = _e$props2.width,
        b = _e$props2.height,
        C = {
          x: f,
          y: g,
          width: x !== "none" ? y : l,
          height: x === "both" ? b : c
        };
      tn({
        x: 0,
        y: 0,
        width: s.options.appWidth,
        height: s.options.appHeight
      }, C), L(a, "canvasPages is not defined"), L(d, "renderWindow is not defined");
      var m = (d.y2 - d.y1) / 3,
        _e$props3 = e.props,
        p = _e$props3.zIndex,
        S = _e$props3.color,
        I = i * vi(S),
        T = St(4294967295, I);
      a[0].valid && this.stage.renderer.addQuad({
        alpha: I,
        clippingRect: o,
        colorBl: T,
        colorBr: T,
        colorTl: T,
        colorTr: T,
        width: ((A = (_ = a[0].texture) == null ? void 0 : _.dimensions) == null ? void 0 : A.width) || 0,
        height: ((N = (E = a[0].texture) == null ? void 0 : E.dimensions) == null ? void 0 : N.height) || 0,
        texture: a[0].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: p,
        tx: t.tx,
        ty: t.ty - w + d.y1,
        ta: t.ta,
        tb: t.tb,
        tc: t.tc,
        td: t.td
      }), a[1].valid && this.stage.renderer.addQuad({
        alpha: I,
        clippingRect: o,
        colorBl: T,
        colorBr: T,
        colorTl: T,
        colorTr: T,
        width: ((F = (B = a[1].texture) == null ? void 0 : B.dimensions) == null ? void 0 : F.width) || 0,
        height: ((M = (z = a[1].texture) == null ? void 0 : z.dimensions) == null ? void 0 : M.height) || 0,
        texture: a[1].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: p,
        tx: t.tx,
        ty: t.ty - w + d.y1 + m,
        ta: t.ta,
        tb: t.tb,
        tc: t.tc,
        td: t.td
      }), a[2].valid && this.stage.renderer.addQuad({
        alpha: I,
        clippingRect: o,
        colorBl: T,
        colorBr: T,
        colorTl: T,
        colorTr: T,
        width: (($ = (D = a[2].texture) == null ? void 0 : D.dimensions) == null ? void 0 : $.width) || 0,
        height: ((J = (ie = a[2].texture) == null ? void 0 : ie.dimensions) == null ? void 0 : J.height) || 0,
        texture: a[2].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: p,
        tx: t.tx,
        ty: t.ty - w + d.y1 + m + m,
        ta: t.ta,
        tb: t.tb,
        tc: t.tc,
        td: t.td
      });
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(e, t) {
      var o;
      _superPropGet(Ln, "setIsRenderable", this, 3)([e, t]), (o = e.canvasPages) == null || o.forEach(function (i) {
        var s;
        (s = i.texture) == null || s.setRenderableOwner(e, t);
      });
    }
  }, {
    key: "destroyState",
    value: function destroyState(e) {
      var t;
      (t = e.canvasPages) == null || t.forEach(function (o) {
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
    value: function onFontLoaded(e, t) {
      var o;
      t !== ((o = e.fontInfo) == null ? void 0 : o.cssString) || !e.fontInfo || (e.fontInfo.loaded = !0, this.scheduleUpdateState(e));
    }
  }, {
    key: "onFontLoadError",
    value: function onFontLoadError(e, t, o) {
      var i;
      t !== ((i = e.fontInfo) == null ? void 0 : i.cssString) || !e.fontInfo || (e.fontInfo.loaded = !0, console.error("CanvasTextRenderer: Error loading font '".concat(e.fontInfo.cssString, "'"), o), this.scheduleUpdateState(e));
    }
  }]);
}(Po);
var Do = /*#__PURE__*/function (_pt) {
  function Do(r) {
    _classCallCheck(this, Do);
    return _callSuper(this, Do, [{
      renderer: r,
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
  _inherits(Do, _pt);
  return _createClass(Do, [{
    key: "bindTextures",
    value: function bindTextures(r) {
      var e = this.glw;
      e.activeTexture(0), e.bindTexture(r[0].ctxTexture);
    }
  }]);
}(pt);
u(Do, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
var Oo = /*#__PURE__*/function (_pt2) {
  function Oo(e) {
    var _this12;
    _classCallCheck(this, Oo);
    _this12 = _callSuper(this, Oo, [{
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
    u(_this12, "supportsIndexedTextures", !0);
    return _this12;
  }
  _inherits(Oo, _pt2);
  return _createClass(Oo, [{
    key: "bindTextures",
    value: function bindTextures(e) {
      var t = this.renderer,
        o = this.glw;
      if (e.length > t.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) throw new Error("DefaultShaderBatched: Cannot bind more than ".concat(t.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS, " textures"));
      e.forEach(function (s, a) {
        o.activeTexture(a), o.bindTexture(s.ctxTexture);
      });
      var i = Array.from(Array(e.length).keys());
      this.setUniform("u_textures[0]", i);
    }
  }]);
}(pt);
u(Oo, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: function fragment(e) {
    return "\n      #define txUnits ".concat(e, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(e, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(e).keys()).map(function (t) {
      return "\n          ".concat(t !== 0 ? "else " : "", "if (idx == ").concat(t, ") {\n            return texture2D(textures[").concat(t, "], uv);\n          }\n        ");
    }).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ");
  }
});
function Wo(n, r) {
  var e = 0,
    t,
    o;
  r = r || {};
  function i() {
    var s = t,
      a = arguments.length,
      l,
      c;
    e: for (; s;) {
      if (s.args.length !== arguments.length) {
        s = s.next;
        continue;
      }
      for (c = 0; c < a; c++) if (s.args[c] !== arguments[c]) {
        s = s.next;
        continue e;
      }
      return s !== t && (s === o && (o = s.prev), s.prev.next = s.next, s.next && (s.next.prev = s.prev), s.next = t, s.prev = null, t.prev = s, t = s), s.val;
    }
    for (l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
    return s = {
      args: l,
      val: n.apply(null, l)
    }, t ? (t.prev = s, s.next = t) : o = s, e === r.maxSize ? (o = o.prev, o.next = null) : e++, t = s, s.val;
  }
  return i.clear = function () {
    t = null, o = null, e = 0;
  }, i;
}
var kr = new Map(),
  as = function as(n, r) {
    var e = JSON.stringify(n);
    if (kr.has(e)) return kr.get(e);
    var t = (n != null ? n : []).map(function (o) {
      return {
        type: o.type,
        props: r[o.type].resolveDefaults(o.props || {})
      };
    });
    return kr.set(e, t), t;
  },
  Le = /*#__PURE__*/function (_pt3) {
    function Le(e, t, o) {
      var _this13;
      _classCallCheck(this, Le);
      var i = Le.createShader(t, o);
      _this13 = _callSuper(this, Le, [{
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
      u(_this13, "effects", []);
      _this13.effects = i.effects, _this13.calculateProps = Wo(_this13.calculateProps.bind(_this13));
      return _this13;
    }
    _inherits(Le, _pt3);
    return _createClass(Le, [{
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
          o = [];
        return e == null || e.forEach(function (i, s) {
          var f;
          var a = _this14.effects[s],
            l = t[a.name],
            c = (f = i.props) != null ? f : {},
            d = a.uniformInfo;
          Object.keys(c).forEach(function (g) {
            var w = l.uniforms[g],
              x = d[g];
            var y = w.validator ? w.validator(c[g], c) : c[g];
            Array.isArray(y) && (y = new Float32Array(y)), o.push({
              name: x.name,
              value: y
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
      value: function canBatchShaderProps(e, t) {
        if (e.$dimensions.width !== t.$dimensions.width || e.$dimensions.height !== t.$dimensions.height || e.effects.length !== t.effects.length) return !1;
        var o = e.effects.length;
        var i = 0;
        for (; i < o; i++) {
          var s = e.effects[i],
            a = t.effects[i];
          if (s.type !== a.type) return !1;
          for (var l in s.props) if (a.props && !a.props[l] || s.props[l] !== a.props[l]) return !1;
        }
        return !0;
      }
    }], [{
      key: "createShader",
      value: function createShader(e, t) {
        var o = {},
          i = {};
        var s = "";
        var a = [],
          l = [],
          c = e.effects.map(function (x) {
            var y = t[x.type],
              b = y.getEffectKey(x.props || {});
            o[b] = o[b] ? ++o[b] : 1;
            var C = o[b];
            C === 1 && l.push({
              key: b,
              type: x.type,
              props: x.props
            });
            var v = new y({
              ref: "".concat(b).concat(C === 1 ? "" : C),
              target: b,
              props: x.props
            });
            return s += v.declaredUniforms, a.push.apply(a, _toConsumableArray(Object.values(v.uniformInfo))), v;
          });
        var d = "";
        l == null || l.forEach(function (x) {
          var T;
          var y = t[x.type],
            b = y.resolveDefaults((T = x.props) != null ? T : {}),
            C = [];
          for (var _ in y.methods) {
            var A = _;
            var E = y.methods[_];
            i[_] && i[_] !== E && (A = Le.resolveMethodDuplicate(_, E, i)), i[A] = E.replace("function", A), C.push({
              m: _,
              cm: A
            });
          }
          var v = y.onShaderMask instanceof Function ? y.onShaderMask(b) : y.onShaderMask,
            m = y.onColorize instanceof Function ? y.onColorize(b) : y.onColorize,
            p = y.onEffectMask instanceof Function ? y.onEffectMask(b) : y.onEffectMask;
          C.forEach(function (_) {
            var A = _.m,
              E = _.cm,
              N = new RegExp("\\$".concat(A), "g");
            v && (v = v.replace(N, E)), m && (m = m.replace(N, E)), p && (p = p.replace(N, E));
          });
          var S = y.getMethodParameters(y.uniforms, b),
            I = S.length > 0 ? ", ".concat(S) : "";
          v && (d += "\n        float fx_".concat(x.key, "_onShaderMask(float shaderMask ").concat(I, ") {\n          ").concat(v, "\n        }\n        ")), m && (d += "\n          vec4 fx_".concat(x.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(I, ") {\n            ").concat(m, "\n          }\n        ")), p && (d += "\n          vec4 fx_".concat(x.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(I, ") {\n            ").concat(p, "\n          }\n        "));
        });
        var f = "";
        for (var x in i) f += i[x];
        var g = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))",
          w = "\n\n    ";
        for (var _x2 = 0; _x2 < c.length; _x2++) {
          var y = c[_x2],
            b = y.passParameters.length > 0 ? ", ".concat(y.passParameters) : "",
            C = t[y.name];
          C.onShaderMask && (w += "\n        shaderMask = fx_".concat(y.target, "_onShaderMask(shaderMask ").concat(b, ");\n        ")), C.onColorize && (w += "\n        maskColor = fx_".concat(y.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(b, ");\n        ")), C.onEffectMask && (g = "fx_".concat(y.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(b, ")"));
          var v = c[_x2 + 1];
          (v === void 0 || t[v.name].onEffectMask) && (w += "\n          shaderColor = ".concat(g, ";\n        "));
        }
        return {
          effects: c,
          uniforms: a,
          fragment: Le.fragment(s, f, d, w),
          vertex: Le.vertex()
        };
      }
    }, {
      key: "resolveMethodDuplicate",
      value: function resolveMethodDuplicate(e, t, o) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var s = e + (i > 0 ? i : "");
        return o[s] && o[s] !== t ? this.resolveMethodDuplicate(e, t, o, ++i) : s;
      }
    }, {
      key: "resolveDefaults",
      value: function resolveDefaults(e, t) {
        return {
          effects: as(e.effects, t),
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
        var i;
        var o = "";
        return (i = e.effects) == null || i.forEach(function (s) {
          var l = t[s.type].getEffectKey(s.props || {});
          o += ",".concat(l);
        }), "DynamicShader".concat(o);
      }
    }]);
  }(pt);
u(Le, "z$__type__Props"), u(Le, "vertex", function () {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ";
}), u(Le, "fragment", function (e, t, o, i) {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(e, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(t, "\n\n    ").concat(o, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(i, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  ");
});
var ut = Le;
var Ur = /*#__PURE__*/function (_pt4) {
  function Ur(r) {
    _classCallCheck(this, Ur);
    return _callSuper(this, Ur, [{
      renderer: r,
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
  _inherits(Ur, _pt4);
  return _createClass(Ur, [{
    key: "bindTextures",
    value: function bindTextures(r) {
      var e = this.glw;
      e.activeTexture(0), e.bindTexture(r[0].ctxTexture);
    }
  }, {
    key: "bindProps",
    value: function bindProps(r) {
      this.setUniform("u_radius", r.radius);
    }
  }, {
    key: "canBatchShaderProps",
    value: function canBatchShaderProps(r, e) {
      return r.radius === e.radius && r.$dimensions.width === e.$dimensions.width && r.$dimensions.height === e.$dimensions.height;
    }
  }], [{
    key: "resolveDefaults",
    value: function resolveDefaults(r) {
      return {
        radius: r.radius || 10,
        $dimensions: {
          width: 0,
          height: 0
        }
      };
    }
  }]);
}(pt);
u(Ur, "z$__type__Props"), u(Ur, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
var ls = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
  xr = /*#__PURE__*/function (_pt5) {
    function xr(r) {
      _classCallCheck(this, xr);
      return _callSuper(this, xr, [{
        renderer: r,
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
    _inherits(xr, _pt5);
    return _createClass(xr, [{
      key: "bindTextures",
      value: function bindTextures(r) {
        var e = this.glw;
        e.activeTexture(0), e.bindTexture(r[0].ctxTexture);
      }
    }, {
      key: "bindProps",
      value: function bindProps(r) {
        var e = xr.resolveDefaults(r);
        for (var t in e) if (t === "transform") this.setUniform("u_transform", !1, e[t]);else if (t === "scrollY") this.setUniform("u_scrollY", e[t]);else if (t === "color") {
          var o = Ee(e.color);
          this.setUniform("u_color", o);
        } else t === "size" ? this.setUniform("u_size", e[t]) : t === "distanceRange" ? this.setUniform("u_distanceRange", e[t]) : t === "debug" && this.setUniform("u_debug", e[t] ? 1 : 0);
      }
    }], [{
      key: "resolveDefaults",
      value: function resolveDefaults() {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e, t, o, i, s, a;
        return {
          transform: (e = r.transform) != null ? e : ls,
          scrollY: (t = r.scrollY) != null ? t : 0,
          color: (o = r.color) != null ? o : 4294967295,
          size: (i = r.size) != null ? i : 16,
          distanceRange: (s = r.distanceRange) != null ? s : 1,
          debug: (a = r.debug) != null ? a : !1
        };
      }
    }]);
  }(pt);
u(xr, "shaderSources", {
  vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
var Yr = xr;
var ot = /*#__PURE__*/function (_oe) {
  function ot() {
    var _this16;
    _classCallCheck(this, ot);
    _this16 = _callSuper(this, ot, arguments);
    u(_this16, "name", "radius");
    return _this16;
  }
  _inherits(ot, _oe);
  return _createClass(ot, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "radius";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t;
      return {
        radius: (t = e.radius) != null ? t : 10
      };
    }
  }]);
}(oe);
u(ot, "z$__type__Props"), u(ot, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var t = e;
      return Array.isArray(t) ? t.length === 2 ? t = [t[0], t[1], t[0], t[1]] : t.length === 3 ? t = [t[0], t[1], t[2], t[0]] : t.length !== 4 && (t = [t[0], t[0], t[0], t[0]]) : typeof t == "number" && (t = [t, t, t, t]), t;
    }
  }
}), u(ot, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), u(ot, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  "), u(ot, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
var Ct = /*#__PURE__*/function (_oe2) {
  function Ct() {
    var _this17;
    _classCallCheck(this, Ct);
    _this17 = _callSuper(this, Ct, arguments);
    u(_this17, "name", "border");
    return _this17;
  }
  _inherits(Ct, _oe2);
  return _createClass(Ct, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "border";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o;
      return {
        width: (t = e.width) != null ? t : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}(oe);
u(Ct, "z$__type__Props"), u(Ct, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return Ee(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), u(Ct, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  "), u(Ct, "onColorize", "\n    return color;\n  ");
var Ue = /*#__PURE__*/function (_oe3) {
  function Ue() {
    var _this18;
    _classCallCheck(this, Ue);
    _this18 = _callSuper(this, Ue, arguments);
    u(_this18, "name", "linearGradient");
    return _this18;
  }
  _inherits(Ue, _oe3);
  return _createClass(Ue, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "linearGradient".concat(e.colors.length);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var i, s;
      var t = (i = e.colors) != null ? i : [4278190080, 4294967295];
      var o = e.stops || [];
      if (o.length === 0 || o.length !== t.length) {
        var a = t.length;
        var l = 0;
        var c = o;
        for (; l < a; l++) o[l] ? (c[l] = o[l], o[l - 1] === void 0 && c[l - 2] !== void 0 && (c[l - 1] = c[l - 2] + (o[l] - c[l - 2]) / 2)) : c[l] = l * (1 / (t.length - 1));
        o = c;
      }
      return {
        colors: t,
        stops: o,
        angle: (s = e.angle) != null ? s : 0
      };
    }
  }]);
}(oe);
u(Ue, "z$__type__Props"), u(Ue, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: function validator(e) {
      return e.map(function (o) {
        return Ee(o);
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
}), u(Ue, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
}), u(Ue, "ColorLoop", function (e) {
  var t = "";
  for (var o = 2; o < e; o++) t += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return t;
}), u(Ue, "onColorize", function (e) {
  var t = e.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(Ue.ColorLoop(t), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var $r = Ue;
var Hr = /*#__PURE__*/function (_oe4) {
  function Hr() {
    var _this19;
    _classCallCheck(this, Hr);
    _this19 = _callSuper(this, Hr, arguments);
    u(_this19, "name", "grayscale");
    return _this19;
  }
  _inherits(Hr, _oe4);
  return _createClass(Hr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "grayscale";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t;
      return {
        amount: (t = e.amount) != null ? t : 1
      };
    }
  }]);
}(oe);
u(Hr, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
}), u(Hr, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
var it = /*#__PURE__*/function (_oe5) {
  function it() {
    var _this20;
    _classCallCheck(this, it);
    _this20 = _callSuper(this, it, arguments);
    u(_this20, "name", "borderRight");
    return _this20;
  }
  _inherits(it, _oe5);
  return _createClass(it, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderRight";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o;
      return {
        width: (t = e.width) != null ? t : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}(oe);
u(it, "z$__type__Props"), u(it, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return Ee(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), u(it, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), u(it, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), u(it, "onColorize", "\n    return color;\n  ");
var st = /*#__PURE__*/function (_oe6) {
  function st() {
    var _this21;
    _classCallCheck(this, st);
    _this21 = _callSuper(this, st, arguments);
    u(_this21, "name", "borderTop");
    return _this21;
  }
  _inherits(st, _oe6);
  return _createClass(st, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderTop";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o;
      return {
        width: (t = e.width) != null ? t : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}(oe);
u(st, "z$__type__Props"), u(st, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return Ee(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), u(st, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), u(st, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), u(st, "onColorize", "\n    return color;\n  ");
var at = /*#__PURE__*/function (_oe7) {
  function at() {
    var _this22;
    _classCallCheck(this, at);
    _this22 = _callSuper(this, at, arguments);
    u(_this22, "name", "borderBottom");
    return _this22;
  }
  _inherits(at, _oe7);
  return _createClass(at, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderBottom";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o;
      return {
        width: (t = e.width) != null ? t : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}(oe);
u(at, "z$__type__Props"), u(at, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return Ee(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), u(at, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), u(at, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), u(at, "onColorize", "\n    return color;\n  ");
var lt = /*#__PURE__*/function (_oe8) {
  function lt() {
    var _this23;
    _classCallCheck(this, lt);
    _this23 = _callSuper(this, lt, arguments);
    u(_this23, "name", "borderLeft");
    return _this23;
  }
  _inherits(lt, _oe8);
  return _createClass(lt, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderLeft";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o;
      return {
        width: (t = e.width) != null ? t : 10,
        color: (o = e.color) != null ? o : 4294967295
      };
    }
  }]);
}(oe);
u(lt, "z$__type__Props"), u(lt, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return Ee(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), u(lt, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), u(lt, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), u(lt, "onColorize", "\n    return color;\n  ");
var Tt = /*#__PURE__*/function (_oe9) {
  function Tt() {
    var _this24;
    _classCallCheck(this, Tt);
    _this24 = _callSuper(this, Tt, arguments);
    u(_this24, "name", "glitch");
    return _this24;
  }
  _inherits(Tt, _oe9);
  return _createClass(Tt, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "glitch";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o, i, s, a;
      return {
        amplitude: (t = e.amplitude) != null ? t : .2,
        narrowness: (o = e.narrowness) != null ? o : 4,
        blockiness: (i = e.blockiness) != null ? i : 2,
        minimizer: (s = e.minimizer) != null ? s : 8,
        time: (a = e.time) != null ? a : Date.now()
      };
    }
  }]);
}(oe);
u(Tt, "z$__type__Props"), u(Tt, "uniforms", {
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
}), u(Tt, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
}), u(Tt, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
var er = /*#__PURE__*/function (_oe10) {
  function er() {
    var _this25;
    _classCallCheck(this, er);
    _this25 = _callSuper(this, er, arguments);
    u(_this25, "name", "fadeOut");
    return _this25;
  }
  _inherits(er, _oe10);
  return _createClass(er, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "fadeOut";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t;
      return {
        fade: (t = e.fade) != null ? t : 10
      };
    }
  }]);
}(oe);
u(er, "z$__type__Props"), u(er, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var t = e;
      return Array.isArray(t) ? t.length === 2 ? t = [t[0], t[1], t[0], t[1]] : t.length === 3 ? t = [t[0], t[1], t[2], t[0]] : t.length !== 4 && (t = [t[0], t[0], t[0], t[0]]) : typeof t == "number" && (t = [t, t, t, t]), t;
    }
  }
}), u(er, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
var Ge = /*#__PURE__*/function (_oe11) {
  function Ge() {
    var _this26;
    _classCallCheck(this, Ge);
    _this26 = _callSuper(this, Ge, arguments);
    u(_this26, "name", "radialGradient");
    return _this26;
  }
  _inherits(Ge, _oe11);
  return _createClass(Ge, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "radialGradient".concat(e.colors.length);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var i, s, a, l, c;
      var t = (i = e.colors) != null ? i : [4278190080, 4294967295];
      var o = e.stops || [];
      if (o.length === 0 || o.length !== t.length) {
        var d = t.length;
        var f = 0;
        var g = o;
        for (; f < d; f++) o[f] ? (g[f] = o[f], o[f - 1] === void 0 && g[f - 2] !== void 0 && (g[f - 1] = g[f - 2] + (o[f] - g[f - 2]) / 2)) : g[f] = f * (1 / (t.length - 1));
        o = g;
      }
      return {
        colors: t,
        stops: o,
        width: (s = e.width) != null ? s : 0,
        height: (l = (a = e.height) != null ? a : e.width) != null ? l : 0,
        pivot: (c = e.pivot) != null ? c : [.5, .5]
      };
    }
  }]);
}(oe);
u(Ge, "z$__type__Props"), u(Ge, "uniforms", {
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
        return Ee(o);
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
}), u(Ge, "ColorLoop", function (e) {
  var t = "";
  for (var o = 2; o < e; o++) t += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return t;
}), u(Ge, "onColorize", function (e) {
  var t = e.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(Ge.ColorLoop(t), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var Qr = Ge;
var ct = /*#__PURE__*/function (_oe12) {
  function ct() {
    var _this27;
    _classCallCheck(this, ct);
    _this27 = _callSuper(this, ct, arguments);
    u(_this27, "name", "radialProgress");
    return _this27;
  }
  _inherits(ct, _oe12);
  return _createClass(ct, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "radialProgress";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o, i, s, a, l, c;
      return {
        width: (t = e.width) != null ? t : 10,
        progress: (o = e.progress) != null ? o : .5,
        offset: (i = e.offset) != null ? i : 0,
        range: (s = e.range) != null ? s : Math.PI * 2,
        rounded: (a = e.rounded) != null ? a : !1,
        radius: (l = e.radius) != null ? l : 1,
        color: (c = e.color) != null ? c : 4294967295
      };
    }
  }]);
}(oe);
u(ct, "z$__type__Props"), u(ct, "uniforms", {
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
      return Ee(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), u(ct, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
}), u(ct, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  "), u(ct, "onColorize", "\n    return color;\n  ");
var dt = /*#__PURE__*/function (_oe13) {
  function dt() {
    var _this28;
    _classCallCheck(this, dt);
    _this28 = _callSuper(this, dt, arguments);
    u(_this28, "name", "holePunch");
    return _this28;
  }
  _inherits(dt, _oe13);
  return _createClass(dt, null, [{
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
        radius: (t = e.radius) != null ? t : 0
      };
    }
  }]);
}(oe);
u(dt, "z$__type__Props"), u(dt, "uniforms", {
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
      return Array.isArray(t) ? t.length === 2 ? t = [t[0], t[1], t[0], t[1]] : t.length === 3 ? t = [t[0], t[1], t[2], t[0]] : t.length !== 4 && (t = [t[0], t[0], t[0], t[0]]) : typeof t == "number" && (t = [t, t, t, t]), t;
    }
  }
}), u(dt, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), u(dt, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  "), u(dt, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
var Uo = "RoundedRectangle";
var Yo = /*#__PURE__*/function (_wi) {
  function Yo(e) {
    var _this29;
    _classCallCheck(this, Yo);
    _this29 = _callSuper(this, Yo);
    u(_this29, "shType");
    _this29.shType = e, e !== Uo && console.warn("Unsupported shader:", e);
    return _this29;
  }
  _inherits(Yo, _wi);
  return _createClass(Yo, [{
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
}(wi);
var cs = /*#__PURE__*/function () {
  function cs() {
    _classCallCheck(this, cs);
    u(this, "shCache", new Map());
    u(this, "shConstructors", {});
    u(this, "attachedShader", null);
    u(this, "effectConstructors", {});
    u(this, "renderer");
    this.registerShaderType("DefaultShader", Do), this.registerShaderType("DefaultShaderBatched", Oo), this.registerShaderType("RoundedRectangle", Ur), this.registerShaderType("DynamicShader", ut), this.registerShaderType("SdfShader", Yr), this.registerEffectType("border", Ct), this.registerEffectType("borderBottom", at), this.registerEffectType("borderLeft", lt), this.registerEffectType("borderRight", it), this.registerEffectType("borderTop", st), this.registerEffectType("fadeOut", er), this.registerEffectType("linearGradient", $r), this.registerEffectType("radialGradient", Qr), this.registerEffectType("grayscale", Hr), this.registerEffectType("glitch", Tt), this.registerEffectType("radius", ot), this.registerEffectType("radialProgress", ct), this.registerEffectType("holePunch", dt);
  }
  return _createClass(cs, [{
    key: "registerShaderType",
    value: function registerShaderType(r, e) {
      this.shConstructors[r] = e;
    }
  }, {
    key: "registerEffectType",
    value: function registerEffectType(r, e) {
      this.effectConstructors[r] = e;
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
    value: function loadShader(r, e) {
      if (!this.renderer) throw new Error("Renderer is not been defined");
      var t = this.shConstructors[r];
      if (!t) throw new Error('Shader type "'.concat(r, '" is not registered'));
      if (this.renderer.mode === "canvas" && t.prototype instanceof pt) return {
        shader: new Yo(r),
        props: e
      };
      if (r === "DynamicShader") return this.loadDynamicShader(e);
      var o = t.resolveDefaults(e),
        i = t.makeCacheKey(o) || t.name;
      if (i && this.shCache.has(i)) return {
        shader: this.shCache.get(i),
        props: o
      };
      var s = new t(this.renderer, e);
      return i && this.shCache.set(i, s), {
        shader: s,
        props: o
      };
    }
  }, {
    key: "loadDynamicShader",
    value: function loadDynamicShader(r) {
      if (!this.renderer) throw new Error("Renderer is not been defined");
      var e = ut.resolveDefaults(r, this.effectConstructors),
        t = ut.makeCacheKey(e, this.effectConstructors);
      if (t && this.shCache.has(t)) return {
        shader: this.shCache.get(t),
        props: e
      };
      var o = new ut(this.renderer, r, this.effectConstructors);
      return t && this.shCache.set(t, o), {
        shader: o,
        props: e
      };
    }
  }, {
    key: "useShader",
    value: function useShader(r) {
      this.attachedShader !== r && (this.attachedShader && this.attachedShader.detach(), r.attach(), this.attachedShader = r);
    }
  }]);
}();
function ds(n) {
  return /\.(ktx|pvr)$/.test(n);
}
var hs = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(n) {
      var e;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(n);
          case 2:
            _context2.next = 4;
            return _context2.sent.arrayBuffer();
          case 4:
            e = _context2.sent;
            return _context2.abrupt("return", n.indexOf(".ktx") !== -1 ? us(e) : fs(e));
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function hs(_x3) {
      return _ref5.apply(this, arguments);
    };
  }(),
  us = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(n) {
      var r, e, t, o, i, s, a;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            r = new DataView(n), e = r.getUint32(12) === 16909060, t = [], o = {
              glInternalFormat: r.getUint32(28, e),
              pixelWidth: r.getUint32(36, e),
              pixelHeight: r.getUint32(40, e),
              numberOfMipmapLevels: r.getUint32(56, e),
              bytesOfKeyValueData: r.getUint32(60, e)
            };
            i = 64;
            i += o.bytesOfKeyValueData;
            for (s = 0; s < o.numberOfMipmapLevels; s++) {
              a = r.getUint32(i);
              i += 4, t.push(r.buffer.slice(i, a)), i += a;
            }
            return _context3.abrupt("return", {
              data: {
                glInternalFormat: o.glInternalFormat,
                mipmaps: t,
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
    return function us(_x4) {
      return _ref6.apply(this, arguments);
    };
  }(),
  fs = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(n) {
      var a, l, c, d, f, g, w, x, y, b, C, v;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            a = n, l = new Int32Array(a, 0, 13), c = l[12] + 52, d = new Uint8Array(a, c), f = [], g = {
              pixelWidth: l[7],
              pixelHeight: l[6],
              numberOfMipmapLevels: l[11] || 0
            };
            w = 0, x = g.pixelWidth || 0, y = g.pixelHeight || 0;
            for (b = 0; b < g.numberOfMipmapLevels; b++) {
              C = (x + 3 >> 2) * (y + 3 >> 2) * 8, v = new Uint8Array(a, d.byteOffset + w, C);
              f.push(v), w += C, x = x >> 1, y = y >> 1;
            }
            return _context4.abrupt("return", {
              data: {
                glInternalFormat: 36196,
                mipmaps: f,
                width: g.pixelWidth || 0,
                height: g.pixelHeight || 0,
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
    return function fs(_x5) {
      return _ref7.apply(this, arguments);
    };
  }(),
  Bt = /*#__PURE__*/function (_xo) {
    function Bt(e, t) {
      var _this30;
      _classCallCheck(this, Bt);
      _this30 = _callSuper(this, Bt, [e]);
      u(_this30, "props");
      _this30.props = Bt.resolveDefaults(t);
      return _this30;
    }
    _inherits(Bt, _xo);
    return _createClass(Bt, [{
      key: "hasAlphaChannel",
      value: function hasAlphaChannel(e) {
        return e.indexOf("image/png") !== -1;
      }
    }, {
      key: "getTextureData",
      value: function () {
        var _getTextureData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var _this$props, e, t, i, s, o;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _this$props = this.props, e = _this$props.src, t = _this$props.premultiplyAlpha;
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
                  premultiplyAlpha: t
                });
              case 5:
                if (!ds(e)) {
                  _context5.next = 7;
                  break;
                }
                return _context5.abrupt("return", hs(e));
              case 7:
                if (!this.txManager.imageWorkerManager) {
                  _context5.next = 11;
                  break;
                }
                _context5.next = 10;
                return this.txManager.imageWorkerManager.getImage(e, t);
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
                s = t != null ? t : this.hasAlphaChannel(i.type);
                _context5.next = 20;
                return createImageBitmap(i, {
                  premultiplyAlpha: s ? "premultiply" : "none",
                  colorSpaceConversion: "none",
                  imageOrientation: "none"
                });
              case 20:
                _context5.t0 = _context5.sent;
                _context5.t1 = s;
                return _context5.abrupt("return", {
                  data: _context5.t0,
                  premultiplyAlpha: _context5.t1
                });
              case 25:
                o = new Image();
                e.substr(0, 5) !== "data:" && (o.crossOrigin = "Anonymous");
                o.src = e;
                _context5.next = 30;
                return new Promise(function (i, s) {
                  o.onload = function () {
                    return i();
                  }, o.onerror = function () {
                    return s(new Error("Failed to load image"));
                  };
                }).catch(function (i) {
                  console.error(i);
                });
              case 30:
                return _context5.abrupt("return", {
                  data: o,
                  premultiplyAlpha: t != null ? t : !0
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
        var t = Bt.resolveDefaults(e);
        return t.src instanceof ImageData ? !1 : "ImageTexture,".concat(t.src, ",").concat(t.premultiplyAlpha);
      }
    }, {
      key: "resolveDefaults",
      value: function resolveDefaults(e) {
        var t, o;
        return {
          src: (t = e.src) != null ? t : "",
          premultiplyAlpha: (o = e.premultiplyAlpha) != null ? o : !0
        };
      }
    }]);
  }(xo);
u(Bt, "z$__type__Props");
var Xr = Bt;
var ps = 24;
function gs(n, r, e, t, o, i, s, a, l) {
  var c = Math.min(Math.max(s.firstLineIdx, 0), a.length),
    d = 0;
  var f = 0;
  t === "middle" ? f = (r - n) / 2 : t === "bottom" && (f = r - n);
  var w = o / i + c * r + f;
  if (!(l && w >= l / i)) return {
    sdfX: d,
    sdfY: w,
    lineIndex: c
  };
}
var _t = /*#__PURE__*/function () {
  function _t(r) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, _t);
    u(this, "iterator");
    u(this, "peekBuffer", []);
    u(this, "_lastIndex");
    this.iterator = r, this.iterator = r, this._lastIndex = e - 1, this.peekBuffer = [];
  }
  return _createClass(_t, [{
    key: "next",
    value: function next() {
      var r = this.peekBuffer.length > 0 ? this.peekBuffer.pop() : this.iterator.next();
      return r.done ? this._lastIndex = -1 : this._lastIndex++, r;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.peekBuffer.length > 0) return this.peekBuffer[0];
      var r = this.iterator.next();
      return this.peekBuffer.push(r), r;
    }
  }, {
    key: "lastIndex",
    get: function get() {
      return this._lastIndex;
    }
  }]);
}();
function Rt(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var e, t;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          e = r;
        case 1:
          if (!(e < n.length)) {
            _context6.next = 10;
            break;
          }
          t = n.codePointAt(e);
          if (!(t === void 0)) {
            _context6.next = 5;
            break;
          }
          throw new Error("Invalid Unicode code point");
        case 5:
          _context6.next = 7;
          return t;
        case 7:
          e += t <= 65535 ? 1 : 2;
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
function ms(n, r, e) {
  var t = e.shapeText(r, new _t(Rt(n, 0), 0));
  var o = 0;
  var _iterator11 = _createForOfIteratorHelper(t),
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
function xs(n, r, e, t, o, i, s, a, l, c, d, f, g, w, x, y, b, C, v) {
  L(x, "Font face must be loaded"), L(x.loaded, "Font face must be loaded"), L(x.data, "Font face must be loaded"), L(x.shaper, "Font face must be loaded");
  var m = a / x.data.info.size,
    p = l / m,
    S = i / m,
    I = c / m,
    T = g[n],
    _ = (T == null ? void 0 : T.codepointIndex) || 0,
    A = (T == null ? void 0 : T.maxX) || 0,
    E = (T == null ? void 0 : T.maxY) || 0;
  var N = A,
    B = E,
    F = r,
    z = e,
    M = 0;
  var D = {
      codepointIndex: -1,
      bufferOffset: -1,
      xStart: -1
    },
    $ = x.shaper,
    ie = {
      letterSpacing: I
    };
  var J = $.shapeText(ie, new _t(Rt(t, _), _)),
    ce,
    Ce = -1;
  var Me = [],
    Lt = s / m,
    Ft = ms(C, ie, $);
  var Qe = !0;
  for (; Qe;) {
    var be = (v === 0 || n + 1 < v) && (f !== "both" || b || z + p + x.maxCharHeight <= Lt),
      me = be ? S : S - Ft;
    var re = 0;
    var ze = z + p >= w.y1,
      Pe = z <= w.y2,
      xe = ze && Pe;
    for (; (ce = J.next()) && !ce.done;) {
      var K = ce.value;
      if (n === g.length) g.push({
        codepointIndex: K.cluster,
        maxY: B,
        maxX: N
      });else if (n > g.length) throw new Error("Unexpected lineCache length");
      if (K.codepoint === 32 || K.codepoint === 10 ? D.codepointIndex !== -1 && (D.codepointIndex = -1, re = F) : D.codepointIndex === -1 && (D.codepointIndex = K.cluster, D.bufferOffset = M, D.xStart = re), K.mapped) {
        var Mt = F + K.xOffset + K.width;
        if (f !== "none" && Mt >= me && D.codepointIndex !== -1 && D.xStart > 0) {
          if (be) {
            J = $.shapeText(ie, new _t(Rt(t, D.codepointIndex), D.codepointIndex)), M = D.bufferOffset;
            break;
          } else J = $.shapeText(ie, new _t(Rt(C, 0), 0)), F = D.xStart, M = D.bufferOffset, f = "none";
        } else {
          var De = F + K.xOffset,
            Oe = z + K.yOffset;
          if (xe) {
            Ce === -1 && (Ce = M);
            var Xe = x.getAtlasEntry(K.glyphId),
              Ke = Xe.x / x.data.common.scaleW,
              je = Xe.y / x.data.common.scaleH,
              xt = Xe.width / x.data.common.scaleW,
              yt = Xe.height / x.data.common.scaleH;
            d[M++] = De, d[M++] = Oe, d[M++] = Ke, d[M++] = je, d[M++] = De + K.width, d[M++] = Oe, d[M++] = Ke + xt, d[M++] = je, d[M++] = De, d[M++] = Oe + K.height, d[M++] = Ke, d[M++] = je + yt, d[M++] = De + K.width, d[M++] = Oe + K.height, d[M++] = Ke + xt, d[M++] = je + yt;
          }
          B = Math.max(B, Oe + K.height), N = Math.max(N, De + K.width), F += K.xAdvance;
        }
      } else if (K.codepoint === 10) {
        if (be) break;
        J = $.shapeText(ie, new _t(Rt(C, 0), 0)), f = "none";
      }
    }
    Ce !== -1 && (Me.push({
      bufferStart: Ce,
      bufferEnd: M
    }), Ce = -1), F = 0, z += p, n++, D.codepointIndex = -1, re = 0, !y && f === "both" && z > w.y2 || ce && ce.done ? Qe = !1 : be || (Qe = !1);
  }
  if (o === "center") {
    var _be = f === "none" ? N : S;
    for (var _me = 0; _me < Me.length; _me++) {
      var _re = Me[_me],
        _ze = d[_re.bufferEnd - 4] - d[_re.bufferStart],
        _Pe = (_be - _ze) / 2;
      for (var _xe = _re.bufferStart; _xe < _re.bufferEnd; _xe += 4) d[_xe] += _Pe;
    }
  } else if (o === "right") {
    var _be2 = f === "none" ? N : S;
    for (var _me2 = 0; _me2 < Me.length; _me2++) {
      var _re2 = Me[_me2],
        _ze2 = _re2.bufferEnd === _re2.bufferStart ? 0 : d[_re2.bufferEnd - 4] - d[_re2.bufferStart],
        _Pe2 = _be2 - _ze2;
      for (var _xe2 = _re2.bufferStart; _xe2 < _re2.bufferEnd; _xe2 += 4) d[_xe2] += _Pe2;
    }
  }
  return L(ce), {
    bufferNumFloats: M,
    bufferNumQuads: M / 16,
    layoutNumCharacters: ce.done ? t.length - _ : ce.value.cluster - _ + 1,
    fullyProcessed: !!ce.done,
    maxX: N,
    maxY: B
  };
}
function ys(n, r) {
  return Math.ceil(n / r) * r;
}
function vs(n, r) {
  return Math.floor(n / r) * r;
}
function ws(n, r, e, t, o, i, s, a) {
  var l = n.screen,
    c = n.sdf;
  if (!bi(s)) l.x1 = 0, l.y1 = 0, l.x2 = 0, l.y2 = 0, c.x1 = 0, c.y1 = 0, c.x2 = 0, c.y2 = 0, n.numLines = 0, n.firstLineIdx = 0;else {
    var d = s.x1 - r,
      f = d + (s.x2 - s.x1),
      g = s.y1 - e + t,
      w = vs(g - i, o || 1),
      x = ys(g + (s.y2 - s.y1) + i, o || 1);
    l.x1 = d, l.y1 = w, l.x2 = f, l.y2 = x, c.x1 = d / a, c.y1 = w / a, c.x2 = f / a, c.y2 = x / a, n.numLines = Math.ceil((x - w) / o), n.firstLineIdx = o ? Math.floor(w / o) : 0;
  }
  n.valid = !0;
}
var bs = {
    normal: 400,
    bold: 700,
    bolder: 900,
    lighter: 100
  },
  Fn = function Fn(n) {
    return typeof n == "number" ? n : bs[n] || 400;
  };
function Ss(n, r, e, t, o) {
  var i = Fn(e);
  var _iterator12 = _createForOfIteratorHelper(n),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var s = _step12.value;
      var a = s[r];
      if (!a) continue;
      if (a.size === 1) return console.warn("TrFontManager: Only one font face found for family: '".concat(r, "' - will be used for all weights and styles")), a.values().next().value;
      var l = new Map();
      var _iterator13 = _createForOfIteratorHelper(a),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var d = _step13.value;
          var f = Fn(d.descriptors.weight);
          if (f === i && d.descriptors.style === t && d.descriptors.stretch === o) return d;
          l.set(f, d);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      var c = "TrFontManager: No exact match: '".concat(r, " Weight: ").concat(i, " Style: ").concat(t, " Stretch: ").concat(o, "'");
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
var As = Wo(Ss);
var $o = /*#__PURE__*/function () {
  function $o(r) {
    _classCallCheck(this, $o);
    u(this, "textRenderers");
    this.textRenderers = r;
  }
  return _createClass($o, [{
    key: "addFontFace",
    value: function addFontFace(r) {
      for (var e in this.textRenderers) {
        var t = this.textRenderers[e];
        t && t.isFontFaceSupported(r) && t.addFontFace(r);
      }
    }
  }], [{
    key: "resolveFontFace",
    value: function resolveFontFace(r, e) {
      var t = e.fontFamily,
        o = e.fontWeight,
        i = e.fontStyle,
        s = e.fontStretch;
      return As(r, t, o, i, s);
    }
  }]);
}();
var Cs = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var Ts = /*#__PURE__*/function (_Po2) {
  function Ts(e) {
    var _this31;
    _classCallCheck(this, Ts);
    _this31 = _callSuper(this, Ts, [e]);
    u(_this31, "ssdfFontFamilies", {});
    u(_this31, "msdfFontFamilies", {});
    u(_this31, "fontFamilyArray", [_this31.ssdfFontFamilies, _this31.msdfFontFamilies]);
    u(_this31, "sdfShader");
    u(_this31, "rendererBounds");
    _this31.sdfShader = _this31.stage.shManager.loadShader("SdfShader").shader, _this31.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this31.stage.options.appWidth,
      y2: _this31.stage.options.appHeight
    };
    return _this31;
  }
  _inherits(Ts, _Po2);
  return _createClass(Ts, [{
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
          e.props.x = t, e.elementBounds.valid && (_this32.setElementBoundsX(e), !e.renderWindow.valid && Tr(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
        },
        y: function y(e, t) {
          e.props.y = t, e.elementBounds.valid && (_this32.setElementBoundsY(e), !e.renderWindow.valid && Tr(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
        },
        contain: function contain(e, t) {
          e.props.contain = t, _this32.invalidateLayoutCache(e);
        },
        width: function width(e, t) {
          e.props.width = t, e.props.contain !== "none" && _this32.invalidateLayoutCache(e);
        },
        height: function height(e, t) {
          e.props.height = t, e.props.contain === "both" && _this32.invalidateLayoutCache(e);
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
      return t in this.ssdfFontFamilies || t in this.msdfFontFamilies || t === "$$SDF_FAILURE_TEST$$";
    }
  }, {
    key: "isFontFaceSupported",
    value: function isFontFaceSupported(e) {
      return e instanceof Cn;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      L(e instanceof Cn);
      var t = e.fontFamily,
        o = e.type === "ssdf" ? this.ssdfFontFamilies : e.type === "msdf" ? this.msdfFontFamilies : void 0;
      if (!o) {
        console.warn("Invalid font face type: ".concat(e.type));
        return;
      }
      var i = o[t];
      i || (i = new Set(), o[t] = i), i.add(e);
    }
  }, {
    key: "createState",
    value: function createState(e) {
      return {
        props: e,
        status: "initialState",
        updateScheduled: !1,
        emitter: new et(),
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
      var t = e.trFontFace;
      var o = e.textH,
        i = e.lineCache,
        s = e.debugData,
        a = e.forceFullLayoutCalc;
      if (s.updateCount++, e.status === "initialState" && this.setStatus(e, "loading"), !t) {
        if (t = this.resolveFontFace(e.props), e.trFontFace = t, !t) {
          var $ = "SdfTextRenderer: Could not resolve font face for family: '".concat(e.props.fontFamily, "'");
          console.error($), this.setStatus(e, "failed", new Error($));
          return;
        }
        t.texture.setRenderableOwner(e, e.isRenderable);
      }
      if (!t.loaded) {
        t.once("loaded", function () {
          _this33.scheduleUpdateState(e);
        });
        return;
      }
      L(t.data, "Font face data should be loaded");
      var _e$props4 = e.props,
        l = _e$props4.text,
        c = _e$props4.fontSize,
        d = _e$props4.x,
        f = _e$props4.y,
        g = _e$props4.contain,
        w = _e$props4.width,
        x = _e$props4.height,
        y = _e$props4.lineHeight,
        b = _e$props4.verticalAlign,
        C = _e$props4.scrollable,
        v = _e$props4.overflowSuffix,
        m = _e$props4.maxLines,
        p = g === "both" && C ? e.props.scrollY : 0,
        S = e.renderWindow,
        I = t.data.info.size,
        T = c / I,
        _ = y / T;
      e.distanceRange = T * t.data.distanceField.distanceRange;
      var A = l.length * ps;
      var E = e.vertexBuffer;
      (!E || E.length < A) && (E = new Float32Array(A * 2));
      var N = e.elementBounds;
      if (N.valid || (this.setElementBoundsX(e), this.setElementBoundsY(e), N.valid = !0), !a && S.valid) {
        var _$ = S.screen;
        if (d + _$.x1 <= N.x1 && d + _$.x2 >= N.x2 && f - p + _$.y1 <= N.y1 && f - p + _$.y2 >= N.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        S.valid = !1, this.setStatus(e, "loading");
      }
      var _e$props5 = e.props,
        B = _e$props5.offsetY,
        F = _e$props5.textAlign;
      if (!S.valid) {
        if (!Tr(N, this.rendererBounds)) return;
        ws(S, d, f, p, y, g === "both" ? N.y2 - N.y1 : 0, N, T);
      }
      var z = gs(I, _, y, b, B, T, S, i, o);
      if (!z) {
        this.setStatus(e, "loaded");
        return;
      }
      var M = e.props.letterSpacing,
        D = xs(z.lineIndex, z.sdfX, z.sdfY, l, F, w, x, c, y, M, E, g, i, S.sdf, t, a, C, v, m);
      e.bufferUploaded = !1, e.bufferNumFloats = D.bufferNumFloats, e.bufferNumQuads = D.bufferNumQuads, e.vertexBuffer = E, e.renderWindow = S, s.lastLayoutNumCharacters = D.layoutNumCharacters, s.bufferSize = E.byteLength, D.fullyProcessed && (e.textW = D.maxX * T, e.textH = D.maxY * T), this.setStatus(e, "loaded");
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e, t, o, i, s, a) {
      var N, B, F;
      if (!e.vertexBuffer) return;
      var l = this.stage.renderer;
      L(l instanceof yo);
      var _e$props6 = e.props,
        c = _e$props6.fontSize,
        d = _e$props6.color,
        f = _e$props6.contain,
        g = _e$props6.scrollable,
        w = _e$props6.zIndex,
        x = _e$props6.debug,
        y = f === "both" && g ? e.props.scrollY : 0,
        _e$textW2 = e.textW,
        b = _e$textW2 === void 0 ? 0 : _e$textW2,
        _e$textH2 = e.textH,
        C = _e$textH2 === void 0 ? 0 : _e$textH2,
        v = e.distanceRange,
        m = e.vertexBuffer,
        p = e.bufferUploaded,
        S = e.trFontFace,
        I = e.elementBounds;
      var T = e.webGlBuffers;
      if (!T) {
        var z = l.glw,
          M = 4 * Float32Array.BYTES_PER_ELEMENT,
          D = z.createBuffer();
        L(D), e.webGlBuffers = new Si([{
          buffer: D,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: z.FLOAT,
              normalized: !1,
              stride: M,
              offset: 0
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: z.FLOAT,
              normalized: !1,
              stride: M,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }]), e.bufferUploaded = !1, L(e.webGlBuffers), T = e.webGlBuffers;
      }
      if (!p) {
        var _z = l.glw,
          _M = (N = T == null ? void 0 : T.getBuffer("a_textureCoordinate")) != null ? N : null;
        _z.arrayBufferData(_M, m, _z.STATIC_DRAW), e.bufferUploaded = !0;
      }
      if (L(S), g && f === "both") {
        L(I.valid);
        var _z2 = Ai(I, Cs);
        o.valid ? (e.clippingRect.valid = !0, o = tn(o, _z2, e.clippingRect)) : (e.clippingRect.valid = !0, o = vo(_z2, e.clippingRect));
      }
      var _ = new Ci(l.glw, l.options, T, this.sdfShader, {
          transform: t.data,
          color: Ti(d, i),
          size: c / (((B = S.data) == null ? void 0 : B.info.size) || 0),
          scrollY: y,
          distanceRange: v,
          debug: x.sdfShaderDebug
        }, i, o, {
          height: C,
          width: b
        }, 0, w, !1, s, a),
        A = (F = e.trFontFace) == null ? void 0 : F.texture;
      L(A);
      var E = this.stage.txManager.getCtxTexture(A);
      _.addTexture(E), _.length = e.bufferNumFloats, _.numQuads = e.bufferNumQuads, l.addRenderOp(_);
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(e, t) {
      var o;
      _superPropGet(Ts, "setIsRenderable", this, 3)([e, t]), (o = e.trFontFace) == null || o.texture.setRenderableOwner(e, t);
    }
  }, {
    key: "destroyState",
    value: function destroyState(e) {
      var t;
      _superPropGet(Ts, "destroyState", this, 3)([e]), (t = e.trFontFace) == null || t.texture.setRenderableOwner(e, !1);
    }
  }, {
    key: "resolveFontFace",
    value: function resolveFontFace(e) {
      return $o.resolveFontFace(this.fontFamilyArray, e);
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
        t = _e$props7.x,
        o = _e$props7.contain,
        i = _e$props7.width,
        s = e.elementBounds;
      s.x1 = t, s.x2 = o !== "none" ? t + i : 1 / 0;
    }
  }, {
    key: "setElementBoundsY",
    value: function setElementBoundsY(e) {
      var _e$props8 = e.props,
        t = _e$props8.y,
        o = _e$props8.contain,
        i = _e$props8.height,
        s = e.elementBounds;
      s.y1 = t, s.y2 = o === "both" ? t + i : 1 / 0;
    }
  }]);
}(Po);
function _s(n) {
  return n.prototype instanceof _i;
}
function Rs(_x6, _x7) {
  return _Rs.apply(this, arguments);
}
function _Rs() {
  _Rs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(n, r) {
    var e, t, o;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          console.log("Loading core extension", n);
          _context15.next = 4;
          return he(function () {
            return import(n);
          }, [], import.meta.url);
        case 4:
          e = _context15.sent;
          _context15.next = 11;
          break;
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          console.error("The core extension module at '".concat(n, "' could not be loaded.")), console.error(_context15.t0);
          return _context15.abrupt("return");
        case 11:
          if (e.default) {
            _context15.next = 14;
            break;
          }
          console.error("The core extension module at '".concat(n, "' does not have a default export."));
          return _context15.abrupt("return");
        case 14:
          t = e.default;
          if (!_s(t)) {
            _context15.next = 27;
            break;
          }
          o = new t();
          _context15.prev = 17;
          _context15.next = 20;
          return o.run(r);
        case 20:
          _context15.next = 25;
          break;
        case 22:
          _context15.prev = 22;
          _context15.t1 = _context15["catch"](17);
          console.error("The core extension at '".concat(n, "' threw an error.")), console.error(_context15.t1);
        case 25:
          _context15.next = 28;
          break;
        case 27:
          console.error("The core extension at '".concat(n, "' does not extend CoreExtension."));
        case 28:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7], [17, 22]]);
  }));
  return _Rs.apply(this, arguments);
}
function Ho(n) {
  var r = {
      boolean: !0,
      string: !0,
      number: !0,
      undefined: !0
    },
    e = Object.keys(n);
  for (var t = 0; t < e.length; t++) {
    var o = e[t];
    if (!o) continue;
    var i = n[o],
      s = _typeof(i);
    s === "string" && i.length > 2048 && (console.warn("Custom Data value for ".concat(o, " is too long, it will be truncated to 2048 characters")), n[o] = i.substring(0, 2048)), r[s] || (console.warn("Custom Data value for ".concat(o, " is not a boolean, string, or number, it will be ignored")), delete n[o]);
  }
  return n;
}
var Is = /*#__PURE__*/function (_et) {
  function Is(e, t, o) {
    var _this34;
    _classCallCheck(this, Is);
    var C, v, m, p, S;
    _this34 = _callSuper(this, Is);
    u(_this34, "root", null);
    u(_this34, "driver");
    u(_this34, "canvas");
    u(_this34, "settings");
    u(_this34, "inspector", null);
    u(_this34, "nodes", new Map());
    u(_this34, "nextTextureId", 1);
    u(_this34, "textureTracker");
    var i = {
      appWidth: e.appWidth || 1920,
      appHeight: e.appHeight || 1080,
      txMemByteThreshold: e.txMemByteThreshold || 124e6,
      boundsMargin: e.boundsMargin || 0,
      deviceLogicalPixelRatio: e.deviceLogicalPixelRatio || 1,
      devicePhysicalPixelRatio: e.devicePhysicalPixelRatio || window.devicePixelRatio,
      clearColor: (C = e.clearColor) != null ? C : 0,
      coreExtensionModule: e.coreExtensionModule || null,
      experimental_FinalizationRegistryTextureUsageTracker: (v = e.experimental_FinalizationRegistryTextureUsageTracker) != null ? v : !1,
      textureCleanupOptions: e.textureCleanupOptions || {},
      fpsUpdateInterval: e.fpsUpdateInterval || 0,
      numImageWorkers: e.numImageWorkers !== void 0 ? e.numImageWorkers : 2,
      enableContextSpy: (m = e.enableContextSpy) != null ? m : !1,
      enableInspector: (p = e.enableInspector) != null ? p : !1,
      renderMode: (S = e.renderMode) != null ? S : "webgl"
    };
    _this34.settings = i;
    var s = i.appWidth,
      a = i.appHeight,
      l = i.deviceLogicalPixelRatio,
      c = i.devicePhysicalPixelRatio,
      d = i.enableInspector,
      f = function f(I) {
        _this34.driver.releaseTexture(I);
      },
      g = i.experimental_FinalizationRegistryTextureUsageTracker && typeof FinalizationRegistry == "function";
    _this34.textureTracker = g ? new es(f) : new Ji(f, _this34.settings.textureCleanupOptions);
    var w = s * l,
      x = a * l;
    _this34.driver = o;
    var y = document.createElement("canvas");
    _this34.canvas = y, y.width = w * c, y.height = x * c, y.style.width = "".concat(w, "px"), y.style.height = "".concat(x, "px");
    var b;
    if (typeof t == "string" ? b = document.getElementById(t) : b = t, !b) throw new Error("Could not find target element");
    o.onCreateNode = function (I) {
      _this34.nodes.set(I.id, I);
    }, o.onBeforeDestroyNode = function (I) {
      _this34.nodes.delete(I.id);
    }, o.onFpsUpdate = function (I) {
      _this34.emit("fpsUpdate", I);
    }, o.onFrameTick = function (I) {
      _this34.emit("frameTick", I);
    }, o.onIdle = function () {
      _this34.emit("idle");
    }, b.appendChild(y), d && !mo() && (_this34.inspector = new rs(y, i));
    return _this34;
  }
  _inherits(Is, _et);
  return _createClass(Is, [{
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
      var i, s, a, l, c, d, f, g, w, x, y, b, C, v, m, p, S, I, T;
      var t = (i = e.fontSize) != null ? i : 16,
        o = _objectSpread(_objectSpread({}, this.resolveNodeDefaults(e)), {}, {
          text: (s = e.text) != null ? s : "",
          textRendererOverride: (a = e.textRendererOverride) != null ? a : null,
          fontSize: t,
          fontFamily: (l = e.fontFamily) != null ? l : "sans-serif",
          fontStyle: (c = e.fontStyle) != null ? c : "normal",
          fontWeight: (d = e.fontWeight) != null ? d : "normal",
          fontStretch: (f = e.fontStretch) != null ? f : "normal",
          textAlign: (g = e.textAlign) != null ? g : "left",
          contain: (w = e.contain) != null ? w : "none",
          scrollable: (x = e.scrollable) != null ? x : !1,
          scrollY: (y = e.scrollY) != null ? y : 0,
          offsetY: (b = e.offsetY) != null ? b : 0,
          letterSpacing: (C = e.letterSpacing) != null ? C : 0,
          lineHeight: (v = e.lineHeight) != null ? v : t,
          maxLines: (m = e.maxLines) != null ? m : 0,
          textBaseline: (p = e.textBaseline) != null ? p : "alphabetic",
          verticalAlign: (S = e.verticalAlign) != null ? S : "top",
          overflowSuffix: (I = e.overflowSuffix) != null ? I : "...",
          debug: (T = e.debug) != null ? T : {}
        });
      return this.inspector ? this.inspector.createTextNode(this.driver, o) : this.driver.createTextNode(o);
    }
  }, {
    key: "resolveNodeDefaults",
    value: function resolveNodeDefaults(e) {
      var c, d, f, g, w, x, y, b, C, v, m, p, S, I, T, _, A, E, N, B, F, z, M, D, $, ie, J, ce, Ce, Me, Lt, Ft, Qe, be, me, re, ze, Pe, xe, K, Mt, De, Oe, Xe, Ke, je, xt, yt;
      var t = (c = e.color) != null ? c : 4294967295,
        o = (g = (f = (d = e.colorTl) != null ? d : e.colorTop) != null ? f : e.colorLeft) != null ? g : t,
        i = (y = (x = (w = e.colorTr) != null ? w : e.colorTop) != null ? x : e.colorRight) != null ? y : t,
        s = (v = (C = (b = e.colorBl) != null ? b : e.colorBottom) != null ? C : e.colorLeft) != null ? v : t,
        a = (S = (p = (m = e.colorBr) != null ? m : e.colorBottom) != null ? p : e.colorRight) != null ? S : t,
        l = Ho((I = e.data) != null ? I : {});
      return {
        x: (T = e.x) != null ? T : 0,
        y: (_ = e.y) != null ? _ : 0,
        width: (A = e.width) != null ? A : 0,
        height: (E = e.height) != null ? E : 0,
        alpha: (N = e.alpha) != null ? N : 1,
        autosize: (B = e.autosize) != null ? B : !1,
        clipping: (F = e.clipping) != null ? F : !1,
        color: t,
        colorTop: (z = e.colorTop) != null ? z : t,
        colorBottom: (M = e.colorBottom) != null ? M : t,
        colorLeft: (D = e.colorLeft) != null ? D : t,
        colorRight: ($ = e.colorRight) != null ? $ : t,
        colorBl: s,
        colorBr: a,
        colorTl: o,
        colorTr: i,
        zIndex: (ie = e.zIndex) != null ? ie : 0,
        zIndexLocked: (J = e.zIndexLocked) != null ? J : 0,
        parent: (ce = e.parent) != null ? ce : null,
        texture: (Ce = e.texture) != null ? Ce : null,
        shader: (Me = e.shader) != null ? Me : null,
        src: (Lt = e.src) != null ? Lt : "",
        scale: (Ft = e.scale) != null ? Ft : null,
        scaleX: (be = (Qe = e.scaleX) != null ? Qe : e.scale) != null ? be : 1,
        scaleY: (re = (me = e.scaleY) != null ? me : e.scale) != null ? re : 1,
        mount: (ze = e.mount) != null ? ze : 0,
        mountX: (xe = (Pe = e.mountX) != null ? Pe : e.mount) != null ? xe : 0,
        mountY: (Mt = (K = e.mountY) != null ? K : e.mount) != null ? Mt : 0,
        pivot: (De = e.pivot) != null ? De : .5,
        pivotX: (Xe = (Oe = e.pivotX) != null ? Oe : e.pivot) != null ? Xe : .5,
        pivotY: (je = (Ke = e.pivotY) != null ? Ke : e.pivot) != null ? je : .5,
        rotation: (xt = e.rotation) != null ? xt : 0,
        rtt: (yt = e.rtt) != null ? yt : !1,
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
    value: function createTexture(e, t, o) {
      var i = this.nextTextureId++,
        s = {
          descType: "texture",
          txType: e,
          props: t,
          options: _objectSpread(_objectSpread({}, o), {}, {
            id: i
          })
        };
      return this.textureTracker.registerTexture(s), s;
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
}(et);
var ks = /*#__PURE__*/function (_et2) {
  function ks(e, t, o) {
    var _this35;
    _classCallCheck(this, ks);
    _this35 = _callSuper(this, ks);
    u(_this35, "node");
    u(_this35, "props");
    u(_this35, "settings");
    u(_this35, "propStartValues", {});
    u(_this35, "restoreValues", {});
    u(_this35, "progress", 0);
    u(_this35, "delayFor", 0);
    u(_this35, "timingFunction");
    u(_this35, "propsList");
    _this35.node = e, _this35.props = t, _this35.settings = o, _this35.propStartValues = {}, _this35.propsList = Object.keys(t), _this35.propsList.forEach(function (i) {
      _this35.propStartValues[i] = e[i];
    }), _this35.timingFunction = function (i) {
      return i;
    }, o.easing && typeof o.easing == "string" && (_this35.timingFunction = Ri(o.easing)), _this35.delayFor = o.delay || 0;
    return _this35;
  }
  _inherits(ks, _et2);
  return _createClass(ks, [{
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
          o = _this37.propStartValues[e];
        _this37.props[e] = o, _this37.propStartValues[e] = t;
      }), this.settings.loop || (this.settings.stopMethod = !1);
    }
  }, {
    key: "applyEasing",
    value: function applyEasing(e, t, o) {
      return (this.timingFunction(e) || e) * (o - t) + t;
    }
  }, {
    key: "update",
    value: function update(e) {
      var _this$settings = this.settings,
        t = _this$settings.duration,
        o = _this$settings.loop,
        i = _this$settings.easing,
        s = _this$settings.stopMethod;
      if (!t) {
        this.emit("finished", {});
        return;
      }
      if (this.delayFor > 0) {
        this.delayFor -= e;
        return;
      }
      if (this.delayFor <= 0 && this.progress === 0 && this.emit("start", {}), this.progress += e / t, this.progress > 1 && (this.progress = o ? 0 : 1, s)) {
        this.emit("finished", {});
        return;
      }
      for (var a = 0; a < this.propsList.length; a++) {
        var l = this.propsList[a],
          c = this.props[l],
          d = this.propStartValues[l],
          f = c;
        if (l.indexOf("color") !== -1) {
          if (d === f) {
            this.node[l] = d;
            continue;
          }
          if (i) {
            var g = this.timingFunction(this.progress) || this.progress,
              w = Tn(d, f, g);
            this.node[l] = w;
            continue;
          }
          this.node[l] = Tn(d, f, this.progress);
          continue;
        }
        if (i) {
          this.node[l] = this.applyEasing(this.progress, d, f);
          continue;
        }
        this.node[l] = d + (f - d) * this.progress;
      }
      this.progress === 1 && this.emit("finished", {});
    }
  }]);
}(et);
var Bs = /*#__PURE__*/function () {
  function Bs(r, e) {
    _classCallCheck(this, Bs);
    u(this, "manager");
    u(this, "animation");
    u(this, "startedPromise", null);
    u(this, "startedResolve", null);
    u(this, "stoppedPromise", null);
    u(this, "stoppedResolve", null);
    u(this, "state");
    this.manager = r, this.animation = e, this.state = "stopped";
  }
  return _createClass(Bs, [{
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
      var r = this.startedPromise;
      return L(r), r;
    }
  }, {
    key: "waitUntilStopped",
    value: function waitUntilStopped() {
      this.makeStoppedPromise();
      var r = this.stoppedPromise;
      return L(r), r;
    }
  }, {
    key: "makeStartedPromise",
    value: function makeStartedPromise() {
      var _this38 = this;
      this.startedResolve === null && (this.startedPromise = new Promise(function (r) {
        _this38.startedResolve = r;
      }));
    }
  }, {
    key: "makeStoppedPromise",
    value: function makeStoppedPromise() {
      var _this39 = this;
      this.stoppedResolve === null && (this.stoppedPromise = new Promise(function (r) {
        _this39.stoppedResolve = r;
      }));
    }
  }, {
    key: "started",
    value: function started() {
      L(this.startedResolve), this.startedResolve(this), this.startedResolve = null;
    }
  }, {
    key: "finished",
    value: function finished() {
      L(this.stoppedResolve);
      var _this$animation$setti = this.animation.settings,
        r = _this$animation$setti.loop,
        e = _this$animation$setti.stopMethod;
      if (e === "reverse") {
        this.animation.reverse(), this.start();
        return;
      }
      this.stoppedResolve(), this.stoppedResolve = null, !r && this.manager.unregisterAnimation(this.animation);
    }
  }]);
}();
var G = 0,
  q = 3,
  le = 6,
  j = 1,
  Z = 4,
  de = 7,
  ye = 2,
  ve = 5,
  we = 8;
var ue = /*#__PURE__*/function () {
  function ue(r) {
    _classCallCheck(this, ue);
    u(this, "data");
    r ? (this.data = new Float32Array(9), this.data[G] = r[0], this.data[q] = r[3], this.data[le] = r[6], this.data[j] = r[1], this.data[Z] = r[4], this.data[de] = r[7], this.data[ye] = r[2], this.data[ve] = r[5], this.data[we] = r[8]) : this.data = new Float32Array(9);
  }
  return _createClass(ue, [{
    key: "translate",
    value: function translate(r, e) {
      return this.data[le] = this.data[G] * r + this.data[q] * e + this.data[le], this.data[de] = this.data[j] * r + this.data[Z] * e + this.data[de], this;
    }
  }, {
    key: "scale",
    value: function scale(r, e) {
      return this.data[G] = this.data[G] * r, this.data[q] = this.data[q] * e, this.data[j] = this.data[j] * r, this.data[Z] = this.data[Z] * e, this;
    }
  }, {
    key: "rotate",
    value: function rotate(r) {
      if (r === 0 || !(r % Math.PI * 2)) return this;
      var e = Math.cos(r),
        t = Math.sin(r),
        o = this.data[G] * e + this.data[q] * t,
        i = this.data[q] * e - this.data[G] * t,
        s = this.data[j] * e + this.data[Z] * t,
        a = this.data[Z] * e - this.data[j] * t;
      return this.data[G] = o, this.data[q] = i, this.data[j] = s, this.data[Z] = a, this;
    }
  }, {
    key: "multiply",
    value: function multiply(r) {
      return ue.multiply(this, r, this);
    }
  }, {
    key: "tx",
    get: function get() {
      return this.data[le];
    }
  }, {
    key: "ty",
    get: function get() {
      return this.data[de];
    }
  }, {
    key: "ta",
    get: function get() {
      return this.data[G];
    }
  }, {
    key: "tb",
    get: function get() {
      return this.data[q];
    }
  }, {
    key: "tc",
    get: function get() {
      return this.data[j];
    }
  }, {
    key: "td",
    get: function get() {
      return this.data[Z];
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(r, e) {
      return [this.data[G] * r + this.data[q] * e + this.data[le], this.data[j] * r + this.data[Z] * e + this.data[j]];
    }
  }], [{
    key: "temp",
    get: function get() {
      return Es;
    }
  }, {
    key: "multiply",
    value: function multiply(r, e, t) {
      var o = r.data[G] * e.data[G] + r.data[q] * e.data[j] + r.data[le] * e.data[ye],
        i = r.data[G] * e.data[q] + r.data[q] * e.data[Z] + r.data[le] * e.data[ve],
        s = r.data[G] * e.data[le] + r.data[q] * e.data[de] + r.data[le] * e.data[we],
        a = r.data[j] * e.data[G] + r.data[Z] * e.data[j] + r.data[de] * e.data[ye],
        l = r.data[j] * e.data[q] + r.data[Z] * e.data[Z] + r.data[de] * e.data[ve],
        c = r.data[j] * e.data[le] + r.data[Z] * e.data[de] + r.data[de] * e.data[we],
        d = r.data[ye] * e.data[G] + r.data[ve] * e.data[j] + r.data[we] * e.data[ye],
        f = r.data[ye] * e.data[q] + r.data[ve] * e.data[Z] + r.data[we] * e.data[ve],
        g = r.data[ye] * e.data[le] + r.data[ve] * e.data[de] + r.data[we] * e.data[we];
      return t || (t = new ue()), t.data[G] = o, t.data[q] = i, t.data[le] = s, t.data[j] = a, t.data[Z] = l, t.data[de] = c, t.data[ye] = d, t.data[ve] = f, t.data[we] = g, t;
    }
  }, {
    key: "identity",
    value: function identity(r) {
      return r || (r = new ue()), r.data[G] = 1, r.data[q] = 0, r.data[le] = 0, r.data[j] = 0, r.data[Z] = 1, r.data[de] = 0, r.data[ye] = 0, r.data[ve] = 0, r.data[we] = 1, r;
    }
  }, {
    key: "translate",
    value: function translate(r, e, t) {
      return t || (t = new ue()), t.data[G] = 1, t.data[q] = 0, t.data[le] = r, t.data[j] = 0, t.data[Z] = 1, t.data[de] = e, t.data[ye] = 0, t.data[ve] = 0, t.data[we] = 1, t;
    }
  }, {
    key: "scale",
    value: function scale(r, e, t) {
      return t || (t = new ue()), t.data[G] = r, t.data[q] = 0, t.data[le] = 0, t.data[j] = 0, t.data[Z] = e, t.data[de] = 0, t.data[ye] = 0, t.data[ve] = 0, t.data[we] = 1, t;
    }
  }, {
    key: "rotate",
    value: function rotate(r, e) {
      var t = Math.cos(r),
        o = Math.sin(r);
      return e || (e = new ue()), e.data[G] = t, e.data[q] = -o, e.data[le] = 0, e.data[j] = o, e.data[Z] = t, e.data[de] = 0, e.data[ye] = 0, e.data[ve] = 0, e.data[we] = 1, e;
    }
  }, {
    key: "copy",
    value: function copy(r, e, t) {
      return e || (e = new ue()), e.data[0] = r.data[0], e.data[1] = r.data[1], e.data[2] = r.data[2], e.data[3] = r.data[3], e.data[4] = r.data[4], e.data[5] = r.data[5], e.data[6] = r.data[6], e.data[7] = r.data[7], e.data[8] = r.data[8], e;
    }
  }]);
}();
var Es = new ue(),
  Pt = 0,
  Dt = 2,
  Ot = 4,
  Wt = 6,
  Ut = 1,
  Yt = 3,
  $t = 5,
  Ht = 7;
var cr = /*#__PURE__*/function () {
  function cr(r) {
    _classCallCheck(this, cr);
    u(this, "data");
    this.data = new Float32Array(8), r && (this.data[Pt] = r[Pt], this.data[Dt] = r[Dt], this.data[Ot] = r[Ot], this.data[Wt] = r[Wt], this.data[Ut] = r[Ut], this.data[Yt] = r[Yt], this.data[$t] = r[$t], this.data[Ht] = r[Ht]);
  }
  return _createClass(cr, [{
    key: "x1",
    get: function get() {
      return this.data[Pt];
    }
  }, {
    key: "x2",
    get: function get() {
      return this.data[Dt];
    }
  }, {
    key: "x3",
    get: function get() {
      return this.data[Ot];
    }
  }, {
    key: "x4",
    get: function get() {
      return this.data[Wt];
    }
  }, {
    key: "y1",
    get: function get() {
      return this.data[Ut];
    }
  }, {
    key: "y2",
    get: function get() {
      return this.data[Yt];
    }
  }, {
    key: "y3",
    get: function get() {
      return this.data[$t];
    }
  }, {
    key: "y4",
    get: function get() {
      return this.data[Ht];
    }
  }], [{
    key: "translate",
    value: function translate(r, e, t, o, i, s, a, l, c) {
      return c || (c = new cr()), c.data[Pt] = r, c.data[Dt] = t, c.data[Ot] = i, c.data[Wt] = a, c.data[Ut] = e, c.data[Yt] = o, c.data[$t] = s, c.data[Ht] = l, c;
    }
  }]);
}();
var V;
(function (n) {
  n[n.Init = 0] = "Init", n[n.OutOfBounds = 2] = "OutOfBounds", n[n.InBounds = 4] = "InBounds", n[n.InViewport = 8] = "InViewport";
})(V || (V = {}));
var Ze = new Map();
Ze.set(V.Init, "init");
Ze.set(V.OutOfBounds, "outOfBounds");
Ze.set(V.InBounds, "inBounds");
Ze.set(V.InViewport, "inViewport");
var k;
(function (n) {
  n[n.Children = 1] = "Children", n[n.ScaleRotate = 2] = "ScaleRotate", n[n.Local = 4] = "Local", n[n.Global = 8] = "Global", n[n.Clipping = 16] = "Clipping", n[n.CalculatedZIndex = 32] = "CalculatedZIndex", n[n.ZIndexSortedChildren = 64] = "ZIndexSortedChildren", n[n.PremultipliedColors = 128] = "PremultipliedColors", n[n.WorldAlpha = 256] = "WorldAlpha", n[n.RenderState = 512] = "RenderState", n[n.IsRenderable = 1024] = "IsRenderable", n[n.RenderTexture = 2048] = "RenderTexture", n[n.ParentRenderTexture = 4096] = "ParentRenderTexture", n[n.None = 0] = "None", n[n.All = 8191] = "All";
})(k || (k = {}));
var ln = /*#__PURE__*/function (_et3) {
  function ln(e, t) {
    var _this40;
    _classCallCheck(this, ln);
    _this40 = _callSuper(this, ln);
    u(_this40, "stage");
    u(_this40, "children", []);
    u(_this40, "props");
    u(_this40, "updateType", k.All);
    u(_this40, "globalTransform");
    u(_this40, "scaleRotateTransform");
    u(_this40, "localTransform");
    u(_this40, "renderCoords");
    u(_this40, "renderBound");
    u(_this40, "strictBound");
    u(_this40, "preloadBound");
    u(_this40, "clippingRect", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      valid: !1
    });
    u(_this40, "isRenderable", !1);
    u(_this40, "renderState", V.Init);
    u(_this40, "worldAlpha", 1);
    u(_this40, "premultipliedColorTl", 0);
    u(_this40, "premultipliedColorTr", 0);
    u(_this40, "premultipliedColorBl", 0);
    u(_this40, "premultipliedColorBr", 0);
    u(_this40, "calcZIndex", 0);
    u(_this40, "hasRTTupdates", !1);
    u(_this40, "parentHasRenderTexture", !1);
    u(_this40, "onTextureLoaded", function (e, t) {
      _this40.autosizeNode(t), _this40.stage.requestRender(), _this40.parentHasRenderTexture && _this40.setRTTUpdates(1), _this40.emit("loaded", {
        type: "texture",
        dimensions: t
      });
    });
    u(_this40, "onTextureFailed", function (e, t) {
      _this40.emit("failed", {
        type: "texture",
        error: t
      });
    });
    u(_this40, "onTextureFreed", function (e) {
      _this40.emit("freed", {
        type: "texture"
      });
    });
    _this40.stage = e, _this40.props = _objectSpread(_objectSpread({}, t), {}, {
      parent: null
    }), _this40.parent = t.parent, _this40.rtt = t.rtt, _this40.updateScaleRotateTransform();
    return _this40;
  }
  _inherits(ln, _et3);
  return _createClass(ln, [{
    key: "loadTexture",
    value: function loadTexture(e, t) {
      var _this41 = this;
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.props.texture && this.unloadTexture();
      var i = this.stage.txManager,
        s = i.loadTexture(e, t, o);
      this.props.texture = s, this.props.textureOptions = o, this.setUpdateType(k.IsRenderable), queueMicrotask(function () {
        s.state === "loaded" ? _this41.onTextureLoaded(s, s.dimensions) : s.state === "failed" ? _this41.onTextureFailed(s, s.error) : s.state === "freed" && _this41.onTextureFreed(s), s.on("loaded", _this41.onTextureLoaded), s.on("failed", _this41.onTextureFailed), s.on("freed", _this41.onTextureFreed);
      });
    }
  }, {
    key: "unloadTexture",
    value: function unloadTexture() {
      if (this.props.texture) {
        var e = this.props.texture;
        e.off("loaded", this.onTextureLoaded), e.off("failed", this.onTextureFailed), e.off("freed", this.onTextureFreed), e.setRenderableOwner(this, !1);
      }
      this.props.texture = null, this.props.textureOptions = null, this.setUpdateType(k.IsRenderable);
    }
  }, {
    key: "autosizeNode",
    value: function autosizeNode(e) {
      this.autosize && (this.width = e.width, this.height = e.height);
    }
  }, {
    key: "loadShader",
    value: function loadShader(e, t) {
      var o = this.stage.renderer.getShaderManager();
      L(o);
      var _o$loadShader = o.loadShader(e, t),
        i = _o$loadShader.shader,
        s = _o$loadShader.props;
      this.props.shader = i, this.props.shaderProps = s, this.setUpdateType(k.IsRenderable);
    }
  }, {
    key: "setUpdateType",
    value: function setUpdateType(e) {
      this.updateType |= e;
      var t = this.props.parent;
      t && !(t.updateType & k.Children) && t.setUpdateType(k.Children), this.parentHasRenderTexture && this.setRTTUpdates(e);
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
      this.scaleRotateTransform = ue.rotate(this.props.rotation, this.scaleRotateTransform).scale(this.props.scaleX, this.props.scaleY);
    }
  }, {
    key: "updateLocalTransform",
    value: function updateLocalTransform() {
      L(this.scaleRotateTransform);
      var e = this.props.pivotX * this.props.width,
        t = this.props.pivotY * this.props.height,
        o = this.props.mountX * this.props.width,
        i = this.props.mountY * this.props.height;
      this.localTransform = ue.translate(e - o + this.props.x, t - i + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-e, -t), this.setUpdateType(k.Global);
    }
  }, {
    key: "update",
    value: function update(e, t) {
      var _this42 = this;
      var s;
      this.updateType & k.ScaleRotate && (this.updateScaleRotateTransform(), this.setUpdateType(k.Local)), this.updateType & k.Local && (this.updateLocalTransform(), this.setUpdateType(k.Global));
      var o = this.props.parent;
      var i = k.None;
      if (this.updateType & k.ParentRenderTexture) {
        var a = this.parent;
        for (; a;) a.rtt && (this.parentHasRenderTexture = !0), a = a.parent;
      }
      this.updateType ^ k.All && this.updateType & k.RenderTexture && this.children.forEach(function (a) {
        a.setUpdateType(k.All);
      }), this.updateType & k.Global && (L(this.localTransform), this.globalTransform = ue.copy((o == null ? void 0 : o.globalTransform) || this.localTransform, this.globalTransform), this.parentHasRenderTexture && (s = this.props.parent) != null && s.rtt && (this.globalTransform = ue.identity()), o && this.globalTransform.multiply(this.localTransform), this.calculateRenderCoords(), this.updateBoundingRect(), this.setUpdateType(k.Clipping | k.RenderState | k.Children), i |= k.Global), this.updateType & k.Clipping && (this.calculateClippingRect(t), this.setUpdateType(k.Children), i |= k.Clipping), this.updateType & k.WorldAlpha && (o ? this.worldAlpha = o.worldAlpha * this.props.alpha : this.worldAlpha = this.props.alpha, this.setUpdateType(k.Children | k.PremultipliedColors | k.IsRenderable), i |= k.WorldAlpha), this.updateType & k.PremultipliedColors && (this.premultipliedColorTl = St(this.props.colorTl, this.worldAlpha, !0), this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl : (this.premultipliedColorTr = St(this.props.colorTr, this.worldAlpha, !0), this.premultipliedColorBl = St(this.props.colorBl, this.worldAlpha, !0), this.premultipliedColorBr = St(this.props.colorBr, this.worldAlpha, !0))), this.updateType & k.RenderState && (this.updateRenderState(t), this.setUpdateType(k.IsRenderable)), this.updateType & k.IsRenderable && this.updateIsRenderable(), o && this.updateType & k.CalculatedZIndex && (this.calculateZIndex(), o.setUpdateType(k.ZIndexSortedChildren)), this.updateType & k.Children && this.children.length && !this.rtt && this.children.forEach(function (a) {
        a.setUpdateType(i), a.updateType !== 0 && a.update(e, _this42.clippingRect);
      }), this.updateType & k.ZIndexSortedChildren && this.sortChildren(), this.updateType = 0;
    }
  }, {
    key: "checkRenderProps",
    value: function checkRenderProps() {
      return this.props.texture ? !0 : !this.props.width || !this.props.height ? !1 : !!(this.props.shader || this.props.clipping || this.props.color !== 0 || this.props.colorTop !== 0 || this.props.colorBottom !== 0 || this.props.colorLeft !== 0 || this.props.colorRight !== 0 || this.props.colorTl !== 0 || this.props.colorTr !== 0 || this.props.colorBl !== 0 || this.props.colorBr !== 0);
    }
  }, {
    key: "checkRenderBounds",
    value: function checkRenderBounds(e) {
      L(this.renderBound);
      var t = e.width || this.stage.root.width,
        o = e.height || this.stage.root.height;
      this.strictBound = ht(e.x, e.y, e.x + t, e.y + o, this.strictBound);
      var i = this.stage.boundsMargin;
      return this.preloadBound = ht(e.x - i[3], e.y - i[0], e.x + t + i[1], e.y + o + i[2], this.preloadBound), _n(this.renderBound, this.strictBound) ? V.InViewport : _n(this.renderBound, this.preloadBound) ? V.InBounds : V.OutOfBounds;
    }
  }, {
    key: "updateRenderState",
    value: function updateRenderState(e) {
      var t = this.checkRenderBounds(e);
      if (t !== this.renderState) {
        var o = this.renderState;
        this.renderState = t, o === V.InViewport && this.emit("outOfViewport", {
          previous: o,
          current: t
        }), o < V.InBounds && t === V.InViewport ? (this.emit(Ze.get(V.InBounds), {
          previous: o,
          current: t
        }), o = V.InBounds) : o > V.InBounds && t === V.OutOfBounds && (this.emit(Ze.get(V.InBounds), {
          previous: o,
          current: t
        }), o = V.InBounds);
        var i = Ze.get(t);
        L(i), this.emit(i, {
          previous: o,
          current: t
        });
      }
    }
  }, {
    key: "setRenderState",
    value: function setRenderState(e) {
      e !== this.renderState && (this.renderState = e, this.emit(V[e]));
    }
  }, {
    key: "updateIsRenderable",
    value: function updateIsRenderable() {
      var e;
      this.worldAlpha === 0 || !this.checkRenderProps() ? e = !1 : e = this.renderState > V.OutOfBounds, this.isRenderable !== e && (this.isRenderable = e, this.onChangeIsRenderable(e));
    }
  }, {
    key: "onChangeIsRenderable",
    value: function onChangeIsRenderable(e) {
      var t;
      (t = this.props.texture) == null || t.setRenderableOwner(this, e);
    }
  }, {
    key: "calculateRenderCoords",
    value: function calculateRenderCoords() {
      var e = this.width,
        t = this.height,
        o = this.globalTransform;
      L(o);
      var i = o.tx,
        s = o.ty,
        a = o.ta,
        l = o.tb,
        c = o.tc,
        d = o.td;
      if (l === 0 && c === 0) {
        var f = i,
          g = i + e * a,
          w = s,
          x = s + t * d;
        this.renderCoords = cr.translate(f, w, g, w, g, x, f, x, this.renderCoords);
      } else this.renderCoords = cr.translate(i, s, i + e * a, s + e * c, i + e * a + t * l, s + e * c + t * d, i + t * l, s + t * d, this.renderCoords);
    }
  }, {
    key: "updateBoundingRect",
    value: function updateBoundingRect() {
      var e = this.renderCoords,
        t = this.globalTransform;
      L(t), L(e);
      var o = t.tb,
        i = t.tc,
        s = e.x1,
        a = e.y1,
        l = e.x3,
        c = e.y3;
      if (o === 0 || i === 0) this.renderBound = ht(s, a, l, c, this.renderBound);else {
        var d = e.x2,
          f = e.x4,
          g = e.y2,
          w = e.y4;
        this.renderBound = ht(Math.min(s, d, l, f), Math.min(a, g, c, w), Math.max(s, d, l, f), Math.max(a, g, c, w), this.renderBound);
      }
    }
  }, {
    key: "calculateClippingRect",
    value: function calculateClippingRect(e) {
      L(this.globalTransform);
      var t = this.clippingRect,
        o = this.props,
        i = this.globalTransform,
        s = o.clipping,
        a = i.tb !== 0 || i.tc !== 0;
      s && !a ? (t.x = i.tx, t.y = i.ty, t.width = this.width * i.ta, t.height = this.height * i.td, t.valid = !0) : t.valid = !1, e.valid && t.valid ? tn(e, t, t) : e.valid && (vo(e, t), t.valid = !0);
    }
  }, {
    key: "calculateZIndex",
    value: function calculateZIndex() {
      var s, a;
      var e = this.props,
        t = e.zIndex || 0,
        o = ((s = e.parent) == null ? void 0 : s.zIndex) || 0;
      var i = t;
      (a = e.parent) != null && a.zIndexLocked && (i = t < o ? t : o), this.calcZIndex = i;
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
        t = _this$props2.width,
        o = _this$props2.height,
        i = _this$props2.texture,
        s = _this$props2.textureOptions,
        a = _this$props2.shader,
        l = _this$props2.shaderProps,
        c = _this$props2.rtt;
      if (this.parentHasRenderTexture && (!e.renderToTextureActive || this.parentRenderTexture !== e.activeRttNode)) return;
      var d = this.premultipliedColorTl,
        f = this.premultipliedColorTr,
        g = this.premultipliedColorBl,
        w = this.premultipliedColorBr,
        x = this.zIndex,
        y = this.worldAlpha,
        b = this.globalTransform,
        C = this.clippingRect;
      L(b), e.addQuad({
        width: t,
        height: o,
        colorTl: d,
        colorTr: f,
        colorBl: g,
        colorBr: w,
        texture: i,
        textureOptions: s,
        zIndex: x,
        shader: a,
        shaderProps: l,
        alpha: y,
        clippingRect: C,
        tx: b.tx,
        ty: b.ty,
        ta: b.ta,
        tb: b.tb,
        tc: b.tc,
        td: b.td,
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
      this.props.x !== e && (this.props.x = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "absX",
    get: function get() {
      var e, t, o;
      return this.props.x + (((e = this.props.parent) == null ? void 0 : e.absX) || ((o = (t = this.props.parent) == null ? void 0 : t.globalTransform) == null ? void 0 : o.tx) || 0);
    }
  }, {
    key: "absY",
    get: function get() {
      var e, t;
      return this.props.y + ((t = (e = this.props.parent) == null ? void 0 : e.absY) != null ? t : 0);
    }
  }, {
    key: "y",
    get: function get() {
      return this.props.y;
    },
    set: function set(e) {
      this.props.y !== e && (this.props.y = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width !== e && (this.props.width = e, this.setUpdateType(k.Local), this.props.rtt && this.setUpdateType(k.RenderTexture));
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height !== e && (this.props.height = e, this.setUpdateType(k.Local), this.props.rtt && this.setUpdateType(k.RenderTexture));
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
      this.props.scaleX !== e && (this.props.scaleX = e, this.setUpdateType(k.ScaleRotate));
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this.props.scaleY;
    },
    set: function set(e) {
      this.props.scaleY !== e && (this.props.scaleY = e, this.setUpdateType(k.ScaleRotate));
    }
  }, {
    key: "mount",
    get: function get() {
      return this.props.mount;
    },
    set: function set(e) {
      (this.props.mountX !== e || this.props.mountY !== e) && (this.props.mountX = e, this.props.mountY = e, this.props.mount = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "mountX",
    get: function get() {
      return this.props.mountX;
    },
    set: function set(e) {
      this.props.mountX !== e && (this.props.mountX = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "mountY",
    get: function get() {
      return this.props.mountY;
    },
    set: function set(e) {
      this.props.mountY !== e && (this.props.mountY = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "pivot",
    get: function get() {
      return this.props.pivot;
    },
    set: function set(e) {
      (this.props.pivotX !== e || this.props.pivotY !== e) && (this.props.pivotX = e, this.props.pivotY = e, this.props.pivot = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "pivotX",
    get: function get() {
      return this.props.pivotX;
    },
    set: function set(e) {
      this.props.pivotX !== e && (this.props.pivotX = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "pivotY",
    get: function get() {
      return this.props.pivotY;
    },
    set: function set(e) {
      this.props.pivotY !== e && (this.props.pivotY = e, this.setUpdateType(k.Local));
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.props.rotation;
    },
    set: function set(e) {
      this.props.rotation !== e && (this.props.rotation = e, this.setUpdateType(k.ScaleRotate));
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.props.alpha;
    },
    set: function set(e) {
      this.props.alpha = e, this.setUpdateType(k.PremultipliedColors | k.WorldAlpha);
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
      this.props.clipping = e, this.setUpdateType(k.Clipping);
    }
  }, {
    key: "color",
    get: function get() {
      return this.props.color;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorTr !== e || this.props.colorBl !== e || this.props.colorBr !== e) && (this.colorTl = e, this.colorTr = e, this.colorBl = e, this.colorBr = e), this.props.color = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorTop",
    get: function get() {
      return this.props.colorTop;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorTr !== e) && (this.colorTl = e, this.colorTr = e), this.props.colorTop = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorBottom",
    get: function get() {
      return this.props.colorBottom;
    },
    set: function set(e) {
      (this.props.colorBl !== e || this.props.colorBr !== e) && (this.colorBl = e, this.colorBr = e), this.props.colorBottom = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorLeft",
    get: function get() {
      return this.props.colorLeft;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorBl !== e) && (this.colorTl = e, this.colorBl = e), this.props.colorLeft = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorRight",
    get: function get() {
      return this.props.colorRight;
    },
    set: function set(e) {
      (this.props.colorTr !== e || this.props.colorBr !== e) && (this.colorTr = e, this.colorBr = e), this.props.colorRight = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorTl",
    get: function get() {
      return this.props.colorTl;
    },
    set: function set(e) {
      this.props.colorTl = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorTr",
    get: function get() {
      return this.props.colorTr;
    },
    set: function set(e) {
      this.props.colorTr = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorBl",
    get: function get() {
      return this.props.colorBl;
    },
    set: function set(e) {
      this.props.colorBl = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "colorBr",
    get: function get() {
      return this.props.colorBr;
    },
    set: function set(e) {
      this.props.colorBr = e, this.setUpdateType(k.PremultipliedColors);
    }
  }, {
    key: "zIndexLocked",
    get: function get() {
      return this.props.zIndexLocked || 0;
    },
    set: function set(e) {
      this.props.zIndexLocked = e, this.setUpdateType(k.CalculatedZIndex | k.Children), this.children.forEach(function (t) {
        t.setUpdateType(k.CalculatedZIndex);
      });
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.props.zIndex;
    },
    set: function set(e) {
      this.props.zIndex = e, this.setUpdateType(k.CalculatedZIndex | k.Children), this.children.forEach(function (t) {
        t.setUpdateType(k.CalculatedZIndex);
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
          var o = t.children.indexOf(this);
          L(o !== -1, "CoreNode.parent: Node not found in old parent's children!"), t.children.splice(o, 1), t.setUpdateType(k.Children | k.ZIndexSortedChildren);
        }
        e && (e.children.push(this), this.setUpdateType(k.All), e.setUpdateType(k.Children | k.ZIndexSortedChildren), (e.rtt || e.parentHasRenderTexture) && this.setRTTUpdates(k.All)), this.updateScaleRotateTransform();
      }
    }
  }, {
    key: "rtt",
    get: function get() {
      return this.props.rtt;
    },
    set: function set(e) {
      var t, o;
      if (!e) {
        this.props.rtt && (this.props.rtt = !1, this.unloadTexture(), this.setUpdateType(k.All), this.children.forEach(function (i) {
          i.parentHasRenderTexture = !1;
        }), (t = this.stage.renderer) == null || t.removeRTTNode(this));
        return;
      }
      this.props.rtt = !0, this.hasRTTupdates = !0, this.setUpdateType(k.All), this.children.forEach(function (i) {
        i.setUpdateType(k.All);
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
      var t;
      this.hasRTTupdates = !0, (t = this.parent) == null || t.setRTTUpdates(e);
    }
  }]);
}(et);
var Ns = 1;
function cn() {
  return Ns++;
}
var Kr = /*#__PURE__*/function (_et4) {
  function Kr(e, t, o, i) {
    var _this43;
    _classCallCheck(this, Kr);
    var s;
    _this43 = _callSuper(this, Kr);
    u(_this43, "rendererMain");
    u(_this43, "stage");
    u(_this43, "id");
    u(_this43, "coreNode");
    u(_this43, "_children", []);
    u(_this43, "_src", "");
    u(_this43, "_parent", null);
    u(_this43, "_texture", null);
    u(_this43, "_shader", null);
    u(_this43, "_data", {});
    u(_this43, "onTextureLoaded", function (e, t) {
      _this43.emit("loaded", t);
    });
    u(_this43, "onTextureFailed", function (e, t) {
      _this43.emit("failed", t);
    });
    u(_this43, "onTextureFreed", function (e, t) {
      _this43.emit("freed", t);
    });
    u(_this43, "onOutOfBounds", function (e, t) {
      _this43.emit("outOfBounds", t);
    });
    u(_this43, "onInBounds", function (e, t) {
      _this43.emit("inBounds", t);
    });
    u(_this43, "onOutOfViewport", function (e, t) {
      _this43.emit("outOfViewport", t);
    });
    u(_this43, "onInViewport", function (e, t) {
      _this43.emit("inViewport", t);
    });
    _this43.rendererMain = t, _this43.stage = o, _this43.id = (s = i == null ? void 0 : i.id) != null ? s : cn(), _this43.coreNode = i || new ln(_this43.stage, {
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
  _inherits(Kr, _et4);
  return _createClass(Kr, [{
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
      var t = this._parent;
      if (this._parent = e, this.coreNode.parent = (o = e == null ? void 0 : e.coreNode) != null ? o : null, t) {
        var i = t.children.indexOf(this);
        L(i !== -1, "MainOnlyNode.parent: Node not found in old parent's children!"), t.children.splice(i, 1);
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
      this._data = Ho(e);
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
    value: function animate(e, t) {
      var o = new ks(this.coreNode, e, t);
      return new Bs(this.stage.animationManager, o);
    }
  }]);
}(et);
var Ls = function Ls(n) {
    var r = !1;
    var _e8 = function e() {
      if (n.updateAnimations(), !n.hasSceneUpdates()) {
        n.calculateFps(), setTimeout(_e8, 16.666666666666668), r || (n.emit("idle"), r = !0);
        return;
      }
      r = !1, n.drawFrame(), requestAnimationFrame(_e8);
    };
    requestAnimationFrame(_e8);
  },
  Fs = function Fs() {
    return performance ? performance.now() : Date.now();
  };
var Ms = /*#__PURE__*/function () {
  function Ms() {
    _classCallCheck(this, Ms);
    u(this, "activeAnimations", new Set());
  }
  return _createClass(Ms, [{
    key: "registerAnimation",
    value: function registerAnimation(r) {
      this.activeAnimations.add(r);
    }
  }, {
    key: "unregisterAnimation",
    value: function unregisterAnimation(r) {
      this.activeAnimations.delete(r);
    }
  }, {
    key: "update",
    value: function update(r) {
      this.activeAnimations.forEach(function (e) {
        e.update(r);
      });
    }
  }]);
}();
var zs = /*#__PURE__*/function () {
  function zs(r) {
    var _this44 = this;
    _classCallCheck(this, zs);
    u(this, "imageWorkersEnabled", !0);
    u(this, "messageManager", {});
    u(this, "workers", []);
    u(this, "workerIndex", 0);
    u(this, "nextId", 0);
    this.workers = this.createWorkers(r), this.workers.forEach(function (e) {
      e.onmessage = _this44.handleMessage.bind(_this44);
    });
  }
  return _createClass(zs, [{
    key: "handleMessage",
    value: function handleMessage(r) {
      var _r$data = r.data,
        e = _r$data.id,
        t = _r$data.data,
        o = _r$data.error,
        i = this.messageManager[e];
      if (i) {
        var _i5 = _slicedToArray(i, 2),
          s = _i5[0],
          a = _i5[1];
        delete this.messageManager[e], o ? a(new Error(o)) : s(t);
      }
    }
  }, {
    key: "createWorkers",
    value: function createWorkers() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = "\n      function hasAlphaChannel(mimeType) {\n          return (mimeType.indexOf(\"image/png\") !== -1);\n      }\n\n      function getImage(src, premultiplyAlpha) {\n        return new Promise(function(resolve, reject) {\n          var xhr = new XMLHttpRequest();\n          xhr.open('GET', src, true);\n          xhr.responseType = 'blob';\n\n          xhr.onload = function() {\n            if (xhr.status === 200) {\n              var blob = xhr.response;\n              var hasAlphaChannel = premultiplyAlpha !== undefined ? premultiplyAlpha : hasAlphaChannel(blob.type);\n\n              createImageBitmap(blob, {\n                premultiplyAlpha: hasAlphaChannel ? 'premultiply' : 'none',\n                colorSpaceConversion: 'none',\n                imageOrientation: 'none'\n              }).then(function(data) {\n                resolve({ data: data, premultiplyAlpha: premultiplyAlpha });\n              }).catch(function(error) {\n                reject(error);\n              });\n            } else {\n              reject(new Error('Failed to load image: ' + xhr.statusText));\n            }\n          };\n\n          xhr.onerror = function() {\n            reject(new Error('Network error occurred while trying to fetch the image.'));\n          };\n\n          xhr.send();\n        });\n      }\n\n      self.onmessage = (event) => {\n        var id = event.data.id;\n        var src = event.data.src;\n        var premultiplyAlpha = event.data.premultiplyAlpha;\n\n        getImage(src, premultiplyAlpha)\n          .then(function(data) {\n              self.postMessage({ id: id, data: data }, [data.data]);\n          })\n          .catch(function(error) {\n              self.postMessage({ id: id, error: error.message });\n          });\n      };\n    ",
        t = new Blob([e.replace('"use strict";', "")], {
          type: "application/javascript"
        }),
        o = (self.URL ? URL : webkitURL).createObjectURL(t),
        i = [];
      for (var s = 0; s < r; s++) i.push(new Worker(o));
      return i;
    }
  }, {
    key: "getNextWorker",
    value: function getNextWorker() {
      var r = this.workers[this.workerIndex];
      return this.workerIndex = (this.workerIndex + 1) % this.workers.length, r;
    }
  }, {
    key: "convertUrlToAbsolute",
    value: function convertUrlToAbsolute(r) {
      return new URL(r, self.location.href).href;
    }
  }, {
    key: "getImage",
    value: function getImage(r, e) {
      var _this45 = this;
      return new Promise(function (t, o) {
        try {
          if (_this45.workers) {
            var i = _this45.convertUrlToAbsolute(r),
              s = _this45.nextId++;
            _this45.messageManager[s] = [t, o], _this45.getNextWorker().postMessage({
              id: s,
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
var Et = /*#__PURE__*/function (_xo2) {
  function Et(e, t) {
    var _this46;
    _classCallCheck(this, Et);
    _this46 = _callSuper(this, Et, [e]);
    u(_this46, "props");
    _this46.props = Et.resolveDefaults(t);
    return _this46;
  }
  _inherits(Et, _xo2);
  return _createClass(Et, [{
    key: "getTextureData",
    value: function () {
      var _getTextureData2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this$props3, e, t, o, i, s, a;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this$props3 = this.props, e = _this$props3.width, t = _this$props3.height, o = e * t * 4, i = new Uint8ClampedArray(o);
              for (s = 0; s < o; s += 4) {
                a = Math.floor(Math.random() * 256);
                i[s] = a, i[s + 1] = a, i[s + 2] = a, i[s + 3] = 255;
              }
              return _context8.abrupt("return", {
                data: new ImageData(i, e, t)
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
      var t = Et.resolveDefaults(e);
      return "NoiseTexture,".concat(t.width, ",").concat(t.height, ",").concat(t.cacheId);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var t, o, i;
      return {
        width: (t = e.width) != null ? t : 128,
        height: (o = e.height) != null ? o : 128,
        cacheId: (i = e.cacheId) != null ? i : 0
      };
    }
  }]);
}(xo);
u(Et, "z$__type__Props");
var jr = Et;
var Ps = /*#__PURE__*/function () {
  function Ps(r) {
    _classCallCheck(this, Ps);
    u(this, "usedMemory", 0);
    u(this, "txConstructors", {});
    u(this, "textureKeyCache", new Map());
    u(this, "textureIdCache", new Map());
    u(this, "ctxTextureCache", new WeakMap());
    u(this, "textureRefCountMap", new WeakMap());
    u(this, "imageWorkerManager", null);
    u(this, "hasCreateImageBitmap", !!self.createImageBitmap);
    u(this, "hasWorker", !!self.Worker);
    u(this, "renderer");
    this.hasCreateImageBitmap && this.hasWorker && (this.imageWorkerManager = new zs(r)), this.hasCreateImageBitmap || console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), this.registerTextureType("ImageTexture", Xr), this.registerTextureType("ColorTexture", Ii), this.registerTextureType("NoiseTexture", jr), this.registerTextureType("SubTexture", wo), this.registerTextureType("RenderTexture", ki);
  }
  return _createClass(Ps, [{
    key: "registerTextureType",
    value: function registerTextureType(r, e) {
      this.txConstructors[r] = e;
    }
  }, {
    key: "loadTexture",
    value: function loadTexture(r, e) {
      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var s;
      var o = this.txConstructors[r];
      if (!o) throw new Error('Texture type "'.concat(r, '" is not registered'));
      var i;
      if ((t == null ? void 0 : t.id) !== void 0 && this.textureIdCache.has(t.id) && (i = this.textureIdCache.get(t.id)), !i) {
        var a = t == null ? void 0 : t.id,
          l = (s = t == null ? void 0 : t.cacheKey) != null ? s : o.makeCacheKey(e);
        l && this.textureKeyCache.has(l) ? i = this.textureKeyCache.get(l) : i = new o(this, e), a && this.addTextureIdToCache(a, l, i);
      }
      return t != null && t.preload && this.getCtxTexture(i).load(), i;
    }
  }, {
    key: "addTextureIdToCache",
    value: function addTextureIdToCache(r, e, t) {
      var o = this.textureIdCache,
        i = this.textureRefCountMap;
      o.set(r, t), i.has(t) ? i.get(t).count++ : (i.set(t, {
        cacheKey: e,
        count: 1
      }), e && this.textureKeyCache.set(e, t));
    }
  }, {
    key: "removeTextureIdFromCache",
    value: function removeTextureIdFromCache(r) {
      var i;
      var e = this.textureIdCache,
        t = this.textureRefCountMap,
        o = e.get(r);
      if (o) {
        if (e.delete(r), t.has(o)) {
          var s = t.get(o);
          L(s), s.count--, s.count === 0 && (t.delete(o), s.cacheKey && this.textureKeyCache.delete(s.cacheKey));
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
    value: function getCtxTexture(r) {
      if (this.ctxTextureCache.has(r)) return this.ctxTextureCache.get(r);
      var e = this.renderer.createCtxTexture(r);
      return this.ctxTextureCache.set(r, e), e;
    }
  }]);
}();
var Ds = /*#__PURE__*/function () {
  function Ds() {
    _classCallCheck(this, Ds);
    u(this, "data", {});
  }
  return _createClass(Ds, [{
    key: "reset",
    value: function reset() {
      this.data = {};
    }
  }, {
    key: "increment",
    value: function increment(r) {
      this.data[r] || (this.data[r] = 0), this.data[r]++;
    }
  }, {
    key: "getData",
    value: function getData() {
      return _objectSpread({}, this.data);
    }
  }]);
}();
var Os = /*#__PURE__*/function () {
  function Os(r) {
    _classCallCheck(this, Os);
    u(this, "memUsed", 0);
    u(this, "textures", new Map());
    u(this, "threshold");
    u(this, "gcRequested", !1);
    this.threshold = r, r === 0 && (this.setTextureMemUse = function () {});
  }
  return _createClass(Os, [{
    key: "setTextureMemUse",
    value: function setTextureMemUse(r, e) {
      if (this.textures.has(r) && (this.memUsed -= this.textures.get(r)), e === 0) {
        this.textures.delete(r);
        return;
      } else this.memUsed += e, this.textures.set(r, e);
      this.memUsed > this.threshold && (this.gcRequested = !0);
    }
  }, {
    key: "gc",
    value: function gc() {
      this.gcRequested = !1, this.textures.forEach(function (r, e) {
        e.renderable || e.free();
      });
    }
  }]);
}();
var Ws = {
  isWhite: !0,
  a: 1,
  r: 255,
  g: 255,
  b: 255
};
function Br(n) {
  if (n === 4294967295) return Ws;
  var r = (n >>> 24 & 255) / 255,
    e = n >>> 16 & 255 & 255,
    t = n >>> 8 & 255 & 255,
    o = n & 255 & 255;
  return {
    isWhite: !1,
    a: r,
    r: o,
    g: t,
    b: e
  };
}
function tr(_ref8) {
  var n = _ref8.a,
    r = _ref8.r,
    e = _ref8.g,
    t = _ref8.b;
  return "rgba(".concat(r, ",").concat(e, ",").concat(t, ",").concat(n, ")");
}
var Us = /*#__PURE__*/function (_Bi) {
  function Us() {
    var _this47;
    _classCallCheck(this, Us);
    _this47 = _callSuper(this, Us, arguments);
    u(_this47, "image");
    u(_this47, "tintCache");
    return _this47;
  }
  _inherits(Us, _Bi);
  return _createClass(Us, [{
    key: "load",
    value: function load() {
      var _this48 = this;
      this.textureSource.state === "freed" && (this.textureSource.setState("loading"), this.onLoadRequest().then(function (e) {
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
        var _this$textureSource$d = this.textureSource.dimensions,
          t = _this$textureSource$d.width,
          o = _this$textureSource$d.height;
        this.memManager.setTextureMemUse(this, t * o * e);
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
      var s;
      var t = this.image;
      if (L(t, "Attempt to get unloaded image texture"), e.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), t;
      var o = tr(e);
      if (((s = this.tintCache) == null ? void 0 : s.key) === o) return this.tintCache.image;
      var i = this.tintTexture(t, o);
      return this.tintCache = {
        key: o,
        image: i
      }, this.updateMemSize(), i;
    }
  }, {
    key: "tintTexture",
    value: function tintTexture(e, t) {
      var o = e.width,
        i = e.height,
        s = document.createElement("canvas");
      s.width = o, s.height = i;
      var a = s.getContext("2d");
      return a && (a.fillStyle = t, a.globalCompositeOperation = "copy", a.fillRect(0, 0, o, i), a.globalCompositeOperation = "multiply", a.drawImage(e, 0, 0, o, i, 0, 0, o, i), a.globalCompositeOperation = "destination-in", a.drawImage(e, 0, 0, o, i, 0, 0, o, i)), s;
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
        var _yield$this$textureSo, e, t, o;
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
              t = document.createElement("canvas");
              t.width = e.width, t.height = e.height;
              o = t.getContext("2d");
              return _context9.abrupt("return", (o && o.putImageData(e, 0, 0), this.image = t, {
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
}(Bi);
function Ys(n) {
  var r, e;
  return n.shader instanceof Yo && n.shader.shType === Uo && (e = (r = n.shaderProps) == null ? void 0 : r.radius) != null ? e : 0;
}
var $s = /*#__PURE__*/function (_Ei) {
  function $s(e) {
    var _this49;
    _classCallCheck(this, $s);
    _this49 = _callSuper(this, $s, [e]);
    u(_this49, "context");
    u(_this49, "canvas");
    u(_this49, "pixelRatio");
    u(_this49, "clearColor");
    u(_this49, "renderToTextureActive", !1);
    u(_this49, "activeRttNode", null);
    _this49.mode = "canvas", _this49.shManager.renderer = _this49;
    var t = e.canvas,
      o = e.pixelRatio,
      i = e.clearColor;
    _this49.canvas = t, _this49.context = t.getContext("2d"), _this49.pixelRatio = o, _this49.clearColor = i ? Ni(i) : void 0;
    return _this49;
  }
  _inherits($s, _Ei);
  return _createClass($s, [{
    key: "reset",
    value: function reset() {
      this.canvas.width = this.canvas.width;
      var e = this.context;
      if (this.clearColor) {
        var _this$clearColor = _slicedToArray(this.clearColor, 4),
          t = _this$clearColor[0],
          o = _this$clearColor[1],
          i = _this$clearColor[2],
          s = _this$clearColor[3];
        e.fillStyle = "rgba(".concat(t, ", ").concat(o, ", ").concat(i, ", ").concat(s / 255, ")"), e.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
      e.scale(this.pixelRatio, this.pixelRatio);
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "addQuad",
    value: function addQuad(e) {
      var t = this.context,
        o = e.tx,
        i = e.ty,
        s = e.width,
        a = e.height,
        l = e.alpha,
        c = e.colorTl,
        d = e.colorTr,
        f = e.colorBr,
        g = e.ta,
        w = e.tb,
        x = e.tc,
        y = e.td,
        b = e.clippingRect;
      var C = e.texture,
        v,
        m;
      if (C) {
        if (C instanceof wo && (m = C.props, C = C.parentTexture), v = this.txManager.getCtxTexture(C), C.state === "freed") {
          v.load();
          return;
        }
        if (C.state !== "loaded" || !v.hasImage()) return;
      }
      var p = Br(c),
        S = g !== 1,
        I = b.width !== 0 && b.height !== 0,
        T = c !== d || c !== f,
        _ = e.shader ? Ys(e) : 0;
      if ((S || I || _) && t.save(), I) {
        var A = new Path2D(),
          E = b.x,
          N = b.y,
          B = b.width,
          F = b.height;
        A.rect(E, N, B, F), t.clip(A);
      }
      if (S) {
        var _A3 = this.pixelRatio;
        t.setTransform(g, x, w, y, o * _A3, i * _A3), t.scale(_A3, _A3), t.translate(-o, -i);
      }
      if (_) {
        var _A4 = new Path2D();
        _A4.roundRect(o, i, s, a, _), t.clip(_A4);
      }
      if (v) {
        var _A5 = v.getImage(p);
        t.globalAlpha = l, m ? t.drawImage(_A5, m.x, m.y, m.width, m.height, o, i, s, a) : t.drawImage(_A5, o, i, s, a), t.globalAlpha = 1;
      } else if (T) {
        var _A6 = o,
          _E = i,
          _N;
        c === d ? (_A6 = o, _E = i + a, _N = Br(f)) : (_A6 = o + s, _E = i, _N = Br(d));
        var _B = t.createLinearGradient(o, i, _A6, _E);
        _B.addColorStop(0, tr(p)), _B.addColorStop(1, tr(_N)), t.fillStyle = _B, t.fillRect(o, i, s, a);
      } else t.fillStyle = tr(p), t.fillRect(o, i, s, a);
      (S || I || _) && t.restore();
    }
  }, {
    key: "createCtxTexture",
    value: function createCtxTexture(e) {
      return new Us(this.txMemManager, e);
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
}(Ei);
var Hs = 2e6;
var Qs = /*#__PURE__*/function (_et5) {
  function Qs(e) {
    var _this50;
    _classCallCheck(this, Qs);
    _this50 = _callSuper(this, Qs);
    u(_this50, "options");
    u(_this50, "animationManager");
    u(_this50, "txManager");
    u(_this50, "txMemManager");
    u(_this50, "fontManager");
    u(_this50, "textRenderers");
    u(_this50, "shManager");
    u(_this50, "renderer");
    u(_this50, "root");
    u(_this50, "boundsMargin");
    u(_this50, "deltaTime", 0);
    u(_this50, "lastFrameTime", 0);
    u(_this50, "currentFrameTime", 0);
    u(_this50, "fpsNumFrames", 0);
    u(_this50, "fpsElapsedTime", 0);
    u(_this50, "renderRequested", !1);
    u(_this50, "contextSpy", null);
    _this50.options = e;
    var t = e.canvas,
      o = e.clearColor,
      i = e.rootId,
      s = e.debug,
      a = e.appWidth,
      l = e.appHeight,
      c = e.boundsMargin,
      d = e.enableContextSpy,
      f = e.numImageWorkers,
      g = e.txMemByteThreshold,
      w = e.renderMode;
    _this50.txManager = new Ps(f), _this50.txMemManager = new Os(g), _this50.shManager = new cs(), _this50.animationManager = new Ms(), _this50.contextSpy = d ? new Ds() : null;
    var x = [0, 0, 0, 0];
    c && (x = Array.isArray(c) ? c : [c, c, c, c]), _this50.boundsMargin = x, s != null && s.monitorTextureCache && setInterval(function () {
      L(_this50.txManager);
      var C = _this50.txManager.getDebugInfo();
      console.log("Texture ID Cache Size: ", C.idCacheSize), console.log("Texture Key Cache Size: ", C.keyCacheSize);
    }, 1e3);
    var y = {
      stage: _this50,
      canvas: t,
      pixelRatio: e.devicePhysicalPixelRatio * e.deviceLogicalPixelRatio,
      clearColor: o != null ? o : 4278190080,
      bufferMemory: Hs,
      txManager: _this50.txManager,
      txMemManager: _this50.txMemManager,
      shManager: _this50.shManager,
      contextSpy: _this50.contextSpy
    };
    w === "canvas" ? _this50.renderer = new $s(y) : _this50.renderer = new yo(y), Li(w), _this50.txManager.renderer = _this50.renderer, _this50.textRenderers = w === "webgl" ? {
      canvas: new Ln(_this50),
      sdf: new Ts(_this50)
    } : {
      canvas: new Ln(_this50)
    }, _this50.fontManager = new $o(_this50.textRenderers);
    var b = new ln(_this50, {
      id: i,
      x: 0,
      y: 0,
      width: a,
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
    _this50.root = b, Ls(_this50);
    return _this50;
  }
  _inherits(Qs, _et5);
  return _createClass(Qs, [{
    key: "updateAnimations",
    value: function updateAnimations() {
      var e = this.animationManager;
      this.root && (this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = Fs(), this.deltaTime = this.lastFrameTime ? this.currentFrameTime - this.lastFrameTime : 100 / 6, this.emit("frameTick", {
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
      L(e), this.root.updateType !== 0 && this.root.update(this.deltaTime, this.root.clippingRect), e.reset(), e.txMemManager.gcRequested && e.txMemManager.gc(), e.rttNodes.length > 0 && e.renderRTTNodes(), this.addQuads(this.root), e == null || e.render(), this.calculateFps(), t && (this.renderRequested = !1);
    }
  }, {
    key: "calculateFps",
    value: function calculateFps() {
      var t, o, i;
      var e = this.options.fpsUpdateInterval;
      if (e && (this.fpsNumFrames++, this.fpsElapsedTime += this.deltaTime, this.fpsElapsedTime >= e)) {
        var s = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
        this.fpsNumFrames = 0, this.fpsElapsedTime = 0, this.emit("fpsUpdate", {
          fps: s,
          contextSpyData: (o = (t = this.contextSpy) == null ? void 0 : t.getData()) != null ? o : null
        }), (i = this.contextSpy) == null || i.reset();
      }
    }
  }, {
    key: "addQuads",
    value: function addQuads(e) {
      L(this.renderer && e.globalTransform), e.isRenderable && e.renderQuads(this.renderer);
      for (var t = 0; t < e.children.length; t++) {
        var o = e.children[t];
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
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var o = t,
        i = !1;
      if (o) {
        var a = this.textRenderers[o];
        a ? a.canRenderFont(e) || (console.warn("Cannot use override text renderer '".concat(o, "' for font"), e), o = null, i = !0) : (console.warn("Text renderer override '".concat(o, "' not found.")), o = null, i = !0);
      }
      if (!o) {
        for (var _i6 = 0, _Object$entries = Object.entries(this.textRenderers); _i6 < _Object$entries.length; _i6++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i6], 2),
            _a8 = _Object$entries$_i[0],
            l = _Object$entries$_i[1];
          if (_a8 !== "canvas" && l.canRenderFont(e)) {
            o = _a8;
            break;
          }
        }
        o || (o = "canvas");
      }
      i && console.warn("Falling back to text renderer ".concat(String(o)));
      var s = this.textRenderers[o];
      return L(s, "resolvedTextRenderer undefined"), s;
    }
  }]);
}(et);
var Xs = /*#__PURE__*/function (_ln) {
  function Xs(e, t) {
    var _this51;
    _classCallCheck(this, Xs);
    _this51 = _callSuper(this, Xs, [e, t]);
    u(_this51, "textRenderer");
    u(_this51, "trState");
    u(_this51, "_textRendererOverride", null);
    u(_this51, "onTextLoaded", function () {
      var _this52 = _this51,
        e = _this52.contain,
        t = _this51.trState.props.width,
        o = _this51.trState.props.height,
        i = _this51.trState.textW || 0,
        s = _this51.trState.textH || 0;
      e === "both" ? (_this51.props.width = t, _this51.props.height = o) : e === "width" ? (_this51.props.width = t, _this51.props.height = s) : e === "none" && (_this51.props.width = i, _this51.props.height = s), _this51.updateLocalTransform(), _this51.stage.requestRender(), _this51.emit("loaded", {
        type: "text",
        dimensions: {
          width: _this51.trState.textW || 0,
          height: _this51.trState.textH || 0
        }
      });
    });
    u(_this51, "onTextFailed", function (e, t) {
      _this51.emit("failed", {
        type: "text",
        error: t
      });
    });
    _this51._textRendererOverride = t.textRendererOverride;
    var _this51$resolveTextRe = _this51.resolveTextRendererAndState({
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
      o = _this51$resolveTextRe.resolvedTextRenderer,
      i = _this51$resolveTextRe.textRendererState;
    _this51.textRenderer = o, _this51.trState = i;
    return _this51;
  }
  _inherits(Xs, _ln);
  return _createClass(Xs, [{
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width = e, this.textRenderer.set.width(this.trState, e), this.contain === "none" && this.setUpdateType(k.Local);
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height = e, this.textRenderer.set.height(this.trState, e), this.contain !== "both" && this.setUpdateType(k.Local);
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
        t = _this$resolveTextRend.resolvedTextRenderer,
        o = _this$resolveTextRend.textRendererState;
      this.textRenderer = t, this.trState = o;
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
      _superPropGet(Xs, "update", this, 3)([e, t]), L(this.globalTransform), this.textRenderer.set.x(this.trState, this.globalTransform.tx), this.textRenderer.set.y(this.trState, this.globalTransform.ty);
    }
  }, {
    key: "checkRenderProps",
    value: function checkRenderProps() {
      return this.trState.props.text !== "" ? !0 : _superPropGet(Xs, "checkRenderProps", this, 3)([]);
    }
  }, {
    key: "onChangeIsRenderable",
    value: function onChangeIsRenderable(e) {
      _superPropGet(Xs, "onChangeIsRenderable", this, 3)([e]), this.textRenderer.setIsRenderable(this.trState, e);
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e) {
      var t;
      L(this.globalTransform), !(this.parentHasRenderTexture && (!e.renderToTextureActive || this.parentRenderTexture !== e.activeRttNode)) && (this.parentHasRenderTexture && (t = this.props.parent) != null && t.rtt && (this.globalTransform = ue.identity(), this.localTransform && this.globalTransform.multiply(this.localTransform)), L(this.globalTransform), this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _superPropGet(Xs, "destroy", this, 3)([]), this.textRenderer.destroyState(this.trState);
    }
  }, {
    key: "resolveTextRendererAndState",
    value: function resolveTextRendererAndState(e) {
      var t = this.stage.resolveTextRenderer(e, this._textRendererOverride),
        o = t.createState(e);
      return o.emitter.on("loaded", this.onTextLoaded), o.emitter.on("failed", this.onTextFailed), t.scheduleUpdateState(o), {
        resolvedTextRenderer: t,
        textRendererState: o
      };
    }
  }]);
}(ln);
var Ks = /*#__PURE__*/function (_Kr) {
  function Ks(r, e, t) {
    _classCallCheck(this, Ks);
    return _callSuper(this, Ks, [r, e, t, new Xs(t, {
      id: cn(),
      x: r.x,
      y: r.y,
      width: r.width,
      height: r.height,
      alpha: r.alpha,
      autosize: r.autosize,
      clipping: r.clipping,
      color: r.color,
      colorTop: r.colorTop,
      colorBottom: r.colorBottom,
      colorLeft: r.colorLeft,
      colorRight: r.colorRight,
      colorTl: r.colorTl,
      colorTr: r.colorTr,
      colorBl: r.colorBl,
      colorBr: r.colorBr,
      zIndex: r.zIndex,
      zIndexLocked: r.zIndexLocked,
      scaleX: r.scaleX,
      scaleY: r.scaleY,
      mountX: r.mountX,
      mountY: r.mountY,
      mount: r.mount,
      pivot: r.pivot,
      pivotX: r.pivotX,
      pivotY: r.pivotY,
      rotation: r.rotation,
      text: r.text,
      fontSize: r.fontSize,
      fontFamily: r.fontFamily,
      fontWeight: r.fontWeight,
      fontStretch: r.fontStretch,
      fontStyle: r.fontStyle,
      contain: r.contain,
      scrollable: r.scrollable,
      letterSpacing: r.letterSpacing,
      textAlign: r.textAlign,
      scrollY: r.scrollY,
      offsetY: r.offsetY,
      textRendererOverride: r.textRendererOverride,
      lineHeight: r.lineHeight,
      maxLines: r.maxLines,
      textBaseline: r.textBaseline,
      verticalAlign: r.verticalAlign,
      overflowSuffix: r.overflowSuffix,
      debug: r.debug,
      parent: null,
      texture: null,
      textureOptions: null,
      shader: null,
      shaderProps: null,
      rtt: !1
    })]);
  }
  _inherits(Ks, _Kr);
  return _createClass(Ks, [{
    key: "text",
    get: function get() {
      return this.coreNode.text;
    },
    set: function set(r) {
      this.coreNode.text = r;
    }
  }, {
    key: "textRendererOverride",
    get: function get() {
      return this.coreNode.textRendererOverride;
    },
    set: function set(r) {
      this.coreNode.textRendererOverride = r;
    }
  }, {
    key: "fontSize",
    get: function get() {
      return this.coreNode.fontSize;
    },
    set: function set(r) {
      this.coreNode.fontSize = r;
    }
  }, {
    key: "fontFamily",
    get: function get() {
      return this.coreNode.fontFamily;
    },
    set: function set(r) {
      this.coreNode.fontFamily = r;
    }
  }, {
    key: "fontWeight",
    get: function get() {
      return this.coreNode.fontWeight;
    },
    set: function set(r) {
      this.coreNode.fontWeight = r;
    }
  }, {
    key: "fontStretch",
    get: function get() {
      return this.coreNode.fontStretch;
    },
    set: function set(r) {
      this.coreNode.fontStretch = r;
    }
  }, {
    key: "fontStyle",
    get: function get() {
      return this.coreNode.fontStyle;
    },
    set: function set(r) {
      this.coreNode.fontStyle = r;
    }
  }, {
    key: "textAlign",
    get: function get() {
      return this.coreNode.textAlign;
    },
    set: function set(r) {
      this.coreNode.textAlign = r;
    }
  }, {
    key: "contain",
    get: function get() {
      return this.coreNode.contain;
    },
    set: function set(r) {
      this.coreNode.contain = r;
    }
  }, {
    key: "scrollable",
    get: function get() {
      return this.coreNode.scrollable;
    },
    set: function set(r) {
      this.coreNode.scrollable = r;
    }
  }, {
    key: "scrollY",
    get: function get() {
      return this.coreNode.scrollY;
    },
    set: function set(r) {
      this.coreNode.scrollY = r;
    }
  }, {
    key: "offsetY",
    get: function get() {
      return this.coreNode.offsetY;
    },
    set: function set(r) {
      this.coreNode.offsetY = r;
    }
  }, {
    key: "letterSpacing",
    get: function get() {
      return this.coreNode.letterSpacing;
    },
    set: function set(r) {
      this.coreNode.letterSpacing = r;
    }
  }, {
    key: "lineHeight",
    get: function get() {
      return this.coreNode.lineHeight;
    },
    set: function set(r) {
      r && (this.coreNode.lineHeight = r);
    }
  }, {
    key: "maxLines",
    get: function get() {
      return this.coreNode.maxLines;
    },
    set: function set(r) {
      r && (this.coreNode.maxLines = r);
    }
  }, {
    key: "textBaseline",
    get: function get() {
      return this.coreNode.textBaseline;
    },
    set: function set(r) {
      r && (this.coreNode.textBaseline = r);
    }
  }, {
    key: "verticalAlign",
    get: function get() {
      return this.coreNode.verticalAlign;
    },
    set: function set(r) {
      r && (this.coreNode.verticalAlign = r);
    }
  }, {
    key: "overflowSuffix",
    get: function get() {
      return this.coreNode.overflowSuffix;
    },
    set: function set(r) {
      r && (this.coreNode.overflowSuffix = r);
    }
  }, {
    key: "debug",
    get: function get() {
      return this.coreNode.debug;
    },
    set: function set(r) {
      this.coreNode.debug = r;
    }
  }]);
}(Kr);
var js = /*#__PURE__*/function () {
  function js() {
    _classCallCheck(this, js);
    u(this, "root", null);
    u(this, "stage", null);
    u(this, "rendererMain", null);
  }
  return _createClass(js, [{
    key: "init",
    value: function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(r, e, t) {
        var _this53 = this;
        var o;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.stage = new Qs({
                rootId: cn(),
                appWidth: e.appWidth,
                appHeight: e.appHeight,
                txMemByteThreshold: e.txMemByteThreshold,
                boundsMargin: e.boundsMargin,
                deviceLogicalPixelRatio: e.deviceLogicalPixelRatio,
                devicePhysicalPixelRatio: e.devicePhysicalPixelRatio,
                clearColor: e.clearColor,
                canvas: t,
                fpsUpdateInterval: e.fpsUpdateInterval,
                enableContextSpy: e.enableContextSpy,
                numImageWorkers: e.numImageWorkers,
                renderMode: e.renderMode,
                debug: {
                  monitorTextureCache: !1
                }
              }), this.rendererMain = r, L(this.stage.root);
              o = new Kr(r.resolveNodeDefaults({}), this.rendererMain, this.stage, this.stage.root);
              this.root = o;
              o.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, o));
              this.onCreateNode(o);
              _context10.t0 = e.coreExtensionModule;
              if (!_context10.t0) {
                _context10.next = 9;
                break;
              }
              _context10.next = 9;
              return Rs(e.coreExtensionModule, this.stage);
            case 9:
              this.stage.on("fpsUpdate", function (i, s) {
                _this53.onFpsUpdate(s);
              });
              this.stage.on("frameTick", function (i, s) {
                _this53.onFrameTick(s);
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
      function init(_x8, _x9, _x10) {
        return _init2.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "createNode",
    value: function createNode(r) {
      L(this.rendererMain), L(this.stage);
      var e = new Kr(r, this.rendererMain, this.stage);
      return e.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, e)), this.onCreateNode(e), e;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(r) {
      L(this.rendererMain), L(this.stage);
      var e = new Ks(r, this.rendererMain, this.stage);
      return e.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, e)), this.onCreateNode(e), e;
    }
  }, {
    key: "destroyNode",
    value: function destroyNode(r) {
      r.destroy();
    }
  }, {
    key: "releaseTexture",
    value: function releaseTexture(r) {
      var e = this.stage;
      L(e), e.txManager.removeTextureIdFromCache(r);
    }
  }, {
    key: "getRootNode",
    value: function getRootNode() {
      return L(this.root), this.root;
    }
  }, {
    key: "onCreateNode",
    value: function onCreateNode(r) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onBeforeDestroyNode",
    value: function onBeforeDestroyNode(r) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onFpsUpdate",
    value: function onFpsUpdate(r) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onFrameTick",
    value: function onFrameTick(r) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "onIdle",
    value: function onIdle() {
      throw new Error("Method not implemented.");
    }
  }]);
}();
var Fe, dn;
function Vs() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
  var e = new js();
  return Fe = new Is(n, r, e), dn = Fe.createShader.bind(Fe), Fe;
}
var Gs = /*#__PURE__*/function (_Array) {
  function Gs(r) {
    var _this54;
    _classCallCheck(this, Gs);
    _this54 = _callSuper(this, Gs), _this54._parent = r;
    return _this54;
  }
  _inherits(Gs, _Array);
  return _createClass(Gs, [{
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
    value: function insert(r, e) {
      if (e) {
        var t = this.indexOf(e);
        this.splice(t, 0, r);
      } else this.push(r);
      r.parent = this._parent;
    }
  }, {
    key: "remove",
    value: function remove(r) {
      var e = this.indexOf(r);
      e >= 0 && this.splice(e, 1);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Array));
function qs() {
  return !0 && !1;
}
var Zs = qs() || !1,
  pe = {
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
function Mn(n) {
  return Js(n) && n.debug;
}
function qe(n, r) {
  var _console;
  for (var _len3 = arguments.length, e = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    e[_key3 - 2] = arguments[_key3];
  }
  Zs && (pe.debug || Mn(r) || Mn(e[0])) && (_console = console).log.apply(_console, [n, r].concat(e));
}
var Qt = function Qt(n) {
  return n instanceof Function;
};
function Js(n) {
  return _typeof(n) == "object";
}
function dr(n) {
  return Array.isArray(n);
}
function ea(n) {
  return typeof n == "string";
}
function ta(n) {
  return typeof n == "number";
}
function ra(n) {
  return Number.isInteger(n);
}
function na(n, r) {
  var _iterator14 = _createForOfIteratorHelper(r),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var e = _step14.value;
      if (e in n) return !0;
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return !1;
}
function Qo(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (dr(n)) n.forEach(function (e) {
    Qo(e, r);
  });else if (n) for (var e in n) r[e] === void 0 && n[e] && (r[e] = n[e]);
  return r;
}
var zn = /*#__PURE__*/function (_Array2) {
  function zn(r) {
    var _this55;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, zn);
    return _possibleConstructorReturn(_this55, (dr(e) ? _this55 = _callSuper(this, zn, _toConsumableArray(e)) : ea(e) ? _this55 = _callSuper(this, zn, [e]) : _this55 = _callSuper(this, zn, _toConsumableArray(Object.entries(e).filter(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
        t = _ref10[0],
        o = _ref10[1];
      return o;
    }).map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 1),
        t = _ref12[0];
      return t;
    }))), _this55.onChange = r, _assertThisInitialized(_this55)));
  }
  _inherits(zn, _Array2);
  return _createClass(zn, [{
    key: "has",
    value: function has(r) {
      return this.indexOf(r) >= 0;
    }
  }, {
    key: "is",
    value: function is(r) {
      return this.indexOf(r) >= 0;
    }
  }, {
    key: "add",
    value: function add(r) {
      this.push(r), this.onChange();
    }
  }, {
    key: "toggle",
    value: function toggle(r) {
      this.has(r) ? this.remove(r) : this.add(r);
    }
  }, {
    key: "remove",
    value: function remove(r) {
      var e = this.indexOf(r);
      e >= 0 && (this.splice(e, 1), this.onChange());
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Array));
var Ye = function (n) {
  return n[n.Element = 0] = "Element", n[n.TextNode = 1] = "TextNode", n[n.Text = 2] = "Text", n;
}(Ye || {});
function oa(n) {
  var r = [];
  var e = !1;
  for (var m = 0; m < n.children.length; m++) {
    var p = n.children[m];
    if (p.type !== Ye.Text && p.flexItem !== !1) {
      if (p.type === Ye.TextNode && p.text && !(p.width || p.height)) return !1;
      p.flexOrder !== void 0 && (e = !0), r.push(p);
    }
  }
  e && r.sort(function (m, p) {
    return (m.flexOrder || 0) - (p.flexOrder || 0);
  });
  var t = r.length,
    i = (n.flexDirection || "row") === "row",
    s = i ? "width" : "height",
    a = i ? "height" : "width",
    l = i ? "marginLeft" : "marginTop",
    c = i ? "marginRight" : "marginBottom",
    d = i ? "x" : "y",
    f = i ? "y" : "x",
    g = n[s] || 0,
    w = n[a] || 0,
    x = n.gap || 0,
    y = n.justifyContent || "flexStart",
    b = n.alignItems;
  var C = 0;
  ["center", "spaceBetween", "spaceEvenly"].includes(y) && (C = r.reduce(function (m, p) {
    return m + (p[s] || 0);
  }, 0));
  var v = w && b ? function (m) {
    b === "flexStart" ? m[f] = 0 : b === "center" ? m[f] = (w - (m[a] || 0)) / 2 : b === "flexEnd" && (m[f] = w - (m[a] || 0));
  } : function (m) {
    return m;
  };
  if (y === "flexStart") {
    var _m2 = 0;
    for (var _p = 0; _p < r.length; _p++) {
      var S = r[_p];
      S[d] = _m2 + (S[l] || 0), _m2 += (S[s] || 0) + x + (S[l] || 0) + (S[c] || 0), v(S);
    }
    if (n.flexBoundary !== "fixed") {
      var _p2 = _m2 - x;
      if (_p2 !== n[s]) return n[s] = _p2, !0;
    }
  } else if (y === "flexEnd") {
    var _m3 = g;
    for (var _p3 = t - 1; _p3 >= 0; _p3--) {
      var _S = r[_p3];
      L(_S), _S[d] = _m3 - (_S[s] || 0) - (_S[c] || 0), _m3 -= (_S[s] || 0) + x + (_S[l] || 0) + (_S[c] || 0), v(_S);
    }
  } else if (y === "center") {
    var _m4 = (g - (C + x * (t - 1))) / 2;
    for (var _p4 = 0; _p4 < r.length; _p4++) {
      var _S2 = r[_p4];
      _S2[d] = _m4, _m4 += (_S2[s] || 0) + x, v(_S2);
    }
  } else if (y === "spaceBetween") {
    var _m5 = (g - C) / (t - 1);
    var _p5 = 0;
    for (var _S3 = 0; _S3 < r.length; _S3++) {
      var I = r[_S3];
      I[d] = _p5, _p5 += (I[s] || 0) + _m5, v(I);
    }
  } else if (y === "spaceEvenly") {
    var _m6 = (g - C) / (t + 1);
    var _p6 = _m6;
    for (var _S4 = 0; _S4 < r.length; _S4++) {
      var _I = r[_S4];
      _I[d] = _p6, _p6 += (_I[s] || 0) + _m6, v(_I);
    }
  }
  return !1;
}
var ia = pe.animationSettings,
  Xt = new Set();
var Er = !0;
function Pn(n) {
  var r = [];
  for (var _i7 = 0, _Object$entries2 = Object.entries(n); _i7 < _Object$entries2.length; _i7++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i7], 2),
      e = _Object$entries2$_i[0],
      t = _Object$entries2$_i[1];
    r.push({
      type: e,
      props: t
    });
  }
  return dn("DynamicShader", {
    effects: r
  });
}
function wt() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return {
    set: function set(r) {
      ta(r) && (r = {
        width: r,
        color: 255
      }), this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects || {}), {}, _defineProperty({}, "border".concat(n), r)) : _defineProperty({}, "border".concat(n), r);
    }
  };
}
var sa = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"],
  aa = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"];
var Se = /*#__PURE__*/function (_Object) {
  function Se(r) {
    var _this56;
    _classCallCheck(this, Se);
    _this56 = _callSuper(this, Se), _this56._animationQueue = [], _this56._animationRunning = !1, _this56.type = r === "text" ? Ye.TextNode : Ye.Element, _this56.rendered = !1, _this56.lng = {}, _this56.children = new Gs(_assertThisInitialized(_this56));
    return _this56;
  }
  _inherits(Se, _Object);
  return _createClass(Se, [{
    key: "effects",
    get: function get() {
      return this._effects;
    },
    set: function set(r) {
      this._effects = r, this.rendered && (this.shader = Pn(r));
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(r) {
      var e;
      this._parent = r, this.rendered && (this.lng.parent = (e = r == null ? void 0 : r.lng) != null ? e : null);
    }
  }, {
    key: "shader",
    set: function set(r) {
      dr(r) && (r = dn.apply(void 0, _toConsumableArray(r))), this.lng.shader = r;
    }
  }, {
    key: "_sendToLightningAnimatable",
    value: function _sendToLightningAnimatable(r, e) {
      if (this.rendered && pe.animationsEnabled && this.transition && (this.transition === !0 || this.transition[r])) {
        var t = this.transition === !0 || this.transition[r] === !0 ? void 0 : this.transition[r];
        return this.animate(_defineProperty({}, r, e), t).start();
      }
      this.lng[r] = e;
    }
  }, {
    key: "animate",
    value: function animate(r, e) {
      return L(this.rendered, "Node must be rendered before animating"), this.lng.animate(r, e || this.animationSettings);
    }
  }, {
    key: "chain",
    value: function chain(r, e) {
      return this._animationRunning && (this._animationQueue = [], this._animationRunning = !1), e ? this._animationQueueSettings = e : this._animationQueueSettings || (this._animationQueueSettings = e || this.animationSettings), e = e || this._animationQueueSettings, this._animationQueue.push({
        props: r,
        animationSettings: e
      }), this;
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var r;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              r = this._animationQueue.shift();
            case 1:
              if (!r) {
                _context11.next = 8;
                break;
              }
              this._animationRunning = !0;
              _context11.next = 5;
              return this.animate(r.props, r.animationSettings).start().waitUntilStopped();
            case 5:
              r = this._animationQueue.shift();
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
        if (this.forwardFocus !== void 0) if (Qt(this.forwardFocus)) {
          if (this.forwardFocus.call(this, this) !== !1) return;
        } else {
          var r = typeof this.forwardFocus == "number" ? this.forwardFocus : null;
          if (r !== null && r < this.children.length) {
            var e = this.children[r];
            e instanceof Se && e.setFocus();
            return;
          }
        }
        queueMicrotask(function () {
          return Zi(_this57);
        });
      } else this.autofocus = !0;
    }
  }, {
    key: "isTextNode",
    value: function isTextNode() {
      return this.type === Ye.TextNode;
    }
  }, {
    key: "_layoutOnLoad",
    value: function _layoutOnLoad() {
      var _this58 = this;
      this.lng.on("loaded", function (r, e) {
        var t = e.dimensions;
        _this58.parent.updateLayout(_this58, t);
      });
    }
  }, {
    key: "getText",
    value: function getText() {
      var r = "";
      for (var e = 0; e < this.children.length; e++) r += this.children[e].text;
      return r;
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
    set: function set(r) {
      this._events = r;
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    },
    set: function set(r) {
      dr(r) ? this._style = Qo(r) : this._style = r;
      for (var e in this._style) this[e] === void 0 && (this[e] = this._style[e]);
    }
  }, {
    key: "hasChildren",
    get: function get() {
      return this.children.length > 0;
    }
  }, {
    key: "getChildById",
    value: function getChildById(r) {
      return this.children.find(function (e) {
        return e.id === r;
      });
    }
  }, {
    key: "searchChildrenById",
    value: function searchChildrenById(r) {
      for (var e = 0; e < this.children.length; e++) {
        var t = this.children[e];
        if (t instanceof Se) {
          if (t.id === r) return t;
          var o = t.searchChildrenById(r);
          if (o) return o;
        }
      }
    }
  }, {
    key: "states",
    get: function get() {
      return this._states = this._states || new zn(this._stateChanged.bind(this)), this._states;
    },
    set: function set(r) {
      this._states = new zn(this._stateChanged.bind(this), r), this.rendered && this._stateChanged();
    }
  }, {
    key: "animationSettings",
    get: function get() {
      return this._animationSettings || ia;
    },
    set: function set(r) {
      this._animationSettings = r;
    }
  }, {
    key: "requiresLayout",
    value: function requiresLayout() {
      return this.display === "flex" || this.onBeforeLayout;
    }
  }, {
    key: "updateLayout",
    value: function updateLayout(r, e) {
      var t, o;
      if (this.hasChildren) {
        qe("Layout: ", this);
        var i = !1;
        Qt(this.onBeforeLayout) && (i = this.onBeforeLayout.call(this, this, r, e) || !1), this.display === "flex" ? (oa(this) || i) && ((t = this.parent) == null || t.updateLayout()) : i && ((o = this.parent) == null || o.updateLayout()), Qt(this.onLayout) && this.onLayout.call(this, this, r, e);
      }
    }
  }, {
    key: "_stateChanged",
    value: function _stateChanged() {
      var _this59 = this;
      if (qe("State Changed: ", this, this.states), this.forwardStates) {
        var e = this.states.slice();
        this.children.forEach(function (t) {
          return t.states = e;
        });
      }
      var r = this.states;
      if (this._undoStyles || this.style && na(this.style, r)) {
        this._undoStyles = this._undoStyles || [];
        var _e9 = {};
        this._undoStyles.forEach(function (o) {
          _e9[o] = _this59.style[o];
        });
        var t = r.reduce(function (o, i) {
          var s = _this59.style[i];
          return s && (o = _objectSpread(_objectSpread({}, o), s)), o;
        }, {});
        this._undoStyles = Object.keys(t), t.transition !== void 0 && (this.transition = t.transition), Object.assign(this, _e9, t);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var o;
      var r = this,
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
      e.requiresLayout() && !Xt.has(e) && (Xt.add(e), Er && (Er = !1, queueMicrotask(function () {
        Er = !0;
        var i = _toConsumableArray(Xt);
        Xt.clear();
        for (var s = i.length - 1; s >= 0; s--) i[s].updateLayout();
      }))), this.states.length && this._stateChanged();
      var t = r.lng;
      if (t.x = t.x || 0, t.y = t.y || 0, e.rendered && (t.parent = e.lng), r._effects && (t.shader = Pn(r._effects)), r.isTextNode()) {
        if (pe.fontSettings) for (var i in pe.fontSettings) t[i] === void 0 && (t[i] = pe.fontSettings[i]);
        t.text = r.getText(), t.textAlign && !t.contain && console.warn("Text align requires contain: ", r.getText()), t.contain && (t.width || (t.width = (e.width || 0) - t.x - (t.marginRight || 0)), t.contain === "both" && !t.height && !t.maxLines ? t.height = (e.height || 0) - t.y - (t.marginBottom || 0) : t.maxLines === 1 && (t.height = t.height || t.lineHeight || t.fontSize)), qe("Rendering: ", this, t), r.lng = Fe.createTextNode(t), e.requiresLayout() && (!t.width || !t.height) && r._layoutOnLoad();
      } else t.texture || (isNaN(t.width) && (t.width = (e.width || 0) - t.x), isNaN(t.height) && (t.height = (e.height || 0) - t.y), t.rtt && !t.color && (t.color = 4294967295), !t.color && !t.src && (t.color = 0)), qe("Rendering: ", this, t), r.lng = Fe.createNode(t);
      if (r.rendered = !0, r.autosize && e.requiresLayout() && r._layoutOnLoad(), r.onFail && r.lng.on("failed", r.onFail), r.onLoad && r.lng.on("loaded", r.onLoad), Qt(this.onCreate) && this.onCreate.call(this, r), r.onEvents && r.onEvents.forEach(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
          i = _ref15[0],
          s = _ref15[1];
        r.lng.on(i, function (a, l) {
          return s(r, l);
        });
      }), (o = r.lng) != null && o.div && (r.lng.div.element = r), r.type === Ye.Element) for (var _i8 = 0; _i8 < r.children.length; _i8++) {
        var s = r.children[_i8];
        L(s, "Child is undefined"), "render" in s ? s.render() : s.text && console.warn("TextNode outside of <Text>: ", s);
      }
      r.autofocus && r.setFocus();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Object));
var _loop2 = function _loop2() {
  var n = _sa[_i9];
  Object.defineProperty(Se.prototype, n, {
    get: function get() {
      return this.lng[n];
    },
    set: function set(r) {
      this._sendToLightningAnimatable(n, r);
    }
  });
};
for (var _i9 = 0, _sa = sa; _i9 < _sa.length; _i9++) {
  _loop2();
}
var _loop3 = function _loop3() {
  var n = _aa[_i10];
  Object.defineProperty(Se.prototype, n, {
    get: function get() {
      return this.lng[n];
    },
    set: function set(r) {
      this.lng[n] = r;
    }
  });
};
for (var _i10 = 0, _aa = aa; _i10 < _aa.length; _i10++) {
  _loop3();
}
Object.defineProperties(Se.prototype, {
  borderRadius: {
    set: function set(n) {
      this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects), {}, {
        radius: {
          radius: n
        }
      }) : {
        radius: {
          radius: n
        }
      };
    }
  },
  border: wt(),
  borderLeft: wt("Left"),
  borderRight: wt("Right"),
  borderTop: wt("Top"),
  borderBottom: wt("Bottom")
});
Object.defineProperties(Se.prototype, {
  linearGradient: {
    set: function set() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects), {}, {
        linearGradient: n
      }) : {
        linearGradient: n
      };
    }
  }
});
var Q = function Q(n) {
    return function () {
      var r = br("text");
      return un(r, n, !1), r;
    }();
  },
  W = function W(n) {
    return function () {
      var r = br("node");
      return un(r, n, !1), r;
    }();
  };
function la(_ref16) {
  var n = _ref16.createElement,
    r = _ref16.createTextNode,
    e = _ref16.isTextNode,
    t = _ref16.replaceText,
    o = _ref16.insertNode,
    i = _ref16.removeNode,
    s = _ref16.setProperty,
    a = _ref16.getParentNode,
    l = _ref16.getFirstChild,
    c = _ref16.getNextSibling;
  function d(v, m, p, S) {
    if (p !== void 0 && !S && (S = []), typeof m != "function") return f(v, m, S, p);
    Re(function (I) {
      return f(v, m(), I, p);
    }, S);
  }
  function f(v, m, p, S, I) {
    for (; typeof p == "function";) p = p();
    if (m === p) return p;
    var T = _typeof(m),
      _ = S !== void 0;
    if (T === "string" || T === "number") {
      if (T === "number" && (m = m.toString()), _) {
        var A = p[0];
        A && e(A) ? t(A, m) : A = r(m), p = x(v, p, S, A);
      } else p !== "" && typeof p == "string" ? t(l(v), p = m) : (x(v, p, S, r(m)), p = m);
    } else if (m == null || T === "boolean") p = x(v, p, S);else {
      if (T === "function") return Re(function () {
        var A = m();
        for (; typeof A == "function";) A = A();
        p = f(v, A, p, S);
      }), function () {
        return p;
      };
      if (Array.isArray(m)) {
        var _A7 = [];
        if (g(_A7, m, I)) return Re(function () {
          return p = f(v, _A7, p, S, !0);
        }), function () {
          return p;
        };
        if (_A7.length === 0) {
          var E = x(v, p, S);
          if (_) return p = E;
        } else Array.isArray(p) ? p.length === 0 ? y(v, _A7, S) : w(v, p, _A7) : p == null || p === "" ? y(v, _A7) : w(v, _ && p || [l(v)], _A7);
        p = _A7;
      } else {
        if (Array.isArray(p)) {
          if (_) return p = x(v, p, S, m);
          x(v, p, null, m);
        } else p == null || p === "" || !l(v) ? o(v, m) : b(v, m, l(v));
        p = m;
      }
    }
    return p;
  }
  function g(v, m, p) {
    var S = !1;
    for (var I = 0, T = m.length; I < T; I++) {
      var _ = m[I],
        A = void 0;
      if (!(_ == null || _ === !0 || _ === !1)) if (Array.isArray(_)) S = g(v, _) || S;else if ((A = _typeof(_)) == "string" || A === "number") v.push(r(_));else if (A === "function") {
        if (p) {
          for (; typeof _ == "function";) _ = _();
          S = g(v, Array.isArray(_) ? _ : [_]) || S;
        } else v.push(_), S = !0;
      } else v.push(_);
    }
    return S;
  }
  function w(v, m, p) {
    var S = p.length,
      I = m.length,
      T = S,
      _ = 0,
      A = 0,
      E = c(m[I - 1]),
      N = null;
    for (; _ < I || A < T;) {
      if (m[_] === p[A]) {
        _++, A++;
        continue;
      }
      for (; m[I - 1] === p[T - 1];) I--, T--;
      if (I === _) {
        var B = T < S ? A ? c(p[A - 1]) : p[T - A] : E;
        for (; A < T;) o(v, p[A++], B);
      } else if (T === A) for (; _ < I;) (!N || !N.has(m[_])) && i(v, m[_]), _++;else if (m[_] === p[T - 1] && p[A] === m[I - 1]) {
        var _B2 = c(m[--I]);
        o(v, p[A++], c(m[_++])), o(v, p[--T], _B2), m[I] = p[T];
      } else {
        if (!N) {
          N = new Map();
          var F = A;
          for (; F < T;) N.set(p[F], F++);
        }
        var _B3 = N.get(m[_]);
        if (_B3 != null) {
          if (A < _B3 && _B3 < T) {
            var _F = _,
              z = 1,
              M = void 0;
            for (; ++_F < I && _F < T && !((M = N.get(m[_F])) == null || M !== _B3 + z);) z++;
            if (z > _B3 - A) {
              var D = m[_];
              for (; A < _B3;) o(v, p[A++], D);
            } else b(v, p[A++], m[_++]);
          } else _++;
        } else i(v, m[_++]);
      }
    }
  }
  function x(v, m, p, S) {
    if (p === void 0) {
      var T;
      for (; T = l(v);) i(v, T);
      return S && o(v, S), "";
    }
    var I = S || r("");
    if (m.length) {
      var _T = !1;
      for (var _ = m.length - 1; _ >= 0; _--) {
        var A = m[_];
        if (I !== A) {
          var E = a(A) === v;
          !_T && !_ ? E ? b(v, I, A) : o(v, I, p) : E && i(v, A);
        } else _T = !0;
      }
    } else o(v, I, p);
    return [I];
  }
  function y(v, m, p) {
    for (var S = 0, I = m.length; S < I; S++) o(v, m[S], p);
  }
  function b(v, m, p) {
    o(v, m, p), i(v, p);
  }
  function C(v, m) {
    var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var S = arguments.length > 3 ? arguments[3] : undefined;
    return m || (m = {}), S || Re(function () {
      return p.children = f(v, m.children, p.children);
    }), Re(function () {
      return m.ref && m.ref(v);
    }), Re(function () {
      for (var I in m) {
        if (I === "children" || I === "ref") continue;
        var T = m[I];
        T !== p[I] && (s(v, I, T, p[I]), p[I] = T);
      }
    }), p;
  }
  return {
    render: function render(v, m) {
      var p;
      return He(function (S) {
        p = S, d(m, v());
      }), p;
    },
    insert: d,
    spread: function spread(v, m, p) {
      typeof m == "function" ? Re(function (S) {
        return C(v, m(), S, p);
      }) : C(v, m, void 0, p);
    },
    createElement: n,
    createTextNode: r,
    insertNode: o,
    setProp: function setProp(v, m, p, S) {
      return s(v, m, p, S), p;
    },
    mergeProps: on,
    effect: Re,
    memo: X,
    createComponent: Fo,
    use: function use(v, m, p) {
      return te(function () {
        return v(m, p);
      });
    }
  };
}
function ca(n) {
  var r = la(n);
  return r.mergeProps = on, r;
}
var Xo = {
    createElement: function createElement(n) {
      return new Se(n);
    },
    createTextNode: function createTextNode(n) {
      return {
        type: Ye.Text,
        text: n,
        parent: void 0
      };
    },
    replaceText: function replaceText(n, r) {
      qe("Replace Text: ", n, r), n.text = r;
      var e = n.parent;
      L(e), e.text = e.getText();
    },
    setProperty: function setProperty(n, r) {
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      n[r] = e;
    },
    insertNode: function insertNode(n, r, e) {
      qe("INSERT: ", n, r, e), n.children.insert(r, e), r._queueDelete = !1, r instanceof Se ? n.rendered && r.render() : n.isTextNode() && (n.text = n.getText());
    },
    isTextNode: function isTextNode(n) {
      return n.isTextNode();
    },
    removeNode: function removeNode(n, r) {
      qe("REMOVE: ", n, r), n.children.remove(r), r._queueDelete = !0, r instanceof Se && queueMicrotask(function () {
        return r.destroy();
      });
    },
    getParentNode: function getParentNode(n) {
      return n.parent;
    },
    getFirstChild: function getFirstChild(n) {
      return n.children[0];
    },
    getNextSibling: function getNextSibling(n) {
      var r = n.parent.children || [],
        e = r.indexOf(n) + 1;
      if (e < r.length) return r[e];
    }
  },
  Ko = ca(Xo);
var hr;
function da(_x11, _x12) {
  return _da.apply(this, arguments);
}
function _da() {
  _da = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(n, r) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          hr = Vs(n || pe.rendererOptions, r || "app");
          _context16.next = 3;
          return hr.init();
        case 3:
          return _context16.abrupt("return", _context16.sent);
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _da.apply(this, arguments);
}
var ha = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(n, r) {
      var e;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            e = Xo.createElement("App");
            _context12.next = 3;
            return da(void 0, r);
          case 3:
            e.lng = hr.root;
            e.rendered = !0;
            return _context12.abrupt("return", {
              dispose: Ko.render(n, e),
              rootNode: e,
              renderer: hr
            });
          case 6:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function ha(_x13, _x14) {
      return _ref13.apply(this, arguments);
    };
  }(),
  Bd = Ko.effect,
  hn = Ko.memo,
  R = Ko.createComponent,
  br = Ko.createElement,
  Ed = Ko.createTextNode,
  Nd = Ko.insertNode,
  ua = Ko.insert,
  un = Ko.spread,
  fa = Ko.setProp,
  ge = Ko.mergeProps,
  pa = Ko.use;
function ee() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return ra(n) ? n : typeof n == "string" ? n.startsWith("#") ? +(n.replace("#", "0x") + (n.length === 7 ? "ff" : "")) : n.startsWith("0x") ? Number(n) : +("0x" + (n.length === 6 ? n + "ff" : n)) : 0;
}
var Dn = "_$DX_DELEGATE";
function ga(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var e = r[Dn] || (r[Dn] = new Set());
  for (var t = 0, o = n.length; t < o; t++) {
    var i = n[t];
    e.has(i) || (e.add(i), r.addEventListener(i, ma));
  }
}
function ma(n) {
  var r = "$$".concat(n.type);
  var e = n.composedPath && n.composedPath()[0] || n.target;
  for (n.target !== e && Object.defineProperty(n, "target", {
    configurable: !0,
    value: e
  }), Object.defineProperty(n, "currentTarget", {
    configurable: !0,
    get: function get() {
      return e || document;
    }
  }), H.registry && !H.done && (H.done = _$HY.done = !0); e;) {
    var t = e[r];
    if (t && !e.disabled) {
      var o = e["".concat(r, "Data")];
      if (o !== void 0 ? t.call(e, o, n) : t.call(e, n), n.cancelBubble) return;
    }
    e = e._$host || e.parentNode || e.host;
  }
}
var xa = !1;
function jo() {
  var n = new Set();
  function r(o) {
    return n.add(o), function () {
      return n.delete(o);
    };
  }
  var e = !1;
  function t(o, i) {
    if (e) return !(e = !1);
    var s = {
      to: o,
      options: i,
      defaultPrevented: !1,
      preventDefault: function preventDefault() {
        return s.defaultPrevented = !0;
      }
    };
    var _iterator15 = _createForOfIteratorHelper(n),
      _step15;
    try {
      var _loop4 = function _loop4() {
        var a = _step15.value;
        a.listener(_objectSpread(_objectSpread({}, s), {}, {
          from: a.location,
          retry: function retry(l) {
            l && (e = !0), a.navigate(o, _objectSpread(_objectSpread({}, i), {}, {
              resolve: !1
            }));
          }
        }));
      };
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        _loop4();
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    return !s.defaultPrevented;
  }
  return {
    subscribe: r,
    confirm: t
  };
}
var Vr;
function fn() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
    _depth: window.history.length - 1
  }), ""), Vr = window.history.state._depth;
}
fn();
function ya(n) {
  return _objectSpread(_objectSpread({}, n), {}, {
    _depth: window.history.state && window.history.state._depth
  });
}
function va(n, r) {
  var e = !1;
  return function () {
    var t = Vr;
    fn();
    var o = t == null ? null : Vr - t;
    if (e) {
      e = !1;
      return;
    }
    o && r(o) ? (e = !0, window.history.go(-o)) : n();
  };
}
var wa = /^(?:[a-z0-9]+:)?\/\//i,
  ba = /^\/+|(\/)\/+$/g,
  Vo = "http://sr";
function It(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = n.replace(ba, "$1");
  return e ? r || /^[?#]/.test(e) ? e : "/" + e : "";
}
function rr(n, r, e) {
  if (wa.test(r)) return;
  var t = It(n),
    o = e && It(e);
  var i = "";
  return !o || r.startsWith("/") ? i = t : o.toLowerCase().indexOf(t.toLowerCase()) !== 0 ? i = t + o : i = o, (i || "/") + It(r, !i);
}
function Sa(n, r) {
  if (n == null) throw new Error(r);
  return n;
}
function Aa(n, r) {
  return It(n).replace(/\/*(\*.*)?$/g, "") + It(r);
}
function Go(n) {
  var r = {};
  return n.searchParams.forEach(function (e, t) {
    r[t] = e;
  }), r;
}
function qo(n, r, e) {
  var _n$split = n.split("/*", 2),
    _n$split2 = _slicedToArray(_n$split, 2),
    t = _n$split2[0],
    o = _n$split2[1],
    i = t.split("/").filter(Boolean),
    s = i.length;
  return function (a) {
    var l = a.split("/").filter(Boolean),
      c = l.length - s;
    if (c < 0 || c > 0 && o === void 0 && !r) return null;
    var d = {
        path: s ? "" : "/",
        params: {}
      },
      f = function f(g) {
        return e === void 0 ? void 0 : e[g];
      };
    for (var g = 0; g < s; g++) {
      var w = i[g],
        x = l[g],
        y = w[0] === ":",
        b = y ? w.slice(1) : w;
      if (y && Nr(x, f(b))) d.params[b] = x;else if (y || !Nr(x, w)) return null;
      d.path += "/".concat(x);
    }
    if (o) {
      var _g3 = c ? l.slice(-c).join("/") : "";
      if (Nr(_g3, f(o))) d.params[o] = _g3;else return null;
    }
    return d;
  };
}
function Nr(n, r) {
  var e = function e(t) {
    return t.localeCompare(n, void 0, {
      sensitivity: "base"
    }) === 0;
  };
  return r === void 0 ? !0 : typeof r == "string" ? e(r) : typeof r == "function" ? r(n) : Array.isArray(r) ? r.some(e) : r instanceof RegExp ? r.test(n) : !1;
}
function Ca(n) {
  var _n$pattern$split = n.pattern.split("/*", 2),
    _n$pattern$split2 = _slicedToArray(_n$pattern$split, 2),
    r = _n$pattern$split2[0],
    e = _n$pattern$split2[1],
    t = r.split("/").filter(Boolean);
  return t.reduce(function (o, i) {
    return o + (i.startsWith(":") ? 2 : 3);
  }, t.length - (e === void 0 ? 0 : 1));
}
function Zo(n) {
  var r = new Map(),
    e = mt();
  return new Proxy({}, {
    get: function get(t, o) {
      return r.has(o) || _o(e, function () {
        return r.set(o, X(function () {
          return n()[o];
        }));
      }), r.get(o)();
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    },
    ownKeys: function ownKeys() {
      return Reflect.ownKeys(n());
    }
  });
}
function pn(n) {
  var r = /(\/?\:[^\/]+)\?/.exec(n);
  if (!r) return [n];
  var e = n.slice(0, r.index),
    t = n.slice(r.index + r[0].length);
  var o = [e, e += r[1]];
  for (; r = /^(\/\:[^\/]+)\?/.exec(t);) o.push(e += r[1]), t = t.slice(r[0].length);
  return pn(t).reduce(function (i, s) {
    return [].concat(_toConsumableArray(i), _toConsumableArray(o.map(function (a) {
      return a + s;
    })));
  }, []);
}
var Ta = 100,
  Jo = Ro(),
  ei = Ro(),
  gn = function gn() {
    return Sa(Io(Jo), "<A> and 'use' router primitives can be only used inside a Route.");
  },
  mn = function mn() {
    return gn().navigatorFactory();
  },
  ti = function ti() {
    return gn().location;
  },
  _a = function _a(n, r) {
    var e = ti(),
      t = X(function () {
        return pn(n()).map(function (o) {
          return qo(o, void 0, r);
        });
      });
    return X(function () {
      var _iterator16 = _createForOfIteratorHelper(t()),
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
  Ra = function Ra() {
    return gn().params;
  };
function Ia(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var e = n.component,
    t = n.load,
    o = n.children,
    i = n.info,
    s = !o || Array.isArray(o) && !o.length,
    a = {
      key: n,
      component: e,
      load: t,
      info: i
    };
  return ri(n.path).reduce(function (l, c) {
    var _iterator17 = _createForOfIteratorHelper(pn(c)),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var d = _step17.value;
        var f = Aa(r, d);
        var g = s ? f : f.split("/*", 1)[0];
        g = g.split("/").map(function (w) {
          return w.startsWith(":") || w.startsWith("*") ? w : encodeURIComponent(w);
        }).join("/"), l.push(_objectSpread(_objectSpread({}, a), {}, {
          originalPath: c,
          pattern: g,
          matcher: qo(g, !s, n.matchFilters)
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
function ka(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    routes: n,
    score: Ca(n[n.length - 1]) * 1e4 - r,
    matcher: function matcher(e) {
      var t = [];
      for (var o = n.length - 1; o >= 0; o--) {
        var i = n[o],
          s = i.matcher(e);
        if (!s) return null;
        t.unshift(_objectSpread(_objectSpread({}, s), {}, {
          route: i
        }));
      }
      return t;
    }
  };
}
function ri(n) {
  return Array.isArray(n) ? n : [n];
}
function ni(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var o = ri(n);
  for (var i = 0, s = o.length; i < s; i++) {
    var a = o[i];
    if (a && _typeof(a) == "object") {
      a.hasOwnProperty("path") || (a.path = "");
      var l = Ia(a, r);
      var _iterator18 = _createForOfIteratorHelper(l),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var c = _step18.value;
          e.push(c);
          var d = Array.isArray(a.children) && a.children.length === 0;
          if (a.children && !d) ni(a.children, c.pattern, e, t);else {
            var f = ka(_toConsumableArray(e), t.length);
            t.push(f);
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
  return e.length ? t : t.sort(function (i, s) {
    return s.score - i.score;
  });
}
function On(n, r) {
  for (var e = 0, t = n.length; e < t; e++) {
    var o = n[e].matcher(r);
    if (o) return o;
  }
  return [];
}
function Ba(n, r) {
  var e = new URL(Vo),
    t = X(function (l) {
      var c = n();
      try {
        return new URL(c, e);
      } catch (d) {
        return console.error("Invalid path ".concat(c)), l;
      }
    }, e, {
      equals: function equals(l, c) {
        return l.href === c.href;
      }
    }),
    o = X(function () {
      return t().pathname;
    }),
    i = X(function () {
      return t().search;
    }, !0),
    s = X(function () {
      return t().hash;
    }),
    a = function a() {
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
      return s();
    },
    get state() {
      return r();
    },
    get key() {
      return a();
    },
    query: Zo(gt(i, function () {
      return Go(t());
    }))
  };
}
var We;
function Ea(n, r, e) {
  var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _n$signal = _slicedToArray(n.signal, 2),
    o = _n$signal[0],
    i = _n$signal[1],
    _n$utils = n.utils,
    s = _n$utils === void 0 ? {} : _n$utils,
    a = s.parsePath || function (B) {
      return B;
    },
    l = s.renderPath || function (B) {
      return B;
    },
    c = s.beforeLeave || jo(),
    d = rr("", t.base || "");
  if (d === void 0) throw new Error("".concat(d, " is not a valid base path"));
  d && !o().value && i({
    value: d,
    replace: !0,
    scroll: !1
  });
  var _Y15 = Y(!1),
    _Y16 = _slicedToArray(_Y15, 2),
    f = _Y16[0],
    g = _Y16[1],
    w = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(B) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              g(!0);
              _context13.prev = 1;
              _context13.next = 4;
              return Wi(B);
            case 4:
              _context13.prev = 4;
              g(!1);
              return _context13.finish(4);
            case 7:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[1,, 4, 7]]);
      }));
      return function w(_x15) {
        return _ref17.apply(this, arguments);
      };
    }(),
    _Y17 = Y(o().value),
    _Y18 = _slicedToArray(_Y17, 2),
    x = _Y18[0],
    y = _Y18[1],
    _Y19 = Y(o().state),
    _Y20 = _slicedToArray(_Y19, 2),
    b = _Y20[0],
    C = _Y20[1],
    v = Ba(x, b),
    m = [],
    p = Y([]),
    S = X(function () {
      return On(r(), v.pathname);
    }),
    I = Zo(function () {
      var B = S(),
        F = {};
      for (var z = 0; z < B.length; z++) Object.assign(F, B[z].params);
      return F;
    }),
    T = {
      pattern: d,
      path: function path() {
        return d;
      },
      outlet: function outlet() {
        return null;
      },
      resolvePath: function resolvePath(B) {
        return rr(d, B);
      }
    };
  return Re(function () {
    var _o3 = o(),
      B = _o3.value,
      F = _o3.state;
    te(function () {
      B !== x() && w(function () {
        We = "native", y(B), C(F), p[1]([]);
      }).then(function () {
        We = void 0;
      });
    });
  }), {
    base: T,
    location: v,
    params: I,
    isRouting: f,
    renderPath: l,
    parsePath: a,
    navigatorFactory: A,
    matches: S,
    beforeLeave: c,
    preloadRoute: N,
    singleFlight: t.singleFlight === void 0 ? !0 : t.singleFlight,
    submissions: p
  };
  function _(B, F, z) {
    te(function () {
      if (typeof F == "number") {
        F && (s.go ? s.go(F) : console.warn("Router integration does not support relative routing"));
        return;
      }
      var _replace$resolve$scro = _objectSpread({
          replace: !1,
          resolve: !0,
          scroll: !0
        }, z),
        M = _replace$resolve$scro.replace,
        D = _replace$resolve$scro.resolve,
        $ = _replace$resolve$scro.scroll,
        ie = _replace$resolve$scro.state,
        J = D ? B.resolvePath(F) : rr("", F);
      if (J === void 0) throw new Error("Path '".concat(F, "' is not a routable path"));
      if (m.length >= Ta) throw new Error("Too many redirects");
      var ce = x();
      if ((J !== ce || ie !== b()) && !xa) {
        if (c.confirm(J, z)) {
          var Ce = m.push({
            value: ce,
            replace: M,
            scroll: $,
            state: b()
          });
          w(function () {
            We = "navigate", y(J), C(ie), p[1]([]);
          }).then(function () {
            m.length === Ce && (We = void 0, E({
              value: J,
              state: ie
            }));
          });
        }
      }
    });
  }
  function A(B) {
    return B = B || Io(ei) || T, function (F, z) {
      return _(B, F, z);
    };
  }
  function E(B) {
    var F = m[0];
    F && ((B.value !== F.value || B.state !== F.state) && i(_objectSpread(_objectSpread({}, B), {}, {
      replace: F.replace,
      scroll: F.scroll
    })), m.length = 0);
  }
  function N(B, F) {
    var z = On(r(), B.pathname),
      M = We;
    We = "preload";
    var _loop5 = function _loop5() {
      var _z$D = z[D],
        $ = _z$D.route,
        ie = _z$D.params;
      $.component && $.component.preload && $.component.preload();
      var J = $.load;
      F && J && _o(e(), function () {
        return J({
          params: ie,
          location: {
            pathname: B.pathname,
            search: B.search,
            hash: B.hash,
            query: Go(B),
            state: null,
            key: ""
          },
          intent: "preload"
        });
      });
    };
    for (var D in z) {
      _loop5();
    }
    We = M;
  }
}
function Na(n, r, e, t) {
  var o = n.base,
    i = n.location,
    s = n.params,
    _t$route = t().route,
    a = _t$route.pattern,
    l = _t$route.component,
    c = _t$route.load,
    d = X(function () {
      return t().path;
    });
  l && l.preload && l.preload();
  var f = c ? c({
    params: s,
    location: i,
    intent: We || "initial"
  }) : void 0;
  return {
    parent: r,
    pattern: a,
    path: d,
    outlet: function outlet() {
      return l ? Fo(l, {
        params: s,
        location: i,
        data: f,
        get children() {
          return e();
        }
      }) : e();
    },
    resolvePath: function resolvePath(w) {
      return rr(o.path(), w, d());
    }
  };
}
var La = function La(n) {
  return function (r) {
    var e = r.base,
      t = rn(function () {
        return r.children;
      }),
      o = X(function () {
        return ni(t(), r.base || "");
      });
    var i;
    var s = Ea(n, o, function () {
      return i;
    }, {
      base: e,
      singleFlight: r.singleFlight
    });
    return n.create && n.create(s), R(Jo.Provider, {
      value: s,
      get children() {
        return R(Fa, {
          routerState: s,
          get root() {
            return r.root;
          },
          get load() {
            return r.rootLoad;
          },
          get children() {
            return [hn(function () {
              return (i = mt()) && null;
            }), R(Ma, {
              routerState: s,
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
function Fa(n) {
  var r = n.routerState.location,
    e = n.routerState.params,
    t = X(function () {
      return n.load && te(function () {
        return n.load({
          params: e,
          location: r,
          intent: "preload"
        });
      });
    });
  return R(wr, {
    get when() {
      return n.root;
    },
    keyed: !0,
    get fallback() {
      return n.children;
    },
    children: function children(o) {
      return R(o, {
        params: e,
        location: r,
        get data() {
          return t();
        },
        get children() {
          return n.children;
        }
      });
    }
  });
}
function Ma(n) {
  var r = [];
  var e;
  var t = X(gt(n.routerState.matches, function (o, i, s) {
    var a = i && o.length === i.length;
    var l = [];
    var _loop6 = function _loop6(c) {
      var f = i && i[c],
        g = o[c];
      s && f && g.route.key === f.route.key ? l[c] = s[c] : (a = !1, r[c] && r[c](), He(function (w) {
        r[c] = w, l[c] = Na(n.routerState, l[c - 1] || n.routerState.base, Wn(function () {
          return t()[c + 1];
        }), function () {
          return n.routerState.matches()[c];
        });
      }));
    };
    for (var c = 0, d = o.length; c < d; c++) {
      _loop6(c);
    }
    return r.splice(o.length).forEach(function (c) {
      return c();
    }), s && a ? s : (e = l[0], l);
  }));
  return Wn(function () {
    return t() && e;
  })();
}
var Wn = function Wn(n) {
    return function () {
      return R(wr, {
        get when() {
          return n();
        },
        keyed: !0,
        children: function children(r) {
          return R(ei.Provider, {
            value: r,
            get children() {
              return r.outlet();
            }
          });
        }
      });
    };
  },
  se = function se(n) {
    var r = rn(function () {
      return n.children;
    });
    return on(n, {
      get children() {
        return r();
      }
    });
  };
function za(_ref18, e, t) {
  var _ref19 = _slicedToArray(_ref18, 2),
    n = _ref19[0],
    r = _ref19[1];
  return [e ? function () {
    return e(n());
  } : n, t ? function (o) {
    return r(t(o));
  } : r];
}
function Pa(n) {
  if (n === "#") return null;
  try {
    return document.querySelector(n);
  } catch (r) {
    return null;
  }
}
function Da(n) {
  var r = !1;
  var e = function e(o) {
      return typeof o == "string" ? {
        value: o
      } : o;
    },
    t = za(Y(e(n.get()), {
      equals: function equals(o, i) {
        return o.value === i.value;
      }
    }), void 0, function (o) {
      return !r && n.set(o), o;
    });
  return n.init && ke(n.init(function () {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : n.get();
    r = !0, t[1](e(o)), r = !1;
  })), La({
    signal: t,
    create: n.create,
    utils: n.utils
  });
}
function Oa(n, r, e) {
  return n.addEventListener(r, e), function () {
    return n.removeEventListener(r, e);
  };
}
function Wa(n, r) {
  var e = Pa("#".concat(n));
  e ? e.scrollIntoView() : r && window.scrollTo(0, 0);
}
var Ua = new Map();
function Ya() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/_server";
  return function (t) {
    var o = t.base.path(),
      i = t.navigatorFactory(t.base);
    var s = {};
    function a(x) {
      return x.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function l(x) {
      if (x.defaultPrevented || x.button !== 0 || x.metaKey || x.altKey || x.ctrlKey || x.shiftKey) return;
      var y = x.composedPath().find(function (S) {
        return S instanceof Node && S.nodeName.toUpperCase() === "A";
      });
      if (!y || r && !y.hasAttribute("link")) return;
      var b = a(y),
        C = b ? y.href.baseVal : y.href;
      if ((b ? y.target.baseVal : y.target) || !C && !y.hasAttribute("state")) return;
      var m = (y.getAttribute("rel") || "").split(/\s+/);
      if (y.hasAttribute("download") || m && m.includes("external")) return;
      var p = b ? new URL(C, document.baseURI) : new URL(C);
      if (!(p.origin !== window.location.origin || o && p.pathname && !p.pathname.toLowerCase().startsWith(o.toLowerCase()))) return [y, p];
    }
    function c(x) {
      var y = l(x);
      if (!y) return;
      var _y2 = _slicedToArray(y, 2),
        b = _y2[0],
        C = _y2[1],
        v = t.parsePath(C.pathname + C.search + C.hash),
        m = b.getAttribute("state");
      x.preventDefault(), i(v, {
        resolve: !1,
        replace: b.hasAttribute("replace"),
        scroll: !b.hasAttribute("noscroll"),
        state: m && JSON.parse(m)
      });
    }
    function d(x) {
      var y = l(x);
      if (!y) return;
      var _y3 = _slicedToArray(y, 2),
        b = _y3[0],
        C = _y3[1];
      s[C.pathname] || t.preloadRoute(C, b.getAttribute("preload") !== "false");
    }
    function f(x) {
      var y = l(x);
      if (!y) return;
      var _y4 = _slicedToArray(y, 2),
        b = _y4[0],
        C = _y4[1];
      s[C.pathname] || (s[C.pathname] = setTimeout(function () {
        t.preloadRoute(C, b.getAttribute("preload") !== "false"), delete s[C.pathname];
      }, 200));
    }
    function g(x) {
      var y = l(x);
      if (!y) return;
      var _y5 = _slicedToArray(y, 2),
        b = _y5[1];
      s[b.pathname] && (clearTimeout(s[b.pathname]), delete s[b.pathname]);
    }
    function w(x) {
      if (x.defaultPrevented) return;
      var y = x.submitter && x.submitter.hasAttribute("formaction") ? x.submitter.getAttribute("formaction") : x.target.getAttribute("action");
      if (!y) return;
      if (!y.startsWith("https://action/")) {
        var C = new URL(y, Vo);
        if (y = t.parsePath(C.pathname + C.search), !y.startsWith(e)) return;
      }
      if (x.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      var b = Ua.get(y);
      if (b) {
        x.preventDefault();
        var _C4 = new FormData(x.target);
        x.submitter && x.submitter.name && _C4.append(x.submitter.name, x.submitter.value), b.call({
          r: t,
          f: x.target
        }, _C4);
      }
    }
    ga(["click", "submit"]), document.addEventListener("click", c), n && (document.addEventListener("mouseover", f), document.addEventListener("mouseout", g), document.addEventListener("focusin", d), document.addEventListener("touchstart", d)), document.addEventListener("submit", w), ke(function () {
      document.removeEventListener("click", c), n && (document.removeEventListener("mouseover", f), document.removeEventListener("mouseout", g), document.removeEventListener("focusin", d), document.removeEventListener("touchstart", d)), document.removeEventListener("submit", w);
    });
  };
}
function $a(n) {
  var r = n.replace(/^.*?#/, "");
  if (!r.startsWith("/")) {
    var _window$location$hash = window.location.hash.split("#", 2),
      _window$location$hash2 = _slicedToArray(_window$location$hash, 2),
      _window$location$hash3 = _window$location$hash2[1],
      e = _window$location$hash3 === void 0 ? "/" : _window$location$hash3;
    return "".concat(e, "#").concat(r);
  }
  return r;
}
function Ha(n) {
  var r = function r() {
      return window.location.hash.slice(1);
    },
    e = jo();
  return Da({
    get: r,
    set: function set(_ref20) {
      var t = _ref20.value,
        o = _ref20.replace,
        i = _ref20.scroll,
        s = _ref20.state;
      o ? window.history.replaceState(ya(s), "", "#" + t) : window.location.hash = t;
      var a = t.indexOf("#"),
        l = a >= 0 ? t.slice(a + 1) : "";
      Wa(l, i), fn();
    },
    init: function init(t) {
      return Oa(window, "hashchange", va(t, function (o) {
        return !e.confirm(o && o < 0 ? o : r());
      }));
    },
    create: Ya(n.preload, n.explicitLinks, n.actionBase),
    utils: {
      go: function go(t) {
        return window.history.go(t);
      },
      renderPath: function renderPath(t) {
        return "#".concat(t);
      },
      parsePath: $a,
      beforeLeave: e
    }
  })(n);
}
var Qa = !!qi,
  Xa = Qa ? function (n) {
    return mt() ? ke(n) : n;
  } : ke;
function Ka(n, r, e, t) {
  return n.addEventListener(r, e, t), Xa(n.removeEventListener.bind(n, r, e, t));
}
function ja(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mt();
  var e = 0,
    t,
    o;
  return function () {
    return e++, ke(function () {
      e--, queueMicrotask(function () {
        !e && o && (o(), o = t = void 0);
      });
    }), o || He(function (i) {
      return t = n(o = i);
    }, r), t;
  };
}
var Va = ja(function () {
  var _Y21 = Y(null),
    _Y22 = _slicedToArray(_Y21, 2),
    n = _Y22[0],
    r = _Y22[1];
  return Ka(window, "keydown", function (e) {
    r(e), setTimeout(function () {
      return r(null);
    });
  }), n;
});
function Kt(n) {
  return typeof n == "function";
}
function Ga(n) {
  return Array.isArray(n);
}
var jt = {
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
  _Y23 = Y([]),
  _Y24 = _slicedToArray(_Y23, 2),
  ur = _Y24[0],
  qa = _Y24[1],
  Za = function Za(n) {
    var r = Va();
    if (n) {
      var _loop7 = function _loop7() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i11], 2),
          e = _Object$entries3$_i[0],
          t = _Object$entries3$_i[1];
        Ga(t) ? t.forEach(function (o) {
          jt[o] = e;
        }) : jt[t] = e;
      };
      for (var _i11 = 0, _Object$entries3 = Object.entries(n); _i11 < _Object$entries3.length; _i11++) {
        _loop7();
      }
    }
    return Je(gt(an, function (e, t) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var i = e;
      var s = [];
      for (; i;) i.states.has("focus") || (i.states.add("focus"), Kt(i.onFocus) && i.onFocus.call(i, e, t)), s.push(i), i = i.parent;
      return o.forEach(function (a) {
        s.includes(a) || (a.states.remove("focus"), Kt(a.onBlur) && a.onBlur.call(a, e, t));
      }), qa(s), s;
    }, {
      defer: !0
    })), Je(function () {
      var e = r();
      if (e) {
        var t = jt[e.key] || jt[e.keyCode];
        te(function () {
          var o = ur();
          var i;
          var _iterator19 = _createForOfIteratorHelper(o),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var s = _step19.value;
              if (i = i || s, t) {
                var a = s["on".concat(t)];
                if (Kt(a) && a.call(s, e, s, i) === !0) break;
              } else console.log("Unhandled key event: ".concat(e.key || e.keyCode));
              if (Kt(s.onKeyPress) && s.onKeyPress.call(s, e, t, s, i) === !0) break;
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          return !1;
        });
      }
    }), ur;
  };
function Ja(n, r) {
  var _e10, _e11;
  var e = r();
  var t, o, i, s;
  Array.isArray(e) ? e.length === 2 ? (t = s = e[0], o = i = e[1]) : e.length === 3 ? (t = e[0], o = i = e[1], s = e[2]) : (_e10 = e, _e11 = _slicedToArray(_e10, 4), t = _e11[0], i = _e11[1], s = _e11[2], o = _e11[3], _e10) : t = i = s = o = e, n.onBeforeLayout = function (a, l) {
    if (l) {
      n.width = n.children.reduce(function (f, g) {
        return f + (g.width || 0);
      }, 0) + o + i;
      var c = n.children[0];
      c && (c.x = o, c.marginLeft = o);
      var d = 0;
      return n.children.forEach(function (f) {
        f.y = t, f.marginTop = t, d = Math.max(d, f.height || 0);
      }), n.height = d + t + s, !0;
    }
  };
}
function el() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var r = [];
  var e;
  for (e = 0; e < n.length; e++) {
    var t = n[e];
    if (typeof t == "string" && !t.includes("PAUSE-")) r.push(n[e]);else break;
  }
  return [r.join(",\b ")].concat(n.slice(e));
}
function Un(n) {
  return new Promise(function (r) {
    setTimeout(r, n);
  });
}
function tl(n, r) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en-US";
  var t = window.speechSynthesis;
  return new Promise(function (o, i) {
    var s = new SpeechSynthesisUtterance(n);
    s.lang = e, s.onend = function () {
      o();
    }, s.onerror = function (a) {
      i(a);
    }, r.push(s), t.speak(s);
  });
}
function Gr(n, r) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var t = window.speechSynthesis,
    o = el(Array.isArray(n) ? n : [n]),
    i = [],
    s = [];
  var a = !0;
  return {
    series: _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var c, d, f, _d2, _d3;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
          case 1:
            if (!(a && o.length)) {
              _context14.next = 61;
              break;
            }
            _context14.next = 4;
            return Promise.resolve(o.shift());
          case 4:
            c = _context14.sent;
            if (!a) {
              _context14.next = 58;
              break;
            }
            if (!(typeof c == "string" && c.includes("PAUSE-"))) {
              _context14.next = 13;
              break;
            }
            d = Number(c.split("PAUSE-")[1]) * 1e3;
            isNaN(d) && (d = 0);
            _context14.next = 11;
            return Un(d);
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
            if (!(a && f > 0)) {
              _context14.next = 42;
              break;
            }
            _context14.prev = 16;
            _context14.next = 19;
            return tl(c, s, r);
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
            return Un(500 * (3 - f));
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
            _d2 = Gr(c(), r, !1);
            i.push(_d2);
            _context14.next = 49;
            return _d2.series;
          case 49:
            _context14.next = 56;
            break;
          case 51:
            if (!Array.isArray(c)) {
              _context14.next = 56;
              break;
            }
            _d3 = Gr(c, r, !1);
            i.push(_d3);
            _context14.next = 56;
            return _d3.series;
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
            a = !1;
            return _context14.finish(61);
          case 64:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0,, 61, 64], [16, 22]]);
    }))(),
    get active() {
      return a;
    },
    append: function append(c) {
      o.push(c);
    },
    cancel: function cancel() {
      a && (e && t.cancel(), i.forEach(function (c) {
        c.cancel();
      }), a = !1);
    }
  };
}
var Vt;
function rl(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
  return Vt && Vt.cancel(), Vt = Gr(n, r), Vt;
}
var nl = function nl(n, r) {
  var e;
  var t = function t() {
    return clearTimeout(e);
  };
  return mt() && ke(t), Object.assign(function () {
    for (var _len4 = arguments.length, i = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      i[_key4] = arguments[_key4];
    }
    e !== void 0 && t(), e = setTimeout(function () {
      return n.apply(void 0, i);
    }, r);
  }, {
    clear: t
  });
};
var qr,
  kt = [],
  _e,
  Zr = !1;
var ol = 3e5;
function Yn(n, r) {
  var e = nl(n, r);
  var t;
  var o = function o(i) {
    t = i, e(i);
  };
  return o.flush = function () {
    e.clear(), n(t);
  }, o.clear = e.clear, o;
}
function bt(n) {
  return n.id || n.name;
}
function il() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!ne.onFocusChange || !ne.enabled) return;
  var r = n.every(function (i) {
      return !i.loading;
    }),
    e = n.filter(function (i) {
      return !kt.includes(i);
    });
  if (qr(), !r && ne.onFocusChange) {
    ne.onFocusChange([]);
    return;
  }
  kt = n.slice(0);
  var t = [],
    o = e.reduce(function (i, s) {
      return s.announce ? (i.push([bt(s), "Announce", s.announce]), t.push(s.announce)) : s.title ? (i.push([bt(s), "Title", s.title]), t.push(s.title)) : i.push([bt(s), "No Announce", ""]), i;
    }, []);
  if (e.reverse().reduce(function (i, s) {
    return s.announceContext ? (i.push([bt(s), "Context", s.announceContext]), t.push(s.announceContext)) : i.push([bt(s), "No Context", ""]), i;
  }, o), ne.debug && console.table(o), t.length) return ne.speak(t.reduce(function (i, s) {
    return i.concat(s);
  }, []));
}
function sl(n) {
  if (!Zr) return _e = rl(n);
}
var ne = {
    debug: !1,
    enabled: !0,
    cancel: function cancel() {
      _e && _e.cancel();
    },
    clearPrevFocus: function clearPrevFocus() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      kt = kt.slice(0, n), qr();
    },
    speak: function speak(n) {
      var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref22$append = _ref22.append,
        r = _ref22$append === void 0 ? !1 : _ref22$append,
        _ref22$notification = _ref22.notification,
        e = _ref22$notification === void 0 ? !1 : _ref22$notification;
      return ne.onFocusChange && ne.enabled && (ne.onFocusChange.flush(), r && _e && _e.active ? _e.append(n) : (ne.cancel(), sl(n)), e && (Zr = !0, _e == null || _e.series.finally(function () {
        Zr = !1, ne.refresh();
      }).catch(console.error))), _e;
    },
    refresh: function refresh() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      ne.clearPrevFocus(n), ne.onFocusChange && ne.onFocusChange(te(function () {
        return ur();
      }));
    },
    setupTimers: function setupTimers() {
      var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref23$focusDebounce = _ref23.focusDebounce,
        n = _ref23$focusDebounce === void 0 ? 400 : _ref23$focusDebounce,
        _ref23$focusChangeTim = _ref23.focusChangeTimeout,
        r = _ref23$focusChangeTim === void 0 ? ol : _ref23$focusChangeTim;
      ne.onFocusChange = Yn(il, n), qr = Yn(function () {
        kt = [];
      }, r);
    }
  },
  al = function al() {
    return ne.setupTimers(), Je(gt(ur, ne.onFocusChange, {
      defer: !0
    })), ne;
  };
function ll(n, r) {
  var e = Fe.createTexture("ImageTexture", {
    src: n
  });
  return r.reduce(function (t, o) {
    var i = o.x,
      s = o.y,
      a = o.width,
      l = o.height;
    return t[o.name] = Fe.createTexture("SubTexture", {
      texture: e,
      x: i,
      y: s,
      width: a,
      height: l
    }), t;
  }, {});
}
var _Y25 = Y(""),
  _Y26 = _slicedToArray(_Y25, 2),
  cl = _Y26[0],
  dl = _Y26[1],
  h = {
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
  };
function hl() {
  var n,
    r,
    e,
    t = 0;
  var o = 1,
    i = {
      duration: 750,
      easing: "ease-in-out"
    },
    s = {
      alpha: o,
      color: 4294967295
    };
  function a(l) {
    if (l.startsWith("#")) {
      n.color = ee(l), n.src = "", n.alpha = 1, t = 1, r.alpha = 0, e.alpha = 0;
      return;
    } else n.color = 4294967295, e.alpha = 1;
    if (t === 0) {
      n.src = l, t = 1;
      return;
    }
    if (t === 1) {
      r.src = l, t = 2, r.alpha = 0, r.animate({
        alpha: o
      }, i).start(), n.animate({
        alpha: 0
      }, i).start();
      return;
    }
    t === 2 && (n.src = l, t = 1, n.alpha = 0, n.animate({
      alpha: o
    }, i).start(), r.animate({
      alpha: 0
    }, i).start());
  }
  return Je(gt(cl, function (l) {
    a(l);
  }, {
    defer: !0
  })), R(W, {
    width: 1920,
    height: 1080,
    zIndex: -5,
    get children() {
      return [R(W, {
        ref: function ref(l) {
          var c = n;
          typeof c == "function" ? c(l) : n = l;
        },
        style: s
      }), R(W, {
        ref: function ref(l) {
          var c = r;
          typeof c == "function" ? c(l) : r = l;
        },
        style: s,
        alpha: 0
      }), R(W, {
        ref: function ref(l) {
          var c = e;
          typeof c == "function" ? c(l) : e = l;
        },
        src: "./assets/hero-mask-inverted.png",
        get color() {
          return ee(h.color.materialBrand);
        },
        width: 1920,
        height: 1080
      })];
    }
  });
}
var $n, Hn, Qn, Xn, Kn, jn, Vn, Gn, qn, Zn, Jn, eo, to, ro, no, oo, io, so, ao;
function Gt(n) {
  if (!n || !n[Symbol.iterator]) throw new Error("objectFromEntries requires a single iterable argument");
  var r = {};
  var _iterator20 = _createForOfIteratorHelper(n),
    _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var _step20$value = _slicedToArray(_step20.value, 2),
        e = _step20$value[0],
        t = _step20$value[1];
      r[e] = t;
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
  return r;
}
var ul = ["focus", "disabled"],
  fl = ["brand", "inverse", "neutral"];
function P(_ref21) {
  var n = _ref21.themeKeys,
    r = _ref21.base,
    e = _ref21.modes,
    t = _ref21.tones,
    o = _ref21.themeStyles,
    _ref21$modeKeys = _ref21.modeKeys,
    i = _ref21$modeKeys === void 0 ? ul : _ref21$modeKeys,
    _ref21$toneKeys = _ref21.toneKeys,
    s = _ref21$toneKeys === void 0 ? fl : _ref21$toneKeys;
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var l = function l(x, y, b) {
      var C = s.map(function (v) {
        var S, I;
        var m = {};
        return new Set([].concat.apply([], [(S = x == null ? void 0 : x[v]) != null ? S : {}, (I = y == null ? void 0 : y[v]) != null ? I : {}].map(Object.keys))).forEach(function (T) {
          var E;
          var _, A;
          i.includes(T) || (m[T] = (E = (_ = y == null ? void 0 : y[v]) == null ? void 0 : _[T]) != null ? E : (A = x == null ? void 0 : x[v]) == null ? void 0 : A[T]);
        }), i.forEach(function (T) {
          var _, A;
          m[T] = _objectSpread(_objectSpread(_objectSpread({}, b[T]), (_ = x == null ? void 0 : x[v]) == null ? void 0 : _[T]), (A = y == null ? void 0 : y[v]) == null ? void 0 : A[T]);
        }), [v, m];
      });
      return Gt(C);
    },
    c = function c(x, y) {
      var b = i.map(function (v) {
        return [v, _objectSpread(_objectSpread({}, x == null ? void 0 : x[v]), y == null ? void 0 : y[v])];
      });
      return Gt(b);
    },
    d = function d(x, y) {
      return _objectSpread(_objectSpread({}, x), y.base);
    },
    f = function f(x) {
      return Gt(Object.entries(n).filter(function (_ref24) {
        var _ref25 = _slicedToArray(_ref24, 2),
          y = _ref25[0],
          b = _ref25[1];
        return x[b];
      }).map(function (_ref26) {
        var _ref27 = _slicedToArray(_ref26, 2),
          y = _ref27[0],
          b = _ref27[1];
        return [y, x[b]];
      }));
    },
    g = function g(x) {
      return Gt(Object.entries(x).map(function (_ref28) {
        var _ref29 = _slicedToArray(_ref28, 2),
          b = _ref29[0],
          C = _ref29[1];
        var v = f(C);
        return Object.entries(C).filter(function (_ref30) {
          var _ref31 = _slicedToArray(_ref30, 2),
            m = _ref31[0],
            p = _ref31[1];
          return i.includes(m);
        }).forEach(function (_ref32) {
          var _ref33 = _slicedToArray(_ref32, 2),
            m = _ref33[0],
            p = _ref33[1];
          v[m] = f(p);
        }), [b, v];
      }));
    };
  return function (x, y, b) {
    var C = g(o);
    a && console.log(C);
    var v = d(x, C);
    a && console.log(v);
    var m = c(y, C);
    a && console.log(m);
    var p = l(b, C, m);
    return a && console.log(p), {
      base: _objectSpread(_objectSpread({}, v), m),
      tones: p
    };
  }(r, e, t);
}
function fr() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (r, e) {
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = arguments.length > 3 ? arguments[3] : undefined;
    var b, C, v, m;
    if (r.children.length === 0) return;
    var i = r.flexDirection === "row" ? "width" : "height",
      s = r.flexDirection === "row" ? "x" : "y",
      a = r.gap || 0,
      l = r.scroll || "auto",
      _pl = pl(r),
      _pl2 = _slicedToArray(_pl, 2),
      c = _pl2[0],
      d = _pl2[1];
    var f = (b = r[s]) != null ? b : 0;
    var g = (C = e == null ? void 0 : e[s]) != null ? C : 0,
      w = (v = e == null ? void 0 : e[i]) != null ? v : 0,
      x = o === void 0 ? "none" : t > o ? "positive" : "negative";
    var y = f;
    if (l === "auto") r.scrollIndex != null && r.scrollIndex >= 0 ? r.selected >= r.scrollIndex && (x === "positive" ? y = f - w - a : y = f + w + a) : (Math.abs(f) + d < c.position + c.size || g < Math.abs(f)) && (y = -g + n);else if (l === "always" || l === "edge" && x === "negative" && Math.abs(f) > g) y = -g + n;else if (l === "edge" && x === "positive" && Math.abs(f) + d < g + w) y = f - w - a;else if (l === "edge" && x === "none") {
      var p = 0,
        S,
        I;
      for (; p < r.children.length && Math.abs(f) + d < g + w;) S = r.children[p++], I = (m = S[i]) != null ? m : 0, f -= I + a;
      y = f;
    }
    s === "x" && r.x !== y ? r.x = y : s === "y" && r.y !== y && (r.y = y);
  };
}
function pl(n) {
  var t, o, i, s, a, l;
  var r, e;
  return n.flexDirection === "row" ? (r = {
    position: (t = n.children[n.children.length - 1].x) != null ? t : 0,
    size: (o = n.children[n.children.length - 1].width) != null ? o : 0
  }, e = (i = n.width) != null ? i : 0) : (r = {
    position: (s = n.children[n.children.length - 1].y) != null ? s : 0,
    size: (a = n.children[n.children.length - 1].height) != null ? a : 0
  }, e = (l = n.height) != null ? l : 0), [r, e];
}
function $e() {
  for (var _len5 = arguments.length, n = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    n[_key5] = arguments[_key5];
  }
  var r = n.filter(function (e) {
    return typeof e == "function";
  });
  if (r.length !== 0) return r.length === 1 ? r[0] : function () {
    var t;
    for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      e[_key6] = arguments[_key6];
    }
    var _iterator21 = _createForOfIteratorHelper(r),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var o = _step21.value;
        if (t = o.apply(this, e), t === !0) return t;
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return t;
  };
}
function oi() {
  if (!this || this.selected === void 0 || this.children.length === 0) return !1;
  var n = this.children[this.selected];
  for (; n != null && n.skipFocus;) this.selected++, n = this.children[this.selected];
  return n instanceof Se ? (n.setFocus(), !0) : !1;
}
function pr(n) {
  return function () {
    var r, e, t;
    var o = this.children.length,
      i = this.wrap,
      s = this.selected || 0;
    if (o === 0) return !1;
    if (n === "right" || n === "down") {
      do if (this.selected = (this.selected || 0) % o + 1, this.selected >= o) {
        if (!i) {
          this.selected = void 0;
          break;
        }
        this.selected = 0;
      } while ((r = this.children[this.selected]) != null && r.skipFocus);
    } else if (n === "left" || n === "up") do if (this.selected = (this.selected || 0) % o - 1, this.selected < 0) {
      if (!i) {
        this.selected = void 0;
        break;
      }
      this.selected = o - 1;
    } while ((e = this.children[this.selected]) != null && e.skipFocus);
    if (this.selected === void 0 && (this.selected = s, (t = this.children[this.selected]) != null && t.states.has("focus"))) return !1;
    var a = this.children[this.selected];
    if (this.onSelectedChanged && this.onSelectedChanged.call(this, this, a, this.selected, s), this.plinko && s !== void 0) {
      var c = this.children[s].selected || 0;
      a.selected = c < a.children.length ? c : a.children.length - 1;
    }
    return a.setFocus(), !0;
  };
}
function gl() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var r = h.layout.screenW,
    e = h.layout.columnCount,
    t = h.layout.marginX,
    o = h.layout.gutterX;
  if (n < 1 || n > e) {
    console.error("Column expects a number between 1 & ".concat(e, ". Received ").concat(n));
    return;
  }
  var i = r - t * 2,
    s = (n - 1) * o;
  return (i - s) / n;
}
var _ref34 = ($n = h) == null ? void 0 : $n.componentConfig,
  _ref34$Artwork = _ref34.Artwork,
  _ref34$Artwork2 = _ref34$Artwork === void 0 ? {
    styles: {}
  } : _ref34$Artwork,
  Ld = _ref34$Artwork2.defaultTone,
  ml = _objectWithoutProperties(_ref34$Artwork2, ["defaultTone"]),
  xl = {
    themeKeys: {
      fillColor: "fillColor",
      scale: "imageScale",
      pivotX: "imageScalePivotX",
      pivotY: "imageScalePivotY"
    },
    base: {
      fallbackSrc: void 0,
      fillColor: h.color.overlay,
      gradientColor: h.color.material,
      pivotX: .5,
      pivotY: .5,
      scale: void 0,
      borderRadius: h.radius.md
    },
    themeStyles: ml
  };
P(xl);
var _ref35 = (Hn = h) == null ? void 0 : Hn.componentConfig,
  _ref35$Badge = _ref35.Badge,
  _ref35$Badge2 = _ref35$Badge === void 0 ? {
    styles: {}
  } : _ref35$Badge,
  Fd = _ref35$Badge2.defaultTone,
  xn = _objectWithoutProperties(_ref35$Badge2, ["defaultTone"]),
  yl = {
    themeKeys: {
      color: "backgroundColor"
    },
    base: {
      color: h.color.fillInverseSecondary,
      borderRadius: h.radius.sm,
      border: {
        color: h.color.strokeInverse,
        width: h.stroke.sm
      },
      display: "flex",
      justifyContent: "spaceEvenly",
      padding: [h.spacer.md - h.stroke.sm, h.spacer.xs + h.stroke.sm, h.spacer.md + h.stroke.sm, h.spacer.md + h.stroke.sm]
    },
    tones: {
      inverse: {
        color: h.color.fillNeutralSecondary,
        borderRadius: h.radius.sm,
        border: {
          color: h.color.strokeInverseSecondary,
          width: h.stroke.sm
        }
      },
      brand: {
        color: h.color.fillBrand,
        borderRadius: h.radius.sm,
        border: {
          color: h.color.strokeInverseSecondary,
          width: h.stroke.sm
        }
      }
    },
    themeStyles: xn
  },
  vl = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({}, h.typography.tag1), {}, {
      color: h.color.textNeutral
    }),
    tones: {
      inverse: {
        color: h.color.textInverse
      },
      brand: {
        color: h.color.textNeutral
      }
    },
    themeStyles: xn
  },
  wl = {
    themeKeys: {
      color: "iconColor"
    },
    base: {
      color: h.color.textNeutral
    },
    tones: {
      inverse: {
        color: h.color.textInverse
      },
      brand: {
        color: h.color.textNeutral
      }
    },
    themeStyles: xn
  };
P(yl);
P(wl);
P(vl);
var _ref36 = (Qn = h) == null ? void 0 : Qn.componentConfig,
  _ref36$Button = _ref36.Button,
  _ref36$Button2 = _ref36$Button === void 0 ? {
    styles: {}
  } : _ref36$Button,
  bl = _ref36$Button2.defaultTone,
  yn = _objectWithoutProperties(_ref36$Button2, ["defaultTone"]),
  _ref37 = (Xn = h) == null ? void 0 : Xn.componentConfig,
  _ref37$Surface = _ref37.Surface,
  _ref37$Surface2 = _ref37$Surface === void 0 ? {
    styles: {}
  } : _ref37$Surface,
  Sl = _ref37$Surface2.surfaceDefaultTone,
  vn = _objectWithoutProperties(_ref37$Surface2, ["surfaceDefaultTone"]),
  Al = {
    themeKeys: {
      textAlign: "textAlign",
      borderRadius: "radius",
      color: "backgroundColor",
      justifyContent: "justifyContent"
    },
    base: {
      height: h.typography.button1.lineHeight + h.spacer.xl * 2,
      display: "flex",
      padding: [h.spacer.xxxl, h.spacer.xl],
      color: h.color.interactiveNeutral,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: h.radius.sm,
      contentColor: h.color.fillNeutral
    },
    modes: {
      focus: {
        color: h.color.interactiveNeutralFocus,
        contentColor: h.color.fillInverse
      },
      disabled: {
        color: h.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: h.color.interactiveInverse
      },
      brand: {
        color: h.color.interactiveBrand,
        focus: {
          color: h.color.fillNeutral
        }
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, vn), yn)
  },
  Cl = {
    themeKeys: {
      color: "contentColor"
    },
    base: {
      color: h.color.textNeutral
    },
    modes: {
      focus: {
        color: h.color.textInverse
      },
      disabled: {
        color: h.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: h.color.fillNeutral
      },
      brand: {
        color: h.color.fillBrand,
        focus: {
          color: h.color.fillBrand
        }
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, vn), yn)
  },
  Tl = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: h.color.textNeutral
    }, h.typography.button1),
    modes: {
      focus: {
        color: h.color.textInverse
      },
      disabled: {
        color: h.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: h.color.fillNeutral
      },
      brand: {
        color: h.color.fillBrand,
        focus: {
          color: h.color.fillBrand
        }
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, vn), yn)
  },
  _l = P(Al),
  Rl = P(Cl),
  Il = P(Tl),
  rt = {
    tone: bl || Sl || "neutral",
    Container: _l,
    Content: Rl,
    Text: Il
  },
  Md = function Md(n) {
    return R(W, ge(n, {
      get style() {
        var e;
        var r;
        return [n.style, (r = rt.Container.tones) == null ? void 0 : r[(e = n.tone) != null ? e : rt.tone], rt.Container.base];
      },
      forwardStates: !0,
      get children() {
        return R(Q, {
          get style() {
            var r;
            return [rt.Text.tones[(r = n.tone) != null ? r : rt.tone], rt.Text.base];
          },
          get children() {
            return n.children;
          }
        });
      }
    }));
  },
  _ref38 = (Kn = h) == null ? void 0 : Kn.componentConfig,
  _ref38$Checkbox = _ref38.Checkbox,
  _ref38$Checkbox2 = _ref38$Checkbox === void 0 ? {
    styles: {}
  } : _ref38$Checkbox,
  zd = _ref38$Checkbox2.defaultTone,
  ii = _objectWithoutProperties(_ref38$Checkbox2, ["defaultTone"]),
  Ve = h.stroke.sm,
  Ne = h.spacer.xxl,
  kl = {
    themeKeys: {
      color: "color",
      borderRadius: "borderRadius",
      border: "border",
      justifyContent: "justifyContent"
    },
    base: {
      width: Ne,
      height: Ne,
      display: "flex",
      justifyContent: "center",
      color: h.color.fillNeutral,
      alignItems: "center",
      borderRadius: Ne / 4,
      border: {
        color: h.color.strokeInverse,
        width: Ve
      }
    },
    modes: {
      disabled: {
        alpha: h.alpha.inactive
      }
    },
    tones: {
      brand: {
        borderRadius: Ne / 4,
        border: {
          color: h.color.strokeNeutralSecondary,
          width: Ve
        },
        color: h.color.fillNeutralSecondary,
        checked: {
          borderRadius: Ne / 4,
          border: {
            color: h.color.strokeNeutralSecondary,
            width: Ve
          },
          color: h.color.fillBrand
        }
      },
      neutral: {
        borderRadius: Ne / 4,
        border: {
          color: h.color.strokeNeutralSecondary,
          width: Ve
        },
        color: h.color.fillInverseSecondary,
        checked: {
          borderRadius: Ne / 4,
          border: {
            color: h.color.strokeNeutralSecondary,
            width: Ve
          },
          color: h.color.fillNeutral
        }
      },
      inverse: {
        borderRadius: Ne / 4,
        border: {
          color: h.color.strokeInverseSecondary,
          width: Ve
        },
        color: h.color.fillNeutralSecondary,
        checked: {
          borderRadius: Ne / 4,
          border: {
            color: h.color.strokeInverseSecondary,
            width: Ve
          },
          color: h.color.fillInverse
        }
      }
    },
    modeKeys: ["focus", "disabled", "checked"],
    themeStyles: ii
  },
  Bl = {
    themeKeys: {
      color: "color"
    },
    base: {
      width: h.spacer.lg,
      height: h.spacer.lg,
      src: h.asset.check
    },
    tones: {
      neutral: {
        color: h.color.fillInverse
      },
      inverse: {
        color: h.color.fillNeutral
      },
      brand: {
        color: h.color.fillInverse
      }
    },
    themeStyles: ii
  };
P(kl);
P(Bl);
var _ref39 = (jn = h) == null ? void 0 : jn.componentConfig,
  _ref39$Icon = _ref39.Icon,
  _ref39$Icon2 = _ref39$Icon === void 0 ? {
    styles: {}
  } : _ref39$Icon,
  Pd = _ref39$Icon2.defaultTone,
  El = _objectWithoutProperties(_ref39$Icon2, ["defaultTone"]),
  Nl = {
    themeKeys: {
      color: "color"
    },
    base: {
      width: 100,
      height: 100,
      color: h.color.fillInverse
    },
    tones: {
      inverse: {
        color: h.color.fillInverse
      },
      brand: {
        color: h.color.fillBrand
      }
    },
    themeStyles: El
  };
P(Nl);
var _ref40 = (Vn = h) == null ? void 0 : Vn.componentConfig,
  _ref40$Column = _ref40.Column,
  _ref40$Column2 = _ref40$Column === void 0 ? {
    styles: {}
  } : _ref40$Column,
  Ll = _ref40$Column2.defaultTone,
  Fl = _objectWithoutProperties(_ref40$Column2, ["defaultTone"]),
  Ml = {
    themeKeys: {
      gap: "itemSpacing",
      scrollIndex: "scrollIndex",
      itemTransition: "itemTransition"
    },
    base: {
      display: "flex",
      flexBoundary: "fixed",
      flexDirection: "column",
      gap: h.layout.gutterY,
      itemTransition: _objectSpread(_objectSpread({}, h.animation.standardEntrance), {}, {
        duration: h.animation.duration.fast
      })
    },
    themeStyles: Fl
  },
  zl = P(Ml),
  Lr = {
    tone: Ll || "neutral",
    Container: zl
  },
  si = function si(n) {
    var r = pr("up"),
      e = pr("down");
    return R(W, ge(n, {
      get onUp() {
        return $e(n.onUp, r);
      },
      get onDown() {
        return $e(n.onDown, e);
      },
      get selected() {
        return n.selected || 0;
      },
      forwardFocus: oi,
      get onLayout() {
        return $e(function (t) {
          var o, i;
          return fr(n.y).call(t, t, t.children[(o = n.selected) != null ? o : 0], (i = n.selected) != null ? i : 0, void 0);
        }, n.onLayout);
      },
      get onSelectedChanged() {
        return $e(n.onSelectedChanged, n.scroll !== "none" ? fr(n.y) : void 0);
      },
      get style() {
        var t;
        return [n.style, Lr.Container.tones[(t = n.tone) != null ? t : Lr.tone], Lr.Container.base];
      }
    }));
  },
  _ref41 = (Gn = h) == null ? void 0 : Gn.componentConfig,
  _ref41$Label = _ref41.Label,
  _ref41$Label2 = _ref41$Label === void 0 ? {
    styles: {}
  } : _ref41$Label,
  Dd = _ref41$Label2.defaultTone,
  ai = _objectWithoutProperties(_ref41$Label2, ["defaultTone"]),
  Pl = {
    themeKeys: {
      color: "backgroundColor",
      borderRadius: "radius"
    },
    base: {
      display: "flex",
      justifyContent: "center",
      color: h.color.textNeutral,
      padding: [h.spacer.md, h.spacer.lg],
      borderRadius: [h.radius.md, h.radius.md, h.radius.md, h.radius.none],
      height: h.typography.caption1.lineHeight + h.spacer.md,
      neutral: {
        backgroundColor: h.color.fillNeutral
      }
    },
    tones: {
      inverse: {
        color: h.color.fillInverse
      },
      brand: {
        color: h.color.fillBrand,
        focus: {
          color: h.color.orange
        }
      }
    },
    themeStyles: ai
  },
  Dl = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({}, h.typography.caption1), {}, {
      color: h.color.textInverse
    }),
    tones: {
      inverse: {
        color: h.color.textNeutral
      },
      brand: {
        color: h.color.textNeutral
      }
    },
    themeStyles: ai
  };
P(Pl);
P(Dl);
var _ref42 = (qn = h) == null ? void 0 : qn.componentConfig,
  _ref42$Details = _ref42.Details,
  _ref42$Details2 = _ref42$Details === void 0 ? {
    styles: {}
  } : _ref42$Details,
  Od = _ref42$Details2.defaultTone,
  li = _objectWithoutProperties(_ref42$Details2, ["defaultTone"]),
  Ol = {
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
      contentSpacing: h.spacer.lg,
      badgeContentSpacing: h.spacer.sm,
      ratingContentSpacing: h.spacer.lg
    },
    themeStyles: li
  },
  Wl = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({}, h.typography.body2), {}, {
      marginRight: h.spacer.lg,
      color: h.color.textNeutral
    }),
    tones: {
      neutral: {
        disabled: {
          color: h.color.textNeutralDisabled
        }
      },
      inverse: {
        color: h.color.textInverse,
        disabled: {
          color: h.color.textNeutralDisabled
        }
      },
      brand: {
        color: h.color.textNeutral,
        disabled: {
          color: h.color.textNeutralDisabled
        }
      }
    },
    themeStyles: li
  };
P(Ol);
P(Wl);
var _ref43 = (Zn = h) == null ? void 0 : Zn.componentConfig,
  _ref43$Rating = _ref43.Rating,
  _ref43$Rating2 = _ref43$Rating === void 0 ? {
    styles: {},
    defaultTone: "neutral"
  } : _ref43$Rating,
  wn = _ref43$Rating2.styles,
  Wd = _ref43$Rating2.defaultTone,
  Ul = {
    themeKeys: {
      justifyContent: "justifyContent",
      itemSpacing: "itemSpacing"
    },
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      itemSpacing: h.spacer.sm
    },
    toneModes: {},
    themeStyles: wn
  },
  Yl = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      color: h.color.textNeutral
    }, h.typography.body2),
    toneModes: {},
    themeStyles: wn
  },
  $l = {
    themeKeys: {
      color: "color"
    },
    base: {
      height: h.typography.body2.lineHeight,
      width: h.typography.body2.lineHeight,
      color: h.color.fillNeutral,
      marginRight: h.spacer.sm
    },
    toneModes: {},
    themeStyles: wn
  };
P(Ul);
P($l);
P(Yl);
var _ref44 = (Jn = h) == null ? void 0 : Jn.componentConfig,
  _ref44$Metadata = _ref44.Metadata,
  _ref44$Metadata2 = _ref44$Metadata === void 0 ? {
    styles: {}
  } : _ref44$Metadata,
  Ud = _ref44$Metadata2.defaultTone,
  bn = _objectWithoutProperties(_ref44$Metadata2, ["defaultTone"]),
  Hl = {
    themeKeys: {
      justifyContent: "justifyContent",
      alpha: "alpha"
    },
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      flexBoundary: "contain",
      alpha: h.alpha.primary
    },
    modes: {
      disabled: {
        alpha: h.alpha.inactive
      }
    },
    themeStyles: bn
  },
  Ql = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({
      maxLines: 1,
      contain: "width"
    }, h.typography.headline3), {}, {
      color: h.color.textNeutral
    }),
    tones: {
      neutral: {
        disabled: {
          color: h.color.textNeutralDisabled
        }
      },
      inverse: {
        color: h.color.textInverse,
        disabled: {
          color: h.color.textNeutralDisabled
        }
      },
      brand: {
        color: h.color.textNeutral,
        disabled: {
          color: h.color.textNeutralDisabled
        }
      }
    },
    themeStyles: bn
  },
  Xl = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread(_objectSpread({
      contain: "width",
      maxLines: 2
    }, h.typography.body2), {}, {
      color: h.color.textNeutralSecondary
    }),
    tones: {
      neutral: {
        disabled: {
          color: h.color.textNeutralDisabled
        }
      },
      inverse: {
        color: h.color.textInverseSecondary,
        disabled: {
          color: h.color.textNeutralDisabled
        }
      },
      brand: {
        color: h.color.textNeutralSecondary,
        disabled: {
          color: h.color.textNeutralDisabled
        }
      }
    },
    themeStyles: bn
  };
P(Hl);
P(Xl);
P(Ql);
var _ref45 = (eo = h) == null ? void 0 : eo.componentConfig,
  _ref45$ProgressBar = _ref45.ProgressBar,
  _ref45$ProgressBar2 = _ref45$ProgressBar === void 0 ? {
    styles: {}
  } : _ref45$ProgressBar,
  Yd = _ref45$ProgressBar2.defaultTone,
  ci = _objectWithoutProperties(_ref45$ProgressBar2, ["defaultTone"]),
  Kl = {
    themeKeys: {
      color: "barColor",
      borderRadius: "borderRadius"
    },
    base: {
      height: h.spacer.md,
      color: h.color.fillNeutralTertiary,
      borderRadius: h.radius.xs
    },
    tones: {
      inverse: {
        color: h.color.fillInverseTertiary
      }
    },
    themeStyles: ci
  },
  jl = {
    themeKeys: {
      color: "progressColor",
      borderRadius: "borderRadius"
    },
    base: {
      borderRadius: h.radius.xs,
      color: h.color.fillNeutral
    },
    tones: {
      inverse: {
        color: h.color.fillInverse
      },
      brand: {
        color: h.color.fillBrand
      }
    },
    themeStyles: ci
  };
P(Kl);
P(jl);
var _ref46 = (to = h) == null ? void 0 : to.componentConfig,
  _ref46$Radio = _ref46.Radio,
  _ref46$Radio2 = _ref46$Radio === void 0 ? {
    themeStyles: {}
  } : _ref46$Radio,
  $d = _ref46$Radio2.defaultTone,
  di = _objectWithoutProperties(_ref46$Radio2, ["defaultTone"]),
  ft = h.spacer.xxl,
  nt = h.stroke.sm,
  Vl = {
    themeKeys: {
      borderRadius: "strokeRadius",
      color: "backgroundColor",
      colorChecked: "backgroundColorChecked"
    },
    base: {
      color: h.color.fillNeutralSecondary,
      colorChecked: h.color.fillInverse,
      height: ft + nt * 2,
      width: ft + nt * 2,
      borderRadius: ft / 2 + nt,
      border: {
        color: h.color.strokeNeutralSecondary,
        width: nt
      }
    },
    tones: {
      inverse: {
        border: {
          color: h.color.strokeInverseSecondary,
          width: nt
        }
      },
      brand: {
        border: {
          color: h.color.fillBrand,
          width: nt
        }
      }
    },
    themeStyles: di
  },
  Gl = {
    themeKeys: {
      width: "knobWidth",
      height: "knobHeight",
      borderRadius: "knobRadius",
      color: "knobColor"
    },
    base: {
      color: h.color.fillInverse,
      width: ft,
      height: ft,
      borderRadius: ft / 2
    },
    tones: {
      inverse: {
        color: h.color.fillNeutral
      }
    },
    themeStyles: di
  };
P(Vl);
P(Gl);
var _ref47 = (ro = h) == null ? void 0 : ro.componentConfig,
  _ref47$Row = _ref47.Row,
  _ref47$Row2 = _ref47$Row === void 0 ? {
    styles: {}
  } : _ref47$Row,
  ql = _ref47$Row2.defaultTone,
  Zl = _objectWithoutProperties(_ref47$Row2, ["defaultTone"]),
  Jl = {
    themeKeys: {
      gap: "itemSpacing",
      scrollIndex: "scrollIndex",
      itemTransition: "itemTransition"
    },
    base: {
      display: "flex",
      flexBoundary: "fixed",
      flexDirection: "row",
      gap: h.layout.gutterX,
      itemTransition: _objectSpread(_objectSpread({}, h.animation.standardEntrance), {}, {
        duration: h.animation.duration.fast
      })
    },
    themeStyles: Zl
  },
  ec = P(Jl),
  Fr = {
    tone: ql,
    Container: ec
  },
  tc = function tc(n) {
    var r = pr("left"),
      e = pr("right");
    return R(W, ge(n, {
      get selected() {
        return n.selected || 0;
      },
      get onLeft() {
        return $e(n.onLeft, r);
      },
      get onRight() {
        return $e(n.onRight, e);
      },
      forwardFocus: oi,
      get onLayout() {
        return $e(function (t) {
          return fr(n.x).call(t, t, t.children[t.selected], t.selected, void 0);
        }, n.onLayout);
      },
      get onSelectedChanged() {
        return $e(n.onSelectedChanged, n.scroll !== "none" ? fr(n.x) : void 0);
      },
      get style() {
        return [n.style, Fr.Container.tones[n.tone || Fr.tone], Fr.Container.base];
      }
    }));
  },
  _ref48 = (no = h) == null ? void 0 : no.componentConfig,
  _ref48$Keyboard = _ref48.Keyboard,
  _ref48$Keyboard2 = _ref48$Keyboard === void 0 ? {
    styles: {}
  } : _ref48$Keyboard,
  Hd = _ref48$Keyboard2.defaultTone,
  Sn = _objectWithoutProperties(_ref48$Keyboard2, ["defaultTone"]),
  rc = {
    themeKeys: {
      keySpacing: "keySpacing",
      screenW: "screenW",
      marginX: "marginX"
    },
    base: {
      keySpacing: h.spacer.md,
      screenW: h.layout.screenW,
      marginX: h.layout.marginX,
      height: 100
    },
    themeStyles: Sn
  },
  nc = {
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
      keySpacing: h.spacer.md,
      height: h.spacer.md * 9,
      paddingX: h.spacer.md,
      sizes: {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5
      },
      contentColor: h.color.fillNeutral,
      padding: [h.spacer.xxxl, h.spacer.xl],
      baseWidth: h.spacer.md * 7,
      color: h.color.interactiveNeutral,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: h.radius.sm
    },
    modes: {
      focus: {
        color: h.color.interactiveNeutralFocus,
        contentColor: h.color.fillInverse
      },
      disabled: {
        color: h.color.fillNeutralDisabled,
        contentColor: h.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: h.color.interactiveInverse,
        focus: {
          color: h.color.interactiveInverseFocus,
          contentColor: h.color.fillNeutral
        }
      },
      brand: {
        focus: {
          contentColor: h.color.fillNeutral
        }
      }
    },
    themeStyles: Sn
  },
  oc = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: h.color.textNeutral
    }, h.typography.headline2),
    modes: {
      focus: {
        color: h.color.textInverse
      },
      disabled: {
        color: h.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        focus: {
          color: h.color.textNeutral
        }
      }
    },
    themeStyles: Sn
  };
P(rc);
P(nc);
P(oc);
var _ref49 = (oo = h) == null ? void 0 : oo.componentConfig,
  _ref49$Key = _ref49.Key,
  _ref49$Key2 = _ref49$Key === void 0 ? {
    styles: {}
  } : _ref49$Key,
  Qd = _ref49$Key2.defaultTone,
  hi = _objectWithoutProperties(_ref49$Key2, ["defaultTone"]),
  ic = {
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
      keySpacing: h.spacer.md,
      height: h.spacer.md * 9,
      paddingX: h.spacer.md,
      contentColor: h.color.fillNeutral,
      sizes: {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5
      },
      padding: [h.spacer.md],
      baseWidth: h.spacer.md * 7,
      color: h.color.interactiveNeutral,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: h.radius.sm
    },
    modes: {
      focus: {
        color: h.color.interactiveNeutralFocus,
        contentColor: h.color.fillInverse
      },
      disabled: {
        color: h.color.fillNeutralDisabled,
        contentColor: h.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: h.color.interactiveInverse,
        focus: {
          color: h.color.interactiveInverseFocus,
          contentColor: h.color.fillNeutral
        }
      },
      brand: {
        focus: {
          contentColor: h.color.fillNeutral
        }
      }
    },
    themeStyles: hi
  },
  sc = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: h.color.textNeutral
    }, h.typography.headline2),
    modes: {
      focus: {
        color: h.color.textInverse
      },
      disabled: {
        color: h.color.textNeutralDisabled
      }
    },
    tones: {
      inverse: {
        focus: {
          color: h.color.textNeutral
        }
      }
    },
    themeStyles: hi
  };
P(ic);
P(sc);
var _ref50 = (io = h) == null ? void 0 : io.componentConfig,
  _ref50$Input = _ref50.Input,
  _ref50$Input2 = _ref50$Input === void 0 ? {
    styles: {}
  } : _ref50$Input,
  Xd = _ref50$Input2.defaultTone,
  An = _objectWithoutProperties(_ref50$Input2, ["defaultTone"]),
  ac = {
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
    themeStyles: An
  },
  lc = {
    themeKeys: {
      borderRadius: "borderRadius",
      color: "backgroundColor"
    },
    base: {
      width: gl(4),
      height: 100,
      display: "flex",
      flexDirection: "column",
      padding: [h.spacer.xxxl, h.spacer.xl],
      color: h.color.interactiveNeutral,
      contentColor: h.color.fillInverse,
      borderRadius: h.radius.sm,
      marginX: h.spacer.xxxl
    },
    modes: {
      focus: {
        color: h.color.interactiveNeutralFocus
      },
      disabled: {
        color: h.color.fillNeutralDisabled
      }
    },
    tones: {
      inverse: {
        color: h.color.interactiveInverse
      },
      brand: {
        color: h.color.interactiveBrand,
        focus: {
          color: h.color.fillNeutral
        }
      }
    },
    themeStyles: An
  },
  cc = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: h.color.textNeutral
    }, h.typography.button1),
    themeStyles: An
  };
P(ac);
P(lc);
P(cc);
var _ref51 = (so = h) == null ? void 0 : so.componentConfig,
  _ref51$Tile = _ref51.Tile,
  _ref51$Tile2 = _ref51$Tile === void 0 ? {
    styles: {}
  } : _ref51$Tile,
  Kd = _ref51$Tile2.defaultTone,
  Sr = _objectWithoutProperties(_ref51$Tile2, ["defaultTone"]),
  _ref52 = (ao = h) == null ? void 0 : ao.componentConfig,
  _ref52$Surface = _ref52.Surface,
  _ref52$Surface2 = _ref52$Surface === void 0 ? {
    styles: {}
  } : _ref52$Surface,
  jd = _ref52$Surface2.defaultSurfaceTone,
  dc = _objectWithoutProperties(_ref52$Surface2, ["defaultSurfaceTone"]),
  hc = {
    themeKeys: {
      alpha: "alpha",
      paddingYProgress: "paddingYProgress",
      borderRadius: "radius"
    },
    base: {
      width: 400,
      height: 240,
      padding: [40, 10],
      paddingYProgress: h.spacer.xl,
      paddingYBetweenContent: h.spacer.md,
      borderRadius: h.radius.md,
      alpha: h.alpha.primary
    },
    modes: {
      disabled: {
        alpha: h.alpha.inactive
      }
    },
    themeStyles: _objectSpread(_objectSpread({}, dc), Sr)
  },
  uc = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      flexBoundary: "contain",
      mountY: 1
    },
    themeStyles: Sr
  },
  fc = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart"
    },
    themeStyles: Sr
  },
  pc = {
    themeKeys: {},
    base: {
      width: h.spacer.lg * 5,
      height: h.spacer.xxl + h.spacer.md
    },
    themeStyles: Sr
  };
P(hc);
P(uc);
P(fc);
P(pc);
var gc = {
    color: 255,
    height: 150,
    width: 330,
    x: 1910,
    y: 10,
    mountX: 1,
    alpha: .8,
    zIndex: 100
  },
  Te = {
    x: 10,
    fontSize: 22,
    textColor: ee("#f6f6f6")
  },
  qt = {
    fontSize: 22,
    textColor: ee("#f6f6f6")
  },
  _Y27 = Y(0),
  _Y28 = _slicedToArray(_Y27, 2),
  mc = _Y28[0],
  xc = _Y28[1],
  _Y29 = Y(0),
  _Y30 = _slicedToArray(_Y29, 2),
  yc = _Y30[0],
  vc = _Y30[1],
  _Y31 = Y(99),
  _Y32 = _slicedToArray(_Y31, 2),
  wc = _Y32[0],
  bc = _Y32[1],
  _Y33 = Y(0),
  _Y34 = _slicedToArray(_Y33, 2),
  Sc = _Y34[0],
  Ac = _Y34[1],
  _Y35 = Y(0),
  _Y36 = _slicedToArray(_Y35, 2),
  Cc = _Y36[0],
  Tc = _Y36[1],
  _Y37 = Y(0),
  _Y38 = _slicedToArray(_Y37, 2),
  _c = _Y38[0],
  Rc = _Y38[1],
  _Y39 = Y(0),
  _Y40 = _slicedToArray(_Y39, 2),
  Ic = _Y40[0],
  kc = _Y40[1];
var lo = 0,
  co = 0;
var Bc = function Bc(n) {
    n && (xc(n), bc(function (r) {
      return Math.min(n, r);
    }), Ac(function (r) {
      return Math.max(n, r);
    }), co += n, lo++, vc(Math.round(co / lo)));
  },
  Ec = function Ec(n) {
    var r = 0,
      e = 0,
      t = 0;
    n.txManager.textureIdCache.forEach(function (o, i, s) {
      o.state === "loaded" && r++, o.state === "loading" && e++, o.state === "failed" && t++;
    }), Tc(r), Rc(e), kc(t);
  };
function Nc(n) {
  n.renderer.on("fpsUpdate", function (r, e) {
    var t = typeof e == "number" ? e : e.fps;
    t > 5 && (Bc(t), Ec(r.root.stage));
  });
}
var Lc = function Lc(n) {
    return R(W, ge(n, {
      style: gc,
      get children() {
        return [R(W, {
          get children() {
            return [R(Q, {
              style: Te,
              children: "FPS:"
            }), R(Q, {
              style: qt,
              x: 90,
              get children() {
                return mc();
              }
            })];
          }
        }), R(W, {
          x: 160,
          get children() {
            return [R(Q, {
              style: Te,
              children: "AVG:"
            }), R(Q, {
              style: qt,
              x: 100,
              get children() {
                return yc();
              }
            })];
          }
        }), R(W, {
          x: 0,
          y: 20,
          get children() {
            return [R(Q, {
              style: Te,
              children: "MIN:"
            }), R(Q, {
              style: qt,
              x: 90,
              get children() {
                return wc();
              }
            })];
          }
        }), R(W, {
          x: 160,
          y: 20,
          get children() {
            return [R(Q, {
              style: Te,
              children: "MAX:"
            }), R(Q, {
              style: qt,
              x: 100,
              get children() {
                return Sc();
              }
            })];
          }
        }), R(W, {
          x: 0,
          y: 50,
          get children() {
            return [R(Q, {
              style: Te,
              children: "Loaded Textures Cnt:"
            }), R(Q, {
              style: Te,
              x: 270,
              get children() {
                return Cc();
              }
            })];
          }
        }), R(W, {
          x: 0,
          y: 80,
          get children() {
            return [R(Q, {
              style: Te,
              children: "Loading Textures Cnt:"
            }), R(Q, {
              style: Te,
              x: 270,
              get children() {
                return _c();
              }
            })];
          }
        }), R(W, {
          x: 0,
          y: 110,
          get children() {
            return [R(Q, {
              style: Te,
              children: "Failed Textures Cnt:"
            }), R(Q, {
              style: Te,
              x: 270,
              get children() {
                return Ic();
              }
            })];
          }
        })];
      }
    }));
  },
  Jr = {
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
        x: h.layout.marginX
      }
    },
    Gradient: {
      zIndex: 99,
      color: ee("#000000"),
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
        color: ee("#424242")
      },
      active: {
        width: 328,
        height: 70
      }
    }
  },
  Fc = "./",
  Mc = [{
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
function zc(n) {
  var r = ll(Fc + "assets/icons_white.png", Mc);
  return R(W, ge(n, {
    get texture() {
      return r[n.name];
    },
    get width() {
      return r[n.name].props.width;
    },
    get height() {
      return r[n.name].props.height;
    },
    get x() {
      return (100 - (r[n.name].props.width || 0)) / 2;
    },
    get y() {
      return (100 - (r[n.name].props.height || 0)) / 2;
    }
  }));
}
function Zt(n) {
  return R(W, ge(n, {
    forwardStates: !0,
    get style() {
      return Jr.NavButton;
    },
    get children() {
      return [R(W, {
        y: -16,
        get children() {
          return R(zc, {
            scale: .5,
            get name() {
              return n.icon;
            }
          });
        }
      }), R(Q, {
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
          return n.children;
        }
      })];
    }
  }));
}
function Pc(n) {
  var r;
  var e = mn();
  function t() {
    r.states.add("focus"), this.children.forEach(function (s) {
      return s.states.add("active");
    }), this.children.selected.setFocus();
  }
  function o() {
    r.states.remove("focus"), this.selected = 0, this.children.forEach(function (s) {
      return s.states.remove("active");
    });
  }
  function i(s) {
    if (_a(function () {
      return s;
    })()) return n.focusPage();
    e(s);
  }
  return [R(W, {
    flexItem: !1,
    width: 300,
    height: 150,
    x: 30,
    y: 15,
    zIndex: 105,
    get alpha() {
      return n.showWidgets ? 1 : 0;
    },
    get children() {
      return [R(Q, {
        x: 80,
        fontSize: 28,
        color: 4143380036,
        children: "Built With:"
      }), R(W, {
        y: 22,
        src: "./assets/solidWord.png",
        width: 280,
        height: 52
      }), R(W, {
        x: 0,
        y: 110,
        src: "./assets/tmdb.png",
        width: 80,
        height: 41
      }), R(Q, {
        x: 90,
        y: 110,
        contain: "width",
        width: 160,
        fontSize: 12,
        color: 4143380036,
        children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
      })];
    }
  }), R(si, ge(n, {
    onFocus: t,
    onBlur: o,
    get style() {
      return Jr.Column;
    },
    scroll: "none",
    get children() {
      return [R(Zt, {
        onEnter: function onEnter() {
          return i("/browse/all");
        },
        icon: "trending",
        children: "Trending"
      }), R(Zt, {
        icon: "movie",
        onEnter: function onEnter() {
          return i("/browse/movie");
        },
        children: "Movies"
      }), R(Zt, {
        icon: "tv",
        onEnter: function onEnter() {
          return i("/browse/tv");
        },
        children: "TV"
      }), R(Zt, {
        icon: "experiment",
        onEnter: function onEnter() {
          return i("/examples");
        },
        children: "Examples"
      })];
    }
  })), R(W, {
    skipFocus: !0,
    ref: function ref(s) {
      var a = r;
      typeof a == "function" ? a(s) : r = s;
    },
    get style() {
      return Jr.Gradient;
    }
  })];
}
var Dc = function Dc(n) {
    Za({
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
    var r = al();
    r.enabled = !1;
    var e = mn();
    var t, o;
    Nc({
      renderer: Fe
    });
    function i() {
      return t.states.has("focus") ? !1 : (o = an(), t.setFocus());
    }
    var _Y41 = Y(!0),
      _Y42 = _slicedToArray(_Y41, 2),
      s = _Y42[0],
      a = _Y42[1],
      l = ti(),
      c = ["/browse", "/entity"];
    return Je(function () {
      var d = l.pathname;
      var f = c.some(function (g) {
        return d.startsWith(g);
      });
      d === "/" && (f = !0), a(f);
    }), R(W, {
      ref: function ref(d) {
        var f = window.APP;
        typeof f == "function" ? f(d) : window.APP = d;
      },
      onAnnouncer: function onAnnouncer() {
        return r.enabled = !r.enabled;
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
        return t.states.has("focus") && o.setFocus();
      },
      get children() {
        return [R(hl, {}), R(Lc, {
          mountX: 1,
          x: 1910,
          y: 10,
          get alpha() {
            return s() ? 1 : 0;
          }
        }), hn(function () {
          return n.children;
        }), R(Pc, {
          ref: function ref(d) {
            var f = t;
            typeof f == "function" ? f(d) : t = d;
          },
          focusPage: function focusPage() {
            return o.setFocus();
          },
          get showWidgets() {
            return s();
          }
        })];
      }
    });
  },
  gr = {
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
      width: h.layout.screenW,
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
      textColor: ee("#ffffff")
    },
    FPSValue: {
      x: 90,
      y: 0,
      fontSize: 36,
      textColor: ee("#ffffff")
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
      color: ee("#000000")
    },
    RowTitle: {
      height: 60,
      width: 300,
      marginBottom: -40,
      fontSize: 36,
      color: ee("#f0f0f0"),
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
      width: h.layout.screenW - 2 * h.layout.marginX,
      x: h.layout.marginX + h.layout.gutterX,
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
      color: ee("#0000ff")
    },
    peopleBio: _objectSpread(_objectSpread({}, h.typography.body1), {}, {
      fontFamily: "Ubuntu",
      fontWeight: "normal",
      contain: "both",
      width: 780,
      height: 340
    })
  },
  mr = {
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
  Oc = {
    color: ee("#00A699"),
    height: 8,
    y: 2,
    x: -4,
    width: mr.width + 8
  },
  Wc = {
    fontSize: 12,
    y: 12,
    contain: "width",
    textAlign: "center",
    color: ee("#F6F6F9"),
    height: mr.height,
    width: mr.width
  },
  Vd = {
    container: mr,
    topBar: Oc,
    text: Wc
  },
  ho = {
    width: 386,
    height: 136,
    color: ee("#715cab"),
    focus: {
      color: ee("#5a39a2")
    },
    disabled: {
      color: ee("#291d43")
    }
  },
  Gd = {
    fontSize: 32,
    contain: "width",
    textAlign: "center",
    mountY: -.35,
    color: ee("#FFFFFF"),
    height: ho.height,
    width: ho.width,
    focus: {
      fontSize: 40
    },
    disabled: {
      color: ee("#909090")
    }
  };
function Uc(n) {
  return R(W, ge(n, {
    get style() {
      return gr.Thumbnail;
    }
  }));
}
function Yc(n) {
  var _Vi = Vi(n, ["items"]),
    _Vi2 = _slicedToArray(_Vi, 2),
    r = _Vi2[0],
    e = _Vi2[1];
  return R(tc, ge(e, {
    get style() {
      return gr.Row;
    },
    get children() {
      return R(sn, {
        get each() {
          return r.items;
        },
        children: function children(t) {
          return R(Uc, t);
        }
      });
    }
  }));
}
var $c = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZiMDhiODgwZjc2MzEzMmIyMjExYWNjYjQ5MzZiZSIsIm5iZiI6MTcyNDA1NjEwMC4yMzQ4MzgsInN1YiI6IjY2YzMwMTg1Y2NlNzA0ZWJlYWQzNWY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dedjZUuwhiOFTlvO6FohvFkC-cEmS9QEw97du52t3bk",
  Hc = "https://api.themoviedb.org/3";
var ui, fi;
var Qc = "w185",
  Xc = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + $c
    }
  };
function Mr(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Qc;
  return fi + r + n;
}
function Kc(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return ui ? en(n, r) : pi().then(function () {
    return en(n, r);
  });
}
function en(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(Hc + n, _objectSpread(_objectSpread({}, Xc), r)).then(function (e) {
    return e.json();
  });
}
function pi() {
  return en("/configuration").then(function (n) {
    var r;
    return ui = n, fi = (r = n.images) == null ? void 0 : r.secure_base_url, n;
  });
}
var jc = {
  get: Kc,
  loadConfig: pi
};
function Vc(n, r) {
  return n.length > r ? n.substring(0, r - 3) + "..." : n;
}
function Gc(n) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var e = [];
  for (var t = 0, o = n.length; t < o; t += r) e.push(n.slice(t, t + r));
  return e;
}
function qc() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return n.map(function (r) {
    return {
      src: Mr(r.poster_path || r.profile_path),
      tileSrc: Mr(r.backdrop_path || r.profile_path, "w300"),
      backdrop: Mr(r.backdrop_path, "w1280"),
      href: "/entity/".concat(r.media_type || "people", "/").concat(r.id),
      shortTitle: Vc(r.title || r.name, 30),
      title: r.title || r.name,
      data: r,
      entityInfo: {
        type: r.media_type || "people",
        id: r.id
      },
      heroContent: {
        title: r.title || r.name,
        description: r.overview
      }
    };
  });
}
var zr = new Map();
var Jt = new Map();
function Zc(n) {
  return function (r) {
    var e = "/trending/".concat(n, "/week?page=").concat(r);
    if (zr.has(e)) return zr.get(e);
    var t = jc.get(e).then(function (o) {
      var i = o.results.filter(function (l) {
          return !l.adult;
        }),
        s = (Jt.has(n) ? Jt.get(n) : []).concat(qc(i)),
        a = Gc(s);
      return a[a.length - 1].length < 7 ? Jt.set(n, a.pop()) : Jt.delete(n), a;
    });
    return zr.set(e, t), t;
  };
}
function Jc(n) {
  var _Y43 = Y([]),
    _Y44 = _slicedToArray(_Y43, 2),
    r = _Y44[0],
    e = _Y44[1],
    _Y45 = Y(1),
    _Y46 = _slicedToArray(_Y45, 2),
    t = _Y46[0],
    o = _Y46[1],
    _Y47 = Y(!1),
    _Y48 = _slicedToArray(_Y47, 2),
    i = _Y48[0],
    s = _Y48[1],
    _To3 = To(t, n),
    _To4 = _slicedToArray(_To3, 1),
    a = _To4[0];
  return Pr(function () {
    var l = a();
    l && Oi(function () {
      l.length === 0 && s(!0), e(function (c) {
        return [].concat(_toConsumableArray(c), _toConsumableArray(l));
      });
    });
  }), {
    pages: r,
    page: t,
    setPage: o,
    setPages: e,
    end: i,
    setEnd: s
  };
}
var Ar = 900,
  ed = {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "fixed",
    width: Ar,
    height: 220,
    gap: 16
  },
  td = _objectSpread(_objectSpread({}, h.typography.display2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    maxLines: 1,
    width: Ar,
    contain: "width"
  }),
  rd = function rd(n) {
    return R(Q, ge(n, {
      style: td
    }));
  },
  nd = _objectSpread(_objectSpread({}, h.typography.body1), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400,
    lineHeight: 32,
    width: Ar,
    maxLines: 3,
    contain: "width"
  }),
  od = {
    fontSize: 16,
    lineHeight: 20
  },
  id = function id(n) {
    return R(Q, ge(n, {
      style: nd,
      get children() {
        return n.children;
      }
    }));
  },
  sd = function sd(n) {
    return function () {
      var r = br("node");
      return pa(Ja, r, function () {
        return [8, 13, 11, 13];
      }), un(r, ge(n, {
        style: {
          color: "0x00000099",
          borderRadius: 8,
          border: {
            width: 2,
            color: "0xffffffff"
          }
        }
      }), !0), ua(r, R(Q, {
        style: od,
        get children() {
          return n.children;
        }
      })), r;
    }();
  },
  uo = _objectSpread(_objectSpread({}, h.typography.body2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400
  }),
  ad = function ad(n) {
    return R(W, {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 18,
        width: Ar,
        height: 48
      },
      get children() {
        return [R(W, {
          y: -4,
          src: "./assets/stars.png",
          width: 188,
          height: 31
        }), R(W, {
          y: -4,
          flexItem: !1,
          clipping: !0,
          get width() {
            return 188 * n.voteAverage / 10;
          },
          height: 31,
          get children() {
            return R(W, {
              src: "./assets/stars-full.png",
              width: 188,
              height: 31
            });
          }
        }), R(Q, {
          style: uo,
          get children() {
            return [hn(function () {
              return n.voteCount;
            }), " reviews"];
          }
        }), R(Q, {
          style: uo,
          get children() {
            return n.metaText;
          }
        }), R(sn, {
          get each() {
            return n.badges;
          },
          children: function children(r) {
            return R(sd, {
              y: -5,
              children: r
            });
          }
        })];
      }
    });
  },
  ld = function ld(n) {
    return R(W, ge({
      id: "contentBlock",
      style: ed
    }, n, {
      get children() {
        return [R(rd, {
          get children() {
            return n.content.title;
          }
        }), R(id, {
          get children() {
            return n.content.description;
          }
        }), R(wr, {
          get when() {
            return n.content.voteCount;
          },
          get children() {
            return R(ad, {
              get metaText() {
                return n.content.metaText;
              },
              get badges() {
                return n.content.badges;
              },
              get voteCount() {
                return n.content.voteCount;
              },
              get voteAverage() {
                return n.content.voteAverage;
              }
            });
          }
        })];
      }
    }));
  };
var fo = function fo(n, r) {
  var e;
  var t = function t() {
    return clearTimeout(e);
  };
  return mt() && ke(t), Object.assign(function () {
    for (var _len7 = arguments.length, i = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      i[_key7] = arguments[_key7];
    }
    e !== void 0 && t(), e = setTimeout(function () {
      return n.apply(void 0, i);
    }, r);
  }, {
    clear: t
  });
};
var po = function po() {
    var n = Ra(),
      _Y49 = Y(0),
      _Y50 = _slicedToArray(_Y49, 2),
      r = _Y50[0],
      e = _Y50[1],
      _Y51 = Y({}),
      _Y52 = _slicedToArray(_Y51, 2),
      t = _Y52[0],
      o = _Y52[1],
      i = mn(),
      s = Di(function () {
        return 0;
      }),
      a = X(function () {
        return Jc(Zc(n.filter || "all"));
      }),
      l = fo(function (g) {
        return dl(g);
      }, 400),
      c = fo(function (g) {
        return o(g || {});
      }, 200);
    Je(gt(an, function (g) {
      g.backdrop && l(g.backdrop), g.heroContent && c(g.heroContent);
    }, {
      defer: !0
    }));
    function d() {
      var w;
      (w = this.children.selected) == null || w.setFocus(), e((this.y || 0) * -1 + 24);
      var g = a().pages().length;
      this.parent.selected = this.parent.children.indexOf(this), (g === 0 || this.parent.selected && this.parent.selected >= g - 2) && a().setPage(function (x) {
        return x + 1;
      });
    }
    function f() {
      var g = this.children.find(function (w) {
        return w.states.has("focus");
      });
      return L(g && g.href), i(g.href), !0;
    }
    return R(wr, {
      get when() {
        return a().pages().length;
      },
      get children() {
        return [R(ld, {
          y: 360,
          x: 162,
          get content() {
            return t();
          }
        }), R(W, {
          clipping: !0,
          get style() {
            return gr.itemsContainer;
          },
          get children() {
            return R(si, {
              id: "BrowseColumn",
              plinko: !0,
              announce: "All Trending - Week",
              get y() {
                return r();
              },
              scroll: "none",
              get style() {
                return gr.Column;
              },
              get children() {
                return R(sn, {
                  get each() {
                    return a().pages();
                  },
                  children: function children(g, w) {
                    return R(Yc, {
                      get autofocus() {
                        return s(w());
                      },
                      items: g,
                      width: 1620,
                      onFocus: d,
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
  cd = function cd() {
    return function () {
      var n = br("node");
      return fa(n, "style", {
        width: 1920,
        height: 1080,
        color: 868483072
      }), n;
    }();
  },
  dd = new URL("AppCoreExtensions-CoxKajqS.js", import.meta.url).href,
  hd = fe(function () {
    return he(function () {
      return import("./Grid-CJg2_QNV.js");
    }, __vite__mapDeps([0, 1]), import.meta.url);
  }),
  ud = fe(function () {
    return he(function () {
      return import("./Portal-BDxocOcC.js");
    }, __vite__mapDeps([2, 1]), import.meta.url);
  }),
  fd = fe(function () {
    return he(function () {
      return import("./Text-CYwp40R-.js");
    }, __vite__mapDeps([3, 1]), import.meta.url);
  }),
  pd = fe(function () {
    return he(function () {
      return import("./Create-DMzC559o.js");
    }, __vite__mapDeps([4, 1]), import.meta.url);
  }),
  gd = fe(function () {
    return he(function () {
      return import("./Viewport-Bx6lklfd.js");
    }, __vite__mapDeps([5, 1]), import.meta.url);
  }),
  md = fe(function () {
    return he(function () {
      return import("./Buttons-CGNR6kDc.js");
    }, __vite__mapDeps([6, 1]), import.meta.url);
  }),
  xd = fe(function () {
    return he(function () {
      return import("./Flex-fl5J46G4.js");
    }, __vite__mapDeps([7, 1]), import.meta.url);
  }),
  yd = fe(function () {
    return he(function () {
      return import("./FlexSize-DzHy9Ox0.js");
    }, __vite__mapDeps([8, 1]), import.meta.url);
  }),
  vd = fe(function () {
    return he(function () {
      return import("./FlexColumnSize-DJ2fJEvG.js");
    }, __vite__mapDeps([9, 1]), import.meta.url);
  }),
  wd = fe(function () {
    return he(function () {
      return import("./FlexColumn-E6Uh3rpK.js");
    }, __vite__mapDeps([10, 1]), import.meta.url);
  }),
  bd = fe(function () {
    return he(function () {
      return import("./ButtonsMaterial-BOW2weQt.js");
    }, __vite__mapDeps([11, 1]), import.meta.url);
  }),
  Sd = fe(function () {
    return he(function () {
      return import("./SuperFlex-BJTNJH87.js");
    }, __vite__mapDeps([12, 1]), import.meta.url);
  }),
  Ad = fe(function () {
    return he(function () {
      return import("./Entity-CwSAWwUU.js");
    }, __vite__mapDeps([13, 1]), import.meta.url);
  }),
  Cd = fe(function () {
    return he(function () {
      return import("./People-PoV__Hur.js");
    }, __vite__mapDeps([14, 1]), import.meta.url);
  });
pe.debug = !1;
pe.animationsEnabled = !0;
pe.fontSettings.fontFamily = "Ubuntu";
pe.fontSettings.color = ee("#f6f6f6");
pe.fontSettings.fontSize = 32;
pe.rendererOptions = {
  coreExtensionModule: dd,
  fpsUpdateInterval: 200,
  enableInspector: !0,
  deviceLogicalPixelRatio: window.innerHeight / 1080
};
ha(function () {
  return R(Ha, {
    root: function root(n) {
      return R(Dc, n);
    },
    get children() {
      return [R(se, {
        path: "",
        component: po
      }), R(se, {
        path: "examples",
        component: ud
      }), R(se, {
        path: "browse/:filter",
        component: po
      }), R(se, {
        path: "grid",
        component: hd
      }), R(se, {
        path: "text",
        component: fd
      }), R(se, {
        path: "buttons",
        component: md
      }), R(se, {
        path: "flex",
        component: xd
      }), R(se, {
        path: "create",
        component: pd
      }), R(se, {
        path: "viewport",
        component: gd
      }), R(se, {
        path: "flexsize",
        component: yd
      }), R(se, {
        path: "flexcolumnsize",
        component: vd
      }), R(se, {
        path: "flexcolumn",
        component: wd
      }), R(se, {
        path: "superflex",
        component: Sd
      }), R(se, {
        path: "buttonsmaterial",
        component: bd
      }), R(se, {
        path: "entity/people/:id",
        component: Cd
      }), R(se, {
        path: "entity/:type/:id",
        component: Ad
      }), R(se, {
        path: "*all",
        component: cd
      })];
    }
  });
});
function qd() {
  var n = document.getElementById("video");
  return n.hidden = !1, setTimeout(function () {
    return n.play();
  }, 50), n.focus(), n;
}
function Zd() {
  var n = document.getElementById("video");
  return n.hidden = !0, n.pause(), n;
}
export { Mr as A, Ra as B, si as C, ld as D, Md as E, sn as F, Yc as G, Zd as H, kd as I, qd as J, Zi as K, Gd as M, tc as R, wr as S, Q as T, W as V, _d as __vite_legacy_guard, To as a, Pr as b, Y as c, Oi as d, Di as e, Je as f, Id as g, ee as h, R as i, gr as j, hn as k, rn as l, ge as m, ke as n, gt as o, Vd as p, br as q, pa as r, dl as s, h as t, mn as u, un as v, Ja as w, ua as x, jc as y, qc as z };