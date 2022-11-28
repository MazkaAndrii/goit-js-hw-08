function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var r,o,a,i,c,u,f=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(e){var n=r,a=o;return r=o=void 0,f=e,i=t.apply(a,n)}function y(t){return f=t,c=setTimeout(b,e),l?x(t):i}function _(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-f>=a}function b(){var t=p();if(_(t))return h(t);c=setTimeout(b,function(t){var n=e-(t-u);return s?g(n,a-(t-f)):n}(t))}function h(t){return c=void 0,m&&r?x(t):(r=o=void 0,i)}function w(){var t=p(),n=_(t);if(r=arguments,o=this,u=t,n){if(void 0===c)return y(u);if(s)return c=setTimeout(b,e),x(u)}return void 0===c&&(c=setTimeout(b,e)),i}return e=v(e)||0,F(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(v(n.maxWait)||0,e):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=u=o=c=void 0},w.flush=function(){return void 0===c?i:h(p())},w}function F(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(F(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=F(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=a.test(t);return n||i.test(t)?c(t.slice(2),n?2:8):o.test(t)?NaN:+t}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function y(t){if(!("string"==typeof t||t instanceof String)){var e=x(t);throw null===t?e="null":"object"===e&&(e=t.constructor.name),new TypeError("Expected a string but received a ".concat(e))}}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var n in e)void 0===t[n]&&(t[n]=e[n]);return t}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){var n,r;y(t),"object"===b(e)?(n=e.min||0,r=e.max):(n=arguments[1],r=arguments[2]);var o=encodeURI(t).split(/%..|./).length-1;return o>=n&&(void 0===r||o<=r)}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return F(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(t,e,{leading:r,maxWait:e,trailing:o})};var w={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};function A(t,e){y(t),(e=_(e,w)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1)),!0===e.allow_wildcard&&0===t.indexOf("*.")&&(t=t.substring(2));var n=t.split("."),r=n[n.length-1];if(e.require_tld){if(n.length<2)return!1;if(!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r))return!1;if(/\s/.test(r))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(r))&&n.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}var S="(".concat("(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])","[.]){3}").concat("(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])"),$=new RegExp("^".concat(S,"$")),E=new RegExp("^("+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){7}(?:").concat("(?:[0-9a-fA-F]{1,4})","|:)|")+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){6}(?:").concat(S,"|:").concat("(?:[0-9a-fA-F]{1,4})","|:)|")+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){5}(?::").concat(S,"|(:").concat("(?:[0-9a-fA-F]{1,4})","){1,2}|:)|")+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){4}(?:(:").concat("(?:[0-9a-fA-F]{1,4})","){0,1}:").concat(S,"|(:").concat("(?:[0-9a-fA-F]{1,4})","){1,3}|:)|")+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){3}(?:(:").concat("(?:[0-9a-fA-F]{1,4})","){0,2}:").concat(S,"|(:").concat("(?:[0-9a-fA-F]{1,4})","){1,4}|:)|")+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){2}(?:(:").concat("(?:[0-9a-fA-F]{1,4})","){0,3}:").concat(S,"|(:").concat("(?:[0-9a-fA-F]{1,4})","){1,5}|:)|")+"(?:".concat("(?:[0-9a-fA-F]{1,4})",":){1}(?:(:").concat("(?:[0-9a-fA-F]{1,4})","){0,4}:").concat(S,"|(:").concat("(?:[0-9a-fA-F]{1,4})","){1,6}|:)|")+"(?::((?::".concat("(?:[0-9a-fA-F]{1,4})","){0,5}:").concat(S,"|(?::").concat("(?:[0-9a-fA-F]{1,4})","){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(y(t),!(e=String(e)))return j(t,4)||j(t,6);if("4"===e){if(!$.test(t))return!1;var n=t.split(".").sort((function(t,e){return t-e}));return n[3]<=255}return"6"===e&&!!E.test(t)}var D={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[]},O=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,k=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,T=/^[a-z\d]+$/,q=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,z=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,C=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function N(t,e){if(y(t),(e=_(e,D)).require_display_name||e.allow_display_name){var n=t.match(O);if(n){var r=n[1];if(t=t.replace(r,"").replace(/(^<|>$)/g,""),r.endsWith(" ")&&(r=r.substr(0,r.length-1)),!function(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;if(/[\.";<>]/.test(e)){if(e===t)return!1;if(e.split('"').length!==e.split('\\"').length)return!1}return!0}(r))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>254)return!1;var o=t.split("@"),a=o.pop(),i=a.toLowerCase();if(e.host_blacklist.includes(i))return!1;var c=o.join("@");if(e.domain_specific_validation&&("gmail.com"===i||"googlemail.com"===i)){var u=(c=c.toLowerCase()).split("+")[0];if(!h(u.replace(/\./g,""),{min:6,max:30}))return!1;for(var f=u.split("."),l=0;l<f.length;l++)if(!T.test(f[l]))return!1}if(!(!1!==e.ignore_max_length||h(c,{max:64})&&h(a,{max:254})))return!1;if(!A(a,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!j(a)){if(!a.startsWith("[")||!a.endsWith("]"))return!1;var s=a.substr(1,a.length-2);if(0===s.length||!j(s))return!1}}if('"'===c[0])return c=c.slice(1,c.length-1),e.allow_utf8_local_part?C.test(c):q.test(c);for(var d=e.allow_utf8_local_part?z:k,g=c.split("."),p=0;p<g.length;p++)if(!d.test(g[p]))return!1;return!e.blacklisted_chars||-1===c.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}const W=document.querySelector(".feedback-form");let I=function(t){const e=localStorage.getItem(t);if(!e)return{};try{return JSON.parse(e)}catch(t){console.log(t.message)}}("feedback-form-state");W.addEventListener("input",t(e)((function(t){!function({target:{value:t,name:e}},n){n[e]=t;try{const t=JSON.stringify(n);localStorage.setItem("feedback-form-state",t)}catch(t){console.error(t.message)}}(t,I)}),500)),W.addEventListener("submit",(function(t){t.preventDefault();const{elements:{email:e,message:n}}=t.target;if(!N(e.value))return void alert("Email должен быть валидным");if(!n.value)return void alert("Заполните пожалуйста поле message");console.log(I),t.target.reset(),localStorage.removeItem("feedback-form-state"),I={}})),function(){if(0===I.length)return;const{elements:t}=W;Object.keys(I).forEach((e=>{t[e].value=I[e]}))}();
//# sourceMappingURL=03-feedback.67fef63e.js.map
