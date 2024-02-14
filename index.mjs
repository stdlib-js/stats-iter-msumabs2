// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msumabs2@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(m,a){var u,l,v;if(!t(m))throw new TypeError(o("invalid argument. First argument must be an iterator. Value: `%s`.",m));if(!r(a))throw new TypeError(o("invalid argument. Second argument must be a positive integer. Value: `%s`.",a));return v=i(a),e(u={},"next",(function(){var e;if(l)return{done:!0};if((e=m.next()).done)return l=!0,{done:!0};e="number"==typeof e.value?v(e.value):v(NaN);return{value:e,done:!1}})),e(u,"return",(function(e){if(l=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&n(m[s])&&e(u,s,(function(){return d(m[s](),a)})),u}export{d as default};
//# sourceMappingURL=index.mjs.map
