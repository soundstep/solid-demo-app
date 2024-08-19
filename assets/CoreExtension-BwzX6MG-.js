function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
var _e = Object.defineProperty;
var xe = function xe(s, t, e) {
  return t in s ? _e(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : s[t] = e;
};
var a = function a(s, t, e) {
  return xe(s, _typeof(t) != "symbol" ? t + "" : t, e), e;
};
function Re(s, t) {
  var e = {
      alpha: !0,
      antialias: !1,
      depth: !1,
      stencil: !0,
      desynchronized: !1,
      powerPreference: "high-performance",
      premultipliedAlpha: !0,
      preserveDrawingBuffer: !1
    },
    r = s.getContext("webgl", e) || s.getContext("experimental-webgl", e);
  if (!r) throw new Error("Unable to create WebGL context");
  return t ? new Proxy(r, {
    get: function get(n, i) {
      var o = n[i];
      return typeof o == "function" ? (t.increment(String(i)), o.bind(n)) : o;
    }
  }) : r;
}
function g(s, t) {
  if (!Ae() && !s) throw new Error(t || "Assertion failed");
}
function ke(s, t, e) {
  var r = Math.trunc(s >>> 24),
    n = Math.trunc(s >>> 16 & 255),
    i = Math.trunc(s >>> 8 & 255),
    o = Math.trunc(s & 255),
    h = Math.trunc(t >>> 24),
    c = Math.trunc(t >>> 16 & 255),
    f = Math.trunc(t >>> 8 & 255),
    l = Math.trunc(t & 255),
    d = Math.round(h * e + r * (1 - e)),
    E = Math.round(c * e + n * (1 - e)),
    x = Math.round(f * e + i * (1 - e)),
    _ = Math.round(l * e + o * (1 - e));
  return (d << 24 | E << 16 | x << 8 | _) >>> 0;
}
function $e(s, t) {
  var e = s >>> 24,
    r = s >>> 16 & 255,
    n = s >>> 8 & 255,
    i = Math.trunc((s & 255) * t);
  return (e << 24 | r << 16 | n << 8 | i) >>> 0;
}
var se = !0;
function ze(s) {
  se = s === "webgl";
}
function qe(s, t) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = (s & 255) / 255 * t,
    n = se ? r : 1,
    i = Math.trunc((s >>> 24) * n),
    o = Math.trunc((s >>> 16 & 255) * n),
    h = Math.trunc((s >>> 8 & 255) * n),
    c = Math.trunc(r * 255);
  return e ? (c << 24 | h << 16 | o << 8 | i) >>> 0 : (i << 24 | o << 16 | h << 8 | c) >>> 0;
}
function V(s, t) {
  return Object.prototype.hasOwnProperty.call(s, t);
}
function Ae() {
  return {
    BASE_URL: "./",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    LEGACY: !1
  } && !0;
}
var ne = /*#__PURE__*/function () {
  function ne() {
    _classCallCheck(this, ne);
    a(this, "eventListeners", {});
  }
  return _createClass(ne, [{
    key: "on",
    value: function on(t, e) {
      var r = this.eventListeners[t];
      r || (r = []), r.push(e), this.eventListeners[t] = r;
    }
  }, {
    key: "off",
    value: function off(t, e) {
      var r = this.eventListeners[t];
      if (!r) return;
      if (!e) {
        delete this.eventListeners[t];
        return;
      }
      var n = r.indexOf(e);
      n >= 0 && r.splice(n, 1);
    }
  }, {
    key: "once",
    value: function once(t, e) {
      var _this = this;
      var _r = function r(n, i) {
        _this.off(t, _r), e(n, i);
      };
      this.on(t, _r);
    }
  }, {
    key: "emit",
    value: function emit(t, e) {
      var _this2 = this;
      var r = this.eventListeners[t];
      r && _toConsumableArray(r).forEach(function (n) {
        n(_this2, e);
      });
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      this.eventListeners = {};
    }
  }]);
}();
var ge = /*#__PURE__*/function () {
  function ge() {
    _classCallCheck(this, ge);
  }
  return _createClass(ge, null, [{
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
function j(s, t, e) {
  var r = s.createShader(t);
  if (!r) throw new Error();
  if (s.shaderSource(r, e), s.compileShader(r), s.getShaderParameter(r, s.COMPILE_STATUS)) return r;
  console.log(s.getShaderInfoLog(r)), s.deleteShader(r);
}
function me(s, t, e) {
  var r = s.createProgram();
  if (!r) throw new Error();
  if (s.attachShader(r, t), s.attachShader(r, e), s.linkProgram(r), s.getProgramParameter(r, s.LINK_STATUS)) return r;
  console.log(s.getProgramInfoLog(r)), s.deleteProgram(r);
}
function pe(s) {
  return self.WebGL2RenderingContext && s instanceof self.WebGL2RenderingContext;
}
var ie = /*#__PURE__*/function (_ge) {
  function ie(e) {
    var _this3;
    _classCallCheck(this, ie);
    _this3 = _callSuper(this, ie);
    a(_this3, "boundBufferCollection", null);
    a(_this3, "buffersBound", !1);
    a(_this3, "program");
    a(_this3, "vao");
    a(_this3, "renderer");
    a(_this3, "glw");
    a(_this3, "attributeBuffers");
    a(_this3, "attributeLocations");
    a(_this3, "attributeNames");
    a(_this3, "uniformLocations");
    a(_this3, "uniformTypes");
    a(_this3, "supportsIndexedTextures");
    var r = _this3.renderer = e.renderer,
      n = _this3.glw = _this3.renderer.glw;
    _this3.supportsIndexedTextures = e.supportsIndexedTextures || !1;
    var i = n.isWebGl2(),
      o = i && e.webgl2Extensions || !i && e.webgl1Extensions || [],
      h = i ? "2.0" : "1.0";
    o.forEach(function (T) {
      if (!n.getExtension(T)) throw new Error('Shader "'.concat(_this3.constructor.name, '" requires extension "').concat(T, '" for WebGL ').concat(h, " but wasn't found"));
    });
    var c = e.shaderSources || _this3.constructor.shaderSources;
    if (c) i && c != null && c.webGl2 && (c.fragment = c.webGl2.fragment, c.vertex = c.webGl2.vertex, delete c.webGl2);else throw new Error('Shader "'.concat(_this3.constructor.name, '" is missing shaderSources.'));
    var f = r.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS,
      l = c.vertex instanceof Function ? c.vertex(f) : c.vertex,
      d = c.fragment instanceof Function ? c.fragment(f) : c.fragment,
      E = j(n, n.VERTEX_SHADER, l),
      x = j(n, n.FRAGMENT_SHADER, d);
    if (!E || !x) throw new Error();
    var _ = me(n, E, x);
    if (!_) throw new Error();
    if (_this3.program = _, i) {
      var T = n.createVertexArray();
      if (!T) throw new Error();
      _this3.vao = T, n.bindVertexArray(_this3.vao);
    }
    _this3.attributeLocations = {}, _this3.attributeBuffers = {}, _this3.attributeNames = [], _toConsumableArray(e.attributes).forEach(function (T) {
      var R = n.getAttribLocation(_this3.program, T);
      if (R < 0) throw new Error("".concat(_this3.constructor.name, ': Vertex shader must have an attribute "').concat(T, '"!'));
      var A = n.createBuffer();
      if (!A) throw new Error("".concat(_this3.constructor.name, ': Could not create buffer for attribute "').concat(T, '"'));
      _this3.attributeLocations[T] = R, _this3.attributeBuffers[T] = A, _this3.attributeNames.push(T);
    }), _this3.uniformLocations = {}, _this3.uniformTypes = {}, e.uniforms.forEach(function (T) {
      var R = n.getUniformLocation(_this3.program, T.name);
      if (_this3.uniformTypes[T.name] = T.uniform, !R) {
        console.warn('Shader "'.concat(_this3.constructor.name, '" could not get uniform location for "').concat(T.name, '"'));
        return;
      }
      _this3.uniformLocations[T.name] = R;
    });
    return _this3;
  }
  _inherits(ie, _ge);
  return _createClass(ie, [{
    key: "bindBufferAttribute",
    value: function bindBufferAttribute(e, r, n) {
      var i = this.glw;
      i.enableVertexAttribArray(e), i.vertexAttribPointer(r, e, n.size, n.type, n.normalized, n.stride, n.offset);
    }
  }, {
    key: "disableAttribute",
    value: function disableAttribute(e) {
      this.glw.disableVertexAttribArray(e);
    }
  }, {
    key: "disableAttributes",
    value: function disableAttributes() {
      for (var e in this.attributeLocations) this.disableAttribute(this.attributeLocations[e]);
      this.boundBufferCollection = null;
    }
  }, {
    key: "canBatchShaderProps",
    value: function canBatchShaderProps(e, r) {
      return !1;
    }
  }, {
    key: "bindRenderOp",
    value: function bindRenderOp(e, r) {
      this.bindBufferCollection(e.buffers), e.textures.length > 0 && this.bindTextures(e.textures);
      var n = e.glw,
        i = e.parentHasRenderTexture,
        o = e.renderToTexture;
      if (!(o && i)) {
        if (i) {
          var _ref = e.framebufferDimensions || {},
            h = _ref.width,
            c = _ref.height;
          this.setUniform("u_pixelRatio", 1), this.setUniform("u_resolution", new Float32Array([h != null ? h : 0, c != null ? c : 0]));
        } else this.setUniform("u_pixelRatio", e.options.pixelRatio), this.setUniform("u_resolution", new Float32Array([n.canvas.width, n.canvas.height]));
        if (r) {
          if (V(r, "$dimensions")) {
            var _h = r.$dimensions;
            _h || (_h = e.dimensions), this.setUniform("u_dimensions", [_h.width, _h.height]);
          }
          if (V(r, "$alpha")) {
            var _h2 = r.$alpha;
            _h2 || (_h2 = e.alpha), this.setUniform("u_alpha", _h2);
          }
          this.bindProps(r);
        }
      }
    }
  }, {
    key: "setUniform",
    value: function setUniform(e) {
      var _this$glw;
      for (var _len = arguments.length, r = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        r[_key - 1] = arguments[_key];
      }
      (_this$glw = this.glw).setUniform.apply(_this$glw, [this.uniformTypes[e], this.uniformLocations[e]].concat(r));
    }
  }, {
    key: "bindBufferCollection",
    value: function bindBufferCollection(e) {
      if (this.boundBufferCollection !== e) {
        for (var r in this.attributeLocations) {
          var n = e.getBuffer(r),
            i = e.getAttributeInfo(r);
          g(n, 'Buffer for "'.concat(r, '" not found')), g(i), this.bindBufferAttribute(this.attributeLocations[r], n, i);
        }
        this.boundBufferCollection = e;
      }
    }
  }, {
    key: "bindProps",
    value: function bindProps(e) {}
  }, {
    key: "bindTextures",
    value: function bindTextures(e) {}
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
}(ge);
a(ie, "shaderSources");
var G = /*#__PURE__*/function (_ne) {
  function G(e) {
    var _this4;
    _classCallCheck(this, G);
    _this4 = _callSuper(this, G);
    a(_this4, "txManager");
    a(_this4, "dimensions", null);
    a(_this4, "error", null);
    a(_this4, "state", "freed");
    a(_this4, "renderableOwners", new Set());
    _this4.txManager = e;
    return _this4;
  }
  _inherits(G, _ne);
  return _createClass(G, [{
    key: "setRenderableOwner",
    value: function setRenderableOwner(e, r) {
      r ? this.renderableOwners.add(e) : this.renderableOwners["delete"](e);
    }
  }, {
    key: "renderable",
    get: function get() {
      return this.renderableOwners.size > 0;
    }
  }, {
    key: "setState",
    value: function setState(e) {
      if (this.state !== e) {
        for (var _len2 = arguments.length, r = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          r[_key2 - 1] = arguments[_key2];
        }
        if (this.state = e, e === "loaded") {
          var n = r;
          this.dimensions = n[0];
        } else if (e === "failed") {
          var _n = r;
          this.error = _n[0];
        }
        this.emit.apply(this, [e].concat(r));
      }
    }
  }], [{
    key: "makeCacheKey",
    value: function makeCacheKey(e) {
      return !1;
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      return {};
    }
  }]);
}(ne);
var Ie = function Ie(s) {
    var t = s >>> 24,
      e = s >>> 16 & 255,
      r = s >>> 8 & 255,
      n = s & 255;
    return [t / 255, e / 255, r / 255, n / 255];
  },
  Ke = function Ke(s) {
    var t = s >>> 24,
      e = s >>> 16 & 255,
      r = s >>> 8 & 255,
      n = s & 255;
    return [t, e, r, n];
  };
function Ze(s) {
  return (s & 255) / 255;
}
function Qe(s) {
  var t = Math.floor(s[0] * 255),
    e = Math.floor(s[1] * 255),
    r = Math.floor(s[2] * 255),
    n = Math.floor(s[3] * 255);
  return "rgba(".concat(t, ",").concat(e, ",").concat(r, ",").concat(n.toFixed(4), ")");
}
function J(s, t, e, r, n) {
  return n ? (n.x1 = s, n.y1 = t, n.x2 = e, n.y2 = r, n) : {
    x1: s,
    y1: t,
    x2: e,
    y2: r
  };
}
function je(s, t, e) {
  var r = J(Math.max(s.x1, t.x1), Math.max(s.y1, t.y1), Math.min(s.x2, t.x2), Math.min(s.y2, t.y2), e);
  return r.x1 < r.x2 && r.y1 < r.y2 ? r : J(0, 0, 0, 0, r);
}
function Je(s, t) {
  return s.x1 < t.x2 && s.x2 > t.x1 && s.y1 < t.y2 && s.y2 > t.y1;
}
function et(s, t) {
  return t ? (t.x = s.x1, t.y = s.y1, t.width = s.x2 - s.x1, t.height = s.y2 - s.y1, t) : {
    x: s.x1,
    y: s.y1,
    width: s.x2 - s.x1,
    height: s.y2 - s.y1
  };
}
function tt(s, t, e) {
  var r = Math.max(s.x, t.x),
    n = Math.max(s.y, t.y),
    i = Math.min(s.x + s.width, t.x + t.width) - r,
    o = Math.min(s.y + s.height, t.y + t.height) - n;
  return i > 0 && o > 0 ? e ? (e.x = r, e.y = n, e.width = i, e.height = o, e) : {
    x: r,
    y: n,
    width: i,
    height: o
  } : e ? (e.x = 0, e.y = 0, e.width = 0, e.height = 0, e) : {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
}
function rt(s, t) {
  return t ? (t.x = s.x, t.y = s.y, t.width = s.width, t.height = s.height, t) : {
    x: s.x,
    y: s.y,
    width: s.width,
    height: s.height
  };
}
function Se(s, t) {
  return s === t ? !0 : s === null || t === null ? !1 : s.x === t.x && s.y === t.y && s.width === t.width && s.height === t.height;
}
function st(s, t) {
  return s.x1 <= t.x2 && s.y1 <= t.y2 && s.x2 >= t.x1 && s.y2 >= t.y1;
}
function nt(s) {
  return s.x1 < s.x2 && s.y1 < s.y2;
}
var Me = /*#__PURE__*/function (_ne2) {
  function Me(e, r) {
    var _this5;
    _classCallCheck(this, Me);
    _this5 = _callSuper(this, Me);
    a(_this5, "fontFamily");
    a(_this5, "descriptors");
    a(_this5, "loaded", !1);
    _this5.fontFamily = e, _this5.descriptors = _objectSpread({
      style: "normal",
      weight: "normal",
      stretch: "normal"
    }, r);
    return _this5;
  }
  _inherits(Me, _ne2);
  return _createClass(Me, null, [{
    key: "convertToCssFontFaceDescriptors",
    value: function convertToCssFontFaceDescriptors(e) {
      return {
        style: e.style,
        weight: typeof e.weight == "number" ? "".concat(e.weight) : e.weight,
        stretch: e.stretch,
        unicodeRange: e.unicodeRange,
        variant: e.variant,
        featureSettings: e.featureSettings,
        display: e.display
      };
    }
  }]);
}(ne);
var y = /*#__PURE__*/function (_G) {
  function y(e, r) {
    var _this6;
    _classCallCheck(this, y);
    _this6 = _callSuper(this, y, [e]);
    a(_this6, "props");
    _this6.props = y.resolveDefaults(r || {});
    return _this6;
  }
  _inherits(y, _G);
  return _createClass(y, [{
    key: "color",
    get: function get() {
      return this.props.color;
    },
    set: function set(e) {
      this.props.color = e;
    }
  }, {
    key: "getTextureData",
    value: function () {
      var _getTextureData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var e, r;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e = new Uint32Array([this.color]), r = new Uint8ClampedArray(e.buffer);
              return _context.abrupt("return", {
                data: new ImageData(r, 1, 1),
                premultiplyAlpha: !0
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getTextureData() {
        return _getTextureData.apply(this, arguments);
      }
      return getTextureData;
    }()
  }], [{
    key: "makeCacheKey",
    value: function makeCacheKey(e) {
      var r = y.resolveDefaults(e);
      return "ColorTexture,".concat(r.color);
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      return {
        color: e.color || 4294967295
      };
    }
  }]);
}(G);
a(y, "z$__type__Props");
var Y = y;
var be = /*#__PURE__*/_createClass(function be(t, e) {
  _classCallCheck(this, be);
  a(this, "memManager");
  a(this, "textureSource");
  this.memManager = t, this.textureSource = e;
});
var Ne = /*#__PURE__*/_createClass(function Ne(t) {
  _classCallCheck(this, Ne);
  a(this, "options");
  a(this, "mode");
  a(this, "stage");
  a(this, "txManager");
  a(this, "txMemManager");
  a(this, "shManager");
  a(this, "rttNodes", []);
  this.options = t, this.stage = t.stage, this.txManager = t.txManager, this.txMemManager = t.txMemManager, this.shManager = t.shManager;
});
var Le = /*#__PURE__*/_createClass(function Le() {
  _classCallCheck(this, Le);
});
var ye = /*#__PURE__*/function (_Le) {
  function ye(e, r, n, i, o, h, c, f, l, d, E, x, _) {
    var _this7;
    _classCallCheck(this, ye);
    _this7 = _callSuper(this, ye);
    a(_this7, "glw");
    a(_this7, "options");
    a(_this7, "buffers");
    a(_this7, "shader");
    a(_this7, "shaderProps");
    a(_this7, "alpha");
    a(_this7, "clippingRect");
    a(_this7, "dimensions");
    a(_this7, "bufferIdx");
    a(_this7, "zIndex");
    a(_this7, "renderToTexture");
    a(_this7, "parentHasRenderTexture");
    a(_this7, "framebufferDimensions");
    a(_this7, "length", 0);
    a(_this7, "numQuads", 0);
    a(_this7, "textures", []);
    a(_this7, "maxTextures");
    _this7.glw = e, _this7.options = r, _this7.buffers = n, _this7.shader = i, _this7.shaderProps = o, _this7.alpha = h, _this7.clippingRect = c, _this7.dimensions = f, _this7.bufferIdx = l, _this7.zIndex = d, _this7.renderToTexture = E, _this7.parentHasRenderTexture = x, _this7.framebufferDimensions = _, _this7.maxTextures = i.supportsIndexedTextures ? e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) : 1;
    return _this7;
  }
  _inherits(ye, _Le);
  return _createClass(ye, [{
    key: "addTexture",
    value: function addTexture(e) {
      var r = this.textures,
        n = this.maxTextures,
        i = r.findIndex(function (h) {
          return h === e;
        });
      if (i !== -1) return i;
      var o = r.length;
      return o >= n ? 4294967295 : (this.textures.push(e), o);
    }
  }, {
    key: "draw",
    value: function draw() {
      var e = this.glw,
        r = this.shader,
        n = this.shaderProps,
        i = this.options,
        o = i.shManager;
      o.useShader(r), r.bindRenderOp(this, n);
      var h = this.bufferIdx / 24 * 6 * 2;
      if (this.clippingRect.valid) {
        var _this$clippingRect = this.clippingRect,
          c = _this$clippingRect.x,
          f = _this$clippingRect.y,
          l = _this$clippingRect.width,
          d = _this$clippingRect.height,
          E = i.pixelRatio,
          x = i.canvas.height,
          _ = Math.round(c * E),
          T = Math.round(l * E),
          R = Math.round(d * E),
          A = Math.round(x - R - f * E);
        e.setScissorTest(!0), e.scissor(_, A, T, R);
      } else e.setScissorTest(!1);
      e.drawElements(e.TRIANGLES, 6 * this.numQuads, e.UNSIGNED_SHORT, h);
    }
  }]);
}(Le);
function we(s) {
  var t = {
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
  return Object.keys(t).forEach(function (r) {
    t[r] = s.getParameter(s[r]);
  }), t;
}
function Pe(s) {
  var t = {
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
  return Object.keys(t).forEach(function (r) {
    t[r] = s.getExtension(r);
  }), t;
}
function Ue(s, t) {
  var e = ~~(t / 80),
    r = new Uint16Array(e * 6);
  for (var i = 0, o = 0; i < e; i += 6, o += 4) r[i] = o, r[i + 1] = o + 1, r[i + 2] = o + 2, r[i + 3] = o + 2, r[i + 4] = o + 1, r[i + 5] = o + 3;
  var n = s.createBuffer();
  s.elementArrayBufferData(n, r, s.STATIC_DRAW);
}
function Be(s) {
  return s !== null && _typeof(s) == "object" && s.constructor && s.constructor.name === "HTMLImageElement";
}
var ee = function ee(s) {
    return s && !(s & s - 1);
  },
  ae = function ae(s, t, e, r) {
    var n = 3 * s,
      i = 3 * (e - s) - n,
      o = 1 - n - i,
      h = 3 * t,
      c = 3 * (r - t) - h,
      f = 1 - h - c;
    return function (l) {
      if (l >= 1) return 1;
      if (l <= 0) return 0;
      var d = .5,
        E,
        x,
        _;
      for (var A = 0; A < 20; A++) {
        if (E = d * (d * (d * o + i) + n), _ = l - E, _ > -1e-8 && _ < 1e-8) return d * (d * (d * f + c) + h);
        if (x = d * (d * (3 * o) + 2 * i) + n, x > 1e-10 && x < 1e-10) break;
        d += _ / x;
      }
      var T = 0,
        R = 1;
      for (var _A = 0; _A < 20; _A++) {
        if (d = .5 * (T + R), E = d * (d * (d * o + i) + n), _ = l - E, _ > -1e-8 && _ < 1e-8) return d * (d * (d * f + c) + h);
        _ < 0 ? R = d : T = d;
      }
    };
  },
  P = {},
  te = {
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
  U = function U(s) {
    return s;
  },
  Ce = function Ce(s) {
    var t = /-?\d*\.?\d+/g,
      e = s.match(t);
    if (e) {
      var _e2 = _slicedToArray(e, 4),
        r = _e2[0],
        n = _e2[1],
        i = _e2[2],
        o = _e2[3],
        h = parseFloat(r || "0.42"),
        c = parseFloat(n || "0"),
        f = parseFloat(i || "1"),
        l = parseFloat(o || "1"),
        d = ae(h, c, f, l);
      return P[s] = d, d;
    }
    return console.warn("Unknown cubic-bezier timing: " + s), U;
  },
  it = function it(s) {
    if (s === "") return U;
    if (P[s] !== void 0) return P[s] || U;
    if (s === "linear") return function (t) {
      return t;
    };
    if (s === "step-start") return function () {
      return 1;
    };
    if (s === "step-end") return function (t) {
      return t === 1 ? 1 : 0;
    };
    if (te[s] !== void 0) {
      var _te$s = _slicedToArray(te[s], 4),
        t = _te$s[0],
        _e3 = _te$s[1],
        r = _te$s[2],
        n = _te$s[3],
        i = ae(t, _e3, r, n);
      return P[s] = i, i;
    }
    return s.startsWith("cubic-bezier") ? Ce(s) : (console.warn("Unknown timing function: " + s), U);
  };
Math.hypot || (Math.hypot = function () {
  for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    s[_key3] = arguments[_key3];
  }
  var t = 0,
    e = s.length;
  for (; e--;) t += s[e] * s[e];
  return Math.sqrt(t);
});
var H = new Uint8Array([0, 0, 0, 0]);
var B = /*#__PURE__*/function (_be) {
  function B(e, r, n) {
    var _this8;
    _classCallCheck(this, B);
    _this8 = _callSuper(this, B, [r, n]);
    a(_this8, "glw");
    a(_this8, "_nativeCtxTexture", null);
    a(_this8, "_state", "freed");
    a(_this8, "_w", 0);
    a(_this8, "_h", 0);
    _this8.glw = e;
    return _this8;
  }
  _inherits(B, _be);
  return _createClass(B, [{
    key: "ctxTexture",
    get: function get() {
      return this._state === "freed" && this.load(), g(this._nativeCtxTexture), this._nativeCtxTexture;
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
      this._state === "loading" || this._state === "loaded" || (this._state = "loading", this.textureSource.setState("loading"), this._nativeCtxTexture = this.createNativeCtxTexture(), this.onLoadRequest().then(function (_ref2) {
        var e = _ref2.width,
          r = _ref2.height;
        _this9._state !== "freed" && (_this9._state = "loaded", _this9._w = e, _this9._h = r, _this9.textureSource.setState("loaded", {
          width: e,
          height: r
        }));
      })["catch"](function (e) {
        _this9._state = "failed", _this9.textureSource.setState("failed", e), console.error(e);
      }));
    }
  }, {
    key: "onLoadRequest",
    value: function () {
      var _onLoadRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var h, c, e, r, n, i, o, f, _n$data, _f, _n$data$width, l, _n$data$height, d, E, x, _;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e = this.glw, r = this.memManager;
              e.texImage2D(0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null), r.setTextureMemUse(this, H.byteLength);
              _context2.next = 4;
              return (h = this.textureSource) == null ? void 0 : h.getTextureData();
            case 4:
              n = _context2.sent;
              if (this._nativeCtxTexture) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", (g(this._state === "freed"), {
                width: 0,
                height: 0
              }));
            case 7:
              i = 0, o = 0;
              if (g(this._nativeCtxTexture), e.activeTexture(0), n.data instanceof ImageBitmap || n.data instanceof ImageData || Be(n.data)) {
                f = n.data;
                i = f.width, o = f.height, e.bindTexture(this._nativeCtxTexture), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!n.premultiplyAlpha), e.texImage2D(0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, f), r.setTextureMemUse(this, i * o * 4), (e.isWebGl2() || ee(i) && ee(o)) && e.generateMipmap();
              } else if (n.data === null) i = 0, o = 0, e.bindTexture(this._nativeCtxTexture), e.texImage2D(0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, H), r.setTextureMemUse(this, H.byteLength);else if ("mipmaps" in n.data && n.data.mipmaps) {
                _n$data = n.data, _f = _n$data.mipmaps, _n$data$width = _n$data.width, l = _n$data$width === void 0 ? 0 : _n$data$width, _n$data$height = _n$data.height, d = _n$data$height === void 0 ? 0 : _n$data$height, E = _n$data.type, x = _n$data.glInternalFormat, _ = E === "ktx" ? new DataView((c = _f[0]) != null ? c : new ArrayBuffer(0)) : _f[0];
                e.bindTexture(this._nativeCtxTexture), e.compressedTexImage2D(0, x, l, d, 0, _), e.texParameteri(e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_MIN_FILTER, e.LINEAR), r.setTextureMemUse(this, _.byteLength);
              } else console.error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned", n);
              return _context2.abrupt("return", {
                width: i,
                height: o
              });
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function onLoadRequest() {
        return _onLoadRequest.apply(this, arguments);
      }
      return onLoadRequest;
    }()
  }, {
    key: "free",
    value: function free() {
      if (this._state === "freed" || (this._state = "freed", this.textureSource.setState("freed"), this._w = 0, this._h = 0, !this._nativeCtxTexture)) return;
      var e = this.glw,
        r = this.memManager;
      e.deleteTexture(this._nativeCtxTexture), r.setTextureMemUse(this, 0), this._nativeCtxTexture = null;
    }
  }, {
    key: "createNativeCtxTexture",
    value: function createNativeCtxTexture() {
      var e = this.glw,
        r = e.createTexture();
      if (!r) throw new Error("Could not create WebGL Texture");
      return e.activeTexture(0), e.bindTexture(r), e.texParameteri(e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), r;
    }
  }]);
}(be);
var D = /*#__PURE__*/function (_G2) {
  function D(e, r) {
    var _this10;
    _classCallCheck(this, D);
    _this10 = _callSuper(this, D, [e]);
    a(_this10, "props");
    a(_this10, "parentTexture");
    a(_this10, "onParentTxLoaded", function () {
      _this10.setState("loaded", {
        width: _this10.props.width,
        height: _this10.props.height
      });
    });
    a(_this10, "onParentTxFailed", function (e, r) {
      _this10.setState("failed", r);
    });
    _this10.parentTexture = _this10.txManager.loadTexture(r.texture.txType, r.texture.props, r.texture.options), _this10.props = D.resolveDefaults(r || {}), queueMicrotask(function () {
      var n = _this10.parentTexture;
      n.state === "loaded" ? _this10.onParentTxLoaded(n, n.dimensions) : n.state === "failed" && _this10.onParentTxFailed(n, n.error), n.on("loaded", _this10.onParentTxLoaded), n.on("failed", _this10.onParentTxFailed);
    });
    return _this10;
  }
  _inherits(D, _G2);
  return _createClass(D, [{
    key: "getTextureData",
    value: function () {
      var _getTextureData2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", {
                data: this.props
              });
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getTextureData() {
        return _getTextureData2.apply(this, arguments);
      }
      return getTextureData;
    }()
  }], [{
    key: "makeCacheKey",
    value: function makeCacheKey(e) {
      return !1;
    }
  }, {
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      return {
        texture: e.texture,
        x: e.x || 0,
        y: e.y || 0,
        width: e.width || 0,
        height: e.height || 0
      };
    }
  }]);
}(G);
a(D, "z$__type__Props");
var C = D;
var De = /*#__PURE__*/function (_B) {
  function De(t, e, r) {
    _classCallCheck(this, De);
    return _callSuper(this, De, [t, e, r]);
  }
  _inherits(De, _B);
  return _createClass(De, [{
    key: "onLoadRequest",
    value: function () {
      var _onLoadRequest2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var e, r, t;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.textureSource.getTextureData();
            case 2:
              t = _context4.sent;
              return _context4.abrupt("return", {
                width: ((e = t.data) == null ? void 0 : e.width) || 0,
                height: ((r = t.data) == null ? void 0 : r.height) || 0
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function onLoadRequest() {
        return _onLoadRequest2.apply(this, arguments);
      }
      return onLoadRequest;
    }()
  }]);
}(B);
var Oe = /*#__PURE__*/function () {
  function Oe(t) {
    _classCallCheck(this, Oe);
    a(this, "config");
    this.config = t;
  }
  return _createClass(Oe, [{
    key: "getBuffer",
    value: function getBuffer(t) {
      var e;
      return (e = this.config.find(function (r) {
        return r.attributes[t];
      })) == null ? void 0 : e.buffer;
    }
  }, {
    key: "getAttributeInfo",
    value: function getAttributeInfo(t) {
      var e;
      return (e = this.config.find(function (r) {
        return r.attributes[t];
      })) == null ? void 0 : e.attributes[t];
    }
  }]);
}();
var Ge = /*#__PURE__*/function () {
  function Ge(t) {
    var _this11 = this;
    _classCallCheck(this, Ge);
    a(this, "gl");
    a(this, "activeTextureUnit", 0);
    a(this, "texture2dUnits");
    a(this, "texture2dParams", new WeakMap());
    a(this, "scissorEnabled");
    a(this, "scissorX");
    a(this, "scissorY");
    a(this, "scissorWidth");
    a(this, "scissorHeight");
    a(this, "blendEnabled");
    a(this, "blendSrcRgb");
    a(this, "blendDstRgb");
    a(this, "blendSrcAlpha");
    a(this, "blendDstAlpha");
    a(this, "boundArrayBuffer");
    a(this, "boundElementArrayBuffer");
    a(this, "curProgram");
    a(this, "programUniforms", new WeakMap());
    a(this, "canvas");
    a(this, "MAX_RENDERBUFFER_SIZE");
    a(this, "MAX_TEXTURE_SIZE");
    a(this, "MAX_VIEWPORT_DIMS");
    a(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS");
    a(this, "MAX_TEXTURE_IMAGE_UNITS");
    a(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS");
    a(this, "MAX_VERTEX_ATTRIBS");
    a(this, "MAX_VARYING_VECTORS");
    a(this, "MAX_VERTEX_UNIFORM_VECTORS");
    a(this, "MAX_FRAGMENT_UNIFORM_VECTORS");
    a(this, "TEXTURE_MAG_FILTER");
    a(this, "TEXTURE_MIN_FILTER");
    a(this, "TEXTURE_WRAP_S");
    a(this, "TEXTURE_WRAP_T");
    a(this, "LINEAR");
    a(this, "CLAMP_TO_EDGE");
    a(this, "RGBA");
    a(this, "UNSIGNED_BYTE");
    a(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL");
    a(this, "UNPACK_FLIP_Y_WEBGL");
    a(this, "FLOAT");
    a(this, "TRIANGLES");
    a(this, "UNSIGNED_SHORT");
    a(this, "ONE");
    a(this, "ONE_MINUS_SRC_ALPHA");
    a(this, "VERTEX_SHADER");
    a(this, "FRAGMENT_SHADER");
    a(this, "STATIC_DRAW");
    a(this, "COMPILE_STATUS");
    a(this, "LINK_STATUS");
    a(this, "DYNAMIC_DRAW");
    a(this, "COLOR_ATTACHMENT0");
    this.gl = t, this.activeTextureUnit = t.getParameter(t.ACTIVE_TEXTURE) - t.TEXTURE0;
    var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.texture2dUnits = new Array(e).fill(void 0).map(function (n, i) {
      return _this11.activeTexture(i), t.getParameter(t.TEXTURE_BINDING_2D);
    }), this.activeTexture(this.activeTextureUnit), this.scissorEnabled = t.isEnabled(t.SCISSOR_TEST);
    var r = t.getParameter(t.SCISSOR_BOX);
    this.scissorX = r[0], this.scissorY = r[1], this.scissorWidth = r[2], this.scissorHeight = r[3], this.blendEnabled = t.isEnabled(t.BLEND), this.blendSrcRgb = t.getParameter(t.BLEND_SRC_RGB), this.blendDstRgb = t.getParameter(t.BLEND_DST_RGB), this.blendSrcAlpha = t.getParameter(t.BLEND_SRC_ALPHA), this.blendDstAlpha = t.getParameter(t.BLEND_DST_ALPHA), this.boundArrayBuffer = t.getParameter(t.ARRAY_BUFFER_BINDING), this.boundElementArrayBuffer = t.getParameter(t.ELEMENT_ARRAY_BUFFER_BINDING), this.curProgram = t.getParameter(t.CURRENT_PROGRAM), this.canvas = t.canvas, this.MAX_RENDERBUFFER_SIZE = t.MAX_RENDERBUFFER_SIZE, this.MAX_TEXTURE_SIZE = t.MAX_TEXTURE_SIZE, this.MAX_VIEWPORT_DIMS = t.MAX_VIEWPORT_DIMS, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.MAX_VERTEX_TEXTURE_IMAGE_UNITS, this.MAX_TEXTURE_IMAGE_UNITS = t.MAX_TEXTURE_IMAGE_UNITS, this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS, this.MAX_VERTEX_ATTRIBS = t.MAX_VERTEX_ATTRIBS, this.MAX_VARYING_VECTORS = t.MAX_VARYING_VECTORS, this.MAX_VERTEX_UNIFORM_VECTORS = t.MAX_VERTEX_UNIFORM_VECTORS, this.MAX_FRAGMENT_UNIFORM_VECTORS = t.MAX_FRAGMENT_UNIFORM_VECTORS, this.TEXTURE_MAG_FILTER = t.TEXTURE_MAG_FILTER, this.TEXTURE_MIN_FILTER = t.TEXTURE_MIN_FILTER, this.TEXTURE_WRAP_S = t.TEXTURE_WRAP_S, this.TEXTURE_WRAP_T = t.TEXTURE_WRAP_T, this.LINEAR = t.LINEAR, this.CLAMP_TO_EDGE = t.CLAMP_TO_EDGE, this.RGBA = t.RGBA, this.UNSIGNED_BYTE = t.UNSIGNED_BYTE, this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.UNPACK_FLIP_Y_WEBGL = t.UNPACK_FLIP_Y_WEBGL, this.FLOAT = t.FLOAT, this.TRIANGLES = t.TRIANGLES, this.UNSIGNED_SHORT = t.UNSIGNED_SHORT, this.ONE = t.ONE, this.ONE_MINUS_SRC_ALPHA = t.ONE_MINUS_SRC_ALPHA, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.MAX_VERTEX_TEXTURE_IMAGE_UNITS, this.TRIANGLES = t.TRIANGLES, this.UNSIGNED_SHORT = t.UNSIGNED_SHORT, this.VERTEX_SHADER = t.VERTEX_SHADER, this.FRAGMENT_SHADER = t.FRAGMENT_SHADER, this.STATIC_DRAW = t.STATIC_DRAW, this.COMPILE_STATUS = t.COMPILE_STATUS, this.LINK_STATUS = t.LINK_STATUS, this.DYNAMIC_DRAW = t.DYNAMIC_DRAW, this.COLOR_ATTACHMENT0 = t.COLOR_ATTACHMENT0;
  }
  return _createClass(Ge, [{
    key: "isWebGl2",
    value: function isWebGl2() {
      return pe(this.gl);
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
        n = this.texture2dUnits;
      n[r] !== t && (n[r] = t, e.bindTexture(this.gl.TEXTURE_2D, t));
    }
  }, {
    key: "_getActiveTexture",
    value: function _getActiveTexture() {
      var t = this.activeTextureUnit,
        e = this.texture2dUnits;
      return e[t];
    }
  }, {
    key: "texParameteri",
    value: function texParameteri(t, e) {
      var r = this.gl,
        n = this.texture2dParams,
        i = this._getActiveTexture();
      if (!i) throw new Error("No active texture");
      var o = n.get(i);
      o || (o = {}, n.set(i, o)), o[t] !== e && (o[t] = e, r.texParameteri(r.TEXTURE_2D, t, e));
    }
  }, {
    key: "texImage2D",
    value: function texImage2D(t, e, r, n, i, o, h, c) {
      var f = this.gl;
      o ? f.texImage2D(f.TEXTURE_2D, t, e, r, n, i, o, h, c) : f.texImage2D(f.TEXTURE_2D, t, e, r, n, i);
    }
  }, {
    key: "compressedTexImage2D",
    value: function compressedTexImage2D(t, e, r, n, i, o) {
      var h = this.gl;
      h.compressedTexImage2D(h.TEXTURE_2D, t, e, r, n, i, o);
    }
  }, {
    key: "pixelStorei",
    value: function pixelStorei(t, e) {
      var r = this.gl;
      r.pixelStorei(t, e);
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
      var t = this.gl;
      return t.createTexture();
    }
  }, {
    key: "deleteTexture",
    value: function deleteTexture(t) {
      var e = this.gl;
      t && this.texture2dParams["delete"](t), e.deleteTexture(t);
    }
  }, {
    key: "viewport",
    value: function viewport(t, e, r, n) {
      var i = this.gl;
      i.viewport(t, e, r, n);
    }
  }, {
    key: "clearColor",
    value: function clearColor(t, e, r, n) {
      var i = this.gl;
      i.clearColor(t, e, r, n);
    }
  }, {
    key: "setScissorTest",
    value: function setScissorTest(t) {
      var e = this.gl,
        r = this.scissorEnabled;
      t !== r && (t ? e.enable(e.SCISSOR_TEST) : e.disable(e.SCISSOR_TEST), this.scissorEnabled = t);
    }
  }, {
    key: "scissor",
    value: function scissor(t, e, r, n) {
      var i = this.gl,
        o = this.scissorX,
        h = this.scissorY,
        c = this.scissorWidth,
        f = this.scissorHeight;
      (t !== o || e !== h || r !== c || n !== f) && (i.scissor(t, e, r, n), this.scissorX = t, this.scissorY = e, this.scissorWidth = r, this.scissorHeight = n);
    }
  }, {
    key: "setBlend",
    value: function setBlend(t) {
      var e = this.gl,
        r = this.blendEnabled;
      t !== r && (t ? e.enable(e.BLEND) : e.disable(e.BLEND), this.blendEnabled = t);
    }
  }, {
    key: "blendFunc",
    value: function blendFunc(t, e) {
      var r = this.gl,
        n = this.blendSrcRgb,
        i = this.blendDstRgb,
        o = this.blendSrcAlpha,
        h = this.blendDstAlpha;
      (t !== n || e !== i || t !== o || e !== h) && (r.blendFunc(t, e), this.blendSrcRgb = t, this.blendDstRgb = e, this.blendSrcAlpha = t, this.blendDstAlpha = e);
    }
  }, {
    key: "createBuffer",
    value: function createBuffer() {
      var t = this.gl;
      return t.createBuffer();
    }
  }, {
    key: "createFramebuffer",
    value: function createFramebuffer() {
      var t = this.gl;
      return t.createFramebuffer();
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
      var n = this.gl;
      n.framebufferTexture2D(n.FRAMEBUFFER, t, n.TEXTURE_2D, e, r);
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
      var n = this.gl,
        i = this.boundArrayBuffer;
      i !== t && (n.bindBuffer(n.ARRAY_BUFFER, t), this.boundArrayBuffer = t), n.bufferData(n.ARRAY_BUFFER, e, r);
    }
  }, {
    key: "elementArrayBufferData",
    value: function elementArrayBufferData(t, e, r) {
      var n = this.gl,
        i = this.boundElementArrayBuffer;
      i !== t && (n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t), this.boundElementArrayBuffer = t), n.bufferData(n.ELEMENT_ARRAY_BUFFER, e, r);
    }
  }, {
    key: "vertexAttribPointer",
    value: function vertexAttribPointer(t, e, r, n, i, o, h) {
      var c = this.gl,
        f = this.boundArrayBuffer;
      f !== t && (c.bindBuffer(c.ARRAY_BUFFER, t), this.boundArrayBuffer = t), c.vertexAttribPointer(e, r, n, i, o, h);
    }
  }, {
    key: "useProgram",
    value: function useProgram(t) {
      var e = this.gl,
        r = this.curProgram;
      r !== t && (e.useProgram(t), this.curProgram = t);
    }
  }, {
    key: "setUniform",
    value: function setUniform(t, e) {
      var n = this.gl,
        i = this.programUniforms;
      var o = i.get(this.curProgram);
      o || (o = new Map(), i.set(this.curProgram, o));
      var h = o.get(e);
      for (var _len4 = arguments.length, r = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        r[_key4 - 2] = arguments[_key4];
      }
      (!h || !Xe(h, r)) && (o.set(e, r), n[t].apply(n, [e].concat(r)));
    }
  }, {
    key: "getParameter",
    value: function getParameter(t) {
      var e = this.gl;
      return e.getParameter(t);
    }
  }, {
    key: "drawElements",
    value: function drawElements(t, e, r, n) {
      var i = this.gl;
      i.drawElements(t, e, r, n);
    }
  }, {
    key: "getExtension",
    value: function getExtension(t) {
      var e = this.gl;
      return e.getExtension(t);
    }
  }, {
    key: "createVertexArray",
    value: function createVertexArray() {
      var t = this.gl;
      return g(t instanceof WebGL2RenderingContext), t.createVertexArray();
    }
  }, {
    key: "bindVertexArray",
    value: function bindVertexArray(t) {
      var e = this.gl;
      g(e instanceof WebGL2RenderingContext), e.bindVertexArray(t);
    }
  }, {
    key: "getAttribLocation",
    value: function getAttribLocation(t, e) {
      var r = this.gl;
      return r.getAttribLocation(t, e);
    }
  }, {
    key: "getUniformLocation",
    value: function getUniformLocation(t, e) {
      var r = this.gl;
      return r.getUniformLocation(t, e);
    }
  }, {
    key: "enableVertexAttribArray",
    value: function enableVertexAttribArray(t) {
      var e = this.gl;
      e.enableVertexAttribArray(t);
    }
  }, {
    key: "disableVertexAttribArray",
    value: function disableVertexAttribArray(t) {
      var e = this.gl;
      e.disableVertexAttribArray(t);
    }
  }, {
    key: "createShader",
    value: function createShader(t) {
      var e = this.gl;
      return e.createShader(t);
    }
  }, {
    key: "compileShader",
    value: function compileShader(t) {
      var e = this.gl;
      e.compileShader(t);
    }
  }, {
    key: "attachShader",
    value: function attachShader(t, e) {
      var r = this.gl;
      r.attachShader(t, e);
    }
  }, {
    key: "linkProgram",
    value: function linkProgram(t) {
      var e = this.gl;
      e.linkProgram(t);
    }
  }, {
    key: "deleteProgram",
    value: function deleteProgram(t) {
      var e = this.gl;
      e.deleteProgram(t);
    }
  }, {
    key: "getShaderParameter",
    value: function getShaderParameter(t, e) {
      var r = this.gl;
      return r.getShaderParameter(t, e);
    }
  }, {
    key: "getShaderInfoLog",
    value: function getShaderInfoLog(t) {
      var e = this.gl;
      return e.getShaderInfoLog(t);
    }
  }, {
    key: "createProgram",
    value: function createProgram() {
      var t = this.gl;
      return t.createProgram();
    }
  }, {
    key: "getProgramParameter",
    value: function getProgramParameter(t, e) {
      var r = this.gl;
      return r.getProgramParameter(t, e);
    }
  }, {
    key: "getProgramInfoLog",
    value: function getProgramInfoLog(t) {
      var e = this.gl;
      return e.getProgramInfoLog(t);
    }
  }, {
    key: "shaderSource",
    value: function shaderSource(t, e) {
      var r = this.gl;
      r.shaderSource(t, e);
    }
  }, {
    key: "deleteShader",
    value: function deleteShader(t) {
      var e = this.gl;
      e.deleteShader(t);
    }
  }]);
}();
function Xe(s, t) {
  return s.length !== t.length ? !1 : s.every(function (e, r) {
    return Array.isArray(e) || e instanceof Float32Array ? !1 : e === t[r];
  });
}
var O = /*#__PURE__*/function (_G3) {
  function O(e, r) {
    var _this12;
    _classCallCheck(this, O);
    _this12 = _callSuper(this, O, [e]);
    a(_this12, "props");
    _this12.props = O.resolveDefaults(r || {});
    return _this12;
  }
  _inherits(O, _G3);
  return _createClass(O, [{
    key: "width",
    get: function get() {
      return this.props.width;
    },
    set: function set(e) {
      this.props.width = e;
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.height;
    },
    set: function set(e) {
      this.props.height = e;
    }
  }, {
    key: "getTextureData",
    value: function () {
      var _getTextureData3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", {
                data: null,
                premultiplyAlpha: null
              });
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function getTextureData() {
        return _getTextureData3.apply(this, arguments);
      }
      return getTextureData;
    }()
  }], [{
    key: "resolveDefaults",
    value: function resolveDefaults(e) {
      return {
        width: e.width || 256,
        height: e.height || 256
      };
    }
  }]);
}(G);
a(O, "z$__type__Props");
var k = O;
var re = /*#__PURE__*/function (_B2) {
  function re(e, r, n) {
    var _this13;
    _classCallCheck(this, re);
    _this13 = _callSuper(this, re, [e, r, n]);
    a(_this13, "framebuffer");
    var i = e.createFramebuffer();
    g(i, "Unable to create framebuffer"), _this13.framebuffer = i;
    return _this13;
  }
  _inherits(re, _B2);
  return _createClass(re, [{
    key: "onLoadRequest",
    value: function () {
      var _onLoadRequest3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var e, r, n, _this$textureSource, i, o;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              e = this.glw, r = this.memManager, n = this._nativeCtxTexture = this.createNativeCtxTexture(), _this$textureSource = this.textureSource, i = _this$textureSource.width, o = _this$textureSource.height;
              return _context6.abrupt("return", (e.texImage2D(0, e.RGBA, i, o, 0, e.RGBA, e.UNSIGNED_BYTE, null), r.setTextureMemUse(this, i * o * 4), e.bindFramebuffer(this.framebuffer), e.framebufferTexture2D(e.COLOR_ATTACHMENT0, n, 0), e.bindFramebuffer(null), {
                width: i,
                height: o
              }));
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function onLoadRequest() {
        return _onLoadRequest3.apply(this, arguments);
      }
      return onLoadRequest;
    }()
  }]);
}(B);
var Fe = 24;
var ve = /*#__PURE__*/function (_Ne) {
  function ve(e) {
    var _this14;
    _classCallCheck(this, ve);
    _this14 = _callSuper(this, ve, [e]);
    a(_this14, "glw");
    a(_this14, "system");
    a(_this14, "quadBuffer", new ArrayBuffer(1024 * 1024 * 4));
    a(_this14, "fQuadBuffer", new Float32Array(_this14.quadBuffer));
    a(_this14, "uiQuadBuffer", new Uint32Array(_this14.quadBuffer));
    a(_this14, "renderOps", []);
    a(_this14, "curBufferIdx", 0);
    a(_this14, "curRenderOp", null);
    a(_this14, "rttNodes", []);
    a(_this14, "activeRttNode", null);
    a(_this14, "defaultShader");
    a(_this14, "quadBufferCollection");
    a(_this14, "defaultTexture");
    a(_this14, "renderToTextureActive", !1);
    _this14.mode = "webgl";
    var r = e.canvas,
      n = e.clearColor,
      i = e.bufferMemory;
    _this14.defaultTexture = new Y(_this14.txManager), _this14.defaultTexture.setRenderableOwner(_this14, !0), _this14.defaultTexture.once("loaded", function () {
      _this14.stage.requestRender();
    });
    var o = Re(r, e.contextSpy),
      h = _this14.glw = new Ge(o),
      c = Ie(n);
    h.viewport(0, 0, r.width, r.height), h.clearColor(c[0], c[1], c[2], c[3]), h.setBlend(!0), h.blendFunc(h.ONE, h.ONE_MINUS_SRC_ALPHA), Ue(h, i), _this14.system = {
      parameters: we(_this14.glw),
      extensions: Pe(_this14.glw)
    }, _this14.shManager.renderer = _this14, _this14.defaultShader = _this14.shManager.loadShader("DefaultShader").shader;
    var f = h.createBuffer();
    g(f);
    var l = 6 * Float32Array.BYTES_PER_ELEMENT;
    _this14.quadBufferCollection = new Oe([{
      buffer: f,
      attributes: {
        a_position: {
          name: "a_position",
          size: 2,
          type: h.FLOAT,
          normalized: !1,
          stride: l,
          offset: 0
        },
        a_textureCoordinate: {
          name: "a_textureCoordinate",
          size: 2,
          type: h.FLOAT,
          normalized: !1,
          stride: l,
          offset: 2 * Float32Array.BYTES_PER_ELEMENT
        },
        a_color: {
          name: "a_color",
          size: 4,
          type: h.UNSIGNED_BYTE,
          normalized: !0,
          stride: l,
          offset: 4 * Float32Array.BYTES_PER_ELEMENT
        },
        a_textureIndex: {
          name: "a_textureIndex",
          size: 1,
          type: h.FLOAT,
          normalized: !1,
          stride: l,
          offset: 5 * Float32Array.BYTES_PER_ELEMENT
        }
      }
    }]);
    return _this14;
  }
  _inherits(ve, _Ne);
  return _createClass(ve, [{
    key: "reset",
    value: function reset() {
      var e = this.glw;
      this.curBufferIdx = 0, this.curRenderOp = null, this.renderOps.length = 0, e.setScissorTest(!1), e.clear();
    }
  }, {
    key: "getShaderManager",
    value: function getShaderManager() {
      return this.shManager;
    }
  }, {
    key: "createCtxTexture",
    value: function createCtxTexture(e) {
      return e instanceof C ? new De(this.glw, this.txMemManager, e) : e instanceof k ? new re(this.glw, this.txMemManager, e) : new B(this.glw, this.txMemManager, e);
    }
  }, {
    key: "addQuad",
    value: function addQuad(e) {
      var _ref4, _ref5;
      var q, K;
      var r = this.fQuadBuffer,
        n = this.uiQuadBuffer,
        i = e.width,
        o = e.height,
        h = e.colorTl,
        c = e.colorTr,
        f = e.colorBl,
        l = e.colorBr,
        d = e.textureOptions,
        E = e.shader,
        x = e.shaderProps,
        _ = e.alpha,
        T = e.clippingRect,
        R = e.tx,
        A = e.ty,
        X = e.ta,
        F = e.tb,
        v = e.tc,
        W = e.td,
        oe = e.rtt,
        he = e.parentHasRenderTexture,
        ce = e.framebufferDimensions;
      var m = e.texture;
      if (x && V(x, "$dimensions")) {
        var N = x.$dimensions;
        N.width = i, N.height = o;
      }
      m = m != null ? m : this.defaultTexture, g(m instanceof G, "Invalid texture type");
      var u = this.curBufferIdx,
        L = this.curRenderOp;
      var ue = {
          width: i,
          height: o
        },
        $ = E || this.defaultShader;
      g($ instanceof ie), this.reuseRenderOp(e) || (this.newRenderOp($, x, _, ue, T, u, oe, he, ce), L = this.curRenderOp, g(L));
      var fe = (q = d == null ? void 0 : d.flipX) != null ? q : !1,
        de = (K = d == null ? void 0 : d.flipY) != null ? K : !1;
      var p = 0,
        I = 0,
        M = 1,
        b = 1;
      if (m instanceof C) {
        var _m$props = m.props,
          _N = _m$props.x,
          w = _m$props.y,
          Te = _m$props.width,
          Ee = _m$props.height,
          _ref3 = m.parentTexture.dimensions || {
            width: 0,
            height: 0
          },
          _ref3$width = _ref3.width,
          Z = _ref3$width === void 0 ? 0 : _ref3$width,
          _ref3$height = _ref3.height,
          Q = _ref3$height === void 0 ? 0 : _ref3$height;
        p = _N / Z, M = p + Te / Z, I = w / Q, b = I + Ee / Q, m = m.parentTexture;
      }
      fe && (_ref4 = [M, p], p = _ref4[0], M = _ref4[1], _ref4), de && (_ref5 = [b, I], I = _ref5[0], b = _ref5[1], _ref5);
      var le = this.stage.txManager,
        z = le.getCtxTexture(m);
      g(z instanceof B);
      var S = this.addTexture(z, u);
      if (L = this.curRenderOp, g(L), F !== 0 || v !== 0) r[u++] = R, r[u++] = A, r[u++] = p, r[u++] = I, n[u++] = h, r[u++] = S, r[u++] = R + i * X, r[u++] = A + i * v, r[u++] = M, r[u++] = I, n[u++] = c, r[u++] = S, r[u++] = R + o * F, r[u++] = A + o * W, r[u++] = p, r[u++] = b, n[u++] = f, r[u++] = S, r[u++] = R + i * X + o * F, r[u++] = A + i * v + o * W, r[u++] = M, r[u++] = b, n[u++] = l, r[u++] = S;else {
        var _N2 = R + i * X,
          _w = A + o * W;
        r[u++] = R, r[u++] = A, r[u++] = p, r[u++] = I, n[u++] = h, r[u++] = S, r[u++] = _N2, r[u++] = A, r[u++] = M, r[u++] = I, n[u++] = c, r[u++] = S, r[u++] = R, r[u++] = _w, r[u++] = p, r[u++] = b, n[u++] = f, r[u++] = S, r[u++] = _N2, r[u++] = _w, r[u++] = M, r[u++] = b, n[u++] = l, r[u++] = S;
      }
      L.length += Fe, L.numQuads++, this.curBufferIdx = u;
    }
  }, {
    key: "newRenderOp",
    value: function newRenderOp(e, r, n, i, o, h, c, f, l) {
      var d = new ye(this.glw, this.options, this.quadBufferCollection, e, r, n, o, i, h, 0, c, f, l);
      this.curRenderOp = d, this.renderOps.push(d);
    }
  }, {
    key: "addTexture",
    value: function addTexture(e, r, n) {
      var i = this.curRenderOp;
      g(i);
      var o = i.addTexture(e);
      if (o === 4294967295) {
        if (n) throw new Error("Unable to add texture to render op");
        var h = i.shader,
          c = i.shaderProps,
          f = i.dimensions,
          l = i.clippingRect,
          d = i.alpha;
        return this.newRenderOp(h, c, d, f, l, r), this.addTexture(e, r, !0);
      }
      return o;
    }
  }, {
    key: "reuseRenderOp",
    value: function reuseRenderOp(e) {
      var f;
      var r = e.shader,
        n = e.shaderProps,
        i = e.parentHasRenderTexture,
        o = e.rtt,
        h = e.clippingRect,
        c = r || this.defaultShader;
      return !(((f = this.curRenderOp) == null ? void 0 : f.shader) !== c || !Se(this.curRenderOp.clippingRect, h) || i || o || this.curRenderOp.shader !== this.defaultShader && (!n || !this.curRenderOp.shader.canBatchShaderProps(this.curRenderOp.shaderProps, n)));
    }
  }, {
    key: "addRenderOp",
    value: function addRenderOp(e) {
      this.renderOps.push(e), this.curRenderOp = null;
    }
  }, {
    key: "render",
    value: function render() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "screen";
      var h;
      var r = this.glw,
        n = this.quadBuffer,
        i = new Float32Array(n, 0, this.curBufferIdx),
        o = (h = this.quadBufferCollection.getBuffer("a_position")) != null ? h : null;
      r.arrayBufferData(o, i, r.STATIC_DRAW), this.renderOps.forEach(function (c, f) {
        c.draw();
      });
    }
  }, {
    key: "renderToTexture",
    value: function renderToTexture(e) {
      for (var r = 0; r < this.rttNodes.length; r++) if (this.rttNodes[r] === e) return;
      this.rttNodes.unshift(e);
    }
  }, {
    key: "renderRTTNodes",
    value: function renderRTTNodes() {
      var e = this.glw,
        r = this.stage.txManager;
      for (var n = 0; n < this.rttNodes.length; n++) {
        var i = this.rttNodes[n];
        if (!i || !i.hasRTTupdates) continue;
        this.activeRttNode = i, g(i.texture, "RTT node missing texture");
        var o = r.getCtxTexture(i.texture);
        g(o instanceof re), this.renderToTextureActive = !0, e.bindFramebuffer(o.framebuffer), e.viewport(0, 0, o.w, o.h), e.clear();
        for (var h = 0; h < i.children.length; h++) {
          var c = i.children[h];
          c && (c.update(this.stage.deltaTime, {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            valid: !1
          }), this.stage.addQuads(c), c.hasRTTupdates = !1);
        }
        this.render(), this.renderOps.length = 0, i.hasRTTupdates = !1;
      }
      e.bindFramebuffer(null), e.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height), this.renderToTextureActive = !1;
    }
  }, {
    key: "removeRTTNode",
    value: function removeRTTNode(e) {
      var r = this.rttNodes.indexOf(e);
      r !== -1 && this.rttNodes.splice(r, 1);
    }
  }]);
}(Ne);
var We = {
  LINE_FEED: 10,
  CARRIAGE_RETURN: 13,
  SPACE: 32,
  TAB: 9,
  ZERO_WIDTH_SPACE: 8203,
  ZERO_WIDTH_NON_JOINER: 8204,
  ZERO_WIDTH_JOINER: 8205,
  LEFT_TO_RIGHT_MARK: 8206,
  RIGHT_TO_LEFT_MARK: 8207,
  LEFT_TO_RIGHT_EMBEDDING: 8234,
  RIGHT_TO_LEFT_EMBEDDING: 8235,
  POP_DIRECTIONAL_FORMATTING: 8236,
  LEFT_TO_RIGHT_OVERRIDE: 8237,
  RIGHT_TO_LEFT_OVERRIDE: 8238,
  LINE_SEPARATOR: 8232,
  PARAGRAPH_SEPARATOR: 8233,
  OBJECT_REPLACEMENT_CHARACTER: 65532,
  REPLACEMENT_CHARACTER: 65533,
  ZERO_WIDTH_NO_BREAK_SPACE: 65279,
  LEFT_TO_RIGHT_ISOLATE: 8294,
  RIGHT_TO_LEFT_ISOLATE: 8295,
  FIRST_STRONG_ISOLATE: 8296,
  POP_DIRECTIONAL_ISOLATE: 8297,
  INHIBIT_SYMMETRIC_SWAPPING: 8298,
  ACTIVATE_SYMMETRIC_SWAPPING: 8299,
  INHIBIT_ARABIC_FORM_SHAPING: 8300,
  ACTIVATE_ARABIC_FORM_SHAPING: 8301,
  NATIONAL_DIGIT_SHAPES: 8302,
  NOMINAL_DIGIT_SHAPES: 8303,
  LEFT_TO_RIGHT_BOUNDARY: 8206,
  RIGHT_TO_LEFT_BOUNDARY: 8207
};
var He = /*#__PURE__*/_createClass(function He() {
  _classCallCheck(this, He);
});
var Ve = /*#__PURE__*/function (_He) {
  function Ve(e, r) {
    var _this15;
    _classCallCheck(this, Ve);
    _this15 = _callSuper(this, Ve);
    a(_this15, "data");
    a(_this15, "glyphMap");
    a(_this15, "kernings");
    _this15.data = e, _this15.glyphMap = r;
    var n = _this15.kernings = {};
    e.kernings.forEach(function (i) {
      var o = i.second,
        h = n[o] = n[o] || {};
      h[i.first] = i.amount;
    }), _this15.kernings = n;
    return _this15;
  }
  _inherits(Ve, _He);
  return _createClass(Ve, [{
    key: "shapeText",
    value: /*#__PURE__*/_regeneratorRuntime().mark(function shapeText(e, r) {
      var o, n, i, h, c, f;
      return _regeneratorRuntime().wrap(function shapeText$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!((n = r.peek()) && !n.done)) {
              _context7.next = 14;
              break;
            }
            h = n.value, c = this.glyphMap.get(h);
            if (!(r.next(), c !== void 0)) {
              _context7.next = 9;
              break;
            }
            f = i !== void 0 ? (((o = this.kernings[c.id]) == null ? void 0 : o[i]) || 0) + e.letterSpacing : 0;
            i = c.id;
            _context7.next = 7;
            return {
              mapped: !0,
              glyphId: c.id,
              codepoint: h,
              cluster: r.lastIndex,
              xAdvance: c.xadvance + f,
              yAdvance: 0,
              xOffset: c.xoffset + f,
              yOffset: c.yoffset,
              xBearing: 0,
              yBearing: 0,
              width: c.width,
              height: c.height
            };
          case 7:
            _context7.next = 12;
            break;
          case 9:
            h === We.LINE_FEED && (i = void 0);
            _context7.next = 12;
            return {
              mapped: !1,
              codepoint: h,
              cluster: r.lastIndex
            };
          case 12:
            _context7.next = 0;
            break;
          case 14:
          case "end":
            return _context7.stop();
        }
      }, shapeText, this);
    })
  }]);
}(He);
var at = /*#__PURE__*/function (_Me) {
  function at(e, r, n, i, o, h) {
    var _this16;
    _classCallCheck(this, at);
    _this16 = _callSuper(this, at, [e, r]);
    a(_this16, "type");
    a(_this16, "texture");
    a(_this16, "maxCharHeight", 0);
    a(_this16, "data");
    a(_this16, "shaper");
    a(_this16, "glyphMap", new Map());
    _this16.type = n;
    var c = i.renderer;
    g(c instanceof ve, "SDF Font Faces can only be used with the WebGL Renderer"), _this16.texture = i.txManager.loadTexture("ImageTexture", {
      src: o,
      premultiplyAlpha: !1
    }, {
      preload: !0
    }), _this16.texture.on("loaded", function () {
      _this16.checkLoaded();
    }), fetch(h).then( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(f) {
        var l;
        return _regeneratorRuntime().wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return f.json();
            case 2:
              _this16.data = _context8.sent;
              l = 0;
              _this16.data.chars.forEach(function (d) {
                _this16.glyphMap.set(d.id, d);
                var E = d.yoffset + d.height;
                E > l && (l = E);
              }), _this16.maxCharHeight = l, _this16.shaper = new Ve(_this16.data, _this16.glyphMap), _this16.checkLoaded();
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee7);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }())["catch"](console.error);
    return _this16;
  }
  _inherits(at, _Me);
  return _createClass(at, [{
    key: "getAtlasEntry",
    value: function getAtlasEntry(e) {
      var r = this.glyphMap.get(e);
      if (r === void 0) throw new Error("Glyph ".concat(e, " not found in font ").concat(this.fontFamily));
      return {
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height
      };
    }
  }, {
    key: "checkLoaded",
    value: function checkLoaded() {
      this.loaded || this.texture.state === "loaded" && this.data && (this.loaded = !0, this.emit("loaded"));
    }
  }]);
}(Me);
var ot = /*#__PURE__*/_createClass(function ot() {
  _classCallCheck(this, ot);
});
export { ze as A, Oe as B, ge as C, ne as E, k as R, at as S, Me as T, ie as W, g as a, Ie as b, J as c, je as d, tt as e, Ze as f, Qe as g, G as h, Ae as i, nt as j, Je as k, ve as l, qe as m, et as n, rt as o, ye as p, $e as q, ot as r, it as s, ke as t, st as u, Y as v, C as w, be as x, Ne as y, Ke as z };