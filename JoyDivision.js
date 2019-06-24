!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function i(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function e(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function u(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function a(f){return n(6,f,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return f(a,u,e,t,n,r)}}}}}})}function f(c){return n(9,c,function(o){return function(i){return function(f){return function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return c(o,i,f,a,u,e,t,n,r)}}}}}}}}})}function l(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function d(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function h(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function s(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function b(r,n,t,e,u,a,f){return 6===r.a?r.f(n,t,e,u,a,f):r(n)(t)(e)(u)(a)(f)}function o(r,n,t,e,u,a,f,i,o,c){return 9===r.a?r.f(n,t,e,u,a,f,i,o,c):r(n)(t)(e)(u)(a)(f)(i)(o)(c)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var c=i(g);function p(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function v(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function m(r,n){for(var t,e=[],u=y(r,n,0,e);u&&(t=e.pop());u=y(t.a,t.b,0,e));return u}function y(r,n,t,e){if(100<t)return e.push(A(r,n)),!0;if(r===n)return!0;if("object"!=typeof r||null===r||null===n)return"function"==typeof r&&F(5),!1;for(var u in r.$<0&&(r=un(r),n=un(n)),r)if(!y(r[u],n[u],t+1,e))return!1;return!0}function k(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=k(r.a,n.a))?t:(t=k(r.b,n.b))?t:k(r.c,n.c);for(;r.b&&n.b&&!(t=k(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var w=0;function A(r,n){return{a:r,b:n}}function j(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function _(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var T=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),N=i(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,A(t,n)}),E=i(function(r,n){return n[r]}),L=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[r]=n,u}),x=i(function(r,n){for(var t=n.length,e=Array(t+1),u=0;u<t;u++)e[u]=n[u];return e[t]=r,e}),C=t(function(r,n,t){for(var e=t.length,u=0;u<e;u++)n=l(r,t[u],n);return n}),O=t(function(r,n,t){for(var e=t.length-1;0<=e;e--)n=l(r,t[e],n);return n}),q=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=l(r,n+a,t[a]);return u});function F(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var J=Math.cos,z=Math.sin;var M=Math.ceil,P=Math.floor,S=Math.round,R=Math.log;var B=i(function(r,n){return n.join(r)});function Y(r){return r+""}var I=i(function(r,n){return D(r,K(n))});function D(r,n){switch(r.$){case 3:return"boolean"==typeof n?Bn(n):U("a BOOL",n);case 2:return"number"!=typeof n?U("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Bn(n):!isFinite(n)||n%1?U("an INT",n):Bn(n);case 4:return"number"==typeof n?Bn(n):U("a FLOAT",n);case 6:return"string"==typeof n?Bn(n):n instanceof String?Bn(n+""):U("a STRING",n);case 9:return null===n?Bn(r.c):U("null",n);case 5:return Bn(Q(n));case 7:return Array.isArray(n)?X(r.b,n,p):U("a LIST",n);case 8:return Array.isArray(n)?X(r.b,n,G):U("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return U("an OBJECT with a field named `"+t+"`",n);var e=D(r.b,n[t]);return Fn(e)?e:Rn(l(In,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return U("an ARRAY",n);if(n.length<=u)return U("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=D(r.b,n[u]);return Fn(e)?e:Rn(l(Dn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return U("an OBJECT",n);var a=$;for(var f in n)if(n.hasOwnProperty(f)){e=D(r.b,n[f]);if(!Fn(e))return Rn(l(In,f,e.a));a=g(A(f,e.a),a)}return Bn(An(a));case 13:for(var i=r.f,o=r.g,c=0;c<o.length;c++){e=D(o[c],n);if(!Fn(e))return e;i=i(e.a)}return Bn(i);case 14:e=D(r.b,n);return Fn(e)?D(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=D(s.a,n);if(Fn(e))return e;v=g(e.a,v)}return Rn(Xn(An(v)));case 1:return Rn(l(Yn,r.a,Q(n)));case 0:return Bn(r.a)}}function X(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var f=D(r,n[a]);if(!Fn(f))return Rn(l(Dn,a,f.a));u[a]=f.a}return Bn(t(u))}function G(n){return l(Mn,n.length,function(r){return n[r]})}function U(r,n){return Rn(l(Yn,"Expecting "+r,Q(n)))}function W(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return W(r.b,n.b);case 10:return r.d===n.d&&W(r.b,n.b);case 11:return r.e===n.e&&W(r.b,n.b);case 13:return r.f===n.f&&H(r.g,n.g);case 14:return r.h===n.h&&W(r.b,n.b);case 15:return H(r.g,n.g)}}function H(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!W(r[e],n[e]))return!1;return!0}function Q(r){return r}function K(r){return r}var V=t(function(r,n,t){return t[r]=K(n),t});Q(null);function Z(r){return{$:0,a:r}}function rr(r){return{$:2,b:r,c:null}}var nr=i(function(r,n){return{$:3,b:r,d:n}});var tr=0;function er(r){var n={$:0,e:tr++,f:r,g:null,h:[]};return or(n),n}function ur(n){return rr(function(r){r(Z(er(n)))})}function ar(r,n){r.h.push(n),or(r)}var fr=!1,ir=[];function or(r){if(ir.push(r),!fr){for(fr=!0;r=ir.shift();)cr(r);fr=!1}}function cr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,or(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function vr(r,n,t,e,u,a){var f=l(I,r,Q(n?n.flags:void 0));Fn(f)||F(2);var i={},o=(f=t(f.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in sr){var u=sr[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=br(u,n)}return t}(i,s);function s(r,n){c(o=(f=l(e,r,o)).a,n),$r(i,f.b,u(o))}return $r(i,f.b,u(o)),v?{ports:v}:{}}var sr={};function br(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,f=r.e,i=r.f;function o(t){return l(nr,o,{$:5,b:function(r){var n=r.a;return 0===r.$?d(a,e,n,t):f&&i?h(u,e,n.i,n.j,t):d(u,e,f?n.i:n.j,t)}})}return e.h=er(l(nr,o,r.b))}var lr=i(function(n,t){return rr(function(r){n.g(t),r(Z(w))})});function dr(n){return function(r){return{$:1,k:n,l:r}}}function hr(r){return{$:2,m:r}}function $r(r,n,t){var e={};for(var u in gr(!0,n,e,null),gr(!1,t,e,null),r)ar(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function gr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return l(r?sr[n].e:sr[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var f=n.m;f.b;f=f.b)gr(r,f.a,t,e);return;case 3:return void gr(r,n.o,t,{p:n.n,q:e})}}var pr;var mr="undefined"!=typeof document?document:{};function yr(r,n){r.appendChild(n)}function kr(r){return{$:0,a:r}}var wr=i(function(a,f){return i(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:f,d:Tr(r),e:t,f:a,b:e}})})(void 0);i(function(a,f){return i(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:f,d:Tr(r),e:t,f:a,b:e}})})(void 0);var Ar=i(function(r,n){return{$:"a2",n:r,o:n}}),jr=i(function(r,n){return{$:"a3",n:r,o:n}});var _r;function Tr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var f=n[e]||(n[e]={});"a3"===e&&"class"===u?Nr(f,u,a):f[u]=a}else"className"===u?Nr(n,u,K(a)):n[u]=K(a)}return n}function Nr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function Er(r,n){var t=r.$;if(5===t)return Er(r.k||(r.k=r.m()),n);if(0===t)return mr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(f=Er(e,a)).elm_event_node_ref=a,f}if(3===t)return Lr(f=r.h(r.g),n,r.d),f;var f=r.f?mr.createElementNS(r.f,r.c):mr.createElement(r.c);pr&&"a"==r.c&&f.addEventListener("click",pr(f)),Lr(f,n,r.d);for(var i=r.e,o=0;o<i.length;o++)yr(f,Er(1===t?i[o]:i[o].b,n));return f}function Lr(r,n,t){for(var e in t){var u=t[e];"a1"===e?xr(r,u):"a0"===e?qr(r,n,u):"a3"===e?Cr(r,u):"a4"===e?Or(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function xr(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function Cr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function Or(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function qr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],f=e[u];if(a){if(f){if(f.q.$===a.$){f.q=a;continue}r.removeEventListener(u,f)}f=Fr(n,a),r.addEventListener(u,f,_r&&{passive:oe(a)<2}),e[u]=f}else r.removeEventListener(u,f),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){_r=!0}}))}catch(r){}function Fr(v,r){function s(r){var n=s.q,t=D(n.a,r);if(Fn(t)){for(var e,u=oe(n),a=t.a,f=u?u<3?a.a:a.M:a,i=1==u?a.b:3==u&&a.ba,o=(i&&r.stopPropagation(),(2==u?a.b:3==u&&a.a4)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)f=e(f);else for(var c=e.length;c--;)f=e[c](f);o=o.p}o(f,i)}}return s.q=r,s}function Jr(r,n){return r.$==n.$&&W(r.a,n.a)}function zr(r,n){var t=[];return Pr(r,n,t,0),t}function Mr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Pr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Mr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var f=r.l,i=n.l,o=f.length,c=o===i.length;c&&o--;)c=f[o]===i[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Pr(r.k,n.k,v,0),void(0<v.length&&Mr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Mr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||Mr(t,2,e,b),void Pr(d,h,t,e+1));case 0:return void(r.a!==n.a&&Mr(t,3,e,n.a));case 1:return void Sr(r,n,t,e,Br);case 2:return void Sr(r,n,t,e,Yr);case 3:if(r.h!==n.h)return void Mr(t,0,e,n);var $=Rr(r.d,n.d);$&&Mr(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&Mr(t,5,e,g))}}}function Sr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Rr(r.d,n.d);a&&Mr(t,4,e,a),u(r,n,t,e)}else Mr(t,0,e,n)}function Rr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],f=n[u];a===f&&"value"!==u&&"checked"!==u||"a0"===t&&Jr(a,f)||((e=e||{})[u]=f)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var i=Rr(r[u],n[u]||{},u);i&&((e=e||{})[u]=i)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Br(r,n,t,e){var u=r.e,a=n.e,f=u.length,i=a.length;i<f?Mr(t,6,e,{v:i,i:f-i}):f<i&&Mr(t,7,e,{v:f,e:a});for(var o=f<i?f:i,c=0;c<o;c++){var v=u[c];Pr(v,a[c],t,++e),e+=v.b||0}}function Yr(r,n,t,e){for(var u=[],a={},f=[],i=r.e,o=n.e,c=i.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=i[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var p=i[s+1],m=o[b+1];if(p)var y=p.a,k=p.b,w=h===y;if(m)var A=m.a,j=m.b,_=d===A;if(_&&w)Pr($,j,u,++l),Dr(a,u,d,g,b,f),l+=$.b||0,Xr(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,Dr(a,u,h,g,b,f),Pr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Xr(a,u,d,$,++l),l+=$.b||0,Pr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Xr(a,u,d,$,++l),Dr(a,u,h,g,b,f),l+=$.b||0,Pr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Pr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Xr(a,u,(T=i[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Dr(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<f.length||E)&&Mr(t,8,e,{w:u,x:f,y:E})}var Ir="_elmW6BL";function Dr(r,n,t,e,u,a){var f=r[t];if(!f)return a.push({r:u,A:f={c:0,z:e,r:u,s:void 0}}),void(r[t]=f);if(1===f.c){a.push({r:u,A:f}),f.c=2;var i=[];return Pr(f.z,e,i,f.r),f.r=u,void(f.s.s={w:i,A:f})}Dr(r,n,t+Ir,e,u,a)}function Xr(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var f=[];return Pr(e,a.z,f,u),void Mr(n,9,u,{w:f,A:a})}Xr(r,n,t+Ir,e,u)}else{var i=Mr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:i}}}function Gr(r,n,t,e){!function r(n,t,e,u,a,f,i){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Gr(n,t.k,o.s,i);else if(8===v){o.t=n,o.u=i;var s=o.s.w;0<s.length&&r(n,t,s,0,a,f,i)}else if(9===v){o.t=n,o.u=i;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,f,i)}}else o.t=n,o.u=i;if(!(o=e[++u])||(c=o.r)>f)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,f,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var p=1===l?h[g]:h[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r($[g],p,e,u,a,m,i),!(o=e[u])||(c=o.r)>f))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Ur(r,n,t,e){return 0===t.length?r:(Gr(r,n,t,e),Wr(r,t))}function Wr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Hr(u,e);u===r&&(r=a)}return r}function Hr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=Er(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return Lr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Wr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(Er(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var f=t.A;return void 0!==f.r&&r.parentNode.removeChild(r),f.s=Wr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=mr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;yr(t,2===a.c?a.s:Er(a.z,n.u))}return t}(t.y,n);r=Wr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var f=u[a],i=f.A,o=2===i.c?i.s:Er(i.z,n.u);r.insertBefore(o,r.childNodes[f.r])}e&&yr(r,e);return r}(r,n);case 5:return n.s(r);default:F(10)}}function Qr(r){if(3===r.nodeType)return kr(r.textContent);if(1!==r.nodeType)return kr("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(l(jr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),f=$,i=r.childNodes;for(e=i.length;e--;)f=g(Qr(i[e]),f);return d(wr,a,n,f)}var Kr=e(function(n,r,t,i){return vr(r,i,n.cp,n.c$,n.cU,function(e,r){var u=n.c1,a=i.node,f=Qr(a);return Zr(r,function(r){var n=u(r),t=zr(f,n);a=Ur(a,f,t,e),f=n})})}),Vr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Zr(t,e){e(t);var u=0;function a(){u=1===u?0:(Vr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Vr(a),u=2)}}var rn={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var nn,tn=t(function(r,n,t){for(;;){if(-2===t.$)return n;var e=t.d,u=r,a=d(r,t.b,t.c,d(tn,r,n,t.e));r=u,n=a,t=e}}),en=c,un=function(r){return d(tn,t(function(r,n,t){return l(en,A(r,n),t)}),$,r)},an=O,fn=t(function(t,r,n){var e=n.c,u=n.d,a=i(function(r,n){return d(an,r.$?t:a,n,r.a)});return d(an,a,d(an,t,r,u),e)}),on=function(r){return d(fn,en,$,r)},cn=function(r){return r<0?-r:r},vn=i(function(r,n){return 0<k(r,n)?r:n}),sn=i(function(r,n){var t=n.a,e=n.b,u=cn(t-250);return A(t,e+r*l(vn,-u/(100/150)+150,0)/2*-1)}),bn=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),ln=M,dn=i(function(r,n){return R(n)/R(r)}),hn=function(r){return r},$n=ln(l(dn,2,32)),gn=[],pn=h(bn,0,$n,gn,gn),mn=function(r){return{$:1,a:r}},yn=function(r){return{$:0,a:r}},kn=N,wn=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=l(r,t.a,n);r=u,n=a,t=e}}),An=function(r){return d(wn,en,$,r)},jn=i(function(r,n){for(;;){var t=l(kn,32,r),e=t.b,u=l(en,yn(t.a),n);if(!e.b)return An(u);r=e,n=u}}),_n=i(function(r,n){for(;;){var t=ln(n/32);if(1===t)return l(kn,32,r).a;r=l(jn,r,$),n=t}}),Tn=P,Nn=function(r){return r.length},En=i(function(r,n){if(n.k){var t=32*n.k,e=Tn(l(dn,32,t-1)),u=r?An(n.o):n.o,a=l(_n,u,n.k);return h(bn,Nn(n.n)+t,l(vn,5,e*$n),a,n.n)}return h(bn,Nn(n.n),$n,gn,n.n)}),Ln=t(function(r,n,t){for(;;){var e=l(kn,32,r),u=e.a,a=e.b;if(k(Nn(u),32)<0)return l(En,!0,{o:n,k:t,n:u});r=a,n=l(en,mn(u),n),t=t+1}}),xn=function(r){return r>>>5<<5},Cn=C,On=q,qn=i(function(e,r){var n=r.c,t=r.d,u={o:$,k:0,n:d(On,e,xn(r.a),t)},a=i(function(r,n){if(r.$){var t=mn(d(On,e,32*n.k,r.a));return{o:l(en,t,n.o),k:n.k+1,n:n.n}}return d(Cn,a,n,r.a)});return l(En,!0,d(Cn,a,u,n))}),Fn=function(r){return!r.$},Jn=T,zn=u(function(r,n,t,e,u){for(;;){if(n<0)return l(En,!1,{o:e,k:t/32|0,n:u});var a=mn(d(Jn,32,n,r));r=r,n=n-32,t=t,e=l(en,a,e),u=u}}),Mn=i(function(r,n){if(0<r){var t=r%32;return s(zn,n,r-t-32,r,$,d(Jn,t,r-t,n))}return pn}),Pn=function(r){return{$:0,a:r}},Sn={$:1},Rn=function(r){return{$:1,a:r}},Bn=function(r){return{$:0,a:r}},Yn=i(function(r,n){return{$:3,a:r,b:n}}),In=i(function(r,n){return{$:0,a:r,b:n}}),Dn=i(function(r,n){return{$:1,a:r,b:n}}),Xn=function(r){return{$:2,a:r}},Gn=Y,Un=i(function(r,n){return l(B,r,v(n))}),Wn=hr($),Hn=t(function(r,n,t){var e=t.b;return A(r(t.a),n(e))}),Qn=function(r){return r},Kn=i(function(r,n){return{$:0,a:r,b:n}}),Vn=function(r){var n=r.b;return l(Kn,1664525*r.a+n>>>0,n)},Zn=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},rt=i(function(u,a){return function(r){var n=Vn(r),t=cn(a-u),e=Zn(n);return A((134217728*(1*(67108863&Zn(r)))+1*(134217727&e))/9007199254740992*t+u,Vn(n))}}),nt=e(function(r,n,t,e){for(;;){if(n<1)return A(r,e);var u=t(e),a=u.b;r=l(en,u.a,r),n=n-1,t=t,e=a}}),tt=i(function(n,r){var t=r;return function(r){return h(nt,$,n,t,r)}}),et=i(function(r,n){return r(n)}),ut=hr($),at=i(function(r,n){return A(j(n,{au:n.au+1}),Wn)}),ft=function(r){return{$:1,a:r}},it=function(r){return{$:2,a:r}},ot=function(r){return it(ft(r))},ct=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),vt=t(function(r,n,t){return d(ct,r,n,t)}),st={$:0},bt=i(function(r,n){return{$:3,a:r,b:n}}),lt=function(r){return{$:2,a:r}},dt=i(function(r,n){var t=A(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return l(bt,e.a,e.b);case 1:switch(t.a.$){case 1:return ft(t.b.a);case 2:return l(bt,t.b.a,t.a.a);case 3:var u=t.a;return l(bt,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return lt(t.b.a);case 1:return l(bt,t.a.a,t.b.a);case 3:var a=t.a;return l(bt,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),ht=i(function(r,n){return d(wn,i(function(r,n){var t=n;switch(r.$){case 0:return j(t,{J:l(en,r.a,t.J)});case 1:return j(t,{J:d(wn,en,t.J,r.a)});case 3:return j(t,{Y:(0,r.a)(t.Y)});default:return j(t,{X:l(dt,t.X,r.a)})}}),n,r)}),$t=i(function(r,n){return l(ht,r,{J:$,X:st,Y:(t=n,{$:1,a:t})});var t}),gt=i(function(r,n){return Q(d(wn,function(t){return i(function(r,n){return n.push(K(t(r))),n})}(r),[],n))}),pt=function(r){return Q(d(wn,i(function(r,n){return d(V,r.a,r.b,n)}),{},r))},mt=Q,yt=i(function(r,n){return pt(p([A("type",mt("function")),A("name",mt(r)),A("args",l(gt,Qn,n))]))}),kt=Q,wt=u(function(r,n,t,e,u){return l(yt,"arcTo",p([kt(r),kt(n),kt(t),kt(e),kt(u)]))}),At=a(function(r,n,t,e,u,a){return l(yt,"bezierCurveTo",p([kt(r),kt(n),kt(t),kt(e),kt(u),kt(a)]))}),jt=i(function(r,n){return l(yt,"lineTo",p([kt(r),kt(n)]))}),_t=i(function(r,n){return l(yt,"moveTo",p([kt(r),kt(n)]))}),Tt=e(function(r,n,t,e){return l(yt,"quadraticCurveTo",p([kt(r),kt(n),kt(t),kt(e)]))}),Nt=i(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return l(en,s(wt,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,f=r.c;return l(en,b(At,u.a,u.b,a.a,a.b,f.a,f.b),n);case 2:var i=r.a;return l(en,l(jt,i.a,i.b),n);case 3:var o=r.a;return l(en,l(_t,o.a,o.b),n);default:var c=r.a,v=r.b;return l(en,h(Tt,c.a,c.b,v.a,v.b),n)}}),Et=Q,Lt=a(function(r,n,t,e,u,a){return l(yt,"arc",p([kt(r),kt(n),kt(t),kt(e),kt(u),Et(a)]))}),xt=t(function(r,n,t){return b(Lt,r,n,t,0,6.283185307179586,!1)}),Ct=e(function(r,n,t,e){return l(yt,"rect",p([kt(r),kt(n),kt(t),kt(e)]))}),Ot=J,qt=z,Ft=i(function(r,n){switch(r.$){case 0:var t=r.a;return l(en,h(Ct,i=t.a,o=t.b,r.b,r.c),l(en,l(_t,i,o),n));case 1:var e=r.a,u=r.b;return l(en,d(xt,i=e.a,o=e.b,u),l(en,l(_t,i+u,o),n));case 2:var a=r.a,f=r.b;return d(wn,Nt,l(en,l(_t,i=a.a,o=a.b),n),f);default:var i,o,c=r.a,v=r.c;return l(en,b(Lt,i=c.a,o=c.b,r.b,v,r.d,r.e),l(en,l(_t,i+Ot(v),o+qt(v)),n))}}),Jt=i(function(r,n){return pt(p([A("type",mt("field")),A("name",mt(r)),A("value",n)]))}),zt=S,Mt=Y,Pt=function(r){var n,t,e=r.b,u=r.c,a=r.d,f=function(r){return zt(1e4*r)/100};return n=p(["rgba(",Mt(f(r.a)),"%,",Mt(f(e)),"%,",Mt(f(u)),"%,",Mt((t=a,zt(1e3*t)/1e3)),")"]),l(Un,"",n)},St=function(r){return l(Jt,"fillStyle",mt(Pt(r)))},Rt=i(function(r,n){return l(en,l(yt,"fill",p([mt(function(r){return r?"evenodd":"nonzero"}(0))])),l(en,St(r),n))}),Bt=l(yt,"stroke",$),Yt=function(r){return l(Jt,"strokeStyle",mt(Pt(r)))},It=i(function(r,n){return l(en,Bt,l(en,Yt(r),n))}),Dt=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Xt=h(Dt,0,0,0,1),Gt=i(function(r,n){switch(r.$){case 0:return l(Rt,Xt,n);case 1:return l(Rt,r.a,n);case 2:return l(It,r.a,n);default:return l(It,r.b,l(Rt,r.a,n))}}),Ut=e(function(r,n,t,e){if(1===e.$)return l(yt,"fillText",p([mt(r),kt(n),kt(t)]));var u=e.a;return l(yt,"fillText",p([mt(r),kt(n),kt(t),kt(u)]))}),Wt=u(function(r,n,t,e,u){return l(en,h(Ut,r.aF,n,t,r.an),l(en,St(e),u))}),Ht=e(function(r,n,t,e){if(1===e.$)return l(yt,"strokeText",p([mt(r),kt(n),kt(t)]));var u=e.a;return l(yt,"strokeText",p([mt(r),kt(n),kt(t),kt(u)]))}),Qt=u(function(r,n,t,e,u){return l(en,h(Ht,r.aF,n,t,r.an),l(en,Yt(e),u))}),Kt=t(function(r,n,t){var e=n.a2,u=e.a,a=e.b;switch(r.$){case 0:return s(Wt,n,u,a,Xt,t);case 1:return s(Wt,n,u,a,r.a,t);case 2:return s(Qt,n,u,a,r.a,t);default:return s(Qt,n,u,a,r.b,s(Wt,n,u,a,r.a,t))}}),Vt=t(function(r,n,t){return d(Kt,r,n,t)}),Zt=f(function(r,n,t,e,u,a,f,i,o){return l(yt,"drawImage",p([o,kt(r),kt(n),kt(t),kt(e),kt(u),kt(a),kt(f),kt(i)]))}),re=e(function(t,e,u,r){return l(en,function(){if(u.$){var r=u.a;return o(Zt,r.bQ,r.bR,r.bP,r.aw,t,e,r.bP,r.aw,(n=u.b).cr)}var n;return o(Zt,0,0,(n=u.a).bP,n.aw,t,e,n.bP,n.aw,n.cr)}(),r)}),ne=t(function(r,n,t){return h(re,r.a,r.b,n,t)}),te=l(yt,"beginPath",$),ee=t(function(r,n,t){switch(r.$){case 0:return d(Vt,n,r.a,t);case 1:var e=r.a;return l(Gt,n,d(wn,Ft,l(en,te,t),e));default:return d(ne,r.a,r.b,t)}}),ue=l(yt,"restore",$),ae=l(yt,"save",$),fe=i(function(r,n){return l(en,ue,d(ee,r.Y,r.X,_(r.J,l(en,ae,n))))}),ie=$,oe=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ce=i(function(r,n){return l(Ar,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),ve=wr("canvas"),se=function(r){return wr(function(r){return"script"==r?"p":r}(r))},be=function(r){return l(jr,"height",Gn(r))},le=function(r){return l(jr,"width",Gn(r))},de=t(function(r,n,t){var e,u=r.a,a=r.b;return d(se,"elm-canvas",p([(e=function(r){return d(wn,fe,ie,r)}(t),l(ce,"cmds",l(gt,Qn,e))),be(a),le(u)]),p([l(ve,l(en,be(a),l(en,le(u),n)),$)]))}),he=e(function(r,n,t,e){var u=function(r,n,t){return{a:r,b:n,c:t}}(r,n,t),a=u.a,f=u.b,i=u.c,o=.5<i?i+f-i*f:i*(f+1),c=2*i-o,v=function(r){var n=r<0?r+1:1<r?r-1:r;return 6*n<1?c+(o-c)*n*6:2*n<1?o:3*n<2?c+(o-c)*(2/3-n)*6:c},s=v(a-1/3),b=v(a),l=v(a+1/3);return h(Dt,l,b,s,e)}),$e=t(function(r,n,t){return h(he,r,n,t,1)}),ge=function(r){return 3.141592653589793*r/180},pe=d($e,ge(260),.1,.1),me=function(r){return{$:0,a:l(Jt,"lineWidth",kt(r))}},ye=i(function(r,n){return{$:2,a:r,b:n}}),ke=i(function(r,n){return l(ye,r,n)}),we=i(function(r,n){return{$:4,a:r,b:n}}),Ae=i(function(r,n){return l(we,r,n)}),je=i(function(r,n){return k(r,30)<0&&k(n,60)<0?30*n+r:-1}),_e=4294967295>>>32-$n,Te=E,Ne=t(function(r,n,t){for(;;){var e=l(Te,_e&n>>>r,t);if(e.$)return l(Te,_e&n,e.a);r=r-$n,n=n,t=e.a}}),Ee=i(function(r,n){var t=n.a,e=n.b,u=n.c,a=n.d;return r<0||-1<k(r,t)?Sn:-1<k(r,xn(t))?Pn(l(Te,_e&r,a)):Pn(d(Ne,e,r,u))}),Le=x,xe=function(r){return[r]},Ce=L,Oe=e(function(r,n,t,e){var u=_e&n>>>r;if(-1<k(u,Nn(e))){if(5===r)return l(Le,mn(t),e);var a=yn(h(Oe,r-$n,n,t,gn));return l(Le,a,e)}var f=l(Te,u,e);if(f.$){a=yn(h(Oe,r-$n,n,t,xe(f)));return d(Ce,u,a,e)}var a=yn(h(Oe,r-$n,n,t,f.a));return d(Ce,u,a,e)}),qe=i(function(r,n){var t=n.a,e=n.b,u=n.c,a=Nn(n.d),f=Nn(r),i=t+(f-a);if(m(f,32)){if(0<k(i>>>$n,1<<e)){var o=e+$n,c=h(Oe,o,t,r,xe(yn(u)));return h(bn,i,o,c,gn)}return h(bn,i,e,h(Oe,e,t,r,u),gn)}return h(bn,i,e,u,r)}),Fe=i(function(r,n){return l(qe,l(Le,r,n.d),n)}),Je=i(function(r,n){return n.$?r:n.a}),ze=t(function(u,r,n){var t,a=r.a,f=r.b,e=n.a,i=n.b,o=l(Je,{a2:A(0,0),a6:0},l(Ee,l(je,a,f),u)).a2,c=o.a,v=o.b,s=function(){if(a){var r=l(Je,{a2:A(c+10,v),a6:0},l(Ee,l(je,a+1,f),u)).a2,n=A((c+r.a)/2,(v+r.b)/2),t=n.a,e=n.b;return l(Ae,A(c,v),A(t,e))}return{$:3,a:A(c,v)}}();if(m(a,29)){var b=l($t,p([me(1.5),ot(pe),(t=d($e,ge(188),.3,.8),it(lt(t)))]),p([l(ke,A(0,0),on(l(Fe,s,e)))]));return A(pn,l(Fe,b,i))}return A(l(Fe,s,e),i)}),Me=t(function(r,f,n){var i=r.cO,o=r.b1;return d(t(function(r,n,t){for(;;){if(-1<k(n,i))return t;if(k(r,o)>-1){r=e=0,n=u=n+1,t=a=t}else{var e=r+1,u=n,a=l(f,A(r,n),t);r=e,n=u,t=a}}}),0,0,n)}),Pe=Z,Se=Pe(0),Re=e(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var f=a.a,i=a.b;if(i.b){var o=i.a,c=i.b;if(c.b){var v=c.b;return l(r,u,l(r,f,l(r,o,l(r,c.a,500<t?d(wn,r,n,An(v)):h(Re,r,n,t+1,v)))))}return l(r,u,l(r,f,l(r,o,n)))}return l(r,u,l(r,f,n))}return l(r,u,n)}return n}),Be=t(function(r,n,t){return h(Re,r,n,0,t)}),Ye=i(function(t,r){return d(Be,i(function(r,n){return l(en,t(r),n)}),$,r)}),Ie=nr,De=i(function(n,r){return l(Ie,function(r){return Pe(n(r))},r)}),Xe=t(function(t,r,e){return l(Ie,function(n){return l(Ie,function(r){return Pe(l(t,n,r))},e)},r)}),Ge=lr,Ue=i(function(r,n){var t=n;return ur(l(Ie,Ge(r),t))});sr.Task={b:Se,c:t(function(r,n){return l(De,function(){return 0},(t=l(Ye,Ue(r),n),d(Be,Xe(en),Pe($),t)));var t}),d:t(function(){return Pe(0)}),e:i(function(r,n){return l(De,r,n)}),f:nn};dr("Task");var We,He={$:4},Qe=Kr({cp:function(r){var n,t=i(function(r,n){return{a2:l(sn,n,(t=d(Hn,hn,hn,function(r){return A(r%30,r/30|0)}(r)),A(10*t.a+5+100,5*t.b+2.5+130))),a6:n};var t}),e=l(et,l(tt,1800,l(rt,0,1)),function(r){var n=Vn(l(Kn,0,1013904223));return Vn(l(Kn,n.a+r>>>0,n.b))}(Tn(1e5*r)));return A({au:0,a3:l(qn,t,(n=e.a).b?d(Ln,n,$,0):pn)},Wn)},cU:function(){return ut},c$:at,c1:function(r){return d(de,A(500,500),$,l(en,l($t,p([ot(pe)]),p([d(vt,A(0,0),500,500)])),on(d(Me,{b1:30,cO:60},ze(r.a3),A(pn,pn)).b)))}});We={Examples:{JoyDivision:{init:Qe(He)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?F(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,We):r.Elm=We}(this);