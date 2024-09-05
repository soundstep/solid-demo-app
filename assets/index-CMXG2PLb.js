function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var __vite__fileDeps = ["./Grid-BMdXTwwT.js", "./CoreExtension-DUlHFTtP.js", "./Portal-8KfMTEA5.js", "./Text-C3_l7FC2.js", "./Create-DZ2bkAFO.js", "./Viewport-CZVxscca.js", "./Buttons-BGu0ic8k.js", "./Flex-B6eCqxdW.js", "./FlexSize-BBCaN2k2.js", "./FlexColumnSize-DSAhYVoZ.js", "./FlexColumn-LLItJCbh.js", "./ButtonsMaterial-CDlcB_wn.js", "./SuperFlex-DFlv4zUa.js", "./Entity-jZimHy4R.js", "./People-CsrA-CQV.js"],
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
import { a as N, i as cg, T as Tx, g as ba, c as Er, E as Zt, b as ct, d as Ax, e as Ql, f as Ix, m as $n, W as Wr, C as Cx, h as ug, j as Ex, k as Sa, S as $u, l as fg, B as Rx, n as Ox, o as dg, p as _x, q as Px, r as Nx, s as Fx, t as bu, u as Su, v as Bx, w as hg, R as kx, x as Lx, y as Mx, z as Dx, A as jx } from "./CoreExtension-DUlHFTtP.js";
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
  wu = {},
  Re = function Re(t, e, n) {
    var o = Promise.resolve();
    if (e && e.length > 0) {
      var i = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        s = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.all(e.map(function (l) {
        if (l = Ux(l, n), l in wu) return;
        wu[l] = !0;
        var c = l.endsWith(".css"),
          u = c ? '[rel="stylesheet"]' : "";
        if (!!n) for (var g = i.length - 1; g >= 0; g--) {
          var p = i[g];
          if (p.href === l && (!c || p.rel === "stylesheet")) return;
        } else if (document.querySelector("link[href=\"".concat(l, "\"]").concat(u))) return;
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
function bn(r) {
  te.context = r;
}
var vg = function vg(r, t) {
    return r === t;
  },
  ui = Symbol("solid-proxy"),
  gg = Symbol("solid-track"),
  fi = {
    equals: vg
  };
var pg = Tg;
var Je = 1,
  di = 2,
  mg = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  wa = {};
var U = null;
var Ta = null,
  Wx = null,
  G = null,
  we = null,
  at = null,
  Mi = 0;
function Nt(r, t) {
  var e = G,
    n = U,
    o = r.length === 0,
    i = t === void 0 ? n : t,
    a = o ? mg : {
      owned: null,
      cleanups: null,
      context: i ? i.context : null,
      owner: i
    },
    s = o ? r : function () {
      return r(function () {
        return ve(function () {
          return Di(a);
        });
      });
    };
  U = a, G = null;
  try {
    return lt(s, !0);
  } finally {
    G = e, U = n;
  }
}
function V(r, t) {
  t = t ? Object.assign({}, fi, t) : fi;
  var e = {
      value: r,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0
    },
    n = function n(o) {
      return typeof o == "function" && (o = o(e.value)), wg(e, o);
    };
  return [Sg.bind(e), n];
}
function zs(r, t, e) {
  var n = Mn(r, t, !0, Je);
  er(n);
}
function ot(r, t, e) {
  var n = Mn(r, t, !1, Je);
  er(n);
}
function qt(r, t, e) {
  pg = qx;
  var n = Mn(r, t, !1, Je);
  (!e || !e.render) && (n.user = !0), at ? at.push(n) : er(n);
}
function ie(r, t, e) {
  e = e ? Object.assign({}, fi, e) : fi;
  var n = Mn(r, t, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = e.equals || void 0, er(n), Sg.bind(n);
}
function Hx(r) {
  return r && _typeof(r) == "object" && "then" in r;
}
function yg(r, t, e) {
  var n, o, i;
  arguments.length === 2 && _typeof(t) == "object" || arguments.length === 1 ? (n = !0, o = r, i = t || {}) : (n = r, o = t, i = e || {});
  var a = null,
    s = wa,
    l = null,
    c = !1,
    u = "initialValue" in i,
    f = typeof n == "function" && ie(n);
  var d = new Set(),
    _ref = (i.storage || V)(i.initialValue),
    _ref2 = _slicedToArray(_ref, 2),
    g = _ref2[0],
    p = _ref2[1],
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
  function w(A, B, P, _) {
    return a === A && (a = null, _ !== void 0 && (u = !0), (A === s || B === s) && i.onHydrated && queueMicrotask(function () {
      return i.onHydrated(_, {
        value: B
      });
    }), s = wa, R(B, P)), B;
  }
  function R(A, B) {
    lt(function () {
      B === void 0 && p(function () {
        return A;
      }), m(B !== void 0 ? "errored" : u ? "ready" : "unresolved"), b(B);
      var _iterator4 = _createForOfIteratorHelper(d.keys()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var P = _step4.value;
          P.decrement();
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
      B = g(),
      P = x();
    if (P !== void 0 && !a) throw P;
    return G && !G.user && A && zs(function () {
      S(), a && (A.resolved || d.has(A) || (A.increment(), d.add(A)));
    }), B;
  }
  function E() {
    var A = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
    if (A !== !1 && c) return;
    c = !1;
    var B = f ? f() : n;
    if (B == null || B === !1) {
      w(a, ve(g));
      return;
    }
    var P = s !== wa ? s : ve(function () {
      return o(B, {
        value: g(),
        refetching: A
      });
    });
    return Hx(P) ? (a = P, "value" in P ? (P.status === "success" ? w(a, P.value, void 0, B) : w(a, void 0, void 0, B), P) : (c = !0, queueMicrotask(function () {
      return c = !1;
    }), lt(function () {
      m(u ? "refreshing" : "pending"), $();
    }, !1), P.then(function (_) {
      return w(P, _, void 0, B);
    }, function (_) {
      return w(P, void 0, Ig(_), B);
    }))) : (w(a, P, void 0, B), P);
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
  }), f ? zs(function () {
    return E(!1);
  }) : E(!1), [I, {
    refetch: E,
    mutate: p
  }];
}
function Yx(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vg;
  var e = arguments.length > 2 ? arguments[2] : undefined;
  var n = new Map(),
    o = Mn(function (i) {
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
                c.state = Je, c.pure ? we.push(c) : at.push(c);
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
    }, void 0, !0, Je);
  return er(o), function (i) {
    var a = G;
    if (a) {
      var s;
      (s = n.get(i)) ? s.add(a) : n.set(i, s = new Set([a])), st(function () {
        s["delete"](a), !s.size && n["delete"](i);
      });
    }
    return t(i, o.value);
  };
}
function Kx(r) {
  return lt(r, !1);
}
function ve(r) {
  if (G === null) return r();
  var t = G;
  G = null;
  try {
    return r();
  } finally {
    G = t;
  }
}
function Hr(r, t, e) {
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
    var l = ve(function () {
      return t(s, o, a);
    });
    return o = s, l;
  };
}
function XY(r) {
  qt(function () {
    return ve(r);
  });
}
function st(r) {
  return U === null || (U.cleanups === null ? U.cleanups = [r] : U.cleanups.push(r)), r;
}
function Yr() {
  return U;
}
function xg(r, t) {
  var e = U,
    n = G;
  U = r, G = null;
  try {
    return lt(t, !0);
  } catch (o) {
    Jl(o);
  } finally {
    U = e, G = n;
  }
}
function Gx(r) {
  var t = G,
    e = U;
  return Promise.resolve().then(function () {
    G = t, U = e;
    var n;
    return lt(r, !1), G = U = null, n ? n.done : void 0;
  });
}
function $g(r, t) {
  var e = Symbol("context");
  return {
    id: e,
    Provider: Jx(e),
    defaultValue: r
  };
}
function bg(r) {
  return U && U.context && U.context[r.id] !== void 0 ? U.context[r.id] : r.defaultValue;
}
function ql(r) {
  var t = ie(r),
    e = ie(function () {
      return Us(t());
    });
  return e.toArray = function () {
    var n = e();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, e;
}
var Vx;
function Sg() {
  var _this = this;
  if (this.sources && this.state) if (this.state === Je) er(this);else {
    var r = we;
    we = null, lt(function () {
      return vi(_this);
    }, !1), we = r;
  }
  if (G) {
    var _r2 = this.observers ? this.observers.length : 0;
    G.sources ? (G.sources.push(this), G.sourceSlots.push(_r2)) : (G.sources = [this], G.sourceSlots = [_r2]), this.observers ? (this.observers.push(G), this.observerSlots.push(G.sources.length - 1)) : (this.observers = [G], this.observerSlots = [G.sources.length - 1]);
  }
  return this.value;
}
function wg(r, t, e) {
  var n = r.value;
  return (!r.comparator || !r.comparator(n, t)) && (r.value = t, r.observers && r.observers.length && lt(function () {
    for (var o = 0; o < r.observers.length; o += 1) {
      var i = r.observers[o],
        a = Ta && Ta.running;
      a && Ta.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? we.push(i) : at.push(i), i.observers && Ag(i)), a || (i.state = Je);
    }
    if (we.length > 1e6) throw we = [], new Error();
  }, !1)), t;
}
function er(r) {
  if (!r.fn) return;
  Di(r);
  var t = Mi;
  Xx(r, r.value, t);
}
function Xx(r, t, e) {
  var n;
  var o = U,
    i = G;
  G = U = r;
  try {
    n = r.fn(t);
  } catch (a) {
    return r.pure && (r.state = Je, r.owned && r.owned.forEach(Di), r.owned = null), r.updatedAt = e + 1, Jl(a);
  } finally {
    G = i, U = o;
  }
  (!r.updatedAt || r.updatedAt <= e) && (r.updatedAt != null && "observers" in r ? wg(r, n) : r.value = n, r.updatedAt = e);
}
function Mn(r, t, e) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Je;
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
    owner: U,
    context: U ? U.context : null,
    pure: e
  };
  return U === null || U !== mg && (U.owned ? U.owned.push(i) : U.owned = [i]), i;
}
function hi(r) {
  if (r.state === 0) return;
  if (r.state === di) return vi(r);
  if (r.suspense && ve(r.suspense.inFallback)) return r.suspense.effects.push(r);
  var t = [r];
  for (; (r = r.owner) && (!r.updatedAt || r.updatedAt < Mi);) r.state && t.push(r);
  for (var e = t.length - 1; e >= 0; e--) if (r = t[e], r.state === Je) er(r);else if (r.state === di) {
    var n = we;
    we = null, lt(function () {
      return vi(r, t[0]);
    }, !1), we = n;
  }
}
function lt(r, t) {
  if (we) return r();
  var e = !1;
  t || (we = []), at ? e = !0 : at = [], Mi++;
  try {
    var n = r();
    return Qx(e), n;
  } catch (n) {
    e || (at = null), we = null, Jl(n);
  }
}
function Qx(r) {
  if (we && (Tg(we), we = null), r) return;
  var t = at;
  at = null, t.length && lt(function () {
    return pg(t);
  }, !1);
}
function Tg(r) {
  for (var t = 0; t < r.length; t++) hi(r[t]);
}
function qx(r) {
  var t,
    e = 0;
  for (t = 0; t < r.length; t++) {
    var n = r[t];
    n.user ? r[e++] = n : hi(n);
  }
  if (te.context) {
    if (te.count) {
      var _te$effects;
      te.effects || (te.effects = []), (_te$effects = te.effects).push.apply(_te$effects, _toConsumableArray(r.slice(0, e)));
      return;
    } else te.effects && (r = [].concat(_toConsumableArray(te.effects), _toConsumableArray(r)), e += te.effects.length, delete te.effects);
    bn();
  }
  for (t = 0; t < e; t++) hi(r[t]);
}
function vi(r, t) {
  r.state = 0;
  for (var e = 0; e < r.sources.length; e += 1) {
    var n = r.sources[e];
    if (n.sources) {
      var o = n.state;
      o === Je ? n !== t && (!n.updatedAt || n.updatedAt < Mi) && hi(n) : o === di && vi(n, t);
    }
  }
}
function Ag(r) {
  for (var t = 0; t < r.observers.length; t += 1) {
    var e = r.observers[t];
    e.state || (e.state = di, e.pure ? we.push(e) : at.push(e), e.observers && Ag(e));
  }
}
function Di(r) {
  var t;
  if (r.sources) for (; r.sources.length;) {
    var e = r.sources.pop(),
      n = r.sourceSlots.pop(),
      o = e.observers;
    if (o && o.length) {
      var i = o.pop(),
        a = e.observerSlots.pop();
      n < o.length && (i.sourceSlots[a] = n, o[n] = i, e.observerSlots[n] = a);
    }
  }
  if (r.owned) {
    for (t = r.owned.length - 1; t >= 0; t--) Di(r.owned[t]);
    r.owned = null;
  }
  if (r.cleanups) {
    for (t = r.cleanups.length - 1; t >= 0; t--) r.cleanups[t]();
    r.cleanups = null;
  }
  r.state = 0;
}
function Ig(r) {
  return r instanceof Error ? r : new Error(typeof r == "string" ? r : "Unknown error", {
    cause: r
  });
}
function Jl(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : U;
  throw Ig(r);
}
function Us(r) {
  if (typeof r == "function" && !r.length) return Us(r());
  if (Array.isArray(r)) {
    var t = [];
    for (var e = 0; e < r.length; e++) {
      var n = Us(r[e]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return r;
}
function Jx(r, t) {
  return function (n) {
    var o;
    return ot(function () {
      return o = ve(function () {
        return U.context = _objectSpread(_objectSpread({}, U.context), {}, _defineProperty({}, r, n.value)), ql(function () {
          return n.children;
        });
      });
    }, void 0), o;
  };
}
var Ws = Symbol("fallback");
function gi(r) {
  for (var t = 0; t < r.length; t++) r[t]();
}
function Zx(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var n = [],
    o = [],
    i = [],
    a = 0,
    s = t.length > 1 ? [] : null;
  return st(function () {
    return gi(i);
  }), function () {
    var l = r() || [],
      c,
      u;
    return l[gg], ve(function () {
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
      if (d === 0) a !== 0 && (gi(i), i = [], n = [], o = [], a = 0, s && (s = [])), e.fallback && (n = [Ws], o[0] = Nt(function (R) {
        return i[0] = R, e.fallback();
      }), a = 1);else if (a === 0) {
        for (o = new Array(d), u = 0; u < d; u++) n[u] = l[u], o[u] = Nt(f);
        a = d;
      } else {
        for (x = new Array(d), b = new Array(d), s && (S = new Array(d)), $ = 0, y = Math.min(a, d); $ < y && n[$] === l[$]; $++);
        for (y = a - 1, m = d - 1; y >= $ && m >= $ && n[y] === l[m]; y--, m--) x[m] = o[y], b[m] = i[y], s && (S[m] = s[y]);
        for (g = new Map(), p = new Array(m + 1), u = m; u >= $; u--) w = l[u], c = g.get(w), p[u] = c === void 0 ? -1 : c, g.set(w, u);
        for (c = $; c <= y; c++) w = n[c], u = g.get(w), u !== void 0 && u !== -1 ? (x[u] = o[c], b[u] = i[c], s && (S[u] = s[c]), u = p[u], g.set(w, u)) : i[c]();
        for (u = $; u < d; u++) u in x ? (o[u] = x[u], i[u] = b[u], s && (s[u] = S[u], s[u](u))) : o[u] = Nt(f);
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
  return st(function () {
    return gi(i);
  }), function () {
    var c = r() || [];
    return c[gg], ve(function () {
      if (c.length === 0) return s !== 0 && (gi(i), i = [], n = [], o = [], s = 0, a = []), e.fallback && (n = [Ws], o[0] = Nt(function (f) {
        return i[0] = f, e.fallback();
      }), s = 1), o;
      for (n[0] === Ws && (i[0](), i = [], n = [], o = [], s = 0), l = 0; l < c.length; l++) l < n.length && n[l] !== c[l] ? a[l](function () {
        return c[l];
      }) : l >= n.length && (o[l] = Nt(u));
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
function Cg(r, t) {
  return ve(function () {
    return r(t || {});
  });
}
function vo() {
  return !0;
}
var Hs = {
  get: function get(r, t, e) {
    return t === ui ? e : r.get(t);
  },
  has: function has(r, t) {
    return t === ui ? !0 : r.has(t);
  },
  set: vo,
  deleteProperty: vo,
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(r, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return r.get(t);
      },
      set: vo,
      deleteProperty: vo
    };
  },
  ownKeys: function ownKeys(r) {
    return r.keys();
  }
};
function Aa(r) {
  return (r = typeof r == "function" ? r() : r) ? r : {};
}
function t0() {
  for (var r = 0, t = this.length; r < t; ++r) {
    var e = this[r]();
    if (e !== void 0) return e;
  }
}
function Zl() {
  for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
    r[_key] = arguments[_key];
  }
  var t = !1;
  for (var a = 0; a < r.length; a++) {
    var s = r[a];
    t = t || !!s && ui in s, r[a] = typeof s == "function" ? (t = !0, ie(s)) : s;
  }
  if (t) return new Proxy({
    get: function get(a) {
      for (var _s2 = r.length - 1; _s2 >= 0; _s2--) {
        var l = Aa(r[_s2])[a];
        if (l !== void 0) return l;
      }
    },
    has: function has(a) {
      for (var _s3 = r.length - 1; _s3 >= 0; _s3--) if (a in Aa(r[_s3])) return !0;
      return !1;
    },
    keys: function keys() {
      var a = [];
      for (var _s4 = 0; _s4 < r.length; _s4++) a.push.apply(a, _toConsumableArray(Object.keys(Aa(r[_s4]))));
      return _toConsumableArray(new Set(a));
    }
  }, Hs);
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
  if (ui in r) {
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
        }, Hs);
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
    }, Hs)), i;
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
      var _V11 = V(),
        _V12 = _slicedToArray(_V11, 2),
        s = _V12[0],
        l = _V12[1];
      te.count || (te.count = 0), te.count++, (e || (e = r())).then(function (c) {
        bn(i), te.count--, l(function () {
          return c["default"];
        }), bn();
      }), t = s;
    } else if (!t) {
      var _yg = yg(function () {
          return (e || (e = r())).then(function (l) {
            return l["default"];
          });
        }),
        _yg2 = _slicedToArray(_yg, 1),
        _s7 = _yg2[0];
      t = _s7;
    }
    var a;
    return ie(function () {
      return (a = t()) && ve(function () {
        if (!i) return a(o);
        var s = te.context;
        bn(i);
        var l = a(o);
        return bn(s), l;
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
function ec(r) {
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
function ji(r) {
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
      return typeof o == "function" && o.length > 0 ? ve(function () {
        return o(t ? n : function () {
          if (!ve(e)) throw n0("Show");
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
  tc = _V14[0],
  i0 = _V14[1];
var Eg = /*#__PURE__*/_createClass(function Eg(t) {
  _classCallCheck(this, Eg);
  v(this, "releaseCallback");
  this.releaseCallback = t;
});
var a0 = /*#__PURE__*/function (_Eg) {
  function a0(e, n) {
    var _n$textureCleanupInte, _n$textureCleanupAgeT;
    var _this2;
    _classCallCheck(this, a0);
    _this2 = _callSuper(this, a0, [e]);
    v(_this2, "textureMap", new Map());
    v(_this2, "zeroReferenceTextureSet", new Set());
    v(_this2, "options");
    _this2.options = {
      textureCleanupIntervalMs: (_n$textureCleanupInte = n.textureCleanupIntervalMs) !== null && _n$textureCleanupInte !== void 0 ? _n$textureCleanupInte : 1e4,
      textureCleanupAgeThreadholdMs: (_n$textureCleanupAgeT = n.textureCleanupAgeThreadholdMs) !== null && _n$textureCleanupAgeT !== void 0 ? _n$textureCleanupAgeT : 6e4
    }, setInterval(function () {
      var o = Date.now(),
        i = _this2.options.textureCleanupAgeThreadholdMs;
      var _iterator9 = _createForOfIteratorHelper(_this2.zeroReferenceTextureSet),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var a = _step9.value;
          o - a.lastUpdate > i && (_this2.releaseCallback(a.id), _this2.textureMap["delete"](a.id), _this2.zeroReferenceTextureSet["delete"](a));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }, _this2.options.textureCleanupIntervalMs);
    return _this2;
  }
  _inherits(a0, _Eg);
  return _createClass(a0, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var o;
      var n = (o = e.options) == null ? void 0 : o.id;
      if (N(n, "Texture must have an id to be registered"), !this.textureMap.has(n)) {
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
      N(n, "Texture must have an id to be registered");
      var o = this.textureMap.get(n);
      o || (this.registerTexture(e), o = this.textureMap.get(n)), N(o, "Texture must have been registered"), e.txType === "SubTexture" && this.incrementTextureRefCount(e.props.texture), o.nodeRefCount++, o.lastUpdate = Date.now(), this.zeroReferenceTextureSet.has(o) && this.zeroReferenceTextureSet["delete"](o);
    }
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount(e) {
      var i;
      var n = (i = e.options) == null ? void 0 : i.id;
      N(n, "Texture must have an id to be registered");
      var o = this.textureMap.get(n);
      N(o, "Texture must have been registered"), o.nodeRefCount--, o.lastUpdate = Date.now(), o.nodeRefCount === 0 && this.zeroReferenceTextureSet.add(o), e.txType === "SubTexture" && this.decrementTextureRefCount(e.props.texture);
    }
  }]);
}(Eg);
var s0 = /*#__PURE__*/function (_Eg2) {
  function s0(e) {
    var _this3;
    _classCallCheck(this, s0);
    _this3 = _callSuper(this, s0, [e]);
    v(_this3, "registry");
    _this3.registry = new FinalizationRegistry(e);
    return _this3;
  }
  _inherits(s0, _Eg2);
  return _createClass(s0, [{
    key: "registerTexture",
    value: function registerTexture(e) {
      var n, o;
      N((n = e.options) == null ? void 0 : n.id, "Texture must have an ID to be registered"), this.registry.register(e, (o = e.options) == null ? void 0 : o.id);
    }
  }, {
    key: "incrementTextureRefCount",
    value: function incrementTextureRefCount() {}
  }, {
    key: "decrementTextureRefCount",
    value: function decrementTextureRefCount() {}
  }]);
}(Eg);
var ln = {
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
        value: Rg(r)
      };
    }
  },
  Rg = function Rg(r) {
    var t = (r & 255) / 255,
      e = r >> 8 & 255,
      n = r >> 16 & 255;
    return "rgba(".concat(r >> 24 & 255, ",").concat(n, ",").concat(e, ",").concat(t, ")");
  },
  l0 = {
    id: "id"
  };
var c0 = /*#__PURE__*/function () {
  function c0(t, e) {
    var _e$appHeight, _e$deviceLogicalPixel, _e$appWidth, _e$deviceLogicalPixel2, _e$deviceLogicalPixel3, _e$deviceLogicalPixel4;
    _classCallCheck(this, c0);
    v(this, "root", null);
    v(this, "canvas", null);
    v(this, "height", 1080);
    v(this, "width", 1920);
    v(this, "scaleX", 1);
    v(this, "scaleY", 1);
    if (cg()) return;
    if (!e) throw new Error("settings is required");
    this.height = Math.ceil((_e$appHeight = e.appHeight) !== null && _e$appHeight !== void 0 ? _e$appHeight : 1080 / ((_e$deviceLogicalPixel = e.deviceLogicalPixelRatio) !== null && _e$deviceLogicalPixel !== void 0 ? _e$deviceLogicalPixel : 1)), this.width = Math.ceil((_e$appWidth = e.appWidth) !== null && _e$appWidth !== void 0 ? _e$appWidth : 1900 / ((_e$deviceLogicalPixel2 = e.deviceLogicalPixelRatio) !== null && _e$deviceLogicalPixel2 !== void 0 ? _e$deviceLogicalPixel2 : 1)), this.scaleX = (_e$deviceLogicalPixel3 = e.deviceLogicalPixelRatio) !== null && _e$deviceLogicalPixel3 !== void 0 ? _e$deviceLogicalPixel3 : 1, this.scaleY = (_e$deviceLogicalPixel4 = e.deviceLogicalPixelRatio) !== null && _e$deviceLogicalPixel4 !== void 0 ? _e$deviceLogicalPixel4 : 1, this.canvas = t, this.root = document.createElement("div"), this.setRootPosition(), document.body.appendChild(this.root), new MutationObserver(this.setRootPosition.bind(this)).observe(t, {
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
        if (ln[e]) {
          var _i3 = (o = ln[e]) == null ? void 0 : o.call(ln, n);
          if (_i3 === null) return;
          if (typeof _i3 == "string") {
            t.style.setProperty(_i3, String(n));
            return;
          }
          _typeof(_i3) == "object" && t.style.setProperty(_i3.prop, _i3.value);
          return;
        }
        if (l0[e]) {
          t.setAttribute(String(ln[e]), String(n));
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
          t.style.top = "".concat(l, "px"), t.style.left = "".concat(s, "px"), t.style.width = "".concat(c, "px"), t.style.height = "".concat(u, "px"), t.style.opacity = "".concat(f), t.style.rotate = "".concat(d, "rad"), t.style.scale = "".concat(g), t.style.color = Rg(p);
        }, i);
      }
      setTimeout(x, a);
    }
  }]);
}();
var ye = /*#__PURE__*/function () {
  function ye(t) {
    _classCallCheck(this, ye);
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
  return _createClass(ye, null, [{
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
v(ye, "uniforms", {}), v(ye, "methods"), v(ye, "onShaderMask"), v(ye, "onColorize"), v(ye, "onEffectMask");
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
var Og = /*#__PURE__*/function () {
  function Og(t) {
    var _this5 = this;
    _classCallCheck(this, Og);
    v(this, "stage");
    v(this, "set");
    this.stage = t;
    var e = _objectSpread(_objectSpread({}, u0), this.getPropertySetters());
    this.set = Object.freeze(Object.fromEntries(Object.entries(e).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        n = _ref4[0],
        o = _ref4[1];
      return [n, function (i, a) {
        i.props[n] !== a && (o(i, a), _this5.stage.requestRender());
      }];
    })));
  }
  return _createClass(Og, [{
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
var Tu = /*#__PURE__*/function (_Tx) {
  function Tu(e, n, o) {
    var _this7;
    _classCallCheck(this, Tu);
    _this7 = _callSuper(this, Tu, [e, n]);
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
  _inherits(Tu, _Tx);
  return _createClass(Tu);
}(Tx);
var Au = 2048;
function Iu(r, t, e, n, o) {
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
      for (var n = 0, o = t.length; n < o; n++) t[n] === "serif" || t[n] === "sans-serif" ? e.push(t[n]) : e.push("\"".concat(t[n], "\""));
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
        } catch (_unused) {
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
        var E;
        switch (this._settings.textOverflow) {
          case "clip":
            E = "";
            break;
          case "ellipsis":
            E = this._settings.overflowSuffix;
            break;
          default:
            E = this._settings.textOverflow;
        }
        this._settings.text = this.wrapWord(this._settings.text, u - b, E);
      }
      var y;
      if (this._settings.wordWrap) y = this.wrapText(this._settings.text, u, x, b);else {
        y = {
          l: this._settings.text.split(/(?:\r\n|\r|\n)/),
          n: []
        };
        var _E2 = y.l.length;
        for (var A = 0; A < _E2 - 1; A++) y.n.push(A);
      }
      var m = y.l;
      if (this._settings.maxLines && m.length > this._settings.maxLines) {
        var _E3 = m.slice(0, this._settings.maxLines);
        var _A2 = null;
        if (this._settings.overflowSuffix) {
          var j = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0,
            M = this.wrapText(_E3[_E3.length - 1], u - j, x, b);
          _E3[_E3.length - 1] = "".concat(M.l[0]).concat(this._settings.overflowSuffix), _A2 = [M.l.length > 1 ? M.l[1] : ""];
        } else _A2 = [""];
        var B;
        var P = m.length;
        var _ = 0;
        var L = y.n.length;
        for (B = this._settings.maxLines; B < P; B++) _A2[_] += "".concat(_A2[_] ? " " : "").concat(m[B]), B + 1 < L && y.n[B + 1] && _++;
        t.remainingText = _A2.join("\n"), t.moreTextLines = !0, m = _E3;
      } else t.moreTextLines = !1, t.remainingText = "";
      var w = 0;
      var R = [];
      for (var _E4 = 0; _E4 < m.length; _E4++) {
        var _A3 = this.measureText(m[_E4], x) + (_E4 === 0 ? b : 0);
        R.push(_A3), w = Math.max(w, _A3);
      }
      t.lineWidths = R, l || (S = w + n + o, $ = w), s = s || i;
      var I;
      return c ? I = c : I = Iu(this._settings.textBaseline, i, s, m.length, a), a === null && (a = i), t.w = S, t.h = I, t.lines = m, t.precision = e, S || (S = 1), I || (I = 1), (f || d) && (S = Math.min(S, d - f)), (g || p) && (I = Math.min(I, p - g)), t.width = S, t.innerWidth = $, t.height = I, t.fontSize = i, t.cutSx = f, t.cutSy = g, t.cutEx = d, t.cutEy = p, t.lineHeight = s, t.lineWidths = R, t.offsetY = a, t.paddingLeft = n, t.paddingRight = o, t.letterSpacing = x, t.textIndent = b, t;
    }
  }, {
    key: "draw",
    value: function draw(t, e) {
      var n = this.getPrecision(),
        o = (e == null ? void 0 : e.lines) || t.lines,
        i = (e == null ? void 0 : e.lineWidths) || t.lineWidths,
        a = e ? Iu(this._settings.textBaseline, t.fontSize, t.lineHeight, e.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * n) : t.height;
      this._canvas.width = Math.min(Math.ceil(t.width + this._settings.textRenderIssueMargin), Au), this._canvas.height = Math.min(Math.ceil(a), Au), this.setFontProperties(), t.fontSize >= 128 && (this._context.globalAlpha = .01, this._context.fillRect(0, 0, .01, .01), this._context.globalAlpha = 1), (t.cutSx || t.cutSy) && this._context.translate(-t.cutSx, -t.cutSy);
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
        this._context.fillStyle = ba(_f2);
        for (var b = 0; b < c.length; b++) {
          var S = c[b];
          this._context.fillRect(S.x - p, S.y - t.offsetY + g, S.w + x + p, _d2);
        }
      }
      var u = null;
      this._settings.shadow && (u = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur], this._context.shadowColor = ba(this._settings.shadowColor), this._context.shadowOffsetX = this._settings.shadowOffsetX * n, this._context.shadowOffsetY = this._settings.shadowOffsetY * n, this._context.shadowBlur = this._settings.shadowBlur * n), this._context.fillStyle = ba(this._settings.textColor);
      for (var _f3 = 0, _d3 = c.length; _f3 < _d3; _f3++) {
        var _g2 = c[_f3];
        if (t.letterSpacing === 0) this._context.fillText(_g2.text, _g2.x, _g2.y);else {
          var _p2 = _g2.text.split("");
          var _x2 = _g2.x;
          for (var _b2 = 0, _S2 = _p2.length; _b2 < _S2; _b2++) this._context.fillText(_p2[_b2], _x2, _g2.y), _x2 += this.measureText(_p2[_b2], t.letterSpacing);
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
var Cu = (typeof self === "undefined" ? "undefined" : _typeof(self)) > "u" ? globalThis : self;
var lg;
var Eu = ((lg = Cu.document) == null ? void 0 : lg.fonts) || Cu.fonts;
function d0(r) {
  var t = r.fontFamily,
    e = r.fontStyle,
    n = r.fontWeight,
    o = r.fontStretch,
    i = r.fontSize;
  return [e, n, o, "".concat(i, "px"), t].join(" ");
}
var h0 = Er(0, 0, 0, 0);
var Ru = /*#__PURE__*/function (_Og) {
  function Ru(e) {
    var _this10;
    _classCallCheck(this, Ru);
    _this10 = _callSuper(this, Ru, [e]);
    v(_this10, "canvas");
    v(_this10, "context");
    v(_this10, "rendererBounds");
    (typeof OffscreenCanvas === "undefined" ? "undefined" : _typeof(OffscreenCanvas)) < "u" ? _this10.canvas = new OffscreenCanvas(0, 0) : _this10.canvas = document.createElement("canvas");
    var n = _this10.canvas.getContext("2d");
    n || (_this10.canvas = document.createElement("canvas"), n = _this10.canvas.getContext("2d")), N(n), _this10.context = n, _this10.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: _this10.stage.options.appWidth,
      y2: _this10.stage.options.appHeight
    };
    return _this10;
  }
  _inherits(Ru, _Og);
  return _createClass(Ru, [{
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
      return e instanceof Tu;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      N(e instanceof Tu), Eu.add(e.fontFace);
    }
  }, {
    key: "createState",
    value: function createState(e) {
      return {
        props: e,
        status: "initialState",
        updateScheduled: !1,
        emitter: new Zt(),
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
          Eu.load(b).then(this.onFontLoaded.bind(this, e, b))["catch"](this.onFontLoadError.bind(this, e, b));
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
          textColor: ct(e.props.color),
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
        var _b4 = Er(n, o, l !== "none" ? n + i : 1 / 0, l === "both" ? o + a : 1 / 0, h0);
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
      var E, A, B, P, _, L, j, M, W, ee, _e, Te;
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
      Ql({
        x: 0,
        y: 0,
        width: a.options.appWidth,
        height: a.options.appHeight
      }, S), N(s, "canvasPages is not defined"), N(u, "renderWindow is not defined");
      var y = (u.y2 - u.y1) / 3,
        _e$props3 = e.props,
        m = _e$props3.zIndex,
        w = _e$props3.color,
        R = i * Ix(w),
        I = $n(4294967295, R);
      s[0].valid && this.stage.renderer.addQuad({
        alpha: R,
        clippingRect: o,
        colorBl: I,
        colorBr: I,
        colorTl: I,
        colorTr: I,
        width: ((A = (E = s[0].texture) == null ? void 0 : E.dimensions) == null ? void 0 : A.width) || 0,
        height: ((P = (B = s[0].texture) == null ? void 0 : B.dimensions) == null ? void 0 : P.height) || 0,
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
        height: ((M = (j = s[1].texture) == null ? void 0 : j.dimensions) == null ? void 0 : M.height) || 0,
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
        width: ((ee = (W = s[2].texture) == null ? void 0 : W.dimensions) == null ? void 0 : ee.width) || 0,
        height: ((Te = (_e = s[2].texture) == null ? void 0 : _e.dimensions) == null ? void 0 : Te.height) || 0,
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
      _superPropGet(Ru, "setIsRenderable", this, 3)([e, n]), (o = e.canvasPages) == null || o.forEach(function (i) {
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
}(Og);
var _g = /*#__PURE__*/function (_Wr) {
  function _g(t) {
    _classCallCheck(this, _g);
    return _callSuper(this, _g, [{
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
  _inherits(_g, _Wr);
  return _createClass(_g, [{
    key: "bindTextures",
    value: function bindTextures(t) {
      var e = this.glw;
      e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
    }
  }]);
}(Wr);
v(_g, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
var Pg = /*#__PURE__*/function (_Wr2) {
  function Pg(e) {
    var _this12;
    _classCallCheck(this, Pg);
    _this12 = _callSuper(this, Pg, [{
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
  _inherits(Pg, _Wr2);
  return _createClass(Pg, [{
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
}(Wr);
v(Pg, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: function fragment(e) {
    return "\n      #define txUnits ".concat(e, "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(e, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(e).keys()).map(function (n) {
      return "\n          ".concat(n !== 0 ? "else " : "", "if (idx == ").concat(n, ") {\n            return texture2D(textures[").concat(n, "], uv);\n          }\n        ");
    }).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ");
  }
});
function Ng(r, t) {
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
var Ia = new Map(),
  v0 = function v0(r, t) {
    var e = JSON.stringify(r);
    if (Ia.has(e)) return Ia.get(e);
    var n = (r !== null && r !== void 0 ? r : []).map(function (o) {
      return {
        type: o.type,
        props: t[o.type].resolveDefaults(o.props || {})
      };
    });
    return Ia.set(e, n), n;
  },
  pt = /*#__PURE__*/function (_Wr3) {
    function pt(e, n, o) {
      var _this13;
      _classCallCheck(this, pt);
      var i = pt.createShader(n, o);
      _this13 = _callSuper(this, pt, [{
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
      _this13.effects = i.effects, _this13.calculateProps = Ng(_this13.calculateProps.bind(_this13));
      return _this13;
    }
    _inherits(pt, _Wr3);
    return _createClass(pt, [{
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
          var _i$props;
          var s = _this14.effects[a],
            l = n[s.name],
            c = (_i$props = i.props) !== null && _i$props !== void 0 ? _i$props : {},
            u = s.uniformInfo;
          Object.keys(c).forEach(function (f) {
            var d = l.uniforms[f],
              g = u[f];
            var p = d.validator ? d.validator(c[f], c) : c[f];
            Array.isArray(p) && (p = new Float32Array(p)), o.push({
              name: g.name,
              value: p
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
          var _p$props;
          var x = n[p.type],
            b = x.resolveDefaults((_p$props = p.props) !== null && _p$props !== void 0 ? _p$props : {}),
            S = [];
          for (var I in x.methods) {
            var E = I;
            var A = x.methods[I];
            i[I] && i[I] !== A && (E = pt.resolveMethodDuplicate(I, A, i)), i[E] = A.replace("function", E), S.push({
              m: I,
              cm: E
            });
          }
          var $ = x.onShaderMask instanceof Function ? x.onShaderMask(b) : x.onShaderMask,
            y = x.onColorize instanceof Function ? x.onColorize(b) : x.onColorize,
            m = x.onEffectMask instanceof Function ? x.onEffectMask(b) : x.onEffectMask;
          S.forEach(function (I) {
            var E = I.m,
              A = I.cm,
              B = new RegExp("\\$".concat(E), "g");
            $ && ($ = $.replace(B, A)), y && (y = y.replace(B, A)), m && (m = m.replace(B, A));
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
          fragment: pt.fragment(a, f, u, g),
          vertex: pt.vertex()
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
  }(Wr);
v(pt, "z$__type__Props"), v(pt, "vertex", function () {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ";
}), v(pt, "fragment", function (e, n, o, i) {
  return "\n    # ifdef GL_FRAGMENT_PRESICISON_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(e, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(n, "\n\n    ").concat(o, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(i, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  ");
});
var Rr = pt;
var Ys = /*#__PURE__*/function (_Wr4) {
  function Ys(t) {
    _classCallCheck(this, Ys);
    return _callSuper(this, Ys, [{
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
  _inherits(Ys, _Wr4);
  return _createClass(Ys, [{
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
}(Wr);
v(Ys, "z$__type__Props"), v(Ys, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRESICISON_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
var g0 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
  Li = /*#__PURE__*/function (_Wr5) {
    function Li(t) {
      _classCallCheck(this, Li);
      return _callSuper(this, Li, [{
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
    _inherits(Li, _Wr5);
    return _createClass(Li, [{
      key: "bindTextures",
      value: function bindTextures(t) {
        var e = this.glw;
        e.activeTexture(0), e.bindTexture(t[0].ctxTexture);
      }
    }, {
      key: "bindProps",
      value: function bindProps(t) {
        var e = Li.resolveDefaults(t);
        for (var n in e) if (n === "transform") this.setUniform("u_transform", !1, e[n]);else if (n === "scrollY") this.setUniform("u_scrollY", e[n]);else if (n === "color") {
          var o = ct(e.color);
          this.setUniform("u_color", o);
        } else n === "size" ? this.setUniform("u_size", e[n]) : n === "distanceRange" ? this.setUniform("u_distanceRange", e[n]) : n === "debug" && this.setUniform("u_debug", e[n] ? 1 : 0);
      }
    }], [{
      key: "resolveDefaults",
      value: function resolveDefaults() {
        var _t$transform, _t$scrollY, _t$color, _t$size, _t$distanceRange, _t$debug;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return {
          transform: (_t$transform = t.transform) !== null && _t$transform !== void 0 ? _t$transform : g0,
          scrollY: (_t$scrollY = t.scrollY) !== null && _t$scrollY !== void 0 ? _t$scrollY : 0,
          color: (_t$color = t.color) !== null && _t$color !== void 0 ? _t$color : 4294967295,
          size: (_t$size = t.size) !== null && _t$size !== void 0 ? _t$size : 16,
          distanceRange: (_t$distanceRange = t.distanceRange) !== null && _t$distanceRange !== void 0 ? _t$distanceRange : 1,
          debug: (_t$debug = t.debug) !== null && _t$debug !== void 0 ? _t$debug : !1
        };
      }
    }]);
  }(Wr);
v(Li, "shaderSources", {
  vertex: "\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      precision highp float;\n\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
var Ks = Li;
var $r = /*#__PURE__*/function (_ye) {
  function $r() {
    var _this16;
    _classCallCheck(this, $r);
    _this16 = _callSuper(this, $r, arguments);
    v(_this16, "name", "radius");
    return _this16;
  }
  _inherits($r, _ye);
  return _createClass($r, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "radius";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$radius;
      return {
        radius: (_e$radius = e.radius) !== null && _e$radius !== void 0 ? _e$radius : 10
      };
    }
  }]);
}(ye);
v($r, "z$__type__Props"), v($r, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), v($r, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), v($r, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  "), v($r, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
var Sn = /*#__PURE__*/function (_ye2) {
  function Sn() {
    var _this17;
    _classCallCheck(this, Sn);
    _this17 = _callSuper(this, Sn, arguments);
    v(_this17, "name", "border");
    return _this17;
  }
  _inherits(Sn, _ye2);
  return _createClass(Sn, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "border";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width, _e$color;
      return {
        width: (_e$width = e.width) !== null && _e$width !== void 0 ? _e$width : 10,
        color: (_e$color = e.color) !== null && _e$color !== void 0 ? _e$color : 4294967295
      };
    }
  }]);
}(ye);
v(Sn, "z$__type__Props"), v(Sn, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ct(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Sn, "onEffectMask", "\n  float mask = clamp(shaderMask + width, 0.0, 1.0) - clamp(shaderMask, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  "), v(Sn, "onColorize", "\n    return color;\n  ");
var Rt = /*#__PURE__*/function (_ye3) {
  function Rt() {
    var _this18;
    _classCallCheck(this, Rt);
    _this18 = _callSuper(this, Rt, arguments);
    v(_this18, "name", "linearGradient");
    return _this18;
  }
  _inherits(Rt, _ye3);
  return _createClass(Rt, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "linearGradient".concat(e.colors.length);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$colors, _e$angle;
      var n = (_e$colors = e.colors) !== null && _e$colors !== void 0 ? _e$colors : [4278190080, 4294967295];
      var o = e.stops || [];
      if (o.length === 0 || o.length !== n.length) {
        var i = n.length;
        var a = 0;
        var s = o;
        for (; a < i; a++) o[a] ? (s[a] = o[a], o[a - 1] === void 0 && s[a - 2] !== void 0 && (s[a - 1] = s[a - 2] + (o[a] - s[a - 2]) / 2)) : s[a] = a * (1 / (n.length - 1));
        o = s;
      }
      return {
        colors: n,
        stops: o,
        angle: (_e$angle = e.angle) !== null && _e$angle !== void 0 ? _e$angle : 0
      };
    }
  }]);
}(ye);
v(Rt, "z$__type__Props"), v(Rt, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: function validator(e) {
      return e.map(function (o) {
        return ct(o);
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
}), v(Rt, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
}), v(Rt, "ColorLoop", function (e) {
  var n = "";
  for (var o = 2; o < e; o++) n += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return n;
}), v(Rt, "onColorize", function (e) {
  var n = e.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(Rt.ColorLoop(n), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var Gs = Rt;
var Vs = /*#__PURE__*/function (_ye4) {
  function Vs() {
    var _this19;
    _classCallCheck(this, Vs);
    _this19 = _callSuper(this, Vs, arguments);
    v(_this19, "name", "grayscale");
    return _this19;
  }
  _inherits(Vs, _ye4);
  return _createClass(Vs, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "grayscale";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$amount;
      return {
        amount: (_e$amount = e.amount) !== null && _e$amount !== void 0 ? _e$amount : 1
      };
    }
  }]);
}(ye);
v(Vs, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
}), v(Vs, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
var br = /*#__PURE__*/function (_ye5) {
  function br() {
    var _this20;
    _classCallCheck(this, br);
    _this20 = _callSuper(this, br, arguments);
    v(_this20, "name", "borderRight");
    return _this20;
  }
  _inherits(br, _ye5);
  return _createClass(br, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderRight";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width2, _e$color2;
      return {
        width: (_e$width2 = e.width) !== null && _e$width2 !== void 0 ? _e$width2 : 10,
        color: (_e$color2 = e.color) !== null && _e$color2 !== void 0 ? _e$color2 : 4294967295
      };
    }
  }]);
}(ye);
v(br, "z$__type__Props"), v(br, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ct(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(br, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(br, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(br, "onColorize", "\n    return color;\n  ");
var Sr = /*#__PURE__*/function (_ye6) {
  function Sr() {
    var _this21;
    _classCallCheck(this, Sr);
    _this21 = _callSuper(this, Sr, arguments);
    v(_this21, "name", "borderTop");
    return _this21;
  }
  _inherits(Sr, _ye6);
  return _createClass(Sr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderTop";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width3, _e$color3;
      return {
        width: (_e$width3 = e.width) !== null && _e$width3 !== void 0 ? _e$width3 : 10,
        color: (_e$color3 = e.color) !== null && _e$color3 !== void 0 ? _e$color3 : 4294967295
      };
    }
  }]);
}(ye);
v(Sr, "z$__type__Props"), v(Sr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ct(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Sr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(Sr, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(Sr, "onColorize", "\n    return color;\n  ");
var wr = /*#__PURE__*/function (_ye7) {
  function wr() {
    var _this22;
    _classCallCheck(this, wr);
    _this22 = _callSuper(this, wr, arguments);
    v(_this22, "name", "borderBottom");
    return _this22;
  }
  _inherits(wr, _ye7);
  return _createClass(wr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderBottom";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width4, _e$color4;
      return {
        width: (_e$width4 = e.width) !== null && _e$width4 !== void 0 ? _e$width4 : 10,
        color: (_e$color4 = e.color) !== null && _e$color4 !== void 0 ? _e$color4 : 4294967295
      };
    }
  }]);
}(ye);
v(wr, "z$__type__Props"), v(wr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ct(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(wr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(wr, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(wr, "onColorize", "\n    return color;\n  ");
var Tr = /*#__PURE__*/function (_ye8) {
  function Tr() {
    var _this23;
    _classCallCheck(this, Tr);
    _this23 = _callSuper(this, Tr, arguments);
    v(_this23, "name", "borderLeft");
    return _this23;
  }
  _inherits(Tr, _ye8);
  return _createClass(Tr, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "borderLeft";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width5, _e$color5;
      return {
        width: (_e$width5 = e.width) !== null && _e$width5 !== void 0 ? _e$width5 : 10,
        color: (_e$color5 = e.color) !== null && _e$color5 !== void 0 ? _e$color5 : 4294967295
      };
    }
  }]);
}(ye);
v(Tr, "z$__type__Props"), v(Tr, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    validator: function validator(e) {
      return ct(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Tr, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
}), v(Tr, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  "), v(Tr, "onColorize", "\n    return color;\n  ");
var wn = /*#__PURE__*/function (_ye9) {
  function wn() {
    var _this24;
    _classCallCheck(this, wn);
    _this24 = _callSuper(this, wn, arguments);
    v(_this24, "name", "glitch");
    return _this24;
  }
  _inherits(wn, _ye9);
  return _createClass(wn, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "glitch";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$amplitude, _e$narrowness, _e$blockiness, _e$minimizer, _e$time;
      return {
        amplitude: (_e$amplitude = e.amplitude) !== null && _e$amplitude !== void 0 ? _e$amplitude : .2,
        narrowness: (_e$narrowness = e.narrowness) !== null && _e$narrowness !== void 0 ? _e$narrowness : 4,
        blockiness: (_e$blockiness = e.blockiness) !== null && _e$blockiness !== void 0 ? _e$blockiness : 2,
        minimizer: (_e$minimizer = e.minimizer) !== null && _e$minimizer !== void 0 ? _e$minimizer : 8,
        time: (_e$time = e.time) !== null && _e$time !== void 0 ? _e$time : Date.now()
      };
    }
  }]);
}(ye);
v(wn, "z$__type__Props"), v(wn, "uniforms", {
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
}), v(wn, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
}), v(wn, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
var ti = /*#__PURE__*/function (_ye10) {
  function ti() {
    var _this25;
    _classCallCheck(this, ti);
    _this25 = _callSuper(this, ti, arguments);
    v(_this25, "name", "fadeOut");
    return _this25;
  }
  _inherits(ti, _ye10);
  return _createClass(ti, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "fadeOut";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$fade;
      return {
        fade: (_e$fade = e.fade) !== null && _e$fade !== void 0 ? _e$fade : 10
      };
    }
  }]);
}(ye);
v(ti, "z$__type__Props"), v(ti, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: function validator(e) {
      var n = e;
      return Array.isArray(n) ? n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 ? n = [n[0], n[1], n[2], n[0]] : n.length !== 4 && (n = [n[0], n[0], n[0], n[0]]) : typeof n == "number" && (n = [n, n, n, n]), n;
    }
  }
}), v(ti, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
var Kt = /*#__PURE__*/function (_ye11) {
  function Kt() {
    var _this26;
    _classCallCheck(this, Kt);
    _this26 = _callSuper(this, Kt, arguments);
    v(_this26, "name", "radialGradient");
    return _this26;
  }
  _inherits(Kt, _ye11);
  return _createClass(Kt, null, [{
    key: "getEffectKey",
    value: function getEffectKey(e) {
      return "radialGradient".concat(e.colors.length);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$colors2, _e$width6, _ref5, _e$height, _e$pivot;
      var n = (_e$colors2 = e.colors) !== null && _e$colors2 !== void 0 ? _e$colors2 : [4278190080, 4294967295];
      var o = e.stops || [];
      if (o.length === 0 || o.length !== n.length) {
        var i = n.length;
        var a = 0;
        var s = o;
        for (; a < i; a++) o[a] ? (s[a] = o[a], o[a - 1] === void 0 && s[a - 2] !== void 0 && (s[a - 1] = s[a - 2] + (o[a] - s[a - 2]) / 2)) : s[a] = a * (1 / (n.length - 1));
        o = s;
      }
      return {
        colors: n,
        stops: o,
        width: (_e$width6 = e.width) !== null && _e$width6 !== void 0 ? _e$width6 : 0,
        height: (_ref5 = (_e$height = e.height) !== null && _e$height !== void 0 ? _e$height : e.width) !== null && _ref5 !== void 0 ? _ref5 : 0,
        pivot: (_e$pivot = e.pivot) !== null && _e$pivot !== void 0 ? _e$pivot : [.5, .5]
      };
    }
  }]);
}(ye);
v(Kt, "z$__type__Props"), v(Kt, "uniforms", {
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
        return ct(o);
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
}), v(Kt, "ColorLoop", function (e) {
  var n = "";
  for (var o = 2; o < e; o++) n += "colorOut = mix(colorOut, colors[".concat(o, "], clamp((dist - stops[").concat(o - 1, "]) / (stops[").concat(o, "] - stops[").concat(o - 1, "]), 0.0, 1.0));");
  return n;
}), v(Kt, "onColorize", function (e) {
  var n = e.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(Kt.ColorLoop(n), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
var Xs = Kt;
var Ar = /*#__PURE__*/function (_ye12) {
  function Ar() {
    var _this27;
    _classCallCheck(this, Ar);
    _this27 = _callSuper(this, Ar, arguments);
    v(_this27, "name", "radialProgress");
    return _this27;
  }
  _inherits(Ar, _ye12);
  return _createClass(Ar, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "radialProgress";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width7, _e$progress, _e$offset, _e$range, _e$rounded, _e$radius2, _e$color6;
      return {
        width: (_e$width7 = e.width) !== null && _e$width7 !== void 0 ? _e$width7 : 10,
        progress: (_e$progress = e.progress) !== null && _e$progress !== void 0 ? _e$progress : .5,
        offset: (_e$offset = e.offset) !== null && _e$offset !== void 0 ? _e$offset : 0,
        range: (_e$range = e.range) !== null && _e$range !== void 0 ? _e$range : Math.PI * 2,
        rounded: (_e$rounded = e.rounded) !== null && _e$rounded !== void 0 ? _e$rounded : !1,
        radius: (_e$radius2 = e.radius) !== null && _e$radius2 !== void 0 ? _e$radius2 : 1,
        color: (_e$color6 = e.color) !== null && _e$color6 !== void 0 ? _e$color6 : 4294967295
      };
    }
  }]);
}(ye);
v(Ar, "z$__type__Props"), v(Ar, "uniforms", {
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
      return ct(e);
    },
    method: "uniform4fv",
    type: "vec4"
  }
}), v(Ar, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
}), v(Ar, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  "), v(Ar, "onColorize", "\n    return color;\n  ");
var Ir = /*#__PURE__*/function (_ye13) {
  function Ir() {
    var _this28;
    _classCallCheck(this, Ir);
    _this28 = _callSuper(this, Ir, arguments);
    v(_this28, "name", "holePunch");
    return _this28;
  }
  _inherits(Ir, _ye13);
  return _createClass(Ir, null, [{
    key: "getEffectKey",
    value: function getEffectKey() {
      return "holePunch";
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$radius3;
      return {
        x: e.x || 0,
        y: e.y || 0,
        width: e.width || 50,
        height: e.height || 50,
        radius: (_e$radius3 = e.radius) !== null && _e$radius3 !== void 0 ? _e$radius3 : 0
      };
    }
  }]);
}(ye);
v(Ir, "z$__type__Props"), v(Ir, "uniforms", {
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
}), v(Ir, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
}), v(Ir, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  "), v(Ir, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
var Fg = "RoundedRectangle";
var Bg = /*#__PURE__*/function (_Cx) {
  function Bg(e) {
    var _this29;
    _classCallCheck(this, Bg);
    _this29 = _callSuper(this, Bg);
    v(_this29, "shType");
    _this29.shType = e, e !== Fg && console.warn("Unsupported shader:", e);
    return _this29;
  }
  _inherits(Bg, _Cx);
  return _createClass(Bg, [{
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
    this.registerShaderType("DefaultShader", _g), this.registerShaderType("DefaultShaderBatched", Pg), this.registerShaderType("RoundedRectangle", Ys), this.registerShaderType("DynamicShader", Rr), this.registerShaderType("SdfShader", Ks), this.registerEffectType("border", Sn), this.registerEffectType("borderBottom", wr), this.registerEffectType("borderLeft", Tr), this.registerEffectType("borderRight", br), this.registerEffectType("borderTop", Sr), this.registerEffectType("fadeOut", ti), this.registerEffectType("linearGradient", Gs), this.registerEffectType("radialGradient", Xs), this.registerEffectType("grayscale", Vs), this.registerEffectType("glitch", wn), this.registerEffectType("radius", $r), this.registerEffectType("radialProgress", Ar), this.registerEffectType("holePunch", Ir);
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
      if (!n) throw new Error("Shader type \"".concat(t, "\" is not registered"));
      if (this.renderer.mode === "canvas" && n.prototype instanceof Wr) return {
        shader: new Bg(t),
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
      var e = Rr.resolveDefaults(t, this.effectConstructors),
        n = Rr.makeCacheKey(e, this.effectConstructors);
      if (n && this.shCache.has(n)) return {
        shader: this.shCache.get(n),
        props: e
      };
      var o = new Rr(this.renderer, t, this.effectConstructors);
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(r) {
      var e;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(r);
          case 2:
            _context.next = 4;
            return _context.sent.arrayBuffer();
          case 4:
            e = _context.sent;
            return _context.abrupt("return", r.indexOf(".ktx") !== -1 ? x0(e) : $0(e));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function y0(_x3) {
      return _ref6.apply(this, arguments);
    };
  }(),
  x0 = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(r) {
      var t, e, n, o, i, a, s;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
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
            return _context2.abrupt("return", {
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
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function x0(_x4) {
      return _ref7.apply(this, arguments);
    };
  }(),
  $0 = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(r) {
      var s, l, c, u, f, d, g, p, x, b, S, $;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
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
            return _context3.abrupt("return", {
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
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function $0(_x5) {
      return _ref8.apply(this, arguments);
    };
  }(),
  Pn = /*#__PURE__*/function (_ug) {
    function Pn(e, n) {
      var _this30;
      _classCallCheck(this, Pn);
      _this30 = _callSuper(this, Pn, [e]);
      v(_this30, "props");
      _this30.props = Pn.resolveDefaults(n);
      return _this30;
    }
    _inherits(Pn, _ug);
    return _createClass(Pn, [{
      key: "hasAlphaChannel",
      value: function hasAlphaChannel(e) {
        return e.indexOf("image/png") !== -1;
      }
    }, {
      key: "getTextureData",
      value: function () {
        var _getTextureData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var _this$props, e, n, i, a, o;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _this$props = this.props, e = _this$props.src, n = _this$props.premultiplyAlpha;
                if (e) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return", {
                  data: null
                });
              case 3:
                if (!(e instanceof ImageData)) {
                  _context4.next = 5;
                  break;
                }
                return _context4.abrupt("return", {
                  data: e,
                  premultiplyAlpha: n
                });
              case 5:
                if (!m0(e)) {
                  _context4.next = 7;
                  break;
                }
                return _context4.abrupt("return", y0(e));
              case 7:
                if (!this.txManager.imageWorkerManager) {
                  _context4.next = 11;
                  break;
                }
                _context4.next = 10;
                return this.txManager.imageWorkerManager.getImage(e, n);
              case 10:
                return _context4.abrupt("return", _context4.sent);
              case 11:
                if (!this.txManager.hasCreateImageBitmap) {
                  _context4.next = 25;
                  break;
                }
                _context4.next = 14;
                return fetch(e);
              case 14:
                _context4.next = 16;
                return _context4.sent.blob();
              case 16:
                i = _context4.sent;
                a = n !== null && n !== void 0 ? n : this.hasAlphaChannel(i.type);
                _context4.next = 20;
                return createImageBitmap(i, {
                  premultiplyAlpha: a ? "premultiply" : "none",
                  colorSpaceConversion: "none",
                  imageOrientation: "none"
                });
              case 20:
                _context4.t0 = _context4.sent;
                _context4.t1 = a;
                return _context4.abrupt("return", {
                  data: _context4.t0,
                  premultiplyAlpha: _context4.t1
                });
              case 25:
                o = new Image();
                e.substr(0, 5) !== "data:" && (o.crossOrigin = "Anonymous");
                o.src = e;
                _context4.next = 30;
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
                return _context4.abrupt("return", {
                  data: o,
                  premultiplyAlpha: n !== null && n !== void 0 ? n : !0
                });
              case 31:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function getTextureData() {
          return _getTextureData.apply(this, arguments);
        }
        return getTextureData;
      }()
    }], [{
      key: "makeCacheKey",
      value: function makeCacheKey(e) {
        var n = Pn.resolveDefaults(e);
        return n.src instanceof ImageData ? !1 : "ImageTexture,".concat(n.src, ",").concat(n.premultiplyAlpha);
      }
    }, {
      key: "resolveDefaults",
      value: function resolveDefaults(e) {
        var _e$src, _e$premultiplyAlpha;
        return {
          src: (_e$src = e.src) !== null && _e$src !== void 0 ? _e$src : "",
          premultiplyAlpha: (_e$premultiplyAlpha = e.premultiplyAlpha) !== null && _e$premultiplyAlpha !== void 0 ? _e$premultiplyAlpha : !0
        };
      }
    }]);
  }(ug);
v(Pn, "z$__type__Props");
var Qs = Pn;
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
var Tn = /*#__PURE__*/function () {
  function Tn(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Tn);
    v(this, "iterator");
    v(this, "peekBuffer", []);
    v(this, "_lastIndex");
    this.iterator = t, this.iterator = t, this._lastIndex = e - 1, this.peekBuffer = [];
  }
  return _createClass(Tn, [{
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
function An(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var e, n;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          e = t;
        case 1:
          if (!(e < r.length)) {
            _context5.next = 10;
            break;
          }
          n = r.codePointAt(e);
          if (!(n === void 0)) {
            _context5.next = 5;
            break;
          }
          throw new Error("Invalid Unicode code point");
        case 5:
          _context5.next = 7;
          return n;
        case 7:
          e += n <= 65535 ? 1 : 2;
        case 8:
          _context5.next = 1;
          break;
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })();
}
function w0(r, t, e) {
  var n = e.shapeText(t, new Tn(An(r, 0), 0));
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
  N(p, "Font face must be loaded"), N(p.loaded, "Font face must be loaded"), N(p.data, "Font face must be loaded"), N(p.shaper, "Font face must be loaded");
  var y = s / p.data.info.size,
    m = l / y,
    w = i / y,
    R = c / y,
    I = d[r],
    E = (I == null ? void 0 : I.codepointIndex) || 0,
    A = (I == null ? void 0 : I.maxX) || 0,
    B = (I == null ? void 0 : I.maxY) || 0;
  var P = A,
    _ = B,
    L = t,
    j = e,
    M = 0;
  var W = {
      codepointIndex: -1,
      bufferOffset: -1,
      xStart: -1
    },
    ee = p.shaper,
    _e = {
      letterSpacing: R
    };
  var Te = ee.shapeText(_e, new Tn(An(n, E), E)),
    He,
    zt = -1;
  var rn = [],
    xx = a / y,
    $x = w0(S, _e, ee);
  var co = !0;
  for (; co;) {
    var It = ($ === 0 || r + 1 < $) && (f !== "both" || b || j + m + p.maxCharHeight <= xx),
      dt = It ? w : w - $x;
    var Ce = 0;
    var nn = j + m >= g.y1,
      on = j <= g.y2,
      ht = nn && on;
    for (; (He = Te.next()) && !He.done;) {
      var pe = He.value;
      if (r === d.length) d.push({
        codepointIndex: pe.cluster,
        maxY: _,
        maxX: P
      });else if (r > d.length) throw new Error("Unexpected lineCache length");
      if (pe.codepoint === 32 || pe.codepoint === 10 ? W.codepointIndex !== -1 && (W.codepointIndex = -1, Ce = L) : W.codepointIndex === -1 && (W.codepointIndex = pe.cluster, W.bufferOffset = M, W.xStart = Ce), pe.mapped) {
        var bx = L + pe.xOffset + pe.width;
        if (f !== "none" && bx >= dt && W.codepointIndex !== -1 && W.xStart > 0) {
          if (It) {
            Te = ee.shapeText(_e, new Tn(An(n, W.codepointIndex), W.codepointIndex)), M = W.bufferOffset;
            break;
          } else Te = ee.shapeText(_e, new Tn(An(S, 0), 0)), L = W.xStart, M = W.bufferOffset, f = "none";
        } else {
          var an = L + pe.xOffset,
            sn = j + pe.yOffset;
          if (ht) {
            zt === -1 && (zt = M);
            var uo = p.getAtlasEntry(pe.glyphId),
              fo = uo.x / p.data.common.scaleW,
              ho = uo.y / p.data.common.scaleH,
              yu = uo.width / p.data.common.scaleW,
              xu = uo.height / p.data.common.scaleH;
            u[M++] = an, u[M++] = sn, u[M++] = fo, u[M++] = ho, u[M++] = an + pe.width, u[M++] = sn, u[M++] = fo + yu, u[M++] = ho, u[M++] = an, u[M++] = sn + pe.height, u[M++] = fo, u[M++] = ho + xu, u[M++] = an + pe.width, u[M++] = sn + pe.height, u[M++] = fo + yu, u[M++] = ho + xu;
          }
          _ = Math.max(_, sn + pe.height), P = Math.max(P, an + pe.width), L += pe.xAdvance;
        }
      } else if (pe.codepoint === 10) {
        if (It) break;
        Te = ee.shapeText(_e, new Tn(An(S, 0), 0)), f = "none";
      }
    }
    zt !== -1 && (rn.push({
      bufferStart: zt,
      bufferEnd: M
    }), zt = -1), L = 0, j += m, r++, W.codepointIndex = -1, Ce = 0, !x && f === "both" && j > g.y2 || He && He.done ? co = !1 : It || (co = !1);
  }
  if (o === "center") {
    var _It = f === "none" ? P : w;
    for (var _dt = 0; _dt < rn.length; _dt++) {
      var _Ce = rn[_dt],
        _nn = u[_Ce.bufferEnd - 4] - u[_Ce.bufferStart],
        _on = (_It - _nn) / 2;
      for (var _ht = _Ce.bufferStart; _ht < _Ce.bufferEnd; _ht += 4) u[_ht] += _on;
    }
  } else if (o === "right") {
    var _It2 = f === "none" ? P : w;
    for (var _dt2 = 0; _dt2 < rn.length; _dt2++) {
      var _Ce2 = rn[_dt2],
        _nn2 = _Ce2.bufferEnd === _Ce2.bufferStart ? 0 : u[_Ce2.bufferEnd - 4] - u[_Ce2.bufferStart],
        _on2 = _It2 - _nn2;
      for (var _ht2 = _Ce2.bufferStart; _ht2 < _Ce2.bufferEnd; _ht2 += 4) u[_ht2] += _on2;
    }
  }
  return N(He), {
    bufferNumFloats: M,
    bufferNumQuads: M / 16,
    layoutNumCharacters: He.done ? n.length - E : He.value.cluster - E + 1,
    fullyProcessed: !!He.done,
    maxX: P,
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
  Ou = function Ou(r) {
    return typeof r == "number" ? r : E0[r] || 400;
  };
function R0(r, t, e, n, o) {
  var i = Ou(e);
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
          var f = Ou(u.descriptors.weight);
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
var O0 = Ng(R0);
var kg = /*#__PURE__*/function () {
  function kg(t) {
    _classCallCheck(this, kg);
    v(this, "textRenderers");
    this.textRenderers = t;
  }
  return _createClass(kg, [{
    key: "addFontFace",
    value: function addFontFace(t) {
      for (var _e2 in this.textRenderers) {
        var n = this.textRenderers[_e2];
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
var P0 = /*#__PURE__*/function (_Og2) {
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
  _inherits(P0, _Og2);
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
          e.props.x = n, e.elementBounds.valid && (_this32.setElementBoundsX(e), !e.renderWindow.valid && Sa(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
        },
        y: function y(e, n) {
          e.props.y = n, e.elementBounds.valid && (_this32.setElementBoundsY(e), !e.renderWindow.valid && Sa(e.elementBounds, _this32.rendererBounds) && _this32.scheduleUpdateState(e));
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
      return e instanceof $u;
    }
  }, {
    key: "addFontFace",
    value: function addFontFace(e) {
      N(e instanceof $u);
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
        emitter: new Zt(),
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
          var ee = "SdfTextRenderer: Could not resolve font face for family: '".concat(e.props.fontFamily, "'");
          console.error(ee), this.setStatus(e, "failed", new Error(ee));
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
      N(n.data, "Font face data should be loaded");
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
        E = x / I;
      e.distanceRange = I * n.data.distanceField.distanceRange;
      var A = l.length * b0;
      var B = e.vertexBuffer;
      (!B || B.length < A) && (B = new Float32Array(A * 2));
      var P = e.elementBounds;
      if (P.valid || (this.setElementBoundsX(e), this.setElementBoundsY(e), P.valid = !0), !s && w.valid) {
        var _ee = w.screen;
        if (u + _ee.x1 <= P.x1 && u + _ee.x2 >= P.x2 && f - m + _ee.y1 <= P.y1 && f - m + _ee.y2 >= P.y2) {
          this.setStatus(e, "loaded");
          return;
        }
        w.valid = !1, this.setStatus(e, "loading");
      }
      var _e$props5 = e.props,
        _ = _e$props5.offsetY,
        L = _e$props5.textAlign;
      if (!w.valid) {
        if (!Sa(P, this.rendererBounds)) return;
        C0(w, u, f, m, x, d === "both" ? P.y2 - P.y1 : 0, P, I);
      }
      var j = S0(R, E, x, b, _, I, w, i, o);
      if (!j) {
        this.setStatus(e, "loaded");
        return;
      }
      var M = e.props.letterSpacing,
        W = T0(j.lineIndex, j.sdfX, j.sdfY, l, L, g, p, c, x, M, B, d, i, w.sdf, n, s, S, $, y);
      e.bufferUploaded = !1, e.bufferNumFloats = W.bufferNumFloats, e.bufferNumQuads = W.bufferNumQuads, e.vertexBuffer = B, e.renderWindow = w, a.lastLayoutNumCharacters = W.layoutNumCharacters, a.bufferSize = B.byteLength, W.fullyProcessed && (e.textW = W.maxX * I, e.textH = W.maxY * I), this.setStatus(e, "loaded");
    }
  }, {
    key: "renderQuads",
    value: function renderQuads(e, n, o, i, a, s) {
      var P, _;
      if (!e.vertexBuffer) return;
      var l = this.stage.renderer;
      N(l instanceof fg);
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
        var L = l.glw,
          j = 4 * Float32Array.BYTES_PER_ELEMENT,
          M = L.createBuffer();
        N(M), e.webGlBuffers = new Rx([{
          buffer: M,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: L.FLOAT,
              normalized: !1,
              stride: j,
              offset: 0
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: L.FLOAT,
              normalized: !1,
              stride: j,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }]), e.bufferUploaded = !1, N(e.webGlBuffers), I = e.webGlBuffers;
      }
      if (!m) {
        var _ref9;
        var _L2 = l.glw,
          _j2 = (_ref9 = I == null ? void 0 : I.getBuffer("a_textureCoordinate")) !== null && _ref9 !== void 0 ? _ref9 : null;
        _L2.arrayBufferData(_j2, y, _L2.STATIC_DRAW), e.bufferUploaded = !0;
      }
      if (N(w), d && f === "both") {
        N(R.valid);
        var _L3 = Ox(R, _0);
        o.valid ? (e.clippingRect.valid = !0, o = Ql(o, _L3, e.clippingRect)) : (e.clippingRect.valid = !0, o = dg(_L3, e.clippingRect));
      }
      var E = new _x(l.glw, l.options, I, this.sdfShader, {
          transform: n.data,
          color: Px(u, i),
          size: c / (((P = w.data) == null ? void 0 : P.info.size) || 0),
          scrollY: x,
          distanceRange: $,
          debug: p.sdfShaderDebug
        }, i, o, {
          height: S,
          width: b
        }, 0, g, !1, a, s),
        A = (_ = e.trFontFace) == null ? void 0 : _.texture;
      N(A);
      var B = this.stage.txManager.getCtxTexture(A);
      E.addTexture(B), E.length = e.bufferNumFloats, E.numQuads = e.bufferNumQuads, l.addRenderOp(E);
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
      return kg.resolveFontFace(this.fontFamilyArray, e);
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
}(Og);
function N0(r) {
  return r.prototype instanceof Nx;
}
function F0(_x6, _x7) {
  return _F2.apply(this, arguments);
}
function _F2() {
  _F2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(r, t) {
    var e, n, o;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          console.log("Loading core extension", r);
          _context14.next = 4;
          return Re(function () {
            return import(r);
          }, [], import.meta.url);
        case 4:
          e = _context14.sent;
          _context14.next = 11;
          break;
        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](0);
          console.error("The core extension module at '".concat(r, "' could not be loaded.")), console.error(_context14.t0);
          return _context14.abrupt("return");
        case 11:
          if (e["default"]) {
            _context14.next = 14;
            break;
          }
          console.error("The core extension module at '".concat(r, "' does not have a default export."));
          return _context14.abrupt("return");
        case 14:
          n = e["default"];
          if (!N0(n)) {
            _context14.next = 27;
            break;
          }
          o = new n();
          _context14.prev = 17;
          _context14.next = 20;
          return o.run(t);
        case 20:
          _context14.next = 25;
          break;
        case 22:
          _context14.prev = 22;
          _context14.t1 = _context14["catch"](17);
          console.error("The core extension at '".concat(r, "' threw an error.")), console.error(_context14.t1);
        case 25:
          _context14.next = 28;
          break;
        case 27:
          console.error("The core extension at '".concat(r, "' does not extend CoreExtension."));
        case 28:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 7], [17, 22]]);
  }));
  return _F2.apply(this, arguments);
}
function Lg(r) {
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
var B0 = /*#__PURE__*/function (_Zt) {
  function B0(e, n, o) {
    var _e$clearColor, _e$experimental_Final, _e$enableContextSpy, _e$enableInspector, _e$renderMode;
    var _this34;
    _classCallCheck(this, B0);
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
      clearColor: (_e$clearColor = e.clearColor) !== null && _e$clearColor !== void 0 ? _e$clearColor : 0,
      coreExtensionModule: e.coreExtensionModule || null,
      experimental_FinalizationRegistryTextureUsageTracker: (_e$experimental_Final = e.experimental_FinalizationRegistryTextureUsageTracker) !== null && _e$experimental_Final !== void 0 ? _e$experimental_Final : !1,
      textureCleanupOptions: e.textureCleanupOptions || {},
      fpsUpdateInterval: e.fpsUpdateInterval || 0,
      numImageWorkers: e.numImageWorkers !== void 0 ? e.numImageWorkers : 2,
      enableContextSpy: (_e$enableContextSpy = e.enableContextSpy) !== null && _e$enableContextSpy !== void 0 ? _e$enableContextSpy : !1,
      enableInspector: (_e$enableInspector = e.enableInspector) !== null && _e$enableInspector !== void 0 ? _e$enableInspector : !1,
      renderMode: (_e$renderMode = e.renderMode) !== null && _e$renderMode !== void 0 ? _e$renderMode : "webgl"
    };
    _this34.settings = i;
    var a = i.appWidth,
      s = i.appHeight,
      l = i.deviceLogicalPixelRatio,
      c = i.devicePhysicalPixelRatio,
      u = i.enableInspector,
      f = function f(S) {
        _this34.driver.releaseTexture(S);
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
    o.onCreateNode = function (S) {
      _this34.nodes.set(S.id, S);
    }, o.onBeforeDestroyNode = function (S) {
      _this34.nodes["delete"](S.id);
    }, o.onFpsUpdate = function (S) {
      _this34.emit("fpsUpdate", S);
    }, o.onFrameTick = function (S) {
      _this34.emit("frameTick", S);
    }, o.onIdle = function () {
      _this34.emit("idle");
    }, b.appendChild(x), u && !cg() && (_this34.inspector = new c0(x, i));
    return _this34;
  }
  _inherits(B0, _Zt);
  return _createClass(B0, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.driver.init(this, this.settings, this.canvas);
            case 2:
              this.root = this.driver.getRootNode();
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
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
      var _e$fontSize, _e$text, _e$textRendererOverri, _e$fontFamily, _e$fontStyle, _e$fontWeight, _e$fontStretch, _e$textAlign, _e$contain, _e$scrollable, _e$scrollY, _e$offsetY, _e$letterSpacing, _e$lineHeight, _e$maxLines, _e$textBaseline, _e$verticalAlign, _e$overflowSuffix, _e$debug;
      var n = (_e$fontSize = e.fontSize) !== null && _e$fontSize !== void 0 ? _e$fontSize : 16,
        o = _objectSpread(_objectSpread({}, this.resolveNodeDefaults(e)), {}, {
          text: (_e$text = e.text) !== null && _e$text !== void 0 ? _e$text : "",
          textRendererOverride: (_e$textRendererOverri = e.textRendererOverride) !== null && _e$textRendererOverri !== void 0 ? _e$textRendererOverri : null,
          fontSize: n,
          fontFamily: (_e$fontFamily = e.fontFamily) !== null && _e$fontFamily !== void 0 ? _e$fontFamily : "sans-serif",
          fontStyle: (_e$fontStyle = e.fontStyle) !== null && _e$fontStyle !== void 0 ? _e$fontStyle : "normal",
          fontWeight: (_e$fontWeight = e.fontWeight) !== null && _e$fontWeight !== void 0 ? _e$fontWeight : "normal",
          fontStretch: (_e$fontStretch = e.fontStretch) !== null && _e$fontStretch !== void 0 ? _e$fontStretch : "normal",
          textAlign: (_e$textAlign = e.textAlign) !== null && _e$textAlign !== void 0 ? _e$textAlign : "left",
          contain: (_e$contain = e.contain) !== null && _e$contain !== void 0 ? _e$contain : "none",
          scrollable: (_e$scrollable = e.scrollable) !== null && _e$scrollable !== void 0 ? _e$scrollable : !1,
          scrollY: (_e$scrollY = e.scrollY) !== null && _e$scrollY !== void 0 ? _e$scrollY : 0,
          offsetY: (_e$offsetY = e.offsetY) !== null && _e$offsetY !== void 0 ? _e$offsetY : 0,
          letterSpacing: (_e$letterSpacing = e.letterSpacing) !== null && _e$letterSpacing !== void 0 ? _e$letterSpacing : 0,
          lineHeight: (_e$lineHeight = e.lineHeight) !== null && _e$lineHeight !== void 0 ? _e$lineHeight : n,
          maxLines: (_e$maxLines = e.maxLines) !== null && _e$maxLines !== void 0 ? _e$maxLines : 0,
          textBaseline: (_e$textBaseline = e.textBaseline) !== null && _e$textBaseline !== void 0 ? _e$textBaseline : "alphabetic",
          verticalAlign: (_e$verticalAlign = e.verticalAlign) !== null && _e$verticalAlign !== void 0 ? _e$verticalAlign : "top",
          overflowSuffix: (_e$overflowSuffix = e.overflowSuffix) !== null && _e$overflowSuffix !== void 0 ? _e$overflowSuffix : "...",
          debug: (_e$debug = e.debug) !== null && _e$debug !== void 0 ? _e$debug : {}
        });
      return this.inspector ? this.inspector.createTextNode(this.driver, o) : this.driver.createTextNode(o);
    }
  }, {
    key: "resolveNodeDefaults",
    value: function resolveNodeDefaults(e) {
      var _e$color7, _ref10, _ref11, _e$colorTl, _ref12, _ref13, _e$colorTr, _ref14, _ref15, _e$colorBl, _ref16, _ref17, _e$colorBr, _e$data, _e$x, _e$y, _e$width8, _e$height2, _e$alpha, _e$autosize, _e$clipping, _e$colorTop, _e$colorBottom, _e$colorLeft, _e$colorRight, _e$zIndex, _e$zIndexLocked, _e$parent, _e$texture, _e$shader, _e$src2, _e$scale, _ref18, _e$scaleX, _ref19, _e$scaleY, _e$mount, _ref20, _e$mountX, _ref21, _e$mountY, _e$pivot2, _ref22, _e$pivotX, _ref23, _e$pivotY, _e$rotation, _e$rtt;
      var n = (_e$color7 = e.color) !== null && _e$color7 !== void 0 ? _e$color7 : 4294967295,
        o = (_ref10 = (_ref11 = (_e$colorTl = e.colorTl) !== null && _e$colorTl !== void 0 ? _e$colorTl : e.colorTop) !== null && _ref11 !== void 0 ? _ref11 : e.colorLeft) !== null && _ref10 !== void 0 ? _ref10 : n,
        i = (_ref12 = (_ref13 = (_e$colorTr = e.colorTr) !== null && _e$colorTr !== void 0 ? _e$colorTr : e.colorTop) !== null && _ref13 !== void 0 ? _ref13 : e.colorRight) !== null && _ref12 !== void 0 ? _ref12 : n,
        a = (_ref14 = (_ref15 = (_e$colorBl = e.colorBl) !== null && _e$colorBl !== void 0 ? _e$colorBl : e.colorBottom) !== null && _ref15 !== void 0 ? _ref15 : e.colorLeft) !== null && _ref14 !== void 0 ? _ref14 : n,
        s = (_ref16 = (_ref17 = (_e$colorBr = e.colorBr) !== null && _e$colorBr !== void 0 ? _e$colorBr : e.colorBottom) !== null && _ref17 !== void 0 ? _ref17 : e.colorRight) !== null && _ref16 !== void 0 ? _ref16 : n,
        l = Lg((_e$data = e.data) !== null && _e$data !== void 0 ? _e$data : {});
      return {
        x: (_e$x = e.x) !== null && _e$x !== void 0 ? _e$x : 0,
        y: (_e$y = e.y) !== null && _e$y !== void 0 ? _e$y : 0,
        width: (_e$width8 = e.width) !== null && _e$width8 !== void 0 ? _e$width8 : 0,
        height: (_e$height2 = e.height) !== null && _e$height2 !== void 0 ? _e$height2 : 0,
        alpha: (_e$alpha = e.alpha) !== null && _e$alpha !== void 0 ? _e$alpha : 1,
        autosize: (_e$autosize = e.autosize) !== null && _e$autosize !== void 0 ? _e$autosize : !1,
        clipping: (_e$clipping = e.clipping) !== null && _e$clipping !== void 0 ? _e$clipping : !1,
        color: n,
        colorTop: (_e$colorTop = e.colorTop) !== null && _e$colorTop !== void 0 ? _e$colorTop : n,
        colorBottom: (_e$colorBottom = e.colorBottom) !== null && _e$colorBottom !== void 0 ? _e$colorBottom : n,
        colorLeft: (_e$colorLeft = e.colorLeft) !== null && _e$colorLeft !== void 0 ? _e$colorLeft : n,
        colorRight: (_e$colorRight = e.colorRight) !== null && _e$colorRight !== void 0 ? _e$colorRight : n,
        colorBl: a,
        colorBr: s,
        colorTl: o,
        colorTr: i,
        zIndex: (_e$zIndex = e.zIndex) !== null && _e$zIndex !== void 0 ? _e$zIndex : 0,
        zIndexLocked: (_e$zIndexLocked = e.zIndexLocked) !== null && _e$zIndexLocked !== void 0 ? _e$zIndexLocked : 0,
        parent: (_e$parent = e.parent) !== null && _e$parent !== void 0 ? _e$parent : null,
        texture: (_e$texture = e.texture) !== null && _e$texture !== void 0 ? _e$texture : null,
        shader: (_e$shader = e.shader) !== null && _e$shader !== void 0 ? _e$shader : null,
        src: (_e$src2 = e.src) !== null && _e$src2 !== void 0 ? _e$src2 : "",
        scale: (_e$scale = e.scale) !== null && _e$scale !== void 0 ? _e$scale : null,
        scaleX: (_ref18 = (_e$scaleX = e.scaleX) !== null && _e$scaleX !== void 0 ? _e$scaleX : e.scale) !== null && _ref18 !== void 0 ? _ref18 : 1,
        scaleY: (_ref19 = (_e$scaleY = e.scaleY) !== null && _e$scaleY !== void 0 ? _e$scaleY : e.scale) !== null && _ref19 !== void 0 ? _ref19 : 1,
        mount: (_e$mount = e.mount) !== null && _e$mount !== void 0 ? _e$mount : 0,
        mountX: (_ref20 = (_e$mountX = e.mountX) !== null && _e$mountX !== void 0 ? _e$mountX : e.mount) !== null && _ref20 !== void 0 ? _ref20 : 0,
        mountY: (_ref21 = (_e$mountY = e.mountY) !== null && _e$mountY !== void 0 ? _e$mountY : e.mount) !== null && _ref21 !== void 0 ? _ref21 : 0,
        pivot: (_e$pivot2 = e.pivot) !== null && _e$pivot2 !== void 0 ? _e$pivot2 : .5,
        pivotX: (_ref22 = (_e$pivotX = e.pivotX) !== null && _e$pivotX !== void 0 ? _e$pivotX : e.pivot) !== null && _ref22 !== void 0 ? _ref22 : .5,
        pivotY: (_ref23 = (_e$pivotY = e.pivotY) !== null && _e$pivotY !== void 0 ? _e$pivotY : e.pivot) !== null && _ref23 !== void 0 ? _ref23 : .5,
        rotation: (_e$rotation = e.rotation) !== null && _e$rotation !== void 0 ? _e$rotation : 0,
        rtt: (_e$rtt = e.rtt) !== null && _e$rtt !== void 0 ? _e$rtt : !1,
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
}(Zt);
var k0 = /*#__PURE__*/function (_Zt2) {
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
  _inherits(k0, _Zt2);
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
              g = bu(u, f, d);
            this.node[l] = g;
            continue;
          }
          this.node[l] = bu(u, f, this.progress);
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
}(Zt);
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
      return N(t), t;
    }
  }, {
    key: "waitUntilStopped",
    value: function waitUntilStopped() {
      this.makeStoppedPromise();
      var t = this.stoppedPromise;
      return N(t), t;
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
      N(this.startedResolve), this.startedResolve(this), this.startedResolve = null;
    }
  }, {
    key: "finished",
    value: function finished() {
      N(this.stoppedResolve);
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
var le = 0,
  ce = 3,
  Ae = 6,
  ae = 1,
  ue = 4,
  Ee = 7,
  Ye = 2,
  Ke = 5,
  Ge = 8;
var Pe = /*#__PURE__*/function () {
  function Pe(t) {
    _classCallCheck(this, Pe);
    v(this, "data");
    t ? (this.data = new Float32Array(9), this.data[le] = t[0], this.data[ce] = t[3], this.data[Ae] = t[6], this.data[ae] = t[1], this.data[ue] = t[4], this.data[Ee] = t[7], this.data[Ye] = t[2], this.data[Ke] = t[5], this.data[Ge] = t[8]) : this.data = new Float32Array(9);
  }
  return _createClass(Pe, [{
    key: "translate",
    value: function translate(t, e) {
      return this.data[Ae] = this.data[le] * t + this.data[ce] * e + this.data[Ae], this.data[Ee] = this.data[ae] * t + this.data[ue] * e + this.data[Ee], this;
    }
  }, {
    key: "scale",
    value: function scale(t, e) {
      return this.data[le] = this.data[le] * t, this.data[ce] = this.data[ce] * e, this.data[ae] = this.data[ae] * t, this.data[ue] = this.data[ue] * e, this;
    }
  }, {
    key: "rotate",
    value: function rotate(t) {
      if (t === 0 || !(t % Math.PI * 2)) return this;
      var e = Math.cos(t),
        n = Math.sin(t),
        o = this.data[le] * e + this.data[ce] * n,
        i = this.data[ce] * e - this.data[le] * n,
        a = this.data[ae] * e + this.data[ue] * n,
        s = this.data[ue] * e - this.data[ae] * n;
      return this.data[le] = o, this.data[ce] = i, this.data[ae] = a, this.data[ue] = s, this;
    }
  }, {
    key: "multiply",
    value: function multiply(t) {
      return Pe.multiply(this, t, this);
    }
  }, {
    key: "tx",
    get: function get() {
      return this.data[Ae];
    }
  }, {
    key: "ty",
    get: function get() {
      return this.data[Ee];
    }
  }, {
    key: "ta",
    get: function get() {
      return this.data[le];
    }
  }, {
    key: "tb",
    get: function get() {
      return this.data[ce];
    }
  }, {
    key: "tc",
    get: function get() {
      return this.data[ae];
    }
  }, {
    key: "td",
    get: function get() {
      return this.data[ue];
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(t, e) {
      return [this.data[le] * t + this.data[ce] * e + this.data[Ae], this.data[ae] * t + this.data[ue] * e + this.data[ae]];
    }
  }], [{
    key: "temp",
    get: function get() {
      return M0;
    }
  }, {
    key: "multiply",
    value: function multiply(t, e, n) {
      var o = t.data[le] * e.data[le] + t.data[ce] * e.data[ae] + t.data[Ae] * e.data[Ye],
        i = t.data[le] * e.data[ce] + t.data[ce] * e.data[ue] + t.data[Ae] * e.data[Ke],
        a = t.data[le] * e.data[Ae] + t.data[ce] * e.data[Ee] + t.data[Ae] * e.data[Ge],
        s = t.data[ae] * e.data[le] + t.data[ue] * e.data[ae] + t.data[Ee] * e.data[Ye],
        l = t.data[ae] * e.data[ce] + t.data[ue] * e.data[ue] + t.data[Ee] * e.data[Ke],
        c = t.data[ae] * e.data[Ae] + t.data[ue] * e.data[Ee] + t.data[Ee] * e.data[Ge],
        u = t.data[Ye] * e.data[le] + t.data[Ke] * e.data[ae] + t.data[Ge] * e.data[Ye],
        f = t.data[Ye] * e.data[ce] + t.data[Ke] * e.data[ue] + t.data[Ge] * e.data[Ke],
        d = t.data[Ye] * e.data[Ae] + t.data[Ke] * e.data[Ee] + t.data[Ge] * e.data[Ge];
      return n || (n = new Pe()), n.data[le] = o, n.data[ce] = i, n.data[Ae] = a, n.data[ae] = s, n.data[ue] = l, n.data[Ee] = c, n.data[Ye] = u, n.data[Ke] = f, n.data[Ge] = d, n;
    }
  }, {
    key: "identity",
    value: function identity(t) {
      return t || (t = new Pe()), t.data[le] = 1, t.data[ce] = 0, t.data[Ae] = 0, t.data[ae] = 0, t.data[ue] = 1, t.data[Ee] = 0, t.data[Ye] = 0, t.data[Ke] = 0, t.data[Ge] = 1, t;
    }
  }, {
    key: "translate",
    value: function translate(t, e, n) {
      return n || (n = new Pe()), n.data[le] = 1, n.data[ce] = 0, n.data[Ae] = t, n.data[ae] = 0, n.data[ue] = 1, n.data[Ee] = e, n.data[Ye] = 0, n.data[Ke] = 0, n.data[Ge] = 1, n;
    }
  }, {
    key: "scale",
    value: function scale(t, e, n) {
      return n || (n = new Pe()), n.data[le] = t, n.data[ce] = 0, n.data[Ae] = 0, n.data[ae] = 0, n.data[ue] = e, n.data[Ee] = 0, n.data[Ye] = 0, n.data[Ke] = 0, n.data[Ge] = 1, n;
    }
  }, {
    key: "rotate",
    value: function rotate(t, e) {
      var n = Math.cos(t),
        o = Math.sin(t);
      return e || (e = new Pe()), e.data[le] = n, e.data[ce] = -o, e.data[Ae] = 0, e.data[ae] = o, e.data[ue] = n, e.data[Ee] = 0, e.data[Ye] = 0, e.data[Ke] = 0, e.data[Ge] = 1, e;
    }
  }, {
    key: "copy",
    value: function copy(t, e, n) {
      return e || (e = new Pe()), e.data[0] = t.data[0], e.data[1] = t.data[1], e.data[2] = t.data[2], e.data[3] = t.data[3], e.data[4] = t.data[4], e.data[5] = t.data[5], e.data[6] = t.data[6], e.data[7] = t.data[7], e.data[8] = t.data[8], e;
    }
  }]);
}();
var M0 = new Pe(),
  go = 0,
  po = 2,
  mo = 4,
  yo = 6,
  xo = 1,
  $o = 3,
  bo = 5,
  So = 7;
var pi = /*#__PURE__*/function () {
  function pi(t) {
    _classCallCheck(this, pi);
    v(this, "data");
    this.data = new Float32Array(8), t && (this.data[go] = t[go], this.data[po] = t[po], this.data[mo] = t[mo], this.data[yo] = t[yo], this.data[xo] = t[xo], this.data[$o] = t[$o], this.data[bo] = t[bo], this.data[So] = t[So]);
  }
  return _createClass(pi, [{
    key: "x1",
    get: function get() {
      return this.data[go];
    }
  }, {
    key: "x2",
    get: function get() {
      return this.data[po];
    }
  }, {
    key: "x3",
    get: function get() {
      return this.data[mo];
    }
  }, {
    key: "x4",
    get: function get() {
      return this.data[yo];
    }
  }, {
    key: "y1",
    get: function get() {
      return this.data[xo];
    }
  }, {
    key: "y2",
    get: function get() {
      return this.data[$o];
    }
  }, {
    key: "y3",
    get: function get() {
      return this.data[bo];
    }
  }, {
    key: "y4",
    get: function get() {
      return this.data[So];
    }
  }], [{
    key: "translate",
    value: function translate(t, e, n, o, i, a, s, l, c) {
      return c || (c = new pi()), c.data[go] = t, c.data[po] = n, c.data[mo] = i, c.data[yo] = s, c.data[xo] = e, c.data[$o] = o, c.data[bo] = a, c.data[So] = l, c;
    }
  }]);
}();
var se;
(function (r) {
  r[r.Init = 0] = "Init", r[r.OutOfBounds = 2] = "OutOfBounds", r[r.InBounds = 4] = "InBounds", r[r.InViewport = 8] = "InViewport";
})(se || (se = {}));
var Vt = new Map();
Vt.set(se.Init, "init");
Vt.set(se.OutOfBounds, "outOfBounds");
Vt.set(se.InBounds, "inBounds");
Vt.set(se.InViewport, "inViewport");
var O;
(function (r) {
  r[r.Children = 1] = "Children", r[r.ScaleRotate = 2] = "ScaleRotate", r[r.Local = 4] = "Local", r[r.Global = 8] = "Global", r[r.Clipping = 16] = "Clipping", r[r.CalculatedZIndex = 32] = "CalculatedZIndex", r[r.ZIndexSortedChildren = 64] = "ZIndexSortedChildren", r[r.PremultipliedColors = 128] = "PremultipliedColors", r[r.WorldAlpha = 256] = "WorldAlpha", r[r.RenderState = 512] = "RenderState", r[r.IsRenderable = 1024] = "IsRenderable", r[r.RenderTexture = 2048] = "RenderTexture", r[r.ParentRenderTexture = 4096] = "ParentRenderTexture", r[r.None = 0] = "None", r[r.All = 8191] = "All";
})(O || (O = {}));
var rc = /*#__PURE__*/function (_Zt3) {
  function rc(e, n) {
    var _this40;
    _classCallCheck(this, rc);
    _this40 = _callSuper(this, rc);
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
    v(_this40, "renderState", se.Init);
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
  _inherits(rc, _Zt3);
  return _createClass(rc, [{
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
        var _e3 = this.props.texture;
        _e3.off("loaded", this.onTextureLoaded), _e3.off("failed", this.onTextureFailed), _e3.off("freed", this.onTextureFreed), _e3.setRenderableOwner(this, !1);
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
      N(o);
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
      this.scaleRotateTransform = Pe.rotate(this.props.rotation, this.scaleRotateTransform).scale(this.props.scaleX, this.props.scaleY);
    }
  }, {
    key: "updateLocalTransform",
    value: function updateLocalTransform() {
      N(this.scaleRotateTransform);
      var e = this.props.pivotX * this.props.width,
        n = this.props.pivotY * this.props.height,
        o = this.props.mountX * this.props.width,
        i = this.props.mountY * this.props.height;
      this.localTransform = Pe.translate(e - o + this.props.x, n - i + this.props.y, this.localTransform).multiply(this.scaleRotateTransform).translate(-e, -n), this.setUpdateType(O.Global);
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
      }), this.updateType & O.Global && (N(this.localTransform), this.globalTransform = Pe.copy((o == null ? void 0 : o.globalTransform) || this.localTransform, this.globalTransform), this.parentHasRenderTexture && (a = this.props.parent) != null && a.rtt && (this.globalTransform = Pe.identity()), o && this.globalTransform.multiply(this.localTransform), this.calculateRenderCoords(), this.updateBoundingRect(), this.setUpdateType(O.Clipping | O.RenderState | O.Children), i |= O.Global), this.updateType & O.Clipping && (this.calculateClippingRect(n), this.setUpdateType(O.Children), i |= O.Clipping), this.updateType & O.WorldAlpha && (o ? this.worldAlpha = o.worldAlpha * this.props.alpha : this.worldAlpha = this.props.alpha, this.setUpdateType(O.Children | O.PremultipliedColors | O.IsRenderable), i |= O.WorldAlpha), this.updateType & O.PremultipliedColors && (this.premultipliedColorTl = $n(this.props.colorTl, this.worldAlpha, !0), this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl : (this.premultipliedColorTr = $n(this.props.colorTr, this.worldAlpha, !0), this.premultipliedColorBl = $n(this.props.colorBl, this.worldAlpha, !0), this.premultipliedColorBr = $n(this.props.colorBr, this.worldAlpha, !0))), this.updateType & O.RenderState && (this.updateRenderState(n), this.setUpdateType(O.IsRenderable)), this.updateType & O.IsRenderable && this.updateIsRenderable(), o && this.updateType & O.CalculatedZIndex && (this.calculateZIndex(), o.setUpdateType(O.ZIndexSortedChildren)), this.updateType & O.Children && this.children.length && !this.rtt && this.children.forEach(function (s) {
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
      N(this.renderBound);
      var n = e.width || this.stage.root.width,
        o = e.height || this.stage.root.height;
      this.strictBound = Er(e.x, e.y, e.x + n, e.y + o, this.strictBound);
      var i = this.stage.boundsMargin;
      return this.preloadBound = Er(e.x - i[3], e.y - i[0], e.x + n + i[1], e.y + o + i[2], this.preloadBound), Su(this.renderBound, this.strictBound) ? se.InViewport : Su(this.renderBound, this.preloadBound) ? se.InBounds : se.OutOfBounds;
    }
  }, {
    key: "updateRenderState",
    value: function updateRenderState(e) {
      var n = this.checkRenderBounds(e);
      if (n !== this.renderState) {
        var o = this.renderState;
        this.renderState = n, o === se.InViewport && this.emit("outOfViewport", {
          previous: o,
          current: n
        }), o < se.InBounds && n === se.InViewport ? (this.emit(Vt.get(se.InBounds), {
          previous: o,
          current: n
        }), o = se.InBounds) : o > se.InBounds && n === se.OutOfBounds && (this.emit(Vt.get(se.InBounds), {
          previous: o,
          current: n
        }), o = se.InBounds);
        var i = Vt.get(n);
        N(i), this.emit(i, {
          previous: o,
          current: n
        });
      }
    }
  }, {
    key: "setRenderState",
    value: function setRenderState(e) {
      e !== this.renderState && (this.renderState = e, this.emit(se[e]));
    }
  }, {
    key: "updateIsRenderable",
    value: function updateIsRenderable() {
      var e;
      this.worldAlpha === 0 || !this.checkRenderProps() ? e = !1 : e = this.renderState > se.OutOfBounds, this.isRenderable !== e && (this.isRenderable = e, this.onChangeIsRenderable(e));
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
      N(o);
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
        this.renderCoords = pi.translate(f, g, d, g, d, p, f, p, this.renderCoords);
      } else this.renderCoords = pi.translate(i, a, i + e * s, a + e * c, i + e * s + n * l, a + e * c + n * u, i + n * l, a + n * u, this.renderCoords);
    }
  }, {
    key: "updateBoundingRect",
    value: function updateBoundingRect() {
      var e = this.renderCoords,
        n = this.globalTransform;
      N(n), N(e);
      var o = n.tb,
        i = n.tc,
        a = e.x1,
        s = e.y1,
        l = e.x3,
        c = e.y3;
      if (o === 0 || i === 0) this.renderBound = Er(a, s, l, c, this.renderBound);else {
        var u = e.x2,
          f = e.x4,
          d = e.y2,
          g = e.y4;
        this.renderBound = Er(Math.min(a, u, l, f), Math.min(s, d, c, g), Math.max(a, u, l, f), Math.max(s, d, c, g), this.renderBound);
      }
    }
  }, {
    key: "calculateClippingRect",
    value: function calculateClippingRect(e) {
      N(this.globalTransform);
      var n = this.clippingRect,
        o = this.props,
        i = this.globalTransform,
        a = o.clipping,
        s = i.tb !== 0 || i.tc !== 0;
      a && !s ? (n.x = i.tx, n.y = i.ty, n.width = this.width * i.ta, n.height = this.height * i.td, n.valid = !0) : n.valid = !1, e.valid && n.valid ? Ql(e, n, n) : e.valid && (dg(e, n), n.valid = !0);
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
      N(b), e.addQuad({
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
      var _ref24;
      var e;
      return this.props.y + ((_ref24 = (e = this.props.parent) == null ? void 0 : e.absY) !== null && _ref24 !== void 0 ? _ref24 : 0);
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
          N(o !== -1, "CoreNode.parent: Node not found in old parent's children!"), n.children.splice(o, 1), n.setUpdateType(O.Children | O.ZIndexSortedChildren);
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
}(Zt);
var D0 = 1;
function nc() {
  return D0++;
}
var qs = /*#__PURE__*/function (_Zt4) {
  function qs(e, n, o, i) {
    var _ref25;
    var _this43;
    _classCallCheck(this, qs);
    _this43 = _callSuper(this, qs);
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
    _this43.rendererMain = n, _this43.stage = o, _this43.id = (_ref25 = i == null ? void 0 : i.id) !== null && _ref25 !== void 0 ? _ref25 : nc(), _this43.coreNode = i || new rc(_this43.stage, {
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
  _inherits(qs, _Zt4);
  return _createClass(qs, [{
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
      var _ref26;
      var n = this._parent;
      if (this._parent = e, this.coreNode.parent = (_ref26 = e == null ? void 0 : e.coreNode) !== null && _ref26 !== void 0 ? _ref26 : null, n) {
        var o = n.children.indexOf(this);
        N(o !== -1, "MainOnlyNode.parent: Node not found in old parent's children!"), n.children.splice(o, 1);
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
      this._data = Lg(e);
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
}(Zt);
var j0 = function j0(r) {
    var t = !1;
    var e = function (_e4) {
      function e() {
        return _e4.apply(this, arguments);
      }
      e.toString = function () {
        return _e4.toString();
      };
      return e;
    }(function () {
      if (r.updateAnimations(), !r.hasSceneUpdates()) {
        r.calculateFps(), setTimeout(e, 16.666666666666668), t || (r.emit("idle"), t = !0);
        return;
      }
      t = !1, r.drawFrame(), requestAnimationFrame(e);
    });
    requestAnimationFrame(e);
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
var Nn = /*#__PURE__*/function (_ug2) {
  function Nn(e, n) {
    var _this46;
    _classCallCheck(this, Nn);
    _this46 = _callSuper(this, Nn, [e]);
    v(_this46, "props");
    _this46.props = Nn.resolveDefaults(n);
    return _this46;
  }
  _inherits(Nn, _ug2);
  return _createClass(Nn, [{
    key: "getTextureData",
    value: function () {
      var _getTextureData2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this$props3, e, n, o, i, a, s;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this$props3 = this.props, e = _this$props3.width, n = _this$props3.height, o = e * n * 4, i = new Uint8ClampedArray(o);
              for (a = 0; a < o; a += 4) {
                s = Math.floor(Math.random() * 256);
                i[a] = s, i[a + 1] = s, i[a + 2] = s, i[a + 3] = 255;
              }
              return _context7.abrupt("return", {
                data: new ImageData(i, e, n)
              });
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getTextureData() {
        return _getTextureData2.apply(this, arguments);
      }
      return getTextureData;
    }()
  }], [{
    key: "makeCacheKey",
    value: function makeCacheKey(e) {
      var n = Nn.resolveDefaults(e);
      return "NoiseTexture,".concat(n.width, ",").concat(n.height, ",").concat(n.cacheId);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      var _e$width9, _e$height3, _e$cacheId;
      return {
        width: (_e$width9 = e.width) !== null && _e$width9 !== void 0 ? _e$width9 : 128,
        height: (_e$height3 = e.height) !== null && _e$height3 !== void 0 ? _e$height3 : 128,
        cacheId: (_e$cacheId = e.cacheId) !== null && _e$cacheId !== void 0 ? _e$cacheId : 0
      };
    }
  }]);
}(ug);
v(Nn, "z$__type__Props");
var Js = Nn;
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
    this.hasCreateImageBitmap && this.hasWorker && (this.imageWorkerManager = new W0(t)), this.hasCreateImageBitmap || console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), this.registerTextureType("ImageTexture", Qs), this.registerTextureType("ColorTexture", Bx), this.registerTextureType("NoiseTexture", Js), this.registerTextureType("SubTexture", hg), this.registerTextureType("RenderTexture", kx);
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
      var o = this.txConstructors[t];
      if (!o) throw new Error("Texture type \"".concat(t, "\" is not registered"));
      var i;
      if ((n == null ? void 0 : n.id) !== void 0 && this.textureIdCache.has(n.id) && (i = this.textureIdCache.get(n.id)), !i) {
        var _ref27;
        var a = n == null ? void 0 : n.id,
          s = (_ref27 = n == null ? void 0 : n.cacheKey) !== null && _ref27 !== void 0 ? _ref27 : o.makeCacheKey(e);
        s && this.textureKeyCache.has(s) ? i = this.textureKeyCache.get(s) : i = new o(this, e), a && this.addTextureIdToCache(a, s, i);
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
          N(a), a.count--, a.count === 0 && (n["delete"](o), a.cacheKey && this.textureKeyCache["delete"](a.cacheKey));
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
function Ca(r) {
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
function ri(_ref28) {
  var r = _ref28.a,
    t = _ref28.r,
    e = _ref28.g,
    n = _ref28.b;
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
      if (N(n, "Attempt to get unloaded image texture"), e.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), n;
      var o = ri(e);
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
      var _onLoadRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _yield$this$textureSo, e, n, o;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.textureSource.getTextureData();
            case 2:
              _yield$this$textureSo = _context8.sent;
              e = _yield$this$textureSo.data;
              if (!(e instanceof ImageData)) {
                _context8.next = 11;
                break;
              }
              n = document.createElement("canvas");
              n.width = e.width, n.height = e.height;
              o = n.getContext("2d");
              return _context8.abrupt("return", (o && o.putImageData(e, 0, 0), this.image = n, {
                width: e.width,
                height: e.height
              }));
            case 11:
              if (!(e instanceof ImageBitmap)) {
                _context8.next = 13;
                break;
              }
              return _context8.abrupt("return", (this.image = e, {
                width: e.width,
                height: e.height
              }));
            case 13:
              return _context8.abrupt("return", {
                width: 0,
                height: 0
              });
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function onLoadRequest() {
        return _onLoadRequest.apply(this, arguments);
      }
      return onLoadRequest;
    }()
  }]);
}(Lx);
function X0(r) {
  var _ref29;
  var t;
  return r.shader instanceof Bg && r.shader.shType === Fg ? (_ref29 = (t = r.shaderProps) == null ? void 0 : t.radius) !== null && _ref29 !== void 0 ? _ref29 : 0 : 0;
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
        if (S instanceof hg && (y = S.props, S = S.parentTexture), $ = this.txManager.getCtxTexture(S), S.state === "freed") {
          $.load();
          return;
        }
        if (S.state !== "loaded" || !$.hasImage()) return;
      }
      var m = Ca(c),
        w = d !== 1,
        R = b.width !== 0 && b.height !== 0,
        I = c !== u || c !== f,
        E = e.shader ? X0(e) : 0;
      if ((w || R || E) && n.save(), R) {
        var A = new Path2D(),
          B = b.x,
          P = b.y,
          _ = b.width,
          L = b.height;
        A.rect(B, P, _, L), n.clip(A);
      }
      if (w) {
        var _A4 = this.pixelRatio;
        n.setTransform(d, p, g, x, o * _A4, i * _A4), n.scale(_A4, _A4), n.translate(-o, -i);
      }
      if (E) {
        var _A5 = new Path2D();
        _A5.roundRect(o, i, a, s, E), n.clip(_A5);
      }
      if ($) {
        var _A6 = $.getImage(m);
        n.globalAlpha = l, y ? n.drawImage(_A6, y.x, y.y, y.width, y.height, o, i, a, s) : n.drawImage(_A6, o, i, a, s), n.globalAlpha = 1;
      } else if (I) {
        var _A7 = o,
          _B2 = i,
          _P2;
        c === u ? (_A7 = o, _B2 = i + s, _P2 = Ca(f)) : (_A7 = o + a, _B2 = i, _P2 = Ca(u));
        var _6 = n.createLinearGradient(o, i, _A7, _B2);
        _6.addColorStop(0, ri(m)), _6.addColorStop(1, ri(_P2)), n.fillStyle = _6, n.fillRect(o, i, a, s);
      } else n.fillStyle = ri(m), n.fillRect(o, i, a, s);
      (w || R || E) && n.restore();
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
var J0 = /*#__PURE__*/function (_Zt5) {
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
      N(_this50.txManager);
      var S = _this50.txManager.getDebugInfo();
      console.log("Texture ID Cache Size: ", S.idCacheSize), console.log("Texture Key Cache Size: ", S.keyCacheSize);
    }, 1e3);
    var x = {
      stage: _this50,
      canvas: n,
      pixelRatio: e.devicePhysicalPixelRatio * e.deviceLogicalPixelRatio,
      clearColor: o !== null && o !== void 0 ? o : 4278190080,
      bufferMemory: q0,
      txManager: _this50.txManager,
      txMemManager: _this50.txMemManager,
      shManager: _this50.shManager,
      contextSpy: _this50.contextSpy
    };
    g === "canvas" ? _this50.renderer = new Q0(x) : _this50.renderer = new fg(x), jx(g), _this50.txManager.renderer = _this50.renderer, _this50.textRenderers = g === "webgl" ? {
      canvas: new Ru(_this50),
      sdf: new P0(_this50)
    } : {
      canvas: new Ru(_this50)
    }, _this50.fontManager = new kg(_this50.textRenderers);
    var b = new rc(_this50, {
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
  _inherits(J0, _Zt5);
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
      N(e), this.root.updateType !== 0 && this.root.update(this.deltaTime, this.root.clippingRect), e.reset(), e.txMemManager.gcRequested && e.txMemManager.gc(), e.rttNodes.length > 0 && e.renderRTTNodes(), this.addQuads(this.root), e == null || e.render(), this.calculateFps(), n && (this.renderRequested = !1);
    }
  }, {
    key: "calculateFps",
    value: function calculateFps() {
      var n, o;
      var e = this.options.fpsUpdateInterval;
      if (e && (this.fpsNumFrames++, this.fpsElapsedTime += this.deltaTime, this.fpsElapsedTime >= e)) {
        var _ref30;
        var i = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
        this.fpsNumFrames = 0, this.fpsElapsedTime = 0, this.emit("fpsUpdate", {
          fps: i,
          contextSpyData: (_ref30 = (n = this.contextSpy) == null ? void 0 : n.getData()) !== null && _ref30 !== void 0 ? _ref30 : null
        }), (o = this.contextSpy) == null || o.reset();
      }
    }
  }, {
    key: "addQuads",
    value: function addQuads(e) {
      N(this.renderer && e.globalTransform), e.isRenderable && e.renderQuads(this.renderer);
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
      return N(a, "resolvedTextRenderer undefined"), a;
    }
  }]);
}(Zt);
var Z0 = /*#__PURE__*/function (_rc) {
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
  _inherits(Z0, _rc);
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
      _superPropGet(Z0, "update", this, 3)([e, n]), N(this.globalTransform), this.textRenderer.set.x(this.trState, this.globalTransform.tx), this.textRenderer.set.y(this.trState, this.globalTransform.ty);
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
      N(this.globalTransform), !(this.parentHasRenderTexture && (!e.renderToTextureActive || this.parentRenderTexture !== e.activeRttNode)) && (this.parentHasRenderTexture && (n = this.props.parent) != null && n.rtt && (this.globalTransform = Pe.identity(), this.localTransform && this.globalTransform.multiply(this.localTransform)), N(this.globalTransform), this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions));
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
}(rc);
var e$ = /*#__PURE__*/function (_qs) {
  function e$(t, e, n) {
    _classCallCheck(this, e$);
    return _callSuper(this, e$, [t, e, n, new Z0(n, {
      id: nc(),
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
  _inherits(e$, _qs);
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
}(qs);
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
      var _init2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(t, e, n) {
        var _this53 = this;
        var o;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              this.stage = new J0({
                rootId: nc(),
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
              }), this.rendererMain = t, N(this.stage.root);
              o = new qs(t.resolveNodeDefaults({}), this.rendererMain, this.stage, this.stage.root);
              this.root = o;
              o.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, o));
              this.onCreateNode(o);
              _context9.t0 = e.coreExtensionModule;
              if (!_context9.t0) {
                _context9.next = 9;
                break;
              }
              _context9.next = 9;
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
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function init(_x8, _x9, _x10) {
        return _init2.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "createNode",
    value: function createNode(t) {
      N(this.rendererMain), N(this.stage);
      var e = new qs(t, this.rendererMain, this.stage);
      return e.once("beforeDestroy", this.onBeforeDestroyNode.bind(this, e)), this.onCreateNode(e), e;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(t) {
      N(this.rendererMain), N(this.stage);
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
      N(e), e.txManager.removeTextureIdFromCache(t);
    }
  }, {
    key: "getRootNode",
    value: function getRootNode() {
      return N(this.root), this.root;
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
var mt, oc;
function r$() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
  var e = new t$();
  return mt = new B0(r, t, e), oc = mt.createShader.bind(mt), mt;
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
var o$ = {
  BASE_URL: "./",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1
};
function i$() {
  return !!(o$ && !1);
}
var a$ = i$() || !1,
  Le = {
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
function _u(r) {
  return s$(r) && r.debug;
}
function Gt(r, t) {
  var _console;
  for (var _len3 = arguments.length, e = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    e[_key3 - 2] = arguments[_key3];
  }
  a$ && (Le.debug || _u(t) || _u(e[0])) && (_console = console).log.apply(_console, [r, t].concat(e));
}
var wo = function wo(r) {
  return r instanceof Function;
};
function s$(r) {
  return _typeof(r) == "object";
}
function mi(r) {
  return Array.isArray(r);
}
function l$(r) {
  return typeof r == "string";
}
function c$(r) {
  return typeof r == "number";
}
function u$(r) {
  return Number.isInteger(r);
}
function f$(r, t) {
  var _iterator14 = _createForOfIteratorHelper(t),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var _e5 = _step14.value;
      if (_e5 in r) return !0;
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return !1;
}
function Mg(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (mi(r)) r.forEach(function (e) {
    Mg(e, t);
  });else if (r) for (var _e6 in r) t[_e6] === void 0 && r[_e6] && (t[_e6] = r[_e6]);
  return t;
}
var Pu = /*#__PURE__*/function (_Array2) {
  function Pu(t) {
    var _this55;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Pu);
    return _possibleConstructorReturn(_this55, (mi(e) ? _this55 = _callSuper(this, Pu, _toConsumableArray(e)) : l$(e) ? _this55 = _callSuper(this, Pu, [e]) : _this55 = _callSuper(this, Pu, _toConsumableArray(Object.entries(e).filter(function (_ref31) {
      var _ref32 = _slicedToArray(_ref31, 2),
        n = _ref32[0],
        o = _ref32[1];
      return o;
    }).map(function (_ref33) {
      var _ref34 = _slicedToArray(_ref33, 1),
        n = _ref34[0];
      return n;
    }))), _this55.onChange = t, _assertThisInitialized(_this55)));
  }
  _inherits(Pu, _Array2);
  return _createClass(Pu, [{
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
var Ot = function (r) {
  return r[r.Element = 0] = "Element", r[r.TextNode = 1] = "TextNode", r[r.Text = 2] = "Text", r;
}(Ot || {});
function d$(r) {
  var t = [];
  var e = !1;
  for (var y = 0; y < r.children.length; y++) {
    var m = r.children[y];
    if (m.type !== Ot.Text && m.flexItem !== !1) {
      if (m.type === Ot.TextNode && m.text && !(m.width || m.height)) return !1;
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
      N(_w2), _w2[u] = _y4 - (_w2[a] || 0) - (_w2[c] || 0), _y4 -= (_w2[a] || 0) + p + (_w2[l] || 0) + (_w2[c] || 0), $(_w2);
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
var h$ = Le.animationSettings,
  To = new Set();
var Ea = !0;
function Nu(r) {
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
  return oc("DynamicShader", {
    effects: t
  });
}
function cn() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return {
    set: function set(t) {
      c$(t) && (t = {
        width: t,
        color: 255
      }), this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects || {}), {}, _defineProperty({}, "border".concat(r), t)) : _defineProperty({}, "border".concat(r), t);
    }
  };
}
var v$ = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"],
  g$ = ["autosize", "clipping", "contain", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "rtt", "scrollable", "scrollY", "src", "text", "textAlign", "textBaseline", "textOverflow", "texture", "verticalAlign", "wordWrap"];
var qe = /*#__PURE__*/function (_Object) {
  function qe(t) {
    var _this56;
    _classCallCheck(this, qe);
    _this56 = _callSuper(this, qe), _this56._animationQueue = [], _this56._animationRunning = !1, _this56.type = t === "text" ? Ot.TextNode : Ot.Element, _this56.rendered = !1, _this56.lng = {}, _this56.children = new n$(_assertThisInitialized(_this56));
    return _this56;
  }
  _inherits(qe, _Object);
  return _createClass(qe, [{
    key: "effects",
    get: function get() {
      return this._effects;
    },
    set: function set(t) {
      this._effects = t, this.rendered && (this.shader = Nu(t));
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(t) {
      var _ref36;
      this._parent = t, this.rendered && (this.lng.parent = (_ref36 = t == null ? void 0 : t.lng) !== null && _ref36 !== void 0 ? _ref36 : null);
    }
  }, {
    key: "shader",
    set: function set(t) {
      mi(t) && (t = oc.apply(void 0, _toConsumableArray(t))), this.lng.shader = t;
    }
  }, {
    key: "_sendToLightningAnimatable",
    value: function _sendToLightningAnimatable(t, e) {
      if (this.rendered && Le.animationsEnabled && this.transition && (this.transition === !0 || this.transition[t])) {
        var n = this.transition === !0 || this.transition[t] === !0 ? void 0 : this.transition[t];
        return this.animate(_defineProperty({}, t, e), n).start();
      }
      this.lng[t] = e;
    }
  }, {
    key: "animate",
    value: function animate(t, e) {
      return N(this.rendered, "Node must be rendered before animating"), this.lng.animate(t, e || this.animationSettings);
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
      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var t;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              t = this._animationQueue.shift();
            case 1:
              if (!t) {
                _context10.next = 8;
                break;
              }
              this._animationRunning = !0;
              _context10.next = 5;
              return this.animate(t.props, t.animationSettings).start().waitUntilStopped();
            case 5:
              t = this._animationQueue.shift();
            case 6:
              _context10.next = 1;
              break;
            case 8:
              this._animationRunning = !1, this._animationQueueSettings = void 0;
            case 9:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
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
        if (this.forwardFocus !== void 0) if (wo(this.forwardFocus)) {
          if (this.forwardFocus.call(this, this) !== !1) return;
        } else {
          var t = typeof this.forwardFocus == "number" ? this.forwardFocus : null;
          if (t !== null && t < this.children.length) {
            var e = this.children[t];
            e instanceof qe && e.setFocus();
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
      return this.type === Ot.TextNode;
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
      mi(t) ? this._style = Mg(t) : this._style = t;
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
        if (n instanceof qe) {
          if (n.id === t) return n;
          var o = n.searchChildrenById(t);
          if (o) return o;
        }
      }
    }
  }, {
    key: "states",
    get: function get() {
      return this._states = this._states || new Pu(this._stateChanged.bind(this)), this._states;
    },
    set: function set(t) {
      this._states = new Pu(this._stateChanged.bind(this), t), this.rendered && this._stateChanged();
    }
  }, {
    key: "animationSettings",
    get: function get() {
      return this._animationSettings || h$;
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
        Gt("Layout: ", this);
        var i = !1;
        wo(this.onBeforeLayout) && (i = this.onBeforeLayout.call(this, this, t, e) || !1), this.display === "flex" ? (d$(this) || i) && ((n = this.parent) == null || n.updateLayout()) : i && ((o = this.parent) == null || o.updateLayout()), wo(this.onLayout) && this.onLayout.call(this, this, t, e);
      }
    }
  }, {
    key: "_stateChanged",
    value: function _stateChanged() {
      var _this59 = this;
      if (Gt("State Changed: ", this, this.states), this.forwardStates) {
        var e = this.states.slice();
        this.children.forEach(function (n) {
          return n.states = e;
        });
      }
      var t = this.states;
      if (this._undoStyles || this.style && f$(this.style, t)) {
        this._undoStyles = this._undoStyles || [];
        var _e7 = {};
        this._undoStyles.forEach(function (o) {
          _e7[o] = _this59.style[o];
        });
        var n = t.reduce(function (o, i) {
          var a = _this59.style[i];
          return a && (o = _objectSpread(_objectSpread({}, o), a)), o;
        }, {});
        this._undoStyles = Object.keys(n), n.transition !== void 0 && (this.transition = n.transition), Object.assign(this, _e7, n);
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
      e.requiresLayout() && !To.has(e) && (To.add(e), Ea && (Ea = !1, queueMicrotask(function () {
        Ea = !0;
        var i = _toConsumableArray(To);
        To.clear();
        for (var a = i.length - 1; a >= 0; a--) i[a].updateLayout();
      }))), this.states.length && this._stateChanged();
      var n = t.lng;
      if (n.x = n.x || 0, n.y = n.y || 0, e.rendered && (n.parent = e.lng), t._effects && (n.shader = Nu(t._effects)), t.isTextNode()) {
        if (Le.fontSettings) for (var i in Le.fontSettings) n[i] === void 0 && (n[i] = Le.fontSettings[i]);
        n.text = t.getText(), n.textAlign && !n.contain && console.warn("Text align requires contain: ", t.getText()), n.contain && (n.width || (n.width = (e.width || 0) - n.x - (n.marginRight || 0)), n.contain === "both" && !n.height && !n.maxLines ? n.height = (e.height || 0) - n.y - (n.marginBottom || 0) : n.maxLines === 1 && (n.height = n.height || n.lineHeight || n.fontSize)), Gt("Rendering: ", this, n), t.lng = mt.createTextNode(n), e.requiresLayout() && (!n.width || !n.height) && t._layoutOnLoad();
      } else n.texture || (isNaN(n.width) && (n.width = (e.width || 0) - n.x), isNaN(n.height) && (n.height = (e.height || 0) - n.y), n.rtt && !n.color && (n.color = 4294967295), !n.color && !n.src && (n.color = 0)), Gt("Rendering: ", this, n), t.lng = mt.createNode(n);
      if (t.rendered = !0, t.autosize && e.requiresLayout() && t._layoutOnLoad(), t.onFail && t.lng.on("failed", t.onFail), t.onLoad && t.lng.on("loaded", t.onLoad), wo(this.onCreate) && this.onCreate.call(this, t), t.onEvents && t.onEvents.forEach(function (_ref37) {
        var _ref38 = _slicedToArray(_ref37, 2),
          i = _ref38[0],
          a = _ref38[1];
        t.lng.on(i, function (s, l) {
          return a(t, l);
        });
      }), (o = t.lng) != null && o.div && (t.lng.div.element = t), t.type === Ot.Element) for (var _i8 = 0; _i8 < t.children.length; _i8++) {
        var a = t.children[_i8];
        N(a, "Child is undefined"), "render" in a ? a.render() : a.text && console.warn("TextNode outside of <Text>: ", a);
      }
      t.autofocus && t.setFocus();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Object));
var _loop2 = function _loop2() {
  var r = _v$[_i9];
  Object.defineProperty(qe.prototype, r, {
    get: function get() {
      return this.lng[r];
    },
    set: function set(t) {
      this._sendToLightningAnimatable(r, t);
    }
  });
};
for (var _i9 = 0, _v$ = v$; _i9 < _v$.length; _i9++) {
  _loop2();
}
var _loop3 = function _loop3() {
  var r = _g$[_i10];
  Object.defineProperty(qe.prototype, r, {
    get: function get() {
      return this.lng[r];
    },
    set: function set(t) {
      this.lng[r] = t;
    }
  });
};
for (var _i10 = 0, _g$ = g$; _i10 < _g$.length; _i10++) {
  _loop3();
}
Object.defineProperties(qe.prototype, {
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
  border: cn(),
  borderLeft: cn("Left"),
  borderRight: cn("Right"),
  borderTop: cn("Top"),
  borderBottom: cn("Bottom")
});
Object.defineProperties(qe.prototype, {
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
      var t = zi("text");
      return ac(t, r, !1), t;
    }();
  },
  H = function H(r) {
    return function () {
      var t = zi("node");
      return ac(t, r, !1), t;
    }();
  };
function p$(_ref39) {
  var r = _ref39.createElement,
    t = _ref39.createTextNode,
    e = _ref39.isTextNode,
    n = _ref39.replaceText,
    o = _ref39.insertNode,
    i = _ref39.removeNode,
    a = _ref39.setProperty,
    s = _ref39.getParentNode,
    l = _ref39.getFirstChild,
    c = _ref39.getNextSibling;
  function u($, y, m, w) {
    if (m !== void 0 && !w && (w = []), typeof y != "function") return f($, y, w, m);
    ot(function (R) {
      return f($, y(), R, m);
    }, w);
  }
  function f($, y, m, w, R) {
    for (; typeof m == "function";) m = m();
    if (y === m) return m;
    var I = _typeof(y),
      E = w !== void 0;
    if (I === "string" || I === "number") {
      if (I === "number" && (y = y.toString()), E) {
        var A = m[0];
        A && e(A) ? n(A, y) : A = t(y), m = p($, m, w, A);
      } else m !== "" && typeof m == "string" ? n(l($), m = y) : (p($, m, w, t(y)), m = y);
    } else if (y == null || I === "boolean") m = p($, m, w);else {
      if (I === "function") return ot(function () {
        var A = y();
        for (; typeof A == "function";) A = A();
        m = f($, A, m, w);
      }), function () {
        return m;
      };
      if (Array.isArray(y)) {
        var _A8 = [];
        if (d(_A8, y, R)) return ot(function () {
          return m = f($, _A8, m, w, !0);
        }), function () {
          return m;
        };
        if (_A8.length === 0) {
          var B = p($, m, w);
          if (E) return m = B;
        } else Array.isArray(m) ? m.length === 0 ? x($, _A8, w) : g($, m, _A8) : m == null || m === "" ? x($, _A8) : g($, E && m || [l($)], _A8);
        m = _A8;
      } else {
        if (Array.isArray(m)) {
          if (E) return m = p($, m, w, y);
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
      var E = y[R],
        A = void 0;
      if (!(E == null || E === !0 || E === !1)) if (Array.isArray(E)) w = d($, E) || w;else if ((A = _typeof(E)) == "string" || A === "number") $.push(t(E));else if (A === "function") {
        if (m) {
          for (; typeof E == "function";) E = E();
          w = d($, Array.isArray(E) ? E : [E]) || w;
        } else $.push(E), w = !0;
      } else $.push(E);
    }
    return w;
  }
  function g($, y, m) {
    var w = m.length,
      R = y.length,
      I = w,
      E = 0,
      A = 0,
      B = c(y[R - 1]),
      P = null;
    for (; E < R || A < I;) {
      if (y[E] === m[A]) {
        E++, A++;
        continue;
      }
      for (; y[R - 1] === m[I - 1];) R--, I--;
      if (R === E) {
        var _ = I < w ? A ? c(m[A - 1]) : m[I - A] : B;
        for (; A < I;) o($, m[A++], _);
      } else if (I === A) for (; E < R;) (!P || !P.has(y[E])) && i($, y[E]), E++;else if (y[E] === m[I - 1] && m[A] === y[R - 1]) {
        var _7 = c(y[--R]);
        o($, m[A++], c(y[E++])), o($, m[--I], _7), y[R] = m[I];
      } else {
        if (!P) {
          P = new Map();
          var L = A;
          for (; L < I;) P.set(m[L], L++);
        }
        var _9 = P.get(y[E]);
        if (_9 != null) {
          if (A < _9 && _9 < I) {
            var _L4 = E,
              j = 1,
              M = void 0;
            for (; ++_L4 < R && _L4 < I && !((M = P.get(y[_L4])) == null || M !== _9 + j);) j++;
            if (j > _9 - A) {
              var W = y[E];
              for (; A < _9;) o($, m[A++], W);
            } else b($, m[A++], y[E++]);
          } else E++;
        } else i($, y[E++]);
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
      for (var E = y.length - 1; E >= 0; E--) {
        var A = y[E];
        if (R !== A) {
          var B = s(A) === $;
          !_I2 && !E ? B ? b($, R, A) : o($, R, m) : B && i($, A);
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
    return y || (y = {}), w || ot(function () {
      return m.children = f($, y.children, m.children);
    }), ot(function () {
      return y.ref && y.ref($);
    }), ot(function () {
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
      return Nt(function (w) {
        m = w, u(y, $());
      }), m;
    },
    insert: u,
    spread: function spread($, y, m) {
      typeof y == "function" ? ot(function (w) {
        return S($, y(), w, m);
      }) : S($, y, void 0, m);
    },
    createElement: r,
    createTextNode: t,
    insertNode: o,
    setProp: function setProp($, y, m, w) {
      return a($, y, m, w), m;
    },
    mergeProps: Zl,
    effect: ot,
    memo: ie,
    createComponent: Cg,
    use: function use($, y, m) {
      return ve(function () {
        return $(y, m);
      });
    }
  };
}
function m$(r) {
  var t = p$(r);
  return t.mergeProps = Zl, t;
}
var Dg = {
    createElement: function createElement(r) {
      return new qe(r);
    },
    createTextNode: function createTextNode(r) {
      return {
        type: Ot.Text,
        text: r,
        parent: void 0
      };
    },
    replaceText: function replaceText(r, t) {
      Gt("Replace Text: ", r, t), r.text = t;
      var e = r.parent;
      N(e), e.text = e.getText();
    },
    setProperty: function setProperty(r, t) {
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      r[t] = e;
    },
    insertNode: function insertNode(r, t, e) {
      Gt("INSERT: ", r, t, e), r.children.insert(t, e), t._queueDelete = !1, t instanceof qe ? r.rendered && t.render() : r.isTextNode() && (r.text = r.getText());
    },
    isTextNode: function isTextNode(r) {
      return r.isTextNode();
    },
    removeNode: function removeNode(r, t) {
      Gt("REMOVE: ", r, t), r.children.remove(t), t._queueDelete = !0, t instanceof qe && queueMicrotask(function () {
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
  jg = m$(Dg);
var yi;
function y$(_x11, _x12) {
  return _y$.apply(this, arguments);
}
function _y$() {
  _y$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(r, t) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          yi = r$(r || Le.rendererOptions, t || "app");
          _context15.next = 3;
          return yi.init();
        case 3:
          return _context15.abrupt("return", _context15.sent);
        case 4:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _y$.apply(this, arguments);
}
var x$ = /*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(r, t) {
      var e;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            e = Dg.createElement("App");
            _context11.next = 3;
            return y$(void 0, t);
          case 3:
            e.lng = yi.root;
            e.rendered = !0;
            return _context11.abrupt("return", {
              dispose: jg.render(r, e),
              rootNode: e,
              renderer: yi
            });
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function x$(_x13, _x14) {
      return _ref35.apply(this, arguments);
    };
  }(),
  qY = jg.effect,
  ic = jg.memo,
  C = jg.createComponent,
  zi = jg.createElement,
  JY = jg.createTextNode,
  ZY = jg.insertNode,
  $$ = jg.insert,
  ac = jg.spread,
  b$ = jg.setProp,
  De = jg.mergeProps,
  S$ = jg.use;
function he() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return u$(r) ? r : typeof r == "string" ? r.startsWith("#") ? +(r.replace("#", "0x") + (r.length === 7 ? "ff" : "")) : r.startsWith("0x") ? Number(r) : +("0x" + (r.length === 6 ? r + "ff" : r)) : 0;
}
var Ao = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : {},
  F = function F(r) {
    try {
      return !!r();
    } catch (_unused2) {
      return !0;
    }
  },
  w$ = F,
  Dn = !w$(function () {
    var r = function () {}.bind();
    return typeof r != "function" || r.hasOwnProperty("prototype");
  }),
  zg = Dn,
  Ug = Function.prototype,
  Zs = Ug.call,
  T$ = zg && Ug.bind.bind(Zs, Zs),
  k = zg ? T$ : function (r) {
    return function () {
      return Zs.apply(r, arguments);
    };
  },
  Wg = k,
  A$ = Wg({}.toString),
  I$ = Wg("".slice),
  je = function je(r) {
    return I$(A$(r), 8, -1);
  },
  C$ = k,
  E$ = F,
  R$ = je,
  Ra = Object,
  O$ = C$("".split),
  Kr = E$(function () {
    return !Ra("z").propertyIsEnumerable(0);
  }) ? function (r) {
    return R$(r) === "String" ? O$(r, "") : Ra(r);
  } : Ra,
  Xe = function Xe(r) {
    return r == null;
  },
  _$ = Xe,
  P$ = TypeError,
  re = function re(r) {
    if (_$(r)) throw new P$("Can't call method on " + r);
    return r;
  },
  N$ = Kr,
  F$ = re,
  $e = function $e(r) {
    return N$(F$(r));
  },
  un = function un(r) {
    return r && r.Math === Math && r;
  },
  z = un((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || un((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || un((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || un(_typeof(Ao) == "object" && Ao) || un(_typeof(Ao) == "object" && Ao) || function () {
    return this;
  }() || Function("return this")(),
  Hg = {
    exports: {}
  },
  Yg = !1,
  Fu = z,
  B$ = Object.defineProperty,
  sc = function sc(r, t) {
    try {
      B$(Fu, r, {
        value: t,
        configurable: !0,
        writable: !0
      });
    } catch (_unused3) {
      Fu[r] = t;
    }
    return t;
  },
  k$ = z,
  L$ = sc,
  Bu = "__core-js_shared__",
  ku = Hg.exports = k$[Bu] || L$(Bu, {});
(ku.versions || (ku.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var lc = Hg.exports,
  Lu = lc,
  Gr = function Gr(r, t) {
    return Lu[r] || (Lu[r] = t || {});
  },
  M$ = re,
  D$ = Object,
  Z = function Z(r) {
    return D$(M$(r));
  },
  j$ = k,
  z$ = Z,
  U$ = j$({}.hasOwnProperty),
  fe = Object.hasOwn || function (t, e) {
    return U$(z$(t), e);
  },
  W$ = k,
  H$ = 0,
  Y$ = Math.random(),
  K$ = W$(1 .toString),
  Ui = function Ui(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + K$(++H$ + Y$, 36);
  },
  G$ = z,
  Mu = G$.navigator,
  Du = Mu && Mu.userAgent,
  $t = Du ? String(Du) : "",
  Kg = z,
  Oa = $t,
  ju = Kg.process,
  zu = Kg.Deno,
  Uu = ju && ju.versions || zu && zu.version,
  Wu = Uu && Uu.v8,
  Qe,
  xi;
Wu && (Qe = Wu.split("."), xi = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
!xi && Oa && (Qe = Oa.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = Oa.match(/Chrome\/(\d+)/), Qe && (xi = +Qe[1])));
var tr = xi,
  Hu = tr,
  V$ = F,
  X$ = z,
  Q$ = X$.String,
  Vr = !!Object.getOwnPropertySymbols && !V$(function () {
    var r = Symbol("symbol detection");
    return !Q$(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && Hu && Hu < 41;
  }),
  q$ = Vr,
  Gg = q$ && !Symbol.sham && _typeof(Symbol.iterator) == "symbol",
  J$ = z,
  Z$ = Gr,
  Yu = fe,
  eb = Ui,
  tb = Vr,
  rb = Gg,
  Or = J$.Symbol,
  _a = Z$("wks"),
  nb = rb ? Or["for"] || Or : Or && Or.withoutSetter || eb,
  q = function q(r) {
    return Yu(_a, r) || (_a[r] = tb && Yu(Or, r) ? Or[r] : nb("Symbol." + r)), _a[r];
  },
  Pa = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all,
  X = _typeof(Pa) > "u" && Pa !== void 0 ? function (r) {
    return typeof r == "function" || r === Pa;
  } : function (r) {
    return typeof r == "function";
  },
  ob = X,
  J = function J(r) {
    return _typeof(r) == "object" ? r !== null : ob(r);
  },
  ib = J,
  ab = String,
  sb = TypeError,
  ge = function ge(r) {
    if (ib(r)) return r;
    throw new sb(ab(r) + " is not an object");
  },
  Wi = {},
  lb = F,
  Y = !lb(function () {
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  }),
  cb = Y,
  ub = F,
  Vg = cb && ub(function () {
    return Object.defineProperty(function () {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }),
  be = {},
  fb = z,
  Ku = J,
  el = fb.document,
  db = Ku(el) && Ku(el.createElement),
  cc = function cc(r) {
    return db ? el.createElement(r) : {};
  },
  hb = Y,
  vb = F,
  gb = cc,
  Xg = !hb && !vb(function () {
    return Object.defineProperty(gb("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  }),
  pb = Dn,
  Io = Function.prototype.call,
  K = pb ? Io.bind(Io) : function () {
    return Io.apply(Io, arguments);
  },
  Na = z,
  mb = X,
  yb = function yb(r) {
    return mb(r) ? r : void 0;
  },
  Oe = function Oe(r, t) {
    return arguments.length < 2 ? yb(Na[r]) : Na[r] && Na[r][t];
  },
  xb = k,
  bt = xb({}.isPrototypeOf),
  $b = Oe,
  bb = X,
  Sb = bt,
  wb = Gg,
  Tb = Object,
  jn = wb ? function (r) {
    return _typeof(r) == "symbol";
  } : function (r) {
    var t = $b("Symbol");
    return bb(t) && Sb(t.prototype, Tb(r));
  },
  Ab = String,
  Xr = function Xr(r) {
    try {
      return Ab(r);
    } catch (_unused4) {
      return "Object";
    }
  },
  Ib = X,
  Cb = Xr,
  Eb = TypeError,
  de = function de(r) {
    if (Ib(r)) return r;
    throw new Eb(Cb(r) + " is not a function");
  },
  Rb = de,
  Ob = Xe,
  St = function St(r, t) {
    var e = r[t];
    return Ob(e) ? void 0 : Rb(e);
  },
  Fa = K,
  Ba = X,
  ka = J,
  _b = TypeError,
  Pb = function Pb(r, t) {
    var e, n;
    if (t === "string" && Ba(e = r.toString) && !ka(n = Fa(e, r)) || Ba(e = r.valueOf) && !ka(n = Fa(e, r)) || t !== "string" && Ba(e = r.toString) && !ka(n = Fa(e, r))) return n;
    throw new _b("Can't convert object to primitive value");
  },
  Nb = K,
  Gu = J,
  Vu = jn,
  Fb = St,
  Bb = Pb,
  kb = q,
  Lb = TypeError,
  Mb = kb("toPrimitive"),
  Qg = function Qg(r, t) {
    if (!Gu(r) || Vu(r)) return r;
    var e = Fb(r, Mb),
      n;
    if (e) {
      if (t === void 0 && (t = "default"), n = Nb(e, r, t), !Gu(n) || Vu(n)) return n;
      throw new Lb("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), Bb(r, t);
  },
  Db = Qg,
  jb = jn,
  Qr = function Qr(r) {
    var t = Db(r, "string");
    return jb(t) ? t : t + "";
  },
  zb = Y,
  Ub = Xg,
  Wb = Vg,
  Co = ge,
  Xu = Qr,
  Hb = TypeError,
  La = Object.defineProperty,
  Yb = Object.getOwnPropertyDescriptor,
  Ma = "enumerable",
  Da = "configurable",
  ja = "writable";
be.f = zb ? Wb ? function (t, e, n) {
  if (Co(t), e = Xu(e), Co(n), typeof t == "function" && e === "prototype" && "value" in n && ja in n && !n[ja]) {
    var o = Yb(t, e);
    o && o[ja] && (t[e] = n.value, n = {
      configurable: Da in n ? n[Da] : o[Da],
      enumerable: Ma in n ? n[Ma] : o[Ma],
      writable: !1
    });
  }
  return La(t, e, n);
} : La : function (t, e, n) {
  if (Co(t), e = Xu(e), Co(n), Ub) try {
    return La(t, e, n);
  } catch (_unused5) {}
  if ("get" in n || "set" in n) throw new Hb("Accessors not supported");
  return "value" in n && (t[e] = n.value), t;
};
var Kb = Math.ceil,
  Gb = Math.floor,
  Vb = Math.trunc || function (t) {
    var e = +t;
    return (e > 0 ? Gb : Kb)(e);
  },
  Xb = Vb,
  Ie = function Ie(r) {
    var t = +r;
    return t !== t || t === 0 ? 0 : Xb(t);
  },
  Qb = Ie,
  qb = Math.max,
  Jb = Math.min,
  rr = function rr(r, t) {
    var e = Qb(r);
    return e < 0 ? qb(e + t, 0) : Jb(e, t);
  },
  Zb = Ie,
  eS = Math.min,
  kt = function kt(r) {
    var t = Zb(r);
    return t > 0 ? eS(t, 9007199254740991) : 0;
  },
  tS = kt,
  ne = function ne(r) {
    return tS(r.length);
  },
  rS = $e,
  nS = rr,
  oS = ne,
  Qu = function Qu(r) {
    return function (t, e, n) {
      var o = rS(t),
        i = oS(o);
      if (i === 0) return !r && -1;
      var a = nS(n, i),
        s;
      if (r && e !== e) {
        for (; i > a;) if (s = o[a++], s !== s) return !0;
      } else for (; i > a; a++) if ((r || a in o) && o[a] === e) return r || a || 0;
      return !r && -1;
    };
  },
  uc = {
    includes: Qu(!0),
    indexOf: Qu(!1)
  },
  zn = {},
  iS = k,
  za = fe,
  aS = $e,
  sS = uc.indexOf,
  lS = zn,
  qu = iS([].push),
  qg = function qg(r, t) {
    var e = aS(r),
      n = 0,
      o = [],
      i;
    for (i in e) !za(lS, i) && za(e, i) && qu(o, i);
    for (; t.length > n;) za(e, i = t[n++]) && (~sS(o, i) || qu(o, i));
    return o;
  },
  fc = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  cS = qg,
  uS = fc,
  Un = Object.keys || function (t) {
    return cS(t, uS);
  },
  fS = Y,
  dS = Vg,
  hS = be,
  vS = ge,
  gS = $e,
  pS = Un;
Wi.f = fS && !dS ? Object.defineProperties : function (t, e) {
  vS(t);
  for (var n = gS(e), o = pS(e), i = o.length, a = 0, s; i > a;) hS.f(t, s = o[a++], n[s]);
  return t;
};
var mS = Oe,
  Jg = mS("document", "documentElement"),
  yS = Gr,
  xS = Ui,
  Ju = yS("keys"),
  Hi = function Hi(r) {
    return Ju[r] || (Ju[r] = xS(r));
  },
  $S = ge,
  bS = Wi,
  Zu = fc,
  SS = zn,
  wS = Jg,
  TS = cc,
  AS = Hi,
  ef = ">",
  tf = "<",
  tl = "prototype",
  rl = "script",
  Zg = AS("IE_PROTO"),
  Ua = function Ua() {},
  ep = function ep(r) {
    return tf + rl + ef + r + tf + "/" + rl + ef;
  },
  rf = function rf(r) {
    r.write(ep("")), r.close();
    var t = r.parentWindow.Object;
    return r = null, t;
  },
  IS = function IS() {
    var r = TS("iframe"),
      t = "java" + rl + ":",
      e;
    return r.style.display = "none", wS.appendChild(r), r.src = String(t), e = r.contentWindow.document, e.open(), e.write(ep("document.F=Object")), e.close(), e.F;
  },
  Eo,
  _ni = function ni() {
    try {
      Eo = new ActiveXObject("htmlfile");
    } catch (_unused6) {}
    _ni = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && Eo ? rf(Eo) : IS() : rf(Eo);
    for (var r = Zu.length; r--;) delete _ni[tl][Zu[r]];
    return _ni();
  };
SS[Zg] = !0;
var nr = Object.create || function (t, e) {
    var n;
    return t !== null ? (Ua[tl] = $S(t), n = new Ua(), Ua[tl] = null, n[Zg] = t) : n = _ni(), e === void 0 ? n : bS.f(n, e);
  },
  CS = q,
  ES = nr,
  RS = be.f,
  nl = CS("unscopables"),
  ol = Array.prototype;
ol[nl] === void 0 && RS(ol, nl, {
  configurable: !0,
  value: ES(null)
});
var Be = function Be(r) {
    ol[nl][r] = !0;
  },
  Wn = {},
  OS = z,
  _S = X,
  nf = OS.WeakMap,
  PS = _S(nf) && /native code/.test(String(nf)),
  or = function or(r, t) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: t
    };
  },
  NS = Y,
  FS = be,
  BS = or,
  ir = NS ? function (r, t, e) {
    return FS.f(r, t, BS(1, e));
  } : function (r, t, e) {
    return r[t] = e, r;
  },
  kS = PS,
  tp = z,
  LS = J,
  MS = ir,
  Wa = fe,
  Ha = lc,
  DS = Hi,
  jS = zn,
  of = "Object already initialized",
  il = tp.TypeError,
  zS = tp.WeakMap,
  $i,
  Fn,
  bi,
  US = function US(r) {
    return bi(r) ? Fn(r) : $i(r, {});
  },
  WS = function WS(r) {
    return function (t) {
      var e;
      if (!LS(t) || (e = Fn(t)).type !== r) throw new il("Incompatible receiver, " + r + " required");
      return e;
    };
  };
if (kS || Ha.state) {
  var tt = Ha.state || (Ha.state = new zS());
  tt.get = tt.get, tt.has = tt.has, tt.set = tt.set, $i = function $i(r, t) {
    if (tt.has(r)) throw new il(of);
    return t.facade = r, tt.set(r, t), t;
  }, Fn = function Fn(r) {
    return tt.get(r) || {};
  }, bi = function bi(r) {
    return tt.has(r);
  };
} else {
  var dr = DS("state");
  jS[dr] = !0, $i = function $i(r, t) {
    if (Wa(r, dr)) throw new il(of);
    return t.facade = r, MS(r, dr, t), t;
  }, Fn = function Fn(r) {
    return Wa(r, dr) ? r[dr] : {};
  }, bi = function bi(r) {
    return Wa(r, dr);
  };
}
var Lt = {
    set: $i,
    get: Fn,
    has: bi,
    enforce: US,
    getterFor: WS
  },
  Ze = {},
  Hn = {},
  rp = {}.propertyIsEnumerable,
  np = Object.getOwnPropertyDescriptor,
  HS = np && !rp.call({
    1: 2
  }, 1);
Hn.f = HS ? function (t) {
  var e = np(this, t);
  return !!e && e.enumerable;
} : rp;
var YS = Y,
  KS = K,
  GS = Hn,
  VS = or,
  XS = $e,
  QS = Qr,
  qS = fe,
  JS = Xg,
  af = Object.getOwnPropertyDescriptor;
Ze.f = YS ? af : function (t, e) {
  if (t = XS(t), e = QS(e), JS) try {
    return af(t, e);
  } catch (_unused7) {}
  if (qS(t, e)) return VS(!KS(GS.f, t, e), t[e]);
};
var op = {
    exports: {}
  },
  al = Y,
  ZS = fe,
  ip = Function.prototype,
  ew = al && Object.getOwnPropertyDescriptor,
  dc = ZS(ip, "name"),
  tw = dc && function () {}.name === "something",
  rw = dc && (!al || al && ew(ip, "name").configurable),
  Yi = {
    EXISTS: dc,
    PROPER: tw,
    CONFIGURABLE: rw
  },
  nw = k,
  ow = X,
  sl = lc,
  iw = nw(Function.toString);
ow(sl.inspectSource) || (sl.inspectSource = function (r) {
  return iw(r);
});
var hc = sl.inspectSource,
  vc = k,
  aw = F,
  sw = X,
  Ro = fe,
  ll = Y,
  lw = Yi.CONFIGURABLE,
  cw = hc,
  ap = Lt,
  uw = ap.enforce,
  fw = ap.get,
  sf = String,
  oi = Object.defineProperty,
  dw = vc("".slice),
  hw = vc("".replace),
  vw = vc([].join),
  gw = ll && !aw(function () {
    return oi(function () {}, "length", {
      value: 8
    }).length !== 8;
  }),
  pw = String(String).split("String"),
  mw = op.exports = function (r, t, e) {
    dw(sf(t), 0, 7) === "Symbol(" && (t = "[" + hw(sf(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!Ro(r, "name") || lw && r.name !== t) && (ll ? oi(r, "name", {
      value: t,
      configurable: !0
    }) : r.name = t), gw && e && Ro(e, "arity") && r.length !== e.arity && oi(r, "length", {
      value: e.arity
    });
    try {
      e && Ro(e, "constructor") && e.constructor ? ll && oi(r, "prototype", {
        writable: !1
      }) : r.prototype && (r.prototype = void 0);
    } catch (_unused8) {}
    var n = uw(r);
    return Ro(n, "source") || (n.source = vw(pw, typeof t == "string" ? t : "")), r;
  };
Function.prototype.toString = mw(function () {
  return sw(this) && fw(this).source || cw(this);
}, "toString");
var gc = op.exports,
  yw = X,
  xw = be,
  $w = gc,
  bw = sc,
  ze = function ze(r, t, e, n) {
    n || (n = {});
    var o = n.enumerable,
      i = n.name !== void 0 ? n.name : t;
    if (yw(e) && $w(e, i, n), n.global) o ? r[t] = e : bw(t, e);else {
      try {
        n.unsafe ? r[t] && (o = !0) : delete r[t];
      } catch (_unused9) {}
      o ? r[t] = e : xw.f(r, t, {
        value: e,
        enumerable: !1,
        configurable: !n.nonConfigurable,
        writable: !n.nonWritable
      });
    }
    return r;
  },
  qr = {},
  Sw = qg,
  ww = fc,
  Tw = ww.concat("length", "prototype");
qr.f = Object.getOwnPropertyNames || function (t) {
  return Sw(t, Tw);
};
var Yn = {};
Yn.f = Object.getOwnPropertySymbols;
var Aw = Oe,
  Iw = k,
  Cw = qr,
  Ew = Yn,
  Rw = ge,
  Ow = Iw([].concat),
  sp = Aw("Reflect", "ownKeys") || function (t) {
    var e = Cw.f(Rw(t)),
      n = Ew.f;
    return n ? Ow(e, n(t)) : e;
  },
  lf = fe,
  _w = sp,
  Pw = Ze,
  Nw = be,
  pc = function pc(r, t, e) {
    for (var n = _w(t), o = Nw.f, i = Pw.f, a = 0; a < n.length; a++) {
      var s = n[a];
      !lf(r, s) && !(e && lf(e, s)) && o(r, s, i(t, s));
    }
  },
  Fw = F,
  Bw = X,
  kw = /#|\.prototype\./,
  Kn = function Kn(r, t) {
    var e = Mw[Lw(r)];
    return e === jw ? !0 : e === Dw ? !1 : Bw(t) ? Fw(t) : !!t;
  },
  Lw = Kn.normalize = function (r) {
    return String(r).replace(kw, ".").toLowerCase();
  },
  Mw = Kn.data = {},
  Dw = Kn.NATIVE = "N",
  jw = Kn.POLYFILL = "P",
  Ki = Kn,
  Oo = z,
  zw = Ze.f,
  Uw = ir,
  Ww = ze,
  Hw = sc,
  Yw = pc,
  Kw = Ki,
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
    if (n ? a = Oo : o ? a = Oo[e] || Hw(e, {}) : a = Oo[e] && Oo[e].prototype, a) for (s in t) {
      if (c = t[s], r.dontCallGetSet ? (u = zw(a, s), l = u && u.value) : l = a[s], i = Kw(n ? s : e + (o ? "." : "#") + s, r.forced), !i && l !== void 0) {
        if (_typeof(c) == _typeof(l)) continue;
        Yw(c, l);
      }
      (r.sham || l && l.sham) && Uw(c, "sham", !0), Ww(a, s, c, r);
    }
  },
  Gw = F,
  lp = !Gw(function () {
    function r() {}
    return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
  }),
  Vw = fe,
  Xw = X,
  Qw = Z,
  qw = Hi,
  Jw = lp,
  cf = qw("IE_PROTO"),
  cl = Object,
  Zw = cl.prototype,
  ar = Jw ? cl.getPrototypeOf : function (r) {
    var t = Qw(r);
    if (Vw(t, cf)) return t[cf];
    var e = t.constructor;
    return Xw(e) && t instanceof e ? e.prototype : t instanceof cl ? Zw : null;
  },
  eT = F,
  tT = X,
  rT = J,
  uf = ar,
  nT = ze,
  oT = q,
  ul = oT("iterator"),
  cp = !1,
  Jt,
  Ya,
  Ka;
[].keys && (Ka = [].keys(), "next" in Ka ? (Ya = uf(uf(Ka)), Ya !== Object.prototype && (Jt = Ya)) : cp = !0);
var iT = !rT(Jt) || eT(function () {
  var r = {};
  return Jt[ul].call(r) !== r;
});
iT && (Jt = {});
tT(Jt[ul]) || nT(Jt, ul, function () {
  return this;
});
var up = {
    IteratorPrototype: Jt,
    BUGGY_SAFARI_ITERATORS: cp
  },
  aT = be.f,
  sT = fe,
  lT = q,
  ff = lT("toStringTag"),
  wt = function wt(r, t, e) {
    r && !e && (r = r.prototype), r && !sT(r, ff) && aT(r, ff, {
      configurable: !0,
      value: t
    });
  },
  cT = up.IteratorPrototype,
  uT = nr,
  fT = or,
  dT = wt,
  hT = Wn,
  vT = function vT() {
    return this;
  },
  fp = function fp(r, t, e, n) {
    var o = t + " Iterator";
    return r.prototype = uT(cT, {
      next: fT(+!n, e)
    }), dT(r, o, !1), hT[o] = vT, r;
  },
  gT = k,
  pT = de,
  dp = function dp(r, t, e) {
    try {
      return gT(pT(Object.getOwnPropertyDescriptor(r, t)[e]));
    } catch (_unused10) {}
  },
  mT = J,
  hp = function hp(r) {
    return mT(r) || r === null;
  },
  yT = hp,
  xT = String,
  $T = TypeError,
  bT = function bT(r) {
    if (yT(r)) return r;
    throw new $T("Can't set " + xT(r) + " as a prototype");
  },
  ST = dp,
  wT = J,
  TT = re,
  AT = bT,
  Gn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var r = !1,
      t = {},
      e;
    try {
      e = ST(Object.prototype, "__proto__", "set"), e(t, []), r = t instanceof Array;
    } catch (_unused11) {}
    return function (o, i) {
      return TT(o), AT(i), wT(o) && (r ? e(o, i) : o.__proto__ = i), o;
    };
  }() : void 0),
  IT = T,
  CT = K,
  vp = Yi,
  ET = X,
  RT = fp,
  df = ar,
  hf = Gn,
  OT = wt,
  _T = ir,
  Ga = ze,
  PT = q,
  NT = Wn,
  gp = up,
  FT = vp.PROPER,
  BT = vp.CONFIGURABLE,
  vf = gp.IteratorPrototype,
  _o = gp.BUGGY_SAFARI_ITERATORS,
  fn = PT("iterator"),
  gf = "keys",
  dn = "values",
  pf = "entries",
  kT = function kT() {
    return this;
  },
  mc = function mc(r, t, e, n, o, i, a) {
    RT(e, t, n);
    var s = function s(S) {
        if (S === o && d) return d;
        if (!_o && S && S in u) return u[S];
        switch (S) {
          case gf:
            return function () {
              return new e(this, S);
            };
          case dn:
            return function () {
              return new e(this, S);
            };
          case pf:
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
      f = u[fn] || u["@@iterator"] || o && u[o],
      d = !_o && f || s(o),
      g = t === "Array" && u.entries || f,
      p,
      x,
      b;
    if (g && (p = df(g.call(new r())), p !== Object.prototype && p.next && (df(p) !== vf && (hf ? hf(p, vf) : ET(p[fn]) || Ga(p, fn, kT)), OT(p, l, !0))), FT && o === dn && f && f.name !== dn && (BT ? _T(u, "name", dn) : (c = !0, d = function d() {
      return CT(f, this);
    })), o) if (x = {
      values: s(dn),
      keys: i ? d : s(gf),
      entries: s(pf)
    }, a) for (b in x) (_o || c || !(b in u)) && Ga(u, b, x[b]);else IT({
      target: t,
      proto: !0,
      forced: _o || c
    }, x);
    return u[fn] !== d && Ga(u, fn, d, {
      name: o
    }), NT[t] = d, x;
  },
  Gi = function Gi(r, t) {
    return {
      value: r,
      done: t
    };
  },
  LT = $e,
  yc = Be,
  mf = Wn,
  pp = Lt,
  MT = be.f,
  DT = mc,
  Po = Gi,
  jT = Y,
  mp = "Array Iterator",
  zT = pp.set,
  UT = pp.getterFor(mp);
DT(Array, "Array", function (r, t) {
  zT(this, {
    type: mp,
    target: LT(r),
    index: 0,
    kind: t
  });
}, function () {
  var r = UT(this),
    t = r.target,
    e = r.index++;
  if (!t || e >= t.length) return r.target = null, Po(void 0, !0);
  switch (r.kind) {
    case "keys":
      return Po(e, !1);
    case "values":
      return Po(t[e], !1);
  }
  return Po([e, t[e]], !1);
}, "values");
var yf = mf.Arguments = mf.Array;
yc("keys");
yc("values");
yc("entries");
if (jT && yf.name !== "values") try {
  MT(yf, "name", {
    value: "values"
  });
} catch (_unused12) {}
var yp = {
    exports: {}
  },
  Vi = {},
  WT = k,
  Jr = WT([].slice),
  HT = je,
  YT = $e,
  xp = qr.f,
  KT = Jr,
  $p = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  GT = function GT(r) {
    try {
      return xp(r);
    } catch (_unused13) {
      return KT($p);
    }
  };
Vi.f = function (t) {
  return $p && HT(t) === "Window" ? GT(t) : xp(YT(t));
};
var VT = F,
  xc = VT(function () {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      });
    }
  }),
  XT = F,
  QT = J,
  qT = je,
  xf = xc,
  ii = Object.isExtensible,
  JT = XT(function () {
    ii(1);
  }),
  bp = JT || xf ? function (t) {
    return !QT(t) || xf && qT(t) === "ArrayBuffer" ? !1 : ii ? ii(t) : !0;
  } : ii,
  ZT = F,
  Xi = !ZT(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  e1 = T,
  t1 = k,
  r1 = zn,
  n1 = J,
  $c = fe,
  o1 = be.f,
  $f = qr,
  i1 = Vi,
  bc = bp,
  a1 = Ui,
  s1 = Xi,
  Sp = !1,
  yt = a1("meta"),
  l1 = 0,
  Sc = function Sc(r) {
    o1(r, yt, {
      value: {
        objectID: "O" + l1++,
        weakData: {}
      }
    });
  },
  c1 = function c1(r, t) {
    if (!n1(r)) return _typeof(r) == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!$c(r, yt)) {
      if (!bc(r)) return "F";
      if (!t) return "E";
      Sc(r);
    }
    return r[yt].objectID;
  },
  u1 = function u1(r, t) {
    if (!$c(r, yt)) {
      if (!bc(r)) return !0;
      if (!t) return !1;
      Sc(r);
    }
    return r[yt].weakData;
  },
  f1 = function f1(r) {
    return s1 && Sp && bc(r) && !$c(r, yt) && Sc(r), r;
  },
  d1 = function d1() {
    h1.enable = function () {}, Sp = !0;
    var r = $f.f,
      t = t1([].splice),
      e = {};
    e[yt] = 1, r(e).length && ($f.f = function (n) {
      for (var o = r(n), i = 0, a = o.length; i < a; i++) if (o[i] === yt) {
        t(o, i, 1);
        break;
      }
      return o;
    }, e1({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: i1.f
    }));
  },
  h1 = yp.exports = {
    enable: d1,
    fastKey: c1,
    getWeakData: u1,
    onFreeze: f1
  };
r1[yt] = !0;
var Vn = yp.exports,
  v1 = je,
  g1 = k,
  Xn = function Xn(r) {
    if (v1(r) === "Function") return g1(r);
  },
  bf = Xn,
  p1 = de,
  m1 = Dn,
  y1 = bf(bf.bind),
  Mt = function Mt(r, t) {
    return p1(r), t === void 0 ? r : m1 ? y1(r, t) : function () {
      return r.apply(t, arguments);
    };
  },
  x1 = q,
  $1 = Wn,
  b1 = x1("iterator"),
  S1 = Array.prototype,
  wp = function wp(r) {
    return r !== void 0 && ($1.Array === r || S1[b1] === r);
  },
  w1 = q,
  T1 = w1("toStringTag"),
  Tp = {};
Tp[T1] = "z";
var wc = String(Tp) === "[object z]",
  A1 = wc,
  I1 = X,
  ai = je,
  C1 = q,
  E1 = C1("toStringTag"),
  R1 = Object,
  O1 = ai(function () {
    return arguments;
  }()) === "Arguments",
  _1 = function _1(r, t) {
    try {
      return r[t];
    } catch (_unused14) {}
  },
  Qi = A1 ? ai : function (r) {
    var t, e, n;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (e = _1(t = R1(r), E1)) == "string" ? e : O1 ? ai(t) : (n = ai(t)) === "Object" && I1(t.callee) ? "Arguments" : n;
  },
  P1 = Qi,
  Sf = St,
  N1 = Xe,
  F1 = Wn,
  B1 = q,
  k1 = B1("iterator"),
  Tc = function Tc(r) {
    if (!N1(r)) return Sf(r, k1) || Sf(r, "@@iterator") || F1[P1(r)];
  },
  L1 = K,
  M1 = de,
  D1 = ge,
  j1 = Xr,
  z1 = Tc,
  U1 = TypeError,
  Ap = function Ap(r, t) {
    var e = arguments.length < 2 ? z1(r) : t;
    if (M1(e)) return D1(L1(e, r));
    throw new U1(j1(r) + " is not iterable");
  },
  W1 = K,
  wf = ge,
  H1 = St,
  qi = function qi(r, t, e) {
    var n, o;
    wf(r);
    try {
      if (n = H1(r, "return"), !n) {
        if (t === "throw") throw e;
        return e;
      }
      n = W1(n, r);
    } catch (i) {
      o = !0, n = i;
    }
    if (t === "throw") throw e;
    if (o) throw n;
    return wf(n), e;
  },
  Y1 = Mt,
  K1 = K,
  G1 = ge,
  V1 = Xr,
  X1 = wp,
  Q1 = ne,
  Tf = bt,
  q1 = Ap,
  J1 = Tc,
  Af = qi,
  Z1 = TypeError,
  si = function si(r, t) {
    this.stopped = r, this.result = t;
  },
  If = si.prototype,
  ut = function ut(r, t, e) {
    var n = e && e.that,
      o = !!(e && e.AS_ENTRIES),
      i = !!(e && e.IS_RECORD),
      a = !!(e && e.IS_ITERATOR),
      s = !!(e && e.INTERRUPTED),
      l = Y1(t, n),
      c,
      u,
      f,
      d,
      g,
      p,
      x,
      b = function b($) {
        return c && Af(c, "normal", $), new si(!0, $);
      },
      S = function S($) {
        return o ? (G1($), s ? l($[0], $[1], b) : l($[0], $[1])) : s ? l($, b) : l($);
      };
    if (i) c = r.iterator;else if (a) c = r;else {
      if (u = J1(r), !u) throw new Z1(V1(r) + " is not iterable");
      if (X1(u)) {
        for (f = 0, d = Q1(r); d > f; f++) if (g = S(r[f]), g && Tf(If, g)) return g;
        return new si(!1);
      }
      c = q1(r, u);
    }
    for (p = i ? r.next : c.next; !(x = K1(p, c)).done;) {
      try {
        g = S(x.value);
      } catch ($) {
        Af(c, "throw", $);
      }
      if (_typeof(g) == "object" && g && Tf(If, g)) return g;
    }
    return new si(!1);
  },
  eA = bt,
  tA = TypeError,
  Ac = function Ac(r, t) {
    if (eA(t, r)) return r;
    throw new tA("Incorrect invocation");
  },
  rA = q,
  Ip = rA("iterator"),
  Cp = !1;
try {
  var nA = 0,
    Cf = {
      next: function next() {
        return {
          done: !!nA++
        };
      },
      "return": function _return() {
        Cp = !0;
      }
    };
  Cf[Ip] = function () {
    return this;
  }, Array.from(Cf, function () {
    throw 2;
  });
} catch (_unused15) {}
var Ic = function Ic(r, t) {
    try {
      if (!t && !Cp) return !1;
    } catch (_unused16) {
      return !1;
    }
    var e = !1;
    try {
      var n = {};
      n[Ip] = function () {
        return {
          next: function next() {
            return {
              done: e = !0
            };
          }
        };
      }, r(n);
    } catch (_unused17) {}
    return e;
  },
  oA = X,
  iA = J,
  Ef = Gn,
  Ep = function Ep(r, t, e) {
    var n, o;
    return Ef && oA(n = t.constructor) && n !== e && iA(o = n.prototype) && o !== e.prototype && Ef(r, o), r;
  },
  aA = T,
  sA = z,
  lA = k,
  Rf = Ki,
  cA = ze,
  uA = Vn,
  fA = ut,
  dA = Ac,
  hA = X,
  vA = Xe,
  Va = J,
  Xa = F,
  gA = Ic,
  pA = wt,
  mA = Ep,
  Rp = function Rp(r, t, e) {
    var n = r.indexOf("Map") !== -1,
      o = r.indexOf("Weak") !== -1,
      i = n ? "set" : "add",
      a = sA[r],
      s = a && a.prototype,
      l = a,
      c = {},
      u = function u(S) {
        var $ = lA(s[S]);
        cA(s, S, S === "add" ? function (m) {
          return $(this, m === 0 ? 0 : m), this;
        } : S === "delete" ? function (y) {
          return o && !Va(y) ? !1 : $(this, y === 0 ? 0 : y);
        } : S === "get" ? function (m) {
          return o && !Va(m) ? void 0 : $(this, m === 0 ? 0 : m);
        } : S === "has" ? function (m) {
          return o && !Va(m) ? !1 : $(this, m === 0 ? 0 : m);
        } : function (m, w) {
          return $(this, m === 0 ? 0 : m, w), this;
        });
      },
      f = Rf(r, !hA(a) || !(o || s.forEach && !Xa(function () {
        new a().entries().next();
      })));
    if (f) l = e.getConstructor(t, r, n, i), uA.enable();else if (Rf(r, !0)) {
      var d = new l(),
        g = d[i](o ? {} : -0, 1) !== d,
        p = Xa(function () {
          d.has(1);
        }),
        x = gA(function (S) {
          new a(S);
        }),
        b = !o && Xa(function () {
          for (var S = new a(), $ = 5; $--;) S[i]($, $);
          return !S.has(-0);
        });
      x || (l = t(function (S, $) {
        dA(S, s);
        var y = mA(new a(), S, l);
        return vA($) || fA($, y[i], {
          that: y,
          AS_ENTRIES: n
        }), y;
      }), l.prototype = s, s.constructor = l), (p || b) && (u("delete"), u("has"), n && u("get")), (b || g) && u(i), o && s.clear && delete s.clear;
    }
    return c[r] = l, aA({
      global: !0,
      constructor: !0,
      forced: l !== a
    }, c), pA(l, r), o || e.setStrong(l, r, n), l;
  },
  Of = gc,
  yA = be,
  Zr = function Zr(r, t, e) {
    return e.get && Of(e.get, t, {
      getter: !0
    }), e.set && Of(e.set, t, {
      setter: !0
    }), yA.f(r, t, e);
  },
  xA = ze,
  $A = function $A(r, t, e) {
    for (var n in t) xA(r, n, t[n], e);
    return r;
  },
  bA = Oe,
  SA = Zr,
  wA = q,
  TA = Y,
  _f = wA("species"),
  Cc = function Cc(r) {
    var t = bA(r);
    TA && t && !t[_f] && SA(t, _f, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  },
  Pf = nr,
  AA = Zr,
  Nf = $A,
  IA = Mt,
  CA = Ac,
  EA = Xe,
  RA = ut,
  OA = mc,
  No = Gi,
  _A = Cc,
  hn = Y,
  Ff = Vn.fastKey,
  Op = Lt,
  Bf = Op.set,
  Qa = Op.getterFor,
  _p = {
    getConstructor: function getConstructor(r, t, e, n) {
      var o = r(function (c, u) {
          CA(c, i), Bf(c, {
            type: t,
            index: Pf(null),
            first: null,
            last: null,
            size: 0
          }), hn || (c.size = 0), EA(u) || RA(u, c[n], {
            that: c,
            AS_ENTRIES: e
          });
        }),
        i = o.prototype,
        a = Qa(t),
        s = function s(c, u, f) {
          var d = a(c),
            g = l(c, u),
            p,
            x;
          return g ? g.value = f : (d.last = g = {
            index: x = Ff(u, !0),
            key: u,
            value: f,
            previous: p = d.last,
            next: null,
            removed: !1
          }, d.first || (d.first = g), p && (p.next = g), hn ? d.size++ : c.size++, x !== "F" && (d.index[x] = g)), c;
        },
        l = function l(c, u) {
          var f = a(c),
            d = Ff(u),
            g;
          if (d !== "F") return f.index[d];
          for (g = f.first; g; g = g.next) if (g.key === u) return g;
        };
      return Nf(i, {
        clear: function clear() {
          for (var u = this, f = a(u), d = f.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = null), d = d.next;
          f.first = f.last = null, f.index = Pf(null), hn ? f.size = 0 : u.size = 0;
        },
        "delete": function _delete(c) {
          var u = this,
            f = a(u),
            d = l(u, c);
          if (d) {
            var g = d.next,
              p = d.previous;
            delete f.index[d.index], d.removed = !0, p && (p.next = g), g && (g.previous = p), f.first === d && (f.first = g), f.last === d && (f.last = p), hn ? f.size-- : u.size--;
          }
          return !!d;
        },
        forEach: function forEach(u) {
          for (var f = a(this), d = IA(u, arguments.length > 1 ? arguments[1] : void 0), g; g = g ? g.next : f.first;) for (d(g.value, g.key, this); g && g.removed;) g = g.previous;
        },
        has: function has(u) {
          return !!l(this, u);
        }
      }), Nf(i, e ? {
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
      }), hn && AA(i, "size", {
        configurable: !0,
        get: function get() {
          return a(this).size;
        }
      }), o;
    },
    setStrong: function setStrong(r, t, e) {
      var n = t + " Iterator",
        o = Qa(t),
        i = Qa(n);
      OA(r, t, function (a, s) {
        Bf(this, {
          type: n,
          target: a,
          state: o(a),
          kind: s,
          last: null
        });
      }, function () {
        for (var a = i(this), s = a.kind, l = a.last; l && l.removed;) l = l.previous;
        return !a.target || !(a.last = l = l ? l.next : a.state.first) ? (a.target = null, No(void 0, !0)) : No(s === "keys" ? l.key : s === "values" ? l.value : [l.key, l.value], !1);
      }, e ? "entries" : "values", !e, !0), _A(t);
    }
  },
  PA = Rp,
  NA = _p;
PA("Map", function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, NA);
var Fo = k,
  vn = Map.prototype,
  FA = {
    Map: Map,
    set: Fo(vn.set),
    get: Fo(vn.get),
    has: Fo(vn.has),
    remove: Fo(vn["delete"]),
    proto: vn
  },
  BA = T,
  kA = k,
  LA = de,
  MA = re,
  DA = ut,
  Ji = FA,
  jA = F,
  Pp = Ji.Map,
  zA = Ji.has,
  UA = Ji.get,
  WA = Ji.set,
  HA = kA([].push),
  YA = jA(function () {
    return Pp.groupBy("ab", function (r) {
      return r;
    }).get("a").length !== 1;
  });
BA({
  target: "Map",
  stat: !0,
  forced: YA
}, {
  groupBy: function groupBy(t, e) {
    MA(t), LA(e);
    var n = new Pp(),
      o = 0;
    return DA(t, function (i) {
      var a = e(i, o++);
      zA(n, a) ? HA(UA(n, a), i) : WA(n, a, [i]);
    }), n;
  }
});
var KA = wc,
  GA = Qi,
  VA = KA ? {}.toString : function () {
    return "[object " + GA(this) + "]";
  },
  XA = wc,
  QA = ze,
  qA = VA;
XA || QA(Object.prototype, "toString", qA, {
  unsafe: !0
});
var JA = Qi,
  ZA = String,
  Q = function Q(r) {
    if (JA(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return ZA(r);
  },
  Ec = k,
  eI = Ie,
  tI = Q,
  rI = re,
  nI = Ec("".charAt),
  kf = Ec("".charCodeAt),
  oI = Ec("".slice),
  Lf = function Lf(r) {
    return function (t, e) {
      var n = tI(rI(t)),
        o = eI(e),
        i = n.length,
        a,
        s;
      return o < 0 || o >= i ? r ? "" : void 0 : (a = kf(n, o), a < 55296 || a > 56319 || o + 1 === i || (s = kf(n, o + 1)) < 56320 || s > 57343 ? r ? nI(n, o) : a : r ? oI(n, o, o + 2) : (a - 55296 << 10) + (s - 56320) + 65536);
    };
  },
  Rc = {
    codeAt: Lf(!1),
    charAt: Lf(!0)
  },
  iI = Rc.charAt,
  aI = Q,
  Np = Lt,
  sI = mc,
  Mf = Gi,
  Fp = "String Iterator",
  lI = Np.set,
  cI = Np.getterFor(Fp);
sI(String, "String", function (r) {
  lI(this, {
    type: Fp,
    string: aI(r),
    index: 0
  });
}, function () {
  var t = cI(this),
    e = t.string,
    n = t.index,
    o;
  return n >= e.length ? Mf(void 0, !0) : (o = iI(e, n), t.index += o.length, Mf(o, !1));
});
var uI = z,
  et = uI,
  fI = et;
fI.Map;
var dI = Rp,
  hI = _p;
dI("Set", function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, hI);
var qa = k,
  Bo = Set.prototype,
  ft = {
    Set: Set,
    add: qa(Bo.add),
    has: qa(Bo.has),
    remove: qa(Bo["delete"]),
    proto: Bo
  },
  vI = ft.has,
  sr = function sr(r) {
    return vI(r), r;
  },
  gI = K,
  lr = function lr(r, t, e) {
    for (var n = e ? r : r.iterator, o = r.next, i, a; !(i = gI(o, n)).done;) if (a = t(i.value), a !== void 0) return a;
  },
  Bp = k,
  pI = lr,
  kp = ft,
  mI = kp.Set,
  Lp = kp.proto,
  yI = Bp(Lp.forEach),
  Mp = Bp(Lp.keys),
  xI = Mp(new mI()).next,
  Qn = function Qn(r, t, e) {
    return e ? pI({
      iterator: Mp(r),
      next: xI
    }, t) : yI(r, t);
  },
  Dp = ft,
  $I = Qn,
  bI = Dp.Set,
  SI = Dp.add,
  Oc = function Oc(r) {
    var t = new bI();
    return $I(r, function (e) {
      SI(t, e);
    }), t;
  },
  wI = dp,
  TI = ft,
  qn = wI(TI.proto, "size", "get") || function (r) {
    return r.size;
  },
  AI = function AI(r) {
    return {
      iterator: r,
      next: r.next,
      done: !1
    };
  },
  Df = de,
  jp = ge,
  jf = K,
  II = Ie,
  CI = AI,
  zf = "Invalid size",
  EI = RangeError,
  RI = TypeError,
  OI = Math.max,
  zp = function zp(r, t) {
    this.set = r, this.size = OI(t, 0), this.has = Df(r.has), this.keys = Df(r.keys);
  };
zp.prototype = {
  getIterator: function getIterator() {
    return CI(jp(jf(this.keys, this.set)));
  },
  includes: function includes(r) {
    return jf(this.has, this.set, r);
  }
};
var cr = function cr(r) {
    jp(r);
    var t = +r.size;
    if (t !== t) throw new RI(zf);
    var e = II(t);
    if (e < 0) throw new EI(zf);
    return new zp(r, e);
  },
  _I = sr,
  Up = ft,
  PI = Oc,
  NI = qn,
  FI = cr,
  BI = Qn,
  kI = lr,
  LI = Up.has,
  Uf = Up.remove,
  MI = function MI(t) {
    var e = _I(this),
      n = FI(t),
      o = PI(e);
    return NI(e) <= n.size ? BI(e, function (i) {
      n.includes(i) && Uf(o, i);
    }) : kI(n.getIterator(), function (i) {
      LI(e, i) && Uf(o, i);
    }), o;
  },
  DI = Oe,
  Wf = function Wf(r) {
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
  ur = function ur(r) {
    var t = DI("Set");
    try {
      new t()[r](Wf(0));
      try {
        return new t()[r](Wf(-1)), !1;
      } catch (_unused18) {
        return !0;
      }
    } catch (_unused19) {
      return !1;
    }
  },
  jI = T,
  zI = MI,
  UI = ur;
jI({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !UI("difference")
}, {
  difference: zI
});
var WI = sr,
  _c = ft,
  HI = qn,
  YI = cr,
  KI = Qn,
  GI = lr,
  VI = _c.Set,
  Hf = _c.add,
  XI = _c.has,
  QI = function QI(t) {
    var e = WI(this),
      n = YI(t),
      o = new VI();
    return HI(e) > n.size ? GI(n.getIterator(), function (i) {
      XI(e, i) && Hf(o, i);
    }) : KI(e, function (i) {
      n.includes(i) && Hf(o, i);
    }), o;
  },
  qI = T,
  JI = F,
  ZI = QI,
  eC = ur,
  tC = !eC("intersection") || JI(function () {
    return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
  });
qI({
  target: "Set",
  proto: !0,
  real: !0,
  forced: tC
}, {
  intersection: ZI
});
var rC = sr,
  nC = ft.has,
  oC = qn,
  iC = cr,
  aC = Qn,
  sC = lr,
  lC = qi,
  cC = function cC(t) {
    var e = rC(this),
      n = iC(t);
    if (oC(e) <= n.size) return aC(e, function (i) {
      if (n.includes(i)) return !1;
    }, !0) !== !1;
    var o = n.getIterator();
    return sC(o, function (i) {
      if (nC(e, i)) return lC(o, "normal", !1);
    }) !== !1;
  },
  uC = T,
  fC = cC,
  dC = ur;
uC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !dC("isDisjointFrom")
}, {
  isDisjointFrom: fC
});
var hC = sr,
  vC = qn,
  gC = Qn,
  pC = cr,
  mC = function mC(t) {
    var e = hC(this),
      n = pC(t);
    return vC(e) > n.size ? !1 : gC(e, function (o) {
      if (!n.includes(o)) return !1;
    }, !0) !== !1;
  },
  yC = T,
  xC = mC,
  $C = ur;
yC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !$C("isSubsetOf")
}, {
  isSubsetOf: xC
});
var bC = sr,
  SC = ft.has,
  wC = qn,
  TC = cr,
  AC = lr,
  IC = qi,
  CC = function CC(t) {
    var e = bC(this),
      n = TC(t);
    if (wC(e) < n.size) return !1;
    var o = n.getIterator();
    return AC(o, function (i) {
      if (!SC(e, i)) return IC(o, "normal", !1);
    }) !== !1;
  },
  EC = T,
  RC = CC,
  OC = ur;
EC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !OC("isSupersetOf")
}, {
  isSupersetOf: RC
});
var _C = sr,
  Pc = ft,
  PC = Oc,
  NC = cr,
  FC = lr,
  BC = Pc.add,
  kC = Pc.has,
  LC = Pc.remove,
  MC = function MC(t) {
    var e = _C(this),
      n = NC(t).getIterator(),
      o = PC(e);
    return FC(n, function (i) {
      kC(e, i) ? LC(o, i) : BC(o, i);
    }), o;
  },
  DC = T,
  jC = MC,
  zC = ur;
DC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !zC("symmetricDifference")
}, {
  symmetricDifference: jC
});
var UC = sr,
  WC = ft.add,
  HC = Oc,
  YC = cr,
  KC = lr,
  GC = function GC(t) {
    var e = UC(this),
      n = YC(t).getIterator(),
      o = HC(e);
    return KC(n, function (i) {
      WC(o, i);
    }), o;
  },
  VC = T,
  XC = GC,
  QC = ur;
VC({
  target: "Set",
  proto: !0,
  real: !0,
  forced: !QC("union")
}, {
  union: XC
});
var qC = et;
qC.Set;
var JC = J,
  ZC = ir,
  eE = function eE(r, t) {
    JC(t) && "cause" in t && ZC(r, "cause", t.cause);
  },
  tE = k,
  Wp = Error,
  rE = tE("".replace),
  nE = function (r) {
    return String(new Wp(r).stack);
  }("zxcasd"),
  Hp = /\n\s*at [^:]*:[^\n]*/,
  oE = Hp.test(nE),
  iE = function iE(r, t) {
    if (oE && typeof r == "string" && !Wp.prepareStackTrace) for (; t--;) r = rE(r, Hp, "");
    return r;
  },
  aE = F,
  sE = or,
  lE = !aE(function () {
    var r = new Error("a");
    return "stack" in r ? (Object.defineProperty(r, "stack", sE(1, 7)), r.stack !== 7) : !0;
  }),
  cE = ir,
  uE = iE,
  fE = lE,
  Yf = Error.captureStackTrace,
  dE = function dE(r, t, e, n) {
    fE && (Yf ? Yf(r, t) : cE(r, "stack", uE(e, n)));
  },
  hE = Q,
  vE = function vE(r, t) {
    return r === void 0 ? arguments.length < 2 ? "" : t : hE(r);
  },
  gE = T,
  pE = bt,
  mE = ar,
  Si = Gn,
  yE = pc,
  Yp = nr,
  Ja = ir,
  Za = or,
  xE = eE,
  $E = dE,
  bE = ut,
  SE = vE,
  wE = q,
  TE = wE("toStringTag"),
  wi = Error,
  AE = [].push,
  _Lr = function Lr(t, e) {
    var n = pE(es, this),
      o;
    Si ? o = Si(new wi(), n ? mE(this) : es) : (o = n ? this : Yp(es), Ja(o, TE, "Error")), e !== void 0 && Ja(o, "message", SE(e)), $E(o, _Lr, o.stack, 1), arguments.length > 2 && xE(o, arguments[2]);
    var i = [];
    return bE(t, AE, {
      that: i
    }), Ja(o, "errors", i), o;
  };
Si ? Si(_Lr, wi) : yE(_Lr, wi, {
  name: !0
});
var es = _Lr.prototype = Yp(wi.prototype, {
  constructor: Za(1, _Lr),
  message: Za(1, ""),
  name: Za(1, "AggregateError")
});
gE({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: _Lr
});
var gn = z,
  IE = $t,
  CE = je,
  ko = function ko(r) {
    return IE.slice(0, r.length) === r;
  },
  Kp = function () {
    return ko("Bun/") ? "BUN" : ko("Cloudflare-Workers") ? "CLOUDFLARE" : ko("Deno/") ? "DENO" : ko("Node.js/") ? "NODE" : gn.Bun && typeof Bun.version == "string" ? "BUN" : gn.Deno && _typeof(Deno.version) == "object" ? "DENO" : CE(gn.process) === "process" ? "NODE" : gn.window && gn.document ? "BROWSER" : "REST";
  }(),
  EE = Kp,
  Jn = EE === "NODE",
  RE = k,
  OE = F,
  Gp = X,
  _E = Qi,
  PE = Oe,
  NE = hc,
  Vp = function Vp() {},
  Xp = PE("Reflect", "construct"),
  Nc = /^\s*(?:class|function)\b/,
  FE = RE(Nc.exec),
  BE = !Nc.test(Vp),
  pn = function pn(t) {
    if (!Gp(t)) return !1;
    try {
      return Xp(Vp, [], t), !0;
    } catch (_unused20) {
      return !1;
    }
  },
  Qp = function Qp(t) {
    if (!Gp(t)) return !1;
    switch (_E(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return BE || !!FE(Nc, NE(t));
    } catch (_unused21) {
      return !0;
    }
  };
Qp.sham = !0;
var Zn = !Xp || OE(function () {
    var r;
    return pn(pn.call) || !pn(Object) || !pn(function () {
      r = !0;
    }) || r;
  }) ? Qp : pn,
  kE = Zn,
  LE = Xr,
  ME = TypeError,
  DE = function DE(r) {
    if (kE(r)) return r;
    throw new ME(LE(r) + " is not a constructor");
  },
  Kf = ge,
  jE = DE,
  zE = Xe,
  UE = q,
  WE = UE("species"),
  Zi = function Zi(r, t) {
    var e = Kf(r).constructor,
      n;
    return e === void 0 || zE(n = Kf(e)[WE]) ? t : jE(n);
  },
  HE = Dn,
  qp = Function.prototype,
  Gf = qp.apply,
  Vf = qp.call,
  ea = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (HE ? Vf.bind(Gf) : function () {
    return Vf.apply(Gf, arguments);
  }),
  YE = TypeError,
  KE = function KE(r, t) {
    if (r < t) throw new YE("Not enough arguments");
    return r;
  },
  GE = $t,
  Jp = /(?:ipad|iphone|ipod).*applewebkit/i.test(GE),
  Me = z,
  VE = ea,
  XE = Mt,
  Xf = X,
  QE = fe,
  Zp = F,
  Qf = Jg,
  qE = Jr,
  qf = cc,
  JE = KE,
  ZE = Jp,
  eR = Jn,
  fl = Me.setImmediate,
  dl = Me.clearImmediate,
  tR = Me.process,
  ts = Me.Dispatch,
  rR = Me.Function,
  Jf = Me.MessageChannel,
  nR = Me.String,
  rs = 0,
  Cn = {},
  Zf = "onreadystatechange",
  Bn,
  Ut,
  ns,
  os;
Zp(function () {
  Bn = Me.location;
});
var Fc = function Fc(r) {
    if (QE(Cn, r)) {
      var t = Cn[r];
      delete Cn[r], t();
    }
  },
  is = function is(r) {
    return function () {
      Fc(r);
    };
  },
  ed = function ed(r) {
    Fc(r.data);
  },
  td = function td(r) {
    Me.postMessage(nR(r), Bn.protocol + "//" + Bn.host);
  };
(!fl || !dl) && (fl = function fl(t) {
  JE(arguments.length, 1);
  var e = Xf(t) ? t : rR(t),
    n = qE(arguments, 1);
  return Cn[++rs] = function () {
    VE(e, void 0, n);
  }, Ut(rs), rs;
}, dl = function dl(t) {
  delete Cn[t];
}, eR ? Ut = function Ut(r) {
  tR.nextTick(is(r));
} : ts && ts.now ? Ut = function Ut(r) {
  ts.now(is(r));
} : Jf && !ZE ? (ns = new Jf(), os = ns.port2, ns.port1.onmessage = ed, Ut = XE(os.postMessage, os)) : Me.addEventListener && Xf(Me.postMessage) && !Me.importScripts && Bn && Bn.protocol !== "file:" && !Zp(td) ? (Ut = td, Me.addEventListener("message", ed, !1)) : Zf in qf("script") ? Ut = function Ut(r) {
  Qf.appendChild(qf("script"))[Zf] = function () {
    Qf.removeChild(this), Fc(r);
  };
} : Ut = function Ut(r) {
  setTimeout(is(r), 0);
});
var em = {
    set: fl,
    clear: dl
  },
  rd = z,
  oR = Y,
  iR = Object.getOwnPropertyDescriptor,
  aR = function aR(r) {
    if (!oR) return rd[r];
    var t = iR(rd, r);
    return t && t.value;
  },
  tm = function tm() {
    this.head = null, this.tail = null;
  };
tm.prototype = {
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
var rm = tm,
  sR = $t,
  lR = /ipad|iphone|ipod/i.test(sR) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u",
  cR = $t,
  uR = /web0s(?!.*chrome)/i.test(cR),
  Mr = z,
  fR = aR,
  nd = Mt,
  as = em.set,
  dR = rm,
  hR = Jp,
  vR = lR,
  gR = uR,
  ss = Jn,
  od = Mr.MutationObserver || Mr.WebKitMutationObserver,
  id = Mr.document,
  ad = Mr.process,
  Lo = Mr.Promise,
  hl = fR("queueMicrotask"),
  hr,
  ls,
  cs,
  Mo,
  sd;
if (!hl) {
  var Do = new dR(),
    jo = function jo() {
      var r, t;
      for (ss && (r = ad.domain) && r.exit(); t = Do.get();) try {
        t();
      } catch (e) {
        throw Do.head && hr(), e;
      }
      r && r.enter();
    };
  !hR && !ss && !gR && od && id ? (ls = !0, cs = id.createTextNode(""), new od(jo).observe(cs, {
    characterData: !0
  }), hr = function hr() {
    cs.data = ls = !ls;
  }) : !vR && Lo && Lo.resolve ? (Mo = Lo.resolve(void 0), Mo.constructor = Lo, sd = nd(Mo.then, Mo), hr = function hr() {
    sd(jo);
  }) : ss ? hr = function hr() {
    ad.nextTick(jo);
  } : (as = nd(as, Mr), hr = function hr() {
    as(jo);
  }), hl = function hl(r) {
    Do.head || hr(), Do.add(r);
  };
}
var pR = hl,
  mR = function mR(r, t) {
    try {
      arguments.length === 1 ? console.error(r) : console.error(r, t);
    } catch (_unused22) {}
  },
  eo = function eo(r) {
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
  yR = z,
  to = yR.Promise,
  xR = z,
  En = to,
  $R = X,
  bR = Ki,
  SR = hc,
  wR = q,
  ld = Kp,
  us = tr;
En && En.prototype;
var TR = wR("species"),
  vl = !1,
  nm = $R(xR.PromiseRejectionEvent),
  AR = bR("Promise", function () {
    var r = SR(En),
      t = r !== String(En);
    if (!t && us === 66) return !0;
    if (!us || us < 51 || !/native code/.test(r)) {
      var e = new En(function (i) {
          i(1);
        }),
        n = function n(i) {
          i(function () {}, function () {});
        },
        o = e.constructor = {};
      if (o[TR] = n, vl = e.then(function () {}) instanceof n, !vl) return !0;
    }
    return !t && (ld === "BROWSER" || ld === "DENO") && !nm;
  }),
  ro = {
    CONSTRUCTOR: AR,
    REJECTION_EVENT: nm,
    SUBCLASSING: vl
  },
  Tt = {},
  cd = de,
  IR = TypeError,
  CR = function CR(r) {
    var t, e;
    this.promise = new r(function (n, o) {
      if (t !== void 0 || e !== void 0) throw new IR("Bad Promise constructor");
      t = n, e = o;
    }), this.resolve = cd(t), this.reject = cd(e);
  };
Tt.f = function (r) {
  return new CR(r);
};
var ER = T,
  Ti = Jn,
  Bt = z,
  Dr = K,
  ud = ze,
  fd = Gn,
  RR = wt,
  OR = Cc,
  _R = de,
  li = X,
  PR = J,
  NR = Ac,
  FR = Zi,
  om = em.set,
  Bc = pR,
  BR = mR,
  kR = eo,
  LR = rm,
  im = Lt,
  Ai = to,
  kc = ro,
  am = Tt,
  ta = "Promise",
  sm = kc.CONSTRUCTOR,
  MR = kc.REJECTION_EVENT,
  DR = kc.SUBCLASSING,
  fs = im.getterFor(ta),
  jR = im.set,
  Cr = Ai && Ai.prototype,
  Yt = Ai,
  zo = Cr,
  lm = Bt.TypeError,
  gl = Bt.document,
  Lc = Bt.process,
  pl = am.f,
  zR = pl,
  UR = !!(gl && gl.createEvent && Bt.dispatchEvent),
  cm = "unhandledrejection",
  WR = "rejectionhandled",
  dd = 0,
  um = 1,
  HR = 2,
  Mc = 1,
  fm = 2,
  Uo,
  hd,
  YR,
  vd,
  dm = function dm(r) {
    var t;
    return PR(r) && li(t = r.then) ? t : !1;
  },
  hm = function hm(r, t) {
    var e = t.value,
      n = t.state === um,
      o = n ? r.ok : r.fail,
      i = r.resolve,
      a = r.reject,
      s = r.domain,
      l,
      c,
      u;
    try {
      o ? (n || (t.rejection === fm && GR(t), t.rejection = Mc), o === !0 ? l = e : (s && s.enter(), l = o(e), s && (s.exit(), u = !0)), l === r.promise ? a(new lm("Promise-chain cycle")) : (c = dm(l)) ? Dr(c, l, i, a) : i(l)) : a(e);
    } catch (f) {
      s && !u && s.exit(), a(f);
    }
  },
  vm = function vm(r, t) {
    r.notified || (r.notified = !0, Bc(function () {
      for (var e = r.reactions, n; n = e.get();) hm(n, r);
      r.notified = !1, t && !r.rejection && KR(r);
    }));
  },
  gm = function gm(r, t, e) {
    var n, o;
    UR ? (n = gl.createEvent("Event"), n.promise = t, n.reason = e, n.initEvent(r, !1, !0), Bt.dispatchEvent(n)) : n = {
      promise: t,
      reason: e
    }, !MR && (o = Bt["on" + r]) ? o(n) : r === cm && BR("Unhandled promise rejection", e);
  },
  KR = function KR(r) {
    Dr(om, Bt, function () {
      var t = r.facade,
        e = r.value,
        n = gd(r),
        o;
      if (n && (o = kR(function () {
        Ti ? Lc.emit("unhandledRejection", e, t) : gm(cm, t, e);
      }), r.rejection = Ti || gd(r) ? fm : Mc, o.error)) throw o.value;
    });
  },
  gd = function gd(r) {
    return r.rejection !== Mc && !r.parent;
  },
  GR = function GR(r) {
    Dr(om, Bt, function () {
      var t = r.facade;
      Ti ? Lc.emit("rejectionHandled", t) : gm(WR, t, r.value);
    });
  },
  _r = function _r(r, t, e) {
    return function (n) {
      r(t, n, e);
    };
  },
  Fr = function Fr(r, t, e) {
    r.done || (r.done = !0, e && (r = e), r.value = t, r.state = HR, vm(r, !0));
  },
  _ml = function ml(r, t, e) {
    if (!r.done) {
      r.done = !0, e && (r = e);
      try {
        if (r.facade === t) throw new lm("Promise can't be resolved itself");
        var n = dm(t);
        n ? Bc(function () {
          var o = {
            done: !1
          };
          try {
            Dr(n, t, _r(_ml, o, r), _r(Fr, o, r));
          } catch (i) {
            Fr(o, i, r);
          }
        }) : (r.value = t, r.state = um, vm(r, !1));
      } catch (o) {
        Fr({
          done: !1
        }, o, r);
      }
    }
  };
if (sm && (Yt = function Yt(t) {
  NR(this, zo), _R(t), Dr(Uo, this);
  var e = fs(this);
  try {
    t(_r(_ml, e), _r(Fr, e));
  } catch (n) {
    Fr(e, n);
  }
}, zo = Yt.prototype, Uo = function Uo(t) {
  jR(this, {
    type: ta,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new LR(),
    rejection: !1,
    state: dd,
    value: null
  });
}, Uo.prototype = ud(zo, "then", function (t, e) {
  var n = fs(this),
    o = pl(FR(this, Yt));
  return n.parent = !0, o.ok = li(t) ? t : !0, o.fail = li(e) && e, o.domain = Ti ? Lc.domain : void 0, n.state === dd ? n.reactions.add(o) : Bc(function () {
    hm(o, n);
  }), o.promise;
}), hd = function hd() {
  var r = new Uo(),
    t = fs(r);
  this.promise = r, this.resolve = _r(_ml, t), this.reject = _r(Fr, t);
}, am.f = pl = function pl(r) {
  return r === Yt || r === YR ? new hd(r) : zR(r);
}, li(Ai) && Cr !== Object.prototype)) {
  vd = Cr.then, DR || ud(Cr, "then", function (t, e) {
    var n = this;
    return new Yt(function (o, i) {
      Dr(vd, n, o, i);
    }).then(t, e);
  }, {
    unsafe: !0
  });
  try {
    delete Cr.constructor;
  } catch (_unused23) {}
  fd && fd(Cr, zo);
}
ER({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: sm
}, {
  Promise: Yt
});
RR(Yt, ta, !1);
OR(ta);
var VR = to,
  XR = Ic,
  QR = ro.CONSTRUCTOR,
  ra = QR || !XR(function (r) {
    VR.all(r).then(void 0, function () {});
  }),
  qR = T,
  JR = K,
  ZR = de,
  eO = Tt,
  tO = eo,
  rO = ut,
  nO = ra;
qR({
  target: "Promise",
  stat: !0,
  forced: nO
}, {
  all: function all(t) {
    var e = this,
      n = eO.f(e),
      o = n.resolve,
      i = n.reject,
      a = tO(function () {
        var s = ZR(e.resolve),
          l = [],
          c = 0,
          u = 1;
        rO(t, function (f) {
          var d = c++,
            g = !1;
          u++, JR(s, e, f).then(function (p) {
            g || (g = !0, l[d] = p, --u || o(l));
          }, i);
        }), --u || o(l);
      });
    return a.error && i(a.value), n.promise;
  }
});
var oO = T,
  iO = ro.CONSTRUCTOR,
  yl = to,
  aO = Oe,
  sO = X,
  lO = ze,
  pd = yl && yl.prototype;
oO({
  target: "Promise",
  proto: !0,
  forced: iO,
  real: !0
}, {
  "catch": function _catch(r) {
    return this.then(void 0, r);
  }
});
if (sO(yl)) {
  var md = aO("Promise").prototype["catch"];
  pd["catch"] !== md && lO(pd, "catch", md, {
    unsafe: !0
  });
}
var cO = T,
  uO = K,
  fO = de,
  dO = Tt,
  hO = eo,
  vO = ut,
  gO = ra;
cO({
  target: "Promise",
  stat: !0,
  forced: gO
}, {
  race: function race(t) {
    var e = this,
      n = dO.f(e),
      o = n.reject,
      i = hO(function () {
        var a = fO(e.resolve);
        vO(t, function (s) {
          uO(a, e, s).then(n.resolve, o);
        });
      });
    return i.error && o(i.value), n.promise;
  }
});
var pO = T,
  mO = Tt,
  yO = ro.CONSTRUCTOR;
pO({
  target: "Promise",
  stat: !0,
  forced: yO
}, {
  reject: function reject(t) {
    var e = mO.f(this),
      n = e.reject;
    return n(t), e.promise;
  }
});
var xO = ge,
  $O = J,
  bO = Tt,
  pm = function pm(r, t) {
    if (xO(r), $O(t) && t.constructor === r) return t;
    var e = bO.f(r),
      n = e.resolve;
    return n(t), e.promise;
  },
  SO = T,
  wO = Oe,
  TO = ro.CONSTRUCTOR,
  AO = pm;
wO("Promise");
SO({
  target: "Promise",
  stat: !0,
  forced: TO
}, {
  resolve: function resolve(t) {
    return AO(this, t);
  }
});
var IO = T,
  CO = K,
  EO = de,
  RO = Tt,
  OO = eo,
  _O = ut,
  PO = ra;
IO({
  target: "Promise",
  stat: !0,
  forced: PO
}, {
  allSettled: function allSettled(t) {
    var e = this,
      n = RO.f(e),
      o = n.resolve,
      i = n.reject,
      a = OO(function () {
        var s = EO(e.resolve),
          l = [],
          c = 0,
          u = 1;
        _O(t, function (f) {
          var d = c++,
            g = !1;
          u++, CO(s, e, f).then(function (p) {
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
var NO = T,
  FO = K,
  BO = de,
  kO = Oe,
  LO = Tt,
  MO = eo,
  DO = ut,
  jO = ra,
  yd = "No one promise resolved";
NO({
  target: "Promise",
  stat: !0,
  forced: jO
}, {
  any: function any(t) {
    var e = this,
      n = kO("AggregateError"),
      o = LO.f(e),
      i = o.resolve,
      a = o.reject,
      s = MO(function () {
        var l = BO(e.resolve),
          c = [],
          u = 0,
          f = 1,
          d = !1;
        DO(t, function (g) {
          var p = u++,
            x = !1;
          f++, FO(l, e, g).then(function (b) {
            x || d || (d = !0, i(b));
          }, function (b) {
            x || d || (x = !0, c[p] = b, --f || a(new n(c, yd)));
          });
        }), --f || a(new n(c, yd));
      });
    return s.error && a(s.value), o.promise;
  }
});
var zO = T,
  UO = Tt;
zO({
  target: "Promise",
  stat: !0
}, {
  withResolvers: function withResolvers() {
    var t = UO.f(this);
    return {
      promise: t.promise,
      resolve: t.resolve,
      reject: t.reject
    };
  }
});
var WO = T,
  Ii = to,
  HO = F,
  mm = Oe,
  ym = X,
  YO = Zi,
  xd = pm,
  KO = ze,
  xl = Ii && Ii.prototype,
  GO = !!Ii && HO(function () {
    xl["finally"].call({
      then: function then() {}
    }, function () {});
  });
WO({
  target: "Promise",
  proto: !0,
  real: !0,
  forced: GO
}, {
  "finally": function _finally(r) {
    var t = YO(this, mm("Promise")),
      e = ym(r);
    return this.then(e ? function (n) {
      return xd(t, r()).then(function () {
        return n;
      });
    } : r, e ? function (n) {
      return xd(t, r()).then(function () {
        throw n;
      });
    } : r);
  }
});
if (ym(Ii)) {
  var $d = mm("Promise").prototype["finally"];
  xl["finally"] !== $d && KO(xl, "finally", $d, {
    unsafe: !0
  });
}
var VO = et;
VO.Promise;
var XO = ge,
  QO = qi,
  qO = function qO(r, t, e, n) {
    try {
      return n ? t(XO(e)[0], e[1]) : t(e);
    } catch (o) {
      QO(r, "throw", o);
    }
  },
  JO = Y,
  ZO = be,
  e_ = or,
  fr = function fr(r, t, e) {
    JO ? ZO.f(r, t, e_(0, e)) : r[t] = e;
  },
  t_ = Mt,
  r_ = K,
  n_ = Z,
  o_ = qO,
  i_ = wp,
  a_ = Zn,
  s_ = ne,
  bd = fr,
  l_ = Ap,
  c_ = Tc,
  Sd = Array,
  u_ = function u_(t) {
    var e = n_(t),
      n = a_(this),
      o = arguments.length,
      i = o > 1 ? arguments[1] : void 0,
      a = i !== void 0;
    a && (i = t_(i, o > 2 ? arguments[2] : void 0));
    var s = c_(e),
      l = 0,
      c,
      u,
      f,
      d,
      g,
      p;
    if (s && !(this === Sd && i_(s))) for (u = n ? new this() : [], d = l_(e, s), g = d.next; !(f = r_(g, d)).done; l++) p = a ? o_(d, i, [f.value, l], !0) : f.value, bd(u, l, p);else for (c = s_(e), u = n ? new this(c) : Sd(c); c > l; l++) p = a ? i(e[l], l) : e[l], bd(u, l, p);
    return u.length = l, u;
  },
  f_ = T,
  d_ = u_,
  h_ = Ic,
  v_ = !h_(function (r) {
    Array.from(r);
  });
f_({
  target: "Array",
  stat: !0,
  forced: v_
}, {
  from: d_
});
var g_ = je,
  Dt = Array.isArray || function (t) {
    return g_(t) === "Array";
  },
  p_ = T,
  m_ = Dt;
p_({
  target: "Array",
  stat: !0
}, {
  isArray: m_
});
var y_ = T,
  x_ = F,
  $_ = Zn,
  b_ = fr,
  xm = Array,
  S_ = x_(function () {
    function r() {}
    return !(xm.of.call(r) instanceof r);
  });
y_({
  target: "Array",
  stat: !0,
  forced: S_
}, {
  of: function of() {
    for (var t = 0, e = arguments.length, n = new ($_(this) ? this : xm)(e); e > t;) b_(n, t, arguments[t++]);
    return n.length = e, n;
  }
});
var w_ = T,
  T_ = Z,
  A_ = ne,
  I_ = Ie,
  C_ = Be;
w_({
  target: "Array",
  proto: !0
}, {
  at: function at(t) {
    var e = T_(this),
      n = A_(e),
      o = I_(t),
      i = o >= 0 ? o : n + o;
    return i < 0 || i >= n ? void 0 : e[i];
  }
});
C_("at");
var E_ = TypeError,
  R_ = 9007199254740991,
  en = function en(r) {
    if (r > R_) throw E_("Maximum allowed index exceeded");
    return r;
  },
  wd = Dt,
  O_ = Zn,
  __ = J,
  P_ = q,
  N_ = P_("species"),
  Td = Array,
  F_ = function F_(r) {
    var t;
    return wd(r) && (t = r.constructor, O_(t) && (t === Td || wd(t.prototype)) ? t = void 0 : __(t) && (t = t[N_], t === null && (t = void 0))), t === void 0 ? Td : t;
  },
  B_ = F_,
  no = function no(r, t) {
    return new (B_(r))(t === 0 ? 0 : t);
  },
  k_ = F,
  L_ = q,
  M_ = tr,
  D_ = L_("species"),
  oo = function oo(r) {
    return M_ >= 51 || !k_(function () {
      var t = [],
        e = t.constructor = {};
      return e[D_] = function () {
        return {
          foo: 1
        };
      }, t[r](Boolean).foo !== 1;
    });
  },
  j_ = T,
  z_ = F,
  U_ = Dt,
  W_ = J,
  H_ = Z,
  Y_ = ne,
  Ad = en,
  Id = fr,
  K_ = no,
  G_ = oo,
  V_ = q,
  X_ = tr,
  $m = V_("isConcatSpreadable"),
  Q_ = X_ >= 51 || !z_(function () {
    var r = [];
    return r[$m] = !1, r.concat()[0] !== r;
  }),
  q_ = function q_(r) {
    if (!W_(r)) return !1;
    var t = r[$m];
    return t !== void 0 ? !!t : U_(r);
  },
  J_ = !Q_ || !G_("concat");
j_({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: J_
}, {
  concat: function concat(t) {
    var e = H_(this),
      n = K_(e, 0),
      o = 0,
      i,
      a,
      s,
      l,
      c;
    for (i = -1, s = arguments.length; i < s; i++) if (c = i === -1 ? e : arguments[i], q_(c)) for (l = Y_(c), Ad(o + l), a = 0; a < l; a++, o++) a in c && Id(n, o, c[a]);else Ad(o + 1), Id(n, o++, c);
    return n.length = o, n;
  }
});
var Cd = Xr,
  Z_ = TypeError,
  na = function na(r, t) {
    if (!delete r[t]) throw new Z_("Cannot delete property " + Cd(t) + " of " + Cd(r));
  },
  e2 = Z,
  ds = rr,
  t2 = ne,
  r2 = na,
  n2 = Math.min,
  o2 = [].copyWithin || function (t, e) {
    var n = e2(this),
      o = t2(n),
      i = ds(t, o),
      a = ds(e, o),
      s = arguments.length > 2 ? arguments[2] : void 0,
      l = n2((s === void 0 ? o : ds(s, o)) - a, o - i),
      c = 1;
    for (a < i && i < a + l && (c = -1, a += l - 1, i += l - 1); l-- > 0;) a in n ? n[i] = n[a] : r2(n, i), i += c, a += c;
    return n;
  },
  i2 = T,
  a2 = o2,
  s2 = Be;
i2({
  target: "Array",
  proto: !0
}, {
  copyWithin: a2
});
s2("copyWithin");
var l2 = Mt,
  c2 = k,
  u2 = Kr,
  f2 = Z,
  d2 = ne,
  h2 = no,
  Ed = c2([].push),
  Ct = function Ct(r) {
    var t = r === 1,
      e = r === 2,
      n = r === 3,
      o = r === 4,
      i = r === 6,
      a = r === 7,
      s = r === 5 || i;
    return function (l, c, u, f) {
      for (var d = f2(l), g = u2(d), p = d2(g), x = l2(c, u), b = 0, S = f || h2, $ = t ? S(l, p) : e || a ? S(l, 0) : void 0, y, m; p > b; b++) if ((s || b in g) && (y = g[b], m = x(y, b, d), r)) if (t) $[b] = m;else if (m) switch (r) {
        case 3:
          return !0;
        case 5:
          return y;
        case 6:
          return b;
        case 2:
          Ed($, y);
      } else switch (r) {
        case 4:
          return !1;
        case 7:
          Ed($, y);
      }
      return i ? -1 : n || o ? o : $;
    };
  },
  jt = {
    forEach: Ct(0),
    map: Ct(1),
    filter: Ct(2),
    some: Ct(3),
    every: Ct(4),
    find: Ct(5),
    findIndex: Ct(6),
    filterReject: Ct(7)
  },
  v2 = F,
  At = function At(r, t) {
    var e = [][r];
    return !!e && v2(function () {
      e.call(null, t || function () {
        return 1;
      }, 1);
    });
  },
  g2 = T,
  p2 = jt.every,
  m2 = At,
  y2 = m2("every");
g2({
  target: "Array",
  proto: !0,
  forced: !y2
}, {
  every: function every(t) {
    return p2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var x2 = Z,
  Rd = rr,
  $2 = ne,
  b2 = function b2(t) {
    for (var e = x2(this), n = $2(e), o = arguments.length, i = Rd(o > 1 ? arguments[1] : void 0, n), a = o > 2 ? arguments[2] : void 0, s = a === void 0 ? n : Rd(a, n); s > i;) e[i++] = t;
    return e;
  },
  S2 = T,
  w2 = b2,
  T2 = Be;
S2({
  target: "Array",
  proto: !0
}, {
  fill: w2
});
T2("fill");
var A2 = T,
  I2 = jt.filter,
  C2 = oo,
  E2 = C2("filter");
A2({
  target: "Array",
  proto: !0,
  forced: !E2
}, {
  filter: function filter(t) {
    return I2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var R2 = T,
  O2 = jt.find,
  _2 = Be,
  $l = "find",
  bm = !0;
$l in [] && Array(1)[$l](function () {
  bm = !1;
});
R2({
  target: "Array",
  proto: !0,
  forced: bm
}, {
  find: function find(t) {
    return O2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
_2($l);
var P2 = T,
  N2 = jt.findIndex,
  F2 = Be,
  bl = "findIndex",
  Sm = !0;
bl in [] && Array(1)[bl](function () {
  Sm = !1;
});
P2({
  target: "Array",
  proto: !0,
  forced: Sm
}, {
  findIndex: function findIndex(t) {
    return N2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
F2(bl);
var B2 = Mt,
  k2 = Kr,
  L2 = Z,
  M2 = ne,
  Od = function Od(r) {
    var t = r === 1;
    return function (e, n, o) {
      for (var i = L2(e), a = k2(i), s = M2(a), l = B2(n, o), c, u; s-- > 0;) if (c = a[s], u = l(c, s, i), u) switch (r) {
        case 0:
          return c;
        case 1:
          return s;
      }
      return t ? -1 : void 0;
    };
  },
  wm = {
    findLast: Od(0),
    findLastIndex: Od(1)
  },
  D2 = T,
  j2 = wm.findLast,
  z2 = Be;
D2({
  target: "Array",
  proto: !0
}, {
  findLast: function findLast(t) {
    return j2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
z2("findLast");
var U2 = T,
  W2 = wm.findLastIndex,
  H2 = Be;
U2({
  target: "Array",
  proto: !0
}, {
  findLastIndex: function findLastIndex(t) {
    return W2(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
H2("findLastIndex");
var Y2 = Dt,
  K2 = ne,
  G2 = en,
  V2 = Mt,
  _Tm = function Tm(r, t, e, n, o, i, a, s) {
    for (var l = o, c = 0, u = a ? V2(a, s) : !1, f, d; c < n;) c in e && (f = u ? u(e[c], c, t) : e[c], i > 0 && Y2(f) ? (d = K2(f), l = _Tm(r, t, f, d, l, i - 1) - 1) : (G2(l + 1), r[l] = f), l++), c++;
    return l;
  },
  Am = _Tm,
  X2 = T,
  Q2 = Am,
  q2 = Z,
  J2 = ne,
  Z2 = Ie,
  eP = no;
X2({
  target: "Array",
  proto: !0
}, {
  flat: function flat() {
    var t = arguments.length ? arguments[0] : void 0,
      e = q2(this),
      n = J2(e),
      o = eP(e, 0);
    return o.length = Q2(o, e, e, n, 0, t === void 0 ? 1 : Z2(t)), o;
  }
});
var tP = T,
  rP = Am,
  nP = de,
  oP = Z,
  iP = ne,
  aP = no;
tP({
  target: "Array",
  proto: !0
}, {
  flatMap: function flatMap(t) {
    var e = oP(this),
      n = iP(e),
      o;
    return nP(t), o = aP(e, 0), o.length = rP(o, e, e, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), o;
  }
});
var sP = jt.forEach,
  lP = At,
  cP = lP("forEach"),
  uP = cP ? [].forEach : function (t) {
    return sP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  },
  fP = T,
  _d = uP;
fP({
  target: "Array",
  proto: !0,
  forced: [].forEach !== _d
}, {
  forEach: _d
});
var dP = T,
  hP = uc.includes,
  vP = F,
  gP = Be,
  pP = vP(function () {
    return !Array(1).includes();
  });
dP({
  target: "Array",
  proto: !0,
  forced: pP
}, {
  includes: function includes(t) {
    return hP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
gP("includes");
var mP = T,
  yP = Xn,
  xP = uc.indexOf,
  $P = At,
  Sl = yP([].indexOf),
  Im = !!Sl && 1 / Sl([1], 1, -0) < 0,
  bP = Im || !$P("indexOf");
mP({
  target: "Array",
  proto: !0,
  forced: bP
}, {
  indexOf: function indexOf(t) {
    var e = arguments.length > 1 ? arguments[1] : void 0;
    return Im ? Sl(this, t, e) || 0 : xP(this, t, e);
  }
});
var SP = T,
  wP = k,
  TP = Kr,
  AP = $e,
  IP = At,
  CP = wP([].join),
  EP = TP !== Object,
  RP = EP || !IP("join", ",");
SP({
  target: "Array",
  proto: !0,
  forced: RP
}, {
  join: function join(t) {
    return CP(AP(this), t === void 0 ? "," : t);
  }
});
var OP = ea,
  _P = $e,
  PP = Ie,
  NP = ne,
  FP = At,
  BP = Math.min,
  wl = [].lastIndexOf,
  Cm = !!wl && 1 / [1].lastIndexOf(1, -0) < 0,
  kP = FP("lastIndexOf"),
  LP = Cm || !kP,
  MP = LP ? function (t) {
    if (Cm) return OP(wl, this, arguments) || 0;
    var e = _P(this),
      n = NP(e);
    if (n === 0) return -1;
    var o = n - 1;
    for (arguments.length > 1 && (o = BP(o, PP(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) if (o in e && e[o] === t) return o || 0;
    return -1;
  } : wl,
  DP = T,
  Pd = MP;
DP({
  target: "Array",
  proto: !0,
  forced: Pd !== [].lastIndexOf
}, {
  lastIndexOf: Pd
});
var jP = T,
  zP = jt.map,
  UP = oo,
  WP = UP("map");
jP({
  target: "Array",
  proto: !0,
  forced: !WP
}, {
  map: function map(t) {
    return zP(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var HP = Y,
  YP = Dt,
  KP = TypeError,
  GP = Object.getOwnPropertyDescriptor,
  VP = HP && !function () {
    if (this !== void 0) return !0;
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).length = 1;
    } catch (r) {
      return r instanceof TypeError;
    }
  }(),
  Dc = VP ? function (r, t) {
    if (YP(r) && !GP(r, "length").writable) throw new KP("Cannot set read only .length");
    return r.length = t;
  } : function (r, t) {
    return r.length = t;
  },
  XP = T,
  QP = Z,
  qP = ne,
  JP = Dc,
  ZP = en,
  eN = F,
  tN = eN(function () {
    return [].push.call({
      length: 4294967296
    }, 1) !== 4294967297;
  }),
  rN = function rN() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).push();
    } catch (r) {
      return r instanceof TypeError;
    }
  },
  nN = tN || !rN();
XP({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: nN
}, {
  push: function push(t) {
    var e = QP(this),
      n = qP(e),
      o = arguments.length;
    ZP(n + o);
    for (var i = 0; i < o; i++) e[n] = arguments[i], n++;
    return JP(e, n), n;
  }
});
var oN = de,
  iN = Z,
  aN = Kr,
  sN = ne,
  Nd = TypeError,
  Fd = "Reduce of empty array with no initial value",
  Bd = function Bd(r) {
    return function (t, e, n, o) {
      var i = iN(t),
        a = aN(i),
        s = sN(i);
      if (oN(e), s === 0 && n < 2) throw new Nd(Fd);
      var l = r ? s - 1 : 0,
        c = r ? -1 : 1;
      if (n < 2) for (;;) {
        if (l in a) {
          o = a[l], l += c;
          break;
        }
        if (l += c, r ? l < 0 : s <= l) throw new Nd(Fd);
      }
      for (; r ? l >= 0 : s > l; l += c) l in a && (o = e(o, a[l], l, i));
      return o;
    };
  },
  Em = {
    left: Bd(!1),
    right: Bd(!0)
  },
  lN = T,
  cN = Em.left,
  uN = At,
  kd = tr,
  fN = Jn,
  dN = !fN && kd > 79 && kd < 83,
  hN = dN || !uN("reduce");
lN({
  target: "Array",
  proto: !0,
  forced: hN
}, {
  reduce: function reduce(t) {
    var e = arguments.length;
    return cN(this, t, e, e > 1 ? arguments[1] : void 0);
  }
});
var vN = T,
  gN = Em.right,
  pN = At,
  Ld = tr,
  mN = Jn,
  yN = !mN && Ld > 79 && Ld < 83,
  xN = yN || !pN("reduceRight");
vN({
  target: "Array",
  proto: !0,
  forced: xN
}, {
  reduceRight: function reduceRight(t) {
    return gN(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var $N = T,
  bN = k,
  SN = Dt,
  wN = bN([].reverse),
  Md = [1, 2];
$N({
  target: "Array",
  proto: !0,
  forced: String(Md) === String(Md.reverse())
}, {
  reverse: function reverse() {
    return SN(this) && (this.length = this.length), wN(this);
  }
});
var TN = T,
  Dd = Dt,
  AN = Zn,
  IN = J,
  jd = rr,
  CN = ne,
  EN = $e,
  RN = fr,
  ON = q,
  _N = oo,
  PN = Jr,
  NN = _N("slice"),
  FN = ON("species"),
  hs = Array,
  BN = Math.max;
TN({
  target: "Array",
  proto: !0,
  forced: !NN
}, {
  slice: function slice(t, e) {
    var n = EN(this),
      o = CN(n),
      i = jd(t, o),
      a = jd(e === void 0 ? o : e, o),
      s,
      l,
      c;
    if (Dd(n) && (s = n.constructor, AN(s) && (s === hs || Dd(s.prototype)) ? s = void 0 : IN(s) && (s = s[FN], s === null && (s = void 0)), s === hs || s === void 0)) return PN(n, i, a);
    for (l = new (s === void 0 ? hs : s)(BN(a - i, 0)), c = 0; i < a; i++, c++) i in n && RN(l, c, n[i]);
    return l.length = c, l;
  }
});
var kN = T,
  LN = jt.some,
  MN = At,
  DN = MN("some");
kN({
  target: "Array",
  proto: !0,
  forced: !DN
}, {
  some: function some(t) {
    return LN(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var zd = Jr,
  jN = Math.floor,
  _Tl = function Tl(r, t) {
    var e = r.length;
    if (e < 8) for (var n = 1, o, i; n < e;) {
      for (i = n, o = r[n]; i && t(r[i - 1], o) > 0;) r[i] = r[--i];
      i !== n++ && (r[i] = o);
    } else for (var a = jN(e / 2), s = _Tl(zd(r, 0, a), t), l = _Tl(zd(r, a), t), c = s.length, u = l.length, f = 0, d = 0; f < c || d < u;) r[f + d] = f < c && d < u ? t(s[f], l[d]) <= 0 ? s[f++] : l[d++] : f < c ? s[f++] : l[d++];
    return r;
  },
  zN = _Tl,
  UN = $t,
  Ud = UN.match(/firefox\/(\d+)/i),
  WN = !!Ud && +Ud[1],
  HN = $t,
  YN = /MSIE|Trident/.test(HN),
  KN = $t,
  Wd = KN.match(/AppleWebKit\/(\d+)\./),
  Rm = !!Wd && +Wd[1],
  GN = T,
  Om = k,
  VN = de,
  XN = Z,
  Hd = ne,
  QN = na,
  Yd = Q,
  jc = F,
  qN = zN,
  JN = At,
  Kd = WN,
  ZN = YN,
  Gd = tr,
  Vd = Rm,
  _t = [],
  Xd = Om(_t.sort),
  eF = Om(_t.push),
  tF = jc(function () {
    _t.sort(void 0);
  }),
  rF = jc(function () {
    _t.sort(null);
  }),
  nF = JN("sort"),
  _m = !jc(function () {
    if (Gd) return Gd < 70;
    if (!(Kd && Kd > 3)) {
      if (ZN) return !0;
      if (Vd) return Vd < 603;
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
        for (o = 0; o < 47; o++) _t.push({
          k: e + o,
          v: n
        });
      }
      for (_t.sort(function (i, a) {
        return a.v - i.v;
      }), o = 0; o < _t.length; o++) e = _t[o].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
      return r !== "DGBEFHACIJK";
    }
  }),
  oF = tF || !rF || !nF || !_m,
  iF = function iF(r) {
    return function (t, e) {
      return e === void 0 ? -1 : t === void 0 ? 1 : r !== void 0 ? +r(t, e) || 0 : Yd(t) > Yd(e) ? 1 : -1;
    };
  };
GN({
  target: "Array",
  proto: !0,
  forced: oF
}, {
  sort: function sort(t) {
    t !== void 0 && VN(t);
    var e = XN(this);
    if (_m) return t === void 0 ? Xd(e) : Xd(e, t);
    var n = [],
      o = Hd(e),
      i,
      a;
    for (a = 0; a < o; a++) a in e && eF(n, e[a]);
    for (qN(n, iF(t)), i = Hd(n), a = 0; a < i;) e[a] = n[a++];
    for (; a < o;) QN(e, a++);
    return e;
  }
});
var aF = Cc;
aF("Array");
var sF = T,
  lF = Z,
  cF = rr,
  uF = Ie,
  fF = ne,
  dF = Dc,
  hF = en,
  vF = no,
  gF = fr,
  vs = na,
  pF = oo,
  mF = pF("splice"),
  yF = Math.max,
  xF = Math.min;
sF({
  target: "Array",
  proto: !0,
  forced: !mF
}, {
  splice: function splice(t, e) {
    var n = lF(this),
      o = fF(n),
      i = cF(t, o),
      a = arguments.length,
      s,
      l,
      c,
      u,
      f,
      d;
    for (a === 0 ? s = l = 0 : a === 1 ? (s = 0, l = o - i) : (s = a - 2, l = xF(yF(uF(e), 0), o - i)), hF(o + s - l), c = vF(n, l), u = 0; u < l; u++) f = i + u, f in n && gF(c, u, n[f]);
    if (c.length = l, s < l) {
      for (u = i; u < o - l; u++) f = u + l, d = u + s, f in n ? n[d] = n[f] : vs(n, d);
      for (u = o; u > o - l + s; u--) vs(n, u - 1);
    } else if (s > l) for (u = o - l; u > i; u--) f = u + l - 1, d = u + s - 1, f in n ? n[d] = n[f] : vs(n, d);
    for (u = 0; u < s; u++) n[u + i] = arguments[u + 2];
    return dF(n, o - l + s), c;
  }
});
var $F = ne,
  bF = function bF(r, t) {
    for (var e = $F(r), n = new t(e), o = 0; o < e; o++) n[o] = r[e - o - 1];
    return n;
  },
  SF = T,
  wF = bF,
  TF = $e,
  AF = Be,
  IF = Array;
SF({
  target: "Array",
  proto: !0
}, {
  toReversed: function toReversed() {
    return wF(TF(this), IF);
  }
});
AF("toReversed");
var CF = ne,
  EF = function EF(r, t, e) {
    for (var n = 0, o = arguments.length > 2 ? e : CF(t), i = new r(o); o > n;) i[n] = t[n++];
    return i;
  },
  RF = z,
  OF = function OF(r, t) {
    var e = RF[r],
      n = e && e.prototype;
    return n && n[t];
  },
  _F = T,
  PF = k,
  NF = de,
  FF = $e,
  BF = EF,
  kF = OF,
  LF = Be,
  MF = Array,
  DF = PF(kF("Array", "sort"));
_F({
  target: "Array",
  proto: !0
}, {
  toSorted: function toSorted(t) {
    t !== void 0 && NF(t);
    var e = FF(this),
      n = BF(MF, e);
    return DF(n, t);
  }
});
LF("toSorted");
var jF = T,
  zF = Be,
  UF = en,
  WF = ne,
  HF = rr,
  YF = $e,
  KF = Ie,
  GF = Array,
  VF = Math.max,
  XF = Math.min;
jF({
  target: "Array",
  proto: !0
}, {
  toSpliced: function toSpliced(t, e) {
    var n = YF(this),
      o = WF(n),
      i = HF(t, o),
      a = arguments.length,
      s = 0,
      l,
      c,
      u,
      f;
    for (a === 0 ? l = c = 0 : a === 1 ? (l = 0, c = o - i) : (l = a - 2, c = XF(VF(KF(e), 0), o - i)), u = UF(o + l - c), f = GF(u); s < i; s++) f[s] = n[s];
    for (; s < i + l; s++) f[s] = arguments[s - i + 2];
    for (; s < u; s++) f[s] = n[s + c - l];
    return f;
  }
});
zF("toSpliced");
var QF = Be;
QF("flat");
var qF = Be;
qF("flatMap");
var JF = T,
  ZF = Z,
  eB = ne,
  tB = Dc,
  rB = na,
  nB = en,
  oB = [].unshift(0) !== 1,
  iB = function iB() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).unshift();
    } catch (r) {
      return r instanceof TypeError;
    }
  },
  aB = oB || !iB();
JF({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: aB
}, {
  unshift: function unshift(t) {
    var e = ZF(this),
      n = eB(e),
      o = arguments.length;
    if (o) {
      nB(n + o);
      for (var i = n; i--;) {
        var a = i + o;
        i in e ? e[a] = e[i] : rB(e, a);
      }
      for (var s = 0; s < o; s++) e[s] = arguments[s];
    }
    return tB(e, n + o);
  }
});
var sB = ne,
  lB = Ie,
  cB = RangeError,
  uB = function uB(r, t, e, n) {
    var o = sB(r),
      i = lB(e),
      a = i < 0 ? o + i : i;
    if (a >= o || a < 0) throw new cB("Incorrect index");
    for (var s = new t(o), l = 0; l < o; l++) s[l] = l === a ? n : r[l];
    return s;
  },
  fB = T,
  dB = uB,
  hB = $e,
  vB = Array;
fB({
  target: "Array",
  proto: !0
}, {
  "with": function _with(r, t) {
    return dB(hB(this), vB, r, t);
  }
});
var gB = et;
gB.Array;
var pB = ge,
  Pm = function Pm() {
    var r = pB(this),
      t = "";
    return r.hasIndices && (t += "d"), r.global && (t += "g"), r.ignoreCase && (t += "i"), r.multiline && (t += "m"), r.dotAll && (t += "s"), r.unicode && (t += "u"), r.unicodeSets && (t += "v"), r.sticky && (t += "y"), t;
  },
  zc = F,
  mB = z,
  Uc = mB.RegExp,
  Wc = zc(function () {
    var r = Uc("a", "y");
    return r.lastIndex = 2, r.exec("abcd") !== null;
  }),
  yB = Wc || zc(function () {
    return !Uc("a", "y").sticky;
  }),
  xB = Wc || zc(function () {
    var r = Uc("^r", "gy");
    return r.lastIndex = 2, r.exec("str") !== null;
  }),
  Nm = {
    BROKEN_CARET: xB,
    MISSED_STICKY: yB,
    UNSUPPORTED_Y: Wc
  },
  $B = F,
  bB = z,
  SB = bB.RegExp,
  wB = $B(function () {
    var r = SB(".", "s");
    return !(r.dotAll && r.test("\n") && r.flags === "s");
  }),
  TB = F,
  AB = z,
  IB = AB.RegExp,
  CB = TB(function () {
    var r = IB("(?<a>b)", "g");
    return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
  }),
  Pr = K,
  oa = k,
  EB = Q,
  RB = Pm,
  OB = Nm,
  _B = Gr,
  PB = nr,
  NB = Lt.get,
  FB = wB,
  BB = CB,
  kB = _B("native-string-replace", String.prototype.replace),
  Ci = RegExp.prototype.exec,
  _Al = Ci,
  LB = oa("".charAt),
  MB = oa("".indexOf),
  DB = oa("".replace),
  gs = oa("".slice),
  Il = function () {
    var r = /a/,
      t = /b*/g;
    return Pr(Ci, r, "a"), Pr(Ci, t, "a"), r.lastIndex !== 0 || t.lastIndex !== 0;
  }(),
  Fm = OB.BROKEN_CARET,
  Cl = /()??/.exec("")[1] !== void 0,
  jB = Il || Cl || Fm || FB || BB;
jB && (_Al = function Al(t) {
  var e = this,
    n = NB(e),
    o = EB(t),
    i = n.raw,
    a,
    s,
    l,
    c,
    u,
    f,
    d;
  if (i) return i.lastIndex = e.lastIndex, a = Pr(_Al, i, o), e.lastIndex = i.lastIndex, a;
  var g = n.groups,
    p = Fm && e.sticky,
    x = Pr(RB, e),
    b = e.source,
    S = 0,
    $ = o;
  if (p && (x = DB(x, "y", ""), MB(x, "g") === -1 && (x += "g"), $ = gs(o, e.lastIndex), e.lastIndex > 0 && (!e.multiline || e.multiline && LB(o, e.lastIndex - 1) !== "\n") && (b = "(?: " + b + ")", $ = " " + $, S++), s = new RegExp("^(?:" + b + ")", x)), Cl && (s = new RegExp("^" + b + "$(?!\\s)", x)), Il && (l = e.lastIndex), c = Pr(Ci, p ? s : e, $), p ? c ? (c.input = gs(c.input, S), c[0] = gs(c[0], S), c.index = e.lastIndex, e.lastIndex += c[0].length) : e.lastIndex = 0 : Il && c && (e.lastIndex = e.global ? c.index + c[0].length : l), Cl && c && c.length > 1 && Pr(kB, c[0], s, function () {
    for (u = 1; u < arguments.length - 2; u++) arguments[u] === void 0 && (c[u] = void 0);
  }), c && g) for (c.groups = f = PB(null), u = 0; u < g.length; u++) d = g[u], f[d[0]] = c[d[1]];
  return c;
});
var Hc = _Al,
  zB = T,
  Qd = Hc;
zB({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== Qd
}, {
  exec: Qd
});
var UB = T,
  WB = k,
  HB = rr,
  YB = RangeError,
  qd = String.fromCharCode,
  Jd = String.fromCodePoint,
  KB = WB([].join),
  GB = !!Jd && Jd.length !== 1;
UB({
  target: "String",
  stat: !0,
  arity: 1,
  forced: GB
}, {
  fromCodePoint: function fromCodePoint(t) {
    for (var e = [], n = arguments.length, o = 0, i; n > o;) {
      if (i = +arguments[o++], HB(i, 1114111) !== i) throw new YB(i + " is not a valid code point");
      e[o] = i < 65536 ? qd(i) : qd(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
    }
    return KB(e, "");
  }
});
var VB = T,
  Bm = k,
  XB = $e,
  QB = Z,
  Zd = Q,
  qB = ne,
  eh = Bm([].push),
  JB = Bm([].join);
VB({
  target: "String",
  stat: !0
}, {
  raw: function raw(t) {
    var e = XB(QB(t).raw),
      n = qB(e);
    if (!n) return "";
    for (var o = arguments.length, i = [], a = 0;;) {
      if (eh(i, Zd(e[a++])), a === n) return JB(i, "");
      a < o && eh(i, Zd(arguments[a]));
    }
  }
});
var ZB = T,
  ek = Rc.codeAt;
ZB({
  target: "String",
  proto: !0
}, {
  codePointAt: function codePointAt(t) {
    return ek(this, t);
  }
});
var tk = T,
  rk = k,
  nk = re,
  ok = Ie,
  ik = Q,
  ak = F,
  sk = rk("".charAt),
  lk = ak(function () {
    return "𠮷".at(-2) !== "\uD842";
  });
tk({
  target: "String",
  proto: !0,
  forced: lk
}, {
  at: function at(t) {
    var e = ik(nk(this)),
      n = e.length,
      o = ok(t),
      i = o >= 0 ? o : n + o;
    return i < 0 || i >= n ? void 0 : sk(e, i);
  }
});
var ck = J,
  uk = je,
  fk = q,
  dk = fk("match"),
  Yc = function Yc(r) {
    var t;
    return ck(r) && ((t = r[dk]) !== void 0 ? !!t : uk(r) === "RegExp");
  },
  hk = Yc,
  vk = TypeError,
  Kc = function Kc(r) {
    if (hk(r)) throw new vk("The method doesn't accept regular expressions");
    return r;
  },
  gk = q,
  pk = gk("match"),
  Gc = function Gc(r) {
    var t = /./;
    try {
      "/./"[r](t);
    } catch (_unused24) {
      try {
        return t[pk] = !1, "/./"[r](t);
      } catch (_unused25) {}
    }
    return !1;
  },
  mk = T,
  yk = Xn,
  xk = Ze.f,
  $k = kt,
  th = Q,
  bk = Kc,
  Sk = re,
  wk = Gc,
  Tk = yk("".slice),
  Ak = Math.min,
  km = wk("endsWith"),
  Ik = !km && !!function () {
    var r = xk(String.prototype, "endsWith");
    return r && !r.writable;
  }();
mk({
  target: "String",
  proto: !0,
  forced: !Ik && !km
}, {
  endsWith: function endsWith(t) {
    var e = th(Sk(this));
    bk(t);
    var n = arguments.length > 1 ? arguments[1] : void 0,
      o = e.length,
      i = n === void 0 ? o : Ak($k(n), o),
      a = th(t);
    return Tk(e, i - a.length, i) === a;
  }
});
var Ck = T,
  Ek = k,
  Rk = Kc,
  Ok = re,
  rh = Q,
  _k = Gc,
  Pk = Ek("".indexOf);
Ck({
  target: "String",
  proto: !0,
  forced: !_k("includes")
}, {
  includes: function includes(t) {
    return !!~Pk(rh(Ok(this)), rh(Rk(t)), arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Nk = T,
  Fk = k,
  Bk = re,
  kk = Q,
  nh = Fk("".charCodeAt);
Nk({
  target: "String",
  proto: !0
}, {
  isWellFormed: function isWellFormed() {
    for (var t = kk(Bk(this)), e = t.length, n = 0; n < e; n++) {
      var o = nh(t, n);
      if ((o & 63488) === 55296 && (o >= 56320 || ++n >= e || (nh(t, n) & 64512) !== 56320)) return !1;
    }
    return !0;
  }
});
var oh = K,
  ih = ze,
  Lk = Hc,
  ah = F,
  Lm = q,
  Mk = ir,
  Dk = Lm("species"),
  ps = RegExp.prototype,
  ia = function ia(r, t, e, n) {
    var o = Lm(r),
      i = !ah(function () {
        var c = {};
        return c[o] = function () {
          return 7;
        }, ""[r](c) !== 7;
      }),
      a = i && !ah(function () {
        var c = !1,
          u = /a/;
        return r === "split" && (u = {}, u.constructor = {}, u.constructor[Dk] = function () {
          return u;
        }, u.flags = "", u[o] = /./[o]), u.exec = function () {
          return c = !0, null;
        }, u[o](""), !c;
      });
    if (!i || !a || e) {
      var s = /./[o],
        l = t(o, ""[r], function (c, u, f, d, g) {
          var p = u.exec;
          return p === Lk || p === ps.exec ? i && !g ? {
            done: !0,
            value: oh(s, u, f, d)
          } : {
            done: !0,
            value: oh(c, f, u, d)
          } : {
            done: !1
          };
        });
      ih(String.prototype, r, l[0]), ih(ps, o, l[1]);
    }
    n && Mk(ps[o], "sham", !0);
  },
  jk = Rc.charAt,
  aa = function aa(r, t, e) {
    return t + (e ? jk(r, t).length : 1);
  },
  sh = K,
  zk = ge,
  Uk = X,
  Wk = je,
  Hk = Hc,
  Yk = TypeError,
  io = function io(r, t) {
    var e = r.exec;
    if (Uk(e)) {
      var n = sh(e, r, t);
      return n !== null && zk(n), n;
    }
    if (Wk(r) === "RegExp") return sh(Hk, r, t);
    throw new Yk("RegExp#exec called on incompatible receiver");
  },
  Kk = K,
  Gk = ia,
  Vk = ge,
  Xk = Xe,
  Qk = kt,
  ms = Q,
  qk = re,
  Jk = St,
  Zk = aa,
  lh = io;
Gk("match", function (r, t, e) {
  return [function (o) {
    var i = qk(this),
      a = Xk(o) ? void 0 : Jk(o, r);
    return a ? Kk(a, o, i) : new RegExp(o)[r](ms(i));
  }, function (n) {
    var o = Vk(this),
      i = ms(n),
      a = e(t, o, i);
    if (a.done) return a.value;
    if (!o.global) return lh(o, i);
    var s = o.unicode;
    o.lastIndex = 0;
    for (var l = [], c = 0, u; (u = lh(o, i)) !== null;) {
      var f = ms(u[0]);
      l[c] = f, f === "" && (o.lastIndex = Zk(i, Qk(o.lastIndex), s)), c++;
    }
    return c === 0 ? null : l;
  }];
});
var eL = K,
  tL = fe,
  rL = bt,
  nL = Pm,
  ch = RegExp.prototype,
  Mm = function Mm(r) {
    var t = r.flags;
    return t === void 0 && !("flags" in ch) && !tL(r, "flags") && rL(ch, r) ? eL(nL, r) : t;
  },
  oL = T,
  iL = K,
  Dm = Xn,
  aL = fp,
  Wo = Gi,
  uh = re,
  jm = kt,
  kn = Q,
  sL = ge,
  lL = Xe,
  cL = je,
  uL = Yc,
  zm = Mm,
  fL = St,
  dL = ze,
  hL = F,
  vL = q,
  gL = Zi,
  pL = aa,
  mL = io,
  Um = Lt,
  yL = Yg,
  Ei = vL("matchAll"),
  Wm = "RegExp String",
  Hm = Wm + " Iterator",
  xL = Um.set,
  $L = Um.getterFor(Hm),
  fh = RegExp.prototype,
  bL = TypeError,
  El = Dm("".indexOf),
  Ri = Dm("".matchAll),
  ys = !!Ri && !hL(function () {
    Ri("a", /./);
  }),
  SL = aL(function (t, e, n, o) {
    xL(this, {
      type: Hm,
      regexp: t,
      string: e,
      global: n,
      unicode: o,
      done: !1
    });
  }, Wm, function () {
    var t = $L(this);
    if (t.done) return Wo(void 0, !0);
    var e = t.regexp,
      n = t.string,
      o = mL(e, n);
    return o === null ? (t.done = !0, Wo(void 0, !0)) : t.global ? (kn(o[0]) === "" && (e.lastIndex = pL(n, jm(e.lastIndex), t.unicode)), Wo(o, !1)) : (t.done = !0, Wo(o, !1));
  }),
  Ym = function Ym(r) {
    var t = sL(this),
      e = kn(r),
      n = gL(t, RegExp),
      o = kn(zm(t)),
      i,
      a,
      s;
    return i = new n(n === RegExp ? t.source : t, o), a = !!~El(o, "g"), s = !!~El(o, "u"), i.lastIndex = jm(t.lastIndex), new SL(i, e, a, s);
  };
oL({
  target: "String",
  proto: !0,
  forced: ys
}, {
  matchAll: function matchAll(t) {
    var e = uh(this),
      n,
      o,
      i,
      a;
    if (lL(t)) {
      if (ys) return Ri(e, t);
    } else {
      if (uL(t) && (n = kn(uh(zm(t))), !~El(n, "g"))) throw new bL("`.matchAll` does not allow non-global regexes");
      if (ys) return Ri(e, t);
      if (i = fL(t, Ei), i === void 0 && yL && cL(t) === "RegExp" && (i = Ym), i) return iL(i, t, e);
    }
    return o = kn(e), a = new RegExp(t, "g"), a[Ei](o);
  }
});
Ei in fh || dL(fh, Ei, Ym);
var wL = Ie,
  TL = Q,
  AL = re,
  IL = RangeError,
  sa = function sa(t) {
    var e = TL(AL(this)),
      n = "",
      o = wL(t);
    if (o < 0 || o === 1 / 0) throw new IL("Wrong number of repetitions");
    for (; o > 0; (o >>>= 1) && (e += e)) o & 1 && (n += e);
    return n;
  },
  Km = k,
  CL = kt,
  dh = Q,
  EL = sa,
  RL = re,
  OL = Km(EL),
  _L = Km("".slice),
  PL = Math.ceil,
  hh = function hh(r) {
    return function (t, e, n) {
      var o = dh(RL(t)),
        i = CL(e),
        a = o.length,
        s = n === void 0 ? " " : dh(n),
        l,
        c;
      return i <= a || s === "" ? o : (l = i - a, c = OL(s, PL(l / s.length)), c.length > l && (c = _L(c, 0, l)), r ? o + c : c + o);
    };
  },
  Gm = {
    start: hh(!1),
    end: hh(!0)
  },
  NL = $t,
  Vm = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(NL),
  FL = T,
  BL = Gm.end,
  kL = Vm;
FL({
  target: "String",
  proto: !0,
  forced: kL
}, {
  padEnd: function padEnd(t) {
    return BL(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var LL = T,
  ML = Gm.start,
  DL = Vm;
LL({
  target: "String",
  proto: !0,
  forced: DL
}, {
  padStart: function padStart(t) {
    return ML(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var jL = T,
  zL = sa;
jL({
  target: "String",
  proto: !0
}, {
  repeat: zL
});
var Vc = k,
  UL = Z,
  WL = Math.floor,
  xs = Vc("".charAt),
  HL = Vc("".replace),
  $s = Vc("".slice),
  YL = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  KL = /\$([$&'`]|\d{1,2})/g,
  Xm = function Xm(r, t, e, n, o, i) {
    var a = e + r.length,
      s = n.length,
      l = KL;
    return o !== void 0 && (o = UL(o), l = YL), HL(i, l, function (c, u) {
      var f;
      switch (xs(u, 0)) {
        case "$":
          return "$";
        case "&":
          return r;
        case "`":
          return $s(t, 0, e);
        case "'":
          return $s(t, a);
        case "<":
          f = o[$s(u, 1, -1)];
          break;
        default:
          var d = +u;
          if (d === 0) return c;
          if (d > s) {
            var g = WL(d / 10);
            return g === 0 ? c : g <= s ? n[g - 1] === void 0 ? xs(u, 1) : n[g - 1] + xs(u, 1) : c;
          }
          f = n[d - 1];
      }
      return f === void 0 ? "" : f;
    });
  },
  GL = ea,
  vh = K,
  la = k,
  VL = ia,
  XL = F,
  QL = ge,
  qL = X,
  JL = Xe,
  ZL = Ie,
  eM = kt,
  vr = Q,
  tM = re,
  rM = aa,
  nM = St,
  oM = Xm,
  iM = io,
  aM = q,
  Rl = aM("replace"),
  sM = Math.max,
  lM = Math.min,
  cM = la([].concat),
  bs = la([].push),
  gh = la("".indexOf),
  ph = la("".slice),
  uM = function uM(r) {
    return r === void 0 ? r : String(r);
  },
  fM = function () {
    return "a".replace(/./, "$0") === "$0";
  }(),
  mh = function () {
    return /./[Rl] ? /./[Rl]("a", "$0") === "" : !1;
  }(),
  dM = !XL(function () {
    var r = /./;
    return r.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "".replace(r, "$<a>") !== "7";
  });
VL("replace", function (r, t, e) {
  var n = mh ? "$" : "$0";
  return [function (i, a) {
    var s = tM(this),
      l = JL(i) ? void 0 : nM(i, Rl);
    return l ? vh(l, i, s, a) : vh(t, vr(s), i, a);
  }, function (o, i) {
    var a = QL(this),
      s = vr(o);
    if (typeof i == "string" && gh(i, n) === -1 && gh(i, "$<") === -1) {
      var l = e(t, a, s, i);
      if (l.done) return l.value;
    }
    var c = qL(i);
    c || (i = vr(i));
    var u = a.global,
      f;
    u && (f = a.unicode, a.lastIndex = 0);
    for (var d = [], g; g = iM(a, s), !(g === null || (bs(d, g), !u));) {
      var p = vr(g[0]);
      p === "" && (a.lastIndex = rM(s, eM(a.lastIndex), f));
    }
    for (var x = "", b = 0, S = 0; S < d.length; S++) {
      g = d[S];
      for (var $ = vr(g[0]), y = sM(lM(ZL(g.index), s.length), 0), m = [], w, R = 1; R < g.length; R++) bs(m, uM(g[R]));
      var I = g.groups;
      if (c) {
        var E = cM([$], m, y, s);
        I !== void 0 && bs(E, I), w = vr(GL(i, void 0, E));
      } else w = oM($, s, y, m, I, i);
      y >= b && (x += ph(s, b, y) + w, b = y + $.length);
    }
    return x + ph(s, b);
  }];
}, !dM || !fM || mh);
var hM = T,
  vM = K,
  Xc = k,
  yh = re,
  gM = X,
  pM = Xe,
  mM = Yc,
  mn = Q,
  yM = St,
  xM = Mm,
  $M = Xm,
  bM = q,
  SM = bM("replace"),
  wM = TypeError,
  Ss = Xc("".indexOf);
Xc("".replace);
var xh = Xc("".slice),
  TM = Math.max;
hM({
  target: "String",
  proto: !0
}, {
  replaceAll: function replaceAll(t, e) {
    var n = yh(this),
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
    if (!pM(t)) {
      if (o = mM(t), o && (i = mn(yh(xM(t))), !~Ss(i, "g"))) throw new wM("`.replaceAll` does not allow non-global regexes");
      if (a = yM(t, SM), a) return vM(a, t, n, e);
    }
    for (s = mn(n), l = mn(t), c = gM(e), c || (e = mn(e)), u = l.length, f = TM(1, u), d = Ss(s, l); d !== -1;) g = c ? mn(e(l, d, s)) : $M(l, s, d, [], void 0, e), x += xh(s, p, d) + g, p = d + u, d = d + f > s.length ? -1 : Ss(s, l, d + f);
    return p < s.length && (x += xh(s, p)), x;
  }
});
var Qm = Object.is || function (t, e) {
    return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
  },
  AM = K,
  IM = ia,
  CM = ge,
  EM = Xe,
  RM = re,
  $h = Qm,
  bh = Q,
  OM = St,
  _M = io;
IM("search", function (r, t, e) {
  return [function (o) {
    var i = RM(this),
      a = EM(o) ? void 0 : OM(o, r);
    return a ? AM(a, o, i) : new RegExp(o)[r](bh(i));
  }, function (n) {
    var o = CM(this),
      i = bh(n),
      a = e(t, o, i);
    if (a.done) return a.value;
    var s = o.lastIndex;
    $h(s, 0) || (o.lastIndex = 0);
    var l = _M(o, i);
    return $h(o.lastIndex, s) || (o.lastIndex = s), l === null ? -1 : l.index;
  }];
});
var ws = K,
  qm = k,
  PM = ia,
  NM = ge,
  FM = Xe,
  BM = re,
  kM = Zi,
  LM = aa,
  MM = kt,
  Sh = Q,
  DM = St,
  wh = io,
  jM = Nm,
  zM = F,
  gr = jM.UNSUPPORTED_Y,
  UM = 4294967295,
  WM = Math.min,
  Ts = qm([].push),
  As = qm("".slice),
  HM = !zM(function () {
    var r = /(?:)/,
      t = r.exec;
    r.exec = function () {
      return t.apply(this, arguments);
    };
    var e = "ab".split(r);
    return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
  }),
  Th = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
PM("split", function (r, t, e) {
  var n = "0".split(void 0, 0).length ? function (o, i) {
    return o === void 0 && i === 0 ? [] : ws(t, this, o, i);
  } : t;
  return [function (i, a) {
    var s = BM(this),
      l = FM(i) ? void 0 : DM(i, r);
    return l ? ws(l, i, s, a) : ws(n, Sh(s), i, a);
  }, function (o, i) {
    var a = NM(this),
      s = Sh(o);
    if (!Th) {
      var l = e(n, a, s, i, n !== t);
      if (l.done) return l.value;
    }
    var c = kM(a, RegExp),
      u = a.unicode,
      f = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (gr ? "g" : "y"),
      d = new c(gr ? "^(?:" + a.source + ")" : a, f),
      g = i === void 0 ? UM : i >>> 0;
    if (g === 0) return [];
    if (s.length === 0) return wh(d, s) === null ? [s] : [];
    for (var p = 0, x = 0, b = []; x < s.length;) {
      d.lastIndex = gr ? 0 : x;
      var S = wh(d, gr ? As(s, x) : s),
        $;
      if (S === null || ($ = WM(MM(d.lastIndex + (gr ? x : 0)), s.length)) === p) x = LM(s, x, u);else {
        if (Ts(b, As(s, p, x)), b.length === g) return b;
        for (var y = 1; y <= S.length - 1; y++) if (Ts(b, S[y]), b.length === g) return b;
        x = p = $;
      }
    }
    return Ts(b, As(s, p)), b;
  }];
}, Th || !HM, gr);
var YM = T,
  KM = Xn,
  GM = Ze.f,
  VM = kt,
  Ah = Q,
  XM = Kc,
  QM = re,
  qM = Gc,
  JM = KM("".slice),
  ZM = Math.min,
  Jm = qM("startsWith"),
  eD = !Jm && !!function () {
    var r = GM(String.prototype, "startsWith");
    return r && !r.writable;
  }();
YM({
  target: "String",
  proto: !0,
  forced: !eD && !Jm
}, {
  startsWith: function startsWith(t) {
    var e = Ah(QM(this));
    XM(t);
    var n = VM(ZM(arguments.length > 1 ? arguments[1] : void 0, e.length)),
      o = Ah(t);
    return JM(e, n, n + o.length) === o;
  }
});
var tD = T,
  rD = k,
  nD = re,
  Ih = Ie,
  oD = Q,
  iD = rD("".slice),
  aD = Math.max,
  sD = Math.min,
  lD = !"".substr || "ab".substr(-1) !== "b";
tD({
  target: "String",
  proto: !0,
  forced: lD
}, {
  substr: function substr(t, e) {
    var n = oD(nD(this)),
      o = n.length,
      i = Ih(t),
      a,
      s;
    return i === 1 / 0 && (i = 0), i < 0 && (i = aD(o + i, 0)), a = e === void 0 ? o : Ih(e), a <= 0 || a === 1 / 0 ? "" : (s = sD(i + a, o), i >= s ? "" : iD(n, i, s));
  }
});
var cD = T,
  Zm = K,
  Qc = k,
  uD = re,
  fD = Q,
  dD = F,
  hD = Array,
  Is = Qc("".charAt),
  Ch = Qc("".charCodeAt),
  vD = Qc([].join),
  Ol = "".toWellFormed,
  gD = "�",
  Eh = Ol && dD(function () {
    return Zm(Ol, 1) !== "1";
  });
cD({
  target: "String",
  proto: !0,
  forced: Eh
}, {
  toWellFormed: function toWellFormed() {
    var t = fD(uD(this));
    if (Eh) return Zm(Ol, t);
    for (var e = t.length, n = hD(e), o = 0; o < e; o++) {
      var i = Ch(t, o);
      (i & 63488) !== 55296 ? n[o] = Is(t, o) : i >= 56320 || o + 1 >= e || (Ch(t, o + 1) & 64512) !== 56320 ? n[o] = gD : (n[o] = Is(t, o), n[++o] = Is(t, o));
    }
    return vD(n, "");
  }
});
var ca = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
  pD = k,
  mD = re,
  yD = Q,
  _l = ca,
  Rh = pD("".replace),
  xD = RegExp("^[" + _l + "]+"),
  $D = RegExp("(^|[^" + _l + "])[" + _l + "]+$"),
  Cs = function Cs(r) {
    return function (t) {
      var e = yD(mD(t));
      return r & 1 && (e = Rh(e, xD, "")), r & 2 && (e = Rh(e, $D, "$1")), e;
    };
  },
  tn = {
    start: Cs(1),
    end: Cs(2),
    trim: Cs(3)
  },
  bD = Yi.PROPER,
  SD = F,
  Oh = ca,
  _h = "​᠎",
  qc = function qc(r) {
    return SD(function () {
      return !!Oh[r]() || _h[r]() !== _h || bD && Oh[r].name !== r;
    });
  },
  wD = T,
  TD = tn.trim,
  AD = qc;
wD({
  target: "String",
  proto: !0,
  forced: AD("trim")
}, {
  trim: function trim() {
    return TD(this);
  }
});
var ID = tn.start,
  CD = qc,
  ey = CD("trimStart") ? function () {
    return ID(this);
  } : "".trimStart,
  ED = T,
  Ph = ey;
ED({
  target: "String",
  proto: !0,
  name: "trimStart",
  forced: "".trimLeft !== Ph
}, {
  trimLeft: Ph
});
var RD = T,
  Nh = ey;
RD({
  target: "String",
  proto: !0,
  name: "trimStart",
  forced: "".trimStart !== Nh
}, {
  trimStart: Nh
});
var OD = tn.end,
  _D = qc,
  ty = _D("trimEnd") ? function () {
    return OD(this);
  } : "".trimEnd,
  PD = T,
  Fh = ty;
PD({
  target: "String",
  proto: !0,
  name: "trimEnd",
  forced: "".trimRight !== Fh
}, {
  trimRight: Fh
});
var ND = T,
  Bh = ty;
ND({
  target: "String",
  proto: !0,
  name: "trimEnd",
  forced: "".trimEnd !== Bh
}, {
  trimEnd: Bh
});
var FD = k,
  BD = re,
  kh = Q,
  kD = /"/g,
  LD = FD("".replace),
  Ue = function Ue(r, t, e, n) {
    var o = kh(BD(r)),
      i = "<" + t;
    return e !== "" && (i += " " + e + '="' + LD(kh(n), kD, "&quot;") + '"'), i + ">" + o + "</" + t + ">";
  },
  MD = F,
  We = function We(r) {
    return MD(function () {
      var t = ""[r]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3;
    });
  },
  DD = T,
  jD = Ue,
  zD = We;
DD({
  target: "String",
  proto: !0,
  forced: zD("anchor")
}, {
  anchor: function anchor(t) {
    return jD(this, "a", "name", t);
  }
});
var UD = T,
  WD = Ue,
  HD = We;
UD({
  target: "String",
  proto: !0,
  forced: HD("big")
}, {
  big: function big() {
    return WD(this, "big", "", "");
  }
});
var YD = T,
  KD = Ue,
  GD = We;
YD({
  target: "String",
  proto: !0,
  forced: GD("blink")
}, {
  blink: function blink() {
    return KD(this, "blink", "", "");
  }
});
var VD = T,
  XD = Ue,
  QD = We;
VD({
  target: "String",
  proto: !0,
  forced: QD("bold")
}, {
  bold: function bold() {
    return XD(this, "b", "", "");
  }
});
var qD = T,
  JD = Ue,
  ZD = We;
qD({
  target: "String",
  proto: !0,
  forced: ZD("fixed")
}, {
  fixed: function fixed() {
    return JD(this, "tt", "", "");
  }
});
var ej = T,
  tj = Ue,
  rj = We;
ej({
  target: "String",
  proto: !0,
  forced: rj("fontcolor")
}, {
  fontcolor: function fontcolor(t) {
    return tj(this, "font", "color", t);
  }
});
var nj = T,
  oj = Ue,
  ij = We;
nj({
  target: "String",
  proto: !0,
  forced: ij("fontsize")
}, {
  fontsize: function fontsize(t) {
    return oj(this, "font", "size", t);
  }
});
var aj = T,
  sj = Ue,
  lj = We;
aj({
  target: "String",
  proto: !0,
  forced: lj("italics")
}, {
  italics: function italics() {
    return sj(this, "i", "", "");
  }
});
var cj = T,
  uj = Ue,
  fj = We;
cj({
  target: "String",
  proto: !0,
  forced: fj("link")
}, {
  link: function link(t) {
    return uj(this, "a", "href", t);
  }
});
var dj = T,
  hj = Ue,
  vj = We;
dj({
  target: "String",
  proto: !0,
  forced: vj("small")
}, {
  small: function small() {
    return hj(this, "small", "", "");
  }
});
var gj = T,
  pj = Ue,
  mj = We;
gj({
  target: "String",
  proto: !0,
  forced: mj("strike")
}, {
  strike: function strike() {
    return pj(this, "strike", "", "");
  }
});
var yj = T,
  xj = Ue,
  $j = We;
yj({
  target: "String",
  proto: !0,
  forced: $j("sub")
}, {
  sub: function sub() {
    return xj(this, "sub", "", "");
  }
});
var bj = T,
  Sj = Ue,
  wj = We;
bj({
  target: "String",
  proto: !0,
  forced: wj("sup")
}, {
  sup: function sup() {
    return Sj(this, "sup", "", "");
  }
});
var Tj = et;
Tj.String;
var Aj = k,
  ua = Aj(1 .valueOf),
  Ij = T,
  ry = Yg,
  Cj = Y,
  ny = z,
  oy = et,
  iy = k,
  Ej = Ki,
  Lh = fe,
  Rj = Ep,
  Oj = bt,
  _j = jn,
  ay = Qg,
  Pj = F,
  Nj = qr.f,
  Fj = Ze.f,
  Bj = be.f,
  kj = ua,
  Lj = tn.trim,
  fa = "Number",
  Br = ny[fa];
oy[fa];
var Jc = Br.prototype,
  Mj = ny.TypeError,
  Dj = iy("".slice),
  Ho = iy("".charCodeAt),
  jj = function jj(r) {
    var t = ay(r, "number");
    return typeof t == "bigint" ? t : zj(t);
  },
  zj = function zj(r) {
    var t = ay(r, "number"),
      e,
      n,
      o,
      i,
      a,
      s,
      l,
      c;
    if (_j(t)) throw new Mj("Cannot convert a Symbol value to a number");
    if (typeof t == "string" && t.length > 2) {
      if (t = Lj(t), e = Ho(t, 0), e === 43 || e === 45) {
        if (n = Ho(t, 2), n === 88 || n === 120) return NaN;
      } else if (e === 48) {
        switch (Ho(t, 1)) {
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
        for (a = Dj(t, 2), s = a.length, l = 0; l < s; l++) if (c = Ho(a, l), c < 48 || c > i) return NaN;
        return parseInt(a, o);
      }
    }
    return +t;
  },
  Zc = Ej(fa, !Br(" 0o1") || !Br("0b1") || Br("+0x1")),
  Uj = function Uj(r) {
    return Oj(Jc, r) && Pj(function () {
      kj(r);
    });
  },
  _da = function da(t) {
    var e = arguments.length < 1 ? 0 : Br(jj(t));
    return Uj(this) ? Rj(Object(e), this, _da) : e;
  };
_da.prototype = Jc;
Zc && !ry && (Jc.constructor = _da);
Ij({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: Zc
}, {
  Number: _da
});
var Wj = function Wj(r, t) {
  for (var e = Cj ? Nj(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0, o; e.length > n; n++) Lh(t, o = e[n]) && !Lh(r, o) && Bj(r, o, Fj(t, o));
};
(Zc || ry) && Wj(oy[fa], Br);
var Hj = T;
Hj({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  EPSILON: Math.pow(2, -52)
});
var Yj = z,
  Kj = Yj.isFinite,
  Gj = Number.isFinite || function (t) {
    return typeof t == "number" && Kj(t);
  },
  Vj = T,
  Xj = Gj;
Vj({
  target: "Number",
  stat: !0
}, {
  isFinite: Xj
});
var Qj = J,
  qj = Math.floor,
  sy = Number.isInteger || function (t) {
    return !Qj(t) && isFinite(t) && qj(t) === t;
  },
  Jj = T,
  Zj = sy;
Jj({
  target: "Number",
  stat: !0
}, {
  isInteger: Zj
});
var ez = T;
ez({
  target: "Number",
  stat: !0
}, {
  isNaN: function isNaN(t) {
    return t !== t;
  }
});
var tz = T,
  rz = sy,
  nz = Math.abs;
tz({
  target: "Number",
  stat: !0
}, {
  isSafeInteger: function isSafeInteger(t) {
    return rz(t) && nz(t) <= 9007199254740991;
  }
});
var oz = T;
oz({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  MAX_SAFE_INTEGER: 9007199254740991
});
var iz = T;
iz({
  target: "Number",
  stat: !0,
  nonConfigurable: !0,
  nonWritable: !0
}, {
  MIN_SAFE_INTEGER: -9007199254740991
});
var ly = z,
  az = F,
  sz = k,
  lz = Q,
  cz = tn.trim,
  uz = ca,
  fz = sz("".charAt),
  Oi = ly.parseFloat,
  Mh = ly.Symbol,
  Dh = Mh && Mh.iterator,
  dz = 1 / Oi(uz + "-0") !== -1 / 0 || Dh && !az(function () {
    Oi(Object(Dh));
  }),
  hz = dz ? function (t) {
    var e = cz(lz(t)),
      n = Oi(e);
    return n === 0 && fz(e, 0) === "-" ? -0 : n;
  } : Oi,
  vz = T,
  jh = hz;
vz({
  target: "Number",
  stat: !0,
  forced: Number.parseFloat !== jh
}, {
  parseFloat: jh
});
var cy = z,
  gz = F,
  pz = k,
  mz = Q,
  yz = tn.trim,
  zh = ca,
  Rn = cy.parseInt,
  Uh = cy.Symbol,
  Wh = Uh && Uh.iterator,
  uy = /^[+-]?0x/i,
  xz = pz(uy.exec),
  $z = Rn(zh + "08") !== 8 || Rn(zh + "0x16") !== 22 || Wh && !gz(function () {
    Rn(Object(Wh));
  }),
  bz = $z ? function (t, e) {
    var n = yz(mz(t));
    return Rn(n, e >>> 0 || (xz(uy, n) ? 16 : 10));
  } : Rn,
  Sz = T,
  Hh = bz;
Sz({
  target: "Number",
  stat: !0,
  forced: Number.parseInt !== Hh
}, {
  parseInt: Hh
});
var wz = Math.log,
  Tz = Math.LOG10E,
  Az = Math.log10 || function (t) {
    return wz(t) * Tz;
  },
  Iz = T,
  eu = k,
  Cz = Ie,
  Ez = ua,
  Rz = sa,
  Oz = Az,
  Pl = F,
  _z = RangeError,
  Yh = String,
  Pz = isFinite,
  Nz = Math.abs,
  Fz = Math.floor,
  Kh = Math.pow,
  Bz = Math.round,
  it = eu(1 .toExponential),
  kz = eu(Rz),
  Gh = eu("".slice),
  fy = it(-69e-12, 4) === "-6.9000e-11" && it(1.255, 2) === "1.25e+0" && it(12345, 3) === "1.235e+4" && it(25, 0) === "3e+1",
  Lz = function Lz() {
    return Pl(function () {
      it(1, 1 / 0);
    }) && Pl(function () {
      it(1, -1 / 0);
    });
  },
  Mz = function Mz() {
    return !Pl(function () {
      it(1 / 0, 1 / 0), it(NaN, 1 / 0);
    });
  },
  Dz = !fy || !Lz() || !Mz();
Iz({
  target: "Number",
  proto: !0,
  forced: Dz
}, {
  toExponential: function toExponential(t) {
    var e = Ez(this);
    if (t === void 0) return it(e);
    var n = Cz(t);
    if (!Pz(e)) return String(e);
    if (n < 0 || n > 20) throw new _z("Incorrect fraction digits");
    if (fy) return it(e, n);
    var o = "",
      i,
      a,
      s,
      l;
    if (e < 0 && (o = "-", e = -e), e === 0) a = 0, i = kz("0", n + 1);else {
      var c = Oz(e);
      a = Fz(c);
      var u = Kh(10, a - n),
        f = Bz(e / u);
      2 * e >= (2 * f + 1) * u && (f += 1), f >= Kh(10, n + 1) && (f /= 10, a += 1), i = Yh(f);
    }
    return n !== 0 && (i = Gh(i, 0, 1) + "." + Gh(i, 1)), a === 0 ? (s = "+", l = "0") : (s = a > 0 ? "+" : "-", l = Yh(Nz(a))), i += "e" + s + l, o + i;
  }
});
var jz = T,
  tu = k,
  zz = Ie,
  Uz = ua,
  Wz = sa,
  Vh = F,
  Hz = RangeError,
  dy = String,
  hy = Math.floor,
  Nl = tu(Wz),
  Xh = tu("".slice),
  yn = tu(1 .toFixed),
  _Nr = function Nr(r, t, e) {
    return t === 0 ? e : t % 2 === 1 ? _Nr(r, t - 1, e * r) : _Nr(r * r, t / 2, e);
  },
  Yz = function Yz(r) {
    for (var t = 0, e = r; e >= 4096;) t += 12, e /= 4096;
    for (; e >= 2;) t += 1, e /= 2;
    return t;
  },
  pr = function pr(r, t, e) {
    for (var n = -1, o = e; ++n < 6;) o += t * r[n], r[n] = o % 1e7, o = hy(o / 1e7);
  },
  Es = function Es(r, t) {
    for (var e = 6, n = 0; --e >= 0;) n += r[e], r[e] = hy(n / t), n = n % t * 1e7;
  },
  Qh = function Qh(r) {
    for (var t = 6, e = ""; --t >= 0;) if (e !== "" || t === 0 || r[t] !== 0) {
      var n = dy(r[t]);
      e = e === "" ? n : e + Nl("0", 7 - n.length) + n;
    }
    return e;
  },
  Kz = Vh(function () {
    return yn(8e-5, 3) !== "0.000" || yn(.9, 0) !== "1" || yn(1.255, 2) !== "1.25" || yn(0xde0b6b3a7640080, 0) !== "1000000000000000128";
  }) || !Vh(function () {
    yn({});
  });
jz({
  target: "Number",
  proto: !0,
  forced: Kz
}, {
  toFixed: function toFixed(t) {
    var e = Uz(this),
      n = zz(t),
      o = [0, 0, 0, 0, 0, 0],
      i = "",
      a = "0",
      s,
      l,
      c,
      u;
    if (n < 0 || n > 20) throw new Hz("Incorrect fraction digits");
    if (e !== e) return "NaN";
    if (e <= -1e21 || e >= 1e21) return dy(e);
    if (e < 0 && (i = "-", e = -e), e > 1e-21) if (s = Yz(e * _Nr(2, 69, 1)) - 69, l = s < 0 ? e * _Nr(2, -s, 1) : e / _Nr(2, s, 1), l *= 4503599627370496, s = 52 - s, s > 0) {
      for (pr(o, 0, l), c = n; c >= 7;) pr(o, 1e7, 0), c -= 7;
      for (pr(o, _Nr(10, c, 1), 0), c = s - 1; c >= 23;) Es(o, 1 << 23), c -= 23;
      Es(o, 1 << c), pr(o, 1, 1), Es(o, 2), a = Qh(o);
    } else pr(o, 0, l), pr(o, 1 << -s, 0), a = Qh(o) + Nl("0", n);
    return n > 0 ? (u = a.length, a = i + (u <= n ? "0." + Nl("0", n - u) + a : Xh(a, 0, u - n) + "." + Xh(a, u - n))) : a = i + a, a;
  }
});
var Gz = T,
  Vz = k,
  qh = F,
  Jh = ua,
  _i = Vz(1 .toPrecision),
  Xz = qh(function () {
    return _i(1, void 0) !== "1";
  }) || !qh(function () {
    _i({});
  });
Gz({
  target: "Number",
  proto: !0,
  forced: Xz
}, {
  toPrecision: function toPrecision(t) {
    return t === void 0 ? _i(Jh(this)) : _i(Jh(this), t);
  }
});
var Qz = et;
Qz.Number;
var ru = {},
  qz = q;
ru.f = qz;
var Zh = et,
  Jz = fe,
  Zz = ru,
  e4 = be.f,
  ke = function ke(r) {
    var t = Zh.Symbol || (Zh.Symbol = {});
    Jz(t, r) || e4(t, r, {
      value: Zz.f(r)
    });
  },
  t4 = K,
  r4 = Oe,
  n4 = q,
  o4 = ze,
  vy = function vy() {
    var r = r4("Symbol"),
      t = r && r.prototype,
      e = t && t.valueOf,
      n = n4("toPrimitive");
    t && !t[n] && o4(t, n, function (o) {
      return t4(e, this);
    }, {
      arity: 1
    });
  },
  ha = T,
  ao = z,
  nu = K,
  i4 = k,
  jr = Y,
  zr = Vr,
  a4 = F,
  xe = fe,
  s4 = bt,
  Fl = ge,
  va = $e,
  ou = Qr,
  l4 = Q,
  Bl = or,
  Ur = nr,
  gy = Un,
  c4 = qr,
  py = Vi,
  u4 = Yn,
  my = Ze,
  yy = be,
  f4 = Wi,
  xy = Hn,
  Rs = ze,
  d4 = Zr,
  iu = Gr,
  h4 = Hi,
  $y = zn,
  ev = Ui,
  v4 = q,
  g4 = ru,
  p4 = ke,
  m4 = vy,
  y4 = wt,
  by = Lt,
  ga = jt.forEach,
  Ne = h4("hidden"),
  pa = "Symbol",
  Ln = "prototype",
  x4 = by.set,
  tv = by.getterFor(pa),
  Ve = Object[Ln],
  Xt = ao.Symbol,
  In = Xt && Xt[Ln],
  $4 = ao.RangeError,
  b4 = ao.TypeError,
  Os = ao.QObject,
  Sy = my.f,
  Qt = yy.f,
  wy = py.f,
  S4 = xy.f,
  Ty = i4([].push),
  xt = iu("symbols"),
  so = iu("op-symbols"),
  w4 = iu("wks"),
  kl = !Os || !Os[Ln] || !Os[Ln].findChild,
  Ay = function Ay(r, t, e) {
    var n = Sy(Ve, t);
    n && delete Ve[t], Qt(r, t, e), n && r !== Ve && Qt(Ve, t, n);
  },
  Ll = jr && a4(function () {
    return Ur(Qt({}, "a", {
      get: function get() {
        return Qt(this, "a", {
          value: 7
        }).a;
      }
    })).a !== 7;
  }) ? Ay : Qt,
  _s = function _s(r, t) {
    var e = xt[r] = Ur(In);
    return x4(e, {
      type: pa,
      tag: r,
      description: t
    }), jr || (e.description = t), e;
  },
  _ma = function ma(t, e, n) {
    t === Ve && _ma(so, e, n), Fl(t);
    var o = ou(e);
    return Fl(n), xe(xt, o) ? (n.enumerable ? (xe(t, Ne) && t[Ne][o] && (t[Ne][o] = !1), n = Ur(n, {
      enumerable: Bl(0, !1)
    })) : (xe(t, Ne) || Qt(t, Ne, Bl(1, Ur(null))), t[Ne][o] = !0), Ll(t, o, n)) : Qt(t, o, n);
  },
  au = function au(t, e) {
    Fl(t);
    var n = va(e),
      o = gy(n).concat(Ey(n));
    return ga(o, function (i) {
      (!jr || nu(Ml, n, i)) && _ma(t, i, n[i]);
    }), t;
  },
  T4 = function T4(t, e) {
    return e === void 0 ? Ur(t) : au(Ur(t), e);
  },
  Ml = function Ml(t) {
    var e = ou(t),
      n = nu(S4, this, e);
    return this === Ve && xe(xt, e) && !xe(so, e) ? !1 : n || !xe(this, e) || !xe(xt, e) || xe(this, Ne) && this[Ne][e] ? n : !0;
  },
  Iy = function Iy(t, e) {
    var n = va(t),
      o = ou(e);
    if (!(n === Ve && xe(xt, o) && !xe(so, o))) {
      var i = Sy(n, o);
      return i && xe(xt, o) && !(xe(n, Ne) && n[Ne][o]) && (i.enumerable = !0), i;
    }
  },
  Cy = function Cy(t) {
    var e = wy(va(t)),
      n = [];
    return ga(e, function (o) {
      !xe(xt, o) && !xe($y, o) && Ty(n, o);
    }), n;
  },
  Ey = function Ey(r) {
    var t = r === Ve,
      e = wy(t ? so : va(r)),
      n = [];
    return ga(e, function (o) {
      xe(xt, o) && (!t || xe(Ve, o)) && Ty(n, xt[o]);
    }), n;
  };
zr || (Xt = function Xt() {
  if (s4(In, this)) throw new b4("Symbol is not a constructor");
  var t = !arguments.length || arguments[0] === void 0 ? void 0 : l4(arguments[0]),
    e = ev(t),
    _n2 = function n(o) {
      var i = this === void 0 ? ao : this;
      i === Ve && nu(_n2, so, o), xe(i, Ne) && xe(i[Ne], e) && (i[Ne][e] = !1);
      var a = Bl(1, o);
      try {
        Ll(i, e, a);
      } catch (s) {
        if (!(s instanceof $4)) throw s;
        Ay(i, e, a);
      }
    };
  return jr && kl && Ll(Ve, e, {
    configurable: !0,
    set: _n2
  }), _s(e, t);
}, In = Xt[Ln], Rs(In, "toString", function () {
  return tv(this).tag;
}), Rs(Xt, "withoutSetter", function (r) {
  return _s(ev(r), r);
}), xy.f = Ml, yy.f = _ma, f4.f = au, my.f = Iy, c4.f = py.f = Cy, u4.f = Ey, g4.f = function (r) {
  return _s(v4(r), r);
}, jr && (d4(In, "description", {
  configurable: !0,
  get: function get() {
    return tv(this).description;
  }
}), Rs(Ve, "propertyIsEnumerable", Ml, {
  unsafe: !0
})));
ha({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: !zr,
  sham: !zr
}, {
  Symbol: Xt
});
ga(gy(w4), function (r) {
  p4(r);
});
ha({
  target: pa,
  stat: !0,
  forced: !zr
}, {
  useSetter: function useSetter() {
    kl = !0;
  },
  useSimple: function useSimple() {
    kl = !1;
  }
});
ha({
  target: "Object",
  stat: !0,
  forced: !zr,
  sham: !jr
}, {
  create: T4,
  defineProperty: _ma,
  defineProperties: au,
  getOwnPropertyDescriptor: Iy
});
ha({
  target: "Object",
  stat: !0,
  forced: !zr
}, {
  getOwnPropertyNames: Cy
});
m4();
y4(Xt, pa);
$y[Ne] = !0;
var A4 = Vr,
  Ry = A4 && !!Symbol["for"] && !!Symbol.keyFor,
  I4 = T,
  C4 = Oe,
  E4 = fe,
  R4 = Q,
  Oy = Gr,
  O4 = Ry,
  Ps = Oy("string-to-symbol-registry"),
  _4 = Oy("symbol-to-string-registry");
I4({
  target: "Symbol",
  stat: !0,
  forced: !O4
}, {
  "for": function _for(r) {
    var t = R4(r);
    if (E4(Ps, t)) return Ps[t];
    var e = C4("Symbol")(t);
    return Ps[t] = e, _4[e] = t, e;
  }
});
var P4 = T,
  N4 = fe,
  F4 = jn,
  B4 = Xr,
  k4 = Gr,
  L4 = Ry,
  rv = k4("symbol-to-string-registry");
P4({
  target: "Symbol",
  stat: !0,
  forced: !L4
}, {
  keyFor: function keyFor(t) {
    if (!F4(t)) throw new TypeError(B4(t) + " is not a symbol");
    if (N4(rv, t)) return rv[t];
  }
});
var M4 = k,
  nv = Dt,
  D4 = X,
  ov = je,
  j4 = Q,
  iv = M4([].push),
  z4 = function z4(r) {
    if (D4(r)) return r;
    if (nv(r)) {
      for (var t = r.length, e = [], n = 0; n < t; n++) {
        var o = r[n];
        typeof o == "string" ? iv(e, o) : (typeof o == "number" || ov(o) === "Number" || ov(o) === "String") && iv(e, j4(o));
      }
      var i = e.length,
        a = !0;
      return function (s, l) {
        if (a) return a = !1, l;
        if (nv(this)) return l;
        for (var c = 0; c < i; c++) if (e[c] === s) return l;
      };
    }
  },
  U4 = T,
  _y = Oe,
  Py = ea,
  W4 = K,
  lo = k,
  Ny = F,
  av = X,
  sv = jn,
  Fy = Jr,
  H4 = z4,
  Y4 = Vr,
  K4 = String,
  Ft = _y("JSON", "stringify"),
  Yo = lo(/./.exec),
  lv = lo("".charAt),
  G4 = lo("".charCodeAt),
  V4 = lo("".replace),
  X4 = lo(1 .toString),
  Q4 = /[\uD800-\uDFFF]/g,
  cv = /^[\uD800-\uDBFF]$/,
  uv = /^[\uDC00-\uDFFF]$/,
  fv = !Y4 || Ny(function () {
    var r = _y("Symbol")("stringify detection");
    return Ft([r]) !== "[null]" || Ft({
      a: r
    }) !== "{}" || Ft(Object(r)) !== "{}";
  }),
  dv = Ny(function () {
    return Ft("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || Ft("\uDEAD") !== "\"\\udead\"";
  }),
  q4 = function q4(r, t) {
    var e = Fy(arguments),
      n = H4(t);
    if (!(!av(n) && (r === void 0 || sv(r)))) return e[1] = function (o, i) {
      if (av(n) && (i = W4(n, this, K4(o), i)), !sv(i)) return i;
    }, Py(Ft, null, e);
  },
  J4 = function J4(r, t, e) {
    var n = lv(e, t - 1),
      o = lv(e, t + 1);
    return Yo(cv, r) && !Yo(uv, o) || Yo(uv, r) && !Yo(cv, n) ? "\\u" + X4(G4(r, 0), 16) : r;
  };
Ft && U4({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: fv || dv
}, {
  stringify: function stringify(t, e, n) {
    var o = Fy(arguments),
      i = Py(fv ? q4 : Ft, null, o);
    return dv && typeof i == "string" ? V4(i, Q4, J4) : i;
  }
});
var Z4 = T,
  eU = Vr,
  tU = F,
  By = Yn,
  rU = Z,
  nU = !eU || tU(function () {
    By.f(1);
  });
Z4({
  target: "Object",
  stat: !0,
  forced: nU
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(t) {
    var e = By.f;
    return e ? e(rU(t)) : [];
  }
});
var hv = Y,
  oU = k,
  iU = K,
  aU = F,
  Ns = Un,
  sU = Yn,
  lU = Hn,
  cU = Z,
  uU = Kr,
  mr = Object.assign,
  vv = Object.defineProperty,
  fU = oU([].concat),
  dU = !mr || aU(function () {
    if (hv && mr({
      b: 1
    }, mr(vv({}, "a", {
      enumerable: !0,
      get: function get() {
        vv(this, "b", {
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
    }), mr({}, r)[e] !== 7 || Ns(mr({}, t)).join("") !== n;
  }) ? function (t, e) {
    for (var n = cU(t), o = arguments.length, i = 1, a = sU.f, s = lU.f; o > i;) for (var l = uU(arguments[i++]), c = a ? fU(Ns(l), a(l)) : Ns(l), u = c.length, f = 0, d; u > f;) d = c[f++], (!hv || iU(s, l, d)) && (n[d] = l[d]);
    return n;
  } : mr,
  hU = T,
  gv = dU;
hU({
  target: "Object",
  stat: !0,
  arity: 2,
  forced: Object.assign !== gv
}, {
  assign: gv
});
var vU = T,
  gU = Y,
  pU = nr;
vU({
  target: "Object",
  stat: !0,
  sham: !gU
}, {
  create: pU
});
var mU = T,
  yU = Y,
  pv = be.f;
mU({
  target: "Object",
  stat: !0,
  forced: Object.defineProperty !== pv,
  sham: !yU
}, {
  defineProperty: pv
});
var xU = T,
  $U = Y,
  mv = Wi.f;
xU({
  target: "Object",
  stat: !0,
  forced: Object.defineProperties !== mv,
  sham: !$U
}, {
  defineProperties: mv
});
var ky = Y,
  bU = F,
  Ly = k,
  SU = ar,
  wU = Un,
  TU = $e,
  AU = Hn.f,
  My = Ly(AU),
  IU = Ly([].push),
  CU = ky && bU(function () {
    var r = Object.create(null);
    return r[2] = 2, !My(r, 2);
  }),
  yv = function yv(r) {
    return function (t) {
      for (var e = TU(t), n = wU(e), o = CU && SU(e) === null, i = n.length, a = 0, s = [], l; i > a;) l = n[a++], (!ky || (o ? l in e : My(e, l))) && IU(s, r ? [l, e[l]] : e[l]);
      return s;
    };
  },
  Dy = {
    entries: yv(!0),
    values: yv(!1)
  },
  EU = T,
  RU = Dy.entries;
EU({
  target: "Object",
  stat: !0
}, {
  entries: function entries(t) {
    return RU(t);
  }
});
var OU = T,
  _U = Xi,
  PU = F,
  NU = J,
  FU = Vn.onFreeze,
  Dl = Object.freeze,
  BU = PU(function () {
    Dl(1);
  });
OU({
  target: "Object",
  stat: !0,
  forced: BU,
  sham: !_U
}, {
  freeze: function freeze(t) {
    return Dl && NU(t) ? Dl(FU(t)) : t;
  }
});
var kU = T,
  LU = ut,
  MU = fr;
kU({
  target: "Object",
  stat: !0
}, {
  fromEntries: function fromEntries(t) {
    var e = {};
    return LU(t, function (n, o) {
      MU(e, n, o);
    }, {
      AS_ENTRIES: !0
    }), e;
  }
});
var DU = T,
  jU = F,
  zU = $e,
  jy = Ze.f,
  zy = Y,
  UU = !zy || jU(function () {
    jy(1);
  });
DU({
  target: "Object",
  stat: !0,
  forced: UU,
  sham: !zy
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
    return jy(zU(t), e);
  }
});
var WU = T,
  HU = Y,
  YU = sp,
  KU = $e,
  GU = Ze,
  VU = fr;
WU({
  target: "Object",
  stat: !0,
  sham: !HU
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
    for (var e = KU(t), n = GU.f, o = YU(e), i = {}, a = 0, s, l; o.length > a;) l = n(e, s = o[a++]), l !== void 0 && VU(i, s, l);
    return i;
  }
});
var XU = T,
  QU = F,
  qU = Vi.f,
  JU = QU(function () {
    return !Object.getOwnPropertyNames(1);
  });
XU({
  target: "Object",
  stat: !0,
  forced: JU
}, {
  getOwnPropertyNames: qU
});
var ZU = T,
  e3 = F,
  t3 = Z,
  Uy = ar,
  r3 = lp,
  n3 = e3(function () {
    Uy(1);
  });
ZU({
  target: "Object",
  stat: !0,
  forced: n3,
  sham: !r3
}, {
  getPrototypeOf: function getPrototypeOf(t) {
    return Uy(t3(t));
  }
});
var o3 = T,
  i3 = Oe,
  a3 = k,
  s3 = de,
  l3 = re,
  c3 = Qr,
  u3 = ut,
  f3 = F,
  xv = Object.groupBy,
  d3 = i3("Object", "create"),
  h3 = a3([].push),
  v3 = !xv || f3(function () {
    return xv("ab", function (r) {
      return r;
    }).a.length !== 1;
  });
o3({
  target: "Object",
  stat: !0,
  forced: v3
}, {
  groupBy: function groupBy(t, e) {
    l3(t), s3(e);
    var n = d3(null),
      o = 0;
    return u3(t, function (i) {
      var a = c3(e(i, o++));
      a in n ? h3(n[a], i) : n[a] = [i];
    }), n;
  }
});
var g3 = T,
  p3 = fe;
g3({
  target: "Object",
  stat: !0
}, {
  hasOwn: p3
});
var m3 = T,
  y3 = Qm;
m3({
  target: "Object",
  stat: !0
}, {
  is: y3
});
var x3 = T,
  $v = bp;
x3({
  target: "Object",
  stat: !0,
  forced: Object.isExtensible !== $v
}, {
  isExtensible: $v
});
var $3 = T,
  b3 = F,
  S3 = J,
  w3 = je,
  Wy = xc,
  jl = Object.isFrozen,
  T3 = Wy || b3(function () {
    jl(1);
  });
$3({
  target: "Object",
  stat: !0,
  forced: T3
}, {
  isFrozen: function isFrozen(t) {
    return !S3(t) || Wy && w3(t) === "ArrayBuffer" ? !0 : jl ? jl(t) : !1;
  }
});
var A3 = T,
  I3 = F,
  C3 = J,
  E3 = je,
  Hy = xc,
  zl = Object.isSealed,
  R3 = Hy || I3(function () {
    zl(1);
  });
A3({
  target: "Object",
  stat: !0,
  forced: R3
}, {
  isSealed: function isSealed(t) {
    return !C3(t) || Hy && E3(t) === "ArrayBuffer" ? !0 : zl ? zl(t) : !1;
  }
});
var O3 = T,
  _3 = Z,
  Yy = Un,
  P3 = F,
  N3 = P3(function () {
    Yy(1);
  });
O3({
  target: "Object",
  stat: !0,
  forced: N3
}, {
  keys: function keys(t) {
    return Yy(_3(t));
  }
});
var F3 = T,
  B3 = J,
  k3 = Vn.onFreeze,
  L3 = Xi,
  M3 = F,
  Ul = Object.preventExtensions,
  D3 = M3(function () {
    Ul(1);
  });
F3({
  target: "Object",
  stat: !0,
  forced: D3,
  sham: !L3
}, {
  preventExtensions: function preventExtensions(t) {
    return Ul && B3(t) ? Ul(k3(t)) : t;
  }
});
var j3 = Y,
  z3 = Zr,
  U3 = J,
  W3 = hp,
  H3 = Z,
  Y3 = re,
  bv = Object.getPrototypeOf,
  Sv = Object.setPrototypeOf,
  wv = Object.prototype,
  Tv = "__proto__";
if (j3 && bv && Sv && !(Tv in wv)) try {
  z3(wv, Tv, {
    configurable: !0,
    get: function get() {
      return bv(H3(this));
    },
    set: function set(t) {
      var e = Y3(this);
      W3(t) && U3(e) && Sv(e, t);
    }
  });
} catch (_unused26) {}
var K3 = T,
  G3 = J,
  V3 = Vn.onFreeze,
  X3 = Xi,
  Q3 = F,
  Wl = Object.seal,
  q3 = Q3(function () {
    Wl(1);
  });
K3({
  target: "Object",
  stat: !0,
  forced: q3,
  sham: !X3
}, {
  seal: function seal(t) {
    return Wl && G3(t) ? Wl(V3(t)) : t;
  }
});
var J3 = T,
  Z3 = Gn;
J3({
  target: "Object",
  stat: !0
}, {
  setPrototypeOf: Z3
});
var e5 = T,
  t5 = Dy.values;
e5({
  target: "Object",
  stat: !0
}, {
  values: function values(t) {
    return t5(t);
  }
});
var r5 = z,
  n5 = F,
  Av = Rm,
  ya = !n5(function () {
    if (!(Av && Av < 535)) {
      var r = Math.random();
      __defineSetter__.call(null, r, function () {}), delete r5[r];
    }
  }),
  o5 = T,
  i5 = Y,
  a5 = ya,
  s5 = de,
  l5 = Z,
  c5 = be;
i5 && o5({
  target: "Object",
  proto: !0,
  forced: a5
}, {
  __defineGetter__: function __defineGetter__(t, e) {
    c5.f(l5(this), t, {
      get: s5(e),
      enumerable: !0,
      configurable: !0
    });
  }
});
var u5 = T,
  f5 = Y,
  d5 = ya,
  h5 = de,
  v5 = Z,
  g5 = be;
f5 && u5({
  target: "Object",
  proto: !0,
  forced: d5
}, {
  __defineSetter__: function __defineSetter__(t, e) {
    g5.f(v5(this), t, {
      set: h5(e),
      enumerable: !0,
      configurable: !0
    });
  }
});
var p5 = T,
  m5 = Y,
  y5 = ya,
  x5 = Z,
  $5 = Qr,
  b5 = ar,
  S5 = Ze.f;
m5 && p5({
  target: "Object",
  proto: !0,
  forced: y5
}, {
  __lookupGetter__: function __lookupGetter__(t) {
    var e = x5(this),
      n = $5(t),
      o;
    do if (o = S5(e, n)) return o.get; while (e = b5(e));
  }
});
var w5 = T,
  T5 = Y,
  A5 = ya,
  I5 = Z,
  C5 = Qr,
  E5 = ar,
  R5 = Ze.f;
T5 && w5({
  target: "Object",
  proto: !0,
  forced: A5
}, {
  __lookupSetter__: function __lookupSetter__(t) {
    var e = I5(this),
      n = C5(t),
      o;
    do if (o = R5(e, n)) return o.set; while (e = E5(e));
  }
});
var O5 = z,
  _5 = wt;
_5(O5.JSON, "JSON", !0);
var P5 = wt;
P5(Math, "Math", !0);
var N5 = T,
  F5 = z,
  B5 = wt;
N5({
  global: !0
}, {
  Reflect: {}
});
B5(F5.Reflect, "Reflect", !0);
var k5 = et;
k5.Object;
var L5 = ke;
L5("asyncIterator");
var M5 = T,
  D5 = Y,
  j5 = z,
  Ko = k,
  z5 = fe,
  U5 = X,
  W5 = bt,
  H5 = Q,
  Y5 = Zr,
  K5 = pc,
  gt = j5.Symbol,
  Wt = gt && gt.prototype;
if (D5 && U5(gt) && (!("description" in Wt) || gt().description !== void 0)) {
  var Iv = {},
    Go = function Go() {
      var t = arguments.length < 1 || arguments[0] === void 0 ? void 0 : H5(arguments[0]),
        e = W5(Wt, this) ? new gt(t) : t === void 0 ? gt() : gt(t);
      return t === "" && (Iv[e] = !0), e;
    };
  K5(Go, gt), Go.prototype = Wt, Wt.constructor = Go;
  var G5 = String(gt("description detection")) === "Symbol(description detection)",
    V5 = Ko(Wt.valueOf),
    X5 = Ko(Wt.toString),
    Q5 = /^Symbol\((.*)\)[^)]+$/,
    q5 = Ko("".replace),
    J5 = Ko("".slice);
  Y5(Wt, "description", {
    configurable: !0,
    get: function get() {
      var t = V5(this);
      if (z5(Iv, t)) return "";
      var e = X5(t),
        n = G5 ? J5(e, 7, -1) : q5(e, Q5, "$1");
      return n === "" ? void 0 : n;
    }
  }), M5({
    global: !0,
    constructor: !0,
    forced: !0
  }, {
    Symbol: Go
  });
}
var Z5 = ke;
Z5("hasInstance");
var eW = ke;
eW("isConcatSpreadable");
var tW = ke;
tW("iterator");
var rW = ke;
rW("match");
var nW = ke;
nW("matchAll");
var oW = ke;
oW("replace");
var iW = ke;
iW("search");
var aW = ke;
aW("species");
var sW = ke;
sW("split");
var lW = ke,
  cW = vy;
lW("toPrimitive");
cW();
var uW = Oe,
  fW = ke,
  dW = wt;
fW("toStringTag");
dW(uW("Symbol"), "Symbol");
var hW = ke;
hW("unscopables");
var vW = et;
vW.Symbol;
var Ky = k,
  gW = de,
  pW = J,
  mW = fe,
  Cv = Jr,
  yW = Dn,
  Gy = Function,
  xW = Ky([].concat),
  $W = Ky([].join),
  Fs = {},
  bW = function bW(r, t, e) {
    if (!mW(Fs, t)) {
      for (var n = [], o = 0; o < t; o++) n[o] = "a[" + o + "]";
      Fs[t] = Gy("C,a", "return new C(" + $W(n, ",") + ")");
    }
    return Fs[t](r, e);
  },
  SW = yW ? Gy.bind : function (t) {
    var e = gW(this),
      n = e.prototype,
      o = Cv(arguments, 1),
      _i11 = function i() {
        var s = xW(o, Cv(arguments));
        return this instanceof _i11 ? bW(e, s.length, s) : e.apply(t, s);
      };
    return pW(n) && (_i11.prototype = n), _i11;
  },
  wW = T,
  Ev = SW;
wW({
  target: "Function",
  proto: !0,
  forced: Function.bind !== Ev
}, {
  bind: Ev
});
var TW = Y,
  AW = Yi.EXISTS,
  Vy = k,
  IW = Zr,
  Xy = Function.prototype,
  CW = Vy(Xy.toString),
  Qy = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
  EW = Vy(Qy.exec),
  RW = "name";
TW && !AW && IW(Xy, RW, {
  configurable: !0,
  get: function get() {
    try {
      return EW(Qy, CW(this))[1];
    } catch (_unused27) {
      return "";
    }
  }
});
var OW = X,
  Rv = J,
  _W = be,
  PW = bt,
  NW = q,
  FW = gc,
  Bs = NW("hasInstance"),
  Ov = Function.prototype;
Bs in Ov || _W.f(Ov, Bs, {
  value: FW(function (r) {
    if (!OW(this) || !Rv(r)) return !1;
    var t = this.prototype;
    return Rv(t) ? PW(t, r) : r instanceof this;
  }, Bs)
});
var BW = et;
BW.Function; /**
             * es6-proxy-polyfill
             * @version 2.1.1
             * @author Ambit-Tsai <ambit_tsai@qq.com>
             * @license Apache-2.0
             * @see {@link https://github.com/ambit-tsai/es6-proxy-polyfill#readme}
             */
var kW = Object.defineProperty,
  _v = Object.defineProperties;
_v && qy(_v);
function qy(r) {
  return typeof r == "function" && /\[native code\]/.test(r.toString());
}
qy(Object.setPrototypeOf) || Object.__proto__;
var Pv = "_$DX_DELEGATE";
function LW(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var e = t[Pv] || (t[Pv] = new Set());
  for (var n = 0, o = r.length; n < o; n++) {
    var i = r[n];
    e.has(i) || (e.add(i), t.addEventListener(i, MW));
  }
}
function MW(r) {
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
var DW = !1;
function Jy() {
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
var Hl;
function su() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
    _depth: window.history.length - 1
  }), ""), Hl = window.history.state._depth;
}
su();
function jW(r) {
  return _objectSpread(_objectSpread({}, r), {}, {
    _depth: window.history.state && window.history.state._depth
  });
}
function zW(r, t) {
  var e = !1;
  return function () {
    var n = Hl;
    su();
    var o = n == null ? null : Hl - n;
    if (e) {
      e = !1;
      return;
    }
    o && t(o) ? (e = !0, window.history.go(-o)) : r();
  };
}
var UW = /^(?:[a-z0-9]+:)?\/\//i,
  WW = /^\/+|(\/)\/+$/g,
  Zy = "http://sr";
function On(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var e = r.replace(WW, "$1");
  return e ? t || /^[?#]/.test(e) ? e : "/" + e : "";
}
function ci(r, t, e) {
  if (UW.test(t)) return;
  var n = On(r),
    o = e && On(e);
  var i = "";
  return !o || t.startsWith("/") ? i = n : o.toLowerCase().indexOf(n.toLowerCase()) !== 0 ? i = n + o : i = o, (i || "/") + On(t, !i);
}
function HW(r, t) {
  if (r == null) throw new Error(t);
  return r;
}
function YW(r, t) {
  return On(r).replace(/\/*(\*.*)?$/g, "") + On(t);
}
function ex(r) {
  var t = {};
  return r.searchParams.forEach(function (e, n) {
    t[n] = e;
  }), t;
}
function tx(r, t, e) {
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
      if (x && ks(p, f(b))) u.params[b] = p;else if (x || !ks(p, g)) return null;
      u.path += "/".concat(p);
    }
    if (o) {
      var _d4 = c ? l.slice(-c).join("/") : "";
      if (ks(_d4, f(o))) u.params[o] = _d4;else return null;
    }
    return u;
  };
}
function ks(r, t) {
  var e = function e(n) {
    return n.localeCompare(r, void 0, {
      sensitivity: "base"
    }) === 0;
  };
  return t === void 0 ? !0 : typeof t == "string" ? e(t) : typeof t == "function" ? t(r) : Array.isArray(t) ? t.some(e) : t instanceof RegExp ? t.test(r) : !1;
}
function KW(r) {
  var _r$pattern$split = r.pattern.split("/*", 2),
    _r$pattern$split2 = _slicedToArray(_r$pattern$split, 2),
    t = _r$pattern$split2[0],
    e = _r$pattern$split2[1],
    n = t.split("/").filter(Boolean);
  return n.reduce(function (o, i) {
    return o + (i.startsWith(":") ? 2 : 3);
  }, n.length - (e === void 0 ? 0 : 1));
}
function rx(r) {
  var t = new Map(),
    e = Yr();
  return new Proxy({}, {
    get: function get(n, o) {
      return t.has(o) || xg(e, function () {
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
function lu(r) {
  var t = /(\/?\:[^\/]+)\?/.exec(r);
  if (!t) return [r];
  var e = r.slice(0, t.index),
    n = r.slice(t.index + t[0].length);
  var o = [e, e += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(n);) o.push(e += t[1]), n = n.slice(t[0].length);
  return lu(n).reduce(function (i, a) {
    return [].concat(_toConsumableArray(i), _toConsumableArray(o.map(function (s) {
      return s + a;
    })));
  }, []);
}
var GW = 100,
  nx = $g(),
  ox = $g(),
  cu = function cu() {
    return HW(bg(nx), "<A> and 'use' router primitives can be only used inside a Route.");
  },
  uu = function uu() {
    return cu().navigatorFactory();
  },
  ix = function ix() {
    return cu().location;
  },
  VW = function VW(r, t) {
    var e = ix(),
      n = ie(function () {
        return lu(r()).map(function (o) {
          return tx(o, void 0, t);
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
  XW = function XW() {
    return cu().params;
  };
function QW(r) {
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
  return ax(r.path).reduce(function (l, c) {
    var _iterator17 = _createForOfIteratorHelper(lu(c)),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var u = _step17.value;
        var f = YW(t, u);
        var d = a ? f : f.split("/*", 1)[0];
        d = d.split("/").map(function (g) {
          return g.startsWith(":") || g.startsWith("*") ? g : encodeURIComponent(g);
        }).join("/"), l.push(_objectSpread(_objectSpread({}, s), {}, {
          originalPath: c,
          pattern: d,
          matcher: tx(d, !a, r.matchFilters)
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
function qW(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    routes: r,
    score: KW(r[r.length - 1]) * 1e4 - t,
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
function ax(r) {
  return Array.isArray(r) ? r : [r];
}
function sx(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var o = ax(r);
  for (var i = 0, a = o.length; i < a; i++) {
    var s = o[i];
    if (s && _typeof(s) == "object") {
      s.hasOwnProperty("path") || (s.path = "");
      var l = QW(s, t);
      var _iterator18 = _createForOfIteratorHelper(l),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var c = _step18.value;
          e.push(c);
          var u = Array.isArray(s.children) && s.children.length === 0;
          if (s.children && !u) sx(s.children, c.pattern, e, n);else {
            var f = qW(_toConsumableArray(e), n.length);
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
function Nv(r, t) {
  for (var e = 0, n = r.length; e < n; e++) {
    var o = r[e].matcher(t);
    if (o) return o;
  }
  return [];
}
function JW(r, t) {
  var e = new URL(Zy),
    n = ie(function (l) {
      var c = r();
      try {
        return new URL(c, e);
      } catch (_unused28) {
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
    query: rx(Hr(i, function () {
      return ex(n());
    }))
  };
}
var Et;
function ZW(r, t, e) {
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
    c = a.beforeLeave || Jy(),
    u = ci("", n.base || "");
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
      var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              d(!0);
              _context12.prev = 1;
              _context12.next = 4;
              return Gx(_);
            case 4:
              _context12.prev = 4;
              d(!1);
              return _context12.finish(4);
            case 7:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[1,, 4, 7]]);
      }));
      return function g(_x15) {
        return _ref40.apply(this, arguments);
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
    $ = JW(p, b),
    y = [],
    m = V([]),
    w = ie(function () {
      return Nv(t(), $.pathname);
    }),
    R = rx(function () {
      var _ = w(),
        L = {};
      for (var j = 0; j < _.length; j++) Object.assign(L, _[j].params);
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
        return ci(u, _);
      }
    };
  return ot(function () {
    var _o3 = o(),
      _ = _o3.value,
      L = _o3.state;
    ve(function () {
      _ !== p() && g(function () {
        Et = "native", x(_), S(L), m[1]([]);
      }).then(function () {
        Et = void 0;
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
    preloadRoute: P,
    singleFlight: n.singleFlight === void 0 ? !0 : n.singleFlight,
    submissions: m
  };
  function E(_, L, j) {
    ve(function () {
      if (typeof L == "number") {
        L && (a.go ? a.go(L) : console.warn("Router integration does not support relative routing"));
        return;
      }
      var _replace$resolve$scro = _objectSpread({
          replace: !1,
          resolve: !0,
          scroll: !0
        }, j),
        M = _replace$resolve$scro.replace,
        W = _replace$resolve$scro.resolve,
        ee = _replace$resolve$scro.scroll,
        _e = _replace$resolve$scro.state,
        Te = W ? _.resolvePath(L) : ci("", L);
      if (Te === void 0) throw new Error("Path '".concat(L, "' is not a routable path"));
      if (y.length >= GW) throw new Error("Too many redirects");
      var He = p();
      if ((Te !== He || _e !== b()) && !DW) {
        if (c.confirm(Te, j)) {
          var zt = y.push({
            value: He,
            replace: M,
            scroll: ee,
            state: b()
          });
          g(function () {
            Et = "navigate", x(Te), S(_e), m[1]([]);
          }).then(function () {
            y.length === zt && (Et = void 0, B({
              value: Te,
              state: _e
            }));
          });
        }
      }
    });
  }
  function A(_) {
    return _ = _ || bg(ox) || I, function (L, j) {
      return E(_, L, j);
    };
  }
  function B(_) {
    var L = y[0];
    L && ((_.value !== L.value || _.state !== L.state) && i(_objectSpread(_objectSpread({}, _), {}, {
      replace: L.replace,
      scroll: L.scroll
    })), y.length = 0);
  }
  function P(_, L) {
    var j = Nv(t(), _.pathname),
      M = Et;
    Et = "preload";
    var _loop5 = function _loop5() {
      var _j$W = j[W],
        ee = _j$W.route,
        _e = _j$W.params;
      ee.component && ee.component.preload && ee.component.preload();
      var Te = ee.load;
      L && Te && xg(e(), function () {
        return Te({
          params: _e,
          location: {
            pathname: _.pathname,
            search: _.search,
            hash: _.hash,
            query: ex(_),
            state: null,
            key: ""
          },
          intent: "preload"
        });
      });
    };
    for (var W in j) {
      _loop5();
    }
    Et = M;
  }
}
function e8(r, t, e, n) {
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
    intent: Et || "initial"
  }) : void 0;
  return {
    parent: t,
    pattern: s,
    path: u,
    outlet: function outlet() {
      return l ? Cg(l, {
        params: a,
        location: i,
        data: f,
        get children() {
          return e();
        }
      }) : e();
    },
    resolvePath: function resolvePath(g) {
      return ci(o.path(), g, u());
    }
  };
}
var t8 = function t8(r) {
  return function (t) {
    var e = t.base,
      n = ql(function () {
        return t.children;
      }),
      o = ie(function () {
        return sx(n(), t.base || "");
      });
    var i;
    var a = ZW(r, o, function () {
      return i;
    }, {
      base: e,
      singleFlight: t.singleFlight
    });
    return r.create && r.create(a), C(nx.Provider, {
      value: a,
      get children() {
        return C(r8, {
          routerState: a,
          get root() {
            return t.root;
          },
          get load() {
            return t.rootLoad;
          },
          get children() {
            return [ic(function () {
              return (i = Yr()) && null;
            }), C(n8, {
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
function r8(r) {
  var t = r.routerState.location,
    e = r.routerState.params,
    n = ie(function () {
      return r.load && ve(function () {
        return r.load({
          params: e,
          location: t,
          intent: "preload"
        });
      });
    });
  return C(ji, {
    get when() {
      return r.root;
    },
    keyed: !0,
    get fallback() {
      return r.children;
    },
    children: function children(o) {
      return C(o, {
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
function n8(r) {
  var t = [];
  var e;
  var n = ie(Hr(r.routerState.matches, function (o, i, a) {
    var s = i && o.length === i.length;
    var l = [];
    var _loop6 = function _loop6(c) {
      var f = i && i[c],
        d = o[c];
      a && f && d.route.key === f.route.key ? l[c] = a[c] : (s = !1, t[c] && t[c](), Nt(function (g) {
        t[c] = g, l[c] = e8(r.routerState, l[c - 1] || r.routerState.base, Fv(function () {
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
  return Fv(function () {
    return n() && e;
  })();
}
var Fv = function Fv(r) {
    return function () {
      return C(ji, {
        get when() {
          return r();
        },
        keyed: !0,
        children: function children(t) {
          return C(ox.Provider, {
            value: t,
            get children() {
              return t.outlet();
            }
          });
        }
      });
    };
  },
  Se = function Se(r) {
    var t = ql(function () {
      return r.children;
    });
    return Zl(r, {
      get children() {
        return t();
      }
    });
  };
function o8(_ref41, e, n) {
  var _ref42 = _slicedToArray(_ref41, 2),
    r = _ref42[0],
    t = _ref42[1];
  return [e ? function () {
    return e(r());
  } : r, n ? function (o) {
    return t(n(o));
  } : t];
}
function i8(r) {
  if (r === "#") return null;
  try {
    return document.querySelector(r);
  } catch (_unused29) {
    return null;
  }
}
function a8(r) {
  var t = !1;
  var e = function e(o) {
      return typeof o == "string" ? {
        value: o
      } : o;
    },
    n = o8(V(e(r.get()), {
      equals: function equals(o, i) {
        return o.value === i.value;
      }
    }), void 0, function (o) {
      return !t && r.set(o), o;
    });
  return r.init && st(r.init(function () {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r.get();
    t = !0, n[1](e(o)), t = !1;
  })), t8({
    signal: n,
    create: r.create,
    utils: r.utils
  });
}
function s8(r, t, e) {
  return r.addEventListener(t, e), function () {
    return r.removeEventListener(t, e);
  };
}
function l8(r, t) {
  var e = i8("#".concat(r));
  e ? e.scrollIntoView() : t && window.scrollTo(0, 0);
}
var c8 = new Map();
function u8() {
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
        var S = new URL(x, Zy);
        if (x = n.parsePath(S.pathname + S.search), !x.startsWith(e)) return;
      }
      if (p.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      var b = c8.get(x);
      if (b) {
        p.preventDefault();
        var _S5 = new FormData(p.target);
        p.submitter && p.submitter.name && _S5.append(p.submitter.name, p.submitter.value), b.call({
          r: n,
          f: p.target
        }, _S5);
      }
    }
    LW(["click", "submit"]), document.addEventListener("click", c), r && (document.addEventListener("mouseover", f), document.addEventListener("mouseout", d), document.addEventListener("focusin", u), document.addEventListener("touchstart", u)), document.addEventListener("submit", g), st(function () {
      document.removeEventListener("click", c), r && (document.removeEventListener("mouseover", f), document.removeEventListener("mouseout", d), document.removeEventListener("focusin", u), document.removeEventListener("touchstart", u)), document.removeEventListener("submit", g);
    });
  };
}
function f8(r) {
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
function d8(r) {
  var t = function t() {
      return window.location.hash.slice(1);
    },
    e = Jy();
  return a8({
    get: t,
    set: function set(_ref43) {
      var n = _ref43.value,
        o = _ref43.replace,
        i = _ref43.scroll,
        a = _ref43.state;
      o ? window.history.replaceState(jW(a), "", "#" + n) : window.location.hash = n;
      var s = n.indexOf("#"),
        l = s >= 0 ? n.slice(s + 1) : "";
      l8(l, i), su();
    },
    init: function init(n) {
      return s8(window, "hashchange", zW(n, function (o) {
        return !e.confirm(o && o < 0 ? o : t());
      }));
    },
    create: u8(r.preload, r.explicitLinks, r.actionBase),
    utils: {
      go: function go(n) {
        return window.history.go(n);
      },
      renderPath: function renderPath(n) {
        return "#".concat(n);
      },
      parsePath: f8,
      beforeLeave: e
    }
  })(r);
}
var h8 = !!o0,
  v8 = h8 ? function (r) {
    return Yr() ? st(r) : r;
  } : st;
function g8(r, t, e, n) {
  return r.addEventListener(t, e, n), v8(r.removeEventListener.bind(r, t, e, n));
}
function p8(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Yr();
  var e = 0,
    n,
    o;
  return function () {
    return e++, st(function () {
      e--, queueMicrotask(function () {
        !e && o && (o(), o = n = void 0);
      });
    }), o || Nt(function (i) {
      return n = r(o = i);
    }, t), n;
  };
}
var m8 = p8(function () {
  var _V21 = V(null),
    _V22 = _slicedToArray(_V21, 2),
    r = _V22[0],
    t = _V22[1];
  return g8(window, "keydown", function (e) {
    t(e), setTimeout(function () {
      return t(null);
    });
  }), r;
});
function Vo(r) {
  return typeof r == "function";
}
function y8(r) {
  return Array.isArray(r);
}
var Xo = {
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
  Pi = _V24[0],
  x8 = _V24[1],
  $8 = function $8(r) {
    var t = m8();
    if (r) {
      var _loop7 = function _loop7() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i12], 2),
          e = _Object$entries3$_i[0],
          n = _Object$entries3$_i[1];
        y8(n) ? n.forEach(function (o) {
          Xo[o] = e;
        }) : Xo[n] = e;
      };
      for (var _i12 = 0, _Object$entries3 = Object.entries(r); _i12 < _Object$entries3.length; _i12++) {
        _loop7();
      }
    }
    return qt(Hr(tc, function (e, n) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var i = e;
      var a = [];
      for (; i;) i.states.has("focus") || (i.states.add("focus"), Vo(i.onFocus) && i.onFocus.call(i, e, n)), a.push(i), i = i.parent;
      return o.forEach(function (s) {
        a.includes(s) || (s.states.remove("focus"), Vo(s.onBlur) && s.onBlur.call(s, e, n));
      }), x8(a), a;
    }, {
      defer: !0
    })), qt(function () {
      var e = t();
      if (e) {
        var n = Xo[e.key] || Xo[e.keyCode];
        ve(function () {
          var o = Pi();
          var i;
          var _iterator19 = _createForOfIteratorHelper(o),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var a = _step19.value;
              if (i = i || a, n) {
                var s = a["on".concat(n)];
                if (Vo(s) && s.call(a, e, a, i) === !0) break;
              } else console.log("Unhandled key event: ".concat(e.key || e.keyCode));
              if (Vo(a.onKeyPress) && a.onKeyPress.call(a, e, n, a, i) === !0) break;
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          return !1;
        });
      }
    }), Pi;
  };
function b8(r, t) {
  var _e8, _e9;
  var e = t();
  var n, o, i, a;
  Array.isArray(e) ? e.length === 2 ? (n = a = e[0], o = i = e[1]) : e.length === 3 ? (n = e[0], o = i = e[1], a = e[2]) : (_e8 = e, _e9 = _slicedToArray(_e8, 4), n = _e9[0], i = _e9[1], a = _e9[2], o = _e9[3], _e8) : n = i = a = o = e, r.onBeforeLayout = function (s, l) {
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
function S8() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = [];
  var e;
  for (e = 0; e < r.length; e++) {
    var n = r[e];
    if (typeof n == "string" && !n.includes("PAUSE-")) t.push(r[e]);else break;
  }
  return [t.join(",\b ")].concat(r.slice(e));
}
function Bv(r) {
  return new Promise(function (t) {
    setTimeout(t, r);
  });
}
function w8(r, t) {
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
function Yl(r, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var n = window.speechSynthesis,
    o = S8(Array.isArray(r) ? r : [r]),
    i = [],
    a = [];
  var s = !0;
  return {
    series: _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var c, u, f, _u2, _u3;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
          case 1:
            if (!(s && o.length)) {
              _context13.next = 61;
              break;
            }
            _context13.next = 4;
            return Promise.resolve(o.shift());
          case 4:
            c = _context13.sent;
            if (!s) {
              _context13.next = 58;
              break;
            }
            if (!(typeof c == "string" && c.includes("PAUSE-"))) {
              _context13.next = 13;
              break;
            }
            u = Number(c.split("PAUSE-")[1]) * 1e3;
            isNaN(u) && (u = 0);
            _context13.next = 11;
            return Bv(u);
          case 11:
            _context13.next = 56;
            break;
          case 13:
            if (!(typeof c == "string" && c.length)) {
              _context13.next = 44;
              break;
            }
            f = 3;
          case 15:
            if (!(s && f > 0)) {
              _context13.next = 42;
              break;
            }
            _context13.prev = 16;
            _context13.next = 19;
            return w8(c, a, t);
          case 19:
            f = 0;
            _context13.next = 40;
            break;
          case 22:
            _context13.prev = 22;
            _context13.t0 = _context13["catch"](16);
            if (!(_context13.t0 instanceof SpeechSynthesisErrorEvent)) {
              _context13.next = 39;
              break;
            }
            if (!(_context13.t0.error === "network")) {
              _context13.next = 32;
              break;
            }
            f--;
            console.warn("Speech synthesis network error. Retries left: ".concat(f));
            _context13.next = 30;
            return Bv(500 * (3 - f));
          case 30:
            _context13.next = 37;
            break;
          case 32:
            if (!(_context13.t0.error === "canceled" || _context13.t0.error === "interrupted")) {
              _context13.next = 36;
              break;
            }
            f = 0;
            _context13.next = 37;
            break;
          case 36:
            throw new Error("SpeechSynthesisErrorEvent: ".concat(_context13.t0.error));
          case 37:
            _context13.next = 40;
            break;
          case 39:
            throw _context13.t0;
          case 40:
            _context13.next = 15;
            break;
          case 42:
            _context13.next = 56;
            break;
          case 44:
            if (!(typeof c == "function")) {
              _context13.next = 51;
              break;
            }
            _u2 = Yl(c(), t, !1);
            i.push(_u2);
            _context13.next = 49;
            return _u2.series;
          case 49:
            _context13.next = 56;
            break;
          case 51:
            if (!Array.isArray(c)) {
              _context13.next = 56;
              break;
            }
            _u3 = Yl(c, t, !1);
            i.push(_u3);
            _context13.next = 56;
            return _u3.series;
          case 56:
            _context13.next = 59;
            break;
          case 58:
            return _context13.abrupt("break", 61);
          case 59:
            _context13.next = 1;
            break;
          case 61:
            _context13.prev = 61;
            s = !1;
            return _context13.finish(61);
          case 64:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0,, 61, 64], [16, 22]]);
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
var Qo;
function T8(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
  return Qo && Qo.cancel(), Qo = Yl(r, t), Qo;
}
var A8 = function A8(r, t) {
  var e;
  var n = function n() {
    return clearTimeout(e);
  };
  return Yr() && st(n), Object.assign(function () {
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
var Kl,
  _n = [],
  nt,
  Gl = !1;
var I8 = 3e5;
function kv(r, t) {
  var e = A8(r, t);
  var n;
  var o = function o(i) {
    n = i, e(i);
  };
  return o.flush = function () {
    e.clear(), r(n);
  }, o.clear = e.clear, o;
}
function xn(r) {
  return r.id || r.name;
}
function C8() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!me.onFocusChange || !me.enabled) return;
  var t = r.every(function (i) {
      return !i.loading;
    }),
    e = r.filter(function (i) {
      return !_n.includes(i);
    });
  if (Kl(), !t && me.onFocusChange) {
    me.onFocusChange([]);
    return;
  }
  _n = r.slice(0);
  var n = [],
    o = e.reduce(function (i, a) {
      return a.announce ? (i.push([xn(a), "Announce", a.announce]), n.push(a.announce)) : a.title ? (i.push([xn(a), "Title", a.title]), n.push(a.title)) : i.push([xn(a), "No Announce", ""]), i;
    }, []);
  if (e.reverse().reduce(function (i, a) {
    return a.announceContext ? (i.push([xn(a), "Context", a.announceContext]), n.push(a.announceContext)) : i.push([xn(a), "No Context", ""]), i;
  }, o), me.debug && console.table(o), n.length) return me.speak(n.reduce(function (i, a) {
    return i.concat(a);
  }, []));
}
function E8(r) {
  if (!Gl) return nt = T8(r);
}
var me = {
    debug: !1,
    enabled: !0,
    cancel: function cancel() {
      nt && nt.cancel();
    },
    clearPrevFocus: function clearPrevFocus() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      _n = _n.slice(0, r), Kl();
    },
    speak: function speak(r) {
      var _ref45 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref45$append = _ref45.append,
        t = _ref45$append === void 0 ? !1 : _ref45$append,
        _ref45$notification = _ref45.notification,
        e = _ref45$notification === void 0 ? !1 : _ref45$notification;
      return me.onFocusChange && me.enabled && (me.onFocusChange.flush(), t && nt && nt.active ? nt.append(r) : (me.cancel(), E8(r)), e && (Gl = !0, nt == null || nt.series["finally"](function () {
        Gl = !1, me.refresh();
      })["catch"](console.error))), nt;
    },
    refresh: function refresh() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      me.clearPrevFocus(r), me.onFocusChange && me.onFocusChange(ve(function () {
        return Pi();
      }));
    },
    setupTimers: function setupTimers() {
      var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref46$focusDebounce = _ref46.focusDebounce,
        r = _ref46$focusDebounce === void 0 ? 400 : _ref46$focusDebounce,
        _ref46$focusChangeTim = _ref46.focusChangeTimeout,
        t = _ref46$focusChangeTim === void 0 ? I8 : _ref46$focusChangeTim;
      me.onFocusChange = kv(C8, r), Kl = kv(function () {
        _n = [];
      }, t);
    }
  },
  R8 = function R8() {
    return me.setupTimers(), qt(Hr(Pi, me.onFocusChange, {
      defer: !0
    })), me;
  };
function O8(r, t) {
  var e = mt.createTexture("ImageTexture", {
    src: r
  });
  return t.reduce(function (n, o) {
    var i = o.x,
      a = o.y,
      s = o.width,
      l = o.height;
    return n[o.name] = mt.createTexture("SubTexture", {
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
  _8 = _V26[0],
  P8 = _V26[1],
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
function N8() {
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
      r.color = he(l), r.src = "", r.alpha = 1, n = 1, t.alpha = 0, e.alpha = 0;
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
  return qt(Hr(_8, function (l) {
    s(l);
  }, {
    defer: !0
  })), C(H, {
    width: 1920,
    height: 1080,
    zIndex: -5,
    get children() {
      return [C(H, {
        ref: function ref(l) {
          var c = r;
          typeof c == "function" ? c(l) : r = l;
        },
        style: a
      }), C(H, {
        ref: function ref(l) {
          var c = t;
          typeof c == "function" ? c(l) : t = l;
        },
        style: a,
        alpha: 0
      }), C(H, {
        ref: function ref(l) {
          var c = e;
          typeof c == "function" ? c(l) : e = l;
        },
        src: "./assets/hero-mask-inverted.png",
        get color() {
          return he(h.color.materialBrand);
        },
        width: 1920,
        height: 1080
      })];
    }
  });
}
var Lv, Mv, Dv, jv, zv, Uv, Wv, Hv, Yv, Kv, Gv, Vv, Xv, Qv, qv, Jv, Zv, eg, tg;
function qo(r) {
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
var F8 = ["focus", "disabled"],
  B8 = ["brand", "inverse", "neutral"];
function D(_ref44) {
  var r = _ref44.themeKeys,
    t = _ref44.base,
    e = _ref44.modes,
    n = _ref44.tones,
    o = _ref44.themeStyles,
    _ref44$modeKeys = _ref44.modeKeys,
    i = _ref44$modeKeys === void 0 ? F8 : _ref44$modeKeys,
    _ref44$toneKeys = _ref44.toneKeys,
    a = _ref44$toneKeys === void 0 ? B8 : _ref44$toneKeys;
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var l = function l(p, x, b) {
      var S = a.map(function ($) {
        var _ref47, _ref48;
        var y = {};
        return new Set([].concat.apply([], [(_ref47 = p == null ? void 0 : p[$]) !== null && _ref47 !== void 0 ? _ref47 : {}, (_ref48 = x == null ? void 0 : x[$]) !== null && _ref48 !== void 0 ? _ref48 : {}].map(Object.keys))).forEach(function (w) {
          var _ref49;
          var R, I;
          i.includes(w) || (y[w] = (_ref49 = (R = x == null ? void 0 : x[$]) == null ? void 0 : R[w]) !== null && _ref49 !== void 0 ? _ref49 : (I = p == null ? void 0 : p[$]) == null ? void 0 : I[w]);
        }), i.forEach(function (w) {
          var R, I;
          y[w] = _objectSpread(_objectSpread(_objectSpread({}, b[w]), (R = p == null ? void 0 : p[$]) == null ? void 0 : R[w]), (I = x == null ? void 0 : x[$]) == null ? void 0 : I[w]);
        }), [$, y];
      });
      return qo(S);
    },
    c = function c(p, x) {
      var b = i.map(function ($) {
        return [$, _objectSpread(_objectSpread({}, p == null ? void 0 : p[$]), x == null ? void 0 : x[$])];
      });
      return qo(b);
    },
    u = function u(p, x) {
      return _objectSpread(_objectSpread({}, p), x.base);
    },
    f = function f(p) {
      return qo(Object.entries(r).filter(function (_ref50) {
        var _ref51 = _slicedToArray(_ref50, 2),
          x = _ref51[0],
          b = _ref51[1];
        return p[b];
      }).map(function (_ref52) {
        var _ref53 = _slicedToArray(_ref52, 2),
          x = _ref53[0],
          b = _ref53[1];
        return [x, p[b]];
      }));
    },
    d = function d(p) {
      return qo(Object.entries(p).map(function (_ref54) {
        var _ref55 = _slicedToArray(_ref54, 2),
          b = _ref55[0],
          S = _ref55[1];
        var $ = f(S);
        return Object.entries(S).filter(function (_ref56) {
          var _ref57 = _slicedToArray(_ref56, 2),
            y = _ref57[0],
            m = _ref57[1];
          return i.includes(y);
        }).forEach(function (_ref58) {
          var _ref59 = _slicedToArray(_ref58, 2),
            y = _ref59[0],
            m = _ref59[1];
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
function Ni() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (t, e) {
    var _t$a, _ref60, _ref61;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = arguments.length > 3 ? arguments[3] : undefined;
    if (t.children.length === 0) return;
    var i = t.flexDirection === "row" ? "width" : "height",
      a = t.flexDirection === "row" ? "x" : "y",
      s = t.gap || 0,
      l = t.scroll || "auto",
      _k2 = k8(t),
      _k3 = _slicedToArray(_k2, 2),
      c = _k3[0],
      u = _k3[1];
    var f = (_t$a = t[a]) !== null && _t$a !== void 0 ? _t$a : 0;
    var d = (_ref60 = e == null ? void 0 : e[a]) !== null && _ref60 !== void 0 ? _ref60 : 0,
      g = (_ref61 = e == null ? void 0 : e[i]) !== null && _ref61 !== void 0 ? _ref61 : 0,
      p = o === void 0 ? "none" : n > o ? "positive" : "negative";
    var x = f;
    if (l === "auto") t.scrollIndex != null && t.scrollIndex >= 0 ? t.selected >= t.scrollIndex && (p === "positive" ? x = f - g - s : x = f + g + s) : (Math.abs(f) + u < c.position + c.size || d < Math.abs(f)) && (x = -d + r);else if (l === "always" || l === "edge" && p === "negative" && Math.abs(f) > d) x = -d + r;else if (l === "edge" && p === "positive" && Math.abs(f) + u < d + g) x = f - g - s;else if (l === "edge" && p === "none") {
      var b = 0,
        S,
        $;
      for (; b < t.children.length && Math.abs(f) + u < d + g;) {
        var _S$i;
        S = t.children[b++], $ = (_S$i = S[i]) !== null && _S$i !== void 0 ? _S$i : 0, f -= $ + s;
      }
      x = f;
    }
    a === "x" && t.x !== x ? t.x = x : a === "y" && t.y !== x && (t.y = x);
  };
}
function k8(r) {
  var _r$children$x, _r$children$width, _r$width, _r$children$y, _r$children$height, _r$height;
  var t, e;
  return r.flexDirection === "row" ? (t = {
    position: (_r$children$x = r.children[r.children.length - 1].x) !== null && _r$children$x !== void 0 ? _r$children$x : 0,
    size: (_r$children$width = r.children[r.children.length - 1].width) !== null && _r$children$width !== void 0 ? _r$children$width : 0
  }, e = (_r$width = r.width) !== null && _r$width !== void 0 ? _r$width : 0) : (t = {
    position: (_r$children$y = r.children[r.children.length - 1].y) !== null && _r$children$y !== void 0 ? _r$children$y : 0,
    size: (_r$children$height = r.children[r.children.length - 1].height) !== null && _r$children$height !== void 0 ? _r$children$height : 0
  }, e = (_r$height = r.height) !== null && _r$height !== void 0 ? _r$height : 0), [t, e];
}
function Pt() {
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
function lx() {
  if (!this || this.selected === void 0 || this.children.length === 0) return !1;
  var r = this.children[this.selected];
  for (; r != null && r.skipFocus;) this.selected++, r = this.children[this.selected];
  return r instanceof qe ? (r.setFocus(), !0) : !1;
}
function Fi(r) {
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
function L8() {
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
var _ref62 = (Lv = h) == null ? void 0 : Lv.componentConfig,
  _ref62$Artwork = _ref62.Artwork,
  _ref62$Artwork2 = _ref62$Artwork === void 0 ? {
    styles: {}
  } : _ref62$Artwork,
  eK = _ref62$Artwork2.defaultTone,
  M8 = _objectWithoutProperties(_ref62$Artwork2, ["defaultTone"]),
  D8 = {
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
    themeStyles: M8
  };
D(D8);
var _ref63 = (Mv = h) == null ? void 0 : Mv.componentConfig,
  _ref63$Badge = _ref63.Badge,
  _ref63$Badge2 = _ref63$Badge === void 0 ? {
    styles: {}
  } : _ref63$Badge,
  tK = _ref63$Badge2.defaultTone,
  fu = _objectWithoutProperties(_ref63$Badge2, ["defaultTone"]),
  j8 = {
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
    themeStyles: fu
  },
  z8 = {
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
    themeStyles: fu
  },
  U8 = {
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
    themeStyles: fu
  };
D(j8);
D(U8);
D(z8);
var _ref64 = (Dv = h) == null ? void 0 : Dv.componentConfig,
  _ref64$Button = _ref64.Button,
  _ref64$Button2 = _ref64$Button === void 0 ? {
    styles: {}
  } : _ref64$Button,
  W8 = _ref64$Button2.defaultTone,
  du = _objectWithoutProperties(_ref64$Button2, ["defaultTone"]),
  _ref65 = (jv = h) == null ? void 0 : jv.componentConfig,
  _ref65$Surface = _ref65.Surface,
  _ref65$Surface2 = _ref65$Surface === void 0 ? {
    styles: {}
  } : _ref65$Surface,
  H8 = _ref65$Surface2.surfaceDefaultTone,
  hu = _objectWithoutProperties(_ref65$Surface2, ["surfaceDefaultTone"]),
  Y8 = {
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
    themeStyles: _objectSpread(_objectSpread({}, hu), du)
  },
  K8 = {
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
    themeStyles: _objectSpread(_objectSpread({}, hu), du)
  },
  G8 = {
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
    themeStyles: _objectSpread(_objectSpread({}, hu), du)
  },
  V8 = D(Y8),
  X8 = D(K8),
  Q8 = D(G8),
  yr = {
    tone: W8 || H8 || "neutral",
    Container: V8,
    Content: X8,
    Text: Q8
  },
  rK = function rK(r) {
    return C(H, De(r, {
      get style() {
        var _r$tone;
        var t;
        return [r.style, (t = yr.Container.tones) == null ? void 0 : t[(_r$tone = r.tone) !== null && _r$tone !== void 0 ? _r$tone : yr.tone], yr.Container.base];
      },
      forwardStates: !0,
      get children() {
        return C(oe, {
          get style() {
            var _r$tone2;
            return [yr.Text.tones[(_r$tone2 = r.tone) !== null && _r$tone2 !== void 0 ? _r$tone2 : yr.tone], yr.Text.base];
          },
          get children() {
            return r.children;
          }
        });
      }
    }));
  },
  _ref66 = (zv = h) == null ? void 0 : zv.componentConfig,
  _ref66$Checkbox = _ref66.Checkbox,
  _ref66$Checkbox2 = _ref66$Checkbox === void 0 ? {
    styles: {}
  } : _ref66$Checkbox,
  nK = _ref66$Checkbox2.defaultTone,
  cx = _objectWithoutProperties(_ref66$Checkbox2, ["defaultTone"]),
  Ht = h.stroke.sm,
  vt = h.spacer.xxl,
  q8 = {
    themeKeys: {
      color: "color",
      borderRadius: "borderRadius",
      border: "border",
      justifyContent: "justifyContent"
    },
    base: {
      width: vt,
      height: vt,
      display: "flex",
      justifyContent: "center",
      color: h.color.fillNeutral,
      alignItems: "center",
      borderRadius: vt / 4,
      border: {
        color: h.color.strokeInverse,
        width: Ht
      }
    },
    modes: {
      disabled: {
        alpha: h.alpha.inactive
      }
    },
    tones: {
      brand: {
        borderRadius: vt / 4,
        border: {
          color: h.color.strokeNeutralSecondary,
          width: Ht
        },
        color: h.color.fillNeutralSecondary,
        checked: {
          borderRadius: vt / 4,
          border: {
            color: h.color.strokeNeutralSecondary,
            width: Ht
          },
          color: h.color.fillBrand
        }
      },
      neutral: {
        borderRadius: vt / 4,
        border: {
          color: h.color.strokeNeutralSecondary,
          width: Ht
        },
        color: h.color.fillInverseSecondary,
        checked: {
          borderRadius: vt / 4,
          border: {
            color: h.color.strokeNeutralSecondary,
            width: Ht
          },
          color: h.color.fillNeutral
        }
      },
      inverse: {
        borderRadius: vt / 4,
        border: {
          color: h.color.strokeInverseSecondary,
          width: Ht
        },
        color: h.color.fillNeutralSecondary,
        checked: {
          borderRadius: vt / 4,
          border: {
            color: h.color.strokeInverseSecondary,
            width: Ht
          },
          color: h.color.fillInverse
        }
      }
    },
    modeKeys: ["focus", "disabled", "checked"],
    themeStyles: cx
  },
  J8 = {
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
    themeStyles: cx
  };
D(q8);
D(J8);
var _ref67 = (Uv = h) == null ? void 0 : Uv.componentConfig,
  _ref67$Icon = _ref67.Icon,
  _ref67$Icon2 = _ref67$Icon === void 0 ? {
    styles: {}
  } : _ref67$Icon,
  oK = _ref67$Icon2.defaultTone,
  Z8 = _objectWithoutProperties(_ref67$Icon2, ["defaultTone"]),
  eH = {
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
    themeStyles: Z8
  };
D(eH);
var _ref68 = (Wv = h) == null ? void 0 : Wv.componentConfig,
  _ref68$Column = _ref68.Column,
  _ref68$Column2 = _ref68$Column === void 0 ? {
    styles: {}
  } : _ref68$Column,
  tH = _ref68$Column2.defaultTone,
  rH = _objectWithoutProperties(_ref68$Column2, ["defaultTone"]),
  nH = {
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
    themeStyles: rH
  },
  oH = D(nH),
  Ls = {
    tone: tH || "neutral",
    Container: oH
  },
  ux = function ux(r) {
    var t = Fi("up"),
      e = Fi("down");
    return C(H, De(r, {
      get onUp() {
        return Pt(r.onUp, t);
      },
      get onDown() {
        return Pt(r.onDown, e);
      },
      get selected() {
        return r.selected || 0;
      },
      forwardFocus: lx,
      get onLayout() {
        return Pt(function (n) {
          var _r$selected, _r$selected2;
          return Ni(r.y).call(n, n, n.children[(_r$selected = r.selected) !== null && _r$selected !== void 0 ? _r$selected : 0], (_r$selected2 = r.selected) !== null && _r$selected2 !== void 0 ? _r$selected2 : 0, void 0);
        }, r.onLayout);
      },
      get onSelectedChanged() {
        return Pt(r.onSelectedChanged, r.scroll !== "none" ? Ni(r.y) : void 0);
      },
      get style() {
        var _r$tone3;
        return [r.style, Ls.Container.tones[(_r$tone3 = r.tone) !== null && _r$tone3 !== void 0 ? _r$tone3 : Ls.tone], Ls.Container.base];
      }
    }));
  },
  _ref69 = (Hv = h) == null ? void 0 : Hv.componentConfig,
  _ref69$Label = _ref69.Label,
  _ref69$Label2 = _ref69$Label === void 0 ? {
    styles: {}
  } : _ref69$Label,
  iK = _ref69$Label2.defaultTone,
  fx = _objectWithoutProperties(_ref69$Label2, ["defaultTone"]),
  iH = {
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
    themeStyles: fx
  },
  aH = {
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
    themeStyles: fx
  };
D(iH);
D(aH);
var _ref70 = (Yv = h) == null ? void 0 : Yv.componentConfig,
  _ref70$Details = _ref70.Details,
  _ref70$Details2 = _ref70$Details === void 0 ? {
    styles: {}
  } : _ref70$Details,
  aK = _ref70$Details2.defaultTone,
  dx = _objectWithoutProperties(_ref70$Details2, ["defaultTone"]),
  sH = {
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
    themeStyles: dx
  },
  lH = {
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
    themeStyles: dx
  };
D(sH);
D(lH);
var _ref71 = (Kv = h) == null ? void 0 : Kv.componentConfig,
  _ref71$Rating = _ref71.Rating,
  _ref71$Rating2 = _ref71$Rating === void 0 ? {
    styles: {},
    defaultTone: "neutral"
  } : _ref71$Rating,
  vu = _ref71$Rating2.styles,
  sK = _ref71$Rating2.defaultTone,
  cH = {
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
    themeStyles: vu
  },
  uH = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      color: h.color.textNeutral
    }, h.typography.body2),
    toneModes: {},
    themeStyles: vu
  },
  fH = {
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
    themeStyles: vu
  };
D(cH);
D(fH);
D(uH);
var _ref72 = (Gv = h) == null ? void 0 : Gv.componentConfig,
  _ref72$Metadata = _ref72.Metadata,
  _ref72$Metadata2 = _ref72$Metadata === void 0 ? {
    styles: {}
  } : _ref72$Metadata,
  lK = _ref72$Metadata2.defaultTone,
  gu = _objectWithoutProperties(_ref72$Metadata2, ["defaultTone"]),
  dH = {
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
    themeStyles: gu
  },
  hH = {
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
    themeStyles: gu
  },
  vH = {
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
    themeStyles: gu
  };
D(dH);
D(vH);
D(hH);
var _ref73 = (Vv = h) == null ? void 0 : Vv.componentConfig,
  _ref73$ProgressBar = _ref73.ProgressBar,
  _ref73$ProgressBar2 = _ref73$ProgressBar === void 0 ? {
    styles: {}
  } : _ref73$ProgressBar,
  cK = _ref73$ProgressBar2.defaultTone,
  hx = _objectWithoutProperties(_ref73$ProgressBar2, ["defaultTone"]),
  gH = {
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
    themeStyles: hx
  },
  pH = {
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
    themeStyles: hx
  };
D(gH);
D(pH);
var _ref74 = (Xv = h) == null ? void 0 : Xv.componentConfig,
  _ref74$Radio = _ref74.Radio,
  _ref74$Radio2 = _ref74$Radio === void 0 ? {
    themeStyles: {}
  } : _ref74$Radio,
  uK = _ref74$Radio2.defaultTone,
  vx = _objectWithoutProperties(_ref74$Radio2, ["defaultTone"]),
  kr = h.spacer.xxl,
  xr = h.stroke.sm,
  mH = {
    themeKeys: {
      borderRadius: "strokeRadius",
      color: "backgroundColor",
      colorChecked: "backgroundColorChecked"
    },
    base: {
      color: h.color.fillNeutralSecondary,
      colorChecked: h.color.fillInverse,
      height: kr + xr * 2,
      width: kr + xr * 2,
      borderRadius: kr / 2 + xr,
      border: {
        color: h.color.strokeNeutralSecondary,
        width: xr
      }
    },
    tones: {
      inverse: {
        border: {
          color: h.color.strokeInverseSecondary,
          width: xr
        }
      },
      brand: {
        border: {
          color: h.color.fillBrand,
          width: xr
        }
      }
    },
    themeStyles: vx
  },
  yH = {
    themeKeys: {
      width: "knobWidth",
      height: "knobHeight",
      borderRadius: "knobRadius",
      color: "knobColor"
    },
    base: {
      color: h.color.fillInverse,
      width: kr,
      height: kr,
      borderRadius: kr / 2
    },
    tones: {
      inverse: {
        color: h.color.fillNeutral
      }
    },
    themeStyles: vx
  };
D(mH);
D(yH);
var _ref75 = (Qv = h) == null ? void 0 : Qv.componentConfig,
  _ref75$Row = _ref75.Row,
  _ref75$Row2 = _ref75$Row === void 0 ? {
    styles: {}
  } : _ref75$Row,
  xH = _ref75$Row2.defaultTone,
  $H = _objectWithoutProperties(_ref75$Row2, ["defaultTone"]),
  bH = {
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
    themeStyles: $H
  },
  SH = D(bH),
  Ms = {
    tone: xH,
    Container: SH
  },
  wH = function wH(r) {
    var t = Fi("left"),
      e = Fi("right");
    return C(H, De(r, {
      get selected() {
        return r.selected || 0;
      },
      get onLeft() {
        return Pt(r.onLeft, t);
      },
      get onRight() {
        return Pt(r.onRight, e);
      },
      forwardFocus: lx,
      get onLayout() {
        return Pt(function (n) {
          return Ni(r.x).call(n, n, n.children[n.selected], n.selected, void 0);
        }, r.onLayout);
      },
      get onSelectedChanged() {
        return Pt(r.onSelectedChanged, r.scroll !== "none" ? Ni(r.x) : void 0);
      },
      get style() {
        return [r.style, Ms.Container.tones[r.tone || Ms.tone], Ms.Container.base];
      }
    }));
  },
  _ref76 = (qv = h) == null ? void 0 : qv.componentConfig,
  _ref76$Keyboard = _ref76.Keyboard,
  _ref76$Keyboard2 = _ref76$Keyboard === void 0 ? {
    styles: {}
  } : _ref76$Keyboard,
  fK = _ref76$Keyboard2.defaultTone,
  pu = _objectWithoutProperties(_ref76$Keyboard2, ["defaultTone"]),
  TH = {
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
    themeStyles: pu
  },
  AH = {
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
    themeStyles: pu
  },
  IH = {
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
    themeStyles: pu
  };
D(TH);
D(AH);
D(IH);
var _ref77 = (Jv = h) == null ? void 0 : Jv.componentConfig,
  _ref77$Key = _ref77.Key,
  _ref77$Key2 = _ref77$Key === void 0 ? {
    styles: {}
  } : _ref77$Key,
  dK = _ref77$Key2.defaultTone,
  gx = _objectWithoutProperties(_ref77$Key2, ["defaultTone"]),
  CH = {
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
    themeStyles: gx
  },
  EH = {
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
    themeStyles: gx
  };
D(CH);
D(EH);
var _ref78 = (Zv = h) == null ? void 0 : Zv.componentConfig,
  _ref78$Input = _ref78.Input,
  _ref78$Input2 = _ref78$Input === void 0 ? {
    styles: {}
  } : _ref78$Input,
  hK = _ref78$Input2.defaultTone,
  mu = _objectWithoutProperties(_ref78$Input2, ["defaultTone"]),
  RH = {
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
    themeStyles: mu
  },
  OH = {
    themeKeys: {
      borderRadius: "borderRadius",
      color: "backgroundColor"
    },
    base: {
      width: L8(4),
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
    themeStyles: mu
  },
  _H = {
    themeKeys: {
      color: "textColor"
    },
    base: _objectSpread({
      textAlign: "left",
      color: h.color.textNeutral
    }, h.typography.button1),
    themeStyles: mu
  };
D(RH);
D(OH);
D(_H);
var _ref79 = (eg = h) == null ? void 0 : eg.componentConfig,
  _ref79$Tile = _ref79.Tile,
  _ref79$Tile2 = _ref79$Tile === void 0 ? {
    styles: {}
  } : _ref79$Tile,
  vK = _ref79$Tile2.defaultTone,
  xa = _objectWithoutProperties(_ref79$Tile2, ["defaultTone"]),
  _ref80 = (tg = h) == null ? void 0 : tg.componentConfig,
  _ref80$Surface = _ref80.Surface,
  _ref80$Surface2 = _ref80$Surface === void 0 ? {
    styles: {}
  } : _ref80$Surface,
  gK = _ref80$Surface2.defaultSurfaceTone,
  PH = _objectWithoutProperties(_ref80$Surface2, ["defaultSurfaceTone"]),
  NH = {
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
    themeStyles: _objectSpread(_objectSpread({}, PH), xa)
  },
  FH = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      flexBoundary: "contain",
      mountY: 1
    },
    themeStyles: xa
  },
  BH = {
    themeKeys: {},
    base: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart"
    },
    themeStyles: xa
  },
  kH = {
    themeKeys: {},
    base: {
      width: h.spacer.lg * 5,
      height: h.spacer.xxl + h.spacer.md
    },
    themeStyles: xa
  };
D(NH);
D(FH);
D(BH);
D(kH);
var LH = {
    color: 255,
    height: 150,
    width: 330,
    x: 1910,
    y: 10,
    mountX: 1,
    alpha: .8,
    zIndex: 100
  },
  rt = {
    x: 10,
    fontSize: 22,
    textColor: he("#f6f6f6")
  },
  Jo = {
    fontSize: 22,
    textColor: he("#f6f6f6")
  },
  _V27 = V(0),
  _V28 = _slicedToArray(_V27, 2),
  MH = _V28[0],
  DH = _V28[1],
  _V29 = V(0),
  _V30 = _slicedToArray(_V29, 2),
  jH = _V30[0],
  zH = _V30[1],
  _V31 = V(99),
  _V32 = _slicedToArray(_V31, 2),
  UH = _V32[0],
  WH = _V32[1],
  _V33 = V(0),
  _V34 = _slicedToArray(_V33, 2),
  HH = _V34[0],
  YH = _V34[1],
  _V35 = V(0),
  _V36 = _slicedToArray(_V35, 2),
  KH = _V36[0],
  GH = _V36[1],
  _V37 = V(0),
  _V38 = _slicedToArray(_V37, 2),
  VH = _V38[0],
  XH = _V38[1],
  _V39 = V(0),
  _V40 = _slicedToArray(_V39, 2),
  QH = _V40[0],
  qH = _V40[1];
var rg = 0,
  ng = 0;
var JH = function JH(r) {
    r && (DH(r), WH(function (t) {
      return Math.min(r, t);
    }), YH(function (t) {
      return Math.max(r, t);
    }), ng += r, rg++, zH(Math.round(ng / rg)));
  },
  ZH = function ZH(r) {
    var t = 0,
      e = 0,
      n = 0;
    r.txManager.textureIdCache.forEach(function (o, i, a) {
      o.state === "loaded" && t++, o.state === "loading" && e++, o.state === "failed" && n++;
    }), GH(t), XH(e), qH(n);
  };
function eY(r) {
  r.renderer.on("fpsUpdate", function (t, e) {
    var n = typeof e == "number" ? e : e.fps;
    n > 5 && (JH(n), ZH(t.root.stage));
  });
}
var tY = function tY(r) {
    return C(H, De(r, {
      style: LH,
      get children() {
        return [C(H, {
          get children() {
            return [C(oe, {
              style: rt,
              children: "FPS:"
            }), C(oe, {
              style: Jo,
              x: 90,
              get children() {
                return MH();
              }
            })];
          }
        }), C(H, {
          x: 160,
          get children() {
            return [C(oe, {
              style: rt,
              children: "AVG:"
            }), C(oe, {
              style: Jo,
              x: 100,
              get children() {
                return jH();
              }
            })];
          }
        }), C(H, {
          x: 0,
          y: 20,
          get children() {
            return [C(oe, {
              style: rt,
              children: "MIN:"
            }), C(oe, {
              style: Jo,
              x: 90,
              get children() {
                return UH();
              }
            })];
          }
        }), C(H, {
          x: 160,
          y: 20,
          get children() {
            return [C(oe, {
              style: rt,
              children: "MAX:"
            }), C(oe, {
              style: Jo,
              x: 100,
              get children() {
                return HH();
              }
            })];
          }
        }), C(H, {
          x: 0,
          y: 50,
          get children() {
            return [C(oe, {
              style: rt,
              children: "Loaded Textures Cnt:"
            }), C(oe, {
              style: rt,
              x: 270,
              get children() {
                return KH();
              }
            })];
          }
        }), C(H, {
          x: 0,
          y: 80,
          get children() {
            return [C(oe, {
              style: rt,
              children: "Loading Textures Cnt:"
            }), C(oe, {
              style: rt,
              x: 270,
              get children() {
                return VH();
              }
            })];
          }
        }), C(H, {
          x: 0,
          y: 110,
          get children() {
            return [C(oe, {
              style: rt,
              children: "Failed Textures Cnt:"
            }), C(oe, {
              style: rt,
              x: 270,
              get children() {
                return QH();
              }
            })];
          }
        })];
      }
    }));
  },
  Vl = {
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
      color: he("#000000"),
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
        color: he("#424242")
      },
      active: {
        width: 328,
        height: 70
      }
    }
  },
  rY = "./",
  nY = [{
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
function oY(r) {
  var t = O8(rY + "assets/icons_white.png", nY);
  return C(H, De(r, {
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
function Zo(r) {
  return C(H, De(r, {
    forwardStates: !0,
    get style() {
      return Vl.NavButton;
    },
    get children() {
      return [C(H, {
        y: -16,
        get children() {
          return C(oY, {
            scale: .5,
            get name() {
              return r.icon;
            }
          });
        }
      }), C(oe, {
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
function iY(r) {
  var t;
  var e = uu();
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
    if (VW(function () {
      return a;
    })()) return r.focusPage();
    e(a);
  }
  return [C(H, {
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
      return [C(oe, {
        x: 80,
        fontSize: 28,
        color: 4143380036,
        children: "Built With:"
      }), C(H, {
        y: 22,
        src: "./assets/solidWord.png",
        width: 280,
        height: 52
      }), C(H, {
        x: 0,
        y: 110,
        src: "./assets/tmdb.png",
        width: 80,
        height: 41
      }), C(oe, {
        x: 90,
        y: 110,
        contain: "width",
        width: 160,
        fontSize: 12,
        color: 4143380036,
        children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
      })];
    }
  }), C(ux, De(r, {
    onFocus: n,
    onBlur: o,
    get style() {
      return Vl.Column;
    },
    scroll: "none",
    get children() {
      return [C(Zo, {
        onEnter: function onEnter() {
          return i("/browse/all");
        },
        icon: "trending",
        children: "Trending"
      }), C(Zo, {
        icon: "movie",
        onEnter: function onEnter() {
          return i("/browse/movie");
        },
        children: "Movies"
      }), C(Zo, {
        icon: "tv",
        onEnter: function onEnter() {
          return i("/browse/tv");
        },
        children: "TV"
      }), C(Zo, {
        icon: "experiment",
        onEnter: function onEnter() {
          return i("/examples");
        },
        children: "Examples"
      })];
    }
  })), C(H, {
    skipFocus: !0,
    ref: function ref(a) {
      var s = t;
      typeof s == "function" ? s(a) : t = a;
    },
    get style() {
      return Vl.Gradient;
    }
  })];
}
var aY = function aY(r) {
    $8({
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
    var t = R8();
    t.enabled = !1;
    var e = uu();
    var n, o;
    eY({
      renderer: mt
    });
    function i() {
      return n.states.has("focus") ? !1 : (o = tc(), n.setFocus());
    }
    var _V41 = V(!0),
      _V42 = _slicedToArray(_V41, 2),
      a = _V42[0],
      s = _V42[1],
      l = ix(),
      c = ["/browse", "/entity"];
    return qt(function () {
      var u = l.pathname;
      var f = c.some(function (d) {
        return u.startsWith(d);
      });
      u === "/" && (f = !0), s(f);
    }), C(H, {
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
        return [C(N8, {}), C(tY, {
          mountX: 1,
          x: 1910,
          y: 10,
          get alpha() {
            return a() ? 1 : 0;
          }
        }), ic(function () {
          return r.children;
        }), C(iY, {
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
  Bi = {
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
      textColor: he("#ffffff")
    },
    FPSValue: {
      x: 90,
      y: 0,
      fontSize: 36,
      textColor: he("#ffffff")
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
      color: he("#000000")
    },
    RowTitle: {
      height: 60,
      width: 300,
      marginBottom: -40,
      fontSize: 36,
      color: he("#f0f0f0"),
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
      color: he("#0000ff")
    },
    peopleBio: _objectSpread(_objectSpread({}, h.typography.body1), {}, {
      fontFamily: "Ubuntu",
      fontWeight: "normal",
      contain: "both",
      width: 780,
      height: 340
    })
  },
  ki = {
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
  sY = {
    color: he("#00A699"),
    height: 8,
    y: 2,
    x: -4,
    width: ki.width + 8
  },
  lY = {
    fontSize: 12,
    y: 12,
    contain: "width",
    textAlign: "center",
    color: he("#F6F6F9"),
    height: ki.height,
    width: ki.width
  },
  pK = {
    container: ki,
    topBar: sY,
    text: lY
  },
  og = {
    width: 386,
    height: 136,
    color: he("#715cab"),
    focus: {
      color: he("#5a39a2")
    },
    disabled: {
      color: he("#291d43")
    }
  },
  mK = {
    fontSize: 32,
    contain: "width",
    textAlign: "center",
    mountY: -.35,
    color: he("#FFFFFF"),
    height: og.height,
    width: og.width,
    focus: {
      fontSize: 40
    },
    disabled: {
      color: he("#909090")
    }
  };
function cY(r) {
  return C(H, De(r, {
    get style() {
      return Bi.Thumbnail;
    }
  }));
}
function uY(r) {
  var _r3 = r0(r, ["items"]),
    _r4 = _slicedToArray(_r3, 2),
    t = _r4[0],
    e = _r4[1];
  return C(wH, De(e, {
    get style() {
      return Bi.Row;
    },
    get children() {
      return C(ec, {
        get each() {
          return t.items;
        },
        children: function children(n) {
          return C(cY, n);
        }
      });
    }
  }));
}
var fY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZiMDhiODgwZjc2MzEzMmIyMjExYWNjYjQ5MzZiZSIsIm5iZiI6MTcyNDA1NjEwMC4yMzQ4MzgsInN1YiI6IjY2YzMwMTg1Y2NlNzA0ZWJlYWQzNWY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dedjZUuwhiOFTlvO6FohvFkC-cEmS9QEw97du52t3bk",
  dY = "https://api.themoviedb.org/3";
var px, mx;
var hY = "w185",
  vY = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + fY
    }
  };
function Ds(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : hY;
  return mx + t + r;
}
function gY(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return px ? Xl(r, t) : yx().then(function () {
    return Xl(r, t);
  });
}
function Xl(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(dY + r, _objectSpread(_objectSpread({}, vY), t)).then(function (e) {
    return e.json();
  });
}
function yx() {
  return Xl("/configuration").then(function (r) {
    var t;
    return px = r, mx = (t = r.images) == null ? void 0 : t.secure_base_url, r;
  });
}
var pY = {
  get: gY,
  loadConfig: yx
};
function mY(r, t) {
  return r.length > t ? r.substring(0, t - 3) + "..." : r;
}
function yY(r) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var e = [];
  for (var n = 0, o = r.length; n < o; n += t) e.push(r.slice(n, n + t));
  return e;
}
function xY() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return r.map(function (t) {
    return {
      src: Ds(t.poster_path || t.profile_path),
      tileSrc: Ds(t.backdrop_path || t.profile_path, "w300"),
      backdrop: Ds(t.backdrop_path, "w1280"),
      href: "/entity/".concat(t.media_type || "people", "/").concat(t.id),
      shortTitle: mY(t.title || t.name, 30),
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
var js = new Map();
var ei = new Map();
function $Y(r) {
  return function (t) {
    var e = "/trending/".concat(r, "/week?page=").concat(t);
    if (js.has(e)) return js.get(e);
    var n = pY.get(e).then(function (o) {
      var i = o.results.filter(function (l) {
          return !l.adult;
        }),
        a = (ei.has(r) ? ei.get(r) : []).concat(xY(i)),
        s = yY(a);
      return s[s.length - 1].length < 7 ? ei.set(r, s.pop()) : ei["delete"](r), s;
    });
    return js.set(e, n), n;
  };
}
function bY(r) {
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
    _yg3 = yg(n, r),
    _yg4 = _slicedToArray(_yg3, 1),
    s = _yg4[0];
  return zs(function () {
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
var $a = 900,
  SY = {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "fixed",
    width: $a,
    height: 220,
    gap: 16
  },
  wY = _objectSpread(_objectSpread({}, h.typography.display2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    maxLines: 1,
    width: $a,
    contain: "width"
  }),
  TY = function TY(r) {
    return C(oe, De(r, {
      style: wY
    }));
  },
  AY = _objectSpread(_objectSpread({}, h.typography.body1), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400,
    lineHeight: 32,
    width: $a,
    maxLines: 3,
    contain: "width"
  }),
  IY = {
    fontSize: 16,
    lineHeight: 20
  },
  CY = function CY(r) {
    return C(oe, De(r, {
      style: AY,
      get children() {
        return r.children;
      }
    }));
  },
  EY = function EY(r) {
    return function () {
      var t = zi("node");
      return S$(b8, t, function () {
        return [8, 13, 11, 13];
      }), ac(t, De(r, {
        style: {
          color: "0x00000099",
          borderRadius: 8,
          border: {
            width: 2,
            color: "0xffffffff"
          }
        }
      }), !0), $$(t, C(oe, {
        style: IY,
        get children() {
          return r.children;
        }
      })), t;
    }();
  },
  ig = _objectSpread(_objectSpread({}, h.typography.body2), {}, {
    fontFamily: "Ubuntu",
    fontWeight: 400
  }),
  RY = function RY(r) {
    return C(H, {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 18,
        width: $a,
        height: 48
      },
      get children() {
        return [C(H, {
          y: -4,
          src: "./assets/stars.png",
          width: 188,
          height: 31
        }), C(H, {
          y: -4,
          flexItem: !1,
          clipping: !0,
          get width() {
            return 188 * r.voteAverage / 10;
          },
          height: 31,
          get children() {
            return C(H, {
              src: "./assets/stars-full.png",
              width: 188,
              height: 31
            });
          }
        }), C(oe, {
          style: ig,
          get children() {
            return [ic(function () {
              return r.voteCount;
            }), " reviews"];
          }
        }), C(oe, {
          style: ig,
          get children() {
            return r.metaText;
          }
        }), C(ec, {
          get each() {
            return r.badges;
          },
          children: function children(t) {
            return C(EY, {
              y: -5,
              children: t
            });
          }
        })];
      }
    });
  },
  OY = function OY(r) {
    return C(H, De({
      id: "contentBlock",
      style: SY
    }, r, {
      get children() {
        return [C(TY, {
          get children() {
            return r.content.title;
          }
        }), C(CY, {
          get children() {
            return r.content.description;
          }
        }), C(ji, {
          get when() {
            return r.content.voteCount;
          },
          get children() {
            return C(RY, {
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
var ag = function ag(r, t) {
  var e;
  var n = function n() {
    return clearTimeout(e);
  };
  return Yr() && st(n), Object.assign(function () {
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
var sg = function sg() {
    var r = XW(),
      _V49 = V(0),
      _V50 = _slicedToArray(_V49, 2),
      t = _V50[0],
      e = _V50[1],
      _V51 = V({}),
      _V52 = _slicedToArray(_V51, 2),
      n = _V52[0],
      o = _V52[1],
      i = uu(),
      a = Yx(function () {
        return 0;
      }),
      s = ie(function () {
        return bY($Y(r.filter || "all"));
      }),
      l = ag(function (d) {
        return P8(d);
      }, 400),
      c = ag(function (d) {
        return o(d || {});
      }, 200);
    qt(Hr(tc, function (d) {
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
      return N(d && d.href), i(d.href), !0;
    }
    return C(ji, {
      get when() {
        return s().pages().length;
      },
      get children() {
        return [C(OY, {
          y: 360,
          x: 162,
          get content() {
            return n();
          }
        }), C(H, {
          clipping: !0,
          get style() {
            return Bi.itemsContainer;
          },
          get children() {
            return C(ux, {
              id: "BrowseColumn",
              plinko: !0,
              announce: "All Trending - Week",
              get y() {
                return t();
              },
              scroll: "none",
              get style() {
                return Bi.Column;
              },
              get children() {
                return C(ec, {
                  get each() {
                    return s().pages();
                  },
                  children: function children(d, g) {
                    return C(uY, {
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
  _Y = function _Y() {
    return function () {
      var r = zi("node");
      return b$(r, "style", {
        width: 1920,
        height: 1080,
        color: 868483072
      }), r;
    }();
  },
  PY = new URL("AppCoreExtensions-0HyhQafc.js", import.meta.url).href,
  NY = Fe(function () {
    return Re(function () {
      return import("./Grid-BMdXTwwT.js");
    }, __vite__mapDeps([0, 1]), import.meta.url);
  }),
  FY = Fe(function () {
    return Re(function () {
      return import("./Portal-8KfMTEA5.js");
    }, __vite__mapDeps([2, 1]), import.meta.url);
  }),
  BY = Fe(function () {
    return Re(function () {
      return import("./Text-C3_l7FC2.js");
    }, __vite__mapDeps([3, 1]), import.meta.url);
  }),
  kY = Fe(function () {
    return Re(function () {
      return import("./Create-DZ2bkAFO.js");
    }, __vite__mapDeps([4, 1]), import.meta.url);
  }),
  LY = Fe(function () {
    return Re(function () {
      return import("./Viewport-CZVxscca.js");
    }, __vite__mapDeps([5, 1]), import.meta.url);
  }),
  MY = Fe(function () {
    return Re(function () {
      return import("./Buttons-BGu0ic8k.js");
    }, __vite__mapDeps([6, 1]), import.meta.url);
  }),
  DY = Fe(function () {
    return Re(function () {
      return import("./Flex-B6eCqxdW.js");
    }, __vite__mapDeps([7, 1]), import.meta.url);
  }),
  jY = Fe(function () {
    return Re(function () {
      return import("./FlexSize-BBCaN2k2.js");
    }, __vite__mapDeps([8, 1]), import.meta.url);
  }),
  zY = Fe(function () {
    return Re(function () {
      return import("./FlexColumnSize-DSAhYVoZ.js");
    }, __vite__mapDeps([9, 1]), import.meta.url);
  }),
  UY = Fe(function () {
    return Re(function () {
      return import("./FlexColumn-LLItJCbh.js");
    }, __vite__mapDeps([10, 1]), import.meta.url);
  }),
  WY = Fe(function () {
    return Re(function () {
      return import("./ButtonsMaterial-CDlcB_wn.js");
    }, __vite__mapDeps([11, 1]), import.meta.url);
  }),
  HY = Fe(function () {
    return Re(function () {
      return import("./SuperFlex-DFlv4zUa.js");
    }, __vite__mapDeps([12, 1]), import.meta.url);
  }),
  YY = Fe(function () {
    return Re(function () {
      return import("./Entity-jZimHy4R.js");
    }, __vite__mapDeps([13, 1]), import.meta.url);
  }),
  KY = Fe(function () {
    return Re(function () {
      return import("./People-CsrA-CQV.js");
    }, __vite__mapDeps([14, 1]), import.meta.url);
  });
Le.debug = !1;
Le.animationsEnabled = !0;
Le.fontSettings.fontFamily = "Ubuntu";
Le.fontSettings.color = he("#f6f6f6");
Le.fontSettings.fontSize = 32;
Le.rendererOptions = {
  coreExtensionModule: PY,
  fpsUpdateInterval: 200,
  enableInspector: !0,
  deviceLogicalPixelRatio: window.innerHeight / 1080
};
x$(function () {
  return C(d8, {
    root: function root(r) {
      return C(aY, r);
    },
    get children() {
      return [C(Se, {
        path: "",
        component: sg
      }), C(Se, {
        path: "examples",
        component: FY
      }), C(Se, {
        path: "browse/:filter",
        component: sg
      }), C(Se, {
        path: "grid",
        component: NY
      }), C(Se, {
        path: "text",
        component: BY
      }), C(Se, {
        path: "buttons",
        component: MY
      }), C(Se, {
        path: "flex",
        component: DY
      }), C(Se, {
        path: "create",
        component: kY
      }), C(Se, {
        path: "viewport",
        component: LY
      }), C(Se, {
        path: "flexsize",
        component: jY
      }), C(Se, {
        path: "flexcolumnsize",
        component: zY
      }), C(Se, {
        path: "flexcolumn",
        component: UY
      }), C(Se, {
        path: "superflex",
        component: HY
      }), C(Se, {
        path: "buttonsmaterial",
        component: WY
      }), C(Se, {
        path: "entity/people/:id",
        component: KY
      }), C(Se, {
        path: "entity/:type/:id",
        component: YY
      }), C(Se, {
        path: "*all",
        component: _Y
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
export { Ds as A, XW as B, ux as C, OY as D, rK as E, ec as F, uY as G, xK as H, QY as I, yK as J, i0 as K, mK as M, wH as R, ji as S, oe as T, H as V, yg as a, zs as b, V as c, Kx as d, Yx as e, qt as f, XY as g, he as h, C as i, Bi as j, ic as k, ql as l, De as m, st as n, Hr as o, pK as p, zi as q, S$ as r, P8 as s, h as t, uu as u, ac as v, b8 as w, $$ as x, pY as y, xY as z };