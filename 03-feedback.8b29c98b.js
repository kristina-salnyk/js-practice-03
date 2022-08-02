!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=c||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,u,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function p(e){return s=e,f=setTimeout(S,t),c?v(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function S(){var e=b();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?y(n,a-(e-s)):n}(e))}function w(e){return f=void 0,d&&r?v(e):(r=o=void 0,u)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return p(l);if(m)return f=setTimeout(S,t),v(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,h(n)&&(c=!!n.leading,a=(m="maxWait"in n)?g(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||l.test(t)?s(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector("form.feedback-form"),S=r.load("feedback-form-state");S&&(O.elements.email.value=S.email,O.elements.message.value=S.message),O.addEventListener("input",e(t)((function(){var e=this.elements,t=e.email,n=e.message;r.save("feedback-form-state",{email:t.value,message:n.value})}),500)),O.addEventListener("submit",(function(e){e.preventDefault();var t=this.elements,n=t.email,o=t.message;console.log({email:n.value,message:o.value}),r.remove("feedback-form-state"),this.reset()}))}();
//# sourceMappingURL=03-feedback.8b29c98b.js.map
