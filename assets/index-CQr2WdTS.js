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
var __vite__fileDeps = ["./Grid-CKctljaL.js", "./CoreExtension-BwzX6MG-.js", "./Portal-DUB2BbE5.js", "./Text-Bm19XntU.js", "./Create-DNIe0h_S.js", "./Viewport-Cre0eXFW.js", "./Buttons-BzFnFD5P.js", "./Flex-BGYfSFLJ.js", "./FlexSize-BfLOZQem.js", "./FlexColumnSize-Dtqjv5WL.js", "./FlexColumn-B2EHGuVb.js", "./ButtonsMaterial-CLI5oPiW.js", "./SuperFlex-BSxiEcwd.js", "./Entity-xHnd8JsH.js", "./People-D7cZpXDd.js"],
  __vite__mapDeps = function __vite__mapDeps(i) {
    return i.map(function (i) {
      return __vite__fileDeps[i];
    });
  };
var Sx = Object.defineProperty;
var wx = function wx(r, t, e) {
  return t in r ? Sx(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : r[t] = e;
};
var v = function v(r, t, e) {
  return wx(r, _typeof(t) != "symbol" ? t + "" : t, e), e;
};
import { a as F, i as dg, T as Tx, g as Ia, c as Lr, E as lr, b as ht, d as Ax, e as tc, f as Ix, m as In, W as Jr, C as Cx, h as hg, j as Ex, k as Ca, S as wu, l as vg, B as Rx, n as Ox, o as gg, p as _x, q as Px, r as Nx, s as Fx, t as Tu, u as Au, v as Bx, w as pg, R as kx, x as Lx, y as Mx, z as Dx, A as jx } from "./CoreExtension-BwzX6MG-.js";
function GY() {
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
var zx = "modulepreload",
  Ux = function Ux(r, t) {
    return new URL(r, t).href;
  },
  Iu = {},
  _e = function _e(t, e, n) {
    var o = Promise.resolve();
    if (e && e.length > 0) {
      var i = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        s = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.all(e.map(function (l) {
        if (l = Ux(l, n), l in Iu) return;
        Iu[l] = !0;
        var c = l.endsWith(".css"),
          u = c ? '[rel="stylesheet"]' : "";
        if (!!n) for (var g = i.length - 1; g >= 0; g--) {
          var p = i[g];
          if (p.href === l && (!c || p.rel === "stylesheet")) return;
        } else if (document.querySelector('link[href="'.concat(l, '"]').concat(u))) return;
        var d = document.createElement("link");
        if (d.rel = c ? "stylesheet" : zx, c || (d.as = "script", d.crossOrigin = ""), d.href = l, s && d.setAttribute("nonce", s), document.head.appendChild(d), c) return new Promise(function (g, p) {
          d.addEventListener("load", g), d.addEventListener("error", function () {
            return p(new Error("Unable to preload CSS for ".concat(l)));
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
function Cn(r) {
  te.context = r;
}
var mg = function mg(r, t) {
    return r === t;
  },
  gi = Symbol("solid-proxy"),
  yg = Symbol("solid-track"),
  pi = {
    equals: mg
  };
var xg = Cg;
var tt = 1,
  mi = 2,
  $g = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  Ea = {};
var W = null;
var Ra = null,
  Wx = null,
  G = null,
  Ie = null,
  ut = null,
  Wi = 0;
function Dt(r, t) {
  var e = G,
    n = W,
    o = r.length === 0,
    i = t === void 0 ? n : t,
    a = o ? $g : {
      owned: null,
      cleanups: null,
      context: i ? i.context : null,
      owner: i
    },
    s = o ? r : function () {
      return r(function () {
        return pe(function () {
          return Hi(a);
        });
      });
    };
  W = a, G = null;
  try {
    return dt(s, !0);
  } finally {
    G = e, W = n;
  }
}
function V(r, t) {
  t = t ? Object.assign({}, pi, t) : pi;
  var e = {
      value: r,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0
    },
    n = function n(o) {
      return typeof o == "function" && (o = o(e.value)), Ig(e, o);
    };
  return [Ag.bind(e), n];
}
function Ks(r, t, e) {
  var n = Hn(r, t, !0, tt);
  cr(n);
}
function lt(r, t, e) {
  var n = Hn(r, t, !1, tt);
  cr(n);
}
function ar(r, t, e) {
  xg = qx;
  var n = Hn(r, t, !1, tt);
  (!e || !e.render) && (n.user = !0), ut ? ut.push(n) : cr(n);
}
function ie(r, t, e) {
  e = e ? Object.assign({}, pi, e) : pi;
  var n = Hn(r, t, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = e.equals || void 0, cr(n), Ag.bind(n);
}
function Hx(r) {
  return r && _typeof(r) == "object" && "then" in r;
}
function bg(r, t, e) {
  var n, o, i;
  arguments.length === 2 && _typeof(t) == "object" || arguments.length === 1 ? (n = !0, o = r, i = t || {}) : (n = r, o = t, i = e || {});
  var a = null,
    s = Ea,
    l = null,
    c = !1,
    u = "initialValue" in i,
    f = typeof n == "function" && ie(n);
  var d = new Set(),
    _ref2 = (i.storage || V)(i.initialValue),
    _ref3 = _slicedToArray(_ref2, 2),
    g = _ref3[0],
    p = _ref3[1],
    _V = V(void 0),
    _V2 = _slicedToArray(_V, 2),
    x = _V2[0],
    b = _V2[1],
    _V3 = V(void 0, {
      equals: !1
    }),
    _V4 = _slicedToArray(_V3, 2),
    S = _V4[0],
    $ = _V4[1],
    _V5 = V(u ? "ready" : "unresolved"),
    _V6 = _slicedToArray(_V5, 2),
    y = _V6[0],
    m = _V6[1];
  if (te.context) {
    l = "".concat(te.context.id).concat(te.context.count++);
    var A;
    i.ssrLoadFrom === "initial" ? s = i.initialValue : te.load && (A = te.load(l)) && (s = A);
  }
  function w(A, P, N, _) {
    return a === A && (a = null, _ !== void 0 && (u = !0), (A === s || P === s) && i.onHydrated && queueMicrotask(function () {
      return i.onHydrated(_, {
        value: P
      });
    }), s = Ea, R(P, N)), P;
  }
  function R(A, P) {
    dt(function () {
      P === void 0 && p(function () {
        return A;
      }), m(P !== void 0 ? "errored" : u ? "ready" : "unresolved"), b(P);
      var _iterator4 = _createForOfIteratorHelper(d.keys()),
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
      d.clear();
    }, !1);
  }
  function I() {
    var A = Vx,
      P = g(),
      N = x();
    if (N !== void 0 && !a) throw N;
    return G && !G.user && A && Ks(function () {
      S(), a && (A.resolved || d.has(A) || (A.increment(), d.add(A)));
    }), P;
  }
  function C() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
    if (A !== !1 && c) return;
    c = !1;
    var P = f ? f() : n;
    if (P == null || P === !1) {
      w(a, pe(g));
      return;
    }
    var N = s !== Ea ? s : pe(function () {
      return o(P, {
        value: g(),
        refetching: A
      });
    });
    return Hx(N) ? (a = N, "value" in N ? (N.status === "success" ? w(a, N.value, void 0, P) : w(a, void 0, void 0, P), N) : (c = !0, queueMicrotask(function () {
      return c = !1;
    }), dt(function () {
      m(u ? "refreshing" : "pending"), $();
    }, !1), N.then(function (_) {
      return w(N, _, void 0, P);
    }, function (_) {
      return w(N, void 0, Rg(_), P);
    }))) : (w(a, N, void 0, P), N);
  }
  return Object.defineProperties(I, {
    state: {
      get: function get() {
        return y();
      }
    },
    error: {
      get: function get() {
        return x();
      }
    },
    loading: {
      get: function get() {
        var A = y();
        return A === "pending" || A === "refreshing";
      }
    },
    latest: {
      get: function get() {
        if (!u) return I();
        var A = x();
        if (A && !a) throw A;
        return g();
      }
    }
  }), f ? Ks(function () {
    return C(!1);
  }) : C(!1), [I, {
    refetch: C,
    mutate: p
  }];
}
function Yx(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mg;
  var e = arguments.length > 2 ? arguments[2] : undefined;
  var n = new Map(),
    o = Hn(function (i) {
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
                c.state = tt, c.pure ? Ie.push(c) : ut.push(c);
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
    }, void 0, !0, tt);
  return cr(o), function (i) {
    var a = G;
    if (a) {
      var s;
      (s = n.get(i)) ? s.add(a) : n.set(i, s = new Set([a])), ft(function () {
        s["delete"](a), !s.size && n["delete"](i);
      });
    }
    return t(i, o.value);
  };
}
function Kx(r) {
  return dt(r, !1);
}
function pe(r) {
  if (G === null) return r();
  var t = G;
  G = null;
  try {
    return r();
  } finally {
    G = t;
  }
}
function Zr(r, t, e) {
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
    var l = pe(function () {
      return t(s, o, a);
    });
    return o = s, l;
  };
}
function XY(r) {
  ar(function () {
    return pe(r);
  });
}
function ft(r) {
  return W === null || (W.cleanups === null ? W.cleanups = [r] : W.cleanups.push(r)), r;
}
function en() {
  return W;
}
function Sg(r, t) {
  var e = W,
    n = G;
  W = r, G = null;
  try {
    return dt(t, !0);
  } catch (o) {
    nc(o);
  } finally {
    W = e, G = n;
  }
}
function Gx(r) {
  var t = G,
    e = W;
  return Promise.resolve().then(function () {
    G = t, W = e;
    var n;
    return dt(r, !1), G = W = null, n ? n.done : void 0;
  });
}
function wg(r, t) {
  var e = Symbol("context");
  return {
    id: e,
    Provider: Jx(e),
    defaultValue: r
  };
}
function Tg(r) {
  return W && W.context && W.context[r.id] !== void 0 ? W.context[r.id] : r.defaultValue;
}
function rc(r) {
  var t = ie(r),
    e = ie(function () {
      return Gs(t());
    });
  return e.toArray = function () {
    var n = e();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, e;
}
var Vx;
function Ag() {
  var _this = this;
  if (this.sources && this.state) if (this.state === tt) cr(this);else {
    var r = Ie;
    Ie = null, dt(function () {
      return xi(_this);
    }, !1), Ie = r;
  }
  if (G) {
    var _r2 = this.observers ? this.observers.length : 0;
    G.sources ? (G.sources.push(this), G.sourceSlots.push(_r2)) : (G.sources = [this], G.sourceSlots = [_r2]), this.observers ? (this.observers.push(G), this.observerSlots.push(G.sources.length - 1)) : (this.observers = [G], this.observerSlots = [G.sources.length - 1]);
  }
  return this.value;
}
function Ig(r, t, e) {
  var n = r.value;
  return (!r.comparator || !r.comparator(n, t)) && (r.value = t, r.observers && r.observers.length && dt(function () {
    for (var o = 0; o < r.observers.length; o += 1) {
      var i = r.observers[o],
        a = Ra && Ra.running;
      a && Ra.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Ie.push(i) : ut.push(i), i.observers && Eg(i)), a || (i.state = tt);
    }
    if (Ie.length > 1e6) throw Ie = [], new Error();
  }, !1)), t;
}
function cr(r) {
  if (!r.fn) return;
  Hi(r);
  var t = Wi;
  Xx(r, r.value, t);
}
function Xx(r, t, e) {
  var n;
  var o = W,
    i = G;
  G = W = r;
  try {
    n = r.fn(t);
  } catch (a) {
    return r.pure && (r.state = tt, r.owned && r.owned.forEach(Hi), r.owned = null), r.updatedAt = e + 1, nc(a);
  } finally {
    G = i, W = o;
  }
  (!r.updatedAt || r.updatedAt <= e) && (r.updatedAt != null && "observers" in r ? Ig(r, n) : r.value = n, r.updatedAt = e);
}
function Hn(r, t, e) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : tt;
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
  return W === null || W !== $g && (W.owned ? W.owned.push(i) : W.owned = [i]), i;
}
function yi(r) {
  if (r.state === 0) return;
  if (r.state === mi) return xi(r);
  if (r.suspense && pe(r.suspense.inFallback)) return r.suspense.effects.push(r);
  var t = [r];
  for (; (r = r.owner) && (!r.updatedAt || r.updatedAt < Wi);) r.state && t.push(r);
  for (var _e2 = t.length - 1; _e2 >= 0; _e2--) if (r = t[_e2], r.state === tt) cr(r);else if (r.state === mi) {
    var n = Ie;
    Ie = null, dt(function () {
      return xi(r, t[0]);
    }, !1), Ie = n;
  }
}
function dt(r, t) {
  if (Ie) return r();
  var e = !1;
  t || (Ie = []), ut ? e = !0 : ut = [], Wi++;
  try {
    var n = r();
    return Qx(e), n;
  } catch (n) {
    e || (ut = null), Ie = null, nc(n);
  }
}
function Qx(r) {
  if (Ie && (Cg(Ie), Ie = null), r) return;
  var t = ut;
  ut = null, t.length && dt(function () {
    return xg(t);
  }, !1);
}
function Cg(r) {
  for (var t = 0; t < r.length; t++) yi(r[t]);
}
function qx(r) {
  var t,
    e = 0;
  for (t = 0; t < r.length; t++) {
    var n = r[t];
    n.user ? r[e++] = n : yi(n);
  }
  if (te.context) {
    if (te.count) {
      var _te$effects;
      te.effects || (te.effects = []), (_te$effects = te.effects).push.apply(_te$effects, _toConsumableArray(r.slice(0, e)));
      return;
    } else te.effects && (r = [].concat(_toConsumableArray(te.effects), _toConsumableArray(r)), e += te.effects.length, delete te.effects);
    Cn();
  }
  for (t = 0; t < e; t++) yi(r[t]);
}
function xi(r, t) {
  r.state = 0;
  for (var _e3 = 0; _e3 < r.sources.length; _e3 += 1) {
    var n = r.sources[_e3];
    if (n.sources) {
      var o = n.state;
      o === tt ? n !== t && (!n.updatedAt || n.updatedAt < Wi) && yi(n) : o === mi && xi(n, t);
    }
  }
}
function Eg(r) {
  for (var t = 0; t < r.observers.length; t += 1) {
    var _e4 = r.observers[t];
    _e4.state || (_e4.state = mi, _e4.pure ? Ie.push(_e4) : ut.push(_e4), _e4.observers && Eg(_e4));
  }
}
function Hi(r) {
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
    for (t = r.owned.length - 1; t >= 0; t--) Hi(r.owned[t]);
    r.owned = null;
  }
  if (r.cleanups) {
    for (t = r.cleanups.length - 1; t >= 0; t--) r.cleanups[t]();
    r.cleanups = null;
  }
  r.state = 0;
}
function Rg(r) {
  return r instanceof Error ? r : new Error(typeof r == "string" ? r : "Unknown error", {
    cause: r
  });
}
function nc(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : W;
  throw Rg(r);
}
function Gs(r) {
  if (typeof r == "function" && !r.length) return Gs(r());
  if (Array.isArray(r)) {
    var t = [];
    for (var _e6 = 0; _e6 < r.length; _e6++) {
      var n = Gs(r[_e6]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return r;
}
function Jx(r, t) {
  return function (n) {
    var o;
    return lt(function () {
      return o = pe(function () {
        return W.context = _objectSpread(_objectSpread({}, W.context), {}, _defineProperty({}, r, n.value)), rc(function () {
          return n.children;
        });
      });
    }, void 0), o;
  };
}
var Vs = Symbol("fallback");
function $i(r) {
  for (var t = 0; t < r.length; t++) r[t]();
}
function Zx(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var n = [],
    o = [],
    i = [],
    a = 0,
    s = t.length > 1 ? [] : null;
  return ft(function () {
    return $i(i);
  }), function () {
    var l = r() || [],
      c,
      u;
    return l[yg], pe(function () {
      var d = l.length,
        g,
        p,
        x,
        b,
        S,
        $,
        y,
        m,
        w;
      if (d === 0) a !== 0 && ($i(i), i = [], n = [], o = [], a = 0, s && (s = [])), e.fallback && (n = [Vs], o[0] = Dt(function (R) {
        return i[0] = R, e.fallback();
      }), a = 1);else if (a === 0) {
        for (o = new Array(d), u = 0; u < d; u++) n[u] = l[u], o[u] = Dt(f);
        a = d;
      } else {
        for (x = new Array(d), b = new Array(d), s && (S = new Array(d)), $ = 0, y = Math.min(a, d); $ < y && n[$] === l[$]; $++);
        for (y = a - 1, m = d - 1; y >= $ && m >= $ && n[y] === l[m]; y--, m--) x[m] = o[y], b[m] = i[y], s && (S[m] = s[y]);
        for (g = new Map(), p = new Array(m + 1), u = m; u >= $; u--) w = l[u], c = g.get(w), p[u] = c === void 0 ? -1 : c, g.set(w, u);
        for (c = $; c <= y; c++) w = n[c], u = g.get(w), u !== void 0 && u !== -1 ? (x[u] = o[c], b[u] = i[c], s && (S[u] = s[c]), u = p[u], g.set(w, u)) : i[c]();
        for (u = $; u < d; u++) u in x ? (o[u] = x[u], i[u] = b[u], s && (s[u] = S[u], s[u](u))) : o[u] = Dt(f);
        o = o.slice(0, a = d), n = l.slice(0);
      }
      return o;
    });
    function f(d) {
      if (i[u] = d, s) {
        var _V7 = V(u),
          _V8 = _slicedToArray(_V7, 2),
          g = _V8[0],
          p = _V8[1];
        return s[u] = p, t(l[u], g);
      }
      return t(l[u]);
    }
  };
}
function e0(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var n = [],
    o = [],
    i = [],
    a = [],
    s = 0,
    l;
  return ft(function () {
    return $i(i);
  }), function () {
    var c = r() || [];
    return c[yg], pe(function () {
      if (c.length === 0) return s !== 0 && ($i(i), i = [], n = [], o = [], s = 0, a = []), e.fallback && (n = [Vs], o[0] = Dt(function (f) {
        return i[0] = f, e.fallback();
      }), s = 1), o;
      for (n[0] === Vs && (i[0](), i = [], n = [], o = [], s = 0), l = 0; l < c.length; l++) l < n.length && n[l] !== c[l] ? a[l](function () {
        return c[l];
      }) : l >= n.length && (o[l] = Dt(u));
      for (; l < n.length; l++) i[l]();
      return s = a.length = i.length = c.length, n = c.slice(0), o = o.slice(0, s);
    });
    function u(f) {
      i[l] = f;
      var _V9 = V(c[l]),
        _V10 = _slicedToArray(_V9, 2),
        d = _V10[0],
        g = _V10[1];
      return a[l] = g, t(d, l);
    }
  };
}
function Og(r, t) {
  return pe(function () {
    return r(t || {});
  });
}
function xo() {
  return !0;
}
var Xs = {
  get: function get(r, t, e) {
    return t === gi ? e : r.get(t);
  },
  has: function has(r, t) {
    return t === gi ? !0 : r.has(t);
  },
  set: xo,
  deleteProperty: xo,
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(r, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return r.get(t);
      },
      set: xo,
      deleteProperty: xo
    };
  },
  ownKeys: function ownKeys(r) {
    return r.keys();
  }
};
function Oa(r) {
  return (r = typeof r == "function" ? r() : r) ? r : {};
}
function t0() {
  for (var r = 0, t = this.length; r < t; ++r) {
    var _e7 = this[r]();
    if (_e7 !== void 0) return _e7;
  }
}
function oc() {
  for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
    r[_key] = arguments[_key];
  }
  var t = !1;
  for (var a = 0; a < r.length; a++) {
    var s = r[a];
    t = t || !!s && gi in s, r[a] = typeof s == "function" ? (t = !0, ie(s)) : s;
  }
  if (t) return new Proxy({
    get: function get(a) {
      for (var _s2 = r.length - 1; _s2 >= 0; _s2--) {
        var l = Oa(r[_s2])[a];
        if (l !== void 0) return l;
      }
    },
    has: function has(a) {
      for (var _s3 = r.length - 1; _s3 >= 0; _s3--) if (a in Oa(r[_s3])) return !0;
      return !1;
    },
    keys: function keys() {
      var a = [];
      for (var _s4 = 0; _s4 < r.length; _s4++) a.push.apply(a, _toConsumableArray(Object.keys(Oa(r[_s4]))));
      return _toConsumableArray(new Set(a));
    }
  }, Xs);
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
        get: t0.bind(e[u] = [f.get.bind(_s5)])
      } : f.value !== void 0 ? f : void 0;else {
        var d = e[u];
        d && (f.get ? d.push(f.get.bind(_s5)) : f.value !== void 0 && d.push(function () {
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
function r0(r) {
  for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    t[_key2 - 1] = arguments[_key2];
  }
  if (gi in r) {
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
        }, Xs);
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
    }, Xs)), i;
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
function Be(r) {
  var t, e;
  var n = function n(o) {
    var i = te.context;
    if (i) {
      var _V11 = V(),
        _V12 = _slicedToArray(_V11, 2),
        s = _V12[0],
        l = _V12[1];
      te.count || (te.count = 0), te.count++, (e || (e = r())).then(function (c) {
        Cn(i), te.count--, l(function () {
          return c["default"];
        }), Cn();
      }), t = s;
    } else if (!t) {
      var _bg = bg(function () {
          return (e || (e = r())).then(function (l) {
            return l["default"];
          });
        }),
        _bg2 = _slicedToArray(_bg, 1),
        _s7 = _bg2[0];
      t = _s7;
    }
    var a;
    return ie(function () {
      return (a = t()) && pe(function () {
        if (!i) return a(o);
        var s = te.context;
        Cn(i);
        var l = a(o);
        return Cn(s), l;
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
var n0 = function n0(r) {
  return "Stale read from <".concat(r, ">.");
};
function ic(r) {
  var t = "fallback" in r && {
    fallback: function fallback() {
      return r.fallback;
    }
  };
  return ie(Zx(function () {
    return r.each;
  }, r.children, t || void 0));
}
function QY(r) {
  var t = "fallback" in r && {
    fallback: function fallback() {
      return r.fallback;
    }
  };
  return ie(e0(function () {
    return r.each;
  }, r.children, t || void 0));
}
function Yi(r) {
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
      return typeof o == "function" && o.length > 0 ? pe(function () {
        return o(t ? n : function () {
          if (!pe(e)) throw n0("Show");
          return r.when;
        });
      }) : o;
    }
    return r.fallback;
  }, void 0, void 0);
}
var o0 = void 0,
  _V13 = V(void 0),
  _V14 = _slicedToArray(_V13, 2),
  ac = _V14[0],
  i0 = _V14[1];
var _g = /*#__PURE__*/_createClass(function _g(t) {
  _classCallCheck(this, _g);
  v(this, "releaseCallback");
  this.releaseCallback = t;
});
var a0 = /*#__PURE__*/function (_g2) {
  function a0(e, n) {
    var _this2;
    _classCallCheck(this, a0);
    var o, i;
    _this2 = _callSuper(this, a0, [e]);
    v(_this2, "textureMap", new Map());
    v(_this2, "zeroReferenceTextureSet", new Set());
    v(_this2, "options");
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
  _inherits(a0, _g2);
  return _createClass(a0, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var o;
      var n = (o = e.options) == null ? void 0 : o.id;
      if (F(n, "Texture must have an id to be registered"), !this.textureMap.has(n)) {
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
      F(n, "Texture must have an id to be registered");
      var o = this.textureMap.get(n);
      o || (this.registerTexture(e), o = this.textureMap.get(n)), F(o, "Texture must have been registered"), e.txType === "SubTexture" && this.incrementTextureRefCount(e.props.texture), o.nodeRefCount++, o.lastUpdate = Date.now(), this.zeroReferenceTextureSet.has(o) && this.zeroReferenceTextureSet["delete"](o);
    }
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount(e) {
      var i;
      var n = (i = e.options) == null ? void 0 : i.id;
      F(n, "Texture must have an id to be registered");
      var o = this.textureMap.get(n);
      F(o, "Texture must have been registered"), o.nodeRefCount--, o.lastUpdate = Date.now(), o.nodeRefCount === 0 && this.zeroReferenceTextureSet.add(o), e.txType === "SubTexture" && this.decrementTextureRefCount(e.props.texture);
    }
  }]);
}(_g);
var s0 = /*#__PURE__*/function (_g3) {
  function s0(e) {
    var _this3;
    _classCallCheck(this, s0);
    _this3 = _callSuper(this, s0, [e]);
    v(_this3, "registry");
    _this3.registry = new FinalizationRegistry(e);
    return _this3;
  }
  _inherits(s0, _g3);
  return _createClass(s0, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var n, o;
      F((n = e.options) == null ? void 0 : n.id, "Texture must have an ID to be registered"), this.registry.register(e, (o = e.options) == null ? void 0 : o.id);
    }
  }, {
    key: "incrementTextureRefCount",
    value: function incrementTextureRefCount() {}
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount() {}
  }]);
}(_g);
var vn = {
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
        value: Pg(r)
      };
    }
  },
  Pg = function Pg(r) {
    var t = (r & 255) / 255,
      e = r >> 8 & 255,
      n = r >> 16 & 255,
      o = r >> 24 & 255;
    return "rgba(".concat(o, ",").concat(n, ",").concat(e, ",").concat(t, ")");
  },
  l0 = {
    id: "id"
  };
var c0 = /*#__PURE__*/function () {
  function c0(t, e) {
    _classCallCheck(this, c0);
    v(this, "root", null);
    v(this, "canvas", null);
    v(this, "height", 1080);
    v(this, "width", 1920);
    v(this, "scaleX", 1);
    v(this, "scaleY", 1);
    var i, a, s, l, c, u;
    if (dg()) return;
    if (!e) throw new Error("settings is required");
    this.height = Math.ceil((a = e.appHeight) != null ? a : 1080 / ((i = e.deviceLogicalPixelRatio) != null ? i : 1)), this.width = Math.ceil((l = e.appWidth) != null ? l : 1900 / ((s = e.deviceLogicalPixelRatio) != null ? s : 1)), this.scaleX = (c = e.deviceLogicalPixelRatio) != null ? c : 1, this.scaleY = (u = e.deviceLogicalPixelRatio) != null ? u : 1, this.canvas = t, this.root = document.createElement("div"), this.setRootPosition(), document.body.appendChild(this.root), new MutationObserver(this.setRootPosition.bind(this)).observe(t, {
      attributes: !0,
      childList: !1,
      subtree: !1
    }), new ResizeObserver(this.setRootPosition.bind(this)).observe(t), window.addEventListener("resize", this.setRootPosition.bind(this)), console.warn("Inspector is enabled, this will impact performance");
  }
  return _createClass(c0, [{
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
        if (vn[e]) {
          var _i3 = (o = vn[e]) == null ? void 0 : o.call(vn, n);
          if (_i3 === null) return;
          if (typeof _i3 == "string") {
            t.style.setProperty(_i3, String(n));
            return;
          }
          _typeof(_i3) == "object" && t.style.setProperty(_i3.prop, _i3.value);
          return;
        }
        if (l0[e]) {
          t.setAttribute(String(vn[e]), String(n));
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
        d = _n$rotation === void 0 ? 0 : _n$rotation,
        _n$scale = n.scale,
        g = _n$scale === void 0 ? 1 : _n$scale,
        p = n.color;
      function x() {
        setTimeout(function () {
          t.style.top = "".concat(l, "px"), t.style.left = "".concat(s, "px"), t.style.width = "".concat(c, "px"), t.style.height = "".concat(u, "px"), t.style.opacity = "".concat(f), t.style.rotate = "".concat(d, "rad"), t.style.scale = "".concat(g), t.style.color = Pg(p);
        }, i);
      }
      setTimeout(x, a);
    }
  }]);
}();
var $e = /*#__PURE__*/function () {
  function $e(t) {
    _classCallCheck(this, $e);
    v(this, "priority", 1);
    v(this, "name", "");
    v(this, "ref");
    v(this, "target");
    v(this, "passParameters", "");
    v(this, "declaredUniforms", "");
    v(this, "uniformInfo", {});
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
        d = "".concat(e, "_").concat(c);
      var g = "";
      u.size && (g = "[".concat(u.size(o), "]")), a.push(d), s += "uniform ".concat(f, " ").concat(d).concat(g, ";"), i[c] = {
        name: d,
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
v($e, "uniforms", {}), v($e, "methods"), v($e, "onShaderMask"), v($e, "onColorize"), v($e, "onEffectMask");
var u0 = {
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
var Ng = /*#__PURE__*/function () {
  function Ng(t) {
    var _this5 = this;
    _classCallCheck(this, Ng);
    v(this, "stage");
    v(this, "set");
    this.stage = t;
    var e = _objectSpread(_objectSpread({}, u0), this.getPropertySetters());
    this.set = Object.freeze(Object.fromEntries(Object.entries(e).map(function (_ref) {
      var _ref4 = _slicedToArray(_ref, 2),
        n = _ref4[0],
        o = _ref4[1];
      return [n, function (i, a) {
        i.props[n] !== a && (o(i, a), _this5.stage.requestRender());
      }];
    })));
  }
  return _createClass(Ng, [{
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
var Cu = /*#__PURE__*/function (_Tx) {
  function Cu(e, n, o) {
    var _this7;
    _classCallCheck(this, Cu);
    _this7 = _callSuper(this, Cu, [e, n]);
    v(_this7, "fontFace");
    v(_this7, "fontUrl");
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
  _inherits(Cu, _Tx);
  return _createClass(Cu);
}(Tx);
var Eu = 2048;
function Ru(r, t, e, n, o) {
  var i = r !== "bottom" ? .5 * t : 0;
  return e * (n - 1) + i + Math.max(e, t) + (o || 0);
}
var f0 = /*#__PURE__*/function () {
  function f0(t, e) {
    _classCallCheck(this, f0);
    v(this, "_canvas");
    v(this, "_context");
    v(this, "_settings");
    v(this, "renderInfo");
    this._canvas = t, this._context = e, this._settings = this.mergeDefaults({});
  }
  return _createClass(f0, [{
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
        d = this._settings.cutEx * e,
        g = this._settings.cutSy * e,
        p = this._settings.cutEy * e,
        x = (this._settings.letterSpacing || 0) * e,
        b = this._settings.textIndent * e;
      this.setFontProperties();
      var S = l || 2048 / this.getPrecision(),
        $ = S - n;
      if ($ < 10 && (S += 10 - $, $ = 10), u || (u = $), this._settings.textOverflow && !this._settings.wordWrap) {
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
        this._settings.text = this.wrapWord(this._settings.text, u - b, C);
      }
      var y;
      if (this._settings.wordWrap) y = this.wrapText(this._settings.text, u, x, b);else {
        y = {
          l: this._settings.text.split(/(?:\r\n|\r|\n)/),
          n: []
        };
        var _C2 = y.l.length;
        for (var A = 0; A < _C2 - 1; A++) y.n.push(A);
      }
      var m = y.l;
      if (this._settings.maxLines && m.length > this._settings.maxLines) {
        var _C3 = m.slice(0, this._settings.maxLines);
        var _A2 = null;
        if (this._settings.overflowSuffix) {
          var D = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0,
            M = this.wrapText(_C3[_C3.length - 1], u - D, x, b);
          _C3[_C3.length - 1] = "".concat(M.l[0]).concat(this._settings.overflowSuffix), _A2 = [M.l.length > 1 ? M.l[1] : ""];
        } else _A2 = [""];
        var P;
        var N = m.length;
        var _ = 0;
        var L = y.n.length;
        for (P = this._settings.maxLines; P < N; P++) _A2[_] += "".concat(_A2[_] ? " " : "").concat(m[P]), P + 1 < L && y.n[P + 1] && _++;
        t.remainingText = _A2.join("\n"), t.moreTextLines = !0, m = _C3;
      } else t.moreTextLines = !1, t.remainingText = "";
      var w = 0;
      var R = [];
      for (var _C4 = 0; _C4 < m.length; _C4++) {
        var _A3 = this.measureText(m[_C4], x) + (_C4 === 0 ? b : 0);
        R.push(_A3), w = Math.max(w, _A3);
      }
      t.lineWidths = R, l || (S = w + n + o, $ = w), s = s || i;
      var I;
      return c ? I = c : I = Ru(this._settings.textBaseline, i, s, m.length, a), a === null && (a = i), t.w = S, t.h = I, t.lines = m, t.precision = e, S || (S = 1), I || (I = 1), (f || d) && (S = Math.min(S, d - f)), (g || p) && (I = Math.min(I, p - g)), t.width = S, t.innerWidth = $, t.height = I, t.fontSize = i, t.cutSx = f, t.cutSy = g, t.cutEx = d, t.cutEy = p, t.lineHeight = s, t.lineWidths = R, t.offsetY = a, t.paddingLeft = n, t.paddingRight = o, t.letterSpacing = x, t.textIndent = b, t;
    }
  }, {
    key: "draw",
    value: function draw(t, e) {
      var n = this.getPrecision(),
        o = (e == null ? void 0 : e.lines) || t.lines,
        i = (e == null ? void 0 : e.lineWidths) || t.lineWidths,
        a = e ? Ru(this._settings.textBaseline, t.fontSize, t.lineHeight, e.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * n) : t.height;
      this._canvas.width = Math.min(Math.ceil(t.width + this._settings.textRenderIssueMargin), Eu), this._canvas.height = Math.min(Math.ceil(a), Eu), this.setFontProperties(), t.fontSize >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (t.cutSx || t.cutSy) && this._context.translate(-t.cutSx, -t.cutSy);
      var s, l;
      var c = [];
      for (var f = 0, d = o.length; f < d; f++) s = f === 0 ? t.textIndent : 0, l = f * t.lineHeight + t.offsetY, this._settings.verticalAlign == "middle" ? l += (t.lineHeight - t.fontSize) / 2 : this._settings.verticalAlign == "bottom" && (l += t.lineHeight - t.fontSize), this._settings.textAlign === "right" ? s += t.innerWidth - i[f] : this._settings.textAlign === "center" && (s += (t.innerWidth - i[f]) / 2), s += t.paddingLeft, c.push({
        text: o[f],
        x: s,
        y: l,
        w: i[f]
      });
      if (this._settings.highlight) {
        var _f2 = this._settings.highlightColor,
          _d2 = this._settings.highlightHeight * n || t.fontSize * 1.5,
          g = this._settings.highlightOffset * n,
          p = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * n : t.paddingLeft,
          x = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * n : t.paddingRight;
        this._context.fillStyle = Ia(_f2);
        for (var b = 0; b < c.length; b++) {
          var S = c[b];
          this._context.fillRect(S.x - p, S.y - t.offsetY + g, S.w + x + p, _d2);
        }
      }
      var u = null;
      this._settings.shadow && (u = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = Ia(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * n, this._context.shadowOffsetY = this._settings.shadowOffsetY * n, this._context.shadowBlur = this._settings.shadowBlur * n), this._context.fillStyle = Ia(this._settings.textColor);
      for (var _f3 = 0, _d3 = c.length; _f3 < _d3; _f3++) {
        var _g4 = c[_f3];
        if (t.letterSpacing === 0) this._context.fillText(_g4.text, _g4.x, _g4.y);else {
          var _p2 = _g4.text.split("");
          var _x2 = _g4.x;
          for (var _b2 = 0, _S2 = _p2.length; _b2 < _S2; _b2++) this._context.fillText(_p2[_b2], _x2, _g4.y), _x2 += this.measureText(_p2[_b2], t.letterSpacing);
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
        var d = i[l].split(" ");
        for (var g = 0; g < d.length; g++) {
          var p = this.measureText(d[g], n),
            x = p + this.measureText(" ", n);
          g === 0 || x > f ? (g > 0 && (c.push(u), u = ""), u += d[g], f = e - p - (g === 0 ? o : 0)) : (f -= x, u += " ".concat(d[g]));
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
var Ou = (typeof self === "undefined" ? "undefined" : _typeof(self)) > "u" ? globalThis : self;
var fg;
var _u = ((fg = Ou.document) == null ? void 0 : fg.fonts) || Ou.fonts;
function d0(r) {
  var t = r.fontFamily,
    e = r.fontStyle,
    n = r.fontWeight,
    o = r.fontStretch,
    i = r.fontSize;
  return [e, n, o, "".concat(i, "px"), t].join(" ");
}
var h0 = Lr(0, 0, 0, 0);
var Pu = /*#__PURE__*/function (_Ng) {
  function Pu(e) {
    var _this10;
    _classCallCheck(this, Pu);
    _this10 = _callSuper(this, Pu, [e]);
    v(_this10, "canvas");
    v(_this10, "context");
    v(_this10, "rendererBounds");
    (typeof OffscreenCanvas === "undefined" ? "undefined" : _typeof(OffscreenCanvas)) < "u" ? _this10.canvas = new OffscreenCanvas(0, 0) : _this10.canvas = document.createElement("canvas");
    var n = _this10.canvas.getContext("2d");
    n || (_this10.canvas = document.createElement("canvas"), n = _this10.canvas.getContext("2d")), F(n), _this10.context = n, _this10.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this10.stage.options.appWidth,
      y2: _this10.stage.options.appHeight
    };
    return _this10;
  }
  _inherits(Pu, _Ng);
  return _createClass(Pu, [{
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
      return e instanceof Cu;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      F(e instanceof Cu), _u.add(e.fontFace);
    }
  }, {
    key: "createState",
    value: function createState(e) {
      return {
        props: e,
        status: "initialState",
        updateScheduled: !1,
        emitter: new lr(),
        canvasPages: void 0,
        lightning2TextRenderer: new f0(this.canvas, this.context),
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
      var p, x;
      if (e.status === "initialState" && this.setStatus(e, "loading"), !e.fontInfo) {
        var b = d0(e.props);
        if (e.fontInfo = {
          cssString: b,
          loaded: !1
        }, !e.fontInfo.loaded) {
          _u.load(b).then(this.onFontLoaded.bind(this, e, b))["catch"](this.onFontLoadError.bind(this, e, b));
          return;
        }
      }
      if (!e.fontInfo.loaded) return;
      if (!e.renderInfo) {
        var _b3 = e.props.maxLines,
          S = e.props.contain === "both" ? Math.floor((e.props.height - e.props.offsetY) / e.props.lineHeight) : 0,
          $ = S > 0 && _b3 > 0 ? Math.min(S, _b3) : Math.max(S, _b3);
        e.lightning2TextRenderer.settings = {
          text: e.props.text,
          textAlign: e.props.textAlign,
          fontFace: e.props.fontFamily,
          fontSize: e.props.fontSize,
          fontStyle: [e.props.fontStretch, e.props.fontStyle, e.props.fontWeight].join(" "),
          textColor: ht(e.props.color),
          offsetY: e.props.fontSize + e.props.offsetY,
          wordWrap: e.props.contain !== "none",
          wordWrapWidth: e.props.contain === "none" ? void 0 : e.props.width,
          letterSpacing: e.props.letterSpacing,
          lineHeight: e.props.lineHeight,
          maxLines: $,
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
        var _b4 = Lr(n, o, l !== "none" ? n + i : 1 / 0, l === "both" ? o + a : 1 / 0, h0);
        Ax(this.rendererBounds, _b4, c), c.valid = !0;
      }
      var d = c.y2 - c.y1,
        g = Math.ceil(d / e.renderInfo.lineHeight);
      if (d === 0) {
        f = void 0, u = void 0, this.setStatus(e, "loaded");
        return;
      } else if (u && f) {
        var _b5 = n + u.x1,
          _S3 = o - s + u.y1,
          _$2 = n + u.x2,
          y = o - s + u.y2;
        if (_b5 <= c.x1 && _$2 >= c.x2 && _S3 <= c.y1 && y >= c.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        y < c.y2 ? (u.y1 += g * e.renderInfo.lineHeight, u.y2 += g * e.renderInfo.lineHeight, f.push(f.shift()), f[2].lineNumStart = f[1].lineNumStart + g, f[2].lineNumEnd = f[2].lineNumStart + g, f[2].valid = !1) : _S3 > c.y1 && (u.y1 -= g * e.renderInfo.lineHeight, u.y2 -= g * e.renderInfo.lineHeight, f.unshift(f.pop()), f[0].lineNumStart = f[1].lineNumStart - g, f[0].lineNumEnd = f[0].lineNumStart + g, f[0].valid = !1);
      } else {
        var _b6 = e.renderInfo.lineHeight * g,
          _S4 = Math.ceil(s / _b6),
          _$3 = _S4 * g,
          _y2 = _$3 - g,
          m = _$3 + g;
        f = [{
          texture: f == null ? void 0 : f[0].texture,
          lineNumStart: _y2,
          lineNumEnd: _y2 + g,
          valid: !1
        }, {
          texture: f == null ? void 0 : f[1].texture,
          lineNumStart: _$3,
          lineNumEnd: _$3 + g,
          valid: !1
        }, {
          texture: f == null ? void 0 : f[2].texture,
          lineNumStart: m,
          lineNumEnd: m + g,
          valid: !1
        }], e.canvasPages = f;
        var w = _S4 * _b6;
        u = {
          x1: 0,
          y1: w - _b6,
          x2: i,
          y2: w + _b6 * 2
        };
      }
      e.renderWindow = u, performance.now();
      var _iterator10 = _createForOfIteratorHelper(f),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _b7 = _step10.value;
          if (!_b7.valid) {
            if (_b7.lineNumStart < 0) {
              (p = _b7.texture) == null || p.setRenderableOwner(e, !1), _b7.texture = this.stage.txManager.loadTexture("ImageTexture", {
                src: ""
              }), _b7.texture.setRenderableOwner(e, e.isRenderable), _b7.valid = !0;
              continue;
            }
            e.lightning2TextRenderer.draw(e.renderInfo, {
              lines: e.renderInfo.lines.slice(_b7.lineNumStart, _b7.lineNumEnd),
              lineWidths: e.renderInfo.lineWidths.slice(_b7.lineNumStart, _b7.lineNumEnd)
            }), this.canvas.width === 0 || this.canvas.height === 0 || ((x = _b7.texture) == null || x.setRenderableOwner(e, !1), _b7.texture = this.stage.txManager.loadTexture("ImageTexture", {
              src: this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
            }, {
              preload: !0
            }), _b7.texture.setRenderableOwner(e, e.isRenderable)), _b7.valid = !0;
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
      var C, A, P, N, _, L, D, M, z, Z, Te, ve;
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
        d = _e$props2.y,
        g = _e$props2.scrollY,
        p = _e$props2.contain,
        x = _e$props2.width,
        b = _e$props2.height,
        S = {
          x: f,
          y: d,
          width: p !== "none" ? x : l,
          height: p === "both" ? b : c
        };
      tc({
        x: 0,
        y: 0,
        width: a.options.appWidth,
        height: a.options.appHeight
      }, S), F(s, "canvasPages is not defined"), F(u, "renderWindow is not defined");
      var y = (u.y2 - u.y1) / 3,
        _e$props3 = e.props,
        m = _e$props3.zIndex,
        w = _e$props3.color,
        R = i * Ix(w),
        I = In(4294967295, R);
      s[0].valid && this.stage.renderer.addQuad({
        alpha: R,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((A = (C = s[0].texture) == null ? void 0 : C.dimensions) == null ? void 0 : A.width) || 0,
        height: ((N = (P = s[0].texture) == null ? void 0 : P.dimensions) == null ? void 0 : N.height) || 0,
        texture: s[0].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: m,
        tx: n.tx,
        ty: n.ty - g + u.y1,
        ta: n.ta,
        tb: n.tb,
        tc: n.tc,
        td: n.td
      }), s[1].valid && this.stage.renderer.addQuad({
        alpha: R,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((L = (_ = s[1].texture) == null ? void 0 : _.dimensions) == null ? void 0 : L.width) || 0,
        height: ((M = (D = s[1].texture) == null ? void 0 : D.dimensions) == null ? void 0 : M.height) || 0,
        texture: s[1].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: m,
        tx: n.tx,
        ty: n.ty - g + u.y1 + y,
        ta: n.ta,
        tb: n.tb,
        tc: n.tc,
        td: n.td
      }), s[2].valid && this.stage.renderer.addQuad({
        alpha: R,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((Z = (z = s[2].texture) == null ? void 0 : z.dimensions) == null ? void 0 : Z.width) || 0,
        height: ((ve = (Te = s[2].texture) == null ? void 0 : Te.dimensions) == null ? void 0 : ve.height) || 0,
        texture: s[2].texture,
        textureOptions: {},
        shader: null,
        shaderProps: null,
        zIndex: m,
        tx: n.tx,
        ty: n.ty - g + u.y1 + y + y,
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
      _superPropGet(Pu, "setIsRenderable", this, 3)([e, n]), (o = e.canvasPages) == null || o.forEach(function (i) {
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
}(Ng);
var Fg = /*#__PURE__*/function (_Jr) {
  function Fg(t) {
    _classCallCheck(this, Fg);
    return _callSuper(this, Fg, [{
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
  _inherits(Fg, _Jr);
  return _createClass(Fg, [{
    key: "bindTextures",
    value: function bindTextures(t) {
      var e = this.glw;
      e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
    }
  }]);
}(Jr);
v(Fg, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
var Bg = /*#__PURE__*/function (_Jr2) {
  function Bg(e) {
    var _this12;
    _classCallCheck(this, Bg);
    _this12 = _callSuper(this, Bg, [{
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
    v(_this12, "supportsIndexedTextures", !0);
    return _this12;
  }
  _inherits(Bg, _Jr2);
  return _createClass(Bg, [{
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
}(Jr);
v(Bg, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: function fragment(e) {
    return "\n      #define txUnits ".concat(e, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(e, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(e).keys()).map(function (n) {
      return "\n          ".concat(n !== 0 ? "else " : "", "if (idx == ").concat(n, ") {\n            return texture2D(textures[").concat(n, "], uv);\n          }\n        ");
    }).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ");
  }
});
function kg(r, t) {
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
var _a = new Map(),
  v0 = function v0(r, t) {
    var e = JSON.stringify(r);
    if (_a.has(e)) return _a.get(e);
    var n = (r != null ? r : []).map(function (o) {
      return {
        type: o.type,
        props: t[o.type].resolveDefaults(o.props || {})
      };
    });
    return _a.set(e, n), n;
  },
  yt = /*#__PURE__*/function (_Jr3) {
    function yt(e, n, o) {
      var _this13;
      _classCallCheck(this, yt);
      var i = yt.createShader(n, o);
      _this13 = _callSuper(this, yt, [{
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
      v(_this13, "effects", []);
      _this13.effects = i.effects, _this13.calculateProps = kg(_this13.calculateProps.bind(_this13));
      return _this13;
    }
    _inherits(yt, _Jr3);
    return _createClass(yt, [{
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
          Object.keys(c).forEach(function (d) {
            var g = l.uniforms[d],
              p = u[d];
            var x = g.validator ? g.validator(c[d], c) : c[d];
            Array.isArray(x) && (x = new Float32Array(x)), o.push({
              name: p.name,
              value: x
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
          c = e.effects.map(function (p) {
            var x = n[p.type],
              b = x.getEffectKey(p.props || {});
            o[b] = o[b] ? ++o[b] : 1;
            var S = o[b];
            S === 1 && l.push({
              key: b,
              type: p.type,
              props: p.props
            });
            var $ = new x({
              ref: "".concat(b).concat(S === 1 ? "" : S),
              target: b,
              props: p.props
            });
            return a += $.declaredUniforms, s.push.apply(s, _toConsumableArray(Object.values($.uniformInfo))), $;
          });
        var u = "";
        l == null || l.forEach(function (p) {
          var I;
          var x = n[p.type],
            b = x.resolveDefaults((I = p.props) != null ? I : {}),
            S = [];
          for (var C in x.methods) {
            var A = C;
            var P = x.methods[C];
            i[C] && i[C] !== P && (A = yt.resolveMethodDuplicate(C, P, i)), i[A] = P.replace("function", A), S.push({
              m: C,
              cm: A
            });
          }
          var $ = x.onShaderMask instanceof Function ? x.onShaderMask(b) : x.onShaderMask,
            y = x.onColorize instanceof Function ? x.onColorize(b) : x.onColorize,
            m = x.onEffectMask instanceof Function ? x.onEffectMask(b) : x.onEffectMask;
          S.forEach(function (C) {
            var A = C.m,
              P = C.cm,
              N = new RegExp("\\$".concat(A), "g");
            $ && ($ = $.replace(N, P)), y && (y = y.replace(N, P)), m && (m = m.replace(N, P));
          });
          var w = x.getMethodParameters(x.uniforms, b),
            R = w.length > 0 ? ", ".concat(w) : "";
          $ && (u += "\n        float fx_".concat(p.key, "_onShaderMask(float shaderMask ").concat(R, ") {\n          ").concat($, "\n        }\n        ")), y && (u += "\n          vec4 fx_".concat(p.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(R, ") {\n            ").concat(y, "\n          }\n        ")), m && (u += "\n          vec4 fx_".concat(p.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(R, ") {\n            ").concat(m, "\n          }\n        "));
        });
        var f = "";
        for (var p in i) f += i[p];
        var d = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))",
          g = "\n\n    ";
        for (var _p3 = 0; _p3 < c.length; _p3++) {
          var x = c[_p3],
            b = x.passParameters.length > 0 ? ", ".concat(x.passParameters) : "",
            S = n[x.name];
          S.onShaderMask && (g += "\n        shaderMask = fx_".concat(x.target, "_onShaderMask(shaderMask ").concat(b, ");\n        ")), S.onColorize && (g += "\n        maskColor = fx_".concat(x.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(b, ");\n        ")), S.onEffectMask && (d = "fx_".concat(x.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(b, ")"));
          var $ = c[_p3 + 1];
          ($ === void 0 || n[$.name].onEffectMask) && (g += "\n          shaderColor = ".concat(d, ";\n        "));
        }
        return {
          effects: c,
          uniforms: s,
          fragment: yt.fragment(a, f, u, g),
          vertex: yt.vertex()
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
          effects: v0(e.effects, n),
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
  }(Jr);
v(yt, "z$__type__Props"), v(yt, "vertex", function () {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ";
}), v(yt, "fragment", function (e, n, o, i) {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(e, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(n, "\n\n    ").concat(o, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(i, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  ");
});
var Mr = yt;
var Qs = /*#__PURE__*/function (_Jr4) {
  function Qs(t) {
    _classCallCheck(this, Qs);
    return _callSuper(this, Qs, [{
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
  _inherits(Qs, _Jr4);
  return _createClass(Qs, [{
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
}(Jr);
v(Qs, "z$__type__Props"), v(Qs, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
var g0 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
  Ui = /*#__PURE__*/function (_Jr5) {
    function Ui(t) {
      _classCallCheck(this, Ui);
      return _callSuper(this, Ui, [{
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
    _inherits(Ui, _Jr5);
    return _createClass(Ui, [{
      key: "bindTextures",
      value: function bindTextures(t) {
        var e = this.glw;
        e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
      }
    }, {
      key: "bindProps",
      value: function bindProps(t) {
        var e = Ui.resolveDefaults(t);
        for (var n in e) if (n === "transform") this.setUniform("u_transform", !1, e[n]);else if (n === "scrollY") this.setUniform("u_scrollY", e[n]);else if (n === "color") {
          var o = ht(e.color);
          this.setUniform("u_color", o);
        } else n === "size" ? this.setUniform("u_size", e[n]) : n === "distanceRange" ? this.setUniform("u_distanceRange", e[n]) : n === "debug" && this.setUniform("u_debug", e[n] ? 1 : 0);
      }
    }], [{
      key: "resolveDefaults",
      value: function resolveDefaults() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e, n, o, i, a, s;
        return {
          transform: (e = t.transform) != null ? e : g0,
          scrollY: (n = t.scrollY) != null ? n : 0,
          color: (o = t.color) != null ? o : 4294967295,
          size: (i = t.size) != null ? i : 16,
          distanceRange: (a = t.distanceRange) != null ? a : 1,
          debug: (s = t.debug) != null ? s : !1
        };
      }
    }]);
  }(Jr);
v(Ui, "shaderSources", {
  vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
var qs = Ui;
var Rr = /*#__PURE__*/function (_$e) {
  function Rr() {
    var _this16;
    _classCallCheck(this, Rr);
    _this16 = _callSuper(this, Rr, arguments);
    v(_this16, "name", "radius");
    return _this16;
  }
  _inherits(Rr, _$e);
  return _createClass(Rr, null, [{
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
v(Rr, "z$__type__Props"), v(Rr, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), v(Rr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), v(Rr, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  "), v(Rr, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
var En = /*#__PURE__*/function (_$e2) {
  function En() {
    var _this17;
    _classCallCheck(this, En);
    _this17 = _callSuper(this, En, arguments);
    v(_this17, "name", "border");
    return _this17;
  }
  _inherits(En, _$e2);
  return _createClass(En, null, [{
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
v(En, "z$__type__Props"), v(En, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ht(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(En, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  "), v(En, "onColorize", "\n    return color;\n  ");
var Bt = /*#__PURE__*/function (_$e3) {
  function Bt() {
    var _this18;
    _classCallCheck(this, Bt);
    _this18 = _callSuper(this, Bt, arguments);
    v(_this18, "name", "linearGradient");
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
v(Bt, "z$__type__Props"), v(Bt, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: function validator(e) {
      return e.map(function (o) {
        return ht(o);
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
}), v(Bt, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
}), v(Bt, "ColorLoop", function (e) {
  var n = "";
  for (var o = 2; o < e; o++) n += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return n;
}), v(Bt, "onColorize", function (e) {
  var n = e.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(Bt.ColorLoop(n), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var Js = Bt;
var Zs = /*#__PURE__*/function (_$e4) {
  function Zs() {
    var _this19;
    _classCallCheck(this, Zs);
    _this19 = _callSuper(this, Zs, arguments);
    v(_this19, "name", "grayscale");
    return _this19;
  }
  _inherits(Zs, _$e4);
  return _createClass(Zs, null, [{
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
v(Zs, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
}), v(Zs, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
var Or = /*#__PURE__*/function (_$e5) {
  function Or() {
    var _this20;
    _classCallCheck(this, Or);
    _this20 = _callSuper(this, Or, arguments);
    v(_this20, "name", "borderRight");
    return _this20;
  }
  _inherits(Or, _$e5);
  return _createClass(Or, null, [{
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
v(Or, "z$__type__Props"), v(Or, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ht(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Or, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(Or, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(Or, "onColorize", "\n    return color;\n  ");
var _r = /*#__PURE__*/function (_$e6) {
  function _r() {
    var _this21;
    _classCallCheck(this, _r);
    _this21 = _callSuper(this, _r, arguments);
    v(_this21, "name", "borderTop");
    return _this21;
  }
  _inherits(_r, _$e6);
  return _createClass(_r, null, [{
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
v(_r, "z$__type__Props"), v(_r, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ht(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(_r, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(_r, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(_r, "onColorize", "\n    return color;\n  ");
var Pr = /*#__PURE__*/function (_$e7) {
  function Pr() {
    var _this22;
    _classCallCheck(this, Pr);
    _this22 = _callSuper(this, Pr, arguments);
    v(_this22, "name", "borderBottom");
    return _this22;
  }
  _inherits(Pr, _$e7);
  return _createClass(Pr, null, [{
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
v(Pr, "z$__type__Props"), v(Pr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ht(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Pr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(Pr, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(Pr, "onColorize", "\n    return color;\n  ");
var Nr = /*#__PURE__*/function (_$e8) {
  function Nr() {
    var _this23;
    _classCallCheck(this, Nr);
    _this23 = _callSuper(this, Nr, arguments);
    v(_this23, "name", "borderLeft");
    return _this23;
  }
  _inherits(Nr, _$e8);
  return _createClass(Nr, null, [{
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
v(Nr, "z$__type__Props"), v(Nr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ht(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Nr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(Nr, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(Nr, "onColorize", "\n    return color;\n  ");
var Rn = /*#__PURE__*/function (_$e9) {
  function Rn() {
    var _this24;
    _classCallCheck(this, Rn);
    _this24 = _callSuper(this, Rn, arguments);
    v(_this24, "name", "glitch");
    return _this24;
  }
  _inherits(Rn, _$e9);
  return _createClass(Rn, null, [{
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
v(Rn, "z$__type__Props"), v(Rn, "uniforms", {
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
}), v(Rn, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
}), v(Rn, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
var ai = /*#__PURE__*/function (_$e10) {
  function ai() {
    var _this25;
    _classCallCheck(this, ai);
    _this25 = _callSuper(this, ai, arguments);
    v(_this25, "name", "fadeOut");
    return _this25;
  }
  _inherits(ai, _$e10);
  return _createClass(ai, null, [{
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
v(ai, "z$__type__Props"), v(ai, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), v(ai, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
var tr = /*#__PURE__*/function (_$e11) {
  function tr() {
    var _this26;
    _classCallCheck(this, tr);
    _this26 = _callSuper(this, tr, arguments);
    v(_this26, "name", "radialGradient");
    return _this26;
  }
  _inherits(tr, _$e11);
  return _createClass(tr, null, [{
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
        var d = o;
        for (; f < u; f++) o[f] ? (d[f] = o[f], o[f - 1] === void 0 && d[f - 2] !== void 0 && (d[f - 1] = d[f - 2] + (o[f] - d[f - 2]) / 2)) : d[f] = f * (1 / (n.length - 1));
        o = d;
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
v(tr, "z$__type__Props"), v(tr, "uniforms", {
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
        return ht(o);
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
}), v(tr, "ColorLoop", function (e) {
  var n = "";
  for (var o = 2; o < e; o++) n += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return n;
}), v(tr, "onColorize", function (e) {
  var n = e.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(tr.ColorLoop(n), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var el = tr;
var Fr = /*#__PURE__*/function (_$e12) {
  function Fr() {
    var _this27;
    _classCallCheck(this, Fr);
    _this27 = _callSuper(this, Fr, arguments);
    v(_this27, "name", "radialProgress");
    return _this27;
  }
  _inherits(Fr, _$e12);
  return _createClass(Fr, null, [{
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
v(Fr, "z$__type__Props"), v(Fr, "uniforms", {
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
      return ht(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Fr, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
}), v(Fr, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  "), v(Fr, "onColorize", "\n    return color;\n  ");
var Br = /*#__PURE__*/function (_$e13) {
  function Br() {
    var _this28;
    _classCallCheck(this, Br);
    _this28 = _callSuper(this, Br, arguments);
    v(_this28, "name", "holePunch");
    return _this28;
  }
  _inherits(Br, _$e13);
  return _createClass(Br, null, [{
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
v(Br, "z$__type__Props"), v(Br, "uniforms", {
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
}), v(Br, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), v(Br, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  "), v(Br, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
var Lg = "RoundedRectangle";
var Mg = /*#__PURE__*/function (_Cx) {
  function Mg(e) {
    var _this29;
    _classCallCheck(this, Mg);
    _this29 = _callSuper(this, Mg);
    v(_this29, "shType");
    _this29.shType = e, e !== Lg && console.warn("Unsupported shader:", e);
    return _this29;
  }
  _inherits(Mg, _Cx);
  return _createClass(Mg, [{
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
}(Cx);
var p0 = /*#__PURE__*/function () {
  function p0() {
    _classCallCheck(this, p0);
    v(this, "shCache", new Map());
    v(this, "shConstructors", {});
    v(this, "attachedShader", null);
    v(this, "effectConstructors", {});
    v(this, "renderer");
    this.registerShaderType("DefaultShader", Fg), this.registerShaderType("DefaultShaderBatched", Bg), this.registerShaderType("RoundedRectangle", Qs), this.registerShaderType("DynamicShader", Mr), this.registerShaderType("SdfShader", qs), this.registerEffectType("border", En), this.registerEffectType("borderBottom", Pr), this.registerEffectType("borderLeft", Nr), this.registerEffectType("borderRight", Or), this.registerEffectType("borderTop", _r), this.registerEffectType("fadeOut", ai), this.registerEffectType("linearGradient", Js), this.registerEffectType("radialGradient", el), this.registerEffectType("grayscale", Zs), this.registerEffectType("glitch", Rn), this.registerEffectType("radius", Rr), this.registerEffectType("radialProgress", Fr), this.registerEffectType("holePunch", Br);
  }
  return _createClass(p0, [{
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
      if (this.renderer.mode === "canvas" && n.prototype instanceof Jr) return {
        shader: new Mg(t),
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
      var e = Mr.resolveDefaults(t, this.effectConstructors),
        n = Mr.makeCacheKey(e, this.effectConstructors);
      if (n && this.shCache.has(n)) return {
        shader: this.shCache.get(n),
        props: e
      };
      var o = new Mr(this.renderer, t, this.effectConstructors);
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
function m0(r) {
  return /\.(ktx|pvr)$/.test(r);
}
var y0 = /*#__PURE__*/function () {
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
            return _context2.abrupt("return", r.indexOf(".ktx") !== -1 ? x0(e) : $0(e));
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function y0(_x3) {
      return _ref5.apply(this, arguments);
    };
  }(),
  x0 = /*#__PURE__*/function () {
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
    return function x0(_x4) {
      return _ref6.apply(this, arguments);
    };
  }(),
  $0 = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(r) {
      var s, l, c, u, f, d, g, p, x, b, S, $;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            s = r, l = new Int32Array(s, 0, 13), c = l[12] + 52, u = new Uint8Array(s, c), f = [], d = {
              pixelWidth: l[7],
              pixelHeight: l[6],
              numberOfMipmapLevels: l[11] || 0
            };
            g = 0, p = d.pixelWidth || 0, x = d.pixelHeight || 0;
            for (b = 0; b < d.numberOfMipmapLevels; b++) {
              S = (p + 3 >> 2) * (x + 3 >> 2) * 8, $ = new Uint8Array(s, u.byteOffset + g, S);
              f.push($), g += S, p = p >> 1, x = x >> 1;
            }
            return _context4.abrupt("return", {
              data: {
                glInternalFormat: 36196,
                mipmaps: f,
                width: d.pixelWidth || 0,
                height: d.pixelHeight || 0,
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
    return function $0(_x5) {
      return _ref7.apply(this, arguments);
    };
  }(),
  Mn = /*#__PURE__*/function (_hg) {
    function Mn(e, n) {
      var _this30;
      _classCallCheck(this, Mn);
      _this30 = _callSuper(this, Mn, [e]);
      v(_this30, "props");
      _this30.props = Mn.resolveDefaults(n);
      return _this30;
    }
    _inherits(Mn, _hg);
    return _createClass(Mn, [{
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
                if (!m0(e)) {
                  _context5.next = 7;
                  break;
                }
                return _context5.abrupt("return", y0(e));
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
        var n = Mn.resolveDefaults(e);
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
  }(hg);
v(Mn, "z$__type__Props");
var tl = Mn;
var b0 = 24;
function S0(r, t, e, n, o, i, a, s, l) {
  var c = Math.min(Math.max(a.firstLineIdx, 0), s.length),
    u = 0;
  var f = 0;
  n === "middle" ? f = (t - r) / 2 : n === "bottom" && (f = t - r);
  var g = o / i + c * t + f;
  if (!(l && g >= l / i)) return {
    sdfX: u,
    sdfY: g,
    lineIndex: c
  };
}
var On = /*#__PURE__*/function () {
  function On(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, On);
    v(this, "iterator");
    v(this, "peekBuffer", []);
    v(this, "_lastIndex");
    this.iterator = t, this.iterator = t, this._lastIndex = e - 1, this.peekBuffer = [];
  }
  return _createClass(On, [{
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
function _n(r) {
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
function w0(r, t, e) {
  var n = e.shapeText(t, new On(_n(r, 0), 0));
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
function T0(r, t, e, n, o, i, a, s, l, c, u, f, d, g, p, x, b, S, $) {
  F(p, "Font face must be loaded"), F(p.loaded, "Font face must be loaded"), F(p.data, "Font face must be loaded"), F(p.shaper, "Font face must be loaded");
  var y = s / p.data.info.size,
    m = l / y,
    w = i / y,
    R = c / y,
    I = d[r],
    C = (I == null ? void 0 : I.codepointIndex) || 0,
    A = (I == null ? void 0 : I.maxX) || 0,
    P = (I == null ? void 0 : I.maxY) || 0;
  var N = A,
    _ = P,
    L = t,
    D = e,
    M = 0;
  var z = {
      codepointIndex: -1,
      bufferOffset: -1,
      xStart: -1
    },
    Z = p.shaper,
    Te = {
      letterSpacing: R
    };
  var ve = Z.shapeText(Te, new On(_n(n, C), C)),
    Re,
    ot = -1;
  var Et = [],
    po = a / y,
    mo = w0(S, Te, Z);
  var Gt = !0;
  for (; Gt;) {
    var Je = ($ === 0 || r + 1 < $) && (f !== "both" || b || D + m + p.maxCharHeight <= po),
      Ye = Je ? w : w - mo;
    var ye = 0;
    var Rt = D + m >= g.y1,
      Ot = D <= g.y2,
      Ke = Rt && Ot;
    for (; (Re = ve.next()) && !Re.done;) {
      var ae = Re.value;
      if (r === d.length) d.push({
        codepointIndex: ae.cluster,
        maxY: _,
        maxX: N
      });else if (r > d.length) throw new Error("Unexpected lineCache length");
      if (ae.codepoint === 32 || ae.codepoint === 10 ? z.codepointIndex !== -1 && (z.codepointIndex = -1, ye = L) : z.codepointIndex === -1 && (z.codepointIndex = ae.cluster, z.bufferOffset = M, z.xStart = ye), ae.mapped) {
        var yo = L + ae.xOffset + ae.width;
        if (f !== "none" && yo >= Ye && z.codepointIndex !== -1 && z.xStart > 0) {
          if (Je) {
            ve = Z.shapeText(Te, new On(_n(n, z.codepointIndex), z.codepointIndex)), M = z.bufferOffset;
            break;
          } else ve = Z.shapeText(Te, new On(_n(S, 0), 0)), L = z.xStart, M = z.bufferOffset, f = "none";
        } else {
          var _t = L + ae.xOffset,
            Pt = D + ae.yOffset;
          if (Ke) {
            ot === -1 && (ot = M);
            var Vt = p.getAtlasEntry(ae.glyphId),
              Xt = Vt.x / p.data.common.scaleW,
              Qt = Vt.y / p.data.common.scaleH,
              dn = Vt.width / p.data.common.scaleW,
              hn = Vt.height / p.data.common.scaleH;
            u[M++] = _t, u[M++] = Pt, u[M++] = Xt, u[M++] = Qt, u[M++] = _t + ae.width, u[M++] = Pt, u[M++] = Xt + dn, u[M++] = Qt, u[M++] = _t, u[M++] = Pt + ae.height, u[M++] = Xt, u[M++] = Qt + hn, u[M++] = _t + ae.width, u[M++] = Pt + ae.height, u[M++] = Xt + dn, u[M++] = Qt + hn;
          }
          _ = Math.max(_, Pt + ae.height), N = Math.max(N, _t + ae.width), L += ae.xAdvance;
        }
      } else if (ae.codepoint === 10) {
        if (Je) break;
        ve = Z.shapeText(Te, new On(_n(S, 0), 0)), f = "none";
      }
    }
    ot !== -1 && (Et.push({
      bufferStart: ot,
      bufferEnd: M
    }), ot = -1), L = 0, D += m, r++, z.codepointIndex = -1, ye = 0, !x && f === "both" && D > g.y2 || Re && Re.done ? Gt = !1 : Je || (Gt = !1);
  }
  if (o === "center") {
    var _Je = f === "none" ? N : w;
    for (var _Ye = 0; _Ye < Et.length; _Ye++) {
      var _ye = Et[_Ye],
        _Rt = u[_ye.bufferEnd - 4] - u[_ye.bufferStart],
        _Ot = (_Je - _Rt) / 2;
      for (var _Ke = _ye.bufferStart; _Ke < _ye.bufferEnd; _Ke += 4) u[_Ke] += _Ot;
    }
  } else if (o === "right") {
    var _Je2 = f === "none" ? N : w;
    for (var _Ye2 = 0; _Ye2 < Et.length; _Ye2++) {
      var _ye2 = Et[_Ye2],
        _Rt2 = _ye2.bufferEnd === _ye2.bufferStart ? 0 : u[_ye2.bufferEnd - 4] - u[_ye2.bufferStart],
        _Ot2 = _Je2 - _Rt2;
      for (var _Ke2 = _ye2.bufferStart; _Ke2 < _ye2.bufferEnd; _Ke2 += 4) u[_Ke2] += _Ot2;
    }
  }
  return F(Re), {
    bufferNumFloats: M,
    bufferNumQuads: M / 16,
    layoutNumCharacters: Re.done ? n.length - C : Re.value.cluster - C + 1,
    fullyProcessed: !!Re.done,
    maxX: N,
    maxY: _
  };
}
function A0(r, t) {
  return Math.ceil(r / t) * t;
}
function I0(r, t) {
  return Math.floor(r / t) * t;
}
function C0(r, t, e, n, o, i, a, s) {
  var l = r.screen,
    c = r.sdf;
  if (!Ex(a)) l.x1 = 0, l.y1 = 0, l.x2 = 0, l.y2 = 0, c.x1 = 0, c.y1 = 0, c.x2 = 0, c.y2 = 0, r.numLines = 0, r.firstLineIdx = 0;else {
    var u = a.x1 - t,
      f = u + (a.x2 - a.x1),
      d = a.y1 - e + n,
      g = I0(d - i, o || 1),
      p = A0(d + (a.y2 - a.y1) + i, o || 1);
    l.x1 = u, l.y1 = g, l.x2 = f, l.y2 = p, c.x1 = u / s, c.y1 = g / s, c.x2 = f / s, c.y2 = p / s, r.numLines = Math.ceil((p - g) / o), r.firstLineIdx = o ? Math.floor(g / o) : 0;
  }
  r.valid = !0;
}
var E0 = {
    normal: 400,
    bold: 700,
    bolder: 900,
    lighter: 100
  },
  Nu = function Nu(r) {
    return typeof r == "number" ? r : E0[r] || 400;
  };
function R0(r, t, e, n, o) {
  var i = Nu(e);
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
          var f = Nu(u.descriptors.weight);
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
var O0 = kg(R0);
var Dg = /*#__PURE__*/function () {
  function Dg(t) {
    _classCallCheck(this, Dg);
    v(this, "textRenderers");
    this.textRenderers = t;
  }
  return _createClass(Dg, [{
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
      return O0(t, n, o, i, a);
    }
  }]);
}();
var _0 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var P0 = /*#__PURE__*/function (_Ng2) {
  function P0(e) {
    var _this31;
    _classCallCheck(this, P0);
    _this31 = _callSuper(this, P0, [e]);
    v(_this31, "ssdfFontFamilies", {});
    v(_this31, "msdfFontFamilies", {});
    v(_this31, "fontFamilyArray", [_this31.ssdfFontFamilies, _this31.msdfFontFamilies]);
    v(_this31, "sdfShader");
    v(_this31, "rendererBounds");
    _this31.sdfShader = _this31.stage.shManager.loadShader("SdfShader").shader, _this31.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this31.stage.options.appWidth,
      y2: _this31.stage.options.appHeight
    };
    return _this31;
  }
  _inherits(P0, _Ng2);
  return _createClass(P0, [{
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
          e.props.x = n, e.elementBounds.valid && (_this32.setElementBoundsX(e), !e.renderWindow.valid && Ca(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
        },
        y: function y(e, n) {
          e.props.y = n, e.elementBounds.valid && (_this32.setElementBoundsY(e), !e.renderWindow.valid && Ca(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
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
      return e instanceof wu;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      F(e instanceof wu);
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
        emitter: new lr(),
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
          var Z = "SdfTextRenderer: Could not resolve font face for family: '".concat(e.props.fontFamily, "'");
          console.error(Z), this.setStatus(e, "failed", new Error(Z));
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
      F(n.data, "Font face data should be loaded");
      var _e$props4 = e.props,
        l = _e$props4.text,
        c = _e$props4.fontSize,
        u = _e$props4.x,
        f = _e$props4.y,
        d = _e$props4.contain,
        g = _e$props4.width,
        p = _e$props4.height,
        x = _e$props4.lineHeight,
        b = _e$props4.verticalAlign,
        S = _e$props4.scrollable,
        $ = _e$props4.overflowSuffix,
        y = _e$props4.maxLines,
        m = d === "both" && S ? e.props.scrollY : 0,
        w = e.renderWindow,
        R = n.data.info.size,
        I = c / R,
        C = x / I;
      e.distanceRange = I * n.data.distanceField.distanceRange;
      var A = l.length * b0;
      var P = e.vertexBuffer;
      (!P || P.length < A) && (P = new Float32Array(A * 2));
      var N = e.elementBounds;
      if (N.valid || (this.setElementBoundsX(e), this.setElementBoundsY(e), N.valid = !0), !s && w.valid) {
        var _Z = w.screen;
        if (u + _Z.x1 <= N.x1 && u + _Z.x2 >= N.x2 && f - m + _Z.y1 <= N.y1 && f - m + _Z.y2 >= N.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        w.valid = !1, this.setStatus(e, "loading");
      }
      var _e$props5 = e.props,
        _ = _e$props5.offsetY,
        L = _e$props5.textAlign;
      if (!w.valid) {
        if (!Ca(N, this.rendererBounds)) return;
        C0(w, u, f, m, x, d === "both" ? N.y2 - N.y1 : 0, N, I);
      }
      var D = S0(R, C, x, b, _, I, w, i, o);
      if (!D) {
        this.setStatus(e, "loaded");
        return;
      }
      var M = e.props.letterSpacing,
        z = T0(D.lineIndex, D.sdfX, D.sdfY, l, L, g, p, c, x, M, P, d, i, w.sdf, n, s, S, $, y);
      e.bufferUploaded = !1, e.bufferNumFloats = z.bufferNumFloats, e.bufferNumQuads = z.bufferNumQuads, e.vertexBuffer = P, e.renderWindow = w, a.lastLayoutNumCharacters = z.layoutNumCharacters, a.bufferSize = P.byteLength, z.fullyProcessed && (e.textW = z.maxX * I, e.textH = z.maxY * I), this.setStatus(e, "loaded");
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e, n, o, i, a, s) {
      var N, _, L;
      if (!e.vertexBuffer) return;
      var l = this.stage.renderer;
      F(l instanceof vg);
      var _e$props6 = e.props,
        c = _e$props6.fontSize,
        u = _e$props6.color,
        f = _e$props6.contain,
        d = _e$props6.scrollable,
        g = _e$props6.zIndex,
        p = _e$props6.debug,
        x = f === "both" && d ? e.props.scrollY : 0,
        _e$textW2 = e.textW,
        b = _e$textW2 === void 0 ? 0 : _e$textW2,
        _e$textH2 = e.textH,
        S = _e$textH2 === void 0 ? 0 : _e$textH2,
        $ = e.distanceRange,
        y = e.vertexBuffer,
        m = e.bufferUploaded,
        w = e.trFontFace,
        R = e.elementBounds;
      var I = e.webGlBuffers;
      if (!I) {
        var D = l.glw,
          M = 4 * Float32Array.BYTES_PER_ELEMENT,
          z = D.createBuffer();
        F(z), e.webGlBuffers = new Rx([{
          buffer: z,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: D.FLOAT,
              normalized: !1,
              stride: M,
              offset: 0
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: D.FLOAT,
              normalized: !1,
              stride: M,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }]), e.bufferUploaded = !1, F(e.webGlBuffers), I = e.webGlBuffers;
      }
      if (!m) {
        var _D2 = l.glw,
          _M2 = (N = I == null ? void 0 : I.getBuffer("a_textureCoordinate")) != null ? N : null;
        _D2.arrayBufferData(_M2, y, _D2.STATIC_DRAW), e.bufferUploaded = !0;
      }
      if (F(w), d && f === "both") {
        F(R.valid);
        var _D3 = Ox(R, _0);
        o.valid ? (e.clippingRect.valid = !0, o = tc(o, _D3, e.clippingRect)) : (e.clippingRect.valid = !0, o = gg(_D3, e.clippingRect));
      }
      var C = new _x(l.glw, l.options, I, this.sdfShader, {
          transform: n.data,
          color: Px(u, i),
          size: c / (((_ = w.data) == null ? void 0 : _.info.size) || 0),
          scrollY: x,
          distanceRange: $,
          debug: p.sdfShaderDebug
        }, i, o, {
          height: S,
          width: b
        }, 0, g, !1, a, s),
        A = (L = e.trFontFace) == null ? void 0 : L.texture;
      F(A);
      var P = this.stage.txManager.getCtxTexture(A);
      C.addTexture(P), C.length = e.bufferNumFloats, C.numQuads = e.bufferNumQuads, l.addRenderOp(C);
    }
  }, {
    key: "setIsRenderable",
    value: function setIsRenderable(e, n) {
      var o;
      _superPropGet(P0, "setIsRenderable", this, 3)([e, n]), (o = e.trFontFace) == null || o.texture.setRenderableOwner(e, n);
    }
  }, {
    key: "destroyState",
    value: function destroyState(e) {
      var n;
      _superPropGet(P0, "destroyState", this, 3)([e]), (n = e.trFontFace) == null || n.texture.setRenderableOwner(e, !1);
    }
  }, {
    key: "resolveFontFace",
    value: function resolveFontFace(e) {
      return Dg.resolveFontFace(this.fontFamilyArray, e);
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
}(Ng);
function N0(r) {
  return r.prototype instanceof Nx;
}
function F0(_x6, _x7) {
  return _F2.apply(this, arguments);
}
function _F2() {
  _F2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(r, t) {
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
          if (!N0(n)) {
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
  return _F2.apply(this, arguments);
}
function jg(r) {
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
var B0 = /*#__PURE__*/function (_lr) {
  function B0(e, n, o) {
    var _this34;
    _classCallCheck(this, B0);
    var S, $, y, m, w;
    _this34 = _callSuper(this, B0);
    v(_this34, "root", null);
    v(_this34, "driver");
    v(_this34, "canvas");
    v(_this34, "settings");
    v(_this34, "inspector", null);
    v(_this34, "nodes", new Map());
    v(_this34, "nextTextureId", 1);
    v(_this34, "textureTracker");
    var i = {
      appWidth: e.appWidth || 1920,
      appHeight: e.appHeight || 1080,
      txMemByteThreshold: e.txMemByteThreshold || 124e6,
      boundsMargin: e.boundsMargin || 0,
      deviceLogicalPixelRatio: e.deviceLogicalPixelRatio || 1,
      devicePhysicalPixelRatio: e.devicePhysicalPixelRatio || window.devicePixelRatio,
      clearColor: (S = e.clearColor) != null ? S : 0,
      coreExtensionModule: e.coreExtensionModule || null,
      experimental_FinalizationRegistryTextureUsageTracker: ($ = e.experimental_FinalizationRegistryTextureUsageTracker) != null ? $ : !1,
      textureCleanupOptions: e.textureCleanupOptions || {},
      fpsUpdateInterval: e.fpsUpdateInterval || 0,
      numImageWorkers: e.numImageWorkers !== void 0 ? e.numImageWorkers : 2,
      enableContextSpy: (y = e.enableContextSpy) != null ? y : !1,
      enableInspector: (m = e.enableInspector) != null ? m : !1,
      renderMode: (w = e.renderMode) != null ? w : "webgl"
    };
    _this34.settings = i;
    var a = i.appWidth,
      s = i.appHeight,
      l = i.deviceLogicalPixelRatio,
      c = i.devicePhysicalPixelRatio,
      u = i.enableInspector,
      f = function f(R) {
        _this34.driver.releaseTexture(R);
      },
      d = i.experimental_FinalizationRegistryTextureUsageTracker && typeof FinalizationRegistry == "function";
    _this34.textureTracker = d ? new s0(f) : new a0(f, _this34.settings.textureCleanupOptions);
    var g = a * l,
      p = s * l;
    _this34.driver = o;
    var x = document.createElement("canvas");
    _this34.canvas = x, x.width = g * c, x.height = p * c, x.style.width = "".concat(g, "px"), x.style.height = "".concat(p, "px");
    var b;
    if (typeof n == "string" ? b = document.getElementById(n) : b = n, !b) throw new Error("Could not find target element");
    o.onCreateNode = function (R) {
      _this34.nodes.set(R.id, R);
    }, o.onBeforeDestroyNode = function (R) {
      _this34.nodes["delete"](R.id);
    }, o.onFpsUpdate = function (R) {
      _this34.emit("fpsUpdate", R);
    }, o.onFrameTick = function (R) {
      _this34.emit("frameTick", R);
    }, o.onIdle = function () {
      _this34.emit("idle");
    }, b.appendChild(x), u && !dg() && (_this34.inspector = new c0(x, i));
    return _this34;
  }
  _inherits(B0, _lr);
  return _createClass(B0, [{
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
      var i, a, s, l, c, u, f, d, g, p, x, b, S, $, y, m, w, R, I;
      var n = (i = e.fontSize) != null ? i : 16,
        o = _objectSpread(_objectSpread({}, this.resolveNodeDefaults(e)), {}, {
          text: (a = e.text) != null ? a : "",
          textRendererOverride: (s = e.textRendererOverride) != null ? s : null,
          fontSize: n,
          fontFamily: (l = e.fontFamily) != null ? l : "sans-serif",
          fontStyle: (c = e.fontStyle) != null ? c : "normal",
          fontWeight: (u = e.fontWeight) != null ? u : "normal",
          fontStretch: (f = e.fontStretch) != null ? f : "normal",
          textAlign: (d = e.textAlign) != null ? d : "left",
          contain: (g = e.contain) != null ? g : "none",
          scrollable: (p = e.scrollable) != null ? p : !1,
          scrollY: (x = e.scrollY) != null ? x : 0,
          offsetY: (b = e.offsetY) != null ? b : 0,
          letterSpacing: (S = e.letterSpacing) != null ? S : 0,
          lineHeight: ($ = e.lineHeight) != null ? $ : n,
          maxLines: (y = e.maxLines) != null ? y : 0,
          textBaseline: (m = e.textBaseline) != null ? m : "alphabetic",
          verticalAlign: (w = e.verticalAlign) != null ? w : "top",
          overflowSuffix: (R = e.overflowSuffix) != null ? R : "...",
          debug: (I = e.debug) != null ? I : {}
        });
      return this.inspector ? this.inspector.createTextNode(this.driver, o) : this.driver.createTextNode(o);
    }
  }, {
    key: "resolveNodeDefaults",
    value: function resolveNodeDefaults(e) {
      var c, u, f, d, g, p, x, b, S, $, y, m, w, R, I, C, A, P, N, _, L, D, M, z, Z, Te, ve, Re, ot, Et, po, mo, Gt, Je, Ye, ye, Rt, Ot, Ke, ae, yo, _t, Pt, Vt, Xt, Qt, dn, hn;
      var n = (c = e.color) != null ? c : 4294967295,
        o = (d = (f = (u = e.colorTl) != null ? u : e.colorTop) != null ? f : e.colorLeft) != null ? d : n,
        i = (x = (p = (g = e.colorTr) != null ? g : e.colorTop) != null ? p : e.colorRight) != null ? x : n,
        a = ($ = (S = (b = e.colorBl) != null ? b : e.colorBottom) != null ? S : e.colorLeft) != null ? $ : n,
        s = (w = (m = (y = e.colorBr) != null ? y : e.colorBottom) != null ? m : e.colorRight) != null ? w : n,
        l = jg((R = e.data) != null ? R : {});
      return {
        x: (I = e.x) != null ? I : 0,
        y: (C = e.y) != null ? C : 0,
        width: (A = e.width) != null ? A : 0,
        height: (P = e.height) != null ? P : 0,
        alpha: (N = e.alpha) != null ? N : 1,
        autosize: (_ = e.autosize) != null ? _ : !1,
        clipping: (L = e.clipping) != null ? L : !1,
        color: n,
        colorTop: (D = e.colorTop) != null ? D : n,
        colorBottom: (M = e.colorBottom) != null ? M : n,
        colorLeft: (z = e.colorLeft) != null ? z : n,
        colorRight: (Z = e.colorRight) != null ? Z : n,
        colorBl: a,
        colorBr: s,
        colorTl: o,
        colorTr: i,
        zIndex: (Te = e.zIndex) != null ? Te : 0,
        zIndexLocked: (ve = e.zIndexLocked) != null ? ve : 0,
        parent: (Re = e.parent) != null ? Re : null,
        texture: (ot = e.texture) != null ? ot : null,
        shader: (Et = e.shader) != null ? Et : null,
        src: (po = e.src) != null ? po : "",
        scale: (mo = e.scale) != null ? mo : null,
        scaleX: (Je = (Gt = e.scaleX) != null ? Gt : e.scale) != null ? Je : 1,
        scaleY: (ye = (Ye = e.scaleY) != null ? Ye : e.scale) != null ? ye : 1,
        mount: (Rt = e.mount) != null ? Rt : 0,
        mountX: (Ke = (Ot = e.mountX) != null ? Ot : e.mount) != null ? Ke : 0,
        mountY: (yo = (ae = e.mountY) != null ? ae : e.mount) != null ? yo : 0,
        pivot: (_t = e.pivot) != null ? _t : .5,
        pivotX: (Vt = (Pt = e.pivotX) != null ? Pt : e.pivot) != null ? Vt : .5,
        pivotY: (Qt = (Xt = e.pivotY) != null ? Xt : e.pivot) != null ? Qt : .5,
        rotation: (dn = e.rotation) != null ? dn : 0,
        rtt: (hn = e.rtt) != null ? hn : !1,
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
}(lr);
var k0 = /*#__PURE__*/function (_lr2) {
  function k0(e, n, o) {
    var _this35;
    _classCallCheck(this, k0);
    _this35 = _callSuper(this, k0);
    v(_this35, "node");
    v(_this35, "props");
    v(_this35, "settings");
    v(_this35, "propStartValues", {});
    v(_this35, "restoreValues", {});
    v(_this35, "progress", 0);
    v(_this35, "delayFor", 0);
    v(_this35, "timingFunction");
    v(_this35, "propsList");
    _this35.node = e, _this35.props = n, _this35.settings = o, _this35.propStartValues = {}, _this35.propsList = Object.keys(n), _this35.propsList.forEach(function (i) {
      _this35.propStartValues[i] = e[i];
    }), _this35.timingFunction = function (i) {
      return i;
    }, o.easing && typeof o.easing == "string" && (_this35.timingFunction = Fx(o.easing)), _this35.delayFor = o.delay || 0;
    return _this35;
  }
  _inherits(k0, _lr2);
  return _createClass(k0, [{
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
            var d = this.timingFunction(this.progress) || this.progress,
              g = Tu(u, f, d);
            this.node[l] = g;
            continue;
          }
          this.node[l] = Tu(u, f, this.progress);
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
}(lr);
var L0 = /*#__PURE__*/function () {
  function L0(t, e) {
    _classCallCheck(this, L0);
    v(this, "manager");
    v(this, "animation");
    v(this, "startedPromise", null);
    v(this, "startedResolve", null);
    v(this, "stoppedPromise", null);
    v(this, "stoppedResolve", null);
    v(this, "state");
    this.manager = t, this.animation = e, this.state = "stopped";
  }
  return _createClass(L0, [{
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
      return F(t), t;
    }
  }, {
    key: "waitUntilStopped",
    value: function waitUntilStopped() {
      this.makeStoppedPromise();
      var t = this.stoppedPromise;
      return F(t), t;
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
      F(this.startedResolve), this.startedResolve(this), this.startedResolve = null;
    }
  }, {
    key: "finished",
    value: function finished() {
      F(this.stoppedResolve);
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
var ce = 0,
  ue = 3,
  Ce = 6,
  se = 1,
  fe = 4,
  Oe = 7,
  Ge = 2,
  Ve = 5,
  Xe = 8;
var Ne = /*#__PURE__*/function () {
  function Ne(t) {
    _classCallCheck(this, Ne);
    v(this, "data");
    t ? (this.data = new Float32Array(9), this.data[ce] = t[0], this.data[ue] = t[3], this.data[Ce] = t[6], this.data[se] = t[1], this.data[fe] = t[4], this.data[Oe] = t[7], this.data[Ge] = t[2], this.data[Ve] = t[5], this.data[Xe] = t[8]) : this.data = new Float32Array(9);
  }
  return _createClass(Ne, [{
    key: "translate",
    value: function translate(t, e) {
      return this.data[Ce] = this.data[ce] * t + this.data[ue] * e + this.data[Ce], this.data[Oe] = this.data[se] * t + this.data[fe] * e + this.data[Oe], this;
    }
  }, {
    key: "scale",
    value: function scale(t, e) {
      return this.data[ce] = this.data[ce] * t, this.data[ue] = this.data[ue] * e, this.data[se] = this.data[se] * t, this.data[fe] = this.data[fe] * e, this;
    }
  }, {
    key: "rotate",
    value: function rotate(t) {
      if (t === 0 || !(t % Math.PI * 2)) return this;
      var e = Math.cos(t),
        n = Math.sin(t),
        o = this.data[ce] * e + this.data[ue] * n,
        i = this.data[ue] * e - this.data[ce] * n,
        a = this.data[se] * e + this.data[fe] * n,
        s = this.data[fe] * e - this.data[se] * n;
      return this.data[ce] = o, this.data[ue] = i, this.data[se] = a, this.data[fe] = s, this;
    }
  }, {
    key: "multiply",
    value: function multiply(t) {
      return Ne.multiply(this, t, this);
    }
  }, {
    key: "tx",
    get: function get() {
      return this.data[Ce];
    }
  }, {
    key: "ty",
    get: function get() {
      return this.data[Oe];
    }
  }, {
    key: "ta",
    get: function get() {
      return this.data[ce];
    }
  }, {
    key: "tb",
    get: function get() {
      return this.data[ue];
    }
  }, {
    key: "tc",
    get: function get() {
      return this.data[se];
    }
  }, {
    key: "td",
    get: function get() {
      return this.data[fe];
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(t, e) {
      return [this.data[ce] * t + this.data[ue] * e + this.data[Ce], this.data[se] * t + this.data[fe] * e + this.data[se]];
    }
  }], [{
    key: "temp",
    get: function get() {
      return M0;
    }
  }, {
    key: "multiply",
    value: function multiply(t, e, n) {
      var o = t.data[ce] * e.data[ce] + t.data[ue] * e.data[se] + t.data[Ce] * e.data[Ge],
        i = t.data[ce] * e.data[ue] + t.data[ue] * e.data[fe] + t.data[Ce] * e.data[Ve],
        a = t.data[ce] * e.data[Ce] + t.data[ue] * e.data[Oe] + t.data[Ce] * e.data[Xe],
        s = t.data[se] * e.data[ce] + t.data[fe] * e.data[se] + t.data[Oe] * e.data[Ge],
        l = t.data[se] * e.data[ue] + t.data[fe] * e.data[fe] + t.data[Oe] * e.data[Ve],
        c = t.data[se] * e.data[Ce] + t.data[fe] * e.data[Oe] + t.data[Oe] * e.data[Xe],
        u = t.data[Ge] * e.data[ce] + t.data[Ve] * e.data[se] + t.data[Xe] * e.data[Ge],
        f = t.data[Ge] * e.data[ue] + t.data[Ve] * e.data[fe] + t.data[Xe] * e.data[Ve],
        d = t.data[Ge] * e.data[Ce] + t.data[Ve] * e.data[Oe] + t.data[Xe] * e.data[Xe];
      return n || (n = new Ne()), n.data[ce] = o, n.data[ue] = i, n.data[Ce] = a, n.data[se] = s, n.data[fe] = l, n.data[Oe] = c, n.data[Ge] = u, n.data[Ve] = f, n.data[Xe] = d, n;
    }
  }, {
    key: "identity",
    value: function identity(t) {
      return t || (t = new Ne()), t.data[ce] = 1, t.data[ue] = 0, t.data[Ce] = 0, t.data[se] = 0, t.data[fe] = 1, t.data[Oe] = 0, t.data[Ge] = 0, t.data[Ve] = 0, t.data[Xe] = 1, t;
    }
  }, {
    key: "translate",
    value: function translate(t, e, n) {
      return n || (n = new Ne()), n.data[ce] = 1, n.data[ue] = 0, n.data[Ce] = t, n.data[se] = 0, n.data[fe] = 1, n.data[Oe] = e, n.data[Ge] = 0, n.data[Ve] = 0, n.data[Xe] = 1, n;
    }
  }, {
    key: "scale",
    value: function scale(t, e, n) {
      return n || (n = new Ne()), n.data[ce] = t, n.data[ue] = 0, n.data[Ce] = 0, n.data[se] = 0, n.data[fe] = e, n.data[Oe] = 0, n.data[Ge] = 0, n.data[Ve] = 0, n.data[Xe] = 1, n;
    }
  }, {
    key: "rotate",
    value: function rotate(t, e) {
      var n = Math.cos(t),
        o = Math.sin(t);
      return e || (e = new Ne()), e.data[ce] = n, e.data[ue] = -o, e.data[Ce] = 0, e.data[se] = o, e.data[fe] = n, e.data[Oe] = 0, e.data[Ge] = 0, e.data[Ve] = 0, e.data[Xe] = 1, e;
    }
  }, {
    key: "copy",
    value: function copy(t, e, n) {
      return e || (e = new Ne()), e.data[0] = t.data[0], e.data[1] = t.data[1], e.data[2] = t.data[2], e.data[3] = t.data[3], e.data[4] = t.data[4], e.data[5] = t.data[5], e.data[6] = t.data[6], e.data[7] = t.data[7], e.data[8] = t.data[8], e;
    }
  }]);
}();
var M0 = new Ne(),
  $o = 0,
  bo = 2,
  So = 4,
  wo = 6,
  To = 1,
  Ao = 3,
  Io = 5,
  Co = 7;
var bi = /*#__PURE__*/function () {
  function bi(t) {
    _classCallCheck(this, bi);
    v(this, "data");
    this.data = new Float32Array(8), t && (this.data[$o] = t[$o], this.data[bo] = t[bo], this.data[So] = t[So], this.data[wo] = t[wo], this.data[To] = t[To], this.data[Ao] = t[Ao], this.data[Io] = t[Io], this.data[Co] = t[Co]);
  }
  return _createClass(bi, [{
    key: "x1",
    get: function get() {
      return this.data[$o];
    }
  }, {
    key: "x2",
    get: function get() {
      return this.data[bo];
    }
  }, {
    key: "x3",
    get: function get() {
      return this.data[So];
    }
  }, {
    key: "x4",
    get: function get() {
      return this.data[wo];
    }
  }, {
    key: "y1",
    get: function get() {
      return this.data[To];
    }
  }, {
    key: "y2",
    get: function get() {
      return this.data[Ao];
    }
  }, {
    key: "y3",
    get: function get() {
      return this.data[Io];
    }
  }, {
    key: "y4",
    get: function get() {
      return this.data[Co];
    }
  }], [{
    key: "translate",
    value: function translate(t, e, n, o, i, a, s, l, c) {
      return c || (c = new bi()), c.data[$o] = t, c.data[bo] = n, c.data[So] = i, c.data[wo] = s, c.data[To] = e, c.data[Ao] = o, c.data[Io] = a, c.data[Co] = l, c;
    }
  }]);
}();
var le;
(function (r) {
  r[r.Init = 0] = "Init", r[r.OutOfBounds = 2] = "OutOfBounds", r[r.InBounds = 4] = "InBounds", r[r.InViewport = 8] = "InViewport";
})(le || (le = {}));
var nr = new Map();
nr.set(le.Init, "init");
nr.set(le.OutOfBounds, "outOfBounds");
nr.set(le.InBounds, "inBounds");
nr.set(le.InViewport, "inViewport");
var O;
(function (r) {
  r[r.Children = 1] = "Children", r[r.ScaleRotate = 2] = "ScaleRotate", r[r.Local = 4] = "Local", r[r.Global = 8] = "Global", r[r.Clipping = 16] = "Clipping", r[r.CalculatedZIndex = 32] = "CalculatedZIndex", r[r.ZIndexSortedChildren = 64] = "ZIndexSortedChildren", r[r.PremultipliedColors = 128] = "PremultipliedColors", r[r.WorldAlpha = 256] = "WorldAlpha", r[r.RenderState = 512] = "RenderState", r[r.IsRenderable = 1024] = "IsRenderable", r[r.RenderTexture = 2048] = "RenderTexture", r[r.ParentRenderTexture = 4096] = "ParentRenderTexture", r[r.None = 0] = "None", r[r.All = 8191] = "All";
})(O || (O = {}));
var sc = /*#__PURE__*/function (_lr3) {
  function sc(e, n) {
    var _this40;
    _classCallCheck(this, sc);
    _this40 = _callSuper(this, sc);
    v(_this40, "stage");
    v(_this40, "children", []);
    v(_this40, "props");
    v(_this40, "updateType", O.All);
    v(_this40, "globalTransform");
    v(_this40, "scaleRotateTransform");
    v(_this40, "localTransform");
    v(_this40, "renderCoords");
    v(_this40, "renderBound");
    v(_this40, "strictBound");
    v(_this40, "preloadBound");
    v(_this40, "clippingRect", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      valid: !1
    });
    v(_this40, "isRenderable", !1);
    v(_this40, "renderState", le.Init);
    v(_this40, "worldAlpha", 1);
    v(_this40, "premultipliedColorTl", 0);
    v(_this40, "premultipliedColorTr", 0);
    v(_this40, "premultipliedColorBl", 0);
    v(_this40, "premultipliedColorBr", 0);
    v(_this40, "calcZIndex", 0);
    v(_this40, "hasRTTupdates", !1);
    v(_this40, "parentHasRenderTexture", !1);
    v(_this40, "onTextureLoaded", function (e, n) {
      _this40.autosizeNode(n), _this40.stage.requestRender(), _this40.parentHasRenderTexture && _this40.setRTTUpdates(1), _this40.emit("loaded", {
        type: "texture",
        dimensions: n
      });
    });
    v(_this40, "onTextureFailed", function (e, n) {
      _this40.emit("failed", {
        type: "texture",
        error: n
      });
    });
    v(_this40, "onTextureFreed", function (e) {
      _this40.emit("freed", {
        type: "texture"
      });
    });
    _this40.stage = e, _this40.props = _objectSpread(_objectSpread({}, n), {}, {
      parent: null
    }), _this40.parent = n.parent, _this40.rtt = n.rtt, _this40.updateScaleRotateTransform();
    return _this40;
  }
  _inherits(sc, _lr3);
  return _createClass(sc, [{
    key: "loadTexture",
    value: function loadTexture(e, n) {
      var _this41 = this;
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.props.texture && this.unloadTexture();
      var i = this.stage.txManager,
        a = i.loadTexture(e, n, o);
      this.props.texture = a, this.props.textureOptions = o, this.setUpdateType(O.IsRenderable), queueMicrotask(function () {
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
      this.props.texture = null, this.props.textureOptions = null, this.setUpdateType(O.IsRenderable);
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
      F(o);
      var _o$loadShader = o.loadShader(e, n),
        i = _o$loadShader.shader,
        a = _o$loadShader.props;
      this.props.shader = i, this.props.shaderProps = a, this.setUpdateType(O.IsRenderable);
    }
  }, {
    key: "setUpdateType",
    value: function setUpdateType(e) {
      this.updateType |= e;
      var n = this.props.parent;
      n && !(n.updateType & O.Children) && n.setUpdateType(O.Children), this.parentHasRenderTexture && this.setRTTUpdates(e);
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
      F(this.scaleRotateTransform);
      var e = this.props.pivotX * this.props.width,
        n = this.props.pivotY * this.props.height,
        o = this.props.mountX * this.props.width,
        i = this.props.mountY * this.props.height;
      this.localTransform = Ne.translate(e - o + this.props.x, n - i + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-e, -n), this.setUpdateType(O.Global);
    }
  }, {
    key: "update",
    value: function update(e, n) {
      var _this42 = this;
      var a;
      this.updateType & O.ScaleRotate && (this.updateScaleRotateTransform(), this.setUpdateType(O.Local)), this.updateType & O.Local && (this.updateLocalTransform(), this.setUpdateType(O.Global));
      var o = this.props.parent;
      var i = O.None;
      if (this.updateType & O.ParentRenderTexture) {
        var s = this.parent;
        for (; s;) s.rtt && (this.parentHasRenderTexture = !0), s = s.parent;
      }
      this.updateType ^ O.All && this.updateType & O.RenderTexture && this.children.forEach(function (s) {
        s.setUpdateType(O.All);
      }), this.updateType & O.Global && (F(this.localTransform), this.globalTransform = Ne.copy((o == null ? void 0 : o.globalTransform) || this.localTransform, this.globalTransform), this.parentHasRenderTexture && (a = this.props.parent) != null && a.rtt && (this.globalTransform = Ne.identity()), o && this.globalTransform.multiply(this.localTransform), this.calculateRenderCoords(), this.updateBoundingRect(), this.setUpdateType(O.Clipping | O.RenderState | O.Children), i |= O.Global), this.updateType & O.Clipping && (this.calculateClippingRect(n), this.setUpdateType(O.Children), i |= O.Clipping), this.updateType & O.WorldAlpha && (o ? this.worldAlpha = o.worldAlpha * this.props.alpha : this.worldAlpha = this.props.alpha, this.setUpdateType(O.Children | O.PremultipliedColors | O.IsRenderable), i |= O.WorldAlpha), this.updateType & O.PremultipliedColors && (this.premultipliedColorTl = In(this.props.colorTl, this.worldAlpha, !0), this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl : (this.premultipliedColorTr = In(this.props.colorTr, this.worldAlpha, !0), this.premultipliedColorBl = In(this.props.colorBl, this.worldAlpha, !0), this.premultipliedColorBr = In(this.props.colorBr, this.worldAlpha, !0))), this.updateType & O.RenderState && (this.updateRenderState(n), this.setUpdateType(O.IsRenderable)), this.updateType & O.IsRenderable && this.updateIsRenderable(), o && this.updateType & O.CalculatedZIndex && (this.calculateZIndex(), o.setUpdateType(O.ZIndexSortedChildren)), this.updateType & O.Children && this.children.length && !this.rtt && this.children.forEach(function (s) {
        s.setUpdateType(i), s.updateType !== 0 && s.update(e, _this42.clippingRect);
      }), this.updateType & O.ZIndexSortedChildren && this.sortChildren(), this.updateType = 0;
    }
  }, {
    key: "checkRenderProps",
    value: function checkRenderProps() {
      return this.props.texture ? !0 : !this.props.width || !this.props.height ? !1 : !!(this.props.shader || this.props.clipping || this.props.color !== 0 || this.props.colorTop !== 0 || this.props.colorBottom !== 0 || this.props.colorLeft !== 0 || this.props.colorRight !== 0 || this.props.colorTl !== 0 || this.props.colorTr !== 0 || this.props.colorBl !== 0 || this.props.colorBr !== 0);
    }
  }, {
    key: "checkRenderBounds",
    value: function checkRenderBounds(e) {
      F(this.renderBound);
      var n = e.width || this.stage.root.width,
        o = e.height || this.stage.root.height;
      this.strictBound = Lr(e.x, e.y, e.x + n, e.y + o, this.strictBound);
      var i = this.stage.boundsMargin;
      return this.preloadBound = Lr(e.x - i[3], e.y - i[0], e.x + n + i[1], e.y + o + i[2], this.preloadBound), Au(this.renderBound, this.strictBound) ? le.InViewport : Au(this.renderBound, this.preloadBound) ? le.InBounds : le.OutOfBounds;
    }
  }, {
    key: "updateRenderState",
    value: function updateRenderState(e) {
      var n = this.checkRenderBounds(e);
      if (n !== this.renderState) {
        var o = this.renderState;
        this.renderState = n, o === le.InViewport && this.emit("outOfViewport", {
          previous: o,
          current: n
        }), o < le.InBounds && n === le.InViewport ? (this.emit(nr.get(le.InBounds), {
          previous: o,
          current: n
        }), o = le.InBounds) : o > le.InBounds && n === le.OutOfBounds && (this.emit(nr.get(le.InBounds), {
          previous: o,
          current: n
        }), o = le.InBounds);
        var i = nr.get(n);
        F(i), this.emit(i, {
          previous: o,
          current: n
        });
      }
    }
  }, {
    key: "setRenderState",
    value: function setRenderState(e) {
      e !== this.renderState && (this.renderState = e, this.emit(le[e]));
    }
  }, {
    key: "updateIsRenderable",
    value: function updateIsRenderable() {
      var e;
      this.worldAlpha === 0 || !this.checkRenderProps() ? e = !1 : e = this.renderState > le.OutOfBounds, this.isRenderable !== e && (this.isRenderable = e, this.onChangeIsRenderable(e));
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
      F(o);
      var i = o.tx,
        a = o.ty,
        s = o.ta,
        l = o.tb,
        c = o.tc,
        u = o.td;
      if (l === 0 && c === 0) {
        var f = i,
          d = i + e * s,
          g = a,
          p = a + n * u;
        this.renderCoords = bi.translate(f, g, d, g, d, p, f, p, this.renderCoords);
      } else this.renderCoords = bi.translate(i, a, i + e * s, a + e * c, i + e * s + n * l, a + e * c + n * u, i + n * l, a + n * u, this.renderCoords);
    }
  }, {
    key: "updateBoundingRect",
    value: function updateBoundingRect() {
      var e = this.renderCoords,
        n = this.globalTransform;
      F(n), F(e);
      var o = n.tb,
        i = n.tc,
        a = e.x1,
        s = e.y1,
        l = e.x3,
        c = e.y3;
      if (o === 0 || i === 0) this.renderBound = Lr(a, s, l, c, this.renderBound);else {
        var u = e.x2,
          f = e.x4,
          d = e.y2,
          g = e.y4;
        this.renderBound = Lr(Math.min(a, u, l, f), Math.min(s, d, c, g), Math.max(a, u, l, f), Math.max(s, d, c, g), this.renderBound);
      }
    }
  }, {
    key: "calculateClippingRect",
    value: function calculateClippingRect(e) {
      F(this.globalTransform);
      var n = this.clippingRect,
        o = this.props,
        i = this.globalTransform,
        a = o.clipping,
        s = i.tb !== 0 || i.tc !== 0;
      a && !s ? (n.x = i.tx, n.y = i.ty, n.width = this.width * i.ta, n.height = this.height * i.td, n.valid = !0) : n.valid = !1, e.valid && n.valid ? tc(e, n, n) : e.valid && (gg(e, n), n.valid = !0);
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
        d = this.premultipliedColorBl,
        g = this.premultipliedColorBr,
        p = this.zIndex,
        x = this.worldAlpha,
        b = this.globalTransform,
        S = this.clippingRect;
      F(b), e.addQuad({
        width: n,
        height: o,
        colorTl: u,
        colorTr: f,
        colorBl: d,
        colorBr: g,
        texture: i,
        textureOptions: a,
        zIndex: p,
        shader: s,
        shaderProps: l,
        alpha: x,
        clippingRect: S,
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
      this.props.x !== e && (this.props.x = e, this.setUpdateType(O.Local));
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
      this.props.y !== e && (this.props.y = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width !== e && (this.props.width = e, this.setUpdateType(O.Local), this.props.rtt && this.setUpdateType(O.RenderTexture));
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height !== e && (this.props.height = e, this.setUpdateType(O.Local), this.props.rtt && this.setUpdateType(O.RenderTexture));
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
      this.props.scaleX !== e && (this.props.scaleX = e, this.setUpdateType(O.ScaleRotate));
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this.props.scaleY;
    },
    set: function set(e) {
      this.props.scaleY !== e && (this.props.scaleY = e, this.setUpdateType(O.ScaleRotate));
    }
  }, {
    key: "mount",
    get: function get() {
      return this.props.mount;
    },
    set: function set(e) {
      (this.props.mountX !== e || this.props.mountY !== e) && (this.props.mountX = e, this.props.mountY = e, this.props.mount = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "mountX",
    get: function get() {
      return this.props.mountX;
    },
    set: function set(e) {
      this.props.mountX !== e && (this.props.mountX = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "mountY",
    get: function get() {
      return this.props.mountY;
    },
    set: function set(e) {
      this.props.mountY !== e && (this.props.mountY = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "pivot",
    get: function get() {
      return this.props.pivot;
    },
    set: function set(e) {
      (this.props.pivotX !== e || this.props.pivotY !== e) && (this.props.pivotX = e, this.props.pivotY = e, this.props.pivot = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "pivotX",
    get: function get() {
      return this.props.pivotX;
    },
    set: function set(e) {
      this.props.pivotX !== e && (this.props.pivotX = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "pivotY",
    get: function get() {
      return this.props.pivotY;
    },
    set: function set(e) {
      this.props.pivotY !== e && (this.props.pivotY = e, this.setUpdateType(O.Local));
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.props.rotation;
    },
    set: function set(e) {
      this.props.rotation !== e && (this.props.rotation = e, this.setUpdateType(O.ScaleRotate));
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.props.alpha;
    },
    set: function set(e) {
      this.props.alpha = e, this.setUpdateType(O.PremultipliedColors | O.WorldAlpha);
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
      this.props.clipping = e, this.setUpdateType(O.Clipping);
    }
  }, {
    key: "color",
    get: function get() {
      return this.props.color;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorTr !== e || this.props.colorBl !== e || this.props.colorBr !== e) && (this.colorTl = e, this.colorTr = e, this.colorBl = e, this.colorBr = e), this.props.color = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorTop",
    get: function get() {
      return this.props.colorTop;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorTr !== e) && (this.colorTl = e, this.colorTr = e), this.props.colorTop = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorBottom",
    get: function get() {
      return this.props.colorBottom;
    },
    set: function set(e) {
      (this.props.colorBl !== e || this.props.colorBr !== e) && (this.colorBl = e, this.colorBr = e), this.props.colorBottom = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorLeft",
    get: function get() {
      return this.props.colorLeft;
    },
    set: function set(e) {
      (this.props.colorTl !== e || this.props.colorBl !== e) && (this.colorTl = e, this.colorBl = e), this.props.colorLeft = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorRight",
    get: function get() {
      return this.props.colorRight;
    },
    set: function set(e) {
      (this.props.colorTr !== e || this.props.colorBr !== e) && (this.colorTr = e, this.colorBr = e), this.props.colorRight = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorTl",
    get: function get() {
      return this.props.colorTl;
    },
    set: function set(e) {
      this.props.colorTl = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorTr",
    get: function get() {
      return this.props.colorTr;
    },
    set: function set(e) {
      this.props.colorTr = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorBl",
    get: function get() {
      return this.props.colorBl;
    },
    set: function set(e) {
      this.props.colorBl = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "colorBr",
    get: function get() {
      return this.props.colorBr;
    },
    set: function set(e) {
      this.props.colorBr = e, this.setUpdateType(O.PremultipliedColors);
    }
  }, {
    key: "zIndexLocked",
    get: function get() {
      return this.props.zIndexLocked || 0;
    },
    set: function set(e) {
      this.props.zIndexLocked = e, this.setUpdateType(O.CalculatedZIndex | O.Children), this.children.forEach(function (n) {
        n.setUpdateType(O.CalculatedZIndex);
      });
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.props.zIndex;
    },
    set: function set(e) {
      this.props.zIndex = e, this.setUpdateType(O.CalculatedZIndex | O.Children), this.children.forEach(function (n) {
        n.setUpdateType(O.CalculatedZIndex);
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
          F(o !== -1, "CoreNode.parent: Node not found in old parent's children!"), n.children.splice(o, 1), n.setUpdateType(O.Children | O.ZIndexSortedChildren);
        }
        e && (e.children.push(this), this.setUpdateType(O.All), e.setUpdateType(O.Children | O.ZIndexSortedChildren), (e.rtt || e.parentHasRenderTexture) && this.setRTTUpdates(O.All)), this.updateScaleRotateTransform();
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
        this.props.rtt && (this.props.rtt = !1, this.unloadTexture(), this.setUpdateType(O.All), this.children.forEach(function (i) {
          i.parentHasRenderTexture = !1;
        }), (n = this.stage.renderer) == null || n.removeRTTNode(this));
        return;
      }
      this.props.rtt = !0, this.hasRTTupdates = !0, this.setUpdateType(O.All), this.children.forEach(function (i) {
        i.setUpdateType(O.All);
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
}(lr);
var D0 = 1;
function lc() {
  return D0++;
}
var rl = /*#__PURE__*/function (_lr4) {
  function rl(e, n, o, i) {
    var _this43;
    _classCallCheck(this, rl);
    var a;
    _this43 = _callSuper(this, rl);
    v(_this43, "rendererMain");
    v(_this43, "stage");
    v(_this43, "id");
    v(_this43, "coreNode");
    v(_this43, "_children", []);
    v(_this43, "_src", "");
    v(_this43, "_parent", null);
    v(_this43, "_texture", null);
    v(_this43, "_shader", null);
    v(_this43, "_data", {});
    v(_this43, "onTextureLoaded", function (e, n) {
      _this43.emit("loaded", n);
    });
    v(_this43, "onTextureFailed", function (e, n) {
      _this43.emit("failed", n);
    });
    v(_this43, "onTextureFreed", function (e, n) {
      _this43.emit("freed", n);
    });
    v(_this43, "onOutOfBounds", function (e, n) {
      _this43.emit("outOfBounds", n);
    });
    v(_this43, "onInBounds", function (e, n) {
      _this43.emit("inBounds", n);
    });
    v(_this43, "onOutOfViewport", function (e, n) {
      _this43.emit("outOfViewport", n);
    });
    v(_this43, "onInViewport", function (e, n) {
      _this43.emit("inViewport", n);
    });
    _this43.rendererMain = n, _this43.stage = o, _this43.id = (a = i == null ? void 0 : i.id) != null ? a : lc(), _this43.coreNode = i || new sc(_this43.stage, {
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
  _inherits(rl, _lr4);
  return _createClass(rl, [{
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
        F(i !== -1, "MainOnlyNode.parent: Node not found in old parent's children!"), n.children.splice(i, 1);
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
      this._data = jg(e);
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
      var o = new k0(this.coreNode, e, n);
      return new L0(this.stage.animationManager, o);
    }
  }]);
}(lr);
var j0 = function j0(r) {
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
  z0 = function z0() {
    return performance ? performance.now() : Date.now();
  };
var U0 = /*#__PURE__*/function () {
  function U0() {
    _classCallCheck(this, U0);
    v(this, "activeAnimations", new Set());
  }
  return _createClass(U0, [{
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
var W0 = /*#__PURE__*/function () {
  function W0(t) {
    var _this44 = this;
    _classCallCheck(this, W0);
    v(this, "imageWorkersEnabled", !0);
    v(this, "messageManager", {});
    v(this, "workers", []);
    v(this, "workerIndex", 0);
    v(this, "nextId", 0);
    this.workers = this.createWorkers(t), this.workers.forEach(function (e) {
      e.onmessage = _this44.handleMessage.bind(_this44);
    });
  }
  return _createClass(W0, [{
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
var Dn = /*#__PURE__*/function (_hg2) {
  function Dn(e, n) {
    var _this46;
    _classCallCheck(this, Dn);
    _this46 = _callSuper(this, Dn, [e]);
    v(_this46, "props");
    _this46.props = Dn.resolveDefaults(n);
    return _this46;
  }
  _inherits(Dn, _hg2);
  return _createClass(Dn, [{
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
      var n = Dn.resolveDefaults(e);
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
}(hg);
v(Dn, "z$__type__Props");
var nl = Dn;
var H0 = /*#__PURE__*/function () {
  function H0(t) {
    _classCallCheck(this, H0);
    v(this, "usedMemory", 0);
    v(this, "txConstructors", {});
    v(this, "textureKeyCache", new Map());
    v(this, "textureIdCache", new Map());
    v(this, "ctxTextureCache", new WeakMap());
    v(this, "textureRefCountMap", new WeakMap());
    v(this, "imageWorkerManager", null);
    v(this, "hasCreateImageBitmap", !!self.createImageBitmap);
    v(this, "hasWorker", !!self.Worker);
    v(this, "renderer");
    this.hasCreateImageBitmap && this.hasWorker && (this.imageWorkerManager = new W0(t)), this.hasCreateImageBitmap || console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), this.registerTextureType("ImageTexture", tl), this.registerTextureType("ColorTexture", Bx), this.registerTextureType("NoiseTexture", nl), this.registerTextureType("SubTexture", pg), this.registerTextureType("RenderTexture", kx);
  }
  return _createClass(H0, [{
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
          F(a), a.count--, a.count === 0 && (n["delete"](o), a.cacheKey && this.textureKeyCache["delete"](a.cacheKey));
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
var Y0 = /*#__PURE__*/function () {
  function Y0() {
    _classCallCheck(this, Y0);
    v(this, "data", {});
  }
  return _createClass(Y0, [{
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
var K0 = /*#__PURE__*/function () {
  function K0(t) {
    _classCallCheck(this, K0);
    v(this, "memUsed", 0);
    v(this, "textures", new Map());
    v(this, "threshold");
    v(this, "gcRequested", !1);
    this.threshold = t, t === 0 && (this.setTextureMemUse = function () {});
  }
  return _createClass(K0, [{
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
var G0 = {
  isWhite: !0,
  a: 1,
  r: 255,
  g: 255,
  b: 255
};
function Pa(r) {
  if (r === 4294967295) return G0;
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
function si(_ref8) {
  var r = _ref8.a,
    t = _ref8.r,
    e = _ref8.g,
    n = _ref8.b;
  return "rgba(".concat(t, ",").concat(e, ",").concat(n, ",").concat(r, ")");
}
var V0 = /*#__PURE__*/function (_Lx) {
  function V0() {
    var _this47;
    _classCallCheck(this, V0);
    _this47 = _callSuper(this, V0, arguments);
    v(_this47, "image");
    v(_this47, "tintCache");
    return _this47;
  }
  _inherits(V0, _Lx);
  return _createClass(V0, [{
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
      if (F(n, "Attempt to get unloaded image texture"), e.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), n;
      var o = si(e);
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
}(Lx);
function X0(r) {
  var t, e;
  return r.shader instanceof Mg && r.shader.shType === Lg && (e = (t = r.shaderProps) == null ? void 0 : t.radius) != null ? e : 0;
}
var Q0 = /*#__PURE__*/function (_Mx) {
  function Q0(e) {
    var _this49;
    _classCallCheck(this, Q0);
    _this49 = _callSuper(this, Q0, [e]);
    v(_this49, "context");
    v(_this49, "canvas");
    v(_this49, "pixelRatio");
    v(_this49, "clearColor");
    v(_this49, "renderToTextureActive", !1);
    v(_this49, "activeRttNode", null);
    _this49.mode = "canvas", _this49.shManager.renderer = _this49;
    var n = e.canvas,
      o = e.pixelRatio,
      i = e.clearColor;
    _this49.canvas = n, _this49.context = n.getContext("2d"), _this49.pixelRatio = o, _this49.clearColor = i ? Dx(i) : void 0;
    return _this49;
  }
  _inherits(Q0, _Mx);
  return _createClass(Q0, [{
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
        d = e.ta,
        g = e.tb,
        p = e.tc,
        x = e.td,
        b = e.clippingRect;
      var S = e.texture,
        $,
        y;
      if (S) {
        if (S instanceof pg && (y = S.props, S = S.parentTexture), $ = this.txManager.getCtxTexture(S), S.state === "freed") {
          $.load();
          return;
        }
        if (S.state !== "loaded" || !$.hasImage()) return;
      }
      var m = Pa(c),
        w = d !== 1,
        R = b.width !== 0 && b.height !== 0,
        I = c !== u || c !== f,
        C = e.shader ? X0(e) : 0;
      if ((w || R || C) && n.save(), R) {
        var A = new Path2D(),
          P = b.x,
          N = b.y,
          _ = b.width,
          L = b.height;
        A.rect(P, N, _, L), n.clip(A);
      }
      if (w) {
        var _A4 = this.pixelRatio;
        n.setTransform(d, p, g, x, o * _A4, i * _A4), n.scale(_A4, _A4), n.translate(-o, -i);
      }
      if (C) {
        var _A5 = new Path2D();
        _A5.roundRect(o, i, a, s, C), n.clip(_A5);
      }
      if ($) {
        var _A6 = $.getImage(m);
        n.globalAlpha = l, y ? n.drawImage(_A6, y.x, y.y, y.width, y.height, o, i, a, s) : n.drawImage(_A6, o, i, a, s), n.globalAlpha = 1;
      } else if (I) {
        var _A7 = o,
          _P2 = i,
          _N2;
        c === u ? (_A7 = o, _P2 = i + s, _N2 = Pa(f)) : (_A7 = o + a, _P2 = i, _N2 = Pa(u));
        var _6 = n.createLinearGradient(o, i, _A7, _P2);
        _6.addColorStop(0, si(m)), _6.addColorStop(1, si(_N2)), n.fillStyle = _6, n.fillRect(o, i, a, s);
      } else n.fillStyle = si(m), n.fillRect(o, i, a, s);
      (w || R || C) && n.restore();
    }
  }, {
    key: "createCtxTexture",
    value: function createCtxTexture(e) {
      return new V0(this.txMemManager, e);
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
}(Mx);
var q0 = 2e6;
var J0 = /*#__PURE__*/function (_lr5) {
  function J0(e) {
    var _this50;
    _classCallCheck(this, J0);
    _this50 = _callSuper(this, J0);
    v(_this50, "options");
    v(_this50, "animationManager");
    v(_this50, "txManager");
    v(_this50, "txMemManager");
    v(_this50, "fontManager");
    v(_this50, "textRenderers");
    v(_this50, "shManager");
    v(_this50, "renderer");
    v(_this50, "root");
    v(_this50, "boundsMargin");
    v(_this50, "deltaTime", 0);
    v(_this50, "lastFrameTime", 0);
    v(_this50, "currentFrameTime", 0);
    v(_this50, "fpsNumFrames", 0);
    v(_this50, "fpsElapsedTime", 0);
    v(_this50, "renderRequested", !1);
    v(_this50, "contextSpy", null);
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
      d = e.txMemByteThreshold,
      g = e.renderMode;
    _this50.txManager = new H0(f), _this50.txMemManager = new K0(d), _this50.shManager = new p0(), _this50.animationManager = new U0(), _this50.contextSpy = u ? new Y0() : null;
    var p = [0, 0, 0, 0];
    c && (p = Array.isArray(c) ? c : [c, c, c, c]), _this50.boundsMargin = p, a != null && a.monitorTextureCache && setInterval(function () {
      F(_this50.txManager);
      var S = _this50.txManager.getDebugInfo();
      console.log("Texture ID Cache Size: ", S.idCacheSize), console.log("Texture Key Cache Size: ", S.keyCacheSize);
    }, 1e3);
    var x = {
      stage: _this50,
      canvas: n,
      pixelRatio: e.devicePhysicalPixelRatio * e.deviceLogicalPixelRatio,
      clearColor: o != null ? o : 4278190080,
      bufferMemory: q0,
      txManager: _this50.txManager,
      txMemManager: _this50.txMemManager,
      shManager: _this50.shManager,
      contextSpy: _this50.contextSpy
    };
    g === "canvas" ? _this50.renderer = new Q0(x) : _this50.renderer = new vg(x), jx(g), _this50.txManager.renderer = _this50.renderer, _this50.textRenderers = g === "webgl" ? {
      canvas: new Pu(_this50),
      sdf: new P0(_this50)
    } : {
      canvas: new Pu(_this50)
    }, _this50.fontManager = new Dg(_this50.textRenderers);
    var b = new sc(_this50, {
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
    _this50.root = b, j0(_this50);
    return _this50;
  }
  _inherits(J0, _lr5);
  return _createClass(J0, [{
    key: "updateAnimations",
    value: function updateAnimations() {
      var e = this.animationManager;
      this.root && (this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = z0(), this.deltaTime = this.lastFrameTime ? this.currentFrameTime - this.lastFrameTime : 100 / 6, this.emit("frameTick", {
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
      F(e), this.root.updateType !== 0 && this.root.update(this.deltaTime, this.root.clippingRect), e.reset(), e.txMemManager.gcRequested && e.txMemManager.gc(), e.rttNodes.length > 0 && e.renderRTTNodes(), this.addQuads(this.root), e == null || e.render(), this.calculateFps(), n && (this.renderRequested = !1);
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
      F(this.renderer && e.globalTransform), e.isRenderable && e.renderQuads(this.renderer);
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
      return F(a, "resolvedTextRenderer undefined"), a;
    }
  }]);
}(lr);
var Z0 = /*#__PURE__*/function (_sc) {
  function Z0(e, n) {
    var _this51;
    _classCallCheck(this, Z0);
    _this51 = _callSuper(this, Z0, [e, n]);
    v(_this51, "textRenderer");
    v(_this51, "trState");
    v(_this51, "_textRendererOverride", null);
    v(_this51, "onTextLoaded", function () {
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
    v(_this51, "onTextFailed", function (e, n) {
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
  _inherits(Z0, _sc);
  return _createClass(Z0, [{
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width = e, this.textRenderer.set.width(this.trState, e), this.contain === "none" && this.setUpdateType(O.Local);
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height = e, this.textRenderer.set.height(this.trState, e), this.contain !== "both" && this.setUpdateType(O.Local);
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
      _superPropGet(Z0, "update", this, 3)([e, n]), F(this.globalTransform), this.textRenderer.set.x(this.trState, this.globalTransform.tx), this.textRenderer.set.y(this.trState, this.globalTransform.ty);
    }
  }, {
    key: "checkRenderProps",
    value: function checkRenderProps() {
      return this.trState.props.text !== "" ? !0 : _superPropGet(Z0, "checkRenderProps", this, 3)([]);
    }
  }, {
    key: "onChangeIsRenderable",
    value: function onChangeIsRenderable(e) {
      _superPropGet(Z0, "onChangeIsRenderable", this, 3)([e]), this.textRenderer.setIsRenderable(this.trState, e);
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e) {
      var n;
      F(this.globalTransform), !(this.parentHasRenderTexture && (!e.renderToTextureActive || this.parentRenderTexture !== e.activeRttNode)) && (this.parentHasRenderTexture && (n = this.props.parent) != null && n.rtt && (this.globalTransform = Ne.identity(), this.localTransform && this.globalTransform.multiply(this.localTransform)), F(this.globalTransform), this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _superPropGet(Z0, "destroy", this, 3)([]), this.textRenderer.destroyState(this.trState);
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
}(sc);
var e$ = /*#__PURE__*/function (_rl) {
  function e$(t, e, n) {
    _classCallCheck(this, e$);
    return _callSuper(this, e$, [t, e, n, new Z0(n, {
      id: lc(),
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
  _inherits(e$, _rl);
  return _createClass(e$, [{
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
}(rl);
var t$ = /*#__PURE__*/function () {
  function t$() {
    _classCallCheck(this, t$);
    v(this, "root", null);
    v(this, "stage", null);
    v(this, "rendererMain", null);
  }
  return _createClass(t$, [{
    key: "init",
    value: function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(t, e, n) {
        var _this53 = this;
        var o;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.stage = new J0({
                rootId: lc(),
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
              }), this.rendererMain = t, F(this.stage.root);
              o = new rl(t.resolveNodeDefaults({}), this.rendererMain, this.stage, this.stage.root);
              this.root = o;
              o.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, o));
              this.onCreateNode(o);
              _context10.t0 = e.coreExtensionModule;
              if (!_context10.t0) {
                _context10.next = 9;
                break;
              }
              _context10.next = 9;
              return F0(e.coreExtensionModule, this.stage);
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
      function init(_x8, _x9, _x10) {
        return _init2.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "createNode",
    value: function createNode(t) {
      F(this.rendererMain), F(this.stage);
      var e = new rl(t, this.rendererMain, this.stage);
      return e.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, e)), this.onCreateNode(e), e;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(t) {
      F(this.rendererMain), F(this.stage);
      var e = new e$(t, this.rendererMain, this.stage);
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
      F(e), e.txManager.removeTextureIdFromCache(t);
    }
  }, {
    key: "getRootNode",
    value: function getRootNode() {
      return F(this.root), this.root;
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
var xt, cc;
function r$() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
  var e = new t$();
  return xt = new B0(r, t, e), cc = xt.createShader.bind(xt), xt;
}
var n$ = /*#__PURE__*/function (_Array) {
  function n$(t) {
    var _this54;
    _classCallCheck(this, n$);
    _this54 = _callSuper(this, n$), _this54._parent = t;
    return _this54;
  }
  _inherits(n$, _Array);
  return _createClass(n$, [{
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
function o$() {
  return !0 && !1;
}
var i$ = o$() || !1,
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
function Fu(r) {
  return a$(r) && r.debug;
}
function rr(r, t) {
  var _console;
  for (var _len3 = arguments.length, e = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    e[_key3 - 2] = arguments[_key3];
  }
  i$ && (Me.debug || Fu(t) || Fu(e[0])) && (_console = console).log.apply(_console, [r, t].concat(e));
}
var Eo = function Eo(r) {
  return r instanceof Function;
};
function a$(r) {
  return _typeof(r) == "object";
}
function Si(r) {
  return Array.isArray(r);
}
function s$(r) {
  return typeof r == "string";
}
function l$(r) {
  return typeof r == "number";
}
function c$(r) {
  return Number.isInteger(r);
}
function u$(r, t) {
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
function zg(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (Si(r)) r.forEach(function (e) {
    zg(e, t);
  });else if (r) for (var e in r) t[e] === void 0 && r[e] && (t[e] = r[e]);
  return t;
}
var Bu = /*#__PURE__*/function (_Array2) {
  function Bu(t) {
    var _this55;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Bu);
    return _possibleConstructorReturn(_this55, (Si(e) ? _this55 = _callSuper(this, Bu, _toConsumableArray(e)) : s$(e) ? _this55 = _callSuper(this, Bu, [e]) : _this55 = _callSuper(this, Bu, _toConsumableArray(Object.entries(e).filter(function (_ref9) {
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
  _inherits(Bu, _Array2);
  return _createClass(Bu, [{
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
var kt = function (r) {
  return r[r.Element = 0] = "Element", r[r.TextNode = 1] = "TextNode", r[r.Text = 2] = "Text", r;
}(kt || {});
function f$(r) {
  var t = [];
  var e = !1;
  for (var y = 0; y < r.children.length; y++) {
    var m = r.children[y];
    if (m.type !== kt.Text && m.flexItem !== !1) {
      if (m.type === kt.TextNode && m.text && !(m.width || m.height)) return !1;
      m.flexOrder !== void 0 && (e = !0), t.push(m);
    }
  }
  e && t.sort(function (y, m) {
    return (y.flexOrder || 0) - (m.flexOrder || 0);
  });
  var n = t.length,
    i = (r.flexDirection || "row") === "row",
    a = i ? "width" : "height",
    s = i ? "height" : "width",
    l = i ? "marginLeft" : "marginTop",
    c = i ? "marginRight" : "marginBottom",
    u = i ? "x" : "y",
    f = i ? "y" : "x",
    d = r[a] || 0,
    g = r[s] || 0,
    p = r.gap || 0,
    x = r.justifyContent || "flexStart",
    b = r.alignItems;
  var S = 0;
  ["center", "spaceBetween", "spaceEvenly"].includes(x) && (S = t.reduce(function (y, m) {
    return y + (m[a] || 0);
  }, 0));
  var $ = g && b ? function (y) {
    b === "flexStart" ? y[f] = 0 : b === "center" ? y[f] = (g - (y[s] || 0)) / 2 : b === "flexEnd" && (y[f] = g - (y[s] || 0));
  } : function (y) {
    return y;
  };
  if (x === "flexStart") {
    var _y3 = 0;
    for (var _m2 = 0; _m2 < t.length; _m2++) {
      var w = t[_m2];
      w[u] = _y3 + (w[l] || 0), _y3 += (w[a] || 0) + p + (w[l] || 0) + (w[c] || 0), $(w);
    }
    if (r.flexBoundary !== "fixed") {
      var _m3 = _y3 - p;
      if (_m3 !== r[a]) return r[a] = _m3, !0;
    }
  } else if (x === "flexEnd") {
    var _y4 = d;
    for (var _m4 = n - 1; _m4 >= 0; _m4--) {
      var _w2 = t[_m4];
      F(_w2), _w2[u] = _y4 - (_w2[a] || 0) - (_w2[c] || 0), _y4 -= (_w2[a] || 0) + p + (_w2[l] || 0) + (_w2[c] || 0), $(_w2);
    }
  } else if (x === "center") {
    var _y5 = (d - (S + p * (n - 1))) / 2;
    for (var _m5 = 0; _m5 < t.length; _m5++) {
      var _w3 = t[_m5];
      _w3[u] = _y5, _y5 += (_w3[a] || 0) + p, $(_w3);
    }
  } else if (x === "spaceBetween") {
    var _y6 = (d - S) / (n - 1);
    var _m6 = 0;
    for (var _w4 = 0; _w4 < t.length; _w4++) {
      var R = t[_w4];
      R[u] = _m6, _m6 += (R[a] || 0) + _y6, $(R);
    }
  } else if (x === "spaceEvenly") {
    var _y7 = (d - S) / (n + 1);
    var _m7 = _y7;
    for (var _w5 = 0; _w5 < t.length; _w5++) {
      var _R2 = t[_w5];
      _R2[u] = _m7, _m7 += (_R2[a] || 0) + _y7, $(_R2);
    }
  }
  return !1;
}
var d$ = Me.animationSettings,
  Ro = new Set();
var Na = !0;
function ku(r) {
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
  return cc("DynamicShader", {
    effects: t
  });
}
function gn() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return {
    set: function set(t) {
      l$(t) && (t = {
        width: t,
        color: 255
      }), this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects || {}), {}, _defineProperty({}, "border".concat(r), t)) : _defineProperty({}, "border".concat(r), t);
    }
  };
}
var h$ = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"],
  v$ = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"];
var et = /*#__PURE__*/function (_Object) {
  function et(t) {
    var _this56;
    _classCallCheck(this, et);
    _this56 = _callSuper(this, et), _this56._animationQueue = [], _this56._animationRunning = !1, _this56.type = t === "text" ? kt.TextNode : kt.Element, _this56.rendered = !1, _this56.lng = {}, _this56.children = new n$(_assertThisInitialized(_this56));
    return _this56;
  }
  _inherits(et, _Object);
  return _createClass(et, [{
    key: "effects",
    get: function get() {
      return this._effects;
    },
    set: function set(t) {
      this._effects = t, this.rendered && (this.shader = ku(t));
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
      Si(t) && (t = cc.apply(void 0, _toConsumableArray(t))), this.lng.shader = t;
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
      return F(this.rendered, "Node must be rendered before animating"), this.lng.animate(t, e || this.animationSettings);
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
        if (this.forwardFocus !== void 0) if (Eo(this.forwardFocus)) {
          if (this.forwardFocus.call(this, this) !== !1) return;
        } else {
          var t = typeof this.forwardFocus == "number" ? this.forwardFocus : null;
          if (t !== null && t < this.children.length) {
            var e = this.children[t];
            e instanceof et && e.setFocus();
            return;
          }
        }
        queueMicrotask(function () {
          return i0(_this57);
        });
      } else this.autofocus = !0;
    }
  }, {
    key: "isTextNode",
    value: function isTextNode() {
      return this.type === kt.TextNode;
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
      Si(t) ? this._style = zg(t) : this._style = t;
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
        if (n instanceof et) {
          if (n.id === t) return n;
          var o = n.searchChildrenById(t);
          if (o) return o;
        }
      }
    }
  }, {
    key: "states",
    get: function get() {
      return this._states = this._states || new Bu(this._stateChanged.bind(this)), this._states;
    },
    set: function set(t) {
      this._states = new Bu(this._stateChanged.bind(this), t), this.rendered && this._stateChanged();
    }
  }, {
    key: "animationSettings",
    get: function get() {
      return this._animationSettings || d$;
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
        rr("Layout: ", this);
        var i = !1;
        Eo(this.onBeforeLayout) && (i = this.onBeforeLayout.call(this, this, t, e) || !1), this.display === "flex" ? (f$(this) || i) && ((n = this.parent) == null || n.updateLayout()) : i && ((o = this.parent) == null || o.updateLayout()), Eo(this.onLayout) && this.onLayout.call(this, this, t, e);
      }
    }
  }, {
    key: "_stateChanged",
    value: function _stateChanged() {
      var _this59 = this;
      if (rr("State Changed: ", this, this.states), this.forwardStates) {
        var e = this.states.slice();
        this.children.forEach(function (n) {
          return n.states = e;
        });
      }
      var t = this.states;
      if (this._undoStyles || this.style && u$(this.style, t)) {
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
      e.requiresLayout() && !Ro.has(e) && (Ro.add(e), Na && (Na = !1, queueMicrotask(function () {
        Na = !0;
        var i = _toConsumableArray(Ro);
        Ro.clear();
        for (var a = i.length - 1; a >= 0; a--) i[a].updateLayout();
      }))), this.states.length && this._stateChanged();
      var n = t.lng;
      if (n.x = n.x || 0, n.y = n.y || 0, e.rendered && (n.parent = e.lng), t._effects && (n.shader = ku(t._effects)), t.isTextNode()) {
        if (Me.fontSettings) for (var i in Me.fontSettings) n[i] === void 0 && (n[i] = Me.fontSettings[i]);
        n.text = t.getText(), n.textAlign && !n.contain && console.warn("Text align requires contain: ", t.getText()), n.contain && (n.width || (n.width = (e.width || 0) - n.x - (n.marginRight || 0)), n.contain === "both" && !n.height && !n.maxLines ? n.height = (e.height || 0) - n.y - (n.marginBottom || 0) : n.maxLines === 1 && (n.height = n.height || n.lineHeight || n.fontSize)), rr("Rendering: ", this, n), t.lng = xt.createTextNode(n), e.requiresLayout() && (!n.width || !n.height) && t._layoutOnLoad();
      } else n.texture || (isNaN(n.width) && (n.width = (e.width || 0) - n.x), isNaN(n.height) && (n.height = (e.height || 0) - n.y), n.rtt && !n.color && (n.color = 4294967295), !n.color && !n.src && (n.color = 0)), rr("Rendering: ", this, n), t.lng = xt.createNode(n);
      if (t.rendered = !0, t.autosize && e.requiresLayout() && t._layoutOnLoad(), t.onFail && t.lng.on("failed", t.onFail), t.onLoad && t.lng.on("loaded", t.onLoad), Eo(this.onCreate) && this.onCreate.call(this, t), t.onEvents && t.onEvents.forEach(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
          i = _ref15[0],
          a = _ref15[1];
        t.lng.on(i, function (s, l) {
          return a(t, l);
        });
      }), (o = t.lng) != null && o.div && (t.lng.div.element = t), t.type === kt.Element) for (var _i8 = 0; _i8 < t.children.length; _i8++) {
        var a = t.children[_i8];
        F(a, "Child is undefined"), "render" in a ? a.render() : a.text && console.warn("TextNode outside of <Text>: ", a);
      }
      t.autofocus && t.setFocus();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Object));
var _loop2 = function _loop2() {
  var r = _h$[_i9];
  Object.defineProperty(et.prototype, r, {
    get: function get() {
      return this.lng[r];
    },
    set: function set(t) {
      this._sendToLightningAnimatable(r, t);
    }
  });
};
for (var _i9 = 0, _h$ = h$; _i9 < _h$.length; _i9++) {
  _loop2();
}
var _loop3 = function _loop3() {
  var r = _v$[_i10];
  Object.defineProperty(et.prototype, r, {
    get: function get() {
      return this.lng[r];
    },
    set: function set(t) {
      this.lng[r] = t;
    }
  });
};
for (var _i10 = 0, _v$ = v$; _i10 < _v$.length; _i10++) {
  _loop3();
}
Object.defineProperties(et.prototype, {
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
  border: gn(),
  borderLeft: gn("Left"),
  borderRight: gn("Right"),
  borderTop: gn("Top"),
  borderBottom: gn("Bottom")
});
Object.defineProperties(et.prototype, {
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
      var t = Ki("text");
      return fc(t, r, !1), t;
    }();
  },
  H = function H(r) {
    return function () {
      var t = Ki("node");
      return fc(t, r, !1), t;
    }();
  };
function g$(_ref16) {
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
  function u($, y, m, w) {
    if (m !== void 0 && !w && (w = []), typeof y != "function") return f($, y, w, m);
    lt(function (R) {
      return f($, y(), R, m);
    }, w);
  }
  function f($, y, m, w, R) {
    for (; typeof m == "function";) m = m();
    if (y === m) return m;
    var I = _typeof(y),
      C = w !== void 0;
    if (I === "string" || I === "number") {
      if (I === "number" && (y = y.toString()), C) {
        var A = m[0];
        A && e(A) ? n(A, y) : A = t(y), m = p($, m, w, A);
      } else m !== "" && typeof m == "string" ? n(l($), m = y) : (p($, m, w, t(y)), m = y);
    } else if (y == null || I === "boolean") m = p($, m, w);else {
      if (I === "function") return lt(function () {
        var A = y();
        for (; typeof A == "function";) A = A();
        m = f($, A, m, w);
      }), function () {
        return m;
      };
      if (Array.isArray(y)) {
        var _A8 = [];
        if (d(_A8, y, R)) return lt(function () {
          return m = f($, _A8, m, w, !0);
        }), function () {
          return m;
        };
        if (_A8.length === 0) {
          var P = p($, m, w);
          if (C) return m = P;
        } else Array.isArray(m) ? m.length === 0 ? x($, _A8, w) : g($, m, _A8) : m == null || m === "" ? x($, _A8) : g($, C && m || [l($)], _A8);
        m = _A8;
      } else {
        if (Array.isArray(m)) {
          if (C) return m = p($, m, w, y);
          p($, m, null, y);
        } else m == null || m === "" || !l($) ? o($, y) : b($, y, l($));
        m = y;
      }
    }
    return m;
  }
  function d($, y, m) {
    var w = !1;
    for (var R = 0, I = y.length; R < I; R++) {
      var C = y[R],
        A = void 0;
      if (!(C == null || C === !0 || C === !1)) if (Array.isArray(C)) w = d($, C) || w;else if ((A = _typeof(C)) == "string" || A === "number") $.push(t(C));else if (A === "function") {
        if (m) {
          for (; typeof C == "function";) C = C();
          w = d($, Array.isArray(C) ? C : [C]) || w;
        } else $.push(C), w = !0;
      } else $.push(C);
    }
    return w;
  }
  function g($, y, m) {
    var w = m.length,
      R = y.length,
      I = w,
      C = 0,
      A = 0,
      P = c(y[R - 1]),
      N = null;
    for (; C < R || A < I;) {
      if (y[C] === m[A]) {
        C++, A++;
        continue;
      }
      for (; y[R - 1] === m[I - 1];) R--, I--;
      if (R === C) {
        var _ = I < w ? A ? c(m[A - 1]) : m[I - A] : P;
        for (; A < I;) o($, m[A++], _);
      } else if (I === A) for (; C < R;) (!N || !N.has(y[C])) && i($, y[C]), C++;else if (y[C] === m[I - 1] && m[A] === y[R - 1]) {
        var _7 = c(y[--R]);
        o($, m[A++], c(y[C++])), o($, m[--I], _7), y[R] = m[I];
      } else {
        if (!N) {
          N = new Map();
          var L = A;
          for (; L < I;) N.set(m[L], L++);
        }
        var _9 = N.get(y[C]);
        if (_9 != null) {
          if (A < _9 && _9 < I) {
            var _L2 = C,
              D = 1,
              M = void 0;
            for (; ++_L2 < R && _L2 < I && !((M = N.get(y[_L2])) == null || M !== _9 + D);) D++;
            if (D > _9 - A) {
              var z = y[C];
              for (; A < _9;) o($, m[A++], z);
            } else b($, m[A++], y[C++]);
          } else C++;
        } else i($, y[C++]);
      }
    }
  }
  function p($, y, m, w) {
    if (m === void 0) {
      var I;
      for (; I = l($);) i($, I);
      return w && o($, w), "";
    }
    var R = w || t("");
    if (y.length) {
      var _I2 = !1;
      for (var C = y.length - 1; C >= 0; C--) {
        var A = y[C];
        if (R !== A) {
          var P = s(A) === $;
          !_I2 && !C ? P ? b($, R, A) : o($, R, m) : P && i($, A);
        } else _I2 = !0;
      }
    } else o($, R, m);
    return [R];
  }
  function x($, y, m) {
    for (var w = 0, R = y.length; w < R; w++) o($, y[w], m);
  }
  function b($, y, m) {
    o($, y, m), i($, m);
  }
  function S($, y) {
    var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var w = arguments.length > 3 ? arguments[3] : undefined;
    return y || (y = {}), w || lt(function () {
      return m.children = f($, y.children, m.children);
    }), lt(function () {
      return y.ref && y.ref($);
    }), lt(function () {
      for (var R in y) {
        if (R === "children" || R === "ref") continue;
        var I = y[R];
        I !== m[R] && (a($, R, I, m[R]), m[R] = I);
      }
    }), m;
  }
  return {
    render: function render($, y) {
      var m;
      return Dt(function (w) {
        m = w, u(y, $());
      }), m;
    },
    insert: u,
    spread: function spread($, y, m) {
      typeof y == "function" ? lt(function (w) {
        return S($, y(), w, m);
      }) : S($, y, void 0, m);
    },
    createElement: r,
    createTextNode: t,
    insertNode: o,
    setProp: function setProp($, y, m, w) {
      return a($, y, m, w), m;
    },
    mergeProps: oc,
    effect: lt,
    memo: ie,
    createComponent: Og,
    use: function use($, y, m) {
      return pe(function () {
        return $(y, m);
      });
    }
  };
}
function p$(r) {
  var t = g$(r);
  return t.mergeProps = oc, t;
}
var Ug = {
    createElement: function createElement(r) {
      return new et(r);
    },
    createTextNode: function createTextNode(r) {
      return {
        type: kt.Text,
        text: r,
        parent: void 0
      };
    },
    replaceText: function replaceText(r, t) {
      rr("Replace Text: ", r, t), r.text = t;
      var e = r.parent;
      F(e), e.text = e.getText();
    },
    setProperty: function setProperty(r, t) {
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      r[t] = e;
    },
    insertNode: function insertNode(r, t, e) {
      rr("INSERT: ", r, t, e), r.children.insert(t, e), t._queueDelete = !1, t instanceof et ? r.rendered && t.render() : r.isTextNode() && (r.text = r.getText());
    },
    isTextNode: function isTextNode(r) {
      return r.isTextNode();
    },
    removeNode: function removeNode(r, t) {
      rr("REMOVE: ", r, t), r.children.remove(t), t._queueDelete = !0, t instanceof et && queueMicrotask(function () {
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
  Wg = p$(Ug);
var wi;
function m$(_x11, _x12) {
  return _m$.apply(this, arguments);
}
function _m$() {
  _m$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(r, t) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          wi = r$(r || Me.rendererOptions, t || "app");
          _context16.next = 3;
          return wi.init();
        case 3:
          return _context16.abrupt("return", _context16.sent);
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _m$.apply(this, arguments);
}
var y$ = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(r, t) {
      var e;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            e = Ug.createElement("App");
            _context12.next = 3;
            return m$(void 0, t);
          case 3:
            e.lng = wi.root;
            e.rendered = !0;
            return _context12.abrupt("return", {
              dispose: Wg.render(r, e),
              rootNode: e,
              renderer: wi
            });
          case 6:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function y$(_x13, _x14) {
      return _ref13.apply(this, arguments);
    };
  }(),
  qY = Wg.effect,
  uc = Wg.memo,
  E = Wg.createComponent,
  Ki = Wg.createElement,
  JY = Wg.createTextNode,
  ZY = Wg.insertNode,
  x$ = Wg.insert,
  fc = Wg.spread,
  $$ = Wg.setProp,
  je = Wg.mergeProps,
  b$ = Wg.use;
function ge() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return c$(r) ? r : typeof r == "string" ? r.startsWith("#") ? +(r.replace("#", "0x") + (r.length === 7 ? "ff" : "")) : r.startsWith("0x") ? Number(r) : +("0x" + (r.length === 6 ? r + "ff" : r)) : 0;
}
var Oo = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : {},
  B = function B(r) {
    try {
      return !!r();
    } catch (t) {
      return !0;
    }
  },
  S$ = B,
  Yn = !S$(function () {
    var r = function () {}.bind();
    return typeof r != "function" || r.hasOwnProperty("prototype");
  }),
  Hg = Yn,
  Yg = Function.prototype,
  ol = Yg.call,
  w$ = Hg && Yg.bind.bind(ol, ol),
  k = Hg ? w$ : function (r) {
    return function () {
      return ol.apply(r, arguments);
    };
  },
  Kg = k,
  T$ = Kg({}.toString),
  A$ = Kg("".slice),
  ze = function ze(r) {
    return A$(T$(r), 8, -1);
  },
  I$ = k,
  C$ = B,
  E$ = ze,
  Fa = Object,
  R$ = I$("".split),
  tn = C$(function () {
    return !Fa("z").propertyIsEnumerable(0);
  }) ? function (r) {
    return E$(r) === "String" ? R$(r, "") : Fa(r);
  } : Fa,
  qe = function qe(r) {
    return r == null;
  },
  O$ = qe,
  _$ = TypeError,
  re = function re(r) {
    if (O$(r)) throw new _$("Can't call method on " + r);
    return r;
  },
  P$ = tn,
  N$ = re,
  Se = function Se(r) {
    return P$(N$(r));
  },
  pn = function pn(r) {
    return r && r.Math === Math && r;
  },
  U = pn((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || pn((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || pn((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || pn(_typeof(Oo) == "object" && Oo) || pn(_typeof(Oo) == "object" && Oo) || function () {
    return this;
  }() || Function("return this")(),
  Gg = {
    exports: {}
  },
  Vg = !1,
  Lu = U,
  F$ = Object.defineProperty,
  dc = function dc(r, t) {
    try {
      F$(Lu, r, {
        value: t,
        configurable: !0,
        writable: !0
      });
    } catch (e) {
      Lu[r] = t;
    }
    return t;
  },
  B$ = U,
  k$ = dc,
  Mu = "__core-js_shared__",
  Du = Gg.exports = B$[Mu] || k$(Mu, {});
(Du.versions || (Du.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var hc = Gg.exports,
  ju = hc,
  rn = function rn(r, t) {
    return ju[r] || (ju[r] = t || {});
  },
  L$ = re,
  M$ = Object,
  ee = function ee(r) {
    return M$(L$(r));
  },
  D$ = k,
  j$ = ee,
  z$ = D$({}.hasOwnProperty),
  de = Object.hasOwn || function (t, e) {
    return z$(j$(t), e);
  },
  U$ = k,
  W$ = 0,
  H$ = Math.random(),
  Y$ = U$(1 .toString),
  Gi = function Gi(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + Y$(++W$ + H$, 36);
  },
  K$ = U,
  zu = K$.navigator,
  Uu = zu && zu.userAgent,
  St = Uu ? String(Uu) : "",
  Xg = U,
  Ba = St,
  Wu = Xg.process,
  Hu = Xg.Deno,
  Yu = Wu && Wu.versions || Hu && Hu.version,
  Ku = Yu && Yu.v8,
  Ze,
  Ti;
Ku && (Ze = Ku.split("."), Ti = Ze[0] > 0 && Ze[0] < 4 ? 1 : +(Ze[0] + Ze[1]));
!Ti && Ba && (Ze = Ba.match(/Edge\/(\d+)/), (!Ze || Ze[1] >= 74) && (Ze = Ba.match(/Chrome\/(\d+)/), Ze && (Ti = +Ze[1])));
var ur = Ti,
  Gu = ur,
  G$ = B,
  V$ = U,
  X$ = V$.String,
  nn = !!Object.getOwnPropertySymbols && !G$(function () {
    var r = Symbol("symbol detection");
    return !X$(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && Gu && Gu < 41;
  }),
  Q$ = nn,
  Qg = Q$ && !Symbol.sham && _typeof(Symbol.iterator) == "symbol",
  q$ = U,
  J$ = rn,
  Vu = de,
  Z$ = Gi,
  eb = nn,
  tb = Qg,
  Dr = q$.Symbol,
  ka = J$("wks"),
  rb = tb ? Dr["for"] || Dr : Dr && Dr.withoutSetter || Z$,
  q = function q(r) {
    return Vu(ka, r) || (ka[r] = eb && Vu(Dr, r) ? Dr[r] : rb("Symbol." + r)), ka[r];
  },
  La = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all,
  X = _typeof(La) > "u" && La !== void 0 ? function (r) {
    return typeof r == "function" || r === La;
  } : function (r) {
    return typeof r == "function";
  },
  nb = X,
  J = function J(r) {
    return _typeof(r) == "object" ? r !== null : nb(r);
  },
  ob = J,
  ib = String,
  ab = TypeError,
  me = function me(r) {
    if (ob(r)) return r;
    throw new ab(ib(r) + " is not an object");
  },
  Vi = {},
  sb = B,
  Y = !sb(function () {
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  }),
  lb = Y,
  cb = B,
  qg = lb && cb(function () {
    return Object.defineProperty(function () {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }),
  we = {},
  ub = U,
  Xu = J,
  il = ub.document,
  fb = Xu(il) && Xu(il.createElement),
  vc = function vc(r) {
    return fb ? il.createElement(r) : {};
  },
  db = Y,
  hb = B,
  vb = vc,
  Jg = !db && !hb(function () {
    return Object.defineProperty(vb("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  }),
  gb = Yn,
  _o = Function.prototype.call,
  K = gb ? _o.bind(_o) : function () {
    return _o.apply(_o, arguments);
  },
  Ma = U,
  pb = X,
  mb = function mb(r) {
    return pb(r) ? r : void 0;
  },
  Pe = function Pe(r, t) {
    return arguments.length < 2 ? mb(Ma[r]) : Ma[r] && Ma[r][t];
  },
  yb = k,
  wt = yb({}.isPrototypeOf),
  xb = Pe,
  $b = X,
  bb = wt,
  Sb = Qg,
  wb = Object,
  Kn = Sb ? function (r) {
    return _typeof(r) == "symbol";
  } : function (r) {
    var t = xb("Symbol");
    return $b(t) && bb(t.prototype, wb(r));
  },
  Tb = String,
  on = function on(r) {
    try {
      return Tb(r);
    } catch (t) {
      return "Object";
    }
  },
  Ab = X,
  Ib = on,
  Cb = TypeError,
  he = function he(r) {
    if (Ab(r)) return r;
    throw new Cb(Ib(r) + " is not a function");
  },
  Eb = he,
  Rb = qe,
  Tt = function Tt(r, t) {
    var e = r[t];
    return Rb(e) ? void 0 : Eb(e);
  },
  Da = K,
  ja = X,
  za = J,
  Ob = TypeError,
  _b = function _b(r, t) {
    var e, n;
    if (t === "string" && ja(e = r.toString) && !za(n = Da(e, r)) || ja(e = r.valueOf) && !za(n = Da(e, r)) || t !== "string" && ja(e = r.toString) && !za(n = Da(e, r))) return n;
    throw new Ob("Can't convert object to primitive value");
  },
  Pb = K,
  Qu = J,
  qu = Kn,
  Nb = Tt,
  Fb = _b,
  Bb = q,
  kb = TypeError,
  Lb = Bb("toPrimitive"),
  Zg = function Zg(r, t) {
    if (!Qu(r) || qu(r)) return r;
    var e = Nb(r, Lb),
      n;
    if (e) {
      if (t === void 0 && (t = "default"), n = Pb(e, r, t), !Qu(n) || qu(n)) return n;
      throw new kb("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), Fb(r, t);
  },
  Mb = Zg,
  Db = Kn,
  an = function an(r) {
    var t = Mb(r, "string");
    return Db(t) ? t : t + "";
  },
  jb = Y,
  zb = Jg,
  Ub = qg,
  Po = me,
  Ju = an,
  Wb = TypeError,
  Ua = Object.defineProperty,
  Hb = Object.getOwnPropertyDescriptor,
  Wa = "enumerable",
  Ha = "configurable",
  Ya = "writable";
we.f = jb ? Ub ? function (t, e, n) {
  if (Po(t), e = Ju(e), Po(n), typeof t == "function" && e === "prototype" && "value" in n && Ya in n && !n[Ya]) {
    var o = Hb(t, e);
    o && o[Ya] && (t[e] = n.value, n = {
      configurable: Ha in n ? n[Ha] : o[Ha],
      enumerable: Wa in n ? n[Wa] : o[Wa],
      writable: !1
    });
  }
  return Ua(t, e, n);
} : Ua : function (t, e, n) {
  if (Po(t), e = Ju(e), Po(n), zb) try {
    return Ua(t, e, n);
  } catch (o) {}
  if ("get" in n || "set" in n) throw new Wb("Accessors not supported");
  return "value" in n && (t[e] = n.value), t;
};
var Yb = Math.ceil,
  Kb = Math.floor,
  Gb = Math.trunc || function (t) {
    var e = +t;
    return (e > 0 ? Kb : Yb)(e);
  },
  Vb = Gb,
  Ee = function Ee(r) {
    var t = +r;
    return t !== t || t === 0 ? 0 : Vb(t);
  },
  Xb = Ee,
  Qb = Math.max,
  qb = Math.min,
  fr = function fr(r, t) {
    var e = Xb(r);
    return e < 0 ? Qb(e + t, 0) : qb(e, t);
  },
  Jb = Ee,
  Zb = Math.min,
  Ut = function Ut(r) {
    var t = Jb(r);
    return t > 0 ? Zb(t, 9007199254740991) : 0;
  },
  eS = Ut,
  ne = function ne(r) {
    return eS(r.length);
  },
  tS = Se,
  rS = fr,
  nS = ne,
  Zu = function Zu(r) {
    return function (t, e, n) {
      var o = tS(t),
        i = nS(o);
      if (i === 0) return !r && -1;
      var a = rS(n, i),
        s;
      if (r && e !== e) {
        for (; i > a;) if (s = o[a++], s !== s) return !0;
      } else for (; i > a; a++) if ((r || a in o) && o[a] === e) return r || a || 0;
      return !r && -1;
    };
  },
  gc = {
    includes: Zu(!0),
    indexOf: Zu(!1)
  },
  Gn = {},
  oS = k,
  Ka = de,
  iS = Se,
  aS = gc.indexOf,
  sS = Gn,
  ef = oS([].push),
  ep = function ep(r, t) {
    var e = iS(r),
      n = 0,
      o = [],
      i;
    for (i in e) !Ka(sS, i) && Ka(e, i) && ef(o, i);
    for (; t.length > n;) Ka(e, i = t[n++]) && (~aS(o, i) || ef(o, i));
    return o;
  },
  pc = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  lS = ep,
  cS = pc,
  Vn = Object.keys || function (t) {
    return lS(t, cS);
  },
  uS = Y,
  fS = qg,
  dS = we,
  hS = me,
  vS = Se,
  gS = Vn;
Vi.f = uS && !fS ? Object.defineProperties : function (t, e) {
  hS(t);
  for (var n = vS(e), o = gS(e), i = o.length, a = 0, s; i > a;) dS.f(t, s = o[a++], n[s]);
  return t;
};
var pS = Pe,
  tp = pS("document", "documentElement"),
  mS = rn,
  yS = Gi,
  tf = mS("keys"),
  Xi = function Xi(r) {
    return tf[r] || (tf[r] = yS(r));
  },
  xS = me,
  $S = Vi,
  rf = pc,
  bS = Gn,
  SS = tp,
  wS = vc,
  TS = Xi,
  nf = ">",
  of = "<",
  al = "prototype",
  sl = "script",
  rp = TS("IE_PROTO"),
  Ga = function Ga() {},
  np = function np(r) {
    return of + sl + nf + r + of + "/" + sl + nf;
  },
  af = function af(r) {
    r.write(np("")), r.close();
    var t = r.parentWindow.Object;
    return r = null, t;
  },
  AS = function AS() {
    var r = wS("iframe"),
      t = "java" + sl + ":",
      e;
    return r.style.display = "none", SS.appendChild(r), r.src = String(t), e = r.contentWindow.document, e.open(), e.write(np("document.F=Object")), e.close(), e.F;
  },
  No,
  _li = function li() {
    try {
      No = new ActiveXObject("htmlfile");
    } catch (t) {}
    _li = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && No ? af(No) : AS() : af(No);
    for (var r = rf.length; r--;) delete _li[al][rf[r]];
    return _li();
  };
bS[rp] = !0;
var dr = Object.create || function (t, e) {
    var n;
    return t !== null ? (Ga[al] = xS(t), n = new Ga(), Ga[al] = null, n[rp] = t) : n = _li(), e === void 0 ? n : $S.f(n, e);
  },
  IS = q,
  CS = dr,
  ES = we.f,
  ll = IS("unscopables"),
  cl = Array.prototype;
cl[ll] === void 0 && ES(cl, ll, {
  configurable: !0,
  value: CS(null)
});
var ke = function ke(r) {
    cl[ll][r] = !0;
  },
  Xn = {},
  RS = U,
  OS = X,
  sf = RS.WeakMap,
  _S = OS(sf) && /native code/.test(String(sf)),
  hr = function hr(r, t) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: t
    };
  },
  PS = Y,
  NS = we,
  FS = hr,
  vr = PS ? function (r, t, e) {
    return NS.f(r, t, FS(1, e));
  } : function (r, t, e) {
    return r[t] = e, r;
  },
  BS = _S,
  op = U,
  kS = J,
  LS = vr,
  Va = de,
  Xa = hc,
  MS = Xi,
  DS = Gn,
  lf = "Object already initialized",
  ul = op.TypeError,
  jS = op.WeakMap,
  Ai,
  jn,
  Ii,
  zS = function zS(r) {
    return Ii(r) ? jn(r) : Ai(r, {});
  },
  US = function US(r) {
    return function (t) {
      var e;
      if (!kS(t) || (e = jn(t)).type !== r) throw new ul("Incompatible receiver, " + r + " required");
      return e;
    };
  };
if (BS || Xa.state) {
  var it = Xa.state || (Xa.state = new jS());
  it.get = it.get, it.has = it.has, it.set = it.set, Ai = function Ai(r, t) {
    if (it.has(r)) throw new ul(lf);
    return t.facade = r, it.set(r, t), t;
  }, jn = function jn(r) {
    return it.get(r) || {};
  }, Ii = function Ii(r) {
    return it.has(r);
  };
} else {
  var br = MS("state");
  DS[br] = !0, Ai = function Ai(r, t) {
    if (Va(r, br)) throw new ul(lf);
    return t.facade = r, LS(r, br, t), t;
  }, jn = function jn(r) {
    return Va(r, br) ? r[br] : {};
  }, Ii = function Ii(r) {
    return Va(r, br);
  };
}
var Wt = {
    set: Ai,
    get: jn,
    has: Ii,
    enforce: zS,
    getterFor: US
  },
  rt = {},
  Qn = {},
  ip = {}.propertyIsEnumerable,
  ap = Object.getOwnPropertyDescriptor,
  WS = ap && !ip.call({
    1: 2
  }, 1);
Qn.f = WS ? function (t) {
  var e = ap(this, t);
  return !!e && e.enumerable;
} : ip;
var HS = Y,
  YS = K,
  KS = Qn,
  GS = hr,
  VS = Se,
  XS = an,
  QS = de,
  qS = Jg,
  cf = Object.getOwnPropertyDescriptor;
rt.f = HS ? cf : function (t, e) {
  if (t = VS(t), e = XS(e), qS) try {
    return cf(t, e);
  } catch (n) {}
  if (QS(t, e)) return GS(!YS(KS.f, t, e), t[e]);
};
var sp = {
    exports: {}
  },
  fl = Y,
  JS = de,
  lp = Function.prototype,
  ZS = fl && Object.getOwnPropertyDescriptor,
  mc = JS(lp, "name"),
  ew = mc && function () {}.name === "something",
  tw = mc && (!fl || fl && ZS(lp, "name").configurable),
  Qi = {
    EXISTS: mc,
    PROPER: ew,
    CONFIGURABLE: tw
  },
  rw = k,
  nw = X,
  dl = hc,
  ow = rw(Function.toString);
nw(dl.inspectSource) || (dl.inspectSource = function (r) {
  return ow(r);
});
var yc = dl.inspectSource,
  xc = k,
  iw = B,
  aw = X,
  Fo = de,
  hl = Y,
  sw = Qi.CONFIGURABLE,
  lw = yc,
  cp = Wt,
  cw = cp.enforce,
  uw = cp.get,
  uf = String,
  ci = Object.defineProperty,
  fw = xc("".slice),
  dw = xc("".replace),
  hw = xc([].join),
  vw = hl && !iw(function () {
    return ci(function () {}, "length", {
      value: 8
    }).length !== 8;
  }),
  gw = String(String).split("String"),
  pw = sp.exports = function (r, t, e) {
    fw(uf(t), 0, 7) === "Symbol(" && (t = "[" + dw(uf(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!Fo(r, "name") || sw && r.name !== t) && (hl ? ci(r, "name", {
      value: t,
      configurable: !0
    }) : r.name = t), vw && e && Fo(e, "arity") && r.length !== e.arity && ci(r, "length", {
      value: e.arity
    });
    try {
      e && Fo(e, "constructor") && e.constructor ? hl && ci(r, "prototype", {
        writable: !1
      }) : r.prototype && (r.prototype = void 0);
    } catch (o) {}
    var n = cw(r);
    return Fo(n, "source") || (n.source = hw(gw, typeof t == "string" ? t : "")), r;
  };
Function.prototype.toString = pw(function () {
  return aw(this) && uw(this).source || lw(this);
}, "toString");
var $c = sp.exports,
  mw = X,
  yw = we,
  xw = $c,
  $w = dc,
  Ue = function Ue(r, t, e, n) {
    n || (n = {});
    var o = n.enumerable,
      i = n.name !== void 0 ? n.name : t;
    if (mw(e) && xw(e, i, n), n.global) o ? r[t] = e : $w(t, e);else {
      try {
        n.unsafe ? r[t] && (o = !0) : delete r[t];
      } catch (a) {}
      o ? r[t] = e : yw.f(r, t, {
        value: e,
        enumerable: !1,
        configurable: !n.nonConfigurable,
        writable: !n.nonWritable
      });
    }
    return r;
  },
  sn = {},
  bw = ep,
  Sw = pc,
  ww = Sw.concat("length", "prototype");
sn.f = Object.getOwnPropertyNames || function (t) {
  return bw(t, ww);
};
var qn = {};
qn.f = Object.getOwnPropertySymbols;
var Tw = Pe,
  Aw = k,
  Iw = sn,
  Cw = qn,
  Ew = me,
  Rw = Aw([].concat),
  up = Tw("Reflect", "ownKeys") || function (t) {
    var e = Iw.f(Ew(t)),
      n = Cw.f;
    return n ? Rw(e, n(t)) : e;
  },
  ff = de,
  Ow = up,
  _w = rt,
  Pw = we,
  bc = function bc(r, t, e) {
    for (var n = Ow(t), o = Pw.f, i = _w.f, a = 0; a < n.length; a++) {
      var s = n[a];
      !ff(r, s) && !(e && ff(e, s)) && o(r, s, i(t, s));
    }
  },
  Nw = B,
  Fw = X,
  Bw = /#|\.prototype\./,
  Jn = function Jn(r, t) {
    var e = Lw[kw(r)];
    return e === Dw ? !0 : e === Mw ? !1 : Fw(t) ? Nw(t) : !!t;
  },
  kw = Jn.normalize = function (r) {
    return String(r).replace(Bw, ".").toLowerCase();
  },
  Lw = Jn.data = {},
  Mw = Jn.NATIVE = "N",
  Dw = Jn.POLYFILL = "P",
  qi = Jn,
  Bo = U,
  jw = rt.f,
  zw = vr,
  Uw = Ue,
  Ww = dc,
  Hw = bc,
  Yw = qi,
  T = function T(r, t) {
    var e = r.target,
      n = r.global,
      o = r.stat,
      i,
      a,
      s,
      l,
      c,
      u;
    if (n ? a = Bo : o ? a = Bo[e] || Ww(e, {}) : a = Bo[e] && Bo[e].prototype, a) for (s in t) {
      if (c = t[s], r.dontCallGetSet ? (u = jw(a, s), l = u && u.value) : l = a[s], i = Yw(n ? s : e + (o ? "." : "#") + s, r.forced), !i && l !== void 0) {
        if (_typeof(c) == _typeof(l)) continue;
        Hw(c, l);
      }
      (r.sham || l && l.sham) && zw(c, "sham", !0), Uw(a, s, c, r);
    }
  },
  Kw = B,
  fp = !Kw(function () {
    function r() {}
    return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
  }),
  Gw = de,
  Vw = X,
  Xw = ee,
  Qw = Xi,
  qw = fp,
  df = Qw("IE_PROTO"),
  vl = Object,
  Jw = vl.prototype,
  gr = qw ? vl.getPrototypeOf : function (r) {
    var t = Xw(r);
    if (Gw(t, df)) return t[df];
    var e = t.constructor;
    return Vw(e) && t instanceof e ? e.prototype : t instanceof vl ? Jw : null;
  },
  Zw = B,
  eT = X,
  tT = J,
  hf = gr,
  rT = Ue,
  nT = q,
  gl = nT("iterator"),
  dp = !1,
  sr,
  Qa,
  qa;
[].keys && (qa = [].keys(), "next" in qa ? (Qa = hf(hf(qa)), Qa !== Object.prototype && (sr = Qa)) : dp = !0);
var oT = !tT(sr) || Zw(function () {
  var r = {};
  return sr[gl].call(r) !== r;
});
oT && (sr = {});
eT(sr[gl]) || rT(sr, gl, function () {
  return this;
});
var hp = {
    IteratorPrototype: sr,
    BUGGY_SAFARI_ITERATORS: dp
  },
  iT = we.f,
  aT = de,
  sT = q,
  vf = sT("toStringTag"),
  At = function At(r, t, e) {
    r && !e && (r = r.prototype), r && !aT(r, vf) && iT(r, vf, {
      configurable: !0,
      value: t
    });
  },
  lT = hp.IteratorPrototype,
  cT = dr,
  uT = hr,
  fT = At,
  dT = Xn,
  hT = function hT() {
    return this;
  },
  vp = function vp(r, t, e, n) {
    var o = t + " Iterator";
    return r.prototype = cT(lT, {
      next: uT(+!n, e)
    }), fT(r, o, !1), dT[o] = hT, r;
  },
  vT = k,
  gT = he,
  gp = function gp(r, t, e) {
    try {
      return vT(gT(Object.getOwnPropertyDescriptor(r, t)[e]));
    } catch (n) {}
  },
  pT = J,
  pp = function pp(r) {
    return pT(r) || r === null;
  },
  mT = pp,
  yT = String,
  xT = TypeError,
  $T = function $T(r) {
    if (mT(r)) return r;
    throw new xT("Can't set " + yT(r) + " as a prototype");
  },
  bT = gp,
  ST = J,
  wT = re,
  TT = $T,
  Zn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var r = !1,
      t = {},
      e;
    try {
      e = bT(Object.prototype, "__proto__", "set"), e(t, []), r = t instanceof Array;
    } catch (n) {}
    return function (o, i) {
      return wT(o), TT(i), ST(o) && (r ? e(o, i) : o.__proto__ = i), o;
    };
  }() : void 0),
  AT = T,
  IT = K,
  mp = Qi,
  CT = X,
  ET = vp,
  gf = gr,
  pf = Zn,
  RT = At,
  OT = vr,
  Ja = Ue,
  _T = q,
  PT = Xn,
  yp = hp,
  NT = mp.PROPER,
  FT = mp.CONFIGURABLE,
  mf = yp.IteratorPrototype,
  ko = yp.BUGGY_SAFARI_ITERATORS,
  mn = _T("iterator"),
  yf = "keys",
  yn = "values",
  xf = "entries",
  BT = function BT() {
    return this;
  },
  Sc = function Sc(r, t, e, n, o, i, a) {
    ET(e, t, n);
    var s = function s(S) {
        if (S === o && d) return d;
        if (!ko && S && S in u) return u[S];
        switch (S) {
          case yf:
            return function () {
              return new e(this, S);
            };
          case yn:
            return function () {
              return new e(this, S);
            };
          case xf:
            return function () {
              return new e(this, S);
            };
        }
        return function () {
          return new e(this);
        };
      },
      l = t + " Iterator",
      c = !1,
      u = r.prototype,
      f = u[mn] || u["@@iterator"] || o && u[o],
      d = !ko && f || s(o),
      g = t === "Array" && u.entries || f,
      p,
      x,
      b;
    if (g && (p = gf(g.call(new r())), p !== Object.prototype && p.next && (gf(p) !== mf && (pf ? pf(p, mf) : CT(p[mn]) || Ja(p, mn, BT)), RT(p, l, !0))), NT && o === yn && f && f.name !== yn && (FT ? OT(u, "name", yn) : (c = !0, d = function d() {
      return IT(f, this);
    })), o) if (x = {
      values: s(yn),
      keys: i ? d : s(yf),
      entries: s(xf)
    }, a) for (b in x) (ko || c || !(b in u)) && Ja(u, b, x[b]);else AT({
      target: t,
      proto: !0,
      forced: ko || c
    }, x);
    return u[mn] !== d && Ja(u, mn, d, {
      name: o
    }), PT[t] = d, x;
  },
  Ji = function Ji(r, t) {
    return {
      value: r,
      done: t
    };
  },
  kT = Se,
  wc = ke,
  $f = Xn,
  xp = Wt,
  LT = we.f,
  MT = Sc,
  Lo = Ji,
  DT = Y,
  $p = "Array Iterator",
  jT = xp.set,
  zT = xp.getterFor($p);
MT(Array, "Array", function (r, t) {
  jT(this, {
    type: $p,
    target: kT(r),
    index: 0,
    kind: t
  });
}, function () {
  var r = zT(this),
    t = r.target,
    e = r.index++;
  if (!t || e >= t.length) return r.target = null, Lo(void 0, !0);
  switch (r.kind) {
    case "keys":
      return Lo(e, !1);
    case "values":
      return Lo(t[e], !1);
  }
  return Lo([e, t[e]], !1);
}, "values");
var bf = $f.Arguments = $f.Array;
wc("keys");
wc("values");
wc("entries");
if (DT && bf.name !== "values") try {
  LT(bf, "name", {
    value: "values"
  });
} catch (r) {}
var bp = {
    exports: {}
  },
  Zi = {},
  UT = k,
  ln = UT([].slice),
  WT = ze,
  HT = Se,
  Sp = sn.f,
  YT = ln,
  wp = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  KT = function KT(r) {
    try {
      return Sp(r);
    } catch (t) {
      return YT(wp);
    }
  };
Zi.f = function (t) {
  return wp && WT(t) === "Window" ? KT(t) : Sp(HT(t));
};
var GT = B,
  Tc = GT(function () {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      });
    }
  }),
  VT = B,
  XT = J,
  QT = ze,
  Sf = Tc,
  ui = Object.isExtensible,
  qT = VT(function () {
    ui(1);
  }),
  Tp = qT || Sf ? function (t) {
    return !XT(t) || Sf && QT(t) === "ArrayBuffer" ? !1 : ui ? ui(t) : !0;
  } : ui,
  JT = B,
  ea = !JT(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  ZT = T,
  e1 = k,
  t1 = Gn,
  r1 = J,
  Ac = de,
  n1 = we.f,
  wf = sn,
  o1 = Zi,
  Ic = Tp,
  i1 = Gi,
  a1 = ea,
  Ap = !1,
  $t = i1("meta"),
  s1 = 0,
  Cc = function Cc(r) {
    n1(r, $t, {
      value: {
        objectID: "O" + s1++,
        weakData: {}
      }
    });
  },
  l1 = function l1(r, t) {
    if (!r1(r)) return _typeof(r) == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!Ac(r, $t)) {
      if (!Ic(r)) return "F";
      if (!t) return "E";
      Cc(r);
    }
    return r[$t].objectID;
  },
  c1 = function c1(r, t) {
    if (!Ac(r, $t)) {
      if (!Ic(r)) return !0;
      if (!t) return !1;
      Cc(r);
    }
    return r[$t].weakData;
  },
  u1 = function u1(r) {
    return a1 && Ap && Ic(r) && !Ac(r, $t) && Cc(r), r;
  },
  f1 = function f1() {
    d1.enable = function () {}, Ap = !0;
    var r = wf.f,
      t = e1([].splice),
      e = {};
    e[$t] = 1, r(e).length && (wf.f = function (n) {
      for (var o = r(n), i = 0, a = o.length; i < a; i++) if (o[i] === $t) {
        t(o, i, 1);
        break;
      }
      return o;
    }, ZT({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: o1.f
    }));
  },
  d1 = bp.exports = {
    enable: f1,
    fastKey: l1,
    getWeakData: c1,
    onFreeze: u1
  };
t1[$t] = !0;
var eo = bp.exports,
  h1 = ze,
  v1 = k,
  to = function to(r) {
    if (h1(r) === "Function") return v1(r);
  },
  Tf = to,
  g1 = he,
  p1 = Yn,
  m1 = Tf(Tf.bind),
  Ht = function Ht(r, t) {
    return g1(r), t === void 0 ? r : p1 ? m1(r, t) : function () {
      return r.apply(t, arguments);
    };
  },
  y1 = q,
  x1 = Xn,
  $1 = y1("iterator"),
  b1 = Array.prototype,
  Ip = function Ip(r) {
    return r !== void 0 && (x1.Array === r || b1[$1] === r);
  },
  S1 = q,
  w1 = S1("toStringTag"),
  Cp = {};
Cp[w1] = "z";
var Ec = String(Cp) === "[object z]",
  T1 = Ec,
  A1 = X,
  fi = ze,
  I1 = q,
  C1 = I1("toStringTag"),
  E1 = Object,
  R1 = fi(function () {
    return arguments;
  }()) === "Arguments",
  O1 = function O1(r, t) {
    try {
      return r[t];
    } catch (e) {}
  },
  ta = T1 ? fi : function (r) {
    var t, e, n;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (e = O1(t = E1(r), C1)) == "string" ? e : R1 ? fi(t) : (n = fi(t)) === "Object" && A1(t.callee) ? "Arguments" : n;
  },
  _1 = ta,
  Af = Tt,
  P1 = qe,
  N1 = Xn,
  F1 = q,
  B1 = F1("iterator"),
  Rc = function Rc(r) {
    if (!P1(r)) return Af(r, B1) || Af(r, "@@iterator") || N1[_1(r)];
  },
  k1 = K,
  L1 = he,
  M1 = me,
  D1 = on,
  j1 = Rc,
  z1 = TypeError,
  Ep = function Ep(r, t) {
    var e = arguments.length < 2 ? j1(r) : t;
    if (L1(e)) return M1(k1(e, r));
    throw new z1(D1(r) + " is not iterable");
  },
  U1 = K,
  If = me,
  W1 = Tt,
  ra = function ra(r, t, e) {
    var n, o;
    If(r);
    try {
      if (n = W1(r, "return"), !n) {
        if (t === "throw") throw e;
        return e;
      }
      n = U1(n, r);
    } catch (i) {
      o = !0, n = i;
    }
    if (t === "throw") throw e;
    if (o) throw n;
    return If(n), e;
  },
  H1 = Ht,
  Y1 = K,
  K1 = me,
  G1 = on,
  V1 = Ip,
  X1 = ne,
  Cf = wt,
  Q1 = Ep,
  q1 = Rc,
  Ef = ra,
  J1 = TypeError,
  di = function di(r, t) {
    this.stopped = r, this.result = t;
  },
  Rf = di.prototype,
  vt = function vt(r, t, e) {
    var n = e && e.that,
      o = !!(e && e.AS_ENTRIES),
      i = !!(e && e.IS_RECORD),
      a = !!(e && e.IS_ITERATOR),
      s = !!(e && e.INTERRUPTED),
      l = H1(t, n),
      c,
      u,
      f,
      d,
      g,
      p,
      x,
      b = function b($) {
        return c && Ef(c, "normal", $), new di(!0, $);
      },
      S = function S($) {
        return o ? (K1($), s ? l($[0], $[1], b) : l($[0], $[1])) : s ? l($, b) : l($);
      };
    if (i) c = r.iterator;else if (a) c = r;else {
      if (u = q1(r), !u) throw new J1(G1(r) + " is not iterable");
      if (V1(u)) {
        for (f = 0, d = X1(r); d > f; f++) if (g = S(r[f]), g && Cf(Rf, g)) return g;
        return new di(!1);
      }
      c = Q1(r, u);
    }
    for (p = i ? r.next : c.next; !(x = Y1(p, c)).done;) {
      try {
        g = S(x.value);
      } catch ($) {
        Ef(c, "throw", $);
      }
      if (_typeof(g) == "object" && g && Cf(Rf, g)) return g;
    }
    return new di(!1);
  },
  Z1 = wt,
  eA = TypeError,
  Oc = function Oc(r, t) {
    if (Z1(t, r)) return r;
    throw new eA("Incorrect invocation");
  },
  tA = q,
  Rp = tA("iterator"),
  Op = !1;
try {
  var rA = 0,
    Of = {
      next: function next() {
        return {
          done: !!rA++
        };
      },
      "return": function _return() {
        Op = !0;
      }
    };
  Of[Rp] = function () {
    return this;
  }, Array.from(Of, function () {
    throw 2;
  });
} catch (r) {}
var _c = function _c(r, t) {
    try {
      if (!t && !Op) return !1;
    } catch (o) {
      return !1;
    }
    var e = !1;
    try {
      var n = {};
      n[Rp] = function () {
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
  nA = X,
  oA = J,
  _f = Zn,
  _p = function _p(r, t, e) {
    var n, o;
    return _f && nA(n = t.constructor) && n !== e && oA(o = n.prototype) && o !== e.prototype && _f(r, o), r;
  },
  iA = T,
  aA = U,
  sA = k,
  Pf = qi,
  lA = Ue,
  cA = eo,
  uA = vt,
  fA = Oc,
  dA = X,
  hA = qe,
  Za = J,
  es = B,
  vA = _c,
  gA = At,
  pA = _p,
  Pp = function Pp(r, t, e) {
    var n = r.indexOf("Map") !== -1,
      o = r.indexOf("Weak") !== -1,
      i = n ? "set" : "add",
      a = aA[r],
      s = a && a.prototype,
      l = a,
      c = {},
      u = function u(S) {
        var $ = sA(s[S]);
        lA(s, S, S === "add" ? function (m) {
          return $(this, m === 0 ? 0 : m), this;
        } : S === "delete" ? function (y) {
          return o && !Za(y) ? !1 : $(this, y === 0 ? 0 : y);
        } : S === "get" ? function (m) {
          return o && !Za(m) ? void 0 : $(this, m === 0 ? 0 : m);
        } : S === "has" ? function (m) {
          return o && !Za(m) ? !1 : $(this, m === 0 ? 0 : m);
        } : function (m, w) {
          return $(this, m === 0 ? 0 : m, w), this;
        });
      },
      f = Pf(r, !dA(a) || !(o || s.forEach && !es(function () {
        new a().entries().next();
      })));
    if (f) l = e.getConstructor(t, r, n, i), cA.enable();else if (Pf(r, !0)) {
      var d = new l(),
        g = d[i](o ? {} : -0, 1) !== d,
        p = es(function () {
          d.has(1);
        }),
        x = vA(function (S) {
          new a(S);
        }),
        b = !o && es(function () {
          for (var S = new a(), $ = 5; $--;) S[i]($, $);
          return !S.has(-0);
        });
      x || (l = t(function (S, $) {
        fA(S, s);
        var y = pA(new a(), S, l);
        return hA($) || uA($, y[i], {
          that: y,
          AS_ENTRIES: n
        }), y;
      }), l.prototype = s, s.constructor = l), (p || b) && (u("delete"), u("has"), n && u("get")), (b || g) && u(i), o && s.clear && delete s.clear;
    }
    return c[r] = l, iA({
      global: !0,
      constructor: !0,
      forced: l !== a
    }, c), gA(l, r), o || e.setStrong(l, r, n), l;
  },
  Nf = $c,
  mA = we,
  cn = function cn(r, t, e) {
    return e.get && Nf(e.get, t, {
      getter: !0
    }), e.set && Nf(e.set, t, {
      setter: !0
    }), mA.f(r, t, e);
  },
  yA = Ue,
  xA = function xA(r, t, e) {
    for (var n in t) yA(r, n, t[n], e);
    return r;
  },
  $A = Pe,
  bA = cn,
  SA = q,
  wA = Y,
  Ff = SA("species"),
  Pc = function Pc(r) {
    var t = $A(r);
    wA && t && !t[Ff] && bA(t, Ff, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  },
  Bf = dr,
  TA = cn,
  kf = xA,
  AA = Ht,
  IA = Oc,
  CA = qe,
  EA = vt,
  RA = Sc,
  Mo = Ji,
  OA = Pc,
  xn = Y,
  Lf = eo.fastKey,
  Np = Wt,
  Mf = Np.set,
  ts = Np.getterFor,
  Fp = {
    getConstructor: function getConstructor(r, t, e, n) {
      var o = r(function (c, u) {
          IA(c, i), Mf(c, {
            type: t,
            index: Bf(null),
            first: null,
            last: null,
            size: 0
          }), xn || (c.size = 0), CA(u) || EA(u, c[n], {
            that: c,
            AS_ENTRIES: e
          });
        }),
        i = o.prototype,
        a = ts(t),
        s = function s(c, u, f) {
          var d = a(c),
            g = l(c, u),
            p,
            x;
          return g ? g.value = f : (d.last = g = {
            index: x = Lf(u, !0),
            key: u,
            value: f,
            previous: p = d.last,
            next: null,
            removed: !1
          }, d.first || (d.first = g), p && (p.next = g), xn ? d.size++ : c.size++, x !== "F" && (d.index[x] = g)), c;
        },
        l = function l(c, u) {
          var f = a(c),
            d = Lf(u),
            g;
          if (d !== "F") return f.index[d];
          for (g = f.first; g; g = g.next) if (g.key === u) return g;
        };
      return kf(i, {
        clear: function clear() {
          for (var u = this, f = a(u), d = f.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = null), d = d.next;
          f.first = f.last = null, f.index = Bf(null), xn ? f.size = 0 : u.size = 0;
        },
        "delete": function _delete(c) {
          var u = this,
            f = a(u),
            d = l(u, c);
          if (d) {
            var g = d.next,
              p = d.previous;
            delete f.index[d.index], d.removed = !0, p && (p.next = g), g && (g.previous = p), f.first === d && (f.first = g), f.last === d && (f.last = p), xn ? f.size-- : u.size--;
          }
          return !!d;
        },
        forEach: function forEach(u) {
          for (var f = a(this), d = AA(u, arguments.length > 1 ? arguments[1] : void 0), g; g = g ? g.next : f.first;) for (d(g.value, g.key, this); g && g.removed;) g = g.previous;
        },
        has: function has(u) {
          return !!l(this, u);
        }
      }), kf(i, e ? {
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
      }), xn && TA(i, "size", {
        configurable: !0,
        get: function get() {
          return a(this).size;
        }
      }), o;
    },
    setStrong: function setStrong(r, t, e) {
      var n = t + " Iterator",
        o = ts(t),
        i = ts(n);
      RA(r, t, function (a, s) {
        Mf(this, {
          type: n,
          target: a,
          state: o(a),
          kind: s,
          last: null
        });
      }, function () {
        for (var a = i(this), s = a.kind, l = a.last; l && l.removed;) l = l.previous;
        return !a.target || !(a.last = l = l ? l.next : a.state.first) ? (a.target = null, Mo(void 0, !0)) : Mo(s === "keys" ? l.key : s === "values" ? l.value : [l.key, l.value], !1);
      }, e ? "entries" : "values", !e, !0), OA(t);
    }
  },
  _A = Pp,
  PA = Fp;
_A("Map", function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, PA);
var Do = k,
  $n = Map.prototype,
  NA = {
    Map: Map,
    set: Do($n.set),
    get: Do($n.get),
    has: Do($n.has),
    remove: Do($n["delete"]),
    proto: $n
  },
  FA = T,
  BA = k,
  kA = he,
  LA = re,
  MA = vt,
  na = NA,
  DA = B,
  Bp = na.Map,
  jA = na.has,
  zA = na.get,
  UA = na.set,
  WA = BA([].push),
  HA = DA(function () {
    return Bp.groupBy("ab", function (r) {
      return r;
    }).get("a").length !== 1;
  });
FA({
  target: "Map",
  stat: !0,
  forced: HA
}, {
  groupBy: function groupBy(t, e) {
    LA(t), kA(e);
    var n = new Bp(),
      o = 0;
    return MA(t, function (i) {
      var a = e(i, o++);
      jA(n, a) ? WA(zA(n, a), i) : UA(n, a, [i]);
    }), n;
  }
});
var YA = Ec,
  KA = ta,
  GA = YA ? {}.toString : function () {
    return "[object " + KA(this) + "]";
  },
  VA = Ec,
  XA = Ue,
  QA = GA;
VA || XA(Object.prototype, "toString", QA, {
  unsafe: !0
});
var qA = ta,
  JA = String,
  Q = function Q(r) {
    if (qA(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return JA(r);
  },
  Nc = k,
  ZA = Ee,
  eI = Q,
  tI = re,
  rI = Nc("".charAt),
  Df = Nc("".charCodeAt),
  nI = Nc("".slice),
  jf = function jf(r) {
    return function (t, e) {
      var n = eI(tI(t)),
        o = ZA(e),
        i = n.length,
        a,
        s;
      return o < 0 || o >= i ? r ? "" : void 0 : (a = Df(n, o), a < 55296 || a > 56319 || o + 1 === i || (s = Df(n, o + 1)) < 56320 || s > 57343 ? r ? rI(n, o) : a : r ? nI(n, o, o + 2) : (a - 55296 << 10) + (s - 56320) + 65536);
    };
  },
  Fc = {
    codeAt: jf(!1),
    charAt: jf(!0)
  },
  oI = Fc.charAt,
  iI = Q,
  kp = Wt,
  aI = Sc,
  zf = Ji,
  Lp = "String Iterator",
  sI = kp.set,
  lI = kp.getterFor(Lp);
aI(String, "String", function (r) {
  sI(this, {
    type: Lp,
    string: iI(r),
    index: 0
  });
}, function () {
  var t = lI(this),
    e = t.string,
    n = t.index,
    o;
  return n >= e.length ? zf(void 0, !0) : (o = oI(e, n), t.index += o.length, zf(o, !1));
});
var cI = U,
  nt = cI,
  uI = nt;
uI.Map;
var fI = Pp,
  dI = Fp;
fI("Set", function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, dI);
var rs = k,
  jo = Set.prototype,
  gt = {
    Set: Set,
    add: rs(jo.add),
    has: rs(jo.has),
    remove: rs(jo["delete"]),
    proto: jo
  },
  hI = gt.has,
  pr = function pr(r) {
    return hI(r), r;
  },
  vI = K,
  mr = function mr(r, t, e) {
    for (var n = e ? r : r.iterator, o = r.next, i, a; !(i = vI(o, n)).done;) if (a = t(i.value), a !== void 0) return a;
  },
  Mp = k,
  gI = mr,
  Dp = gt,
  pI = Dp.Set,
  jp = Dp.proto,
  mI = Mp(jp.forEach),
  zp = Mp(jp.keys),
  yI = zp(new pI()).next,
  ro = function ro(r, t, e) {
    return e ? gI({
      iterator: zp(r),
      next: yI
    }, t) : mI(r, t);
  },
  Up = gt,
  xI = ro,
  $I = Up.Set,
  bI = Up.add,
  Bc = function Bc(r) {
    var t = new $I();
    return xI(r, function (e) {
      bI(t, e);
    }), t;
  },
  SI = gp,
  wI = gt,
  no = SI(wI.proto, "size", "get") || function (r) {
    return r.size;
  },
  TI = function TI(r) {
    return {
      iterator: r,
      next: r.next,
      done: !1
    };
  },
  Uf = he,
  Wp = me,
  Wf = K,
  AI = Ee,
  II = TI,
  Hf = "Invalid size",
  CI = RangeError,
  EI = TypeError,
  RI = Math.max,
  Hp = function Hp(r, t) {
    this.set = r, this.size = RI(t, 0), this.has = Uf(r.has), this.keys = Uf(r.keys);
  };
Hp.prototype = {
  getIterator: function getIterator() {
    return II(Wp(Wf(this.keys, this.set)));
  },
  includes: function includes(r) {
    return Wf(this.has, this.set, r);
  }
};
var yr = function yr(r) {
    Wp(r);
    var t = +r.size;
    if (t !== t) throw new EI(Hf);
    var e = AI(t);
    if (e < 0) throw new CI(Hf);
    return new Hp(r, e);
  },
  OI = pr,
  Yp = gt,
  _I = Bc,
  PI = no,
  NI = yr,
  FI = ro,
  BI = mr,
  kI = Yp.has,
  Yf = Yp.remove,
  LI = function LI(t) {
    var e = OI(this),
      n = NI(t),
      o = _I(e);
    return PI(e) <= n.size ? FI(e, function (i) {
      n.includes(i) && Yf(o, i);
    }) : BI(n.getIterator(), function (i) {
      kI(e, i) && Yf(o, i);
    }), o;
  },
  MI = Pe,
  Kf = function Kf(r) {
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
  xr = function xr(r) {
    var t = MI("Set");
    try {
      new t()[r](Kf(0));
      try {
        return new t()[r](Kf(-1)), !1;
      } catch (e) {
        return !0;
      }
    } catch (e) {
      return !1;
    }
  },
  DI = T,
  jI = LI,
  zI = xr;
DI({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !zI("difference")
}, {
  difference: jI
});
var UI = pr,
  kc = gt,
  WI = no,
  HI = yr,
  YI = ro,
  KI = mr,
  GI = kc.Set,
  Gf = kc.add,
  VI = kc.has,
  XI = function XI(t) {
    var e = UI(this),
      n = HI(t),
      o = new GI();
    return WI(e) > n.size ? KI(n.getIterator(), function (i) {
      VI(e, i) && Gf(o, i);
    }) : YI(e, function (i) {
      n.includes(i) && Gf(o, i);
    }), o;
  },
  QI = T,
  qI = B,
  JI = XI,
  ZI = xr,
  eC = !ZI("intersection") || qI(function () {
    return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
  });
QI({
  target: "Set",
  proto: !0,
  real: !0,
  forced: eC
}, {
  intersection: JI
});
var tC = pr,
  rC = gt.has,
  nC = no,
  oC = yr,
  iC = ro,
  aC = mr,
  sC = ra,
  lC = function lC(t) {
    var e = tC(this),
      n = oC(t);
    if (nC(e) <= n.size) return iC(e, function (i) {
      if (n.includes(i)) return !1;
    }, !0) !== !1;
    var o = n.getIterator();
    return aC(o, function (i) {
      if (rC(e, i)) return sC(o, "normal", !1);
    }) !== !1;
  },
  cC = T,
  uC = lC,
  fC = xr;
cC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !fC("isDisjointFrom")
}, {
  isDisjointFrom: uC
});
var dC = pr,
  hC = no,
  vC = ro,
  gC = yr,
  pC = function pC(t) {
    var e = dC(this),
      n = gC(t);
    return hC(e) > n.size ? !1 : vC(e, function (o) {
      if (!n.includes(o)) return !1;
    }, !0) !== !1;
  },
  mC = T,
  yC = pC,
  xC = xr;
mC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !xC("isSubsetOf")
}, {
  isSubsetOf: yC
});
var $C = pr,
  bC = gt.has,
  SC = no,
  wC = yr,
  TC = mr,
  AC = ra,
  IC = function IC(t) {
    var e = $C(this),
      n = wC(t);
    if (SC(e) < n.size) return !1;
    var o = n.getIterator();
    return TC(o, function (i) {
      if (!bC(e, i)) return AC(o, "normal", !1);
    }) !== !1;
  },
  CC = T,
  EC = IC,
  RC = xr;
CC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !RC("isSupersetOf")
}, {
  isSupersetOf: EC
});
var OC = pr,
  Lc = gt,
  _C = Bc,
  PC = yr,
  NC = mr,
  FC = Lc.add,
  BC = Lc.has,
  kC = Lc.remove,
  LC = function LC(t) {
    var e = OC(this),
      n = PC(t).getIterator(),
      o = _C(e);
    return NC(n, function (i) {
      BC(e, i) ? kC(o, i) : FC(o, i);
    }), o;
  },
  MC = T,
  DC = LC,
  jC = xr;
MC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !jC("symmetricDifference")
}, {
  symmetricDifference: DC
});
var zC = pr,
  UC = gt.add,
  WC = Bc,
  HC = yr,
  YC = mr,
  KC = function KC(t) {
    var e = zC(this),
      n = HC(t).getIterator(),
      o = WC(e);
    return YC(n, function (i) {
      UC(o, i);
    }), o;
  },
  GC = T,
  VC = KC,
  XC = xr;
GC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !XC("union")
}, {
  union: VC
});
var QC = nt;
QC.Set;
var qC = J,
  JC = vr,
  ZC = function ZC(r, t) {
    qC(t) && "cause" in t && JC(r, "cause", t.cause);
  },
  eE = k,
  Kp = Error,
  tE = eE("".replace),
  rE = function (r) {
    return String(new Kp(r).stack);
  }("zxcasd"),
  Gp = /\n\s*at [^:]*:[^\n]*/,
  nE = Gp.test(rE),
  oE = function oE(r, t) {
    if (nE && typeof r == "string" && !Kp.prepareStackTrace) for (; t--;) r = tE(r, Gp, "");
    return r;
  },
  iE = B,
  aE = hr,
  sE = !iE(function () {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", aE(1, 7)), r.stack !== 7) : !0;
  }),
  lE = vr,
  cE = oE,
  uE = sE,
  Vf = Error.captureStackTrace,
  fE = function fE(r, t, e, n) {
    uE && (Vf ? Vf(r, t) : lE(r, "stack", cE(e, n)));
  },
  dE = Q,
  hE = function hE(r, t) {
    return r === void 0 ? arguments.length < 2 ? "" : t : dE(r);
  },
  vE = T,
  gE = wt,
  pE = gr,
  Ci = Zn,
  mE = bc,
  Vp = dr,
  ns = vr,
  os = hr,
  yE = ZC,
  xE = fE,
  $E = vt,
  bE = hE,
  SE = q,
  wE = SE("toStringTag"),
  Ei = Error,
  TE = [].push,
  _Kr = function Kr(t, e) {
    var n = gE(is, this),
      o;
    Ci ? o = Ci(new Ei(), n ? pE(this) : is) : (o = n ? this : Vp(is), ns(o, wE, "Error")), e !== void 0 && ns(o, "message", bE(e)), xE(o, _Kr, o.stack, 1), arguments.length > 2 && yE(o, arguments[2]);
    var i = [];
    return $E(t, TE, {
      that: i
    }), ns(o, "errors", i), o;
  };
Ci ? Ci(_Kr, Ei) : mE(_Kr, Ei, {
  name: !0
});
var is = _Kr.prototype = Vp(Ei.prototype, {
  constructor: os(1, _Kr),
  message: os(1, ""),
  name: os(1, "AggregateError")
});
vE({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: _Kr
});
var bn = U,
  AE = St,
  IE = ze,
  zo = function zo(r) {
    return AE.slice(0, r.length) === r;
  },
  Xp = function () {
    return zo("Bun/") ? "BUN" : zo("Cloudflare-Workers") ? "CLOUDFLARE" : zo("Deno/") ? "DENO" : zo("Node.js/") ? "NODE" : bn.Bun && typeof Bun.version == "string" ? "BUN" : bn.Deno && _typeof(Deno.version) == "object" ? "DENO" : IE(bn.process) === "process" ? "NODE" : bn.window && bn.document ? "BROWSER" : "REST";
  }(),
  CE = Xp,
  oo = CE === "NODE",
  EE = k,
  RE = B,
  Qp = X,
  OE = ta,
  _E = Pe,
  PE = yc,
  qp = function qp() {},
  Jp = _E("Reflect", "construct"),
  Mc = /^\s*(?:class|function)\b/,
  NE = EE(Mc.exec),
  FE = !Mc.test(qp),
  Sn = function Sn(t) {
    if (!Qp(t)) return !1;
    try {
      return Jp(qp, [], t), !0;
    } catch (e) {
      return !1;
    }
  },
  Zp = function Zp(t) {
    if (!Qp(t)) return !1;
    switch (OE(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return FE || !!NE(Mc, PE(t));
    } catch (e) {
      return !0;
    }
  };
Zp.sham = !0;
var io = !Jp || RE(function () {
    var r;
    return Sn(Sn.call) || !Sn(Object) || !Sn(function () {
      r = !0;
    }) || r;
  }) ? Zp : Sn,
  BE = io,
  kE = on,
  LE = TypeError,
  ME = function ME(r) {
    if (BE(r)) return r;
    throw new LE(kE(r) + " is not a constructor");
  },
  Xf = me,
  DE = ME,
  jE = qe,
  zE = q,
  UE = zE("species"),
  oa = function oa(r, t) {
    var e = Xf(r).constructor,
      n;
    return e === void 0 || jE(n = Xf(e)[UE]) ? t : DE(n);
  },
  WE = Yn,
  em = Function.prototype,
  Qf = em.apply,
  qf = em.call,
  ia = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (WE ? qf.bind(Qf) : function () {
    return qf.apply(Qf, arguments);
  }),
  HE = TypeError,
  YE = function YE(r, t) {
    if (r < t) throw new HE("Not enough arguments");
    return r;
  },
  KE = St,
  tm = /(?:ipad|iphone|ipod).*applewebkit/i.test(KE),
  De = U,
  GE = ia,
  VE = Ht,
  Jf = X,
  XE = de,
  rm = B,
  Zf = tp,
  QE = ln,
  ed = vc,
  qE = YE,
  JE = tm,
  ZE = oo,
  pl = De.setImmediate,
  ml = De.clearImmediate,
  eR = De.process,
  as = De.Dispatch,
  tR = De.Function,
  td = De.MessageChannel,
  rR = De.String,
  ss = 0,
  Nn = {},
  rd = "onreadystatechange",
  zn,
  qt,
  ls,
  cs;
rm(function () {
  zn = De.location;
});
var Dc = function Dc(r) {
    if (XE(Nn, r)) {
      var t = Nn[r];
      delete Nn[r], t();
    }
  },
  us = function us(r) {
    return function () {
      Dc(r);
    };
  },
  nd = function nd(r) {
    Dc(r.data);
  },
  od = function od(r) {
    De.postMessage(rR(r), zn.protocol + "//" + zn.host);
  };
(!pl || !ml) && (pl = function pl(t) {
  qE(arguments.length, 1);
  var e = Jf(t) ? t : tR(t),
    n = QE(arguments, 1);
  return Nn[++ss] = function () {
    GE(e, void 0, n);
  }, qt(ss), ss;
}, ml = function ml(t) {
  delete Nn[t];
}, ZE ? qt = function qt(r) {
  eR.nextTick(us(r));
} : as && as.now ? qt = function qt(r) {
  as.now(us(r));
} : td && !JE ? (ls = new td(), cs = ls.port2, ls.port1.onmessage = nd, qt = VE(cs.postMessage, cs)) : De.addEventListener && Jf(De.postMessage) && !De.importScripts && zn && zn.protocol !== "file:" && !rm(od) ? (qt = od, De.addEventListener("message", nd, !1)) : rd in ed("script") ? qt = function qt(r) {
  Zf.appendChild(ed("script"))[rd] = function () {
    Zf.removeChild(this), Dc(r);
  };
} : qt = function qt(r) {
  setTimeout(us(r), 0);
});
var nm = {
    set: pl,
    clear: ml
  },
  id = U,
  nR = Y,
  oR = Object.getOwnPropertyDescriptor,
  iR = function iR(r) {
    if (!nR) return id[r];
    var t = oR(id, r);
    return t && t.value;
  },
  om = function om() {
    this.head = null, this.tail = null;
  };
om.prototype = {
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
var im = om,
  aR = St,
  sR = /ipad|iphone|ipod/i.test(aR) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u",
  lR = St,
  cR = /web0s(?!.*chrome)/i.test(lR),
  Gr = U,
  uR = iR,
  ad = Ht,
  fs = nm.set,
  fR = im,
  dR = tm,
  hR = sR,
  vR = cR,
  ds = oo,
  sd = Gr.MutationObserver || Gr.WebKitMutationObserver,
  ld = Gr.document,
  cd = Gr.process,
  Uo = Gr.Promise,
  yl = uR("queueMicrotask"),
  Sr,
  hs,
  vs,
  Wo,
  ud;
if (!yl) {
  var Ho = new fR(),
    Yo = function Yo() {
      var r, t;
      for (ds && (r = cd.domain) && r.exit(); t = Ho.get();) try {
        t();
      } catch (e) {
        throw Ho.head && Sr(), e;
      }
      r && r.enter();
    };
  !dR && !ds && !vR && sd && ld ? (hs = !0, vs = ld.createTextNode(""), new sd(Yo).observe(vs, {
    characterData: !0
  }), Sr = function Sr() {
    vs.data = hs = !hs;
  }) : !hR && Uo && Uo.resolve ? (Wo = Uo.resolve(void 0), Wo.constructor = Uo, ud = ad(Wo.then, Wo), Sr = function Sr() {
    ud(Yo);
  }) : ds ? Sr = function Sr() {
    cd.nextTick(Yo);
  } : (fs = ad(fs, Gr), Sr = function Sr() {
    fs(Yo);
  }), yl = function yl(r) {
    Ho.head || Sr(), Ho.add(r);
  };
}
var gR = yl,
  pR = function pR(r, t) {
    try {
      arguments.length === 1 ? console.error(r) : console.error(r, t);
    } catch (e) {}
  },
  ao = function ao(r) {
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
  mR = U,
  so = mR.Promise,
  yR = U,
  Fn = so,
  xR = X,
  $R = qi,
  bR = yc,
  SR = q,
  fd = Xp,
  gs = ur;
Fn && Fn.prototype;
var wR = SR("species"),
  xl = !1,
  am = xR(yR.PromiseRejectionEvent),
  TR = $R("Promise", function () {
    var r = bR(Fn),
      t = r !== String(Fn);
    if (!t && gs === 66) return !0;
    if (!gs || gs < 51 || !/native code/.test(r)) {
      var e = new Fn(function (i) {
          i(1);
        }),
        n = function n(i) {
          i(function () {}, function () {});
        },
        o = e.constructor = {};
      if (o[wR] = n, xl = e.then(function () {}) instanceof n, !xl) return !0;
    }
    return !t && (fd === "BROWSER" || fd === "DENO") && !am;
  }),
  lo = {
    CONSTRUCTOR: TR,
    REJECTION_EVENT: am,
    SUBCLASSING: xl
  },
  It = {},
  dd = he,
  AR = TypeError,
  IR = function IR(r) {
    var t, e;
    this.promise = new r(function (n, o) {
      if (t !== void 0 || e !== void 0) throw new AR("Bad Promise constructor");
      t = n, e = o;
    }), this.resolve = dd(t), this.reject = dd(e);
  };
It.f = function (r) {
  return new IR(r);
};
var CR = T,
  Ri = oo,
  zt = U,
  Vr = K,
  hd = Ue,
  vd = Zn,
  ER = At,
  RR = Pc,
  OR = he,
  hi = X,
  _R = J,
  PR = Oc,
  NR = oa,
  sm = nm.set,
  jc = gR,
  FR = pR,
  BR = ao,
  kR = im,
  lm = Wt,
  Oi = so,
  zc = lo,
  cm = It,
  aa = "Promise",
  um = zc.CONSTRUCTOR,
  LR = zc.REJECTION_EVENT,
  MR = zc.SUBCLASSING,
  ps = lm.getterFor(aa),
  DR = lm.set,
  kr = Oi && Oi.prototype,
  er = Oi,
  Ko = kr,
  fm = zt.TypeError,
  $l = zt.document,
  Uc = zt.process,
  bl = cm.f,
  jR = bl,
  zR = !!($l && $l.createEvent && zt.dispatchEvent),
  dm = "unhandledrejection",
  UR = "rejectionhandled",
  gd = 0,
  hm = 1,
  WR = 2,
  Wc = 1,
  vm = 2,
  Go,
  pd,
  HR,
  md,
  gm = function gm(r) {
    var t;
    return _R(r) && hi(t = r.then) ? t : !1;
  },
  pm = function pm(r, t) {
    var e = t.value,
      n = t.state === hm,
      o = n ? r.ok : r.fail,
      i = r.resolve,
      a = r.reject,
      s = r.domain,
      l,
      c,
      u;
    try {
      o ? (n || (t.rejection === vm && KR(t), t.rejection = Wc), o === !0 ? l = e : (s && s.enter(), l = o(e), s && (s.exit(), u = !0)), l === r.promise ? a(new fm("Promise-chain cycle")) : (c = gm(l)) ? Vr(c, l, i, a) : i(l)) : a(e);
    } catch (f) {
      s && !u && s.exit(), a(f);
    }
  },
  mm = function mm(r, t) {
    r.notified || (r.notified = !0, jc(function () {
      for (var e = r.reactions, n; n = e.get();) pm(n, r);
      r.notified = !1, t && !r.rejection && YR(r);
    }));
  },
  ym = function ym(r, t, e) {
    var n, o;
    zR ? (n = $l.createEvent("Event"), n.promise = t, n.reason = e, n.initEvent(r, !1, !0), zt.dispatchEvent(n)) : n = {
      promise: t,
      reason: e
    }, !LR && (o = zt["on" + r]) ? o(n) : r === dm && FR("Unhandled promise rejection", e);
  },
  YR = function YR(r) {
    Vr(sm, zt, function () {
      var t = r.facade,
        e = r.value,
        n = yd(r),
        o;
      if (n && (o = BR(function () {
        Ri ? Uc.emit("unhandledRejection", e, t) : ym(dm, t, e);
      }), r.rejection = Ri || yd(r) ? vm : Wc, o.error)) throw o.value;
    });
  },
  yd = function yd(r) {
    return r.rejection !== Wc && !r.parent;
  },
  KR = function KR(r) {
    Vr(sm, zt, function () {
      var t = r.facade;
      Ri ? Uc.emit("rejectionHandled", t) : ym(UR, t, r.value);
    });
  },
  jr = function jr(r, t, e) {
    return function (n) {
      r(t, n, e);
    };
  },
  Wr = function Wr(r, t, e) {
    r.done || (r.done = !0, e && (r = e), r.value = t, r.state = WR, mm(r, !0));
  },
  _Sl = function Sl(r, t, e) {
    if (!r.done) {
      r.done = !0, e && (r = e);
      try {
        if (r.facade === t) throw new fm("Promise can't be resolved itself");
        var n = gm(t);
        n ? jc(function () {
          var o = {
            done: !1
          };
          try {
            Vr(n, t, jr(_Sl, o, r), jr(Wr, o, r));
          } catch (i) {
            Wr(o, i, r);
          }
        }) : (r.value = t, r.state = hm, mm(r, !1));
      } catch (o) {
        Wr({
          done: !1
        }, o, r);
      }
    }
  };
if (um && (er = function er(t) {
  PR(this, Ko), OR(t), Vr(Go, this);
  var e = ps(this);
  try {
    t(jr(_Sl, e), jr(Wr, e));
  } catch (n) {
    Wr(e, n);
  }
}, Ko = er.prototype, Go = function Go(t) {
  DR(this, {
    type: aa,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new kR(),
    rejection: !1,
    state: gd,
    value: null
  });
}, Go.prototype = hd(Ko, "then", function (t, e) {
  var n = ps(this),
    o = bl(NR(this, er));
  return n.parent = !0, o.ok = hi(t) ? t : !0, o.fail = hi(e) && e, o.domain = Ri ? Uc.domain : void 0, n.state === gd ? n.reactions.add(o) : jc(function () {
    pm(o, n);
  }), o.promise;
}), pd = function pd() {
  var r = new Go(),
    t = ps(r);
  this.promise = r, this.resolve = jr(_Sl, t), this.reject = jr(Wr, t);
}, cm.f = bl = function bl(r) {
  return r === er || r === HR ? new pd(r) : jR(r);
}, hi(Oi) && kr !== Object.prototype)) {
  md = kr.then, MR || hd(kr, "then", function (t, e) {
    var n = this;
    return new er(function (o, i) {
      Vr(md, n, o, i);
    }).then(t, e);
  }, {
    unsafe: !0
  });
  try {
    delete kr.constructor;
  } catch (r) {}
  vd && vd(kr, Ko);
}
CR({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: um
}, {
  Promise: er
});
ER(er, aa, !1);
RR(aa);
var GR = so,
  VR = _c,
  XR = lo.CONSTRUCTOR,
  sa = XR || !VR(function (r) {
    GR.all(r).then(void 0, function () {});
  }),
  QR = T,
  qR = K,
  JR = he,
  ZR = It,
  eO = ao,
  tO = vt,
  rO = sa;
QR({
  target: "Promise",
  stat: !0,
  forced: rO
}, {
  all: function all(t) {
    var e = this,
      n = ZR.f(e),
      o = n.resolve,
      i = n.reject,
      a = eO(function () {
        var s = JR(e.resolve),
          l = [],
          c = 0,
          u = 1;
        tO(t, function (f) {
          var d = c++,
            g = !1;
          u++, qR(s, e, f).then(function (p) {
            g || (g = !0, l[d] = p, --u || o(l));
          }, i);
        }), --u || o(l);
      });
    return a.error && i(a.value), n.promise;
  }
});
var nO = T,
  oO = lo.CONSTRUCTOR,
  wl = so,
  iO = Pe,
  aO = X,
  sO = Ue,
  xd = wl && wl.prototype;
nO({
  target: "Promise",
  proto: !0,
  forced: oO,
  real: !0
}, {
  "catch": function _catch(r) {
    return this.then(void 0, r);
  }
});
if (aO(wl)) {
  var $d = iO("Promise").prototype["catch"];
  xd["catch"] !== $d && sO(xd, "catch", $d, {
    unsafe: !0
  });
}
var lO = T,
  cO = K,
  uO = he,
  fO = It,
  dO = ao,
  hO = vt,
  vO = sa;
lO({
  target: "Promise",
  stat: !0,
  forced: vO
}, {
  race: function race(t) {
    var e = this,
      n = fO.f(e),
      o = n.reject,
      i = dO(function () {
        var a = uO(e.resolve);
        hO(t, function (s) {
          cO(a, e, s).then(n.resolve, o);
        });
      });
    return i.error && o(i.value), n.promise;
  }
});
var gO = T,
  pO = It,
  mO = lo.CONSTRUCTOR;
gO({
  target: "Promise",
  stat: !0,
  forced: mO
}, {
  reject: function reject(t) {
    var e = pO.f(this),
      n = e.reject;
    return n(t), e.promise;
  }
});
var yO = me,
  xO = J,
  $O = It,
  xm = function xm(r, t) {
    if (yO(r), xO(t) && t.constructor === r) return t;
    var e = $O.f(r),
      n = e.resolve;
    return n(t), e.promise;
  },
  bO = T,
  SO = Pe,
  wO = lo.CONSTRUCTOR,
  TO = xm;
SO("Promise");
bO({
  target: "Promise",
  stat: !0,
  forced: wO
}, {
  resolve: function resolve(t) {
    return TO(this, t);
  }
});
var AO = T,
  IO = K,
  CO = he,
  EO = It,
  RO = ao,
  OO = vt,
  _O = sa;
AO({
  target: "Promise",
  stat: !0,
  forced: _O
}, {
  allSettled: function allSettled(t) {
    var e = this,
      n = EO.f(e),
      o = n.resolve,
      i = n.reject,
      a = RO(function () {
        var s = CO(e.resolve),
          l = [],
          c = 0,
          u = 1;
        OO(t, function (f) {
          var d = c++,
            g = !1;
          u++, IO(s, e, f).then(function (p) {
            g || (g = !0, l[d] = {
              status: "fulfilled",
              value: p
            }, --u || o(l));
          }, function (p) {
            g || (g = !0, l[d] = {
              status: "rejected",
              reason: p
            }, --u || o(l));
          });
        }), --u || o(l);
      });
    return a.error && i(a.value), n.promise;
  }
});
var PO = T,
  NO = K,
  FO = he,
  BO = Pe,
  kO = It,
  LO = ao,
  MO = vt,
  DO = sa,
  bd = "No one promise resolved";
PO({
  target: "Promise",
  stat: !0,
  forced: DO
}, {
  any: function any(t) {
    var e = this,
      n = BO("AggregateError"),
      o = kO.f(e),
      i = o.resolve,
      a = o.reject,
      s = LO(function () {
        var l = FO(e.resolve),
          c = [],
          u = 0,
          f = 1,
          d = !1;
        MO(t, function (g) {
          var p = u++,
            x = !1;
          f++, NO(l, e, g).then(function (b) {
            x || d || (d = !0, i(b));
          }, function (b) {
            x || d || (x = !0, c[p] = b, --f || a(new n(c, bd)));
          });
        }), --f || a(new n(c, bd));
      });
    return s.error && a(s.value), o.promise;
  }
});
var jO = T,
  zO = It;
jO({
  target: "Promise",
  stat: !0
}, {
  withResolvers: function withResolvers() {
    var t = zO.f(this);
    return {
      promise: t.promise,
      resolve: t.resolve,
      reject: t.reject
    };
  }
});
var UO = T,
  _i = so,
  WO = B,
  $m = Pe,
  bm = X,
  HO = oa,
  Sd = xm,
  YO = Ue,
  Tl = _i && _i.prototype,
  KO = !!_i && WO(function () {
    Tl["finally"].call({
      then: function then() {}
    }, function () {});
  });
UO({
  target: "Promise",
  proto: !0,
  real: !0,
  forced: KO
}, {
  "finally": function _finally(r) {
    var t = HO(this, $m("Promise")),
      e = bm(r);
    return this.then(e ? function (n) {
      return Sd(t, r()).then(function () {
        return n;
      });
    } : r, e ? function (n) {
      return Sd(t, r()).then(function () {
        throw n;
      });
    } : r);
  }
});
if (bm(_i)) {
  var wd = $m("Promise").prototype["finally"];
  Tl["finally"] !== wd && YO(Tl, "finally", wd, {
    unsafe: !0
  });
}
var GO = nt;
GO.Promise;
var VO = me,
  XO = ra,
  QO = function QO(r, t, e, n) {
    try {
      return n ? t(VO(e)[0], e[1]) : t(e);
    } catch (o) {
      XO(r, "throw", o);
    }
  },
  qO = Y,
  JO = we,
  ZO = hr,
  $r = function $r(r, t, e) {
    qO ? JO.f(r, t, ZO(0, e)) : r[t] = e;
  },
  e_ = Ht,
  t_ = K,
  r_ = ee,
  n_ = QO,
  o_ = Ip,
  i_ = io,
  a_ = ne,
  Td = $r,
  s_ = Ep,
  l_ = Rc,
  Ad = Array,
  c_ = function c_(t) {
    var e = r_(t),
      n = i_(this),
      o = arguments.length,
      i = o > 1 ? arguments[1] : void 0,
      a = i !== void 0;
    a && (i = e_(i, o > 2 ? arguments[2] : void 0));
    var s = l_(e),
      l = 0,
      c,
      u,
      f,
      d,
      g,
      p;
    if (s && !(this === Ad && o_(s))) for (u = n ? new this() : [], d = s_(e, s), g = d.next; !(f = t_(g, d)).done; l++) p = a ? n_(d, i, [f.value, l], !0) : f.value, Td(u, l, p);else for (c = a_(e), u = n ? new this(c) : Ad(c); c > l; l++) p = a ? i(e[l], l) : e[l], Td(u, l, p);
    return u.length = l, u;
  },
  u_ = T,
  f_ = c_,
  d_ = _c,
  h_ = !d_(function (r) {
    Array.from(r);
  });
u_({
  target: "Array",
  stat: !0,
  forced: h_
}, {
  from: f_
});
var v_ = ze,
  Yt = Array.isArray || function (t) {
    return v_(t) === "Array";
  },
  g_ = T,
  p_ = Yt;
g_({
  target: "Array",
  stat: !0
}, {
  isArray: p_
});
var m_ = T,
  y_ = B,
  x_ = io,
  $_ = $r,
  Sm = Array,
  b_ = y_(function () {
    function r() {}
    return !(Sm.of.call(r) instanceof r);
  });
m_({
  target: "Array",
  stat: !0,
  forced: b_
}, {
  of: function of() {
    for (var t = 0, e = arguments.length, n = new (x_(this) ? this : Sm)(e); e > t;) $_(n, t, arguments[t++]);
    return n.length = e, n;
  }
});
var S_ = T,
  w_ = ee,
  T_ = ne,
  A_ = Ee,
  I_ = ke;
S_({
  target: "Array",
  proto: !0
}, {
  at: function at(t) {
    var e = w_(this),
      n = T_(e),
      o = A_(t),
      i = o >= 0 ? o : n + o;
    return i < 0 || i >= n ? void 0 : e[i];
  }
});
I_("at");
var C_ = TypeError,
  E_ = 9007199254740991,
  un = function un(r) {
    if (r > E_) throw C_("Maximum allowed index exceeded");
    return r;
  },
  Id = Yt,
  R_ = io,
  O_ = J,
  __ = q,
  P_ = __("species"),
  Cd = Array,
  N_ = function N_(r) {
    var t;
    return Id(r) && (t = r.constructor, R_(t) && (t === Cd || Id(t.prototype)) ? t = void 0 : O_(t) && (t = t[P_], t === null && (t = void 0))), t === void 0 ? Cd : t;
  },
  F_ = N_,
  co = function co(r, t) {
    return new (F_(r))(t === 0 ? 0 : t);
  },
  B_ = B,
  k_ = q,
  L_ = ur,
  M_ = k_("species"),
  uo = function uo(r) {
    return L_ >= 51 || !B_(function () {
      var t = [],
        e = t.constructor = {};
      return e[M_] = function () {
        return {
          foo: 1
        };
      }, t[r](Boolean).foo !== 1;
    });
  },
  D_ = T,
  j_ = B,
  z_ = Yt,
  U_ = J,
  W_ = ee,
  H_ = ne,
  Ed = un,
  Rd = $r,
  Y_ = co,
  K_ = uo,
  G_ = q,
  V_ = ur,
  wm = G_("isConcatSpreadable"),
  X_ = V_ >= 51 || !j_(function () {
    var r = [];
    return r[wm] = !1, r.concat()[0] !== r;
  }),
  Q_ = function Q_(r) {
    if (!U_(r)) return !1;
    var t = r[wm];
    return t !== void 0 ? !!t : z_(r);
  },
  q_ = !X_ || !K_("concat");
D_({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: q_
}, {
  concat: function concat(t) {
    var e = W_(this),
      n = Y_(e, 0),
      o = 0,
      i,
      a,
      s,
      l,
      c;
    for (i = -1, s = arguments.length; i < s; i++) if (c = i === -1 ? e : arguments[i], Q_(c)) for (l = H_(c), Ed(o + l), a = 0; a < l; a++, o++) a in c && Rd(n, o, c[a]);else Ed(o + 1), Rd(n, o++, c);
    return n.length = o, n;
  }
});
var Od = on,
  J_ = TypeError,
  la = function la(r, t) {
    if (!delete r[t]) throw new J_("Cannot delete property " + Od(t) + " of " + Od(r));
  },
  Z_ = ee,
  ms = fr,
  e2 = ne,
  t2 = la,
  r2 = Math.min,
  n2 = [].copyWithin || function (t, e) {
    var n = Z_(this),
      o = e2(n),
      i = ms(t, o),
      a = ms(e, o),
      s = arguments.length > 2 ? arguments[2] : void 0,
      l = r2((s === void 0 ? o : ms(s, o)) - a, o - i),
      c = 1;
    for (a < i && i < a + l && (c = -1, a += l - 1, i += l - 1); l-- > 0;) a in n ? n[i] = n[a] : t2(n, i), i += c, a += c;
    return n;
  },
  o2 = T,
  i2 = n2,
  a2 = ke;
o2({
  target: "Array",
  proto: !0
}, {
  copyWithin: i2
});
a2("copyWithin");
var s2 = Ht,
  l2 = k,
  c2 = tn,
  u2 = ee,
  f2 = ne,
  d2 = co,
  _d = l2([].push),
  Nt = function Nt(r) {
    var t = r === 1,
      e = r === 2,
      n = r === 3,
      o = r === 4,
      i = r === 6,
      a = r === 7,
      s = r === 5 || i;
    return function (l, c, u, f) {
      for (var d = u2(l), g = c2(d), p = f2(g), x = s2(c, u), b = 0, S = f || d2, $ = t ? S(l, p) : e || a ? S(l, 0) : void 0, y, m; p > b; b++) if ((s || b in g) && (y = g[b], m = x(y, b, d), r)) if (t) $[b] = m;else if (m) switch (r) {
        case 3:
          return !0;
        case 5:
          return y;
        case 6:
          return b;
        case 2:
          _d($, y);
      } else switch (r) {
        case 4:
          return !1;
        case 7:
          _d($, y);
      }
      return i ? -1 : n || o ? o : $;
    };
  },
  Kt = {
    forEach: Nt(0),
    map: Nt(1),
    filter: Nt(2),
    some: Nt(3),
    every: Nt(4),
    find: Nt(5),
    findIndex: Nt(6),
    filterReject: Nt(7)
  },
  h2 = B,
  Ct = function Ct(r, t) {
    var e = [][r];
    return !!e && h2(function () {
      e.call(null, t || function () {
        return 1;
      }, 1);
    });
  },
  v2 = T,
  g2 = Kt.every,
  p2 = Ct,
  m2 = p2("every");
v2({
  target: "Array",
  proto: !0,
  forced: !m2
}, {
  every: function every(t) {
    return g2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var y2 = ee,
  Pd = fr,
  x2 = ne,
  $2 = function $2(t) {
    for (var e = y2(this), n = x2(e), o = arguments.length, i = Pd(o > 1 ? arguments[1] : void 0, n), a = o > 2 ? arguments[2] : void 0, s = a === void 0 ? n : Pd(a, n); s > i;) e[i++] = t;
    return e;
  },
  b2 = T,
  S2 = $2,
  w2 = ke;
b2({
  target: "Array",
  proto: !0
}, {
  fill: S2
});
w2("fill");
var T2 = T,
  A2 = Kt.filter,
  I2 = uo,
  C2 = I2("filter");
T2({
  target: "Array",
  proto: !0,
  forced: !C2
}, {
  filter: function filter(t) {
    return A2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var E2 = T,
  R2 = Kt.find,
  O2 = ke,
  Al = "find",
  Tm = !0;
Al in [] && Array(1)[Al](function () {
  Tm = !1;
});
E2({
  target: "Array",
  proto: !0,
  forced: Tm
}, {
  find: function find(t) {
    return R2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
O2(Al);
var _2 = T,
  P2 = Kt.findIndex,
  N2 = ke,
  Il = "findIndex",
  Am = !0;
Il in [] && Array(1)[Il](function () {
  Am = !1;
});
_2({
  target: "Array",
  proto: !0,
  forced: Am
}, {
  findIndex: function findIndex(t) {
    return P2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
N2(Il);
var F2 = Ht,
  B2 = tn,
  k2 = ee,
  L2 = ne,
  Nd = function Nd(r) {
    var t = r === 1;
    return function (e, n, o) {
      for (var i = k2(e), a = B2(i), s = L2(a), l = F2(n, o), c, u; s-- > 0;) if (c = a[s], u = l(c, s, i), u) switch (r) {
        case 0:
          return c;
        case 1:
          return s;
      }
      return t ? -1 : void 0;
    };
  },
  Im = {
    findLast: Nd(0),
    findLastIndex: Nd(1)
  },
  M2 = T,
  D2 = Im.findLast,
  j2 = ke;
M2({
  target: "Array",
  proto: !0
}, {
  findLast: function findLast(t) {
    return D2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
j2("findLast");
var z2 = T,
  U2 = Im.findLastIndex,
  W2 = ke;
z2({
  target: "Array",
  proto: !0
}, {
  findLastIndex: function findLastIndex(t) {
    return U2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
W2("findLastIndex");
var H2 = Yt,
  Y2 = ne,
  K2 = un,
  G2 = Ht,
  _Cm = function Cm(r, t, e, n, o, i, a, s) {
    for (var l = o, c = 0, u = a ? G2(a, s) : !1, f, d; c < n;) c in e && (f = u ? u(e[c], c, t) : e[c], i > 0 && H2(f) ? (d = Y2(f), l = _Cm(r, t, f, d, l, i - 1) - 1) : (K2(l + 1), r[l] = f), l++), c++;
    return l;
  },
  Em = _Cm,
  V2 = T,
  X2 = Em,
  Q2 = ee,
  q2 = ne,
  J2 = Ee,
  Z2 = co;
V2({
  target: "Array",
  proto: !0
}, {
  flat: function flat() {
    var t = arguments.length ? arguments[0] : void 0,
      e = Q2(this),
      n = q2(e),
      o = Z2(e, 0);
    return o.length = X2(o, e, e, n, 0, t === void 0 ? 1 : J2(t)), o;
  }
});
var eP = T,
  tP = Em,
  rP = he,
  nP = ee,
  oP = ne,
  iP = co;
eP({
  target: "Array",
  proto: !0
}, {
  flatMap: function flatMap(t) {
    var e = nP(this),
      n = oP(e),
      o;
    return rP(t), o = iP(e, 0), o.length = tP(o, e, e, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), o;
  }
});
var aP = Kt.forEach,
  sP = Ct,
  lP = sP("forEach"),
  cP = lP ? [].forEach : function (t) {
    return aP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  },
  uP = T,
  Fd = cP;
uP({
  target: "Array",
  proto: !0,
  forced: [].forEach !== Fd
}, {
  forEach: Fd
});
var fP = T,
  dP = gc.includes,
  hP = B,
  vP = ke,
  gP = hP(function () {
    return !Array(1).includes();
  });
fP({
  target: "Array",
  proto: !0,
  forced: gP
}, {
  includes: function includes(t) {
    return dP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
vP("includes");
var pP = T,
  mP = to,
  yP = gc.indexOf,
  xP = Ct,
  Cl = mP([].indexOf),
  Rm = !!Cl && 1 / Cl([1], 1, -0) < 0,
  $P = Rm || !xP("indexOf");
pP({
  target: "Array",
  proto: !0,
  forced: $P
}, {
  indexOf: function indexOf(t) {
    var e = arguments.length > 1 ? arguments[1] : void 0;
    return Rm ? Cl(this, t, e) || 0 : yP(this, t, e);
  }
});
var bP = T,
  SP = k,
  wP = tn,
  TP = Se,
  AP = Ct,
  IP = SP([].join),
  CP = wP !== Object,
  EP = CP || !AP("join", ",");
bP({
  target: "Array",
  proto: !0,
  forced: EP
}, {
  join: function join(t) {
    return IP(TP(this), t === void 0 ? "," : t);
  }
});
var RP = ia,
  OP = Se,
  _P = Ee,
  PP = ne,
  NP = Ct,
  FP = Math.min,
  El = [].lastIndexOf,
  Om = !!El && 1 / [1].lastIndexOf(1, -0) < 0,
  BP = NP("lastIndexOf"),
  kP = Om || !BP,
  LP = kP ? function (t) {
    if (Om) return RP(El, this, arguments) || 0;
    var e = OP(this),
      n = PP(e);
    if (n === 0) return -1;
    var o = n - 1;
    for (arguments.length > 1 && (o = FP(o, _P(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) if (o in e && e[o] === t) return o || 0;
    return -1;
  } : El,
  MP = T,
  Bd = LP;
MP({
  target: "Array",
  proto: !0,
  forced: Bd !== [].lastIndexOf
}, {
  lastIndexOf: Bd
});
var DP = T,
  jP = Kt.map,
  zP = uo,
  UP = zP("map");
DP({
  target: "Array",
  proto: !0,
  forced: !UP
}, {
  map: function map(t) {
    return jP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var WP = Y,
  HP = Yt,
  YP = TypeError,
  KP = Object.getOwnPropertyDescriptor,
  GP = WP && !function () {
    if (this !== void 0) return !0;
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).length = 1;
    } catch (r) {
      return r instanceof TypeError;
    }
  }(),
  Hc = GP ? function (r, t) {
    if (HP(r) && !KP(r, "length").writable) throw new YP("Cannot set read only .length");
    return r.length = t;
  } : function (r, t) {
    return r.length = t;
  },
  VP = T,
  XP = ee,
  QP = ne,
  qP = Hc,
  JP = un,
  ZP = B,
  eN = ZP(function () {
    return [].push.call({
      length: 4294967296
    }, 1) !== 4294967297;
  }),
  tN = function tN() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).push();
    } catch (r) {
      return r instanceof TypeError;
    }
  },
  rN = eN || !tN();
VP({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: rN
}, {
  push: function push(t) {
    var e = XP(this),
      n = QP(e),
      o = arguments.length;
    JP(n + o);
    for (var i = 0; i < o; i++) e[n] = arguments[i], n++;
    return qP(e, n), n;
  }
});
var nN = he,
  oN = ee,
  iN = tn,
  aN = ne,
  kd = TypeError,
  Ld = "Reduce of empty array with no initial value",
  Md = function Md(r) {
    return function (t, e, n, o) {
      var i = oN(t),
        a = iN(i),
        s = aN(i);
      if (nN(e), s === 0 && n < 2) throw new kd(Ld);
      var l = r ? s - 1 : 0,
        c = r ? -1 : 1;
      if (n < 2) for (;;) {
        if (l in a) {
          o = a[l], l += c;
          break;
        }
        if (l += c, r ? l < 0 : s <= l) throw new kd(Ld);
      }
      for (; r ? l >= 0 : s > l; l += c) l in a && (o = e(o, a[l], l, i));
      return o;
    };
  },
  _m = {
    left: Md(!1),
    right: Md(!0)
  },
  sN = T,
  lN = _m.left,
  cN = Ct,
  Dd = ur,
  uN = oo,
  fN = !uN && Dd > 79 && Dd < 83,
  dN = fN || !cN("reduce");
sN({
  target: "Array",
  proto: !0,
  forced: dN
}, {
  reduce: function reduce(t) {
    var e = arguments.length;
    return lN(this, t, e, e > 1 ? arguments[1] : void 0);
  }
});
var hN = T,
  vN = _m.right,
  gN = Ct,
  jd = ur,
  pN = oo,
  mN = !pN && jd > 79 && jd < 83,
  yN = mN || !gN("reduceRight");
hN({
  target: "Array",
  proto: !0,
  forced: yN
}, {
  reduceRight: function reduceRight(t) {
    return vN(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var xN = T,
  $N = k,
  bN = Yt,
  SN = $N([].reverse),
  zd = [1, 2];
xN({
  target: "Array",
  proto: !0,
  forced: String(zd) === String(zd.reverse())
}, {
  reverse: function reverse() {
    return bN(this) && (this.length = this.length), SN(this);
  }
});
var wN = T,
  Ud = Yt,
  TN = io,
  AN = J,
  Wd = fr,
  IN = ne,
  CN = Se,
  EN = $r,
  RN = q,
  ON = uo,
  _N = ln,
  PN = ON("slice"),
  NN = RN("species"),
  ys = Array,
  FN = Math.max;
wN({
  target: "Array",
  proto: !0,
  forced: !PN
}, {
  slice: function slice(t, e) {
    var n = CN(this),
      o = IN(n),
      i = Wd(t, o),
      a = Wd(e === void 0 ? o : e, o),
      s,
      l,
      c;
    if (Ud(n) && (s = n.constructor, TN(s) && (s === ys || Ud(s.prototype)) ? s = void 0 : AN(s) && (s = s[NN], s === null && (s = void 0)), s === ys || s === void 0)) return _N(n, i, a);
    for (l = new (s === void 0 ? ys : s)(FN(a - i, 0)), c = 0; i < a; i++, c++) i in n && EN(l, c, n[i]);
    return l.length = c, l;
  }
});
var BN = T,
  kN = Kt.some,
  LN = Ct,
  MN = LN("some");
BN({
  target: "Array",
  proto: !0,
  forced: !MN
}, {
  some: function some(t) {
    return kN(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Hd = ln,
  DN = Math.floor,
  _Rl = function Rl(r, t) {
    var e = r.length;
    if (e < 8) for (var n = 1, o, i; n < e;) {
      for (i = n, o = r[n]; i && t(r[i - 1], o) > 0;) r[i] = r[--i];
      i !== n++ && (r[i] = o);
    } else for (var a = DN(e / 2), s = _Rl(Hd(r, 0, a), t), l = _Rl(Hd(r, a), t), c = s.length, u = l.length, f = 0, d = 0; f < c || d < u;) r[f + d] = f < c && d < u ? t(s[f], l[d]) <= 0 ? s[f++] : l[d++] : f < c ? s[f++] : l[d++];
    return r;
  },
  jN = _Rl,
  zN = St,
  Yd = zN.match(/firefox\/(\d+)/i),
  UN = !!Yd && +Yd[1],
  WN = St,
  HN = /MSIE|Trident/.test(WN),
  YN = St,
  Kd = YN.match(/AppleWebKit\/(\d+)\./),
  Pm = !!Kd && +Kd[1],
  KN = T,
  Nm = k,
  GN = he,
  VN = ee,
  Gd = ne,
  XN = la,
  Vd = Q,
  Yc = B,
  QN = jN,
  qN = Ct,
  Xd = UN,
  JN = HN,
  Qd = ur,
  qd = Pm,
  Lt = [],
  Jd = Nm(Lt.sort),
  ZN = Nm(Lt.push),
  eF = Yc(function () {
    Lt.sort(void 0);
  }),
  tF = Yc(function () {
    Lt.sort(null);
  }),
  rF = qN("sort"),
  Fm = !Yc(function () {
    if (Qd) return Qd < 70;
    if (!(Xd && Xd > 3)) {
      if (JN) return !0;
      if (qd) return qd < 603;
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
        for (o = 0; o < 47; o++) Lt.push({
          k: e + o,
          v: n
        });
      }
      for (Lt.sort(function (i, a) {
        return a.v - i.v;
      }), o = 0; o < Lt.length; o++) e = Lt[o].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
      return r !== "DGBEFHACIJK";
    }
  }),
  nF = eF || !tF || !rF || !Fm,
  oF = function oF(r) {
    return function (t, e) {
      return e === void 0 ? -1 : t === void 0 ? 1 : r !== void 0 ? +r(t, e) || 0 : Vd(t) > Vd(e) ? 1 : -1;
    };
  };
KN({
  target: "Array",
  proto: !0,
  forced: nF
}, {
  sort: function sort(t) {
    t !== void 0 && GN(t);
    var e = VN(this);
    if (Fm) return t === void 0 ? Jd(e) : Jd(e, t);
    var n = [],
      o = Gd(e),
      i,
      a;
    for (a = 0; a < o; a++) a in e && ZN(n, e[a]);
    for (QN(n, oF(t)), i = Gd(n), a = 0; a < i;) e[a] = n[a++];
    for (; a < o;) XN(e, a++);
    return e;
  }
});
var iF = Pc;
iF("Array");
var aF = T,
  sF = ee,
  lF = fr,
  cF = Ee,
  uF = ne,
  fF = Hc,
  dF = un,
  hF = co,
  vF = $r,
  xs = la,
  gF = uo,
  pF = gF("splice"),
  mF = Math.max,
  yF = Math.min;
aF({
  target: "Array",
  proto: !0,
  forced: !pF
}, {
  splice: function splice(t, e) {
    var n = sF(this),
      o = uF(n),
      i = lF(t, o),
      a = arguments.length,
      s,
      l,
      c,
      u,
      f,
      d;
    for (a === 0 ? s = l = 0 : a === 1 ? (s = 0, l = o - i) : (s = a - 2, l = yF(mF(cF(e), 0), o - i)), dF(o + s - l), c = hF(n, l), u = 0; u < l; u++) f = i + u, f in n && vF(c, u, n[f]);
    if (c.length = l, s < l) {
      for (u = i; u < o - l; u++) f = u + l, d = u + s, f in n ? n[d] = n[f] : xs(n, d);
      for (u = o; u > o - l + s; u--) xs(n, u - 1);
    } else if (s > l) for (u = o - l; u > i; u--) f = u + l - 1, d = u + s - 1, f in n ? n[d] = n[f] : xs(n, d);
    for (u = 0; u < s; u++) n[u + i] = arguments[u + 2];
    return fF(n, o - l + s), c;
  }
});
var xF = ne,
  $F = function $F(r, t) {
    for (var e = xF(r), n = new t(e), o = 0; o < e; o++) n[o] = r[e - o - 1];
    return n;
  },
  bF = T,
  SF = $F,
  wF = Se,
  TF = ke,
  AF = Array;
bF({
  target: "Array",
  proto: !0
}, {
  toReversed: function toReversed() {
    return SF(wF(this), AF);
  }
});
TF("toReversed");
var IF = ne,
  CF = function CF(r, t, e) {
    for (var n = 0, o = arguments.length > 2 ? e : IF(t), i = new r(o); o > n;) i[n] = t[n++];
    return i;
  },
  EF = U,
  RF = function RF(r, t) {
    var e = EF[r],
      n = e && e.prototype;
    return n && n[t];
  },
  OF = T,
  _F = k,
  PF = he,
  NF = Se,
  FF = CF,
  BF = RF,
  kF = ke,
  LF = Array,
  MF = _F(BF("Array", "sort"));
OF({
  target: "Array",
  proto: !0
}, {
  toSorted: function toSorted(t) {
    t !== void 0 && PF(t);
    var e = NF(this),
      n = FF(LF, e);
    return MF(n, t);
  }
});
kF("toSorted");
var DF = T,
  jF = ke,
  zF = un,
  UF = ne,
  WF = fr,
  HF = Se,
  YF = Ee,
  KF = Array,
  GF = Math.max,
  VF = Math.min;
DF({
  target: "Array",
  proto: !0
}, {
  toSpliced: function toSpliced(t, e) {
    var n = HF(this),
      o = UF(n),
      i = WF(t, o),
      a = arguments.length,
      s = 0,
      l,
      c,
      u,
      f;
    for (a === 0 ? l = c = 0 : a === 1 ? (l = 0, c = o - i) : (l = a - 2, c = VF(GF(YF(e), 0), o - i)), u = zF(o + l - c), f = KF(u); s < i; s++) f[s] = n[s];
    for (; s < i + l; s++) f[s] = arguments[s - i + 2];
    for (; s < u; s++) f[s] = n[s + c - l];
    return f;
  }
});
jF("toSpliced");
var XF = ke;
XF("flat");
var QF = ke;
QF("flatMap");
var qF = T,
  JF = ee,
  ZF = ne,
  eB = Hc,
  tB = la,
  rB = un,
  nB = [].unshift(0) !== 1,
  oB = function oB() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).unshift();
    } catch (r) {
      return r instanceof TypeError;
    }
  },
  iB = nB || !oB();
qF({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: iB
}, {
  unshift: function unshift(t) {
    var e = JF(this),
      n = ZF(e),
      o = arguments.length;
    if (o) {
      rB(n + o);
      for (var i = n; i--;) {
        var a = i + o;
        i in e ? e[a] = e[i] : tB(e, a);
      }
      for (var s = 0; s < o; s++) e[s] = arguments[s];
    }
    return eB(e, n + o);
  }
});
var aB = ne,
  sB = Ee,
  lB = RangeError,
  cB = function cB(r, t, e, n) {
    var o = aB(r),
      i = sB(e),
      a = i < 0 ? o + i : i;
    if (a >= o || a < 0) throw new lB("Incorrect index");
    for (var s = new t(o), l = 0; l < o; l++) s[l] = l === a ? n : r[l];
    return s;
  },
  uB = T,
  fB = cB,
  dB = Se,
  hB = Array;
uB({
  target: "Array",
  proto: !0
}, {
  "with": function _with(r, t) {
    return fB(dB(this), hB, r, t);
  }
});
var vB = nt;
vB.Array;
var gB = me,
  Bm = function Bm() {
    var r = gB(this),
      t = "";
    return r.hasIndices && (t += "d"), r.global && (t += "g"), r.ignoreCase && (t += "i"), r.multiline && (t += "m"), r.dotAll && (t += "s"), r.unicode && (t += "u"), r.unicodeSets && (t += "v"), r.sticky && (t += "y"), t;
  },
  Kc = B,
  pB = U,
  Gc = pB.RegExp,
  Vc = Kc(function () {
    var r = Gc("a", "y");
    return r.lastIndex = 2, r.exec("abcd") !== null;
  }),
  mB = Vc || Kc(function () {
    return !Gc("a", "y").sticky;
  }),
  yB = Vc || Kc(function () {
    var r = Gc("^r", "gy");
    return r.lastIndex = 2, r.exec("str") !== null;
  }),
  km = {
    BROKEN_CARET: yB,
    MISSED_STICKY: mB,
    UNSUPPORTED_Y: Vc
  },
  xB = B,
  $B = U,
  bB = $B.RegExp,
  SB = xB(function () {
    var r = bB(".", "s");
    return !(r.dotAll && r.test("\n") && r.flags === "s");
  }),
  wB = B,
  TB = U,
  AB = TB.RegExp,
  IB = wB(function () {
    var r = AB("(?<a>b)", "g");
    return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
  }),
  zr = K,
  ca = k,
  CB = Q,
  EB = Bm,
  RB = km,
  OB = rn,
  _B = dr,
  PB = Wt.get,
  NB = SB,
  FB = IB,
  BB = OB("native-string-replace", String.prototype.replace),
  Pi = RegExp.prototype.exec,
  _Ol = Pi,
  kB = ca("".charAt),
  LB = ca("".indexOf),
  MB = ca("".replace),
  $s = ca("".slice),
  _l = function () {
    var r = /a/,
      t = /b*/g;
    return zr(Pi, r, "a"), zr(Pi, t, "a"), r.lastIndex !== 0 || t.lastIndex !== 0;
  }(),
  Lm = RB.BROKEN_CARET,
  Pl = /()??/.exec("")[1] !== void 0,
  DB = _l || Pl || Lm || NB || FB;
DB && (_Ol = function Ol(t) {
  var e = this,
    n = PB(e),
    o = CB(t),
    i = n.raw,
    a,
    s,
    l,
    c,
    u,
    f,
    d;
  if (i) return i.lastIndex = e.lastIndex, a = zr(_Ol, i, o), e.lastIndex = i.lastIndex, a;
  var g = n.groups,
    p = Lm && e.sticky,
    x = zr(EB, e),
    b = e.source,
    S = 0,
    $ = o;
  if (p && (x = MB(x, "y", ""), LB(x, "g") === -1 && (x += "g"), $ = $s(o, e.lastIndex), e.lastIndex > 0 && (!e.multiline || e.multiline && kB(o, e.lastIndex - 1) !== "\n") && (b = "(?: " + b + ")", $ = " " + $, S++), s = new RegExp("^(?:" + b + ")", x)), Pl && (s = new RegExp("^" + b + "$(?!\\s)", x)), _l && (l = e.lastIndex), c = zr(Pi, p ? s : e, $), p ? c ? (c.input = $s(c.input, S), c[0] = $s(c[0], S), c.index = e.lastIndex, e.lastIndex += c[0].length) : e.lastIndex = 0 : _l && c && (e.lastIndex = e.global ? c.index + c[0].length : l), Pl && c && c.length > 1 && zr(BB, c[0], s, function () {
    for (u = 1; u < arguments.length - 2; u++) arguments[u] === void 0 && (c[u] = void 0);
  }), c && g) for (c.groups = f = _B(null), u = 0; u < g.length; u++) d = g[u], f[d[0]] = c[d[1]];
  return c;
});
var Xc = _Ol,
  jB = T,
  Zd = Xc;
jB({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== Zd
}, {
  exec: Zd
});
var zB = T,
  UB = k,
  WB = fr,
  HB = RangeError,
  eh = String.fromCharCode,
  th = String.fromCodePoint,
  YB = UB([].join),
  KB = !!th && th.length !== 1;
zB({
  target: "String",
  stat: !0,
  arity: 1,
  forced: KB
}, {
  fromCodePoint: function fromCodePoint(t) {
    for (var e = [], n = arguments.length, o = 0, i; n > o;) {
      if (i = +arguments[o++], WB(i, 1114111) !== i) throw new HB(i + " is not a valid code point");
      e[o] = i < 65536 ? eh(i) : eh(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
    }
    return YB(e, "");
  }
});
var GB = T,
  Mm = k,
  VB = Se,
  XB = ee,
  rh = Q,
  QB = ne,
  nh = Mm([].push),
  qB = Mm([].join);
GB({
  target: "String",
  stat: !0
}, {
  raw: function raw(t) {
    var e = VB(XB(t).raw),
      n = QB(e);
    if (!n) return "";
    for (var o = arguments.length, i = [], a = 0;;) {
      if (nh(i, rh(e[a++])), a === n) return qB(i, "");
      a < o && nh(i, rh(arguments[a]));
    }
  }
});
var JB = T,
  ZB = Fc.codeAt;
JB({
  target: "String",
  proto: !0
}, {
  codePointAt: function codePointAt(t) {
    return ZB(this, t);
  }
});
var ek = T,
  tk = k,
  rk = re,
  nk = Ee,
  ok = Q,
  ik = B,
  ak = tk("".charAt),
  sk = ik(function () {
    return "𠮷".at(-2) !== "\uD842";
  });
ek({
  target: "String",
  proto: !0,
  forced: sk
}, {
  at: function at(t) {
    var e = ok(rk(this)),
      n = e.length,
      o = nk(t),
      i = o >= 0 ? o : n + o;
    return i < 0 || i >= n ? void 0 : ak(e, i);
  }
});
var lk = J,
  ck = ze,
  uk = q,
  fk = uk("match"),
  Qc = function Qc(r) {
    var t;
    return lk(r) && ((t = r[fk]) !== void 0 ? !!t : ck(r) === "RegExp");
  },
  dk = Qc,
  hk = TypeError,
  qc = function qc(r) {
    if (dk(r)) throw new hk("The method doesn't accept regular expressions");
    return r;
  },
  vk = q,
  gk = vk("match"),
  Jc = function Jc(r) {
    var t = /./;
    try {
      "/./"[r](t);
    } catch (e) {
      try {
        return t[gk] = !1, "/./"[r](t);
      } catch (n) {}
    }
    return !1;
  },
  pk = T,
  mk = to,
  yk = rt.f,
  xk = Ut,
  oh = Q,
  $k = qc,
  bk = re,
  Sk = Jc,
  wk = mk("".slice),
  Tk = Math.min,
  Dm = Sk("endsWith"),
  Ak = !Dm && !!function () {
    var r = yk(String.prototype, "endsWith");
    return r && !r.writable;
  }();
pk({
  target: "String",
  proto: !0,
  forced: !Ak && !Dm
}, {
  endsWith: function endsWith(t) {
    var e = oh(bk(this));
    $k(t);
    var n = arguments.length > 1 ? arguments[1] : void 0,
      o = e.length,
      i = n === void 0 ? o : Tk(xk(n), o),
      a = oh(t);
    return wk(e, i - a.length, i) === a;
  }
});
var Ik = T,
  Ck = k,
  Ek = qc,
  Rk = re,
  ih = Q,
  Ok = Jc,
  _k = Ck("".indexOf);
Ik({
  target: "String",
  proto: !0,
  forced: !Ok("includes")
}, {
  includes: function includes(t) {
    return !!~_k(ih(Rk(this)), ih(Ek(t)), arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Pk = T,
  Nk = k,
  Fk = re,
  Bk = Q,
  ah = Nk("".charCodeAt);
Pk({
  target: "String",
  proto: !0
}, {
  isWellFormed: function isWellFormed() {
    for (var t = Bk(Fk(this)), e = t.length, n = 0; n < e; n++) {
      var o = ah(t, n);
      if ((o & 63488) === 55296 && (o >= 56320 || ++n >= e || (ah(t, n) & 64512) !== 56320)) return !1;
    }
    return !0;
  }
});
var sh = K,
  lh = Ue,
  kk = Xc,
  ch = B,
  jm = q,
  Lk = vr,
  Mk = jm("species"),
  bs = RegExp.prototype,
  ua = function ua(r, t, e, n) {
    var o = jm(r),
      i = !ch(function () {
        var c = {};
        return c[o] = function () {
          return 7;
        }, ""[r](c) !== 7;
      }),
      a = i && !ch(function () {
        var c = !1,
          u = /a/;
        return r === "split" && (u = {}, u.constructor = {}, u.constructor[Mk] = function () {
          return u;
        }, u.flags = "", u[o] = /./[o]), u.exec = function () {
          return c = !0, null;
        }, u[o](""), !c;
      });
    if (!i || !a || e) {
      var s = /./[o],
        l = t(o, ""[r], function (c, u, f, d, g) {
          var p = u.exec;
          return p === kk || p === bs.exec ? i && !g ? {
            done: !0,
            value: sh(s, u, f, d)
          } : {
            done: !0,
            value: sh(c, f, u, d)
          } : {
            done: !1
          };
        });
      lh(String.prototype, r, l[0]), lh(bs, o, l[1]);
    }
    n && Lk(bs[o], "sham", !0);
  },
  Dk = Fc.charAt,
  fa = function fa(r, t, e) {
    return t + (e ? Dk(r, t).length : 1);
  },
  uh = K,
  jk = me,
  zk = X,
  Uk = ze,
  Wk = Xc,
  Hk = TypeError,
  fo = function fo(r, t) {
    var e = r.exec;
    if (zk(e)) {
      var n = uh(e, r, t);
      return n !== null && jk(n), n;
    }
    if (Uk(r) === "RegExp") return uh(Wk, r, t);
    throw new Hk("RegExp#exec called on incompatible receiver");
  },
  Yk = K,
  Kk = ua,
  Gk = me,
  Vk = qe,
  Xk = Ut,
  Ss = Q,
  Qk = re,
  qk = Tt,
  Jk = fa,
  fh = fo;
Kk("match", function (r, t, e) {
  return [function (o) {
    var i = Qk(this),
      a = Vk(o) ? void 0 : qk(o, r);
    return a ? Yk(a, o, i) : new RegExp(o)[r](Ss(i));
  }, function (n) {
    var o = Gk(this),
      i = Ss(n),
      a = e(t, o, i);
    if (a.done) return a.value;
    if (!o.global) return fh(o, i);
    var s = o.unicode;
    o.lastIndex = 0;
    for (var l = [], c = 0, u; (u = fh(o, i)) !== null;) {
      var f = Ss(u[0]);
      l[c] = f, f === "" && (o.lastIndex = Jk(i, Xk(o.lastIndex), s)), c++;
    }
    return c === 0 ? null : l;
  }];
});
var Zk = K,
  eL = de,
  tL = wt,
  rL = Bm,
  dh = RegExp.prototype,
  zm = function zm(r) {
    var t = r.flags;
    return t === void 0 && !("flags" in dh) && !eL(r, "flags") && tL(dh, r) ? Zk(rL, r) : t;
  },
  nL = T,
  oL = K,
  Um = to,
  iL = vp,
  Vo = Ji,
  hh = re,
  Wm = Ut,
  Un = Q,
  aL = me,
  sL = qe,
  lL = ze,
  cL = Qc,
  Hm = zm,
  uL = Tt,
  fL = Ue,
  dL = B,
  hL = q,
  vL = oa,
  gL = fa,
  pL = fo,
  Ym = Wt,
  mL = Vg,
  Ni = hL("matchAll"),
  Km = "RegExp String",
  Gm = Km + " Iterator",
  yL = Ym.set,
  xL = Ym.getterFor(Gm),
  vh = RegExp.prototype,
  $L = TypeError,
  Nl = Um("".indexOf),
  Fi = Um("".matchAll),
  ws = !!Fi && !dL(function () {
    Fi("a", /./);
  }),
  bL = iL(function (t, e, n, o) {
    yL(this, {
      type: Gm,
      regexp: t,
      string: e,
      global: n,
      unicode: o,
      done: !1
    });
  }, Km, function () {
    var t = xL(this);
    if (t.done) return Vo(void 0, !0);
    var e = t.regexp,
      n = t.string,
      o = pL(e, n);
    return o === null ? (t.done = !0, Vo(void 0, !0)) : t.global ? (Un(o[0]) === "" && (e.lastIndex = gL(n, Wm(e.lastIndex), t.unicode)), Vo(o, !1)) : (t.done = !0, Vo(o, !1));
  }),
  Vm = function Vm(r) {
    var t = aL(this),
      e = Un(r),
      n = vL(t, RegExp),
      o = Un(Hm(t)),
      i,
      a,
      s;
    return i = new n(n === RegExp ? t.source : t, o), a = !!~Nl(o, "g"), s = !!~Nl(o, "u"), i.lastIndex = Wm(t.lastIndex), new bL(i, e, a, s);
  };
nL({
  target: "String",
  proto: !0,
  forced: ws
}, {
  matchAll: function matchAll(t) {
    var e = hh(this),
      n,
      o,
      i,
      a;
    if (sL(t)) {
      if (ws) return Fi(e, t);
    } else {
      if (cL(t) && (n = Un(hh(Hm(t))), !~Nl(n, "g"))) throw new $L("`.matchAll` does not allow non-global regexes");
      if (ws) return Fi(e, t);
      if (i = uL(t, Ni), i === void 0 && mL && lL(t) === "RegExp" && (i = Vm), i) return oL(i, t, e);
    }
    return o = Un(e), a = new RegExp(t, "g"), a[Ni](o);
  }
});
Ni in vh || fL(vh, Ni, Vm);
var SL = Ee,
  wL = Q,
  TL = re,
  AL = RangeError,
  da = function da(t) {
    var e = wL(TL(this)),
      n = "",
      o = SL(t);
    if (o < 0 || o === 1 / 0) throw new AL("Wrong number of repetitions");
    for (; o > 0; (o >>>= 1) && (e += e)) o & 1 && (n += e);
    return n;
  },
  Xm = k,
  IL = Ut,
  gh = Q,
  CL = da,
  EL = re,
  RL = Xm(CL),
  OL = Xm("".slice),
  _L = Math.ceil,
  ph = function ph(r) {
    return function (t, e, n) {
      var o = gh(EL(t)),
        i = IL(e),
        a = o.length,
        s = n === void 0 ? " " : gh(n),
        l,
        c;
      return i <= a || s === "" ? o : (l = i - a, c = RL(s, _L(l / s.length)), c.length > l && (c = OL(c, 0, l)), r ? o + c : c + o);
    };
  },
  Qm = {
    start: ph(!1),
    end: ph(!0)
  },
  PL = St,
  qm = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(PL),
  NL = T,
  FL = Qm.end,
  BL = qm;
NL({
  target: "String",
  proto: !0,
  forced: BL
}, {
  padEnd: function padEnd(t) {
    return FL(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var kL = T,
  LL = Qm.start,
  ML = qm;
kL({
  target: "String",
  proto: !0,
  forced: ML
}, {
  padStart: function padStart(t) {
    return LL(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var DL = T,
  jL = da;
DL({
  target: "String",
  proto: !0
}, {
  repeat: jL
});
var Zc = k,
  zL = ee,
  UL = Math.floor,
  Ts = Zc("".charAt),
  WL = Zc("".replace),
  As = Zc("".slice),
  HL = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  YL = /\$([$&'`]|\d{1,2})/g,
  Jm = function Jm(r, t, e, n, o, i) {
    var a = e + r.length,
      s = n.length,
      l = YL;
    return o !== void 0 && (o = zL(o), l = HL), WL(i, l, function (c, u) {
      var f;
      switch (Ts(u, 0)) {
        case "$":
          return "$";
        case "&":
          return r;
        case "`":
          return As(t, 0, e);
        case "'":
          return As(t, a);
        case "<":
          f = o[As(u, 1, -1)];
          break;
        default:
          var d = +u;
          if (d === 0) return c;
          if (d > s) {
            var g = UL(d / 10);
            return g === 0 ? c : g <= s ? n[g - 1] === void 0 ? Ts(u, 1) : n[g - 1] + Ts(u, 1) : c;
          }
          f = n[d - 1];
      }
      return f === void 0 ? "" : f;
    });
  },
  KL = ia,
  mh = K,
  ha = k,
  GL = ua,
  VL = B,
  XL = me,
  QL = X,
  qL = qe,
  JL = Ee,
  ZL = Ut,
  wr = Q,
  eM = re,
  tM = fa,
  rM = Tt,
  nM = Jm,
  oM = fo,
  iM = q,
  Fl = iM("replace"),
  aM = Math.max,
  sM = Math.min,
  lM = ha([].concat),
  Is = ha([].push),
  yh = ha("".indexOf),
  xh = ha("".slice),
  cM = function cM(r) {
    return r === void 0 ? r : String(r);
  },
  uM = function () {
    return "a".replace(/./, "$0") === "$0";
  }(),
  $h = function () {
    return /./[Fl] ? /./[Fl]("a", "$0") === "" : !1;
  }(),
  fM = !VL(function () {
    var r = /./;
    return r.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "".replace(r, "$<a>") !== "7";
  });
GL("replace", function (r, t, e) {
  var n = $h ? "$" : "$0";
  return [function (i, a) {
    var s = eM(this),
      l = qL(i) ? void 0 : rM(i, Fl);
    return l ? mh(l, i, s, a) : mh(t, wr(s), i, a);
  }, function (o, i) {
    var a = XL(this),
      s = wr(o);
    if (typeof i == "string" && yh(i, n) === -1 && yh(i, "$<") === -1) {
      var l = e(t, a, s, i);
      if (l.done) return l.value;
    }
    var c = QL(i);
    c || (i = wr(i));
    var u = a.global,
      f;
    u && (f = a.unicode, a.lastIndex = 0);
    for (var d = [], g; g = oM(a, s), !(g === null || (Is(d, g), !u));) {
      var p = wr(g[0]);
      p === "" && (a.lastIndex = tM(s, ZL(a.lastIndex), f));
    }
    for (var x = "", b = 0, S = 0; S < d.length; S++) {
      g = d[S];
      for (var $ = wr(g[0]), y = aM(sM(JL(g.index), s.length), 0), m = [], w, R = 1; R < g.length; R++) Is(m, cM(g[R]));
      var I = g.groups;
      if (c) {
        var C = lM([$], m, y, s);
        I !== void 0 && Is(C, I), w = wr(KL(i, void 0, C));
      } else w = nM($, s, y, m, I, i);
      y >= b && (x += xh(s, b, y) + w, b = y + $.length);
    }
    return x + xh(s, b);
  }];
}, !fM || !uM || $h);
var dM = T,
  hM = K,
  eu = k,
  bh = re,
  vM = X,
  gM = qe,
  pM = Qc,
  wn = Q,
  mM = Tt,
  yM = zm,
  xM = Jm,
  $M = q,
  bM = $M("replace"),
  SM = TypeError,
  Cs = eu("".indexOf);
eu("".replace);
var Sh = eu("".slice),
  wM = Math.max;
dM({
  target: "String",
  proto: !0
}, {
  replaceAll: function replaceAll(t, e) {
    var n = bh(this),
      o,
      i,
      a,
      s,
      l,
      c,
      u,
      f,
      d,
      g,
      p = 0,
      x = "";
    if (!gM(t)) {
      if (o = pM(t), o && (i = wn(bh(yM(t))), !~Cs(i, "g"))) throw new SM("`.replaceAll` does not allow non-global regexes");
      if (a = mM(t, bM), a) return hM(a, t, n, e);
    }
    for (s = wn(n), l = wn(t), c = vM(e), c || (e = wn(e)), u = l.length, f = wM(1, u), d = Cs(s, l); d !== -1;) g = c ? wn(e(l, d, s)) : xM(l, s, d, [], void 0, e), x += Sh(s, p, d) + g, p = d + u, d = d + f > s.length ? -1 : Cs(s, l, d + f);
    return p < s.length && (x += Sh(s, p)), x;
  }
});
var Zm = Object.is || function (t, e) {
    return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
  },
  TM = K,
  AM = ua,
  IM = me,
  CM = qe,
  EM = re,
  wh = Zm,
  Th = Q,
  RM = Tt,
  OM = fo;
AM("search", function (r, t, e) {
  return [function (o) {
    var i = EM(this),
      a = CM(o) ? void 0 : RM(o, r);
    return a ? TM(a, o, i) : new RegExp(o)[r](Th(i));
  }, function (n) {
    var o = IM(this),
      i = Th(n),
      a = e(t, o, i);
    if (a.done) return a.value;
    var s = o.lastIndex;
    wh(s, 0) || (o.lastIndex = 0);
    var l = OM(o, i);
    return wh(o.lastIndex, s) || (o.lastIndex = s), l === null ? -1 : l.index;
  }];
});
var Es = K,
  ey = k,
  _M = ua,
  PM = me,
  NM = qe,
  FM = re,
  BM = oa,
  kM = fa,
  LM = Ut,
  Ah = Q,
  MM = Tt,
  Ih = fo,
  DM = km,
  jM = B,
  Tr = DM.UNSUPPORTED_Y,
  zM = 4294967295,
  UM = Math.min,
  Rs = ey([].push),
  Os = ey("".slice),
  WM = !jM(function () {
    var r = /(?:)/,
      t = r.exec;
    r.exec = function () {
      return t.apply(this, arguments);
    };
    var e = "ab".split(r);
    return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
  }),
  Ch = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
_M("split", function (r, t, e) {
  var n = "0".split(void 0, 0).length ? function (o, i) {
    return o === void 0 && i === 0 ? [] : Es(t, this, o, i);
  } : t;
  return [function (i, a) {
    var s = FM(this),
      l = NM(i) ? void 0 : MM(i, r);
    return l ? Es(l, i, s, a) : Es(n, Ah(s), i, a);
  }, function (o, i) {
    var a = PM(this),
      s = Ah(o);
    if (!Ch) {
      var l = e(n, a, s, i, n !== t);
      if (l.done) return l.value;
    }
    var c = BM(a, RegExp),
      u = a.unicode,
      f = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Tr ? "g" : "y"),
      d = new c(Tr ? "^(?:" + a.source + ")" : a, f),
      g = i === void 0 ? zM : i >>> 0;
    if (g === 0) return [];
    if (s.length === 0) return Ih(d, s) === null ? [s] : [];
    for (var p = 0, x = 0, b = []; x < s.length;) {
      d.lastIndex = Tr ? 0 : x;
      var S = Ih(d, Tr ? Os(s, x) : s),
        $;
      if (S === null || ($ = UM(LM(d.lastIndex + (Tr ? x : 0)), s.length)) === p) x = kM(s, x, u);else {
        if (Rs(b, Os(s, p, x)), b.length === g) return b;
        for (var y = 1; y <= S.length - 1; y++) if (Rs(b, S[y]), b.length === g) return b;
        x = p = $;
      }
    }
    return Rs(b, Os(s, p)), b;
  }];
}, Ch || !WM, Tr);
var HM = T,
  YM = to,
  KM = rt.f,
  GM = Ut,
  Eh = Q,
  VM = qc,
  XM = re,
  QM = Jc,
  qM = YM("".slice),
  JM = Math.min,
  ty = QM("startsWith"),
  ZM = !ty && !!function () {
    var r = KM(String.prototype, "startsWith");
    return r && !r.writable;
  }();
HM({
  target: "String",
  proto: !0,
  forced: !ZM && !ty
}, {
  startsWith: function startsWith(t) {
    var e = Eh(XM(this));
    VM(t);
    var n = GM(JM(arguments.length > 1 ? arguments[1] : void 0, e.length)),
      o = Eh(t);
    return qM(e, n, n + o.length) === o;
  }
});
var eD = T,
  tD = k,
  rD = re,
  Rh = Ee,
  nD = Q,
  oD = tD("".slice),
  iD = Math.max,
  aD = Math.min,
  sD = !"".substr || "ab".substr(-1) !== "b";
eD({
  target: "String",
  proto: !0,
  forced: sD
}, {
  substr: function substr(t, e) {
    var n = nD(rD(this)),
      o = n.length,
      i = Rh(t),
      a,
      s;
    return i === 1 / 0 && (i = 0), i < 0 && (i = iD(o + i, 0)), a = e === void 0 ? o : Rh(e), a <= 0 || a === 1 / 0 ? "" : (s = aD(i + a, o), i >= s ? "" : oD(n, i, s));
  }
});
var lD = T,
  ry = K,
  tu = k,
  cD = re,
  uD = Q,
  fD = B,
  dD = Array,
  _s = tu("".charAt),
  Oh = tu("".charCodeAt),
  hD = tu([].join),
  Bl = "".toWellFormed,
  vD = "�",
  _h = Bl && fD(function () {
    return ry(Bl, 1) !== "1";
  });
lD({
  target: "String",
  proto: !0,
  forced: _h
}, {
  toWellFormed: function toWellFormed() {
    var t = uD(cD(this));
    if (_h) return ry(Bl, t);
    for (var e = t.length, n = dD(e), o = 0; o < e; o++) {
      var i = Oh(t, o);
      (i & 63488) !== 55296 ? n[o] = _s(t, o) : i >= 56320 || o + 1 >= e || (Oh(t, o + 1) & 64512) !== 56320 ? n[o] = vD : (n[o] = _s(t, o), n[++o] = _s(t, o));
    }
    return hD(n, "");
  }
});
var va = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
  gD = k,
  pD = re,
  mD = Q,
  kl = va,
  Ph = gD("".replace),
  yD = RegExp("^[" + kl + "]+"),
  xD = RegExp("(^|[^" + kl + "])[" + kl + "]+$"),
  Ps = function Ps(r) {
    return function (t) {
      var e = mD(pD(t));
      return r & 1 && (e = Ph(e, yD, "")), r & 2 && (e = Ph(e, xD, "$1")), e;
    };
  },
  fn = {
    start: Ps(1),
    end: Ps(2),
    trim: Ps(3)
  },
  $D = Qi.PROPER,
  bD = B,
  Nh = va,
  Fh = "​᠎",
  ru = function ru(r) {
    return bD(function () {
      return !!Nh[r]() || Fh[r]() !== Fh || $D && Nh[r].name !== r;
    });
  },
  SD = T,
  wD = fn.trim,
  TD = ru;
SD({
  target: "String",
  proto: !0,
  forced: TD("trim")
}, {
  trim: function trim() {
    return wD(this);
  }
});
var AD = fn.start,
  ID = ru,
  ny = ID("trimStart") ? function () {
    return AD(this);
  } : "".trimStart,
  CD = T,
  Bh = ny;
CD({
  target: "String",
  proto: !0,
  name: "trimStart",
  forced: "".trimLeft !== Bh
}, {
  trimLeft: Bh
});
var ED = T,
  kh = ny;
ED({
  target: "String",
  proto: !0,
  name: "trimStart",
  forced: "".trimStart !== kh
}, {
  trimStart: kh
});
var RD = fn.end,
  OD = ru,
  oy = OD("trimEnd") ? function () {
    return RD(this);
  } : "".trimEnd,
  _D = T,
  Lh = oy;
_D({
  target: "String",
  proto: !0,
  name: "trimEnd",
  forced: "".trimRight !== Lh
}, {
  trimRight: Lh
});
var PD = T,
  Mh = oy;
PD({
  target: "String",
  proto: !0,
  name: "trimEnd",
  forced: "".trimEnd !== Mh
}, {
  trimEnd: Mh
});
var ND = k,
  FD = re,
  Dh = Q,
  BD = /"/g,
  kD = ND("".replace),
  We = function We(r, t, e, n) {
    var o = Dh(FD(r)),
      i = "<" + t;
    return e !== "" && (i += " " + e + '="' + kD(Dh(n), BD, "&quot;") + '"'), i + ">" + o + "</" + t + ">";
  },
  LD = B,
  He = function He(r) {
    return LD(function () {
      var t = ""[r]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3;
    });
  },
  MD = T,
  DD = We,
  jD = He;
MD({
  target: "String",
  proto: !0,
  forced: jD("anchor")
}, {
  anchor: function anchor(t) {
    return DD(this, "a", "name", t);
  }
});
var zD = T,
  UD = We,
  WD = He;
zD({
  target: "String",
  proto: !0,
  forced: WD("big")
}, {
  big: function big() {
    return UD(this, "big", "", "");
  }
});
var HD = T,
  YD = We,
  KD = He;
HD({
  target: "String",
  proto: !0,
  forced: KD("blink")
}, {
  blink: function blink() {
    return YD(this, "blink", "", "");
  }
});
var GD = T,
  VD = We,
  XD = He;
GD({
  target: "String",
  proto: !0,
  forced: XD("bold")
}, {
  bold: function bold() {
    return VD(this, "b", "", "");
  }
});
var QD = T,
  qD = We,
  JD = He;
QD({
  target: "String",
  proto: !0,
  forced: JD("fixed")
}, {
  fixed: function fixed() {
    return qD(this, "tt", "", "");
  }
});
var ZD = T,
  ej = We,
  tj = He;
ZD({
  target: "String",
  proto: !0,
  forced: tj("fontcolor")
}, {
  fontcolor: function fontcolor(t) {
    return ej(this, "font", "color", t);
  }
});
var rj = T,
  nj = We,
  oj = He;
rj({
  target: "String",
  proto: !0,
  forced: oj("fontsize")
}, {
  fontsize: function fontsize(t) {
    return nj(this, "font", "size", t);
  }
});
var ij = T,
  aj = We,
  sj = He;
ij({
  target: "String",
  proto: !0,
  forced: sj("italics")
}, {
  italics: function italics() {
    return aj(this, "i", "", "");
  }
});
var lj = T,
  cj = We,
  uj = He;
lj({
  target: "String",
  proto: !0,
  forced: uj("link")
}, {
  link: function link(t) {
    return cj(this, "a", "href", t);
  }
});
var fj = T,
  dj = We,
  hj = He;
fj({
  target: "String",
  proto: !0,
  forced: hj("small")
}, {
  small: function small() {
    return dj(this, "small", "", "");
  }
});
var vj = T,
  gj = We,
  pj = He;
vj({
  target: "String",
  proto: !0,
  forced: pj("strike")
}, {
  strike: function strike() {
    return gj(this, "strike", "", "");
  }
});
var mj = T,
  yj = We,
  xj = He;
mj({
  target: "String",
  proto: !0,
  forced: xj("sub")
}, {
  sub: function sub() {
    return yj(this, "sub", "", "");
  }
});
var $j = T,
  bj = We,
  Sj = He;
$j({
  target: "String",
  proto: !0,
  forced: Sj("sup")
}, {
  sup: function sup() {
    return bj(this, "sup", "", "");
  }
});
var wj = nt;
wj.String;
var Tj = k,
  ga = Tj(1 .valueOf),
  Aj = T,
  iy = Vg,
  Ij = Y,
  ay = U,
  sy = nt,
  ly = k,
  Cj = qi,
  jh = de,
  Ej = _p,
  Rj = wt,
  Oj = Kn,
  cy = Zg,
  _j = B,
  Pj = sn.f,
  Nj = rt.f,
  Fj = we.f,
  Bj = ga,
  kj = fn.trim,
  pa = "Number",
  Hr = ay[pa];
sy[pa];
var nu = Hr.prototype,
  Lj = ay.TypeError,
  Mj = ly("".slice),
  Xo = ly("".charCodeAt),
  Dj = function Dj(r) {
    var t = cy(r, "number");
    return typeof t == "bigint" ? t : jj(t);
  },
  jj = function jj(r) {
    var t = cy(r, "number"),
      e,
      n,
      o,
      i,
      a,
      s,
      l,
      c;
    if (Oj(t)) throw new Lj("Cannot convert a Symbol value to a number");
    if (typeof t == "string" && t.length > 2) {
      if (t = kj(t), e = Xo(t, 0), e === 43 || e === 45) {
        if (n = Xo(t, 2), n === 88 || n === 120) return NaN;
      } else if (e === 48) {
        switch (Xo(t, 1)) {
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
        for (a = Mj(t, 2), s = a.length, l = 0; l < s; l++) if (c = Xo(a, l), c < 48 || c > i) return NaN;
        return parseInt(a, o);
      }
    }
    return +t;
  },
  ou = Cj(pa, !Hr(" 0o1") || !Hr("0b1") || Hr("+0x1")),
  zj = function zj(r) {
    return Rj(nu, r) && _j(function () {
      Bj(r);
    });
  },
  _ma = function ma(t) {
    var e = arguments.length < 1 ? 0 : Hr(Dj(t));
    return zj(this) ? Ej(Object(e), this, _ma) : e;
  };
_ma.prototype = nu;
ou && !iy && (nu.constructor = _ma);
Aj({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: ou
}, {
  Number: _ma
});
var Uj = function Uj(r, t) {
  for (var e = Ij ? Pj(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0, o; e.length > n; n++) jh(t, o = e[n]) && !jh(r, o) && Fj(r, o, Nj(t, o));
};
(ou || iy) && Uj(sy[pa], Hr);
var Wj = T;
Wj({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  EPSILON: Math.pow(2, -52)
});
var Hj = U,
  Yj = Hj.isFinite,
  Kj = Number.isFinite || function (t) {
    return typeof t == "number" && Yj(t);
  },
  Gj = T,
  Vj = Kj;
Gj({
  target: "Number",
  stat: !0
}, {
  isFinite: Vj
});
var Xj = J,
  Qj = Math.floor,
  uy = Number.isInteger || function (t) {
    return !Xj(t) && isFinite(t) && Qj(t) === t;
  },
  qj = T,
  Jj = uy;
qj({
  target: "Number",
  stat: !0
}, {
  isInteger: Jj
});
var Zj = T;
Zj({
  target: "Number",
  stat: !0
}, {
  isNaN: function isNaN(t) {
    return t !== t;
  }
});
var ez = T,
  tz = uy,
  rz = Math.abs;
ez({
  target: "Number",
  stat: !0
}, {
  isSafeInteger: function isSafeInteger(t) {
    return tz(t) && rz(t) <= 9007199254740991;
  }
});
var nz = T;
nz({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  MAX_SAFE_INTEGER: 9007199254740991
});
var oz = T;
oz({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  MIN_SAFE_INTEGER: -9007199254740991
});
var fy = U,
  iz = B,
  az = k,
  sz = Q,
  lz = fn.trim,
  cz = va,
  uz = az("".charAt),
  Bi = fy.parseFloat,
  zh = fy.Symbol,
  Uh = zh && zh.iterator,
  fz = 1 / Bi(cz + "-0") !== -1 / 0 || Uh && !iz(function () {
    Bi(Object(Uh));
  }),
  dz = fz ? function (t) {
    var e = lz(sz(t)),
      n = Bi(e);
    return n === 0 && uz(e, 0) === "-" ? -0 : n;
  } : Bi,
  hz = T,
  Wh = dz;
hz({
  target: "Number",
  stat: !0,
  forced: Number.parseFloat !== Wh
}, {
  parseFloat: Wh
});
var dy = U,
  vz = B,
  gz = k,
  pz = Q,
  mz = fn.trim,
  Hh = va,
  Bn = dy.parseInt,
  Yh = dy.Symbol,
  Kh = Yh && Yh.iterator,
  hy = /^[+-]?0x/i,
  yz = gz(hy.exec),
  xz = Bn(Hh + "08") !== 8 || Bn(Hh + "0x16") !== 22 || Kh && !vz(function () {
    Bn(Object(Kh));
  }),
  $z = xz ? function (t, e) {
    var n = mz(pz(t));
    return Bn(n, e >>> 0 || (yz(hy, n) ? 16 : 10));
  } : Bn,
  bz = T,
  Gh = $z;
bz({
  target: "Number",
  stat: !0,
  forced: Number.parseInt !== Gh
}, {
  parseInt: Gh
});
var Sz = Math.log,
  wz = Math.LOG10E,
  Tz = Math.log10 || function (t) {
    return Sz(t) * wz;
  },
  Az = T,
  iu = k,
  Iz = Ee,
  Cz = ga,
  Ez = da,
  Rz = Tz,
  Ll = B,
  Oz = RangeError,
  Vh = String,
  _z = isFinite,
  Pz = Math.abs,
  Nz = Math.floor,
  Xh = Math.pow,
  Fz = Math.round,
  ct = iu(1 .toExponential),
  Bz = iu(Ez),
  Qh = iu("".slice),
  vy = ct(-69e-12, 4) === "-6.9000e-11" && ct(1.255, 2) === "1.25e+0" && ct(12345, 3) === "1.235e+4" && ct(25, 0) === "3e+1",
  kz = function kz() {
    return Ll(function () {
      ct(1, 1 / 0);
    }) && Ll(function () {
      ct(1, -1 / 0);
    });
  },
  Lz = function Lz() {
    return !Ll(function () {
      ct(1 / 0, 1 / 0), ct(NaN, 1 / 0);
    });
  },
  Mz = !vy || !kz() || !Lz();
Az({
  target: "Number",
  proto: !0,
  forced: Mz
}, {
  toExponential: function toExponential(t) {
    var e = Cz(this);
    if (t === void 0) return ct(e);
    var n = Iz(t);
    if (!_z(e)) return String(e);
    if (n < 0 || n > 20) throw new Oz("Incorrect fraction digits");
    if (vy) return ct(e, n);
    var o = "",
      i,
      a,
      s,
      l;
    if (e < 0 && (o = "-", e = -e), e === 0) a = 0, i = Bz("0", n + 1);else {
      var c = Rz(e);
      a = Nz(c);
      var u = Xh(10, a - n),
        f = Fz(e / u);
      2 * e >= (2 * f + 1) * u && (f += 1), f >= Xh(10, n + 1) && (f /= 10, a += 1), i = Vh(f);
    }
    return n !== 0 && (i = Qh(i, 0, 1) + "." + Qh(i, 1)), a === 0 ? (s = "+", l = "0") : (s = a > 0 ? "+" : "-", l = Vh(Pz(a))), i += "e" + s + l, o + i;
  }
});
var Dz = T,
  au = k,
  jz = Ee,
  zz = ga,
  Uz = da,
  qh = B,
  Wz = RangeError,
  gy = String,
  py = Math.floor,
  Ml = au(Uz),
  Jh = au("".slice),
  Tn = au(1 .toFixed),
  _Ur = function Ur(r, t, e) {
    return t === 0 ? e : t % 2 === 1 ? _Ur(r, t - 1, e * r) : _Ur(r * r, t / 2, e);
  },
  Hz = function Hz(r) {
    for (var t = 0, e = r; e >= 4096;) t += 12, e /= 4096;
    for (; e >= 2;) t += 1, e /= 2;
    return t;
  },
  Ar = function Ar(r, t, e) {
    for (var n = -1, o = e; ++n < 6;) o += t * r[n], r[n] = o % 1e7, o = py(o / 1e7);
  },
  Ns = function Ns(r, t) {
    for (var e = 6, n = 0; --e >= 0;) n += r[e], r[e] = py(n / t), n = n % t * 1e7;
  },
  Zh = function Zh(r) {
    for (var t = 6, e = ""; --t >= 0;) if (e !== "" || t === 0 || r[t] !== 0) {
      var n = gy(r[t]);
      e = e === "" ? n : e + Ml("0", 7 - n.length) + n;
    }
    return e;
  },
  Yz = qh(function () {
    return Tn(8e-5, 3) !== "0.000" || Tn(.9, 0) !== "1" || Tn(1.255, 2) !== "1.25" || Tn(0xde0b6b3a7640080, 0) !== "1000000000000000128";
  }) || !qh(function () {
    Tn({});
  });
Dz({
  target: "Number",
  proto: !0,
  forced: Yz
}, {
  toFixed: function toFixed(t) {
    var e = zz(this),
      n = jz(t),
      o = [0, 0, 0, 0, 0, 0],
      i = "",
      a = "0",
      s,
      l,
      c,
      u;
    if (n < 0 || n > 20) throw new Wz("Incorrect fraction digits");
    if (e !== e) return "NaN";
    if (e <= -1e21 || e >= 1e21) return gy(e);
    if (e < 0 && (i = "-", e = -e), e > 1e-21) if (s = Hz(e * _Ur(2, 69, 1)) - 69, l = s < 0 ? e * _Ur(2, -s, 1) : e / _Ur(2, s, 1), l *= 4503599627370496, s = 52 - s, s > 0) {
      for (Ar(o, 0, l), c = n; c >= 7;) Ar(o, 1e7, 0), c -= 7;
      for (Ar(o, _Ur(10, c, 1), 0), c = s - 1; c >= 23;) Ns(o, 1 << 23), c -= 23;
      Ns(o, 1 << c), Ar(o, 1, 1), Ns(o, 2), a = Zh(o);
    } else Ar(o, 0, l), Ar(o, 1 << -s, 0), a = Zh(o) + Ml("0", n);
    return n > 0 ? (u = a.length, a = i + (u <= n ? "0." + Ml("0", n - u) + a : Jh(a, 0, u - n) + "." + Jh(a, u - n))) : a = i + a, a;
  }
});
var Kz = T,
  Gz = k,
  ev = B,
  tv = ga,
  ki = Gz(1 .toPrecision),
  Vz = ev(function () {
    return ki(1, void 0) !== "1";
  }) || !ev(function () {
    ki({});
  });
Kz({
  target: "Number",
  proto: !0,
  forced: Vz
}, {
  toPrecision: function toPrecision(t) {
    return t === void 0 ? ki(tv(this)) : ki(tv(this), t);
  }
});
var Xz = nt;
Xz.Number;
var su = {},
  Qz = q;
su.f = Qz;
var rv = nt,
  qz = de,
  Jz = su,
  Zz = we.f,
  Le = function Le(r) {
    var t = rv.Symbol || (rv.Symbol = {});
    qz(t, r) || Zz(t, r, {
      value: Jz.f(r)
    });
  },
  e4 = K,
  t4 = Pe,
  r4 = q,
  n4 = Ue,
  my = function my() {
    var r = t4("Symbol"),
      t = r && r.prototype,
      e = t && t.valueOf,
      n = r4("toPrimitive");
    t && !t[n] && n4(t, n, function (o) {
      return e4(e, this);
    }, {
      arity: 1
    });
  },
  ya = T,
  ho = U,
  lu = K,
  o4 = k,
  Xr = Y,
  Qr = nn,
  i4 = B,
  be = de,
  a4 = wt,
  Dl = me,
  xa = Se,
  cu = an,
  s4 = Q,
  jl = hr,
  qr = dr,
  yy = Vn,
  l4 = sn,
  xy = Zi,
  c4 = qn,
  $y = rt,
  by = we,
  u4 = Vi,
  Sy = Qn,
  Fs = Ue,
  f4 = cn,
  uu = rn,
  d4 = Xi,
  wy = Gn,
  nv = Gi,
  h4 = q,
  v4 = su,
  g4 = Le,
  p4 = my,
  m4 = At,
  Ty = Wt,
  $a = Kt.forEach,
  Fe = d4("hidden"),
  ba = "Symbol",
  Wn = "prototype",
  y4 = Ty.set,
  ov = Ty.getterFor(ba),
  Qe = Object[Wn],
  or = ho.Symbol,
  Pn = or && or[Wn],
  x4 = ho.RangeError,
  $4 = ho.TypeError,
  Bs = ho.QObject,
  Ay = $y.f,
  ir = by.f,
  Iy = xy.f,
  b4 = Sy.f,
  Cy = o4([].push),
  bt = uu("symbols"),
  vo = uu("op-symbols"),
  S4 = uu("wks"),
  zl = !Bs || !Bs[Wn] || !Bs[Wn].findChild,
  Ey = function Ey(r, t, e) {
    var n = Ay(Qe, t);
    n && delete Qe[t], ir(r, t, e), n && r !== Qe && ir(Qe, t, n);
  },
  Ul = Xr && i4(function () {
    return qr(ir({}, "a", {
      get: function get() {
        return ir(this, "a", {
          value: 7
        }).a;
      }
    })).a !== 7;
  }) ? Ey : ir,
  ks = function ks(r, t) {
    var e = bt[r] = qr(Pn);
    return y4(e, {
      type: ba,
      tag: r,
      description: t
    }), Xr || (e.description = t), e;
  },
  _Sa = function Sa(t, e, n) {
    t === Qe && _Sa(vo, e, n), Dl(t);
    var o = cu(e);
    return Dl(n), be(bt, o) ? (n.enumerable ? (be(t, Fe) && t[Fe][o] && (t[Fe][o] = !1), n = qr(n, {
      enumerable: jl(0, !1)
    })) : (be(t, Fe) || ir(t, Fe, jl(1, qr(null))), t[Fe][o] = !0), Ul(t, o, n)) : ir(t, o, n);
  },
  fu = function fu(t, e) {
    Dl(t);
    var n = xa(e),
      o = yy(n).concat(_y(n));
    return $a(o, function (i) {
      (!Xr || lu(Wl, n, i)) && _Sa(t, i, n[i]);
    }), t;
  },
  w4 = function w4(t, e) {
    return e === void 0 ? qr(t) : fu(qr(t), e);
  },
  Wl = function Wl(t) {
    var e = cu(t),
      n = lu(b4, this, e);
    return this === Qe && be(bt, e) && !be(vo, e) ? !1 : n || !be(this, e) || !be(bt, e) || be(this, Fe) && this[Fe][e] ? n : !0;
  },
  Ry = function Ry(t, e) {
    var n = xa(t),
      o = cu(e);
    if (!(n === Qe && be(bt, o) && !be(vo, o))) {
      var i = Ay(n, o);
      return i && be(bt, o) && !(be(n, Fe) && n[Fe][o]) && (i.enumerable = !0), i;
    }
  },
  Oy = function Oy(t) {
    var e = Iy(xa(t)),
      n = [];
    return $a(e, function (o) {
      !be(bt, o) && !be(wy, o) && Cy(n, o);
    }), n;
  },
  _y = function _y(r) {
    var t = r === Qe,
      e = Iy(t ? vo : xa(r)),
      n = [];
    return $a(e, function (o) {
      be(bt, o) && (!t || be(Qe, o)) && Cy(n, bt[o]);
    }), n;
  };
Qr || (or = function or() {
  if (a4(Pn, this)) throw new $4("Symbol is not a constructor");
  var t = !arguments.length || arguments[0] === void 0 ? void 0 : s4(arguments[0]),
    e = nv(t),
    _n2 = function n(o) {
      var i = this === void 0 ? ho : this;
      i === Qe && lu(_n2, vo, o), be(i, Fe) && be(i[Fe], e) && (i[Fe][e] = !1);
      var a = jl(1, o);
      try {
        Ul(i, e, a);
      } catch (s) {
        if (!(s instanceof x4)) throw s;
        Ey(i, e, a);
      }
    };
  return Xr && zl && Ul(Qe, e, {
    configurable: !0,
    set: _n2
  }), ks(e, t);
}, Pn = or[Wn], Fs(Pn, "toString", function () {
  return ov(this).tag;
}), Fs(or, "withoutSetter", function (r) {
  return ks(nv(r), r);
}), Sy.f = Wl, by.f = _Sa, u4.f = fu, $y.f = Ry, l4.f = xy.f = Oy, c4.f = _y, v4.f = function (r) {
  return ks(h4(r), r);
}, Xr && (f4(Pn, "description", {
  configurable: !0,
  get: function get() {
    return ov(this).description;
  }
}), Fs(Qe, "propertyIsEnumerable", Wl, {
  unsafe: !0
})));
ya({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: !Qr,
  sham: !Qr
}, {
  Symbol: or
});
$a(yy(S4), function (r) {
  g4(r);
});
ya({
  target: ba,
  stat: !0,
  forced: !Qr
}, {
  useSetter: function useSetter() {
    zl = !0;
  },
  useSimple: function useSimple() {
    zl = !1;
  }
});
ya({
  target: "Object",
  stat: !0,
  forced: !Qr,
  sham: !Xr
}, {
  create: w4,
  defineProperty: _Sa,
  defineProperties: fu,
  getOwnPropertyDescriptor: Ry
});
ya({
  target: "Object",
  stat: !0,
  forced: !Qr
}, {
  getOwnPropertyNames: Oy
});
p4();
m4(or, ba);
wy[Fe] = !0;
var T4 = nn,
  Py = T4 && !!Symbol["for"] && !!Symbol.keyFor,
  A4 = T,
  I4 = Pe,
  C4 = de,
  E4 = Q,
  Ny = rn,
  R4 = Py,
  Ls = Ny("string-to-symbol-registry"),
  O4 = Ny("symbol-to-string-registry");
A4({
  target: "Symbol",
  stat: !0,
  forced: !R4
}, {
  "for": function _for(r) {
    var t = E4(r);
    if (C4(Ls, t)) return Ls[t];
    var e = I4("Symbol")(t);
    return Ls[t] = e, O4[e] = t, e;
  }
});
var _4 = T,
  P4 = de,
  N4 = Kn,
  F4 = on,
  B4 = rn,
  k4 = Py,
  iv = B4("symbol-to-string-registry");
_4({
  target: "Symbol",
  stat: !0,
  forced: !k4
}, {
  keyFor: function keyFor(t) {
    if (!N4(t)) throw new TypeError(F4(t) + " is not a symbol");
    if (P4(iv, t)) return iv[t];
  }
});
var L4 = k,
  av = Yt,
  M4 = X,
  sv = ze,
  D4 = Q,
  lv = L4([].push),
  j4 = function j4(r) {
    if (M4(r)) return r;
    if (av(r)) {
      for (var t = r.length, e = [], n = 0; n < t; n++) {
        var o = r[n];
        typeof o == "string" ? lv(e, o) : (typeof o == "number" || sv(o) === "Number" || sv(o) === "String") && lv(e, D4(o));
      }
      var i = e.length,
        a = !0;
      return function (s, l) {
        if (a) return a = !1, l;
        if (av(this)) return l;
        for (var c = 0; c < i; c++) if (e[c] === s) return l;
      };
    }
  },
  z4 = T,
  Fy = Pe,
  By = ia,
  U4 = K,
  go = k,
  ky = B,
  cv = X,
  uv = Kn,
  Ly = ln,
  W4 = j4,
  H4 = nn,
  Y4 = String,
  jt = Fy("JSON", "stringify"),
  Qo = go(/./.exec),
  fv = go("".charAt),
  K4 = go("".charCodeAt),
  G4 = go("".replace),
  V4 = go(1 .toString),
  X4 = /[\uD800-\uDFFF]/g,
  dv = /^[\uD800-\uDBFF]$/,
  hv = /^[\uDC00-\uDFFF]$/,
  vv = !H4 || ky(function () {
    var r = Fy("Symbol")("stringify detection");
    return jt([r]) !== "[null]" || jt({
      a: r
    }) !== "{}" || jt(Object(r)) !== "{}";
  }),
  gv = ky(function () {
    return jt("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || jt("\uDEAD") !== "\"\\udead\"";
  }),
  Q4 = function Q4(r, t) {
    var e = Ly(arguments),
      n = W4(t);
    if (!(!cv(n) && (r === void 0 || uv(r)))) return e[1] = function (o, i) {
      if (cv(n) && (i = U4(n, this, Y4(o), i)), !uv(i)) return i;
    }, By(jt, null, e);
  },
  q4 = function q4(r, t, e) {
    var n = fv(e, t - 1),
      o = fv(e, t + 1);
    return Qo(dv, r) && !Qo(hv, o) || Qo(hv, r) && !Qo(dv, n) ? "\\u" + V4(K4(r, 0), 16) : r;
  };
jt && z4({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: vv || gv
}, {
  stringify: function stringify(t, e, n) {
    var o = Ly(arguments),
      i = By(vv ? Q4 : jt, null, o);
    return gv && typeof i == "string" ? G4(i, X4, q4) : i;
  }
});
var J4 = T,
  Z4 = nn,
  eU = B,
  My = qn,
  tU = ee,
  rU = !Z4 || eU(function () {
    My.f(1);
  });
J4({
  target: "Object",
  stat: !0,
  forced: rU
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(t) {
    var e = My.f;
    return e ? e(tU(t)) : [];
  }
});
var pv = Y,
  nU = k,
  oU = K,
  iU = B,
  Ms = Vn,
  aU = qn,
  sU = Qn,
  lU = ee,
  cU = tn,
  Ir = Object.assign,
  mv = Object.defineProperty,
  uU = nU([].concat),
  fU = !Ir || iU(function () {
    if (pv && Ir({
      b: 1
    }, Ir(mv({}, "a", {
      enumerable: !0,
      get: function get() {
        mv(this, "b", {
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
    }), Ir({}, r)[e] !== 7 || Ms(Ir({}, t)).join("") !== n;
  }) ? function (t, e) {
    for (var n = lU(t), o = arguments.length, i = 1, a = aU.f, s = sU.f; o > i;) for (var l = cU(arguments[i++]), c = a ? uU(Ms(l), a(l)) : Ms(l), u = c.length, f = 0, d; u > f;) d = c[f++], (!pv || oU(s, l, d)) && (n[d] = l[d]);
    return n;
  } : Ir,
  dU = T,
  yv = fU;
dU({
  target: "Object",
  stat: !0,
  arity: 2,
  forced: Object.assign !== yv
}, {
  assign: yv
});
var hU = T,
  vU = Y,
  gU = dr;
hU({
  target: "Object",
  stat: !0,
  sham: !vU
}, {
  create: gU
});
var pU = T,
  mU = Y,
  xv = we.f;
pU({
  target: "Object",
  stat: !0,
  forced: Object.defineProperty !== xv,
  sham: !mU
}, {
  defineProperty: xv
});
var yU = T,
  xU = Y,
  $v = Vi.f;
yU({
  target: "Object",
  stat: !0,
  forced: Object.defineProperties !== $v,
  sham: !xU
}, {
  defineProperties: $v
});
var Dy = Y,
  $U = B,
  jy = k,
  bU = gr,
  SU = Vn,
  wU = Se,
  TU = Qn.f,
  zy = jy(TU),
  AU = jy([].push),
  IU = Dy && $U(function () {
    var r = Object.create(null);
    return r[2] = 2, !zy(r, 2);
  }),
  bv = function bv(r) {
    return function (t) {
      for (var e = wU(t), n = SU(e), o = IU && bU(e) === null, i = n.length, a = 0, s = [], l; i > a;) l = n[a++], (!Dy || (o ? l in e : zy(e, l))) && AU(s, r ? [l, e[l]] : e[l]);
      return s;
    };
  },
  Uy = {
    entries: bv(!0),
    values: bv(!1)
  },
  CU = T,
  EU = Uy.entries;
CU({
  target: "Object",
  stat: !0
}, {
  entries: function entries(t) {
    return EU(t);
  }
});
var RU = T,
  OU = ea,
  _U = B,
  PU = J,
  NU = eo.onFreeze,
  Hl = Object.freeze,
  FU = _U(function () {
    Hl(1);
  });
RU({
  target: "Object",
  stat: !0,
  forced: FU,
  sham: !OU
}, {
  freeze: function freeze(t) {
    return Hl && PU(t) ? Hl(NU(t)) : t;
  }
});
var BU = T,
  kU = vt,
  LU = $r;
BU({
  target: "Object",
  stat: !0
}, {
  fromEntries: function fromEntries(t) {
    var e = {};
    return kU(t, function (n, o) {
      LU(e, n, o);
    }, {
      AS_ENTRIES: !0
    }), e;
  }
});
var MU = T,
  DU = B,
  jU = Se,
  Wy = rt.f,
  Hy = Y,
  zU = !Hy || DU(function () {
    Wy(1);
  });
MU({
  target: "Object",
  stat: !0,
  forced: zU,
  sham: !Hy
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
    return Wy(jU(t), e);
  }
});
var UU = T,
  WU = Y,
  HU = up,
  YU = Se,
  KU = rt,
  GU = $r;
UU({
  target: "Object",
  stat: !0,
  sham: !WU
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
    for (var e = YU(t), n = KU.f, o = HU(e), i = {}, a = 0, s, l; o.length > a;) l = n(e, s = o[a++]), l !== void 0 && GU(i, s, l);
    return i;
  }
});
var VU = T,
  XU = B,
  QU = Zi.f,
  qU = XU(function () {
    return !Object.getOwnPropertyNames(1);
  });
VU({
  target: "Object",
  stat: !0,
  forced: qU
}, {
  getOwnPropertyNames: QU
});
var JU = T,
  ZU = B,
  e3 = ee,
  Yy = gr,
  t3 = fp,
  r3 = ZU(function () {
    Yy(1);
  });
JU({
  target: "Object",
  stat: !0,
  forced: r3,
  sham: !t3
}, {
  getPrototypeOf: function getPrototypeOf(t) {
    return Yy(e3(t));
  }
});
var n3 = T,
  o3 = Pe,
  i3 = k,
  a3 = he,
  s3 = re,
  l3 = an,
  c3 = vt,
  u3 = B,
  Sv = Object.groupBy,
  f3 = o3("Object", "create"),
  d3 = i3([].push),
  h3 = !Sv || u3(function () {
    return Sv("ab", function (r) {
      return r;
    }).a.length !== 1;
  });
n3({
  target: "Object",
  stat: !0,
  forced: h3
}, {
  groupBy: function groupBy(t, e) {
    s3(t), a3(e);
    var n = f3(null),
      o = 0;
    return c3(t, function (i) {
      var a = l3(e(i, o++));
      a in n ? d3(n[a], i) : n[a] = [i];
    }), n;
  }
});
var v3 = T,
  g3 = de;
v3({
  target: "Object",
  stat: !0
}, {
  hasOwn: g3
});
var p3 = T,
  m3 = Zm;
p3({
  target: "Object",
  stat: !0
}, {
  is: m3
});
var y3 = T,
  wv = Tp;
y3({
  target: "Object",
  stat: !0,
  forced: Object.isExtensible !== wv
}, {
  isExtensible: wv
});
var x3 = T,
  $3 = B,
  b3 = J,
  S3 = ze,
  Ky = Tc,
  Yl = Object.isFrozen,
  w3 = Ky || $3(function () {
    Yl(1);
  });
x3({
  target: "Object",
  stat: !0,
  forced: w3
}, {
  isFrozen: function isFrozen(t) {
    return !b3(t) || Ky && S3(t) === "ArrayBuffer" ? !0 : Yl ? Yl(t) : !1;
  }
});
var T3 = T,
  A3 = B,
  I3 = J,
  C3 = ze,
  Gy = Tc,
  Kl = Object.isSealed,
  E3 = Gy || A3(function () {
    Kl(1);
  });
T3({
  target: "Object",
  stat: !0,
  forced: E3
}, {
  isSealed: function isSealed(t) {
    return !I3(t) || Gy && C3(t) === "ArrayBuffer" ? !0 : Kl ? Kl(t) : !1;
  }
});
var R3 = T,
  O3 = ee,
  Vy = Vn,
  _3 = B,
  P3 = _3(function () {
    Vy(1);
  });
R3({
  target: "Object",
  stat: !0,
  forced: P3
}, {
  keys: function keys(t) {
    return Vy(O3(t));
  }
});
var N3 = T,
  F3 = J,
  B3 = eo.onFreeze,
  k3 = ea,
  L3 = B,
  Gl = Object.preventExtensions,
  M3 = L3(function () {
    Gl(1);
  });
N3({
  target: "Object",
  stat: !0,
  forced: M3,
  sham: !k3
}, {
  preventExtensions: function preventExtensions(t) {
    return Gl && F3(t) ? Gl(B3(t)) : t;
  }
});
var D3 = Y,
  j3 = cn,
  z3 = J,
  U3 = pp,
  W3 = ee,
  H3 = re,
  Tv = Object.getPrototypeOf,
  Av = Object.setPrototypeOf,
  Iv = Object.prototype,
  Cv = "__proto__";
if (D3 && Tv && Av && !(Cv in Iv)) try {
  j3(Iv, Cv, {
    configurable: !0,
    get: function get() {
      return Tv(W3(this));
    },
    set: function set(t) {
      var e = H3(this);
      U3(t) && z3(e) && Av(e, t);
    }
  });
} catch (r) {}
var Y3 = T,
  K3 = J,
  G3 = eo.onFreeze,
  V3 = ea,
  X3 = B,
  Vl = Object.seal,
  Q3 = X3(function () {
    Vl(1);
  });
Y3({
  target: "Object",
  stat: !0,
  forced: Q3,
  sham: !V3
}, {
  seal: function seal(t) {
    return Vl && K3(t) ? Vl(G3(t)) : t;
  }
});
var q3 = T,
  J3 = Zn;
q3({
  target: "Object",
  stat: !0
}, {
  setPrototypeOf: J3
});
var Z3 = T,
  e5 = Uy.values;
Z3({
  target: "Object",
  stat: !0
}, {
  values: function values(t) {
    return e5(t);
  }
});
var t5 = U,
  r5 = B,
  Ev = Pm,
  wa = !r5(function () {
    if (!(Ev && Ev < 535)) {
      var r = Math.random();
      __defineSetter__.call(null, r, function () {}), delete t5[r];
    }
  }),
  n5 = T,
  o5 = Y,
  i5 = wa,
  a5 = he,
  s5 = ee,
  l5 = we;
o5 && n5({
  target: "Object",
  proto: !0,
  forced: i5
}, {
  __defineGetter__: function __defineGetter__(t, e) {
    l5.f(s5(this), t, {
      get: a5(e),
      enumerable: !0,
      configurable: !0
    });
  }
});
var c5 = T,
  u5 = Y,
  f5 = wa,
  d5 = he,
  h5 = ee,
  v5 = we;
u5 && c5({
  target: "Object",
  proto: !0,
  forced: f5
}, {
  __defineSetter__: function __defineSetter__(t, e) {
    v5.f(h5(this), t, {
      set: d5(e),
      enumerable: !0,
      configurable: !0
    });
  }
});
var g5 = T,
  p5 = Y,
  m5 = wa,
  y5 = ee,
  x5 = an,
  $5 = gr,
  b5 = rt.f;
p5 && g5({
  target: "Object",
  proto: !0,
  forced: m5
}, {
  __lookupGetter__: function __lookupGetter__(t) {
    var e = y5(this),
      n = x5(t),
      o;
    do if (o = b5(e, n)) return o.get; while (e = $5(e));
  }
});
var S5 = T,
  w5 = Y,
  T5 = wa,
  A5 = ee,
  I5 = an,
  C5 = gr,
  E5 = rt.f;
w5 && S5({
  target: "Object",
  proto: !0,
  forced: T5
}, {
  __lookupSetter__: function __lookupSetter__(t) {
    var e = A5(this),
      n = I5(t),
      o;
    do if (o = E5(e, n)) return o.set; while (e = C5(e));
  }
});
var R5 = U,
  O5 = At;
O5(R5.JSON, "JSON", !0);
var _5 = At;
_5(Math, "Math", !0);
var P5 = T,
  N5 = U,
  F5 = At;
P5({
  global: !0
}, {
  Reflect: {}
});
F5(N5.Reflect, "Reflect", !0);
var B5 = nt;
B5.Object;
var k5 = Le;
k5("asyncIterator");
var L5 = T,
  M5 = Y,
  D5 = U,
  qo = k,
  j5 = de,
  z5 = X,
  U5 = wt,
  W5 = Q,
  H5 = cn,
  Y5 = bc,
  mt = D5.Symbol,
  Jt = mt && mt.prototype;
if (M5 && z5(mt) && (!("description" in Jt) || mt().description !== void 0)) {
  var Rv = {},
    Jo = function Jo() {
      var t = arguments.length < 1 || arguments[0] === void 0 ? void 0 : W5(arguments[0]),
        e = U5(Jt, this) ? new mt(t) : t === void 0 ? mt() : mt(t);
      return t === "" && (Rv[e] = !0), e;
    };
  Y5(Jo, mt), Jo.prototype = Jt, Jt.constructor = Jo;
  var K5 = String(mt("description detection")) === "Symbol(description detection)",
    G5 = qo(Jt.valueOf),
    V5 = qo(Jt.toString),
    X5 = /^Symbol\((.*)\)[^)]+$/,
    Q5 = qo("".replace),
    q5 = qo("".slice);
  H5(Jt, "description", {
    configurable: !0,
    get: function get() {
      var t = G5(this);
      if (j5(Rv, t)) return "";
      var e = V5(t),
        n = K5 ? q5(e, 7, -1) : Q5(e, X5, "$1");
      return n === "" ? void 0 : n;
    }
  }), L5({
    global: !0,
    constructor: !0,
    forced: !0
  }, {
    Symbol: Jo
  });
}
var J5 = Le;
J5("hasInstance");
var Z5 = Le;
Z5("isConcatSpreadable");
var eW = Le;
eW("iterator");
var tW = Le;
tW("match");
var rW = Le;
rW("matchAll");
var nW = Le;
nW("replace");
var oW = Le;
oW("search");
var iW = Le;
iW("species");
var aW = Le;
aW("split");
var sW = Le,
  lW = my;
sW("toPrimitive");
lW();
var cW = Pe,
  uW = Le,
  fW = At;
uW("toStringTag");
fW(cW("Symbol"), "Symbol");
var dW = Le;
dW("unscopables");
var hW = nt;
hW.Symbol;
var Xy = k,
  vW = he,
  gW = J,
  pW = de,
  Ov = ln,
  mW = Yn,
  Qy = Function,
  yW = Xy([].concat),
  xW = Xy([].join),
  Ds = {},
  $W = function $W(r, t, e) {
    if (!pW(Ds, t)) {
      for (var n = [], o = 0; o < t; o++) n[o] = "a[" + o + "]";
      Ds[t] = Qy("C,a", "return new C(" + xW(n, ",") + ")");
    }
    return Ds[t](r, e);
  },
  bW = mW ? Qy.bind : function (t) {
    var e = vW(this),
      n = e.prototype,
      o = Ov(arguments, 1),
      _i11 = function i() {
        var s = yW(o, Ov(arguments));
        return this instanceof _i11 ? $W(e, s.length, s) : e.apply(t, s);
      };
    return gW(n) && (_i11.prototype = n), _i11;
  },
  SW = T,
  _v = bW;
SW({
  target: "Function",
  proto: !0,
  forced: Function.bind !== _v
}, {
  bind: _v
});
var wW = Y,
  TW = Qi.EXISTS,
  qy = k,
  AW = cn,
  Jy = Function.prototype,
  IW = qy(Jy.toString),
  Zy = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
  CW = qy(Zy.exec),
  EW = "name";
wW && !TW && AW(Jy, EW, {
  configurable: !0,
  get: function get() {
    try {
      return CW(Zy, IW(this))[1];
    } catch (r) {
      return "";
    }
  }
});
var RW = X,
  Pv = J,
  OW = we,
  _W = wt,
  PW = q,
  NW = $c,
  js = PW("hasInstance"),
  Nv = Function.prototype;
js in Nv || OW.f(Nv, js, {
  value: NW(function (r) {
    if (!RW(this) || !Pv(r)) return !1;
    var t = this.prototype;
    return Pv(t) ? _W(t, r) : r instanceof this;
  }, js)
});
var FW = nt;
FW.Function; /**
             * es6-proxy-polyfill
             * @version 2.1.1
             * @author Ambit-Tsai <ambit_tsai@qq.com>
             * @license Apache-2.0
             * @see {@link https://github.com/ambit-tsai/es6-proxy-polyfill#readme}
             */
var BW = Object.defineProperty,
  Fv = Object.defineProperties;
Fv && ex(Fv);
function ex(r) {
  return typeof r == "function" && /\[native code\]/.test(r.toString());
}
ex(Object.setPrototypeOf) || Object.__proto__;
var Bv = "_$DX_DELEGATE";
function kW(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var e = t[Bv] || (t[Bv] = new Set());
  for (var n = 0, o = r.length; n < o; n++) {
    var i = r[n];
    e.has(i) || (e.add(i), t.addEventListener(i, LW));
  }
}
function LW(r) {
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
var MW = !1;
function tx() {
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
      var _loop4 = function _loop4() {
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
        _loop4();
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
var Xl;
function du() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
    _depth: window.history.length - 1
  }), ""), Xl = window.history.state._depth;
}
du();
function DW(r) {
  return _objectSpread(_objectSpread({}, r), {}, {
    _depth: window.history.state && window.history.state._depth
  });
}
function jW(r, t) {
  var e = !1;
  return function () {
    var n = Xl;
    du();
    var o = n == null ? null : Xl - n;
    if (e) {
      e = !1;
      return;
    }
    o && t(o) ? (e = !0, window.history.go(-o)) : r();
  };
}
var zW = /^(?:[a-z0-9]+:)?\/\//i,
  UW = /^\/+|(\/)\/+$/g,
  rx = "http://sr";
function kn(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = r.replace(UW, "$1");
  return e ? t || /^[?#]/.test(e) ? e : "/" + e : "";
}
function vi(r, t, e) {
  if (zW.test(t)) return;
  var n = kn(r),
    o = e && kn(e);
  var i = "";
  return !o || t.startsWith("/") ? i = n : o.toLowerCase().indexOf(n.toLowerCase()) !== 0 ? i = n + o : i = o, (i || "/") + kn(t, !i);
}
function WW(r, t) {
  if (r == null) throw new Error(t);
  return r;
}
function HW(r, t) {
  return kn(r).replace(/\/*(\*.*)?$/g, "") + kn(t);
}
function nx(r) {
  var t = {};
  return r.searchParams.forEach(function (e, n) {
    t[n] = e;
  }), t;
}
function ox(r, t, e) {
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
      f = function f(d) {
        return e === void 0 ? void 0 : e[d];
      };
    for (var d = 0; d < a; d++) {
      var g = i[d],
        p = l[d],
        x = g[0] === ":",
        b = x ? g.slice(1) : g;
      if (x && zs(p, f(b))) u.params[b] = p;else if (x || !zs(p, g)) return null;
      u.path += "/".concat(p);
    }
    if (o) {
      var _d4 = c ? l.slice(-c).join("/") : "";
      if (zs(_d4, f(o))) u.params[o] = _d4;else return null;
    }
    return u;
  };
}
function zs(r, t) {
  var e = function e(n) {
    return n.localeCompare(r, void 0, {
      sensitivity: "base"
    }) === 0;
  };
  return t === void 0 ? !0 : typeof t == "string" ? e(t) : typeof t == "function" ? t(r) : Array.isArray(t) ? t.some(e) : t instanceof RegExp ? t.test(r) : !1;
}
function YW(r) {
  var _r$pattern$split = r.pattern.split("/*", 2),
    _r$pattern$split2 = _slicedToArray(_r$pattern$split, 2),
    t = _r$pattern$split2[0],
    e = _r$pattern$split2[1],
    n = t.split("/").filter(Boolean);
  return n.reduce(function (o, i) {
    return o + (i.startsWith(":") ? 2 : 3);
  }, n.length - (e === void 0 ? 0 : 1));
}
function ix(r) {
  var t = new Map(),
    e = en();
  return new Proxy({}, {
    get: function get(n, o) {
      return t.has(o) || Sg(e, function () {
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
function hu(r) {
  var t = /(\/?\:[^\/]+)\?/.exec(r);
  if (!t) return [r];
  var e = r.slice(0, t.index),
    n = r.slice(t.index + t[0].length);
  var o = [e, e += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(n);) o.push(e += t[1]), n = n.slice(t[0].length);
  return hu(n).reduce(function (i, a) {
    return [].concat(_toConsumableArray(i), _toConsumableArray(o.map(function (s) {
      return s + a;
    })));
  }, []);
}
var KW = 100,
  ax = wg(),
  sx = wg(),
  vu = function vu() {
    return WW(Tg(ax), "<A> and 'use' router primitives can be only used inside a Route.");
  },
  gu = function gu() {
    return vu().navigatorFactory();
  },
  lx = function lx() {
    return vu().location;
  },
  GW = function GW(r, t) {
    var e = lx(),
      n = ie(function () {
        return hu(r()).map(function (o) {
          return ox(o, void 0, t);
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
  VW = function VW() {
    return vu().params;
  };
function XW(r) {
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
  return cx(r.path).reduce(function (l, c) {
    var _iterator17 = _createForOfIteratorHelper(hu(c)),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var u = _step17.value;
        var f = HW(t, u);
        var d = a ? f : f.split("/*", 1)[0];
        d = d.split("/").map(function (g) {
          return g.startsWith(":") || g.startsWith("*") ? g : encodeURIComponent(g);
        }).join("/"), l.push(_objectSpread(_objectSpread({}, s), {}, {
          originalPath: c,
          pattern: d,
          matcher: ox(d, !a, r.matchFilters)
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
function QW(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    routes: r,
    score: YW(r[r.length - 1]) * 1e4 - t,
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
function cx(r) {
  return Array.isArray(r) ? r : [r];
}
function ux(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var o = cx(r);
  for (var i = 0, a = o.length; i < a; i++) {
    var s = o[i];
    if (s && _typeof(s) == "object") {
      s.hasOwnProperty("path") || (s.path = "");
      var l = XW(s, t);
      var _iterator18 = _createForOfIteratorHelper(l),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var c = _step18.value;
          e.push(c);
          var u = Array.isArray(s.children) && s.children.length === 0;
          if (s.children && !u) ux(s.children, c.pattern, e, n);else {
            var f = QW(_toConsumableArray(e), n.length);
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
function kv(r, t) {
  for (var e = 0, n = r.length; e < n; e++) {
    var o = r[e].matcher(t);
    if (o) return o;
  }
  return [];
}
function qW(r, t) {
  var e = new URL(rx),
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
    query: ix(Zr(i, function () {
      return nx(n());
    }))
  };
}
var Ft;
function JW(r, t, e) {
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
    c = a.beforeLeave || tx(),
    u = vi("", n.base || "");
  if (u === void 0) throw new Error("".concat(u, " is not a valid base path"));
  u && !o().value && i({
    value: u,
    replace: !0,
    scroll: !1
  });
  var _V15 = V(!1),
    _V16 = _slicedToArray(_V15, 2),
    f = _V16[0],
    d = _V16[1],
    g = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              d(!0);
              _context13.prev = 1;
              _context13.next = 4;
              return Gx(_);
            case 4:
              _context13.prev = 4;
              d(!1);
              return _context13.finish(4);
            case 7:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[1,, 4, 7]]);
      }));
      return function g(_x15) {
        return _ref17.apply(this, arguments);
      };
    }(),
    _V17 = V(o().value),
    _V18 = _slicedToArray(_V17, 2),
    p = _V18[0],
    x = _V18[1],
    _V19 = V(o().state),
    _V20 = _slicedToArray(_V19, 2),
    b = _V20[0],
    S = _V20[1],
    $ = qW(p, b),
    y = [],
    m = V([]),
    w = ie(function () {
      return kv(t(), $.pathname);
    }),
    R = ix(function () {
      var _ = w(),
        L = {};
      for (var D = 0; D < _.length; D++) Object.assign(L, _[D].params);
      return L;
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
        return vi(u, _);
      }
    };
  return lt(function () {
    var _o3 = o(),
      _ = _o3.value,
      L = _o3.state;
    pe(function () {
      _ !== p() && g(function () {
        Ft = "native", x(_), S(L), m[1]([]);
      }).then(function () {
        Ft = void 0;
      });
    });
  }), {
    base: I,
    location: $,
    params: R,
    isRouting: f,
    renderPath: l,
    parsePath: s,
    navigatorFactory: A,
    matches: w,
    beforeLeave: c,
    preloadRoute: N,
    singleFlight: n.singleFlight === void 0 ? !0 : n.singleFlight,
    submissions: m
  };
  function C(_, L, D) {
    pe(function () {
      if (typeof L == "number") {
        L && (a.go ? a.go(L) : console.warn("Router integration does not support relative routing"));
        return;
      }
      var _replace$resolve$scro = _objectSpread({
          replace: !1,
          resolve: !0,
          scroll: !0
        }, D),
        M = _replace$resolve$scro.replace,
        z = _replace$resolve$scro.resolve,
        Z = _replace$resolve$scro.scroll,
        Te = _replace$resolve$scro.state,
        ve = z ? _.resolvePath(L) : vi("", L);
      if (ve === void 0) throw new Error("Path '".concat(L, "' is not a routable path"));
      if (y.length >= KW) throw new Error("Too many redirects");
      var Re = p();
      if ((ve !== Re || Te !== b()) && !MW) {
        if (c.confirm(ve, D)) {
          var ot = y.push({
            value: Re,
            replace: M,
            scroll: Z,
            state: b()
          });
          g(function () {
            Ft = "navigate", x(ve), S(Te), m[1]([]);
          }).then(function () {
            y.length === ot && (Ft = void 0, P({
              value: ve,
              state: Te
            }));
          });
        }
      }
    });
  }
  function A(_) {
    return _ = _ || Tg(sx) || I, function (L, D) {
      return C(_, L, D);
    };
  }
  function P(_) {
    var L = y[0];
    L && ((_.value !== L.value || _.state !== L.state) && i(_objectSpread(_objectSpread({}, _), {}, {
      replace: L.replace,
      scroll: L.scroll
    })), y.length = 0);
  }
  function N(_, L) {
    var D = kv(t(), _.pathname),
      M = Ft;
    Ft = "preload";
    var _loop5 = function _loop5() {
      var _D$z = D[z],
        Z = _D$z.route,
        Te = _D$z.params;
      Z.component && Z.component.preload && Z.component.preload();
      var ve = Z.load;
      L && ve && Sg(e(), function () {
        return ve({
          params: Te,
          location: {
            pathname: _.pathname,
            search: _.search,
            hash: _.hash,
            query: nx(_),
            state: null,
            key: ""
          },
          intent: "preload"
        });
      });
    };
    for (var z in D) {
      _loop5();
    }
    Ft = M;
  }
}
function ZW(r, t, e, n) {
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
    intent: Ft || "initial"
  }) : void 0;
  return {
    parent: t,
    pattern: s,
    path: u,
    outlet: function outlet() {
      return l ? Og(l, {
        params: a,
        location: i,
        data: f,
        get children() {
          return e();
        }
      }) : e();
    },
    resolvePath: function resolvePath(g) {
      return vi(o.path(), g, u());
    }
  };
}
var e8 = function e8(r) {
  return function (t) {
    var e = t.base,
      n = rc(function () {
        return t.children;
      }),
      o = ie(function () {
        return ux(n(), t.base || "");
      });
    var i;
    var a = JW(r, o, function () {
      return i;
    }, {
      base: e,
      singleFlight: t.singleFlight
    });
    return r.create && r.create(a), E(ax.Provider, {
      value: a,
      get children() {
        return E(t8, {
          routerState: a,
          get root() {
            return t.root;
          },
          get load() {
            return t.rootLoad;
          },
          get children() {
            return [uc(function () {
              return (i = en()) && null;
            }), E(r8, {
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
function t8(r) {
  var t = r.routerState.location,
    e = r.routerState.params,
    n = ie(function () {
      return r.load && pe(function () {
        return r.load({
          params: e,
          location: t,
          intent: "preload"
        });
      });
    });
  return E(Yi, {
    get when() {
      return r.root;
    },
    keyed: !0,
    get fallback() {
      return r.children;
    },
    children: function children(o) {
      return E(o, {
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
function r8(r) {
  var t = [];
  var e;
  var n = ie(Zr(r.routerState.matches, function (o, i, a) {
    var s = i && o.length === i.length;
    var l = [];
    var _loop6 = function _loop6(c) {
      var f = i && i[c],
        d = o[c];
      a && f && d.route.key === f.route.key ? l[c] = a[c] : (s = !1, t[c] && t[c](), Dt(function (g) {
        t[c] = g, l[c] = ZW(r.routerState, l[c - 1] || r.routerState.base, Lv(function () {
          return n()[c + 1];
        }), function () {
          return r.routerState.matches()[c];
        });
      }));
    };
    for (var c = 0, u = o.length; c < u; c++) {
      _loop6(c);
    }
    return t.splice(o.length).forEach(function (c) {
      return c();
    }), a && s ? a : (e = l[0], l);
  }));
  return Lv(function () {
    return n() && e;
  })();
}
var Lv = function Lv(r) {
    return function () {
      return E(Yi, {
        get when() {
          return r();
        },
        keyed: !0,
        children: function children(t) {
          return E(sx.Provider, {
            value: t,
            get children() {
              return t.outlet();
            }
          });
        }
      });
    };
  },
  Ae = function Ae(r) {
    var t = rc(function () {
      return r.children;
    });
    return oc(r, {
      get children() {
        return t();
      }
    });
  };
function n8(_ref18, e, n) {
  var _ref19 = _slicedToArray(_ref18, 2),
    r = _ref19[0],
    t = _ref19[1];
  return [e ? function () {
    return e(r());
  } : r, n ? function (o) {
    return t(n(o));
  } : t];
}
function o8(r) {
  if (r === "#") return null;
  try {
    return document.querySelector(r);
  } catch (t) {
    return null;
  }
}
function i8(r) {
  var t = !1;
  var e = function e(o) {
      return typeof o == "string" ? {
        value: o
      } : o;
    },
    n = n8(V(e(r.get()), {
      equals: function equals(o, i) {
        return o.value === i.value;
      }
    }), void 0, function (o) {
      return !t && r.set(o), o;
    });
  return r.init && ft(r.init(function () {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r.get();
    t = !0, n[1](e(o)), t = !1;
  })), e8({
    signal: n,
    create: r.create,
    utils: r.utils
  });
}
function a8(r, t, e) {
  return r.addEventListener(t, e), function () {
    return r.removeEventListener(t, e);
  };
}
function s8(r, t) {
  var e = o8("#".concat(r));
  e ? e.scrollIntoView() : t && window.scrollTo(0, 0);
}
var l8 = new Map();
function c8() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/_server";
  return function (n) {
    var o = n.base.path(),
      i = n.navigatorFactory(n.base);
    var a = {};
    function s(p) {
      return p.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function l(p) {
      if (p.defaultPrevented || p.button !== 0 || p.metaKey || p.altKey || p.ctrlKey || p.shiftKey) return;
      var x = p.composedPath().find(function (w) {
        return w instanceof Node && w.nodeName.toUpperCase() === "A";
      });
      if (!x || t && !x.hasAttribute("link")) return;
      var b = s(x),
        S = b ? x.href.baseVal : x.href;
      if ((b ? x.target.baseVal : x.target) || !S && !x.hasAttribute("state")) return;
      var y = (x.getAttribute("rel") || "").split(/\s+/);
      if (x.hasAttribute("download") || y && y.includes("external")) return;
      var m = b ? new URL(S, document.baseURI) : new URL(S);
      if (!(m.origin !== window.location.origin || o && m.pathname && !m.pathname.toLowerCase().startsWith(o.toLowerCase()))) return [x, m];
    }
    function c(p) {
      var x = l(p);
      if (!x) return;
      var _x16 = _slicedToArray(x, 2),
        b = _x16[0],
        S = _x16[1],
        $ = n.parsePath(S.pathname + S.search + S.hash),
        y = b.getAttribute("state");
      p.preventDefault(), i($, {
        resolve: !1,
        replace: b.hasAttribute("replace"),
        scroll: !b.hasAttribute("noscroll"),
        state: y && JSON.parse(y)
      });
    }
    function u(p) {
      var x = l(p);
      if (!x) return;
      var _x17 = _slicedToArray(x, 2),
        b = _x17[0],
        S = _x17[1];
      a[S.pathname] || n.preloadRoute(S, b.getAttribute("preload") !== "false");
    }
    function f(p) {
      var x = l(p);
      if (!x) return;
      var _x18 = _slicedToArray(x, 2),
        b = _x18[0],
        S = _x18[1];
      a[S.pathname] || (a[S.pathname] = setTimeout(function () {
        n.preloadRoute(S, b.getAttribute("preload") !== "false"), delete a[S.pathname];
      }, 200));
    }
    function d(p) {
      var x = l(p);
      if (!x) return;
      var _x19 = _slicedToArray(x, 2),
        b = _x19[1];
      a[b.pathname] && (clearTimeout(a[b.pathname]), delete a[b.pathname]);
    }
    function g(p) {
      if (p.defaultPrevented) return;
      var x = p.submitter && p.submitter.hasAttribute("formaction") ? p.submitter.getAttribute("formaction") : p.target.getAttribute("action");
      if (!x) return;
      if (!x.startsWith("https://action/")) {
        var S = new URL(x, rx);
        if (x = n.parsePath(S.pathname + S.search), !x.startsWith(e)) return;
      }
      if (p.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      var b = l8.get(x);
      if (b) {
        p.preventDefault();
        var _S5 = new FormData(p.target);
        p.submitter && p.submitter.name && _S5.append(p.submitter.name, p.submitter.value), b.call({
          r: n,
          f: p.target
        }, _S5);
      }
    }
    kW(["click", "submit"]), document.addEventListener("click", c), r && (document.addEventListener("mouseover", f), document.addEventListener("mouseout", d), document.addEventListener("focusin", u), document.addEventListener("touchstart", u)), document.addEventListener("submit", g), ft(function () {
      document.removeEventListener("click", c), r && (document.removeEventListener("mouseover", f), document.removeEventListener("mouseout", d), document.removeEventListener("focusin", u), document.removeEventListener("touchstart", u)), document.removeEventListener("submit", g);
    });
  };
}
function u8(r) {
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
function f8(r) {
  var t = function t() {
      return window.location.hash.slice(1);
    },
    e = tx();
  return i8({
    get: t,
    set: function set(_ref20) {
      var n = _ref20.value,
        o = _ref20.replace,
        i = _ref20.scroll,
        a = _ref20.state;
      o ? window.history.replaceState(DW(a), "", "#" + n) : window.location.hash = n;
      var s = n.indexOf("#"),
        l = s >= 0 ? n.slice(s + 1) : "";
      s8(l, i), du();
    },
    init: function init(n) {
      return a8(window, "hashchange", jW(n, function (o) {
        return !e.confirm(o && o < 0 ? o : t());
      }));
    },
    create: c8(r.preload, r.explicitLinks, r.actionBase),
    utils: {
      go: function go(n) {
        return window.history.go(n);
      },
      renderPath: function renderPath(n) {
        return "#".concat(n);
      },
      parsePath: u8,
      beforeLeave: e
    }
  })(r);
}
var d8 = !!o0,
  h8 = d8 ? function (r) {
    return en() ? ft(r) : r;
  } : ft;
function v8(r, t, e, n) {
  return r.addEventListener(t, e, n), h8(r.removeEventListener.bind(r, t, e, n));
}
function g8(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : en();
  var e = 0,
    n,
    o;
  return function () {
    return e++, ft(function () {
      e--, queueMicrotask(function () {
        !e && o && (o(), o = n = void 0);
      });
    }), o || Dt(function (i) {
      return n = r(o = i);
    }, t), n;
  };
}
var p8 = g8(function () {
  var _V21 = V(null),
    _V22 = _slicedToArray(_V21, 2),
    r = _V22[0],
    t = _V22[1];
  return v8(window, "keydown", function (e) {
    t(e), setTimeout(function () {
      return t(null);
    });
  }), r;
});
function Zo(r) {
  return typeof r == "function";
}
function m8(r) {
  return Array.isArray(r);
}
var ei = {
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
  _V23 = V([]),
  _V24 = _slicedToArray(_V23, 2),
  Li = _V24[0],
  y8 = _V24[1],
  x8 = function x8(r) {
    var t = p8();
    if (r) {
      var _loop7 = function _loop7() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i12], 2),
          e = _Object$entries3$_i[0],
          n = _Object$entries3$_i[1];
        m8(n) ? n.forEach(function (o) {
          ei[o] = e;
        }) : ei[n] = e;
      };
      for (var _i12 = 0, _Object$entries3 = Object.entries(r); _i12 < _Object$entries3.length; _i12++) {
        _loop7();
      }
    }
    return ar(Zr(ac, function (e, n) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var i = e;
      var a = [];
      for (; i;) i.states.has("focus") || (i.states.add("focus"), Zo(i.onFocus) && i.onFocus.call(i, e, n)), a.push(i), i = i.parent;
      return o.forEach(function (s) {
        a.includes(s) || (s.states.remove("focus"), Zo(s.onBlur) && s.onBlur.call(s, e, n));
      }), y8(a), a;
    }, {
      defer: !0
    })), ar(function () {
      var e = t();
      if (e) {
        var n = ei[e.key] || ei[e.keyCode];
        pe(function () {
          var o = Li();
          var i;
          var _iterator19 = _createForOfIteratorHelper(o),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var a = _step19.value;
              if (i = i || a, n) {
                var s = a["on".concat(n)];
                if (Zo(s) && s.call(a, e, a, i) === !0) break;
              } else console.log("Unhandled key event: ".concat(e.key || e.keyCode));
              if (Zo(a.onKeyPress) && a.onKeyPress.call(a, e, n, a, i) === !0) break;
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          return !1;
        });
      }
    }), Li;
  };
function $8(r, t) {
  var _e10, _e11;
  var e = t();
  var n, o, i, a;
  Array.isArray(e) ? e.length === 2 ? (n = a = e[0], o = i = e[1]) : e.length === 3 ? (n = e[0], o = i = e[1], a = e[2]) : (_e10 = e, _e11 = _slicedToArray(_e10, 4), n = _e11[0], i = _e11[1], a = _e11[2], o = _e11[3], _e10) : n = i = a = o = e, r.onBeforeLayout = function (s, l) {
    if (l) {
      r.width = r.children.reduce(function (f, d) {
        return f + (d.width || 0);
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
function b8() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = [];
  var e;
  for (e = 0; e < r.length; e++) {
    var n = r[e];
    if (typeof n == "string" && !n.includes("PAUSE-")) t.push(r[e]);else break;
  }
  return [t.join(",\b ")].concat(r.slice(e));
}
function Mv(r) {
  return new Promise(function (t) {
    setTimeout(t, r);
  });
}
function S8(r, t) {
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
function Ql(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var n = window.speechSynthesis,
    o = b8(Array.isArray(r) ? r : [r]),
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
            return Mv(u);
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
            return S8(c, a, t);
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
            return Mv(500 * (3 - f));
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
            _u2 = Ql(c(), t, !1);
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
            _u3 = Ql(c, t, !1);
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
var ti;
function w8(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
  return ti && ti.cancel(), ti = Ql(r, t), ti;
}
var T8 = function T8(r, t) {
  var e;
  var n = function n() {
    return clearTimeout(e);
  };
  return en() && ft(n), Object.assign(function () {
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
var ql,
  Ln = [],
  st,
  Jl = !1;
var A8 = 3e5;
function Dv(r, t) {
  var e = T8(r, t);
  var n;
  var o = function o(i) {
    n = i, e(i);
  };
  return o.flush = function () {
    e.clear(), r(n);
  }, o.clear = e.clear, o;
}
function An(r) {
  return r.id || r.name;
}
function I8() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!xe.onFocusChange || !xe.enabled) return;
  var t = r.every(function (i) {
      return !i.loading;
    }),
    e = r.filter(function (i) {
      return !Ln.includes(i);
    });
  if (ql(), !t && xe.onFocusChange) {
    xe.onFocusChange([]);
    return;
  }
  Ln = r.slice(0);
  var n = [],
    o = e.reduce(function (i, a) {
      return a.announce ? (i.push([An(a), "Announce", a.announce]), n.push(a.announce)) : a.title ? (i.push([An(a), "Title", a.title]), n.push(a.title)) : i.push([An(a), "No Announce", ""]), i;
    }, []);
  if (e.reverse().reduce(function (i, a) {
    return a.announceContext ? (i.push([An(a), "Context", a.announceContext]), n.push(a.announceContext)) : i.push([An(a), "No Context", ""]), i;
  }, o), xe.debug && console.table(o), n.length) return xe.speak(n.reduce(function (i, a) {
    return i.concat(a);
  }, []));
}
function C8(r) {
  if (!Jl) return st = w8(r);
}
var xe = {
    debug: !1,
    enabled: !0,
    cancel: function cancel() {
      st && st.cancel();
    },
    clearPrevFocus: function clearPrevFocus() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      Ln = Ln.slice(0, r), ql();
    },
    speak: function speak(r) {
      var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref22$append = _ref22.append,
        t = _ref22$append === void 0 ? !1 : _ref22$append,
        _ref22$notification = _ref22.notification,
        e = _ref22$notification === void 0 ? !1 : _ref22$notification;
      return xe.onFocusChange && xe.enabled && (xe.onFocusChange.flush(), t && st && st.active ? st.append(r) : (xe.cancel(), C8(r)), e && (Jl = !0, st == null || st.series["finally"](function () {
        Jl = !1, xe.refresh();
      })["catch"](console.error))), st;
    },
    refresh: function refresh() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      xe.clearPrevFocus(r), xe.onFocusChange && xe.onFocusChange(pe(function () {
        return Li();
      }));
    },
    setupTimers: function setupTimers() {
      var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref23$focusDebounce = _ref23.focusDebounce,
        r = _ref23$focusDebounce === void 0 ? 400 : _ref23$focusDebounce,
        _ref23$focusChangeTim = _ref23.focusChangeTimeout,
        t = _ref23$focusChangeTim === void 0 ? A8 : _ref23$focusChangeTim;
      xe.onFocusChange = Dv(I8, r), ql = Dv(function () {
        Ln = [];
      }, t);
    }
  },
  E8 = function E8() {
    return xe.setupTimers(), ar(Zr(Li, xe.onFocusChange, {
      defer: !0
    })), xe;
  };
function R8(r, t) {
  var e = xt.createTexture("ImageTexture", {
    src: r
  });
  return t.reduce(function (n, o) {
    var i = o.x,
      a = o.y,
      s = o.width,
      l = o.height;
    return n[o.name] = xt.createTexture("SubTexture", {
      texture: e,
      x: i,
      y: a,
      width: s,
      height: l
    }), n;
  }, {});
}
var _V25 = V(""),
  _V26 = _slicedToArray(_V25, 2),
  O8 = _V26[0],
  _8 = _V26[1],
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
            "delete": {
              title: null,
              icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
            }
          }
        }
      }
    }
  };
function P8() {
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
  return ar(Zr(O8, function (l) {
    s(l);
  }, {
    defer: !0
  })), E(H, {
    width: 1920,
    height: 1080,
    zIndex: -5,
    get children() {
      return [E(H, {
        ref: function ref(l) {
          var c = r;
          typeof c == "function" ? c(l) : r = l;
        },
        style: a
      }), E(H, {
        ref: function ref(l) {
          var c = t;
          typeof c == "function" ? c(l) : t = l;
        },
        style: a,
        alpha: 0
      }), E(H, {
        ref: function ref(l) {
          var c = e;
          typeof c == "function" ? c(l) : e = l;
        },
        src: "./assets/hero-mask-inverted.png",
        get color() {
          return ge(h.color.materialBrand);
        },
        width: 1920,
        height: 1080
      })];
    }
  });
}
var jv, zv, Uv, Wv, Hv, Yv, Kv, Gv, Vv, Xv, Qv, qv, Jv, Zv, eg, tg, rg, ng, og;
function ri(r) {
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
var N8 = ["focus", "disabled"],
  F8 = ["brand", "inverse", "neutral"];
function j(_ref21) {
  var r = _ref21.themeKeys,
    t = _ref21.base,
    e = _ref21.modes,
    n = _ref21.tones,
    o = _ref21.themeStyles,
    _ref21$modeKeys = _ref21.modeKeys,
    i = _ref21$modeKeys === void 0 ? N8 : _ref21$modeKeys,
    _ref21$toneKeys = _ref21.toneKeys,
    a = _ref21$toneKeys === void 0 ? F8 : _ref21$toneKeys;
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var l = function l(p, x, b) {
      var S = a.map(function ($) {
        var w, R;
        var y = {};
        return new Set([].concat.apply([], [(w = p == null ? void 0 : p[$]) != null ? w : {}, (R = x == null ? void 0 : x[$]) != null ? R : {}].map(Object.keys))).forEach(function (I) {
          var P;
          var C, A;
          i.includes(I) || (y[I] = (P = (C = x == null ? void 0 : x[$]) == null ? void 0 : C[I]) != null ? P : (A = p == null ? void 0 : p[$]) == null ? void 0 : A[I]);
        }), i.forEach(function (I) {
          var C, A;
          y[I] = _objectSpread(_objectSpread(_objectSpread({}, b[I]), (C = p == null ? void 0 : p[$]) == null ? void 0 : C[I]), (A = x == null ? void 0 : x[$]) == null ? void 0 : A[I]);
        }), [$, y];
      });
      return ri(S);
    },
    c = function c(p, x) {
      var b = i.map(function ($) {
        return [$, _objectSpread(_objectSpread({}, p == null ? void 0 : p[$]), x == null ? void 0 : x[$])];
      });
      return ri(b);
    },
    u = function u(p, x) {
      return _objectSpread(_objectSpread({}, p), x.base);
    },
    f = function f(p) {
      return ri(Object.entries(r).filter(function (_ref24) {
        var _ref25 = _slicedToArray(_ref24, 2),
          x = _ref25[0],
          b = _ref25[1];
        return p[b];
      }).map(function (_ref26) {
        var _ref27 = _slicedToArray(_ref26, 2),
          x = _ref27[0],
          b = _ref27[1];
        return [x, p[b]];
      }));
    },
    d = function d(p) {
      return ri(Object.entries(p).map(function (_ref28) {
        var _ref29 = _slicedToArray(_ref28, 2),
          b = _ref29[0],
          S = _ref29[1];
        var $ = f(S);
        return Object.entries(S).filter(function (_ref30) {
          var _ref31 = _slicedToArray(_ref30, 2),
            y = _ref31[0],
            m = _ref31[1];
          return i.includes(y);
        }).forEach(function (_ref32) {
          var _ref33 = _slicedToArray(_ref32, 2),
            y = _ref33[0],
            m = _ref33[1];
          $[y] = f(m);
        }), [b, $];
      }));
    };
  return function (p, x, b) {
    var S = d(o);
    s && console.log(S);
    var $ = u(p, S);
    s && console.log($);
    var y = c(x, S);
    s && console.log(y);
    var m = l(b, S, y);
    return s && console.log(m), {
      base: _objectSpread(_objectSpread({}, $), y),
      tones: m
    };
  }(t, e, n);
}
function Mi() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = arguments.length > 3 ? arguments[3] : undefined;
    var b, S, $, y;
    if (t.children.length === 0) return;
    var i = t.flexDirection === "row" ? "width" : "height",
      a = t.flexDirection === "row" ? "x" : "y",
      s = t.gap || 0,
      l = t.scroll || "auto",
      _B2 = B8(t),
      _B3 = _slicedToArray(_B2, 2),
      c = _B3[0],
      u = _B3[1];
    var f = (b = t[a]) != null ? b : 0;
    var d = (S = e == null ? void 0 : e[a]) != null ? S : 0,
      g = ($ = e == null ? void 0 : e[i]) != null ? $ : 0,
      p = o === void 0 ? "none" : n > o ? "positive" : "negative";
    var x = f;
    if (l === "auto") t.scrollIndex != null && t.scrollIndex >= 0 ? t.selected >= t.scrollIndex && (p === "positive" ? x = f - g - s : x = f + g + s) : (Math.abs(f) + u < c.position + c.size || d < Math.abs(f)) && (x = -d + r);else if (l === "always" || l === "edge" && p === "negative" && Math.abs(f) > d) x = -d + r;else if (l === "edge" && p === "positive" && Math.abs(f) + u < d + g) x = f - g - s;else if (l === "edge" && p === "none") {
      var m = 0,
        w,
        R;
      for (; m < t.children.length && Math.abs(f) + u < d + g;) w = t.children[m++], R = (y = w[i]) != null ? y : 0, f -= R + s;
      x = f;
    }
    a === "x" && t.x !== x ? t.x = x : a === "y" && t.y !== x && (t.y = x);
  };
}
function B8(r) {
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
function Mt() {
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
function fx() {
  if (!this || this.selected === void 0 || this.children.length === 0) return !1;
  var r = this.children[this.selected];
  for (; r != null && r.skipFocus;) this.selected++, r = this.children[this.selected];
  return r instanceof et ? (r.setFocus(), !0) : !1;
}
function Di(r) {
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
function k8() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var t = h.layout.screenW,
    e = h.layout.columnCount,
    n = h.layout.marginX,
    o = h.layout.gutterX;
  if (r < 1 || r > e) {
    console.error("Column expects a number between 1 & ".concat(e, ". Received ").concat(r));
    return;
  }
  var i = t - n * 2,
    a = (r - 1) * o;
  return (i - a) / r;
}
var _ref34 = (jv = h) == null ? void 0 : jv.componentConfig,
  _ref34$Artwork = _ref34.Artwork,
  _ref34$Artwork2 = _ref34$Artwork === void 0 ? {
    styles: {}
  } : _ref34$Artwork,
  eK = _ref34$Artwork2.defaultTone,
  L8 = _objectWithoutProperties(_ref34$Artwork2, ["defaultTone"]),
  M8 = {
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
    themeStyles: L8
  };
j(M8);
var _ref35 = (zv = h) == null ? void 0 : zv.componentConfig,
  _ref35$Badge = _ref35.Badge,
  _ref35$Badge2 = _ref35$Badge === void 0 ? {
    styles: {}
  } : _ref35$Badge,
  tK = _ref35$Badge2.defaultTone,
  pu = _objectWithoutProperties(_ref35$Badge2, ["defaultTone"]),
  D8 = {
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
    themeStyles: pu
  },
  j8 = {
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
    themeStyles: pu
  },
  z8 = {
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
    themeStyles: pu
  };
j(D8);
j(z8);
j(j8);
var _ref36 = (Uv = h) == null ? void 0 : Uv.componentConfig,
  _ref36$Button = _ref36.Button,
  _ref36$Button2 = _ref36$Button === void 0 ? {
    styles: {}
  } : _ref36$Button,
  U8 = _ref36$Button2.defaultTone,
  mu = _objectWithoutProperties(_ref36$Button2, ["defaultTone"]),
  _ref37 = (Wv = h) == null ? void 0 : Wv.componentConfig,
  _ref37$Surface = _ref37.Surface,
  _ref37$Surface2 = _ref37$Surface === void 0 ? {
    styles: {}
  } : _ref37$Surface,
  W8 = _ref37$Surface2.surfaceDefaultTone,
  yu = _objectWithoutProperties(_ref37$Surface2, ["surfaceDefaultTone"]),
  H8 = {
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
    themeStyles: _objectSpread(_objectSpread({}, yu), mu)
  },
  Y8 = {
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
    themeStyles: _objectSpread(_objectSpread({}, yu), mu)
  },
  K8 = {
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
    themeStyles: _objectSpread(_objectSpread({}, yu), mu)
  },
  G8 = j(H8),
  V8 = j(Y8),
  X8 = j(K8),
  Cr = {
    tone: U8 || W8 || "neutral",
    Container: G8,
    Content: V8,
    Text: X8
  },
  rK = function rK(r) {
    return E(H, je(r, {
      get style() {
        var e;
        var t;
        return [r.style, (t = Cr.Container.tones) == null ? void 0 : t[(e = r.tone) != null ? e : Cr.tone], Cr.Container.base];
      },
      forwardStates: !0,
      get children() {
        return E(oe, {
          get style() {
            var t;
            return [Cr.Text.tones[(t = r.tone) != null ? t : Cr.tone], Cr.Text.base];
          },
          get children() {
            return r.children;
          }
        });
      }
    }));
  },
  _ref38 = (Hv = h) == null ? void 0 : Hv.componentConfig,
  _ref38$Checkbox = _ref38.Checkbox,
  _ref38$Checkbox2 = _ref38$Checkbox === void 0 ? {
    styles: {}
  } : _ref38$Checkbox,
  nK = _ref38$Checkbox2.defaultTone,
  dx = _objectWithoutProperties(_ref38$Checkbox2, ["defaultTone"]),
  Zt = h.stroke.sm,
  pt = h.spacer.xxl,
  Q8 = {
    themeKeys: {
      color: "color",
      borderRadius: "borderRadius",
      border: "border",
      justifyContent: "justifyContent"
    },
    base: {
      width: pt,
      height: pt,
      display: "flex",
      justifyContent: "center",
      color: h.color.fillNeutral,
      alignItems: "center",
      borderRadius: pt / 4,
      border: {
        color: h.color.strokeInverse,
        width: Zt
      }
    },
    modes: {
      disabled: {
        alpha: h.alpha.inactive
      }
    },
    tones: {
      brand: {
        borderRadius: pt / 4,
        border: {
          color: h.color.strokeNeutralSecondary,
          width: Zt
        },
        color: h.color.fillNeutralSecondary,
        checked: {
          borderRadius: pt / 4,
          border: {
            color: h.color.strokeNeutralSecondary,
            width: Zt
          },
          color: h.color.fillBrand
        }
      },
      neutral: {
        borderRadius: pt / 4,
        border: {
          color: h.color.strokeNeutralSecondary,
          width: Zt
        },
        color: h.color.fillInverseSecondary,
        checked: {
          borderRadius: pt / 4,
          border: {
            color: h.color.strokeNeutralSecondary,
            width: Zt
          },
          color: h.color.fillNeutral
        }
      },
      inverse: {
        borderRadius: pt / 4,
        border: {
          color: h.color.strokeInverseSecondary,
          width: Zt
        },
        color: h.color.fillNeutralSecondary,
        checked: {
          borderRadius: pt / 4,
          border: {
            color: h.color.strokeInverseSecondary,
            width: Zt
          },
          color: h.color.fillInverse
        }
      }
    },
    modeKeys: ["focus", "disabled", "checked"],
    themeStyles: dx
  },
  q8 = {
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
    themeStyles: dx
  };
j(Q8);
j(q8);
var _ref39 = (Yv = h) == null ? void 0 : Yv.componentConfig,
  _ref39$Icon = _ref39.Icon,
  _ref39$Icon2 = _ref39$Icon === void 0 ? {
    styles: {}
  } : _ref39$Icon,
  oK = _ref39$Icon2.defaultTone,
  J8 = _objectWithoutProperties(_ref39$Icon2, ["defaultTone"]),
  Z8 = {
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
    themeStyles: J8
  };
j(Z8);
var _ref40 = (Kv = h) == null ? void 0 : Kv.componentConfig,
  _ref40$Column = _ref40.Column,
  _ref40$Column2 = _ref40$Column === void 0 ? {
    styles: {}
  } : _ref40$Column,
  eH = _ref40$Column2.defaultTone,
  tH = _objectWithoutProperties(_ref40$Column2, ["defaultTone"]),
  rH = {
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
    themeStyles: tH
  },
  nH = j(rH),
  Us = {
    tone: eH || "neutral",
    Container: nH
  },
  hx = function hx(r) {
    var t = Di("up"),
      e = Di("down");
    return E(H, je(r, {
      get onUp() {
        return Mt(r.onUp, t);
      },
      get onDown() {
        return Mt(r.onDown, e);
      },
      get selected() {
        return r.selected || 0;
      },
      forwardFocus: fx,
      get onLayout() {
        return Mt(function (n) {
          var o, i;
          return Mi(r.y).call(n, n, n.children[(o = r.selected) != null ? o : 0], (i = r.selected) != null ? i : 0, void 0);
        }, r.onLayout);
      },
      get onSelectedChanged() {
        return Mt(r.onSelectedChanged, r.scroll !== "none" ? Mi(r.y) : void 0);
      },
      get style() {
        var n;
        return [r.style, Us.Container.tones[(n = r.tone) != null ? n : Us.tone], Us.Container.base];
      }
    }));
  },
  _ref41 = (Gv = h) == null ? void 0 : Gv.componentConfig,
  _ref41$Label = _ref41.Label,
  _ref41$Label2 = _ref41$Label === void 0 ? {
    styles: {}
  } : _ref41$Label,
  iK = _ref41$Label2.defaultTone,
  vx = _objectWithoutProperties(_ref41$Label2, ["defaultTone"]),
  oH = {
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
    themeStyles: vx
  },
  iH = {
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
    themeStyles: vx
  };
j(oH);
j(iH);
var _ref42 = (Vv = h) == null ? void 0 : Vv.componentConfig,
  _ref42$Details = _ref42.Details,
  _ref42$Details2 = _ref42$Details === void 0 ? {
    styles: {}
  } : _ref42$Details,
  aK = _ref42$Details2.defaultTone,
  gx = _objectWithoutProperties(_ref42$Details2, ["defaultTone"]),
  aH = {
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
    themeStyles: gx
  },
  sH = {
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
    themeStyles: gx
  };
j(aH);
j(sH);
var _ref43 = (Xv = h) == null ? void 0 : Xv.componentConfig,
  _ref43$Rating = _ref43.Rating,
  _ref43$Rating2 = _ref43$Rating === void 0 ? {
    styles: {},
    defaultTone: "neutral"
  } : _ref43$Rating,
  xu = _ref43$Rating2.styles,
  sK = _ref43$Rating2.defaultTone,
  lH = {
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
    themeStyles: xu
  },
  cH = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      color: h.color.textNeutral
    }, h.typography.body2),
    toneModes: {},
    themeStyles: xu
  },
  uH = {
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
    themeStyles: xu
  };
j(lH);
j(uH);
j(cH);
var _ref44 = (Qv = h) == null ? void 0 : Qv.componentConfig,
  _ref44$Metadata = _ref44.Metadata,
  _ref44$Metadata2 = _ref44$Metadata === void 0 ? {
    styles: {}
  } : _ref44$Metadata,
  lK = _ref44$Metadata2.defaultTone,
  $u = _objectWithoutProperties(_ref44$Metadata2, ["defaultTone"]),
  fH = {
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
    themeStyles: $u
  },
  dH = {
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
    themeStyles: $u
  },
  hH = {
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
    themeStyles: $u
  };
j(fH);
j(hH);
j(dH);
var _ref45 = (qv = h) == null ? void 0 : qv.componentConfig,
  _ref45$ProgressBar = _ref45.ProgressBar,
  _ref45$ProgressBar2 = _ref45$ProgressBar === void 0 ? {
    styles: {}
  } : _ref45$ProgressBar,
  cK = _ref45$ProgressBar2.defaultTone,
  px = _objectWithoutProperties(_ref45$ProgressBar2, ["defaultTone"]),
  vH = {
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
    themeStyles: px
  },
  gH = {
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
    themeStyles: px
  };
j(vH);
j(gH);
var _ref46 = (Jv = h) == null ? void 0 : Jv.componentConfig,
  _ref46$Radio = _ref46.Radio,
  _ref46$Radio2 = _ref46$Radio === void 0 ? {
    themeStyles: {}
  } : _ref46$Radio,
  uK = _ref46$Radio2.defaultTone,
  mx = _objectWithoutProperties(_ref46$Radio2, ["defaultTone"]),
  Yr = h.spacer.xxl,
  Er = h.stroke.sm,
  pH = {
    themeKeys: {
      borderRadius: "strokeRadius",
      color: "backgroundColor",
      colorChecked: "backgroundColorChecked"
    },
    base: {
      color: h.color.fillNeutralSecondary,
      colorChecked: h.color.fillInverse,
      height: Yr + Er * 2,
      width: Yr + Er * 2,
      borderRadius: Yr / 2 + Er,
      border: {
        color: h.color.strokeNeutralSecondary,
        width: Er
      }
    },
    tones: {
      inverse: {
        border: {
          color: h.color.strokeInverseSecondary,
          width: Er
        }
      },
      brand: {
        border: {
          color: h.color.fillBrand,
          width: Er
        }
      }
    },
    themeStyles: mx
  },
  mH = {
    themeKeys: {
      width: "knobWidth",
      height: "knobHeight",
      borderRadius: "knobRadius",
      color: "knobColor"
    },
    base: {
      color: h.color.fillInverse,
      width: Yr,
      height: Yr,
      borderRadius: Yr / 2
    },
    tones: {
      inverse: {
        color: h.color.fillNeutral
      }
    },
    themeStyles: mx
  };
j(pH);
j(mH);
var _ref47 = (Zv = h) == null ? void 0 : Zv.componentConfig,
  _ref47$Row = _ref47.Row,
  _ref47$Row2 = _ref47$Row === void 0 ? {
    styles: {}
  } : _ref47$Row,
  yH = _ref47$Row2.defaultTone,
  xH = _objectWithoutProperties(_ref47$Row2, ["defaultTone"]),
  $H = {
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
    themeStyles: xH
  },
  bH = j($H),
  Ws = {
    tone: yH,
    Container: bH
  },
  SH = function SH(r) {
    var t = Di("left"),
      e = Di("right");
    return E(H, je(r, {
      get selected() {
        return r.selected || 0;
      },
      get onLeft() {
        return Mt(r.onLeft, t);
      },
      get onRight() {
        return Mt(r.onRight, e);
      },
      forwardFocus: fx,
      get onLayout() {
        return Mt(function (n) {
          return Mi(r.x).call(n, n, n.children[n.selected], n.selected, void 0);
        }, r.onLayout);
      },
      get onSelectedChanged() {
        return Mt(r.onSelectedChanged, r.scroll !== "none" ? Mi(r.x) : void 0);
      },
      get style() {
        return [r.style, Ws.Container.tones[r.tone || Ws.tone], Ws.Container.base];
      }
    }));
  },
  _ref48 = (eg = h) == null ? void 0 : eg.componentConfig,
  _ref48$Keyboard = _ref48.Keyboard,
  _ref48$Keyboard2 = _ref48$Keyboard === void 0 ? {
    styles: {}
  } : _ref48$Keyboard,
  fK = _ref48$Keyboard2.defaultTone,
  bu = _objectWithoutProperties(_ref48$Keyboard2, ["defaultTone"]),
  wH = {
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
    themeStyles: bu
  },
  TH = {
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
    themeStyles: bu
  },
  AH = {
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
    themeStyles: bu
  };
j(wH);
j(TH);
j(AH);
var _ref49 = (tg = h) == null ? void 0 : tg.componentConfig,
  _ref49$Key = _ref49.Key,
  _ref49$Key2 = _ref49$Key === void 0 ? {
    styles: {}
  } : _ref49$Key,
  dK = _ref49$Key2.defaultTone,
  yx = _objectWithoutProperties(_ref49$Key2, ["defaultTone"]),
  IH = {
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
    themeStyles: yx
  },
  CH = {
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
    themeStyles: yx
  };
j(IH);
j(CH);
var _ref50 = (rg = h) == null ? void 0 : rg.componentConfig,
  _ref50$Input = _ref50.Input,
  _ref50$Input2 = _ref50$Input === void 0 ? {
    styles: {}
  } : _ref50$Input,
  hK = _ref50$Input2.defaultTone,
  Su = _objectWithoutProperties(_ref50$Input2, ["defaultTone"]),
  EH = {
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
    themeStyles: Su
  },
  RH = {
    themeKeys: {
      borderRadius: "borderRadius",
      color: "backgroundColor"
    },
    base: {
      width: k8(4),
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
    themeStyles: Su
  },
  OH = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: h.color.textNeutral
    }, h.typography.button1),
    themeStyles: Su
  };
j(EH);
j(RH);
j(OH);
var _ref51 = (ng = h) == null ? void 0 : ng.componentConfig,
  _ref51$Tile = _ref51.Tile,
  _ref51$Tile2 = _ref51$Tile === void 0 ? {
    styles: {}
  } : _ref51$Tile,
  vK = _ref51$Tile2.defaultTone,
  Ta = _objectWithoutProperties(_ref51$Tile2, ["defaultTone"]),
  _ref52 = (og = h) == null ? void 0 : og.componentConfig,
  _ref52$Surface = _ref52.Surface,
  _ref52$Surface2 = _ref52$Surface === void 0 ? {
    styles: {}
  } : _ref52$Surface,
  gK = _ref52$Surface2.defaultSurfaceTone,
  _H = _objectWithoutProperties(_ref52$Surface2, ["defaultSurfaceTone"]),
  PH = {
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
    themeStyles: _objectSpread(_objectSpread({}, _H), Ta)
  },
  NH = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      flexBoundary: "contain",
      mountY: 1
    },
    themeStyles: Ta
  },
  FH = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart"
    },
    themeStyles: Ta
  },
  BH = {
    themeKeys: {},
    base: {
      width: h.spacer.lg * 5,
      height: h.spacer.xxl + h.spacer.md
    },
    themeStyles: Ta
  };
j(PH);
j(NH);
j(FH);
j(BH);
var kH = {
    color: 255,
    height: 150,
    width: 330,
    x: 1910,
    y: 10,
    mountX: 1,
    alpha: .8,
    zIndex: 100
  },
  at = {
    x: 10,
    fontSize: 22,
    textColor: ge("#f6f6f6")
  },
  ni = {
    fontSize: 22,
    textColor: ge("#f6f6f6")
  },
  _V27 = V(0),
  _V28 = _slicedToArray(_V27, 2),
  LH = _V28[0],
  MH = _V28[1],
  _V29 = V(0),
  _V30 = _slicedToArray(_V29, 2),
  DH = _V30[0],
  jH = _V30[1],
  _V31 = V(99),
  _V32 = _slicedToArray(_V31, 2),
  zH = _V32[0],
  UH = _V32[1],
  _V33 = V(0),
  _V34 = _slicedToArray(_V33, 2),
  WH = _V34[0],
  HH = _V34[1],
  _V35 = V(0),
  _V36 = _slicedToArray(_V35, 2),
  YH = _V36[0],
  KH = _V36[1],
  _V37 = V(0),
  _V38 = _slicedToArray(_V37, 2),
  GH = _V38[0],
  VH = _V38[1],
  _V39 = V(0),
  _V40 = _slicedToArray(_V39, 2),
  XH = _V40[0],
  QH = _V40[1];
var ig = 0,
  ag = 0;
var qH = function qH(r) {
    r && (MH(r), UH(function (t) {
      return Math.min(r, t);
    }), HH(function (t) {
      return Math.max(r, t);
    }), ag += r, ig++, jH(Math.round(ag / ig)));
  },
  JH = function JH(r) {
    var t = 0,
      e = 0,
      n = 0;
    r.txManager.textureIdCache.forEach(function (o, i, a) {
      o.state === "loaded" && t++, o.state === "loading" && e++, o.state === "failed" && n++;
    }), KH(t), VH(e), QH(n);
  };
function ZH(r) {
  r.renderer.on("fpsUpdate", function (t, e) {
    var n = typeof e == "number" ? e : e.fps;
    n > 5 && (qH(n), JH(t.root.stage));
  });
}
var eY = function eY(r) {
    return E(H, je(r, {
      style: kH,
      get children() {
        return [E(H, {
          get children() {
            return [E(oe, {
              style: at,
              children: "FPS:"
            }), E(oe, {
              style: ni,
              x: 90,
              get children() {
                return LH();
              }
            })];
          }
        }), E(H, {
          x: 160,
          get children() {
            return [E(oe, {
              style: at,
              children: "AVG:"
            }), E(oe, {
              style: ni,
              x: 100,
              get children() {
                return DH();
              }
            })];
          }
        }), E(H, {
          x: 0,
          y: 20,
          get children() {
            return [E(oe, {
              style: at,
              children: "MIN:"
            }), E(oe, {
              style: ni,
              x: 90,
              get children() {
                return zH();
              }
            })];
          }
        }), E(H, {
          x: 160,
          y: 20,
          get children() {
            return [E(oe, {
              style: at,
              children: "MAX:"
            }), E(oe, {
              style: ni,
              x: 100,
              get children() {
                return WH();
              }
            })];
          }
        }), E(H, {
          x: 0,
          y: 50,
          get children() {
            return [E(oe, {
              style: at,
              children: "Loaded Textures Cnt:"
            }), E(oe, {
              style: at,
              x: 270,
              get children() {
                return YH();
              }
            })];
          }
        }), E(H, {
          x: 0,
          y: 80,
          get children() {
            return [E(oe, {
              style: at,
              children: "Loading Textures Cnt:"
            }), E(oe, {
              style: at,
              x: 270,
              get children() {
                return GH();
              }
            })];
          }
        }), E(H, {
          x: 0,
          y: 110,
          get children() {
            return [E(oe, {
              style: at,
              children: "Failed Textures Cnt:"
            }), E(oe, {
              style: at,
              x: 270,
              get children() {
                return XH();
              }
            })];
          }
        })];
      }
    }));
  },
  Zl = {
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
  tY = "./",
  rY = [{
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
function nY(r) {
  var t = R8(tY + "assets/icons_white.png", rY);
  return E(H, je(r, {
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
function oi(r) {
  return E(H, je(r, {
    forwardStates: !0,
    get style() {
      return Zl.NavButton;
    },
    get children() {
      return [E(H, {
        y: -16,
        get children() {
          return E(nY, {
            scale: .5,
            get name() {
              return r.icon;
            }
          });
        }
      }), E(oe, {
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
function oY(r) {
  var t;
  var e = gu();
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
    if (GW(function () {
      return a;
    })()) return r.focusPage();
    e(a);
  }
  return [E(H, {
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
      return [E(oe, {
        x: 80,
        fontSize: 28,
        color: 4143380036,
        children: "Built With:"
      }), E(H, {
        y: 22,
        src: "./assets/solidWord.png",
        width: 280,
        height: 52
      }), E(H, {
        x: 0,
        y: 110,
        src: "./assets/tmdb.png",
        width: 80,
        height: 41
      }), E(oe, {
        x: 90,
        y: 110,
        contain: "width",
        width: 160,
        fontSize: 12,
        color: 4143380036,
        children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
      })];
    }
  }), E(hx, je(r, {
    onFocus: n,
    onBlur: o,
    get style() {
      return Zl.Column;
    },
    scroll: "none",
    get children() {
      return [E(oi, {
        onEnter: function onEnter() {
          return i("/browse/all");
        },
        icon: "trending",
        children: "Trending"
      }), E(oi, {
        icon: "movie",
        onEnter: function onEnter() {
          return i("/browse/movie");
        },
        children: "Movies"
      }), E(oi, {
        icon: "tv",
        onEnter: function onEnter() {
          return i("/browse/tv");
        },
        children: "TV"
      }), E(oi, {
        icon: "experiment",
        onEnter: function onEnter() {
          return i("/examples");
        },
        children: "Examples"
      })];
    }
  })), E(H, {
    skipFocus: !0,
    ref: function ref(a) {
      var s = t;
      typeof s == "function" ? s(a) : t = a;
    },
    get style() {
      return Zl.Gradient;
    }
  })];
}
var iY = function iY(r) {
    x8({
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
    var t = E8();
    t.enabled = !1;
    var e = gu();
    var n, o;
    ZH({
      renderer: xt
    });
    function i() {
      return n.states.has("focus") ? !1 : (o = ac(), n.setFocus());
    }
    var _V41 = V(!0),
      _V42 = _slicedToArray(_V41, 2),
      a = _V42[0],
      s = _V42[1],
      l = lx(),
      c = ["/browse", "/entity"];
    return ar(function () {
      var u = l.pathname;
      var f = c.some(function (d) {
        return u.startsWith(d);
      });
      u === "/" && (f = !0), s(f);
    }), E(H, {
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
        return [E(P8, {}), E(eY, {
          mountX: 1,
          x: 1910,
          y: 10,
          get alpha() {
            return a() ? 1 : 0;
          }
        }), uc(function () {
          return r.children;
        }), E(oY, {
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
  ji = {
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
      color: ge("#0000ff")
    },
    peopleBio: _objectSpread(_objectSpread({}, h.typography.body1), {}, {
      fontFamily: "Ubuntu",
      fontWeight: "normal",
      contain: "both",
      width: 780,
      height: 340
    })
  },
  zi = {
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
  aY = {
    color: ge("#00A699"),
    height: 8,
    y: 2,
    x: -4,
    width: zi.width + 8
  },
  sY = {
    fontSize: 12,
    y: 12,
    contain: "width",
    textAlign: "center",
    color: ge("#F6F6F9"),
    height: zi.height,
    width: zi.width
  },
  pK = {
    container: zi,
    topBar: aY,
    text: sY
  },
  sg = {
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
  mK = {
    fontSize: 32,
    contain: "width",
    textAlign: "center",
    mountY: -.35,
    color: ge("#FFFFFF"),
    height: sg.height,
    width: sg.width,
    focus: {
      fontSize: 40
    },
    disabled: {
      color: ge("#909090")
    }
  };
function lY(r) {
  return E(H, je(r, {
    get style() {
      return ji.Thumbnail;
    }
  }));
}
function cY(r) {
  var _r3 = r0(r, ["items"]),
    _r4 = _slicedToArray(_r3, 2),
    t = _r4[0],
    e = _r4[1];
  return E(SH, je(e, {
    get style() {
      return ji.Row;
    },
    get children() {
      return E(ic, {
        get each() {
          return t.items;
        },
        children: function children(n) {
          return E(lY, n);
        }
      });
    }
  }));
}
var uY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZiMDhiODgwZjc2MzEzMmIyMjExYWNjYjQ5MzZiZSIsIm5iZiI6MTcyNDA1NjEwMC4yMzQ4MzgsInN1YiI6IjY2YzMwMTg1Y2NlNzA0ZWJlYWQzNWY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dedjZUuwhiOFTlvO6FohvFkC-cEmS9QEw97du52t3bk",
  fY = "https://api.themoviedb.org/3";
var xx, $x;
var dY = "w185",
  hY = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + uY
    }
  };
function Hs(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dY;
  return $x + t + r;
}
function vY(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return xx ? ec(r, t) : bx().then(function () {
    return ec(r, t);
  });
}
function ec(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(fY + r, _objectSpread(_objectSpread({}, hY), t)).then(function (e) {
    return e.json();
  });
}
function bx() {
  return ec("/configuration").then(function (r) {
    var t;
    return xx = r, $x = (t = r.images) == null ? void 0 : t.secure_base_url, r;
  });
}
var gY = {
  get: vY,
  loadConfig: bx
};
function pY(r, t) {
  return r.length > t ? r.substring(0, t - 3) + "..." : r;
}
function mY(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var e = [];
  for (var n = 0, o = r.length; n < o; n += t) e.push(r.slice(n, n + t));
  return e;
}
function yY() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return r.map(function (t) {
    return {
      src: Hs(t.poster_path || t.profile_path),
      tileSrc: Hs(t.backdrop_path || t.profile_path, "w300"),
      backdrop: Hs(t.backdrop_path, "w1280"),
      href: "/entity/".concat(t.media_type || "people", "/").concat(t.id),
      shortTitle: pY(t.title || t.name, 30),
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
var Ys = new Map();
var ii = new Map();
function xY(r) {
  return function (t) {
    var e = "/trending/".concat(r, "/week?page=").concat(t);
    if (Ys.has(e)) return Ys.get(e);
    var n = gY.get(e).then(function (o) {
      var i = o.results.filter(function (l) {
          return !l.adult;
        }),
        a = (ii.has(r) ? ii.get(r) : []).concat(yY(i)),
        s = mY(a);
      return s[s.length - 1].length < 7 ? ii.set(r, s.pop()) : ii["delete"](r), s;
    });
    return Ys.set(e, n), n;
  };
}
function $Y(r) {
  var _V43 = V([]),
    _V44 = _slicedToArray(_V43, 2),
    t = _V44[0],
    e = _V44[1],
    _V45 = V(1),
    _V46 = _slicedToArray(_V45, 2),
    n = _V46[0],
    o = _V46[1],
    _V47 = V(!1),
    _V48 = _slicedToArray(_V47, 2),
    i = _V48[0],
    a = _V48[1],
    _bg3 = bg(n, r),
    _bg4 = _slicedToArray(_bg3, 1),
    s = _bg4[0];
  return Ks(function () {
    var l = s();
    l && Kx(function () {
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
var Aa = 900,
  bY = {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "fixed",
    width: Aa,
    height: 220,
    gap: 16
  },
  SY = _objectSpread(_objectSpread({}, h.typography.display2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    maxLines: 1,
    width: Aa,
    contain: "width"
  }),
  wY = function wY(r) {
    return E(oe, je(r, {
      style: SY
    }));
  },
  TY = _objectSpread(_objectSpread({}, h.typography.body1), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400,
    lineHeight: 32,
    width: Aa,
    maxLines: 3,
    contain: "width"
  }),
  AY = {
    fontSize: 16,
    lineHeight: 20
  },
  IY = function IY(r) {
    return E(oe, je(r, {
      style: TY,
      get children() {
        return r.children;
      }
    }));
  },
  CY = function CY(r) {
    return function () {
      var t = Ki("node");
      return b$($8, t, function () {
        return [8, 13, 11, 13];
      }), fc(t, je(r, {
        style: {
          color: "0x00000099",
          borderRadius: 8,
          border: {
            width: 2,
            color: "0xffffffff"
          }
        }
      }), !0), x$(t, E(oe, {
        style: AY,
        get children() {
          return r.children;
        }
      })), t;
    }();
  },
  lg = _objectSpread(_objectSpread({}, h.typography.body2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400
  }),
  EY = function EY(r) {
    return E(H, {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 18,
        width: Aa,
        height: 48
      },
      get children() {
        return [E(H, {
          y: -4,
          src: "./assets/stars.png",
          width: 188,
          height: 31
        }), E(H, {
          y: -4,
          flexItem: !1,
          clipping: !0,
          get width() {
            return 188 * r.voteAverage / 10;
          },
          height: 31,
          get children() {
            return E(H, {
              src: "./assets/stars-full.png",
              width: 188,
              height: 31
            });
          }
        }), E(oe, {
          style: lg,
          get children() {
            return [uc(function () {
              return r.voteCount;
            }), " reviews"];
          }
        }), E(oe, {
          style: lg,
          get children() {
            return r.metaText;
          }
        }), E(ic, {
          get each() {
            return r.badges;
          },
          children: function children(t) {
            return E(CY, {
              y: -5,
              children: t
            });
          }
        })];
      }
    });
  },
  RY = function RY(r) {
    return E(H, je({
      id: "contentBlock",
      style: bY
    }, r, {
      get children() {
        return [E(wY, {
          get children() {
            return r.content.title;
          }
        }), E(IY, {
          get children() {
            return r.content.description;
          }
        }), E(Yi, {
          get when() {
            return r.content.voteCount;
          },
          get children() {
            return E(EY, {
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
var cg = function cg(r, t) {
  var e;
  var n = function n() {
    return clearTimeout(e);
  };
  return en() && ft(n), Object.assign(function () {
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
var ug = function ug() {
    var r = VW(),
      _V49 = V(0),
      _V50 = _slicedToArray(_V49, 2),
      t = _V50[0],
      e = _V50[1],
      _V51 = V({}),
      _V52 = _slicedToArray(_V51, 2),
      n = _V52[0],
      o = _V52[1],
      i = gu(),
      a = Yx(function () {
        return 0;
      }),
      s = ie(function () {
        return $Y(xY(r.filter || "all"));
      }),
      l = cg(function (d) {
        return _8(d);
      }, 400),
      c = cg(function (d) {
        return o(d || {});
      }, 200);
    ar(Zr(ac, function (d) {
      d.backdrop && l(d.backdrop), d.heroContent && c(d.heroContent);
    }, {
      defer: !0
    }));
    function u() {
      var g;
      (g = this.children.selected) == null || g.setFocus(), e((this.y || 0) * -1 + 24);
      var d = s().pages().length;
      this.parent.selected = this.parent.children.indexOf(this), (d === 0 || this.parent.selected && this.parent.selected >= d - 2) && s().setPage(function (p) {
        return p + 1;
      });
    }
    function f() {
      var d = this.children.find(function (g) {
        return g.states.has("focus");
      });
      return F(d && d.href), i(d.href), !0;
    }
    return E(Yi, {
      get when() {
        return s().pages().length;
      },
      get children() {
        return [E(RY, {
          y: 360,
          x: 162,
          get content() {
            return n();
          }
        }), E(H, {
          clipping: !0,
          get style() {
            return ji.itemsContainer;
          },
          get children() {
            return E(hx, {
              id: "BrowseColumn",
              plinko: !0,
              announce: "All Trending - Week",
              get y() {
                return t();
              },
              scroll: "none",
              get style() {
                return ji.Column;
              },
              get children() {
                return E(ic, {
                  get each() {
                    return s().pages();
                  },
                  children: function children(d, g) {
                    return E(cY, {
                      get autofocus() {
                        return a(g());
                      },
                      items: d,
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
  OY = function OY() {
    return function () {
      var r = Ki("node");
      return $$(r, "style", {
        width: 1920,
        height: 1080,
        color: 868483072
      }), r;
    }();
  },
  _Y = new URL("AppCoreExtensions-CoxKajqS.js", import.meta.url).href,
  PY = Be(function () {
    return _e(function () {
      return import("./Grid-CKctljaL.js");
    }, __vite__mapDeps([0, 1]), import.meta.url);
  }),
  NY = Be(function () {
    return _e(function () {
      return import("./Portal-DUB2BbE5.js");
    }, __vite__mapDeps([2, 1]), import.meta.url);
  }),
  FY = Be(function () {
    return _e(function () {
      return import("./Text-Bm19XntU.js");
    }, __vite__mapDeps([3, 1]), import.meta.url);
  }),
  BY = Be(function () {
    return _e(function () {
      return import("./Create-DNIe0h_S.js");
    }, __vite__mapDeps([4, 1]), import.meta.url);
  }),
  kY = Be(function () {
    return _e(function () {
      return import("./Viewport-Cre0eXFW.js");
    }, __vite__mapDeps([5, 1]), import.meta.url);
  }),
  LY = Be(function () {
    return _e(function () {
      return import("./Buttons-BzFnFD5P.js");
    }, __vite__mapDeps([6, 1]), import.meta.url);
  }),
  MY = Be(function () {
    return _e(function () {
      return import("./Flex-BGYfSFLJ.js");
    }, __vite__mapDeps([7, 1]), import.meta.url);
  }),
  DY = Be(function () {
    return _e(function () {
      return import("./FlexSize-BfLOZQem.js");
    }, __vite__mapDeps([8, 1]), import.meta.url);
  }),
  jY = Be(function () {
    return _e(function () {
      return import("./FlexColumnSize-Dtqjv5WL.js");
    }, __vite__mapDeps([9, 1]), import.meta.url);
  }),
  zY = Be(function () {
    return _e(function () {
      return import("./FlexColumn-B2EHGuVb.js");
    }, __vite__mapDeps([10, 1]), import.meta.url);
  }),
  UY = Be(function () {
    return _e(function () {
      return import("./ButtonsMaterial-CLI5oPiW.js");
    }, __vite__mapDeps([11, 1]), import.meta.url);
  }),
  WY = Be(function () {
    return _e(function () {
      return import("./SuperFlex-BSxiEcwd.js");
    }, __vite__mapDeps([12, 1]), import.meta.url);
  }),
  HY = Be(function () {
    return _e(function () {
      return import("./Entity-xHnd8JsH.js");
    }, __vite__mapDeps([13, 1]), import.meta.url);
  }),
  YY = Be(function () {
    return _e(function () {
      return import("./People-D7cZpXDd.js");
    }, __vite__mapDeps([14, 1]), import.meta.url);
  });
Me.debug = !1;
Me.animationsEnabled = !0;
Me.fontSettings.fontFamily = "Ubuntu";
Me.fontSettings.color = ge("#f6f6f6");
Me.fontSettings.fontSize = 32;
Me.rendererOptions = {
  coreExtensionModule: _Y,
  fpsUpdateInterval: 200,
  enableInspector: !0,
  deviceLogicalPixelRatio: window.innerHeight / 1080
};
y$(function () {
  return E(f8, {
    root: function root(r) {
      return E(iY, r);
    },
    get children() {
      return [E(Ae, {
        path: "",
        component: ug
      }), E(Ae, {
        path: "examples",
        component: NY
      }), E(Ae, {
        path: "browse/:filter",
        component: ug
      }), E(Ae, {
        path: "grid",
        component: PY
      }), E(Ae, {
        path: "text",
        component: FY
      }), E(Ae, {
        path: "buttons",
        component: LY
      }), E(Ae, {
        path: "flex",
        component: MY
      }), E(Ae, {
        path: "create",
        component: BY
      }), E(Ae, {
        path: "viewport",
        component: kY
      }), E(Ae, {
        path: "flexsize",
        component: DY
      }), E(Ae, {
        path: "flexcolumnsize",
        component: jY
      }), E(Ae, {
        path: "flexcolumn",
        component: zY
      }), E(Ae, {
        path: "superflex",
        component: WY
      }), E(Ae, {
        path: "buttonsmaterial",
        component: UY
      }), E(Ae, {
        path: "entity/people/:id",
        component: YY
      }), E(Ae, {
        path: "entity/:type/:id",
        component: HY
      }), E(Ae, {
        path: "*all",
        component: OY
      })];
    }
  });
});
function yK() {
  var r = document.getElementById("video");
  return r.hidden = !1, setTimeout(function () {
    return r.play();
  }, 50), r.focus(), r;
}
function xK() {
  var r = document.getElementById("video");
  return r.hidden = !0, r.pause(), r;
}
export { Hs as A, VW as B, hx as C, RY as D, rK as E, ic as F, cY as G, xK as H, QY as I, yK as J, i0 as K, mK as M, SH as R, Yi as S, oe as T, H as V, GY as __vite_legacy_guard, bg as a, Ks as b, V as c, Kx as d, Yx as e, ar as f, XY as g, ge as h, E as i, ji as j, uc as k, rc as l, je as m, ft as n, Zr as o, pK as p, Ki as q, b$ as r, _8 as s, h as t, gu as u, fc as v, $8 as w, x$ as x, gY as y, yY as z };