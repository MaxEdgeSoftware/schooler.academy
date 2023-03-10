"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_partials_menus_admin_VerticalMenuItems_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_0__.mixin],
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      sidebarDropdown: false
    };
  },
  methods: {
    closeDropdown: function closeDropdown() {
      this.sidebarDropdown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Logout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Logout.vue */ "./resources/js/components/Logout.vue");
/* harmony import */ var _Dropdown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Dropdown.vue */ "./resources/js/components/Dropdown.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["listClass"],
  components: {
    Dropdown: _Dropdown_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Logout: _Logout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    authenticated: "auth/authenticated",
    user: "auth/user",
    setting: "setting/setting"
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    logoutAction: "auth/logout"
  })), {}, {
    visitWebsite: function visitWebsite() {
      window.location.href = "http://127.0.0.1:8000/";
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    directives: [{
      name: "on-clickaway",
      rawName: "v-on-clickaway",
      value: _vm.closeDropdown,
      expression: "closeDropdown"
    }],
    staticClass: "nav-item dropdown",
    "class": _vm.sidebarDropdown || _vm.active ? "active" : ""
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle",
    "class": {
      show: _vm.sidebarDropdown || _vm.active
    },
    attrs: {
      href: "javascript:void(0)",
      "data-bs-toggle": "dropdown",
      role: "button",
      "aria-expanded": "false"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.sidebarDropdown = !_vm.sidebarDropdown;
      }
    }
  }, [_c("span", {
    staticClass: "nav-link-icon d-md-none d-lg-inline-block"
  }, [_vm._t("icon")], 2), _vm._v(" "), _c("span", {
    staticClass: "nav-link-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t(_vm.title)) + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    "class": {
      show: _vm.sidebarDropdown || _vm.active
    }
  }, [_c("div", {
    staticClass: "dropdown-menu-columns"
  }, [_c("div", {
    staticClass: "dropdown-menu-column"
  }, [_vm._t("default")], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=template&id=7e688c1e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=template&id=7e688c1e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "navbar-nav",
    "class": _vm.listClass
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    "class": {
      active: _vm.checkRoute("home")
    },
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_c("span", {
    staticClass: "nav-link-icon d-md-none d-lg-inline-block"
  }, [_c("icon-home")], 1), _vm._v(" "), _c("span", {
    staticClass: "nav-link-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("dashboard")) + " ")])])], 1), _vm._v(" "), _vm.checkPermission("student-attendance-list") || _vm.checkPermission("teacher-attendance-list") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("attendance"),
      active: _vm.checkRoute(["attendence-student", "attendence-teacher"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-note")];
      },
      proxy: true
    }], null, false, 2172870325)
  }, [_vm._v(" "), _vm.checkPermission("student-attendance-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.$route.name == "attendence-student"
    },
    attrs: {
      to: {
        name: "attendence-student"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("student_attendance")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("teacher-attendance-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.$route.name == "attendence-teacher"
    },
    attrs: {
      to: {
        name: "attendence-teacher"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("teacher_attendance")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.checkPermission("session-list") || _vm.checkPermission("department-list") || _vm.checkPermission("routine-list") || _vm.checkPermission("class-room-list") || _vm.checkPermission("class-list") || _vm.checkPermission("section-list") || _vm.checkPermission("subject-list") || _vm.checkPermission("syllabus-list") || _vm.checkPermission("homework-list") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("academic"),
      active: _vm.checkRoute(["academic-session", "department", "academic-routine", "academic-routine-create", "academic-routine-edit", "academic-class", "academic-section", "academic-classroom", "academic-subject", "academic-syllabus-index", "academic-syllabus-create", "academic-homework", "academic-homework-create", "academic-homework-edit"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-book")];
      },
      proxy: true
    }], null, false, 243346060)
  }, [_vm._v(" "), _vm.checkPermission("session-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("academic-session")
    },
    attrs: {
      to: {
        name: "academic-session"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("session")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("department-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("department")
    },
    attrs: {
      to: {
        name: "department"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("department")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("routine-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["academic-routine", "academic-routine-create", "academic-routine-edit"])
    },
    attrs: {
      to: {
        name: "academic-routine"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("routine")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("class-room-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("academic-classroom")
    },
    attrs: {
      to: {
        name: "academic-classroom"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("class_room")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("class-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("academic-class")
    },
    attrs: {
      to: {
        name: "academic-class"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("class")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("section-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("academic-section")
    },
    attrs: {
      to: {
        name: "academic-section"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("section")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("subject-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("academic-subject")
    },
    attrs: {
      to: {
        name: "academic-subject"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("subject")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("syllabus-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["academic-syllabus-index", "academic-syllabus-create", "academic-syllabus-edit"])
    },
    attrs: {
      to: {
        name: "academic-syllabus-index"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("syllabus")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("homework-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["academic-homework", "academic-homework-create", "academic-homework-edit"])
    },
    attrs: {
      to: {
        name: "academic-homework"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("homework")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.checkPermission("user-list") || _vm.checkPermission("user-create") || _vm.checkPermission("user-edit") || _vm.checkPermission("user-view") || _vm.checkPermission("student-list") || _vm.checkPermission("student-create") || _vm.checkPermission("student-edit") || _vm.checkPermission("student-view") || _vm.checkPermission("parent-list") || _vm.checkPermission("parent-create") || _vm.checkPermission("parent-edit") || _vm.checkPermission("parent-view") || _vm.checkPermission("teacher-list") || _vm.checkPermission("teacher-create") || _vm.checkPermission("teacher-edit") || _vm.checkPermission("teacher-view") || _vm.checkPermission("accountant-list") || _vm.checkPermission("accountant-create") || _vm.checkPermission("accountant-edit") || _vm.checkPermission("accountant-view") || _vm.checkPermission("accountant-view") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("users"),
      active: _vm.checkRoute(["user", "user-add", "user-edit", "user-view", "user-student", "user-student-add", "user-student-edit", "user-guardian", "user-guardian-add", "user-guardian-edit", "user-guardian-view", "user-teacher", "user-teacher-add", "user-teacher-edit", "user-accountant", "user-accountant-add", "user-accountant-edit", "user-accountant-view", "user-student-view", "user-teacher-view"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-users")];
      },
      proxy: true
    }], null, false, 3269229415)
  }, [_vm._v(" "), _vm.checkPermission("user-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["user", "user-add", "user-edit", "user-view"])
    },
    attrs: {
      to: {
        name: "user"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("admin")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("student-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["user-student", "user-student-add", "user-student-edit", "user-student-view"])
    },
    attrs: {
      to: {
        name: "user-student"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("student")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("parent-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["user-guardian", "user-guardian-add", "user-guardian-edit", "user-guardian-view"])
    },
    attrs: {
      to: {
        name: "user-guardian"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("parent")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("teacher-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["user-teacher", "user-teacher-add", "user-teacher-edit", "user-teacher-view"])
    },
    attrs: {
      to: {
        name: "user-teacher"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("teacher")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("accountant-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["user-accountant", "user-accountant-add", "user-accountant-edit", "user-accountant-view"])
    },
    attrs: {
      to: {
        name: "user-accountant"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("accountant")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.checkPermission("exam-list") || _vm.checkPermission("exam-schedule-list") || _vm.checkPermission("exam-mark-list") || _vm.checkPermission("exam-rule-list") || _vm.checkPermission("exam-result-list") || _vm.checkPermission("promotion-list") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("exam"),
      active: _vm.checkRoute(["exam", "exam-schedule", "exam-schedule-create", "exam-schedule-edit", "exam-mark", "exam-result-rule", "exam-result", "promotion"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-edit-circle")];
      },
      proxy: true
    }], null, false, 2734469574)
  }, [_vm._v(" "), _vm.checkPermission("exam-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["exam"])
    },
    attrs: {
      to: {
        name: "exam"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("exam_list")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("exam-schedule-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["exam-schedule", "exam-schedule-create", "exam-schedule-edit"])
    },
    attrs: {
      to: {
        name: "exam-schedule"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("schedule")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("exam-mark-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("exam-mark")
    },
    attrs: {
      to: {
        name: "exam-mark"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("mark")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("exam-rule-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("exam-result-rule")
    },
    attrs: {
      to: {
        name: "exam-result-rule"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("result_rule")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("exam-result-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("exam-result")
    },
    attrs: {
      to: {
        name: "exam-result"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("exam_result")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("promotion-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("promotion")
    },
    attrs: {
      to: {
        name: "promotion"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("promotion")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.checkPermission("student-report") || _vm.checkPermission("teacher-report") || _vm.checkPermission("staff-report") || _vm.checkPermission("class-routine-report") || _vm.checkPermission("student-attendance-report") || _vm.checkPermission("teacher-attendance-report") || _vm.checkPermission("exam-schedule-report") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("report"),
      active: _vm.checkRoute(["report-student", "report-class-routine", "report-staff", "report-student-attendance", "report-teacher-attendance", "report-exam-routine", "report-teacher"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-report")];
      },
      proxy: true
    }], null, false, 309180011)
  }, [_vm._v(" "), _vm.checkPermission("student-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-student")
    },
    attrs: {
      to: {
        name: "report-student"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("student")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("teacher-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-teacher")
    },
    attrs: {
      to: {
        name: "report-teacher"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("teacher")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("staff-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-staff")
    },
    attrs: {
      to: {
        name: "report-staff"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("staff")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("class-routine-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-class-routine")
    },
    attrs: {
      to: {
        name: "report-class-routine"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("class_routine")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("exam-schedule-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-exam-routine")
    },
    attrs: {
      to: {
        name: "report-exam-routine"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("exam_routine")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("student-attendance-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-student-attendance")
    },
    attrs: {
      to: {
        name: "report-student-attendance"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("student_attendance")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("teacher-attendance-report") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("report-teacher-attendance")
    },
    attrs: {
      to: {
        name: "report-teacher-attendance"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("teacher_attendance")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.checkPermission("calendar-list") || _vm.checkPermission("message-notification-send") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("announcement"),
      active: _vm.checkRoute(["message", "calendar"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-bell")];
      },
      proxy: true
    }], null, false, 72127010)
  }, [_vm._v(" "), _vm.checkPermission("message-notification-send") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("message")
    },
    attrs: {
      to: {
        name: "message"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("message")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("calendar-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("calendar")
    },
    attrs: {
      to: {
        name: "calendar"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("calendar")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.checkPermission("fee-type-list") || _vm.checkPermission("fee-list") || _vm.checkPermission("expense-type-list") || _vm.checkPermission("expense-list") ? _c("dropdown", {
    attrs: {
      title: _vm.$t("accounting"),
      active: _vm.checkRoute(["fees-type", "fees-list", "fees-allocation", "expense-type", "expense-expense-list"])
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("icon-calculator")];
      },
      proxy: true
    }], null, false, 3841870713)
  }, [_vm._v(" "), _vm.checkPermission("fee-type-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("fees-type")
    },
    attrs: {
      to: {
        name: "fees-type"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("fee_type")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("fee-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute(["fees-list", "fees-allocation"])
    },
    attrs: {
      to: {
        name: "fees-list"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("fees")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("expense-type-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("expense-type")
    },
    attrs: {
      to: {
        name: "expense-type"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("expense_type")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkPermission("expense-list") ? _c("router-link", {
    staticClass: "dropdown-item",
    "class": {
      active: _vm.checkRoute("expense-expense-list")
    },
    attrs: {
      to: {
        name: "expense-expense-list"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("expense_list")) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "nav-item",
    attrs: {
      "setting-list": ""
    }
  }, [_vm.checkPermission("role-list") ? _c("router-link", {
    staticClass: "nav-link",
    "class": {
      active: _vm.checkRoute("role")
    },
    attrs: {
      to: {
        name: "role"
      }
    }
  }, [_c("span", {
    staticClass: "nav-link-icon d-md-none d-lg-inline-block"
  }, [_c("icon-lock")], 1), _vm._v(" "), _c("span", {
    staticClass: "nav-link-title"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("roles")) + "\n            ")])]) : _vm._e()], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_vm.checkPermission("setting-list") ? _c("router-link", {
    staticClass: "nav-link",
    "class": {
      active: _vm.checkRoute(["setting-admin", "setting-admin-theme", "setting-admin-mail", "setting-admin-payment", "setting-admin-language", "setting-language-add", "setting-language-edit"])
    },
    attrs: {
      to: {
        name: "setting-admin"
      }
    }
  }, [_c("span", {
    staticClass: "nav-link-icon d-md-none d-lg-inline-block"
  }, [_c("icon-cog")], 1), _vm._v(" "), _c("span", {
    staticClass: "nav-link-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("settings")) + " ")])]) : _vm._e()], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: {
        name: "user-profile"
      }
    }
  }, [_c("span", {
    staticClass: "nav-link-icon d-md-none d-lg-inline-block"
  }, [_c("icon-user")], 1), _vm._v(" "), _c("span", {
    staticClass: "nav-link-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("profile")) + " ")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("logout", {
    attrs: {
      linkClass: "nav-link",
      title: false
    }
  }, [_c("span", {
    staticClass: "nav-link-icon d-md-none d-lg-inline-block"
  }, [_c("icon-logout")], 1), _vm._v(" "), _c("span", {
    staticClass: "nav-link-title"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("logout")) + "\n            ")])])], 1), _vm._v(" "), _vm.user.original_role === "Teacher" ? _c("li", {
    staticClass: "text-center mt-3"
  }, [_c("router-link", {
    staticClass: "btn btn-primary",
    attrs: {
      to: {
        name: "attendence-student"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("take_attendance")) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.user.original_role === "Accountant" ? _c("li", {
    staticClass: "text-center mt-3"
  }, [_c("router-link", {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      to: {
        name: "fees-allocation"
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("fee_allocation")) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "text-center mt-3"
  }, [_c("Clock")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-item.dropdown .nav-link[data-v-ef782e08]::after {\n  transition: all 0.3s linear;\n}\n.nav-item.dropdown.active .nav-link[data-v-ef782e08]::after {\n  transform: rotate(135deg);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_ef782e08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_ef782e08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_ef782e08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Dropdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Dropdown.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& */ "./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/components/Dropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dropdown_vue_vue_type_style_index_0_id_ef782e08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true& */ "./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ef782e08",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/menus/admin/VerticalMenuItems.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/partials/menus/admin/VerticalMenuItems.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerticalMenuItems_vue_vue_type_template_id_7e688c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalMenuItems.vue?vue&type=template&id=7e688c1e& */ "./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=template&id=7e688c1e&");
/* harmony import */ var _VerticalMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalMenuItems.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalMenuItems_vue_vue_type_template_id_7e688c1e___WEBPACK_IMPORTED_MODULE_0__.render,
  _VerticalMenuItems_vue_vue_type_template_id_7e688c1e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/menus/admin/VerticalMenuItems.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_ef782e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=template&id=ef782e08&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=template&id=ef782e08&scoped=true&");


/***/ }),

/***/ "./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=template&id=7e688c1e&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=template&id=7e688c1e& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalMenuItems_vue_vue_type_template_id_7e688c1e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalMenuItems_vue_vue_type_template_id_7e688c1e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalMenuItems_vue_vue_type_template_id_7e688c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalMenuItems.vue?vue&type=template&id=7e688c1e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/menus/admin/VerticalMenuItems.vue?vue&type=template&id=7e688c1e&");


/***/ }),

/***/ "./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_ef782e08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dropdown.vue?vue&type=style&index=0&id=ef782e08&lang=scss&scoped=true&");


/***/ })

}]);