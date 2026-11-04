var Ac=Object.defineProperty;var Rc=(i,s,a)=>s in i?Ac(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a;var S=(i,s,a)=>(Rc(i,typeof s!="symbol"?s+"":s,a),a);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const _ of l)if(_.type==="childList")for(const y of _.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function a(l){const _={};return l.integrity&&(_.integrity=l.integrity),l.referrerPolicy&&(_.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?_.credentials="include":l.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function u(l){if(l.ep)return;l.ep=!0;const _=a(l);fetch(l.href,_)}})();function Uc(i,s){return class extends i{constructor(...a){super(...a),s(this)}}}const Dc=Uc(Array,i=>i.fill(0));let We=1e-6;function Lc(i){function s(C=0,U=0){const A=new i(2);return C!==void 0&&(A[0]=C,U!==void 0&&(A[1]=U)),A}const a=s;function u(C,U,A){const o=A??new i(2);return o[0]=C,o[1]=U,o}function l(C,U){const A=U??new i(2);return A[0]=Math.ceil(C[0]),A[1]=Math.ceil(C[1]),A}function _(C,U){const A=U??new i(2);return A[0]=Math.floor(C[0]),A[1]=Math.floor(C[1]),A}function y(C,U){const A=U??new i(2);return A[0]=Math.round(C[0]),A[1]=Math.round(C[1]),A}function x(C,U=0,A=1,o){const v=o??new i(2);return v[0]=Math.min(A,Math.max(U,C[0])),v[1]=Math.min(A,Math.max(U,C[1])),v}function P(C,U,A){const o=A??new i(2);return o[0]=C[0]+U[0],o[1]=C[1]+U[1],o}function M(C,U,A,o){const v=o??new i(2);return v[0]=C[0]+U[0]*A,v[1]=C[1]+U[1]*A,v}function z(C,U){const A=C[0],o=C[1],v=U[0],f=U[1],b=Math.sqrt(A*A+o*o),d=Math.sqrt(v*v+f*f),g=b*d,T=g&&Ee(C,U)/g;return Math.acos(T)}function G(C,U,A){const o=A??new i(2);return o[0]=C[0]-U[0],o[1]=C[1]-U[1],o}const q=G;function V(C,U){return Math.abs(C[0]-U[0])<We&&Math.abs(C[1]-U[1])<We}function Y(C,U){return C[0]===U[0]&&C[1]===U[1]}function R(C,U,A,o){const v=o??new i(2);return v[0]=C[0]+A*(U[0]-C[0]),v[1]=C[1]+A*(U[1]-C[1]),v}function N(C,U,A,o){const v=o??new i(2);return v[0]=C[0]+A[0]*(U[0]-C[0]),v[1]=C[1]+A[1]*(U[1]-C[1]),v}function Z(C,U,A){const o=A??new i(2);return o[0]=Math.max(C[0],U[0]),o[1]=Math.max(C[1],U[1]),o}function O(C,U,A){const o=A??new i(2);return o[0]=Math.min(C[0],U[0]),o[1]=Math.min(C[1],U[1]),o}function ee(C,U,A){const o=A??new i(2);return o[0]=C[0]*U,o[1]=C[1]*U,o}const K=ee;function te(C,U,A){const o=A??new i(2);return o[0]=C[0]/U,o[1]=C[1]/U,o}function le(C,U){const A=U??new i(2);return A[0]=1/C[0],A[1]=1/C[1],A}const ue=le;function de(C,U,A){const o=A??new i(3),v=C[0]*U[1]-C[1]*U[0];return o[0]=0,o[1]=0,o[2]=v,o}function Ee(C,U){return C[0]*U[0]+C[1]*U[1]}function Te(C){const U=C[0],A=C[1];return Math.sqrt(U*U+A*A)}const Ue=Te;function Ce(C){const U=C[0],A=C[1];return U*U+A*A}const pe=Ce;function I(C,U){const A=C[0]-U[0],o=C[1]-U[1];return Math.sqrt(A*A+o*o)}const ye=I;function we(C,U){const A=C[0]-U[0],o=C[1]-U[1];return A*A+o*o}const _e=we;function be(C,U){const A=U??new i(2),o=C[0],v=C[1],f=Math.sqrt(o*o+v*v);return f>1e-5?(A[0]=o/f,A[1]=v/f):(A[0]=0,A[1]=0),A}function ae(C,U){const A=U??new i(2);return A[0]=-C[0],A[1]=-C[1],A}function Pe(C,U){const A=U??new i(2);return A[0]=C[0],A[1]=C[1],A}const Ie=Pe;function Ae(C,U,A){const o=A??new i(2);return o[0]=C[0]*U[0],o[1]=C[1]*U[1],o}const De=Ae;function xe(C,U,A){const o=A??new i(2);return o[0]=C[0]/U[0],o[1]=C[1]/U[1],o}const fe=xe;function Se(C=1,U){const A=U??new i(2),o=Math.random()*2*Math.PI;return A[0]=Math.cos(o)*C,A[1]=Math.sin(o)*C,A}function F(C){const U=C??new i(2);return U[0]=0,U[1]=0,U}function J(C,U,A){const o=A??new i(2),v=C[0],f=C[1];return o[0]=v*U[0]+f*U[4]+U[12],o[1]=v*U[1]+f*U[5]+U[13],o}function k(C,U,A){const o=A??new i(2),v=C[0],f=C[1];return o[0]=U[0]*v+U[4]*f+U[8],o[1]=U[1]*v+U[5]*f+U[9],o}function c(C,U,A,o){const v=o??new i(2),f=C[0]-U[0],b=C[1]-U[1],d=Math.sin(A),g=Math.cos(A);return v[0]=f*g-b*d+U[0],v[1]=f*d+b*g+U[1],v}function p(C,U,A){const o=A??new i(2);return be(C,o),ee(o,U,o)}function h(C,U,A){const o=A??new i(2);return Te(C)>U?p(C,U,o):Pe(C,o)}function w(C,U,A){const o=A??new i(2);return R(C,U,.5,o)}return{create:s,fromValues:a,set:u,ceil:l,floor:_,round:y,clamp:x,add:P,addScaled:M,angle:z,subtract:G,sub:q,equalsApproximately:V,equals:Y,lerp:R,lerpV:N,max:Z,min:O,mulScalar:ee,scale:K,divScalar:te,inverse:le,invert:ue,cross:de,dot:Ee,length:Te,len:Ue,lengthSq:Ce,lenSq:pe,distance:I,dist:ye,distanceSq:we,distSq:_e,normalize:be,negate:ae,copy:Pe,clone:Ie,multiply:Ae,mul:De,divide:xe,div:fe,random:Se,zero:F,transformMat4:J,transformMat3:k,rotate:c,setLength:p,truncate:h,midpoint:w}}const ca=new Map;function Ka(i){let s=ca.get(i);return s||(s=Lc(i),ca.set(i,s)),s}function Gc(i){function s(d,g,T){const E=new i(3);return d!==void 0&&(E[0]=d,g!==void 0&&(E[1]=g,T!==void 0&&(E[2]=T))),E}const a=s;function u(d,g,T,E){const $=E??new i(3);return $[0]=d,$[1]=g,$[2]=T,$}function l(d,g){const T=g??new i(3);return T[0]=Math.ceil(d[0]),T[1]=Math.ceil(d[1]),T[2]=Math.ceil(d[2]),T}function _(d,g){const T=g??new i(3);return T[0]=Math.floor(d[0]),T[1]=Math.floor(d[1]),T[2]=Math.floor(d[2]),T}function y(d,g){const T=g??new i(3);return T[0]=Math.round(d[0]),T[1]=Math.round(d[1]),T[2]=Math.round(d[2]),T}function x(d,g=0,T=1,E){const $=E??new i(3);return $[0]=Math.min(T,Math.max(g,d[0])),$[1]=Math.min(T,Math.max(g,d[1])),$[2]=Math.min(T,Math.max(g,d[2])),$}function P(d,g,T){const E=T??new i(3);return E[0]=d[0]+g[0],E[1]=d[1]+g[1],E[2]=d[2]+g[2],E}function M(d,g,T,E){const $=E??new i(3);return $[0]=d[0]+g[0]*T,$[1]=d[1]+g[1]*T,$[2]=d[2]+g[2]*T,$}function z(d,g){const T=d[0],E=d[1],$=d[2],L=g[0],j=g[1],re=g[2],ie=Math.sqrt(T*T+E*E+$*$),se=Math.sqrt(L*L+j*j+re*re),ve=ie*se,Re=ve&&Ee(d,g)/ve;return Math.acos(Re)}function G(d,g,T){const E=T??new i(3);return E[0]=d[0]-g[0],E[1]=d[1]-g[1],E[2]=d[2]-g[2],E}const q=G;function V(d,g){return Math.abs(d[0]-g[0])<We&&Math.abs(d[1]-g[1])<We&&Math.abs(d[2]-g[2])<We}function Y(d,g){return d[0]===g[0]&&d[1]===g[1]&&d[2]===g[2]}function R(d,g,T,E){const $=E??new i(3);return $[0]=d[0]+T*(g[0]-d[0]),$[1]=d[1]+T*(g[1]-d[1]),$[2]=d[2]+T*(g[2]-d[2]),$}function N(d,g,T,E){const $=E??new i(3);return $[0]=d[0]+T[0]*(g[0]-d[0]),$[1]=d[1]+T[1]*(g[1]-d[1]),$[2]=d[2]+T[2]*(g[2]-d[2]),$}function Z(d,g,T){const E=T??new i(3);return E[0]=Math.max(d[0],g[0]),E[1]=Math.max(d[1],g[1]),E[2]=Math.max(d[2],g[2]),E}function O(d,g,T){const E=T??new i(3);return E[0]=Math.min(d[0],g[0]),E[1]=Math.min(d[1],g[1]),E[2]=Math.min(d[2],g[2]),E}function ee(d,g,T){const E=T??new i(3);return E[0]=d[0]*g,E[1]=d[1]*g,E[2]=d[2]*g,E}const K=ee;function te(d,g,T){const E=T??new i(3);return E[0]=d[0]/g,E[1]=d[1]/g,E[2]=d[2]/g,E}function le(d,g){const T=g??new i(3);return T[0]=1/d[0],T[1]=1/d[1],T[2]=1/d[2],T}const ue=le;function de(d,g,T){const E=T??new i(3),$=d[2]*g[0]-d[0]*g[2],L=d[0]*g[1]-d[1]*g[0];return E[0]=d[1]*g[2]-d[2]*g[1],E[1]=$,E[2]=L,E}function Ee(d,g){return d[0]*g[0]+d[1]*g[1]+d[2]*g[2]}function Te(d){const g=d[0],T=d[1],E=d[2];return Math.sqrt(g*g+T*T+E*E)}const Ue=Te;function Ce(d){const g=d[0],T=d[1],E=d[2];return g*g+T*T+E*E}const pe=Ce;function I(d,g){const T=d[0]-g[0],E=d[1]-g[1],$=d[2]-g[2];return Math.sqrt(T*T+E*E+$*$)}const ye=I;function we(d,g){const T=d[0]-g[0],E=d[1]-g[1],$=d[2]-g[2];return T*T+E*E+$*$}const _e=we;function be(d,g){const T=g??new i(3),E=d[0],$=d[1],L=d[2],j=Math.sqrt(E*E+$*$+L*L);return j>1e-5?(T[0]=E/j,T[1]=$/j,T[2]=L/j):(T[0]=0,T[1]=0,T[2]=0),T}function ae(d,g){const T=g??new i(3);return T[0]=-d[0],T[1]=-d[1],T[2]=-d[2],T}function Pe(d,g){const T=g??new i(3);return T[0]=d[0],T[1]=d[1],T[2]=d[2],T}const Ie=Pe;function Ae(d,g,T){const E=T??new i(3);return E[0]=d[0]*g[0],E[1]=d[1]*g[1],E[2]=d[2]*g[2],E}const De=Ae;function xe(d,g,T){const E=T??new i(3);return E[0]=d[0]/g[0],E[1]=d[1]/g[1],E[2]=d[2]/g[2],E}const fe=xe;function Se(d=1,g){const T=g??new i(3),E=Math.random()*2*Math.PI,$=Math.random()*2-1,L=Math.sqrt(1-$*$)*d;return T[0]=Math.cos(E)*L,T[1]=Math.sin(E)*L,T[2]=$*d,T}function F(d){const g=d??new i(3);return g[0]=0,g[1]=0,g[2]=0,g}function J(d,g,T){const E=T??new i(3),$=d[0],L=d[1],j=d[2],re=g[3]*$+g[7]*L+g[11]*j+g[15]||1;return E[0]=(g[0]*$+g[4]*L+g[8]*j+g[12])/re,E[1]=(g[1]*$+g[5]*L+g[9]*j+g[13])/re,E[2]=(g[2]*$+g[6]*L+g[10]*j+g[14])/re,E}function k(d,g,T){const E=T??new i(3),$=d[0],L=d[1],j=d[2];return E[0]=$*g[0*4+0]+L*g[1*4+0]+j*g[2*4+0],E[1]=$*g[0*4+1]+L*g[1*4+1]+j*g[2*4+1],E[2]=$*g[0*4+2]+L*g[1*4+2]+j*g[2*4+2],E}function c(d,g,T){const E=T??new i(3),$=d[0],L=d[1],j=d[2];return E[0]=$*g[0]+L*g[4]+j*g[8],E[1]=$*g[1]+L*g[5]+j*g[9],E[2]=$*g[2]+L*g[6]+j*g[10],E}function p(d,g,T){const E=T??new i(3),$=g[0],L=g[1],j=g[2],re=g[3]*2,ie=d[0],se=d[1],ve=d[2],Re=L*ve-j*se,Be=j*ie-$*ve,ke=$*se-L*ie;return E[0]=ie+Re*re+(L*ke-j*Be)*2,E[1]=se+Be*re+(j*Re-$*ke)*2,E[2]=ve+ke*re+($*Be-L*Re)*2,E}function h(d,g){const T=g??new i(3);return T[0]=d[12],T[1]=d[13],T[2]=d[14],T}function w(d,g,T){const E=T??new i(3),$=g*4;return E[0]=d[$+0],E[1]=d[$+1],E[2]=d[$+2],E}function C(d,g){const T=g??new i(3),E=d[0],$=d[1],L=d[2],j=d[4],re=d[5],ie=d[6],se=d[8],ve=d[9],Re=d[10];return T[0]=Math.sqrt(E*E+$*$+L*L),T[1]=Math.sqrt(j*j+re*re+ie*ie),T[2]=Math.sqrt(se*se+ve*ve+Re*Re),T}function U(d,g,T,E){const $=E??new i(3),L=[],j=[];return L[0]=d[0]-g[0],L[1]=d[1]-g[1],L[2]=d[2]-g[2],j[0]=L[0],j[1]=L[1]*Math.cos(T)-L[2]*Math.sin(T),j[2]=L[1]*Math.sin(T)+L[2]*Math.cos(T),$[0]=j[0]+g[0],$[1]=j[1]+g[1],$[2]=j[2]+g[2],$}function A(d,g,T,E){const $=E??new i(3),L=[],j=[];return L[0]=d[0]-g[0],L[1]=d[1]-g[1],L[2]=d[2]-g[2],j[0]=L[2]*Math.sin(T)+L[0]*Math.cos(T),j[1]=L[1],j[2]=L[2]*Math.cos(T)-L[0]*Math.sin(T),$[0]=j[0]+g[0],$[1]=j[1]+g[1],$[2]=j[2]+g[2],$}function o(d,g,T,E){const $=E??new i(3),L=[],j=[];return L[0]=d[0]-g[0],L[1]=d[1]-g[1],L[2]=d[2]-g[2],j[0]=L[0]*Math.cos(T)-L[1]*Math.sin(T),j[1]=L[0]*Math.sin(T)+L[1]*Math.cos(T),j[2]=L[2],$[0]=j[0]+g[0],$[1]=j[1]+g[1],$[2]=j[2]+g[2],$}function v(d,g,T){const E=T??new i(3);return be(d,E),ee(E,g,E)}function f(d,g,T){const E=T??new i(3);return Te(d)>g?v(d,g,E):Pe(d,E)}function b(d,g,T){const E=T??new i(3);return R(d,g,.5,E)}return{create:s,fromValues:a,set:u,ceil:l,floor:_,round:y,clamp:x,add:P,addScaled:M,angle:z,subtract:G,sub:q,equalsApproximately:V,equals:Y,lerp:R,lerpV:N,max:Z,min:O,mulScalar:ee,scale:K,divScalar:te,inverse:le,invert:ue,cross:de,dot:Ee,length:Te,len:Ue,lengthSq:Ce,lenSq:pe,distance:I,dist:ye,distanceSq:we,distSq:_e,normalize:be,negate:ae,copy:Pe,clone:Ie,multiply:Ae,mul:De,divide:xe,div:fe,random:Se,zero:F,transformMat4:J,transformMat4Upper3x3:k,transformMat3:c,transformQuat:p,getTranslation:h,getAxis:w,getScaling:C,rotateX:U,rotateY:A,rotateZ:o,setLength:v,truncate:f,midpoint:b}}const ua=new Map;function _r(i){let s=ua.get(i);return s||(s=Gc(i),ua.set(i,s)),s}function zc(i){const s=Ka(i),a=_r(i);function u(c,p,h,w,C,U,A,o,v){const f=new i(12);return f[3]=0,f[7]=0,f[11]=0,c!==void 0&&(f[0]=c,p!==void 0&&(f[1]=p,h!==void 0&&(f[2]=h,w!==void 0&&(f[4]=w,C!==void 0&&(f[5]=C,U!==void 0&&(f[6]=U,A!==void 0&&(f[8]=A,o!==void 0&&(f[9]=o,v!==void 0&&(f[10]=v))))))))),f}function l(c,p,h,w,C,U,A,o,v,f){const b=f??new i(12);return b[0]=c,b[1]=p,b[2]=h,b[3]=0,b[4]=w,b[5]=C,b[6]=U,b[7]=0,b[8]=A,b[9]=o,b[10]=v,b[11]=0,b}function _(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h[3]=0,h[4]=c[4],h[5]=c[5],h[6]=c[6],h[7]=0,h[8]=c[8],h[9]=c[9],h[10]=c[10],h[11]=0,h}function y(c,p){const h=p??new i(12),w=c[0],C=c[1],U=c[2],A=c[3],o=w+w,v=C+C,f=U+U,b=w*o,d=C*o,g=C*v,T=U*o,E=U*v,$=U*f,L=A*o,j=A*v,re=A*f;return h[0]=1-g-$,h[1]=d+re,h[2]=T-j,h[3]=0,h[4]=d-re,h[5]=1-b-$,h[6]=E+L,h[7]=0,h[8]=T+j,h[9]=E-L,h[10]=1-b-g,h[11]=0,h}function x(c,p){const h=p??new i(12);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h[4]=-c[4],h[5]=-c[5],h[6]=-c[6],h[8]=-c[8],h[9]=-c[9],h[10]=-c[10],h}function P(c,p,h){const w=h??new i(12);return w[0]=c[0]*p,w[1]=c[1]*p,w[2]=c[2]*p,w[4]=c[4]*p,w[5]=c[5]*p,w[6]=c[6]*p,w[8]=c[8]*p,w[9]=c[9]*p,w[10]=c[10]*p,w}const M=P;function z(c,p,h){const w=h??new i(12);return w[0]=c[0]+p[0],w[1]=c[1]+p[1],w[2]=c[2]+p[2],w[4]=c[4]+p[4],w[5]=c[5]+p[5],w[6]=c[6]+p[6],w[8]=c[8]+p[8],w[9]=c[9]+p[9],w[10]=c[10]+p[10],w}function G(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h[4]=c[4],h[5]=c[5],h[6]=c[6],h[8]=c[8],h[9]=c[9],h[10]=c[10],h}const q=G;function V(c,p){return Math.abs(c[0]-p[0])<We&&Math.abs(c[1]-p[1])<We&&Math.abs(c[2]-p[2])<We&&Math.abs(c[4]-p[4])<We&&Math.abs(c[5]-p[5])<We&&Math.abs(c[6]-p[6])<We&&Math.abs(c[8]-p[8])<We&&Math.abs(c[9]-p[9])<We&&Math.abs(c[10]-p[10])<We}function Y(c,p){return c[0]===p[0]&&c[1]===p[1]&&c[2]===p[2]&&c[4]===p[4]&&c[5]===p[5]&&c[6]===p[6]&&c[8]===p[8]&&c[9]===p[9]&&c[10]===p[10]}function R(c){const p=c??new i(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function N(c,p){const h=p??new i(12);if(h===c){let g;return g=c[1],c[1]=c[4],c[4]=g,g=c[2],c[2]=c[8],c[8]=g,g=c[6],c[6]=c[9],c[9]=g,h}const w=c[0*4+0],C=c[0*4+1],U=c[0*4+2],A=c[1*4+0],o=c[1*4+1],v=c[1*4+2],f=c[2*4+0],b=c[2*4+1],d=c[2*4+2];return h[0]=w,h[1]=A,h[2]=f,h[4]=C,h[5]=o,h[6]=b,h[8]=U,h[9]=v,h[10]=d,h}function Z(c,p){const h=p??new i(12),w=c[0*4+0],C=c[0*4+1],U=c[0*4+2],A=c[1*4+0],o=c[1*4+1],v=c[1*4+2],f=c[2*4+0],b=c[2*4+1],d=c[2*4+2],g=d*o-v*b,T=-d*A+v*f,E=b*A-o*f,$=1/(w*g+C*T+U*E);return h[0]=g*$,h[1]=(-d*C+U*b)*$,h[2]=(v*C-U*o)*$,h[4]=T*$,h[5]=(d*w-U*f)*$,h[6]=(-v*w+U*A)*$,h[8]=E*$,h[9]=(-b*w+C*f)*$,h[10]=(o*w-C*A)*$,h}function O(c){const p=c[0],h=c[0*4+1],w=c[0*4+2],C=c[1*4+0],U=c[1*4+1],A=c[1*4+2],o=c[2*4+0],v=c[2*4+1],f=c[2*4+2];return p*(U*f-v*A)-C*(h*f-v*w)+o*(h*A-U*w)}const ee=Z;function K(c,p,h){const w=h??new i(12),C=c[0],U=c[1],A=c[2],o=c[4+0],v=c[4+1],f=c[4+2],b=c[8+0],d=c[8+1],g=c[8+2],T=p[0],E=p[1],$=p[2],L=p[4+0],j=p[4+1],re=p[4+2],ie=p[8+0],se=p[8+1],ve=p[8+2];return w[0]=C*T+o*E+b*$,w[1]=U*T+v*E+d*$,w[2]=A*T+f*E+g*$,w[4]=C*L+o*j+b*re,w[5]=U*L+v*j+d*re,w[6]=A*L+f*j+g*re,w[8]=C*ie+o*se+b*ve,w[9]=U*ie+v*se+d*ve,w[10]=A*ie+f*se+g*ve,w}const te=K;function le(c,p,h){const w=h??R();return c!==w&&(w[0]=c[0],w[1]=c[1],w[2]=c[2],w[4]=c[4],w[5]=c[5],w[6]=c[6]),w[8]=p[0],w[9]=p[1],w[10]=1,w}function ue(c,p){const h=p??s.create();return h[0]=c[8],h[1]=c[9],h}function de(c,p,h){const w=h??s.create(),C=p*4;return w[0]=c[C+0],w[1]=c[C+1],w}function Ee(c,p,h,w){const C=w===c?c:G(c,w),U=h*4;return C[U+0]=p[0],C[U+1]=p[1],C}function Te(c,p){const h=p??s.create(),w=c[0],C=c[1],U=c[4],A=c[5];return h[0]=Math.sqrt(w*w+C*C),h[1]=Math.sqrt(U*U+A*A),h}function Ue(c,p){const h=p??a.create(),w=c[0],C=c[1],U=c[2],A=c[4],o=c[5],v=c[6],f=c[8],b=c[9],d=c[10];return h[0]=Math.sqrt(w*w+C*C+U*U),h[1]=Math.sqrt(A*A+o*o+v*v),h[2]=Math.sqrt(f*f+b*b+d*d),h}function Ce(c,p){const h=p??new i(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=c[0],h[9]=c[1],h[10]=1,h}function pe(c,p,h){const w=h??new i(12),C=p[0],U=p[1],A=c[0],o=c[1],v=c[2],f=c[1*4+0],b=c[1*4+1],d=c[1*4+2],g=c[2*4+0],T=c[2*4+1],E=c[2*4+2];return c!==w&&(w[0]=A,w[1]=o,w[2]=v,w[4]=f,w[5]=b,w[6]=d),w[8]=A*C+f*U+g,w[9]=o*C+b*U+T,w[10]=v*C+d*U+E,w}function I(c,p){const h=p??new i(12),w=Math.cos(c),C=Math.sin(c);return h[0]=w,h[1]=C,h[2]=0,h[4]=-C,h[5]=w,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function ye(c,p,h){const w=h??new i(12),C=c[0*4+0],U=c[0*4+1],A=c[0*4+2],o=c[1*4+0],v=c[1*4+1],f=c[1*4+2],b=Math.cos(p),d=Math.sin(p);return w[0]=b*C+d*o,w[1]=b*U+d*v,w[2]=b*A+d*f,w[4]=b*o-d*C,w[5]=b*v-d*U,w[6]=b*f-d*A,c!==w&&(w[8]=c[8],w[9]=c[9],w[10]=c[10]),w}function we(c,p){const h=p??new i(12),w=Math.cos(c),C=Math.sin(c);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=w,h[6]=C,h[8]=0,h[9]=-C,h[10]=w,h}function _e(c,p,h){const w=h??new i(12),C=c[4],U=c[5],A=c[6],o=c[8],v=c[9],f=c[10],b=Math.cos(p),d=Math.sin(p);return w[4]=b*C+d*o,w[5]=b*U+d*v,w[6]=b*A+d*f,w[8]=b*o-d*C,w[9]=b*v-d*U,w[10]=b*f-d*A,c!==w&&(w[0]=c[0],w[1]=c[1],w[2]=c[2]),w}function be(c,p){const h=p??new i(12),w=Math.cos(c),C=Math.sin(c);return h[0]=w,h[1]=0,h[2]=-C,h[4]=0,h[5]=1,h[6]=0,h[8]=C,h[9]=0,h[10]=w,h}function ae(c,p,h){const w=h??new i(12),C=c[0*4+0],U=c[0*4+1],A=c[0*4+2],o=c[2*4+0],v=c[2*4+1],f=c[2*4+2],b=Math.cos(p),d=Math.sin(p);return w[0]=b*C-d*o,w[1]=b*U-d*v,w[2]=b*A-d*f,w[8]=b*o+d*C,w[9]=b*v+d*U,w[10]=b*f+d*A,c!==w&&(w[4]=c[4],w[5]=c[5],w[6]=c[6]),w}const Pe=I,Ie=ye;function Ae(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=0,h[2]=0,h[4]=0,h[5]=c[1],h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function De(c,p,h){const w=h??new i(12),C=p[0],U=p[1];return w[0]=C*c[0*4+0],w[1]=C*c[0*4+1],w[2]=C*c[0*4+2],w[4]=U*c[1*4+0],w[5]=U*c[1*4+1],w[6]=U*c[1*4+2],c!==w&&(w[8]=c[8],w[9]=c[9],w[10]=c[10]),w}function xe(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=0,h[2]=0,h[4]=0,h[5]=c[1],h[6]=0,h[8]=0,h[9]=0,h[10]=c[2],h}function fe(c,p,h){const w=h??new i(12),C=p[0],U=p[1],A=p[2];return w[0]=C*c[0*4+0],w[1]=C*c[0*4+1],w[2]=C*c[0*4+2],w[4]=U*c[1*4+0],w[5]=U*c[1*4+1],w[6]=U*c[1*4+2],w[8]=A*c[2*4+0],w[9]=A*c[2*4+1],w[10]=A*c[2*4+2],w}function Se(c,p){const h=p??new i(12);return h[0]=c,h[1]=0,h[2]=0,h[4]=0,h[5]=c,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function F(c,p,h){const w=h??new i(12);return w[0]=p*c[0*4+0],w[1]=p*c[0*4+1],w[2]=p*c[0*4+2],w[4]=p*c[1*4+0],w[5]=p*c[1*4+1],w[6]=p*c[1*4+2],c!==w&&(w[8]=c[8],w[9]=c[9],w[10]=c[10]),w}function J(c,p){const h=p??new i(12);return h[0]=c,h[1]=0,h[2]=0,h[4]=0,h[5]=c,h[6]=0,h[8]=0,h[9]=0,h[10]=c,h}function k(c,p,h){const w=h??new i(12);return w[0]=p*c[0*4+0],w[1]=p*c[0*4+1],w[2]=p*c[0*4+2],w[4]=p*c[1*4+0],w[5]=p*c[1*4+1],w[6]=p*c[1*4+2],w[8]=p*c[2*4+0],w[9]=p*c[2*4+1],w[10]=p*c[2*4+2],w}return{add:z,clone:q,copy:G,create:u,determinant:O,equals:Y,equalsApproximately:V,fromMat4:_,fromQuat:y,get3DScaling:Ue,getAxis:de,getScaling:Te,getTranslation:ue,identity:R,inverse:Z,invert:ee,mul:te,mulScalar:M,multiply:K,multiplyScalar:P,negate:x,rotate:ye,rotateX:_e,rotateY:ae,rotateZ:Ie,rotation:I,rotationX:we,rotationY:be,rotationZ:Pe,scale:De,scale3D:fe,scaling:Ae,scaling3D:xe,set:l,setAxis:Ee,setTranslation:le,translate:pe,translation:Ce,transpose:N,uniformScale:F,uniformScale3D:k,uniformScaling:Se,uniformScaling3D:J}}const da=new Map;function Ic(i){let s=da.get(i);return s||(s=zc(i),da.set(i,s)),s}function Fc(i){const s=_r(i);function a(o,v,f,b,d,g,T,E,$,L,j,re,ie,se,ve,Re){const Be=new i(16);return o!==void 0&&(Be[0]=o,v!==void 0&&(Be[1]=v,f!==void 0&&(Be[2]=f,b!==void 0&&(Be[3]=b,d!==void 0&&(Be[4]=d,g!==void 0&&(Be[5]=g,T!==void 0&&(Be[6]=T,E!==void 0&&(Be[7]=E,$!==void 0&&(Be[8]=$,L!==void 0&&(Be[9]=L,j!==void 0&&(Be[10]=j,re!==void 0&&(Be[11]=re,ie!==void 0&&(Be[12]=ie,se!==void 0&&(Be[13]=se,ve!==void 0&&(Be[14]=ve,Re!==void 0&&(Be[15]=Re)))))))))))))))),Be}function u(o,v,f,b,d,g,T,E,$,L,j,re,ie,se,ve,Re,Be){const ke=Be??new i(16);return ke[0]=o,ke[1]=v,ke[2]=f,ke[3]=b,ke[4]=d,ke[5]=g,ke[6]=T,ke[7]=E,ke[8]=$,ke[9]=L,ke[10]=j,ke[11]=re,ke[12]=ie,ke[13]=se,ke[14]=ve,ke[15]=Re,ke}function l(o,v){const f=v??new i(16);return f[0]=o[0],f[1]=o[1],f[2]=o[2],f[3]=0,f[4]=o[4],f[5]=o[5],f[6]=o[6],f[7]=0,f[8]=o[8],f[9]=o[9],f[10]=o[10],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function _(o,v){const f=v??new i(16),b=o[0],d=o[1],g=o[2],T=o[3],E=b+b,$=d+d,L=g+g,j=b*E,re=d*E,ie=d*$,se=g*E,ve=g*$,Re=g*L,Be=T*E,ke=T*$,$e=T*L;return f[0]=1-ie-Re,f[1]=re+$e,f[2]=se-ke,f[3]=0,f[4]=re-$e,f[5]=1-j-Re,f[6]=ve+Be,f[7]=0,f[8]=se+ke,f[9]=ve-Be,f[10]=1-j-ie,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function y(o,v){const f=v??new i(16);return f[0]=-o[0],f[1]=-o[1],f[2]=-o[2],f[3]=-o[3],f[4]=-o[4],f[5]=-o[5],f[6]=-o[6],f[7]=-o[7],f[8]=-o[8],f[9]=-o[9],f[10]=-o[10],f[11]=-o[11],f[12]=-o[12],f[13]=-o[13],f[14]=-o[14],f[15]=-o[15],f}function x(o,v,f){const b=f??new i(16);return b[0]=o[0]+v[0],b[1]=o[1]+v[1],b[2]=o[2]+v[2],b[3]=o[3]+v[3],b[4]=o[4]+v[4],b[5]=o[5]+v[5],b[6]=o[6]+v[6],b[7]=o[7]+v[7],b[8]=o[8]+v[8],b[9]=o[9]+v[9],b[10]=o[10]+v[10],b[11]=o[11]+v[11],b[12]=o[12]+v[12],b[13]=o[13]+v[13],b[14]=o[14]+v[14],b[15]=o[15]+v[15],b}function P(o,v,f){const b=f??new i(16);return b[0]=o[0]*v,b[1]=o[1]*v,b[2]=o[2]*v,b[3]=o[3]*v,b[4]=o[4]*v,b[5]=o[5]*v,b[6]=o[6]*v,b[7]=o[7]*v,b[8]=o[8]*v,b[9]=o[9]*v,b[10]=o[10]*v,b[11]=o[11]*v,b[12]=o[12]*v,b[13]=o[13]*v,b[14]=o[14]*v,b[15]=o[15]*v,b}const M=P;function z(o,v){const f=v??new i(16);return f[0]=o[0],f[1]=o[1],f[2]=o[2],f[3]=o[3],f[4]=o[4],f[5]=o[5],f[6]=o[6],f[7]=o[7],f[8]=o[8],f[9]=o[9],f[10]=o[10],f[11]=o[11],f[12]=o[12],f[13]=o[13],f[14]=o[14],f[15]=o[15],f}const G=z;function q(o,v){return Math.abs(o[0]-v[0])<We&&Math.abs(o[1]-v[1])<We&&Math.abs(o[2]-v[2])<We&&Math.abs(o[3]-v[3])<We&&Math.abs(o[4]-v[4])<We&&Math.abs(o[5]-v[5])<We&&Math.abs(o[6]-v[6])<We&&Math.abs(o[7]-v[7])<We&&Math.abs(o[8]-v[8])<We&&Math.abs(o[9]-v[9])<We&&Math.abs(o[10]-v[10])<We&&Math.abs(o[11]-v[11])<We&&Math.abs(o[12]-v[12])<We&&Math.abs(o[13]-v[13])<We&&Math.abs(o[14]-v[14])<We&&Math.abs(o[15]-v[15])<We}function V(o,v){return o[0]===v[0]&&o[1]===v[1]&&o[2]===v[2]&&o[3]===v[3]&&o[4]===v[4]&&o[5]===v[5]&&o[6]===v[6]&&o[7]===v[7]&&o[8]===v[8]&&o[9]===v[9]&&o[10]===v[10]&&o[11]===v[11]&&o[12]===v[12]&&o[13]===v[13]&&o[14]===v[14]&&o[15]===v[15]}function Y(o){const v=o??new i(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function R(o,v){const f=v??new i(16);if(f===o){let Ve;return Ve=o[1],o[1]=o[4],o[4]=Ve,Ve=o[2],o[2]=o[8],o[8]=Ve,Ve=o[3],o[3]=o[12],o[12]=Ve,Ve=o[6],o[6]=o[9],o[9]=Ve,Ve=o[7],o[7]=o[13],o[13]=Ve,Ve=o[11],o[11]=o[14],o[14]=Ve,f}const b=o[0*4+0],d=o[0*4+1],g=o[0*4+2],T=o[0*4+3],E=o[1*4+0],$=o[1*4+1],L=o[1*4+2],j=o[1*4+3],re=o[2*4+0],ie=o[2*4+1],se=o[2*4+2],ve=o[2*4+3],Re=o[3*4+0],Be=o[3*4+1],ke=o[3*4+2],$e=o[3*4+3];return f[0]=b,f[1]=E,f[2]=re,f[3]=Re,f[4]=d,f[5]=$,f[6]=ie,f[7]=Be,f[8]=g,f[9]=L,f[10]=se,f[11]=ke,f[12]=T,f[13]=j,f[14]=ve,f[15]=$e,f}function N(o,v){const f=v??new i(16),b=o[0*4+0],d=o[0*4+1],g=o[0*4+2],T=o[0*4+3],E=o[1*4+0],$=o[1*4+1],L=o[1*4+2],j=o[1*4+3],re=o[2*4+0],ie=o[2*4+1],se=o[2*4+2],ve=o[2*4+3],Re=o[3*4+0],Be=o[3*4+1],ke=o[3*4+2],$e=o[3*4+3],Ve=se*$e,rt=ke*ve,ut=L*$e,Ne=ke*j,it=L*ve,Je=se*j,et=g*$e,tt=ke*T,Xe=g*ve,pt=se*T,ht=g*j,nt=L*T,at=re*Be,lt=Re*ie,dt=E*Be,Ze=Re*$,je=E*ie,Tt=re*$,vt=b*Be,Rt=Re*d,wt=b*ie,Pt=re*d,Vt=b*$,It=E*d,Kt=Ve*$+Ne*ie+it*Be-(rt*$+ut*ie+Je*Be),Ut=rt*d+et*ie+pt*Be-(Ve*d+tt*ie+Xe*Be),Jt=ut*d+tt*$+ht*Be-(Ne*d+et*$+nt*Be),Dt=Je*d+Xe*$+nt*ie-(it*d+pt*$+ht*ie),Qe=1/(b*Kt+E*Ut+re*Jt+Re*Dt);return f[0]=Qe*Kt,f[1]=Qe*Ut,f[2]=Qe*Jt,f[3]=Qe*Dt,f[4]=Qe*(rt*E+ut*re+Je*Re-(Ve*E+Ne*re+it*Re)),f[5]=Qe*(Ve*b+tt*re+Xe*Re-(rt*b+et*re+pt*Re)),f[6]=Qe*(Ne*b+et*E+nt*Re-(ut*b+tt*E+ht*Re)),f[7]=Qe*(it*b+pt*E+ht*re-(Je*b+Xe*E+nt*re)),f[8]=Qe*(at*j+Ze*ve+je*$e-(lt*j+dt*ve+Tt*$e)),f[9]=Qe*(lt*T+vt*ve+Pt*$e-(at*T+Rt*ve+wt*$e)),f[10]=Qe*(dt*T+Rt*j+Vt*$e-(Ze*T+vt*j+It*$e)),f[11]=Qe*(Tt*T+wt*j+It*ve-(je*T+Pt*j+Vt*ve)),f[12]=Qe*(dt*se+Tt*ke+lt*L-(je*ke+at*L+Ze*se)),f[13]=Qe*(wt*ke+at*g+Rt*se-(vt*se+Pt*ke+lt*g)),f[14]=Qe*(vt*L+It*ke+Ze*g-(Vt*ke+dt*g+Rt*L)),f[15]=Qe*(Vt*se+je*g+Pt*L-(wt*L+It*se+Tt*g)),f}function Z(o){const v=o[0],f=o[0*4+1],b=o[0*4+2],d=o[0*4+3],g=o[1*4+0],T=o[1*4+1],E=o[1*4+2],$=o[1*4+3],L=o[2*4+0],j=o[2*4+1],re=o[2*4+2],ie=o[2*4+3],se=o[3*4+0],ve=o[3*4+1],Re=o[3*4+2],Be=o[3*4+3],ke=re*Be,$e=Re*ie,Ve=E*Be,rt=Re*$,ut=E*ie,Ne=re*$,it=b*Be,Je=Re*d,et=b*ie,tt=re*d,Xe=b*$,pt=E*d,ht=ke*T+rt*j+ut*ve-($e*T+Ve*j+Ne*ve),nt=$e*f+it*j+tt*ve-(ke*f+Je*j+et*ve),at=Ve*f+Je*T+Xe*ve-(rt*f+it*T+pt*ve),lt=Ne*f+et*T+pt*j-(ut*f+tt*T+Xe*j);return v*ht+g*nt+L*at+se*lt}const O=N;function ee(o,v,f){const b=f??new i(16),d=o[0],g=o[1],T=o[2],E=o[3],$=o[4+0],L=o[4+1],j=o[4+2],re=o[4+3],ie=o[8+0],se=o[8+1],ve=o[8+2],Re=o[8+3],Be=o[12+0],ke=o[12+1],$e=o[12+2],Ve=o[12+3],rt=v[0],ut=v[1],Ne=v[2],it=v[3],Je=v[4+0],et=v[4+1],tt=v[4+2],Xe=v[4+3],pt=v[8+0],ht=v[8+1],nt=v[8+2],at=v[8+3],lt=v[12+0],dt=v[12+1],Ze=v[12+2],je=v[12+3];return b[0]=d*rt+$*ut+ie*Ne+Be*it,b[1]=g*rt+L*ut+se*Ne+ke*it,b[2]=T*rt+j*ut+ve*Ne+$e*it,b[3]=E*rt+re*ut+Re*Ne+Ve*it,b[4]=d*Je+$*et+ie*tt+Be*Xe,b[5]=g*Je+L*et+se*tt+ke*Xe,b[6]=T*Je+j*et+ve*tt+$e*Xe,b[7]=E*Je+re*et+Re*tt+Ve*Xe,b[8]=d*pt+$*ht+ie*nt+Be*at,b[9]=g*pt+L*ht+se*nt+ke*at,b[10]=T*pt+j*ht+ve*nt+$e*at,b[11]=E*pt+re*ht+Re*nt+Ve*at,b[12]=d*lt+$*dt+ie*Ze+Be*je,b[13]=g*lt+L*dt+se*Ze+ke*je,b[14]=T*lt+j*dt+ve*Ze+$e*je,b[15]=E*lt+re*dt+Re*Ze+Ve*je,b}const K=ee;function te(o,v,f){const b=f??Y();return o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[3]=o[3],b[4]=o[4],b[5]=o[5],b[6]=o[6],b[7]=o[7],b[8]=o[8],b[9]=o[9],b[10]=o[10],b[11]=o[11]),b[12]=v[0],b[13]=v[1],b[14]=v[2],b[15]=1,b}function le(o,v){const f=v??s.create();return f[0]=o[12],f[1]=o[13],f[2]=o[14],f}function ue(o,v,f){const b=f??s.create(),d=v*4;return b[0]=o[d+0],b[1]=o[d+1],b[2]=o[d+2],b}function de(o,v,f,b){const d=b===o?b:z(o,b),g=f*4;return d[g+0]=v[0],d[g+1]=v[1],d[g+2]=v[2],d}function Ee(o,v){const f=v??s.create(),b=o[0],d=o[1],g=o[2],T=o[4],E=o[5],$=o[6],L=o[8],j=o[9],re=o[10];return f[0]=Math.sqrt(b*b+d*d+g*g),f[1]=Math.sqrt(T*T+E*E+$*$),f[2]=Math.sqrt(L*L+j*j+re*re),f}function Te(o,v,f,b,d){const g=d??new i(16),T=Math.tan(Math.PI*.5-.5*o);if(g[0]=T/v,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=T,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,Number.isFinite(b)){const E=1/(f-b);g[10]=b*E,g[14]=b*f*E}else g[10]=-1,g[14]=-f;return g}function Ue(o,v,f,b=1/0,d){const g=d??new i(16),T=1/Math.tan(o*.5);if(g[0]=T/v,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=T,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,b===1/0)g[10]=0,g[14]=f;else{const E=1/(b-f);g[10]=f*E,g[14]=b*f*E}return g}function Ce(o,v,f,b,d,g,T){const E=T??new i(16);return E[0]=2/(v-o),E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2/(b-f),E[6]=0,E[7]=0,E[8]=0,E[9]=0,E[10]=1/(d-g),E[11]=0,E[12]=(v+o)/(o-v),E[13]=(b+f)/(f-b),E[14]=d/(d-g),E[15]=1,E}function pe(o,v,f,b,d,g,T){const E=T??new i(16),$=v-o,L=b-f,j=d-g;return E[0]=2*d/$,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2*d/L,E[6]=0,E[7]=0,E[8]=(o+v)/$,E[9]=(b+f)/L,E[10]=g/j,E[11]=-1,E[12]=0,E[13]=0,E[14]=d*g/j,E[15]=0,E}function I(o,v,f,b,d,g=1/0,T){const E=T??new i(16),$=v-o,L=b-f;if(E[0]=2*d/$,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2*d/L,E[6]=0,E[7]=0,E[8]=(o+v)/$,E[9]=(b+f)/L,E[11]=-1,E[12]=0,E[13]=0,E[15]=0,g===1/0)E[10]=0,E[14]=d;else{const j=1/(g-d);E[10]=d*j,E[14]=g*d*j}return E}const ye=s.create(),we=s.create(),_e=s.create();function be(o,v,f,b){const d=b??new i(16);return s.normalize(s.subtract(v,o,_e),_e),s.normalize(s.cross(f,_e,ye),ye),s.normalize(s.cross(_e,ye,we),we),d[0]=ye[0],d[1]=ye[1],d[2]=ye[2],d[3]=0,d[4]=we[0],d[5]=we[1],d[6]=we[2],d[7]=0,d[8]=_e[0],d[9]=_e[1],d[10]=_e[2],d[11]=0,d[12]=o[0],d[13]=o[1],d[14]=o[2],d[15]=1,d}function ae(o,v,f,b){const d=b??new i(16);return s.normalize(s.subtract(o,v,_e),_e),s.normalize(s.cross(f,_e,ye),ye),s.normalize(s.cross(_e,ye,we),we),d[0]=ye[0],d[1]=ye[1],d[2]=ye[2],d[3]=0,d[4]=we[0],d[5]=we[1],d[6]=we[2],d[7]=0,d[8]=_e[0],d[9]=_e[1],d[10]=_e[2],d[11]=0,d[12]=o[0],d[13]=o[1],d[14]=o[2],d[15]=1,d}function Pe(o,v,f,b){const d=b??new i(16);return s.normalize(s.subtract(o,v,_e),_e),s.normalize(s.cross(f,_e,ye),ye),s.normalize(s.cross(_e,ye,we),we),d[0]=ye[0],d[1]=we[0],d[2]=_e[0],d[3]=0,d[4]=ye[1],d[5]=we[1],d[6]=_e[1],d[7]=0,d[8]=ye[2],d[9]=we[2],d[10]=_e[2],d[11]=0,d[12]=-(ye[0]*o[0]+ye[1]*o[1]+ye[2]*o[2]),d[13]=-(we[0]*o[0]+we[1]*o[1]+we[2]*o[2]),d[14]=-(_e[0]*o[0]+_e[1]*o[1]+_e[2]*o[2]),d[15]=1,d}function Ie(o,v){const f=v??new i(16);return f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=o[0],f[13]=o[1],f[14]=o[2],f[15]=1,f}function Ae(o,v,f){const b=f??new i(16),d=v[0],g=v[1],T=v[2],E=o[0],$=o[1],L=o[2],j=o[3],re=o[1*4+0],ie=o[1*4+1],se=o[1*4+2],ve=o[1*4+3],Re=o[2*4+0],Be=o[2*4+1],ke=o[2*4+2],$e=o[2*4+3],Ve=o[3*4+0],rt=o[3*4+1],ut=o[3*4+2],Ne=o[3*4+3];return o!==b&&(b[0]=E,b[1]=$,b[2]=L,b[3]=j,b[4]=re,b[5]=ie,b[6]=se,b[7]=ve,b[8]=Re,b[9]=Be,b[10]=ke,b[11]=$e),b[12]=E*d+re*g+Re*T+Ve,b[13]=$*d+ie*g+Be*T+rt,b[14]=L*d+se*g+ke*T+ut,b[15]=j*d+ve*g+$e*T+Ne,b}function De(o,v){const f=v??new i(16),b=Math.cos(o),d=Math.sin(o);return f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=b,f[6]=d,f[7]=0,f[8]=0,f[9]=-d,f[10]=b,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function xe(o,v,f){const b=f??new i(16),d=o[4],g=o[5],T=o[6],E=o[7],$=o[8],L=o[9],j=o[10],re=o[11],ie=Math.cos(v),se=Math.sin(v);return b[4]=ie*d+se*$,b[5]=ie*g+se*L,b[6]=ie*T+se*j,b[7]=ie*E+se*re,b[8]=ie*$-se*d,b[9]=ie*L-se*g,b[10]=ie*j-se*T,b[11]=ie*re-se*E,o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[3]=o[3],b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function fe(o,v){const f=v??new i(16),b=Math.cos(o),d=Math.sin(o);return f[0]=b,f[1]=0,f[2]=-d,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=d,f[9]=0,f[10]=b,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function Se(o,v,f){const b=f??new i(16),d=o[0*4+0],g=o[0*4+1],T=o[0*4+2],E=o[0*4+3],$=o[2*4+0],L=o[2*4+1],j=o[2*4+2],re=o[2*4+3],ie=Math.cos(v),se=Math.sin(v);return b[0]=ie*d-se*$,b[1]=ie*g-se*L,b[2]=ie*T-se*j,b[3]=ie*E-se*re,b[8]=ie*$+se*d,b[9]=ie*L+se*g,b[10]=ie*j+se*T,b[11]=ie*re+se*E,o!==b&&(b[4]=o[4],b[5]=o[5],b[6]=o[6],b[7]=o[7],b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function F(o,v){const f=v??new i(16),b=Math.cos(o),d=Math.sin(o);return f[0]=b,f[1]=d,f[2]=0,f[3]=0,f[4]=-d,f[5]=b,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function J(o,v,f){const b=f??new i(16),d=o[0*4+0],g=o[0*4+1],T=o[0*4+2],E=o[0*4+3],$=o[1*4+0],L=o[1*4+1],j=o[1*4+2],re=o[1*4+3],ie=Math.cos(v),se=Math.sin(v);return b[0]=ie*d+se*$,b[1]=ie*g+se*L,b[2]=ie*T+se*j,b[3]=ie*E+se*re,b[4]=ie*$-se*d,b[5]=ie*L-se*g,b[6]=ie*j-se*T,b[7]=ie*re-se*E,o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10],b[11]=o[11],b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function k(o,v,f){const b=f??new i(16);let d=o[0],g=o[1],T=o[2];const E=Math.sqrt(d*d+g*g+T*T);d/=E,g/=E,T/=E;const $=d*d,L=g*g,j=T*T,re=Math.cos(v),ie=Math.sin(v),se=1-re;return b[0]=$+(1-$)*re,b[1]=d*g*se+T*ie,b[2]=d*T*se-g*ie,b[3]=0,b[4]=d*g*se-T*ie,b[5]=L+(1-L)*re,b[6]=g*T*se+d*ie,b[7]=0,b[8]=d*T*se+g*ie,b[9]=g*T*se-d*ie,b[10]=j+(1-j)*re,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}const c=k;function p(o,v,f,b){const d=b??new i(16);let g=v[0],T=v[1],E=v[2];const $=Math.sqrt(g*g+T*T+E*E);g/=$,T/=$,E/=$;const L=g*g,j=T*T,re=E*E,ie=Math.cos(f),se=Math.sin(f),ve=1-ie,Re=L+(1-L)*ie,Be=g*T*ve+E*se,ke=g*E*ve-T*se,$e=g*T*ve-E*se,Ve=j+(1-j)*ie,rt=T*E*ve+g*se,ut=g*E*ve+T*se,Ne=T*E*ve-g*se,it=re+(1-re)*ie,Je=o[0],et=o[1],tt=o[2],Xe=o[3],pt=o[4],ht=o[5],nt=o[6],at=o[7],lt=o[8],dt=o[9],Ze=o[10],je=o[11];return d[0]=Re*Je+Be*pt+ke*lt,d[1]=Re*et+Be*ht+ke*dt,d[2]=Re*tt+Be*nt+ke*Ze,d[3]=Re*Xe+Be*at+ke*je,d[4]=$e*Je+Ve*pt+rt*lt,d[5]=$e*et+Ve*ht+rt*dt,d[6]=$e*tt+Ve*nt+rt*Ze,d[7]=$e*Xe+Ve*at+rt*je,d[8]=ut*Je+Ne*pt+it*lt,d[9]=ut*et+Ne*ht+it*dt,d[10]=ut*tt+Ne*nt+it*Ze,d[11]=ut*Xe+Ne*at+it*je,o!==d&&(d[12]=o[12],d[13]=o[13],d[14]=o[14],d[15]=o[15]),d}const h=p;function w(o,v){const f=v??new i(16);return f[0]=o[0],f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=o[1],f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=o[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function C(o,v,f){const b=f??new i(16),d=v[0],g=v[1],T=v[2];return b[0]=d*o[0*4+0],b[1]=d*o[0*4+1],b[2]=d*o[0*4+2],b[3]=d*o[0*4+3],b[4]=g*o[1*4+0],b[5]=g*o[1*4+1],b[6]=g*o[1*4+2],b[7]=g*o[1*4+3],b[8]=T*o[2*4+0],b[9]=T*o[2*4+1],b[10]=T*o[2*4+2],b[11]=T*o[2*4+3],o!==b&&(b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function U(o,v){const f=v??new i(16);return f[0]=o,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=o,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=o,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function A(o,v,f){const b=f??new i(16);return b[0]=v*o[0*4+0],b[1]=v*o[0*4+1],b[2]=v*o[0*4+2],b[3]=v*o[0*4+3],b[4]=v*o[1*4+0],b[5]=v*o[1*4+1],b[6]=v*o[1*4+2],b[7]=v*o[1*4+3],b[8]=v*o[2*4+0],b[9]=v*o[2*4+1],b[10]=v*o[2*4+2],b[11]=v*o[2*4+3],o!==b&&(b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}return{add:x,aim:be,axisRotate:p,axisRotation:k,cameraAim:ae,clone:G,copy:z,create:a,determinant:Z,equals:V,equalsApproximately:q,fromMat3:l,fromQuat:_,frustum:pe,frustumReverseZ:I,getAxis:ue,getScaling:Ee,getTranslation:le,identity:Y,inverse:N,invert:O,lookAt:Pe,mul:K,mulScalar:M,multiply:ee,multiplyScalar:P,negate:y,ortho:Ce,perspective:Te,perspectiveReverseZ:Ue,rotate:h,rotateX:xe,rotateY:Se,rotateZ:J,rotation:c,rotationX:De,rotationY:fe,rotationZ:F,scale:C,scaling:w,set:u,setAxis:de,setTranslation:te,translate:Ae,translation:Ie,transpose:R,uniformScale:A,uniformScaling:U}}const pa=new Map;function Oc(i){let s=pa.get(i);return s||(s=Fc(i),pa.set(i,s)),s}function Vc(i){const s=_r(i);function a(F,J,k,c){const p=new i(4);return F!==void 0&&(p[0]=F,J!==void 0&&(p[1]=J,k!==void 0&&(p[2]=k,c!==void 0&&(p[3]=c)))),p}const u=a;function l(F,J,k,c,p){const h=p??new i(4);return h[0]=F,h[1]=J,h[2]=k,h[3]=c,h}function _(F,J,k){const c=k??new i(4),p=J*.5,h=Math.sin(p);return c[0]=h*F[0],c[1]=h*F[1],c[2]=h*F[2],c[3]=Math.cos(p),c}function y(F,J){const k=J??s.create(3),c=Math.acos(F[3])*2,p=Math.sin(c*.5);return p>We?(k[0]=F[0]/p,k[1]=F[1]/p,k[2]=F[2]/p):(k[0]=1,k[1]=0,k[2]=0),{angle:c,axis:k}}function x(F,J){const k=Te(F,J);return Math.acos(2*k*k-1)}function P(F,J,k){const c=k??new i(4),p=F[0],h=F[1],w=F[2],C=F[3],U=J[0],A=J[1],o=J[2],v=J[3];return c[0]=p*v+C*U+h*o-w*A,c[1]=h*v+C*A+w*U-p*o,c[2]=w*v+C*o+p*A-h*U,c[3]=C*v-p*U-h*A-w*o,c}const M=P;function z(F,J,k){const c=k??new i(4),p=J*.5,h=F[0],w=F[1],C=F[2],U=F[3],A=Math.sin(p),o=Math.cos(p);return c[0]=h*o+U*A,c[1]=w*o+C*A,c[2]=C*o-w*A,c[3]=U*o-h*A,c}function G(F,J,k){const c=k??new i(4),p=J*.5,h=F[0],w=F[1],C=F[2],U=F[3],A=Math.sin(p),o=Math.cos(p);return c[0]=h*o-C*A,c[1]=w*o+U*A,c[2]=C*o+h*A,c[3]=U*o-w*A,c}function q(F,J,k){const c=k??new i(4),p=J*.5,h=F[0],w=F[1],C=F[2],U=F[3],A=Math.sin(p),o=Math.cos(p);return c[0]=h*o+w*A,c[1]=w*o-h*A,c[2]=C*o+U*A,c[3]=U*o-C*A,c}function V(F,J,k,c){const p=c??new i(4),h=F[0],w=F[1],C=F[2],U=F[3];let A=J[0],o=J[1],v=J[2],f=J[3],b=h*A+w*o+C*v+U*f;b<0&&(b=-b,A=-A,o=-o,v=-v,f=-f);let d,g;if(1-b>We){const T=Math.acos(b),E=Math.sin(T);d=Math.sin((1-k)*T)/E,g=Math.sin(k*T)/E}else d=1-k,g=k;return p[0]=d*h+g*A,p[1]=d*w+g*o,p[2]=d*C+g*v,p[3]=d*U+g*f,p}function Y(F,J){const k=J??new i(4),c=F[0],p=F[1],h=F[2],w=F[3],C=c*c+p*p+h*h+w*w,U=C?1/C:0;return k[0]=-c*U,k[1]=-p*U,k[2]=-h*U,k[3]=w*U,k}function R(F,J){const k=J??new i(4);return k[0]=-F[0],k[1]=-F[1],k[2]=-F[2],k[3]=F[3],k}function N(F,J){const k=J??new i(4),c=F[0]+F[5]+F[10];if(c>0){const p=Math.sqrt(c+1);k[3]=.5*p;const h=.5/p;k[0]=(F[6]-F[9])*h,k[1]=(F[8]-F[2])*h,k[2]=(F[1]-F[4])*h}else{let p=0;F[5]>F[0]&&(p=1),F[10]>F[p*4+p]&&(p=2);const h=(p+1)%3,w=(p+2)%3,C=Math.sqrt(F[p*4+p]-F[h*4+h]-F[w*4+w]+1);k[p]=.5*C;const U=.5/C;k[3]=(F[h*4+w]-F[w*4+h])*U,k[h]=(F[h*4+p]+F[p*4+h])*U,k[w]=(F[w*4+p]+F[p*4+w])*U}return k}function Z(F,J,k,c,p){const h=p??new i(4),w=F*.5,C=J*.5,U=k*.5,A=Math.sin(w),o=Math.cos(w),v=Math.sin(C),f=Math.cos(C),b=Math.sin(U),d=Math.cos(U);switch(c){case"xyz":h[0]=A*f*d+o*v*b,h[1]=o*v*d-A*f*b,h[2]=o*f*b+A*v*d,h[3]=o*f*d-A*v*b;break;case"xzy":h[0]=A*f*d-o*v*b,h[1]=o*v*d-A*f*b,h[2]=o*f*b+A*v*d,h[3]=o*f*d+A*v*b;break;case"yxz":h[0]=A*f*d+o*v*b,h[1]=o*v*d-A*f*b,h[2]=o*f*b-A*v*d,h[3]=o*f*d+A*v*b;break;case"yzx":h[0]=A*f*d+o*v*b,h[1]=o*v*d+A*f*b,h[2]=o*f*b-A*v*d,h[3]=o*f*d-A*v*b;break;case"zxy":h[0]=A*f*d-o*v*b,h[1]=o*v*d+A*f*b,h[2]=o*f*b+A*v*d,h[3]=o*f*d-A*v*b;break;case"zyx":h[0]=A*f*d-o*v*b,h[1]=o*v*d+A*f*b,h[2]=o*f*b-A*v*d,h[3]=o*f*d+A*v*b;break;default:throw new Error(`Unknown rotation order: ${c}`)}return h}function O(F,J){const k=J??new i(4);return k[0]=F[0],k[1]=F[1],k[2]=F[2],k[3]=F[3],k}const ee=O;function K(F,J,k){const c=k??new i(4);return c[0]=F[0]+J[0],c[1]=F[1]+J[1],c[2]=F[2]+J[2],c[3]=F[3]+J[3],c}function te(F,J,k){const c=k??new i(4);return c[0]=F[0]-J[0],c[1]=F[1]-J[1],c[2]=F[2]-J[2],c[3]=F[3]-J[3],c}const le=te;function ue(F,J,k){const c=k??new i(4);return c[0]=F[0]*J,c[1]=F[1]*J,c[2]=F[2]*J,c[3]=F[3]*J,c}const de=ue;function Ee(F,J,k){const c=k??new i(4);return c[0]=F[0]/J,c[1]=F[1]/J,c[2]=F[2]/J,c[3]=F[3]/J,c}function Te(F,J){return F[0]*J[0]+F[1]*J[1]+F[2]*J[2]+F[3]*J[3]}function Ue(F,J,k,c){const p=c??new i(4);return p[0]=F[0]+k*(J[0]-F[0]),p[1]=F[1]+k*(J[1]-F[1]),p[2]=F[2]+k*(J[2]-F[2]),p[3]=F[3]+k*(J[3]-F[3]),p}function Ce(F){const J=F[0],k=F[1],c=F[2],p=F[3];return Math.sqrt(J*J+k*k+c*c+p*p)}const pe=Ce;function I(F){const J=F[0],k=F[1],c=F[2],p=F[3];return J*J+k*k+c*c+p*p}const ye=I;function we(F,J){const k=J??new i(4),c=F[0],p=F[1],h=F[2],w=F[3],C=Math.sqrt(c*c+p*p+h*h+w*w);return C>1e-5?(k[0]=c/C,k[1]=p/C,k[2]=h/C,k[3]=w/C):(k[0]=0,k[1]=0,k[2]=0,k[3]=1),k}function _e(F,J){return Math.abs(F[0]-J[0])<We&&Math.abs(F[1]-J[1])<We&&Math.abs(F[2]-J[2])<We&&Math.abs(F[3]-J[3])<We}function be(F,J){return F[0]===J[0]&&F[1]===J[1]&&F[2]===J[2]&&F[3]===J[3]}function ae(F){const J=F??new i(4);return J[0]=0,J[1]=0,J[2]=0,J[3]=1,J}const Pe=s.create(),Ie=s.create(),Ae=s.create();function De(F,J,k){const c=k??new i(4),p=s.dot(F,J);return p<-.999999?(s.cross(Ie,F,Pe),s.len(Pe)<1e-6&&s.cross(Ae,F,Pe),s.normalize(Pe,Pe),_(Pe,Math.PI,c),c):p>.999999?(c[0]=0,c[1]=0,c[2]=0,c[3]=1,c):(s.cross(F,J,Pe),c[0]=Pe[0],c[1]=Pe[1],c[2]=Pe[2],c[3]=1+p,we(c,c))}const xe=new i(4),fe=new i(4);function Se(F,J,k,c,p,h){const w=h??new i(4);return V(F,c,p,xe),V(J,k,p,fe),V(xe,fe,2*p*(1-p),w),w}return{create:a,fromValues:u,set:l,fromAxisAngle:_,toAxisAngle:y,angle:x,multiply:P,mul:M,rotateX:z,rotateY:G,rotateZ:q,slerp:V,inverse:Y,conjugate:R,fromMat:N,fromEuler:Z,copy:O,clone:ee,add:K,subtract:te,sub:le,mulScalar:ue,scale:de,divScalar:Ee,dot:Te,lerp:Ue,length:Ce,len:pe,lengthSq:I,lenSq:ye,normalize:we,equalsApproximately:_e,equals:be,identity:ae,rotationTo:De,sqlerp:Se}}const ha=new Map;function $c(i){let s=ha.get(i);return s||(s=Vc(i),ha.set(i,s)),s}function Nc(i){function s(k,c,p,h){const w=new i(4);return k!==void 0&&(w[0]=k,c!==void 0&&(w[1]=c,p!==void 0&&(w[2]=p,h!==void 0&&(w[3]=h)))),w}const a=s;function u(k,c,p,h,w){const C=w??new i(4);return C[0]=k,C[1]=c,C[2]=p,C[3]=h,C}function l(k,c){const p=c??new i(4);return p[0]=Math.ceil(k[0]),p[1]=Math.ceil(k[1]),p[2]=Math.ceil(k[2]),p[3]=Math.ceil(k[3]),p}function _(k,c){const p=c??new i(4);return p[0]=Math.floor(k[0]),p[1]=Math.floor(k[1]),p[2]=Math.floor(k[2]),p[3]=Math.floor(k[3]),p}function y(k,c){const p=c??new i(4);return p[0]=Math.round(k[0]),p[1]=Math.round(k[1]),p[2]=Math.round(k[2]),p[3]=Math.round(k[3]),p}function x(k,c=0,p=1,h){const w=h??new i(4);return w[0]=Math.min(p,Math.max(c,k[0])),w[1]=Math.min(p,Math.max(c,k[1])),w[2]=Math.min(p,Math.max(c,k[2])),w[3]=Math.min(p,Math.max(c,k[3])),w}function P(k,c,p){const h=p??new i(4);return h[0]=k[0]+c[0],h[1]=k[1]+c[1],h[2]=k[2]+c[2],h[3]=k[3]+c[3],h}function M(k,c,p,h){const w=h??new i(4);return w[0]=k[0]+c[0]*p,w[1]=k[1]+c[1]*p,w[2]=k[2]+c[2]*p,w[3]=k[3]+c[3]*p,w}function z(k,c,p){const h=p??new i(4);return h[0]=k[0]-c[0],h[1]=k[1]-c[1],h[2]=k[2]-c[2],h[3]=k[3]-c[3],h}const G=z;function q(k,c){return Math.abs(k[0]-c[0])<We&&Math.abs(k[1]-c[1])<We&&Math.abs(k[2]-c[2])<We&&Math.abs(k[3]-c[3])<We}function V(k,c){return k[0]===c[0]&&k[1]===c[1]&&k[2]===c[2]&&k[3]===c[3]}function Y(k,c,p,h){const w=h??new i(4);return w[0]=k[0]+p*(c[0]-k[0]),w[1]=k[1]+p*(c[1]-k[1]),w[2]=k[2]+p*(c[2]-k[2]),w[3]=k[3]+p*(c[3]-k[3]),w}function R(k,c,p,h){const w=h??new i(4);return w[0]=k[0]+p[0]*(c[0]-k[0]),w[1]=k[1]+p[1]*(c[1]-k[1]),w[2]=k[2]+p[2]*(c[2]-k[2]),w[3]=k[3]+p[3]*(c[3]-k[3]),w}function N(k,c,p){const h=p??new i(4);return h[0]=Math.max(k[0],c[0]),h[1]=Math.max(k[1],c[1]),h[2]=Math.max(k[2],c[2]),h[3]=Math.max(k[3],c[3]),h}function Z(k,c,p){const h=p??new i(4);return h[0]=Math.min(k[0],c[0]),h[1]=Math.min(k[1],c[1]),h[2]=Math.min(k[2],c[2]),h[3]=Math.min(k[3],c[3]),h}function O(k,c,p){const h=p??new i(4);return h[0]=k[0]*c,h[1]=k[1]*c,h[2]=k[2]*c,h[3]=k[3]*c,h}const ee=O;function K(k,c,p){const h=p??new i(4);return h[0]=k[0]/c,h[1]=k[1]/c,h[2]=k[2]/c,h[3]=k[3]/c,h}function te(k,c){const p=c??new i(4);return p[0]=1/k[0],p[1]=1/k[1],p[2]=1/k[2],p[3]=1/k[3],p}const le=te;function ue(k,c){return k[0]*c[0]+k[1]*c[1]+k[2]*c[2]+k[3]*c[3]}function de(k){const c=k[0],p=k[1],h=k[2],w=k[3];return Math.sqrt(c*c+p*p+h*h+w*w)}const Ee=de;function Te(k){const c=k[0],p=k[1],h=k[2],w=k[3];return c*c+p*p+h*h+w*w}const Ue=Te;function Ce(k,c){const p=k[0]-c[0],h=k[1]-c[1],w=k[2]-c[2],C=k[3]-c[3];return Math.sqrt(p*p+h*h+w*w+C*C)}const pe=Ce;function I(k,c){const p=k[0]-c[0],h=k[1]-c[1],w=k[2]-c[2],C=k[3]-c[3];return p*p+h*h+w*w+C*C}const ye=I;function we(k,c){const p=c??new i(4),h=k[0],w=k[1],C=k[2],U=k[3],A=Math.sqrt(h*h+w*w+C*C+U*U);return A>1e-5?(p[0]=h/A,p[1]=w/A,p[2]=C/A,p[3]=U/A):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function _e(k,c){const p=c??new i(4);return p[0]=-k[0],p[1]=-k[1],p[2]=-k[2],p[3]=-k[3],p}function be(k,c){const p=c??new i(4);return p[0]=k[0],p[1]=k[1],p[2]=k[2],p[3]=k[3],p}const ae=be;function Pe(k,c,p){const h=p??new i(4);return h[0]=k[0]*c[0],h[1]=k[1]*c[1],h[2]=k[2]*c[2],h[3]=k[3]*c[3],h}const Ie=Pe;function Ae(k,c,p){const h=p??new i(4);return h[0]=k[0]/c[0],h[1]=k[1]/c[1],h[2]=k[2]/c[2],h[3]=k[3]/c[3],h}const De=Ae;function xe(k){const c=k??new i(4);return c[0]=0,c[1]=0,c[2]=0,c[3]=0,c}function fe(k,c,p){const h=p??new i(4),w=k[0],C=k[1],U=k[2],A=k[3];return h[0]=c[0]*w+c[4]*C+c[8]*U+c[12]*A,h[1]=c[1]*w+c[5]*C+c[9]*U+c[13]*A,h[2]=c[2]*w+c[6]*C+c[10]*U+c[14]*A,h[3]=c[3]*w+c[7]*C+c[11]*U+c[15]*A,h}function Se(k,c,p){const h=p??new i(4);return we(k,h),O(h,c,h)}function F(k,c,p){const h=p??new i(4);return de(k)>c?Se(k,c,h):be(k,h)}function J(k,c,p){const h=p??new i(4);return Y(k,c,.5,h)}return{create:s,fromValues:a,set:u,ceil:l,floor:_,round:y,clamp:x,add:P,addScaled:M,subtract:z,sub:G,equalsApproximately:q,equals:V,lerp:Y,lerpV:R,max:N,min:Z,mulScalar:O,scale:ee,divScalar:K,inverse:te,invert:le,dot:ue,length:de,len:Ee,lengthSq:Te,lenSq:Ue,distance:Ce,dist:pe,distanceSq:I,distSq:ye,normalize:we,negate:_e,copy:be,clone:ae,multiply:Pe,mul:Ie,divide:Ae,div:De,zero:xe,transformMat4:fe,setLength:Se,truncate:F,midpoint:J}}const fa=new Map;function qc(i){let s=fa.get(i);return s||(s=Nc(i),fa.set(i,s)),s}function pi(i,s,a,u,l,_){return{mat3:Ic(i),mat4:Oc(s),quat:$c(a),vec2:Ka(u),vec3:_r(l),vec4:qc(_)}}const{mat3:At,mat4:yt,quat:mt,vec2:_a,vec3:X,vec4:Md}=pi(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);pi(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);pi(Dc,Array,Array,Array,Array,Array);const Wc=(()=>{try{return new URLSearchParams(window.location.search).get("render")==="always"}catch{return!1}})(),Kc=1e3;class ja{constructor(){S(this,"pos",new Float32Array(3));S(this,"rot",new Float32Array(16));S(this,"fov",NaN);S(this,"w",0);S(this,"h",0);S(this,"extra","");S(this,"requested",!0);S(this,"lastDraw",-1/0);S(this,"frames",0);S(this,"reason","start");S(this,"lastActive",-1/0)}request(){this.requested=!0}needFrame(s,a,u,l,_,y=""){const x=a.position,P=a.rotation,M=a.getFovY();let z=Wc?"always":this.requested?"requested":_?"active":this.frames<3?"warmup":s-this.lastDraw>=Kc?"heartbeat":"";if(!z)if(u!==this.w||l!==this.h)z="size";else if(M!==this.fov)z="fov";else if(y!==this.extra)z="state";else{for(let G=0;G<3&&!z;G++)Math.abs(x[G]-this.pos[G])>1e-6*(1+Math.abs(x[G]))&&(z="position");for(let G=0;G<16&&!z;G++)Math.abs(P[G]-this.rot[G])>1e-7&&(z="rotation")}if(!z)return!1;this.reason=z;for(let G=0;G<3;G++)this.pos[G]=x[G];for(let G=0;G<16;G++)this.rot[G]=P[G];return this.fov=M,this.w=u,this.h=l,this.extra=y,this.requested=!1,this.lastDraw=s,this.frames++,z!=="heartbeat"&&(this.lastActive=s),!0}idleMs(s){return s-this.lastActive}}const Ha=64,ei=1,ti=2,ma=4,ba=512,va=1024,ga=2048,wa=4096,xa=8192,jc=0,Wt=new ArrayBuffer(Ha),ct={canvas_size:new Uint32Array(Wt,0,2),accel_flags:new Uint32Array(Wt,8,1),feature_mode:new Uint32Array(Wt,12,1),gaussian_scaling:new Float32Array(Wt,16,1),sh_bias:new Float32Array(Wt,20,1),color_K:new Uint32Array(Wt,24,1),walltime:new Float32Array(Wt,28,1),clip_plane:new Float32Array(Wt,32,4),clip_intr:new Float32Array(Wt,48,4)};function Hc(i){ct.canvas_size[0]=i.width>>>0,ct.canvas_size[1]=i.height>>>0,ct.accel_flags[0]=(i.accel_flags??ei|ti)>>>0,ct.feature_mode[0]=(i.feature_mode??jc)>>>0,ct.gaussian_scaling[0]=i.gaussian_scaling??1,ct.sh_bias[0]=i.sh_bias??.5,ct.color_K[0]=(i.color_K??0)>>>0,ct.walltime[0]=i.walltime??0}function mr(i,s){i.queue.writeBuffer(s,0,Wt)}function pn(i,s,a){a&&i&&s&&mr(i,s)}function En(i,s,a,u,l=!0){ct.canvas_size[0]=i>>>0,ct.canvas_size[1]=s>>>0,pn(a??null,u??null,l)}function ya(i,s,a,u=!0){ct.gaussian_scaling[0]=i,pn(s??null,a??null,u)}function Pa(i,s,a,u=!0){ct.sh_bias[0]=i,pn(s??null,a??null,u)}function Yc(i,s,a,u=!0){ct.color_K[0]=i>>>0,pn(s??null,a??null,u)}function Xc(i,s,a,u=!0){ct.feature_mode[0]=i>>>0,pn(s??null,a??null,u)}function Sa(i,s,a,u,l=!0){i?(ct.clip_plane.set(i),ct.clip_intr.set(s)):(ct.clip_plane.set([0,0,0,0]),ct.clip_intr.set([0,0,0,0])),l&&a&&u&&mr(a,u)}function Zc(i){const s=new Float32Array(1),a=new Uint32Array(s.buffer);s[0]=i;const u=a[0],l=u>>>16&32768,_=(u>>>23&255)-127+15;return _<=0?l:_>=31?l|31744:l|_<<10|u>>>13&1023}function Ea(i,s=.3,a,u,l=!0){let _=ct.accel_flags[0]&65535&~xa;i&&(_=_|xa|Zc(s)<<16),ct.accel_flags[0]=_>>>0,pn(a??null,u??null,l)}function os(i,s,a,u=!0){let l=ct.accel_flags[0];i.oac!==void 0&&(l=i.oac?l|ei:l&~ei),i.spr!==void 0&&(l=i.spr?l|ti:l&~ti),i.bfc!==void 0&&(l=i.bfc?l|ma:l&~ma),i.hypLegacy!==void 0&&(l=i.hypLegacy?l|ba:l&~ba),i.centred!==void 0&&(l=i.centred?l|wa:l&~wa),i.raysplat!==void 0&&(l=i.raysplat?l|ga:l&~ga),i.legacyPos!==void 0&&(l=i.legacyPos?l|va:l&~va),ct.accel_flags[0]=l>>>0,pn(s??null,a??null,u)}const ka=16384;function Ta(i,s,a,u=!0){let l=ct.accel_flags[0];l=i?l|ka:l&~ka,ct.accel_flags[0]=l>>>0,pn(s??null,a??null,u)}function Qc(i,s,a,u=!0){const l=i>0?Math.max(1,Math.min(63,Math.round(i*8))):0;let _=ct.accel_flags[0];_=_&-505|l<<3,ct.accel_flags[0]=_>>>0,pn(s??null,a??null,u)}const Jc=`// Cap layer (2026-11-04): the exposed cross-section of an axis-aligned clip plane, drawn as ONE
// quad BEFORE the surfel pass so the sorted surfels composite over it ("over" blend, premultiplied).
// The texture is a stack of orthographic cross-section renders at N levels tau_k (BC7 2D array,
// RGBA with alpha = tissue mask); the fragment intersects the camera ray with the plane z = tau,
// maps the hit to in-plane uv, and samples the two nearest levels (lerp in tau).
struct CapParams {
  plane_axis   : u32,      // 0/1/2 = x/y/z
  n_levels     : u32,
  flip_v       : u32,      // 1 = level images are stored top-down relative to +axis2
  _p0          : u32,
  tau          : f32,      // current clip offset (bundle world units)
  tau_min      : f32,      // tau of level 0
  tau_max      : f32,      // tau of level n_levels-1 (uniform spacing)
  mix_levels   : f32,      // 1 = lerp between the two nearest levels, 0 = nearest
  uv_min       : vec2<f32>,// in-plane world coords of texel (0,0)
  uv_max       : vec2<f32>,// in-plane world coords of texel (W,H)
};
struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};
@group(0) @binding(0) var<uniform> camera : CameraUniforms;
@group(0) @binding(1) var<uniform> cap    : CapParams;
@group(0) @binding(2) var cap_tex : texture_2d_array<f32>;
@group(0) @binding(3) var cap_smp : sampler;

struct VOut { @builtin(position) pos : vec4<f32>, @location(0) ndc : vec2<f32> };

@vertex
fn vs_main(@builtin(vertex_index) vi : u32) -> VOut {
  // full-screen triangle; the fragment rejects rays that miss the plane rectangle
  var p = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
  var o : VOut; o.pos = vec4<f32>(p[vi], 0.0, 1.0); o.ndc = p[vi]; return o;
}

fn axis_of(v : vec3<f32>, a : u32) -> f32 { if a == 0u { return v.x; } if a == 1u { return v.y; } return v.z; }
fn inplane(v : vec3<f32>, a : u32) -> vec2<f32> { if a == 0u { return v.yz; } if a == 1u { return v.zx; } return v.xy; }

@fragment
fn fs_main(in : VOut) -> @location(0) vec4<f32> {
  // camera ray in world space through this pixel
  let cam_o = (camera.view_inv * vec4<f32>(0.0, 0.0, 0.0, 1.0)).xyz;
  let p_view = camera.proj_inv * vec4<f32>(in.ndc, 1.0, 1.0);
  let d_view = normalize(p_view.xyz / p_view.w);
  let d = normalize((camera.view_inv * vec4<f32>(d_view, 0.0)).xyz);
  let a = cap.plane_axis;
  let dn = axis_of(d, a);
  if abs(dn) < 1e-6 { discard; }
  let t = (cap.tau - axis_of(cam_o, a)) / dn;
  if t <= 0.0 { discard; }
  let hit = cam_o + t * d;
  let uvw = inplane(hit, a);
  var uv = (uvw - cap.uv_min) / (cap.uv_max - cap.uv_min);
  if uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 { discard; }
  if cap.flip_v == 1u { uv.y = 1.0 - uv.y; }
  // level lookup
  let fl = clamp((cap.tau - cap.tau_min) / max(cap.tau_max - cap.tau_min, 1e-9), 0.0, 1.0) * f32(cap.n_levels - 1u);
  let l0 = u32(floor(fl)); let l1 = min(l0 + 1u, cap.n_levels - 1u); let w = select(0.0, fract(fl), cap.mix_levels > 0.5);
  let c0 = textureSampleLevel(cap_tex, cap_smp, uv, i32(l0), 0.0);
  let c1 = textureSampleLevel(cap_tex, cap_smp, uv, i32(l1), 0.0);
  let c = mix(c0, c1, w);
  if c.a < 1.0 / 255.0 { discard; }
  // premultiplied output for the renderer's "over" blend (the surfel pass composites on top)
  return vec4<f32>(c.rgb * c.a, c.a);
}
`;function eu(i){const s=new DataView(i),a=String.fromCharCode(s.getUint8(0),s.getUint8(1),s.getUint8(2),s.getUint8(3));if(a!=="CAP1")throw new Error(`capstack: bad magic '${a}'`);const u=s.getUint32(4,!0),l=s.getUint32(8,!0),_=s.getUint32(12,!0),y=s.getUint32(16,!0),x=s.getUint32(20,!0),P=s.getFloat32(24,!0),M=s.getFloat32(28,!0),z=[s.getFloat32(32,!0),s.getFloat32(36,!0)],G=[s.getFloat32(40,!0),s.getFloat32(44,!0)],q=s.getUint32(48,!0),V=56;return{meta:{W:u,H:l,N:_,axis:y,flipV:x,tauMin:P,tauMax:M,uvMin:z,uvMax:G,format:q},blocks:new Uint8Array(i,V)}}class tu{constructor(s,a,u,l){S(this,"pipeline");S(this,"params");S(this,"bg");S(this,"tex");S(this,"meta");S(this,"tau",0);S(this,"mix",1);S(this,"enabled",!0);this.device=s,this.meta=l.meta;const{W:_,H:y,N:x}=l.meta;if(l.meta.format!==7)throw new Error(`capstack: unsupported format ${l.meta.format}`);if(!s.features.has("texture-compression-bc"))throw new Error("capstack needs texture-compression-bc");this.tex=s.createTexture({label:"cap stack",size:{width:_,height:y,depthOrArrayLayers:x},format:"bc7-rgba-unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const P=Math.ceil(_/4)*16,M=Math.ceil(y/4),z=P*M;for(let Y=0;Y<x;Y++)s.queue.writeTexture({texture:this.tex,origin:{x:0,y:0,z:Y}},l.blocks,{offset:Y*z,bytesPerRow:P,rowsPerImage:M},{width:_,height:y,depthOrArrayLayers:1});this.params=s.createBuffer({label:"cap params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const G=s.createShaderModule({label:"cap layer",code:Jc}),q=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d-array"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]});this.pipeline=s.createRenderPipeline({label:"cap layer",layout:s.createPipelineLayout({bindGroupLayouts:[q]}),vertex:{module:G,entryPoint:"vs_main"},fragment:{module:G,entryPoint:"fs_main",targets:[{format:a,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}});const V=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});this.bg=s.createBindGroup({layout:q,entries:[{binding:0,resource:{buffer:u}},{binding:1,resource:{buffer:this.params}},{binding:2,resource:this.tex.createView({dimension:"2d-array"})},{binding:3,resource:V}]}),console.log(`[cap] ${_}x${y} x ${x} levels, axis ${"xyz"[l.meta.axis]}, tau ${l.meta.tauMin.toFixed(3)}..${l.meta.tauMax.toFixed(3)}, ${(l.blocks.byteLength/1048576).toFixed(0)} MB BC7`)}draw(s,a,u){if(!this.enabled)return;const l=this.meta,_=new Uint32Array([l.axis,l.N,l.flipV,0]),y=new Float32Array([this.tau,l.tauMin,l.tauMax,this.mix,l.uvMin[0],l.uvMin[1],l.uvMax[0],l.uvMax[1]]),x=new ArrayBuffer(48);new Uint32Array(x,0,4).set(_),new Float32Array(x,16,8).set(y),this.device.queue.writeBuffer(this.params,0,x);const P=s.beginRenderPass({label:"cap",colorAttachments:[{view:a,loadOp:"load",storeOp:"store"}]});u&&(P.setViewport(0,0,u[0],u[1],0,1),P.setScissorRect(0,0,u[0],u[1])),P.setPipeline(this.pipeline),P.setBindGroup(0,this.bg),P.draw(3),P.end()}destroy(){this.tex.destroy(),this.params.destroy()}}const Kr="halloumi.gpuLossReload",nu=6e4,As=(()=>{try{return new URLSearchParams(window.location.search).get("lowmem")==="1"}catch{return!1}})(),su=/insufficient memory|out ?of ?memory|OutOfMemory|kIOGPUCommandBufferCallbackErrorOutOfMemory/i;let Ca=!1;function Js(i,s){const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const u=document.createElement("div");if(u.textContent=i,a.appendChild(u),s){const l=document.createElement("button");l.textContent="Reload",Object.assign(l.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),l.onclick=()=>window.location.reload(),a.appendChild(l)}document.body.appendChild(a)}function Ya(i,s){if(Ca)return;Ca=!0,console.error(`[gpu-loss] ${i} lost: ${s}`);let a=0;try{a=parseInt(sessionStorage.getItem(Kr)??"0",10)||0}catch{}const u=Date.now(),l=su.test(s);if(l&&!As){try{sessionStorage.setItem(Kr,String(u))}catch{}const _=new URL(window.location.href);_.searchParams.set("lowmem","1"),Js("The GPU ran out of memory — reloading the viewer in low-memory mode…",!1),setTimeout(()=>window.location.replace(_.toString()),400)}else if(u-a>nu){try{sessionStorage.setItem(Kr,String(u))}catch{}Js("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else Js(l?'The GPU ran out of memory again, even in low-memory mode. This Mac shares its RAM with the GPU: close other tabs / apps (or end Chrome’s "GPU Process" in its Task Manager) and reload.':`The GPU device was lost again (${i}: ${s}). Reload to try once more.`,!0)}function ru(i){i.lost.then(a=>{a.reason!=="destroyed"&&Ya("webgpu",`${a.reason}: ${a.message}`)});let s=0;i.addEventListener("uncapturederror",a=>{var u;s++<5&&console.error("[webgpu] uncaptured error:",((u=a==null?void 0:a.error)==null?void 0:u.message)??a)})}function Ba(i){i.addEventListener("webglcontextlost",s=>{s.preventDefault(),!Xa&&Ya("webgl","webglcontextlost")},!1)}let Xa=!1;function jr(i){window.addEventListener("pagehide",()=>{Xa=!0;try{i()}catch(s){console.warn("[gpu-loss] release on pagehide failed:",s)}}),window.addEventListener("pageshow",s=>{s.persisted&&location.reload()})}const Ma=document.querySelector("#log");let zt=null,$n=null;function Za(){if(zt)return zt;zt=document.createElement("div"),zt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",zt.appendChild(i),$n=document.createElement("div"),$n.className="ply-spinner-label",zt.appendChild($n),zt.style.display="none",document.body.appendChild(zt),zt}function ds(i){Za(),$n&&i&&($n.textContent=i),zt&&(zt.style.opacity="1",zt.style.display="flex")}function Mt(i){Za(),$n&&($n.textContent=i)}function Qt(){if(!zt)return;const i=zt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function Qa(i,s){if(!Ma)return;const a=document.createElement("p");a.innerText=i,s&&Object.assign(a.style,s),Ma.appendChild(a)}async function bt(i){console.log(i),Qa(i)}async function iu(i){console.error(i),Qa(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Ja;function eo(){Ja=performance.now()}function Aa(i){const s=performance.now()-Ja;bt(`⏱️ ${i} Time: ${s.toFixed(0)} ms`)}function au(i,s){if(!i)throw new Error(s&&(typeof s=="string"?s:s()))}function cs(i){return i+3&-4}const ou=2,lu=3,cu=5,uu=6,Bs=7,sr=8,Rs=9,Us=10,du=11,pu=12,hu=13,fu=14;function Nn(i){const s=new TextDecoder("ascii"),a=s.decode(new Uint8Array(i,0,4));if(a!=="NAT2")throw new Error(`NAT2 bad magic: '${a}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const u=new DataView(i),l=4,_=u.getUint32(l+0,!0),y=u.getUint32(l+4,!0),x=u.getUint32(l+8,!0),P=u.getUint32(l+12,!0),M=u.getUint32(l+16,!0),z=u.getFloat32(l+20,!0),G=u.getUint32(l+24,!0),q=u.getUint32(l+28,!0),V=q===hu||q===fu,Y=V?q-2:q,R=u.getFloat32(l+32,!0),N=u.getFloat32(l+36,!0),Z=u.getFloat32(l+40,!0),O=u.getUint32(l+44,!0),ee=u.getFloat32(l+48,!0),K=u.getFloat32(l+52,!0),te=u.getUint32(l+56,!0),le=u.getUint32(l+60,!0),ue=Y===Rs||Y===Us,de=ue?le:0,Ee=ue?0:le&255,Te=ue?0:le>>8&255,Ue=Ee>0?Ee:1;if(Y===cu||Y===uu)throw new Error(`NAT2: paired-RVQ format=${Y} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Ce=Y===Rs||Y===Us;if(Y!==ou&&Y!==lu&&Y!==du&&Y!==pu&&Y!==Bs&&Y!==sr&&!Ce)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Y}`);if(_%4!==0||O%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${_} layer_h=${O}`);let pe=l+64;const I=(te+1)*4,ye=new Uint32Array(i.slice(pe,pe+I));pe+=I;let we;if(Ue>1){const Se=(Ue+1)*4;if(pe+Se>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Se} from ${pe})`);we=new Uint32Array(i.slice(pe,pe+Se)),pe+=Se}else we=new Uint32Array([0,_]);let _e=0;for(let Se=0;Se<Ue;Se++){const F=we[Se+1]-we[Se];F>_e&&(_e=F)}if(Ce){const Se=de&2?21:de&1?7:6,F=M*Se*4;if(pe+F>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${F} more bytes from offset ${pe}, have ${i.byteLength-pe}`);const J=new Float32Array(i.slice(pe,pe+F));pe+=F;const k=Math.max(1,de>>8&255),c=[];let p=0;for(let A=0,o=_,v=O;A<k;A++,o>>=1,v>>=1){const f=Math.max(1,o>>2)*Math.max(1,v>>2)*16;c.push(f),p+=f}const h=i.byteLength-pe;if(h<p)throw new Error(`NAT2 probe atlas truncated: need ${p} bytes for ${_}x${O} x${k} mips, have ${h}`);const w=[];let C=pe;for(const A of c)w.push(new Uint8Array(i.slice(C,C+A))),C+=A;const U=w[0];return{width:_,height:y,channels:x,kernel_type:P,num_rects:M,uv_extent:z,sb_number:G,format:Y,sh_bias:R,res_bias:N,compact_mult:Z,layer_h:O,atlas_scale:ee,atlas_offset:K,n_layers:te,n_cols:Ue,layer_cuts:ye,column_cuts:we,slice_width:_e,rects_expanded:J,atlas_bytes:U,mip_bytes:w,probe_mode:de&2?3:de&1?2:1}}const be=M*4*4;if(pe+be>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${be} more bytes from offset ${pe}, have ${i.byteLength-pe}`);const ae=new Float32Array(i.slice(pe,pe+be));pe+=be;const Pe=new Float32Array(M*5);for(let Se=0;Se<M;Se++){const F=ae[Se*4+0],J=ae[Se*4+1],k=ae[Se*4+2],c=ae[Se*4+3];let p=0;for(let A=1;A<=te&&ye[A]<=J;A++)p=A;let h=0;for(let A=1;A<=Ue&&we[A]<=F;A++)h=A;const w=J-ye[p],C=F-we[h],U=h*te+p;Pe[Se*5+0]=C,Pe[Se*5+1]=w,Pe[Se*5+2]=k,Pe[Se*5+3]=c,Pe[Se*5+4]=U}let Ie,Ae;const De=Ue,fe=_/4*16;if(Y===Bs||Y===sr||V){if(pe+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Se=Y===Bs||V?"BCCB":"ACCB",F=s.decode(new Uint8Array(i,pe,4));if(F!==Se)throw new Error(`NAT2 typeD bad sub-magic: expected '${Se}' got '${F}'`);const J=u.getUint32(pe+4,!0),k=u.getUint32(pe+8,!0),c=u.getUint32(pe+12,!0),p=u.getUint32(pe+16,!0),h=u.getUint32(pe+20,!0);if(J!==1)throw new Error(`NAT2 BCCB unsupported version ${J}`);if(c!==y/4||p!==_/4||h!==c*p)throw new Error(`NAT2 BCCB block grid mismatch: header ${_}×${y}, sub-header ${p}×${c} (${h} blocks)`);pe+=24;const w=k*16;if(pe+w>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${w}, have ${i.byteLength-pe})`);const C=new Uint8Array(i,pe,w);pe+=w;const U=h*2;if(pe+U>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${U}, have ${i.byteLength-pe})`);const A=new Uint16Array(i.slice(pe,pe+U));pe+=U;const o=new Uint8Array(h*16);for(let v=0;v<h;v++){const f=A[v]*16;o.set(C.subarray(f,f+16),v*16)}if(Ie=o,Te>1){Ae=[o];for(let v=1;v<Te;v++){if(pe+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${v} sub-header`);const f=s.decode(new Uint8Array(i,pe,4));if(f!==Se)throw new Error(`NAT2 mip ${v}: bad sub-magic '${f}'`);const b=u.getUint32(pe+8,!0),d=u.getUint32(pe+16,!0),g=u.getUint32(pe+20,!0);if(d!==v)throw new Error(`NAT2 mip section order: expected level ${v}, got ${d}`);pe+=24;let T=0;for(let j=0;j<De;j++)for(let re=0;re<te;re++){const ie=ni(v,we[j+1]-we[j],ye[re+1]-ye[re],_e,O);T+=(ie.cw>>2)*(ie.ch>>2)}if(T!==g)throw new Error(`NAT2 mip ${v}: ${g} blocks, loader expects ${T}`);if(pe+b*16+g*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${v}`);const E=new Uint8Array(i,pe,b*16);pe+=b*16;const $=new Uint16Array(i.slice(pe,pe+g*2));pe+=g*2;const L=new Uint8Array(g*16);for(let j=0;j<g;j++){const re=$[j]*16;L.set(E.subarray(re,re+16),j*16)}Ae.push(L)}}}else{let Se=0;for(let F=0;F<te;F++){const J=ye[F+1]-ye[F];if(J%4!==0)throw new Error(`NAT2 BC7 layer ${F} rows ${J} not 4-aligned`);Se+=J/4*fe}if(pe+Se>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Se} more bytes from offset ${pe}, have ${i.byteLength-pe}`);if(Ie=new Uint8Array(i.slice(pe,pe+Se)),pe+=Se,Te>1&&!ue){Ae=[Ie];for(let F=1;F<Te;F++){let J=0;for(let k=0;k<Ue;k++)for(let c=0;c<te;c++){const p=ni(F,we[k+1]-we[k],ye[c+1]-ye[c],_e,O);J+=p.cw/4*(p.ch/4)*16}if(pe+J>i.byteLength)throw new Error(`NAT2 raw mip ${F}: truncated (need ${J} B)`);Ae.push(new Uint8Array(i.slice(pe,pe+J))),pe+=J}}}return{width:_,height:y,channels:x,kernel_type:P,num_rects:M,uv_extent:z,sb_number:G,format:Y,sh_bias:R,res_bias:N,compact_mult:Z,layer_h:O,atlas_scale:ee,atlas_offset:K,n_layers:te,n_cols:Ue,layer_cuts:ye,column_cuts:we,slice_width:_e,rects_expanded:Pe,atlas_bytes:Ie,...Ae?{mip_bytes:Ae}:{}}}function ni(i,s,a,u,l){const _=x=>x+3>>2<<2,y=1<<i;return{cw:Math.min(_(Math.max(1,u>>i)),_(Math.ceil(s/y))),ch:Math.min(_(Math.max(1,l>>i)),_(Math.ceil(a/y)))}}const _u=32;async function si(i,s,a){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let u,l,_,y,x;if(s.format===2||s.format===Bs||s.format===Rs){if(!i.features.has("texture-compression-bc"))return bt(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;x=s.format===Rs?"BC7 atlas (proberes: shared probe texture)":s.format===Bs?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:u,view:l,sampler:_,samplerAniso:y}=await ri(i,s,"bc7-rgba-unorm",x)}else if(s.format===3||s.format===sr||s.format===Us){if(!i.features.has("texture-compression-astc"))return bt(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;x=s.format===Us?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===sr?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:u,view:l,sampler:_,samplerAniso:y}=await ri(i,s,"astc-4x4-unorm",x)}else return bt(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:P}=s,M=i.createBuffer({label:"atlas rects (5-stride)",size:cs(P.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(M,0,P);const z=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return nr(i,z,s,a),{texture:u,view:l,sampler:_,samplerAniso:y,rectsBuffer:M,texParamsBuffer:z,meta:s}}async function mu(i,s,a){if(s.format!==11&&s.format!==12)return bt(`⚠️  ?slope= file has format ${s.format}, expected 11 (BC5) or 12 (P)`),null;if(!i.features.has("texture-compression-bc"))return bt("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(a&&(a.width!==s.width||a.layer_h!==s.layer_h||a.n_layers!==s.n_layers||a.n_cols!==s.n_cols||a.num_rects!==s.num_rects))return bt(`⚠️  slope sidecar layout ${s.width}x${s.layer_h}x${s.n_layers} does not match the atlas ${a.width}x${a.layer_h}x${a.n_layers} — disabled`),null;const u=s.atlas_bytes.byteLength/1048576,{view:l}=await ri(i,s,s.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",s.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:l,kind:s.format===11?"bc5":"p",scaleU:s.atlas_scale,offU:s.atlas_offset,scaleV:s.sh_bias,offV:s.res_bias,mb:u}}const Ra=48*1048576;async function ri(i,s,a,u){let l=0;const _=async()=>{i.queue.submit([]),await i.queue.onSubmittedWorkDone(),l=0},y=async Ce=>{l+=Ce,l>=Ra&&await _()},{width:x,layer_h:P,n_layers:M,n_cols:z,layer_cuts:G,column_cuts:q,slice_width:V,atlas_bytes:Y}=s,N=x/4*16,Z=i.limits.maxTextureDimension2D;if(P>Z||V>Z)throw new Error(`⚠️  atlas slice dims ${V}x${P} exceed maxTextureDimension2D=${Z}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const O=z*M;if(O>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${z} cols × ${M} layers = ${O} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const ee=s.mip_bytes??[Y],K=As?ee.slice(0,1):ee,te=K.length;As&&ee.length>1&&console.log(`[atlas] lowmem: skipping ${ee.length-1} mip level(s)`);const le=i.createTexture({label:u,size:{width:V,height:P,depthOrArrayLayers:O},mipLevelCount:te,sampleCount:1,dimension:"2d",format:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Ce=0;Ce<z;Ce++){const pe=q[Ce]/4,I=(q[Ce+1]-q[Ce])/4;for(let ye=0;ye<M;ye++){const we=G[ye]/4,_e=(G[ye+1]-G[ye])/4,be=Ce*M+ye,ae=we*N+pe*16;i.queue.writeTexture({texture:le,mipLevel:0,origin:{x:0,y:0,z:be},aspect:"all"},Y,{offset:ae,bytesPerRow:N,rowsPerImage:_e},{width:I*4,height:_e*4,depthOrArrayLayers:1}),await y(I*_e*16)}}const ue=s.format===Rs||s.format===Us;for(let Ce=1;Ce<te&&!ue;Ce++){let pe=0;for(let I=0;I<z;I++)for(let ye=0;ye<M;ye++){const{cw:we,ch:_e}=ni(Ce,q[I+1]-q[I],G[ye+1]-G[ye],V,P);i.queue.writeTexture({texture:le,mipLevel:Ce,origin:{x:0,y:0,z:I*M+ye},aspect:"all"},K[Ce],{offset:pe,bytesPerRow:(we>>2)*16,rowsPerImage:_e>>2},{width:we,height:_e,depthOrArrayLayers:1}),pe+=(we>>2)*(_e>>2)*16,await y((we>>2)*(_e>>2)*16)}}for(let Ce=1;Ce<te&&ue;Ce++){const pe=Math.max(1,V>>Ce),I=Math.max(1,P>>Ce);i.queue.writeTexture({texture:le,mipLevel:Ce,origin:{x:0,y:0,z:0},aspect:"all"},K[Ce],{offset:0,bytesPerRow:Math.max(1,pe>>2)*16,rowsPerImage:Math.max(1,I>>2)},{width:pe,height:I,depthOrArrayLayers:1}),await y(K[Ce].byteLength)}te>1&&console.log(`[atlas] ${te} mip levels uploaded (${ue?"trilinear":"per-surfel integer level"})`),await _();const de=ee.reduce((Ce,pe)=>Ce+pe.byteLength,0)/1048576;s.atlas_bytes=new Uint8Array(0),s.mip_bytes&&(s.mip_bytes=ee.map(()=>new Uint8Array(0))),console.log(`[atlas] ${u}: ${de.toFixed(0)} MB uploaded in ≤${Ra/1048576} MB chunks; CPU copy released`);const Ee=le.createView({label:`${u} view`,dimension:"2d-array"}),Te=i.createSampler({label:`${u} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1&&ue?"linear":"nearest"}),Ue=i.createSampler({label:`${u} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16});return{texture:le,view:Ee,sampler:Te,samplerAniso:Ue}}function nr(i,s,a,u,l=1){var M;const _=new ArrayBuffer(32),y=new Uint32Array(_),x=new Float32Array(_);y[0]=u?1:0,x[1]=a.atlas_scale,x[2]=a.atlas_offset,x[3]=a.res_bias,y[4]=a.probe_mode?a.probe_mode|0:0,y[5]=a.width|0;const P=(((M=a.mip_bytes)==null?void 0:M.length)??1)>1;y[6]=l===2?2:P&&l!==0?1:0,x[7]=a.uv_extent,i.queue.writeBuffer(s,0,_)}async function rr(i,s){bt(`loading ply file from File... : ${i.name}`),ds("downloading PLY...");const a=await i.arrayBuffer();try{return await no(a,s)}finally{Qt()}}async function bu(i,s){bt(`loading ply file from URL... : ${i}`),ds("downloading PLY...");try{eo();const a=new URL(i,self.location.href).href;return await no({url:a},s)}finally{Qt()}}function to(i){return new Promise((s,a)=>{const u=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});u.onmessage=l=>{const _=l.data;if((_==null?void 0:_.type)==="error"){iu(`PLY worker error: ${_.message??"unknown error"}`),u.terminate(),a(new Error(_.message??"Worker error"));return}else if((_==null?void 0:_.type)==="download_progress"){const y=_.totalBytes,x=_.loadedBytes/(1024*1024),P=y?y/(1024*1024):void 0,M=(_.speedBps??0)/(1024*1024),z=y?Math.min(99,Math.floor(_.loadedBytes/y*100)):void 0,G=P?`total ${P.toFixed(1)} MB`:"total -- MB",q=P&&z!==void 0?`${x.toFixed(1)} MB downloaded (${z}%)`:`${x.toFixed(1)} MB downloaded`,V=`${M.toFixed(2)} MB/s`;Mt(`downloading PLY ...
${G}, ${q}
${V}`);return}else if((_==null?void 0:_.type)==="fetched"){bt(`💾 Fetched (${_.byteLength} bytes)`),Aa("Download"),Mt("parsing PLY..."),eo();return}else if((_==null?void 0:_.type)==="parse_progress"){const y=_.total??0,x=_.read??0,P=y>0?Math.floor(x/y*100):0;Mt(`parsing PLY ...
${x}/${y} surfels (${P}%)`);return}else(_==null?void 0:_.type)==="done"&&(u.terminate(),Aa("Parse"),s(_))},u.onerror=l=>{u.terminate(),a(l)},i instanceof ArrayBuffer?(Mt("parsing PLY..."),u.postMessage({type:"start",plyBuffer:i},[i])):u.postMessage({type:"start_url",url:i.url})})}async function Ua(i){var a,u,l,_,y,x,P,M,z,G,q,V;const s=await to(await i.arrayBuffer());return{num_points:s.num_points,K:s.K,feature_mode:s.feature_mode??0,sh_bias:s.sh_bias,kernel_type:s.kernel_type,surfel_data:new Float32Array(s.surfelBuffer),sv_params:new Float32Array(s.svParamsBuffer),bbox:s.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:s.centroid??[((((u=(a=s.bbox)==null?void 0:a.min)==null?void 0:u[0])??-1)+(((_=(l=s.bbox)==null?void 0:l.max)==null?void 0:_[0])??1))/2,((((x=(y=s.bbox)==null?void 0:y.min)==null?void 0:x[1])??-1)+(((M=(P=s.bbox)==null?void 0:P.max)==null?void 0:M[1])??1))/2,((((G=(z=s.bbox)==null?void 0:z.min)==null?void 0:G[2])??-1)+(((V=(q=s.bbox)==null?void 0:q.max)==null?void 0:V[2])??1))/2]}}async function no(i,s){var Y,R,N,Z,O,ee,K,te,le,ue,de,Ee;const a=await to(i),u=a.num_points,l=a.K,_=a.feature_mode??0,y=a.sh_bias,x=a.kernel_type,P=a.surfelBuffer,M=a.svParamsBuffer,z=_===2?"NASG":_===1?"SB":"SV";bt(`🪐 Total surfels: ${u}, mode=${z}, K=${l}, sh_bias=${y}, kernel_type=${x}`);const G=s.createBuffer({label:"surfel input buffer",size:cs(u*_u),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(G,0,P);const q=M.byteLength>0?M.byteLength:16,V=s.createBuffer({label:`color_params buffer (${z})`,size:cs(q),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return M.byteLength>0&&s.queue.writeBuffer(V,0,M),{num_points:u,K:l,feature_mode:_,sh_bias:y,kernel_type:x,surfel_buffer:G,surfel_data:new Float32Array(P),sv_params_buffer:V,bbox:a.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:a.centroid??[((((R=(Y=a.bbox)==null?void 0:Y.min)==null?void 0:R[0])??-1)+(((Z=(N=a.bbox)==null?void 0:N.max)==null?void 0:Z[0])??1))/2,((((ee=(O=a.bbox)==null?void 0:O.min)==null?void 0:ee[1])??-1)+(((te=(K=a.bbox)==null?void 0:K.max)==null?void 0:te[1])??1))/2,((((ue=(le=a.bbox)==null?void 0:le.min)==null?void 0:ue[2])??-1)+(((Ee=(de=a.bbox)==null?void 0:de.max)==null?void 0:Ee[2])??1))/2]}}const ir="halloumi-bundles-v1",Da=8,La="x-halloumi-cached-at",so="x-halloumi-etag",br="x-halloumi-length";function vu(i){try{const s=new URL(i,window.location.href);return s.hash="",s.toString()}catch{return i}}function ro(){try{const i=new URLSearchParams(window.location.search);return{nocache:i.get("nocache")==="1",clearcache:i.get("clearcache")==="1",keepcache:i.get("keepcache")==="1"}}catch{return{nocache:!1,clearcache:!1,keepcache:!1}}}const Ga="halloumi-bundles-session";function gu(){try{return sessionStorage.getItem(Ga)?!1:(sessionStorage.setItem(Ga,String(Date.now())),!0)}catch{return!1}}async function hi(){if(typeof caches>"u")return null;try{return await caches.open(ir)}catch{return null}}let za=!1;function wu(){var i;za||!((i=navigator.storage)!=null&&i.persist)||(za=!0,navigator.storage.persist().then(s=>console.log(`[cache] persistent storage ${s?"granted":"not granted"}`)).catch(()=>{}))}let er=null;function xu(){return er||(er=(async()=>{const i=ro();if(i.clearcache)try{await caches.delete(ir),console.log("[cache] cleared (?clearcache=1)")}catch{}else if(!i.keepcache&&gu())try{const s=await hi(),a=s?(await s.keys()).length:0;a>0&&(await caches.delete(ir),console.log(`[cache] new tab: dropped ${a} file(s) left by a closed tab (?keepcache=1 to keep)`))}catch{}ar()})(),er)}async function Ia(){const i=await hi();if(!i)return{files:0,bytes:0};let s=0;const a=await i.keys();for(const u of a){const l=await i.match(u);s+=parseInt((l==null?void 0:l.headers.get(br))??"0",10)||0}return{files:a.length,bytes:s}}async function yu(){try{await caches.delete(ir)}catch{}ar()}const ii=new Set;function ar(){for(const i of ii)try{i()}catch{}}function Pu(i){return ii.add(i),()=>ii.delete(i)}function io(i){const s=i.addButton({title:"🗑 Clear cache",hidden:!0});let a=!1;const u=_=>_===1?"":"s",l=async()=>{const{files:_,bytes:y}=await Ia();s.hidden=_===0,_>0&&(s.title=`🗑 Clear cache (${_} file${u(_)}, ${Fa(y)})`)};s.on("click",async()=>{if(a)return;const{files:_,bytes:y}=await Ia();if(_===0){l();return}const x=`Delete ${_} cached bundle file${u(_)} (${Fa(y)}) from this device?

The current scene stays loaded; the next page load will download it again.`;if(confirm(x)){a=!0,s.title="🗑 Clearing…";try{await yu()}finally{a=!1}await l(),console.log("[cache] cleared by user")}}),Pu(()=>void l()),l()}function Fa(i){return i>=1024*1048576?`${(i/(1024*1048576)).toFixed(2)} GB`:`${(i/1048576).toFixed(0)} MB`}function Su(i){return new Promise(s=>setTimeout(s,i))}function Eu(){return typeof document>"u"||document.visibilityState!=="hidden"?Promise.resolve():new Promise(i=>{const s=()=>{document.visibilityState!=="hidden"&&(document.removeEventListener("visibilitychange",s),i())};document.addEventListener("visibilitychange",s)})}async function ku(i,s){var q;const a=[];let u=0,l,_=null,y=null,x=performance.now(),P=0,M=null;for(let V=0;V<Da;V++){V>0&&(document.visibilityState==="hidden"?await Eu():await Su(Math.min(8e3,1e3*2**(V-1))));try{const Y={};u>0&&(Y.Range=`bytes=${u}-`,_?Y["If-Range"]=_:y&&(Y["If-Range"]=y));const R=await fetch(i,{headers:Y,cache:"no-store"});if(R.status===416&&l!==void 0&&u>=l)break;if(!R.ok)throw new Error(`fetch failed: ${R.status} ${R.statusText}`);if(u>0&&R.status!==206&&(a.length=0,u=0,P=0),u===0){_=R.headers.get("etag"),y=R.headers.get("last-modified");const Z=R.headers.get("content-length");l=Z&&parseInt(Z,10)||void 0}else{const Z=R.headers.get("content-range"),O=Z&&/\/(\d+)$/.exec(Z);O&&(l=parseInt(O[1],10))}const N=(q=R.body)==null?void 0:q.getReader();if(N)for(;;){const{done:Z,value:O}=await N.read();if(Z)break;a.push(O),u+=O.byteLength;const ee=performance.now();ee-x>=150&&s&&(s(u,l,(u-P)/((ee-x)/1e3),"network"),x=ee,P=u)}else{const Z=await R.arrayBuffer();a.push(new Uint8Array(Z)),u+=Z.byteLength}if(l!==void 0&&u<l)throw new Error(`short read: ${u} of ${l} bytes`);M=null;break}catch(Y){M=Y,console.warn(`[cache] download attempt ${V+1}/${Da} failed at ${(u/2**20).toFixed(1)} MB:`,Y),s&&s(u,l,0,"network")}}if(M)throw M;const z=new Uint8Array(u);let G=0;for(const V of a)z.set(V,G),G+=V.byteLength;return s&&s(u,l??u,0,"network"),{buf:z.buffer,etag:_,lastModified:y}}async function Tu(i,s,a){let u=!0;const l=()=>new Response(u?(u=!1,a.buf):a.buf.slice(0),{headers:{"content-type":"application/octet-stream","content-length":String(a.buf.byteLength),[br]:String(a.buf.byteLength),[La]:String(Date.now()),[so]:a.etag??"",...a.lastModified?{"last-modified":a.lastModified}:{}}});for(let _=0;_<4;_++)try{return await i.put(s,l()),ar(),!0}catch(y){const x=await i.keys();if(x.length===0)return console.warn("[cache] not cached:",y),!1;const P=[];for(const z of x){const G=await i.match(z);P.push({k:z,t:parseInt((G==null?void 0:G.headers.get(La))??"0",10)||0})}P.sort((z,G)=>z.t-G.t);const M=P[0].k;await i.delete(M),ar(),console.warn(`[cache] quota: evicted ${M.url}`)}return!1}function Cu(i,s,a,u){const l=new AbortController,_=setTimeout(()=>l.abort(),15e3);fetch(s,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:l.signal}).then(async y=>{var Y,R;if(!y.ok)return;(Y=y.body)==null||Y.cancel().catch(()=>{});const x=y.headers.get("etag"),P=y.headers.get("content-range"),M=y.status===206?((R=/\/(\d+)$/.exec(P??""))==null?void 0:R[1])??null:y.headers.get("content-length"),z=a.headers.get(so)||null,G=a.headers.get(br),q=M!==null&&G!==null&&parseInt(M,10)!==parseInt(G,10);(q||!!(x&&z)&&x!==z)&&(await i.delete(s),console.info(`[cache] ${s} changed on the server (${q?"size":"etag"}); evicted — reload to fetch the new version`),u==null||u())}).catch(()=>{}).finally(()=>clearTimeout(_))}async function ai(i,s,a={}){await xu();const{nocache:u}=ro(),l=vu(i),_=u?null:await hi();if(_)try{const x=await _.match(l);if(x){const P=parseInt(x.headers.get(br)??x.headers.get("content-length")??"0",10)||void 0;s&&s(0,P,0,"cache");const M=await x.arrayBuffer();return s&&s(M.byteLength,M.byteLength,0,"cache"),console.log(`[cache] hit ${(M.byteLength/2**20).toFixed(1)} MB ${l}`),Cu(_,l,x,a.onStale),M}}catch(x){console.warn("[cache] lookup failed:",x)}const y=await ku(i,s);return _&&(wu(),Tu(_,l,y).then(x=>{x&&console.log(`[cache] stored ${(y.buf.byteLength/2**20).toFixed(1)} MB ${l}`)}).catch(x=>console.warn("[cache] store failed:",x))),y.buf}const or="BITYMI01",Bu=0,Mu=1,Au=2,Ru=3,Uu=4,Du=5;function fi(i){const s=new Uint8Array(i),a=new TextDecoder().decode(s.subarray(0,8));if(a!==or)throw new Error(`Not a BITYMI bundle (bad magic '${a}')`);const u=new DataView(i),l=u.getUint32(8,!0),_=12,y=20;let x=null,P=null,M=null;for(let z=0;z<l;z++){const G=_+z*y,q=u.getUint32(G+0,!0),V=Number(u.getBigUint64(G+4,!0)),Y=Number(u.getBigUint64(G+12,!0)),R=s.slice(V,V+Y).buffer;q===Bu||q===Mu||q===Du?x=R:q===Au?P=R:(q===Ru||q===Uu)&&(M=R)}if(x===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:x,camerasBuffer:P,atlasBuffer:M}}async function us(i,s){const a=await ai(i,s);return a.byteLength>=8&&new TextDecoder().decode(new Uint8Array(a,0,8))===or?{bundle:fi(a),rawPly:null}:{bundle:null,rawPly:a}}var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oi={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,s){(function(a,u){u(s)})(Lu,function(a){class u{constructor(e){const[t,r]=e.split("-"),m=t.split(".");this.major=parseInt(m[0],10),this.minor=parseInt(m[1],10),this.patch=parseInt(m[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class l{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class _{constructor(e){this.target=e}}class y extends _{constructor(e,t,r,m){super(e),this.value=t,this.presetKey=r,this.last=m??!0}}class x extends _{constructor(e,t,r){super(e),this.value=t,this.presetKey=r}}class P extends _{constructor(e,t){super(e),this.expanded=t}}class M extends _{constructor(e,t){super(e),this.index=t}}function z(n){return n}function G(n){return n==null}function q(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function V(n,e){let t=n;do{const r=Object.getOwnPropertyDescriptor(t,e);if(r&&(r.set!==void 0||r.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const Y={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class R{static alreadyDisposed(){return new R({type:"alreadydisposed"})}static notBindable(){return new R({type:"notbindable"})}static propertyNotFound(e){return new R({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new R({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=Y[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class N{constructor(e,t,r){this.obj_=e,this.key_=t,this.presetKey_=r??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const r=this.read();if(!N.isBindable(r))throw R.notBindable();if(!(e in r))throw R.propertyNotFound(e);r[e]=t}}class Z extends l{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{r(new _(this))}),this}}class O{constructor(){this.observers_={}}on(e,t){let r=this.observers_[e];return r||(r=this.observers_[e]=[]),r.push({handler:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(m=>m.handler!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(m=>{m.handler(t)})}}const ee="tp";function K(n){return(t,r)=>[ee,"-",n,"v",t?`_${t}`:"",r?`-${r}`:""].join("")}function te(n,e){return t=>e(n(t))}function le(n){return n.rawValue}function ue(n,e){n.emitter.on("change",te(le,e)),e(n.rawValue)}function de(n,e,t){ue(n.value(e),t)}function Ee(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{Ee(n,e,t)}}function Ue(n,e){ue(n,t=>{e.textContent=t??""})}const Ce=K("btn");class pe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ce()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(Ce("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const m=e.createElement("div");m.classList.add(Ce("t")),Ue(t.props.value("title"),m),this.buttonElement.appendChild(m)}}class I{constructor(e,t){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new pe(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ye{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(m,D)=>m===D,this.emitter=new O,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},m=this.constraint_?this.constraint_.constrain(e):e,D=this.rawValue_;this.equals_(D,m)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=m,this.emitter.emit("change",{options:r,previousRawValue:D,rawValue:m,sender:this}))}}class we{constructor(e){this.emitter=new O,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},m=this.value_;m===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:m,rawValue:this.value_,sender:this}))}}function _e(n,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new we(n):new ye(n,e)}class be{constructor(e){this.emitter=new O,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((r,m)=>Object.assign(r,{[m]:_e(e[m])}),{})}static fromObject(e){const t=this.createCore(e);return new be(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ae(n,e){const r=Object.keys(e).reduce((m,D)=>{if(m===void 0)return;const H=e[D],ge=H(n[D]);return ge.succeeded?Object.assign(Object.assign({},m),{[D]:ge.value}):void 0},{});return r}function Pe(n,e){return n.reduce((t,r)=>{if(t===void 0)return;const m=e(r);if(!(!m.succeeded||m.value===void 0))return[...t,m.value]},[])}function Ie(n){return n===null?!1:typeof n=="object"}function Ae(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=n(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function De(n){return{custom:e=>Ae(e)(n),boolean:Ae(e=>typeof e=="boolean"?e:void 0)(n),number:Ae(e=>typeof e=="number"?e:void 0)(n),string:Ae(e=>typeof e=="string"?e:void 0)(n),function:Ae(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ae(t=>t===e?e:void 0)(n),raw:Ae(e=>e)(n),object:e=>Ae(t=>{if(Ie(t))return ae(t,e)})(n),array:e=>Ae(t=>{if(Array.isArray(t))return Pe(t,e)})(n)}}const xe={optional:De(!0),required:De(!1)};function fe(n,e){const t=xe.required.object(e)(n);return t.succeeded?t.value:void 0}function Se(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function F(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class J{constructor(e){this.value_=e}static create(e){return[new J(e),(t,r)=>{e.setRawValue(t,r)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const k=K("");function c(n,e){return Te(n,k(void 0,e))}class p extends be{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=J.create(_e(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,m;const D=e??{};return new p(be.createCore({disabled:(t=D.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=D.hidden)!==null&&r!==void 0?r:!1,parent:(m=D.parent)!==null&&m!==void 0?m:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ue(this.globalDisabled_,c(e,"disabled")),de(this,"hidden",c(e,"hidden"))}bindDisabled(e){ue(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ue(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function h(){return["veryfirst","first","last","verylast"]}const w=K(""),C={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class U{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{h().forEach(r=>{t.classList.remove(w(void 0,C[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(w(void 0,C[r]))})}),this.viewProps.handleDispose(()=>{F(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Se({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const A="http://www.w3.org/2000/svg";function o(n){n.offsetHeight}function v(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function f(n){return n.ontouchstart!==void 0}function b(){return globalThis}function d(){return b().document}function g(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const T={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function E(n,e){const t=n.createElementNS(A,"svg");return t.innerHTML=T[e],t}function $(n,e,t){n.insertBefore(e,n.children[t])}function L(n){n.parentElement&&n.parentElement.removeChild(n)}function j(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function re(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ie(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=K("lbl");function ve(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(m=>n.createTextNode(m)).forEach((m,D)=>{D>0&&t.appendChild(n.createElement("br")),t.appendChild(m)}),t}class Re{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(se("l")),de(t.props,"label",D=>{G(D)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),re(r),r.appendChild(ve(e,D)))}),this.element.appendChild(r),this.labelElement=r;const m=e.createElement("div");m.classList.add(se("v")),this.element.appendChild(m),this.valueElement=m}}class Be extends U{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Re(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ke={id:"button",type:"blade",accept(n){const e=xe,t=fe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new Be(n.document,{blade:n.blade,props:be.fromObject({label:n.params.label}),valueController:new I(n.document,{props:be.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof Be)||!(n.controller.valueController instanceof I)?null:new Z(n.controller)}};class $e extends U{constructor(e){super(e),this.value=e.value}}function Ve(){return new be({positions:_e([],{equals:q})})}class rt extends be{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=be.createCore(t);return new rt(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};de(this,"expanded",r),de(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ut(n,e){let t=0;return v(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),o(e),t=e.clientHeight,n.set("temporaryExpanded",null),o(e)}),t}function Ne(n,e){e.style.height=n.styleHeight}function it(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=ut(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),o(e)}),n.emitter.on("change",()=>{Ne(n,e)}),Ne(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Je extends l{constructor(e,t){super(e),this.rackApi_=t}}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Xe(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function pt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class ht{constructor(e){this.emitter=new O,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw R.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const m=this.extract_(e);m&&(m.emitter.on("add",this.onSubListAdd_),m.emitter.on("remove",this.onSubListRemove_),m.allItems().forEach(D=>{this.cache_.add(D)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class nt extends l{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new y(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class at extends Be{constructor(e,t){super(e,t),this.binding=t.binding}}class lt extends l{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new x(this,t,this.controller_.binding.target.presetKey)})}}class dt extends Be{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Ze(n){return n instanceof vt?n.apiSet_:n instanceof Je?n.rackApi_.apiSet_:null}function je(n,e){const t=n.find(r=>r.controller_===e);if(!t)throw R.shouldNeverHappen();return t}function Tt(n,e,t){if(!N.isBindable(n))throw R.notBindable();return new N(n,e,t)}class vt extends l{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new O,this.apiSet_=new ht(Ze),this.pool_=t;const r=this.controller_.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),r.emitter.on("inputchange",this.onRackInputChange_),r.emitter.on("monitorupdate",this.onRackMonitorUpdate_),r.children.forEach(m=>{this.setUpApi_(m)})}get children(){return this.controller_.rack.children.map(e=>je(this.apiSet_,e))}addInput(e,t,r){const m=r??{},D=this.controller_.view.element.ownerDocument,H=this.pool_.createInput(D,Tt(e,t,m.presetKey),m),ge=new nt(H);return this.add(ge,m.index)}addMonitor(e,t,r){const m=r??{},D=this.controller_.view.element.ownerDocument,H=this.pool_.createMonitor(D,Tt(e,t),m),ge=new lt(H);return this.add(ge,m.index)}addFolder(e){return tt(this,e)}addButton(e){return et(this,e)}addSeparator(e){return Xe(this,e)}addTab(e){return pt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const r=this.apiSet_.find(m=>m.controller_===e.controller_);return r&&this.apiSet_.remove(r),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,r=this.pool_.createBlade(t,e),m=this.pool_.createBladeApi(r);return this.add(m,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}setUpApi_(e){this.apiSet_.find(r=>r.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=je(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof at){const r=je(this.apiSet_,t),m=t.binding;this.emitter_.emit("change",{event:new y(r,m.target.read(),m.target.presetKey,e.options.last)})}else if(t instanceof $e){const r=je(this.apiSet_,t);this.emitter_.emit("change",{event:new y(r,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof dt))throw R.shouldNeverHappen();const t=je(this.apiSet_,e.bladeController),r=e.bladeController.binding;this.emitter_.emit("update",{event:new x(t,r.target.read(),r.target.presetKey)})}}class Rt extends Je{constructor(e,t){super(e,new vt(e.rackController,t)),this.emitter_=new O,this.controller_.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",{event:new P(this,r.sender.rawValue)})}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}class wt extends U{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Pt{constructor(e,t){const r=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(r()),t.viewProps.bindClassModifiers(this.element)}}function Vt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof at&&r.binding===e)return r}return null}function It(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof dt&&r.binding===e)return r}return null}function Kt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof $e&&r.value===e)return r}return null}function Ut(n){return n instanceof Qe?n.rack:n instanceof wt?n.rackController.rack:null}function Jt(n){const e=Ut(n);return e?e.bcSet_:null}class Dt{constructor(e){var t,r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new O,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new ht(Jt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),V(e,"parent")?e.parent=this:(e.parent_=this,Se({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){V(e,"parent")?e.parent=null:(e.parent_=null,Se({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),r instanceof at)r.binding.emitter.on("change",this.onChildInputChange_);else if(r instanceof dt)r.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(r instanceof $e)r.value.emitter.on("change",this.onChildValueChange_);else{const m=Ut(r);if(m){const D=m.emitter;D.on("layout",this.onDescendantLayout_),D.on("inputchange",this.onDescendantInputChange_),D.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const r=e.item;if(r instanceof at)r.binding.emitter.off("change",this.onChildInputChange_);else if(r instanceof dt)r.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(r instanceof $e)r.value.emitter.off("change",this.onChildValueChange_);else{const m=Ut(r);if(m){const D=m.emitter;D.off("layout",this.onDescendantLayout_),D.off("inputchange",this.onDescendantInputChange_),D.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(m=>!m.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(m=>{const D=[];m===t&&(D.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&D.push("veryfirst")),m===r&&(D.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&D.push("verylast")),m.blade.set("positions",D)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Vt(this.find(at),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=It(this.find(dt),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Kt(this.find($e),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Qe extends U{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Pt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=new Dt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.rack=r,this.viewProps.handleDispose(()=>{for(let m=this.rack.children.length-1;m>=0;m--)this.rack.children[m].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&$(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&L(e.bladeController.view.element)}}const hn=K("cnt");class Ft{constructor(e,t){var r;this.className_=K((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),hn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),de(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const m=e.createElement("button");m.classList.add(this.className_("b")),de(t.props,"title",Oe=>{G(Oe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(m),this.element.appendChild(m),this.buttonElement=m;const D=e.createElement("div");D.classList.add(this.className_("i")),this.element.appendChild(D);const H=e.createElement("div");H.classList.add(this.className_("t")),Ue(t.props.value("title"),H),this.buttonElement.appendChild(H),this.titleElement=H;const ge=e.createElement("div");ge.classList.add(this.className_("m")),this.buttonElement.appendChild(ge);const ze=t.containerElement;ze.classList.add(this.className_("c")),this.element.appendChild(ze),this.containerElement=ze}}class en extends wt{constructor(e,t){var r;const m=rt.create((r=t.expanded)!==null&&r!==void 0?r:!0),D=new Qe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:D,view:new Ft(e,{containerElement:D.view.element,foldable:m,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=m,it(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const fn={id:"folder",type:"blade",accept(n){const e=xe,t=fe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new en(n.document,{blade:n.blade,expanded:n.params.expanded,props:be.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof en?new Rt(n.controller,n.pool):null}};class jt extends $e{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Re(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class _n extends l{}const tn=K("spr");class nn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(tn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(tn("r")),this.element.appendChild(r)}}class $t extends U{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new nn(e,{viewProps:t.viewProps})}))}}const qn={id:"separator",type:"blade",accept(n){const t=fe(n,{view:xe.required.constant("separator")});return t?{params:t}:null},controller(n){return new $t(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof $t?new _n(n.controller):null}},mn=K("tbi");class ps{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element),de(t.props,"selected",D=>{D?this.element.classList.add(mn(void 0,"sel")):this.element.classList.remove(mn(void 0,"sel"))});const r=e.createElement("button");r.classList.add(mn("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const m=e.createElement("div");m.classList.add(mn("t")),Ue(t.props.value("title"),m),this.buttonElement.appendChild(m),this.titleElement=m}}class hs{constructor(e,t){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ps(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class bn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new hs(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Qe(e,{blade:Ve(),viewProps:p.create()}),this.props=t.props,de(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.contentController.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ds{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}class Ot extends Je{constructor(e,t){super(e,new vt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new O,this.pageApiMap_=new Map,this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(r=>{this.setUpPageApi_(r)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw R.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,r=new bn(t,{itemProps:be.fromObject({selected:!1,title:e.title}),props:be.fromObject({selected:!1})});this.controller_.add(r,e.index);const m=this.pageApiMap_.get(r);if(!m)throw R.shouldNeverHappen();return m}removePage(e){this.controller_.remove(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(m=>m.controller_===e.contentController);if(!t)throw R.shouldNeverHappen();const r=new Ds(e,t);this.pageApiMap_.set(e,r)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw R.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new M(this,e.rawValue)})}}const kn=-1;class vr{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=_e(!0),this.selectedIndex=_e(kn),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=kn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,m)=>{r.rawValue=m===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const sn=K("tab");class Wn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn(),hn()),t.viewProps.bindClassModifiers(this.element),ue(t.empty,Te(this.element,sn(void 0,"nop")));const r=e.createElement("div");r.classList.add(sn("t")),this.element.appendChild(r),this.itemsElement=r;const m=e.createElement("div");m.classList.add(sn("i")),this.element.appendChild(m);const D=t.contentsElement;D.classList.add(sn("c")),this.element.appendChild(D),this.contentsElement=D}}class vn extends wt{constructor(e,t){const r=new Qe(e,{blade:t.blade,viewProps:t.viewProps}),m=new vr;super({blade:t.blade,rackController:r,view:new Wn(e,{contentsElement:r.view.element,empty:m.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ht(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=m}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;$(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;L(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const rn={id:"tab",type:"blade",accept(n){const e=xe,t=fe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new vn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const r=new bn(n.document,{itemProps:be.fromObject({selected:!1,title:t.title}),props:be.fromObject({selected:!1})});e.add(r)}),e},api(n){return n.controller instanceof vn?new Ot(n.controller,n.pool):null}};function gr(n,e){const t=n.accept(e.params);if(!t)return null;const r=xe.optional.boolean(e.params.disabled).value,m=xe.optional.boolean(e.params.hidden).value;return n.controller({blade:Ve(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r,hidden:m}),viewProps:p.create({disabled:r,hidden:m})})}class Tn{constructor(){this.disabled=!1,this.emitter=new O}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class wr{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new O,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ls{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new O,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Gs(n,e){for(;n.length<e;)n.push(void 0)}function zs(n){const e=[];return Gs(e,n),_e(e)}function Kn(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function fs(n,e){const t=[...Kn(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Gs(t,n.length),t}class Is{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new O,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,r=this.reader_(e);this.value.rawValue=fs(t,r),this.emitter.emit("update",{rawValue:r,sender:this})}onTick_(e){this.read()}}class Cn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function Ct(n,e){if(n instanceof e)return n;if(n instanceof Cn){const t=n.constraints.reduce((r,m)=>r||(m instanceof e?m:null),null);if(t)return t}return null}class an{constructor(e){this.values=be.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class Bn{constructor(e){this.values=be.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(m=>m.value===e).length>0?e:t[0].value}}class Fs{constructor(e){this.values=be.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let m=e;return G(r)||(m=Math.max(m,r)),G(t)||(m=Math.min(m,t)),m}}class jn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}const xt=K("lst");class xr{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(xt()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(xt("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const m=e.createElement("div");m.classList.add(xt("m")),m.appendChild(E(e,"dropdown")),this.element.appendChild(m),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,de(this.props_,"options",D=>{j(this.selectElement),D.forEach(H=>{const ge=e.createElement("option");ge.textContent=H.text,this.selectElement.appendChild(ge)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Mn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new xr(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Os=K("pop");class yr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Os()),t.viewProps.bindClassModifiers(this.element),ue(t.shows,Te(this.element,Os(void 0,"v")))}}class _s{constructor(e,t){this.shows=_e(!1),this.viewProps=t.viewProps,this.view=new yr(e,{shows:this.shows,viewProps:this.viewProps})}}const Hn=K("txt");class Vs{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hn()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(Hn("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class An{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Vs(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const r=e.currentTarget.value,m=this.parser_(r);G(m)||(this.value.rawValue=m),this.view.refresh()}}function ms(n){return String(n)}function bs(n){return n==="false"?!1:!!n}function Yn(n){return ms(n)}class $s{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Xn={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Pr{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=Xn[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ns={"+":n=>n,"-":n=>-n,"~":n=>~n};class on{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ns[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Yt(n){return(e,t)=>{for(let r=0;r<n.length;r++){const m=n[r](e,t);if(m!=="")return m}return""}}function Rn(n,e){var t;const r=n.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function B(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function W(n,e){var t;const r=n.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Q(n,e){const t=W(n,e);if(t!=="")return t;const r=n.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const m=W(n,e);return m===""?"":r+m}function oe(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=Q(n,e);return r===""?"":t+r}function ne(n,e){const t=n.substr(e,1);if(t==="0")return t;const r=B(n,e);return e+=r.length,r===""?"":r+W(n,e)}function he(n,e){const t=ne(n,e);if(e+=t.length,t==="")return"";const r=n.substr(e,1);if(e+=r.length,r!==".")return"";const m=W(n,e);return e+=m.length,t+r+m+oe(n,e)}function ce(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const r=W(n,e);return e+=r.length,r===""?"":t+r+oe(n,e)}function me(n,e){const t=ne(n,e);return e+=t.length,t===""?"":t+oe(n,e)}const Me=Yt([he,ce,me]);function Ge(n,e){var t;const r=n.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function He(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=Ge(n,e);return r===""?"":t+r}function Le(n,e){var t;const r=n.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Ke(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=Le(n,e);return r===""?"":t+r}function ft(n,e){var t;const r=n.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function qe(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=ft(n,e);return r===""?"":t+r}const gt=Yt([He,Ke,qe]),Fe=Yt([gt,Me]);function St(n,e){const t=Fe(n,e);return e+=t.length,t===""?null:{evaluable:new $s(t),cursor:e}}function Xt(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const r=Zt(n,e);if(!r)return null;e=r.cursor,e+=Rn(n,e).length;const m=n.substr(e,1);return e+=m.length,m!==")"?null:{evaluable:r.evaluable,cursor:e}}function Zn(n,e){var t;return(t=St(n,e))!==null&&t!==void 0?t:Xt(n,e)}function Ht(n,e){const t=Zn(n,e);if(t)return t;const r=n.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const m=Ht(n,e);return m?(e=m.cursor,{cursor:e,evaluable:new on(r,m.evaluable)}):null}function Bt(n,e,t){t+=Rn(e,t).length;const r=n.filter(m=>e.startsWith(m,t))[0];return r?(t+=r.length,t+=Rn(e,t).length,{cursor:t,operator:r}):null}function Un(n,e){return(t,r)=>{const m=n(t,r);if(!m)return null;r=m.cursor;let D=m.evaluable;for(;;){const H=Bt(e,t,r);if(!H)break;r=H.cursor;const ge=n(t,r);if(!ge)return null;r=ge.cursor,D=new Pr(H.operator,D,ge.evaluable)}return D?{cursor:r,evaluable:D}:null}}const Qn=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Un(n,e),Ht);function Zt(n,e){return e+=Rn(n,e).length,Qn(n,e)}function Jn(n){const e=Zt(n,0);return!e||e.cursor+Rn(n,e.cursor).length!==n.length?null:e.evaluable}function Lt(n){var e;const t=Jn(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function qs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Lt(n);if(!G(e))return e}return 0}function vs(n){return String(n)}function kt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const vo=kt(0);function Ws(n){return vo(n)+"%"}function mi(n){return String(n)}function Sr(n){return n}function gs({primary:n,secondary:e,forward:t,backward:r}){let m=!1;function D(H){m||(m=!0,H(),m=!1)}n.emitter.on("change",H=>{D(()=>{e.setRawValue(t(n,e),H.options)})}),e.emitter.on("change",H=>{D(()=>{n.setRawValue(r(n,e),H.options)}),D(()=>{e.setRawValue(t(n,e),H.options)})}),D(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Gt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function ws(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function ln(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function go(n){return n==="ArrowUp"||n==="ArrowDown"}function bi(n){return go(n)||n==="ArrowLeft"||n==="ArrowRight"}function Er(n,e){var t,r;const m=e.ownerDocument.defaultView,D=e.getBoundingClientRect();return{x:n.pageX-(((t=m&&m.scrollX)!==null&&t!==void 0?t:0)+D.left),y:n.pageY-(((r=m&&m.scrollY)!==null&&r!==void 0?r:0)+D.top)}}class Dn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new O,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Er(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Er(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Er(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,m=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-m.left,y:r.clientY-m.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function _t(n,e,t,r,m){const D=(n-e)/(t-e);return r+D*(m-r)}function vi(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Et(n,e,t){return Math.min(Math.max(n,e),t)}function gi(n,e){return(n%e+e)%e}const Nt=K("txt");class wo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Nt(),Nt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Nt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Nt("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Nt()),this.inputElement.classList.add(Nt("i"));const m=e.createElement("div");m.classList.add(Nt("k")),this.element.appendChild(m),this.knobElement=m;const D=e.createElementNS(A,"svg");D.classList.add(Nt("g")),this.knobElement.appendChild(D);const H=e.createElementNS(A,"path");H.classList.add(Nt("gb")),D.appendChild(H),this.guideBodyElem_=H;const ge=e.createElementNS(A,"path");ge.classList.add(Nt("gh")),D.appendChild(ge),this.guideHeadElem_=ge;const ze=e.createElement("div");ze.classList.add(K("tt")()),this.knobElement.appendChild(ze),this.tooltipElem_=ze,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Nt(void 0,"drg"));return}this.element.classList.add(Nt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),r=t+(t>0?-1:t<0?1:0),m=Et(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+m},0 L${r},4 L${r+m},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const D=this.props_.get("formatter");this.tooltipElem_.textContent=D(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class xs{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=_e(null),this.view=new wo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const m=new Dn(this.view.knobElement);m.emitter.on("down",this.onPointerDown_),m.emitter.on("move",this.onPointerMove_),m.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const m=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),D=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("maxValue");let H=e;return m!==void 0&&(H=Math.max(H,m)),D!==void 0&&(H=Math.min(H,D)),H}onInputChange_(e){const r=e.currentTarget.value,m=this.parser_(r);G(m)||(this.value.rawValue=this.constrainValue_(m)),this.view.refresh()}onInputKeyDown_(e){const t=Gt(this.baseStep_,ws(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Gt(this.baseStep_,ws(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const kr=K("sld");class xo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(kr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(kr("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const m=e.createElement("div");m.classList.add(kr("k")),this.trackElement.appendChild(m),this.knobElement=m,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=Et(_t(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new xo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(_t(Et(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Gt(this.baseStep_,ln(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Gt(this.baseStep_,ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Tr=K("sldtxt");class Po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tr());const r=e.createElement("div");r.classList.add(Tr("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(Tr("t")),this.textView_=t.textView,m.appendChild(this.textView_.element),this.element.appendChild(m)}}class Cr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new yo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new xs(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Po(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function ys(n,e){n.write(e)}function Ks(n){const e=xe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function wi(n){if(n==="inline"||n==="popup")return n}function gn(n){const e=xe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function xi(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Br(n){return G(n)?null:new Bn(xi(n))}function So(n){const e=n?Ct(n,jn):null;return e?e.step:null}function js(n,e){const t=n&&Ct(n,jn);return t?vi(t.step):Math.max(vi(e),2)}function es(n){const e=So(n);return e??1}function ts(n,e){var t;const r=n&&Ct(n,jn),m=Math.abs((t=r==null?void 0:r.step)!==null&&t!==void 0?t:e);return m===0?.1:Math.pow(10,Math.floor(Math.log10(m))-1)}const Hs=K("ckb");class Eo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(Hs("l")),this.element.appendChild(r);const m=e.createElement("input");m.classList.add(Hs("i")),m.type="checkbox",r.appendChild(m),this.inputElement=m,t.viewProps.bindDisabled(this.inputElement);const D=e.createElement("div");D.classList.add(Hs("w")),r.appendChild(D);const H=E(e,"check");D.appendChild(H),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class ko{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Eo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function To(n){const e=[],t=Br(n.options);return t&&e.push(t),new Cn(e)}const Co={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=fe(e,{options:xe.optional.custom(Ks)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>bs,constraint:n=>To(n.params),writer:n=>ys},controller:n=>{const e=n.document,t=n.value,r=n.constraint,m=r&&Ct(r,Bn);return m?new Mn(e,{props:new be({options:m.values.value("options")}),value:t,viewProps:n.viewProps}):new ko(e,{value:t,viewProps:n.viewProps})}},Ln=K("col");class Bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ln()),t.foldable.bindExpandedClass(this.element,Ln(void 0,"expanded")),de(t.foldable,"completed",Te(this.element,Ln(void 0,"cpl")));const r=e.createElement("div");r.classList.add(Ln("h")),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(Ln("s")),r.appendChild(m),this.swatchElement=m;const D=e.createElement("div");if(D.classList.add(Ln("t")),r.appendChild(D),this.textElement=D,t.pickerLayout==="inline"){const H=e.createElement("div");H.classList.add(Ln("p")),this.element.appendChild(H),this.pickerElement=H}else this.pickerElement=null}}function Mo(n,e,t){const r=Et(n/255,0,1),m=Et(e/255,0,1),D=Et(t/255,0,1),H=Math.max(r,m,D),ge=Math.min(r,m,D),ze=H-ge;let Oe=0,st=0;const ot=(ge+H)/2;return ze!==0&&(st=ze/(1-Math.abs(H+ge-1)),r===H?Oe=(m-D)/ze:m===H?Oe=2+(D-r)/ze:Oe=4+(r-m)/ze,Oe=Oe/6+(Oe<0?1:0)),[Oe*360,st*100,ot*100]}function Ao(n,e,t){const r=(n%360+360)%360,m=Et(e/100,0,1),D=Et(t/100,0,1),H=(1-Math.abs(2*D-1))*m,ge=H*(1-Math.abs(r/60%2-1)),ze=D-H/2;let Oe,st,ot;return r>=0&&r<60?[Oe,st,ot]=[H,ge,0]:r>=60&&r<120?[Oe,st,ot]=[ge,H,0]:r>=120&&r<180?[Oe,st,ot]=[0,H,ge]:r>=180&&r<240?[Oe,st,ot]=[0,ge,H]:r>=240&&r<300?[Oe,st,ot]=[ge,0,H]:[Oe,st,ot]=[H,0,ge],[(Oe+ze)*255,(st+ze)*255,(ot+ze)*255]}function Ro(n,e,t){const r=Et(n/255,0,1),m=Et(e/255,0,1),D=Et(t/255,0,1),H=Math.max(r,m,D),ge=Math.min(r,m,D),ze=H-ge;let Oe;ze===0?Oe=0:H===r?Oe=60*(((m-D)/ze%6+6)%6):H===m?Oe=60*((D-r)/ze+2):Oe=60*((r-m)/ze+4);const st=H===0?0:ze/H,ot=H;return[Oe,st*100,ot*100]}function yi(n,e,t){const r=gi(n,360),m=Et(e/100,0,1),D=Et(t/100,0,1),H=D*m,ge=H*(1-Math.abs(r/60%2-1)),ze=D-H;let Oe,st,ot;return r>=0&&r<60?[Oe,st,ot]=[H,ge,0]:r>=60&&r<120?[Oe,st,ot]=[ge,H,0]:r>=120&&r<180?[Oe,st,ot]=[0,H,ge]:r>=180&&r<240?[Oe,st,ot]=[0,ge,H]:r>=240&&r<300?[Oe,st,ot]=[ge,0,H]:[Oe,st,ot]=[H,0,ge],[(Oe+ze)*255,(st+ze)*255,(ot+ze)*255]}function Uo(n,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[n,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Do(n,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[n,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function Gn(n){return[n[0],n[1],n[2]]}function Pi(n,e){return[n[0],n[1],n[2],e]}const Lo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Uo,rgb:Ao},hsv:{hsl:Do,hsv:(n,e,t)=>[n,e,t],rgb:yi},rgb:{hsl:Mo,hsv:Ro,rgb:(n,e,t)=>[n,e,t]}};function Ys(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Go(n,e){return n===e?e:gi(n,e)}function zo(n,e,t){var r;const m=Ys(e,t);return[e==="rgb"?Et(n[0],0,m[0]):Go(n[0],m[0]),Et(n[1],0,m[1]),Et(n[2],0,m[2]),Et((r=n[3])!==null&&r!==void 0?r:1,0,1)]}function Si(n,e,t,r){const m=Ys(e,t),D=Ys(e,r);return n.map((H,ge)=>H/m[ge]*D[ge])}function Io(n,e,t){const r=Si(n,e.mode,e.type,"int"),m=Lo[e.mode][t.mode](...r);return Si(m,t.mode,"int",t.type)}function Xs(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Ye{static black(e="int"){return new Ye([0,0,0],"rgb",e)}static fromObject(e,t="int"){const r="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ye(r,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Xs(e,"r")&&Xs(e,"g")&&Xs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Xs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const r=e.comps_,m=t.comps_;for(let D=0;D<r.length;D++)if(r[D]!==m[D])return!1;return!0}constructor(e,t,r="int"){this.mode=t,this.type=r,this.comps_=zo(e,t,r)}getComponents(e,t="int"){return Pi(Io(Gn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const wn=K("colp");class Fo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(wn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(wn("hsv"));const m=e.createElement("div");m.classList.add(wn("sv")),this.svPaletteView_=t.svPaletteView,m.appendChild(this.svPaletteView_.element),r.appendChild(m);const D=e.createElement("div");D.classList.add(wn("h")),this.hPaletteView_=t.hPaletteView,D.appendChild(this.hPaletteView_.element),r.appendChild(D),this.element.appendChild(r);const H=e.createElement("div");if(H.classList.add(wn("rgb")),this.textView_=t.textView,H.appendChild(this.textView_.element),this.element.appendChild(H),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ge=e.createElement("div");ge.classList.add(wn("a"));const ze=e.createElement("div");ze.classList.add(wn("ap")),ze.appendChild(this.alphaViews_.palette.element),ge.appendChild(ze);const Oe=e.createElement("div");Oe.classList.add(wn("at")),Oe.appendChild(this.alphaViews_.text.element),ge.appendChild(Oe),this.element.appendChild(ge)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Oo(n){return n==="int"?"int":n==="float"?"float":void 0}function Mr(n){const e=xe;return fe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Oo)}),expanded:e.optional.boolean,picker:e.optional.custom(wi)})}function zn(n){return n?.1:1}function In(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Vo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function qt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const $o={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ei(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),r=e[2];return $o[r](t)}function ki(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[qt(e[1],255),qt(e[2],255),qt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ti(n){return e=>{const t=ki(e);return t?new Ye(t,"rgb",n):null}}function Ci(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[qt(e[1],255),qt(e[2],255),qt(e[3],255),qt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Bi(n){return e=>{const t=Ci(e);return t?new Ye(t,"rgb",n):null}}function Mi(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ei(e[1]),qt(e[2],100),qt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ai(n){return e=>{const t=Mi(e);return t?new Ye(t,"hsl",n):null}}function Ri(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ei(e[1]),qt(e[2],100),qt(e[3],100),qt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ui(n){return e=>{const t=Ri(e);return t?new Ye(t,"hsl",n):null}}function Di(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function No(n){const e=Di(n);return e?new Ye(e,"rgb","int"):null}function Li(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),_t(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),_t(parseInt(t[4],16),0,255,0,1)]:null}function qo(n){const e=Li(n);return e?new Ye(e,"rgb","int"):null}function Gi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function zi(n){return e=>{const t=Gi(e);return t?new Ye(t,"rgb",n):null}}function Ii(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Fi(n){return e=>{const t=Ii(e);return t?new Ye(t,"rgb",n):null}}const Wo=[{parser:Di,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Li,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ki,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ci,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Mi,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Ri,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Gi,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ii,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ko(n){return Wo.reduce((e,{parser:t,result:r})=>e||(t(n)?r:null),null)}function Ar(n,e="int"){const t=Ko(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Oi={int:[No,qo,Ti("int"),Bi("int"),Ai("int"),Ui("int"),zi("int"),Fi("int")],float:[Ti("float"),Bi("float"),Ai("float"),Ui("float"),zi("float"),Fi("float")]};function jo(n){const e=Oi[n];return t=>{if(typeof t!="string")return Ye.black(n);const r=e.reduce((m,D)=>m||D(t),null);return r??Ye.black(n)}}function Rr(n){const e=Oi[n];return t=>e.reduce((r,m)=>r||m(t),null)}function Vi(n){const e=Et(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function $i(n,e="#"){const t=Gn(n.getComponents("rgb")).map(Vi).join("");return`${e}${t}`}function Ur(n,e="#"){const t=n.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(Vi).join("");return`${e}${r}`}function Ni(n,e){const t=kt(e==="float"?2:0);return`rgb(${Gn(n.getComponents("rgb",e)).map(m=>t(m)).join(", ")})`}function Ho(n){return e=>Ni(e,n)}function Zs(n,e){const t=kt(2),r=kt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((D,H)=>(H===3?t:r)(D)).join(", ")})`}function Yo(n){return e=>Zs(e,n)}function Xo(n){const e=[kt(0),Ws,Ws];return`hsl(${Gn(n.getComponents("hsl")).map((r,m)=>e[m](r)).join(", ")})`}function Zo(n){const e=[kt(0),Ws,Ws,kt(2)];return`hsla(${n.getComponents("hsl").map((r,m)=>e[m](r)).join(", ")})`}function qi(n,e){const t=kt(e==="float"?2:0),r=["r","g","b"];return`{${Gn(n.getComponents("rgb",e)).map((D,H)=>`${r[H]}: ${t(D)}`).join(", ")}}`}function Qo(n){return e=>qi(e,n)}function Wi(n,e){const t=kt(2),r=kt(e==="float"?2:0),m=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((H,ge)=>{const ze=ge===3?t:r;return`${m[ge]}: ${ze(H)}`}).join(", ")}}`}function Jo(n){return e=>Wi(e,n)}const el=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:$i},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ur},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Xo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Zo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Ho(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Yo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Qo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Jo(e)}],[])];function Dr(n){return el.reduce((e,t)=>e||(Vo(t.format,n)?t.stringifier:null),null)}const Ps=K("apl");class tl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ps()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(Ps("b")),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(Ps("c")),r.appendChild(m),this.colorElem_=m;const D=e.createElement("div");D.classList.add(Ps("m")),this.element.appendChild(D),this.markerElem_=D;const H=e.createElement("div");H.classList.add(Ps("p")),this.markerElem_.appendChild(H),this.previewElem_=H,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new Ye([t[0],t[1],t[2],0],"rgb"),m=new Ye([t[0],t[1],t[2],255],"rgb"),D=["to right",Zs(r),Zs(m)];this.colorElem_.style.background=`linear-gradient(${D.join(",")})`,this.previewElem_.style.backgroundColor=Zs(e);const H=_t(t[3],0,1,0,100);this.markerElem_.style.left=`${H}%`}onValueChange_(){this.update_()}}class nl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new tl(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,m=this.value.rawValue,[D,H,ge]=m.getComponents("hsv");this.value.setRawValue(new Ye([D,H,ge,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Gt(zn(!0),ln(e));if(t===0)return;const r=this.value.rawValue,[m,D,H,ge]=r.getComponents("hsv");this.value.setRawValue(new Ye([m,D,H,ge+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Gt(zn(!0),ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ns=K("coltxt");function sl(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((r,m)=>{const D=n.createElement("option");return D.textContent=m.text,D.value=m.value,r.appendChild(D),r},n.createDocumentFragment())),e}class rl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ns()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ns("m")),this.modeElem_=sl(e),this.modeElem_.classList.add(ns("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const m=e.createElement("div");m.classList.add(ns("mm")),m.appendChild(E(e,"dropdown")),r.appendChild(m),this.element.appendChild(r);const D=e.createElement("div");D.classList.add(ns("w")),this.element.appendChild(D),this.textsElem_=D,this.textViews_=t.textViews,this.applyTextViews_(),ue(t.colorMode,H=>{this.modeElem_.value=H})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){j(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(ns("c")),r.appendChild(t.element),this.textsElem_.appendChild(r)})}}function il(n){return kt(n==="float"?2:0)}function al(n,e,t){const r=Ys(n,e)[t];return new an({min:0,max:r})}function Lr(n,e,t){return new xs(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:zn(!1),parser:e.parser,props:be.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:il(e.colorType)}),value:_e(0,{constraint:al(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ol{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=_e(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new rl(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},r=[Lr(e,t,0),Lr(e,t,1),Lr(e,t,2)];return r.forEach((m,D)=>{gs({primary:this.value,secondary:m.value,forward:H=>H.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[D],backward:(H,ge)=>{const ze=this.colorMode.rawValue,Oe=H.rawValue.getComponents(ze,this.colorType_);return Oe[D]=ge.rawValue,new Ye(Pi(Gn(Oe),Oe[3]),ze,this.colorType_)}})}),r}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Gr=K("hpl");class ll{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Gr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(Gr("c")),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(Gr("m")),this.element.appendChild(m),this.markerElem_=m,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Ni(new Ye([t,100,100],"hsv"));const r=_t(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class cl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ll(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=_t(Et(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),m=this.value.rawValue,[,D,H,ge]=m.getComponents("hsv");this.value.setRawValue(new Ye([r,D,H,ge],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Gt(zn(!1),ln(e));if(t===0)return;const r=this.value.rawValue,[m,D,H,ge]=r.getComponents("hsv");this.value.setRawValue(new Ye([m+t,D,H,ge],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Gt(zn(!1),ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const zr=K("svp"),Ki=64;class ul{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(zr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=Ki,r.width=Ki,r.classList.add(zr("c")),this.element.appendChild(r),this.canvasElement=r;const m=e.createElement("div");m.classList.add(zr("m")),this.element.appendChild(m),this.markerElem_=m,this.update_()}update_(){const e=g(this.canvasElement);if(!e)return;const r=this.value.rawValue.getComponents("hsv"),m=this.canvasElement.width,D=this.canvasElement.height,H=e.getImageData(0,0,m,D),ge=H.data;for(let st=0;st<D;st++)for(let ot=0;ot<m;ot++){const Fn=_t(ot,0,m,0,100),Es=_t(st,0,D,100,0),ks=yi(r[0],Fn,Es),Qs=(st*m+ot)*4;ge[Qs]=ks[0],ge[Qs+1]=ks[1],ge[Qs+2]=ks[2],ge[Qs+3]=255}e.putImageData(H,0,0);const ze=_t(r[1],0,100,0,100);this.markerElem_.style.left=`${ze}%`;const Oe=_t(r[2],0,100,100,0);this.markerElem_.style.top=`${Oe}%`}onValueChange_(){this.update_()}}class dl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ul(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=_t(e.point.x,0,e.bounds.width,0,100),m=_t(e.point.y,0,e.bounds.height,100,0),[D,,,H]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ye([D,r,m,H],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){bi(e.key)&&e.preventDefault();const[t,r,m,D]=this.value.rawValue.getComponents("hsv"),H=zn(!1),ge=Gt(H,ln(e)),ze=Gt(H,ws(e));ge===0&&ze===0||this.value.setRawValue(new Ye([t,r+ge,m+ze,D],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=zn(!1),r=Gt(t,ln(e)),m=Gt(t,ws(e));r===0&&m===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class pl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new cl(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new dl(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new nl(e,{value:this.value,viewProps:this.viewProps}),text:new xs(e,{parser:Lt,baseStep:.1,props:be.fromObject({draggingScale:.01,formatter:kt(2)}),value:_e(0,{constraint:new an({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&gs({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.rawValue.getComponents()[3],backward:(r,m)=>{const D=r.rawValue.getComponents();return D[3]=m.rawValue,new Ye(D,r.rawValue.mode)}}),this.textC_=new ol(e,{colorType:t.colorType,parser:Lt,value:this.value,viewProps:this.viewProps}),this.view=new Fo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ir=K("colsw");class hl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ir()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Ir("sw")),this.element.appendChild(r),this.swatchElem_=r;const m=e.createElement("button");m.classList.add(Ir("b")),t.viewProps.bindDisabled(m),this.element.appendChild(m),this.buttonElement=m,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ur(e)}onValueChange_(){this.update_()}}class fl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new hl(e,{value:this.value,viewProps:this.viewProps})}}class Fr{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=rt.create(t.expanded),this.swatchC_=new fl(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new An(e,{parser:t.parser,props:be.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Bo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new _s(e,{viewProps:this.viewProps}):null;const m=new pl(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});m.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=m,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(m.view.element),gs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,H)=>H.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),it(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=ie(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!f(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function _l(n,e){return Ye.isColorObject(n)?Ye.fromObject(n,e):Ye.black(e)}function ml(n){return Gn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function bl(n){return n.getComponents("rgb").reduce((e,t,r)=>{const m=Math.floor(r===3?t*255:t)&255;return e<<8|m},0)>>>0}function vl(n){return new Ye([n>>16&255,n>>8&255,n&255],"rgb")}function gl(n){return new Ye([n>>24&255,n>>16&255,n>>8&255,_t(n&255,0,255,0,1)],"rgb")}function wl(n){return typeof n!="number"?Ye.black():vl(n)}function xl(n){return typeof n!="number"?Ye.black():gl(n)}function yl(n){const e=Dr(n);return e?(t,r)=>{ys(t,e(r))}:null}function Pl(n){const e=n?bl:ml;return(t,r)=>{ys(t,e(r))}}function Sl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function El(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function kl(n,e){return(t,r)=>{n?Sl(t,r,e):El(t,r,e)}}function Or(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Tl(n){return n?e=>Ur(e,"0x"):e=>$i(e,"0x")}function Cl(n){return"color"in n||"view"in n&&n.view==="color"}const Bl={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Cl(e))return null;const t=Mr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Or(n.params)?xl:wl,equals:Ye.equals,writer:n=>Pl(Or(n.params))},controller:n=>{const e=Or(n.params),t="expanded"in n.params?n.params.expanded:void 0,r="picker"in n.params?n.params.picker:void 0;return new Fr(n.document,{colorType:"int",expanded:t??!1,formatter:Tl(e),parser:Rr("int"),pickerLayout:r??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Ml(n){return Ye.isRgbaColorObject(n)}function Al(n){return e=>_l(e,n)}function Rl(n,e){return t=>n?Wi(t,e):qi(t,e)}const Ul={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ye.isColorObject(n))return null;const t=Mr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Al(In(n.params)),equals:Ye.equals,writer:n=>kl(Ml(n.initialValue),In(n.params))},controller:n=>{var e;const t=Ye.isRgbaColorObject(n.initialValue),r="expanded"in n.params?n.params.expanded:void 0,m="picker"in n.params?n.params.picker:void 0,D=(e=In(n.params))!==null&&e!==void 0?e:"int";return new Fr(n.document,{colorType:D,expanded:r??!1,formatter:Rl(t,D),parser:Rr(D),pickerLayout:m??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Dl={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ar(n,In(e));if(!t||!Dr(t))return null;const m=Mr(e);return m?{initialValue:n,params:m}:null},binding:{reader:n=>{var e;return jo((e=In(n.params))!==null&&e!==void 0?e:"int")},equals:Ye.equals,writer:n=>{const e=Ar(n.initialValue,In(n.params));if(!e)throw R.shouldNeverHappen();const t=yl(e);if(!t)throw R.notBindable();return t}},controller:n=>{const e=Ar(n.initialValue,In(n.params));if(!e)throw R.shouldNeverHappen();const t=Dr(e);if(!t)throw R.shouldNeverHappen();const r="expanded"in n.params?n.params.expanded:void 0,m="picker"in n.params?n.params.picker:void 0;return new Fr(n.document,{colorType:e.type,expanded:r??!1,formatter:t,parser:Rr(e.type),pickerLayout:m??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class xn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,m)=>{var D,H;return(H=(D=this.components[m])===null||D===void 0?void 0:D.constrain(r))!==null&&H!==void 0?H:r});return this.asm_.fromComponents(t)}}const ji=K("pndtxt");class Ll{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(ji()),this.textViews.forEach(r=>{const m=e.createElement("div");m.classList.add(ji("a")),m.appendChild(r.element),this.element.appendChild(m)})}}function Gl(n,e,t){return new xs(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:_e(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Vr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,m)=>Gl(e,t,m)),this.acs_.forEach((r,m)=>{gs({primary:this.value,secondary:r.value,forward:D=>t.assembly.toComponents(D.rawValue)[m],backward:(D,H)=>{const ge=t.assembly.toComponents(D.rawValue);return ge[m]=H.rawValue,t.assembly.fromComponents(ge)}})}),this.view=new Ll(e,{textViews:this.acs_.map(r=>r.view)})}}function Hi(n,e){return"step"in n&&!G(n.step)?new jn(n.step,e):null}function Yi(n){return!G(n.max)&&!G(n.min)?new an({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Fs({max:n.max,min:n.min}):null}function zl(n){const e=Ct(n,an);if(e)return[e.values.get("min"),e.values.get("max")];const t=Ct(n,Fs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Il(n,e){const t=[],r=Hi(n,e);r&&t.push(r);const m=Yi(n);m&&t.push(m);const D=Br(n.options);return D&&t.push(D),new Cn(t)}const Fl={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,r=fe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Ks),step:t.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>qs,constraint:n=>Il(n.params,n.initialValue),writer:n=>ys},controller:n=>{var e;const t=n.value,r=n.constraint,m=r&&Ct(r,Bn);if(m)return new Mn(n.document,{props:new be({options:m.values.value("options")}),value:t,viewProps:n.viewProps});const D=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:kt(js(r,t.rawValue)),H=r&&Ct(r,an);return H?new Cr(n.document,{baseStep:es(r),parser:Lt,sliderProps:new be({maxValue:H.values.value("max"),minValue:H.values.value("min")}),textProps:be.fromObject({draggingScale:ts(r,t.rawValue),formatter:D}),value:t,viewProps:n.viewProps}):new xs(n.document,{baseStep:es(r),parser:Lt,props:be.fromObject({draggingScale:ts(r,t.rawValue),formatter:D}),value:t,viewProps:n.viewProps})}};class yn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Xi={toComponents:n=>n.getComponents(),fromComponents:n=>new yn(...n)},ss=K("p2d");class Ol{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ss()),t.viewProps.bindClassModifiers(this.element),ue(t.expanded,Te(this.element,ss(void 0,"expanded")));const r=e.createElement("div");r.classList.add(ss("h")),this.element.appendChild(r);const m=e.createElement("button");m.classList.add(ss("b")),m.appendChild(E(e,"p2dpad")),t.viewProps.bindDisabled(m),r.appendChild(m),this.buttonElement=m;const D=e.createElement("div");if(D.classList.add(ss("t")),r.appendChild(D),this.textElement=D,t.pickerLayout==="inline"){const H=e.createElement("div");H.classList.add(ss("p")),this.element.appendChild(H),this.pickerElement=H}else this.pickerElement=null}}const Pn=K("p2dp");class Vl{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Pn()),t.layout==="popup"&&this.element.classList.add(Pn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Pn("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const m=e.createElementNS(A,"svg");m.classList.add(Pn("g")),this.padElement.appendChild(m),this.svgElem_=m;const D=e.createElementNS(A,"line");D.classList.add(Pn("ax")),D.setAttributeNS(null,"x1","0"),D.setAttributeNS(null,"y1","50%"),D.setAttributeNS(null,"x2","100%"),D.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(D);const H=e.createElementNS(A,"line");H.classList.add(Pn("ax")),H.setAttributeNS(null,"x1","50%"),H.setAttributeNS(null,"y1","0"),H.setAttributeNS(null,"x2","50%"),H.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(H);const ge=e.createElementNS(A,"line");ge.classList.add(Pn("l")),ge.setAttributeNS(null,"x1","50%"),ge.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ge),this.lineElem_=ge;const ze=e.createElement("div");ze.classList.add(Pn("m")),this.padElement.appendChild(ze),this.markerElem_=ze,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.maxValue_,m=_t(e,-r,+r,0,100),D=_t(t,-r,+r,0,100),H=this.invertsY_?100-D:D;this.lineElem_.setAttributeNS(null,"x2",`${m}%`),this.lineElem_.setAttributeNS(null,"y2",`${H}%`),this.markerElem_.style.left=`${m}%`,this.markerElem_.style.top=`${H}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Zi(n,e,t){return[Gt(e[0],ln(n)),Gt(e[1],ws(n))*(t?1:-1)]}class $l{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Vl(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.maxValue_,m=_t(e.point.x,0,e.bounds.width,-r,+r),D=_t(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new yn(m,D),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){bi(e.key)&&e.preventDefault();const[t,r]=Zi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(new yn(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=Zi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Nl{constructor(e,t){var r,m;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=rt.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new _s(e,{viewProps:this.viewProps}):null;const D=new $l(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});D.view.allFocusableElements.forEach(H=>{H.addEventListener("blur",this.onPopupChildBlur_),H.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=D,this.textC_=new Vr(e,{assembly:Xi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ol(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(m=this.view.buttonElement)===null||m===void 0||m.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),gs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:H=>H.rawValue,backward:(H,ge)=>ge.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),it(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=ie(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!f(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class rs{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,r=e.y,m=e.z;return!(typeof t!="number"||typeof r!="number"||typeof m!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Qi={toComponents:n=>n.getComponents(),fromComponents:n=>new rs(...n)};function ql(n){return rs.isObject(n)?new rs(n.x,n.y,n.z):new rs}function Wl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Kl(n,e){return new xn({assembly:Qi,components:[cn("x"in n?n.x:void 0,e.x),cn("y"in n?n.y:void 0,e.y),cn("z"in n?n.z:void 0,e.z)]})}function $r(n,e){return{baseStep:es(e),constraint:e,textProps:be.fromObject({draggingScale:ts(e,n),formatter:kt(js(e,n))})}}const jl={id:"input-point3d",type:"input",accept:(n,e)=>{if(!rs.isObject(n))return null;const t=xe,r=fe(e,{x:t.optional.custom(gn),y:t.optional.custom(gn),z:t.optional.custom(gn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ql,constraint:n=>Kl(n.params,n.initialValue),equals:rs.equals,writer:n=>Wl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof xn))throw R.shouldNeverHappen();return new Vr(n.document,{assembly:Qi,axes:[$r(e.rawValue.x,t.components[0]),$r(e.rawValue.y,t.components[1]),$r(e.rawValue.z,t.components[2])],parser:Lt,value:e,viewProps:n.viewProps})}};class is{constructor(e=0,t=0,r=0,m=0){this.x=e,this.y=t,this.z=r,this.w=m}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,r=e.y,m=e.z,D=e.w;return!(typeof t!="number"||typeof r!="number"||typeof m!="number"||typeof D!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ji={toComponents:n=>n.getComponents(),fromComponents:n=>new is(...n)};function Hl(n){return is.isObject(n)?new is(n.x,n.y,n.z,n.w):new is}function Yl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Xl(n,e){return new xn({assembly:Ji,components:[cn("x"in n?n.x:void 0,e.x),cn("y"in n?n.y:void 0,e.y),cn("z"in n?n.z:void 0,e.z),cn("w"in n?n.w:void 0,e.w)]})}function Zl(n,e){return{baseStep:es(e),constraint:e,textProps:be.fromObject({draggingScale:ts(e,n),formatter:kt(js(e,n))})}}const Ql={id:"input-point4d",type:"input",accept:(n,e)=>{if(!is.isObject(n))return null;const t=xe,r=fe(e,{x:t.optional.custom(gn),y:t.optional.custom(gn),z:t.optional.custom(gn),w:t.optional.custom(gn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Hl,constraint:n=>Xl(n.params,n.initialValue),equals:is.equals,writer:n=>Yl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof xn))throw R.shouldNeverHappen();return new Vr(n.document,{assembly:Ji,axes:e.rawValue.getComponents().map((r,m)=>Zl(r,t.components[m])),parser:Lt,value:e,viewProps:n.viewProps})}};function Jl(n){const e=[],t=Br(n.options);return t&&e.push(t),new Cn(e)}const ec={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const r=fe(e,{options:xe.optional.custom(Ks)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>mi,constraint:n=>Jl(n.params),writer:n=>ys},controller:n=>{const e=n.document,t=n.value,r=n.constraint,m=r&&Ct(r,Bn);return m?new Mn(e,{props:new be({options:m.values.value("options")}),value:t,viewProps:n.viewProps}):new An(e,{parser:D=>D,props:be.fromObject({formatter:Sr}),value:t,viewProps:n.viewProps})}},Ss={monitor:{defaultInterval:200,defaultLineCount:3}},ea=K("mll");class tc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ea()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(ea("i")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(m=>{m!==void 0&&r.push(this.formatter_(m))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Nr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new tc(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const ta=K("sgl");class nc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ta()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(ta("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class qr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new nc(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const sc={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=fe(e,{lineCount:xe.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>bs},controller:n=>{var e;return n.value.rawValue.length===1?new qr(n.document,{formatter:Yn,value:n.value,viewProps:n.viewProps}):new Nr(n.document,{formatter:Yn,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ss.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Sn=K("grl");class rc{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Sn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(A,"svg");r.classList.add(Sn("g")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(r),this.svgElem_=r;const m=e.createElementNS(A,"polyline");this.svgElem_.appendChild(m),this.lineElem_=m;const D=e.createElement("div");D.classList.add(Sn("t"),K("tt")()),this.element.appendChild(D),this.tooltipElem_=D,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,r=this.props_.get("minValue"),m=this.props_.get("maxValue"),D=[];this.value.rawValue.forEach((st,ot)=>{if(st===void 0)return;const Fn=_t(ot,0,t,0,e.width),Es=_t(st,r,m,e.height,0);D.push([Fn,Es].join(","))}),this.lineElem_.setAttributeNS(null,"points",D.join(" "));const H=this.tooltipElem_,ge=this.value.rawValue[this.cursor_.rawValue];if(ge===void 0){H.classList.remove(Sn("t","a"));return}const ze=_t(this.cursor_.rawValue,0,t,0,e.width),Oe=_t(ge,r,m,e.height,0);H.style.left=`${ze}px`,H.style.top=`${Oe}px`,H.textContent=`${this.formatter_(ge)}`,H.classList.contains(Sn("t","a"))||(H.classList.add(Sn("t","a"),Sn("t","in")),o(H),H.classList.remove(Sn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class ic{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=_e(-1),this.view=new rc(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!f(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new Dn(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(_t(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(_t(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Wr(n){return"format"in n&&!G(n.format)?n.format:kt(2)}function ac(n){var e;return n.value.rawValue.length===1?new qr(n.document,{formatter:Wr(n.params),value:n.value,viewProps:n.viewProps}):new Nr(n.document,{formatter:Wr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ss.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function oc(n){var e,t,r;return new ic(n.document,{formatter:Wr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ss.monitor.defaultLineCount,props:be.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(r="min"in n.params?n.params.min:null)!==null&&r!==void 0?r:0}),value:n.value,viewProps:n.viewProps})}function na(n){return"view"in n&&n.view==="graph"}const lc={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,r=fe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return r?{initialValue:n,params:r}:null},binding:{defaultBufferSize:n=>na(n)?64:1,reader:n=>qs},controller:n=>na(n.params)?oc(n):ac(n)},cc={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=xe,r=fe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return r?{initialValue:n,params:r}:null},binding:{reader:n=>mi},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Nr(n.document,{formatter:Sr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ss.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new qr(n.document,{formatter:Sr,value:t,viewProps:n.viewProps})}};function uc(n,e){var t;const r=n.accept(e.target.read(),e.params);if(G(r))return null;const m=xe,D={target:e.target,initialValue:r.initialValue,params:r.params},H=n.binding.reader(D),ge=n.binding.constraint?n.binding.constraint(D):void 0,ze=_e(H(r.initialValue),{constraint:ge,equals:n.binding.equals}),Oe=new Ls({reader:H,target:e.target,value:ze,writer:n.binding.writer(D)}),st=m.optional.boolean(e.params.disabled).value,ot=m.optional.boolean(e.params.hidden).value,Fn=n.controller({constraint:ge,document:e.document,initialValue:r.initialValue,params:r.params,value:Oe.value,viewProps:p.create({disabled:st,hidden:ot})});return new at(e.document,{binding:Oe,blade:Ve(),props:be.fromObject({label:"label"in e.params?(t=m.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Fn})}function dc(n,e){return e===0?new Tn:new wr(n,e??Ss.monitor.defaultInterval)}function pc(n,e){var t,r,m;const D=xe,H=n.accept(e.target.read(),e.params);if(G(H))return null;const ge={target:e.target,initialValue:H.initialValue,params:H.params},ze=n.binding.reader(ge),Oe=(r=(t=D.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(H.params))!==null&&r!==void 0?r:1,st=D.optional.number(e.params.interval).value,ot=new Is({reader:ze,target:e.target,ticker:dc(e.document,st),value:zs(Oe)}),Fn=D.optional.boolean(e.params.disabled).value,Es=D.optional.boolean(e.params.hidden).value,ks=n.controller({document:e.document,params:H.params,value:ot.value,viewProps:p.create({disabled:Fn,hidden:Es})});return new dt(e.document,{binding:ot,blade:Ve(),props:be.fromObject({label:"label"in e.params?(m=D.optional.string(e.params.label).value)!==null&&m!==void 0?m:null:e.target.key}),valueController:ks})}class hc{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,r){const m=t.read();if(G(m))throw new R({context:{key:t.key},type:"nomatchingcontroller"});const D=this.pluginsMap_.inputs.reduce((H,ge)=>H??uc(ge,{document:e,target:t,params:r}),null);if(D)return D;throw new R({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,r){const m=this.pluginsMap_.monitors.reduce((D,H)=>D??pc(H,{document:e,params:r,target:t}),null);if(m)return m;throw new R({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((m,D)=>m??gr(D,{document:e,params:t}),null);if(!r)throw new R({type:"nomatchingview",context:{params:t}});return r}createBladeApi(e){if(e instanceof at)return new nt(e);if(e instanceof dt)return new lt(e);if(e instanceof Qe)return new vt(e,this);const t=this.pluginsMap_.blades.reduce((r,m)=>r??m.api({controller:e,pool:this}),null);if(!t)throw R.shouldNeverHappen();return t}}function fc(){const n=new hc;return[wc,jl,Ql,ec,Fl,Dl,Ul,Bl,Co,sc,cc,lc,ke,fn,qn,rn].forEach(e=>{n.register(e)}),n}function _c(n){return yn.isObject(n)?new yn(n.x,n.y):new yn}function mc(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function cn(n,e){if(!n)return;const t=[],r=Hi(n,e);r&&t.push(r);const m=Yi(n);return m&&t.push(m),new Cn(t)}function bc(n,e){return new xn({assembly:Xi,components:[cn("x"in n?n.x:void 0,e.x),cn("y"in n?n.y:void 0,e.y)]})}function sa(n,e){const[t,r]=n?zl(n):[];if(!G(t)||!G(r))return Math.max(Math.abs(t??0),Math.abs(r??0));const m=es(n);return Math.max(Math.abs(m)*10,Math.abs(e)*10)}function vc(n,e){const t=e instanceof xn?e.components[0]:void 0,r=e instanceof xn?e.components[1]:void 0,m=sa(t,n.x),D=sa(r,n.y);return Math.max(m,D)}function ra(n,e){return{baseStep:es(e),constraint:e,textProps:be.fromObject({draggingScale:ts(e,n),formatter:kt(js(e,n))})}}function gc(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const wc={id:"input-point2d",type:"input",accept:(n,e)=>{if(!yn.isObject(n))return null;const t=xe,r=fe(e,{expanded:t.optional.boolean,picker:t.optional.custom(wi),x:t.optional.custom(gn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return r?{initialValue:n,params:r}:null},binding:{reader:n=>_c,constraint:n=>bc(n.params,n.initialValue),equals:yn.equals,writer:n=>mc},controller:n=>{const e=n.document,t=n.value,r=n.constraint;if(!(r instanceof xn))throw R.shouldNeverHappen();const m="expanded"in n.params?n.params.expanded:void 0,D="picker"in n.params?n.params.picker:void 0;return new Nl(e,{axes:[ra(t.rawValue.x,r.components[0]),ra(t.rawValue.y,r.components[1])],expanded:m??!1,invertsY:gc(n.params),maxValue:vc(t.rawValue,r),parser:Lt,pickerLayout:D??"popup",value:t,viewProps:n.viewProps})}};class ia extends l{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}class aa extends l{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}class oa extends l{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}const xc=function(){return{id:"list",type:"blade",accept(n){const e=xe,t=fe(n,{options:e.required.custom(Ks),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Bn(xi(n.params.options)),t=_e(n.params.value,{constraint:e}),r=new Mn(n.document,{props:new be({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:be.fromObject({label:n.params.label}),valueController:r})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof Mn)?null:new ia(n.controller)}}}();function yc(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Pc(n,e){n.forEach(t=>{const r=e[t.target.presetKey];r!==void 0&&t.writer(t.target,t.reader(r))})}class Sc extends Rt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(at).map(r=>r.binding);Pc(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(at).map(t=>t.binding.target);return yc(e)}refresh(){this.controller_.rackController.rack.find(at).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(dt).forEach(e=>{e.binding.read()})}}class Ec extends en{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const kc={id:"slider",type:"blade",accept(n){const e=xe,t=fe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const r=(e=n.params.value)!==null&&e!==void 0?e:0,m=new an({max:n.params.max,min:n.params.min}),D=new Cr(n.document,{baseStep:1,parser:Lt,sliderProps:new be({maxValue:m.values.value("max"),minValue:m.values.value("min")}),textProps:be.fromObject({draggingScale:ts(void 0,r),formatter:(t=n.params.format)!==null&&t!==void 0?t:vs}),value:_e(r,{constraint:m}),viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:be.fromObject({label:n.params.label}),valueController:D})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof Cr)?null:new aa(n.controller)}},Tc=function(){return{id:"text",type:"blade",accept(n){const e=xe,t=fe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new An(n.document,{parser:n.params.parse,props:be.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:_e(n.params.value),viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:be.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof An)?null:new oa(n.controller)}}}();function Cc(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function la(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const r=n.createElement("style");r.dataset.tpStyle=e,r.textContent=t,n.head.appendChild(r)}class Bc extends Sc{constructor(e){var t,r;const m=e??{},D=(t=m.document)!==null&&t!==void 0?t:d(),H=fc(),ge=new Ec(D,{expanded:m.expanded,blade:Ve(),props:be.fromObject({title:m.title}),viewProps:p.create()});super(ge,H),this.pool_=H,this.containerElem_=(r=m.container)!==null&&r!==void 0?r:Cc(D),this.containerElem_.appendChild(this.element),this.doc_=D,this.usesDefaultWrapper_=!m.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw R.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw R.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(r=>{this.pool_.register(r),this.embedPluginStyle_(r)})}embedPluginStyle_(e){e.css&&la(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){la(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[kc,xc,rn,Tc]})}}const Mc=new u("3.1.10");a.BladeApi=l,a.ButtonApi=Z,a.FolderApi=Rt,a.InputBindingApi=nt,a.ListApi=ia,a.MonitorBindingApi=lt,a.Pane=Bc,a.SeparatorApi=_n,a.SliderApi=aa,a.TabApi=Ot,a.TabPageApi=Ds,a.TextApi=oa,a.TpChangeEvent=y,a.VERSION=Mc,Object.defineProperty(a,"__esModule",{value:!0})})})(oi,oi.exports);var ao=oi.exports;const Gu=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
//
// Cull writes a compacted alive list with per-Gauss metadata into Splat2DGS
// + SHSolver buffers; this stage runs only over alive Gausses (indirect-
// dispatched), evaluates the per-Gauss color from EITHER:
//
//   feature_mode = 0 (SV): Spherical Voronoi softmax over K sites with
//      per-site colors and per-site τ scalars. Result per-Gauss is
//      \`max(0, Σ_k W_k·color_k + sh_bias)\`. Mirrors nest's
//      \`eval_voronoi_sv_feat\`.
//
//   feature_mode = 1 (SB): SH degree-3 base color plus K spherical-beta
//      directional lobes. Result per-Gauss is
//      \`max(0, eval_sh(view_dir, coefs) + sh_bias) + eval_sb(view_dir, lobes)\`.
//      Matches diff_surfel_bake_render's preprocessCUDA: SH is clamped first
//      (the inner ReLU), the SB sum is added unclamped on top, and the
//      fragment shader applies the outer \`max(0, color + atlas + res_bias)\`.
//
// In both modes the per-Gauss RGB is packed as f16 into Splat2DGS.color_*.
// The render fragment shader reads from there and never re-evaluates color —
// SV/SB eval is per-Gauss, not per-pixel, mirroring the CUDA path's design.

struct GeneralInfo {
  keys_size  : u32,
  dispatch_x : u32, dispatch_y : u32, dispatch_z : u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE : u32 = 256u;

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

// 32-byte RenderSettings (matches render-settings.ts canonical layout).
//   0  vec2<u32> canvas_size
//   8  u32       accel_flags    (consumed by surfel_cull; unused here)
//   12 u32       feature_mode   (0 = SV, 1 = SB, 2 = NASG)
//   16 f32       gaussian_scaling
//   20 f32       sh_bias
//   24 u32       color_K        (K — sites for SV, lobes for SB)
//   28 f32       walltime
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  feature_mode     : u32,
  gaussian_scaling : f32,
  sh_bias          : f32,
  color_K          : u32,
  walltime         : f32,
  // --xclip (2026-11-04): exact half-space clip, camera space. clip_plane = (a,b,c,d) with the
  // fragment REMOVED where a*x+b*y+c*z+d > 0 at its ray-surfel hit (kept half n.x+d <= 0, the
  // nest-splatting Camera.clip_plane convention, transformed per frame by the host).
  // clip_intr = (fx, fy, cx, cy) in render-target pixels; clip_intr.x == 0 => clip off.
  clip_plane       : vec4<f32>,
  clip_intr        : vec4<f32>,
};

// Splat2DGS — MUST match surfel_cull.wgsl + render_2dgs.wgsl + host TS
// (C_SIZE_2D_SPLAT = 96 in gaussian-renderer.ts).  Fields uv_base_*,
// uv_scale_*, layer are the atlas-UV precompute added 2026-07-23: this
// preprocess pass fills them so the fragment shader can do a single
// \`uv = uv_base + s * uv_scale\` mad + texture sample (see file header of
// render_2dgs.wgsl).
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32,   // 2× i16 snorm center_pix/8192 (¼-px fixed point; cull packs, render unpacks)
  extent       : u32,
  color_rg     : u32,
  color_b_shape: u32,
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

struct SHSolver {
  dir_xy        : u32,
  dir_z_opacity : u32,
  idx           : u32,
};

// AtlasParams — same layout as gaussian-renderer.ts writes for this pass.
// Everything is a per-frame uniform; \`atlas_width\` and \`atlas_layer_h\` are
// zero when the bundle has no atlas (or user disabled it), which causes this
// pass to skip writing the UV-precomp fields (fragment shader gate will
// short-circuit via TexParams.atlas_enabled).
struct AtlasParams {
  atlas_width   : u32,      // texture_2d_array width in texels; 0 = no atlas
  atlas_layer_h : u32,      // per-layer height in texels
  uv_extent     : f32,      // surfel-uv cutoff used at bake time (≈ 4.0)
  // 0 = baked: atlas_rects is stride 5 (u0, v0, w, h, layer), diagonal affine.
  // 1 = proberes: atlas_rects is stride 6 (A00, A01, A10, A11, t0, t1),
  //     ALREADY divided by tex_res by the exporter, so we pass it straight
  //     through with no arithmetic. Single-layer texture, layer always 0.
  // 2 = proberes+WSR: stride 7 — same 6 affine floats + per-surfel occlusion
  //     (read by fs_wsr in the render pass, not here).
  probe_mode    : u32,
  // Baked atlases exported with --mips: number of levels (1 = level 0 only / mips toggled off).
  mip_count     : u32,
  // Levels subtracted from the per-surfel choice (0 = round(log2 texels/pixel)). The finetune
  // optimised the texels for level-0 point sampling, so full prefiltering loses detail the
  // model relies on; a bias keeps level 0 until a surfel is minified by 2^(bias+0.5) or more.
  lod_bias      : f32,
  // 1 = anisotropic fetch (render mip_mode 2): the per-surfel slot carries the tile's LEVEL CAP instead of a level.
  aniso         : u32,
  _p2 : u32,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       sort_infos : GeneralInfo;
@group(1) @binding(1) var<storage, read>       sh_solvers : array<SHSolver>;
@group(1) @binding(2) var<storage, read_write> splats_2d  : array<Splat2DGS>;
@group(1) @binding(3) var<storage, read>       color_params : array<f32>;

// Atlas rects laid out as fp32 [N, 5] rows: (u0, v0, w_span, h_span, layer).
// Same buffer the fragment shader used to fetch per-pixel; now consumed here
// once per alive Gauss.
@group(1) @binding(4) var<storage, read>       atlas_rects : array<f32>;
@group(1) @binding(5) var<uniform>             atlas_params : AtlasParams;
// Surfel records (8 × u32 each; x,y,z are the first three f32). Read only by the NASG path,
// which needs the view direction in f32: the SHSolver copy is f16-packed, and sharp Gabor
// lobes (k up to 40) turned that quantisation into colour errors up to ~1.0.
@group(1) @binding(6) var<storage, read>       surfels_raw  : array<f32>;

// =============================================================================
// SV evaluation — feature_mode == 0
// Layout per Gauss (stride K*7): K sites (3 ea) + K colors (3 ea) + K taus (1 ea).
// =============================================================================
fn eval_sv(gauss_id: u32, view_dir: vec3<f32>, K: u32, sh_bias: f32) -> vec3<f32> {
    if K == 0u { return vec3<f32>(0.0); }
    let stride    = K * 7u;
    let base      = gauss_id * stride;
    let sites_ofs = base;
    let cols_ofs  = base + K * 3u;
    let taus_ofs  = base + K * 6u;

    var logits : array<f32, 8>;     // K ≤ 8 supported.
    var lmax   = -3.4e38;
    for (var k = 0u; k < K; k = k + 1u) {
        let s = vec3<f32>(
            color_params[sites_ofs + k * 3u + 0u],
            color_params[sites_ofs + k * 3u + 1u],
            color_params[sites_ofs + k * 3u + 2u],
        );
        let s_unit = s * inverseSqrt(max(dot(s, s), 1e-20));
        let tau    = exp(color_params[taus_ofs + k]);
        let d      = s_unit - view_dir;
        let dist   = sqrt(max(dot(d, d), 0.0));
        let lg     = -tau * dist;
        logits[k]  = lg;
        if lg > lmax { lmax = lg; }
    }

    var w_sum = 0.0;
    var feat  = vec3<f32>(0.0);
    for (var k = 0u; k < K; k = k + 1u) {
        let w = exp(logits[k] - lmax);
        w_sum = w_sum + w;
        let c = vec3<f32>(
            color_params[cols_ofs + k * 3u + 0u],
            color_params[cols_ofs + k * 3u + 1u],
            color_params[cols_ofs + k * 3u + 2u],
        );
        feat = feat + w * c;
    }
    feat = feat / max(w_sum, 1e-20);
    return max(vec3<f32>(0.0), feat + vec3<f32>(sh_bias));
}

// =============================================================================
// SH-DC evaluation — used in SB mode.
//
// nest-splatting freezes f_rest_* (degrees 1–3) at zero during \`--feature
// beta\` training (gaussian_model.py:824), so we evaluate ONLY the DC term:
//   color = SH_C0 · (dc_r, dc_g, dc_b)
// The SB lobes carry the entire view-dependent contribution; the atlas
// residual carries the spatial high-frequency detail.
//
// Per-Gauss buffer base = gauss_id * (3 + K*6); DC at offsets 0..2,
// SB lobes start at offset 3.
// =============================================================================
const SH_C0 : f32 = 0.28209479177387814;

fn eval_sh_dc(coef_base: u32) -> vec3<f32> {
    return SH_C0 * vec3<f32>(
        color_params[coef_base + 0u],
        color_params[coef_base + 1u],
        color_params[coef_base + 2u],
    );
}

// =============================================================================
// SB lobe evaluation — used in SB mode.
// Per-lobe: (r, g, b, theta, phi, beta_raw). Formula matches Python eval_sb
// and CUDA eval_sb in diff_surfel_bake_render/forward.cu:
//   rgb_steep = softplus_steep(r,g,b)        (steep = 10·ln(2))
//   mu        = (sin θ cos φ, sin θ sin φ, cos θ)
//   dot       = mu · view_dir
//   contrib   = (dot > 0 ? dot^(4·exp(beta_raw)) : 0) · rgb_steep
//   sum across K lobes.
// =============================================================================
fn softplus_steep(x: f32) -> f32 {
    // β = 10·ln(2) ≈ 6.9314718. softplus = log(1 + exp(β·x)) / β.
    let s = 6.9314718;
    return log(1.0 + exp(s * x)) / s;
}

fn eval_sb(lobe_base: u32, K: u32, view_dir: vec3<f32>) -> vec3<f32> {
    var rgb = vec3<f32>(0.0);
    for (var k = 0u; k < K; k = k + 1u) {
        let p = lobe_base + k * 6u;
        let r       = color_params[p + 0u];
        let g       = color_params[p + 1u];
        let b       = color_params[p + 2u];
        let theta   = color_params[p + 3u];
        let phi     = color_params[p + 4u];
        let beta_r  = color_params[p + 5u];
        let beta    = 4.0 * exp(beta_r);
        let st = sin(theta); let ct = cos(theta);
        let sp = sin(phi);   let cp = cos(phi);
        let mu = vec3<f32>(st * cp, st * sp, ct);
        let d  = dot(mu, view_dir);
        if d > 0.0 {
            let w = pow(max(d, 1e-12), beta);
            rgb = rgb + vec3<f32>(softplus_steep(r), softplus_steep(g), softplus_steep(b)) * w;
        }
    }
    return rgb;
}

// =============================================================================
// NASG-Gabor lobe evaluation — feature_mode == 2 (\`--feature nasg\`).
// Per-Gauss stride 3 + K*9: SH-DC (3) then K lobes of
//   (cosθ, cosϕ, cosτ, λ_raw, a_raw, k_raw, r, g, b).
// Port of nest-splatting gaussian_renderer.eval_nasg (itself a port of
// ../NASGabor spherical_nasg_gabor.cuh::nasg_gabor_fwd, without c0):
//   λ = min(e^λ_raw, 1e4), a = min(e^a_raw, 1e4), k = 20·(tanh k_raw + 1),
//   pdf = exp(2λ(K^(e+a·vx²/(1−vz²))·K − 1)) · K^(…) · ½(1+cos(k·vx)) · λ√(1+a)/(2π(1+1e-8−e^{−2λ}))
//   with K = (vz+1)/2; pole mask vz ≥ 1−1e-7 → pdf 1, vz ≤ −1+1e-7 → 0.
// The lobe sum goes INSIDE the inner clamp: max(0, SH_C0·dc + sh_bias + Σ pdf·rgb)
// (training injects it into the SH DC slot).
// =============================================================================
fn eval_nasg(lobe_base: u32, K: u32, d: vec3<f32>) -> vec3<f32> {
    var rgb = vec3<f32>(0.0);
    for (var i = 0u; i < K; i = i + 1u) {
        let p  = lobe_base + i * 9u;
        let ct = clamp(color_params[p + 0u], -0.999999, 0.999999);
        let cp = clamp(color_params[p + 1u], -0.999999, 0.999999);
        let cu = clamp(color_params[p + 2u], -0.999999, 0.999999);
        let st = sqrt(1.0 - ct * ct);
        let sp = sqrt(1.0 - cp * cp);
        let su = sqrt(1.0 - cu * cu);
        let x  = vec3<f32>(ct * cp * cu - st * su, st * cp * cu + ct * su, -sp * cu);
        let z  = vec3<f32>(ct * sp, st * sp, cp);
        let lam = min(exp(color_params[p + 3u]), 1e4);
        let a   = min(exp(color_params[p + 4u]), 1e4);
        let k   = (tanh(color_params[p + 5u]) + 1.0) * 20.0;
        let col = vec3<f32>(color_params[p + 6u], color_params[p + 7u], color_params[p + 8u]);
        let vz = dot(d, z);
        let vx = dot(d, x);
        var pdf = 0.0;
        if vz >= 1.0 - 1e-7 {
            pdf = 1.0;
        } else if vz > -1.0 + 1e-7 {
            let vzs    = clamp(vz, -1.0 + 1e-6, 1.0 - 1e-6);
            let kb     = (vzs + 1.0) * 0.5;
            let kexp   = 5e-6 + a * vx * vx / (1.0 - vzs * vzs);
            let ev     = pow(kb, kexp);
            let inv_n  = lam * sqrt(1.0 + a) / (6.283185307179586 * (1.0 + 1e-8 - exp(-2.0 * lam)));
            let gabor  = (1.0 + cos(k * vx)) * 0.5;
            pdf = exp(2.0 * lam * (ev * kb - 1.0)) * ev * gabor * inv_n;
        }
        rgb = rgb + pdf * col;
    }
    return rgb;
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    let store_idx = gid.x;
    if store_idx >= sort_infos.keys_size { return; }

    let solver = sh_solvers[store_idx];
    let dir_op = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));
    let dir    = dir_op.xyz;
    let v_idx  = solver.idx;

    var rgb : vec3<f32>;
    if render_settings.feature_mode == 2u {
        // NASG: per-Gauss stride = 3 + K*9 floats. DC at 0..2, lobes at 3+.
        let K = render_settings.color_K;
        let base = v_idx * (3u + K * 9u);
        let pw = vec3<f32>(surfels_raw[v_idx * 8u + 0u], surfels_raw[v_idx * 8u + 1u], surfels_raw[v_idx * 8u + 2u]);
        let dir32 = normalize(pw - camera.view_inv[3].xyz);
        rgb = max(vec3<f32>(0.0), eval_sh_dc(base) + vec3<f32>(render_settings.sh_bias) + eval_nasg(base + 3u, K, dir32));
    } else if render_settings.feature_mode == 1u {
        // SB: per-Gauss stride = 3 + K*6 floats. DC at offset 0..2, SB lobes at 3+.
        let K = render_settings.color_K;
        let base = v_idx * (3u + K * 6u);
        let sh_color = max(vec3<f32>(0.0), eval_sh_dc(base) + vec3<f32>(render_settings.sh_bias));
        let sb_color = eval_sb(base + 3u, K, dir);
        // Inner clamp on SH only — matches CUDA preprocessCUDA. The fragment
        // shader applies the outer \`max(0, color + atlas + res_bias)\`.
        rgb = sh_color + sb_color;
    } else {
        rgb = eval_sv(v_idx, dir, render_settings.color_K, render_settings.sh_bias);
    }

    // Preserve the shape value the cull pass packed alongside (zeroed) color.b.
    let prev  = unpack2x16float(splats_2d[store_idx].color_b_shape);
    let shape = prev.y;
    splats_2d[store_idx].color_rg      = pack2x16float(vec2<f32>(rgb.r, rgb.g));
    splats_2d[store_idx].color_b_shape = pack2x16float(vec2<f32>(rgb.b, shape));

    // Atlas UV precomputation — fold everything Gauss-uniform in the atlas UV
    // mapping into (uv_base, uv_scale). Fragment does \`uv = uv_base + s * uv_scale\`
    // (2 fmadd) then one HW texture fetch. Kills 5 storage-buffer reads + 2
    // fp32 divides per fragment vs the pre-2026-07-23 shader that fetched
    // atlas_rects and normalised divisors per pixel.
    //
    // Derivation, per axis, s = surfel-uv in [−E, E]:
    //   au = u0 + (s + E) / (2E) * w_span            (atlas pixel)
    //   uv = (au + 0.5) / atlas_width                (normalised)
    //      = ((u0 + 0.5 + w_span/2)          + s * (w_span / (2E))) / atlas_width
    //      = uv_base                          + s * uv_scale
    // where uv_base and uv_scale are Gauss-uniform.
    //
    // Untextured mixed_3d Gauss and no-atlas bundles: cull writes gauss_id with
    // its high bit set OR the bundle has atlas_width=0. Either way we skip the
    // rect fetch and write sentinel zeros — fragment gates on tex_params.atlas_enabled.
    // NB: don't reuse \`gid\` here — that's the workgroup-builtin param name.
    let gid_raw   = splats_2d[store_idx].gauss_id;
    let is_texd   = (gid_raw & 0x80000000u) == 0u;
    let src_gauss = gid_raw & 0x3FFFFFFFu;   // bit 31 = untextured EWA, bit 30 = --tex3d kernel
    if is_texd && atlas_params.atlas_width > 0u && atlas_params.probe_mode != 0u {
        // Proberes: stage the per-surfel affine into Splat2DGS so the fragment
        // needs ZERO storage-buffer reads (the baked path's whole reason for
        // the UV precompute). The 6 probe floats fit the 6 free slots exactly:
        // 4 f32 + the layer/_pad u32 pair, reinterpreted via bitcast. Safe
        // because this atlas is single-layer, so \`layer\` is identically 0 and
        // the fragment hardcodes layer = 0 under probe_mode.
        // Values are already divided by tex_res by the exporter.
        // probe_mode 2 (WSR) = stride-7 records (6 affine floats + occlusion).
        // probe_mode 3 (pair format) = stride-21 records: 6 affine floats + a 3x4 matrix and bias (15) read by the fragment.
        let po = src_gauss * select(select(6u, 7u, atlas_params.probe_mode == 2u), 21u, atlas_params.probe_mode == 3u);
        splats_2d[store_idx].uv_base_x  = atlas_rects[po + 4u];                 // t0
        splats_2d[store_idx].uv_base_y  = atlas_rects[po + 5u];                 // t1
        splats_2d[store_idx].uv_scale_x = atlas_rects[po + 0u];                 // A00
        splats_2d[store_idx].uv_scale_y = atlas_rects[po + 3u];                 // A11
        splats_2d[store_idx].layer      = bitcast<u32>(atlas_rects[po + 1u]);   // A01
        splats_2d[store_idx]._pad       = bitcast<u32>(atlas_rects[po + 2u]);   // A10
    } else if is_texd && atlas_params.atlas_width > 0u {
        let base_off = src_gauss * 5u;
        let u0     = atlas_rects[base_off + 0u];
        let v0     = atlas_rects[base_off + 1u];
        let w_span = atlas_rects[base_off + 2u];
        let h_span = atlas_rects[base_off + 3u];
        let layer  = u32(atlas_rects[base_off + 4u]);
        let E      = atlas_params.uv_extent;
        let inv_w  = 1.0 / f32(atlas_params.atlas_width);
        let inv_h  = 1.0 / f32(atlas_params.atlas_layer_h);
        let inv_2E = 1.0 / (2.0 * E);
        // ---- per-surfel mip level (typeD bundles exported with --mips) ----------------
        // The cull stores the CONIC form of the ray-splat (surfel_cull.wgsl): tu = (u0, v0, J⁻¹00),
        // tv = (J⁻¹01, J⁻¹10, J⁻¹11), with s = (u0, v0) + J⁻¹·Δpix / (1 + dw·Δpix). At the centre,
        // uv moves J⁻¹ per pixel, so texel motion per pixel is diag(w, h)/2E · J⁻¹ and the
        // minification is its larger column norm (the pixel axis that sweeps most texels).
        // ONE integer level per surfel (nearest-level sampler → still a single bilinear
        // fetch), rounded, clamped to the levels shipped and to the tile's own alignment:
        // the box filter is per-tile exact only up to countTrailingZeros(u0 | v0 | w | h).
        var lod = 0.0;
        var fx  = 1.0;
        var fy  = 1.0;
        if (atlas_params.mip_count > 1u || atlas_params.aniso != 0u) && w_span >= 2.0 && h_span >= 2.0 {
            let sp   = splats_2d[store_idx];
            let kx   = w_span * inv_2E;
            let ky   = h_span * inv_2E;
            let c0   = vec2<f32>(kx * sp.tu_z, ky * sp.tv_y);   // d(texel)/d(pix.x): (J⁻¹00, J⁻¹10)
            let c1   = vec2<f32>(kx * sp.tv_x, ky * sp.tv_z);   // d(texel)/d(pix.y): (J⁻¹01, J⁻¹11)
            let tpp  = max(length(c0), length(c1));
            let amax = countTrailingZeros(u32(u0) | u32(v0) | u32(w_span) | u32(h_span));
            // ...and never below 4 texels on the short side (a 64x4 tile stops at 16x4, not 64x1):
            // every level is then a plain halving that exists in the training-side pyramid too
            // (nest-splatting gaussian_renderer.mip_view_levels, --mip_view_lod finetunes).
            let side = countTrailingZeros(u32(min(w_span, h_span)));
            let lmax = f32(min(min(atlas_params.mip_count - 1u, amax), max(side, 2u) - 2u));
            lod = clamp(floor(log2(max(tpp, 1.0)) + 0.5 - atlas_params.lod_bias), 0.0, lmax);
            // Anisotropic mode: the hardware picks the level per pixel; hand the fragment the cap only.
            lod = select(lod, lmax, atlas_params.aniso != 0u);
            // Level-l tiles stay inside their rect by the fragment's CLAMP (half a level-l texel
            // in from each edge, the CUDA/training convention), not by shrinking the uv span.
        }
        // Texel i of the bake sits at s_i = (i + ½)·2E/w − E, i.e. at atlas x = u0 + w/2 + s·w/2E
        // (normalised: ÷ width; texel i's centre is at i + ½). Matches CUDA / Vulkan
        // (u0 − ½ + w/2 base, sampled at au + ½). The pre-2026-09-19 base carried an extra +½:
        // every fetch was half a texel off (−0.7 dB vs CUDA on garden). w = 0 (no texture)
        // keeps pointing at texel (u0, v0)'s centre.
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 * max(w_span, 1.0)) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 * max(h_span, 1.0)) * inv_h;
        splats_2d[store_idx].uv_scale_x = w_span * fx * inv_2E * inv_w;
        splats_2d[store_idx].uv_scale_y = h_span * fy * inv_2E * inv_h;
        splats_2d[store_idx].layer      = layer;
        splats_2d[store_idx]._pad       = bitcast<u32>(lod);   // render reads it as sp.lod
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
        splats_2d[store_idx]._pad       = 0u;
    }
}
`,Ts=`// 2DGS render — vertex+fragment.
//
// Fragment does CONIC-corrected rational reconstruction (see the CONIC block
// below) + optional BC7/typeD atlas residual lookup via a SINGLE HW-decoded
// texture fetch.
//
// Atlas UV precomputation
// -----------------------
// The atlas UV mapping \`au = u0 + (s.x + E)/(2E)*w_span\` etc. is Gauss-uniform
// in everything except \`s.x\`/\`s.y\`. Two coefficients per axis (\`uv_base\`,
// \`uv_scale\`) and the array layer live inside Splat2DGS, computed once per
// alive Gauss in preprocess_2dgs.wgsl. Fragment then does:
//   \`uv = uv_base + s * uv_scale\` (2 fmadd, 0 divides, 0 storage-buffer loads).
// Prior versions read atlas_rects[gauss_id*5..gauss_id*5+4] per pixel and did
// 2 fp32 divides for the atlas_width/atlas_layer_h normalisation. That path
// showed up as a large fraction of "textures on" latency on TBDR mobile GPUs
// (Adreno / Mali / Apple), which pay more for storage-buffer reads than for
// texture reads.
//
// Paired-RVQ path
// ---------------
// Removed 2026-07-23. The per-fragment SW codebook decode was unusably slow
// on TBDR mobile GPUs. All shipped bundles are typeD (atlas_format=7, BC7
// codebook expanded to a normal BC7 texture at load time); the fragment
// shader below only knows about the single HW-decoded texture-fetch path.
// See memory/reference_atlas_format_typeD_default.md.

const FILTER_INV_SQUARE : f32 = 2.0;             // 1 / (2 · FilterSize²) with FilterSize=√2/2
const FILTER_SIZE       : f32 = 0.7071067811865476;
const K_BETA            : f32 = 3.0;
const K_BETA_SQ         : f32 = 9.0;

// Compile-time constant: 1 = beta_scaled bake (--kernel beta_scaled,
// shape > 0 per Gauss), 0 = Gaussian bake (--kernel gaussian, shape == 0
// always). Host sets it at pipeline-build time from bake_meta.json.kernel
// and the shader dead-strips the unused branch.
override BETA_KERNEL : u32 = 1u;

// Splat2DGS — layout MUST match the same struct in preprocess_2dgs.wgsl,
// surfel_cull.wgsl, and gaussian-renderer.ts::C_SIZE_2D_SPLAT (96 B stride).
// Fields added over the 80-byte v1:
//   uv_base_x/y, uv_scale_x/y : normalised atlas UV precomp (see file header)
//   layer                     : atlas array layer (u32; preprocess writes it)
//   _pad                      : keeps stride at 96 = 24*4 for 16-B alignment
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32,   // 2× i16 centre in ¼-px units (unpack_center)
  extent       : u32,
  color_rg     : u32,
  color_b_shape: u32,
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

// ---------------------------------------------------------------------------
// Build variants (host-side line preprocessor in gaussian-renderer.ts —
// \`//#if NAME\` / \`//#else\` / \`//#endif\`, no nesting needed):
//
//   FETCH_BY_ID — the vertex stage emits ONLY the compacted splat slot
//     (one flat u32); the fragment re-reads Splat2DGS[slot] from the storage
//     buffer. Replaces 13 flat varyings (≈ 176 B/primitive of interpolator
//     storage). Measured faster than 7 flat vec4s in the Vulkan port on a
//     5090 (docs/VULKAN_HW_RASTER.md §3); on TBDR mobile GPUs the varying
//     store is per-tile, so this is expected to matter more there. ?byid=0
//     restores the varying path for an A/B.
//   OCT — 8-vertex triangle-strip octagon tangent to the EXACT projected
//     cutoff ellipse (the same conic the cull's SnugBox uses, rebuilt here
//     from the CONIC coefficients), unioned with the low-pass disc, instead
//     of the axis-aligned quad. ~21 % fewer fragments per surfel at 2× the
//     vertex invocations; an earlier corner-cut-quad attempt was a net loss
//     on most GPUs, so this is OFF by default (?oct=1 to A/B). NB the
//     hyperbolic-surfel drop that gave the big Vulkan fragment win lives in
//     surfel_cull.wgsl (accel bit 9), independent of this.
// ---------------------------------------------------------------------------

//#if FETCH_BY_ID
struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) @interpolate(flat) slot : u32,
  @location(1) @interpolate(flat) rank : u32,   // instance index = back-to-front draw rank (re-fetch upscaling)
};
//#else
struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)  @interpolate(flat) Tu          : vec3<f32>,
  @location(1)  @interpolate(flat) Tv          : vec3<f32>,
  @location(2)  @interpolate(flat) Tw          : vec3<f32>,
  @location(3)  @interpolate(flat) color       : vec4<f32>,
  @location(4)  @interpolate(flat) shape       : f32,
  @location(5)  @interpolate(flat) center_pix  : vec2<f32>,
  @location(6)  @interpolate(flat) depth_plane : vec3<f32>,
  @location(7)  @interpolate(flat) gauss_id    : u32,
  @location(8)  @interpolate(flat) uv_base     : vec2<f32>,
  @location(9)  @interpolate(flat) uv_scale    : vec2<f32>,
  @location(10) @interpolate(flat) layer       : u32,
  // Proberes off-diagonal terms (A01, A10) / tex_res. Unused when probe_mode==0.
  @location(11) @interpolate(flat) uv_skew     : vec2<f32>,
  // Proberes mip LOD: log2(texels per pixel), computed once per Gauss in the
  // vertex stage. Compute passes have no implicit derivatives, so the fragment
  // must use textureSampleLevel with an explicit level. 0 when probe_mode==0.
  @location(12) @interpolate(flat) lod         : f32,
  @location(13) @interpolate(flat) rank        : u32,   // instance index = back-to-front draw rank (re-fetch upscaling)
};
//#endif

// Per-splat inputs to shade() — identical content whichever variant delivers
// it (varyings or a storage re-read).
struct SplatIn {
  Tu          : vec3<f32>,
  Tv          : vec3<f32>,
  Tw          : vec3<f32>,
  color       : vec4<f32>,
  shape       : f32,
  center_pix  : vec2<f32>,
  depth_plane : vec3<f32>,
  gauss_id    : u32,
  uv_base     : vec2<f32>,
  uv_scale    : vec2<f32>,
  layer       : u32,
  uv_skew     : vec2<f32>,
  lod         : f32,
};

// 64-byte RenderSettings — same layout as preprocess_2dgs.wgsl. We only read
// \`canvas_size\` here (vertex shader uses it to convert pixel coords → NDC)
// plus accel_flags bit 0 (OAC) under OCT to rebuild the cull's cutoff.
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  _pad0            : u32,
  gaussian_scaling : f32,
  sh_bias          : f32,
  sv_number        : u32,
  walltime         : f32,
  // --xclip (2026-11-04): exact half-space clip, camera space. clip_plane = (a,b,c,d) with the
  // fragment REMOVED where a*x+b*y+c*z+d > 0 at its ray-surfel hit (kept half n.x+d <= 0, the
  // nest-splatting Camera.clip_plane convention, transformed per frame by the host).
  // clip_intr = (fx, fy, cx, cy) in render-target pixels; clip_intr.x == 0 => clip off.
  clip_plane       : vec4<f32>,
  clip_intr        : vec4<f32>,
};

// 32-byte TexParams. Bundle without atlas → host writes \`atlas_enabled = 0\`
// and the fragment shader's single \`if atlas_enabled != 0u\` short-circuits.
//
// Cut down from 48 B in the pre-2026-07-23 shader: the RVQ tail
// (rvq_block / pair_scale / pair_offset) was removed with the RVQ code path.
struct TexParams {
  atlas_enabled : u32,     // 0 = no atlas / user toggle off ; nonzero = sample
  atlas_scale   : f32,
  atlas_offset  : f32,
  res_bias      : f32,     // additive RGB bias after the residual is folded in
  // 0 = baked (per-surfel rect, diagonal affine, multi-layer atlas)
  // 1 = proberes (shared single-layer texture, general 2x2 affine + low-pass
  //     centre collapse). Set by the loader for NAT2 atlas_format 9/10.
  probe_mode    : u32,
  // Atlas width in texels — needed for the proberes mip LOD, since the probe
  // affine arrives NORMALISED (already divided by tex_res by the exporter) and
  // LOD needs an absolute texel count. Claims the former _pad0.
  atlas_width   : u32,
  // Mip LOD policy (proberes). 0 = force level 0 (pre-mip behaviour, point-ish
  // minification); 1 = trilinear at the computed LOD. Runtime-toggleable so the
  // same bundle can be A/B'd — the chain is resident either way.
  mip_mode      : u32,
  // Explicit u32 pad (NOT vec3<f32>): a vec3 aligns to 16 and would push the
  // struct to 48 B, mismatching buildStubAtlas's 32-byte TexParams buffer.
  // uv extent E of the bake (surfel uv ∈ [−E, E] ↔ the tile): the fragment clamp needs the
  // tile's half span, = |uv_scale|·E.
  uv_extent : f32,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;
// Per-surfel probe records (the same buffer preprocess reads as atlas_rects). Only read under probe_mode == 3 (pair
// format: stride 21 = 6 affine floats + 3x4 matrix row-major + bias), one 60-byte read per shaded fragment.
@group(2) @binding(3) var<storage, read> probe_recs      : array<f32>;

// Splat2DGS.pos → centre in pixels (¼-px integer grid, see surfel_cull
// pack_center). Sign-extend each i16 lane with a shift pair.
fn unpack_center(p: u32) -> vec2<f32> {
    // accel bit 10 (?legacy=1): the cull packed f16 instead — read it back the
    // old way so the two stages always agree within a frame.
    if (render_settings.accel_flags & 1024u) != 0u {
        return unpack2x16float(p);
    }
    let x = (i32(p << 16u)) >> 16u;
    let y = (i32(p)) >> 16u;
    return vec2<f32>(f32(x), f32(y)) * 0.25;
}

// Bound margin: 0.25 px + 0.1 % over the cull's tight bbox (see vs_main), or
// nothing under ?legacy=1.
fn bound_pad(extent_pix: vec2<f32>) -> vec2<f32> {
    if (render_settings.accel_flags & 1024u) != 0u { return extent_pix; }
    return extent_pix * 1.001 + vec2<f32>(0.25);
}

// Unpack a Splat2DGS record into the shade() inputs. Shared by the vertex
// stage (varying variant) and the fragment stage (FETCH_BY_ID variant) so the
// two variants are the same math by construction.
fn unpack_splat(splat: Splat2DGS) -> SplatIn {
    var sp : SplatIn;
    sp.Tu = vec3<f32>(splat.tu_x, splat.tu_y, splat.tu_z);
    sp.Tv = vec3<f32>(splat.tv_x, splat.tv_y, splat.tv_z);
    sp.Tw = vec3<f32>(splat.tw_x, splat.tw_y, splat.tw_z);
    let rg = unpack2x16float(splat.color_rg);
    let bs = unpack2x16float(splat.color_b_shape);
    sp.color       = vec4<f32>(rg.x, rg.y, bs.x, splat.opacity);
    sp.shape       = bs.y;
    sp.center_pix  = unpack_center(splat.pos);
    sp.depth_plane = vec3<f32>(splat.depth_u, splat.depth_v, splat.depth_center);
    sp.gauss_id    = splat.gauss_id;
    sp.uv_base     = vec2<f32>(splat.uv_base_x,  splat.uv_base_y);
    sp.uv_scale    = vec2<f32>(splat.uv_scale_x, splat.uv_scale_y);
    sp.layer       = splat.layer;
    // Under probe_mode the layer/_pad slots carry A01/A10 (see preprocess).
    // Harmless otherwise — probe_mode==0 never reads uv_skew.
    sp.uv_skew     = vec2<f32>(bitcast<f32>(splat.layer), bitcast<f32>(splat._pad));

    // ---- proberes mip LOD ----------------------------------------------------
    // The probe maps surfel-uv -> NORMALISED texture uv, so a column's length
    // times atlas_width is that axis's texel span across uv 0..1. The surfel
    // spans uv in [-3,3] (6 units) over 2*extent_pix screen pixels, hence
    //     texels_per_pixel = 6*|A_col|*atlas_width / (2*extent_pix)
    // and lod = log2 of the larger axis, clamped at 0 (magnification stays on
    // level 0, where plain bilinear is already correct).
    sp.lod = 0.0;
    if tex_params.probe_mode != 0u {
        let extent_pix = unpack2x16float(splat.extent);
        let a_col0 = vec2<f32>(sp.uv_scale.x, sp.uv_skew.y);   // (A00, A10)
        let a_col1 = vec2<f32>(sp.uv_skew.x,  sp.uv_scale.y);  // (A01, A11)
        let texw   = f32(tex_params.atlas_width);
        let px     = max(2.0 * max(extent_pix.x, extent_pix.y), 1.0);
        let tpp    = 6.0 * texw * max(length(a_col0), length(a_col1)) / px;
        sp.lod     = max(0.0, log2(max(tpp, 1.0)));
    } else {
        // Baked atlas: preprocess picked the integer level and stored it in \`_pad\`
        // (0.0 for bundles without a chain), see preprocess_2dgs.wgsl.
        sp.lod     = sp.uv_skew.y;
    }
    return sp;
}

fn splat_in(in: VertexOutput) -> SplatIn {
//#if FETCH_BY_ID
    return unpack_splat(splats_2d[in.slot]);
//#else
    var sp : SplatIn;
    sp.Tu = in.Tu; sp.Tv = in.Tv; sp.Tw = in.Tw;
    sp.color = in.color; sp.shape = in.shape; sp.center_pix = in.center_pix;
    sp.depth_plane = in.depth_plane; sp.gauss_id = in.gauss_id;
    sp.uv_base = in.uv_base; sp.uv_scale = in.uv_scale; sp.layer = in.layer;
    sp.uv_skew = in.uv_skew; sp.lod = in.lod;
    return sp;
//#endif
}

//#if OCT
// ---- OCT bound: exact cutoff ellipse rebuilt from the CONIC coefficients ----
// The fragment's rational reconstruction is s(d) = c + J·d / (1 + dw·d) with
// c = (u0, v0), so with M = J + c ⊗ dw:  |s|² ≤ k²  ⇔  |c + M d|² ≤ k²(1+dw·d)²
// (denom > 0 side), a quadratic in d:
//     dᵀ Q d + 2 gᵀ d + q0 ≤ 0,   Q = MᵀM − k² dw dwᵀ,  g = Mᵀc − k² dw,
//     q0 = |c|² − k².
// Completing the square gives centre δ = −Q⁻¹g and dᵀQd ≤ t = gᵀQ⁻¹g − q0.
// For a cull-alive surfel this is exactly the SnugBox ellipse (same cutoff k,
// same conic), so δ ≈ 0 — it is kept anyway so fp drift never shrinks the
// bound. The cutoff must be rebuilt with the cull's formula (OAC included).
fn oct_cutoff(opacity: f32, shape: f32) -> f32 {
    let oac = (render_settings.accel_flags & 1u) != 0u;
    if shape > 1e-6 {
        if !oac { return 3.0; }
        let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        let inv_pow = pow(inv, 1.0 / max(shape, 1e-3));
        return max(0.5, 3.0 * sqrt(max(0.0, 1.0 - inv_pow)));
    }
    if !oac { return 3.5; }
    return max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
}

// 8 unit normals at 45° steps (CCW) — support directions of the octagon.
const OCT_N = array<vec2<f32>, 8>(
    vec2<f32>( 1.0,  0.0), vec2<f32>( 0.7071067811865476,  0.7071067811865476),
    vec2<f32>( 0.0,  1.0), vec2<f32>(-0.7071067811865476,  0.7071067811865476),
    vec2<f32>(-1.0,  0.0), vec2<f32>(-0.7071067811865476, -0.7071067811865476),
    vec2<f32>( 0.0, -1.0), vec2<f32>( 0.7071067811865476, -0.7071067811865476),
);

// Corner \`k\` (0..7, CCW) of the polygon bounding this splat, in pixel offsets
// from center_pix. Ellipse support h(n) = sqrt(t · nᵀQ⁻¹n), unioned with the
// low-pass disc (radius filter_r, as the quad path) and the cull's box
// half-extents (never smaller than the legacy quad); + PAD px of slack.
fn oct_corner(sp: SplatIn, extent_pix: vec2<f32>, k: u32) -> vec2<f32> {
    let filter_r = K_BETA * FILTER_SIZE;
    let ext_pad = bound_pad(extent_pix);
    let half = vec2<f32>(max(ext_pad.x, filter_r), max(ext_pad.y, filter_r));
    var use_ell = false;
    var Qa = 1.0; var Qb = 0.0; var Qe = 1.0; var t = 0.0; var delta = vec2<f32>(0.0);
    // \`--tex3d\` rows (bit 30): the footprint is the EWA box the cull wrote, not the
    // plane disc — use the box support only.
    if (sp.gauss_id & 0xC0000000u) == 0u {
        let c  = vec2<f32>(sp.Tu.x, sp.Tu.y);
        let J00 = sp.Tu.z; let J01 = sp.Tv.x; let J10 = sp.Tv.y; let J11 = sp.Tv.z;
        let dw = vec2<f32>(sp.Tw.x, sp.Tw.y);
        let kk = oct_cutoff(sp.color.a, sp.shape); let k2 = kk * kk;
        let M00 = J00 + c.x * dw.x; let M01 = J01 + c.x * dw.y;
        let M10 = J10 + c.y * dw.x; let M11 = J11 + c.y * dw.y;
        Qa = M00 * M00 + M10 * M10 - k2 * dw.x * dw.x;
        Qb = M00 * M01 + M10 * M11 - k2 * dw.x * dw.y;
        Qe = M01 * M01 + M11 * M11 - k2 * dw.y * dw.y;
        let g = vec2<f32>(M00 * c.x + M10 * c.y - k2 * dw.x,
                          M01 * c.x + M11 * c.y - k2 * dw.y);
        let q0 = dot(c, c) - k2;
        let det = Qa * Qe - Qb * Qb;
        if det > 1e-12 && Qa > 0.0 && Qe > 0.0 {
            // Q⁻¹ = [E −B; −B A] / det
            let Qig = vec2<f32>(Qe * g.x - Qb * g.y, -Qb * g.x + Qa * g.y) / det;
            delta = -Qig;
            t = dot(g, Qig) - q0;
            use_ell = t > 0.0;
        }
    }
    // Same slack as the quad path (centre now exact for the CONIC; f16 extent
    // only enters through \`half\`).
    let PAD = select(0.25, 0.0, (render_settings.accel_flags & 1024u) != 0u);
    var h : array<f32, 8>;
    for (var j = 0u; j < 8u; j = j + 1u) {
        let n = OCT_N[j];
        // Box support (== legacy quad when the ellipse is unavailable).
        var hj = half.x * abs(n.x) + half.y * abs(n.y);
        if use_ell {
            let det = Qa * Qe - Qb * Qb;
            let he = sqrt(max(t * (Qe * n.x * n.x - 2.0 * Qb * n.x * n.y + Qa * n.y * n.y) / det, 0.0));
            // ellipse ∪ low-pass disc, offset by the completed-square centre
            hj = max(he + dot(n, delta), filter_r);
        }
        h[j] = hj + PAD;
    }
    // Corner k = intersection of the tangent lines n_k·x = h_k and
    // n_{k+1}·x = h_{k+1}  (2×2 Cramer, determinant sin 45°).
    let n0 = OCT_N[k]; let n1 = OCT_N[(k + 1u) & 7u];
    let h0 = h[k];     let h1 = h[(k + 1u) & 7u];
    return vec2<f32>(h0 * n1.y - n0.y * h1, n0.x * h1 - h0 * n1.x) * 1.4142135623730951;
}
//#endif

@vertex
fn vs_main(
    @builtin(vertex_index)   vid : u32,
    @builtin(instance_index) iid : u32,
) -> VertexOutput {
    var out : VertexOutput;
    out.rank = iid;

    let slot       = indices[iid];
    let splat      = splats_2d[slot];
    let center_pix = unpack_center(splat.pos);
    let extent_pix = unpack2x16float(splat.extent);
    let sp         = unpack_splat(splat);

//#if OCT
    // 8-vertex triangle strip over the CCW octagon corners in zig-zag order
    // 0,1,7,2,6,3,5,4 → triangles (0,1,7)(1,7,2)(7,2,6)(2,6,3)(6,3,5)(3,5,4)
    // tile the convex polygon exactly. drawIndirect vertex_count == 8.
    let k = select((8u - (vid >> 1u)) & 7u, (vid + 1u) >> 1u, (vid & 1u) == 1u);
    let corner_pix = center_pix + oct_corner(sp, extent_pix, k);
//#else
    // Quad half-extent: max(extent_pix, k·FilterSize) on each axis. The cull
    // pass already wrote the tight bbox, so this just adds the filter margin.
    // Margin: the stored centre is on a ¼-px grid (≤ ⅛ px from the ellipse's
    // true centre) and the f16 extent carries 0.05 % relative error, so the
    // bare tight bbox clipped fragments on the edge. For hard-edged surfels
    // (beta shape → 0, α ≈ opacity right up to ρ = 3) those were fully
    // visible fragments: measured ~100 px/frame, |Δ| up to 46/255 on room
    // before the ¼-px centre, 16/255 after. 0.25 px + 0.1 % restores them.
    let filter_r = K_BETA * FILTER_SIZE;
    let ext_pad  = bound_pad(extent_pix);
    let half     = vec2<f32>(max(ext_pad.x, filter_r), max(ext_pad.y, filter_r));

    // 4-vertex triangle-strip axis-aligned quad (matches websplatter).
    //   vid 0: ( 1,  1)   vid 1: (-1,  1)
    //   vid 2: ( 1, -1)   vid 3: (-1, -1)
    let ox = select(-1.0, 1.0, (vid & 1u) == 0u);
    let oy = select(-1.0, 1.0, vid < 2u);
    let corner_pix = center_pix + vec2<f32>(ox, oy) * half;
//#endif

    // Pixel → NDC. Framebuffer y grows downward; clip y grows upward.
    let vp = vec2<f32>(f32(render_settings.canvas_size.x), f32(render_settings.canvas_size.y));
    let ndc = vec2<f32>(
        (corner_pix.x * 2.0 - (vp.x - 1.0)) / vp.x,
        -((corner_pix.y * 2.0 - (vp.y - 1.0)) / vp.y),
    );
//#if HW_DEPTH
    // Hardware depth from geometry: z_ndc of the SURFEL PLANE at this corner.
    // For a plane, 1/z_view is affine in screen space, and z_ndc = P22 + P32/z
    // is too, so linear interpolation of the corner values reproduces the exact
    // ray/plane depth at every pixel — the z-buffer can then test and reject
    // fragments BEFORE the fragment shader runs (early-Z; no frag_depth).
    // Flat varyings are unaffected by w, so w = 1.
    let zc    = corner_depth(sp, corner_pix);
    let z_ndc = clamp(camera.proj[2][2] + camera.proj[3][2] / zc, 0.0, 0.999999);
    out.position = vec4<f32>(ndc, z_ndc, 1.0);
//#else
    out.position = vec4<f32>(ndc, 0.0, 1.0);
//#endif

//#if FETCH_BY_ID
    out.slot = slot;
//#else
    out.Tu = sp.Tu; out.Tv = sp.Tv; out.Tw = sp.Tw;
    out.color       = sp.color;
    out.shape       = sp.shape;
    out.center_pix  = center_pix;
    out.depth_plane = sp.depth_plane;
    out.gauss_id    = sp.gauss_id;
    out.uv_base     = sp.uv_base;
    out.uv_scale    = sp.uv_scale;
    out.layer       = sp.layer;
    out.uv_skew     = sp.uv_skew;
    out.lod         = sp.lod;
//#endif
    return out;
}

// Shared fragment evaluation — returns un-premultiplied rgb, alpha, and the
// per-pixel VIEW-SPACE depth of the exact ray-splat intersection (zv). All
// fragment entry points call this; a discard inside culls the fragment.
//
// Split in two stages (2026-10-06, for the two-pass path below):
//   shade_geom()  — ray/splat intersection \`s\`, kernel alpha \`a\`, depth \`zv\`,
//                   and the low-pass flag; every discard lives here.
//   shade_color() — SV/SH base colour + the atlas residual fetch + biases.
// shade() = both, and is what fs_main uses; fs_front runs the geometry stage
// first so fragments hidden behind the opaque layer never pay for the fetch.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

struct ShadeGeom {
    s   : vec2<f32>,   // ray/splat intersection in surfel uv (unused for EWA)
    a   : f32,         // kernel alpha (opacity · falloff, low-pass included)
    zv  : f32,         // view-space depth of the intersection
    lp  : bool,        // low-pass kernel won (rho3d > rho2d) — probe uv collapses
    pix : vec2<f32>,   // fragment position (the anisotropic fetch re-intersects the two neighbouring pixels)
};

// Ray/splat intersection \`s\` (surfel uv) at pixel \`pixf\`. Three equivalent
// formulations selected by accel bits (see below); \`ok == false\` where the
// fragment path discards (degenerate / wrong side of the conic expansion).
// Shared by shade_geom() and, under HW_DEPTH, by the vertex stage, which needs
// the plane depth at the bound corners.
struct Isect { s : vec2<f32>, ok : bool };

fn intersect_uv(in: SplatIn, pixf: vec2<f32>) -> Isect {
    var s : vec2<f32>;
    if (render_settings.accel_flags & 4096u) != 0u {
        // CENTRED (accel bit 12): same cross-product, but in coordinates
        // centred on the splat. in.Tu = k_c, in.Tv = l_c, in.Tw = Tw, and the
        // offset d is at most the quad half-extent -- so nothing here subtracts
        // two numbers of magnitude ~1e3 to get one of magnitude ~1.
        let d2 = pixf - in.center_pix;
        let kk = in.Tu + d2.x * in.Tw;
        let ll = in.Tv + d2.y * in.Tw;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { return Isect(vec2<f32>(0.0), false); }
        s = pp.xy / pp.z;
    } else if (render_settings.accel_flags & 2048u) != 0u {
        // accel bit 11 (?raysplat=1): original 2DGS per-fragment ray-splat from
        // the RAW transmat rows the cull stored under the same bit. Every
        // cancellation in \`pix*Tw - Tu\` happens AT this pixel, so the error
        // cannot grow with the quad.
        let kk = pixf.x * in.Tw - in.Tu;
        let ll = pixf.y * in.Tw - in.Tv;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { return Isect(vec2<f32>(0.0), false); }
        s = pp.xy / pp.z;
    } else {
        // CONIC OPTION A: (u0, v0, J⁻¹, dw) precomputed about the splat centre.
        // Exact in exact arithmetic, but the cancellation is baked into the
        // per-Gauss constants and the extrapolation multiplies whatever error
        // they carry by the distance from the centre.
        let u0 = in.Tu.x; let v0 = in.Tu.y;
        let J00 = in.Tu.z; let J01 = in.Tv.x;
        let J10 = in.Tv.y; let J11 = in.Tv.z;
        let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
        let d = pixf - in.center_pix;
        let du_lin = J00 * d.x + J01 * d.y;
        let dv_lin = J10 * d.x + J11 * d.y;
        // Correction denominator crosses zero at the expansion's validity
        // boundary — sign flips there produce the foggy/bowtie artifact.
        let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
        if denom < 0.1 { return Isect(vec2<f32>(0.0), false); }
        let inv_d  = 1.0 / denom;
        s = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    }
    return Isect(s, true);
}

fn shade_geom(in: SplatIn, pos: vec2<f32>) -> ShadeGeom {
    let pixf = floor(pos);

    // \`--method mixed_3d\` untextured branch — Gauss is a 3D EWA ellipsoid,
    // not a 2DGS surfel. Top bit of gauss_id is the untextured flag (set in
    // surfel_cull at store time). When set:
    //   * Tu carries the inverse 2D covariance (a, b, c), NOT the transmat;
    //   * Falloff is \`α·exp(-½·m)\` with m = a·dx² + 2b·dx·dy + c·dy²;
    //   * No atlas residual — untextured Gausses carry a zero-area atlas rect
    //     at bake time; skip the sample entirely.
    //   * Depth = depth_center (no surfel-plane interpolation).
    // Matches diff_surfel_bake_render/cuda_rasterizer/forward.cu:457.
    // \`--tex3d\` 3D kernel (gauss_id bit 30): alpha from the EWA conic of the
    // (sx, sy, sz) ellipsoid (a = Tw.z, b = depth_u, c = depth_v), run's kernel on the
    // Mahalanobis m, no screen-space low-pass (the conic carries eps2d). The texture
    // is still fetched at the plane-hit uv (CONIC form), clamped to the disc |s| <= 3.
    // Matches diff_surfel_mixed_3d_tex training + the CUDA lean bake renderer.
    if (in.gauss_id & 0x40000000u) != 0u {
        let dx_t = pixf - in.center_pix;
        let m_t  = in.Tw.z * dx_t.x * dx_t.x
                 + 2.0 * in.depth_plane.x * dx_t.x * dx_t.y
                 + in.depth_plane.y * dx_t.y * dx_t.y;
        if m_t < 0.0 { discard; }
        var ka : f32;
        if BETA_KERNEL == 0u {
            ka = exp(-0.5 * m_t);
        } else {
            if m_t >= K_BETA_SQ + 1e-6 { discard; }
            ka = pow(max(0.0, 1.0 - m_t / K_BETA_SQ), in.shape);
        }
        let a_t = min(0.99, in.color.a * ka);
        if a_t < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        // Plane-hit uv: exact rational CONIC form; a near-zero denominator means the ray
        // grazes the plane far outside the disc, which the clamp maps to the rim.
        let J00 = in.Tu.z; let J01 = in.Tv.x; let J10 = in.Tv.y; let J11 = in.Tv.z;
        let du_lin = J00 * dx_t.x + J01 * dx_t.y;
        let dv_lin = J10 * dx_t.x + J11 * dx_t.y;
        let den = 1.0 + in.Tw.x * dx_t.x + in.Tw.y * dx_t.y;
        let den_s = select(den, select(-1e-6, 1e-6, den >= 0.0), abs(den) < 1e-6);
        var s_t = vec2<f32>(in.Tu.x + du_lin / den_s, in.Tu.y + dv_lin / den_s);
        let r2 = dot(s_t, s_t);
        if r2 > 9.0 { s_t = s_t * sqrt(9.0 / r2); }
        return ShadeGeom(s_t, a_t, in.depth_plane.z, false, pos);
    }

    if (in.gauss_id & 0x80000000u) != 0u {
        let dx_e = pixf - in.center_pix;
        let m_e  = in.Tu.x * dx_e.x * dx_e.x
                 + 2.0 * in.Tu.y * dx_e.x * dx_e.y
                 + in.Tu.z * dx_e.y * dx_e.y;
        if m_e < 0.0 { discard; }
        let alpha_e = min(0.99, in.color.a * exp(-0.5 * m_e));
        if alpha_e < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        return ShadeGeom(vec2<f32>(0.0), alpha_e, in.depth_plane.z, false, pos);
    }

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch). Skips the
    // per-fragment cross-product + perspective divide. Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both linear
    // in pix → u = p.x/p.z is a rational function of pix, and:
    //   u = u₀ + (J⁻¹·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
    // Slot layout: tu=(u₀, v₀, J00), tv=(J01, J10, J11), tw=(dwdxr, dwdyr, 0).
    // Ray/surfel intersection (three equivalent formulations, see intersect_uv).
    let isect = intersect_uv(in, pixf);
    if !isect.ok { discard; }
    let s = isect.s;
    let rho3d  = dot(s, s);

    // Screen-space low-pass (alpha_lp) for sub-pixel splats.
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);

    // Per-pixel intersection depth — with the CUDA low-pass fallback
    // (forward.cu: \`depth = (rho3d <= rho2d) ? plane : Tw.z\`). When the
    // screen-space low-pass kernel wins (sub-pixel / edge-on splats), the
    // ray-plane intersection \`s\` is a wild extrapolation and the plane-
    // interpolated depth is meaningless — fall back to the splat's CENTER
    // depth. Invisible in ht=0 (zv unused; order comes from the sort), but
    // in HT modes this is the CORE SORT KEY: keying an edge-on splat at an
    // extrapolated depth costs it its core slot and buries it in the tail
    // at huge \`rel\` → thin structures vanish/shimmer under ht=1/2.
    let depth_plane_interp = dot(in.depth_plane, vec3<f32>(s, 1.0));
    let depth = select(in.depth_plane.z, depth_plane_interp, rho3d <= rho2d);
    if depth < 0.2 { discard; }
    // --xclip: exact per-fragment half-space clip at the ray-surfel hit (camera space:
    // p = depth * ((px+0.5-cx)/fx, (py+0.5-cy)/fy, 1)), identical to the CUDA bake renderer.
    if render_settings.clip_intr.x != 0.0 {
        let cp = render_settings.clip_plane;
        let ci = render_settings.clip_intr;
        let hx = depth * (pixf.x + 0.5 - ci.z) / ci.x;
        let hy = depth * (pixf.y + 0.5 - ci.w) / ci.y;
        if cp.x * hx + cp.y * hy + cp.z * depth + cp.w > 0.0 { discard; }
    }

    // Kernel dispatch — BETA_KERNEL is a pipeline constant.
    var alpha_beta : f32;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        let sh = in.shape;
        // Fast paths for shape ∈ {0.5, 1, 2, 4}.
        if sh >= 1.99 && sh <= 2.01 {
            alpha_beta = base * base;                               // β=2
        } else if sh >= 0.99 && sh <= 1.01 {
            alpha_beta = base;                                      // β=1
        } else if sh >= 0.49 && sh <= 0.51 {
            alpha_beta = sqrt(base);                                // β=0.5
        } else if sh >= 3.99 && sh <= 4.01 {
            let b2 = base * base;                                   // β=4
            alpha_beta = b2 * b2;
        } else {
            alpha_beta = pow(base, sh);                             // fallback
        }
    }
    let alpha_lp   = exp(-rho2d * 0.5);
    let opa        = in.color.a;
    let b          = min(0.99, opa * max(alpha_beta, alpha_lp));
    if b < 1.0 / 255.0 { discard; }

    return ShadeGeom(s, b, depth, rho3d > rho2d, pos);
}

fn shade_color(in: SplatIn, g: ShadeGeom) -> vec3<f32> {
    var color = in.color.rgb;
    let s = g.s;

    // Adaptive-upscaling heatmap (accel_flags bits 3..8 = tau in 1/8 steps, render-settings.ts setAdaptHeat).
    // Per fragment: q = atlas texels per screen pixel (area of the pixel's footprint on the tile, from the
    // ray/plane uv at the two neighbouring pixels, the same footprint the anisotropic path uses). Colour = the
    // largest render factor the ?rs=auto rule would allow here (f · q <= tau): red = native only, yellow = 1/2,
    // green = 1/4, blue = surfel without texture (SV only, no texels to lose). Alpha-blended like the colour.
    let heat = (render_settings.accel_flags >> 3u) & 63u;
    if heat != 0u {
        var col = vec3<f32>(0.25, 0.4, 1.0);
        if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u && tex_params.probe_mode == 0u
           && in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0 {
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            let tdx  = in.uv_scale * dsdx * dims;
            let tdy  = in.uv_scale * dsdy * dims;
            let q    = sqrt(abs(tdx.x * tdy.y - tdx.y * tdy.x));
            let tau  = f32(heat) / 8.0;
            col = vec3<f32>(1.0, 0.15, 0.1);
            if 2.0 * q <= tau { col = vec3<f32>(1.0, 0.85, 0.1); }
            if 4.0 * q <= tau { col = vec3<f32>(0.15, 0.9, 0.2); }
        }
        return col;
    }

    // Atlas residual — single HW-decoded BC7 texture fetch per fragment.
    // uv_base / uv_scale are precomputed in preprocess_2dgs.wgsl so the entire
    // atlas UV mapping reduces to two fmadd + one texture sample. Untextured
    // (EWA, top bit of gauss_id) Gausses carry a zero-area rect: skip.
    // Skip-texture surfels carry a zero-area rect whose slice id is ONE PAST the last layer
    // (sentinel): the CUDA bake-render skips the lookup (SV only). Sampling it would clamp
    // the array index and read texel (0,0) of the last layer as a bogus residual (found
    // 2026-10-13 in the WebGL2 port; ~0.3 % of garden's surfels).
    if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u
       && (tex_params.probe_mode != 0u || (in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0)) {
        var uv    : vec2<f32>;
        var layer : i32 = i32(in.layer);
        var aniso_dx = vec2<f32>(0.0);   // mip_mode 2: atlas-uv footprint handed to textureSampleGrad
        var aniso_dy = vec2<f32>(0.0);
        if tex_params.probe_mode != 0u {
            // ---- Proberes: shared single-layer texture, general 2x2 affine ----
            // Mirrors the CUDA ground truth (diff_surfel_3D_sh_res_probe
            // forward.cu case 5, flag 0x1000):
            //     uv = (rho3d <= rho2d) ? s : (0,0)
            //     tx = A00*uv.x + A01*uv.y + t0
            //     ty = A10*uv.x + A11*uv.y + t1
            //
            // The low-pass collapse is NOT foldable into the affine: when the
            // screen-space kernel wins, the sample point is the probe CENTRE,
            // not the ray-splat point. Dropping it corrupts distant geometry.
            let uv_eff = select(s, vec2<f32>(0.0), g.lp);
            // Zero storage reads — all six coefficients arrive as flat varyings.
            // uv_scale = (A00, A11) diagonal, uv_skew = (A01, A10) off-diagonal.
            uv = vec2<f32>(
                in.uv_scale.x * uv_eff.x + in.uv_skew.x  * uv_eff.y + in.uv_base.x,
                in.uv_skew.y  * uv_eff.x + in.uv_scale.y * uv_eff.y + in.uv_base.y,
            );
            layer = 0;
        } else if tex_params.mip_mode == 2u {
            // Anisotropic filtering (mip_mode 2, ?mipbias=aniso). The pixel's footprint on the tile — the
            // ray/plane uv at the two neighbouring pixels, scaled to texels — goes to the sampler as explicit
            // gradients: the hardware picks the mip level from the SHORT axis and takes up to 16 taps along the
            // LONG one (the long axis of a grazing surfel is what shimmers under level-0 bilinear). Works on
            // bundles without a chain too (level 0, taps only). in.lod carries the tile's exact-box-filter
            // level cap in this mode (preprocess_2dgs); the footprint is shrunk so the HW level never exceeds
            // it or spans more than the tile, and the clamp range is narrowed by the footprint + the bilinear
            // reach of that level, so no tap reads a neighbouring tile. Mirrors vk_raster --aniso (splat.frag ANISO).
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            var tdx  = in.uv_scale * dsdx * dims;                              // texels per pixel step
            var tdy  = in.uv_scale * dsdy * dims;
            let tile = 2.0 * abs(in.uv_scale) * tex_params.uv_extent * dims;   // tile size in texels
            let hx   = 0.5 * (abs(tdx.x) + abs(tdy.x));                        // footprint half extents
            let hy   = 0.5 * (abs(tdx.y) + abs(tdy.y));
            let pmx  = max(length(tdx), length(tdy));
            let pmn  = min(length(tdx), length(tdy));
            let lodlen = max(pmn, pmx / 16.0);                                 // what the HW derives the level from
            var sc   = min(1.0, exp2(in.lod) / max(lodlen, 1e-6));
            sc = max(0.0, min(sc, 0.5 * min((tile.x - 1.0) / max(hx, 1e-6), (tile.y - 1.0) / max(hy, 1e-6))));
            tdx *= sc; tdy *= sc;
            let mg   = (vec2<f32>(hx, hy) * sc + 0.5 * (max(lodlen * sc, 1.0) - 1.0)) / dims;
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 / dims - mg, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
            aniso_dx = tdx / dims; aniso_dy = tdy / dims;
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        var rgba : vec4<f32>;
        if tex_params.mip_mode == 2u && tex_params.probe_mode == 0u {
            rgba = textureSampleGrad(atlas, atlas_samp, uv, layer, aniso_dx, aniso_dy);
        } else {
            let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
            rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        }
        if tex_params.probe_mode == 3u {
            // Pair format: two surfels share one RGBA texel; this surfel decodes it with its own 3x4 matrix + bias
            // (record floats 6..20). The exporter folds the per-channel dequantisation into the matrix, so the header's
            // atlas_scale/offset are 1/0 and are not applied here.
            let b = (in.gauss_id & 0x3FFFFFFFu) * 21u + 6u;
            let r = vec4<f32>(rgba.r, rgba.g, rgba.b, rgba.a);
            color = color + vec3<f32>(
                dot(vec4<f32>(probe_recs[b + 0u], probe_recs[b + 1u], probe_recs[b + 2u],  probe_recs[b + 3u]),  r) + probe_recs[b + 12u],
                dot(vec4<f32>(probe_recs[b + 4u], probe_recs[b + 5u], probe_recs[b + 6u],  probe_recs[b + 7u]),  r) + probe_recs[b + 13u],
                dot(vec4<f32>(probe_recs[b + 8u], probe_recs[b + 9u], probe_recs[b + 10u], probe_recs[b + 11u]), r) + probe_recs[b + 14u]);
        } else {
            color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
        }
    }
    return max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));
}

fn shade(in: SplatIn, pos: vec2<f32>) -> ShadeOut {
    let g = shade_geom(in, pos);
    return ShadeOut(shade_color(in, g), g.a, g.zv);
}

// ---------------------------------------------------------------------------
// Sorted path (default): premultiplied output, blend order = radix-sorted
// instance order. Popping-prone when opaque surfels interpenetrate (per-splat
// center-depth global order vs per-pixel intersection order).
// ---------------------------------------------------------------------------
@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
    return vec4<f32>(sh.rgb, 1.0) * sh.a;
}

// ---------------------------------------------------------------------------
// Texture-aware upscaling (nest-splatting docs/UPSCALING_GRADIENT_AWARE.md, "green gather" mode).
// Second render target, same premultiplied back-to-front blend as the colour: (α·∂Y/∂x, α·∂Y/∂y, 0, α).
// The blend then yields Σ α_i T_i · slope_i, the image-space slope contributed by the surfel textures.
// slope_i = d(residual)/d(pixel) of the atlas at this fragment: one textureGather of the green channel
// (luminance proxy; no extra data, no bake step) gives the 2x2 texels around the sample, their bilinear
// derivative in texel units, chained with d(texel)/d(pixel) from the ray-splat at the neighbouring
// pixels. Units: residual per LOW-RES pixel, which is what the upscaler's Hermite slopes are in.
// ---------------------------------------------------------------------------
// Slope source (pipeline constant): 0 = green-channel gather of the colour atlas (no data, FD + λ·slope in the
// upscaler), 1 = P field in the alpha of a BC7 sidecar (vk_raster --grad 5), 2 = BC5 slope sidecar (dY/du, dY/dv per
// texel, vk_raster --grad 4). 1/2 are finetuned for slope-only Hermite and follow the Vulkan path exactly: uv clamped
// to the tile's texel-centre range, no magnification gate, luminance-weighted ReLU gate (in fs_slope).
override SLOPE_SRC : u32 = 0u;
@group(3) @binding(6) var                slope_tex    : texture_2d_array<f32>;
@group(3) @binding(7) var<uniform>       slope_params : vec4<f32>;   // scale_u, off_u, scale_v, off_v (P: scale_p in .x)

fn tex_slope(in: SplatIn, g: ShadeGeom, pos: vec2<f32>) -> vec2<f32> {
    if tex_params.atlas_enabled == 0u || (in.gauss_id & 0xC0000000u) != 0u || tex_params.probe_mode != 0u
       || in.uv_scale.x == 0.0 || in.uv_scale.y == 0.0 || g.lp {
        return vec2<f32>(0.0);
    }
    let pixf = floor(pos);
    let ix = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
    let iy = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
    if !ix.ok || !iy.ok { return vec2<f32>(0.0); }
    let dsdx = ix.s - g.s;
    let dsdy = iy.s - g.s;
    let dims = vec2<f32>(textureDimensions(atlas));
    let k    = in.uv_scale * dims;                      // texels per unit of surfel uv
    var dPu : f32; var dPv : f32;
    if SLOPE_SRC == 0u {
        let uv   = in.uv_base + g.s * in.uv_scale;
        // Only where the texture is MAGNIFIED: with more than ~1.5 texels per low-res pixel the bilinear slope of
        // the 2x2 footprint says nothing about the image (minified / grazing surfels) and overshoots.
        let tpp  = max(length(abs(k) * dsdx), length(abs(k) * dsdy));
        if tpp > 1.5 { return vec2<f32>(0.0); }
        // The gathered 2x2 footprint must stay inside this surfel's tile (else it mixes in a neighbour tile).
        let half = abs(in.uv_scale) * tex_params.uv_extent - 1.0 / dims;
        if any(abs(uv - in.uv_base) > half) { return vec2<f32>(0.0); }
        let f    = fract(uv * dims - 0.5);                 // position inside the gathered 2x2 footprint
        let g4   = textureGather(1, atlas, atlas_samp, uv, i32(in.layer));   // x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0)
        dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * tex_params.atlas_scale;   // per texel, residual units
        dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * tex_params.atlas_scale;
    } else {
        // Mip-matched slope (accel bit 14, ?slope_mip=1): fetch the sidecar at the surfel's colour mip level
        // (in.lod — computed by preprocess for the CURRENT render target, i.e. the low-res one under upscaling)
        // so the slope is the derivative of the texture band-limited to the render rate. Level 0 otherwise.
        let nlev = f32(textureNumLevels(slope_tex));
        var lvl  = 0.0;
        if (render_settings.accel_flags & 16384u) != 0u && tex_params.mip_mode == 1u {   // aniso (2) stores the level CAP in lod, not a level
            lvl = clamp(round(in.lod), 0.0, max(nlev - 1.0, 0.0));
        }
        let sc   = exp2(lvl);
        let dimsl = dims / sc;                               // texel grid of the sampled level
        // Same tile clamp as shade_color (CUDA / vk_raster: au in [u0, u0+w-1]) at the sampled level.
        let hw = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * sc / dims, vec2<f32>(0.0));
        let uv = clamp(in.uv_base + g.s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        if SLOPE_SRC == 1u {
            let f  = fract(uv * dimsl - 0.5);
            var g4 : vec4<f32>;
            if lvl == 0.0 {
                g4 = textureGather(3, slope_tex, atlas_samp, uv, i32(in.layer));
            } else {
                // textureGather is level-0 only: read the 2x2 texel centres of level \`lvl\` with point-exact
                // bilinear taps (x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0), the gather's component order).
                let c0 = (floor(uv * dimsl - 0.5) + 0.5) / dimsl;
                let du = vec2<f32>(1.0 / dimsl.x, 0.0); let dv = vec2<f32>(0.0, 1.0 / dimsl.y);
                g4 = vec4<f32>(textureSampleLevel(slope_tex, atlas_samp, c0 + dv,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du + dv, i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0,           i32(in.layer), lvl).a);
            }
            // per texel OF THE SAMPLED LEVEL → per level-0 texel (k below is in level-0 texels per uv unit)
            dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * slope_params.x / sc;
            dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * slope_params.x / sc;
        } else {
            let t = textureSampleLevel(slope_tex, atlas_samp, uv, i32(in.layer), lvl).rg;
            dPu = t.x * slope_params.x + slope_params.y;
            dPv = t.y * slope_params.z + slope_params.w;
        }
        // Texel-rate gate (same idea as the green mode's 1.5 cut, soft): at grazing / minified fragments the
        // pixel step crosses more than a texel OF THE SAMPLED LEVEL, so the per-texel slope times that step is
        // texel noise amplified by the step length — the speckle on edge-on surfels. Full weight up to 1 texel
        // per pixel, zero from 2. (The Vulkan finetune path has no gate; magnified fragments are unchanged.)
        let tppl = max(length(abs(k) * dsdx), length(abs(k) * dsdy)) / sc;
        let gate = clamp(2.0 - tppl, 0.0, 1.0);
        dPu *= gate; dPv *= gate;
    }
    return vec2<f32>(dPu * k.x * dsdx.x + dPv * k.y * dsdx.y,
                     dPu * k.x * dsdy.x + dPv * k.y * dsdy.y);
}

struct SlopeOut {
    @location(0) c : vec4<f32>,
    @location(1) g : vec4<f32>,
};

@fragment
fn fs_slope(in: VertexOutput) -> SlopeOut {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    var sl = tex_slope(sp, g, in.position.xy);
    if SLOPE_SRC != 0u {   // channels clamped by the outer ReLU carry no slope (mode 0: rgb == 0 there)
        sl *= dot(vec3<f32>(0.299, 0.587, 0.114), select(vec3<f32>(0.0), vec3<f32>(1.0), rgb > vec3<f32>(0.0)));
    }
    return SlopeOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(sl, 0.0, 1.0) * g.a);
}

// ---------------------------------------------------------------------------
// Two-pass "opaque layer + translucent front" path (?twopass=1, 2026-10-06,
// hardware depth 2026-10-07).
// Video-game style: pass 1 rasterises every surfel with the hardware depth
// test and keeps, per pixel, the NEAREST fragment whose kernel alpha exceeds
// \`thresh\` — its SV+atlas colour is written opaque into a depth32float-backed
// pass (no sort needed). Pass 2 draws the same sorted list again with the
// depth test LESS against that layer (read-only), so fragments at or behind
// the layer are rejected by the z-buffer — on hardware with early-Z before the
// fragment shader runs — and only the fragments in front are alpha-blended
// (sub-threshold by construction: anything above the threshold in front would
// have won pass 1). Pixels with no layer keep the clear depth (1.0) and
// composite exactly as the sorted path does.
//
// The depth comes from the VERTEX stage (HW_DEPTH build variant, see vs_main):
// the bound corners carry the surfel plane's z_ndc, which interpolates to the
// exact per-pixel ray/plane depth. The low-pass centre-depth fallback of the
// fragment path is not reproduced (sub-pixel splats test at their plane depth
// instead of their centre depth) — a negligible approximation.
// ---------------------------------------------------------------------------
struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};
struct TwoPassParams {
  thresh : f32,   // kernel-alpha threshold for the opaque layer
  _p0    : f32,
  _p1    : u32,
  _p2    : u32,
};
@group(3) @binding(0) var<uniform> camera  : CameraUniforms;
@group(3) @binding(1) var<uniform> twopass : TwoPassParams;

// View-space depth of the surfel plane at screen position \`pix\` (vertex stage).
// EWA ellipsoids (top bit of gauss_id) are billboards at their centre depth.
// Where the plane is degenerate at the corner (behind the eye / conic expansion
// invalid) fall back to the centre depth so the quad stays drawable.
fn corner_depth(sp: SplatIn, pix: vec2<f32>) -> f32 {
    var z = sp.depth_plane.z;
    if (sp.gauss_id & 0xC0000000u) == 0u {   // EWA + --tex3d kernels: centre depth
        let is = intersect_uv(sp, pix);
        if is.ok {
            let zp = dot(sp.depth_plane, vec3<f32>(is.s, 1.0));
            if zp >= 0.2 { z = zp; }
        }
    }
    return max(z, 0.2);
}

// Pass 1 — opaque layer. No blending; depth test LESS + write.
@fragment
fn fs_opaque(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0);
}

// Pass 2 — translucent front, sorted back-to-front, premultiplied over the
// pass-1 image; depth test LESS against the layer (read-only). The threshold
// discard is redundant with the depth test (see above) and kept so the layer
// fragment itself can never blend twice.
@fragment
fn fs_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0) * g.a;
}

// ---------------------------------------------------------------------------
// Overdraw counters (the "Overdraw" view): each entry point adds 1.0 to an
// r16float target under additive blending, so the target holds per-pixel
// fragment counts (exact up to 2048). \`raster\` counts every fragment the
// rasteriser invokes (no discards); \`shaded\` counts fragments that survive
// every cull, i.e. the ones that pay for the colour stage. The two-pass
// variants pair with the same depth states as fs_opaque / fs_front, so with
// early-Z the counts show what the z-buffer rejected.
// ---------------------------------------------------------------------------
@fragment
fn fs_count_raster(in: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_shaded(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a < 0.0 { discard; }   // keeps the geometry stage live; never true
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_opaque(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    return vec4<f32>(1.0);
}


// ---------------------------------------------------------------------------
// Re-fetch upscaling (?up=refetch; nest-splatting scripts/topk_refetch_eval.py, docs/UPSCALING_GRADIENT_AWARE.md).
// The low-res pass keeps, per low-res pixel, the RF_K front-most surfels whose kernel alpha reaches rf.thr and their
// exact blend weights w = alpha * T; the full-res pass then upscales the low-res colour with FD-Hermite and adds, for
// each of the 4 low-res pixels around the output pixel (bilinear weights) and each kept surfel,
//     w * (feat(uv at the output pixel) - feat(uv at the low-res pixel)),
// i.e. the surfel's own texture re-fetched at the output pixel's exact ray/plane uv. Pass order per frame:
//   1. fs_refetch_select  — atomicMax insertion of (rank + 1) into RF_K slots (larger rank = nearer, back-to-front sort)
//   2. fs_refetch_cw      — colour + slot weights in one blended pass: only slot k's surfel writes alpha into channel k,
//                           every fragment attenuates it (premultiplied over), so channel k ends at alpha_k * T_k
//   3. fs_refetch_up      — full-res fullscreen pass (vs_rf_full)
// ---------------------------------------------------------------------------
const RF_K : u32 = 4u;
struct RefetchParams { wl : u32, hl : u32, W : u32, H : u32, thr : f32, gain : f32, edge : u32, _p1 : u32 };
@group(3) @binding(10) var<storage, read_write> rf_keys : array<atomic<u32>>;
@group(3) @binding(11) var<uniform>             rf      : RefetchParams;
@group(3) @binding(12) var                      rf_wa   : texture_2d<f32>;
@group(3) @binding(13) var                      rf_wb   : texture_2d<f32>;
@group(3) @binding(14) var                      rf_low  : texture_2d<f32>;
@group(3) @binding(15) var                      rf_wc   : texture_2d<f32>;

fn rf_base(pos: vec2<f32>) -> u32 {
    let p = vec2<u32>(floor(pos));
    return (min(p.y, rf.hl - 1u) * rf.wl + min(p.x, rf.wl - 1u)) * RF_K;
}

@fragment
fn fs_refetch_select(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a >= rf.thr {
        let base = rf_base(in.position.xy);
        var v = in.rank + 1u;
        for (var k = 0u; k < RF_K; k++) {
            let old = atomicMax(&rf_keys[base + k], v);
            if old == 0u { break; }
            v = min(old, v);         // the smaller of the two moves on to the next slot
        }
    }
    return vec4<f32>(0.0);
}

struct RefetchOut {
    @location(0) c  : vec4<f32>,
    @location(1) wa : vec4<f32>,
    @location(2) wb : vec4<f32>,
    @location(3) wc : vec4<f32>,
};

// Targets after the blend: wa = (w0, w1, w2), wb = (w3, S.r, S.g), wc = (S.b, -, -), with w_k = alpha_k T_k of slot k
// and S = sum_k w_k feat_k (the slots' share of the low-res colour) — premultiplied over gives both directly.
@fragment
fn fs_refetch_cw(in: VertexOutput) -> RefetchOut {
    let sp  = splat_in(in);
    let g   = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    let base = rf_base(in.position.xy);
    let key  = in.rank + 1u;
    var m = vec4<f32>(0.0);
    for (var k = 0u; k < RF_K; k++) {
        if atomicLoad(&rf_keys[base + k]) == key { m[k] = 1.0; }
    }
    let inslot = min(1.0, m.x + m.y + m.z + m.w);
    let sf = rgb * inslot;
    return RefetchOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(m.xyz, 1.0) * g.a,
                      vec4<f32>(m.w, sf.r, sf.g, 1.0) * g.a, vec4<f32>(sf.b, 0.0, 0.0, 1.0) * g.a);
}

// Kernel alpha of 2D surfel \`in\` at (fractional) low-res pixel \`pixf\`, for a render whose pixels are 1/lp_scale of a
// low-res pixel (the screen-space low-pass width scales with the render's pixel size); 0 where the fragment path
// discards. Same formula as shade_geom's 2D branch (pixf = the pixel index there), without the depth test.
fn rf_alpha(in: SplatIn, isect: Isect, pixf: vec2<f32>, lp_scale: f32) -> f32 {
    if !isect.ok { return 0.0; }
    let rho3d = dot(isect.s, isect.s);
    let d_pix = (in.center_pix - pixf) * lp_scale;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    let alp = exp(-rho2d * 0.5);
    var ab : f32;
    if BETA_KERNEL == 0u {
        ab = exp(-rho3d * 0.5);
    } else if rho3d >= K_BETA_SQ + 1e-6 {
        ab = 0.0;
    } else {
        let bs = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        ab = select(pow(bs, in.shape), alp, bs <= 0.0);   // pow only where the base is positive
    }
    let b = min(0.99, in.color.a * max(ab, alp));
    return select(b, 0.0, b < 1.0 / 255.0);
}

@vertex
fn vs_rf_full(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn rf_f(x: i32, y: i32) -> vec3<f32> {
    return textureLoad(rf_low, vec2<i32>(clamp(x, 0, i32(rf.wl) - 1), clamp(y, 0, i32(rf.hl) - 1)), 0).rgb;
}
fn rf_gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return rf_f(1, y) - rf_f(0, y); }
    if (x >= i32(rf.wl) - 1) { return rf_f(x, y) - rf_f(x - 1, y); }
    return 0.5 * (rf_f(x + 1, y) - rf_f(x - 1, y));
}
fn rf_gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return rf_f(x, 1) - rf_f(x, 0); }
    if (y >= i32(rf.hl) - 1) { return rf_f(x, y) - rf_f(x, y - 1); }
    return 0.5 * (rf_f(x, y + 1) - rf_f(x, y - 1));
}
fn rf_gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return rf_gx(x, 1) - rf_gx(x, 0); }
    if (y >= i32(rf.hl) - 1) { return rf_gx(x, y) - rf_gx(x, y - 1); }
    return 0.5 * (rf_gx(x, y + 1) - rf_gx(x, y - 1));
}

@fragment
fn fs_refetch_up(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = fc.x - 0.5; let Y = fc.y - 0.5;
    let rx = f32(rf.wl) / f32(rf.W); let ry = f32(rf.hl) / f32(rf.H);
    let x = (X + 0.5) * rx - 0.5; let y = (Y + 0.5) * ry - 0.5;     // output pixel in low-res pixel coordinates
    // FD-Hermite base (same as the upscaler's mode 2)
    let sx = clamp(x, 0.0, f32(rf.wl) - 1.0); let sy = clamp(y, 0.0, f32(rf.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(rf.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(rf.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
    let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
    let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
    var c = vec3<f32>(0.0);
    for (var b = 0; b < 2; b++) {
        for (var a = 0; a < 2; a++) {
            let i = i0 + a; let j = j0 + b;
            c += rf_f(i, j) * (Hx[a] * Hy[b]) + rf_gx(i, j) * (Gx[a] * Hy[b]) + rf_gy(i, j) * (Hx[a] * Gy[b]) + rf_gxy(i, j) * (Gx[a] * Gy[b]);
        }
    }
    // Re-fetch correction over the 4 surrounding low-res records (bilinear weights bw, edge-clamped like the prototype).
    // Texture term:  sum_n bw_n (sum_k w'_nk f_hi(surfel_nk) - S_n),  S_n = sum_k w_nk f_lo,nk (stored by fs_refetch_cw),
    // so only the full-res side is evaluated here: one unpack, one ray/plane intersection, one atlas fetch per slot.
    // (A merge of the 4 neighbours' slots by surfel was tried and was 6x SLOWER: runtime-indexed local arrays spill.)
    // Edge recompose (rf.edge): w'_k = alpha'_k T'_k with alpha'_k the kernel alpha re-evaluated at the OUTPUT pixel
    // (native low-pass width) and T'_k = T_k * prod_{j<k} (1 - alpha'_j) / (1 - alpha_j) — the stack re-chained with the
    // sub-threshold leaks kept; T_k = w_k / alpha_k from the stored weight and the alpha recomputed at the low-res pixel.
    // What is behind the stack, R_n = C_lo,n - S_n = T_K,n B_n, is rescaled to the new transmittance with ONE behind
    // colour per output pixel, B = sum bw R / sum bw T_K, regularised towards the Hermite colour where every
    // neighbour's stack is opaque (nothing known behind it). edge = 0 reproduces the plain texture re-fetch exactly.
    var corr = vec3<f32>(0.0);
    if rf.gain > 0.0 && tex_params.atlas_enabled != 0u && tex_params.probe_mode == 0u {
        let fx0 = floor(x); let fy0 = floor(y);
        let fx = x - fx0; let fy = y - fy0;
        let pix_hi = vec2<f32>(x, y);
        let lp = f32(rf.W) / f32(rf.wl);          // output pixels per low-res pixel
        let edge = rf.edge != 0u;
        var rsum = vec3<f32>(0.0); var tk_sum = 0.0; var tkp_sum = 0.0;
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let li = clamp(i32(fx0) + a, 0, i32(rf.wl) - 1); let lj = clamp(i32(fy0) + b, 0, i32(rf.hl) - 1);
                let bw = select(1.0 - fx, fx, a == 1) * select(1.0 - fy, fy, b == 1);
                if bw <= 0.0 { continue; }
                let q = vec2<i32>(li, lj);
                let wa = textureLoad(rf_wa, q, 0); let wb = textureLoad(rf_wb, q, 0); let wc = textureLoad(rf_wc, q, 0);
                let s_n = vec3<f32>(wb.g, wb.b, wc.r);
                var acc = -s_n;
                let wk = vec4<f32>(wa.r, wa.g, wa.b, wb.r);
                let base = (u32(lj) * rf.wl + u32(li)) * RF_K;
                let pix_lo = vec2<f32>(f32(li), f32(lj));
                var rho = 1.0; var tk = 1.0; var tkp = 1.0;
                for (var k = 0u; k < RF_K; k++) {
                    let key = atomicLoad(&rf_keys[base + k]);
                    if key == 0u { break; }
                    let sp = unpack_splat(splats_2d[indices[key - 1u]]);
                    var w_new = wk[k];
                    var hi = intersect_uv(sp, pix_hi);
                    if edge && (sp.gauss_id & 0xC0000000u) == 0u {
                        let a_lo = max(rf_alpha(sp, intersect_uv(sp, pix_lo), pix_lo, 1.0), 1e-3);
                        let a_hi = rf_alpha(sp, hi, pix_hi, lp);
                        let t_k = wk[k] / a_lo;                 // transmittance in front of slot k at low res (leaks included)
                        w_new = a_hi * rho * t_k;
                        tk  = t_k * (1.0 - a_lo);
                        tkp = rho * t_k * (1.0 - a_hi);
                        rho *= (1.0 - a_hi) / max(1.0 - a_lo, 0.01);
                    }
                    if w_new <= 0.0 { continue; }
                    if !hi.ok { hi = intersect_uv(sp, pix_lo); }   // rare conic-validity edge: no re-fetch
                    var su = hi.s;
                    if (sp.gauss_id & 0x40000000u) != 0u { let r2 = dot(su, su); if r2 > 9.0 { su = su * sqrt(9.0 / r2); } }   // tex3d disc clamp
                    // EWA rows (top bit) skip the atlas inside shade_color: f = base colour = their f_lo, exact.
                    acc += w_new * shade_color(sp, ShadeGeom(su, 1.0, 1.0, false, pix_hi));
                }
                corr += bw * acc;
                if edge {
                    rsum += bw * (rf_f(li, lj) - s_n);
                    tk_sum += bw * tk; tkp_sum += bw * tkp;
                }
            }
        }
        if edge {
            let eps = 0.05;
            let behind = (rsum + eps * c) / (tk_sum + eps);
            corr += (tkp_sum - tk_sum) * behind;
        }
    }
    return vec4<f32>(max(c + rf.gain * corr, vec3<f32>(0.0)), 1.0);
}
`,zu=`const WG_SIZE = 256u;
const TILE_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 2 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 4 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

struct DrawIndirect {
    vertex_count: u32,
    instance_count: u32,
    first_vertex: u32,
    first_instance: u32,
}

@group(0) @binding(0) var<storage, read_write> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read_write> draw_indirect: DrawIndirect;

@compute @workgroup_size(1)
fn write_dispatch_triples(
    @builtin(workgroup_id)        wid: vec3<u32>,
    @builtin(local_invocation_id) lid: vec3<u32>
) {
    if wid.x == 0u && lid.x == 0u {
        draw_indirect.instance_count = infos.keys_size;
        // Histogram/Scatter dispatch X (elements divided by WG_SIZE)
        infos.dispatch_x = (infos.keys_size + WG_SIZE - 1u) / WG_SIZE;
        infos.dispatch_y = 1u;
        infos.dispatch_z = 1u;

        // Two-level tile counts
        let t0 = (infos.dispatch_x + TILE_SIZE - 1u) / TILE_SIZE;
        let t1 = (t0 + TILE_SIZE - 1u) / TILE_SIZE;

        // Triples for L0/L1 plus t0/t1
        infos.l0_x = t0; infos.l0_y = RS_RADIX_SIZE; infos.l0_z = 1u; infos.l0_t = t0;
        infos.l1_x = t1; infos.l1_y = RS_RADIX_SIZE; infos.l1_z = 1u; infos.l1_t = t1;
    }
}`,Iu=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
//
// Reads per-Gauss \`Surfel\` (position + 2D scale + rotation + opacity + shape),
// builds the transmat T = (splat2world)^T · world2ndc · ndc2pix, computes the
// axis-aligned screen-space bbox via compute_aabb, AABB-culls against the
// viewport, and writes the alive Gauss compactly into:
//   • splats_2d  : Splat2DGS (Tu/Tv/Tw + opacity + pos + extent + depth_plane + gauss_id + shape)
//   • sh_solvers : SHSolver  (view_dir + opacity + gauss_id, for later SH/SV eval)
//   • sort_depths/sort_indices : keys & payload for radix sort
//
// Compaction uses workgroup-local prefix sum + a single atomicAdd per workgroup
// to allocate the output offset. No inter-workgroup spin-wait.

struct GeneralInfo {
  keys_size  : atomic<u32>,
  dispatch_x : u32, dispatch_y : u32, dispatch_z : u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE : u32 = 256u;

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

// 32-byte input surfel (matches PLY worker output).
//
// IMPORTANT: WGSL would naturally size this struct at 28 bytes (3 f32 +
// 4 u32, all 4-aligned) with \`array<Surfel>\` stride 28, but the JS-side
// SurfelPlyParser writes 32 bytes per record (xyz f32 + 4 u32 + 1 pad u32).
// Without the explicit \`_pad\` field below, surfel N would read at offset
// N*28 in WGSL while JS wrote it at N*32 — every surfel past #0 ends up
// reading garbage from the middle of an earlier record. That single
// alignment bug is what made the renderer look completely broken.
struct Surfel {
  x : f32, y : f32, z : f32,
  opacity_shape : u32,            // 2× f16: [opacity, shape]
  scale_rot     : array<u32, 3>,  // 6× f16: [scale_x, scale_y, rot_w, rot_x, rot_y, rot_z]
  // \`--method mixed_3d\` aux word — was \`_pad\` before mixed_3d. JS PLY parser
  // writes 1 (is_textured=true, scale_z=0) for every Gauss in pre-mixed_3d
  // bundles, so the textured branch below is bit-identically the old path
  // (the EWA branch is gated on \`(aux >> 16) & 1 == 0u\`).
  //   bits  0..15 : scale_z (f16, exp'd from log-space PLY column);
  //                 ignored when is_textured = 1.
  //   bit      16 : is_textured (1 = 2DGS surfel + atlas residual path;
  //                              0 = mixed_3d untextured 3D EWA ellipsoid).
  //   bits 17..31 : reserved.
  aux           : u32,
};

// 96-byte output splat. Extended 2026-07-23 with atlas-UV precomp fields
// (uv_base_*, uv_scale_*, layer) that preprocess_2dgs.wgsl fills once per
// alive Gauss so the fragment shader can do \`uv = uv_base + s * uv_scale\`
// and a single HW texture fetch — kills 5 storage-buffer reads + 2 fp32
// divides per fragment on the atlas path. Cull just zero-initialises the
// new fields; preprocess overwrites.
//
// Stride must match preprocess_2dgs.wgsl + render_2dgs.wgsl + the host TS
// (\`C_SIZE_2D_SPLAT = 96\` in gaussian-renderer.ts).
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32, // 2× i16 center_pix in ¼-px units (pack_center / unpack_center)
  extent       : u32, // 2× f16 extent_pix
  color_rg     : u32, // 2× f16, written by preprocess
  color_b_shape: u32, // 2× f16, .x=color.b .y=shape
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

// 12-byte solver — view dir + opacity + idx. Preprocess reads this to evaluate
// per-frame view-dependent color and writes the result into Splat2DGS.color_*.
struct SHSolver {
  dir_xy        : u32, // 2× f16 = [dir.x, dir.y]
  dir_z_opacity : u32, // 2× f16 = [dir.z, opacity]
  idx           : u32, // gauss_id (input vertex index)
};

// 32-byte RenderSettings (matches render-settings.ts canonical layout).
//   word at offset 8 = accel_flags
//     bit 0 → OAC: opacity-aware cutoff (shrink k per-surfel by opacity·shape)
//     bit 1 → SPR: sub-pixel rejection (drop tiny low-opacity surfels)
//     bit 2 → BFC: backface cull (drop surfels where normal points away from
//             camera; only safe on 1-sided bakes — many 2DGS bakes train
//             double-sided so leave OFF unless visually verified)
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  _pad0            : u32,
  gaussian_scaling : f32,
  kernel_size      : f32,
  mip_spatting     : u32,
  walltime         : f32,
  // --xclip (2026-11-04): exact half-space clip, camera space. clip_plane = (a,b,c,d) with the
  // fragment REMOVED where a*x+b*y+c*z+d > 0 at its ray-surfel hit (kept half n.x+d <= 0, the
  // nest-splatting Camera.clip_plane convention, transformed per frame by the host).
  // clip_intr = (fx, fy, cx, cy) in render-target pixels; clip_intr.x == 0 => clip off.
  clip_plane       : vec4<f32>,
  clip_intr        : vec4<f32>,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       surfels   : array<Surfel>;
@group(1) @binding(1) var<storage, read_write> splats_2d : array<Splat2DGS>;

@group(2) @binding(0) var<storage, read_write> sort_infos    : GeneralInfo;
@group(2) @binding(1) var<storage, read_write> sort_depths   : array<u32>;
@group(2) @binding(2) var<storage, read_write> sort_indices  : array<u32>;
@group(2) @binding(3) var<storage, read_write> sh_solvers    : array<SHSolver>;

// Backface-cull params (centroid-oriented BFC — matches nest-splatting's
// train.py --backface_cull + the CUDA lean_occ set_backface_cull):
//   n_out = disc_normal * sign(dot(disc_normal, pos − centroid))
//   cull when dot(normalize(pos − cam), n_out) > cos_thr
// cos_thr > 1.0 is the OFF sentinel → the ACCEL_BFC bit falls back to the
// legacy sign-naive test (old bundles keep their behavior). Host seeds the
// centroid from the loaded surfel cloud's mean at boot.
struct BfcParams {
  cos_thr : f32,
  cx : f32, cy : f32, cz : f32,
};
@group(3) @binding(1) var<uniform> bfc_params : BfcParams;
//#if STATIC_KEYS
// Fixed per-surfel sort keys (portal background): > 0 replaces the live view depth as the
// radix-sort key, so these surfels keep one global order however the camera moves.
@group(3) @binding(2) var<storage, read> static_keys : array<f32>;
//#endif

// Splat2DGS.pos: centre in ¼-px units as two i16 (low = x, high = y).
// Exact integer grid (pack2x16snorm's 1/32767 scale is NOT a ¼-px grid and
// drifts 0.12 px by x = 4000). Unpack in render_2dgs.wgsl: unpack_center.
fn pack_center(c: vec2<f32>) -> u32 {
    let q = vec2<i32>(round(c * 4.0));
    return (u32(q.x) & 0xFFFFu) | (u32(q.y) << 16u);
}

fn quat_to_rotmat(q: vec4<f32>) -> mat3x3<f32> {
    let qn = q * inverseSqrt(max(dot(q, q), 1e-20));
    let w = qn.x; let x = qn.y; let y = qn.z; let z = qn.w;
    let x2 = x*x; let y2 = y*y; let z2 = z*z;
    let xy = x*y; let xz = x*z; let yz = y*z;
    let wx = w*x; let wy = w*y; let wz = w*z;
    return mat3x3<f32>(
        vec3<f32>(1.0 - 2.0*(y2 + z2), 2.0*(xy + wz),       2.0*(xz - wy)),
        vec3<f32>(2.0*(xy - wz),       1.0 - 2.0*(x2 + z2), 2.0*(yz + wx)),
        vec3<f32>(2.0*(xz + wy),       2.0*(yz - wx),       1.0 - 2.0*(x2 + y2))
    );
}

// Opacity-aware cutoff (OAC) — BetaScaled kernel.
// The fragment shader discards when \`opacity · (1 − ρ²/k²)^shape < 1/255\`.
// Solve for ρ:
//   k_eff = k · √(1 − (1/(255·opa))^(1/shape))
// Tighter than the compact-support k, especially for low-opacity surfels.
// Returns at least 0.5 to avoid the bbox shrinking below the minimum quad
// the vertex shader applies.
fn opacity_aware_cutoff(k: f32, opacity: f32, shape: f32) -> f32 {
    let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
    let inv_pow = pow(inv, 1.0 / max(shape, 1e-3));
    let inside = max(0.0, 1.0 - inv_pow);
    return max(0.5, k * sqrt(inside));
}

// Opacity-aware cutoff — Gaussian kernel (--kernel gaussian, shape == 0).
// Solve \`α · exp(-ρ²/2) = 1/255\` → ρ = √(2·log(255·α)).
// For α = 1 → ρ ≈ 3.33; α = 0.5 → 3.0; α = 0.1 → 2.5. Tighter than the
// hardcoded 3.0 in the beta path's caller for low-α surfels, which is
// exactly the win we want on Gaussian bakes (loose binning was leaving the
// SnugBox+AccuTile pass over-emitting tiles for these). Same 0.5 floor.
fn opacity_aware_cutoff_gaussian(opacity: f32) -> f32 {
    let log_term = log(255.0 * max(opacity, 1.0 / 255.0));
    return max(0.5, sqrt(2.0 * log_term));
}

// Axis-aligned bbox of the projected disk via the standard transmat conic
// (matches CUDA \`compute_aabb\` in diff_surfel_bake_render). Returns
// (cx, cy, hx, hy) in pixel coords. hx<0 ⇒ degenerate (caller culls).
fn compute_aabb(T: mat3x3<f32>, cutoff: f32) -> vec4<f32> {
    let t = vec3<f32>(cutoff * cutoff, cutoff * cutoff, -1.0);
    let d = dot(t, T[2] * T[2]);
    if d >= 0.0 { return vec4<f32>(0.0, 0.0, -1.0, -1.0); }
    let f = (1.0 / d) * t;
    let p  = vec2<f32>(dot(f, T[0] * T[2]), dot(f, T[1] * T[2]));
    let h0 = p * p - vec2<f32>(dot(f, T[0] * T[0]), dot(f, T[1] * T[1]));
    if any(h0 < vec2<f32>(0.0)) { return vec4<f32>(0.0, 0.0, -1.0, -1.0); }
    let h = sqrt(h0);
    return vec4<f32>(p.x, p.y, h.x, h.y);
}

// SnugBox AABB — same ellipse, computed via the cross-product / quadratic
// form Q(p) = A·px² + 2B·px·py + E·py² + 2D·px + 2F·py + G ≤ 0 with
// coefficients derived from {n0,n1,n2} = {Tv×Tw, Tw×Tu, Tu×Tv}. Numerically
// stable: doesn't catastrophically lose digits on edge-on splats where the
// standard \`compute_aabb\` returns negative axes (caller would cull). Ports
// directly from Halloumi-web-splat's preprocess_2dgs.wgsl::compute_aabb_snugbox.
// On bonsai's foreground glass orb this recovers ~12% of foreground pixels.
fn compute_aabb_snugbox(T: mat3x3<f32>, cutoff: f32) -> vec4<f32> {
    let k_sq = cutoff * cutoff;
    let Tu = T[0];
    let Tv = T[1];
    let Tw = T[2];

    let n0 = cross(Tv, Tw);  // coef of px
    let n1 = cross(Tw, Tu);  // coef of py
    let n2 = cross(Tu, Tv);  // constant

    let A_ = n0.x*n0.x + n0.y*n0.y - k_sq * n0.z*n0.z;
    let B_ = n0.x*n1.x + n0.y*n1.y - k_sq * n0.z*n1.z;
    let E_ = n1.x*n1.x + n1.y*n1.y - k_sq * n1.z*n1.z;
    let D_ = n0.x*n2.x + n0.y*n2.y - k_sq * n0.z*n2.z;
    let F_ = n1.x*n2.x + n1.y*n2.y - k_sq * n1.z*n2.z;

    let det = A_*E_ - B_*B_;
    if !(det > 0.0) || !(A_ > 0.0) || !(E_ > 0.0) {
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Center p = ellipse gradient zero (Cramer on ∇Q = 0).
    let p_x = (B_*F_ - E_*D_) / det;
    let p_y = (B_*D_ - A_*F_) / det;

    // t = -Q(p). Evaluating via the cross-product form (each component
    // O(1) after gradient cancellation) keeps ~7 more digits than the
    // direct (D·p + F·p + G) form.
    let cx_p = p_x*n0.x + p_y*n1.x + n2.x;
    let cy_p = p_x*n0.y + p_y*n1.y + n2.y;
    let cz_p = p_x*n0.z + p_y*n1.z + n2.z;
    let t_   = -(cx_p*cx_p + cy_p*cy_p - k_sq * cz_p*cz_p);
    if !(t_ > 0.0) {
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Axis-aligned bbox half-extents of the centered ellipse:
    //   max |px| s.t. A·dx² + 2B·dx·dy + E·dy² ≤ t  ⇒  dx² = t·E / det
    let hx = sqrt(t_ * E_ / det);
    let hy = sqrt(t_ * A_ / det);
    return vec4<f32>(p_x, p_y, hx, hy);
}

// \`--method mixed_3d\` untextured EWA 3D-ellipsoid projection. Ports the
// FastGS-verbatim path I just landed in diff_surfel_bake_render's CUDA
// preprocess (cuda_rasterizer/forward.cu compute_ewa_conic + the AccuTile
// AABB block I added at forward.cu:617). Returns:
//   .xy   = pixel-space center (CUDA convention — same as compute_aabb_snugbox);
//   .zw   = per-axis tight half-extents (in pixels).
// Conic (a, b, c) = inverse 2D covariance is returned via out_conic; degenerate
// conics return half-extent < 0 so the caller culls.
fn compute_ewa_cov2d_pixel(
    xyz: vec3<f32>,
    scales: vec3<f32>,           // (sx, sy, sz), already exp'd from log-space + multiplied by gaussian_scaling.
    rot: vec4<f32>,
    camspace: vec3<f32>,         // camera-space position (camera.view * xyz).xyz
    opacity: f32,
    out_conic: ptr<function, vec3<f32>>,
    out_coef: ptr<function, f32>,
) -> vec4<f32> {
    *out_coef = 1.0;
    // World covariance Σw = R · diag(sx²,sy²,sz²) · Rᵀ. Quat → R.
    let R = quat_to_rotmat(rot);
    let s2 = scales * scales;
    let r0 = R[0]; let r1 = R[1]; let r2 = R[2];

    // Σw is symmetric 3x3 — keep 6 components.
    let cw_xx = s2.x*r0.x*r0.x + s2.y*r1.x*r1.x + s2.z*r2.x*r2.x;
    let cw_xy = s2.x*r0.x*r0.y + s2.y*r1.x*r1.y + s2.z*r2.x*r2.y;
    let cw_xz = s2.x*r0.x*r0.z + s2.y*r1.x*r1.z + s2.z*r2.x*r2.z;
    let cw_yy = s2.x*r0.y*r0.y + s2.y*r1.y*r1.y + s2.z*r2.y*r2.y;
    let cw_yz = s2.x*r0.y*r0.z + s2.y*r1.y*r1.z + s2.z*r2.y*r2.z;
    let cw_zz = s2.x*r0.z*r0.z + s2.y*r1.z*r1.z + s2.z*r2.z*r2.z;

    // T = J · W, where W is the view rotation submatrix and J is the FastGS
    // Jacobian of the perspective projection at camera-space position t:
    //   J = [[fx/t.z,    0,    -fx·t.x/t.z²],
    //        [   0,   fy/t.z,  -fy·t.y/t.z²],
    //        [   0,      0,         0      ]]   (last row dropped)
    // Σs (screen-space 2D cov) = T · Σw · Tᵀ.
    let t  = camspace;
    let tz = sign(t.z) * max(abs(t.z), 1e-6);   // protect against /0 without flipping sign
    let zi = 1.0 / tz;
    let fx = camera.focal.x;
    let fy = camera.focal.y;
    let view_R = mat3x3<f32>(
        camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz,
    );

    // T (2x3) — 2 rows (the screen-x and screen-y row), 3 world cols.
    // Row 0 = J row 0 · W:  (fx·zi, 0, -fx·t.x·zi²) · W
    // Row 1 = J row 1 · W:  (0, fy·zi, -fy·t.y·zi²) · W
    let j0 = vec3<f32>(fx * zi, 0.0, -fx * t.x * zi * zi);
    let j1 = vec3<f32>(0.0,     fy * zi, -fy * t.y * zi * zi);
    let T0 = vec3<f32>(dot(j0, view_R[0]), dot(j0, view_R[1]), dot(j0, view_R[2]));
    let T1 = vec3<f32>(dot(j1, view_R[0]), dot(j1, view_R[1]), dot(j1, view_R[2]));

    // Σs = T · Σw · Tᵀ. Symmetric 2x2 → 3 entries (xx, xy, yy).
    // Tw0 = Σw · T0 (3-vec), Tw1 = Σw · T1.
    let Tw0 = vec3<f32>(
        cw_xx*T0.x + cw_xy*T0.y + cw_xz*T0.z,
        cw_xy*T0.x + cw_yy*T0.y + cw_yz*T0.z,
        cw_xz*T0.x + cw_yz*T0.y + cw_zz*T0.z,
    );
    let Tw1 = vec3<f32>(
        cw_xx*T1.x + cw_xy*T1.y + cw_xz*T1.z,
        cw_xy*T1.x + cw_yy*T1.y + cw_yz*T1.z,
        cw_xz*T1.x + cw_yz*T1.y + cw_zz*T1.z,
    );
    var sxx = dot(T0, Tw0);
    var sxy = dot(T0, Tw1);
    var syy = dot(T1, Tw1);

    // Mip low-pass (FastGS eps2d = 0.3) — adds a sub-pixel filter so
    // far-away EWA Gaussians don't degenerate to a near-zero conic.
    // ?mip2d=1 (accel bit 13): Mip-Splatting 2D Mip filter — same dilation (k from bits
    // 16..31, f16; 0 ⇒ 0.3) plus the opacity normalisation sqrt(det_before / det_after).
    // Off: k = 0.3 and coef = 1, i.e. exactly the previous code.
    let mip2d = (render_settings.accel_flags & 8192u) != 0u;
    var kd = 0.3;
    var det0 = 0.0;
    if mip2d {
        let kh = unpack2x16float(render_settings.accel_flags >> 16u).x;
        if kh > 0.0 { kd = kh; }
        det0 = sxx * syy - sxy * sxy;
    }
    sxx = sxx + kd;
    syy = syy + kd;

    let det = sxx * syy - sxy * sxy;
    if !(det > 0.0) {
        *out_conic = vec3<f32>(0.0);
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Conic = Σ⁻¹.
    let inv = 1.0 / det;
    *out_conic = vec3<f32>(syy * inv, -sxy * inv, sxx * inv);

    // Opacity-aware Mahalanobis-squared cutoff: 1/255 alpha-floor =>
    //   α · exp(-m/2) > 1/255   ⇔   m < 2·log(255·α).
    // Anything outside this iso-line is culled by the fragment shader's
    // \`α·exp(-m/2) < 1/255\` check, so binning to it is lossless.
    var opa_eff = opacity;
    if mip2d {
        *out_coef = sqrt(max(det0, 0.0) / det);
        opa_eff = opacity * (*out_coef);
    }
    let t_cut = max(0.5, 2.0 * log(255.0 * max(opa_eff, 1.0 / 255.0)));
    let r_cut = sqrt(t_cut);

    // Per-axis tight half-extents at the cutoff iso-line. Σs.xx == sxx, so
    // half_w = r_cut · √Σs.xx (no inverse-roundtrip needed). Screen-axis-
    // aligned bbox is slightly loose for rotated EWA ellipses (vs. tight
    // principal-axes bbox), but the per-surfel atan2+cos+sin cost of computing
    // the principal-axis rotation in WGSL outweighs the saved fragments in
    // practice. Sticking with the simpler axis-aligned form.
    let hx = r_cut * sqrt(sxx);
    let hy = r_cut * sqrt(syy);

    // Pixel-space center in CUDA convention (matches compute_aabb_snugbox).
    // Use proj_raw (Y-flip undone) so wgpu's NDC matches the CUDA-convention
    // pixel coords the rest of the pipeline already produces for textured.
    var proj_raw = camera.proj;
    proj_raw[0].y = -proj_raw[0].y;
    proj_raw[1].y = -proj_raw[1].y;
    proj_raw[2].y = -proj_raw[2].y;
    proj_raw[3].y = -proj_raw[3].y;
    let pos2d_cuda = proj_raw * vec4<f32>(camspace, 1.0);
    let inv_w = 1.0 / pos2d_cuda.w;
    let ndc_cuda = pos2d_cuda.xy * inv_w;
    let W = camera.viewport.x;
    let H = camera.viewport.y;
    let cx = ndc_cuda.x * (W * 0.5) + (W - 1.0) * 0.5;
    let cy = ndc_cuda.y * (H * 0.5) + (H - 1.0) * 0.5;
    return vec4<f32>(cx, cy, hx, hy);
}

var<workgroup> scan0      : array<u32, WG_SIZE>;
var<workgroup> scan1      : array<u32, WG_SIZE>;
var<workgroup> group_base : u32;

@compute @workgroup_size(WG_SIZE)
fn surfel_cull(
  @builtin(global_invocation_id) gid : vec3<u32>,
  @builtin(local_invocation_id)  lid : vec3<u32>
) {
    var alive : u32 = 0u;

    // Per-element staging that the alive lane will commit at the end.
    var tu : vec3<f32>;
    var tv : vec3<f32>;
    var tw : vec3<f32>;
    var center_pix : vec2<f32>;
    var extent_pix : vec2<f32>;
    var depth_u    : f32;
    var depth_v    : f32;
    var depth_center : f32;
    var depth      : f32;
    var opacity    : f32;
    var shape      : f32;
    var view_dir   : vec3<f32>;
    // \`--method mixed_3d\` per-Gauss textured/untextured flag, persisted out of
    // the inner block so the store can OR it into gauss_id's top bit. Default 1
    // (textured) — bit-identical to the pre-mixed_3d path when every surfel is
    // textured (which is every existing bundle on the demo site).
    var is_textured_flag : u32 = 1u;
    // \`--tex3d\` (aux bit 17): textured surfel rendered as a 3D EWA kernel with the
    // atlas on its XY plane. Stored in gauss_id bit 30 for the fragment.
    var tex3d_flag : u32 = 0u;

    let idx = gid.x;
    if idx < arrayLength(&surfels) {
        let s = surfels[idx];
        let xyz = vec3<f32>(s.x, s.y, s.z);

        let opa_shape = unpack2x16float(s.opacity_shape);
        opacity = opa_shape.x;
        shape   = opa_shape.y;

        // View clip (pos2d / w  ∈ [−1.2, 1.2]).
        let camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d    = camera.proj * camspace;
//#if WIDE_FRUSTUM
        // Portal: keep every surfel whose CENTRE projects anywhere Splat2DGS.pos can store
        // (±8191 px, ¼-px i16). The 1.2 test below drops big surfels (sky, clouds) whose
        // centre sits just off-screen although their footprint covers the view, so they
        // pop in and out as the camera moves; training (CUDA) never culls on the centre.
        let bounds   = (8000.0 / (0.5 * max(camera.viewport.x, camera.viewport.y))) * pos2d.w;
//#else
        let bounds   = 1.2 * pos2d.w;
//#endif
        let z_ndc    = pos2d.z / pos2d.w;

        if z_ndc > 0.0 && z_ndc < 1.0
            && pos2d.x >= -bounds && pos2d.x <= bounds
            && pos2d.y >= -bounds && pos2d.y <= bounds
            && opacity > 1.0 / 255.0 {


            let scale_packed = unpack2x16float(s.scale_rot[0]);
            let rot_wx       = unpack2x16float(s.scale_rot[1]);
            let rot_yz       = unpack2x16float(s.scale_rot[2]);

            let scaling = render_settings.gaussian_scaling;
            let sx = scale_packed.x * scaling;
            let sy = scale_packed.y * scaling;
            let rot = vec4<f32>(rot_wx.x, rot_wx.y, rot_yz.x, rot_yz.y);

            let R = quat_to_rotmat(rot);

            // \`--method mixed_3d\` aux split: bit 16 = is_textured (default 1 →
            // standard 2DGS path), bits 0..15 = scale_z (f16, exp'd from
            // log-space, ignored when textured). For mixed_3d untextured rows
            // we jump to the EWA branch at the bottom; textured rows take the
            // existing 2DGS path verbatim.
            is_textured_flag = (s.aux >> 16u) & 1u;
            tex3d_flag = ((s.aux >> 17u) & 1u) & is_textured_flag;
            let aux_lo16 = s.aux & 0xFFFFu;
            let sz       = unpack2x16float(aux_lo16).x * scaling;

            if is_textured_flag != 0u {

            // Backface cull (BFC, bit 2). 2DGS surfels lie in the local x-y
            // plane, so the local z-axis (R column 2) is the surface normal.
            // Cull when (pos − cam)·n > 0 — the normal points away from the
            // camera, i.e. we're looking at the back side.
            //
            // The win is downstream: a smaller alive list shrinks the sort
            // input by ~½ and the HW raster's vertex-instance count along
            // with it. We can't bail out of the surrounding \`if z_ndc > 0\`
            // block (would skip workgroupBarrier() and break compaction),
            // so backface lanes still finish the per-surfel math but never
            // set \`alive = 1u\`.
            //
            // Off by default — many 2DGS bakes train double-sided, so
            // enabling this can punch holes in surfaces. Verify visually
            // per-scene before relying on it.
            var alive_geom : bool = true;
            if (render_settings.accel_flags & 4u) != 0u {
                let camera_pos = camera.view_inv[3].xyz;
                if bfc_params.cos_thr <= 1.0 {
                    // Centroid-oriented BFC (training-matched): orient the
                    // disc normal outward via the cloud centroid, fade the
                    // surfel out as it turns away past the cos threshold.
                    // Required for --backface_cull-trained checkpoints —
                    // their back shell is unsupervised garbage without it.
                    //
                    // SMOOTH fade (±BFC_FADE_BAND around the threshold)
                    // instead of a binary kill: a hard per-view predicate
                    // pops silhouette surfels in/out as the camera orbits
                    // (the decision boundary sweeps across them). Fading
                    // opacity over the band is stateless and view-continuous
                    // — same surfel set, no temporal popping.
                    const BFC_FADE_BAND : f32 = 0.08;
                    var n = R[2];
                    let rel = xyz - vec3<f32>(bfc_params.cx, bfc_params.cy, bfc_params.cz);
                    if dot(n, rel) < 0.0 { n = -n; }
                    let vd = xyz - camera_pos;
                    let inv_len = inverseSqrt(max(dot(vd, vd), 1e-24));
                    let facing = dot(vd, n) * inv_len;
                    let fade = 1.0 - smoothstep(bfc_params.cos_thr - BFC_FADE_BAND,
                                                bfc_params.cos_thr + BFC_FADE_BAND,
                                                facing);
                    opacity = opacity * fade;
                    if opacity <= 1.0 / 255.0 {
                        alive_geom = false;
                    }
                } else if dot(R[2], xyz - camera_pos) > 0.0 {
                    // Legacy sign-naive test (pre-centroid bundles).
                    alive_geom = false;
                }
            }

            let L0 = R[0] * sx;
            let L1 = R[1] * sy;
            depth_u = (camera.view * vec4<f32>(L0, 0.0)).z;
            depth_v = (camera.view * vec4<f32>(L1, 0.0)).z;
            depth_center = camspace.z;

            // Build T = (splat2world)^T · world2ndc · ndc2pix. We undo the wgpu
            // Y-flip that's baked into camera.proj so the math runs in the
            // CUDA-standard Y-up NDC, then ndc2pix converts to pixel coords.
            let s2w_r0 = vec4<f32>(L0, 0.0);
            let s2w_r1 = vec4<f32>(L1, 0.0);
            let s2w_r2 = vec4<f32>(xyz, 1.0);

            var proj_raw = camera.proj;
            proj_raw[0].y = -proj_raw[0].y;
            proj_raw[1].y = -proj_raw[1].y;
            proj_raw[2].y = -proj_raw[2].y;
            proj_raw[3].y = -proj_raw[3].y;
            let M = transpose(proj_raw * camera.view);

            let I0 = vec4<f32>(dot(s2w_r0, M[0]), dot(s2w_r0, M[1]), dot(s2w_r0, M[2]), dot(s2w_r0, M[3]));
            let I1 = vec4<f32>(dot(s2w_r1, M[0]), dot(s2w_r1, M[1]), dot(s2w_r1, M[2]), dot(s2w_r1, M[3]));
            let I2 = vec4<f32>(dot(s2w_r2, M[0]), dot(s2w_r2, M[1]), dot(s2w_r2, M[2]), dot(s2w_r2, M[3]));

            let W = camera.viewport.x;
            let H = camera.viewport.y;
            let np0 = vec4<f32>(W / 2.0, 0.0, 0.0, (W - 1.0) / 2.0);
            let np1 = vec4<f32>(0.0, H / 2.0, 0.0, (H - 1.0) / 2.0);
            let np2 = vec4<f32>(0.0, 0.0, 0.0, 1.0);

            let T_mat = mat3x3<f32>(
                vec3<f32>(dot(I0, np0), dot(I1, np0), dot(I2, np0)),
                vec3<f32>(dot(I0, np1), dot(I1, np1), dot(I2, np1)),
                vec3<f32>(dot(I0, np2), dot(I1, np2), dot(I2, np2)),
            );

            // Per-Gauss cutoff selection. shape > 0 ⇒ BetaScaled bake (k=3
            // compact support). shape ≈ 0 ⇒ Gaussian-kernel bake — natural
            // cutoff is √(2·log(255·α)) ≈ 3.33 at α=1, much smaller at low α.
            // The OAC flag (bit 0) shrinks per-surfel based on actual opacity
            // (and shape for beta); when OAC is off we use a conservative
            // global value per kernel.
            var cutoff : f32;
            if (shape > 1e-6) {
                cutoff = 3.0;
                if (render_settings.accel_flags & 1u) != 0u {
                    cutoff = opacity_aware_cutoff(3.0, opacity, shape);
                }
            } else {
                // Gaussian. Default 3.5 covers the α≈1 tail with a small
                // margin; OAC tightens to the exact per-α iso-line.
                cutoff = 3.5;
                if (render_settings.accel_flags & 1u) != 0u {
                    cutoff = opacity_aware_cutoff_gaussian(opacity);
                }
            }
            // SnugBox first — numerically more robust for edge-on splats.
            // Fall back to the standard transmat compute_aabb only when
            // SnugBox itself is degenerate (det ≤ 0 or t ≤ 0), so we get
            // identical conservative behavior in the rare cases SnugBox
            // can't handle.
            var aabb = vec4<f32>(0.0, 0.0, -1.0, -1.0);
            var conic3 = vec3<f32>(0.0);
            if tex3d_flag != 0u {
                // \`--tex3d\`: footprint = EWA projection of the (sx, sy, sz) ellipsoid
                // (FastGS conic, eps2d 0.3). compute_ewa_cov2d_pixel bins to the Gaussian
                // iso-line m = t_g; rescale the extents to the beta kernel's support
                // (m < 9, opacity-aware under OAC). The CONIC uv below still comes from
                // T_mat (the texture lives on the surfel plane).
                var mcoef = 1.0;
                aabb = compute_ewa_cov2d_pixel(xyz, vec3<f32>(sx, sy, sz), rot, camspace.xyz, opacity, &conic3, &mcoef);
                opacity = opacity * mcoef;   // ?mip2d: stored opacity (fragment alpha + OAC below) carries the 2D Mip coef
                if opacity <= 1.0 / 255.0 { alive_geom = false; }
                if aabb.z >= 0.0 && shape > 1e-6 {
                    let t_g = max(0.5, 2.0 * log(255.0 * max(opacity, 1.0 / 255.0)));
                    var t_b = 9.0;
                    if (render_settings.accel_flags & 1u) != 0u {
                        let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
                        t_b = max(0.25, 9.0 * (1.0 - pow(inv, 1.0 / max(shape, 1e-3))));
                    }
                    let sc = sqrt(t_b / t_g);
                    aabb = vec4<f32>(aabb.x, aabb.y, aabb.z * sc, aabb.w * sc);
                }
            } else {
                aabb = compute_aabb_snugbox(T_mat, cutoff);
            }
            // SnugBox failing (det/A/E/t ≤ 0) means the conic is NOT an
            // ellipse: the cutoff disc crosses the camera plane and its
            // projection is unbounded. compute_aabb returns a garbage rect
            // for these (Vulkan port, room: 161 surfels, up to 765k px) and
            // every one of their fragments fails the denom/depth culls in
            // the fragment shader — a full-screen quad of pure discard work.
            // Drop them (bit-identical on 13/13 scenes). accel bit 9
            // (?hyp_legacy=1) restores the old fallback for an A/B.
            if aabb.z < 0.0 && tex3d_flag == 0u {
                aabb = compute_aabb(T_mat, cutoff);
                // Garbage-rect guard (default on; accel bit 9 = ?hyp_legacy=1
                // disables it). Measured offline on room cam 0: the SnugBox
                // failures are NOT hyperbolic surfels — they are 99 thin,
                // edge-on surfels (depth 3–10 m, ≤ 81 px) whose det is
                // ~1e-6·A·E, so fp32 cancellation ruins the centre / t test;
                // compute_aabb recovers them fine and they ARE visible (370 px,
                // α up to 0.99), so culling every failure costs real pixels.
                // Only a rect wider than twice the viewport can be the
                // camera-plane-crossing garbage (Vulkan port, room: up to
                // 765k px half-extent, every fragment failing the denom /
                // depth culls) — cull just those.
                if (render_settings.accel_flags & 512u) == 0u
                    && max(aabb.z, aabb.w) > 2.0 * max(camera.viewport.x, camera.viewport.y) {
                    aabb = vec4<f32>(0.0, 0.0, -1.0, -1.0);
                }
            }
            if alive_geom && aabb.z >= 0.0 {
                // CONIC OPTION A (precomputed): compute (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
                // once here, so the fragment shader skips the ray-splat entirely.
                // Same math as the CUDA lean fork's LEAN_CONIC + exact rational
                // correction — matches production ray-splat to fp32 precision.
                // Repurposes the tu/tv/tw slots (36 B — same footprint):
                //   tu = (u0, v0, J⁻¹[0,0])
                //   tv = (J⁻¹[0,1], J⁻¹[1,0], J⁻¹[1,1])
                //   tw = (dwdxr, dwdyr, 0)
                let Tux = T_mat[0].x; let Tuy = T_mat[0].y; let Tuz = T_mat[0].z;
                let Tvx = T_mat[1].x; let Tvy = T_mat[1].y; let Tvz = T_mat[1].z;
                let Twx = T_mat[2].x; let Twy = T_mat[2].y; let Twz = T_mat[2].z;
                // Quantise the centre to the ¼-px grid Splat2DGS.pos stores
                // BEFORE deriving the CONIC, so (u₀, v₀, J⁻¹, ∇w) are exact for
                // the centre the fragment actually subtracts — zero systematic
                // shift, whatever the canvas width. (Extent stays relative to
                // the true centre; the vertex pads for the ≤ ⅛ px difference.)
                // accel bit 10 (?legacy=1) restores the unquantised centre.
                let legacy_pos = (render_settings.accel_flags & 1024u) != 0u;
                let cxc = select(round(aabb.x * 4.0) * 0.25, aabb.x, legacy_pos);
                let cyc = select(round(aabb.y * 4.0) * 0.25, aabb.y, legacy_pos);
                let k_c = vec3<f32>(cxc*Twx - Tux, cxc*Twy - Tuy, cxc*Twz - Tuz);
                let l_c = vec3<f32>(cyc*Twx - Tvx, cyc*Twy - Tvy, cyc*Twz - Tvz);
                let p_c = cross(k_c, l_c);
                var u0f: f32 = 1e10; var v0f: f32 = 1e10;   // "always cull" defaults
                var J00f: f32 = 0.0; var J01f: f32 = 0.0;
                var J10f: f32 = 0.0; var J11f: f32 = 0.0;
                var dwdxrf: f32 = 0.0; var dwdyrf: f32 = 0.0;
                if abs(p_c.z) > 1e-12 {
                    u0f = p_c.x / p_c.z;
                    v0f = p_c.y / p_c.z;
                    let w_c = Twx*u0f + Twy*v0f + Twz;
                    let det_kl = k_c.x*l_c.y - k_c.y*l_c.x;
                    if abs(det_kl) > 1e-12 && abs(w_c) > 1e-8 {
                        let scale = w_c / det_kl;
                        J00f = -l_c.y * scale;
                        J01f =  k_c.y * scale;
                        J10f =  l_c.x * scale;
                        J11f = -k_c.x * scale;
                        // ∂p.z/∂pix is CONSTANT (bilinear cross-terms cancel):
                        //   ∂p.z/∂pix.x = Tw.y·Tv.x - Tw.x·Tv.y
                        //   ∂p.z/∂pix.y = Tu.y·Tw.x - Tu.x·Tw.y
                        // Exact rational reconstruction:
                        //   u = u₀ + (J·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
                        let dpz_dpx = Twy*Tvx - Twx*Tvy;
                        let dpz_dpy = Tuy*Twx - Tux*Twy;
                        dwdxrf = dpz_dpx / p_c.z;
                        dwdyrf = dpz_dpy / p_c.z;
                    } else {
                        // Degenerate Jacobian → force cull (u₀ huge → rho3d always > cutoff).
                        u0f = 1e10; v0f = 1e10;
                    }
                }
                // accel bit 11 (?raysplat=1): hand the fragment the RAW transmat
                // rows instead of the conic expansion, so it can do the original
                // per-fragment ray/surfel intersection. Same math, but the
                // cancellation in \`pix*Tw - Tu\` is evaluated AT the fragment
                // rather than baked into u0/v0/J and extrapolated outward.
                if tex3d_flag != 0u {
                    // \`--tex3d\`: CONIC uv (always the conic form) + the EWA conic in the
                    // free slots: tw.z = a, depth_u = b, depth_v = c (the fragment reads
                    // depth_center only for these rows).
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, conic3.x);
                    depth_u = conic3.y;
                    depth_v = conic3.z;
                } else if (render_settings.accel_flags & 4096u) != 0u {
                    // CENTRED (accel bit 12): hand over k_c / l_c / Tw so the
                    // fragment can form k = k_c + dx*Tw with dx only a few px.
                    tu = k_c;
                    tv = l_c;
                    tw = vec3<f32>(Twx, Twy, Twz);
                } else if (render_settings.accel_flags & 2048u) != 0u {
                    tu = T_mat[0];
                    tv = T_mat[1];
                    tw = T_mat[2];
                } else {
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, 0.0);
                }
                center_pix = vec2<f32>(cxc, cyc);
                extent_pix = aabb.zw;

                // SPR (sub-pixel rejection): drop surfels whose tight ellipse
                // extent is well under one pixel AND whose opacity is low
                // enough that the lp-filtered contribution to neighbouring
                // pixels falls below 1/255. Conservative threshold (extent <
                // 0.25 px AND opa < 0.5) is safe for SV bakes — it catches
                // degenerate / numerically-vanishing surfels without killing
                // visible signal. Bit 1 of accel_flags gates it.
                let drop_subpixel = (render_settings.accel_flags & 2u) != 0u
                    && max(extent_pix.x, extent_pix.y) < 0.25
                    && opacity < 0.5;

                if !drop_subpixel {
                    let camera_pos = camera.view_inv[3].xyz;
                    view_dir = normalize(xyz - camera_pos);

                    // Sort key = front-to-back distance (back has smaller value
                    // with this CUDA convention; matches keksboter's bitcast).
                    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                    depth = zfar - pos2d.z;
                    alive = 1u;
                }
            }

            } else {
                // ===== \`--method mixed_3d\` UNTEXTURED — EWA 3D ellipsoid =====
                // Mirrors the CUDA bake-render branch I added at
                // diff_surfel_bake_render/cuda_rasterizer/forward.cu:617.
                // Color is per-Gauss SV (no atlas tap — untextured rows
                // carry a zero atlas rect by construction); geometry is
                // the FastGS EWA conic + opacity-aware Mahalanobis cutoff.
                // The fragment shader's untextured branch reads (a, b, c)
                // out of tu_x/y/z (transmat slot is repurposed).
                let camera_pos = camera.view_inv[3].xyz;
                view_dir = normalize(xyz - camera_pos);

                var conic : vec3<f32>;
                var mcoef_u = 1.0;
                let aabb_e = compute_ewa_cov2d_pixel(
                    xyz,
                    vec3<f32>(sx, sy, sz),
                    rot,
                    camspace.xyz,
                    opacity,
                    &conic,
                    &mcoef_u,
                );
                opacity = opacity * mcoef_u;   // ?mip2d: 2D Mip coef on the stored opacity
                if aabb_e.z >= 0.0 && opacity > 1.0 / 255.0 {
                    tu = conic;
                    tv = vec3<f32>(0.0);
                    tw = vec3<f32>(0.0);
                    center_pix = aabb_e.xy;
                    extent_pix = aabb_e.zw;
                    depth_u = 0.0;
                    depth_v = 0.0;
                    depth_center = camspace.z;

                    // SPR (same threshold as textured path).
                    let drop_subpixel = (render_settings.accel_flags & 2u) != 0u
                        && max(extent_pix.x, extent_pix.y) < 0.25
                        && opacity < 0.5;
                    if !drop_subpixel {
                        let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                        depth = zfar - pos2d.z;
                        alive = 1u;
                    }
                }
            }
        }
    }

    // Workgroup-local Hillis-Steele inclusive scan over \`alive\` flags.
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >=   1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -   1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=   2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -   2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=   4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -   4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=   8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -   8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=  16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -  16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=  32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -  32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=  64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -  64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();

    // Single global atomicAdd per workgroup, broadcast the base offset.
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        // \`--method mixed_3d\` untextured marker: top bit of gauss_id. The
        // fragment shader checks this to dispatch the EWA Mahalanobis path
        // vs the standard 2DGS ray-disk path. Bits 0..30 still hold the
        // original surfel index (we never have >2^31 Gausses) so any
        // downstream lookup that needs the real index can mask with
        // 0x7FFFFFFFu. SHSolver.idx (used for color eval) stays unmasked
        // — preprocess never sees the untex flag, just the raw index.
        let gauss_id_packed : u32 = idx | ((1u - is_textured_flag) << 31u) | (tex3d_flag << 30u);
        // We leave color_* and the atlas UV precompute fields (uv_base_*,
        // uv_scale_*, layer) zero — preprocess_2dgs.wgsl fills them per frame
        // per alive Gauss (color from SV/SB eval, UV precomp from atlas_rects
        // + atlas dims). Fragment shader gates the atlas fetch on
        // tex_params.atlas_enabled so zero UV precomp is harmless when the
        // bundle has no atlas.
        splats_2d[store_idx] = Splat2DGS(
            tu.x, tu.y, tu.z,
            tv.x, tv.y, tv.z,
            tw.x, tw.y, tw.z,
            opacity,
            // ¼-px fixed point (2×i16, exact grid), NOT f16: f16 has
            // 1 px spacing beyond x=1024 and 0.5 px beyond 512, which shifted
            // every splat on the right/bottom of a retina canvas by up to
            // 0.5 px (the CONIC u0/v0 are exact for the TRUE centre) and let
            // the vertex quad miss up to 0.5 px of the ellipse edge (measured:
            // 100 px/frame with α up to 0.18 on room). Range ±8191.75 px
            // covers canvases up to ~7400 px wide (cull keeps |centre| ≤ 1.1·viewport).
            select(pack_center(center_pix),
                   pack2x16float(center_pix),
                   (render_settings.accel_flags & 1024u) != 0u),
            pack2x16float(extent_pix),
            0u,
            pack2x16float(vec2<f32>(0.0, shape)),
            gauss_id_packed,
            depth_u,
            depth_v,
            depth_center,
            0.0, 0.0,      // uv_base_x, uv_base_y
            0.0, 0.0,      // uv_scale_x, uv_scale_y
            0u,            // layer
            0u,            // _pad
        );
        sh_solvers[store_idx] = SHSolver(
            pack2x16float(view_dir.xy),
            pack2x16float(vec2<f32>(view_dir.z, opacity)),
            idx,
        );
//#if STATIC_KEYS
        let static_key = static_keys[idx];
        sort_depths[store_idx]  = bitcast<u32>(select(depth, static_key, static_key > 0.0));
//#else
        sort_depths[store_idx]  = bitcast<u32>(depth);
//#endif
        sort_indices[store_idx] = store_idx;
    }
}
`,Fu=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
const WORDS_PER_WG   : u32 = WG_SIZE / 32u; // 8 for 256
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table
override MAX_BIN_SIZE = RS_RADIX_SIZE * WORDS_PER_WG; // legacy (pre-padding)

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> digit_base : array<u32>;
@group(0) @binding(2) var<storage, read> keys_src : array<u32>;
@group(0) @binding(3) var<storage, read_write> keys_dst : array<u32>;
@group(0) @binding(4) var<storage, read> payload_src : array<u32>;
@group(0) @binding(5) var<storage, read_write> payload_dst : array<u32>;
@group(0) @binding(6) var<storage, read> wg_prefixes : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// Pass 3: Scatter elements to final positions
// --------------------------------------------------------------------------------------------------------------
// var<workgroup> sh_digits : array<u32, WG_SIZE>;
// var<workgroup> bin_flags : array<atomic<u32>, MAX_BIN_SIZE>;

struct BinWords { words: array<atomic<u32>, WORDS_PER_WG + 1> }
var<workgroup> bin_flags : array<BinWords, RS_RADIX_SIZE>; // For each digit: 8 x 32-bit words bitmap

@compute @workgroup_size(WG_SIZE)
fn scatter_elements(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // for (var i = lid.x; i < RS_RADIX_SIZE * WORDS_PER_WG; i += WG_SIZE) {
    //     let d = i / WORDS_PER_WG;
    //     let w = i % WORDS_PER_WG;
    //     atomicStore(&bin_flags[d].words[w], 0u);
    // }
    atomicStore(&bin_flags[lid.x].words[0], 0u);
    atomicStore(&bin_flags[lid.x].words[1], 0u);
    atomicStore(&bin_flags[lid.x].words[2], 0u);
    atomicStore(&bin_flags[lid.x].words[3], 0u);
    atomicStore(&bin_flags[lid.x].words[4], 0u);
    atomicStore(&bin_flags[lid.x].words[5], 0u);
    atomicStore(&bin_flags[lid.x].words[6], 0u);
    atomicStore(&bin_flags[lid.x].words[7], 0u);

    workgroupBarrier();

    let wg_base  = wid.x * WG_SIZE;
    let pos = wg_base + lid.x;

    var key: u32;
    var digit : u32;

    if (pos < infos.keys_size) {
        key = keys_src[pos];
        digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        // 3) Set bit in this digit's bitmap: one 32-thread word
        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        atomicOr(&bin_flags[digit].words[myWord], myBit);
    }
    workgroupBarrier();

    if (pos < infos.keys_size) {

        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        var rank_in_row : u32 = 0u;

        // Accumulate bit counts in preceding full words
        for (var w = 0u; w < myWord; w++) {
            let bits = atomicLoad(&bin_flags[digit].words[w]);
            rank_in_row += countOneBits(bits);
        }
        // Add bits below my bit in the current word
        let cur  = atomicLoad(&bin_flags[digit].words[myWord]);
        rank_in_row  += countOneBits(cur & (myBit - 1u));

        let global_pos =
            digit_base[digit] +
            wg_prefixes[digit * wgs.x + wid.x] +
            rank_in_row;

        // Write back key/payload
        keys_dst[global_pos]    = key;
        payload_dst[global_pos] = payload_src[pos];
    }
}
`,Ou=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> keys_src : array<u32>;
@group(0) @binding(2) var<storage, read_write> wg_histograms : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// NEW MULTI-PASS RADIX SORT IMPLEMENTATION
// Pass 1: Local histogram generation per workgroup
// --------------------------------------------------------------------------------------------------------------
var<workgroup> local_histogram : array<atomic<u32>, RS_RADIX_SIZE>;
@compute @workgroup_size(WG_SIZE)
fn local_histogram_pass(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // Zero local histogram
    if lid.x < RS_RADIX_SIZE {
        atomicStore(&local_histogram[lid.x], 0u);
    }
    workgroupBarrier();
    
    // Process elements and build local histogram + ranks
    let pos = wid.x * WG_SIZE + lid.x;
    if (pos < infos.keys_size) {
        let key = keys_src[pos];
        let digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        
        atomicAdd(&local_histogram[digit], 1u);
    }
    workgroupBarrier();
    
    // Write workgroup histogram to global memory
    if lid.x < RS_RADIX_SIZE {
        wg_histograms[wid.x + lid.x * wgs.x] = atomicLoad(&local_histogram[lid.x]);
    }
}
`,Vu=`// ============================================================================
// 2-Level (Nested) Blelloch Prefix Scan Kernels (Radix Sort histogram phase)
// ----------------------------------------------------------------------------
// This file implements a hierarchical exclusive prefix sum over workgroup
// histograms laid out as [digit][workgroup]. We use a tile size equal to the
// workgroup size so each invocation owns exactly one element (no inner loops).
//
// Pipeline of passes for one radix digit plane (repeated for all digits):
//   (A) prefix_l0_tile_scan              : per-element scan in tiles of wg histograms
//       -> produces wg_prefixes (exclusive) + l0_sums (per tile totals)
//   (B) prefix_l1_tile_scan_on_l0_sums   : scan l0_sums producing l0_offsets + l1_sums
//   (C) prefix_scan_l1_sums              : scan l1_sums producing l1_offsets
//   (D) prefix_add_l1_to_l0_offsets      : add l1_offsets back to l0_offsets
//   (E) prefix_add_l0_to_elements        : add final l0_offsets to element prefixes
//   (F) compute_digit_base               : final scan across digits to get digit_base
//
// All scans are Blelloch (exclusive) using a shared workgroup array \`temp\`.
// We intentionally keep loops with compile-time bounds (WG_SIZE) for the
// compiler to unroll/optimize. No algorithmic / memory access pattern change
// has been made—only clarity improvements and richer commentary.
//
// NOTE: RS_RADIX_SIZE == WG_SIZE (256) here, allowing reuse of the same
// Blelloch logic for digit_base without an extra buffer.
// ============================================================================

override WG_SIZE        : u32 = 256u;  // 1 thread ↔ 1 element (no inner striding)

// Dispatch / tiling metadata passed from host.
// l0_t: number of L0 tiles      (ceil(dispatch_x / WG_SIZE))
// l1_t: number of L1 tiles over l0_t (ceil(l0_t / WG_SIZE))
struct GeneralInfo {
  keys_size  : u32,  // Total number of keys (for context)
  dispatch_x : u32,  // Number of workgroups along x for histogram source
  dispatch_y : u32,  // (digits) normally RS_RADIX_SIZE or batched digits
  dispatch_z : u32,
  l0_x       : u32,  // Mirrors grid dims for L0 (informational)
  l0_y       : u32,
  l0_z       : u32,
  l0_t       : u32,  // Number of L0 tiles per digit
  l1_x       : u32,  // Mirrors grid dims for L1 (informational)
  l1_y       : u32,
  l1_z       : u32,
  l1_t       : u32,  // Number of L1 tiles over L0 tiles per digit
};

// in/out buffers
@group(0) @binding(0) var<storage, read>        infos         : GeneralInfo;
@group(0) @binding(1) var<storage, read>        wg_histograms : array<u32>; // [digit][wg]
@group(0) @binding(2) var<storage, read_write>  wg_prefixes   : array<u32>; // [digit][wg] (exclusive prefix for each digit)
@group(0) @binding(3) var<storage, read_write>  l0_sums       : array<u32>; // [digit][t0]   per L0 tile total
@group(0) @binding(4) var<storage, read_write>  l0_offsets    : array<u32>; // [digit][t0]   exclusive scan over l0_sums
@group(0) @binding(5) var<storage, read_write>  l1_sums       : array<u32>; // [digit][t1]   per L1 tile total (over l0_sums)
@group(0) @binding(6) var<storage, read_write>  l1_offsets    : array<u32>; // [digit][t1]   exclusive scan over l1_sums
@group(0) @binding(7) var<storage, read_write>  digit_base    : array<u32>; // length RS_RADIX_SIZE exclusive base per digit

fn idx_hist(d: u32, wg: u32) -> u32 { return d * infos.dispatch_x + wg; }
fn idx_l0 (d: u32, t0: u32) -> u32 { return d * infos.l0_t + t0; }
fn idx_l1 (d: u32, t1: u32) -> u32 { return d * infos.l1_t + t1; }
// Shared scratch used by all kernels (size == WG_SIZE). For digit_base the
// size matches RS_RADIX_SIZE.
var<workgroup> temp : array<u32, WG_SIZE>;

// ---------------------------------------------------------------------------
// Reusable Blelloch scan helpers (tile-sized, operating on \`temp\`).
// We split into up-sweep (returning total) and down-sweep (producing exclusive)
// so callers needing the tile total (for hierarchical sums) can read it.
// These operate over the full WG_SIZE; inactive lanes should have been
// initialized with 0 beforehand.
// ---------------------------------------------------------------------------
// NOTE: Manually unrolled for WG_SIZE == 256u (log2=8). If WG_SIZE changes,
// regenerate this sequence (offsets: 1,2,4,8,16,32,64,128).
fn blelloch_up_sweep_tile(tid: u32) -> u32 {
  let ui1 = (tid + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (tid + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (tid + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (tid + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (tid + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (tid + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (tid + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (tid + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
  return temp[WG_SIZE - 1u]; // inclusive total
}

fn blelloch_down_sweep_tile_exclusive(tid: u32) {
  if (tid == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (tid + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (tid + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (tid + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (tid + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (tid + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (tid + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (tid + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (tid + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// Separate helpers for digit_base scan (RS_RADIX_SIZE may conceptually differ
// though equal here). Kept distinct to avoid introducing an extra branch.
fn blelloch_up_sweep_digits(d: u32) {
  // Unrolled for RS_RADIX_SIZE == 256u
  let ui1 = (d + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (d + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (d + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (d + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (d + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (d + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (d + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (d + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
}

fn blelloch_down_sweep_digits(d: u32) {
  if (d == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (d + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (d + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (d + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (d + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (d + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (d + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (d + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (d + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// ---------------------------------------------------------------------------
// (A) L0 pass
// Per-digit tile scan over wg_histograms -> produces:
//   - wg_prefixes (exclusive per element inside each digit plane)
//   - l0_sums     (tile totals for hierarchical accumulation)
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l0_tile_scan(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  // Number of active (in-bounds) lanes for this tile along dispatch_x.
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);

  let tid = lid.x; // lane id

  var v : u32 = 0u;
  if (tid < valid) { v = wg_histograms[idx_hist(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  // Blelloch scan over tile
  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { wg_prefixes[idx_hist(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l0_sums[idx_l0(digit, t0)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (B) L1 pass over l0_sums
// Scan l0_sums in tiles to produce l0_offsets (exclusive within tile) and
// l1_sums (totals per L1 tile). This is structurally identical to (A) but the
// source array is l0_sums and destination for element-level offsets is l0_offsets.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l1_tile_scan_on_l0_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < valid) { v = l0_sums[idx_l0(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { l0_offsets[idx_l0(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l1_sums[idx_l1(digit, t1)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (C) Scan l1_sums -> l1_offsets (single workgroup per digit)
// Assumes infos.l1_t <= WG_SIZE. Add further level if this can be exceeded.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_scan_l1_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let digit = wid.y;
  let T = infos.l1_t;

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < T) { v = l1_sums[idx_l1(digit, tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  blelloch_up_sweep_tile(tid); // total not needed here
  blelloch_down_sweep_tile_exclusive(tid);
  if (tid < T) { l1_offsets[idx_l1(digit, tid)] = temp[tid]; }
}

// ---------------------------------------------------------------------------
// (D) Add l1_offsets into l0_offsets for each corresponding L0 tile.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l1_to_l0_offsets(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);
  let add    = l1_offsets[idx_l1(digit, t1)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_l0(digit, start + tid);
    l0_offsets[idx] += add;
  }
}

// ---------------------------------------------------------------------------
// (E) Add final l0_offsets back to element-level wg_prefixes.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l0_to_elements(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);
  let add   = l0_offsets[idx_l0(digit, t0)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_hist(digit, start + tid);
    wg_prefixes[idx] += add;
  }
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255

  // Gather total count for digit d into temp[d]
  var tot : u32 = 0u;
  if (infos.dispatch_x > 0u) {
    let last = infos.dispatch_x - 1u;
    let idx  = idx_hist(d, last);
    tot = wg_prefixes[idx] + wg_histograms[idx];
  }
  temp[d] = tot;
  workgroupBarrier();

  // Blelloch exclusive scan over digits -------------------------------
  blelloch_up_sweep_digits(d);
  blelloch_down_sweep_digits(d);
  // Exclusive result -> digit_base
  digit_base[d] = temp[d];
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base1(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255 (one lane per digit)
  // Gather total count for digit d (tile total for that digit plane)
  let idx  = idx_hist(d, infos.dispatch_x - 1u);
  temp[d] = wg_prefixes[idx] + wg_histograms[idx];
  workgroupBarrier();
  // Hillis-Steele inclusive scan (log2(256)=8 iterations)
  // offset 1
  let add1   = select(0u, temp[d - 1u],   d >= 1u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add1,   d >= 1u);   workgroupBarrier();
  // offset 2
  let add2   = select(0u, temp[d - 2u],   d >= 2u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add2,   d >= 2u);   workgroupBarrier();
  // offset 4
  let add4   = select(0u, temp[d - 4u],   d >= 4u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add4,   d >= 4u);   workgroupBarrier();
  // offset 8
  let add8   = select(0u, temp[d - 8u],   d >= 8u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add8,   d >= 8u);   workgroupBarrier();
  // offset 16
  let add16  = select(0u, temp[d - 16u],  d >= 16u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add16,  d >= 16u);  workgroupBarrier();
  // offset 32
  let add32  = select(0u, temp[d - 32u],  d >= 32u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add32,  d >= 32u);  workgroupBarrier();
  // offset 64
  let add64  = select(0u, temp[d - 64u],  d >= 64u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add64,  d >= 64u);  workgroupBarrier();
  // offset 128
  let add128 = select(0u, temp[d - 128u], d >= 128u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add128, d >= 128u); workgroupBarrier();
  // Convert inclusive -> exclusive: shift right by one (digit 0 -> 0)
  digit_base[d] = select(0u, temp[d - 1u], d > 0u);
}`,$u=256;function as(i,s){const a=[],u=[];let l=!0;for(const _ of i.split(`
`)){const y=_.trim();let x;if((x=/^\/\/#if\s+(\w+)\s*$/.exec(y))!==null){const P=!!s[x[1]];u.push({parent:l,taken:P}),l=l&&P;continue}if(/^\/\/#else\s*$/.test(y)){const P=u[u.length-1];if(P===void 0)throw new Error("preprocessWGSL: #else without #if");l=P.parent&&!P.taken;continue}if(/^\/\/#endif\s*$/.test(y)){const P=u.pop();if(P===void 0)throw new Error("preprocessWGSL: #endif without #if");l=P.parent;continue}l&&a.push(_)}if(u.length!==0)throw new Error("preprocessWGSL: unterminated #if");return a.join(`
`)}const Nu=Ha,qu=8,Wu=96,Ku=12,_i=8,un=1<<_i,Vn=256,lr=32/_i,ju=0,tr=lr&1;function Oa(i,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function Hu(i,s){const a=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),u=i.createPipelineLayout({bindGroupLayouts:[a]}),l=_=>i.createComputePipeline({layout:u,compute:{module:s,entryPoint:_,constants:{WG_SIZE:Vn}}});return{l0TileScan:l("prefix_l0_tile_scan"),l1TileScanOnL0:l("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:l("prefix_scan_l1_sums"),addL1ToL0:l("prefix_add_l1_to_l0_offsets"),addL0ToElems:l("prefix_add_l0_to_elements"),computeDigitBase:l("compute_digit_base"),prefixBindGroupLayout:a}}function Yu(i,s,a){const u=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),l=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),_=i.createPipelineLayout({bindGroupLayouts:[u]}),y=i.createPipelineLayout({bindGroupLayouts:[l]}),x=[];for(let P=0;P<lr;P++){const M={PASS_ID:P+ju,RS_RADIX_LOG2:_i,RS_RADIX_SIZE:un};x.push({localHistogram:i.createComputePipeline({layout:_,compute:{module:s,entryPoint:"local_histogram_pass",constants:M}}),scatterElements:i.createComputePipeline({layout:y,compute:{module:a,entryPoint:"scatter_elements",constants:M}})})}return{passes:x,localHistogramBindGroupLayout:u,scatterBindGroupLayout:l}}function Xu(i){const s=i.createShaderModule({label:"local histogram",code:Ou}),a=i.createShaderModule({label:"scatter",code:Fu}),u=i.createShaderModule({label:"blelloch prefix",code:Vu}),l=Hu(i,u),_=Yu(i,s,a);return{localHistogramBindGroupLayout:_.localHistogramBindGroupLayout,scatterBindGroupLayout:_.scatterBindGroupLayout,passes:_.passes,hierarchicalBlelloch:l}}function Va(i){const s=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),a=s.createView({dimension:"2d-array"}),u=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),l=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),_=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(_,0,new ArrayBuffer(32));const y={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:a,sampler:u,rectsBuffer:l,texParamsBuffer:_,meta:y}}const ls=class ls{constructor(s,a,u,l,_,y=null,x={}){S(this,"device");S(this,"pc");S(this,"presentationFormat");S(this,"camera_buffer");S(this,"render_settings_buffer");S(this,"draw_indirect_buffer");S(this,"splat_2d_buffer");S(this,"querySet");S(this,"resolveBuffer");S(this,"resultBuffer");S(this,"queriesPerFrame",qu);S(this,"queryCapacityFrames",200);S(this,"sort_prefixBindGroup");S(this,"sort_pipelines");S(this,"sort_localHistogramBindGroups");S(this,"sort_scatterBindGroups");S(this,"lastFrame",0);S(this,"frameCount",0);S(this,"preprocessPipeline");S(this,"cullPipeline");S(this,"renderPipeline");S(this,"indirectPipeline");S(this,"renderShaderModule");S(this,"betaKernel",1);S(this,"fetchById");S(this,"octBound");S(this,"acc16");S(this,"accTexture",null);S(this,"accView",null);S(this,"accW",0);S(this,"accH",0);S(this,"legacyRenderPipeline",null);S(this,"varyingsPipeline",null);S(this,"msaa",!1);S(this,"msaaTexture",null);S(this,"msaaView",null);S(this,"msaaW",0);S(this,"msaaH",0);S(this,"msaaPipelines",new Map);S(this,"mkVariant",null);S(this,"slopeTarget",null);S(this,"viewport",null);S(this,"slopeSource",0);S(this,"slopePipelines",new Map);S(this,"rendererBgls",[]);S(this,"betaKernelConst",1);S(this,"slopeBgl",null);S(this,"slopeBg",null);S(this,"slopeDummy",null);S(this,"refetch",null);S(this,"rfTsIndex",-1);S(this,"refetchApplied",!1);S(this,"rfKeys",null);S(this,"rfKeysCap",0);S(this,"rfParams",null);S(this,"rfLowBgl",null);S(this,"rfUpBgl",null);S(this,"rfSplatsBgl",null);S(this,"rfLowBg",null);S(this,"rfUpBg",null);S(this,"rfUpKey",[]);S(this,"rfSplatsBg",null);S(this,"rfSplatsKey",[]);S(this,"rfPipelines",new Map);S(this,"rfWl",0);S(this,"rfHl",0);S(this,"legacyRenderer",!1);S(this,"accResolvePipeline",null);S(this,"accResolveBgl",null);S(this,"accResolveBindGroup",null);S(this,"twoPass",!1);S(this,"twoPassThresh",.5);S(this,"twoPassParamsBuffer",null);S(this,"twoPassBgl",null);S(this,"twoPassBg",null);S(this,"twoPassSplatsBgl",null);S(this,"twoPassSplatsBg",null);S(this,"twoPassModules",new Map);S(this,"twoPassPipelines",new Map);S(this,"twoPassDepth",null);S(this,"twoPassDepthView",null);S(this,"twoPassW",0);S(this,"twoPassH",0);S(this,"overdrawMode",0);S(this,"overdrawMax",48);S(this,"ovTexture",null);S(this,"ovView",null);S(this,"ovW",0);S(this,"ovH",0);S(this,"ovParamsBuffer",null);S(this,"ovResolvePipeline",null);S(this,"ovResolveBgl",null);S(this,"ovResolveBg",null);S(this,"ovStatsPipeline",null);S(this,"ovStatsBgl",null);S(this,"ovStatsBg",null);S(this,"ovStatsBuffer",null);S(this,"ovReadback",null);S(this,"ovReadState","idle");S(this,"ovLastStats",null);S(this,"ovPipelines",new Map);S(this,"renderSettingsBgl");S(this,"preprocessBgl2");S(this,"renderSplatsBgl");S(this,"atlasBgl");S(this,"sort_info_buffer");S(this,"sort_ping_pong");S(this,"crsBg");S(this,"gsBg");S(this,"cullBg2");S(this,"preprocessBg1");S(this,"renderSplatsBindGroup");S(this,"renderSettingsBindGroup");S(this,"atlasBindGroup");S(this,"indirectBindGroup");S(this,"sh_solvers_buffer");S(this,"bfcParamsBuffer");S(this,"bfcBindGroupLayout");S(this,"bfcBindGroup");S(this,"staticSortKeys",null);S(this,"wideFrustum",!1);S(this,"staticKeysBuffer",null);S(this,"bgColor",[0,0,0,0]);S(this,"showPerfDialogNext",!1);S(this,"requestReorderNextFrame",!1);S(this,"reorderInFlight",!1);S(this,"downloadOnceNextRead",!1);S(this,"downloadOnceFileName","fps_metrics");S(this,"allFrameTimes",[]);S(this,"lastStageBreakdownMs",null);S(this,"timeQueryEnabled");S(this,"atlas");S(this,"atlasParamsBuffer");S(this,"_atlasEnabled",!0);S(this,"mipLodBias",1);S(this,"_mipMode",1);S(this,"preFrame",null);S(this,"capPass",null);this.fetchById=x.fetchById??!0,this.staticSortKeys=x.staticSortKeys??null,this.wideFrustum=x.wideFrustum??!1,this.octBound=x.octBound??!1,this.acc16=x.acc16??!1,bt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const P=_.includes("timestamp-query");this.timeQueryEnabled=P,P&&bt("⏰ using timestamp-query"),this.pc=s,this.device=a,this.presentationFormat=u,this.camera_buffer=l,this.atlas=y??Va(a),this.atlasParamsBuffer=a.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),a.addEventListener("uncapturederror",Ae=>{console.error("A WebGPU error was not captured:",Ae.error)}),this._setupTimestampQueries(),this._setupBuffers();const M=(Math.floor((this.pc.num_points+Vn-1)/Vn)+1)*Vn,z=Math.ceil(M/Vn);console.log(`keys count adjusted: ${M}`),console.log(`key size: ${this.pc.num_points}`);const G=a.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Xu(a);const q=[Oa(M,a),Oa(M,a)],V=a.createBuffer({label:"workgroup histograms",size:z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=a.createBuffer({label:"workgroup prefixes",size:z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=a.createBuffer({label:"digit base",size:un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=Math.ceil(z/Vn),Z=Math.ceil(N/Vn),O=a.createBuffer({label:"prefix l0 sums",size:N*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=a.createBuffer({label:"prefix l0 offsets",size:N*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=a.createBuffer({label:"prefix l1 sums",size:Z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=a.createBuffer({label:"prefix l1 offsets",size:Z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=a.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:Y}},{binding:3,resource:{buffer:O}},{binding:4,resource:{buffer:ee}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:te}},{binding:7,resource:{buffer:R}}]}),this.sort_localHistogramBindGroups=[a.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:q[0].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]}),a.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:q[1].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]})],this.sort_scatterBindGroups=[a.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:q[0].sort_depths_buffer}},{binding:3,resource:{buffer:q[1].sort_depths_buffer}},{binding:4,resource:{buffer:q[0].sort_indices_buffer}},{binding:5,resource:{buffer:q[1].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]}),a.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:q[1].sort_depths_buffer}},{binding:3,resource:{buffer:q[0].sort_depths_buffer}},{binding:4,resource:{buffer:q[1].sort_indices_buffer}},{binding:5,resource:{buffer:q[0].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]})],this.sort_info_buffer=G,this.sort_ping_pong=q;const le=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ue=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Ee=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:le,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ue,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=Ee,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Ee,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Te=this.device.createShaderModule({code:zu});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const Ue=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ce=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:cs(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),Ue.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ce.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:Ue}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ce});const pe=this.device.createShaderModule({code:as(Iu,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[le,ue,de,this.bfcBindGroupLayout]}),compute:{module:pe,entryPoint:"surfel_cull"}});const I=this.device.createShaderModule({code:Gu});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[le,Ee]}),compute:{module:I,entryPoint:"preprocess"}});const ye=this.device.createShaderModule({label:"render_2dgs",code:as(Ts,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ye.getCompilationInfo().then(Ae=>{Ae.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ae.messages.forEach(De=>{(De.type==="error"?console.error:De.type==="warning"?console.warn:console.log)(`${De.type} (line ${De.lineNum}:${De.linePos}): ${De.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const we=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),_e=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,be=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:_e,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ae=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Pe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,be,ae]}),vertex:{module:ye,entryPoint:"vs_main"},fragment:{module:ye,entryPoint:"fs_main",constants:{BETA_KERNEL:Pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ie=(Ae,De,xe,fe=1)=>{const Se=this.device.createShaderModule({label:`render_2dgs (${Ae})`,code:as(Ts,{FETCH_BY_ID:De,OCT:xe})});return this.device.createRenderPipeline({label:`render_2dgs_${Ae}`,multisample:{count:fe},layout:this.device.createPipelineLayout({bindGroupLayouts:[we,be,ae]}),vertex:{module:Se,entryPoint:"vs_main"},fragment:{module:Se,entryPoint:"fs_main",constants:{BETA_KERNEL:Pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[we,be,ae],this.betaKernelConst=Pe,this.varyingsPipeline=Ie("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ie("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=Ie,this.device.popErrorScope().then(Ae=>{Ae?console.error("[render_2dgs] pipeline create validation error:",Ae.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:be,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[tr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ae,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ye,this.betaKernel=Pe,this.renderSettingsBgl=we,this.renderSplatsBgl=be,this.atlasBgl=ae}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get resolvesIntoTarget(){return this.msaa||this.acc16||this.overdrawMode!==0}setSlopeAtlas(s,a){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),s||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),s=this.slopeDummy.createView({dimension:"2d-array"}));const u=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(u,0,new Float32Array(a)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:s},{binding:7,resource:{buffer:u}}]})}slopePipelineFor(s,a){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const u=`${s?1:0}${a?1:0}${this.slopeSource}`;let l=this.slopePipelines.get(u);if(!l){const _=this.device.createShaderModule({label:`render_2dgs slope (${u})`,code:as(Ts,{FETCH_BY_ID:s,OCT:a})}),y={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};l=this.device.createRenderPipeline({label:`render_2dgs_slope_${u}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:y},{format:"rgba16float",blend:y}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(u,l)}return l}rfEnsure(s,a){var P;const u=this.device;this.rfLowBgl||(this.rfLowBgl=u.createBindGroupLayout({label:"refetch (low)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.rfUpBgl=u.createBindGroupLayout({label:"refetch (up)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:12,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:13,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:14,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:15,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.rfSplatsBgl=u.createBindGroupLayout({label:"refetch splats",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rfParams=u.createBuffer({label:"refetch params",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const l=s*a*4*4;(!this.rfKeys||this.rfKeysCap<l)&&((P=this.rfKeys)==null||P.destroy(),this.rfKeysCap=Math.ceil(l*1.25/256)*256,this.rfKeys=u.createBuffer({label:"refetch keys",size:this.rfKeysCap,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.rfLowBg=null,this.rfUpBg=null),this.rfLowBg||(this.rfLowBg=u.createBindGroup({layout:this.rfLowBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}}]}));const _=this.refetch,y=new Uint32Array([s,a,_.W,_.H,0,0,0,0]),x=new Float32Array(y.buffer);x[4]=_.thr,x[5]=_.gain,y[6]=_.edge?1:0,u.queue.writeBuffer(this.rfParams,0,y),this.rfWl=s,this.rfHl=a}rfPipeline(s,a,u){const l=s==="up"?"up":`${s}${a?1:0}${u?1:0}`;let _=this.rfPipelines.get(l);if(_)return _;const y=this.device.createShaderModule({label:`render_2dgs refetch (${l})`,code:as(Ts,{FETCH_BY_ID:s==="up"?!1:a,OCT:s==="up"?!1:u})}),x={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}},P={BETA_KERNEL:this.betaKernelConst};if(s==="up")_=this.device.createRenderPipeline({label:"render_2dgs_refetch_up",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.rendererBgls[0],this.rfSplatsBgl,this.rendererBgls[2],this.rfUpBgl]}),vertex:{module:y,entryPoint:"vs_rf_full"},fragment:{module:y,entryPoint:"fs_refetch_up",constants:P,targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});else{const M=this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.rfLowBgl]});_=this.device.createRenderPipeline({label:`render_2dgs_refetch_${l}`,layout:M,vertex:{module:y,entryPoint:"vs_main"},fragment:s==="select"?{module:y,entryPoint:"fs_refetch_select",constants:P,targets:[{format:"rgba16float",writeMask:0}]}:{module:y,entryPoint:"fs_refetch_cw",constants:P,targets:[{format:this.presentationFormat,blend:x},{format:"rgba16float",blend:x},{format:"rgba16float",blend:x},{format:"rgba16float",blend:x}]},primitive:{topology:"triangle-strip",cullMode:"none"}})}return this.rfPipelines.set(l,_),_}refetchPass(s,a){const u=this.refetch,l=[this.splat_2d_buffer,this.sort_ping_pong[tr].sort_indices_buffer];(!this.rfSplatsBg||l.some((P,M)=>P!==this.rfSplatsKey[M]))&&(this.rfSplatsBg=this.device.createBindGroup({layout:this.rfSplatsBgl,entries:[{binding:0,resource:{buffer:l[0]}},{binding:1,resource:{buffer:l[1]}}]}),this.rfSplatsKey=l);const _=[this.rfKeys,u.wa,u.wb,u.wc,u.low];(!this.rfUpBg||_.some((P,M)=>P!==this.rfUpKey[M]))&&(this.rfUpBg=this.device.createBindGroup({layout:this.rfUpBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}},{binding:12,resource:u.wa},{binding:13,resource:u.wb},{binding:14,resource:u.low},{binding:15,resource:u.wc}]}),this.rfUpKey=_);const y={label:"refetch_up",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};this.rfTsIndex>=0&&(y.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:this.rfTsIndex},this.rfTsIndex=-1);const x=s.beginRenderPass(y);x.setPipeline(this.rfPipeline("up",!1,!1)),x.setBindGroup(0,this.renderSettingsBindGroup),x.setBindGroup(1,this.rfSplatsBg),x.setBindGroup(2,this.atlasBindGroup),x.setBindGroup(3,this.rfUpBg),x.draw(3),x.end()}setBfcParams(s,a){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,a[0],a[1],a[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var l;const s=new ArrayBuffer(32),a=new Uint32Array(s),u=new Float32Array(s);a[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,a[1]=this.atlas.meta.layer_h|0,u[2]=this.atlas.meta.uv_extent||0,a[3]=this.atlas.meta.probe_mode|0||0,a[4]=this._mipMode!==0?Math.max(1,((l=this.atlas.meta.mip_bytes)==null?void 0:l.length)??1):1,u[5]=this.mipLodBias,a[6]=this._mipMode===2?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}setMsaa(s){s!==this.msaa&&(this.msaa=s,bt(`[render_2dgs] MSAA 4x: ${s?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(s,a){const u=`${s?"byid":"var"}_${a?"oct":"quad"}`;let l=this.msaaPipelines.get(u);return l||(l=this.mkVariant(`msaa4_${u}`,s,a,4),this.msaaPipelines.set(u,l)),l}ensureMsaaResources(s,a){var u;this.msaaTexture!==null&&this.msaaW===s&&this.msaaH===a||((u=this.msaaTexture)==null||u.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:s,height:a},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=s,this.msaaH=a)}setTwoPass(s){s!==this.twoPass&&(this.twoPass=s,bt(`[render_2dgs] two-pass layer path: ${s?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(s){this.twoPassThresh=Math.min(.999,Math.max(.001,s)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[tr].sort_indices_buffer}}]}))}ensureTwoPassResources(s,a){var u;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===s&&this.twoPassH===a)&&((u=this.twoPassDepth)==null||u.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=s,this.twoPassH=a)}renderModuleFor(s,a,u){const l=`${s?"byid":"vary"}_${a?"oct":"quad"}_${u?"hwz":"z0"}`,_=this.twoPassModules.get(l);if(_!==void 0)return _;const y=this.device.createShaderModule({label:`render_2dgs (${l})`,code:as(Ts,{FETCH_BY_ID:s,OCT:a,HW_DEPTH:u})});return y.getCompilationInfo().then(x=>{for(const P of x.messages)P.type==="error"&&console.error(`[render_2dgs ${l}] (line ${P.lineNum}:${P.linePos}): ${P.message}`)}),this.twoPassModules.set(l,y),y}twoPassPipelinesFor(s,a){const u=`${s?"byid":"vary"}_${a?"oct":"quad"}`,l=this.twoPassPipelines.get(u);if(l!==void 0)return l;const _=this.renderModuleFor(s,a,!0),y=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const x=this.device.createRenderPipeline({label:`render_2dgs_opaque_${u}`,layout:y,vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),P=this.device.createRenderPipeline({label:`render_2dgs_front_${u}`,layout:y,vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:ls.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(z=>{z?console.error(`[render_2dgs twopass ${u}] pipeline validation error:`,z.message):console.log(`[render_2dgs twopass ${u}] pipelines created OK`)});const M={opaque:x,front:P};return this.twoPassPipelines.set(u,M),M}setOverdrawMode(s){s!==this.overdrawMode&&(this.overdrawMode=s,this.ovLastStats=null,bt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][s]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(s){this.overdrawMax=Math.max(1,s),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(s,a){var u;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const l=`
struct OvParams { max_count : f32, _a : f32, _b : u32, _c : u32 };
@group(0) @binding(0) var cnt : texture_2d<f32>;
@group(0) @binding(1) var<uniform> ov : OvParams;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
// 0 → near-black, ¼ → blue, ½ → green, ¾ → yellow, 1 → red, beyond → white.
fn ramp(t : f32) -> vec3<f32> {
    let c0 = vec3<f32>(0.03, 0.03, 0.12); let c1 = vec3<f32>(0.10, 0.35, 1.00);
    let c2 = vec3<f32>(0.10, 0.90, 0.30); let c3 = vec3<f32>(1.00, 0.90, 0.10);
    let c4 = vec3<f32>(1.00, 0.15, 0.10);
    if t >= 1.0 { return mix(c4, vec3<f32>(1.0), clamp((t - 1.0) * 4.0, 0.0, 1.0)); }
    let u = t * 4.0;
    if u < 1.0 { return mix(c0, c1, u); }
    if u < 2.0 { return mix(c1, c2, u - 1.0); }
    if u < 3.0 { return mix(c2, c3, u - 2.0); }
    return mix(c3, c4, u - 3.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(cnt));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let c = textureLoad(cnt, q, 0).r;
    if c <= 0.0 { return vec4<f32>(0.0, 0.0, 0.0, 1.0); }
    return vec4<f32>(ramp(c / ov.max_count), 1.0);
}`,_=this.device.createShaderModule({label:"overdraw_resolve",code:l});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const y=`
@group(0) @binding(0) var cnt : texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> stats : array<atomic<u32>, 4>;   // sum, max, covered px, pad
var<workgroup> w_sum : atomic<u32>;
var<workgroup> w_max : atomic<u32>;
var<workgroup> w_cov : atomic<u32>;
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid : vec3<u32>, @builtin(local_invocation_index) li : u32) {
    if li == 0u { atomicStore(&w_sum, 0u); atomicStore(&w_max, 0u); atomicStore(&w_cov, 0u); }
    workgroupBarrier();
    let dims = textureDimensions(cnt);
    if gid.x < dims.x && gid.y < dims.y {
        let c = u32(textureLoad(cnt, vec2<i32>(gid.xy), 0).r + 0.5);
        if c > 0u { atomicAdd(&w_sum, c); atomicMax(&w_max, c); atomicAdd(&w_cov, 1u); }
    }
    workgroupBarrier();
    if li == 0u {
        atomicAdd(&stats[0], atomicLoad(&w_sum));
        atomicMax(&stats[1], atomicLoad(&w_max));
        atomicAdd(&stats[2], atomicLoad(&w_cov));
    }
}`,x=this.device.createShaderModule({label:"overdraw_stats",code:y});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:x,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===s&&this.ovH===a||((u=this.ovTexture)==null||u.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=s,this.ovH=a)}ovPipelineFor(s,a,u){const l=`${s}_${a?"byid":"vary"}_${u?"oct":"quad"}`,_=this.ovPipelines.get(l);if(_!==void 0)return _;const y=s.startsWith("tp_"),x=this.renderModuleFor(a,u,y),P=this.device.createPipelineLayout({bindGroupLayouts:y?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),M={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[s];let z;s==="tp_raster"?z={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:s==="tp_opaque"?z={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:s==="tp_front"&&(z={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const G=this.device.createRenderPipeline({label:`render_2dgs_${l}`,layout:P,vertex:{module:x,entryPoint:"vs_main"},fragment:{module:x,entryPoint:M,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:ls.BLEND_ADD}]},depthStencil:z,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(q=>{q&&console.error(`[render_2dgs overdraw ${l}] pipeline validation error:`,q.message)}),this.ovPipelines.set(l,G),G}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const s=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const a=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:s[0]/a,meanCovered:s[2]>0?s[0]/s[2]:0,max:s[1],coveredFrac:s[2]/a}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(s,a){var u;if(this.accResolvePipeline===null){const l=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,_=this.device.createShaderModule({label:"acc16_resolve",code:l});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===a||((u=this.accTexture)==null||u.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=a)}setAtlas(s){this.atlas=s??Va(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&nr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,nr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,bt(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,os({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const a=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([a])),bt(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this.atlas.sampler}setMipMode(s){if(this.atlas.meta.format===4294967295)return;const a=this._mipMode;this._mipMode=typeof s=="boolean"?s?1:0:s,a===2!=(this._mipMode===2)&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),nr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const a=Math.max(0,Math.min(s,this.pc.num_points)),u=a*Uint32Array.BYTES_PER_ELEMENT;if(u===0){console.log("[DEBUG] No indices to read.");return}const l=this.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),_=this.device.createCommandEncoder();_.copyBufferToBuffer(this.sort_ping_pong[tr].sort_indices_buffer,0,l,0,u),this.device.queue.submit([_.finish()]),await l.mapAsync(GPUMapMode.READ);const y=new Uint32Array(l.getMappedRange());console.log("[DEBUG] Sorted indices (first",a,"):",Array.from(y)),l.unmap()}writeSortKeys(s){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,s)}frame(s,a,u=!0){this.preFrame&&this.preFrame();const _=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,y=u&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const x={label:"cull"};y&&(x.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+0,endOfPassWriteIndex:_+1});const P=s.beginComputePass(x);P.setPipeline(this.cullPipeline),P.setBindGroup(0,this.crsBg),P.setBindGroup(1,this.gsBg),P.setBindGroup(2,this.cullBg2),P.setBindGroup(3,this.bfcBindGroup);const M=Math.ceil(this.pc.num_points/$u);P.dispatchWorkgroups(M,1,1),P.end()}{const x=s.beginComputePass({label:"calculate indirect dispatch"});x.setPipeline(this.indirectPipeline),x.setBindGroup(0,this.indirectBindGroup),x.dispatchWorkgroups(1,1,1),x.end()}{const x={label:"preprocess"};y&&(x.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+2,endOfPassWriteIndex:_+3});const P=s.beginComputePass(x);P.setPipeline(this.preprocessPipeline),P.setBindGroup(0,this.crsBg),P.setBindGroup(1,this.preprocessBg1),P.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),P.end()}for(let x=0;x<lr;x++){const P=x&1,M=this.sort_pipelines.passes[x],z=this.sort_localHistogramBindGroups[P],G=this.sort_scatterBindGroups[P];{const q={label:`upsweep_round${x}`};y&&x==0&&(q.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+4});const V=s.beginComputePass(q);V.setPipeline(M.localHistogram),V.setBindGroup(0,z),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),V.end()}{const q=s.beginComputePass({label:`prefix_round${x} - l0TileScan`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - l1TileScanOnL0`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - l1ScanSums`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroups(1,un,1),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - addL1ToL0`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - addL0ToElems`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - computeDigitBase`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroups(1,1,1),q.end()}{const q={label:`scatter_round${x}`};y&&x==lr-1&&(q.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+5});const V=s.beginComputePass(q);V.setPipeline(M.scatterElements),V.setBindGroup(0,G),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),V.end()}}{const x=ct.canvas_size[0],P=ct.canvas_size[1],M=this.overdrawMode!==0;this.refetchApplied=!1;let z=a;M?(this.ensureOverdrawResources(x,P),z=this.ovView):this.acc16&&(this.ensureAccResources(x,P),z=this.accView);const G=M?{r:0,g:0,b:0,a:0}:this.bgColor,q=M||this.acc16,V=this.fetchById&&!this.legacyRenderer,Y=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(x,P);let R,N;if(M)this.overdrawMode===1?(R=this.ovPipelineFor("tp_opaque",V,Y),N=this.ovPipelineFor("tp_front",V,Y)):R=N=this.ovPipelineFor("tp_raster",V,Y);else{const te=this.twoPassPipelinesFor(V,Y);R=te.opaque,N=te.front}const Z={label:"render_opaque_layer",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:G}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};y&&(Z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+6});const O=s.beginRenderPass(Z);O.setPipeline(R),O.setBindGroup(0,this.renderSettingsBindGroup),O.setBindGroup(1,this.twoPassSplatsBg),O.setBindGroup(2,this.atlasBindGroup),O.setBindGroup(3,this.twoPassBg),O.drawIndirect(this.draw_indirect_buffer,0),O.end();const ee={label:"render_front",colorAttachments:[{view:z,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};y&&!q&&(ee.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+7});const K=s.beginRenderPass(ee);K.setPipeline(N),K.setBindGroup(0,this.renderSettingsBindGroup),K.setBindGroup(1,this.twoPassSplatsBg),K.setBindGroup(2,this.atlasBindGroup),K.setBindGroup(3,this.twoPassBg),K.drawIndirect(this.draw_indirect_buffer,0),K.end()}else{const R=this.msaa&&!M&&!this.acc16;R&&this.ensureMsaaResources(x,P);const N=this.refetch!==null&&!R&&!M&&!this.acc16&&!this.legacyRenderer,Z=!N&&this.slopeTarget!==null&&!R&&!M&&!this.acc16&&!this.legacyRenderer;this.refetchApplied=N;let O=!1;this.capPass&&!R&&!M&&!this.acc16&&(s.beginRenderPass({label:"cap clear",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:G}]}).end(),O=this.capPass(s,z,this.viewport));const ee=[R?{view:this.msaaView,resolveTarget:z,loadOp:"clear",storeOp:"discard",clearValue:G}:{view:z,loadOp:O?"load":"clear",storeOp:"store",clearValue:G}];if(Z&&ee.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}),N){const le=this.viewport??[x,P];this.rfEnsure(le[0],le[1]),s.clearBuffer(this.rfKeys,0,le[0]*le[1]*16);const ue=s.beginRenderPass({label:"refetch_select",colorAttachments:[{view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});ue.setPipeline(this.rfPipeline("select",this.fetchById,Y)),ue.setViewport(0,0,le[0],le[1],0,1),ue.setScissorRect(0,0,le[0],le[1]),ue.setBindGroup(0,this.renderSettingsBindGroup),ue.setBindGroup(1,this.renderSplatsBindGroup),ue.setBindGroup(2,this.atlasBindGroup),ue.setBindGroup(3,this.rfLowBg),ue.drawIndirect(this.draw_indirect_buffer,0),ue.end();const de={r:0,g:0,b:0,a:0};ee.push({view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:de},{view:this.refetch.wb,loadOp:"clear",storeOp:"store",clearValue:de},{view:this.refetch.wc,loadOp:"clear",storeOp:"store",clearValue:de})}const K={label:"render",colorAttachments:ee};y&&(K.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+6,...q||N?{}:{endOfPassWriteIndex:_+7}}),this.rfTsIndex=N&&y?_+7:-1;const te=s.beginRenderPass(K);M?(te.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",V,Y)),te.setBindGroup(1,this.twoPassSplatsBg)):N?(te.setPipeline(this.rfPipeline("cw",this.fetchById,Y)),te.setBindGroup(1,this.renderSplatsBindGroup),te.setBindGroup(3,this.rfLowBg)):Z?(te.setPipeline(this.slopePipelineFor(this.fetchById,Y)),te.setBindGroup(1,this.renderSplatsBindGroup),te.setBindGroup(3,this.slopeBg)):(te.setPipeline(R?this.msaaPipelineFor(V,Y):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),te.setBindGroup(1,this.renderSplatsBindGroup)),this.viewport!==null&&!R&&(te.setViewport(0,0,this.viewport[0],this.viewport[1],0,1),te.setScissorRect(0,0,this.viewport[0],this.viewport[1])),te.setBindGroup(0,this.renderSettingsBindGroup),te.setBindGroup(2,this.atlasBindGroup),te.drawIndirect(this.draw_indirect_buffer,0),te.end()}if(M){s.clearBuffer(this.ovStatsBuffer,0,16);const R=s.beginComputePass({label:"overdraw_stats"});R.setPipeline(this.ovStatsPipeline),R.setBindGroup(0,this.ovStatsBg),R.dispatchWorkgroups(Math.ceil(x/16),Math.ceil(P/16),1),R.end();const N={label:"overdraw_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};y&&(N.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+7});const Z=s.beginRenderPass(N);Z.setPipeline(this.ovResolvePipeline),Z.setBindGroup(0,this.ovResolveBg),Z.draw(3),Z.end(),this.ovReadState==="idle"&&(s.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const R={label:"acc16_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};y&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+7});const N=s.beginRenderPass(R);N.setPipeline(this.accResolvePipeline),N.setBindGroup(0,this.accResolveBindGroup),N.draw(3),N.end()}}this.frameCount++}async readPerfMetrics(s){const a=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const u=this.device.createCommandEncoder({label:"timestamp resolve encoder"});u.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),u.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([u.finish()]),await this.device.queue.onSubmittedWorkDone();const l=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const _=new BigInt64Array(this.resultBuffer.getMappedRange()),y=Math.min(this.frameCount,this.queryCapacityFrames),x=(this.lastFrame+this.frameCount-y)%this.queryCapacityFrames,P=Array.from({length:l.length},()=>[]);let M=0;for(let Z=0;Z<y;Z++){const O=(x+Z)%this.queryCapacityFrames,ee=O*this.queriesPerFrame;let K=!0;for(let te=0;te<l.length;te++){const[le,ue,de]=l[te];if(_[ee+de]===0n||_[ee+ue]===0n||_[ee+ue]<_[ee+de]){K=!1;break}}if(!K){!a&&O%60===0&&console.debug("[timestamp] frame slot",O,"contains unwritten (0) timestamps, skipped in stats");continue}M++;for(let te=0;te<l.length;te++){const[le,ue,de]=l[te],Ee=Number(_[ee+de]),Te=Number(_[ee+ue]);P[te].push((Te-Ee)/1e6)}}if(M===0){this.resultBuffer.unmap(),a||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...P[0]);const z=[];let G=0,q=0,V=0;for(let Z=0;Z<l.length;Z++){const O=l[Z][0],ee=P[Z];let K=0;if(O==="Total"){const te=this.allFrameTimes;K=te.reduce((de,Ee)=>de+Ee,0)/te.length;const le=[...te].sort((de,Ee)=>de-Ee);G=le[Math.floor(le.length*.99)]||0;const ue=te.reduce((de,Ee)=>de+Math.pow(Ee-K,2),0)/te.length;q=Math.sqrt(ue),V=K}else K=ee.reduce((te,le)=>te+le,0)/ee.length;z.push([O,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const Y=Object.fromEntries(z);this.lastStageBreakdownMs={cull:Y.Culling??0,preprocess:Y.Preprocess??0,sort:Y.Sort??0,render:Y.Render??0,total:Y.Total??0};const N=`[TIMESTAMP - ${this.constructor.name}]
`+z.map(([Z,O])=>`${Z}: ${O.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${q.toFixed(3)}ms
Total AVG: ${V.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(a||(console.log(N),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Z=`Stage,ms
`,O=z.map(([te,le])=>`${te},${le.toFixed(3)}`).join(`
`),ee="data:text/csv;charset=utf-8,"+encodeURIComponent(Z+O),K=document.createElement("a");K.href=ee,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(N)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Nu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),a=s?s.width:1,u=s?s.height:1;Hc({width:a,height:u,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),mr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:cs(this.pc.num_points*Wu),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:cs(this.pc.num_points*Ku),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const a=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=a.length>0?a:this.downloadOnceFileName}else{const a=new Date,u=`${a.getFullYear()}${String(a.getMonth()+1).padStart(2,"0")}${String(a.getDate()).padStart(2,"0")}_${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${u}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};S(ls,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),S(ls,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let cr=ls;class Zu{constructor(s){S(this,"nSurfels");S(this,"nNodes");S(this,"planes");S(this,"front");S(this,"back");S(this,"copOff");S(this,"cop");S(this,"missing");S(this,"stackNode");S(this,"stackPhase");S(this,"keys");S(this,"lastMs",0);S(this,"lastEye",[NaN,NaN,NaN]);const a=new DataView(s),u=String.fromCharCode(a.getUint8(0),a.getUint8(1),a.getUint8(2),a.getUint8(3));if(u!=="BSP1")throw new Error(`not a BSP1 file (magic ${u})`);this.nSurfels=a.getUint32(4,!0),this.nNodes=a.getUint32(8,!0);const l=a.getUint32(12,!0),_=a.getUint32(16,!0);let y=20;const x=this.nNodes;if(this.planes=new Float32Array(s.slice(y,y+x*16)),y+=x*16,this.front=new Int32Array(s.slice(y,y+x*4)),y+=x*4,this.back=new Int32Array(s.slice(y,y+x*4)),y+=x*4,this.copOff=new Uint32Array(s.slice(y,y+(x+1)*4)),y+=(x+1)*4,this.cop=new Uint32Array(s.slice(y,y+l*4)),y+=l*4,this.missing=new Uint32Array(s.slice(y,y+_*4)),y+=_*4,y!==s.byteLength)throw new Error(`BSP1 size mismatch: parsed ${y} of ${s.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*x+2),this.stackPhase=new Uint8Array(2*x+2)}computeKeys(s){const a=s[0],u=s[1],l=s[2];if(a===this.lastEye[0]&&u===this.lastEye[1]&&l===this.lastEye[2])return!1;this.lastEye=[a,u,l];const _=performance.now(),y=this.planes,x=this.front,P=this.back,M=this.copOff,z=this.cop,G=this.keys;let q=1;for(let N=0;N<this.missing.length;N++)G[this.missing[N]]=q++;const V=this.stackNode,Y=this.stackPhase;let R=0;for(V[0]=0,Y[0]=0,R=1;R>0;){R--;const N=V[R],Z=Y[R],O=y[4*N],ee=y[4*N+1],K=y[4*N+2];if(O===0&&ee===0&&K===0){for(let de=M[N];de<M[N+1];de++)G[z[de]]=q++;continue}const te=O*a+ee*u+K*l-y[4*N+3]>=0,le=te?x[N]:P[N],ue=te?P[N]:x[N];if(Z===0)V[R]=N,Y[R]=1,R++,ue>=0&&(V[R]=ue,Y[R]=0,R++);else{for(let de=M[N];de<M[N+1];de++)G[z[de]]=q++;le>=0&&(V[R]=le,Y[R]=0,R++)}}return this.lastMs=performance.now()-_,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function Qu(i){const s=await fetch(i);if(!s.ok)throw new Error(`BSP fetch ${i}: HTTP ${s.status}`);return new Zu(await s.arrayBuffer())}function Ju(i,s){return 2*Math.atan(s/(2*i))}function ed(i,s,a,u){const l=Math.tan(u/2),_=Math.tan(a/2),y=l*i,x=-y,P=_*i,M=-P,z=yt.create();return z[0]=2*i/(P-M),z[5]=-2*i/(y-x),z[2]=(P+M)/(P-M),z[6]=(y+x)/(y-x),z[14]=1,z[10]=s/(s-i),z[11]=-(s*i)/(s-i),yt.transpose(z,z),z}async function li(i){bt(`loading scene camera file... : ${i}`);const a=await(await fetch(i)).json();return bt(`loaded cameras count: ${a.length}`),a.map(u=>{const l=X.clone(u.position),_=At.create(...u.rotation.flat()),y=_[0],x=_[4],P=_[8],M=_[1],z=_[5],G=_[9],q=_[2],V=_[6],Y=_[10];y*(z*Y-G*V)-x*(M*Y-G*q)+P*(M*V-z*q)<0&&(_[1]=-_[1],_[5]=-_[5],_[9]=-_[9]);const N=yt.fromMat3(_);return{position:l,rotation:N,img_name:u.img_name,id:u.id}})}const td=4*2,nd=4*16,oo=4*nd+2*td;function sd(i){return i.createBuffer({label:"camera uniform",size:oo,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const On=new Float32Array(oo/Float32Array.BYTES_PER_ELEMENT),fr=class fr{constructor(s,a){S(this,"_renderSize",null);S(this,"_refSize",null);S(this,"uniform_buffer");S(this,"position",X.create());S(this,"rotation",yt.create());S(this,"zfar",100);S(this,"fovY",45/180*Math.PI);S(this,"fovX");S(this,"focalRatioX",1);S(this,"focal",_a.create());S(this,"viewport",_a.create());S(this,"view_matrix",yt.identity());S(this,"view_inv_matrix",yt.identity());S(this,"proj_matrix",yt.identity());S(this,"proj_inv_matrix",yt.identity());S(this,"_negPos",X.create());S(this,"look",X.create(0,0,1));S(this,"up",X.create(0,1,0));S(this,"right",X.create(1,0,0));this.canvas=s,this.device=a,this.uniform_buffer=a?sd(a):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(s,a,u,l){this._renderSize=[s,a],this._refSize=u&&l?[u,l]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}getViewMatrix(){return this.view_matrix}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,a=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[u,l]=this._refSize,_=.5*l/Math.tan(this.fovY*.5);this.focal[0]=_*this.focalRatioX*(s/u),this.focal[1]=_*(a/l)}else{const u=.5*a/Math.tan(this.fovY*.5);this.focal[0]=u*this.focalRatioX,this.focal[1]=u}this.fovX=Ju(this.focal[0],s),this.viewport[0]=s,this.viewport[1]=a,this.proj_matrix=ed(.01,this.zfar,this.fovX,this.fovY),yt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],yt.copy(this.rotation,this.view_matrix),yt.translate(this.view_matrix,this._negPos,this.view_matrix),yt.inverse(this.view_matrix,this.view_inv_matrix),X.transformMat4Upper3x3(fr.Z_AXIS,this.view_inv_matrix,this.look),X.normalize(this.look,this.look),X.cross(this.up,this.look,this.right),X.normalize(this.right,this.right);let s=0;On.set(this.view_matrix,s),s+=16,On.set(this.view_inv_matrix,s),s+=16,On.set(this.proj_matrix,s),s+=16,On.set(this.proj_inv_matrix,s),s+=16,On.set(this.viewport,s),s+=2,On.set(this.focal,s),s+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,On)}set_preset(s){X.copy(s.position,this.position),yt.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}setFocalRatio(s){this.focalRatioX=s,this.on_update_canvas()}getFov(){return this.fovY}};S(fr,"Z_AXIS",X.create(0,0,1));let ur=fr;const rd={bilinear:0,bicubic:1,hermite:2,texture:3,bc5:4,p:4,spline:5,refetch:2},lo={texture:0,p:1,bc5:2,spline:2},id=.7,ad=`
struct P { wl: u32, hl: u32, w: u32, h: u32, mode: u32, lam: f32, T: f32, pad2: u32, K: vec4<f32> };
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var<uniform> p: P;
// mode 5: learned spline kernel, control grid as a 3D texture (rgb = sample / x-Taylor / y-Taylor kernels)
@group(0) @binding(3) var spk: texture_3d<f32>;
@group(0) @binding(4) var spk_s: sampler;
// mode 3: blended texture slope from the renderer's second target, (Σ α T ∂Y/∂x, Σ α T ∂Y/∂y, 0, ·), low-res px units
@group(0) @binding(2) var slope: texture_2d<f32>;
fn ts(x: i32, y: i32) -> vec2<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(slope, vec2<i32>(xc, yc), 0).rg;
}

@vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn f(x: i32, y: i32) -> vec3<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(src, vec2<i32>(xc, yc), 0).rgb;
}
fn gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return f(1, y) - f(0, y); }
    if (x >= i32(p.wl) - 1) { return f(x, y) - f(x - 1, y); }
    return 0.5 * (f(x + 1, y) - f(x - 1, y));
}
fn gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return f(x, 1) - f(x, 0); }
    if (y >= i32(p.hl) - 1) { return f(x, y) - f(x, y - 1); }
    return 0.5 * (f(x, y + 1) - f(x, y - 1));
}
fn gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return gx(x, 1) - gx(x, 0); }
    if (y >= i32(p.hl) - 1) { return gx(x, y) - gx(x, y - 1); }
    return 0.5 * (gx(x, y + 1) - gx(x, y - 1));
}
fn keys(t0: f32) -> f32 {
    let a = -0.75; let t = abs(t0);
    if (t <= 1.0) { return ((a + 2.0) * t - (a + 3.0)) * t * t + 1.0; }
    if (t < 2.0) { return ((a * t - 5.0 * a) * t + 8.0 * a) * t - 4.0 * a; }
    return 0.0;
}
@fragment fn fs(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = i32(fc.x); let Y = i32(fc.y);
    let sx = clamp((f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5, 0.0, f32(p.wl) - 1.0);
    let sy = clamp((f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5, 0.0, f32(p.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(p.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(p.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    var c = vec3<f32>(0.0);
    if (p.mode == 5u) {
        // SplineCNN kernel over the 2x2 cell (same conventions as spline_upscale_cuda.cu): output pixel at low-res
        // position (x, y), tap offset o = (x, y) - j, Taylor term t = gx*ox + gy*oy from the blended slope target;
        // pseudo-coordinate u = ((ox+1)/2, (oy+1)/2, clamp(t)/(2T)+0.5); knot i sits at u = i/(K-1) -> texel centre.
        let x = (f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5; let y = (f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5;
        let ix0 = i32(floor(x)); let jy0 = i32(floor(y));
        let K3 = p.K.xyz;
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let jx = ix0 + a; let jy = jy0 + b;
                let ox = x - f32(jx); let oy = y - f32(jy);
                let s = ts(jx, jy);
                let tx = s.x * ox; let ty = s.y * oy; let t = tx + ty;
                let u = vec3<f32>((ox + 1.0) * 0.5, (oy + 1.0) * 0.5, clamp(t, -p.T, p.T) / (2.0 * p.T) + 0.5);
                let tc = (clamp(u, vec3<f32>(0.0), vec3<f32>(1.0)) * (K3 - 1.0) + 0.5) / K3;
                let k = textureSampleLevel(spk, spk_s, tc, 0.0).rgb;
                c += f(jx, jy) * k.r + vec3<f32>(tx) * k.g + vec3<f32>(ty) * k.b;
            }
        }
    } else if (p.mode == 0u) {
        c = mix(mix(f(i0, j0), f(i0 + 1, j0), tx), mix(f(i0, j0 + 1), f(i0 + 1, j0 + 1), tx), ty);
    } else if (p.mode == 1u) {
        for (var dy = -1; dy <= 2; dy++) {
            let wy = keys(f32(dy) - ty); var row = vec3<f32>(0.0);
            for (var dx = -1; dx <= 2; dx++) { row += keys(f32(dx) - tx) * f(i0 + dx, j0 + dy); }
            c += wy * row;
        }
    } else {
        let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
        let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
        let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let i = i0 + a; let j = j0 + b;
                if (p.mode == 4u) {   // slope sidecar alone (luminance slope -> all channels)
                    let t = ts(i, j);
                    c += f(i, j) * (Hx[a] * Hy[b]) + vec3<f32>(t.x) * (Gx[a] * Hy[b]) + vec3<f32>(t.y) * (Hx[a] * Gy[b]);
                    continue;
                }
                var sx = gx(i, j); var sy = gy(i, j);
                if (p.mode == 3u) { let t = ts(i, j) * p.lam; sx += vec3<f32>(t.x); sy += vec3<f32>(t.y); }   // luminance slope -> all channels
                c += f(i, j) * (Hx[a] * Hy[b]) + sx * (Gx[a] * Hy[b]) + sy * (Hx[a] * Gy[b]) + gxy(i, j) * (Gx[a] * Gy[b]);
            }
        }
    }
    return vec4<f32>(c, 1.0);
}`;class od{constructor(s,a,u,l,_=!1){S(this,"pipeline");S(this,"uni");S(this,"bgCache",new Map);S(this,"lowTex",null);S(this,"lowView",null);S(this,"lowSize",[0,0]);S(this,"allocSize",[0,0]);S(this,"last","");S(this,"slopeTex",null);S(this,"slopeView",null);S(this,"rfTex",[]);S(this,"rfViews",[]);S(this,"dummySlope");S(this,"splineTex");S(this,"splineSampler");S(this,"splineKernel",null);S(this,"scale");this.device=s,this.format=a,this.mode=u,this.exact=_,this.scale=l;const y=s.createShaderModule({label:"upscaler",code:ad});this.pipeline=s.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:y,entryPoint:"vs"},fragment:{module:y,entryPoint:"fs",targets:[{format:a}]},primitive:{topology:"triangle-list"}}),this.uni=s.createBuffer({size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=s.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING}),this.splineTex=s.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.splineSampler=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"})}get refetchViews(){return this.rfViews.length===3?{wa:this.rfViews[0],wb:this.rfViews[1],wc:this.rfViews[2],low:this.lowView}:null}get slopeTarget(){return this.slopeView}setSplineKernel(s){if(s===this.splineKernel)return;if(this.splineKernel=s,this.bgCache.clear(),this.last="",this.splineTex.destroy(),!s){this.splineTex=this.device.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return}const[a,u,l]=s.K,_=a*u*l,y=new Uint16Array(_*4);for(let x=0;x<_;x++)y[4*x]=Hr(s.w[3*x]),y[4*x+1]=Hr(s.w[3*x+1]),y[4*x+2]=Hr(s.w[3*x+2]),y[4*x+3]=15360;this.splineTex=this.device.createTexture({size:[a,u,l],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.device.queue.writeTexture({texture:this.splineTex},y,{bytesPerRow:a*8,rowsPerImage:u},[a,u,l])}lowTarget(s,a){var x,P;const u=Math.max(1,Math.min(s,Math.round(s*this.scale))),l=Math.max(1,Math.min(a,Math.round(a*this.scale))),_=this.exact?u:s,y=this.exact?l:a;if(!this.lowTex||this.allocSize[0]!==_||this.allocSize[1]!==y){if((x=this.lowTex)==null||x.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[_,y],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.allocSize=[_,y],(P=this.slopeTex)==null||P.destroy(),this.slopeTex=null,this.slopeView=null,this.rfTex.forEach(M=>M.destroy()),this.rfTex=[],this.rfViews=[],this.mode==="refetch")for(let M=0;M<3;M++){const z=this.device.createTexture({size:[_,y],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.rfTex.push(z),this.rfViews.push(z.createView())}lo[this.mode]!==void 0&&(this.slopeTex=this.device.createTexture({size:[_,y],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())}return this.lowSize=[u,l],{view:this.lowView,w:u,h:l}}pass(s,a,u,l){var z,G,q,V;const[_,y]=this.lowSize,x=`${_},${y},${u},${l}`;if(x!==this.last){const Y=new Uint32Array([_,y,u,l,rd[this.mode],0,0,0,0,0,0,0]),R=new Float32Array(Y.buffer);R[5]=id,R[6]=((z=this.splineKernel)==null?void 0:z.T)??.25,R[8]=((G=this.splineKernel)==null?void 0:G.K[0])??1,R[9]=((q=this.splineKernel)==null?void 0:q.K[1])??1,R[10]=((V=this.splineKernel)==null?void 0:V.K[2])??1,R[11]=0,this.device.queue.writeBuffer(this.uni,0,Y),this.last=x}let P=this.bgCache.get(this.lowView);P||(P=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()},{binding:3,resource:this.splineTex.createView({dimension:"3d"})},{binding:4,resource:this.splineSampler}]}),this.bgCache.set(this.lowView,P));const M=s.beginRenderPass({colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});M.setPipeline(this.pipeline),M.setBindGroup(0,P),M.draw(3),M.end()}destroy(){var s,a;this.rfTex.forEach(u=>u.destroy()),(s=this.lowTex)==null||s.destroy(),(a=this.slopeTex)==null||a.destroy(),this.dummySlope.destroy(),this.splineTex.destroy(),this.uni.destroy()}}function Hr(i){const s=new Float32Array([i]),a=new Uint32Array(s.buffer)[0],u=a>>>16&32768;let l=(a>>>23&255)-127+15,_=a&8388607;if((a>>>23&255)===255)return u|31744|(_?512:0);if(l>=31)return u|31744;if(l<=0){if(l<-10)return u;_|=8388608;const P=14-l;let M=_>>P;const z=_&(1<<P)-1,G=1<<P-1;return(z>G||z===G&&M&1)&&M++,u|M}let y=u|l<<10|_>>13;const x=_&8191;return(x>4096||x===4096&&y&1)&&y++,y}const Cs=64,Yr=-7,ld=5;function Xr(i){const s=i&32768?-1:1,a=i>>10&31,u=i&1023;return a===0?s*u*2**-24:a===31?u?NaN:s*(1/0):s*(1+u/1024)*2**(a-15)}class cd{constructor(s,a,u,l={}){S(this,"n");S(this,"texelMode");S(this,"px");S(this,"py");S(this,"pz");S(this,"tpu");S(this,"op");S(this,"ext2s");S(this,"hist",new Float64Array(Cs));S(this,"cur",1);S(this,"agree",0);S(this,"tau");S(this,"pct");S(this,"levels");S(this,"upHold");S(this,"minPx");S(this,"continuous");S(this,"fMax");S(this,"rateUp");S(this,"rateDown");S(this,"deadband");S(this,"minF");this.tau=l.tau??1,this.pct=l.pct??.5,this.upHold=l.upHold??12,this.minPx=l.minPx??6,this.levels=(l.levels??[1,2,4]).slice().sort((Z,O)=>Z-O),this.continuous=l.continuous??!0,this.fMax=this.levels[this.levels.length-1],this.rateUp=l.rateUp??.03,this.rateDown=l.rateDown??.1,this.deadband=l.deadband??.06,this.minF=Math.max(1,l.minF??1.3);const _=Math.min(l.sample??4096,a),y=new Uint32Array(s.buffer,s.byteOffset,a*8),x=u?u.uv_extent:3,P=!!u&&!u.probe_mode&&u.num_rects===a&&u.rects_expanded.length>=a*4,M=P?Math.round(u.rects_expanded.length/a):0;this.texelMode=P;const z=[],G=[],q=[],V=[],Y=[],R=[],N=a/_;for(let Z=0;Z<_;Z++){const O=Math.min(a-1,Math.floor(Z*N)),ee=Xr(y[O*8+3]&65535);if(!(ee>.02))continue;const K=Xr(y[O*8+4]&65535),te=Xr(y[O*8+4]>>>16),le=Math.sqrt(Math.max(1e-12,K*te));let ue;if(P){const de=u.rects_expanded[O*M+2],Ee=u.rects_expanded[O*M+3];if(!(de>0&&Ee>0))continue;ue=Math.sqrt(de*Ee)/(2*x*le)}else ue=1/(2*x*le);z.push(s[O*8]),G.push(s[O*8+1]),q.push(s[O*8+2]),V.push(ue),Y.push(ee),R.push(2*x*le)}this.n=z.length,this.px=Float32Array.from(z),this.py=Float32Array.from(G),this.pz=Float32Array.from(q),this.tpu=Float32Array.from(V),this.op=Float32Array.from(Y),this.ext2s=Float32Array.from(R)}get factor(){return this.cur}reset(){this.cur=1,this.agree=0}choose(s,a,u){const l=s.rotation,_=s.position[0],y=s.position[1],x=s.position[2],P=s.getFovY(),M=Math.tan(P*.5),z=M*a/u,G=.5*u/M,q=this.hist;q.fill(0);let V=0,Y=0;const R=Cs/(ld-Yr);for(let O=0;O<this.n;O++){const ee=this.px[O]-_,K=this.py[O]-y,te=this.pz[O]-x,le=l[2]*ee+l[6]*K+l[10]*te;if(!(le>.05))continue;const ue=l[0]*ee+l[4]*K+l[8]*te,de=l[1]*ee+l[5]*K+l[9]*te;if(Math.abs(ue)>1.15*le*z||Math.abs(de)>1.15*le*M)continue;const Ee=this.ext2s[O]*G/le,Te=this.texelMode?this.tpu[O]*le/G:this.minPx/Ee,Ue=this.op[O]*Math.min(Ee*Ee,4096);let Ce=Math.floor((Math.log2(Math.max(Te,1e-9))-Yr)*R);Ce=Ce<0?0:Ce>=Cs?Cs-1:Ce,q[Ce]+=Ue,V+=Ue,Y++}let N=1/0;if(V>0){let O=0;for(let ee=0;ee<Cs;ee++)if(O+=q[ee],O>=this.pct*V){N=2**(Yr+(ee+.5)/R);break}}if(this.continuous){let O=N>0?Math.min(this.fMax,Math.max(1,this.tau/N)):1;O<(this.cur===1?this.minF:this.minF/1.13)?O=1:this.cur===1&&(this.cur=this.minF/1.13);const ee=Math.log2(O)-Math.log2(this.cur);if(Math.abs(ee)>Math.log2(1+this.deadband)||O===1||O===this.fMax){const K=ee>0?Math.min(ee,this.rateUp):Math.max(ee,-this.rateDown);this.cur=Math.abs(ee)<=Math.abs(K)?O:2**(Math.log2(this.cur)+K)}return(this.cur<this.minF/1.13-1e-6||this.cur<1.02)&&(this.cur=1),{f:this.cur,q:N,visible:Y,texelMode:this.texelMode}}let Z=1;for(const O of this.levels)O*N<=this.tau&&(Z=O);return Z<this.cur?(this.cur=Z,this.agree=0):Z>this.cur?++this.agree>=this.upHold&&(this.cur=Z,this.agree=0):this.agree=0,{f:this.cur,q:N,visible:Y,texelMode:this.texelMode}}}const ud=X.create(1,0,0),dd=X.create(0,1,0),pd=X.create(0,0,1);function hd(i,s){const a=i[0],u=i[4],l=i[8],_=i[1],y=i[5],x=i[9],P=i[2],M=i[6],z=i[10],G=a+y+z;let q,V,Y,R;if(G>0){const N=.5/Math.sqrt(G+1);q=.25/N,V=(M-x)*N,Y=(l-P)*N,R=(_-u)*N}else if(a>y&&a>z){const N=2*Math.sqrt(1+a-y-z);q=(M-x)/N,V=.25*N,Y=(u+_)/N,R=(l+P)/N}else if(y>z){const N=2*Math.sqrt(1+y-a-z);q=(l-P)/N,V=(u+_)/N,Y=.25*N,R=(x+M)/N}else{const N=2*Math.sqrt(1+z-a-y);q=(_-u)/N,V=(l+P)/N,Y=(x+M)/N,R=.25*N}return s[0]=V,s[1]=Y,s[2]=R,s[3]=q,s}class co{constructor(s){S(this,"element");S(this,"enabled",!0);S(this,"center",X.create(0,0,0));S(this,"up",X.create(0,1,0));S(this,"rotation",[0,0]);S(this,"shift",[0,0]);S(this,"scroll",0);S(this,"speed",.1);S(this,"sensitivity",.08);S(this,"leftPressed",!1);S(this,"rightPressed",!1);S(this,"leftDragPans",!1);S(this,"lastX",0);S(this,"lastY",0);S(this,"touches",new Map);S(this,"lastTouchCenter",null);S(this,"lastPinchDistance",null);S(this,"lastTwoFingerAngle",null);S(this,"lastTouchCount",0);S(this,"roll",0);S(this,"_dir",X.create());S(this,"_right",X.create());S(this,"_upCam",X.create());S(this,"_scratch",X.create());S(this,"_qY",mt.create());S(this,"_qX",mt.create());S(this,"_qRot",mt.create());S(this,"_qZ",mt.create());S(this,"_qLocal",mt.create());S(this,"_qWorldToCam",mt.create());S(this,"_scratchMat3",At.create());S(this,"bboxMin",null);S(this,"bboxMax",null);S(this,"anchor",X.create(0,0,0));S(this,"downCallback",s=>{var a,u,l,_;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(u=(a=s.target)==null?void 0:a.setPointerCapture)==null||u.call(a,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(_=(l=s.target)==null?void 0:l.setPointerCapture)==null||_.call(l,s.pointerId),s.preventDefault())}});S(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const a=s.pageX-this.lastX,u=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=a,this.rotation[1]-=u):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=a,this.shift[0]+=u)});S(this,"upCallback",s=>{var a,u,l,_;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(u=(a=s.target)==null?void 0:a.releasePointerCapture)==null||u.call(a,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(_=(l=s.target)==null?void 0:l.releasePointerCapture)==null||_.call(l,s.pointerId),s.preventDefault()});S(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let a=s.deltaY;s.deltaMode===1?a*=16:s.deltaMode===2&&(a*=100),this.scroll+=a*.01});this.camera=s,this.registerElement(s.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const s=this.bboxMax[0]-this.bboxMin[0],a=this.bboxMax[1]-this.bboxMin[1],u=this.bboxMax[2]-this.bboxMin[2],l=.5*Math.sqrt(s*s+a*a+u*u);return l>1e-6?l:null}addRoll(s){this.roll+=s}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",a=>a.preventDefault())}setCenter(s){X.copy(s,this.center),X.copy(s,this.anchor)}setOrbitPivot(s){X.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const a=this.camera.rotation;X.set(a[2],a[6],a[10],this._dir),X.normalize(this._dir,this._dir),X.scale(this._dir,s,this._dir),X.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(X.subtract(this.center,s.position,this._scratch),X.length(this._scratch)<1e-6)return;X.normalize(this._scratch,this._scratch),X.cross(this.up,this._scratch,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right),X.normalize(this._right,this._right),X.cross(this._scratch,this._right,this._upCam),X.normalize(this._upCam,this._upCam);const a=s.rotation;a[0]=this._right[0],a[1]=this._upCam[0],a[2]=this._scratch[0],a[3]=0,a[4]=this._right[1],a[5]=this._upCam[1],a[6]=this._scratch[1],a[7]=0,a[8]=this._right[2],a[9]=this._upCam[2],a[10]=this._scratch[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,s.update_buffer()}setBbox(s,a){this.bboxMin=X.create(s[0],s[1],s[2]),this.bboxMax=X.create(a[0],a[1],a[2]);const u=(s[0]+a[0])*.5,l=(s[1]+a[1])*.5,_=(s[2]+a[2])*.5;X.set(u,l,_,this.center),X.set(u,l,_,this.anchor)}resetToCamera(){const s=this.camera.rotation;X.set(s[2],s[6],s[10],this._dir),X.normalize(this._dir,this._dir);let a=null;if(this.bboxMin&&this.bboxMax){let u=-1/0,l=1/0,_=!1;for(let y=0;y<3;y++){const x=this._dir[y],P=this.bboxMin[y]-this.camera.position[y],M=this.bboxMax[y]-this.camera.position[y];if(Math.abs(x)>1e-8){const z=P/x,G=M/x;u=Math.max(u,Math.min(z,G)),l=Math.min(l,Math.max(z,G))}else if(P>0||M<0){_=!0;break}}!_&&u<=l&&l>0&&(a=(Math.max(u,0)+l)*.5)}if(a===null||!isFinite(a)||a<.001){X.subtract(this.anchor,this.camera.position,this._scratch);const u=X.dot(this._scratch,this._dir);a=u>.001?u:X.length(this._scratch)}a=Math.max(.1,a),X.scale(this._dir,a,this._dir),X.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const a=this.touches.values().next().value;if(this.lastTouchCenter){const u=a.x-this.lastTouchCenter[0],l=a.y-this.lastTouchCenter[1];this.rotation[0]+=u*.3,this.rotation[1]-=l*.3}this.lastTouchCenter=[a.x,a.y]}else if(s===2){const a=Array.from(this.touches.values()),u=(a[0].x+a[1].x)*.5,l=(a[0].y+a[1].y)*.5,_=a[1].x-a[0].x,y=a[1].y-a[0].y,x=Math.hypot(_,y),P=Math.atan2(y,_);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const M=u-this.lastTouchCenter[0],z=l-this.lastTouchCenter[1],G=Math.hypot(M,z),q=Math.abs(x-this.lastPinchDistance);let V=P-this.lastTwoFingerAngle;V>Math.PI&&(V-=2*Math.PI),V<-Math.PI&&(V+=2*Math.PI),G>.5&&(this.shift[1]-=M,this.shift[0]+=z),q>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(x/this.lastPinchDistance)*10),Math.abs(V)>.0087&&(this.roll+=V)}this.lastTouchCenter=[u,l],this.lastPinchDistance=x,this.lastTwoFingerAngle=P}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const a=this.camera;{const N=a.rotation;this.up[0]=N[1],this.up[1]=N[5],this.up[2]=N[9],X.length(this.up)>1e-6?X.normalize(this.up,this.up):X.set(0,1,0,this.up)}let u=0,l=!1;Math.abs(this.roll)>1e-4&&(u=this.roll,this.roll=0,l=!0),X.subtract(a.position,this.center,this._dir);let _=X.length(this._dir);_<1e-6&&(_=1e-6);const y=Math.exp(Math.log(_)+this.scroll*s*10*this.speed);X.scale(this._dir,y/_,this._dir),_=y;const x=a.rotation;this._right[0]=x[0],this._right[1]=x[4],this._right[2]=x[8],X.normalize(this._right,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right);const P=X.create(x[1],x[5],x[9]);X.normalize(P,P),X.length(P)<1e-6&&X.set(0,1,0,P);const M=s*this.speed*.1*_,z=this.shift[1]*M,G=-this.shift[0]*M;X.scale(this._right,z,this._scratch),X.add(this.center,this._scratch,this.center),X.add(a.position,this._scratch,a.position),X.scale(P,G,this._scratch),X.add(this.center,this._scratch,this.center),X.add(a.position,this._scratch,a.position);const q=this.rotation[0]*s*this.sensitivity,V=this.rotation[1]*s*this.sensitivity;if(Math.abs(q)>1e-5||Math.abs(V)>1e-5||l){const N=a.rotation;hd(N,this._qWorldToCam),mt.fromAxisAngle(ud,-V,this._qX),mt.fromAxisAngle(dd,-q,this._qY),mt.multiply(this._qX,this._qY,this._qLocal),l&&(mt.fromAxisAngle(pd,1*u,this._qZ),mt.multiply(this._qZ,this._qLocal,this._qLocal)),mt.normalize(this._qLocal,this._qLocal),mt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),mt.normalize(this._qWorldToCam,this._qWorldToCam),At.fromQuat(this._qWorldToCam,this._scratchMat3),yt.fromMat3(this._scratchMat3,a.rotation);const Z=a.rotation,O=Z[2],ee=Z[6],K=Z[10];a.position[0]=this.center[0]-O*_,a.position[1]=this.center[1]-ee*_,a.position[2]=this.center[2]-K*_,this.up[0]=Z[1],this.up[1]=Z[5],this.up[2]=Z[9],X.normalize(this.up,this.up)}else X.add(this.center,this._dir,a.position);a.update_buffer();const R=Math.pow(.8,s*60);this.rotation[0]*=R,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=R,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=R,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=R,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=R,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function uo(i){const s=X.create();for(const a of i)X.add(s,a,s);return X.scale(s,1/Math.max(i.length,1),s)}function po(i,s){const a=At.create();At.inverse(i,a);const u=X.create();return u[0]=a[0]*s[0]+a[4]*s[1]+a[8]*s[2],u[1]=a[1]*s[0]+a[5]*s[1]+a[9]*s[2],u[2]=a[2]*s[0]+a[6]*s[1]+a[10]*s[2],u}function fd(i){const s=i.slice(),a=[1,0,0,0,1,0,0,0,1],u=(P,M)=>s[P*3+M],l=(P,M,z)=>{s[P*3+M]=z},_=(P,M)=>a[P*3+M],y=(P,M,z)=>{a[P*3+M]=z};for(let P=0;P<30;P++){let M=0,z=1,G=Math.abs(u(0,1));if(Math.abs(u(0,2))>G&&(M=0,z=2,G=Math.abs(u(0,2))),Math.abs(u(1,2))>G&&(M=1,z=2,G=Math.abs(u(1,2))),G<1e-12)break;const q=u(M,M),V=u(z,z),Y=u(M,z);let R;Math.abs(q-V)<1e-30?R=Math.PI/4*Math.sign(Y):R=.5*Math.atan2(2*Y,q-V);const N=Math.cos(R),Z=Math.sin(R);for(let O=0;O<3;O++){const ee=u(O,M),K=u(O,z);l(O,M,N*ee+Z*K),l(O,z,-Z*ee+N*K)}for(let O=0;O<3;O++){const ee=u(M,O),K=u(z,O);l(M,O,N*ee+Z*K),l(z,O,-Z*ee+N*K)}for(let O=0;O<3;O++){const ee=_(O,M),K=_(O,z);y(O,M,N*ee+Z*K),y(O,z,-Z*ee+N*K)}}const x=[];for(let P=0;P<3;P++)x.push({val:u(P,P),vec:X.create(_(0,P),_(1,P),_(2,P))});return x.sort((P,M)=>M.val-P.val),{vals:[x[0].val,x[1].val,x[2].val],vecs:[x[0].vec,x[1].vec,x[2].vec]}}function _d(i,s){const a=uo(i);let u=0,l=0,_=0,y=0,x=0,P=0;for(const Y of i){const R=Y[0]-a[0],N=Y[1]-a[1],Z=Y[2]-a[2];u+=R*R,l+=R*N,_+=R*Z,y+=N*N,x+=N*Z,P+=Z*Z}const M=[u,l,_,l,y,x,_,x,P],{vecs:z}=fd(M);let G=z[0],q=z[1],V=z[2];return X.dot(V,s)<0&&(X.scale(V,-1,V),X.scale(q,-1,q)),{centroid:a,normal:V,u:G,v:q}}function md(i){let s=0,a=0,u=0,l=0,_=0,y=0,x=0,P=0,M=0;for(const[N,Z]of i){const O=-2*N,ee=-2*Z,K=1,te=-(N*N+Z*Z);s+=O*O,a+=O*ee,u+=O*K,l+=ee*ee,_+=ee*K,y+=K*K,x+=O*te,P+=ee*te,M+=K*te}const z=At.create(s,a,u,a,l,_,u,_,y),G=po(z,X.create(x,P,M)),q=G[0],V=G[1],Y=G[2],R=q*q+V*V-Y;return{center:[q,V],radius:Math.sqrt(Math.max(R,1e-12))}}function bd(i,s){let a=0,u=0,l=0,_=0,y=0,x=0,P=0,M=0,z=0;for(let q=0;q<i.length;q++){const V=i[q],Y=X.normalize(s[q],X.create()),R=1-Y[0]*Y[0],N=-Y[0]*Y[1],Z=-Y[0]*Y[2],O=1-Y[1]*Y[1],ee=-Y[1]*Y[2],K=1-Y[2]*Y[2];a+=R,u+=N,l+=Z,_+=O,y+=ee,x+=K,P+=R*V[0]+N*V[1]+Z*V[2],M+=N*V[0]+O*V[1]+ee*V[2],z+=Z*V[0]+ee*V[1]+K*V[2]}const G=At.create(a,u,l,u,_,y,l,y,x);return po(G,X.create(P,M,z))}function ho(i,s={}){if(i.length===0)return null;const a=s.tiltDownDeg??8,u=s.radiusScale??1,l=s.alignFirst??!0,_=(s.direction??"ccw")==="ccw"?1:-1,y=i.map(de=>X.clone(de.position)),x=i.map(de=>{const Ee=de.rotation;return X.create(Ee[8],Ee[9],Ee[10])}),P=i.map(de=>{const Ee=de.rotation;return X.create(Ee[4],Ee[5],Ee[6])}),M=uo(P),z=X.normalize(X.scale(M,-1,X.create())),{centroid:G,normal:q,u:V,v:Y}=_d(y,z),R=y.map(de=>{const Ee=X.sub(de,G,X.create());return[X.dot(Ee,V),X.dot(Ee,Y)]}),{center:N,radius:Z}=md(R),O=Z*u,ee=X.add(G,X.add(X.scale(V,N[0],X.create()),X.scale(Y,N[1],X.create()),X.create()),X.create()),K=bd(y,x),te=O*Math.tan(a*Math.PI/180),le=X.sub(K,X.scale(q,te,X.create()),X.create());let ue=0;if(l){const de=X.sub(y[0],ee,X.create());ue=Math.atan2(X.dot(de,Y),X.dot(de,V))/(2*Math.PI)%1,ue<0&&(ue+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${O.toFixed(2)}, tilt=${a}°, normal=[${q[0].toFixed(2)}, ${q[1].toFixed(2)}, ${q[2].toFixed(2)}], startPhase=${ue.toFixed(3)}`),{center:ee,radius:O,normal:q,u:V,v:Y,lookAt:le,startPhase:ue,direction:_}}function fo(i,s){const a=(i.startPhase+s*i.direction)*2*Math.PI,u=Math.cos(a),l=Math.sin(a),_=X.add(i.center,X.add(X.scale(i.u,i.radius*u,X.create()),X.scale(i.v,i.radius*l,X.create()),X.create()),X.create()),y=X.normalize(X.sub(i.lookAt,_,X.create())),x=X.cross(y,i.normal,X.create());X.length(x)<1e-6&&X.copy(i.u,x),X.normalize(x,x);const P=X.cross(y,x,X.create());X.normalize(P,P);const M=yt.create();return M[0]=x[0],M[1]=P[0],M[2]=y[0],M[3]=0,M[4]=x[1],M[5]=P[1],M[6]=y[1],M[7]=0,M[8]=x[2],M[9]=P[2],M[10]=y[2],M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,{position:_,rotation:M,img_name:`orbit_${(s*1e3).toFixed(0)}`,id:0}}function vd(i,s={}){const a=ho(i,s);if(!a)return[];const u=s.numViews??120;return Array.from({length:u},(l,_)=>({...fo(a,_/u),img_name:`circle_${_.toString().padStart(4,"0")}`,id:_}))}const _o="halloumi.renderer";function gd(){const i=new URLSearchParams(window.location.search).get("renderer"),s=i==="webgl"||i==="webgpu"?i:null;let a=null;try{const u=localStorage.getItem(_o);(u==="webgl"||u==="webgpu")&&(a=u)}catch{}return{forced:s,stored:a}}function ci(i){try{localStorage.setItem(_o,i)}catch{}const s=new URLSearchParams(window.location.search);s.set("renderer",i),window.location.search=s.toString()}function $a(i){return i==="bilinear"||i==="bicubic"||i==="hermite"||i==="texture"||i==="bc5"||i==="p"||i==="spline"||i==="refetch"?i:"off"}function dn(i){const s=(i&32768)>>15,a=(i&31744)>>10,u=i&1023;return a===0?(s?-1:1)*Math.pow(2,-14)*(u/1024):a===31?u?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,a-15)*(1+u/1024)}function ui(i,s,a,u,l,_,y,x,P,M=.5){const z=P?P.length:y.length/8,G=[],q=[];for(let R=0;R<z;R++){const Z=(P?P[R]:R)*8,O=y[Z]-i,ee=y[Z+1]-s,K=y[Z+2]-a,te=O*u+ee*l+K*_;if(te<=0||!(x[Z+7]>>>16&1))continue;const le=x[Z+4],ue=dn(le&65535),de=dn(le>>>16&65535),Ee=3*Math.max(ue,de),Te=O-te*u,Ue=ee-te*l,Ce=K-te*_;if(Te*Te+Ue*Ue+Ce*Ce>Ee*Ee)continue;const pe=dn(x[Z+3]&65535);if(pe<1/255)continue;const I=x[Z+5],ye=x[Z+6];let we=dn(I&65535),_e=dn(I>>>16&65535),be=dn(ye&65535),ae=dn(ye>>>16&65535);const Pe=Math.hypot(we,_e,be,ae)||1;we/=Pe,_e/=Pe,be/=Pe,ae/=Pe;const Ie=1-2*(be*be+ae*ae),Ae=2*(_e*be+we*ae),De=2*(_e*ae-we*be),xe=2*(_e*be-we*ae),fe=1-2*(_e*_e+ae*ae),Se=2*(be*ae+we*_e),F=2*(_e*ae+we*be),J=2*(be*ae-we*_e),k=1-2*(_e*_e+be*be),c=u*F+l*J+_*k;if(Math.abs(c)<1e-6)continue;const p=(O*F+ee*J+K*k)/c;if(!(p>0))continue;const h=p*u-O,w=p*l-ee,C=p*_-K,U=(h*Ie+w*Ae+C*De)/(ue||1e-6),A=(h*xe+w*fe+C*Se)/(de||1e-6),o=U*U+A*A;if(o>9)continue;const v=Math.min(.99,pe*Math.exp(-.5*o));v<1/255||(G.push(p),q.push(v))}if(G.length===0)return null;const V=G.map((R,N)=>N).sort((R,N)=>G[R]-G[N]);let Y=1;for(const R of V)if(Y*=1-q[R],Y<M)return G[R];return null}function dr(i,s,a){const u=(i-a.viewport[0]*.5)/a.focal[0],l=-((s-a.viewport[1]*.5)/a.focal[1]),_=a.rotation;let y=u*_[0]+l*_[1]+_[2],x=u*_[4]+l*_[5]+_[6],P=u*_[8]+l*_[9]+_[10];const M=Math.hypot(y,x,P)||1;return[y/M,x/M,P/M]}function di(i,s,a,u,l,_){const[y,x,P]=dr(i,s,u),M=u.position[0],z=u.position[1],G=u.position[2],q=new Uint32Array(l.buffer,l.byteOffset,l.length);let V=ui(M,z,G,y,x,P,l,q,null,.5);return V===null&&(V=ui(M,z,G,y,x,P,l,q,null,.8)),V===null?null:[M+V*y,z+V*x,G+V*P]}function mo(i,s){const a=i.viewport[0],u=i.viewport[1],l=new Uint32Array(s.buffer,s.byteOffset,s.length),_=i.position[0],y=i.position[1],x=i.position[2],[P,M,z]=dr(a*.5,u*.5,i),G=.06*Math.max(a,u),q=(G+2)/i.focal[0],V=s.length/8,Y=[];for(let O=0;O<V;O++){const ee=O*8,K=s[ee]-_,te=s[ee+1]-y,le=s[ee+2]-x,ue=K*P+te*M+le*z;if(ue<=0)continue;const de=l[ee+4],Ee=3*Math.max(dn(de&65535),dn(de>>>16&65535)),Te=K-ue*P,Ue=te-ue*M,Ce=le-ue*z,pe=ue*q+Ee;Te*Te+Ue*Ue+Ce*Ce<=pe*pe&&Y.push(O)}if(Y.length===0)return null;const R=Int32Array.from(Y),N=[],Z=5;for(let O=0;O<Z;O++)for(let ee=0;ee<Z;ee++){const K=a*.5+(ee-(Z-1)/2)/((Z-1)/2)*G,te=u*.5+(O-(Z-1)/2)/((Z-1)/2)*G,[le,ue,de]=dr(K,te,i),Ee=ui(_,y,x,le,ue,de,s,l,R,.5);Ee!==null&&N.push(Ee*(le*P+ue*M+de*z))}return N.length<3?null:(N.sort((O,ee)=>O-ee),N[N.length>>1])}function wd(i){return new Promise(s=>{const a=document.createElement("input");a.type="file",a.accept=i,a.style.display="none",a.onchange=()=>{var u;return s(((u=a.files)==null?void 0:u[0])??null)},document.body.appendChild(a),a.click(),setTimeout(()=>document.body.removeChild(a),1e3)})}function xd(i,s,a){const u=document.getElementById("ui-panel-container"),l=document.getElementById("load-button"),_=document.getElementById("quick-links");l&&(l.onclick=async()=>{const M=await wd(".ply,.bitymi");if(M)if(u&&(u.style.display="none"),M.name.toLowerCase().endsWith(".bitymi")){const z=await M.arrayBuffer(),{pcBuffer:G}=fi(z),q=new File([G],M.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),V=await rr(q,i);s(V)}else{const z=await rr(M,i);s(z)}}),_&&(_.innerHTML="");const y=new URLSearchParams(window.location.search),x=y.get("bundle")??y.get("model_url"),P=y.get("camera_url");x&&(u&&(u.style.display="none"),a(x,P))}async function yd(i,s,a){const{bundle:u}=await us(i,(y,x)=>a(`downloading B ... ${(y/1048576).toFixed(1)}${x?` / ${(x/1048576).toFixed(1)}`:""} MB`));if(!u)throw new Error("bundle_b must be a .bitymi bundle");a("parsing B ...");const l=await rr(new File([u.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),s);let _=null;if(u.atlasBuffer){a("uploading B atlas ...");try{_=await si(s,Nn(u.atlasBuffer),!0)}catch(y){console.warn("[A/B] B atlas failed:",y)}}return{pc:l,atlas:_}}function Zr(i){const s=new Uint32Array(i.surfel_data.buffer,i.surfel_data.byteOffset,i.num_points*8);for(let a=0;a<i.num_points;a++){const u=s[a*8+7];if(!(u>>>16&1)||(u>>>17&1)===1)return!0}return!1}async function Pd(i,s,a,u){const l=new ur(i,a),_=new co(l);let y=!1;i.addEventListener("pointerdown",()=>{y=!0}),window.addEventListener("pointerup",()=>{y=!1});const x=typeof window<"u"&&window.parent!==window,P={pos:new Float32Array(3),rot:new Float32Array(16)};if(x){window.addEventListener("message",p=>{const h=p.data;if(!(!h||h.type!=="halloumi_sync_pose")&&!(!Array.isArray(h.position)||h.position.length!==3)&&!(!Array.isArray(h.rotation)||h.rotation.length!==16)){for(let w=0;w<3;w++)l.position[w]=h.position[w];for(let w=0;w<16;w++)l.rotation[w]=h.rotation[w];l.update_buffer(),_.resetToCamera();for(let w=0;w<3;w++)P.pos[w]=l.position[w];for(let w=0;w<16;w++)P.rot[w]=l.rotation[w]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const M=()=>{if(!x)return;const p=l.position,h=l.rotation;let w=!1;for(let C=0;C<3;C++)if(Math.abs(p[C]-P.pos[C])>1e-6){w=!0;break}if(!w){for(let C=0;C<16;C++)if(Math.abs(h[C]-P.rot[C])>1e-6){w=!0;break}}if(w){for(let C=0;C<3;C++)P.pos[C]=p[C];for(let C=0;C<16;C++)P.rot[C]=h[C];try{window.parent.postMessage({type:"halloumi_camera_state",position:[p[0],p[1],p[2]],rotation:Array.from(h)},"*")}catch{}}},z="rgba8unorm";s.configure({device:a,format:z,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let G=null,q=null,V=null,Y=[0,0,0,0];const R=()=>{l.on_update_canvas(),G!==null&&En(i.width,i.height,a,G.render_settings_buffer),q!==null&&q()};new ResizeObserver(()=>{const p=Math.max(.25,I.render_scale),h=Math.max(1,Math.ceil(p*i.clientWidth)),w=Math.max(1,Math.ceil(p*i.clientHeight));i.width===h&&i.height===w||(i.width=h,i.height=w,R())}).observe(i);let Z=0,O=0;const ee=()=>{(i.width!==Z||i.height!==O)&&(Z=i.width,O=i.height,R())},K=new URLSearchParams(window.location.search);let le=K.get("animation")==="1";_.enabled=!le;const ue=K.get("camera_url"),de=K.get("bfc"),Ee=de==="1"||de==="true",Te=K.get("bfc_cos"),Ue=Te!==null?Number(Te):NaN,Ce=Number.isFinite(Ue)?Ue:2,pe=Math.max(1,window.devicePixelRatio||1),I={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:le,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Ee,bfc_cos:Ce,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:["1","true"].includes(new URLSearchParams(location.search).get("upon")??"")?$a(new URLSearchParams(location.search).get("up")):"off",upscale_factor:(p=>p>0&&p<1?Math.max(1.05,Math.min(8,1/p)):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1")),upscale_auto:new URLSearchParams(location.search).get("rs")==="auto",clip_on:["x","y","z"].includes((new URLSearchParams(location.search).get("clip")??"").toLowerCase()),clip_t:parseFloat(new URLSearchParams(location.search).get("clip_t")??"0.5"),clip_eps:parseFloat(new URLSearchParams(location.search).get("clip_eps")??"0.01"),cap_on:!0,cap_mix:!0,rf_edge:new URLSearchParams(location.search).get("rf_edge")!=="0",adapt_heat:["1","true"].includes(new URLSearchParams(location.search).get("adapt_heat")??""),adapt_tau:(p=>p>0?p:1)(parseFloat(new URLSearchParams(location.search).get("adapt_tpp")??"1")),slope_mip:["1","true"].includes(new URLSearchParams(location.search).get("slope_mip")??"")},ye=new ao.Pane({title:"Config",expanded:!0}),we={stats:"— loading —"};ye.addMonitor(we,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2});let _e=null;const be=ye.addInput(I,"atlas_enabled",{label:"Texture"}).on("change",p=>_e==null?void 0:_e(p.value));let ae=null;const Pe=new URLSearchParams(location.search),Ie={x:0,y:1,z:2}[(Pe.get("clip")??"").toLowerCase()]??2,Ae=(Pe.get("clip_keep")??"lower")!=="upper";let De=[parseFloat(Pe.get("clip_min")??"NaN"),parseFloat(Pe.get("clip_max")??"NaN")];I.clip_on&&ye.addInput(I,"clip_t",{label:`Clip (${"xyz"[Ie]})`,min:0,max:1,step:.002}),I.clip_on&&ye.addInput(I,"clip_on",{label:"Clip on"});let xe=null;const fe=ye.addFolder({title:"⚙ Advanced options",expanded:!1}),Se=new ja;ye.on("change",()=>Se.request()),window.__halloumiRedraw=()=>Se.request(),window.__halloumiGate=Se;const F={on:I.upscale!=="off"},J=fe.addInput(F,"on",{label:"Upscaling (2×)"}).on("change",p=>ae==null?void 0:ae(p.value));fe.addInput(I,"animate",{label:"Animate"}).on("change",p=>{const h=le;le=p.value,_.enabled=!p.value,!h&&le&&k.value&&k.value.onAnimateStart(),h&&!le&&k.value&&k.value.onAnimateStop()}),fe.addInput(I,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const k={value:null};xd(a,p=>c(p,[],null),async(p,h)=>{let w=h??ue,C,U=null;const A=p.toLowerCase();if(A.endsWith(".bitymi")||A.includes(".bitymi?")){ds("downloading bundle ...");try{const{bundle:d}=await us(p,(T,E,$,L)=>{if(L==="cache"){Mt(`loading cached bundle ...
${(T/1048576).toFixed(1)}${E?` / ${(E/1048576).toFixed(1)}`:""} MB on this device`);return}const j=T/(1024*1024),re=E?E/(1024*1024):void 0,ie=$/(1024*1024),se=E?Math.min(99,Math.floor(T/E*100)):void 0,ve=re?`total ${re.toFixed(1)} MB`:"total -- MB",Re=re&&se!==void 0?`${j.toFixed(1)} MB downloaded (${se}%)`:`${j.toFixed(1)} MB downloaded`,Be=`${ie.toFixed(2)} MB/s`;Mt(`downloading bundle ...
${ve}, ${Re}
${Be}`)});if(!d)throw new Error("Expected a .bitymi bundle");Mt("parsing PLY ...");const g=new File([d.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(C=await rr(g,a),!w&&d.camerasBuffer&&(w=URL.createObjectURL(new Blob([d.camerasBuffer],{type:"application/json"}))),d.atlasBuffer){const T=d.atlasBuffer.byteLength/1048576;Mt(`uploading atlas ...
${T.toFixed(1)} MB BC7`);try{const E=Nn(d.atlasBuffer);U=await si(a,E,!0)}catch(E){console.warn("[atlas] failed to parse/upload atlas:",E)}}}catch(d){throw Qt(),d}}else C=await bu(p,a);let o=null,v="";const f=K.get("atlas2");if(f)try{const{bundle:d}=await us(f,(g,T)=>{Mt(`downloading second atlas ...
${(g/1048576).toFixed(1)}${T?` / ${(T/1048576).toFixed(1)}`:""} MB`)});if(!(d!=null&&d.atlasBuffer))throw new Error("second bundle has no atlas chunk");Mt("uploading second atlas ..."),o=await si(a,Nn(d.atlasBuffer),!0),o||(v="second atlas: format unsupported on this device")}catch(d){console.warn("[atlas2] failed:",d),v=`second atlas failed: ${d}`}const b=w?await li(w):[];b.length>0&&l.set_preset(b[0]),c(C,b,U,o,v)});function c(p,h=[],w=null,C=null,U=""){const A=[(p.bbox.min[0]+p.bbox.max[0])/2,(p.bbox.min[1]+p.bbox.max[1])/2,(p.bbox.min[2]+p.bbox.max[2])/2];if(_.setBbox(p.bbox.min,p.bbox.max),!(isFinite(De[0])&&isFinite(De[1]))){const B=p.bbox.min[Ie],W=p.bbox.max[Ie];De=[B+.3*(W-B),B+.7*(W-B)]}I.clip_on&&console.log(`[clip] axis ${"xyz"[Ie]} keep ${Ae?"lower":"upper"} range ${De[0].toFixed(3)}..${De[1].toFixed(3)}`);{const B=Pe.get("cap");B&&I.clip_on&&(async()=>{try{const W=await ai(B,(oe,ne,he,ce)=>{vt.slope=`cap: ${ce==="cache"?"cached ":""}${(oe/1048576).toFixed(0)}${ne?` / ${(ne/1048576).toFixed(0)}`:""} MB`}),Q=eu(W);xe=new tu(a,z,l.uniform_buffer,Q),L.capPass=(oe,ne,he)=>!xe||!I.clip_on?!1:(xe.draw(oe,ne,he??void 0),xe.enabled),Pe.get("clip_min")===null&&(De=[Q.meta.tauMin,Q.meta.tauMax]),vt.slope=`cap: ${Q.meta.N} levels ready`,fe.addInput(I,"cap_on",{label:"Cap (cross-section)"}).on("change",()=>Se.request()),fe.addInput(I,"cap_mix",{label:"Cap: blend levels"}).on("change",()=>Se.request()),fe.addInput(I,"clip_eps",{label:"Clip offset under cap",min:0,max:.1,step:.001}).on("change",()=>Se.request()),Se.request()}catch(W){console.warn("[cap] failed:",W),vt.slope=`cap failed: ${W}`}})()}.5*Math.sqrt((p.bbox.max[0]-p.bbox.min[0])**2+(p.bbox.max[1]-p.bbox.min[1])**2+(p.bbox.max[2]-p.bbox.min[2])**2);function o(B,W){const Q=di(B,W,i,l,p.surfel_data);Q&&(_.setOrbitPivot(Q),console.log(`[pick] orbit pivot → (${Q[0].toFixed(3)}, ${Q[1].toFixed(3)}, ${Q[2].toFixed(3)})`))}function v(){const B=mo(l,p.surfel_data);if(B!==null&&B>.001){_.setOrbitDepth(B);return}const W=l.rotation,Q=W[2],oe=W[6],ne=W[10],he=(p.centroid[0]-l.position[0])*Q+(p.centroid[1]-l.position[1])*oe+(p.centroid[2]-l.position[2])*ne;he>.001&&_.setOrbitDepth(he)}if(h.length===0){const B=p.bbox.max[0]-p.bbox.min[0],W=p.bbox.max[1]-p.bbox.min[1],Q=p.bbox.max[2]-p.bbox.min[2],ne=.5*Math.sqrt(B*B+W*W+Q*Q)*.5;X.set(A[0]-ne,A[1]-ne,A[2]-ne,l.position);const he=X.create(ne,ne,ne);X.normalize(he,he);const ce=X.create(0,1,0),me=X.create();X.cross(ce,he,me),X.normalize(me,me);const Me=X.create();X.cross(he,me,Me);const Ge=At.create(me[0],Me[0],he[0],me[1],Me[1],he[1],me[2],Me[2],he[2]);yt.fromMat3(Ge,l.rotation),l.update_buffer()}_.setCenter(X.create(p.centroid[0],p.centroid[1],p.centroid[2]));const f=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),b="halloumi.fetch_by_id";let d=null;try{const B=localStorage.getItem(b);(B==="0"||B==="1")&&(d=B==="1")}catch{}const g=K.get("byid"),T={fetchById:g!==null?g==="1":d!==null?d:!f,octBound:K.get("oct")==="1",acc16:K.get("acc16")==="1",staticSortKeys:null},E=K.get("bsp");let $=null;E&&(T.staticSortKeys=new Float32Array(p.num_points),$=Qu(E).then(B=>{if(B.nSurfels!==p.num_points)throw new Error(`BSP has ${B.nSurfels} surfels, scene has ${p.num_points}`);return console.log(`[bsp] loaded ${E}: ${B.nNodes} nodes over ${B.nSurfels} surfels`),B}));let L=new cr(p,a,z,l.uniform_buffer,u,w,T);const j=K.get("surfel_math");I.surfel_math=j==="raysplat"||j==="centred"?j:K.get("raysplat")==="1"?"raysplat":"conic",I.hyp_legacy=K.get("hyp_legacy")==="1",I.mip2d=K.get("mip2d")==="1";{const B=parseFloat(K.get("mip2d_k")??"");Number.isFinite(B)&&B>0&&(I.mip2d_k=B)}Ea(I.mip2d,I.mip2d_k,a,L.render_settings_buffer),os({hypLegacy:I.hyp_legacy,raysplat:I.surfel_math==="raysplat",centred:I.surfel_math==="centred"},a,L.render_settings_buffer),I.legacy_renderer=K.get("legacy")==="1",I.legacy_renderer&&L.setLegacyRenderer(!0),I.two_pass=K.get("twopass")==="1"&&!As;{const B=parseFloat(K.get("opaque_t")??"");Number.isFinite(B)&&(I.opaque_thresh=Math.min(.99,Math.max(.01,B)))}L.setOpaqueThresh(I.opaque_thresh),I.two_pass&&L.setTwoPass(!0);{const B=K.get("overdraw");(B==="shaded"||B==="raster"||B==="1")&&(I.overdraw=B==="raster"?"raster":"shaded");const W=parseInt(K.get("overdraw_max")??"",10);Number.isFinite(W)&&W>0&&(I.overdraw_max=W)}L.setOverdrawMax(I.overdraw_max),I.overdraw!=="off"&&L.setOverdrawMode(I.overdraw==="raster"?2:1),I.fetch_by_id=T.fetchById,console.log(`[render_2dgs] fetch_by_id=${T.fetchById} (source: ${g!==null?"?byid":d!==null?"remembered":`handheld=${f}`})`),G=L,En(i.width,i.height,a,L.render_settings_buffer),I.atlas_enabled=w!==null;{const B=p.surfel_data,W=B.length/8;let Q=0,oe=0,ne=0;for(let ce=0;ce<W;ce++)Q+=B[ce*8],oe+=B[ce*8+1],ne+=B[ce*8+2];const he=W>0?[Q/W,oe/W,ne/W]:[0,0,0];L.setBfcParams(I.bfc_cos,he),os({bfc:I.bfc},a,L.render_settings_buffer),console.log(`[bfc] flag=${I.bfc} cos=${I.bfc_cos} centroid=(${he[0].toFixed(3)}, ${he[1].toFixed(3)}, ${he[2].toFixed(3)})`)}let re=!1;const ie=(()=>{if(w!==null)return`${w.meta.format===2?"BC7":w.meta.format===3?"ASTC 4×4":w.meta.format===7?"BC7 codebook gather (typeD)":`format=${w.meta.format}`} ${w.meta.width}×${w.meta.height}, ${w.meta.n_layers} layers`;const B=a.features.has("texture-compression-bc"),W=a.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(B?["BC7"]:[]).concat(W?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",ie),Pa(p.sh_bias,a,L.render_settings_buffer),ya(I.gaussian_scaling,a,L.render_settings_buffer),I.sh_bias=p.sh_bias;let se=p.num_points.toLocaleString();we.stats=`${se} surfels · -- fps`;const ve=.4,Re=3,Be=.3;let ke=null,$e=0,Ve=0;const rt=mt.create(),ut=At.create();let Ne=h.length>0?0:-1;const it={view:h.length>0?`${Ne+1} / ${h.length}: ${h[Ne].img_name??Ne}`:"— no presets —"},Je=document.createElement("span");function et(B){const W=At.create(B[0],B[1],B[2],B[4],B[5],B[6],B[8],B[9],B[10]);return mt.fromMat(W)}function tt(B,W){ke={fromPos:X.clone(l.position),toPos:X.clone(B.position),fromQuat:mt.normalize(et(l.rotation)),toQuat:mt.normalize(et(B.rotation)),target:B,t:0,duration:Math.max(.01,W)}}const Xe=(B,W=!0)=>{if(h.length===0)return;Ne=(B%h.length+h.length)%h.length;const Q=h[Ne];W?tt(Q,ve):(l.set_preset(Q),_.resetToCamera(),v()),it.view=`${Ne+1} / ${h.length}: ${h[Ne].img_name??Ne}`,Je.textContent=it.view};if(h.length>0){const B=fe.addSeparator(),W=document.createElement("div");W.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const Q=(ne,he,ce)=>{const me=document.createElement("button");return me.className="tp-btnv_b",me.textContent=ne,me.title=he,me.style.cssText="flex:0 0 34px;height:24px;padding:0;",me.addEventListener("click",ce),me};Je.textContent=it.view,Je.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",W.appendChild(Q("◀","previous view (←)",()=>Xe(Ne-1))),W.appendChild(Je),W.appendChild(Q("▶","next view (→)",()=>Xe(Ne+1))),(B.element.parentElement??fe.element.querySelector(".tp-fldv_c")??fe.element).insertBefore(W,B.element),B.dispose()}const pt=h.length>0?ho(h,{tiltDownDeg:15,alignFirst:!0}):null,ht=pt?vd(h,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let nt=0;const at=12;k.value={onAnimateStart:()=>{nt=0},onAnimateStop:()=>{_.resetToCamera(),v()}};const lt=B=>{const W=Math.max(.25,B),Q=Math.max(1,Math.ceil(W*i.clientWidth)),oe=Math.max(1,Math.ceil(W*i.clientHeight));(i.width!==Q||i.height!==oe)&&(i.width=Q,i.height=oe,R())},dt=fe.addInput(I,"render_scale",{label:"Render scale",min:.25,max:pe,step:.25}).on("change",B=>lt(B.value)),Ze=new URLSearchParams(location.search),je={};for(const B of["bc5","p"]){const W=Ze.get(`slope_${B}`),Q=Ze.get(`slope_${B}_4x`);W&&(je[`${B}2`]=W),(Q||W)&&(je[`${B}4`]=Q??W)}const Tt={},vt={slope:""},Rt=(B,W)=>{const Q=`${B}${W>=2.83?4:2}`;if(je[Q]===je[`${B}2`]&&Q!==`${B}2`)return Rt(B,2);const oe=Tt[Q],ne=`${B.toUpperCase()} ${W>=2.83?4:2}x`;return oe&&oe!=="loading"&&oe!=="failed"?oe:(oe===void 0&&je[Q]&&(Tt[Q]="loading",vt.slope=`${ne}: downloading…`,(async()=>{try{const he=await ai(je[Q],(me,Me,Ge,He)=>{vt.slope=`${ne}: ${He==="cache"?"cached ":""}${(me/1048576).toFixed(0)}${Me?` / ${(Me/1048576).toFixed(0)}`:""} MB`}),ce=await mu(a,Nn(he),w?w.meta:null);if(!ce)throw new Error("unsupported on this device or layout mismatch (see console)");Tt[Q]=ce,vt.slope=`${ne}: ready (${ce.mb.toFixed(0)} MB on GPU)`,Se.request()}catch(he){console.warn(`[slope ${ne}]`,he),Tt[Q]="failed",vt.slope=`${ne}: failed — ${he}`}})()),null)};let wt=null;const Pt=parseFloat(Ze.get("rf_thr")??"0.02"),Vt=parseFloat(Ze.get("rf_gain")??"1"),It=Ze.get("spline");let Kt=null;It&&je.bc52&&fetch(It).then(B=>B.json()).then(B=>{Kt={K:B.K,R:B.R,T:B.T,w:Float32Array.from(B.w)},console.log("[spline] kernel",B.K,"T",B.T,B.tag??"")}).catch(B=>console.warn("[spline] kernel load failed",B));const Ut={off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware (green)":"texture"};je.bc52&&(Ut["texture BC5 (finetuned)"]="bc5"),je.p2&&(Ut["texture P (finetuned)"]="p"),je.bc52&&It&&(Ut["texture BC5 + learned spline kernel"]="spline"),Ut["texture re-fetch, top-4 surfels (no training)"]="refetch";const Jt=fe.addInput(I,"upscale",{label:"Upscale",options:Ut}).on("change",()=>{I.upscale==="off"&&(R(),hn()),F.on=I.upscale!=="off",J.refresh()});fe.addInput(I,"rf_edge",{label:"Re-fetch: edges"});const Dt=$a(Ze.get("up")),Qe=Dt!=="off"&&!((Dt==="bc5"||Dt==="p")&&!je[`${Dt}2`])&&!(Dt==="spline"&&!(je.bc52&&It))?Dt:je.bc52?"bc5":"hermite";J.label=Qe==="bc5"||Qe==="p"||Qe==="spline"?"Upscaling (texture-aware 2×)":`Upscaling (${Qe==="hermite"?"Hermite":Qe} 2×)`;const hn=()=>{I.render_scale!==1&&(I.render_scale=1,dt.refresh(),lt(1))};ae=B=>{B?(I.upscale=Qe,I.upscale_factor=2):(I.upscale="off",R()),hn(),Jt.refresh()},(je.bc52||je.p2)&&fe.addMonitor(vt,"slope",{label:"Slope data",interval:300}),fe.addInput(I,"upscale_factor",{label:"Upscale factor (render at 1/f)",min:1.05,max:4,step:.05});const Ft=new cd(p.surfel_data,p.num_points,w?w.meta:null,{tau:I.adapt_tau,pct:parseFloat(Ze.get("adapt_pct")??"0.5"),levels:(Ze.get("adapt_levels")??"1,2,4").split(",").map(Number).filter(B=>B>=1),continuous:!["0","false"].includes(Ze.get("adapt_cont")??""),rateUp:parseFloat(Ze.get("adapt_rate")??"0.03"),rateDown:parseFloat(Ze.get("adapt_rate_down")??"0.1"),minF:parseFloat(Ze.get("adapt_min")??"1.3"),upHold:parseInt(Ze.get("adapt_hold")??"12"),minPx:parseFloat(Ze.get("adapt_px")??"6")});I.upscale_auto&&I.upscale==="off"&&["1","true"].includes(Ze.get("upon")??"")&&(I.upscale=Qe);const en={adapt:Ft.texelMode?"texel mode":"no atlas rects: surfel-width mode"};fe.addInput(I,"upscale_auto",{label:"Adaptive factor"}).on("change",()=>Ft.reset()),fe.addInput(Ft,"continuous",{label:"Adaptive: continuous factor"}).on("change",()=>Ft.reset()),fe.addMonitor(en,"adapt",{label:"Adaptive",interval:250}),fe.addInput(I,"slope_mip",{label:"Slope mip-matched"}).on("change",()=>Ta(I.slope_mip,a,L.render_settings_buffer)),I.slope_mip&&Ta(!0,a,L.render_settings_buffer);const fn=()=>Qc(I.adapt_heat?Ft.tau:0,a,L.render_settings_buffer);fe.addInput(I,"adapt_heat",{label:"Adaptive heatmap (red 1x · yellow 2x · green 4x)"}).on("change",fn),fe.addInput(I,"adapt_tau",{label:"Adaptive bias (texels/px)",min:.25,max:4,step:.05}).on("change",B=>{Ft.tau=B.value,Ft.reset(),fn()}),I.adapt_heat&&fn(),fe.addInput(I,"bfc",{label:I.bfc_cos<1.5?`Backface cull (cos ${I.bfc_cos})`:"Backface cull"}).on("change",()=>{os({bfc:I.bfc},a,L.render_settings_buffer)});const jt={res:""},_n=()=>{const B=i.width*i.height/1e6;jt.res=`${i.width}×${i.height}  (${B.toFixed(2)} MP)
CSS ${i.clientWidth}×${i.clientHeight} · DPR ${pe.toFixed(2)} · native ${Math.round(i.clientWidth*pe)}×${Math.round(i.clientHeight*pe)}`};_n(),q=_n,fe.addMonitor(jt,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),fe.addInput(I,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",B=>ya(B.value,a,L.render_settings_buffer)),fe.addInput(I,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",B=>Pa(B.value,a,L.render_settings_buffer)),fe.addInput(I,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",B=>{L.bgColor=[B.value.r,B.value.g,B.value.b,B.value.a]});const tn=B=>B===null?"":B.meta.format===3||B.meta.format===8||B.meta.format===10?" (ASTC)":" (BC7)";let nn=tn(w);const $t=document.createElement("button");$t.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const qn=()=>{$t.textContent=`Texture${nn}: ${I.atlas_enabled?"ON":"OFF"}`,$t.style.borderColor=I.atlas_enabled?"#f0b060":"#444",$t.style.color=I.atlas_enabled?"#f0b060":"#bbb"},mn=()=>{I.atlas_enabled=!I.atlas_enabled,L.setAtlasEnabled(I.atlas_enabled),be.refresh(),qn()};be.label=`Texture${nn}`,_e=B=>{L.setAtlasEnabled(B),qn(),Se.request()},be.refresh(),$t.title="toggle the baked texture (T)",$t.addEventListener("click",mn),w&&document.body.appendChild($t),qn();const ps=K.get("bundle_b");let hs=()=>{};if({}.VITE_MIP2D_UI==="1"&&(Zr(p)||ps)){const B=document.createElement("button");B.style.cssText=$t.style.cssText.replace("top:8px","top:42px"),B.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let W=null;const Q=()=>{B.textContent=`Mip 2D filter: ${I.mip2d?"ON":"OFF"}`,B.style.borderColor=I.mip2d?"#f0b060":"#444",B.style.color=I.mip2d?"#f0b060":"#bbb";try{const ne=new URL(window.location.href);I.mip2d?ne.searchParams.set("mip2d","1"):ne.searchParams.delete("mip2d"),history.replaceState(history.state,"",ne.toString())}catch{}},oe=()=>{Ea(I.mip2d,I.mip2d_k,a,L.render_settings_buffer),W==null||W.refresh(),Q()};B.addEventListener("click",()=>{I.mip2d=!I.mip2d,oe()}),W=fe.addInput(I,"mip2d",{label:"Mip 2D filter"}).on("change",()=>oe()),document.body.appendChild(B),Q(),hs=()=>{const ne=Zr(p);B.style.display=ne?"":"none",W&&(W.hidden=!ne)},hs(),window.__halloumiMip2D={get on(){return I.mip2d},toggle:()=>B.click()}}let bn=()=>{};if(ps){const B=K.get("label_a")??"A",W=K.get("label_b")??"B",Q={a:{pc:p,atlas:w,renderer:L},b:null};let oe="a",ne=null;const he=document.createElement("button");he.style.cssText=$t.style.cssText.replace("top:8px","top:76px"),he.title=`switch between the two bakes of this scene (B key): ${B} / ${W}`;const ce=(Le="")=>{he.textContent=Le||`Scene: ${oe==="a"?B:W}  ⇄`,he.style.borderColor=oe==="b"?"#60b0f0":"#f0b060",he.style.color=oe==="b"?"#60b0f0":"#f0b060";try{const Ke=new URL(window.location.href);oe==="b"?Ke.searchParams.set("side","b"):Ke.searchParams.delete("side"),history.replaceState(history.state,"",Ke.toString())}catch{}},me=()=>Q.b?Promise.resolve(Q.b):(ne||(ne=yd(ps,a,Le=>{oe==="a"&&ce(Le)}).then(Le=>(Q.b={pc:Le.pc,atlas:Le.atlas,renderer:null},ce(),Q.b))),ne),Me=Le=>{const Ke=Wt.slice(0);Le.renderer=new cr(Le.pc,a,z,l.uniform_buffer,u,Le.atlas,Le===Q.a?T:{...T,staticSortKeys:null}),new Uint8Array(Wt).set(new Uint8Array(Ke))},Ge=Le=>{const Ke=Q[Le];Ke.renderer||Me(Ke);const ft=L,qe=Ke.renderer;qe.bgColor=[...ft.bgColor],qe.setAtlasEnabled(I.atlas_enabled&&Ke.atlas!==null),qe.setLegacyRenderer(I.legacy_renderer),qe.setOpaqueThresh(I.opaque_thresh),qe.setTwoPass(I.two_pass),qe.setOverdrawMax(I.overdraw_max),qe.setOverdrawMode(I.overdraw==="off"?0:I.overdraw==="raster"?2:1),qe.setMsaa(I.msaa),qe.setFetchById(I.fetch_by_id);{const gt=Ke.pc.surfel_data,Fe=gt.length/8;let St=0,Xt=0,Zn=0;for(let Ht=0;Ht<Fe;Ht++)St+=gt[Ht*8],Xt+=gt[Ht*8+1],Zn+=gt[Ht*8+2];qe.setBfcParams(I.bfc_cos,Fe>0?[St/Fe,Xt/Fe,Zn/Fe]:[0,0,0])}Xc(Ke.pc.feature_mode,void 0,void 0,!1),Yc(Ke.pc.K,void 0,void 0,!1),En(i.width,i.height,void 0,void 0,!1),mr(a,qe.render_settings_buffer),L=qe,G=qe,p=Ke.pc,w=Ke.atlas,se=p.num_points.toLocaleString(),oe=Le,hs(),ce(),console.log(`[A/B] active = ${Le} (${Le==="a"?B:W}): ${p.num_points} surfels, feature_mode ${p.feature_mode}, EWA rows ${Zr(p)}`)};bn=()=>{if(oe==="a"){if(Q.b){Ge("b");return}ds(`loading ${W} ...`),me().then(()=>{Ge("b"),Qt()}).catch(Le=>{Qt(),console.error("[A/B] B failed:",Le),ce(`B failed: ${(Le==null?void 0:Le.message)??Le}`)})}else Ge("a")},he.addEventListener("click",()=>bn()),document.body.appendChild(he),ce(),K.get("side")==="b"?bn():f||setTimeout(()=>{me().then(Le=>{Le.renderer||Me(Le)}).catch(Le=>console.warn("[A/B] preload failed:",Le))},1500),window.__halloumiAB={get side(){return oe},toggle:()=>bn(),get bReady(){var Le;return!!((Le=Q.b)!=null&&Le.renderer)}}}if(w&&(C||U))if(C){const B={};B[`A${tn(w)} · bundle`]="A",B[`B${tn(C)} · atlas2`]="B";const W={atlas:"A"};fe.addInput(W,"atlas",{label:"Atlas source",options:B}).on("change",Q=>{const oe=Q.value==="B"?C:w;L.setAtlas(oe),nn=tn(oe),be.label=`Texture${nn}`,qn(),console.log(`[atlas2] now sampling ${Q.value}${nn}`)})}else{const B={note:U};fe.addMonitor(B,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const Ds=w!==null&&(w.meta.probe_mode|0)>0;if(L.hasMips&&Ds)L.setMipMode(I.mips),fe.addInput(I,"mips",{label:"Mips (trilinear)"}).on("change",B=>L.setMipMode(B.value));else if(w!==null&&w.meta.format!==4294967295&&typeof L.setMipMode=="function"){const B=K.get("mipbias"),W=L.hasMips,Q={mode:B==="aniso"||K.get("aniso")==="1"?"aniso":W&&(B==="0"||B==="1"||B==="2")?B:"off"},oe=he=>{he==="off"?L.setMipMode(0):he==="aniso"?L.setMipMode(2):(L.setMipLodBias(Number(he)),L.setMipMode(1)),console.log(`[mips] ${he==="off"?"off (level 0 only)":he==="aniso"?"anisotropic 16x (textureSampleGrad)":`on, bias ${he}`}`)};oe(Q.mode);const ne={"off (level 0)":"off","anisotropic 16x":"aniso"};W&&Object.assign(ne,{"bias 0 (full)":"0","bias 1":"1","bias 2":"2"}),fe.addInput(Q,"mode",{label:W?"Atlas mips":"Atlas filter",options:ne}).on("change",he=>oe(he.value))}const Ot=fe.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});$&&$.then(B=>{const W=L,Q=new Float32Array(B.nSurfels),oe={cpu:"--"};let ne=null;W.preFrame=()=>{L===W&&(I.bsp_order?(ne!==!0&&B.invalidate(),B.computeKeys(l.position)&&(W.writeSortKeys(B.keys),oe.cpu=`${B.lastMs.toFixed(2)} ms / ${B.nNodes} nodes`)):ne!==!1&&W.writeSortKeys(Q),ne=I.bsp_order)},Ot.addInput(I,"bsp_order",{label:"BSP order (vs depth sort)"}),Ot.addMonitor(oe,"cpu",{label:"BSP traversal",interval:500})}).catch(B=>console.error("[bsp] disabled:",B)),Ot.addInput(I,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",B=>os({raysplat:B.value==="raysplat",centred:B.value==="centred"},a,L.render_settings_buffer));const kn=globalThis.__gpuAdapterInfo??{},vr={s:`${kn.vendor??"?"} / ${kn.architecture??"?"}
${kn.device||kn.description||"?"}`};Ot.addMonitor(vr,"s",{label:"GPU",multiline:!0,lineCount:2}),Ot.addInput(I,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",B=>os({hypLegacy:B.value},a,L.render_settings_buffer)),Ot.addInput(I,"two_pass",{label:"Two-pass (layer)"}).on("change",B=>L.setTwoPass(B.value)),Ot.addInput(I,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",B=>L.setOpaqueThresh(B.value)),Ot.addInput(I,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",B=>L.setOverdrawMode(B.value==="shaded"?1:B.value==="raster"?2:0)),Ot.addInput(I,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",B=>L.setOverdrawMax(B.value));const sn={s:"—"};Ot.addMonitor(sn,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(L.overdrawModeValue===0){sn.s="—";return}L.readOverdrawStats().then(B=>{B&&(sn.s=`mean ${B.mean.toFixed(1)} frag/px · ${B.meanCovered.toFixed(1)} on covered
max ${B.max} · covered ${(B.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(B=>console.warn("[overdraw] readback failed:",B))},500),fe.addInput(I,"legacy_renderer",{label:"Legacy renderer"}).on("change",B=>L.setLegacyRenderer(B.value)),fe.addInput(I,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",B=>{L.setFetchById(B.value);try{localStorage.setItem("halloumi.fetch_by_id",B.value?"1":"0")}catch{}}),fe.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>ci("webgl")),I.msaa=K.get("msaa")==="1"&&!As,I.msaa&&L.setMsaa(!0),fe.addInput(I,"msaa",{label:"MSAA 4×"}).on("change",B=>L.setMsaa(B.value));const Wn={aspect:"canvas"},vn=fe.addFolder({title:"📸 Screenshot",expanded:!1});vn.addInput(Wn,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const rn={s:"pick a size to capture"};vn.addMonitor(rn,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const gr=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Tn=null;function wr(B){let W;if(Wn.aspect==="canvas")W=i.width/i.height;else{const[ce,me]=Wn.aspect.split(":").map(Number);W=ce/me}const Q=a.limits.maxTextureDimension2D;let oe,ne;if(B==="canvas"&&Wn.aspect==="canvas")oe=i.width,ne=i.height;else{const ce=B==="canvas"?Math.max(i.width,i.height):B;W>=1?(oe=ce,ne=Math.round(ce/W)):(ne=ce,oe=Math.round(ce*W))}const he=Math.min(1,Q/Math.max(oe,ne));return oe=Math.max(2,Math.round(oe*he)&-2),ne=Math.max(2,Math.round(ne*he)&-2),[oe,ne]}function Ls(B,W){const Q=URL.createObjectURL(B),oe=document.createElement("a");oe.href=Q,oe.download=W,document.body.appendChild(oe),oe.click(),oe.remove(),setTimeout(()=>URL.revokeObjectURL(Q),1e4)}async function Gs(B,W){var ce;const Q=(B.size/1048576).toFixed(1),oe=window;if(typeof oe.showSaveFilePicker=="function")try{const me=await oe.showSaveFilePicker({suggestedName:W,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Me=await me.createWritable();return await Me.write(B),await Me.close(),`saved ${me.name??W} (${Q} MB) where you chose`}catch(me){if((me==null?void 0:me.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const ne=new File([B],W,{type:"image/png"}),he=navigator;if(he.share&&((ce=he.canShare)!=null&&ce.call(he,{files:[ne]})))try{return await he.share({files:[ne],title:W}),`shared ${W} (${Q} MB) via share sheet`}catch(me){if((me==null?void 0:me.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return Ls(B,W),`downloaded ${W} (${Q} MB) to your browser's Downloads folder`}async function zs(B){if(re)return;const[W,Q]=wr(B);rn.s=`rendering ${W}×${Q}…`;const oe=i.width,ne=i.height;l.setRenderSize(W,Q),En(W,Q,a,L.render_settings_buffer);const he=a.createTexture({size:[W,Q,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ce=Math.ceil(W*4/256)*256,me=a.createBuffer({size:ce*Q,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Me=a.createCommandEncoder({label:"screenshot"});L.frame(Me,he.createView(),!1),Me.copyTextureToBuffer({texture:he},{buffer:me,bytesPerRow:ce,rowsPerImage:Q},[W,Q,1]),a.queue.submit([Me.finish()]),l.clearRenderSize(),En(oe,ne,a,L.render_settings_buffer);try{await me.mapAsync(GPUMapMode.READ);const Ge=new Uint8Array(me.getMappedRange()),He=new Uint8ClampedArray(W*Q*4);for(let Fe=0;Fe<Q;Fe++)He.set(Ge.subarray(Fe*ce,Fe*ce+W*4),Fe*W*4);for(let Fe=3;Fe<He.length;Fe+=4)He[Fe]=255;me.unmap();const Le=document.createElement("canvas");Le.width=W,Le.height=Q,Le.getContext("2d").putImageData(new ImageData(He,W,Q),0,0);const Ke=await new Promise((Fe,St)=>Le.toBlob(Xt=>Xt?Fe(Xt):St(new Error("toBlob failed")),"image/png")),ft=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),qe=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),gt=`${ft}_${W}x${Q}_${qe}.png`;Tn={blob:Ke,name:gt},rn.s=await Gs(Ke,gt)}catch(Ge){console.error("[screenshot]",Ge),rn.s=`failed: ${Ge}`}finally{me.destroy(),he.destroy()}}{const B=document.createElement("div");B.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const W=(oe,ne,he)=>{const ce=document.createElement("button");ce.className="tp-btnv_b",ce.textContent=oe,ce.title=ne,ce.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ce.addEventListener("click",he),B.appendChild(ce)};W("Canvas","current canvas size",()=>{zs("canvas")});for(const[oe,ne]of gr)W(oe,`${ne} px long edge`,()=>{zs(ne)});(vn.element.querySelector(".tp-fldv_c")??vn.element).appendChild(B)}vn.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Tn){rn.s="nothing captured yet";return}Ls(Tn.blob,Tn.name),rn.s=`downloaded ${Tn.name} to your browser's Downloads folder`}),fe.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(h.length>0)l.set_preset(h[0]);else{const B=p.bbox.max[0]-p.bbox.min[0],W=p.bbox.max[1]-p.bbox.min[1],Q=p.bbox.max[2]-p.bbox.min[2],ne=.5*Math.sqrt(B*B+W*W+Q*Q)*.5;X.set(A[0]-ne,A[1]-ne,A[2]-ne,l.position);const he=X.create(ne,ne,ne);X.normalize(he,he);const ce=X.create();X.cross(X.create(0,1,0),he,ce),X.normalize(ce,ce);const me=X.create();X.cross(he,ce,me);const Me=At.create(ce[0],me[0],he[0],ce[1],me[1],he[1],ce[2],me[2],he[2]);yt.fromMat3(Me,l.rotation),l.update_buffer()}_.resetToCamera(),v()});const Kn={result:"— click Benchmark —"},fs=fe.addMonitor(Kn,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});fs.hidden=!0;const Is={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Cn(){const W=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const Q of Object.keys(Is))if(W.startsWith(Q))return Q;return null}const Ct=document.createElement("div");Ct.id="bench-overlay",Ct.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ct);function an(B,W,Q){const oe=Math.floor(W/Math.max(1,Q)*100),ne=32,he=Math.floor(W/Math.max(1,Q)*ne),ce="█".repeat(he)+"░".repeat(ne-he);Ct.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${B}</div><div>[${ce}] ${oe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${W} / ${Q} frames · offscreen · pipelined · no vsync</div>`,Ct.style.display="block"}function Bn(){Ct.style.display="none"}async function Fs(B=10,W=200){if(re)return;if(h.length===0){Kn.result="no cameras to benchmark";return}re=!0;const Q=le,oe=I.animate,ne=new Float32Array(l.position),he=new Float32Array(l.rotation);le=!1,I.animate=!1,ye.refresh(),ke=null,_.enabled=!1;const ce=Cn(),me=ce?Is[ce]:null,Me=(me==null?void 0:me.w)??i.width,Ge=(me==null?void 0:me.h)??i.height,He=(me==null?void 0:me.fovY)??l.getFov(),Le=ce?`${ce} · ${Me>=4e3/4+500?"images_4":"images_2"}`:"custom",Ke=i.width,ft=i.height,qe=l.getFov();i.width=Me,i.height=Ge,l.setFov(He),En(Me,Ge,a,L.render_settings_buffer);const gt=a.createTexture({size:[Me,Ge,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Fe=gt.createView(),St=()=>{const Bt=a.createCommandEncoder();L.frame(Bt,Fe,!1),a.queue.submit([Bt.finish()])},Xt=()=>new Promise(Bt=>setTimeout(Bt,0)),Zn=20,Ht=async(Bt,Un)=>{let Qn=0,Zt=0;for(an(Un,0,Bt),await Xt();Zt<Bt;){const Jn=Math.min(Zn,Bt-Zt),Lt=performance.now();for(let vs=0;vs<Jn;vs++)l.set_preset(h[(Zt+vs)%h.length]),St();await a.queue.onSubmittedWorkDone();const qs=performance.now();Qn+=qs-Lt,Zt+=Jn,an(Un,Zt,Bt),await Xt()}return Qn};try{await Ht(B,"Warming up");const Un=await Ht(W,"Benchmarking")/W,Qn=1e3/Un,Zt=p.num_points??p.surfel_data.length/8,Jn=(He*180/Math.PI).toFixed(1),Lt=`${Qn.toFixed(1)} FPS  (${Un.toFixed(2)} ms/frame)
${Me}×${Ge} · fovY ${Jn}° · ${Le}
${Zt.toLocaleString()} surfels · ${B}w+${W}b · pipelined`+(L.hasMips?` · ${L._mipMode?`mips bias ${L.mipLodBias}`:"mips off"}`:"");Kn.result=Lt,fs.hidden=!1,console.log("[bench]",Lt.replace(/\n/g,"  |  "))}catch(Bt){console.error("[bench] failed:",Bt),Kn.result=`bench failed: ${Bt}`,fs.hidden=!1}finally{Bn(),gt.destroy(),i.width=Ke,i.height=ft,l.setFov(qe),En(Ke,ft,a,L.render_settings_buffer),l.position.set(ne),l.rotation.set(he),l.update_buffer(),_.enabled=!Q,le=Q,I.animate=oe,ye.refresh(),re=!1}}fe.addButton({title:"📊 Benchmark"}).on("click",()=>Fs()),io(fe);const jn=Math.PI/2,xt=new Set,xr=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Mn=B=>{const W=B.target;return!!W&&(W.tagName==="INPUT"||W.tagName==="TEXTAREA"||W.isContentEditable)},Os=()=>xt.has("ShiftLeft")||xt.has("ShiftRight");document.addEventListener("keyup",B=>{xt.delete(B.code)}),window.addEventListener("blur",()=>xt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&xt.clear()});const yr=B=>{if(xt.size===0||I.animate)return;const W=Os()?3:1;let Q=0;xt.has("KeyX")&&(Q+=1),xt.has("KeyZ")&&(Q-=1),Q!==0&&(_.addRoll(Q*jn*W*B),ke=null);const oe=l.rotation,ne=[oe[0],oe[4],oe[8]],he=[oe[1],oe[5],oe[9]],ce=[oe[2],oe[6],oe[10]],me=_.center,Ge=(_.sceneRadius??Math.max(.05,X.distance(l.position,me)))*.5*W*B;let He=0,Le=0,Ke=0;if(xt.has("KeyW")&&(Ke+=1),xt.has("KeyS")&&(Ke-=1),xt.has("KeyD")&&(He+=1),xt.has("KeyA")&&(He-=1),xt.has("KeyE")&&(Le+=1),xt.has("KeyQ")&&(Le-=1),!He&&!Le&&!Ke)return;const ft=[0,0,0];for(let qe=0;qe<3;qe++)ft[qe]=(ne[qe]*He+he[qe]*Le+ce[qe]*Ke)*Ge;for(let qe=0;qe<3;qe++)l.position[qe]+=ft[qe],me[qe]+=ft[qe];l.update_buffer(),ke=null};document.addEventListener("keydown",B=>{if(Mn(B))return;const W=B.key,Q=W.toLowerCase();if(B.ctrlKey||B.metaKey||B.altKey){xt.clear();return}if(xr.includes(B.code)&&!(B.shiftKey&&B.code==="KeyD")){xt.add(B.code),B.preventDefault();return}if(Q==="t"){mn();return}if(Q==="b"){bn();return}if(W>="0"&&W<="9"&&h.length>0){const oe=parseInt(W);oe<h.length&&Xe(oe)}else W==="ArrowLeft"||W==="PageUp"?(Xe(Ne-1),B.preventDefault()):W==="ArrowRight"||W==="PageDown"?(Xe(Ne+1),B.preventDefault()):B.shiftKey&&Q==="d"&&L.debugReadSortedIndices(30).catch(oe=>console.error("[DEBUG] readback failed:",oe))});function _s(B,W){const Q=i.getBoundingClientRect();return[(B-Q.left)*l.viewport[0]/Q.width,(W-Q.top)*l.viewport[1]/Q.height]}i.addEventListener("dblclick",B=>{const[W,Q]=_s(B.clientX,B.clientY);o(W,Q)});let Hn=0,Vs=0,An=0;i.addEventListener("pointerdown",B=>{if(B.pointerType!=="touch")return;const W=performance.now(),Q=W-Hn,oe=B.clientX-Vs,ne=B.clientY-An;if(Q>0&&Q<300&&oe*oe+ne*ne<40*40){const[he,ce]=_s(B.clientX,B.clientY);o(he,ce),Hn=0}else Hn=W,Vs=B.clientX,An=B.clientY});function ms(){return y}let bs=performance.now(),Yn=60,$s=Promise.resolve(),Xn=0,Pr=0;const Ns=(B,W)=>{if(!I.clip_on||!(isFinite(De[0])&&isFinite(De[1]))){Sa(null,[0,0,0,0],a,L.render_settings_buffer);return}const Q=De[0]+I.clip_t*(De[1]-De[0]);xe&&(xe.tau=Q,xe.mix=I.cap_mix?1:0,xe.enabled=I.cap_on);const oe=xe&&I.cap_on?Q-(Ae?1:-1)*I.clip_eps:Q,ne=[0,0,0];ne[Ie]=Ae?1:-1;const he=Ae?-oe:oe,ce=l.getViewMatrix(),me=[ce[0]*ne[0]+ce[4]*ne[1]+ce[8]*ne[2],ce[1]*ne[0]+ce[5]*ne[1]+ce[9]*ne[2],ce[2]*ne[0]+ce[6]*ne[1]+ce[10]*ne[2]],Me=he-(me[0]*ce[12]+me[1]*ce[13]+me[2]*ce[14]),Ge=l.focal[0],He=l.focal[1];Sa([me[0],me[1],me[2],Me],[Ge,He,.5*B,.5*W],a,L.render_settings_buffer)};function on(B,W,Q){if(I.upscale!=="off"&&Q>1){const oe=Q;let ne=I.upscale;if(ne==="spline"&&!Kt&&(ne="bc5"),ne==="bc5"||ne==="p"||ne==="spline"){const Ge=Rt(ne==="spline"?"bc5":ne,oe);Ge?Ge!==wt&&(L.setSlopeAtlas(Ge.view,[Ge.scaleU,Ge.offU,Ge.scaleV,Ge.offV]),wt=Ge):ne="hermite"}L.slopeSource=lo[ne]??0;const he=L.resolvesIntoTarget;(!V||V.mode!==ne||V.exact!==he)&&(V==null||V.destroy(),V=new od(a,z,ne,1/oe,he)),V.scale=1/oe,ne==="spline"&&V.setSplineKernel(Kt);const ce=V.lowTarget(i.width,i.height);L.viewport=he?null:[ce.w,ce.h];const me=l.getRenderSize();(!me||me[0]!==ce.w||me[1]!==ce.h||Y[2]!==i.width||Y[3]!==i.height)&&(l.setRenderSize(ce.w,ce.h,i.width,i.height),Y=[ce.w,ce.h,i.width,i.height]),En(ce.w,ce.h,a,L.render_settings_buffer),Ns(ce.w,ce.h),L.slopeTarget=V.slopeTarget;const Me=ne==="refetch"?V.refetchViews:null;L.refetch=Me?{...Me,W:i.width,H:i.height,thr:Pt,gain:Vt,edge:I.rf_edge}:null,L.frame(B,ce.view),L.slopeTarget=null,L.viewport=null,Me&&L.refetchApplied?L.refetchPass(B,W):V.pass(B,W,i.width,i.height),L.refetch=null}else(Y[0]!==0||l.getRenderSize()!==null)&&(l.clearRenderSize(),Y=[0,0,0,0],R()),Ns(i.width,i.height),L.frame(B,W)}window.__halloumiView=(B,W,Q)=>h[B]?(l.set_preset(h[B]),l.setFocalRatio(Q),l.setFov(W),Se.request(),!0):!1,window.__halloumiReadbackPost=async B=>{const W=i.width,Q=i.height,oe=a.createTexture({size:[W,Q],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),ne=Math.ceil(W*4/256)*256,he=a.createBuffer({size:ne*Q,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),ce=a.createCommandEncoder();on(ce,oe.createView(),I.upscale!=="off"?I.upscale_factor:1),ce.copyTextureToBuffer({texture:oe},{buffer:he,bytesPerRow:ne},[W,Q]),a.queue.submit([ce.finish()]),await he.mapAsync(GPUMapMode.READ);const me=new Uint8Array(he.getMappedRange()),Me=new Uint8Array(W*Q*3),Ge=z.startsWith("bgra"),He=Ge?2:0,Le=Ge?0:2;for(let ft=0;ft<Q;ft++){let qe=ft*ne,gt=ft*W*3;for(let Fe=0;Fe<W;Fe++,qe+=4,gt+=3)Me[gt]=me[qe+He],Me[gt+1]=me[qe+1],Me[gt+2]=me[qe+Le]}he.unmap(),he.destroy(),oe.destroy();const Ke=await fetch(B,{method:"POST",body:Me});return{w:W,h:Q,status:Ke.status}},window.__halloumiGpuTime=async(B=100,W="frame",Q=10)=>{if(!a.features.has("timestamp-query"))return null;const oe=i.width,ne=i.height,he=a.createTexture({size:[oe,ne],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),ce=he.createView(),me=I.upscale!=="off"?I.upscale_factor:1,Me=a.createQuerySet({type:"timestamp",count:2*B}),Ge=a.createBuffer({size:16*B,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),He=a.createBuffer({size:16*B,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});if(W==="up"){const Fe=a.createCommandEncoder();on(Fe,ce,me),a.queue.submit([Fe.finish()])}const Le=(V==null?void 0:V.refetchViews)??null,Ke=Fe=>{if(W==="frame"||me<=1){on(Fe,ce,me);return}Le?(L.refetch={...Le,W:oe,H:ne,thr:Pt,gain:Vt,edge:I.rf_edge},L.refetchPass(Fe,ce),L.refetch=null):V.pass(Fe,ce,oe,ne)};for(let Fe=0;Fe<Q;Fe++){const St=a.createCommandEncoder();Ke(St),a.queue.submit([St.finish()]),Fe%50==49&&await a.queue.onSubmittedWorkDone()}await a.queue.onSubmittedWorkDone();for(let Fe=0;Fe<B;Fe++){const St=a.createCommandEncoder();St.beginComputePass({timestampWrites:{querySet:Me,beginningOfPassWriteIndex:2*Fe}}).end(),Ke(St),St.beginComputePass({timestampWrites:{querySet:Me,endOfPassWriteIndex:2*Fe+1}}).end(),a.queue.submit([St.finish()])}const ft=a.createCommandEncoder();ft.resolveQuerySet(Me,0,2*B,Ge,0),ft.copyBufferToBuffer(Ge,0,He,0,16*B),a.queue.submit([ft.finish()]),await He.mapAsync(GPUMapMode.READ);const qe=new BigInt64Array(He.getMappedRange()),gt=[];for(let Fe=0;Fe<B;Fe++)gt.push(Number(qe[2*Fe+1]-qe[2*Fe])/1e6);return He.unmap(),He.destroy(),Ge.destroy(),Me.destroy(),he.destroy(),gt.sort((Fe,St)=>Fe-St),{mean:gt.reduce((Fe,St)=>Fe+St,0)/B,median:gt[B>>1],n:B}},window.__halloumiReadback=async()=>{const B=i.width,W=i.height,Q=a.createTexture({size:[B,W],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),oe=Math.ceil(B*4/256)*256,ne=a.createBuffer({size:oe*W,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),he=a.createCommandEncoder();on(he,Q.createView(),I.upscale!=="off"?I.upscale_factor:1),he.copyTextureToBuffer({texture:Q},{buffer:ne,bytesPerRow:oe},[B,W]),a.queue.submit([he.finish()]),await ne.mapAsync(GPUMapMode.READ);const ce=new Uint8Array(ne.getMappedRange()),me=new Uint8Array(B*W*4),Me=z.startsWith("bgra");for(let He=0;He<W;He++)for(let Le=0;Le<B;Le++){const Ke=He*oe+Le*4,ft=(He*B+Le)*4;me[ft]=ce[Ke+(Me?2:0)],me[ft+1]=ce[Ke+1],me[ft+2]=ce[Ke+(Me?0:2)],me[ft+3]=255}ne.unmap(),ne.destroy(),Q.destroy();let Ge="";for(let He=0;He<me.length;He+=32768)Ge+=String.fromCharCode(...me.subarray(He,He+32768));return{w:B,h:W,b64:btoa(Ge)}},window.__halloumiBenchUp=async(B=300)=>{const W=a.createTexture({size:[i.width,i.height],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),Q=W.createView();let oe=a.createCommandEncoder();on(oe,Q,I.upscale!=="off"?I.upscale_factor:1),a.queue.submit([oe.finish()]),await a.queue.onSubmittedWorkDone();const ne=(V==null?void 0:V.refetchViews)??null,he=()=>{const me=a.createCommandEncoder();ne?(L.refetch={...ne,W:i.width,H:i.height,thr:Pt,gain:Vt,edge:I.rf_edge},L.refetchPass(me,Q),L.refetch=null):V.pass(me,Q,i.width,i.height),a.queue.submit([me.finish()])};for(let me=0;me<20;me++)he();await a.queue.onSubmittedWorkDone();const ce=performance.now();for(let me=0;me<B;me++)he();return await a.queue.onSubmittedWorkDone(),W.destroy(),{ms:(performance.now()-ce)/B,mode:ne?"refetch":String(V==null?void 0:V.mode)}},window.__halloumiBench=async(B=300,W=30)=>{const Q=a.createTexture({size:[i.width,i.height],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),oe=Q.createView(),ne=me=>{for(let Me=0;Me<me;Me++){const Ge=a.createCommandEncoder();on(Ge,oe,I.upscale!=="off"?I.upscale_factor:1),a.queue.submit([Ge.finish()])}};ne(W),await a.queue.onSubmittedWorkDone();const he=performance.now();ne(B),await a.queue.onSubmittedWorkDone();const ce=(performance.now()-he)/B;return Q.destroy(),{ms:ce,fps:1e3/ce,w:i.width,h:i.height}};function Yt(){Rn().catch(B=>{Pr++<5&&console.error("[frame] exception (render loop kept alive):",B),requestAnimationFrame(Yt)})}async function Rn(){var ce,me;const B=performance.now(),W=Math.min((B-bs)/1e3,.1);if(bs=B,W>0){const Me=((ce=L.lastStageBreakdownMs)==null?void 0:ce.total)??0,Ge=Me>.5?1e3/Me:1/W;Se.idleMs(B)<250&&(Yn=Yn*.9+Ge*.1),we.stats=`${se} surfels · ${Se.idleMs(B)>500?"idle":`${Math.round(Yn)} fps`}
${i.width}×${i.height} px`}if(re){requestAnimationFrame(Yt);return}if(ms()&&(ke||le)&&(ke=null,_.resetToCamera(),v(),le&&(le=!1,I.animate=!1,ye.refresh())),le&&I.animateMode==="circle"&&pt){nt+=W/at,nt>=1&&(nt-=1);const Me=fo(pt,nt);l.set_preset(Me),_.update(W);const Ge=a.createCommandEncoder();L.frame(Ge,s.getCurrentTexture().createView()),a.queue.submit([Ge.finish()]),Xn++,Xn===2&&Qt(),requestAnimationFrame(Yt);return}if(ke){ke.t+=W/ke.duration;const Me=Math.min(1,ke.t),Ge=Me*Me*(3-2*Me);X.lerp(ke.fromPos,ke.toPos,Ge,l.position),mt.slerp(ke.fromQuat,ke.toQuat,Ge,rt),At.fromQuat(rt,ut),yt.fromMat3(ut,l.rotation),l.update_buffer(),ke.t>=1&&(l.set_preset(ke.target),ke=null,le?h.length>0&&($e=Be):(_.resetToCamera(),v()))}else if(le&&!ms()){const Me=I.animateMode==="circle"&&ht.length>0,Ge=Me?ht:h;if(Ge.length!==0){if($e-=W,$e<=0){const Le=((Me?Ve:Ne)+1)%Ge.length;Me?Ve=Le:Ne=Le;const Ke=Me?Re/8:Re;tt(Ge[Le],Ke),Me||(it.view=`${Ne+1} / ${h.length}: ${h[Ne].img_name??Ne}`)}}}yr(W),_.update(W),M(),ee();let Q=I.upscale_factor;if(I.upscale!=="off"&&I.upscale_auto){const Me=Ft.choose(l,i.width,i.height);Q=Me.f,en.adapt=`${Me.f===1?"native":`1/${Me.f.toFixed(2)}`} · ${Me.texelMode?"texel/px":"q"} ${Me.q.toFixed(2)} · ${Me.visible} sampled`}I.adapt_heat&&(Q=1);const oe=ke!==null||le||ms()||xt.size>0;if(!Se.needFrame(B,l,i.width,i.height,oe,`${I.upscale}|${I.rf_edge}|${Q}|${I.render_scale}|${I.atlas_enabled}|${((me=l.getRenderSize())==null?void 0:me.join())??""}|${I.clip_on}|${I.clip_t}|${I.cap_on}|${I.cap_mix}|${I.clip_eps}`)){requestAnimationFrame(Yt);return}await $s;const ne=a.createCommandEncoder(),he=s.getCurrentTexture().createView();on(ne,he,Q),a.queue.submit([ne.finish()]),$s=a.queue.onSubmittedWorkDone(),Xn++,Xn===2&&Qt(),requestAnimationFrame(Yt)}requestAnimationFrame(Yt)}}const Sd=i=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
flat in vec4 v_tu_op; flat in vec4 v_tv_sh; flat in vec4 v_tw_ly; flat in vec4 v_col_dc;
flat in vec2 v_ctr; flat in vec4 v_uv; flat in vec2 v_dp;
uniform vec2 u_vp;
uniform sampler2DArray u_atlas;
uniform int u_atlas_on;
uniform vec4 u_tex;          // atlas_scale, atlas_offset, res_bias, uv_extent
uniform vec2 u_dims;         // atlas slice width, layer height
uniform int u_dbg;           // 0 normal; see the debug outputs below
out vec4 o;
void main() {
    const float FILTER_INV_SQUARE = 2.0;
    const float K_BETA_SQ = 9.0;
    vec2 pixf = floor(vec2(gl_FragCoord.x, u_vp.y - gl_FragCoord.y));   // top-left origin
    float u0 = v_tu_op.x, v0 = v_tu_op.y, J00 = v_tu_op.z;
    float J01 = v_tv_sh.x, J10 = v_tv_sh.y, J11 = v_tv_sh.z;
    vec2 d = pixf - v_ctr;
    float denom = 1.0 + v_tw_ly.x * d.x + v_tw_ly.y * d.y;
    if (denom < 0.1) discard;
    float inv_d = 1.0 / denom;
    vec2 s = vec2(u0 + (J00 * d.x + J01 * d.y) * inv_d, v0 + (J10 * d.x + J11 * d.y) * inv_d);
    float rho3d = dot(s, s);
    vec2 d_pix = v_ctr - pixf;
    float rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    float depth = rho3d <= rho2d ? dot(vec3(v_dp, v_col_dc.w), vec3(s, 1.0)) : v_col_dc.w;
    if (depth < 0.2) discard;
    float ab;
${i?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
    float base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
    float sh = v_tv_sh.w;
    if (sh >= 1.99 && sh <= 2.01) ab = base * base;
    else if (sh >= 0.99 && sh <= 1.01) ab = base;
    else if (sh >= 0.49 && sh <= 0.51) ab = sqrt(base);
    else if (sh >= 3.99 && sh <= 4.01) { float b2 = base * base; ab = b2 * b2; }
    else ab = pow(base, sh);`:"    ab = exp(-rho3d * 0.5);"}
    float alp = exp(-rho2d * 0.5);
    float b = min(0.99, v_tu_op.w * max(ab, alp));
    if (b < 1.0 / 255.0) discard;
    vec3 color = v_col_dc.rgb;
    // Skip-texture surfels carry a zero-area rect (uv_scale == 0) whose slice id points one past
    // the last layer: no residual, SV only — the CUDA bake-render semantics. Sampling it instead
    // reads texel (0,0) of whatever layer the index clamps to (a +0.3 brightness bug, found
    // 2026-10-13 via the re-shard A/B).
    if (u_atlas_on != 0 && v_uv.z != 0.0 && v_uv.w != 0.0) {
        vec2 hw = max(abs(v_uv.zw) * u_tex.w - 0.5 / u_dims, vec2(0.0));
        vec2 uv = clamp(v_uv.xy + s * v_uv.zw, v_uv.xy - hw, v_uv.xy + hw);
        vec4 t = textureLod(u_atlas, vec3(uv, v_tw_ly.w), 0.0);
        // debug (u_dbg): 1 = fetched texel rgb only, 2 = sample offset from the tile centre in texels/256 + layer/16
        if (u_dbg == 1) { o = vec4(t.rgb, 1.0); return; }
        if (u_dbg == 2) { o = vec4((uv - v_uv.xy) * u_dims / 256.0 + 0.5, v_tw_ly.w / 16.0, 1.0); return; }
        color = color + t.rgb * u_tex.x + vec3(u_tex.y);
    }
    color = max(vec3(0.0), color + vec3(u_tex.z));
    o = vec4(color, 1.0) * b;
}`;function bo(i){return{bc7:!!i.getExtension("EXT_texture_compression_bptc"),astc:!!i.getExtension("WEBGL_compressed_texture_astc")}}function Ed(i,s){const a=bo(i),u=s.format===2||s.format===7,l=s.format===3||s.format===8;let _=0;u&&a.bc7?_=36492:l&&a.astc&&(_=37808);const y=ae=>(console.warn("[gl]",ae),{tex:null,status:ae,slice_width:s.slice_width,layer_h:s.layer_h,n_slices:0,rects:s.rects_expanded});if(!_)return y(`atlas is ${u?"BC7":l?"ASTC":`format ${s.format}`}; this GPU has bc7=${a.bc7} astc=${a.astc}`);let x=i.getParameter(i.MAX_TEXTURE_SIZE);try{const ae=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);ae>=256&&(x=Math.min(x,ae-ae%4))}catch{}const P=i.getParameter(i.MAX_ARRAY_TEXTURE_LAYERS),{width:M,n_layers:z,n_cols:G,layer_cuts:q,column_cuts:V,atlas_bytes:Y}=s,R=M/4*16,N=s.rects_expanded,Z=N.length/5,O=[];let ee=0,K=0,te=0,le=!1;const ue=Array.from({length:G*z},()=>[]);let de=0,Ee=0;for(let ae=0;ae<Z;ae++){const Pe=N[ae*5+4]|0,Ie=N[ae*5+2],Ae=N[ae*5+3];Pe>=0&&Pe<ue.length&&Ie>0&&(ue[Pe].push(ae),de=Math.max(de,Ie),Ee=Math.max(Ee,Ae))}de=Math.ceil(de/4)*4,Ee=Math.ceil(Ee/4)*4;const Te=(ae,Pe)=>{if(ae<=x)return[0,ae];const Ie=x-Pe;if(Ie<64)throw new Error(`atlas re-shard: tiles up to ${Pe} px do not fit MAX_TEXTURE_SIZE ${x}`);const Ae=Math.ceil(ae/Ie),De=[0];for(let xe=1;xe<Ae;xe++)De.push(Math.round(ae*xe/Ae/4)*4);return De.push(ae),De},Ue=(ae,Pe,Ie,Ae)=>Math.min(ae[Pe+1]-ae[Pe]+Ie,Ae-ae[Pe]);try{for(let ae=0;ae<G;ae++)for(let Pe=0;Pe<z;Pe++){const Ie=V[ae+1]-V[ae],Ae=q[Pe+1]-q[Pe],De=Te(Ie,de),xe=Te(Ae,Ee);(De.length>2||xe.length>2)&&(le=!0);for(let fe=0;fe<De.length-1;fe++)K=Math.max(K,Ue(De,fe,de,Ie));for(let fe=0;fe<xe.length-1;fe++)te=Math.max(te,Ue(xe,fe,Ee,Ae));O.push({c:ae,l:Pe,xcuts:De,ycuts:xe,base:ee}),ee+=(De.length-1)*(xe.length-1)}}catch(ae){return y(String(ae))}if(K=Math.ceil(K/4)*4,te=Math.ceil(te/4)*4,ee>P)return y(`atlas needs ${ee} array layers, GPU allows ${P}`);const Ce=K/4*16,pe=Ce*(te/4);let I;try{I=new Uint8Array(pe*ee)}catch(ae){return y(`atlas staging buffer ${(pe*ee/2**20).toFixed(0)} MB failed: ${ae}`)}let ye=N;le&&(ye=new Float32Array(N));for(const ae of O){const Pe=ae.xcuts.length-1,Ie=ae.ycuts.length-1,Ae=V[ae.c+1]-V[ae.c],De=q[ae.l+1]-q[ae.l];for(let xe=0;xe<Ie;xe++)for(let fe=0;fe<Pe;fe++){const Se=ae.base+xe*Pe+fe,F=V[ae.c]+ae.xcuts[fe],J=Ue(ae.xcuts,fe,de,Ae),k=q[ae.l]+ae.ycuts[xe],c=Ue(ae.ycuts,xe,Ee,De),p=Se*pe,h=F/4,w=J/4;for(let C=0;C<c/4;C++){const U=(k/4+C)*R+h*16;I.set(Y.subarray(U,U+w*16),p+C*Ce)}}if(le)for(const xe of ue[ae.c*z+ae.l]){const fe=N[xe*5],Se=N[xe*5+1];let F=0;for(;F<Pe-1&&fe>=ae.xcuts[F+1];)F++;let J=0;for(;J<Ie-1&&Se>=ae.ycuts[J+1];)J++;ye[xe*5]=fe-ae.xcuts[F],ye[xe*5+1]=Se-ae.ycuts[J],ye[xe*5+4]=ae.base+J*Pe+F}}const we=i.createTexture();i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D_ARRAY,we),i.compressedTexImage3D(i.TEXTURE_2D_ARRAY,0,_,K,te,ee,0,I),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);const _e=i.getError();if(_e!==i.NO_ERROR){i.deleteTexture(we);const ae=_e===i.OUT_OF_MEMORY?"OUT_OF_MEMORY":_e===i.INVALID_VALUE?"INVALID_VALUE":`0x${_e.toString(16)}`;return y(`atlas upload failed: GL ${ae} (${K}x${te}x${ee} ${_===36492?"BC7":"ASTC"}, ${(pe*ee/2**20).toFixed(0)} MB, max tex ${x})`)}const be=`${_===36492?"BC7":"ASTC"} atlas ${K}x${te}x${ee}${le?` (re-sharded for max tex ${x})`:""}`;return{tex:we,status:be,slice_width:K,layer_h:te,n_slices:ee,rects:ye}}const Na=28,Ms=8,kd=i=>`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler2D;
layout(location=0) in uint a_id;          // surfel id, in sorted (back-to-front) order
uniform usampler2D u_surf;                // 2 texels / surfel: (x y z opa|shape) (sx|sy qw|qx qy|qz aux)
uniform sampler2D  u_sv;                  // 2K texels / surfel: K × (site.xyz, log tau), K × (rgb, 0)
uniform sampler2D  u_uv;                  // 2 texels / surfel: (uv_base.xy uv_scale.xy) (layer 0 0 0)
uniform mat3  u_R;                        // world -> camera rotation
uniform vec3  u_t;                        // camera-space translation (-R·eye)
uniform vec3  u_eye;
uniform vec2  u_vp;                       // drawing-buffer size
uniform float u_focal;                    // pixels (= 0.5 H / tan(fovY/2))
uniform float u_zfar;
uniform float u_scaling;                  // gaussian_scaling
uniform float u_sh_bias;
uniform int   u_K;
out vec4 v_tu_op; out vec4 v_tv_sh; out vec4 v_tw_ly; out vec4 v_col_dc;
out vec4 v_ctr_ext; out vec4 v_uv; out vec4 v_dp;

ivec2 tc(int l) { return ivec2(l & ${(1<<i)-1}, l >> ${i}); }
void cull() {
    v_tu_op = vec4(0.0); v_tv_sh = vec4(0.0); v_tw_ly = vec4(0.0); v_col_dc = vec4(0.0);
    v_ctr_ext = vec4(0.0); v_uv = vec4(0.0); v_dp = vec4(0.0);
}
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    int i = int(a_id);
    uvec4 s0 = texelFetch(u_surf, tc(i * 2), 0);
    uvec4 s1 = texelFetch(u_surf, tc(i * 2 + 1), 0);
    vec3 p = uintBitsToFloat(s0.xyz);
    vec2 os = unpackHalf2x16(s0.w);
    float opacity = os.x, shape = os.y;
    vec2 sc = unpackHalf2x16(s1.x) * u_scaling;
    vec2 qa = unpackHalf2x16(s1.y), qb = unpackHalf2x16(s1.z);
    bool textured = ((s1.w >> 16u) & 1u) == 1u;
    if (!(opacity > 1.0 / 255.0) || !textured) { cull(); return; }
    float qn = inversesqrt(max(dot(qa, qa) + dot(qb, qb), 1e-20));
    float w = qa.x * qn, x = qa.y * qn, y = qb.x * qn, z = qb.y * qn;
    // quat_to_rotmat columns 0 / 1 = the surfel's tangent axes, scaled
    vec3 L0 = vec3(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)) * sc.x;
    vec3 L1 = vec3(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)) * sc.y;
    vec3 c = u_R * p + u_t;
    float W = u_vp.x, H = u_vp.y;
    float zn = 0.01, zf = u_zfar, P22 = zf / (zf - zn), P23 = -(zf * zn) / (zf - zn);
    float P00 = 2.0 * u_focal / W, P11 = 2.0 * u_focal / H;
    float cw = c.z, clipZ = P22 * c.z + P23, zndc = clipZ / cw;
    float bnd = 1.2 * cw;
    if (!(zndc > 0.0 && zndc < 1.0) || abs(P00 * c.x) > bnd || abs(P11 * c.y) > bnd) { cull(); return; }
    vec3 l0 = u_R * L0, l1 = u_R * L1;
    float hw = W * 0.5, hwc = (W - 1.0) * 0.5, hh = H * 0.5, hhc = (H - 1.0) * 0.5;
    vec3 Tu = vec3(P00 * l0.x * hw + l0.z * hwc, P00 * l1.x * hw + l1.z * hwc, P00 * c.x * hw + cw * hwc);
    vec3 Tv = vec3(P11 * l0.y * hh + l0.z * hhc, P11 * l1.y * hh + l1.z * hhc, P11 * c.y * hh + cw * hhc);
    vec3 Tw = vec3(l0.z, l1.z, cw);
    // OAC cutoff
    float cutoff;
    if (shape > 1e-6) {
        float inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        cutoff = max(0.5, 3.0 * sqrt(max(0.0, 1.0 - pow(inv, 1.0 / max(shape, 1e-3)))));
    } else {
        cutoff = max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
    }
    float k2 = cutoff * cutoff;
    // SnugBox
    vec3 n0 = cross(Tv, Tw), n1 = cross(Tw, Tu), n2 = cross(Tu, Tv);
    float A = n0.x * n0.x + n0.y * n0.y - k2 * n0.z * n0.z;
    float B = n0.x * n1.x + n0.y * n1.y - k2 * n0.z * n1.z;
    float E = n1.x * n1.x + n1.y * n1.y - k2 * n1.z * n1.z;
    float D = n0.x * n2.x + n0.y * n2.y - k2 * n0.z * n2.z;
    float F = n1.x * n2.x + n1.y * n2.y - k2 * n1.z * n2.z;
    float det = A * E - B * B;
    float ax = 0.0, ay = 0.0, ex = -1.0, ey = -1.0;
    if (det > 0.0 && A > 0.0 && E > 0.0) {
        float qx = (B * F - E * D) / det, qy = (B * D - A * F) / det;
        vec3 cc = qx * n0 + qy * n1 + n2;
        float t = -(cc.x * cc.x + cc.y * cc.y - k2 * cc.z * cc.z);
        if (t > 0.0) { ax = qx; ay = qy; ex = sqrt(t * E / det); ey = sqrt(t * A / det); }
    }
    if (ex < 0.0) {                                   // compute_aabb fallback + garbage guard
        float dd = k2 * Tw.x * Tw.x + k2 * Tw.y * Tw.y - Tw.z * Tw.z;
        if (dd < 0.0) {
            float fx = k2 / dd, fy = k2 / dd, fz = -1.0 / dd;
            float pxx = fx * Tu.x * Tw.x + fy * Tu.y * Tw.y + fz * Tu.z * Tw.z;
            float pyy = fx * Tv.x * Tw.x + fy * Tv.y * Tw.y + fz * Tv.z * Tw.z;
            float h0x = pxx * pxx - (fx * Tu.x * Tu.x + fy * Tu.y * Tu.y + fz * Tu.z * Tu.z);
            float h0y = pyy * pyy - (fx * Tv.x * Tv.x + fy * Tv.y * Tv.y + fz * Tv.z * Tv.z);
            if (h0x >= 0.0 && h0y >= 0.0) {
                ax = pxx; ay = pyy; ex = sqrt(h0x); ey = sqrt(h0y);
                if (max(ex, ey) > 2.0 * max(W, H)) ex = -1.0;
            }
        }
    }
    if (ex < 0.0) { cull(); return; }
    if (max(ex, ey) < 0.25 && opacity < 0.5) { cull(); return; }        // SPR
    // CONIC expansion about the ¼-px quantised centre
    float cxc = floor(ax * 4.0 + 0.5) * 0.25, cyc = floor(ay * 4.0 + 0.5) * 0.25;
    vec3 kk = cxc * Tw - Tu, ll = cyc * Tw - Tv;
    vec3 pc = cross(kk, ll);
    float u0 = 1e10, v0 = 1e10, J00 = 0.0, J01 = 0.0, J10 = 0.0, J11 = 0.0, dwx = 0.0, dwy = 0.0;
    if (abs(pc.z) > 1e-12) {
        u0 = pc.x / pc.z; v0 = pc.y / pc.z;
        float wc = Tw.x * u0 + Tw.y * v0 + Tw.z;
        float detkl = kk.x * ll.y - kk.y * ll.x;
        if (abs(detkl) > 1e-12 && abs(wc) > 1e-8) {
            float scl = wc / detkl;
            J00 = -ll.y * scl; J01 = kk.y * scl; J10 = ll.x * scl; J11 = -kk.x * scl;
            dwx = (Tw.y * Tv.x - Tw.x * Tv.y) / pc.z;
            dwy = (Tu.y * Tw.x - Tu.x * Tw.y) / pc.z;
        } else { u0 = 1e10; v0 = 1e10; }
    }
    // SV colour (preprocess eval_sv): softmax over K sites of -tau·|site - view_dir|
    vec3 vd = normalize(p - u_eye);
    vec3 col = vec3(0.0);
    if (u_K > 0) {
        int base = i * 2 * u_K;
        float lg[${Ms}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${Ms}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${Ms}; k++) {
            if (k >= u_K) break;
            float wk = exp(lg[k] - lmax);
            ws += wk;
            col += wk * texelFetch(u_sv, tc(base + u_K + k), 0).xyz;
        }
        col = max(vec3(0.0), col / max(ws, 1e-20) + vec3(u_sh_bias));
    }
    vec4 uvb = texelFetch(u_uv, tc(i * 2), 0);
    float layer = texelFetch(u_uv, tc(i * 2 + 1), 0).x;
    v_tu_op   = vec4(u0, v0, J00, opacity);
    v_tv_sh   = vec4(J01, J10, J11, shape);
    v_tw_ly   = vec4(dwx, dwy, 0.0, layer);
    v_col_dc  = vec4(col, c.z);
    v_ctr_ext = vec4(cxc, cyc, ex, ey);
    v_uv      = uvb;
    v_dp      = vec4(l0.z, l1.z, 0.0, 0.0);          // depth_u, depth_v = (view · L).z
}`,Td=`#version 300 es
precision highp float;
precision highp int;
layout(location=0) in vec4 a_tu_op;
layout(location=1) in vec4 a_tv_sh;
layout(location=2) in vec4 a_tw_ly;
layout(location=3) in vec4 a_col_dc;
layout(location=4) in vec4 a_ctr_ext;
layout(location=5) in vec4 a_uv;
layout(location=6) in vec4 a_dp;
uniform vec2 u_vp;
flat out vec4 v_tu_op; flat out vec4 v_tv_sh; flat out vec4 v_tw_ly; flat out vec4 v_col_dc;
flat out vec2 v_ctr; flat out vec4 v_uv; flat out vec2 v_dp;
void main() {
    v_tu_op = a_tu_op; v_tv_sh = a_tv_sh; v_tw_ly = a_tw_ly; v_col_dc = a_col_dc;
    v_ctr = a_ctr_ext.xy; v_uv = a_uv; v_dp = a_dp.xy;
    if (a_tu_op.w <= 0.0) { gl_Position = vec4(3.0, 3.0, 0.0, 1.0); return; }   // culled record: clipped away
    const float FILTER_R = 3.0 * 0.7071067811865476;
    int vid = gl_VertexID;
    vec2 ext_pad = a_ctr_ext.zw * 1.001 + vec2(0.25);
    vec2 hlf = max(ext_pad, vec2(FILTER_R));
    float ox = (vid & 1) == 0 ? 1.0 : -1.0;
    float oy = vid < 2 ? 1.0 : -1.0;
    vec2 corner = a_ctr_ext.xy + vec2(ox, oy) * hlf;
    gl_Position = vec4((corner.x * 2.0 - (u_vp.x - 1.0)) / u_vp.x,
                       -((corner.y * 2.0 - (u_vp.y - 1.0)) / u_vp.y), 0.0, 1.0);
}`;class qa{constructor(s,a,u,l={}){S(this,"gl");S(this,"n");S(this,"K");S(this,"twLog2");S(this,"pre");S(this,"draw");S(this,"preU",{});S(this,"drawU",{});S(this,"texSurf");S(this,"texSv");S(this,"texUv");S(this,"idBuf");S(this,"recBuf");S(this,"preVao");S(this,"drawVao");S(this,"tf");S(this,"atlasTex",null);S(this,"atlasStatus","no atlas");S(this,"atlasUpload",null);S(this,"atlasOn",!1);S(this,"sd");S(this,"ok");S(this,"keyF");S(this,"keyU");S(this,"ids");S(this,"ids2");S(this,"keys2");S(this,"hist");S(this,"cnt",new Uint32Array(256));S(this,"bgColor",[0,0,0]);S(this,"scaling",1);S(this,"lastStats",{visible:0,cpuMs:0});S(this,"only",-1);S(this,"dbg",0);if(this.gl=s,a.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(a.K>Ms)throw new Error(`WebGL2 backend supports K <= ${Ms} SV sites (bundle has ${a.K})`);this.n=a.num_points,this.K=a.K,this.sd=a.surfel_data;const _=this.n,y=s.getParameter(s.MAX_TEXTURE_SIZE);this.twLog2=y>=4096?12:11;const x=1<<this.twLog2,P=new Uint32Array(a.surfel_data.buffer,a.surfel_data.byteOffset,_*8);for(let R=0;R<_;R++)if(P[R*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(_);for(let R=0;R<_;R++){const N=Cd(P[R*8+3]);this.ok[R]=N>1/255&&(P[R*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(_),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(_),this.ids2=new Uint32Array(_),this.keys2=new Uint32Array(_),this.hist=new Uint32Array(256*4);const M=R=>Math.max(1,Math.ceil(_*R/x)),z=(R,N,Z,O,ee)=>{const K=s.createTexture();return s.bindTexture(s.TEXTURE_2D,K),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,R,x,M(O),0,N,Z,ee),K};{const R=M(2),N=new Uint32Array(x*R*4);N.set(P),this.texSurf=z(s.RGBA32UI,s.RGBA_INTEGER,s.UNSIGNED_INT,2,N)}{const R=this.K,N=M(2*R),Z=new Float32Array(x*N*4),O=a.sv_params,ee=R*7;for(let K=0;K<_;K++){const te=K*ee,le=K*2*R*4;for(let ue=0;ue<R;ue++){Z[le+ue*4]=O[te+ue*3],Z[le+ue*4+1]=O[te+ue*3+1],Z[le+ue*4+2]=O[te+ue*3+2],Z[le+ue*4+3]=O[te+R*6+ue];const de=le+(R+ue)*4;Z[de]=O[te+R*3+ue*3],Z[de+1]=O[te+R*3+ue*3+1],Z[de+2]=O[te+R*3+ue*3+2]}}this.texSv=z(s.RGBA32F,s.RGBA,s.FLOAT,2*R,Z)}const G=u?Ed(s,u):null;G&&(this.atlasStatus=G.status),this.atlasUpload=G;{const R=M(2),N=new Float32Array(x*R*4);if(u&&G&&G.tex){const Z=G.slice_width,O=G.layer_h,ee=u.uv_extent,K=G.rects;for(let te=0;te<_;te++){if(!this.ok[te])continue;const le=K[te*5],ue=K[te*5+1],de=K[te*5+2],Ee=K[te*5+3],Te=te*8;N[Te]=(le+.5*Math.max(de,1))/Z,N[Te+1]=(ue+.5*Math.max(Ee,1))/O,N[Te+2]=de/(2*ee)/Z,N[Te+3]=Ee/(2*ee)/O,N[Te+4]=K[te*5+4]}}this.texUv=z(s.RGBA32F,s.RGBA,s.FLOAT,2,N)}const q=(R,N)=>{const Z=s.createShader(R);if(s.shaderSource(Z,N),s.compileShader(Z),!s.getShaderParameter(Z,s.COMPILE_STATUS))throw new Error("GLSL: "+s.getShaderInfoLog(Z));return Z},V=R=>{if(s.linkProgram(R),!s.getProgramParameter(R,s.LINK_STATUS))throw new Error("GLSL link: "+s.getProgramInfoLog(R))};this.pre=s.createProgram(),s.attachShader(this.pre,q(s.VERTEX_SHADER,kd(this.twLog2))),s.attachShader(this.pre,q(s.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),s.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],s.INTERLEAVED_ATTRIBS),V(this.pre);for(const R of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[R]=s.getUniformLocation(this.pre,R);const Y=!(u&&u.kernel_type===0)&&a.kernel_type!==0;this.draw=s.createProgram(),s.attachShader(this.draw,q(s.VERTEX_SHADER,Td)),s.attachShader(this.draw,q(s.FRAGMENT_SHADER,Sd(Y))),V(this.draw);for(const R of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[R]=s.getUniformLocation(this.draw,R);try{const R=new URLSearchParams(window.location.search);this.only=parseInt(R.get("only")??"-1",10),this.dbg=parseInt(R.get("dbg")??"0",10)|0}catch{}this.idBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.bufferData(s.ARRAY_BUFFER,_*4,s.DYNAMIC_DRAW),this.recBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf),s.bufferData(s.ARRAY_BUFFER,_*Na*4,s.STREAM_COPY),s.bindBuffer(s.ARRAY_BUFFER,null),this.preVao=s.createVertexArray(),s.bindVertexArray(this.preVao),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.enableVertexAttribArray(0),s.vertexAttribIPointer(0,1,s.UNSIGNED_INT,0,0),s.bindVertexArray(null),this.drawVao=s.createVertexArray(),s.bindVertexArray(this.drawVao),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf);for(let R=0;R<7;R++)s.enableVertexAttribArray(R),s.vertexAttribPointer(R,4,s.FLOAT,!1,Na*4,R*16),s.vertexAttribDivisor(R,1);s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),this.tf=s.createTransformFeedback(),s.useProgram(this.pre),s.uniform1i(this.preU.u_surf,1),s.uniform1i(this.preU.u_sv,2),s.uniform1i(this.preU.u_uv,3),s.uniform1i(this.preU.u_K,this.K),s.uniform1f(this.preU.u_sh_bias,l.shBias??a.sh_bias),s.uniform1f(this.preU.u_scaling,this.scaling),s.useProgram(this.draw),s.uniform1i(this.drawU.u_atlas,0),s.uniform1i(this.drawU.u_atlas_on,0),s.uniform4f(this.drawU.u_tex,0,0,u?u.res_bias:0,u?u.uv_extent:4),u&&G&&G.tex&&(this.atlasTex=G.tex,this.atlasOn=!0,s.uniform1i(this.drawU.u_atlas_on,1),s.uniform4f(this.drawU.u_tex,u.atlas_scale,u.atlas_offset,u.res_bias,u.uv_extent),s.uniform2f(this.drawU.u_dims,G.slice_width,G.layer_h)),s.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(s){this.atlasTex&&(this.atlasOn=s,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,s?1:0))}setGaussianScaling(s){this.scaling=s,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,s)}setShBias(s){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,s)}render(s){const a=this.gl,u=this.n,l=s.rotation,_=s.eye,y=this.sd,x=this.ok,P=s.width,M=s.height,z=performance.now(),G=.5*M/Math.tan(s.fovY*.5),q=-(l[0]*_[0]+l[4]*_[1]+l[8]*_[2]),V=-(l[1]*_[0]+l[5]*_[1]+l[9]*_[2]),Y=-(l[2]*_[0]+l[6]*_[1]+l[10]*_[2]),R=.01,N=s.zfar??100,Z=N/(N-R),O=-(N*R)/(N-R),ee=2*G/P,K=2*G/M,te=l[0],le=l[4],ue=l[8],de=l[1],Ee=l[5],Te=l[9],Ue=l[2],Ce=l[6],pe=l[10],I=this.keyF,ye=this.ids;let we=0;for(let ae=0;ae<u;ae++){if(x[ae]===0||this.only>=0&&ae!==this.only)continue;const Pe=ae*8,Ie=y[Pe],Ae=y[Pe+1],De=y[Pe+2],xe=Ue*Ie+Ce*Ae+pe*De+Y;if(!(xe>0))continue;const fe=Z*xe+O,Se=fe/xe;if(!(Se>0&&Se<1))continue;const F=1.2*xe,J=te*Ie+le*Ae+ue*De+q;if(Math.abs(ee*J)>F)continue;const k=de*Ie+Ee*Ae+Te*De+V;Math.abs(K*k)>F||(I[we]=N-fe,ye[we]=ae,we++)}const _e=this.radixSort(we),be=performance.now()-z;return this.lastStats={visible:we,cpuMs:be},we===0?(a.viewport(0,0,P,M),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),0):(a.bindBuffer(a.ARRAY_BUFFER,this.idBuf),a.bufferSubData(a.ARRAY_BUFFER,0,_e,0,we),a.bindBuffer(a.ARRAY_BUFFER,null),a.useProgram(this.pre),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.texSurf),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,this.texSv),a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,this.texUv),a.uniformMatrix3fv(this.preU.u_R,!1,[te,de,Ue,le,Ee,Ce,ue,Te,pe]),a.uniform3f(this.preU.u_t,q,V,Y),a.uniform3f(this.preU.u_eye,_[0],_[1],_[2]),a.uniform2f(this.preU.u_vp,P,M),a.uniform1f(this.preU.u_focal,G),a.uniform1f(this.preU.u_zfar,N),a.bindVertexArray(this.preVao),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.tf),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),a.enable(a.RASTERIZER_DISCARD),a.beginTransformFeedback(a.POINTS),a.drawArrays(a.POINTS,0,we),a.endTransformFeedback(),a.disable(a.RASTERIZER_DISCARD),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,null),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindVertexArray(null),a.viewport(0,0,P,M),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.disable(a.DEPTH_TEST),a.useProgram(this.draw),a.uniform2f(this.drawU.u_vp,P,M),a.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D_ARRAY,this.atlasTex)),a.bindVertexArray(this.drawVao),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,we),a.bindVertexArray(null),we)}radixSort(s){const a=this.keyU,u=this.hist;u.fill(0);for(let M=0;M<s;M++){const z=a[M];u[z&255]++,u[256+(z>>>8&255)]++,u[512+(z>>>16&255)]++,u[768+(z>>>24)]++}let l=a,_=this.ids,y=this.keys2,x=this.ids2;const P=this.cnt;for(let M=0;M<4;M++){const z=M*8,G=M*256;let q=!1;for(let N=0;N<256;N++)if(u[G+N]===s){q=!0;break}if(q)continue;let V=0;for(let N=0;N<256;N++)P[N]=V,V+=u[G+N];for(let N=0;N<s;N++){const Z=l[N],O=Z>>>z&255,ee=P[O]++;y[ee]=Z,x[ee]=_[N]}const Y=l;l=y,y=Y;const R=_;_=x,x=R}return _}}function Cd(i){const s=i&65535,a=s&32768?-1:1,u=s>>10&31,l=s&1023;return u===0?a*l*5960464477539063e-23:u===31?l?NaN:a*(1/0):a*(1+l/1024)*Math.pow(2,u-15)}const Qr=i=>i.format===2||i.format===7,Jr=i=>i.format===3||i.format===8;async function Wa(i,s,a){const u=new URLSearchParams(window.location.search),l=new ur(i,null),_=new co(l),y=bo(s);bt(`[gl] WebGL2 backend · bc7=${y.bc7} astc=${y.astc} · ${s.getParameter(s.RENDERER)}`);let x=null,P=null,M=[],z=null;const G={animate:u.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},q=new ao.Pane({title:"Config (WebGL2)",expanded:!0}),V={stats:"— loading —"};q.addMonitor(V,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2}),q.addInput(G,"atlas_enabled",{label:"Texture"}).on("change",o=>x==null?void 0:x.setAtlasEnabled(o.value));const Y=q.addFolder({title:"⚙ Advanced options",expanded:!1}),R=new ja;q.on("change",()=>R.request()),window.__halloumiRedraw=()=>R.request(),window.__halloumiGate=R;const N={s:a.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};Y.addMonitor(N,"s",{label:"Renderer"}),Y.addButton({title:"🔁 Switch to WebGPU",disabled:!a.gpuAvailable}).on("click",()=>ci("webgpu"));let O=G.animate;_.enabled=!O,Y.addInput(G,"animate",{label:"Animate"}).on("change",o=>{O=o.value,_.enabled=!O,O||(_.resetToCamera(),be())}),Y.addInput(G,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>le()),Y.addInput(G,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",o=>x==null?void 0:x.setGaussianScaling(o.value)),Y.addInput(G,"bg",{label:"Background",color:{type:"float"}}).on("change",o=>{x&&(x.bgColor=[o.value.r,o.value.g,o.value.b])});const ee={s:"—"};Y.addMonitor(ee,"s",{label:"Atlas"}),Y.addButton({title:"🎯 Reset camera"}).on("click",()=>ae(0,!1)),io(Y);const K=document.createElement("button");K.textContent="Texture: on",Object.assign(K.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(K);const te=()=>{G.atlas_enabled=!G.atlas_enabled,x==null||x.setAtlasEnabled(G.atlas_enabled),K.textContent=`Texture: ${G.atlas_enabled?"on":"off"}`,q.refresh()};K.addEventListener("click",te);const le=()=>{const o=Math.max(.25,G.render_scale),v=Math.max(1,Math.ceil(o*i.clientWidth)),f=Math.max(1,Math.ceil(o*i.clientHeight));(i.width!==v||i.height!==f)&&(i.width=v,i.height=f),l.on_update_canvas()};new ResizeObserver(()=>le()).observe(i),le();const ue=.4,de=3,Ee=.3;let Te=-1,Ue=null,Ce=0;const pe=mt.create(),I=At.create(),ye=o=>mt.fromMat(At.create(o[0],o[1],o[2],o[4],o[5],o[6],o[8],o[9],o[10])),we=(o,v)=>{Ue={fromPos:X.clone(l.position),toPos:X.clone(o.position),fromQuat:mt.normalize(ye(l.rotation)),toQuat:mt.normalize(ye(o.rotation)),target:o,t:0,duration:Math.max(.01,v)}},_e=document.createElement("span"),be=()=>{if(!P)return;const o=mo(l,P.surfel_data);o!==null&&_.setOrbitDepth(o)},ae=(o,v=!0)=>{if(M.length===0)return;Te=(o%M.length+M.length)%M.length;const f=M[Te];v?we(f,ue):(l.set_preset(f),_.resetToCamera(),be()),_e.textContent=`${Te+1} / ${M.length}: ${M[Te].img_name??Te}`};let Pe=null;const Ie=()=>{if(Pe||M.length===0)return;Y.addSeparator(),Pe=document.createElement("div"),Pe.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const o=(v,f)=>{const b=document.createElement("button");return b.className="tp-btnv_b",b.textContent=v,b.style.cssText="flex:0 0 34px;height:24px;padding:0;",b.addEventListener("click",f),b};_e.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Pe.appendChild(o("◀",()=>ae(Te-1))),Pe.appendChild(_e),Pe.appendChild(o("▶",()=>ae(Te+1))),Y.element.appendChild(Pe)};window.addEventListener("keydown",o=>{var v;((v=o.target)==null?void 0:v.tagName)!=="INPUT"&&(o.key==="ArrowLeft"||o.key==="PageUp"?ae(Te-1):o.key==="ArrowRight"||o.key==="PageDown"?ae(Te+1):o.key==="t"||o.key==="T"?te():o.key==="b"||o.key==="B"?J():o.key>="1"&&o.key<="9"&&ae(parseInt(o.key,10)-1))});let Ae=0;const De=(o,v)=>{if(!P)return;const f=i.getBoundingClientRect(),b=di((o-f.left)*i.width/f.width,(v-f.top)*i.height/f.height,i,l,P.surfel_data);b&&_.setOrbitPivot(b)};i.addEventListener("dblclick",o=>De(o.clientX,o.clientY)),i.addEventListener("pointerup",o=>{if(o.pointerType!=="touch")return;const v=performance.now();v-Ae<300&&De(o.clientX,o.clientY),Ae=v});const xe=u.get("bundle")??u.get("model_url");async function fe(o,v){ds(`parsing ${v} ...`);try{const f=new TextDecoder().decode(new Uint8Array(o,0,8));let b=o,d=null,g=null;f===or&&({pcBuffer:b,camerasBuffer:d,atlasBuffer:g}=fi(o)),Mt("parsing surfels ..."),P=await Ua(new File([b],v));let T=null;if(g&&u.get("notex")!=="1"){T=Nn(g);const $=Qr(T)&&y.bc7||Jr(T)&&y.astc;let L=u.get("atlas2");if(!$&&!L&&xe){const j=xe.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);j&&(L=j[2]?`${j[1]}.bitymi${j[3]??""}`:`${j[1]}_astc.bitymi${j[3]??""}`)}if(!$&&L){Mt("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:j}=await us(L,(re,ie)=>Mt(`downloading twin atlas ...
${(re/1048576).toFixed(1)}${ie?` / ${(ie/1048576).toFixed(1)}`:""} MB`));if(j!=null&&j.atlasBuffer){const re=Nn(j.atlasBuffer);(Qr(re)&&y.bc7||Jr(re)&&y.astc)&&(T=re)}}catch(j){console.warn("[gl] atlas2 failed:",j)}}}Mt("building GPU resources ..."),z=T,x=new qa(s,P,T),x.bgColor=[G.bg.r,G.bg.g,G.bg.b],x.setGaussianScaling(G.gaussian_scaling),x.setAtlasEnabled(G.atlas_enabled),ee.s=x.atlasStatus,bt(`[gl] max tex ${s.getParameter(s.MAX_TEXTURE_SIZE)} · layers ${s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS)} · ${x.atlasStatus}`),bt(`[gl] ${P.num_points} surfels · ${x.atlasStatus}`),M=[];const E=u.get("camera_url");if(d){const $=URL.createObjectURL(new Blob([d],{type:"application/json"}));try{M=await li($)}finally{URL.revokeObjectURL($)}}else if(E)try{M=await li(E)}catch($){console.warn("[gl] camera_url failed:",$)}if(_.setBbox(P.bbox.min,P.bbox.max),M.length>0)Ie(),ae(0,!1);else{const $=P.centroid,L=.5*Math.hypot(P.bbox.max[0]-P.bbox.min[0],P.bbox.max[1]-P.bbox.min[1],P.bbox.max[2]-P.bbox.min[2]),j=X.create($[0]-L,$[1]-L,$[2]-L),re=yt.lookAt(j,X.create($[0],$[1],$[2]),X.create(0,1,0));yt.copy(re,l.rotation),l.rotation[12]=0,l.rotation[13]=0,l.rotation[14]=0,X.copy(j,l.position),l.update_buffer(),_.resetToCamera()}}catch(f){throw Qt(),f}}const Se=document.getElementById("load-button");if(Se==null||Se.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept=".ply,.bitymi",o.onchange=async()=>{var f;const v=(f=o.files)==null?void 0:f[0];v&&await fe(await v.arrayBuffer(),v.name)},o.click()}),xe)try{ds("downloading ...");const{bundle:o,rawPly:v}=await us(xe,(f,b,d,g)=>Mt(g==="cache"?`loading cached bundle ...
${(f/2**20).toFixed(1)}${b?` / ${(b/2**20).toFixed(1)}`:""} MB on this device`:`downloading ...
${(f/2**20).toFixed(1)}${b?` / ${(b/2**20).toFixed(1)}`:""} MB · ${(d/2**20).toFixed(1)} MB/s`));o?await F(o.pcBuffer,o.camerasBuffer,o.atlasBuffer,xe.split("/").pop()??"bundle"):v&&await fe(v,xe.split("/").pop()??"scene.ply")}catch(o){Qt(),console.error("[gl] bundle load failed:",o),V.stats=`load failed: ${(o==null?void 0:o.message)??o}`;const v=document.createElement("div");v.textContent=`Could not load this bundle in the WebGL2 renderer: ${(o==null?void 0:o.message)??o}`,Object.assign(v.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(v)}else V.stats="no ?bundle= — use 📂 Load";async function F(o,v,f,b){const d=new TextEncoder().encode(or),g=[o],T=[0];v&&(g.push(v),T.push(2)),f&&(g.push(f),T.push(3));const E=4+g.length*20,$=8+E,L=$+g.reduce((se,ve)=>se+ve.byteLength,0),j=new Uint8Array(L),re=new DataView(j.buffer);j.set(d,0),re.setUint32(8,g.length,!0);let ie=$;g.forEach((se,ve)=>{re.setUint32(12+ve*20,T[ve],!0),re.setBigUint64(16+ve*20,BigInt(ie),!0),re.setBigUint64(24+ve*20,BigInt(se.byteLength),!0),j.set(new Uint8Array(se),ie),ie+=se.byteLength}),await fe(j.buffer,b)}let J=()=>{};const k=u.get("bundle_b");if(k&&x&&P){const o=u.get("label_a")??"A",v=u.get("label_b")??"B",f={a:{pc:P,renderer:x,atlas:z},b:null};let b="a",d=!1,g="";const T=document.createElement("button");Object.assign(T.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const E=(j="")=>{T.textContent=j||`Scene: ${b==="a"?o:v}  ⇄`;try{const re=new URL(window.location.href);b==="b"?re.searchParams.set("side","b"):re.searchParams.delete("side"),history.replaceState(history.state,"",re.toString())}catch{}},$=j=>{const re=document.createElement("div");Object.assign(re.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const ie=document.createElement("div");ie.textContent=j,re.appendChild(ie);const se=document.createElement("div");se.style.marginTop="12px";const ve=(Re,Be)=>{const ke=document.createElement("button");ke.textContent=Re,Object.assign(ke.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),ke.onclick=Be,se.appendChild(ke)};a.gpuAvailable&&ve("Switch to WebGPU",()=>ci("webgpu")),ve("OK",()=>re.remove()),re.appendChild(se),document.body.appendChild(re)},L=j=>{const re=j==="a"?f.a:f.b;x=re.renderer,P=re.pc,z=re.atlas,x.bgColor=[G.bg.r,G.bg.g,G.bg.b],x.setGaussianScaling(G.gaussian_scaling),x.setAtlasEnabled(G.atlas_enabled),ee.s=x.atlasStatus,b=j,E(),console.log(`[gl A/B] active = ${j}: ${P.num_points} surfels`)};J=async()=>{if(!d){if(b==="b"){L("a");return}if(f.b){L("b");return}if(g){$(g);return}d=!0,E(`loading ${v} ...`);try{const{bundle:j}=await us(k,(ve,Re)=>E(`loading ${v} ... ${(ve/1048576).toFixed(0)}${Re?`/${(Re/1048576).toFixed(0)}`:""} MB`));if(!j)throw new Error("bundle_b must be a .bitymi bundle");const re=await Ua(new File([j.pcBuffer],"bundle_b.ply"));let ie=null;if(j.atlasBuffer&&u.get("notex")!=="1"){const ve=Nn(j.atlasBuffer);(Qr(ve)&&y.bc7||Jr(ve)&&y.astc)&&(ie=ve)}let se;try{se=new qa(s,re,ie)}catch(ve){throw g=/tex3d/.test(String(ve==null?void 0:ve.message))?`“${v}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${o}”.`:`“${v}” cannot be shown in the WebGL2 renderer: ${(ve==null?void 0:ve.message)??ve}. Still showing “${o}”.`,new Error(g)}f.b={pc:re,renderer:se,atlas:ie},L("b")}catch(j){console.error("[gl A/B] B failed:",j),g||(g=`Could not load “${v}”: ${(j==null?void 0:j.message)??j}`),E(),$(g)}finally{d=!1}}},T.addEventListener("click",()=>J()),document.body.appendChild(T),E(),u.get("side")==="b"&&J()}let c=performance.now(),p=0,h=0;const w=()=>{var o;return((o=_.isDragging)==null?void 0:o.call(_))??!1};let C=0;function U(){try{A()}catch(o){C++<5&&console.error("[gl frame] exception (render loop kept alive):",o)}requestAnimationFrame(U)}function A(){const o=performance.now(),v=Math.min((o-c)/1e3,.1);if(c=o,x&&P){if(Ue){Ue.t+=v/Ue.duration;const g=Math.min(1,Ue.t),T=g*g*(3-2*g);X.lerp(Ue.fromPos,Ue.toPos,T,l.position),mt.slerp(Ue.fromQuat,Ue.toQuat,T,pe),At.fromQuat(pe,I),yt.fromMat3(I,l.rotation),l.update_buffer(),Ue.t>=1&&(l.set_preset(Ue.target),Ue=null,O?Ce=Ee:(_.resetToCamera(),be()))}else O&&M.length>0&&(Ce-=v,Ce<=0&&(Te=(Te+1)%M.length,we(M[Te],de),_e.textContent=`${Te+1} / ${M.length}: ${M[Te].img_name??Te}`));w()&&Ue&&(Ue=null),_.update(v);const f=performance.now();if(!R.needFrame(f,l,i.width,i.height,Ue!==null||O||w(),`${G.atlas_enabled}`)){R.idleMs(f)>500&&(V.stats=V.stats.replace(/· \d+ fps/,"· idle"));return}const b=x.render({rotation:l.rotation,eye:l.position,fovY:l.getFovY(),width:i.width,height:i.height,zfar:l.zfar}),d=1/Math.max(v,.001);p=p===0?d:p*.9+d*.1,V.stats=`${b.toLocaleString()} / ${P.num_points.toLocaleString()} surfels · ${Math.round(p)} fps
${i.width}×${i.height} px`,h++,h===2&&Qt()}}requestAnimationFrame(U),window.__halloumiGL={stats:V,get renderer(){return x},get cameras(){return M},setPreset:ae,get atlas(){return z},pick(o,v){return P?di(o,v,i,l,P.surfel_data):null},pickIds(o,v){if(!P)return[];const[f,b,d]=dr(o,v,l),g=l.position[0],T=l.position[1],E=l.position[2],$=P.surfel_data,L=new Uint32Array($.buffer,$.byteOffset,$.length),j=ie=>{const se=ie>>10&31,ve=ie&1023,Re=ie&32768?-1:1;return se===0?Re*ve*596e-10:Re*(1+ve/1024)*Math.pow(2,se-15)},re=[];for(let ie=0;ie<P.num_points;ie++){const se=ie*8,ve=$[se],Re=$[se+1],Be=$[se+2],ke=j(L[se+4]&65535),$e=j(L[se+4]>>>16),Ve=j(L[se+5]&65535),rt=j(L[se+5]>>>16),ut=j(L[se+6]&65535),Ne=j(L[se+6]>>>16),it=1/Math.hypot(Ve,rt,ut,Ne),Je=Ve*it,et=rt*it,tt=ut*it,Xe=Ne*it,pt=[1-2*(tt*tt+Xe*Xe),2*(et*tt+Je*Xe),2*(et*Xe-Je*tt)],ht=[2*(et*tt-Je*Xe),1-2*(et*et+Xe*Xe),2*(tt*Xe+Je*et)],nt=[2*(et*Xe+Je*tt),2*(tt*Xe-Je*et),1-2*(et*et+tt*tt)],at=f*nt[0]+b*nt[1]+d*nt[2];if(Math.abs(at)<1e-9)continue;const lt=((ve-g)*nt[0]+(Re-T)*nt[1]+(Be-E)*nt[2])/at;if(lt<=0)continue;const dt=g+lt*f-ve,Ze=T+lt*b-Re,je=E+lt*d-Be,Tt=(dt*pt[0]+Ze*pt[1]+je*pt[2])/ke,vt=(dt*ht[0]+Ze*ht[1]+je*ht[2])/$e,Rt=Tt*Tt+vt*vt,wt=l.rotation,Pt=l.position,Vt=wt[0]*(ve-Pt[0])+wt[4]*(Re-Pt[1])+wt[8]*(Be-Pt[2]),It=wt[1]*(ve-Pt[0])+wt[5]*(Re-Pt[1])+wt[9]*(Be-Pt[2]),Kt=wt[2]*(ve-Pt[0])+wt[6]*(Re-Pt[1])+wt[10]*(Be-Pt[2]),Ut=i.width,Jt=i.height,Dt=.5*Jt/Math.tan(l.getFovY()*.5),Qe=Dt*Vt/Kt+(Ut-1)*.5,hn=Dt*It/Kt+(Jt-1)*.5,Ft=2*((Qe-o)*(Qe-o)+(hn-v)*(hn-v)),en=j(L[se+3]&65535),fn=j(L[se+3]>>>16),jt=Rt>=9?0:Math.pow(Math.max(0,1-Rt/9),fn>1e-6?fn:1),_n=Math.min(.99,en*Math.max(jt,Math.exp(-.5*Ft)));if(_n<1/255)continue;const tn=z?Array.from(z.rects_expanded.subarray(ie*5,ie*5+5)):null,nn=x&&x.atlasUpload?Array.from(x.atlasUpload.rects.subarray(ie*5,ie*5+5)):null;re.push({id:ie,t:+lt.toFixed(3),u:+Tt.toFixed(2),v:+vt.toFixed(2),rho2d:+Ft.toFixed(2),alpha:+_n.toFixed(3),opa:+en.toFixed(2),tex:L[se+7]>>>16&1,rect:tn,remap:nn})}return re.sort((ie,se)=>ie.t-se.t)}}}(function(){let s="dev";for(const u of Array.from(document.querySelectorAll('script[type="module"]'))){const _=u.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(_){s=_[1];break}}const a=document.createElement("div");a.textContent="v "+s,a.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(a.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(a)})();function pr(i){const s=document.createElement("div");Object.assign(s.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const a=document.createElement("div");a.textContent=i,s.appendChild(a);const u=document.createElement("button");u.textContent="Reload",Object.assign(u.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),u.onclick=()=>window.location.reload(),s.appendChild(u),document.body.appendChild(s)}let hr=!1;window.addEventListener("unhandledrejection",i=>{if(hr)return;hr=!0;const s=i.reason;pr(`The viewer failed to load: ${(s==null?void 0:s.message)??s}`)});window.addEventListener("error",i=>{var s;hr||!i.error||(hr=!0,pr(`The viewer hit an error: ${((s=i.error)==null?void 0:s.message)??i.message}`))});try{const i=performance.memory;console.log("[mem]",{deviceMemoryGB:navigator.deviceMemory??"?",hardwareConcurrency:navigator.hardwareConcurrency,jsHeapLimitMB:i?Math.round(i.jsHeapSizeLimit/2**20):"?",dpr:window.devicePixelRatio})}catch{}(async()=>{const i=document.querySelector("#webgpu-canvas");au(i!==null);const{forced:s,stored:a}=gd(),u=s??a??"webgpu";let l=null;if(navigator.gpu!==void 0)try{l=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(P){console.warn("[backend] requestAdapter failed:",P)}if(u==="webgl"||l===null){const P=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!P){pr(l===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${u==="webgl"?s?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),Ba(i),jr(()=>{var M;return(M=P.getExtension("WEBGL_lose_context"))==null?void 0:M.loseContext()}),Wa(i,P,{gpuAvailable:l!==null});return}const _=[];l.features.has("timestamp-query")&&_.push("timestamp-query"),l.features.has("texture-compression-bc")&&_.push("texture-compression-bc"),l.features.has("texture-compression-astc")&&_.push("texture-compression-astc"),console.log("[adapter]",l.info??"(unknown)");try{const P=l.info??{};globalThis.__gpuAdapterInfo={vendor:P.vendor??"?",architecture:P.architecture??"?",device:P.device??"?",description:P.description??"?",features:Array.from(l.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(l.features)),console.log("[adapter] BC7:",l.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",l.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:l.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize,maxTextureDimension2D:l.limits.maxTextureDimension2D});let y;try{y=await l.requestDevice({requiredFeatures:_,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize}})}catch(P){console.warn("[backend] requestDevice failed, falling back to WebGL2:",P);const M=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!M){pr(`WebGPU device creation failed (${P}) and WebGL2 is not available.`);return}Ba(i),jr(()=>{var z;return(z=M.getExtension("WEBGL_lose_context"))==null?void 0:z.loseContext()}),Wa(i,M,{gpuAvailable:!1});return}ru(y),jr(()=>y.destroy());const x=i.getContext("webgpu");Pd(i,x,y,_)})();
