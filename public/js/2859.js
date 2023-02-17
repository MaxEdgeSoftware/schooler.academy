(self.webpackChunk=self.webpackChunk||[]).push([[2859,549],{4841:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var a=n(3645),s=n.n(a)()((function(t){return t[1]}));s.push([t.id,".text-align-center[data-v-fbff1474]{text-align:center}",""]);const r=s},549:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});const a={data:function(){return{notFound:"/images/not-found.svg"}},props:{word:{type:String,default:"user",required:!1},route:{type:String,required:!1},btnShow:{type:Boolean,required:!1,default:!0}}};const s=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty"},[n("div",{staticClass:"empty-img"},[n("img",{attrs:{src:t.notFound,height:"128",alt:"not found"}})]),t._v(" "),n("p",{staticClass:"empty-title"},[t._v(t._s(t.$t("no_results_found")))]),t._v(" "),n("p",{staticClass:"empty-subtitle text-muted"},[t._v("\n        "+t._s(t.$t("there_is_no"))+" "+t._s(t.word)+" "+t._s(t.$t("found_in_this_page"))+".\n    ")]),t._v(" "),t.route&&t.btnShow?n("div",{staticClass:"empty-action"},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.route}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t._v(" "),n("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v("\n            "+t._s(t.$t("add_your_first"))+" "+t._s(t.word)+"\n        ")])],1):t._e()])}),[],!1,null,null,null).exports},2859:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>_});var a=n(7757),s=n.n(a),r=n(7484),o=n.n(r);function c(t,e,n,a,s,r,o){try{var c=t[r](o),i=c.value}catch(t){return void n(t)}c.done?e(i):Promise.resolve(i).then(a,s)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(a,s){var r=t.apply(e,n);function o(t){c(r,a,s,o,i,"next",t)}function i(t){c(r,a,s,o,i,"throw",t)}o(void 0)}))}}const l={components:{NotFound:n(549).default},data:function(){return{disabledDates:{from:new Date(Date.now()+864e4)},searchForm:new Form({type:"",date:"",month:"",year:""}),sectionInput:!1,searchBtn:!1,attendances:[],attendence_type:"date",url:"/images/default.png"}},watch:{"searchForm.class_id":function(t){this.sectionInput=!0},"searchForm.section_id":function(t){this.searchBtn=!0},"searchForm.type":function(t){this.searchForm.date="",this.searchForm.month="",this.searchForm.year=""}},methods:{setDate:function(t){var e=o()(t).format("YYYY-MM-DD");this.searchForm.date=e},setMonth:function(t){var e=o()(t).format("MM"),n=o()(t).format("YYYY");this.searchForm.month=e,this.searchForm.year=n},isPresent:function(t,e){var n=t<10?"0".concat(t):t,a="".concat(this.searchForm.year,"-").concat(this.searchForm.month,"-").concat(n);return!!e.attendances.hasOwnProperty(a)&&1==e.attendances[a][0].status},getAttendanceReport:function(){var t=this;return i(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.attendences=[],e.prev=1,e.next=4,t.searchForm.post("/api/reports/teachers-attendance");case 4:n=e.sent,t.attendence_type=t.searchForm.type,t.attendances=n.data.attendences,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t.toastError(e.t0.response.data.message),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},computed:{daysInMonth:function(){return""!=this.searchForm.year&&""!=this.searchForm.month&&o()("".concat(this.searchForm.year,"-").concat(this.searchForm.month)).daysInMonth()}},created:function(){var t=this;return i(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.hasPermisssion("teacher-attendance-report");case 2:case"end":return e.stop()}}),e)})))()}};var d=n(3379),h=n.n(d),u=n(4841),v={insert:"head",singleton:!1};h()(u.Z,v);u.Z.locals;const _=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-header d-print-none"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col"},[n("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),n("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("teacher")))])])])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-3 col-xl-2"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.type,expression:"searchForm.type"}],staticClass:"form-control",class:{"is-invalid":t.searchForm.errors.has("type")},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchForm,"type",e.target.multiple?n:n[0])}}},[n("option",{staticClass:"d-none",attrs:{value:""}},[t._v("\n                            "+t._s(t.$t("select_type"))+"\n                        ")]),t._v(" "),n("option",{attrs:{value:"date"}},[t._v(t._s(t.$t("date")))]),t._v(" "),n("option",{attrs:{value:"month"}},[t._v(t._s(t.$t("monthly")))])]),t._v(" "),n("has-error",{attrs:{form:t.searchForm,field:"type"}})],1),t._v(" "),"date"==t.searchForm.type?n("div",{staticClass:"col-md-3 col-xl-2 mb-3"},[n("date-picker",{attrs:{format:"dd MMMM, yyyy","input-class":"form-control",placeholder:t.$t("select_date")},on:{input:function(e){return t.setDate(e)}}}),t._v(" "),n("has-error",{staticClass:"d-block",attrs:{form:t.searchForm,field:"date"}})],1):t._e(),t._v(" "),"month"==t.searchForm.type?n("div",{staticClass:"col-md-3 col-xl-2 mb-3"},[n("date-picker",{attrs:{format:"MMMM, yyyy","input-class":"form-control",placeholder:t.$t("select_month"),"minimum-view":"month"},on:{input:function(e){return t.setMonth(e)}}}),t._v(" "),n("has-error",{staticClass:"d-block",attrs:{form:t.searchForm,field:"date"}})],1):t._e(),t._v(" "),t.searchForm.type?n("div",{staticClass:"col-md-3 col-xl-2 mb-3"},[n("button",{staticClass:"btn btn-primary btn-outline",attrs:{disabled:""==t.searchForm.type},on:{click:function(e){return e.preventDefault(),t.getAttendanceReport(e)}}},[t._v("\n                        "+t._s(t.$t("get_attendacne_report"))+"\n                    ")])]):t._e()])]),t._v(" "),n("div",{staticClass:"col-12"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.saveAttendance(e)}}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.$t("attendance")))])]),t._v(" "),n("div",{staticClass:"card-body table-responsive"},[t.attendances.length&&"date"==t.attendence_type?[n("h3",[t._v(t._s(t.$t("day_wise_attendance")))]),t._v(" "),n("table",{staticClass:"table table-vcenter text-nowrap"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("photo")))]),t._v(" "),n("th",[t._v(t._s(t.$t("name")))]),t._v(" "),n("th",[t._v(t._s(t.$t("phone")))]),t._v(" "),n("th",[t._v(t._s(t.$t("department")))]),t._v(" "),n("th",[t._v(t._s(t.$t("status")))])])]),t._v(" "),n("tbody",t._l(t.attendances,(function(e){return n("tr",{key:e.id},[n("td",[n("img",{staticClass:"img-fluid mx-h-50 mx-w-50 rounded",attrs:{src:e.teacher.user.image_url,alt:"image",height:"80px",width:"80px"}})]),t._v(" "),n("td",[t._v(t._s(e.teacher.user.name))]),t._v(" "),n("td",[t._v(t._s(e.teacher.phone))]),t._v(" "),n("td",[t._v(t._s(e.teacher.department.name))]),t._v(" "),n("td",[e.status?n("div",{staticClass:"text-align-center text-white bg-green"},[t._v("\n                                                P\n                                            ")]):n("div",{staticClass:"text-align-center text-white bg-red"},[t._v("\n                                                A\n                                            ")])])])})),0)])]:t.attendances.length&&"month"==t.attendence_type?[n("h3",[t._v(t._s(t.$t("month_wise_attendance")))]),t._v(" "),n("table",{staticClass:"table table-hover table-bordered table-striped"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("photo")))]),t._v(" "),n("th",[t._v(t._s(t.$t("name")))]),t._v(" "),t._l(t.daysInMonth,(function(e){return n("th",{key:e,staticClass:"text-align-center"},[t._v("\n                                            "+t._s(e)+"\n                                        ")])}))],2)]),t._v(" "),n("tbody",t._l(t.attendances,(function(e){return n("tr",{key:e.id},[n("td",[n("img",{staticClass:"img-fluid mx-h-50 mx-w-50 rounded",attrs:{src:e.user.image_url,alt:"image",height:"80px",width:"80px"}})]),t._v(" "),n("td",[t._v(t._s(e.user.name))]),t._v(" "),t._l(t.daysInMonth,(function(a){return n("td",{key:a},[t.isPresent(a,e)?n("div",{staticClass:"text-align-center text-white bg-green"},[t._v("\n                                                P\n                                            ")]):n("div",{staticClass:"text-align-center text-white bg-red"},[t._v("\n                                                A\n                                            ")])])}))],2)})),0)])]:n("div",{staticClass:"d-flex justify-content-center py-3"},[n("NotFound",{attrs:{word:"Attendance"}})],1)],2)])])])])])}),[],!1,null,"fbff1474",null).exports}}]);