(self.webpackChunk=self.webpackChunk||[]).push([[5185],{1080:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(629);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const l={props:{title:{type:Boolean,required:!1,default:!0},linkClass:{type:String,required:!1,default:""}},methods:o(o({},(0,r.nv)({logoutAction:"auth/logout"})),{},{logout:function(){this.logoutAction()}})};const a=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:t.linkClass,attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._t("default"),t._v(" "),t.title?n("span",[t._v(t._s(t.$t("logout")))]):t._e()],2)}),[],!1,null,null,null).exports},5185:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});const r={components:{Logout:n(1080).Z}};const s=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-fill d-flex align-items-center justify-content-center mh-100vh"},[n("div",{staticClass:"container-tight py-6"},[n("div",{staticClass:"empty"},[n("div",{staticClass:"empty-header"},[t._v("401")]),t._v(" "),n("p",{staticClass:"empty-title"},[t._v(t._s(t.$t("not_authorized")))]),t._v(" "),n("p",{staticClass:"empty-subtitle text-muted"},[t._v("\n                "+t._s(t.$t("we_are_sorry_but_the_page_you_are_looking_for_was_not_authorized"))+"\n            ")]),t._v(" "),n("div",{staticClass:"empty-action"},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"home"}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),n("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}}),t._v(" "),n("line",{attrs:{x1:"5",y1:"12",x2:"11",y2:"18"}}),t._v(" "),n("line",{attrs:{x1:"5",y1:"12",x2:"11",y2:"6"}})]),t._v("\n                    "+t._s(t.$t("take_me_home"))+"\n                ")]),t._v(" "),n("logout",{attrs:{linkClass:"btn btn-primary ml-2"}})],1)])])])}),[],!1,null,null,null).exports}}]);