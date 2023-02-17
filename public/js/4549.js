(self.webpackChunk=self.webpackChunk||[]).push([[4549,549],{549:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const r={data:function(){return{notFound:"/images/not-found.svg"}},props:{word:{type:String,default:"user",required:!1},route:{type:String,required:!1},btnShow:{type:Boolean,required:!1,default:!0}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"empty"},[s("div",{staticClass:"empty-img"},[s("img",{attrs:{src:t.notFound,height:"128",alt:"not found"}})]),t._v(" "),s("p",{staticClass:"empty-title"},[t._v(t._s(t.$t("no_results_found")))]),t._v(" "),s("p",{staticClass:"empty-subtitle text-muted"},[t._v("\n        "+t._s(t.$t("there_is_no"))+" "+t._s(t.word)+" "+t._s(t.$t("found_in_this_page"))+".\n    ")]),t._v(" "),t.route&&t.btnShow?s("div",{staticClass:"empty-action"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.route}}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t._v(" "),s("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v("\n            "+t._s(t.$t("add_your_first"))+" "+t._s(t.word)+"\n        ")])],1):t._e()])}),[],!1,null,null,null).exports},4549:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var r=s(7757),a=s.n(r);function n(t,e,s,r,a,n,i){try{var o=t[n](i),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,a)}function i(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var i=t.apply(e,s);function o(t){n(i,r,a,o,l,"next",t)}function l(t){n(i,r,a,o,l,"throw",t)}o(void 0)}))}}const o={components:{NotFound:s(549).default},data:function(){return{url:"/images/default.png",staffs:[]}},created:function(){var t=this;return i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.hasPermisssion("staff-report");case 2:t.loadTeacherReport();case 3:case"end":return e.stop()}}),e)})))()},methods:{loadTeacherReport:function(){var t=this;return i(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/api/reports/staffs");case 3:s=e.sent,t.staffs=s.data.data,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t.toastError(e.t0.response.data.message),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}};const l=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header d-print-none"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),s("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("report")))])])])]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[t._v(t._s(t.$t("staff_report")))])]),t._v(" "),s("div",{staticClass:"card-body table-responsive"},[t.staffs&&t.staffs.length?s("table",{staticClass:"table table-vcenter text-nowrap"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$t("photo")))]),t._v(" "),s("th",[t._v(t._s(t.$t("name")))]),t._v(" "),s("th",[t._v(t._s(t.$t("email")))]),t._v(" "),s("th",[t._v(t._s(t.$t("joining_date")))]),t._v(" "),s("th",[t._v(t._s(t.$t("gender")))]),t._v(" "),s("th",[t._v(t._s(t.$t("religion")))]),t._v(" "),s("th",[t._v(t._s(t.$t("phone")))]),t._v(" "),s("th",[t._v(t._s(t.$t("action")))])])]),t._v(" "),s("tbody",t._l(t.staffs,(function(e){return s("tr",{key:e.id},[s("td",[s("img",{staticClass:"img-fluid mx-h-50 mx-w-50 rounded",attrs:{src:t.url,alt:"image",height:"80px",width:"80px"}})]),t._v(" "),s("td",[t._v(t._s(e.user.name))]),t._v(" "),s("td",[t._v(t._s(e.user.email))]),t._v(" "),s("td",[t._v(t._s(e.joining_date))]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(e.gender)))]),t._v(" "),s("td",[t._v(t._s(e.religion))]),t._v(" "),s("td",[t._v(t._s(e.phone))]),t._v(" "),s("td",[s("router-link",{attrs:{to:{name:"user-teacher-view",params:{id:e.id}},href:"#"}},[t._v(t._s(t.$t("view_details")))])],1)])})),0)]):s("div",{staticClass:"d-flex justify-content-center py-3"},[s("NotFound",{attrs:{word:"staff"}})],1)])])])])])}),[],!1,null,null,null).exports}}]);