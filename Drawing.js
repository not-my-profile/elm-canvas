!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function o(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function e(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function u(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function a(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function i(o){return r(7,o,function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return o(i,a,u,e,t,r,n)}}}}}}})}function f(c){return r(9,c,function(f){return function(o){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return c(f,o,i,a,u,e,t,r,n)}}}}}}}}})}function d(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function s(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function b(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function l(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function h(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function c(n,r,t,e,u,a,i,o){return 7===n.a?n.f(r,t,e,u,a,i,o):n(r)(t)(e)(u)(a)(i)(o)}function v(n,r,t,e,u,a,i,o,f,c){return 9===n.a?n.f(r,t,e,u,a,i,o,f,c):n(r)(t)(e)(u)(a)(i)(o)(f)(c)}function g(n,r){for(var t,e=[],u=$(n,r,0,e);u&&(t=e.pop());u=$(t.a,t.b,0,e));return u}function $(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&C(5),!1;if(100<t)return e.push(w(n,r)),!0;for(var u in n.$<0&&(n=Er(n),r=Er(r)),n)if(!$(n[u],r[u],t+1,e))return!1;return!0}function p(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=p(n.a,r.a))?t:(t=p(n.b,r.b))?t:p(n.c,r.c);for(;n.b&&r.b&&!(t=p(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var m=0;function w(n,r){return{a:n,b:r}}function y(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function x(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=A(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=A(n.a,r);return t}var k={$:0};function A(n,r){return{$:1,a:n,b:r}}var j=o(A);function T(n){for(var r=k,t=n.length;t--;)r=A(n[t],r);return r}function _(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var E=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),z=o(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,w(t,r)}),N=o(function(n,r){return r[n]}),L=t(function(n,r,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[n]=r,u}),B=o(function(n,r){for(var t=r.length,e=Array(t+1),u=0;u<t;u++)e[u]=r[u];return e[t]=n,e}),F=t(function(n,r,t){for(var e=t.length-1;0<=e;e--)r=d(n,t[e],r);return r});function C(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var J=Math.cos,q=Math.sin;var O=Math.ceil,P=Math.floor,M=Math.round,Y=Math.log;var K=o(function(n,r){return r.join(n)});function R(n){return n+""}function S(n){return{$:2,b:n}}var D=S(function(n){return"number"!=typeof n?fn("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?qr(n):!isFinite(n)||n%1?fn("an INT",n):qr(n)}),H=S(function(n){return"boolean"==typeof n?qr(n):fn("a BOOL",n)}),I=S(function(n){return"number"==typeof n?qr(n):fn("a FLOAT",n)}),X=S(function(n){return qr(sn(n))});S(function(n){return"string"==typeof n?qr(n):n instanceof String?qr(n+""):fn("a STRING",n)});var U=o(function(n,r){return{$:6,d:n,b:r}});function G(n,r){return{$:9,f:n,g:r}}var W=o(function(n,r){return{$:10,b:r,h:n}});var Q=o(function(n,r){return G(n,[r])}),V=t(function(n,r,t){return G(n,[r,t])}),Z=e(function(n,r,t,e){return G(n,[r,t,e])}),nn=u(function(n,r,t,e,u){return G(n,[r,t,e,u])}),rn=i(function(n,r,t,e,u,a,i){return G(n,[r,t,e,u,a,i])}),tn=o(function(n,r){return en(n,bn(r))});function en(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?qr(n.c):fn("null",r);case 3:return an(r)?un(n.b,r,T):fn("a LIST",r);case 4:return an(r)?un(n.b,r,on):fn("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return fn("an OBJECT with a field named `"+t+"`",r);var e=en(n.b,r[t]);return vt(e)?e:Br(d(Cr,t,e.a));case 7:var u=n.e;if(!an(r))return fn("an ARRAY",r);if(r.length<=u)return fn("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=en(n.b,r[u]);return vt(e)?e:Br(d(Jr,u,e.a));case 8:if("object"!=typeof r||null===r||an(r))return fn("an OBJECT",r);var a=k;for(var i in r)if(r.hasOwnProperty(i)){e=en(n.b,r[i]);if(!vt(e))return Br(d(Cr,i,e.a));a=A(w(i,e.a),a)}return qr(Hr(a));case 9:for(var o=n.f,f=n.g,c=0;c<f.length;c++){e=en(f[c],r);if(!vt(e))return e;o=o(e.a)}return qr(o);case 10:e=en(n.b,r);return vt(e)?en(n.h(e.a),r):e;case 11:for(var v=k,s=n.g;s.b;s=s.b){e=en(s.a,r);if(vt(e))return e;v=A(e.a,v)}return Br(Or(Hr(v)));case 1:return Br(d(Fr,n.a,sn(r)));case 0:return qr(n.a)}}function un(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=en(n,r[a]);if(!vt(i))return Br(d(Jr,a,i.a));u[a]=i.a}return qr(t(u))}function an(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function on(r){return d(ct,r.length,function(n){return r[n]})}function fn(n,r){return Br(d(Fr,"Expecting "+n,sn(r)))}function cn(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return cn(n.b,r.b);case 6:return n.d===r.d&&cn(n.b,r.b);case 7:return n.e===r.e&&cn(n.b,r.b);case 9:return n.f===r.f&&vn(n.g,r.g);case 10:return n.h===r.h&&cn(n.b,r.b);case 11:return vn(n.g,r.g)}}function vn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!cn(n[e],r[e]))return!1;return!0}function sn(n){return n}function bn(n){return n}var dn=t(function(n,r,t){return t[n]=bn(r),t});sn(null);function ln(n){return{$:0,a:n}}function hn(n){return{$:2,b:n,c:null}}var gn=o(function(n,r){return{$:3,b:n,d:r}});var $n=0;function pn(n){var r={$:0,e:$n++,f:n,g:null,h:[]};return An(r),r}function mn(r){return hn(function(n){n(ln(pn(r)))})}function wn(n,r){n.h.push(r),An(n)}var yn=o(function(r,t){return hn(function(n){wn(r,t),n(ln(m))})});var xn=!1,kn=[];function An(n){if(kn.push(n),!xn){for(xn=!0;n=kn.shift();)jn(n);xn=!1}}function jn(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,An(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function Tn(n,r,t,e,u,a){var i=d(tn,n,sn(r?r.flags:void 0));vt(i)||C(2);var o={},f=t(i.a),c=f.a,v=a(b,c),s=function(n,r){var t;for(var e in _n){var u=_n[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=zn(u,r)}return t}(o,b);function b(n,r){var t=d(e,n,c);v(c=t.a,r),Jn(o,t.b,u(c))}return Jn(o,f.b,u(c)),s?{ports:s}:{}}var _n={};function En(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function zn(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function f(t){return d(gn,f,{$:5,b:function(n){var r=n.a;return 0===n.$?s(a,e,r,t):i&&o?b(u,e,r.i,r.j,t):s(u,e,i?r.i:r.j,t)}})}return e.h=pn(d(gn,f,n.b))}var Nn=o(function(r,t){return hn(function(n){r.g(t),n(ln(m))})}),Ln=o(function(n,r){return d(yn,n.h,{$:0,a:r})});function Bn(r){return function(n){return{$:1,k:r,l:n}}}var Fn=[],Cn=!1;function Jn(n,r,t){if(Fn.push({p:n,q:r,r:t}),!Cn){Cn=!0;for(var e;e=Fn.shift();)qn(e.p,e.q,e.r);Cn=!1}}function qn(n,r,t){var e={};for(var u in On(!0,r,e,null),On(!1,t,e,null),n)wn(n[u],{$:"fx",a:e[u]||{i:k,j:k}})}function On(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return d(n?_n[r].e:_n[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:k,j:k},n?t.i=A(r,t.i):t.j=A(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)On(n,i.a,t,e);return;case 3:return void On(n,r.o,t,{s:r.n,t:e})}}var Pn;var Mn="undefined"!=typeof document?document:{};function Yn(n,r){n.appendChild(r)}function Kn(n){return{$:0,a:n}}var Rn=o(function(a,i){return o(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:Wn(n),e:t,f:a,b:e}})})(void 0),Sn=o(function(a,i){return o(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:Wn(n),e:t,f:a,b:e}})})(void 0);var Dn=o(function(n,r){return{$:"a0",n:n,o:r}}),Hn=o(function(n,r){return{$:"a1",n:n,o:r}}),In=o(function(n,r){return{$:"a2",n:n,o:r}}),Xn=o(function(n,r){return{$:"a3",n:n,o:r}});function Un(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var Gn;function Wn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Qn(i,u,a):i[u]=a}else"className"===u?Qn(r,u,bn(a)):r[u]=bn(a)}return r}function Qn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Vn(n,r){var t=n.$;if(5===t)return Vn(n.k||(n.k=n.m()),r);if(0===t)return Mn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=Vn(e,a)).elm_event_node_ref=a,i}if(3===t)return Zn(i=n.h(n.g),r,n.d),i;var i=n.f?Mn.createElementNS(n.f,n.c):Mn.createElement(n.c);Pn&&"a"==n.c&&i.addEventListener("click",Pn(i)),Zn(i,r,n.d);for(var o=n.e,f=0;f<o.length;f++)Yn(i,Vn(1===t?o[f]:o[f].b,r));return i}function Zn(n,r,t){for(var e in t){var u=t[e];"a1"===e?nr(n,u):"a0"===e?er(n,r,u):"a3"===e?rr(n,u):"a4"===e?tr(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function nr(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function rr(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function tr(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;void 0!==a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function er(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=ur(r,a),n.addEventListener(u,i,Gn&&{passive:lt(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Gn=!0}}))}catch(n){}function ur(v,n){function s(n){var r=s.q,t=en(r.a,n);if(vt(t)){for(var e,u=lt(r),a=t.a,i=u?u<3?a.a:a.c0:a,o=1==u?a.b:3==u&&a.dn,f=(o&&n.stopPropagation(),(2==u?a.b:3==u&&a.de)&&n.preventDefault(),v);e=f.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);f=f.p}f(i,o)}}return s.q=n,s}function ar(n,r){return n.$==r.$&&cn(n.a,r.a)}function ir(n,r){var t=[];return fr(n,r,t,0),t}function or(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function fr(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void or(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return fr(n.k,r.k,v,0),void(0<v.length&&or(t,1,e,v));case 4:for(var s=n.j,b=r.j,d=!1,l=n.k;4===l.$;)d=!0,"object"!=typeof s?s=[s,l.j]:s.push(l.j),l=l.k;for(var h=r.k;4===h.$;)d=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return d&&s.length!==b.length?void or(t,0,e,r):((d?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,b):s===b)||or(t,2,e,b),void fr(l,h,t,e+1));case 0:return void(n.a!==r.a&&or(t,3,e,r.a));case 1:return void cr(n,r,t,e,sr);case 2:return void cr(n,r,t,e,br);case 3:if(n.h!==r.h)return void or(t,0,e,r);var g=vr(n.d,r.d);g&&or(t,4,e,g);var $=r.i(n.g,r.g);return void($&&or(t,5,e,$))}}}function cr(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=vr(n.d,r.d);a&&or(t,4,e,a),u(n,r,t,e)}else or(t,0,e,r)}function vr(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&ar(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=vr(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function sr(n,r,t,e){var u=n.e,a=r.e,i=u.length,o=a.length;o<i?or(t,6,e,{v:o,i:i-o}):i<o&&or(t,7,e,{v:i,e:a});for(var f=i<o?i:o,c=0;c<f;c++){var v=u[c];fr(v,a[c],t,++e),e+=v.b||0}}function br(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,v=f.length,s=0,b=0,d=e;s<c&&b<v;){var l=(T=o[s]).a,h=(_=f[b]).a,g=T.b,$=_.b,p=void 0,m=void 0;if(l!==h){var w=o[s+1],y=f[b+1];if(w){var x=w.a,k=w.b;m=h===x}if(y){var A=y.a,j=y.b;p=l===A}if(p&&m)fr(g,j,u,++d),lr(a,u,l,$,b,i),d+=g.b||0,hr(a,u,l,k,++d),d+=k.b||0,s+=2,b+=2;else if(p)d++,lr(a,u,h,$,b,i),fr(g,j,u,d),d+=g.b||0,s+=1,b+=2;else if(m)hr(a,u,l,g,++d),d+=g.b||0,fr(k,$,u,++d),d+=k.b||0,s+=2,b+=1;else{if(!w||x!==A)break;hr(a,u,l,g,++d),lr(a,u,h,$,b,i),d+=g.b||0,fr(k,j,u,++d),d+=k.b||0,s+=2,b+=2}}else fr(g,$,u,++d),d+=g.b||0,s++,b++}for(;s<c;){var T;hr(a,u,(T=o[s]).a,g=T.b,++d),d+=g.b||0,s++}for(;b<v;){var _,E=E||[];lr(a,u,(_=f[b]).a,_.b,void 0,E),b++}(0<u.length||0<i.length||E)&&or(t,8,e,{w:u,x:i,y:E})}var dr="_elmW6BL";function lr(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return fr(i.z,e,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}lr(n,r,t+dr,e,u,a)}function hr(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return fr(e,a.z,i,u),void or(r,9,u,{w:i,A:a})}hr(n,r,t+dr,e,u)}else{var o=or(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function gr(n,r,t,e){!function n(r,t,e,u,a,i,o){var f=e[u];var c=f.r;for(;c===a;){var v=f.$;if(1===v)gr(r,t.k,f.s,o);else if(8===v){f.t=r,f.u=o;var s=f.s.w;0<s.length&&n(r,t,s,0,a,i,o)}else if(9===v){f.t=r,f.u=o;var b=f.s;if(b){b.A.s=r;var s=b.w;0<s.length&&n(r,t,s,0,a,i,o)}}else f.t=r,f.u=o;if(!(f=e[++u])||(c=f.r)>i)return u}var d=t.$;if(4===d){for(var l=t.k;4===l.$;)l=l.k;return n(r,l,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var g=r.childNodes;for(var $=0;$<h.length;$++){var p=1===d?h[$]:h[$].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=n(g[$],p,e,u,a,m,o),!(f=e[u])||(c=f.r)>i))return u;a=m}return u}(n,r,t,0,0,r.b,e)}function $r(n,r,t,e){return 0===t.length?n:(gr(n,r,t,e),pr(n,t))}function pr(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=mr(u,e);u===n&&(n=a)}return n}function mr(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=Vn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return Zn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return pr(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(Vn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=pr(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=Mn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;Yn(t,2===a.c?a.s:Vn(a.z,r.u))}return t}(t.y,r);n=pr(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],o=i.A,f=2===o.c?o.s:Vn(o.z,r.u);n.insertBefore(f,n.childNodes[i.r])}e&&Yn(n,e);return n}(n,r);case 5:return r.s(n);default:C(10)}}function wr(n){if(3===n.nodeType)return Kn(n.textContent);if(1!==n.nodeType)return Kn("");for(var r=k,t=n.attributes,e=t.length;e--;){var u=t[e];r=A(d(Xn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=k,o=n.childNodes;for(e=o.length;e--;)i=A(wr(o[e]),i);return s(Rn,a,r,i)}var yr=e(function(r,n,t,o){return Tn(n,o,r.cR,r.dv,r.$7,function(e,n){var u=r.dw,a=o.node,i=wr(a);return Ar(n,function(n){var r=u(n),t=ir(i,r);a=$r(a,i,t,e),i=r})})}),xr="undefined"!=typeof cancelAnimationFrame?cancelAnimationFrame:function(n){clearTimeout(n)},kr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function Ar(t,e){e(t);var u=0;function a(){u=1===u?0:(kr(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&kr(a),u=2)}}var jr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Tr=j,_r=t(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=s(n,t.b,t.c,s(_r,n,r,t.e));n=u,r=a,t=e}}),Er=function(n){return s(_r,t(function(n,r,t){return d(Tr,w(n,r),t)}),k,n)},zr=F,Nr=t(function(t,n,r){var e=r.c,u=r.d,a=o(function(n,r){return s(zr,n.$?t:a,r,n.a)});return s(zr,a,s(zr,t,n,u),e)}),Lr=function(n){return s(Nr,Tr,k,n)},Br=function(n){return{$:1,a:n}},Fr=o(function(n,r){return{$:3,a:n,b:r}}),Cr=o(function(n,r){return{$:0,a:n,b:r}}),Jr=o(function(n,r){return{$:1,a:n,b:r}}),qr=function(n){return{$:0,a:n}},Or=function(n){return{$:2,a:n}},Pr=function(n){return{$:0,a:n}},Mr={$:1},Yr=R,Kr=o(function(n,r){return d(K,n,_(r))}),Rr=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=d(n,t.a,r);n=u,r=a,t=e}}),Sr=t(function(n,r,t){for(;;){if(1<=p(n,r))return t;var e=n,u=r-1,a=d(Tr,r,t);n=e,r=u,t=a}}),Dr=o(function(n,r){return s(Sr,n,r,k)}),Hr=function(n){return s(Rr,Tr,k,n)},Ir=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Xr=[],Ur=O,Gr=o(function(n,r){return Y(r)/Y(n)}),Wr=Ur(d(Gr,2,32)),Qr=b(Ir,0,Wr,Xr,Xr),Vr=E,Zr=function(n){return{$:1,a:n}},nt=P,rt=function(n){return n.length},tt=o(function(n,r){return 0<p(n,r)?n:r}),et=function(n){return{$:0,a:n}},ut=z,at=o(function(n,r){for(;;){var t=d(ut,32,n),e=t.b,u=d(Tr,et(t.a),r);if(!e.b)return Hr(u);n=e,r=u}}),it=o(function(n,r){for(;;){var t=Ur(r/32);if(1===t)return d(ut,32,n).a;n=d(at,n,k),r=t}}),ot=o(function(n,r){if(r.i){var t=32*r.i,e=nt(d(Gr,32,t-1)),u=n?Hr(r.m):r.m,a=d(it,u,r.i);return b(Ir,rt(r.l)+t,d(tt,5,e*Wr),a,r.l)}return b(Ir,rt(r.l),Wr,Xr,r.l)}),ft=u(function(n,r,t,e,u){for(;;){if(r<0)return d(ot,!1,{m:e,i:t/32|0,l:u});var a=Zr(s(Vr,32,r,n));n=n,r=r-32,t=t,e=d(Tr,a,e),u=u}}),ct=o(function(n,r){if(0<n){var t=n%32;return l(ft,r,n-t-32,n,k,s(Vr,t,n-t,r))}return Qr}),vt=function(n){return!n.$},st=Q,bt=V,dt=function(n){return{$:0,a:n}},lt=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ht=function(n){return n},gt=ln,$t=gt(0),pt=e(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){var f=o.a,c=o.b;if(c.b){var v=c.b;return d(n,u,d(n,i,d(n,f,d(n,c.a,500<t?s(Rr,n,r,Hr(v)):b(pt,n,r,t+1,v)))))}return d(n,u,d(n,i,d(n,f,r)))}return d(n,u,d(n,i,r))}return d(n,u,r)}return r}),mt=t(function(n,r,t){return b(pt,n,r,0,t)}),wt=o(function(t,n){return s(mt,o(function(n,r){return d(Tr,t(n),r)}),k,n)}),yt=gn,xt=o(function(r,n){return d(yt,function(n){return gt(r(n))},n)}),kt=t(function(t,n,e){return d(yt,function(r){return d(yt,function(n){return gt(d(t,r,n))},e)},n)}),At=function(n){return s(mt,kt(Tr),gt(k),n)},jt=Nn,Tt=o(function(n,r){var t=r;return mn(d(yt,jt(n),t))});_n.Task=En($t,t(function(n,r){return d(xt,function(){return 0},At(d(wt,Tt(n),r)))}),t(function(){return gt(0)}),o(function(n,r){return d(xt,n,r)}));Bn("Task");var _t=yr,Et=I,zt=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Nt=b(zt,114/255,159/255,207/255,1),Lt=function(n){return{$:2,m:n}}(k),Bt=function(n){return{$:0,a:n}},Ft=function(n){return{$:1,a:n}},Ct=t(function(n,r,t){return{bi:t,b6:r,b9:n}}),Jt=gt(s(Ct,k,Mr,0)),qt=function(t){return hn(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(ln(m))})},Ot=hn(function(n){n(ln(Date.now()))}),Pt=hn(function(n){var r=kr(function(){n(ln(Date.now()))});return function(){xr(r)}}),Mt=Ln,Yt=mn,Kt=t(function(n,t,r){var e=r.b6,u=r.bi,a=w(e,t);if(1!==a.a.$)return a.b.b?gt(s(Ct,t,e,u)):d(yt,function(){return Jt},qt(a.a.a));if(a.b.b){return d(yt,function(r){return d(yt,function(n){return gt(s(Ct,t,Pr(r),n))},Ot)},Yt(d(yt,Mt(n),Pt)))}return Jt}),Rt=ht,St=t(function(r,t,n){var e=n.b9,u=n.bi,a=function(n){return d(jt,r,n.$?(0,n.a)(t-u):(0,n.a)(Rt(t)))};return d(yt,function(n){return d(yt,function(){return gt(s(Ct,e,Pr(n),t))},At(d(wt,a,e)))},Yt(d(yt,Mt(r),Pt)))}),Dt=t(function(n,r,t){return n(r(t))});_n["Browser.AnimationManager"]=En(Jt,Kt,St,0,o(function(n,r){return r.$?Ft(d(Dt,n,r.a)):{$:0,a:d(Dt,n,r.a)}}));var Ht,It=Bn("Browser.AnimationManager"),Xt=function(n){return It(Ft(n))},Ut=o(function(n,r){var t=n.a,e=n.b;return w(t+(r.a-t)/2,e+(r.b-e)/2)}),Gt=e(function(n,r,t,e){return b(zt,n,r,t,e)}),Wt=function(n){var r=function(n){return{af:n.d,cl:n.c,cK:n.b,df:n.a}}(n);return b(Gt,r.df,r.cK,r.cl,.2)},Qt=function(n){return{$:0,a:n}},Vt=function(n){return sn(s(Rr,o(function(n,r){return s(dn,n.a,n.b,r)}),{},n))},Zt=sn,ne=o(function(n,r){return Vt(T([w("type",Zt("field")),w("name",Zt(n)),w("value",r)]))}),re=function(n){return Qt(function(n){return d(ne,"lineCap",Zt(n))}(function(n){switch(n){case 0:return"butt";case 1:return"round";default:return"square"}}(n)))},te=function(n){return Qt(function(n){return d(ne,"lineJoin",Zt(n))}(function(n){switch(n){case 0:return"bevel";case 1:return"round";default:return"miter"}}(n)))},ee=sn,ue=function(n){return Qt(d(ne,"lineWidth",ee(n)))},ae=R,ie=M,oe=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return ie(1e4*n)/100};return r=T(["rgba(",ae(i(n.a)),"%,",ae(i(e)),"%,",ae(i(u)),"%,",ae((t=a,ie(1e3*t)/1e3)),")"]),d(Kr,"",r)},fe=function(n){var r,t=n.bE,e=n.bU,u=e.a,a=e.b;return{$:1,a:T([(r=n.bB,d(ne,"shadowBlur",ee(r))),function(n){return d(ne,"shadowColor",Zt(oe(n)))}(t),function(n){return d(ne,"shadowOffsetX",ee(n))}(u),function(n){return d(ne,"shadowOffsetY",ee(n))}(a)])}},ce={$:0},ve=o(function(n,r){return{$:3,a:n,b:r}}),se=function(n){return{$:2,a:n}},be=o(function(n,r){var t=w(n,r);n:for(;;)switch(t.b.$){case 3:var e=t.b;return d(ve,e.a,e.b);case 1:switch(t.a.$){case 1:return{$:1,a:t.b.a};case 2:return d(ve,t.b.a,t.a.a);case 3:var u=t.a;return d(ve,t.b.a,u.b);default:break n}case 2:switch(t.a.$){case 2:return se(t.b.a);case 1:return d(ve,t.a.a,t.b.a);case 3:var a=t.a;return d(ve,a.a,t.b.a);default:break n}default:if(t.a.$){return t.a}break n}return t.b}),de=o(function(n,r){return s(Rr,o(function(n,r){var t=r;switch(n.$){case 0:return y(t,{P:d(Tr,n.a,t.P)});case 1:return y(t,{P:s(Rr,Tr,t.P,n.a)});case 3:return y(t,{ah:(0,n.a)(t.ah)});default:return y(t,{ag:d(be,t.ag,n.a)})}}),r,n)}),le=o(function(n,r){return d(de,n,{P:k,ag:ce,ah:(t=r,{$:1,a:t})});var t}),he=o(function(n,r){var t=n.bE,e=n.aH;return d(le,T([re(1),te(1),ue(e),fe({bB:10,bE:Wt(t),bU:w(0,0)}),function(n){return{$:2,a:se(n)}}(t)]),r)}),ge=o(function(n,r){return{$:2,a:n,b:r}}),$e=o(function(n,r){return d(ge,n,r)}),pe=B,me=4294967295>>>32-Wr,we=function(n){return[n]},ye=N,xe=L,ke=e(function(n,r,t,e){var u=me&r>>>n;if(-1<p(u,rt(e))){if(5===n)return d(pe,Zr(t),e);var a=et(b(ke,n-Wr,r,t,Xr));return d(pe,a,e)}var i=d(ye,u,e);if(i.$){a=et(b(ke,n-Wr,r,t,we(i)));return s(xe,u,a,e)}var a=et(b(ke,n-Wr,r,t,i.a));return s(xe,u,a,e)}),Ae=o(function(n,r){var t=r.a,e=r.b,u=r.c,a=rt(r.d),i=rt(n),o=t+(i-a);if(g(i,32)){if(0<p(o>>>Wr,1<<e)){var f=e+Wr,c=b(ke,f,t,n,we(et(u)));return b(Ir,o,f,c,Xr)}return b(Ir,o,e,b(ke,e,t,n,u),Xr)}return b(Ir,o,e,u,n)}),je=o(function(n,r){return d(Ae,d(pe,n,r.d),r)}),Te=o(function(n,r){return{$:4,a:n,b:r}}),_e=o(function(n,r){return d(Te,n,r)}),Ee=t(function(n,r,t){var e=r.aF,u=r.aB,a=t.J,i=d(Ut,u,n);return y(t,{ai:Pr({aB:n,aF:i}),J:d(je,d(he,t,T([d($e,e,T([d(_e,u,i)]))])),a)})}),ze=t(function(n,r,t){var e=t.J;return y(t,{ai:Mr,J:d(je,d(he,t,T([d($e,r.aF,T([d(_e,r.aB,n)]))])),e)})}),Ne=o(function(n,r){var t=n.a,e=n.b;return y(r,{ai:Pr({aB:w(t,e),aF:w(t,e)})})}),Le=o(function(n,r){return y(r,{bE:n})}),Be=o(function(n,r){return y(r,{aH:n})}),Fe=o(function(r,t){var e=t.ai;return w(function(){switch(r.$){case 0:return function(n){return y(n,{J:Qr,aK:Lr(n.J)})}(function(n){return y(n,{az:n.az+1})}(t));case 1:return d(Ne,n=r.a,t);case 2:var n=r.a;return e.$?t:s(Ee,n,e.a,t);case 3:n=r.a;return e.$?t:s(ze,n,e.a,t);case 4:return d(Le,r.a,t);default:return d(Be,r.a,t)}}(),Lt)}),Ce=function(n){return{$:3,a:n}},Je=function(n){return{$:2,a:n}},qe=function(n){return{$:1,a:n}},Oe=b(zt,0,0,0,1),Pe=b(zt,52/255,101/255,164/255,1),Me=b(zt,193/255,125/255,17/255,1),Ye=b(zt,85/255,87/255,83/255,1),Ke=Rn("div"),Re=function(n){return d(Ke,k,n)},Se=Rn("button"),De=Dn,He=o(function(n,r){return d(De,n,{$:0,a:r})}),Ie=function(n){return d(He,"click",dt(n))},Xe=Hn,Ue=o(function(n,r){return d(Se,T([d(Xe,"border-radius","50%"),d(Xe,"background-color",oe(r)),d(Xe,"display","block"),d(Xe,"width","40px"),d(Xe,"height","40px"),d(Xe,"margin","5px"),d(Xe,"border","2px solid white"),d(Xe,"box-shadow",g(n,r)?"rgba(0, 0, 0, 0.4) 0px 4px 6px":"none"),d(Xe,"transition","transform 0.2s linear"),d(Xe,"outline","none"),d(Xe,"transform",g(n,r)?"translateY(-6px)":"none"),Ie((t=r,{$:4,a:t}))]),k);var t}),Ge=t(function(n,r,t){return r(n(t))}),We=b(zt,32/255,74/255,135/255,1),Qe=b(zt,143/255,89/255,2/255,1),Ve=b(zt,46/255,52/255,54/255,1),Ze=b(zt,78/255,154/255,6/255,1),nu=b(zt,186/255,189/255,182/255,1),ru=b(zt,206/255,92/255,0,1),tu=b(zt,92/255,53/255,.4,1),eu=b(zt,164/255,0,0,1),uu=b(zt,196/255,160/255,0,1),au=b(zt,115/255,210/255,22/255,1),iu=b(zt,211/255,215/255,207/255,1),ou=b(zt,233/255,185/255,110/255,1),fu=b(zt,136/255,138/255,133/255,1),cu=b(zt,138/255,226/255,52/255,1),vu=b(zt,238/255,238/255,236/255,1),su=b(zt,252/255,175/255,62/255,1),bu=b(zt,173/255,127/255,168/255,1),du=b(zt,239/255,41/255,41/255,1),lu=b(zt,1,233/255,79/255,1),hu=b(zt,245/255,121/255,0,1),gu=b(zt,117/255,80/255,123/255,1),$u=b(zt,.8,0,0,1),pu=b(zt,1,1,1,1),mu=b(zt,237/255,212/255,0,1),wu={de:!0,dn:!1},yu=o(function(n,r){return d(De,n,{$:3,a:r})}),xu=a(function(n,r,t,e,u,a){return{co:r,cs:t,cU:n,bh:e,c9:u,di:a}}),ku=U,Au=D,ju=d(st,function(n){switch(n){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;default:return 0}},d(ku,"button",Au)),Tu=s(bt,o(function(n,r){return w(n,r)}),d(ku,"clientX",Et),d(ku,"clientY",Et)),_u=H,Eu=b(Z,t(function(n,r,t){return{ci:n,cv:r,dj:t}}),d(ku,"altKey",_u),d(ku,"ctrlKey",_u),d(ku,"shiftKey",_u)),zu=rn,Nu=s(bt,o(function(n,r){return w(n,r)}),d(ku,"offsetX",Et),d(ku,"offsetY",Et)),Lu=s(bt,o(function(n,r){return w(n,r)}),d(ku,"pageX",Et),d(ku,"pageY",Et)),Bu=s(bt,o(function(n,r){return w(n,r)}),d(ku,"screenX",Et),d(ku,"screenY",Et)),Fu=c(zu,xu,Eu,ju,Tu,Nu,Lu,Bu),Cu=t(function(n,r,t){return d(yu,n,d(st,function(n){return{c0:t(n),de:r.de,dn:r.dn}},Fu))}),Ju=d(Cu,"mousedown",wu),qu=d(Cu,"mousemove",wu),Ou=e(function(n,r,t,e){return{cr:r,cU:n,dp:t,du:e}}),Pu=nn,Mu=l(Pu,e(function(n,r,t,e){return{cs:r,cN:n,c9:t,di:e}}),d(ku,"identifier",Au),Tu,Lu,Bu),Yu=d(mt,bt(Tr),dt(k)),Ku=W,Ru=function(r){var t=function(n){return d(ku,Yr(n),r)};return d(Ku,function(n){return Yu(d(wt,t,d(Dr,0,n-1)))},d(ku,"length",Au))},Su=l(Pu,Ou,Eu,d(ku,"changedTouches",Ru(Mu)),d(ku,"targetTouches",Ru(Mu)),d(ku,"touches",Ru(Mu))),Du=d(ku,"target",s(bt,o(function(n,r){return w(r,n)}),d(ku,"offsetTop",Et),d(ku,"offsetLeft",Et))),Hu=s(bt,o(function(n,r){return{bJ:n,cb:r}}),Su,Du),Iu=o(function(n,r){return d(yu,n,d(st,function(n){return{c0:r(n),de:!0,dn:!0}},Hu))}),Xu=d(Cu,"mouseup",wu),Uu=Rn("p"),Gu=o(function(e,u){var n=d(wt,function(n){var r,t=d(tt,2,10*n);return d(Se,T([d(Xe,"-webkit-appearance","none"),d(Xe,"-moz-appearance","none"),d(Xe,"display","block"),d(Xe,"background-color","transparent"),d(Xe,"border","none"),d(Xe,"margin","5px"),d(Xe,"padding","0"),d(Xe,"min-width",Yr(30)+"px"),d(Xe,"min-height",Yr(60)+"px"),d(Xe,"outline","none"),Ie((r=t,{$:5,a:r}))]),T([d(Ke,T([d(Xe,"border-radius","50%"),d(Xe,"background-color",oe(e)),d(Xe,"border","3px solid "+oe(Wt(pu))),d(Xe,"width",Yr(t)+"px"),d(Xe,"height",Yr(t)+"px"),d(Xe,"margin","0 auto"),d(Xe,"box-shadow",g(u,t)?"rgba(0, 0, 0, 0.4) 0px 4px 6px":"none"),d(Xe,"transition","transform 0.2s linear"),d(Xe,"transform",g(u,t)?"translateY(-6px)":"none")]),k)]))},d(Dr,0,6));return d(Ke,T([d(Xe,"display","flex"),d(Xe,"flex-direction","row"),d(Xe,"justify-content","space-around"),d(Xe,"align-items","center")]),n)}),Wu=Kn,Qu=d(Rn("canvas"),k,k),Vu=o(function(n,r){return sn(s(Rr,function(t){return o(function(n,r){return r.push(bn(t(n))),r})}(n),[],r))}),Zu=o(function(n,r){return d(In,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),Un(r))}),na=function(n){return Sn(function(n){return"script"==n?"p":n}(n))},ra=k,ta=o(function(n,r){return Vt(T([w("type",Zt("function")),w("name",Zt(n)),w("args",d(Vu,ht,r))]))}),ea=d(ta,"beginPath",k),ua=sn,aa=a(function(n,r,t,e,u,a){return d(ta,"arc",T([ee(n),ee(r),ee(t),ee(e),ee(u),ua(a)]))}),ia=t(function(n,r,t){return h(aa,n,r,t,0,6.283185307179586,!1)}),oa=J,fa=o(function(n,r){return d(ta,"moveTo",T([ee(n),ee(r)]))}),ca=e(function(n,r,t,e){return d(ta,"rect",T([ee(n),ee(r),ee(t),ee(e)]))}),va=u(function(n,r,t,e,u){return d(ta,"arcTo",T([ee(n),ee(r),ee(t),ee(e),ee(u)]))}),sa=a(function(n,r,t,e,u,a){return d(ta,"bezierCurveTo",T([ee(n),ee(r),ee(t),ee(e),ee(u),ee(a)]))}),ba=o(function(n,r){return d(ta,"lineTo",T([ee(n),ee(r)]))}),da=e(function(n,r,t,e){return d(ta,"quadraticCurveTo",T([ee(n),ee(r),ee(t),ee(e)]))}),la=o(function(n,r){switch(n.$){case 0:var t=n.a,e=n.b;return d(Tr,l(va,t.a,t.b,e.a,e.b,n.c),r);case 1:var u=n.a,a=n.b,i=n.c;return d(Tr,h(sa,u.a,u.b,a.a,a.b,i.a,i.b),r);case 2:var o=n.a;return d(Tr,d(ba,o.a,o.b),r);case 3:var f=n.a;return d(Tr,d(fa,f.a,f.b),r);default:var c=n.a,v=n.b;return d(Tr,b(da,c.a,c.b,v.a,v.b),r)}}),ha=q,ga=o(function(n,r){switch(n.$){case 0:var t=n.a;return d(Tr,b(ca,o=t.a,f=t.b,n.b,n.c),d(Tr,d(fa,o,f),r));case 1:var e=n.a,u=n.b;return d(Tr,s(ia,o=e.a,f=e.b,u),d(Tr,d(fa,o+u,f),r));case 2:var a=n.a,i=n.b;return s(Rr,la,d(Tr,d(fa,o=a.a,f=a.b),r),i);default:var o,f,c=n.a,v=n.c;return d(Tr,h(aa,o=c.a,f=c.b,n.b,v,n.d,n.e),d(Tr,d(fa,o+oa(v),f+ha(v)),r))}}),$a=function(n){return d(ne,"fillStyle",Zt(oe(n)))},pa=o(function(n,r){return d(Tr,d(ta,"fill",T([Zt(function(n){return n?"evenodd":"nonzero"}(0))])),d(Tr,$a(n),r))}),ma=d(ta,"stroke",k),wa=function(n){return d(ne,"strokeStyle",Zt(oe(n)))},ya=o(function(n,r){return d(Tr,ma,d(Tr,wa(n),r))}),xa=o(function(n,r){switch(n.$){case 0:return d(pa,Oe,r);case 1:return d(pa,n.a,r);case 2:return d(ya,n.a,r);default:return d(ya,n.b,d(pa,n.a,r))}}),ka=e(function(n,r,t,e){if(1===e.$)return d(ta,"fillText",T([Zt(n),ee(r),ee(t)]));var u=e.a;return d(ta,"fillText",T([Zt(n),ee(r),ee(t),ee(u)]))}),Aa=u(function(n,r,t,e,u){return d(Tr,b(ka,n.bw,r,t,n.bd),d(Tr,$a(e),u))}),ja=e(function(n,r,t,e){if(1===e.$)return d(ta,"strokeText",T([Zt(n),ee(r),ee(t)]));var u=e.a;return d(ta,"strokeText",T([Zt(n),ee(r),ee(t),ee(u)]))}),Ta=u(function(n,r,t,e,u){return d(Tr,b(ja,n.bw,r,t,n.bd),d(Tr,wa(e),u))}),_a=t(function(n,r,t){var e=r.b$,u=e.a,a=e.b;switch(n.$){case 0:return l(Aa,r,u,a,Oe,t);case 1:return l(Aa,r,u,a,n.a,t);case 2:return l(Ta,r,u,a,n.a,t);default:return l(Ta,r,u,a,n.b,l(Aa,r,u,a,n.a,t))}}),Ea=t(function(n,r,t){return s(_a,n,r,t)}),za=f(function(n,r,t,e,u,a,i,o,f){return d(ta,"drawImage",T([f,ee(n),ee(r),ee(t),ee(e),ee(u),ee(a),ee(i),ee(o)]))}),Na=e(function(t,e,u,n){return d(Tr,function(){if(u.$){var n=u.a;return v(za,n.cf,n.cg,n.bz,n.a4,t,e,n.bz,n.a4,(r=u.b).cT)}var r;return v(za,0,0,(r=u.a).bz,r.a4,t,e,r.bz,r.a4,r.cT)}(),n)}),La=t(function(n,r,t){return b(Na,n.a,n.b,r,t)}),Ba=t(function(n,r,t){switch(n.$){case 0:return s(Ea,r,n.a,t);case 1:var e=n.a;return d(xa,r,s(Rr,ga,d(Tr,ea,t),e));default:return s(La,n.a,n.b,t)}}),Fa=d(ta,"restore",k),Ca=d(ta,"save",k),Ja=o(function(n,r){return d(Tr,Fa,s(Ba,n.ah,n.ag,x(n.P,d(Tr,Ca,r))))}),qa=function(n){return{$:0,a:n}},Oa=o(function(n,r){return d(Xn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),Un(r))}),Pa=o(function(n,r){return s(mt,ku,r,n)}),Ma=d(Ku,function(t){return s(bt,o(function(n,r){return{a4:r,cT:t,bz:n}}),d(Pa,T(["target","width"]),Et),d(Pa,T(["target","height"]),Et))},d(ku,"target",X)),Ya=Rn("img"),Ka=o(function(n,r){return d(In,n,Zt(r))}),Ra=function(n){var r=n.a,t=n.b;return w(r,d(Ya,T([function(n){return d(Ka,"src",Un(n))}(r),d(Oa,"crossorigin","anonymous"),d(Xe,"display","none"),d(He,"load",d(st,d(Ge,qa,d(Ge,Pr,t)),Ma)),d(He,"error",dt(t(Mr)))]),k))},Sa=t(function(n,r,t){return s(na,"elm-canvas",d(Tr,(e=function(n){return s(Rr,Ja,ra,n)}(t),d(Zu,"cmds",d(Vu,ht,e))),d(Tr,d(Xn,"height",Yr(n.a4)),d(Tr,function(n){return d(Xn,"width",Yr(n))}(n.bz),r))),d(Tr,w("__canvas",Qu),d(wt,Ra,n.cc)));var e}),Da=t(function(n,r,t){return s(Sa,{a4:n.b,cc:k,bz:n.a},r,t)}),Ha=o(function(n,r){return r.$?Mr:Pr(n(r.a))}),Ia=o(function(n,r){return r.$?n:r.a}),Xa=function(n){var r=n.bJ,t=n.cb;return d(Ia,w(0,0),d(Ha,function(n){var r=n.c9;return w(r.a-t.a,r.b-t.b)},function(n){if(n.b)return Pr(n.a);return Mr}(r.cr)))},Ua=_t({cR:function(){return w({bE:Nt,ai:Mr,az:0,J:Qr,aH:20,aK:k},Lt)},$7:function(){return Xt(Bt)},dv:Fe,dw:function(n){var r,t,e=n.bE,u=n.aH,a=n.aK;return d(Ke,k,T([d(Uu,T([d(Xe,"text-align","center"),d(Xe,"font-size","80%")]),T([Wu("Draw something! (mouse or touch)")])),s(Da,w(500,500),T([d(Xe,"touch-action","none"),Ju(d(Ge,function(n){return n.bh},qe)),qu(d(Ge,function(n){return n.bh},Je)),Xu(d(Ge,function(n){return n.bh},Ce)),d(Iu,"touchstart",d(Ge,Xa,qe)),d(Iu,"touchmove",d(Ge,Xa,Je)),d(Iu,"touchend",d(Ge,Xa,Ce))]),a),d(Ke,T([d(Xe,"max-width",Yr(480)+"px"),d(Xe,"padding","10px")]),T([d(Gu,e,u),(r=e,d(Ke,T([d(Xe,"display","flex"),d(Xe,"flex-direction","row"),d(Xe,"justify-content","space-around")]),(t=T([T([du,$u,eu]),T([su,hu,ru]),T([lu,mu,uu]),T([cu,au,Ze]),T([Nt,Pe,We]),T([bu,gu,tu]),T([ou,Me,Qe]),T([pu,vu,iu]),T([nu,fu,Ye]),T([Ve,Oe])]),d(wt,d(Ge,wt(Ue(r)),Re),t))))]))]))}});Ht={Drawing:{init:Ua(Et)(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?C(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Ht):n.Elm=Ht}(this);