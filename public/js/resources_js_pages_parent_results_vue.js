"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_parent_results_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      disabledDates: {
        from: new Date(Date.now() + 8640000)
      },
      // search form
      searchForm: new Form({
        exam_id: "",
        student_id: ""
      }),
      subjects: [],
      students: [],
      subjectmarks: [],
      finalResult: {},
      schoolInfo: '',
      total_students: [],
      classs: [],
      class_section: [],
      result_rules: [],
      session: '',
      term: '',
      template: '',
      attendance: "",
      gender: "",
      url: "/images/default.png"
    };
  },
  watch: {
    "searchForm.student_id": function searchFormStudent_id(student_id) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (student_id) {
                axios.get("/getid/".concat(student_id)).then(function (response) {
                  var id = response.data;
                  console.log(id);
                  axios.get("/api/parent/student/".concat(id, "/attendance")).then(function (response) {
                    _this.attendance = response.data;
                    console.log(response.data);
                  });
                });
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    getExamResults: function getExamResults() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.searchForm.post("/api/parent/exam-results");
            case 3:
              response = _context2.sent;
              _this2.students = response.data.students;
              _this2.subjects = response.data.subjects;
              _this2.total_students = response.data.total_students;
              _this2.classs = response.data.classs;
              _this2.class_section = response.data.class_section;
              _this2.result_rules = response.data.result_rules;
              _this2.session = response.data.session;
              _this2.term = response.data.term;
              _this2.school_info = response.data.school_info;
              _this2.subjectmarks = response.data.students[0].marks;
              _this2.finalResult = response.data.students[0].final_results;
              _context2.next = 21;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              _this2.toastError(_context2.t0.response.data.message);
              console.log(_context2.t0);
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 17]]);
      }))();
    },
    getTemplate: function getTemplate() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              axios.get("/api/setting").then(function (response) {
                _this3.template = response.data.setting.template;
                console.log(response.data.setting.template);
              });
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getResult: function getResult(subject, student) {
      var subjectResult = student.subjects[subject.id];
      if (subjectResult.entry == false) {
        return subjectResult.results;
      }
      return subjectResult.results["grade"];
    },
    setPointGrade: function setPointGrade(result) {
      if (result.point) {
        if (result.point == 0) {
          return "<span>\n                    <b class=\"text-danger\">".concat(result.point, "</b>", " / ", "<b class=\"text-danger\">").concat(result.grade, "</b>\n                </span>");
        } else {
          return "<span>\n                    <b>".concat(result.point, "</b>", " / ", "<b>").concat(result.grade, "</b>\n                </span>");
        }
      } else if (result.point == 0) {
        return "<span>\n                            <b>".concat(result.point, "</b>", " / ", "<b>").concat(result.grade, "</b>\n                        </span>");
      }
      return "<span class=\"text-danger\">(Null)</span>";
    },
    setRemark: function setRemark(result) {
      if (result.point) {
        if (result.point == 0) {
          return "<span>\n                    <b class=\"text-danger\">".concat(result.grade, "</b>\n                </span>");
        } else {
          return "<span>\n                    <b>".concat(result.grade, "</b>\n                </span>");
        }
      } else if (result.point == 0) {
        return "<span>\n                        <b>".concat(result.grade, "</b>\n                        </span>");
      }
      return "<span class=\"text-danger\">(Null)</span>";
    },
    setMarks: function setMarks(subject_id) {
      if (this.subjectmarks && this.subjectmarks.length) {
        var subjectMark = this.subjectmarks.find(function (subject) {
          return subject.subject_id == subject_id;
        });
        return subjectMark.total;
      } else {
        return "<span class=\"text-danger\">(Null)</span>";
      }
    },
    setCa1: function setCa1(subject_id) {
      if (this.subjectmarks && this.subjectmarks.length) {
        var subjectMark = this.subjectmarks.find(function (subject) {
          return subject.subject_id == subject_id;
        });
        return subjectMark.ca;
      } else {
        return "<span class=\"text-danger\">(Null)</span>";
      }
    },
    setCa2: function setCa2(subject_id) {
      if (this.subjectmarks && this.subjectmarks.length) {
        var subjectMark = this.subjectmarks.find(function (subject) {
          return subject.subject_id == subject_id;
        });
        return subjectMark.ca2;
      } else {
        return "<span class=\"text-danger\">(Null)</span>";
      }
    },
    setCa3: function setCa3(subject_id) {
      if (this.subjectmarks && this.subjectmarks.length) {
        var subjectMark = this.subjectmarks.find(function (subject) {
          return subject.subject_id == subject_id;
        });
        return subjectMark.ca3;
      } else {
        return "<span class=\"text-danger\">(Null)</span>";
      }
    },
    setAllCa: function setAllCa(subject_id) {
      if (this.subjectmarks && this.subjectmarks.length) {
        var subjectMark = this.subjectmarks.find(function (subject) {
          return subject.subject_id == subject_id;
        });
        return subjectMark.overall_ca;
      } else {
        return "<span class=\"text-danger\">(Null)</span>";
      }
    },
    setExam: function setExam(subject_id) {
      if (this.subjectmarks && this.subjectmarks.length) {
        var subjectMark = this.subjectmarks.find(function (subject) {
          return subject.subject_id == subject_id;
        });
        return subjectMark.mark;
      } else {
        return "<span class=\"text-danger\">(Null)</span>";
      }
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    exams: "exam/examList",
    childs: "parent/getChilds"
  })),
  created: function created() {
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (_this4.authenticateUser.original_role != "Guardian") {
              _this4.redirect("401");
            }
            _context4.next = 3;
            return _this4.$store.dispatch("exam/fetchExamsList");
          case 3:
            _context4.next = 5;
            return _this4.$store.dispatch("parent/fetchChilds");
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  mounted: function mounted() {
    if (this.exams.length) {
      this.searchForm.exam_id = this.exams[0].id;
      this.searchForm.student_id = this.childs[0].student_id;
      this.getExamResults();
    }
    this.getTemplate();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=template&id=a910468c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=template&id=a910468c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "page-header d-print-none"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("h2", {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.$route.meta.title))]), _vm._v(" "), _c("h2", {
    staticClass: "page-pretitle"
  }, [_vm._v(_vm._s(_vm.$t("exam")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-6 col-sm-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchForm.student_id,
      expression: "searchForm.student_id"
    }],
    staticClass: "form-control text-center",
    "class": {
      "is-invalid": _vm.searchForm.errors.has("student_id")
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.searchForm, "student_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    staticClass: "d-none",
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("select_child")))]), _vm._v(" "), _vm._l(_vm.childs, function (child) {
    return _c("option", {
      key: child.id,
      domProps: {
        value: child.student_id
      }
    }, [_vm._v("\n                              " + _vm._s(child.name) + "\n                          ")]);
  })], 2), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.searchForm,
      field: "student_id"
    }
  })], 1), _vm._v(" "), _vm.searchForm.student_id ? _c("div", {
    staticClass: "col-6 col-sm-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchForm.exam_id,
      expression: "searchForm.exam_id"
    }],
    staticClass: "form-control text-center",
    "class": {
      "is-invalid": _vm.searchForm.errors.has("exam_id")
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.searchForm, "exam_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("select_exam")))]), _vm._v(" "), _vm._l(_vm.exams, function (exam) {
    return _c("option", {
      key: exam.id,
      domProps: {
        value: exam.id
      }
    }, [_vm._v("\n                              " + _vm._s(exam.name) + "\n                          ")]);
  })], 2), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.searchForm,
      field: "class_id"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.searchForm.student_id && _vm.searchForm.exam_id ? _c("div", {
    staticClass: "col-5 col-sm-2"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-outline",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getExamResults.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                          " + _vm._s(_vm.$t("get_exam_results")) + "\n                      ")])]) : _vm._e()])]), _vm._v(" "), _vm.students.length ? _c("div", {
    staticClass: "container",
    attrs: {
      id: "report_sheet"
    }
  }, [_vm.template == "a" ? _c("div", {
    staticClass: "mt-5 justify-content-center align-items-center mx-auto text-center",
    staticStyle: {
      "max-width": "700px"
    }
  }, [_c("div", {
    staticClass: "row justify-content-center align-items-center mx-auto text-center"
  }, [_c("div", {
    staticStyle: {
      border: "3px solid grey"
    }
  }, [_c("h3", [_c("strong", [_vm._v("Termly Report For " + _vm._s(_vm.students[0].user.name))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-9"
  }, [_c("table", [_vm._m(0), _vm._v(" "), _c("tr", [_c("th", [_vm._v("class")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.classs[0].name) + " (" + _vm._s(_vm.class_section[0].name) + ")")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "3"
    }
  })]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Number of pupils in class")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.total_students))]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Next term Begins:")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Term")]), _vm._v(" "), _c("td", {
    attrs: {
      id: "term"
    }
  }, [_vm._v(_vm._s(_vm.term[0].name))]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("School Session:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.session[0].name))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-3 mt-3",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c("table", {
    staticClass: "image"
  }, [_c("tr", [_c("td", [_c("img", {
    attrs: {
      src: _vm.students[0].user.image_url,
      alt: "passport"
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table-striped table-responsive"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.subjects, function (subject, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(subject.name))]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setAllCa(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setExam(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setMarks(subject.id))
      }
    })]), _vm._v(" "), _vm.students[0] ? _c("td", {
      domProps: {
        innerHTML: _vm._s(_vm.setRemark(_vm.students[0].subjects[subject.id].results))
      }
    }) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row justify-content-center align-items-center"
  }, [_c("div", {
    staticClass: "col-8"
  }, [_vm._v("\n              Report Summary\n              "), _c("table", [_c("tr", [_c("th", [_vm._v("Overall Percentage")]), _vm._v(" "), _c("td", [_c("span", {
    attrs: {
      id: "percentInClass"
    }
  }, [_vm._v(_vm._s(Number(_vm.finalResult.gpa / (_vm.subjects.length * 100) * 100).toFixed(2)))]), _vm._v("%")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Total Score")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.finalResult.gpa))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Total Subjects")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.subjects.length))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Class Teacher's Comment")]), _vm._v(" "), _c("td", {
    attrs: {
      id: "teacherComment"
    }
  }, [_vm.finalResult.pass ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t("Good Result")))]) : _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Poor result")))])])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("School Head Comment")]), _vm._v(" "), _c("td", {
    attrs: {
      id: "principalComment"
    }
  }, [_vm.finalResult.pass ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t("Good Result, keep it up")))]) : _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Poor result, put more effort")))])])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "text-center border-0"
  }, [_vm._v(_vm._s(_vm.school_info.admin))]), _vm._v(" "), _c("th", {
    staticClass: "text-center border-0"
  })]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-center text-success border-0"
  }, [_vm._v("School Head")]), _vm._v(" "), _c("td", {
    staticClass: "text-center text-dark border-0",
    attrs: {
      id: "status"
    }
  }, [_vm.finalResult.pass ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t("passed")))]) : _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("failed")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_vm._v("\n              Grading System\n              "), _c("table", [_vm._m(4), _vm._v(" "), _vm._l(_vm.result_rules, function (result_rule, index) {
    return _c("tbody", {
      key: index
    }, [_c("tr", [_c("td", [_vm._v(_vm._s(result_rule.min_mark) + "-" + _vm._s(result_rule.max_mark) + "%")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(result_rule.name))])])]);
  })], 2)])])])])])]) : _vm._e(), _vm._v(" "), _vm.template == "b" ? _c("div", {
    staticClass: "mt-5 justify-content-center align-items-center mx-auto text-center",
    staticStyle: {
      "max-width": "700px"
    }
  }, [_c("div", {
    staticClass: "row justify-content-center align-items-center mx-auto text-center"
  }, [_c("div", {
    staticStyle: {
      border: "3px solid grey"
    }
  }, [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(_vm._s(_vm.students[0].user.name))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Class")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(_vm._s(_vm.classs[0].name) + " (" + _vm._s(_vm.class_section[0].name) + ")")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Gender")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(_vm._s(_vm.students[0].user.gender))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Term")]), _vm._v(" "), _c("td", {
    attrs: {
      id: "term"
    }
  }, [_vm._v(_vm._s(_vm.term[0].name))]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("School Session:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.session[0].name))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Attendance")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(_vm._s(_vm.attendance.total_present) + " out of " + _vm._s(_vm.attendance.total_attendance))])])])])])]), _vm._v(" "), _c("h1", [_vm._v("Assessment of Cognitive Domain")]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table-striped table-responsive"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", _vm._l(_vm.subjects, function (subject, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(subject.name))]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setCa1(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setCa2(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setCa3(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setAllCa(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setExam(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setMarks(subject.id))
      }
    })]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.setMarks(subject.id))
      }
    })]), _vm._v(" "), _vm.students[0] ? _c("td", {
      domProps: {
        innerHTML: _vm._s(_vm.setRemark(_vm.students[0].subjects[subject.id].results))
      }
    }) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row justify-content-center align-items-center"
  }, [_c("div", {
    staticClass: "col-8"
  }, [_c("table", [_c("tr", [_c("td", [_vm._v("Class Tutor's Comment")]), _vm._v(" "), _c("td", [_vm.finalResult.pass ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t("Good Result, keep it up")))]) : _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Poor result, put more effort")))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Administrator")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.school_info.admin))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Administrator's Comment")]), _vm._v(" "), _c("td", [_vm.finalResult.pass ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t("Good Result, keep it up")))]) : _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Poor result, put more effort")))])])]), _vm._v(" "), _vm._m(7)])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("table", [_vm._m(8), _vm._v(" "), _vm._l(_vm.result_rules, function (result_rule, index) {
    return _c("tbody", {
      key: index
    }, [_c("tr", [_c("td", [_vm._v(_vm._s(result_rule.min_mark) + "-" + _vm._s(result_rule.max_mark) + "%")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(result_rule.name))])])]);
  })], 2)])])])])])]) : _vm._e()]) : [_c("NotFound", {
    attrs: {
      word: "results"
    }
  })]], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Reg:Number")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "5"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Total School Days")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "3"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Result Approved date")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "3"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Subject")]), _vm._v(" "), _c("th", [_vm._v("Ca Score(30)")]), _vm._v(" "), _c("th", [_vm._v("Exam Score(70)")]), _vm._v(" "), _c("th", [_vm._v("Total Score(100)")]), _vm._v(" "), _c("th", [_vm._v("Remarks")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Key")]), _vm._v(" "), _c("th", [_vm._v("Point")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Mark Obtained")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", [_vm._v("100")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  })]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Subject")]), _vm._v(" "), _c("th", [_vm._v("T1")]), _vm._v(" "), _c("th", [_vm._v("T2")]), _vm._v(" "), _c("th", [_vm._v("T3")]), _vm._v(" "), _c("th", [_vm._v("T4 (T1+T2+T3/3)")]), _vm._v(" "), _c("th", [_vm._v("Exam")]), _vm._v(" "), _c("th", [_vm._v("Total (T4+Exam/2)")]), _vm._v(" "), _c("th", [_vm._v("Pre_cum")]), _vm._v(" "), _c("th", [_vm._v("Remarks")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row justify-content-center align-items-center"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("table", [_c("tr", [_c("th", [_vm._v("Affective Domain")]), _vm._v(" "), _c("th", [_vm._v("Ratings")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Punctuality")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Attendance")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Neatness")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Relationship with others")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Self-control")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Promptness in completing work")]), _vm._v(" "), _c("td")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("table", [_c("tr", [_c("th", [_vm._v("Psychomotor Domain")]), _vm._v(" "), _c("th", [_vm._v("Ratings")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Handwriting")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Games & Sports")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Handling tools")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Drawing & Painting")]), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Musical skills")]), _vm._v(" "), _c("td")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("Resumption Day")]), _vm._v(" "), _c("td")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Key")]), _vm._v(" "), _c("th", [_vm._v("Point")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-align-center[data-v-a910468c] {\n  text-align: center;\n}\n.result span.no-result[data-v-a910468c] {\n  color: red;\n}\n.pass[data-v-a910468c],\n.fail[data-v-a910468c] {\n  padding: 5px;\n}\n.pass[data-v-a910468c] {\n  background-color: green;\n  color: white;\n}\n.fail[data-v-a910468c] {\n  background-color: red;\n  color: white;\n}\n.text-right[data-v-a910468c] {\n  text-align: right;\n}\n#report_sheet ul img[data-v-a910468c] {\n  max-width: 50px;\n  max-height: 50px;\n}\nspan > img[data-v-a910468c] {\n  max-width: 15px;\n  max-height: 15px;\n}\n#report_sheet nav a[data-v-a910468c] {\n  color: #B0596F !important;\n}\n#report_sheet div h1[data-v-a910468c] {\n  width: auto;\n  background: #80132F;\n  color: white;\n}\n#report_sheet .viewResult h1[data-v-a910468c] {\n  width: auto;\n  background: white;\n  color: black;\n}\n#report_sheet .viewResult img[data-v-a910468c] {\n  max-width: 50px;\n  max-height: 50px;\n}\n#report_sheet .result[data-v-a910468c] {\n  background-color: #B0596F;\n  color: white !important;\n}\n#report_sheet .result a[data-v-a910468c] {\n  color: white !important;\n}\n#report_sheet .result img[data-v-a910468c] {\n  max-width: 50px;\n  max-height: 50px;\n  position: absolute;\n}\n#report_sheet nav img[data-v-a910468c] {\n  max-width: 50px;\n  max-height: 50px;\n}\n#report_sheet nav[data-v-a910468c] {\n  min-height: 40px;\n}\n#report_sheet table[data-v-a910468c], td[data-v-a910468c], th[data-v-a910468c], tbody[data-v-a910468c] {\n  border: 2px solid #d1cecd;\n  padding: 2px;\n  text-align: left;\n  font-size: 12px;\n}\n#report_sheet thead[data-v-a910468c] {\n  font-weight: bold;\n  text-align: center;\n}\n#report_sheet table[data-v-a910468c] {\n  border-collapse: collapse;\n  width: 100%;\n}\n#report_sheet table img[data-v-a910468c] {\n  max-width: 100px;\n  max-height: 100px;\n}\n#report_sheet table.image[data-v-a910468c] {\n  width: 50%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_style_index_0_id_a910468c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_style_index_0_id_a910468c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_style_index_0_id_a910468c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/parent/results.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/parent/results.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _results_vue_vue_type_template_id_a910468c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results.vue?vue&type=template&id=a910468c&scoped=true& */ "./resources/js/pages/parent/results.vue?vue&type=template&id=a910468c&scoped=true&");
/* harmony import */ var _results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.vue?vue&type=script&lang=js& */ "./resources/js/pages/parent/results.vue?vue&type=script&lang=js&");
/* harmony import */ var _results_vue_vue_type_style_index_0_id_a910468c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true& */ "./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_vue_vue_type_template_id_a910468c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _results_vue_vue_type_template_id_a910468c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a910468c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/parent/results.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/parent/results.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/parent/results.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./results.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/parent/results.vue?vue&type=template&id=a910468c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/parent/results.vue?vue&type=template&id=a910468c&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_template_id_a910468c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_template_id_a910468c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_template_id_a910468c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./results.vue?vue&type=template&id=a910468c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=template&id=a910468c&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_results_vue_vue_type_style_index_0_id_a910468c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/results.vue?vue&type=style&index=0&id=a910468c&lang=scss&scoped=true&");


/***/ })

}]);