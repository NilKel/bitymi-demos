var Mc=Object.defineProperty;var Rc=(i,s,o)=>s in i?Mc(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o;var P=(i,s,o)=>(Rc(i,typeof s!="symbol"?s+"":s,o),o);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function o(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(c){if(c.ep)return;c.ep=!0;const m=o(c);fetch(c.href,m)}})();function Dc(i,s){return class extends i{constructor(...o){super(...o),s(this)}}}const Uc=Dc(Array,i=>i.fill(0));let Ke=1e-6;function Lc(i){function s(M=0,D=0){const R=new i(2);return M!==void 0&&(R[0]=M,D!==void 0&&(R[1]=D)),R}const o=s;function u(M,D,R){const a=R??new i(2);return a[0]=M,a[1]=D,a}function c(M,D){const R=D??new i(2);return R[0]=Math.ceil(M[0]),R[1]=Math.ceil(M[1]),R}function m(M,D){const R=D??new i(2);return R[0]=Math.floor(M[0]),R[1]=Math.floor(M[1]),R}function y(M,D){const R=D??new i(2);return R[0]=Math.round(M[0]),R[1]=Math.round(M[1]),R}function x(M,D=0,R=1,a){const g=a??new i(2);return g[0]=Math.min(R,Math.max(D,M[0])),g[1]=Math.min(R,Math.max(D,M[1])),g}function S(M,D,R){const a=R??new i(2);return a[0]=M[0]+D[0],a[1]=M[1]+D[1],a}function A(M,D,R,a){const g=a??new i(2);return g[0]=M[0]+D[0]*R,g[1]=M[1]+D[1]*R,g}function z(M,D){const R=M[0],a=M[1],g=D[0],h=D[1],b=Math.sqrt(R*R+a*a),d=Math.sqrt(g*g+h*h),v=b*d,T=v&&Se(M,D)/v;return Math.acos(T)}function G(M,D,R){const a=R??new i(2);return a[0]=M[0]-D[0],a[1]=M[1]-D[1],a}const q=G;function $(M,D){return Math.abs(M[0]-D[0])<Ke&&Math.abs(M[1]-D[1])<Ke}function H(M,D){return M[0]===D[0]&&M[1]===D[1]}function U(M,D,R,a){const g=a??new i(2);return g[0]=M[0]+R*(D[0]-M[0]),g[1]=M[1]+R*(D[1]-M[1]),g}function V(M,D,R,a){const g=a??new i(2);return g[0]=M[0]+R[0]*(D[0]-M[0]),g[1]=M[1]+R[1]*(D[1]-M[1]),g}function Z(M,D,R){const a=R??new i(2);return a[0]=Math.max(M[0],D[0]),a[1]=Math.max(M[1],D[1]),a}function O(M,D,R){const a=R??new i(2);return a[0]=Math.min(M[0],D[0]),a[1]=Math.min(M[1],D[1]),a}function ee(M,D,R){const a=R??new i(2);return a[0]=M[0]*D,a[1]=M[1]*D,a}const F=ee;function te(M,D,R){const a=R??new i(2);return a[0]=M[0]/D,a[1]=M[1]/D,a}function ce(M,D){const R=D??new i(2);return R[0]=1/M[0],R[1]=1/M[1],R}const he=ce;function pe(M,D,R){const a=R??new i(3),g=M[0]*D[1]-M[1]*D[0];return a[0]=0,a[1]=0,a[2]=g,a}function Se(M,D){return M[0]*D[0]+M[1]*D[1]}function Ee(M){const D=M[0],R=M[1];return Math.sqrt(D*D+R*R)}const Re=Ee;function ke(M){const D=M[0],R=M[1];return D*D+R*R}const de=ke;function N(M,D){const R=M[0]-D[0],a=M[1]-D[1];return Math.sqrt(R*R+a*a)}const xe=N;function we(M,D){const R=M[0]-D[0],a=M[1]-D[1];return R*R+a*a}const _e=we;function me(M,D){const R=D??new i(2),a=M[0],g=M[1],h=Math.sqrt(a*a+g*g);return h>1e-5?(R[0]=a/h,R[1]=g/h):(R[0]=0,R[1]=0),R}function ae(M,D){const R=D??new i(2);return R[0]=-M[0],R[1]=-M[1],R}function Pe(M,D){const R=D??new i(2);return R[0]=M[0],R[1]=M[1],R}const Ie=Pe;function Ae(M,D,R){const a=R??new i(2);return a[0]=M[0]*D[0],a[1]=M[1]*D[1],a}const Le=Ae;function oe(M,D,R){const a=R??new i(2);return a[0]=M[0]/D[0],a[1]=M[1]/D[1],a}const Ce=oe;function Be(M=1,D){const R=D??new i(2),a=Math.random()*2*Math.PI;return R[0]=Math.cos(a)*M,R[1]=Math.sin(a)*M,R}function I(M){const D=M??new i(2);return D[0]=0,D[1]=0,D}function Q(M,D,R){const a=R??new i(2),g=M[0],h=M[1];return a[0]=g*D[0]+h*D[4]+D[12],a[1]=g*D[1]+h*D[5]+D[13],a}function C(M,D,R){const a=R??new i(2),g=M[0],h=M[1];return a[0]=D[0]*g+D[4]*h+D[8],a[1]=D[1]*g+D[5]*h+D[9],a}function l(M,D,R,a){const g=a??new i(2),h=M[0]-D[0],b=M[1]-D[1],d=Math.sin(R),v=Math.cos(R);return g[0]=h*v-b*d+D[0],g[1]=h*d+b*v+D[1],g}function f(M,D,R){const a=R??new i(2);return me(M,a),ee(a,D,a)}function p(M,D,R){const a=R??new i(2);return Ee(M)>D?f(M,D,a):Pe(M,a)}function w(M,D,R){const a=R??new i(2);return U(M,D,.5,a)}return{create:s,fromValues:o,set:u,ceil:c,floor:m,round:y,clamp:x,add:S,addScaled:A,angle:z,subtract:G,sub:q,equalsApproximately:$,equals:H,lerp:U,lerpV:V,max:Z,min:O,mulScalar:ee,scale:F,divScalar:te,inverse:ce,invert:he,cross:pe,dot:Se,length:Ee,len:Re,lengthSq:ke,lenSq:de,distance:N,dist:xe,distanceSq:we,distSq:_e,normalize:me,negate:ae,copy:Pe,clone:Ie,multiply:Ae,mul:Le,divide:oe,div:Ce,random:Be,zero:I,transformMat4:Q,transformMat3:C,rotate:l,setLength:f,truncate:p,midpoint:w}}const oa=new Map;function qa(i){let s=oa.get(i);return s||(s=Lc(i),oa.set(i,s)),s}function Gc(i){function s(d,v,T){const E=new i(3);return d!==void 0&&(E[0]=d,v!==void 0&&(E[1]=v,T!==void 0&&(E[2]=T))),E}const o=s;function u(d,v,T,E){const B=E??new i(3);return B[0]=d,B[1]=v,B[2]=T,B}function c(d,v){const T=v??new i(3);return T[0]=Math.ceil(d[0]),T[1]=Math.ceil(d[1]),T[2]=Math.ceil(d[2]),T}function m(d,v){const T=v??new i(3);return T[0]=Math.floor(d[0]),T[1]=Math.floor(d[1]),T[2]=Math.floor(d[2]),T}function y(d,v){const T=v??new i(3);return T[0]=Math.round(d[0]),T[1]=Math.round(d[1]),T[2]=Math.round(d[2]),T}function x(d,v=0,T=1,E){const B=E??new i(3);return B[0]=Math.min(T,Math.max(v,d[0])),B[1]=Math.min(T,Math.max(v,d[1])),B[2]=Math.min(T,Math.max(v,d[2])),B}function S(d,v,T){const E=T??new i(3);return E[0]=d[0]+v[0],E[1]=d[1]+v[1],E[2]=d[2]+v[2],E}function A(d,v,T,E){const B=E??new i(3);return B[0]=d[0]+v[0]*T,B[1]=d[1]+v[1]*T,B[2]=d[2]+v[2]*T,B}function z(d,v){const T=d[0],E=d[1],B=d[2],Y=v[0],W=v[1],re=v[2],ne=Math.sqrt(T*T+E*E+B*B),se=Math.sqrt(Y*Y+W*W+re*re),be=ne*se,Me=be&&Se(d,v)/be;return Math.acos(Me)}function G(d,v,T){const E=T??new i(3);return E[0]=d[0]-v[0],E[1]=d[1]-v[1],E[2]=d[2]-v[2],E}const q=G;function $(d,v){return Math.abs(d[0]-v[0])<Ke&&Math.abs(d[1]-v[1])<Ke&&Math.abs(d[2]-v[2])<Ke}function H(d,v){return d[0]===v[0]&&d[1]===v[1]&&d[2]===v[2]}function U(d,v,T,E){const B=E??new i(3);return B[0]=d[0]+T*(v[0]-d[0]),B[1]=d[1]+T*(v[1]-d[1]),B[2]=d[2]+T*(v[2]-d[2]),B}function V(d,v,T,E){const B=E??new i(3);return B[0]=d[0]+T[0]*(v[0]-d[0]),B[1]=d[1]+T[1]*(v[1]-d[1]),B[2]=d[2]+T[2]*(v[2]-d[2]),B}function Z(d,v,T){const E=T??new i(3);return E[0]=Math.max(d[0],v[0]),E[1]=Math.max(d[1],v[1]),E[2]=Math.max(d[2],v[2]),E}function O(d,v,T){const E=T??new i(3);return E[0]=Math.min(d[0],v[0]),E[1]=Math.min(d[1],v[1]),E[2]=Math.min(d[2],v[2]),E}function ee(d,v,T){const E=T??new i(3);return E[0]=d[0]*v,E[1]=d[1]*v,E[2]=d[2]*v,E}const F=ee;function te(d,v,T){const E=T??new i(3);return E[0]=d[0]/v,E[1]=d[1]/v,E[2]=d[2]/v,E}function ce(d,v){const T=v??new i(3);return T[0]=1/d[0],T[1]=1/d[1],T[2]=1/d[2],T}const he=ce;function pe(d,v,T){const E=T??new i(3),B=d[2]*v[0]-d[0]*v[2],Y=d[0]*v[1]-d[1]*v[0];return E[0]=d[1]*v[2]-d[2]*v[1],E[1]=B,E[2]=Y,E}function Se(d,v){return d[0]*v[0]+d[1]*v[1]+d[2]*v[2]}function Ee(d){const v=d[0],T=d[1],E=d[2];return Math.sqrt(v*v+T*T+E*E)}const Re=Ee;function ke(d){const v=d[0],T=d[1],E=d[2];return v*v+T*T+E*E}const de=ke;function N(d,v){const T=d[0]-v[0],E=d[1]-v[1],B=d[2]-v[2];return Math.sqrt(T*T+E*E+B*B)}const xe=N;function we(d,v){const T=d[0]-v[0],E=d[1]-v[1],B=d[2]-v[2];return T*T+E*E+B*B}const _e=we;function me(d,v){const T=v??new i(3),E=d[0],B=d[1],Y=d[2],W=Math.sqrt(E*E+B*B+Y*Y);return W>1e-5?(T[0]=E/W,T[1]=B/W,T[2]=Y/W):(T[0]=0,T[1]=0,T[2]=0),T}function ae(d,v){const T=v??new i(3);return T[0]=-d[0],T[1]=-d[1],T[2]=-d[2],T}function Pe(d,v){const T=v??new i(3);return T[0]=d[0],T[1]=d[1],T[2]=d[2],T}const Ie=Pe;function Ae(d,v,T){const E=T??new i(3);return E[0]=d[0]*v[0],E[1]=d[1]*v[1],E[2]=d[2]*v[2],E}const Le=Ae;function oe(d,v,T){const E=T??new i(3);return E[0]=d[0]/v[0],E[1]=d[1]/v[1],E[2]=d[2]/v[2],E}const Ce=oe;function Be(d=1,v){const T=v??new i(3),E=Math.random()*2*Math.PI,B=Math.random()*2-1,Y=Math.sqrt(1-B*B)*d;return T[0]=Math.cos(E)*Y,T[1]=Math.sin(E)*Y,T[2]=B*d,T}function I(d){const v=d??new i(3);return v[0]=0,v[1]=0,v[2]=0,v}function Q(d,v,T){const E=T??new i(3),B=d[0],Y=d[1],W=d[2],re=v[3]*B+v[7]*Y+v[11]*W+v[15]||1;return E[0]=(v[0]*B+v[4]*Y+v[8]*W+v[12])/re,E[1]=(v[1]*B+v[5]*Y+v[9]*W+v[13])/re,E[2]=(v[2]*B+v[6]*Y+v[10]*W+v[14])/re,E}function C(d,v,T){const E=T??new i(3),B=d[0],Y=d[1],W=d[2];return E[0]=B*v[0*4+0]+Y*v[1*4+0]+W*v[2*4+0],E[1]=B*v[0*4+1]+Y*v[1*4+1]+W*v[2*4+1],E[2]=B*v[0*4+2]+Y*v[1*4+2]+W*v[2*4+2],E}function l(d,v,T){const E=T??new i(3),B=d[0],Y=d[1],W=d[2];return E[0]=B*v[0]+Y*v[4]+W*v[8],E[1]=B*v[1]+Y*v[5]+W*v[9],E[2]=B*v[2]+Y*v[6]+W*v[10],E}function f(d,v,T){const E=T??new i(3),B=v[0],Y=v[1],W=v[2],re=v[3]*2,ne=d[0],se=d[1],be=d[2],Me=Y*be-W*se,ye=W*ne-B*be,De=B*se-Y*ne;return E[0]=ne+Me*re+(Y*De-W*ye)*2,E[1]=se+ye*re+(W*Me-B*De)*2,E[2]=be+De*re+(B*ye-Y*Me)*2,E}function p(d,v){const T=v??new i(3);return T[0]=d[12],T[1]=d[13],T[2]=d[14],T}function w(d,v,T){const E=T??new i(3),B=v*4;return E[0]=d[B+0],E[1]=d[B+1],E[2]=d[B+2],E}function M(d,v){const T=v??new i(3),E=d[0],B=d[1],Y=d[2],W=d[4],re=d[5],ne=d[6],se=d[8],be=d[9],Me=d[10];return T[0]=Math.sqrt(E*E+B*B+Y*Y),T[1]=Math.sqrt(W*W+re*re+ne*ne),T[2]=Math.sqrt(se*se+be*be+Me*Me),T}function D(d,v,T,E){const B=E??new i(3),Y=[],W=[];return Y[0]=d[0]-v[0],Y[1]=d[1]-v[1],Y[2]=d[2]-v[2],W[0]=Y[0],W[1]=Y[1]*Math.cos(T)-Y[2]*Math.sin(T),W[2]=Y[1]*Math.sin(T)+Y[2]*Math.cos(T),B[0]=W[0]+v[0],B[1]=W[1]+v[1],B[2]=W[2]+v[2],B}function R(d,v,T,E){const B=E??new i(3),Y=[],W=[];return Y[0]=d[0]-v[0],Y[1]=d[1]-v[1],Y[2]=d[2]-v[2],W[0]=Y[2]*Math.sin(T)+Y[0]*Math.cos(T),W[1]=Y[1],W[2]=Y[2]*Math.cos(T)-Y[0]*Math.sin(T),B[0]=W[0]+v[0],B[1]=W[1]+v[1],B[2]=W[2]+v[2],B}function a(d,v,T,E){const B=E??new i(3),Y=[],W=[];return Y[0]=d[0]-v[0],Y[1]=d[1]-v[1],Y[2]=d[2]-v[2],W[0]=Y[0]*Math.cos(T)-Y[1]*Math.sin(T),W[1]=Y[0]*Math.sin(T)+Y[1]*Math.cos(T),W[2]=Y[2],B[0]=W[0]+v[0],B[1]=W[1]+v[1],B[2]=W[2]+v[2],B}function g(d,v,T){const E=T??new i(3);return me(d,E),ee(E,v,E)}function h(d,v,T){const E=T??new i(3);return Ee(d)>v?g(d,v,E):Pe(d,E)}function b(d,v,T){const E=T??new i(3);return U(d,v,.5,E)}return{create:s,fromValues:o,set:u,ceil:c,floor:m,round:y,clamp:x,add:S,addScaled:A,angle:z,subtract:G,sub:q,equalsApproximately:$,equals:H,lerp:U,lerpV:V,max:Z,min:O,mulScalar:ee,scale:F,divScalar:te,inverse:ce,invert:he,cross:pe,dot:Se,length:Ee,len:Re,lengthSq:ke,lenSq:de,distance:N,dist:xe,distanceSq:we,distSq:_e,normalize:me,negate:ae,copy:Pe,clone:Ie,multiply:Ae,mul:Le,divide:oe,div:Ce,random:Be,zero:I,transformMat4:Q,transformMat4Upper3x3:C,transformMat3:l,transformQuat:f,getTranslation:p,getAxis:w,getScaling:M,rotateX:D,rotateY:R,rotateZ:a,setLength:g,truncate:h,midpoint:b}}const la=new Map;function _r(i){let s=la.get(i);return s||(s=Gc(i),la.set(i,s)),s}function zc(i){const s=qa(i),o=_r(i);function u(l,f,p,w,M,D,R,a,g){const h=new i(12);return h[3]=0,h[7]=0,h[11]=0,l!==void 0&&(h[0]=l,f!==void 0&&(h[1]=f,p!==void 0&&(h[2]=p,w!==void 0&&(h[4]=w,M!==void 0&&(h[5]=M,D!==void 0&&(h[6]=D,R!==void 0&&(h[8]=R,a!==void 0&&(h[9]=a,g!==void 0&&(h[10]=g))))))))),h}function c(l,f,p,w,M,D,R,a,g,h){const b=h??new i(12);return b[0]=l,b[1]=f,b[2]=p,b[3]=0,b[4]=w,b[5]=M,b[6]=D,b[7]=0,b[8]=R,b[9]=a,b[10]=g,b[11]=0,b}function m(l,f){const p=f??new i(12);return p[0]=l[0],p[1]=l[1],p[2]=l[2],p[3]=0,p[4]=l[4],p[5]=l[5],p[6]=l[6],p[7]=0,p[8]=l[8],p[9]=l[9],p[10]=l[10],p[11]=0,p}function y(l,f){const p=f??new i(12),w=l[0],M=l[1],D=l[2],R=l[3],a=w+w,g=M+M,h=D+D,b=w*a,d=M*a,v=M*g,T=D*a,E=D*g,B=D*h,Y=R*a,W=R*g,re=R*h;return p[0]=1-v-B,p[1]=d+re,p[2]=T-W,p[3]=0,p[4]=d-re,p[5]=1-b-B,p[6]=E+Y,p[7]=0,p[8]=T+W,p[9]=E-Y,p[10]=1-b-v,p[11]=0,p}function x(l,f){const p=f??new i(12);return p[0]=-l[0],p[1]=-l[1],p[2]=-l[2],p[4]=-l[4],p[5]=-l[5],p[6]=-l[6],p[8]=-l[8],p[9]=-l[9],p[10]=-l[10],p}function S(l,f,p){const w=p??new i(12);return w[0]=l[0]*f,w[1]=l[1]*f,w[2]=l[2]*f,w[4]=l[4]*f,w[5]=l[5]*f,w[6]=l[6]*f,w[8]=l[8]*f,w[9]=l[9]*f,w[10]=l[10]*f,w}const A=S;function z(l,f,p){const w=p??new i(12);return w[0]=l[0]+f[0],w[1]=l[1]+f[1],w[2]=l[2]+f[2],w[4]=l[4]+f[4],w[5]=l[5]+f[5],w[6]=l[6]+f[6],w[8]=l[8]+f[8],w[9]=l[9]+f[9],w[10]=l[10]+f[10],w}function G(l,f){const p=f??new i(12);return p[0]=l[0],p[1]=l[1],p[2]=l[2],p[4]=l[4],p[5]=l[5],p[6]=l[6],p[8]=l[8],p[9]=l[9],p[10]=l[10],p}const q=G;function $(l,f){return Math.abs(l[0]-f[0])<Ke&&Math.abs(l[1]-f[1])<Ke&&Math.abs(l[2]-f[2])<Ke&&Math.abs(l[4]-f[4])<Ke&&Math.abs(l[5]-f[5])<Ke&&Math.abs(l[6]-f[6])<Ke&&Math.abs(l[8]-f[8])<Ke&&Math.abs(l[9]-f[9])<Ke&&Math.abs(l[10]-f[10])<Ke}function H(l,f){return l[0]===f[0]&&l[1]===f[1]&&l[2]===f[2]&&l[4]===f[4]&&l[5]===f[5]&&l[6]===f[6]&&l[8]===f[8]&&l[9]===f[9]&&l[10]===f[10]}function U(l){const f=l??new i(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function V(l,f){const p=f??new i(12);if(p===l){let v;return v=l[1],l[1]=l[4],l[4]=v,v=l[2],l[2]=l[8],l[8]=v,v=l[6],l[6]=l[9],l[9]=v,p}const w=l[0*4+0],M=l[0*4+1],D=l[0*4+2],R=l[1*4+0],a=l[1*4+1],g=l[1*4+2],h=l[2*4+0],b=l[2*4+1],d=l[2*4+2];return p[0]=w,p[1]=R,p[2]=h,p[4]=M,p[5]=a,p[6]=b,p[8]=D,p[9]=g,p[10]=d,p}function Z(l,f){const p=f??new i(12),w=l[0*4+0],M=l[0*4+1],D=l[0*4+2],R=l[1*4+0],a=l[1*4+1],g=l[1*4+2],h=l[2*4+0],b=l[2*4+1],d=l[2*4+2],v=d*a-g*b,T=-d*R+g*h,E=b*R-a*h,B=1/(w*v+M*T+D*E);return p[0]=v*B,p[1]=(-d*M+D*b)*B,p[2]=(g*M-D*a)*B,p[4]=T*B,p[5]=(d*w-D*h)*B,p[6]=(-g*w+D*R)*B,p[8]=E*B,p[9]=(-b*w+M*h)*B,p[10]=(a*w-M*R)*B,p}function O(l){const f=l[0],p=l[0*4+1],w=l[0*4+2],M=l[1*4+0],D=l[1*4+1],R=l[1*4+2],a=l[2*4+0],g=l[2*4+1],h=l[2*4+2];return f*(D*h-g*R)-M*(p*h-g*w)+a*(p*R-D*w)}const ee=Z;function F(l,f,p){const w=p??new i(12),M=l[0],D=l[1],R=l[2],a=l[4+0],g=l[4+1],h=l[4+2],b=l[8+0],d=l[8+1],v=l[8+2],T=f[0],E=f[1],B=f[2],Y=f[4+0],W=f[4+1],re=f[4+2],ne=f[8+0],se=f[8+1],be=f[8+2];return w[0]=M*T+a*E+b*B,w[1]=D*T+g*E+d*B,w[2]=R*T+h*E+v*B,w[4]=M*Y+a*W+b*re,w[5]=D*Y+g*W+d*re,w[6]=R*Y+h*W+v*re,w[8]=M*ne+a*se+b*be,w[9]=D*ne+g*se+d*be,w[10]=R*ne+h*se+v*be,w}const te=F;function ce(l,f,p){const w=p??U();return l!==w&&(w[0]=l[0],w[1]=l[1],w[2]=l[2],w[4]=l[4],w[5]=l[5],w[6]=l[6]),w[8]=f[0],w[9]=f[1],w[10]=1,w}function he(l,f){const p=f??s.create();return p[0]=l[8],p[1]=l[9],p}function pe(l,f,p){const w=p??s.create(),M=f*4;return w[0]=l[M+0],w[1]=l[M+1],w}function Se(l,f,p,w){const M=w===l?l:G(l,w),D=p*4;return M[D+0]=f[0],M[D+1]=f[1],M}function Ee(l,f){const p=f??s.create(),w=l[0],M=l[1],D=l[4],R=l[5];return p[0]=Math.sqrt(w*w+M*M),p[1]=Math.sqrt(D*D+R*R),p}function Re(l,f){const p=f??o.create(),w=l[0],M=l[1],D=l[2],R=l[4],a=l[5],g=l[6],h=l[8],b=l[9],d=l[10];return p[0]=Math.sqrt(w*w+M*M+D*D),p[1]=Math.sqrt(R*R+a*a+g*g),p[2]=Math.sqrt(h*h+b*b+d*d),p}function ke(l,f){const p=f??new i(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=l[0],p[9]=l[1],p[10]=1,p}function de(l,f,p){const w=p??new i(12),M=f[0],D=f[1],R=l[0],a=l[1],g=l[2],h=l[1*4+0],b=l[1*4+1],d=l[1*4+2],v=l[2*4+0],T=l[2*4+1],E=l[2*4+2];return l!==w&&(w[0]=R,w[1]=a,w[2]=g,w[4]=h,w[5]=b,w[6]=d),w[8]=R*M+h*D+v,w[9]=a*M+b*D+T,w[10]=g*M+d*D+E,w}function N(l,f){const p=f??new i(12),w=Math.cos(l),M=Math.sin(l);return p[0]=w,p[1]=M,p[2]=0,p[4]=-M,p[5]=w,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function xe(l,f,p){const w=p??new i(12),M=l[0*4+0],D=l[0*4+1],R=l[0*4+2],a=l[1*4+0],g=l[1*4+1],h=l[1*4+2],b=Math.cos(f),d=Math.sin(f);return w[0]=b*M+d*a,w[1]=b*D+d*g,w[2]=b*R+d*h,w[4]=b*a-d*M,w[5]=b*g-d*D,w[6]=b*h-d*R,l!==w&&(w[8]=l[8],w[9]=l[9],w[10]=l[10]),w}function we(l,f){const p=f??new i(12),w=Math.cos(l),M=Math.sin(l);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=w,p[6]=M,p[8]=0,p[9]=-M,p[10]=w,p}function _e(l,f,p){const w=p??new i(12),M=l[4],D=l[5],R=l[6],a=l[8],g=l[9],h=l[10],b=Math.cos(f),d=Math.sin(f);return w[4]=b*M+d*a,w[5]=b*D+d*g,w[6]=b*R+d*h,w[8]=b*a-d*M,w[9]=b*g-d*D,w[10]=b*h-d*R,l!==w&&(w[0]=l[0],w[1]=l[1],w[2]=l[2]),w}function me(l,f){const p=f??new i(12),w=Math.cos(l),M=Math.sin(l);return p[0]=w,p[1]=0,p[2]=-M,p[4]=0,p[5]=1,p[6]=0,p[8]=M,p[9]=0,p[10]=w,p}function ae(l,f,p){const w=p??new i(12),M=l[0*4+0],D=l[0*4+1],R=l[0*4+2],a=l[2*4+0],g=l[2*4+1],h=l[2*4+2],b=Math.cos(f),d=Math.sin(f);return w[0]=b*M-d*a,w[1]=b*D-d*g,w[2]=b*R-d*h,w[8]=b*a+d*M,w[9]=b*g+d*D,w[10]=b*h+d*R,l!==w&&(w[4]=l[4],w[5]=l[5],w[6]=l[6]),w}const Pe=N,Ie=xe;function Ae(l,f){const p=f??new i(12);return p[0]=l[0],p[1]=0,p[2]=0,p[4]=0,p[5]=l[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Le(l,f,p){const w=p??new i(12),M=f[0],D=f[1];return w[0]=M*l[0*4+0],w[1]=M*l[0*4+1],w[2]=M*l[0*4+2],w[4]=D*l[1*4+0],w[5]=D*l[1*4+1],w[6]=D*l[1*4+2],l!==w&&(w[8]=l[8],w[9]=l[9],w[10]=l[10]),w}function oe(l,f){const p=f??new i(12);return p[0]=l[0],p[1]=0,p[2]=0,p[4]=0,p[5]=l[1],p[6]=0,p[8]=0,p[9]=0,p[10]=l[2],p}function Ce(l,f,p){const w=p??new i(12),M=f[0],D=f[1],R=f[2];return w[0]=M*l[0*4+0],w[1]=M*l[0*4+1],w[2]=M*l[0*4+2],w[4]=D*l[1*4+0],w[5]=D*l[1*4+1],w[6]=D*l[1*4+2],w[8]=R*l[2*4+0],w[9]=R*l[2*4+1],w[10]=R*l[2*4+2],w}function Be(l,f){const p=f??new i(12);return p[0]=l,p[1]=0,p[2]=0,p[4]=0,p[5]=l,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function I(l,f,p){const w=p??new i(12);return w[0]=f*l[0*4+0],w[1]=f*l[0*4+1],w[2]=f*l[0*4+2],w[4]=f*l[1*4+0],w[5]=f*l[1*4+1],w[6]=f*l[1*4+2],l!==w&&(w[8]=l[8],w[9]=l[9],w[10]=l[10]),w}function Q(l,f){const p=f??new i(12);return p[0]=l,p[1]=0,p[2]=0,p[4]=0,p[5]=l,p[6]=0,p[8]=0,p[9]=0,p[10]=l,p}function C(l,f,p){const w=p??new i(12);return w[0]=f*l[0*4+0],w[1]=f*l[0*4+1],w[2]=f*l[0*4+2],w[4]=f*l[1*4+0],w[5]=f*l[1*4+1],w[6]=f*l[1*4+2],w[8]=f*l[2*4+0],w[9]=f*l[2*4+1],w[10]=f*l[2*4+2],w}return{add:z,clone:q,copy:G,create:u,determinant:O,equals:H,equalsApproximately:$,fromMat4:m,fromQuat:y,get3DScaling:Re,getAxis:pe,getScaling:Ee,getTranslation:he,identity:U,inverse:Z,invert:ee,mul:te,mulScalar:A,multiply:F,multiplyScalar:S,negate:x,rotate:xe,rotateX:_e,rotateY:ae,rotateZ:Ie,rotation:N,rotationX:we,rotationY:me,rotationZ:Pe,scale:Le,scale3D:Ce,scaling:Ae,scaling3D:oe,set:c,setAxis:Se,setTranslation:ce,translate:de,translation:ke,transpose:V,uniformScale:I,uniformScale3D:C,uniformScaling:Be,uniformScaling3D:Q}}const ca=new Map;function Ic(i){let s=ca.get(i);return s||(s=zc(i),ca.set(i,s)),s}function Fc(i){const s=_r(i);function o(a,g,h,b,d,v,T,E,B,Y,W,re,ne,se,be,Me){const ye=new i(16);return a!==void 0&&(ye[0]=a,g!==void 0&&(ye[1]=g,h!==void 0&&(ye[2]=h,b!==void 0&&(ye[3]=b,d!==void 0&&(ye[4]=d,v!==void 0&&(ye[5]=v,T!==void 0&&(ye[6]=T,E!==void 0&&(ye[7]=E,B!==void 0&&(ye[8]=B,Y!==void 0&&(ye[9]=Y,W!==void 0&&(ye[10]=W,re!==void 0&&(ye[11]=re,ne!==void 0&&(ye[12]=ne,se!==void 0&&(ye[13]=se,be!==void 0&&(ye[14]=be,Me!==void 0&&(ye[15]=Me)))))))))))))))),ye}function u(a,g,h,b,d,v,T,E,B,Y,W,re,ne,se,be,Me,ye){const De=ye??new i(16);return De[0]=a,De[1]=g,De[2]=h,De[3]=b,De[4]=d,De[5]=v,De[6]=T,De[7]=E,De[8]=B,De[9]=Y,De[10]=W,De[11]=re,De[12]=ne,De[13]=se,De[14]=be,De[15]=Me,De}function c(a,g){const h=g??new i(16);return h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=0,h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=0,h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function m(a,g){const h=g??new i(16),b=a[0],d=a[1],v=a[2],T=a[3],E=b+b,B=d+d,Y=v+v,W=b*E,re=d*E,ne=d*B,se=v*E,be=v*B,Me=v*Y,ye=T*E,De=T*B,$e=T*Y;return h[0]=1-ne-Me,h[1]=re+$e,h[2]=se-De,h[3]=0,h[4]=re-$e,h[5]=1-W-Me,h[6]=be+ye,h[7]=0,h[8]=se+De,h[9]=be-ye,h[10]=1-W-ne,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function y(a,g){const h=g??new i(16);return h[0]=-a[0],h[1]=-a[1],h[2]=-a[2],h[3]=-a[3],h[4]=-a[4],h[5]=-a[5],h[6]=-a[6],h[7]=-a[7],h[8]=-a[8],h[9]=-a[9],h[10]=-a[10],h[11]=-a[11],h[12]=-a[12],h[13]=-a[13],h[14]=-a[14],h[15]=-a[15],h}function x(a,g,h){const b=h??new i(16);return b[0]=a[0]+g[0],b[1]=a[1]+g[1],b[2]=a[2]+g[2],b[3]=a[3]+g[3],b[4]=a[4]+g[4],b[5]=a[5]+g[5],b[6]=a[6]+g[6],b[7]=a[7]+g[7],b[8]=a[8]+g[8],b[9]=a[9]+g[9],b[10]=a[10]+g[10],b[11]=a[11]+g[11],b[12]=a[12]+g[12],b[13]=a[13]+g[13],b[14]=a[14]+g[14],b[15]=a[15]+g[15],b}function S(a,g,h){const b=h??new i(16);return b[0]=a[0]*g,b[1]=a[1]*g,b[2]=a[2]*g,b[3]=a[3]*g,b[4]=a[4]*g,b[5]=a[5]*g,b[6]=a[6]*g,b[7]=a[7]*g,b[8]=a[8]*g,b[9]=a[9]*g,b[10]=a[10]*g,b[11]=a[11]*g,b[12]=a[12]*g,b[13]=a[13]*g,b[14]=a[14]*g,b[15]=a[15]*g,b}const A=S;function z(a,g){const h=g??new i(16);return h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15],h}const G=z;function q(a,g){return Math.abs(a[0]-g[0])<Ke&&Math.abs(a[1]-g[1])<Ke&&Math.abs(a[2]-g[2])<Ke&&Math.abs(a[3]-g[3])<Ke&&Math.abs(a[4]-g[4])<Ke&&Math.abs(a[5]-g[5])<Ke&&Math.abs(a[6]-g[6])<Ke&&Math.abs(a[7]-g[7])<Ke&&Math.abs(a[8]-g[8])<Ke&&Math.abs(a[9]-g[9])<Ke&&Math.abs(a[10]-g[10])<Ke&&Math.abs(a[11]-g[11])<Ke&&Math.abs(a[12]-g[12])<Ke&&Math.abs(a[13]-g[13])<Ke&&Math.abs(a[14]-g[14])<Ke&&Math.abs(a[15]-g[15])<Ke}function $(a,g){return a[0]===g[0]&&a[1]===g[1]&&a[2]===g[2]&&a[3]===g[3]&&a[4]===g[4]&&a[5]===g[5]&&a[6]===g[6]&&a[7]===g[7]&&a[8]===g[8]&&a[9]===g[9]&&a[10]===g[10]&&a[11]===g[11]&&a[12]===g[12]&&a[13]===g[13]&&a[14]===g[14]&&a[15]===g[15]}function H(a){const g=a??new i(16);return g[0]=1,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,g}function U(a,g){const h=g??new i(16);if(h===a){let Ve;return Ve=a[1],a[1]=a[4],a[4]=Ve,Ve=a[2],a[2]=a[8],a[8]=Ve,Ve=a[3],a[3]=a[12],a[12]=Ve,Ve=a[6],a[6]=a[9],a[9]=Ve,Ve=a[7],a[7]=a[13],a[13]=Ve,Ve=a[11],a[11]=a[14],a[14]=Ve,h}const b=a[0*4+0],d=a[0*4+1],v=a[0*4+2],T=a[0*4+3],E=a[1*4+0],B=a[1*4+1],Y=a[1*4+2],W=a[1*4+3],re=a[2*4+0],ne=a[2*4+1],se=a[2*4+2],be=a[2*4+3],Me=a[3*4+0],ye=a[3*4+1],De=a[3*4+2],$e=a[3*4+3];return h[0]=b,h[1]=E,h[2]=re,h[3]=Me,h[4]=d,h[5]=B,h[6]=ne,h[7]=ye,h[8]=v,h[9]=Y,h[10]=se,h[11]=De,h[12]=T,h[13]=W,h[14]=be,h[15]=$e,h}function V(a,g){const h=g??new i(16),b=a[0*4+0],d=a[0*4+1],v=a[0*4+2],T=a[0*4+3],E=a[1*4+0],B=a[1*4+1],Y=a[1*4+2],W=a[1*4+3],re=a[2*4+0],ne=a[2*4+1],se=a[2*4+2],be=a[2*4+3],Me=a[3*4+0],ye=a[3*4+1],De=a[3*4+2],$e=a[3*4+3],Ve=se*$e,nt=De*be,Ne=Y*$e,it=De*W,st=Y*be,at=se*W,Je=v*$e,Xe=De*T,Qe=v*be,ft=se*T,ot=v*W,lt=Y*T,et=re*ye,dt=Me*ne,qe=E*ye,Ze=Me*B,pt=E*ne,Et=re*B,Tt=b*ye,Rt=Me*d,vt=b*ne,yt=re*d,zt=b*B,Vt=E*d,It=Ve*B+it*ne+st*ye-(nt*B+Ne*ne+at*ye),Yt=nt*d+Je*ne+ft*ye-(Ve*d+Xe*ne+Qe*ye),Dt=Ne*d+Xe*B+ot*ye-(it*d+Je*B+lt*ye),Bt=at*d+Qe*B+lt*ne-(st*d+ft*B+ot*ne),ct=1/(b*It+E*Yt+re*Dt+Me*Bt);return h[0]=ct*It,h[1]=ct*Yt,h[2]=ct*Dt,h[3]=ct*Bt,h[4]=ct*(nt*E+Ne*re+at*Me-(Ve*E+it*re+st*Me)),h[5]=ct*(Ve*b+Xe*re+Qe*Me-(nt*b+Je*re+ft*Me)),h[6]=ct*(it*b+Je*E+lt*Me-(Ne*b+Xe*E+ot*Me)),h[7]=ct*(st*b+ft*E+ot*re-(at*b+Qe*E+lt*re)),h[8]=ct*(et*W+Ze*be+pt*$e-(dt*W+qe*be+Et*$e)),h[9]=ct*(dt*T+Tt*be+yt*$e-(et*T+Rt*be+vt*$e)),h[10]=ct*(qe*T+Rt*W+zt*$e-(Ze*T+Tt*W+Vt*$e)),h[11]=ct*(Et*T+vt*W+Vt*be-(pt*T+yt*W+zt*be)),h[12]=ct*(qe*se+Et*De+dt*Y-(pt*De+et*Y+Ze*se)),h[13]=ct*(vt*De+et*v+Rt*se-(Tt*se+yt*De+dt*v)),h[14]=ct*(Tt*Y+Vt*De+Ze*v-(zt*De+qe*v+Rt*Y)),h[15]=ct*(zt*se+pt*v+yt*Y-(vt*Y+Vt*se+Et*v)),h}function Z(a){const g=a[0],h=a[0*4+1],b=a[0*4+2],d=a[0*4+3],v=a[1*4+0],T=a[1*4+1],E=a[1*4+2],B=a[1*4+3],Y=a[2*4+0],W=a[2*4+1],re=a[2*4+2],ne=a[2*4+3],se=a[3*4+0],be=a[3*4+1],Me=a[3*4+2],ye=a[3*4+3],De=re*ye,$e=Me*ne,Ve=E*ye,nt=Me*B,Ne=E*ne,it=re*B,st=b*ye,at=Me*d,Je=b*ne,Xe=re*d,Qe=b*B,ft=E*d,ot=De*T+nt*W+Ne*be-($e*T+Ve*W+it*be),lt=$e*h+st*W+Xe*be-(De*h+at*W+Je*be),et=Ve*h+at*T+Qe*be-(nt*h+st*T+ft*be),dt=it*h+Je*T+ft*W-(Ne*h+Xe*T+Qe*W);return g*ot+v*lt+Y*et+se*dt}const O=V;function ee(a,g,h){const b=h??new i(16),d=a[0],v=a[1],T=a[2],E=a[3],B=a[4+0],Y=a[4+1],W=a[4+2],re=a[4+3],ne=a[8+0],se=a[8+1],be=a[8+2],Me=a[8+3],ye=a[12+0],De=a[12+1],$e=a[12+2],Ve=a[12+3],nt=g[0],Ne=g[1],it=g[2],st=g[3],at=g[4+0],Je=g[4+1],Xe=g[4+2],Qe=g[4+3],ft=g[8+0],ot=g[8+1],lt=g[8+2],et=g[8+3],dt=g[12+0],qe=g[12+1],Ze=g[12+2],pt=g[12+3];return b[0]=d*nt+B*Ne+ne*it+ye*st,b[1]=v*nt+Y*Ne+se*it+De*st,b[2]=T*nt+W*Ne+be*it+$e*st,b[3]=E*nt+re*Ne+Me*it+Ve*st,b[4]=d*at+B*Je+ne*Xe+ye*Qe,b[5]=v*at+Y*Je+se*Xe+De*Qe,b[6]=T*at+W*Je+be*Xe+$e*Qe,b[7]=E*at+re*Je+Me*Xe+Ve*Qe,b[8]=d*ft+B*ot+ne*lt+ye*et,b[9]=v*ft+Y*ot+se*lt+De*et,b[10]=T*ft+W*ot+be*lt+$e*et,b[11]=E*ft+re*ot+Me*lt+Ve*et,b[12]=d*dt+B*qe+ne*Ze+ye*pt,b[13]=v*dt+Y*qe+se*Ze+De*pt,b[14]=T*dt+W*qe+be*Ze+$e*pt,b[15]=E*dt+re*qe+Me*Ze+Ve*pt,b}const F=ee;function te(a,g,h){const b=h??H();return a!==b&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11]),b[12]=g[0],b[13]=g[1],b[14]=g[2],b[15]=1,b}function ce(a,g){const h=g??s.create();return h[0]=a[12],h[1]=a[13],h[2]=a[14],h}function he(a,g,h){const b=h??s.create(),d=g*4;return b[0]=a[d+0],b[1]=a[d+1],b[2]=a[d+2],b}function pe(a,g,h,b){const d=b===a?b:z(a,b),v=h*4;return d[v+0]=g[0],d[v+1]=g[1],d[v+2]=g[2],d}function Se(a,g){const h=g??s.create(),b=a[0],d=a[1],v=a[2],T=a[4],E=a[5],B=a[6],Y=a[8],W=a[9],re=a[10];return h[0]=Math.sqrt(b*b+d*d+v*v),h[1]=Math.sqrt(T*T+E*E+B*B),h[2]=Math.sqrt(Y*Y+W*W+re*re),h}function Ee(a,g,h,b,d){const v=d??new i(16),T=Math.tan(Math.PI*.5-.5*a);if(v[0]=T/g,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=T,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,Number.isFinite(b)){const E=1/(h-b);v[10]=b*E,v[14]=b*h*E}else v[10]=-1,v[14]=-h;return v}function Re(a,g,h,b=1/0,d){const v=d??new i(16),T=1/Math.tan(a*.5);if(v[0]=T/g,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=T,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,b===1/0)v[10]=0,v[14]=h;else{const E=1/(b-h);v[10]=h*E,v[14]=b*h*E}return v}function ke(a,g,h,b,d,v,T){const E=T??new i(16);return E[0]=2/(g-a),E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2/(b-h),E[6]=0,E[7]=0,E[8]=0,E[9]=0,E[10]=1/(d-v),E[11]=0,E[12]=(g+a)/(a-g),E[13]=(b+h)/(h-b),E[14]=d/(d-v),E[15]=1,E}function de(a,g,h,b,d,v,T){const E=T??new i(16),B=g-a,Y=b-h,W=d-v;return E[0]=2*d/B,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2*d/Y,E[6]=0,E[7]=0,E[8]=(a+g)/B,E[9]=(b+h)/Y,E[10]=v/W,E[11]=-1,E[12]=0,E[13]=0,E[14]=d*v/W,E[15]=0,E}function N(a,g,h,b,d,v=1/0,T){const E=T??new i(16),B=g-a,Y=b-h;if(E[0]=2*d/B,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2*d/Y,E[6]=0,E[7]=0,E[8]=(a+g)/B,E[9]=(b+h)/Y,E[11]=-1,E[12]=0,E[13]=0,E[15]=0,v===1/0)E[10]=0,E[14]=d;else{const W=1/(v-d);E[10]=d*W,E[14]=v*d*W}return E}const xe=s.create(),we=s.create(),_e=s.create();function me(a,g,h,b){const d=b??new i(16);return s.normalize(s.subtract(g,a,_e),_e),s.normalize(s.cross(h,_e,xe),xe),s.normalize(s.cross(_e,xe,we),we),d[0]=xe[0],d[1]=xe[1],d[2]=xe[2],d[3]=0,d[4]=we[0],d[5]=we[1],d[6]=we[2],d[7]=0,d[8]=_e[0],d[9]=_e[1],d[10]=_e[2],d[11]=0,d[12]=a[0],d[13]=a[1],d[14]=a[2],d[15]=1,d}function ae(a,g,h,b){const d=b??new i(16);return s.normalize(s.subtract(a,g,_e),_e),s.normalize(s.cross(h,_e,xe),xe),s.normalize(s.cross(_e,xe,we),we),d[0]=xe[0],d[1]=xe[1],d[2]=xe[2],d[3]=0,d[4]=we[0],d[5]=we[1],d[6]=we[2],d[7]=0,d[8]=_e[0],d[9]=_e[1],d[10]=_e[2],d[11]=0,d[12]=a[0],d[13]=a[1],d[14]=a[2],d[15]=1,d}function Pe(a,g,h,b){const d=b??new i(16);return s.normalize(s.subtract(a,g,_e),_e),s.normalize(s.cross(h,_e,xe),xe),s.normalize(s.cross(_e,xe,we),we),d[0]=xe[0],d[1]=we[0],d[2]=_e[0],d[3]=0,d[4]=xe[1],d[5]=we[1],d[6]=_e[1],d[7]=0,d[8]=xe[2],d[9]=we[2],d[10]=_e[2],d[11]=0,d[12]=-(xe[0]*a[0]+xe[1]*a[1]+xe[2]*a[2]),d[13]=-(we[0]*a[0]+we[1]*a[1]+we[2]*a[2]),d[14]=-(_e[0]*a[0]+_e[1]*a[1]+_e[2]*a[2]),d[15]=1,d}function Ie(a,g){const h=g??new i(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=a[0],h[13]=a[1],h[14]=a[2],h[15]=1,h}function Ae(a,g,h){const b=h??new i(16),d=g[0],v=g[1],T=g[2],E=a[0],B=a[1],Y=a[2],W=a[3],re=a[1*4+0],ne=a[1*4+1],se=a[1*4+2],be=a[1*4+3],Me=a[2*4+0],ye=a[2*4+1],De=a[2*4+2],$e=a[2*4+3],Ve=a[3*4+0],nt=a[3*4+1],Ne=a[3*4+2],it=a[3*4+3];return a!==b&&(b[0]=E,b[1]=B,b[2]=Y,b[3]=W,b[4]=re,b[5]=ne,b[6]=se,b[7]=be,b[8]=Me,b[9]=ye,b[10]=De,b[11]=$e),b[12]=E*d+re*v+Me*T+Ve,b[13]=B*d+ne*v+ye*T+nt,b[14]=Y*d+se*v+De*T+Ne,b[15]=W*d+be*v+$e*T+it,b}function Le(a,g){const h=g??new i(16),b=Math.cos(a),d=Math.sin(a);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=b,h[6]=d,h[7]=0,h[8]=0,h[9]=-d,h[10]=b,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function oe(a,g,h){const b=h??new i(16),d=a[4],v=a[5],T=a[6],E=a[7],B=a[8],Y=a[9],W=a[10],re=a[11],ne=Math.cos(g),se=Math.sin(g);return b[4]=ne*d+se*B,b[5]=ne*v+se*Y,b[6]=ne*T+se*W,b[7]=ne*E+se*re,b[8]=ne*B-se*d,b[9]=ne*Y-se*v,b[10]=ne*W-se*T,b[11]=ne*re-se*E,a!==b&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]),b}function Ce(a,g){const h=g??new i(16),b=Math.cos(a),d=Math.sin(a);return h[0]=b,h[1]=0,h[2]=-d,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=d,h[9]=0,h[10]=b,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function Be(a,g,h){const b=h??new i(16),d=a[0*4+0],v=a[0*4+1],T=a[0*4+2],E=a[0*4+3],B=a[2*4+0],Y=a[2*4+1],W=a[2*4+2],re=a[2*4+3],ne=Math.cos(g),se=Math.sin(g);return b[0]=ne*d-se*B,b[1]=ne*v-se*Y,b[2]=ne*T-se*W,b[3]=ne*E-se*re,b[8]=ne*B+se*d,b[9]=ne*Y+se*v,b[10]=ne*W+se*T,b[11]=ne*re+se*E,a!==b&&(b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]),b}function I(a,g){const h=g??new i(16),b=Math.cos(a),d=Math.sin(a);return h[0]=b,h[1]=d,h[2]=0,h[3]=0,h[4]=-d,h[5]=b,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function Q(a,g,h){const b=h??new i(16),d=a[0*4+0],v=a[0*4+1],T=a[0*4+2],E=a[0*4+3],B=a[1*4+0],Y=a[1*4+1],W=a[1*4+2],re=a[1*4+3],ne=Math.cos(g),se=Math.sin(g);return b[0]=ne*d+se*B,b[1]=ne*v+se*Y,b[2]=ne*T+se*W,b[3]=ne*E+se*re,b[4]=ne*B-se*d,b[5]=ne*Y-se*v,b[6]=ne*W-se*T,b[7]=ne*re-se*E,a!==b&&(b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]),b}function C(a,g,h){const b=h??new i(16);let d=a[0],v=a[1],T=a[2];const E=Math.sqrt(d*d+v*v+T*T);d/=E,v/=E,T/=E;const B=d*d,Y=v*v,W=T*T,re=Math.cos(g),ne=Math.sin(g),se=1-re;return b[0]=B+(1-B)*re,b[1]=d*v*se+T*ne,b[2]=d*T*se-v*ne,b[3]=0,b[4]=d*v*se-T*ne,b[5]=Y+(1-Y)*re,b[6]=v*T*se+d*ne,b[7]=0,b[8]=d*T*se+v*ne,b[9]=v*T*se-d*ne,b[10]=W+(1-W)*re,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}const l=C;function f(a,g,h,b){const d=b??new i(16);let v=g[0],T=g[1],E=g[2];const B=Math.sqrt(v*v+T*T+E*E);v/=B,T/=B,E/=B;const Y=v*v,W=T*T,re=E*E,ne=Math.cos(h),se=Math.sin(h),be=1-ne,Me=Y+(1-Y)*ne,ye=v*T*be+E*se,De=v*E*be-T*se,$e=v*T*be-E*se,Ve=W+(1-W)*ne,nt=T*E*be+v*se,Ne=v*E*be+T*se,it=T*E*be-v*se,st=re+(1-re)*ne,at=a[0],Je=a[1],Xe=a[2],Qe=a[3],ft=a[4],ot=a[5],lt=a[6],et=a[7],dt=a[8],qe=a[9],Ze=a[10],pt=a[11];return d[0]=Me*at+ye*ft+De*dt,d[1]=Me*Je+ye*ot+De*qe,d[2]=Me*Xe+ye*lt+De*Ze,d[3]=Me*Qe+ye*et+De*pt,d[4]=$e*at+Ve*ft+nt*dt,d[5]=$e*Je+Ve*ot+nt*qe,d[6]=$e*Xe+Ve*lt+nt*Ze,d[7]=$e*Qe+Ve*et+nt*pt,d[8]=Ne*at+it*ft+st*dt,d[9]=Ne*Je+it*ot+st*qe,d[10]=Ne*Xe+it*lt+st*Ze,d[11]=Ne*Qe+it*et+st*pt,a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}const p=f;function w(a,g){const h=g??new i(16);return h[0]=a[0],h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=a[1],h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=a[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function M(a,g,h){const b=h??new i(16),d=g[0],v=g[1],T=g[2];return b[0]=d*a[0*4+0],b[1]=d*a[0*4+1],b[2]=d*a[0*4+2],b[3]=d*a[0*4+3],b[4]=v*a[1*4+0],b[5]=v*a[1*4+1],b[6]=v*a[1*4+2],b[7]=v*a[1*4+3],b[8]=T*a[2*4+0],b[9]=T*a[2*4+1],b[10]=T*a[2*4+2],b[11]=T*a[2*4+3],a!==b&&(b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]),b}function D(a,g){const h=g??new i(16);return h[0]=a,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=a,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=a,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function R(a,g,h){const b=h??new i(16);return b[0]=g*a[0*4+0],b[1]=g*a[0*4+1],b[2]=g*a[0*4+2],b[3]=g*a[0*4+3],b[4]=g*a[1*4+0],b[5]=g*a[1*4+1],b[6]=g*a[1*4+2],b[7]=g*a[1*4+3],b[8]=g*a[2*4+0],b[9]=g*a[2*4+1],b[10]=g*a[2*4+2],b[11]=g*a[2*4+3],a!==b&&(b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]),b}return{add:x,aim:me,axisRotate:f,axisRotation:C,cameraAim:ae,clone:G,copy:z,create:o,determinant:Z,equals:$,equalsApproximately:q,fromMat3:c,fromQuat:m,frustum:de,frustumReverseZ:N,getAxis:he,getScaling:Se,getTranslation:ce,identity:H,inverse:V,invert:O,lookAt:Pe,mul:F,mulScalar:A,multiply:ee,multiplyScalar:S,negate:y,ortho:ke,perspective:Ee,perspectiveReverseZ:Re,rotate:p,rotateX:oe,rotateY:Be,rotateZ:Q,rotation:l,rotationX:Le,rotationY:Ce,rotationZ:I,scale:M,scaling:w,set:u,setAxis:pe,setTranslation:te,translate:Ae,translation:Ie,transpose:U,uniformScale:R,uniformScaling:D}}const ua=new Map;function Oc(i){let s=ua.get(i);return s||(s=Fc(i),ua.set(i,s)),s}function Vc(i){const s=_r(i);function o(I,Q,C,l){const f=new i(4);return I!==void 0&&(f[0]=I,Q!==void 0&&(f[1]=Q,C!==void 0&&(f[2]=C,l!==void 0&&(f[3]=l)))),f}const u=o;function c(I,Q,C,l,f){const p=f??new i(4);return p[0]=I,p[1]=Q,p[2]=C,p[3]=l,p}function m(I,Q,C){const l=C??new i(4),f=Q*.5,p=Math.sin(f);return l[0]=p*I[0],l[1]=p*I[1],l[2]=p*I[2],l[3]=Math.cos(f),l}function y(I,Q){const C=Q??s.create(3),l=Math.acos(I[3])*2,f=Math.sin(l*.5);return f>Ke?(C[0]=I[0]/f,C[1]=I[1]/f,C[2]=I[2]/f):(C[0]=1,C[1]=0,C[2]=0),{angle:l,axis:C}}function x(I,Q){const C=Ee(I,Q);return Math.acos(2*C*C-1)}function S(I,Q,C){const l=C??new i(4),f=I[0],p=I[1],w=I[2],M=I[3],D=Q[0],R=Q[1],a=Q[2],g=Q[3];return l[0]=f*g+M*D+p*a-w*R,l[1]=p*g+M*R+w*D-f*a,l[2]=w*g+M*a+f*R-p*D,l[3]=M*g-f*D-p*R-w*a,l}const A=S;function z(I,Q,C){const l=C??new i(4),f=Q*.5,p=I[0],w=I[1],M=I[2],D=I[3],R=Math.sin(f),a=Math.cos(f);return l[0]=p*a+D*R,l[1]=w*a+M*R,l[2]=M*a-w*R,l[3]=D*a-p*R,l}function G(I,Q,C){const l=C??new i(4),f=Q*.5,p=I[0],w=I[1],M=I[2],D=I[3],R=Math.sin(f),a=Math.cos(f);return l[0]=p*a-M*R,l[1]=w*a+D*R,l[2]=M*a+p*R,l[3]=D*a-w*R,l}function q(I,Q,C){const l=C??new i(4),f=Q*.5,p=I[0],w=I[1],M=I[2],D=I[3],R=Math.sin(f),a=Math.cos(f);return l[0]=p*a+w*R,l[1]=w*a-p*R,l[2]=M*a+D*R,l[3]=D*a-M*R,l}function $(I,Q,C,l){const f=l??new i(4),p=I[0],w=I[1],M=I[2],D=I[3];let R=Q[0],a=Q[1],g=Q[2],h=Q[3],b=p*R+w*a+M*g+D*h;b<0&&(b=-b,R=-R,a=-a,g=-g,h=-h);let d,v;if(1-b>Ke){const T=Math.acos(b),E=Math.sin(T);d=Math.sin((1-C)*T)/E,v=Math.sin(C*T)/E}else d=1-C,v=C;return f[0]=d*p+v*R,f[1]=d*w+v*a,f[2]=d*M+v*g,f[3]=d*D+v*h,f}function H(I,Q){const C=Q??new i(4),l=I[0],f=I[1],p=I[2],w=I[3],M=l*l+f*f+p*p+w*w,D=M?1/M:0;return C[0]=-l*D,C[1]=-f*D,C[2]=-p*D,C[3]=w*D,C}function U(I,Q){const C=Q??new i(4);return C[0]=-I[0],C[1]=-I[1],C[2]=-I[2],C[3]=I[3],C}function V(I,Q){const C=Q??new i(4),l=I[0]+I[5]+I[10];if(l>0){const f=Math.sqrt(l+1);C[3]=.5*f;const p=.5/f;C[0]=(I[6]-I[9])*p,C[1]=(I[8]-I[2])*p,C[2]=(I[1]-I[4])*p}else{let f=0;I[5]>I[0]&&(f=1),I[10]>I[f*4+f]&&(f=2);const p=(f+1)%3,w=(f+2)%3,M=Math.sqrt(I[f*4+f]-I[p*4+p]-I[w*4+w]+1);C[f]=.5*M;const D=.5/M;C[3]=(I[p*4+w]-I[w*4+p])*D,C[p]=(I[p*4+f]+I[f*4+p])*D,C[w]=(I[w*4+f]+I[f*4+w])*D}return C}function Z(I,Q,C,l,f){const p=f??new i(4),w=I*.5,M=Q*.5,D=C*.5,R=Math.sin(w),a=Math.cos(w),g=Math.sin(M),h=Math.cos(M),b=Math.sin(D),d=Math.cos(D);switch(l){case"xyz":p[0]=R*h*d+a*g*b,p[1]=a*g*d-R*h*b,p[2]=a*h*b+R*g*d,p[3]=a*h*d-R*g*b;break;case"xzy":p[0]=R*h*d-a*g*b,p[1]=a*g*d-R*h*b,p[2]=a*h*b+R*g*d,p[3]=a*h*d+R*g*b;break;case"yxz":p[0]=R*h*d+a*g*b,p[1]=a*g*d-R*h*b,p[2]=a*h*b-R*g*d,p[3]=a*h*d+R*g*b;break;case"yzx":p[0]=R*h*d+a*g*b,p[1]=a*g*d+R*h*b,p[2]=a*h*b-R*g*d,p[3]=a*h*d-R*g*b;break;case"zxy":p[0]=R*h*d-a*g*b,p[1]=a*g*d+R*h*b,p[2]=a*h*b+R*g*d,p[3]=a*h*d-R*g*b;break;case"zyx":p[0]=R*h*d-a*g*b,p[1]=a*g*d+R*h*b,p[2]=a*h*b-R*g*d,p[3]=a*h*d+R*g*b;break;default:throw new Error(`Unknown rotation order: ${l}`)}return p}function O(I,Q){const C=Q??new i(4);return C[0]=I[0],C[1]=I[1],C[2]=I[2],C[3]=I[3],C}const ee=O;function F(I,Q,C){const l=C??new i(4);return l[0]=I[0]+Q[0],l[1]=I[1]+Q[1],l[2]=I[2]+Q[2],l[3]=I[3]+Q[3],l}function te(I,Q,C){const l=C??new i(4);return l[0]=I[0]-Q[0],l[1]=I[1]-Q[1],l[2]=I[2]-Q[2],l[3]=I[3]-Q[3],l}const ce=te;function he(I,Q,C){const l=C??new i(4);return l[0]=I[0]*Q,l[1]=I[1]*Q,l[2]=I[2]*Q,l[3]=I[3]*Q,l}const pe=he;function Se(I,Q,C){const l=C??new i(4);return l[0]=I[0]/Q,l[1]=I[1]/Q,l[2]=I[2]/Q,l[3]=I[3]/Q,l}function Ee(I,Q){return I[0]*Q[0]+I[1]*Q[1]+I[2]*Q[2]+I[3]*Q[3]}function Re(I,Q,C,l){const f=l??new i(4);return f[0]=I[0]+C*(Q[0]-I[0]),f[1]=I[1]+C*(Q[1]-I[1]),f[2]=I[2]+C*(Q[2]-I[2]),f[3]=I[3]+C*(Q[3]-I[3]),f}function ke(I){const Q=I[0],C=I[1],l=I[2],f=I[3];return Math.sqrt(Q*Q+C*C+l*l+f*f)}const de=ke;function N(I){const Q=I[0],C=I[1],l=I[2],f=I[3];return Q*Q+C*C+l*l+f*f}const xe=N;function we(I,Q){const C=Q??new i(4),l=I[0],f=I[1],p=I[2],w=I[3],M=Math.sqrt(l*l+f*f+p*p+w*w);return M>1e-5?(C[0]=l/M,C[1]=f/M,C[2]=p/M,C[3]=w/M):(C[0]=0,C[1]=0,C[2]=0,C[3]=1),C}function _e(I,Q){return Math.abs(I[0]-Q[0])<Ke&&Math.abs(I[1]-Q[1])<Ke&&Math.abs(I[2]-Q[2])<Ke&&Math.abs(I[3]-Q[3])<Ke}function me(I,Q){return I[0]===Q[0]&&I[1]===Q[1]&&I[2]===Q[2]&&I[3]===Q[3]}function ae(I){const Q=I??new i(4);return Q[0]=0,Q[1]=0,Q[2]=0,Q[3]=1,Q}const Pe=s.create(),Ie=s.create(),Ae=s.create();function Le(I,Q,C){const l=C??new i(4),f=s.dot(I,Q);return f<-.999999?(s.cross(Ie,I,Pe),s.len(Pe)<1e-6&&s.cross(Ae,I,Pe),s.normalize(Pe,Pe),m(Pe,Math.PI,l),l):f>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(s.cross(I,Q,Pe),l[0]=Pe[0],l[1]=Pe[1],l[2]=Pe[2],l[3]=1+f,we(l,l))}const oe=new i(4),Ce=new i(4);function Be(I,Q,C,l,f,p){const w=p??new i(4);return $(I,l,f,oe),$(Q,C,f,Ce),$(oe,Ce,2*f*(1-f),w),w}return{create:o,fromValues:u,set:c,fromAxisAngle:m,toAxisAngle:y,angle:x,multiply:S,mul:A,rotateX:z,rotateY:G,rotateZ:q,slerp:$,inverse:H,conjugate:U,fromMat:V,fromEuler:Z,copy:O,clone:ee,add:F,subtract:te,sub:ce,mulScalar:he,scale:pe,divScalar:Se,dot:Ee,lerp:Re,length:ke,len:de,lengthSq:N,lenSq:xe,normalize:we,equalsApproximately:_e,equals:me,identity:ae,rotationTo:Le,sqlerp:Be}}const da=new Map;function $c(i){let s=da.get(i);return s||(s=Vc(i),da.set(i,s)),s}function Nc(i){function s(C,l,f,p){const w=new i(4);return C!==void 0&&(w[0]=C,l!==void 0&&(w[1]=l,f!==void 0&&(w[2]=f,p!==void 0&&(w[3]=p)))),w}const o=s;function u(C,l,f,p,w){const M=w??new i(4);return M[0]=C,M[1]=l,M[2]=f,M[3]=p,M}function c(C,l){const f=l??new i(4);return f[0]=Math.ceil(C[0]),f[1]=Math.ceil(C[1]),f[2]=Math.ceil(C[2]),f[3]=Math.ceil(C[3]),f}function m(C,l){const f=l??new i(4);return f[0]=Math.floor(C[0]),f[1]=Math.floor(C[1]),f[2]=Math.floor(C[2]),f[3]=Math.floor(C[3]),f}function y(C,l){const f=l??new i(4);return f[0]=Math.round(C[0]),f[1]=Math.round(C[1]),f[2]=Math.round(C[2]),f[3]=Math.round(C[3]),f}function x(C,l=0,f=1,p){const w=p??new i(4);return w[0]=Math.min(f,Math.max(l,C[0])),w[1]=Math.min(f,Math.max(l,C[1])),w[2]=Math.min(f,Math.max(l,C[2])),w[3]=Math.min(f,Math.max(l,C[3])),w}function S(C,l,f){const p=f??new i(4);return p[0]=C[0]+l[0],p[1]=C[1]+l[1],p[2]=C[2]+l[2],p[3]=C[3]+l[3],p}function A(C,l,f,p){const w=p??new i(4);return w[0]=C[0]+l[0]*f,w[1]=C[1]+l[1]*f,w[2]=C[2]+l[2]*f,w[3]=C[3]+l[3]*f,w}function z(C,l,f){const p=f??new i(4);return p[0]=C[0]-l[0],p[1]=C[1]-l[1],p[2]=C[2]-l[2],p[3]=C[3]-l[3],p}const G=z;function q(C,l){return Math.abs(C[0]-l[0])<Ke&&Math.abs(C[1]-l[1])<Ke&&Math.abs(C[2]-l[2])<Ke&&Math.abs(C[3]-l[3])<Ke}function $(C,l){return C[0]===l[0]&&C[1]===l[1]&&C[2]===l[2]&&C[3]===l[3]}function H(C,l,f,p){const w=p??new i(4);return w[0]=C[0]+f*(l[0]-C[0]),w[1]=C[1]+f*(l[1]-C[1]),w[2]=C[2]+f*(l[2]-C[2]),w[3]=C[3]+f*(l[3]-C[3]),w}function U(C,l,f,p){const w=p??new i(4);return w[0]=C[0]+f[0]*(l[0]-C[0]),w[1]=C[1]+f[1]*(l[1]-C[1]),w[2]=C[2]+f[2]*(l[2]-C[2]),w[3]=C[3]+f[3]*(l[3]-C[3]),w}function V(C,l,f){const p=f??new i(4);return p[0]=Math.max(C[0],l[0]),p[1]=Math.max(C[1],l[1]),p[2]=Math.max(C[2],l[2]),p[3]=Math.max(C[3],l[3]),p}function Z(C,l,f){const p=f??new i(4);return p[0]=Math.min(C[0],l[0]),p[1]=Math.min(C[1],l[1]),p[2]=Math.min(C[2],l[2]),p[3]=Math.min(C[3],l[3]),p}function O(C,l,f){const p=f??new i(4);return p[0]=C[0]*l,p[1]=C[1]*l,p[2]=C[2]*l,p[3]=C[3]*l,p}const ee=O;function F(C,l,f){const p=f??new i(4);return p[0]=C[0]/l,p[1]=C[1]/l,p[2]=C[2]/l,p[3]=C[3]/l,p}function te(C,l){const f=l??new i(4);return f[0]=1/C[0],f[1]=1/C[1],f[2]=1/C[2],f[3]=1/C[3],f}const ce=te;function he(C,l){return C[0]*l[0]+C[1]*l[1]+C[2]*l[2]+C[3]*l[3]}function pe(C){const l=C[0],f=C[1],p=C[2],w=C[3];return Math.sqrt(l*l+f*f+p*p+w*w)}const Se=pe;function Ee(C){const l=C[0],f=C[1],p=C[2],w=C[3];return l*l+f*f+p*p+w*w}const Re=Ee;function ke(C,l){const f=C[0]-l[0],p=C[1]-l[1],w=C[2]-l[2],M=C[3]-l[3];return Math.sqrt(f*f+p*p+w*w+M*M)}const de=ke;function N(C,l){const f=C[0]-l[0],p=C[1]-l[1],w=C[2]-l[2],M=C[3]-l[3];return f*f+p*p+w*w+M*M}const xe=N;function we(C,l){const f=l??new i(4),p=C[0],w=C[1],M=C[2],D=C[3],R=Math.sqrt(p*p+w*w+M*M+D*D);return R>1e-5?(f[0]=p/R,f[1]=w/R,f[2]=M/R,f[3]=D/R):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function _e(C,l){const f=l??new i(4);return f[0]=-C[0],f[1]=-C[1],f[2]=-C[2],f[3]=-C[3],f}function me(C,l){const f=l??new i(4);return f[0]=C[0],f[1]=C[1],f[2]=C[2],f[3]=C[3],f}const ae=me;function Pe(C,l,f){const p=f??new i(4);return p[0]=C[0]*l[0],p[1]=C[1]*l[1],p[2]=C[2]*l[2],p[3]=C[3]*l[3],p}const Ie=Pe;function Ae(C,l,f){const p=f??new i(4);return p[0]=C[0]/l[0],p[1]=C[1]/l[1],p[2]=C[2]/l[2],p[3]=C[3]/l[3],p}const Le=Ae;function oe(C){const l=C??new i(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function Ce(C,l,f){const p=f??new i(4),w=C[0],M=C[1],D=C[2],R=C[3];return p[0]=l[0]*w+l[4]*M+l[8]*D+l[12]*R,p[1]=l[1]*w+l[5]*M+l[9]*D+l[13]*R,p[2]=l[2]*w+l[6]*M+l[10]*D+l[14]*R,p[3]=l[3]*w+l[7]*M+l[11]*D+l[15]*R,p}function Be(C,l,f){const p=f??new i(4);return we(C,p),O(p,l,p)}function I(C,l,f){const p=f??new i(4);return pe(C)>l?Be(C,l,p):me(C,p)}function Q(C,l,f){const p=f??new i(4);return H(C,l,.5,p)}return{create:s,fromValues:o,set:u,ceil:c,floor:m,round:y,clamp:x,add:S,addScaled:A,subtract:z,sub:G,equalsApproximately:q,equals:$,lerp:H,lerpV:U,max:V,min:Z,mulScalar:O,scale:ee,divScalar:F,inverse:te,invert:ce,dot:he,length:pe,len:Se,lengthSq:Ee,lenSq:Re,distance:ke,dist:de,distanceSq:N,distSq:xe,normalize:we,negate:_e,copy:me,clone:ae,multiply:Pe,mul:Ie,divide:Ae,div:Le,zero:oe,transformMat4:Ce,setLength:Be,truncate:I,midpoint:Q}}const pa=new Map;function qc(i){let s=pa.get(i);return s||(s=Nc(i),pa.set(i,s)),s}function ui(i,s,o,u,c,m){return{mat3:Ic(i),mat4:Oc(s),quat:$c(o),vec2:qa(u),vec3:_r(c),vec4:qc(m)}}const{mat3:Mt,mat4:xt,quat:mt,vec2:ha,vec3:X,vec4:Td}=ui(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ui(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ui(Uc,Array,Array,Array,Array,Array);const Wc=(()=>{try{return new URLSearchParams(window.location.search).get("render")==="always"}catch{return!1}})(),Kc=1e3;class Wa{constructor(){P(this,"pos",new Float32Array(3));P(this,"rot",new Float32Array(16));P(this,"fov",NaN);P(this,"w",0);P(this,"h",0);P(this,"extra","");P(this,"requested",!0);P(this,"lastDraw",-1/0);P(this,"frames",0);P(this,"reason","start");P(this,"lastActive",-1/0)}request(){this.requested=!0}needFrame(s,o,u,c,m,y=""){const x=o.position,S=o.rotation,A=o.getFovY();let z=Wc?"always":this.requested?"requested":m?"active":this.frames<3?"warmup":s-this.lastDraw>=Kc?"heartbeat":"";if(!z)if(u!==this.w||c!==this.h)z="size";else if(A!==this.fov)z="fov";else if(y!==this.extra)z="state";else{for(let G=0;G<3&&!z;G++)Math.abs(x[G]-this.pos[G])>1e-6*(1+Math.abs(x[G]))&&(z="position");for(let G=0;G<16&&!z;G++)Math.abs(S[G]-this.rot[G])>1e-7&&(z="rotation")}if(!z)return!1;this.reason=z;for(let G=0;G<3;G++)this.pos[G]=x[G];for(let G=0;G<16;G++)this.rot[G]=S[G];return this.fov=A,this.w=u,this.h=c,this.extra=y,this.requested=!1,this.lastDraw=s,this.frames++,z!=="heartbeat"&&(this.lastActive=s),!0}idleMs(s){return s-this.lastActive}}const Ka=64,Jr=1,ei=2,fa=4,_a=512,ma=1024,ba=2048,va=4096,ga=8192,jc=0,Kt=new ArrayBuffer(Ka),ut={canvas_size:new Uint32Array(Kt,0,2),accel_flags:new Uint32Array(Kt,8,1),feature_mode:new Uint32Array(Kt,12,1),gaussian_scaling:new Float32Array(Kt,16,1),sh_bias:new Float32Array(Kt,20,1),color_K:new Uint32Array(Kt,24,1),walltime:new Float32Array(Kt,28,1),clip_plane:new Float32Array(Kt,32,4),clip_intr:new Float32Array(Kt,48,4)};function Hc(i){ut.canvas_size[0]=i.width>>>0,ut.canvas_size[1]=i.height>>>0,ut.accel_flags[0]=(i.accel_flags??Jr|ei)>>>0,ut.feature_mode[0]=(i.feature_mode??jc)>>>0,ut.gaussian_scaling[0]=i.gaussian_scaling??1,ut.sh_bias[0]=i.sh_bias??.5,ut.color_K[0]=(i.color_K??0)>>>0,ut.walltime[0]=i.walltime??0}function mr(i,s){i.queue.writeBuffer(s,0,Kt)}function pn(i,s,o){o&&i&&s&&mr(i,s)}function yn(i,s,o,u,c=!0){ut.canvas_size[0]=i>>>0,ut.canvas_size[1]=s>>>0,pn(o??null,u??null,c)}function wa(i,s,o,u=!0){ut.gaussian_scaling[0]=i,pn(s??null,o??null,u)}function xa(i,s,o,u=!0){ut.sh_bias[0]=i,pn(s??null,o??null,u)}function Yc(i,s,o,u=!0){ut.color_K[0]=i>>>0,pn(s??null,o??null,u)}function Xc(i,s,o,u=!0){ut.feature_mode[0]=i>>>0,pn(s??null,o??null,u)}function ya(i,s,o,u,c=!0){i?(ut.clip_plane.set(i),ut.clip_intr.set(s)):(ut.clip_plane.set([0,0,0,0]),ut.clip_intr.set([0,0,0,0])),c&&o&&u&&mr(o,u)}function Zc(i){const s=new Float32Array(1),o=new Uint32Array(s.buffer);s[0]=i;const u=o[0],c=u>>>16&32768,m=(u>>>23&255)-127+15;return m<=0?c:m>=31?c|31744:c|m<<10|u>>>13&1023}function Pa(i,s=.3,o,u,c=!0){let m=ut.accel_flags[0]&65535&~ga;i&&(m=m|ga|Zc(s)<<16),ut.accel_flags[0]=m>>>0,pn(o??null,u??null,c)}function is(i,s,o,u=!0){let c=ut.accel_flags[0];i.oac!==void 0&&(c=i.oac?c|Jr:c&~Jr),i.spr!==void 0&&(c=i.spr?c|ei:c&~ei),i.bfc!==void 0&&(c=i.bfc?c|fa:c&~fa),i.hypLegacy!==void 0&&(c=i.hypLegacy?c|_a:c&~_a),i.centred!==void 0&&(c=i.centred?c|va:c&~va),i.raysplat!==void 0&&(c=i.raysplat?c|ba:c&~ba),i.legacyPos!==void 0&&(c=i.legacyPos?c|ma:c&~ma),ut.accel_flags[0]=c>>>0,pn(s??null,o??null,u)}const Sa=16384;function Ea(i,s,o,u=!0){let c=ut.accel_flags[0];c=i?c|Sa:c&~Sa,ut.accel_flags[0]=c>>>0,pn(s??null,o??null,u)}function Qc(i,s,o,u=!0){const c=i>0?Math.max(1,Math.min(63,Math.round(i*8))):0;let m=ut.accel_flags[0];m=m&-505|c<<3,ut.accel_flags[0]=m>>>0,pn(s??null,o??null,u)}const Wr="halloumi.gpuLossReload",Jc=6e4,As=(()=>{try{return new URLSearchParams(window.location.search).get("lowmem")==="1"}catch{return!1}})(),eu=/insufficient memory|out ?of ?memory|OutOfMemory|kIOGPUCommandBufferCallbackErrorOutOfMemory/i;let ka=!1;function Js(i,s){const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const u=document.createElement("div");if(u.textContent=i,o.appendChild(u),s){const c=document.createElement("button");c.textContent="Reload",Object.assign(c.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),c.onclick=()=>window.location.reload(),o.appendChild(c)}document.body.appendChild(o)}function ja(i,s){if(ka)return;ka=!0,console.error(`[gpu-loss] ${i} lost: ${s}`);let o=0;try{o=parseInt(sessionStorage.getItem(Wr)??"0",10)||0}catch{}const u=Date.now(),c=eu.test(s);if(c&&!As){try{sessionStorage.setItem(Wr,String(u))}catch{}const m=new URL(window.location.href);m.searchParams.set("lowmem","1"),Js("The GPU ran out of memory — reloading the viewer in low-memory mode…",!1),setTimeout(()=>window.location.replace(m.toString()),400)}else if(u-o>Jc){try{sessionStorage.setItem(Wr,String(u))}catch{}Js("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else Js(c?'The GPU ran out of memory again, even in low-memory mode. This Mac shares its RAM with the GPU: close other tabs / apps (or end Chrome’s "GPU Process" in its Task Manager) and reload.':`The GPU device was lost again (${i}: ${s}). Reload to try once more.`,!0)}function tu(i){i.lost.then(o=>{o.reason!=="destroyed"&&ja("webgpu",`${o.reason}: ${o.message}`)});let s=0;i.addEventListener("uncapturederror",o=>{var u;s++<5&&console.error("[webgpu] uncaptured error:",((u=o==null?void 0:o.error)==null?void 0:u.message)??o)})}function Ta(i){i.addEventListener("webglcontextlost",s=>{s.preventDefault(),!Ha&&ja("webgl","webglcontextlost")},!1)}let Ha=!1;function Kr(i){window.addEventListener("pagehide",()=>{Ha=!0;try{i()}catch(s){console.warn("[gpu-loss] release on pagehide failed:",s)}}),window.addEventListener("pageshow",s=>{s.persisted&&location.reload()})}const Ca=document.querySelector("#log");let Gt=null,$n=null;function Ya(){if(Gt)return Gt;Gt=document.createElement("div"),Gt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",Gt.appendChild(i),$n=document.createElement("div"),$n.className="ply-spinner-label",Gt.appendChild($n),Gt.style.display="none",document.body.appendChild(Gt),Gt}function cs(i){Ya(),$n&&i&&($n.textContent=i),Gt&&(Gt.style.opacity="1",Gt.style.display="flex")}function At(i){Ya(),$n&&($n.textContent=i)}function nn(){if(!Gt)return;const i=Gt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function Xa(i,s){if(!Ca)return;const o=document.createElement("p");o.innerText=i,s&&Object.assign(o.style,s),Ca.appendChild(o)}async function bt(i){console.log(i),Xa(i)}async function nu(i){console.error(i),Xa(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Za;function Qa(){Za=performance.now()}function Ba(i){const s=performance.now()-Za;bt(`⏱️ ${i} Time: ${s.toFixed(0)} ms`)}function su(i,s){if(!i)throw new Error(s&&(typeof s=="string"?s:s()))}function os(i){return i+3&-4}const ru=2,iu=3,au=5,ou=6,Cs=7,sr=8,Ms=9,Rs=10,lu=11,cu=12,uu=13,du=14;function Nn(i){const s=new TextDecoder("ascii"),o=s.decode(new Uint8Array(i,0,4));if(o!=="NAT2")throw new Error(`NAT2 bad magic: '${o}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const u=new DataView(i),c=4,m=u.getUint32(c+0,!0),y=u.getUint32(c+4,!0),x=u.getUint32(c+8,!0),S=u.getUint32(c+12,!0),A=u.getUint32(c+16,!0),z=u.getFloat32(c+20,!0),G=u.getUint32(c+24,!0),q=u.getUint32(c+28,!0),$=q===uu||q===du,H=$?q-2:q,U=u.getFloat32(c+32,!0),V=u.getFloat32(c+36,!0),Z=u.getFloat32(c+40,!0),O=u.getUint32(c+44,!0),ee=u.getFloat32(c+48,!0),F=u.getFloat32(c+52,!0),te=u.getUint32(c+56,!0),ce=u.getUint32(c+60,!0),he=H===Ms||H===Rs,pe=he?ce:0,Se=he?0:ce&255,Ee=he?0:ce>>8&255,Re=Se>0?Se:1;if(H===au||H===ou)throw new Error(`NAT2: paired-RVQ format=${H} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ke=H===Ms||H===Rs;if(H!==ru&&H!==iu&&H!==lu&&H!==cu&&H!==Cs&&H!==sr&&!ke)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${H}`);if(m%4!==0||O%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${m} layer_h=${O}`);let de=c+64;const N=(te+1)*4,xe=new Uint32Array(i.slice(de,de+N));de+=N;let we;if(Re>1){const Be=(Re+1)*4;if(de+Be>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Be} from ${de})`);we=new Uint32Array(i.slice(de,de+Be)),de+=Be}else we=new Uint32Array([0,m]);let _e=0;for(let Be=0;Be<Re;Be++){const I=we[Be+1]-we[Be];I>_e&&(_e=I)}if(ke){const Be=pe&2?21:pe&1?7:6,I=A*Be*4;if(de+I>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${I} more bytes from offset ${de}, have ${i.byteLength-de}`);const Q=new Float32Array(i.slice(de,de+I));de+=I;const C=Math.max(1,pe>>8&255),l=[];let f=0;for(let R=0,a=m,g=O;R<C;R++,a>>=1,g>>=1){const h=Math.max(1,a>>2)*Math.max(1,g>>2)*16;l.push(h),f+=h}const p=i.byteLength-de;if(p<f)throw new Error(`NAT2 probe atlas truncated: need ${f} bytes for ${m}x${O} x${C} mips, have ${p}`);const w=[];let M=de;for(const R of l)w.push(new Uint8Array(i.slice(M,M+R))),M+=R;const D=w[0];return{width:m,height:y,channels:x,kernel_type:S,num_rects:A,uv_extent:z,sb_number:G,format:H,sh_bias:U,res_bias:V,compact_mult:Z,layer_h:O,atlas_scale:ee,atlas_offset:F,n_layers:te,n_cols:Re,layer_cuts:xe,column_cuts:we,slice_width:_e,rects_expanded:Q,atlas_bytes:D,mip_bytes:w,probe_mode:pe&2?3:pe&1?2:1}}const me=A*4*4;if(de+me>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${me} more bytes from offset ${de}, have ${i.byteLength-de}`);const ae=new Float32Array(i.slice(de,de+me));de+=me;const Pe=new Float32Array(A*5);for(let Be=0;Be<A;Be++){const I=ae[Be*4+0],Q=ae[Be*4+1],C=ae[Be*4+2],l=ae[Be*4+3];let f=0;for(let R=1;R<=te&&xe[R]<=Q;R++)f=R;let p=0;for(let R=1;R<=Re&&we[R]<=I;R++)p=R;const w=Q-xe[f],M=I-we[p],D=p*te+f;Pe[Be*5+0]=M,Pe[Be*5+1]=w,Pe[Be*5+2]=C,Pe[Be*5+3]=l,Pe[Be*5+4]=D}let Ie,Ae;const Le=Re,Ce=m/4*16;if(H===Cs||H===sr||$){if(de+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Be=H===Cs||$?"BCCB":"ACCB",I=s.decode(new Uint8Array(i,de,4));if(I!==Be)throw new Error(`NAT2 typeD bad sub-magic: expected '${Be}' got '${I}'`);const Q=u.getUint32(de+4,!0),C=u.getUint32(de+8,!0),l=u.getUint32(de+12,!0),f=u.getUint32(de+16,!0),p=u.getUint32(de+20,!0);if(Q!==1)throw new Error(`NAT2 BCCB unsupported version ${Q}`);if(l!==y/4||f!==m/4||p!==l*f)throw new Error(`NAT2 BCCB block grid mismatch: header ${m}×${y}, sub-header ${f}×${l} (${p} blocks)`);de+=24;const w=C*16;if(de+w>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${w}, have ${i.byteLength-de})`);const M=new Uint8Array(i,de,w);de+=w;const D=p*2;if(de+D>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${D}, have ${i.byteLength-de})`);const R=new Uint16Array(i.slice(de,de+D));de+=D;const a=new Uint8Array(p*16);for(let g=0;g<p;g++){const h=R[g]*16;a.set(M.subarray(h,h+16),g*16)}if(Ie=a,Ee>1){Ae=[a];for(let g=1;g<Ee;g++){if(de+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${g} sub-header`);const h=s.decode(new Uint8Array(i,de,4));if(h!==Be)throw new Error(`NAT2 mip ${g}: bad sub-magic '${h}'`);const b=u.getUint32(de+8,!0),d=u.getUint32(de+16,!0),v=u.getUint32(de+20,!0);if(d!==g)throw new Error(`NAT2 mip section order: expected level ${g}, got ${d}`);de+=24;let T=0;for(let W=0;W<Le;W++)for(let re=0;re<te;re++){const ne=ti(g,we[W+1]-we[W],xe[re+1]-xe[re],_e,O);T+=(ne.cw>>2)*(ne.ch>>2)}if(T!==v)throw new Error(`NAT2 mip ${g}: ${v} blocks, loader expects ${T}`);if(de+b*16+v*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${g}`);const E=new Uint8Array(i,de,b*16);de+=b*16;const B=new Uint16Array(i.slice(de,de+v*2));de+=v*2;const Y=new Uint8Array(v*16);for(let W=0;W<v;W++){const re=B[W]*16;Y.set(E.subarray(re,re+16),W*16)}Ae.push(Y)}}}else{let Be=0;for(let I=0;I<te;I++){const Q=xe[I+1]-xe[I];if(Q%4!==0)throw new Error(`NAT2 BC7 layer ${I} rows ${Q} not 4-aligned`);Be+=Q/4*Ce}if(de+Be>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Be} more bytes from offset ${de}, have ${i.byteLength-de}`);if(Ie=new Uint8Array(i.slice(de,de+Be)),de+=Be,Ee>1&&!he){Ae=[Ie];for(let I=1;I<Ee;I++){let Q=0;for(let C=0;C<Re;C++)for(let l=0;l<te;l++){const f=ti(I,we[C+1]-we[C],xe[l+1]-xe[l],_e,O);Q+=f.cw/4*(f.ch/4)*16}if(de+Q>i.byteLength)throw new Error(`NAT2 raw mip ${I}: truncated (need ${Q} B)`);Ae.push(new Uint8Array(i.slice(de,de+Q))),de+=Q}}}return{width:m,height:y,channels:x,kernel_type:S,num_rects:A,uv_extent:z,sb_number:G,format:H,sh_bias:U,res_bias:V,compact_mult:Z,layer_h:O,atlas_scale:ee,atlas_offset:F,n_layers:te,n_cols:Re,layer_cuts:xe,column_cuts:we,slice_width:_e,rects_expanded:Pe,atlas_bytes:Ie,...Ae?{mip_bytes:Ae}:{}}}function ti(i,s,o,u,c){const m=x=>x+3>>2<<2,y=1<<i;return{cw:Math.min(m(Math.max(1,u>>i)),m(Math.ceil(s/y))),ch:Math.min(m(Math.max(1,c>>i)),m(Math.ceil(o/y)))}}const pu=32;async function ni(i,s,o){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let u,c,m,y,x;if(s.format===2||s.format===Cs||s.format===Ms){if(!i.features.has("texture-compression-bc"))return bt(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;x=s.format===Ms?"BC7 atlas (proberes: shared probe texture)":s.format===Cs?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:u,view:c,sampler:m,samplerAniso:y}=await si(i,s,"bc7-rgba-unorm",x)}else if(s.format===3||s.format===sr||s.format===Rs){if(!i.features.has("texture-compression-astc"))return bt(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;x=s.format===Rs?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===sr?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:u,view:c,sampler:m,samplerAniso:y}=await si(i,s,"astc-4x4-unorm",x)}else return bt(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:S}=s,A=i.createBuffer({label:"atlas rects (5-stride)",size:os(S.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(A,0,S);const z=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return nr(i,z,s,o),{texture:u,view:c,sampler:m,samplerAniso:y,rectsBuffer:A,texParamsBuffer:z,meta:s}}async function hu(i,s,o){if(s.format!==11&&s.format!==12)return bt(`⚠️  ?slope= file has format ${s.format}, expected 11 (BC5) or 12 (P)`),null;if(!i.features.has("texture-compression-bc"))return bt("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(o&&(o.width!==s.width||o.layer_h!==s.layer_h||o.n_layers!==s.n_layers||o.n_cols!==s.n_cols||o.num_rects!==s.num_rects))return bt(`⚠️  slope sidecar layout ${s.width}x${s.layer_h}x${s.n_layers} does not match the atlas ${o.width}x${o.layer_h}x${o.n_layers} — disabled`),null;const u=s.atlas_bytes.byteLength/1048576,{view:c}=await si(i,s,s.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",s.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:c,kind:s.format===11?"bc5":"p",scaleU:s.atlas_scale,offU:s.atlas_offset,scaleV:s.sh_bias,offV:s.res_bias,mb:u}}const Aa=48*1048576;async function si(i,s,o,u){let c=0;const m=async()=>{i.queue.submit([]),await i.queue.onSubmittedWorkDone(),c=0},y=async ke=>{c+=ke,c>=Aa&&await m()},{width:x,layer_h:S,n_layers:A,n_cols:z,layer_cuts:G,column_cuts:q,slice_width:$,atlas_bytes:H}=s,V=x/4*16,Z=i.limits.maxTextureDimension2D;if(S>Z||$>Z)throw new Error(`⚠️  atlas slice dims ${$}x${S} exceed maxTextureDimension2D=${Z}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const O=z*A;if(O>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${z} cols × ${A} layers = ${O} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const ee=s.mip_bytes??[H],F=As?ee.slice(0,1):ee,te=F.length;As&&ee.length>1&&console.log(`[atlas] lowmem: skipping ${ee.length-1} mip level(s)`);const ce=i.createTexture({label:u,size:{width:$,height:S,depthOrArrayLayers:O},mipLevelCount:te,sampleCount:1,dimension:"2d",format:o,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let ke=0;ke<z;ke++){const de=q[ke]/4,N=(q[ke+1]-q[ke])/4;for(let xe=0;xe<A;xe++){const we=G[xe]/4,_e=(G[xe+1]-G[xe])/4,me=ke*A+xe,ae=we*V+de*16;i.queue.writeTexture({texture:ce,mipLevel:0,origin:{x:0,y:0,z:me},aspect:"all"},H,{offset:ae,bytesPerRow:V,rowsPerImage:_e},{width:N*4,height:_e*4,depthOrArrayLayers:1}),await y(N*_e*16)}}const he=s.format===Ms||s.format===Rs;for(let ke=1;ke<te&&!he;ke++){let de=0;for(let N=0;N<z;N++)for(let xe=0;xe<A;xe++){const{cw:we,ch:_e}=ti(ke,q[N+1]-q[N],G[xe+1]-G[xe],$,S);i.queue.writeTexture({texture:ce,mipLevel:ke,origin:{x:0,y:0,z:N*A+xe},aspect:"all"},F[ke],{offset:de,bytesPerRow:(we>>2)*16,rowsPerImage:_e>>2},{width:we,height:_e,depthOrArrayLayers:1}),de+=(we>>2)*(_e>>2)*16,await y((we>>2)*(_e>>2)*16)}}for(let ke=1;ke<te&&he;ke++){const de=Math.max(1,$>>ke),N=Math.max(1,S>>ke);i.queue.writeTexture({texture:ce,mipLevel:ke,origin:{x:0,y:0,z:0},aspect:"all"},F[ke],{offset:0,bytesPerRow:Math.max(1,de>>2)*16,rowsPerImage:Math.max(1,N>>2)},{width:de,height:N,depthOrArrayLayers:1}),await y(F[ke].byteLength)}te>1&&console.log(`[atlas] ${te} mip levels uploaded (${he?"trilinear":"per-surfel integer level"})`),await m();const pe=ee.reduce((ke,de)=>ke+de.byteLength,0)/1048576;s.atlas_bytes=new Uint8Array(0),s.mip_bytes&&(s.mip_bytes=ee.map(()=>new Uint8Array(0))),console.log(`[atlas] ${u}: ${pe.toFixed(0)} MB uploaded in ≤${Aa/1048576} MB chunks; CPU copy released`);const Se=ce.createView({label:`${u} view`,dimension:"2d-array"}),Ee=i.createSampler({label:`${u} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1&&he?"linear":"nearest"}),Re=i.createSampler({label:`${u} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16});return{texture:ce,view:Se,sampler:Ee,samplerAniso:Re}}function nr(i,s,o,u,c=1){var A;const m=new ArrayBuffer(32),y=new Uint32Array(m),x=new Float32Array(m);y[0]=u?1:0,x[1]=o.atlas_scale,x[2]=o.atlas_offset,x[3]=o.res_bias,y[4]=o.probe_mode?o.probe_mode|0:0,y[5]=o.width|0;const S=(((A=o.mip_bytes)==null?void 0:A.length)??1)>1;y[6]=c===2?2:S&&c!==0?1:0,x[7]=o.uv_extent,i.queue.writeBuffer(s,0,m)}async function rr(i,s){bt(`loading ply file from File... : ${i.name}`),cs("downloading PLY...");const o=await i.arrayBuffer();try{return await eo(o,s)}finally{nn()}}async function fu(i,s){bt(`loading ply file from URL... : ${i}`),cs("downloading PLY...");try{Qa();const o=new URL(i,self.location.href).href;return await eo({url:o},s)}finally{nn()}}function Ja(i){return new Promise((s,o)=>{const u=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});u.onmessage=c=>{const m=c.data;if((m==null?void 0:m.type)==="error"){nu(`PLY worker error: ${m.message??"unknown error"}`),u.terminate(),o(new Error(m.message??"Worker error"));return}else if((m==null?void 0:m.type)==="download_progress"){const y=m.totalBytes,x=m.loadedBytes/(1024*1024),S=y?y/(1024*1024):void 0,A=(m.speedBps??0)/(1024*1024),z=y?Math.min(99,Math.floor(m.loadedBytes/y*100)):void 0,G=S?`total ${S.toFixed(1)} MB`:"total -- MB",q=S&&z!==void 0?`${x.toFixed(1)} MB downloaded (${z}%)`:`${x.toFixed(1)} MB downloaded`,$=`${A.toFixed(2)} MB/s`;At(`downloading PLY ...
${G}, ${q}
${$}`);return}else if((m==null?void 0:m.type)==="fetched"){bt(`💾 Fetched (${m.byteLength} bytes)`),Ba("Download"),At("parsing PLY..."),Qa();return}else if((m==null?void 0:m.type)==="parse_progress"){const y=m.total??0,x=m.read??0,S=y>0?Math.floor(x/y*100):0;At(`parsing PLY ...
${x}/${y} surfels (${S}%)`);return}else(m==null?void 0:m.type)==="done"&&(u.terminate(),Ba("Parse"),s(m))},u.onerror=c=>{u.terminate(),o(c)},i instanceof ArrayBuffer?(At("parsing PLY..."),u.postMessage({type:"start",plyBuffer:i},[i])):u.postMessage({type:"start_url",url:i.url})})}async function Ma(i){var o,u,c,m,y,x,S,A,z,G,q,$;const s=await Ja(await i.arrayBuffer());return{num_points:s.num_points,K:s.K,feature_mode:s.feature_mode??0,sh_bias:s.sh_bias,kernel_type:s.kernel_type,surfel_data:new Float32Array(s.surfelBuffer),sv_params:new Float32Array(s.svParamsBuffer),bbox:s.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:s.centroid??[((((u=(o=s.bbox)==null?void 0:o.min)==null?void 0:u[0])??-1)+(((m=(c=s.bbox)==null?void 0:c.max)==null?void 0:m[0])??1))/2,((((x=(y=s.bbox)==null?void 0:y.min)==null?void 0:x[1])??-1)+(((A=(S=s.bbox)==null?void 0:S.max)==null?void 0:A[1])??1))/2,((((G=(z=s.bbox)==null?void 0:z.min)==null?void 0:G[2])??-1)+((($=(q=s.bbox)==null?void 0:q.max)==null?void 0:$[2])??1))/2]}}async function eo(i,s){var H,U,V,Z,O,ee,F,te,ce,he,pe,Se;const o=await Ja(i),u=o.num_points,c=o.K,m=o.feature_mode??0,y=o.sh_bias,x=o.kernel_type,S=o.surfelBuffer,A=o.svParamsBuffer,z=m===2?"NASG":m===1?"SB":"SV";bt(`🪐 Total surfels: ${u}, mode=${z}, K=${c}, sh_bias=${y}, kernel_type=${x}`);const G=s.createBuffer({label:"surfel input buffer",size:os(u*pu),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(G,0,S);const q=A.byteLength>0?A.byteLength:16,$=s.createBuffer({label:`color_params buffer (${z})`,size:os(q),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return A.byteLength>0&&s.queue.writeBuffer($,0,A),{num_points:u,K:c,feature_mode:m,sh_bias:y,kernel_type:x,surfel_buffer:G,surfel_data:new Float32Array(S),sv_params_buffer:$,bbox:o.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:o.centroid??[((((U=(H=o.bbox)==null?void 0:H.min)==null?void 0:U[0])??-1)+(((Z=(V=o.bbox)==null?void 0:V.max)==null?void 0:Z[0])??1))/2,((((ee=(O=o.bbox)==null?void 0:O.min)==null?void 0:ee[1])??-1)+(((te=(F=o.bbox)==null?void 0:F.max)==null?void 0:te[1])??1))/2,((((he=(ce=o.bbox)==null?void 0:ce.min)==null?void 0:he[2])??-1)+(((Se=(pe=o.bbox)==null?void 0:pe.max)==null?void 0:Se[2])??1))/2]}}const ir="halloumi-bundles-v1",Ra=8,Da="x-halloumi-cached-at",to="x-halloumi-etag",br="x-halloumi-length";function _u(i){try{const s=new URL(i,window.location.href);return s.hash="",s.toString()}catch{return i}}function no(){try{const i=new URLSearchParams(window.location.search);return{nocache:i.get("nocache")==="1",clearcache:i.get("clearcache")==="1",keepcache:i.get("keepcache")==="1"}}catch{return{nocache:!1,clearcache:!1,keepcache:!1}}}const Ua="halloumi-bundles-session";function mu(){try{return sessionStorage.getItem(Ua)?!1:(sessionStorage.setItem(Ua,String(Date.now())),!0)}catch{return!1}}async function di(){if(typeof caches>"u")return null;try{return await caches.open(ir)}catch{return null}}let La=!1;function bu(){var i;La||!((i=navigator.storage)!=null&&i.persist)||(La=!0,navigator.storage.persist().then(s=>console.log(`[cache] persistent storage ${s?"granted":"not granted"}`)).catch(()=>{}))}let er=null;function vu(){return er||(er=(async()=>{const i=no();if(i.clearcache)try{await caches.delete(ir),console.log("[cache] cleared (?clearcache=1)")}catch{}else if(!i.keepcache&&mu())try{const s=await di(),o=s?(await s.keys()).length:0;o>0&&(await caches.delete(ir),console.log(`[cache] new tab: dropped ${o} file(s) left by a closed tab (?keepcache=1 to keep)`))}catch{}ar()})(),er)}async function Ga(){const i=await di();if(!i)return{files:0,bytes:0};let s=0;const o=await i.keys();for(const u of o){const c=await i.match(u);s+=parseInt((c==null?void 0:c.headers.get(br))??"0",10)||0}return{files:o.length,bytes:s}}async function gu(){try{await caches.delete(ir)}catch{}ar()}const ri=new Set;function ar(){for(const i of ri)try{i()}catch{}}function wu(i){return ri.add(i),()=>ri.delete(i)}function so(i){const s=i.addButton({title:"🗑 Clear cache",hidden:!0});let o=!1;const u=m=>m===1?"":"s",c=async()=>{const{files:m,bytes:y}=await Ga();s.hidden=m===0,m>0&&(s.title=`🗑 Clear cache (${m} file${u(m)}, ${za(y)})`)};s.on("click",async()=>{if(o)return;const{files:m,bytes:y}=await Ga();if(m===0){c();return}const x=`Delete ${m} cached bundle file${u(m)} (${za(y)}) from this device?

The current scene stays loaded; the next page load will download it again.`;if(confirm(x)){o=!0,s.title="🗑 Clearing…";try{await gu()}finally{o=!1}await c(),console.log("[cache] cleared by user")}}),wu(()=>void c()),c()}function za(i){return i>=1024*1048576?`${(i/(1024*1048576)).toFixed(2)} GB`:`${(i/1048576).toFixed(0)} MB`}function xu(i){return new Promise(s=>setTimeout(s,i))}function yu(){return typeof document>"u"||document.visibilityState!=="hidden"?Promise.resolve():new Promise(i=>{const s=()=>{document.visibilityState!=="hidden"&&(document.removeEventListener("visibilitychange",s),i())};document.addEventListener("visibilitychange",s)})}async function Pu(i,s){var q;const o=[];let u=0,c,m=null,y=null,x=performance.now(),S=0,A=null;for(let $=0;$<Ra;$++){$>0&&(document.visibilityState==="hidden"?await yu():await xu(Math.min(8e3,1e3*2**($-1))));try{const H={};u>0&&(H.Range=`bytes=${u}-`,m?H["If-Range"]=m:y&&(H["If-Range"]=y));const U=await fetch(i,{headers:H,cache:"no-store"});if(U.status===416&&c!==void 0&&u>=c)break;if(!U.ok)throw new Error(`fetch failed: ${U.status} ${U.statusText}`);if(u>0&&U.status!==206&&(o.length=0,u=0,S=0),u===0){m=U.headers.get("etag"),y=U.headers.get("last-modified");const Z=U.headers.get("content-length");c=Z&&parseInt(Z,10)||void 0}else{const Z=U.headers.get("content-range"),O=Z&&/\/(\d+)$/.exec(Z);O&&(c=parseInt(O[1],10))}const V=(q=U.body)==null?void 0:q.getReader();if(V)for(;;){const{done:Z,value:O}=await V.read();if(Z)break;o.push(O),u+=O.byteLength;const ee=performance.now();ee-x>=150&&s&&(s(u,c,(u-S)/((ee-x)/1e3),"network"),x=ee,S=u)}else{const Z=await U.arrayBuffer();o.push(new Uint8Array(Z)),u+=Z.byteLength}if(c!==void 0&&u<c)throw new Error(`short read: ${u} of ${c} bytes`);A=null;break}catch(H){A=H,console.warn(`[cache] download attempt ${$+1}/${Ra} failed at ${(u/2**20).toFixed(1)} MB:`,H),s&&s(u,c,0,"network")}}if(A)throw A;const z=new Uint8Array(u);let G=0;for(const $ of o)z.set($,G),G+=$.byteLength;return s&&s(u,c??u,0,"network"),{buf:z.buffer,etag:m,lastModified:y}}async function Su(i,s,o){let u=!0;const c=()=>new Response(u?(u=!1,o.buf):o.buf.slice(0),{headers:{"content-type":"application/octet-stream","content-length":String(o.buf.byteLength),[br]:String(o.buf.byteLength),[Da]:String(Date.now()),[to]:o.etag??"",...o.lastModified?{"last-modified":o.lastModified}:{}}});for(let m=0;m<4;m++)try{return await i.put(s,c()),ar(),!0}catch(y){const x=await i.keys();if(x.length===0)return console.warn("[cache] not cached:",y),!1;const S=[];for(const z of x){const G=await i.match(z);S.push({k:z,t:parseInt((G==null?void 0:G.headers.get(Da))??"0",10)||0})}S.sort((z,G)=>z.t-G.t);const A=S[0].k;await i.delete(A),ar(),console.warn(`[cache] quota: evicted ${A.url}`)}return!1}function Eu(i,s,o,u){const c=new AbortController,m=setTimeout(()=>c.abort(),15e3);fetch(s,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:c.signal}).then(async y=>{var H,U;if(!y.ok)return;(H=y.body)==null||H.cancel().catch(()=>{});const x=y.headers.get("etag"),S=y.headers.get("content-range"),A=y.status===206?((U=/\/(\d+)$/.exec(S??""))==null?void 0:U[1])??null:y.headers.get("content-length"),z=o.headers.get(to)||null,G=o.headers.get(br),q=A!==null&&G!==null&&parseInt(A,10)!==parseInt(G,10);(q||!!(x&&z)&&x!==z)&&(await i.delete(s),console.info(`[cache] ${s} changed on the server (${q?"size":"etag"}); evicted — reload to fetch the new version`),u==null||u())}).catch(()=>{}).finally(()=>clearTimeout(m))}async function ro(i,s,o={}){await vu();const{nocache:u}=no(),c=_u(i),m=u?null:await di();if(m)try{const x=await m.match(c);if(x){const S=parseInt(x.headers.get(br)??x.headers.get("content-length")??"0",10)||void 0;s&&s(0,S,0,"cache");const A=await x.arrayBuffer();return s&&s(A.byteLength,A.byteLength,0,"cache"),console.log(`[cache] hit ${(A.byteLength/2**20).toFixed(1)} MB ${c}`),Eu(m,c,x,o.onStale),A}}catch(x){console.warn("[cache] lookup failed:",x)}const y=await Pu(i,s);return m&&(bu(),Su(m,c,y).then(x=>{x&&console.log(`[cache] stored ${(y.buf.byteLength/2**20).toFixed(1)} MB ${c}`)}).catch(x=>console.warn("[cache] store failed:",x))),y.buf}const or="BITYMI01",ku=0,Tu=1,Cu=2,Bu=3,Au=4,Mu=5;function pi(i){const s=new Uint8Array(i),o=new TextDecoder().decode(s.subarray(0,8));if(o!==or)throw new Error(`Not a BITYMI bundle (bad magic '${o}')`);const u=new DataView(i),c=u.getUint32(8,!0),m=12,y=20;let x=null,S=null,A=null;for(let z=0;z<c;z++){const G=m+z*y,q=u.getUint32(G+0,!0),$=Number(u.getBigUint64(G+4,!0)),H=Number(u.getBigUint64(G+12,!0)),U=s.slice($,$+H).buffer;q===ku||q===Tu||q===Mu?x=U:q===Cu?S=U:(q===Bu||q===Au)&&(A=U)}if(x===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:x,camerasBuffer:S,atlasBuffer:A}}async function ls(i,s){const o=await ro(i,s);return o.byteLength>=8&&new TextDecoder().decode(new Uint8Array(o,0,8))===or?{bundle:pi(o),rawPly:null}:{bundle:null,rawPly:o}}var Ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ii={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,s){(function(o,u){u(s)})(Ru,function(o){class u{constructor(e){const[t,r]=e.split("-"),_=t.split(".");this.major=parseInt(_[0],10),this.minor=parseInt(_[1],10),this.patch=parseInt(_[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class c{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class m{constructor(e){this.target=e}}class y extends m{constructor(e,t,r,_){super(e),this.value=t,this.presetKey=r,this.last=_??!0}}class x extends m{constructor(e,t,r){super(e),this.value=t,this.presetKey=r}}class S extends m{constructor(e,t){super(e),this.expanded=t}}class A extends m{constructor(e,t){super(e),this.index=t}}function z(n){return n}function G(n){return n==null}function q(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function $(n,e){let t=n;do{const r=Object.getOwnPropertyDescriptor(t,e);if(r&&(r.set!==void 0||r.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const H={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class U{static alreadyDisposed(){return new U({type:"alreadydisposed"})}static notBindable(){return new U({type:"notbindable"})}static propertyNotFound(e){return new U({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new U({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=H[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class V{constructor(e,t,r){this.obj_=e,this.key_=t,this.presetKey_=r??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const r=this.read();if(!V.isBindable(r))throw U.notBindable();if(!(e in r))throw U.propertyNotFound(e);r[e]=t}}class Z extends c{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{r(new m(this))}),this}}class O{constructor(){this.observers_={}}on(e,t){let r=this.observers_[e];return r||(r=this.observers_[e]=[]),r.push({handler:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(_=>_.handler!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(_=>{_.handler(t)})}}const ee="tp";function F(n){return(t,r)=>[ee,"-",n,"v",t?`_${t}`:"",r?`-${r}`:""].join("")}function te(n,e){return t=>e(n(t))}function ce(n){return n.rawValue}function he(n,e){n.emitter.on("change",te(ce,e)),e(n.rawValue)}function pe(n,e,t){he(n.value(e),t)}function Se(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Ee(n,e){return t=>{Se(n,e,t)}}function Re(n,e){he(n,t=>{e.textContent=t??""})}const ke=F("btn");class de{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ke()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(ke("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const _=e.createElement("div");_.classList.add(ke("t")),Re(t.props.value("title"),_),this.buttonElement.appendChild(_)}}class N{constructor(e,t){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new de(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class xe{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(_,L)=>_===L,this.emitter=new O,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},_=this.constraint_?this.constraint_.constrain(e):e,L=this.rawValue_;this.equals_(L,_)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=_,this.emitter.emit("change",{options:r,previousRawValue:L,rawValue:_,sender:this}))}}class we{constructor(e){this.emitter=new O,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},_=this.value_;_===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:_,rawValue:this.value_,sender:this}))}}function _e(n,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new we(n):new xe(n,e)}class me{constructor(e){this.emitter=new O,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((r,_)=>Object.assign(r,{[_]:_e(e[_])}),{})}static fromObject(e){const t=this.createCore(e);return new me(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ae(n,e){const r=Object.keys(e).reduce((_,L)=>{if(_===void 0)return;const j=e[L],ge=j(n[L]);return ge.succeeded?Object.assign(Object.assign({},_),{[L]:ge.value}):void 0},{});return r}function Pe(n,e){return n.reduce((t,r)=>{if(t===void 0)return;const _=e(r);if(!(!_.succeeded||_.value===void 0))return[...t,_.value]},[])}function Ie(n){return n===null?!1:typeof n=="object"}function Ae(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=n(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function Le(n){return{custom:e=>Ae(e)(n),boolean:Ae(e=>typeof e=="boolean"?e:void 0)(n),number:Ae(e=>typeof e=="number"?e:void 0)(n),string:Ae(e=>typeof e=="string"?e:void 0)(n),function:Ae(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ae(t=>t===e?e:void 0)(n),raw:Ae(e=>e)(n),object:e=>Ae(t=>{if(Ie(t))return ae(t,e)})(n),array:e=>Ae(t=>{if(Array.isArray(t))return Pe(t,e)})(n)}}const oe={optional:Le(!0),required:Le(!1)};function Ce(n,e){const t=oe.required.object(e)(n);return t.succeeded?t.value:void 0}function Be(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function I(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Q{constructor(e){this.value_=e}static create(e){return[new Q(e),(t,r)=>{e.setRawValue(t,r)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const C=F("");function l(n,e){return Ee(n,C(void 0,e))}class f extends me{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Q.create(_e(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,_;const L=e??{};return new f(me.createCore({disabled:(t=L.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=L.hidden)!==null&&r!==void 0?r:!1,parent:(_=L.parent)!==null&&_!==void 0?_:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,l(e,"disabled")),pe(this,"hidden",l(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const w=F(""),M={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class D{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(r=>{t.classList.remove(w(void 0,M[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(w(void 0,M[r]))})}),this.viewProps.handleDispose(()=>{I(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Be({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const R="http://www.w3.org/2000/svg";function a(n){n.offsetHeight}function g(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function h(n){return n.ontouchstart!==void 0}function b(){return globalThis}function d(){return b().document}function v(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const T={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function E(n,e){const t=n.createElementNS(R,"svg");return t.innerHTML=T[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function Y(n){n.parentElement&&n.parentElement.removeChild(n)}function W(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function re(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ne(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=F("lbl");function be(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(_=>n.createTextNode(_)).forEach((_,L)=>{L>0&&t.appendChild(n.createElement("br")),t.appendChild(_)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(se("l")),pe(t.props,"label",L=>{G(L)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),re(r),r.appendChild(be(e,L)))}),this.element.appendChild(r),this.labelElement=r;const _=e.createElement("div");_.classList.add(se("v")),this.element.appendChild(_),this.valueElement=_}}class ye extends D{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const De={id:"button",type:"blade",accept(n){const e=oe,t=Ce(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ye(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),valueController:new N(n.document,{props:me.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ye)||!(n.controller.valueController instanceof N)?null:new Z(n.controller)}};class $e extends D{constructor(e){super(e),this.value=e.value}}function Ve(){return new me({positions:_e([],{equals:q})})}class nt extends me{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=me.createCore(t);return new nt(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};pe(this,"expanded",r),pe(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ne(n,e){let t=0;return g(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),a(e),t=e.clientHeight,n.set("temporaryExpanded",null),a(e)}),t}function it(n,e){e.style.height=n.styleHeight}function st(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ne(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),a(e)}),n.emitter.on("change",()=>{it(n,e)}),it(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class at extends c{constructor(e,t){super(e),this.rackApi_=t}}function Je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Xe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Qe(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function ft(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class ot{constructor(e){this.emitter=new O,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw U.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const _=this.extract_(e);_&&(_.emitter.on("add",this.onSubListAdd_),_.emitter.on("remove",this.onSubListRemove_),_.allItems().forEach(L=>{this.cache_.add(L)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class lt extends c{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new y(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class et extends ye{constructor(e,t){super(e,t),this.binding=t.binding}}class dt extends c{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new x(this,t,this.controller_.binding.target.presetKey)})}}class qe extends ye{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Ze(n){return n instanceof Tt?n.apiSet_:n instanceof at?n.rackApi_.apiSet_:null}function pt(n,e){const t=n.find(r=>r.controller_===e);if(!t)throw U.shouldNeverHappen();return t}function Et(n,e,t){if(!V.isBindable(n))throw U.notBindable();return new V(n,e,t)}class Tt extends c{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new O,this.apiSet_=new ot(Ze),this.pool_=t;const r=this.controller_.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),r.emitter.on("inputchange",this.onRackInputChange_),r.emitter.on("monitorupdate",this.onRackMonitorUpdate_),r.children.forEach(_=>{this.setUpApi_(_)})}get children(){return this.controller_.rack.children.map(e=>pt(this.apiSet_,e))}addInput(e,t,r){const _=r??{},L=this.controller_.view.element.ownerDocument,j=this.pool_.createInput(L,Et(e,t,_.presetKey),_),ge=new lt(j);return this.add(ge,_.index)}addMonitor(e,t,r){const _=r??{},L=this.controller_.view.element.ownerDocument,j=this.pool_.createMonitor(L,Et(e,t),_),ge=new dt(j);return this.add(ge,_.index)}addFolder(e){return Xe(this,e)}addButton(e){return Je(this,e)}addSeparator(e){return Qe(this,e)}addTab(e){return ft(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const r=this.apiSet_.find(_=>_.controller_===e.controller_);return r&&this.apiSet_.remove(r),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,r=this.pool_.createBlade(t,e),_=this.pool_.createBladeApi(r);return this.add(_,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}setUpApi_(e){this.apiSet_.find(r=>r.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=pt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof et){const r=pt(this.apiSet_,t),_=t.binding;this.emitter_.emit("change",{event:new y(r,_.target.read(),_.target.presetKey,e.options.last)})}else if(t instanceof $e){const r=pt(this.apiSet_,t);this.emitter_.emit("change",{event:new y(r,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof qe))throw U.shouldNeverHappen();const t=pt(this.apiSet_,e.bladeController),r=e.bladeController.binding;this.emitter_.emit("update",{event:new x(t,r.target.read(),r.target.presetKey)})}}class Rt extends at{constructor(e,t){super(e,new Tt(e.rackController,t)),this.emitter_=new O,this.controller_.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",{event:new S(this,r.sender.rawValue)})}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}}class vt extends D{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class yt{constructor(e,t){const r=F(t.viewName);this.element=e.createElement("div"),this.element.classList.add(r()),t.viewProps.bindClassModifiers(this.element)}}function zt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof et&&r.binding===e)return r}return null}function Vt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof qe&&r.binding===e)return r}return null}function It(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof $e&&r.value===e)return r}return null}function Yt(n){return n instanceof ct?n.rack:n instanceof vt?n.rackController.rack:null}function Dt(n){const e=Yt(n);return e?e.bcSet_:null}class Bt{constructor(e){var t,r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new O,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new ot(Dt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),$(e,"parent")?e.parent=this:(e.parent_=this,Be({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){$(e,"parent")?e.parent=null:(e.parent_=null,Be({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),r instanceof et)r.binding.emitter.on("change",this.onChildInputChange_);else if(r instanceof qe)r.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(r instanceof $e)r.value.emitter.on("change",this.onChildValueChange_);else{const _=Yt(r);if(_){const L=_.emitter;L.on("layout",this.onDescendantLayout_),L.on("inputchange",this.onDescendantInputChange_),L.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const r=e.item;if(r instanceof et)r.binding.emitter.off("change",this.onChildInputChange_);else if(r instanceof qe)r.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(r instanceof $e)r.value.emitter.off("change",this.onChildValueChange_);else{const _=Yt(r);if(_){const L=_.emitter;L.off("layout",this.onDescendantLayout_),L.off("inputchange",this.onDescendantInputChange_),L.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(_=>!_.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(_=>{const L=[];_===t&&(L.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&L.push("veryfirst")),_===r&&(L.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&L.push("verylast")),_.blade.set("positions",L)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=zt(this.find(et),e.sender);if(!t)throw U.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Vt(this.find(qe),e.sender);if(!t)throw U.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=It(this.find($e),e.sender);if(!t)throw U.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class ct extends D{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new yt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=new Bt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.rack=r,this.viewProps.handleDispose(()=>{for(let _=this.rack.children.length-1;_>=0;_--)this.rack.children[_].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&Y(e.bladeController.view.element)}}const Ut=F("cnt");class Pn{constructor(e,t){var r;this.className_=F((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Ut()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),pe(this.foldable_,"completed",Ee(this.element,this.className_(void 0,"cpl")));const _=e.createElement("button");_.classList.add(this.className_("b")),pe(t.props,"title",Oe=>{G(Oe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const L=e.createElement("div");L.classList.add(this.className_("i")),this.element.appendChild(L);const j=e.createElement("div");j.classList.add(this.className_("t")),Re(t.props.value("title"),j),this.buttonElement.appendChild(j),this.titleElement=j;const ge=e.createElement("div");ge.classList.add(this.className_("m")),this.buttonElement.appendChild(ge);const ze=t.containerElement;ze.classList.add(this.className_("c")),this.element.appendChild(ze),this.containerElement=ze}}class Xt extends vt{constructor(e,t){var r;const _=nt.create((r=t.expanded)!==null&&r!==void 0?r:!0),L=new ct(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:L,view:new Pn(e,{containerElement:L.view.element,foldable:_,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=_,st(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Sn={id:"folder",type:"blade",accept(n){const e=oe,t=Ce(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Xt(n.document,{blade:n.blade,expanded:n.params.expanded,props:me.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Xt?new Rt(n.controller,n.pool):null}};class jt extends $e{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Zt extends c{}const Qt=F("spr");class Ft{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(Qt("r")),this.element.appendChild(r)}}class En extends D{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ft(e,{viewProps:t.viewProps})}))}}const Ds={id:"separator",type:"blade",accept(n){const t=Ce(n,{view:oe.required.constant("separator")});return t?{params:t}:null},controller(n){return new En(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof En?new Zt(n.controller):null}},sn=F("tbi");class us{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn()),t.viewProps.bindClassModifiers(this.element),pe(t.props,"selected",L=>{L?this.element.classList.add(sn(void 0,"sel")):this.element.classList.remove(sn(void 0,"sel"))});const r=e.createElement("button");r.classList.add(sn("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const _=e.createElement("div");_.classList.add(sn("t")),Re(t.props.value("title"),_),this.buttonElement.appendChild(_),this.titleElement=_}}class kn{constructor(e,t){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new us(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Us{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new kn(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new ct(e,{blade:Ve(),viewProps:f.create()}),this.props=t.props,pe(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.contentController.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ot{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}class Tn extends at{constructor(e,t){super(e,new Tt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new O,this.pageApiMap_=new Map,this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(r=>{this.setUpPageApi_(r)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw U.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,r=new Us(t,{itemProps:me.fromObject({selected:!1,title:e.title}),props:me.fromObject({selected:!1})});this.controller_.add(r,e.index);const _=this.pageApiMap_.get(r);if(!_)throw U.shouldNeverHappen();return _}removePage(e){this.controller_.remove(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(_=>_.controller_===e.contentController);if(!t)throw U.shouldNeverHappen();const r=new Ot(e,t);this.pageApiMap_.set(e,r)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw U.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const Ls=-1;class ds{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=_e(!0),this.selectedIndex=_e(Ls),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ls,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,_)=>{r.rawValue=_===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Jt=F("tab");class Cn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jt(),Ut()),t.viewProps.bindClassModifiers(this.element),he(t.empty,Ee(this.element,Jt(void 0,"nop")));const r=e.createElement("div");r.classList.add(Jt("t")),this.element.appendChild(r),this.itemsElement=r;const _=e.createElement("div");_.classList.add(Jt("i")),this.element.appendChild(_);const L=t.contentsElement;L.classList.add(Jt("c")),this.element.appendChild(L),this.contentsElement=L}}class rn extends vt{constructor(e,t){const r=new ct(e,{blade:t.blade,viewProps:t.viewProps}),_=new ds;super({blade:t.blade,rackController:r,view:new Cn(e,{contentsElement:r.view.element,empty:_.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ot(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=_}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;Y(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Gs={id:"tab",type:"blade",accept(n){const e=oe,t=Ce(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new rn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const r=new Us(n.document,{itemProps:me.fromObject({selected:!1,title:t.title}),props:me.fromObject({selected:!1})});e.add(r)}),e},api(n){return n.controller instanceof rn?new Tn(n.controller,n.pool):null}};function Bn(n,e){const t=n.accept(e.params);if(!t)return null;const r=oe.optional.boolean(e.params.disabled).value,_=oe.optional.boolean(e.params.hidden).value;return n.controller({blade:Ve(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r,hidden:_}),viewProps:f.create({disabled:r,hidden:_})})}class vr{constructor(){this.disabled=!1,this.emitter=new O}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class zs{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new O,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class gr{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new O,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function ps(n,e){for(;n.length<e;)n.push(void 0)}function qn(n){const e=[];return ps(e,n),_e(e)}function hs(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Is(n,e){const t=[...hs(n),e];return t.length>n.length?t.splice(0,t.length-n.length):ps(t,n.length),t}class wr{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new O,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,r=this.reader_(e);this.value.rawValue=Is(t,r),this.emitter.emit("update",{rawValue:r,sender:this})}onTick_(e){this.read()}}class $t{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function Nt(n,e){if(n instanceof e)return n;if(n instanceof $t){const t=n.constraints.reduce((r,_)=>r||(_ instanceof e?_:null),null);if(t)return t}return null}class hn{constructor(e){this.values=me.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class An{constructor(e){this.values=me.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(_=>_.value===e).length>0?e:t[0].value}}class Fs{constructor(e){this.values=me.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let _=e;return G(r)||(_=Math.max(_,r)),G(t)||(_=Math.min(_,t)),_}}class gt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}const fs=F("lst");class xr{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(fs()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(fs("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const _=e.createElement("div");_.classList.add(fs("m")),_.appendChild(E(e,"dropdown")),this.element.appendChild(_),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,pe(this.props_,"options",L=>{W(this.selectElement),L.forEach(j=>{const ge=e.createElement("option");ge.textContent=j.text,this.selectElement.appendChild(ge)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Mn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new xr(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Os=F("pop");class Vs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Os()),t.viewProps.bindClassModifiers(this.element),he(t.shows,Ee(this.element,Os(void 0,"v")))}}class Wn{constructor(e,t){this.shows=_e(!1),this.viewProps=t.viewProps,this.view=new Vs(e,{shows:this.shows,viewProps:this.viewProps})}}const _s=F("txt");class $s{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(_s("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class fn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new $s(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const r=e.currentTarget.value,_=this.parser_(r);G(_)||(this.value.rawValue=_),this.view.refresh()}}function Ns(n){return String(n)}function Kn(n){return n==="false"?!1:!!n}function ms(n){return Ns(n)}class jn{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const yr={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class qs{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=yr[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const an={"+":n=>n,"-":n=>-n,"~":n=>~n};class _n{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=an[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function bs(n){return(e,t)=>{for(let r=0;r<n.length;r++){const _=n[r](e,t);if(_!=="")return _}return""}}function k(n,e){var t;const r=n.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function K(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function J(n,e){var t;const r=n.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function ie(n,e){const t=J(n,e);if(t!=="")return t;const r=n.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const _=J(n,e);return _===""?"":r+_}function le(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=ie(n,e);return r===""?"":t+r}function ue(n,e){const t=n.substr(e,1);if(t==="0")return t;const r=K(n,e);return e+=r.length,r===""?"":r+J(n,e)}function fe(n,e){const t=ue(n,e);if(e+=t.length,t==="")return"";const r=n.substr(e,1);if(e+=r.length,r!==".")return"";const _=J(n,e);return e+=_.length,t+r+_+le(n,e)}function ve(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const r=J(n,e);return e+=r.length,r===""?"":t+r+le(n,e)}function Te(n,e){const t=ue(n,e);return e+=t.length,t===""?"":t+le(n,e)}const Ge=bs([fe,ve,Te]);function Ye(n,e){var t;const r=n.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Ue(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=Ye(n,e);return r===""?"":t+r}function je(n,e){var t;const r=n.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function ht(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=je(n,e);return r===""?"":t+r}function We(n,e){var t;const r=n.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function wt(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=We(n,e);return r===""?"":t+r}const Fe=bs([Ue,ht,wt]),Pt=bs([Fe,Ge]);function en(n,e){const t=Pt(n,e);return e+=t.length,t===""?null:{evaluable:new jn(t),cursor:e}}function Hn(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const r=Dn(n,e);if(!r)return null;e=r.cursor,e+=k(n,e).length;const _=n.substr(e,1);return e+=_.length,_!==")"?null:{evaluable:r.evaluable,cursor:e}}function tn(n,e){var t;return(t=en(n,e))!==null&&t!==void 0?t:Hn(n,e)}function Ct(n,e){const t=tn(n,e);if(t)return t;const r=n.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const _=Ct(n,e);return _?(e=_.cursor,{cursor:e,evaluable:new _n(r,_.evaluable)}):null}function Rn(n,e,t){t+=k(e,t).length;const r=n.filter(_=>e.startsWith(_,t))[0];return r?(t+=r.length,t+=k(e,t).length,{cursor:t,operator:r}):null}function Yn(n,e){return(t,r)=>{const _=n(t,r);if(!_)return null;r=_.cursor;let L=_.evaluable;for(;;){const j=Rn(e,t,r);if(!j)break;r=j.cursor;const ge=n(t,r);if(!ge)return null;r=ge.cursor,L=new qs(j.operator,L,ge.evaluable)}return L?{cursor:r,evaluable:L}:null}}const on=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Yn(n,e),Ct);function Dn(n,e){return e+=k(n,e).length,on(n,e)}function Xn(n){const e=Dn(n,0);return!e||e.cursor+k(n,e.cursor).length!==n.length?null:e.evaluable}function Ht(n){var e;const t=Xn(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Zn(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Ht(n);if(!G(e))return e}return 0}function bo(n){return String(n)}function kt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const vo=kt(0);function Ws(n){return vo(n)+"%"}function fi(n){return String(n)}function Pr(n){return n}function vs({primary:n,secondary:e,forward:t,backward:r}){let _=!1;function L(j){_||(_=!0,j(),_=!1)}n.emitter.on("change",j=>{L(()=>{e.setRawValue(t(n,e),j.options)})}),e.emitter.on("change",j=>{L(()=>{n.setRawValue(r(n,e),j.options)}),L(()=>{e.setRawValue(t(n,e),j.options)})}),L(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Lt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function gs(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function ln(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function go(n){return n==="ArrowUp"||n==="ArrowDown"}function _i(n){return go(n)||n==="ArrowLeft"||n==="ArrowRight"}function Sr(n,e){var t,r;const _=e.ownerDocument.defaultView,L=e.getBoundingClientRect();return{x:n.pageX-(((t=_&&_.scrollX)!==null&&t!==void 0?t:0)+L.left),y:n.pageY-(((r=_&&_.scrollY)!==null&&r!==void 0?r:0)+L.top)}}class Un{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new O,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Sr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Sr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Sr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,_=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-_.left,y:r.clientY-_.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function _t(n,e,t,r,_){const L=(n-e)/(t-e);return r+L*(_-r)}function mi(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function St(n,e,t){return Math.min(Math.max(n,e),t)}function bi(n,e){return(n%e+e)%e}const qt=F("txt");class wo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(qt(),qt(void 0,"num")),t.arrayPosition&&this.element.classList.add(qt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(qt("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(qt()),this.inputElement.classList.add(qt("i"));const _=e.createElement("div");_.classList.add(qt("k")),this.element.appendChild(_),this.knobElement=_;const L=e.createElementNS(R,"svg");L.classList.add(qt("g")),this.knobElement.appendChild(L);const j=e.createElementNS(R,"path");j.classList.add(qt("gb")),L.appendChild(j),this.guideBodyElem_=j;const ge=e.createElementNS(R,"path");ge.classList.add(qt("gh")),L.appendChild(ge),this.guideHeadElem_=ge;const ze=e.createElement("div");ze.classList.add(F("tt")()),this.knobElement.appendChild(ze),this.tooltipElem_=ze,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(qt(void 0,"drg"));return}this.element.classList.add(qt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),r=t+(t>0?-1:t<0?1:0),_=St(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+_},0 L${r},4 L${r+_},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const L=this.props_.get("formatter");this.tooltipElem_.textContent=L(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class ws{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=_e(null),this.view=new wo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const _=new Un(this.view.knobElement);_.emitter.on("down",this.onPointerDown_),_.emitter.on("move",this.onPointerMove_),_.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const _=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),L=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("maxValue");let j=e;return _!==void 0&&(j=Math.max(j,_)),L!==void 0&&(j=Math.min(j,L)),j}onInputChange_(e){const r=e.currentTarget.value,_=this.parser_(r);G(_)||(this.value.rawValue=this.constrainValue_(_)),this.view.refresh()}onInputKeyDown_(e){const t=Lt(this.baseStep_,gs(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Lt(this.baseStep_,gs(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Er=F("sld");class xo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Er()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Er("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const _=e.createElement("div");_.classList.add(Er("k")),this.trackElement.appendChild(_),this.knobElement=_,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=St(_t(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new xo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Un(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(_t(St(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Lt(this.baseStep_,ln(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Lt(this.baseStep_,ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const kr=F("sldtxt");class Po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(kr());const r=e.createElement("div");r.classList.add(kr("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const _=e.createElement("div");_.classList.add(kr("t")),this.textView_=t.textView,_.appendChild(this.textView_.element),this.element.appendChild(_)}}class Tr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new yo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new ws(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Po(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function xs(n,e){n.write(e)}function Ks(n){const e=oe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function vi(n){if(n==="inline"||n==="popup")return n}function mn(n){const e=oe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function gi(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Cr(n){return G(n)?null:new An(gi(n))}function So(n){const e=n?Nt(n,gt):null;return e?e.step:null}function js(n,e){const t=n&&Nt(n,gt);return t?mi(t.step):Math.max(mi(e),2)}function Qn(n){const e=So(n);return e??1}function Jn(n,e){var t;const r=n&&Nt(n,gt),_=Math.abs((t=r==null?void 0:r.step)!==null&&t!==void 0?t:e);return _===0?.1:Math.pow(10,Math.floor(Math.log10(_))-1)}const Hs=F("ckb");class Eo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(Hs("l")),this.element.appendChild(r);const _=e.createElement("input");_.classList.add(Hs("i")),_.type="checkbox",r.appendChild(_),this.inputElement=_,t.viewProps.bindDisabled(this.inputElement);const L=e.createElement("div");L.classList.add(Hs("w")),r.appendChild(L);const j=E(e,"check");L.appendChild(j),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class ko{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Eo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function To(n){const e=[],t=Cr(n.options);return t&&e.push(t),new $t(e)}const Co={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=Ce(e,{options:oe.optional.custom(Ks)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Kn,constraint:n=>To(n.params),writer:n=>xs},controller:n=>{const e=n.document,t=n.value,r=n.constraint,_=r&&Nt(r,An);return _?new Mn(e,{props:new me({options:_.values.value("options")}),value:t,viewProps:n.viewProps}):new ko(e,{value:t,viewProps:n.viewProps})}},Ln=F("col");class Bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ln()),t.foldable.bindExpandedClass(this.element,Ln(void 0,"expanded")),pe(t.foldable,"completed",Ee(this.element,Ln(void 0,"cpl")));const r=e.createElement("div");r.classList.add(Ln("h")),this.element.appendChild(r);const _=e.createElement("div");_.classList.add(Ln("s")),r.appendChild(_),this.swatchElement=_;const L=e.createElement("div");if(L.classList.add(Ln("t")),r.appendChild(L),this.textElement=L,t.pickerLayout==="inline"){const j=e.createElement("div");j.classList.add(Ln("p")),this.element.appendChild(j),this.pickerElement=j}else this.pickerElement=null}}function Ao(n,e,t){const r=St(n/255,0,1),_=St(e/255,0,1),L=St(t/255,0,1),j=Math.max(r,_,L),ge=Math.min(r,_,L),ze=j-ge;let Oe=0,tt=0;const rt=(ge+j)/2;return ze!==0&&(tt=ze/(1-Math.abs(j+ge-1)),r===j?Oe=(_-L)/ze:_===j?Oe=2+(L-r)/ze:Oe=4+(r-_)/ze,Oe=Oe/6+(Oe<0?1:0)),[Oe*360,tt*100,rt*100]}function Mo(n,e,t){const r=(n%360+360)%360,_=St(e/100,0,1),L=St(t/100,0,1),j=(1-Math.abs(2*L-1))*_,ge=j*(1-Math.abs(r/60%2-1)),ze=L-j/2;let Oe,tt,rt;return r>=0&&r<60?[Oe,tt,rt]=[j,ge,0]:r>=60&&r<120?[Oe,tt,rt]=[ge,j,0]:r>=120&&r<180?[Oe,tt,rt]=[0,j,ge]:r>=180&&r<240?[Oe,tt,rt]=[0,ge,j]:r>=240&&r<300?[Oe,tt,rt]=[ge,0,j]:[Oe,tt,rt]=[j,0,ge],[(Oe+ze)*255,(tt+ze)*255,(rt+ze)*255]}function Ro(n,e,t){const r=St(n/255,0,1),_=St(e/255,0,1),L=St(t/255,0,1),j=Math.max(r,_,L),ge=Math.min(r,_,L),ze=j-ge;let Oe;ze===0?Oe=0:j===r?Oe=60*(((_-L)/ze%6+6)%6):j===_?Oe=60*((L-r)/ze+2):Oe=60*((r-_)/ze+4);const tt=j===0?0:ze/j,rt=j;return[Oe,tt*100,rt*100]}function wi(n,e,t){const r=bi(n,360),_=St(e/100,0,1),L=St(t/100,0,1),j=L*_,ge=j*(1-Math.abs(r/60%2-1)),ze=L-j;let Oe,tt,rt;return r>=0&&r<60?[Oe,tt,rt]=[j,ge,0]:r>=60&&r<120?[Oe,tt,rt]=[ge,j,0]:r>=120&&r<180?[Oe,tt,rt]=[0,j,ge]:r>=180&&r<240?[Oe,tt,rt]=[0,ge,j]:r>=240&&r<300?[Oe,tt,rt]=[ge,0,j]:[Oe,tt,rt]=[j,0,ge],[(Oe+ze)*255,(tt+ze)*255,(rt+ze)*255]}function Do(n,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[n,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Uo(n,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[n,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function Gn(n){return[n[0],n[1],n[2]]}function xi(n,e){return[n[0],n[1],n[2],e]}const Lo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Do,rgb:Mo},hsv:{hsl:Uo,hsv:(n,e,t)=>[n,e,t],rgb:wi},rgb:{hsl:Ao,hsv:Ro,rgb:(n,e,t)=>[n,e,t]}};function Ys(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Go(n,e){return n===e?e:bi(n,e)}function zo(n,e,t){var r;const _=Ys(e,t);return[e==="rgb"?St(n[0],0,_[0]):Go(n[0],_[0]),St(n[1],0,_[1]),St(n[2],0,_[2]),St((r=n[3])!==null&&r!==void 0?r:1,0,1)]}function yi(n,e,t,r){const _=Ys(e,t),L=Ys(e,r);return n.map((j,ge)=>j/_[ge]*L[ge])}function Io(n,e,t){const r=yi(n,e.mode,e.type,"int"),_=Lo[e.mode][t.mode](...r);return yi(_,t.mode,"int",t.type)}function Xs(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class He{static black(e="int"){return new He([0,0,0],"rgb",e)}static fromObject(e,t="int"){const r="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new He(r,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Xs(e,"r")&&Xs(e,"g")&&Xs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Xs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const r=e.comps_,_=t.comps_;for(let L=0;L<r.length;L++)if(r[L]!==_[L])return!1;return!0}constructor(e,t,r="int"){this.mode=t,this.type=r,this.comps_=zo(e,t,r)}getComponents(e,t="int"){return xi(Io(Gn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const bn=F("colp");class Fo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(bn("hsv"));const _=e.createElement("div");_.classList.add(bn("sv")),this.svPaletteView_=t.svPaletteView,_.appendChild(this.svPaletteView_.element),r.appendChild(_);const L=e.createElement("div");L.classList.add(bn("h")),this.hPaletteView_=t.hPaletteView,L.appendChild(this.hPaletteView_.element),r.appendChild(L),this.element.appendChild(r);const j=e.createElement("div");if(j.classList.add(bn("rgb")),this.textView_=t.textView,j.appendChild(this.textView_.element),this.element.appendChild(j),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ge=e.createElement("div");ge.classList.add(bn("a"));const ze=e.createElement("div");ze.classList.add(bn("ap")),ze.appendChild(this.alphaViews_.palette.element),ge.appendChild(ze);const Oe=e.createElement("div");Oe.classList.add(bn("at")),Oe.appendChild(this.alphaViews_.text.element),ge.appendChild(Oe),this.element.appendChild(ge)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Oo(n){return n==="int"?"int":n==="float"?"float":void 0}function Br(n){const e=oe;return Ce(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Oo)}),expanded:e.optional.boolean,picker:e.optional.custom(vi)})}function zn(n){return n?.1:1}function In(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Vo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Wt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const $o={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Pi(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),r=e[2];return $o[r](t)}function Si(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Wt(e[1],255),Wt(e[2],255),Wt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ei(n){return e=>{const t=Si(e);return t?new He(t,"rgb",n):null}}function ki(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Wt(e[1],255),Wt(e[2],255),Wt(e[3],255),Wt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ti(n){return e=>{const t=ki(e);return t?new He(t,"rgb",n):null}}function Ci(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Pi(e[1]),Wt(e[2],100),Wt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Bi(n){return e=>{const t=Ci(e);return t?new He(t,"hsl",n):null}}function Ai(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Pi(e[1]),Wt(e[2],100),Wt(e[3],100),Wt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Mi(n){return e=>{const t=Ai(e);return t?new He(t,"hsl",n):null}}function Ri(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function No(n){const e=Ri(n);return e?new He(e,"rgb","int"):null}function Di(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),_t(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),_t(parseInt(t[4],16),0,255,0,1)]:null}function qo(n){const e=Di(n);return e?new He(e,"rgb","int"):null}function Ui(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Li(n){return e=>{const t=Ui(e);return t?new He(t,"rgb",n):null}}function Gi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function zi(n){return e=>{const t=Gi(e);return t?new He(t,"rgb",n):null}}const Wo=[{parser:Ri,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Di,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Si,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ki,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Ci,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Ai,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Ui,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Gi,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ko(n){return Wo.reduce((e,{parser:t,result:r})=>e||(t(n)?r:null),null)}function Ar(n,e="int"){const t=Ko(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Ii={int:[No,qo,Ei("int"),Ti("int"),Bi("int"),Mi("int"),Li("int"),zi("int")],float:[Ei("float"),Ti("float"),Bi("float"),Mi("float"),Li("float"),zi("float")]};function jo(n){const e=Ii[n];return t=>{if(typeof t!="string")return He.black(n);const r=e.reduce((_,L)=>_||L(t),null);return r??He.black(n)}}function Mr(n){const e=Ii[n];return t=>e.reduce((r,_)=>r||_(t),null)}function Fi(n){const e=St(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Oi(n,e="#"){const t=Gn(n.getComponents("rgb")).map(Fi).join("");return`${e}${t}`}function Rr(n,e="#"){const t=n.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(Fi).join("");return`${e}${r}`}function Vi(n,e){const t=kt(e==="float"?2:0);return`rgb(${Gn(n.getComponents("rgb",e)).map(_=>t(_)).join(", ")})`}function Ho(n){return e=>Vi(e,n)}function Zs(n,e){const t=kt(2),r=kt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((L,j)=>(j===3?t:r)(L)).join(", ")})`}function Yo(n){return e=>Zs(e,n)}function Xo(n){const e=[kt(0),Ws,Ws];return`hsl(${Gn(n.getComponents("hsl")).map((r,_)=>e[_](r)).join(", ")})`}function Zo(n){const e=[kt(0),Ws,Ws,kt(2)];return`hsla(${n.getComponents("hsl").map((r,_)=>e[_](r)).join(", ")})`}function $i(n,e){const t=kt(e==="float"?2:0),r=["r","g","b"];return`{${Gn(n.getComponents("rgb",e)).map((L,j)=>`${r[j]}: ${t(L)}`).join(", ")}}`}function Qo(n){return e=>$i(e,n)}function Ni(n,e){const t=kt(2),r=kt(e==="float"?2:0),_=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((j,ge)=>{const ze=ge===3?t:r;return`${_[ge]}: ${ze(j)}`}).join(", ")}}`}function Jo(n){return e=>Ni(e,n)}const el=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Oi},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Rr},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Xo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Zo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Ho(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Yo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Qo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Jo(e)}],[])];function Dr(n){return el.reduce((e,t)=>e||(Vo(t.format,n)?t.stringifier:null),null)}const ys=F("apl");class tl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ys()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(ys("b")),this.element.appendChild(r);const _=e.createElement("div");_.classList.add(ys("c")),r.appendChild(_),this.colorElem_=_;const L=e.createElement("div");L.classList.add(ys("m")),this.element.appendChild(L),this.markerElem_=L;const j=e.createElement("div");j.classList.add(ys("p")),this.markerElem_.appendChild(j),this.previewElem_=j,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new He([t[0],t[1],t[2],0],"rgb"),_=new He([t[0],t[1],t[2],255],"rgb"),L=["to right",Zs(r),Zs(_)];this.colorElem_.style.background=`linear-gradient(${L.join(",")})`,this.previewElem_.style.backgroundColor=Zs(e);const j=_t(t[3],0,1,0,100);this.markerElem_.style.left=`${j}%`}onValueChange_(){this.update_()}}class nl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new tl(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Un(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,_=this.value.rawValue,[L,j,ge]=_.getComponents("hsv");this.value.setRawValue(new He([L,j,ge,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Lt(zn(!0),ln(e));if(t===0)return;const r=this.value.rawValue,[_,L,j,ge]=r.getComponents("hsv");this.value.setRawValue(new He([_,L,j,ge+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Lt(zn(!0),ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const es=F("coltxt");function sl(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((r,_)=>{const L=n.createElement("option");return L.textContent=_.text,L.value=_.value,r.appendChild(L),r},n.createDocumentFragment())),e}class rl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(es()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(es("m")),this.modeElem_=sl(e),this.modeElem_.classList.add(es("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const _=e.createElement("div");_.classList.add(es("mm")),_.appendChild(E(e,"dropdown")),r.appendChild(_),this.element.appendChild(r);const L=e.createElement("div");L.classList.add(es("w")),this.element.appendChild(L),this.textsElem_=L,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,j=>{this.modeElem_.value=j})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){W(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(es("c")),r.appendChild(t.element),this.textsElem_.appendChild(r)})}}function il(n){return kt(n==="float"?2:0)}function al(n,e,t){const r=Ys(n,e)[t];return new hn({min:0,max:r})}function Ur(n,e,t){return new ws(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:zn(!1),parser:e.parser,props:me.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:il(e.colorType)}),value:_e(0,{constraint:al(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ol{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=_e(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new rl(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},r=[Ur(e,t,0),Ur(e,t,1),Ur(e,t,2)];return r.forEach((_,L)=>{vs({primary:this.value,secondary:_.value,forward:j=>j.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[L],backward:(j,ge)=>{const ze=this.colorMode.rawValue,Oe=j.rawValue.getComponents(ze,this.colorType_);return Oe[L]=ge.rawValue,new He(xi(Gn(Oe),Oe[3]),ze,this.colorType_)}})}),r}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Lr=F("hpl");class ll{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Lr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(Lr("c")),this.element.appendChild(r);const _=e.createElement("div");_.classList.add(Lr("m")),this.element.appendChild(_),this.markerElem_=_,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Vi(new He([t,100,100],"hsv"));const r=_t(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class cl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ll(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Un(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=_t(St(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),_=this.value.rawValue,[,L,j,ge]=_.getComponents("hsv");this.value.setRawValue(new He([r,L,j,ge],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Lt(zn(!1),ln(e));if(t===0)return;const r=this.value.rawValue,[_,L,j,ge]=r.getComponents("hsv");this.value.setRawValue(new He([_+t,L,j,ge],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Lt(zn(!1),ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Gr=F("svp"),qi=64;class ul{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Gr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=qi,r.width=qi,r.classList.add(Gr("c")),this.element.appendChild(r),this.canvasElement=r;const _=e.createElement("div");_.classList.add(Gr("m")),this.element.appendChild(_),this.markerElem_=_,this.update_()}update_(){const e=v(this.canvasElement);if(!e)return;const r=this.value.rawValue.getComponents("hsv"),_=this.canvasElement.width,L=this.canvasElement.height,j=e.getImageData(0,0,_,L),ge=j.data;for(let tt=0;tt<L;tt++)for(let rt=0;rt<_;rt++){const Fn=_t(rt,0,_,0,100),Ss=_t(tt,0,L,100,0),Es=wi(r[0],Fn,Ss),Qs=(tt*_+rt)*4;ge[Qs]=Es[0],ge[Qs+1]=Es[1],ge[Qs+2]=Es[2],ge[Qs+3]=255}e.putImageData(j,0,0);const ze=_t(r[1],0,100,0,100);this.markerElem_.style.left=`${ze}%`;const Oe=_t(r[2],0,100,100,0);this.markerElem_.style.top=`${Oe}%`}onValueChange_(){this.update_()}}class dl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ul(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Un(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=_t(e.point.x,0,e.bounds.width,0,100),_=_t(e.point.y,0,e.bounds.height,100,0),[L,,,j]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new He([L,r,_,j],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){_i(e.key)&&e.preventDefault();const[t,r,_,L]=this.value.rawValue.getComponents("hsv"),j=zn(!1),ge=Lt(j,ln(e)),ze=Lt(j,gs(e));ge===0&&ze===0||this.value.setRawValue(new He([t,r+ge,_+ze,L],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=zn(!1),r=Lt(t,ln(e)),_=Lt(t,gs(e));r===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class pl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new cl(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new dl(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new nl(e,{value:this.value,viewProps:this.viewProps}),text:new ws(e,{parser:Ht,baseStep:.1,props:me.fromObject({draggingScale:.01,formatter:kt(2)}),value:_e(0,{constraint:new hn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&vs({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.rawValue.getComponents()[3],backward:(r,_)=>{const L=r.rawValue.getComponents();return L[3]=_.rawValue,new He(L,r.rawValue.mode)}}),this.textC_=new ol(e,{colorType:t.colorType,parser:Ht,value:this.value,viewProps:this.viewProps}),this.view=new Fo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const zr=F("colsw");class hl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(zr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(zr("sw")),this.element.appendChild(r),this.swatchElem_=r;const _=e.createElement("button");_.classList.add(zr("b")),t.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Rr(e)}onValueChange_(){this.update_()}}class fl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new hl(e,{value:this.value,viewProps:this.viewProps})}}class Ir{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=nt.create(t.expanded),this.swatchC_=new fl(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new fn(e,{parser:t.parser,props:me.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Bo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Wn(e,{viewProps:this.viewProps}):null;const _=new pl(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});_.view.allFocusableElements.forEach(L=>{L.addEventListener("blur",this.onPopupChildBlur_),L.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=_,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(_.view.element),vs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:L=>L.rawValue,backward:(L,j)=>j.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),st(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=ne(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function _l(n,e){return He.isColorObject(n)?He.fromObject(n,e):He.black(e)}function ml(n){return Gn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function bl(n){return n.getComponents("rgb").reduce((e,t,r)=>{const _=Math.floor(r===3?t*255:t)&255;return e<<8|_},0)>>>0}function vl(n){return new He([n>>16&255,n>>8&255,n&255],"rgb")}function gl(n){return new He([n>>24&255,n>>16&255,n>>8&255,_t(n&255,0,255,0,1)],"rgb")}function wl(n){return typeof n!="number"?He.black():vl(n)}function xl(n){return typeof n!="number"?He.black():gl(n)}function yl(n){const e=Dr(n);return e?(t,r)=>{xs(t,e(r))}:null}function Pl(n){const e=n?bl:ml;return(t,r)=>{xs(t,e(r))}}function Sl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function El(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function kl(n,e){return(t,r)=>{n?Sl(t,r,e):El(t,r,e)}}function Fr(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Tl(n){return n?e=>Rr(e,"0x"):e=>Oi(e,"0x")}function Cl(n){return"color"in n||"view"in n&&n.view==="color"}const Bl={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Cl(e))return null;const t=Br(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Fr(n.params)?xl:wl,equals:He.equals,writer:n=>Pl(Fr(n.params))},controller:n=>{const e=Fr(n.params),t="expanded"in n.params?n.params.expanded:void 0,r="picker"in n.params?n.params.picker:void 0;return new Ir(n.document,{colorType:"int",expanded:t??!1,formatter:Tl(e),parser:Mr("int"),pickerLayout:r??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Al(n){return He.isRgbaColorObject(n)}function Ml(n){return e=>_l(e,n)}function Rl(n,e){return t=>n?Ni(t,e):$i(t,e)}const Dl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!He.isColorObject(n))return null;const t=Br(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ml(In(n.params)),equals:He.equals,writer:n=>kl(Al(n.initialValue),In(n.params))},controller:n=>{var e;const t=He.isRgbaColorObject(n.initialValue),r="expanded"in n.params?n.params.expanded:void 0,_="picker"in n.params?n.params.picker:void 0,L=(e=In(n.params))!==null&&e!==void 0?e:"int";return new Ir(n.document,{colorType:L,expanded:r??!1,formatter:Rl(t,L),parser:Mr(L),pickerLayout:_??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ul={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ar(n,In(e));if(!t||!Dr(t))return null;const _=Br(e);return _?{initialValue:n,params:_}:null},binding:{reader:n=>{var e;return jo((e=In(n.params))!==null&&e!==void 0?e:"int")},equals:He.equals,writer:n=>{const e=Ar(n.initialValue,In(n.params));if(!e)throw U.shouldNeverHappen();const t=yl(e);if(!t)throw U.notBindable();return t}},controller:n=>{const e=Ar(n.initialValue,In(n.params));if(!e)throw U.shouldNeverHappen();const t=Dr(e);if(!t)throw U.shouldNeverHappen();const r="expanded"in n.params?n.params.expanded:void 0,_="picker"in n.params?n.params.picker:void 0;return new Ir(n.document,{colorType:e.type,expanded:r??!1,formatter:t,parser:Mr(e.type),pickerLayout:_??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class vn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,_)=>{var L,j;return(j=(L=this.components[_])===null||L===void 0?void 0:L.constrain(r))!==null&&j!==void 0?j:r});return this.asm_.fromComponents(t)}}const Wi=F("pndtxt");class Ll{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Wi()),this.textViews.forEach(r=>{const _=e.createElement("div");_.classList.add(Wi("a")),_.appendChild(r.element),this.element.appendChild(_)})}}function Gl(n,e,t){return new ws(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:_e(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Or{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,_)=>Gl(e,t,_)),this.acs_.forEach((r,_)=>{vs({primary:this.value,secondary:r.value,forward:L=>t.assembly.toComponents(L.rawValue)[_],backward:(L,j)=>{const ge=t.assembly.toComponents(L.rawValue);return ge[_]=j.rawValue,t.assembly.fromComponents(ge)}})}),this.view=new Ll(e,{textViews:this.acs_.map(r=>r.view)})}}function Ki(n,e){return"step"in n&&!G(n.step)?new gt(n.step,e):null}function ji(n){return!G(n.max)&&!G(n.min)?new hn({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Fs({max:n.max,min:n.min}):null}function zl(n){const e=Nt(n,hn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Nt(n,Fs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Il(n,e){const t=[],r=Ki(n,e);r&&t.push(r);const _=ji(n);_&&t.push(_);const L=Cr(n.options);return L&&t.push(L),new $t(t)}const Fl={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=oe,r=Ce(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Ks),step:t.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Zn,constraint:n=>Il(n.params,n.initialValue),writer:n=>xs},controller:n=>{var e;const t=n.value,r=n.constraint,_=r&&Nt(r,An);if(_)return new Mn(n.document,{props:new me({options:_.values.value("options")}),value:t,viewProps:n.viewProps});const L=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:kt(js(r,t.rawValue)),j=r&&Nt(r,hn);return j?new Tr(n.document,{baseStep:Qn(r),parser:Ht,sliderProps:new me({maxValue:j.values.value("max"),minValue:j.values.value("min")}),textProps:me.fromObject({draggingScale:Jn(r,t.rawValue),formatter:L}),value:t,viewProps:n.viewProps}):new ws(n.document,{baseStep:Qn(r),parser:Ht,props:me.fromObject({draggingScale:Jn(r,t.rawValue),formatter:L}),value:t,viewProps:n.viewProps})}};class gn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Hi={toComponents:n=>n.getComponents(),fromComponents:n=>new gn(...n)},ts=F("p2d");class Ol{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ts()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,Ee(this.element,ts(void 0,"expanded")));const r=e.createElement("div");r.classList.add(ts("h")),this.element.appendChild(r);const _=e.createElement("button");_.classList.add(ts("b")),_.appendChild(E(e,"p2dpad")),t.viewProps.bindDisabled(_),r.appendChild(_),this.buttonElement=_;const L=e.createElement("div");if(L.classList.add(ts("t")),r.appendChild(L),this.textElement=L,t.pickerLayout==="inline"){const j=e.createElement("div");j.classList.add(ts("p")),this.element.appendChild(j),this.pickerElement=j}else this.pickerElement=null}}const wn=F("p2dp");class Vl{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(wn()),t.layout==="popup"&&this.element.classList.add(wn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(wn("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const _=e.createElementNS(R,"svg");_.classList.add(wn("g")),this.padElement.appendChild(_),this.svgElem_=_;const L=e.createElementNS(R,"line");L.classList.add(wn("ax")),L.setAttributeNS(null,"x1","0"),L.setAttributeNS(null,"y1","50%"),L.setAttributeNS(null,"x2","100%"),L.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(L);const j=e.createElementNS(R,"line");j.classList.add(wn("ax")),j.setAttributeNS(null,"x1","50%"),j.setAttributeNS(null,"y1","0"),j.setAttributeNS(null,"x2","50%"),j.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(j);const ge=e.createElementNS(R,"line");ge.classList.add(wn("l")),ge.setAttributeNS(null,"x1","50%"),ge.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ge),this.lineElem_=ge;const ze=e.createElement("div");ze.classList.add(wn("m")),this.padElement.appendChild(ze),this.markerElem_=ze,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.maxValue_,_=_t(e,-r,+r,0,100),L=_t(t,-r,+r,0,100),j=this.invertsY_?100-L:L;this.lineElem_.setAttributeNS(null,"x2",`${_}%`),this.lineElem_.setAttributeNS(null,"y2",`${j}%`),this.markerElem_.style.left=`${_}%`,this.markerElem_.style.top=`${j}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Yi(n,e,t){return[Lt(e[0],ln(n)),Lt(e[1],gs(n))*(t?1:-1)]}class $l{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Vl(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Un(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.maxValue_,_=_t(e.point.x,0,e.bounds.width,-r,+r),L=_t(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new gn(_,L),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){_i(e.key)&&e.preventDefault();const[t,r]=Yi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(new gn(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=Yi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Nl{constructor(e,t){var r,_;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=nt.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Wn(e,{viewProps:this.viewProps}):null;const L=new $l(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});L.view.allFocusableElements.forEach(j=>{j.addEventListener("blur",this.onPopupChildBlur_),j.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=L,this.textC_=new Or(e,{assembly:Hi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ol(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),vs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:j=>j.rawValue,backward:(j,ge)=>ge.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),st(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=ne(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class ns{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,r=e.y,_=e.z;return!(typeof t!="number"||typeof r!="number"||typeof _!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Xi={toComponents:n=>n.getComponents(),fromComponents:n=>new ns(...n)};function ql(n){return ns.isObject(n)?new ns(n.x,n.y,n.z):new ns}function Wl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Kl(n,e){return new vn({assembly:Xi,components:[cn("x"in n?n.x:void 0,e.x),cn("y"in n?n.y:void 0,e.y),cn("z"in n?n.z:void 0,e.z)]})}function Vr(n,e){return{baseStep:Qn(e),constraint:e,textProps:me.fromObject({draggingScale:Jn(e,n),formatter:kt(js(e,n))})}}const jl={id:"input-point3d",type:"input",accept:(n,e)=>{if(!ns.isObject(n))return null;const t=oe,r=Ce(e,{x:t.optional.custom(mn),y:t.optional.custom(mn),z:t.optional.custom(mn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ql,constraint:n=>Kl(n.params,n.initialValue),equals:ns.equals,writer:n=>Wl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof vn))throw U.shouldNeverHappen();return new Or(n.document,{assembly:Xi,axes:[Vr(e.rawValue.x,t.components[0]),Vr(e.rawValue.y,t.components[1]),Vr(e.rawValue.z,t.components[2])],parser:Ht,value:e,viewProps:n.viewProps})}};class ss{constructor(e=0,t=0,r=0,_=0){this.x=e,this.y=t,this.z=r,this.w=_}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,r=e.y,_=e.z,L=e.w;return!(typeof t!="number"||typeof r!="number"||typeof _!="number"||typeof L!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Zi={toComponents:n=>n.getComponents(),fromComponents:n=>new ss(...n)};function Hl(n){return ss.isObject(n)?new ss(n.x,n.y,n.z,n.w):new ss}function Yl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Xl(n,e){return new vn({assembly:Zi,components:[cn("x"in n?n.x:void 0,e.x),cn("y"in n?n.y:void 0,e.y),cn("z"in n?n.z:void 0,e.z),cn("w"in n?n.w:void 0,e.w)]})}function Zl(n,e){return{baseStep:Qn(e),constraint:e,textProps:me.fromObject({draggingScale:Jn(e,n),formatter:kt(js(e,n))})}}const Ql={id:"input-point4d",type:"input",accept:(n,e)=>{if(!ss.isObject(n))return null;const t=oe,r=Ce(e,{x:t.optional.custom(mn),y:t.optional.custom(mn),z:t.optional.custom(mn),w:t.optional.custom(mn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Hl,constraint:n=>Xl(n.params,n.initialValue),equals:ss.equals,writer:n=>Yl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof vn))throw U.shouldNeverHappen();return new Or(n.document,{assembly:Zi,axes:e.rawValue.getComponents().map((r,_)=>Zl(r,t.components[_])),parser:Ht,value:e,viewProps:n.viewProps})}};function Jl(n){const e=[],t=Cr(n.options);return t&&e.push(t),new $t(e)}const ec={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const r=Ce(e,{options:oe.optional.custom(Ks)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>fi,constraint:n=>Jl(n.params),writer:n=>xs},controller:n=>{const e=n.document,t=n.value,r=n.constraint,_=r&&Nt(r,An);return _?new Mn(e,{props:new me({options:_.values.value("options")}),value:t,viewProps:n.viewProps}):new fn(e,{parser:L=>L,props:me.fromObject({formatter:Pr}),value:t,viewProps:n.viewProps})}},Ps={monitor:{defaultInterval:200,defaultLineCount:3}},Qi=F("mll");class tc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Qi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(Qi("i")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(_=>{_!==void 0&&r.push(this.formatter_(_))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class $r{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new tc(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Ji=F("sgl");class nc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ji()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Ji("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Nr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new nc(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const sc={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=Ce(e,{lineCount:oe.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Kn},controller:n=>{var e;return n.value.rawValue.length===1?new Nr(n.document,{formatter:ms,value:n.value,viewProps:n.viewProps}):new $r(n.document,{formatter:ms,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ps.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},xn=F("grl");class rc{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(xn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(R,"svg");r.classList.add(xn("g")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(r),this.svgElem_=r;const _=e.createElementNS(R,"polyline");this.svgElem_.appendChild(_),this.lineElem_=_;const L=e.createElement("div");L.classList.add(xn("t"),F("tt")()),this.element.appendChild(L),this.tooltipElem_=L,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,r=this.props_.get("minValue"),_=this.props_.get("maxValue"),L=[];this.value.rawValue.forEach((tt,rt)=>{if(tt===void 0)return;const Fn=_t(rt,0,t,0,e.width),Ss=_t(tt,r,_,e.height,0);L.push([Fn,Ss].join(","))}),this.lineElem_.setAttributeNS(null,"points",L.join(" "));const j=this.tooltipElem_,ge=this.value.rawValue[this.cursor_.rawValue];if(ge===void 0){j.classList.remove(xn("t","a"));return}const ze=_t(this.cursor_.rawValue,0,t,0,e.width),Oe=_t(ge,r,_,e.height,0);j.style.left=`${ze}px`,j.style.top=`${Oe}px`,j.textContent=`${this.formatter_(ge)}`,j.classList.contains(xn("t","a"))||(j.classList.add(xn("t","a"),xn("t","in")),a(j),j.classList.remove(xn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class ic{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=_e(-1),this.view=new rc(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!h(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new Un(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(_t(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(_t(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function qr(n){return"format"in n&&!G(n.format)?n.format:kt(2)}function ac(n){var e;return n.value.rawValue.length===1?new Nr(n.document,{formatter:qr(n.params),value:n.value,viewProps:n.viewProps}):new $r(n.document,{formatter:qr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ps.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function oc(n){var e,t,r;return new ic(n.document,{formatter:qr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ps.monitor.defaultLineCount,props:me.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(r="min"in n.params?n.params.min:null)!==null&&r!==void 0?r:0}),value:n.value,viewProps:n.viewProps})}function ea(n){return"view"in n&&n.view==="graph"}const lc={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=oe,r=Ce(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return r?{initialValue:n,params:r}:null},binding:{defaultBufferSize:n=>ea(n)?64:1,reader:n=>Zn},controller:n=>ea(n.params)?oc(n):ac(n)},cc={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=oe,r=Ce(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return r?{initialValue:n,params:r}:null},binding:{reader:n=>fi},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new $r(n.document,{formatter:Pr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ps.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Nr(n.document,{formatter:Pr,value:t,viewProps:n.viewProps})}};function uc(n,e){var t;const r=n.accept(e.target.read(),e.params);if(G(r))return null;const _=oe,L={target:e.target,initialValue:r.initialValue,params:r.params},j=n.binding.reader(L),ge=n.binding.constraint?n.binding.constraint(L):void 0,ze=_e(j(r.initialValue),{constraint:ge,equals:n.binding.equals}),Oe=new gr({reader:j,target:e.target,value:ze,writer:n.binding.writer(L)}),tt=_.optional.boolean(e.params.disabled).value,rt=_.optional.boolean(e.params.hidden).value,Fn=n.controller({constraint:ge,document:e.document,initialValue:r.initialValue,params:r.params,value:Oe.value,viewProps:f.create({disabled:tt,hidden:rt})});return new et(e.document,{binding:Oe,blade:Ve(),props:me.fromObject({label:"label"in e.params?(t=_.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Fn})}function dc(n,e){return e===0?new vr:new zs(n,e??Ps.monitor.defaultInterval)}function pc(n,e){var t,r,_;const L=oe,j=n.accept(e.target.read(),e.params);if(G(j))return null;const ge={target:e.target,initialValue:j.initialValue,params:j.params},ze=n.binding.reader(ge),Oe=(r=(t=L.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(j.params))!==null&&r!==void 0?r:1,tt=L.optional.number(e.params.interval).value,rt=new wr({reader:ze,target:e.target,ticker:dc(e.document,tt),value:qn(Oe)}),Fn=L.optional.boolean(e.params.disabled).value,Ss=L.optional.boolean(e.params.hidden).value,Es=n.controller({document:e.document,params:j.params,value:rt.value,viewProps:f.create({disabled:Fn,hidden:Ss})});return new qe(e.document,{binding:rt,blade:Ve(),props:me.fromObject({label:"label"in e.params?(_=L.optional.string(e.params.label).value)!==null&&_!==void 0?_:null:e.target.key}),valueController:Es})}class hc{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,r){const _=t.read();if(G(_))throw new U({context:{key:t.key},type:"nomatchingcontroller"});const L=this.pluginsMap_.inputs.reduce((j,ge)=>j??uc(ge,{document:e,target:t,params:r}),null);if(L)return L;throw new U({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,r){const _=this.pluginsMap_.monitors.reduce((L,j)=>L??pc(j,{document:e,params:r,target:t}),null);if(_)return _;throw new U({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((_,L)=>_??Bn(L,{document:e,params:t}),null);if(!r)throw new U({type:"nomatchingview",context:{params:t}});return r}createBladeApi(e){if(e instanceof et)return new lt(e);if(e instanceof qe)return new dt(e);if(e instanceof ct)return new Tt(e,this);const t=this.pluginsMap_.blades.reduce((r,_)=>r??_.api({controller:e,pool:this}),null);if(!t)throw U.shouldNeverHappen();return t}}function fc(){const n=new hc;return[wc,jl,Ql,ec,Fl,Ul,Dl,Bl,Co,sc,cc,lc,De,Sn,Ds,Gs].forEach(e=>{n.register(e)}),n}function _c(n){return gn.isObject(n)?new gn(n.x,n.y):new gn}function mc(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function cn(n,e){if(!n)return;const t=[],r=Ki(n,e);r&&t.push(r);const _=ji(n);return _&&t.push(_),new $t(t)}function bc(n,e){return new vn({assembly:Hi,components:[cn("x"in n?n.x:void 0,e.x),cn("y"in n?n.y:void 0,e.y)]})}function ta(n,e){const[t,r]=n?zl(n):[];if(!G(t)||!G(r))return Math.max(Math.abs(t??0),Math.abs(r??0));const _=Qn(n);return Math.max(Math.abs(_)*10,Math.abs(e)*10)}function vc(n,e){const t=e instanceof vn?e.components[0]:void 0,r=e instanceof vn?e.components[1]:void 0,_=ta(t,n.x),L=ta(r,n.y);return Math.max(_,L)}function na(n,e){return{baseStep:Qn(e),constraint:e,textProps:me.fromObject({draggingScale:Jn(e,n),formatter:kt(js(e,n))})}}function gc(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const wc={id:"input-point2d",type:"input",accept:(n,e)=>{if(!gn.isObject(n))return null;const t=oe,r=Ce(e,{expanded:t.optional.boolean,picker:t.optional.custom(vi),x:t.optional.custom(mn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return r?{initialValue:n,params:r}:null},binding:{reader:n=>_c,constraint:n=>bc(n.params,n.initialValue),equals:gn.equals,writer:n=>mc},controller:n=>{const e=n.document,t=n.value,r=n.constraint;if(!(r instanceof vn))throw U.shouldNeverHappen();const _="expanded"in n.params?n.params.expanded:void 0,L="picker"in n.params?n.params.picker:void 0;return new Nl(e,{axes:[na(t.rawValue.x,r.components[0]),na(t.rawValue.y,r.components[1])],expanded:_??!1,invertsY:gc(n.params),maxValue:vc(t.rawValue,r),parser:Ht,pickerLayout:L??"popup",value:t,viewProps:n.viewProps})}};class sa extends c{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}}class ra extends c{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}}class ia extends c{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,_=>{r(_.event)}),this}}const xc=function(){return{id:"list",type:"blade",accept(n){const e=oe,t=Ce(n,{options:e.required.custom(Ks),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new An(gi(n.params.options)),t=_e(n.params.value,{constraint:e}),r=new Mn(n.document,{props:new me({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),valueController:r})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof Mn)?null:new sa(n.controller)}}}();function yc(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Pc(n,e){n.forEach(t=>{const r=e[t.target.presetKey];r!==void 0&&t.writer(t.target,t.reader(r))})}class Sc extends Rt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(et).map(r=>r.binding);Pc(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(et).map(t=>t.binding.target);return yc(e)}refresh(){this.controller_.rackController.rack.find(et).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()})}}class Ec extends Xt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const kc={id:"slider",type:"blade",accept(n){const e=oe,t=Ce(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const r=(e=n.params.value)!==null&&e!==void 0?e:0,_=new hn({max:n.params.max,min:n.params.min}),L=new Tr(n.document,{baseStep:1,parser:Ht,sliderProps:new me({maxValue:_.values.value("max"),minValue:_.values.value("min")}),textProps:me.fromObject({draggingScale:Jn(void 0,r),formatter:(t=n.params.format)!==null&&t!==void 0?t:bo}),value:_e(r,{constraint:_}),viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),valueController:L})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof Tr)?null:new ra(n.controller)}},Tc=function(){return{id:"text",type:"blade",accept(n){const e=oe,t=Ce(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new fn(n.document,{parser:n.params.parse,props:me.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:_e(n.params.value),viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof fn)?null:new ia(n.controller)}}}();function Cc(n){const e=n.createElement("div");return e.classList.add(F("dfw")()),n.body&&n.body.appendChild(e),e}function aa(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const r=n.createElement("style");r.dataset.tpStyle=e,r.textContent=t,n.head.appendChild(r)}class Bc extends Sc{constructor(e){var t,r;const _=e??{},L=(t=_.document)!==null&&t!==void 0?t:d(),j=fc(),ge=new Ec(L,{expanded:_.expanded,blade:Ve(),props:me.fromObject({title:_.title}),viewProps:f.create()});super(ge,j),this.pool_=j,this.containerElem_=(r=_.container)!==null&&r!==void 0?r:Cc(L),this.containerElem_.appendChild(this.element),this.doc_=L,this.usesDefaultWrapper_=!_.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw U.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw U.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(r=>{this.pool_.register(r),this.embedPluginStyle_(r)})}embedPluginStyle_(e){e.css&&aa(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){aa(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[kc,xc,Gs,Tc]})}}const Ac=new u("3.1.10");o.BladeApi=c,o.ButtonApi=Z,o.FolderApi=Rt,o.InputBindingApi=lt,o.ListApi=sa,o.MonitorBindingApi=dt,o.Pane=Bc,o.SeparatorApi=Zt,o.SliderApi=ra,o.TabApi=Tn,o.TabPageApi=Ot,o.TextApi=ia,o.TpChangeEvent=y,o.VERSION=Ac,Object.defineProperty(o,"__esModule",{value:!0})})})(ii,ii.exports);var io=ii.exports;const Du=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,ks=`// 2DGS render — vertex+fragment.
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
`,Uu=`const WG_SIZE = 256u;
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
}`,Lu=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Gu=`// shader implementing gpu radix sort.

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
`,zu=`// shader implementing gpu radix sort.

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
`,Iu=`// ============================================================================
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
}`,Fu=256;function rs(i,s){const o=[],u=[];let c=!0;for(const m of i.split(`
`)){const y=m.trim();let x;if((x=/^\/\/#if\s+(\w+)\s*$/.exec(y))!==null){const S=!!s[x[1]];u.push({parent:c,taken:S}),c=c&&S;continue}if(/^\/\/#else\s*$/.test(y)){const S=u[u.length-1];if(S===void 0)throw new Error("preprocessWGSL: #else without #if");c=S.parent&&!S.taken;continue}if(/^\/\/#endif\s*$/.test(y)){const S=u.pop();if(S===void 0)throw new Error("preprocessWGSL: #endif without #if");c=S.parent;continue}c&&o.push(m)}if(u.length!==0)throw new Error("preprocessWGSL: unterminated #if");return o.join(`
`)}const Ou=Ka,Vu=8,$u=96,Nu=12,hi=8,un=1<<hi,Vn=256,lr=32/hi,qu=0,tr=lr&1;function Ia(i,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function Wu(i,s){const o=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),u=i.createPipelineLayout({bindGroupLayouts:[o]}),c=m=>i.createComputePipeline({layout:u,compute:{module:s,entryPoint:m,constants:{WG_SIZE:Vn}}});return{l0TileScan:c("prefix_l0_tile_scan"),l1TileScanOnL0:c("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:c("prefix_scan_l1_sums"),addL1ToL0:c("prefix_add_l1_to_l0_offsets"),addL0ToElems:c("prefix_add_l0_to_elements"),computeDigitBase:c("compute_digit_base"),prefixBindGroupLayout:o}}function Ku(i,s,o){const u=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),c=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),m=i.createPipelineLayout({bindGroupLayouts:[u]}),y=i.createPipelineLayout({bindGroupLayouts:[c]}),x=[];for(let S=0;S<lr;S++){const A={PASS_ID:S+qu,RS_RADIX_LOG2:hi,RS_RADIX_SIZE:un};x.push({localHistogram:i.createComputePipeline({layout:m,compute:{module:s,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:i.createComputePipeline({layout:y,compute:{module:o,entryPoint:"scatter_elements",constants:A}})})}return{passes:x,localHistogramBindGroupLayout:u,scatterBindGroupLayout:c}}function ju(i){const s=i.createShaderModule({label:"local histogram",code:zu}),o=i.createShaderModule({label:"scatter",code:Gu}),u=i.createShaderModule({label:"blelloch prefix",code:Iu}),c=Wu(i,u),m=Ku(i,s,o);return{localHistogramBindGroupLayout:m.localHistogramBindGroupLayout,scatterBindGroupLayout:m.scatterBindGroupLayout,passes:m.passes,hierarchicalBlelloch:c}}function Fa(i){const s=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),o=s.createView({dimension:"2d-array"}),u=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),c=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),m=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(m,0,new ArrayBuffer(32));const y={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:o,sampler:u,rectsBuffer:c,texParamsBuffer:m,meta:y}}const as=class as{constructor(s,o,u,c,m,y=null,x={}){P(this,"device");P(this,"pc");P(this,"presentationFormat");P(this,"camera_buffer");P(this,"render_settings_buffer");P(this,"draw_indirect_buffer");P(this,"splat_2d_buffer");P(this,"querySet");P(this,"resolveBuffer");P(this,"resultBuffer");P(this,"queriesPerFrame",Vu);P(this,"queryCapacityFrames",200);P(this,"sort_prefixBindGroup");P(this,"sort_pipelines");P(this,"sort_localHistogramBindGroups");P(this,"sort_scatterBindGroups");P(this,"lastFrame",0);P(this,"frameCount",0);P(this,"preprocessPipeline");P(this,"cullPipeline");P(this,"renderPipeline");P(this,"indirectPipeline");P(this,"renderShaderModule");P(this,"betaKernel",1);P(this,"fetchById");P(this,"octBound");P(this,"acc16");P(this,"accTexture",null);P(this,"accView",null);P(this,"accW",0);P(this,"accH",0);P(this,"legacyRenderPipeline",null);P(this,"varyingsPipeline",null);P(this,"msaa",!1);P(this,"msaaTexture",null);P(this,"msaaView",null);P(this,"msaaW",0);P(this,"msaaH",0);P(this,"msaaPipelines",new Map);P(this,"mkVariant",null);P(this,"slopeTarget",null);P(this,"viewport",null);P(this,"slopeSource",0);P(this,"slopePipelines",new Map);P(this,"rendererBgls",[]);P(this,"betaKernelConst",1);P(this,"slopeBgl",null);P(this,"slopeBg",null);P(this,"slopeDummy",null);P(this,"refetch",null);P(this,"rfTsIndex",-1);P(this,"refetchApplied",!1);P(this,"rfKeys",null);P(this,"rfKeysCap",0);P(this,"rfParams",null);P(this,"rfLowBgl",null);P(this,"rfUpBgl",null);P(this,"rfSplatsBgl",null);P(this,"rfLowBg",null);P(this,"rfUpBg",null);P(this,"rfUpKey",[]);P(this,"rfSplatsBg",null);P(this,"rfSplatsKey",[]);P(this,"rfPipelines",new Map);P(this,"rfWl",0);P(this,"rfHl",0);P(this,"legacyRenderer",!1);P(this,"accResolvePipeline",null);P(this,"accResolveBgl",null);P(this,"accResolveBindGroup",null);P(this,"twoPass",!1);P(this,"twoPassThresh",.5);P(this,"twoPassParamsBuffer",null);P(this,"twoPassBgl",null);P(this,"twoPassBg",null);P(this,"twoPassSplatsBgl",null);P(this,"twoPassSplatsBg",null);P(this,"twoPassModules",new Map);P(this,"twoPassPipelines",new Map);P(this,"twoPassDepth",null);P(this,"twoPassDepthView",null);P(this,"twoPassW",0);P(this,"twoPassH",0);P(this,"overdrawMode",0);P(this,"overdrawMax",48);P(this,"ovTexture",null);P(this,"ovView",null);P(this,"ovW",0);P(this,"ovH",0);P(this,"ovParamsBuffer",null);P(this,"ovResolvePipeline",null);P(this,"ovResolveBgl",null);P(this,"ovResolveBg",null);P(this,"ovStatsPipeline",null);P(this,"ovStatsBgl",null);P(this,"ovStatsBg",null);P(this,"ovStatsBuffer",null);P(this,"ovReadback",null);P(this,"ovReadState","idle");P(this,"ovLastStats",null);P(this,"ovPipelines",new Map);P(this,"renderSettingsBgl");P(this,"preprocessBgl2");P(this,"renderSplatsBgl");P(this,"atlasBgl");P(this,"sort_info_buffer");P(this,"sort_ping_pong");P(this,"crsBg");P(this,"gsBg");P(this,"cullBg2");P(this,"preprocessBg1");P(this,"renderSplatsBindGroup");P(this,"renderSettingsBindGroup");P(this,"atlasBindGroup");P(this,"indirectBindGroup");P(this,"sh_solvers_buffer");P(this,"bfcParamsBuffer");P(this,"bfcBindGroupLayout");P(this,"bfcBindGroup");P(this,"staticSortKeys",null);P(this,"wideFrustum",!1);P(this,"staticKeysBuffer",null);P(this,"bgColor",[0,0,0,0]);P(this,"showPerfDialogNext",!1);P(this,"requestReorderNextFrame",!1);P(this,"reorderInFlight",!1);P(this,"downloadOnceNextRead",!1);P(this,"downloadOnceFileName","fps_metrics");P(this,"allFrameTimes",[]);P(this,"lastStageBreakdownMs",null);P(this,"timeQueryEnabled");P(this,"atlas");P(this,"atlasParamsBuffer");P(this,"_atlasEnabled",!0);P(this,"mipLodBias",1);P(this,"_mipMode",1);P(this,"preFrame",null);this.fetchById=x.fetchById??!0,this.staticSortKeys=x.staticSortKeys??null,this.wideFrustum=x.wideFrustum??!1,this.octBound=x.octBound??!1,this.acc16=x.acc16??!1,bt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const S=m.includes("timestamp-query");this.timeQueryEnabled=S,S&&bt("⏰ using timestamp-query"),this.pc=s,this.device=o,this.presentationFormat=u,this.camera_buffer=c,this.atlas=y??Fa(o),this.atlasParamsBuffer=o.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),o.addEventListener("uncapturederror",Ae=>{console.error("A WebGPU error was not captured:",Ae.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Vn-1)/Vn)+1)*Vn,z=Math.ceil(A/Vn);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const G=o.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ju(o);const q=[Ia(A,o),Ia(A,o)],$=o.createBuffer({label:"workgroup histograms",size:z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=o.createBuffer({label:"workgroup prefixes",size:z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=o.createBuffer({label:"digit base",size:un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),V=Math.ceil(z/Vn),Z=Math.ceil(V/Vn),O=o.createBuffer({label:"prefix l0 sums",size:V*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=o.createBuffer({label:"prefix l0 offsets",size:V*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=o.createBuffer({label:"prefix l1 sums",size:Z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=o.createBuffer({label:"prefix l1 offsets",size:Z*un*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=o.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:$}},{binding:2,resource:{buffer:H}},{binding:3,resource:{buffer:O}},{binding:4,resource:{buffer:ee}},{binding:5,resource:{buffer:F}},{binding:6,resource:{buffer:te}},{binding:7,resource:{buffer:U}}]}),this.sort_localHistogramBindGroups=[o.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:q[0].sort_depths_buffer}},{binding:2,resource:{buffer:$}}]}),o.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:q[1].sort_depths_buffer}},{binding:2,resource:{buffer:$}}]})],this.sort_scatterBindGroups=[o.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:q[0].sort_depths_buffer}},{binding:3,resource:{buffer:q[1].sort_depths_buffer}},{binding:4,resource:{buffer:q[0].sort_indices_buffer}},{binding:5,resource:{buffer:q[1].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]}),o.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:q[1].sort_depths_buffer}},{binding:3,resource:{buffer:q[0].sort_depths_buffer}},{binding:4,resource:{buffer:q[1].sort_indices_buffer}},{binding:5,resource:{buffer:q[0].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]})],this.sort_info_buffer=G,this.sort_ping_pong=q;const ce=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),pe=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Se=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ce,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:pe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=Se,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Ee=this.device.createShaderModule({code:Uu});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Ee,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const Re=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],ke=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:os(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),Re.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),ke.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:Re}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:ke});const de=this.device.createShaderModule({code:rs(Lu,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ce,he,pe,this.bfcBindGroupLayout]}),compute:{module:de,entryPoint:"surfel_cull"}});const N=this.device.createShaderModule({code:Du});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ce,Se]}),compute:{module:N,entryPoint:"preprocess"}});const xe=this.device.createShaderModule({label:"render_2dgs",code:rs(ks,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});xe.getCompilationInfo().then(Ae=>{Ae.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ae.messages.forEach(Le=>{(Le.type==="error"?console.error:Le.type==="warning"?console.warn:console.log)(`${Le.type} (line ${Le.lineNum}:${Le.linePos}): ${Le.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const we=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),_e=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,me=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:_e,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ae=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Pe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,me,ae]}),vertex:{module:xe,entryPoint:"vs_main"},fragment:{module:xe,entryPoint:"fs_main",constants:{BETA_KERNEL:Pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ie=(Ae,Le,oe,Ce=1)=>{const Be=this.device.createShaderModule({label:`render_2dgs (${Ae})`,code:rs(ks,{FETCH_BY_ID:Le,OCT:oe})});return this.device.createRenderPipeline({label:`render_2dgs_${Ae}`,multisample:{count:Ce},layout:this.device.createPipelineLayout({bindGroupLayouts:[we,me,ae]}),vertex:{module:Be,entryPoint:"vs_main"},fragment:{module:Be,entryPoint:"fs_main",constants:{BETA_KERNEL:Pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[we,me,ae],this.betaKernelConst=Pe,this.varyingsPipeline=Ie("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ie("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=Ie,this.device.popErrorScope().then(Ae=>{Ae?console.error("[render_2dgs] pipeline create validation error:",Ae.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:me,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[tr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ae,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=xe,this.betaKernel=Pe,this.renderSettingsBgl=we,this.renderSplatsBgl=me,this.atlasBgl=ae}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get resolvesIntoTarget(){return this.msaa||this.acc16||this.overdrawMode!==0}setSlopeAtlas(s,o){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),s||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),s=this.slopeDummy.createView({dimension:"2d-array"}));const u=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(u,0,new Float32Array(o)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:s},{binding:7,resource:{buffer:u}}]})}slopePipelineFor(s,o){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const u=`${s?1:0}${o?1:0}${this.slopeSource}`;let c=this.slopePipelines.get(u);if(!c){const m=this.device.createShaderModule({label:`render_2dgs slope (${u})`,code:rs(ks,{FETCH_BY_ID:s,OCT:o})}),y={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};c=this.device.createRenderPipeline({label:`render_2dgs_slope_${u}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:y},{format:"rgba16float",blend:y}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(u,c)}return c}rfEnsure(s,o){var S;const u=this.device;this.rfLowBgl||(this.rfLowBgl=u.createBindGroupLayout({label:"refetch (low)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.rfUpBgl=u.createBindGroupLayout({label:"refetch (up)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:12,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:13,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:14,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:15,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.rfSplatsBgl=u.createBindGroupLayout({label:"refetch splats",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rfParams=u.createBuffer({label:"refetch params",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const c=s*o*4*4;(!this.rfKeys||this.rfKeysCap<c)&&((S=this.rfKeys)==null||S.destroy(),this.rfKeysCap=Math.ceil(c*1.25/256)*256,this.rfKeys=u.createBuffer({label:"refetch keys",size:this.rfKeysCap,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.rfLowBg=null,this.rfUpBg=null),this.rfLowBg||(this.rfLowBg=u.createBindGroup({layout:this.rfLowBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}}]}));const m=this.refetch,y=new Uint32Array([s,o,m.W,m.H,0,0,0,0]),x=new Float32Array(y.buffer);x[4]=m.thr,x[5]=m.gain,y[6]=m.edge?1:0,u.queue.writeBuffer(this.rfParams,0,y),this.rfWl=s,this.rfHl=o}rfPipeline(s,o,u){const c=s==="up"?"up":`${s}${o?1:0}${u?1:0}`;let m=this.rfPipelines.get(c);if(m)return m;const y=this.device.createShaderModule({label:`render_2dgs refetch (${c})`,code:rs(ks,{FETCH_BY_ID:s==="up"?!1:o,OCT:s==="up"?!1:u})}),x={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}},S={BETA_KERNEL:this.betaKernelConst};if(s==="up")m=this.device.createRenderPipeline({label:"render_2dgs_refetch_up",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.rendererBgls[0],this.rfSplatsBgl,this.rendererBgls[2],this.rfUpBgl]}),vertex:{module:y,entryPoint:"vs_rf_full"},fragment:{module:y,entryPoint:"fs_refetch_up",constants:S,targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});else{const A=this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.rfLowBgl]});m=this.device.createRenderPipeline({label:`render_2dgs_refetch_${c}`,layout:A,vertex:{module:y,entryPoint:"vs_main"},fragment:s==="select"?{module:y,entryPoint:"fs_refetch_select",constants:S,targets:[{format:"rgba16float",writeMask:0}]}:{module:y,entryPoint:"fs_refetch_cw",constants:S,targets:[{format:this.presentationFormat,blend:x},{format:"rgba16float",blend:x},{format:"rgba16float",blend:x},{format:"rgba16float",blend:x}]},primitive:{topology:"triangle-strip",cullMode:"none"}})}return this.rfPipelines.set(c,m),m}refetchPass(s,o){const u=this.refetch,c=[this.splat_2d_buffer,this.sort_ping_pong[tr].sort_indices_buffer];(!this.rfSplatsBg||c.some((S,A)=>S!==this.rfSplatsKey[A]))&&(this.rfSplatsBg=this.device.createBindGroup({layout:this.rfSplatsBgl,entries:[{binding:0,resource:{buffer:c[0]}},{binding:1,resource:{buffer:c[1]}}]}),this.rfSplatsKey=c);const m=[this.rfKeys,u.wa,u.wb,u.wc,u.low];(!this.rfUpBg||m.some((S,A)=>S!==this.rfUpKey[A]))&&(this.rfUpBg=this.device.createBindGroup({layout:this.rfUpBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}},{binding:12,resource:u.wa},{binding:13,resource:u.wb},{binding:14,resource:u.low},{binding:15,resource:u.wc}]}),this.rfUpKey=m);const y={label:"refetch_up",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};this.rfTsIndex>=0&&(y.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:this.rfTsIndex},this.rfTsIndex=-1);const x=s.beginRenderPass(y);x.setPipeline(this.rfPipeline("up",!1,!1)),x.setBindGroup(0,this.renderSettingsBindGroup),x.setBindGroup(1,this.rfSplatsBg),x.setBindGroup(2,this.atlasBindGroup),x.setBindGroup(3,this.rfUpBg),x.draw(3),x.end()}setBfcParams(s,o){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,o[0],o[1],o[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var c;const s=new ArrayBuffer(32),o=new Uint32Array(s),u=new Float32Array(s);o[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,o[1]=this.atlas.meta.layer_h|0,u[2]=this.atlas.meta.uv_extent||0,o[3]=this.atlas.meta.probe_mode|0||0,o[4]=this._mipMode!==0?Math.max(1,((c=this.atlas.meta.mip_bytes)==null?void 0:c.length)??1):1,u[5]=this.mipLodBias,o[6]=this._mipMode===2?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}setMsaa(s){s!==this.msaa&&(this.msaa=s,bt(`[render_2dgs] MSAA 4x: ${s?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(s,o){const u=`${s?"byid":"var"}_${o?"oct":"quad"}`;let c=this.msaaPipelines.get(u);return c||(c=this.mkVariant(`msaa4_${u}`,s,o,4),this.msaaPipelines.set(u,c)),c}ensureMsaaResources(s,o){var u;this.msaaTexture!==null&&this.msaaW===s&&this.msaaH===o||((u=this.msaaTexture)==null||u.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:s,height:o},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=s,this.msaaH=o)}setTwoPass(s){s!==this.twoPass&&(this.twoPass=s,bt(`[render_2dgs] two-pass layer path: ${s?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(s){this.twoPassThresh=Math.min(.999,Math.max(.001,s)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[tr].sort_indices_buffer}}]}))}ensureTwoPassResources(s,o){var u;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===s&&this.twoPassH===o)&&((u=this.twoPassDepth)==null||u.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=s,this.twoPassH=o)}renderModuleFor(s,o,u){const c=`${s?"byid":"vary"}_${o?"oct":"quad"}_${u?"hwz":"z0"}`,m=this.twoPassModules.get(c);if(m!==void 0)return m;const y=this.device.createShaderModule({label:`render_2dgs (${c})`,code:rs(ks,{FETCH_BY_ID:s,OCT:o,HW_DEPTH:u})});return y.getCompilationInfo().then(x=>{for(const S of x.messages)S.type==="error"&&console.error(`[render_2dgs ${c}] (line ${S.lineNum}:${S.linePos}): ${S.message}`)}),this.twoPassModules.set(c,y),y}twoPassPipelinesFor(s,o){const u=`${s?"byid":"vary"}_${o?"oct":"quad"}`,c=this.twoPassPipelines.get(u);if(c!==void 0)return c;const m=this.renderModuleFor(s,o,!0),y=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const x=this.device.createRenderPipeline({label:`render_2dgs_opaque_${u}`,layout:y,vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),S=this.device.createRenderPipeline({label:`render_2dgs_front_${u}`,layout:y,vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:as.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(z=>{z?console.error(`[render_2dgs twopass ${u}] pipeline validation error:`,z.message):console.log(`[render_2dgs twopass ${u}] pipelines created OK`)});const A={opaque:x,front:S};return this.twoPassPipelines.set(u,A),A}setOverdrawMode(s){s!==this.overdrawMode&&(this.overdrawMode=s,this.ovLastStats=null,bt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][s]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(s){this.overdrawMax=Math.max(1,s),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(s,o){var u;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const c=`
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
}`,m=this.device.createShaderModule({label:"overdraw_resolve",code:c});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const y=`
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
}`,x=this.device.createShaderModule({label:"overdraw_stats",code:y});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:x,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===s&&this.ovH===o||((u=this.ovTexture)==null||u.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=s,this.ovH=o)}ovPipelineFor(s,o,u){const c=`${s}_${o?"byid":"vary"}_${u?"oct":"quad"}`,m=this.ovPipelines.get(c);if(m!==void 0)return m;const y=s.startsWith("tp_"),x=this.renderModuleFor(o,u,y),S=this.device.createPipelineLayout({bindGroupLayouts:y?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),A={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[s];let z;s==="tp_raster"?z={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:s==="tp_opaque"?z={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:s==="tp_front"&&(z={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const G=this.device.createRenderPipeline({label:`render_2dgs_${c}`,layout:S,vertex:{module:x,entryPoint:"vs_main"},fragment:{module:x,entryPoint:A,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:as.BLEND_ADD}]},depthStencil:z,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(q=>{q&&console.error(`[render_2dgs overdraw ${c}] pipeline validation error:`,q.message)}),this.ovPipelines.set(c,G),G}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const s=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const o=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:s[0]/o,meanCovered:s[2]>0?s[0]/s[2]:0,max:s[1],coveredFrac:s[2]/o}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(s,o){var u;if(this.accResolvePipeline===null){const c=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,m=this.device.createShaderModule({label:"acc16_resolve",code:c});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===o||((u=this.accTexture)==null||u.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=o)}setAtlas(s){this.atlas=s??Fa(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&nr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,nr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,bt(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,is({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const o=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([o])),bt(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this.atlas.sampler}setMipMode(s){if(this.atlas.meta.format===4294967295)return;const o=this._mipMode;this._mipMode=typeof s=="boolean"?s?1:0:s,o===2!=(this._mipMode===2)&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),nr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const o=Math.max(0,Math.min(s,this.pc.num_points)),u=o*Uint32Array.BYTES_PER_ELEMENT;if(u===0){console.log("[DEBUG] No indices to read.");return}const c=this.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),m=this.device.createCommandEncoder();m.copyBufferToBuffer(this.sort_ping_pong[tr].sort_indices_buffer,0,c,0,u),this.device.queue.submit([m.finish()]),await c.mapAsync(GPUMapMode.READ);const y=new Uint32Array(c.getMappedRange());console.log("[DEBUG] Sorted indices (first",o,"):",Array.from(y)),c.unmap()}writeSortKeys(s){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,s)}frame(s,o,u=!0){this.preFrame&&this.preFrame();const m=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,y=u&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const x={label:"cull"};y&&(x.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+0,endOfPassWriteIndex:m+1});const S=s.beginComputePass(x);S.setPipeline(this.cullPipeline),S.setBindGroup(0,this.crsBg),S.setBindGroup(1,this.gsBg),S.setBindGroup(2,this.cullBg2),S.setBindGroup(3,this.bfcBindGroup);const A=Math.ceil(this.pc.num_points/Fu);S.dispatchWorkgroups(A,1,1),S.end()}{const x=s.beginComputePass({label:"calculate indirect dispatch"});x.setPipeline(this.indirectPipeline),x.setBindGroup(0,this.indirectBindGroup),x.dispatchWorkgroups(1,1,1),x.end()}{const x={label:"preprocess"};y&&(x.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+2,endOfPassWriteIndex:m+3});const S=s.beginComputePass(x);S.setPipeline(this.preprocessPipeline),S.setBindGroup(0,this.crsBg),S.setBindGroup(1,this.preprocessBg1),S.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),S.end()}for(let x=0;x<lr;x++){const S=x&1,A=this.sort_pipelines.passes[x],z=this.sort_localHistogramBindGroups[S],G=this.sort_scatterBindGroups[S];{const q={label:`upsweep_round${x}`};y&&x==0&&(q.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+4});const $=s.beginComputePass(q);$.setPipeline(A.localHistogram),$.setBindGroup(0,z),$.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),$.end()}{const q=s.beginComputePass({label:`prefix_round${x} - l0TileScan`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - l1TileScanOnL0`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - l1ScanSums`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroups(1,un,1),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - addL1ToL0`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - addL0ToElems`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),q.end()}{const q=s.beginComputePass({label:`prefix_round${x} - computeDigitBase`});q.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),q.setBindGroup(0,this.sort_prefixBindGroup),q.dispatchWorkgroups(1,1,1),q.end()}{const q={label:`scatter_round${x}`};y&&x==lr-1&&(q.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+5});const $=s.beginComputePass(q);$.setPipeline(A.scatterElements),$.setBindGroup(0,G),$.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),$.end()}}{const x=ut.canvas_size[0],S=ut.canvas_size[1],A=this.overdrawMode!==0;this.refetchApplied=!1;let z=o;A?(this.ensureOverdrawResources(x,S),z=this.ovView):this.acc16&&(this.ensureAccResources(x,S),z=this.accView);const G=A?{r:0,g:0,b:0,a:0}:this.bgColor,q=A||this.acc16,$=this.fetchById&&!this.legacyRenderer,H=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(x,S);let U,V;if(A)this.overdrawMode===1?(U=this.ovPipelineFor("tp_opaque",$,H),V=this.ovPipelineFor("tp_front",$,H)):U=V=this.ovPipelineFor("tp_raster",$,H);else{const te=this.twoPassPipelinesFor($,H);U=te.opaque,V=te.front}const Z={label:"render_opaque_layer",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:G}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};y&&(Z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+6});const O=s.beginRenderPass(Z);O.setPipeline(U),O.setBindGroup(0,this.renderSettingsBindGroup),O.setBindGroup(1,this.twoPassSplatsBg),O.setBindGroup(2,this.atlasBindGroup),O.setBindGroup(3,this.twoPassBg),O.drawIndirect(this.draw_indirect_buffer,0),O.end();const ee={label:"render_front",colorAttachments:[{view:z,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};y&&!q&&(ee.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+7});const F=s.beginRenderPass(ee);F.setPipeline(V),F.setBindGroup(0,this.renderSettingsBindGroup),F.setBindGroup(1,this.twoPassSplatsBg),F.setBindGroup(2,this.atlasBindGroup),F.setBindGroup(3,this.twoPassBg),F.drawIndirect(this.draw_indirect_buffer,0),F.end()}else{const U=this.msaa&&!A&&!this.acc16;U&&this.ensureMsaaResources(x,S);const V=this.refetch!==null&&!U&&!A&&!this.acc16&&!this.legacyRenderer,Z=!V&&this.slopeTarget!==null&&!U&&!A&&!this.acc16&&!this.legacyRenderer;this.refetchApplied=V;const O=[U?{view:this.msaaView,resolveTarget:z,loadOp:"clear",storeOp:"discard",clearValue:G}:{view:z,loadOp:"clear",storeOp:"store",clearValue:G}];if(Z&&O.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}),V){const te=this.viewport??[x,S];this.rfEnsure(te[0],te[1]),s.clearBuffer(this.rfKeys,0,te[0]*te[1]*16);const ce=s.beginRenderPass({label:"refetch_select",colorAttachments:[{view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});ce.setPipeline(this.rfPipeline("select",this.fetchById,H)),ce.setViewport(0,0,te[0],te[1],0,1),ce.setScissorRect(0,0,te[0],te[1]),ce.setBindGroup(0,this.renderSettingsBindGroup),ce.setBindGroup(1,this.renderSplatsBindGroup),ce.setBindGroup(2,this.atlasBindGroup),ce.setBindGroup(3,this.rfLowBg),ce.drawIndirect(this.draw_indirect_buffer,0),ce.end();const he={r:0,g:0,b:0,a:0};O.push({view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:he},{view:this.refetch.wb,loadOp:"clear",storeOp:"store",clearValue:he},{view:this.refetch.wc,loadOp:"clear",storeOp:"store",clearValue:he})}const ee={label:"render",colorAttachments:O};y&&(ee.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+6,...q||V?{}:{endOfPassWriteIndex:m+7}}),this.rfTsIndex=V&&y?m+7:-1;const F=s.beginRenderPass(ee);A?(F.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",$,H)),F.setBindGroup(1,this.twoPassSplatsBg)):V?(F.setPipeline(this.rfPipeline("cw",this.fetchById,H)),F.setBindGroup(1,this.renderSplatsBindGroup),F.setBindGroup(3,this.rfLowBg)):Z?(F.setPipeline(this.slopePipelineFor(this.fetchById,H)),F.setBindGroup(1,this.renderSplatsBindGroup),F.setBindGroup(3,this.slopeBg)):(F.setPipeline(U?this.msaaPipelineFor($,H):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),F.setBindGroup(1,this.renderSplatsBindGroup)),this.viewport!==null&&!U&&(F.setViewport(0,0,this.viewport[0],this.viewport[1],0,1),F.setScissorRect(0,0,this.viewport[0],this.viewport[1])),F.setBindGroup(0,this.renderSettingsBindGroup),F.setBindGroup(2,this.atlasBindGroup),F.drawIndirect(this.draw_indirect_buffer,0),F.end()}if(A){s.clearBuffer(this.ovStatsBuffer,0,16);const U=s.beginComputePass({label:"overdraw_stats"});U.setPipeline(this.ovStatsPipeline),U.setBindGroup(0,this.ovStatsBg),U.dispatchWorkgroups(Math.ceil(x/16),Math.ceil(S/16),1),U.end();const V={label:"overdraw_resolve",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};y&&(V.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+7});const Z=s.beginRenderPass(V);Z.setPipeline(this.ovResolvePipeline),Z.setBindGroup(0,this.ovResolveBg),Z.draw(3),Z.end(),this.ovReadState==="idle"&&(s.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const U={label:"acc16_resolve",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};y&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+7});const V=s.beginRenderPass(U);V.setPipeline(this.accResolvePipeline),V.setBindGroup(0,this.accResolveBindGroup),V.draw(3),V.end()}}this.frameCount++}async readPerfMetrics(s){const o=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const u=this.device.createCommandEncoder({label:"timestamp resolve encoder"});u.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),u.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([u.finish()]),await this.device.queue.onSubmittedWorkDone();const c=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const m=new BigInt64Array(this.resultBuffer.getMappedRange()),y=Math.min(this.frameCount,this.queryCapacityFrames),x=(this.lastFrame+this.frameCount-y)%this.queryCapacityFrames,S=Array.from({length:c.length},()=>[]);let A=0;for(let Z=0;Z<y;Z++){const O=(x+Z)%this.queryCapacityFrames,ee=O*this.queriesPerFrame;let F=!0;for(let te=0;te<c.length;te++){const[ce,he,pe]=c[te];if(m[ee+pe]===0n||m[ee+he]===0n||m[ee+he]<m[ee+pe]){F=!1;break}}if(!F){!o&&O%60===0&&console.debug("[timestamp] frame slot",O,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let te=0;te<c.length;te++){const[ce,he,pe]=c[te],Se=Number(m[ee+pe]),Ee=Number(m[ee+he]);S[te].push((Ee-Se)/1e6)}}if(A===0){this.resultBuffer.unmap(),o||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...S[0]);const z=[];let G=0,q=0,$=0;for(let Z=0;Z<c.length;Z++){const O=c[Z][0],ee=S[Z];let F=0;if(O==="Total"){const te=this.allFrameTimes;F=te.reduce((pe,Se)=>pe+Se,0)/te.length;const ce=[...te].sort((pe,Se)=>pe-Se);G=ce[Math.floor(ce.length*.99)]||0;const he=te.reduce((pe,Se)=>pe+Math.pow(Se-F,2),0)/te.length;q=Math.sqrt(he),$=F}else F=ee.reduce((te,ce)=>te+ce,0)/ee.length;z.push([O,F])}this.lastFrame+=this.frameCount,this.frameCount=0;const H=Object.fromEntries(z);this.lastStageBreakdownMs={cull:H.Culling??0,preprocess:H.Preprocess??0,sort:H.Sort??0,render:H.Render??0,total:H.Total??0};const V=`[TIMESTAMP - ${this.constructor.name}]
`+z.map(([Z,O])=>`${Z}: ${O.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${q.toFixed(3)}ms
Total AVG: ${$.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(o||(console.log(V),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Z=`Stage,ms
`,O=z.map(([te,ce])=>`${te},${ce.toFixed(3)}`).join(`
`),ee="data:text/csv;charset=utf-8,"+encodeURIComponent(Z+O),F=document.createElement("a");F.href=ee,F.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(F),F.click(),F.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(V)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Ou,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),o=s?s.width:1,u=s?s.height:1;Hc({width:o,height:u,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),mr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:os(this.pc.num_points*$u),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:os(this.pc.num_points*Nu),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const o=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=o.length>0?o:this.downloadOnceFileName}else{const o=new Date,u=`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}_${String(o.getHours()).padStart(2,"0")}${String(o.getMinutes()).padStart(2,"0")}${String(o.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${u}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};P(as,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),P(as,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let cr=as;class Hu{constructor(s){P(this,"nSurfels");P(this,"nNodes");P(this,"planes");P(this,"front");P(this,"back");P(this,"copOff");P(this,"cop");P(this,"missing");P(this,"stackNode");P(this,"stackPhase");P(this,"keys");P(this,"lastMs",0);P(this,"lastEye",[NaN,NaN,NaN]);const o=new DataView(s),u=String.fromCharCode(o.getUint8(0),o.getUint8(1),o.getUint8(2),o.getUint8(3));if(u!=="BSP1")throw new Error(`not a BSP1 file (magic ${u})`);this.nSurfels=o.getUint32(4,!0),this.nNodes=o.getUint32(8,!0);const c=o.getUint32(12,!0),m=o.getUint32(16,!0);let y=20;const x=this.nNodes;if(this.planes=new Float32Array(s.slice(y,y+x*16)),y+=x*16,this.front=new Int32Array(s.slice(y,y+x*4)),y+=x*4,this.back=new Int32Array(s.slice(y,y+x*4)),y+=x*4,this.copOff=new Uint32Array(s.slice(y,y+(x+1)*4)),y+=(x+1)*4,this.cop=new Uint32Array(s.slice(y,y+c*4)),y+=c*4,this.missing=new Uint32Array(s.slice(y,y+m*4)),y+=m*4,y!==s.byteLength)throw new Error(`BSP1 size mismatch: parsed ${y} of ${s.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*x+2),this.stackPhase=new Uint8Array(2*x+2)}computeKeys(s){const o=s[0],u=s[1],c=s[2];if(o===this.lastEye[0]&&u===this.lastEye[1]&&c===this.lastEye[2])return!1;this.lastEye=[o,u,c];const m=performance.now(),y=this.planes,x=this.front,S=this.back,A=this.copOff,z=this.cop,G=this.keys;let q=1;for(let V=0;V<this.missing.length;V++)G[this.missing[V]]=q++;const $=this.stackNode,H=this.stackPhase;let U=0;for($[0]=0,H[0]=0,U=1;U>0;){U--;const V=$[U],Z=H[U],O=y[4*V],ee=y[4*V+1],F=y[4*V+2];if(O===0&&ee===0&&F===0){for(let pe=A[V];pe<A[V+1];pe++)G[z[pe]]=q++;continue}const te=O*o+ee*u+F*c-y[4*V+3]>=0,ce=te?x[V]:S[V],he=te?S[V]:x[V];if(Z===0)$[U]=V,H[U]=1,U++,he>=0&&($[U]=he,H[U]=0,U++);else{for(let pe=A[V];pe<A[V+1];pe++)G[z[pe]]=q++;ce>=0&&($[U]=ce,H[U]=0,U++)}}return this.lastMs=performance.now()-m,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function Yu(i){const s=await fetch(i);if(!s.ok)throw new Error(`BSP fetch ${i}: HTTP ${s.status}`);return new Hu(await s.arrayBuffer())}function Xu(i,s){return 2*Math.atan(s/(2*i))}function Zu(i,s,o,u){const c=Math.tan(u/2),m=Math.tan(o/2),y=c*i,x=-y,S=m*i,A=-S,z=xt.create();return z[0]=2*i/(S-A),z[5]=-2*i/(y-x),z[2]=(S+A)/(S-A),z[6]=(y+x)/(y-x),z[14]=1,z[10]=s/(s-i),z[11]=-(s*i)/(s-i),xt.transpose(z,z),z}async function ai(i){bt(`loading scene camera file... : ${i}`);const o=await(await fetch(i)).json();return bt(`loaded cameras count: ${o.length}`),o.map(u=>{const c=X.clone(u.position),m=Mt.create(...u.rotation.flat()),y=m[0],x=m[4],S=m[8],A=m[1],z=m[5],G=m[9],q=m[2],$=m[6],H=m[10];y*(z*H-G*$)-x*(A*H-G*q)+S*(A*$-z*q)<0&&(m[1]=-m[1],m[5]=-m[5],m[9]=-m[9]);const V=xt.fromMat3(m);return{position:c,rotation:V,img_name:u.img_name,id:u.id}})}const Qu=4*2,Ju=4*16,ao=4*Ju+2*Qu;function ed(i){return i.createBuffer({label:"camera uniform",size:ao,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const On=new Float32Array(ao/Float32Array.BYTES_PER_ELEMENT),fr=class fr{constructor(s,o){P(this,"_renderSize",null);P(this,"_refSize",null);P(this,"uniform_buffer");P(this,"position",X.create());P(this,"rotation",xt.create());P(this,"zfar",100);P(this,"fovY",45/180*Math.PI);P(this,"fovX");P(this,"focalRatioX",1);P(this,"focal",ha.create());P(this,"viewport",ha.create());P(this,"view_matrix",xt.identity());P(this,"view_inv_matrix",xt.identity());P(this,"proj_matrix",xt.identity());P(this,"proj_inv_matrix",xt.identity());P(this,"_negPos",X.create());P(this,"look",X.create(0,0,1));P(this,"up",X.create(0,1,0));P(this,"right",X.create(1,0,0));this.canvas=s,this.device=o,this.uniform_buffer=o?ed(o):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(s,o,u,c){this._renderSize=[s,o],this._refSize=u&&c?[u,c]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}getViewMatrix(){return this.view_matrix}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,o=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[u,c]=this._refSize,m=.5*c/Math.tan(this.fovY*.5);this.focal[0]=m*this.focalRatioX*(s/u),this.focal[1]=m*(o/c)}else{const u=.5*o/Math.tan(this.fovY*.5);this.focal[0]=u*this.focalRatioX,this.focal[1]=u}this.fovX=Xu(this.focal[0],s),this.viewport[0]=s,this.viewport[1]=o,this.proj_matrix=Zu(.01,this.zfar,this.fovX,this.fovY),xt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],xt.copy(this.rotation,this.view_matrix),xt.translate(this.view_matrix,this._negPos,this.view_matrix),xt.inverse(this.view_matrix,this.view_inv_matrix),X.transformMat4Upper3x3(fr.Z_AXIS,this.view_inv_matrix,this.look),X.normalize(this.look,this.look),X.cross(this.up,this.look,this.right),X.normalize(this.right,this.right);let s=0;On.set(this.view_matrix,s),s+=16,On.set(this.view_inv_matrix,s),s+=16,On.set(this.proj_matrix,s),s+=16,On.set(this.proj_inv_matrix,s),s+=16,On.set(this.viewport,s),s+=2,On.set(this.focal,s),s+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,On)}set_preset(s){X.copy(s.position,this.position),xt.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}setFocalRatio(s){this.focalRatioX=s,this.on_update_canvas()}getFov(){return this.fovY}};P(fr,"Z_AXIS",X.create(0,0,1));let ur=fr;const td={bilinear:0,bicubic:1,hermite:2,texture:3,bc5:4,p:4,spline:5,refetch:2},oo={texture:0,p:1,bc5:2,spline:2},nd=.7,sd=`
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
}`;class rd{constructor(s,o,u,c,m=!1){P(this,"pipeline");P(this,"uni");P(this,"bgCache",new Map);P(this,"lowTex",null);P(this,"lowView",null);P(this,"lowSize",[0,0]);P(this,"allocSize",[0,0]);P(this,"last","");P(this,"slopeTex",null);P(this,"slopeView",null);P(this,"rfTex",[]);P(this,"rfViews",[]);P(this,"dummySlope");P(this,"splineTex");P(this,"splineSampler");P(this,"splineKernel",null);P(this,"scale");this.device=s,this.format=o,this.mode=u,this.exact=m,this.scale=c;const y=s.createShaderModule({label:"upscaler",code:sd});this.pipeline=s.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:y,entryPoint:"vs"},fragment:{module:y,entryPoint:"fs",targets:[{format:o}]},primitive:{topology:"triangle-list"}}),this.uni=s.createBuffer({size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=s.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING}),this.splineTex=s.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.splineSampler=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"})}get refetchViews(){return this.rfViews.length===3?{wa:this.rfViews[0],wb:this.rfViews[1],wc:this.rfViews[2],low:this.lowView}:null}get slopeTarget(){return this.slopeView}setSplineKernel(s){if(s===this.splineKernel)return;if(this.splineKernel=s,this.bgCache.clear(),this.last="",this.splineTex.destroy(),!s){this.splineTex=this.device.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return}const[o,u,c]=s.K,m=o*u*c,y=new Uint16Array(m*4);for(let x=0;x<m;x++)y[4*x]=jr(s.w[3*x]),y[4*x+1]=jr(s.w[3*x+1]),y[4*x+2]=jr(s.w[3*x+2]),y[4*x+3]=15360;this.splineTex=this.device.createTexture({size:[o,u,c],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.device.queue.writeTexture({texture:this.splineTex},y,{bytesPerRow:o*8,rowsPerImage:u},[o,u,c])}lowTarget(s,o){var x,S;const u=Math.max(1,Math.min(s,Math.round(s*this.scale))),c=Math.max(1,Math.min(o,Math.round(o*this.scale))),m=this.exact?u:s,y=this.exact?c:o;if(!this.lowTex||this.allocSize[0]!==m||this.allocSize[1]!==y){if((x=this.lowTex)==null||x.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[m,y],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.allocSize=[m,y],(S=this.slopeTex)==null||S.destroy(),this.slopeTex=null,this.slopeView=null,this.rfTex.forEach(A=>A.destroy()),this.rfTex=[],this.rfViews=[],this.mode==="refetch")for(let A=0;A<3;A++){const z=this.device.createTexture({size:[m,y],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.rfTex.push(z),this.rfViews.push(z.createView())}oo[this.mode]!==void 0&&(this.slopeTex=this.device.createTexture({size:[m,y],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())}return this.lowSize=[u,c],{view:this.lowView,w:u,h:c}}pass(s,o,u,c){var z,G,q,$;const[m,y]=this.lowSize,x=`${m},${y},${u},${c}`;if(x!==this.last){const H=new Uint32Array([m,y,u,c,td[this.mode],0,0,0,0,0,0,0]),U=new Float32Array(H.buffer);U[5]=nd,U[6]=((z=this.splineKernel)==null?void 0:z.T)??.25,U[8]=((G=this.splineKernel)==null?void 0:G.K[0])??1,U[9]=((q=this.splineKernel)==null?void 0:q.K[1])??1,U[10]=(($=this.splineKernel)==null?void 0:$.K[2])??1,U[11]=0,this.device.queue.writeBuffer(this.uni,0,H),this.last=x}let S=this.bgCache.get(this.lowView);S||(S=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()},{binding:3,resource:this.splineTex.createView({dimension:"3d"})},{binding:4,resource:this.splineSampler}]}),this.bgCache.set(this.lowView,S));const A=s.beginRenderPass({colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});A.setPipeline(this.pipeline),A.setBindGroup(0,S),A.draw(3),A.end()}destroy(){var s,o;this.rfTex.forEach(u=>u.destroy()),(s=this.lowTex)==null||s.destroy(),(o=this.slopeTex)==null||o.destroy(),this.dummySlope.destroy(),this.splineTex.destroy(),this.uni.destroy()}}function jr(i){const s=new Float32Array([i]),o=new Uint32Array(s.buffer)[0],u=o>>>16&32768;let c=(o>>>23&255)-127+15,m=o&8388607;if((o>>>23&255)===255)return u|31744|(m?512:0);if(c>=31)return u|31744;if(c<=0){if(c<-10)return u;m|=8388608;const S=14-c;let A=m>>S;const z=m&(1<<S)-1,G=1<<S-1;return(z>G||z===G&&A&1)&&A++,u|A}let y=u|c<<10|m>>13;const x=m&8191;return(x>4096||x===4096&&y&1)&&y++,y}const Ts=64,Hr=-7,id=5;function Yr(i){const s=i&32768?-1:1,o=i>>10&31,u=i&1023;return o===0?s*u*2**-24:o===31?u?NaN:s*(1/0):s*(1+u/1024)*2**(o-15)}class ad{constructor(s,o,u,c={}){P(this,"n");P(this,"texelMode");P(this,"px");P(this,"py");P(this,"pz");P(this,"tpu");P(this,"op");P(this,"ext2s");P(this,"hist",new Float64Array(Ts));P(this,"cur",1);P(this,"agree",0);P(this,"tau");P(this,"pct");P(this,"levels");P(this,"upHold");P(this,"minPx");P(this,"continuous");P(this,"fMax");P(this,"rateUp");P(this,"rateDown");P(this,"deadband");P(this,"minF");this.tau=c.tau??1,this.pct=c.pct??.5,this.upHold=c.upHold??12,this.minPx=c.minPx??6,this.levels=(c.levels??[1,2,4]).slice().sort((Z,O)=>Z-O),this.continuous=c.continuous??!0,this.fMax=this.levels[this.levels.length-1],this.rateUp=c.rateUp??.03,this.rateDown=c.rateDown??.1,this.deadband=c.deadband??.06,this.minF=Math.max(1,c.minF??1.3);const m=Math.min(c.sample??4096,o),y=new Uint32Array(s.buffer,s.byteOffset,o*8),x=u?u.uv_extent:3,S=!!u&&!u.probe_mode&&u.num_rects===o&&u.rects_expanded.length>=o*4,A=S?Math.round(u.rects_expanded.length/o):0;this.texelMode=S;const z=[],G=[],q=[],$=[],H=[],U=[],V=o/m;for(let Z=0;Z<m;Z++){const O=Math.min(o-1,Math.floor(Z*V)),ee=Yr(y[O*8+3]&65535);if(!(ee>.02))continue;const F=Yr(y[O*8+4]&65535),te=Yr(y[O*8+4]>>>16),ce=Math.sqrt(Math.max(1e-12,F*te));let he;if(S){const pe=u.rects_expanded[O*A+2],Se=u.rects_expanded[O*A+3];if(!(pe>0&&Se>0))continue;he=Math.sqrt(pe*Se)/(2*x*ce)}else he=1/(2*x*ce);z.push(s[O*8]),G.push(s[O*8+1]),q.push(s[O*8+2]),$.push(he),H.push(ee),U.push(2*x*ce)}this.n=z.length,this.px=Float32Array.from(z),this.py=Float32Array.from(G),this.pz=Float32Array.from(q),this.tpu=Float32Array.from($),this.op=Float32Array.from(H),this.ext2s=Float32Array.from(U)}get factor(){return this.cur}reset(){this.cur=1,this.agree=0}choose(s,o,u){const c=s.rotation,m=s.position[0],y=s.position[1],x=s.position[2],S=s.getFovY(),A=Math.tan(S*.5),z=A*o/u,G=.5*u/A,q=this.hist;q.fill(0);let $=0,H=0;const U=Ts/(id-Hr);for(let O=0;O<this.n;O++){const ee=this.px[O]-m,F=this.py[O]-y,te=this.pz[O]-x,ce=c[2]*ee+c[6]*F+c[10]*te;if(!(ce>.05))continue;const he=c[0]*ee+c[4]*F+c[8]*te,pe=c[1]*ee+c[5]*F+c[9]*te;if(Math.abs(he)>1.15*ce*z||Math.abs(pe)>1.15*ce*A)continue;const Se=this.ext2s[O]*G/ce,Ee=this.texelMode?this.tpu[O]*ce/G:this.minPx/Se,Re=this.op[O]*Math.min(Se*Se,4096);let ke=Math.floor((Math.log2(Math.max(Ee,1e-9))-Hr)*U);ke=ke<0?0:ke>=Ts?Ts-1:ke,q[ke]+=Re,$+=Re,H++}let V=1/0;if($>0){let O=0;for(let ee=0;ee<Ts;ee++)if(O+=q[ee],O>=this.pct*$){V=2**(Hr+(ee+.5)/U);break}}if(this.continuous){let O=V>0?Math.min(this.fMax,Math.max(1,this.tau/V)):1;O<(this.cur===1?this.minF:this.minF/1.13)?O=1:this.cur===1&&(this.cur=this.minF/1.13);const ee=Math.log2(O)-Math.log2(this.cur);if(Math.abs(ee)>Math.log2(1+this.deadband)||O===1||O===this.fMax){const F=ee>0?Math.min(ee,this.rateUp):Math.max(ee,-this.rateDown);this.cur=Math.abs(ee)<=Math.abs(F)?O:2**(Math.log2(this.cur)+F)}return(this.cur<this.minF/1.13-1e-6||this.cur<1.02)&&(this.cur=1),{f:this.cur,q:V,visible:H,texelMode:this.texelMode}}let Z=1;for(const O of this.levels)O*V<=this.tau&&(Z=O);return Z<this.cur?(this.cur=Z,this.agree=0):Z>this.cur?++this.agree>=this.upHold&&(this.cur=Z,this.agree=0):this.agree=0,{f:this.cur,q:V,visible:H,texelMode:this.texelMode}}}const od=X.create(1,0,0),ld=X.create(0,1,0),cd=X.create(0,0,1);function ud(i,s){const o=i[0],u=i[4],c=i[8],m=i[1],y=i[5],x=i[9],S=i[2],A=i[6],z=i[10],G=o+y+z;let q,$,H,U;if(G>0){const V=.5/Math.sqrt(G+1);q=.25/V,$=(A-x)*V,H=(c-S)*V,U=(m-u)*V}else if(o>y&&o>z){const V=2*Math.sqrt(1+o-y-z);q=(A-x)/V,$=.25*V,H=(u+m)/V,U=(c+S)/V}else if(y>z){const V=2*Math.sqrt(1+y-o-z);q=(c-S)/V,$=(u+m)/V,H=.25*V,U=(x+A)/V}else{const V=2*Math.sqrt(1+z-o-y);q=(m-u)/V,$=(c+S)/V,H=(x+A)/V,U=.25*V}return s[0]=$,s[1]=H,s[2]=U,s[3]=q,s}class lo{constructor(s){P(this,"element");P(this,"enabled",!0);P(this,"center",X.create(0,0,0));P(this,"up",X.create(0,1,0));P(this,"rotation",[0,0]);P(this,"shift",[0,0]);P(this,"scroll",0);P(this,"speed",.1);P(this,"sensitivity",.08);P(this,"leftPressed",!1);P(this,"rightPressed",!1);P(this,"leftDragPans",!1);P(this,"lastX",0);P(this,"lastY",0);P(this,"touches",new Map);P(this,"lastTouchCenter",null);P(this,"lastPinchDistance",null);P(this,"lastTwoFingerAngle",null);P(this,"lastTouchCount",0);P(this,"roll",0);P(this,"_dir",X.create());P(this,"_right",X.create());P(this,"_upCam",X.create());P(this,"_scratch",X.create());P(this,"_qY",mt.create());P(this,"_qX",mt.create());P(this,"_qRot",mt.create());P(this,"_qZ",mt.create());P(this,"_qLocal",mt.create());P(this,"_qWorldToCam",mt.create());P(this,"_scratchMat3",Mt.create());P(this,"bboxMin",null);P(this,"bboxMax",null);P(this,"anchor",X.create(0,0,0));P(this,"downCallback",s=>{var o,u,c,m;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(u=(o=s.target)==null?void 0:o.setPointerCapture)==null||u.call(o,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(m=(c=s.target)==null?void 0:c.setPointerCapture)==null||m.call(c,s.pointerId),s.preventDefault())}});P(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const o=s.pageX-this.lastX,u=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=o,this.rotation[1]-=u):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=o,this.shift[0]+=u)});P(this,"upCallback",s=>{var o,u,c,m;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(u=(o=s.target)==null?void 0:o.releasePointerCapture)==null||u.call(o,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(m=(c=s.target)==null?void 0:c.releasePointerCapture)==null||m.call(c,s.pointerId),s.preventDefault()});P(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let o=s.deltaY;s.deltaMode===1?o*=16:s.deltaMode===2&&(o*=100),this.scroll+=o*.01});this.camera=s,this.registerElement(s.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const s=this.bboxMax[0]-this.bboxMin[0],o=this.bboxMax[1]-this.bboxMin[1],u=this.bboxMax[2]-this.bboxMin[2],c=.5*Math.sqrt(s*s+o*o+u*u);return c>1e-6?c:null}addRoll(s){this.roll+=s}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",o=>o.preventDefault())}setCenter(s){X.copy(s,this.center),X.copy(s,this.anchor)}setOrbitPivot(s){X.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const o=this.camera.rotation;X.set(o[2],o[6],o[10],this._dir),X.normalize(this._dir,this._dir),X.scale(this._dir,s,this._dir),X.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(X.subtract(this.center,s.position,this._scratch),X.length(this._scratch)<1e-6)return;X.normalize(this._scratch,this._scratch),X.cross(this.up,this._scratch,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right),X.normalize(this._right,this._right),X.cross(this._scratch,this._right,this._upCam),X.normalize(this._upCam,this._upCam);const o=s.rotation;o[0]=this._right[0],o[1]=this._upCam[0],o[2]=this._scratch[0],o[3]=0,o[4]=this._right[1],o[5]=this._upCam[1],o[6]=this._scratch[1],o[7]=0,o[8]=this._right[2],o[9]=this._upCam[2],o[10]=this._scratch[2],o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,s.update_buffer()}setBbox(s,o){this.bboxMin=X.create(s[0],s[1],s[2]),this.bboxMax=X.create(o[0],o[1],o[2]);const u=(s[0]+o[0])*.5,c=(s[1]+o[1])*.5,m=(s[2]+o[2])*.5;X.set(u,c,m,this.center),X.set(u,c,m,this.anchor)}resetToCamera(){const s=this.camera.rotation;X.set(s[2],s[6],s[10],this._dir),X.normalize(this._dir,this._dir);let o=null;if(this.bboxMin&&this.bboxMax){let u=-1/0,c=1/0,m=!1;for(let y=0;y<3;y++){const x=this._dir[y],S=this.bboxMin[y]-this.camera.position[y],A=this.bboxMax[y]-this.camera.position[y];if(Math.abs(x)>1e-8){const z=S/x,G=A/x;u=Math.max(u,Math.min(z,G)),c=Math.min(c,Math.max(z,G))}else if(S>0||A<0){m=!0;break}}!m&&u<=c&&c>0&&(o=(Math.max(u,0)+c)*.5)}if(o===null||!isFinite(o)||o<.001){X.subtract(this.anchor,this.camera.position,this._scratch);const u=X.dot(this._scratch,this._dir);o=u>.001?u:X.length(this._scratch)}o=Math.max(.1,o),X.scale(this._dir,o,this._dir),X.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const o=this.touches.values().next().value;if(this.lastTouchCenter){const u=o.x-this.lastTouchCenter[0],c=o.y-this.lastTouchCenter[1];this.rotation[0]+=u*.3,this.rotation[1]-=c*.3}this.lastTouchCenter=[o.x,o.y]}else if(s===2){const o=Array.from(this.touches.values()),u=(o[0].x+o[1].x)*.5,c=(o[0].y+o[1].y)*.5,m=o[1].x-o[0].x,y=o[1].y-o[0].y,x=Math.hypot(m,y),S=Math.atan2(y,m);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=u-this.lastTouchCenter[0],z=c-this.lastTouchCenter[1],G=Math.hypot(A,z),q=Math.abs(x-this.lastPinchDistance);let $=S-this.lastTwoFingerAngle;$>Math.PI&&($-=2*Math.PI),$<-Math.PI&&($+=2*Math.PI),G>.5&&(this.shift[1]-=A,this.shift[0]+=z),q>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(x/this.lastPinchDistance)*10),Math.abs($)>.0087&&(this.roll+=$)}this.lastTouchCenter=[u,c],this.lastPinchDistance=x,this.lastTwoFingerAngle=S}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const o=this.camera;{const V=o.rotation;this.up[0]=V[1],this.up[1]=V[5],this.up[2]=V[9],X.length(this.up)>1e-6?X.normalize(this.up,this.up):X.set(0,1,0,this.up)}let u=0,c=!1;Math.abs(this.roll)>1e-4&&(u=this.roll,this.roll=0,c=!0),X.subtract(o.position,this.center,this._dir);let m=X.length(this._dir);m<1e-6&&(m=1e-6);const y=Math.exp(Math.log(m)+this.scroll*s*10*this.speed);X.scale(this._dir,y/m,this._dir),m=y;const x=o.rotation;this._right[0]=x[0],this._right[1]=x[4],this._right[2]=x[8],X.normalize(this._right,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right);const S=X.create(x[1],x[5],x[9]);X.normalize(S,S),X.length(S)<1e-6&&X.set(0,1,0,S);const A=s*this.speed*.1*m,z=this.shift[1]*A,G=-this.shift[0]*A;X.scale(this._right,z,this._scratch),X.add(this.center,this._scratch,this.center),X.add(o.position,this._scratch,o.position),X.scale(S,G,this._scratch),X.add(this.center,this._scratch,this.center),X.add(o.position,this._scratch,o.position);const q=this.rotation[0]*s*this.sensitivity,$=this.rotation[1]*s*this.sensitivity;if(Math.abs(q)>1e-5||Math.abs($)>1e-5||c){const V=o.rotation;ud(V,this._qWorldToCam),mt.fromAxisAngle(od,-$,this._qX),mt.fromAxisAngle(ld,-q,this._qY),mt.multiply(this._qX,this._qY,this._qLocal),c&&(mt.fromAxisAngle(cd,1*u,this._qZ),mt.multiply(this._qZ,this._qLocal,this._qLocal)),mt.normalize(this._qLocal,this._qLocal),mt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),mt.normalize(this._qWorldToCam,this._qWorldToCam),Mt.fromQuat(this._qWorldToCam,this._scratchMat3),xt.fromMat3(this._scratchMat3,o.rotation);const Z=o.rotation,O=Z[2],ee=Z[6],F=Z[10];o.position[0]=this.center[0]-O*m,o.position[1]=this.center[1]-ee*m,o.position[2]=this.center[2]-F*m,this.up[0]=Z[1],this.up[1]=Z[5],this.up[2]=Z[9],X.normalize(this.up,this.up)}else X.add(this.center,this._dir,o.position);o.update_buffer();const U=Math.pow(.8,s*60);this.rotation[0]*=U,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=U,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=U,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=U,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=U,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function co(i){const s=X.create();for(const o of i)X.add(s,o,s);return X.scale(s,1/Math.max(i.length,1),s)}function uo(i,s){const o=Mt.create();Mt.inverse(i,o);const u=X.create();return u[0]=o[0]*s[0]+o[4]*s[1]+o[8]*s[2],u[1]=o[1]*s[0]+o[5]*s[1]+o[9]*s[2],u[2]=o[2]*s[0]+o[6]*s[1]+o[10]*s[2],u}function dd(i){const s=i.slice(),o=[1,0,0,0,1,0,0,0,1],u=(S,A)=>s[S*3+A],c=(S,A,z)=>{s[S*3+A]=z},m=(S,A)=>o[S*3+A],y=(S,A,z)=>{o[S*3+A]=z};for(let S=0;S<30;S++){let A=0,z=1,G=Math.abs(u(0,1));if(Math.abs(u(0,2))>G&&(A=0,z=2,G=Math.abs(u(0,2))),Math.abs(u(1,2))>G&&(A=1,z=2,G=Math.abs(u(1,2))),G<1e-12)break;const q=u(A,A),$=u(z,z),H=u(A,z);let U;Math.abs(q-$)<1e-30?U=Math.PI/4*Math.sign(H):U=.5*Math.atan2(2*H,q-$);const V=Math.cos(U),Z=Math.sin(U);for(let O=0;O<3;O++){const ee=u(O,A),F=u(O,z);c(O,A,V*ee+Z*F),c(O,z,-Z*ee+V*F)}for(let O=0;O<3;O++){const ee=u(A,O),F=u(z,O);c(A,O,V*ee+Z*F),c(z,O,-Z*ee+V*F)}for(let O=0;O<3;O++){const ee=m(O,A),F=m(O,z);y(O,A,V*ee+Z*F),y(O,z,-Z*ee+V*F)}}const x=[];for(let S=0;S<3;S++)x.push({val:u(S,S),vec:X.create(m(0,S),m(1,S),m(2,S))});return x.sort((S,A)=>A.val-S.val),{vals:[x[0].val,x[1].val,x[2].val],vecs:[x[0].vec,x[1].vec,x[2].vec]}}function pd(i,s){const o=co(i);let u=0,c=0,m=0,y=0,x=0,S=0;for(const H of i){const U=H[0]-o[0],V=H[1]-o[1],Z=H[2]-o[2];u+=U*U,c+=U*V,m+=U*Z,y+=V*V,x+=V*Z,S+=Z*Z}const A=[u,c,m,c,y,x,m,x,S],{vecs:z}=dd(A);let G=z[0],q=z[1],$=z[2];return X.dot($,s)<0&&(X.scale($,-1,$),X.scale(q,-1,q)),{centroid:o,normal:$,u:G,v:q}}function hd(i){let s=0,o=0,u=0,c=0,m=0,y=0,x=0,S=0,A=0;for(const[V,Z]of i){const O=-2*V,ee=-2*Z,F=1,te=-(V*V+Z*Z);s+=O*O,o+=O*ee,u+=O*F,c+=ee*ee,m+=ee*F,y+=F*F,x+=O*te,S+=ee*te,A+=F*te}const z=Mt.create(s,o,u,o,c,m,u,m,y),G=uo(z,X.create(x,S,A)),q=G[0],$=G[1],H=G[2],U=q*q+$*$-H;return{center:[q,$],radius:Math.sqrt(Math.max(U,1e-12))}}function fd(i,s){let o=0,u=0,c=0,m=0,y=0,x=0,S=0,A=0,z=0;for(let q=0;q<i.length;q++){const $=i[q],H=X.normalize(s[q],X.create()),U=1-H[0]*H[0],V=-H[0]*H[1],Z=-H[0]*H[2],O=1-H[1]*H[1],ee=-H[1]*H[2],F=1-H[2]*H[2];o+=U,u+=V,c+=Z,m+=O,y+=ee,x+=F,S+=U*$[0]+V*$[1]+Z*$[2],A+=V*$[0]+O*$[1]+ee*$[2],z+=Z*$[0]+ee*$[1]+F*$[2]}const G=Mt.create(o,u,c,u,m,y,c,y,x);return uo(G,X.create(S,A,z))}function po(i,s={}){if(i.length===0)return null;const o=s.tiltDownDeg??8,u=s.radiusScale??1,c=s.alignFirst??!0,m=(s.direction??"ccw")==="ccw"?1:-1,y=i.map(pe=>X.clone(pe.position)),x=i.map(pe=>{const Se=pe.rotation;return X.create(Se[8],Se[9],Se[10])}),S=i.map(pe=>{const Se=pe.rotation;return X.create(Se[4],Se[5],Se[6])}),A=co(S),z=X.normalize(X.scale(A,-1,X.create())),{centroid:G,normal:q,u:$,v:H}=pd(y,z),U=y.map(pe=>{const Se=X.sub(pe,G,X.create());return[X.dot(Se,$),X.dot(Se,H)]}),{center:V,radius:Z}=hd(U),O=Z*u,ee=X.add(G,X.add(X.scale($,V[0],X.create()),X.scale(H,V[1],X.create()),X.create()),X.create()),F=fd(y,x),te=O*Math.tan(o*Math.PI/180),ce=X.sub(F,X.scale(q,te,X.create()),X.create());let he=0;if(c){const pe=X.sub(y[0],ee,X.create());he=Math.atan2(X.dot(pe,H),X.dot(pe,$))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${O.toFixed(2)}, tilt=${o}°, normal=[${q[0].toFixed(2)}, ${q[1].toFixed(2)}, ${q[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:ee,radius:O,normal:q,u:$,v:H,lookAt:ce,startPhase:he,direction:m}}function ho(i,s){const o=(i.startPhase+s*i.direction)*2*Math.PI,u=Math.cos(o),c=Math.sin(o),m=X.add(i.center,X.add(X.scale(i.u,i.radius*u,X.create()),X.scale(i.v,i.radius*c,X.create()),X.create()),X.create()),y=X.normalize(X.sub(i.lookAt,m,X.create())),x=X.cross(y,i.normal,X.create());X.length(x)<1e-6&&X.copy(i.u,x),X.normalize(x,x);const S=X.cross(y,x,X.create());X.normalize(S,S);const A=xt.create();return A[0]=x[0],A[1]=S[0],A[2]=y[0],A[3]=0,A[4]=x[1],A[5]=S[1],A[6]=y[1],A[7]=0,A[8]=x[2],A[9]=S[2],A[10]=y[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:m,rotation:A,img_name:`orbit_${(s*1e3).toFixed(0)}`,id:0}}function _d(i,s={}){const o=po(i,s);if(!o)return[];const u=s.numViews??120;return Array.from({length:u},(c,m)=>({...ho(o,m/u),img_name:`circle_${m.toString().padStart(4,"0")}`,id:m}))}const fo="halloumi.renderer";function md(){const i=new URLSearchParams(window.location.search).get("renderer"),s=i==="webgl"||i==="webgpu"?i:null;let o=null;try{const u=localStorage.getItem(fo);(u==="webgl"||u==="webgpu")&&(o=u)}catch{}return{forced:s,stored:o}}function oi(i){try{localStorage.setItem(fo,i)}catch{}const s=new URLSearchParams(window.location.search);s.set("renderer",i),window.location.search=s.toString()}function Oa(i){return i==="bilinear"||i==="bicubic"||i==="hermite"||i==="texture"||i==="bc5"||i==="p"||i==="spline"||i==="refetch"?i:"off"}function dn(i){const s=(i&32768)>>15,o=(i&31744)>>10,u=i&1023;return o===0?(s?-1:1)*Math.pow(2,-14)*(u/1024):o===31?u?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,o-15)*(1+u/1024)}function li(i,s,o,u,c,m,y,x,S,A=.5){const z=S?S.length:y.length/8,G=[],q=[];for(let U=0;U<z;U++){const Z=(S?S[U]:U)*8,O=y[Z]-i,ee=y[Z+1]-s,F=y[Z+2]-o,te=O*u+ee*c+F*m;if(te<=0||!(x[Z+7]>>>16&1))continue;const ce=x[Z+4],he=dn(ce&65535),pe=dn(ce>>>16&65535),Se=3*Math.max(he,pe),Ee=O-te*u,Re=ee-te*c,ke=F-te*m;if(Ee*Ee+Re*Re+ke*ke>Se*Se)continue;const de=dn(x[Z+3]&65535);if(de<1/255)continue;const N=x[Z+5],xe=x[Z+6];let we=dn(N&65535),_e=dn(N>>>16&65535),me=dn(xe&65535),ae=dn(xe>>>16&65535);const Pe=Math.hypot(we,_e,me,ae)||1;we/=Pe,_e/=Pe,me/=Pe,ae/=Pe;const Ie=1-2*(me*me+ae*ae),Ae=2*(_e*me+we*ae),Le=2*(_e*ae-we*me),oe=2*(_e*me-we*ae),Ce=1-2*(_e*_e+ae*ae),Be=2*(me*ae+we*_e),I=2*(_e*ae+we*me),Q=2*(me*ae-we*_e),C=1-2*(_e*_e+me*me),l=u*I+c*Q+m*C;if(Math.abs(l)<1e-6)continue;const f=(O*I+ee*Q+F*C)/l;if(!(f>0))continue;const p=f*u-O,w=f*c-ee,M=f*m-F,D=(p*Ie+w*Ae+M*Le)/(he||1e-6),R=(p*oe+w*Ce+M*Be)/(pe||1e-6),a=D*D+R*R;if(a>9)continue;const g=Math.min(.99,de*Math.exp(-.5*a));g<1/255||(G.push(f),q.push(g))}if(G.length===0)return null;const $=G.map((U,V)=>V).sort((U,V)=>G[U]-G[V]);let H=1;for(const U of $)if(H*=1-q[U],H<A)return G[U];return null}function dr(i,s,o){const u=(i-o.viewport[0]*.5)/o.focal[0],c=-((s-o.viewport[1]*.5)/o.focal[1]),m=o.rotation;let y=u*m[0]+c*m[1]+m[2],x=u*m[4]+c*m[5]+m[6],S=u*m[8]+c*m[9]+m[10];const A=Math.hypot(y,x,S)||1;return[y/A,x/A,S/A]}function ci(i,s,o,u,c,m){const[y,x,S]=dr(i,s,u),A=u.position[0],z=u.position[1],G=u.position[2],q=new Uint32Array(c.buffer,c.byteOffset,c.length);let $=li(A,z,G,y,x,S,c,q,null,.5);return $===null&&($=li(A,z,G,y,x,S,c,q,null,.8)),$===null?null:[A+$*y,z+$*x,G+$*S]}function _o(i,s){const o=i.viewport[0],u=i.viewport[1],c=new Uint32Array(s.buffer,s.byteOffset,s.length),m=i.position[0],y=i.position[1],x=i.position[2],[S,A,z]=dr(o*.5,u*.5,i),G=.06*Math.max(o,u),q=(G+2)/i.focal[0],$=s.length/8,H=[];for(let O=0;O<$;O++){const ee=O*8,F=s[ee]-m,te=s[ee+1]-y,ce=s[ee+2]-x,he=F*S+te*A+ce*z;if(he<=0)continue;const pe=c[ee+4],Se=3*Math.max(dn(pe&65535),dn(pe>>>16&65535)),Ee=F-he*S,Re=te-he*A,ke=ce-he*z,de=he*q+Se;Ee*Ee+Re*Re+ke*ke<=de*de&&H.push(O)}if(H.length===0)return null;const U=Int32Array.from(H),V=[],Z=5;for(let O=0;O<Z;O++)for(let ee=0;ee<Z;ee++){const F=o*.5+(ee-(Z-1)/2)/((Z-1)/2)*G,te=u*.5+(O-(Z-1)/2)/((Z-1)/2)*G,[ce,he,pe]=dr(F,te,i),Se=li(m,y,x,ce,he,pe,s,c,U,.5);Se!==null&&V.push(Se*(ce*S+he*A+pe*z))}return V.length<3?null:(V.sort((O,ee)=>O-ee),V[V.length>>1])}function bd(i){return new Promise(s=>{const o=document.createElement("input");o.type="file",o.accept=i,o.style.display="none",o.onchange=()=>{var u;return s(((u=o.files)==null?void 0:u[0])??null)},document.body.appendChild(o),o.click(),setTimeout(()=>document.body.removeChild(o),1e3)})}function vd(i,s,o){const u=document.getElementById("ui-panel-container"),c=document.getElementById("load-button"),m=document.getElementById("quick-links");c&&(c.onclick=async()=>{const A=await bd(".ply,.bitymi");if(A)if(u&&(u.style.display="none"),A.name.toLowerCase().endsWith(".bitymi")){const z=await A.arrayBuffer(),{pcBuffer:G}=pi(z),q=new File([G],A.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),$=await rr(q,i);s($)}else{const z=await rr(A,i);s(z)}}),m&&(m.innerHTML="");const y=new URLSearchParams(window.location.search),x=y.get("bundle")??y.get("model_url"),S=y.get("camera_url");x&&(u&&(u.style.display="none"),o(x,S))}async function gd(i,s,o){const{bundle:u}=await ls(i,(y,x)=>o(`downloading B ... ${(y/1048576).toFixed(1)}${x?` / ${(x/1048576).toFixed(1)}`:""} MB`));if(!u)throw new Error("bundle_b must be a .bitymi bundle");o("parsing B ...");const c=await rr(new File([u.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),s);let m=null;if(u.atlasBuffer){o("uploading B atlas ...");try{m=await ni(s,Nn(u.atlasBuffer),!0)}catch(y){console.warn("[A/B] B atlas failed:",y)}}return{pc:c,atlas:m}}function Xr(i){const s=new Uint32Array(i.surfel_data.buffer,i.surfel_data.byteOffset,i.num_points*8);for(let o=0;o<i.num_points;o++){const u=s[o*8+7];if(!(u>>>16&1)||(u>>>17&1)===1)return!0}return!1}async function wd(i,s,o,u){const c=new ur(i,o),m=new lo(c);let y=!1;i.addEventListener("pointerdown",()=>{y=!0}),window.addEventListener("pointerup",()=>{y=!1});const x=typeof window<"u"&&window.parent!==window,S={pos:new Float32Array(3),rot:new Float32Array(16)};if(x){window.addEventListener("message",l=>{const f=l.data;if(!(!f||f.type!=="halloumi_sync_pose")&&!(!Array.isArray(f.position)||f.position.length!==3)&&!(!Array.isArray(f.rotation)||f.rotation.length!==16)){for(let p=0;p<3;p++)c.position[p]=f.position[p];for(let p=0;p<16;p++)c.rotation[p]=f.rotation[p];c.update_buffer(),m.resetToCamera();for(let p=0;p<3;p++)S.pos[p]=c.position[p];for(let p=0;p<16;p++)S.rot[p]=c.rotation[p]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const A=()=>{if(!x)return;const l=c.position,f=c.rotation;let p=!1;for(let w=0;w<3;w++)if(Math.abs(l[w]-S.pos[w])>1e-6){p=!0;break}if(!p){for(let w=0;w<16;w++)if(Math.abs(f[w]-S.rot[w])>1e-6){p=!0;break}}if(p){for(let w=0;w<3;w++)S.pos[w]=l[w];for(let w=0;w<16;w++)S.rot[w]=f[w];try{window.parent.postMessage({type:"halloumi_camera_state",position:[l[0],l[1],l[2]],rotation:Array.from(f)},"*")}catch{}}},z="rgba8unorm";s.configure({device:o,format:z,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let G=null,q=null,$=null,H=[0,0,0,0];const U=()=>{c.on_update_canvas(),G!==null&&yn(i.width,i.height,o,G.render_settings_buffer),q!==null&&q()};new ResizeObserver(()=>{const l=Math.max(.25,N.render_scale),f=Math.max(1,Math.ceil(l*i.clientWidth)),p=Math.max(1,Math.ceil(l*i.clientHeight));i.width===f&&i.height===p||(i.width=f,i.height=p,U())}).observe(i);let Z=0,O=0;const ee=()=>{(i.width!==Z||i.height!==O)&&(Z=i.width,O=i.height,U())},F=new URLSearchParams(window.location.search);let ce=F.get("animation")==="1";m.enabled=!ce;const he=F.get("camera_url"),pe=F.get("bfc"),Se=pe==="1"||pe==="true",Ee=F.get("bfc_cos"),Re=Ee!==null?Number(Ee):NaN,ke=Number.isFinite(Re)?Re:2,de=Math.max(1,window.devicePixelRatio||1),N={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:ce,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Se,bfc_cos:ke,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:["1","true"].includes(new URLSearchParams(location.search).get("upon")??"")?Oa(new URLSearchParams(location.search).get("up")):"off",upscale_factor:(l=>l>0&&l<1?Math.max(1.05,Math.min(8,1/l)):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1")),upscale_auto:new URLSearchParams(location.search).get("rs")==="auto",clip_on:["x","y","z"].includes((new URLSearchParams(location.search).get("clip")??"").toLowerCase()),clip_t:parseFloat(new URLSearchParams(location.search).get("clip_t")??"0.5"),rf_edge:new URLSearchParams(location.search).get("rf_edge")!=="0",adapt_heat:["1","true"].includes(new URLSearchParams(location.search).get("adapt_heat")??""),adapt_tau:(l=>l>0?l:1)(parseFloat(new URLSearchParams(location.search).get("adapt_tpp")??"1")),slope_mip:["1","true"].includes(new URLSearchParams(location.search).get("slope_mip")??"")},xe=new io.Pane({title:"Config",expanded:!0}),we={stats:"— loading —"};xe.addMonitor(we,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2});let _e=null;const me=xe.addInput(N,"atlas_enabled",{label:"Texture"}).on("change",l=>_e==null?void 0:_e(l.value));let ae=null;const Pe=new URLSearchParams(location.search),Ie={x:0,y:1,z:2}[(Pe.get("clip")??"").toLowerCase()]??2,Ae=(Pe.get("clip_keep")??"lower")!=="upper";let Le=[parseFloat(Pe.get("clip_min")??"NaN"),parseFloat(Pe.get("clip_max")??"NaN")];N.clip_on&&xe.addInput(N,"clip_t",{label:`Clip (${"xyz"[Ie]})`,min:0,max:1,step:.002}),N.clip_on&&xe.addInput(N,"clip_on",{label:"Clip on"});const oe=xe.addFolder({title:"⚙ Advanced options",expanded:!1}),Ce=new Wa;xe.on("change",()=>Ce.request()),window.__halloumiRedraw=()=>Ce.request(),window.__halloumiGate=Ce;const Be={on:N.upscale!=="off"},I=oe.addInput(Be,"on",{label:"Upscaling (2×)"}).on("change",l=>ae==null?void 0:ae(l.value));oe.addInput(N,"animate",{label:"Animate"}).on("change",l=>{const f=ce;ce=l.value,m.enabled=!l.value,!f&&ce&&Q.value&&Q.value.onAnimateStart(),f&&!ce&&Q.value&&Q.value.onAnimateStop()}),oe.addInput(N,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Q={value:null};vd(o,l=>C(l,[],null),async(l,f)=>{let p=f??he,w,M=null;const D=l.toLowerCase();if(D.endsWith(".bitymi")||D.includes(".bitymi?")){cs("downloading bundle ...");try{const{bundle:b}=await ls(l,(v,T,E,B)=>{if(B==="cache"){At(`loading cached bundle ...
${(v/1048576).toFixed(1)}${T?` / ${(T/1048576).toFixed(1)}`:""} MB on this device`);return}const Y=v/(1024*1024),W=T?T/(1024*1024):void 0,re=E/(1024*1024),ne=T?Math.min(99,Math.floor(v/T*100)):void 0,se=W?`total ${W.toFixed(1)} MB`:"total -- MB",be=W&&ne!==void 0?`${Y.toFixed(1)} MB downloaded (${ne}%)`:`${Y.toFixed(1)} MB downloaded`,Me=`${re.toFixed(2)} MB/s`;At(`downloading bundle ...
${se}, ${be}
${Me}`)});if(!b)throw new Error("Expected a .bitymi bundle");At("parsing PLY ...");const d=new File([b.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(w=await rr(d,o),!p&&b.camerasBuffer&&(p=URL.createObjectURL(new Blob([b.camerasBuffer],{type:"application/json"}))),b.atlasBuffer){const v=b.atlasBuffer.byteLength/1048576;At(`uploading atlas ...
${v.toFixed(1)} MB BC7`);try{const T=Nn(b.atlasBuffer);M=await ni(o,T,!0)}catch(T){console.warn("[atlas] failed to parse/upload atlas:",T)}}}catch(b){throw nn(),b}}else w=await fu(l,o);let R=null,a="";const g=F.get("atlas2");if(g)try{const{bundle:b}=await ls(g,(d,v)=>{At(`downloading second atlas ...
${(d/1048576).toFixed(1)}${v?` / ${(v/1048576).toFixed(1)}`:""} MB`)});if(!(b!=null&&b.atlasBuffer))throw new Error("second bundle has no atlas chunk");At("uploading second atlas ..."),R=await ni(o,Nn(b.atlasBuffer),!0),R||(a="second atlas: format unsupported on this device")}catch(b){console.warn("[atlas2] failed:",b),a=`second atlas failed: ${b}`}const h=p?await ai(p):[];h.length>0&&c.set_preset(h[0]),C(w,h,M,R,a)});function C(l,f=[],p=null,w=null,M=""){const D=[(l.bbox.min[0]+l.bbox.max[0])/2,(l.bbox.min[1]+l.bbox.max[1])/2,(l.bbox.min[2]+l.bbox.max[2])/2];if(m.setBbox(l.bbox.min,l.bbox.max),!(isFinite(Le[0])&&isFinite(Le[1]))){const k=l.bbox.min[Ie],K=l.bbox.max[Ie];Le=[k+.3*(K-k),k+.7*(K-k)]}N.clip_on&&console.log(`[clip] axis ${"xyz"[Ie]} keep ${Ae?"lower":"upper"} range ${Le[0].toFixed(3)}..${Le[1].toFixed(3)}`),.5*Math.sqrt((l.bbox.max[0]-l.bbox.min[0])**2+(l.bbox.max[1]-l.bbox.min[1])**2+(l.bbox.max[2]-l.bbox.min[2])**2);function R(k,K){const J=ci(k,K,i,c,l.surfel_data);J&&(m.setOrbitPivot(J),console.log(`[pick] orbit pivot → (${J[0].toFixed(3)}, ${J[1].toFixed(3)}, ${J[2].toFixed(3)})`))}function a(){const k=_o(c,l.surfel_data);if(k!==null&&k>.001){m.setOrbitDepth(k);return}const K=c.rotation,J=K[2],ie=K[6],le=K[10],ue=(l.centroid[0]-c.position[0])*J+(l.centroid[1]-c.position[1])*ie+(l.centroid[2]-c.position[2])*le;ue>.001&&m.setOrbitDepth(ue)}if(f.length===0){const k=l.bbox.max[0]-l.bbox.min[0],K=l.bbox.max[1]-l.bbox.min[1],J=l.bbox.max[2]-l.bbox.min[2],le=.5*Math.sqrt(k*k+K*K+J*J)*.5;X.set(D[0]-le,D[1]-le,D[2]-le,c.position);const ue=X.create(le,le,le);X.normalize(ue,ue);const fe=X.create(0,1,0),ve=X.create();X.cross(fe,ue,ve),X.normalize(ve,ve);const Te=X.create();X.cross(ue,ve,Te);const Ge=Mt.create(ve[0],Te[0],ue[0],ve[1],Te[1],ue[1],ve[2],Te[2],ue[2]);xt.fromMat3(Ge,c.rotation),c.update_buffer()}m.setCenter(X.create(l.centroid[0],l.centroid[1],l.centroid[2]));const g=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),h="halloumi.fetch_by_id";let b=null;try{const k=localStorage.getItem(h);(k==="0"||k==="1")&&(b=k==="1")}catch{}const d=F.get("byid"),v={fetchById:d!==null?d==="1":b!==null?b:!g,octBound:F.get("oct")==="1",acc16:F.get("acc16")==="1",staticSortKeys:null},T=F.get("bsp");let E=null;T&&(v.staticSortKeys=new Float32Array(l.num_points),E=Yu(T).then(k=>{if(k.nSurfels!==l.num_points)throw new Error(`BSP has ${k.nSurfels} surfels, scene has ${l.num_points}`);return console.log(`[bsp] loaded ${T}: ${k.nNodes} nodes over ${k.nSurfels} surfels`),k}));let B=new cr(l,o,z,c.uniform_buffer,u,p,v);const Y=F.get("surfel_math");N.surfel_math=Y==="raysplat"||Y==="centred"?Y:F.get("raysplat")==="1"?"raysplat":"conic",N.hyp_legacy=F.get("hyp_legacy")==="1",N.mip2d=F.get("mip2d")==="1";{const k=parseFloat(F.get("mip2d_k")??"");Number.isFinite(k)&&k>0&&(N.mip2d_k=k)}Pa(N.mip2d,N.mip2d_k,o,B.render_settings_buffer),is({hypLegacy:N.hyp_legacy,raysplat:N.surfel_math==="raysplat",centred:N.surfel_math==="centred"},o,B.render_settings_buffer),N.legacy_renderer=F.get("legacy")==="1",N.legacy_renderer&&B.setLegacyRenderer(!0),N.two_pass=F.get("twopass")==="1"&&!As;{const k=parseFloat(F.get("opaque_t")??"");Number.isFinite(k)&&(N.opaque_thresh=Math.min(.99,Math.max(.01,k)))}B.setOpaqueThresh(N.opaque_thresh),N.two_pass&&B.setTwoPass(!0);{const k=F.get("overdraw");(k==="shaded"||k==="raster"||k==="1")&&(N.overdraw=k==="raster"?"raster":"shaded");const K=parseInt(F.get("overdraw_max")??"",10);Number.isFinite(K)&&K>0&&(N.overdraw_max=K)}B.setOverdrawMax(N.overdraw_max),N.overdraw!=="off"&&B.setOverdrawMode(N.overdraw==="raster"?2:1),N.fetch_by_id=v.fetchById,console.log(`[render_2dgs] fetch_by_id=${v.fetchById} (source: ${d!==null?"?byid":b!==null?"remembered":`handheld=${g}`})`),G=B,yn(i.width,i.height,o,B.render_settings_buffer),N.atlas_enabled=p!==null;{const k=l.surfel_data,K=k.length/8;let J=0,ie=0,le=0;for(let fe=0;fe<K;fe++)J+=k[fe*8],ie+=k[fe*8+1],le+=k[fe*8+2];const ue=K>0?[J/K,ie/K,le/K]:[0,0,0];B.setBfcParams(N.bfc_cos,ue),is({bfc:N.bfc},o,B.render_settings_buffer),console.log(`[bfc] flag=${N.bfc} cos=${N.bfc_cos} centroid=(${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)})`)}let W=!1;const re=(()=>{if(p!==null)return`${p.meta.format===2?"BC7":p.meta.format===3?"ASTC 4×4":p.meta.format===7?"BC7 codebook gather (typeD)":`format=${p.meta.format}`} ${p.meta.width}×${p.meta.height}, ${p.meta.n_layers} layers`;const k=o.features.has("texture-compression-bc"),K=o.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(k?["BC7"]:[]).concat(K?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",re),xa(l.sh_bias,o,B.render_settings_buffer),wa(N.gaussian_scaling,o,B.render_settings_buffer),N.sh_bias=l.sh_bias;let ne=l.num_points.toLocaleString();we.stats=`${ne} surfels · -- fps`;const se=.4,be=3,Me=.3;let ye=null,De=0,$e=0;const Ve=mt.create(),nt=Mt.create();let Ne=f.length>0?0:-1;const it={view:f.length>0?`${Ne+1} / ${f.length}: ${f[Ne].img_name??Ne}`:"— no presets —"},st=document.createElement("span");function at(k){const K=Mt.create(k[0],k[1],k[2],k[4],k[5],k[6],k[8],k[9],k[10]);return mt.fromMat(K)}function Je(k,K){ye={fromPos:X.clone(c.position),toPos:X.clone(k.position),fromQuat:mt.normalize(at(c.rotation)),toQuat:mt.normalize(at(k.rotation)),target:k,t:0,duration:Math.max(.01,K)}}const Xe=(k,K=!0)=>{if(f.length===0)return;Ne=(k%f.length+f.length)%f.length;const J=f[Ne];K?Je(J,se):(c.set_preset(J),m.resetToCamera(),a()),it.view=`${Ne+1} / ${f.length}: ${f[Ne].img_name??Ne}`,st.textContent=it.view};if(f.length>0){const k=oe.addSeparator(),K=document.createElement("div");K.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const J=(le,ue,fe)=>{const ve=document.createElement("button");return ve.className="tp-btnv_b",ve.textContent=le,ve.title=ue,ve.style.cssText="flex:0 0 34px;height:24px;padding:0;",ve.addEventListener("click",fe),ve};st.textContent=it.view,st.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",K.appendChild(J("◀","previous view (←)",()=>Xe(Ne-1))),K.appendChild(st),K.appendChild(J("▶","next view (→)",()=>Xe(Ne+1))),(k.element.parentElement??oe.element.querySelector(".tp-fldv_c")??oe.element).insertBefore(K,k.element),k.dispose()}const Qe=f.length>0?po(f,{tiltDownDeg:15,alignFirst:!0}):null,ft=Qe?_d(f,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ot=0;const lt=12;Q.value={onAnimateStart:()=>{ot=0},onAnimateStop:()=>{m.resetToCamera(),a()}};const et=k=>{const K=Math.max(.25,k),J=Math.max(1,Math.ceil(K*i.clientWidth)),ie=Math.max(1,Math.ceil(K*i.clientHeight));(i.width!==J||i.height!==ie)&&(i.width=J,i.height=ie,U())},dt=oe.addInput(N,"render_scale",{label:"Render scale",min:.25,max:de,step:.25}).on("change",k=>et(k.value)),qe=new URLSearchParams(location.search),Ze={};for(const k of["bc5","p"]){const K=qe.get(`slope_${k}`),J=qe.get(`slope_${k}_4x`);K&&(Ze[`${k}2`]=K),(J||K)&&(Ze[`${k}4`]=J??K)}const pt={},Et={slope:""},Tt=(k,K)=>{const J=`${k}${K>=2.83?4:2}`;if(Ze[J]===Ze[`${k}2`]&&J!==`${k}2`)return Tt(k,2);const ie=pt[J],le=`${k.toUpperCase()} ${K>=2.83?4:2}x`;return ie&&ie!=="loading"&&ie!=="failed"?ie:(ie===void 0&&Ze[J]&&(pt[J]="loading",Et.slope=`${le}: downloading…`,(async()=>{try{const ue=await ro(Ze[J],(ve,Te,Ge,Ye)=>{Et.slope=`${le}: ${Ye==="cache"?"cached ":""}${(ve/1048576).toFixed(0)}${Te?` / ${(Te/1048576).toFixed(0)}`:""} MB`}),fe=await hu(o,Nn(ue),p?p.meta:null);if(!fe)throw new Error("unsupported on this device or layout mismatch (see console)");pt[J]=fe,Et.slope=`${le}: ready (${fe.mb.toFixed(0)} MB on GPU)`,Ce.request()}catch(ue){console.warn(`[slope ${le}]`,ue),pt[J]="failed",Et.slope=`${le}: failed — ${ue}`}})()),null)};let Rt=null;const vt=parseFloat(qe.get("rf_thr")??"0.02"),yt=parseFloat(qe.get("rf_gain")??"1"),zt=qe.get("spline");let Vt=null;zt&&Ze.bc52&&fetch(zt).then(k=>k.json()).then(k=>{Vt={K:k.K,R:k.R,T:k.T,w:Float32Array.from(k.w)},console.log("[spline] kernel",k.K,"T",k.T,k.tag??"")}).catch(k=>console.warn("[spline] kernel load failed",k));const It={off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware (green)":"texture"};Ze.bc52&&(It["texture BC5 (finetuned)"]="bc5"),Ze.p2&&(It["texture P (finetuned)"]="p"),Ze.bc52&&zt&&(It["texture BC5 + learned spline kernel"]="spline"),It["texture re-fetch, top-4 surfels (no training)"]="refetch";const Yt=oe.addInput(N,"upscale",{label:"Upscale",options:It}).on("change",()=>{N.upscale==="off"&&(U(),ct()),Be.on=N.upscale!=="off",I.refresh()});oe.addInput(N,"rf_edge",{label:"Re-fetch: edges"});const Dt=Oa(qe.get("up")),Bt=Dt!=="off"&&!((Dt==="bc5"||Dt==="p")&&!Ze[`${Dt}2`])&&!(Dt==="spline"&&!(Ze.bc52&&zt))?Dt:Ze.bc52?"bc5":"hermite";I.label=Bt==="bc5"||Bt==="p"||Bt==="spline"?"Upscaling (texture-aware 2×)":`Upscaling (${Bt==="hermite"?"Hermite":Bt} 2×)`;const ct=()=>{N.render_scale!==1&&(N.render_scale=1,dt.refresh(),et(1))};ae=k=>{k?(N.upscale=Bt,N.upscale_factor=2):(N.upscale="off",U()),ct(),Yt.refresh()},(Ze.bc52||Ze.p2)&&oe.addMonitor(Et,"slope",{label:"Slope data",interval:300}),oe.addInput(N,"upscale_factor",{label:"Upscale factor (render at 1/f)",min:1.05,max:4,step:.05});const Ut=new ad(l.surfel_data,l.num_points,p?p.meta:null,{tau:N.adapt_tau,pct:parseFloat(qe.get("adapt_pct")??"0.5"),levels:(qe.get("adapt_levels")??"1,2,4").split(",").map(Number).filter(k=>k>=1),continuous:!["0","false"].includes(qe.get("adapt_cont")??""),rateUp:parseFloat(qe.get("adapt_rate")??"0.03"),rateDown:parseFloat(qe.get("adapt_rate_down")??"0.1"),minF:parseFloat(qe.get("adapt_min")??"1.3"),upHold:parseInt(qe.get("adapt_hold")??"12"),minPx:parseFloat(qe.get("adapt_px")??"6")});N.upscale_auto&&N.upscale==="off"&&["1","true"].includes(qe.get("upon")??"")&&(N.upscale=Bt);const Pn={adapt:Ut.texelMode?"texel mode":"no atlas rects: surfel-width mode"};oe.addInput(N,"upscale_auto",{label:"Adaptive factor"}).on("change",()=>Ut.reset()),oe.addInput(Ut,"continuous",{label:"Adaptive: continuous factor"}).on("change",()=>Ut.reset()),oe.addMonitor(Pn,"adapt",{label:"Adaptive",interval:250}),oe.addInput(N,"slope_mip",{label:"Slope mip-matched"}).on("change",()=>Ea(N.slope_mip,o,B.render_settings_buffer)),N.slope_mip&&Ea(!0,o,B.render_settings_buffer);const Xt=()=>Qc(N.adapt_heat?Ut.tau:0,o,B.render_settings_buffer);oe.addInput(N,"adapt_heat",{label:"Adaptive heatmap (red 1x · yellow 2x · green 4x)"}).on("change",Xt),oe.addInput(N,"adapt_tau",{label:"Adaptive bias (texels/px)",min:.25,max:4,step:.05}).on("change",k=>{Ut.tau=k.value,Ut.reset(),Xt()}),N.adapt_heat&&Xt(),oe.addInput(N,"bfc",{label:N.bfc_cos<1.5?`Backface cull (cos ${N.bfc_cos})`:"Backface cull"}).on("change",()=>{is({bfc:N.bfc},o,B.render_settings_buffer)});const Sn={res:""},jt=()=>{const k=i.width*i.height/1e6;Sn.res=`${i.width}×${i.height}  (${k.toFixed(2)} MP)
CSS ${i.clientWidth}×${i.clientHeight} · DPR ${de.toFixed(2)} · native ${Math.round(i.clientWidth*de)}×${Math.round(i.clientHeight*de)}`};jt(),q=jt,oe.addMonitor(Sn,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),oe.addInput(N,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",k=>wa(k.value,o,B.render_settings_buffer)),oe.addInput(N,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",k=>xa(k.value,o,B.render_settings_buffer)),oe.addInput(N,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",k=>{B.bgColor=[k.value.r,k.value.g,k.value.b,k.value.a]});const Zt=k=>k===null?"":k.meta.format===3||k.meta.format===8||k.meta.format===10?" (ASTC)":" (BC7)";let Qt=Zt(p);const Ft=document.createElement("button");Ft.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const En=()=>{Ft.textContent=`Texture${Qt}: ${N.atlas_enabled?"ON":"OFF"}`,Ft.style.borderColor=N.atlas_enabled?"#f0b060":"#444",Ft.style.color=N.atlas_enabled?"#f0b060":"#bbb"},Ds=()=>{N.atlas_enabled=!N.atlas_enabled,B.setAtlasEnabled(N.atlas_enabled),me.refresh(),En()};me.label=`Texture${Qt}`,_e=k=>{B.setAtlasEnabled(k),En(),Ce.request()},me.refresh(),Ft.title="toggle the baked texture (T)",Ft.addEventListener("click",Ds),p&&document.body.appendChild(Ft),En();const sn=F.get("bundle_b");let us=()=>{};if({}.VITE_MIP2D_UI==="1"&&(Xr(l)||sn)){const k=document.createElement("button");k.style.cssText=Ft.style.cssText.replace("top:8px","top:42px"),k.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let K=null;const J=()=>{k.textContent=`Mip 2D filter: ${N.mip2d?"ON":"OFF"}`,k.style.borderColor=N.mip2d?"#f0b060":"#444",k.style.color=N.mip2d?"#f0b060":"#bbb";try{const le=new URL(window.location.href);N.mip2d?le.searchParams.set("mip2d","1"):le.searchParams.delete("mip2d"),history.replaceState(history.state,"",le.toString())}catch{}},ie=()=>{Pa(N.mip2d,N.mip2d_k,o,B.render_settings_buffer),K==null||K.refresh(),J()};k.addEventListener("click",()=>{N.mip2d=!N.mip2d,ie()}),K=oe.addInput(N,"mip2d",{label:"Mip 2D filter"}).on("change",()=>ie()),document.body.appendChild(k),J(),us=()=>{const le=Xr(l);k.style.display=le?"":"none",K&&(K.hidden=!le)},us(),window.__halloumiMip2D={get on(){return N.mip2d},toggle:()=>k.click()}}let kn=()=>{};if(sn){const k=F.get("label_a")??"A",K=F.get("label_b")??"B",J={a:{pc:l,atlas:p,renderer:B},b:null};let ie="a",le=null;const ue=document.createElement("button");ue.style.cssText=Ft.style.cssText.replace("top:8px","top:76px"),ue.title=`switch between the two bakes of this scene (B key): ${k} / ${K}`;const fe=(Ue="")=>{ue.textContent=Ue||`Scene: ${ie==="a"?k:K}  ⇄`,ue.style.borderColor=ie==="b"?"#60b0f0":"#f0b060",ue.style.color=ie==="b"?"#60b0f0":"#f0b060";try{const je=new URL(window.location.href);ie==="b"?je.searchParams.set("side","b"):je.searchParams.delete("side"),history.replaceState(history.state,"",je.toString())}catch{}},ve=()=>J.b?Promise.resolve(J.b):(le||(le=gd(sn,o,Ue=>{ie==="a"&&fe(Ue)}).then(Ue=>(J.b={pc:Ue.pc,atlas:Ue.atlas,renderer:null},fe(),J.b))),le),Te=Ue=>{const je=Kt.slice(0);Ue.renderer=new cr(Ue.pc,o,z,c.uniform_buffer,u,Ue.atlas,Ue===J.a?v:{...v,staticSortKeys:null}),new Uint8Array(Kt).set(new Uint8Array(je))},Ge=Ue=>{const je=J[Ue];je.renderer||Te(je);const ht=B,We=je.renderer;We.bgColor=[...ht.bgColor],We.setAtlasEnabled(N.atlas_enabled&&je.atlas!==null),We.setLegacyRenderer(N.legacy_renderer),We.setOpaqueThresh(N.opaque_thresh),We.setTwoPass(N.two_pass),We.setOverdrawMax(N.overdraw_max),We.setOverdrawMode(N.overdraw==="off"?0:N.overdraw==="raster"?2:1),We.setMsaa(N.msaa),We.setFetchById(N.fetch_by_id);{const wt=je.pc.surfel_data,Fe=wt.length/8;let Pt=0,en=0,Hn=0;for(let tn=0;tn<Fe;tn++)Pt+=wt[tn*8],en+=wt[tn*8+1],Hn+=wt[tn*8+2];We.setBfcParams(N.bfc_cos,Fe>0?[Pt/Fe,en/Fe,Hn/Fe]:[0,0,0])}Xc(je.pc.feature_mode,void 0,void 0,!1),Yc(je.pc.K,void 0,void 0,!1),yn(i.width,i.height,void 0,void 0,!1),mr(o,We.render_settings_buffer),B=We,G=We,l=je.pc,p=je.atlas,ne=l.num_points.toLocaleString(),ie=Ue,us(),fe(),console.log(`[A/B] active = ${Ue} (${Ue==="a"?k:K}): ${l.num_points} surfels, feature_mode ${l.feature_mode}, EWA rows ${Xr(l)}`)};kn=()=>{if(ie==="a"){if(J.b){Ge("b");return}cs(`loading ${K} ...`),ve().then(()=>{Ge("b"),nn()}).catch(Ue=>{nn(),console.error("[A/B] B failed:",Ue),fe(`B failed: ${(Ue==null?void 0:Ue.message)??Ue}`)})}else Ge("a")},ue.addEventListener("click",()=>kn()),document.body.appendChild(ue),fe(),F.get("side")==="b"?kn():g||setTimeout(()=>{ve().then(Ue=>{Ue.renderer||Te(Ue)}).catch(Ue=>console.warn("[A/B] preload failed:",Ue))},1500),window.__halloumiAB={get side(){return ie},toggle:()=>kn(),get bReady(){var Ue;return!!((Ue=J.b)!=null&&Ue.renderer)}}}if(p&&(w||M))if(w){const k={};k[`A${Zt(p)} · bundle`]="A",k[`B${Zt(w)} · atlas2`]="B";const K={atlas:"A"};oe.addInput(K,"atlas",{label:"Atlas source",options:k}).on("change",J=>{const ie=J.value==="B"?w:p;B.setAtlas(ie),Qt=Zt(ie),me.label=`Texture${Qt}`,En(),console.log(`[atlas2] now sampling ${J.value}${Qt}`)})}else{const k={note:M};oe.addMonitor(k,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const Us=p!==null&&(p.meta.probe_mode|0)>0;if(B.hasMips&&Us)B.setMipMode(N.mips),oe.addInput(N,"mips",{label:"Mips (trilinear)"}).on("change",k=>B.setMipMode(k.value));else if(p!==null&&p.meta.format!==4294967295&&typeof B.setMipMode=="function"){const k=F.get("mipbias"),K=B.hasMips,J={mode:k==="aniso"||F.get("aniso")==="1"?"aniso":K&&(k==="0"||k==="1"||k==="2")?k:"off"},ie=ue=>{ue==="off"?B.setMipMode(0):ue==="aniso"?B.setMipMode(2):(B.setMipLodBias(Number(ue)),B.setMipMode(1)),console.log(`[mips] ${ue==="off"?"off (level 0 only)":ue==="aniso"?"anisotropic 16x (textureSampleGrad)":`on, bias ${ue}`}`)};ie(J.mode);const le={"off (level 0)":"off","anisotropic 16x":"aniso"};K&&Object.assign(le,{"bias 0 (full)":"0","bias 1":"1","bias 2":"2"}),oe.addInput(J,"mode",{label:K?"Atlas mips":"Atlas filter",options:le}).on("change",ue=>ie(ue.value))}const Ot=oe.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});E&&E.then(k=>{const K=B,J=new Float32Array(k.nSurfels),ie={cpu:"--"};let le=null;K.preFrame=()=>{B===K&&(N.bsp_order?(le!==!0&&k.invalidate(),k.computeKeys(c.position)&&(K.writeSortKeys(k.keys),ie.cpu=`${k.lastMs.toFixed(2)} ms / ${k.nNodes} nodes`)):le!==!1&&K.writeSortKeys(J),le=N.bsp_order)},Ot.addInput(N,"bsp_order",{label:"BSP order (vs depth sort)"}),Ot.addMonitor(ie,"cpu",{label:"BSP traversal",interval:500})}).catch(k=>console.error("[bsp] disabled:",k)),Ot.addInput(N,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",k=>is({raysplat:k.value==="raysplat",centred:k.value==="centred"},o,B.render_settings_buffer));const Tn=globalThis.__gpuAdapterInfo??{},Ls={s:`${Tn.vendor??"?"} / ${Tn.architecture??"?"}
${Tn.device||Tn.description||"?"}`};Ot.addMonitor(Ls,"s",{label:"GPU",multiline:!0,lineCount:2}),Ot.addInput(N,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",k=>is({hypLegacy:k.value},o,B.render_settings_buffer)),Ot.addInput(N,"two_pass",{label:"Two-pass (layer)"}).on("change",k=>B.setTwoPass(k.value)),Ot.addInput(N,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",k=>B.setOpaqueThresh(k.value)),Ot.addInput(N,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",k=>B.setOverdrawMode(k.value==="shaded"?1:k.value==="raster"?2:0)),Ot.addInput(N,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",k=>B.setOverdrawMax(k.value));const ds={s:"—"};Ot.addMonitor(ds,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(B.overdrawModeValue===0){ds.s="—";return}B.readOverdrawStats().then(k=>{k&&(ds.s=`mean ${k.mean.toFixed(1)} frag/px · ${k.meanCovered.toFixed(1)} on covered
max ${k.max} · covered ${(k.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(k=>console.warn("[overdraw] readback failed:",k))},500),oe.addInput(N,"legacy_renderer",{label:"Legacy renderer"}).on("change",k=>B.setLegacyRenderer(k.value)),oe.addInput(N,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",k=>{B.setFetchById(k.value);try{localStorage.setItem("halloumi.fetch_by_id",k.value?"1":"0")}catch{}}),oe.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>oi("webgl")),N.msaa=F.get("msaa")==="1"&&!As,N.msaa&&B.setMsaa(!0),oe.addInput(N,"msaa",{label:"MSAA 4×"}).on("change",k=>B.setMsaa(k.value));const Jt={aspect:"canvas"},Cn=oe.addFolder({title:"📸 Screenshot",expanded:!1});Cn.addInput(Jt,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const rn={s:"pick a size to capture"};Cn.addMonitor(rn,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Gs=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Bn=null;function vr(k){let K;if(Jt.aspect==="canvas")K=i.width/i.height;else{const[fe,ve]=Jt.aspect.split(":").map(Number);K=fe/ve}const J=o.limits.maxTextureDimension2D;let ie,le;if(k==="canvas"&&Jt.aspect==="canvas")ie=i.width,le=i.height;else{const fe=k==="canvas"?Math.max(i.width,i.height):k;K>=1?(ie=fe,le=Math.round(fe/K)):(le=fe,ie=Math.round(fe*K))}const ue=Math.min(1,J/Math.max(ie,le));return ie=Math.max(2,Math.round(ie*ue)&-2),le=Math.max(2,Math.round(le*ue)&-2),[ie,le]}function zs(k,K){const J=URL.createObjectURL(k),ie=document.createElement("a");ie.href=J,ie.download=K,document.body.appendChild(ie),ie.click(),ie.remove(),setTimeout(()=>URL.revokeObjectURL(J),1e4)}async function gr(k,K){var fe;const J=(k.size/1048576).toFixed(1),ie=window;if(typeof ie.showSaveFilePicker=="function")try{const ve=await ie.showSaveFilePicker({suggestedName:K,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Te=await ve.createWritable();return await Te.write(k),await Te.close(),`saved ${ve.name??K} (${J} MB) where you chose`}catch(ve){if((ve==null?void 0:ve.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const le=new File([k],K,{type:"image/png"}),ue=navigator;if(ue.share&&((fe=ue.canShare)!=null&&fe.call(ue,{files:[le]})))try{return await ue.share({files:[le],title:K}),`shared ${K} (${J} MB) via share sheet`}catch(ve){if((ve==null?void 0:ve.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return zs(k,K),`downloaded ${K} (${J} MB) to your browser's Downloads folder`}async function ps(k){if(W)return;const[K,J]=vr(k);rn.s=`rendering ${K}×${J}…`;const ie=i.width,le=i.height;c.setRenderSize(K,J),yn(K,J,o,B.render_settings_buffer);const ue=o.createTexture({size:[K,J,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),fe=Math.ceil(K*4/256)*256,ve=o.createBuffer({size:fe*J,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Te=o.createCommandEncoder({label:"screenshot"});B.frame(Te,ue.createView(),!1),Te.copyTextureToBuffer({texture:ue},{buffer:ve,bytesPerRow:fe,rowsPerImage:J},[K,J,1]),o.queue.submit([Te.finish()]),c.clearRenderSize(),yn(ie,le,o,B.render_settings_buffer);try{await ve.mapAsync(GPUMapMode.READ);const Ge=new Uint8Array(ve.getMappedRange()),Ye=new Uint8ClampedArray(K*J*4);for(let Fe=0;Fe<J;Fe++)Ye.set(Ge.subarray(Fe*fe,Fe*fe+K*4),Fe*K*4);for(let Fe=3;Fe<Ye.length;Fe+=4)Ye[Fe]=255;ve.unmap();const Ue=document.createElement("canvas");Ue.width=K,Ue.height=J,Ue.getContext("2d").putImageData(new ImageData(Ye,K,J),0,0);const je=await new Promise((Fe,Pt)=>Ue.toBlob(en=>en?Fe(en):Pt(new Error("toBlob failed")),"image/png")),ht=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),We=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),wt=`${ht}_${K}x${J}_${We}.png`;Bn={blob:je,name:wt},rn.s=await gr(je,wt)}catch(Ge){console.error("[screenshot]",Ge),rn.s=`failed: ${Ge}`}finally{ve.destroy(),ue.destroy()}}{const k=document.createElement("div");k.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const K=(ie,le,ue)=>{const fe=document.createElement("button");fe.className="tp-btnv_b",fe.textContent=ie,fe.title=le,fe.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",fe.addEventListener("click",ue),k.appendChild(fe)};K("Canvas","current canvas size",()=>{ps("canvas")});for(const[ie,le]of Gs)K(ie,`${le} px long edge`,()=>{ps(le)});(Cn.element.querySelector(".tp-fldv_c")??Cn.element).appendChild(k)}Cn.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Bn){rn.s="nothing captured yet";return}zs(Bn.blob,Bn.name),rn.s=`downloaded ${Bn.name} to your browser's Downloads folder`}),oe.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(f.length>0)c.set_preset(f[0]);else{const k=l.bbox.max[0]-l.bbox.min[0],K=l.bbox.max[1]-l.bbox.min[1],J=l.bbox.max[2]-l.bbox.min[2],le=.5*Math.sqrt(k*k+K*K+J*J)*.5;X.set(D[0]-le,D[1]-le,D[2]-le,c.position);const ue=X.create(le,le,le);X.normalize(ue,ue);const fe=X.create();X.cross(X.create(0,1,0),ue,fe),X.normalize(fe,fe);const ve=X.create();X.cross(ue,fe,ve);const Te=Mt.create(fe[0],ve[0],ue[0],fe[1],ve[1],ue[1],fe[2],ve[2],ue[2]);xt.fromMat3(Te,c.rotation),c.update_buffer()}m.resetToCamera(),a()});const qn={result:"— click Benchmark —"},hs=oe.addMonitor(qn,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});hs.hidden=!0;const Is={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function wr(){const K=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const J of Object.keys(Is))if(K.startsWith(J))return J;return null}const $t=document.createElement("div");$t.id="bench-overlay",$t.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild($t);function Nt(k,K,J){const ie=Math.floor(K/Math.max(1,J)*100),le=32,ue=Math.floor(K/Math.max(1,J)*le),fe="█".repeat(ue)+"░".repeat(le-ue);$t.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${k}</div><div>[${fe}] ${ie}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${K} / ${J} frames · offscreen · pipelined · no vsync</div>`,$t.style.display="block"}function hn(){$t.style.display="none"}async function An(k=10,K=200){if(W)return;if(f.length===0){qn.result="no cameras to benchmark";return}W=!0;const J=ce,ie=N.animate,le=new Float32Array(c.position),ue=new Float32Array(c.rotation);ce=!1,N.animate=!1,xe.refresh(),ye=null,m.enabled=!1;const fe=wr(),ve=fe?Is[fe]:null,Te=(ve==null?void 0:ve.w)??i.width,Ge=(ve==null?void 0:ve.h)??i.height,Ye=(ve==null?void 0:ve.fovY)??c.getFov(),Ue=fe?`${fe} · ${Te>=4e3/4+500?"images_4":"images_2"}`:"custom",je=i.width,ht=i.height,We=c.getFov();i.width=Te,i.height=Ge,c.setFov(Ye),yn(Te,Ge,o,B.render_settings_buffer);const wt=o.createTexture({size:[Te,Ge,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Fe=wt.createView(),Pt=()=>{const Ct=o.createCommandEncoder();B.frame(Ct,Fe,!1),o.queue.submit([Ct.finish()])},en=()=>new Promise(Ct=>setTimeout(Ct,0)),Hn=20,tn=async(Ct,Rn)=>{let Yn=0,on=0;for(Nt(Rn,0,Ct),await en();on<Ct;){const Dn=Math.min(Hn,Ct-on),Xn=performance.now();for(let Zn=0;Zn<Dn;Zn++)c.set_preset(f[(on+Zn)%f.length]),Pt();await o.queue.onSubmittedWorkDone();const Ht=performance.now();Yn+=Ht-Xn,on+=Dn,Nt(Rn,on,Ct),await en()}return Yn};try{await tn(k,"Warming up");const Rn=await tn(K,"Benchmarking")/K,Yn=1e3/Rn,on=l.num_points??l.surfel_data.length/8,Dn=(Ye*180/Math.PI).toFixed(1),Xn=`${Yn.toFixed(1)} FPS  (${Rn.toFixed(2)} ms/frame)
${Te}×${Ge} · fovY ${Dn}° · ${Ue}
${on.toLocaleString()} surfels · ${k}w+${K}b · pipelined`+(B.hasMips?` · ${B._mipMode?`mips bias ${B.mipLodBias}`:"mips off"}`:"");qn.result=Xn,hs.hidden=!1,console.log("[bench]",Xn.replace(/\n/g,"  |  "))}catch(Ct){console.error("[bench] failed:",Ct),qn.result=`bench failed: ${Ct}`,hs.hidden=!1}finally{hn(),wt.destroy(),i.width=je,i.height=ht,c.setFov(We),yn(je,ht,o,B.render_settings_buffer),c.position.set(le),c.rotation.set(ue),c.update_buffer(),m.enabled=!J,ce=J,N.animate=ie,xe.refresh(),W=!1}}oe.addButton({title:"📊 Benchmark"}).on("click",()=>An()),so(oe);const Fs=Math.PI/2,gt=new Set,fs=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],xr=k=>{const K=k.target;return!!K&&(K.tagName==="INPUT"||K.tagName==="TEXTAREA"||K.isContentEditable)},Mn=()=>gt.has("ShiftLeft")||gt.has("ShiftRight");document.addEventListener("keyup",k=>{gt.delete(k.code)}),window.addEventListener("blur",()=>gt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&gt.clear()});const Os=k=>{if(gt.size===0||N.animate)return;const K=Mn()?3:1;let J=0;gt.has("KeyX")&&(J+=1),gt.has("KeyZ")&&(J-=1),J!==0&&(m.addRoll(J*Fs*K*k),ye=null);const ie=c.rotation,le=[ie[0],ie[4],ie[8]],ue=[ie[1],ie[5],ie[9]],fe=[ie[2],ie[6],ie[10]],ve=m.center,Ge=(m.sceneRadius??Math.max(.05,X.distance(c.position,ve)))*.5*K*k;let Ye=0,Ue=0,je=0;if(gt.has("KeyW")&&(je+=1),gt.has("KeyS")&&(je-=1),gt.has("KeyD")&&(Ye+=1),gt.has("KeyA")&&(Ye-=1),gt.has("KeyE")&&(Ue+=1),gt.has("KeyQ")&&(Ue-=1),!Ye&&!Ue&&!je)return;const ht=[0,0,0];for(let We=0;We<3;We++)ht[We]=(le[We]*Ye+ue[We]*Ue+fe[We]*je)*Ge;for(let We=0;We<3;We++)c.position[We]+=ht[We],ve[We]+=ht[We];c.update_buffer(),ye=null};document.addEventListener("keydown",k=>{if(xr(k))return;const K=k.key,J=K.toLowerCase();if(k.ctrlKey||k.metaKey||k.altKey){gt.clear();return}if(fs.includes(k.code)&&!(k.shiftKey&&k.code==="KeyD")){gt.add(k.code),k.preventDefault();return}if(J==="t"){Ds();return}if(J==="b"){kn();return}if(K>="0"&&K<="9"&&f.length>0){const ie=parseInt(K);ie<f.length&&Xe(ie)}else K==="ArrowLeft"||K==="PageUp"?(Xe(Ne-1),k.preventDefault()):K==="ArrowRight"||K==="PageDown"?(Xe(Ne+1),k.preventDefault()):k.shiftKey&&J==="d"&&B.debugReadSortedIndices(30).catch(ie=>console.error("[DEBUG] readback failed:",ie))});function Vs(k,K){const J=i.getBoundingClientRect();return[(k-J.left)*c.viewport[0]/J.width,(K-J.top)*c.viewport[1]/J.height]}i.addEventListener("dblclick",k=>{const[K,J]=Vs(k.clientX,k.clientY);R(K,J)});let Wn=0,_s=0,$s=0;i.addEventListener("pointerdown",k=>{if(k.pointerType!=="touch")return;const K=performance.now(),J=K-Wn,ie=k.clientX-_s,le=k.clientY-$s;if(J>0&&J<300&&ie*ie+le*le<40*40){const[ue,fe]=Vs(k.clientX,k.clientY);R(ue,fe),Wn=0}else Wn=K,_s=k.clientX,$s=k.clientY});function fn(){return y}let Ns=performance.now(),Kn=60,ms=Promise.resolve(),jn=0,yr=0;const qs=(k,K)=>{if(!N.clip_on||!(isFinite(Le[0])&&isFinite(Le[1]))){ya(null,[0,0,0,0],o,B.render_settings_buffer);return}const J=Le[0]+N.clip_t*(Le[1]-Le[0]),ie=[0,0,0];ie[Ie]=Ae?1:-1;const le=Ae?-J:J,ue=c.getViewMatrix(),fe=[ue[0]*ie[0]+ue[4]*ie[1]+ue[8]*ie[2],ue[1]*ie[0]+ue[5]*ie[1]+ue[9]*ie[2],ue[2]*ie[0]+ue[6]*ie[1]+ue[10]*ie[2]],ve=le-(fe[0]*ue[12]+fe[1]*ue[13]+fe[2]*ue[14]),Te=c.focal[0],Ge=c.focal[1];ya([fe[0],fe[1],fe[2],ve],[Te,Ge,.5*k,.5*K],o,B.render_settings_buffer)};function an(k,K,J){if(N.upscale!=="off"&&J>1){const ie=J;let le=N.upscale;if(le==="spline"&&!Vt&&(le="bc5"),le==="bc5"||le==="p"||le==="spline"){const Ge=Tt(le==="spline"?"bc5":le,ie);Ge?Ge!==Rt&&(B.setSlopeAtlas(Ge.view,[Ge.scaleU,Ge.offU,Ge.scaleV,Ge.offV]),Rt=Ge):le="hermite"}B.slopeSource=oo[le]??0;const ue=B.resolvesIntoTarget;(!$||$.mode!==le||$.exact!==ue)&&($==null||$.destroy(),$=new rd(o,z,le,1/ie,ue)),$.scale=1/ie,le==="spline"&&$.setSplineKernel(Vt);const fe=$.lowTarget(i.width,i.height);B.viewport=ue?null:[fe.w,fe.h];const ve=c.getRenderSize();(!ve||ve[0]!==fe.w||ve[1]!==fe.h||H[2]!==i.width||H[3]!==i.height)&&(c.setRenderSize(fe.w,fe.h,i.width,i.height),H=[fe.w,fe.h,i.width,i.height]),yn(fe.w,fe.h,o,B.render_settings_buffer),qs(fe.w,fe.h),B.slopeTarget=$.slopeTarget;const Te=le==="refetch"?$.refetchViews:null;B.refetch=Te?{...Te,W:i.width,H:i.height,thr:vt,gain:yt,edge:N.rf_edge}:null,B.frame(k,fe.view),B.slopeTarget=null,B.viewport=null,Te&&B.refetchApplied?B.refetchPass(k,K):$.pass(k,K,i.width,i.height),B.refetch=null}else(H[0]!==0||c.getRenderSize()!==null)&&(c.clearRenderSize(),H=[0,0,0,0],U()),qs(i.width,i.height),B.frame(k,K)}window.__halloumiView=(k,K,J)=>f[k]?(c.set_preset(f[k]),c.setFocalRatio(J),c.setFov(K),Ce.request(),!0):!1,window.__halloumiReadbackPost=async k=>{const K=i.width,J=i.height,ie=o.createTexture({size:[K,J],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),le=Math.ceil(K*4/256)*256,ue=o.createBuffer({size:le*J,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),fe=o.createCommandEncoder();an(fe,ie.createView(),N.upscale!=="off"?N.upscale_factor:1),fe.copyTextureToBuffer({texture:ie},{buffer:ue,bytesPerRow:le},[K,J]),o.queue.submit([fe.finish()]),await ue.mapAsync(GPUMapMode.READ);const ve=new Uint8Array(ue.getMappedRange()),Te=new Uint8Array(K*J*3),Ge=z.startsWith("bgra"),Ye=Ge?2:0,Ue=Ge?0:2;for(let ht=0;ht<J;ht++){let We=ht*le,wt=ht*K*3;for(let Fe=0;Fe<K;Fe++,We+=4,wt+=3)Te[wt]=ve[We+Ye],Te[wt+1]=ve[We+1],Te[wt+2]=ve[We+Ue]}ue.unmap(),ue.destroy(),ie.destroy();const je=await fetch(k,{method:"POST",body:Te});return{w:K,h:J,status:je.status}},window.__halloumiGpuTime=async(k=100,K="frame",J=10)=>{if(!o.features.has("timestamp-query"))return null;const ie=i.width,le=i.height,ue=o.createTexture({size:[ie,le],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),fe=ue.createView(),ve=N.upscale!=="off"?N.upscale_factor:1,Te=o.createQuerySet({type:"timestamp",count:2*k}),Ge=o.createBuffer({size:16*k,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),Ye=o.createBuffer({size:16*k,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});if(K==="up"){const Fe=o.createCommandEncoder();an(Fe,fe,ve),o.queue.submit([Fe.finish()])}const Ue=($==null?void 0:$.refetchViews)??null,je=Fe=>{if(K==="frame"||ve<=1){an(Fe,fe,ve);return}Ue?(B.refetch={...Ue,W:ie,H:le,thr:vt,gain:yt,edge:N.rf_edge},B.refetchPass(Fe,fe),B.refetch=null):$.pass(Fe,fe,ie,le)};for(let Fe=0;Fe<J;Fe++){const Pt=o.createCommandEncoder();je(Pt),o.queue.submit([Pt.finish()]),Fe%50==49&&await o.queue.onSubmittedWorkDone()}await o.queue.onSubmittedWorkDone();for(let Fe=0;Fe<k;Fe++){const Pt=o.createCommandEncoder();Pt.beginComputePass({timestampWrites:{querySet:Te,beginningOfPassWriteIndex:2*Fe}}).end(),je(Pt),Pt.beginComputePass({timestampWrites:{querySet:Te,endOfPassWriteIndex:2*Fe+1}}).end(),o.queue.submit([Pt.finish()])}const ht=o.createCommandEncoder();ht.resolveQuerySet(Te,0,2*k,Ge,0),ht.copyBufferToBuffer(Ge,0,Ye,0,16*k),o.queue.submit([ht.finish()]),await Ye.mapAsync(GPUMapMode.READ);const We=new BigInt64Array(Ye.getMappedRange()),wt=[];for(let Fe=0;Fe<k;Fe++)wt.push(Number(We[2*Fe+1]-We[2*Fe])/1e6);return Ye.unmap(),Ye.destroy(),Ge.destroy(),Te.destroy(),ue.destroy(),wt.sort((Fe,Pt)=>Fe-Pt),{mean:wt.reduce((Fe,Pt)=>Fe+Pt,0)/k,median:wt[k>>1],n:k}},window.__halloumiReadback=async()=>{const k=i.width,K=i.height,J=o.createTexture({size:[k,K],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),ie=Math.ceil(k*4/256)*256,le=o.createBuffer({size:ie*K,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),ue=o.createCommandEncoder();an(ue,J.createView(),N.upscale!=="off"?N.upscale_factor:1),ue.copyTextureToBuffer({texture:J},{buffer:le,bytesPerRow:ie},[k,K]),o.queue.submit([ue.finish()]),await le.mapAsync(GPUMapMode.READ);const fe=new Uint8Array(le.getMappedRange()),ve=new Uint8Array(k*K*4),Te=z.startsWith("bgra");for(let Ye=0;Ye<K;Ye++)for(let Ue=0;Ue<k;Ue++){const je=Ye*ie+Ue*4,ht=(Ye*k+Ue)*4;ve[ht]=fe[je+(Te?2:0)],ve[ht+1]=fe[je+1],ve[ht+2]=fe[je+(Te?0:2)],ve[ht+3]=255}le.unmap(),le.destroy(),J.destroy();let Ge="";for(let Ye=0;Ye<ve.length;Ye+=32768)Ge+=String.fromCharCode(...ve.subarray(Ye,Ye+32768));return{w:k,h:K,b64:btoa(Ge)}},window.__halloumiBenchUp=async(k=300)=>{const K=o.createTexture({size:[i.width,i.height],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),J=K.createView();let ie=o.createCommandEncoder();an(ie,J,N.upscale!=="off"?N.upscale_factor:1),o.queue.submit([ie.finish()]),await o.queue.onSubmittedWorkDone();const le=($==null?void 0:$.refetchViews)??null,ue=()=>{const ve=o.createCommandEncoder();le?(B.refetch={...le,W:i.width,H:i.height,thr:vt,gain:yt,edge:N.rf_edge},B.refetchPass(ve,J),B.refetch=null):$.pass(ve,J,i.width,i.height),o.queue.submit([ve.finish()])};for(let ve=0;ve<20;ve++)ue();await o.queue.onSubmittedWorkDone();const fe=performance.now();for(let ve=0;ve<k;ve++)ue();return await o.queue.onSubmittedWorkDone(),K.destroy(),{ms:(performance.now()-fe)/k,mode:le?"refetch":String($==null?void 0:$.mode)}},window.__halloumiBench=async(k=300,K=30)=>{const J=o.createTexture({size:[i.width,i.height],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),ie=J.createView(),le=ve=>{for(let Te=0;Te<ve;Te++){const Ge=o.createCommandEncoder();an(Ge,ie,N.upscale!=="off"?N.upscale_factor:1),o.queue.submit([Ge.finish()])}};le(K),await o.queue.onSubmittedWorkDone();const ue=performance.now();le(k),await o.queue.onSubmittedWorkDone();const fe=(performance.now()-ue)/k;return J.destroy(),{ms:fe,fps:1e3/fe,w:i.width,h:i.height}};function _n(){bs().catch(k=>{yr++<5&&console.error("[frame] exception (render loop kept alive):",k),requestAnimationFrame(_n)})}async function bs(){var fe,ve;const k=performance.now(),K=Math.min((k-Ns)/1e3,.1);if(Ns=k,K>0){const Te=((fe=B.lastStageBreakdownMs)==null?void 0:fe.total)??0,Ge=Te>.5?1e3/Te:1/K;Ce.idleMs(k)<250&&(Kn=Kn*.9+Ge*.1),we.stats=`${ne} surfels · ${Ce.idleMs(k)>500?"idle":`${Math.round(Kn)} fps`}
${i.width}×${i.height} px`}if(W){requestAnimationFrame(_n);return}if(fn()&&(ye||ce)&&(ye=null,m.resetToCamera(),a(),ce&&(ce=!1,N.animate=!1,xe.refresh())),ce&&N.animateMode==="circle"&&Qe){ot+=K/lt,ot>=1&&(ot-=1);const Te=ho(Qe,ot);c.set_preset(Te),m.update(K);const Ge=o.createCommandEncoder();B.frame(Ge,s.getCurrentTexture().createView()),o.queue.submit([Ge.finish()]),jn++,jn===2&&nn(),requestAnimationFrame(_n);return}if(ye){ye.t+=K/ye.duration;const Te=Math.min(1,ye.t),Ge=Te*Te*(3-2*Te);X.lerp(ye.fromPos,ye.toPos,Ge,c.position),mt.slerp(ye.fromQuat,ye.toQuat,Ge,Ve),Mt.fromQuat(Ve,nt),xt.fromMat3(nt,c.rotation),c.update_buffer(),ye.t>=1&&(c.set_preset(ye.target),ye=null,ce?f.length>0&&(De=Me):(m.resetToCamera(),a()))}else if(ce&&!fn()){const Te=N.animateMode==="circle"&&ft.length>0,Ge=Te?ft:f;if(Ge.length!==0){if(De-=K,De<=0){const Ue=((Te?$e:Ne)+1)%Ge.length;Te?$e=Ue:Ne=Ue;const je=Te?be/8:be;Je(Ge[Ue],je),Te||(it.view=`${Ne+1} / ${f.length}: ${f[Ne].img_name??Ne}`)}}}Os(K),m.update(K),A(),ee();let J=N.upscale_factor;if(N.upscale!=="off"&&N.upscale_auto){const Te=Ut.choose(c,i.width,i.height);J=Te.f,Pn.adapt=`${Te.f===1?"native":`1/${Te.f.toFixed(2)}`} · ${Te.texelMode?"texel/px":"q"} ${Te.q.toFixed(2)} · ${Te.visible} sampled`}N.adapt_heat&&(J=1);const ie=ye!==null||ce||fn()||gt.size>0;if(!Ce.needFrame(k,c,i.width,i.height,ie,`${N.upscale}|${N.rf_edge}|${J}|${N.render_scale}|${N.atlas_enabled}|${((ve=c.getRenderSize())==null?void 0:ve.join())??""}|${N.clip_on}|${N.clip_t}`)){requestAnimationFrame(_n);return}await ms;const le=o.createCommandEncoder(),ue=s.getCurrentTexture().createView();an(le,ue,J),o.queue.submit([le.finish()]),ms=o.queue.onSubmittedWorkDone(),jn++,jn===2&&nn(),requestAnimationFrame(_n)}requestAnimationFrame(_n)}}const xd=i=>`#version 300 es
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
}`;function mo(i){return{bc7:!!i.getExtension("EXT_texture_compression_bptc"),astc:!!i.getExtension("WEBGL_compressed_texture_astc")}}function yd(i,s){const o=mo(i),u=s.format===2||s.format===7,c=s.format===3||s.format===8;let m=0;u&&o.bc7?m=36492:c&&o.astc&&(m=37808);const y=ae=>(console.warn("[gl]",ae),{tex:null,status:ae,slice_width:s.slice_width,layer_h:s.layer_h,n_slices:0,rects:s.rects_expanded});if(!m)return y(`atlas is ${u?"BC7":c?"ASTC":`format ${s.format}`}; this GPU has bc7=${o.bc7} astc=${o.astc}`);let x=i.getParameter(i.MAX_TEXTURE_SIZE);try{const ae=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);ae>=256&&(x=Math.min(x,ae-ae%4))}catch{}const S=i.getParameter(i.MAX_ARRAY_TEXTURE_LAYERS),{width:A,n_layers:z,n_cols:G,layer_cuts:q,column_cuts:$,atlas_bytes:H}=s,U=A/4*16,V=s.rects_expanded,Z=V.length/5,O=[];let ee=0,F=0,te=0,ce=!1;const he=Array.from({length:G*z},()=>[]);let pe=0,Se=0;for(let ae=0;ae<Z;ae++){const Pe=V[ae*5+4]|0,Ie=V[ae*5+2],Ae=V[ae*5+3];Pe>=0&&Pe<he.length&&Ie>0&&(he[Pe].push(ae),pe=Math.max(pe,Ie),Se=Math.max(Se,Ae))}pe=Math.ceil(pe/4)*4,Se=Math.ceil(Se/4)*4;const Ee=(ae,Pe)=>{if(ae<=x)return[0,ae];const Ie=x-Pe;if(Ie<64)throw new Error(`atlas re-shard: tiles up to ${Pe} px do not fit MAX_TEXTURE_SIZE ${x}`);const Ae=Math.ceil(ae/Ie),Le=[0];for(let oe=1;oe<Ae;oe++)Le.push(Math.round(ae*oe/Ae/4)*4);return Le.push(ae),Le},Re=(ae,Pe,Ie,Ae)=>Math.min(ae[Pe+1]-ae[Pe]+Ie,Ae-ae[Pe]);try{for(let ae=0;ae<G;ae++)for(let Pe=0;Pe<z;Pe++){const Ie=$[ae+1]-$[ae],Ae=q[Pe+1]-q[Pe],Le=Ee(Ie,pe),oe=Ee(Ae,Se);(Le.length>2||oe.length>2)&&(ce=!0);for(let Ce=0;Ce<Le.length-1;Ce++)F=Math.max(F,Re(Le,Ce,pe,Ie));for(let Ce=0;Ce<oe.length-1;Ce++)te=Math.max(te,Re(oe,Ce,Se,Ae));O.push({c:ae,l:Pe,xcuts:Le,ycuts:oe,base:ee}),ee+=(Le.length-1)*(oe.length-1)}}catch(ae){return y(String(ae))}if(F=Math.ceil(F/4)*4,te=Math.ceil(te/4)*4,ee>S)return y(`atlas needs ${ee} array layers, GPU allows ${S}`);const ke=F/4*16,de=ke*(te/4);let N;try{N=new Uint8Array(de*ee)}catch(ae){return y(`atlas staging buffer ${(de*ee/2**20).toFixed(0)} MB failed: ${ae}`)}let xe=V;ce&&(xe=new Float32Array(V));for(const ae of O){const Pe=ae.xcuts.length-1,Ie=ae.ycuts.length-1,Ae=$[ae.c+1]-$[ae.c],Le=q[ae.l+1]-q[ae.l];for(let oe=0;oe<Ie;oe++)for(let Ce=0;Ce<Pe;Ce++){const Be=ae.base+oe*Pe+Ce,I=$[ae.c]+ae.xcuts[Ce],Q=Re(ae.xcuts,Ce,pe,Ae),C=q[ae.l]+ae.ycuts[oe],l=Re(ae.ycuts,oe,Se,Le),f=Be*de,p=I/4,w=Q/4;for(let M=0;M<l/4;M++){const D=(C/4+M)*U+p*16;N.set(H.subarray(D,D+w*16),f+M*ke)}}if(ce)for(const oe of he[ae.c*z+ae.l]){const Ce=V[oe*5],Be=V[oe*5+1];let I=0;for(;I<Pe-1&&Ce>=ae.xcuts[I+1];)I++;let Q=0;for(;Q<Ie-1&&Be>=ae.ycuts[Q+1];)Q++;xe[oe*5]=Ce-ae.xcuts[I],xe[oe*5+1]=Be-ae.ycuts[Q],xe[oe*5+4]=ae.base+Q*Pe+I}}const we=i.createTexture();i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D_ARRAY,we),i.compressedTexImage3D(i.TEXTURE_2D_ARRAY,0,m,F,te,ee,0,N),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);const _e=i.getError();if(_e!==i.NO_ERROR){i.deleteTexture(we);const ae=_e===i.OUT_OF_MEMORY?"OUT_OF_MEMORY":_e===i.INVALID_VALUE?"INVALID_VALUE":`0x${_e.toString(16)}`;return y(`atlas upload failed: GL ${ae} (${F}x${te}x${ee} ${m===36492?"BC7":"ASTC"}, ${(de*ee/2**20).toFixed(0)} MB, max tex ${x})`)}const me=`${m===36492?"BC7":"ASTC"} atlas ${F}x${te}x${ee}${ce?` (re-sharded for max tex ${x})`:""}`;return{tex:we,status:me,slice_width:F,layer_h:te,n_slices:ee,rects:xe}}const Va=28,Bs=8,Pd=i=>`#version 300 es
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
        float lg[${Bs}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${Bs}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${Bs}; k++) {
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
}`,Sd=`#version 300 es
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
}`;class $a{constructor(s,o,u,c={}){P(this,"gl");P(this,"n");P(this,"K");P(this,"twLog2");P(this,"pre");P(this,"draw");P(this,"preU",{});P(this,"drawU",{});P(this,"texSurf");P(this,"texSv");P(this,"texUv");P(this,"idBuf");P(this,"recBuf");P(this,"preVao");P(this,"drawVao");P(this,"tf");P(this,"atlasTex",null);P(this,"atlasStatus","no atlas");P(this,"atlasUpload",null);P(this,"atlasOn",!1);P(this,"sd");P(this,"ok");P(this,"keyF");P(this,"keyU");P(this,"ids");P(this,"ids2");P(this,"keys2");P(this,"hist");P(this,"cnt",new Uint32Array(256));P(this,"bgColor",[0,0,0]);P(this,"scaling",1);P(this,"lastStats",{visible:0,cpuMs:0});P(this,"only",-1);P(this,"dbg",0);if(this.gl=s,o.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(o.K>Bs)throw new Error(`WebGL2 backend supports K <= ${Bs} SV sites (bundle has ${o.K})`);this.n=o.num_points,this.K=o.K,this.sd=o.surfel_data;const m=this.n,y=s.getParameter(s.MAX_TEXTURE_SIZE);this.twLog2=y>=4096?12:11;const x=1<<this.twLog2,S=new Uint32Array(o.surfel_data.buffer,o.surfel_data.byteOffset,m*8);for(let U=0;U<m;U++)if(S[U*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(m);for(let U=0;U<m;U++){const V=Ed(S[U*8+3]);this.ok[U]=V>1/255&&(S[U*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(m),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(m),this.ids2=new Uint32Array(m),this.keys2=new Uint32Array(m),this.hist=new Uint32Array(256*4);const A=U=>Math.max(1,Math.ceil(m*U/x)),z=(U,V,Z,O,ee)=>{const F=s.createTexture();return s.bindTexture(s.TEXTURE_2D,F),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,U,x,A(O),0,V,Z,ee),F};{const U=A(2),V=new Uint32Array(x*U*4);V.set(S),this.texSurf=z(s.RGBA32UI,s.RGBA_INTEGER,s.UNSIGNED_INT,2,V)}{const U=this.K,V=A(2*U),Z=new Float32Array(x*V*4),O=o.sv_params,ee=U*7;for(let F=0;F<m;F++){const te=F*ee,ce=F*2*U*4;for(let he=0;he<U;he++){Z[ce+he*4]=O[te+he*3],Z[ce+he*4+1]=O[te+he*3+1],Z[ce+he*4+2]=O[te+he*3+2],Z[ce+he*4+3]=O[te+U*6+he];const pe=ce+(U+he)*4;Z[pe]=O[te+U*3+he*3],Z[pe+1]=O[te+U*3+he*3+1],Z[pe+2]=O[te+U*3+he*3+2]}}this.texSv=z(s.RGBA32F,s.RGBA,s.FLOAT,2*U,Z)}const G=u?yd(s,u):null;G&&(this.atlasStatus=G.status),this.atlasUpload=G;{const U=A(2),V=new Float32Array(x*U*4);if(u&&G&&G.tex){const Z=G.slice_width,O=G.layer_h,ee=u.uv_extent,F=G.rects;for(let te=0;te<m;te++){if(!this.ok[te])continue;const ce=F[te*5],he=F[te*5+1],pe=F[te*5+2],Se=F[te*5+3],Ee=te*8;V[Ee]=(ce+.5*Math.max(pe,1))/Z,V[Ee+1]=(he+.5*Math.max(Se,1))/O,V[Ee+2]=pe/(2*ee)/Z,V[Ee+3]=Se/(2*ee)/O,V[Ee+4]=F[te*5+4]}}this.texUv=z(s.RGBA32F,s.RGBA,s.FLOAT,2,V)}const q=(U,V)=>{const Z=s.createShader(U);if(s.shaderSource(Z,V),s.compileShader(Z),!s.getShaderParameter(Z,s.COMPILE_STATUS))throw new Error("GLSL: "+s.getShaderInfoLog(Z));return Z},$=U=>{if(s.linkProgram(U),!s.getProgramParameter(U,s.LINK_STATUS))throw new Error("GLSL link: "+s.getProgramInfoLog(U))};this.pre=s.createProgram(),s.attachShader(this.pre,q(s.VERTEX_SHADER,Pd(this.twLog2))),s.attachShader(this.pre,q(s.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),s.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],s.INTERLEAVED_ATTRIBS),$(this.pre);for(const U of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[U]=s.getUniformLocation(this.pre,U);const H=!(u&&u.kernel_type===0)&&o.kernel_type!==0;this.draw=s.createProgram(),s.attachShader(this.draw,q(s.VERTEX_SHADER,Sd)),s.attachShader(this.draw,q(s.FRAGMENT_SHADER,xd(H))),$(this.draw);for(const U of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[U]=s.getUniformLocation(this.draw,U);try{const U=new URLSearchParams(window.location.search);this.only=parseInt(U.get("only")??"-1",10),this.dbg=parseInt(U.get("dbg")??"0",10)|0}catch{}this.idBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.bufferData(s.ARRAY_BUFFER,m*4,s.DYNAMIC_DRAW),this.recBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf),s.bufferData(s.ARRAY_BUFFER,m*Va*4,s.STREAM_COPY),s.bindBuffer(s.ARRAY_BUFFER,null),this.preVao=s.createVertexArray(),s.bindVertexArray(this.preVao),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.enableVertexAttribArray(0),s.vertexAttribIPointer(0,1,s.UNSIGNED_INT,0,0),s.bindVertexArray(null),this.drawVao=s.createVertexArray(),s.bindVertexArray(this.drawVao),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf);for(let U=0;U<7;U++)s.enableVertexAttribArray(U),s.vertexAttribPointer(U,4,s.FLOAT,!1,Va*4,U*16),s.vertexAttribDivisor(U,1);s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),this.tf=s.createTransformFeedback(),s.useProgram(this.pre),s.uniform1i(this.preU.u_surf,1),s.uniform1i(this.preU.u_sv,2),s.uniform1i(this.preU.u_uv,3),s.uniform1i(this.preU.u_K,this.K),s.uniform1f(this.preU.u_sh_bias,c.shBias??o.sh_bias),s.uniform1f(this.preU.u_scaling,this.scaling),s.useProgram(this.draw),s.uniform1i(this.drawU.u_atlas,0),s.uniform1i(this.drawU.u_atlas_on,0),s.uniform4f(this.drawU.u_tex,0,0,u?u.res_bias:0,u?u.uv_extent:4),u&&G&&G.tex&&(this.atlasTex=G.tex,this.atlasOn=!0,s.uniform1i(this.drawU.u_atlas_on,1),s.uniform4f(this.drawU.u_tex,u.atlas_scale,u.atlas_offset,u.res_bias,u.uv_extent),s.uniform2f(this.drawU.u_dims,G.slice_width,G.layer_h)),s.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(s){this.atlasTex&&(this.atlasOn=s,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,s?1:0))}setGaussianScaling(s){this.scaling=s,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,s)}setShBias(s){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,s)}render(s){const o=this.gl,u=this.n,c=s.rotation,m=s.eye,y=this.sd,x=this.ok,S=s.width,A=s.height,z=performance.now(),G=.5*A/Math.tan(s.fovY*.5),q=-(c[0]*m[0]+c[4]*m[1]+c[8]*m[2]),$=-(c[1]*m[0]+c[5]*m[1]+c[9]*m[2]),H=-(c[2]*m[0]+c[6]*m[1]+c[10]*m[2]),U=.01,V=s.zfar??100,Z=V/(V-U),O=-(V*U)/(V-U),ee=2*G/S,F=2*G/A,te=c[0],ce=c[4],he=c[8],pe=c[1],Se=c[5],Ee=c[9],Re=c[2],ke=c[6],de=c[10],N=this.keyF,xe=this.ids;let we=0;for(let ae=0;ae<u;ae++){if(x[ae]===0||this.only>=0&&ae!==this.only)continue;const Pe=ae*8,Ie=y[Pe],Ae=y[Pe+1],Le=y[Pe+2],oe=Re*Ie+ke*Ae+de*Le+H;if(!(oe>0))continue;const Ce=Z*oe+O,Be=Ce/oe;if(!(Be>0&&Be<1))continue;const I=1.2*oe,Q=te*Ie+ce*Ae+he*Le+q;if(Math.abs(ee*Q)>I)continue;const C=pe*Ie+Se*Ae+Ee*Le+$;Math.abs(F*C)>I||(N[we]=V-Ce,xe[we]=ae,we++)}const _e=this.radixSort(we),me=performance.now()-z;return this.lastStats={visible:we,cpuMs:me},we===0?(o.viewport(0,0,S,A),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),o.clear(o.COLOR_BUFFER_BIT),0):(o.bindBuffer(o.ARRAY_BUFFER,this.idBuf),o.bufferSubData(o.ARRAY_BUFFER,0,_e,0,we),o.bindBuffer(o.ARRAY_BUFFER,null),o.useProgram(this.pre),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.texSurf),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.texSv),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.texUv),o.uniformMatrix3fv(this.preU.u_R,!1,[te,pe,Re,ce,Se,ke,he,Ee,de]),o.uniform3f(this.preU.u_t,q,$,H),o.uniform3f(this.preU.u_eye,m[0],m[1],m[2]),o.uniform2f(this.preU.u_vp,S,A),o.uniform1f(this.preU.u_focal,G),o.uniform1f(this.preU.u_zfar,V),o.bindVertexArray(this.preVao),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.tf),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),o.enable(o.RASTERIZER_DISCARD),o.beginTransformFeedback(o.POINTS),o.drawArrays(o.POINTS,0,we),o.endTransformFeedback(),o.disable(o.RASTERIZER_DISCARD),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,null),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,null),o.bindVertexArray(null),o.viewport(0,0,S,A),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),o.clear(o.COLOR_BUFFER_BIT),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.disable(o.DEPTH_TEST),o.useProgram(this.draw),o.uniform2f(this.drawU.u_vp,S,A),o.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,this.atlasTex)),o.bindVertexArray(this.drawVao),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,we),o.bindVertexArray(null),we)}radixSort(s){const o=this.keyU,u=this.hist;u.fill(0);for(let A=0;A<s;A++){const z=o[A];u[z&255]++,u[256+(z>>>8&255)]++,u[512+(z>>>16&255)]++,u[768+(z>>>24)]++}let c=o,m=this.ids,y=this.keys2,x=this.ids2;const S=this.cnt;for(let A=0;A<4;A++){const z=A*8,G=A*256;let q=!1;for(let V=0;V<256;V++)if(u[G+V]===s){q=!0;break}if(q)continue;let $=0;for(let V=0;V<256;V++)S[V]=$,$+=u[G+V];for(let V=0;V<s;V++){const Z=c[V],O=Z>>>z&255,ee=S[O]++;y[ee]=Z,x[ee]=m[V]}const H=c;c=y,y=H;const U=m;m=x,x=U}return m}}function Ed(i){const s=i&65535,o=s&32768?-1:1,u=s>>10&31,c=s&1023;return u===0?o*c*5960464477539063e-23:u===31?c?NaN:o*(1/0):o*(1+c/1024)*Math.pow(2,u-15)}const Zr=i=>i.format===2||i.format===7,Qr=i=>i.format===3||i.format===8;async function Na(i,s,o){const u=new URLSearchParams(window.location.search),c=new ur(i,null),m=new lo(c),y=mo(s);bt(`[gl] WebGL2 backend · bc7=${y.bc7} astc=${y.astc} · ${s.getParameter(s.RENDERER)}`);let x=null,S=null,A=[],z=null;const G={animate:u.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},q=new io.Pane({title:"Config (WebGL2)",expanded:!0}),$={stats:"— loading —"};q.addMonitor($,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2}),q.addInput(G,"atlas_enabled",{label:"Texture"}).on("change",a=>x==null?void 0:x.setAtlasEnabled(a.value));const H=q.addFolder({title:"⚙ Advanced options",expanded:!1}),U=new Wa;q.on("change",()=>U.request()),window.__halloumiRedraw=()=>U.request(),window.__halloumiGate=U;const V={s:o.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};H.addMonitor(V,"s",{label:"Renderer"}),H.addButton({title:"🔁 Switch to WebGPU",disabled:!o.gpuAvailable}).on("click",()=>oi("webgpu"));let O=G.animate;m.enabled=!O,H.addInput(G,"animate",{label:"Animate"}).on("change",a=>{O=a.value,m.enabled=!O,O||(m.resetToCamera(),me())}),H.addInput(G,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>ce()),H.addInput(G,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",a=>x==null?void 0:x.setGaussianScaling(a.value)),H.addInput(G,"bg",{label:"Background",color:{type:"float"}}).on("change",a=>{x&&(x.bgColor=[a.value.r,a.value.g,a.value.b])});const ee={s:"—"};H.addMonitor(ee,"s",{label:"Atlas"}),H.addButton({title:"🎯 Reset camera"}).on("click",()=>ae(0,!1)),so(H);const F=document.createElement("button");F.textContent="Texture: on",Object.assign(F.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(F);const te=()=>{G.atlas_enabled=!G.atlas_enabled,x==null||x.setAtlasEnabled(G.atlas_enabled),F.textContent=`Texture: ${G.atlas_enabled?"on":"off"}`,q.refresh()};F.addEventListener("click",te);const ce=()=>{const a=Math.max(.25,G.render_scale),g=Math.max(1,Math.ceil(a*i.clientWidth)),h=Math.max(1,Math.ceil(a*i.clientHeight));(i.width!==g||i.height!==h)&&(i.width=g,i.height=h),c.on_update_canvas()};new ResizeObserver(()=>ce()).observe(i),ce();const he=.4,pe=3,Se=.3;let Ee=-1,Re=null,ke=0;const de=mt.create(),N=Mt.create(),xe=a=>mt.fromMat(Mt.create(a[0],a[1],a[2],a[4],a[5],a[6],a[8],a[9],a[10])),we=(a,g)=>{Re={fromPos:X.clone(c.position),toPos:X.clone(a.position),fromQuat:mt.normalize(xe(c.rotation)),toQuat:mt.normalize(xe(a.rotation)),target:a,t:0,duration:Math.max(.01,g)}},_e=document.createElement("span"),me=()=>{if(!S)return;const a=_o(c,S.surfel_data);a!==null&&m.setOrbitDepth(a)},ae=(a,g=!0)=>{if(A.length===0)return;Ee=(a%A.length+A.length)%A.length;const h=A[Ee];g?we(h,he):(c.set_preset(h),m.resetToCamera(),me()),_e.textContent=`${Ee+1} / ${A.length}: ${A[Ee].img_name??Ee}`};let Pe=null;const Ie=()=>{if(Pe||A.length===0)return;H.addSeparator(),Pe=document.createElement("div"),Pe.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const a=(g,h)=>{const b=document.createElement("button");return b.className="tp-btnv_b",b.textContent=g,b.style.cssText="flex:0 0 34px;height:24px;padding:0;",b.addEventListener("click",h),b};_e.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Pe.appendChild(a("◀",()=>ae(Ee-1))),Pe.appendChild(_e),Pe.appendChild(a("▶",()=>ae(Ee+1))),H.element.appendChild(Pe)};window.addEventListener("keydown",a=>{var g;((g=a.target)==null?void 0:g.tagName)!=="INPUT"&&(a.key==="ArrowLeft"||a.key==="PageUp"?ae(Ee-1):a.key==="ArrowRight"||a.key==="PageDown"?ae(Ee+1):a.key==="t"||a.key==="T"?te():a.key==="b"||a.key==="B"?Q():a.key>="1"&&a.key<="9"&&ae(parseInt(a.key,10)-1))});let Ae=0;const Le=(a,g)=>{if(!S)return;const h=i.getBoundingClientRect(),b=ci((a-h.left)*i.width/h.width,(g-h.top)*i.height/h.height,i,c,S.surfel_data);b&&m.setOrbitPivot(b)};i.addEventListener("dblclick",a=>Le(a.clientX,a.clientY)),i.addEventListener("pointerup",a=>{if(a.pointerType!=="touch")return;const g=performance.now();g-Ae<300&&Le(a.clientX,a.clientY),Ae=g});const oe=u.get("bundle")??u.get("model_url");async function Ce(a,g){cs(`parsing ${g} ...`);try{const h=new TextDecoder().decode(new Uint8Array(a,0,8));let b=a,d=null,v=null;h===or&&({pcBuffer:b,camerasBuffer:d,atlasBuffer:v}=pi(a)),At("parsing surfels ..."),S=await Ma(new File([b],g));let T=null;if(v&&u.get("notex")!=="1"){T=Nn(v);const B=Zr(T)&&y.bc7||Qr(T)&&y.astc;let Y=u.get("atlas2");if(!B&&!Y&&oe){const W=oe.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);W&&(Y=W[2]?`${W[1]}.bitymi${W[3]??""}`:`${W[1]}_astc.bitymi${W[3]??""}`)}if(!B&&Y){At("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:W}=await ls(Y,(re,ne)=>At(`downloading twin atlas ...
${(re/1048576).toFixed(1)}${ne?` / ${(ne/1048576).toFixed(1)}`:""} MB`));if(W!=null&&W.atlasBuffer){const re=Nn(W.atlasBuffer);(Zr(re)&&y.bc7||Qr(re)&&y.astc)&&(T=re)}}catch(W){console.warn("[gl] atlas2 failed:",W)}}}At("building GPU resources ..."),z=T,x=new $a(s,S,T),x.bgColor=[G.bg.r,G.bg.g,G.bg.b],x.setGaussianScaling(G.gaussian_scaling),x.setAtlasEnabled(G.atlas_enabled),ee.s=x.atlasStatus,bt(`[gl] max tex ${s.getParameter(s.MAX_TEXTURE_SIZE)} · layers ${s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS)} · ${x.atlasStatus}`),bt(`[gl] ${S.num_points} surfels · ${x.atlasStatus}`),A=[];const E=u.get("camera_url");if(d){const B=URL.createObjectURL(new Blob([d],{type:"application/json"}));try{A=await ai(B)}finally{URL.revokeObjectURL(B)}}else if(E)try{A=await ai(E)}catch(B){console.warn("[gl] camera_url failed:",B)}if(m.setBbox(S.bbox.min,S.bbox.max),A.length>0)Ie(),ae(0,!1);else{const B=S.centroid,Y=.5*Math.hypot(S.bbox.max[0]-S.bbox.min[0],S.bbox.max[1]-S.bbox.min[1],S.bbox.max[2]-S.bbox.min[2]),W=X.create(B[0]-Y,B[1]-Y,B[2]-Y),re=xt.lookAt(W,X.create(B[0],B[1],B[2]),X.create(0,1,0));xt.copy(re,c.rotation),c.rotation[12]=0,c.rotation[13]=0,c.rotation[14]=0,X.copy(W,c.position),c.update_buffer(),m.resetToCamera()}}catch(h){throw nn(),h}}const Be=document.getElementById("load-button");if(Be==null||Be.addEventListener("click",()=>{const a=document.createElement("input");a.type="file",a.accept=".ply,.bitymi",a.onchange=async()=>{var h;const g=(h=a.files)==null?void 0:h[0];g&&await Ce(await g.arrayBuffer(),g.name)},a.click()}),oe)try{cs("downloading ...");const{bundle:a,rawPly:g}=await ls(oe,(h,b,d,v)=>At(v==="cache"?`loading cached bundle ...
${(h/2**20).toFixed(1)}${b?` / ${(b/2**20).toFixed(1)}`:""} MB on this device`:`downloading ...
${(h/2**20).toFixed(1)}${b?` / ${(b/2**20).toFixed(1)}`:""} MB · ${(d/2**20).toFixed(1)} MB/s`));a?await I(a.pcBuffer,a.camerasBuffer,a.atlasBuffer,oe.split("/").pop()??"bundle"):g&&await Ce(g,oe.split("/").pop()??"scene.ply")}catch(a){nn(),console.error("[gl] bundle load failed:",a),$.stats=`load failed: ${(a==null?void 0:a.message)??a}`;const g=document.createElement("div");g.textContent=`Could not load this bundle in the WebGL2 renderer: ${(a==null?void 0:a.message)??a}`,Object.assign(g.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(g)}else $.stats="no ?bundle= — use 📂 Load";async function I(a,g,h,b){const d=new TextEncoder().encode(or),v=[a],T=[0];g&&(v.push(g),T.push(2)),h&&(v.push(h),T.push(3));const E=4+v.length*20,B=8+E,Y=B+v.reduce((se,be)=>se+be.byteLength,0),W=new Uint8Array(Y),re=new DataView(W.buffer);W.set(d,0),re.setUint32(8,v.length,!0);let ne=B;v.forEach((se,be)=>{re.setUint32(12+be*20,T[be],!0),re.setBigUint64(16+be*20,BigInt(ne),!0),re.setBigUint64(24+be*20,BigInt(se.byteLength),!0),W.set(new Uint8Array(se),ne),ne+=se.byteLength}),await Ce(W.buffer,b)}let Q=()=>{};const C=u.get("bundle_b");if(C&&x&&S){const a=u.get("label_a")??"A",g=u.get("label_b")??"B",h={a:{pc:S,renderer:x,atlas:z},b:null};let b="a",d=!1,v="";const T=document.createElement("button");Object.assign(T.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const E=(W="")=>{T.textContent=W||`Scene: ${b==="a"?a:g}  ⇄`;try{const re=new URL(window.location.href);b==="b"?re.searchParams.set("side","b"):re.searchParams.delete("side"),history.replaceState(history.state,"",re.toString())}catch{}},B=W=>{const re=document.createElement("div");Object.assign(re.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const ne=document.createElement("div");ne.textContent=W,re.appendChild(ne);const se=document.createElement("div");se.style.marginTop="12px";const be=(Me,ye)=>{const De=document.createElement("button");De.textContent=Me,Object.assign(De.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),De.onclick=ye,se.appendChild(De)};o.gpuAvailable&&be("Switch to WebGPU",()=>oi("webgpu")),be("OK",()=>re.remove()),re.appendChild(se),document.body.appendChild(re)},Y=W=>{const re=W==="a"?h.a:h.b;x=re.renderer,S=re.pc,z=re.atlas,x.bgColor=[G.bg.r,G.bg.g,G.bg.b],x.setGaussianScaling(G.gaussian_scaling),x.setAtlasEnabled(G.atlas_enabled),ee.s=x.atlasStatus,b=W,E(),console.log(`[gl A/B] active = ${W}: ${S.num_points} surfels`)};Q=async()=>{if(!d){if(b==="b"){Y("a");return}if(h.b){Y("b");return}if(v){B(v);return}d=!0,E(`loading ${g} ...`);try{const{bundle:W}=await ls(C,(be,Me)=>E(`loading ${g} ... ${(be/1048576).toFixed(0)}${Me?`/${(Me/1048576).toFixed(0)}`:""} MB`));if(!W)throw new Error("bundle_b must be a .bitymi bundle");const re=await Ma(new File([W.pcBuffer],"bundle_b.ply"));let ne=null;if(W.atlasBuffer&&u.get("notex")!=="1"){const be=Nn(W.atlasBuffer);(Zr(be)&&y.bc7||Qr(be)&&y.astc)&&(ne=be)}let se;try{se=new $a(s,re,ne)}catch(be){throw v=/tex3d/.test(String(be==null?void 0:be.message))?`“${g}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${a}”.`:`“${g}” cannot be shown in the WebGL2 renderer: ${(be==null?void 0:be.message)??be}. Still showing “${a}”.`,new Error(v)}h.b={pc:re,renderer:se,atlas:ne},Y("b")}catch(W){console.error("[gl A/B] B failed:",W),v||(v=`Could not load “${g}”: ${(W==null?void 0:W.message)??W}`),E(),B(v)}finally{d=!1}}},T.addEventListener("click",()=>Q()),document.body.appendChild(T),E(),u.get("side")==="b"&&Q()}let l=performance.now(),f=0,p=0;const w=()=>{var a;return((a=m.isDragging)==null?void 0:a.call(m))??!1};let M=0;function D(){try{R()}catch(a){M++<5&&console.error("[gl frame] exception (render loop kept alive):",a)}requestAnimationFrame(D)}function R(){const a=performance.now(),g=Math.min((a-l)/1e3,.1);if(l=a,x&&S){if(Re){Re.t+=g/Re.duration;const v=Math.min(1,Re.t),T=v*v*(3-2*v);X.lerp(Re.fromPos,Re.toPos,T,c.position),mt.slerp(Re.fromQuat,Re.toQuat,T,de),Mt.fromQuat(de,N),xt.fromMat3(N,c.rotation),c.update_buffer(),Re.t>=1&&(c.set_preset(Re.target),Re=null,O?ke=Se:(m.resetToCamera(),me()))}else O&&A.length>0&&(ke-=g,ke<=0&&(Ee=(Ee+1)%A.length,we(A[Ee],pe),_e.textContent=`${Ee+1} / ${A.length}: ${A[Ee].img_name??Ee}`));w()&&Re&&(Re=null),m.update(g);const h=performance.now();if(!U.needFrame(h,c,i.width,i.height,Re!==null||O||w(),`${G.atlas_enabled}`)){U.idleMs(h)>500&&($.stats=$.stats.replace(/· \d+ fps/,"· idle"));return}const b=x.render({rotation:c.rotation,eye:c.position,fovY:c.getFovY(),width:i.width,height:i.height,zfar:c.zfar}),d=1/Math.max(g,.001);f=f===0?d:f*.9+d*.1,$.stats=`${b.toLocaleString()} / ${S.num_points.toLocaleString()} surfels · ${Math.round(f)} fps
${i.width}×${i.height} px`,p++,p===2&&nn()}}requestAnimationFrame(D),window.__halloumiGL={stats:$,get renderer(){return x},get cameras(){return A},setPreset:ae,get atlas(){return z},pick(a,g){return S?ci(a,g,i,c,S.surfel_data):null},pickIds(a,g){if(!S)return[];const[h,b,d]=dr(a,g,c),v=c.position[0],T=c.position[1],E=c.position[2],B=S.surfel_data,Y=new Uint32Array(B.buffer,B.byteOffset,B.length),W=ne=>{const se=ne>>10&31,be=ne&1023,Me=ne&32768?-1:1;return se===0?Me*be*596e-10:Me*(1+be/1024)*Math.pow(2,se-15)},re=[];for(let ne=0;ne<S.num_points;ne++){const se=ne*8,be=B[se],Me=B[se+1],ye=B[se+2],De=W(Y[se+4]&65535),$e=W(Y[se+4]>>>16),Ve=W(Y[se+5]&65535),nt=W(Y[se+5]>>>16),Ne=W(Y[se+6]&65535),it=W(Y[se+6]>>>16),st=1/Math.hypot(Ve,nt,Ne,it),at=Ve*st,Je=nt*st,Xe=Ne*st,Qe=it*st,ft=[1-2*(Xe*Xe+Qe*Qe),2*(Je*Xe+at*Qe),2*(Je*Qe-at*Xe)],ot=[2*(Je*Xe-at*Qe),1-2*(Je*Je+Qe*Qe),2*(Xe*Qe+at*Je)],lt=[2*(Je*Qe+at*Xe),2*(Xe*Qe-at*Je),1-2*(Je*Je+Xe*Xe)],et=h*lt[0]+b*lt[1]+d*lt[2];if(Math.abs(et)<1e-9)continue;const dt=((be-v)*lt[0]+(Me-T)*lt[1]+(ye-E)*lt[2])/et;if(dt<=0)continue;const qe=v+dt*h-be,Ze=T+dt*b-Me,pt=E+dt*d-ye,Et=(qe*ft[0]+Ze*ft[1]+pt*ft[2])/De,Tt=(qe*ot[0]+Ze*ot[1]+pt*ot[2])/$e,Rt=Et*Et+Tt*Tt,vt=c.rotation,yt=c.position,zt=vt[0]*(be-yt[0])+vt[4]*(Me-yt[1])+vt[8]*(ye-yt[2]),Vt=vt[1]*(be-yt[0])+vt[5]*(Me-yt[1])+vt[9]*(ye-yt[2]),It=vt[2]*(be-yt[0])+vt[6]*(Me-yt[1])+vt[10]*(ye-yt[2]),Yt=i.width,Dt=i.height,Bt=.5*Dt/Math.tan(c.getFovY()*.5),ct=Bt*zt/It+(Yt-1)*.5,Ut=Bt*Vt/It+(Dt-1)*.5,Pn=2*((ct-a)*(ct-a)+(Ut-g)*(Ut-g)),Xt=W(Y[se+3]&65535),Sn=W(Y[se+3]>>>16),jt=Rt>=9?0:Math.pow(Math.max(0,1-Rt/9),Sn>1e-6?Sn:1),Zt=Math.min(.99,Xt*Math.max(jt,Math.exp(-.5*Pn)));if(Zt<1/255)continue;const Qt=z?Array.from(z.rects_expanded.subarray(ne*5,ne*5+5)):null,Ft=x&&x.atlasUpload?Array.from(x.atlasUpload.rects.subarray(ne*5,ne*5+5)):null;re.push({id:ne,t:+dt.toFixed(3),u:+Et.toFixed(2),v:+Tt.toFixed(2),rho2d:+Pn.toFixed(2),alpha:+Zt.toFixed(3),opa:+Xt.toFixed(2),tex:Y[se+7]>>>16&1,rect:Qt,remap:Ft})}return re.sort((ne,se)=>ne.t-se.t)}}}(function(){let s="dev";for(const u of Array.from(document.querySelectorAll('script[type="module"]'))){const m=u.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(m){s=m[1];break}}const o=document.createElement("div");o.textContent="v "+s,o.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(o.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(o)})();function pr(i){const s=document.createElement("div");Object.assign(s.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const o=document.createElement("div");o.textContent=i,s.appendChild(o);const u=document.createElement("button");u.textContent="Reload",Object.assign(u.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),u.onclick=()=>window.location.reload(),s.appendChild(u),document.body.appendChild(s)}let hr=!1;window.addEventListener("unhandledrejection",i=>{if(hr)return;hr=!0;const s=i.reason;pr(`The viewer failed to load: ${(s==null?void 0:s.message)??s}`)});window.addEventListener("error",i=>{var s;hr||!i.error||(hr=!0,pr(`The viewer hit an error: ${((s=i.error)==null?void 0:s.message)??i.message}`))});try{const i=performance.memory;console.log("[mem]",{deviceMemoryGB:navigator.deviceMemory??"?",hardwareConcurrency:navigator.hardwareConcurrency,jsHeapLimitMB:i?Math.round(i.jsHeapSizeLimit/2**20):"?",dpr:window.devicePixelRatio})}catch{}(async()=>{const i=document.querySelector("#webgpu-canvas");su(i!==null);const{forced:s,stored:o}=md(),u=s??o??"webgpu";let c=null;if(navigator.gpu!==void 0)try{c=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(S){console.warn("[backend] requestAdapter failed:",S)}if(u==="webgl"||c===null){const S=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!S){pr(c===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${u==="webgl"?s?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),Ta(i),Kr(()=>{var A;return(A=S.getExtension("WEBGL_lose_context"))==null?void 0:A.loseContext()}),Na(i,S,{gpuAvailable:c!==null});return}const m=[];c.features.has("timestamp-query")&&m.push("timestamp-query"),c.features.has("texture-compression-bc")&&m.push("texture-compression-bc"),c.features.has("texture-compression-astc")&&m.push("texture-compression-astc"),console.log("[adapter]",c.info??"(unknown)");try{const S=c.info??{};globalThis.__gpuAdapterInfo={vendor:S.vendor??"?",architecture:S.architecture??"?",device:S.device??"?",description:S.description??"?",features:Array.from(c.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(c.features)),console.log("[adapter] BC7:",c.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",c.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:c.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:c.limits.maxComputeWorkgroupStorageSize,maxBufferSize:c.limits.maxBufferSize,maxStorageBufferBindingSize:c.limits.maxStorageBufferBindingSize,maxTextureDimension2D:c.limits.maxTextureDimension2D});let y;try{y=await c.requestDevice({requiredFeatures:m,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:c.limits.maxComputeWorkgroupStorageSize,maxBufferSize:c.limits.maxBufferSize,maxStorageBufferBindingSize:c.limits.maxStorageBufferBindingSize}})}catch(S){console.warn("[backend] requestDevice failed, falling back to WebGL2:",S);const A=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!A){pr(`WebGPU device creation failed (${S}) and WebGL2 is not available.`);return}Ta(i),Kr(()=>{var z;return(z=A.getExtension("WEBGL_lose_context"))==null?void 0:z.loseContext()}),Na(i,A,{gpuAvailable:!1});return}tu(y),Kr(()=>y.destroy());const x=i.getContext("webgpu");wd(i,x,y,m)})();
