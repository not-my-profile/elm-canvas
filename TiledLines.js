!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function e(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function u(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function a(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function i(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function f(c){return n(9,c,function(o){return function(f){return function(i){return function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return c(o,f,i,a,u,e,t,n,r)}}}}}}}}})}function b(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function s(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function l(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function d(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function h(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}function o(r,n,t,e,u,a,i,f,o,c){return 9===r.a?r.f(n,t,e,u,a,i,f,o,c):r(n)(t)(e)(u)(a)(i)(f)(o)(c)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var c=e(g);function p(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function v(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function m(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=m(r.a,n.a))?t:(t=m(r.b,n.b))?t:m(r.c,n.c);for(;r.b&&n.b&&!(t=m(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var y=0;function w(r,n){return{a:r,b:n}}function k(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function A(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var j=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),_=e(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,w(t,n)});function T(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var N=e(function(r,n){var t=n%r;return 0===r?T(11):0<t&&r<0||t<0&&0<r?t+r:t}),E=Math.cos,L=Math.sin;var x=Math.ceil,q=Math.floor,C=Math.round,S=Math.log;var z=e(function(r,n){return n.join(r)});function J(r){return r+""}var M=e(function(r,n){return O(r,G(n))});function O(r,n){switch(r.$){case 3:return"boolean"==typeof n?pn(n):R("a BOOL",n);case 2:return"number"!=typeof n?R("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?pn(n):!isFinite(n)||n%1?R("an INT",n):pn(n);case 4:return"number"==typeof n?pn(n):R("a FLOAT",n);case 6:return"string"==typeof n?pn(n):n instanceof String?pn(n+""):R("a STRING",n);case 9:return null===n?pn(r.c):R("null",n);case 5:return pn(I(n));case 7:return Array.isArray(n)?P(r.b,n,p):R("a LIST",n);case 8:return Array.isArray(n)?P(r.b,n,F):R("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return R("an OBJECT with a field named `"+t+"`",n);var e=O(r.b,n[t]);return mn(e)?e:gn(b(wn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return R("an ARRAY",n);if(n.length<=u)return R("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=O(r.b,n[u]);return mn(e)?e:gn(b(kn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return R("an OBJECT",n);var a=$;for(var i in n)if(n.hasOwnProperty(i)){e=O(r.b,n[i]);if(!mn(e))return gn(b(wn,i,e.a));a=g(w(i,e.a),a)}return pn(fn(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=O(o[c],n);if(!mn(e))return e;f=f(e.a)}return pn(f);case 14:e=O(r.b,n);return mn(e)?O(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=O(s.a,n);if(mn(e))return e;v=g(e.a,v)}return gn(An(fn(v)));case 1:return gn(b(yn,r.a,I(n)));case 0:return pn(r.a)}}function P(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=O(r,n[a]);if(!mn(i))return gn(b(kn,a,i.a));u[a]=i.a}return pn(t(u))}function F(n){return b($n,n.length,function(r){return n[r]})}function R(r,n){return gn(b(yn,"Expecting "+r,I(n)))}function B(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return B(r.b,n.b);case 10:return r.d===n.d&&B(r.b,n.b);case 11:return r.e===n.e&&B(r.b,n.b);case 13:return r.f===n.f&&Y(r.g,n.g);case 14:return r.h===n.h&&B(r.b,n.b);case 15:return Y(r.g,n.g)}}function Y(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!B(r[e],n[e]))return!1;return!0}function I(r){return r}function G(r){return r}var X=t(function(r,n,t){return t[r]=G(n),t});I(null);function D(r){return{$:0,a:r}}function W(r){return{$:2,b:r,c:null}}var Z=e(function(r,n){return{$:3,b:r,d:n}});var H=0;function Q(r){var n={$:0,e:H++,f:r,g:null,h:[]};return nr(n),n}function K(n){return W(function(r){r(D(Q(n)))})}function U(r,n){r.h.push(n),nr(r)}var V=!1,rr=[];function nr(r){if(rr.push(r),!V){for(V=!0;r=rr.shift();)tr(r);V=!1}}function tr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,nr(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function er(r,n,t,e,u,a){var i=b(M,r,I(n?n.flags:void 0));mn(i)||T(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in ur){var u=ur[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=ar(u,n)}return t}(f,s);function s(r,n){c(o=(i=b(e,r,o)).a,n),cr(f,i.b,u(o))}return cr(f,i.b,u(o)),v?{ports:v}:{}}var ur={};function ar(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return b(Z,o,{$:5,b:function(r){var n=r.a;return 0===r.$?s(a,e,n,t):i&&f?l(u,e,n.i,n.j,t):s(u,e,i?n.i:n.j,t)}})}return e.h=Q(b(Z,o,r.b))}var ir=e(function(n,t){return W(function(r){n.g(t),r(D(y))})});function fr(n){return function(r){return{$:1,k:n,l:r}}}function or(r){return{$:2,m:r}}function cr(r,n,t){var e={};for(var u in vr(!0,n,e,null),vr(!1,t,e,null),r)U(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function vr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return b(r?ur[n].e:ur[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)vr(r,i.a,t,e);return;case 3:return void vr(r,n.o,t,{p:n.n,q:e})}}var sr;var br="undefined"!=typeof document?document:{};function lr(r,n){r.appendChild(n)}function dr(r){return{$:0,a:r}}var hr=e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:mr(r),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:mr(r),e:t,f:a,b:e}})})(void 0);var $r=e(function(r,n){return{$:"a2",n:r,o:n}}),gr=e(function(r,n){return{$:"a3",n:r,o:n}});var pr;function mr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?yr(i,u,a):i[u]=a}else"className"===u?yr(n,u,G(a)):n[u]=G(a)}return n}function yr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function wr(r,n){var t=r.$;if(5===t)return wr(r.k||(r.k=r.m()),n);if(0===t)return br.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=wr(e,a)).elm_event_node_ref=a,i}if(3===t)return kr(i=r.h(r.g),n,r.d),i;var i=r.f?br.createElementNS(r.f,r.c):br.createElement(r.c);sr&&"a"==r.c&&i.addEventListener("click",sr(i)),kr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)lr(i,wr(1===t?f[o]:f[o].b,n));return i}function kr(r,n,t){for(var e in t){var u=t[e];"a1"===e?Ar(r,u):"a0"===e?Tr(r,n,u):"a3"===e?jr(r,u):"a4"===e?_r(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function Ar(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function jr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function _r(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Tr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Nr(n,a),r.addEventListener(u,i,pr&&{passive:Nt(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){pr=!0}}))}catch(r){}function Nr(v,r){function s(r){var n=s.q,t=O(n.a,r);if(mn(t)){for(var e,u=Nt(n),a=t.a,i=u?u<3?a.a:a.M:a,f=1==u?a.b:3==u&&a.ba,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a4)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Er(r,n){return r.$==n.$&&B(r.a,n.a)}function Lr(r,n){var t=[];return qr(r,n,t,0),t}function xr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function qr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void xr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return qr(r.k,n.k,v,0),void(0<v.length&&xr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void xr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||xr(t,2,e,b),void qr(d,h,t,e+1));case 0:return void(r.a!==n.a&&xr(t,3,e,n.a));case 1:return void Cr(r,n,t,e,zr);case 2:return void Cr(r,n,t,e,Jr);case 3:if(r.h!==n.h)return void xr(t,0,e,n);var $=Sr(r.d,n.d);$&&xr(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&xr(t,5,e,g))}}}function Cr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Sr(r.d,n.d);a&&xr(t,4,e,a),u(r,n,t,e)}else xr(t,0,e,n)}function Sr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Er(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Sr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function zr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?xr(t,6,e,{v:f,i:i-f}):i<f&&xr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];qr(v,a[c],t,++e),e+=v.b||0}}function Jr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,w=p.b,k=h===y;if(m)var A=m.a,j=m.b,_=d===A;if(_&&k)qr($,j,u,++l),Or(a,u,d,g,b,i),l+=$.b||0,Pr(a,u,d,w,++l),l+=w.b||0,s+=2,b+=2;else if(_)l++,Or(a,u,h,g,b,i),qr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(k)Pr(a,u,d,$,++l),l+=$.b||0,qr(w,g,u,++l),l+=w.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Pr(a,u,d,$,++l),Or(a,u,h,g,b,i),l+=$.b||0,qr(w,j,u,++l),l+=w.b||0,s+=2,b+=2}}else qr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Pr(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Or(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&xr(t,8,e,{w:u,x:i,y:E})}var Mr="_elmW6BL";function Or(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return qr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Or(r,n,t+Mr,e,u,a)}function Pr(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return qr(e,a.z,i,u),void xr(n,9,u,{w:i,A:a})}Pr(r,n,t+Mr,e,u)}else{var f=xr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Fr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Fr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var p=1===l?h[g]:h[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r($[g],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Rr(r,n,t,e){return 0===t.length?r:(Fr(r,n,t,e),Br(r,t))}function Br(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Yr(u,e);u===r&&(r=a)}return r}function Yr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=wr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return kr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Br(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(wr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Br(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=br.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;lr(t,2===a.c?a.s:wr(a.z,n.u))}return t}(t.y,n);r=Br(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:wr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&lr(r,e);return r}(r,n);case 5:return n.s(r);default:T(10)}}function Ir(r){if(3===r.nodeType)return dr(r.textContent);if(1!==r.nodeType)return dr("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(b(gr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=$,f=r.childNodes;for(e=f.length;e--;)i=g(Ir(f[e]),i);return s(hr,a,n,i)}var Gr=u(function(n,r,t,f){return er(r,f,n.co,n.cZ,n.cS,function(e,r){var u=n.c$,a=f.node,i=Ir(a);return Dr(r,function(r){var n=u(r),t=Lr(i,n);a=Rr(a,i,t,e),i=n})})}),Xr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Dr(t,e){e(t);var u=0;function a(){u=1===u?0:(Xr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Xr(a),u=2)}}var Wr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Zr,Hr=function(r){return{$:1,a:r}},Qr=function(r){return{$:2,a:r}},Kr=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=b(r,t.a,n);r=u,n=a,t=e}}),Ur=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Vr=c,rn=x,nn=e(function(r,n){return S(n)/S(r)}),tn=rn(b(nn,2,32)),en=[],un=l(Ur,0,tn,en,en),an=_,fn=function(r){return s(Kr,Vr,$,r)},on=e(function(r,n){for(;;){var t=b(an,32,r),e=t.b,u=b(Vr,{$:0,a:t.a},n);if(!e.b)return fn(u);r=e,n=u}}),cn=e(function(r,n){for(;;){var t=rn(n/32);if(1===t)return b(an,32,r).a;r=b(on,r,$),n=t}}),vn=q,sn=e(function(r,n){return 0<m(r,n)?r:n}),bn=function(r){return r.length},ln=e(function(r,n){if(n.k){var t=32*n.k,e=vn(b(nn,32,t-1)),u=r?fn(n.o):n.o,a=b(cn,u,n.k);return l(Ur,bn(n.n)+t,b(sn,5,e*tn),a,n.n)}return l(Ur,bn(n.n),tn,en,n.n)}),dn=j,hn=a(function(r,n,t,e,u){for(;;){if(n<0)return b(ln,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:s(dn,32,n,r)};r=r,n=n-32,t=t,e=b(Vr,a,e),u=u}}),$n=e(function(r,n){if(0<r){var t=r%32;return d(hn,n,r-t-32,r,$,s(dn,t,r-t,n))}return un}),gn=function(r){return{$:1,a:r}},pn=function(r){return{$:0,a:r}},mn=function(r){return!r.$},yn=e(function(r,n){return{$:3,a:r,b:n}}),wn=e(function(r,n){return{$:0,a:r,b:n}}),kn=e(function(r,n){return{$:1,a:r,b:n}}),An=function(r){return{$:2,a:r}},jn=J,_n=e(function(r,n){return b(z,r,v(n))}),Tn=function(r){return I(s(Kr,e(function(r,n){return s(X,r.a,r.b,n)}),{},r))},Nn=I,En=e(function(r,n){return Tn(p([w("type",Nn("field")),w("name",Nn(r)),w("value",n)]))}),Ln=I,xn=function(r){return{$:0,a:b(En,"lineWidth",Ln(r))}},qn=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),Cn=t(function(r,n,t){return s(qn,r,n,t)}),Sn={$:0},zn=e(function(r,n){return{$:3,a:r,b:n}}),Jn=function(r){return{$:2,a:r}},Mn=e(function(r,n){var t=w(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return b(zn,e.a,e.b);case 1:switch(t.a.$){case 1:return Hr(t.b.a);case 2:return b(zn,t.b.a,t.a.a);case 3:var u=t.a;return b(zn,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return Jn(t.b.a);case 1:return b(zn,t.a.a,t.b.a);case 3:var a=t.a;return b(zn,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),On=function(r){return r},Pn=e(function(r,n){return s(Kr,e(function(r,n){var t=n;switch(r.$){case 0:return k(t,{J:b(Vr,r.a,t.J)});case 1:return k(t,{J:s(Kr,Vr,t.J,r.a)});case 3:return k(t,{Y:(0,r.a)(t.Y)});default:return k(t,{X:b(Mn,t.X,r.a)})}}),n,r)}),Fn=e(function(r,n){return b(Pn,r,{J:$,X:Sn,Y:(t=n,{$:1,a:t})});var t}),Rn=e(function(r,n){return I(s(Kr,function(t){return e(function(r,n){return n.push(G(t(r))),n})}(r),[],n))}),Bn=e(function(r,n){return Tn(p([w("type",Nn("function")),w("name",Nn(r)),w("args",b(Rn,On,n))]))}),Yn=a(function(r,n,t,e,u){return b(Bn,"arcTo",p([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u)]))}),In=i(function(r,n,t,e,u,a){return b(Bn,"bezierCurveTo",p([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u),Ln(a)]))}),Gn=e(function(r,n){return b(Bn,"lineTo",p([Ln(r),Ln(n)]))}),Xn=e(function(r,n){return b(Bn,"moveTo",p([Ln(r),Ln(n)]))}),Dn=u(function(r,n,t,e){return b(Bn,"quadraticCurveTo",p([Ln(r),Ln(n),Ln(t),Ln(e)]))}),Wn=e(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return b(Vr,d(Yn,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return b(Vr,h(In,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return b(Vr,b(Gn,f.a,f.b),n);case 3:var o=r.a;return b(Vr,b(Xn,o.a,o.b),n);default:var c=r.a,v=r.b;return b(Vr,l(Dn,c.a,c.b,v.a,v.b),n)}}),Zn=I,Hn=i(function(r,n,t,e,u,a){return b(Bn,"arc",p([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u),Zn(a)]))}),Qn=t(function(r,n,t){return h(Hn,r,n,t,0,6.283185307179586,!1)}),Kn=u(function(r,n,t,e){return b(Bn,"rect",p([Ln(r),Ln(n),Ln(t),Ln(e)]))}),Un=E,Vn=L,rt=e(function(r,n){switch(r.$){case 0:var t=r.a;return b(Vr,l(Kn,f=t.a,o=t.b,r.b,r.c),b(Vr,b(Xn,f,o),n));case 1:var e=r.a,u=r.b;return b(Vr,s(Qn,f=e.a,o=e.b,u),b(Vr,b(Xn,f+u,o),n));case 2:var a=r.a,i=r.b;return s(Kr,Wn,b(Vr,b(Xn,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return b(Vr,h(Hn,f=c.a,o=c.b,r.b,v,r.d,r.e),b(Vr,b(Xn,f+Un(v),o+Vn(v)),n))}}),nt=C,tt=J,et=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return nt(1e4*r)/100};return n=p(["rgba(",tt(i(r.a)),"%,",tt(i(e)),"%,",tt(i(u)),"%,",tt((t=a,nt(1e3*t)/1e3)),")"]),b(_n,"",n)},ut=function(r){return b(En,"fillStyle",Nn(et(r)))},at=e(function(r,n){return b(Vr,b(Bn,"fill",p([Nn(function(r){return r?"evenodd":"nonzero"}(0))])),b(Vr,ut(r),n))}),it=b(Bn,"stroke",$),ft=function(r){return b(En,"strokeStyle",Nn(et(r)))},ot=e(function(r,n){return b(Vr,it,b(Vr,ft(r),n))}),ct=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),vt=l(ct,0,0,0,1),st=e(function(r,n){switch(r.$){case 0:return b(at,vt,n);case 1:return b(at,r.a,n);case 2:return b(ot,r.a,n);default:return b(ot,r.b,b(at,r.a,n))}}),bt=u(function(r,n,t,e){if(1===e.$)return b(Bn,"fillText",p([Nn(r),Ln(n),Ln(t)]));var u=e.a;return b(Bn,"fillText",p([Nn(r),Ln(n),Ln(t),Ln(u)]))}),lt=a(function(r,n,t,e,u){return b(Vr,l(bt,r.aG,n,t,r.an),b(Vr,ut(e),u))}),dt=u(function(r,n,t,e){if(1===e.$)return b(Bn,"strokeText",p([Nn(r),Ln(n),Ln(t)]));var u=e.a;return b(Bn,"strokeText",p([Nn(r),Ln(n),Ln(t),Ln(u)]))}),ht=a(function(r,n,t,e,u){return b(Vr,l(dt,r.aG,n,t,r.an),b(Vr,ft(e),u))}),$t=t(function(r,n,t){var e=n.a3,u=e.a,a=e.b;switch(r.$){case 0:return d(lt,n,u,a,vt,t);case 1:return d(lt,n,u,a,r.a,t);case 2:return d(ht,n,u,a,r.a,t);default:return d(ht,n,u,a,r.b,d(lt,n,u,a,r.a,t))}}),gt=t(function(r,n,t){return s($t,r,n,t)}),pt=f(function(r,n,t,e,u,a,i,f,o){return b(Bn,"drawImage",p([o,Ln(r),Ln(n),Ln(t),Ln(e),Ln(u),Ln(a),Ln(i),Ln(f)]))}),mt=u(function(t,e,u,r){return b(Vr,function(){if(u.$){var r=u.a;return o(pt,r.bQ,r.bR,r.bP,r.aw,t,e,r.bP,r.aw,(n=u.b).cq)}var n;return o(pt,0,0,(n=u.a).bP,n.aw,t,e,n.bP,n.aw,n.cq)}(),r)}),yt=t(function(r,n,t){return l(mt,r.a,r.b,n,t)}),wt=b(Bn,"beginPath",$),kt=t(function(r,n,t){switch(r.$){case 0:return s(gt,n,r.a,t);case 1:var e=r.a;return b(st,n,s(Kr,rt,b(Vr,wt,t),e));default:return s(yt,r.a,r.b,t)}}),At=b(Bn,"restore",$),jt=b(Bn,"save",$),_t=e(function(r,n){return b(Vr,At,s(kt,r.Y,r.X,A(r.J,b(Vr,jt,n))))}),Tt=$,Nt=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Et=e(function(r,n){return b($r,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),Lt=hr("canvas"),xt=function(r){return hr(function(r){return"script"==r?"p":r}(r))},qt=function(r){return b(gr,"height",jn(r))},Ct=function(r){return b(gr,"width",jn(r))},St=t(function(r,n,t){var e,u=r.a,a=r.b;return s(xt,"elm-canvas",p([(e=function(r){return s(Kr,_t,Tt,r)}(t),b(Et,"cmds",b(Rn,On,e))),qt(a),Ct(u)]),p([b(Lt,b(Vr,qt(a),b(Vr,Ct(u),n)),$)]))}),zt=e(function(r,n){return{$:2,a:r,b:n}}),Jt=e(function(r,n){return b(zt,r,n)}),Mt=function(r){var n;return b(Jt,r.a,p([(n=r.b,{$:2,a:n})]))},Ot=e(function(r,n){return{$:0,a:r,b:n}}),Pt=function(r){var n=r.b;return b(Ot,1664525*r.a+n>>>0,n)},Ft=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},Rt=e(function(a,i){return function(r){var n,t=Pt(r),e=(n=i-a)<0?-n:n,u=Ft(t);return w((134217728*(1*(67108863&Ft(r)))+1*(134217727&u))/9007199254740992*e+a,Pt(t))}}),Bt=b(e(function(e,r){var u=r;return function(r){var n=u(r),t=n.b;return w(e(n.a),t)}}),function(r){return r<.5},b(Rt,0,1)),Yt=e(function(r,n){var t=n.b;return w(r(n.a),t)}),It=e(function(r,n){return r(n)}),Gt=a(function(r,n,t,e,u){return b(Yt,function(r){return r?w(w(n,t),w(n+e,t+u)):w(w(n+e,t),w(n,t+u))},b(It,Bt,r))}),Xt=a(function(r,n,t,e,u){return d(Gt,r,n,t,e,u)}),Dt=N,Wt=t(function(r,n,t){for(;;){if(0<m(n,1e4))return t;var e=n/100|0,u=d(Xt,r,5*b(Dt,100,n),5*e,5,5),a=u.b,i=Mt(u.a);r=a,n=n+1,t=b(Vr,i,t)}}),Zt=l(ct,1,1,1,1),Ht=D,Qt=Ht(0),Kt=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return b(r,u,b(r,i,b(r,o,b(r,c.a,500<t?s(Kr,r,n,fn(v)):l(Kt,r,n,t+1,v)))))}return b(r,u,b(r,i,b(r,o,n)))}return b(r,u,b(r,i,n))}return b(r,u,n)}return n}),Ut=t(function(r,n,t){return l(Kt,r,n,0,t)}),Vt=e(function(t,r){return s(Ut,e(function(r,n){return b(Vr,t(r),n)}),$,r)}),re=Z,ne=e(function(n,r){return b(re,function(r){return Ht(n(r))},r)}),te=t(function(t,r,e){return b(re,function(n){return b(re,function(r){return Ht(b(t,n,r))},e)},r)}),ee=ir,ue=e(function(r,n){var t=n;return K(b(re,ee(r),t))});ur.Task={b:Qt,c:t(function(r,n){return b(ne,function(){return 0},(t=b(Vt,ue(r),n),s(Ut,te(Vr),Ht($),t)));var t}),d:t(function(){return Ht(0)}),e:e(function(r,n){return b(ne,r,n)}),f:Zr};fr("Task");var ae,ie=Gr,fe=or($),oe=or($),ce={$:4},ve=ie({co:function(r){return w({a8:(n=vn(1e4*r),t=Pt(b(Ot,0,1013904223)),Pt(b(Ot,t.a+n>>>0,t.b)))},fe);var n,t},cS:function(){return oe},cZ:e(function(r,n){return w(n,fe)}),c$:function(r){return s(St,w(500,500),$,p([b(Fn,p([(n=Zt,Qr(Hr(n)))]),p([s(Cn,w(0,0),500,500)])),b(Fn,p([function(r){return Qr(Jn(r))}(vt),xn(2)]),s(Wt,r.a8,0,$))]));var n}});ae={Examples:{TiledLines:{init:ve(ce)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?T(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,ae):r.Elm=ae}(this);