parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var e=document.querySelector("#value"),b=function(){return e.value},c=function($){return e.value=$},f=function($){return e.value+=$},k=document.querySelectorAll(".number");k.forEach(function($){return $.addEventListener("click",function($){var e=$.target;f(e.textContent)})});var j=document.querySelector("#dot");j.addEventListener("click",function($){-1===b().indexOf(".")&&(0===b().length&&f(0),f("."))});var d,a,g=document.querySelector("#history"),h=function($,e){return g.textContent="".concat($," ").concat(e)},i=function(){return g.textContent=" "},l=document.querySelector("#reset");l.addEventListener("click",function($){c(""),i()});var m=document.querySelectorAll(".operation");m.forEach(function($){return $.addEventListener("click",function($){var e=$.target;b().length>0?(d=e.textContent,a=parseFloat(b()),c(""),h(a,d)):(a||0===a)&&d&&(d=e.textContent,h(a,d))})});var n=document.querySelector("#equal");n.addEventListener("click",function($){if(d&&(a||0===a)&&b().length>0){var e,r=parseFloat(b());switch(d){case"+":e=a+r;break;case"-":e=a-r;break;case"*":e=a*r;break;case"/":e=a/r;}c(e),i(),a=null,d=null}});var o=document.querySelector("#revert");o.addEventListener("click",function($){var e=b();"-"===e[0]?c(e.substring(1)):c("-"+e)});return{"Focm":{}};});