parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Rn6r":[function(require,module,exports) {
module.exports={env:{api:"http://test.api.vattly.com",website:"https://etf-data.com/",name:"Vattly"}};
},{}],"mvXk":[function(require,module,exports) {
"use strict";var e=require("./global-variables");new Vue({el:"#side-menu",data:function(){return{menuItems:[],interaction:{menu:!1}}},methods:{smoothScrollToLink:function(e,t){t.preventDefault(),e.scrollIntoView({behavior:"smooth"}),this.interaction.menu=!1},applyIntersectStyles:function(e,t){e.forEach(function(e){e.intersectionRatio>0?document.querySelectorAll('a[href="#'+e.target.id+'"]').forEach(function(e){return e.parentElement.classList.add("active")}):document.querySelectorAll('a[href="#'+e.target.id+'"]').forEach(function(e){return e.parentElement.classList.remove("active")})})}},mounted:function(){var e=this;document.querySelectorAll("[menu-item][top]").forEach(function(t){new IntersectionObserver(e.applyIntersectStyles).observe(t);var n=new Object({id:t.id,content:t.getAttribute("menu-item"),subs:[],linkTo:t});e.menuItems.push(n),t.querySelectorAll("[menu-item]:not([top])").forEach(function(t){new IntersectionObserver(e.applyIntersectStyles).observe(t),n.subs.push(new Object({id:t.id,linkTo:t,content:t.getAttribute("menu-item")}))})})}});
},{"./global-variables":"Rn6r"}],"YVzH":[function(require,module,exports) {
"use strict";require("./section-side-menu");var e=new URLSearchParams(window.location.search),a=e.get("myParam");new Vue({el:"#app",computed:{token:function(){return new URLSearchParams(window.location.search).get("token")}}});
},{"./section-side-menu":"mvXk"}]},{},["YVzH"], null)
//# sourceMappingURL=/js/success.bundle.js.map