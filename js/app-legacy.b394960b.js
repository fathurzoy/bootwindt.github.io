(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i={app:0},s=[];function o(e){return l.p+"js/"+({"c-alert":"c-alert","c-badge":"c-badge","c-button":"c-button","c-cards":"c-cards","c-carousel":"c-carousel",docs:"docs",icons:"icons",instalasi:"instalasi"}[e]||e)+"-legacy."+{"c-alert":"69e7ed87","c-badge":"96f4e688","c-button":"a6285cdc","c-cards":"825470ca","c-carousel":"877d64be",docs:"1ea52e71",icons:"16a9706c",instalasi:"4ccde0d0"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={docs:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"c-alert":"c-alert","c-badge":"c-badge","c-button":"c-button","c-cards":"c-cards","c-carousel":"c-carousel",docs:"docs",icons:"icons",instalasi:"instalasi"}[e]||e)+"."+{"c-alert":"31d6cfe0","c-badge":"31d6cfe0","c-button":"31d6cfe0","c-cards":"31d6cfe0","c-carousel":"31d6cfe0",docs:"4a9da0b7",icons:"31d6cfe0",instalasi:"31d6cfe0"}[e]+".css",i=l.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],p.parentNode.removeChild(p),n(s)},p.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"23be":function(e,t,n){"use strict";var a=n("79a2"),r=n.n(a);t["default"]=r.a},"2a01":function(e,t,n){},"3dfd":function(e,t,n){"use strict";var a=n("e646"),r=n("23be"),i=n("2877"),s=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=n("3dfd"),i=n("9483");Object(i["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var s=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-wrap relative"},[n("img",{staticClass:"opacity-50 absolute bottom-0 right-0 lg:w-1/2",attrs:{src:"/img/hero-background-bottom.svg",alt:"hero"}}),n("div",{staticClass:"w-full px-5"},[e._m(0),n("ul",{staticClass:"w-full lg:w-2/3"},[e._m(1),e._m(2),n("li",[n("right-menu",{staticClass:"hidden lg:block shadow-sm p-2 absolute top-0 right-0 lg:w-1/4 mt-24 mr-20",attrs:{youtube:"vaiFX26BSZs",next:"",back:""}})],1)])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-2 text-primary rounded-full lg:mt-5 flex flex-wrap"},[n("h1",{staticClass:"w-auto font-bold text-4xl lg:text-5xl"},[e._v("Make a Better Website "),n("br"),e._v(" with BootWind Template "),n("br"),e._v(" & Tailwind Css")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"p-2"},[n("h1",{staticClass:"text-2xl my-4"},[e._v(" An user-friendly, open source and beautiful dashboard based on Tailwind Css. ")]),n("p",[e._v(" We at BootWind have always wanted to deliver great tools to all the web developers. We want to see better websites and web apps on the internet. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"p-2"},[n("h1",{staticClass:"text-2xl my-4"},[e._v(" Resources and credits ")]),n("p",[e._v(" This Design System is fully coded and built on top of Open Source, more details here: "),n("ol",{staticClass:"my-4 font-bold"},[n("li",[e._v("Tailwind Css")]),n("li",[e._v("Vue Js")]),n("li",[e._v("Bootstrap Icons")])])])])}],c=n("2877"),u={},d=Object(c["a"])(u,o,l,!1,null,null,null),p=d.exports,g=[{path:"/docs",name:"docs",component:function(){return n.e("docs").then(n.bind(null,"9f4d"))},children:[{path:"",name:"BootWind",meta:{title:"Vue BootWind Template",metaTags:[{name:"description",content:"Make a Better Website with BootWind Template and Tailwind Css "}]},component:p},{path:"started/install",name:"Installl",meta:{title:"Install Tailwind Vue Js",metaTags:[{name:"description",content:"Install Tailwind Css Vue Js - Vue BootWind Template "}]},component:function(){return n.e("instalasi").then(n.bind(null,"1099"))}},{path:"started/icons",name:"Icons",meta:{title:"BootWind Icons",metaTags:[{name:"description",content:"BootWind Icons - Vue BootWind Template "}]},component:function(){return n.e("icons").then(n.bind(null,"db54"))}},{path:"component/alert",name:"Alert",meta:{title:"Alert Tailwind Component",metaTags:[{name:"description",content:"Alert Tailwind CSS Component"}]},component:function(){return n.e("c-alert").then(n.bind(null,"8566"))}},{path:"component/badge",name:"Badge",meta:{title:"Badge Tailwind Component",metaTags:[{name:"description",content:"Badge Tailwind CSS Component "}]},component:function(){return n.e("c-badge").then(n.bind(null,"ab01"))}},{path:"component/buttons",name:"buttons",meta:{title:"Buttons Tailwind Componen",metaTags:[{name:"description",content:"Buttons Tailwind CSS Component "}]},component:function(){return n.e("c-button").then(n.bind(null,"febc"))}},{path:"component/cards",name:"cards",meta:{title:"Cards Tailwind Component",metaTags:[{name:"description",content:"Cards Tailwind CSS Component "}]},component:function(){return n.e("c-cards").then(n.bind(null,"c41d"))}},{path:"component/carousel",name:"carousel",meta:{title:"Carousel Tailwind CSS Component",metaTags:[{name:"description",content:"Carousel Tailwind CSS Component"}]},component:function(){return n.e("c-carousel").then(n.bind(null,"8fba"))}},{path:"*",name:"404",meta:{title:"BootWind Template",metaTags:[{name:"description",content:"Make a Better Website with BootWind Template and Tailwind Css "}]},component:p}]}];a["a"].use(s["a"]);const m=[...g,{path:"*",redirect:"/docs"}],f=new s["a"]({routes:m,scrollBehavior(e,t,n){return n||{x:0,y:0}}});f.beforeEach((e,t,n)=>{const a=e.matched.slice().reverse().find(e=>e.meta&&e.meta.title),r=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);t.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!r)return n();r.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),n()});var h=f,v=n("2f62");a["a"].use(v["a"]);var b=new v["a"].Store({state:{leftMenu:"",themeMode:localStorage.getItem("themeMode")||"dark-mode"},mutations:{toggleLeftMenu(e,t){e.leftMenu=t},toggleTheme(e,t){e.themeMode=t,localStorage.setItem("themeMode",t)}},actions:{},modules:{}}),w=(n("ba8c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{position:"sticky",top:"100px"}},[n("ul",{staticClass:"pb-5"},e._l(e.list,(function(t,a){return n("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#list-"+a,expression:"'#list-'+id"}],key:a,staticClass:"cursor-pointer px-2 py-1 text-primary font-semibold"},[e._v(e._s(t.title))])})),0),n("div",{staticClass:"videowrapper bg-theme_secondary",staticStyle:{"border-radius":"30px"}},[n("iframe",{staticStyle:{"border-radius":"30px"},attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+e.youtube,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("br"),e.back?n("router-link",{staticClass:"flex bg-primary hover:bg-primary p-1 px-4 text-indigo-100 float-left rounded-full",attrs:{to:e.back}},[n("svg",{staticClass:"bi bi-arrow-left-circle mt-1 mr-2",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"}})]),e._v(" "+e._s(e.back)+" ")]):e._e(),e.next?n("router-link",{staticClass:"flex bg-primary hover:bg-primary p-1 px-4 text-indigo-100 float-right rounded-full",attrs:{to:e.next}},[e._v(" "+e._s(e.next)+" "),n("svg",{staticClass:"bi bi-arrow-right-circle mt-1 ml-2",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"}})])]):e._e()],1)])}),y=[],x={props:["youtube","back","next","list"]},k=x,F=(n("b3ae"),Object(c["a"])(k,w,y,!1,null,"0214a854",null)),C=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"relative flex items-center justify-between my-3"},[n("h1",{staticClass:"py-2 font-semibold text-lg "},[e._v(e._s(e.title))]),n("div",{staticClass:"flex"},[n("div",{class:e.classNonA,on:{click:function(t){return e.copyToClipboard(e.data)}}},[n("svg",{staticClass:"bi bi-bookmarks m-1",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 13l5 3V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.234z"}}),n("path",{attrs:{d:"M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z"}})]),e._v(" "+e._s(e.coppied?"Copied":"")+" ")]),n("div",{class:e.showCode?e.classA:e.classNonA,on:{click:function(t){e.showCode=!e.showCode}}},[n("svg",{staticClass:"bi bi-code-slash m-1",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"}})])])])]),e.showCode?n("prism-editor",{staticClass:"mt-2",attrs:{code:e.data,language:"html"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}):e._e(),n("div",{domProps:{innerHTML:e._s(e.data)}}),n("hr",{staticClass:"mt-3"})],1)},_=[],T=(n("e42c"),{props:["data","title"],data(){return{coppied:!1,classNonA:"flex cursor-pointer mx-2 p-1 px-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-900 shadow-md rounded-lg",classA:"flex cursor-pointer mx-2 p-1 px-2 bg-indigo-200 text-indigo-800 shadow-md rounded-lg",showCode:!1}},methods:{copyToClipboard(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.coppied=!0;var n=this;setTimeout((function(){n.coppied=!1}),1e3)}}}),S=T,$=Object(c["a"])(S,A,_,!1,null,null,null),j=$.exports,B=n("431a"),E=n.n(B),O=n("f13c");a["a"].component("prism-editor",E.a),a["a"].component("bw-code",j),a["a"].component("right-menu",C),a["a"].use(O),a["a"].config.productionTip=!1,new a["a"]({router:h,store:b,render:function(e){return e(r["default"])}}).$mount("#app")},"79a2":function(e,t){},b3ae:function(e,t,n){"use strict";var a=n("2a01"),r=n.n(a);r.a},ba8c:function(e,t,n){},e42c:function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i,s=a.util.type(t);switch(n=n||{},s){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(l){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(l.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var c=r[e];return r[e]=s,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],c=a.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c={element:n,language:s,grammar:o,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var l in n)t[l]=n[l];delete t.rest}var c=new i;return s(c,c.head,e),function e(t,n,i,l,c,u,d){for(var p in i)if(i.hasOwnProperty(p)&&i[p]){var g=i[p];g=Array.isArray(g)?g:[g];for(var m=0;m<g.length;++m){if(d&&d==p+","+m)return;var f=g[m],h=f.inside,v=!!f.lookbehind,b=!!f.greedy,w=0,y=f.alias;if(b&&!f.pattern.global){var x=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,x+"g")}f=f.pattern||f;for(var k=l.next,F=c;k!==n.tail;F+=k.value.length,k=k.next){var C=k.value;if(n.length>t.length)return;if(!(C instanceof r)){var A=1;if(b&&k!=n.tail.prev){f.lastIndex=F;var _=f.exec(t);if(!_)break;var T=_.index+(v&&_[1]?_[1].length:0),S=_.index+_[0].length,$=F;for($+=k.value.length;$<=T;)k=k.next,$+=k.value.length;if($-=k.value.length,F=$,k.value instanceof r)continue;for(var j=k;j!==n.tail&&($<S||"string"==typeof j.value&&!j.prev.value.greedy);j=j.next)A++,$+=j.value.length;A--,C=t.slice(F,$),_.index-=F}else{f.lastIndex=0;_=f.exec(C)}if(_){v&&(w=_[1]?_[1].length:0);T=_.index+w,_=_[0].slice(w),S=T+_.length;var B=C.slice(0,T),E=C.slice(S),O=k.prev;B&&(O=s(n,O,B),F+=B.length),o(n,O,A);var M=new r(p,h?a.tokenize(_,h):_,y,_,b);if(k=s(n,O,M),E&&s(n,k,E),1<A&&e(t,n,i,k.prev,F,!0,p+","+m),u)break}else if(u)break}}}}}(e,c,t,c.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function o(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;(t.next=a).prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),a.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,s=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),s&&e.close()}),!1)),a;var l=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(l&&(a.filename=l.src,l.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}(n);e.exports&&(e.exports=a),"undefined"!=typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",i)}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript}).call(this,n("c8ba"))},e646:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[]}});
//# sourceMappingURL=app-legacy.b394960b.js.map