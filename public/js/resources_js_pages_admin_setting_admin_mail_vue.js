"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_setting_admin_mail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting/admin/mail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting/admin/mail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        type: "",
        host: "",
        port: "",
        password: "",
        username: "",
        encryption: "",
        from_name: "",
        from_address: ""
      }),
      testMailForm: new Form({
        email: ""
      })
    };
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.loadData();
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    saveSetting: function saveSetting() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this2$form$pu, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.form.put("/api/setting/mail");
            case 3:
              _yield$_this2$form$pu = _context2.sent;
              data = _yield$_this2$form$pu.data;
              _this2.toastSuccess(data.message);
              setTimeout(function () {
                window.location.reload();
              }, 1500);
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              _this2.toastError();
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    testMailSend: function testMailSend() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$_this3$testMai, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this3.testMailForm.post("/api/setting/send-test-mail");
            case 3:
              _yield$_this3$testMai = _context3.sent;
              data = _yield$_this3$testMai.data;
              _this3.testMailForm.reset();
              _this3.toastSuccess(data.message);
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              _this3.toastError();
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    loadData: function loadData() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios.get("/api/setting/mail");
            case 3:
              _yield$axios$get = _context4.sent;
              data = _yield$axios$get.data;
              _this4.form.fill(data);
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              _this4.toastError();
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    reset: function reset() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this5.loadData();
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting/admin/mail.vue?vue&type=template&id=6179cdbf&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting/admin/mail.vue?vue&type=template&id=6179cdbf& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "tab-pane active show",
    attrs: {
      id: "website"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body border-bottom py-3"
  }, [_c("form", {
    attrs: {
      autocomplete: "off"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveSetting.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-xxl-5"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      value: "SMTP",
      autocomplete: "off",
      placeholder: ""
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("mail_type")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.host,
      expression: "form.host"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("host")
    },
    attrs: {
      type: "text",
      autocomplete: "off",
      placeholder: _vm.$t("host")
    },
    domProps: {
      value: _vm.form.host
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "host", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("mail_host")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "host"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.port,
      expression: "form.port"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("port")
    },
    attrs: {
      type: "number",
      autocomplete: "off",
      placeholder: _vm.$t("port")
    },
    domProps: {
      value: _vm.form.port
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "port", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("mail_port")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "port"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.encryption,
      expression: "form.encryption"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("encryption")
    },
    attrs: {
      type: "text",
      autocomplete: "off",
      placeholder: _vm.$t("encryption")
    },
    domProps: {
      value: _vm.form.encryption
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "encryption", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t("mail_encryption")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "encryption"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-xxl-5"
  }, [_c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.username,
      expression: "form.username"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("username")
    },
    attrs: {
      type: "text",
      autocomplete: "off",
      placeholder: _vm.$t("username")
    },
    domProps: {
      value: _vm.form.username
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "username", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("mail_username")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "username"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("password")
    },
    attrs: {
      type: "password",
      autocomplete: "off",
      placeholder: _vm.$t("password")
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("mail_password")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "password"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.from_name,
      expression: "form.from_name"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("from_name")
    },
    attrs: {
      disabled: "",
      type: "text",
      autocomplete: "off",
      placeholder: _vm.$t("from_name")
    },
    domProps: {
      value: _vm.form.from_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "from_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("mail_from_name")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "from_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.from_address,
      expression: "form.from_address"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("from_address")
    },
    attrs: {
      type: "email",
      autocomplete: "off",
      placeholder: _vm.$t("from_address")
    },
    domProps: {
      value: _vm.form.from_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "from_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("mail_from_email")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "from_address"
    }
  })], 1)]), _vm._v(" "), _vm.checkPermission("setting-edit") ? _c("div", {
    staticClass: "col-12 col-md-8 col-xxl-6 text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary mt-3 w-200 h-50"
  }, [_c("svg", {
    staticClass: "icon icon-tabler icon-tabler-check",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      "stroke-width": "2",
      stroke: "currentColor",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M5 12l5 5l10 -10"
    }
  })]), _vm._v("\n                            " + _vm._s(_vm.$t("save")) + "\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary mt-3 w-200 h-50",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.reset
    }
  }, [_c("svg", {
    staticClass: "icon icon-tabler icon-tabler-refresh",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      "stroke-width": "2",
      stroke: "currentColor",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
    }
  })]), _vm._v("\n                            " + _vm._s(_vm.$t("reset")) + "\n                        ")])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "card mt-3"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("send_test_mail")))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    attrs: {
      autocomplete: "off"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.testMailSend.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-xxl-5 col-xl-7 col-md-6 col-12"
  }, [_c("div", {
    staticClass: "form-floating mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.testMailForm.email,
      expression: "testMailForm.email"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.testMailForm.errors.has("email")
    },
    attrs: {
      placeholder: _vm.$t("test_email"),
      type: "email",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.testMailForm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.testMailForm, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "floating-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("email")))]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.testMailForm,
      field: "email"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xxl-3 col-xl-5 col-md-6 col-12"
  }, [_vm.testMailForm.busy ? _c("button", {
    staticClass: "btn btn-primary w-200 h-58",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("sending")) + "...\n                        ")]) : _c("button", {
    staticClass: "btn btn-primary w-200 h-58",
    attrs: {
      type: "submit"
    }
  }, [_c("icon-send"), _vm._v("\n                            " + _vm._s(_vm.$t("send")) + "\n                        ")], 1)])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/setting/admin/mail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/admin/setting/admin/mail.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mail_vue_vue_type_template_id_6179cdbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.vue?vue&type=template&id=6179cdbf& */ "./resources/js/pages/admin/setting/admin/mail.vue?vue&type=template&id=6179cdbf&");
/* harmony import */ var _mail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/setting/admin/mail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mail_vue_vue_type_template_id_6179cdbf___WEBPACK_IMPORTED_MODULE_0__.render,
  _mail_vue_vue_type_template_id_6179cdbf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/setting/admin/mail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/setting/admin/mail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/setting/admin/mail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting/admin/mail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/setting/admin/mail.vue?vue&type=template&id=6179cdbf&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/admin/setting/admin/mail.vue?vue&type=template&id=6179cdbf& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mail_vue_vue_type_template_id_6179cdbf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mail_vue_vue_type_template_id_6179cdbf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mail_vue_vue_type_template_id_6179cdbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mail.vue?vue&type=template&id=6179cdbf& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting/admin/mail.vue?vue&type=template&id=6179cdbf&");


/***/ })

}]);