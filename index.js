// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).itermsumabs2=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var c=r;function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[w]=e:delete t[w],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var h=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function S(t){return p(t)||_(t)}function A(){return new Function("return this;")()}l(S,"isPrimitive",p),l(S,"isObject",_);var E="object"==typeof self?self:null,N="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(N)return N;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),F=I.document&&I.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",V);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function M(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return M(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(M,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!B(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(M));var C="function"==typeof y||"object"==typeof P||"function"==typeof F?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){return"function"===C(t)}function L(t){return"number"==typeof t}var X=Number,R=X.prototype.toString;var U=b();function Y(t){return"object"==typeof t&&(t instanceof X||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function q(t){return L(t)||Y(t)}l(q,"isPrimitive",L),l(q,"isObject",Y);var z=Number.POSITIVE_INFINITY,D=X.NEGATIVE_INFINITY,H=Math.floor;function J(t){return t<z&&t>D&&H(r=t)===r;var r}function K(t){return L(t)&&J(t)}function Q(t){return Y(t)&&J(t.valueOf())}function W(t){return K(t)||Q(t)}function Z(t){return K(t)&&t>0}function $(t){return Q(t)&&t.valueOf()>0}function tt(t){return Z(t)||$(t)}l(W,"isPrimitive",K),l(W,"isObject",Q),l(tt,"isPrimitive",Z),l(tt,"isObject",$);var rt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function et(t){return t!=t}var nt="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var it="function"==typeof Float64Array?Float64Array:void 0;var ut=function(){var t,r,e;if("function"!=typeof ot)return!1;try{r=new ot([1,3.14,-3.14,NaN]),e=r,t=(nt&&e instanceof Float64Array||"[object Float64Array]"===g(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?it:function(){throw new Error("not implemented")};function ft(t){var r;if(!Z(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return r=function(t){var r,e,n,o;if(!Z(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return r=new ut(t),e=0,o=-1,n=0,function(i){var u;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%t,et(i))n=t,e=NaN;else if(n<t)n+=1,e+=i;else if(et(r[o])){for(n=1,e=i,u=0;u<t;u++)if(u!==o){if(et(r[u])){n=t,e=NaN;break}n+=1,e+=r[u]}}else!1===et(e)&&(e+=i-r[o]);return r[o]=i,e}}(t),function(t){if(0===arguments.length)return r();return r(t*t)}}function at(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function t(r,e){var n,o,i,u,f;if(f=typeof(u=r),null===u||"object"!==f&&"function"!==f||!G(u.next))throw new TypeError(at("0fX48",r));if(!Z(e))throw new TypeError(at("0fX4I",e));return i=ft(e),l(n={},"next",(function(){var t;if(o)return{done:!0};if((t=r.next()).done)return o=!0,{done:!0};t="number"==typeof t.value?i(t.value):i(NaN);return{value:t,done:!1}})),l(n,"return",(function(t){if(o=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),rt&&G(r[rt])&&l(n,rt,(function(){return t(r[rt](),e)})),n}}));
//# sourceMappingURL=index.js.map
