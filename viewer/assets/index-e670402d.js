var yl=Object.defineProperty;var Pl=(i,a,f)=>a in i?yl(i,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[a]=f;var A=(i,a,f)=>(Pl(i,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))y(g);new MutationObserver(g=>{for(const S of g)if(S.type==="childList")for(const T of S.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&y(T)}).observe(document,{childList:!0,subtree:!0});function f(g){const S={};return g.integrity&&(S.integrity=g.integrity),g.referrerPolicy&&(S.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?S.credentials="include":g.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function y(g){if(g.ep)return;g.ep=!0;const S=f(g);fetch(g.href,S)}})();function Sl(i,a){return class extends i{constructor(...f){super(...f),a(this)}}}const El=Sl(Array,i=>i.fill(0));let Le=1e-6;function Cl(i){function a(P=0,C=0){const k=new i(2);return P!==void 0&&(k[0]=P,C!==void 0&&(k[1]=C)),k}const f=a;function y(P,C,k){const r=k??new i(2);return r[0]=P,r[1]=C,r}function g(P,C){const k=C??new i(2);return k[0]=Math.ceil(P[0]),k[1]=Math.ceil(P[1]),k}function S(P,C){const k=C??new i(2);return k[0]=Math.floor(P[0]),k[1]=Math.floor(P[1]),k}function T(P,C){const k=C??new i(2);return k[0]=Math.round(P[0]),k[1]=Math.round(P[1]),k}function V(P,C=0,k=1,r){const h=r??new i(2);return h[0]=Math.min(k,Math.max(C,P[0])),h[1]=Math.min(k,Math.max(C,P[1])),h}function L(P,C,k){const r=k??new i(2);return r[0]=P[0]+C[0],r[1]=P[1]+C[1],r}function O(P,C,k,r){const h=r??new i(2);return h[0]=P[0]+C[0]*k,h[1]=P[1]+C[1]*k,h}function q(P,C){const k=P[0],r=P[1],h=C[0],u=C[1],_=Math.sqrt(k*k+r*r),l=Math.sqrt(h*h+u*u),d=_*l,v=d&&ve(P,C)/d;return Math.acos(v)}function F(P,C,k){const r=k??new i(2);return r[0]=P[0]-C[0],r[1]=P[1]-C[1],r}const X=F;function Z(P,C){return Math.abs(P[0]-C[0])<Le&&Math.abs(P[1]-C[1])<Le}function N(P,C){return P[0]===C[0]&&P[1]===C[1]}function z(P,C,k,r){const h=r??new i(2);return h[0]=P[0]+k*(C[0]-P[0]),h[1]=P[1]+k*(C[1]-P[1]),h}function U(P,C,k,r){const h=r??new i(2);return h[0]=P[0]+k[0]*(C[0]-P[0]),h[1]=P[1]+k[1]*(C[1]-P[1]),h}function R(P,C,k){const r=k??new i(2);return r[0]=Math.max(P[0],C[0]),r[1]=Math.max(P[1],C[1]),r}function W(P,C,k){const r=k??new i(2);return r[0]=Math.min(P[0],C[0]),r[1]=Math.min(P[1],C[1]),r}function D(P,C,k){const r=k??new i(2);return r[0]=P[0]*C,r[1]=P[1]*C,r}const H=D;function re(P,C,k){const r=k??new i(2);return r[0]=P[0]/C,r[1]=P[1]/C,r}function Pe(P,C){const k=C??new i(2);return k[0]=1/P[0],k[1]=1/P[1],k}const de=Pe;function te(P,C,k){const r=k??new i(3),h=P[0]*C[1]-P[1]*C[0];return r[0]=0,r[1]=0,r[2]=h,r}function ve(P,C){return P[0]*C[0]+P[1]*C[1]}function ne(P){const C=P[0],k=P[1];return Math.sqrt(C*C+k*k)}const Fe=ne;function Ge(P){const C=P[0],k=P[1];return C*C+k*k}const Ve=Ge;function Be(P,C){const k=P[0]-C[0],r=P[1]-C[1];return Math.sqrt(k*k+r*r)}const ge=Be;function Ee(P,C){const k=P[0]-C[0],r=P[1]-C[1];return k*k+r*r}const ce=Ee;function oe(P,C){const k=C??new i(2),r=P[0],h=P[1],u=Math.sqrt(r*r+h*h);return u>1e-5?(k[0]=r/u,k[1]=h/u):(k[0]=0,k[1]=0),k}function he(P,C){const k=C??new i(2);return k[0]=-P[0],k[1]=-P[1],k}function pe(P,C){const k=C??new i(2);return k[0]=P[0],k[1]=P[1],k}const ae=pe;function be(P,C,k){const r=k??new i(2);return r[0]=P[0]*C[0],r[1]=P[1]*C[1],r}const Me=be;function xe(P,C,k){const r=k??new i(2);return r[0]=P[0]/C[0],r[1]=P[1]/C[1],r}const ke=xe;function Ne(P=1,C){const k=C??new i(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*P,k[1]=Math.sin(r)*P,k}function M(P){const C=P??new i(2);return C[0]=0,C[1]=0,C}function Y(P,C,k){const r=k??new i(2),h=P[0],u=P[1];return r[0]=h*C[0]+u*C[4]+C[12],r[1]=h*C[1]+u*C[5]+C[13],r}function x(P,C,k){const r=k??new i(2),h=P[0],u=P[1];return r[0]=C[0]*h+C[4]*u+C[8],r[1]=C[1]*h+C[5]*u+C[9],r}function o(P,C,k,r){const h=r??new i(2),u=P[0]-C[0],_=P[1]-C[1],l=Math.sin(k),d=Math.cos(k);return h[0]=u*d-_*l+C[0],h[1]=u*l+_*d+C[1],h}function m(P,C,k){const r=k??new i(2);return oe(P,r),D(r,C,r)}function p(P,C,k){const r=k??new i(2);return ne(P)>C?m(P,C,r):pe(P,r)}function w(P,C,k){const r=k??new i(2);return z(P,C,.5,r)}return{create:a,fromValues:f,set:y,ceil:g,floor:S,round:T,clamp:V,add:L,addScaled:O,angle:q,subtract:F,sub:X,equalsApproximately:Z,equals:N,lerp:z,lerpV:U,max:R,min:W,mulScalar:D,scale:H,divScalar:re,inverse:Pe,invert:de,cross:te,dot:ve,length:ne,len:Fe,lengthSq:Ge,lenSq:Ve,distance:Be,dist:ge,distanceSq:Ee,distSq:ce,normalize:oe,negate:he,copy:pe,clone:ae,multiply:be,mul:Me,divide:xe,div:ke,random:Ne,zero:M,transformMat4:Y,transformMat3:x,rotate:o,setLength:m,truncate:p,midpoint:w}}const Yr=new Map;function fi(i){let a=Yr.get(i);return a||(a=Cl(i),Yr.set(i,a)),a}function kl(i){function a(l,d,v){const b=new i(3);return l!==void 0&&(b[0]=l,d!==void 0&&(b[1]=d,v!==void 0&&(b[2]=v))),b}const f=a;function y(l,d,v,b){const B=b??new i(3);return B[0]=l,B[1]=d,B[2]=v,B}function g(l,d){const v=d??new i(3);return v[0]=Math.ceil(l[0]),v[1]=Math.ceil(l[1]),v[2]=Math.ceil(l[2]),v}function S(l,d){const v=d??new i(3);return v[0]=Math.floor(l[0]),v[1]=Math.floor(l[1]),v[2]=Math.floor(l[2]),v}function T(l,d){const v=d??new i(3);return v[0]=Math.round(l[0]),v[1]=Math.round(l[1]),v[2]=Math.round(l[2]),v}function V(l,d=0,v=1,b){const B=b??new i(3);return B[0]=Math.min(v,Math.max(d,l[0])),B[1]=Math.min(v,Math.max(d,l[1])),B[2]=Math.min(v,Math.max(d,l[2])),B}function L(l,d,v){const b=v??new i(3);return b[0]=l[0]+d[0],b[1]=l[1]+d[1],b[2]=l[2]+d[2],b}function O(l,d,v,b){const B=b??new i(3);return B[0]=l[0]+d[0]*v,B[1]=l[1]+d[1]*v,B[2]=l[2]+d[2]*v,B}function q(l,d){const v=l[0],b=l[1],B=l[2],$=d[0],K=d[1],ie=d[2],Q=Math.sqrt(v*v+b*b+B*B),J=Math.sqrt($*$+K*K+ie*ie),j=Q*J,we=j&&ve(l,d)/j;return Math.acos(we)}function F(l,d,v){const b=v??new i(3);return b[0]=l[0]-d[0],b[1]=l[1]-d[1],b[2]=l[2]-d[2],b}const X=F;function Z(l,d){return Math.abs(l[0]-d[0])<Le&&Math.abs(l[1]-d[1])<Le&&Math.abs(l[2]-d[2])<Le}function N(l,d){return l[0]===d[0]&&l[1]===d[1]&&l[2]===d[2]}function z(l,d,v,b){const B=b??new i(3);return B[0]=l[0]+v*(d[0]-l[0]),B[1]=l[1]+v*(d[1]-l[1]),B[2]=l[2]+v*(d[2]-l[2]),B}function U(l,d,v,b){const B=b??new i(3);return B[0]=l[0]+v[0]*(d[0]-l[0]),B[1]=l[1]+v[1]*(d[1]-l[1]),B[2]=l[2]+v[2]*(d[2]-l[2]),B}function R(l,d,v){const b=v??new i(3);return b[0]=Math.max(l[0],d[0]),b[1]=Math.max(l[1],d[1]),b[2]=Math.max(l[2],d[2]),b}function W(l,d,v){const b=v??new i(3);return b[0]=Math.min(l[0],d[0]),b[1]=Math.min(l[1],d[1]),b[2]=Math.min(l[2],d[2]),b}function D(l,d,v){const b=v??new i(3);return b[0]=l[0]*d,b[1]=l[1]*d,b[2]=l[2]*d,b}const H=D;function re(l,d,v){const b=v??new i(3);return b[0]=l[0]/d,b[1]=l[1]/d,b[2]=l[2]/d,b}function Pe(l,d){const v=d??new i(3);return v[0]=1/l[0],v[1]=1/l[1],v[2]=1/l[2],v}const de=Pe;function te(l,d,v){const b=v??new i(3),B=l[2]*d[0]-l[0]*d[2],$=l[0]*d[1]-l[1]*d[0];return b[0]=l[1]*d[2]-l[2]*d[1],b[1]=B,b[2]=$,b}function ve(l,d){return l[0]*d[0]+l[1]*d[1]+l[2]*d[2]}function ne(l){const d=l[0],v=l[1],b=l[2];return Math.sqrt(d*d+v*v+b*b)}const Fe=ne;function Ge(l){const d=l[0],v=l[1],b=l[2];return d*d+v*v+b*b}const Ve=Ge;function Be(l,d){const v=l[0]-d[0],b=l[1]-d[1],B=l[2]-d[2];return Math.sqrt(v*v+b*b+B*B)}const ge=Be;function Ee(l,d){const v=l[0]-d[0],b=l[1]-d[1],B=l[2]-d[2];return v*v+b*b+B*B}const ce=Ee;function oe(l,d){const v=d??new i(3),b=l[0],B=l[1],$=l[2],K=Math.sqrt(b*b+B*B+$*$);return K>1e-5?(v[0]=b/K,v[1]=B/K,v[2]=$/K):(v[0]=0,v[1]=0,v[2]=0),v}function he(l,d){const v=d??new i(3);return v[0]=-l[0],v[1]=-l[1],v[2]=-l[2],v}function pe(l,d){const v=d??new i(3);return v[0]=l[0],v[1]=l[1],v[2]=l[2],v}const ae=pe;function be(l,d,v){const b=v??new i(3);return b[0]=l[0]*d[0],b[1]=l[1]*d[1],b[2]=l[2]*d[2],b}const Me=be;function xe(l,d,v){const b=v??new i(3);return b[0]=l[0]/d[0],b[1]=l[1]/d[1],b[2]=l[2]/d[2],b}const ke=xe;function Ne(l=1,d){const v=d??new i(3),b=Math.random()*2*Math.PI,B=Math.random()*2-1,$=Math.sqrt(1-B*B)*l;return v[0]=Math.cos(b)*$,v[1]=Math.sin(b)*$,v[2]=B*l,v}function M(l){const d=l??new i(3);return d[0]=0,d[1]=0,d[2]=0,d}function Y(l,d,v){const b=v??new i(3),B=l[0],$=l[1],K=l[2],ie=d[3]*B+d[7]*$+d[11]*K+d[15]||1;return b[0]=(d[0]*B+d[4]*$+d[8]*K+d[12])/ie,b[1]=(d[1]*B+d[5]*$+d[9]*K+d[13])/ie,b[2]=(d[2]*B+d[6]*$+d[10]*K+d[14])/ie,b}function x(l,d,v){const b=v??new i(3),B=l[0],$=l[1],K=l[2];return b[0]=B*d[0*4+0]+$*d[1*4+0]+K*d[2*4+0],b[1]=B*d[0*4+1]+$*d[1*4+1]+K*d[2*4+1],b[2]=B*d[0*4+2]+$*d[1*4+2]+K*d[2*4+2],b}function o(l,d,v){const b=v??new i(3),B=l[0],$=l[1],K=l[2];return b[0]=B*d[0]+$*d[4]+K*d[8],b[1]=B*d[1]+$*d[5]+K*d[9],b[2]=B*d[2]+$*d[6]+K*d[10],b}function m(l,d,v){const b=v??new i(3),B=d[0],$=d[1],K=d[2],ie=d[3]*2,Q=l[0],J=l[1],j=l[2],we=$*j-K*J,fe=K*Q-B*j,me=B*J-$*Q;return b[0]=Q+we*ie+($*me-K*fe)*2,b[1]=J+fe*ie+(K*we-B*me)*2,b[2]=j+me*ie+(B*fe-$*we)*2,b}function p(l,d){const v=d??new i(3);return v[0]=l[12],v[1]=l[13],v[2]=l[14],v}function w(l,d,v){const b=v??new i(3),B=d*4;return b[0]=l[B+0],b[1]=l[B+1],b[2]=l[B+2],b}function P(l,d){const v=d??new i(3),b=l[0],B=l[1],$=l[2],K=l[4],ie=l[5],Q=l[6],J=l[8],j=l[9],we=l[10];return v[0]=Math.sqrt(b*b+B*B+$*$),v[1]=Math.sqrt(K*K+ie*ie+Q*Q),v[2]=Math.sqrt(J*J+j*j+we*we),v}function C(l,d,v,b){const B=b??new i(3),$=[],K=[];return $[0]=l[0]-d[0],$[1]=l[1]-d[1],$[2]=l[2]-d[2],K[0]=$[0],K[1]=$[1]*Math.cos(v)-$[2]*Math.sin(v),K[2]=$[1]*Math.sin(v)+$[2]*Math.cos(v),B[0]=K[0]+d[0],B[1]=K[1]+d[1],B[2]=K[2]+d[2],B}function k(l,d,v,b){const B=b??new i(3),$=[],K=[];return $[0]=l[0]-d[0],$[1]=l[1]-d[1],$[2]=l[2]-d[2],K[0]=$[2]*Math.sin(v)+$[0]*Math.cos(v),K[1]=$[1],K[2]=$[2]*Math.cos(v)-$[0]*Math.sin(v),B[0]=K[0]+d[0],B[1]=K[1]+d[1],B[2]=K[2]+d[2],B}function r(l,d,v,b){const B=b??new i(3),$=[],K=[];return $[0]=l[0]-d[0],$[1]=l[1]-d[1],$[2]=l[2]-d[2],K[0]=$[0]*Math.cos(v)-$[1]*Math.sin(v),K[1]=$[0]*Math.sin(v)+$[1]*Math.cos(v),K[2]=$[2],B[0]=K[0]+d[0],B[1]=K[1]+d[1],B[2]=K[2]+d[2],B}function h(l,d,v){const b=v??new i(3);return oe(l,b),D(b,d,b)}function u(l,d,v){const b=v??new i(3);return ne(l)>d?h(l,d,b):pe(l,b)}function _(l,d,v){const b=v??new i(3);return z(l,d,.5,b)}return{create:a,fromValues:f,set:y,ceil:g,floor:S,round:T,clamp:V,add:L,addScaled:O,angle:q,subtract:F,sub:X,equalsApproximately:Z,equals:N,lerp:z,lerpV:U,max:R,min:W,mulScalar:D,scale:H,divScalar:re,inverse:Pe,invert:de,cross:te,dot:ve,length:ne,len:Fe,lengthSq:Ge,lenSq:Ve,distance:Be,dist:ge,distanceSq:Ee,distSq:ce,normalize:oe,negate:he,copy:pe,clone:ae,multiply:be,mul:Me,divide:xe,div:ke,random:Ne,zero:M,transformMat4:Y,transformMat4Upper3x3:x,transformMat3:o,transformQuat:m,getTranslation:p,getAxis:w,getScaling:P,rotateX:C,rotateY:k,rotateZ:r,setLength:h,truncate:u,midpoint:_}}const Zr=new Map;function ls(i){let a=Zr.get(i);return a||(a=kl(i),Zr.set(i,a)),a}function Tl(i){const a=fi(i),f=ls(i);function y(o,m,p,w,P,C,k,r,h){const u=new i(12);return u[3]=0,u[7]=0,u[11]=0,o!==void 0&&(u[0]=o,m!==void 0&&(u[1]=m,p!==void 0&&(u[2]=p,w!==void 0&&(u[4]=w,P!==void 0&&(u[5]=P,C!==void 0&&(u[6]=C,k!==void 0&&(u[8]=k,r!==void 0&&(u[9]=r,h!==void 0&&(u[10]=h))))))))),u}function g(o,m,p,w,P,C,k,r,h,u){const _=u??new i(12);return _[0]=o,_[1]=m,_[2]=p,_[3]=0,_[4]=w,_[5]=P,_[6]=C,_[7]=0,_[8]=k,_[9]=r,_[10]=h,_[11]=0,_}function S(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=o[1],p[2]=o[2],p[3]=0,p[4]=o[4],p[5]=o[5],p[6]=o[6],p[7]=0,p[8]=o[8],p[9]=o[9],p[10]=o[10],p[11]=0,p}function T(o,m){const p=m??new i(12),w=o[0],P=o[1],C=o[2],k=o[3],r=w+w,h=P+P,u=C+C,_=w*r,l=P*r,d=P*h,v=C*r,b=C*h,B=C*u,$=k*r,K=k*h,ie=k*u;return p[0]=1-d-B,p[1]=l+ie,p[2]=v-K,p[3]=0,p[4]=l-ie,p[5]=1-_-B,p[6]=b+$,p[7]=0,p[8]=v+K,p[9]=b-$,p[10]=1-_-d,p[11]=0,p}function V(o,m){const p=m??new i(12);return p[0]=-o[0],p[1]=-o[1],p[2]=-o[2],p[4]=-o[4],p[5]=-o[5],p[6]=-o[6],p[8]=-o[8],p[9]=-o[9],p[10]=-o[10],p}function L(o,m,p){const w=p??new i(12);return w[0]=o[0]*m,w[1]=o[1]*m,w[2]=o[2]*m,w[4]=o[4]*m,w[5]=o[5]*m,w[6]=o[6]*m,w[8]=o[8]*m,w[9]=o[9]*m,w[10]=o[10]*m,w}const O=L;function q(o,m,p){const w=p??new i(12);return w[0]=o[0]+m[0],w[1]=o[1]+m[1],w[2]=o[2]+m[2],w[4]=o[4]+m[4],w[5]=o[5]+m[5],w[6]=o[6]+m[6],w[8]=o[8]+m[8],w[9]=o[9]+m[9],w[10]=o[10]+m[10],w}function F(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=o[1],p[2]=o[2],p[4]=o[4],p[5]=o[5],p[6]=o[6],p[8]=o[8],p[9]=o[9],p[10]=o[10],p}const X=F;function Z(o,m){return Math.abs(o[0]-m[0])<Le&&Math.abs(o[1]-m[1])<Le&&Math.abs(o[2]-m[2])<Le&&Math.abs(o[4]-m[4])<Le&&Math.abs(o[5]-m[5])<Le&&Math.abs(o[6]-m[6])<Le&&Math.abs(o[8]-m[8])<Le&&Math.abs(o[9]-m[9])<Le&&Math.abs(o[10]-m[10])<Le}function N(o,m){return o[0]===m[0]&&o[1]===m[1]&&o[2]===m[2]&&o[4]===m[4]&&o[5]===m[5]&&o[6]===m[6]&&o[8]===m[8]&&o[9]===m[9]&&o[10]===m[10]}function z(o){const m=o??new i(12);return m[0]=1,m[1]=0,m[2]=0,m[4]=0,m[5]=1,m[6]=0,m[8]=0,m[9]=0,m[10]=1,m}function U(o,m){const p=m??new i(12);if(p===o){let d;return d=o[1],o[1]=o[4],o[4]=d,d=o[2],o[2]=o[8],o[8]=d,d=o[6],o[6]=o[9],o[9]=d,p}const w=o[0*4+0],P=o[0*4+1],C=o[0*4+2],k=o[1*4+0],r=o[1*4+1],h=o[1*4+2],u=o[2*4+0],_=o[2*4+1],l=o[2*4+2];return p[0]=w,p[1]=k,p[2]=u,p[4]=P,p[5]=r,p[6]=_,p[8]=C,p[9]=h,p[10]=l,p}function R(o,m){const p=m??new i(12),w=o[0*4+0],P=o[0*4+1],C=o[0*4+2],k=o[1*4+0],r=o[1*4+1],h=o[1*4+2],u=o[2*4+0],_=o[2*4+1],l=o[2*4+2],d=l*r-h*_,v=-l*k+h*u,b=_*k-r*u,B=1/(w*d+P*v+C*b);return p[0]=d*B,p[1]=(-l*P+C*_)*B,p[2]=(h*P-C*r)*B,p[4]=v*B,p[5]=(l*w-C*u)*B,p[6]=(-h*w+C*k)*B,p[8]=b*B,p[9]=(-_*w+P*u)*B,p[10]=(r*w-P*k)*B,p}function W(o){const m=o[0],p=o[0*4+1],w=o[0*4+2],P=o[1*4+0],C=o[1*4+1],k=o[1*4+2],r=o[2*4+0],h=o[2*4+1],u=o[2*4+2];return m*(C*u-h*k)-P*(p*u-h*w)+r*(p*k-C*w)}const D=R;function H(o,m,p){const w=p??new i(12),P=o[0],C=o[1],k=o[2],r=o[4+0],h=o[4+1],u=o[4+2],_=o[8+0],l=o[8+1],d=o[8+2],v=m[0],b=m[1],B=m[2],$=m[4+0],K=m[4+1],ie=m[4+2],Q=m[8+0],J=m[8+1],j=m[8+2];return w[0]=P*v+r*b+_*B,w[1]=C*v+h*b+l*B,w[2]=k*v+u*b+d*B,w[4]=P*$+r*K+_*ie,w[5]=C*$+h*K+l*ie,w[6]=k*$+u*K+d*ie,w[8]=P*Q+r*J+_*j,w[9]=C*Q+h*J+l*j,w[10]=k*Q+u*J+d*j,w}const re=H;function Pe(o,m,p){const w=p??z();return o!==w&&(w[0]=o[0],w[1]=o[1],w[2]=o[2],w[4]=o[4],w[5]=o[5],w[6]=o[6]),w[8]=m[0],w[9]=m[1],w[10]=1,w}function de(o,m){const p=m??a.create();return p[0]=o[8],p[1]=o[9],p}function te(o,m,p){const w=p??a.create(),P=m*4;return w[0]=o[P+0],w[1]=o[P+1],w}function ve(o,m,p,w){const P=w===o?o:F(o,w),C=p*4;return P[C+0]=m[0],P[C+1]=m[1],P}function ne(o,m){const p=m??a.create(),w=o[0],P=o[1],C=o[4],k=o[5];return p[0]=Math.sqrt(w*w+P*P),p[1]=Math.sqrt(C*C+k*k),p}function Fe(o,m){const p=m??f.create(),w=o[0],P=o[1],C=o[2],k=o[4],r=o[5],h=o[6],u=o[8],_=o[9],l=o[10];return p[0]=Math.sqrt(w*w+P*P+C*C),p[1]=Math.sqrt(k*k+r*r+h*h),p[2]=Math.sqrt(u*u+_*_+l*l),p}function Ge(o,m){const p=m??new i(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=o[0],p[9]=o[1],p[10]=1,p}function Ve(o,m,p){const w=p??new i(12),P=m[0],C=m[1],k=o[0],r=o[1],h=o[2],u=o[1*4+0],_=o[1*4+1],l=o[1*4+2],d=o[2*4+0],v=o[2*4+1],b=o[2*4+2];return o!==w&&(w[0]=k,w[1]=r,w[2]=h,w[4]=u,w[5]=_,w[6]=l),w[8]=k*P+u*C+d,w[9]=r*P+_*C+v,w[10]=h*P+l*C+b,w}function Be(o,m){const p=m??new i(12),w=Math.cos(o),P=Math.sin(o);return p[0]=w,p[1]=P,p[2]=0,p[4]=-P,p[5]=w,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ge(o,m,p){const w=p??new i(12),P=o[0*4+0],C=o[0*4+1],k=o[0*4+2],r=o[1*4+0],h=o[1*4+1],u=o[1*4+2],_=Math.cos(m),l=Math.sin(m);return w[0]=_*P+l*r,w[1]=_*C+l*h,w[2]=_*k+l*u,w[4]=_*r-l*P,w[5]=_*h-l*C,w[6]=_*u-l*k,o!==w&&(w[8]=o[8],w[9]=o[9],w[10]=o[10]),w}function Ee(o,m){const p=m??new i(12),w=Math.cos(o),P=Math.sin(o);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=w,p[6]=P,p[8]=0,p[9]=-P,p[10]=w,p}function ce(o,m,p){const w=p??new i(12),P=o[4],C=o[5],k=o[6],r=o[8],h=o[9],u=o[10],_=Math.cos(m),l=Math.sin(m);return w[4]=_*P+l*r,w[5]=_*C+l*h,w[6]=_*k+l*u,w[8]=_*r-l*P,w[9]=_*h-l*C,w[10]=_*u-l*k,o!==w&&(w[0]=o[0],w[1]=o[1],w[2]=o[2]),w}function oe(o,m){const p=m??new i(12),w=Math.cos(o),P=Math.sin(o);return p[0]=w,p[1]=0,p[2]=-P,p[4]=0,p[5]=1,p[6]=0,p[8]=P,p[9]=0,p[10]=w,p}function he(o,m,p){const w=p??new i(12),P=o[0*4+0],C=o[0*4+1],k=o[0*4+2],r=o[2*4+0],h=o[2*4+1],u=o[2*4+2],_=Math.cos(m),l=Math.sin(m);return w[0]=_*P-l*r,w[1]=_*C-l*h,w[2]=_*k-l*u,w[8]=_*r+l*P,w[9]=_*h+l*C,w[10]=_*u+l*k,o!==w&&(w[4]=o[4],w[5]=o[5],w[6]=o[6]),w}const pe=Be,ae=ge;function be(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=0,p[2]=0,p[4]=0,p[5]=o[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Me(o,m,p){const w=p??new i(12),P=m[0],C=m[1];return w[0]=P*o[0*4+0],w[1]=P*o[0*4+1],w[2]=P*o[0*4+2],w[4]=C*o[1*4+0],w[5]=C*o[1*4+1],w[6]=C*o[1*4+2],o!==w&&(w[8]=o[8],w[9]=o[9],w[10]=o[10]),w}function xe(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=0,p[2]=0,p[4]=0,p[5]=o[1],p[6]=0,p[8]=0,p[9]=0,p[10]=o[2],p}function ke(o,m,p){const w=p??new i(12),P=m[0],C=m[1],k=m[2];return w[0]=P*o[0*4+0],w[1]=P*o[0*4+1],w[2]=P*o[0*4+2],w[4]=C*o[1*4+0],w[5]=C*o[1*4+1],w[6]=C*o[1*4+2],w[8]=k*o[2*4+0],w[9]=k*o[2*4+1],w[10]=k*o[2*4+2],w}function Ne(o,m){const p=m??new i(12);return p[0]=o,p[1]=0,p[2]=0,p[4]=0,p[5]=o,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function M(o,m,p){const w=p??new i(12);return w[0]=m*o[0*4+0],w[1]=m*o[0*4+1],w[2]=m*o[0*4+2],w[4]=m*o[1*4+0],w[5]=m*o[1*4+1],w[6]=m*o[1*4+2],o!==w&&(w[8]=o[8],w[9]=o[9],w[10]=o[10]),w}function Y(o,m){const p=m??new i(12);return p[0]=o,p[1]=0,p[2]=0,p[4]=0,p[5]=o,p[6]=0,p[8]=0,p[9]=0,p[10]=o,p}function x(o,m,p){const w=p??new i(12);return w[0]=m*o[0*4+0],w[1]=m*o[0*4+1],w[2]=m*o[0*4+2],w[4]=m*o[1*4+0],w[5]=m*o[1*4+1],w[6]=m*o[1*4+2],w[8]=m*o[2*4+0],w[9]=m*o[2*4+1],w[10]=m*o[2*4+2],w}return{add:q,clone:X,copy:F,create:y,determinant:W,equals:N,equalsApproximately:Z,fromMat4:S,fromQuat:T,get3DScaling:Fe,getAxis:te,getScaling:ne,getTranslation:de,identity:z,inverse:R,invert:D,mul:re,mulScalar:O,multiply:H,multiplyScalar:L,negate:V,rotate:ge,rotateX:ce,rotateY:he,rotateZ:ae,rotation:Be,rotationX:Ee,rotationY:oe,rotationZ:pe,scale:Me,scale3D:ke,scaling:be,scaling3D:xe,set:g,setAxis:ve,setTranslation:Pe,translate:Ve,translation:Ge,transpose:U,uniformScale:M,uniformScale3D:x,uniformScaling:Ne,uniformScaling3D:Y}}const Xr=new Map;function Bl(i){let a=Xr.get(i);return a||(a=Tl(i),Xr.set(i,a)),a}function Ml(i){const a=ls(i);function f(r,h,u,_,l,d,v,b,B,$,K,ie,Q,J,j,we){const fe=new i(16);return r!==void 0&&(fe[0]=r,h!==void 0&&(fe[1]=h,u!==void 0&&(fe[2]=u,_!==void 0&&(fe[3]=_,l!==void 0&&(fe[4]=l,d!==void 0&&(fe[5]=d,v!==void 0&&(fe[6]=v,b!==void 0&&(fe[7]=b,B!==void 0&&(fe[8]=B,$!==void 0&&(fe[9]=$,K!==void 0&&(fe[10]=K,ie!==void 0&&(fe[11]=ie,Q!==void 0&&(fe[12]=Q,J!==void 0&&(fe[13]=J,j!==void 0&&(fe[14]=j,we!==void 0&&(fe[15]=we)))))))))))))))),fe}function y(r,h,u,_,l,d,v,b,B,$,K,ie,Q,J,j,we,fe){const me=fe??new i(16);return me[0]=r,me[1]=h,me[2]=u,me[3]=_,me[4]=l,me[5]=d,me[6]=v,me[7]=b,me[8]=B,me[9]=$,me[10]=K,me[11]=ie,me[12]=Q,me[13]=J,me[14]=j,me[15]=we,me}function g(r,h){const u=h??new i(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function S(r,h){const u=h??new i(16),_=r[0],l=r[1],d=r[2],v=r[3],b=_+_,B=l+l,$=d+d,K=_*b,ie=l*b,Q=l*B,J=d*b,j=d*B,we=d*$,fe=v*b,me=v*B,Ae=v*$;return u[0]=1-Q-we,u[1]=ie+Ae,u[2]=J-me,u[3]=0,u[4]=ie-Ae,u[5]=1-K-we,u[6]=j+fe,u[7]=0,u[8]=J+me,u[9]=j-fe,u[10]=1-K-Q,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function T(r,h){const u=h??new i(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function V(r,h,u){const _=u??new i(16);return _[0]=r[0]+h[0],_[1]=r[1]+h[1],_[2]=r[2]+h[2],_[3]=r[3]+h[3],_[4]=r[4]+h[4],_[5]=r[5]+h[5],_[6]=r[6]+h[6],_[7]=r[7]+h[7],_[8]=r[8]+h[8],_[9]=r[9]+h[9],_[10]=r[10]+h[10],_[11]=r[11]+h[11],_[12]=r[12]+h[12],_[13]=r[13]+h[13],_[14]=r[14]+h[14],_[15]=r[15]+h[15],_}function L(r,h,u){const _=u??new i(16);return _[0]=r[0]*h,_[1]=r[1]*h,_[2]=r[2]*h,_[3]=r[3]*h,_[4]=r[4]*h,_[5]=r[5]*h,_[6]=r[6]*h,_[7]=r[7]*h,_[8]=r[8]*h,_[9]=r[9]*h,_[10]=r[10]*h,_[11]=r[11]*h,_[12]=r[12]*h,_[13]=r[13]*h,_[14]=r[14]*h,_[15]=r[15]*h,_}const O=L;function q(r,h){const u=h??new i(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const F=q;function X(r,h){return Math.abs(r[0]-h[0])<Le&&Math.abs(r[1]-h[1])<Le&&Math.abs(r[2]-h[2])<Le&&Math.abs(r[3]-h[3])<Le&&Math.abs(r[4]-h[4])<Le&&Math.abs(r[5]-h[5])<Le&&Math.abs(r[6]-h[6])<Le&&Math.abs(r[7]-h[7])<Le&&Math.abs(r[8]-h[8])<Le&&Math.abs(r[9]-h[9])<Le&&Math.abs(r[10]-h[10])<Le&&Math.abs(r[11]-h[11])<Le&&Math.abs(r[12]-h[12])<Le&&Math.abs(r[13]-h[13])<Le&&Math.abs(r[14]-h[14])<Le&&Math.abs(r[15]-h[15])<Le}function Z(r,h){return r[0]===h[0]&&r[1]===h[1]&&r[2]===h[2]&&r[3]===h[3]&&r[4]===h[4]&&r[5]===h[5]&&r[6]===h[6]&&r[7]===h[7]&&r[8]===h[8]&&r[9]===h[9]&&r[10]===h[10]&&r[11]===h[11]&&r[12]===h[12]&&r[13]===h[13]&&r[14]===h[14]&&r[15]===h[15]}function N(r){const h=r??new i(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function z(r,h){const u=h??new i(16);if(u===r){let Te;return Te=r[1],r[1]=r[4],r[4]=Te,Te=r[2],r[2]=r[8],r[8]=Te,Te=r[3],r[3]=r[12],r[12]=Te,Te=r[6],r[6]=r[9],r[9]=Te,Te=r[7],r[7]=r[13],r[13]=Te,Te=r[11],r[11]=r[14],r[14]=Te,u}const _=r[0*4+0],l=r[0*4+1],d=r[0*4+2],v=r[0*4+3],b=r[1*4+0],B=r[1*4+1],$=r[1*4+2],K=r[1*4+3],ie=r[2*4+0],Q=r[2*4+1],J=r[2*4+2],j=r[2*4+3],we=r[3*4+0],fe=r[3*4+1],me=r[3*4+2],Ae=r[3*4+3];return u[0]=_,u[1]=b,u[2]=ie,u[3]=we,u[4]=l,u[5]=B,u[6]=Q,u[7]=fe,u[8]=d,u[9]=$,u[10]=J,u[11]=me,u[12]=v,u[13]=K,u[14]=j,u[15]=Ae,u}function U(r,h){const u=h??new i(16),_=r[0*4+0],l=r[0*4+1],d=r[0*4+2],v=r[0*4+3],b=r[1*4+0],B=r[1*4+1],$=r[1*4+2],K=r[1*4+3],ie=r[2*4+0],Q=r[2*4+1],J=r[2*4+2],j=r[2*4+3],we=r[3*4+0],fe=r[3*4+1],me=r[3*4+2],Ae=r[3*4+3],Te=J*Ae,Ie=me*j,Ze=$*Ae,He=me*K,Xe=$*j,ze=J*K,Je=d*Ae,it=me*v,ot=d*j,at=J*v,Ue=d*K,tt=$*v,qe=ie*fe,st=we*Q,Ke=b*fe,lt=we*B,rt=b*Q,gt=ie*B,Et=_*fe,Bt=we*l,Mt=_*Q,Ct=ie*l,At=_*B,Vt=b*l,kt=Te*B+He*Q+Xe*fe-(Ie*B+Ze*Q+ze*fe),Dt=Ie*l+Je*Q+at*fe-(Te*l+it*Q+ot*fe),an=Ze*l+it*B+Ue*fe-(He*l+Je*B+tt*fe),ln=ze*l+ot*B+tt*Q-(Xe*l+at*B+Ue*Q),Qe=1/(_*kt+b*Dt+ie*an+we*ln);return u[0]=Qe*kt,u[1]=Qe*Dt,u[2]=Qe*an,u[3]=Qe*ln,u[4]=Qe*(Ie*b+Ze*ie+ze*we-(Te*b+He*ie+Xe*we)),u[5]=Qe*(Te*_+it*ie+ot*we-(Ie*_+Je*ie+at*we)),u[6]=Qe*(He*_+Je*b+tt*we-(Ze*_+it*b+Ue*we)),u[7]=Qe*(Xe*_+at*b+Ue*ie-(ze*_+ot*b+tt*ie)),u[8]=Qe*(qe*K+lt*j+rt*Ae-(st*K+Ke*j+gt*Ae)),u[9]=Qe*(st*v+Et*j+Ct*Ae-(qe*v+Bt*j+Mt*Ae)),u[10]=Qe*(Ke*v+Bt*K+At*Ae-(lt*v+Et*K+Vt*Ae)),u[11]=Qe*(gt*v+Mt*K+Vt*j-(rt*v+Ct*K+At*j)),u[12]=Qe*(Ke*J+gt*me+st*$-(rt*me+qe*$+lt*J)),u[13]=Qe*(Mt*me+qe*d+Bt*J-(Et*J+Ct*me+st*d)),u[14]=Qe*(Et*$+Vt*me+lt*d-(At*me+Ke*d+Bt*$)),u[15]=Qe*(At*J+rt*d+Ct*$-(Mt*$+Vt*J+gt*d)),u}function R(r){const h=r[0],u=r[0*4+1],_=r[0*4+2],l=r[0*4+3],d=r[1*4+0],v=r[1*4+1],b=r[1*4+2],B=r[1*4+3],$=r[2*4+0],K=r[2*4+1],ie=r[2*4+2],Q=r[2*4+3],J=r[3*4+0],j=r[3*4+1],we=r[3*4+2],fe=r[3*4+3],me=ie*fe,Ae=we*Q,Te=b*fe,Ie=we*B,Ze=b*Q,He=ie*B,Xe=_*fe,ze=we*l,Je=_*Q,it=ie*l,ot=_*B,at=b*l,Ue=me*v+Ie*K+Ze*j-(Ae*v+Te*K+He*j),tt=Ae*u+Xe*K+it*j-(me*u+ze*K+Je*j),qe=Te*u+ze*v+ot*j-(Ie*u+Xe*v+at*j),st=He*u+Je*v+at*K-(Ze*u+it*v+ot*K);return h*Ue+d*tt+$*qe+J*st}const W=U;function D(r,h,u){const _=u??new i(16),l=r[0],d=r[1],v=r[2],b=r[3],B=r[4+0],$=r[4+1],K=r[4+2],ie=r[4+3],Q=r[8+0],J=r[8+1],j=r[8+2],we=r[8+3],fe=r[12+0],me=r[12+1],Ae=r[12+2],Te=r[12+3],Ie=h[0],Ze=h[1],He=h[2],Xe=h[3],ze=h[4+0],Je=h[4+1],it=h[4+2],ot=h[4+3],at=h[8+0],Ue=h[8+1],tt=h[8+2],qe=h[8+3],st=h[12+0],Ke=h[12+1],lt=h[12+2],rt=h[12+3];return _[0]=l*Ie+B*Ze+Q*He+fe*Xe,_[1]=d*Ie+$*Ze+J*He+me*Xe,_[2]=v*Ie+K*Ze+j*He+Ae*Xe,_[3]=b*Ie+ie*Ze+we*He+Te*Xe,_[4]=l*ze+B*Je+Q*it+fe*ot,_[5]=d*ze+$*Je+J*it+me*ot,_[6]=v*ze+K*Je+j*it+Ae*ot,_[7]=b*ze+ie*Je+we*it+Te*ot,_[8]=l*at+B*Ue+Q*tt+fe*qe,_[9]=d*at+$*Ue+J*tt+me*qe,_[10]=v*at+K*Ue+j*tt+Ae*qe,_[11]=b*at+ie*Ue+we*tt+Te*qe,_[12]=l*st+B*Ke+Q*lt+fe*rt,_[13]=d*st+$*Ke+J*lt+me*rt,_[14]=v*st+K*Ke+j*lt+Ae*rt,_[15]=b*st+ie*Ke+we*lt+Te*rt,_}const H=D;function re(r,h,u){const _=u??N();return r!==_&&(_[0]=r[0],_[1]=r[1],_[2]=r[2],_[3]=r[3],_[4]=r[4],_[5]=r[5],_[6]=r[6],_[7]=r[7],_[8]=r[8],_[9]=r[9],_[10]=r[10],_[11]=r[11]),_[12]=h[0],_[13]=h[1],_[14]=h[2],_[15]=1,_}function Pe(r,h){const u=h??a.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function de(r,h,u){const _=u??a.create(),l=h*4;return _[0]=r[l+0],_[1]=r[l+1],_[2]=r[l+2],_}function te(r,h,u,_){const l=_===r?_:q(r,_),d=u*4;return l[d+0]=h[0],l[d+1]=h[1],l[d+2]=h[2],l}function ve(r,h){const u=h??a.create(),_=r[0],l=r[1],d=r[2],v=r[4],b=r[5],B=r[6],$=r[8],K=r[9],ie=r[10];return u[0]=Math.sqrt(_*_+l*l+d*d),u[1]=Math.sqrt(v*v+b*b+B*B),u[2]=Math.sqrt($*$+K*K+ie*ie),u}function ne(r,h,u,_,l){const d=l??new i(16),v=Math.tan(Math.PI*.5-.5*r);if(d[0]=v/h,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=v,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,Number.isFinite(_)){const b=1/(u-_);d[10]=_*b,d[14]=_*u*b}else d[10]=-1,d[14]=-u;return d}function Fe(r,h,u,_=1/0,l){const d=l??new i(16),v=1/Math.tan(r*.5);if(d[0]=v/h,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=v,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,_===1/0)d[10]=0,d[14]=u;else{const b=1/(_-u);d[10]=u*b,d[14]=_*u*b}return d}function Ge(r,h,u,_,l,d,v){const b=v??new i(16);return b[0]=2/(h-r),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(_-u),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(l-d),b[11]=0,b[12]=(h+r)/(r-h),b[13]=(_+u)/(u-_),b[14]=l/(l-d),b[15]=1,b}function Ve(r,h,u,_,l,d,v){const b=v??new i(16),B=h-r,$=_-u,K=l-d;return b[0]=2*l/B,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/$,b[6]=0,b[7]=0,b[8]=(r+h)/B,b[9]=(_+u)/$,b[10]=d/K,b[11]=-1,b[12]=0,b[13]=0,b[14]=l*d/K,b[15]=0,b}function Be(r,h,u,_,l,d=1/0,v){const b=v??new i(16),B=h-r,$=_-u;if(b[0]=2*l/B,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/$,b[6]=0,b[7]=0,b[8]=(r+h)/B,b[9]=(_+u)/$,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,d===1/0)b[10]=0,b[14]=l;else{const K=1/(d-l);b[10]=l*K,b[14]=d*l*K}return b}const ge=a.create(),Ee=a.create(),ce=a.create();function oe(r,h,u,_){const l=_??new i(16);return a.normalize(a.subtract(h,r,ce),ce),a.normalize(a.cross(u,ce,ge),ge),a.normalize(a.cross(ce,ge,Ee),Ee),l[0]=ge[0],l[1]=ge[1],l[2]=ge[2],l[3]=0,l[4]=Ee[0],l[5]=Ee[1],l[6]=Ee[2],l[7]=0,l[8]=ce[0],l[9]=ce[1],l[10]=ce[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function he(r,h,u,_){const l=_??new i(16);return a.normalize(a.subtract(r,h,ce),ce),a.normalize(a.cross(u,ce,ge),ge),a.normalize(a.cross(ce,ge,Ee),Ee),l[0]=ge[0],l[1]=ge[1],l[2]=ge[2],l[3]=0,l[4]=Ee[0],l[5]=Ee[1],l[6]=Ee[2],l[7]=0,l[8]=ce[0],l[9]=ce[1],l[10]=ce[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function pe(r,h,u,_){const l=_??new i(16);return a.normalize(a.subtract(r,h,ce),ce),a.normalize(a.cross(u,ce,ge),ge),a.normalize(a.cross(ce,ge,Ee),Ee),l[0]=ge[0],l[1]=Ee[0],l[2]=ce[0],l[3]=0,l[4]=ge[1],l[5]=Ee[1],l[6]=ce[1],l[7]=0,l[8]=ge[2],l[9]=Ee[2],l[10]=ce[2],l[11]=0,l[12]=-(ge[0]*r[0]+ge[1]*r[1]+ge[2]*r[2]),l[13]=-(Ee[0]*r[0]+Ee[1]*r[1]+Ee[2]*r[2]),l[14]=-(ce[0]*r[0]+ce[1]*r[1]+ce[2]*r[2]),l[15]=1,l}function ae(r,h){const u=h??new i(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function be(r,h,u){const _=u??new i(16),l=h[0],d=h[1],v=h[2],b=r[0],B=r[1],$=r[2],K=r[3],ie=r[1*4+0],Q=r[1*4+1],J=r[1*4+2],j=r[1*4+3],we=r[2*4+0],fe=r[2*4+1],me=r[2*4+2],Ae=r[2*4+3],Te=r[3*4+0],Ie=r[3*4+1],Ze=r[3*4+2],He=r[3*4+3];return r!==_&&(_[0]=b,_[1]=B,_[2]=$,_[3]=K,_[4]=ie,_[5]=Q,_[6]=J,_[7]=j,_[8]=we,_[9]=fe,_[10]=me,_[11]=Ae),_[12]=b*l+ie*d+we*v+Te,_[13]=B*l+Q*d+fe*v+Ie,_[14]=$*l+J*d+me*v+Ze,_[15]=K*l+j*d+Ae*v+He,_}function Me(r,h){const u=h??new i(16),_=Math.cos(r),l=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=_,u[6]=l,u[7]=0,u[8]=0,u[9]=-l,u[10]=_,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function xe(r,h,u){const _=u??new i(16),l=r[4],d=r[5],v=r[6],b=r[7],B=r[8],$=r[9],K=r[10],ie=r[11],Q=Math.cos(h),J=Math.sin(h);return _[4]=Q*l+J*B,_[5]=Q*d+J*$,_[6]=Q*v+J*K,_[7]=Q*b+J*ie,_[8]=Q*B-J*l,_[9]=Q*$-J*d,_[10]=Q*K-J*v,_[11]=Q*ie-J*b,r!==_&&(_[0]=r[0],_[1]=r[1],_[2]=r[2],_[3]=r[3],_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function ke(r,h){const u=h??new i(16),_=Math.cos(r),l=Math.sin(r);return u[0]=_,u[1]=0,u[2]=-l,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=l,u[9]=0,u[10]=_,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Ne(r,h,u){const _=u??new i(16),l=r[0*4+0],d=r[0*4+1],v=r[0*4+2],b=r[0*4+3],B=r[2*4+0],$=r[2*4+1],K=r[2*4+2],ie=r[2*4+3],Q=Math.cos(h),J=Math.sin(h);return _[0]=Q*l-J*B,_[1]=Q*d-J*$,_[2]=Q*v-J*K,_[3]=Q*b-J*ie,_[8]=Q*B+J*l,_[9]=Q*$+J*d,_[10]=Q*K+J*v,_[11]=Q*ie+J*b,r!==_&&(_[4]=r[4],_[5]=r[5],_[6]=r[6],_[7]=r[7],_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function M(r,h){const u=h??new i(16),_=Math.cos(r),l=Math.sin(r);return u[0]=_,u[1]=l,u[2]=0,u[3]=0,u[4]=-l,u[5]=_,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Y(r,h,u){const _=u??new i(16),l=r[0*4+0],d=r[0*4+1],v=r[0*4+2],b=r[0*4+3],B=r[1*4+0],$=r[1*4+1],K=r[1*4+2],ie=r[1*4+3],Q=Math.cos(h),J=Math.sin(h);return _[0]=Q*l+J*B,_[1]=Q*d+J*$,_[2]=Q*v+J*K,_[3]=Q*b+J*ie,_[4]=Q*B-J*l,_[5]=Q*$-J*d,_[6]=Q*K-J*v,_[7]=Q*ie-J*b,r!==_&&(_[8]=r[8],_[9]=r[9],_[10]=r[10],_[11]=r[11],_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function x(r,h,u){const _=u??new i(16);let l=r[0],d=r[1],v=r[2];const b=Math.sqrt(l*l+d*d+v*v);l/=b,d/=b,v/=b;const B=l*l,$=d*d,K=v*v,ie=Math.cos(h),Q=Math.sin(h),J=1-ie;return _[0]=B+(1-B)*ie,_[1]=l*d*J+v*Q,_[2]=l*v*J-d*Q,_[3]=0,_[4]=l*d*J-v*Q,_[5]=$+(1-$)*ie,_[6]=d*v*J+l*Q,_[7]=0,_[8]=l*v*J+d*Q,_[9]=d*v*J-l*Q,_[10]=K+(1-K)*ie,_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,_}const o=x;function m(r,h,u,_){const l=_??new i(16);let d=h[0],v=h[1],b=h[2];const B=Math.sqrt(d*d+v*v+b*b);d/=B,v/=B,b/=B;const $=d*d,K=v*v,ie=b*b,Q=Math.cos(u),J=Math.sin(u),j=1-Q,we=$+(1-$)*Q,fe=d*v*j+b*J,me=d*b*j-v*J,Ae=d*v*j-b*J,Te=K+(1-K)*Q,Ie=v*b*j+d*J,Ze=d*b*j+v*J,He=v*b*j-d*J,Xe=ie+(1-ie)*Q,ze=r[0],Je=r[1],it=r[2],ot=r[3],at=r[4],Ue=r[5],tt=r[6],qe=r[7],st=r[8],Ke=r[9],lt=r[10],rt=r[11];return l[0]=we*ze+fe*at+me*st,l[1]=we*Je+fe*Ue+me*Ke,l[2]=we*it+fe*tt+me*lt,l[3]=we*ot+fe*qe+me*rt,l[4]=Ae*ze+Te*at+Ie*st,l[5]=Ae*Je+Te*Ue+Ie*Ke,l[6]=Ae*it+Te*tt+Ie*lt,l[7]=Ae*ot+Te*qe+Ie*rt,l[8]=Ze*ze+He*at+Xe*st,l[9]=Ze*Je+He*Ue+Xe*Ke,l[10]=Ze*it+He*tt+Xe*lt,l[11]=Ze*ot+He*qe+Xe*rt,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const p=m;function w(r,h){const u=h??new i(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function P(r,h,u){const _=u??new i(16),l=h[0],d=h[1],v=h[2];return _[0]=l*r[0*4+0],_[1]=l*r[0*4+1],_[2]=l*r[0*4+2],_[3]=l*r[0*4+3],_[4]=d*r[1*4+0],_[5]=d*r[1*4+1],_[6]=d*r[1*4+2],_[7]=d*r[1*4+3],_[8]=v*r[2*4+0],_[9]=v*r[2*4+1],_[10]=v*r[2*4+2],_[11]=v*r[2*4+3],r!==_&&(_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function C(r,h){const u=h??new i(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,h,u){const _=u??new i(16);return _[0]=h*r[0*4+0],_[1]=h*r[0*4+1],_[2]=h*r[0*4+2],_[3]=h*r[0*4+3],_[4]=h*r[1*4+0],_[5]=h*r[1*4+1],_[6]=h*r[1*4+2],_[7]=h*r[1*4+3],_[8]=h*r[2*4+0],_[9]=h*r[2*4+1],_[10]=h*r[2*4+2],_[11]=h*r[2*4+3],r!==_&&(_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}return{add:V,aim:oe,axisRotate:m,axisRotation:x,cameraAim:he,clone:F,copy:q,create:f,determinant:R,equals:Z,equalsApproximately:X,fromMat3:g,fromQuat:S,frustum:Ve,frustumReverseZ:Be,getAxis:de,getScaling:ve,getTranslation:Pe,identity:N,inverse:U,invert:W,lookAt:pe,mul:H,mulScalar:O,multiply:D,multiplyScalar:L,negate:T,ortho:Ge,perspective:ne,perspectiveReverseZ:Fe,rotate:p,rotateX:xe,rotateY:Ne,rotateZ:Y,rotation:o,rotationX:Me,rotationY:ke,rotationZ:M,scale:P,scaling:w,set:y,setAxis:te,setTranslation:re,translate:be,translation:ae,transpose:z,uniformScale:k,uniformScaling:C}}const Qr=new Map;function Al(i){let a=Qr.get(i);return a||(a=Ml(i),Qr.set(i,a)),a}function Dl(i){const a=ls(i);function f(M,Y,x,o){const m=new i(4);return M!==void 0&&(m[0]=M,Y!==void 0&&(m[1]=Y,x!==void 0&&(m[2]=x,o!==void 0&&(m[3]=o)))),m}const y=f;function g(M,Y,x,o,m){const p=m??new i(4);return p[0]=M,p[1]=Y,p[2]=x,p[3]=o,p}function S(M,Y,x){const o=x??new i(4),m=Y*.5,p=Math.sin(m);return o[0]=p*M[0],o[1]=p*M[1],o[2]=p*M[2],o[3]=Math.cos(m),o}function T(M,Y){const x=Y??a.create(3),o=Math.acos(M[3])*2,m=Math.sin(o*.5);return m>Le?(x[0]=M[0]/m,x[1]=M[1]/m,x[2]=M[2]/m):(x[0]=1,x[1]=0,x[2]=0),{angle:o,axis:x}}function V(M,Y){const x=ne(M,Y);return Math.acos(2*x*x-1)}function L(M,Y,x){const o=x??new i(4),m=M[0],p=M[1],w=M[2],P=M[3],C=Y[0],k=Y[1],r=Y[2],h=Y[3];return o[0]=m*h+P*C+p*r-w*k,o[1]=p*h+P*k+w*C-m*r,o[2]=w*h+P*r+m*k-p*C,o[3]=P*h-m*C-p*k-w*r,o}const O=L;function q(M,Y,x){const o=x??new i(4),m=Y*.5,p=M[0],w=M[1],P=M[2],C=M[3],k=Math.sin(m),r=Math.cos(m);return o[0]=p*r+C*k,o[1]=w*r+P*k,o[2]=P*r-w*k,o[3]=C*r-p*k,o}function F(M,Y,x){const o=x??new i(4),m=Y*.5,p=M[0],w=M[1],P=M[2],C=M[3],k=Math.sin(m),r=Math.cos(m);return o[0]=p*r-P*k,o[1]=w*r+C*k,o[2]=P*r+p*k,o[3]=C*r-w*k,o}function X(M,Y,x){const o=x??new i(4),m=Y*.5,p=M[0],w=M[1],P=M[2],C=M[3],k=Math.sin(m),r=Math.cos(m);return o[0]=p*r+w*k,o[1]=w*r-p*k,o[2]=P*r+C*k,o[3]=C*r-P*k,o}function Z(M,Y,x,o){const m=o??new i(4),p=M[0],w=M[1],P=M[2],C=M[3];let k=Y[0],r=Y[1],h=Y[2],u=Y[3],_=p*k+w*r+P*h+C*u;_<0&&(_=-_,k=-k,r=-r,h=-h,u=-u);let l,d;if(1-_>Le){const v=Math.acos(_),b=Math.sin(v);l=Math.sin((1-x)*v)/b,d=Math.sin(x*v)/b}else l=1-x,d=x;return m[0]=l*p+d*k,m[1]=l*w+d*r,m[2]=l*P+d*h,m[3]=l*C+d*u,m}function N(M,Y){const x=Y??new i(4),o=M[0],m=M[1],p=M[2],w=M[3],P=o*o+m*m+p*p+w*w,C=P?1/P:0;return x[0]=-o*C,x[1]=-m*C,x[2]=-p*C,x[3]=w*C,x}function z(M,Y){const x=Y??new i(4);return x[0]=-M[0],x[1]=-M[1],x[2]=-M[2],x[3]=M[3],x}function U(M,Y){const x=Y??new i(4),o=M[0]+M[5]+M[10];if(o>0){const m=Math.sqrt(o+1);x[3]=.5*m;const p=.5/m;x[0]=(M[6]-M[9])*p,x[1]=(M[8]-M[2])*p,x[2]=(M[1]-M[4])*p}else{let m=0;M[5]>M[0]&&(m=1),M[10]>M[m*4+m]&&(m=2);const p=(m+1)%3,w=(m+2)%3,P=Math.sqrt(M[m*4+m]-M[p*4+p]-M[w*4+w]+1);x[m]=.5*P;const C=.5/P;x[3]=(M[p*4+w]-M[w*4+p])*C,x[p]=(M[p*4+m]+M[m*4+p])*C,x[w]=(M[w*4+m]+M[m*4+w])*C}return x}function R(M,Y,x,o,m){const p=m??new i(4),w=M*.5,P=Y*.5,C=x*.5,k=Math.sin(w),r=Math.cos(w),h=Math.sin(P),u=Math.cos(P),_=Math.sin(C),l=Math.cos(C);switch(o){case"xyz":p[0]=k*u*l+r*h*_,p[1]=r*h*l-k*u*_,p[2]=r*u*_+k*h*l,p[3]=r*u*l-k*h*_;break;case"xzy":p[0]=k*u*l-r*h*_,p[1]=r*h*l-k*u*_,p[2]=r*u*_+k*h*l,p[3]=r*u*l+k*h*_;break;case"yxz":p[0]=k*u*l+r*h*_,p[1]=r*h*l-k*u*_,p[2]=r*u*_-k*h*l,p[3]=r*u*l+k*h*_;break;case"yzx":p[0]=k*u*l+r*h*_,p[1]=r*h*l+k*u*_,p[2]=r*u*_-k*h*l,p[3]=r*u*l-k*h*_;break;case"zxy":p[0]=k*u*l-r*h*_,p[1]=r*h*l+k*u*_,p[2]=r*u*_+k*h*l,p[3]=r*u*l-k*h*_;break;case"zyx":p[0]=k*u*l-r*h*_,p[1]=r*h*l+k*u*_,p[2]=r*u*_-k*h*l,p[3]=r*u*l+k*h*_;break;default:throw new Error(`Unknown rotation order: ${o}`)}return p}function W(M,Y){const x=Y??new i(4);return x[0]=M[0],x[1]=M[1],x[2]=M[2],x[3]=M[3],x}const D=W;function H(M,Y,x){const o=x??new i(4);return o[0]=M[0]+Y[0],o[1]=M[1]+Y[1],o[2]=M[2]+Y[2],o[3]=M[3]+Y[3],o}function re(M,Y,x){const o=x??new i(4);return o[0]=M[0]-Y[0],o[1]=M[1]-Y[1],o[2]=M[2]-Y[2],o[3]=M[3]-Y[3],o}const Pe=re;function de(M,Y,x){const o=x??new i(4);return o[0]=M[0]*Y,o[1]=M[1]*Y,o[2]=M[2]*Y,o[3]=M[3]*Y,o}const te=de;function ve(M,Y,x){const o=x??new i(4);return o[0]=M[0]/Y,o[1]=M[1]/Y,o[2]=M[2]/Y,o[3]=M[3]/Y,o}function ne(M,Y){return M[0]*Y[0]+M[1]*Y[1]+M[2]*Y[2]+M[3]*Y[3]}function Fe(M,Y,x,o){const m=o??new i(4);return m[0]=M[0]+x*(Y[0]-M[0]),m[1]=M[1]+x*(Y[1]-M[1]),m[2]=M[2]+x*(Y[2]-M[2]),m[3]=M[3]+x*(Y[3]-M[3]),m}function Ge(M){const Y=M[0],x=M[1],o=M[2],m=M[3];return Math.sqrt(Y*Y+x*x+o*o+m*m)}const Ve=Ge;function Be(M){const Y=M[0],x=M[1],o=M[2],m=M[3];return Y*Y+x*x+o*o+m*m}const ge=Be;function Ee(M,Y){const x=Y??new i(4),o=M[0],m=M[1],p=M[2],w=M[3],P=Math.sqrt(o*o+m*m+p*p+w*w);return P>1e-5?(x[0]=o/P,x[1]=m/P,x[2]=p/P,x[3]=w/P):(x[0]=0,x[1]=0,x[2]=0,x[3]=1),x}function ce(M,Y){return Math.abs(M[0]-Y[0])<Le&&Math.abs(M[1]-Y[1])<Le&&Math.abs(M[2]-Y[2])<Le&&Math.abs(M[3]-Y[3])<Le}function oe(M,Y){return M[0]===Y[0]&&M[1]===Y[1]&&M[2]===Y[2]&&M[3]===Y[3]}function he(M){const Y=M??new i(4);return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y}const pe=a.create(),ae=a.create(),be=a.create();function Me(M,Y,x){const o=x??new i(4),m=a.dot(M,Y);return m<-.999999?(a.cross(ae,M,pe),a.len(pe)<1e-6&&a.cross(be,M,pe),a.normalize(pe,pe),S(pe,Math.PI,o),o):m>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(a.cross(M,Y,pe),o[0]=pe[0],o[1]=pe[1],o[2]=pe[2],o[3]=1+m,Ee(o,o))}const xe=new i(4),ke=new i(4);function Ne(M,Y,x,o,m,p){const w=p??new i(4);return Z(M,o,m,xe),Z(Y,x,m,ke),Z(xe,ke,2*m*(1-m),w),w}return{create:f,fromValues:y,set:g,fromAxisAngle:S,toAxisAngle:T,angle:V,multiply:L,mul:O,rotateX:q,rotateY:F,rotateZ:X,slerp:Z,inverse:N,conjugate:z,fromMat:U,fromEuler:R,copy:W,clone:D,add:H,subtract:re,sub:Pe,mulScalar:de,scale:te,divScalar:ve,dot:ne,lerp:Fe,length:Ge,len:Ve,lengthSq:Be,lenSq:ge,normalize:Ee,equalsApproximately:ce,equals:oe,identity:he,rotationTo:Me,sqlerp:Ne}}const Jr=new Map;function Gl(i){let a=Jr.get(i);return a||(a=Dl(i),Jr.set(i,a)),a}function Ll(i){function a(x,o,m,p){const w=new i(4);return x!==void 0&&(w[0]=x,o!==void 0&&(w[1]=o,m!==void 0&&(w[2]=m,p!==void 0&&(w[3]=p)))),w}const f=a;function y(x,o,m,p,w){const P=w??new i(4);return P[0]=x,P[1]=o,P[2]=m,P[3]=p,P}function g(x,o){const m=o??new i(4);return m[0]=Math.ceil(x[0]),m[1]=Math.ceil(x[1]),m[2]=Math.ceil(x[2]),m[3]=Math.ceil(x[3]),m}function S(x,o){const m=o??new i(4);return m[0]=Math.floor(x[0]),m[1]=Math.floor(x[1]),m[2]=Math.floor(x[2]),m[3]=Math.floor(x[3]),m}function T(x,o){const m=o??new i(4);return m[0]=Math.round(x[0]),m[1]=Math.round(x[1]),m[2]=Math.round(x[2]),m[3]=Math.round(x[3]),m}function V(x,o=0,m=1,p){const w=p??new i(4);return w[0]=Math.min(m,Math.max(o,x[0])),w[1]=Math.min(m,Math.max(o,x[1])),w[2]=Math.min(m,Math.max(o,x[2])),w[3]=Math.min(m,Math.max(o,x[3])),w}function L(x,o,m){const p=m??new i(4);return p[0]=x[0]+o[0],p[1]=x[1]+o[1],p[2]=x[2]+o[2],p[3]=x[3]+o[3],p}function O(x,o,m,p){const w=p??new i(4);return w[0]=x[0]+o[0]*m,w[1]=x[1]+o[1]*m,w[2]=x[2]+o[2]*m,w[3]=x[3]+o[3]*m,w}function q(x,o,m){const p=m??new i(4);return p[0]=x[0]-o[0],p[1]=x[1]-o[1],p[2]=x[2]-o[2],p[3]=x[3]-o[3],p}const F=q;function X(x,o){return Math.abs(x[0]-o[0])<Le&&Math.abs(x[1]-o[1])<Le&&Math.abs(x[2]-o[2])<Le&&Math.abs(x[3]-o[3])<Le}function Z(x,o){return x[0]===o[0]&&x[1]===o[1]&&x[2]===o[2]&&x[3]===o[3]}function N(x,o,m,p){const w=p??new i(4);return w[0]=x[0]+m*(o[0]-x[0]),w[1]=x[1]+m*(o[1]-x[1]),w[2]=x[2]+m*(o[2]-x[2]),w[3]=x[3]+m*(o[3]-x[3]),w}function z(x,o,m,p){const w=p??new i(4);return w[0]=x[0]+m[0]*(o[0]-x[0]),w[1]=x[1]+m[1]*(o[1]-x[1]),w[2]=x[2]+m[2]*(o[2]-x[2]),w[3]=x[3]+m[3]*(o[3]-x[3]),w}function U(x,o,m){const p=m??new i(4);return p[0]=Math.max(x[0],o[0]),p[1]=Math.max(x[1],o[1]),p[2]=Math.max(x[2],o[2]),p[3]=Math.max(x[3],o[3]),p}function R(x,o,m){const p=m??new i(4);return p[0]=Math.min(x[0],o[0]),p[1]=Math.min(x[1],o[1]),p[2]=Math.min(x[2],o[2]),p[3]=Math.min(x[3],o[3]),p}function W(x,o,m){const p=m??new i(4);return p[0]=x[0]*o,p[1]=x[1]*o,p[2]=x[2]*o,p[3]=x[3]*o,p}const D=W;function H(x,o,m){const p=m??new i(4);return p[0]=x[0]/o,p[1]=x[1]/o,p[2]=x[2]/o,p[3]=x[3]/o,p}function re(x,o){const m=o??new i(4);return m[0]=1/x[0],m[1]=1/x[1],m[2]=1/x[2],m[3]=1/x[3],m}const Pe=re;function de(x,o){return x[0]*o[0]+x[1]*o[1]+x[2]*o[2]+x[3]*o[3]}function te(x){const o=x[0],m=x[1],p=x[2],w=x[3];return Math.sqrt(o*o+m*m+p*p+w*w)}const ve=te;function ne(x){const o=x[0],m=x[1],p=x[2],w=x[3];return o*o+m*m+p*p+w*w}const Fe=ne;function Ge(x,o){const m=x[0]-o[0],p=x[1]-o[1],w=x[2]-o[2],P=x[3]-o[3];return Math.sqrt(m*m+p*p+w*w+P*P)}const Ve=Ge;function Be(x,o){const m=x[0]-o[0],p=x[1]-o[1],w=x[2]-o[2],P=x[3]-o[3];return m*m+p*p+w*w+P*P}const ge=Be;function Ee(x,o){const m=o??new i(4),p=x[0],w=x[1],P=x[2],C=x[3],k=Math.sqrt(p*p+w*w+P*P+C*C);return k>1e-5?(m[0]=p/k,m[1]=w/k,m[2]=P/k,m[3]=C/k):(m[0]=0,m[1]=0,m[2]=0,m[3]=0),m}function ce(x,o){const m=o??new i(4);return m[0]=-x[0],m[1]=-x[1],m[2]=-x[2],m[3]=-x[3],m}function oe(x,o){const m=o??new i(4);return m[0]=x[0],m[1]=x[1],m[2]=x[2],m[3]=x[3],m}const he=oe;function pe(x,o,m){const p=m??new i(4);return p[0]=x[0]*o[0],p[1]=x[1]*o[1],p[2]=x[2]*o[2],p[3]=x[3]*o[3],p}const ae=pe;function be(x,o,m){const p=m??new i(4);return p[0]=x[0]/o[0],p[1]=x[1]/o[1],p[2]=x[2]/o[2],p[3]=x[3]/o[3],p}const Me=be;function xe(x){const o=x??new i(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function ke(x,o,m){const p=m??new i(4),w=x[0],P=x[1],C=x[2],k=x[3];return p[0]=o[0]*w+o[4]*P+o[8]*C+o[12]*k,p[1]=o[1]*w+o[5]*P+o[9]*C+o[13]*k,p[2]=o[2]*w+o[6]*P+o[10]*C+o[14]*k,p[3]=o[3]*w+o[7]*P+o[11]*C+o[15]*k,p}function Ne(x,o,m){const p=m??new i(4);return Ee(x,p),W(p,o,p)}function M(x,o,m){const p=m??new i(4);return te(x)>o?Ne(x,o,p):oe(x,p)}function Y(x,o,m){const p=m??new i(4);return N(x,o,.5,p)}return{create:a,fromValues:f,set:y,ceil:g,floor:S,round:T,clamp:V,add:L,addScaled:O,subtract:q,sub:F,equalsApproximately:X,equals:Z,lerp:N,lerpV:z,max:U,min:R,mulScalar:W,scale:D,divScalar:H,inverse:re,invert:Pe,dot:de,length:te,len:ve,lengthSq:ne,lenSq:Fe,distance:Ge,dist:Ve,distanceSq:Be,distSq:ge,normalize:Ee,negate:ce,copy:oe,clone:he,multiply:pe,mul:ae,divide:be,div:Me,zero:xe,transformMat4:ke,setLength:Ne,truncate:M,midpoint:Y}}const ei=new Map;function Il(i){let a=ei.get(i);return a||(a=Ll(i),ei.set(i,a)),a}function $s(i,a,f,y,g,S){return{mat3:Bl(i),mat4:Al(a),quat:Gl(f),vec2:fi(y),vec3:ls(g),vec4:Il(S)}}const{mat3:Pt,mat4:pt,quat:ft,vec2:ti,vec3:I,vec4:Xc}=$s(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);$s(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);$s(El,Array,Array,Array,Array,Array);const ni=document.querySelector("#log");let vt=null,on=null;function _i(){if(vt)return vt;vt=document.createElement("div"),vt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",vt.appendChild(i),on=document.createElement("div"),on.className="ply-spinner-label",vt.appendChild(on),vt.style.display="none",document.body.appendChild(vt),vt}function qs(i){_i(),on&&i&&(on.textContent=i),vt&&(vt.style.opacity="1",vt.style.display="flex")}function Ot(i){_i(),on&&(on.textContent=i)}function Gn(){if(!vt)return;const i=vt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function mi(i,a){if(!ni)return;const f=document.createElement("p");f.innerText=i,a&&Object.assign(f.style,a),ni.appendChild(f)}async function St(i){console.log(i),mi(i)}async function zl(i){console.error(i),mi(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let bi;function vi(){bi=performance.now()}function si(i){const a=performance.now()-bi;St(`⏱️ ${i} Time: ${a.toFixed(0)} ms`)}function Rl(i,a){if(!i)throw new Error(a&&(typeof a=="string"?a:a()))}function In(i){return i+3&-4}const Ul=2,Ol=3,Vl=5,Fl=6,Ln=7,ss=8,rs=9,is=10;function Nl(i){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(i,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const y=new DataView(i),g=4,S=y.getUint32(g+0,!0),T=y.getUint32(g+4,!0),V=y.getUint32(g+8,!0),L=y.getUint32(g+12,!0),O=y.getUint32(g+16,!0),q=y.getFloat32(g+20,!0),F=y.getUint32(g+24,!0),X=y.getUint32(g+28,!0),Z=y.getFloat32(g+32,!0),N=y.getFloat32(g+36,!0),z=y.getFloat32(g+40,!0),U=y.getUint32(g+44,!0),R=y.getFloat32(g+48,!0),W=y.getFloat32(g+52,!0),D=y.getUint32(g+56,!0),H=y.getUint32(g+60,!0),re=X===rs||X===is,Pe=re?H:0,de=re?0:H,te=de>0?de:1;if(X===Vl||X===Fl)throw new Error(`NAT2: paired-RVQ format=${X} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ve=X===rs||X===is;if(X!==Ul&&X!==Ol&&X!==Ln&&X!==ss&&!ve)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${X}`);if(S%4!==0||U%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${S} layer_h=${U}`);let ne=g+64;const Fe=(D+1)*4,Ge=new Uint32Array(i.slice(ne,ne+Fe));ne+=Fe;let Ve;if(te>1){const ae=(te+1)*4;if(ne+ae>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ae} from ${ne})`);Ve=new Uint32Array(i.slice(ne,ne+ae)),ne+=ae}else Ve=new Uint32Array([0,S]);let Be=0;for(let ae=0;ae<te;ae++){const be=Ve[ae+1]-Ve[ae];be>Be&&(Be=be)}if(ve){const ae=Pe&1?7:6,be=O*ae*4;if(ne+be>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${be} more bytes from offset ${ne}, have ${i.byteLength-ne}`);const Me=new Float32Array(i.slice(ne,ne+be));ne+=be;const xe=Math.max(1,Pe>>8&255),ke=[];let Ne=0;for(let m=0,p=S,w=U;m<xe;m++,p>>=1,w>>=1){const P=Math.max(1,p>>2)*Math.max(1,w>>2)*16;ke.push(P),Ne+=P}const M=i.byteLength-ne;if(M<Ne)throw new Error(`NAT2 probe atlas truncated: need ${Ne} bytes for ${S}x${U} x${xe} mips, have ${M}`);const Y=[];let x=ne;for(const m of ke)Y.push(new Uint8Array(i.slice(x,x+m))),x+=m;const o=Y[0];return{width:S,height:T,channels:V,kernel_type:L,num_rects:O,uv_extent:q,sb_number:F,format:X,sh_bias:Z,res_bias:N,compact_mult:z,layer_h:U,atlas_scale:R,atlas_offset:W,n_layers:D,n_cols:te,layer_cuts:Ge,column_cuts:Ve,slice_width:Be,rects_expanded:Me,atlas_bytes:o,mip_bytes:Y,probe_mode:Pe&1?2:1}}const ge=O*4*4;if(ne+ge>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${ge} more bytes from offset ${ne}, have ${i.byteLength-ne}`);const Ee=new Float32Array(i.slice(ne,ne+ge));ne+=ge;const ce=new Float32Array(O*5);for(let ae=0;ae<O;ae++){const be=Ee[ae*4+0],Me=Ee[ae*4+1],xe=Ee[ae*4+2],ke=Ee[ae*4+3];let Ne=0;for(let m=1;m<=D&&Ge[m]<=Me;m++)Ne=m;let M=0;for(let m=1;m<=te&&Ve[m]<=be;m++)M=m;const Y=Me-Ge[Ne],x=be-Ve[M],o=M*D+Ne;ce[ae*5+0]=x,ce[ae*5+1]=Y,ce[ae*5+2]=xe,ce[ae*5+3]=ke,ce[ae*5+4]=o}let oe;const pe=S/4*16;if(X===Ln||X===ss){if(ne+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ae=X===Ln?"BCCB":"ACCB",be=a.decode(new Uint8Array(i,ne,4));if(be!==ae)throw new Error(`NAT2 typeD bad sub-magic: expected '${ae}' got '${be}'`);const Me=y.getUint32(ne+4,!0),xe=y.getUint32(ne+8,!0),ke=y.getUint32(ne+12,!0),Ne=y.getUint32(ne+16,!0),M=y.getUint32(ne+20,!0);if(Me!==1)throw new Error(`NAT2 BCCB unsupported version ${Me}`);if(ke!==T/4||Ne!==S/4||M!==ke*Ne)throw new Error(`NAT2 BCCB block grid mismatch: header ${S}×${T}, sub-header ${Ne}×${ke} (${M} blocks)`);ne+=24;const Y=xe*16;if(ne+Y>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Y}, have ${i.byteLength-ne})`);const x=new Uint8Array(i,ne,Y);ne+=Y;const o=M*2;if(ne+o>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${o}, have ${i.byteLength-ne})`);const m=new Uint16Array(i.slice(ne,ne+o));ne+=o;const p=new Uint8Array(M*16);for(let w=0;w<M;w++){const P=m[w]*16;p.set(x.subarray(P,P+16),w*16)}oe=p}else{let ae=0;for(let be=0;be<D;be++){const Me=Ge[be+1]-Ge[be];if(Me%4!==0)throw new Error(`NAT2 BC7 layer ${be} rows ${Me} not 4-aligned`);ae+=Me/4*pe}if(ne+ae>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ae} more bytes from offset ${ne}, have ${i.byteLength-ne}`);oe=new Uint8Array(i.slice(ne,ne+ae))}return{width:S,height:T,channels:V,kernel_type:L,num_rects:O,uv_extent:q,sb_number:F,format:X,sh_bias:Z,res_bias:N,compact_mult:z,layer_h:U,atlas_scale:R,atlas_offset:W,n_layers:D,n_cols:te,layer_cuts:Ge,column_cuts:Ve,slice_width:Be,rects_expanded:ce,atlas_bytes:oe}}const Wl=32;function $l(i,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let y,g,S,T;if(a.format===2||a.format===Ln||a.format===rs){if(!i.features.has("texture-compression-bc"))return St(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;T=a.format===rs?"BC7 atlas (proberes: shared probe texture)":a.format===Ln?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:y,view:g,sampler:S}=ri(i,a,"bc7-rgba-unorm",T)}else if(a.format===3||a.format===ss||a.format===is){if(!i.features.has("texture-compression-astc"))return St(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;T=a.format===is?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===ss?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:y,view:g,sampler:S}=ri(i,a,"astc-4x4-unorm",T)}else return St(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:V}=a,L=i.createBuffer({label:"atlas rects (5-stride)",size:In(V.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(L,0,V);const O=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Rs(i,O,a,f),{texture:y,view:g,sampler:S,rectsBuffer:L,texParamsBuffer:O,meta:a}}function ri(i,a,f,y){const{width:g,layer_h:S,n_layers:T,n_cols:V,layer_cuts:L,column_cuts:O,slice_width:q,atlas_bytes:F}=a,Z=g/4*16,N=i.limits.maxTextureDimension2D;if(S>N||q>N)throw new Error(`⚠️  atlas slice dims ${q}x${S} exceed maxTextureDimension2D=${N}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const z=V*T;if(z>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${V} cols × ${T} layers = ${z} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const U=a.mip_bytes??[F],R=U.length,W=i.createTexture({label:y,size:{width:q,height:S,depthOrArrayLayers:z},mipLevelCount:R,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let re=0;re<V;re++){const Pe=O[re]/4,de=(O[re+1]-O[re])/4;for(let te=0;te<T;te++){const ve=L[te]/4,ne=(L[te+1]-L[te])/4,Fe=re*T+te,Ge=ve*Z+Pe*16;i.queue.writeTexture({texture:W,mipLevel:0,origin:{x:0,y:0,z:Fe},aspect:"all"},F,{offset:Ge,bytesPerRow:Z,rowsPerImage:ne},{width:de*4,height:ne*4,depthOrArrayLayers:1})}}for(let re=1;re<R;re++){const Pe=Math.max(1,q>>re),de=Math.max(1,S>>re);i.queue.writeTexture({texture:W,mipLevel:re,origin:{x:0,y:0,z:0},aspect:"all"},U[re],{offset:0,bytesPerRow:Math.max(1,Pe>>2)*16,rowsPerImage:Math.max(1,de>>2)},{width:Pe,height:de,depthOrArrayLayers:1})}R>1&&console.log(`[atlas] ${R} mip levels uploaded (trilinear minification)`);const D=W.createView({label:`${y} view`,dimension:"2d-array"}),H=i.createSampler({label:`${y} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:R>1?"linear":"nearest"});return{texture:W,view:D,sampler:H}}function Rs(i,a,f,y,g=1){var O;const S=new ArrayBuffer(32),T=new Uint32Array(S),V=new Float32Array(S);T[0]=y?1:0,V[1]=f.atlas_scale,V[2]=f.atlas_offset,V[3]=f.res_bias,T[4]=f.probe_mode?f.probe_mode|0:0,T[5]=f.width|0;const L=(((O=f.mip_bytes)==null?void 0:O.length)??1)>1;T[6]=L&&g!==0?1:0,i.queue.writeBuffer(a,0,S)}async function Us(i,a){St(`loading ply file from File... : ${i.name}`),qs("downloading PLY...");const f=await i.arrayBuffer();try{return await gi(f,a)}finally{Gn()}}async function ql(i,a){St(`loading ply file from URL... : ${i}`),qs("downloading PLY...");try{vi();const f=new URL(i,self.location.href).href;return await gi({url:f},a)}finally{Gn()}}async function gi(i,a){return new Promise((f,y)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=S=>{var V,L,O,q,F,X,Z,N,z,U,R,W;const T=S.data;if((T==null?void 0:T.type)==="error"){zl(`PLY worker error: ${T.message??"unknown error"}`),g.terminate(),y(new Error(T.message??"Worker error"));return}else if((T==null?void 0:T.type)==="download_progress"){const D=T.totalBytes,H=T.loadedBytes/(1024*1024),re=D?D/(1024*1024):void 0,Pe=(T.speedBps??0)/(1024*1024),de=D?Math.min(99,Math.floor(T.loadedBytes/D*100)):void 0,te=re?`total ${re.toFixed(1)} MB`:"total -- MB",ve=re&&de!==void 0?`${H.toFixed(1)} MB downloaded (${de}%)`:`${H.toFixed(1)} MB downloaded`,ne=`${Pe.toFixed(2)} MB/s`;Ot(`downloading PLY ...
${te}, ${ve}
${ne}`);return}else if((T==null?void 0:T.type)==="fetched"){St(`💾 Fetched (${T.byteLength} bytes)`),si("Download"),Ot("parsing PLY..."),vi();return}else if((T==null?void 0:T.type)==="parse_progress"){const D=T.total??0,H=T.read??0,re=D>0?Math.floor(H/D*100):0;Ot(`parsing PLY ...
${H}/${D} surfels (${re}%)`);return}else if((T==null?void 0:T.type)==="done"){const D=T.num_points,H=T.K,re=T.feature_mode??0,Pe=T.sh_bias,de=T.kernel_type,te=T.surfelBuffer,ve=T.svParamsBuffer;St(`🪐 Total surfels: ${D}, mode=${re===1?"SB":"SV"}, K=${H}, sh_bias=${Pe}, kernel_type=${de}`);const Fe=a.createBuffer({label:"surfel input buffer",size:In(D*Wl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Fe,0,te);const Ge=ve.byteLength>0?ve.byteLength:16,Ve=a.createBuffer({label:re===1?"color_params buffer (SB)":"color_params buffer (SV)",size:In(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ve.byteLength>0&&a.queue.writeBuffer(Ve,0,ve),g.terminate(),si("Parse"),f({num_points:D,K:H,feature_mode:re,sh_bias:Pe,kernel_type:de,surfel_buffer:Fe,surfel_data:new Float32Array(te),sv_params_buffer:Ve,bbox:T.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:T.centroid??[((((L=(V=T.bbox)==null?void 0:V.min)==null?void 0:L[0])??-1)+(((q=(O=T.bbox)==null?void 0:O.max)==null?void 0:q[0])??1))/2,((((X=(F=T.bbox)==null?void 0:F.min)==null?void 0:X[1])??-1)+(((N=(Z=T.bbox)==null?void 0:Z.max)==null?void 0:N[1])??1))/2,((((U=(z=T.bbox)==null?void 0:z.min)==null?void 0:U[2])??-1)+(((W=(R=T.bbox)==null?void 0:R.max)==null?void 0:W[2])??1))/2]})}},g.onerror=S=>{g.terminate(),y(S)},i instanceof ArrayBuffer?(Ot("parsing PLY..."),g.postMessage({type:"start",plyBuffer:i},[i])):g.postMessage({type:"start_url",url:i.url})})}var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Os={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,a){(function(f,y){y(a)})(jl,function(f){class y{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class S{constructor(e){this.target=e}}class T extends S{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class V extends S{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class L extends S{constructor(e,t){super(e),this.expanded=t}}class O extends S{constructor(e,t){super(e),this.index=t}}function q(n){return n}function F(n){return n==null}function X(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const N={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class z{static alreadyDisposed(){return new z({type:"alreadydisposed"})}static notBindable(){return new z({type:"notbindable"})}static propertyNotFound(e){return new z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=N[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class U{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!U.isBindable(s))throw z.notBindable();if(!(e in s))throw z.propertyNotFound(e);s[e]=t}}class R extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new S(this))}),this}}class W{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const D="tp";function H(n){return(t,s)=>[D,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function re(n,e){return t=>e(n(t))}function Pe(n){return n.rawValue}function de(n,e){n.emitter.on("change",re(Pe,e)),e(n.rawValue)}function te(n,e,t){de(n.value(e),t)}function ve(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ne(n,e){return t=>{ve(n,e,t)}}function Fe(n,e){de(n,t=>{e.textContent=t??""})}const Ge=H("btn");class Ve{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ge("t")),Fe(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Be{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ve(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ge{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,E)=>c===E,this.emitter=new W,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:c,sender:this}))}}class Ee{constructor(e){this.emitter=new W,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function ce(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Ee(n):new ge(n,e)}class oe{constructor(e){this.emitter=new W,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:ce(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new oe(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function he(n,e){const s=Object.keys(e).reduce((c,E)=>{if(c===void 0)return;const G=e[E],ee=G(n[E]);return ee.succeeded?Object.assign(Object.assign({},c),{[E]:ee.value}):void 0},{});return s}function pe(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function ae(n){return n===null?!1:typeof n=="object"}function be(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Me(n){return{custom:e=>be(e)(n),boolean:be(e=>typeof e=="boolean"?e:void 0)(n),number:be(e=>typeof e=="number"?e:void 0)(n),string:be(e=>typeof e=="string"?e:void 0)(n),function:be(e=>typeof e=="function"?e:void 0)(n),constant:e=>be(t=>t===e?e:void 0)(n),raw:be(e=>e)(n),object:e=>be(t=>{if(ae(t))return he(t,e)})(n),array:e=>be(t=>{if(Array.isArray(t))return pe(t,e)})(n)}}const xe={optional:Me(!0),required:Me(!1)};function ke(n,e){const t=xe.required.object(e)(n);return t.succeeded?t.value:void 0}function Ne(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Y{constructor(e){this.value_=e}static create(e){return[new Y(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const x=H("");function o(n,e){return ne(n,x(void 0,e))}class m extends oe{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Y.create(ce(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const E=e??{};return new m(oe.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(c=E.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,o(e,"disabled")),te(this,"hidden",o(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const w=H(""),P={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(s=>{t.classList.remove(w(void 0,P[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(w(void 0,P[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ne({key:"parent",target:m.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function h(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function _(){return globalThis}function l(){return _().document}function d(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const v={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(k,"svg");return t.innerHTML=v[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function $(n){n.parentElement&&n.parentElement.removeChild(n)}function K(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ie(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Q(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const J=H("lbl");function j(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(J()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(J("l")),te(t.props,"label",E=>{F(E)?this.element.classList.add(J(void 0,"nol")):(this.element.classList.remove(J(void 0,"nol")),ie(s),s.appendChild(j(e,E)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(J("v")),this.element.appendChild(c),this.valueElement=c}}class fe extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const me={id:"button",type:"blade",accept(n){const e=xe,t=ke(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new fe(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:new Be(n.document,{props:oe.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof fe)||!(n.controller.valueController instanceof Be)?null:new R(n.controller)}};class Ae extends C{constructor(e){super(e),this.value=e.value}}function Te(){return new oe({positions:ce([],{equals:X})})}class Ie extends oe{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=oe.createCore(t);return new Ie(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!F(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};te(this,"expanded",s),te(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ze(n,e){let t=0;return h(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function Xe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),F(n.get("expandedHeight"))){const t=Ze(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class ze extends g{constructor(e,t){super(e),this.rackApi_=t}}function Je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ot(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function at(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ue{constructor(e){this.emitter=new W,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class tt extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new T(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends fe{constructor(e,t){super(e,t),this.binding=t.binding}}class st extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new V(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends fe{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function lt(n){return n instanceof Et?n.apiSet_:n instanceof ze?n.rackApi_.apiSet_:null}function rt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw z.shouldNeverHappen();return t}function gt(n,e,t){if(!U.isBindable(n))throw z.notBindable();return new U(n,e,t)}class Et extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new W,this.apiSet_=new Ue(lt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>rt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},E=this.controller_.view.element.ownerDocument,G=this.pool_.createInput(E,gt(e,t,c.presetKey),c),ee=new tt(G);return this.add(ee,c.index)}addMonitor(e,t,s){const c=s??{},E=this.controller_.view.element.ownerDocument,G=this.pool_.createMonitor(E,gt(e,t),c),ee=new st(G);return this.add(ee,c.index)}addFolder(e){return it(this,e)}addButton(e){return Je(this,e)}addSeparator(e){return ot(this,e)}addTab(e){return at(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=rt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=rt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new T(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ae){const s=rt(this.apiSet_,t);this.emitter_.emit("change",{event:new T(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw z.shouldNeverHappen();const t=rt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new V(t,s.target.read(),s.target.presetKey)})}}class Bt extends ze{constructor(e,t){super(e,new Et(e.rackController,t)),this.emitter_=new W,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new L(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Mt extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Ct{constructor(e,t){const s=H(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function At(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function Vt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function kt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ae&&s.value===e)return s}return null}function Dt(n){return n instanceof Qe?n.rack:n instanceof Mt?n.rackController.rack:null}function an(n){const e=Dt(n);return e?e.bcSet_:null}class ln{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new W,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ue(an),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),Z(e,"parent")?e.parent=this:(e.parent_=this,Ne({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){Z(e,"parent")?e.parent=null:(e.parent_=null,Ne({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Dt(s);if(c){const E=c.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Dt(s);if(c){const E=c.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const E=[];c===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),c===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),c.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=At(this.find(qe),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Vt(this.find(Ke),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=kt(this.find(Ae),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Qe extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ct(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new ln({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&$(e.bladeController.view.element)}}const cn=H("cnt");class zn{constructor(e,t){var s;this.className_=H((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),cn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),te(this.foldable_,"completed",ne(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),te(t.props,"title",Ce=>{F(Ce)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const G=e.createElement("div");G.classList.add(this.className_("t")),Fe(t.props.value("title"),G),this.buttonElement.appendChild(G),this.titleElement=G;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Se=t.containerElement;Se.classList.add(this.className_("c")),this.element.appendChild(Se),this.containerElement=Se}}class un extends Mt{constructor(e,t){var s;const c=Ie.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new Qe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new zn(e,{containerElement:E.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Rn={id:"folder",type:"blade",accept(n){const e=xe,t=ke(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new un(n.document,{blade:n.blade,expanded:n.params.expanded,props:oe.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof un?new Bt(n.controller,n.pool):null}};class Gt extends Ae{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class dn extends g{}const gn=H("spr");class pn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(gn("r")),this.element.appendChild(s)}}class Yt extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new pn(e,{viewProps:t.viewProps})}))}}const Un={id:"separator",type:"blade",accept(n){const t=ke(n,{view:xe.required.constant("separator")});return t?{params:t}:null},controller(n){return new Yt(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Yt?new dn(n.controller):null}},se=H("tbi");class _e{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element),te(t.props,"selected",E=>{E?this.element.classList.add(se(void 0,"sel")):this.element.classList.remove(se(void 0,"sel"))});const s=e.createElement("button");s.classList.add(se("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(se("t")),Fe(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class le{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new _e(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class De{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new le(e,{props:t.itemProps,viewProps:m.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Qe(e,{blade:Te(),viewProps:m.create()}),this.props=t.props,te(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Re{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class ye extends ze{constructor(e,t){super(e,new Et(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new W,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new De(t,{itemProps:oe.fromObject({selected:!1,title:e.title}),props:oe.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw z.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw z.shouldNeverHappen();const s=new Re(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new O(this,e.rawValue)})}}const ue=-1;class je{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ce(!0),this.selectedIndex=ce(ue),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ue,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Ye=H("tab");class ct{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ye(),cn()),t.viewProps.bindClassModifiers(this.element),de(t.empty,ne(this.element,Ye(void 0,"nop")));const s=e.createElement("div");s.classList.add(Ye("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Ye("i")),this.element.appendChild(c);const E=t.contentsElement;E.classList.add(Ye("c")),this.element.appendChild(E),this.contentsElement=E}}class mt extends Mt{constructor(e,t){const s=new Qe(e,{blade:t.blade,viewProps:t.viewProps}),c=new je;super({blade:t.blade,rackController:s,view:new ct(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ue(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;$(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const On={id:"tab",type:"blade",accept(n){const e=xe,t=ke(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new mt(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new De(n.document,{itemProps:oe.fromObject({selected:!1,title:t.title}),props:oe.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof mt?new ye(n.controller,n.pool):null}};function Vn(n,e){const t=n.accept(e.params);if(!t)return null;const s=xe.optional.boolean(e.params.disabled).value,c=xe.optional.boolean(e.params.hidden).value;return n.controller({blade:Te(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:m.create({disabled:s,hidden:c})})}class Fn{constructor(){this.disabled=!1,this.emitter=new W}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class us{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new W,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Nn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new W,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Wn(n,e){for(;n.length<e;)n.push(void 0)}function ds(n){const e=[];return Wn(e,n),ce(e)}function $n(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function ps(n,e){const t=[...$n(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Wn(t,n.length),t}class qn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new W,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=ps(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class ut{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function _t(n,e){if(n instanceof e)return n;if(n instanceof ut){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Tt{constructor(e){this.values=oe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class wt{constructor(e){this.values=oe.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Zt{constructor(e){this.values=oe.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return F(s)||(c=Math.max(c,s)),F(t)||(c=Math.min(c,t)),c}}class Lt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const wn=H("lst");class xn{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(wn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(wn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(wn("m")),c.appendChild(b(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,te(this.props_,"options",E=>{K(this.selectElement),E.forEach(G=>{const ee=e.createElement("option");ee.textContent=G.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class yn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new xn(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Hs=H("pop");class Di{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element),de(t.shows,ne(this.element,Hs(void 0,"v")))}}class Ks{constructor(e,t){this.shows=ce(!1),this.viewProps=t.viewProps,this.view=new Di(e,{shows:this.shows,viewProps:this.viewProps})}}const Ys=H("txt");class Gi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ys("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class jn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Gi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);F(c)||(this.value.rawValue=c),this.view.refresh()}}function Li(n){return String(n)}function Zs(n){return n==="false"?!1:!!n}function Xs(n){return Li(n)}class Ii{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const zi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ri{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ui={"+":n=>n,"-":n=>-n,"~":n=>~n};class Oi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ui[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function hs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Pn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Sn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Fi(n,e){const t=Sn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Sn(n,e);return c===""?"":s+c}function fs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Fi(n,e);return s===""?"":t+s}function Qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+Sn(n,e)}function Ni(n,e){const t=Qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Sn(n,e);return e+=c.length,t+s+c+fs(n,e)}function Wi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Sn(n,e);return e+=s.length,s===""?"":t+s+fs(n,e)}function $i(n,e){const t=Qs(n,e);return e+=t.length,t===""?"":t+fs(n,e)}const qi=hs([Ni,Wi,$i]);function ji(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=ji(n,e);return s===""?"":t+s}function Ki(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Yi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ki(n,e);return s===""?"":t+s}function Zi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Xi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Zi(n,e);return s===""?"":t+s}const Qi=hs([Hi,Yi,Xi]),Ji=hs([Qi,qi]);function eo(n,e){const t=Ji(n,e);return e+=t.length,t===""?null:{evaluable:new Ii(t),cursor:e}}function to(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=er(n,e);if(!s)return null;e=s.cursor,e+=Pn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function no(n,e){var t;return(t=eo(n,e))!==null&&t!==void 0?t:to(n,e)}function Js(n,e){const t=no(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Js(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Oi(s,c.evaluable)}):null}function so(n,e,t){t+=Pn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Pn(e,t).length,{cursor:t,operator:s}):null}function ro(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let E=c.evaluable;for(;;){const G=so(e,t,s);if(!G)break;s=G.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,E=new Ri(G.operator,E,ee.evaluable)}return E?{cursor:s,evaluable:E}:null}}const io=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>ro(n,e),Js);function er(n,e){return e+=Pn(n,e).length,io(n,e)}function oo(n){const e=er(n,0);return!e||e.cursor+Pn(n,e.cursor).length!==n.length?null:e.evaluable}function It(n){var e;const t=oo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=It(n);if(!F(e))return e}return 0}function ao(n){return String(n)}function ht(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const lo=ht(0);function Hn(n){return lo(n)+"%"}function nr(n){return String(n)}function _s(n){return n}function En({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function E(G){c||(c=!0,G(),c=!1)}n.emitter.on("change",G=>{E(()=>{e.setRawValue(t(n,e),G.options)})}),e.emitter.on("change",G=>{E(()=>{n.setRawValue(s(n,e),G.options)}),E(()=>{e.setRawValue(t(n,e),G.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function bt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Cn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function zt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function co(n){return n==="ArrowUp"||n==="ArrowDown"}function sr(n){return co(n)||n==="ArrowLeft"||n==="ArrowRight"}function ms(n,e){var t,s;const c=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class Xt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new W,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ms(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ms(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ms(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,c){const E=(n-e)/(t-e);return s+E*(c-s)}function rr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function dt(n,e,t){return Math.min(Math.max(n,e),t)}function ir(n,e){return(n%e+e)%e}const xt=H("txt");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(xt(),xt(void 0,"num")),t.arrayPosition&&this.element.classList.add(xt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(xt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xt()),this.inputElement.classList.add(xt("i"));const c=e.createElement("div");c.classList.add(xt("k")),this.element.appendChild(c),this.knobElement=c;const E=e.createElementNS(k,"svg");E.classList.add(xt("g")),this.knobElement.appendChild(E);const G=e.createElementNS(k,"path");G.classList.add(xt("gb")),E.appendChild(G),this.guideBodyElem_=G;const ee=e.createElementNS(k,"path");ee.classList.add(xt("gh")),E.appendChild(ee),this.guideHeadElem_=ee;const Se=e.createElement("div");Se.classList.add(H("tt")()),this.knobElement.appendChild(Se),this.tooltipElem_=Se,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(xt(void 0,"drg"));return}this.element.classList.add(xt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=dt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class kn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=ce(null),this.view=new uo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Xt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let G=e;return c!==void 0&&(G=Math.max(G,c)),E!==void 0&&(G=Math.min(G,E)),G}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);F(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=bt(this.baseStep_,Cn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){bt(this.baseStep_,Cn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const bs=H("sld");class po{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(bs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(bs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(bs("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=dt(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class ho{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new po(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(dt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(this.baseStep_,zt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){bt(this.baseStep_,zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vs=H("sldtxt");class fo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vs());const s=e.createElement("div");s.classList.add(vs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(vs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new ho(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new kn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new fo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Tn(n,e){n.write(e)}function Kn(n){const e=xe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function or(n){if(n==="inline"||n==="popup")return n}function Ft(n){const e=xe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ar(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ws(n){return F(n)?null:new wt(ar(n))}function _o(n){const e=n?_t(n,Lt):null;return e?e.step:null}function Yn(n,e){const t=n&&_t(n,Lt);return t?rr(t.step):Math.max(rr(e),2)}function hn(n){const e=_o(n);return e??1}function fn(n,e){var t;const s=n&&_t(n,Lt),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Zn=H("ckb");class mo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Zn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Zn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Zn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(Zn("w")),s.appendChild(E);const G=b(e,"check");E.appendChild(G),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class bo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new mo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function vo(n){const e=[],t=ws(n.options);return t&&e.push(t),new ut(e)}const go={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ke(e,{options:xe.optional.custom(Kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs,constraint:n=>vo(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&_t(s,wt);return c?new yn(e,{props:new oe({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new bo(e,{value:t,viewProps:n.viewProps})}},Qt=H("col");class wo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Qt()),t.foldable.bindExpandedClass(this.element,Qt(void 0,"expanded")),te(t.foldable,"completed",ne(this.element,Qt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Qt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Qt("s")),s.appendChild(c),this.swatchElement=c;const E=e.createElement("div");if(E.classList.add(Qt("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const G=e.createElement("div");G.classList.add(Qt("p")),this.element.appendChild(G),this.pickerElement=G}else this.pickerElement=null}}function xo(n,e,t){const s=dt(n/255,0,1),c=dt(e/255,0,1),E=dt(t/255,0,1),G=Math.max(s,c,E),ee=Math.min(s,c,E),Se=G-ee;let Ce=0,We=0;const $e=(ee+G)/2;return Se!==0&&(We=Se/(1-Math.abs(G+ee-1)),s===G?Ce=(c-E)/Se:c===G?Ce=2+(E-s)/Se:Ce=4+(s-c)/Se,Ce=Ce/6+(Ce<0?1:0)),[Ce*360,We*100,$e*100]}function yo(n,e,t){const s=(n%360+360)%360,c=dt(e/100,0,1),E=dt(t/100,0,1),G=(1-Math.abs(2*E-1))*c,ee=G*(1-Math.abs(s/60%2-1)),Se=E-G/2;let Ce,We,$e;return s>=0&&s<60?[Ce,We,$e]=[G,ee,0]:s>=60&&s<120?[Ce,We,$e]=[ee,G,0]:s>=120&&s<180?[Ce,We,$e]=[0,G,ee]:s>=180&&s<240?[Ce,We,$e]=[0,ee,G]:s>=240&&s<300?[Ce,We,$e]=[ee,0,G]:[Ce,We,$e]=[G,0,ee],[(Ce+Se)*255,(We+Se)*255,($e+Se)*255]}function Po(n,e,t){const s=dt(n/255,0,1),c=dt(e/255,0,1),E=dt(t/255,0,1),G=Math.max(s,c,E),ee=Math.min(s,c,E),Se=G-ee;let Ce;Se===0?Ce=0:G===s?Ce=60*(((c-E)/Se%6+6)%6):G===c?Ce=60*((E-s)/Se+2):Ce=60*((s-c)/Se+4);const We=G===0?0:Se/G,$e=G;return[Ce,We*100,$e*100]}function lr(n,e,t){const s=ir(n,360),c=dt(e/100,0,1),E=dt(t/100,0,1),G=E*c,ee=G*(1-Math.abs(s/60%2-1)),Se=E-G;let Ce,We,$e;return s>=0&&s<60?[Ce,We,$e]=[G,ee,0]:s>=60&&s<120?[Ce,We,$e]=[ee,G,0]:s>=120&&s<180?[Ce,We,$e]=[0,G,ee]:s>=180&&s<240?[Ce,We,$e]=[0,ee,G]:s>=240&&s<300?[Ce,We,$e]=[ee,0,G]:[Ce,We,$e]=[G,0,ee],[(Ce+Se)*255,(We+Se)*255,($e+Se)*255]}function So(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Eo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Jt(n){return[n[0],n[1],n[2]]}function cr(n,e){return[n[0],n[1],n[2],e]}const Co={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:So,rgb:yo},hsv:{hsl:Eo,hsv:(n,e,t)=>[n,e,t],rgb:lr},rgb:{hsl:xo,hsv:Po,rgb:(n,e,t)=>[n,e,t]}};function Xn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function ko(n,e){return n===e?e:ir(n,e)}function To(n,e,t){var s;const c=Xn(e,t);return[e==="rgb"?dt(n[0],0,c[0]):ko(n[0],c[0]),dt(n[1],0,c[1]),dt(n[2],0,c[2]),dt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function ur(n,e,t,s){const c=Xn(e,t),E=Xn(e,s);return n.map((G,ee)=>G/c[ee]*E[ee])}function Bo(n,e,t){const s=ur(n,e.mode,e.type,"int"),c=Co[e.mode][t.mode](...s);return ur(c,t.mode,"int",t.type)}function Qn(n,e){return typeof n!="object"||F(n)?!1:e in n&&typeof n[e]=="number"}class Oe{static black(e="int"){return new Oe([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Oe(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Qn(e,"r")&&Qn(e,"g")&&Qn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Qn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==c[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=To(e,t,s)}getComponents(e,t="int"){return cr(Bo(Jt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Nt=H("colp");class Mo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("hsv"));const c=e.createElement("div");c.classList.add(Nt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const E=e.createElement("div");E.classList.add(Nt("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const G=e.createElement("div");if(G.classList.add(Nt("rgb")),this.textView_=t.textView,G.appendChild(this.textView_.element),this.element.appendChild(G),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Nt("a"));const Se=e.createElement("div");Se.classList.add(Nt("ap")),Se.appendChild(this.alphaViews_.palette.element),ee.appendChild(Se);const Ce=e.createElement("div");Ce.classList.add(Nt("at")),Ce.appendChild(this.alphaViews_.text.element),ee.appendChild(Ce),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Ao(n){return n==="int"?"int":n==="float"?"float":void 0}function xs(n){const e=xe;return ke(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Ao)}),expanded:e.optional.boolean,picker:e.optional.custom(or)})}function en(n){return n?.1:1}function tn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Do(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function yt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Go={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Go[s](t)}function pr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Oe(t,"rgb",n):null}}function fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Oe(t,"rgb",n):null}}function mr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),yt(e[2],100),yt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function br(n){return e=>{const t=mr(e);return t?new Oe(t,"hsl",n):null}}function vr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),yt(e[2],100),yt(e[3],100),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function gr(n){return e=>{const t=vr(e);return t?new Oe(t,"hsl",n):null}}function wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Lo(n){const e=wr(n);return e?new Oe(e,"rgb","int"):null}function xr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function Io(n){const e=xr(n);return e?new Oe(e,"rgb","int"):null}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Oe(t,"rgb",n):null}}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Er(n){return e=>{const t=Sr(e);return t?new Oe(t,"rgb",n):null}}const zo=[{parser:wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:pr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:vr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:yr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ro(n){return zo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function ys(n,e="int"){const t=Ro(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Cr={int:[Lo,Io,hr("int"),_r("int"),br("int"),gr("int"),Pr("int"),Er("int")],float:[hr("float"),_r("float"),br("float"),gr("float"),Pr("float"),Er("float")]};function Uo(n){const e=Cr[n];return t=>{if(typeof t!="string")return Oe.black(n);const s=e.reduce((c,E)=>c||E(t),null);return s??Oe.black(n)}}function Ps(n){const e=Cr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function kr(n){const e=dt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Tr(n,e="#"){const t=Jt(n.getComponents("rgb")).map(kr).join("");return`${e}${t}`}function Ss(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(kr).join("");return`${e}${s}`}function Br(n,e){const t=ht(e==="float"?2:0);return`rgb(${Jt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Oo(n){return e=>Br(e,n)}function Jn(n,e){const t=ht(2),s=ht(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,G)=>(G===3?t:s)(E)).join(", ")})`}function Vo(n){return e=>Jn(e,n)}function Fo(n){const e=[ht(0),Hn,Hn];return`hsl(${Jt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function No(n){const e=[ht(0),Hn,Hn,ht(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Mr(n,e){const t=ht(e==="float"?2:0),s=["r","g","b"];return`{${Jt(n.getComponents("rgb",e)).map((E,G)=>`${s[G]}: ${t(E)}`).join(", ")}}`}function Wo(n){return e=>Mr(e,n)}function Ar(n,e){const t=ht(2),s=ht(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((G,ee)=>{const Se=ee===3?t:s;return`${c[ee]}: ${Se(G)}`}).join(", ")}}`}function $o(n){return e=>Ar(e,n)}const qo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Tr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ss},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:No},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Wo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:$o(e)}],[])];function Es(n){return qo.reduce((e,t)=>e||(Do(t.format,n)?t.stringifier:null),null)}const Bn=H("apl");class jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Bn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Bn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Bn("c")),s.appendChild(c),this.colorElem_=c;const E=e.createElement("div");E.classList.add(Bn("m")),this.element.appendChild(E),this.markerElem_=E;const G=e.createElement("div");G.classList.add(Bn("p")),this.markerElem_.appendChild(G),this.previewElem_=G,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Oe([t[0],t[1],t[2],0],"rgb"),c=new Oe([t[0],t[1],t[2],255],"rgb"),E=["to right",Jn(s),Jn(c)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=Jn(e);const G=et(t[3],0,1,0,100);this.markerElem_.style.left=`${G}%`}onValueChange_(){this.update_()}}class Ho{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[E,G,ee]=c.getComponents("hsv");this.value.setRawValue(new Oe([E,G,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(en(!0),zt(e));if(t===0)return;const s=this.value.rawValue,[c,E,G,ee]=s.getComponents("hsv");this.value.setRawValue(new Oe([c,E,G,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){bt(en(!0),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const _n=H("coltxt");function Ko(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const E=n.createElement("option");return E.textContent=c.text,E.value=c.value,s.appendChild(E),s},n.createDocumentFragment())),e}class Yo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(_n("m")),this.modeElem_=Ko(e),this.modeElem_.classList.add(_n("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(_n("mm")),c.appendChild(b(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(_n("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,G=>{this.modeElem_.value=G})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(_n("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Zo(n){return ht(n==="float"?2:0)}function Xo(n,e,t){const s=Xn(n,e)[t];return new Tt({min:0,max:s})}function Cs(n,e,t){return new kn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:en(!1),parser:e.parser,props:oe.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Zo(e.colorType)}),value:ce(0,{constraint:Xo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Qo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=ce(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Yo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Cs(e,t,0),Cs(e,t,1),Cs(e,t,2)];return s.forEach((c,E)=>{En({primary:this.value,secondary:c.value,forward:G=>G.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(G,ee)=>{const Se=this.colorMode.rawValue,Ce=G.rawValue.getComponents(Se,this.colorType_);return Ce[E]=ee.rawValue,new Oe(cr(Jt(Ce),Ce[3]),Se,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ks=H("hpl");class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ks("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ks("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Br(new Oe([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(dt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,E,G,ee]=c.getComponents("hsv");this.value.setRawValue(new Oe([s,E,G,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(en(!1),zt(e));if(t===0)return;const s=this.value.rawValue,[c,E,G,ee]=s.getComponents("hsv");this.value.setRawValue(new Oe([c+t,E,G,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){bt(en(!1),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ts=H("svp"),Dr=64;class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Dr,s.width=Dr,s.classList.add(Ts("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Ts("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=d(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,E=this.canvasElement.height,G=e.getImageData(0,0,c,E),ee=G.data;for(let We=0;We<E;We++)for(let $e=0;$e<c;$e++){const nn=et($e,0,c,0,100),An=et(We,0,E,100,0),Dn=lr(s[0],nn,An),es=(We*c+$e)*4;ee[es]=Dn[0],ee[es+1]=Dn[1],ee[es+2]=Dn[2],ee[es+3]=255}e.putImageData(G,0,0);const Se=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Se}%`;const Ce=et(s[2],0,100,100,0);this.markerElem_.style.top=`${Ce}%`}onValueChange_(){this.update_()}}class na{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),c=et(e.point.y,0,e.bounds.height,100,0),[E,,,G]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Oe([E,s,c,G],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s,c,E]=this.value.rawValue.getComponents("hsv"),G=en(!1),ee=bt(G,zt(e)),Se=bt(G,Cn(e));ee===0&&Se===0||this.value.setRawValue(new Oe([t,s+ee,c+Se,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=en(!1),s=bt(t,zt(e)),c=bt(t,Cn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class sa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new ea(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new na(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Ho(e,{value:this.value,viewProps:this.viewProps}),text:new kn(e,{parser:It,baseStep:.1,props:oe.fromObject({draggingScale:.01,formatter:ht(2)}),value:ce(0,{constraint:new Tt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&En({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const E=s.rawValue.getComponents();return E[3]=c.rawValue,new Oe(E,s.rawValue.mode)}}),this.textC_=new Qo(e,{colorType:t.colorType,parser:It,value:this.value,viewProps:this.viewProps}),this.view=new Mo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Bs=H("colsw");class ra{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Bs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Bs("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Bs("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ss(e)}onValueChange_(){this.update_()}}class ia{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ra(e,{value:this.value,viewProps:this.viewProps})}}class Ms{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ie.create(t.expanded),this.swatchC_=new ia(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new jn(e,{parser:t.parser,props:oe.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new wo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ks(e,{viewProps:this.viewProps}):null;const c=new sa(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),En({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,G)=>G.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Q(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function oa(n,e){return Oe.isColorObject(n)?Oe.fromObject(n,e):Oe.black(e)}function aa(n){return Jt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function la(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function ca(n){return new Oe([n>>16&255,n>>8&255,n&255],"rgb")}function ua(n){return new Oe([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function da(n){return typeof n!="number"?Oe.black():ca(n)}function pa(n){return typeof n!="number"?Oe.black():ua(n)}function ha(n){const e=Es(n);return e?(t,s)=>{Tn(t,e(s))}:null}function fa(n){const e=n?la:aa;return(t,s)=>{Tn(t,e(s))}}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ma(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ba(n,e){return(t,s)=>{n?_a(t,s,e):ma(t,s,e)}}function As(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function va(n){return n?e=>Ss(e,"0x"):e=>Tr(e,"0x")}function ga(n){return"color"in n||"view"in n&&n.view==="color"}const wa={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ga(e))return null;const t=xs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>As(n.params)?pa:da,equals:Oe.equals,writer:n=>fa(As(n.params))},controller:n=>{const e=As(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:"int",expanded:t??!1,formatter:va(e),parser:Ps("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function xa(n){return Oe.isRgbaColorObject(n)}function ya(n){return e=>oa(e,n)}function Pa(n,e){return t=>n?Ar(t,e):Mr(t,e)}const Sa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Oe.isColorObject(n))return null;const t=xs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ya(tn(n.params)),equals:Oe.equals,writer:n=>ba(xa(n.initialValue),tn(n.params))},controller:n=>{var e;const t=Oe.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,E=(e=tn(n.params))!==null&&e!==void 0?e:"int";return new Ms(n.document,{colorType:E,expanded:s??!1,formatter:Pa(t,E),parser:Ps(E),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ea={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ys(n,tn(e));if(!t||!Es(t))return null;const c=xs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Uo((e=tn(n.params))!==null&&e!==void 0?e:"int")},equals:Oe.equals,writer:n=>{const e=ys(n.initialValue,tn(n.params));if(!e)throw z.shouldNeverHappen();const t=ha(e);if(!t)throw z.notBindable();return t}},controller:n=>{const e=ys(n.initialValue,tn(n.params));if(!e)throw z.shouldNeverHappen();const t=Es(e);if(!t)throw z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Ps(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Wt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var E,G;return(G=(E=this.components[c])===null||E===void 0?void 0:E.constrain(s))!==null&&G!==void 0?G:s});return this.asm_.fromComponents(t)}}const Gr=H("pndtxt");class Ca{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Gr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Gr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function ka(n,e,t){return new kn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:ce(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ds{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>ka(e,t,c)),this.acs_.forEach((s,c)=>{En({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[c],backward:(E,G)=>{const ee=t.assembly.toComponents(E.rawValue);return ee[c]=G.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ca(e,{textViews:this.acs_.map(s=>s.view)})}}function Lr(n,e){return"step"in n&&!F(n.step)?new Lt(n.step,e):null}function Ir(n){return!F(n.max)&&!F(n.min)?new Tt({max:n.max,min:n.min}):!F(n.max)||!F(n.min)?new Zt({max:n.max,min:n.min}):null}function Ta(n){const e=_t(n,Tt);if(e)return[e.values.get("min"),e.values.get("max")];const t=_t(n,Zt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ba(n,e){const t=[],s=Lr(n,e);s&&t.push(s);const c=Ir(n);c&&t.push(c);const E=ws(n.options);return E&&t.push(E),new ut(t)}const Ma={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=ke(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Kn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Ba(n.params,n.initialValue),writer:n=>Tn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&_t(s,wt);if(c)return new yn(n.document,{props:new oe({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ht(Yn(s,t.rawValue)),G=s&&_t(s,Tt);return G?new gs(n.document,{baseStep:hn(s),parser:It,sliderProps:new oe({maxValue:G.values.value("max"),minValue:G.values.value("min")}),textProps:oe.fromObject({draggingScale:fn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new kn(n.document,{baseStep:hn(s),parser:It,props:oe.fromObject({draggingScale:fn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class $t{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const zr={toComponents:n=>n.getComponents(),fromComponents:n=>new $t(...n)},mn=H("p2d");class Aa{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,ne(this.element,mn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(mn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(mn("b")),c.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const E=e.createElement("div");if(E.classList.add(mn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const G=e.createElement("div");G.classList.add(mn("p")),this.element.appendChild(G),this.pickerElement=G}else this.pickerElement=null}}const qt=H("p2dp");class Da{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(qt()),t.layout==="popup"&&this.element.classList.add(qt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(k,"svg");c.classList.add(qt("g")),this.padElement.appendChild(c),this.svgElem_=c;const E=e.createElementNS(k,"line");E.classList.add(qt("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const G=e.createElementNS(k,"line");G.classList.add(qt("ax")),G.setAttributeNS(null,"x1","50%"),G.setAttributeNS(null,"y1","0"),G.setAttributeNS(null,"x2","50%"),G.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(G);const ee=e.createElementNS(k,"line");ee.classList.add(qt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Se=e.createElement("div");Se.classList.add(qt("m")),this.padElement.appendChild(Se),this.markerElem_=Se,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=et(e,-s,+s,0,100),E=et(t,-s,+s,0,100),G=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${G}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${G}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Rr(n,e,t){return[bt(e[0],zt(n)),bt(e[1],Cn(n))*(t?1:-1)]}class Ga{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Da(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=et(e.point.x,0,e.bounds.width,-s,+s),E=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new $t(c,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s]=Rr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new $t(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Rr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class La{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ie.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ks(e,{viewProps:this.viewProps}):null;const E=new Ga(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(G=>{G.addEventListener("blur",this.onPopupChildBlur_),G.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new Ds(e,{assembly:zr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Aa(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),En({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:G=>G.rawValue,backward:(G,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Q(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class bn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new bn(...n)};function Ia(n){return bn.isObject(n)?new bn(n.x,n.y,n.z):new bn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ra(n,e){return new Wt({assembly:Ur,components:[Rt("x"in n?n.x:void 0,e.x),Rt("y"in n?n.y:void 0,e.y),Rt("z"in n?n.z:void 0,e.z)]})}function Gs(n,e){return{baseStep:hn(e),constraint:e,textProps:oe.fromObject({draggingScale:fn(e,n),formatter:ht(Yn(e,n))})}}const Ua={id:"input-point3d",type:"input",accept:(n,e)=>{if(!bn.isObject(n))return null;const t=xe,s=ke(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>Ra(n.params,n.initialValue),equals:bn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Wt))throw z.shouldNeverHappen();return new Ds(n.document,{assembly:Ur,axes:[Gs(e.rawValue.x,t.components[0]),Gs(e.rawValue.y,t.components[1]),Gs(e.rawValue.z,t.components[2])],parser:It,value:e,viewProps:n.viewProps})}};class vn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,c=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Or={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function Oa(n){return vn.isObject(n)?new vn(n.x,n.y,n.z,n.w):new vn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Fa(n,e){return new Wt({assembly:Or,components:[Rt("x"in n?n.x:void 0,e.x),Rt("y"in n?n.y:void 0,e.y),Rt("z"in n?n.z:void 0,e.z),Rt("w"in n?n.w:void 0,e.w)]})}function Na(n,e){return{baseStep:hn(e),constraint:e,textProps:oe.fromObject({draggingScale:fn(e,n),formatter:ht(Yn(e,n))})}}const Wa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=xe,s=ke(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft),w:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Oa,constraint:n=>Fa(n.params,n.initialValue),equals:vn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Wt))throw z.shouldNeverHappen();return new Ds(n.document,{assembly:Or,axes:e.rawValue.getComponents().map((s,c)=>Na(s,t.components[c])),parser:It,value:e,viewProps:n.viewProps})}};function $a(n){const e=[],t=ws(n.options);return t&&e.push(t),new ut(e)}const qa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=ke(e,{options:xe.optional.custom(Kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr,constraint:n=>$a(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&_t(s,wt);return c?new yn(e,{props:new oe({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new jn(e,{parser:E=>E,props:oe.fromObject({formatter:_s}),value:t,viewProps:n.viewProps})}},Mn={monitor:{defaultInterval:200,defaultLineCount:3}},Vr=H("mll");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Vr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Fr=H("sgl");class Ha{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Fr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ha(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ka={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ke(e,{lineCount:xe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs},controller:n=>{var e;return n.value.rawValue.length===1?new Is(n.document,{formatter:Xs,value:n.value,viewProps:n.viewProps}):new Ls(n.document,{formatter:Xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},jt=H("grl");class Ya{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(jt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(k,"svg");s.classList.add(jt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(k,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const E=e.createElement("div");E.classList.add(jt("t"),H("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach((We,$e)=>{if(We===void 0)return;const nn=et($e,0,t,0,e.width),An=et(We,s,c,e.height,0);E.push([nn,An].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const G=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){G.classList.remove(jt("t","a"));return}const Se=et(this.cursor_.rawValue,0,t,0,e.width),Ce=et(ee,s,c,e.height,0);G.style.left=`${Se}px`,G.style.top=`${Ce}px`,G.textContent=`${this.formatter_(ee)}`,G.classList.contains(jt("t","a"))||(G.classList.add(jt("t","a"),jt("t","in")),r(G),G.classList.remove(jt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Za{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=ce(-1),this.view=new Ya(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Xt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function zs(n){return"format"in n&&!F(n.format)?n.format:ht(2)}function Xa(n){var e;return n.value.rawValue.length===1?new Is(n.document,{formatter:zs(n.params),value:n.value,viewProps:n.viewProps}):new Ls(n.document,{formatter:zs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Qa(n){var e,t,s;return new Za(n.document,{formatter:zs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,props:oe.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Nr(n){return"view"in n&&n.view==="graph"}const Ja={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=ke(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Nr(n)?64:1,reader:n=>tr},controller:n=>Nr(n.params)?Qa(n):Xa(n)},el={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=xe,s=ke(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ls(n.document,{formatter:_s,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Is(n.document,{formatter:_s,value:t,viewProps:n.viewProps})}};function tl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(F(s))return null;const c=xe,E={target:e.target,initialValue:s.initialValue,params:s.params},G=n.binding.reader(E),ee=n.binding.constraint?n.binding.constraint(E):void 0,Se=ce(G(s.initialValue),{constraint:ee,equals:n.binding.equals}),Ce=new Nn({reader:G,target:e.target,value:Se,writer:n.binding.writer(E)}),We=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,nn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Ce.value,viewProps:m.create({disabled:We,hidden:$e})});return new qe(e.document,{binding:Ce,blade:Te(),props:oe.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:nn})}function nl(n,e){return e===0?new Fn:new us(n,e??Mn.monitor.defaultInterval)}function sl(n,e){var t,s,c;const E=xe,G=n.accept(e.target.read(),e.params);if(F(G))return null;const ee={target:e.target,initialValue:G.initialValue,params:G.params},Se=n.binding.reader(ee),Ce=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(G.params))!==null&&s!==void 0?s:1,We=E.optional.number(e.params.interval).value,$e=new qn({reader:Se,target:e.target,ticker:nl(e.document,We),value:ds(Ce)}),nn=E.optional.boolean(e.params.disabled).value,An=E.optional.boolean(e.params.hidden).value,Dn=n.controller({document:e.document,params:G.params,value:$e.value,viewProps:m.create({disabled:nn,hidden:An})});return new Ke(e.document,{binding:$e,blade:Te(),props:oe.fromObject({label:"label"in e.params?(c=E.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Dn})}class rl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(F(c))throw new z({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((G,ee)=>G??tl(ee,{document:e,target:t,params:s}),null);if(E)return E;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((E,G)=>E??sl(G,{document:e,params:s,target:t}),null);if(c)return c;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,E)=>c??Vn(E,{document:e,params:t}),null);if(!s)throw new z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new tt(e);if(e instanceof Ke)return new st(e);if(e instanceof Qe)return new Et(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw z.shouldNeverHappen();return t}}function il(){const n=new rl;return[dl,Ua,Wa,qa,Ma,Ea,Sa,wa,go,Ka,el,Ja,me,Rn,Un,On].forEach(e=>{n.register(e)}),n}function ol(n){return $t.isObject(n)?new $t(n.x,n.y):new $t}function al(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Rt(n,e){if(!n)return;const t=[],s=Lr(n,e);s&&t.push(s);const c=Ir(n);return c&&t.push(c),new ut(t)}function ll(n,e){return new Wt({assembly:zr,components:[Rt("x"in n?n.x:void 0,e.x),Rt("y"in n?n.y:void 0,e.y)]})}function Wr(n,e){const[t,s]=n?Ta(n):[];if(!F(t)||!F(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=hn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function cl(n,e){const t=e instanceof Wt?e.components[0]:void 0,s=e instanceof Wt?e.components[1]:void 0,c=Wr(t,n.x),E=Wr(s,n.y);return Math.max(c,E)}function $r(n,e){return{baseStep:hn(e),constraint:e,textProps:oe.fromObject({draggingScale:fn(e,n),formatter:ht(Yn(e,n))})}}function ul(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const dl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!$t.isObject(n))return null;const t=xe,s=ke(e,{expanded:t.optional.boolean,picker:t.optional.custom(or),x:t.optional.custom(Ft),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ol,constraint:n=>ll(n.params,n.initialValue),equals:$t.equals,writer:n=>al},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Wt))throw z.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new La(e,{axes:[$r(t.rawValue.x,s.components[0]),$r(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:ul(n.params),maxValue:cl(t.rawValue,s),parser:It,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class qr extends g{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class jr extends g{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Hr extends g{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const pl=function(){return{id:"list",type:"blade",accept(n){const e=xe,t=ke(n,{options:e.required.custom(Kn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new wt(ar(n.params.options)),t=ce(n.params.value,{constraint:e}),s=new yn(n.document,{props:new oe({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof yn)?null:new qr(n.controller)}}}();function hl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function fl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class _l extends Bt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);fl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return hl(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class ml extends un{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const bl={id:"slider",type:"blade",accept(n){const e=xe,t=ke(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Tt({max:n.params.max,min:n.params.min}),E=new gs(n.document,{baseStep:1,parser:It,sliderProps:new oe({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:oe.fromObject({draggingScale:fn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ao}),value:ce(s,{constraint:c}),viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof gs)?null:new jr(n.controller)}},vl=function(){return{id:"text",type:"blade",accept(n){const e=xe,t=ke(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new jn(n.document,{parser:n.params.parse,props:oe.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:ce(n.params.value),viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof jn)?null:new Hr(n.controller)}}}();function gl(n){const e=n.createElement("div");return e.classList.add(H("dfw")()),n.body&&n.body.appendChild(e),e}function Kr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class wl extends _l{constructor(e){var t,s;const c=e??{},E=(t=c.document)!==null&&t!==void 0?t:l(),G=il(),ee=new ml(E,{expanded:c.expanded,blade:Te(),props:oe.fromObject({title:c.title}),viewProps:m.create()});super(ee,G),this.pool_=G,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:gl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Kr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Kr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[bl,pl,On,vl]})}}const xl=new y("3.1.10");f.BladeApi=g,f.ButtonApi=R,f.FolderApi=Bt,f.InputBindingApi=tt,f.ListApi=qr,f.MonitorBindingApi=st,f.Pane=wl,f.SeparatorApi=dn,f.SliderApi=jr,f.TabApi=ye,f.TabPageApi=Re,f.TextApi=Hr,f.TpChangeEvent=T,f.VERSION=xl,Object.defineProperty(f,"__esModule",{value:!0})})})(Os,Os.exports);var Hl=Os.exports;const Kl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Yl=`// 2DGS render — vertex+fragment.
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
  _pad2 : u32,
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

// Splat2DGS.pos → centre in pixels (¼-px integer grid, see surfel_cull
// pack_center). Sign-extend each i16 lane with a shift pair.
fn unpack_center(p: u32) -> vec2<f32> {
    let x = (i32(p << 16u)) >> 16u;
    let y = (i32(p)) >> 16u;
    return vec2<f32>(f32(x), f32(y)) * 0.25;
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
    let ext_pad = extent_pix * 1.001 + vec2<f32>(0.25);
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
    let PAD = 0.25;
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
    let ext_pad  = extent_pix * 1.001 + vec2<f32>(0.25);
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
// three fragment entry points (sorted fs_main, hybrid-transparency fs_core /
// fs_tail) call this; discards inside cull the fragment in every mode.
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
        let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
    // gauss_id bit 31 = untextured flag (no probe record) → occ = 1.
    let gid = sp.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (sp.gauss_id & 0x80000000u) == 0u {
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

fn shade_alpha(in: SplatIn, pos: vec2<f32>) -> AlphaOut {
    let pixf = floor(pos);
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
    let sp = splat_in(in);
    let g = shade_alpha(sp, in.position.xy);
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
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
    let gid = sp.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (sp.gauss_id & 0x80000000u) == 0u {
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
    let sp = splat_in(in);
    let g = shade_alpha(sp, in.position.xy);
    return vec4<f32>(g.zv * g.a, 0.0, 0.0, g.a);
}

// D̄/A buffer for pass 2 (group 3 binding 8 — 4..7 are the bin textures).
@group(3) @binding(8) var wsr_dbuf_t : texture_2d<f32>;

@fragment
fn fs_wsr_gated_d(in: VertexOutput) -> WsrOut {
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
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
    let gid = sp.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (sp.gauss_id & 0x80000000u) == 0u {
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
    let gid = sp.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (sp.gauss_id & 0x80000000u) == 0u {
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
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
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
`,Zl=`// Hybrid-transparency composite (HTGS Eq. 17, K=1 hardware form).
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
`,Xl=`const WG_SIZE = 256u;
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
}`,Ql=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
                let cxc = round(aabb.x * 4.0) * 0.25; let cyc = round(aabb.y * 4.0) * 0.25;
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
            // ¼-px fixed point (2×i16, exact grid), NOT f16: f16 has
            // 1 px spacing beyond x=1024 and 0.5 px beyond 512, which shifted
            // every splat on the right/bottom of a retina canvas by up to
            // 0.5 px (the CONIC u0/v0 are exact for the TRUE centre) and let
            // the vertex quad miss up to 0.5 px of the ellipse edge (measured:
            // 100 px/frame with α up to 0.18 on room). Range ±8191.75 px
            // covers canvases up to ~7400 px wide (cull keeps |centre| ≤ 1.1·viewport).
            pack_center(center_pix),
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
`,Jl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,ec=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
`,tc=`// shader implementing gpu radix sort.

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
`,nc=`// shader implementing gpu radix sort.

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
`,sc=`// ============================================================================
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
}`,wi=32,Vs=1,Fs=2,ii=4,Ns=8,xi=4,rc=7<<xi,oi=128,ai=256,li=512,ic=0,Ht=new ArrayBuffer(wi),nt={canvas_size:new Uint32Array(Ht,0,2),accel_flags:new Uint32Array(Ht,8,1),feature_mode:new Uint32Array(Ht,12,1),gaussian_scaling:new Float32Array(Ht,16,1),sh_bias:new Float32Array(Ht,20,1),color_K:new Uint32Array(Ht,24,1),walltime:new Float32Array(Ht,28,1)};function oc(i){nt.canvas_size[0]=i.width>>>0,nt.canvas_size[1]=i.height>>>0,nt.accel_flags[0]=(i.accel_flags??Vs|Fs)>>>0,nt.feature_mode[0]=(i.feature_mode??ic)>>>0,nt.gaussian_scaling[0]=i.gaussian_scaling??1,nt.sh_bias[0]=i.sh_bias??.5,nt.color_K[0]=(i.color_K??0)>>>0,nt.walltime[0]=i.walltime??0}function yi(i,a){i.queue.writeBuffer(a,0,Ht)}function cs(i,a,f){f&&i&&a&&yi(i,a)}function ts(i,a,f,y,g=!0){nt.canvas_size[0]=i>>>0,nt.canvas_size[1]=a>>>0,cs(f??null,y??null,g)}function ci(i,a,f,y=!0){nt.gaussian_scaling[0]=i,cs(a??null,f??null,y)}function ui(i,a,f,y=!0){nt.sh_bias[0]=i,cs(a??null,f??null,y)}function Kt(i,a,f,y=!0){let g=nt.accel_flags[0];if(i.oac!==void 0&&(g=i.oac?g|Vs:g&~Vs),i.spr!==void 0&&(g=i.spr?g|Fs:g&~Fs),i.bfc!==void 0&&(g=i.bfc?g|ii:g&~ii),i.meshCull!==void 0&&(g=i.meshCull?g|Ns:g&~Ns),i.meshSampleMode!==void 0){const S=(i.meshSampleMode&7)<<xi;g=g&~rc|S}i.meshSilhouetteCull!==void 0&&(g=i.meshSilhouetteCull?g|oi:g&~oi),i.meshInvertDepth!==void 0&&(g=i.meshInvertDepth?g|ai:g&~ai),i.hypLegacy!==void 0&&(g=i.hypLegacy?g|li:g&~li),nt.accel_flags[0]=g>>>0,cs(a??null,f??null,y)}const ac=256;function lc(i,a){const f=[],y=[];let g=!0;for(const S of i.split(`
`)){const T=S.trim();let V;if((V=/^\/\/#if\s+(\w+)\s*$/.exec(T))!==null){const L=!!a[V[1]];y.push({parent:g,taken:L}),g=g&&L;continue}if(/^\/\/#else\s*$/.test(T)){const L=y[y.length-1];if(L===void 0)throw new Error("preprocessWGSL: #else without #if");g=L.parent&&!L.taken;continue}if(/^\/\/#endif\s*$/.test(T)){const L=y.pop();if(L===void 0)throw new Error("preprocessWGSL: #endif without #if");g=L.parent;continue}g&&f.push(S)}if(y.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const cc=wi,uc=8,dc=96,pc=12,js=8,Ut=1<<js,rn=256,os=32/js,hc=0,di=os&1;function pi(i,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function fc(i,a){const f=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=i.createPipelineLayout({bindGroupLayouts:[f]}),g=S=>i.createComputePipeline({layout:y,compute:{module:a,entryPoint:S,constants:{WG_SIZE:rn}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:f}}function _c(i,a,f){const y=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),S=i.createPipelineLayout({bindGroupLayouts:[y]}),T=i.createPipelineLayout({bindGroupLayouts:[g]}),V=[];for(let L=0;L<os;L++){const O={PASS_ID:L+hc,RS_RADIX_LOG2:js,RS_RADIX_SIZE:Ut};V.push({localHistogram:i.createComputePipeline({layout:S,compute:{module:a,entryPoint:"local_histogram_pass",constants:O}}),scatterElements:i.createComputePipeline({layout:T,compute:{module:f,entryPoint:"scatter_elements",constants:O}})})}return{passes:V,localHistogramBindGroupLayout:y,scatterBindGroupLayout:g}}function mc(i){const a=i.createShaderModule({label:"local histogram",code:nc}),f=i.createShaderModule({label:"scatter",code:tc}),y=i.createShaderModule({label:"blelloch prefix",code:sc}),g=fc(i,y),S=_c(i,a,f);return{localHistogramBindGroupLayout:S.localHistogramBindGroupLayout,scatterBindGroupLayout:S.scatterBindGroupLayout,passes:S.passes,hierarchicalBlelloch:g}}function bc(i){const a=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),y=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),S=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(S,0,new ArrayBuffer(32));const T={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:y,rectsBuffer:g,texParamsBuffer:S,meta:T}}class vc{constructor(a,f,y,g,S,T=null,V=null,L={}){A(this,"device");A(this,"pc");A(this,"presentationFormat");A(this,"camera_buffer");A(this,"render_settings_buffer");A(this,"draw_indirect_buffer");A(this,"splat_2d_buffer");A(this,"querySet");A(this,"resolveBuffer");A(this,"resultBuffer");A(this,"queriesPerFrame",uc);A(this,"queryCapacityFrames",200);A(this,"sort_prefixBindGroup");A(this,"sort_pipelines");A(this,"sort_localHistogramBindGroups");A(this,"sort_scatterBindGroups");A(this,"lastFrame",0);A(this,"frameCount",0);A(this,"preprocessPipeline");A(this,"cullPipeline");A(this,"renderPipeline");A(this,"indirectPipeline");A(this,"htEnabled",!1);A(this,"wsrEnabled",!1);A(this,"wsrPipeline",null);A(this,"wsrCompositePipeline",null);A(this,"wsrGateEnabled",!1);A(this,"wsrBinsPipeline",null);A(this,"wsrGatedPipeline",null);A(this,"wsrBinsBgl",null);A(this,"wsrBinsBindGroup",null);A(this,"wsrBinTextures",[null,null,null,null]);A(this,"wsrBinViews",[null,null,null,null]);A(this,"wsrDGateEnabled",!1);A(this,"wsrDepthPipeline",null);A(this,"wsrGatedDPipeline",null);A(this,"wsrDbufBgl",null);A(this,"wsrDbufBindGroup",null);A(this,"wsrDbufTexture",null);A(this,"wsrDbufView",null);A(this,"htSortedTail",!1);A(this,"htOccTail",!1);A(this,"htTailOccPipeline",null);A(this,"renderShaderModule");A(this,"betaKernel",1);A(this,"fetchById");A(this,"octBound");A(this,"acc16");A(this,"accTexture",null);A(this,"accView",null);A(this,"accW",0);A(this,"accH",0);A(this,"accResolvePipeline",null);A(this,"accResolveBgl",null);A(this,"accResolveBindGroup",null);A(this,"renderSettingsBgl");A(this,"renderSplatsBgl");A(this,"atlasBgl");A(this,"htCorePipeline",null);A(this,"htTailPipeline",null);A(this,"htTail2Pipeline",null);A(this,"htCompositePipeline",null);A(this,"htComposite2Pipeline",null);A(this,"htCompositeBgl",null);A(this,"htCompositeBindGroup",null);A(this,"htDepthTexture",null);A(this,"htDepthView",null);A(this,"htCoreTexture",null);A(this,"htCoreView",null);A(this,"htAccumTexture",null);A(this,"htAccumView",null);A(this,"htTransTexture",null);A(this,"htTransView",null);A(this,"htW",0);A(this,"htH",0);A(this,"htTailBgl",null);A(this,"htTailBindGroup",null);A(this,"htParamsBuffer",null);A(this,"htTailK",150);A(this,"wsrSatT",.05);A(this,"wsrDgMargin",.15);A(this,"sort_info_buffer");A(this,"sort_ping_pong");A(this,"crsBg");A(this,"gsBg");A(this,"cullBg2");A(this,"preprocessBg1");A(this,"renderSplatsBindGroup");A(this,"renderSettingsBindGroup");A(this,"atlasBindGroup");A(this,"indirectBindGroup");A(this,"sh_solvers_buffer");A(this,"mesh");A(this,"meshDepthPipeline",null);A(this,"meshDepthCameraBindGroup",null);A(this,"meshDepthMarginBindGroup",null);A(this,"meshMarginBuffer",null);A(this,"meshDepthTexture",null);A(this,"meshDepthView",null);A(this,"meshCullBindGroupLayout");A(this,"meshCullBindGroup");A(this,"meshCullWidth",0);A(this,"meshCullHeight",0);A(this,"meshStubTexture");A(this,"meshStubView");A(this,"bfcParamsBuffer");A(this,"meshOverlayPipeline",null);A(this,"meshOverlayEnabled",!1);A(this,"bgColor",[0,0,0,0]);A(this,"showPerfDialogNext",!1);A(this,"requestReorderNextFrame",!1);A(this,"reorderInFlight",!1);A(this,"downloadOnceNextRead",!1);A(this,"downloadOnceFileName","fps_metrics");A(this,"allFrameTimes",[]);A(this,"lastStageBreakdownMs",null);A(this,"timeQueryEnabled");A(this,"atlas");A(this,"atlasParamsBuffer");A(this,"_atlasEnabled",!0);A(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,St(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`),this.mesh=V;const O=S.includes("timestamp-query");this.timeQueryEnabled=O,O&&St("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=y,this.camera_buffer=g,this.atlas=T??bc(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",pe=>{console.error("A WebGPU error was not captured:",pe.error)}),this._setupTimestampQueries(),this._setupBuffers();const q=(Math.floor((this.pc.num_points+rn-1)/rn)+1)*rn,F=Math.ceil(q/rn);console.log(`keys count adjusted: ${q}`),console.log(`key size: ${this.pc.num_points}`);const X=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=mc(f);const Z=[pi(q,f),pi(q,f)],N=f.createBuffer({label:"workgroup histograms",size:F*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=f.createBuffer({label:"workgroup prefixes",size:F*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=f.createBuffer({label:"digit base",size:Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=Math.ceil(F/rn),W=Math.ceil(R/rn),D=f.createBuffer({label:"prefix l0 sums",size:R*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"prefix l0 offsets",size:R*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=f.createBuffer({label:"prefix l1 sums",size:W*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Pe=f.createBuffer({label:"prefix l1 offsets",size:W*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:N}},{binding:2,resource:{buffer:z}},{binding:3,resource:{buffer:D}},{binding:4,resource:{buffer:H}},{binding:5,resource:{buffer:re}},{binding:6,resource:{buffer:Pe}},{binding:7,resource:{buffer:U}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:N}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:N}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:z}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:z}}]})],this.sort_info_buffer=X,this.sort_ping_pong=Z;const de=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),te=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ve=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ne=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:de,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:te,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ve,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ne,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Fe=this.device.createShaderModule({code:Xl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Fe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Ge=this.device.createShaderModule({code:Ql});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[de,te,ve,this.meshCullBindGroupLayout]}),compute:{module:Ge,entryPoint:"surfel_cull"}}),this.mesh!==null){const pe=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:pe,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ae=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ae,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const be=this.device.createShaderModule({code:Jl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[pe,ae]}),vertex:{module:be,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ve=this.device.createShaderModule({code:Kl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[de,ne]}),compute:{module:Ve,entryPoint:"preprocess"}});const Be=this.device.createShaderModule({label:"render_2dgs",code:lc(Yl,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Be.getCompilationInfo().then(pe=>{pe.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),pe.messages.forEach(ae=>{(ae.type==="error"?console.error:ae.type==="warning"?console.warn:console.log)(`${ae.type} (line ${ae.lineNum}:${ae.linePos}): ${ae.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ge=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Ee=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ce=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Ee,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),oe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),he=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,ce,oe]}),vertex:{module:Be,entryPoint:"vs_main"},fragment:{module:Be,entryPoint:"fs_main",constants:{BETA_KERNEL:he},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(pe=>{pe?console.error("[render_2dgs] pipeline create validation error:",pe.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ce,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[di].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:oe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Be,this.betaKernel=he,this.renderSettingsBgl=ge,this.renderSplatsBgl=ce,this.atlasBgl=oe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}writeHtParams(){this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,this.wsrDgMargin,0]))}setWsrSatT(a){this.wsrSatT=a,this.writeHtParams()}setWsrDGateMargin(a){this.wsrDgMargin=a,this.writeHtParams()}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,this.wsrSatT,this.wsrDgMargin,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){Kt({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),f=new Uint32Array(a),y=new Float32Array(a);f[0]=this.atlas.meta.width|0,f[1]=this.atlas.meta.layer_h|0,y[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,f){var y;if(this.accResolvePipeline===null){const g=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,S=this.device.createShaderModule({label:"acc16_resolve",code:g});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:S,entryPoint:"vs_main"},fragment:{module:S,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===f||((y=this.accTexture)==null||y.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=f)}ensureHtResources(a,f){var S,T,V,L,O,q;if(this.htCorePipeline===null){const F=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,this.wsrDgMargin,0]));const X=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:X,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:X,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Z={format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}};this.wsrBinsPipeline=this.device.createRenderPipeline({label:"wsr_bins_prepass",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_bins",constants:{BETA_KERNEL:this.betaKernel},targets:[Z,Z,Z,Z]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrBinsBgl=this.device.createBindGroupLayout({label:"wsr gate bins (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},...[4,5,6,7].map(z=>({binding:z,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}))]}),this.wsrGatedPipeline=this.device.createRenderPipeline({label:"wsr_gated_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrBinsBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDepthPipeline=this.device.createRenderPipeline({label:"wsr_depth_anchor",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_depth",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDbufBgl=this.device.createBindGroupLayout({label:"wsr dgate dbuf (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.wsrGatedDPipeline=this.device.createRenderPipeline({label:"wsr_gated_d_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrDbufBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated_d",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const N=this.device.createShaderModule({label:"ht_composite",code:Zl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===f)return;(S=this.htDepthTexture)==null||S.destroy(),(T=this.htCoreTexture)==null||T.destroy(),(V=this.htAccumTexture)==null||V.destroy(),(L=this.htTransTexture)==null||L.destroy();const y={width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},g=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:y,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:y,format:"rgba16float",usage:g}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:y,format:"rgba16float",usage:g}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:y,format:"r16float",usage:g}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]});for(let F=0;F<4;F++)(O=this.wsrBinTextures[F])==null||O.destroy(),this.wsrBinTextures[F]=this.device.createTexture({label:`wsr bins ${F}`,size:y,format:"rgba16float",usage:g}),this.wsrBinViews[F]=this.wsrBinTextures[F].createView();this.wsrBinsBindGroup=this.device.createBindGroup({label:"wsr gate bins bind (group 3)",layout:this.wsrBinsBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},...[0,1,2,3].map(F=>({binding:4+F,resource:this.wsrBinViews[F]}))]}),(q=this.wsrDbufTexture)==null||q.destroy(),this.wsrDbufTexture=this.device.createTexture({label:"wsr dgate dbuf",size:y,format:"rgba16float",usage:g}),this.wsrDbufView=this.wsrDbufTexture.createView(),this.wsrDbufBindGroup=this.device.createBindGroup({label:"wsr dgate dbuf bind (group 3)",layout:this.wsrDbufBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},{binding:8,resource:this.wsrDbufView}]}),this.htW=a,this.htH=f}ensureMeshDepthTexture(a,f){var y;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===f||((y=this.meshDepthTexture)==null||y.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=f))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,Rs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,Rs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),y=f*Uint32Array.BYTES_PER_ELEMENT;if(y===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:y,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),S=this.device.createCommandEncoder();S.copyBufferToBuffer(this.sort_ping_pong[di].sort_indices_buffer,0,g,0,y),this.device.queue.submit([S.finish()]),await g.mapAsync(GPUMapMode.READ);const T=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(T)),g.unmap()}frame(a,f,y=!0){var q,F,X,Z;const S=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,T=y&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(nt.accel_flags[0]&Ns)!==0){const N=nt.canvas_size[0],z=nt.canvas_size[1];this.ensureMeshDepthTexture(N,z);const U={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},R=a.beginRenderPass(U);R.setPipeline(this.meshDepthPipeline),R.setBindGroup(0,this.meshDepthCameraBindGroup),R.setBindGroup(1,this.meshDepthMarginBindGroup),R.setVertexBuffer(0,this.mesh.vertexBuffer),R.setVertexBuffer(1,this.mesh.normalBuffer),R.setIndexBuffer(this.mesh.indexBuffer,"uint32"),R.drawIndexed(this.mesh.numIndices),R.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const N={label:"cull"};T&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+0,endOfPassWriteIndex:S+1});const z=a.beginComputePass(N);z.setPipeline(this.cullPipeline),z.setBindGroup(0,this.crsBg),z.setBindGroup(1,this.gsBg),z.setBindGroup(2,this.cullBg2),z.setBindGroup(3,this.meshCullBindGroup);const U=Math.ceil(this.pc.num_points/ac);z.dispatchWorkgroups(U,1,1),z.end()}{const N=a.beginComputePass({label:"calculate indirect dispatch"});N.setPipeline(this.indirectPipeline),N.setBindGroup(0,this.indirectBindGroup),N.dispatchWorkgroups(1,1,1),N.end()}{const N={label:"preprocess"};T&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+2,endOfPassWriteIndex:S+3});const z=a.beginComputePass(N);z.setPipeline(this.preprocessPipeline),z.setBindGroup(0,this.crsBg),z.setBindGroup(1,this.preprocessBg1),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),z.end()}const L=this.wsrEnabled&&(((F=(q=this.atlas)==null?void 0:q.meta)==null?void 0:F.probe_mode)|0)===2,O=L&&this.wsrDGateEnabled;if(!this.htEnabled&&!L||this.htSortedTail||O)for(let N=0;N<os;N++){const z=N&1,U=this.sort_pipelines.passes[N],R=this.sort_localHistogramBindGroups[z],W=this.sort_scatterBindGroups[z];{const D={label:`upsweep_round${N}`};T&&!this.htEnabled&&N==0&&(D.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4});const H=a.beginComputePass(D);H.setPipeline(U.localHistogram),H.setBindGroup(0,R),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const D=a.beginComputePass({label:`prefix_round${N} - l0TileScan`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - l1TileScanOnL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - l1ScanSums`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,Ut,1),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - addL1ToL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - addL0ToElems`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - computeDigitBase`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,1,1),D.end()}{const D={label:`scatter_round${N}`};T&&!this.htEnabled&&N==os-1&&(D.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+5});const H=a.beginComputePass(D);H.setPipeline(U.scatterElements),H.setBindGroup(0,W),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}if(L){const N=nt.canvas_size[0],z=nt.canvas_size[1];this.ensureHtResources(N,z);const U=this.wsrDGateEnabled,R=this.wsrGateEnabled&&!U;if(R){const W={label:"wsr_bins_prepass",colorAttachments:this.wsrBinViews.map(H=>({view:H,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}))};T&&(W.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4,endOfPassWriteIndex:S+5});const D=a.beginRenderPass(W);D.setPipeline(this.wsrBinsPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}else!U&&T&&a.beginComputePass({label:"wsr_no_sort_stamp",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:S+4,endOfPassWriteIndex:S+5}}).end();if(U){const W={label:"wsr_depth_anchor",colorAttachments:[{view:this.wsrDbufView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]};T&&(W.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const D=a.beginRenderPass(W);D.setPipeline(this.wsrDepthPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const W={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};T&&!U&&(W.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const D=a.beginRenderPass(W);D.setPipeline(U?this.wsrGatedDPipeline:R?this.wsrGatedPipeline:this.wsrPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),U?D.setBindGroup(3,this.wsrDbufBindGroup):R&&D.setBindGroup(3,this.wsrBinsBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const W={label:"wsr_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(W.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const D=a.beginRenderPass(W);D.setPipeline(this.wsrCompositePipeline),D.setBindGroup(0,this.htCompositeBindGroup),D.draw(3),D.end()}}else if(this.htEnabled){const N=nt.canvas_size[0],z=nt.canvas_size[1];this.ensureHtResources(N,z);{const U={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};T&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4,endOfPassWriteIndex:S+5});const R=a.beginRenderPass(U);R.setPipeline(this.htCorePipeline),R.setBindGroup(0,this.renderSettingsBindGroup),R.setBindGroup(1,this.renderSplatsBindGroup),R.setBindGroup(2,this.atlasBindGroup),R.drawIndirect(this.draw_indirect_buffer,0),R.end()}if(this.htSortedTail){const U={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};T&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const R=a.beginRenderPass(U);R.setPipeline(this.htTail2Pipeline),R.setBindGroup(0,this.renderSettingsBindGroup),R.setBindGroup(1,this.renderSplatsBindGroup),R.setBindGroup(2,this.atlasBindGroup),R.drawIndirect(this.draw_indirect_buffer,0),R.end()}else{const U={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};T&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const R=a.beginRenderPass(U),W=this.htOccTail&&(((Z=(X=this.atlas)==null?void 0:X.meta)==null?void 0:Z.probe_mode)|0)===2;R.setPipeline(W?this.htTailOccPipeline:this.htTailPipeline),R.setBindGroup(0,this.renderSettingsBindGroup),R.setBindGroup(1,this.renderSplatsBindGroup),R.setBindGroup(2,this.atlasBindGroup),R.setBindGroup(3,this.htTailBindGroup),R.drawIndirect(this.draw_indirect_buffer,0),R.end()}{const U={label:"ht_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const R=a.beginRenderPass(U);R.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),R.setBindGroup(0,this.htCompositeBindGroup),R.draw(3),R.end()}}else{let N=f;this.acc16&&(this.ensureAccResources(nt.canvas_size[0],nt.canvas_size[1]),N=this.accView);const z={label:"render",colorAttachments:[{view:N,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6,...this.acc16?{}:{endOfPassWriteIndex:S+7}});const U=a.beginRenderPass(z);if(U.setPipeline(this.renderPipeline),U.setBindGroup(0,this.renderSettingsBindGroup),U.setBindGroup(1,this.renderSplatsBindGroup),U.setBindGroup(2,this.atlasBindGroup),U.drawIndirect(this.draw_indirect_buffer,0),U.end(),this.acc16){const R={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const W=a.beginRenderPass(R);W.setPipeline(this.accResolvePipeline),W.setBindGroup(0,this.accResolveBindGroup),W.draw(3),W.end()}}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const U=this.device.createShaderModule({code:ec}),R=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),W=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[R,W]}),vertex:{module:U,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:U,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const N={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},z=a.beginRenderPass(N);z.setPipeline(this.meshOverlayPipeline),z.setBindGroup(0,this.meshDepthCameraBindGroup),z.setBindGroup(1,this.meshDepthMarginBindGroup),z.setVertexBuffer(0,this.mesh.vertexBuffer),z.setVertexBuffer(1,this.mesh.normalBuffer),z.setIndexBuffer(this.mesh.indexBuffer,"uint32"),z.drawIndexed(this.mesh.numIndices),z.end()}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const y=this.device.createCommandEncoder({label:"timestamp resolve encoder"});y.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),y.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([y.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const S=new BigInt64Array(this.resultBuffer.getMappedRange()),T=Math.min(this.frameCount,this.queryCapacityFrames),V=(this.lastFrame+this.frameCount-T)%this.queryCapacityFrames,L=Array.from({length:g.length},()=>[]);let O=0;for(let R=0;R<T;R++){const W=(V+R)%this.queryCapacityFrames,D=W*this.queriesPerFrame;let H=!0;for(let re=0;re<g.length;re++){const[Pe,de,te]=g[re];if(S[D+te]===0n||S[D+de]===0n||S[D+de]<S[D+te]){H=!1;break}}if(!H){!f&&W%60===0&&console.debug("[timestamp] frame slot",W,"contains unwritten (0) timestamps, skipped in stats");continue}O++;for(let re=0;re<g.length;re++){const[Pe,de,te]=g[re],ve=Number(S[D+te]),ne=Number(S[D+de]);L[re].push((ne-ve)/1e6)}}if(O===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...L[0]);const q=[];let F=0,X=0,Z=0;for(let R=0;R<g.length;R++){const W=g[R][0],D=L[R];let H=0;if(W==="Total"){const re=this.allFrameTimes;H=re.reduce((te,ve)=>te+ve,0)/re.length;const Pe=[...re].sort((te,ve)=>te-ve);F=Pe[Math.floor(Pe.length*.99)]||0;const de=re.reduce((te,ve)=>te+Math.pow(ve-H,2),0)/re.length;X=Math.sqrt(de),Z=H}else H=D.reduce((re,Pe)=>re+Pe,0)/D.length;q.push([W,H])}this.lastFrame+=this.frameCount,this.frameCount=0;const N=Object.fromEntries(q);this.lastStageBreakdownMs={cull:N.Culling??0,preprocess:N.Preprocess??0,sort:N.Sort??0,render:N.Render??0,total:N.Total??0};const U=`[TIMESTAMP - ${this.constructor.name}]
`+q.map(([R,W])=>`${R}: ${W.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${X.toFixed(3)}ms
Total AVG: ${Z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(U),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const R=`Stage,ms
`,W=q.map(([re,Pe])=>`${re},${Pe.toFixed(3)}`).join(`
`),D="data:text/csv;charset=utf-8,"+encodeURIComponent(R+W),H=document.createElement("a");H.href=D,H.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(H),H.click(),H.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(U)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:cc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,y=a?a.height:1;oc({width:f,height:y,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),yi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:In(this.pc.num_points*dc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:In(this.pc.num_points*pc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,y=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${y}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function gc(i,a){return 2*Math.atan(a/(2*i))}function wc(i,a,f,y){const g=Math.tan(y/2),S=Math.tan(f/2),T=g*i,V=-T,L=S*i,O=-L,q=pt.create();return q[0]=2*i/(L-O),q[5]=-2*i/(T-V),q[2]=(L+O)/(L-O),q[6]=(T+V)/(T-V),q[14]=1,q[10]=a/(a-i),q[11]=-(a*i)/(a-i),pt.transpose(q,q),q}async function xc(i){St(`loading scene camera file... : ${i}`);const f=await(await fetch(i)).json();return St(`loaded cameras count: ${f.length}`),f.map(y=>{const g=I.clone(y.position),S=Pt.create(...y.rotation.flat()),T=S[0],V=S[4],L=S[8],O=S[1],q=S[5],F=S[9],X=S[2],Z=S[6],N=S[10];T*(q*N-F*Z)-V*(O*N-F*X)+L*(O*Z-q*X)<0&&(S[1]=-S[1],S[5]=-S[5],S[9]=-S[9]);const U=pt.fromMat3(S);return{position:g,rotation:U,img_name:y.img_name,id:y.id}})}const yc=4*2,Pc=4*16,Pi=4*Pc+2*yc;function Sc(i){return i.createBuffer({label:"camera uniform",size:Pi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const sn=new Float32Array(Pi/Float32Array.BYTES_PER_ELEMENT),as=class as{constructor(a,f){A(this,"uniform_buffer");A(this,"position",I.create());A(this,"rotation",pt.create());A(this,"fovY",45/180*Math.PI);A(this,"fovX");A(this,"focal",ti.create());A(this,"viewport",ti.create());A(this,"view_matrix",pt.identity());A(this,"view_inv_matrix",pt.identity());A(this,"proj_matrix",pt.identity());A(this,"proj_inv_matrix",pt.identity());A(this,"_negPos",I.create());A(this,"look",I.create(0,0,1));A(this,"up",I.create(0,1,0));A(this,"right",I.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=Sc(f),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=gc(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=wc(.01,100,this.fovX,this.fovY),pt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],pt.copy(this.rotation,this.view_matrix),pt.translate(this.view_matrix,this._negPos,this.view_matrix),pt.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(as.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let a=0;sn.set(this.view_matrix,a),a+=16,sn.set(this.view_inv_matrix,a),a+=16,sn.set(this.proj_matrix,a),a+=16,sn.set(this.proj_inv_matrix,a),a+=16,sn.set(this.viewport,a),a+=2,sn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,sn)}set_preset(a){I.copy(a.position,this.position),pt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};A(as,"Z_AXIS",I.create(0,0,1));let Ws=as;const Ec=I.create(1,0,0),Cc=I.create(0,1,0);function kc(i,a){const f=i[0],y=i[4],g=i[8],S=i[1],T=i[5],V=i[9],L=i[2],O=i[6],q=i[10],F=f+T+q;let X,Z,N,z;if(F>0){const U=.5/Math.sqrt(F+1);X=.25/U,Z=(O-V)*U,N=(g-L)*U,z=(S-y)*U}else if(f>T&&f>q){const U=2*Math.sqrt(1+f-T-q);X=(O-V)/U,Z=.25*U,N=(y+S)/U,z=(g+L)/U}else if(T>q){const U=2*Math.sqrt(1+T-f-q);X=(g-L)/U,Z=(y+S)/U,N=.25*U,z=(V+O)/U}else{const U=2*Math.sqrt(1+q-f-T);X=(S-y)/U,Z=(g+L)/U,N=(V+O)/U,z=.25*U}return a[0]=Z,a[1]=N,a[2]=z,a[3]=X,a}class Tc{constructor(a){A(this,"element");A(this,"enabled",!0);A(this,"center",I.create(0,0,0));A(this,"up",I.create(0,1,0));A(this,"rotation",[0,0]);A(this,"shift",[0,0]);A(this,"scroll",0);A(this,"speed",.1);A(this,"sensitivity",.08);A(this,"leftPressed",!1);A(this,"rightPressed",!1);A(this,"leftDragPans",!1);A(this,"lastX",0);A(this,"lastY",0);A(this,"touches",new Map);A(this,"lastTouchCenter",null);A(this,"lastPinchDistance",null);A(this,"lastTwoFingerAngle",null);A(this,"lastTouchCount",0);A(this,"roll",0);A(this,"_dir",I.create());A(this,"_right",I.create());A(this,"_upCam",I.create());A(this,"_scratch",I.create());A(this,"_qY",ft.create());A(this,"_qX",ft.create());A(this,"_qRot",ft.create());A(this,"_qLocal",ft.create());A(this,"_qWorldToCam",ft.create());A(this,"_scratchMat3",Pt.create());A(this,"bboxMin",null);A(this,"bboxMax",null);A(this,"anchor",I.create(0,0,0));A(this,"downCallback",a=>{var f,y,g,S;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(y=(f=a.target)==null?void 0:f.setPointerCapture)==null||y.call(f,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(S=(g=a.target)==null?void 0:g.setPointerCapture)==null||S.call(g,a.pointerId),a.preventDefault())}});A(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const f=a.pageX-this.lastX,y=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=y):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=y)});A(this,"upCallback",a=>{var f,y,g,S;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(y=(f=a.target)==null?void 0:f.releasePointerCapture)==null||y.call(f,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(S=(g=a.target)==null?void 0:g.releasePointerCapture)==null||S.call(g,a.pointerId),a.preventDefault()});A(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let f=a.deltaY;a.deltaMode===1?f*=16:a.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(a){I.copy(a,this.center),I.copy(a,this.anchor)}setOrbitPivot(a){I.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const f=this.camera.rotation;I.set(f[2],f[6],f[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,a,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(I.subtract(this.center,a.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const f=a.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,a.update_buffer()}setBbox(a,f){this.bboxMin=I.create(a[0],a[1],a[2]),this.bboxMax=I.create(f[0],f[1],f[2]);const y=(a[0]+f[0])*.5,g=(a[1]+f[1])*.5,S=(a[2]+f[2])*.5;I.set(y,g,S,this.center),I.set(y,g,S,this.anchor)}resetToCamera(){const a=this.camera.rotation;I.set(a[2],a[6],a[10],this._dir),I.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let y=-1/0,g=1/0,S=!1;for(let T=0;T<3;T++){const V=this._dir[T],L=this.bboxMin[T]-this.camera.position[T],O=this.bboxMax[T]-this.camera.position[T];if(Math.abs(V)>1e-8){const q=L/V,F=O/V;y=Math.max(y,Math.min(q,F)),g=Math.min(g,Math.max(q,F))}else if(L>0||O<0){S=!0;break}}!S&&y<=g&&g>0&&(f=(Math.max(y,0)+g)*.5)}if(f===null||!isFinite(f)||f<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const y=I.dot(this._scratch,this._dir);f=y>.001?y:I.length(this._scratch)}f=Math.max(.1,f),I.scale(this._dir,f,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const y=f.x-this.lastTouchCenter[0],g=f.y-this.lastTouchCenter[1];this.rotation[0]+=y*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[f.x,f.y]}else if(a===2){const f=Array.from(this.touches.values()),y=(f[0].x+f[1].x)*.5,g=(f[0].y+f[1].y)*.5,S=f[1].x-f[0].x,T=f[1].y-f[0].y,V=Math.hypot(S,T),L=Math.atan2(T,S);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const O=y-this.lastTouchCenter[0],q=g-this.lastTouchCenter[1],F=Math.hypot(O,q),X=Math.abs(V-this.lastPinchDistance);let Z=L-this.lastTwoFingerAngle;Z>Math.PI&&(Z-=2*Math.PI),Z<-Math.PI&&(Z+=2*Math.PI),F>.5&&(this.shift[1]-=O,this.shift[0]+=q),X>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(V/this.lastPinchDistance)*10),Math.abs(Z)>.0087&&(this.roll+=-Z)}this.lastTouchCenter=[y,g],this.lastPinchDistance=V,this.lastTwoFingerAngle=L}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const z=f.rotation;this.up[0]=z[1],this.up[1]=z[5],this.up[2]=z[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let y=!1;if(Math.abs(this.roll)>1e-4){const z=f.rotation;I.set(z[2],z[6],z[10],this._scratch),I.normalize(this._scratch,this._scratch),ft.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,y=!0}I.subtract(f.position,this.center,this._dir);let g=I.length(this._dir);g<1e-6&&(g=1e-6);const S=Math.exp(Math.log(g)+this.scroll*a*10*this.speed);I.scale(this._dir,S/g,this._dir),g=S;const T=f.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const V=I.create(T[1],T[5],T[9]);I.normalize(V,V),I.length(V)<1e-6&&I.set(0,1,0,V);const L=a*this.speed*.1*g,O=this.shift[1]*L,q=-this.shift[0]*L;I.scale(this._right,O,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position),I.scale(V,q,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position);const F=this.rotation[0]*a*this.sensitivity,X=this.rotation[1]*a*this.sensitivity;if(Math.abs(F)>1e-5||Math.abs(X)>1e-5||y){const z=f.rotation;kc(z,this._qWorldToCam),ft.fromAxisAngle(Ec,-X,this._qX),ft.fromAxisAngle(Cc,-F,this._qY),ft.multiply(this._qX,this._qY,this._qLocal),ft.normalize(this._qLocal,this._qLocal),ft.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ft.normalize(this._qWorldToCam,this._qWorldToCam),Pt.fromQuat(this._qWorldToCam,this._scratchMat3),pt.fromMat3(this._scratchMat3,f.rotation);const U=f.rotation,R=U[2],W=U[6],D=U[10];f.position[0]=this.center[0]-R*g,f.position[1]=this.center[1]-W*g,f.position[2]=this.center[2]-D*g,this.up[0]=U[1],this.up[1]=U[5],this.up[2]=U[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,f.position);f.update_buffer();const N=Math.pow(.8,a*60);this.rotation[0]*=N,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=N,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=N,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=N,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=N,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Si(i){const a=I.create();for(const f of i)I.add(a,f,a);return I.scale(a,1/Math.max(i.length,1),a)}function Ei(i,a){const f=Pt.create();Pt.inverse(i,f);const y=I.create();return y[0]=f[0]*a[0]+f[4]*a[1]+f[8]*a[2],y[1]=f[1]*a[0]+f[5]*a[1]+f[9]*a[2],y[2]=f[2]*a[0]+f[6]*a[1]+f[10]*a[2],y}function Bc(i){const a=i.slice(),f=[1,0,0,0,1,0,0,0,1],y=(L,O)=>a[L*3+O],g=(L,O,q)=>{a[L*3+O]=q},S=(L,O)=>f[L*3+O],T=(L,O,q)=>{f[L*3+O]=q};for(let L=0;L<30;L++){let O=0,q=1,F=Math.abs(y(0,1));if(Math.abs(y(0,2))>F&&(O=0,q=2,F=Math.abs(y(0,2))),Math.abs(y(1,2))>F&&(O=1,q=2,F=Math.abs(y(1,2))),F<1e-12)break;const X=y(O,O),Z=y(q,q),N=y(O,q);let z;Math.abs(X-Z)<1e-30?z=Math.PI/4*Math.sign(N):z=.5*Math.atan2(2*N,X-Z);const U=Math.cos(z),R=Math.sin(z);for(let W=0;W<3;W++){const D=y(W,O),H=y(W,q);g(W,O,U*D+R*H),g(W,q,-R*D+U*H)}for(let W=0;W<3;W++){const D=y(O,W),H=y(q,W);g(O,W,U*D+R*H),g(q,W,-R*D+U*H)}for(let W=0;W<3;W++){const D=S(W,O),H=S(W,q);T(W,O,U*D+R*H),T(W,q,-R*D+U*H)}}const V=[];for(let L=0;L<3;L++)V.push({val:y(L,L),vec:I.create(S(0,L),S(1,L),S(2,L))});return V.sort((L,O)=>O.val-L.val),{vals:[V[0].val,V[1].val,V[2].val],vecs:[V[0].vec,V[1].vec,V[2].vec]}}function Mc(i,a){const f=Si(i);let y=0,g=0,S=0,T=0,V=0,L=0;for(const N of i){const z=N[0]-f[0],U=N[1]-f[1],R=N[2]-f[2];y+=z*z,g+=z*U,S+=z*R,T+=U*U,V+=U*R,L+=R*R}const O=[y,g,S,g,T,V,S,V,L],{vecs:q}=Bc(O);let F=q[0],X=q[1],Z=q[2];return I.dot(Z,a)<0&&(I.scale(Z,-1,Z),I.scale(X,-1,X)),{centroid:f,normal:Z,u:F,v:X}}function Ac(i){let a=0,f=0,y=0,g=0,S=0,T=0,V=0,L=0,O=0;for(const[U,R]of i){const W=-2*U,D=-2*R,H=1,re=-(U*U+R*R);a+=W*W,f+=W*D,y+=W*H,g+=D*D,S+=D*H,T+=H*H,V+=W*re,L+=D*re,O+=H*re}const q=Pt.create(a,f,y,f,g,S,y,S,T),F=Ei(q,I.create(V,L,O)),X=F[0],Z=F[1],N=F[2],z=X*X+Z*Z-N;return{center:[X,Z],radius:Math.sqrt(Math.max(z,1e-12))}}function Dc(i,a){let f=0,y=0,g=0,S=0,T=0,V=0,L=0,O=0,q=0;for(let X=0;X<i.length;X++){const Z=i[X],N=I.normalize(a[X],I.create()),z=1-N[0]*N[0],U=-N[0]*N[1],R=-N[0]*N[2],W=1-N[1]*N[1],D=-N[1]*N[2],H=1-N[2]*N[2];f+=z,y+=U,g+=R,S+=W,T+=D,V+=H,L+=z*Z[0]+U*Z[1]+R*Z[2],O+=U*Z[0]+W*Z[1]+D*Z[2],q+=R*Z[0]+D*Z[1]+H*Z[2]}const F=Pt.create(f,y,g,y,S,T,g,T,V);return Ei(F,I.create(L,O,q))}function Ci(i,a={}){if(i.length===0)return null;const f=a.tiltDownDeg??8,y=a.radiusScale??1,g=a.alignFirst??!0,S=(a.direction??"ccw")==="ccw"?1:-1,T=i.map(te=>I.clone(te.position)),V=i.map(te=>{const ve=te.rotation;return I.create(ve[8],ve[9],ve[10])}),L=i.map(te=>{const ve=te.rotation;return I.create(ve[4],ve[5],ve[6])}),O=Si(L),q=I.normalize(I.scale(O,-1,I.create())),{centroid:F,normal:X,u:Z,v:N}=Mc(T,q),z=T.map(te=>{const ve=I.sub(te,F,I.create());return[I.dot(ve,Z),I.dot(ve,N)]}),{center:U,radius:R}=Ac(z),W=R*y,D=I.add(F,I.add(I.scale(Z,U[0],I.create()),I.scale(N,U[1],I.create()),I.create()),I.create()),H=Dc(T,V),re=W*Math.tan(f*Math.PI/180),Pe=I.sub(H,I.scale(X,re,I.create()),I.create());let de=0;if(g){const te=I.sub(T[0],D,I.create());de=Math.atan2(I.dot(te,N),I.dot(te,Z))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${W.toFixed(2)}, tilt=${f}°, normal=[${X[0].toFixed(2)}, ${X[1].toFixed(2)}, ${X[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:D,radius:W,normal:X,u:Z,v:N,lookAt:Pe,startPhase:de,direction:S}}function ki(i,a){const f=(i.startPhase+a*i.direction)*2*Math.PI,y=Math.cos(f),g=Math.sin(f),S=I.add(i.center,I.add(I.scale(i.u,i.radius*y,I.create()),I.scale(i.v,i.radius*g,I.create()),I.create()),I.create()),T=I.normalize(I.sub(i.lookAt,S,I.create())),V=I.cross(T,i.normal,I.create());I.length(V)<1e-6&&I.copy(i.u,V),I.normalize(V,V);const L=I.cross(T,V,I.create());I.normalize(L,L);const O=pt.create();return O[0]=V[0],O[1]=L[0],O[2]=T[0],O[3]=0,O[4]=V[1],O[5]=L[1],O[6]=T[1],O[7]=0,O[8]=V[2],O[9]=L[2],O[10]=T[2],O[11]=0,O[12]=0,O[13]=0,O[14]=0,O[15]=1,{position:S,rotation:O,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Gc(i,a={}){const f=Ci(i,a);if(!f)return[];const y=a.numViews??120;return Array.from({length:y},(g,S)=>({...ki(f,S/y),img_name:`circle_${S.toString().padStart(4,"0")}`,id:S}))}function Lc(i){const a=new Uint8Array(i),f=Math.min(a.byteLength,65536),y=new TextDecoder("ascii").decode(a.subarray(0,f)),g=y.indexOf("end_header");if(g<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const S=g+10+1,T=y.slice(0,g).split(/\r?\n/).map(he=>he.trim()).filter(Boolean);if(T[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const V=T.find(he=>he.startsWith("format"));if(!V||!V.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${V??"<none>"})`);const L={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},O=[];let q=null;for(const he of T)if(he.startsWith("element ")){const[,pe,ae]=he.split(/\s+/);q={name:pe,count:parseInt(ae,10),props:[],bytesPerRecord:0,hasList:!1},O.push(q)}else if(he.startsWith("property ")&&q){const pe=he.split(/\s+/);if(pe[1]==="list"){const ae=pe[2],be=pe[3],Me=pe[4];q.props.push({name:Me,type:be,isList:!0,listCountType:ae,listItemType:be}),q.hasList=!0}else{const ae=pe[1],be=pe[2];if(q.props.push({name:be,type:ae,isList:!1}),L[ae]===void 0)throw new Error(`mesh PLY: unsupported prop type '${ae}'`);q.bytesPerRecord+=L[ae]}}const F=O.find(he=>he.name==="vertex"),X=O.find(he=>he.name==="face"||he.name==="faces");if(!F)throw new Error("mesh PLY: missing 'element vertex'");if(!X)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(F.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const Z=F.props.find(he=>he.name==="x"),N=F.props.find(he=>he.name==="y"),z=F.props.find(he=>he.name==="z");if(!Z||!N||!z)throw new Error("mesh PLY: vertex must have x/y/z");let U=0;const R=new Map;for(const he of F.props)R.set(he.name,{off:U,type:he.type}),U+=L[he.type];const W=R.get("x"),D=R.get("y"),H=R.get("z");if(W.type!==D.type||W.type!==H.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${W.type}/${D.type}/${H.type})`);const re=W.type,Pe=re==="double"||re==="float64";if(!Pe&&re!=="float"&&re!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${re}')`);const de=new Float32Array(F.count*3),te=new DataView(i),ve=S,ne=F.bytesPerRecord;for(let he=0;he<F.count;he++){const pe=ve+he*ne;Pe?(de[he*3+0]=te.getFloat64(pe+W.off,!0),de[he*3+1]=te.getFloat64(pe+D.off,!0),de[he*3+2]=te.getFloat64(pe+H.off,!0)):(de[he*3+0]=te.getFloat32(pe+W.off,!0),de[he*3+1]=te.getFloat32(pe+D.off,!0),de[he*3+2]=te.getFloat32(pe+H.off,!0))}const Fe=ve+F.count*ne,Ge=X.props.find(he=>he.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Ve=L[Ge.listCountType],Be=L[Ge.listItemType];if(Ve!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ve}`);let ge=Fe,Ee=0;for(let he=0;he<X.count;he++){const pe=te.getUint8(ge);pe===3&&Ee++,ge+=1+pe*Be}const ce=new Uint32Array(Ee*3);ge=Fe;let oe=0;for(let he=0;he<X.count;he++){const pe=te.getUint8(ge);if(ge+=1,pe===3)for(let ae=0;ae<3;ae++){const be=ge+ae*Be;let Me;if(Be===4)Me=te.getUint32(be,!0);else if(Be===2)Me=te.getUint16(be,!0);else if(Be===1)Me=te.getUint8(be);else throw new Error(`mesh PLY: unsupported face index size ${Be}`);ce[oe++]=Me}ge+=pe*Be}return{positions:de,indices:ce}}function Ic(i){const a=new DataView(i);if(i.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=a.getUint32(0,!0),y=a.getUint32(4,!0),g=f*12,S=y*4;if(i.byteLength<8+g+S)throw new Error(`mesh .bin: truncated (expected ${8+g+S} B, got ${i.byteLength} B)`);const T=new Float32Array(i.slice(8,8+g)),V=new Uint32Array(i.slice(8+g,8+g+S));return{positions:T,indices:V}}function Ti(i,a){return(a??"").toLowerCase().endsWith(".ply")?Lc(i):Ic(i)}function zc(i,a){const f=i.length/3,y=new Float32Array(f*3);for(let g=0;g<a.length;g+=3){const S=a[g]*3,T=a[g+1]*3,V=a[g+2]*3,L=i[S],O=i[S+1],q=i[S+2],F=i[T],X=i[T+1],Z=i[T+2],N=i[V],z=i[V+1],U=i[V+2],R=F-L,W=X-O,D=Z-q,H=N-L,re=z-O,Pe=U-q,de=W*Pe-D*re,te=D*H-R*Pe,ve=R*re-W*H;y[S]+=de,y[S+1]+=te,y[S+2]+=ve,y[T]+=de,y[T+1]+=te,y[T+2]+=ve,y[V]+=de,y[V+1]+=te,y[V+2]+=ve}for(let g=0;g<f;g++){const S=g*3,T=y[S],V=y[S+1],L=y[S+2],O=Math.sqrt(T*T+V*V+L*L);if(O>1e-12){const q=1/O;y[S]=T*q,y[S+1]=V*q,y[S+2]=L*q}}return y}function Bi(i,a){const f=i.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(f,0,a.positions);const y=zc(a.positions,a.indices),g=i.createBuffer({label:"mesh-cull normal buffer",size:y.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(g,0,y);const S=i.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return i.queue.writeBuffer(S,0,a.indices),{vertexBuffer:f,normalBuffer:g,indexBuffer:S,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function Rc(i,a){try{const f=await fetch(a);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${f.status}`),null;const y=await f.arrayBuffer(),g=Ti(y,a);return console.log(`[mesh-cull] loaded ${a}: ${g.positions.length/3} verts, ${g.indices.length/3} tris`),Bi(i,g)}catch(f){return console.warn(`[mesh-cull] load error for ${a}:`,f),null}}function Uc(i,a,f){try{const y=Ti(a,f);return console.log(`[mesh-cull] loaded from bundle: ${y.positions.length/3} verts, ${y.indices.length/3} tris`),Bi(i,y)}catch(y){return console.warn("[mesh-cull] parse error:",y),null}}const Mi="BITYMI01",Oc=0,Vc=1,Fc=2,Nc=3,Wc=4,$c=5,qc=6;function ns(i){const a=(i&32768)>>15,f=(i&31744)>>10,y=i&1023;return f===0?(a?-1:1)*Math.pow(2,-14)*(y/1024):f===31?y?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,f-15)*(1+y/1024)}function hi(i,a,f,y,g,S){const T=(i-f.width*.5)/y.focal[0],V=-((a-f.height*.5)/y.focal[1]),L=y.rotation,O=L[0],q=L[4],F=L[8],X=L[1],Z=L[5],N=L[9],z=L[2],U=L[6],R=L[10];let W=T*O+V*X+z,D=T*q+V*Z+U,H=T*F+V*N+R;const re=Math.hypot(W,D,H)||1;W/=re,D/=re,H/=re;const Pe=y.position[0],de=y.position[1],te=y.position[2],ve=S*.005,ne=ve*ve,Fe=new Uint32Array(g.buffer,g.byteOffset,g.length),Ge=g.length/8;let Ve=1/0,Be=0,ge=0,Ee=0,ce=-1;for(let oe=0;oe<Ge;oe++){const he=oe*8,pe=g[he+0]-Pe,ae=g[he+1]-de,be=g[he+2]-te,Me=pe*W+ae*D+be*H;if(Me<=0)continue;const xe=pe-Me*W,ke=ae-Me*D,Ne=be-Me*H;if(xe*xe+ke*ke+Ne*Ne>=ne||!(Fe[he+7]>>>16&1))continue;const x=Fe[he+5],o=Fe[he+6],m=ns(x&65535),p=ns(x>>>16&65535),w=ns(o&65535),P=ns(o>>>16&65535),C=Math.hypot(m,p,w,P)||1,k=m/C,r=p/C,h=w/C,u=P/C,_=2*(r*u+k*h),l=2*(h*u-k*r),d=1-2*(r*r+h*h),v=W*_+D*l+H*d;let b;Math.abs(v)>1e-6?(b=(pe*_+ae*l+be*d)/v,(!isFinite(b)||b<=0)&&(b=Me)):b=Me,b<Ve&&(Ve=b,Be=Pe+b*W,ge=de+b*D,Ee=te+b*H,ce=oe)}return ce<0?null:[Be,ge,Ee]}function Ai(i){const a=new Uint8Array(i),f=new TextDecoder().decode(a.subarray(0,8));if(f!==Mi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const y=new DataView(i),g=y.getUint32(8,!0),S=12,T=20;let V=null,L=null,O=null,q=null;for(let F=0;F<g;F++){const X=S+F*T,Z=y.getUint32(X+0,!0),N=Number(y.getBigUint64(X+4,!0)),z=Number(y.getBigUint64(X+12,!0)),U=a.slice(N,N+z).buffer;Z===Oc||Z===Vc||Z===$c?V=U:Z===Fc?L=U:Z===Nc||Z===Wc?O=U:Z===qc&&(q=U)}if(V===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:V,camerasBuffer:L,atlasBuffer:O,meshBuffer:q}}async function jc(i,a){var T;const f=await fetch(i);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const y=(()=>{const V=f.headers.get("content-length");return V&&parseInt(V,10)||void 0})(),g=(T=f.body)==null?void 0:T.getReader();let S;if(!g)S=await f.arrayBuffer(),a&&a(S.byteLength,y,0);else{const V=[];let L=0,O=performance.now(),q=0;for(;;){const{done:Z,value:N}=await g.read();if(Z)break;V.push(N),L+=N.byteLength;const z=performance.now();if(z-O>=150&&a){const U=(L-q)/((z-O)/1e3);a(L,y,U),O=z,q=L}}const F=new Uint8Array(L);let X=0;for(const Z of V)F.set(Z,X),X+=Z.byteLength;S=F.buffer,a&&a(L,y,0)}return S.byteLength>=8&&new TextDecoder().decode(new Uint8Array(S,0,8))===Mi?{bundle:Ai(S),rawPly:null}:{bundle:null,rawPly:S}}function Hc(i){return new Promise(a=>{const f=document.createElement("input");f.type="file",f.accept=i,f.style.display="none",f.onchange=()=>{var y;return a(((y=f.files)==null?void 0:y[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Kc(i,a,f){const y=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),S=document.getElementById("quick-links");g&&(g.onclick=async()=>{const q=await Hc(".ply,.bitymi");if(q)if(y&&(y.style.display="none"),q.name.toLowerCase().endsWith(".bitymi")){const F=await q.arrayBuffer(),{pcBuffer:X}=Ai(F),Z=new File([X],q.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),N=await Us(Z,i);a(N)}else{const F=await Us(q,i);a(F)}}),S&&(S.innerHTML="");const T=new URLSearchParams(window.location.search),V=T.get("bundle")??T.get("model_url"),L=T.get("camera_url"),O=T.get("mesh_url");V&&(y&&(y.style.display="none"),f(V,L,O))}async function Yc(i,a,f,y){const g=new Ws(i,f),S=new Tc(g);let T=!1;i.addEventListener("pointerdown",()=>{T=!0}),window.addEventListener("pointerup",()=>{T=!1});const V=typeof window<"u"&&window.parent!==window,L={pos:new Float32Array(3),rot:new Float32Array(16)};if(V){window.addEventListener("message",d=>{const v=d.data;if(!(!v||v.type!=="halloumi_sync_pose")&&!(!Array.isArray(v.position)||v.position.length!==3)&&!(!Array.isArray(v.rotation)||v.rotation.length!==16)){for(let b=0;b<3;b++)g.position[b]=v.position[b];for(let b=0;b<16;b++)g.rotation[b]=v.rotation[b];g.update_buffer(),S.resetToCamera();for(let b=0;b<3;b++)L.pos[b]=g.position[b];for(let b=0;b<16;b++)L.rot[b]=g.rotation[b]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const O=()=>{if(!V)return;const d=g.position,v=g.rotation;let b=!1;for(let B=0;B<3;B++)if(Math.abs(d[B]-L.pos[B])>1e-6){b=!0;break}if(!b){for(let B=0;B<16;B++)if(Math.abs(v[B]-L.rot[B])>1e-6){b=!0;break}}if(b){for(let B=0;B<3;B++)L.pos[B]=d[B];for(let B=0;B<16;B++)L.rot[B]=v[B];try{window.parent.postMessage({type:"halloumi_camera_state",position:[d[0],d[1],d[2]],rotation:Array.from(v)},"*")}catch{}}},q="rgba8unorm";a.configure({device:f,format:q,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let F=null;const X=()=>{g.on_update_canvas(),F!==null&&ts(i.width,i.height,f,F.render_settings_buffer)};new ResizeObserver(()=>{const d=Math.max(.25,h.render_scale),v=Math.max(1,Math.ceil(d*i.clientWidth)),b=Math.max(1,Math.ceil(d*i.clientHeight));i.width===v&&i.height===b||(i.width=v,i.height=b,X())}).observe(i);let N=0,z=0;const U=()=>{(i.width!==N||i.height!==z)&&(N=i.width,z=i.height,X())},R=new URLSearchParams(window.location.search);let D=R.get("animation")==="1";S.enabled=!D;const H=R.get("camera_url"),re=R.get("mesh_cull"),Pe=re==="1"||re==="true",de=R.get("mesh_normal_margin")??R.get("mesh_margin"),te=de!==null?Number(de):NaN,ve=Number.isFinite(te)?te:0,ne=R.get("mesh_debug"),Fe=ne==="1"||ne==="true",Ge=R.get("bfc"),Ve=Ge==="1"||Ge==="true",Be=R.get("bfc_cos"),ge=Be!==null?Number(Be):NaN,Ee=Number.isFinite(ge)?ge:2,ce=R.get("mesh_sample_mode"),oe=ce!==null?parseInt(ce,10):NaN,he=Number.isFinite(oe)&&oe>=0&&oe<=7?oe:1,pe=R.get("mesh_silhouette"),ae=pe==="1"||pe==="true",be=R.get("mesh_invert_depth"),Me=be==="1"||be==="true",xe=R.get("ht"),ke=xe==="3"?3:xe==="2"?2:xe==="1"||xe==="true"?1:0,Ne=R.get("ht_k"),M=Ne!==null?Number(Ne):NaN,Y=Number.isFinite(M)?M:150,x=R.get("wsr"),o=x==="1"||x==="true"||x==="2"||x==="3",m=x==="2",p=x==="3",w=Number(R.get("sat_t")),P=Number.isFinite(w)&&w>0?w:m?.05:.1,C=Number(R.get("dg_m")),k=Number.isFinite(C)&&C>0?C:.15,r=Math.max(1,window.devicePixelRatio||1),h={gaussian_scaling:1,sh_bias:.5,animate:D,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Ve,bfc_cos:Ee,ht_mode:ke,ht_k:Y,wsr:o,wsr_gate:m,wsr_dgate:p,sat_t:P,dg_margin:k,mesh_cull:Pe,mesh_margin:ve,mesh_debug:Fe,mesh_sample_mode:he,mesh_silhouette:ae,mesh_invert_depth:Me,render_scale:1},u=new Hl.Pane({title:"Config",expanded:!0});u.addInput(h,"animate",{label:"Animate"}).on("change",d=>{const v=D;D=d.value,S.enabled=!d.value,!v&&D&&_.value&&_.value.onAnimateStart(),v&&!D&&_.value&&_.value.onAnimateStop()}),u.addInput(h,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const _={value:null};Kc(f,d=>l(d,[],null,null),async(d,v,b)=>{let B=v??H,$,K=null,ie=null;const Q=d.toLowerCase();if(Q.endsWith(".bitymi")||Q.includes(".bitymi?")){qs("downloading bundle ...");try{const{bundle:j}=await jc(d,(fe,me,Ae)=>{const Te=fe/1048576,Ie=me?me/(1024*1024):void 0,Ze=Ae/(1024*1024),He=me?Math.min(99,Math.floor(fe/me*100)):void 0,Xe=Ie?`total ${Ie.toFixed(1)} MB`:"total -- MB",ze=Ie&&He!==void 0?`${Te.toFixed(1)} MB downloaded (${He}%)`:`${Te.toFixed(1)} MB downloaded`,Je=`${Ze.toFixed(2)} MB/s`;Ot(`downloading bundle ...
${Xe}, ${ze}
${Je}`)});if(!j)throw new Error("Expected a .bitymi bundle");Ot("parsing PLY ...");const we=new File([j.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if($=await Us(we,f),!B&&j.camerasBuffer&&(B=URL.createObjectURL(new Blob([j.camerasBuffer],{type:"application/json"}))),j.atlasBuffer){const fe=j.atlasBuffer.byteLength/1048576;Ot(`uploading atlas ...
${fe.toFixed(1)} MB BC7`);try{const me=Nl(j.atlasBuffer);K=$l(f,me,!0)}catch(me){console.warn("[atlas] failed to parse/upload atlas:",me)}}j.meshBuffer&&!b&&(Ot("uploading mesh ..."),ie=Uc(f,j.meshBuffer,"bundle.mesh"))}catch(j){throw Gn(),j}}else $=await ql(d,f);b&&(Ot("loading mesh ..."),ie=await Rc(f,b));const J=B?await xc(B):[];J.length>0&&g.set_preset(J[0]),l($,J,K,ie)});function l(d,v=[],b=null,B=null){var Un;const $=[(d.bbox.min[0]+d.bbox.max[0])/2,(d.bbox.min[1]+d.bbox.max[1])/2,(d.bbox.min[2]+d.bbox.max[2])/2];S.setBbox(d.bbox.min,d.bbox.max);const K=.5*Math.sqrt((d.bbox.max[0]-d.bbox.min[0])**2+(d.bbox.max[1]-d.bbox.min[1])**2+(d.bbox.max[2]-d.bbox.min[2])**2);function ie(se,_e){const le=hi(se,_e,i,g,d.surfel_data,K);le&&(S.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function Q(){const se=i.width*.5,_e=i.height*.5,le=hi(se,_e,i,g,d.surfel_data,K);if(!le)return;const De=g.rotation,Re=De[2],ye=De[6],ue=De[10],je=le[0]-g.position[0],Ye=le[1]-g.position[1],ct=le[2]-g.position[2],mt=je*Re+Ye*ye+ct*ue;mt>0&&S.setOrbitDepth(mt)}if(v.length===0){const se=d.bbox.max[0]-d.bbox.min[0],_e=d.bbox.max[1]-d.bbox.min[1],le=d.bbox.max[2]-d.bbox.min[2],Re=.5*Math.sqrt(se*se+_e*_e+le*le)*.5;I.set($[0]-Re,$[1]-Re,$[2]-Re,g.position);const ye=I.create(Re,Re,Re);I.normalize(ye,ye);const ue=I.create(0,1,0),je=I.create();I.cross(ue,ye,je),I.normalize(je,je);const Ye=I.create();I.cross(ye,je,Ye);const ct=Pt.create(je[0],Ye[0],ye[0],je[1],Ye[1],ye[1],je[2],Ye[2],ye[2]);pt.fromMat3(ct,g.rotation),g.update_buffer()}S.setCenter(I.create(d.centroid[0],d.centroid[1],d.centroid[2]));const J={fetchById:R.get("byid")!=="0",octBound:R.get("oct")==="1",acc16:R.get("acc16")==="1"},j=new vc(d,f,q,g.uniform_buffer,y,b,B,J);Kt({hypLegacy:R.get("hyp_legacy")==="1"},f,j.render_settings_buffer),F=j,ts(i.width,i.height,f,j.render_settings_buffer),h.atlas_enabled=b!==null,B===null&&(h.mesh_cull=!1),j.setMeshCullEnabled(h.mesh_cull),j.setMeshMargin(h.mesh_margin),B===null&&(h.mesh_debug=!1),j.setMeshOverlayEnabled(h.mesh_debug);{const se=d.surfel_data,_e=se.length/8;let le=0,De=0,Re=0;for(let ue=0;ue<_e;ue++)le+=se[ue*8],De+=se[ue*8+1],Re+=se[ue*8+2];const ye=_e>0?[le/_e,De/_e,Re/_e]:[0,0,0];j.setBfcParams(h.bfc_cos,ye),Kt({bfc:h.bfc},f,j.render_settings_buffer),console.log(`[bfc] flag=${h.bfc} cos=${h.bfc_cos} centroid=(${ye[0].toFixed(3)}, ${ye[1].toFixed(3)}, ${ye[2].toFixed(3)})`)}j.htEnabled=h.ht_mode>0,j.htSortedTail=h.ht_mode===2,j.htOccTail=h.ht_mode===3,j.setHtTailK(h.ht_k),h.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${h.ht_mode}: ${h.ht_mode===2?"exact core + SORTED tail":h.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${h.ht_k})`),j.wsrEnabled=h.wsr,j.wsrGateEnabled=h.wsr_gate,j.wsrDGateEnabled=h.wsr_dgate,j.setWsrSatT(h.sat_t),j.setWsrDGateMargin(h.dg_margin),h.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),Kt({meshSampleMode:h.mesh_sample_mode,meshSilhouetteCull:h.mesh_silhouette,meshInvertDepth:h.mesh_invert_depth},f,j.render_settings_buffer),console.log(`[mesh-cull] ${B!==null?"mesh loaded":"no mesh"} · toggle=${h.mesh_cull} · margin=${h.mesh_margin}m · debug=${h.mesh_debug} · sample_mode=${h.mesh_sample_mode} · silhouette=${h.mesh_silhouette} · invert=${h.mesh_invert_depth}`);let we=!1;const fe=(()=>{if(b!==null)return`${b.meta.format===2?"BC7":b.meta.format===3?"ASTC 4×4":b.meta.format===7?"BC7 codebook gather (typeD)":`format=${b.meta.format}`} ${b.meta.width}×${b.meta.height}, ${b.meta.n_layers} layers`;const se=f.features.has("texture-compression-bc"),_e=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(se?["BC7"]:[]).concat(_e?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",fe),ui(d.sh_bias,f,j.render_settings_buffer),ci(h.gaussian_scaling,f,j.render_settings_buffer),h.sh_bias=d.sh_bias;const me=d.num_points.toLocaleString(),Ae={stats:`${me} surfels · -- fps`};u.addMonitor(Ae,"stats",{label:"Stats",interval:200}),u.addMonitor({atlas:fe},"atlas",{label:"Atlas"});const Te={stages:"— ms · awaiting timestamp data"};u.addMonitor(Te,"stages",{label:"Stages",interval:500});let Ie=null;if(j.timeQueryEnabled){Ie=document.createElement("canvas"),Ie.width=280,Ie.height=24,Ie.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(Ie);const se=le=>{const De=Ie.getContext("2d");if(!De)return;const Re=Ie.width,ye=Ie.height;if(De.clearRect(0,0,Re,ye),!le||le.total<=0){De.fillStyle="#888",De.font="11px ui-monospace,Menlo,monospace",De.fillText("awaiting GPU timestamps…",8,16);return}const ue=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],je=Math.max(.001,ue.reduce((ct,mt)=>ct+mt.ms,0));let Ye=0;De.font="10px ui-monospace,Menlo,monospace",De.textBaseline="middle";for(const ct of ue){const mt=ct.ms/je*Re;De.fillStyle=ct.color,De.fillRect(Ye,0,mt,ye),mt>=38&&(De.fillStyle="#000c",De.fillText(`${ct.label} ${ct.ms.toFixed(1)}`,Ye+4,ye/2)),Ye+=mt}};setInterval(()=>{we||j.readPerfMetrics({silent:!0}).then(()=>{const le=j.lastStageBreakdownMs;se(le),le&&(Te.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const Ze=.4,He=3,Xe=.3;let ze=null,Je=0,it=0;const ot=ft.create(),at=Pt.create();let Ue=v.length>0?0:-1;const tt={view:v.length>0?`${Ue+1} / ${v.length}: ${v[Ue].img_name??Ue}`:"— no presets —"};u.addMonitor(tt,"view",{label:"View",interval:100});function qe(se){const _e=Pt.create(se[0],se[1],se[2],se[4],se[5],se[6],se[8],se[9],se[10]);return ft.fromMat(_e)}function st(se,_e){ze={fromPos:I.clone(g.position),toPos:I.clone(se.position),fromQuat:ft.normalize(qe(g.rotation)),toQuat:ft.normalize(qe(se.rotation)),target:se,t:0,duration:Math.max(.01,_e)}}const Ke=(se,_e=!0)=>{if(v.length===0)return;Ue=(se%v.length+v.length)%v.length;const le=v[Ue];_e?st(le,Ze):(g.set_preset(le),S.resetToCamera(),Q()),tt.view=`${Ue+1} / ${v.length}: ${v[Ue].img_name??Ue}`};v.length>0&&(u.addButton({title:"◀ Prev view"}).on("click",()=>Ke(Ue-1)),u.addButton({title:"Next view ▶"}).on("click",()=>Ke(Ue+1)));const lt=v.length>0?Ci(v,{tiltDownDeg:15,alignFirst:!0}):null,rt=lt?Gc(v,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let gt=0;const Et=12;_.value={onAnimateStart:()=>{gt=0},onAnimateStop:()=>{S.resetToCamera(),Q()}},u.addInput(h,"render_scale",{label:"Render scale",min:.25,max:r,step:.25}).on("change",se=>{const _e=Math.max(.25,se.value),le=Math.max(1,Math.ceil(_e*i.clientWidth)),De=Math.max(1,Math.ceil(_e*i.clientHeight));(i.width!==le||i.height!==De)&&(i.width=le,i.height=De,X())}),u.addInput(h,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",se=>ci(se.value,f,j.render_settings_buffer)),u.addInput(h,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",se=>ui(se.value,f,j.render_settings_buffer)),u.addInput(h,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",se=>{j.bgColor=[se.value.r,se.value.g,se.value.b,se.value.a]});const Bt=b?b.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";if(u.addInput(h,"atlas_enabled",{label:Bt}).on("change",se=>j.setAtlasEnabled(se.value)),j.hasMips&&(j.setMipMode(h.mips),u.addInput(h,"mips",{label:"Mips (trilinear)"}).on("change",se=>j.setMipMode(se.value))),u.addInput(h,"bfc",{label:"Backface"}).on("change",se=>Kt({bfc:se.value},f,j.render_settings_buffer)),!(((Un=b==null?void 0:b.meta)==null?void 0:Un.probe_mode)===1)){u.addInput(h,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",ue=>{j.htEnabled=ue.value>0,j.htSortedTail=ue.value===2,j.htOccTail=ue.value===3}),u.addInput(h,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",ue=>j.setHtTailK(ue.value)),u.addInput(h,"wsr",{label:"WSR (sort-free)"}).on("change",ue=>{j.wsrEnabled=ue.value}),u.addInput(h,"wsr_gate",{label:"WSR sat-gate"}).on("change",ue=>{j.wsrGateEnabled=ue.value}),u.addInput(h,"wsr_dgate",{label:"WSR D-gate"}).on("change",ue=>{j.wsrDGateEnabled=ue.value}),u.addInput(h,"sat_t",{label:"sat tolerance T",min:.01,max:.5,step:.005}).on("change",ue=>{j.setWsrSatT(ue.value)}),u.addInput(h,"dg_margin",{label:"D-gate margin",min:.02,max:.8,step:.005}).on("change",ue=>{j.setWsrDGateMargin(ue.value)});const se=u.addInput(h,"mesh_cull",{label:"Mesh cull"});se.on("change",ue=>j.setMeshCullEnabled(ue.value)),j.hasMesh||(se.disabled=!0);const _e=u.addInput(h,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});_e.on("change",ue=>j.setMeshMargin(ue.value)),j.hasMesh||(_e.disabled=!0);const le=u.addInput(h,"mesh_debug",{label:"Mesh debug"});le.on("change",ue=>j.setMeshOverlayEnabled(ue.value)),j.hasMesh||(le.disabled=!0);const De=u.addInput(h,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});De.on("change",ue=>Kt({meshSampleMode:ue.value},f,j.render_settings_buffer)),j.hasMesh||(De.disabled=!0);const Re=u.addInput(h,"mesh_silhouette",{label:"Silhouette cull"});Re.on("change",ue=>Kt({meshSilhouetteCull:ue.value},f,j.render_settings_buffer)),j.hasMesh||(Re.disabled=!0);const ye=u.addInput(h,"mesh_invert_depth",{label:"Invert depth cull"});ye.on("change",ue=>Kt({meshInvertDepth:ue.value},f,j.render_settings_buffer)),j.hasMesh||(ye.disabled=!0)}u.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(v.length>0)g.set_preset(v[0]);else{const se=d.bbox.max[0]-d.bbox.min[0],_e=d.bbox.max[1]-d.bbox.min[1],le=d.bbox.max[2]-d.bbox.min[2],Re=.5*Math.sqrt(se*se+_e*_e+le*le)*.5;I.set($[0]-Re,$[1]-Re,$[2]-Re,g.position);const ye=I.create(Re,Re,Re);I.normalize(ye,ye);const ue=I.create();I.cross(I.create(0,1,0),ye,ue),I.normalize(ue,ue);const je=I.create();I.cross(ye,ue,je);const Ye=Pt.create(ue[0],je[0],ye[0],ue[1],je[1],ye[1],ue[2],je[2],ye[2]);pt.fromMat3(Ye,g.rotation),g.update_buffer()}S.resetToCamera(),Q()});const Ct={result:"— click Benchmark —"};u.addMonitor(Ct,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const At={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Vt(){const _e=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(At))if(_e.startsWith(le))return le;return null}const kt=document.createElement("div");kt.id="bench-overlay",kt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(kt);function Dt(se,_e,le){const De=Math.floor(_e/Math.max(1,le)*100),Re=32,ye=Math.floor(_e/Math.max(1,le)*Re),ue="█".repeat(ye)+"░".repeat(Re-ye);kt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${se}</div><div>[${ue}] ${De}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${_e} / ${le} frames · offscreen · pipelined · no vsync</div>`,kt.style.display="block"}function an(){kt.style.display="none"}async function ln(se=10,_e=200){if(we)return;if(v.length===0){Ct.result="no cameras to benchmark";return}we=!0;const le=D,De=h.animate,Re=new Float32Array(g.position),ye=new Float32Array(g.rotation);D=!1,h.animate=!1,u.refresh(),ze=null,S.enabled=!1;const ue=Vt(),je=ue?At[ue]:null,Ye=(je==null?void 0:je.w)??i.width,ct=(je==null?void 0:je.h)??i.height,mt=(je==null?void 0:je.fovY)??g.getFov(),On=ue?`${ue} · ${Ye>=4e3/4+500?"images_4":"images_2"}`:"custom",Vn=i.width,Fn=i.height,us=g.getFov();i.width=Ye,i.height=ct,g.setFov(mt),ts(Ye,ct,f,j.render_settings_buffer);const Nn=f.createTexture({size:[Ye,ct,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Wn=Nn.createView(),ds=()=>{const ut=f.createCommandEncoder();j.frame(ut,Wn,!1),f.queue.submit([ut.finish()])},$n=()=>new Promise(ut=>setTimeout(ut,0)),ps=20,qn=async(ut,_t)=>{let Tt=0,wt=0;for(Dt(_t,0,ut),await $n();wt<ut;){const Zt=Math.min(ps,ut-wt),Lt=performance.now();for(let xn=0;xn<Zt;xn++)g.set_preset(v[(wt+xn)%v.length]),ds();await f.queue.onSubmittedWorkDone();const wn=performance.now();Tt+=wn-Lt,wt+=Zt,Dt(_t,wt,ut),await $n()}return Tt};try{await qn(se,"Warming up");const _t=await qn(_e,"Benchmarking")/_e,Tt=1e3/_t,wt=d.num_points??d.surfel_data.length/8,Zt=(mt*180/Math.PI).toFixed(1),Lt=`${Tt.toFixed(1)} FPS  (${_t.toFixed(2)} ms/frame)
${Ye}×${ct} · fovY ${Zt}° · ${On}
${wt.toLocaleString()} surfels · ${se}w+${_e}b · pipelined`;Ct.result=Lt,console.log("[bench]",Lt.replace(/\n/g,"  |  "))}catch(ut){console.error("[bench] failed:",ut),Ct.result=`bench failed: ${ut}`}finally{an(),Nn.destroy(),i.width=Vn,i.height=Fn,g.setFov(us),ts(Vn,Fn,f,j.render_settings_buffer),g.position.set(Re),g.rotation.set(ye),g.update_buffer(),S.enabled=!le,D=le,h.animate=De,u.refresh(),we=!1}}u.addButton({title:"📊 Benchmark"}).on("click",()=>ln()),document.addEventListener("keydown",se=>{const _e=se.key;if(_e>="0"&&_e<="9"&&v.length>0){const le=parseInt(_e);le<v.length&&Ke(le)}else _e==="ArrowLeft"||_e==="PageUp"?(Ke(Ue-1),se.preventDefault()):_e==="ArrowRight"||_e==="PageDown"?(Ke(Ue+1),se.preventDefault()):(_e==="d"||_e==="D")&&j.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function Qe(se,_e){const le=i.getBoundingClientRect(),De=window.devicePixelRatio||1;return[(se-le.left)*De,(_e-le.top)*De]}i.addEventListener("dblclick",se=>{const[_e,le]=Qe(se.clientX,se.clientY);ie(_e,le)});let cn=0,zn=0,un=0;i.addEventListener("pointerdown",se=>{if(se.pointerType!=="touch")return;const _e=performance.now(),le=_e-cn,De=se.clientX-zn,Re=se.clientY-un;if(le>0&&le<300&&De*De+Re*Re<40*40){const[ye,ue]=Qe(se.clientX,se.clientY);ie(ye,ue),cn=0}else cn=_e,zn=se.clientX,un=se.clientY});function Rn(){return T}let Gt=performance.now(),dn=60,gn=Promise.resolve(),pn=0;async function Yt(){var Re;const se=performance.now(),_e=Math.min((se-Gt)/1e3,.1);if(Gt=se,_e>0){const ye=((Re=j.lastStageBreakdownMs)==null?void 0:Re.total)??0,ue=ye>.5?1e3/ye:1/_e;dn=dn*.9+ue*.1,Ae.stats=`${me} surfels · ${Math.round(dn)} fps`}if(we){requestAnimationFrame(Yt);return}if(Rn()&&(ze||D)&&(ze=null,S.resetToCamera(),Q(),D&&(D=!1,h.animate=!1,u.refresh())),D&&h.animateMode==="circle"&&lt){gt+=_e/Et,gt>=1&&(gt-=1);const ye=ki(lt,gt);g.set_preset(ye),S.update(_e);const ue=f.createCommandEncoder();j.frame(ue,a.getCurrentTexture().createView()),f.queue.submit([ue.finish()]),pn++,pn===2&&Gn(),requestAnimationFrame(Yt);return}if(ze){ze.t+=_e/ze.duration;const ye=Math.min(1,ze.t),ue=ye*ye*(3-2*ye);I.lerp(ze.fromPos,ze.toPos,ue,g.position),ft.slerp(ze.fromQuat,ze.toQuat,ue,ot),Pt.fromQuat(ot,at),pt.fromMat3(at,g.rotation),g.update_buffer(),ze.t>=1&&(g.set_preset(ze.target),ze=null,D?v.length>0&&(Je=Xe):(S.resetToCamera(),Q()))}else if(D&&!Rn()){const ye=h.animateMode==="circle"&&rt.length>0,ue=ye?rt:v;if(ue.length!==0){if(Je-=_e,Je<=0){const Ye=((ye?it:Ue)+1)%ue.length;ye?it=Ye:Ue=Ye;const ct=ye?He/8:He;st(ue[Ye],ct),ye||(tt.view=`${Ue+1} / ${v.length}: ${v[Ue].img_name??Ue}`)}}}S.update(_e),O(),U(),await gn;const le=f.createCommandEncoder(),De=a.getCurrentTexture().createView();j.frame(le,De),f.queue.submit([le.finish()]),gn=f.queue.onSubmittedWorkDone(),pn++,pn===2&&Gn(),requestAnimationFrame(Yt)}requestAnimationFrame(Yt)}}(function(){let a="dev";for(const y of Array.from(document.querySelectorAll('script[type="module"]'))){const S=y.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(S){a=S[1];break}}const f=document.createElement("div");f.textContent="v "+a,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const S=document.querySelector("#title");S.innerText="WebGPU is not supported in this browser.";return}const i=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(i===null){const S=document.querySelector("#title");S.innerText="No adapter is available for WebGPU.";return}const a=[];i.features.has("timestamp-query")&&a.push("timestamp-query"),i.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),i.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",i.info??"(unknown)"),console.log("[adapter] features:",Array.from(i.features)),console.log("[adapter] BC7:",i.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",i.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:i.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxTextureDimension2D:i.limits.maxTextureDimension2D});const f=await i.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize}}),y=document.querySelector("#webgpu-canvas");Rl(y!==null);const g=y.getContext("webgpu");Yc(y,g,f,a)})();
