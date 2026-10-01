var Ml=Object.defineProperty;var Tl=(o,a,p)=>a in o?Ml(o,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):o[a]=p;var F=(o,a,p)=>(Tl(o,typeof a!="symbol"?a+"":a,p),p);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))S(g);new MutationObserver(g=>{for(const x of g)if(x.type==="childList")for(const L of x.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&S(L)}).observe(document,{childList:!0,subtree:!0});function p(g){const x={};return g.integrity&&(x.integrity=g.integrity),g.referrerPolicy&&(x.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?x.credentials="include":g.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function S(g){if(g.ep)return;g.ep=!0;const x=p(g);fetch(g.href,x)}})();function Bl(o,a){return class extends o{constructor(...p){super(...p),a(this)}}}const Al=Bl(Array,o=>o.fill(0));let Ge=1e-6;function Dl(o){function a(y=0,k=0){const C=new o(2);return y!==void 0&&(C[0]=y,k!==void 0&&(C[1]=k)),C}const p=a;function S(y,k,C){const r=C??new o(2);return r[0]=y,r[1]=k,r}function g(y,k){const C=k??new o(2);return C[0]=Math.ceil(y[0]),C[1]=Math.ceil(y[1]),C}function x(y,k){const C=k??new o(2);return C[0]=Math.floor(y[0]),C[1]=Math.floor(y[1]),C}function L(y,k){const C=k??new o(2);return C[0]=Math.round(y[0]),C[1]=Math.round(y[1]),C}function A(y,k=0,C=1,r){const m=r??new o(2);return m[0]=Math.min(C,Math.max(k,y[0])),m[1]=Math.min(C,Math.max(k,y[1])),m}function T(y,k,C){const r=C??new o(2);return r[0]=y[0]+k[0],r[1]=y[1]+k[1],r}function I(y,k,C,r){const m=r??new o(2);return m[0]=y[0]+k[0]*C,m[1]=y[1]+k[1]*C,m}function q(y,k){const C=y[0],r=y[1],m=k[0],d=k[1],h=Math.sqrt(C*C+r*r),l=Math.sqrt(m*m+d*d),_=h*l,P=_&&he(y,k)/_;return Math.acos(P)}function N(y,k,C){const r=C??new o(2);return r[0]=y[0]-k[0],r[1]=y[1]-k[1],r}const G=N;function Y(y,k){return Math.abs(y[0]-k[0])<Ge&&Math.abs(y[1]-k[1])<Ge}function oe(y,k){return y[0]===k[0]&&y[1]===k[1]}function Z(y,k,C,r){const m=r??new o(2);return m[0]=y[0]+C*(k[0]-y[0]),m[1]=y[1]+C*(k[1]-y[1]),m}function Q(y,k,C,r){const m=r??new o(2);return m[0]=y[0]+C[0]*(k[0]-y[0]),m[1]=y[1]+C[1]*(k[1]-y[1]),m}function te(y,k,C){const r=C??new o(2);return r[0]=Math.max(y[0],k[0]),r[1]=Math.max(y[1],k[1]),r}function $(y,k,C){const r=C??new o(2);return r[0]=Math.min(y[0],k[0]),r[1]=Math.min(y[1],k[1]),r}function re(y,k,C){const r=C??new o(2);return r[0]=y[0]*k,r[1]=y[1]*k,r}const H=re;function be(y,k,C){const r=C??new o(2);return r[0]=y[0]/k,r[1]=y[1]/k,r}function _e(y,k){const C=k??new o(2);return C[0]=1/y[0],C[1]=1/y[1],C}const me=_e;function de(y,k,C){const r=C??new o(3),m=y[0]*k[1]-y[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function he(y,k){return y[0]*k[0]+y[1]*k[1]}function De(y){const k=y[0],C=y[1];return Math.sqrt(k*k+C*C)}const ee=De;function pe(y){const k=y[0],C=y[1];return k*k+C*C}const ye=pe;function ze(y,k){const C=y[0]-k[0],r=y[1]-k[1];return Math.sqrt(C*C+r*r)}const ke=ze;function X(y,k){const C=y[0]-k[0],r=y[1]-k[1];return C*C+r*r}const K=X;function U(y,k){const C=k??new o(2),r=y[0],m=y[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(C[0]=r/d,C[1]=m/d):(C[0]=0,C[1]=0),C}function ve(y,k){const C=k??new o(2);return C[0]=-y[0],C[1]=-y[1],C}function Ae(y,k){const C=k??new o(2);return C[0]=y[0],C[1]=y[1],C}const $e=Ae;function Le(y,k,C){const r=C??new o(2);return r[0]=y[0]*k[0],r[1]=y[1]*k[1],r}const Ue=Le;function ae(y,k,C){const r=C??new o(2);return r[0]=y[0]/k[0],r[1]=y[1]/k[1],r}const xe=ae;function Ee(y=1,k){const C=k??new o(2),r=Math.random()*2*Math.PI;return C[0]=Math.cos(r)*y,C[1]=Math.sin(r)*y,C}function M(y){const k=y??new o(2);return k[0]=0,k[1]=0,k}function O(y,k,C){const r=C??new o(2),m=y[0],d=y[1];return r[0]=m*k[0]+d*k[4]+k[12],r[1]=m*k[1]+d*k[5]+k[13],r}function b(y,k,C){const r=C??new o(2),m=y[0],d=y[1];return r[0]=k[0]*m+k[4]*d+k[8],r[1]=k[1]*m+k[5]*d+k[9],r}function i(y,k,C,r){const m=r??new o(2),d=y[0]-k[0],h=y[1]-k[1],l=Math.sin(C),_=Math.cos(C);return m[0]=d*_-h*l+k[0],m[1]=d*l+h*_+k[1],m}function f(y,k,C){const r=C??new o(2);return U(y,r),re(r,k,r)}function u(y,k,C){const r=C??new o(2);return De(y)>k?f(y,k,r):Ae(y,r)}function v(y,k,C){const r=C??new o(2);return Z(y,k,.5,r)}return{create:a,fromValues:p,set:S,ceil:g,floor:x,round:L,clamp:A,add:T,addScaled:I,angle:q,subtract:N,sub:G,equalsApproximately:Y,equals:oe,lerp:Z,lerpV:Q,max:te,min:$,mulScalar:re,scale:H,divScalar:be,inverse:_e,invert:me,cross:de,dot:he,length:De,len:ee,lengthSq:pe,lenSq:ye,distance:ze,dist:ke,distanceSq:X,distSq:K,normalize:U,negate:ve,copy:Ae,clone:$e,multiply:Le,mul:Ue,divide:ae,div:xe,random:Ee,zero:M,transformMat4:O,transformMat3:b,rotate:i,setLength:f,truncate:u,midpoint:v}}const ni=new Map;function Ei(o){let a=ni.get(o);return a||(a=Dl(o),ni.set(o,a)),a}function Ll(o){function a(l,_,P){const w=new o(3);return l!==void 0&&(w[0]=l,_!==void 0&&(w[1]=_,P!==void 0&&(w[2]=P))),w}const p=a;function S(l,_,P,w){const B=w??new o(3);return B[0]=l,B[1]=_,B[2]=P,B}function g(l,_){const P=_??new o(3);return P[0]=Math.ceil(l[0]),P[1]=Math.ceil(l[1]),P[2]=Math.ceil(l[2]),P}function x(l,_){const P=_??new o(3);return P[0]=Math.floor(l[0]),P[1]=Math.floor(l[1]),P[2]=Math.floor(l[2]),P}function L(l,_){const P=_??new o(3);return P[0]=Math.round(l[0]),P[1]=Math.round(l[1]),P[2]=Math.round(l[2]),P}function A(l,_=0,P=1,w){const B=w??new o(3);return B[0]=Math.min(P,Math.max(_,l[0])),B[1]=Math.min(P,Math.max(_,l[1])),B[2]=Math.min(P,Math.max(_,l[2])),B}function T(l,_,P){const w=P??new o(3);return w[0]=l[0]+_[0],w[1]=l[1]+_[1],w[2]=l[2]+_[2],w}function I(l,_,P,w){const B=w??new o(3);return B[0]=l[0]+_[0]*P,B[1]=l[1]+_[1]*P,B[2]=l[2]+_[2]*P,B}function q(l,_){const P=l[0],w=l[1],B=l[2],V=_[0],W=_[1],le=_[2],se=Math.sqrt(P*P+w*w+B*B),ne=Math.sqrt(V*V+W*W+le*le),ge=se*ne,Me=ge&&he(l,_)/ge;return Math.acos(Me)}function N(l,_,P){const w=P??new o(3);return w[0]=l[0]-_[0],w[1]=l[1]-_[1],w[2]=l[2]-_[2],w}const G=N;function Y(l,_){return Math.abs(l[0]-_[0])<Ge&&Math.abs(l[1]-_[1])<Ge&&Math.abs(l[2]-_[2])<Ge}function oe(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function Z(l,_,P,w){const B=w??new o(3);return B[0]=l[0]+P*(_[0]-l[0]),B[1]=l[1]+P*(_[1]-l[1]),B[2]=l[2]+P*(_[2]-l[2]),B}function Q(l,_,P,w){const B=w??new o(3);return B[0]=l[0]+P[0]*(_[0]-l[0]),B[1]=l[1]+P[1]*(_[1]-l[1]),B[2]=l[2]+P[2]*(_[2]-l[2]),B}function te(l,_,P){const w=P??new o(3);return w[0]=Math.max(l[0],_[0]),w[1]=Math.max(l[1],_[1]),w[2]=Math.max(l[2],_[2]),w}function $(l,_,P){const w=P??new o(3);return w[0]=Math.min(l[0],_[0]),w[1]=Math.min(l[1],_[1]),w[2]=Math.min(l[2],_[2]),w}function re(l,_,P){const w=P??new o(3);return w[0]=l[0]*_,w[1]=l[1]*_,w[2]=l[2]*_,w}const H=re;function be(l,_,P){const w=P??new o(3);return w[0]=l[0]/_,w[1]=l[1]/_,w[2]=l[2]/_,w}function _e(l,_){const P=_??new o(3);return P[0]=1/l[0],P[1]=1/l[1],P[2]=1/l[2],P}const me=_e;function de(l,_,P){const w=P??new o(3),B=l[2]*_[0]-l[0]*_[2],V=l[0]*_[1]-l[1]*_[0];return w[0]=l[1]*_[2]-l[2]*_[1],w[1]=B,w[2]=V,w}function he(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function De(l){const _=l[0],P=l[1],w=l[2];return Math.sqrt(_*_+P*P+w*w)}const ee=De;function pe(l){const _=l[0],P=l[1],w=l[2];return _*_+P*P+w*w}const ye=pe;function ze(l,_){const P=l[0]-_[0],w=l[1]-_[1],B=l[2]-_[2];return Math.sqrt(P*P+w*w+B*B)}const ke=ze;function X(l,_){const P=l[0]-_[0],w=l[1]-_[1],B=l[2]-_[2];return P*P+w*w+B*B}const K=X;function U(l,_){const P=_??new o(3),w=l[0],B=l[1],V=l[2],W=Math.sqrt(w*w+B*B+V*V);return W>1e-5?(P[0]=w/W,P[1]=B/W,P[2]=V/W):(P[0]=0,P[1]=0,P[2]=0),P}function ve(l,_){const P=_??new o(3);return P[0]=-l[0],P[1]=-l[1],P[2]=-l[2],P}function Ae(l,_){const P=_??new o(3);return P[0]=l[0],P[1]=l[1],P[2]=l[2],P}const $e=Ae;function Le(l,_,P){const w=P??new o(3);return w[0]=l[0]*_[0],w[1]=l[1]*_[1],w[2]=l[2]*_[2],w}const Ue=Le;function ae(l,_,P){const w=P??new o(3);return w[0]=l[0]/_[0],w[1]=l[1]/_[1],w[2]=l[2]/_[2],w}const xe=ae;function Ee(l=1,_){const P=_??new o(3),w=Math.random()*2*Math.PI,B=Math.random()*2-1,V=Math.sqrt(1-B*B)*l;return P[0]=Math.cos(w)*V,P[1]=Math.sin(w)*V,P[2]=B*l,P}function M(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function O(l,_,P){const w=P??new o(3),B=l[0],V=l[1],W=l[2],le=_[3]*B+_[7]*V+_[11]*W+_[15]||1;return w[0]=(_[0]*B+_[4]*V+_[8]*W+_[12])/le,w[1]=(_[1]*B+_[5]*V+_[9]*W+_[13])/le,w[2]=(_[2]*B+_[6]*V+_[10]*W+_[14])/le,w}function b(l,_,P){const w=P??new o(3),B=l[0],V=l[1],W=l[2];return w[0]=B*_[0*4+0]+V*_[1*4+0]+W*_[2*4+0],w[1]=B*_[0*4+1]+V*_[1*4+1]+W*_[2*4+1],w[2]=B*_[0*4+2]+V*_[1*4+2]+W*_[2*4+2],w}function i(l,_,P){const w=P??new o(3),B=l[0],V=l[1],W=l[2];return w[0]=B*_[0]+V*_[4]+W*_[8],w[1]=B*_[1]+V*_[5]+W*_[9],w[2]=B*_[2]+V*_[6]+W*_[10],w}function f(l,_,P){const w=P??new o(3),B=_[0],V=_[1],W=_[2],le=_[3]*2,se=l[0],ne=l[1],ge=l[2],Me=V*ge-W*ne,we=W*se-B*ge,Se=B*ne-V*se;return w[0]=se+Me*le+(V*Se-W*we)*2,w[1]=ne+we*le+(W*Me-B*Se)*2,w[2]=ge+Se*le+(B*we-V*Me)*2,w}function u(l,_){const P=_??new o(3);return P[0]=l[12],P[1]=l[13],P[2]=l[14],P}function v(l,_,P){const w=P??new o(3),B=_*4;return w[0]=l[B+0],w[1]=l[B+1],w[2]=l[B+2],w}function y(l,_){const P=_??new o(3),w=l[0],B=l[1],V=l[2],W=l[4],le=l[5],se=l[6],ne=l[8],ge=l[9],Me=l[10];return P[0]=Math.sqrt(w*w+B*B+V*V),P[1]=Math.sqrt(W*W+le*le+se*se),P[2]=Math.sqrt(ne*ne+ge*ge+Me*Me),P}function k(l,_,P,w){const B=w??new o(3),V=[],W=[];return V[0]=l[0]-_[0],V[1]=l[1]-_[1],V[2]=l[2]-_[2],W[0]=V[0],W[1]=V[1]*Math.cos(P)-V[2]*Math.sin(P),W[2]=V[1]*Math.sin(P)+V[2]*Math.cos(P),B[0]=W[0]+_[0],B[1]=W[1]+_[1],B[2]=W[2]+_[2],B}function C(l,_,P,w){const B=w??new o(3),V=[],W=[];return V[0]=l[0]-_[0],V[1]=l[1]-_[1],V[2]=l[2]-_[2],W[0]=V[2]*Math.sin(P)+V[0]*Math.cos(P),W[1]=V[1],W[2]=V[2]*Math.cos(P)-V[0]*Math.sin(P),B[0]=W[0]+_[0],B[1]=W[1]+_[1],B[2]=W[2]+_[2],B}function r(l,_,P,w){const B=w??new o(3),V=[],W=[];return V[0]=l[0]-_[0],V[1]=l[1]-_[1],V[2]=l[2]-_[2],W[0]=V[0]*Math.cos(P)-V[1]*Math.sin(P),W[1]=V[0]*Math.sin(P)+V[1]*Math.cos(P),W[2]=V[2],B[0]=W[0]+_[0],B[1]=W[1]+_[1],B[2]=W[2]+_[2],B}function m(l,_,P){const w=P??new o(3);return U(l,w),re(w,_,w)}function d(l,_,P){const w=P??new o(3);return De(l)>_?m(l,_,w):Ae(l,w)}function h(l,_,P){const w=P??new o(3);return Z(l,_,.5,w)}return{create:a,fromValues:p,set:S,ceil:g,floor:x,round:L,clamp:A,add:T,addScaled:I,angle:q,subtract:N,sub:G,equalsApproximately:Y,equals:oe,lerp:Z,lerpV:Q,max:te,min:$,mulScalar:re,scale:H,divScalar:be,inverse:_e,invert:me,cross:de,dot:he,length:De,len:ee,lengthSq:pe,lenSq:ye,distance:ze,dist:ke,distanceSq:X,distSq:K,normalize:U,negate:ve,copy:Ae,clone:$e,multiply:Le,mul:Ue,divide:ae,div:xe,random:Ee,zero:M,transformMat4:O,transformMat4Upper3x3:b,transformMat3:i,transformQuat:f,getTranslation:u,getAxis:v,getScaling:y,rotateX:k,rotateY:C,rotateZ:r,setLength:m,truncate:d,midpoint:h}}const si=new Map;function ws(o){let a=si.get(o);return a||(a=Ll(o),si.set(o,a)),a}function Il(o){const a=Ei(o),p=ws(o);function S(i,f,u,v,y,k,C,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,f!==void 0&&(d[1]=f,u!==void 0&&(d[2]=u,v!==void 0&&(d[4]=v,y!==void 0&&(d[5]=y,k!==void 0&&(d[6]=k,C!==void 0&&(d[8]=C,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function g(i,f,u,v,y,k,C,r,m,d){const h=d??new o(12);return h[0]=i,h[1]=f,h[2]=u,h[3]=0,h[4]=v,h[5]=y,h[6]=k,h[7]=0,h[8]=C,h[9]=r,h[10]=m,h[11]=0,h}function x(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function L(i,f){const u=f??new o(12),v=i[0],y=i[1],k=i[2],C=i[3],r=v+v,m=y+y,d=k+k,h=v*r,l=y*r,_=y*m,P=k*r,w=k*m,B=k*d,V=C*r,W=C*m,le=C*d;return u[0]=1-_-B,u[1]=l+le,u[2]=P-W,u[3]=0,u[4]=l-le,u[5]=1-h-B,u[6]=w+V,u[7]=0,u[8]=P+W,u[9]=w-V,u[10]=1-h-_,u[11]=0,u}function A(i,f){const u=f??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function T(i,f,u){const v=u??new o(12);return v[0]=i[0]*f,v[1]=i[1]*f,v[2]=i[2]*f,v[4]=i[4]*f,v[5]=i[5]*f,v[6]=i[6]*f,v[8]=i[8]*f,v[9]=i[9]*f,v[10]=i[10]*f,v}const I=T;function q(i,f,u){const v=u??new o(12);return v[0]=i[0]+f[0],v[1]=i[1]+f[1],v[2]=i[2]+f[2],v[4]=i[4]+f[4],v[5]=i[5]+f[5],v[6]=i[6]+f[6],v[8]=i[8]+f[8],v[9]=i[9]+f[9],v[10]=i[10]+f[10],v}function N(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const G=N;function Y(i,f){return Math.abs(i[0]-f[0])<Ge&&Math.abs(i[1]-f[1])<Ge&&Math.abs(i[2]-f[2])<Ge&&Math.abs(i[4]-f[4])<Ge&&Math.abs(i[5]-f[5])<Ge&&Math.abs(i[6]-f[6])<Ge&&Math.abs(i[8]-f[8])<Ge&&Math.abs(i[9]-f[9])<Ge&&Math.abs(i[10]-f[10])<Ge}function oe(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function Z(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function Q(i,f){const u=f??new o(12);if(u===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,u}const v=i[0*4+0],y=i[0*4+1],k=i[0*4+2],C=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],l=i[2*4+2];return u[0]=v,u[1]=C,u[2]=d,u[4]=y,u[5]=r,u[6]=h,u[8]=k,u[9]=m,u[10]=l,u}function te(i,f){const u=f??new o(12),v=i[0*4+0],y=i[0*4+1],k=i[0*4+2],C=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],l=i[2*4+2],_=l*r-m*h,P=-l*C+m*d,w=h*C-r*d,B=1/(v*_+y*P+k*w);return u[0]=_*B,u[1]=(-l*y+k*h)*B,u[2]=(m*y-k*r)*B,u[4]=P*B,u[5]=(l*v-k*d)*B,u[6]=(-m*v+k*C)*B,u[8]=w*B,u[9]=(-h*v+y*d)*B,u[10]=(r*v-y*C)*B,u}function $(i){const f=i[0],u=i[0*4+1],v=i[0*4+2],y=i[1*4+0],k=i[1*4+1],C=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return f*(k*d-m*C)-y*(u*d-m*v)+r*(u*C-k*v)}const re=te;function H(i,f,u){const v=u??new o(12),y=i[0],k=i[1],C=i[2],r=i[4+0],m=i[4+1],d=i[4+2],h=i[8+0],l=i[8+1],_=i[8+2],P=f[0],w=f[1],B=f[2],V=f[4+0],W=f[4+1],le=f[4+2],se=f[8+0],ne=f[8+1],ge=f[8+2];return v[0]=y*P+r*w+h*B,v[1]=k*P+m*w+l*B,v[2]=C*P+d*w+_*B,v[4]=y*V+r*W+h*le,v[5]=k*V+m*W+l*le,v[6]=C*V+d*W+_*le,v[8]=y*se+r*ne+h*ge,v[9]=k*se+m*ne+l*ge,v[10]=C*se+d*ne+_*ge,v}const be=H;function _e(i,f,u){const v=u??Z();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=f[0],v[9]=f[1],v[10]=1,v}function me(i,f){const u=f??a.create();return u[0]=i[8],u[1]=i[9],u}function de(i,f,u){const v=u??a.create(),y=f*4;return v[0]=i[y+0],v[1]=i[y+1],v}function he(i,f,u,v){const y=v===i?i:N(i,v),k=u*4;return y[k+0]=f[0],y[k+1]=f[1],y}function De(i,f){const u=f??a.create(),v=i[0],y=i[1],k=i[4],C=i[5];return u[0]=Math.sqrt(v*v+y*y),u[1]=Math.sqrt(k*k+C*C),u}function ee(i,f){const u=f??p.create(),v=i[0],y=i[1],k=i[2],C=i[4],r=i[5],m=i[6],d=i[8],h=i[9],l=i[10];return u[0]=Math.sqrt(v*v+y*y+k*k),u[1]=Math.sqrt(C*C+r*r+m*m),u[2]=Math.sqrt(d*d+h*h+l*l),u}function pe(i,f){const u=f??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function ye(i,f,u){const v=u??new o(12),y=f[0],k=f[1],C=i[0],r=i[1],m=i[2],d=i[1*4+0],h=i[1*4+1],l=i[1*4+2],_=i[2*4+0],P=i[2*4+1],w=i[2*4+2];return i!==v&&(v[0]=C,v[1]=r,v[2]=m,v[4]=d,v[5]=h,v[6]=l),v[8]=C*y+d*k+_,v[9]=r*y+h*k+P,v[10]=m*y+l*k+w,v}function ze(i,f){const u=f??new o(12),v=Math.cos(i),y=Math.sin(i);return u[0]=v,u[1]=y,u[2]=0,u[4]=-y,u[5]=v,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ke(i,f,u){const v=u??new o(12),y=i[0*4+0],k=i[0*4+1],C=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],h=Math.cos(f),l=Math.sin(f);return v[0]=h*y+l*r,v[1]=h*k+l*m,v[2]=h*C+l*d,v[4]=h*r-l*y,v[5]=h*m-l*k,v[6]=h*d-l*C,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function X(i,f){const u=f??new o(12),v=Math.cos(i),y=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=v,u[6]=y,u[8]=0,u[9]=-y,u[10]=v,u}function K(i,f,u){const v=u??new o(12),y=i[4],k=i[5],C=i[6],r=i[8],m=i[9],d=i[10],h=Math.cos(f),l=Math.sin(f);return v[4]=h*y+l*r,v[5]=h*k+l*m,v[6]=h*C+l*d,v[8]=h*r-l*y,v[9]=h*m-l*k,v[10]=h*d-l*C,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function U(i,f){const u=f??new o(12),v=Math.cos(i),y=Math.sin(i);return u[0]=v,u[1]=0,u[2]=-y,u[4]=0,u[5]=1,u[6]=0,u[8]=y,u[9]=0,u[10]=v,u}function ve(i,f,u){const v=u??new o(12),y=i[0*4+0],k=i[0*4+1],C=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],h=Math.cos(f),l=Math.sin(f);return v[0]=h*y-l*r,v[1]=h*k-l*m,v[2]=h*C-l*d,v[8]=h*r+l*y,v[9]=h*m+l*k,v[10]=h*d+l*C,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const Ae=ze,$e=ke;function Le(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ue(i,f,u){const v=u??new o(12),y=f[0],k=f[1];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ae(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function xe(i,f,u){const v=u??new o(12),y=f[0],k=f[1],C=f[2];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],v[8]=C*i[2*4+0],v[9]=C*i[2*4+1],v[10]=C*i[2*4+2],v}function Ee(i,f){const u=f??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function M(i,f,u){const v=u??new o(12);return v[0]=f*i[0*4+0],v[1]=f*i[0*4+1],v[2]=f*i[0*4+2],v[4]=f*i[1*4+0],v[5]=f*i[1*4+1],v[6]=f*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function O(i,f){const u=f??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function b(i,f,u){const v=u??new o(12);return v[0]=f*i[0*4+0],v[1]=f*i[0*4+1],v[2]=f*i[0*4+2],v[4]=f*i[1*4+0],v[5]=f*i[1*4+1],v[6]=f*i[1*4+2],v[8]=f*i[2*4+0],v[9]=f*i[2*4+1],v[10]=f*i[2*4+2],v}return{add:q,clone:G,copy:N,create:S,determinant:$,equals:oe,equalsApproximately:Y,fromMat4:x,fromQuat:L,get3DScaling:ee,getAxis:de,getScaling:De,getTranslation:me,identity:Z,inverse:te,invert:re,mul:be,mulScalar:I,multiply:H,multiplyScalar:T,negate:A,rotate:ke,rotateX:K,rotateY:ve,rotateZ:$e,rotation:ze,rotationX:X,rotationY:U,rotationZ:Ae,scale:Ue,scale3D:xe,scaling:Le,scaling3D:ae,set:g,setAxis:he,setTranslation:_e,translate:ye,translation:pe,transpose:Q,uniformScale:M,uniformScale3D:b,uniformScaling:Ee,uniformScaling3D:O}}const ri=new Map;function Rl(o){let a=ri.get(o);return a||(a=Il(o),ri.set(o,a)),a}function zl(o){const a=ws(o);function p(r,m,d,h,l,_,P,w,B,V,W,le,se,ne,ge,Me){const we=new o(16);return r!==void 0&&(we[0]=r,m!==void 0&&(we[1]=m,d!==void 0&&(we[2]=d,h!==void 0&&(we[3]=h,l!==void 0&&(we[4]=l,_!==void 0&&(we[5]=_,P!==void 0&&(we[6]=P,w!==void 0&&(we[7]=w,B!==void 0&&(we[8]=B,V!==void 0&&(we[9]=V,W!==void 0&&(we[10]=W,le!==void 0&&(we[11]=le,se!==void 0&&(we[12]=se,ne!==void 0&&(we[13]=ne,ge!==void 0&&(we[14]=ge,Me!==void 0&&(we[15]=Me)))))))))))))))),we}function S(r,m,d,h,l,_,P,w,B,V,W,le,se,ne,ge,Me,we){const Se=we??new o(16);return Se[0]=r,Se[1]=m,Se[2]=d,Se[3]=h,Se[4]=l,Se[5]=_,Se[6]=P,Se[7]=w,Se[8]=B,Se[9]=V,Se[10]=W,Se[11]=le,Se[12]=se,Se[13]=ne,Se[14]=ge,Se[15]=Me,Se}function g(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function x(r,m){const d=m??new o(16),h=r[0],l=r[1],_=r[2],P=r[3],w=h+h,B=l+l,V=_+_,W=h*w,le=l*w,se=l*B,ne=_*w,ge=_*B,Me=_*V,we=P*w,Se=P*B,Re=P*V;return d[0]=1-se-Me,d[1]=le+Re,d[2]=ne-Se,d[3]=0,d[4]=le-Re,d[5]=1-W-Me,d[6]=ge+we,d[7]=0,d[8]=ne+Se,d[9]=ge-we,d[10]=1-W-se,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function L(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function A(r,m,d){const h=d??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function T(r,m,d){const h=d??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const I=T;function q(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const N=q;function G(r,m){return Math.abs(r[0]-m[0])<Ge&&Math.abs(r[1]-m[1])<Ge&&Math.abs(r[2]-m[2])<Ge&&Math.abs(r[3]-m[3])<Ge&&Math.abs(r[4]-m[4])<Ge&&Math.abs(r[5]-m[5])<Ge&&Math.abs(r[6]-m[6])<Ge&&Math.abs(r[7]-m[7])<Ge&&Math.abs(r[8]-m[8])<Ge&&Math.abs(r[9]-m[9])<Ge&&Math.abs(r[10]-m[10])<Ge&&Math.abs(r[11]-m[11])<Ge&&Math.abs(r[12]-m[12])<Ge&&Math.abs(r[13]-m[13])<Ge&&Math.abs(r[14]-m[14])<Ge&&Math.abs(r[15]-m[15])<Ge}function Y(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function oe(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Z(r,m){const d=m??new o(16);if(d===r){let Ie;return Ie=r[1],r[1]=r[4],r[4]=Ie,Ie=r[2],r[2]=r[8],r[8]=Ie,Ie=r[3],r[3]=r[12],r[12]=Ie,Ie=r[6],r[6]=r[9],r[9]=Ie,Ie=r[7],r[7]=r[13],r[13]=Ie,Ie=r[11],r[11]=r[14],r[14]=Ie,d}const h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],P=r[0*4+3],w=r[1*4+0],B=r[1*4+1],V=r[1*4+2],W=r[1*4+3],le=r[2*4+0],se=r[2*4+1],ne=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Se=r[3*4+2],Re=r[3*4+3];return d[0]=h,d[1]=w,d[2]=le,d[3]=Me,d[4]=l,d[5]=B,d[6]=se,d[7]=we,d[8]=_,d[9]=V,d[10]=ne,d[11]=Se,d[12]=P,d[13]=W,d[14]=ge,d[15]=Re,d}function Q(r,m){const d=m??new o(16),h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],P=r[0*4+3],w=r[1*4+0],B=r[1*4+1],V=r[1*4+2],W=r[1*4+3],le=r[2*4+0],se=r[2*4+1],ne=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Se=r[3*4+2],Re=r[3*4+3],Ie=ne*Re,We=Se*ge,qe=V*Re,Ke=Se*W,Qe=V*ge,st=ne*W,rt=_*Re,tt=Se*P,at=_*ge,nt=ne*P,Ze=_*W,Ye=V*P,je=le*we,Xe=Me*se,Je=w*we,ht=Me*B,it=w*se,It=le*B,xt=h*we,kt=Me*l,Dt=h*se,Wt=le*l,Et=h*B,Gt=w*l,gn=Ie*B+Ke*se+Qe*we-(We*B+qe*se+st*we),Rt=We*l+rt*se+nt*we-(Ie*l+tt*se+at*we),sn=qe*l+tt*B+Ze*we-(Ke*l+rt*B+Ye*we),rn=st*l+at*B+Ye*se-(Qe*l+nt*B+Ze*se),He=1/(h*gn+w*Rt+le*sn+Me*rn);return d[0]=He*gn,d[1]=He*Rt,d[2]=He*sn,d[3]=He*rn,d[4]=He*(We*w+qe*le+st*Me-(Ie*w+Ke*le+Qe*Me)),d[5]=He*(Ie*h+tt*le+at*Me-(We*h+rt*le+nt*Me)),d[6]=He*(Ke*h+rt*w+Ye*Me-(qe*h+tt*w+Ze*Me)),d[7]=He*(Qe*h+nt*w+Ze*le-(st*h+at*w+Ye*le)),d[8]=He*(je*W+ht*ge+it*Re-(Xe*W+Je*ge+It*Re)),d[9]=He*(Xe*P+xt*ge+Wt*Re-(je*P+kt*ge+Dt*Re)),d[10]=He*(Je*P+kt*W+Et*Re-(ht*P+xt*W+Gt*Re)),d[11]=He*(It*P+Dt*W+Gt*ge-(it*P+Wt*W+Et*ge)),d[12]=He*(Je*ne+It*Se+Xe*V-(it*Se+je*V+ht*ne)),d[13]=He*(Dt*Se+je*_+kt*ne-(xt*ne+Wt*Se+Xe*_)),d[14]=He*(xt*V+Gt*Se+ht*_-(Et*Se+Je*_+kt*V)),d[15]=He*(Et*ne+it*_+Wt*V-(Dt*V+Gt*ne+It*_)),d}function te(r){const m=r[0],d=r[0*4+1],h=r[0*4+2],l=r[0*4+3],_=r[1*4+0],P=r[1*4+1],w=r[1*4+2],B=r[1*4+3],V=r[2*4+0],W=r[2*4+1],le=r[2*4+2],se=r[2*4+3],ne=r[3*4+0],ge=r[3*4+1],Me=r[3*4+2],we=r[3*4+3],Se=le*we,Re=Me*se,Ie=w*we,We=Me*B,qe=w*se,Ke=le*B,Qe=h*we,st=Me*l,rt=h*se,tt=le*l,at=h*B,nt=w*l,Ze=Se*P+We*W+qe*ge-(Re*P+Ie*W+Ke*ge),Ye=Re*d+Qe*W+tt*ge-(Se*d+st*W+rt*ge),je=Ie*d+st*P+at*ge-(We*d+Qe*P+nt*ge),Xe=Ke*d+rt*P+nt*W-(qe*d+tt*P+at*W);return m*Ze+_*Ye+V*je+ne*Xe}const $=Q;function re(r,m,d){const h=d??new o(16),l=r[0],_=r[1],P=r[2],w=r[3],B=r[4+0],V=r[4+1],W=r[4+2],le=r[4+3],se=r[8+0],ne=r[8+1],ge=r[8+2],Me=r[8+3],we=r[12+0],Se=r[12+1],Re=r[12+2],Ie=r[12+3],We=m[0],qe=m[1],Ke=m[2],Qe=m[3],st=m[4+0],rt=m[4+1],tt=m[4+2],at=m[4+3],nt=m[8+0],Ze=m[8+1],Ye=m[8+2],je=m[8+3],Xe=m[12+0],Je=m[12+1],ht=m[12+2],it=m[12+3];return h[0]=l*We+B*qe+se*Ke+we*Qe,h[1]=_*We+V*qe+ne*Ke+Se*Qe,h[2]=P*We+W*qe+ge*Ke+Re*Qe,h[3]=w*We+le*qe+Me*Ke+Ie*Qe,h[4]=l*st+B*rt+se*tt+we*at,h[5]=_*st+V*rt+ne*tt+Se*at,h[6]=P*st+W*rt+ge*tt+Re*at,h[7]=w*st+le*rt+Me*tt+Ie*at,h[8]=l*nt+B*Ze+se*Ye+we*je,h[9]=_*nt+V*Ze+ne*Ye+Se*je,h[10]=P*nt+W*Ze+ge*Ye+Re*je,h[11]=w*nt+le*Ze+Me*Ye+Ie*je,h[12]=l*Xe+B*Je+se*ht+we*it,h[13]=_*Xe+V*Je+ne*ht+Se*it,h[14]=P*Xe+W*Je+ge*ht+Re*it,h[15]=w*Xe+le*Je+Me*ht+Ie*it,h}const H=re;function be(r,m,d){const h=d??oe();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function _e(r,m){const d=m??a.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function me(r,m,d){const h=d??a.create(),l=m*4;return h[0]=r[l+0],h[1]=r[l+1],h[2]=r[l+2],h}function de(r,m,d,h){const l=h===r?h:q(r,h),_=d*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function he(r,m){const d=m??a.create(),h=r[0],l=r[1],_=r[2],P=r[4],w=r[5],B=r[6],V=r[8],W=r[9],le=r[10];return d[0]=Math.sqrt(h*h+l*l+_*_),d[1]=Math.sqrt(P*P+w*w+B*B),d[2]=Math.sqrt(V*V+W*W+le*le),d}function De(r,m,d,h,l){const _=l??new o(16),P=Math.tan(Math.PI*.5-.5*r);if(_[0]=P/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=P,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const w=1/(d-h);_[10]=h*w,_[14]=h*d*w}else _[10]=-1,_[14]=-d;return _}function ee(r,m,d,h=1/0,l){const _=l??new o(16),P=1/Math.tan(r*.5);if(_[0]=P/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=P,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=d;else{const w=1/(h-d);_[10]=d*w,_[14]=h*d*w}return _}function pe(r,m,d,h,l,_,P){const w=P??new o(16);return w[0]=2/(m-r),w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2/(h-d),w[6]=0,w[7]=0,w[8]=0,w[9]=0,w[10]=1/(l-_),w[11]=0,w[12]=(m+r)/(r-m),w[13]=(h+d)/(d-h),w[14]=l/(l-_),w[15]=1,w}function ye(r,m,d,h,l,_,P){const w=P??new o(16),B=m-r,V=h-d,W=l-_;return w[0]=2*l/B,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*l/V,w[6]=0,w[7]=0,w[8]=(r+m)/B,w[9]=(h+d)/V,w[10]=_/W,w[11]=-1,w[12]=0,w[13]=0,w[14]=l*_/W,w[15]=0,w}function ze(r,m,d,h,l,_=1/0,P){const w=P??new o(16),B=m-r,V=h-d;if(w[0]=2*l/B,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*l/V,w[6]=0,w[7]=0,w[8]=(r+m)/B,w[9]=(h+d)/V,w[11]=-1,w[12]=0,w[13]=0,w[15]=0,_===1/0)w[10]=0,w[14]=l;else{const W=1/(_-l);w[10]=l*W,w[14]=_*l*W}return w}const ke=a.create(),X=a.create(),K=a.create();function U(r,m,d,h){const l=h??new o(16);return a.normalize(a.subtract(m,r,K),K),a.normalize(a.cross(d,K,ke),ke),a.normalize(a.cross(K,ke,X),X),l[0]=ke[0],l[1]=ke[1],l[2]=ke[2],l[3]=0,l[4]=X[0],l[5]=X[1],l[6]=X[2],l[7]=0,l[8]=K[0],l[9]=K[1],l[10]=K[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ve(r,m,d,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,K),K),a.normalize(a.cross(d,K,ke),ke),a.normalize(a.cross(K,ke,X),X),l[0]=ke[0],l[1]=ke[1],l[2]=ke[2],l[3]=0,l[4]=X[0],l[5]=X[1],l[6]=X[2],l[7]=0,l[8]=K[0],l[9]=K[1],l[10]=K[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ae(r,m,d,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,K),K),a.normalize(a.cross(d,K,ke),ke),a.normalize(a.cross(K,ke,X),X),l[0]=ke[0],l[1]=X[0],l[2]=K[0],l[3]=0,l[4]=ke[1],l[5]=X[1],l[6]=K[1],l[7]=0,l[8]=ke[2],l[9]=X[2],l[10]=K[2],l[11]=0,l[12]=-(ke[0]*r[0]+ke[1]*r[1]+ke[2]*r[2]),l[13]=-(X[0]*r[0]+X[1]*r[1]+X[2]*r[2]),l[14]=-(K[0]*r[0]+K[1]*r[1]+K[2]*r[2]),l[15]=1,l}function $e(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function Le(r,m,d){const h=d??new o(16),l=m[0],_=m[1],P=m[2],w=r[0],B=r[1],V=r[2],W=r[3],le=r[1*4+0],se=r[1*4+1],ne=r[1*4+2],ge=r[1*4+3],Me=r[2*4+0],we=r[2*4+1],Se=r[2*4+2],Re=r[2*4+3],Ie=r[3*4+0],We=r[3*4+1],qe=r[3*4+2],Ke=r[3*4+3];return r!==h&&(h[0]=w,h[1]=B,h[2]=V,h[3]=W,h[4]=le,h[5]=se,h[6]=ne,h[7]=ge,h[8]=Me,h[9]=we,h[10]=Se,h[11]=Re),h[12]=w*l+le*_+Me*P+Ie,h[13]=B*l+se*_+we*P+We,h[14]=V*l+ne*_+Se*P+qe,h[15]=W*l+ge*_+Re*P+Ke,h}function Ue(r,m){const d=m??new o(16),h=Math.cos(r),l=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=h,d[6]=l,d[7]=0,d[8]=0,d[9]=-l,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ae(r,m,d){const h=d??new o(16),l=r[4],_=r[5],P=r[6],w=r[7],B=r[8],V=r[9],W=r[10],le=r[11],se=Math.cos(m),ne=Math.sin(m);return h[4]=se*l+ne*B,h[5]=se*_+ne*V,h[6]=se*P+ne*W,h[7]=se*w+ne*le,h[8]=se*B-ne*l,h[9]=se*V-ne*_,h[10]=se*W-ne*P,h[11]=se*le-ne*w,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function xe(r,m){const d=m??new o(16),h=Math.cos(r),l=Math.sin(r);return d[0]=h,d[1]=0,d[2]=-l,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=l,d[9]=0,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Ee(r,m,d){const h=d??new o(16),l=r[0*4+0],_=r[0*4+1],P=r[0*4+2],w=r[0*4+3],B=r[2*4+0],V=r[2*4+1],W=r[2*4+2],le=r[2*4+3],se=Math.cos(m),ne=Math.sin(m);return h[0]=se*l-ne*B,h[1]=se*_-ne*V,h[2]=se*P-ne*W,h[3]=se*w-ne*le,h[8]=se*B+ne*l,h[9]=se*V+ne*_,h[10]=se*W+ne*P,h[11]=se*le+ne*w,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function M(r,m){const d=m??new o(16),h=Math.cos(r),l=Math.sin(r);return d[0]=h,d[1]=l,d[2]=0,d[3]=0,d[4]=-l,d[5]=h,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function O(r,m,d){const h=d??new o(16),l=r[0*4+0],_=r[0*4+1],P=r[0*4+2],w=r[0*4+3],B=r[1*4+0],V=r[1*4+1],W=r[1*4+2],le=r[1*4+3],se=Math.cos(m),ne=Math.sin(m);return h[0]=se*l+ne*B,h[1]=se*_+ne*V,h[2]=se*P+ne*W,h[3]=se*w+ne*le,h[4]=se*B-ne*l,h[5]=se*V-ne*_,h[6]=se*W-ne*P,h[7]=se*le-ne*w,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function b(r,m,d){const h=d??new o(16);let l=r[0],_=r[1],P=r[2];const w=Math.sqrt(l*l+_*_+P*P);l/=w,_/=w,P/=w;const B=l*l,V=_*_,W=P*P,le=Math.cos(m),se=Math.sin(m),ne=1-le;return h[0]=B+(1-B)*le,h[1]=l*_*ne+P*se,h[2]=l*P*ne-_*se,h[3]=0,h[4]=l*_*ne-P*se,h[5]=V+(1-V)*le,h[6]=_*P*ne+l*se,h[7]=0,h[8]=l*P*ne+_*se,h[9]=_*P*ne-l*se,h[10]=W+(1-W)*le,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=b;function f(r,m,d,h){const l=h??new o(16);let _=m[0],P=m[1],w=m[2];const B=Math.sqrt(_*_+P*P+w*w);_/=B,P/=B,w/=B;const V=_*_,W=P*P,le=w*w,se=Math.cos(d),ne=Math.sin(d),ge=1-se,Me=V+(1-V)*se,we=_*P*ge+w*ne,Se=_*w*ge-P*ne,Re=_*P*ge-w*ne,Ie=W+(1-W)*se,We=P*w*ge+_*ne,qe=_*w*ge+P*ne,Ke=P*w*ge-_*ne,Qe=le+(1-le)*se,st=r[0],rt=r[1],tt=r[2],at=r[3],nt=r[4],Ze=r[5],Ye=r[6],je=r[7],Xe=r[8],Je=r[9],ht=r[10],it=r[11];return l[0]=Me*st+we*nt+Se*Xe,l[1]=Me*rt+we*Ze+Se*Je,l[2]=Me*tt+we*Ye+Se*ht,l[3]=Me*at+we*je+Se*it,l[4]=Re*st+Ie*nt+We*Xe,l[5]=Re*rt+Ie*Ze+We*Je,l[6]=Re*tt+Ie*Ye+We*ht,l[7]=Re*at+Ie*je+We*it,l[8]=qe*st+Ke*nt+Qe*Xe,l[9]=qe*rt+Ke*Ze+Qe*Je,l[10]=qe*tt+Ke*Ye+Qe*ht,l[11]=qe*at+Ke*je+Qe*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const u=f;function v(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function y(r,m,d){const h=d??new o(16),l=m[0],_=m[1],P=m[2];return h[0]=l*r[0*4+0],h[1]=l*r[0*4+1],h[2]=l*r[0*4+2],h[3]=l*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=P*r[2*4+0],h[9]=P*r[2*4+1],h[10]=P*r[2*4+2],h[11]=P*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function k(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,m,d){const h=d??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:A,aim:U,axisRotate:f,axisRotation:b,cameraAim:ve,clone:N,copy:q,create:p,determinant:te,equals:Y,equalsApproximately:G,fromMat3:g,fromQuat:x,frustum:ye,frustumReverseZ:ze,getAxis:me,getScaling:he,getTranslation:_e,identity:oe,inverse:Q,invert:$,lookAt:Ae,mul:H,mulScalar:I,multiply:re,multiplyScalar:T,negate:L,ortho:pe,perspective:De,perspectiveReverseZ:ee,rotate:u,rotateX:ae,rotateY:Ee,rotateZ:O,rotation:i,rotationX:Ue,rotationY:xe,rotationZ:M,scale:y,scaling:v,set:S,setAxis:de,setTranslation:be,translate:Le,translation:$e,transpose:Z,uniformScale:C,uniformScaling:k}}const ii=new Map;function Gl(o){let a=ii.get(o);return a||(a=zl(o),ii.set(o,a)),a}function Ul(o){const a=ws(o);function p(M,O,b,i){const f=new o(4);return M!==void 0&&(f[0]=M,O!==void 0&&(f[1]=O,b!==void 0&&(f[2]=b,i!==void 0&&(f[3]=i)))),f}const S=p;function g(M,O,b,i,f){const u=f??new o(4);return u[0]=M,u[1]=O,u[2]=b,u[3]=i,u}function x(M,O,b){const i=b??new o(4),f=O*.5,u=Math.sin(f);return i[0]=u*M[0],i[1]=u*M[1],i[2]=u*M[2],i[3]=Math.cos(f),i}function L(M,O){const b=O??a.create(3),i=Math.acos(M[3])*2,f=Math.sin(i*.5);return f>Ge?(b[0]=M[0]/f,b[1]=M[1]/f,b[2]=M[2]/f):(b[0]=1,b[1]=0,b[2]=0),{angle:i,axis:b}}function A(M,O){const b=De(M,O);return Math.acos(2*b*b-1)}function T(M,O,b){const i=b??new o(4),f=M[0],u=M[1],v=M[2],y=M[3],k=O[0],C=O[1],r=O[2],m=O[3];return i[0]=f*m+y*k+u*r-v*C,i[1]=u*m+y*C+v*k-f*r,i[2]=v*m+y*r+f*C-u*k,i[3]=y*m-f*k-u*C-v*r,i}const I=T;function q(M,O,b){const i=b??new o(4),f=O*.5,u=M[0],v=M[1],y=M[2],k=M[3],C=Math.sin(f),r=Math.cos(f);return i[0]=u*r+k*C,i[1]=v*r+y*C,i[2]=y*r-v*C,i[3]=k*r-u*C,i}function N(M,O,b){const i=b??new o(4),f=O*.5,u=M[0],v=M[1],y=M[2],k=M[3],C=Math.sin(f),r=Math.cos(f);return i[0]=u*r-y*C,i[1]=v*r+k*C,i[2]=y*r+u*C,i[3]=k*r-v*C,i}function G(M,O,b){const i=b??new o(4),f=O*.5,u=M[0],v=M[1],y=M[2],k=M[3],C=Math.sin(f),r=Math.cos(f);return i[0]=u*r+v*C,i[1]=v*r-u*C,i[2]=y*r+k*C,i[3]=k*r-y*C,i}function Y(M,O,b,i){const f=i??new o(4),u=M[0],v=M[1],y=M[2],k=M[3];let C=O[0],r=O[1],m=O[2],d=O[3],h=u*C+v*r+y*m+k*d;h<0&&(h=-h,C=-C,r=-r,m=-m,d=-d);let l,_;if(1-h>Ge){const P=Math.acos(h),w=Math.sin(P);l=Math.sin((1-b)*P)/w,_=Math.sin(b*P)/w}else l=1-b,_=b;return f[0]=l*u+_*C,f[1]=l*v+_*r,f[2]=l*y+_*m,f[3]=l*k+_*d,f}function oe(M,O){const b=O??new o(4),i=M[0],f=M[1],u=M[2],v=M[3],y=i*i+f*f+u*u+v*v,k=y?1/y:0;return b[0]=-i*k,b[1]=-f*k,b[2]=-u*k,b[3]=v*k,b}function Z(M,O){const b=O??new o(4);return b[0]=-M[0],b[1]=-M[1],b[2]=-M[2],b[3]=M[3],b}function Q(M,O){const b=O??new o(4),i=M[0]+M[5]+M[10];if(i>0){const f=Math.sqrt(i+1);b[3]=.5*f;const u=.5/f;b[0]=(M[6]-M[9])*u,b[1]=(M[8]-M[2])*u,b[2]=(M[1]-M[4])*u}else{let f=0;M[5]>M[0]&&(f=1),M[10]>M[f*4+f]&&(f=2);const u=(f+1)%3,v=(f+2)%3,y=Math.sqrt(M[f*4+f]-M[u*4+u]-M[v*4+v]+1);b[f]=.5*y;const k=.5/y;b[3]=(M[u*4+v]-M[v*4+u])*k,b[u]=(M[u*4+f]+M[f*4+u])*k,b[v]=(M[v*4+f]+M[f*4+v])*k}return b}function te(M,O,b,i,f){const u=f??new o(4),v=M*.5,y=O*.5,k=b*.5,C=Math.sin(v),r=Math.cos(v),m=Math.sin(y),d=Math.cos(y),h=Math.sin(k),l=Math.cos(k);switch(i){case"xyz":u[0]=C*d*l+r*m*h,u[1]=r*m*l-C*d*h,u[2]=r*d*h+C*m*l,u[3]=r*d*l-C*m*h;break;case"xzy":u[0]=C*d*l-r*m*h,u[1]=r*m*l-C*d*h,u[2]=r*d*h+C*m*l,u[3]=r*d*l+C*m*h;break;case"yxz":u[0]=C*d*l+r*m*h,u[1]=r*m*l-C*d*h,u[2]=r*d*h-C*m*l,u[3]=r*d*l+C*m*h;break;case"yzx":u[0]=C*d*l+r*m*h,u[1]=r*m*l+C*d*h,u[2]=r*d*h-C*m*l,u[3]=r*d*l-C*m*h;break;case"zxy":u[0]=C*d*l-r*m*h,u[1]=r*m*l+C*d*h,u[2]=r*d*h+C*m*l,u[3]=r*d*l-C*m*h;break;case"zyx":u[0]=C*d*l-r*m*h,u[1]=r*m*l+C*d*h,u[2]=r*d*h-C*m*l,u[3]=r*d*l+C*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function $(M,O){const b=O??new o(4);return b[0]=M[0],b[1]=M[1],b[2]=M[2],b[3]=M[3],b}const re=$;function H(M,O,b){const i=b??new o(4);return i[0]=M[0]+O[0],i[1]=M[1]+O[1],i[2]=M[2]+O[2],i[3]=M[3]+O[3],i}function be(M,O,b){const i=b??new o(4);return i[0]=M[0]-O[0],i[1]=M[1]-O[1],i[2]=M[2]-O[2],i[3]=M[3]-O[3],i}const _e=be;function me(M,O,b){const i=b??new o(4);return i[0]=M[0]*O,i[1]=M[1]*O,i[2]=M[2]*O,i[3]=M[3]*O,i}const de=me;function he(M,O,b){const i=b??new o(4);return i[0]=M[0]/O,i[1]=M[1]/O,i[2]=M[2]/O,i[3]=M[3]/O,i}function De(M,O){return M[0]*O[0]+M[1]*O[1]+M[2]*O[2]+M[3]*O[3]}function ee(M,O,b,i){const f=i??new o(4);return f[0]=M[0]+b*(O[0]-M[0]),f[1]=M[1]+b*(O[1]-M[1]),f[2]=M[2]+b*(O[2]-M[2]),f[3]=M[3]+b*(O[3]-M[3]),f}function pe(M){const O=M[0],b=M[1],i=M[2],f=M[3];return Math.sqrt(O*O+b*b+i*i+f*f)}const ye=pe;function ze(M){const O=M[0],b=M[1],i=M[2],f=M[3];return O*O+b*b+i*i+f*f}const ke=ze;function X(M,O){const b=O??new o(4),i=M[0],f=M[1],u=M[2],v=M[3],y=Math.sqrt(i*i+f*f+u*u+v*v);return y>1e-5?(b[0]=i/y,b[1]=f/y,b[2]=u/y,b[3]=v/y):(b[0]=0,b[1]=0,b[2]=0,b[3]=1),b}function K(M,O){return Math.abs(M[0]-O[0])<Ge&&Math.abs(M[1]-O[1])<Ge&&Math.abs(M[2]-O[2])<Ge&&Math.abs(M[3]-O[3])<Ge}function U(M,O){return M[0]===O[0]&&M[1]===O[1]&&M[2]===O[2]&&M[3]===O[3]}function ve(M){const O=M??new o(4);return O[0]=0,O[1]=0,O[2]=0,O[3]=1,O}const Ae=a.create(),$e=a.create(),Le=a.create();function Ue(M,O,b){const i=b??new o(4),f=a.dot(M,O);return f<-.999999?(a.cross($e,M,Ae),a.len(Ae)<1e-6&&a.cross(Le,M,Ae),a.normalize(Ae,Ae),x(Ae,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(M,O,Ae),i[0]=Ae[0],i[1]=Ae[1],i[2]=Ae[2],i[3]=1+f,X(i,i))}const ae=new o(4),xe=new o(4);function Ee(M,O,b,i,f,u){const v=u??new o(4);return Y(M,i,f,ae),Y(O,b,f,xe),Y(ae,xe,2*f*(1-f),v),v}return{create:p,fromValues:S,set:g,fromAxisAngle:x,toAxisAngle:L,angle:A,multiply:T,mul:I,rotateX:q,rotateY:N,rotateZ:G,slerp:Y,inverse:oe,conjugate:Z,fromMat:Q,fromEuler:te,copy:$,clone:re,add:H,subtract:be,sub:_e,mulScalar:me,scale:de,divScalar:he,dot:De,lerp:ee,length:pe,len:ye,lengthSq:ze,lenSq:ke,normalize:X,equalsApproximately:K,equals:U,identity:ve,rotationTo:Ue,sqlerp:Ee}}const oi=new Map;function Vl(o){let a=oi.get(o);return a||(a=Ul(o),oi.set(o,a)),a}function Ol(o){function a(b,i,f,u){const v=new o(4);return b!==void 0&&(v[0]=b,i!==void 0&&(v[1]=i,f!==void 0&&(v[2]=f,u!==void 0&&(v[3]=u)))),v}const p=a;function S(b,i,f,u,v){const y=v??new o(4);return y[0]=b,y[1]=i,y[2]=f,y[3]=u,y}function g(b,i){const f=i??new o(4);return f[0]=Math.ceil(b[0]),f[1]=Math.ceil(b[1]),f[2]=Math.ceil(b[2]),f[3]=Math.ceil(b[3]),f}function x(b,i){const f=i??new o(4);return f[0]=Math.floor(b[0]),f[1]=Math.floor(b[1]),f[2]=Math.floor(b[2]),f[3]=Math.floor(b[3]),f}function L(b,i){const f=i??new o(4);return f[0]=Math.round(b[0]),f[1]=Math.round(b[1]),f[2]=Math.round(b[2]),f[3]=Math.round(b[3]),f}function A(b,i=0,f=1,u){const v=u??new o(4);return v[0]=Math.min(f,Math.max(i,b[0])),v[1]=Math.min(f,Math.max(i,b[1])),v[2]=Math.min(f,Math.max(i,b[2])),v[3]=Math.min(f,Math.max(i,b[3])),v}function T(b,i,f){const u=f??new o(4);return u[0]=b[0]+i[0],u[1]=b[1]+i[1],u[2]=b[2]+i[2],u[3]=b[3]+i[3],u}function I(b,i,f,u){const v=u??new o(4);return v[0]=b[0]+i[0]*f,v[1]=b[1]+i[1]*f,v[2]=b[2]+i[2]*f,v[3]=b[3]+i[3]*f,v}function q(b,i,f){const u=f??new o(4);return u[0]=b[0]-i[0],u[1]=b[1]-i[1],u[2]=b[2]-i[2],u[3]=b[3]-i[3],u}const N=q;function G(b,i){return Math.abs(b[0]-i[0])<Ge&&Math.abs(b[1]-i[1])<Ge&&Math.abs(b[2]-i[2])<Ge&&Math.abs(b[3]-i[3])<Ge}function Y(b,i){return b[0]===i[0]&&b[1]===i[1]&&b[2]===i[2]&&b[3]===i[3]}function oe(b,i,f,u){const v=u??new o(4);return v[0]=b[0]+f*(i[0]-b[0]),v[1]=b[1]+f*(i[1]-b[1]),v[2]=b[2]+f*(i[2]-b[2]),v[3]=b[3]+f*(i[3]-b[3]),v}function Z(b,i,f,u){const v=u??new o(4);return v[0]=b[0]+f[0]*(i[0]-b[0]),v[1]=b[1]+f[1]*(i[1]-b[1]),v[2]=b[2]+f[2]*(i[2]-b[2]),v[3]=b[3]+f[3]*(i[3]-b[3]),v}function Q(b,i,f){const u=f??new o(4);return u[0]=Math.max(b[0],i[0]),u[1]=Math.max(b[1],i[1]),u[2]=Math.max(b[2],i[2]),u[3]=Math.max(b[3],i[3]),u}function te(b,i,f){const u=f??new o(4);return u[0]=Math.min(b[0],i[0]),u[1]=Math.min(b[1],i[1]),u[2]=Math.min(b[2],i[2]),u[3]=Math.min(b[3],i[3]),u}function $(b,i,f){const u=f??new o(4);return u[0]=b[0]*i,u[1]=b[1]*i,u[2]=b[2]*i,u[3]=b[3]*i,u}const re=$;function H(b,i,f){const u=f??new o(4);return u[0]=b[0]/i,u[1]=b[1]/i,u[2]=b[2]/i,u[3]=b[3]/i,u}function be(b,i){const f=i??new o(4);return f[0]=1/b[0],f[1]=1/b[1],f[2]=1/b[2],f[3]=1/b[3],f}const _e=be;function me(b,i){return b[0]*i[0]+b[1]*i[1]+b[2]*i[2]+b[3]*i[3]}function de(b){const i=b[0],f=b[1],u=b[2],v=b[3];return Math.sqrt(i*i+f*f+u*u+v*v)}const he=de;function De(b){const i=b[0],f=b[1],u=b[2],v=b[3];return i*i+f*f+u*u+v*v}const ee=De;function pe(b,i){const f=b[0]-i[0],u=b[1]-i[1],v=b[2]-i[2],y=b[3]-i[3];return Math.sqrt(f*f+u*u+v*v+y*y)}const ye=pe;function ze(b,i){const f=b[0]-i[0],u=b[1]-i[1],v=b[2]-i[2],y=b[3]-i[3];return f*f+u*u+v*v+y*y}const ke=ze;function X(b,i){const f=i??new o(4),u=b[0],v=b[1],y=b[2],k=b[3],C=Math.sqrt(u*u+v*v+y*y+k*k);return C>1e-5?(f[0]=u/C,f[1]=v/C,f[2]=y/C,f[3]=k/C):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function K(b,i){const f=i??new o(4);return f[0]=-b[0],f[1]=-b[1],f[2]=-b[2],f[3]=-b[3],f}function U(b,i){const f=i??new o(4);return f[0]=b[0],f[1]=b[1],f[2]=b[2],f[3]=b[3],f}const ve=U;function Ae(b,i,f){const u=f??new o(4);return u[0]=b[0]*i[0],u[1]=b[1]*i[1],u[2]=b[2]*i[2],u[3]=b[3]*i[3],u}const $e=Ae;function Le(b,i,f){const u=f??new o(4);return u[0]=b[0]/i[0],u[1]=b[1]/i[1],u[2]=b[2]/i[2],u[3]=b[3]/i[3],u}const Ue=Le;function ae(b){const i=b??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function xe(b,i,f){const u=f??new o(4),v=b[0],y=b[1],k=b[2],C=b[3];return u[0]=i[0]*v+i[4]*y+i[8]*k+i[12]*C,u[1]=i[1]*v+i[5]*y+i[9]*k+i[13]*C,u[2]=i[2]*v+i[6]*y+i[10]*k+i[14]*C,u[3]=i[3]*v+i[7]*y+i[11]*k+i[15]*C,u}function Ee(b,i,f){const u=f??new o(4);return X(b,u),$(u,i,u)}function M(b,i,f){const u=f??new o(4);return de(b)>i?Ee(b,i,u):U(b,u)}function O(b,i,f){const u=f??new o(4);return oe(b,i,.5,u)}return{create:a,fromValues:p,set:S,ceil:g,floor:x,round:L,clamp:A,add:T,addScaled:I,subtract:q,sub:N,equalsApproximately:G,equals:Y,lerp:oe,lerpV:Z,max:Q,min:te,mulScalar:$,scale:re,divScalar:H,inverse:be,invert:_e,dot:me,length:de,len:he,lengthSq:De,lenSq:ee,distance:pe,dist:ye,distanceSq:ze,distSq:ke,normalize:X,negate:K,copy:U,clone:ve,multiply:Ae,mul:$e,divide:Le,div:Ue,zero:ae,transformMat4:xe,setLength:Ee,truncate:M,midpoint:O}}const ai=new Map;function Fl(o){let a=ai.get(o);return a||(a=Ol(o),ai.set(o,a)),a}function nr(o,a,p,S,g,x){return{mat3:Rl(o),mat4:Gl(a),quat:Vl(p),vec2:Ei(S),vec3:ws(g),vec4:Fl(x)}}const{mat3:At,mat4:mt,quat:dt,vec2:li,vec3:z,vec4:jc}=nr(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);nr(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);nr(Al,Array,Array,Array,Array,Array);const ci=document.querySelector("#log");let St=null,vn=null;function ki(){if(St)return St;St=document.createElement("div"),St.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",St.appendChild(o),vn=document.createElement("div"),vn.className="ply-spinner-label",St.appendChild(vn),St.style.display="none",document.body.appendChild(St),St}function sr(o){ki(),vn&&o&&(vn.textContent=o),St&&(St.style.opacity="1",St.style.display="flex")}function qt(o){ki(),vn&&(vn.textContent=o)}function Zn(){if(!St)return;const o=St;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Mi(o,a){if(!ci)return;const p=document.createElement("p");p.innerText=o,a&&Object.assign(p.style,a),ci.appendChild(p)}async function Ct(o){console.log(o),Mi(o)}async function Nl(o){console.error(o),Mi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Ti;function Bi(){Ti=performance.now()}function ui(o){const a=performance.now()-Ti;Ct(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function $l(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function Bn(o){return o+3&-4}const ql=2,Wl=3,jl=5,Kl=6,Xn=7,bs=8,Qn=9,Jn=10;function di(o){const a=new TextDecoder("ascii"),p=a.decode(new Uint8Array(o,0,4));if(p!=="NAT2")throw new Error(`NAT2 bad magic: '${p}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),g=4,x=S.getUint32(g+0,!0),L=S.getUint32(g+4,!0),A=S.getUint32(g+8,!0),T=S.getUint32(g+12,!0),I=S.getUint32(g+16,!0),q=S.getFloat32(g+20,!0),N=S.getUint32(g+24,!0),G=S.getUint32(g+28,!0),Y=S.getFloat32(g+32,!0),oe=S.getFloat32(g+36,!0),Z=S.getFloat32(g+40,!0),Q=S.getUint32(g+44,!0),te=S.getFloat32(g+48,!0),$=S.getFloat32(g+52,!0),re=S.getUint32(g+56,!0),H=S.getUint32(g+60,!0),be=G===Qn||G===Jn,_e=be?H:0,me=be?0:H&255,de=be?0:H>>8&255,he=me>0?me:1;if(G===jl||G===Kl)throw new Error(`NAT2: paired-RVQ format=${G} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const De=G===Qn||G===Jn;if(G!==ql&&G!==Wl&&G!==Xn&&G!==bs&&!De)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${G}`);if(x%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${x} layer_h=${Q}`);let ee=g+64;const pe=(re+1)*4,ye=new Uint32Array(o.slice(ee,ee+pe));ee+=pe;let ze;if(he>1){const ae=(he+1)*4;if(ee+ae>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ae} from ${ee})`);ze=new Uint32Array(o.slice(ee,ee+ae)),ee+=ae}else ze=new Uint32Array([0,x]);let ke=0;for(let ae=0;ae<he;ae++){const xe=ze[ae+1]-ze[ae];xe>ke&&(ke=xe)}if(De){const ae=_e&1?7:6,xe=I*ae*4;if(ee+xe>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${xe} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const Ee=new Float32Array(o.slice(ee,ee+xe));ee+=xe;const M=Math.max(1,_e>>8&255),O=[];let b=0;for(let y=0,k=x,C=Q;y<M;y++,k>>=1,C>>=1){const r=Math.max(1,k>>2)*Math.max(1,C>>2)*16;O.push(r),b+=r}const i=o.byteLength-ee;if(i<b)throw new Error(`NAT2 probe atlas truncated: need ${b} bytes for ${x}x${Q} x${M} mips, have ${i}`);const f=[];let u=ee;for(const y of O)f.push(new Uint8Array(o.slice(u,u+y))),u+=y;const v=f[0];return{width:x,height:L,channels:A,kernel_type:T,num_rects:I,uv_extent:q,sb_number:N,format:G,sh_bias:Y,res_bias:oe,compact_mult:Z,layer_h:Q,atlas_scale:te,atlas_offset:$,n_layers:re,n_cols:he,layer_cuts:ye,column_cuts:ze,slice_width:ke,rects_expanded:Ee,atlas_bytes:v,mip_bytes:f,probe_mode:_e&1?2:1}}const X=I*4*4;if(ee+X>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${X} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const K=new Float32Array(o.slice(ee,ee+X));ee+=X;const U=new Float32Array(I*5);for(let ae=0;ae<I;ae++){const xe=K[ae*4+0],Ee=K[ae*4+1],M=K[ae*4+2],O=K[ae*4+3];let b=0;for(let y=1;y<=re&&ye[y]<=Ee;y++)b=y;let i=0;for(let y=1;y<=he&&ze[y]<=xe;y++)i=y;const f=Ee-ye[b],u=xe-ze[i],v=i*re+b;U[ae*5+0]=u,U[ae*5+1]=f,U[ae*5+2]=M,U[ae*5+3]=O,U[ae*5+4]=v}let ve,Ae;const $e=he,Ue=x/4*16;if(G===Xn||G===bs){if(ee+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ae=G===Xn?"BCCB":"ACCB",xe=a.decode(new Uint8Array(o,ee,4));if(xe!==ae)throw new Error(`NAT2 typeD bad sub-magic: expected '${ae}' got '${xe}'`);const Ee=S.getUint32(ee+4,!0),M=S.getUint32(ee+8,!0),O=S.getUint32(ee+12,!0),b=S.getUint32(ee+16,!0),i=S.getUint32(ee+20,!0);if(Ee!==1)throw new Error(`NAT2 BCCB unsupported version ${Ee}`);if(O!==L/4||b!==x/4||i!==O*b)throw new Error(`NAT2 BCCB block grid mismatch: header ${x}×${L}, sub-header ${b}×${O} (${i} blocks)`);ee+=24;const f=M*16;if(ee+f>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${f}, have ${o.byteLength-ee})`);const u=new Uint8Array(o,ee,f);ee+=f;const v=i*2;if(ee+v>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${v}, have ${o.byteLength-ee})`);const y=new Uint16Array(o.slice(ee,ee+v));ee+=v;const k=new Uint8Array(i*16);for(let C=0;C<i;C++){const r=y[C]*16;k.set(u.subarray(r,r+16),C*16)}if(ve=k,de>1){Ae=[k];for(let C=1;C<de;C++){if(ee+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${C} sub-header`);const r=a.decode(new Uint8Array(o,ee,4));if(r!==ae)throw new Error(`NAT2 mip ${C}: bad sub-magic '${r}'`);const m=S.getUint32(ee+8,!0),d=S.getUint32(ee+16,!0),h=S.getUint32(ee+20,!0);if(d!==C)throw new Error(`NAT2 mip section order: expected level ${C}, got ${d}`);ee+=24;let l=0;for(let B=0;B<$e;B++)for(let V=0;V<re;V++){const W=Ai(C,ze[B+1]-ze[B],ye[V+1]-ye[V],ke,Q);l+=(W.cw>>2)*(W.ch>>2)}if(l!==h)throw new Error(`NAT2 mip ${C}: ${h} blocks, loader expects ${l}`);if(ee+m*16+h*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${C}`);const _=new Uint8Array(o,ee,m*16);ee+=m*16;const P=new Uint16Array(o.slice(ee,ee+h*2));ee+=h*2;const w=new Uint8Array(h*16);for(let B=0;B<h;B++){const V=P[B]*16;w.set(_.subarray(V,V+16),B*16)}Ae.push(w)}}}else{let ae=0;for(let xe=0;xe<re;xe++){const Ee=ye[xe+1]-ye[xe];if(Ee%4!==0)throw new Error(`NAT2 BC7 layer ${xe} rows ${Ee} not 4-aligned`);ae+=Ee/4*Ue}if(ee+ae>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ae} more bytes from offset ${ee}, have ${o.byteLength-ee}`);ve=new Uint8Array(o.slice(ee,ee+ae))}return{width:x,height:L,channels:A,kernel_type:T,num_rects:I,uv_extent:q,sb_number:N,format:G,sh_bias:Y,res_bias:oe,compact_mult:Z,layer_h:Q,atlas_scale:te,atlas_offset:$,n_layers:re,n_cols:he,layer_cuts:ye,column_cuts:ze,slice_width:ke,rects_expanded:U,atlas_bytes:ve,...Ae?{mip_bytes:Ae}:{}}}function Ai(o,a,p,S,g){const x=A=>A+3>>2<<2,L=1<<o;return{cw:Math.min(x(Math.max(1,S>>o)),x(Math.ceil(a/L))),ch:Math.min(x(Math.max(1,g>>o)),x(Math.ceil(p/L)))}}const Hl=32;function pi(o,a,p){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,g,x,L;if(a.format===2||a.format===Xn||a.format===Qn){if(!o.features.has("texture-compression-bc"))return Ct(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;L=a.format===Qn?"BC7 atlas (proberes: shared probe texture)":a.format===Xn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:g,sampler:x}=hi(o,a,"bc7-rgba-unorm",L)}else if(a.format===3||a.format===bs||a.format===Jn){if(!o.features.has("texture-compression-astc"))return Ct(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;L=a.format===Jn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===bs?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:g,sampler:x}=hi(o,a,"astc-4x4-unorm",L)}else return Ct(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:A}=a,T=o.createBuffer({label:"atlas rects (5-stride)",size:Bn(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(T,0,A);const I=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ms(o,I,a,p),{texture:S,view:g,sampler:x,rectsBuffer:T,texParamsBuffer:I,meta:a}}function hi(o,a,p,S){const{width:g,layer_h:x,n_layers:L,n_cols:A,layer_cuts:T,column_cuts:I,slice_width:q,atlas_bytes:N}=a,Y=g/4*16,oe=o.limits.maxTextureDimension2D;if(x>oe||q>oe)throw new Error(`⚠️  atlas slice dims ${q}x${x} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Z=A*L;if(Z>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${A} cols × ${L} layers = ${Z} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=a.mip_bytes??[N],te=Q.length,$=o.createTexture({label:S,size:{width:q,height:x,depthOrArrayLayers:Z},mipLevelCount:te,sampleCount:1,dimension:"2d",format:p,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let _e=0;_e<A;_e++){const me=I[_e]/4,de=(I[_e+1]-I[_e])/4;for(let he=0;he<L;he++){const De=T[he]/4,ee=(T[he+1]-T[he])/4,pe=_e*L+he,ye=De*Y+me*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:pe},aspect:"all"},N,{offset:ye,bytesPerRow:Y,rowsPerImage:ee},{width:de*4,height:ee*4,depthOrArrayLayers:1})}}const re=a.format===Qn||a.format===Jn;for(let _e=1;_e<te&&!re;_e++){let me=0;for(let de=0;de<A;de++)for(let he=0;he<L;he++){const{cw:De,ch:ee}=Ai(_e,I[de+1]-I[de],T[he+1]-T[he],q,x);o.queue.writeTexture({texture:$,mipLevel:_e,origin:{x:0,y:0,z:de*L+he},aspect:"all"},Q[_e],{offset:me,bytesPerRow:(De>>2)*16,rowsPerImage:ee>>2},{width:De,height:ee,depthOrArrayLayers:1}),me+=(De>>2)*(ee>>2)*16}}for(let _e=1;_e<te&&re;_e++){const me=Math.max(1,q>>_e),de=Math.max(1,x>>_e);o.queue.writeTexture({texture:$,mipLevel:_e,origin:{x:0,y:0,z:0},aspect:"all"},Q[_e],{offset:0,bytesPerRow:Math.max(1,me>>2)*16,rowsPerImage:Math.max(1,de>>2)},{width:me,height:de,depthOrArrayLayers:1})}te>1&&console.log(`[atlas] ${te} mip levels uploaded (${re?"trilinear":"per-surfel integer level"})`);const H=$.createView({label:`${S} view`,dimension:"2d-array"}),be=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1&&re?"linear":"nearest"});return{texture:$,view:H,sampler:be}}function ms(o,a,p,S,g=1){var I;const x=new ArrayBuffer(32),L=new Uint32Array(x),A=new Float32Array(x);L[0]=S?1:0,A[1]=p.atlas_scale,A[2]=p.atlas_offset,A[3]=p.res_bias,L[4]=p.probe_mode?p.probe_mode|0:0,L[5]=p.width|0;const T=(((I=p.mip_bytes)==null?void 0:I.length)??1)>1;L[6]=T&&g!==0?1:0,A[7]=p.uv_extent,o.queue.writeBuffer(a,0,x)}async function Ys(o,a){Ct(`loading ply file from File... : ${o.name}`),sr("downloading PLY...");const p=await o.arrayBuffer();try{return await Di(p,a)}finally{Zn()}}async function Yl(o,a){Ct(`loading ply file from URL... : ${o}`),sr("downloading PLY...");try{Bi();const p=new URL(o,self.location.href).href;return await Di({url:p},a)}finally{Zn()}}function Zl(o){return new Promise((a,p)=>{const S=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});S.onmessage=g=>{const x=g.data;if((x==null?void 0:x.type)==="error"){Nl(`PLY worker error: ${x.message??"unknown error"}`),S.terminate(),p(new Error(x.message??"Worker error"));return}else if((x==null?void 0:x.type)==="download_progress"){const L=x.totalBytes,A=x.loadedBytes/(1024*1024),T=L?L/(1024*1024):void 0,I=(x.speedBps??0)/(1024*1024),q=L?Math.min(99,Math.floor(x.loadedBytes/L*100)):void 0,N=T?`total ${T.toFixed(1)} MB`:"total -- MB",G=T&&q!==void 0?`${A.toFixed(1)} MB downloaded (${q}%)`:`${A.toFixed(1)} MB downloaded`,Y=`${I.toFixed(2)} MB/s`;qt(`downloading PLY ...
${N}, ${G}
${Y}`);return}else if((x==null?void 0:x.type)==="fetched"){Ct(`💾 Fetched (${x.byteLength} bytes)`),ui("Download"),qt("parsing PLY..."),Bi();return}else if((x==null?void 0:x.type)==="parse_progress"){const L=x.total??0,A=x.read??0,T=L>0?Math.floor(A/L*100):0;qt(`parsing PLY ...
${A}/${L} surfels (${T}%)`);return}else(x==null?void 0:x.type)==="done"&&(S.terminate(),ui("Parse"),a(x))},S.onerror=g=>{S.terminate(),p(g)},o instanceof ArrayBuffer?(qt("parsing PLY..."),S.postMessage({type:"start",plyBuffer:o},[o])):S.postMessage({type:"start_url",url:o.url})})}async function Di(o,a){var oe,Z,Q,te,$,re,H,be,_e,me,de,he;const p=await Zl(o),S=p.num_points,g=p.K,x=p.feature_mode??0,L=p.sh_bias,A=p.kernel_type,T=p.surfelBuffer,I=p.svParamsBuffer;Ct(`🪐 Total surfels: ${S}, mode=${x===1?"SB":"SV"}, K=${g}, sh_bias=${L}, kernel_type=${A}`);const N=a.createBuffer({label:"surfel input buffer",size:Bn(S*Hl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(N,0,T);const G=I.byteLength>0?I.byteLength:16,Y=a.createBuffer({label:x===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Bn(G),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return I.byteLength>0&&a.queue.writeBuffer(Y,0,I),{num_points:S,K:g,feature_mode:x,sh_bias:L,kernel_type:A,surfel_buffer:N,surfel_data:new Float32Array(T),sv_params_buffer:Y,bbox:p.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:p.centroid??[((((Z=(oe=p.bbox)==null?void 0:oe.min)==null?void 0:Z[0])??-1)+(((te=(Q=p.bbox)==null?void 0:Q.max)==null?void 0:te[0])??1))/2,((((re=($=p.bbox)==null?void 0:$.min)==null?void 0:re[1])??-1)+(((be=(H=p.bbox)==null?void 0:H.max)==null?void 0:be[1])??1))/2,((((me=(_e=p.bbox)==null?void 0:_e.min)==null?void 0:me[2])??-1)+(((he=(de=p.bbox)==null?void 0:de.max)==null?void 0:he[2])??1))/2]}}const Li="BITYMI01",Xl=0,Ql=1,Jl=2,ec=3,tc=4,nc=5;function Ii(o){const a=new Uint8Array(o),p=new TextDecoder().decode(a.subarray(0,8));if(p!==Li)throw new Error(`Not a BITYMI bundle (bad magic '${p}')`);const S=new DataView(o),g=S.getUint32(8,!0),x=12,L=20;let A=null,T=null,I=null;for(let q=0;q<g;q++){const N=x+q*L,G=S.getUint32(N+0,!0),Y=Number(S.getBigUint64(N+4,!0)),oe=Number(S.getBigUint64(N+12,!0)),Z=a.slice(Y,Y+oe).buffer;G===Xl||G===Ql||G===nc?A=Z:G===Jl?T=Z:(G===ec||G===tc)&&(I=Z)}if(A===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:A,camerasBuffer:T,atlasBuffer:I}}async function fi(o,a){var L;const p=await fetch(o);if(!p.ok)throw new Error(`fetch failed: ${p.status} ${p.statusText}`);const S=(()=>{const A=p.headers.get("content-length");return A&&parseInt(A,10)||void 0})(),g=(L=p.body)==null?void 0:L.getReader();let x;if(!g)x=await p.arrayBuffer(),a&&a(x.byteLength,S,0);else{const A=[];let T=0,I=performance.now(),q=0;for(;;){const{done:Y,value:oe}=await g.read();if(Y)break;A.push(oe),T+=oe.byteLength;const Z=performance.now();if(Z-I>=150&&a){const Q=(T-q)/((Z-I)/1e3);a(T,S,Q),I=Z,q=T}}const N=new Uint8Array(T);let G=0;for(const Y of A)N.set(Y,G),G+=Y.byteLength;x=N.buffer,a&&a(T,S,0)}return x.byteLength>=8&&new TextDecoder().decode(new Uint8Array(x,0,8))===Li?{bundle:Ii(x),rawPly:null}:{bundle:null,rawPly:x}}var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(p,S){S(a)})(sc,function(p){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class x{constructor(e){this.target=e}}class L extends x{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class A extends x{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends x{constructor(e,t){super(e),this.expanded=t}}class I extends x{constructor(e,t){super(e),this.index=t}}function q(n){return n}function N(n){return n==null}function G(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Y(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Z{static alreadyDisposed(){return new Z({type:"alreadydisposed"})}static notBindable(){return new Z({type:"notbindable"})}static propertyNotFound(e){return new Z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw Z.notBindable();if(!(e in s))throw Z.propertyNotFound(e);s[e]=t}}class te extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new x(this))}),this}}class ${constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const re="tp";function H(n){return(t,s)=>[re,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function be(n,e){return t=>e(n(t))}function _e(n){return n.rawValue}function me(n,e){n.emitter.on("change",be(_e,e)),e(n.rawValue)}function de(n,e,t){me(n.value(e),t)}function he(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function De(n,e){return t=>{he(n,e,t)}}function ee(n,e){me(n,t=>{e.textContent=t??""})}const pe=H("btn");class ye{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(pe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(pe("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class ze{constructor(e,t){this.emitter=new $,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ye(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ke{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,E)=>c===E,this.emitter=new $,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:c,sender:this}))}}class X{constructor(e){this.emitter=new $,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function K(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new X(n):new ke(n,e)}class U{constructor(e){this.emitter=new $,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:K(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new U(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ve(n,e){const s=Object.keys(e).reduce((c,E)=>{if(c===void 0)return;const D=e[E],J=D(n[E]);return J.succeeded?Object.assign(Object.assign({},c),{[E]:J.value}):void 0},{});return s}function Ae(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function $e(n){return n===null?!1:typeof n=="object"}function Le(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ue(n){return{custom:e=>Le(e)(n),boolean:Le(e=>typeof e=="boolean"?e:void 0)(n),number:Le(e=>typeof e=="number"?e:void 0)(n),string:Le(e=>typeof e=="string"?e:void 0)(n),function:Le(e=>typeof e=="function"?e:void 0)(n),constant:e=>Le(t=>t===e?e:void 0)(n),raw:Le(e=>e)(n),object:e=>Le(t=>{if($e(t))return ve(t,e)})(n),array:e=>Le(t=>{if(Array.isArray(t))return Ae(t,e)})(n)}}const ae={optional:Ue(!0),required:Ue(!1)};function xe(n,e){const t=ae.required.object(e)(n);return t.succeeded?t.value:void 0}function Ee(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class O{constructor(e){this.value_=e}static create(e){return[new O(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const b=H("");function i(n,e){return De(n,b(void 0,e))}class f extends U{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=O.create(K(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const E=e??{};return new f(U.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(c=E.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){me(this.globalDisabled_,i(e,"disabled")),de(this,"hidden",i(e,"hidden"))}bindDisabled(e){me(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){me(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const v=H(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(v(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ee({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const C="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function h(){return globalThis}function l(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const P={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function w(n,e){const t=n.createElementNS(C,"svg");return t.innerHTML=P[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function V(n){n.parentElement&&n.parentElement.removeChild(n)}function W(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function le(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=H("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ne("l")),de(t.props,"label",E=>{N(E)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),le(s),s.appendChild(ge(e,E)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(ne("v")),this.element.appendChild(c),this.valueElement=c}}class we extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Se={id:"button",type:"blade",accept(n){const e=ae,t=xe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new we(n.document,{blade:n.blade,props:U.fromObject({label:n.params.label}),valueController:new ze(n.document,{props:U.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof we)||!(n.controller.valueController instanceof ze)?null:new te(n.controller)}};class Re extends k{constructor(e){super(e),this.value=e.value}}function Ie(){return new U({positions:K([],{equals:G})})}class We extends U{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=U.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!N(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};de(this,"expanded",s),de(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function qe(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function Qe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),N(n.get("expandedHeight"))){const t=qe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class st extends g{constructor(e,t){super(e),this.rackApi_=t}}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function at(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ze{constructor(e){this.emitter=new $,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Ye extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new $,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new L(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class je extends we{constructor(e,t){super(e,t),this.binding=t.binding}}class Xe extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new $,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new A(this,t,this.controller_.binding.target.presetKey)})}}class Je extends we{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ht(n){return n instanceof xt?n.apiSet_:n instanceof st?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Z.shouldNeverHappen();return t}function It(n,e,t){if(!Q.isBindable(n))throw Z.notBindable();return new Q(n,e,t)}class xt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new $,this.apiSet_=new Ze(ht),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},E=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(E,It(e,t,c.presetKey),c),J=new Ye(D);return this.add(J,c.index)}addMonitor(e,t,s){const c=s??{},E=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(E,It(e,t),c),J=new Xe(D);return this.add(J,c.index)}addFolder(e){return tt(this,e)}addButton(e){return rt(this,e)}addSeparator(e){return at(this,e)}addTab(e){return nt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof je){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new L(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Re){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new L(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Je))throw Z.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new A(t,s.target.read(),s.target.presetKey)})}}class kt extends st{constructor(e,t){super(e,new xt(e.rackController,t)),this.emitter_=new $,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Dt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Wt{constructor(e,t){const s=H(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Et(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof je&&s.binding===e)return s}return null}function Gt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Je&&s.binding===e)return s}return null}function gn(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Re&&s.value===e)return s}return null}function Rt(n){return n instanceof He?n.rack:n instanceof Dt?n.rackController.rack:null}function sn(n){const e=Rt(n);return e?e.bcSet_:null}class rn{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new $,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ze(sn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),Y(e,"parent")?e.parent=this:(e.parent_=this,Ee({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){Y(e,"parent")?e.parent=null:(e.parent_=null,Ee({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof je)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Je)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Re)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Rt(s);if(c){const E=c.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof je)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Je)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Re)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Rt(s);if(c){const E=c.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const E=[];c===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),c===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),c.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Et(this.find(je),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Gt(this.find(Je),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=gn(this.find(Re),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class He extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Wt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new rn({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&V(e.bladeController.view.element)}}const ts=H("cnt");class wn{constructor(e,t){var s;this.className_=H((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),ts()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),de(this.foldable_,"completed",De(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),de(t.props,"title",Be=>{N(Be)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const D=e.createElement("div");D.classList.add(this.className_("t")),ee(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const J=e.createElement("div");J.classList.add(this.className_("m")),this.buttonElement.appendChild(J);const Te=t.containerElement;Te.classList.add(this.className_("c")),this.element.appendChild(Te),this.containerElement=Te}}class jt extends Dt{constructor(e,t){var s;const c=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new He(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new wn(e,{containerElement:E.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Qe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Kt={id:"folder",type:"blade",accept(n){const e=ae,t=xe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new jt(n.document,{blade:n.blade,expanded:n.params.expanded,props:U.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof jt?new kt(n.controller,n.pool):null}};class Ht extends Re{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class ns extends g{}const ct=H("spr");class xs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ct()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(ct("r")),this.element.appendChild(s)}}class ss extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new xs(e,{viewProps:t.viewProps})}))}}const ys={id:"separator",type:"blade",accept(n){const t=xe(n,{view:ae.required.constant("separator")});return t?{params:t}:null},controller(n){return new ss(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ss?new ns(n.controller):null}},on=H("tbi");class rs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element),de(t.props,"selected",E=>{E?this.element.classList.add(on(void 0,"sel")):this.element.classList.remove(on(void 0,"sel"))});const s=e.createElement("button");s.classList.add(on("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(on("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class An{constructor(e,t){this.emitter=new $,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new rs(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Dn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new An(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new He(e,{blade:Ie(),viewProps:f.create()}),this.props=t.props,de(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ln{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class In extends st{constructor(e,t){super(e,new xt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new $,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Dn(t,{itemProps:U.fromObject({selected:!1,title:e.title}),props:U.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Z.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Z.shouldNeverHappen();const s=new Ln(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new I(this,e.rawValue)})}}const Rn=-1;class zn{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=K(!0),this.selectedIndex=K(Rn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Rn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Yt=H("tab");class xn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yt(),ts()),t.viewProps.bindClassModifiers(this.element),me(t.empty,De(this.element,Yt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Yt("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Yt("i")),this.element.appendChild(c);const E=t.contentsElement;E.classList.add(Yt("c")),this.element.appendChild(E),this.contentsElement=E}}class an extends Dt{constructor(e,t){const s=new He(e,{blade:t.blade,viewProps:t.viewProps}),c=new zn;super({blade:t.blade,rackController:s,view:new xn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ze(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;V(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const R={id:"tab",type:"blade",accept(n){const e=ae,t=xe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new an(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Dn(n.document,{itemProps:U.fromObject({selected:!1,title:t.title}),props:U.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof an?new In(n.controller,n.pool):null}};function j(n,e){const t=n.accept(e.params);if(!t)return null;const s=ae.optional.boolean(e.params.disabled).value,c=ae.optional.boolean(e.params.hidden).value;return n.controller({blade:Ie(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class ie{constructor(){this.disabled=!1,this.emitter=new $}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ue{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new $,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ce{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new $,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function fe(n,e){for(;n.length<e;)n.push(void 0)}function ce(n){const e=[];return fe(e,n),K(e)}function Pe(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Oe(n,e){const t=[...Pe(n),e];return t.length>n.length?t.splice(0,t.length-n.length):fe(t,n.length),t}class ft{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new $,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Oe(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class _t{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function ot(n,e){if(n instanceof e)return n;if(n instanceof _t){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class bt{constructor(e){this.values=U.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class yt{constructor(e){this.values=U.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class lt{constructor(e){this.values=U.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return N(s)||(c=Math.max(c,s)),N(t)||(c=Math.min(c,t)),c}}class zt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const vt=H("lst");class Gn{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(vt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(vt("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(vt("m")),c.appendChild(w(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,de(this.props_,"options",E=>{W(this.selectElement),E.forEach(D=>{const J=e.createElement("option");J.textContent=D.text,this.selectElement.appendChild(J)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Lt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Gn(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const is=H("pop");class os{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element),me(t.shows,De(this.element,is(void 0,"v")))}}class wt{constructor(e,t){this.shows=K(!1),this.viewProps=t.viewProps,this.view=new os(e,{shows:this.shows,viewProps:this.viewProps})}}const Ut=H("txt");class ln{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ut()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ut("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Mt{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new ln(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);N(c)||(this.value.rawValue=c),this.view.refresh()}}function yn(n){return String(n)}function cn(n){return n==="false"?!1:!!n}function as(n){return yn(n)}class Un{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Ni={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class $i{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Ni[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const qi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Wi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=qi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Ps(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Vn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function On(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=On(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=On(n,e);return c===""?"":s+c}function Ss(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ki(n,e);return s===""?"":t+s}function ir(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=ji(n,e);return e+=s.length,s===""?"":s+On(n,e)}function Hi(n,e){const t=ir(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=On(n,e);return e+=c.length,t+s+c+Ss(n,e)}function Yi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=On(n,e);return e+=s.length,s===""?"":t+s+Ss(n,e)}function Zi(n,e){const t=ir(n,e);return e+=t.length,t===""?"":t+Ss(n,e)}const Xi=Ps([Hi,Yi,Zi]);function Qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Qi(n,e);return s===""?"":t+s}function eo(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function to(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=eo(n,e);return s===""?"":t+s}function no(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function so(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=no(n,e);return s===""?"":t+s}const ro=Ps([Ji,to,so]),io=Ps([ro,Xi]);function oo(n,e){const t=io(n,e);return e+=t.length,t===""?null:{evaluable:new Un(t),cursor:e}}function ao(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=ar(n,e);if(!s)return null;e=s.cursor,e+=Vn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function lo(n,e){var t;return(t=oo(n,e))!==null&&t!==void 0?t:ao(n,e)}function or(n,e){const t=lo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=or(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Wi(s,c.evaluable)}):null}function co(n,e,t){t+=Vn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Vn(e,t).length,{cursor:t,operator:s}):null}function uo(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let E=c.evaluable;for(;;){const D=co(e,t,s);if(!D)break;s=D.cursor;const J=n(t,s);if(!J)return null;s=J.cursor,E=new $i(D.operator,E,J.evaluable)}return E?{cursor:s,evaluable:E}:null}}const po=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>uo(n,e),or);function ar(n,e){return e+=Vn(n,e).length,po(n,e)}function ho(n){const e=ar(n,0);return!e||e.cursor+Vn(n,e.cursor).length!==n.length?null:e.evaluable}function Vt(n){var e;const t=ho(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function lr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Vt(n);if(!N(e))return e}return 0}function fo(n){return String(n)}function gt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const _o=gt(0);function ls(n){return _o(n)+"%"}function cr(n){return String(n)}function Cs(n){return n}function Fn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function E(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{E(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{E(()=>{n.setRawValue(s(n,e),D.options)}),E(()=>{e.setRawValue(t(n,e),D.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Pt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Nn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Ot(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function mo(n){return n==="ArrowUp"||n==="ArrowDown"}function ur(n){return mo(n)||n==="ArrowLeft"||n==="ArrowRight"}function Es(n,e){var t,s;const c=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class un{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new $,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Es(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Es(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Es(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,c){const E=(n-e)/(t-e);return s+E*(c-s)}function dr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function pr(n,e){return(n%e+e)%e}const Tt=H("txt");class bo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Tt(),Tt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Tt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Tt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Tt()),this.inputElement.classList.add(Tt("i"));const c=e.createElement("div");c.classList.add(Tt("k")),this.element.appendChild(c),this.knobElement=c;const E=e.createElementNS(C,"svg");E.classList.add(Tt("g")),this.knobElement.appendChild(E);const D=e.createElementNS(C,"path");D.classList.add(Tt("gb")),E.appendChild(D),this.guideBodyElem_=D;const J=e.createElementNS(C,"path");J.classList.add(Tt("gh")),E.appendChild(J),this.guideHeadElem_=J;const Te=e.createElement("div");Te.classList.add(H("tt")()),this.knobElement.appendChild(Te),this.tooltipElem_=Te,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Tt(void 0,"drg"));return}this.element.classList.add(Tt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class $n{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=K(null),this.view=new bo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new un(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),E!==void 0&&(D=Math.min(D,E)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);N(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=Pt(this.baseStep_,Nn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Pt(this.baseStep_,Nn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ks=H("sld");class vo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ks("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(ks("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class go{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new vo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new un(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Pt(this.baseStep_,Ot(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Pt(this.baseStep_,Ot(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ms=H("sldtxt");class wo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ms());const s=e.createElement("div");s.classList.add(Ms("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ms("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Ts{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new go(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new $n(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new wo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function qn(n,e){n.write(e)}function cs(n){const e=ae;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function hr(n){if(n==="inline"||n==="popup")return n}function Zt(n){const e=ae;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function fr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Bs(n){return N(n)?null:new yt(fr(n))}function xo(n){const e=n?ot(n,zt):null;return e?e.step:null}function us(n,e){const t=n&&ot(n,zt);return t?dr(t.step):Math.max(dr(e),2)}function Pn(n){const e=xo(n);return e??1}function Sn(n,e){var t;const s=n&&ot(n,zt),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const ds=H("ckb");class yo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(ds()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(ds("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(ds("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(ds("w")),s.appendChild(E);const D=w(e,"check");E.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Po{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new yo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function So(n){const e=[],t=Bs(n.options);return t&&e.push(t),new _t(e)}const Co={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{options:ae.optional.custom(cs)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cn,constraint:n=>So(n.params),writer:n=>qn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&ot(s,yt);return c?new Lt(e,{props:new U({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Po(e,{value:t,viewProps:n.viewProps})}},dn=H("col");class Eo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(dn()),t.foldable.bindExpandedClass(this.element,dn(void 0,"expanded")),de(t.foldable,"completed",De(this.element,dn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(dn("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(dn("s")),s.appendChild(c),this.swatchElement=c;const E=e.createElement("div");if(E.classList.add(dn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(dn("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function ko(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),E=ut(t/255,0,1),D=Math.max(s,c,E),J=Math.min(s,c,E),Te=D-J;let Be=0,Fe=0;const Ne=(J+D)/2;return Te!==0&&(Fe=Te/(1-Math.abs(D+J-1)),s===D?Be=(c-E)/Te:c===D?Be=2+(E-s)/Te:Be=4+(s-c)/Te,Be=Be/6+(Be<0?1:0)),[Be*360,Fe*100,Ne*100]}function Mo(n,e,t){const s=(n%360+360)%360,c=ut(e/100,0,1),E=ut(t/100,0,1),D=(1-Math.abs(2*E-1))*c,J=D*(1-Math.abs(s/60%2-1)),Te=E-D/2;let Be,Fe,Ne;return s>=0&&s<60?[Be,Fe,Ne]=[D,J,0]:s>=60&&s<120?[Be,Fe,Ne]=[J,D,0]:s>=120&&s<180?[Be,Fe,Ne]=[0,D,J]:s>=180&&s<240?[Be,Fe,Ne]=[0,J,D]:s>=240&&s<300?[Be,Fe,Ne]=[J,0,D]:[Be,Fe,Ne]=[D,0,J],[(Be+Te)*255,(Fe+Te)*255,(Ne+Te)*255]}function To(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),E=ut(t/255,0,1),D=Math.max(s,c,E),J=Math.min(s,c,E),Te=D-J;let Be;Te===0?Be=0:D===s?Be=60*(((c-E)/Te%6+6)%6):D===c?Be=60*((E-s)/Te+2):Be=60*((s-c)/Te+4);const Fe=D===0?0:Te/D,Ne=D;return[Be,Fe*100,Ne*100]}function _r(n,e,t){const s=pr(n,360),c=ut(e/100,0,1),E=ut(t/100,0,1),D=E*c,J=D*(1-Math.abs(s/60%2-1)),Te=E-D;let Be,Fe,Ne;return s>=0&&s<60?[Be,Fe,Ne]=[D,J,0]:s>=60&&s<120?[Be,Fe,Ne]=[J,D,0]:s>=120&&s<180?[Be,Fe,Ne]=[0,D,J]:s>=180&&s<240?[Be,Fe,Ne]=[0,J,D]:s>=240&&s<300?[Be,Fe,Ne]=[J,0,D]:[Be,Fe,Ne]=[D,0,J],[(Be+Te)*255,(Fe+Te)*255,(Ne+Te)*255]}function Bo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Ao(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function pn(n){return[n[0],n[1],n[2]]}function mr(n,e){return[n[0],n[1],n[2],e]}const Do={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Bo,rgb:Mo},hsv:{hsl:Ao,hsv:(n,e,t)=>[n,e,t],rgb:_r},rgb:{hsl:ko,hsv:To,rgb:(n,e,t)=>[n,e,t]}};function ps(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Lo(n,e){return n===e?e:pr(n,e)}function Io(n,e,t){var s;const c=ps(e,t);return[e==="rgb"?ut(n[0],0,c[0]):Lo(n[0],c[0]),ut(n[1],0,c[1]),ut(n[2],0,c[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function br(n,e,t,s){const c=ps(e,t),E=ps(e,s);return n.map((D,J)=>D/c[J]*E[J])}function Ro(n,e,t){const s=br(n,e.mode,e.type,"int"),c=Do[e.mode][t.mode](...s);return br(c,t.mode,"int",t.type)}function hs(n,e){return typeof n!="object"||N(n)?!1:e in n&&typeof n[e]=="number"}class Ve{static black(e="int"){return new Ve([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ve(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return hs(e,"r")&&hs(e,"g")&&hs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&hs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==c[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Io(e,t,s)}getComponents(e,t="int"){return mr(Ro(pn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Xt=H("colp");class zo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Xt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Xt("hsv"));const c=e.createElement("div");c.classList.add(Xt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const E=e.createElement("div");E.classList.add(Xt("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Xt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const J=e.createElement("div");J.classList.add(Xt("a"));const Te=e.createElement("div");Te.classList.add(Xt("ap")),Te.appendChild(this.alphaViews_.palette.element),J.appendChild(Te);const Be=e.createElement("div");Be.classList.add(Xt("at")),Be.appendChild(this.alphaViews_.text.element),J.appendChild(Be),this.element.appendChild(J)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Go(n){return n==="int"?"int":n==="float"?"float":void 0}function As(n){const e=ae;return xe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Go)}),expanded:e.optional.boolean,picker:e.optional.custom(hr)})}function hn(n){return n?.1:1}function fn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Uo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Bt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Vo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function vr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Vo[s](t)}function gr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Bt(e[1],255),Bt(e[2],255),Bt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function wr(n){return e=>{const t=gr(e);return t?new Ve(t,"rgb",n):null}}function xr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Bt(e[1],255),Bt(e[2],255),Bt(e[3],255),Bt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function yr(n){return e=>{const t=xr(e);return t?new Ve(t,"rgb",n):null}}function Pr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[vr(e[1]),Bt(e[2],100),Bt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Sr(n){return e=>{const t=Pr(e);return t?new Ve(t,"hsl",n):null}}function Cr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[vr(e[1]),Bt(e[2],100),Bt(e[3],100),Bt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Er(n){return e=>{const t=Cr(e);return t?new Ve(t,"hsl",n):null}}function kr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Oo(n){const e=kr(n);return e?new Ve(e,"rgb","int"):null}function Mr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function Fo(n){const e=Mr(n);return e?new Ve(e,"rgb","int"):null}function Tr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Br(n){return e=>{const t=Tr(e);return t?new Ve(t,"rgb",n):null}}function Ar(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Dr(n){return e=>{const t=Ar(e);return t?new Ve(t,"rgb",n):null}}const No=[{parser:kr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Mr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:gr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Pr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Cr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Tr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ar,result:{alpha:!0,mode:"rgb",notation:"object"}}];function $o(n){return No.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Ds(n,e="int"){const t=$o(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Lr={int:[Oo,Fo,wr("int"),yr("int"),Sr("int"),Er("int"),Br("int"),Dr("int")],float:[wr("float"),yr("float"),Sr("float"),Er("float"),Br("float"),Dr("float")]};function qo(n){const e=Lr[n];return t=>{if(typeof t!="string")return Ve.black(n);const s=e.reduce((c,E)=>c||E(t),null);return s??Ve.black(n)}}function Ls(n){const e=Lr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function Ir(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Rr(n,e="#"){const t=pn(n.getComponents("rgb")).map(Ir).join("");return`${e}${t}`}function Is(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Ir).join("");return`${e}${s}`}function zr(n,e){const t=gt(e==="float"?2:0);return`rgb(${pn(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Wo(n){return e=>zr(e,n)}function fs(n,e){const t=gt(2),s=gt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,D)=>(D===3?t:s)(E)).join(", ")})`}function jo(n){return e=>fs(e,n)}function Ko(n){const e=[gt(0),ls,ls];return`hsl(${pn(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Ho(n){const e=[gt(0),ls,ls,gt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Gr(n,e){const t=gt(e==="float"?2:0),s=["r","g","b"];return`{${pn(n.getComponents("rgb",e)).map((E,D)=>`${s[D]}: ${t(E)}`).join(", ")}}`}function Yo(n){return e=>Gr(e,n)}function Ur(n,e){const t=gt(2),s=gt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,J)=>{const Te=J===3?t:s;return`${c[J]}: ${Te(D)}`}).join(", ")}}`}function Zo(n){return e=>Ur(e,n)}const Xo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Rr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Is},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ko},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ho},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Wo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:jo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Yo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Zo(e)}],[])];function Rs(n){return Xo.reduce((e,t)=>e||(Uo(t.format,n)?t.stringifier:null),null)}const Wn=H("apl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Wn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Wn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Wn("c")),s.appendChild(c),this.colorElem_=c;const E=e.createElement("div");E.classList.add(Wn("m")),this.element.appendChild(E),this.markerElem_=E;const D=e.createElement("div");D.classList.add(Wn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ve([t[0],t[1],t[2],0],"rgb"),c=new Ve([t[0],t[1],t[2],255],"rgb"),E=["to right",fs(s),fs(c)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=fs(e);const D=et(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new un(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[E,D,J]=c.getComponents("hsv");this.value.setRawValue(new Ve([E,D,J,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Pt(hn(!0),Ot(e));if(t===0)return;const s=this.value.rawValue,[c,E,D,J]=s.getComponents("hsv");this.value.setRawValue(new Ve([c,E,D,J+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Pt(hn(!0),Ot(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Cn=H("coltxt");function ea(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const E=n.createElement("option");return E.textContent=c.text,E.value=c.value,s.appendChild(E),s},n.createDocumentFragment())),e}class ta{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Cn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Cn("m")),this.modeElem_=ea(e),this.modeElem_.classList.add(Cn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(Cn("mm")),c.appendChild(w(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(Cn("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),me(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){W(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Cn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function na(n){return gt(n==="float"?2:0)}function sa(n,e,t){const s=ps(n,e)[t];return new bt({min:0,max:s})}function zs(n,e,t){return new $n(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:hn(!1),parser:e.parser,props:U.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:na(e.colorType)}),value:K(0,{constraint:sa(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ra{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=K(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new ta(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[zs(e,t,0),zs(e,t,1),zs(e,t,2)];return s.forEach((c,E)=>{Fn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(D,J)=>{const Te=this.colorMode.rawValue,Be=D.rawValue.getComponents(Te,this.colorType_);return Be[E]=J.rawValue,new Ve(mr(pn(Be),Be[3]),Te,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Gs=H("hpl");class ia{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Gs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Gs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Gs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=zr(new Ve([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class oa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ia(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new un(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,E,D,J]=c.getComponents("hsv");this.value.setRawValue(new Ve([s,E,D,J],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Pt(hn(!1),Ot(e));if(t===0)return;const s=this.value.rawValue,[c,E,D,J]=s.getComponents("hsv");this.value.setRawValue(new Ve([c+t,E,D,J],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Pt(hn(!1),Ot(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Us=H("svp"),Vr=64;class aa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Us()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Vr,s.width=Vr,s.classList.add(Us("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Us("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,E=this.canvasElement.height,D=e.getImageData(0,0,c,E),J=D.data;for(let Fe=0;Fe<E;Fe++)for(let Ne=0;Ne<c;Ne++){const _n=et(Ne,0,c,0,100),Kn=et(Fe,0,E,100,0),Hn=_r(s[0],_n,Kn),_s=(Fe*c+Ne)*4;J[_s]=Hn[0],J[_s+1]=Hn[1],J[_s+2]=Hn[2],J[_s+3]=255}e.putImageData(D,0,0);const Te=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Te}%`;const Be=et(s[2],0,100,100,0);this.markerElem_.style.top=`${Be}%`}onValueChange_(){this.update_()}}class la{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new aa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new un(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),c=et(e.point.y,0,e.bounds.height,100,0),[E,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ve([E,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){ur(e.key)&&e.preventDefault();const[t,s,c,E]=this.value.rawValue.getComponents("hsv"),D=hn(!1),J=Pt(D,Ot(e)),Te=Pt(D,Nn(e));J===0&&Te===0||this.value.setRawValue(new Ve([t,s+J,c+Te,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=hn(!1),s=Pt(t,Ot(e)),c=Pt(t,Nn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ca{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new oa(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new la(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Jo(e,{value:this.value,viewProps:this.viewProps}),text:new $n(e,{parser:Vt,baseStep:.1,props:U.fromObject({draggingScale:.01,formatter:gt(2)}),value:K(0,{constraint:new bt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Fn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const E=s.rawValue.getComponents();return E[3]=c.rawValue,new Ve(E,s.rawValue.mode)}}),this.textC_=new ra(e,{colorType:t.colorType,parser:Vt,value:this.value,viewProps:this.viewProps}),this.view=new zo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Vs=H("colsw");class ua{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Vs("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Vs("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Is(e)}onValueChange_(){this.update_()}}class da{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ua(e,{value:this.value,viewProps:this.viewProps})}}class Os{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new da(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Mt(e,{parser:t.parser,props:U.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Eo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new wt(e,{viewProps:this.viewProps}):null;const c=new ca(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),Fn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function pa(n,e){return Ve.isColorObject(n)?Ve.fromObject(n,e):Ve.black(e)}function ha(n){return pn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function fa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function _a(n){return new Ve([n>>16&255,n>>8&255,n&255],"rgb")}function ma(n){return new Ve([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function ba(n){return typeof n!="number"?Ve.black():_a(n)}function va(n){return typeof n!="number"?Ve.black():ma(n)}function ga(n){const e=Rs(n);return e?(t,s)=>{qn(t,e(s))}:null}function wa(n){const e=n?fa:ha;return(t,s)=>{qn(t,e(s))}}function xa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ya(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Pa(n,e){return(t,s)=>{n?xa(t,s,e):ya(t,s,e)}}function Fs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Sa(n){return n?e=>Is(e,"0x"):e=>Rr(e,"0x")}function Ca(n){return"color"in n||"view"in n&&n.view==="color"}const Ea={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Ca(e))return null;const t=As(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Fs(n.params)?va:ba,equals:Ve.equals,writer:n=>wa(Fs(n.params))},controller:n=>{const e=Fs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Os(n.document,{colorType:"int",expanded:t??!1,formatter:Sa(e),parser:Ls("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ka(n){return Ve.isRgbaColorObject(n)}function Ma(n){return e=>pa(e,n)}function Ta(n,e){return t=>n?Ur(t,e):Gr(t,e)}const Ba={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ve.isColorObject(n))return null;const t=As(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ma(fn(n.params)),equals:Ve.equals,writer:n=>Pa(ka(n.initialValue),fn(n.params))},controller:n=>{var e;const t=Ve.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,E=(e=fn(n.params))!==null&&e!==void 0?e:"int";return new Os(n.document,{colorType:E,expanded:s??!1,formatter:Ta(t,E),parser:Ls(E),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Aa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ds(n,fn(e));if(!t||!Rs(t))return null;const c=As(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return qo((e=fn(n.params))!==null&&e!==void 0?e:"int")},equals:Ve.equals,writer:n=>{const e=Ds(n.initialValue,fn(n.params));if(!e)throw Z.shouldNeverHappen();const t=ga(e);if(!t)throw Z.notBindable();return t}},controller:n=>{const e=Ds(n.initialValue,fn(n.params));if(!e)throw Z.shouldNeverHappen();const t=Rs(e);if(!t)throw Z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Os(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Ls(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Qt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var E,D;return(D=(E=this.components[c])===null||E===void 0?void 0:E.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const Or=H("pndtxt");class Da{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Or()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Or("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function La(n,e,t){return new $n(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:K(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ns{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>La(e,t,c)),this.acs_.forEach((s,c)=>{Fn({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[c],backward:(E,D)=>{const J=t.assembly.toComponents(E.rawValue);return J[c]=D.rawValue,t.assembly.fromComponents(J)}})}),this.view=new Da(e,{textViews:this.acs_.map(s=>s.view)})}}function Fr(n,e){return"step"in n&&!N(n.step)?new zt(n.step,e):null}function Nr(n){return!N(n.max)&&!N(n.min)?new bt({max:n.max,min:n.min}):!N(n.max)||!N(n.min)?new lt({max:n.max,min:n.min}):null}function Ia(n){const e=ot(n,bt);if(e)return[e.values.get("min"),e.values.get("max")];const t=ot(n,lt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ra(n,e){const t=[],s=Fr(n,e);s&&t.push(s);const c=Nr(n);c&&t.push(c);const E=Bs(n.options);return E&&t.push(E),new _t(t)}const za={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ae,s=xe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(cs),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>lr,constraint:n=>Ra(n.params,n.initialValue),writer:n=>qn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&ot(s,yt);if(c)return new Lt(n.document,{props:new U({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:gt(us(s,t.rawValue)),D=s&&ot(s,bt);return D?new Ts(n.document,{baseStep:Pn(s),parser:Vt,sliderProps:new U({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:U.fromObject({draggingScale:Sn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new $n(n.document,{baseStep:Pn(s),parser:Vt,props:U.fromObject({draggingScale:Sn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class Jt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const $r={toComponents:n=>n.getComponents(),fromComponents:n=>new Jt(...n)},En=H("p2d");class Ga{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(En()),t.viewProps.bindClassModifiers(this.element),me(t.expanded,De(this.element,En(void 0,"expanded")));const s=e.createElement("div");s.classList.add(En("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(En("b")),c.appendChild(w(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const E=e.createElement("div");if(E.classList.add(En("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(En("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const en=H("p2dp");class Ua{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(en()),t.layout==="popup"&&this.element.classList.add(en(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(en("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(C,"svg");c.classList.add(en("g")),this.padElement.appendChild(c),this.svgElem_=c;const E=e.createElementNS(C,"line");E.classList.add(en("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const D=e.createElementNS(C,"line");D.classList.add(en("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const J=e.createElementNS(C,"line");J.classList.add(en("l")),J.setAttributeNS(null,"x1","50%"),J.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(J),this.lineElem_=J;const Te=e.createElement("div");Te.classList.add(en("m")),this.padElement.appendChild(Te),this.markerElem_=Te,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=et(e,-s,+s,0,100),E=et(t,-s,+s,0,100),D=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function qr(n,e,t){return[Pt(e[0],Ot(n)),Pt(e[1],Nn(n))*(t?1:-1)]}class Va{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ua(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new un(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=et(e.point.x,0,e.bounds.width,-s,+s),E=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Jt(c,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){ur(e.key)&&e.preventDefault();const[t,s]=qr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Jt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=qr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Oa{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new wt(e,{viewProps:this.viewProps}):null;const E=new Va(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new Ns(e,{assembly:$r,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ga(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Fn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,J)=>J.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class kn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Wr={toComponents:n=>n.getComponents(),fromComponents:n=>new kn(...n)};function Fa(n){return kn.isObject(n)?new kn(n.x,n.y,n.z):new kn}function Na(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function $a(n,e){return new Qt({assembly:Wr,components:[Ft("x"in n?n.x:void 0,e.x),Ft("y"in n?n.y:void 0,e.y),Ft("z"in n?n.z:void 0,e.z)]})}function $s(n,e){return{baseStep:Pn(e),constraint:e,textProps:U.fromObject({draggingScale:Sn(e,n),formatter:gt(us(e,n))})}}const qa={id:"input-point3d",type:"input",accept:(n,e)=>{if(!kn.isObject(n))return null;const t=ae,s=xe(e,{x:t.optional.custom(Zt),y:t.optional.custom(Zt),z:t.optional.custom(Zt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Fa,constraint:n=>$a(n.params,n.initialValue),equals:kn.equals,writer:n=>Na},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Qt))throw Z.shouldNeverHappen();return new Ns(n.document,{assembly:Wr,axes:[$s(e.rawValue.x,t.components[0]),$s(e.rawValue.y,t.components[1]),$s(e.rawValue.z,t.components[2])],parser:Vt,value:e,viewProps:n.viewProps})}};class Mn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,c=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const jr={toComponents:n=>n.getComponents(),fromComponents:n=>new Mn(...n)};function Wa(n){return Mn.isObject(n)?new Mn(n.x,n.y,n.z,n.w):new Mn}function ja(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ka(n,e){return new Qt({assembly:jr,components:[Ft("x"in n?n.x:void 0,e.x),Ft("y"in n?n.y:void 0,e.y),Ft("z"in n?n.z:void 0,e.z),Ft("w"in n?n.w:void 0,e.w)]})}function Ha(n,e){return{baseStep:Pn(e),constraint:e,textProps:U.fromObject({draggingScale:Sn(e,n),formatter:gt(us(e,n))})}}const Ya={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Mn.isObject(n))return null;const t=ae,s=xe(e,{x:t.optional.custom(Zt),y:t.optional.custom(Zt),z:t.optional.custom(Zt),w:t.optional.custom(Zt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Wa,constraint:n=>Ka(n.params,n.initialValue),equals:Mn.equals,writer:n=>ja},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Qt))throw Z.shouldNeverHappen();return new Ns(n.document,{assembly:jr,axes:e.rawValue.getComponents().map((s,c)=>Ha(s,t.components[c])),parser:Vt,value:e,viewProps:n.viewProps})}};function Za(n){const e=[],t=Bs(n.options);return t&&e.push(t),new _t(e)}const Xa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=xe(e,{options:ae.optional.custom(cs)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cr,constraint:n=>Za(n.params),writer:n=>qn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&ot(s,yt);return c?new Lt(e,{props:new U({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Mt(e,{parser:E=>E,props:U.fromObject({formatter:Cs}),value:t,viewProps:n.viewProps})}},jn={monitor:{defaultInterval:200,defaultLineCount:3}},Kr=H("mll");class Qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Kr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Kr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class qs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Hr=H("sgl");class Ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Hr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Hr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ws{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const el={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{lineCount:ae.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cn},controller:n=>{var e;return n.value.rawValue.length===1?new Ws(n.document,{formatter:as,value:n.value,viewProps:n.viewProps}):new qs(n.document,{formatter:as,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:jn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},tn=H("grl");class tl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(tn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(C,"svg");s.classList.add(tn("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(C,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const E=e.createElement("div");E.classList.add(tn("t"),H("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const _n=et(Ne,0,t,0,e.width),Kn=et(Fe,s,c,e.height,0);E.push([_n,Kn].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const D=this.tooltipElem_,J=this.value.rawValue[this.cursor_.rawValue];if(J===void 0){D.classList.remove(tn("t","a"));return}const Te=et(this.cursor_.rawValue,0,t,0,e.width),Be=et(J,s,c,e.height,0);D.style.left=`${Te}px`,D.style.top=`${Be}px`,D.textContent=`${this.formatter_(J)}`,D.classList.contains(tn("t","a"))||(D.classList.add(tn("t","a"),tn("t","in")),r(D),D.classList.remove(tn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class nl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=K(-1),this.view=new tl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new un(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function js(n){return"format"in n&&!N(n.format)?n.format:gt(2)}function sl(n){var e;return n.value.rawValue.length===1?new Ws(n.document,{formatter:js(n.params),value:n.value,viewProps:n.viewProps}):new qs(n.document,{formatter:js(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:jn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function rl(n){var e,t,s;return new nl(n.document,{formatter:js(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:jn.monitor.defaultLineCount,props:U.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Yr(n){return"view"in n&&n.view==="graph"}const il={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ae,s=xe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Yr(n)?64:1,reader:n=>lr},controller:n=>Yr(n.params)?rl(n):sl(n)},ol={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ae,s=xe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new qs(n.document,{formatter:Cs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:jn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ws(n.document,{formatter:Cs,value:t,viewProps:n.viewProps})}};function al(n,e){var t;const s=n.accept(e.target.read(),e.params);if(N(s))return null;const c=ae,E={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(E),J=n.binding.constraint?n.binding.constraint(E):void 0,Te=K(D(s.initialValue),{constraint:J,equals:n.binding.equals}),Be=new Ce({reader:D,target:e.target,value:Te,writer:n.binding.writer(E)}),Fe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,_n=n.controller({constraint:J,document:e.document,initialValue:s.initialValue,params:s.params,value:Be.value,viewProps:f.create({disabled:Fe,hidden:Ne})});return new je(e.document,{binding:Be,blade:Ie(),props:U.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:_n})}function ll(n,e){return e===0?new ie:new ue(n,e??jn.monitor.defaultInterval)}function cl(n,e){var t,s,c;const E=ae,D=n.accept(e.target.read(),e.params);if(N(D))return null;const J={target:e.target,initialValue:D.initialValue,params:D.params},Te=n.binding.reader(J),Be=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Fe=E.optional.number(e.params.interval).value,Ne=new ft({reader:Te,target:e.target,ticker:ll(e.document,Fe),value:ce(Be)}),_n=E.optional.boolean(e.params.disabled).value,Kn=E.optional.boolean(e.params.hidden).value,Hn=n.controller({document:e.document,params:D.params,value:Ne.value,viewProps:f.create({disabled:_n,hidden:Kn})});return new Je(e.document,{binding:Ne,blade:Ie(),props:U.fromObject({label:"label"in e.params?(c=E.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Hn})}class ul{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(N(c))throw new Z({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((D,J)=>D??al(J,{document:e,target:t,params:s}),null);if(E)return E;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((E,D)=>E??cl(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,E)=>c??j(E,{document:e,params:t}),null);if(!s)throw new Z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof je)return new Ye(e);if(e instanceof Je)return new Xe(e);if(e instanceof He)return new xt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Z.shouldNeverHappen();return t}}function dl(){const n=new ul;return[bl,qa,Ya,Xa,za,Aa,Ba,Ea,Co,el,ol,il,Se,Kt,ys,R].forEach(e=>{n.register(e)}),n}function pl(n){return Jt.isObject(n)?new Jt(n.x,n.y):new Jt}function hl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Ft(n,e){if(!n)return;const t=[],s=Fr(n,e);s&&t.push(s);const c=Nr(n);return c&&t.push(c),new _t(t)}function fl(n,e){return new Qt({assembly:$r,components:[Ft("x"in n?n.x:void 0,e.x),Ft("y"in n?n.y:void 0,e.y)]})}function Zr(n,e){const[t,s]=n?Ia(n):[];if(!N(t)||!N(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Pn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function _l(n,e){const t=e instanceof Qt?e.components[0]:void 0,s=e instanceof Qt?e.components[1]:void 0,c=Zr(t,n.x),E=Zr(s,n.y);return Math.max(c,E)}function Xr(n,e){return{baseStep:Pn(e),constraint:e,textProps:U.fromObject({draggingScale:Sn(e,n),formatter:gt(us(e,n))})}}function ml(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const bl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Jt.isObject(n))return null;const t=ae,s=xe(e,{expanded:t.optional.boolean,picker:t.optional.custom(hr),x:t.optional.custom(Zt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>pl,constraint:n=>fl(n.params,n.initialValue),equals:Jt.equals,writer:n=>hl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Qt))throw Z.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new Oa(e,{axes:[Xr(t.rawValue.x,s.components[0]),Xr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:ml(n.params),maxValue:_l(t.rawValue,s),parser:Vt,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class Qr extends g{constructor(e){super(e),this.emitter_=new $,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new L(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Jr extends g{constructor(e){super(e),this.emitter_=new $,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new L(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class ei extends g{constructor(e){super(e),this.emitter_=new $,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new L(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const vl=function(){return{id:"list",type:"blade",accept(n){const e=ae,t=xe(n,{options:e.required.custom(cs),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new yt(fr(n.params.options)),t=K(n.params.value,{constraint:e}),s=new Lt(n.document,{props:new U({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Ht(n.document,{blade:n.blade,props:U.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Ht)||!(n.controller.valueController instanceof Lt)?null:new Qr(n.controller)}}}();function gl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function wl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class xl extends kt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(je).map(s=>s.binding);wl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(je).map(t=>t.binding.target);return gl(e)}refresh(){this.controller_.rackController.rack.find(je).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Je).forEach(e=>{e.binding.read()})}}class yl extends jt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Pl={id:"slider",type:"blade",accept(n){const e=ae,t=xe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new bt({max:n.params.max,min:n.params.min}),E=new Ts(n.document,{baseStep:1,parser:Vt,sliderProps:new U({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:U.fromObject({draggingScale:Sn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:fo}),value:K(s,{constraint:c}),viewProps:n.viewProps});return new Ht(n.document,{blade:n.blade,props:U.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof Ht)||!(n.controller.valueController instanceof Ts)?null:new Jr(n.controller)}},Sl=function(){return{id:"text",type:"blade",accept(n){const e=ae,t=xe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Mt(n.document,{parser:n.params.parse,props:U.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:K(n.params.value),viewProps:n.viewProps});return new Ht(n.document,{blade:n.blade,props:U.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Ht)||!(n.controller.valueController instanceof Mt)?null:new ei(n.controller)}}}();function Cl(n){const e=n.createElement("div");return e.classList.add(H("dfw")()),n.body&&n.body.appendChild(e),e}function ti(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class El extends xl{constructor(e){var t,s;const c=e??{},E=(t=c.document)!==null&&t!==void 0?t:l(),D=dl(),J=new yl(E,{expanded:c.expanded,blade:Ie(),props:U.fromObject({title:c.title}),viewProps:f.create()});super(J,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:Cl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&ti(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){ti(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Pl,vl,R,Sl]})}}const kl=new S("3.1.10");p.BladeApi=g,p.ButtonApi=te,p.FolderApi=kt,p.InputBindingApi=Ye,p.ListApi=Qr,p.MonitorBindingApi=Xe,p.Pane=El,p.SeparatorApi=ns,p.SliderApi=Jr,p.TabApi=In,p.TabPageApi=Ln,p.TextApi=ei,p.TpChangeEvent=L,p.VERSION=kl,Object.defineProperty(p,"__esModule",{value:!0})})})(Zs,Zs.exports);var rc=Zs.exports;const ic=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
//   12 u32       feature_mode   (0 = SV, 1 = SB)
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
  _p1 : u32, _p2 : u32,
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

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    let store_idx = gid.x;
    if store_idx >= sort_infos.keys_size { return; }

    let solver = sh_solvers[store_idx];
    let dir_op = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));
    let dir    = dir_op.xyz;
    let v_idx  = solver.idx;

    var rgb : vec3<f32>;
    if render_settings.feature_mode == 1u {
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
    let src_gauss = gid_raw & 0x7FFFFFFFu;
    if is_texd && atlas_params.atlas_width > 0u && atlas_params.probe_mode != 0u {
        // Proberes: stage the per-surfel affine into Splat2DGS so the fragment
        // needs ZERO storage-buffer reads (the baked path's whole reason for
        // the UV precompute). The 6 probe floats fit the 6 free slots exactly:
        // 4 f32 + the layer/_pad u32 pair, reinterpreted via bitcast. Safe
        // because this atlas is single-layer, so \`layer\` is identically 0 and
        // the fragment hardcodes layer = 0 under probe_mode.
        // Values are already divided by tex_res by the exporter.
        // probe_mode 2 (WSR) = stride-7 records (6 affine floats + occlusion).
        let po = src_gauss * select(6u, 7u, atlas_params.probe_mode == 2u);
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
        if atlas_params.mip_count > 1u && w_span >= 2.0 && h_span >= 2.0 {
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
`,_i=`// 2DGS render — vertex+fragment.
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

// 32-byte RenderSettings — same layout as preprocess_2dgs.wgsl. We only read
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
    if (sp.gauss_id & 0x80000000u) == 0u {
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
    out.position = vec4<f32>(ndc, 0.0, 1.0);

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
// fs_main calls this; a discard inside culls the fragment.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

fn shade(in: SplatIn, pos: vec2<f32>) -> ShadeOut {
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
    if (in.gauss_id & 0x80000000u) != 0u {
        let dx_e = pixf - in.center_pix;
        let m_e  = in.Tu.x * dx_e.x * dx_e.x
                 + 2.0 * in.Tu.y * dx_e.x * dx_e.y
                 + in.Tu.z * dx_e.y * dx_e.y;
        if m_e < 0.0 { discard; }
        let alpha_e = min(0.99, in.color.a * exp(-0.5 * m_e));
        if alpha_e < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        let color_e = max(vec3<f32>(0.0), in.color.rgb + vec3<f32>(tex_params.res_bias));
        return ShadeOut(color_e, alpha_e, in.depth_plane.z);
    }

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch). Skips the
    // per-fragment cross-product + perspective divide. Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both linear
    // in pix → u = p.x/p.z is a rational function of pix, and:
    //   u = u₀ + (J⁻¹·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
    // Slot layout: tu=(u₀, v₀, J00), tv=(J01, J10, J11), tw=(dwdxr, dwdyr, 0).
    // Two ways to get the ray/surfel intersection \`s\`. Both are the SAME
    // algebra; they differ only in where the cancellation happens.
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
        if abs(pp.z) < 1e-12 { discard; }
        s = pp.xy / pp.z;
    } else if (render_settings.accel_flags & 2048u) != 0u {
        // accel bit 11 (?raysplat=1): original 2DGS per-fragment ray-splat from
        // the RAW transmat rows the cull stored under the same bit. Every
        // cancellation in \`pix*Tw - Tu\` happens AT this pixel, so the error
        // cannot grow with the quad.
        let kk = pixf.x * in.Tw - in.Tu;
        let ll = pixf.y * in.Tw - in.Tv;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { discard; }
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
        if denom < 0.1 { discard; }
        let inv_d  = 1.0 / denom;
        s = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    }
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

    var color = in.color.rgb;

    // Atlas residual — single HW-decoded BC7 texture fetch per fragment.
    // uv_base / uv_scale are precomputed in preprocess_2dgs.wgsl so the entire
    // atlas UV mapping reduces to two fmadd + one texture sample.
    if tex_params.atlas_enabled != 0u {
        var uv    : vec2<f32>;
        var layer : i32 = i32(in.layer);
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
            let uv_eff = select(vec2<f32>(0.0), s, rho3d <= rho2d);
            // Zero storage reads — all six coefficients arrive as flat varyings.
            // uv_scale = (A00, A11) diagonal, uv_skew = (A01, A10) off-diagonal.
            uv = vec2<f32>(
                in.uv_scale.x * uv_eff.x + in.uv_skew.x  * uv_eff.y + in.uv_base.x,
                in.uv_skew.y  * uv_eff.x + in.uv_scale.y * uv_eff.y + in.uv_base.y,
            );
            layer = 0;
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
        // ---- FETCHBENCH (2026-10-01): 0..3 EXTRA atlas fetches per fragment -------------
        // accel_flags bits 16..17 carry the extra count. Each extra fetch samples the same
        // atlas (same sampler, layer and LOD) through a different per-surfel placement:
        // the tile centre is re-hashed to another atlas location and the fragment's offset
        // inside the tile is rotated by a multiple of 90 degrees. This is the cost model of
        // a decomposed texture (unique low band + shared detail bands fetched through
        // per-surfel probes); a real build would pass each placement as a flat varying.
        // The result is blended in at a visible 12% so it is obvious the fetches are live.
        let fb_extra = (render_settings.accel_flags >> 16u) & 3u;
        let fb_d = uv - in.uv_base;
        for (var fb_k = 0u; fb_k < fb_extra; fb_k = fb_k + 1u) {
            let fk = f32(fb_k + 1u);
            let fb_base = fract(in.uv_base * (3.17 + 2.31 * fk) + vec2<f32>(0.37, 0.61) * fk);
            var fb_dk = vec2<f32>(-fb_d.y, fb_d.x);
            if fb_k == 1u { fb_dk = -fb_d; }
            if fb_k == 2u { fb_dk = vec2<f32>(fb_d.y, -fb_d.x); }
            let fb_rgba = textureSampleLevel(atlas, atlas_samp, fb_base + fb_dk, layer, lod_eff);
            color = color + (fb_rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset)) * 0.12;
        }
    }
    color = max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));

    return ShadeOut(color, b, depth);
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
`,oc=`const WG_SIZE = 256u;
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
}`,ac=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
) -> vec4<f32> {
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
    sxx = sxx + 0.3;
    syy = syy + 0.3;

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
    let t_cut = max(0.5, 2.0 * log(255.0 * max(opacity, 1.0 / 255.0)));
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
            var aabb = compute_aabb_snugbox(T_mat, cutoff);
            // SnugBox failing (det/A/E/t ≤ 0) means the conic is NOT an
            // ellipse: the cutoff disc crosses the camera plane and its
            // projection is unbounded. compute_aabb returns a garbage rect
            // for these (Vulkan port, room: 161 surfels, up to 765k px) and
            // every one of their fragments fails the denom/depth culls in
            // the fragment shader — a full-screen quad of pure discard work.
            // Drop them (bit-identical on 13/13 scenes). accel bit 9
            // (?hyp_legacy=1) restores the old fallback for an A/B.
            if aabb.z < 0.0 {
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
                if (render_settings.accel_flags & 4096u) != 0u {
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
                let aabb_e = compute_ewa_cov2d_pixel(
                    xyz,
                    vec3<f32>(sx, sy, sz),
                    rot,
                    camspace.xyz,
                    opacity,
                    &conic,
                );
                if aabb_e.z >= 0.0 {
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
        let gauss_id_packed : u32 = idx | ((1u - is_textured_flag) << 31u);
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
`,lc=`// shader implementing gpu radix sort.

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
`,cc=`// shader implementing gpu radix sort.

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
`,uc=`// ============================================================================
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
}`,Ri=32,Xs=1,Qs=2,mi=4,bi=512,vi=1024,gi=2048,wi=4096,dc=0,nn=new ArrayBuffer(Ri),pt={canvas_size:new Uint32Array(nn,0,2),accel_flags:new Uint32Array(nn,8,1),feature_mode:new Uint32Array(nn,12,1),gaussian_scaling:new Float32Array(nn,16,1),sh_bias:new Float32Array(nn,20,1),color_K:new Uint32Array(nn,24,1),walltime:new Float32Array(nn,28,1)};function pc(o){pt.canvas_size[0]=o.width>>>0,pt.canvas_size[1]=o.height>>>0,pt.accel_flags[0]=(o.accel_flags??Xs|Qs)>>>0,pt.feature_mode[0]=(o.feature_mode??dc)>>>0,pt.gaussian_scaling[0]=o.gaussian_scaling??1,pt.sh_bias[0]=o.sh_bias??.5,pt.color_K[0]=(o.color_K??0)>>>0,pt.walltime[0]=o.walltime??0}function zi(o,a){o.queue.writeBuffer(a,0,nn)}function es(o,a,p){p&&o&&a&&zi(o,a)}function Tn(o,a,p,S,g=!0){pt.canvas_size[0]=o>>>0,pt.canvas_size[1]=a>>>0,es(p??null,S??null,g)}function xi(o,a,p,S=!0){pt.gaussian_scaling[0]=o,es(a??null,p??null,S)}function yi(o,a,p,S=!0){pt.sh_bias[0]=o,es(a??null,p??null,S)}function Yn(o,a,p,S=!0){let g=pt.accel_flags[0];o.oac!==void 0&&(g=o.oac?g|Xs:g&~Xs),o.spr!==void 0&&(g=o.spr?g|Qs:g&~Qs),o.bfc!==void 0&&(g=o.bfc?g|mi:g&~mi),o.hypLegacy!==void 0&&(g=o.hypLegacy?g|bi:g&~bi),o.centred!==void 0&&(g=o.centred?g|wi:g&~wi),o.raysplat!==void 0&&(g=o.raysplat?g|gi:g&~gi),o.legacyPos!==void 0&&(g=o.legacyPos?g|vi:g&~vi),pt.accel_flags[0]=g>>>0,es(a??null,p??null,S)}function hc(o,a,p,S=!0){const g=pt.accel_flags[0]&-196609;pt.accel_flags[0]=(g|(Math.max(0,Math.min(3,o|0))&3)<<16)>>>0,es(a??null,p??null,S)}function Ks(){return pt.accel_flags[0]>>>16&3}const fc=256;function Hs(o,a){const p=[],S=[];let g=!0;for(const x of o.split(`
`)){const L=x.trim();let A;if((A=/^\/\/#if\s+(\w+)\s*$/.exec(L))!==null){const T=!!a[A[1]];S.push({parent:g,taken:T}),g=g&&T;continue}if(/^\/\/#else\s*$/.test(L)){const T=S[S.length-1];if(T===void 0)throw new Error("preprocessWGSL: #else without #if");g=T.parent&&!T.taken;continue}if(/^\/\/#endif\s*$/.test(L)){const T=S.pop();if(T===void 0)throw new Error("preprocessWGSL: #endif without #if");g=T.parent;continue}g&&p.push(x)}if(S.length!==0)throw new Error("preprocessWGSL: unterminated #if");return p.join(`
`)}const _c=Ri,mc=8,bc=96,vc=12,rr=8,Nt=1<<rr,bn=256,vs=32/rr,gc=0,Pi=vs&1;function Si(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function wc(o,a){const p=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[p]}),g=x=>o.createComputePipeline({layout:S,compute:{module:a,entryPoint:x,constants:{WG_SIZE:bn}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:p}}function xc(o,a,p){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),x=o.createPipelineLayout({bindGroupLayouts:[S]}),L=o.createPipelineLayout({bindGroupLayouts:[g]}),A=[];for(let T=0;T<vs;T++){const I={PASS_ID:T+gc,RS_RADIX_LOG2:rr,RS_RADIX_SIZE:Nt};A.push({localHistogram:o.createComputePipeline({layout:x,compute:{module:a,entryPoint:"local_histogram_pass",constants:I}}),scatterElements:o.createComputePipeline({layout:L,compute:{module:p,entryPoint:"scatter_elements",constants:I}})})}return{passes:A,localHistogramBindGroupLayout:S,scatterBindGroupLayout:g}}function yc(o){const a=o.createShaderModule({label:"local histogram",code:cc}),p=o.createShaderModule({label:"scatter",code:lc}),S=o.createShaderModule({label:"blelloch prefix",code:uc}),g=wc(o,S),x=xc(o,a,p);return{localHistogramBindGroupLayout:x.localHistogramBindGroupLayout,scatterBindGroupLayout:x.scatterBindGroupLayout,passes:x.passes,hierarchicalBlelloch:g}}function Ci(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),p=a.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),x=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(x,0,new ArrayBuffer(32));const L={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:p,sampler:S,rectsBuffer:g,texParamsBuffer:x,meta:L}}class Pc{constructor(a,p,S,g,x,L=null,A={}){F(this,"device");F(this,"pc");F(this,"presentationFormat");F(this,"camera_buffer");F(this,"render_settings_buffer");F(this,"draw_indirect_buffer");F(this,"splat_2d_buffer");F(this,"querySet");F(this,"resolveBuffer");F(this,"resultBuffer");F(this,"queriesPerFrame",mc);F(this,"queryCapacityFrames",200);F(this,"sort_prefixBindGroup");F(this,"sort_pipelines");F(this,"sort_localHistogramBindGroups");F(this,"sort_scatterBindGroups");F(this,"lastFrame",0);F(this,"frameCount",0);F(this,"preprocessPipeline");F(this,"cullPipeline");F(this,"renderPipeline");F(this,"indirectPipeline");F(this,"renderShaderModule");F(this,"betaKernel",1);F(this,"fetchById");F(this,"octBound");F(this,"acc16");F(this,"accTexture",null);F(this,"accView",null);F(this,"accW",0);F(this,"accH",0);F(this,"legacyRenderPipeline",null);F(this,"varyingsPipeline",null);F(this,"legacyRenderer",!1);F(this,"accResolvePipeline",null);F(this,"accResolveBgl",null);F(this,"accResolveBindGroup",null);F(this,"renderSettingsBgl");F(this,"preprocessBgl2");F(this,"renderSplatsBgl");F(this,"atlasBgl");F(this,"sort_info_buffer");F(this,"sort_ping_pong");F(this,"crsBg");F(this,"gsBg");F(this,"cullBg2");F(this,"preprocessBg1");F(this,"renderSplatsBindGroup");F(this,"renderSettingsBindGroup");F(this,"atlasBindGroup");F(this,"indirectBindGroup");F(this,"sh_solvers_buffer");F(this,"bfcParamsBuffer");F(this,"bfcBindGroupLayout");F(this,"bfcBindGroup");F(this,"staticSortKeys",null);F(this,"wideFrustum",!1);F(this,"staticKeysBuffer",null);F(this,"bgColor",[0,0,0,0]);F(this,"showPerfDialogNext",!1);F(this,"requestReorderNextFrame",!1);F(this,"reorderInFlight",!1);F(this,"downloadOnceNextRead",!1);F(this,"downloadOnceFileName","fps_metrics");F(this,"allFrameTimes",[]);F(this,"lastStageBreakdownMs",null);F(this,"timeQueryEnabled");F(this,"atlas");F(this,"atlasParamsBuffer");F(this,"_atlasEnabled",!0);F(this,"mipLodBias",1);F(this,"_mipMode",1);this.fetchById=A.fetchById??!0,this.staticSortKeys=A.staticSortKeys??null,this.wideFrustum=A.wideFrustum??!1,this.octBound=A.octBound??!1,this.acc16=A.acc16??!1,Ct(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const T=x.includes("timestamp-query");this.timeQueryEnabled=T,T&&Ct("⏰ using timestamp-query"),this.pc=a,this.device=p,this.presentationFormat=S,this.camera_buffer=g,this.atlas=L??Ci(p),this.atlasParamsBuffer=p.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),p.addEventListener("uncapturederror",Le=>{console.error("A WebGPU error was not captured:",Le.error)}),this._setupTimestampQueries(),this._setupBuffers();const I=(Math.floor((this.pc.num_points+bn-1)/bn)+1)*bn,q=Math.ceil(I/bn);console.log(`keys count adjusted: ${I}`),console.log(`key size: ${this.pc.num_points}`);const N=p.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=yc(p);const G=[Si(I,p),Si(I,p)],Y=p.createBuffer({label:"workgroup histograms",size:q*Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=p.createBuffer({label:"workgroup prefixes",size:q*Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=p.createBuffer({label:"digit base",size:Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(q/bn),te=Math.ceil(Q/bn),$=p.createBuffer({label:"prefix l0 sums",size:Q*Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=p.createBuffer({label:"prefix l0 offsets",size:Q*Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=p.createBuffer({label:"prefix l1 sums",size:te*Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),be=p.createBuffer({label:"prefix l1 offsets",size:te*Nt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=p.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:$}},{binding:4,resource:{buffer:re}},{binding:5,resource:{buffer:H}},{binding:6,resource:{buffer:be}},{binding:7,resource:{buffer:Z}}]}),this.sort_localHistogramBindGroups=[p.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:G[0].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]}),p.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:G[1].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]})],this.sort_scatterBindGroups=[p.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:G[0].sort_depths_buffer}},{binding:3,resource:{buffer:G[1].sort_depths_buffer}},{binding:4,resource:{buffer:G[0].sort_indices_buffer}},{binding:5,resource:{buffer:G[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),p.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:G[1].sort_depths_buffer}},{binding:3,resource:{buffer:G[0].sort_depths_buffer}},{binding:4,resource:{buffer:G[1].sort_indices_buffer}},{binding:5,resource:{buffer:G[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=N,this.sort_ping_pong=G;const _e=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),me=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),he=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:_e,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:me,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=he,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:he,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const De=this.device.createShaderModule({code:oc});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:De,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const ee=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],pe=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Bn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),ee.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),pe.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:ee}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:pe});const ye=this.device.createShaderModule({code:Hs(ac,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[_e,me,de,this.bfcBindGroupLayout]}),compute:{module:ye,entryPoint:"surfel_cull"}});const ze=this.device.createShaderModule({code:ic});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[_e,he]}),compute:{module:ze,entryPoint:"preprocess"}});const ke=this.device.createShaderModule({label:"render_2dgs",code:Hs(_i,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ke.getCompilationInfo().then(Le=>{Le.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Le.messages.forEach(Ue=>{(Ue.type==="error"?console.error:Ue.type==="warning"?console.warn:console.log)(`${Ue.type} (line ${Ue.lineNum}:${Ue.linePos}): ${Ue.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const X=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),K=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,U=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:K,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ve=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Ae=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[X,U,ve]}),vertex:{module:ke,entryPoint:"vs_main"},fragment:{module:ke,entryPoint:"fs_main",constants:{BETA_KERNEL:Ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const $e=(Le,Ue,ae)=>{const xe=this.device.createShaderModule({label:`render_2dgs (${Le})`,code:Hs(_i,{FETCH_BY_ID:Ue,OCT:ae})});return this.device.createRenderPipeline({label:`render_2dgs_${Le}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[X,U,ve]}),vertex:{module:xe,entryPoint:"vs_main"},fragment:{module:xe,entryPoint:"fs_main",constants:{BETA_KERNEL:Ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=$e("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?$e("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Le=>{Le?console.error("[render_2dgs] pipeline create validation error:",Le.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:X,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:U,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Pi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ve,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ke,this.betaKernel=Ae,this.renderSettingsBgl=X,this.renderSplatsBgl=U,this.atlasBgl=ve}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,p){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,p[0],p[1],p[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var g;const a=new ArrayBuffer(32),p=new Uint32Array(a),S=new Float32Array(a);p[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,p[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,p[3]=this.atlas.meta.probe_mode|0||0,p[4]=this._mipMode!==0?Math.max(1,((g=this.atlas.meta.mip_bytes)==null?void 0:g.length)??1):1,S[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,p){var S;if(this.accResolvePipeline===null){const g=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,x=this.device.createShaderModule({label:"acc16_resolve",code:g});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:x,entryPoint:"vs_main"},fragment:{module:x,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===p||((S=this.accTexture)==null||S.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,p),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=p)}setAtlas(a){this.atlas=a??Ci(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&ms(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,ms(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,Ct(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,Yn({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const p=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([p])),Ct(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),ms(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const p=Math.max(0,Math.min(a,this.pc.num_points)),S=p*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),x=this.device.createCommandEncoder();x.copyBufferToBuffer(this.sort_ping_pong[Pi].sort_indices_buffer,0,g,0,S),this.device.queue.submit([x.finish()]),await g.mapAsync(GPUMapMode.READ);const L=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",p,"):",Array.from(L)),g.unmap()}frame(a,p,S=!0){const x=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,L=S&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const A={label:"cull"};L&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:x+0,endOfPassWriteIndex:x+1});const T=a.beginComputePass(A);T.setPipeline(this.cullPipeline),T.setBindGroup(0,this.crsBg),T.setBindGroup(1,this.gsBg),T.setBindGroup(2,this.cullBg2),T.setBindGroup(3,this.bfcBindGroup);const I=Math.ceil(this.pc.num_points/fc);T.dispatchWorkgroups(I,1,1),T.end()}{const A=a.beginComputePass({label:"calculate indirect dispatch"});A.setPipeline(this.indirectPipeline),A.setBindGroup(0,this.indirectBindGroup),A.dispatchWorkgroups(1,1,1),A.end()}{const A={label:"preprocess"};L&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:x+2,endOfPassWriteIndex:x+3});const T=a.beginComputePass(A);T.setPipeline(this.preprocessPipeline),T.setBindGroup(0,this.crsBg),T.setBindGroup(1,this.preprocessBg1),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),T.end()}for(let A=0;A<vs;A++){const T=A&1,I=this.sort_pipelines.passes[A],q=this.sort_localHistogramBindGroups[T],N=this.sort_scatterBindGroups[T];{const G={label:`upsweep_round${A}`};L&&A==0&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:x+4});const Y=a.beginComputePass(G);Y.setPipeline(I.localHistogram),Y.setBindGroup(0,q),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}{const G=a.beginComputePass({label:`prefix_round${A} - l0TileScan`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=a.beginComputePass({label:`prefix_round${A} - l1TileScanOnL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=a.beginComputePass({label:`prefix_round${A} - l1ScanSums`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,Nt,1),G.end()}{const G=a.beginComputePass({label:`prefix_round${A} - addL1ToL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=a.beginComputePass({label:`prefix_round${A} - addL0ToElems`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=a.beginComputePass({label:`prefix_round${A} - computeDigitBase`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,1,1),G.end()}{const G={label:`scatter_round${A}`};L&&A==vs-1&&(G.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:x+5});const Y=a.beginComputePass(G);Y.setPipeline(I.scatterElements),Y.setBindGroup(0,N),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}}{let A=p;this.acc16&&(this.ensureAccResources(pt.canvas_size[0],pt.canvas_size[1]),A=this.accView);const T={label:"render",colorAttachments:[{view:A,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};L&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:x+6,...this.acc16?{}:{endOfPassWriteIndex:x+7}});const I=a.beginRenderPass(T);if(I.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),I.setBindGroup(0,this.renderSettingsBindGroup),I.setBindGroup(1,this.renderSplatsBindGroup),I.setBindGroup(2,this.atlasBindGroup),I.drawIndirect(this.draw_indirect_buffer,0),I.end(),this.acc16){const q={label:"acc16_resolve",colorAttachments:[{view:p,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};L&&(q.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:x+7});const N=a.beginRenderPass(q);N.setPipeline(this.accResolvePipeline),N.setBindGroup(0,this.accResolveBindGroup),N.draw(3),N.end()}}this.frameCount++}async readPerfMetrics(a){const p=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const x=new BigInt64Array(this.resultBuffer.getMappedRange()),L=Math.min(this.frameCount,this.queryCapacityFrames),A=(this.lastFrame+this.frameCount-L)%this.queryCapacityFrames,T=Array.from({length:g.length},()=>[]);let I=0;for(let te=0;te<L;te++){const $=(A+te)%this.queryCapacityFrames,re=$*this.queriesPerFrame;let H=!0;for(let be=0;be<g.length;be++){const[_e,me,de]=g[be];if(x[re+de]===0n||x[re+me]===0n||x[re+me]<x[re+de]){H=!1;break}}if(!H){!p&&$%60===0&&console.debug("[timestamp] frame slot",$,"contains unwritten (0) timestamps, skipped in stats");continue}I++;for(let be=0;be<g.length;be++){const[_e,me,de]=g[be],he=Number(x[re+de]),De=Number(x[re+me]);T[be].push((De-he)/1e6)}}if(I===0){this.resultBuffer.unmap(),p||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const q=[];let N=0,G=0,Y=0;for(let te=0;te<g.length;te++){const $=g[te][0],re=T[te];let H=0;if($==="Total"){const be=this.allFrameTimes;H=be.reduce((de,he)=>de+he,0)/be.length;const _e=[...be].sort((de,he)=>de-he);N=_e[Math.floor(_e.length*.99)]||0;const me=be.reduce((de,he)=>de+Math.pow(he-H,2),0)/be.length;G=Math.sqrt(me),Y=H}else H=re.reduce((be,_e)=>be+_e,0)/re.length;q.push([$,H])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(q);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+q.map(([te,$])=>`${te}: ${$.toFixed(3)}ms`).join(`
`)+`
Total P99: ${N.toFixed(3)}ms
Total STD: ${G.toFixed(3)}ms
Total AVG: ${Y.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(p||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const te=`Stage,ms
`,$=q.map(([be,_e])=>`${be},${_e.toFixed(3)}`).join(`
`),re="data:text/csv;charset=utf-8,"+encodeURIComponent(te+$),H=document.createElement("a");H.href=re,H.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(H),H.click(),H.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:_c,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),p=a?a.width:1,S=a?a.height:1;pc({width:p,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),zi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Bn(this.pc.num_points*bc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Bn(this.pc.num_points*vc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const p=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=p.length>0?p:this.downloadOnceFileName}else{const p=new Date,S=`${p.getFullYear()}${String(p.getMonth()+1).padStart(2,"0")}${String(p.getDate()).padStart(2,"0")}_${String(p.getHours()).padStart(2,"0")}${String(p.getMinutes()).padStart(2,"0")}${String(p.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function Sc(o,a){return 2*Math.atan(a/(2*o))}function Cc(o,a,p,S){const g=Math.tan(S/2),x=Math.tan(p/2),L=g*o,A=-L,T=x*o,I=-T,q=mt.create();return q[0]=2*o/(T-I),q[5]=-2*o/(L-A),q[2]=(T+I)/(T-I),q[6]=(L+A)/(L-A),q[14]=1,q[10]=a/(a-o),q[11]=-(a*o)/(a-o),mt.transpose(q,q),q}async function Ec(o){Ct(`loading scene camera file... : ${o}`);const p=await(await fetch(o)).json();return Ct(`loaded cameras count: ${p.length}`),p.map(S=>{const g=z.clone(S.position),x=At.create(...S.rotation.flat()),L=x[0],A=x[4],T=x[8],I=x[1],q=x[5],N=x[9],G=x[2],Y=x[6],oe=x[10];L*(q*oe-N*Y)-A*(I*oe-N*G)+T*(I*Y-q*G)<0&&(x[1]=-x[1],x[5]=-x[5],x[9]=-x[9]);const Q=mt.fromMat3(x);return{position:g,rotation:Q,img_name:S.img_name,id:S.id}})}const kc=4*2,Mc=4*16,Gi=4*Mc+2*kc;function Tc(o){return o.createBuffer({label:"camera uniform",size:Gi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const mn=new Float32Array(Gi/Float32Array.BYTES_PER_ELEMENT),gs=class gs{constructor(a,p){F(this,"_renderSize",null);F(this,"uniform_buffer");F(this,"position",z.create());F(this,"rotation",mt.create());F(this,"zfar",100);F(this,"fovY",45/180*Math.PI);F(this,"fovX");F(this,"focalRatioX",1);F(this,"focal",li.create());F(this,"viewport",li.create());F(this,"view_matrix",mt.identity());F(this,"view_inv_matrix",mt.identity());F(this,"proj_matrix",mt.identity());F(this,"proj_inv_matrix",mt.identity());F(this,"_negPos",z.create());F(this,"look",z.create(0,0,1));F(this,"up",z.create(0,1,0));F(this,"right",z.create(1,0,0));this.canvas=a,this.device=p,this.uniform_buffer=Tc(p),this.on_update_canvas()}setRenderSize(a,p){this._renderSize=[a,p],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,p=this._renderSize?this._renderSize[1]:this.canvas.height,S=.5*p/Math.tan(this.fovY*.5);this.focal[0]=S*this.focalRatioX,this.focal[1]=S,this.fovX=Sc(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=p,this.proj_matrix=Cc(.01,this.zfar,this.fovX,this.fovY),mt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],mt.copy(this.rotation,this.view_matrix),mt.translate(this.view_matrix,this._negPos,this.view_matrix),mt.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(gs.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let a=0;mn.set(this.view_matrix,a),a+=16,mn.set(this.view_inv_matrix,a),a+=16,mn.set(this.proj_matrix,a),a+=16,mn.set(this.proj_inv_matrix,a),a+=16,mn.set(this.viewport,a),a+=2,mn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,mn)}set_preset(a){z.copy(a.position,this.position),mt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};F(gs,"Z_AXIS",z.create(0,0,1));let Js=gs;const Bc=z.create(1,0,0),Ac=z.create(0,1,0),Dc=z.create(0,0,1);function Lc(o,a){const p=o[0],S=o[4],g=o[8],x=o[1],L=o[5],A=o[9],T=o[2],I=o[6],q=o[10],N=p+L+q;let G,Y,oe,Z;if(N>0){const Q=.5/Math.sqrt(N+1);G=.25/Q,Y=(I-A)*Q,oe=(g-T)*Q,Z=(x-S)*Q}else if(p>L&&p>q){const Q=2*Math.sqrt(1+p-L-q);G=(I-A)/Q,Y=.25*Q,oe=(S+x)/Q,Z=(g+T)/Q}else if(L>q){const Q=2*Math.sqrt(1+L-p-q);G=(g-T)/Q,Y=(S+x)/Q,oe=.25*Q,Z=(A+I)/Q}else{const Q=2*Math.sqrt(1+q-p-L);G=(x-S)/Q,Y=(g+T)/Q,oe=(A+I)/Q,Z=.25*Q}return a[0]=Y,a[1]=oe,a[2]=Z,a[3]=G,a}class Ic{constructor(a){F(this,"element");F(this,"enabled",!0);F(this,"center",z.create(0,0,0));F(this,"up",z.create(0,1,0));F(this,"rotation",[0,0]);F(this,"shift",[0,0]);F(this,"scroll",0);F(this,"speed",.1);F(this,"sensitivity",.08);F(this,"leftPressed",!1);F(this,"rightPressed",!1);F(this,"leftDragPans",!1);F(this,"lastX",0);F(this,"lastY",0);F(this,"touches",new Map);F(this,"lastTouchCenter",null);F(this,"lastPinchDistance",null);F(this,"lastTwoFingerAngle",null);F(this,"lastTouchCount",0);F(this,"roll",0);F(this,"_dir",z.create());F(this,"_right",z.create());F(this,"_upCam",z.create());F(this,"_scratch",z.create());F(this,"_qY",dt.create());F(this,"_qX",dt.create());F(this,"_qRot",dt.create());F(this,"_qZ",dt.create());F(this,"_qLocal",dt.create());F(this,"_qWorldToCam",dt.create());F(this,"_scratchMat3",At.create());F(this,"bboxMin",null);F(this,"bboxMax",null);F(this,"anchor",z.create(0,0,0));F(this,"downCallback",a=>{var p,S,g,x;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(S=(p=a.target)==null?void 0:p.setPointerCapture)==null||S.call(p,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(x=(g=a.target)==null?void 0:g.setPointerCapture)==null||x.call(g,a.pointerId),a.preventDefault())}});F(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const p=a.pageX-this.lastX,S=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=p,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=p,this.shift[0]+=S)});F(this,"upCallback",a=>{var p,S,g,x;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(S=(p=a.target)==null?void 0:p.releasePointerCapture)==null||S.call(p,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(x=(g=a.target)==null?void 0:g.releasePointerCapture)==null||x.call(g,a.pointerId),a.preventDefault()});F(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let p=a.deltaY;a.deltaMode===1?p*=16:a.deltaMode===2&&(p*=100),this.scroll+=p*.01});this.camera=a,this.registerElement(a.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const a=this.bboxMax[0]-this.bboxMin[0],p=this.bboxMax[1]-this.bboxMin[1],S=this.bboxMax[2]-this.bboxMin[2],g=.5*Math.sqrt(a*a+p*p+S*S);return g>1e-6?g:null}addRoll(a){this.roll+=a}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",p=>p.preventDefault())}setCenter(a){z.copy(a,this.center),z.copy(a,this.anchor)}setOrbitPivot(a){z.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const p=this.camera.rotation;z.set(p[2],p[6],p[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,a,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(z.subtract(this.center,a.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const p=a.rotation;p[0]=this._right[0],p[1]=this._upCam[0],p[2]=this._scratch[0],p[3]=0,p[4]=this._right[1],p[5]=this._upCam[1],p[6]=this._scratch[1],p[7]=0,p[8]=this._right[2],p[9]=this._upCam[2],p[10]=this._scratch[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,a.update_buffer()}setBbox(a,p){this.bboxMin=z.create(a[0],a[1],a[2]),this.bboxMax=z.create(p[0],p[1],p[2]);const S=(a[0]+p[0])*.5,g=(a[1]+p[1])*.5,x=(a[2]+p[2])*.5;z.set(S,g,x,this.center),z.set(S,g,x,this.anchor)}resetToCamera(){const a=this.camera.rotation;z.set(a[2],a[6],a[10],this._dir),z.normalize(this._dir,this._dir);let p=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,g=1/0,x=!1;for(let L=0;L<3;L++){const A=this._dir[L],T=this.bboxMin[L]-this.camera.position[L],I=this.bboxMax[L]-this.camera.position[L];if(Math.abs(A)>1e-8){const q=T/A,N=I/A;S=Math.max(S,Math.min(q,N)),g=Math.min(g,Math.max(q,N))}else if(T>0||I<0){x=!0;break}}!x&&S<=g&&g>0&&(p=(Math.max(S,0)+g)*.5)}if(p===null||!isFinite(p)||p<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const S=z.dot(this._scratch,this._dir);p=S>.001?S:z.length(this._scratch)}p=Math.max(.1,p),z.scale(this._dir,p,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const p=this.touches.values().next().value;if(this.lastTouchCenter){const S=p.x-this.lastTouchCenter[0],g=p.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[p.x,p.y]}else if(a===2){const p=Array.from(this.touches.values()),S=(p[0].x+p[1].x)*.5,g=(p[0].y+p[1].y)*.5,x=p[1].x-p[0].x,L=p[1].y-p[0].y,A=Math.hypot(x,L),T=Math.atan2(L,x);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const I=S-this.lastTouchCenter[0],q=g-this.lastTouchCenter[1],N=Math.hypot(I,q),G=Math.abs(A-this.lastPinchDistance);let Y=T-this.lastTwoFingerAngle;Y>Math.PI&&(Y-=2*Math.PI),Y<-Math.PI&&(Y+=2*Math.PI),N>.5&&(this.shift[1]-=I,this.shift[0]+=q),G>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(A/this.lastPinchDistance)*10),Math.abs(Y)>.0087&&(this.roll+=Y)}this.lastTouchCenter=[S,g],this.lastPinchDistance=A,this.lastTwoFingerAngle=T}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const p=this.camera;{const Q=p.rotation;this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let S=0,g=!1;Math.abs(this.roll)>1e-4&&(S=this.roll,this.roll=0,g=!0),z.subtract(p.position,this.center,this._dir);let x=z.length(this._dir);x<1e-6&&(x=1e-6);const L=Math.exp(Math.log(x)+this.scroll*a*10*this.speed);z.scale(this._dir,L/x,this._dir),x=L;const A=p.rotation;this._right[0]=A[0],this._right[1]=A[4],this._right[2]=A[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const T=z.create(A[1],A[5],A[9]);z.normalize(T,T),z.length(T)<1e-6&&z.set(0,1,0,T);const I=a*this.speed*.1*x,q=this.shift[1]*I,N=-this.shift[0]*I;z.scale(this._right,q,this._scratch),z.add(this.center,this._scratch,this.center),z.add(p.position,this._scratch,p.position),z.scale(T,N,this._scratch),z.add(this.center,this._scratch,this.center),z.add(p.position,this._scratch,p.position);const G=this.rotation[0]*a*this.sensitivity,Y=this.rotation[1]*a*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Y)>1e-5||g){const Q=p.rotation;Lc(Q,this._qWorldToCam),dt.fromAxisAngle(Bc,-Y,this._qX),dt.fromAxisAngle(Ac,-G,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),g&&(dt.fromAxisAngle(Dc,1*S,this._qZ),dt.multiply(this._qZ,this._qLocal,this._qLocal)),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),At.fromQuat(this._qWorldToCam,this._scratchMat3),mt.fromMat3(this._scratchMat3,p.rotation);const te=p.rotation,$=te[2],re=te[6],H=te[10];p.position[0]=this.center[0]-$*x,p.position[1]=this.center[1]-re*x,p.position[2]=this.center[2]-H*x,this.up[0]=te[1],this.up[1]=te[5],this.up[2]=te[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,p.position);p.update_buffer();const Z=Math.pow(.8,a*60);this.rotation[0]*=Z,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=Z,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=Z,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=Z,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=Z,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Ui(o){const a=z.create();for(const p of o)z.add(a,p,a);return z.scale(a,1/Math.max(o.length,1),a)}function Vi(o,a){const p=At.create();At.inverse(o,p);const S=z.create();return S[0]=p[0]*a[0]+p[4]*a[1]+p[8]*a[2],S[1]=p[1]*a[0]+p[5]*a[1]+p[9]*a[2],S[2]=p[2]*a[0]+p[6]*a[1]+p[10]*a[2],S}function Rc(o){const a=o.slice(),p=[1,0,0,0,1,0,0,0,1],S=(T,I)=>a[T*3+I],g=(T,I,q)=>{a[T*3+I]=q},x=(T,I)=>p[T*3+I],L=(T,I,q)=>{p[T*3+I]=q};for(let T=0;T<30;T++){let I=0,q=1,N=Math.abs(S(0,1));if(Math.abs(S(0,2))>N&&(I=0,q=2,N=Math.abs(S(0,2))),Math.abs(S(1,2))>N&&(I=1,q=2,N=Math.abs(S(1,2))),N<1e-12)break;const G=S(I,I),Y=S(q,q),oe=S(I,q);let Z;Math.abs(G-Y)<1e-30?Z=Math.PI/4*Math.sign(oe):Z=.5*Math.atan2(2*oe,G-Y);const Q=Math.cos(Z),te=Math.sin(Z);for(let $=0;$<3;$++){const re=S($,I),H=S($,q);g($,I,Q*re+te*H),g($,q,-te*re+Q*H)}for(let $=0;$<3;$++){const re=S(I,$),H=S(q,$);g(I,$,Q*re+te*H),g(q,$,-te*re+Q*H)}for(let $=0;$<3;$++){const re=x($,I),H=x($,q);L($,I,Q*re+te*H),L($,q,-te*re+Q*H)}}const A=[];for(let T=0;T<3;T++)A.push({val:S(T,T),vec:z.create(x(0,T),x(1,T),x(2,T))});return A.sort((T,I)=>I.val-T.val),{vals:[A[0].val,A[1].val,A[2].val],vecs:[A[0].vec,A[1].vec,A[2].vec]}}function zc(o,a){const p=Ui(o);let S=0,g=0,x=0,L=0,A=0,T=0;for(const oe of o){const Z=oe[0]-p[0],Q=oe[1]-p[1],te=oe[2]-p[2];S+=Z*Z,g+=Z*Q,x+=Z*te,L+=Q*Q,A+=Q*te,T+=te*te}const I=[S,g,x,g,L,A,x,A,T],{vecs:q}=Rc(I);let N=q[0],G=q[1],Y=q[2];return z.dot(Y,a)<0&&(z.scale(Y,-1,Y),z.scale(G,-1,G)),{centroid:p,normal:Y,u:N,v:G}}function Gc(o){let a=0,p=0,S=0,g=0,x=0,L=0,A=0,T=0,I=0;for(const[Q,te]of o){const $=-2*Q,re=-2*te,H=1,be=-(Q*Q+te*te);a+=$*$,p+=$*re,S+=$*H,g+=re*re,x+=re*H,L+=H*H,A+=$*be,T+=re*be,I+=H*be}const q=At.create(a,p,S,p,g,x,S,x,L),N=Vi(q,z.create(A,T,I)),G=N[0],Y=N[1],oe=N[2],Z=G*G+Y*Y-oe;return{center:[G,Y],radius:Math.sqrt(Math.max(Z,1e-12))}}function Uc(o,a){let p=0,S=0,g=0,x=0,L=0,A=0,T=0,I=0,q=0;for(let G=0;G<o.length;G++){const Y=o[G],oe=z.normalize(a[G],z.create()),Z=1-oe[0]*oe[0],Q=-oe[0]*oe[1],te=-oe[0]*oe[2],$=1-oe[1]*oe[1],re=-oe[1]*oe[2],H=1-oe[2]*oe[2];p+=Z,S+=Q,g+=te,x+=$,L+=re,A+=H,T+=Z*Y[0]+Q*Y[1]+te*Y[2],I+=Q*Y[0]+$*Y[1]+re*Y[2],q+=te*Y[0]+re*Y[1]+H*Y[2]}const N=At.create(p,S,g,S,x,L,g,L,A);return Vi(N,z.create(T,I,q))}function Oi(o,a={}){if(o.length===0)return null;const p=a.tiltDownDeg??8,S=a.radiusScale??1,g=a.alignFirst??!0,x=(a.direction??"ccw")==="ccw"?1:-1,L=o.map(de=>z.clone(de.position)),A=o.map(de=>{const he=de.rotation;return z.create(he[8],he[9],he[10])}),T=o.map(de=>{const he=de.rotation;return z.create(he[4],he[5],he[6])}),I=Ui(T),q=z.normalize(z.scale(I,-1,z.create())),{centroid:N,normal:G,u:Y,v:oe}=zc(L,q),Z=L.map(de=>{const he=z.sub(de,N,z.create());return[z.dot(he,Y),z.dot(he,oe)]}),{center:Q,radius:te}=Gc(Z),$=te*S,re=z.add(N,z.add(z.scale(Y,Q[0],z.create()),z.scale(oe,Q[1],z.create()),z.create()),z.create()),H=Uc(L,A),be=$*Math.tan(p*Math.PI/180),_e=z.sub(H,z.scale(G,be,z.create()),z.create());let me=0;if(g){const de=z.sub(L[0],re,z.create());me=Math.atan2(z.dot(de,oe),z.dot(de,Y))/(2*Math.PI)%1,me<0&&(me+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${$.toFixed(2)}, tilt=${p}°, normal=[${G[0].toFixed(2)}, ${G[1].toFixed(2)}, ${G[2].toFixed(2)}], startPhase=${me.toFixed(3)}`),{center:re,radius:$,normal:G,u:Y,v:oe,lookAt:_e,startPhase:me,direction:x}}function Fi(o,a){const p=(o.startPhase+a*o.direction)*2*Math.PI,S=Math.cos(p),g=Math.sin(p),x=z.add(o.center,z.add(z.scale(o.u,o.radius*S,z.create()),z.scale(o.v,o.radius*g,z.create()),z.create()),z.create()),L=z.normalize(z.sub(o.lookAt,x,z.create())),A=z.cross(L,o.normal,z.create());z.length(A)<1e-6&&z.copy(o.u,A),z.normalize(A,A);const T=z.cross(L,A,z.create());z.normalize(T,T);const I=mt.create();return I[0]=A[0],I[1]=T[0],I[2]=L[0],I[3]=0,I[4]=A[1],I[5]=T[1],I[6]=L[1],I[7]=0,I[8]=A[2],I[9]=T[2],I[10]=L[2],I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,{position:x,rotation:I,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Vc(o,a={}){const p=Oi(o,a);if(!p)return[];const S=a.numViews??120;return Array.from({length:S},(g,x)=>({...Fi(p,x/S),img_name:`circle_${x.toString().padStart(4,"0")}`,id:x}))}function $t(o){const a=(o&32768)>>15,p=(o&31744)>>10,S=o&1023;return p===0?(a?-1:1)*Math.pow(2,-14)*(S/1024):p===31?S?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,p-15)*(1+S/1024)}function er(o,a,p,S,g,x,L,A,T,I=.5){const q=T?T.length:L.length/8,N=[],G=[];for(let Z=0;Z<q;Z++){const te=(T?T[Z]:Z)*8,$=L[te]-o,re=L[te+1]-a,H=L[te+2]-p,be=$*S+re*g+H*x;if(be<=0||!(A[te+7]>>>16&1))continue;const _e=A[te+4],me=$t(_e&65535),de=$t(_e>>>16&65535),he=3*Math.max(me,de),De=$-be*S,ee=re-be*g,pe=H-be*x;if(De*De+ee*ee+pe*pe>he*he)continue;const ye=$t(A[te+3]&65535);if(ye<1/255)continue;const ze=A[te+5],ke=A[te+6];let X=$t(ze&65535),K=$t(ze>>>16&65535),U=$t(ke&65535),ve=$t(ke>>>16&65535);const Ae=Math.hypot(X,K,U,ve)||1;X/=Ae,K/=Ae,U/=Ae,ve/=Ae;const $e=1-2*(U*U+ve*ve),Le=2*(K*U+X*ve),Ue=2*(K*ve-X*U),ae=2*(K*U-X*ve),xe=1-2*(K*K+ve*ve),Ee=2*(U*ve+X*K),M=2*(K*ve+X*U),O=2*(U*ve-X*K),b=1-2*(K*K+U*U),i=S*M+g*O+x*b;if(Math.abs(i)<1e-6)continue;const f=($*M+re*O+H*b)/i;if(!(f>0))continue;const u=f*S-$,v=f*g-re,y=f*x-H,k=(u*$e+v*Le+y*Ue)/(me||1e-6),C=(u*ae+v*xe+y*Ee)/(de||1e-6),r=k*k+C*C;if(r>9)continue;const m=Math.min(.99,ye*Math.exp(-.5*r));m<1/255||(N.push(f),G.push(m))}if(N.length===0)return null;const Y=N.map((Z,Q)=>Q).sort((Z,Q)=>N[Z]-N[Q]);let oe=1;for(const Z of Y)if(oe*=1-G[Z],oe<I)return N[Z];return null}function tr(o,a,p){const S=(o-p.viewport[0]*.5)/p.focal[0],g=-((a-p.viewport[1]*.5)/p.focal[1]),x=p.rotation;let L=S*x[0]+g*x[1]+x[2],A=S*x[4]+g*x[5]+x[6],T=S*x[8]+g*x[9]+x[10];const I=Math.hypot(L,A,T)||1;return[L/I,A/I,T/I]}function Oc(o,a,p,S,g,x){const[L,A,T]=tr(o,a,S),I=S.position[0],q=S.position[1],N=S.position[2],G=new Uint32Array(g.buffer,g.byteOffset,g.length);let Y=er(I,q,N,L,A,T,g,G,null,.5);return Y===null&&(Y=er(I,q,N,L,A,T,g,G,null,.8)),Y===null?null:[I+Y*L,q+Y*A,N+Y*T]}function Fc(o,a){const p=o.viewport[0],S=o.viewport[1],g=new Uint32Array(a.buffer,a.byteOffset,a.length),x=o.position[0],L=o.position[1],A=o.position[2],[T,I,q]=tr(p*.5,S*.5,o),N=.06*Math.max(p,S),G=(N+2)/o.focal[0],Y=a.length/8,oe=[];for(let $=0;$<Y;$++){const re=$*8,H=a[re]-x,be=a[re+1]-L,_e=a[re+2]-A,me=H*T+be*I+_e*q;if(me<=0)continue;const de=g[re+4],he=3*Math.max($t(de&65535),$t(de>>>16&65535)),De=H-me*T,ee=be-me*I,pe=_e-me*q,ye=me*G+he;De*De+ee*ee+pe*pe<=ye*ye&&oe.push($)}if(oe.length===0)return null;const Z=Int32Array.from(oe),Q=[],te=5;for(let $=0;$<te;$++)for(let re=0;re<te;re++){const H=p*.5+(re-(te-1)/2)/((te-1)/2)*N,be=S*.5+($-(te-1)/2)/((te-1)/2)*N,[_e,me,de]=tr(H,be,o),he=er(x,L,A,_e,me,de,a,g,Z,.5);he!==null&&Q.push(he*(_e*T+me*I+de*q))}return Q.length<3?null:(Q.sort(($,re)=>$-re),Q[Q.length>>1])}function Nc(o){return new Promise(a=>{const p=document.createElement("input");p.type="file",p.accept=o,p.style.display="none",p.onchange=()=>{var S;return a(((S=p.files)==null?void 0:S[0])??null)},document.body.appendChild(p),p.click(),setTimeout(()=>document.body.removeChild(p),1e3)})}function $c(o,a,p){const S=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),x=document.getElementById("quick-links");g&&(g.onclick=async()=>{const I=await Nc(".ply,.bitymi");if(I)if(S&&(S.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const q=await I.arrayBuffer(),{pcBuffer:N}=Ii(q),G=new File([N],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),Y=await Ys(G,o);a(Y)}else{const q=await Ys(I,o);a(q)}}),x&&(x.innerHTML="");const L=new URLSearchParams(window.location.search),A=L.get("bundle")??L.get("model_url"),T=L.get("camera_url");A&&(S&&(S.style.display="none"),p(A,T))}async function qc(o,a,p,S){const g=new Js(o,p),x=new Ic(g);let L=!1;o.addEventListener("pointerdown",()=>{L=!0}),window.addEventListener("pointerup",()=>{L=!1});const A=typeof window<"u"&&window.parent!==window,T={pos:new Float32Array(3),rot:new Float32Array(16)};if(A){window.addEventListener("message",X=>{const K=X.data;if(!(!K||K.type!=="halloumi_sync_pose")&&!(!Array.isArray(K.position)||K.position.length!==3)&&!(!Array.isArray(K.rotation)||K.rotation.length!==16)){for(let U=0;U<3;U++)g.position[U]=K.position[U];for(let U=0;U<16;U++)g.rotation[U]=K.rotation[U];g.update_buffer(),x.resetToCamera();for(let U=0;U<3;U++)T.pos[U]=g.position[U];for(let U=0;U<16;U++)T.rot[U]=g.rotation[U]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const I=()=>{if(!A)return;const X=g.position,K=g.rotation;let U=!1;for(let ve=0;ve<3;ve++)if(Math.abs(X[ve]-T.pos[ve])>1e-6){U=!0;break}if(!U){for(let ve=0;ve<16;ve++)if(Math.abs(K[ve]-T.rot[ve])>1e-6){U=!0;break}}if(U){for(let ve=0;ve<3;ve++)T.pos[ve]=X[ve];for(let ve=0;ve<16;ve++)T.rot[ve]=K[ve];try{window.parent.postMessage({type:"halloumi_camera_state",position:[X[0],X[1],X[2]],rotation:Array.from(K)},"*")}catch{}}},q="rgba8unorm";a.configure({device:p,format:q,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let N=null,G=null;const Y=()=>{g.on_update_canvas(),N!==null&&Tn(o.width,o.height,p,N.render_settings_buffer),G!==null&&G()};new ResizeObserver(()=>{const X=Math.max(.25,pe.render_scale),K=Math.max(1,Math.ceil(X*o.clientWidth)),U=Math.max(1,Math.ceil(X*o.clientHeight));o.width===K&&o.height===U||(o.width=K,o.height=U,Y())}).observe(o);let Z=0,Q=0;const te=()=>{(o.width!==Z||o.height!==Q)&&(Z=o.width,Q=o.height,Y())},$=new URLSearchParams(window.location.search);let H=$.get("animation")==="1";x.enabled=!H;const be=$.get("camera_url"),_e=$.get("bfc"),me=_e==="1"||_e==="true",de=$.get("bfc_cos"),he=de!==null?Number(de):NaN,De=Number.isFinite(he)?he:2,ee=Math.max(1,window.devicePixelRatio||1),pe={gaussian_scaling:1,sh_bias:.5,animate:H,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:me,bfc_cos:De,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,fetch_by_id:!0,render_scale:1},ye=new rc.Pane({title:"Config",expanded:!0});ye.addInput(pe,"animate",{label:"Animate"}).on("change",X=>{const K=H;H=X.value,x.enabled=!X.value,!K&&H&&ze.value&&ze.value.onAnimateStart(),K&&!H&&ze.value&&ze.value.onAnimateStop()}),ye.addInput(pe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ze={value:null};$c(p,X=>ke(X,[],null),async(X,K)=>{let U=K??be,ve,Ae=null;const $e=X.toLowerCase();if($e.endsWith(".bitymi")||$e.includes(".bitymi?")){sr("downloading bundle ...");try{const{bundle:Ee}=await fi(X,(O,b,i)=>{const f=O/1048576,u=b?b/(1024*1024):void 0,v=i/(1024*1024),y=b?Math.min(99,Math.floor(O/b*100)):void 0,k=u?`total ${u.toFixed(1)} MB`:"total -- MB",C=u&&y!==void 0?`${f.toFixed(1)} MB downloaded (${y}%)`:`${f.toFixed(1)} MB downloaded`,r=`${v.toFixed(2)} MB/s`;qt(`downloading bundle ...
${k}, ${C}
${r}`)});if(!Ee)throw new Error("Expected a .bitymi bundle");qt("parsing PLY ...");const M=new File([Ee.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(ve=await Ys(M,p),!U&&Ee.camerasBuffer&&(U=URL.createObjectURL(new Blob([Ee.camerasBuffer],{type:"application/json"}))),Ee.atlasBuffer){const O=Ee.atlasBuffer.byteLength/1048576;qt(`uploading atlas ...
${O.toFixed(1)} MB BC7`);try{const b=di(Ee.atlasBuffer);Ae=pi(p,b,!0)}catch(b){console.warn("[atlas] failed to parse/upload atlas:",b)}}}catch(Ee){throw Zn(),Ee}}else ve=await Yl(X,p);let Le=null,Ue="";const ae=$.get("atlas2");if(ae)try{const{bundle:Ee}=await fi(ae,(M,O)=>{qt(`downloading second atlas ...
${(M/1048576).toFixed(1)}${O?` / ${(O/1048576).toFixed(1)}`:""} MB`)});if(!(Ee!=null&&Ee.atlasBuffer))throw new Error("second bundle has no atlas chunk");qt("uploading second atlas ..."),Le=pi(p,di(Ee.atlasBuffer),!0),Le||(Ue="second atlas: format unsupported on this device")}catch(Ee){console.warn("[atlas2] failed:",Ee),Ue=`second atlas failed: ${Ee}`}const xe=U?await Ec(U):[];xe.length>0&&g.set_preset(xe[0]),ke(ve,xe,Ae,Le,Ue)});function ke(X,K=[],U=null,ve=null,Ae=""){const $e=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];x.setBbox(X.bbox.min,X.bbox.max),.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function Le(R,j){const ie=Oc(R,j,o,g,X.surfel_data);ie&&(x.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function Ue(){const R=Fc(g,X.surfel_data);if(R!==null&&R>.001){x.setOrbitDepth(R);return}const j=g.rotation,ie=j[2],ue=j[6],Ce=j[10],fe=(X.centroid[0]-g.position[0])*ie+(X.centroid[1]-g.position[1])*ue+(X.centroid[2]-g.position[2])*Ce;fe>.001&&x.setOrbitDepth(fe)}if(K.length===0){const R=X.bbox.max[0]-X.bbox.min[0],j=X.bbox.max[1]-X.bbox.min[1],ie=X.bbox.max[2]-X.bbox.min[2],Ce=.5*Math.sqrt(R*R+j*j+ie*ie)*.5;z.set($e[0]-Ce,$e[1]-Ce,$e[2]-Ce,g.position);const fe=z.create(Ce,Ce,Ce);z.normalize(fe,fe);const ce=z.create(0,1,0),Pe=z.create();z.cross(ce,fe,Pe),z.normalize(Pe,Pe);const Oe=z.create();z.cross(fe,Pe,Oe);const ft=At.create(Pe[0],Oe[0],fe[0],Pe[1],Oe[1],fe[1],Pe[2],Oe[2],fe[2]);mt.fromMat3(ft,g.rotation),g.update_buffer()}x.setCenter(z.create(X.centroid[0],X.centroid[1],X.centroid[2]));const ae=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),xe="halloumi.fetch_by_id";let Ee=null;try{const R=localStorage.getItem(xe);(R==="0"||R==="1")&&(Ee=R==="1")}catch{}const M=$.get("byid"),O={fetchById:M!==null?M==="1":Ee!==null?Ee:!ae,octBound:$.get("oct")==="1",acc16:$.get("acc16")==="1"},b=new Pc(X,p,q,g.uniform_buffer,S,U,O),i=$.get("surfel_math");pe.surfel_math=i==="raysplat"||i==="centred"?i:$.get("raysplat")==="1"?"raysplat":"conic",pe.hyp_legacy=$.get("hyp_legacy")==="1",Yn({hypLegacy:pe.hyp_legacy,raysplat:pe.surfel_math==="raysplat",centred:pe.surfel_math==="centred"},p,b.render_settings_buffer),pe.legacy_renderer=$.get("legacy")==="1",pe.legacy_renderer&&b.setLegacyRenderer(!0),pe.fetch_by_id=O.fetchById,console.log(`[render_2dgs] fetch_by_id=${O.fetchById} (source: ${M!==null?"?byid":Ee!==null?"remembered":`handheld=${ae}`})`),N=b,Tn(o.width,o.height,p,b.render_settings_buffer),pe.atlas_enabled=U!==null;{const R=X.surfel_data,j=R.length/8;let ie=0,ue=0,Ce=0;for(let ce=0;ce<j;ce++)ie+=R[ce*8],ue+=R[ce*8+1],Ce+=R[ce*8+2];const fe=j>0?[ie/j,ue/j,Ce/j]:[0,0,0];b.setBfcParams(pe.bfc_cos,fe),Yn({bfc:pe.bfc},p,b.render_settings_buffer),console.log(`[bfc] flag=${pe.bfc} cos=${pe.bfc_cos} centroid=(${fe[0].toFixed(3)}, ${fe[1].toFixed(3)}, ${fe[2].toFixed(3)})`)}let f=!1;const u=(()=>{if(U!==null)return`${U.meta.format===2?"BC7":U.meta.format===3?"ASTC 4×4":U.meta.format===7?"BC7 codebook gather (typeD)":`format=${U.meta.format}`} ${U.meta.width}×${U.meta.height}, ${U.meta.n_layers} layers`;const R=p.features.has("texture-compression-bc"),j=p.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(R?["BC7"]:[]).concat(j?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",u),yi(X.sh_bias,p,b.render_settings_buffer),xi(pe.gaussian_scaling,p,b.render_settings_buffer),pe.sh_bias=X.sh_bias;const v=X.num_points.toLocaleString(),y={stats:`${v} surfels · -- fps`};ye.addMonitor(y,"stats",{label:"Stats",interval:200});const k=.4,C=3,r=.3;let m=null,d=0,h=0;const l=dt.create(),_=At.create();let P=K.length>0?0:-1;const w={view:K.length>0?`${P+1} / ${K.length}: ${K[P].img_name??P}`:"— no presets —"},B=document.createElement("span");function V(R){const j=At.create(R[0],R[1],R[2],R[4],R[5],R[6],R[8],R[9],R[10]);return dt.fromMat(j)}function W(R,j){m={fromPos:z.clone(g.position),toPos:z.clone(R.position),fromQuat:dt.normalize(V(g.rotation)),toQuat:dt.normalize(V(R.rotation)),target:R,t:0,duration:Math.max(.01,j)}}const le=(R,j=!0)=>{if(K.length===0)return;P=(R%K.length+K.length)%K.length;const ie=K[P];j?W(ie,k):(g.set_preset(ie),x.resetToCamera(),Ue()),w.view=`${P+1} / ${K.length}: ${K[P].img_name??P}`,B.textContent=w.view};if(K.length>0){const R=ye.addSeparator(),j=document.createElement("div");j.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ie=(Ce,fe,ce)=>{const Pe=document.createElement("button");return Pe.className="tp-btnv_b",Pe.textContent=Ce,Pe.title=fe,Pe.style.cssText="flex:0 0 34px;height:24px;padding:0;",Pe.addEventListener("click",ce),Pe};B.textContent=w.view,B.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",j.appendChild(ie("◀","previous view (←)",()=>le(P-1))),j.appendChild(B),j.appendChild(ie("▶","next view (→)",()=>le(P+1))),(ye.element.querySelector(".tp-rotv_c")??ye.element).insertBefore(j,R.element),R.dispose()}const se=K.length>0?Oi(K,{tiltDownDeg:15,alignFirst:!0}):null,ne=se?Vc(K,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ge=0;const Me=12;ze.value={onAnimateStart:()=>{ge=0},onAnimateStop:()=>{x.resetToCamera(),Ue()}},ye.addInput(pe,"render_scale",{label:"Render scale",min:.25,max:ee,step:.25}).on("change",R=>{const j=Math.max(.25,R.value),ie=Math.max(1,Math.ceil(j*o.clientWidth)),ue=Math.max(1,Math.ceil(j*o.clientHeight));(o.width!==ie||o.height!==ue)&&(o.width=ie,o.height=ue,Y())});const we={res:""},Se=()=>{const R=o.width*o.height/1e6;we.res=`${o.width}×${o.height}  (${R.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${ee.toFixed(2)} · native ${Math.round(o.clientWidth*ee)}×${Math.round(o.clientHeight*ee)}`};Se(),G=Se,ye.addMonitor(we,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ye.addInput(pe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",R=>xi(R.value,p,b.render_settings_buffer)),ye.addInput(pe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",R=>yi(R.value,p,b.render_settings_buffer)),ye.addInput(pe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",R=>{b.bgColor=[R.value.r,R.value.g,R.value.b,R.value.a]});const Re=R=>R===null?"":R.meta.format===3||R.meta.format===8||R.meta.format===10?" (ASTC)":" (BC7)";let Ie=Re(U);const We=ye.addInput(pe,"atlas_enabled",{label:`Texture${Ie}`}).on("change",R=>{b.setAtlasEnabled(R.value),Ke()}),qe=document.createElement("button");qe.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Ke=()=>{qe.textContent=`Texture${Ie}: ${pe.atlas_enabled?"ON":"OFF"}`,qe.style.borderColor=pe.atlas_enabled?"#f0b060":"#444",qe.style.color=pe.atlas_enabled?"#f0b060":"#bbb"},Qe=()=>{pe.atlas_enabled=!pe.atlas_enabled,b.setAtlasEnabled(pe.atlas_enabled),We.refresh(),Ke()};if(qe.title="toggle the baked texture (T)",qe.addEventListener("click",Qe),U&&document.body.appendChild(qe),Ke(),U&&(ve||Ae))if(ve){const R={};R[`A${Re(U)} · bundle`]="A",R[`B${Re(ve)} · atlas2`]="B";const j={atlas:"A"};ye.addInput(j,"atlas",{label:"Atlas source",options:R}).on("change",ie=>{const ue=ie.value==="B"?ve:U;b.setAtlas(ue),Ie=Re(ue),We.label=`Texture${Ie}`,Ke(),console.log(`[atlas2] now sampling ${ie.value}${Ie}`)})}else{const R={note:Ae};ye.addMonitor(R,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const st=U!==null&&(U.meta.probe_mode|0)>0;if(b.hasMips&&st)b.setMipMode(pe.mips),ye.addInput(pe,"mips",{label:"Mips (trilinear)"}).on("change",R=>b.setMipMode(R.value));else if(b.hasMips){const R=$.get("mipbias"),j={mode:R==="0"||R==="1"||R==="2"?R:"off"},ie=ue=>{ue==="off"?b.setMipMode(!1):(b.setMipLodBias(Number(ue)),b.setMipMode(!0)),console.log(`[mips] ${ue==="off"?"off (level 0 only)":`on, bias ${ue}`}`)};ie(j.mode),ye.addInput(j,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",ue=>ie(ue.value))}const rt=ye.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});rt.addInput(pe,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",R=>Yn({raysplat:R.value==="raysplat",centred:R.value==="centred"},p,b.render_settings_buffer));const tt=globalThis.__gpuAdapterInfo??{},at={s:`${tt.vendor??"?"} / ${tt.architecture??"?"}
${tt.device||tt.description||"?"}`};rt.addMonitor(at,"s",{label:"GPU",multiline:!0,lineCount:2}),rt.addInput(pe,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",R=>Yn({hypLegacy:R.value},p,b.render_settings_buffer)),ye.addInput(pe,"legacy_renderer",{label:"Legacy renderer"}).on("change",R=>b.setLegacyRenderer(R.value)),ye.addInput(pe,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",R=>{b.setFetchById(R.value);try{localStorage.setItem("halloumi.fetch_by_id",R.value?"1":"0")}catch{}});const nt={aspect:"canvas"},Ze=ye.addFolder({title:"📸 Screenshot",expanded:!1});Ze.addInput(nt,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Ye={s:"pick a size to capture"};Ze.addMonitor(Ye,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const je=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Xe=null;function Je(R){let j;if(nt.aspect==="canvas")j=o.width/o.height;else{const[ce,Pe]=nt.aspect.split(":").map(Number);j=ce/Pe}const ie=p.limits.maxTextureDimension2D;let ue,Ce;if(R==="canvas"&&nt.aspect==="canvas")ue=o.width,Ce=o.height;else{const ce=R==="canvas"?Math.max(o.width,o.height):R;j>=1?(ue=ce,Ce=Math.round(ce/j)):(Ce=ce,ue=Math.round(ce*j))}const fe=Math.min(1,ie/Math.max(ue,Ce));return ue=Math.max(2,Math.round(ue*fe)&-2),Ce=Math.max(2,Math.round(Ce*fe)&-2),[ue,Ce]}function ht(R,j){const ie=URL.createObjectURL(R),ue=document.createElement("a");ue.href=ie,ue.download=j,document.body.appendChild(ue),ue.click(),ue.remove(),setTimeout(()=>URL.revokeObjectURL(ie),1e4)}async function it(R,j){var ce;const ie=(R.size/1048576).toFixed(1),ue=window;if(typeof ue.showSaveFilePicker=="function")try{const Pe=await ue.showSaveFilePicker({suggestedName:j,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Oe=await Pe.createWritable();return await Oe.write(R),await Oe.close(),`saved ${Pe.name??j} (${ie} MB) where you chose`}catch(Pe){if((Pe==null?void 0:Pe.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ce=new File([R],j,{type:"image/png"}),fe=navigator;if(fe.share&&((ce=fe.canShare)!=null&&ce.call(fe,{files:[Ce]})))try{return await fe.share({files:[Ce],title:j}),`shared ${j} (${ie} MB) via share sheet`}catch(Pe){if((Pe==null?void 0:Pe.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return ht(R,j),`downloaded ${j} (${ie} MB) to your browser's Downloads folder`}async function It(R){if(f)return;const[j,ie]=Je(R);Ye.s=`rendering ${j}×${ie}…`;const ue=o.width,Ce=o.height;g.setRenderSize(j,ie),Tn(j,ie,p,b.render_settings_buffer);const fe=p.createTexture({size:[j,ie,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ce=Math.ceil(j*4/256)*256,Pe=p.createBuffer({size:ce*ie,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Oe=p.createCommandEncoder({label:"screenshot"});b.frame(Oe,fe.createView(),!1),Oe.copyTextureToBuffer({texture:fe},{buffer:Pe,bytesPerRow:ce,rowsPerImage:ie},[j,ie,1]),p.queue.submit([Oe.finish()]),g.clearRenderSize(),Tn(ue,Ce,p,b.render_settings_buffer);try{await Pe.mapAsync(GPUMapMode.READ);const ft=new Uint8Array(Pe.getMappedRange()),_t=new Uint8ClampedArray(j*ie*4);for(let vt=0;vt<ie;vt++)_t.set(ft.subarray(vt*ce,vt*ce+j*4),vt*j*4);for(let vt=3;vt<_t.length;vt+=4)_t[vt]=255;Pe.unmap();const ot=document.createElement("canvas");ot.width=j,ot.height=ie,ot.getContext("2d").putImageData(new ImageData(_t,j,ie),0,0);const bt=await new Promise((vt,Gn)=>ot.toBlob(Lt=>Lt?vt(Lt):Gn(new Error("toBlob failed")),"image/png")),yt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),lt=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),zt=`${yt}_${j}x${ie}_${lt}.png`;Xe={blob:bt,name:zt},Ye.s=await it(bt,zt)}catch(ft){console.error("[screenshot]",ft),Ye.s=`failed: ${ft}`}finally{Pe.destroy(),fe.destroy()}}{const R=document.createElement("div");R.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const j=(ue,Ce,fe)=>{const ce=document.createElement("button");ce.className="tp-btnv_b",ce.textContent=ue,ce.title=Ce,ce.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ce.addEventListener("click",fe),R.appendChild(ce)};j("Canvas","current canvas size",()=>{It("canvas")});for(const[ue,Ce]of je)j(ue,`${Ce} px long edge`,()=>{It(Ce)});(Ze.element.querySelector(".tp-fldv_c")??Ze.element).appendChild(R)}Ze.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Xe){Ye.s="nothing captured yet";return}ht(Xe.blob,Xe.name),Ye.s=`downloaded ${Xe.name} to your browser's Downloads folder`}),ye.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(K.length>0)g.set_preset(K[0]);else{const R=X.bbox.max[0]-X.bbox.min[0],j=X.bbox.max[1]-X.bbox.min[1],ie=X.bbox.max[2]-X.bbox.min[2],Ce=.5*Math.sqrt(R*R+j*j+ie*ie)*.5;z.set($e[0]-Ce,$e[1]-Ce,$e[2]-Ce,g.position);const fe=z.create(Ce,Ce,Ce);z.normalize(fe,fe);const ce=z.create();z.cross(z.create(0,1,0),fe,ce),z.normalize(ce,ce);const Pe=z.create();z.cross(fe,ce,Pe);const Oe=At.create(ce[0],Pe[0],fe[0],ce[1],Pe[1],fe[1],ce[2],Pe[2],fe[2]);mt.fromMat3(Oe,g.rotation),g.update_buffer()}x.resetToCamera(),Ue()});const xt={result:"— click Benchmark —"},kt=ye.addMonitor(xt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});kt.hidden=!0;const Dt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Wt(){const j=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(Dt))if(j.startsWith(ie))return ie;return null}const Et=document.createElement("div");Et.id="bench-overlay",Et.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Et);function Gt(R,j,ie){const ue=Math.floor(j/Math.max(1,ie)*100),Ce=32,fe=Math.floor(j/Math.max(1,ie)*Ce),ce="█".repeat(fe)+"░".repeat(Ce-fe);Et.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${R}</div><div>[${ce}] ${ue}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${j} / ${ie} frames · offscreen · pipelined · no vsync</div>`,Et.style.display="block"}function gn(){Et.style.display="none"}let Rt=null;async function sn(R=10,j=200){if(f)return;if(K.length===0){xt.result="no cameras to benchmark";return}f=!0;const ie=H,ue=pe.animate,Ce=new Float32Array(g.position),fe=new Float32Array(g.rotation);H=!1,pe.animate=!1,ye.refresh(),m=null,x.enabled=!1;const ce=Wt(),Pe=ce?Dt[ce]:null,Oe=(Pe==null?void 0:Pe.w)??o.width,ft=(Pe==null?void 0:Pe.h)??o.height,_t=(Pe==null?void 0:Pe.fovY)??g.getFov(),ot=ce?`${ce} · ${Oe>=4e3/4+500?"images_4":"images_2"}`:"custom",bt=o.width,yt=o.height,lt=g.getFov();o.width=Oe,o.height=ft,g.setFov(_t),Tn(Oe,ft,p,b.render_settings_buffer);const zt=p.createTexture({size:[Oe,ft,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),vt=zt.createView(),Gn=()=>{const wt=p.createCommandEncoder();b.frame(wt,vt,!1),p.queue.submit([wt.finish()])},Lt=()=>new Promise(wt=>setTimeout(wt,0)),is=20,os=async(wt,Ut)=>{let ln=0,Mt=0;for(Gt(Ut,0,wt),await Lt();Mt<wt;){const yn=Math.min(is,wt-Mt),cn=performance.now();for(let Un=0;Un<yn;Un++)g.set_preset(K[(Mt+Un)%K.length]),Gn();await p.queue.onSubmittedWorkDone();const as=performance.now();ln+=as-cn,Mt+=yn,Gt(Ut,Mt,wt),await Lt()}return ln};try{await os(R,"Warming up");const Ut=await os(j,"Benchmarking")/j,ln=1e3/Ut;Rt={fps:ln,ms:Ut,w:Oe,h:ft};const Mt=X.num_points??X.surfel_data.length/8,yn=(_t*180/Math.PI).toFixed(1),cn=`${ln.toFixed(1)} FPS  (${Ut.toFixed(2)} ms/frame)
${Oe}×${ft} · fovY ${yn}° · ${ot}
${Mt.toLocaleString()} surfels · ${R}w+${j}b · pipelined`+(b.hasMips?` · ${b._mipMode?`mips bias ${b.mipLodBias}`:"mips off"}`:"");xt.result=cn,kt.hidden=!1,console.log("[bench]",cn.replace(/\n/g,"  |  "))}catch(wt){console.error("[bench] failed:",wt),xt.result=`bench failed: ${wt}`,kt.hidden=!1}finally{gn(),zt.destroy(),o.width=bt,o.height=yt,g.setFov(lt),Tn(bt,yt,p,b.render_settings_buffer),g.position.set(Ce),g.rotation.set(fe),g.update_buffer(),x.enabled=!ie,H=ie,pe.animate=ue,ye.refresh(),f=!1}}ye.addButton({title:"📊 Benchmark"}).on("click",()=>sn());const rn="position:fixed;left:8px;z-index:1001;height:34px;padding:0 12px;border-radius:6px;border:1px solid #f0b060;background:#1c1c1cdd;color:#f0b060;font:600 13px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);",He=document.createElement("button");He.style.cssText=rn+"bottom:92px;";const ts=()=>{He.textContent=`Fetches: ${Ks()+1}`},wn=R=>{hc(R-1,p,b.render_settings_buffer),ts()};He.addEventListener("click",()=>{f||wn((Ks()+1)%4+1)});const jt=document.createElement("button");jt.style.cssText=rn+"bottom:50px;",jt.textContent="Sweep 1-4";const Kt=document.createElement("pre");Kt.style.cssText="position:fixed;left:8px;right:8px;top:48px;z-index:1002;margin:0;padding:12px;border-radius:8px;background:#000000e6;color:#fff;font:12px/1.5 monospace;white-space:pre-wrap;display:none;user-select:text;-webkit-user-select:text;",Kt.addEventListener("click",()=>{Kt.style.display="none"}),jt.addEventListener("click",async()=>{if(f)return;const R=Ks()+1,j=[[],[]];let ie="";for(let ce=0;ce<2;ce++)for(let Pe=1;Pe<=4;Pe++){wn(Pe),Rt=null,await sn(10,200);const Oe=Rt;j[ce].push(Oe?Oe.ms:NaN),Oe&&(ie=`${Oe.w}x${Oe.h}`)}wn(R);const ue=[0,1,2,3].map(ce=>(j[0][ce]+j[1][ce])/2),Ce=ce=>`${ce+1} fetch${ce?"es":"  "}  ${ue[ce].toFixed(2)} ms  ${(1e3/ue[ce]).toFixed(1).padStart(7)} FPS  ${ce?((ue[ce]/ue[0]-1)*100>=0?"+":"")+((ue[ce]/ue[0]-1)*100).toFixed(1)+"%":"base"}   (rounds ${j[0][ce].toFixed(2)} / ${j[1][ce].toFixed(2)} ms)`,fe=`FETCHBENCH  ${ie}  offscreen, no vsync, 200 frames x 2 rounds
`+[0,1,2,3].map(Ce).join(`
`)+`
${navigator.userAgent}
(tap to close)`;Kt.textContent=fe,Kt.style.display="block",console.log(`[fetchbench]
`+fe)});const Ht=Math.max(1,Math.min(4,parseInt(new URLSearchParams(window.location.search).get("fetches")??"1",10)||1));U&&(document.body.appendChild(He),document.body.appendChild(jt),document.body.appendChild(Kt),wn(Ht));const ns=Math.PI/2,ct=new Set,xs=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],ss=R=>{const j=R.target;return!!j&&(j.tagName==="INPUT"||j.tagName==="TEXTAREA"||j.isContentEditable)},ys=()=>ct.has("ShiftLeft")||ct.has("ShiftRight");document.addEventListener("keyup",R=>{ct.delete(R.code)}),window.addEventListener("blur",()=>ct.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&ct.clear()});const on=R=>{if(ct.size===0||pe.animate)return;const j=ys()?3:1;let ie=0;ct.has("KeyX")&&(ie+=1),ct.has("KeyZ")&&(ie-=1),ie!==0&&(x.addRoll(ie*ns*j*R),m=null);const ue=g.rotation,Ce=[ue[0],ue[4],ue[8]],fe=[ue[1],ue[5],ue[9]],ce=[ue[2],ue[6],ue[10]],Pe=x.center,ft=(x.sceneRadius??Math.max(.05,z.distance(g.position,Pe)))*.5*j*R;let _t=0,ot=0,bt=0;if(ct.has("KeyW")&&(bt+=1),ct.has("KeyS")&&(bt-=1),ct.has("KeyD")&&(_t+=1),ct.has("KeyA")&&(_t-=1),ct.has("KeyE")&&(ot+=1),ct.has("KeyQ")&&(ot-=1),!_t&&!ot&&!bt)return;const yt=[0,0,0];for(let lt=0;lt<3;lt++)yt[lt]=(Ce[lt]*_t+fe[lt]*ot+ce[lt]*bt)*ft;for(let lt=0;lt<3;lt++)g.position[lt]+=yt[lt],Pe[lt]+=yt[lt];g.update_buffer(),m=null};document.addEventListener("keydown",R=>{if(ss(R))return;const j=R.key,ie=j.toLowerCase();if(R.ctrlKey||R.metaKey||R.altKey){ct.clear();return}if(xs.includes(R.code)&&!(R.shiftKey&&R.code==="KeyD")){ct.add(R.code),R.preventDefault();return}if(ie==="t"){Qe();return}if(j>="0"&&j<="9"&&K.length>0){const ue=parseInt(j);ue<K.length&&le(ue)}else j==="ArrowLeft"||j==="PageUp"?(le(P-1),R.preventDefault()):j==="ArrowRight"||j==="PageDown"?(le(P+1),R.preventDefault()):R.shiftKey&&ie==="d"&&b.debugReadSortedIndices(30).catch(ue=>console.error("[DEBUG] readback failed:",ue))});function rs(R,j){const ie=o.getBoundingClientRect(),ue=window.devicePixelRatio||1;return[(R-ie.left)*ue,(j-ie.top)*ue]}o.addEventListener("dblclick",R=>{const[j,ie]=rs(R.clientX,R.clientY);Le(j,ie)});let An=0,Dn=0,Ln=0;o.addEventListener("pointerdown",R=>{if(R.pointerType!=="touch")return;const j=performance.now(),ie=j-An,ue=R.clientX-Dn,Ce=R.clientY-Ln;if(ie>0&&ie<300&&ue*ue+Ce*Ce<40*40){const[fe,ce]=rs(R.clientX,R.clientY);Le(fe,ce),An=0}else An=j,Dn=R.clientX,Ln=R.clientY});function In(){return L}let Rn=performance.now(),zn=60,Yt=Promise.resolve(),xn=0;async function an(){var Ce;const R=performance.now(),j=Math.min((R-Rn)/1e3,.1);if(Rn=R,j>0){const fe=((Ce=b.lastStageBreakdownMs)==null?void 0:Ce.total)??0,ce=fe>.5?1e3/fe:1/j;zn=zn*.9+ce*.1,y.stats=`${v} surfels · ${Math.round(zn)} fps`}if(f){requestAnimationFrame(an);return}if(In()&&(m||H)&&(m=null,x.resetToCamera(),Ue(),H&&(H=!1,pe.animate=!1,ye.refresh())),H&&pe.animateMode==="circle"&&se){ge+=j/Me,ge>=1&&(ge-=1);const fe=Fi(se,ge);g.set_preset(fe),x.update(j);const ce=p.createCommandEncoder();b.frame(ce,a.getCurrentTexture().createView()),p.queue.submit([ce.finish()]),xn++,xn===2&&Zn(),requestAnimationFrame(an);return}if(m){m.t+=j/m.duration;const fe=Math.min(1,m.t),ce=fe*fe*(3-2*fe);z.lerp(m.fromPos,m.toPos,ce,g.position),dt.slerp(m.fromQuat,m.toQuat,ce,l),At.fromQuat(l,_),mt.fromMat3(_,g.rotation),g.update_buffer(),m.t>=1&&(g.set_preset(m.target),m=null,H?K.length>0&&(d=r):(x.resetToCamera(),Ue()))}else if(H&&!In()){const fe=pe.animateMode==="circle"&&ne.length>0,ce=fe?ne:K;if(ce.length!==0){if(d-=j,d<=0){const Oe=((fe?h:P)+1)%ce.length;fe?h=Oe:P=Oe;const ft=fe?C/8:C;W(ce[Oe],ft),fe||(w.view=`${P+1} / ${K.length}: ${K[P].img_name??P}`)}}}on(j),x.update(j),I(),te(),await Yt;const ie=p.createCommandEncoder(),ue=a.getCurrentTexture().createView();b.frame(ie,ue),p.queue.submit([ie.finish()]),Yt=p.queue.onSubmittedWorkDone(),xn++,xn===2&&Zn(),requestAnimationFrame(an)}requestAnimationFrame(an)}}(function(){let a="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const x=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(x){a=x[1];break}}const p=document.createElement("div");p.textContent="v "+a,p.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(p.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(p)})();(async()=>{if(navigator.gpu===void 0){const x=document.querySelector("#title");x.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const x=document.querySelector("#title");x.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)");try{const x=o.info??{};globalThis.__gpuAdapterInfo={vendor:x.vendor??"?",architecture:x.architecture??"?",device:x.device??"?",description:x.description??"?",features:Array.from(o.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const p=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");$l(S!==null);const g=S.getContext("webgpu");qc(S,g,p,a)})();
