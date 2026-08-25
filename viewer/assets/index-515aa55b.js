var El=Object.defineProperty;var Cl=(i,a,f)=>a in i?El(i,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[a]=f;var M=(i,a,f)=>(Cl(i,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))y(b);new MutationObserver(b=>{for(const S of b)if(S.type==="childList")for(const T of S.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&y(T)}).observe(document,{childList:!0,subtree:!0});function f(b){const S={};return b.integrity&&(S.integrity=b.integrity),b.referrerPolicy&&(S.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?S.credentials="include":b.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function y(b){if(b.ep)return;b.ep=!0;const S=f(b);fetch(b.href,S)}})();function kl(i,a){return class extends i{constructor(...f){super(...f),a(this)}}}const Tl=kl(Array,i=>i.fill(0));let Ie=1e-6;function Bl(i){function a(P=0,C=0){const k=new i(2);return P!==void 0&&(k[0]=P,C!==void 0&&(k[1]=C)),k}const f=a;function y(P,C,k){const r=k??new i(2);return r[0]=P,r[1]=C,r}function b(P,C){const k=C??new i(2);return k[0]=Math.ceil(P[0]),k[1]=Math.ceil(P[1]),k}function S(P,C){const k=C??new i(2);return k[0]=Math.floor(P[0]),k[1]=Math.floor(P[1]),k}function T(P,C){const k=C??new i(2);return k[0]=Math.round(P[0]),k[1]=Math.round(P[1]),k}function V(P,C=0,k=1,r){const h=r??new i(2);return h[0]=Math.min(k,Math.max(C,P[0])),h[1]=Math.min(k,Math.max(C,P[1])),h}function L(P,C,k){const r=k??new i(2);return r[0]=P[0]+C[0],r[1]=P[1]+C[1],r}function O(P,C,k,r){const h=r??new i(2);return h[0]=P[0]+C[0]*k,h[1]=P[1]+C[1]*k,h}function q(P,C){const k=P[0],r=P[1],h=C[0],c=C[1],_=Math.sqrt(k*k+r*r),l=Math.sqrt(h*h+c*c),d=_*l,v=d&&ge(P,C)/d;return Math.acos(v)}function F(P,C,k){const r=k??new i(2);return r[0]=P[0]-C[0],r[1]=P[1]-C[1],r}const X=F;function Z(P,C){return Math.abs(P[0]-C[0])<Ie&&Math.abs(P[1]-C[1])<Ie}function N(P,C){return P[0]===C[0]&&P[1]===C[1]}function R(P,C,k,r){const h=r??new i(2);return h[0]=P[0]+k*(C[0]-P[0]),h[1]=P[1]+k*(C[1]-P[1]),h}function U(P,C,k,r){const h=r??new i(2);return h[0]=P[0]+k[0]*(C[0]-P[0]),h[1]=P[1]+k[1]*(C[1]-P[1]),h}function z(P,C,k){const r=k??new i(2);return r[0]=Math.max(P[0],C[0]),r[1]=Math.max(P[1],C[1]),r}function W(P,C,k){const r=k??new i(2);return r[0]=Math.min(P[0],C[0]),r[1]=Math.min(P[1],C[1]),r}function D(P,C,k){const r=k??new i(2);return r[0]=P[0]*C,r[1]=P[1]*C,r}const H=D;function re(P,C,k){const r=k??new i(2);return r[0]=P[0]/C,r[1]=P[1]/C,r}function ye(P,C){const k=C??new i(2);return k[0]=1/P[0],k[1]=1/P[1],k}const he=ye;function te(P,C,k){const r=k??new i(3),h=P[0]*C[1]-P[1]*C[0];return r[0]=0,r[1]=0,r[2]=h,r}function ge(P,C){return P[0]*C[0]+P[1]*C[1]}function ne(P){const C=P[0],k=P[1];return Math.sqrt(C*C+k*k)}const Oe=ne;function Le(P){const C=P[0],k=P[1];return C*C+k*k}const Ue=Le;function Ae(P,C){const k=P[0]-C[0],r=P[1]-C[1];return Math.sqrt(k*k+r*r)}const ve=Ae;function Ee(P,C){const k=P[0]-C[0],r=P[1]-C[1];return k*k+r*r}const ue=Ee;function oe(P,C){const k=C??new i(2),r=P[0],h=P[1],c=Math.sqrt(r*r+h*h);return c>1e-5?(k[0]=r/c,k[1]=h/c):(k[0]=0,k[1]=0),k}function fe(P,C){const k=C??new i(2);return k[0]=-P[0],k[1]=-P[1],k}function be(P,C){const k=C??new i(2);return k[0]=P[0],k[1]=P[1],k}const ae=be;function de(P,C,k){const r=k??new i(2);return r[0]=P[0]*C[0],r[1]=P[1]*C[1],r}const ke=de;function we(P,C,k){const r=k??new i(2);return r[0]=P[0]/C[0],r[1]=P[1]/C[1],r}const Te=we;function Ve(P=1,C){const k=C??new i(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*P,k[1]=Math.sin(r)*P,k}function A(P){const C=P??new i(2);return C[0]=0,C[1]=0,C}function Y(P,C,k){const r=k??new i(2),h=P[0],c=P[1];return r[0]=h*C[0]+c*C[4]+C[12],r[1]=h*C[1]+c*C[5]+C[13],r}function x(P,C,k){const r=k??new i(2),h=P[0],c=P[1];return r[0]=C[0]*h+C[4]*c+C[8],r[1]=C[1]*h+C[5]*c+C[9],r}function o(P,C,k,r){const h=r??new i(2),c=P[0]-C[0],_=P[1]-C[1],l=Math.sin(k),d=Math.cos(k);return h[0]=c*d-_*l+C[0],h[1]=c*l+_*d+C[1],h}function m(P,C,k){const r=k??new i(2);return oe(P,r),D(r,C,r)}function p(P,C,k){const r=k??new i(2);return ne(P)>C?m(P,C,r):be(P,r)}function w(P,C,k){const r=k??new i(2);return R(P,C,.5,r)}return{create:a,fromValues:f,set:y,ceil:b,floor:S,round:T,clamp:V,add:L,addScaled:O,angle:q,subtract:F,sub:X,equalsApproximately:Z,equals:N,lerp:R,lerpV:U,max:z,min:W,mulScalar:D,scale:H,divScalar:re,inverse:ye,invert:he,cross:te,dot:ge,length:ne,len:Oe,lengthSq:Le,lenSq:Ue,distance:Ae,dist:ve,distanceSq:Ee,distSq:ue,normalize:oe,negate:fe,copy:be,clone:ae,multiply:de,mul:ke,divide:we,div:Te,random:Ve,zero:A,transformMat4:Y,transformMat3:x,rotate:o,setLength:m,truncate:p,midpoint:w}}const Yr=new Map;function gi(i){let a=Yr.get(i);return a||(a=Bl(i),Yr.set(i,a)),a}function Ml(i){function a(l,d,v){const g=new i(3);return l!==void 0&&(g[0]=l,d!==void 0&&(g[1]=d,v!==void 0&&(g[2]=v))),g}const f=a;function y(l,d,v,g){const B=g??new i(3);return B[0]=l,B[1]=d,B[2]=v,B}function b(l,d){const v=d??new i(3);return v[0]=Math.ceil(l[0]),v[1]=Math.ceil(l[1]),v[2]=Math.ceil(l[2]),v}function S(l,d){const v=d??new i(3);return v[0]=Math.floor(l[0]),v[1]=Math.floor(l[1]),v[2]=Math.floor(l[2]),v}function T(l,d){const v=d??new i(3);return v[0]=Math.round(l[0]),v[1]=Math.round(l[1]),v[2]=Math.round(l[2]),v}function V(l,d=0,v=1,g){const B=g??new i(3);return B[0]=Math.min(v,Math.max(d,l[0])),B[1]=Math.min(v,Math.max(d,l[1])),B[2]=Math.min(v,Math.max(d,l[2])),B}function L(l,d,v){const g=v??new i(3);return g[0]=l[0]+d[0],g[1]=l[1]+d[1],g[2]=l[2]+d[2],g}function O(l,d,v,g){const B=g??new i(3);return B[0]=l[0]+d[0]*v,B[1]=l[1]+d[1]*v,B[2]=l[2]+d[2]*v,B}function q(l,d){const v=l[0],g=l[1],B=l[2],$=d[0],K=d[1],ie=d[2],J=Math.sqrt(v*v+g*g+B*B),Q=Math.sqrt($*$+K*K+ie*ie),pe=J*Q,xe=pe&&ge(l,d)/pe;return Math.acos(xe)}function F(l,d,v){const g=v??new i(3);return g[0]=l[0]-d[0],g[1]=l[1]-d[1],g[2]=l[2]-d[2],g}const X=F;function Z(l,d){return Math.abs(l[0]-d[0])<Ie&&Math.abs(l[1]-d[1])<Ie&&Math.abs(l[2]-d[2])<Ie}function N(l,d){return l[0]===d[0]&&l[1]===d[1]&&l[2]===d[2]}function R(l,d,v,g){const B=g??new i(3);return B[0]=l[0]+v*(d[0]-l[0]),B[1]=l[1]+v*(d[1]-l[1]),B[2]=l[2]+v*(d[2]-l[2]),B}function U(l,d,v,g){const B=g??new i(3);return B[0]=l[0]+v[0]*(d[0]-l[0]),B[1]=l[1]+v[1]*(d[1]-l[1]),B[2]=l[2]+v[2]*(d[2]-l[2]),B}function z(l,d,v){const g=v??new i(3);return g[0]=Math.max(l[0],d[0]),g[1]=Math.max(l[1],d[1]),g[2]=Math.max(l[2],d[2]),g}function W(l,d,v){const g=v??new i(3);return g[0]=Math.min(l[0],d[0]),g[1]=Math.min(l[1],d[1]),g[2]=Math.min(l[2],d[2]),g}function D(l,d,v){const g=v??new i(3);return g[0]=l[0]*d,g[1]=l[1]*d,g[2]=l[2]*d,g}const H=D;function re(l,d,v){const g=v??new i(3);return g[0]=l[0]/d,g[1]=l[1]/d,g[2]=l[2]/d,g}function ye(l,d){const v=d??new i(3);return v[0]=1/l[0],v[1]=1/l[1],v[2]=1/l[2],v}const he=ye;function te(l,d,v){const g=v??new i(3),B=l[2]*d[0]-l[0]*d[2],$=l[0]*d[1]-l[1]*d[0];return g[0]=l[1]*d[2]-l[2]*d[1],g[1]=B,g[2]=$,g}function ge(l,d){return l[0]*d[0]+l[1]*d[1]+l[2]*d[2]}function ne(l){const d=l[0],v=l[1],g=l[2];return Math.sqrt(d*d+v*v+g*g)}const Oe=ne;function Le(l){const d=l[0],v=l[1],g=l[2];return d*d+v*v+g*g}const Ue=Le;function Ae(l,d){const v=l[0]-d[0],g=l[1]-d[1],B=l[2]-d[2];return Math.sqrt(v*v+g*g+B*B)}const ve=Ae;function Ee(l,d){const v=l[0]-d[0],g=l[1]-d[1],B=l[2]-d[2];return v*v+g*g+B*B}const ue=Ee;function oe(l,d){const v=d??new i(3),g=l[0],B=l[1],$=l[2],K=Math.sqrt(g*g+B*B+$*$);return K>1e-5?(v[0]=g/K,v[1]=B/K,v[2]=$/K):(v[0]=0,v[1]=0,v[2]=0),v}function fe(l,d){const v=d??new i(3);return v[0]=-l[0],v[1]=-l[1],v[2]=-l[2],v}function be(l,d){const v=d??new i(3);return v[0]=l[0],v[1]=l[1],v[2]=l[2],v}const ae=be;function de(l,d,v){const g=v??new i(3);return g[0]=l[0]*d[0],g[1]=l[1]*d[1],g[2]=l[2]*d[2],g}const ke=de;function we(l,d,v){const g=v??new i(3);return g[0]=l[0]/d[0],g[1]=l[1]/d[1],g[2]=l[2]/d[2],g}const Te=we;function Ve(l=1,d){const v=d??new i(3),g=Math.random()*2*Math.PI,B=Math.random()*2-1,$=Math.sqrt(1-B*B)*l;return v[0]=Math.cos(g)*$,v[1]=Math.sin(g)*$,v[2]=B*l,v}function A(l){const d=l??new i(3);return d[0]=0,d[1]=0,d[2]=0,d}function Y(l,d,v){const g=v??new i(3),B=l[0],$=l[1],K=l[2],ie=d[3]*B+d[7]*$+d[11]*K+d[15]||1;return g[0]=(d[0]*B+d[4]*$+d[8]*K+d[12])/ie,g[1]=(d[1]*B+d[5]*$+d[9]*K+d[13])/ie,g[2]=(d[2]*B+d[6]*$+d[10]*K+d[14])/ie,g}function x(l,d,v){const g=v??new i(3),B=l[0],$=l[1],K=l[2];return g[0]=B*d[0*4+0]+$*d[1*4+0]+K*d[2*4+0],g[1]=B*d[0*4+1]+$*d[1*4+1]+K*d[2*4+1],g[2]=B*d[0*4+2]+$*d[1*4+2]+K*d[2*4+2],g}function o(l,d,v){const g=v??new i(3),B=l[0],$=l[1],K=l[2];return g[0]=B*d[0]+$*d[4]+K*d[8],g[1]=B*d[1]+$*d[5]+K*d[9],g[2]=B*d[2]+$*d[6]+K*d[10],g}function m(l,d,v){const g=v??new i(3),B=d[0],$=d[1],K=d[2],ie=d[3]*2,J=l[0],Q=l[1],pe=l[2],xe=$*pe-K*Q,j=K*J-B*pe,_e=B*Q-$*J;return g[0]=J+xe*ie+($*_e-K*j)*2,g[1]=Q+j*ie+(K*xe-B*_e)*2,g[2]=pe+_e*ie+(B*j-$*xe)*2,g}function p(l,d){const v=d??new i(3);return v[0]=l[12],v[1]=l[13],v[2]=l[14],v}function w(l,d,v){const g=v??new i(3),B=d*4;return g[0]=l[B+0],g[1]=l[B+1],g[2]=l[B+2],g}function P(l,d){const v=d??new i(3),g=l[0],B=l[1],$=l[2],K=l[4],ie=l[5],J=l[6],Q=l[8],pe=l[9],xe=l[10];return v[0]=Math.sqrt(g*g+B*B+$*$),v[1]=Math.sqrt(K*K+ie*ie+J*J),v[2]=Math.sqrt(Q*Q+pe*pe+xe*xe),v}function C(l,d,v,g){const B=g??new i(3),$=[],K=[];return $[0]=l[0]-d[0],$[1]=l[1]-d[1],$[2]=l[2]-d[2],K[0]=$[0],K[1]=$[1]*Math.cos(v)-$[2]*Math.sin(v),K[2]=$[1]*Math.sin(v)+$[2]*Math.cos(v),B[0]=K[0]+d[0],B[1]=K[1]+d[1],B[2]=K[2]+d[2],B}function k(l,d,v,g){const B=g??new i(3),$=[],K=[];return $[0]=l[0]-d[0],$[1]=l[1]-d[1],$[2]=l[2]-d[2],K[0]=$[2]*Math.sin(v)+$[0]*Math.cos(v),K[1]=$[1],K[2]=$[2]*Math.cos(v)-$[0]*Math.sin(v),B[0]=K[0]+d[0],B[1]=K[1]+d[1],B[2]=K[2]+d[2],B}function r(l,d,v,g){const B=g??new i(3),$=[],K=[];return $[0]=l[0]-d[0],$[1]=l[1]-d[1],$[2]=l[2]-d[2],K[0]=$[0]*Math.cos(v)-$[1]*Math.sin(v),K[1]=$[0]*Math.sin(v)+$[1]*Math.cos(v),K[2]=$[2],B[0]=K[0]+d[0],B[1]=K[1]+d[1],B[2]=K[2]+d[2],B}function h(l,d,v){const g=v??new i(3);return oe(l,g),D(g,d,g)}function c(l,d,v){const g=v??new i(3);return ne(l)>d?h(l,d,g):be(l,g)}function _(l,d,v){const g=v??new i(3);return R(l,d,.5,g)}return{create:a,fromValues:f,set:y,ceil:b,floor:S,round:T,clamp:V,add:L,addScaled:O,angle:q,subtract:F,sub:X,equalsApproximately:Z,equals:N,lerp:R,lerpV:U,max:z,min:W,mulScalar:D,scale:H,divScalar:re,inverse:ye,invert:he,cross:te,dot:ge,length:ne,len:Oe,lengthSq:Le,lenSq:Ue,distance:Ae,dist:ve,distanceSq:Ee,distSq:ue,normalize:oe,negate:fe,copy:be,clone:ae,multiply:de,mul:ke,divide:we,div:Te,random:Ve,zero:A,transformMat4:Y,transformMat4Upper3x3:x,transformMat3:o,transformQuat:m,getTranslation:p,getAxis:w,getScaling:P,rotateX:C,rotateY:k,rotateZ:r,setLength:h,truncate:c,midpoint:_}}const Zr=new Map;function cs(i){let a=Zr.get(i);return a||(a=Ml(i),Zr.set(i,a)),a}function Al(i){const a=gi(i),f=cs(i);function y(o,m,p,w,P,C,k,r,h){const c=new i(12);return c[3]=0,c[7]=0,c[11]=0,o!==void 0&&(c[0]=o,m!==void 0&&(c[1]=m,p!==void 0&&(c[2]=p,w!==void 0&&(c[4]=w,P!==void 0&&(c[5]=P,C!==void 0&&(c[6]=C,k!==void 0&&(c[8]=k,r!==void 0&&(c[9]=r,h!==void 0&&(c[10]=h))))))))),c}function b(o,m,p,w,P,C,k,r,h,c){const _=c??new i(12);return _[0]=o,_[1]=m,_[2]=p,_[3]=0,_[4]=w,_[5]=P,_[6]=C,_[7]=0,_[8]=k,_[9]=r,_[10]=h,_[11]=0,_}function S(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=o[1],p[2]=o[2],p[3]=0,p[4]=o[4],p[5]=o[5],p[6]=o[6],p[7]=0,p[8]=o[8],p[9]=o[9],p[10]=o[10],p[11]=0,p}function T(o,m){const p=m??new i(12),w=o[0],P=o[1],C=o[2],k=o[3],r=w+w,h=P+P,c=C+C,_=w*r,l=P*r,d=P*h,v=C*r,g=C*h,B=C*c,$=k*r,K=k*h,ie=k*c;return p[0]=1-d-B,p[1]=l+ie,p[2]=v-K,p[3]=0,p[4]=l-ie,p[5]=1-_-B,p[6]=g+$,p[7]=0,p[8]=v+K,p[9]=g-$,p[10]=1-_-d,p[11]=0,p}function V(o,m){const p=m??new i(12);return p[0]=-o[0],p[1]=-o[1],p[2]=-o[2],p[4]=-o[4],p[5]=-o[5],p[6]=-o[6],p[8]=-o[8],p[9]=-o[9],p[10]=-o[10],p}function L(o,m,p){const w=p??new i(12);return w[0]=o[0]*m,w[1]=o[1]*m,w[2]=o[2]*m,w[4]=o[4]*m,w[5]=o[5]*m,w[6]=o[6]*m,w[8]=o[8]*m,w[9]=o[9]*m,w[10]=o[10]*m,w}const O=L;function q(o,m,p){const w=p??new i(12);return w[0]=o[0]+m[0],w[1]=o[1]+m[1],w[2]=o[2]+m[2],w[4]=o[4]+m[4],w[5]=o[5]+m[5],w[6]=o[6]+m[6],w[8]=o[8]+m[8],w[9]=o[9]+m[9],w[10]=o[10]+m[10],w}function F(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=o[1],p[2]=o[2],p[4]=o[4],p[5]=o[5],p[6]=o[6],p[8]=o[8],p[9]=o[9],p[10]=o[10],p}const X=F;function Z(o,m){return Math.abs(o[0]-m[0])<Ie&&Math.abs(o[1]-m[1])<Ie&&Math.abs(o[2]-m[2])<Ie&&Math.abs(o[4]-m[4])<Ie&&Math.abs(o[5]-m[5])<Ie&&Math.abs(o[6]-m[6])<Ie&&Math.abs(o[8]-m[8])<Ie&&Math.abs(o[9]-m[9])<Ie&&Math.abs(o[10]-m[10])<Ie}function N(o,m){return o[0]===m[0]&&o[1]===m[1]&&o[2]===m[2]&&o[4]===m[4]&&o[5]===m[5]&&o[6]===m[6]&&o[8]===m[8]&&o[9]===m[9]&&o[10]===m[10]}function R(o){const m=o??new i(12);return m[0]=1,m[1]=0,m[2]=0,m[4]=0,m[5]=1,m[6]=0,m[8]=0,m[9]=0,m[10]=1,m}function U(o,m){const p=m??new i(12);if(p===o){let d;return d=o[1],o[1]=o[4],o[4]=d,d=o[2],o[2]=o[8],o[8]=d,d=o[6],o[6]=o[9],o[9]=d,p}const w=o[0*4+0],P=o[0*4+1],C=o[0*4+2],k=o[1*4+0],r=o[1*4+1],h=o[1*4+2],c=o[2*4+0],_=o[2*4+1],l=o[2*4+2];return p[0]=w,p[1]=k,p[2]=c,p[4]=P,p[5]=r,p[6]=_,p[8]=C,p[9]=h,p[10]=l,p}function z(o,m){const p=m??new i(12),w=o[0*4+0],P=o[0*4+1],C=o[0*4+2],k=o[1*4+0],r=o[1*4+1],h=o[1*4+2],c=o[2*4+0],_=o[2*4+1],l=o[2*4+2],d=l*r-h*_,v=-l*k+h*c,g=_*k-r*c,B=1/(w*d+P*v+C*g);return p[0]=d*B,p[1]=(-l*P+C*_)*B,p[2]=(h*P-C*r)*B,p[4]=v*B,p[5]=(l*w-C*c)*B,p[6]=(-h*w+C*k)*B,p[8]=g*B,p[9]=(-_*w+P*c)*B,p[10]=(r*w-P*k)*B,p}function W(o){const m=o[0],p=o[0*4+1],w=o[0*4+2],P=o[1*4+0],C=o[1*4+1],k=o[1*4+2],r=o[2*4+0],h=o[2*4+1],c=o[2*4+2];return m*(C*c-h*k)-P*(p*c-h*w)+r*(p*k-C*w)}const D=z;function H(o,m,p){const w=p??new i(12),P=o[0],C=o[1],k=o[2],r=o[4+0],h=o[4+1],c=o[4+2],_=o[8+0],l=o[8+1],d=o[8+2],v=m[0],g=m[1],B=m[2],$=m[4+0],K=m[4+1],ie=m[4+2],J=m[8+0],Q=m[8+1],pe=m[8+2];return w[0]=P*v+r*g+_*B,w[1]=C*v+h*g+l*B,w[2]=k*v+c*g+d*B,w[4]=P*$+r*K+_*ie,w[5]=C*$+h*K+l*ie,w[6]=k*$+c*K+d*ie,w[8]=P*J+r*Q+_*pe,w[9]=C*J+h*Q+l*pe,w[10]=k*J+c*Q+d*pe,w}const re=H;function ye(o,m,p){const w=p??R();return o!==w&&(w[0]=o[0],w[1]=o[1],w[2]=o[2],w[4]=o[4],w[5]=o[5],w[6]=o[6]),w[8]=m[0],w[9]=m[1],w[10]=1,w}function he(o,m){const p=m??a.create();return p[0]=o[8],p[1]=o[9],p}function te(o,m,p){const w=p??a.create(),P=m*4;return w[0]=o[P+0],w[1]=o[P+1],w}function ge(o,m,p,w){const P=w===o?o:F(o,w),C=p*4;return P[C+0]=m[0],P[C+1]=m[1],P}function ne(o,m){const p=m??a.create(),w=o[0],P=o[1],C=o[4],k=o[5];return p[0]=Math.sqrt(w*w+P*P),p[1]=Math.sqrt(C*C+k*k),p}function Oe(o,m){const p=m??f.create(),w=o[0],P=o[1],C=o[2],k=o[4],r=o[5],h=o[6],c=o[8],_=o[9],l=o[10];return p[0]=Math.sqrt(w*w+P*P+C*C),p[1]=Math.sqrt(k*k+r*r+h*h),p[2]=Math.sqrt(c*c+_*_+l*l),p}function Le(o,m){const p=m??new i(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=o[0],p[9]=o[1],p[10]=1,p}function Ue(o,m,p){const w=p??new i(12),P=m[0],C=m[1],k=o[0],r=o[1],h=o[2],c=o[1*4+0],_=o[1*4+1],l=o[1*4+2],d=o[2*4+0],v=o[2*4+1],g=o[2*4+2];return o!==w&&(w[0]=k,w[1]=r,w[2]=h,w[4]=c,w[5]=_,w[6]=l),w[8]=k*P+c*C+d,w[9]=r*P+_*C+v,w[10]=h*P+l*C+g,w}function Ae(o,m){const p=m??new i(12),w=Math.cos(o),P=Math.sin(o);return p[0]=w,p[1]=P,p[2]=0,p[4]=-P,p[5]=w,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ve(o,m,p){const w=p??new i(12),P=o[0*4+0],C=o[0*4+1],k=o[0*4+2],r=o[1*4+0],h=o[1*4+1],c=o[1*4+2],_=Math.cos(m),l=Math.sin(m);return w[0]=_*P+l*r,w[1]=_*C+l*h,w[2]=_*k+l*c,w[4]=_*r-l*P,w[5]=_*h-l*C,w[6]=_*c-l*k,o!==w&&(w[8]=o[8],w[9]=o[9],w[10]=o[10]),w}function Ee(o,m){const p=m??new i(12),w=Math.cos(o),P=Math.sin(o);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=w,p[6]=P,p[8]=0,p[9]=-P,p[10]=w,p}function ue(o,m,p){const w=p??new i(12),P=o[4],C=o[5],k=o[6],r=o[8],h=o[9],c=o[10],_=Math.cos(m),l=Math.sin(m);return w[4]=_*P+l*r,w[5]=_*C+l*h,w[6]=_*k+l*c,w[8]=_*r-l*P,w[9]=_*h-l*C,w[10]=_*c-l*k,o!==w&&(w[0]=o[0],w[1]=o[1],w[2]=o[2]),w}function oe(o,m){const p=m??new i(12),w=Math.cos(o),P=Math.sin(o);return p[0]=w,p[1]=0,p[2]=-P,p[4]=0,p[5]=1,p[6]=0,p[8]=P,p[9]=0,p[10]=w,p}function fe(o,m,p){const w=p??new i(12),P=o[0*4+0],C=o[0*4+1],k=o[0*4+2],r=o[2*4+0],h=o[2*4+1],c=o[2*4+2],_=Math.cos(m),l=Math.sin(m);return w[0]=_*P-l*r,w[1]=_*C-l*h,w[2]=_*k-l*c,w[8]=_*r+l*P,w[9]=_*h+l*C,w[10]=_*c+l*k,o!==w&&(w[4]=o[4],w[5]=o[5],w[6]=o[6]),w}const be=Ae,ae=ve;function de(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=0,p[2]=0,p[4]=0,p[5]=o[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ke(o,m,p){const w=p??new i(12),P=m[0],C=m[1];return w[0]=P*o[0*4+0],w[1]=P*o[0*4+1],w[2]=P*o[0*4+2],w[4]=C*o[1*4+0],w[5]=C*o[1*4+1],w[6]=C*o[1*4+2],o!==w&&(w[8]=o[8],w[9]=o[9],w[10]=o[10]),w}function we(o,m){const p=m??new i(12);return p[0]=o[0],p[1]=0,p[2]=0,p[4]=0,p[5]=o[1],p[6]=0,p[8]=0,p[9]=0,p[10]=o[2],p}function Te(o,m,p){const w=p??new i(12),P=m[0],C=m[1],k=m[2];return w[0]=P*o[0*4+0],w[1]=P*o[0*4+1],w[2]=P*o[0*4+2],w[4]=C*o[1*4+0],w[5]=C*o[1*4+1],w[6]=C*o[1*4+2],w[8]=k*o[2*4+0],w[9]=k*o[2*4+1],w[10]=k*o[2*4+2],w}function Ve(o,m){const p=m??new i(12);return p[0]=o,p[1]=0,p[2]=0,p[4]=0,p[5]=o,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function A(o,m,p){const w=p??new i(12);return w[0]=m*o[0*4+0],w[1]=m*o[0*4+1],w[2]=m*o[0*4+2],w[4]=m*o[1*4+0],w[5]=m*o[1*4+1],w[6]=m*o[1*4+2],o!==w&&(w[8]=o[8],w[9]=o[9],w[10]=o[10]),w}function Y(o,m){const p=m??new i(12);return p[0]=o,p[1]=0,p[2]=0,p[4]=0,p[5]=o,p[6]=0,p[8]=0,p[9]=0,p[10]=o,p}function x(o,m,p){const w=p??new i(12);return w[0]=m*o[0*4+0],w[1]=m*o[0*4+1],w[2]=m*o[0*4+2],w[4]=m*o[1*4+0],w[5]=m*o[1*4+1],w[6]=m*o[1*4+2],w[8]=m*o[2*4+0],w[9]=m*o[2*4+1],w[10]=m*o[2*4+2],w}return{add:q,clone:X,copy:F,create:y,determinant:W,equals:N,equalsApproximately:Z,fromMat4:S,fromQuat:T,get3DScaling:Oe,getAxis:te,getScaling:ne,getTranslation:he,identity:R,inverse:z,invert:D,mul:re,mulScalar:O,multiply:H,multiplyScalar:L,negate:V,rotate:ve,rotateX:ue,rotateY:fe,rotateZ:ae,rotation:Ae,rotationX:Ee,rotationY:oe,rotationZ:be,scale:ke,scale3D:Te,scaling:de,scaling3D:we,set:b,setAxis:ge,setTranslation:ye,translate:Ue,translation:Le,transpose:U,uniformScale:A,uniformScale3D:x,uniformScaling:Ve,uniformScaling3D:Y}}const Xr=new Map;function Dl(i){let a=Xr.get(i);return a||(a=Al(i),Xr.set(i,a)),a}function Gl(i){const a=cs(i);function f(r,h,c,_,l,d,v,g,B,$,K,ie,J,Q,pe,xe){const j=new i(16);return r!==void 0&&(j[0]=r,h!==void 0&&(j[1]=h,c!==void 0&&(j[2]=c,_!==void 0&&(j[3]=_,l!==void 0&&(j[4]=l,d!==void 0&&(j[5]=d,v!==void 0&&(j[6]=v,g!==void 0&&(j[7]=g,B!==void 0&&(j[8]=B,$!==void 0&&(j[9]=$,K!==void 0&&(j[10]=K,ie!==void 0&&(j[11]=ie,J!==void 0&&(j[12]=J,Q!==void 0&&(j[13]=Q,pe!==void 0&&(j[14]=pe,xe!==void 0&&(j[15]=xe)))))))))))))))),j}function y(r,h,c,_,l,d,v,g,B,$,K,ie,J,Q,pe,xe,j){const _e=j??new i(16);return _e[0]=r,_e[1]=h,_e[2]=c,_e[3]=_,_e[4]=l,_e[5]=d,_e[6]=v,_e[7]=g,_e[8]=B,_e[9]=$,_e[10]=K,_e[11]=ie,_e[12]=J,_e[13]=Q,_e[14]=pe,_e[15]=xe,_e}function b(r,h){const c=h??new i(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=0,c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=0,c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function S(r,h){const c=h??new i(16),_=r[0],l=r[1],d=r[2],v=r[3],g=_+_,B=l+l,$=d+d,K=_*g,ie=l*g,J=l*B,Q=d*g,pe=d*B,xe=d*$,j=v*g,_e=v*B,De=v*$;return c[0]=1-J-xe,c[1]=ie+De,c[2]=Q-_e,c[3]=0,c[4]=ie-De,c[5]=1-K-xe,c[6]=pe+j,c[7]=0,c[8]=Q+_e,c[9]=pe-j,c[10]=1-K-J,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function T(r,h){const c=h??new i(16);return c[0]=-r[0],c[1]=-r[1],c[2]=-r[2],c[3]=-r[3],c[4]=-r[4],c[5]=-r[5],c[6]=-r[6],c[7]=-r[7],c[8]=-r[8],c[9]=-r[9],c[10]=-r[10],c[11]=-r[11],c[12]=-r[12],c[13]=-r[13],c[14]=-r[14],c[15]=-r[15],c}function V(r,h,c){const _=c??new i(16);return _[0]=r[0]+h[0],_[1]=r[1]+h[1],_[2]=r[2]+h[2],_[3]=r[3]+h[3],_[4]=r[4]+h[4],_[5]=r[5]+h[5],_[6]=r[6]+h[6],_[7]=r[7]+h[7],_[8]=r[8]+h[8],_[9]=r[9]+h[9],_[10]=r[10]+h[10],_[11]=r[11]+h[11],_[12]=r[12]+h[12],_[13]=r[13]+h[13],_[14]=r[14]+h[14],_[15]=r[15]+h[15],_}function L(r,h,c){const _=c??new i(16);return _[0]=r[0]*h,_[1]=r[1]*h,_[2]=r[2]*h,_[3]=r[3]*h,_[4]=r[4]*h,_[5]=r[5]*h,_[6]=r[6]*h,_[7]=r[7]*h,_[8]=r[8]*h,_[9]=r[9]*h,_[10]=r[10]*h,_[11]=r[11]*h,_[12]=r[12]*h,_[13]=r[13]*h,_[14]=r[14]*h,_[15]=r[15]*h,_}const O=L;function q(r,h){const c=h??new i(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=r[3],c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=r[7],c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=r[11],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15],c}const F=q;function X(r,h){return Math.abs(r[0]-h[0])<Ie&&Math.abs(r[1]-h[1])<Ie&&Math.abs(r[2]-h[2])<Ie&&Math.abs(r[3]-h[3])<Ie&&Math.abs(r[4]-h[4])<Ie&&Math.abs(r[5]-h[5])<Ie&&Math.abs(r[6]-h[6])<Ie&&Math.abs(r[7]-h[7])<Ie&&Math.abs(r[8]-h[8])<Ie&&Math.abs(r[9]-h[9])<Ie&&Math.abs(r[10]-h[10])<Ie&&Math.abs(r[11]-h[11])<Ie&&Math.abs(r[12]-h[12])<Ie&&Math.abs(r[13]-h[13])<Ie&&Math.abs(r[14]-h[14])<Ie&&Math.abs(r[15]-h[15])<Ie}function Z(r,h){return r[0]===h[0]&&r[1]===h[1]&&r[2]===h[2]&&r[3]===h[3]&&r[4]===h[4]&&r[5]===h[5]&&r[6]===h[6]&&r[7]===h[7]&&r[8]===h[8]&&r[9]===h[9]&&r[10]===h[10]&&r[11]===h[11]&&r[12]===h[12]&&r[13]===h[13]&&r[14]===h[14]&&r[15]===h[15]}function N(r){const h=r??new i(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function R(r,h){const c=h??new i(16);if(c===r){let Be;return Be=r[1],r[1]=r[4],r[4]=Be,Be=r[2],r[2]=r[8],r[8]=Be,Be=r[3],r[3]=r[12],r[12]=Be,Be=r[6],r[6]=r[9],r[9]=Be,Be=r[7],r[7]=r[13],r[13]=Be,Be=r[11],r[11]=r[14],r[14]=Be,c}const _=r[0*4+0],l=r[0*4+1],d=r[0*4+2],v=r[0*4+3],g=r[1*4+0],B=r[1*4+1],$=r[1*4+2],K=r[1*4+3],ie=r[2*4+0],J=r[2*4+1],Q=r[2*4+2],pe=r[2*4+3],xe=r[3*4+0],j=r[3*4+1],_e=r[3*4+2],De=r[3*4+3];return c[0]=_,c[1]=g,c[2]=ie,c[3]=xe,c[4]=l,c[5]=B,c[6]=J,c[7]=j,c[8]=d,c[9]=$,c[10]=Q,c[11]=_e,c[12]=v,c[13]=K,c[14]=pe,c[15]=De,c}function U(r,h){const c=h??new i(16),_=r[0*4+0],l=r[0*4+1],d=r[0*4+2],v=r[0*4+3],g=r[1*4+0],B=r[1*4+1],$=r[1*4+2],K=r[1*4+3],ie=r[2*4+0],J=r[2*4+1],Q=r[2*4+2],pe=r[2*4+3],xe=r[3*4+0],j=r[3*4+1],_e=r[3*4+2],De=r[3*4+3],Be=Q*De,We=_e*pe,He=$*De,Fe=_e*K,Ke=$*pe,Ye=Q*K,st=d*De,Ne=_e*v,rt=d*pe,at=Q*v,it=d*K,ot=$*v,Me=ie*j,tt=xe*J,Ze=g*j,dt=xe*B,Xe=g*J,Ct=ie*B,wt=_*j,_t=xe*l,Mt=_*J,Ot=ie*l,Yt=_*B,kt=g*l,Zt=Be*B+Fe*J+Ke*j-(We*B+He*J+Ye*j),Vt=We*l+st*J+at*j-(Be*l+Ne*J+rt*j),Tt=He*l+Ne*B+it*j-(Fe*l+st*B+ot*j),Xt=Ye*l+rt*B+ot*J-(Ke*l+at*B+it*J),Je=1/(_*Zt+g*Vt+ie*Tt+xe*Xt);return c[0]=Je*Zt,c[1]=Je*Vt,c[2]=Je*Tt,c[3]=Je*Xt,c[4]=Je*(We*g+He*ie+Ye*xe-(Be*g+Fe*ie+Ke*xe)),c[5]=Je*(Be*_+Ne*ie+rt*xe-(We*_+st*ie+at*xe)),c[6]=Je*(Fe*_+st*g+ot*xe-(He*_+Ne*g+it*xe)),c[7]=Je*(Ke*_+at*g+it*ie-(Ye*_+rt*g+ot*ie)),c[8]=Je*(Me*K+dt*pe+Xe*De-(tt*K+Ze*pe+Ct*De)),c[9]=Je*(tt*v+wt*pe+Ot*De-(Me*v+_t*pe+Mt*De)),c[10]=Je*(Ze*v+_t*K+Yt*De-(dt*v+wt*K+kt*De)),c[11]=Je*(Ct*v+Mt*K+kt*pe-(Xe*v+Ot*K+Yt*pe)),c[12]=Je*(Ze*Q+Ct*_e+tt*$-(Xe*_e+Me*$+dt*Q)),c[13]=Je*(Mt*_e+Me*d+_t*Q-(wt*Q+Ot*_e+tt*d)),c[14]=Je*(wt*$+kt*_e+dt*d-(Yt*_e+Ze*d+_t*$)),c[15]=Je*(Yt*Q+Xe*d+Ot*$-(Mt*$+kt*Q+Ct*d)),c}function z(r){const h=r[0],c=r[0*4+1],_=r[0*4+2],l=r[0*4+3],d=r[1*4+0],v=r[1*4+1],g=r[1*4+2],B=r[1*4+3],$=r[2*4+0],K=r[2*4+1],ie=r[2*4+2],J=r[2*4+3],Q=r[3*4+0],pe=r[3*4+1],xe=r[3*4+2],j=r[3*4+3],_e=ie*j,De=xe*J,Be=g*j,We=xe*B,He=g*J,Fe=ie*B,Ke=_*j,Ye=xe*l,st=_*J,Ne=ie*l,rt=_*B,at=g*l,it=_e*v+We*K+He*pe-(De*v+Be*K+Fe*pe),ot=De*c+Ke*K+Ne*pe-(_e*c+Ye*K+st*pe),Me=Be*c+Ye*v+rt*pe-(We*c+Ke*v+at*pe),tt=Fe*c+st*v+at*K-(He*c+Ne*v+rt*K);return h*it+d*ot+$*Me+Q*tt}const W=U;function D(r,h,c){const _=c??new i(16),l=r[0],d=r[1],v=r[2],g=r[3],B=r[4+0],$=r[4+1],K=r[4+2],ie=r[4+3],J=r[8+0],Q=r[8+1],pe=r[8+2],xe=r[8+3],j=r[12+0],_e=r[12+1],De=r[12+2],Be=r[12+3],We=h[0],He=h[1],Fe=h[2],Ke=h[3],Ye=h[4+0],st=h[4+1],Ne=h[4+2],rt=h[4+3],at=h[8+0],it=h[8+1],ot=h[8+2],Me=h[8+3],tt=h[12+0],Ze=h[12+1],dt=h[12+2],Xe=h[12+3];return _[0]=l*We+B*He+J*Fe+j*Ke,_[1]=d*We+$*He+Q*Fe+_e*Ke,_[2]=v*We+K*He+pe*Fe+De*Ke,_[3]=g*We+ie*He+xe*Fe+Be*Ke,_[4]=l*Ye+B*st+J*Ne+j*rt,_[5]=d*Ye+$*st+Q*Ne+_e*rt,_[6]=v*Ye+K*st+pe*Ne+De*rt,_[7]=g*Ye+ie*st+xe*Ne+Be*rt,_[8]=l*at+B*it+J*ot+j*Me,_[9]=d*at+$*it+Q*ot+_e*Me,_[10]=v*at+K*it+pe*ot+De*Me,_[11]=g*at+ie*it+xe*ot+Be*Me,_[12]=l*tt+B*Ze+J*dt+j*Xe,_[13]=d*tt+$*Ze+Q*dt+_e*Xe,_[14]=v*tt+K*Ze+pe*dt+De*Xe,_[15]=g*tt+ie*Ze+xe*dt+Be*Xe,_}const H=D;function re(r,h,c){const _=c??N();return r!==_&&(_[0]=r[0],_[1]=r[1],_[2]=r[2],_[3]=r[3],_[4]=r[4],_[5]=r[5],_[6]=r[6],_[7]=r[7],_[8]=r[8],_[9]=r[9],_[10]=r[10],_[11]=r[11]),_[12]=h[0],_[13]=h[1],_[14]=h[2],_[15]=1,_}function ye(r,h){const c=h??a.create();return c[0]=r[12],c[1]=r[13],c[2]=r[14],c}function he(r,h,c){const _=c??a.create(),l=h*4;return _[0]=r[l+0],_[1]=r[l+1],_[2]=r[l+2],_}function te(r,h,c,_){const l=_===r?_:q(r,_),d=c*4;return l[d+0]=h[0],l[d+1]=h[1],l[d+2]=h[2],l}function ge(r,h){const c=h??a.create(),_=r[0],l=r[1],d=r[2],v=r[4],g=r[5],B=r[6],$=r[8],K=r[9],ie=r[10];return c[0]=Math.sqrt(_*_+l*l+d*d),c[1]=Math.sqrt(v*v+g*g+B*B),c[2]=Math.sqrt($*$+K*K+ie*ie),c}function ne(r,h,c,_,l){const d=l??new i(16),v=Math.tan(Math.PI*.5-.5*r);if(d[0]=v/h,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=v,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,Number.isFinite(_)){const g=1/(c-_);d[10]=_*g,d[14]=_*c*g}else d[10]=-1,d[14]=-c;return d}function Oe(r,h,c,_=1/0,l){const d=l??new i(16),v=1/Math.tan(r*.5);if(d[0]=v/h,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=v,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,_===1/0)d[10]=0,d[14]=c;else{const g=1/(_-c);d[10]=c*g,d[14]=_*c*g}return d}function Le(r,h,c,_,l,d,v){const g=v??new i(16);return g[0]=2/(h-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(_-c),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(l-d),g[11]=0,g[12]=(h+r)/(r-h),g[13]=(_+c)/(c-_),g[14]=l/(l-d),g[15]=1,g}function Ue(r,h,c,_,l,d,v){const g=v??new i(16),B=h-r,$=_-c,K=l-d;return g[0]=2*l/B,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/$,g[6]=0,g[7]=0,g[8]=(r+h)/B,g[9]=(_+c)/$,g[10]=d/K,g[11]=-1,g[12]=0,g[13]=0,g[14]=l*d/K,g[15]=0,g}function Ae(r,h,c,_,l,d=1/0,v){const g=v??new i(16),B=h-r,$=_-c;if(g[0]=2*l/B,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/$,g[6]=0,g[7]=0,g[8]=(r+h)/B,g[9]=(_+c)/$,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,d===1/0)g[10]=0,g[14]=l;else{const K=1/(d-l);g[10]=l*K,g[14]=d*l*K}return g}const ve=a.create(),Ee=a.create(),ue=a.create();function oe(r,h,c,_){const l=_??new i(16);return a.normalize(a.subtract(h,r,ue),ue),a.normalize(a.cross(c,ue,ve),ve),a.normalize(a.cross(ue,ve,Ee),Ee),l[0]=ve[0],l[1]=ve[1],l[2]=ve[2],l[3]=0,l[4]=Ee[0],l[5]=Ee[1],l[6]=Ee[2],l[7]=0,l[8]=ue[0],l[9]=ue[1],l[10]=ue[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function fe(r,h,c,_){const l=_??new i(16);return a.normalize(a.subtract(r,h,ue),ue),a.normalize(a.cross(c,ue,ve),ve),a.normalize(a.cross(ue,ve,Ee),Ee),l[0]=ve[0],l[1]=ve[1],l[2]=ve[2],l[3]=0,l[4]=Ee[0],l[5]=Ee[1],l[6]=Ee[2],l[7]=0,l[8]=ue[0],l[9]=ue[1],l[10]=ue[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function be(r,h,c,_){const l=_??new i(16);return a.normalize(a.subtract(r,h,ue),ue),a.normalize(a.cross(c,ue,ve),ve),a.normalize(a.cross(ue,ve,Ee),Ee),l[0]=ve[0],l[1]=Ee[0],l[2]=ue[0],l[3]=0,l[4]=ve[1],l[5]=Ee[1],l[6]=ue[1],l[7]=0,l[8]=ve[2],l[9]=Ee[2],l[10]=ue[2],l[11]=0,l[12]=-(ve[0]*r[0]+ve[1]*r[1]+ve[2]*r[2]),l[13]=-(Ee[0]*r[0]+Ee[1]*r[1]+Ee[2]*r[2]),l[14]=-(ue[0]*r[0]+ue[1]*r[1]+ue[2]*r[2]),l[15]=1,l}function ae(r,h){const c=h??new i(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=r[0],c[13]=r[1],c[14]=r[2],c[15]=1,c}function de(r,h,c){const _=c??new i(16),l=h[0],d=h[1],v=h[2],g=r[0],B=r[1],$=r[2],K=r[3],ie=r[1*4+0],J=r[1*4+1],Q=r[1*4+2],pe=r[1*4+3],xe=r[2*4+0],j=r[2*4+1],_e=r[2*4+2],De=r[2*4+3],Be=r[3*4+0],We=r[3*4+1],He=r[3*4+2],Fe=r[3*4+3];return r!==_&&(_[0]=g,_[1]=B,_[2]=$,_[3]=K,_[4]=ie,_[5]=J,_[6]=Q,_[7]=pe,_[8]=xe,_[9]=j,_[10]=_e,_[11]=De),_[12]=g*l+ie*d+xe*v+Be,_[13]=B*l+J*d+j*v+We,_[14]=$*l+Q*d+_e*v+He,_[15]=K*l+pe*d+De*v+Fe,_}function ke(r,h){const c=h??new i(16),_=Math.cos(r),l=Math.sin(r);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=l,c[7]=0,c[8]=0,c[9]=-l,c[10]=_,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function we(r,h,c){const _=c??new i(16),l=r[4],d=r[5],v=r[6],g=r[7],B=r[8],$=r[9],K=r[10],ie=r[11],J=Math.cos(h),Q=Math.sin(h);return _[4]=J*l+Q*B,_[5]=J*d+Q*$,_[6]=J*v+Q*K,_[7]=J*g+Q*ie,_[8]=J*B-Q*l,_[9]=J*$-Q*d,_[10]=J*K-Q*v,_[11]=J*ie-Q*g,r!==_&&(_[0]=r[0],_[1]=r[1],_[2]=r[2],_[3]=r[3],_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function Te(r,h){const c=h??new i(16),_=Math.cos(r),l=Math.sin(r);return c[0]=_,c[1]=0,c[2]=-l,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=l,c[9]=0,c[10]=_,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ve(r,h,c){const _=c??new i(16),l=r[0*4+0],d=r[0*4+1],v=r[0*4+2],g=r[0*4+3],B=r[2*4+0],$=r[2*4+1],K=r[2*4+2],ie=r[2*4+3],J=Math.cos(h),Q=Math.sin(h);return _[0]=J*l-Q*B,_[1]=J*d-Q*$,_[2]=J*v-Q*K,_[3]=J*g-Q*ie,_[8]=J*B+Q*l,_[9]=J*$+Q*d,_[10]=J*K+Q*v,_[11]=J*ie+Q*g,r!==_&&(_[4]=r[4],_[5]=r[5],_[6]=r[6],_[7]=r[7],_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function A(r,h){const c=h??new i(16),_=Math.cos(r),l=Math.sin(r);return c[0]=_,c[1]=l,c[2]=0,c[3]=0,c[4]=-l,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Y(r,h,c){const _=c??new i(16),l=r[0*4+0],d=r[0*4+1],v=r[0*4+2],g=r[0*4+3],B=r[1*4+0],$=r[1*4+1],K=r[1*4+2],ie=r[1*4+3],J=Math.cos(h),Q=Math.sin(h);return _[0]=J*l+Q*B,_[1]=J*d+Q*$,_[2]=J*v+Q*K,_[3]=J*g+Q*ie,_[4]=J*B-Q*l,_[5]=J*$-Q*d,_[6]=J*K-Q*v,_[7]=J*ie-Q*g,r!==_&&(_[8]=r[8],_[9]=r[9],_[10]=r[10],_[11]=r[11],_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function x(r,h,c){const _=c??new i(16);let l=r[0],d=r[1],v=r[2];const g=Math.sqrt(l*l+d*d+v*v);l/=g,d/=g,v/=g;const B=l*l,$=d*d,K=v*v,ie=Math.cos(h),J=Math.sin(h),Q=1-ie;return _[0]=B+(1-B)*ie,_[1]=l*d*Q+v*J,_[2]=l*v*Q-d*J,_[3]=0,_[4]=l*d*Q-v*J,_[5]=$+(1-$)*ie,_[6]=d*v*Q+l*J,_[7]=0,_[8]=l*v*Q+d*J,_[9]=d*v*Q-l*J,_[10]=K+(1-K)*ie,_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,_}const o=x;function m(r,h,c,_){const l=_??new i(16);let d=h[0],v=h[1],g=h[2];const B=Math.sqrt(d*d+v*v+g*g);d/=B,v/=B,g/=B;const $=d*d,K=v*v,ie=g*g,J=Math.cos(c),Q=Math.sin(c),pe=1-J,xe=$+(1-$)*J,j=d*v*pe+g*Q,_e=d*g*pe-v*Q,De=d*v*pe-g*Q,Be=K+(1-K)*J,We=v*g*pe+d*Q,He=d*g*pe+v*Q,Fe=v*g*pe-d*Q,Ke=ie+(1-ie)*J,Ye=r[0],st=r[1],Ne=r[2],rt=r[3],at=r[4],it=r[5],ot=r[6],Me=r[7],tt=r[8],Ze=r[9],dt=r[10],Xe=r[11];return l[0]=xe*Ye+j*at+_e*tt,l[1]=xe*st+j*it+_e*Ze,l[2]=xe*Ne+j*ot+_e*dt,l[3]=xe*rt+j*Me+_e*Xe,l[4]=De*Ye+Be*at+We*tt,l[5]=De*st+Be*it+We*Ze,l[6]=De*Ne+Be*ot+We*dt,l[7]=De*rt+Be*Me+We*Xe,l[8]=He*Ye+Fe*at+Ke*tt,l[9]=He*st+Fe*it+Ke*Ze,l[10]=He*Ne+Fe*ot+Ke*dt,l[11]=He*rt+Fe*Me+Ke*Xe,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const p=m;function w(r,h){const c=h??new i(16);return c[0]=r[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function P(r,h,c){const _=c??new i(16),l=h[0],d=h[1],v=h[2];return _[0]=l*r[0*4+0],_[1]=l*r[0*4+1],_[2]=l*r[0*4+2],_[3]=l*r[0*4+3],_[4]=d*r[1*4+0],_[5]=d*r[1*4+1],_[6]=d*r[1*4+2],_[7]=d*r[1*4+3],_[8]=v*r[2*4+0],_[9]=v*r[2*4+1],_[10]=v*r[2*4+2],_[11]=v*r[2*4+3],r!==_&&(_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}function C(r,h){const c=h??new i(16);return c[0]=r,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function k(r,h,c){const _=c??new i(16);return _[0]=h*r[0*4+0],_[1]=h*r[0*4+1],_[2]=h*r[0*4+2],_[3]=h*r[0*4+3],_[4]=h*r[1*4+0],_[5]=h*r[1*4+1],_[6]=h*r[1*4+2],_[7]=h*r[1*4+3],_[8]=h*r[2*4+0],_[9]=h*r[2*4+1],_[10]=h*r[2*4+2],_[11]=h*r[2*4+3],r!==_&&(_[12]=r[12],_[13]=r[13],_[14]=r[14],_[15]=r[15]),_}return{add:V,aim:oe,axisRotate:m,axisRotation:x,cameraAim:fe,clone:F,copy:q,create:f,determinant:z,equals:Z,equalsApproximately:X,fromMat3:b,fromQuat:S,frustum:Ue,frustumReverseZ:Ae,getAxis:he,getScaling:ge,getTranslation:ye,identity:N,inverse:U,invert:W,lookAt:be,mul:H,mulScalar:O,multiply:D,multiplyScalar:L,negate:T,ortho:Le,perspective:ne,perspectiveReverseZ:Oe,rotate:p,rotateX:we,rotateY:Ve,rotateZ:Y,rotation:o,rotationX:ke,rotationY:Te,rotationZ:A,scale:P,scaling:w,set:y,setAxis:te,setTranslation:re,translate:de,translation:ae,transpose:R,uniformScale:k,uniformScaling:C}}const Qr=new Map;function Ll(i){let a=Qr.get(i);return a||(a=Gl(i),Qr.set(i,a)),a}function Il(i){const a=cs(i);function f(A,Y,x,o){const m=new i(4);return A!==void 0&&(m[0]=A,Y!==void 0&&(m[1]=Y,x!==void 0&&(m[2]=x,o!==void 0&&(m[3]=o)))),m}const y=f;function b(A,Y,x,o,m){const p=m??new i(4);return p[0]=A,p[1]=Y,p[2]=x,p[3]=o,p}function S(A,Y,x){const o=x??new i(4),m=Y*.5,p=Math.sin(m);return o[0]=p*A[0],o[1]=p*A[1],o[2]=p*A[2],o[3]=Math.cos(m),o}function T(A,Y){const x=Y??a.create(3),o=Math.acos(A[3])*2,m=Math.sin(o*.5);return m>Ie?(x[0]=A[0]/m,x[1]=A[1]/m,x[2]=A[2]/m):(x[0]=1,x[1]=0,x[2]=0),{angle:o,axis:x}}function V(A,Y){const x=ne(A,Y);return Math.acos(2*x*x-1)}function L(A,Y,x){const o=x??new i(4),m=A[0],p=A[1],w=A[2],P=A[3],C=Y[0],k=Y[1],r=Y[2],h=Y[3];return o[0]=m*h+P*C+p*r-w*k,o[1]=p*h+P*k+w*C-m*r,o[2]=w*h+P*r+m*k-p*C,o[3]=P*h-m*C-p*k-w*r,o}const O=L;function q(A,Y,x){const o=x??new i(4),m=Y*.5,p=A[0],w=A[1],P=A[2],C=A[3],k=Math.sin(m),r=Math.cos(m);return o[0]=p*r+C*k,o[1]=w*r+P*k,o[2]=P*r-w*k,o[3]=C*r-p*k,o}function F(A,Y,x){const o=x??new i(4),m=Y*.5,p=A[0],w=A[1],P=A[2],C=A[3],k=Math.sin(m),r=Math.cos(m);return o[0]=p*r-P*k,o[1]=w*r+C*k,o[2]=P*r+p*k,o[3]=C*r-w*k,o}function X(A,Y,x){const o=x??new i(4),m=Y*.5,p=A[0],w=A[1],P=A[2],C=A[3],k=Math.sin(m),r=Math.cos(m);return o[0]=p*r+w*k,o[1]=w*r-p*k,o[2]=P*r+C*k,o[3]=C*r-P*k,o}function Z(A,Y,x,o){const m=o??new i(4),p=A[0],w=A[1],P=A[2],C=A[3];let k=Y[0],r=Y[1],h=Y[2],c=Y[3],_=p*k+w*r+P*h+C*c;_<0&&(_=-_,k=-k,r=-r,h=-h,c=-c);let l,d;if(1-_>Ie){const v=Math.acos(_),g=Math.sin(v);l=Math.sin((1-x)*v)/g,d=Math.sin(x*v)/g}else l=1-x,d=x;return m[0]=l*p+d*k,m[1]=l*w+d*r,m[2]=l*P+d*h,m[3]=l*C+d*c,m}function N(A,Y){const x=Y??new i(4),o=A[0],m=A[1],p=A[2],w=A[3],P=o*o+m*m+p*p+w*w,C=P?1/P:0;return x[0]=-o*C,x[1]=-m*C,x[2]=-p*C,x[3]=w*C,x}function R(A,Y){const x=Y??new i(4);return x[0]=-A[0],x[1]=-A[1],x[2]=-A[2],x[3]=A[3],x}function U(A,Y){const x=Y??new i(4),o=A[0]+A[5]+A[10];if(o>0){const m=Math.sqrt(o+1);x[3]=.5*m;const p=.5/m;x[0]=(A[6]-A[9])*p,x[1]=(A[8]-A[2])*p,x[2]=(A[1]-A[4])*p}else{let m=0;A[5]>A[0]&&(m=1),A[10]>A[m*4+m]&&(m=2);const p=(m+1)%3,w=(m+2)%3,P=Math.sqrt(A[m*4+m]-A[p*4+p]-A[w*4+w]+1);x[m]=.5*P;const C=.5/P;x[3]=(A[p*4+w]-A[w*4+p])*C,x[p]=(A[p*4+m]+A[m*4+p])*C,x[w]=(A[w*4+m]+A[m*4+w])*C}return x}function z(A,Y,x,o,m){const p=m??new i(4),w=A*.5,P=Y*.5,C=x*.5,k=Math.sin(w),r=Math.cos(w),h=Math.sin(P),c=Math.cos(P),_=Math.sin(C),l=Math.cos(C);switch(o){case"xyz":p[0]=k*c*l+r*h*_,p[1]=r*h*l-k*c*_,p[2]=r*c*_+k*h*l,p[3]=r*c*l-k*h*_;break;case"xzy":p[0]=k*c*l-r*h*_,p[1]=r*h*l-k*c*_,p[2]=r*c*_+k*h*l,p[3]=r*c*l+k*h*_;break;case"yxz":p[0]=k*c*l+r*h*_,p[1]=r*h*l-k*c*_,p[2]=r*c*_-k*h*l,p[3]=r*c*l+k*h*_;break;case"yzx":p[0]=k*c*l+r*h*_,p[1]=r*h*l+k*c*_,p[2]=r*c*_-k*h*l,p[3]=r*c*l-k*h*_;break;case"zxy":p[0]=k*c*l-r*h*_,p[1]=r*h*l+k*c*_,p[2]=r*c*_+k*h*l,p[3]=r*c*l-k*h*_;break;case"zyx":p[0]=k*c*l-r*h*_,p[1]=r*h*l+k*c*_,p[2]=r*c*_-k*h*l,p[3]=r*c*l+k*h*_;break;default:throw new Error(`Unknown rotation order: ${o}`)}return p}function W(A,Y){const x=Y??new i(4);return x[0]=A[0],x[1]=A[1],x[2]=A[2],x[3]=A[3],x}const D=W;function H(A,Y,x){const o=x??new i(4);return o[0]=A[0]+Y[0],o[1]=A[1]+Y[1],o[2]=A[2]+Y[2],o[3]=A[3]+Y[3],o}function re(A,Y,x){const o=x??new i(4);return o[0]=A[0]-Y[0],o[1]=A[1]-Y[1],o[2]=A[2]-Y[2],o[3]=A[3]-Y[3],o}const ye=re;function he(A,Y,x){const o=x??new i(4);return o[0]=A[0]*Y,o[1]=A[1]*Y,o[2]=A[2]*Y,o[3]=A[3]*Y,o}const te=he;function ge(A,Y,x){const o=x??new i(4);return o[0]=A[0]/Y,o[1]=A[1]/Y,o[2]=A[2]/Y,o[3]=A[3]/Y,o}function ne(A,Y){return A[0]*Y[0]+A[1]*Y[1]+A[2]*Y[2]+A[3]*Y[3]}function Oe(A,Y,x,o){const m=o??new i(4);return m[0]=A[0]+x*(Y[0]-A[0]),m[1]=A[1]+x*(Y[1]-A[1]),m[2]=A[2]+x*(Y[2]-A[2]),m[3]=A[3]+x*(Y[3]-A[3]),m}function Le(A){const Y=A[0],x=A[1],o=A[2],m=A[3];return Math.sqrt(Y*Y+x*x+o*o+m*m)}const Ue=Le;function Ae(A){const Y=A[0],x=A[1],o=A[2],m=A[3];return Y*Y+x*x+o*o+m*m}const ve=Ae;function Ee(A,Y){const x=Y??new i(4),o=A[0],m=A[1],p=A[2],w=A[3],P=Math.sqrt(o*o+m*m+p*p+w*w);return P>1e-5?(x[0]=o/P,x[1]=m/P,x[2]=p/P,x[3]=w/P):(x[0]=0,x[1]=0,x[2]=0,x[3]=1),x}function ue(A,Y){return Math.abs(A[0]-Y[0])<Ie&&Math.abs(A[1]-Y[1])<Ie&&Math.abs(A[2]-Y[2])<Ie&&Math.abs(A[3]-Y[3])<Ie}function oe(A,Y){return A[0]===Y[0]&&A[1]===Y[1]&&A[2]===Y[2]&&A[3]===Y[3]}function fe(A){const Y=A??new i(4);return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y}const be=a.create(),ae=a.create(),de=a.create();function ke(A,Y,x){const o=x??new i(4),m=a.dot(A,Y);return m<-.999999?(a.cross(ae,A,be),a.len(be)<1e-6&&a.cross(de,A,be),a.normalize(be,be),S(be,Math.PI,o),o):m>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(a.cross(A,Y,be),o[0]=be[0],o[1]=be[1],o[2]=be[2],o[3]=1+m,Ee(o,o))}const we=new i(4),Te=new i(4);function Ve(A,Y,x,o,m,p){const w=p??new i(4);return Z(A,o,m,we),Z(Y,x,m,Te),Z(we,Te,2*m*(1-m),w),w}return{create:f,fromValues:y,set:b,fromAxisAngle:S,toAxisAngle:T,angle:V,multiply:L,mul:O,rotateX:q,rotateY:F,rotateZ:X,slerp:Z,inverse:N,conjugate:R,fromMat:U,fromEuler:z,copy:W,clone:D,add:H,subtract:re,sub:ye,mulScalar:he,scale:te,divScalar:ge,dot:ne,lerp:Oe,length:Le,len:Ue,lengthSq:Ae,lenSq:ve,normalize:Ee,equalsApproximately:ue,equals:oe,identity:fe,rotationTo:ke,sqlerp:Ve}}const Jr=new Map;function Rl(i){let a=Jr.get(i);return a||(a=Il(i),Jr.set(i,a)),a}function zl(i){function a(x,o,m,p){const w=new i(4);return x!==void 0&&(w[0]=x,o!==void 0&&(w[1]=o,m!==void 0&&(w[2]=m,p!==void 0&&(w[3]=p)))),w}const f=a;function y(x,o,m,p,w){const P=w??new i(4);return P[0]=x,P[1]=o,P[2]=m,P[3]=p,P}function b(x,o){const m=o??new i(4);return m[0]=Math.ceil(x[0]),m[1]=Math.ceil(x[1]),m[2]=Math.ceil(x[2]),m[3]=Math.ceil(x[3]),m}function S(x,o){const m=o??new i(4);return m[0]=Math.floor(x[0]),m[1]=Math.floor(x[1]),m[2]=Math.floor(x[2]),m[3]=Math.floor(x[3]),m}function T(x,o){const m=o??new i(4);return m[0]=Math.round(x[0]),m[1]=Math.round(x[1]),m[2]=Math.round(x[2]),m[3]=Math.round(x[3]),m}function V(x,o=0,m=1,p){const w=p??new i(4);return w[0]=Math.min(m,Math.max(o,x[0])),w[1]=Math.min(m,Math.max(o,x[1])),w[2]=Math.min(m,Math.max(o,x[2])),w[3]=Math.min(m,Math.max(o,x[3])),w}function L(x,o,m){const p=m??new i(4);return p[0]=x[0]+o[0],p[1]=x[1]+o[1],p[2]=x[2]+o[2],p[3]=x[3]+o[3],p}function O(x,o,m,p){const w=p??new i(4);return w[0]=x[0]+o[0]*m,w[1]=x[1]+o[1]*m,w[2]=x[2]+o[2]*m,w[3]=x[3]+o[3]*m,w}function q(x,o,m){const p=m??new i(4);return p[0]=x[0]-o[0],p[1]=x[1]-o[1],p[2]=x[2]-o[2],p[3]=x[3]-o[3],p}const F=q;function X(x,o){return Math.abs(x[0]-o[0])<Ie&&Math.abs(x[1]-o[1])<Ie&&Math.abs(x[2]-o[2])<Ie&&Math.abs(x[3]-o[3])<Ie}function Z(x,o){return x[0]===o[0]&&x[1]===o[1]&&x[2]===o[2]&&x[3]===o[3]}function N(x,o,m,p){const w=p??new i(4);return w[0]=x[0]+m*(o[0]-x[0]),w[1]=x[1]+m*(o[1]-x[1]),w[2]=x[2]+m*(o[2]-x[2]),w[3]=x[3]+m*(o[3]-x[3]),w}function R(x,o,m,p){const w=p??new i(4);return w[0]=x[0]+m[0]*(o[0]-x[0]),w[1]=x[1]+m[1]*(o[1]-x[1]),w[2]=x[2]+m[2]*(o[2]-x[2]),w[3]=x[3]+m[3]*(o[3]-x[3]),w}function U(x,o,m){const p=m??new i(4);return p[0]=Math.max(x[0],o[0]),p[1]=Math.max(x[1],o[1]),p[2]=Math.max(x[2],o[2]),p[3]=Math.max(x[3],o[3]),p}function z(x,o,m){const p=m??new i(4);return p[0]=Math.min(x[0],o[0]),p[1]=Math.min(x[1],o[1]),p[2]=Math.min(x[2],o[2]),p[3]=Math.min(x[3],o[3]),p}function W(x,o,m){const p=m??new i(4);return p[0]=x[0]*o,p[1]=x[1]*o,p[2]=x[2]*o,p[3]=x[3]*o,p}const D=W;function H(x,o,m){const p=m??new i(4);return p[0]=x[0]/o,p[1]=x[1]/o,p[2]=x[2]/o,p[3]=x[3]/o,p}function re(x,o){const m=o??new i(4);return m[0]=1/x[0],m[1]=1/x[1],m[2]=1/x[2],m[3]=1/x[3],m}const ye=re;function he(x,o){return x[0]*o[0]+x[1]*o[1]+x[2]*o[2]+x[3]*o[3]}function te(x){const o=x[0],m=x[1],p=x[2],w=x[3];return Math.sqrt(o*o+m*m+p*p+w*w)}const ge=te;function ne(x){const o=x[0],m=x[1],p=x[2],w=x[3];return o*o+m*m+p*p+w*w}const Oe=ne;function Le(x,o){const m=x[0]-o[0],p=x[1]-o[1],w=x[2]-o[2],P=x[3]-o[3];return Math.sqrt(m*m+p*p+w*w+P*P)}const Ue=Le;function Ae(x,o){const m=x[0]-o[0],p=x[1]-o[1],w=x[2]-o[2],P=x[3]-o[3];return m*m+p*p+w*w+P*P}const ve=Ae;function Ee(x,o){const m=o??new i(4),p=x[0],w=x[1],P=x[2],C=x[3],k=Math.sqrt(p*p+w*w+P*P+C*C);return k>1e-5?(m[0]=p/k,m[1]=w/k,m[2]=P/k,m[3]=C/k):(m[0]=0,m[1]=0,m[2]=0,m[3]=0),m}function ue(x,o){const m=o??new i(4);return m[0]=-x[0],m[1]=-x[1],m[2]=-x[2],m[3]=-x[3],m}function oe(x,o){const m=o??new i(4);return m[0]=x[0],m[1]=x[1],m[2]=x[2],m[3]=x[3],m}const fe=oe;function be(x,o,m){const p=m??new i(4);return p[0]=x[0]*o[0],p[1]=x[1]*o[1],p[2]=x[2]*o[2],p[3]=x[3]*o[3],p}const ae=be;function de(x,o,m){const p=m??new i(4);return p[0]=x[0]/o[0],p[1]=x[1]/o[1],p[2]=x[2]/o[2],p[3]=x[3]/o[3],p}const ke=de;function we(x){const o=x??new i(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function Te(x,o,m){const p=m??new i(4),w=x[0],P=x[1],C=x[2],k=x[3];return p[0]=o[0]*w+o[4]*P+o[8]*C+o[12]*k,p[1]=o[1]*w+o[5]*P+o[9]*C+o[13]*k,p[2]=o[2]*w+o[6]*P+o[10]*C+o[14]*k,p[3]=o[3]*w+o[7]*P+o[11]*C+o[15]*k,p}function Ve(x,o,m){const p=m??new i(4);return Ee(x,p),W(p,o,p)}function A(x,o,m){const p=m??new i(4);return te(x)>o?Ve(x,o,p):oe(x,p)}function Y(x,o,m){const p=m??new i(4);return N(x,o,.5,p)}return{create:a,fromValues:f,set:y,ceil:b,floor:S,round:T,clamp:V,add:L,addScaled:O,subtract:q,sub:F,equalsApproximately:X,equals:Z,lerp:N,lerpV:R,max:U,min:z,mulScalar:W,scale:D,divScalar:H,inverse:re,invert:ye,dot:he,length:te,len:ge,lengthSq:ne,lenSq:Oe,distance:Le,dist:Ue,distanceSq:Ae,distSq:ve,normalize:Ee,negate:ue,copy:oe,clone:fe,multiply:be,mul:ae,divide:de,div:ke,zero:we,transformMat4:Te,setLength:Ve,truncate:A,midpoint:Y}}const ei=new Map;function Ul(i){let a=ei.get(i);return a||(a=zl(i),ei.set(i,a)),a}function qs(i,a,f,y,b,S){return{mat3:Dl(i),mat4:Ll(a),quat:Rl(f),vec2:gi(y),vec3:cs(b),vec4:Ul(S)}}const{mat3:Et,mat4:pt,quat:ft,vec2:ti,vec3:I,vec4:Qc}=qs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);qs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);qs(Tl,Array,Array,Array,Array,Array);const ni=document.querySelector("#log");let gt=null,dn=null;function bi(){if(gt)return gt;gt=document.createElement("div"),gt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",gt.appendChild(i),dn=document.createElement("div"),dn.className="ply-spinner-label",gt.appendChild(dn),gt.style.display="none",document.body.appendChild(gt),gt}function js(i){bi(),dn&&i&&(dn.textContent=i),gt&&(gt.style.opacity="1",gt.style.display="flex")}function Ut(i){bi(),dn&&(dn.textContent=i)}function In(){if(!gt)return;const i=gt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function vi(i,a){if(!ni)return;const f=document.createElement("p");f.innerText=i,a&&Object.assign(f.style,a),ni.appendChild(f)}async function bt(i){console.log(i),vi(i)}async function Ol(i){console.error(i),vi(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let wi;function xi(){wi=performance.now()}function si(i){const a=performance.now()-wi;bt(`⏱️ ${i} Time: ${a.toFixed(0)} ms`)}function Vl(i,a){if(!i)throw new Error(a&&(typeof a=="string"?a:a()))}function zn(i){return i+3&-4}const Fl=2,Nl=3,Wl=5,$l=6,Rn=7,rs=8,is=9,os=10;function ql(i){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(i,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const y=new DataView(i),b=4,S=y.getUint32(b+0,!0),T=y.getUint32(b+4,!0),V=y.getUint32(b+8,!0),L=y.getUint32(b+12,!0),O=y.getUint32(b+16,!0),q=y.getFloat32(b+20,!0),F=y.getUint32(b+24,!0),X=y.getUint32(b+28,!0),Z=y.getFloat32(b+32,!0),N=y.getFloat32(b+36,!0),R=y.getFloat32(b+40,!0),U=y.getUint32(b+44,!0),z=y.getFloat32(b+48,!0),W=y.getFloat32(b+52,!0),D=y.getUint32(b+56,!0),H=y.getUint32(b+60,!0),re=X===is||X===os,ye=re?H:0,he=re?0:H,te=he>0?he:1;if(X===Wl||X===$l)throw new Error(`NAT2: paired-RVQ format=${X} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ge=X===is||X===os;if(X!==Fl&&X!==Nl&&X!==Rn&&X!==rs&&!ge)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${X}`);if(S%4!==0||U%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${S} layer_h=${U}`);let ne=b+64;const Oe=(D+1)*4,Le=new Uint32Array(i.slice(ne,ne+Oe));ne+=Oe;let Ue;if(te>1){const ae=(te+1)*4;if(ne+ae>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ae} from ${ne})`);Ue=new Uint32Array(i.slice(ne,ne+ae)),ne+=ae}else Ue=new Uint32Array([0,S]);let Ae=0;for(let ae=0;ae<te;ae++){const de=Ue[ae+1]-Ue[ae];de>Ae&&(Ae=de)}if(ge){const ae=ye&1?7:6,de=O*ae*4;if(ne+de>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${de} more bytes from offset ${ne}, have ${i.byteLength-ne}`);const ke=new Float32Array(i.slice(ne,ne+de));ne+=de;const we=Math.max(1,ye>>8&255),Te=[];let Ve=0;for(let m=0,p=S,w=U;m<we;m++,p>>=1,w>>=1){const P=Math.max(1,p>>2)*Math.max(1,w>>2)*16;Te.push(P),Ve+=P}const A=i.byteLength-ne;if(A<Ve)throw new Error(`NAT2 probe atlas truncated: need ${Ve} bytes for ${S}x${U} x${we} mips, have ${A}`);const Y=[];let x=ne;for(const m of Te)Y.push(new Uint8Array(i.slice(x,x+m))),x+=m;const o=Y[0];return{width:S,height:T,channels:V,kernel_type:L,num_rects:O,uv_extent:q,sb_number:F,format:X,sh_bias:Z,res_bias:N,compact_mult:R,layer_h:U,atlas_scale:z,atlas_offset:W,n_layers:D,n_cols:te,layer_cuts:Le,column_cuts:Ue,slice_width:Ae,rects_expanded:ke,atlas_bytes:o,mip_bytes:Y,probe_mode:ye&1?2:1}}const ve=O*4*4;if(ne+ve>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${ve} more bytes from offset ${ne}, have ${i.byteLength-ne}`);const Ee=new Float32Array(i.slice(ne,ne+ve));ne+=ve;const ue=new Float32Array(O*5);for(let ae=0;ae<O;ae++){const de=Ee[ae*4+0],ke=Ee[ae*4+1],we=Ee[ae*4+2],Te=Ee[ae*4+3];let Ve=0;for(let m=1;m<=D&&Le[m]<=ke;m++)Ve=m;let A=0;for(let m=1;m<=te&&Ue[m]<=de;m++)A=m;const Y=ke-Le[Ve],x=de-Ue[A],o=A*D+Ve;ue[ae*5+0]=x,ue[ae*5+1]=Y,ue[ae*5+2]=we,ue[ae*5+3]=Te,ue[ae*5+4]=o}let oe;const be=S/4*16;if(X===Rn||X===rs){if(ne+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ae=X===Rn?"BCCB":"ACCB",de=a.decode(new Uint8Array(i,ne,4));if(de!==ae)throw new Error(`NAT2 typeD bad sub-magic: expected '${ae}' got '${de}'`);const ke=y.getUint32(ne+4,!0),we=y.getUint32(ne+8,!0),Te=y.getUint32(ne+12,!0),Ve=y.getUint32(ne+16,!0),A=y.getUint32(ne+20,!0);if(ke!==1)throw new Error(`NAT2 BCCB unsupported version ${ke}`);if(Te!==T/4||Ve!==S/4||A!==Te*Ve)throw new Error(`NAT2 BCCB block grid mismatch: header ${S}×${T}, sub-header ${Ve}×${Te} (${A} blocks)`);ne+=24;const Y=we*16;if(ne+Y>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Y}, have ${i.byteLength-ne})`);const x=new Uint8Array(i,ne,Y);ne+=Y;const o=A*2;if(ne+o>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${o}, have ${i.byteLength-ne})`);const m=new Uint16Array(i.slice(ne,ne+o));ne+=o;const p=new Uint8Array(A*16);for(let w=0;w<A;w++){const P=m[w]*16;p.set(x.subarray(P,P+16),w*16)}oe=p}else{let ae=0;for(let de=0;de<D;de++){const ke=Le[de+1]-Le[de];if(ke%4!==0)throw new Error(`NAT2 BC7 layer ${de} rows ${ke} not 4-aligned`);ae+=ke/4*be}if(ne+ae>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ae} more bytes from offset ${ne}, have ${i.byteLength-ne}`);oe=new Uint8Array(i.slice(ne,ne+ae))}return{width:S,height:T,channels:V,kernel_type:L,num_rects:O,uv_extent:q,sb_number:F,format:X,sh_bias:Z,res_bias:N,compact_mult:R,layer_h:U,atlas_scale:z,atlas_offset:W,n_layers:D,n_cols:te,layer_cuts:Le,column_cuts:Ue,slice_width:Ae,rects_expanded:ue,atlas_bytes:oe}}const jl=32;function Hl(i,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let y,b,S,T;if(a.format===2||a.format===Rn||a.format===is){if(!i.features.has("texture-compression-bc"))return bt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;T=a.format===is?"BC7 atlas (proberes: shared probe texture)":a.format===Rn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:y,view:b,sampler:S}=ri(i,a,"bc7-rgba-unorm",T)}else if(a.format===3||a.format===rs||a.format===os){if(!i.features.has("texture-compression-astc"))return bt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;T=a.format===os?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===rs?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:y,view:b,sampler:S}=ri(i,a,"astc-4x4-unorm",T)}else return bt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:V}=a,L=i.createBuffer({label:"atlas rects (5-stride)",size:zn(V.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(L,0,V);const O=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Us(i,O,a,f),{texture:y,view:b,sampler:S,rectsBuffer:L,texParamsBuffer:O,meta:a}}function ri(i,a,f,y){const{width:b,layer_h:S,n_layers:T,n_cols:V,layer_cuts:L,column_cuts:O,slice_width:q,atlas_bytes:F}=a,Z=b/4*16,N=i.limits.maxTextureDimension2D;if(S>N||q>N)throw new Error(`⚠️  atlas slice dims ${q}x${S} exceed maxTextureDimension2D=${N}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const R=V*T;if(R>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${V} cols × ${T} layers = ${R} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const U=a.mip_bytes??[F],z=U.length,W=i.createTexture({label:y,size:{width:q,height:S,depthOrArrayLayers:R},mipLevelCount:z,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let re=0;re<V;re++){const ye=O[re]/4,he=(O[re+1]-O[re])/4;for(let te=0;te<T;te++){const ge=L[te]/4,ne=(L[te+1]-L[te])/4,Oe=re*T+te,Le=ge*Z+ye*16;i.queue.writeTexture({texture:W,mipLevel:0,origin:{x:0,y:0,z:Oe},aspect:"all"},F,{offset:Le,bytesPerRow:Z,rowsPerImage:ne},{width:he*4,height:ne*4,depthOrArrayLayers:1})}}for(let re=1;re<z;re++){const ye=Math.max(1,q>>re),he=Math.max(1,S>>re);i.queue.writeTexture({texture:W,mipLevel:re,origin:{x:0,y:0,z:0},aspect:"all"},U[re],{offset:0,bytesPerRow:Math.max(1,ye>>2)*16,rowsPerImage:Math.max(1,he>>2)},{width:ye,height:he,depthOrArrayLayers:1})}z>1&&console.log(`[atlas] ${z} mip levels uploaded (trilinear minification)`);const D=W.createView({label:`${y} view`,dimension:"2d-array"}),H=i.createSampler({label:`${y} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:z>1?"linear":"nearest"});return{texture:W,view:D,sampler:H}}function Us(i,a,f,y,b=1){var O;const S=new ArrayBuffer(32),T=new Uint32Array(S),V=new Float32Array(S);T[0]=y?1:0,V[1]=f.atlas_scale,V[2]=f.atlas_offset,V[3]=f.res_bias,T[4]=f.probe_mode?f.probe_mode|0:0,T[5]=f.width|0;const L=(((O=f.mip_bytes)==null?void 0:O.length)??1)>1;T[6]=L&&b!==0?1:0,i.queue.writeBuffer(a,0,S)}async function Os(i,a){bt(`loading ply file from File... : ${i.name}`),js("downloading PLY...");const f=await i.arrayBuffer();try{return await yi(f,a)}finally{In()}}async function Kl(i,a){bt(`loading ply file from URL... : ${i}`),js("downloading PLY...");try{xi();const f=new URL(i,self.location.href).href;return await yi({url:f},a)}finally{In()}}async function yi(i,a){return new Promise((f,y)=>{const b=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});b.onmessage=S=>{var V,L,O,q,F,X,Z,N,R,U,z,W;const T=S.data;if((T==null?void 0:T.type)==="error"){Ol(`PLY worker error: ${T.message??"unknown error"}`),b.terminate(),y(new Error(T.message??"Worker error"));return}else if((T==null?void 0:T.type)==="download_progress"){const D=T.totalBytes,H=T.loadedBytes/(1024*1024),re=D?D/(1024*1024):void 0,ye=(T.speedBps??0)/(1024*1024),he=D?Math.min(99,Math.floor(T.loadedBytes/D*100)):void 0,te=re?`total ${re.toFixed(1)} MB`:"total -- MB",ge=re&&he!==void 0?`${H.toFixed(1)} MB downloaded (${he}%)`:`${H.toFixed(1)} MB downloaded`,ne=`${ye.toFixed(2)} MB/s`;Ut(`downloading PLY ...
${te}, ${ge}
${ne}`);return}else if((T==null?void 0:T.type)==="fetched"){bt(`💾 Fetched (${T.byteLength} bytes)`),si("Download"),Ut("parsing PLY..."),xi();return}else if((T==null?void 0:T.type)==="parse_progress"){const D=T.total??0,H=T.read??0,re=D>0?Math.floor(H/D*100):0;Ut(`parsing PLY ...
${H}/${D} surfels (${re}%)`);return}else if((T==null?void 0:T.type)==="done"){const D=T.num_points,H=T.K,re=T.feature_mode??0,ye=T.sh_bias,he=T.kernel_type,te=T.surfelBuffer,ge=T.svParamsBuffer;bt(`🪐 Total surfels: ${D}, mode=${re===1?"SB":"SV"}, K=${H}, sh_bias=${ye}, kernel_type=${he}`);const Oe=a.createBuffer({label:"surfel input buffer",size:zn(D*jl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Oe,0,te);const Le=ge.byteLength>0?ge.byteLength:16,Ue=a.createBuffer({label:re===1?"color_params buffer (SB)":"color_params buffer (SV)",size:zn(Le),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ge.byteLength>0&&a.queue.writeBuffer(Ue,0,ge),b.terminate(),si("Parse"),f({num_points:D,K:H,feature_mode:re,sh_bias:ye,kernel_type:he,surfel_buffer:Oe,surfel_data:new Float32Array(te),sv_params_buffer:Ue,bbox:T.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:T.centroid??[((((L=(V=T.bbox)==null?void 0:V.min)==null?void 0:L[0])??-1)+(((q=(O=T.bbox)==null?void 0:O.max)==null?void 0:q[0])??1))/2,((((X=(F=T.bbox)==null?void 0:F.min)==null?void 0:X[1])??-1)+(((N=(Z=T.bbox)==null?void 0:Z.max)==null?void 0:N[1])??1))/2,((((U=(R=T.bbox)==null?void 0:R.min)==null?void 0:U[2])??-1)+(((W=(z=T.bbox)==null?void 0:z.max)==null?void 0:W[2])??1))/2]})}},b.onerror=S=>{b.terminate(),y(S)},i instanceof ArrayBuffer?(Ut("parsing PLY..."),b.postMessage({type:"start",plyBuffer:i},[i])):b.postMessage({type:"start_url",url:i.url})})}var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,a){(function(f,y){y(a)})(Yl,function(f){class y{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class b{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class S{constructor(e){this.target=e}}class T extends S{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class V extends S{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class L extends S{constructor(e,t){super(e),this.expanded=t}}class O extends S{constructor(e,t){super(e),this.index=t}}function q(n){return n}function F(n){return n==null}function X(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const N={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class R{static alreadyDisposed(){return new R({type:"alreadydisposed"})}static notBindable(){return new R({type:"notbindable"})}static propertyNotFound(e){return new R({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new R({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=N[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class U{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!U.isBindable(s))throw R.notBindable();if(!(e in s))throw R.propertyNotFound(e);s[e]=t}}class z extends b{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new S(this))}),this}}class W{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const D="tp";function H(n){return(t,s)=>[D,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function re(n,e){return t=>e(n(t))}function ye(n){return n.rawValue}function he(n,e){n.emitter.on("change",re(ye,e)),e(n.rawValue)}function te(n,e,t){he(n.value(e),t)}function ge(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ne(n,e){return t=>{ge(n,e,t)}}function Oe(n,e){he(n,t=>{e.textContent=t??""})}const Le=H("btn");class Ue{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Le()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Le("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Le("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Ae{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ue(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ve{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,E)=>u===E,this.emitter=new W,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:u,sender:this}))}}class Ee{constructor(e){this.emitter=new W,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function ue(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Ee(n):new ve(n,e)}class oe{constructor(e){this.emitter=new W,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:ue(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new oe(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function fe(n,e){const s=Object.keys(e).reduce((u,E)=>{if(u===void 0)return;const G=e[E],ee=G(n[E]);return ee.succeeded?Object.assign(Object.assign({},u),{[E]:ee.value}):void 0},{});return s}function be(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function ae(n){return n===null?!1:typeof n=="object"}function de(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function ke(n){return{custom:e=>de(e)(n),boolean:de(e=>typeof e=="boolean"?e:void 0)(n),number:de(e=>typeof e=="number"?e:void 0)(n),string:de(e=>typeof e=="string"?e:void 0)(n),function:de(e=>typeof e=="function"?e:void 0)(n),constant:e=>de(t=>t===e?e:void 0)(n),raw:de(e=>e)(n),object:e=>de(t=>{if(ae(t))return fe(t,e)})(n),array:e=>de(t=>{if(Array.isArray(t))return be(t,e)})(n)}}const we={optional:ke(!0),required:ke(!1)};function Te(n,e){const t=we.required.object(e)(n);return t.succeeded?t.value:void 0}function Ve(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Y{constructor(e){this.value_=e}static create(e){return[new Y(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const x=H("");function o(n,e){return ne(n,x(void 0,e))}class m extends oe{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Y.create(ue(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const E=e??{};return new m(oe.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(u=E.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,o(e,"disabled")),te(this,"hidden",o(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const w=H(""),P={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(s=>{t.classList.remove(w(void 0,P[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(w(void 0,P[s]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ve({key:"parent",target:m.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function h(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function c(n){return n.ontouchstart!==void 0}function _(){return globalThis}function l(){return _().document}function d(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const v={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(k,"svg");return t.innerHTML=v[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function $(n){n.parentElement&&n.parentElement.removeChild(n)}function K(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ie(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function J(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const Q=H("lbl");function pe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class xe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Q()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Q("l")),te(t.props,"label",E=>{F(E)?this.element.classList.add(Q(void 0,"nol")):(this.element.classList.remove(Q(void 0,"nol")),ie(s),s.appendChild(pe(e,E)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(Q("v")),this.element.appendChild(u),this.valueElement=u}}class j extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new xe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const _e={id:"button",type:"blade",accept(n){const e=we,t=Te(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new j(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:new Ae(n.document,{props:oe.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof j)||!(n.controller.valueController instanceof Ae)?null:new z(n.controller)}};class De extends C{constructor(e){super(e),this.value=e.value}}function Be(){return new oe({positions:ue([],{equals:X})})}class We extends oe{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=oe.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!F(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};te(this,"expanded",s),te(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function He(n,e){let t=0;return h(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Fe(n,e){e.style.height=n.styleHeight}function Ke(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),F(n.get("expandedHeight"))){const t=He(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Fe(n,e)}),Fe(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ye extends b{constructor(e,t){super(e),this.rackApi_=t}}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ne(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function rt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function at(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class it{constructor(e){this.emitter=new W,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw R.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class ot extends b{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new T(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Me extends j{constructor(e,t){super(e,t),this.binding=t.binding}}class tt extends b{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new V(this,t,this.controller_.binding.target.presetKey)})}}class Ze extends j{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function dt(n){return n instanceof wt?n.apiSet_:n instanceof Ye?n.rackApi_.apiSet_:null}function Xe(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw R.shouldNeverHappen();return t}function Ct(n,e,t){if(!U.isBindable(n))throw R.notBindable();return new U(n,e,t)}class wt extends b{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new W,this.apiSet_=new it(dt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>Xe(this.apiSet_,e))}addInput(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,G=this.pool_.createInput(E,Ct(e,t,u.presetKey),u),ee=new ot(G);return this.add(ee,u.index)}addMonitor(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,G=this.pool_.createMonitor(E,Ct(e,t),u),ee=new tt(G);return this.add(ee,u.index)}addFolder(e){return Ne(this,e)}addButton(e){return st(this,e)}addSeparator(e){return rt(this,e)}addTab(e){return at(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Xe(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Me){const s=Xe(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new T(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof De){const s=Xe(this.apiSet_,t);this.emitter_.emit("change",{event:new T(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ze))throw R.shouldNeverHappen();const t=Xe(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new V(t,s.target.read(),s.target.presetKey)})}}class _t extends Ye{constructor(e,t){super(e,new wt(e.rackController,t)),this.emitter_=new W,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new L(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Mt extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Ot{constructor(e,t){const s=H(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Yt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Me&&s.binding===e)return s}return null}function kt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ze&&s.binding===e)return s}return null}function Zt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof De&&s.value===e)return s}return null}function Vt(n){return n instanceof Je?n.rack:n instanceof Mt?n.rackController.rack:null}function Tt(n){const e=Vt(n);return e?e.bcSet_:null}class Xt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new W,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new it(Tt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),Z(e,"parent")?e.parent=this:(e.parent_=this,Ve({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){Z(e,"parent")?e.parent=null:(e.parent_=null,Ve({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Me)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ze)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof De)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Vt(s);if(u){const E=u.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Me)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ze)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof De)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Vt(s);if(u){const E=u.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const E=[];u===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),u===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),u.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Yt(this.find(Me),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=kt(this.find(Ze),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Zt(this.find(De),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Je extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ot(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Xt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&$(e.bladeController.view.element)}}const Un=H("cnt");class On{constructor(e,t){var s;this.className_=H((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Un()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),te(this.foldable_,"completed",ne(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),te(t.props,"title",Ce=>{F(Ce)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const G=e.createElement("div");G.classList.add(this.className_("t")),Oe(t.props.value("title"),G),this.buttonElement.appendChild(G),this.titleElement=G;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Se=t.containerElement;Se.classList.add(this.className_("c")),this.element.appendChild(Se),this.containerElement=Se}}class Qt extends Mt{constructor(e,t){var s;const u=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new Je(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new On(e,{containerElement:E.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,Ke(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Vn={id:"folder",type:"blade",accept(n){const e=we,t=Te(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Qt(n.document,{blade:n.blade,expanded:n.params.expanded,props:oe.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Qt?new _t(n.controller,n.pool):null}};class Dt extends De{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new xe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class xn extends b{}const yn=H("spr");class Pn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(yn("r")),this.element.appendChild(s)}}class Sn extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Pn(e,{viewProps:t.viewProps})}))}}const pn={id:"separator",type:"blade",accept(n){const t=Te(n,{view:we.required.constant("separator")});return t?{params:t}:null},controller(n){return new Sn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Sn?new xn(n.controller):null}},At=H("tbi");class Fn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(At()),t.viewProps.bindClassModifiers(this.element),te(t.props,"selected",E=>{E?this.element.classList.add(At(void 0,"sel")):this.element.classList.remove(At(void 0,"sel"))});const s=e.createElement("button");s.classList.add(At("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(At("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class se{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Fn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class me{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new se(e,{props:t.itemProps,viewProps:m.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Je(e,{blade:Be(),viewProps:m.create()}),this.props=t.props,te(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class le{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Ge extends Ye{constructor(e,t){super(e,new wt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new W,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw R.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new me(t,{itemProps:oe.fromObject({selected:!1,title:e.title}),props:oe.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw R.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw R.shouldNeverHappen();const s=new le(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw R.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new O(this,e.rawValue)})}}const Re=-1;class Pe{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ue(!0),this.selectedIndex=ue(Re),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Re,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const ce=H("tab");class je{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ce(),Un()),t.viewProps.bindClassModifiers(this.element),he(t.empty,ne(this.element,ce(void 0,"nop")));const s=e.createElement("div");s.classList.add(ce("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(ce("i")),this.element.appendChild(u);const E=t.contentsElement;E.classList.add(ce("c")),this.element.appendChild(E),this.contentsElement=E}}class Qe extends Mt{constructor(e,t){const s=new Je(e,{blade:t.blade,viewProps:t.viewProps}),u=new Pe;super({blade:t.blade,rackController:s,view:new je(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new it(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;$(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const lt={id:"tab",type:"blade",accept(n){const e=we,t=Te(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Qe(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new me(n.document,{itemProps:oe.fromObject({selected:!1,title:t.title}),props:oe.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Qe?new Ge(n.controller,n.pool):null}};function vt(n,e){const t=n.accept(e.params);if(!t)return null;const s=we.optional.boolean(e.params.disabled).value,u=we.optional.boolean(e.params.hidden).value;return n.controller({blade:Be(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:m.create({disabled:s,hidden:u})})}class ds{constructor(){this.disabled=!1,this.emitter=new W}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Nn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new W,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Wn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new W,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function $n(n,e){for(;n.length<e;)n.push(void 0)}function qn(n){const e=[];return $n(e,n),ue(e)}function ps(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function hs(n,e){const t=[...ps(n),e];return t.length>n.length?t.splice(0,t.length-n.length):$n(t,n.length),t}class jn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new W,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=hs(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Jt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function xt(n,e){if(n instanceof e)return n;if(n instanceof Jt){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class ct{constructor(e){this.values=oe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Bt{constructor(e){this.values=oe.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class en{constructor(e){this.values=oe.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return F(s)||(u=Math.max(u,s)),F(t)||(u=Math.min(u,t)),u}}class yt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Ft=H("lst");class hn{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Ft("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add(Ft("m")),u.appendChild(g(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,te(this.props_,"options",E=>{K(this.selectElement),E.forEach(G=>{const ee=e.createElement("option");ee.textContent=G.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class tn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new hn(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const fn=H("pop");class Ii{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fn()),t.viewProps.bindClassModifiers(this.element),he(t.shows,ne(this.element,fn(void 0,"v")))}}class Ks{constructor(e,t){this.shows=ue(!1),this.viewProps=t.viewProps,this.view=new Ii(e,{shows:this.shows,viewProps:this.viewProps})}}const Ys=H("txt");class Ri{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ys("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Hn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ri(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);F(u)||(this.value.rawValue=u),this.view.refresh()}}function zi(n){return String(n)}function Zs(n){return n==="false"?!1:!!n}function Xs(n){return zi(n)}class Ui{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Oi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Vi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Oi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Fi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ni{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Fi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function fs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function En(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Cn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=Cn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=Cn(n,e);return u===""?"":s+u}function _s(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=$i(n,e);return s===""?"":t+s}function Qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Wi(n,e);return e+=s.length,s===""?"":s+Cn(n,e)}function qi(n,e){const t=Qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=Cn(n,e);return e+=u.length,t+s+u+_s(n,e)}function ji(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Cn(n,e);return e+=s.length,s===""?"":t+s+_s(n,e)}function Hi(n,e){const t=Qs(n,e);return e+=t.length,t===""?"":t+_s(n,e)}const Ki=fs([qi,ji,Hi]);function Yi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Yi(n,e);return s===""?"":t+s}function Xi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Xi(n,e);return s===""?"":t+s}function Ji(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function eo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Ji(n,e);return s===""?"":t+s}const to=fs([Zi,Qi,eo]),no=fs([to,Ki]);function so(n,e){const t=no(n,e);return e+=t.length,t===""?null:{evaluable:new Ui(t),cursor:e}}function ro(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=er(n,e);if(!s)return null;e=s.cursor,e+=En(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function io(n,e){var t;return(t=so(n,e))!==null&&t!==void 0?t:ro(n,e)}function Js(n,e){const t=io(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=Js(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new Ni(s,u.evaluable)}):null}function oo(n,e,t){t+=En(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=En(e,t).length,{cursor:t,operator:s}):null}function ao(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let E=u.evaluable;for(;;){const G=oo(e,t,s);if(!G)break;s=G.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,E=new Vi(G.operator,E,ee.evaluable)}return E?{cursor:s,evaluable:E}:null}}const lo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>ao(n,e),Js);function er(n,e){return e+=En(n,e).length,lo(n,e)}function co(n){const e=er(n,0);return!e||e.cursor+En(n,e.cursor).length!==n.length?null:e.evaluable}function Gt(n){var e;const t=co(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Gt(n);if(!F(e))return e}return 0}function uo(n){return String(n)}function ht(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const po=ht(0);function Kn(n){return po(n)+"%"}function nr(n){return String(n)}function ms(n){return n}function kn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function E(G){u||(u=!0,G(),u=!1)}n.emitter.on("change",G=>{E(()=>{e.setRawValue(t(n,e),G.options)})}),e.emitter.on("change",G=>{E(()=>{n.setRawValue(s(n,e),G.options)}),E(()=>{e.setRawValue(t(n,e),G.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Tn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Lt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ho(n){return n==="ArrowUp"||n==="ArrowDown"}function sr(n){return ho(n)||n==="ArrowLeft"||n==="ArrowRight"}function gs(n,e){var t,s;const u=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class nn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new W,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,u){const E=(n-e)/(t-e);return s+E*(u-s)}function rr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function ir(n,e){return(n%e+e)%e}const Pt=H("txt");class fo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Pt(),Pt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Pt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Pt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Pt()),this.inputElement.classList.add(Pt("i"));const u=e.createElement("div");u.classList.add(Pt("k")),this.element.appendChild(u),this.knobElement=u;const E=e.createElementNS(k,"svg");E.classList.add(Pt("g")),this.knobElement.appendChild(E);const G=e.createElementNS(k,"path");G.classList.add(Pt("gb")),E.appendChild(G),this.guideBodyElem_=G;const ee=e.createElementNS(k,"path");ee.classList.add(Pt("gh")),E.appendChild(ee),this.guideHeadElem_=ee;const Se=e.createElement("div");Se.classList.add(H("tt")()),this.knobElement.appendChild(Se),this.tooltipElem_=Se,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Pt(void 0,"drg"));return}this.element.classList.add(Pt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Bn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=ue(null),this.view=new fo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new nn(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let G=e;return u!==void 0&&(G=Math.max(G,u)),E!==void 0&&(G=Math.min(G,E)),G}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);F(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,Tn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,Tn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const bs=H("sld");class _o{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(bs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(bs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(bs("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class mo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new _o(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,Lt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vs=H("sldtxt");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vs());const s=e.createElement("div");s.classList.add(vs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(vs("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class ws{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new mo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Bn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new go(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Mn(n,e){n.write(e)}function Yn(n){const e=we;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function or(n){if(n==="inline"||n==="popup")return n}function Nt(n){const e=we;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ar(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function xs(n){return F(n)?null:new Bt(ar(n))}function bo(n){const e=n?xt(n,yt):null;return e?e.step:null}function Zn(n,e){const t=n&&xt(n,yt);return t?rr(t.step):Math.max(rr(e),2)}function _n(n){const e=bo(n);return e??1}function mn(n,e){var t;const s=n&&xt(n,yt),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const Xn=H("ckb");class vo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Xn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Xn("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(Xn("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(Xn("w")),s.appendChild(E);const G=g(e,"check");E.appendChild(G),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class wo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new vo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function xo(n){const e=[],t=xs(n.options);return t&&e.push(t),new Jt(e)}const yo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{options:we.optional.custom(Yn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs,constraint:n=>xo(n.params),writer:n=>Mn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&xt(s,Bt);return u?new tn(e,{props:new oe({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new wo(e,{value:t,viewProps:n.viewProps})}},sn=H("col");class Po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn()),t.foldable.bindExpandedClass(this.element,sn(void 0,"expanded")),te(t.foldable,"completed",ne(this.element,sn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(sn("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(sn("s")),s.appendChild(u),this.swatchElement=u;const E=e.createElement("div");if(E.classList.add(sn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const G=e.createElement("div");G.classList.add(sn("p")),this.element.appendChild(G),this.pickerElement=G}else this.pickerElement=null}}function So(n,e,t){const s=ut(n/255,0,1),u=ut(e/255,0,1),E=ut(t/255,0,1),G=Math.max(s,u,E),ee=Math.min(s,u,E),Se=G-ee;let Ce=0,$e=0;const qe=(ee+G)/2;return Se!==0&&($e=Se/(1-Math.abs(G+ee-1)),s===G?Ce=(u-E)/Se:u===G?Ce=2+(E-s)/Se:Ce=4+(s-u)/Se,Ce=Ce/6+(Ce<0?1:0)),[Ce*360,$e*100,qe*100]}function Eo(n,e,t){const s=(n%360+360)%360,u=ut(e/100,0,1),E=ut(t/100,0,1),G=(1-Math.abs(2*E-1))*u,ee=G*(1-Math.abs(s/60%2-1)),Se=E-G/2;let Ce,$e,qe;return s>=0&&s<60?[Ce,$e,qe]=[G,ee,0]:s>=60&&s<120?[Ce,$e,qe]=[ee,G,0]:s>=120&&s<180?[Ce,$e,qe]=[0,G,ee]:s>=180&&s<240?[Ce,$e,qe]=[0,ee,G]:s>=240&&s<300?[Ce,$e,qe]=[ee,0,G]:[Ce,$e,qe]=[G,0,ee],[(Ce+Se)*255,($e+Se)*255,(qe+Se)*255]}function Co(n,e,t){const s=ut(n/255,0,1),u=ut(e/255,0,1),E=ut(t/255,0,1),G=Math.max(s,u,E),ee=Math.min(s,u,E),Se=G-ee;let Ce;Se===0?Ce=0:G===s?Ce=60*(((u-E)/Se%6+6)%6):G===u?Ce=60*((E-s)/Se+2):Ce=60*((s-u)/Se+4);const $e=G===0?0:Se/G,qe=G;return[Ce,$e*100,qe*100]}function lr(n,e,t){const s=ir(n,360),u=ut(e/100,0,1),E=ut(t/100,0,1),G=E*u,ee=G*(1-Math.abs(s/60%2-1)),Se=E-G;let Ce,$e,qe;return s>=0&&s<60?[Ce,$e,qe]=[G,ee,0]:s>=60&&s<120?[Ce,$e,qe]=[ee,G,0]:s>=120&&s<180?[Ce,$e,qe]=[0,G,ee]:s>=180&&s<240?[Ce,$e,qe]=[0,ee,G]:s>=240&&s<300?[Ce,$e,qe]=[ee,0,G]:[Ce,$e,qe]=[G,0,ee],[(Ce+Se)*255,($e+Se)*255,(qe+Se)*255]}function ko(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function To(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function rn(n){return[n[0],n[1],n[2]]}function cr(n,e){return[n[0],n[1],n[2],e]}const Bo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:ko,rgb:Eo},hsv:{hsl:To,hsv:(n,e,t)=>[n,e,t],rgb:lr},rgb:{hsl:So,hsv:Co,rgb:(n,e,t)=>[n,e,t]}};function Qn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Mo(n,e){return n===e?e:ir(n,e)}function Ao(n,e,t){var s;const u=Qn(e,t);return[e==="rgb"?ut(n[0],0,u[0]):Mo(n[0],u[0]),ut(n[1],0,u[1]),ut(n[2],0,u[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function ur(n,e,t,s){const u=Qn(e,t),E=Qn(e,s);return n.map((G,ee)=>G/u[ee]*E[ee])}function Do(n,e,t){const s=ur(n,e.mode,e.type,"int"),u=Bo[e.mode][t.mode](...s);return ur(u,t.mode,"int",t.type)}function Jn(n,e){return typeof n!="object"||F(n)?!1:e in n&&typeof n[e]=="number"}class ze{static black(e="int"){return new ze([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new ze(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Jn(e,"r")&&Jn(e,"g")&&Jn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Jn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==u[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Ao(e,t,s)}getComponents(e,t="int"){return cr(Do(rn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Wt=H("colp");class Go{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Wt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Wt("hsv"));const u=e.createElement("div");u.classList.add(Wt("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const E=e.createElement("div");E.classList.add(Wt("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const G=e.createElement("div");if(G.classList.add(Wt("rgb")),this.textView_=t.textView,G.appendChild(this.textView_.element),this.element.appendChild(G),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Wt("a"));const Se=e.createElement("div");Se.classList.add(Wt("ap")),Se.appendChild(this.alphaViews_.palette.element),ee.appendChild(Se);const Ce=e.createElement("div");Ce.classList.add(Wt("at")),Ce.appendChild(this.alphaViews_.text.element),ee.appendChild(Ce),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Lo(n){return n==="int"?"int":n==="float"?"float":void 0}function ys(n){const e=we;return Te(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Lo)}),expanded:e.optional.boolean,picker:e.optional.custom(or)})}function on(n){return n?.1:1}function an(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Io(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function St(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Ro={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Ro[s](t)}function pr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new ze(t,"rgb",n):null}}function fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new ze(t,"rgb",n):null}}function mr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),St(e[2],100),St(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function gr(n){return e=>{const t=mr(e);return t?new ze(t,"hsl",n):null}}function br(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),St(e[2],100),St(e[3],100),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=br(e);return t?new ze(t,"hsl",n):null}}function wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function zo(n){const e=wr(n);return e?new ze(e,"rgb","int"):null}function xr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function Uo(n){const e=xr(n);return e?new ze(e,"rgb","int"):null}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new ze(t,"rgb",n):null}}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Er(n){return e=>{const t=Sr(e);return t?new ze(t,"rgb",n):null}}const Oo=[{parser:wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:pr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:yr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Vo(n){return Oo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Ps(n,e="int"){const t=Vo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Cr={int:[zo,Uo,hr("int"),_r("int"),gr("int"),vr("int"),Pr("int"),Er("int")],float:[hr("float"),_r("float"),gr("float"),vr("float"),Pr("float"),Er("float")]};function Fo(n){const e=Cr[n];return t=>{if(typeof t!="string")return ze.black(n);const s=e.reduce((u,E)=>u||E(t),null);return s??ze.black(n)}}function Ss(n){const e=Cr[n];return t=>e.reduce((s,u)=>s||u(t),null)}function kr(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Tr(n,e="#"){const t=rn(n.getComponents("rgb")).map(kr).join("");return`${e}${t}`}function Es(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(kr).join("");return`${e}${s}`}function Br(n,e){const t=ht(e==="float"?2:0);return`rgb(${rn(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function No(n){return e=>Br(e,n)}function es(n,e){const t=ht(2),s=ht(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,G)=>(G===3?t:s)(E)).join(", ")})`}function Wo(n){return e=>es(e,n)}function $o(n){const e=[ht(0),Kn,Kn];return`hsl(${rn(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function qo(n){const e=[ht(0),Kn,Kn,ht(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Mr(n,e){const t=ht(e==="float"?2:0),s=["r","g","b"];return`{${rn(n.getComponents("rgb",e)).map((E,G)=>`${s[G]}: ${t(E)}`).join(", ")}}`}function jo(n){return e=>Mr(e,n)}function Ar(n,e){const t=ht(2),s=ht(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((G,ee)=>{const Se=ee===3?t:s;return`${u[ee]}: ${Se(G)}`}).join(", ")}}`}function Ho(n){return e=>Ar(e,n)}const Ko=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Tr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Es},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:$o},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:qo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Wo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:jo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Ho(e)}],[])];function Cs(n){return Ko.reduce((e,t)=>e||(Io(t.format,n)?t.stringifier:null),null)}const An=H("apl");class Yo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(An()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(An("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(An("c")),s.appendChild(u),this.colorElem_=u;const E=e.createElement("div");E.classList.add(An("m")),this.element.appendChild(E),this.markerElem_=E;const G=e.createElement("div");G.classList.add(An("p")),this.markerElem_.appendChild(G),this.previewElem_=G,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new ze([t[0],t[1],t[2],0],"rgb"),u=new ze([t[0],t[1],t[2],255],"rgb"),E=["to right",es(s),es(u)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=es(e);const G=et(t[3],0,1,0,100);this.markerElem_.style.left=`${G}%`}onValueChange_(){this.update_()}}class Zo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[E,G,ee]=u.getComponents("hsv");this.value.setRawValue(new ze([E,G,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(on(!0),Lt(e));if(t===0)return;const s=this.value.rawValue,[u,E,G,ee]=s.getComponents("hsv");this.value.setRawValue(new ze([u,E,G,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(on(!0),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const gn=H("coltxt");function Xo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const E=n.createElement("option");return E.textContent=u.text,E.value=u.value,s.appendChild(E),s},n.createDocumentFragment())),e}class Qo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(gn("m")),this.modeElem_=Xo(e),this.modeElem_.classList.add(gn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(gn("mm")),u.appendChild(g(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(gn("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,G=>{this.modeElem_.value=G})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(gn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Jo(n){return ht(n==="float"?2:0)}function ea(n,e,t){const s=Qn(n,e)[t];return new ct({min:0,max:s})}function ks(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:on(!1),parser:e.parser,props:oe.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Jo(e.colorType)}),value:ue(0,{constraint:ea(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ta{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=ue(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Qo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ks(e,t,0),ks(e,t,1),ks(e,t,2)];return s.forEach((u,E)=>{kn({primary:this.value,secondary:u.value,forward:G=>G.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(G,ee)=>{const Se=this.colorMode.rawValue,Ce=G.rawValue.getComponents(Se,this.colorType_);return Ce[E]=ee.rawValue,new ze(cr(rn(Ce),Ce[3]),Se,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ts=H("hpl");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ts("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Ts("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Br(new ze([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,E,G,ee]=u.getComponents("hsv");this.value.setRawValue(new ze([s,E,G,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(on(!1),Lt(e));if(t===0)return;const s=this.value.rawValue,[u,E,G,ee]=s.getComponents("hsv");this.value.setRawValue(new ze([u+t,E,G,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(on(!1),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Bs=H("svp"),Dr=64;class ra{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Bs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Dr,s.width=Dr,s.classList.add(Bs("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(Bs("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=d(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,E=this.canvasElement.height,G=e.getImageData(0,0,u,E),ee=G.data;for(let $e=0;$e<E;$e++)for(let qe=0;qe<u;qe++){const ln=et(qe,0,u,0,100),Gn=et($e,0,E,100,0),Ln=lr(s[0],ln,Gn),ts=($e*u+qe)*4;ee[ts]=Ln[0],ee[ts+1]=Ln[1],ee[ts+2]=Ln[2],ee[ts+3]=255}e.putImageData(G,0,0);const Se=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Se}%`;const Ce=et(s[2],0,100,100,0);this.markerElem_.style.top=`${Ce}%`}onValueChange_(){this.update_()}}class ia{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ra(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),u=et(e.point.y,0,e.bounds.height,100,0),[E,,,G]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new ze([E,s,u,G],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s,u,E]=this.value.rawValue.getComponents("hsv"),G=on(!1),ee=mt(G,Lt(e)),Se=mt(G,Tn(e));ee===0&&Se===0||this.value.setRawValue(new ze([t,s+ee,u+Se,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=on(!1),s=mt(t,Lt(e)),u=mt(t,Tn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class oa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new sa(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ia(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Zo(e,{value:this.value,viewProps:this.viewProps}),text:new Bn(e,{parser:Gt,baseStep:.1,props:oe.fromObject({draggingScale:.01,formatter:ht(2)}),value:ue(0,{constraint:new ct({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&kn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const E=s.rawValue.getComponents();return E[3]=u.rawValue,new ze(E,s.rawValue.mode)}}),this.textC_=new ta(e,{colorType:t.colorType,parser:Gt,value:this.value,viewProps:this.viewProps}),this.view=new Go(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ms=H("colsw");class aa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ms("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Ms("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Es(e)}onValueChange_(){this.update_()}}class la{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new aa(e,{value:this.value,viewProps:this.viewProps})}}class As{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new la(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Hn(e,{parser:t.parser,props:oe.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Po(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ks(e,{viewProps:this.viewProps}):null;const u=new oa(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),kn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,G)=>G.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ke(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=J(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ca(n,e){return ze.isColorObject(n)?ze.fromObject(n,e):ze.black(e)}function ua(n){return rn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function da(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function pa(n){return new ze([n>>16&255,n>>8&255,n&255],"rgb")}function ha(n){return new ze([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function fa(n){return typeof n!="number"?ze.black():pa(n)}function _a(n){return typeof n!="number"?ze.black():ha(n)}function ma(n){const e=Cs(n);return e?(t,s)=>{Mn(t,e(s))}:null}function ga(n){const e=n?da:ua;return(t,s)=>{Mn(t,e(s))}}function ba(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function va(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function wa(n,e){return(t,s)=>{n?ba(t,s,e):va(t,s,e)}}function Ds(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function xa(n){return n?e=>Es(e,"0x"):e=>Tr(e,"0x")}function ya(n){return"color"in n||"view"in n&&n.view==="color"}const Pa={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ya(e))return null;const t=ys(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ds(n.params)?_a:fa,equals:ze.equals,writer:n=>ga(Ds(n.params))},controller:n=>{const e=Ds(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new As(n.document,{colorType:"int",expanded:t??!1,formatter:xa(e),parser:Ss("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Sa(n){return ze.isRgbaColorObject(n)}function Ea(n){return e=>ca(e,n)}function Ca(n,e){return t=>n?Ar(t,e):Mr(t,e)}const ka={id:"input-color-object",type:"input",accept:(n,e)=>{if(!ze.isColorObject(n))return null;const t=ys(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ea(an(n.params)),equals:ze.equals,writer:n=>wa(Sa(n.initialValue),an(n.params))},controller:n=>{var e;const t=ze.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,E=(e=an(n.params))!==null&&e!==void 0?e:"int";return new As(n.document,{colorType:E,expanded:s??!1,formatter:Ca(t,E),parser:Ss(E),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ta={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ps(n,an(e));if(!t||!Cs(t))return null;const u=ys(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return Fo((e=an(n.params))!==null&&e!==void 0?e:"int")},equals:ze.equals,writer:n=>{const e=Ps(n.initialValue,an(n.params));if(!e)throw R.shouldNeverHappen();const t=ma(e);if(!t)throw R.notBindable();return t}},controller:n=>{const e=Ps(n.initialValue,an(n.params));if(!e)throw R.shouldNeverHappen();const t=Cs(e);if(!t)throw R.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new As(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Ss(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class $t{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var E,G;return(G=(E=this.components[u])===null||E===void 0?void 0:E.constrain(s))!==null&&G!==void 0?G:s});return this.asm_.fromComponents(t)}}const Gr=H("pndtxt");class Ba{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Gr()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(Gr("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function Ma(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:ue(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>Ma(e,t,u)),this.acs_.forEach((s,u)=>{kn({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[u],backward:(E,G)=>{const ee=t.assembly.toComponents(E.rawValue);return ee[u]=G.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ba(e,{textViews:this.acs_.map(s=>s.view)})}}function Lr(n,e){return"step"in n&&!F(n.step)?new yt(n.step,e):null}function Ir(n){return!F(n.max)&&!F(n.min)?new ct({max:n.max,min:n.min}):!F(n.max)||!F(n.min)?new en({max:n.max,min:n.min}):null}function Aa(n){const e=xt(n,ct);if(e)return[e.values.get("min"),e.values.get("max")];const t=xt(n,en);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Da(n,e){const t=[],s=Lr(n,e);s&&t.push(s);const u=Ir(n);u&&t.push(u);const E=xs(n.options);return E&&t.push(E),new Jt(t)}const Ga={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=we,s=Te(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Yn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Da(n.params,n.initialValue),writer:n=>Mn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&xt(s,Bt);if(u)return new tn(n.document,{props:new oe({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ht(Zn(s,t.rawValue)),G=s&&xt(s,ct);return G?new ws(n.document,{baseStep:_n(s),parser:Gt,sliderProps:new oe({maxValue:G.values.value("max"),minValue:G.values.value("min")}),textProps:oe.fromObject({draggingScale:mn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new Bn(n.document,{baseStep:_n(s),parser:Gt,props:oe.fromObject({draggingScale:mn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class qt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Rr={toComponents:n=>n.getComponents(),fromComponents:n=>new qt(...n)},bn=H("p2d");class La{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,ne(this.element,bn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(bn("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(bn("b")),u.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const E=e.createElement("div");if(E.classList.add(bn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const G=e.createElement("div");G.classList.add(bn("p")),this.element.appendChild(G),this.pickerElement=G}else this.pickerElement=null}}const jt=H("p2dp");class Ia{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(jt()),t.layout==="popup"&&this.element.classList.add(jt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(jt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(k,"svg");u.classList.add(jt("g")),this.padElement.appendChild(u),this.svgElem_=u;const E=e.createElementNS(k,"line");E.classList.add(jt("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const G=e.createElementNS(k,"line");G.classList.add(jt("ax")),G.setAttributeNS(null,"x1","50%"),G.setAttributeNS(null,"y1","0"),G.setAttributeNS(null,"x2","50%"),G.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(G);const ee=e.createElementNS(k,"line");ee.classList.add(jt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Se=e.createElement("div");Se.classList.add(jt("m")),this.padElement.appendChild(Se),this.markerElem_=Se,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=et(e,-s,+s,0,100),E=et(t,-s,+s,0,100),G=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${G}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${G}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function zr(n,e,t){return[mt(e[0],Lt(n)),mt(e[1],Tn(n))*(t?1:-1)]}class Ra{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ia(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=et(e.point.x,0,e.bounds.width,-s,+s),E=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new qt(u,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s]=zr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new qt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=zr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class za{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ks(e,{viewProps:this.viewProps}):null;const E=new Ra(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(G=>{G.addEventListener("blur",this.onPopupChildBlur_),G.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new Gs(e,{assembly:Rr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new La(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),kn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:G=>G.rawValue,backward:(G,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ke(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=J(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class vn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function Ua(n){return vn.isObject(n)?new vn(n.x,n.y,n.z):new vn}function Oa(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Va(n,e){return new $t({assembly:Ur,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z)]})}function Ls(n,e){return{baseStep:_n(e),constraint:e,textProps:oe.fromObject({draggingScale:mn(e,n),formatter:ht(Zn(e,n))})}}const Fa={id:"input-point3d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=we,s=Te(e,{x:t.optional.custom(Nt),y:t.optional.custom(Nt),z:t.optional.custom(Nt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Va(n.params,n.initialValue),equals:vn.equals,writer:n=>Oa},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw R.shouldNeverHappen();return new Gs(n.document,{assembly:Ur,axes:[Ls(e.rawValue.x,t.components[0]),Ls(e.rawValue.y,t.components[1]),Ls(e.rawValue.z,t.components[2])],parser:Gt,value:e,viewProps:n.viewProps})}};class wn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,u=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Or={toComponents:n=>n.getComponents(),fromComponents:n=>new wn(...n)};function Na(n){return wn.isObject(n)?new wn(n.x,n.y,n.z,n.w):new wn}function Wa(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function $a(n,e){return new $t({assembly:Or,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z),It("w"in n?n.w:void 0,e.w)]})}function qa(n,e){return{baseStep:_n(e),constraint:e,textProps:oe.fromObject({draggingScale:mn(e,n),formatter:ht(Zn(e,n))})}}const ja={id:"input-point4d",type:"input",accept:(n,e)=>{if(!wn.isObject(n))return null;const t=we,s=Te(e,{x:t.optional.custom(Nt),y:t.optional.custom(Nt),z:t.optional.custom(Nt),w:t.optional.custom(Nt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Na,constraint:n=>$a(n.params,n.initialValue),equals:wn.equals,writer:n=>Wa},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw R.shouldNeverHappen();return new Gs(n.document,{assembly:Or,axes:e.rawValue.getComponents().map((s,u)=>qa(s,t.components[u])),parser:Gt,value:e,viewProps:n.viewProps})}};function Ha(n){const e=[],t=xs(n.options);return t&&e.push(t),new Jt(e)}const Ka={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Te(e,{options:we.optional.custom(Yn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr,constraint:n=>Ha(n.params),writer:n=>Mn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&xt(s,Bt);return u?new tn(e,{props:new oe({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new Hn(e,{parser:E=>E,props:oe.fromObject({formatter:ms}),value:t,viewProps:n.viewProps})}},Dn={monitor:{defaultInterval:200,defaultLineCount:3}},Vr=H("mll");class Ya{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Vr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ya(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Fr=H("sgl");class Za{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Fr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Rs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Za(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Xa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{lineCount:we.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs},controller:n=>{var e;return n.value.rawValue.length===1?new Rs(n.document,{formatter:Xs,value:n.value,viewProps:n.viewProps}):new Is(n.document,{formatter:Xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Dn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ht=H("grl");class Qa{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ht()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(k,"svg");s.classList.add(Ht("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(k,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const E=e.createElement("div");E.classList.add(Ht("t"),H("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach(($e,qe)=>{if($e===void 0)return;const ln=et(qe,0,t,0,e.width),Gn=et($e,s,u,e.height,0);E.push([ln,Gn].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const G=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){G.classList.remove(Ht("t","a"));return}const Se=et(this.cursor_.rawValue,0,t,0,e.width),Ce=et(ee,s,u,e.height,0);G.style.left=`${Se}px`,G.style.top=`${Ce}px`,G.textContent=`${this.formatter_(ee)}`,G.classList.contains(Ht("t","a"))||(G.classList.add(Ht("t","a"),Ht("t","in")),r(G),G.classList.remove(Ht("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ja{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=ue(-1),this.view=new Qa(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!c(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new nn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function zs(n){return"format"in n&&!F(n.format)?n.format:ht(2)}function el(n){var e;return n.value.rawValue.length===1?new Rs(n.document,{formatter:zs(n.params),value:n.value,viewProps:n.viewProps}):new Is(n.document,{formatter:zs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Dn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function tl(n){var e,t,s;return new Ja(n.document,{formatter:zs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Dn.monitor.defaultLineCount,props:oe.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Nr(n){return"view"in n&&n.view==="graph"}const nl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=we,s=Te(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Nr(n)?64:1,reader:n=>tr},controller:n=>Nr(n.params)?tl(n):el(n)},sl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=we,s=Te(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Is(n.document,{formatter:ms,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Dn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Rs(n.document,{formatter:ms,value:t,viewProps:n.viewProps})}};function rl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(F(s))return null;const u=we,E={target:e.target,initialValue:s.initialValue,params:s.params},G=n.binding.reader(E),ee=n.binding.constraint?n.binding.constraint(E):void 0,Se=ue(G(s.initialValue),{constraint:ee,equals:n.binding.equals}),Ce=new Wn({reader:G,target:e.target,value:Se,writer:n.binding.writer(E)}),$e=u.optional.boolean(e.params.disabled).value,qe=u.optional.boolean(e.params.hidden).value,ln=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Ce.value,viewProps:m.create({disabled:$e,hidden:qe})});return new Me(e.document,{binding:Ce,blade:Be(),props:oe.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:ln})}function il(n,e){return e===0?new ds:new Nn(n,e??Dn.monitor.defaultInterval)}function ol(n,e){var t,s,u;const E=we,G=n.accept(e.target.read(),e.params);if(F(G))return null;const ee={target:e.target,initialValue:G.initialValue,params:G.params},Se=n.binding.reader(ee),Ce=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(G.params))!==null&&s!==void 0?s:1,$e=E.optional.number(e.params.interval).value,qe=new jn({reader:Se,target:e.target,ticker:il(e.document,$e),value:qn(Ce)}),ln=E.optional.boolean(e.params.disabled).value,Gn=E.optional.boolean(e.params.hidden).value,Ln=n.controller({document:e.document,params:G.params,value:qe.value,viewProps:m.create({disabled:ln,hidden:Gn})});return new Ze(e.document,{binding:qe,blade:Be(),props:oe.fromObject({label:"label"in e.params?(u=E.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:Ln})}class al{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(F(u))throw new R({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((G,ee)=>G??rl(ee,{document:e,target:t,params:s}),null);if(E)return E;throw new R({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((E,G)=>E??ol(G,{document:e,params:s,target:t}),null);if(u)return u;throw new R({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,E)=>u??vt(E,{document:e,params:t}),null);if(!s)throw new R({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Me)return new ot(e);if(e instanceof Ze)return new tt(e);if(e instanceof Je)return new wt(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw R.shouldNeverHappen();return t}}function ll(){const n=new al;return[fl,Fa,ja,Ka,Ga,Ta,ka,Pa,yo,Xa,sl,nl,_e,Vn,pn,lt].forEach(e=>{n.register(e)}),n}function cl(n){return qt.isObject(n)?new qt(n.x,n.y):new qt}function ul(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function It(n,e){if(!n)return;const t=[],s=Lr(n,e);s&&t.push(s);const u=Ir(n);return u&&t.push(u),new Jt(t)}function dl(n,e){return new $t({assembly:Rr,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y)]})}function Wr(n,e){const[t,s]=n?Aa(n):[];if(!F(t)||!F(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=_n(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function pl(n,e){const t=e instanceof $t?e.components[0]:void 0,s=e instanceof $t?e.components[1]:void 0,u=Wr(t,n.x),E=Wr(s,n.y);return Math.max(u,E)}function $r(n,e){return{baseStep:_n(e),constraint:e,textProps:oe.fromObject({draggingScale:mn(e,n),formatter:ht(Zn(e,n))})}}function hl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const fl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!qt.isObject(n))return null;const t=we,s=Te(e,{expanded:t.optional.boolean,picker:t.optional.custom(or),x:t.optional.custom(Nt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cl,constraint:n=>dl(n.params,n.initialValue),equals:qt.equals,writer:n=>ul},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof $t))throw R.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new za(e,{axes:[$r(t.rawValue.x,s.components[0]),$r(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:hl(n.params),maxValue:pl(t.rawValue,s),parser:Gt,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class qr extends b{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class jr extends b{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Hr extends b{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const _l=function(){return{id:"list",type:"blade",accept(n){const e=we,t=Te(n,{options:e.required.custom(Yn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Bt(ar(n.params.options)),t=ue(n.params.value,{constraint:e}),s=new tn(n.document,{props:new oe({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Dt(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Dt)||!(n.controller.valueController instanceof tn)?null:new qr(n.controller)}}}();function ml(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function gl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class bl extends _t{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Me).map(s=>s.binding);gl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Me).map(t=>t.binding.target);return ml(e)}refresh(){this.controller_.rackController.rack.find(Me).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ze).forEach(e=>{e.binding.read()})}}class vl extends Qt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const wl={id:"slider",type:"blade",accept(n){const e=we,t=Te(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new ct({max:n.params.max,min:n.params.min}),E=new ws(n.document,{baseStep:1,parser:Gt,sliderProps:new oe({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:oe.fromObject({draggingScale:mn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:uo}),value:ue(s,{constraint:u}),viewProps:n.viewProps});return new Dt(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof Dt)||!(n.controller.valueController instanceof ws)?null:new jr(n.controller)}},xl=function(){return{id:"text",type:"blade",accept(n){const e=we,t=Te(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Hn(n.document,{parser:n.params.parse,props:oe.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:ue(n.params.value),viewProps:n.viewProps});return new Dt(n.document,{blade:n.blade,props:oe.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Dt)||!(n.controller.valueController instanceof Hn)?null:new Hr(n.controller)}}}();function yl(n){const e=n.createElement("div");return e.classList.add(H("dfw")()),n.body&&n.body.appendChild(e),e}function Kr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Pl extends bl{constructor(e){var t,s;const u=e??{},E=(t=u.document)!==null&&t!==void 0?t:l(),G=ll(),ee=new vl(E,{expanded:u.expanded,blade:Be(),props:oe.fromObject({title:u.title}),viewProps:m.create()});super(ee,G),this.pool_=G,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:yl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw R.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw R.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Kr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Kr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[wl,_l,lt,xl]})}}const Sl=new y("3.1.10");f.BladeApi=b,f.ButtonApi=z,f.FolderApi=_t,f.InputBindingApi=ot,f.ListApi=qr,f.MonitorBindingApi=tt,f.Pane=Pl,f.SeparatorApi=xn,f.SliderApi=jr,f.TabApi=Ge,f.TabPageApi=le,f.TextApi=Hr,f.TpChangeEvent=T,f.VERSION=Sl,Object.defineProperty(f,"__esModule",{value:!0})})})(Vs,Vs.exports);var Zl=Vs.exports;const Xl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,ii=`// 2DGS render — vertex+fragment.
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
`,Ql=`// Hybrid-transparency composite (HTGS Eq. 17, K=1 hardware form).
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
`,Jl=`const WG_SIZE = 256u;
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
}`,ec=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
        sort_depths[store_idx]  = bitcast<u32>(depth);
        sort_indices[store_idx] = store_idx;
    }
}
`,tc=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,nc=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
`,sc=`// shader implementing gpu radix sort.

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
`,rc=`// shader implementing gpu radix sort.

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
`,ic=`// ============================================================================
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
}`,Pi=32,Fs=1,Ns=2,oi=4,Ws=8,Si=4,oc=7<<Si,ai=128,li=256,ci=512,ui=1024,ac=0,Kt=new ArrayBuffer(Pi),nt={canvas_size:new Uint32Array(Kt,0,2),accel_flags:new Uint32Array(Kt,8,1),feature_mode:new Uint32Array(Kt,12,1),gaussian_scaling:new Float32Array(Kt,16,1),sh_bias:new Float32Array(Kt,20,1),color_K:new Uint32Array(Kt,24,1),walltime:new Float32Array(Kt,28,1)};function lc(i){nt.canvas_size[0]=i.width>>>0,nt.canvas_size[1]=i.height>>>0,nt.accel_flags[0]=(i.accel_flags??Fs|Ns)>>>0,nt.feature_mode[0]=(i.feature_mode??ac)>>>0,nt.gaussian_scaling[0]=i.gaussian_scaling??1,nt.sh_bias[0]=i.sh_bias??.5,nt.color_K[0]=(i.color_K??0)>>>0,nt.walltime[0]=i.walltime??0}function Ei(i,a){i.queue.writeBuffer(a,0,Kt)}function us(i,a,f){f&&i&&a&&Ei(i,a)}function ns(i,a,f,y,b=!0){nt.canvas_size[0]=i>>>0,nt.canvas_size[1]=a>>>0,us(f??null,y??null,b)}function di(i,a,f,y=!0){nt.gaussian_scaling[0]=i,us(a??null,f??null,y)}function pi(i,a,f,y=!0){nt.sh_bias[0]=i,us(a??null,f??null,y)}function zt(i,a,f,y=!0){let b=nt.accel_flags[0];if(i.oac!==void 0&&(b=i.oac?b|Fs:b&~Fs),i.spr!==void 0&&(b=i.spr?b|Ns:b&~Ns),i.bfc!==void 0&&(b=i.bfc?b|oi:b&~oi),i.meshCull!==void 0&&(b=i.meshCull?b|Ws:b&~Ws),i.meshSampleMode!==void 0){const S=(i.meshSampleMode&7)<<Si;b=b&~oc|S}i.meshSilhouetteCull!==void 0&&(b=i.meshSilhouetteCull?b|ai:b&~ai),i.meshInvertDepth!==void 0&&(b=i.meshInvertDepth?b|li:b&~li),i.hypLegacy!==void 0&&(b=i.hypLegacy?b|ci:b&~ci),i.legacyPos!==void 0&&(b=i.legacyPos?b|ui:b&~ui),nt.accel_flags[0]=b>>>0,us(a??null,f??null,y)}const cc=256;function hi(i,a){const f=[],y=[];let b=!0;for(const S of i.split(`
`)){const T=S.trim();let V;if((V=/^\/\/#if\s+(\w+)\s*$/.exec(T))!==null){const L=!!a[V[1]];y.push({parent:b,taken:L}),b=b&&L;continue}if(/^\/\/#else\s*$/.test(T)){const L=y[y.length-1];if(L===void 0)throw new Error("preprocessWGSL: #else without #if");b=L.parent&&!L.taken;continue}if(/^\/\/#endif\s*$/.test(T)){const L=y.pop();if(L===void 0)throw new Error("preprocessWGSL: #endif without #if");b=L.parent;continue}b&&f.push(S)}if(y.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const uc=Pi,dc=8,pc=96,hc=12,Hs=8,Rt=1<<Hs,un=256,as=32/Hs,fc=0,fi=as&1;function _i(i,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function _c(i,a){const f=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=i.createPipelineLayout({bindGroupLayouts:[f]}),b=S=>i.createComputePipeline({layout:y,compute:{module:a,entryPoint:S,constants:{WG_SIZE:un}}});return{l0TileScan:b("prefix_l0_tile_scan"),l1TileScanOnL0:b("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:b("prefix_scan_l1_sums"),addL1ToL0:b("prefix_add_l1_to_l0_offsets"),addL0ToElems:b("prefix_add_l0_to_elements"),computeDigitBase:b("compute_digit_base"),prefixBindGroupLayout:f}}function mc(i,a,f){const y=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),b=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),S=i.createPipelineLayout({bindGroupLayouts:[y]}),T=i.createPipelineLayout({bindGroupLayouts:[b]}),V=[];for(let L=0;L<as;L++){const O={PASS_ID:L+fc,RS_RADIX_LOG2:Hs,RS_RADIX_SIZE:Rt};V.push({localHistogram:i.createComputePipeline({layout:S,compute:{module:a,entryPoint:"local_histogram_pass",constants:O}}),scatterElements:i.createComputePipeline({layout:T,compute:{module:f,entryPoint:"scatter_elements",constants:O}})})}return{passes:V,localHistogramBindGroupLayout:y,scatterBindGroupLayout:b}}function gc(i){const a=i.createShaderModule({label:"local histogram",code:rc}),f=i.createShaderModule({label:"scatter",code:sc}),y=i.createShaderModule({label:"blelloch prefix",code:ic}),b=_c(i,y),S=mc(i,a,f);return{localHistogramBindGroupLayout:S.localHistogramBindGroupLayout,scatterBindGroupLayout:S.scatterBindGroupLayout,passes:S.passes,hierarchicalBlelloch:b}}function bc(i){const a=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),y=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),b=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),S=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(S,0,new ArrayBuffer(32));const T={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:y,rectsBuffer:b,texParamsBuffer:S,meta:T}}class vc{constructor(a,f,y,b,S,T=null,V=null,L={}){M(this,"device");M(this,"pc");M(this,"presentationFormat");M(this,"camera_buffer");M(this,"render_settings_buffer");M(this,"draw_indirect_buffer");M(this,"splat_2d_buffer");M(this,"querySet");M(this,"resolveBuffer");M(this,"resultBuffer");M(this,"queriesPerFrame",dc);M(this,"queryCapacityFrames",200);M(this,"sort_prefixBindGroup");M(this,"sort_pipelines");M(this,"sort_localHistogramBindGroups");M(this,"sort_scatterBindGroups");M(this,"lastFrame",0);M(this,"frameCount",0);M(this,"preprocessPipeline");M(this,"cullPipeline");M(this,"renderPipeline");M(this,"indirectPipeline");M(this,"htEnabled",!1);M(this,"wsrEnabled",!1);M(this,"wsrPipeline",null);M(this,"wsrCompositePipeline",null);M(this,"wsrGateEnabled",!1);M(this,"wsrBinsPipeline",null);M(this,"wsrGatedPipeline",null);M(this,"wsrBinsBgl",null);M(this,"wsrBinsBindGroup",null);M(this,"wsrBinTextures",[null,null,null,null]);M(this,"wsrBinViews",[null,null,null,null]);M(this,"wsrDGateEnabled",!1);M(this,"wsrDepthPipeline",null);M(this,"wsrGatedDPipeline",null);M(this,"wsrDbufBgl",null);M(this,"wsrDbufBindGroup",null);M(this,"wsrDbufTexture",null);M(this,"wsrDbufView",null);M(this,"htSortedTail",!1);M(this,"htOccTail",!1);M(this,"htTailOccPipeline",null);M(this,"renderShaderModule");M(this,"betaKernel",1);M(this,"fetchById");M(this,"octBound");M(this,"acc16");M(this,"accTexture",null);M(this,"accView",null);M(this,"accW",0);M(this,"accH",0);M(this,"legacyRenderPipeline",null);M(this,"varyingsPipeline",null);M(this,"legacyRenderer",!1);M(this,"accResolvePipeline",null);M(this,"accResolveBgl",null);M(this,"accResolveBindGroup",null);M(this,"renderSettingsBgl");M(this,"renderSplatsBgl");M(this,"atlasBgl");M(this,"htCorePipeline",null);M(this,"htTailPipeline",null);M(this,"htTail2Pipeline",null);M(this,"htCompositePipeline",null);M(this,"htComposite2Pipeline",null);M(this,"htCompositeBgl",null);M(this,"htCompositeBindGroup",null);M(this,"htDepthTexture",null);M(this,"htDepthView",null);M(this,"htCoreTexture",null);M(this,"htCoreView",null);M(this,"htAccumTexture",null);M(this,"htAccumView",null);M(this,"htTransTexture",null);M(this,"htTransView",null);M(this,"htW",0);M(this,"htH",0);M(this,"htTailBgl",null);M(this,"htTailBindGroup",null);M(this,"htParamsBuffer",null);M(this,"htTailK",150);M(this,"wsrSatT",.05);M(this,"wsrDgMargin",.15);M(this,"sort_info_buffer");M(this,"sort_ping_pong");M(this,"crsBg");M(this,"gsBg");M(this,"cullBg2");M(this,"preprocessBg1");M(this,"renderSplatsBindGroup");M(this,"renderSettingsBindGroup");M(this,"atlasBindGroup");M(this,"indirectBindGroup");M(this,"sh_solvers_buffer");M(this,"mesh");M(this,"meshDepthPipeline",null);M(this,"meshDepthCameraBindGroup",null);M(this,"meshDepthMarginBindGroup",null);M(this,"meshMarginBuffer",null);M(this,"meshDepthTexture",null);M(this,"meshDepthView",null);M(this,"meshCullBindGroupLayout");M(this,"meshCullBindGroup");M(this,"meshCullWidth",0);M(this,"meshCullHeight",0);M(this,"meshStubTexture");M(this,"meshStubView");M(this,"bfcParamsBuffer");M(this,"meshOverlayPipeline",null);M(this,"meshOverlayEnabled",!1);M(this,"bgColor",[0,0,0,0]);M(this,"showPerfDialogNext",!1);M(this,"requestReorderNextFrame",!1);M(this,"reorderInFlight",!1);M(this,"downloadOnceNextRead",!1);M(this,"downloadOnceFileName","fps_metrics");M(this,"allFrameTimes",[]);M(this,"lastStageBreakdownMs",null);M(this,"timeQueryEnabled");M(this,"atlas");M(this,"atlasParamsBuffer");M(this,"_atlasEnabled",!0);M(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,bt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`),this.mesh=V;const O=S.includes("timestamp-query");this.timeQueryEnabled=O,O&&bt("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=y,this.camera_buffer=b,this.atlas=T??bc(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",ae=>{console.error("A WebGPU error was not captured:",ae.error)}),this._setupTimestampQueries(),this._setupBuffers();const q=(Math.floor((this.pc.num_points+un-1)/un)+1)*un,F=Math.ceil(q/un);console.log(`keys count adjusted: ${q}`),console.log(`key size: ${this.pc.num_points}`);const X=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=gc(f);const Z=[_i(q,f),_i(q,f)],N=f.createBuffer({label:"workgroup histograms",size:F*Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=f.createBuffer({label:"workgroup prefixes",size:F*Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=f.createBuffer({label:"digit base",size:Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=Math.ceil(F/un),W=Math.ceil(z/un),D=f.createBuffer({label:"prefix l0 sums",size:z*Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"prefix l0 offsets",size:z*Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=f.createBuffer({label:"prefix l1 sums",size:W*Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ye=f.createBuffer({label:"prefix l1 offsets",size:W*Rt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:N}},{binding:2,resource:{buffer:R}},{binding:3,resource:{buffer:D}},{binding:4,resource:{buffer:H}},{binding:5,resource:{buffer:re}},{binding:6,resource:{buffer:ye}},{binding:7,resource:{buffer:U}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:N}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:N}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:R}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:R}}]})],this.sort_info_buffer=X,this.sort_ping_pong=Z;const he=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),te=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ge=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ne=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:he,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:te,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ge,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ne,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Oe=this.device.createShaderModule({code:Jl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Oe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Le=this.device.createShaderModule({code:ec});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,te,ge,this.meshCullBindGroupLayout]}),compute:{module:Le,entryPoint:"surfel_cull"}}),this.mesh!==null){const ae=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:ae,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const de=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:de,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const ke=this.device.createShaderModule({code:tc});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[ae,de]}),vertex:{module:ke,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ue=this.device.createShaderModule({code:Xl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,ne]}),compute:{module:Ue,entryPoint:"preprocess"}});const Ae=this.device.createShaderModule({label:"render_2dgs",code:hi(ii,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Ae.getCompilationInfo().then(ae=>{ae.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ae.messages.forEach(de=>{(de.type==="error"?console.error:de.type==="warning"?console.warn:console.log)(`${de.type} (line ${de.lineNum}:${de.linePos}): ${de.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ve=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Ee=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ue=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Ee,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),oe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),fe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ve,ue,oe]}),vertex:{module:Ae,entryPoint:"vs_main"},fragment:{module:Ae,entryPoint:"fs_main",constants:{BETA_KERNEL:fe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const be=(ae,de,ke)=>{const we=this.device.createShaderModule({label:`render_2dgs (${ae})`,code:hi(ii,{FETCH_BY_ID:de,OCT:ke})});return this.device.createRenderPipeline({label:`render_2dgs_${ae}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[ve,ue,oe]}),vertex:{module:we,entryPoint:"vs_main"},fragment:{module:we,entryPoint:"fs_main",constants:{BETA_KERNEL:fe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=be("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?be("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(ae=>{ae?console.error("[render_2dgs] pipeline create validation error:",ae.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ve,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ue,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[fi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:oe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Ae,this.betaKernel=fe,this.renderSettingsBgl=ve,this.renderSplatsBgl=ue,this.atlasBgl=oe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}writeHtParams(){this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,this.wsrDgMargin,0]))}setWsrSatT(a){this.wsrSatT=a,this.writeHtParams()}setWsrDGateMargin(a){this.wsrDgMargin=a,this.writeHtParams()}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,this.wsrSatT,this.wsrDgMargin,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){zt({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),f=new Uint32Array(a),y=new Float32Array(a);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,y[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,f){var y;if(this.accResolvePipeline===null){const b=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,S=this.device.createShaderModule({label:"acc16_resolve",code:b});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:S,entryPoint:"vs_main"},fragment:{module:S,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===f||((y=this.accTexture)==null||y.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=f)}ensureHtResources(a,f){var S,T,V,L,O,q;if(this.htCorePipeline===null){const F=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,this.wsrDgMargin,0]));const X=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:X,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:X,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Z={format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}};this.wsrBinsPipeline=this.device.createRenderPipeline({label:"wsr_bins_prepass",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_bins",constants:{BETA_KERNEL:this.betaKernel},targets:[Z,Z,Z,Z]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrBinsBgl=this.device.createBindGroupLayout({label:"wsr gate bins (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},...[4,5,6,7].map(R=>({binding:R,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}))]}),this.wsrGatedPipeline=this.device.createRenderPipeline({label:"wsr_gated_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrBinsBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDepthPipeline=this.device.createRenderPipeline({label:"wsr_depth_anchor",layout:F,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_depth",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDbufBgl=this.device.createBindGroupLayout({label:"wsr dgate dbuf (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.wsrGatedDPipeline=this.device.createRenderPipeline({label:"wsr_gated_d_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrDbufBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated_d",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const N=this.device.createShaderModule({label:"ht_composite",code:Ql});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===f)return;(S=this.htDepthTexture)==null||S.destroy(),(T=this.htCoreTexture)==null||T.destroy(),(V=this.htAccumTexture)==null||V.destroy(),(L=this.htTransTexture)==null||L.destroy();const y={width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},b=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:y,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:y,format:"rgba16float",usage:b}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:y,format:"rgba16float",usage:b}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:y,format:"r16float",usage:b}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]});for(let F=0;F<4;F++)(O=this.wsrBinTextures[F])==null||O.destroy(),this.wsrBinTextures[F]=this.device.createTexture({label:`wsr bins ${F}`,size:y,format:"rgba16float",usage:b}),this.wsrBinViews[F]=this.wsrBinTextures[F].createView();this.wsrBinsBindGroup=this.device.createBindGroup({label:"wsr gate bins bind (group 3)",layout:this.wsrBinsBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},...[0,1,2,3].map(F=>({binding:4+F,resource:this.wsrBinViews[F]}))]}),(q=this.wsrDbufTexture)==null||q.destroy(),this.wsrDbufTexture=this.device.createTexture({label:"wsr dgate dbuf",size:y,format:"rgba16float",usage:b}),this.wsrDbufView=this.wsrDbufTexture.createView(),this.wsrDbufBindGroup=this.device.createBindGroup({label:"wsr dgate dbuf bind (group 3)",layout:this.wsrDbufBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},{binding:8,resource:this.wsrDbufView}]}),this.htW=a,this.htH=f}ensureMeshDepthTexture(a,f){var y;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===f||((y=this.meshDepthTexture)==null||y.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=f))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,Us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,bt(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,zt({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const f=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),bt(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,Us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),y=f*Uint32Array.BYTES_PER_ELEMENT;if(y===0){console.log("[DEBUG] No indices to read.");return}const b=this.device.createBuffer({size:y,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),S=this.device.createCommandEncoder();S.copyBufferToBuffer(this.sort_ping_pong[fi].sort_indices_buffer,0,b,0,y),this.device.queue.submit([S.finish()]),await b.mapAsync(GPUMapMode.READ);const T=new Uint32Array(b.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(T)),b.unmap()}frame(a,f,y=!0){var q,F,X,Z;const S=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,T=y&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(nt.accel_flags[0]&Ws)!==0){const N=nt.canvas_size[0],R=nt.canvas_size[1];this.ensureMeshDepthTexture(N,R);const U={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},z=a.beginRenderPass(U);z.setPipeline(this.meshDepthPipeline),z.setBindGroup(0,this.meshDepthCameraBindGroup),z.setBindGroup(1,this.meshDepthMarginBindGroup),z.setVertexBuffer(0,this.mesh.vertexBuffer),z.setVertexBuffer(1,this.mesh.normalBuffer),z.setIndexBuffer(this.mesh.indexBuffer,"uint32"),z.drawIndexed(this.mesh.numIndices),z.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const N={label:"cull"};T&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+0,endOfPassWriteIndex:S+1});const R=a.beginComputePass(N);R.setPipeline(this.cullPipeline),R.setBindGroup(0,this.crsBg),R.setBindGroup(1,this.gsBg),R.setBindGroup(2,this.cullBg2),R.setBindGroup(3,this.meshCullBindGroup);const U=Math.ceil(this.pc.num_points/cc);R.dispatchWorkgroups(U,1,1),R.end()}{const N=a.beginComputePass({label:"calculate indirect dispatch"});N.setPipeline(this.indirectPipeline),N.setBindGroup(0,this.indirectBindGroup),N.dispatchWorkgroups(1,1,1),N.end()}{const N={label:"preprocess"};T&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+2,endOfPassWriteIndex:S+3});const R=a.beginComputePass(N);R.setPipeline(this.preprocessPipeline),R.setBindGroup(0,this.crsBg),R.setBindGroup(1,this.preprocessBg1),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),R.end()}const L=this.wsrEnabled&&(((F=(q=this.atlas)==null?void 0:q.meta)==null?void 0:F.probe_mode)|0)===2,O=L&&this.wsrDGateEnabled;if(!this.htEnabled&&!L||this.htSortedTail||O)for(let N=0;N<as;N++){const R=N&1,U=this.sort_pipelines.passes[N],z=this.sort_localHistogramBindGroups[R],W=this.sort_scatterBindGroups[R];{const D={label:`upsweep_round${N}`};T&&!this.htEnabled&&N==0&&(D.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4});const H=a.beginComputePass(D);H.setPipeline(U.localHistogram),H.setBindGroup(0,z),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const D=a.beginComputePass({label:`prefix_round${N} - l0TileScan`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - l1TileScanOnL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - l1ScanSums`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,Rt,1),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - addL1ToL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - addL0ToElems`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=a.beginComputePass({label:`prefix_round${N} - computeDigitBase`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,1,1),D.end()}{const D={label:`scatter_round${N}`};T&&!this.htEnabled&&N==as-1&&(D.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+5});const H=a.beginComputePass(D);H.setPipeline(U.scatterElements),H.setBindGroup(0,W),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}if(L){const N=nt.canvas_size[0],R=nt.canvas_size[1];this.ensureHtResources(N,R);const U=this.wsrDGateEnabled,z=this.wsrGateEnabled&&!U;if(z){const W={label:"wsr_bins_prepass",colorAttachments:this.wsrBinViews.map(H=>({view:H,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}))};T&&(W.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4,endOfPassWriteIndex:S+5});const D=a.beginRenderPass(W);D.setPipeline(this.wsrBinsPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}else!U&&T&&a.beginComputePass({label:"wsr_no_sort_stamp",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:S+4,endOfPassWriteIndex:S+5}}).end();if(U){const W={label:"wsr_depth_anchor",colorAttachments:[{view:this.wsrDbufView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]};T&&(W.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const D=a.beginRenderPass(W);D.setPipeline(this.wsrDepthPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const W={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};T&&!U&&(W.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const D=a.beginRenderPass(W);D.setPipeline(U?this.wsrGatedDPipeline:z?this.wsrGatedPipeline:this.wsrPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),U?D.setBindGroup(3,this.wsrDbufBindGroup):z&&D.setBindGroup(3,this.wsrBinsBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const W={label:"wsr_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(W.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const D=a.beginRenderPass(W);D.setPipeline(this.wsrCompositePipeline),D.setBindGroup(0,this.htCompositeBindGroup),D.draw(3),D.end()}}else if(this.htEnabled){const N=nt.canvas_size[0],R=nt.canvas_size[1];this.ensureHtResources(N,R);{const U={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};T&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4,endOfPassWriteIndex:S+5});const z=a.beginRenderPass(U);z.setPipeline(this.htCorePipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end()}if(this.htSortedTail){const U={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};T&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const z=a.beginRenderPass(U);z.setPipeline(this.htTail2Pipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end()}else{const U={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};T&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6});const z=a.beginRenderPass(U),W=this.htOccTail&&(((Z=(X=this.atlas)==null?void 0:X.meta)==null?void 0:Z.probe_mode)|0)===2;z.setPipeline(W?this.htTailOccPipeline:this.htTailPipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.setBindGroup(3,this.htTailBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end()}{const U={label:"ht_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const z=a.beginRenderPass(U);z.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),z.setBindGroup(0,this.htCompositeBindGroup),z.draw(3),z.end()}}else{let N=f;this.acc16&&(this.ensureAccResources(nt.canvas_size[0],nt.canvas_size[1]),N=this.accView);const R={label:"render",colorAttachments:[{view:N,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6,...this.acc16?{}:{endOfPassWriteIndex:S+7}});const U=a.beginRenderPass(R);if(U.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),U.setBindGroup(0,this.renderSettingsBindGroup),U.setBindGroup(1,this.renderSplatsBindGroup),U.setBindGroup(2,this.atlasBindGroup),U.drawIndirect(this.draw_indirect_buffer,0),U.end(),this.acc16){const z={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const W=a.beginRenderPass(z);W.setPipeline(this.accResolvePipeline),W.setBindGroup(0,this.accResolveBindGroup),W.draw(3),W.end()}}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const U=this.device.createShaderModule({code:nc}),z=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),W=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[z,W]}),vertex:{module:U,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:U,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const N={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},R=a.beginRenderPass(N);R.setPipeline(this.meshOverlayPipeline),R.setBindGroup(0,this.meshDepthCameraBindGroup),R.setBindGroup(1,this.meshDepthMarginBindGroup),R.setVertexBuffer(0,this.mesh.vertexBuffer),R.setVertexBuffer(1,this.mesh.normalBuffer),R.setIndexBuffer(this.mesh.indexBuffer,"uint32"),R.drawIndexed(this.mesh.numIndices),R.end()}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const y=this.device.createCommandEncoder({label:"timestamp resolve encoder"});y.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),y.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([y.finish()]),await this.device.queue.onSubmittedWorkDone();const b=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const S=new BigInt64Array(this.resultBuffer.getMappedRange()),T=Math.min(this.frameCount,this.queryCapacityFrames),V=(this.lastFrame+this.frameCount-T)%this.queryCapacityFrames,L=Array.from({length:b.length},()=>[]);let O=0;for(let z=0;z<T;z++){const W=(V+z)%this.queryCapacityFrames,D=W*this.queriesPerFrame;let H=!0;for(let re=0;re<b.length;re++){const[ye,he,te]=b[re];if(S[D+te]===0n||S[D+he]===0n||S[D+he]<S[D+te]){H=!1;break}}if(!H){!f&&W%60===0&&console.debug("[timestamp] frame slot",W,"contains unwritten (0) timestamps, skipped in stats");continue}O++;for(let re=0;re<b.length;re++){const[ye,he,te]=b[re],ge=Number(S[D+te]),ne=Number(S[D+he]);L[re].push((ne-ge)/1e6)}}if(O===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...L[0]);const q=[];let F=0,X=0,Z=0;for(let z=0;z<b.length;z++){const W=b[z][0],D=L[z];let H=0;if(W==="Total"){const re=this.allFrameTimes;H=re.reduce((te,ge)=>te+ge,0)/re.length;const ye=[...re].sort((te,ge)=>te-ge);F=ye[Math.floor(ye.length*.99)]||0;const he=re.reduce((te,ge)=>te+Math.pow(ge-H,2),0)/re.length;X=Math.sqrt(he),Z=H}else H=D.reduce((re,ye)=>re+ye,0)/D.length;q.push([W,H])}this.lastFrame+=this.frameCount,this.frameCount=0;const N=Object.fromEntries(q);this.lastStageBreakdownMs={cull:N.Culling??0,preprocess:N.Preprocess??0,sort:N.Sort??0,render:N.Render??0,total:N.Total??0};const U=`[TIMESTAMP - ${this.constructor.name}]
`+q.map(([z,W])=>`${z}: ${W.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${X.toFixed(3)}ms
Total AVG: ${Z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(U),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const z=`Stage,ms
`,W=q.map(([re,ye])=>`${re},${ye.toFixed(3)}`).join(`
`),D="data:text/csv;charset=utf-8,"+encodeURIComponent(z+W),H=document.createElement("a");H.href=D,H.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(H),H.click(),H.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(U)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:uc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,y=a?a.height:1;lc({width:f,height:y,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Ei(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:zn(this.pc.num_points*pc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:zn(this.pc.num_points*hc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,y=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${y}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function wc(i,a){return 2*Math.atan(a/(2*i))}function xc(i,a,f,y){const b=Math.tan(y/2),S=Math.tan(f/2),T=b*i,V=-T,L=S*i,O=-L,q=pt.create();return q[0]=2*i/(L-O),q[5]=-2*i/(T-V),q[2]=(L+O)/(L-O),q[6]=(T+V)/(T-V),q[14]=1,q[10]=a/(a-i),q[11]=-(a*i)/(a-i),pt.transpose(q,q),q}async function yc(i){bt(`loading scene camera file... : ${i}`);const f=await(await fetch(i)).json();return bt(`loaded cameras count: ${f.length}`),f.map(y=>{const b=I.clone(y.position),S=Et.create(...y.rotation.flat()),T=S[0],V=S[4],L=S[8],O=S[1],q=S[5],F=S[9],X=S[2],Z=S[6],N=S[10];T*(q*N-F*Z)-V*(O*N-F*X)+L*(O*Z-q*X)<0&&(S[1]=-S[1],S[5]=-S[5],S[9]=-S[9]);const U=pt.fromMat3(S);return{position:b,rotation:U,img_name:y.img_name,id:y.id}})}const Pc=4*2,Sc=4*16,Ci=4*Sc+2*Pc;function Ec(i){return i.createBuffer({label:"camera uniform",size:Ci,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const cn=new Float32Array(Ci/Float32Array.BYTES_PER_ELEMENT),ls=class ls{constructor(a,f){M(this,"uniform_buffer");M(this,"position",I.create());M(this,"rotation",pt.create());M(this,"fovY",45/180*Math.PI);M(this,"fovX");M(this,"focal",ti.create());M(this,"viewport",ti.create());M(this,"view_matrix",pt.identity());M(this,"view_inv_matrix",pt.identity());M(this,"proj_matrix",pt.identity());M(this,"proj_inv_matrix",pt.identity());M(this,"_negPos",I.create());M(this,"look",I.create(0,0,1));M(this,"up",I.create(0,1,0));M(this,"right",I.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=Ec(f),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=wc(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=xc(.01,100,this.fovX,this.fovY),pt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],pt.copy(this.rotation,this.view_matrix),pt.translate(this.view_matrix,this._negPos,this.view_matrix),pt.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(ls.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let a=0;cn.set(this.view_matrix,a),a+=16,cn.set(this.view_inv_matrix,a),a+=16,cn.set(this.proj_matrix,a),a+=16,cn.set(this.proj_inv_matrix,a),a+=16,cn.set(this.viewport,a),a+=2,cn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,cn)}set_preset(a){I.copy(a.position,this.position),pt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};M(ls,"Z_AXIS",I.create(0,0,1));let $s=ls;const Cc=I.create(1,0,0),kc=I.create(0,1,0);function Tc(i,a){const f=i[0],y=i[4],b=i[8],S=i[1],T=i[5],V=i[9],L=i[2],O=i[6],q=i[10],F=f+T+q;let X,Z,N,R;if(F>0){const U=.5/Math.sqrt(F+1);X=.25/U,Z=(O-V)*U,N=(b-L)*U,R=(S-y)*U}else if(f>T&&f>q){const U=2*Math.sqrt(1+f-T-q);X=(O-V)/U,Z=.25*U,N=(y+S)/U,R=(b+L)/U}else if(T>q){const U=2*Math.sqrt(1+T-f-q);X=(b-L)/U,Z=(y+S)/U,N=.25*U,R=(V+O)/U}else{const U=2*Math.sqrt(1+q-f-T);X=(S-y)/U,Z=(b+L)/U,N=(V+O)/U,R=.25*U}return a[0]=Z,a[1]=N,a[2]=R,a[3]=X,a}class Bc{constructor(a){M(this,"element");M(this,"enabled",!0);M(this,"center",I.create(0,0,0));M(this,"up",I.create(0,1,0));M(this,"rotation",[0,0]);M(this,"shift",[0,0]);M(this,"scroll",0);M(this,"speed",.1);M(this,"sensitivity",.08);M(this,"leftPressed",!1);M(this,"rightPressed",!1);M(this,"leftDragPans",!1);M(this,"lastX",0);M(this,"lastY",0);M(this,"touches",new Map);M(this,"lastTouchCenter",null);M(this,"lastPinchDistance",null);M(this,"lastTwoFingerAngle",null);M(this,"lastTouchCount",0);M(this,"roll",0);M(this,"_dir",I.create());M(this,"_right",I.create());M(this,"_upCam",I.create());M(this,"_scratch",I.create());M(this,"_qY",ft.create());M(this,"_qX",ft.create());M(this,"_qRot",ft.create());M(this,"_qLocal",ft.create());M(this,"_qWorldToCam",ft.create());M(this,"_scratchMat3",Et.create());M(this,"bboxMin",null);M(this,"bboxMax",null);M(this,"anchor",I.create(0,0,0));M(this,"downCallback",a=>{var f,y,b,S;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(y=(f=a.target)==null?void 0:f.setPointerCapture)==null||y.call(f,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(S=(b=a.target)==null?void 0:b.setPointerCapture)==null||S.call(b,a.pointerId),a.preventDefault())}});M(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const f=a.pageX-this.lastX,y=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=y):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=y)});M(this,"upCallback",a=>{var f,y,b,S;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(y=(f=a.target)==null?void 0:f.releasePointerCapture)==null||y.call(f,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(S=(b=a.target)==null?void 0:b.releasePointerCapture)==null||S.call(b,a.pointerId),a.preventDefault()});M(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let f=a.deltaY;a.deltaMode===1?f*=16:a.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(a){I.copy(a,this.center),I.copy(a,this.anchor)}setOrbitPivot(a){I.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const f=this.camera.rotation;I.set(f[2],f[6],f[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,a,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(I.subtract(this.center,a.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const f=a.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,a.update_buffer()}setBbox(a,f){this.bboxMin=I.create(a[0],a[1],a[2]),this.bboxMax=I.create(f[0],f[1],f[2]);const y=(a[0]+f[0])*.5,b=(a[1]+f[1])*.5,S=(a[2]+f[2])*.5;I.set(y,b,S,this.center),I.set(y,b,S,this.anchor)}resetToCamera(){const a=this.camera.rotation;I.set(a[2],a[6],a[10],this._dir),I.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let y=-1/0,b=1/0,S=!1;for(let T=0;T<3;T++){const V=this._dir[T],L=this.bboxMin[T]-this.camera.position[T],O=this.bboxMax[T]-this.camera.position[T];if(Math.abs(V)>1e-8){const q=L/V,F=O/V;y=Math.max(y,Math.min(q,F)),b=Math.min(b,Math.max(q,F))}else if(L>0||O<0){S=!0;break}}!S&&y<=b&&b>0&&(f=(Math.max(y,0)+b)*.5)}if(f===null||!isFinite(f)||f<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const y=I.dot(this._scratch,this._dir);f=y>.001?y:I.length(this._scratch)}f=Math.max(.1,f),I.scale(this._dir,f,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const y=f.x-this.lastTouchCenter[0],b=f.y-this.lastTouchCenter[1];this.rotation[0]+=y*.3,this.rotation[1]-=b*.3}this.lastTouchCenter=[f.x,f.y]}else if(a===2){const f=Array.from(this.touches.values()),y=(f[0].x+f[1].x)*.5,b=(f[0].y+f[1].y)*.5,S=f[1].x-f[0].x,T=f[1].y-f[0].y,V=Math.hypot(S,T),L=Math.atan2(T,S);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const O=y-this.lastTouchCenter[0],q=b-this.lastTouchCenter[1],F=Math.hypot(O,q),X=Math.abs(V-this.lastPinchDistance);let Z=L-this.lastTwoFingerAngle;Z>Math.PI&&(Z-=2*Math.PI),Z<-Math.PI&&(Z+=2*Math.PI),F>.5&&(this.shift[1]-=O,this.shift[0]+=q),X>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(V/this.lastPinchDistance)*10),Math.abs(Z)>.0087&&(this.roll+=-Z)}this.lastTouchCenter=[y,b],this.lastPinchDistance=V,this.lastTwoFingerAngle=L}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const R=f.rotation;this.up[0]=R[1],this.up[1]=R[5],this.up[2]=R[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let y=!1;if(Math.abs(this.roll)>1e-4){const R=f.rotation;I.set(R[2],R[6],R[10],this._scratch),I.normalize(this._scratch,this._scratch),ft.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,y=!0}I.subtract(f.position,this.center,this._dir);let b=I.length(this._dir);b<1e-6&&(b=1e-6);const S=Math.exp(Math.log(b)+this.scroll*a*10*this.speed);I.scale(this._dir,S/b,this._dir),b=S;const T=f.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const V=I.create(T[1],T[5],T[9]);I.normalize(V,V),I.length(V)<1e-6&&I.set(0,1,0,V);const L=a*this.speed*.1*b,O=this.shift[1]*L,q=-this.shift[0]*L;I.scale(this._right,O,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position),I.scale(V,q,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position);const F=this.rotation[0]*a*this.sensitivity,X=this.rotation[1]*a*this.sensitivity;if(Math.abs(F)>1e-5||Math.abs(X)>1e-5||y){const R=f.rotation;Tc(R,this._qWorldToCam),ft.fromAxisAngle(Cc,-X,this._qX),ft.fromAxisAngle(kc,-F,this._qY),ft.multiply(this._qX,this._qY,this._qLocal),ft.normalize(this._qLocal,this._qLocal),ft.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ft.normalize(this._qWorldToCam,this._qWorldToCam),Et.fromQuat(this._qWorldToCam,this._scratchMat3),pt.fromMat3(this._scratchMat3,f.rotation);const U=f.rotation,z=U[2],W=U[6],D=U[10];f.position[0]=this.center[0]-z*b,f.position[1]=this.center[1]-W*b,f.position[2]=this.center[2]-D*b,this.up[0]=U[1],this.up[1]=U[5],this.up[2]=U[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,f.position);f.update_buffer();const N=Math.pow(.8,a*60);this.rotation[0]*=N,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=N,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=N,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=N,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=N,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ki(i){const a=I.create();for(const f of i)I.add(a,f,a);return I.scale(a,1/Math.max(i.length,1),a)}function Ti(i,a){const f=Et.create();Et.inverse(i,f);const y=I.create();return y[0]=f[0]*a[0]+f[4]*a[1]+f[8]*a[2],y[1]=f[1]*a[0]+f[5]*a[1]+f[9]*a[2],y[2]=f[2]*a[0]+f[6]*a[1]+f[10]*a[2],y}function Mc(i){const a=i.slice(),f=[1,0,0,0,1,0,0,0,1],y=(L,O)=>a[L*3+O],b=(L,O,q)=>{a[L*3+O]=q},S=(L,O)=>f[L*3+O],T=(L,O,q)=>{f[L*3+O]=q};for(let L=0;L<30;L++){let O=0,q=1,F=Math.abs(y(0,1));if(Math.abs(y(0,2))>F&&(O=0,q=2,F=Math.abs(y(0,2))),Math.abs(y(1,2))>F&&(O=1,q=2,F=Math.abs(y(1,2))),F<1e-12)break;const X=y(O,O),Z=y(q,q),N=y(O,q);let R;Math.abs(X-Z)<1e-30?R=Math.PI/4*Math.sign(N):R=.5*Math.atan2(2*N,X-Z);const U=Math.cos(R),z=Math.sin(R);for(let W=0;W<3;W++){const D=y(W,O),H=y(W,q);b(W,O,U*D+z*H),b(W,q,-z*D+U*H)}for(let W=0;W<3;W++){const D=y(O,W),H=y(q,W);b(O,W,U*D+z*H),b(q,W,-z*D+U*H)}for(let W=0;W<3;W++){const D=S(W,O),H=S(W,q);T(W,O,U*D+z*H),T(W,q,-z*D+U*H)}}const V=[];for(let L=0;L<3;L++)V.push({val:y(L,L),vec:I.create(S(0,L),S(1,L),S(2,L))});return V.sort((L,O)=>O.val-L.val),{vals:[V[0].val,V[1].val,V[2].val],vecs:[V[0].vec,V[1].vec,V[2].vec]}}function Ac(i,a){const f=ki(i);let y=0,b=0,S=0,T=0,V=0,L=0;for(const N of i){const R=N[0]-f[0],U=N[1]-f[1],z=N[2]-f[2];y+=R*R,b+=R*U,S+=R*z,T+=U*U,V+=U*z,L+=z*z}const O=[y,b,S,b,T,V,S,V,L],{vecs:q}=Mc(O);let F=q[0],X=q[1],Z=q[2];return I.dot(Z,a)<0&&(I.scale(Z,-1,Z),I.scale(X,-1,X)),{centroid:f,normal:Z,u:F,v:X}}function Dc(i){let a=0,f=0,y=0,b=0,S=0,T=0,V=0,L=0,O=0;for(const[U,z]of i){const W=-2*U,D=-2*z,H=1,re=-(U*U+z*z);a+=W*W,f+=W*D,y+=W*H,b+=D*D,S+=D*H,T+=H*H,V+=W*re,L+=D*re,O+=H*re}const q=Et.create(a,f,y,f,b,S,y,S,T),F=Ti(q,I.create(V,L,O)),X=F[0],Z=F[1],N=F[2],R=X*X+Z*Z-N;return{center:[X,Z],radius:Math.sqrt(Math.max(R,1e-12))}}function Gc(i,a){let f=0,y=0,b=0,S=0,T=0,V=0,L=0,O=0,q=0;for(let X=0;X<i.length;X++){const Z=i[X],N=I.normalize(a[X],I.create()),R=1-N[0]*N[0],U=-N[0]*N[1],z=-N[0]*N[2],W=1-N[1]*N[1],D=-N[1]*N[2],H=1-N[2]*N[2];f+=R,y+=U,b+=z,S+=W,T+=D,V+=H,L+=R*Z[0]+U*Z[1]+z*Z[2],O+=U*Z[0]+W*Z[1]+D*Z[2],q+=z*Z[0]+D*Z[1]+H*Z[2]}const F=Et.create(f,y,b,y,S,T,b,T,V);return Ti(F,I.create(L,O,q))}function Bi(i,a={}){if(i.length===0)return null;const f=a.tiltDownDeg??8,y=a.radiusScale??1,b=a.alignFirst??!0,S=(a.direction??"ccw")==="ccw"?1:-1,T=i.map(te=>I.clone(te.position)),V=i.map(te=>{const ge=te.rotation;return I.create(ge[8],ge[9],ge[10])}),L=i.map(te=>{const ge=te.rotation;return I.create(ge[4],ge[5],ge[6])}),O=ki(L),q=I.normalize(I.scale(O,-1,I.create())),{centroid:F,normal:X,u:Z,v:N}=Ac(T,q),R=T.map(te=>{const ge=I.sub(te,F,I.create());return[I.dot(ge,Z),I.dot(ge,N)]}),{center:U,radius:z}=Dc(R),W=z*y,D=I.add(F,I.add(I.scale(Z,U[0],I.create()),I.scale(N,U[1],I.create()),I.create()),I.create()),H=Gc(T,V),re=W*Math.tan(f*Math.PI/180),ye=I.sub(H,I.scale(X,re,I.create()),I.create());let he=0;if(b){const te=I.sub(T[0],D,I.create());he=Math.atan2(I.dot(te,N),I.dot(te,Z))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${W.toFixed(2)}, tilt=${f}°, normal=[${X[0].toFixed(2)}, ${X[1].toFixed(2)}, ${X[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:D,radius:W,normal:X,u:Z,v:N,lookAt:ye,startPhase:he,direction:S}}function Mi(i,a){const f=(i.startPhase+a*i.direction)*2*Math.PI,y=Math.cos(f),b=Math.sin(f),S=I.add(i.center,I.add(I.scale(i.u,i.radius*y,I.create()),I.scale(i.v,i.radius*b,I.create()),I.create()),I.create()),T=I.normalize(I.sub(i.lookAt,S,I.create())),V=I.cross(T,i.normal,I.create());I.length(V)<1e-6&&I.copy(i.u,V),I.normalize(V,V);const L=I.cross(T,V,I.create());I.normalize(L,L);const O=pt.create();return O[0]=V[0],O[1]=L[0],O[2]=T[0],O[3]=0,O[4]=V[1],O[5]=L[1],O[6]=T[1],O[7]=0,O[8]=V[2],O[9]=L[2],O[10]=T[2],O[11]=0,O[12]=0,O[13]=0,O[14]=0,O[15]=1,{position:S,rotation:O,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Lc(i,a={}){const f=Bi(i,a);if(!f)return[];const y=a.numViews??120;return Array.from({length:y},(b,S)=>({...Mi(f,S/y),img_name:`circle_${S.toString().padStart(4,"0")}`,id:S}))}function Ic(i){const a=new Uint8Array(i),f=Math.min(a.byteLength,65536),y=new TextDecoder("ascii").decode(a.subarray(0,f)),b=y.indexOf("end_header");if(b<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const S=b+10+1,T=y.slice(0,b).split(/\r?\n/).map(fe=>fe.trim()).filter(Boolean);if(T[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const V=T.find(fe=>fe.startsWith("format"));if(!V||!V.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${V??"<none>"})`);const L={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},O=[];let q=null;for(const fe of T)if(fe.startsWith("element ")){const[,be,ae]=fe.split(/\s+/);q={name:be,count:parseInt(ae,10),props:[],bytesPerRecord:0,hasList:!1},O.push(q)}else if(fe.startsWith("property ")&&q){const be=fe.split(/\s+/);if(be[1]==="list"){const ae=be[2],de=be[3],ke=be[4];q.props.push({name:ke,type:de,isList:!0,listCountType:ae,listItemType:de}),q.hasList=!0}else{const ae=be[1],de=be[2];if(q.props.push({name:de,type:ae,isList:!1}),L[ae]===void 0)throw new Error(`mesh PLY: unsupported prop type '${ae}'`);q.bytesPerRecord+=L[ae]}}const F=O.find(fe=>fe.name==="vertex"),X=O.find(fe=>fe.name==="face"||fe.name==="faces");if(!F)throw new Error("mesh PLY: missing 'element vertex'");if(!X)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(F.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const Z=F.props.find(fe=>fe.name==="x"),N=F.props.find(fe=>fe.name==="y"),R=F.props.find(fe=>fe.name==="z");if(!Z||!N||!R)throw new Error("mesh PLY: vertex must have x/y/z");let U=0;const z=new Map;for(const fe of F.props)z.set(fe.name,{off:U,type:fe.type}),U+=L[fe.type];const W=z.get("x"),D=z.get("y"),H=z.get("z");if(W.type!==D.type||W.type!==H.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${W.type}/${D.type}/${H.type})`);const re=W.type,ye=re==="double"||re==="float64";if(!ye&&re!=="float"&&re!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${re}')`);const he=new Float32Array(F.count*3),te=new DataView(i),ge=S,ne=F.bytesPerRecord;for(let fe=0;fe<F.count;fe++){const be=ge+fe*ne;ye?(he[fe*3+0]=te.getFloat64(be+W.off,!0),he[fe*3+1]=te.getFloat64(be+D.off,!0),he[fe*3+2]=te.getFloat64(be+H.off,!0)):(he[fe*3+0]=te.getFloat32(be+W.off,!0),he[fe*3+1]=te.getFloat32(be+D.off,!0),he[fe*3+2]=te.getFloat32(be+H.off,!0))}const Oe=ge+F.count*ne,Le=X.props.find(fe=>fe.isList);if(!Le)throw new Error("mesh PLY: face element has no list property");const Ue=L[Le.listCountType],Ae=L[Le.listItemType];if(Ue!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ue}`);let ve=Oe,Ee=0;for(let fe=0;fe<X.count;fe++){const be=te.getUint8(ve);be===3&&Ee++,ve+=1+be*Ae}const ue=new Uint32Array(Ee*3);ve=Oe;let oe=0;for(let fe=0;fe<X.count;fe++){const be=te.getUint8(ve);if(ve+=1,be===3)for(let ae=0;ae<3;ae++){const de=ve+ae*Ae;let ke;if(Ae===4)ke=te.getUint32(de,!0);else if(Ae===2)ke=te.getUint16(de,!0);else if(Ae===1)ke=te.getUint8(de);else throw new Error(`mesh PLY: unsupported face index size ${Ae}`);ue[oe++]=ke}ve+=be*Ae}return{positions:he,indices:ue}}function Rc(i){const a=new DataView(i);if(i.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=a.getUint32(0,!0),y=a.getUint32(4,!0),b=f*12,S=y*4;if(i.byteLength<8+b+S)throw new Error(`mesh .bin: truncated (expected ${8+b+S} B, got ${i.byteLength} B)`);const T=new Float32Array(i.slice(8,8+b)),V=new Uint32Array(i.slice(8+b,8+b+S));return{positions:T,indices:V}}function Ai(i,a){return(a??"").toLowerCase().endsWith(".ply")?Ic(i):Rc(i)}function zc(i,a){const f=i.length/3,y=new Float32Array(f*3);for(let b=0;b<a.length;b+=3){const S=a[b]*3,T=a[b+1]*3,V=a[b+2]*3,L=i[S],O=i[S+1],q=i[S+2],F=i[T],X=i[T+1],Z=i[T+2],N=i[V],R=i[V+1],U=i[V+2],z=F-L,W=X-O,D=Z-q,H=N-L,re=R-O,ye=U-q,he=W*ye-D*re,te=D*H-z*ye,ge=z*re-W*H;y[S]+=he,y[S+1]+=te,y[S+2]+=ge,y[T]+=he,y[T+1]+=te,y[T+2]+=ge,y[V]+=he,y[V+1]+=te,y[V+2]+=ge}for(let b=0;b<f;b++){const S=b*3,T=y[S],V=y[S+1],L=y[S+2],O=Math.sqrt(T*T+V*V+L*L);if(O>1e-12){const q=1/O;y[S]=T*q,y[S+1]=V*q,y[S+2]=L*q}}return y}function Di(i,a){const f=i.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(f,0,a.positions);const y=zc(a.positions,a.indices),b=i.createBuffer({label:"mesh-cull normal buffer",size:y.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(b,0,y);const S=i.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return i.queue.writeBuffer(S,0,a.indices),{vertexBuffer:f,normalBuffer:b,indexBuffer:S,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function Uc(i,a){try{const f=await fetch(a);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${f.status}`),null;const y=await f.arrayBuffer(),b=Ai(y,a);return console.log(`[mesh-cull] loaded ${a}: ${b.positions.length/3} verts, ${b.indices.length/3} tris`),Di(i,b)}catch(f){return console.warn(`[mesh-cull] load error for ${a}:`,f),null}}function Oc(i,a,f){try{const y=Ai(a,f);return console.log(`[mesh-cull] loaded from bundle: ${y.positions.length/3} verts, ${y.indices.length/3} tris`),Di(i,y)}catch(y){return console.warn("[mesh-cull] parse error:",y),null}}const Gi="BITYMI01",Vc=0,Fc=1,Nc=2,Wc=3,$c=4,qc=5,jc=6;function ss(i){const a=(i&32768)>>15,f=(i&31744)>>10,y=i&1023;return f===0?(a?-1:1)*Math.pow(2,-14)*(y/1024):f===31?y?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,f-15)*(1+y/1024)}function mi(i,a,f,y,b,S){const T=(i-f.width*.5)/y.focal[0],V=-((a-f.height*.5)/y.focal[1]),L=y.rotation,O=L[0],q=L[4],F=L[8],X=L[1],Z=L[5],N=L[9],R=L[2],U=L[6],z=L[10];let W=T*O+V*X+R,D=T*q+V*Z+U,H=T*F+V*N+z;const re=Math.hypot(W,D,H)||1;W/=re,D/=re,H/=re;const ye=y.position[0],he=y.position[1],te=y.position[2],ge=S*.005,ne=ge*ge,Oe=new Uint32Array(b.buffer,b.byteOffset,b.length),Le=b.length/8;let Ue=1/0,Ae=0,ve=0,Ee=0,ue=-1;for(let oe=0;oe<Le;oe++){const fe=oe*8,be=b[fe+0]-ye,ae=b[fe+1]-he,de=b[fe+2]-te,ke=be*W+ae*D+de*H;if(ke<=0)continue;const we=be-ke*W,Te=ae-ke*D,Ve=de-ke*H;if(we*we+Te*Te+Ve*Ve>=ne||!(Oe[fe+7]>>>16&1))continue;const x=Oe[fe+5],o=Oe[fe+6],m=ss(x&65535),p=ss(x>>>16&65535),w=ss(o&65535),P=ss(o>>>16&65535),C=Math.hypot(m,p,w,P)||1,k=m/C,r=p/C,h=w/C,c=P/C,_=2*(r*c+k*h),l=2*(h*c-k*r),d=1-2*(r*r+h*h),v=W*_+D*l+H*d;let g;Math.abs(v)>1e-6?(g=(be*_+ae*l+de*d)/v,(!isFinite(g)||g<=0)&&(g=ke)):g=ke,g<Ue&&(Ue=g,Ae=ye+g*W,ve=he+g*D,Ee=te+g*H,ue=oe)}return ue<0?null:[Ae,ve,Ee]}function Li(i){const a=new Uint8Array(i),f=new TextDecoder().decode(a.subarray(0,8));if(f!==Gi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const y=new DataView(i),b=y.getUint32(8,!0),S=12,T=20;let V=null,L=null,O=null,q=null;for(let F=0;F<b;F++){const X=S+F*T,Z=y.getUint32(X+0,!0),N=Number(y.getBigUint64(X+4,!0)),R=Number(y.getBigUint64(X+12,!0)),U=a.slice(N,N+R).buffer;Z===Vc||Z===Fc||Z===qc?V=U:Z===Nc?L=U:Z===Wc||Z===$c?O=U:Z===jc&&(q=U)}if(V===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:V,camerasBuffer:L,atlasBuffer:O,meshBuffer:q}}async function Hc(i,a){var T;const f=await fetch(i);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const y=(()=>{const V=f.headers.get("content-length");return V&&parseInt(V,10)||void 0})(),b=(T=f.body)==null?void 0:T.getReader();let S;if(!b)S=await f.arrayBuffer(),a&&a(S.byteLength,y,0);else{const V=[];let L=0,O=performance.now(),q=0;for(;;){const{done:Z,value:N}=await b.read();if(Z)break;V.push(N),L+=N.byteLength;const R=performance.now();if(R-O>=150&&a){const U=(L-q)/((R-O)/1e3);a(L,y,U),O=R,q=L}}const F=new Uint8Array(L);let X=0;for(const Z of V)F.set(Z,X),X+=Z.byteLength;S=F.buffer,a&&a(L,y,0)}return S.byteLength>=8&&new TextDecoder().decode(new Uint8Array(S,0,8))===Gi?{bundle:Li(S),rawPly:null}:{bundle:null,rawPly:S}}function Kc(i){return new Promise(a=>{const f=document.createElement("input");f.type="file",f.accept=i,f.style.display="none",f.onchange=()=>{var y;return a(((y=f.files)==null?void 0:y[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Yc(i,a,f){const y=document.getElementById("ui-panel-container"),b=document.getElementById("load-button"),S=document.getElementById("quick-links");b&&(b.onclick=async()=>{const q=await Kc(".ply,.bitymi");if(q)if(y&&(y.style.display="none"),q.name.toLowerCase().endsWith(".bitymi")){const F=await q.arrayBuffer(),{pcBuffer:X}=Li(F),Z=new File([X],q.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),N=await Os(Z,i);a(N)}else{const F=await Os(q,i);a(F)}}),S&&(S.innerHTML="");const T=new URLSearchParams(window.location.search),V=T.get("bundle")??T.get("model_url"),L=T.get("camera_url"),O=T.get("mesh_url");V&&(y&&(y.style.display="none"),f(V,L,O))}async function Zc(i,a,f,y){const b=new $s(i,f),S=new Bc(b);let T=!1;i.addEventListener("pointerdown",()=>{T=!0}),window.addEventListener("pointerup",()=>{T=!1});const V=typeof window<"u"&&window.parent!==window,L={pos:new Float32Array(3),rot:new Float32Array(16)};if(V){window.addEventListener("message",d=>{const v=d.data;if(!(!v||v.type!=="halloumi_sync_pose")&&!(!Array.isArray(v.position)||v.position.length!==3)&&!(!Array.isArray(v.rotation)||v.rotation.length!==16)){for(let g=0;g<3;g++)b.position[g]=v.position[g];for(let g=0;g<16;g++)b.rotation[g]=v.rotation[g];b.update_buffer(),S.resetToCamera();for(let g=0;g<3;g++)L.pos[g]=b.position[g];for(let g=0;g<16;g++)L.rot[g]=b.rotation[g]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const O=()=>{if(!V)return;const d=b.position,v=b.rotation;let g=!1;for(let B=0;B<3;B++)if(Math.abs(d[B]-L.pos[B])>1e-6){g=!0;break}if(!g){for(let B=0;B<16;B++)if(Math.abs(v[B]-L.rot[B])>1e-6){g=!0;break}}if(g){for(let B=0;B<3;B++)L.pos[B]=d[B];for(let B=0;B<16;B++)L.rot[B]=v[B];try{window.parent.postMessage({type:"halloumi_camera_state",position:[d[0],d[1],d[2]],rotation:Array.from(v)},"*")}catch{}}},q="rgba8unorm";a.configure({device:f,format:q,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let F=null;const X=()=>{b.on_update_canvas(),F!==null&&ns(i.width,i.height,f,F.render_settings_buffer)};new ResizeObserver(()=>{const d=Math.max(.25,h.render_scale),v=Math.max(1,Math.ceil(d*i.clientWidth)),g=Math.max(1,Math.ceil(d*i.clientHeight));i.width===v&&i.height===g||(i.width=v,i.height=g,X())}).observe(i);let N=0,R=0;const U=()=>{(i.width!==N||i.height!==R)&&(N=i.width,R=i.height,X())},z=new URLSearchParams(window.location.search);let D=z.get("animation")==="1";S.enabled=!D;const H=z.get("camera_url"),re=z.get("mesh_cull"),ye=re==="1"||re==="true",he=z.get("mesh_normal_margin")??z.get("mesh_margin"),te=he!==null?Number(he):NaN,ge=Number.isFinite(te)?te:0,ne=z.get("mesh_debug"),Oe=ne==="1"||ne==="true",Le=z.get("bfc"),Ue=Le==="1"||Le==="true",Ae=z.get("bfc_cos"),ve=Ae!==null?Number(Ae):NaN,Ee=Number.isFinite(ve)?ve:2,ue=z.get("mesh_sample_mode"),oe=ue!==null?parseInt(ue,10):NaN,fe=Number.isFinite(oe)&&oe>=0&&oe<=7?oe:1,be=z.get("mesh_silhouette"),ae=be==="1"||be==="true",de=z.get("mesh_invert_depth"),ke=de==="1"||de==="true",we=z.get("ht"),Te=we==="3"?3:we==="2"?2:we==="1"||we==="true"?1:0,Ve=z.get("ht_k"),A=Ve!==null?Number(Ve):NaN,Y=Number.isFinite(A)?A:150,x=z.get("wsr"),o=x==="1"||x==="true"||x==="2"||x==="3",m=x==="2",p=x==="3",w=Number(z.get("sat_t")),P=Number.isFinite(w)&&w>0?w:m?.05:.1,C=Number(z.get("dg_m")),k=Number.isFinite(C)&&C>0?C:.15,r=Math.max(1,window.devicePixelRatio||1),h={gaussian_scaling:1,sh_bias:.5,animate:D,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Ue,bfc_cos:Ee,legacy_renderer:!1,fetch_by_id:!0,ht_mode:Te,ht_k:Y,wsr:o,wsr_gate:m,wsr_dgate:p,sat_t:P,dg_margin:k,mesh_cull:ye,mesh_margin:ge,mesh_debug:Oe,mesh_sample_mode:fe,mesh_silhouette:ae,mesh_invert_depth:ke,render_scale:1},c=new Zl.Pane({title:"Config",expanded:!0});c.addInput(h,"animate",{label:"Animate"}).on("change",d=>{const v=D;D=d.value,S.enabled=!d.value,!v&&D&&_.value&&_.value.onAnimateStart(),v&&!D&&_.value&&_.value.onAnimateStop()}),c.addInput(h,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const _={value:null};Yc(f,d=>l(d,[],null,null),async(d,v,g)=>{let B=v??H,$,K=null,ie=null;const J=d.toLowerCase();if(J.endsWith(".bitymi")||J.includes(".bitymi?")){js("downloading bundle ...");try{const{bundle:pe}=await Hc(d,(j,_e,De)=>{const Be=j/1048576,We=_e?_e/(1024*1024):void 0,He=De/(1024*1024),Fe=_e?Math.min(99,Math.floor(j/_e*100)):void 0,Ke=We?`total ${We.toFixed(1)} MB`:"total -- MB",Ye=We&&Fe!==void 0?`${Be.toFixed(1)} MB downloaded (${Fe}%)`:`${Be.toFixed(1)} MB downloaded`,st=`${He.toFixed(2)} MB/s`;Ut(`downloading bundle ...
${Ke}, ${Ye}
${st}`)});if(!pe)throw new Error("Expected a .bitymi bundle");Ut("parsing PLY ...");const xe=new File([pe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if($=await Os(xe,f),!B&&pe.camerasBuffer&&(B=URL.createObjectURL(new Blob([pe.camerasBuffer],{type:"application/json"}))),pe.atlasBuffer){const j=pe.atlasBuffer.byteLength/1048576;Ut(`uploading atlas ...
${j.toFixed(1)} MB BC7`);try{const _e=ql(pe.atlasBuffer);K=Hl(f,_e,!0)}catch(_e){console.warn("[atlas] failed to parse/upload atlas:",_e)}}pe.meshBuffer&&!g&&(Ut("uploading mesh ..."),ie=Oc(f,pe.meshBuffer,"bundle.mesh"))}catch(pe){throw In(),pe}}else $=await Kl(d,f);g&&(Ut("loading mesh ..."),ie=await Uc(f,g));const Q=B?await yc(B):[];Q.length>0&&b.set_preset(Q[0]),l($,Q,K,ie)});function l(d,v=[],g=null,B=null){var Fn;const $=[(d.bbox.min[0]+d.bbox.max[0])/2,(d.bbox.min[1]+d.bbox.max[1])/2,(d.bbox.min[2]+d.bbox.max[2])/2];S.setBbox(d.bbox.min,d.bbox.max);const K=.5*Math.sqrt((d.bbox.max[0]-d.bbox.min[0])**2+(d.bbox.max[1]-d.bbox.min[1])**2+(d.bbox.max[2]-d.bbox.min[2])**2);function ie(se,me){const le=mi(se,me,i,b,d.surfel_data,K);le&&(S.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function J(){const se=i.width*.5,me=i.height*.5,le=mi(se,me,i,b,d.surfel_data,K);if(!le)return;const Ge=b.rotation,Re=Ge[2],Pe=Ge[6],ce=Ge[10],je=le[0]-b.position[0],Qe=le[1]-b.position[1],lt=le[2]-b.position[2],vt=je*Re+Qe*Pe+lt*ce;vt>0&&S.setOrbitDepth(vt)}if(v.length===0){const se=d.bbox.max[0]-d.bbox.min[0],me=d.bbox.max[1]-d.bbox.min[1],le=d.bbox.max[2]-d.bbox.min[2],Re=.5*Math.sqrt(se*se+me*me+le*le)*.5;I.set($[0]-Re,$[1]-Re,$[2]-Re,b.position);const Pe=I.create(Re,Re,Re);I.normalize(Pe,Pe);const ce=I.create(0,1,0),je=I.create();I.cross(ce,Pe,je),I.normalize(je,je);const Qe=I.create();I.cross(Pe,je,Qe);const lt=Et.create(je[0],Qe[0],Pe[0],je[1],Qe[1],Pe[1],je[2],Qe[2],Pe[2]);pt.fromMat3(lt,b.rotation),b.update_buffer()}S.setCenter(I.create(d.centroid[0],d.centroid[1],d.centroid[2]));const Q=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),pe=z.get("byid"),xe={fetchById:pe!==null?pe==="1":!Q,octBound:z.get("oct")==="1",acc16:z.get("acc16")==="1"},j=new vc(d,f,q,b.uniform_buffer,y,g,B,xe);zt({hypLegacy:z.get("hyp_legacy")==="1"},f,j.render_settings_buffer),h.legacy_renderer=z.get("legacy")==="1",h.legacy_renderer&&j.setLegacyRenderer(!0),h.fetch_by_id=xe.fetchById,console.log(`[render_2dgs] handheld=${Q} -> fetch_by_id=${xe.fetchById}`),F=j,ns(i.width,i.height,f,j.render_settings_buffer),h.atlas_enabled=g!==null,B===null&&(h.mesh_cull=!1),j.setMeshCullEnabled(h.mesh_cull),j.setMeshMargin(h.mesh_margin),B===null&&(h.mesh_debug=!1),j.setMeshOverlayEnabled(h.mesh_debug);{const se=d.surfel_data,me=se.length/8;let le=0,Ge=0,Re=0;for(let ce=0;ce<me;ce++)le+=se[ce*8],Ge+=se[ce*8+1],Re+=se[ce*8+2];const Pe=me>0?[le/me,Ge/me,Re/me]:[0,0,0];j.setBfcParams(h.bfc_cos,Pe),zt({bfc:h.bfc},f,j.render_settings_buffer),console.log(`[bfc] flag=${h.bfc} cos=${h.bfc_cos} centroid=(${Pe[0].toFixed(3)}, ${Pe[1].toFixed(3)}, ${Pe[2].toFixed(3)})`)}j.htEnabled=h.ht_mode>0,j.htSortedTail=h.ht_mode===2,j.htOccTail=h.ht_mode===3,j.setHtTailK(h.ht_k),h.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${h.ht_mode}: ${h.ht_mode===2?"exact core + SORTED tail":h.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${h.ht_k})`),j.wsrEnabled=h.wsr,j.wsrGateEnabled=h.wsr_gate,j.wsrDGateEnabled=h.wsr_dgate,j.setWsrSatT(h.sat_t),j.setWsrDGateMargin(h.dg_margin),h.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),zt({meshSampleMode:h.mesh_sample_mode,meshSilhouetteCull:h.mesh_silhouette,meshInvertDepth:h.mesh_invert_depth},f,j.render_settings_buffer),console.log(`[mesh-cull] ${B!==null?"mesh loaded":"no mesh"} · toggle=${h.mesh_cull} · margin=${h.mesh_margin}m · debug=${h.mesh_debug} · sample_mode=${h.mesh_sample_mode} · silhouette=${h.mesh_silhouette} · invert=${h.mesh_invert_depth}`);let _e=!1;const De=(()=>{if(g!==null)return`${g.meta.format===2?"BC7":g.meta.format===3?"ASTC 4×4":g.meta.format===7?"BC7 codebook gather (typeD)":`format=${g.meta.format}`} ${g.meta.width}×${g.meta.height}, ${g.meta.n_layers} layers`;const se=f.features.has("texture-compression-bc"),me=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(se?["BC7"]:[]).concat(me?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",De),pi(d.sh_bias,f,j.render_settings_buffer),di(h.gaussian_scaling,f,j.render_settings_buffer),h.sh_bias=d.sh_bias;const Be=d.num_points.toLocaleString(),We={stats:`${Be} surfels · -- fps`};c.addMonitor(We,"stats",{label:"Stats",interval:200}),c.addMonitor({atlas:De},"atlas",{label:"Atlas"});const He={stages:"— ms · awaiting timestamp data"};c.addMonitor(He,"stages",{label:"Stages",interval:500});let Fe=null;if(j.timeQueryEnabled){Fe=document.createElement("canvas"),Fe.width=280,Fe.height=24,Fe.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(Fe);const se=le=>{const Ge=Fe.getContext("2d");if(!Ge)return;const Re=Fe.width,Pe=Fe.height;if(Ge.clearRect(0,0,Re,Pe),!le||le.total<=0){Ge.fillStyle="#888",Ge.font="11px ui-monospace,Menlo,monospace",Ge.fillText("awaiting GPU timestamps…",8,16);return}const ce=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],je=Math.max(.001,ce.reduce((lt,vt)=>lt+vt.ms,0));let Qe=0;Ge.font="10px ui-monospace,Menlo,monospace",Ge.textBaseline="middle";for(const lt of ce){const vt=lt.ms/je*Re;Ge.fillStyle=lt.color,Ge.fillRect(Qe,0,vt,Pe),vt>=38&&(Ge.fillStyle="#000c",Ge.fillText(`${lt.label} ${lt.ms.toFixed(1)}`,Qe+4,Pe/2)),Qe+=vt}};setInterval(()=>{_e||j.readPerfMetrics({silent:!0}).then(()=>{const le=j.lastStageBreakdownMs;se(le),le&&(He.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const Ke=.4,Ye=3,st=.3;let Ne=null,rt=0,at=0;const it=ft.create(),ot=Et.create();let Me=v.length>0?0:-1;const tt={view:v.length>0?`${Me+1} / ${v.length}: ${v[Me].img_name??Me}`:"— no presets —"};c.addMonitor(tt,"view",{label:"View",interval:100});function Ze(se){const me=Et.create(se[0],se[1],se[2],se[4],se[5],se[6],se[8],se[9],se[10]);return ft.fromMat(me)}function dt(se,me){Ne={fromPos:I.clone(b.position),toPos:I.clone(se.position),fromQuat:ft.normalize(Ze(b.rotation)),toQuat:ft.normalize(Ze(se.rotation)),target:se,t:0,duration:Math.max(.01,me)}}const Xe=(se,me=!0)=>{if(v.length===0)return;Me=(se%v.length+v.length)%v.length;const le=v[Me];me?dt(le,Ke):(b.set_preset(le),S.resetToCamera(),J()),tt.view=`${Me+1} / ${v.length}: ${v[Me].img_name??Me}`};v.length>0&&(c.addButton({title:"◀ Prev view"}).on("click",()=>Xe(Me-1)),c.addButton({title:"Next view ▶"}).on("click",()=>Xe(Me+1)));const Ct=v.length>0?Bi(v,{tiltDownDeg:15,alignFirst:!0}):null,wt=Ct?Lc(v,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let _t=0;const Mt=12;_.value={onAnimateStart:()=>{_t=0},onAnimateStop:()=>{S.resetToCamera(),J()}},c.addInput(h,"render_scale",{label:"Render scale",min:.25,max:r,step:.25}).on("change",se=>{const me=Math.max(.25,se.value),le=Math.max(1,Math.ceil(me*i.clientWidth)),Ge=Math.max(1,Math.ceil(me*i.clientHeight));(i.width!==le||i.height!==Ge)&&(i.width=le,i.height=Ge,X())}),c.addInput(h,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",se=>di(se.value,f,j.render_settings_buffer)),c.addInput(h,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",se=>pi(se.value,f,j.render_settings_buffer)),c.addInput(h,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",se=>{j.bgColor=[se.value.r,se.value.g,se.value.b,se.value.a]});const Ot=g?g.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";if(c.addInput(h,"atlas_enabled",{label:Ot}).on("change",se=>j.setAtlasEnabled(se.value)),j.hasMips&&(j.setMipMode(h.mips),c.addInput(h,"mips",{label:"Mips (trilinear)"}).on("change",se=>j.setMipMode(se.value))),c.addInput(h,"legacy_renderer",{label:"Legacy renderer"}).on("change",se=>j.setLegacyRenderer(se.value)),c.addInput(h,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",se=>j.setFetchById(se.value)),c.addInput(h,"bfc",{label:"Backface"}).on("change",se=>zt({bfc:se.value},f,j.render_settings_buffer)),!(((Fn=g==null?void 0:g.meta)==null?void 0:Fn.probe_mode)===1)){c.addInput(h,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",ce=>{j.htEnabled=ce.value>0,j.htSortedTail=ce.value===2,j.htOccTail=ce.value===3}),c.addInput(h,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",ce=>j.setHtTailK(ce.value)),c.addInput(h,"wsr",{label:"WSR (sort-free)"}).on("change",ce=>{j.wsrEnabled=ce.value}),c.addInput(h,"wsr_gate",{label:"WSR sat-gate"}).on("change",ce=>{j.wsrGateEnabled=ce.value}),c.addInput(h,"wsr_dgate",{label:"WSR D-gate"}).on("change",ce=>{j.wsrDGateEnabled=ce.value}),c.addInput(h,"sat_t",{label:"sat tolerance T",min:.01,max:.5,step:.005}).on("change",ce=>{j.setWsrSatT(ce.value)}),c.addInput(h,"dg_margin",{label:"D-gate margin",min:.02,max:.8,step:.005}).on("change",ce=>{j.setWsrDGateMargin(ce.value)});const se=c.addInput(h,"mesh_cull",{label:"Mesh cull"});se.on("change",ce=>j.setMeshCullEnabled(ce.value)),j.hasMesh||(se.disabled=!0);const me=c.addInput(h,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});me.on("change",ce=>j.setMeshMargin(ce.value)),j.hasMesh||(me.disabled=!0);const le=c.addInput(h,"mesh_debug",{label:"Mesh debug"});le.on("change",ce=>j.setMeshOverlayEnabled(ce.value)),j.hasMesh||(le.disabled=!0);const Ge=c.addInput(h,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});Ge.on("change",ce=>zt({meshSampleMode:ce.value},f,j.render_settings_buffer)),j.hasMesh||(Ge.disabled=!0);const Re=c.addInput(h,"mesh_silhouette",{label:"Silhouette cull"});Re.on("change",ce=>zt({meshSilhouetteCull:ce.value},f,j.render_settings_buffer)),j.hasMesh||(Re.disabled=!0);const Pe=c.addInput(h,"mesh_invert_depth",{label:"Invert depth cull"});Pe.on("change",ce=>zt({meshInvertDepth:ce.value},f,j.render_settings_buffer)),j.hasMesh||(Pe.disabled=!0)}c.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(v.length>0)b.set_preset(v[0]);else{const se=d.bbox.max[0]-d.bbox.min[0],me=d.bbox.max[1]-d.bbox.min[1],le=d.bbox.max[2]-d.bbox.min[2],Re=.5*Math.sqrt(se*se+me*me+le*le)*.5;I.set($[0]-Re,$[1]-Re,$[2]-Re,b.position);const Pe=I.create(Re,Re,Re);I.normalize(Pe,Pe);const ce=I.create();I.cross(I.create(0,1,0),Pe,ce),I.normalize(ce,ce);const je=I.create();I.cross(Pe,ce,je);const Qe=Et.create(ce[0],je[0],Pe[0],ce[1],je[1],Pe[1],ce[2],je[2],Pe[2]);pt.fromMat3(Qe,b.rotation),b.update_buffer()}S.resetToCamera(),J()});const kt={result:"— click Benchmark —"};c.addMonitor(kt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Zt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Vt(){const me=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(Zt))if(me.startsWith(le))return le;return null}const Tt=document.createElement("div");Tt.id="bench-overlay",Tt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Tt);function Xt(se,me,le){const Ge=Math.floor(me/Math.max(1,le)*100),Re=32,Pe=Math.floor(me/Math.max(1,le)*Re),ce="█".repeat(Pe)+"░".repeat(Re-Pe);Tt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${se}</div><div>[${ce}] ${Ge}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${me} / ${le} frames · offscreen · pipelined · no vsync</div>`,Tt.style.display="block"}function Je(){Tt.style.display="none"}async function Un(se=10,me=200){if(_e)return;if(v.length===0){kt.result="no cameras to benchmark";return}_e=!0;const le=D,Ge=h.animate,Re=new Float32Array(b.position),Pe=new Float32Array(b.rotation);D=!1,h.animate=!1,c.refresh(),Ne=null,S.enabled=!1;const ce=Vt(),je=ce?Zt[ce]:null,Qe=(je==null?void 0:je.w)??i.width,lt=(je==null?void 0:je.h)??i.height,vt=(je==null?void 0:je.fovY)??b.getFov(),ds=ce?`${ce} · ${Qe>=4e3/4+500?"images_4":"images_2"}`:"custom",Nn=i.width,Wn=i.height,$n=b.getFov();i.width=Qe,i.height=lt,b.setFov(vt),ns(Qe,lt,f,j.render_settings_buffer);const qn=f.createTexture({size:[Qe,lt,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ps=qn.createView(),hs=()=>{const ct=f.createCommandEncoder();j.frame(ct,ps,!1),f.queue.submit([ct.finish()])},jn=()=>new Promise(ct=>setTimeout(ct,0)),Jt=20,xt=async(ct,Bt)=>{let en=0,yt=0;for(Xt(Bt,0,ct),await jn();yt<ct;){const Ft=Math.min(Jt,ct-yt),hn=performance.now();for(let fn=0;fn<Ft;fn++)b.set_preset(v[(yt+fn)%v.length]),hs();await f.queue.onSubmittedWorkDone();const tn=performance.now();en+=tn-hn,yt+=Ft,Xt(Bt,yt,ct),await jn()}return en};try{await xt(se,"Warming up");const Bt=await xt(me,"Benchmarking")/me,en=1e3/Bt,yt=d.num_points??d.surfel_data.length/8,Ft=(vt*180/Math.PI).toFixed(1),hn=`${en.toFixed(1)} FPS  (${Bt.toFixed(2)} ms/frame)
${Qe}×${lt} · fovY ${Ft}° · ${ds}
${yt.toLocaleString()} surfels · ${se}w+${me}b · pipelined`;kt.result=hn,console.log("[bench]",hn.replace(/\n/g,"  |  "))}catch(ct){console.error("[bench] failed:",ct),kt.result=`bench failed: ${ct}`}finally{Je(),qn.destroy(),i.width=Nn,i.height=Wn,b.setFov($n),ns(Nn,Wn,f,j.render_settings_buffer),b.position.set(Re),b.rotation.set(Pe),b.update_buffer(),S.enabled=!le,D=le,h.animate=Ge,c.refresh(),_e=!1}}c.addButton({title:"📊 Benchmark"}).on("click",()=>Un()),document.addEventListener("keydown",se=>{const me=se.key;if(me>="0"&&me<="9"&&v.length>0){const le=parseInt(me);le<v.length&&Xe(le)}else me==="ArrowLeft"||me==="PageUp"?(Xe(Me-1),se.preventDefault()):me==="ArrowRight"||me==="PageDown"?(Xe(Me+1),se.preventDefault()):(me==="d"||me==="D")&&j.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function On(se,me){const le=i.getBoundingClientRect(),Ge=window.devicePixelRatio||1;return[(se-le.left)*Ge,(me-le.top)*Ge]}i.addEventListener("dblclick",se=>{const[me,le]=On(se.clientX,se.clientY);ie(me,le)});let Qt=0,Vn=0,Dt=0;i.addEventListener("pointerdown",se=>{if(se.pointerType!=="touch")return;const me=performance.now(),le=me-Qt,Ge=se.clientX-Vn,Re=se.clientY-Dt;if(le>0&&le<300&&Ge*Ge+Re*Re<40*40){const[Pe,ce]=On(se.clientX,se.clientY);ie(Pe,ce),Qt=0}else Qt=me,Vn=se.clientX,Dt=se.clientY});function xn(){return T}let yn=performance.now(),Pn=60,Sn=Promise.resolve(),pn=0;async function At(){var Re;const se=performance.now(),me=Math.min((se-yn)/1e3,.1);if(yn=se,me>0){const Pe=((Re=j.lastStageBreakdownMs)==null?void 0:Re.total)??0,ce=Pe>.5?1e3/Pe:1/me;Pn=Pn*.9+ce*.1,We.stats=`${Be} surfels · ${Math.round(Pn)} fps`}if(_e){requestAnimationFrame(At);return}if(xn()&&(Ne||D)&&(Ne=null,S.resetToCamera(),J(),D&&(D=!1,h.animate=!1,c.refresh())),D&&h.animateMode==="circle"&&Ct){_t+=me/Mt,_t>=1&&(_t-=1);const Pe=Mi(Ct,_t);b.set_preset(Pe),S.update(me);const ce=f.createCommandEncoder();j.frame(ce,a.getCurrentTexture().createView()),f.queue.submit([ce.finish()]),pn++,pn===2&&In(),requestAnimationFrame(At);return}if(Ne){Ne.t+=me/Ne.duration;const Pe=Math.min(1,Ne.t),ce=Pe*Pe*(3-2*Pe);I.lerp(Ne.fromPos,Ne.toPos,ce,b.position),ft.slerp(Ne.fromQuat,Ne.toQuat,ce,it),Et.fromQuat(it,ot),pt.fromMat3(ot,b.rotation),b.update_buffer(),Ne.t>=1&&(b.set_preset(Ne.target),Ne=null,D?v.length>0&&(rt=st):(S.resetToCamera(),J()))}else if(D&&!xn()){const Pe=h.animateMode==="circle"&&wt.length>0,ce=Pe?wt:v;if(ce.length!==0){if(rt-=me,rt<=0){const Qe=((Pe?at:Me)+1)%ce.length;Pe?at=Qe:Me=Qe;const lt=Pe?Ye/8:Ye;dt(ce[Qe],lt),Pe||(tt.view=`${Me+1} / ${v.length}: ${v[Me].img_name??Me}`)}}}S.update(me),O(),U(),await Sn;const le=f.createCommandEncoder(),Ge=a.getCurrentTexture().createView();j.frame(le,Ge),f.queue.submit([le.finish()]),Sn=f.queue.onSubmittedWorkDone(),pn++,pn===2&&In(),requestAnimationFrame(At)}requestAnimationFrame(At)}}(function(){let a="dev";for(const y of Array.from(document.querySelectorAll('script[type="module"]'))){const S=y.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(S){a=S[1];break}}const f=document.createElement("div");f.textContent="v "+a,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const S=document.querySelector("#title");S.innerText="WebGPU is not supported in this browser.";return}const i=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(i===null){const S=document.querySelector("#title");S.innerText="No adapter is available for WebGPU.";return}const a=[];i.features.has("timestamp-query")&&a.push("timestamp-query"),i.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),i.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",i.info??"(unknown)"),console.log("[adapter] features:",Array.from(i.features)),console.log("[adapter] BC7:",i.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",i.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:i.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxTextureDimension2D:i.limits.maxTextureDimension2D});const f=await i.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize}}),y=document.querySelector("#webgpu-canvas");Vl(y!==null);const b=y.getContext("webgpu");Zc(y,b,f,a)})();
