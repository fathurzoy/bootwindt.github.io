(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c-carousel"],{"0086":function(t,e,s){function a(t){return-1!==t.type.indexOf("mouse")?t.clientX:t.touches[0].clientX}function o(t){return-1!==t.type.indexOf("mouse")?t.clientY:t.touches[0].clientY}var i=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(s){}return t}(),c={install:function(t,e){var s=Object.assign({},{disableClick:!1,tapTolerance:10,swipeTolerance:30,touchHoldTolerance:400,longTapTimeInterval:400,touchClass:""},e);function c(t){var e=this.$$touchObj,s=t.type.indexOf("touch")>=0,i=t.type.indexOf("mouse")>=0,c=this;s&&(e.lastTouchStartTime=t.timeStamp),i&&e.lastTouchStartTime&&t.timeStamp-e.lastTouchStartTime<350||e.touchStarted||(v(this),e.touchStarted=!0,e.touchMoved=!1,e.swipeOutBounded=!1,e.startX=a(t),e.startY=o(t),e.currentX=0,e.currentY=0,e.touchStartTime=t.timeStamp,e.touchHoldTimer=setTimeout((function(){d(t,c,"touchhold")}),e.options.touchHoldTolerance),d(t,this,"start"))}function r(t){var e=this.$$touchObj;if(e.currentX=a(t),e.currentY=o(t),e.touchMoved){if(!e.swipeOutBounded){var s=e.options.swipeTolerance;e.swipeOutBounded=Math.abs(e.startX-e.currentX)>s&&Math.abs(e.startY-e.currentY)>s}}else{var i=e.options.tapTolerance;e.touchMoved=Math.abs(e.startX-e.currentX)>i||Math.abs(e.startY-e.currentY)>i,e.touchMoved&&(m(e),d(t,this,"moved"))}e.touchMoved&&d(t,this,"moving")}function n(){var t=this.$$touchObj;m(t),p(this),t.touchStarted=t.touchMoved=!1,t.startX=t.startY=0}function l(t){var e=this.$$touchObj,s=t.type.indexOf("touch")>=0,a=t.type.indexOf("mouse")>=0;if(s&&(e.lastTouchEndTime=t.timeStamp),m(e),!(a&&e.lastTouchEndTime&&t.timeStamp-e.lastTouchEndTime<350))if(e.touchStarted=!1,p(this),d(t,this,"end"),e.touchMoved){if(!e.swipeOutBounded){var o,i=e.options.swipeTolerance;o=Math.abs(e.startX-e.currentX)<i?e.startY>e.currentY?"top":"bottom":e.startX>e.currentX?"left":"right",e.callbacks["swipe."+o]?d(t,this,"swipe."+o,o):d(t,this,"swipe",o)}}else e.callbacks.longtap&&t.timeStamp-e.touchStartTime>e.options.longTapTimeInterval?(t.preventDefault(),d(t,this,"longtap")):d(t,this,"tap")}function u(){v(this)}function h(){p(this)}function d(t,e,s,a){var o=e.$$touchObj,i=o.callbacks[s]||[];if(0===i.length)return null;for(var c=0;c<i.length;c++){var r=i[c];r.modifiers.stop&&t.stopPropagation(),r.modifiers.prevent&&t.preventDefault(),r.modifiers.self&&t.target!==t.currentTarget||"function"===typeof r.value&&(a?r.value(a,t):r.value(t))}}function v(t){var e=t.$$touchObj.options.touchClass;e&&t.classList.add(e)}function p(t){var e=t.$$touchObj.options.touchClass;e&&t.classList.remove(e)}function m(t){t.touchHoldTimer&&(clearTimeout(t.touchHoldTimer),t.touchHoldTimer=null)}function f(t,e){var a=t.$$touchObj||{callbacks:{},hasBindTouchEvents:!1,options:s};return e&&(a.options=Object.assign({},a.options,e)),t.$$touchObj=a,t.$$touchObj}t.directive("touch",{bind:function(t,e){var s=f(t),a=e.arg||"tap";switch(a){case"swipe":var o=e.modifiers;if(o.left||o.right||o.top||o.bottom){for(var d in e.modifiers)if(["left","right","top","bottom"].indexOf(d)>=0){var v="swipe."+d;s.callbacks[v]=s.callbacks[v]||[],s.callbacks[v].push(e)}}else s.callbacks.swipe=s.callbacks.swipe||[],s.callbacks.swipe.push(e);break;default:s.callbacks[a]=s.callbacks[a]||[],s.callbacks[a].push(e)}if(!s.hasBindTouchEvents){var p=!!i&&{passive:!0};t.addEventListener("touchstart",c,p),t.addEventListener("touchmove",r,p),t.addEventListener("touchcancel",n),t.addEventListener("touchend",l),s.options.disableClick||(t.addEventListener("mousedown",c),t.addEventListener("mousemove",r),t.addEventListener("mouseup",l),t.addEventListener("mouseenter",u),t.addEventListener("mouseleave",h)),s.hasBindTouchEvents=!0}},unbind:function(t){t.removeEventListener("touchstart",c),t.removeEventListener("touchmove",r),t.removeEventListener("touchcancel",n),t.removeEventListener("touchend",l),t.$$touchObj&&!t.$$touchObj.options.disableClick&&(t.removeEventListener("mousedown",c),t.removeEventListener("mousemove",r),t.removeEventListener("mouseup",l),t.removeEventListener("mouseenter",u),t.removeEventListener("mouseleave",h)),delete t.$$touchObj}}),t.directive("touch-class",{bind:function(t,e){f(t,{touchClass:e.value})}}),t.directive("touch-options",{bind:function(t,e){f(t,e.value)}})}};t.exports=c},"8fba":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap"},[s("h1",{staticClass:"w-full px-2 pt-2 font-bold text-3xl"},[t._v("Carousel BootWind Component")]),s("ul",{staticClass:"w-full lg:w-1/2 mb-12"},[s("li",{staticClass:"p-2"},[s("ul",{staticClass:"shadow-lg rounded-lg bg-white text-default"},[t._l(t.carouselImage,(function(e,a){return s("li",{key:a},[s("img",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.carouselImageTo,expression:"carouselImageTo",arg:"swipe"}],class:t.carouselImageActive==a?"":"hidden",attrs:{src:e.src,alt:e.title}})])})),s("li",{staticClass:"flex flex-wrap text-center"},[s("span",{staticClass:"w-1/2 cursor-pointer p-1 px-5 hover:bg-gray-100",on:{click:function(e){return t.carouselImageTo("right")}}},[t._v("Prev")]),s("span",{staticClass:"w-1/2 cursor-pointer p-1 px-5 hover:bg-gray-100 ",on:{click:function(e){return t.carouselImageTo("left")}}},[t._v("Next")])])],2)]),s("li",{staticClass:"p-2"},[s("ul",{staticClass:"shadow-lg rounded-lg bg-white text-default"},[t._l(t.listCarousel,(function(e,a){return s("li",{key:a},[t.carouselActive==a?s("span",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.carouselTo,expression:"carouselTo",arg:"swipe"}]},[s("div",{staticClass:"flex flex-wrap rounded-lg text-center text-white",class:e.theme},[s("div",{staticClass:"w-full py-2 px-4 flex flex-col"},[s("h5",{staticClass:"text-3xl font-bold flex-col py-1"},[t._v(t._s(e.title))]),s("p",{staticClass:"flex-col"},[t._v("With supporting text below as a natural lead-in to additional content.")]),t._m(0,!0)]),s("div",{staticClass:"w-full py-2 px-4 "},[t._v(" 2 days ago ")])])]):t._e()])})),s("li",{staticClass:"flex flex-wrap text-center"},[s("span",{staticClass:"w-1/2 cursor-pointer p-1 px-5  hover:bg-gray-100",on:{click:function(e){return t.carouselTo("right")}}},[t._v("Prev")]),s("span",{staticClass:"w-1/2 cursor-pointer p-1 px-5 hover:bg-gray-100 ",on:{click:function(e){return t.carouselTo("left")}}},[t._v("Next")])])],2)])]),s("right-menu",{staticClass:"w-full lg:w-1/2 shadow-sm p-2 lg:p-12",attrs:{youtube:"laI_rwHPnNM",next:"breadcrumb",back:"alert"}})],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"py-3"},[s("a",{staticClass:"shadow-md text-default bg-white rounded-full px-4 py-2",attrs:{href:"#"}},[t._v("Go somewhere")])])}],i=s("2b0e"),c=s("0086"),r=s.n(c);i["a"].use(r.a);var n={methods:{carouselTo(t){"left"==t?this.carouselActive<this.listCarousel.length-1&&(this.carouselActive=this.carouselActive+1):"right"==t&&this.carouselActive>0&&(this.carouselActive=this.carouselActive-1),console.log(t)},carouselImageTo(t){"left"==t?this.carouselImageActive<this.carouselImage.length-1&&(this.carouselImageActive=this.carouselImageActive+1):"right"==t&&this.carouselImageActive>0&&(this.carouselImageActive=this.carouselImageActive-1),console.log(t)}},data(){return{listCarousel:[{title:"Carousel 1",theme:"bg-default"},{title:"Carousel 2",theme:"bg-primary"},{title:"Carousel 3",theme:"bg-success"}],carouselActive:0,carouselImage:[{title:"Alert",src:"/img/doc/alert-component.jpg"},{title:"Badge",src:"/img/doc/badge-component.jpg"},{title:"Button",src:"/img/doc/button-component.jpg"}],carouselImageActive:0}}},l=n,u=s("2877"),h=Object(u["a"])(l,a,o,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=c-carousel.2b1a74e6.js.map