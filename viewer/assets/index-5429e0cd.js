var xl=Object.defineProperty;var yl=(o,a,_)=>a in o?xl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[a]=_;var G=(o,a,_)=>(yl(o,typeof a!="symbol"?a+"":a,_),_);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))P(w);new MutationObserver(w=>{for(const E of w)if(E.type==="childList")for(const B of E.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&P(B)}).observe(document,{childList:!0,subtree:!0});function _(w){const E={};return w.integrity&&(E.integrity=w.integrity),w.referrerPolicy&&(E.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?E.credentials="include":w.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function P(w){if(w.ep)return;w.ep=!0;const E=_(w);fetch(w.href,E)}})();function Pl(o,a){return class extends o{constructor(..._){super(..._),a(this)}}}const Sl=Pl(Array,o=>o.fill(0));let De=1e-6;function El(o){function a(y=0,C=0){const k=new o(2);return y!==void 0&&(k[0]=y,C!==void 0&&(k[1]=C)),k}const _=a;function P(y,C,k){const r=k??new o(2);return r[0]=y,r[1]=C,r}function w(y,C){const k=C??new o(2);return k[0]=Math.ceil(y[0]),k[1]=Math.ceil(y[1]),k}function E(y,C){const k=C??new o(2);return k[0]=Math.floor(y[0]),k[1]=Math.floor(y[1]),k}function B(y,C){const k=C??new o(2);return k[0]=Math.round(y[0]),k[1]=Math.round(y[1]),k}function $(y,C=0,k=1,r){const h=r??new o(2);return h[0]=Math.min(k,Math.max(C,y[0])),h[1]=Math.min(k,Math.max(C,y[1])),h}function R(y,C,k){const r=k??new o(2);return r[0]=y[0]+C[0],r[1]=y[1]+C[1],r}function V(y,C,k,r){const h=r??new o(2);return h[0]=y[0]+C[0]*k,h[1]=y[1]+C[1]*k,h}function q(y,C){const k=y[0],r=y[1],h=C[0],u=C[1],f=Math.sqrt(k*k+r*r),l=Math.sqrt(h*h+u*u),d=f*l,g=d&&_e(y,C)/d;return Math.acos(g)}function U(y,C,k){const r=k??new o(2);return r[0]=y[0]-C[0],r[1]=y[1]-C[1],r}const Z=U;function X(y,C){return Math.abs(y[0]-C[0])<De&&Math.abs(y[1]-C[1])<De}function O(y,C){return y[0]===C[0]&&y[1]===C[1]}function L(y,C,k,r){const h=r??new o(2);return h[0]=y[0]+k*(C[0]-y[0]),h[1]=y[1]+k*(C[1]-y[1]),h}function F(y,C,k,r){const h=r??new o(2);return h[0]=y[0]+k[0]*(C[0]-y[0]),h[1]=y[1]+k[1]*(C[1]-y[1]),h}function N(y,C,k){const r=k??new o(2);return r[0]=Math.max(y[0],C[0]),r[1]=Math.max(y[1],C[1]),r}function j(y,C,k){const r=k??new o(2);return r[0]=Math.min(y[0],C[0]),r[1]=Math.min(y[1],C[1]),r}function M(y,C,k){const r=k??new o(2);return r[0]=y[0]*C,r[1]=y[1]*C,r}const K=M;function ae(y,C,k){const r=k??new o(2);return r[0]=y[0]/C,r[1]=y[1]/C,r}function ve(y,C){const k=C??new o(2);return k[0]=1/y[0],k[1]=1/y[1],k}const de=ve;function ne(y,C,k){const r=k??new o(3),h=y[0]*C[1]-y[1]*C[0];return r[0]=0,r[1]=0,r[2]=h,r}function _e(y,C){return y[0]*C[0]+y[1]*C[1]}function te(y){const C=y[0],k=y[1];return Math.sqrt(C*C+k*k)}const Fe=te;function Ge(y){const C=y[0],k=y[1];return C*C+k*k}const Ie=Ge;function Te(y,C){const k=y[0]-C[0],r=y[1]-C[1];return Math.sqrt(k*k+r*r)}const ge=Te;function Pe(y,C){const k=y[0]-C[0],r=y[1]-C[1];return k*k+r*r}const ce=Pe;function se(y,C){const k=C??new o(2),r=y[0],h=y[1],u=Math.sqrt(r*r+h*h);return u>1e-5?(k[0]=r/u,k[1]=h/u):(k[0]=0,k[1]=0),k}function ie(y,C){const k=C??new o(2);return k[0]=-y[0],k[1]=-y[1],k}function me(y,C){const k=C??new o(2);return k[0]=y[0],k[1]=y[1],k}const fe=me;function be(y,C,k){const r=k??new o(2);return r[0]=y[0]*C[0],r[1]=y[1]*C[1],r}const Me=be;function ye(y,C,k){const r=k??new o(2);return r[0]=y[0]/C[0],r[1]=y[1]/C[1],r}const ke=ye;function Ve(y=1,C){const k=C??new o(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*y,k[1]=Math.sin(r)*y,k}function A(y){const C=y??new o(2);return C[0]=0,C[1]=0,C}function Y(y,C,k){const r=k??new o(2),h=y[0],u=y[1];return r[0]=h*C[0]+u*C[4]+C[12],r[1]=h*C[1]+u*C[5]+C[13],r}function x(y,C,k){const r=k??new o(2),h=y[0],u=y[1];return r[0]=C[0]*h+C[4]*u+C[8],r[1]=C[1]*h+C[5]*u+C[9],r}function i(y,C,k,r){const h=r??new o(2),u=y[0]-C[0],f=y[1]-C[1],l=Math.sin(k),d=Math.cos(k);return h[0]=u*d-f*l+C[0],h[1]=u*l+f*d+C[1],h}function m(y,C,k){const r=k??new o(2);return se(y,r),M(r,C,r)}function p(y,C,k){const r=k??new o(2);return te(y)>C?m(y,C,r):me(y,r)}function v(y,C,k){const r=k??new o(2);return L(y,C,.5,r)}return{create:a,fromValues:_,set:P,ceil:w,floor:E,round:B,clamp:$,add:R,addScaled:V,angle:q,subtract:U,sub:Z,equalsApproximately:X,equals:O,lerp:L,lerpV:F,max:N,min:j,mulScalar:M,scale:K,divScalar:ae,inverse:ve,invert:de,cross:ne,dot:_e,length:te,len:Fe,lengthSq:Ge,lenSq:Ie,distance:Te,dist:ge,distanceSq:Pe,distSq:ce,normalize:se,negate:ie,copy:me,clone:fe,multiply:be,mul:Me,divide:ye,div:ke,random:Ve,zero:A,transformMat4:Y,transformMat3:x,rotate:i,setLength:m,truncate:p,midpoint:v}}const Yr=new Map;function hi(o){let a=Yr.get(o);return a||(a=El(o),Yr.set(o,a)),a}function Cl(o){function a(l,d,g){const b=new o(3);return l!==void 0&&(b[0]=l,d!==void 0&&(b[1]=d,g!==void 0&&(b[2]=g))),b}const _=a;function P(l,d,g,b){const T=b??new o(3);return T[0]=l,T[1]=d,T[2]=g,T}function w(l,d){const g=d??new o(3);return g[0]=Math.ceil(l[0]),g[1]=Math.ceil(l[1]),g[2]=Math.ceil(l[2]),g}function E(l,d){const g=d??new o(3);return g[0]=Math.floor(l[0]),g[1]=Math.floor(l[1]),g[2]=Math.floor(l[2]),g}function B(l,d){const g=d??new o(3);return g[0]=Math.round(l[0]),g[1]=Math.round(l[1]),g[2]=Math.round(l[2]),g}function $(l,d=0,g=1,b){const T=b??new o(3);return T[0]=Math.min(g,Math.max(d,l[0])),T[1]=Math.min(g,Math.max(d,l[1])),T[2]=Math.min(g,Math.max(d,l[2])),T}function R(l,d,g){const b=g??new o(3);return b[0]=l[0]+d[0],b[1]=l[1]+d[1],b[2]=l[2]+d[2],b}function V(l,d,g,b){const T=b??new o(3);return T[0]=l[0]+d[0]*g,T[1]=l[1]+d[1]*g,T[2]=l[2]+d[2]*g,T}function q(l,d){const g=l[0],b=l[1],T=l[2],W=d[0],H=d[1],re=d[2],J=Math.sqrt(g*g+b*b+T*T),I=Math.sqrt(W*W+H*H+re*re),oe=J*I,we=oe&&_e(l,d)/oe;return Math.acos(we)}function U(l,d,g){const b=g??new o(3);return b[0]=l[0]-d[0],b[1]=l[1]-d[1],b[2]=l[2]-d[2],b}const Z=U;function X(l,d){return Math.abs(l[0]-d[0])<De&&Math.abs(l[1]-d[1])<De&&Math.abs(l[2]-d[2])<De}function O(l,d){return l[0]===d[0]&&l[1]===d[1]&&l[2]===d[2]}function L(l,d,g,b){const T=b??new o(3);return T[0]=l[0]+g*(d[0]-l[0]),T[1]=l[1]+g*(d[1]-l[1]),T[2]=l[2]+g*(d[2]-l[2]),T}function F(l,d,g,b){const T=b??new o(3);return T[0]=l[0]+g[0]*(d[0]-l[0]),T[1]=l[1]+g[1]*(d[1]-l[1]),T[2]=l[2]+g[2]*(d[2]-l[2]),T}function N(l,d,g){const b=g??new o(3);return b[0]=Math.max(l[0],d[0]),b[1]=Math.max(l[1],d[1]),b[2]=Math.max(l[2],d[2]),b}function j(l,d,g){const b=g??new o(3);return b[0]=Math.min(l[0],d[0]),b[1]=Math.min(l[1],d[1]),b[2]=Math.min(l[2],d[2]),b}function M(l,d,g){const b=g??new o(3);return b[0]=l[0]*d,b[1]=l[1]*d,b[2]=l[2]*d,b}const K=M;function ae(l,d,g){const b=g??new o(3);return b[0]=l[0]/d,b[1]=l[1]/d,b[2]=l[2]/d,b}function ve(l,d){const g=d??new o(3);return g[0]=1/l[0],g[1]=1/l[1],g[2]=1/l[2],g}const de=ve;function ne(l,d,g){const b=g??new o(3),T=l[2]*d[0]-l[0]*d[2],W=l[0]*d[1]-l[1]*d[0];return b[0]=l[1]*d[2]-l[2]*d[1],b[1]=T,b[2]=W,b}function _e(l,d){return l[0]*d[0]+l[1]*d[1]+l[2]*d[2]}function te(l){const d=l[0],g=l[1],b=l[2];return Math.sqrt(d*d+g*g+b*b)}const Fe=te;function Ge(l){const d=l[0],g=l[1],b=l[2];return d*d+g*g+b*b}const Ie=Ge;function Te(l,d){const g=l[0]-d[0],b=l[1]-d[1],T=l[2]-d[2];return Math.sqrt(g*g+b*b+T*T)}const ge=Te;function Pe(l,d){const g=l[0]-d[0],b=l[1]-d[1],T=l[2]-d[2];return g*g+b*b+T*T}const ce=Pe;function se(l,d){const g=d??new o(3),b=l[0],T=l[1],W=l[2],H=Math.sqrt(b*b+T*T+W*W);return H>1e-5?(g[0]=b/H,g[1]=T/H,g[2]=W/H):(g[0]=0,g[1]=0,g[2]=0),g}function ie(l,d){const g=d??new o(3);return g[0]=-l[0],g[1]=-l[1],g[2]=-l[2],g}function me(l,d){const g=d??new o(3);return g[0]=l[0],g[1]=l[1],g[2]=l[2],g}const fe=me;function be(l,d,g){const b=g??new o(3);return b[0]=l[0]*d[0],b[1]=l[1]*d[1],b[2]=l[2]*d[2],b}const Me=be;function ye(l,d,g){const b=g??new o(3);return b[0]=l[0]/d[0],b[1]=l[1]/d[1],b[2]=l[2]/d[2],b}const ke=ye;function Ve(l=1,d){const g=d??new o(3),b=Math.random()*2*Math.PI,T=Math.random()*2-1,W=Math.sqrt(1-T*T)*l;return g[0]=Math.cos(b)*W,g[1]=Math.sin(b)*W,g[2]=T*l,g}function A(l){const d=l??new o(3);return d[0]=0,d[1]=0,d[2]=0,d}function Y(l,d,g){const b=g??new o(3),T=l[0],W=l[1],H=l[2],re=d[3]*T+d[7]*W+d[11]*H+d[15]||1;return b[0]=(d[0]*T+d[4]*W+d[8]*H+d[12])/re,b[1]=(d[1]*T+d[5]*W+d[9]*H+d[13])/re,b[2]=(d[2]*T+d[6]*W+d[10]*H+d[14])/re,b}function x(l,d,g){const b=g??new o(3),T=l[0],W=l[1],H=l[2];return b[0]=T*d[0*4+0]+W*d[1*4+0]+H*d[2*4+0],b[1]=T*d[0*4+1]+W*d[1*4+1]+H*d[2*4+1],b[2]=T*d[0*4+2]+W*d[1*4+2]+H*d[2*4+2],b}function i(l,d,g){const b=g??new o(3),T=l[0],W=l[1],H=l[2];return b[0]=T*d[0]+W*d[4]+H*d[8],b[1]=T*d[1]+W*d[5]+H*d[9],b[2]=T*d[2]+W*d[6]+H*d[10],b}function m(l,d,g){const b=g??new o(3),T=d[0],W=d[1],H=d[2],re=d[3]*2,J=l[0],I=l[1],oe=l[2],we=W*oe-H*I,ue=H*J-T*oe,pe=T*I-W*J;return b[0]=J+we*re+(W*pe-H*ue)*2,b[1]=I+ue*re+(H*we-T*pe)*2,b[2]=oe+pe*re+(T*ue-W*we)*2,b}function p(l,d){const g=d??new o(3);return g[0]=l[12],g[1]=l[13],g[2]=l[14],g}function v(l,d,g){const b=g??new o(3),T=d*4;return b[0]=l[T+0],b[1]=l[T+1],b[2]=l[T+2],b}function y(l,d){const g=d??new o(3),b=l[0],T=l[1],W=l[2],H=l[4],re=l[5],J=l[6],I=l[8],oe=l[9],we=l[10];return g[0]=Math.sqrt(b*b+T*T+W*W),g[1]=Math.sqrt(H*H+re*re+J*J),g[2]=Math.sqrt(I*I+oe*oe+we*we),g}function C(l,d,g,b){const T=b??new o(3),W=[],H=[];return W[0]=l[0]-d[0],W[1]=l[1]-d[1],W[2]=l[2]-d[2],H[0]=W[0],H[1]=W[1]*Math.cos(g)-W[2]*Math.sin(g),H[2]=W[1]*Math.sin(g)+W[2]*Math.cos(g),T[0]=H[0]+d[0],T[1]=H[1]+d[1],T[2]=H[2]+d[2],T}function k(l,d,g,b){const T=b??new o(3),W=[],H=[];return W[0]=l[0]-d[0],W[1]=l[1]-d[1],W[2]=l[2]-d[2],H[0]=W[2]*Math.sin(g)+W[0]*Math.cos(g),H[1]=W[1],H[2]=W[2]*Math.cos(g)-W[0]*Math.sin(g),T[0]=H[0]+d[0],T[1]=H[1]+d[1],T[2]=H[2]+d[2],T}function r(l,d,g,b){const T=b??new o(3),W=[],H=[];return W[0]=l[0]-d[0],W[1]=l[1]-d[1],W[2]=l[2]-d[2],H[0]=W[0]*Math.cos(g)-W[1]*Math.sin(g),H[1]=W[0]*Math.sin(g)+W[1]*Math.cos(g),H[2]=W[2],T[0]=H[0]+d[0],T[1]=H[1]+d[1],T[2]=H[2]+d[2],T}function h(l,d,g){const b=g??new o(3);return se(l,b),M(b,d,b)}function u(l,d,g){const b=g??new o(3);return te(l)>d?h(l,d,b):me(l,b)}function f(l,d,g){const b=g??new o(3);return L(l,d,.5,b)}return{create:a,fromValues:_,set:P,ceil:w,floor:E,round:B,clamp:$,add:R,addScaled:V,angle:q,subtract:U,sub:Z,equalsApproximately:X,equals:O,lerp:L,lerpV:F,max:N,min:j,mulScalar:M,scale:K,divScalar:ae,inverse:ve,invert:de,cross:ne,dot:_e,length:te,len:Fe,lengthSq:Ge,lenSq:Ie,distance:Te,dist:ge,distanceSq:Pe,distSq:ce,normalize:se,negate:ie,copy:me,clone:fe,multiply:be,mul:Me,divide:ye,div:ke,random:Ve,zero:A,transformMat4:Y,transformMat4Upper3x3:x,transformMat3:i,transformQuat:m,getTranslation:p,getAxis:v,getScaling:y,rotateX:C,rotateY:k,rotateZ:r,setLength:h,truncate:u,midpoint:f}}const Zr=new Map;function ls(o){let a=Zr.get(o);return a||(a=Cl(o),Zr.set(o,a)),a}function kl(o){const a=hi(o),_=ls(o);function P(i,m,p,v,y,C,k,r,h){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,m!==void 0&&(u[1]=m,p!==void 0&&(u[2]=p,v!==void 0&&(u[4]=v,y!==void 0&&(u[5]=y,C!==void 0&&(u[6]=C,k!==void 0&&(u[8]=k,r!==void 0&&(u[9]=r,h!==void 0&&(u[10]=h))))))))),u}function w(i,m,p,v,y,C,k,r,h,u){const f=u??new o(12);return f[0]=i,f[1]=m,f[2]=p,f[3]=0,f[4]=v,f[5]=y,f[6]=C,f[7]=0,f[8]=k,f[9]=r,f[10]=h,f[11]=0,f}function E(i,m){const p=m??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=0,p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=0,p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=0,p}function B(i,m){const p=m??new o(12),v=i[0],y=i[1],C=i[2],k=i[3],r=v+v,h=y+y,u=C+C,f=v*r,l=y*r,d=y*h,g=C*r,b=C*h,T=C*u,W=k*r,H=k*h,re=k*u;return p[0]=1-d-T,p[1]=l+re,p[2]=g-H,p[3]=0,p[4]=l-re,p[5]=1-f-T,p[6]=b+W,p[7]=0,p[8]=g+H,p[9]=b-W,p[10]=1-f-d,p[11]=0,p}function $(i,m){const p=m??new o(12);return p[0]=-i[0],p[1]=-i[1],p[2]=-i[2],p[4]=-i[4],p[5]=-i[5],p[6]=-i[6],p[8]=-i[8],p[9]=-i[9],p[10]=-i[10],p}function R(i,m,p){const v=p??new o(12);return v[0]=i[0]*m,v[1]=i[1]*m,v[2]=i[2]*m,v[4]=i[4]*m,v[5]=i[5]*m,v[6]=i[6]*m,v[8]=i[8]*m,v[9]=i[9]*m,v[10]=i[10]*m,v}const V=R;function q(i,m,p){const v=p??new o(12);return v[0]=i[0]+m[0],v[1]=i[1]+m[1],v[2]=i[2]+m[2],v[4]=i[4]+m[4],v[5]=i[5]+m[5],v[6]=i[6]+m[6],v[8]=i[8]+m[8],v[9]=i[9]+m[9],v[10]=i[10]+m[10],v}function U(i,m){const p=m??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[8]=i[8],p[9]=i[9],p[10]=i[10],p}const Z=U;function X(i,m){return Math.abs(i[0]-m[0])<De&&Math.abs(i[1]-m[1])<De&&Math.abs(i[2]-m[2])<De&&Math.abs(i[4]-m[4])<De&&Math.abs(i[5]-m[5])<De&&Math.abs(i[6]-m[6])<De&&Math.abs(i[8]-m[8])<De&&Math.abs(i[9]-m[9])<De&&Math.abs(i[10]-m[10])<De}function O(i,m){return i[0]===m[0]&&i[1]===m[1]&&i[2]===m[2]&&i[4]===m[4]&&i[5]===m[5]&&i[6]===m[6]&&i[8]===m[8]&&i[9]===m[9]&&i[10]===m[10]}function L(i){const m=i??new o(12);return m[0]=1,m[1]=0,m[2]=0,m[4]=0,m[5]=1,m[6]=0,m[8]=0,m[9]=0,m[10]=1,m}function F(i,m){const p=m??new o(12);if(p===i){let d;return d=i[1],i[1]=i[4],i[4]=d,d=i[2],i[2]=i[8],i[8]=d,d=i[6],i[6]=i[9],i[9]=d,p}const v=i[0*4+0],y=i[0*4+1],C=i[0*4+2],k=i[1*4+0],r=i[1*4+1],h=i[1*4+2],u=i[2*4+0],f=i[2*4+1],l=i[2*4+2];return p[0]=v,p[1]=k,p[2]=u,p[4]=y,p[5]=r,p[6]=f,p[8]=C,p[9]=h,p[10]=l,p}function N(i,m){const p=m??new o(12),v=i[0*4+0],y=i[0*4+1],C=i[0*4+2],k=i[1*4+0],r=i[1*4+1],h=i[1*4+2],u=i[2*4+0],f=i[2*4+1],l=i[2*4+2],d=l*r-h*f,g=-l*k+h*u,b=f*k-r*u,T=1/(v*d+y*g+C*b);return p[0]=d*T,p[1]=(-l*y+C*f)*T,p[2]=(h*y-C*r)*T,p[4]=g*T,p[5]=(l*v-C*u)*T,p[6]=(-h*v+C*k)*T,p[8]=b*T,p[9]=(-f*v+y*u)*T,p[10]=(r*v-y*k)*T,p}function j(i){const m=i[0],p=i[0*4+1],v=i[0*4+2],y=i[1*4+0],C=i[1*4+1],k=i[1*4+2],r=i[2*4+0],h=i[2*4+1],u=i[2*4+2];return m*(C*u-h*k)-y*(p*u-h*v)+r*(p*k-C*v)}const M=N;function K(i,m,p){const v=p??new o(12),y=i[0],C=i[1],k=i[2],r=i[4+0],h=i[4+1],u=i[4+2],f=i[8+0],l=i[8+1],d=i[8+2],g=m[0],b=m[1],T=m[2],W=m[4+0],H=m[4+1],re=m[4+2],J=m[8+0],I=m[8+1],oe=m[8+2];return v[0]=y*g+r*b+f*T,v[1]=C*g+h*b+l*T,v[2]=k*g+u*b+d*T,v[4]=y*W+r*H+f*re,v[5]=C*W+h*H+l*re,v[6]=k*W+u*H+d*re,v[8]=y*J+r*I+f*oe,v[9]=C*J+h*I+l*oe,v[10]=k*J+u*I+d*oe,v}const ae=K;function ve(i,m,p){const v=p??L();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=m[0],v[9]=m[1],v[10]=1,v}function de(i,m){const p=m??a.create();return p[0]=i[8],p[1]=i[9],p}function ne(i,m,p){const v=p??a.create(),y=m*4;return v[0]=i[y+0],v[1]=i[y+1],v}function _e(i,m,p,v){const y=v===i?i:U(i,v),C=p*4;return y[C+0]=m[0],y[C+1]=m[1],y}function te(i,m){const p=m??a.create(),v=i[0],y=i[1],C=i[4],k=i[5];return p[0]=Math.sqrt(v*v+y*y),p[1]=Math.sqrt(C*C+k*k),p}function Fe(i,m){const p=m??_.create(),v=i[0],y=i[1],C=i[2],k=i[4],r=i[5],h=i[6],u=i[8],f=i[9],l=i[10];return p[0]=Math.sqrt(v*v+y*y+C*C),p[1]=Math.sqrt(k*k+r*r+h*h),p[2]=Math.sqrt(u*u+f*f+l*l),p}function Ge(i,m){const p=m??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=i[0],p[9]=i[1],p[10]=1,p}function Ie(i,m,p){const v=p??new o(12),y=m[0],C=m[1],k=i[0],r=i[1],h=i[2],u=i[1*4+0],f=i[1*4+1],l=i[1*4+2],d=i[2*4+0],g=i[2*4+1],b=i[2*4+2];return i!==v&&(v[0]=k,v[1]=r,v[2]=h,v[4]=u,v[5]=f,v[6]=l),v[8]=k*y+u*C+d,v[9]=r*y+f*C+g,v[10]=h*y+l*C+b,v}function Te(i,m){const p=m??new o(12),v=Math.cos(i),y=Math.sin(i);return p[0]=v,p[1]=y,p[2]=0,p[4]=-y,p[5]=v,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ge(i,m,p){const v=p??new o(12),y=i[0*4+0],C=i[0*4+1],k=i[0*4+2],r=i[1*4+0],h=i[1*4+1],u=i[1*4+2],f=Math.cos(m),l=Math.sin(m);return v[0]=f*y+l*r,v[1]=f*C+l*h,v[2]=f*k+l*u,v[4]=f*r-l*y,v[5]=f*h-l*C,v[6]=f*u-l*k,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function Pe(i,m){const p=m??new o(12),v=Math.cos(i),y=Math.sin(i);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=v,p[6]=y,p[8]=0,p[9]=-y,p[10]=v,p}function ce(i,m,p){const v=p??new o(12),y=i[4],C=i[5],k=i[6],r=i[8],h=i[9],u=i[10],f=Math.cos(m),l=Math.sin(m);return v[4]=f*y+l*r,v[5]=f*C+l*h,v[6]=f*k+l*u,v[8]=f*r-l*y,v[9]=f*h-l*C,v[10]=f*u-l*k,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function se(i,m){const p=m??new o(12),v=Math.cos(i),y=Math.sin(i);return p[0]=v,p[1]=0,p[2]=-y,p[4]=0,p[5]=1,p[6]=0,p[8]=y,p[9]=0,p[10]=v,p}function ie(i,m,p){const v=p??new o(12),y=i[0*4+0],C=i[0*4+1],k=i[0*4+2],r=i[2*4+0],h=i[2*4+1],u=i[2*4+2],f=Math.cos(m),l=Math.sin(m);return v[0]=f*y-l*r,v[1]=f*C-l*h,v[2]=f*k-l*u,v[8]=f*r+l*y,v[9]=f*h+l*C,v[10]=f*u+l*k,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const me=Te,fe=ge;function be(i,m){const p=m??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Me(i,m,p){const v=p??new o(12),y=m[0],C=m[1];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=C*i[1*4+0],v[5]=C*i[1*4+1],v[6]=C*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ye(i,m){const p=m??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=i[2],p}function ke(i,m,p){const v=p??new o(12),y=m[0],C=m[1],k=m[2];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=C*i[1*4+0],v[5]=C*i[1*4+1],v[6]=C*i[1*4+2],v[8]=k*i[2*4+0],v[9]=k*i[2*4+1],v[10]=k*i[2*4+2],v}function Ve(i,m){const p=m??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function A(i,m,p){const v=p??new o(12);return v[0]=m*i[0*4+0],v[1]=m*i[0*4+1],v[2]=m*i[0*4+2],v[4]=m*i[1*4+0],v[5]=m*i[1*4+1],v[6]=m*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function Y(i,m){const p=m??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=i,p}function x(i,m,p){const v=p??new o(12);return v[0]=m*i[0*4+0],v[1]=m*i[0*4+1],v[2]=m*i[0*4+2],v[4]=m*i[1*4+0],v[5]=m*i[1*4+1],v[6]=m*i[1*4+2],v[8]=m*i[2*4+0],v[9]=m*i[2*4+1],v[10]=m*i[2*4+2],v}return{add:q,clone:Z,copy:U,create:P,determinant:j,equals:O,equalsApproximately:X,fromMat4:E,fromQuat:B,get3DScaling:Fe,getAxis:ne,getScaling:te,getTranslation:de,identity:L,inverse:N,invert:M,mul:ae,mulScalar:V,multiply:K,multiplyScalar:R,negate:$,rotate:ge,rotateX:ce,rotateY:ie,rotateZ:fe,rotation:Te,rotationX:Pe,rotationY:se,rotationZ:me,scale:Me,scale3D:ke,scaling:be,scaling3D:ye,set:w,setAxis:_e,setTranslation:ve,translate:Ie,translation:Ge,transpose:F,uniformScale:A,uniformScale3D:x,uniformScaling:Ve,uniformScaling3D:Y}}const Xr=new Map;function Bl(o){let a=Xr.get(o);return a||(a=kl(o),Xr.set(o,a)),a}function Tl(o){const a=ls(o);function _(r,h,u,f,l,d,g,b,T,W,H,re,J,I,oe,we){const ue=new o(16);return r!==void 0&&(ue[0]=r,h!==void 0&&(ue[1]=h,u!==void 0&&(ue[2]=u,f!==void 0&&(ue[3]=f,l!==void 0&&(ue[4]=l,d!==void 0&&(ue[5]=d,g!==void 0&&(ue[6]=g,b!==void 0&&(ue[7]=b,T!==void 0&&(ue[8]=T,W!==void 0&&(ue[9]=W,H!==void 0&&(ue[10]=H,re!==void 0&&(ue[11]=re,J!==void 0&&(ue[12]=J,I!==void 0&&(ue[13]=I,oe!==void 0&&(ue[14]=oe,we!==void 0&&(ue[15]=we)))))))))))))))),ue}function P(r,h,u,f,l,d,g,b,T,W,H,re,J,I,oe,we,ue){const pe=ue??new o(16);return pe[0]=r,pe[1]=h,pe[2]=u,pe[3]=f,pe[4]=l,pe[5]=d,pe[6]=g,pe[7]=b,pe[8]=T,pe[9]=W,pe[10]=H,pe[11]=re,pe[12]=J,pe[13]=I,pe[14]=oe,pe[15]=we,pe}function w(r,h){const u=h??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(r,h){const u=h??new o(16),f=r[0],l=r[1],d=r[2],g=r[3],b=f+f,T=l+l,W=d+d,H=f*b,re=l*b,J=l*T,I=d*b,oe=d*T,we=d*W,ue=g*b,pe=g*T,Ae=g*W;return u[0]=1-J-we,u[1]=re+Ae,u[2]=I-pe,u[3]=0,u[4]=re-Ae,u[5]=1-H-we,u[6]=oe+ue,u[7]=0,u[8]=I+pe,u[9]=oe-ue,u[10]=1-H-J,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function B(r,h){const u=h??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function $(r,h,u){const f=u??new o(16);return f[0]=r[0]+h[0],f[1]=r[1]+h[1],f[2]=r[2]+h[2],f[3]=r[3]+h[3],f[4]=r[4]+h[4],f[5]=r[5]+h[5],f[6]=r[6]+h[6],f[7]=r[7]+h[7],f[8]=r[8]+h[8],f[9]=r[9]+h[9],f[10]=r[10]+h[10],f[11]=r[11]+h[11],f[12]=r[12]+h[12],f[13]=r[13]+h[13],f[14]=r[14]+h[14],f[15]=r[15]+h[15],f}function R(r,h,u){const f=u??new o(16);return f[0]=r[0]*h,f[1]=r[1]*h,f[2]=r[2]*h,f[3]=r[3]*h,f[4]=r[4]*h,f[5]=r[5]*h,f[6]=r[6]*h,f[7]=r[7]*h,f[8]=r[8]*h,f[9]=r[9]*h,f[10]=r[10]*h,f[11]=r[11]*h,f[12]=r[12]*h,f[13]=r[13]*h,f[14]=r[14]*h,f[15]=r[15]*h,f}const V=R;function q(r,h){const u=h??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const U=q;function Z(r,h){return Math.abs(r[0]-h[0])<De&&Math.abs(r[1]-h[1])<De&&Math.abs(r[2]-h[2])<De&&Math.abs(r[3]-h[3])<De&&Math.abs(r[4]-h[4])<De&&Math.abs(r[5]-h[5])<De&&Math.abs(r[6]-h[6])<De&&Math.abs(r[7]-h[7])<De&&Math.abs(r[8]-h[8])<De&&Math.abs(r[9]-h[9])<De&&Math.abs(r[10]-h[10])<De&&Math.abs(r[11]-h[11])<De&&Math.abs(r[12]-h[12])<De&&Math.abs(r[13]-h[13])<De&&Math.abs(r[14]-h[14])<De&&Math.abs(r[15]-h[15])<De}function X(r,h){return r[0]===h[0]&&r[1]===h[1]&&r[2]===h[2]&&r[3]===h[3]&&r[4]===h[4]&&r[5]===h[5]&&r[6]===h[6]&&r[7]===h[7]&&r[8]===h[8]&&r[9]===h[9]&&r[10]===h[10]&&r[11]===h[11]&&r[12]===h[12]&&r[13]===h[13]&&r[14]===h[14]&&r[15]===h[15]}function O(r){const h=r??new o(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function L(r,h){const u=h??new o(16);if(u===r){let Ee;return Ee=r[1],r[1]=r[4],r[4]=Ee,Ee=r[2],r[2]=r[8],r[8]=Ee,Ee=r[3],r[3]=r[12],r[12]=Ee,Ee=r[6],r[6]=r[9],r[9]=Ee,Ee=r[7],r[7]=r[13],r[13]=Ee,Ee=r[11],r[11]=r[14],r[14]=Ee,u}const f=r[0*4+0],l=r[0*4+1],d=r[0*4+2],g=r[0*4+3],b=r[1*4+0],T=r[1*4+1],W=r[1*4+2],H=r[1*4+3],re=r[2*4+0],J=r[2*4+1],I=r[2*4+2],oe=r[2*4+3],we=r[3*4+0],ue=r[3*4+1],pe=r[3*4+2],Ae=r[3*4+3];return u[0]=f,u[1]=b,u[2]=re,u[3]=we,u[4]=l,u[5]=T,u[6]=J,u[7]=ue,u[8]=d,u[9]=W,u[10]=I,u[11]=pe,u[12]=g,u[13]=H,u[14]=oe,u[15]=Ae,u}function F(r,h){const u=h??new o(16),f=r[0*4+0],l=r[0*4+1],d=r[0*4+2],g=r[0*4+3],b=r[1*4+0],T=r[1*4+1],W=r[1*4+2],H=r[1*4+3],re=r[2*4+0],J=r[2*4+1],I=r[2*4+2],oe=r[2*4+3],we=r[3*4+0],ue=r[3*4+1],pe=r[3*4+2],Ae=r[3*4+3],Ee=I*Ae,We=pe*oe,Ye=W*Ae,He=pe*H,Le=W*oe,Ze=I*H,nt=d*Ae,it=pe*g,ot=d*oe,Ue=I*g,st=d*H,rt=W*g,je=re*ue,Qe=we*J,Xe=b*ue,dt=we*T,Je=b*J,Mt=re*T,xt=f*ue,yt=we*l,Pt=f*J,At=re*l,Dt=f*T,Gt=b*l,Xt=Ee*T+He*J+Le*ue-(We*T+Ye*J+Ze*ue),St=We*l+nt*J+Ue*ue-(Ee*l+it*J+ot*ue),Qt=Ye*l+it*T+st*ue-(He*l+nt*T+rt*ue),un=Ze*l+ot*T+rt*J-(Le*l+Ue*T+st*J),Ke=1/(f*Xt+b*St+re*Qt+we*un);return u[0]=Ke*Xt,u[1]=Ke*St,u[2]=Ke*Qt,u[3]=Ke*un,u[4]=Ke*(We*b+Ye*re+Ze*we-(Ee*b+He*re+Le*we)),u[5]=Ke*(Ee*f+it*re+ot*we-(We*f+nt*re+Ue*we)),u[6]=Ke*(He*f+nt*b+rt*we-(Ye*f+it*b+st*we)),u[7]=Ke*(Le*f+Ue*b+st*re-(Ze*f+ot*b+rt*re)),u[8]=Ke*(je*H+dt*oe+Je*Ae-(Qe*H+Xe*oe+Mt*Ae)),u[9]=Ke*(Qe*g+xt*oe+At*Ae-(je*g+yt*oe+Pt*Ae)),u[10]=Ke*(Xe*g+yt*H+Dt*Ae-(dt*g+xt*H+Gt*Ae)),u[11]=Ke*(Mt*g+Pt*H+Gt*oe-(Je*g+At*H+Dt*oe)),u[12]=Ke*(Xe*I+Mt*pe+Qe*W-(Je*pe+je*W+dt*I)),u[13]=Ke*(Pt*pe+je*d+yt*I-(xt*I+At*pe+Qe*d)),u[14]=Ke*(xt*W+Gt*pe+dt*d-(Dt*pe+Xe*d+yt*W)),u[15]=Ke*(Dt*I+Je*d+At*W-(Pt*W+Gt*I+Mt*d)),u}function N(r){const h=r[0],u=r[0*4+1],f=r[0*4+2],l=r[0*4+3],d=r[1*4+0],g=r[1*4+1],b=r[1*4+2],T=r[1*4+3],W=r[2*4+0],H=r[2*4+1],re=r[2*4+2],J=r[2*4+3],I=r[3*4+0],oe=r[3*4+1],we=r[3*4+2],ue=r[3*4+3],pe=re*ue,Ae=we*J,Ee=b*ue,We=we*T,Ye=b*J,He=re*T,Le=f*ue,Ze=we*l,nt=f*J,it=re*l,ot=f*T,Ue=b*l,st=pe*g+We*H+Ye*oe-(Ae*g+Ee*H+He*oe),rt=Ae*u+Le*H+it*oe-(pe*u+Ze*H+nt*oe),je=Ee*u+Ze*g+ot*oe-(We*u+Le*g+Ue*oe),Qe=He*u+nt*g+Ue*H-(Ye*u+it*g+ot*H);return h*st+d*rt+W*je+I*Qe}const j=F;function M(r,h,u){const f=u??new o(16),l=r[0],d=r[1],g=r[2],b=r[3],T=r[4+0],W=r[4+1],H=r[4+2],re=r[4+3],J=r[8+0],I=r[8+1],oe=r[8+2],we=r[8+3],ue=r[12+0],pe=r[12+1],Ae=r[12+2],Ee=r[12+3],We=h[0],Ye=h[1],He=h[2],Le=h[3],Ze=h[4+0],nt=h[4+1],it=h[4+2],ot=h[4+3],Ue=h[8+0],st=h[8+1],rt=h[8+2],je=h[8+3],Qe=h[12+0],Xe=h[12+1],dt=h[12+2],Je=h[12+3];return f[0]=l*We+T*Ye+J*He+ue*Le,f[1]=d*We+W*Ye+I*He+pe*Le,f[2]=g*We+H*Ye+oe*He+Ae*Le,f[3]=b*We+re*Ye+we*He+Ee*Le,f[4]=l*Ze+T*nt+J*it+ue*ot,f[5]=d*Ze+W*nt+I*it+pe*ot,f[6]=g*Ze+H*nt+oe*it+Ae*ot,f[7]=b*Ze+re*nt+we*it+Ee*ot,f[8]=l*Ue+T*st+J*rt+ue*je,f[9]=d*Ue+W*st+I*rt+pe*je,f[10]=g*Ue+H*st+oe*rt+Ae*je,f[11]=b*Ue+re*st+we*rt+Ee*je,f[12]=l*Qe+T*Xe+J*dt+ue*Je,f[13]=d*Qe+W*Xe+I*dt+pe*Je,f[14]=g*Qe+H*Xe+oe*dt+Ae*Je,f[15]=b*Qe+re*Xe+we*dt+Ee*Je,f}const K=M;function ae(r,h,u){const f=u??O();return r!==f&&(f[0]=r[0],f[1]=r[1],f[2]=r[2],f[3]=r[3],f[4]=r[4],f[5]=r[5],f[6]=r[6],f[7]=r[7],f[8]=r[8],f[9]=r[9],f[10]=r[10],f[11]=r[11]),f[12]=h[0],f[13]=h[1],f[14]=h[2],f[15]=1,f}function ve(r,h){const u=h??a.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function de(r,h,u){const f=u??a.create(),l=h*4;return f[0]=r[l+0],f[1]=r[l+1],f[2]=r[l+2],f}function ne(r,h,u,f){const l=f===r?f:q(r,f),d=u*4;return l[d+0]=h[0],l[d+1]=h[1],l[d+2]=h[2],l}function _e(r,h){const u=h??a.create(),f=r[0],l=r[1],d=r[2],g=r[4],b=r[5],T=r[6],W=r[8],H=r[9],re=r[10];return u[0]=Math.sqrt(f*f+l*l+d*d),u[1]=Math.sqrt(g*g+b*b+T*T),u[2]=Math.sqrt(W*W+H*H+re*re),u}function te(r,h,u,f,l){const d=l??new o(16),g=Math.tan(Math.PI*.5-.5*r);if(d[0]=g/h,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=g,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,Number.isFinite(f)){const b=1/(u-f);d[10]=f*b,d[14]=f*u*b}else d[10]=-1,d[14]=-u;return d}function Fe(r,h,u,f=1/0,l){const d=l??new o(16),g=1/Math.tan(r*.5);if(d[0]=g/h,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=g,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,f===1/0)d[10]=0,d[14]=u;else{const b=1/(f-u);d[10]=u*b,d[14]=f*u*b}return d}function Ge(r,h,u,f,l,d,g){const b=g??new o(16);return b[0]=2/(h-r),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(f-u),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(l-d),b[11]=0,b[12]=(h+r)/(r-h),b[13]=(f+u)/(u-f),b[14]=l/(l-d),b[15]=1,b}function Ie(r,h,u,f,l,d,g){const b=g??new o(16),T=h-r,W=f-u,H=l-d;return b[0]=2*l/T,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/W,b[6]=0,b[7]=0,b[8]=(r+h)/T,b[9]=(f+u)/W,b[10]=d/H,b[11]=-1,b[12]=0,b[13]=0,b[14]=l*d/H,b[15]=0,b}function Te(r,h,u,f,l,d=1/0,g){const b=g??new o(16),T=h-r,W=f-u;if(b[0]=2*l/T,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/W,b[6]=0,b[7]=0,b[8]=(r+h)/T,b[9]=(f+u)/W,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,d===1/0)b[10]=0,b[14]=l;else{const H=1/(d-l);b[10]=l*H,b[14]=d*l*H}return b}const ge=a.create(),Pe=a.create(),ce=a.create();function se(r,h,u,f){const l=f??new o(16);return a.normalize(a.subtract(h,r,ce),ce),a.normalize(a.cross(u,ce,ge),ge),a.normalize(a.cross(ce,ge,Pe),Pe),l[0]=ge[0],l[1]=ge[1],l[2]=ge[2],l[3]=0,l[4]=Pe[0],l[5]=Pe[1],l[6]=Pe[2],l[7]=0,l[8]=ce[0],l[9]=ce[1],l[10]=ce[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ie(r,h,u,f){const l=f??new o(16);return a.normalize(a.subtract(r,h,ce),ce),a.normalize(a.cross(u,ce,ge),ge),a.normalize(a.cross(ce,ge,Pe),Pe),l[0]=ge[0],l[1]=ge[1],l[2]=ge[2],l[3]=0,l[4]=Pe[0],l[5]=Pe[1],l[6]=Pe[2],l[7]=0,l[8]=ce[0],l[9]=ce[1],l[10]=ce[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function me(r,h,u,f){const l=f??new o(16);return a.normalize(a.subtract(r,h,ce),ce),a.normalize(a.cross(u,ce,ge),ge),a.normalize(a.cross(ce,ge,Pe),Pe),l[0]=ge[0],l[1]=Pe[0],l[2]=ce[0],l[3]=0,l[4]=ge[1],l[5]=Pe[1],l[6]=ce[1],l[7]=0,l[8]=ge[2],l[9]=Pe[2],l[10]=ce[2],l[11]=0,l[12]=-(ge[0]*r[0]+ge[1]*r[1]+ge[2]*r[2]),l[13]=-(Pe[0]*r[0]+Pe[1]*r[1]+Pe[2]*r[2]),l[14]=-(ce[0]*r[0]+ce[1]*r[1]+ce[2]*r[2]),l[15]=1,l}function fe(r,h){const u=h??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function be(r,h,u){const f=u??new o(16),l=h[0],d=h[1],g=h[2],b=r[0],T=r[1],W=r[2],H=r[3],re=r[1*4+0],J=r[1*4+1],I=r[1*4+2],oe=r[1*4+3],we=r[2*4+0],ue=r[2*4+1],pe=r[2*4+2],Ae=r[2*4+3],Ee=r[3*4+0],We=r[3*4+1],Ye=r[3*4+2],He=r[3*4+3];return r!==f&&(f[0]=b,f[1]=T,f[2]=W,f[3]=H,f[4]=re,f[5]=J,f[6]=I,f[7]=oe,f[8]=we,f[9]=ue,f[10]=pe,f[11]=Ae),f[12]=b*l+re*d+we*g+Ee,f[13]=T*l+J*d+ue*g+We,f[14]=W*l+I*d+pe*g+Ye,f[15]=H*l+oe*d+Ae*g+He,f}function Me(r,h){const u=h??new o(16),f=Math.cos(r),l=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=f,u[6]=l,u[7]=0,u[8]=0,u[9]=-l,u[10]=f,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ye(r,h,u){const f=u??new o(16),l=r[4],d=r[5],g=r[6],b=r[7],T=r[8],W=r[9],H=r[10],re=r[11],J=Math.cos(h),I=Math.sin(h);return f[4]=J*l+I*T,f[5]=J*d+I*W,f[6]=J*g+I*H,f[7]=J*b+I*re,f[8]=J*T-I*l,f[9]=J*W-I*d,f[10]=J*H-I*g,f[11]=J*re-I*b,r!==f&&(f[0]=r[0],f[1]=r[1],f[2]=r[2],f[3]=r[3],f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function ke(r,h){const u=h??new o(16),f=Math.cos(r),l=Math.sin(r);return u[0]=f,u[1]=0,u[2]=-l,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=l,u[9]=0,u[10]=f,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Ve(r,h,u){const f=u??new o(16),l=r[0*4+0],d=r[0*4+1],g=r[0*4+2],b=r[0*4+3],T=r[2*4+0],W=r[2*4+1],H=r[2*4+2],re=r[2*4+3],J=Math.cos(h),I=Math.sin(h);return f[0]=J*l-I*T,f[1]=J*d-I*W,f[2]=J*g-I*H,f[3]=J*b-I*re,f[8]=J*T+I*l,f[9]=J*W+I*d,f[10]=J*H+I*g,f[11]=J*re+I*b,r!==f&&(f[4]=r[4],f[5]=r[5],f[6]=r[6],f[7]=r[7],f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function A(r,h){const u=h??new o(16),f=Math.cos(r),l=Math.sin(r);return u[0]=f,u[1]=l,u[2]=0,u[3]=0,u[4]=-l,u[5]=f,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Y(r,h,u){const f=u??new o(16),l=r[0*4+0],d=r[0*4+1],g=r[0*4+2],b=r[0*4+3],T=r[1*4+0],W=r[1*4+1],H=r[1*4+2],re=r[1*4+3],J=Math.cos(h),I=Math.sin(h);return f[0]=J*l+I*T,f[1]=J*d+I*W,f[2]=J*g+I*H,f[3]=J*b+I*re,f[4]=J*T-I*l,f[5]=J*W-I*d,f[6]=J*H-I*g,f[7]=J*re-I*b,r!==f&&(f[8]=r[8],f[9]=r[9],f[10]=r[10],f[11]=r[11],f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function x(r,h,u){const f=u??new o(16);let l=r[0],d=r[1],g=r[2];const b=Math.sqrt(l*l+d*d+g*g);l/=b,d/=b,g/=b;const T=l*l,W=d*d,H=g*g,re=Math.cos(h),J=Math.sin(h),I=1-re;return f[0]=T+(1-T)*re,f[1]=l*d*I+g*J,f[2]=l*g*I-d*J,f[3]=0,f[4]=l*d*I-g*J,f[5]=W+(1-W)*re,f[6]=d*g*I+l*J,f[7]=0,f[8]=l*g*I+d*J,f[9]=d*g*I-l*J,f[10]=H+(1-H)*re,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}const i=x;function m(r,h,u,f){const l=f??new o(16);let d=h[0],g=h[1],b=h[2];const T=Math.sqrt(d*d+g*g+b*b);d/=T,g/=T,b/=T;const W=d*d,H=g*g,re=b*b,J=Math.cos(u),I=Math.sin(u),oe=1-J,we=W+(1-W)*J,ue=d*g*oe+b*I,pe=d*b*oe-g*I,Ae=d*g*oe-b*I,Ee=H+(1-H)*J,We=g*b*oe+d*I,Ye=d*b*oe+g*I,He=g*b*oe-d*I,Le=re+(1-re)*J,Ze=r[0],nt=r[1],it=r[2],ot=r[3],Ue=r[4],st=r[5],rt=r[6],je=r[7],Qe=r[8],Xe=r[9],dt=r[10],Je=r[11];return l[0]=we*Ze+ue*Ue+pe*Qe,l[1]=we*nt+ue*st+pe*Xe,l[2]=we*it+ue*rt+pe*dt,l[3]=we*ot+ue*je+pe*Je,l[4]=Ae*Ze+Ee*Ue+We*Qe,l[5]=Ae*nt+Ee*st+We*Xe,l[6]=Ae*it+Ee*rt+We*dt,l[7]=Ae*ot+Ee*je+We*Je,l[8]=Ye*Ze+He*Ue+Le*Qe,l[9]=Ye*nt+He*st+Le*Xe,l[10]=Ye*it+He*rt+Le*dt,l[11]=Ye*ot+He*je+Le*Je,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const p=m;function v(r,h){const u=h??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(r,h,u){const f=u??new o(16),l=h[0],d=h[1],g=h[2];return f[0]=l*r[0*4+0],f[1]=l*r[0*4+1],f[2]=l*r[0*4+2],f[3]=l*r[0*4+3],f[4]=d*r[1*4+0],f[5]=d*r[1*4+1],f[6]=d*r[1*4+2],f[7]=d*r[1*4+3],f[8]=g*r[2*4+0],f[9]=g*r[2*4+1],f[10]=g*r[2*4+2],f[11]=g*r[2*4+3],r!==f&&(f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function C(r,h){const u=h??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,h,u){const f=u??new o(16);return f[0]=h*r[0*4+0],f[1]=h*r[0*4+1],f[2]=h*r[0*4+2],f[3]=h*r[0*4+3],f[4]=h*r[1*4+0],f[5]=h*r[1*4+1],f[6]=h*r[1*4+2],f[7]=h*r[1*4+3],f[8]=h*r[2*4+0],f[9]=h*r[2*4+1],f[10]=h*r[2*4+2],f[11]=h*r[2*4+3],r!==f&&(f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}return{add:$,aim:se,axisRotate:m,axisRotation:x,cameraAim:ie,clone:U,copy:q,create:_,determinant:N,equals:X,equalsApproximately:Z,fromMat3:w,fromQuat:E,frustum:Ie,frustumReverseZ:Te,getAxis:de,getScaling:_e,getTranslation:ve,identity:O,inverse:F,invert:j,lookAt:me,mul:K,mulScalar:V,multiply:M,multiplyScalar:R,negate:B,ortho:Ge,perspective:te,perspectiveReverseZ:Fe,rotate:p,rotateX:ye,rotateY:Ve,rotateZ:Y,rotation:i,rotationX:Me,rotationY:ke,rotationZ:A,scale:y,scaling:v,set:P,setAxis:ne,setTranslation:ae,translate:be,translation:fe,transpose:L,uniformScale:k,uniformScaling:C}}const Qr=new Map;function Ml(o){let a=Qr.get(o);return a||(a=Tl(o),Qr.set(o,a)),a}function Al(o){const a=ls(o);function _(A,Y,x,i){const m=new o(4);return A!==void 0&&(m[0]=A,Y!==void 0&&(m[1]=Y,x!==void 0&&(m[2]=x,i!==void 0&&(m[3]=i)))),m}const P=_;function w(A,Y,x,i,m){const p=m??new o(4);return p[0]=A,p[1]=Y,p[2]=x,p[3]=i,p}function E(A,Y,x){const i=x??new o(4),m=Y*.5,p=Math.sin(m);return i[0]=p*A[0],i[1]=p*A[1],i[2]=p*A[2],i[3]=Math.cos(m),i}function B(A,Y){const x=Y??a.create(3),i=Math.acos(A[3])*2,m=Math.sin(i*.5);return m>De?(x[0]=A[0]/m,x[1]=A[1]/m,x[2]=A[2]/m):(x[0]=1,x[1]=0,x[2]=0),{angle:i,axis:x}}function $(A,Y){const x=te(A,Y);return Math.acos(2*x*x-1)}function R(A,Y,x){const i=x??new o(4),m=A[0],p=A[1],v=A[2],y=A[3],C=Y[0],k=Y[1],r=Y[2],h=Y[3];return i[0]=m*h+y*C+p*r-v*k,i[1]=p*h+y*k+v*C-m*r,i[2]=v*h+y*r+m*k-p*C,i[3]=y*h-m*C-p*k-v*r,i}const V=R;function q(A,Y,x){const i=x??new o(4),m=Y*.5,p=A[0],v=A[1],y=A[2],C=A[3],k=Math.sin(m),r=Math.cos(m);return i[0]=p*r+C*k,i[1]=v*r+y*k,i[2]=y*r-v*k,i[3]=C*r-p*k,i}function U(A,Y,x){const i=x??new o(4),m=Y*.5,p=A[0],v=A[1],y=A[2],C=A[3],k=Math.sin(m),r=Math.cos(m);return i[0]=p*r-y*k,i[1]=v*r+C*k,i[2]=y*r+p*k,i[3]=C*r-v*k,i}function Z(A,Y,x){const i=x??new o(4),m=Y*.5,p=A[0],v=A[1],y=A[2],C=A[3],k=Math.sin(m),r=Math.cos(m);return i[0]=p*r+v*k,i[1]=v*r-p*k,i[2]=y*r+C*k,i[3]=C*r-y*k,i}function X(A,Y,x,i){const m=i??new o(4),p=A[0],v=A[1],y=A[2],C=A[3];let k=Y[0],r=Y[1],h=Y[2],u=Y[3],f=p*k+v*r+y*h+C*u;f<0&&(f=-f,k=-k,r=-r,h=-h,u=-u);let l,d;if(1-f>De){const g=Math.acos(f),b=Math.sin(g);l=Math.sin((1-x)*g)/b,d=Math.sin(x*g)/b}else l=1-x,d=x;return m[0]=l*p+d*k,m[1]=l*v+d*r,m[2]=l*y+d*h,m[3]=l*C+d*u,m}function O(A,Y){const x=Y??new o(4),i=A[0],m=A[1],p=A[2],v=A[3],y=i*i+m*m+p*p+v*v,C=y?1/y:0;return x[0]=-i*C,x[1]=-m*C,x[2]=-p*C,x[3]=v*C,x}function L(A,Y){const x=Y??new o(4);return x[0]=-A[0],x[1]=-A[1],x[2]=-A[2],x[3]=A[3],x}function F(A,Y){const x=Y??new o(4),i=A[0]+A[5]+A[10];if(i>0){const m=Math.sqrt(i+1);x[3]=.5*m;const p=.5/m;x[0]=(A[6]-A[9])*p,x[1]=(A[8]-A[2])*p,x[2]=(A[1]-A[4])*p}else{let m=0;A[5]>A[0]&&(m=1),A[10]>A[m*4+m]&&(m=2);const p=(m+1)%3,v=(m+2)%3,y=Math.sqrt(A[m*4+m]-A[p*4+p]-A[v*4+v]+1);x[m]=.5*y;const C=.5/y;x[3]=(A[p*4+v]-A[v*4+p])*C,x[p]=(A[p*4+m]+A[m*4+p])*C,x[v]=(A[v*4+m]+A[m*4+v])*C}return x}function N(A,Y,x,i,m){const p=m??new o(4),v=A*.5,y=Y*.5,C=x*.5,k=Math.sin(v),r=Math.cos(v),h=Math.sin(y),u=Math.cos(y),f=Math.sin(C),l=Math.cos(C);switch(i){case"xyz":p[0]=k*u*l+r*h*f,p[1]=r*h*l-k*u*f,p[2]=r*u*f+k*h*l,p[3]=r*u*l-k*h*f;break;case"xzy":p[0]=k*u*l-r*h*f,p[1]=r*h*l-k*u*f,p[2]=r*u*f+k*h*l,p[3]=r*u*l+k*h*f;break;case"yxz":p[0]=k*u*l+r*h*f,p[1]=r*h*l-k*u*f,p[2]=r*u*f-k*h*l,p[3]=r*u*l+k*h*f;break;case"yzx":p[0]=k*u*l+r*h*f,p[1]=r*h*l+k*u*f,p[2]=r*u*f-k*h*l,p[3]=r*u*l-k*h*f;break;case"zxy":p[0]=k*u*l-r*h*f,p[1]=r*h*l+k*u*f,p[2]=r*u*f+k*h*l,p[3]=r*u*l-k*h*f;break;case"zyx":p[0]=k*u*l-r*h*f,p[1]=r*h*l+k*u*f,p[2]=r*u*f-k*h*l,p[3]=r*u*l+k*h*f;break;default:throw new Error(`Unknown rotation order: ${i}`)}return p}function j(A,Y){const x=Y??new o(4);return x[0]=A[0],x[1]=A[1],x[2]=A[2],x[3]=A[3],x}const M=j;function K(A,Y,x){const i=x??new o(4);return i[0]=A[0]+Y[0],i[1]=A[1]+Y[1],i[2]=A[2]+Y[2],i[3]=A[3]+Y[3],i}function ae(A,Y,x){const i=x??new o(4);return i[0]=A[0]-Y[0],i[1]=A[1]-Y[1],i[2]=A[2]-Y[2],i[3]=A[3]-Y[3],i}const ve=ae;function de(A,Y,x){const i=x??new o(4);return i[0]=A[0]*Y,i[1]=A[1]*Y,i[2]=A[2]*Y,i[3]=A[3]*Y,i}const ne=de;function _e(A,Y,x){const i=x??new o(4);return i[0]=A[0]/Y,i[1]=A[1]/Y,i[2]=A[2]/Y,i[3]=A[3]/Y,i}function te(A,Y){return A[0]*Y[0]+A[1]*Y[1]+A[2]*Y[2]+A[3]*Y[3]}function Fe(A,Y,x,i){const m=i??new o(4);return m[0]=A[0]+x*(Y[0]-A[0]),m[1]=A[1]+x*(Y[1]-A[1]),m[2]=A[2]+x*(Y[2]-A[2]),m[3]=A[3]+x*(Y[3]-A[3]),m}function Ge(A){const Y=A[0],x=A[1],i=A[2],m=A[3];return Math.sqrt(Y*Y+x*x+i*i+m*m)}const Ie=Ge;function Te(A){const Y=A[0],x=A[1],i=A[2],m=A[3];return Y*Y+x*x+i*i+m*m}const ge=Te;function Pe(A,Y){const x=Y??new o(4),i=A[0],m=A[1],p=A[2],v=A[3],y=Math.sqrt(i*i+m*m+p*p+v*v);return y>1e-5?(x[0]=i/y,x[1]=m/y,x[2]=p/y,x[3]=v/y):(x[0]=0,x[1]=0,x[2]=0,x[3]=1),x}function ce(A,Y){return Math.abs(A[0]-Y[0])<De&&Math.abs(A[1]-Y[1])<De&&Math.abs(A[2]-Y[2])<De&&Math.abs(A[3]-Y[3])<De}function se(A,Y){return A[0]===Y[0]&&A[1]===Y[1]&&A[2]===Y[2]&&A[3]===Y[3]}function ie(A){const Y=A??new o(4);return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y}const me=a.create(),fe=a.create(),be=a.create();function Me(A,Y,x){const i=x??new o(4),m=a.dot(A,Y);return m<-.999999?(a.cross(fe,A,me),a.len(me)<1e-6&&a.cross(be,A,me),a.normalize(me,me),E(me,Math.PI,i),i):m>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(A,Y,me),i[0]=me[0],i[1]=me[1],i[2]=me[2],i[3]=1+m,Pe(i,i))}const ye=new o(4),ke=new o(4);function Ve(A,Y,x,i,m,p){const v=p??new o(4);return X(A,i,m,ye),X(Y,x,m,ke),X(ye,ke,2*m*(1-m),v),v}return{create:_,fromValues:P,set:w,fromAxisAngle:E,toAxisAngle:B,angle:$,multiply:R,mul:V,rotateX:q,rotateY:U,rotateZ:Z,slerp:X,inverse:O,conjugate:L,fromMat:F,fromEuler:N,copy:j,clone:M,add:K,subtract:ae,sub:ve,mulScalar:de,scale:ne,divScalar:_e,dot:te,lerp:Fe,length:Ge,len:Ie,lengthSq:Te,lenSq:ge,normalize:Pe,equalsApproximately:ce,equals:se,identity:ie,rotationTo:Me,sqlerp:Ve}}const Jr=new Map;function Dl(o){let a=Jr.get(o);return a||(a=Al(o),Jr.set(o,a)),a}function Gl(o){function a(x,i,m,p){const v=new o(4);return x!==void 0&&(v[0]=x,i!==void 0&&(v[1]=i,m!==void 0&&(v[2]=m,p!==void 0&&(v[3]=p)))),v}const _=a;function P(x,i,m,p,v){const y=v??new o(4);return y[0]=x,y[1]=i,y[2]=m,y[3]=p,y}function w(x,i){const m=i??new o(4);return m[0]=Math.ceil(x[0]),m[1]=Math.ceil(x[1]),m[2]=Math.ceil(x[2]),m[3]=Math.ceil(x[3]),m}function E(x,i){const m=i??new o(4);return m[0]=Math.floor(x[0]),m[1]=Math.floor(x[1]),m[2]=Math.floor(x[2]),m[3]=Math.floor(x[3]),m}function B(x,i){const m=i??new o(4);return m[0]=Math.round(x[0]),m[1]=Math.round(x[1]),m[2]=Math.round(x[2]),m[3]=Math.round(x[3]),m}function $(x,i=0,m=1,p){const v=p??new o(4);return v[0]=Math.min(m,Math.max(i,x[0])),v[1]=Math.min(m,Math.max(i,x[1])),v[2]=Math.min(m,Math.max(i,x[2])),v[3]=Math.min(m,Math.max(i,x[3])),v}function R(x,i,m){const p=m??new o(4);return p[0]=x[0]+i[0],p[1]=x[1]+i[1],p[2]=x[2]+i[2],p[3]=x[3]+i[3],p}function V(x,i,m,p){const v=p??new o(4);return v[0]=x[0]+i[0]*m,v[1]=x[1]+i[1]*m,v[2]=x[2]+i[2]*m,v[3]=x[3]+i[3]*m,v}function q(x,i,m){const p=m??new o(4);return p[0]=x[0]-i[0],p[1]=x[1]-i[1],p[2]=x[2]-i[2],p[3]=x[3]-i[3],p}const U=q;function Z(x,i){return Math.abs(x[0]-i[0])<De&&Math.abs(x[1]-i[1])<De&&Math.abs(x[2]-i[2])<De&&Math.abs(x[3]-i[3])<De}function X(x,i){return x[0]===i[0]&&x[1]===i[1]&&x[2]===i[2]&&x[3]===i[3]}function O(x,i,m,p){const v=p??new o(4);return v[0]=x[0]+m*(i[0]-x[0]),v[1]=x[1]+m*(i[1]-x[1]),v[2]=x[2]+m*(i[2]-x[2]),v[3]=x[3]+m*(i[3]-x[3]),v}function L(x,i,m,p){const v=p??new o(4);return v[0]=x[0]+m[0]*(i[0]-x[0]),v[1]=x[1]+m[1]*(i[1]-x[1]),v[2]=x[2]+m[2]*(i[2]-x[2]),v[3]=x[3]+m[3]*(i[3]-x[3]),v}function F(x,i,m){const p=m??new o(4);return p[0]=Math.max(x[0],i[0]),p[1]=Math.max(x[1],i[1]),p[2]=Math.max(x[2],i[2]),p[3]=Math.max(x[3],i[3]),p}function N(x,i,m){const p=m??new o(4);return p[0]=Math.min(x[0],i[0]),p[1]=Math.min(x[1],i[1]),p[2]=Math.min(x[2],i[2]),p[3]=Math.min(x[3],i[3]),p}function j(x,i,m){const p=m??new o(4);return p[0]=x[0]*i,p[1]=x[1]*i,p[2]=x[2]*i,p[3]=x[3]*i,p}const M=j;function K(x,i,m){const p=m??new o(4);return p[0]=x[0]/i,p[1]=x[1]/i,p[2]=x[2]/i,p[3]=x[3]/i,p}function ae(x,i){const m=i??new o(4);return m[0]=1/x[0],m[1]=1/x[1],m[2]=1/x[2],m[3]=1/x[3],m}const ve=ae;function de(x,i){return x[0]*i[0]+x[1]*i[1]+x[2]*i[2]+x[3]*i[3]}function ne(x){const i=x[0],m=x[1],p=x[2],v=x[3];return Math.sqrt(i*i+m*m+p*p+v*v)}const _e=ne;function te(x){const i=x[0],m=x[1],p=x[2],v=x[3];return i*i+m*m+p*p+v*v}const Fe=te;function Ge(x,i){const m=x[0]-i[0],p=x[1]-i[1],v=x[2]-i[2],y=x[3]-i[3];return Math.sqrt(m*m+p*p+v*v+y*y)}const Ie=Ge;function Te(x,i){const m=x[0]-i[0],p=x[1]-i[1],v=x[2]-i[2],y=x[3]-i[3];return m*m+p*p+v*v+y*y}const ge=Te;function Pe(x,i){const m=i??new o(4),p=x[0],v=x[1],y=x[2],C=x[3],k=Math.sqrt(p*p+v*v+y*y+C*C);return k>1e-5?(m[0]=p/k,m[1]=v/k,m[2]=y/k,m[3]=C/k):(m[0]=0,m[1]=0,m[2]=0,m[3]=0),m}function ce(x,i){const m=i??new o(4);return m[0]=-x[0],m[1]=-x[1],m[2]=-x[2],m[3]=-x[3],m}function se(x,i){const m=i??new o(4);return m[0]=x[0],m[1]=x[1],m[2]=x[2],m[3]=x[3],m}const ie=se;function me(x,i,m){const p=m??new o(4);return p[0]=x[0]*i[0],p[1]=x[1]*i[1],p[2]=x[2]*i[2],p[3]=x[3]*i[3],p}const fe=me;function be(x,i,m){const p=m??new o(4);return p[0]=x[0]/i[0],p[1]=x[1]/i[1],p[2]=x[2]/i[2],p[3]=x[3]/i[3],p}const Me=be;function ye(x){const i=x??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function ke(x,i,m){const p=m??new o(4),v=x[0],y=x[1],C=x[2],k=x[3];return p[0]=i[0]*v+i[4]*y+i[8]*C+i[12]*k,p[1]=i[1]*v+i[5]*y+i[9]*C+i[13]*k,p[2]=i[2]*v+i[6]*y+i[10]*C+i[14]*k,p[3]=i[3]*v+i[7]*y+i[11]*C+i[15]*k,p}function Ve(x,i,m){const p=m??new o(4);return Pe(x,p),j(p,i,p)}function A(x,i,m){const p=m??new o(4);return ne(x)>i?Ve(x,i,p):se(x,p)}function Y(x,i,m){const p=m??new o(4);return O(x,i,.5,p)}return{create:a,fromValues:_,set:P,ceil:w,floor:E,round:B,clamp:$,add:R,addScaled:V,subtract:q,sub:U,equalsApproximately:Z,equals:X,lerp:O,lerpV:L,max:F,min:N,mulScalar:j,scale:M,divScalar:K,inverse:ae,invert:ve,dot:de,length:ne,len:_e,lengthSq:te,lenSq:Fe,distance:Ge,dist:Ie,distanceSq:Te,distSq:ge,normalize:Pe,negate:ce,copy:se,clone:ie,multiply:me,mul:fe,divide:be,div:Me,zero:ye,transformMat4:ke,setLength:Ve,truncate:A,midpoint:Y}}const ei=new Map;function Ll(o){let a=ei.get(o);return a||(a=Gl(o),ei.set(o,a)),a}function qs(o,a,_,P,w,E){return{mat3:Bl(o),mat4:Ml(a),quat:Dl(_),vec2:hi(P),vec3:ls(w),vec4:Ll(E)}}const{mat3:wt,mat4:pt,quat:ft,vec2:ti,vec3:z,vec4:Yc}=qs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);qs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);qs(Sl,Array,Array,Array,Array,Array);const ni=document.querySelector("#log");let mt=null,cn=null;function fi(){if(mt)return mt;mt=document.createElement("div"),mt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",mt.appendChild(o),cn=document.createElement("div"),cn.className="ply-spinner-label",mt.appendChild(cn),mt.style.display="none",document.body.appendChild(mt),mt}function js(o){fi(),cn&&o&&(cn.textContent=o),mt&&(mt.style.opacity="1",mt.style.display="flex")}function Ot(o){fi(),cn&&(cn.textContent=o)}function Un(){if(!mt)return;const o=mt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function _i(o,a){if(!ni)return;const _=document.createElement("p");_.innerText=o,a&&Object.assign(_.style,a),ni.appendChild(_)}async function kt(o){console.log(o),_i(o)}async function zl(o){console.error(o),_i(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let mi;function bi(){mi=performance.now()}function si(o){const a=performance.now()-mi;kt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Il(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function On(o){return o+3&-4}const Rl=2,Ul=3,Vl=5,Ol=6,Vn=7,ss=8,rs=9,is=10;function Fl(o){const a=new TextDecoder("ascii"),_=a.decode(new Uint8Array(o,0,4));if(_!=="NAT2")throw new Error(`NAT2 bad magic: '${_}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const P=new DataView(o),w=4,E=P.getUint32(w+0,!0),B=P.getUint32(w+4,!0),$=P.getUint32(w+8,!0),R=P.getUint32(w+12,!0),V=P.getUint32(w+16,!0),q=P.getFloat32(w+20,!0),U=P.getUint32(w+24,!0),Z=P.getUint32(w+28,!0),X=P.getFloat32(w+32,!0),O=P.getFloat32(w+36,!0),L=P.getFloat32(w+40,!0),F=P.getUint32(w+44,!0),N=P.getFloat32(w+48,!0),j=P.getFloat32(w+52,!0),M=P.getUint32(w+56,!0),K=P.getUint32(w+60,!0),ae=Z===rs||Z===is,ve=ae?K:0,de=ae?0:K,ne=de>0?de:1;if(Z===Vl||Z===Ol)throw new Error(`NAT2: paired-RVQ format=${Z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const _e=Z===rs||Z===is;if(Z!==Rl&&Z!==Ul&&Z!==Vn&&Z!==ss&&!_e)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Z}`);if(E%4!==0||F%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${E} layer_h=${F}`);let te=w+64;const Fe=(M+1)*4,Ge=new Uint32Array(o.slice(te,te+Fe));te+=Fe;let Ie;if(ne>1){const fe=(ne+1)*4;if(te+fe>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${fe} from ${te})`);Ie=new Uint32Array(o.slice(te,te+fe)),te+=fe}else Ie=new Uint32Array([0,E]);let Te=0;for(let fe=0;fe<ne;fe++){const be=Ie[fe+1]-Ie[fe];be>Te&&(Te=be)}if(_e){const fe=ve&1?7:6,be=V*fe*4;if(te+be>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${be} more bytes from offset ${te}, have ${o.byteLength-te}`);const Me=new Float32Array(o.slice(te,te+be));te+=be;const ye=E/4,ke=F/4,Ve=ye*ke*16,A=o.byteLength-te;if(A<Ve)throw new Error(`NAT2 probe atlas truncated: need ${Ve} bytes for ${E}x${F}, have ${A}`);const Y=new Uint8Array(o.slice(te,te+Ve));return{width:E,height:B,channels:$,kernel_type:R,num_rects:V,uv_extent:q,sb_number:U,format:Z,sh_bias:X,res_bias:O,compact_mult:L,layer_h:F,atlas_scale:N,atlas_offset:j,n_layers:M,n_cols:ne,layer_cuts:Ge,column_cuts:Ie,slice_width:Te,rects_expanded:Me,atlas_bytes:Y,probe_mode:ve&1?2:1}}const ge=V*4*4;if(te+ge>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${ge} more bytes from offset ${te}, have ${o.byteLength-te}`);const Pe=new Float32Array(o.slice(te,te+ge));te+=ge;const ce=new Float32Array(V*5);for(let fe=0;fe<V;fe++){const be=Pe[fe*4+0],Me=Pe[fe*4+1],ye=Pe[fe*4+2],ke=Pe[fe*4+3];let Ve=0;for(let m=1;m<=M&&Ge[m]<=Me;m++)Ve=m;let A=0;for(let m=1;m<=ne&&Ie[m]<=be;m++)A=m;const Y=Me-Ge[Ve],x=be-Ie[A],i=A*M+Ve;ce[fe*5+0]=x,ce[fe*5+1]=Y,ce[fe*5+2]=ye,ce[fe*5+3]=ke,ce[fe*5+4]=i}let se;const me=E/4*16;if(Z===Vn||Z===ss){if(te+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const fe=Z===Vn?"BCCB":"ACCB",be=a.decode(new Uint8Array(o,te,4));if(be!==fe)throw new Error(`NAT2 typeD bad sub-magic: expected '${fe}' got '${be}'`);const Me=P.getUint32(te+4,!0),ye=P.getUint32(te+8,!0),ke=P.getUint32(te+12,!0),Ve=P.getUint32(te+16,!0),A=P.getUint32(te+20,!0);if(Me!==1)throw new Error(`NAT2 BCCB unsupported version ${Me}`);if(ke!==B/4||Ve!==E/4||A!==ke*Ve)throw new Error(`NAT2 BCCB block grid mismatch: header ${E}×${B}, sub-header ${Ve}×${ke} (${A} blocks)`);te+=24;const Y=ye*16;if(te+Y>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Y}, have ${o.byteLength-te})`);const x=new Uint8Array(o,te,Y);te+=Y;const i=A*2;if(te+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-te})`);const m=new Uint16Array(o.slice(te,te+i));te+=i;const p=new Uint8Array(A*16);for(let v=0;v<A;v++){const y=m[v]*16;p.set(x.subarray(y,y+16),v*16)}se=p}else{let fe=0;for(let be=0;be<M;be++){const Me=Ge[be+1]-Ge[be];if(Me%4!==0)throw new Error(`NAT2 BC7 layer ${be} rows ${Me} not 4-aligned`);fe+=Me/4*me}if(te+fe>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${fe} more bytes from offset ${te}, have ${o.byteLength-te}`);se=new Uint8Array(o.slice(te,te+fe))}return{width:E,height:B,channels:$,kernel_type:R,num_rects:V,uv_extent:q,sb_number:U,format:Z,sh_bias:X,res_bias:O,compact_mult:L,layer_h:F,atlas_scale:N,atlas_offset:j,n_layers:M,n_cols:ne,layer_cuts:Ge,column_cuts:Ie,slice_width:Te,rects_expanded:ce,atlas_bytes:se}}const Nl=32;function Wl(o,a,_){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let P,w,E,B;if(a.format===2||a.format===Vn||a.format===rs){if(!o.features.has("texture-compression-bc"))return kt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;B=a.format===rs?"BC7 atlas (proberes: shared probe texture)":a.format===Vn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:P,view:w,sampler:E}=ri(o,a,"bc7-rgba-unorm",B)}else if(a.format===3||a.format===ss||a.format===is){if(!o.features.has("texture-compression-astc"))return kt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;B=a.format===is?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===ss?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:P,view:w,sampler:E}=ri(o,a,"astc-4x4-unorm",B)}else return kt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:$}=a,R=o.createBuffer({label:"atlas rects (5-stride)",size:On($.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(R,0,$);const V=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return gi(o,V,a,_),{texture:P,view:w,sampler:E,rectsBuffer:R,texParamsBuffer:V,meta:a}}function ri(o,a,_,P){const{width:w,layer_h:E,n_layers:B,n_cols:$,layer_cuts:R,column_cuts:V,slice_width:q,atlas_bytes:U}=a,X=w/4*16,O=o.limits.maxTextureDimension2D;if(E>O||q>O)throw new Error(`⚠️  atlas slice dims ${q}x${E} exceed maxTextureDimension2D=${O}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const L=$*B;if(L>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${$} cols × ${B} layers = ${L} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const F=o.createTexture({label:P,size:{width:q,height:E,depthOrArrayLayers:L},mipLevelCount:1,sampleCount:1,dimension:"2d",format:_,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let M=0;M<$;M++){const K=V[M]/4,ae=(V[M+1]-V[M])/4;for(let ve=0;ve<B;ve++){const de=R[ve]/4,ne=(R[ve+1]-R[ve])/4,_e=M*B+ve,te=de*X+K*16;o.queue.writeTexture({texture:F,mipLevel:0,origin:{x:0,y:0,z:_e},aspect:"all"},U,{offset:te,bytesPerRow:X,rowsPerImage:ne},{width:ae*4,height:ne*4,depthOrArrayLayers:1})}}const N=F.createView({label:`${P} view`,dimension:"2d-array"}),j=o.createSampler({label:`${P} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:F,view:N,sampler:j}}function gi(o,a,_,P){const w=new ArrayBuffer(32),E=new Uint32Array(w),B=new Float32Array(w);E[0]=P?1:0,B[1]=_.atlas_scale,B[2]=_.atlas_offset,B[3]=_.res_bias,E[4]=_.probe_mode?_.probe_mode|0:0,o.queue.writeBuffer(a,0,w)}async function Vs(o,a){kt(`loading ply file from File... : ${o.name}`),js("downloading PLY...");const _=await o.arrayBuffer();try{return await vi(_,a)}finally{Un()}}async function $l(o,a){kt(`loading ply file from URL... : ${o}`),js("downloading PLY...");try{bi();const _=new URL(o,self.location.href).href;return await vi({url:_},a)}finally{Un()}}async function vi(o,a){return new Promise((_,P)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=E=>{var $,R,V,q,U,Z,X,O,L,F,N,j;const B=E.data;if((B==null?void 0:B.type)==="error"){zl(`PLY worker error: ${B.message??"unknown error"}`),w.terminate(),P(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const M=B.totalBytes,K=B.loadedBytes/(1024*1024),ae=M?M/(1024*1024):void 0,ve=(B.speedBps??0)/(1024*1024),de=M?Math.min(99,Math.floor(B.loadedBytes/M*100)):void 0,ne=ae?`total ${ae.toFixed(1)} MB`:"total -- MB",_e=ae&&de!==void 0?`${K.toFixed(1)} MB downloaded (${de}%)`:`${K.toFixed(1)} MB downloaded`,te=`${ve.toFixed(2)} MB/s`;Ot(`downloading PLY ...
${ne}, ${_e}
${te}`);return}else if((B==null?void 0:B.type)==="fetched"){kt(`💾 Fetched (${B.byteLength} bytes)`),si("Download"),Ot("parsing PLY..."),bi();return}else if((B==null?void 0:B.type)==="parse_progress"){const M=B.total??0,K=B.read??0,ae=M>0?Math.floor(K/M*100):0;Ot(`parsing PLY ...
${K}/${M} surfels (${ae}%)`);return}else if((B==null?void 0:B.type)==="done"){const M=B.num_points,K=B.K,ae=B.feature_mode??0,ve=B.sh_bias,de=B.kernel_type,ne=B.surfelBuffer,_e=B.svParamsBuffer;kt(`🪐 Total surfels: ${M}, mode=${ae===1?"SB":"SV"}, K=${K}, sh_bias=${ve}, kernel_type=${de}`);const Fe=a.createBuffer({label:"surfel input buffer",size:On(M*Nl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Fe,0,ne);const Ge=_e.byteLength>0?_e.byteLength:16,Ie=a.createBuffer({label:ae===1?"color_params buffer (SB)":"color_params buffer (SV)",size:On(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});_e.byteLength>0&&a.queue.writeBuffer(Ie,0,_e),w.terminate(),si("Parse"),_({num_points:M,K,feature_mode:ae,sh_bias:ve,kernel_type:de,surfel_buffer:Fe,surfel_data:new Float32Array(ne),sv_params_buffer:Ie,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((R=($=B.bbox)==null?void 0:$.min)==null?void 0:R[0])??-1)+(((q=(V=B.bbox)==null?void 0:V.max)==null?void 0:q[0])??1))/2,((((Z=(U=B.bbox)==null?void 0:U.min)==null?void 0:Z[1])??-1)+(((O=(X=B.bbox)==null?void 0:X.max)==null?void 0:O[1])??1))/2,((((F=(L=B.bbox)==null?void 0:L.min)==null?void 0:F[2])??-1)+(((j=(N=B.bbox)==null?void 0:N.max)==null?void 0:j[2])??1))/2]})}},w.onerror=E=>{w.terminate(),P(E)},o instanceof ArrayBuffer?(Ot("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Os={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(_,P){P(a)})(ql,function(_){class P{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class E{constructor(e){this.target=e}}class B extends E{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class $ extends E{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class R extends E{constructor(e,t){super(e),this.expanded=t}}class V extends E{constructor(e,t){super(e),this.index=t}}function q(n){return n}function U(n){return n==null}function Z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function X(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const O={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class L{static alreadyDisposed(){return new L({type:"alreadydisposed"})}static notBindable(){return new L({type:"notbindable"})}static propertyNotFound(e){return new L({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new L({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=O[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class F{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!F.isBindable(s))throw L.notBindable();if(!(e in s))throw L.propertyNotFound(e);s[e]=t}}class N extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new E(this))}),this}}class j{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const M="tp";function K(n){return(t,s)=>[M,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ae(n,e){return t=>e(n(t))}function ve(n){return n.rawValue}function de(n,e){n.emitter.on("change",ae(ve,e)),e(n.rawValue)}function ne(n,e,t){de(n.value(e),t)}function _e(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function te(n,e){return t=>{_e(n,e,t)}}function Fe(n,e){de(n,t=>{e.textContent=t??""})}const Ge=K("btn");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ge("t")),Fe(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Te{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ge{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,S)=>c===S,this.emitter=new j,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:c,sender:this}))}}class Pe{constructor(e){this.emitter=new j,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function ce(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Pe(n):new ge(n,e)}class se{constructor(e){this.emitter=new j,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:ce(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new se(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((c,S)=>{if(c===void 0)return;const D=e[S],ee=D(n[S]);return ee.succeeded?Object.assign(Object.assign({},c),{[S]:ee.value}):void 0},{});return s}function me(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function fe(n){return n===null?!1:typeof n=="object"}function be(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Me(n){return{custom:e=>be(e)(n),boolean:be(e=>typeof e=="boolean"?e:void 0)(n),number:be(e=>typeof e=="number"?e:void 0)(n),string:be(e=>typeof e=="string"?e:void 0)(n),function:be(e=>typeof e=="function"?e:void 0)(n),constant:e=>be(t=>t===e?e:void 0)(n),raw:be(e=>e)(n),object:e=>be(t=>{if(fe(t))return ie(t,e)})(n),array:e=>be(t=>{if(Array.isArray(t))return me(t,e)})(n)}}const ye={optional:Me(!0),required:Me(!1)};function ke(n,e){const t=ye.required.object(e)(n);return t.succeeded?t.value:void 0}function Ve(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Y{constructor(e){this.value_=e}static create(e){return[new Y(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const x=K("");function i(n,e){return te(n,x(void 0,e))}class m extends se{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Y.create(ce(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const S=e??{};return new m(se.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(c=S.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,i(e,"disabled")),ne(this,"hidden",i(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const v=K(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(s=>{t.classList.remove(v(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ve({key:"parent",target:m.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function h(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function f(){return globalThis}function l(){return f().document}function d(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const g={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(k,"svg");return t.innerHTML=g[e],t}function T(n,e,t){n.insertBefore(e,n.children[t])}function W(n){n.parentElement&&n.parentElement.removeChild(n)}function H(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function re(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function J(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const I=K("lbl");function oe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(I()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(I("l")),ne(t.props,"label",S=>{U(S)?this.element.classList.add(I(void 0,"nol")):(this.element.classList.remove(I(void 0,"nol")),re(s),s.appendChild(oe(e,S)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(I("v")),this.element.appendChild(c),this.valueElement=c}}class ue extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const pe={id:"button",type:"blade",accept(n){const e=ye,t=ke(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ue(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:new Te(n.document,{props:se.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ue)||!(n.controller.valueController instanceof Te)?null:new N(n.controller)}};class Ae extends C{constructor(e){super(e),this.value=e.value}}function Ee(){return new se({positions:ce([],{equals:Z})})}class We extends se{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=se.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!U(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ne(this,"expanded",s),ne(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ye(n,e){let t=0;return h(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function Le(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),U(n.get("expandedHeight"))){const t=Ye(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ze extends w{constructor(e,t){super(e),this.rackApi_=t}}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ot(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Ue(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class st{constructor(e){this.emitter=new j,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw L.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class rt extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class je extends ue{constructor(e,t){super(e,t),this.binding=t.binding}}class Qe extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new $(this,t,this.controller_.binding.target.presetKey)})}}class Xe extends ue{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function dt(n){return n instanceof xt?n.apiSet_:n instanceof Ze?n.rackApi_.apiSet_:null}function Je(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw L.shouldNeverHappen();return t}function Mt(n,e,t){if(!F.isBindable(n))throw L.notBindable();return new F(n,e,t)}class xt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new j,this.apiSet_=new st(dt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>Je(this.apiSet_,e))}addInput(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(S,Mt(e,t,c.presetKey),c),ee=new rt(D);return this.add(ee,c.index)}addMonitor(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(S,Mt(e,t),c),ee=new Qe(D);return this.add(ee,c.index)}addFolder(e){return it(this,e)}addButton(e){return nt(this,e)}addSeparator(e){return ot(this,e)}addTab(e){return Ue(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Je(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof je){const s=Je(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new B(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ae){const s=Je(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Xe))throw L.shouldNeverHappen();const t=Je(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new $(t,s.target.read(),s.target.presetKey)})}}class yt extends Ze{constructor(e,t){super(e,new xt(e.rackController,t)),this.emitter_=new j,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new R(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Pt extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class At{constructor(e,t){const s=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Dt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof je&&s.binding===e)return s}return null}function Gt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Xe&&s.binding===e)return s}return null}function Xt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ae&&s.value===e)return s}return null}function St(n){return n instanceof Ke?n.rack:n instanceof Pt?n.rackController.rack:null}function Qt(n){const e=St(n);return e?e.bcSet_:null}class un{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new j,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new st(Qt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),X(e,"parent")?e.parent=this:(e.parent_=this,Ve({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){X(e,"parent")?e.parent=null:(e.parent_=null,Ve({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof je)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Xe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.on("change",this.onChildValueChange_);else{const c=St(s);if(c){const S=c.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof je)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Xe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.off("change",this.onChildValueChange_);else{const c=St(s);if(c){const S=c.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const S=[];c===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),c===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),c.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Dt(this.find(je),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Gt(this.find(Xe),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Xt(this.find(Ae),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ke extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new At(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new un({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&T(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&W(e.bladeController.view.element)}}const wn=K("cnt");class us{constructor(e,t){var s;this.className_=K((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),wn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ne(this.foldable_,"completed",te(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ne(t.props,"title",Ce=>{U(Ce)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const D=e.createElement("div");D.classList.add(this.className_("t")),Fe(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Se=t.containerElement;Se.classList.add(this.className_("c")),this.element.appendChild(Se),this.containerElement=Se}}class xn extends Pt{constructor(e,t){var s;const c=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new Ke(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new us(e,{containerElement:S.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Le(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Fn={id:"folder",type:"blade",accept(n){const e=ye,t=ke(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new xn(n.document,{blade:n.blade,expanded:n.params.expanded,props:se.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof xn?new yt(n.controller,n.pool):null}};class Bt extends Ae{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class yn extends w{}const Pn=K("spr");class Nn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Pn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Pn("r")),this.element.appendChild(s)}}class Sn extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Nn(e,{viewProps:t.viewProps})}))}}const En={id:"separator",type:"blade",accept(n){const t=ke(n,{view:ye.required.constant("separator")});return t?{params:t}:null},controller(n){return new Sn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Sn?new yn(n.controller):null}},Ft=K("tbi");class dn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element),ne(t.props,"selected",S=>{S?this.element.classList.add(Ft(void 0,"sel")):this.element.classList.remove(Ft(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Ft("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ft("t")),Fe(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class pn{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new dn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Q{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new pn(e,{props:t.itemProps,viewProps:m.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ke(e,{blade:Ee(),viewProps:m.create()}),this.props=t.props,ne(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class he{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class le extends Ze{constructor(e,t){super(e,new xt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new j,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw L.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Q(t,{itemProps:se.fromObject({selected:!1,title:e.title}),props:se.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw L.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw L.shouldNeverHappen();const s=new he(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw L.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new V(this,e.rawValue)})}}const ze=-1;class Oe{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ce(!0),this.selectedIndex=ce(ze),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ze,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const xe=K("tab");class Be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xe(),wn()),t.viewProps.bindClassModifiers(this.element),de(t.empty,te(this.element,xe(void 0,"nop")));const s=e.createElement("div");s.classList.add(xe("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(xe("i")),this.element.appendChild(c);const S=t.contentsElement;S.classList.add(xe("c")),this.element.appendChild(S),this.contentsElement=S}}class qe extends Pt{constructor(e,t){const s=new Ke(e,{blade:t.blade,viewProps:t.viewProps}),c=new Oe;super({blade:t.blade,rackController:s,view:new Be(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new st(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;T(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;W(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const et={id:"tab",type:"blade",accept(n){const e=ye,t=ke(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new qe(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Q(n.document,{itemProps:se.fromObject({selected:!1,title:t.title}),props:se.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof qe?new le(n.controller,n.pool):null}};function lt(n,e){const t=n.accept(e.params);if(!t)return null;const s=ye.optional.boolean(e.params.disabled).value,c=ye.optional.boolean(e.params.hidden).value;return n.controller({blade:Ee(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:m.create({disabled:s,hidden:c})})}class bt{constructor(){this.disabled=!1,this.emitter=new j}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ds{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new j,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Wn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new j,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Cn(n,e){for(;n.length<e;)n.push(void 0)}function ps(n){const e=[];return Cn(e,n),ce(e)}function $n(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function hs(n,e){const t=[...$n(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Cn(t,n.length),t}class fs{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new j,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=hs(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Nt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Et(n,e){if(n instanceof e)return n;if(n instanceof Nt){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Lt{constructor(e){this.values=se.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class ct{constructor(e){this.values=se.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Wt{constructor(e){this.values=se.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return U(s)||(c=Math.max(c,s)),U(t)||(c=Math.min(c,t)),c}}class zt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Ct=K("lst");class hn{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Ct()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Ct("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Ct("m")),c.appendChild(b(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ne(this.props_,"options",S=>{H(this.selectElement),S.forEach(D=>{const ee=e.createElement("option");ee.textContent=D.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Tt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new hn(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const qn=K("pop");class kn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(qn()),t.viewProps.bindClassModifiers(this.element),de(t.shows,te(this.element,qn(void 0,"v")))}}class Hs{constructor(e,t){this.shows=ce(!1),this.viewProps=t.viewProps,this.view=new kn(e,{shows:this.shows,viewProps:this.viewProps})}}const Ys=K("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ys("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class jn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);U(c)||(this.value.rawValue=c),this.view.refresh()}}function Gi(n){return String(n)}function Zs(n){return n==="false"?!1:!!n}function Xs(n){return Gi(n)}class Li{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const zi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ii{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ri={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ui{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ri[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function _s(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Bn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Tn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=Tn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Tn(n,e);return c===""?"":s+c}function ms(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Oi(n,e);return s===""?"":t+s}function Qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+Tn(n,e)}function Fi(n,e){const t=Qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Tn(n,e);return e+=c.length,t+s+c+ms(n,e)}function Ni(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Tn(n,e);return e+=s.length,s===""?"":t+s+ms(n,e)}function Wi(n,e){const t=Qs(n,e);return e+=t.length,t===""?"":t+ms(n,e)}const $i=_s([Fi,Ni,Wi]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function Ki(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ki(n,e);return s===""?"":t+s}function Yi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Yi(n,e);return s===""?"":t+s}const Xi=_s([ji,Hi,Zi]),Qi=_s([Xi,$i]);function Ji(n,e){const t=Qi(n,e);return e+=t.length,t===""?null:{evaluable:new Li(t),cursor:e}}function eo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=er(n,e);if(!s)return null;e=s.cursor,e+=Bn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function to(n,e){var t;return(t=Ji(n,e))!==null&&t!==void 0?t:eo(n,e)}function Js(n,e){const t=to(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Js(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ui(s,c.evaluable)}):null}function no(n,e,t){t+=Bn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Bn(e,t).length,{cursor:t,operator:s}):null}function so(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let S=c.evaluable;for(;;){const D=no(e,t,s);if(!D)break;s=D.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,S=new Ii(D.operator,S,ee.evaluable)}return S?{cursor:s,evaluable:S}:null}}const ro=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>so(n,e),Js);function er(n,e){return e+=Bn(n,e).length,ro(n,e)}function io(n){const e=er(n,0);return!e||e.cursor+Bn(n,e.cursor).length!==n.length?null:e.evaluable}function It(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=It(n);if(!U(e))return e}return 0}function oo(n){return String(n)}function ht(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ao=ht(0);function Kn(n){return ao(n)+"%"}function nr(n){return String(n)}function bs(n){return n}function Mn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function S(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{S(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{S(()=>{n.setRawValue(s(n,e),D.options)}),S(()=>{e.setRawValue(t(n,e),D.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function _t(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function An(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Rt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function lo(n){return n==="ArrowUp"||n==="ArrowDown"}function sr(n){return lo(n)||n==="ArrowLeft"||n==="ArrowRight"}function gs(n,e){var t,s;const c=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class Jt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new j,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function tt(n,e,t,s,c){const S=(n-e)/(t-e);return s+S*(c-s)}function rr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function ir(n,e){return(n%e+e)%e}const gt=K("txt");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(gt(),gt(void 0,"num")),t.arrayPosition&&this.element.classList.add(gt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(gt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(gt()),this.inputElement.classList.add(gt("i"));const c=e.createElement("div");c.classList.add(gt("k")),this.element.appendChild(c),this.knobElement=c;const S=e.createElementNS(k,"svg");S.classList.add(gt("g")),this.knobElement.appendChild(S);const D=e.createElementNS(k,"path");D.classList.add(gt("gb")),S.appendChild(D),this.guideBodyElem_=D;const ee=e.createElementNS(k,"path");ee.classList.add(gt("gh")),S.appendChild(ee),this.guideHeadElem_=ee;const Se=e.createElement("div");Se.classList.add(K("tt")()),this.knobElement.appendChild(Se),this.tooltipElem_=Se,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(gt(void 0,"drg"));return}this.element.classList.add(gt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Dn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=ce(null),this.view=new co(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Jt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),S!==void 0&&(D=Math.min(D,S)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);U(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=_t(this.baseStep_,An(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){_t(this.baseStep_,An(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const vs=K("sld");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(vs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(vs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(vs("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(tt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class po{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new uo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(tt(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=_t(this.baseStep_,Rt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){_t(this.baseStep_,Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ws=K("sldtxt");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ws());const s=e.createElement("div");s.classList.add(ws("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ws("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class xs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new po(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Dn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new ho(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Gn(n,e){n.write(e)}function Hn(n){const e=ye;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function or(n){if(n==="inline"||n==="popup")return n}function $t(n){const e=ye;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ar(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ys(n){return U(n)?null:new ct(ar(n))}function fo(n){const e=n?Et(n,zt):null;return e?e.step:null}function Yn(n,e){const t=n&&Et(n,zt);return t?rr(t.step):Math.max(rr(e),2)}function fn(n){const e=fo(n);return e??1}function _n(n,e){var t;const s=n&&Et(n,zt),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Zn=K("ckb");class _o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Zn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Zn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Zn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Zn("w")),s.appendChild(S);const D=b(e,"check");S.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class mo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new _o(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function bo(n){const e=[],t=ys(n.options);return t&&e.push(t),new Nt(e)}const go={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ke(e,{options:ye.optional.custom(Hn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs,constraint:n=>bo(n.params),writer:n=>Gn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Et(s,ct);return c?new Tt(e,{props:new se({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new mo(e,{value:t,viewProps:n.viewProps})}},en=K("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(en()),t.foldable.bindExpandedClass(this.element,en(void 0,"expanded")),ne(t.foldable,"completed",te(this.element,en(void 0,"cpl")));const s=e.createElement("div");s.classList.add(en("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(en("s")),s.appendChild(c),this.swatchElement=c;const S=e.createElement("div");if(S.classList.add(en("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(en("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function wo(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),S=ut(t/255,0,1),D=Math.max(s,c,S),ee=Math.min(s,c,S),Se=D-ee;let Ce=0,Ne=0;const $e=(ee+D)/2;return Se!==0&&(Ne=Se/(1-Math.abs(D+ee-1)),s===D?Ce=(c-S)/Se:c===D?Ce=2+(S-s)/Se:Ce=4+(s-c)/Se,Ce=Ce/6+(Ce<0?1:0)),[Ce*360,Ne*100,$e*100]}function xo(n,e,t){const s=(n%360+360)%360,c=ut(e/100,0,1),S=ut(t/100,0,1),D=(1-Math.abs(2*S-1))*c,ee=D*(1-Math.abs(s/60%2-1)),Se=S-D/2;let Ce,Ne,$e;return s>=0&&s<60?[Ce,Ne,$e]=[D,ee,0]:s>=60&&s<120?[Ce,Ne,$e]=[ee,D,0]:s>=120&&s<180?[Ce,Ne,$e]=[0,D,ee]:s>=180&&s<240?[Ce,Ne,$e]=[0,ee,D]:s>=240&&s<300?[Ce,Ne,$e]=[ee,0,D]:[Ce,Ne,$e]=[D,0,ee],[(Ce+Se)*255,(Ne+Se)*255,($e+Se)*255]}function yo(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),S=ut(t/255,0,1),D=Math.max(s,c,S),ee=Math.min(s,c,S),Se=D-ee;let Ce;Se===0?Ce=0:D===s?Ce=60*(((c-S)/Se%6+6)%6):D===c?Ce=60*((S-s)/Se+2):Ce=60*((s-c)/Se+4);const Ne=D===0?0:Se/D,$e=D;return[Ce,Ne*100,$e*100]}function lr(n,e,t){const s=ir(n,360),c=ut(e/100,0,1),S=ut(t/100,0,1),D=S*c,ee=D*(1-Math.abs(s/60%2-1)),Se=S-D;let Ce,Ne,$e;return s>=0&&s<60?[Ce,Ne,$e]=[D,ee,0]:s>=60&&s<120?[Ce,Ne,$e]=[ee,D,0]:s>=120&&s<180?[Ce,Ne,$e]=[0,D,ee]:s>=180&&s<240?[Ce,Ne,$e]=[0,ee,D]:s>=240&&s<300?[Ce,Ne,$e]=[ee,0,D]:[Ce,Ne,$e]=[D,0,ee],[(Ce+Se)*255,(Ne+Se)*255,($e+Se)*255]}function Po(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function So(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function tn(n){return[n[0],n[1],n[2]]}function cr(n,e){return[n[0],n[1],n[2],e]}const Eo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Po,rgb:xo},hsv:{hsl:So,hsv:(n,e,t)=>[n,e,t],rgb:lr},rgb:{hsl:wo,hsv:yo,rgb:(n,e,t)=>[n,e,t]}};function Xn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:ir(n,e)}function ko(n,e,t){var s;const c=Xn(e,t);return[e==="rgb"?ut(n[0],0,c[0]):Co(n[0],c[0]),ut(n[1],0,c[1]),ut(n[2],0,c[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function ur(n,e,t,s){const c=Xn(e,t),S=Xn(e,s);return n.map((D,ee)=>D/c[ee]*S[ee])}function Bo(n,e,t){const s=ur(n,e.mode,e.type,"int"),c=Eo[e.mode][t.mode](...s);return ur(c,t.mode,"int",t.type)}function Qn(n,e){return typeof n!="object"||U(n)?!1:e in n&&typeof n[e]=="number"}class Re{static black(e="int"){return new Re([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Re(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Qn(e,"r")&&Qn(e,"g")&&Qn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Qn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==c[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=ko(e,t,s)}getComponents(e,t="int"){return cr(Bo(tn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const qt=K("colp");class To{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(qt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qt("hsv"));const c=e.createElement("div");c.classList.add(qt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const S=e.createElement("div");S.classList.add(qt("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(qt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(qt("a"));const Se=e.createElement("div");Se.classList.add(qt("ap")),Se.appendChild(this.alphaViews_.palette.element),ee.appendChild(Se);const Ce=e.createElement("div");Ce.classList.add(qt("at")),Ce.appendChild(this.alphaViews_.text.element),ee.appendChild(Ce),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function Ps(n){const e=ye;return ke(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(or)})}function nn(n){return n?.1:1}function sn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ao(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function vt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function pr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[vt(e[1],255),vt(e[2],255),vt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Re(t,"rgb",n):null}}function fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[vt(e[1],255),vt(e[2],255),vt(e[3],255),vt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Re(t,"rgb",n):null}}function mr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),vt(e[2],100),vt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function br(n){return e=>{const t=mr(e);return t?new Re(t,"hsl",n):null}}function gr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),vt(e[2],100),vt(e[3],100),vt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=gr(e);return t?new Re(t,"hsl",n):null}}function wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Go(n){const e=wr(n);return e?new Re(e,"rgb","int"):null}function xr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),tt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),tt(parseInt(t[4],16),0,255,0,1)]:null}function Lo(n){const e=xr(n);return e?new Re(e,"rgb","int"):null}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Re(t,"rgb",n):null}}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Er(n){return e=>{const t=Sr(e);return t?new Re(t,"rgb",n):null}}const zo=[{parser:wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:pr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:gr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:yr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return zo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Ss(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Cr={int:[Go,Lo,hr("int"),_r("int"),br("int"),vr("int"),Pr("int"),Er("int")],float:[hr("float"),_r("float"),br("float"),vr("float"),Pr("float"),Er("float")]};function Ro(n){const e=Cr[n];return t=>{if(typeof t!="string")return Re.black(n);const s=e.reduce((c,S)=>c||S(t),null);return s??Re.black(n)}}function Es(n){const e=Cr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function kr(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Br(n,e="#"){const t=tn(n.getComponents("rgb")).map(kr).join("");return`${e}${t}`}function Cs(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(kr).join("");return`${e}${s}`}function Tr(n,e){const t=ht(e==="float"?2:0);return`rgb(${tn(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Uo(n){return e=>Tr(e,n)}function Jn(n,e){const t=ht(2),s=ht(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,D)=>(D===3?t:s)(S)).join(", ")})`}function Vo(n){return e=>Jn(e,n)}function Oo(n){const e=[ht(0),Kn,Kn];return`hsl(${tn(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Fo(n){const e=[ht(0),Kn,Kn,ht(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Mr(n,e){const t=ht(e==="float"?2:0),s=["r","g","b"];return`{${tn(n.getComponents("rgb",e)).map((S,D)=>`${s[D]}: ${t(S)}`).join(", ")}}`}function No(n){return e=>Mr(e,n)}function Ar(n,e){const t=ht(2),s=ht(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,ee)=>{const Se=ee===3?t:s;return`${c[ee]}: ${Se(D)}`}).join(", ")}}`}function Wo(n){return e=>Ar(e,n)}const $o=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Br},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Cs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Wo(e)}],[])];function ks(n){return $o.reduce((e,t)=>e||(Ao(t.format,n)?t.stringifier:null),null)}const Ln=K("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ln()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ln("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ln("c")),s.appendChild(c),this.colorElem_=c;const S=e.createElement("div");S.classList.add(Ln("m")),this.element.appendChild(S),this.markerElem_=S;const D=e.createElement("div");D.classList.add(Ln("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Re([t[0],t[1],t[2],0],"rgb"),c=new Re([t[0],t[1],t[2],255],"rgb"),S=["to right",Jn(s),Jn(c)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=Jn(e);const D=tt(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[S,D,ee]=c.getComponents("hsv");this.value.setRawValue(new Re([S,D,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=_t(nn(!0),Rt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,ee]=s.getComponents("hsv");this.value.setRawValue(new Re([c,S,D,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){_t(nn(!0),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const mn=K("coltxt");function Ko(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const S=n.createElement("option");return S.textContent=c.text,S.value=c.value,s.appendChild(S),s},n.createDocumentFragment())),e}class Ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(mn("m")),this.modeElem_=Ko(e),this.modeElem_.classList.add(mn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(mn("mm")),c.appendChild(b(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(mn("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){H(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(mn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Yo(n){return ht(n==="float"?2:0)}function Zo(n,e,t){const s=Xn(n,e)[t];return new Lt({min:0,max:s})}function Bs(n,e,t){return new Dn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:nn(!1),parser:e.parser,props:se.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Yo(e.colorType)}),value:ce(0,{constraint:Zo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Xo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=ce(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ho(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Bs(e,t,0),Bs(e,t,1),Bs(e,t,2)];return s.forEach((c,S)=>{Mn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(D,ee)=>{const Se=this.colorMode.rawValue,Ce=D.rawValue.getComponents(Se,this.colorType_);return Ce[S]=ee.rawValue,new Re(cr(tn(Ce),Ce[3]),Se,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ts=K("hpl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ts("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ts("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Tr(new Re([t,100,100],"hsv"));const s=tt(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=tt(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,S,D,ee]=c.getComponents("hsv");this.value.setRawValue(new Re([s,S,D,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=_t(nn(!1),Rt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,ee]=s.getComponents("hsv");this.value.setRawValue(new Re([c+t,S,D,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){_t(nn(!1),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ms=K("svp"),Dr=64;class ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ms()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Dr,s.width=Dr,s.classList.add(Ms("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Ms("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=d(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,S=this.canvasElement.height,D=e.getImageData(0,0,c,S),ee=D.data;for(let Ne=0;Ne<S;Ne++)for(let $e=0;$e<c;$e++){const rn=tt($e,0,c,0,100),In=tt(Ne,0,S,100,0),Rn=lr(s[0],rn,In),es=(Ne*c+$e)*4;ee[es]=Rn[0],ee[es+1]=Rn[1],ee[es+2]=Rn[2],ee[es+3]=255}e.putImageData(D,0,0);const Se=tt(s[1],0,100,0,100);this.markerElem_.style.left=`${Se}%`;const Ce=tt(s[2],0,100,100,0);this.markerElem_.style.top=`${Ce}%`}onValueChange_(){this.update_()}}class ta{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=tt(e.point.x,0,e.bounds.width,0,100),c=tt(e.point.y,0,e.bounds.height,100,0),[S,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Re([S,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s,c,S]=this.value.rawValue.getComponents("hsv"),D=nn(!1),ee=_t(D,Rt(e)),Se=_t(D,An(e));ee===0&&Se===0||this.value.setRawValue(new Re([t,s+ee,c+Se,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=nn(!1),s=_t(t,Rt(e)),c=_t(t,An(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ta(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new jo(e,{value:this.value,viewProps:this.viewProps}),text:new Dn(e,{parser:It,baseStep:.1,props:se.fromObject({draggingScale:.01,formatter:ht(2)}),value:ce(0,{constraint:new Lt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Mn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const S=s.rawValue.getComponents();return S[3]=c.rawValue,new Re(S,s.rawValue.mode)}}),this.textC_=new Xo(e,{colorType:t.colorType,parser:It,value:this.value,viewProps:this.viewProps}),this.view=new To(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const As=K("colsw");class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(As()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(As("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(As("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Cs(e)}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps})}}class Ds{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new ra(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new jn(e,{parser:t.parser,props:se.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const c=new na(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),Mn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=J(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Re.isColorObject(n)?Re.fromObject(n,e):Re.black(e)}function oa(n){return tn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function aa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function la(n){return new Re([n>>16&255,n>>8&255,n&255],"rgb")}function ca(n){return new Re([n>>24&255,n>>16&255,n>>8&255,tt(n&255,0,255,0,1)],"rgb")}function ua(n){return typeof n!="number"?Re.black():la(n)}function da(n){return typeof n!="number"?Re.black():ca(n)}function pa(n){const e=ks(n);return e?(t,s)=>{Gn(t,e(s))}:null}function ha(n){const e=n?aa:oa;return(t,s)=>{Gn(t,e(s))}}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ma(n,e){return(t,s)=>{n?fa(t,s,e):_a(t,s,e)}}function Gs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ba(n){return n?e=>Cs(e,"0x"):e=>Br(e,"0x")}function ga(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ga(e))return null;const t=Ps(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Gs(n.params)?da:ua,equals:Re.equals,writer:n=>ha(Gs(n.params))},controller:n=>{const e=Gs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ds(n.document,{colorType:"int",expanded:t??!1,formatter:ba(e),parser:Es("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function wa(n){return Re.isRgbaColorObject(n)}function xa(n){return e=>ia(e,n)}function ya(n,e){return t=>n?Ar(t,e):Mr(t,e)}const Pa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Re.isColorObject(n))return null;const t=Ps(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>xa(sn(n.params)),equals:Re.equals,writer:n=>ma(wa(n.initialValue),sn(n.params))},controller:n=>{var e;const t=Re.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,S=(e=sn(n.params))!==null&&e!==void 0?e:"int";return new Ds(n.document,{colorType:S,expanded:s??!1,formatter:ya(t,S),parser:Es(S),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ss(n,sn(e));if(!t||!ks(t))return null;const c=Ps(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Ro((e=sn(n.params))!==null&&e!==void 0?e:"int")},equals:Re.equals,writer:n=>{const e=Ss(n.initialValue,sn(n.params));if(!e)throw L.shouldNeverHappen();const t=pa(e);if(!t)throw L.notBindable();return t}},controller:n=>{const e=Ss(n.initialValue,sn(n.params));if(!e)throw L.shouldNeverHappen();const t=ks(e);if(!t)throw L.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ds(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Es(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class jt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var S,D;return(D=(S=this.components[c])===null||S===void 0?void 0:S.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const Gr=K("pndtxt");class Ea{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Gr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Gr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ca(n,e,t){return new Dn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:ce(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ca(e,t,c)),this.acs_.forEach((s,c)=>{Mn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[c],backward:(S,D)=>{const ee=t.assembly.toComponents(S.rawValue);return ee[c]=D.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ea(e,{textViews:this.acs_.map(s=>s.view)})}}function Lr(n,e){return"step"in n&&!U(n.step)?new zt(n.step,e):null}function zr(n){return!U(n.max)&&!U(n.min)?new Lt({max:n.max,min:n.min}):!U(n.max)||!U(n.min)?new Wt({max:n.max,min:n.min}):null}function ka(n){const e=Et(n,Lt);if(e)return[e.values.get("min"),e.values.get("max")];const t=Et(n,Wt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ba(n,e){const t=[],s=Lr(n,e);s&&t.push(s);const c=zr(n);c&&t.push(c);const S=ys(n.options);return S&&t.push(S),new Nt(t)}const Ta={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,s=ke(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Hn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Ba(n.params,n.initialValue),writer:n=>Gn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Et(s,ct);if(c)return new Tt(n.document,{props:new se({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ht(Yn(s,t.rawValue)),D=s&&Et(s,Lt);return D?new xs(n.document,{baseStep:fn(s),parser:It,sliderProps:new se({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:se.fromObject({draggingScale:_n(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new Dn(n.document,{baseStep:fn(s),parser:It,props:se.fromObject({draggingScale:_n(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Kt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Ir={toComponents:n=>n.getComponents(),fromComponents:n=>new Kt(...n)},bn=K("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,te(this.element,bn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(bn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(bn("b")),c.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const S=e.createElement("div");if(S.classList.add(bn("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(bn("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Ht=K("p2dp");class Aa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Ht()),t.layout==="popup"&&this.element.classList.add(Ht(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ht("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(k,"svg");c.classList.add(Ht("g")),this.padElement.appendChild(c),this.svgElem_=c;const S=e.createElementNS(k,"line");S.classList.add(Ht("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const D=e.createElementNS(k,"line");D.classList.add(Ht("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const ee=e.createElementNS(k,"line");ee.classList.add(Ht("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Se=e.createElement("div");Se.classList.add(Ht("m")),this.padElement.appendChild(Se),this.markerElem_=Se,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=tt(e,-s,+s,0,100),S=tt(t,-s,+s,0,100),D=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Rr(n,e,t){return[_t(e[0],Rt(n)),_t(e[1],An(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Aa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=tt(e.point.x,0,e.bounds.width,-s,+s),S=tt(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Kt(c,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s]=Rr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Kt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Rr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ga{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const S=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new Ls(e,{assembly:Ir,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Mn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=J(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class gn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new gn(...n)};function La(n){return gn.isObject(n)?new gn(n.x,n.y,n.z):new gn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new jt({assembly:Ur,components:[Ut("x"in n?n.x:void 0,e.x),Ut("y"in n?n.y:void 0,e.y),Ut("z"in n?n.z:void 0,e.z)]})}function zs(n,e){return{baseStep:fn(e),constraint:e,textProps:se.fromObject({draggingScale:_n(e,n),formatter:ht(Yn(e,n))})}}const Ra={id:"input-point3d",type:"input",accept:(n,e)=>{if(!gn.isObject(n))return null;const t=ye,s=ke(e,{x:t.optional.custom($t),y:t.optional.custom($t),z:t.optional.custom($t)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>La,constraint:n=>Ia(n.params,n.initialValue),equals:gn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof jt))throw L.shouldNeverHappen();return new Ls(n.document,{assembly:Ur,axes:[zs(e.rawValue.x,t.components[0]),zs(e.rawValue.y,t.components[1]),zs(e.rawValue.z,t.components[2])],parser:It,value:e,viewProps:n.viewProps})}};class vn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y,c=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Vr={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function Ua(n){return vn.isObject(n)?new vn(n.x,n.y,n.z,n.w):new vn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Oa(n,e){return new jt({assembly:Vr,components:[Ut("x"in n?n.x:void 0,e.x),Ut("y"in n?n.y:void 0,e.y),Ut("z"in n?n.z:void 0,e.z),Ut("w"in n?n.w:void 0,e.w)]})}function Fa(n,e){return{baseStep:fn(e),constraint:e,textProps:se.fromObject({draggingScale:_n(e,n),formatter:ht(Yn(e,n))})}}const Na={id:"input-point4d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=ye,s=ke(e,{x:t.optional.custom($t),y:t.optional.custom($t),z:t.optional.custom($t),w:t.optional.custom($t)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:vn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof jt))throw L.shouldNeverHappen();return new Ls(n.document,{assembly:Vr,axes:e.rawValue.getComponents().map((s,c)=>Fa(s,t.components[c])),parser:It,value:e,viewProps:n.viewProps})}};function Wa(n){const e=[],t=ys(n.options);return t&&e.push(t),new Nt(e)}const $a={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=ke(e,{options:ye.optional.custom(Hn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr,constraint:n=>Wa(n.params),writer:n=>Gn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Et(s,ct);return c?new Tt(e,{props:new se({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new jn(e,{parser:S=>S,props:se.fromObject({formatter:bs}),value:t,viewProps:n.viewProps})}},zn={monitor:{defaultInterval:200,defaultLineCount:3}},Or=K("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Or()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Or("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Fr=K("sgl");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Fr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Rs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ka={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ke(e,{lineCount:ye.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs},controller:n=>{var e;return n.value.rawValue.length===1?new Rs(n.document,{formatter:Xs,value:n.value,viewProps:n.viewProps}):new Is(n.document,{formatter:Xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:zn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Yt=K("grl");class Ha{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Yt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(k,"svg");s.classList.add(Yt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(k,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const S=e.createElement("div");S.classList.add(Yt("t"),K("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Ne,$e)=>{if(Ne===void 0)return;const rn=tt($e,0,t,0,e.width),In=tt(Ne,s,c,e.height,0);S.push([rn,In].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const D=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){D.classList.remove(Yt("t","a"));return}const Se=tt(this.cursor_.rawValue,0,t,0,e.width),Ce=tt(ee,s,c,e.height,0);D.style.left=`${Se}px`,D.style.top=`${Ce}px`,D.textContent=`${this.formatter_(ee)}`,D.classList.contains(Yt("t","a"))||(D.classList.add(Yt("t","a"),Yt("t","in")),r(D),D.classList.remove(Yt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ya{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=ce(-1),this.view=new Ha(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Jt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(tt(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(tt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Us(n){return"format"in n&&!U(n.format)?n.format:ht(2)}function Za(n){var e;return n.value.rawValue.length===1?new Rs(n.document,{formatter:Us(n.params),value:n.value,viewProps:n.viewProps}):new Is(n.document,{formatter:Us(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:zn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Xa(n){var e,t,s;return new Ya(n.document,{formatter:Us(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:zn.monitor.defaultLineCount,props:se.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Nr(n){return"view"in n&&n.view==="graph"}const Qa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,s=ke(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Nr(n)?64:1,reader:n=>tr},controller:n=>Nr(n.params)?Xa(n):Za(n)},Ja={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ye,s=ke(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Is(n.document,{formatter:bs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:zn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Rs(n.document,{formatter:bs,value:t,viewProps:n.viewProps})}};function el(n,e){var t;const s=n.accept(e.target.read(),e.params);if(U(s))return null;const c=ye,S={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(S),ee=n.binding.constraint?n.binding.constraint(S):void 0,Se=ce(D(s.initialValue),{constraint:ee,equals:n.binding.equals}),Ce=new Wn({reader:D,target:e.target,value:Se,writer:n.binding.writer(S)}),Ne=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,rn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Ce.value,viewProps:m.create({disabled:Ne,hidden:$e})});return new je(e.document,{binding:Ce,blade:Ee(),props:se.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:rn})}function tl(n,e){return e===0?new bt:new ds(n,e??zn.monitor.defaultInterval)}function nl(n,e){var t,s,c;const S=ye,D=n.accept(e.target.read(),e.params);if(U(D))return null;const ee={target:e.target,initialValue:D.initialValue,params:D.params},Se=n.binding.reader(ee),Ce=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Ne=S.optional.number(e.params.interval).value,$e=new fs({reader:Se,target:e.target,ticker:tl(e.document,Ne),value:ps(Ce)}),rn=S.optional.boolean(e.params.disabled).value,In=S.optional.boolean(e.params.hidden).value,Rn=n.controller({document:e.document,params:D.params,value:$e.value,viewProps:m.create({disabled:rn,hidden:In})});return new Xe(e.document,{binding:$e,blade:Ee(),props:se.fromObject({label:"label"in e.params?(c=S.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Rn})}class sl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(U(c))throw new L({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((D,ee)=>D??el(ee,{document:e,target:t,params:s}),null);if(S)return S;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((S,D)=>S??nl(D,{document:e,params:s,target:t}),null);if(c)return c;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,S)=>c??lt(S,{document:e,params:t}),null);if(!s)throw new L({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof je)return new rt(e);if(e instanceof Xe)return new Qe(e);if(e instanceof Ke)return new xt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw L.shouldNeverHappen();return t}}function rl(){const n=new sl;return[ul,Ra,Na,$a,Ta,Sa,Pa,va,go,Ka,Ja,Qa,pe,Fn,En,et].forEach(e=>{n.register(e)}),n}function il(n){return Kt.isObject(n)?new Kt(n.x,n.y):new Kt}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Ut(n,e){if(!n)return;const t=[],s=Lr(n,e);s&&t.push(s);const c=zr(n);return c&&t.push(c),new Nt(t)}function al(n,e){return new jt({assembly:Ir,components:[Ut("x"in n?n.x:void 0,e.x),Ut("y"in n?n.y:void 0,e.y)]})}function Wr(n,e){const[t,s]=n?ka(n):[];if(!U(t)||!U(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=fn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ll(n,e){const t=e instanceof jt?e.components[0]:void 0,s=e instanceof jt?e.components[1]:void 0,c=Wr(t,n.x),S=Wr(s,n.y);return Math.max(c,S)}function $r(n,e){return{baseStep:fn(e),constraint:e,textProps:se.fromObject({draggingScale:_n(e,n),formatter:ht(Yn(e,n))})}}function cl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Kt.isObject(n))return null;const t=ye,s=ke(e,{expanded:t.optional.boolean,picker:t.optional.custom(or),x:t.optional.custom($t),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:Kt.equals,writer:n=>ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof jt))throw L.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Ga(e,{axes:[$r(t.rawValue.x,s.components[0]),$r(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:cl(n.params),maxValue:ll(t.rawValue,s),parser:It,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class qr extends w{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class jr extends w{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Kr extends w{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const dl=function(){return{id:"list",type:"blade",accept(n){const e=ye,t=ke(n,{options:e.required.custom(Hn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new ct(ar(n.params.options)),t=ce(n.params.value,{constraint:e}),s=new Tt(n.document,{props:new se({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Bt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Bt)||!(n.controller.valueController instanceof Tt)?null:new qr(n.controller)}}}();function pl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function hl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class fl extends yt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(je).map(s=>s.binding);hl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(je).map(t=>t.binding.target);return pl(e)}refresh(){this.controller_.rackController.rack.find(je).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Xe).forEach(e=>{e.binding.read()})}}class _l extends xn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ml={id:"slider",type:"blade",accept(n){const e=ye,t=ke(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Lt({max:n.params.max,min:n.params.min}),S=new xs(n.document,{baseStep:1,parser:It,sliderProps:new se({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:se.fromObject({draggingScale:_n(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:oo}),value:ce(s,{constraint:c}),viewProps:n.viewProps});return new Bt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof Bt)||!(n.controller.valueController instanceof xs)?null:new jr(n.controller)}},bl=function(){return{id:"text",type:"blade",accept(n){const e=ye,t=ke(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new jn(n.document,{parser:n.params.parse,props:se.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:ce(n.params.value),viewProps:n.viewProps});return new Bt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Bt)||!(n.controller.valueController instanceof jn)?null:new Kr(n.controller)}}}();function gl(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function Hr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends fl{constructor(e){var t,s;const c=e??{},S=(t=c.document)!==null&&t!==void 0?t:l(),D=rl(),ee=new _l(S,{expanded:c.expanded,blade:Ee(),props:se.fromObject({title:c.title}),viewProps:m.create()});super(ee,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:gl(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw L.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw L.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Hr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Hr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ml,dl,et,bl]})}}const wl=new P("3.1.10");_.BladeApi=w,_.ButtonApi=N,_.FolderApi=yt,_.InputBindingApi=rt,_.ListApi=qr,_.MonitorBindingApi=Qe,_.Pane=vl,_.SeparatorApi=yn,_.SliderApi=jr,_.TabApi=le,_.TabPageApi=he,_.TextApi=Kr,_.TpChangeEvent=B,_.VERSION=wl,Object.defineProperty(_,"__esModule",{value:!0})})})(Os,Os.exports);var jl=Os.exports;const Kl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  pos          : u32,
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
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 + 0.5 * w_span) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 + 0.5 * h_span) * inv_h;
        splats_2d[store_idx].uv_scale_x = w_span * inv_2E * inv_w;
        splats_2d[store_idx].uv_scale_y = h_span * inv_2E * inv_h;
        splats_2d[store_idx].layer      = layer;
        splats_2d[store_idx]._pad       = 0u;
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
        splats_2d[store_idx]._pad       = 0u;
    }
}
`,Hl=`// 2DGS render — vertex+fragment.
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
  pos          : u32,
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
};

// 32-byte RenderSettings — same layout as preprocess_2dgs.wgsl. We only read
// \`canvas_size\` here (vertex shader uses it to convert pixel coords → NDC).
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
  // Explicit u32 pads (NOT vec3<f32>): a vec3 aligns to 16 and would push the
  // struct to 48 B, mismatching buildStubAtlas's 32-byte TexParams buffer.
  _pad0 : u32, _pad1 : u32, _pad2 : u32,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;
// Per-surfel probe affines, stride 6 [A00, A01, A10, A11, t0, t1], already
// divided by tex_res. Read directly here (indexed by gauss_id) instead of
// packed through Splat2DGS varyings — the packed route had to survive
// cull -> preprocess -> vertex -> fragment and could not be verified offline.
// Only read when tex_params.probe_mode != 0.
@group(2) @binding(3) var<storage, read> atlas_probes    : array<f32>;

@vertex
fn vs_main(
    @builtin(vertex_index)   vid : u32,
    @builtin(instance_index) iid : u32,
) -> VertexOutput {
    var out : VertexOutput;

    let splat      = splats_2d[indices[iid]];
    let center_pix = unpack2x16float(splat.pos);
    let extent_pix = unpack2x16float(splat.extent);

    // Quad half-extent: max(extent_pix, k·FilterSize) on each axis. The cull
    // pass already wrote the tight bbox, so this just adds the filter margin.
    let filter_r = K_BETA * FILTER_SIZE;
    let half     = vec2<f32>(max(extent_pix.x, filter_r), max(extent_pix.y, filter_r));

    // 4-vertex triangle-strip axis-aligned quad (matches websplatter).
    //   vid 0: ( 1,  1)   vid 1: (-1,  1)
    //   vid 2: ( 1, -1)   vid 3: (-1, -1)
    let ox = select(-1.0, 1.0, (vid & 1u) == 0u);
    let oy = select(-1.0, 1.0, vid < 2u);
    let corner_pix = center_pix + vec2<f32>(ox, oy) * half;

    // Pixel → NDC. Framebuffer y grows downward; clip y grows upward.
    let vp = vec2<f32>(f32(render_settings.canvas_size.x), f32(render_settings.canvas_size.y));
    let ndc = vec2<f32>(
        (corner_pix.x * 2.0 - (vp.x - 1.0)) / vp.x,
        -((corner_pix.y * 2.0 - (vp.y - 1.0)) / vp.y),
    );
    out.position = vec4<f32>(ndc, 0.0, 1.0);

    out.Tu = vec3<f32>(splat.tu_x, splat.tu_y, splat.tu_z);
    out.Tv = vec3<f32>(splat.tv_x, splat.tv_y, splat.tv_z);
    out.Tw = vec3<f32>(splat.tw_x, splat.tw_y, splat.tw_z);

    let rg = unpack2x16float(splat.color_rg);
    let bs = unpack2x16float(splat.color_b_shape);
    out.color       = vec4<f32>(rg.x, rg.y, bs.x, splat.opacity);
    out.shape       = bs.y;
    out.center_pix  = center_pix;
    out.depth_plane = vec3<f32>(splat.depth_u, splat.depth_v, splat.depth_center);
    out.gauss_id    = splat.gauss_id;
    out.uv_base     = vec2<f32>(splat.uv_base_x,  splat.uv_base_y);
    out.uv_scale    = vec2<f32>(splat.uv_scale_x, splat.uv_scale_y);
    out.layer       = splat.layer;
    // Under probe_mode the layer/_pad slots carry A01/A10 (see preprocess).
    // Harmless otherwise — probe_mode==0 never reads uv_skew.
    out.uv_skew     = vec2<f32>(bitcast<f32>(splat.layer), bitcast<f32>(splat._pad));
    return out;
}

// Shared fragment evaluation — returns un-premultiplied rgb, alpha, and the
// per-pixel VIEW-SPACE depth of the exact ray-splat intersection (zv). All
// three fragment entry points (sorted fs_main, hybrid-transparency fs_core /
// fs_tail) call this; discards inside cull the fragment in every mode.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

fn shade(in: VertexOutput) -> ShadeOut {
    let pixf = floor(in.position.xy);

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
    let u0 = in.Tu.x; let v0 = in.Tu.y;
    let J00 = in.Tu.z; let J01 = in.Tv.x;
    let J10 = in.Tv.y; let J11 = in.Tv.z;
    let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
    let d = pixf - in.center_pix;
    let du_lin = J00 * d.x + J01 * d.y;
    let dv_lin = J10 * d.x + J11 * d.y;
    let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
    // Correction denominator crosses zero at the linearization's validity
    // boundary — sign flips there produce a foggy tile-boundary artifact on
    // large near-camera Gauss. Cull.
    if denom < 0.1 { discard; }
    let inv_d  = 1.0 / denom;
    let s      = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
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
            uv = in.uv_base + s * in.uv_scale;
        }
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, 0.0);
        color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
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
    let sh = shade(in);
    return vec4<f32>(sh.rgb, 1.0) * sh.a;
}

// ---------------------------------------------------------------------------
// Hybrid-transparency path (HTGS, Hahlbohm et al. 2025, K=1 hardware form).
// No sorting at all. Two geometry passes over the SAME unsorted instances:
//
//   fs_core — depth32 attachment (write, compare LESS). frag_depth is the
//     EXACT per-pixel ray-splat intersection depth, so the z-buffer resolves
//     the true frontmost fragment per pixel. Blending OFF; the target keeps
//     the winner's premultiplied (α·c, α).
//
//   fs_tail — same depth attachment, compare GREATER, write OFF: every
//     fragment strictly behind the core winner. MRT, fixed-function
//     order-independent: target0 accumulates (Σα·c, Σα) additively; target1
//     accumulates T = Π(1−α) multiplicatively (srcFactor zero, dstFactor
//     one-minus-src, cleared to 1).
//
// ht_composite.wgsl then blends per HTGS Eq. 17 with K=1:
//   C = α_F·c_F + (1−α_F)·(1−T_tail)·(Σαc/Σα)   [+ T_total·bg via canvas clear]
//
// frag_depth mapping: log2(1+zv)/22 — any strictly monotone map works since
// only this pass pair consumes the buffer (never compared against mesh_depth).
// Log spacing keeps depth32float resolution roughly uniform in relative depth.
// ---------------------------------------------------------------------------
fn ht_depth(zv: f32) -> f32 {
    return clamp(log2(1.0 + max(zv, 0.0)) * (1.0 / 22.0), 0.0, 1.0);
}

fn ht_inv_depth(d: f32) -> f32 {
    return exp2(d * 22.0) - 1.0;
}

// Tail-only bindings (group 3): the core pass's depth buffer (bound read-only
// — it's simultaneously the pass's read-only depth attachment) + the depth-
// weighting strength. The unweighted K=1 tail average treats a fragment 10 cm
// behind the core surface the same as one 1 mm behind it → background bleed
// ("semi-transparent" look) and averaged-away atlas residuals. Weighting each
// tail fragment by exp(−k·(zv−zv_core)/zv_core) — the WBOIT-style fix HTGS
// §Limitations suggests, anchored at the core depth — redistributes the
// normalized average (Σwαc/Σwα, w cancels in scale) toward the fragments just
// behind the surface, which are the ones sorted blending would show crisply.
// k=0 restores the uniform average. The transmittance product target stays
// UNWEIGHTED — it is the tail's physical total opacity.
@group(3) @binding(0) var ht_core_depth : texture_depth_2d;
// wsr_sat_t: the LIVE saturation-tolerance knob for the gated WSR modes
// (UI slider / ?sat_t=). ?wsr=2: gate threshold τ — a fragment fades out as
// the transmittance in front of its bin drops through [1.5τ, 0.5τ] (trained
// default 0.05). ?wsr=3: sets the g(A) window — a pixel counts as saturated
// as A rises through [1−4τ, 1−τ] (τ=0.1 reproduces the trained 0.6/0.9).
// wsr_dg_margin: the D-gate's relative fade window behind D̄ (?wsr=3) —
// full weight to D̄(1+m/2), zero by D̄(1+3m/2). Trained default 0.15.
struct HtParams { tail_k : f32, wsr_sat_t : f32, wsr_dg_margin : f32, _p2 : f32 };
@group(3) @binding(1) var<uniform> ht_params : HtParams;

struct CoreOut {
    @location(0) color : vec4<f32>,
    @builtin(frag_depth) depth : f32,
};

@fragment
fn fs_core(in: VertexOutput) -> CoreOut {
    let sh = shade(in);
    var out : CoreOut;
    out.color = vec4<f32>(sh.rgb, 1.0) * sh.a;
    out.depth = ht_depth(sh.zv);
    return out;
}

struct TailOut {
    @location(0) accum : vec4<f32>,   // (α·c, α) — additive
    @location(1) trans : vec4<f32>,   // .r = α — multiplicative (1−α) product
    @builtin(frag_depth) depth : f32,
};

// HT mode 2 tail: the tail draws in RADIX-SORTED order with standard
// premultiplied over blending into its own target (no averaging — crisp
// textures, proper layering), depth-tested GREATER against the exact core.
// The dominant popping term (frontmost flip) is gone via the core; residual
// order flips within the tail are attenuated by (1−α_F) at composite.
struct TailSortedOut {
    @location(0) color : vec4<f32>,
    @builtin(frag_depth) depth : f32,
};

@fragment
fn fs_tail_sorted(in: VertexOutput) -> TailSortedOut {
    let sh = shade(in);
    var out : TailSortedOut;
    out.color = vec4<f32>(sh.rgb, 1.0) * sh.a;
    out.depth = ht_depth(sh.zv);
    return out;
}

// ---------------------------------------------------------------------------
// WSR path (?wsr=1): fully sort-free weighted-sum composite with a LEARNED
// per-surfel occlusion (docs/WSR_DISTILL.md in nest-splatting). Single MRT
// geometry pass over unsorted instances, no core, no depth attachment:
//   target0 += (w·c, w),  w = α·occ   (additive)
//   target1  = target1 · (1−α)        (multiplicative coverage product)
// wsr_composite then draws (1−P)·Σwc/Σw premultiplied over the bg-cleared
// canvas. occ is the 7th float of the stride-7 probe records (WSR bundles;
// header flag bit 0). Trained by the WSR finetune to reproduce sorted
// blending — popping is structurally impossible (no order anywhere).
// ---------------------------------------------------------------------------
struct WsrOut {
    @location(0) accum : vec4<f32>,   // (w·c, w) — additive
    @location(1) trans : vec4<f32>,   // .r = α — multiplicative (1−α) product
};

@fragment
fn fs_wsr(in: VertexOutput) -> WsrOut {
    let sh = shade(in);
    // gauss_id bit 31 = untextured flag (no probe record) → occ = 1.
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ;
    var out : WsrOut;
    out.accum = vec4<f32>(sh.rgb * w, w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    return out;
}

// ---------------------------------------------------------------------------
// Gated WSR (?wsr=2) — the 2-pass transmittance-saturation gate.
// Pass 1 (fs_wsr_bins): every fragment adds its optical depth −log(1−α) into
// one of 16 log-depth bins per pixel (4×rgba16float MRT, additive blending —
// order-independent by construction). Pass 2 (fs_wsr_gated): each fragment
// reads the finished bins, computes the EXCLUSIVE-prefix transmittance of all
// strictly-nearer bins T_before(bin), and discards itself when T_before <
// wsr_gate_tau — "once accumulated opacity saturates, gate the rest", as a
// DEPTH relation (no sort, frame-coherent). Then the normal WSR accumulate.
// Bin mapping MUST match the CUDA trainer byte-for-byte
// (diff_surfel_3D_sh_res_probe_wsr forward.cu wsr_gate_bin: zmin=0.2,
// zmax=120, 16 bins):
//   d = clamp((log2(1+zv) − LO) · INVR, 0, 1),  bin = min(15, floor(d·16))
// ---------------------------------------------------------------------------
const WSR_GATE_LO   : f32 = 0.2630344058337938;   // log2(1 + 0.2)
const WSR_GATE_INVR : f32 = 0.15023207295953746;  // 1/(log2(1+120) − LO)
// Saturation threshold τ is runtime-tunable: ht_params.wsr_sat_t (trained
// default 0.05 for ?wsr=2 — the finetune saw exactly that value).

fn wsr_gate_bin(zv : f32) -> u32 {
    let d = clamp((log2(1.0 + max(zv, 0.0)) - WSR_GATE_LO) * WSR_GATE_INVR, 0.0, 1.0);
    return min(15u, u32(d * 16.0));
}

// Lean alpha+depth evaluation for the bin pre-pass: duplicates shade()'s
// geometry/kernel math (CONIC affine, low-pass, beta kernel, same culls) but
// skips SV color and the atlas fetch entirely. KEEP IN SYNC with shade() —
// a divergence here silently shifts the gate against the blend pass.
struct AlphaOut { a : f32, zv : f32 };

fn shade_alpha(in: VertexOutput) -> AlphaOut {
    let pixf = floor(in.position.xy);
    if (in.gauss_id & 0x80000000u) != 0u {
        let dx_e = pixf - in.center_pix;
        let m_e  = in.Tu.x * dx_e.x * dx_e.x
                 + 2.0 * in.Tu.y * dx_e.x * dx_e.y
                 + in.Tu.z * dx_e.y * dx_e.y;
        if m_e < 0.0 { discard; }
        let alpha_e = min(0.99, in.color.a * exp(-0.5 * m_e));
        if alpha_e < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        return AlphaOut(alpha_e, in.depth_plane.z);
    }
    let J00 = in.Tu.z; let J01 = in.Tv.x;
    let J10 = in.Tv.y; let J11 = in.Tv.z;
    let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
    let d = pixf - in.center_pix;
    let du_lin = J00 * d.x + J01 * d.y;
    let dv_lin = J10 * d.x + J11 * d.y;
    let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
    if denom < 0.1 { discard; }
    let inv_d  = 1.0 / denom;
    let s      = vec2<f32>(in.Tu.x + du_lin * inv_d, in.Tu.y + dv_lin * inv_d);
    let rho3d  = dot(s, s);
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    let depth_plane_interp = dot(in.depth_plane, vec3<f32>(s, 1.0));
    let depth = select(in.depth_plane.z, depth_plane_interp, rho3d <= rho2d);
    if depth < 0.2 { discard; }
    var alpha_beta : f32;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        let sh = in.shape;
        if sh >= 1.99 && sh <= 2.01 {
            alpha_beta = base * base;
        } else if sh >= 0.99 && sh <= 1.01 {
            alpha_beta = base;
        } else if sh >= 0.49 && sh <= 0.51 {
            alpha_beta = sqrt(base);
        } else if sh >= 3.99 && sh <= 4.01 {
            let b2 = base * base;
            alpha_beta = b2 * b2;
        } else {
            alpha_beta = pow(base, sh);
        }
    }
    let alpha_lp = exp(-rho2d * 0.5);
    let b = min(0.99, in.color.a * max(alpha_beta, alpha_lp));
    if b < 1.0 / 255.0 { discard; }
    return AlphaOut(b, depth);
}

struct WsrBinsOut {
    @location(0) b0 : vec4<f32>,
    @location(1) b1 : vec4<f32>,
    @location(2) b2 : vec4<f32>,
    @location(3) b3 : vec4<f32>,
};

@fragment
fn fs_wsr_bins(in: VertexOutput) -> WsrBinsOut {
    let g = shade_alpha(in);
    let od = -log(1.0 - g.a);          // α ≤ 0.99 ⇒ od ≤ 4.6, fp16-safe sums
    let bin = wsr_gate_bin(g.zv);
    var v = vec4<f32>(0.0);
    v[bin % 4u] = od;
    let t = bin / 4u;
    var out : WsrBinsOut;
    out.b0 = select(vec4<f32>(0.0), v, t == 0u);
    out.b1 = select(vec4<f32>(0.0), v, t == 1u);
    out.b2 = select(vec4<f32>(0.0), v, t == 2u);
    out.b3 = select(vec4<f32>(0.0), v, t == 3u);
    return out;
}

// Bin textures for pass 2 (distinct bindings — group 3 slots 0/1 belong to
// the ht path's depth/params, and one entry point must never see both).
@group(3) @binding(4) var wsr_bin_t0 : texture_2d<f32>;
@group(3) @binding(5) var wsr_bin_t1 : texture_2d<f32>;
@group(3) @binding(6) var wsr_bin_t2 : texture_2d<f32>;
@group(3) @binding(7) var wsr_bin_t3 : texture_2d<f32>;

@fragment
fn fs_wsr_gated(in: VertexOutput) -> WsrOut {
    let sh = shade(in);
    // Continuous saturation gate — MUST mirror the CUDA trainer's
    // wsr_gate_soft byte-for-byte: exclusive-prefix optical depth of
    // strictly-nearer bins, plus a LINEAR interpolation inside the
    // fragment's own bin (deep-shadow-map style). A piecewise-constant
    // prefix steps at bin edges, and bin edges are camera-attached
    // iso-depth planes → whole bands of fragments flipped at once as the
    // camera moved ("rippling lines"). The soft factor s (smoothstep of
    // T over [0.5τ, 1.5τ]) is folded into the occ WEIGHT, never a hard
    // discard, and the coverage target keeps raw α — fully continuous.
    let p = vec2<i32>(floor(in.position.xy));
    let dn = clamp((log2(1.0 + max(sh.zv, 0.0)) - WSR_GATE_LO) * WSR_GATE_INVR, 0.0, 1.0) * 16.0;
    // ONE BIN NEARER than the fragment (matches CUDA wsr_gate_soft): at the
    // fragment's own position the lerp mixes in its own bin's mass and a
    // one-bin surface stack partially gates ITSELF. One bin back, co-surface
    // mass never counts and the value is continuous across bin crossings.
    let dg = max(dn - 1.0, 0.0);
    let bin = min(15u, u32(dg));
    let frac = clamp(dg - f32(bin), 0.0, 1.0);
    var bins = array<vec4<f32>, 4>(
        textureLoad(wsr_bin_t0, p, 0), textureLoad(wsr_bin_t1, p, 0),
        textureLoad(wsr_bin_t2, p, 0), textureLoad(wsr_bin_t3, p, 0));
    var od = 0.0;
    for (var i = 0u; i < bin; i = i + 1u) {
        od += bins[i / 4u][i % 4u];
    }
    od += frac * bins[bin / 4u][bin % 4u];
    let tau = clamp(ht_params.wsr_sat_t, 0.005, 0.9);
    var s = clamp((exp(-od) - 0.5 * tau) / tau, 0.0, 1.0);
    s = s * s * (3.0 - 2.0 * s);
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ * s;
    var out : WsrOut;
    out.accum = vec4<f32>(sh.rgb * w, w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    return out;
}

// ---------------------------------------------------------------------------
// Mean-depth-gated WSR (?wsr=3, "D-gate"). The sort is kept, but used ONLY
// for the per-pixel visibility anchor — a scalar that is an INTEGRAL of
// opacity along the ray and therefore robust to the local order swaps that
// make sorted COLOR compositing pop. Color still blends order-independently.
//
//   fs_wsr_depth — drawn in radix-sorted (back-to-front) order with standard
//     premultiplied over blending; src = (zv·α, 0, 0, α). The blend unit then
//     accumulates exactly (Σ α·T·zv, Σ α·T): .r/.a = the sorted alpha-weighted
//     mean depth D̄, .a = saturation A = 1 − T_final.
//
//   fs_wsr_gated_d — the WSR accumulate with the occ weight faded smoothly
//     behind D̄ over a RELATIVE margin, scaled by g(A) so unsaturated pixels
//     (translucent mixes) never gate their genuinely-visible background:
//       s = 1 − g(A)·smoothstep(D̄(1+m/2), D̄(1+3m/2), zv)
//       g = smoothstep(0.6, 0.9, A),  m = WSR_DGATE_MARGIN
//     No bins ⇒ nothing camera-attached to ripple; D̄ moves continuously.
// MUST mirror the CUDA trainer (wsrDGatePrepassCUDA + the occ fold) exactly.
// ---------------------------------------------------------------------------
// Margin is runtime-tunable: ht_params.wsr_dg_margin (trained default 0.15).

@fragment
fn fs_wsr_depth(in: VertexOutput) -> @location(0) vec4<f32> {
    let g = shade_alpha(in);
    return vec4<f32>(g.zv * g.a, 0.0, 0.0, g.a);
}

// D̄/A buffer for pass 2 (group 3 binding 8 — 4..7 are the bin textures).
@group(3) @binding(8) var wsr_dbuf_t : texture_2d<f32>;

@fragment
fn fs_wsr_gated_d(in: VertexOutput) -> WsrOut {
    let sh = shade(in);
    let p = vec2<i32>(floor(in.position.xy));
    let db = textureLoad(wsr_dbuf_t, p, 0);
    let A = db.a;
    let Dbar = db.r / max(db.a, 1e-6);
    let m = clamp(ht_params.wsr_dg_margin, 0.01, 1.0);
    let t0 = Dbar * (1.0 + 0.5 * m);
    let t1 = Dbar * (1.0 + 1.5 * m);
    var x = clamp((sh.zv - t0) / max(t1 - t0, 1e-6), 0.0, 1.0);
    x = x * x * (3.0 - 2.0 * x);
    // Saturation window from the tunable tolerance τ: the pixel counts as
    // saturated as A rises through [1−4τ, 1−τ]. τ=0.1 = trained (0.6, 0.9).
    let tau = clamp(ht_params.wsr_sat_t, 0.005, 0.9);
    let a1 = 1.0 - tau;
    let a0 = max(1.0 - 4.0 * tau, 0.0);
    var g = clamp((A - a0) / max(a1 - a0, 1e-4), 0.0, 1.0);
    g = g * g * (3.0 - 2.0 * g);
    let s = 1.0 - g * x;
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ * s;
    var out : WsrOut;
    out.accum = vec4<f32>(sh.rgb * w, w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    return out;
}

// ht=3 tail: like fs_tail but weighted by the LEARNED per-surfel occlusion
// (stride-7 probe records, probe_mode 2) instead of the exp(−k·Δz) depth
// heuristic — matches the --wsr_composite CUDA finetune operator exactly:
//   C = α_F·c_F + (1−α_F)·(1−P_tail)·(Σ α·occ·c / Σ α·occ).
// Depth test vs the core (GREATER, no write) supplies the front/tail split;
// ht_params is unused here.
@fragment
fn fs_tail_occ(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a * occ, sh.a * occ);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    out.depth = ht_depth(sh.zv);
    return out;
}

@fragment
fn fs_tail(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    let p = vec2<i32>(floor(in.position.xy));
    let zc = ht_inv_depth(textureLoad(ht_core_depth, p, 0));
    let rel = max(0.0, (sh.zv - zc) / max(zc, 1e-3));
    // Exponent clamp at 10, NOT 20: the accum target is rgba16float, whose
    // smallest subnormal is 5.96e-8. exp(-20) = 2.06e-9 flushes to ZERO on the
    // ROP write, so at high ht_k every tail fragment more than ~10/k relative
    // depth behind the core vanished from the weighted sum while the
    // (unweighted) transmittance product still reported real opacity — the
    // black-seam-at-surfel-boundaries artifact. exp(-10) = 4.54e-5 is safely
    // fp16-normal; relative weighting beyond 10 e-folds is visually nil.
    let w = exp(-min(10.0, ht_params.tail_k * rel));
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a * w, sh.a * w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    out.depth = ht_depth(sh.zv);
    return out;
}
`,Yl=`// Hybrid-transparency composite (HTGS Eq. 17, K=1 hardware form).
//
// Inputs (all canvas-resolution, written by the fs_core / fs_tail passes in
// render_2dgs.wgsl):
//   core_tex  : rgba16float — frontmost fragment's premultiplied (α_F·c_F, α_F)
//   accum_tex : rgba16float — order-independent tail accumulation (Σα·c, Σα)
//   trans_tex : r16float    — tail transmittance T = Π(1−α), cleared to 1
//
// Output (premultiplied, blended over the bg-cleared canvas):
//   C = α_F·c_F + (1−α_F)·(1−T)·(Σα·c / Σα)
//   A = α_F + (1−α_F)·(1−T)
// The canvas clear supplies the T_total·bg term through the premultiplied
// over-blend — identical background handling to the sorted path.

@group(0) @binding(0) var core_tex  : texture_2d<f32>;
@group(0) @binding(1) var accum_tex : texture_2d<f32>;
@group(0) @binding(2) var trans_tex : texture_2d<f32>;

@vertex
fn vs_main(@builtin(vertex_index) vid: u32) -> @builtin(position) vec4<f32> {
    // Single fullscreen triangle.
    const pos = array(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>( 3.0, -1.0),
        vec2<f32>(-1.0,  3.0),
    );
    return vec4<f32>(pos[vid], 0.0, 1.0);
}

@fragment
fn fs_main(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(core_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));

    let core = textureLoad(core_tex, p, 0);
    let acc  = textureLoad(accum_tex, p, 0);
    let T    = textureLoad(trans_tex, p, 0).r;

    var tail_a = clamp(1.0 - T, 0.0, 1.0);
    var tail_rgb = vec3<f32>(0.0);
    if acc.a > 1e-4 {
        tail_rgb = acc.rgb / acc.a;
    } else {
        // No usable weighted colour: every tail fragment's w = exp(-k*rel)
        // underflowed (happens as ht_k rises). tail_a comes from the
        // UNWEIGHTED transmittance product, so it is still large -- leaving
        // tail_rgb at 0 composites an OPAQUE BLACK layer over the core, which
        // is the black seam-at-high-ht_k artifact (visible against any
        // background because it is painted, not background showing through).
        // Unknown colour must contribute nothing, not black.
        tail_a = 0.0;
    }

    let rgb = core.rgb + (1.0 - core.a) * tail_rgb * tail_a;
    let a   = core.a   + (1.0 - core.a) * tail_a;
    return vec4<f32>(rgb, a);
}

// WSR composite (?wsr=1): pure sort-free weighted sum, no core at all.
//   accum_tex = (Σ w·c, Σ w) with w = α·occ  (fs_wsr)
//   trans_tex = P = Π(1−α)                    (coverage product)
//   C = (1−P)·(Σwc/Σw),  A = 1−P   — premultiplied over bg-cleared canvas.
// core_tex is bound but unread (shared bind group layout with the HT modes).
@fragment
fn fs_wsr_composite(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(accum_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let acc = textureLoad(accum_tex, p, 0);
    let P   = clamp(textureLoad(trans_tex, p, 0).r, 0.0, 1.0);
    var a = 1.0 - P;
    var rgb = vec3<f32>(0.0);
    if acc.a > 1e-6 {
        rgb = (acc.rgb / acc.a) * a;
    } else {
        a = 0.0;   // no usable colour → contribute nothing, not black
    }
    return vec4<f32>(rgb, a);
}

// HT mode 2 composite: accum_tex holds the SORTED premultiplied tail blend
// (standard over-composited among tail fragments). Exact suffix compose:
//   C = α_F·c_F + (1−α_F)·C_tail,   A = α_F + (1−α_F)·A_tail
@fragment
fn fs_sorted_tail(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(core_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let core = textureLoad(core_tex, p, 0);
    let tail = textureLoad(accum_tex, p, 0);
    return vec4<f32>(
        core.rgb + (1.0 - core.a) * tail.rgb,
        core.a   + (1.0 - core.a) * tail.a,
    );
}
`,Zl=`const WG_SIZE = 256u;
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
}`,Xl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
  pos          : u32, // 2× f16 center_pix
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
//     bit 3 → MESH_CULL: proxy-mesh Z-cull. Samples the depth texture written
//             by the mesh_depth pre-pass at the surfel's projected pixel and
//             discards the surfel if its z_ndc exceeds the mesh depth (i.e.
//             the surfel is behind opaque geometry). Renderer force-clears
//             this bit when no mesh is loaded.
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

// Mesh Z-cull input. Written by the mesh_depth render pre-pass at canvas
// resolution (depth32float). When ACCEL_MESH_CULL is off (or no mesh is
// loaded) this points at a 1×1 stub — the shader guards the sample behind
// the flag check so the stub is never actually read.
@group(3) @binding(0) var mesh_depth_tex : texture_depth_2d;

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
        let bounds   = 1.2 * pos2d.w;
        let z_ndc    = pos2d.z / pos2d.w;

        if z_ndc > 0.0 && z_ndc < 1.0
            && pos2d.x >= -bounds && pos2d.x <= bounds
            && pos2d.y >= -bounds && pos2d.y <= bounds
            && opacity > 1.0 / 255.0 {

            // ------- Mesh Z-cull (bit 3 of accel_flags) -------
            // Sample the mesh_depth pre-pass at the pixel this surfel projects
            // to. If z_ndc (the surfel's clip depth) is greater than the mesh
            // depth, the surfel is behind opaque geometry — skip the whole
            // expensive T_mat/AABB block by falling straight through to the
            // scan barrier with \`alive = 0\`. Pixel coords use the wgpu
            // framebuffer convention (ndc.xy·0.5 + 0.5)·(W,H).
            var mesh_occluded : bool = false;
            if (render_settings.accel_flags & 8u) != 0u {
                let W_c = camera.viewport.x;
                let H_c = camera.viewport.y;
                let inv_w_c = 1.0 / pos2d.w;
                let ndc_c = pos2d.xy * inv_w_c;
                // DEBUG SAMPLE-MODE (accel_flags bits 4-6): 8 NDC→pixel
                // conventions to nail down which one actually lines up with
                // the mesh_depth attachment empirically. Modes 4-7 add an
                // axis SWAP on top of the four sign-flip options — covers the
                // case where I misread the framebuffer memory layout entirely.
                //   0 → (ndc + 1)/2 · (W,H)
                //   1 → x normal, y flipped ((1-ndc.y)/2)
                //   2 → x flipped, y normal
                //   3 → both flipped
                //   4 → swap axes, no flip
                //   5 → swap axes, y-flip
                //   6 → swap axes, x-flip
                //   7 → swap axes, both flipped
                let sample_mode = (render_settings.accel_flags >> 4u) & 0x7u;
                let sx_pos = (ndc_c.x * 0.5 + 0.5) * W_c;
                let sx_neg = (0.5 - ndc_c.x * 0.5) * W_c;
                let sy_pos = (ndc_c.y * 0.5 + 0.5) * H_c;
                let sy_neg = (0.5 - ndc_c.y * 0.5) * H_c;
                // Swap variants: interpret x as y and y as x. Rescale to the
                // other axis's dimension so we don't over/undershoot when the
                // aspect ratio is non-square.
                let sxSwap_pos = (ndc_c.y * 0.5 + 0.5) * W_c;
                let sxSwap_neg = (0.5 - ndc_c.y * 0.5) * W_c;
                let sySwap_pos = (ndc_c.x * 0.5 + 0.5) * H_c;
                let sySwap_neg = (0.5 - ndc_c.x * 0.5) * H_c;
                var px_f : f32;
                var py_f : f32;
                switch sample_mode {
                    case 1u: { px_f = sx_pos;     py_f = sy_neg; }
                    case 2u: { px_f = sx_neg;     py_f = sy_pos; }
                    case 3u: { px_f = sx_neg;     py_f = sy_neg; }
                    case 4u: { px_f = sxSwap_pos; py_f = sySwap_pos; }
                    case 5u: { px_f = sxSwap_pos; py_f = sySwap_neg; }
                    case 6u: { px_f = sxSwap_neg; py_f = sySwap_pos; }
                    case 7u: { px_f = sxSwap_neg; py_f = sySwap_neg; }
                    default: { px_f = sx_pos;     py_f = sy_pos; }
                }
                // View-clip lets surfels project up to ±1.2× outside the
                // frame; textureLoad past texture bounds returns 0 (near),
                // which would false-cull edge surfels. Range-check first;
                // out-of-range → skip the cull (keep the surfel).
                if px_f >= 0.0 && py_f >= 0.0 && px_f < W_c && py_f < H_c {
                    let tex_dims = vec2<i32>(textureDimensions(mesh_depth_tex));
                    // FOOTPRINT-AWARE sampling (anti-popping). A single
                    // center-texel point sample is discontinuous two ways:
                    // at the mesh's own silhouette adjacent texels flip
                    // between finite depth and far-plane (1.0 = no hit), and
                    // a wide surfel's center samples one texel while its
                    // visible splat spans dozens. Both make the cull decision
                    // flicker with sub-pixel camera motion — no depth-band
                    // fade can bridge a discontinuity in the SAMPLED value.
                    // Fix: 5 taps (center + ±r on each axis, r = projected
                    // surfel radius in pixels) combined MOST-PERMISSIVELY:
                    // any no-hit tap ⇒ keep outright; otherwise fade against
                    // the DEEPEST tap. A surfel only fades when its whole
                    // footprint is confidently inside and behind the mesh.
                    let sxy_r = unpack2x16float(s.scale_rot[0]);
                    let zv_r = max(camspace.z, 1e-4);
                    let r_px = clamp(max(sxy_r.x, sxy_r.y) / zv_r * camera.focal.y,
                                     1.0, 64.0);
                    var mesh_z : f32 = 0.0;   // running MAX over taps
                    var any_miss : bool = false;
                    for (var ti = 0u; ti < 5u; ti++) {
                        var ox = 0.0; var oy = 0.0;
                        if ti == 1u { ox =  r_px; }
                        else if ti == 2u { ox = -r_px; }
                        else if ti == 3u { oy =  r_px; }
                        else if ti == 4u { oy = -r_px; }
                        let tx = clamp(i32(px_f + ox), 0, tex_dims.x - 1);
                        let ty = clamp(i32(py_f + oy), 0, tex_dims.y - 1);
                        let mz = textureLoad(mesh_depth_tex, vec2<i32>(tx, ty), 0);
                        if mz >= 0.9999 {   // far-plane clear ⇒ no mesh at this tap
                            any_miss = true;
                        }
                        mesh_z = max(mesh_z, mz);
                    }
                    // Debug: silhouette-only cull (bit 7). Fires whenever the
                    // sampled pixel has a mesh hit at all, regardless of the
                    // z comparison. If the resulting hole matches the green
                    // mesh_debug overlay, the SAMPLE-PIXEL is correct and the
                    // real bug is in the depth compare or the depth values.
                    // If the hole is elsewhere, the sample pixel itself is
                    // still landing at the wrong place.
                    let silhouette_cull = (render_settings.accel_flags & 128u) != 0u;
                    let invert_depth = (render_settings.accel_flags & 256u) != 0u;
                    if silhouette_cull {
                        if mesh_z < 0.999 {
                            mesh_occluded = true;
                        }
                    } else if invert_depth {
                        // Flipped compare: cull surfels IN FRONT of the mesh.
                        // If this direction matches CUDA, the projection has
                        // reverse-Z or a sign flip we haven't accounted for.
                        if z_ndc + 1e-4 < mesh_z {
                            mesh_occluded = true;
                        }
                    } else {
                        // Standard: fade out surfels BEHIND the mesh, with
                        // two anti-popping measures on top of the old binary
                        // compare (a hard center-test pops LARGE surfels in
                        // and out as the camera moves — their footprint is
                        // visible long after their center crosses the wall):
                        //   1. per-surfel SCALE SLACK (GES-style adaptive ε):
                        //      a surfel gets max(sx, sy) · MESH_SLACK_K of
                        //      extra depth allowance before the fade starts,
                        //      so big discs whose centers sit slightly behind
                        //      the wall but whose rims are visible survive;
                        //   2. a metric FADE BAND: opacity ramps 1 → 0 over
                        //      MESH_FADE_BAND_M metres beyond the slack
                        //      instead of a step — stateless, view-continuous,
                        //      no temporal popping at the decision boundary.
                        // Metres → NDC-z via the projective slope dz_ndc/dz =
                        // −p11/z² (p11 = proj[3].z = −zfar·znear/(zfar−znear)).
                        const MESH_SLACK_K    : f32 = 2.0;
                        const MESH_FADE_BAND_M : f32 = 0.012;
                        let sxy = unpack2x16float(s.scale_rot[0]);
                        let slack_w = MESH_SLACK_K * max(sxy.x, sxy.y);
                        let zv = max(camspace.z, 1e-4);
                        let ndc_per_m = -camera.proj[3].z /
                            (zv * max(zv + slack_w + MESH_FADE_BAND_M, 1e-4));
                        let start = mesh_z + ndc_per_m * slack_w;
                        let band  = max(ndc_per_m * MESH_FADE_BAND_M, 1e-7);
                        let fade = 1.0 - smoothstep(start, start + band, z_ndc);
                        opacity = opacity * fade;
                        if opacity <= 1.0 / 255.0 {
                            mesh_occluded = true;
                        }
                    }
                }
            }
            if !mesh_occluded {

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
            if aabb.z < 0.0 {
                aabb = compute_aabb(T_mat, cutoff);
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
                let cxc = aabb.x; let cyc = aabb.y;
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
                tu = vec3<f32>(u0f, v0f, J00f);
                tv = vec3<f32>(J01f, J10f, J11f);
                tw = vec3<f32>(dwdxrf, dwdyrf, 0.0);
                center_pix = aabb.xy;
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
            } // end if !mesh_occluded
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
            pack2x16float(center_pix),
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
        sort_depths[store_idx]  = bitcast<u32>(depth);
        sort_indices[store_idx] = store_idx;
    }
}
`,Ql=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
// path in surfel_cull.wgsl. One draw call per frame writes NDC-z at the
// canvas resolution into a depth32float attachment; the surfel cull compute
// pass samples that texture at each surfel's projected pixel and discards
// surfels whose z_ndc exceeds the mesh depth (surfel is behind the mesh).
//
// Vertex-only pipeline (no fragment stage) — WebGPU allows omitting the
// fragment stage on a pipeline with zero color attachments and a depth
// attachment. The rasterizer still computes the interpolated depth from the
// vertex outputs and writes it via the fixed-function early-Z test.

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

@group(0) @binding(0) var<uniform> camera : CameraUniforms;

// World-space geometric mesh offset applied by pushing each vertex ALONG
// ITS OUTWARD NORMAL by \`normal_margin_m\` metres BEFORE the view+proj
// chain. Matches the CUDA-side finetune knob
// \`--mesh_normal_margin\` (nest-splatting speed_comparison/finetune_mesh_cull.py
// + MeshDepthBaker) so the WebGPU inference cull uses the exact same
// inflated / deflated mesh geometry the model was trained under. Sign
// convention (positive = OUTWARD along the vertex normal):
//   +M  →  mesh grows outward; silhouette expands; front face moves
//          TOWARD camera (mesh_z decreases on the front); more surfels
//          near the frontier get finite mesh_z (fixes boundary escapees)
//          but front-surface surfels see a more aggressive cull.
//    0  →  no offset; raw mesh depth (equivalent to old bundle default).
//   −M  →  mesh shrinks inward; silhouette contracts; front face moves
//          AWAY from camera (front-surface cull becomes more forgiving)
//          — matches the current brain finetune (\`--mesh_normal_margin -0.03\`).
//
// Held in a tiny dedicated uniform (group 1) so the host can dial it at
// runtime via the Tweakpane input. 16 B (single f32 + std140 tail
// padding) → writeBuffer stays a 4 B copy on the host side.
//
// Superseded the old view-space Z shift (\`pos_view.z += margin\`) which
// was per-pixel-uniform and, worse, per-pixel margin didn't extend the
// silhouette — pixels just outside the boundary stayed at mesh_z=inf so
// boundary surfels behind the mesh silently escaped cull. Normal push
// grows/shrinks the silhouette geometrically, which is the correct fix.
struct MeshCullParams {
  normal_margin_m : f32,
  _pad0           : f32,
  _pad1           : f32,
  _pad2           : f32,
};
@group(1) @binding(0) var<uniform> mesh_cull_params : MeshCullParams;

@vertex
fn vs_main(
  @location(0) position : vec3<f32>,
  @location(1) normal   : vec3<f32>,
) -> @builtin(position) vec4<f32> {
    // Per-vertex outward normal is computed CPU-side at mesh-load
    // (mesh-loader.ts::computeVertexNormals; area-weighted face-normal
    // accumulation across incident triangles, then normalized). No
    // per-frame normalization needed — length is already 1.
    let pos_world_pushed = position + mesh_cull_params.normal_margin_m * normal;
    return camera.proj * camera.view * vec4<f32>(pos_world_pushed, 1.0);
}
`,Jl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
// top of the finished splat render. Toggled by \`?mesh_debug=1\` URL param.
// Uses the exact same camera.proj·camera.view chain AND the exact same
// vertex-normal offset that mesh_depth.wgsl applies, so the on-screen green
// silhouette IS the silhouette that surfel_cull samples against. If the
// green doesn't wrap what the cull is actually killing, we have a mismatch
// between overlay and depth pipelines — usually not the geometry problem
// the debug is trying to spot.

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

@group(0) @binding(0) var<uniform> camera : CameraUniforms;

struct MeshCullParams {
  normal_margin_m : f32,
  _pad0           : f32,
  _pad1           : f32,
  _pad2           : f32,
};
@group(1) @binding(0) var<uniform> mesh_cull_params : MeshCullParams;

@vertex
fn vs_main(
  @location(0) position : vec3<f32>,
  @location(1) normal   : vec3<f32>,
) -> @builtin(position) vec4<f32> {
    let pos_world_pushed = position + mesh_cull_params.normal_margin_m * normal;
    return camera.proj * camera.view * vec4<f32>(pos_world_pushed, 1.0);
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
    return vec4<f32>(0.0, 1.0, 0.0, 0.5);
}
`,ec=`// shader implementing gpu radix sort.

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
`,tc=`// shader implementing gpu radix sort.

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
`,nc=`// ============================================================================
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
}`,wi=32,Fs=1,Ns=2,ii=4,Ws=8,xi=4,sc=7<<xi,oi=128,ai=256,rc=0,Zt=new ArrayBuffer(wi),at={canvas_size:new Uint32Array(Zt,0,2),accel_flags:new Uint32Array(Zt,8,1),feature_mode:new Uint32Array(Zt,12,1),gaussian_scaling:new Float32Array(Zt,16,1),sh_bias:new Float32Array(Zt,20,1),color_K:new Uint32Array(Zt,24,1),walltime:new Float32Array(Zt,28,1)};function ic(o){at.canvas_size[0]=o.width>>>0,at.canvas_size[1]=o.height>>>0,at.accel_flags[0]=(o.accel_flags??Fs|Ns)>>>0,at.feature_mode[0]=(o.feature_mode??rc)>>>0,at.gaussian_scaling[0]=o.gaussian_scaling??1,at.sh_bias[0]=o.sh_bias??.5,at.color_K[0]=(o.color_K??0)>>>0,at.walltime[0]=o.walltime??0}function yi(o,a){o.queue.writeBuffer(a,0,Zt)}function cs(o,a,_){_&&o&&a&&yi(o,a)}function ts(o,a,_,P,w=!0){at.canvas_size[0]=o>>>0,at.canvas_size[1]=a>>>0,cs(_??null,P??null,w)}function li(o,a,_,P=!0){at.gaussian_scaling[0]=o,cs(a??null,_??null,P)}function ci(o,a,_,P=!0){at.sh_bias[0]=o,cs(a??null,_??null,P)}function an(o,a,_,P=!0){let w=at.accel_flags[0];if(o.oac!==void 0&&(w=o.oac?w|Fs:w&~Fs),o.spr!==void 0&&(w=o.spr?w|Ns:w&~Ns),o.bfc!==void 0&&(w=o.bfc?w|ii:w&~ii),o.meshCull!==void 0&&(w=o.meshCull?w|Ws:w&~Ws),o.meshSampleMode!==void 0){const E=(o.meshSampleMode&7)<<xi;w=w&~sc|E}o.meshSilhouetteCull!==void 0&&(w=o.meshSilhouetteCull?w|oi:w&~oi),o.meshInvertDepth!==void 0&&(w=o.meshInvertDepth?w|ai:w&~ai),at.accel_flags[0]=w>>>0,cs(a??null,_??null,P)}const oc=256,ac=wi,lc=8,cc=96,uc=12,Ks=8,Vt=1<<Ks,ln=256,os=32/Ks,dc=0,ui=os&1;function di(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pc(o,a){const _=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),P=o.createPipelineLayout({bindGroupLayouts:[_]}),w=E=>o.createComputePipeline({layout:P,compute:{module:a,entryPoint:E,constants:{WG_SIZE:ln}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:_}}function hc(o,a,_){const P=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[P]}),B=o.createPipelineLayout({bindGroupLayouts:[w]}),$=[];for(let R=0;R<os;R++){const V={PASS_ID:R+dc,RS_RADIX_LOG2:Ks,RS_RADIX_SIZE:Vt};$.push({localHistogram:o.createComputePipeline({layout:E,compute:{module:a,entryPoint:"local_histogram_pass",constants:V}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:_,entryPoint:"scatter_elements",constants:V}})})}return{passes:$,localHistogramBindGroupLayout:P,scatterBindGroupLayout:w}}function fc(o){const a=o.createShaderModule({label:"local histogram",code:tc}),_=o.createShaderModule({label:"scatter",code:ec}),P=o.createShaderModule({label:"blelloch prefix",code:nc}),w=pc(o,P),E=hc(o,a,_);return{localHistogramBindGroupLayout:E.localHistogramBindGroupLayout,scatterBindGroupLayout:E.scatterBindGroupLayout,passes:E.passes,hierarchicalBlelloch:w}}function _c(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=a.createView({dimension:"2d-array"}),P=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),E=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(E,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:_,sampler:P,rectsBuffer:w,texParamsBuffer:E,meta:B}}class mc{constructor(a,_,P,w,E,B=null,$=null){G(this,"device");G(this,"pc");G(this,"presentationFormat");G(this,"camera_buffer");G(this,"render_settings_buffer");G(this,"draw_indirect_buffer");G(this,"splat_2d_buffer");G(this,"querySet");G(this,"resolveBuffer");G(this,"resultBuffer");G(this,"queriesPerFrame",lc);G(this,"queryCapacityFrames",200);G(this,"sort_prefixBindGroup");G(this,"sort_pipelines");G(this,"sort_localHistogramBindGroups");G(this,"sort_scatterBindGroups");G(this,"lastFrame",0);G(this,"frameCount",0);G(this,"preprocessPipeline");G(this,"cullPipeline");G(this,"renderPipeline");G(this,"indirectPipeline");G(this,"htEnabled",!1);G(this,"wsrEnabled",!1);G(this,"wsrPipeline",null);G(this,"wsrCompositePipeline",null);G(this,"wsrGateEnabled",!1);G(this,"wsrBinsPipeline",null);G(this,"wsrGatedPipeline",null);G(this,"wsrBinsBgl",null);G(this,"wsrBinsBindGroup",null);G(this,"wsrBinTextures",[null,null,null,null]);G(this,"wsrBinViews",[null,null,null,null]);G(this,"wsrDGateEnabled",!1);G(this,"wsrDepthPipeline",null);G(this,"wsrGatedDPipeline",null);G(this,"wsrDbufBgl",null);G(this,"wsrDbufBindGroup",null);G(this,"wsrDbufTexture",null);G(this,"wsrDbufView",null);G(this,"htSortedTail",!1);G(this,"htOccTail",!1);G(this,"htTailOccPipeline",null);G(this,"renderShaderModule");G(this,"betaKernel",1);G(this,"renderSettingsBgl");G(this,"renderSplatsBgl");G(this,"atlasBgl");G(this,"htCorePipeline",null);G(this,"htTailPipeline",null);G(this,"htTail2Pipeline",null);G(this,"htCompositePipeline",null);G(this,"htComposite2Pipeline",null);G(this,"htCompositeBgl",null);G(this,"htCompositeBindGroup",null);G(this,"htDepthTexture",null);G(this,"htDepthView",null);G(this,"htCoreTexture",null);G(this,"htCoreView",null);G(this,"htAccumTexture",null);G(this,"htAccumView",null);G(this,"htTransTexture",null);G(this,"htTransView",null);G(this,"htW",0);G(this,"htH",0);G(this,"htTailBgl",null);G(this,"htTailBindGroup",null);G(this,"htParamsBuffer",null);G(this,"htTailK",150);G(this,"wsrSatT",.05);G(this,"wsrDgMargin",.15);G(this,"sort_info_buffer");G(this,"sort_ping_pong");G(this,"crsBg");G(this,"gsBg");G(this,"cullBg2");G(this,"preprocessBg1");G(this,"renderSplatsBindGroup");G(this,"renderSettingsBindGroup");G(this,"atlasBindGroup");G(this,"indirectBindGroup");G(this,"sh_solvers_buffer");G(this,"mesh");G(this,"meshDepthPipeline",null);G(this,"meshDepthCameraBindGroup",null);G(this,"meshDepthMarginBindGroup",null);G(this,"meshMarginBuffer",null);G(this,"meshDepthTexture",null);G(this,"meshDepthView",null);G(this,"meshCullBindGroupLayout");G(this,"meshCullBindGroup");G(this,"meshCullWidth",0);G(this,"meshCullHeight",0);G(this,"meshStubTexture");G(this,"meshStubView");G(this,"bfcParamsBuffer");G(this,"meshOverlayPipeline",null);G(this,"meshOverlayEnabled",!1);G(this,"bgColor",[0,0,0,0]);G(this,"showPerfDialogNext",!1);G(this,"requestReorderNextFrame",!1);G(this,"reorderInFlight",!1);G(this,"downloadOnceNextRead",!1);G(this,"downloadOnceFileName","fps_metrics");G(this,"allFrameTimes",[]);G(this,"lastStageBreakdownMs",null);G(this,"timeQueryEnabled");G(this,"atlas");G(this,"atlasParamsBuffer");this.mesh=$;const R=E.includes("timestamp-query");this.timeQueryEnabled=R,R&&kt("⏰ using timestamp-query"),this.pc=a,this.device=_,this.presentationFormat=P,this.camera_buffer=w,this.atlas=B??_c(_),this.atlasParamsBuffer=_.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),_.addEventListener("uncapturederror",se=>{console.error("A WebGPU error was not captured:",se.error)}),this._setupTimestampQueries(),this._setupBuffers();const V=(Math.floor((this.pc.num_points+ln-1)/ln)+1)*ln,q=Math.ceil(V/ln);console.log(`keys count adjusted: ${V}`),console.log(`key size: ${this.pc.num_points}`);const U=_.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=fc(_);const Z=[di(V,_),di(V,_)],X=_.createBuffer({label:"workgroup histograms",size:q*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=_.createBuffer({label:"workgroup prefixes",size:q*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=_.createBuffer({label:"digit base",size:Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=Math.ceil(q/ln),N=Math.ceil(F/ln),j=_.createBuffer({label:"prefix l0 sums",size:F*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),M=_.createBuffer({label:"prefix l0 offsets",size:F*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=_.createBuffer({label:"prefix l1 sums",size:N*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=_.createBuffer({label:"prefix l1 offsets",size:N*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=_.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:O}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:M}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:L}}]}),this.sort_localHistogramBindGroups=[_.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),_.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[_.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:O}}]}),_.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:O}}]})],this.sort_info_buffer=U,this.sort_ping_pong=Z;const ve=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),de=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ne=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),_e=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ve,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:de,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ne,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:_e,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const te=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Fe=this.device.createShaderModule({code:Xl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ve,de,ne,this.meshCullBindGroupLayout]}),compute:{module:Fe,entryPoint:"surfel_cull"}}),this.mesh!==null){const se=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:se,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ie,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const me=this.device.createShaderModule({code:Ql});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[se,ie]}),vertex:{module:me,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ge=this.device.createShaderModule({code:Kl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ve,_e]}),compute:{module:Ge,entryPoint:"preprocess"}});const Ie=this.device.createShaderModule({code:Hl});Ie.getCompilationInfo().then(se=>{se.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),se.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Te=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ge=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Pe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ce=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Te,ge,Pe]}),vertex:{module:Ie,entryPoint:"vs_main"},fragment:{module:Ie,entryPoint:"fs_main",constants:{BETA_KERNEL:ce},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(se=>{se?console.error("[render_2dgs] pipeline create validation error:",se.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Te,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ui].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Pe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Ie,this.betaKernel=ce,this.renderSettingsBgl=Te,this.renderSplatsBgl=ge,this.atlasBgl=Pe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}writeHtParams(){this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,this.wsrDgMargin,0]))}setWsrSatT(a){this.wsrSatT=a,this.writeHtParams()}setWsrDGateMargin(a){this.wsrDgMargin=a,this.writeHtParams()}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,this.wsrSatT,this.wsrDgMargin,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){an({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,_){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,_[0],_[1],_[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),_=new Uint32Array(a),P=new Float32Array(a);_[0]=this.atlas.meta.width|0,_[1]=this.atlas.meta.layer_h|0,P[2]=this.atlas.meta.uv_extent||0,_[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureHtResources(a,_){var E,B,$,R,V,q;if(this.htCorePipeline===null){const U=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,this.wsrDgMargin,0]));const Z=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:Z,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:Z,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const X={format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}};this.wsrBinsPipeline=this.device.createRenderPipeline({label:"wsr_bins_prepass",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_bins",constants:{BETA_KERNEL:this.betaKernel},targets:[X,X,X,X]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrBinsBgl=this.device.createBindGroupLayout({label:"wsr gate bins (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},...[4,5,6,7].map(L=>({binding:L,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}))]}),this.wsrGatedPipeline=this.device.createRenderPipeline({label:"wsr_gated_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrBinsBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDepthPipeline=this.device.createRenderPipeline({label:"wsr_depth_anchor",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_depth",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDbufBgl=this.device.createBindGroupLayout({label:"wsr dgate dbuf (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.wsrGatedDPipeline=this.device.createRenderPipeline({label:"wsr_gated_d_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrDbufBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated_d",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const O=this.device.createShaderModule({label:"ht_composite",code:Yl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:O,entryPoint:"vs_main"},fragment:{module:O,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:O,entryPoint:"vs_main"},fragment:{module:O,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:O,entryPoint:"vs_main"},fragment:{module:O,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===_)return;(E=this.htDepthTexture)==null||E.destroy(),(B=this.htCoreTexture)==null||B.destroy(),($=this.htAccumTexture)==null||$.destroy(),(R=this.htTransTexture)==null||R.destroy();const P={width:Math.max(1,a),height:Math.max(1,_),depthOrArrayLayers:1},w=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:P,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:P,format:"rgba16float",usage:w}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:P,format:"rgba16float",usage:w}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:P,format:"r16float",usage:w}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]});for(let U=0;U<4;U++)(V=this.wsrBinTextures[U])==null||V.destroy(),this.wsrBinTextures[U]=this.device.createTexture({label:`wsr bins ${U}`,size:P,format:"rgba16float",usage:w}),this.wsrBinViews[U]=this.wsrBinTextures[U].createView();this.wsrBinsBindGroup=this.device.createBindGroup({label:"wsr gate bins bind (group 3)",layout:this.wsrBinsBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},...[0,1,2,3].map(U=>({binding:4+U,resource:this.wsrBinViews[U]}))]}),(q=this.wsrDbufTexture)==null||q.destroy(),this.wsrDbufTexture=this.device.createTexture({label:"wsr dgate dbuf",size:P,format:"rgba16float",usage:w}),this.wsrDbufView=this.wsrDbufTexture.createView(),this.wsrDbufBindGroup=this.device.createBindGroup({label:"wsr dgate dbuf bind (group 3)",layout:this.wsrDbufBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},{binding:8,resource:this.wsrDbufView}]}),this.htW=a,this.htH=_}ensureMeshDepthTexture(a,_){var P;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===_||((P=this.meshDepthTexture)==null||P.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,_),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=_))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&gi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a)}async debugReadSortedIndices(a=30){const _=Math.max(0,Math.min(a,this.pc.num_points)),P=_*Uint32Array.BYTES_PER_ELEMENT;if(P===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),E=this.device.createCommandEncoder();E.copyBufferToBuffer(this.sort_ping_pong[ui].sort_indices_buffer,0,w,0,P),this.device.queue.submit([E.finish()]),await w.mapAsync(GPUMapMode.READ);const B=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",_,"):",Array.from(B)),w.unmap()}frame(a,_,P=!0){var q,U,Z,X;const E=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=P&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(at.accel_flags[0]&Ws)!==0){const O=at.canvas_size[0],L=at.canvas_size[1];this.ensureMeshDepthTexture(O,L);const F={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},N=a.beginRenderPass(F);N.setPipeline(this.meshDepthPipeline),N.setBindGroup(0,this.meshDepthCameraBindGroup),N.setBindGroup(1,this.meshDepthMarginBindGroup),N.setVertexBuffer(0,this.mesh.vertexBuffer),N.setVertexBuffer(1,this.mesh.normalBuffer),N.setIndexBuffer(this.mesh.indexBuffer,"uint32"),N.drawIndexed(this.mesh.numIndices),N.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const O={label:"cull"};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+0,endOfPassWriteIndex:E+1});const L=a.beginComputePass(O);L.setPipeline(this.cullPipeline),L.setBindGroup(0,this.crsBg),L.setBindGroup(1,this.gsBg),L.setBindGroup(2,this.cullBg2),L.setBindGroup(3,this.meshCullBindGroup);const F=Math.ceil(this.pc.num_points/oc);L.dispatchWorkgroups(F,1,1),L.end()}{const O=a.beginComputePass({label:"calculate indirect dispatch"});O.setPipeline(this.indirectPipeline),O.setBindGroup(0,this.indirectBindGroup),O.dispatchWorkgroups(1,1,1),O.end()}{const O={label:"preprocess"};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+2,endOfPassWriteIndex:E+3});const L=a.beginComputePass(O);L.setPipeline(this.preprocessPipeline),L.setBindGroup(0,this.crsBg),L.setBindGroup(1,this.preprocessBg1),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),L.end()}const R=this.wsrEnabled&&(((U=(q=this.atlas)==null?void 0:q.meta)==null?void 0:U.probe_mode)|0)===2,V=R&&this.wsrDGateEnabled;if(!this.htEnabled&&!R||this.htSortedTail||V)for(let O=0;O<os;O++){const L=O&1,F=this.sort_pipelines.passes[O],N=this.sort_localHistogramBindGroups[L],j=this.sort_scatterBindGroups[L];{const M={label:`upsweep_round${O}`};B&&!this.htEnabled&&O==0&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4});const K=a.beginComputePass(M);K.setPipeline(F.localHistogram),K.setBindGroup(0,N),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const M=a.beginComputePass({label:`prefix_round${O} - l0TileScan`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),M.end()}{const M=a.beginComputePass({label:`prefix_round${O} - l1TileScanOnL0`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),M.end()}{const M=a.beginComputePass({label:`prefix_round${O} - l1ScanSums`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroups(1,Vt,1),M.end()}{const M=a.beginComputePass({label:`prefix_round${O} - addL1ToL0`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),M.end()}{const M=a.beginComputePass({label:`prefix_round${O} - addL0ToElems`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),M.end()}{const M=a.beginComputePass({label:`prefix_round${O} - computeDigitBase`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroups(1,1,1),M.end()}{const M={label:`scatter_round${O}`};B&&!this.htEnabled&&O==os-1&&(M.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+5});const K=a.beginComputePass(M);K.setPipeline(F.scatterElements),K.setBindGroup(0,j),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}if(R){const O=at.canvas_size[0],L=at.canvas_size[1];this.ensureHtResources(O,L);const F=this.wsrDGateEnabled,N=this.wsrGateEnabled&&!F;if(N){const j={label:"wsr_bins_prepass",colorAttachments:this.wsrBinViews.map(K=>({view:K,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}))};B&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4,endOfPassWriteIndex:E+5});const M=a.beginRenderPass(j);M.setPipeline(this.wsrBinsPipeline),M.setBindGroup(0,this.renderSettingsBindGroup),M.setBindGroup(1,this.renderSplatsBindGroup),M.setBindGroup(2,this.atlasBindGroup),M.drawIndirect(this.draw_indirect_buffer,0),M.end()}else!F&&B&&a.beginComputePass({label:"wsr_no_sort_stamp",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:E+4,endOfPassWriteIndex:E+5}}).end();if(F){const j={label:"wsr_depth_anchor",colorAttachments:[{view:this.wsrDbufView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]};B&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6});const M=a.beginRenderPass(j);M.setPipeline(this.wsrDepthPipeline),M.setBindGroup(0,this.renderSettingsBindGroup),M.setBindGroup(1,this.renderSplatsBindGroup),M.setBindGroup(2,this.atlasBindGroup),M.drawIndirect(this.draw_indirect_buffer,0),M.end()}{const j={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};B&&!F&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6});const M=a.beginRenderPass(j);M.setPipeline(F?this.wsrGatedDPipeline:N?this.wsrGatedPipeline:this.wsrPipeline),M.setBindGroup(0,this.renderSettingsBindGroup),M.setBindGroup(1,this.renderSplatsBindGroup),M.setBindGroup(2,this.atlasBindGroup),F?M.setBindGroup(3,this.wsrDbufBindGroup):N&&M.setBindGroup(3,this.wsrBinsBindGroup),M.drawIndirect(this.draw_indirect_buffer,0),M.end()}{const j={label:"wsr_composite",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(j.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+7});const M=a.beginRenderPass(j);M.setPipeline(this.wsrCompositePipeline),M.setBindGroup(0,this.htCompositeBindGroup),M.draw(3),M.end()}}else if(this.htEnabled){const O=at.canvas_size[0],L=at.canvas_size[1];this.ensureHtResources(O,L);{const F={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};B&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4,endOfPassWriteIndex:E+5});const N=a.beginRenderPass(F);N.setPipeline(this.htCorePipeline),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.renderSplatsBindGroup),N.setBindGroup(2,this.atlasBindGroup),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}if(this.htSortedTail){const F={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6});const N=a.beginRenderPass(F);N.setPipeline(this.htTail2Pipeline),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.renderSplatsBindGroup),N.setBindGroup(2,this.atlasBindGroup),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}else{const F={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6});const N=a.beginRenderPass(F),j=this.htOccTail&&(((X=(Z=this.atlas)==null?void 0:Z.meta)==null?void 0:X.probe_mode)|0)===2;N.setPipeline(j?this.htTailOccPipeline:this.htTailPipeline),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.renderSplatsBindGroup),N.setBindGroup(2,this.atlasBindGroup),N.setBindGroup(3,this.htTailBindGroup),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}{const F={label:"ht_composite",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(F.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+7});const N=a.beginRenderPass(F);N.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),N.setBindGroup(0,this.htCompositeBindGroup),N.draw(3),N.end()}}else{const O={label:"render",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6,endOfPassWriteIndex:E+7});const L=a.beginRenderPass(O);L.setPipeline(this.renderPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const F=this.device.createShaderModule({code:Jl}),N=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),j=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[N,j]}),vertex:{module:F,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:F,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const O={label:"mesh_overlay",colorAttachments:[{view:_,loadOp:"load",storeOp:"store"}]},L=a.beginRenderPass(O);L.setPipeline(this.meshOverlayPipeline),L.setBindGroup(0,this.meshDepthCameraBindGroup),L.setBindGroup(1,this.meshDepthMarginBindGroup),L.setVertexBuffer(0,this.mesh.vertexBuffer),L.setVertexBuffer(1,this.mesh.normalBuffer),L.setIndexBuffer(this.mesh.indexBuffer,"uint32"),L.drawIndexed(this.mesh.numIndices),L.end()}this.frameCount++}async readPerfMetrics(a){const _=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const P=this.device.createCommandEncoder({label:"timestamp resolve encoder"});P.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),P.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([P.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const E=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),$=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,R=Array.from({length:w.length},()=>[]);let V=0;for(let N=0;N<B;N++){const j=($+N)%this.queryCapacityFrames,M=j*this.queriesPerFrame;let K=!0;for(let ae=0;ae<w.length;ae++){const[ve,de,ne]=w[ae];if(E[M+ne]===0n||E[M+de]===0n||E[M+de]<E[M+ne]){K=!1;break}}if(!K){!_&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}V++;for(let ae=0;ae<w.length;ae++){const[ve,de,ne]=w[ae],_e=Number(E[M+ne]),te=Number(E[M+de]);R[ae].push((te-_e)/1e6)}}if(V===0){this.resultBuffer.unmap(),_||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...R[0]);const q=[];let U=0,Z=0,X=0;for(let N=0;N<w.length;N++){const j=w[N][0],M=R[N];let K=0;if(j==="Total"){const ae=this.allFrameTimes;K=ae.reduce((ne,_e)=>ne+_e,0)/ae.length;const ve=[...ae].sort((ne,_e)=>ne-_e);U=ve[Math.floor(ve.length*.99)]||0;const de=ae.reduce((ne,_e)=>ne+Math.pow(_e-K,2),0)/ae.length;Z=Math.sqrt(de),X=K}else K=M.reduce((ae,ve)=>ae+ve,0)/M.length;q.push([j,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const O=Object.fromEntries(q);this.lastStageBreakdownMs={cull:O.Culling??0,preprocess:O.Preprocess??0,sort:O.Sort??0,render:O.Render??0,total:O.Total??0};const F=`[TIMESTAMP - ${this.constructor.name}]
`+q.map(([N,j])=>`${N}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${U.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(_||(console.log(F),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const N=`Stage,ms
`,j=q.map(([ae,ve])=>`${ae},${ve.toFixed(3)}`).join(`
`),M="data:text/csv;charset=utf-8,"+encodeURIComponent(N+j),K=document.createElement("a");K.href=M,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(F)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ac,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),_=a?a.width:1,P=a?a.height:1;ic({width:_,height:P,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),yi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:On(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:On(this.pc.num_points*uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const _=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=_.length>0?_:this.downloadOnceFileName}else{const _=new Date,P=`${_.getFullYear()}${String(_.getMonth()+1).padStart(2,"0")}${String(_.getDate()).padStart(2,"0")}_${String(_.getHours()).padStart(2,"0")}${String(_.getMinutes()).padStart(2,"0")}${String(_.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${P}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function bc(o,a){return 2*Math.atan(a/(2*o))}function gc(o,a,_,P){const w=Math.tan(P/2),E=Math.tan(_/2),B=w*o,$=-B,R=E*o,V=-R,q=pt.create();return q[0]=2*o/(R-V),q[5]=-2*o/(B-$),q[2]=(R+V)/(R-V),q[6]=(B+$)/(B-$),q[14]=1,q[10]=a/(a-o),q[11]=-(a*o)/(a-o),pt.transpose(q,q),q}async function vc(o){kt(`loading scene camera file... : ${o}`);const _=await(await fetch(o)).json();return kt(`loaded cameras count: ${_.length}`),_.map(P=>{const w=z.clone(P.position),E=wt.create(...P.rotation.flat()),B=E[0],$=E[4],R=E[8],V=E[1],q=E[5],U=E[9],Z=E[2],X=E[6],O=E[10];B*(q*O-U*X)-$*(V*O-U*Z)+R*(V*X-q*Z)<0&&(E[1]=-E[1],E[5]=-E[5],E[9]=-E[9]);const F=pt.fromMat3(E);return{position:w,rotation:F,img_name:P.img_name,id:P.id}})}const wc=4*2,xc=4*16,Pi=4*xc+2*wc;function yc(o){return o.createBuffer({label:"camera uniform",size:Pi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const on=new Float32Array(Pi/Float32Array.BYTES_PER_ELEMENT),as=class as{constructor(a,_){G(this,"uniform_buffer");G(this,"position",z.create());G(this,"rotation",pt.create());G(this,"fovY",45/180*Math.PI);G(this,"fovX");G(this,"focal",ti.create());G(this,"viewport",ti.create());G(this,"view_matrix",pt.identity());G(this,"view_inv_matrix",pt.identity());G(this,"proj_matrix",pt.identity());G(this,"proj_inv_matrix",pt.identity());G(this,"_negPos",z.create());G(this,"look",z.create(0,0,1));G(this,"up",z.create(0,1,0));G(this,"right",z.create(1,0,0));this.canvas=a,this.device=_,this.uniform_buffer=yc(_),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=bc(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=gc(.01,100,this.fovX,this.fovY),pt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],pt.copy(this.rotation,this.view_matrix),pt.translate(this.view_matrix,this._negPos,this.view_matrix),pt.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(as.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let a=0;on.set(this.view_matrix,a),a+=16,on.set(this.view_inv_matrix,a),a+=16,on.set(this.proj_matrix,a),a+=16,on.set(this.proj_inv_matrix,a),a+=16,on.set(this.viewport,a),a+=2,on.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,on)}set_preset(a){z.copy(a.position,this.position),pt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};G(as,"Z_AXIS",z.create(0,0,1));let $s=as;const Pc=z.create(1,0,0),Sc=z.create(0,1,0);function Ec(o,a){const _=o[0],P=o[4],w=o[8],E=o[1],B=o[5],$=o[9],R=o[2],V=o[6],q=o[10],U=_+B+q;let Z,X,O,L;if(U>0){const F=.5/Math.sqrt(U+1);Z=.25/F,X=(V-$)*F,O=(w-R)*F,L=(E-P)*F}else if(_>B&&_>q){const F=2*Math.sqrt(1+_-B-q);Z=(V-$)/F,X=.25*F,O=(P+E)/F,L=(w+R)/F}else if(B>q){const F=2*Math.sqrt(1+B-_-q);Z=(w-R)/F,X=(P+E)/F,O=.25*F,L=($+V)/F}else{const F=2*Math.sqrt(1+q-_-B);Z=(E-P)/F,X=(w+R)/F,O=($+V)/F,L=.25*F}return a[0]=X,a[1]=O,a[2]=L,a[3]=Z,a}class Cc{constructor(a){G(this,"element");G(this,"enabled",!0);G(this,"center",z.create(0,0,0));G(this,"up",z.create(0,1,0));G(this,"rotation",[0,0]);G(this,"shift",[0,0]);G(this,"scroll",0);G(this,"speed",.1);G(this,"sensitivity",.08);G(this,"leftPressed",!1);G(this,"rightPressed",!1);G(this,"leftDragPans",!1);G(this,"lastX",0);G(this,"lastY",0);G(this,"touches",new Map);G(this,"lastTouchCenter",null);G(this,"lastPinchDistance",null);G(this,"lastTwoFingerAngle",null);G(this,"lastTouchCount",0);G(this,"roll",0);G(this,"_dir",z.create());G(this,"_right",z.create());G(this,"_upCam",z.create());G(this,"_scratch",z.create());G(this,"_qY",ft.create());G(this,"_qX",ft.create());G(this,"_qRot",ft.create());G(this,"_qLocal",ft.create());G(this,"_qWorldToCam",ft.create());G(this,"_scratchMat3",wt.create());G(this,"bboxMin",null);G(this,"bboxMax",null);G(this,"anchor",z.create(0,0,0));G(this,"downCallback",a=>{var _,P,w,E;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(P=(_=a.target)==null?void 0:_.setPointerCapture)==null||P.call(_,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(E=(w=a.target)==null?void 0:w.setPointerCapture)==null||E.call(w,a.pointerId),a.preventDefault())}});G(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const _=a.pageX-this.lastX,P=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=_,this.rotation[1]-=P):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=_,this.shift[0]+=P)});G(this,"upCallback",a=>{var _,P,w,E;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(P=(_=a.target)==null?void 0:_.releasePointerCapture)==null||P.call(_,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(E=(w=a.target)==null?void 0:w.releasePointerCapture)==null||E.call(w,a.pointerId),a.preventDefault()});G(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let _=a.deltaY;a.deltaMode===1?_*=16:a.deltaMode===2&&(_*=100),this.scroll+=_*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",_=>_.preventDefault())}setCenter(a){z.copy(a,this.center),z.copy(a,this.anchor)}setOrbitPivot(a){z.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const _=this.camera.rotation;z.set(_[2],_[6],_[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,a,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(z.subtract(this.center,a.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const _=a.rotation;_[0]=this._right[0],_[1]=this._upCam[0],_[2]=this._scratch[0],_[3]=0,_[4]=this._right[1],_[5]=this._upCam[1],_[6]=this._scratch[1],_[7]=0,_[8]=this._right[2],_[9]=this._upCam[2],_[10]=this._scratch[2],_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,a.update_buffer()}setBbox(a,_){this.bboxMin=z.create(a[0],a[1],a[2]),this.bboxMax=z.create(_[0],_[1],_[2]);const P=(a[0]+_[0])*.5,w=(a[1]+_[1])*.5,E=(a[2]+_[2])*.5;z.set(P,w,E,this.center),z.set(P,w,E,this.anchor)}resetToCamera(){const a=this.camera.rotation;z.set(a[2],a[6],a[10],this._dir),z.normalize(this._dir,this._dir);let _=null;if(this.bboxMin&&this.bboxMax){let P=-1/0,w=1/0,E=!1;for(let B=0;B<3;B++){const $=this._dir[B],R=this.bboxMin[B]-this.camera.position[B],V=this.bboxMax[B]-this.camera.position[B];if(Math.abs($)>1e-8){const q=R/$,U=V/$;P=Math.max(P,Math.min(q,U)),w=Math.min(w,Math.max(q,U))}else if(R>0||V<0){E=!0;break}}!E&&P<=w&&w>0&&(_=(Math.max(P,0)+w)*.5)}if(_===null||!isFinite(_)||_<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const P=z.dot(this._scratch,this._dir);_=P>.001?P:z.length(this._scratch)}_=Math.max(.1,_),z.scale(this._dir,_,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const _=this.touches.values().next().value;if(this.lastTouchCenter){const P=_.x-this.lastTouchCenter[0],w=_.y-this.lastTouchCenter[1];this.rotation[0]+=P*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[_.x,_.y]}else if(a===2){const _=Array.from(this.touches.values()),P=(_[0].x+_[1].x)*.5,w=(_[0].y+_[1].y)*.5,E=_[1].x-_[0].x,B=_[1].y-_[0].y,$=Math.hypot(E,B),R=Math.atan2(B,E);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const V=P-this.lastTouchCenter[0],q=w-this.lastTouchCenter[1],U=Math.hypot(V,q),Z=Math.abs($-this.lastPinchDistance);let X=R-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),U>.5&&(this.shift[1]-=V,this.shift[0]+=q),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log($/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=-X)}this.lastTouchCenter=[P,w],this.lastPinchDistance=$,this.lastTwoFingerAngle=R}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const _=this.camera;{const L=_.rotation;this.up[0]=L[1],this.up[1]=L[5],this.up[2]=L[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let P=!1;if(Math.abs(this.roll)>1e-4){const L=_.rotation;z.set(L[2],L[6],L[10],this._scratch),z.normalize(this._scratch,this._scratch),ft.fromAxisAngle(this._scratch,this.roll,this._qRot),z.transformQuat(this.up,this._qRot,this.up),z.normalize(this.up,this.up),this.roll=0,P=!0}z.subtract(_.position,this.center,this._dir);let w=z.length(this._dir);w<1e-6&&(w=1e-6);const E=Math.exp(Math.log(w)+this.scroll*a*10*this.speed);z.scale(this._dir,E/w,this._dir),w=E;const B=_.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const $=z.create(B[1],B[5],B[9]);z.normalize($,$),z.length($)<1e-6&&z.set(0,1,0,$);const R=a*this.speed*.1*w,V=this.shift[1]*R,q=-this.shift[0]*R;z.scale(this._right,V,this._scratch),z.add(this.center,this._scratch,this.center),z.add(_.position,this._scratch,_.position),z.scale($,q,this._scratch),z.add(this.center,this._scratch,this.center),z.add(_.position,this._scratch,_.position);const U=this.rotation[0]*a*this.sensitivity,Z=this.rotation[1]*a*this.sensitivity;if(Math.abs(U)>1e-5||Math.abs(Z)>1e-5||P){const L=_.rotation;Ec(L,this._qWorldToCam),ft.fromAxisAngle(Pc,-Z,this._qX),ft.fromAxisAngle(Sc,-U,this._qY),ft.multiply(this._qX,this._qY,this._qLocal),ft.normalize(this._qLocal,this._qLocal),ft.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ft.normalize(this._qWorldToCam,this._qWorldToCam),wt.fromQuat(this._qWorldToCam,this._scratchMat3),pt.fromMat3(this._scratchMat3,_.rotation);const F=_.rotation,N=F[2],j=F[6],M=F[10];_.position[0]=this.center[0]-N*w,_.position[1]=this.center[1]-j*w,_.position[2]=this.center[2]-M*w,this.up[0]=F[1],this.up[1]=F[5],this.up[2]=F[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,_.position);_.update_buffer();const O=Math.pow(.8,a*60);this.rotation[0]*=O,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=O,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=O,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=O,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=O,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Si(o){const a=z.create();for(const _ of o)z.add(a,_,a);return z.scale(a,1/Math.max(o.length,1),a)}function Ei(o,a){const _=wt.create();wt.inverse(o,_);const P=z.create();return P[0]=_[0]*a[0]+_[4]*a[1]+_[8]*a[2],P[1]=_[1]*a[0]+_[5]*a[1]+_[9]*a[2],P[2]=_[2]*a[0]+_[6]*a[1]+_[10]*a[2],P}function kc(o){const a=o.slice(),_=[1,0,0,0,1,0,0,0,1],P=(R,V)=>a[R*3+V],w=(R,V,q)=>{a[R*3+V]=q},E=(R,V)=>_[R*3+V],B=(R,V,q)=>{_[R*3+V]=q};for(let R=0;R<30;R++){let V=0,q=1,U=Math.abs(P(0,1));if(Math.abs(P(0,2))>U&&(V=0,q=2,U=Math.abs(P(0,2))),Math.abs(P(1,2))>U&&(V=1,q=2,U=Math.abs(P(1,2))),U<1e-12)break;const Z=P(V,V),X=P(q,q),O=P(V,q);let L;Math.abs(Z-X)<1e-30?L=Math.PI/4*Math.sign(O):L=.5*Math.atan2(2*O,Z-X);const F=Math.cos(L),N=Math.sin(L);for(let j=0;j<3;j++){const M=P(j,V),K=P(j,q);w(j,V,F*M+N*K),w(j,q,-N*M+F*K)}for(let j=0;j<3;j++){const M=P(V,j),K=P(q,j);w(V,j,F*M+N*K),w(q,j,-N*M+F*K)}for(let j=0;j<3;j++){const M=E(j,V),K=E(j,q);B(j,V,F*M+N*K),B(j,q,-N*M+F*K)}}const $=[];for(let R=0;R<3;R++)$.push({val:P(R,R),vec:z.create(E(0,R),E(1,R),E(2,R))});return $.sort((R,V)=>V.val-R.val),{vals:[$[0].val,$[1].val,$[2].val],vecs:[$[0].vec,$[1].vec,$[2].vec]}}function Bc(o,a){const _=Si(o);let P=0,w=0,E=0,B=0,$=0,R=0;for(const O of o){const L=O[0]-_[0],F=O[1]-_[1],N=O[2]-_[2];P+=L*L,w+=L*F,E+=L*N,B+=F*F,$+=F*N,R+=N*N}const V=[P,w,E,w,B,$,E,$,R],{vecs:q}=kc(V);let U=q[0],Z=q[1],X=q[2];return z.dot(X,a)<0&&(z.scale(X,-1,X),z.scale(Z,-1,Z)),{centroid:_,normal:X,u:U,v:Z}}function Tc(o){let a=0,_=0,P=0,w=0,E=0,B=0,$=0,R=0,V=0;for(const[F,N]of o){const j=-2*F,M=-2*N,K=1,ae=-(F*F+N*N);a+=j*j,_+=j*M,P+=j*K,w+=M*M,E+=M*K,B+=K*K,$+=j*ae,R+=M*ae,V+=K*ae}const q=wt.create(a,_,P,_,w,E,P,E,B),U=Ei(q,z.create($,R,V)),Z=U[0],X=U[1],O=U[2],L=Z*Z+X*X-O;return{center:[Z,X],radius:Math.sqrt(Math.max(L,1e-12))}}function Mc(o,a){let _=0,P=0,w=0,E=0,B=0,$=0,R=0,V=0,q=0;for(let Z=0;Z<o.length;Z++){const X=o[Z],O=z.normalize(a[Z],z.create()),L=1-O[0]*O[0],F=-O[0]*O[1],N=-O[0]*O[2],j=1-O[1]*O[1],M=-O[1]*O[2],K=1-O[2]*O[2];_+=L,P+=F,w+=N,E+=j,B+=M,$+=K,R+=L*X[0]+F*X[1]+N*X[2],V+=F*X[0]+j*X[1]+M*X[2],q+=N*X[0]+M*X[1]+K*X[2]}const U=wt.create(_,P,w,P,E,B,w,B,$);return Ei(U,z.create(R,V,q))}function Ci(o,a={}){if(o.length===0)return null;const _=a.tiltDownDeg??8,P=a.radiusScale??1,w=a.alignFirst??!0,E=(a.direction??"ccw")==="ccw"?1:-1,B=o.map(ne=>z.clone(ne.position)),$=o.map(ne=>{const _e=ne.rotation;return z.create(_e[8],_e[9],_e[10])}),R=o.map(ne=>{const _e=ne.rotation;return z.create(_e[4],_e[5],_e[6])}),V=Si(R),q=z.normalize(z.scale(V,-1,z.create())),{centroid:U,normal:Z,u:X,v:O}=Bc(B,q),L=B.map(ne=>{const _e=z.sub(ne,U,z.create());return[z.dot(_e,X),z.dot(_e,O)]}),{center:F,radius:N}=Tc(L),j=N*P,M=z.add(U,z.add(z.scale(X,F[0],z.create()),z.scale(O,F[1],z.create()),z.create()),z.create()),K=Mc(B,$),ae=j*Math.tan(_*Math.PI/180),ve=z.sub(K,z.scale(Z,ae,z.create()),z.create());let de=0;if(w){const ne=z.sub(B[0],M,z.create());de=Math.atan2(z.dot(ne,O),z.dot(ne,X))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${j.toFixed(2)}, tilt=${_}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:M,radius:j,normal:Z,u:X,v:O,lookAt:ve,startPhase:de,direction:E}}function ki(o,a){const _=(o.startPhase+a*o.direction)*2*Math.PI,P=Math.cos(_),w=Math.sin(_),E=z.add(o.center,z.add(z.scale(o.u,o.radius*P,z.create()),z.scale(o.v,o.radius*w,z.create()),z.create()),z.create()),B=z.normalize(z.sub(o.lookAt,E,z.create())),$=z.cross(B,o.normal,z.create());z.length($)<1e-6&&z.copy(o.u,$),z.normalize($,$);const R=z.cross(B,$,z.create());z.normalize(R,R);const V=pt.create();return V[0]=$[0],V[1]=R[0],V[2]=B[0],V[3]=0,V[4]=$[1],V[5]=R[1],V[6]=B[1],V[7]=0,V[8]=$[2],V[9]=R[2],V[10]=B[2],V[11]=0,V[12]=0,V[13]=0,V[14]=0,V[15]=1,{position:E,rotation:V,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Ac(o,a={}){const _=Ci(o,a);if(!_)return[];const P=a.numViews??120;return Array.from({length:P},(w,E)=>({...ki(_,E/P),img_name:`circle_${E.toString().padStart(4,"0")}`,id:E}))}function Dc(o){const a=new Uint8Array(o),_=Math.min(a.byteLength,65536),P=new TextDecoder("ascii").decode(a.subarray(0,_)),w=P.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const E=w+10+1,B=P.slice(0,w).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(B[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const $=B.find(ie=>ie.startsWith("format"));if(!$||!$.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${$??"<none>"})`);const R={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},V=[];let q=null;for(const ie of B)if(ie.startsWith("element ")){const[,me,fe]=ie.split(/\s+/);q={name:me,count:parseInt(fe,10),props:[],bytesPerRecord:0,hasList:!1},V.push(q)}else if(ie.startsWith("property ")&&q){const me=ie.split(/\s+/);if(me[1]==="list"){const fe=me[2],be=me[3],Me=me[4];q.props.push({name:Me,type:be,isList:!0,listCountType:fe,listItemType:be}),q.hasList=!0}else{const fe=me[1],be=me[2];if(q.props.push({name:be,type:fe,isList:!1}),R[fe]===void 0)throw new Error(`mesh PLY: unsupported prop type '${fe}'`);q.bytesPerRecord+=R[fe]}}const U=V.find(ie=>ie.name==="vertex"),Z=V.find(ie=>ie.name==="face"||ie.name==="faces");if(!U)throw new Error("mesh PLY: missing 'element vertex'");if(!Z)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(U.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const X=U.props.find(ie=>ie.name==="x"),O=U.props.find(ie=>ie.name==="y"),L=U.props.find(ie=>ie.name==="z");if(!X||!O||!L)throw new Error("mesh PLY: vertex must have x/y/z");let F=0;const N=new Map;for(const ie of U.props)N.set(ie.name,{off:F,type:ie.type}),F+=R[ie.type];const j=N.get("x"),M=N.get("y"),K=N.get("z");if(j.type!==M.type||j.type!==K.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${j.type}/${M.type}/${K.type})`);const ae=j.type,ve=ae==="double"||ae==="float64";if(!ve&&ae!=="float"&&ae!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ae}')`);const de=new Float32Array(U.count*3),ne=new DataView(o),_e=E,te=U.bytesPerRecord;for(let ie=0;ie<U.count;ie++){const me=_e+ie*te;ve?(de[ie*3+0]=ne.getFloat64(me+j.off,!0),de[ie*3+1]=ne.getFloat64(me+M.off,!0),de[ie*3+2]=ne.getFloat64(me+K.off,!0)):(de[ie*3+0]=ne.getFloat32(me+j.off,!0),de[ie*3+1]=ne.getFloat32(me+M.off,!0),de[ie*3+2]=ne.getFloat32(me+K.off,!0))}const Fe=_e+U.count*te,Ge=Z.props.find(ie=>ie.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Ie=R[Ge.listCountType],Te=R[Ge.listItemType];if(Ie!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ie}`);let ge=Fe,Pe=0;for(let ie=0;ie<Z.count;ie++){const me=ne.getUint8(ge);me===3&&Pe++,ge+=1+me*Te}const ce=new Uint32Array(Pe*3);ge=Fe;let se=0;for(let ie=0;ie<Z.count;ie++){const me=ne.getUint8(ge);if(ge+=1,me===3)for(let fe=0;fe<3;fe++){const be=ge+fe*Te;let Me;if(Te===4)Me=ne.getUint32(be,!0);else if(Te===2)Me=ne.getUint16(be,!0);else if(Te===1)Me=ne.getUint8(be);else throw new Error(`mesh PLY: unsupported face index size ${Te}`);ce[se++]=Me}ge+=me*Te}return{positions:de,indices:ce}}function Gc(o){const a=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const _=a.getUint32(0,!0),P=a.getUint32(4,!0),w=_*12,E=P*4;if(o.byteLength<8+w+E)throw new Error(`mesh .bin: truncated (expected ${8+w+E} B, got ${o.byteLength} B)`);const B=new Float32Array(o.slice(8,8+w)),$=new Uint32Array(o.slice(8+w,8+w+E));return{positions:B,indices:$}}function Bi(o,a){return(a??"").toLowerCase().endsWith(".ply")?Dc(o):Gc(o)}function Lc(o,a){const _=o.length/3,P=new Float32Array(_*3);for(let w=0;w<a.length;w+=3){const E=a[w]*3,B=a[w+1]*3,$=a[w+2]*3,R=o[E],V=o[E+1],q=o[E+2],U=o[B],Z=o[B+1],X=o[B+2],O=o[$],L=o[$+1],F=o[$+2],N=U-R,j=Z-V,M=X-q,K=O-R,ae=L-V,ve=F-q,de=j*ve-M*ae,ne=M*K-N*ve,_e=N*ae-j*K;P[E]+=de,P[E+1]+=ne,P[E+2]+=_e,P[B]+=de,P[B+1]+=ne,P[B+2]+=_e,P[$]+=de,P[$+1]+=ne,P[$+2]+=_e}for(let w=0;w<_;w++){const E=w*3,B=P[E],$=P[E+1],R=P[E+2],V=Math.sqrt(B*B+$*$+R*R);if(V>1e-12){const q=1/V;P[E]=B*q,P[E+1]=$*q,P[E+2]=R*q}}return P}function Ti(o,a){const _=o.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(_,0,a.positions);const P=Lc(a.positions,a.indices),w=o.createBuffer({label:"mesh-cull normal buffer",size:P.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(w,0,P);const E=o.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(E,0,a.indices),{vertexBuffer:_,normalBuffer:w,indexBuffer:E,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function zc(o,a){try{const _=await fetch(a);if(!_.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${_.status}`),null;const P=await _.arrayBuffer(),w=Bi(P,a);return console.log(`[mesh-cull] loaded ${a}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),Ti(o,w)}catch(_){return console.warn(`[mesh-cull] load error for ${a}:`,_),null}}function Ic(o,a,_){try{const P=Bi(a,_);return console.log(`[mesh-cull] loaded from bundle: ${P.positions.length/3} verts, ${P.indices.length/3} tris`),Ti(o,P)}catch(P){return console.warn("[mesh-cull] parse error:",P),null}}const Mi="BITYMI01",Rc=0,Uc=1,Vc=2,Oc=3,Fc=4,Nc=5,Wc=6;function ns(o){const a=(o&32768)>>15,_=(o&31744)>>10,P=o&1023;return _===0?(a?-1:1)*Math.pow(2,-14)*(P/1024):_===31?P?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,_-15)*(1+P/1024)}function pi(o,a,_,P,w,E){const B=(o-_.width*.5)/P.focal[0],$=-((a-_.height*.5)/P.focal[1]),R=P.rotation,V=R[0],q=R[4],U=R[8],Z=R[1],X=R[5],O=R[9],L=R[2],F=R[6],N=R[10];let j=B*V+$*Z+L,M=B*q+$*X+F,K=B*U+$*O+N;const ae=Math.hypot(j,M,K)||1;j/=ae,M/=ae,K/=ae;const ve=P.position[0],de=P.position[1],ne=P.position[2],_e=E*.005,te=_e*_e,Fe=new Uint32Array(w.buffer,w.byteOffset,w.length),Ge=w.length/8;let Ie=1/0,Te=0,ge=0,Pe=0,ce=-1;for(let se=0;se<Ge;se++){const ie=se*8,me=w[ie+0]-ve,fe=w[ie+1]-de,be=w[ie+2]-ne,Me=me*j+fe*M+be*K;if(Me<=0)continue;const ye=me-Me*j,ke=fe-Me*M,Ve=be-Me*K;if(ye*ye+ke*ke+Ve*Ve>=te||!(Fe[ie+7]>>>16&1))continue;const x=Fe[ie+5],i=Fe[ie+6],m=ns(x&65535),p=ns(x>>>16&65535),v=ns(i&65535),y=ns(i>>>16&65535),C=Math.hypot(m,p,v,y)||1,k=m/C,r=p/C,h=v/C,u=y/C,f=2*(r*u+k*h),l=2*(h*u-k*r),d=1-2*(r*r+h*h),g=j*f+M*l+K*d;let b;Math.abs(g)>1e-6?(b=(me*f+fe*l+be*d)/g,(!isFinite(b)||b<=0)&&(b=Me)):b=Me,b<Ie&&(Ie=b,Te=ve+b*j,ge=de+b*M,Pe=ne+b*K,ce=se)}return ce<0?null:[Te,ge,Pe]}function Ai(o){const a=new Uint8Array(o),_=new TextDecoder().decode(a.subarray(0,8));if(_!==Mi)throw new Error(`Not a BITYMI bundle (bad magic '${_}')`);const P=new DataView(o),w=P.getUint32(8,!0),E=12,B=20;let $=null,R=null,V=null,q=null;for(let U=0;U<w;U++){const Z=E+U*B,X=P.getUint32(Z+0,!0),O=Number(P.getBigUint64(Z+4,!0)),L=Number(P.getBigUint64(Z+12,!0)),F=a.slice(O,O+L).buffer;X===Rc||X===Uc||X===Nc?$=F:X===Vc?R=F:X===Oc||X===Fc?V=F:X===Wc&&(q=F)}if($===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:$,camerasBuffer:R,atlasBuffer:V,meshBuffer:q}}async function $c(o,a){var B;const _=await fetch(o);if(!_.ok)throw new Error(`fetch failed: ${_.status} ${_.statusText}`);const P=(()=>{const $=_.headers.get("content-length");return $&&parseInt($,10)||void 0})(),w=(B=_.body)==null?void 0:B.getReader();let E;if(!w)E=await _.arrayBuffer(),a&&a(E.byteLength,P,0);else{const $=[];let R=0,V=performance.now(),q=0;for(;;){const{done:X,value:O}=await w.read();if(X)break;$.push(O),R+=O.byteLength;const L=performance.now();if(L-V>=150&&a){const F=(R-q)/((L-V)/1e3);a(R,P,F),V=L,q=R}}const U=new Uint8Array(R);let Z=0;for(const X of $)U.set(X,Z),Z+=X.byteLength;E=U.buffer,a&&a(R,P,0)}return E.byteLength>=8&&new TextDecoder().decode(new Uint8Array(E,0,8))===Mi?{bundle:Ai(E),rawPly:null}:{bundle:null,rawPly:E}}function qc(o){return new Promise(a=>{const _=document.createElement("input");_.type="file",_.accept=o,_.style.display="none",_.onchange=()=>{var P;return a(((P=_.files)==null?void 0:P[0])??null)},document.body.appendChild(_),_.click(),setTimeout(()=>document.body.removeChild(_),1e3)})}function jc(o,a,_){const P=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),E=document.getElementById("quick-links");w&&(w.onclick=async()=>{const q=await qc(".ply,.bitymi");if(q)if(P&&(P.style.display="none"),q.name.toLowerCase().endsWith(".bitymi")){const U=await q.arrayBuffer(),{pcBuffer:Z}=Ai(U),X=new File([Z],q.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),O=await Vs(X,o);a(O)}else{const U=await Vs(q,o);a(U)}}),E&&(E.innerHTML="");const B=new URLSearchParams(window.location.search),$=B.get("bundle")??B.get("model_url"),R=B.get("camera_url"),V=B.get("mesh_url");$&&(P&&(P.style.display="none"),_($,R,V))}async function Kc(o,a,_,P){const w=new $s(o,_),E=new Cc(w);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const $=typeof window<"u"&&window.parent!==window,R={pos:new Float32Array(3),rot:new Float32Array(16)};if($){window.addEventListener("message",d=>{const g=d.data;if(!(!g||g.type!=="halloumi_sync_pose")&&!(!Array.isArray(g.position)||g.position.length!==3)&&!(!Array.isArray(g.rotation)||g.rotation.length!==16)){for(let b=0;b<3;b++)w.position[b]=g.position[b];for(let b=0;b<16;b++)w.rotation[b]=g.rotation[b];w.update_buffer(),E.resetToCamera();for(let b=0;b<3;b++)R.pos[b]=w.position[b];for(let b=0;b<16;b++)R.rot[b]=w.rotation[b]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const V=()=>{if(!$)return;const d=w.position,g=w.rotation;let b=!1;for(let T=0;T<3;T++)if(Math.abs(d[T]-R.pos[T])>1e-6){b=!0;break}if(!b){for(let T=0;T<16;T++)if(Math.abs(g[T]-R.rot[T])>1e-6){b=!0;break}}if(b){for(let T=0;T<3;T++)R.pos[T]=d[T];for(let T=0;T<16;T++)R.rot[T]=g[T];try{window.parent.postMessage({type:"halloumi_camera_state",position:[d[0],d[1],d[2]],rotation:Array.from(g)},"*")}catch{}}},q="rgba8unorm";a.configure({device:_,format:q,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let U=null;const Z=()=>{w.on_update_canvas(),U!==null&&ts(o.width,o.height,_,U.render_settings_buffer)};new ResizeObserver(()=>{const d=Math.max(.25,h.render_scale),g=Math.max(1,Math.ceil(d*o.clientWidth)),b=Math.max(1,Math.ceil(d*o.clientHeight));o.width===g&&o.height===b||(o.width=g,o.height=b,Z())}).observe(o);let O=0,L=0;const F=()=>{(o.width!==O||o.height!==L)&&(O=o.width,L=o.height,Z())},N=new URLSearchParams(window.location.search);let M=N.get("animation")==="1";E.enabled=!M;const K=N.get("camera_url"),ae=N.get("mesh_cull"),ve=ae==="1"||ae==="true",de=N.get("mesh_normal_margin")??N.get("mesh_margin"),ne=de!==null?Number(de):NaN,_e=Number.isFinite(ne)?ne:0,te=N.get("mesh_debug"),Fe=te==="1"||te==="true",Ge=N.get("bfc"),Ie=Ge==="1"||Ge==="true",Te=N.get("bfc_cos"),ge=Te!==null?Number(Te):NaN,Pe=Number.isFinite(ge)?ge:2,ce=N.get("mesh_sample_mode"),se=ce!==null?parseInt(ce,10):NaN,ie=Number.isFinite(se)&&se>=0&&se<=7?se:1,me=N.get("mesh_silhouette"),fe=me==="1"||me==="true",be=N.get("mesh_invert_depth"),Me=be==="1"||be==="true",ye=N.get("ht"),ke=ye==="3"?3:ye==="2"?2:ye==="1"||ye==="true"?1:0,Ve=N.get("ht_k"),A=Ve!==null?Number(Ve):NaN,Y=Number.isFinite(A)?A:150,x=N.get("wsr"),i=x==="1"||x==="true"||x==="2"||x==="3",m=x==="2",p=x==="3",v=Number(N.get("sat_t")),y=Number.isFinite(v)&&v>0?v:m?.05:.1,C=Number(N.get("dg_m")),k=Number.isFinite(C)&&C>0?C:.15,r=Math.max(1,window.devicePixelRatio||1),h={gaussian_scaling:1,sh_bias:.5,animate:M,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Ie,bfc_cos:Pe,ht_mode:ke,ht_k:Y,wsr:i,wsr_gate:m,wsr_dgate:p,sat_t:y,dg_margin:k,mesh_cull:ve,mesh_margin:_e,mesh_debug:Fe,mesh_sample_mode:ie,mesh_silhouette:fe,mesh_invert_depth:Me,render_scale:1},u=new jl.Pane({title:"Config",expanded:!0});u.addInput(h,"animate",{label:"Animate"}).on("change",d=>{const g=M;M=d.value,E.enabled=!d.value,!g&&M&&f.value&&f.value.onAnimateStart(),g&&!M&&f.value&&f.value.onAnimateStop()}),u.addInput(h,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const f={value:null};jc(_,d=>l(d,[],null,null),async(d,g,b)=>{let T=g??K,W,H=null,re=null;const J=d.toLowerCase();if(J.endsWith(".bitymi")||J.includes(".bitymi?")){js("downloading bundle ...");try{const{bundle:oe}=await $c(d,(ue,pe,Ae)=>{const Ee=ue/1048576,We=pe?pe/(1024*1024):void 0,Ye=Ae/(1024*1024),He=pe?Math.min(99,Math.floor(ue/pe*100)):void 0,Le=We?`total ${We.toFixed(1)} MB`:"total -- MB",Ze=We&&He!==void 0?`${Ee.toFixed(1)} MB downloaded (${He}%)`:`${Ee.toFixed(1)} MB downloaded`,nt=`${Ye.toFixed(2)} MB/s`;Ot(`downloading bundle ...
${Le}, ${Ze}
${nt}`)});if(!oe)throw new Error("Expected a .bitymi bundle");Ot("parsing PLY ...");const we=new File([oe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(W=await Vs(we,_),!T&&oe.camerasBuffer&&(T=URL.createObjectURL(new Blob([oe.camerasBuffer],{type:"application/json"}))),oe.atlasBuffer){const ue=oe.atlasBuffer.byteLength/1048576;Ot(`uploading atlas ...
${ue.toFixed(1)} MB BC7`);try{const pe=Fl(oe.atlasBuffer);H=Wl(_,pe,!0)}catch(pe){console.warn("[atlas] failed to parse/upload atlas:",pe)}}oe.meshBuffer&&!b&&(Ot("uploading mesh ..."),re=Ic(_,oe.meshBuffer,"bundle.mesh"))}catch(oe){throw Un(),oe}}else W=await $l(d,_);b&&(Ot("loading mesh ..."),re=await zc(_,b));const I=T?await vc(T):[];I.length>0&&w.set_preset(I[0]),l(W,I,H,re)});function l(d,g=[],b=null,T=null){const W=[(d.bbox.min[0]+d.bbox.max[0])/2,(d.bbox.min[1]+d.bbox.max[1])/2,(d.bbox.min[2]+d.bbox.max[2])/2];E.setBbox(d.bbox.min,d.bbox.max);const H=.5*Math.sqrt((d.bbox.max[0]-d.bbox.min[0])**2+(d.bbox.max[1]-d.bbox.min[1])**2+(d.bbox.max[2]-d.bbox.min[2])**2);function re(Q,he){const le=pi(Q,he,o,w,d.surfel_data,H);le&&(E.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function J(){const Q=o.width*.5,he=o.height*.5,le=pi(Q,he,o,w,d.surfel_data,H);if(!le)return;const ze=w.rotation,Oe=ze[2],xe=ze[6],Be=ze[10],qe=le[0]-w.position[0],et=le[1]-w.position[1],lt=le[2]-w.position[2],bt=qe*Oe+et*xe+lt*Be;bt>0&&E.setOrbitDepth(bt)}if(g.length===0){const Q=d.bbox.max[0]-d.bbox.min[0],he=d.bbox.max[1]-d.bbox.min[1],le=d.bbox.max[2]-d.bbox.min[2],Oe=.5*Math.sqrt(Q*Q+he*he+le*le)*.5;z.set(W[0]-Oe,W[1]-Oe,W[2]-Oe,w.position);const xe=z.create(Oe,Oe,Oe);z.normalize(xe,xe);const Be=z.create(0,1,0),qe=z.create();z.cross(Be,xe,qe),z.normalize(qe,qe);const et=z.create();z.cross(xe,qe,et);const lt=wt.create(qe[0],et[0],xe[0],qe[1],et[1],xe[1],qe[2],et[2],xe[2]);pt.fromMat3(lt,w.rotation),w.update_buffer()}E.setCenter(z.create(d.centroid[0],d.centroid[1],d.centroid[2]));const I=new mc(d,_,q,w.uniform_buffer,P,b,T);U=I,ts(o.width,o.height,_,I.render_settings_buffer),h.atlas_enabled=b!==null,T===null&&(h.mesh_cull=!1),I.setMeshCullEnabled(h.mesh_cull),I.setMeshMargin(h.mesh_margin),T===null&&(h.mesh_debug=!1),I.setMeshOverlayEnabled(h.mesh_debug);{const Q=d.surfel_data,he=Q.length/8;let le=0,ze=0,Oe=0;for(let Be=0;Be<he;Be++)le+=Q[Be*8],ze+=Q[Be*8+1],Oe+=Q[Be*8+2];const xe=he>0?[le/he,ze/he,Oe/he]:[0,0,0];I.setBfcParams(h.bfc_cos,xe),an({bfc:h.bfc},_,I.render_settings_buffer),console.log(`[bfc] flag=${h.bfc} cos=${h.bfc_cos} centroid=(${xe[0].toFixed(3)}, ${xe[1].toFixed(3)}, ${xe[2].toFixed(3)})`)}I.htEnabled=h.ht_mode>0,I.htSortedTail=h.ht_mode===2,I.htOccTail=h.ht_mode===3,I.setHtTailK(h.ht_k),h.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${h.ht_mode}: ${h.ht_mode===2?"exact core + SORTED tail":h.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${h.ht_k})`),I.wsrEnabled=h.wsr,I.wsrGateEnabled=h.wsr_gate,I.wsrDGateEnabled=h.wsr_dgate,I.setWsrSatT(h.sat_t),I.setWsrDGateMargin(h.dg_margin),h.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),an({meshSampleMode:h.mesh_sample_mode,meshSilhouetteCull:h.mesh_silhouette,meshInvertDepth:h.mesh_invert_depth},_,I.render_settings_buffer),console.log(`[mesh-cull] ${T!==null?"mesh loaded":"no mesh"} · toggle=${h.mesh_cull} · margin=${h.mesh_margin}m · debug=${h.mesh_debug} · sample_mode=${h.mesh_sample_mode} · silhouette=${h.mesh_silhouette} · invert=${h.mesh_invert_depth}`);let oe=!1;const we=(()=>{if(b!==null)return`${b.meta.format===2?"BC7":b.meta.format===3?"ASTC 4×4":b.meta.format===7?"BC7 codebook gather (typeD)":`format=${b.meta.format}`} ${b.meta.width}×${b.meta.height}, ${b.meta.n_layers} layers`;const Q=_.features.has("texture-compression-bc"),he=_.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(Q?["BC7"]:[]).concat(he?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",we),ci(d.sh_bias,_,I.render_settings_buffer),li(h.gaussian_scaling,_,I.render_settings_buffer),h.sh_bias=d.sh_bias;const ue=d.num_points.toLocaleString(),pe={stats:`${ue} surfels · -- fps`};u.addMonitor(pe,"stats",{label:"Stats",interval:200}),u.addMonitor({atlas:we},"atlas",{label:"Atlas"});const Ae={stages:"— ms · awaiting timestamp data"};u.addMonitor(Ae,"stages",{label:"Stages",interval:500});let Ee=null;if(I.timeQueryEnabled){Ee=document.createElement("canvas"),Ee.width=280,Ee.height=24,Ee.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(Ee);const Q=le=>{const ze=Ee.getContext("2d");if(!ze)return;const Oe=Ee.width,xe=Ee.height;if(ze.clearRect(0,0,Oe,xe),!le||le.total<=0){ze.fillStyle="#888",ze.font="11px ui-monospace,Menlo,monospace",ze.fillText("awaiting GPU timestamps…",8,16);return}const Be=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],qe=Math.max(.001,Be.reduce((lt,bt)=>lt+bt.ms,0));let et=0;ze.font="10px ui-monospace,Menlo,monospace",ze.textBaseline="middle";for(const lt of Be){const bt=lt.ms/qe*Oe;ze.fillStyle=lt.color,ze.fillRect(et,0,bt,xe),bt>=38&&(ze.fillStyle="#000c",ze.fillText(`${lt.label} ${lt.ms.toFixed(1)}`,et+4,xe/2)),et+=bt}};setInterval(()=>{oe||I.readPerfMetrics({silent:!0}).then(()=>{const le=I.lastStageBreakdownMs;Q(le),le&&(Ae.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const We=.4,Ye=3,He=.3;let Le=null,Ze=0,nt=0;const it=ft.create(),ot=wt.create();let Ue=g.length>0?0:-1;const st={view:g.length>0?`${Ue+1} / ${g.length}: ${g[Ue].img_name??Ue}`:"— no presets —"};u.addMonitor(st,"view",{label:"View",interval:100});function rt(Q){const he=wt.create(Q[0],Q[1],Q[2],Q[4],Q[5],Q[6],Q[8],Q[9],Q[10]);return ft.fromMat(he)}function je(Q,he){Le={fromPos:z.clone(w.position),toPos:z.clone(Q.position),fromQuat:ft.normalize(rt(w.rotation)),toQuat:ft.normalize(rt(Q.rotation)),target:Q,t:0,duration:Math.max(.01,he)}}const Qe=(Q,he=!0)=>{if(g.length===0)return;Ue=(Q%g.length+g.length)%g.length;const le=g[Ue];he?je(le,We):(w.set_preset(le),E.resetToCamera(),J()),st.view=`${Ue+1} / ${g.length}: ${g[Ue].img_name??Ue}`};g.length>0&&(u.addButton({title:"◀ Prev view"}).on("click",()=>Qe(Ue-1)),u.addButton({title:"Next view ▶"}).on("click",()=>Qe(Ue+1)));const Xe=g.length>0?Ci(g,{tiltDownDeg:15,alignFirst:!0}):null,dt=Xe?Ac(g,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Je=0;const Mt=12;f.value={onAnimateStart:()=>{Je=0},onAnimateStop:()=>{E.resetToCamera(),J()}},u.addInput(h,"render_scale",{label:"Render scale",min:.25,max:r,step:.25}).on("change",Q=>{const he=Math.max(.25,Q.value),le=Math.max(1,Math.ceil(he*o.clientWidth)),ze=Math.max(1,Math.ceil(he*o.clientHeight));(o.width!==le||o.height!==ze)&&(o.width=le,o.height=ze,Z())}),u.addInput(h,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",Q=>li(Q.value,_,I.render_settings_buffer)),u.addInput(h,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",Q=>ci(Q.value,_,I.render_settings_buffer)),u.addInput(h,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",Q=>{I.bgColor=[Q.value.r,Q.value.g,Q.value.b,Q.value.a]});const xt=b?b.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";u.addInput(h,"atlas_enabled",{label:xt}).on("change",Q=>I.setAtlasEnabled(Q.value)),u.addInput(h,"bfc",{label:"Backface"}).on("change",Q=>an({bfc:Q.value},_,I.render_settings_buffer)),u.addInput(h,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",Q=>{I.htEnabled=Q.value>0,I.htSortedTail=Q.value===2,I.htOccTail=Q.value===3}),u.addInput(h,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",Q=>I.setHtTailK(Q.value)),u.addInput(h,"wsr",{label:"WSR (sort-free)"}).on("change",Q=>{I.wsrEnabled=Q.value}),u.addInput(h,"wsr_gate",{label:"WSR sat-gate"}).on("change",Q=>{I.wsrGateEnabled=Q.value}),u.addInput(h,"wsr_dgate",{label:"WSR D-gate"}).on("change",Q=>{I.wsrDGateEnabled=Q.value}),u.addInput(h,"sat_t",{label:"sat tolerance T",min:.01,max:.5,step:.005}).on("change",Q=>{I.setWsrSatT(Q.value)}),u.addInput(h,"dg_margin",{label:"D-gate margin",min:.02,max:.8,step:.005}).on("change",Q=>{I.setWsrDGateMargin(Q.value)});const yt=u.addInput(h,"mesh_cull",{label:"Mesh cull"});yt.on("change",Q=>I.setMeshCullEnabled(Q.value)),I.hasMesh||(yt.disabled=!0);const Pt=u.addInput(h,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});Pt.on("change",Q=>I.setMeshMargin(Q.value)),I.hasMesh||(Pt.disabled=!0);const At=u.addInput(h,"mesh_debug",{label:"Mesh debug"});At.on("change",Q=>I.setMeshOverlayEnabled(Q.value)),I.hasMesh||(At.disabled=!0);const Dt=u.addInput(h,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});Dt.on("change",Q=>an({meshSampleMode:Q.value},_,I.render_settings_buffer)),I.hasMesh||(Dt.disabled=!0);const Gt=u.addInput(h,"mesh_silhouette",{label:"Silhouette cull"});Gt.on("change",Q=>an({meshSilhouetteCull:Q.value},_,I.render_settings_buffer)),I.hasMesh||(Gt.disabled=!0);const Xt=u.addInput(h,"mesh_invert_depth",{label:"Invert depth cull"});Xt.on("change",Q=>an({meshInvertDepth:Q.value},_,I.render_settings_buffer)),I.hasMesh||(Xt.disabled=!0),u.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(g.length>0)w.set_preset(g[0]);else{const Q=d.bbox.max[0]-d.bbox.min[0],he=d.bbox.max[1]-d.bbox.min[1],le=d.bbox.max[2]-d.bbox.min[2],Oe=.5*Math.sqrt(Q*Q+he*he+le*le)*.5;z.set(W[0]-Oe,W[1]-Oe,W[2]-Oe,w.position);const xe=z.create(Oe,Oe,Oe);z.normalize(xe,xe);const Be=z.create();z.cross(z.create(0,1,0),xe,Be),z.normalize(Be,Be);const qe=z.create();z.cross(xe,Be,qe);const et=wt.create(Be[0],qe[0],xe[0],Be[1],qe[1],xe[1],Be[2],qe[2],xe[2]);pt.fromMat3(et,w.rotation),w.update_buffer()}E.resetToCamera(),J()});const St={result:"— click Benchmark —"};u.addMonitor(St,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Qt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function un(){const he=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(Qt))if(he.startsWith(le))return le;return null}const Ke=document.createElement("div");Ke.id="bench-overlay",Ke.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ke);function wn(Q,he,le){const ze=Math.floor(he/Math.max(1,le)*100),Oe=32,xe=Math.floor(he/Math.max(1,le)*Oe),Be="█".repeat(xe)+"░".repeat(Oe-xe);Ke.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${Q}</div><div>[${Be}] ${ze}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${he} / ${le} frames · offscreen · pipelined · no vsync</div>`,Ke.style.display="block"}function us(){Ke.style.display="none"}async function xn(Q=10,he=200){if(oe)return;if(g.length===0){St.result="no cameras to benchmark";return}oe=!0;const le=M,ze=h.animate,Oe=new Float32Array(w.position),xe=new Float32Array(w.rotation);M=!1,h.animate=!1,u.refresh(),Le=null,E.enabled=!1;const Be=un(),qe=Be?Qt[Be]:null,et=(qe==null?void 0:qe.w)??o.width,lt=(qe==null?void 0:qe.h)??o.height,bt=(qe==null?void 0:qe.fovY)??w.getFov(),ds=Be?`${Be} · ${et>=4e3/4+500?"images_4":"images_2"}`:"custom",Wn=o.width,Cn=o.height,ps=w.getFov();o.width=et,o.height=lt,w.setFov(bt),ts(et,lt,_,I.render_settings_buffer);const $n=_.createTexture({size:[et,lt,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),hs=$n.createView(),fs=()=>{const ct=_.createCommandEncoder();I.frame(ct,hs,!1),_.queue.submit([ct.finish()])},Nt=()=>new Promise(ct=>setTimeout(ct,0)),Et=20,Lt=async(ct,Wt)=>{let zt=0,Ct=0;for(wn(Wt,0,ct),await Nt();Ct<ct;){const hn=Math.min(Et,ct-Ct),Tt=performance.now();for(let kn=0;kn<hn;kn++)w.set_preset(g[(Ct+kn)%g.length]),fs();await _.queue.onSubmittedWorkDone();const qn=performance.now();zt+=qn-Tt,Ct+=hn,wn(Wt,Ct,ct),await Nt()}return zt};try{await Lt(Q,"Warming up");const Wt=await Lt(he,"Benchmarking")/he,zt=1e3/Wt,Ct=d.num_points??d.surfel_data.length/8,hn=(bt*180/Math.PI).toFixed(1),Tt=`${zt.toFixed(1)} FPS  (${Wt.toFixed(2)} ms/frame)
${et}×${lt} · fovY ${hn}° · ${ds}
${Ct.toLocaleString()} surfels · ${Q}w+${he}b · pipelined`;St.result=Tt,console.log("[bench]",Tt.replace(/\n/g,"  |  "))}catch(ct){console.error("[bench] failed:",ct),St.result=`bench failed: ${ct}`}finally{us(),$n.destroy(),o.width=Wn,o.height=Cn,w.setFov(ps),ts(Wn,Cn,_,I.render_settings_buffer),w.position.set(Oe),w.rotation.set(xe),w.update_buffer(),E.enabled=!le,M=le,h.animate=ze,u.refresh(),oe=!1}}u.addButton({title:"📊 Benchmark"}).on("click",()=>xn()),document.addEventListener("keydown",Q=>{const he=Q.key;if(he>="0"&&he<="9"&&g.length>0){const le=parseInt(he);le<g.length&&Qe(le)}else he==="ArrowLeft"||he==="PageUp"?(Qe(Ue-1),Q.preventDefault()):he==="ArrowRight"||he==="PageDown"?(Qe(Ue+1),Q.preventDefault()):(he==="d"||he==="D")&&I.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function Fn(Q,he){const le=o.getBoundingClientRect(),ze=window.devicePixelRatio||1;return[(Q-le.left)*ze,(he-le.top)*ze]}o.addEventListener("dblclick",Q=>{const[he,le]=Fn(Q.clientX,Q.clientY);re(he,le)});let Bt=0,yn=0,Pn=0;o.addEventListener("pointerdown",Q=>{if(Q.pointerType!=="touch")return;const he=performance.now(),le=he-Bt,ze=Q.clientX-yn,Oe=Q.clientY-Pn;if(le>0&&le<300&&ze*ze+Oe*Oe<40*40){const[xe,Be]=Fn(Q.clientX,Q.clientY);re(xe,Be),Bt=0}else Bt=he,yn=Q.clientX,Pn=Q.clientY});function Nn(){return B}let Sn=performance.now(),En=60,Ft=Promise.resolve(),dn=0;async function pn(){var Oe;const Q=performance.now(),he=Math.min((Q-Sn)/1e3,.1);if(Sn=Q,he>0){const xe=((Oe=I.lastStageBreakdownMs)==null?void 0:Oe.total)??0,Be=xe>.5?1e3/xe:1/he;En=En*.9+Be*.1,pe.stats=`${ue} surfels · ${Math.round(En)} fps`}if(oe){requestAnimationFrame(pn);return}if(Nn()&&(Le||M)&&(Le=null,E.resetToCamera(),J(),M&&(M=!1,h.animate=!1,u.refresh())),M&&h.animateMode==="circle"&&Xe){Je+=he/Mt,Je>=1&&(Je-=1);const xe=ki(Xe,Je);w.set_preset(xe),E.update(he);const Be=_.createCommandEncoder();I.frame(Be,a.getCurrentTexture().createView()),_.queue.submit([Be.finish()]),dn++,dn===2&&Un(),requestAnimationFrame(pn);return}if(Le){Le.t+=he/Le.duration;const xe=Math.min(1,Le.t),Be=xe*xe*(3-2*xe);z.lerp(Le.fromPos,Le.toPos,Be,w.position),ft.slerp(Le.fromQuat,Le.toQuat,Be,it),wt.fromQuat(it,ot),pt.fromMat3(ot,w.rotation),w.update_buffer(),Le.t>=1&&(w.set_preset(Le.target),Le=null,M?g.length>0&&(Ze=He):(E.resetToCamera(),J()))}else if(M&&!Nn()){const xe=h.animateMode==="circle"&&dt.length>0,Be=xe?dt:g;if(Be.length!==0){if(Ze-=he,Ze<=0){const et=((xe?nt:Ue)+1)%Be.length;xe?nt=et:Ue=et;const lt=xe?Ye/8:Ye;je(Be[et],lt),xe||(st.view=`${Ue+1} / ${g.length}: ${g[Ue].img_name??Ue}`)}}}E.update(he),V(),F(),await Ft;const le=_.createCommandEncoder(),ze=a.getCurrentTexture().createView();I.frame(le,ze),_.queue.submit([le.finish()]),Ft=_.queue.onSubmittedWorkDone(),dn++,dn===2&&Un(),requestAnimationFrame(pn)}requestAnimationFrame(pn)}}(function(){let a="dev";for(const P of Array.from(document.querySelectorAll('script[type="module"]'))){const E=P.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(E){a=E[1];break}}const _=document.createElement("div");_.textContent="v "+a,_.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(_.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(_)})();(async()=>{if(navigator.gpu===void 0){const E=document.querySelector("#title");E.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const E=document.querySelector("#title");E.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const _=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),P=document.querySelector("#webgpu-canvas");Il(P!==null);const w=P.getContext("webgpu");Kc(P,w,_,a)})();
