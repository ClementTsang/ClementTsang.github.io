(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("85ec"),a=i.n(s);a.a},"124a":function(t,e,i){},"30b1":function(t,e,i){"use strict";var s=i("3d9d"),a=i.n(s);a.a},"337e":function(t,e,i){},"3d9d":function(t,e,i){},4093:function(t,e,i){"use strict";var s=i("337e"),a=i.n(s);a.a},"42f9":function(t,e,i){"use strict";var s=i("6954"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e6cf"),i("a4d3"),i("db4d");var s=i("2b0e"),a=i("d410"),n=(i("5abe7"),i("b0c0"),i("ac1f"),i("5319"),i("8c4f")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:this.throttle,intersection:this.intersection},expression:"{\n      callback: visibilityChanged,\n      throttle: this.throttle,\n      intersection: this.intersection,\n    }"}],staticClass:"hero is-fullheight-with-navbar",attrs:{id:"home"}},[i("img",{staticClass:"hero-background",attrs:{src:"assets/tri.webp"}}),i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"hero-title has-text-centered"},[t._v(" Clement Tsang ")]),i("hr",{staticClass:"is-divider"}),i("article",[i("h3",{staticClass:"has-text-centered"},[t._v(" I'm a developer who enjoys working on all sorts of projects, currently studying at the University of Waterloo as a fourth year Computer Science student. I enjoy music, reading, video games, and working on personal projects in my free time. ")]),i("br"),i("div",{staticClass:"columns is-centered is-marginless is-mobile"},[i("div",{staticClass:"column is-half is-paddingless is-marginless"},[i("div",{staticClass:"columns is-centered is-marginless is-mobile"},[i("div",{staticClass:"column"},[i("div",{staticClass:"columns is-centered is-marginless is-mobile"},[i("div",{staticClass:"column"}),i("div",{staticClass:"column has-text-centered"},[i("b-tooltip",{attrs:{label:"Resume",position:"is-bottom",type:"is-dark"}},[i("a",{attrs:{href:"/assets/resume.pdf",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fas","file"],size:"2x","fixed-width":""}})],1)])],1)])]),i("div",{staticClass:"column"},[i("div",{staticClass:"columns is-centered is-marginless is-mobile"},[i("div",{staticClass:"column has-text-centered"},[i("b-tooltip",{attrs:{label:"GitHub",position:"is-bottom",type:"is-dark"}},[i("a",{attrs:{href:"https://github.com/ClementTsang",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"],size:"2x","fixed-width":""}})],1)])],1)])]),i("div",{staticClass:"column"},[i("div",{staticClass:"columns is-centered is-marginless is-mobile"},[i("div",{staticClass:"column has-text-centered"},[i("b-tooltip",{attrs:{label:"LinkedIn",position:"is-bottom",type:"is-dark"}},[i("a",{attrs:{href:"https://www.linkedin.com/in/clement-tsang",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"2x","fixed-width":""}})],1)])],1),i("div",{staticClass:"column"})])])])])])])])])]),i("section",[i("Experience",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:this.throttle,intersection:this.intersection},expression:"{\n        callback: visibilityChanged,\n        throttle: this.throttle,\n        intersection: this.intersection,\n      }"}]})],1),i("section",[i("Projects",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,intersection:{threshold:.4}},expression:"{\n        callback: visibilityChanged,\n        intersection: {\n          threshold: 0.4,\n        },\n      }"}]})],1),i("section",[i("Contact",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:this.throttle,intersection:this.intersection},expression:"{\n        callback: visibilityChanged,\n        throttle: this.throttle,\n        intersection: this.intersection,\n      }"}]})],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"content has-text-centered"},[i("p",[t._v(" Website source can be found "),i("a",{attrs:{href:"https://github.com/ClementTsang/personal-website"}},[t._v("on GitHub")]),t._v(". If you want to use it, feel free! ")]),i("p",[t._v(" The source code is licensed under "),i("a",{attrs:{href:"https://github.com/ClementTsang/personal-website/blob/master/LICENSE"}},[t._v("MIT")]),t._v(". ")])])])}],c=(i("a630"),i("e260"),i("fb6a"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0"),i("b85c")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns is-marginless is-centered page-item",attrs:{id:"experience"}},[i("div",{staticClass:"column is-11"},[i("article",[i("p",{staticClass:"title has-text-centered"},[t._v(" Experience ")]),i("hr",{staticClass:"is-divider"}),i("br"),i("p",{staticClass:"subtitle"},[t._v(" Work ")]),i("WorkInfo",{staticStyle:{"padding-bottom":"2rem"},attrs:{"entry-title":"Wish","date-range":["Jan. 2020 - Apr. 2020","Sept. 2020 - Dec. 2020"],"job-position":"Software Engineering Intern","job-description":"Worked on the Wish Marketplace team as a mobile and backend developer for the Wish Local app.","job-location":"Ontario, Canada","job-website":"https://www.wish.com/companyinfo","job-website-name":"Wish"}}),i("WorkInfo",{staticStyle:{"padding-bottom":"2rem"},attrs:{"entry-title":"YuJa Inc.","date-range":["May 2019 - Aug. 2019"],"job-position":"Software Developer - Full Stack","job-description":"Worked as a full stack software developer\n\t\t\t\t\t\t\t\t\tfor a new product, Panorama, automatically creating \n\t\t\t\t\t\t\t\t\taccessible documents for files uploaded to LMS sites like D2L and Blackboard.","job-location":"Ontario, Canada","job-website":"https://www.yuja.com/","job-website-name":"YuJa"}}),i("WorkInfo",{staticStyle:{"padding-bottom":"2rem"},attrs:{"entry-title":"YuJa Inc.","date-range":["Sept. 2018 - Dec. 2018"],"job-position":"Software Developer - Testing and Operations","job-description":"Ran QA tests to ensure the quality of our product and\n        new features without any regressions, in addition to developing\n        automated tests to save time and improve test quality using Selenium.","job-location":"Ontario, Canada","job-website":"https://www.yuja.com/","job-website-name":"YuJa"}}),i("hr",{staticClass:"is-thin-divider"}),i("br"),i("p",{staticClass:"subtitle"},[t._v(" Education ")]),i("WorkInfo",{staticStyle:{"padding-bottom":"2rem"},attrs:{"entry-title":"University of Waterloo","date-range":["2017 - Present"],"job-position":"Computer Science, Honours","job-description":"Currently a fourth year Computer Science student at the Unviersity of Waterloo, and set to graduate in 2022.","job-location":"Ontario, Canada"}})],1)])])},d=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns is-marginless is-centered"},[i("div",{staticClass:"column is-4 is-paddingless"},[i("p",{staticClass:"entry-title"},[t._v(" "+t._s(t.entryTitle)+" ")]),i("p",{staticClass:"smaller-subtitle entry-subtitle"},[t._v(" "+t._s(t.jobPosition)+" ")]),i("h3",[i("font-awesome-icon",{staticStyle:{"margin-bottom":"0.2em"},attrs:{icon:["fas","calendar-alt"],size:"sm","fixed-width":""}}),i("ul",{staticStyle:{display:"inline-table","margin-left":"0.3em"}},t._l(t.dateRange,(function(e){return i("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)],1),i("h3",[i("font-awesome-icon",{staticStyle:{"margin-bottom":"0.2em"},attrs:{icon:["fas","map-marker-alt"],size:"sm","fixed-width":""}}),t._v(" "+t._s(t.jobLocation)+" ")],1),""!==t.jobWebsite?i("h3",[i("a",{attrs:{href:t.jobWebsite,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fas","link"],size:"sm","fixed-width":""}}),t._v(" "+t._s(t.jobWebsiteName)+" ")],1)]):t._e()]),i("div",{staticClass:"column is-1"}),i("div",{staticClass:"column is-7 is-paddingless"},[i("p",{staticClass:"entry-subtitle larger-subtitle"},[t._v(" "+t._s(t.jobPosition)+" ")]),i("h3",{staticClass:"job-desc"},[t._v(" "+t._s(t.jobDescription)+" ")])])])},m=[],b={name:"WorkInfo",props:{entryTitle:{type:String,required:!0},dateRange:{type:Array,required:!0},jobPosition:{type:String,required:!0},jobDescription:{type:String,required:!0},jobLocation:{type:String,default:""},jobWebsite:{type:String,default:""},jobWebsiteName:{type:String,default:""}}},p=b,f=(i("4093"),i("2877")),h=Object(f["a"])(p,u,m,!1,null,"7aae2d54",null),v=h.exports,g={name:"Experience",components:{WorkInfo:v}},y=g,C=(i("42f9"),Object(f["a"])(y,l,d,!1,null,"4cb2ed26",null)),j=C.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns is-marginless is-centered page-item",attrs:{id:"projects"}},[i("div",{staticClass:"column is-12"},[i("article",[i("p",{staticClass:"title has-text-centered"},[t._v(" Projects ")]),i("hr",{staticClass:"is-divider"}),i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column"},[i("ProjectInfo",{attrs:{"project-image":"assets/bottom.webp","project-link":"https://github.com/ClementTsang/bottom","project-title":"bottom","project-description":"A crossplatform top clone, written in Rust."}})],1),i("div",{staticClass:"column"},[i("ProjectInfo",{attrs:{"project-image":"assets/rustnao.webp","project-link":"https://github.com/ClementTsang/RustNAO","project-title":"RustNAO","project-description":"A Rust wrapper for the SauceNAO API, a popular reverse image search engine."}})],1)]),i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column"},[i("ProjectInfo",{attrs:{"project-image":"assets/rustcc.webp","project-link":"https://github.com/ClementTsang/rustcc","project-title":"rustcc","project-description":"A simple C compiler, written from scratch in Rust."}})],1),i("div",{staticClass:"column"},[i("ProjectInfo",{attrs:{"project-image":"assets/banshee.webp","project-link":"https://github.com/ClementTsang/banshee","project-title":"Banshee","project-description":"A osu! clone, written in C++ and featuring automatic map generation."}})],1)])])])])},k=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-div has-text-centered"},[i("div",{staticClass:"project-card card",style:{backgroundImage:"url("+t.projectImage+")"}},[i("div",{staticClass:"frost-card card-content is-shadowless"},[i("div",{staticClass:" has-text-centered"},[i("p",{staticClass:"entry-title"},[t._v(" "+t._s(t.projectTitle)+" ")]),i("p",{staticClass:"entry-subtitle"},[t._v(" "+t._s(t.projectDescription)+" ")]),i("br"),i("div",{staticClass:"entry-subtitle",staticStyle:{display:"inline"}},[i("b-tooltip",{attrs:{label:"GitHub Page",position:"is-bottom",type:"is-dark"}},[i("a",{attrs:{href:t.projectLink,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"],size:"2x","fixed-width":""}})],1)])],1),""!=t.projectWebsite?i("div",{staticClass:"entry-subtitle",staticStyle:{display:"inline"}},[i("b-tooltip",{attrs:{label:"Project Page",position:"is-bottom",type:"is-dark"}},[i("a",{attrs:{href:t.projectLink,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fas","external-link-alt"],size:"2x","fixed-width":""}})],1)])],1):t._e(),""!=t.projectDownload?i("div",{staticClass:"entry-subtitle",staticStyle:{display:"inline"}},[i("b-tooltip",{attrs:{label:"Download",position:"is-bottom",type:"is-dark"}},[i("a",{attrs:{href:t.projectLink,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fas","download"],size:"2x","fixed-width":""}})],1)])],1):t._e()])])])])},x=[],S={props:{projectImage:{type:String,required:!0},projectLink:{type:String,required:!0},projectTitle:{type:String,required:!0},projectDescription:{type:String,required:!0},projectWebsite:{type:String,default:""},projectDownload:{type:String,default:""}},name:"ProjectInfo"},I=S,O=(i("8eee"),Object(f["a"])(I,_,x,!1,null,"2ffbdbb7",null)),P=O.exports,E={name:"Projects",components:{ProjectInfo:P}},W=E,D=(i("94f2"),Object(f["a"])(W,w,k,!1,null,"3ad081ed",null)),T=D.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns is-marginless is-centered page-item",attrs:{id:"contact"}},[i("div",{staticClass:"column is-11"},[i("article",[i("p",{staticClass:"title has-text-centered"},[t._v(" Contact ")]),i("hr",{staticClass:"is-divider"}),i("h3",{staticClass:"has-text-centered"},[t._v(" Interested in getting in touch with me? Feel free to contact me here: ")]),i("br"),i("div",{staticClass:"columns is-centered is-marginless is-mobile"},[i("div",{staticClass:"column is-half-mobile is-marginless is-paddingless is-two-thirds-desktop"},[i("div",{staticClass:"columns is-centered is-marginless"},[i("div",{staticClass:"column has-text-centered is-marginless is-paddingless"},[i("h3",[i("a",{attrs:{href:"mailto: cjhtsang@uwaterloo.ca",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"lg","fixed-width":""}}),t._v(" cjhtsang@uwaterloo.ca ")],1)])])])])])])])])},A=[],H={name:"Contact"},N=H,M=(i("67f0"),Object(f["a"])(N,L,A,!1,null,"6c009fd8",null)),q=M.exports,B={name:"HomePage",components:{Experience:j,Projects:T,Contact:q},mounted:function(){this.scroll_elements=new Map([]),this.scroll_elements.set("home",!0);var t=Array.from(document.getElementsByTagName("section")).slice(1);t.sort((function(t,e){return t===e?0:t.compareDocumentPosition?2&t.compareDocumentPosition(e)?1:-1:t.sourceIndex-e.sourceIndex}));var e,i=Object(c["a"])(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;1===s.childNodes.length&&this.scroll_elements.set(s.childNodes[0].id,!1)}}catch(a){i.e(a)}finally{i.f()}},data:function(){return{scroll_elements:new Map([]),throttle:0,intersection:{threshold:.105}}},methods:{visibilityChanged:function(t,e){this.scroll_elements.set(e.target.id,t);var i,s=!1,a=Object(c["a"])(this.scroll_elements);try{for(a.s();!(i=a.n()).done;){var n=i.value;if(!0===s||!1===n[1]){if("home"!==n[1]){var r=document.getElementById("".concat(n[0],"-link"));r&&r.classList.remove("pseudo-navbar-focus")}}else if(!0===n[1]&&(s=!0,"home"!==n[1])){var o=document.getElementById("".concat(n[0],"-link"));o&&o.classList.add("pseudo-navbar-focus")}}}catch(l){a.e(l)}finally{a.f()}}}},z=B,R=(i("30b1"),Object(f["a"])(z,r,o,!1,null,"786d3f9e",null)),$=R.exports;s["a"].use(n["a"]);var J=new n["a"]({mode:"history",routes:[{path:"/",name:"Clement Tsang",component:$,props:{}}],scrollBehavior:function(t){if(t.hash&&document.querySelector(t.hash))return window.scrollTo({top:document.getElementById(t.hash.substring(1)).offsetTop-document.getElementsByClassName("navbar-brand")[0].offsetHeight+("#home"===t.hash?0:1),behavior:"smooth"})}});J.beforeEach((function(t,e,i){document.title=t.name,i()})),J.afterEach((function(t,e){J.replace({path:"/"}).catch((function(t){}))}));var Y=J,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item brand",attrs:{to:"/#home"},nativeOn:{click:function(e){return t.mobileCloseHamburger(e)}}},[i("p",[t._v("Clement Tsang")])]),i("a",{staticClass:"navbar-burger burger",attrs:{id:"menu-hamburger",role:"button","aria-label":"menu","aria-expanded":"false","data-target":"main-nav-bar"},on:{click:t.toggleHamburger}},[i("span",{attrs:{"aria-hidden":"true"}}),i("span",{attrs:{"aria-hidden":"true"}}),i("span",{attrs:{"aria-hidden":"true"}})]),i("a",{staticClass:"navbar-item dark-mode-btn",attrs:{id:"dark-by-hamburger"},on:{click:t.toggleDarkMode}},[i("font-awesome-icon",{attrs:{icon:t.isDark?["fas","sun"]:["fas","moon"],"fixed-width":""}})],1)],1),i("div",{staticClass:"navbar-menu is-shadowless is-marginless is-paddingless",attrs:{id:"main-nav-bar"}},[i("div",{staticClass:"navbar-end"},[i("router-link",{staticClass:"navbar-item",attrs:{id:"experience-link",to:"/#experience"},nativeOn:{click:function(e){return t.mobileCloseHamburger(e)}}},[t._v(" Experience ")]),i("router-link",{staticClass:"navbar-item",attrs:{id:"projects-link",to:"/#projects"},nativeOn:{click:function(e){return t.mobileCloseHamburger(e)}}},[t._v(" Projects ")]),i("router-link",{staticClass:"navbar-item",attrs:{id:"contact-link",to:"/#contact"},nativeOn:{click:function(e){return t.mobileCloseHamburger(e)}}},[t._v(" Contact ")])],1)]),i("a",{staticClass:"navbar-item dark-mode-btn",attrs:{id:"dark-away-from-hamburger"},on:{click:t.toggleDarkMode}},[i("font-awesome-icon",{attrs:{icon:t.isDark?["fas","sun"]:["fas","moon"],"fixed-width":""}})],1)]),i("router-view")],1)},U=[],F={data:function(){return{isDark:!1}},created:function(){},methods:{toggleHamburger:function(){var t=document.getElementById("menu-hamburger"),e=t.dataset.target;t.classList.toggle("is-active"),document.getElementById(e).classList.toggle("is-active")},mobileCloseHamburger:function(){var t=document.getElementById("menu-hamburger");t.classList.contains("is-active")&&this.toggleHamburger()},toggleDarkMode:function(){this.isDark?(this.isDark=!1,document.documentElement.removeAttribute("data-theme")):(this.isDark=!0,document.documentElement.setAttribute("data-theme","dark"))}}},Q=F,K=(i("034f"),Object(f["a"])(Q,G,U,!1,null,null,null)),V=K.exports,X=i("85fe"),Z=i("ecee"),tt=i("c074"),et=i("f2d1"),it=i("ad3d"),st=i("7707"),at=i.n(st),nt=i("5abe"),rt=i.n(nt);s["a"].directive("observe-visibility",X["a"]),Z["c"].add(tt["f"],tt["j"],tt["d"],tt["b"],tt["g"],tt["a"],tt["h"],tt["c"],tt["e"],tt["k"],tt["i"]),Z["c"].add(et["a"],et["b"]),s["a"].component("font-awesome-icon",it["a"]),s["a"].use(a["a"]),s["a"].config.productionTip=!1,new s["a"]({router:Y,render:function(t){return t(V)}}).$mount("#app"),at.a.polyfill(),s["a"].use(rt.a)},"67f0":function(t,e,i){"use strict";var s=i("124a"),a=i.n(s);a.a},6954:function(t,e,i){},"71b7":function(t,e,i){},"85ec":function(t,e,i){},"8eee":function(t,e,i){"use strict";var s=i("71b7"),a=i.n(s);a.a},"94f2":function(t,e,i){"use strict";var s=i("a92a"),a=i.n(s);a.a},a92a:function(t,e,i){}});
//# sourceMappingURL=app-legacy.87ab772d.js.map