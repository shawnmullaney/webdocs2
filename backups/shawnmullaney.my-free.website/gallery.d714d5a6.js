!function r(d,u,a){function s(t,e){if(!u[t]){if(!d[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(c)return c(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=u[t]={exports:{}};d[t][0].call(o.exports,function(e){return s(d[t][1][e]||e)},o,o.exports,r,d,u,a)}return u[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function r(e,t,i){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}(this,"triggerWindowEvent",function(){n.recheckMode&&n.recheckMode()}),this.isRuntimeSite=t.isRuntimeSite,this.siteController=e.storage.siteController,this.mobileBreakPoint=991,this.builderApi=e;var o=!this.editor&&window.self!==window.top;this.resizeWaitTimeout=o?0:300,this.checkMobileMode=this.checkMobileMode.bind(this),this.setMobileMode=this.setMobileMode.bind(this),this.registerWindowEvent()}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(r,[{key:"getRenderModel",value:function(){return{}}},{key:"afterRender",value:function(e,t){var i=this,n=t.querySelectorAll("*[data-dynamic-navigation-element]");if(n||n.length){t.classList.remove("mobile");var o=t.querySelector("*[data-dynamic-container-element]");this.builderApi.defer(function(){return i.checkMobileMode(t,n,o)}),this.builderApi.defer(function(){return i.setHeaderHeight(e,t)}),window.addEventListener("resize",function(){i.__resizeTimeout&&window.clearTimeout(i.__resizeTimeout),i.__resizeTimeout=window.setTimeout(function(){i.checkMobileMode(t,n,o)},i.resizeWaitTimeout)}),this.recheckMode=this.builderApi.debounce(function(){if("undefined"!=typeof document)for(var e=t;e&&e!==document.body;)e=e.parentElement;i.checkMobileMode(t,n,o)},300)}}},{key:"dispose",value:function(){this.recheckMode=null,this.unregisterWindowEvent()}},{key:"registerWindowEvent",value:function(){"undefined"!=typeof window&&(window._zoomUpdateEvents||(window._zoomUpdateEvents=[]),window._zoomUpdateEvents.push(this.triggerWindowEvent))}},{key:"unregisterWindowEvent",value:function(){if("undefined"!=typeof window&&window._zoomUpdateEvents){var e=window._zoomUpdateEvents.indexOf(this.triggerWindowEvent);0<=e&&window._zoomUpdateEvents.splice(e,1)}}},{key:"setHeaderHeight",value:function(e,t){if(!e.model.cover&&this.isRuntimeSite){var i=t.parentElement.querySelector(".header-container");if(i){var n=t.parentElement.querySelector(".kv-check-scroll");if(!n)return;var o=n.clientHeight,r=n.children[0].clientHeight,d=Math.max(o,r);i.style.minHeight="".concat(d,"px")}}}},{key:"getOuterWidth",value:function(e){var t=e.offsetWidth,i=window.getComputedStyle(e);return t+=parseInt(i.marginLeft)+parseInt(i.marginRight)}},{key:"checkMobileMode",value:function(e,t,i,n){var o=this,r=e.classList,d=(i||e).offsetWidth,u=0;if(t.forEach(function(e){u+=o.getOuterWidth(e)}),0<d){var a="undefined"!=typeof window&&window._zoomFactor?window._zoomFactor:1,s=e.offsetWidth<=this.mobileBreakPoint/a;!n&&!s&&r.contains("mobile")?(r.remove("mobile"),this.checkMobileMode(e,t,i,!0)):u<=d&&!s?this.setMobileMode(!1,r):(d<u||s)&&this.setMobileMode(!0,r)}}},{key:"setMobileMode",value:function(e,t){e?t.add("mobile"):t.remove("mobile")}},{key:"updateProperty",value:function(){}}]),r}();window.__features=window.__features||{},window.__features.navigation=o},{}]},{},[1]),window._featureSettings={navigation:{settings:{}}};