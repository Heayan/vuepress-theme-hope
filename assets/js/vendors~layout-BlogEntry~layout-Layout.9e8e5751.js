(window.webpackJsonp=window.webpackJsonp||[]).push([[3],Array(182).concat([function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return d}));const r=/#.*$/,o=/\.(md|html)$/,i=/\/$/,s=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(r,"").replace(o,"")}function a(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(a(t))return t;const e=t.match(r),n=e?e[0]:"",o=u(t);return i.test(o)?t:o+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),o=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!o||n===o)&&u(t.path)===u(e)}function p(t,e,n){if(a(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const o=e.split("/");n&&o[o.length-1]||o.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?o.pop():"."!==e&&o.push(e)}""!==o[0]&&o.unshift("");return o.join("/")}(e,n));const r=u(e);for(let e=0;e<t.length;e++)if(u(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}},,,function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(250)(Object,"create");t.exports=r},function(t,e,n){var r=n(310);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(316);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,,function(t,e,n){var r=n(221),o=n(249);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(222),o=n(288),i=n(289),s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(223).Symbol;t.exports=r},function(t,e,n){var r=n(287),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){},function(t,e,n){},,,,,,,,,,,function(t,e,n){},,,,,,,,,,,,,function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(297),o=n(302);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r,o,i,s,u;r=n(327),o=n(253).utf8,i=n(328),s=n(253).bin,(u=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):o.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var n=r.bytesToWords(t),a=8*t.length,c=1732584193,l=-271733879,f=-1732584194,h=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[a>>>5]|=128<<a%32,n[14+(a+64>>>9<<4)]=a;var d=u._ff,g=u._gg,v=u._hh,y=u._ii;for(p=0;p<n.length;p+=16){var _=c,b=l,x=f,m=h;c=d(c,l,f,h,n[p+0],7,-680876936),h=d(h,c,l,f,n[p+1],12,-389564586),f=d(f,h,c,l,n[p+2],17,606105819),l=d(l,f,h,c,n[p+3],22,-1044525330),c=d(c,l,f,h,n[p+4],7,-176418897),h=d(h,c,l,f,n[p+5],12,1200080426),f=d(f,h,c,l,n[p+6],17,-1473231341),l=d(l,f,h,c,n[p+7],22,-45705983),c=d(c,l,f,h,n[p+8],7,1770035416),h=d(h,c,l,f,n[p+9],12,-1958414417),f=d(f,h,c,l,n[p+10],17,-42063),l=d(l,f,h,c,n[p+11],22,-1990404162),c=d(c,l,f,h,n[p+12],7,1804603682),h=d(h,c,l,f,n[p+13],12,-40341101),f=d(f,h,c,l,n[p+14],17,-1502002290),c=g(c,l=d(l,f,h,c,n[p+15],22,1236535329),f,h,n[p+1],5,-165796510),h=g(h,c,l,f,n[p+6],9,-1069501632),f=g(f,h,c,l,n[p+11],14,643717713),l=g(l,f,h,c,n[p+0],20,-373897302),c=g(c,l,f,h,n[p+5],5,-701558691),h=g(h,c,l,f,n[p+10],9,38016083),f=g(f,h,c,l,n[p+15],14,-660478335),l=g(l,f,h,c,n[p+4],20,-405537848),c=g(c,l,f,h,n[p+9],5,568446438),h=g(h,c,l,f,n[p+14],9,-1019803690),f=g(f,h,c,l,n[p+3],14,-187363961),l=g(l,f,h,c,n[p+8],20,1163531501),c=g(c,l,f,h,n[p+13],5,-1444681467),h=g(h,c,l,f,n[p+2],9,-51403784),f=g(f,h,c,l,n[p+7],14,1735328473),c=v(c,l=g(l,f,h,c,n[p+12],20,-1926607734),f,h,n[p+5],4,-378558),h=v(h,c,l,f,n[p+8],11,-2022574463),f=v(f,h,c,l,n[p+11],16,1839030562),l=v(l,f,h,c,n[p+14],23,-35309556),c=v(c,l,f,h,n[p+1],4,-1530992060),h=v(h,c,l,f,n[p+4],11,1272893353),f=v(f,h,c,l,n[p+7],16,-155497632),l=v(l,f,h,c,n[p+10],23,-1094730640),c=v(c,l,f,h,n[p+13],4,681279174),h=v(h,c,l,f,n[p+0],11,-358537222),f=v(f,h,c,l,n[p+3],16,-722521979),l=v(l,f,h,c,n[p+6],23,76029189),c=v(c,l,f,h,n[p+9],4,-640364487),h=v(h,c,l,f,n[p+12],11,-421815835),f=v(f,h,c,l,n[p+15],16,530742520),c=y(c,l=v(l,f,h,c,n[p+2],23,-995338651),f,h,n[p+0],6,-198630844),h=y(h,c,l,f,n[p+7],10,1126891415),f=y(f,h,c,l,n[p+14],15,-1416354905),l=y(l,f,h,c,n[p+5],21,-57434055),c=y(c,l,f,h,n[p+12],6,1700485571),h=y(h,c,l,f,n[p+3],10,-1894986606),f=y(f,h,c,l,n[p+10],15,-1051523),l=y(l,f,h,c,n[p+1],21,-2054922799),c=y(c,l,f,h,n[p+8],6,1873313359),h=y(h,c,l,f,n[p+15],10,-30611744),f=y(f,h,c,l,n[p+6],15,-1560198380),l=y(l,f,h,c,n[p+13],21,1309151649),c=y(c,l,f,h,n[p+4],6,-145523070),h=y(h,c,l,f,n[p+11],10,-1120210379),f=y(f,h,c,l,n[p+2],15,718787259),l=y(l,f,h,c,n[p+9],21,-343485551),c=c+_>>>0,l=l+b>>>0,f=f+x>>>0,h=h+m>>>0}return r.endian([c,l,f,h])})._ff=function(t,e,n,r,o,i,s){var u=t+(e&n|~e&r)+(o>>>0)+s;return(u<<i|u>>>32-i)+e},u._gg=function(t,e,n,r,o,i,s){var u=t+(e&r|n&~r)+(o>>>0)+s;return(u<<i|u>>>32-i)+e},u._hh=function(t,e,n,r,o,i,s){var u=t+(e^n^r)+(o>>>0)+s;return(u<<i|u>>>32-i)+e},u._ii=function(t,e,n,r,o,i,s){var u=t+(n^(e|~r))+(o>>>0)+s;return(u<<i|u>>>32-i)+e},u._blocksize=16,u._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(u(t,e));return e&&e.asBytes?n:e&&e.asString?s.bytesToString(n):r.bytesToHex(n)}},function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},,,,,,function(t,e,n){"use strict";n.r(e);var r=n(260),o=n(257),i={name:"Sidebar",components:{SidebarLinks:r.default,NavLinks:o.a},props:["items"]},s=(n(336),n(0)),u=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";n.r(e);var r=n(344),o=n(346),i=n(182);function s(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?s(t,e):"page"===e.type&&Object(i.e)(t,e.path))}var u={name:"SidebarLinks",components:{SidebarGroup:r.a,SidebarLink:o.a},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(s(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(i.e)(this.$route,t.regularPath)}}},a=n(0),c=Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=c.exports},function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},o=(n(279),n(0)),i=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(216);n.n(r).a},function(t,e,n){"use strict";var r=n(217);n.n(r).a},function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},,,function(t,e,n){var r=n(284);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},function(t,e,n){var r=n(285),o=n(323);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},function(t,e,n){var r=n(185),o=n(286),i=n(290),s=n(320);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(s(t))}},function(t,e,n){var r=n(185),o=n(220),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(s.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e,n){var r=n(222),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(e?t[u]=n:delete t[u]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(291),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,s=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}));t.exports=s},function(t,e,n){var r=n(292);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},function(t,e,n){var r=n(293);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(294),o=n(315),i=n(317),s=n(318),u=n(319);function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=s,a.prototype.set=u,t.exports=a},function(t,e,n){var r=n(295),o=n(307),i=n(314);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(296),o=n(303),i=n(304),s=n(305),u=n(306);function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=s,a.prototype.set=u,t.exports=a},function(t,e,n){var r=n(186);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e,n){var r=n(298),o=n(299),i=n(251),s=n(301),u=/^\[object .+?Constructor\]$/,a=Function.prototype,c=Object.prototype,l=a.toString,f=c.hasOwnProperty,h=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?h:u).test(s(t))}},function(t,e,n){var r=n(221),o=n(251);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r,o=n(300),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(223)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(186),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(186),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(186);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(308),o=n(309),i=n(311),s=n(312),u=n(313);function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=s,a.prototype.set=u,t.exports=a},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(187),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(187);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(187);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(187);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(250)(n(223),"Map");t.exports=r},function(t,e,n){var r=n(188);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(188);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(188);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(188);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(321);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(222),o=n(322),i=n(185),s=n(220),u=r?r.prototype:void 0,a=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(s(e))return a?a.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},function(t,e,n){var r=n(220);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,n){"use strict";var r=n(224);n.n(r).a},function(t,e,n){"use strict";var r=n(225);n.n(r).a},,function(t,e){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],i=0;i<4;i++)8*r+6*i<=8*t.length?e.push(n.charAt(o>>>6*(3-i)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&e.push((n.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|n.indexOf(t.charAt(r))>>>6-2*o);return e}},t.exports=r},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},,,,,,,,function(t,e,n){"use strict";var r=n(236);n.n(r).a},,,,,,function(t,e,n){"use strict";var r=n(283),o=n.n(r),i=(t,e,n=null)=>{let r=o()(e,"title","");return o()(e,"frontmatter.tags")&&(r+=` ${e.frontmatter.tags.join(" ")}`),n&&(r+=` ${n}`),s(t,r)};const s=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),r=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),o=t.endsWith(" ");return new RegExp(r.map((t,e)=>r.length!==e+1||o?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)};var u={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||10,r=this.$localePath,o=[];for(let s=0;s<e.length&&!(o.length>=n);s++){const u=e[s];if(this.getPageLocalePath(u)===r&&this.isSearchable(u))if(i(t,u))o.push(u);else if(u.headers)for(let e=0;e<u.headers.length&&!(o.length>=n);e++){const n=u.headers[e];n.title&&i(t,u,n.title)&&o.push(Object.assign({},u,{path:u.path+"#"+n.slug,header:n}))}}return o},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},a=(n(324),n(0)),c=Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},function(t,e,n){"use strict";var r={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([n.e(0),n.e(94)]).then(n.t.bind(null,361,7)),Promise.all([n.e(0),n.e(94)]).then(n.t.bind(null,362,7))]).then(([n])=>{n=n.default;const{algoliaOptions:r={}}=t;n(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:[`lang:${e}`].concat(r.facetFilters||[])},r),handleSelected:(t,e,n)=>{const{pathname:r,hash:o}=new URL(n.url),i=r.replace(this.$site.base,"/");this.$router.push(`${i}${o}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},o=(n(278),n(0)),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.a=i.exports},,function(t,e,n){"use strict";n(325);var r=n(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=o.exports}])]);