!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t);var o={header:document.querySelector(".header"),nav:document.querySelector(".headerNav"),navList:document.querySelector(".navList"),home:document.querySelector(".home"),about:document.querySelector(".about"),contacts:document.querySelector(".contacts"),posts:document.querySelector(".posts"),postForm:document.querySelector(".postForm")}.contacts;console.log(o);var a=["stone","scissors","paper"];var c,u=a.map((function(e){var t=document.createElement("button");return t.textContent=e,t.dataset.value=e,t}));console.log(u),o.append.apply(o,function(e){if(Array.isArray(e))return n(e)}(c=u)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var i=document.createElement("p");i.style.fontSize="30px",o.append(i),o.addEventListener("click",(function(e){i.textContent=function(e,t,r){var n=e.target.dataset.value;console.log(n);var o=t[function(e){return Math.round(Math.random()*(e.length-1))}(t)];console.log(o);var a=r.textContent;a=n===o?"user: ".concat(n," - comp: ").concat(o," = нычья"):"stone"===n&&"scissors"===o||"scissors"===n&&"paper"===o||"paper"===n&&"stone"===o?"user with value ".concat(n," won"):"comp with value ".concat(o," won");return a}(e,a,i)}))}]);
//# sourceMappingURL=main.bundle.js.map