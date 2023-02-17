(self.webpackChunk=self.webpackChunk||[]).push([[6508],{5084:(t,a,s)=>{"use strict";s.d(a,{Z:()=>r});var e=s(3645),n=s.n(e)()((function(t){return t[1]}));n.push([t.id,".style-chooser .vs__search[data-v-27bf2f88]::-moz-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-27bf2f88]:-ms-input-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-27bf2f88]::placeholder{color:#9a9b9a}",""]);const r=n},6508:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>v});var e=s(7757),n=s.n(e);function r(t,a,s,e,n,r,d){try{var i=t[r](d),c=i.value}catch(t){return void s(t)}i.done?a(c):Promise.resolve(c).then(e,n)}const d={data:function(){return{student:null}},computed:{},methods:{getStudent:function(){var t,a=this;return(t=n().mark((function t(){var s,e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=a.$route.params.id,t.next=4,axios.get("/api/students/".concat(s));case 4:e=t.sent,a.student=e.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a.toastError(t.t0.response.data.message),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var a=this,s=arguments;return new Promise((function(e,n){var d=t.apply(a,s);function i(t){r(d,e,n,i,c,"next",t)}function c(t){r(d,e,n,i,c,"throw",t)}i(void 0)}))})()},goBack:function(){this.$router.back(-1)}},created:function(){this.$route.params.id||this.redirect("404"),this.getStudent()}};var i=s(3379),c=s.n(i),o=s(5084),_={insert:"head",singleton:!1};c()(o.Z,_);o.Z.locals;const v=(0,s(1900).Z)(d,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"page-header d-print-none"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-8"},[s("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),s("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("setting")))])]),t._v(" "),s("div",{staticClass:"col-auto ms-auto d-print-none"},[s("div",{staticClass:"d-flex"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goBack(a)}}},[t._v("\n                        "+t._s(t.$t("back"))+"\n                    ")])])])])]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-4 mb-3"},[t.student?s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title"},[t._v("\n                        "+t._s(t.$t("my_information"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"card-body p-4 text-center border-bottom py-3"},[s("span",{staticClass:"avatar avatar-xl mb-3 avatar-rounded",style:{backgroundImage:"url("+t.student.user.image_url+")"}}),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",[t._v(t._s(t.$t("name")))]),t._v(" "),s("td",[t._v(t._s(t.student.user.name))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("email")))]),t._v(" "),s("td",[t._v(t._s(t.student.user.email))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("class")))]),t._v(" "),s("td",[t._v(t._s(t.student.classs.name))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("section")))]),t._v(" "),s("td",[t._v(t._s(t.student.section.name))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("roll_no")))]),t._v(" "),s("td",[t._v(t._s(t.student.roll_no))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("admission_date")))]),t._v(" "),s("td",[t._v(t._s(t.formateDate(t.student.admission_date)))])])])])])]):t._e()]),t._v(" "),s("div",{staticClass:"col-md-4"},[t.student.guardian?s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title"},[t._v("\n                        "+t._s(t.$t("parent_information"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"card-body p-4 text-center py-3 table-responsive"},[s("span",{staticClass:"avatar avatar-xl mb-3 avatar-rounded",style:{backgroundImage:"url("+t.student.guardian.user.image_url+")"}}),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",[t._v(t._s(t.$t("name")))]),t._v(" "),s("td",[t._v(t._s(t.student.guardian.user.name))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("email")))]),t._v(" "),s("td",[t._v(t._s(t.student.guardian.user.email))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("phone")))]),t._v(" "),s("td",[t._v(t._s(t.student.guardian.phone))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("gender")))]),t._v(" "),s("td",[t._v(t._s(t.student.guardian.gender))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("occupation")))]),t._v(" "),s("td",[t._v(t._s(t.student.guardian.occupation?t.student.guardian.occupation:"-"))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("joined_date")))]),t._v(" "),s("td",[t._v(t._s(t.formateDate(t.student.guardian.created_at)))])])])])])]):t._e()])])])}),[],!1,null,"27bf2f88",null).exports}}]);