var xl=Object.defineProperty;var yl=(o,a,h)=>a in o?xl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[a]=h;var G=(o,a,h)=>(yl(o,typeof a!="symbol"?a+"":a,h),h);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))S(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const M of C.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&S(M)}).observe(document,{childList:!0,subtree:!0});function h(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function S(g){if(g.ep)return;g.ep=!0;const C=h(g);fetch(g.href,C)}})();function Pl(o,a){return class extends o{constructor(...h){super(...h),a(this)}}}const Sl=Pl(Array,o=>o.fill(0));let Le=1e-6;function El(o){function a(P=0,k=0){const w=new o(2);return P!==void 0&&(w[0]=P,k!==void 0&&(w[1]=k)),w}const h=a;function S(P,k,w){const r=w??new o(2);return r[0]=P,r[1]=k,r}function g(P,k){const w=k??new o(2);return w[0]=Math.ceil(P[0]),w[1]=Math.ceil(P[1]),w}function C(P,k){const w=k??new o(2);return w[0]=Math.floor(P[0]),w[1]=Math.floor(P[1]),w}function M(P,k){const w=k??new o(2);return w[0]=Math.round(P[0]),w[1]=Math.round(P[1]),w}function F(P,k=0,w=1,r){const _=r??new o(2);return _[0]=Math.min(w,Math.max(k,P[0])),_[1]=Math.min(w,Math.max(k,P[1])),_}function L(P,k,w){const r=w??new o(2);return r[0]=P[0]+k[0],r[1]=P[1]+k[1],r}function R(P,k,w,r){const _=r??new o(2);return _[0]=P[0]+k[0]*w,_[1]=P[1]+k[1]*w,_}function $(P,k){const w=P[0],r=P[1],_=k[0],d=k[1],p=Math.sqrt(w*w+r*r),l=Math.sqrt(_*_+d*d),m=p*l,y=m&&_e(P,k)/m;return Math.acos(y)}function N(P,k,w){const r=w??new o(2);return r[0]=P[0]-k[0],r[1]=P[1]-k[1],r}const Y=N;function V(P,k){return Math.abs(P[0]-k[0])<Le&&Math.abs(P[1]-k[1])<Le}function O(P,k){return P[0]===k[0]&&P[1]===k[1]}function U(P,k,w,r){const _=r??new o(2);return _[0]=P[0]+w*(k[0]-P[0]),_[1]=P[1]+w*(k[1]-P[1]),_}function D(P,k,w,r){const _=r??new o(2);return _[0]=P[0]+w[0]*(k[0]-P[0]),_[1]=P[1]+w[1]*(k[1]-P[1]),_}function Q(P,k,w){const r=w??new o(2);return r[0]=Math.max(P[0],k[0]),r[1]=Math.max(P[1],k[1]),r}function I(P,k,w){const r=w??new o(2);return r[0]=Math.min(P[0],k[0]),r[1]=Math.min(P[1],k[1]),r}function j(P,k,w){const r=w??new o(2);return r[0]=P[0]*k,r[1]=P[1]*k,r}const K=j;function oe(P,k,w){const r=w??new o(2);return r[0]=P[0]/k,r[1]=P[1]/k,r}function ge(P,k){const w=k??new o(2);return w[0]=1/P[0],w[1]=1/P[1],w}const ue=ge;function se(P,k,w){const r=w??new o(3),_=P[0]*k[1]-P[1]*k[0];return r[0]=0,r[1]=0,r[2]=_,r}function _e(P,k){return P[0]*k[0]+P[1]*k[1]}function te(P){const k=P[0],w=P[1];return Math.sqrt(k*k+w*w)}const Oe=te;function Ge(P){const k=P[0],w=P[1];return k*k+w*w}const Ie=Ge;function Te(P,k){const w=P[0]-k[0],r=P[1]-k[1];return Math.sqrt(w*w+r*r)}const ve=Te;function ye(P,k){const w=P[0]-k[0],r=P[1]-k[1];return w*w+r*r}const le=ye;function re(P,k){const w=k??new o(2),r=P[0],_=P[1],d=Math.sqrt(r*r+_*_);return d>1e-5?(w[0]=r/d,w[1]=_/d):(w[0]=0,w[1]=0),w}function ie(P,k){const w=k??new o(2);return w[0]=-P[0],w[1]=-P[1],w}function me(P,k){const w=k??new o(2);return w[0]=P[0],w[1]=P[1],w}const he=me;function be(P,k,w){const r=w??new o(2);return r[0]=P[0]*k[0],r[1]=P[1]*k[1],r}const Ae=be;function xe(P,k,w){const r=w??new o(2);return r[0]=P[0]/k[0],r[1]=P[1]/k[1],r}const ke=xe;function Ue(P=1,k){const w=k??new o(2),r=Math.random()*2*Math.PI;return w[0]=Math.cos(r)*P,w[1]=Math.sin(r)*P,w}function T(P){const k=P??new o(2);return k[0]=0,k[1]=0,k}function H(P,k,w){const r=w??new o(2),_=P[0],d=P[1];return r[0]=_*k[0]+d*k[4]+k[12],r[1]=_*k[1]+d*k[5]+k[13],r}function x(P,k,w){const r=w??new o(2),_=P[0],d=P[1];return r[0]=k[0]*_+k[4]*d+k[8],r[1]=k[1]*_+k[5]*d+k[9],r}function i(P,k,w,r){const _=r??new o(2),d=P[0]-k[0],p=P[1]-k[1],l=Math.sin(w),m=Math.cos(w);return _[0]=d*m-p*l+k[0],_[1]=d*l+p*m+k[1],_}function f(P,k,w){const r=w??new o(2);return re(P,r),j(r,k,r)}function c(P,k,w){const r=w??new o(2);return te(P)>k?f(P,k,r):me(P,r)}function v(P,k,w){const r=w??new o(2);return U(P,k,.5,r)}return{create:a,fromValues:h,set:S,ceil:g,floor:C,round:M,clamp:F,add:L,addScaled:R,angle:$,subtract:N,sub:Y,equalsApproximately:V,equals:O,lerp:U,lerpV:D,max:Q,min:I,mulScalar:j,scale:K,divScalar:oe,inverse:ge,invert:ue,cross:se,dot:_e,length:te,len:Oe,lengthSq:Ge,lenSq:Ie,distance:Te,dist:ve,distanceSq:ye,distSq:le,normalize:re,negate:ie,copy:me,clone:he,multiply:be,mul:Ae,divide:xe,div:ke,random:Ue,zero:T,transformMat4:H,transformMat3:x,rotate:i,setLength:f,truncate:c,midpoint:v}}const Hr=new Map;function di(o){let a=Hr.get(o);return a||(a=El(o),Hr.set(o,a)),a}function Cl(o){function a(l,m,y){const b=new o(3);return l!==void 0&&(b[0]=l,m!==void 0&&(b[1]=m,y!==void 0&&(b[2]=y))),b}const h=a;function S(l,m,y,b){const B=b??new o(3);return B[0]=l,B[1]=m,B[2]=y,B}function g(l,m){const y=m??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function C(l,m){const y=m??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function M(l,m){const y=m??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function F(l,m=0,y=1,b){const B=b??new o(3);return B[0]=Math.min(y,Math.max(m,l[0])),B[1]=Math.min(y,Math.max(m,l[1])),B[2]=Math.min(y,Math.max(m,l[2])),B}function L(l,m,y){const b=y??new o(3);return b[0]=l[0]+m[0],b[1]=l[1]+m[1],b[2]=l[2]+m[2],b}function R(l,m,y,b){const B=b??new o(3);return B[0]=l[0]+m[0]*y,B[1]=l[1]+m[1]*y,B[2]=l[2]+m[2]*y,B}function $(l,m){const y=l[0],b=l[1],B=l[2],W=m[0],q=m[1],ne=m[2],ee=Math.sqrt(y*y+b*b+B*B),Z=Math.sqrt(W*W+q*q+ne*ne),fe=ee*Z,we=fe&&_e(l,m)/fe;return Math.acos(we)}function N(l,m,y){const b=y??new o(3);return b[0]=l[0]-m[0],b[1]=l[1]-m[1],b[2]=l[2]-m[2],b}const Y=N;function V(l,m){return Math.abs(l[0]-m[0])<Le&&Math.abs(l[1]-m[1])<Le&&Math.abs(l[2]-m[2])<Le}function O(l,m){return l[0]===m[0]&&l[1]===m[1]&&l[2]===m[2]}function U(l,m,y,b){const B=b??new o(3);return B[0]=l[0]+y*(m[0]-l[0]),B[1]=l[1]+y*(m[1]-l[1]),B[2]=l[2]+y*(m[2]-l[2]),B}function D(l,m,y,b){const B=b??new o(3);return B[0]=l[0]+y[0]*(m[0]-l[0]),B[1]=l[1]+y[1]*(m[1]-l[1]),B[2]=l[2]+y[2]*(m[2]-l[2]),B}function Q(l,m,y){const b=y??new o(3);return b[0]=Math.max(l[0],m[0]),b[1]=Math.max(l[1],m[1]),b[2]=Math.max(l[2],m[2]),b}function I(l,m,y){const b=y??new o(3);return b[0]=Math.min(l[0],m[0]),b[1]=Math.min(l[1],m[1]),b[2]=Math.min(l[2],m[2]),b}function j(l,m,y){const b=y??new o(3);return b[0]=l[0]*m,b[1]=l[1]*m,b[2]=l[2]*m,b}const K=j;function oe(l,m,y){const b=y??new o(3);return b[0]=l[0]/m,b[1]=l[1]/m,b[2]=l[2]/m,b}function ge(l,m){const y=m??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const ue=ge;function se(l,m,y){const b=y??new o(3),B=l[2]*m[0]-l[0]*m[2],W=l[0]*m[1]-l[1]*m[0];return b[0]=l[1]*m[2]-l[2]*m[1],b[1]=B,b[2]=W,b}function _e(l,m){return l[0]*m[0]+l[1]*m[1]+l[2]*m[2]}function te(l){const m=l[0],y=l[1],b=l[2];return Math.sqrt(m*m+y*y+b*b)}const Oe=te;function Ge(l){const m=l[0],y=l[1],b=l[2];return m*m+y*y+b*b}const Ie=Ge;function Te(l,m){const y=l[0]-m[0],b=l[1]-m[1],B=l[2]-m[2];return Math.sqrt(y*y+b*b+B*B)}const ve=Te;function ye(l,m){const y=l[0]-m[0],b=l[1]-m[1],B=l[2]-m[2];return y*y+b*b+B*B}const le=ye;function re(l,m){const y=m??new o(3),b=l[0],B=l[1],W=l[2],q=Math.sqrt(b*b+B*B+W*W);return q>1e-5?(y[0]=b/q,y[1]=B/q,y[2]=W/q):(y[0]=0,y[1]=0,y[2]=0),y}function ie(l,m){const y=m??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function me(l,m){const y=m??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const he=me;function be(l,m,y){const b=y??new o(3);return b[0]=l[0]*m[0],b[1]=l[1]*m[1],b[2]=l[2]*m[2],b}const Ae=be;function xe(l,m,y){const b=y??new o(3);return b[0]=l[0]/m[0],b[1]=l[1]/m[1],b[2]=l[2]/m[2],b}const ke=xe;function Ue(l=1,m){const y=m??new o(3),b=Math.random()*2*Math.PI,B=Math.random()*2-1,W=Math.sqrt(1-B*B)*l;return y[0]=Math.cos(b)*W,y[1]=Math.sin(b)*W,y[2]=B*l,y}function T(l){const m=l??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function H(l,m,y){const b=y??new o(3),B=l[0],W=l[1],q=l[2],ne=m[3]*B+m[7]*W+m[11]*q+m[15]||1;return b[0]=(m[0]*B+m[4]*W+m[8]*q+m[12])/ne,b[1]=(m[1]*B+m[5]*W+m[9]*q+m[13])/ne,b[2]=(m[2]*B+m[6]*W+m[10]*q+m[14])/ne,b}function x(l,m,y){const b=y??new o(3),B=l[0],W=l[1],q=l[2];return b[0]=B*m[0*4+0]+W*m[1*4+0]+q*m[2*4+0],b[1]=B*m[0*4+1]+W*m[1*4+1]+q*m[2*4+1],b[2]=B*m[0*4+2]+W*m[1*4+2]+q*m[2*4+2],b}function i(l,m,y){const b=y??new o(3),B=l[0],W=l[1],q=l[2];return b[0]=B*m[0]+W*m[4]+q*m[8],b[1]=B*m[1]+W*m[5]+q*m[9],b[2]=B*m[2]+W*m[6]+q*m[10],b}function f(l,m,y){const b=y??new o(3),B=m[0],W=m[1],q=m[2],ne=m[3]*2,ee=l[0],Z=l[1],fe=l[2],we=W*fe-q*Z,de=q*ee-B*fe,ae=B*Z-W*ee;return b[0]=ee+we*ne+(W*ae-q*de)*2,b[1]=Z+de*ne+(q*we-B*ae)*2,b[2]=fe+ae*ne+(B*de-W*we)*2,b}function c(l,m){const y=m??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function v(l,m,y){const b=y??new o(3),B=m*4;return b[0]=l[B+0],b[1]=l[B+1],b[2]=l[B+2],b}function P(l,m){const y=m??new o(3),b=l[0],B=l[1],W=l[2],q=l[4],ne=l[5],ee=l[6],Z=l[8],fe=l[9],we=l[10];return y[0]=Math.sqrt(b*b+B*B+W*W),y[1]=Math.sqrt(q*q+ne*ne+ee*ee),y[2]=Math.sqrt(Z*Z+fe*fe+we*we),y}function k(l,m,y,b){const B=b??new o(3),W=[],q=[];return W[0]=l[0]-m[0],W[1]=l[1]-m[1],W[2]=l[2]-m[2],q[0]=W[0],q[1]=W[1]*Math.cos(y)-W[2]*Math.sin(y),q[2]=W[1]*Math.sin(y)+W[2]*Math.cos(y),B[0]=q[0]+m[0],B[1]=q[1]+m[1],B[2]=q[2]+m[2],B}function w(l,m,y,b){const B=b??new o(3),W=[],q=[];return W[0]=l[0]-m[0],W[1]=l[1]-m[1],W[2]=l[2]-m[2],q[0]=W[2]*Math.sin(y)+W[0]*Math.cos(y),q[1]=W[1],q[2]=W[2]*Math.cos(y)-W[0]*Math.sin(y),B[0]=q[0]+m[0],B[1]=q[1]+m[1],B[2]=q[2]+m[2],B}function r(l,m,y,b){const B=b??new o(3),W=[],q=[];return W[0]=l[0]-m[0],W[1]=l[1]-m[1],W[2]=l[2]-m[2],q[0]=W[0]*Math.cos(y)-W[1]*Math.sin(y),q[1]=W[0]*Math.sin(y)+W[1]*Math.cos(y),q[2]=W[2],B[0]=q[0]+m[0],B[1]=q[1]+m[1],B[2]=q[2]+m[2],B}function _(l,m,y){const b=y??new o(3);return re(l,b),j(b,m,b)}function d(l,m,y){const b=y??new o(3);return te(l)>m?_(l,m,b):me(l,b)}function p(l,m,y){const b=y??new o(3);return U(l,m,.5,b)}return{create:a,fromValues:h,set:S,ceil:g,floor:C,round:M,clamp:F,add:L,addScaled:R,angle:$,subtract:N,sub:Y,equalsApproximately:V,equals:O,lerp:U,lerpV:D,max:Q,min:I,mulScalar:j,scale:K,divScalar:oe,inverse:ge,invert:ue,cross:se,dot:_e,length:te,len:Oe,lengthSq:Ge,lenSq:Ie,distance:Te,dist:ve,distanceSq:ye,distSq:le,normalize:re,negate:ie,copy:me,clone:he,multiply:be,mul:Ae,divide:xe,div:ke,random:Ue,zero:T,transformMat4:H,transformMat4Upper3x3:x,transformMat3:i,transformQuat:f,getTranslation:c,getAxis:v,getScaling:P,rotateX:k,rotateY:w,rotateZ:r,setLength:_,truncate:d,midpoint:p}}const Kr=new Map;function as(o){let a=Kr.get(o);return a||(a=Cl(o),Kr.set(o,a)),a}function kl(o){const a=di(o),h=as(o);function S(i,f,c,v,P,k,w,r,_){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,f!==void 0&&(d[1]=f,c!==void 0&&(d[2]=c,v!==void 0&&(d[4]=v,P!==void 0&&(d[5]=P,k!==void 0&&(d[6]=k,w!==void 0&&(d[8]=w,r!==void 0&&(d[9]=r,_!==void 0&&(d[10]=_))))))))),d}function g(i,f,c,v,P,k,w,r,_,d){const p=d??new o(12);return p[0]=i,p[1]=f,p[2]=c,p[3]=0,p[4]=v,p[5]=P,p[6]=k,p[7]=0,p[8]=w,p[9]=r,p[10]=_,p[11]=0,p}function C(i,f){const c=f??new o(12);return c[0]=i[0],c[1]=i[1],c[2]=i[2],c[3]=0,c[4]=i[4],c[5]=i[5],c[6]=i[6],c[7]=0,c[8]=i[8],c[9]=i[9],c[10]=i[10],c[11]=0,c}function M(i,f){const c=f??new o(12),v=i[0],P=i[1],k=i[2],w=i[3],r=v+v,_=P+P,d=k+k,p=v*r,l=P*r,m=P*_,y=k*r,b=k*_,B=k*d,W=w*r,q=w*_,ne=w*d;return c[0]=1-m-B,c[1]=l+ne,c[2]=y-q,c[3]=0,c[4]=l-ne,c[5]=1-p-B,c[6]=b+W,c[7]=0,c[8]=y+q,c[9]=b-W,c[10]=1-p-m,c[11]=0,c}function F(i,f){const c=f??new o(12);return c[0]=-i[0],c[1]=-i[1],c[2]=-i[2],c[4]=-i[4],c[5]=-i[5],c[6]=-i[6],c[8]=-i[8],c[9]=-i[9],c[10]=-i[10],c}function L(i,f,c){const v=c??new o(12);return v[0]=i[0]*f,v[1]=i[1]*f,v[2]=i[2]*f,v[4]=i[4]*f,v[5]=i[5]*f,v[6]=i[6]*f,v[8]=i[8]*f,v[9]=i[9]*f,v[10]=i[10]*f,v}const R=L;function $(i,f,c){const v=c??new o(12);return v[0]=i[0]+f[0],v[1]=i[1]+f[1],v[2]=i[2]+f[2],v[4]=i[4]+f[4],v[5]=i[5]+f[5],v[6]=i[6]+f[6],v[8]=i[8]+f[8],v[9]=i[9]+f[9],v[10]=i[10]+f[10],v}function N(i,f){const c=f??new o(12);return c[0]=i[0],c[1]=i[1],c[2]=i[2],c[4]=i[4],c[5]=i[5],c[6]=i[6],c[8]=i[8],c[9]=i[9],c[10]=i[10],c}const Y=N;function V(i,f){return Math.abs(i[0]-f[0])<Le&&Math.abs(i[1]-f[1])<Le&&Math.abs(i[2]-f[2])<Le&&Math.abs(i[4]-f[4])<Le&&Math.abs(i[5]-f[5])<Le&&Math.abs(i[6]-f[6])<Le&&Math.abs(i[8]-f[8])<Le&&Math.abs(i[9]-f[9])<Le&&Math.abs(i[10]-f[10])<Le}function O(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function U(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function D(i,f){const c=f??new o(12);if(c===i){let m;return m=i[1],i[1]=i[4],i[4]=m,m=i[2],i[2]=i[8],i[8]=m,m=i[6],i[6]=i[9],i[9]=m,c}const v=i[0*4+0],P=i[0*4+1],k=i[0*4+2],w=i[1*4+0],r=i[1*4+1],_=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2];return c[0]=v,c[1]=w,c[2]=d,c[4]=P,c[5]=r,c[6]=p,c[8]=k,c[9]=_,c[10]=l,c}function Q(i,f){const c=f??new o(12),v=i[0*4+0],P=i[0*4+1],k=i[0*4+2],w=i[1*4+0],r=i[1*4+1],_=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2],m=l*r-_*p,y=-l*w+_*d,b=p*w-r*d,B=1/(v*m+P*y+k*b);return c[0]=m*B,c[1]=(-l*P+k*p)*B,c[2]=(_*P-k*r)*B,c[4]=y*B,c[5]=(l*v-k*d)*B,c[6]=(-_*v+k*w)*B,c[8]=b*B,c[9]=(-p*v+P*d)*B,c[10]=(r*v-P*w)*B,c}function I(i){const f=i[0],c=i[0*4+1],v=i[0*4+2],P=i[1*4+0],k=i[1*4+1],w=i[1*4+2],r=i[2*4+0],_=i[2*4+1],d=i[2*4+2];return f*(k*d-_*w)-P*(c*d-_*v)+r*(c*w-k*v)}const j=Q;function K(i,f,c){const v=c??new o(12),P=i[0],k=i[1],w=i[2],r=i[4+0],_=i[4+1],d=i[4+2],p=i[8+0],l=i[8+1],m=i[8+2],y=f[0],b=f[1],B=f[2],W=f[4+0],q=f[4+1],ne=f[4+2],ee=f[8+0],Z=f[8+1],fe=f[8+2];return v[0]=P*y+r*b+p*B,v[1]=k*y+_*b+l*B,v[2]=w*y+d*b+m*B,v[4]=P*W+r*q+p*ne,v[5]=k*W+_*q+l*ne,v[6]=w*W+d*q+m*ne,v[8]=P*ee+r*Z+p*fe,v[9]=k*ee+_*Z+l*fe,v[10]=w*ee+d*Z+m*fe,v}const oe=K;function ge(i,f,c){const v=c??U();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=f[0],v[9]=f[1],v[10]=1,v}function ue(i,f){const c=f??a.create();return c[0]=i[8],c[1]=i[9],c}function se(i,f,c){const v=c??a.create(),P=f*4;return v[0]=i[P+0],v[1]=i[P+1],v}function _e(i,f,c,v){const P=v===i?i:N(i,v),k=c*4;return P[k+0]=f[0],P[k+1]=f[1],P}function te(i,f){const c=f??a.create(),v=i[0],P=i[1],k=i[4],w=i[5];return c[0]=Math.sqrt(v*v+P*P),c[1]=Math.sqrt(k*k+w*w),c}function Oe(i,f){const c=f??h.create(),v=i[0],P=i[1],k=i[2],w=i[4],r=i[5],_=i[6],d=i[8],p=i[9],l=i[10];return c[0]=Math.sqrt(v*v+P*P+k*k),c[1]=Math.sqrt(w*w+r*r+_*_),c[2]=Math.sqrt(d*d+p*p+l*l),c}function Ge(i,f){const c=f??new o(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=i[0],c[9]=i[1],c[10]=1,c}function Ie(i,f,c){const v=c??new o(12),P=f[0],k=f[1],w=i[0],r=i[1],_=i[2],d=i[1*4+0],p=i[1*4+1],l=i[1*4+2],m=i[2*4+0],y=i[2*4+1],b=i[2*4+2];return i!==v&&(v[0]=w,v[1]=r,v[2]=_,v[4]=d,v[5]=p,v[6]=l),v[8]=w*P+d*k+m,v[9]=r*P+p*k+y,v[10]=_*P+l*k+b,v}function Te(i,f){const c=f??new o(12),v=Math.cos(i),P=Math.sin(i);return c[0]=v,c[1]=P,c[2]=0,c[4]=-P,c[5]=v,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function ve(i,f,c){const v=c??new o(12),P=i[0*4+0],k=i[0*4+1],w=i[0*4+2],r=i[1*4+0],_=i[1*4+1],d=i[1*4+2],p=Math.cos(f),l=Math.sin(f);return v[0]=p*P+l*r,v[1]=p*k+l*_,v[2]=p*w+l*d,v[4]=p*r-l*P,v[5]=p*_-l*k,v[6]=p*d-l*w,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ye(i,f){const c=f??new o(12),v=Math.cos(i),P=Math.sin(i);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=v,c[6]=P,c[8]=0,c[9]=-P,c[10]=v,c}function le(i,f,c){const v=c??new o(12),P=i[4],k=i[5],w=i[6],r=i[8],_=i[9],d=i[10],p=Math.cos(f),l=Math.sin(f);return v[4]=p*P+l*r,v[5]=p*k+l*_,v[6]=p*w+l*d,v[8]=p*r-l*P,v[9]=p*_-l*k,v[10]=p*d-l*w,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function re(i,f){const c=f??new o(12),v=Math.cos(i),P=Math.sin(i);return c[0]=v,c[1]=0,c[2]=-P,c[4]=0,c[5]=1,c[6]=0,c[8]=P,c[9]=0,c[10]=v,c}function ie(i,f,c){const v=c??new o(12),P=i[0*4+0],k=i[0*4+1],w=i[0*4+2],r=i[2*4+0],_=i[2*4+1],d=i[2*4+2],p=Math.cos(f),l=Math.sin(f);return v[0]=p*P-l*r,v[1]=p*k-l*_,v[2]=p*w-l*d,v[8]=p*r+l*P,v[9]=p*_+l*k,v[10]=p*d+l*w,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const me=Te,he=ve;function be(i,f){const c=f??new o(12);return c[0]=i[0],c[1]=0,c[2]=0,c[4]=0,c[5]=i[1],c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function Ae(i,f,c){const v=c??new o(12),P=f[0],k=f[1];return v[0]=P*i[0*4+0],v[1]=P*i[0*4+1],v[2]=P*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function xe(i,f){const c=f??new o(12);return c[0]=i[0],c[1]=0,c[2]=0,c[4]=0,c[5]=i[1],c[6]=0,c[8]=0,c[9]=0,c[10]=i[2],c}function ke(i,f,c){const v=c??new o(12),P=f[0],k=f[1],w=f[2];return v[0]=P*i[0*4+0],v[1]=P*i[0*4+1],v[2]=P*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],v[8]=w*i[2*4+0],v[9]=w*i[2*4+1],v[10]=w*i[2*4+2],v}function Ue(i,f){const c=f??new o(12);return c[0]=i,c[1]=0,c[2]=0,c[4]=0,c[5]=i,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function T(i,f,c){const v=c??new o(12);return v[0]=f*i[0*4+0],v[1]=f*i[0*4+1],v[2]=f*i[0*4+2],v[4]=f*i[1*4+0],v[5]=f*i[1*4+1],v[6]=f*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function H(i,f){const c=f??new o(12);return c[0]=i,c[1]=0,c[2]=0,c[4]=0,c[5]=i,c[6]=0,c[8]=0,c[9]=0,c[10]=i,c}function x(i,f,c){const v=c??new o(12);return v[0]=f*i[0*4+0],v[1]=f*i[0*4+1],v[2]=f*i[0*4+2],v[4]=f*i[1*4+0],v[5]=f*i[1*4+1],v[6]=f*i[1*4+2],v[8]=f*i[2*4+0],v[9]=f*i[2*4+1],v[10]=f*i[2*4+2],v}return{add:$,clone:Y,copy:N,create:S,determinant:I,equals:O,equalsApproximately:V,fromMat4:C,fromQuat:M,get3DScaling:Oe,getAxis:se,getScaling:te,getTranslation:ue,identity:U,inverse:Q,invert:j,mul:oe,mulScalar:R,multiply:K,multiplyScalar:L,negate:F,rotate:ve,rotateX:le,rotateY:ie,rotateZ:he,rotation:Te,rotationX:ye,rotationY:re,rotationZ:me,scale:Ae,scale3D:ke,scaling:be,scaling3D:xe,set:g,setAxis:_e,setTranslation:ge,translate:Ie,translation:Ge,transpose:D,uniformScale:T,uniformScale3D:x,uniformScaling:Ue,uniformScaling3D:H}}const Yr=new Map;function Ml(o){let a=Yr.get(o);return a||(a=kl(o),Yr.set(o,a)),a}function Bl(o){const a=as(o);function h(r,_,d,p,l,m,y,b,B,W,q,ne,ee,Z,fe,we){const de=new o(16);return r!==void 0&&(de[0]=r,_!==void 0&&(de[1]=_,d!==void 0&&(de[2]=d,p!==void 0&&(de[3]=p,l!==void 0&&(de[4]=l,m!==void 0&&(de[5]=m,y!==void 0&&(de[6]=y,b!==void 0&&(de[7]=b,B!==void 0&&(de[8]=B,W!==void 0&&(de[9]=W,q!==void 0&&(de[10]=q,ne!==void 0&&(de[11]=ne,ee!==void 0&&(de[12]=ee,Z!==void 0&&(de[13]=Z,fe!==void 0&&(de[14]=fe,we!==void 0&&(de[15]=we)))))))))))))))),de}function S(r,_,d,p,l,m,y,b,B,W,q,ne,ee,Z,fe,we,de){const ae=de??new o(16);return ae[0]=r,ae[1]=_,ae[2]=d,ae[3]=p,ae[4]=l,ae[5]=m,ae[6]=y,ae[7]=b,ae[8]=B,ae[9]=W,ae[10]=q,ae[11]=ne,ae[12]=ee,ae[13]=Z,ae[14]=fe,ae[15]=we,ae}function g(r,_){const d=_??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,_){const d=_??new o(16),p=r[0],l=r[1],m=r[2],y=r[3],b=p+p,B=l+l,W=m+m,q=p*b,ne=l*b,ee=l*B,Z=m*b,fe=m*B,we=m*W,de=y*b,ae=y*B,Me=y*W;return d[0]=1-ee-we,d[1]=ne+Me,d[2]=Z-ae,d[3]=0,d[4]=ne-Me,d[5]=1-q-we,d[6]=fe+de,d[7]=0,d[8]=Z+ae,d[9]=fe-de,d[10]=1-q-ee,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,_){const d=_??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function F(r,_,d){const p=d??new o(16);return p[0]=r[0]+_[0],p[1]=r[1]+_[1],p[2]=r[2]+_[2],p[3]=r[3]+_[3],p[4]=r[4]+_[4],p[5]=r[5]+_[5],p[6]=r[6]+_[6],p[7]=r[7]+_[7],p[8]=r[8]+_[8],p[9]=r[9]+_[9],p[10]=r[10]+_[10],p[11]=r[11]+_[11],p[12]=r[12]+_[12],p[13]=r[13]+_[13],p[14]=r[14]+_[14],p[15]=r[15]+_[15],p}function L(r,_,d){const p=d??new o(16);return p[0]=r[0]*_,p[1]=r[1]*_,p[2]=r[2]*_,p[3]=r[3]*_,p[4]=r[4]*_,p[5]=r[5]*_,p[6]=r[6]*_,p[7]=r[7]*_,p[8]=r[8]*_,p[9]=r[9]*_,p[10]=r[10]*_,p[11]=r[11]*_,p[12]=r[12]*_,p[13]=r[13]*_,p[14]=r[14]*_,p[15]=r[15]*_,p}const R=L;function $(r,_){const d=_??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const N=$;function Y(r,_){return Math.abs(r[0]-_[0])<Le&&Math.abs(r[1]-_[1])<Le&&Math.abs(r[2]-_[2])<Le&&Math.abs(r[3]-_[3])<Le&&Math.abs(r[4]-_[4])<Le&&Math.abs(r[5]-_[5])<Le&&Math.abs(r[6]-_[6])<Le&&Math.abs(r[7]-_[7])<Le&&Math.abs(r[8]-_[8])<Le&&Math.abs(r[9]-_[9])<Le&&Math.abs(r[10]-_[10])<Le&&Math.abs(r[11]-_[11])<Le&&Math.abs(r[12]-_[12])<Le&&Math.abs(r[13]-_[13])<Le&&Math.abs(r[14]-_[14])<Le&&Math.abs(r[15]-_[15])<Le}function V(r,_){return r[0]===_[0]&&r[1]===_[1]&&r[2]===_[2]&&r[3]===_[3]&&r[4]===_[4]&&r[5]===_[5]&&r[6]===_[6]&&r[7]===_[7]&&r[8]===_[8]&&r[9]===_[9]&&r[10]===_[10]&&r[11]===_[11]&&r[12]===_[12]&&r[13]===_[13]&&r[14]===_[14]&&r[15]===_[15]}function O(r){const _=r??new o(16);return _[0]=1,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=1,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[10]=1,_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,_}function U(r,_){const d=_??new o(16);if(d===r){let Be;return Be=r[1],r[1]=r[4],r[4]=Be,Be=r[2],r[2]=r[8],r[8]=Be,Be=r[3],r[3]=r[12],r[12]=Be,Be=r[6],r[6]=r[9],r[9]=Be,Be=r[7],r[7]=r[13],r[13]=Be,Be=r[11],r[11]=r[14],r[14]=Be,d}const p=r[0*4+0],l=r[0*4+1],m=r[0*4+2],y=r[0*4+3],b=r[1*4+0],B=r[1*4+1],W=r[1*4+2],q=r[1*4+3],ne=r[2*4+0],ee=r[2*4+1],Z=r[2*4+2],fe=r[2*4+3],we=r[3*4+0],de=r[3*4+1],ae=r[3*4+2],Me=r[3*4+3];return d[0]=p,d[1]=b,d[2]=ne,d[3]=we,d[4]=l,d[5]=B,d[6]=ee,d[7]=de,d[8]=m,d[9]=W,d[10]=Z,d[11]=ae,d[12]=y,d[13]=q,d[14]=fe,d[15]=Me,d}function D(r,_){const d=_??new o(16),p=r[0*4+0],l=r[0*4+1],m=r[0*4+2],y=r[0*4+3],b=r[1*4+0],B=r[1*4+1],W=r[1*4+2],q=r[1*4+3],ne=r[2*4+0],ee=r[2*4+1],Z=r[2*4+2],fe=r[2*4+3],we=r[3*4+0],de=r[3*4+1],ae=r[3*4+2],Me=r[3*4+3],Be=Z*Me,We=ae*fe,Xe=W*Me,ze=ae*q,je=W*fe,et=Z*q,rt=m*Me,Qe=ae*y,tt=m*fe,it=Z*y,He=m*q,ot=W*y,qe=ne*de,nt=we*ee,Ke=b*de,ut=we*B,st=b*ee,Bt=ne*B,yt=p*de,vt=we*l,Ct=p*ee,Rt=ne*l,gt=p*B,Tt=b*l,un=Be*B+ze*ee+je*de-(We*B+Xe*ee+et*de),Ut=We*l+rt*ee+it*de-(Be*l+Qe*ee+tt*de),Ht=Xe*l+Qe*B+He*de-(ze*l+rt*B+ot*de),Vt=et*l+tt*B+ot*ee-(je*l+it*B+He*ee),Ye=1/(p*un+b*Ut+ne*Ht+we*Vt);return d[0]=Ye*un,d[1]=Ye*Ut,d[2]=Ye*Ht,d[3]=Ye*Vt,d[4]=Ye*(We*b+Xe*ne+et*we-(Be*b+ze*ne+je*we)),d[5]=Ye*(Be*p+Qe*ne+tt*we-(We*p+rt*ne+it*we)),d[6]=Ye*(ze*p+rt*b+ot*we-(Xe*p+Qe*b+He*we)),d[7]=Ye*(je*p+it*b+He*ne-(et*p+tt*b+ot*ne)),d[8]=Ye*(qe*q+ut*fe+st*Me-(nt*q+Ke*fe+Bt*Me)),d[9]=Ye*(nt*y+yt*fe+Rt*Me-(qe*y+vt*fe+Ct*Me)),d[10]=Ye*(Ke*y+vt*q+gt*Me-(ut*y+yt*q+Tt*Me)),d[11]=Ye*(Bt*y+Ct*q+Tt*fe-(st*y+Rt*q+gt*fe)),d[12]=Ye*(Ke*Z+Bt*ae+nt*W-(st*ae+qe*W+ut*Z)),d[13]=Ye*(Ct*ae+qe*m+vt*Z-(yt*Z+Rt*ae+nt*m)),d[14]=Ye*(yt*W+Tt*ae+ut*m-(gt*ae+Ke*m+vt*W)),d[15]=Ye*(gt*Z+st*m+Rt*W-(Ct*W+Tt*Z+Bt*m)),d}function Q(r){const _=r[0],d=r[0*4+1],p=r[0*4+2],l=r[0*4+3],m=r[1*4+0],y=r[1*4+1],b=r[1*4+2],B=r[1*4+3],W=r[2*4+0],q=r[2*4+1],ne=r[2*4+2],ee=r[2*4+3],Z=r[3*4+0],fe=r[3*4+1],we=r[3*4+2],de=r[3*4+3],ae=ne*de,Me=we*ee,Be=b*de,We=we*B,Xe=b*ee,ze=ne*B,je=p*de,et=we*l,rt=p*ee,Qe=ne*l,tt=p*B,it=b*l,He=ae*y+We*q+Xe*fe-(Me*y+Be*q+ze*fe),ot=Me*d+je*q+Qe*fe-(ae*d+et*q+rt*fe),qe=Be*d+et*y+tt*fe-(We*d+je*y+it*fe),nt=ze*d+rt*y+it*q-(Xe*d+Qe*y+tt*q);return _*He+m*ot+W*qe+Z*nt}const I=D;function j(r,_,d){const p=d??new o(16),l=r[0],m=r[1],y=r[2],b=r[3],B=r[4+0],W=r[4+1],q=r[4+2],ne=r[4+3],ee=r[8+0],Z=r[8+1],fe=r[8+2],we=r[8+3],de=r[12+0],ae=r[12+1],Me=r[12+2],Be=r[12+3],We=_[0],Xe=_[1],ze=_[2],je=_[3],et=_[4+0],rt=_[4+1],Qe=_[4+2],tt=_[4+3],it=_[8+0],He=_[8+1],ot=_[8+2],qe=_[8+3],nt=_[12+0],Ke=_[12+1],ut=_[12+2],st=_[12+3];return p[0]=l*We+B*Xe+ee*ze+de*je,p[1]=m*We+W*Xe+Z*ze+ae*je,p[2]=y*We+q*Xe+fe*ze+Me*je,p[3]=b*We+ne*Xe+we*ze+Be*je,p[4]=l*et+B*rt+ee*Qe+de*tt,p[5]=m*et+W*rt+Z*Qe+ae*tt,p[6]=y*et+q*rt+fe*Qe+Me*tt,p[7]=b*et+ne*rt+we*Qe+Be*tt,p[8]=l*it+B*He+ee*ot+de*qe,p[9]=m*it+W*He+Z*ot+ae*qe,p[10]=y*it+q*He+fe*ot+Me*qe,p[11]=b*it+ne*He+we*ot+Be*qe,p[12]=l*nt+B*Ke+ee*ut+de*st,p[13]=m*nt+W*Ke+Z*ut+ae*st,p[14]=y*nt+q*Ke+fe*ut+Me*st,p[15]=b*nt+ne*Ke+we*ut+Be*st,p}const K=j;function oe(r,_,d){const p=d??O();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=_[0],p[13]=_[1],p[14]=_[2],p[15]=1,p}function ge(r,_){const d=_??a.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function ue(r,_,d){const p=d??a.create(),l=_*4;return p[0]=r[l+0],p[1]=r[l+1],p[2]=r[l+2],p}function se(r,_,d,p){const l=p===r?p:$(r,p),m=d*4;return l[m+0]=_[0],l[m+1]=_[1],l[m+2]=_[2],l}function _e(r,_){const d=_??a.create(),p=r[0],l=r[1],m=r[2],y=r[4],b=r[5],B=r[6],W=r[8],q=r[9],ne=r[10];return d[0]=Math.sqrt(p*p+l*l+m*m),d[1]=Math.sqrt(y*y+b*b+B*B),d[2]=Math.sqrt(W*W+q*q+ne*ne),d}function te(r,_,d,p,l){const m=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(m[0]=y/_,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=y,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(p)){const b=1/(d-p);m[10]=p*b,m[14]=p*d*b}else m[10]=-1,m[14]=-d;return m}function Oe(r,_,d,p=1/0,l){const m=l??new o(16),y=1/Math.tan(r*.5);if(m[0]=y/_,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=y,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,p===1/0)m[10]=0,m[14]=d;else{const b=1/(p-d);m[10]=d*b,m[14]=p*d*b}return m}function Ge(r,_,d,p,l,m,y){const b=y??new o(16);return b[0]=2/(_-r),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(p-d),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(l-m),b[11]=0,b[12]=(_+r)/(r-_),b[13]=(p+d)/(d-p),b[14]=l/(l-m),b[15]=1,b}function Ie(r,_,d,p,l,m,y){const b=y??new o(16),B=_-r,W=p-d,q=l-m;return b[0]=2*l/B,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/W,b[6]=0,b[7]=0,b[8]=(r+_)/B,b[9]=(p+d)/W,b[10]=m/q,b[11]=-1,b[12]=0,b[13]=0,b[14]=l*m/q,b[15]=0,b}function Te(r,_,d,p,l,m=1/0,y){const b=y??new o(16),B=_-r,W=p-d;if(b[0]=2*l/B,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/W,b[6]=0,b[7]=0,b[8]=(r+_)/B,b[9]=(p+d)/W,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,m===1/0)b[10]=0,b[14]=l;else{const q=1/(m-l);b[10]=l*q,b[14]=m*l*q}return b}const ve=a.create(),ye=a.create(),le=a.create();function re(r,_,d,p){const l=p??new o(16);return a.normalize(a.subtract(_,r,le),le),a.normalize(a.cross(d,le,ve),ve),a.normalize(a.cross(le,ve,ye),ye),l[0]=ve[0],l[1]=ve[1],l[2]=ve[2],l[3]=0,l[4]=ye[0],l[5]=ye[1],l[6]=ye[2],l[7]=0,l[8]=le[0],l[9]=le[1],l[10]=le[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ie(r,_,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,_,le),le),a.normalize(a.cross(d,le,ve),ve),a.normalize(a.cross(le,ve,ye),ye),l[0]=ve[0],l[1]=ve[1],l[2]=ve[2],l[3]=0,l[4]=ye[0],l[5]=ye[1],l[6]=ye[2],l[7]=0,l[8]=le[0],l[9]=le[1],l[10]=le[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function me(r,_,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,_,le),le),a.normalize(a.cross(d,le,ve),ve),a.normalize(a.cross(le,ve,ye),ye),l[0]=ve[0],l[1]=ye[0],l[2]=le[0],l[3]=0,l[4]=ve[1],l[5]=ye[1],l[6]=le[1],l[7]=0,l[8]=ve[2],l[9]=ye[2],l[10]=le[2],l[11]=0,l[12]=-(ve[0]*r[0]+ve[1]*r[1]+ve[2]*r[2]),l[13]=-(ye[0]*r[0]+ye[1]*r[1]+ye[2]*r[2]),l[14]=-(le[0]*r[0]+le[1]*r[1]+le[2]*r[2]),l[15]=1,l}function he(r,_){const d=_??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function be(r,_,d){const p=d??new o(16),l=_[0],m=_[1],y=_[2],b=r[0],B=r[1],W=r[2],q=r[3],ne=r[1*4+0],ee=r[1*4+1],Z=r[1*4+2],fe=r[1*4+3],we=r[2*4+0],de=r[2*4+1],ae=r[2*4+2],Me=r[2*4+3],Be=r[3*4+0],We=r[3*4+1],Xe=r[3*4+2],ze=r[3*4+3];return r!==p&&(p[0]=b,p[1]=B,p[2]=W,p[3]=q,p[4]=ne,p[5]=ee,p[6]=Z,p[7]=fe,p[8]=we,p[9]=de,p[10]=ae,p[11]=Me),p[12]=b*l+ne*m+we*y+Be,p[13]=B*l+ee*m+de*y+We,p[14]=W*l+Z*m+ae*y+Xe,p[15]=q*l+fe*m+Me*y+ze,p}function Ae(r,_){const d=_??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=l,d[7]=0,d[8]=0,d[9]=-l,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function xe(r,_,d){const p=d??new o(16),l=r[4],m=r[5],y=r[6],b=r[7],B=r[8],W=r[9],q=r[10],ne=r[11],ee=Math.cos(_),Z=Math.sin(_);return p[4]=ee*l+Z*B,p[5]=ee*m+Z*W,p[6]=ee*y+Z*q,p[7]=ee*b+Z*ne,p[8]=ee*B-Z*l,p[9]=ee*W-Z*m,p[10]=ee*q-Z*y,p[11]=ee*ne-Z*b,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function ke(r,_){const d=_??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=0,d[2]=-l,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=l,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Ue(r,_,d){const p=d??new o(16),l=r[0*4+0],m=r[0*4+1],y=r[0*4+2],b=r[0*4+3],B=r[2*4+0],W=r[2*4+1],q=r[2*4+2],ne=r[2*4+3],ee=Math.cos(_),Z=Math.sin(_);return p[0]=ee*l-Z*B,p[1]=ee*m-Z*W,p[2]=ee*y-Z*q,p[3]=ee*b-Z*ne,p[8]=ee*B+Z*l,p[9]=ee*W+Z*m,p[10]=ee*q+Z*y,p[11]=ee*ne+Z*b,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function T(r,_){const d=_??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=l,d[2]=0,d[3]=0,d[4]=-l,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function H(r,_,d){const p=d??new o(16),l=r[0*4+0],m=r[0*4+1],y=r[0*4+2],b=r[0*4+3],B=r[1*4+0],W=r[1*4+1],q=r[1*4+2],ne=r[1*4+3],ee=Math.cos(_),Z=Math.sin(_);return p[0]=ee*l+Z*B,p[1]=ee*m+Z*W,p[2]=ee*y+Z*q,p[3]=ee*b+Z*ne,p[4]=ee*B-Z*l,p[5]=ee*W-Z*m,p[6]=ee*q-Z*y,p[7]=ee*ne-Z*b,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function x(r,_,d){const p=d??new o(16);let l=r[0],m=r[1],y=r[2];const b=Math.sqrt(l*l+m*m+y*y);l/=b,m/=b,y/=b;const B=l*l,W=m*m,q=y*y,ne=Math.cos(_),ee=Math.sin(_),Z=1-ne;return p[0]=B+(1-B)*ne,p[1]=l*m*Z+y*ee,p[2]=l*y*Z-m*ee,p[3]=0,p[4]=l*m*Z-y*ee,p[5]=W+(1-W)*ne,p[6]=m*y*Z+l*ee,p[7]=0,p[8]=l*y*Z+m*ee,p[9]=m*y*Z-l*ee,p[10]=q+(1-q)*ne,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=x;function f(r,_,d,p){const l=p??new o(16);let m=_[0],y=_[1],b=_[2];const B=Math.sqrt(m*m+y*y+b*b);m/=B,y/=B,b/=B;const W=m*m,q=y*y,ne=b*b,ee=Math.cos(d),Z=Math.sin(d),fe=1-ee,we=W+(1-W)*ee,de=m*y*fe+b*Z,ae=m*b*fe-y*Z,Me=m*y*fe-b*Z,Be=q+(1-q)*ee,We=y*b*fe+m*Z,Xe=m*b*fe+y*Z,ze=y*b*fe-m*Z,je=ne+(1-ne)*ee,et=r[0],rt=r[1],Qe=r[2],tt=r[3],it=r[4],He=r[5],ot=r[6],qe=r[7],nt=r[8],Ke=r[9],ut=r[10],st=r[11];return l[0]=we*et+de*it+ae*nt,l[1]=we*rt+de*He+ae*Ke,l[2]=we*Qe+de*ot+ae*ut,l[3]=we*tt+de*qe+ae*st,l[4]=Me*et+Be*it+We*nt,l[5]=Me*rt+Be*He+We*Ke,l[6]=Me*Qe+Be*ot+We*ut,l[7]=Me*tt+Be*qe+We*st,l[8]=Xe*et+ze*it+je*nt,l[9]=Xe*rt+ze*He+je*Ke,l[10]=Xe*Qe+ze*ot+je*ut,l[11]=Xe*tt+ze*qe+je*st,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const c=f;function v(r,_){const d=_??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function P(r,_,d){const p=d??new o(16),l=_[0],m=_[1],y=_[2];return p[0]=l*r[0*4+0],p[1]=l*r[0*4+1],p[2]=l*r[0*4+2],p[3]=l*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=y*r[2*4+0],p[9]=y*r[2*4+1],p[10]=y*r[2*4+2],p[11]=y*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function k(r,_){const d=_??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function w(r,_,d){const p=d??new o(16);return p[0]=_*r[0*4+0],p[1]=_*r[0*4+1],p[2]=_*r[0*4+2],p[3]=_*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=_*r[2*4+0],p[9]=_*r[2*4+1],p[10]=_*r[2*4+2],p[11]=_*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:F,aim:re,axisRotate:f,axisRotation:x,cameraAim:ie,clone:N,copy:$,create:h,determinant:Q,equals:V,equalsApproximately:Y,fromMat3:g,fromQuat:C,frustum:Ie,frustumReverseZ:Te,getAxis:ue,getScaling:_e,getTranslation:ge,identity:O,inverse:D,invert:I,lookAt:me,mul:K,mulScalar:R,multiply:j,multiplyScalar:L,negate:M,ortho:Ge,perspective:te,perspectiveReverseZ:Oe,rotate:c,rotateX:xe,rotateY:Ue,rotateZ:H,rotation:i,rotationX:Ae,rotationY:ke,rotationZ:T,scale:P,scaling:v,set:S,setAxis:se,setTranslation:oe,translate:be,translation:he,transpose:U,uniformScale:w,uniformScaling:k}}const Zr=new Map;function Tl(o){let a=Zr.get(o);return a||(a=Bl(o),Zr.set(o,a)),a}function Al(o){const a=as(o);function h(T,H,x,i){const f=new o(4);return T!==void 0&&(f[0]=T,H!==void 0&&(f[1]=H,x!==void 0&&(f[2]=x,i!==void 0&&(f[3]=i)))),f}const S=h;function g(T,H,x,i,f){const c=f??new o(4);return c[0]=T,c[1]=H,c[2]=x,c[3]=i,c}function C(T,H,x){const i=x??new o(4),f=H*.5,c=Math.sin(f);return i[0]=c*T[0],i[1]=c*T[1],i[2]=c*T[2],i[3]=Math.cos(f),i}function M(T,H){const x=H??a.create(3),i=Math.acos(T[3])*2,f=Math.sin(i*.5);return f>Le?(x[0]=T[0]/f,x[1]=T[1]/f,x[2]=T[2]/f):(x[0]=1,x[1]=0,x[2]=0),{angle:i,axis:x}}function F(T,H){const x=te(T,H);return Math.acos(2*x*x-1)}function L(T,H,x){const i=x??new o(4),f=T[0],c=T[1],v=T[2],P=T[3],k=H[0],w=H[1],r=H[2],_=H[3];return i[0]=f*_+P*k+c*r-v*w,i[1]=c*_+P*w+v*k-f*r,i[2]=v*_+P*r+f*w-c*k,i[3]=P*_-f*k-c*w-v*r,i}const R=L;function $(T,H,x){const i=x??new o(4),f=H*.5,c=T[0],v=T[1],P=T[2],k=T[3],w=Math.sin(f),r=Math.cos(f);return i[0]=c*r+k*w,i[1]=v*r+P*w,i[2]=P*r-v*w,i[3]=k*r-c*w,i}function N(T,H,x){const i=x??new o(4),f=H*.5,c=T[0],v=T[1],P=T[2],k=T[3],w=Math.sin(f),r=Math.cos(f);return i[0]=c*r-P*w,i[1]=v*r+k*w,i[2]=P*r+c*w,i[3]=k*r-v*w,i}function Y(T,H,x){const i=x??new o(4),f=H*.5,c=T[0],v=T[1],P=T[2],k=T[3],w=Math.sin(f),r=Math.cos(f);return i[0]=c*r+v*w,i[1]=v*r-c*w,i[2]=P*r+k*w,i[3]=k*r-P*w,i}function V(T,H,x,i){const f=i??new o(4),c=T[0],v=T[1],P=T[2],k=T[3];let w=H[0],r=H[1],_=H[2],d=H[3],p=c*w+v*r+P*_+k*d;p<0&&(p=-p,w=-w,r=-r,_=-_,d=-d);let l,m;if(1-p>Le){const y=Math.acos(p),b=Math.sin(y);l=Math.sin((1-x)*y)/b,m=Math.sin(x*y)/b}else l=1-x,m=x;return f[0]=l*c+m*w,f[1]=l*v+m*r,f[2]=l*P+m*_,f[3]=l*k+m*d,f}function O(T,H){const x=H??new o(4),i=T[0],f=T[1],c=T[2],v=T[3],P=i*i+f*f+c*c+v*v,k=P?1/P:0;return x[0]=-i*k,x[1]=-f*k,x[2]=-c*k,x[3]=v*k,x}function U(T,H){const x=H??new o(4);return x[0]=-T[0],x[1]=-T[1],x[2]=-T[2],x[3]=T[3],x}function D(T,H){const x=H??new o(4),i=T[0]+T[5]+T[10];if(i>0){const f=Math.sqrt(i+1);x[3]=.5*f;const c=.5/f;x[0]=(T[6]-T[9])*c,x[1]=(T[8]-T[2])*c,x[2]=(T[1]-T[4])*c}else{let f=0;T[5]>T[0]&&(f=1),T[10]>T[f*4+f]&&(f=2);const c=(f+1)%3,v=(f+2)%3,P=Math.sqrt(T[f*4+f]-T[c*4+c]-T[v*4+v]+1);x[f]=.5*P;const k=.5/P;x[3]=(T[c*4+v]-T[v*4+c])*k,x[c]=(T[c*4+f]+T[f*4+c])*k,x[v]=(T[v*4+f]+T[f*4+v])*k}return x}function Q(T,H,x,i,f){const c=f??new o(4),v=T*.5,P=H*.5,k=x*.5,w=Math.sin(v),r=Math.cos(v),_=Math.sin(P),d=Math.cos(P),p=Math.sin(k),l=Math.cos(k);switch(i){case"xyz":c[0]=w*d*l+r*_*p,c[1]=r*_*l-w*d*p,c[2]=r*d*p+w*_*l,c[3]=r*d*l-w*_*p;break;case"xzy":c[0]=w*d*l-r*_*p,c[1]=r*_*l-w*d*p,c[2]=r*d*p+w*_*l,c[3]=r*d*l+w*_*p;break;case"yxz":c[0]=w*d*l+r*_*p,c[1]=r*_*l-w*d*p,c[2]=r*d*p-w*_*l,c[3]=r*d*l+w*_*p;break;case"yzx":c[0]=w*d*l+r*_*p,c[1]=r*_*l+w*d*p,c[2]=r*d*p-w*_*l,c[3]=r*d*l-w*_*p;break;case"zxy":c[0]=w*d*l-r*_*p,c[1]=r*_*l+w*d*p,c[2]=r*d*p+w*_*l,c[3]=r*d*l-w*_*p;break;case"zyx":c[0]=w*d*l-r*_*p,c[1]=r*_*l+w*d*p,c[2]=r*d*p-w*_*l,c[3]=r*d*l+w*_*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return c}function I(T,H){const x=H??new o(4);return x[0]=T[0],x[1]=T[1],x[2]=T[2],x[3]=T[3],x}const j=I;function K(T,H,x){const i=x??new o(4);return i[0]=T[0]+H[0],i[1]=T[1]+H[1],i[2]=T[2]+H[2],i[3]=T[3]+H[3],i}function oe(T,H,x){const i=x??new o(4);return i[0]=T[0]-H[0],i[1]=T[1]-H[1],i[2]=T[2]-H[2],i[3]=T[3]-H[3],i}const ge=oe;function ue(T,H,x){const i=x??new o(4);return i[0]=T[0]*H,i[1]=T[1]*H,i[2]=T[2]*H,i[3]=T[3]*H,i}const se=ue;function _e(T,H,x){const i=x??new o(4);return i[0]=T[0]/H,i[1]=T[1]/H,i[2]=T[2]/H,i[3]=T[3]/H,i}function te(T,H){return T[0]*H[0]+T[1]*H[1]+T[2]*H[2]+T[3]*H[3]}function Oe(T,H,x,i){const f=i??new o(4);return f[0]=T[0]+x*(H[0]-T[0]),f[1]=T[1]+x*(H[1]-T[1]),f[2]=T[2]+x*(H[2]-T[2]),f[3]=T[3]+x*(H[3]-T[3]),f}function Ge(T){const H=T[0],x=T[1],i=T[2],f=T[3];return Math.sqrt(H*H+x*x+i*i+f*f)}const Ie=Ge;function Te(T){const H=T[0],x=T[1],i=T[2],f=T[3];return H*H+x*x+i*i+f*f}const ve=Te;function ye(T,H){const x=H??new o(4),i=T[0],f=T[1],c=T[2],v=T[3],P=Math.sqrt(i*i+f*f+c*c+v*v);return P>1e-5?(x[0]=i/P,x[1]=f/P,x[2]=c/P,x[3]=v/P):(x[0]=0,x[1]=0,x[2]=0,x[3]=1),x}function le(T,H){return Math.abs(T[0]-H[0])<Le&&Math.abs(T[1]-H[1])<Le&&Math.abs(T[2]-H[2])<Le&&Math.abs(T[3]-H[3])<Le}function re(T,H){return T[0]===H[0]&&T[1]===H[1]&&T[2]===H[2]&&T[3]===H[3]}function ie(T){const H=T??new o(4);return H[0]=0,H[1]=0,H[2]=0,H[3]=1,H}const me=a.create(),he=a.create(),be=a.create();function Ae(T,H,x){const i=x??new o(4),f=a.dot(T,H);return f<-.999999?(a.cross(he,T,me),a.len(me)<1e-6&&a.cross(be,T,me),a.normalize(me,me),C(me,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(T,H,me),i[0]=me[0],i[1]=me[1],i[2]=me[2],i[3]=1+f,ye(i,i))}const xe=new o(4),ke=new o(4);function Ue(T,H,x,i,f,c){const v=c??new o(4);return V(T,i,f,xe),V(H,x,f,ke),V(xe,ke,2*f*(1-f),v),v}return{create:h,fromValues:S,set:g,fromAxisAngle:C,toAxisAngle:M,angle:F,multiply:L,mul:R,rotateX:$,rotateY:N,rotateZ:Y,slerp:V,inverse:O,conjugate:U,fromMat:D,fromEuler:Q,copy:I,clone:j,add:K,subtract:oe,sub:ge,mulScalar:ue,scale:se,divScalar:_e,dot:te,lerp:Oe,length:Ge,len:Ie,lengthSq:Te,lenSq:ve,normalize:ye,equalsApproximately:le,equals:re,identity:ie,rotationTo:Ae,sqlerp:Ue}}const Xr=new Map;function Dl(o){let a=Xr.get(o);return a||(a=Al(o),Xr.set(o,a)),a}function zl(o){function a(x,i,f,c){const v=new o(4);return x!==void 0&&(v[0]=x,i!==void 0&&(v[1]=i,f!==void 0&&(v[2]=f,c!==void 0&&(v[3]=c)))),v}const h=a;function S(x,i,f,c,v){const P=v??new o(4);return P[0]=x,P[1]=i,P[2]=f,P[3]=c,P}function g(x,i){const f=i??new o(4);return f[0]=Math.ceil(x[0]),f[1]=Math.ceil(x[1]),f[2]=Math.ceil(x[2]),f[3]=Math.ceil(x[3]),f}function C(x,i){const f=i??new o(4);return f[0]=Math.floor(x[0]),f[1]=Math.floor(x[1]),f[2]=Math.floor(x[2]),f[3]=Math.floor(x[3]),f}function M(x,i){const f=i??new o(4);return f[0]=Math.round(x[0]),f[1]=Math.round(x[1]),f[2]=Math.round(x[2]),f[3]=Math.round(x[3]),f}function F(x,i=0,f=1,c){const v=c??new o(4);return v[0]=Math.min(f,Math.max(i,x[0])),v[1]=Math.min(f,Math.max(i,x[1])),v[2]=Math.min(f,Math.max(i,x[2])),v[3]=Math.min(f,Math.max(i,x[3])),v}function L(x,i,f){const c=f??new o(4);return c[0]=x[0]+i[0],c[1]=x[1]+i[1],c[2]=x[2]+i[2],c[3]=x[3]+i[3],c}function R(x,i,f,c){const v=c??new o(4);return v[0]=x[0]+i[0]*f,v[1]=x[1]+i[1]*f,v[2]=x[2]+i[2]*f,v[3]=x[3]+i[3]*f,v}function $(x,i,f){const c=f??new o(4);return c[0]=x[0]-i[0],c[1]=x[1]-i[1],c[2]=x[2]-i[2],c[3]=x[3]-i[3],c}const N=$;function Y(x,i){return Math.abs(x[0]-i[0])<Le&&Math.abs(x[1]-i[1])<Le&&Math.abs(x[2]-i[2])<Le&&Math.abs(x[3]-i[3])<Le}function V(x,i){return x[0]===i[0]&&x[1]===i[1]&&x[2]===i[2]&&x[3]===i[3]}function O(x,i,f,c){const v=c??new o(4);return v[0]=x[0]+f*(i[0]-x[0]),v[1]=x[1]+f*(i[1]-x[1]),v[2]=x[2]+f*(i[2]-x[2]),v[3]=x[3]+f*(i[3]-x[3]),v}function U(x,i,f,c){const v=c??new o(4);return v[0]=x[0]+f[0]*(i[0]-x[0]),v[1]=x[1]+f[1]*(i[1]-x[1]),v[2]=x[2]+f[2]*(i[2]-x[2]),v[3]=x[3]+f[3]*(i[3]-x[3]),v}function D(x,i,f){const c=f??new o(4);return c[0]=Math.max(x[0],i[0]),c[1]=Math.max(x[1],i[1]),c[2]=Math.max(x[2],i[2]),c[3]=Math.max(x[3],i[3]),c}function Q(x,i,f){const c=f??new o(4);return c[0]=Math.min(x[0],i[0]),c[1]=Math.min(x[1],i[1]),c[2]=Math.min(x[2],i[2]),c[3]=Math.min(x[3],i[3]),c}function I(x,i,f){const c=f??new o(4);return c[0]=x[0]*i,c[1]=x[1]*i,c[2]=x[2]*i,c[3]=x[3]*i,c}const j=I;function K(x,i,f){const c=f??new o(4);return c[0]=x[0]/i,c[1]=x[1]/i,c[2]=x[2]/i,c[3]=x[3]/i,c}function oe(x,i){const f=i??new o(4);return f[0]=1/x[0],f[1]=1/x[1],f[2]=1/x[2],f[3]=1/x[3],f}const ge=oe;function ue(x,i){return x[0]*i[0]+x[1]*i[1]+x[2]*i[2]+x[3]*i[3]}function se(x){const i=x[0],f=x[1],c=x[2],v=x[3];return Math.sqrt(i*i+f*f+c*c+v*v)}const _e=se;function te(x){const i=x[0],f=x[1],c=x[2],v=x[3];return i*i+f*f+c*c+v*v}const Oe=te;function Ge(x,i){const f=x[0]-i[0],c=x[1]-i[1],v=x[2]-i[2],P=x[3]-i[3];return Math.sqrt(f*f+c*c+v*v+P*P)}const Ie=Ge;function Te(x,i){const f=x[0]-i[0],c=x[1]-i[1],v=x[2]-i[2],P=x[3]-i[3];return f*f+c*c+v*v+P*P}const ve=Te;function ye(x,i){const f=i??new o(4),c=x[0],v=x[1],P=x[2],k=x[3],w=Math.sqrt(c*c+v*v+P*P+k*k);return w>1e-5?(f[0]=c/w,f[1]=v/w,f[2]=P/w,f[3]=k/w):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function le(x,i){const f=i??new o(4);return f[0]=-x[0],f[1]=-x[1],f[2]=-x[2],f[3]=-x[3],f}function re(x,i){const f=i??new o(4);return f[0]=x[0],f[1]=x[1],f[2]=x[2],f[3]=x[3],f}const ie=re;function me(x,i,f){const c=f??new o(4);return c[0]=x[0]*i[0],c[1]=x[1]*i[1],c[2]=x[2]*i[2],c[3]=x[3]*i[3],c}const he=me;function be(x,i,f){const c=f??new o(4);return c[0]=x[0]/i[0],c[1]=x[1]/i[1],c[2]=x[2]/i[2],c[3]=x[3]/i[3],c}const Ae=be;function xe(x){const i=x??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function ke(x,i,f){const c=f??new o(4),v=x[0],P=x[1],k=x[2],w=x[3];return c[0]=i[0]*v+i[4]*P+i[8]*k+i[12]*w,c[1]=i[1]*v+i[5]*P+i[9]*k+i[13]*w,c[2]=i[2]*v+i[6]*P+i[10]*k+i[14]*w,c[3]=i[3]*v+i[7]*P+i[11]*k+i[15]*w,c}function Ue(x,i,f){const c=f??new o(4);return ye(x,c),I(c,i,c)}function T(x,i,f){const c=f??new o(4);return se(x)>i?Ue(x,i,c):re(x,c)}function H(x,i,f){const c=f??new o(4);return O(x,i,.5,c)}return{create:a,fromValues:h,set:S,ceil:g,floor:C,round:M,clamp:F,add:L,addScaled:R,subtract:$,sub:N,equalsApproximately:Y,equals:V,lerp:O,lerpV:U,max:D,min:Q,mulScalar:I,scale:j,divScalar:K,inverse:oe,invert:ge,dot:ue,length:se,len:_e,lengthSq:te,lenSq:Oe,distance:Ge,dist:Ie,distanceSq:Te,distSq:ve,normalize:ye,negate:le,copy:re,clone:ie,multiply:me,mul:he,divide:be,div:Ae,zero:xe,transformMat4:ke,setLength:Ue,truncate:T,midpoint:H}}const Qr=new Map;function Ll(o){let a=Qr.get(o);return a||(a=zl(o),Qr.set(o,a)),a}function Ns(o,a,h,S,g,C){return{mat3:Ml(o),mat4:Tl(a),quat:Dl(h),vec2:di(S),vec3:as(g),vec4:Ll(C)}}const{mat3:Et,mat4:dt,quat:ht,vec2:Jr,vec3:z,vec4:Yc}=Ns(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ns(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ns(Sl,Array,Array,Array,Array,Array);const ei=document.querySelector("#log");let bt=null,cn=null;function pi(){if(bt)return bt;bt=document.createElement("div"),bt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",bt.appendChild(o),cn=document.createElement("div"),cn.className="ply-spinner-label",bt.appendChild(cn),bt.style.display="none",document.body.appendChild(bt),bt}function $s(o){pi(),cn&&o&&(cn.textContent=o),bt&&(bt.style.opacity="1",bt.style.display="flex")}function It(o){pi(),cn&&(cn.textContent=o)}function Ln(){if(!bt)return;const o=bt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function hi(o,a){if(!ei)return;const h=document.createElement("p");h.innerText=o,a&&Object.assign(h.style,a),ei.appendChild(h)}async function Mt(o){console.log(o),hi(o)}async function Gl(o){console.error(o),hi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let fi;function _i(){fi=performance.now()}function ti(o){const a=performance.now()-fi;Mt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Il(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function In(o){return o+3&-4}const Rl=2,Ul=3,Vl=5,Ol=6,Gn=7,ns=8,ss=9,rs=10;function Fl(o){const a=new TextDecoder("ascii"),h=a.decode(new Uint8Array(o,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),g=4,C=S.getUint32(g+0,!0),M=S.getUint32(g+4,!0),F=S.getUint32(g+8,!0),L=S.getUint32(g+12,!0),R=S.getUint32(g+16,!0),$=S.getFloat32(g+20,!0),N=S.getUint32(g+24,!0),Y=S.getUint32(g+28,!0),V=S.getFloat32(g+32,!0),O=S.getFloat32(g+36,!0),U=S.getFloat32(g+40,!0),D=S.getUint32(g+44,!0),Q=S.getFloat32(g+48,!0),I=S.getFloat32(g+52,!0),j=S.getUint32(g+56,!0),K=S.getUint32(g+60,!0),oe=Y===ss||Y===rs,ge=oe?K:0,ue=oe?0:K,se=ue>0?ue:1;if(Y===Vl||Y===Ol)throw new Error(`NAT2: paired-RVQ format=${Y} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const _e=Y===ss||Y===rs;if(Y!==Rl&&Y!==Ul&&Y!==Gn&&Y!==ns&&!_e)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Y}`);if(C%4!==0||D%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${D}`);let te=g+64;const Oe=(j+1)*4,Ge=new Uint32Array(o.slice(te,te+Oe));te+=Oe;let Ie;if(se>1){const he=(se+1)*4;if(te+he>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${he} from ${te})`);Ie=new Uint32Array(o.slice(te,te+he)),te+=he}else Ie=new Uint32Array([0,C]);let Te=0;for(let he=0;he<se;he++){const be=Ie[he+1]-Ie[he];be>Te&&(Te=be)}if(_e){const he=ge&1?7:6,be=R*he*4;if(te+be>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${be} more bytes from offset ${te}, have ${o.byteLength-te}`);const Ae=new Float32Array(o.slice(te,te+be));te+=be;const xe=C/4,ke=D/4,Ue=xe*ke*16,T=o.byteLength-te;if(T<Ue)throw new Error(`NAT2 probe atlas truncated: need ${Ue} bytes for ${C}x${D}, have ${T}`);const H=new Uint8Array(o.slice(te,te+Ue));return{width:C,height:M,channels:F,kernel_type:L,num_rects:R,uv_extent:$,sb_number:N,format:Y,sh_bias:V,res_bias:O,compact_mult:U,layer_h:D,atlas_scale:Q,atlas_offset:I,n_layers:j,n_cols:se,layer_cuts:Ge,column_cuts:Ie,slice_width:Te,rects_expanded:Ae,atlas_bytes:H,probe_mode:ge&1?2:1}}const ve=R*4*4;if(te+ve>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${ve} more bytes from offset ${te}, have ${o.byteLength-te}`);const ye=new Float32Array(o.slice(te,te+ve));te+=ve;const le=new Float32Array(R*5);for(let he=0;he<R;he++){const be=ye[he*4+0],Ae=ye[he*4+1],xe=ye[he*4+2],ke=ye[he*4+3];let Ue=0;for(let f=1;f<=j&&Ge[f]<=Ae;f++)Ue=f;let T=0;for(let f=1;f<=se&&Ie[f]<=be;f++)T=f;const H=Ae-Ge[Ue],x=be-Ie[T],i=T*j+Ue;le[he*5+0]=x,le[he*5+1]=H,le[he*5+2]=xe,le[he*5+3]=ke,le[he*5+4]=i}let re;const me=C/4*16;if(Y===Gn||Y===ns){if(te+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const he=Y===Gn?"BCCB":"ACCB",be=a.decode(new Uint8Array(o,te,4));if(be!==he)throw new Error(`NAT2 typeD bad sub-magic: expected '${he}' got '${be}'`);const Ae=S.getUint32(te+4,!0),xe=S.getUint32(te+8,!0),ke=S.getUint32(te+12,!0),Ue=S.getUint32(te+16,!0),T=S.getUint32(te+20,!0);if(Ae!==1)throw new Error(`NAT2 BCCB unsupported version ${Ae}`);if(ke!==M/4||Ue!==C/4||T!==ke*Ue)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${M}, sub-header ${Ue}×${ke} (${T} blocks)`);te+=24;const H=xe*16;if(te+H>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${H}, have ${o.byteLength-te})`);const x=new Uint8Array(o,te,H);te+=H;const i=T*2;if(te+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-te})`);const f=new Uint16Array(o.slice(te,te+i));te+=i;const c=new Uint8Array(T*16);for(let v=0;v<T;v++){const P=f[v]*16;c.set(x.subarray(P,P+16),v*16)}re=c}else{let he=0;for(let be=0;be<j;be++){const Ae=Ge[be+1]-Ge[be];if(Ae%4!==0)throw new Error(`NAT2 BC7 layer ${be} rows ${Ae} not 4-aligned`);he+=Ae/4*me}if(te+he>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${he} more bytes from offset ${te}, have ${o.byteLength-te}`);re=new Uint8Array(o.slice(te,te+he))}return{width:C,height:M,channels:F,kernel_type:L,num_rects:R,uv_extent:$,sb_number:N,format:Y,sh_bias:V,res_bias:O,compact_mult:U,layer_h:D,atlas_scale:Q,atlas_offset:I,n_layers:j,n_cols:se,layer_cuts:Ge,column_cuts:Ie,slice_width:Te,rects_expanded:le,atlas_bytes:re}}const Nl=32;function $l(o,a,h){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,g,C,M;if(a.format===2||a.format===Gn||a.format===ss){if(!o.features.has("texture-compression-bc"))return Mt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===ss?"BC7 atlas (proberes: shared probe texture)":a.format===Gn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:g,sampler:C}=ni(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===ns||a.format===rs){if(!o.features.has("texture-compression-astc"))return Mt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===rs?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===ns?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:g,sampler:C}=ni(o,a,"astc-4x4-unorm",M)}else return Mt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:F}=a,L=o.createBuffer({label:"atlas rects (5-stride)",size:In(F.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(L,0,F);const R=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return mi(o,R,a,h),{texture:S,view:g,sampler:C,rectsBuffer:L,texParamsBuffer:R,meta:a}}function ni(o,a,h,S){const{width:g,layer_h:C,n_layers:M,n_cols:F,layer_cuts:L,column_cuts:R,slice_width:$,atlas_bytes:N}=a,V=g/4*16,O=o.limits.maxTextureDimension2D;if(C>O||$>O)throw new Error(`⚠️  atlas slice dims ${$}x${C} exceed maxTextureDimension2D=${O}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const U=F*M;if(U>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${F} cols × ${M} layers = ${U} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const D=o.createTexture({label:S,size:{width:$,height:C,depthOrArrayLayers:U},mipLevelCount:1,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let j=0;j<F;j++){const K=R[j]/4,oe=(R[j+1]-R[j])/4;for(let ge=0;ge<M;ge++){const ue=L[ge]/4,se=(L[ge+1]-L[ge])/4,_e=j*M+ge,te=ue*V+K*16;o.queue.writeTexture({texture:D,mipLevel:0,origin:{x:0,y:0,z:_e},aspect:"all"},N,{offset:te,bytesPerRow:V,rowsPerImage:se},{width:oe*4,height:se*4,depthOrArrayLayers:1})}}const Q=D.createView({label:`${S} view`,dimension:"2d-array"}),I=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:D,view:Q,sampler:I}}function mi(o,a,h,S){const g=new ArrayBuffer(32),C=new Uint32Array(g),M=new Float32Array(g);C[0]=S?1:0,M[1]=h.atlas_scale,M[2]=h.atlas_offset,M[3]=h.res_bias,C[4]=h.probe_mode?h.probe_mode|0:0,o.queue.writeBuffer(a,0,g)}async function Is(o,a){Mt(`loading ply file from File... : ${o.name}`),$s("downloading PLY...");const h=await o.arrayBuffer();try{return await bi(h,a)}finally{Ln()}}async function Wl(o,a){Mt(`loading ply file from URL... : ${o}`),$s("downloading PLY...");try{_i();const h=new URL(o,self.location.href).href;return await bi({url:h},a)}finally{Ln()}}async function bi(o,a){return new Promise((h,S)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=C=>{var F,L,R,$,N,Y,V,O,U,D,Q,I;const M=C.data;if((M==null?void 0:M.type)==="error"){Gl(`PLY worker error: ${M.message??"unknown error"}`),g.terminate(),S(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const j=M.totalBytes,K=M.loadedBytes/(1024*1024),oe=j?j/(1024*1024):void 0,ge=(M.speedBps??0)/(1024*1024),ue=j?Math.min(99,Math.floor(M.loadedBytes/j*100)):void 0,se=oe?`total ${oe.toFixed(1)} MB`:"total -- MB",_e=oe&&ue!==void 0?`${K.toFixed(1)} MB downloaded (${ue}%)`:`${K.toFixed(1)} MB downloaded`,te=`${ge.toFixed(2)} MB/s`;It(`downloading PLY ...
${se}, ${_e}
${te}`);return}else if((M==null?void 0:M.type)==="fetched"){Mt(`💾 Fetched (${M.byteLength} bytes)`),ti("Download"),It("parsing PLY..."),_i();return}else if((M==null?void 0:M.type)==="parse_progress"){const j=M.total??0,K=M.read??0,oe=j>0?Math.floor(K/j*100):0;It(`parsing PLY ...
${K}/${j} surfels (${oe}%)`);return}else if((M==null?void 0:M.type)==="done"){const j=M.num_points,K=M.K,oe=M.feature_mode??0,ge=M.sh_bias,ue=M.kernel_type,se=M.surfelBuffer,_e=M.svParamsBuffer;Mt(`🪐 Total surfels: ${j}, mode=${oe===1?"SB":"SV"}, K=${K}, sh_bias=${ge}, kernel_type=${ue}`);const Oe=a.createBuffer({label:"surfel input buffer",size:In(j*Nl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Oe,0,se);const Ge=_e.byteLength>0?_e.byteLength:16,Ie=a.createBuffer({label:oe===1?"color_params buffer (SB)":"color_params buffer (SV)",size:In(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});_e.byteLength>0&&a.queue.writeBuffer(Ie,0,_e),g.terminate(),ti("Parse"),h({num_points:j,K,feature_mode:oe,sh_bias:ge,kernel_type:ue,surfel_buffer:Oe,surfel_data:new Float32Array(se),sv_params_buffer:Ie,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((L=(F=M.bbox)==null?void 0:F.min)==null?void 0:L[0])??-1)+((($=(R=M.bbox)==null?void 0:R.max)==null?void 0:$[0])??1))/2,((((Y=(N=M.bbox)==null?void 0:N.min)==null?void 0:Y[1])??-1)+(((O=(V=M.bbox)==null?void 0:V.max)==null?void 0:O[1])??1))/2,((((D=(U=M.bbox)==null?void 0:U.min)==null?void 0:D[2])??-1)+(((I=(Q=M.bbox)==null?void 0:Q.max)==null?void 0:I[2])??1))/2]})}},g.onerror=C=>{g.terminate(),S(C)},o instanceof ArrayBuffer?(It("parsing PLY..."),g.postMessage({type:"start",plyBuffer:o},[o])):g.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(h,S){S(a)})(ql,function(h){class S{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class M extends C{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class F extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class L extends C{constructor(e,t){super(e),this.expanded=t}}class R extends C{constructor(e,t){super(e),this.index=t}}function $(n){return n}function N(n){return n==null}function Y(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function V(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const O={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class U{static alreadyDisposed(){return new U({type:"alreadydisposed"})}static notBindable(){return new U({type:"notbindable"})}static propertyNotFound(e){return new U({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new U({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=O[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class D{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!D.isBindable(s))throw U.notBindable();if(!(e in s))throw U.propertyNotFound(e);s[e]=t}}class Q extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class I{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const j="tp";function K(n){return(t,s)=>[j,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function oe(n,e){return t=>e(n(t))}function ge(n){return n.rawValue}function ue(n,e){n.emitter.on("change",oe(ge,e)),e(n.rawValue)}function se(n,e,t){ue(n.value(e),t)}function _e(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function te(n,e){return t=>{_e(n,e,t)}}function Oe(n,e){ue(n,t=>{e.textContent=t??""})}const Ge=K("btn");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Ge("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Te{constructor(e,t){this.emitter=new I,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ve{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,E)=>u===E,this.emitter=new I,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:u,sender:this}))}}class ye{constructor(e){this.emitter=new I,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function le(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ye(n):new ve(n,e)}class re{constructor(e){this.emitter=new I,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:le(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new re(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((u,E)=>{if(u===void 0)return;const A=e[E],J=A(n[E]);return J.succeeded?Object.assign(Object.assign({},u),{[E]:J.value}):void 0},{});return s}function me(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function he(n){return n===null?!1:typeof n=="object"}function be(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ae(n){return{custom:e=>be(e)(n),boolean:be(e=>typeof e=="boolean"?e:void 0)(n),number:be(e=>typeof e=="number"?e:void 0)(n),string:be(e=>typeof e=="string"?e:void 0)(n),function:be(e=>typeof e=="function"?e:void 0)(n),constant:e=>be(t=>t===e?e:void 0)(n),raw:be(e=>e)(n),object:e=>be(t=>{if(he(t))return ie(t,e)})(n),array:e=>be(t=>{if(Array.isArray(t))return me(t,e)})(n)}}const xe={optional:Ae(!0),required:Ae(!1)};function ke(n,e){const t=xe.required.object(e)(n);return t.succeeded?t.value:void 0}function Ue(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function T(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class H{constructor(e){this.value_=e}static create(e){return[new H(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const x=K("");function i(n,e){return te(n,x(void 0,e))}class f extends re{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=H.create(le(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const E=e??{};return new f(re.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(u=E.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ue(this.globalDisabled_,i(e,"disabled")),se(this,"hidden",i(e,"hidden"))}bindDisabled(e){ue(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ue(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function c(){return["veryfirst","first","last","verylast"]}const v=K(""),P={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{c().forEach(s=>{t.classList.remove(v(void 0,P[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,P[s]))})}),this.viewProps.handleDispose(()=>{T(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ue({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const w="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function _(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function l(){return p().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(w,"svg");return t.innerHTML=y[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function W(n){n.parentElement&&n.parentElement.removeChild(n)}function q(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ne(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ee(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const Z=K("lbl");function fe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Z()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Z("l")),se(t.props,"label",E=>{N(E)?this.element.classList.add(Z(void 0,"nol")):(this.element.classList.remove(Z(void 0,"nol")),ne(s),s.appendChild(fe(e,E)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(Z("v")),this.element.appendChild(u),this.valueElement=u}}class de extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ae={id:"button",type:"blade",accept(n){const e=xe,t=ke(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new de(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:new Te(n.document,{props:re.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof Te)?null:new Q(n.controller)}};class Me extends k{constructor(e){super(e),this.value=e.value}}function Be(){return new re({positions:le([],{equals:Y})})}class We extends re{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=re.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!N(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};se(this,"expanded",s),se(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Xe(n,e){let t=0;return _(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function ze(n,e){e.style.height=n.styleHeight}function je(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),N(n.get("expandedHeight"))){const t=Xe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{ze(n,e)}),ze(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class et extends g{constructor(e,t){super(e),this.rackApi_=t}}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function tt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class He{constructor(e){this.emitter=new I,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw U.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class ot extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new I,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends de{constructor(e,t){super(e,t),this.binding=t.binding}}class nt extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new I,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new F(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends de{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof yt?n.apiSet_:n instanceof et?n.rackApi_.apiSet_:null}function st(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw U.shouldNeverHappen();return t}function Bt(n,e,t){if(!D.isBindable(n))throw U.notBindable();return new D(n,e,t)}class yt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new I,this.apiSet_=new He(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>st(this.apiSet_,e))}addInput(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,A=this.pool_.createInput(E,Bt(e,t,u.presetKey),u),J=new ot(A);return this.add(J,u.index)}addMonitor(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,A=this.pool_.createMonitor(E,Bt(e,t),u),J=new nt(A);return this.add(J,u.index)}addFolder(e){return Qe(this,e)}addButton(e){return rt(this,e)}addSeparator(e){return tt(this,e)}addTab(e){return it(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=st(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=st(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new M(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof Me){const s=st(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw U.shouldNeverHappen();const t=st(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new F(t,s.target.read(),s.target.presetKey)})}}class vt extends et{constructor(e,t){super(e,new yt(e.rackController,t)),this.emitter_=new I,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new L(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Ct extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Rt{constructor(e,t){const s=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function gt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function Tt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function un(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Me&&s.value===e)return s}return null}function Ut(n){return n instanceof Ye?n.rack:n instanceof Ct?n.rackController.rack:null}function Ht(n){const e=Ut(n);return e?e.bcSet_:null}class Vt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new I,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new He(Ht),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),V(e,"parent")?e.parent=this:(e.parent_=this,Ue({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){V(e,"parent")?e.parent=null:(e.parent_=null,Ue({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Me)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Ut(s);if(u){const E=u.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Me)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Ut(s);if(u){const E=u.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const E=[];u===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),u===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),u.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=gt(this.find(qe),e.sender);if(!t)throw U.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Tt(this.find(Ke),e.sender);if(!t)throw U.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=un(this.find(Me),e.sender);if(!t)throw U.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ye extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Rt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Vt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&W(e.bladeController.view.element)}}const wn=K("cnt");class Rn{constructor(e,t){var s;this.className_=K((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),wn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),se(this.foldable_,"completed",te(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),se(t.props,"title",Ee=>{N(Ee)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const A=e.createElement("div");A.classList.add(this.className_("t")),Oe(t.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A;const J=e.createElement("div");J.classList.add(this.className_("m")),this.buttonElement.appendChild(J);const Pe=t.containerElement;Pe.classList.add(this.className_("c")),this.element.appendChild(Pe),this.containerElement=Pe}}class dn extends Ct{constructor(e,t){var s;const u=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new Ye(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new Rn(e,{containerElement:E.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,je(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const xn={id:"folder",type:"blade",accept(n){const e=xe,t=ke(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new dn(n.document,{blade:n.blade,expanded:n.params.expanded,props:re.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof dn?new vt(n.controller,n.pool):null}};class At extends Me{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Kt extends g{}const Yt=K("spr");class X{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Yt("r")),this.element.appendChild(s)}}class pe extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new X(e,{viewProps:t.viewProps})}))}}const ce={id:"separator",type:"blade",accept(n){const t=ke(n,{view:xe.required.constant("separator")});return t?{params:t}:null},controller(n){return new pe(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof pe?new Kt(n.controller):null}},De=K("tbi");class Ve{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(De()),t.viewProps.bindClassModifiers(this.element),se(t.props,"selected",E=>{E?this.element.classList.add(De(void 0,"sel")):this.element.classList.remove(De(void 0,"sel"))});const s=e.createElement("button");s.classList.add(De("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(De("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class Se{constructor(e,t){this.emitter=new I,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ve(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ce{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Se(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ye(e,{blade:Be(),viewProps:f.create()}),this.props=t.props,se(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class $e{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Ze extends et{constructor(e,t){super(e,new yt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new I,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw U.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ce(t,{itemProps:re.fromObject({selected:!1,title:e.title}),props:re.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw U.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw U.shouldNeverHappen();const s=new $e(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw U.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new R(this,e.rawValue)})}}const lt=-1;class wt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=le(!0),this.selectedIndex=le(lt),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=lt,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Zt=K("tab");class Un{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Zt(),wn()),t.viewProps.bindClassModifiers(this.element),ue(t.empty,te(this.element,Zt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Zt("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(Zt("i")),this.element.appendChild(u);const E=t.contentsElement;E.classList.add(Zt("c")),this.element.appendChild(E),this.contentsElement=E}}class yn extends Ct{constructor(e,t){const s=new Ye(e,{blade:t.blade,viewProps:t.viewProps}),u=new wt;super({blade:t.blade,rackController:s,view:new Un(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new He(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;W(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Vn={id:"tab",type:"blade",accept(n){const e=xe,t=ke(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new yn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ce(n.document,{itemProps:re.fromObject({selected:!1,title:t.title}),props:re.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof yn?new Ze(n.controller,n.pool):null}};function On(n,e){const t=n.accept(e.params);if(!t)return null;const s=xe.optional.boolean(e.params.disabled).value,u=xe.optional.boolean(e.params.hidden).value;return n.controller({blade:Be(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:f.create({disabled:s,hidden:u})})}class cs{constructor(){this.disabled=!1,this.emitter=new I}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class us{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new I,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Fn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new I,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Nn(n,e){for(;n.length<e;)n.push(void 0)}function $n(n){const e=[];return Nn(e,n),le(e)}function ft(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Xt(n,e){const t=[...ft(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Nn(t,n.length),t}class pn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new I,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Xt(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class xt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function _t(n,e){if(n instanceof e)return n;if(n instanceof xt){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class kt{constructor(e){this.values=re.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Qt{constructor(e){this.values=re.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class hn{constructor(e){this.values=re.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return N(s)||(u=Math.max(u,s)),N(t)||(u=Math.min(u,t)),u}}class Wn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const ds=K("lst");class Ti{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(ds()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(ds("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add(ds("m")),u.appendChild(b(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,se(this.props_,"options",E=>{q(this.selectElement),E.forEach(A=>{const J=e.createElement("option");J.textContent=A.text,this.selectElement.appendChild(J)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Pn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const qs=K("pop");class Ai{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(qs()),t.viewProps.bindClassModifiers(this.element),ue(t.shows,te(this.element,qs(void 0,"v")))}}class js{constructor(e,t){this.shows=le(!1),this.viewProps=t.viewProps,this.view=new Ai(e,{shows:this.shows,viewProps:this.viewProps})}}const Hs=K("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Hs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class qn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);N(u)||(this.value.rawValue=u),this.view.refresh()}}function zi(n){return String(n)}function Ks(n){return n==="false"?!1:!!n}function Ys(n){return zi(n)}class Li{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Gi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ii{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Gi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ri={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ui{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ri[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ps(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function Sn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function En(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=En(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=En(n,e);return u===""?"":s+u}function hs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Oi(n,e);return s===""?"":t+s}function Zs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+En(n,e)}function Fi(n,e){const t=Zs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=En(n,e);return e+=u.length,t+s+u+hs(n,e)}function Ni(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=En(n,e);return e+=s.length,s===""?"":t+s+hs(n,e)}function $i(n,e){const t=Zs(n,e);return e+=t.length,t===""?"":t+hs(n,e)}const Wi=ps([Fi,Ni,$i]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Hi(n,e);return s===""?"":t+s}function Yi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Yi(n,e);return s===""?"":t+s}const Xi=ps([ji,Ki,Zi]),Qi=ps([Xi,Wi]);function Ji(n,e){const t=Qi(n,e);return e+=t.length,t===""?null:{evaluable:new Li(t),cursor:e}}function eo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Qs(n,e);if(!s)return null;e=s.cursor,e+=Sn(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function to(n,e){var t;return(t=Ji(n,e))!==null&&t!==void 0?t:eo(n,e)}function Xs(n,e){const t=to(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=Xs(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new Ui(s,u.evaluable)}):null}function no(n,e,t){t+=Sn(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=Sn(e,t).length,{cursor:t,operator:s}):null}function so(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let E=u.evaluable;for(;;){const A=no(e,t,s);if(!A)break;s=A.cursor;const J=n(t,s);if(!J)return null;s=J.cursor,E=new Ii(A.operator,E,J.evaluable)}return E?{cursor:s,evaluable:E}:null}}const ro=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>so(n,e),Xs);function Qs(n,e){return e+=Sn(n,e).length,ro(n,e)}function io(n){const e=Qs(n,0);return!e||e.cursor+Sn(n,e.cursor).length!==n.length?null:e.evaluable}function Dt(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Js(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Dt(n);if(!N(e))return e}return 0}function oo(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ao=pt(0);function jn(n){return ao(n)+"%"}function er(n){return String(n)}function fs(n){return n}function Cn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function E(A){u||(u=!0,A(),u=!1)}n.emitter.on("change",A=>{E(()=>{e.setRawValue(t(n,e),A.options)})}),e.emitter.on("change",A=>{E(()=>{n.setRawValue(s(n,e),A.options)}),E(()=>{e.setRawValue(t(n,e),A.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function kn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function zt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function lo(n){return n==="ArrowUp"||n==="ArrowDown"}function tr(n){return lo(n)||n==="ArrowLeft"||n==="ArrowRight"}function _s(n,e){var t,s;const u=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class Jt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new I,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Je(n,e,t,s,u){const E=(n-e)/(t-e);return s+E*(u-s)}function nr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ct(n,e,t){return Math.min(Math.max(n,e),t)}function sr(n,e){return(n%e+e)%e}const Pt=K("txt");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Pt(),Pt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Pt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Pt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Pt()),this.inputElement.classList.add(Pt("i"));const u=e.createElement("div");u.classList.add(Pt("k")),this.element.appendChild(u),this.knobElement=u;const E=e.createElementNS(w,"svg");E.classList.add(Pt("g")),this.knobElement.appendChild(E);const A=e.createElementNS(w,"path");A.classList.add(Pt("gb")),E.appendChild(A),this.guideBodyElem_=A;const J=e.createElementNS(w,"path");J.classList.add(Pt("gh")),E.appendChild(J),this.guideHeadElem_=J;const Pe=e.createElement("div");Pe.classList.add(K("tt")()),this.knobElement.appendChild(Pe),this.tooltipElem_=Pe,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Pt(void 0,"drg"));return}this.element.classList.add(Pt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=ct(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Mn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=le(null),this.view=new co(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new Jt(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let A=e;return u!==void 0&&(A=Math.max(A,u)),E!==void 0&&(A=Math.min(A,E)),A}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);N(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,kn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,kn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ms=K("sld");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ms("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(ms("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ct(Je(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class po{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new uo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Je(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,zt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bs=K("sldtxt");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bs());const s=e.createElement("div");s.classList.add(bs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(bs("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new po(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Mn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new ho(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Bn(n,e){n.write(e)}function Hn(n){const e=xe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function rr(n){if(n==="inline"||n==="popup")return n}function Ot(n){const e=xe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ir(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function gs(n){return N(n)?null:new Qt(ir(n))}function fo(n){const e=n?_t(n,Wn):null;return e?e.step:null}function Kn(n,e){const t=n&&_t(n,Wn);return t?nr(t.step):Math.max(nr(e),2)}function fn(n){const e=fo(n);return e??1}function _n(n,e){var t;const s=n&&_t(n,Wn),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const Yn=K("ckb");class _o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Yn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Yn("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(Yn("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(Yn("w")),s.appendChild(E);const A=b(e,"check");E.appendChild(A),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class mo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new _o(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function bo(n){const e=[],t=gs(n.options);return t&&e.push(t),new xt(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ke(e,{options:xe.optional.custom(Hn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks,constraint:n=>bo(n.params),writer:n=>Bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&_t(s,Qt);return u?new Pn(e,{props:new re({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new mo(e,{value:t,viewProps:n.viewProps})}},en=K("col");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(en()),t.foldable.bindExpandedClass(this.element,en(void 0,"expanded")),se(t.foldable,"completed",te(this.element,en(void 0,"cpl")));const s=e.createElement("div");s.classList.add(en("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(en("s")),s.appendChild(u),this.swatchElement=u;const E=e.createElement("div");if(E.classList.add(en("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(en("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}function wo(n,e,t){const s=ct(n/255,0,1),u=ct(e/255,0,1),E=ct(t/255,0,1),A=Math.max(s,u,E),J=Math.min(s,u,E),Pe=A-J;let Ee=0,Fe=0;const Ne=(J+A)/2;return Pe!==0&&(Fe=Pe/(1-Math.abs(A+J-1)),s===A?Ee=(u-E)/Pe:u===A?Ee=2+(E-s)/Pe:Ee=4+(s-u)/Pe,Ee=Ee/6+(Ee<0?1:0)),[Ee*360,Fe*100,Ne*100]}function xo(n,e,t){const s=(n%360+360)%360,u=ct(e/100,0,1),E=ct(t/100,0,1),A=(1-Math.abs(2*E-1))*u,J=A*(1-Math.abs(s/60%2-1)),Pe=E-A/2;let Ee,Fe,Ne;return s>=0&&s<60?[Ee,Fe,Ne]=[A,J,0]:s>=60&&s<120?[Ee,Fe,Ne]=[J,A,0]:s>=120&&s<180?[Ee,Fe,Ne]=[0,A,J]:s>=180&&s<240?[Ee,Fe,Ne]=[0,J,A]:s>=240&&s<300?[Ee,Fe,Ne]=[J,0,A]:[Ee,Fe,Ne]=[A,0,J],[(Ee+Pe)*255,(Fe+Pe)*255,(Ne+Pe)*255]}function yo(n,e,t){const s=ct(n/255,0,1),u=ct(e/255,0,1),E=ct(t/255,0,1),A=Math.max(s,u,E),J=Math.min(s,u,E),Pe=A-J;let Ee;Pe===0?Ee=0:A===s?Ee=60*(((u-E)/Pe%6+6)%6):A===u?Ee=60*((E-s)/Pe+2):Ee=60*((s-u)/Pe+4);const Fe=A===0?0:Pe/A,Ne=A;return[Ee,Fe*100,Ne*100]}function or(n,e,t){const s=sr(n,360),u=ct(e/100,0,1),E=ct(t/100,0,1),A=E*u,J=A*(1-Math.abs(s/60%2-1)),Pe=E-A;let Ee,Fe,Ne;return s>=0&&s<60?[Ee,Fe,Ne]=[A,J,0]:s>=60&&s<120?[Ee,Fe,Ne]=[J,A,0]:s>=120&&s<180?[Ee,Fe,Ne]=[0,A,J]:s>=180&&s<240?[Ee,Fe,Ne]=[0,J,A]:s>=240&&s<300?[Ee,Fe,Ne]=[J,0,A]:[Ee,Fe,Ne]=[A,0,J],[(Ee+Pe)*255,(Fe+Pe)*255,(Ne+Pe)*255]}function Po(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function So(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function tn(n){return[n[0],n[1],n[2]]}function ar(n,e){return[n[0],n[1],n[2],e]}const Eo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Po,rgb:xo},hsv:{hsl:So,hsv:(n,e,t)=>[n,e,t],rgb:or},rgb:{hsl:wo,hsv:yo,rgb:(n,e,t)=>[n,e,t]}};function Zn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:sr(n,e)}function ko(n,e,t){var s;const u=Zn(e,t);return[e==="rgb"?ct(n[0],0,u[0]):Co(n[0],u[0]),ct(n[1],0,u[1]),ct(n[2],0,u[2]),ct((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function lr(n,e,t,s){const u=Zn(e,t),E=Zn(e,s);return n.map((A,J)=>A/u[J]*E[J])}function Mo(n,e,t){const s=lr(n,e.mode,e.type,"int"),u=Eo[e.mode][t.mode](...s);return lr(u,t.mode,"int",t.type)}function Xn(n,e){return typeof n!="object"||N(n)?!1:e in n&&typeof n[e]=="number"}class Re{static black(e="int"){return new Re([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Re(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Xn(e,"r")&&Xn(e,"g")&&Xn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Xn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==u[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=ko(e,t,s)}getComponents(e,t="int"){return ar(Mo(tn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ft=K("colp");class Bo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ft("hsv"));const u=e.createElement("div");u.classList.add(Ft("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const E=e.createElement("div");E.classList.add(Ft("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const A=e.createElement("div");if(A.classList.add(Ft("rgb")),this.textView_=t.textView,A.appendChild(this.textView_.element),this.element.appendChild(A),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const J=e.createElement("div");J.classList.add(Ft("a"));const Pe=e.createElement("div");Pe.classList.add(Ft("ap")),Pe.appendChild(this.alphaViews_.palette.element),J.appendChild(Pe);const Ee=e.createElement("div");Ee.classList.add(Ft("at")),Ee.appendChild(this.alphaViews_.text.element),J.appendChild(Ee),this.element.appendChild(J)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function To(n){return n==="int"?"int":n==="float"?"float":void 0}function ws(n){const e=xe;return ke(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(To)}),expanded:e.optional.boolean,picker:e.optional.custom(rr)})}function nn(n){return n?.1:1}function sn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ao(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function St(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function cr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function ur(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Re(t,"rgb",n):null}}function pr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Re(t,"rgb",n):null}}function fr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),St(e[2],100),St(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Re(t,"hsl",n):null}}function mr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),St(e[2],100),St(e[3],100),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function br(n){return e=>{const t=mr(e);return t?new Re(t,"hsl",n):null}}function vr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function zo(n){const e=vr(n);return e?new Re(e,"rgb","int"):null}function gr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Je(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Je(parseInt(t[4],16),0,255,0,1)]:null}function Lo(n){const e=gr(n);return e?new Re(e,"rgb","int"):null}function wr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Re(t,"rgb",n):null}}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Re(t,"rgb",n):null}}const Go=[{parser:vr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:gr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ur,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:pr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:mr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:wr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:yr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return Go.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function xs(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Sr={int:[zo,Lo,dr("int"),hr("int"),_r("int"),br("int"),xr("int"),Pr("int")],float:[dr("float"),hr("float"),_r("float"),br("float"),xr("float"),Pr("float")]};function Ro(n){const e=Sr[n];return t=>{if(typeof t!="string")return Re.black(n);const s=e.reduce((u,E)=>u||E(t),null);return s??Re.black(n)}}function ys(n){const e=Sr[n];return t=>e.reduce((s,u)=>s||u(t),null)}function Er(n){const e=ct(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Cr(n,e="#"){const t=tn(n.getComponents("rgb")).map(Er).join("");return`${e}${t}`}function Ps(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Er).join("");return`${e}${s}`}function kr(n,e){const t=pt(e==="float"?2:0);return`rgb(${tn(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function Uo(n){return e=>kr(e,n)}function Qn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,A)=>(A===3?t:s)(E)).join(", ")})`}function Vo(n){return e=>Qn(e,n)}function Oo(n){const e=[pt(0),jn,jn];return`hsl(${tn(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function Fo(n){const e=[pt(0),jn,jn,pt(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Mr(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${tn(n.getComponents("rgb",e)).map((E,A)=>`${s[A]}: ${t(E)}`).join(", ")}}`}function No(n){return e=>Mr(e,n)}function Br(n,e){const t=pt(2),s=pt(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((A,J)=>{const Pe=J===3?t:s;return`${u[J]}: ${Pe(A)}`}).join(", ")}}`}function $o(n){return e=>Br(e,n)}const Wo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Cr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ps},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:$o(e)}],[])];function Ss(n){return Wo.reduce((e,t)=>e||(Ao(t.format,n)?t.stringifier:null),null)}const Tn=K("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Tn("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Tn("c")),s.appendChild(u),this.colorElem_=u;const E=e.createElement("div");E.classList.add(Tn("m")),this.element.appendChild(E),this.markerElem_=E;const A=e.createElement("div");A.classList.add(Tn("p")),this.markerElem_.appendChild(A),this.previewElem_=A,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Re([t[0],t[1],t[2],0],"rgb"),u=new Re([t[0],t[1],t[2],255],"rgb"),E=["to right",Qn(s),Qn(u)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=Qn(e);const A=Je(t[3],0,1,0,100);this.markerElem_.style.left=`${A}%`}onValueChange_(){this.update_()}}class jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[E,A,J]=u.getComponents("hsv");this.value.setRawValue(new Re([E,A,J,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(nn(!0),zt(e));if(t===0)return;const s=this.value.rawValue,[u,E,A,J]=s.getComponents("hsv");this.value.setRawValue(new Re([u,E,A,J+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(nn(!0),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const mn=K("coltxt");function Ho(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const E=n.createElement("option");return E.textContent=u.text,E.value=u.value,s.appendChild(E),s},n.createDocumentFragment())),e}class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(mn("m")),this.modeElem_=Ho(e),this.modeElem_.classList.add(mn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(mn("mm")),u.appendChild(b(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(mn("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),ue(t.colorMode,A=>{this.modeElem_.value=A})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){q(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(mn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Yo(n){return pt(n==="float"?2:0)}function Zo(n,e,t){const s=Zn(n,e)[t];return new kt({min:0,max:s})}function Es(n,e,t){return new Mn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:nn(!1),parser:e.parser,props:re.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Yo(e.colorType)}),value:le(0,{constraint:Zo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Xo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=le(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ko(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Es(e,t,0),Es(e,t,1),Es(e,t,2)];return s.forEach((u,E)=>{Cn({primary:this.value,secondary:u.value,forward:A=>A.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(A,J)=>{const Pe=this.colorMode.rawValue,Ee=A.rawValue.getComponents(Pe,this.colorType_);return Ee[E]=J.rawValue,new Re(ar(tn(Ee),Ee[3]),Pe,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Cs=K("hpl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Cs("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Cs("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=kr(new Re([t,100,100],"hsv"));const s=Je(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,E,A,J]=u.getComponents("hsv");this.value.setRawValue(new Re([s,E,A,J],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(nn(!1),zt(e));if(t===0)return;const s=this.value.rawValue,[u,E,A,J]=s.getComponents("hsv");this.value.setRawValue(new Re([u+t,E,A,J],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(nn(!1),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ks=K("svp"),Tr=64;class ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Tr,s.width=Tr,s.classList.add(ks("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(ks("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,E=this.canvasElement.height,A=e.getImageData(0,0,u,E),J=A.data;for(let Fe=0;Fe<E;Fe++)for(let Ne=0;Ne<u;Ne++){const rn=Je(Ne,0,u,0,100),Dn=Je(Fe,0,E,100,0),zn=or(s[0],rn,Dn),Jn=(Fe*u+Ne)*4;J[Jn]=zn[0],J[Jn+1]=zn[1],J[Jn+2]=zn[2],J[Jn+3]=255}e.putImageData(A,0,0);const Pe=Je(s[1],0,100,0,100);this.markerElem_.style.left=`${Pe}%`;const Ee=Je(s[2],0,100,100,0);this.markerElem_.style.top=`${Ee}%`}onValueChange_(){this.update_()}}class ta{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(e.point.x,0,e.bounds.width,0,100),u=Je(e.point.y,0,e.bounds.height,100,0),[E,,,A]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Re([E,s,u,A],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s,u,E]=this.value.rawValue.getComponents("hsv"),A=nn(!1),J=mt(A,zt(e)),Pe=mt(A,kn(e));J===0&&Pe===0||this.value.setRawValue(new Re([t,s+J,u+Pe,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=nn(!1),s=mt(t,zt(e)),u=mt(t,kn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ta(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new jo(e,{value:this.value,viewProps:this.viewProps}),text:new Mn(e,{parser:Dt,baseStep:.1,props:re.fromObject({draggingScale:.01,formatter:pt(2)}),value:le(0,{constraint:new kt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Cn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const E=s.rawValue.getComponents();return E[3]=u.rawValue,new Re(E,s.rawValue.mode)}}),this.textC_=new Xo(e,{colorType:t.colorType,parser:Dt,value:this.value,viewProps:this.viewProps}),this.view=new Bo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ms=K("colsw");class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ms("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Ms("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ps(e)}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps})}}class Bs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new ra(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new qn(e,{parser:t.parser,props:re.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new go(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const u=new na(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,A)=>A.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ee(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Re.isColorObject(n)?Re.fromObject(n,e):Re.black(e)}function oa(n){return tn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function aa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function la(n){return new Re([n>>16&255,n>>8&255,n&255],"rgb")}function ca(n){return new Re([n>>24&255,n>>16&255,n>>8&255,Je(n&255,0,255,0,1)],"rgb")}function ua(n){return typeof n!="number"?Re.black():la(n)}function da(n){return typeof n!="number"?Re.black():ca(n)}function pa(n){const e=Ss(n);return e?(t,s)=>{Bn(t,e(s))}:null}function ha(n){const e=n?aa:oa;return(t,s)=>{Bn(t,e(s))}}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ma(n,e){return(t,s)=>{n?fa(t,s,e):_a(t,s,e)}}function Ts(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ba(n){return n?e=>Ps(e,"0x"):e=>Cr(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ga={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ts(n.params)?da:ua,equals:Re.equals,writer:n=>ha(Ts(n.params))},controller:n=>{const e=Ts(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Bs(n.document,{colorType:"int",expanded:t??!1,formatter:ba(e),parser:ys("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function wa(n){return Re.isRgbaColorObject(n)}function xa(n){return e=>ia(e,n)}function ya(n,e){return t=>n?Br(t,e):Mr(t,e)}const Pa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Re.isColorObject(n))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>xa(sn(n.params)),equals:Re.equals,writer:n=>ma(wa(n.initialValue),sn(n.params))},controller:n=>{var e;const t=Re.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,E=(e=sn(n.params))!==null&&e!==void 0?e:"int";return new Bs(n.document,{colorType:E,expanded:s??!1,formatter:ya(t,E),parser:ys(E),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=xs(n,sn(e));if(!t||!Ss(t))return null;const u=ws(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return Ro((e=sn(n.params))!==null&&e!==void 0?e:"int")},equals:Re.equals,writer:n=>{const e=xs(n.initialValue,sn(n.params));if(!e)throw U.shouldNeverHappen();const t=pa(e);if(!t)throw U.notBindable();return t}},controller:n=>{const e=xs(n.initialValue,sn(n.params));if(!e)throw U.shouldNeverHappen();const t=Ss(e);if(!t)throw U.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new Bs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ys(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Nt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var E,A;return(A=(E=this.components[u])===null||E===void 0?void 0:E.constrain(s))!==null&&A!==void 0?A:s});return this.asm_.fromComponents(t)}}const Ar=K("pndtxt");class Ea{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ar()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(Ar("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function Ca(n,e,t){return new Mn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:le(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class As{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>Ca(e,t,u)),this.acs_.forEach((s,u)=>{Cn({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[u],backward:(E,A)=>{const J=t.assembly.toComponents(E.rawValue);return J[u]=A.rawValue,t.assembly.fromComponents(J)}})}),this.view=new Ea(e,{textViews:this.acs_.map(s=>s.view)})}}function Dr(n,e){return"step"in n&&!N(n.step)?new Wn(n.step,e):null}function zr(n){return!N(n.max)&&!N(n.min)?new kt({max:n.max,min:n.min}):!N(n.max)||!N(n.min)?new hn({max:n.max,min:n.min}):null}function ka(n){const e=_t(n,kt);if(e)return[e.values.get("min"),e.values.get("max")];const t=_t(n,hn);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ma(n,e){const t=[],s=Dr(n,e);s&&t.push(s);const u=zr(n);u&&t.push(u);const E=gs(n.options);return E&&t.push(E),new xt(t)}const Ba={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=ke(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Hn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Js,constraint:n=>Ma(n.params,n.initialValue),writer:n=>Bn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&_t(s,Qt);if(u)return new Pn(n.document,{props:new re({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(Kn(s,t.rawValue)),A=s&&_t(s,kt);return A?new vs(n.document,{baseStep:fn(s),parser:Dt,sliderProps:new re({maxValue:A.values.value("max"),minValue:A.values.value("min")}),textProps:re.fromObject({draggingScale:_n(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new Mn(n.document,{baseStep:fn(s),parser:Dt,props:re.fromObject({draggingScale:_n(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class $t{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Lr={toComponents:n=>n.getComponents(),fromComponents:n=>new $t(...n)},bn=K("p2d");class Ta{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element),ue(t.expanded,te(this.element,bn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(bn("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(bn("b")),u.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const E=e.createElement("div");if(E.classList.add(bn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(bn("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}const Wt=K("p2dp");class Aa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Wt()),t.layout==="popup"&&this.element.classList.add(Wt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Wt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(w,"svg");u.classList.add(Wt("g")),this.padElement.appendChild(u),this.svgElem_=u;const E=e.createElementNS(w,"line");E.classList.add(Wt("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const A=e.createElementNS(w,"line");A.classList.add(Wt("ax")),A.setAttributeNS(null,"x1","50%"),A.setAttributeNS(null,"y1","0"),A.setAttributeNS(null,"x2","50%"),A.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(A);const J=e.createElementNS(w,"line");J.classList.add(Wt("l")),J.setAttributeNS(null,"x1","50%"),J.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(J),this.lineElem_=J;const Pe=e.createElement("div");Pe.classList.add(Wt("m")),this.padElement.appendChild(Pe),this.markerElem_=Pe,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=Je(e,-s,+s,0,100),E=Je(t,-s,+s,0,100),A=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${A}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${A}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Gr(n,e,t){return[mt(e[0],zt(n)),mt(e[1],kn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Aa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=Je(e.point.x,0,e.bounds.width,-s,+s),E=Je(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new $t(u,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new $t(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class za{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const E=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new As(e,{assembly:Lr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ta(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,J)=>J.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ee(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class vn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ir={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function La(n){return vn.isObject(n)?new vn(n.x,n.y,n.z):new vn}function Ga(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new Nt({assembly:Ir,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y),Lt("z"in n?n.z:void 0,e.z)]})}function Ds(n,e){return{baseStep:fn(e),constraint:e,textProps:re.fromObject({draggingScale:_n(e,n),formatter:pt(Kn(e,n))})}}const Ra={id:"input-point3d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=xe,s=ke(e,{x:t.optional.custom(Ot),y:t.optional.custom(Ot),z:t.optional.custom(Ot)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>La,constraint:n=>Ia(n.params,n.initialValue),equals:vn.equals,writer:n=>Ga},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Nt))throw U.shouldNeverHappen();return new As(n.document,{assembly:Ir,axes:[Ds(e.rawValue.x,t.components[0]),Ds(e.rawValue.y,t.components[1]),Ds(e.rawValue.z,t.components[2])],parser:Dt,value:e,viewProps:n.viewProps})}};class gn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,u=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Rr={toComponents:n=>n.getComponents(),fromComponents:n=>new gn(...n)};function Ua(n){return gn.isObject(n)?new gn(n.x,n.y,n.z,n.w):new gn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Oa(n,e){return new Nt({assembly:Rr,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y),Lt("z"in n?n.z:void 0,e.z),Lt("w"in n?n.w:void 0,e.w)]})}function Fa(n,e){return{baseStep:fn(e),constraint:e,textProps:re.fromObject({draggingScale:_n(e,n),formatter:pt(Kn(e,n))})}}const Na={id:"input-point4d",type:"input",accept:(n,e)=>{if(!gn.isObject(n))return null;const t=xe,s=ke(e,{x:t.optional.custom(Ot),y:t.optional.custom(Ot),z:t.optional.custom(Ot),w:t.optional.custom(Ot)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:gn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Nt))throw U.shouldNeverHappen();return new As(n.document,{assembly:Rr,axes:e.rawValue.getComponents().map((s,u)=>Fa(s,t.components[u])),parser:Dt,value:e,viewProps:n.viewProps})}};function $a(n){const e=[],t=gs(n.options);return t&&e.push(t),new xt(e)}const Wa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=ke(e,{options:xe.optional.custom(Hn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er,constraint:n=>$a(n.params),writer:n=>Bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&_t(s,Qt);return u?new Pn(e,{props:new re({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new qn(e,{parser:E=>E,props:re.fromObject({formatter:fs}),value:t,viewProps:n.viewProps})}},An={monitor:{defaultInterval:200,defaultLineCount:3}},Ur=K("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ur()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Ur("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class zs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Vr=K("sgl");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Vr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ha={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ke(e,{lineCount:xe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks},controller:n=>{var e;return n.value.rawValue.length===1?new Ls(n.document,{formatter:Ys,value:n.value,viewProps:n.viewProps}):new zs(n.document,{formatter:Ys,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},qt=K("grl");class Ka{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(qt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(w,"svg");s.classList.add(qt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(w,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const E=e.createElement("div");E.classList.add(qt("t"),K("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const rn=Je(Ne,0,t,0,e.width),Dn=Je(Fe,s,u,e.height,0);E.push([rn,Dn].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const A=this.tooltipElem_,J=this.value.rawValue[this.cursor_.rawValue];if(J===void 0){A.classList.remove(qt("t","a"));return}const Pe=Je(this.cursor_.rawValue,0,t,0,e.width),Ee=Je(J,s,u,e.height,0);A.style.left=`${Pe}px`,A.style.top=`${Ee}px`,A.textContent=`${this.formatter_(J)}`,A.classList.contains(qt("t","a"))||(A.classList.add(qt("t","a"),qt("t","in")),r(A),A.classList.remove(qt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ya{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=le(-1),this.view=new Ka(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Jt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Je(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Je(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Gs(n){return"format"in n&&!N(n.format)?n.format:pt(2)}function Za(n){var e;return n.value.rawValue.length===1?new Ls(n.document,{formatter:Gs(n.params),value:n.value,viewProps:n.viewProps}):new zs(n.document,{formatter:Gs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Xa(n){var e,t,s;return new Ya(n.document,{formatter:Gs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,props:re.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Or(n){return"view"in n&&n.view==="graph"}const Qa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=ke(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Or(n)?64:1,reader:n=>Js},controller:n=>Or(n.params)?Xa(n):Za(n)},Ja={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=xe,s=ke(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new zs(n.document,{formatter:fs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ls(n.document,{formatter:fs,value:t,viewProps:n.viewProps})}};function el(n,e){var t;const s=n.accept(e.target.read(),e.params);if(N(s))return null;const u=xe,E={target:e.target,initialValue:s.initialValue,params:s.params},A=n.binding.reader(E),J=n.binding.constraint?n.binding.constraint(E):void 0,Pe=le(A(s.initialValue),{constraint:J,equals:n.binding.equals}),Ee=new Fn({reader:A,target:e.target,value:Pe,writer:n.binding.writer(E)}),Fe=u.optional.boolean(e.params.disabled).value,Ne=u.optional.boolean(e.params.hidden).value,rn=n.controller({constraint:J,document:e.document,initialValue:s.initialValue,params:s.params,value:Ee.value,viewProps:f.create({disabled:Fe,hidden:Ne})});return new qe(e.document,{binding:Ee,blade:Be(),props:re.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:rn})}function tl(n,e){return e===0?new cs:new us(n,e??An.monitor.defaultInterval)}function nl(n,e){var t,s,u;const E=xe,A=n.accept(e.target.read(),e.params);if(N(A))return null;const J={target:e.target,initialValue:A.initialValue,params:A.params},Pe=n.binding.reader(J),Ee=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(A.params))!==null&&s!==void 0?s:1,Fe=E.optional.number(e.params.interval).value,Ne=new pn({reader:Pe,target:e.target,ticker:tl(e.document,Fe),value:$n(Ee)}),rn=E.optional.boolean(e.params.disabled).value,Dn=E.optional.boolean(e.params.hidden).value,zn=n.controller({document:e.document,params:A.params,value:Ne.value,viewProps:f.create({disabled:rn,hidden:Dn})});return new Ke(e.document,{binding:Ne,blade:Be(),props:re.fromObject({label:"label"in e.params?(u=E.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:zn})}class sl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(N(u))throw new U({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((A,J)=>A??el(J,{document:e,target:t,params:s}),null);if(E)return E;throw new U({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((E,A)=>E??nl(A,{document:e,params:s,target:t}),null);if(u)return u;throw new U({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,E)=>u??On(E,{document:e,params:t}),null);if(!s)throw new U({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new ot(e);if(e instanceof Ke)return new nt(e);if(e instanceof Ye)return new yt(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw U.shouldNeverHappen();return t}}function rl(){const n=new sl;return[ul,Ra,Na,Wa,Ba,Sa,Pa,ga,vo,Ha,Ja,Qa,ae,xn,ce,Vn].forEach(e=>{n.register(e)}),n}function il(n){return $t.isObject(n)?new $t(n.x,n.y):new $t}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Lt(n,e){if(!n)return;const t=[],s=Dr(n,e);s&&t.push(s);const u=zr(n);return u&&t.push(u),new xt(t)}function al(n,e){return new Nt({assembly:Lr,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y)]})}function Fr(n,e){const[t,s]=n?ka(n):[];if(!N(t)||!N(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=fn(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function ll(n,e){const t=e instanceof Nt?e.components[0]:void 0,s=e instanceof Nt?e.components[1]:void 0,u=Fr(t,n.x),E=Fr(s,n.y);return Math.max(u,E)}function Nr(n,e){return{baseStep:fn(e),constraint:e,textProps:re.fromObject({draggingScale:_n(e,n),formatter:pt(Kn(e,n))})}}function cl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!$t.isObject(n))return null;const t=xe,s=ke(e,{expanded:t.optional.boolean,picker:t.optional.custom(rr),x:t.optional.custom(Ot),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:$t.equals,writer:n=>ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Nt))throw U.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new za(e,{axes:[Nr(t.rawValue.x,s.components[0]),Nr(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:cl(n.params),maxValue:ll(t.rawValue,s),parser:Dt,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class $r extends g{constructor(e){super(e),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Wr extends g{constructor(e){super(e),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class qr extends g{constructor(e){super(e),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const dl=function(){return{id:"list",type:"blade",accept(n){const e=xe,t=ke(n,{options:e.required.custom(Hn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Qt(ir(n.params.options)),t=le(n.params.value,{constraint:e}),s=new Pn(n.document,{props:new re({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new At(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof At)||!(n.controller.valueController instanceof Pn)?null:new $r(n.controller)}}}();function pl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function hl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class fl extends vt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);hl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return pl(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class _l extends dn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ml={id:"slider",type:"blade",accept(n){const e=xe,t=ke(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new kt({max:n.params.max,min:n.params.min}),E=new vs(n.document,{baseStep:1,parser:Dt,sliderProps:new re({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:re.fromObject({draggingScale:_n(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:oo}),value:le(s,{constraint:u}),viewProps:n.viewProps});return new At(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof At)||!(n.controller.valueController instanceof vs)?null:new Wr(n.controller)}},bl=function(){return{id:"text",type:"blade",accept(n){const e=xe,t=ke(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new qn(n.document,{parser:n.params.parse,props:re.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:le(n.params.value),viewProps:n.viewProps});return new At(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof At)||!(n.controller.valueController instanceof qn)?null:new qr(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function jr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class gl extends fl{constructor(e){var t,s;const u=e??{},E=(t=u.document)!==null&&t!==void 0?t:l(),A=rl(),J=new _l(E,{expanded:u.expanded,blade:Be(),props:re.fromObject({title:u.title}),viewProps:f.create()});super(J,A),this.pool_=A,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:vl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw U.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw U.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&jr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){jr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ml,dl,Vn,bl]})}}const wl=new S("3.1.10");h.BladeApi=g,h.ButtonApi=Q,h.FolderApi=vt,h.InputBindingApi=ot,h.ListApi=$r,h.MonitorBindingApi=nt,h.Pane=gl,h.SeparatorApi=Kt,h.SliderApi=Wr,h.TabApi=Ze,h.TabPageApi=$e,h.TextApi=qr,h.TpChangeEvent=M,h.VERSION=wl,Object.defineProperty(h,"__esModule",{value:!0})})})(Rs,Rs.exports);var jl=Rs.exports;const Hl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Kl=`// 2DGS render — vertex+fragment.
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
struct HtParams { tail_k : f32, _p0 : f32, _p1 : f32, _p2 : f32 };
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
}`,vi=32,Us=1,Vs=2,si=4,Os=8,gi=4,sc=7<<gi,ri=128,ii=256,rc=0,jt=new ArrayBuffer(vi),at={canvas_size:new Uint32Array(jt,0,2),accel_flags:new Uint32Array(jt,8,1),feature_mode:new Uint32Array(jt,12,1),gaussian_scaling:new Float32Array(jt,16,1),sh_bias:new Float32Array(jt,20,1),color_K:new Uint32Array(jt,24,1),walltime:new Float32Array(jt,28,1)};function ic(o){at.canvas_size[0]=o.width>>>0,at.canvas_size[1]=o.height>>>0,at.accel_flags[0]=(o.accel_flags??Us|Vs)>>>0,at.feature_mode[0]=(o.feature_mode??rc)>>>0,at.gaussian_scaling[0]=o.gaussian_scaling??1,at.sh_bias[0]=o.sh_bias??.5,at.color_K[0]=(o.color_K??0)>>>0,at.walltime[0]=o.walltime??0}function wi(o,a){o.queue.writeBuffer(a,0,jt)}function ls(o,a,h){h&&o&&a&&wi(o,a)}function es(o,a,h,S,g=!0){at.canvas_size[0]=o>>>0,at.canvas_size[1]=a>>>0,ls(h??null,S??null,g)}function oi(o,a,h,S=!0){at.gaussian_scaling[0]=o,ls(a??null,h??null,S)}function ai(o,a,h,S=!0){at.sh_bias[0]=o,ls(a??null,h??null,S)}function an(o,a,h,S=!0){let g=at.accel_flags[0];if(o.oac!==void 0&&(g=o.oac?g|Us:g&~Us),o.spr!==void 0&&(g=o.spr?g|Vs:g&~Vs),o.bfc!==void 0&&(g=o.bfc?g|si:g&~si),o.meshCull!==void 0&&(g=o.meshCull?g|Os:g&~Os),o.meshSampleMode!==void 0){const C=(o.meshSampleMode&7)<<gi;g=g&~sc|C}o.meshSilhouetteCull!==void 0&&(g=o.meshSilhouetteCull?g|ri:g&~ri),o.meshInvertDepth!==void 0&&(g=o.meshInvertDepth?g|ii:g&~ii),at.accel_flags[0]=g>>>0,ls(a??null,h??null,S)}const oc=256,ac=vi,lc=8,cc=96,uc=12,Ws=8,Gt=1<<Ws,ln=256,is=32/Ws,dc=0,li=is&1;function ci(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pc(o,a){const h=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[h]}),g=C=>o.createComputePipeline({layout:S,compute:{module:a,entryPoint:C,constants:{WG_SIZE:ln}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:h}}function hc(o,a,h){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[S]}),M=o.createPipelineLayout({bindGroupLayouts:[g]}),F=[];for(let L=0;L<is;L++){const R={PASS_ID:L+dc,RS_RADIX_LOG2:Ws,RS_RADIX_SIZE:Gt};F.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:a,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:h,entryPoint:"scatter_elements",constants:R}})})}return{passes:F,localHistogramBindGroupLayout:S,scatterBindGroupLayout:g}}function fc(o){const a=o.createShaderModule({label:"local histogram",code:tc}),h=o.createShaderModule({label:"scatter",code:ec}),S=o.createShaderModule({label:"blelloch prefix",code:nc}),g=pc(o,S),C=hc(o,a,h);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:g}}function _c(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=a.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:h,sampler:S,rectsBuffer:g,texParamsBuffer:C,meta:M}}class mc{constructor(a,h,S,g,C,M=null,F=null){G(this,"device");G(this,"pc");G(this,"presentationFormat");G(this,"camera_buffer");G(this,"render_settings_buffer");G(this,"draw_indirect_buffer");G(this,"splat_2d_buffer");G(this,"querySet");G(this,"resolveBuffer");G(this,"resultBuffer");G(this,"queriesPerFrame",lc);G(this,"queryCapacityFrames",200);G(this,"sort_prefixBindGroup");G(this,"sort_pipelines");G(this,"sort_localHistogramBindGroups");G(this,"sort_scatterBindGroups");G(this,"lastFrame",0);G(this,"frameCount",0);G(this,"preprocessPipeline");G(this,"cullPipeline");G(this,"renderPipeline");G(this,"indirectPipeline");G(this,"htEnabled",!1);G(this,"wsrEnabled",!1);G(this,"wsrPipeline",null);G(this,"wsrCompositePipeline",null);G(this,"htSortedTail",!1);G(this,"htOccTail",!1);G(this,"htTailOccPipeline",null);G(this,"renderShaderModule");G(this,"betaKernel",1);G(this,"renderSettingsBgl");G(this,"renderSplatsBgl");G(this,"atlasBgl");G(this,"htCorePipeline",null);G(this,"htTailPipeline",null);G(this,"htTail2Pipeline",null);G(this,"htCompositePipeline",null);G(this,"htComposite2Pipeline",null);G(this,"htCompositeBgl",null);G(this,"htCompositeBindGroup",null);G(this,"htDepthTexture",null);G(this,"htDepthView",null);G(this,"htCoreTexture",null);G(this,"htCoreView",null);G(this,"htAccumTexture",null);G(this,"htAccumView",null);G(this,"htTransTexture",null);G(this,"htTransView",null);G(this,"htW",0);G(this,"htH",0);G(this,"htTailBgl",null);G(this,"htTailBindGroup",null);G(this,"htParamsBuffer",null);G(this,"htTailK",150);G(this,"sort_info_buffer");G(this,"sort_ping_pong");G(this,"crsBg");G(this,"gsBg");G(this,"cullBg2");G(this,"preprocessBg1");G(this,"renderSplatsBindGroup");G(this,"renderSettingsBindGroup");G(this,"atlasBindGroup");G(this,"indirectBindGroup");G(this,"sh_solvers_buffer");G(this,"mesh");G(this,"meshDepthPipeline",null);G(this,"meshDepthCameraBindGroup",null);G(this,"meshDepthMarginBindGroup",null);G(this,"meshMarginBuffer",null);G(this,"meshDepthTexture",null);G(this,"meshDepthView",null);G(this,"meshCullBindGroupLayout");G(this,"meshCullBindGroup");G(this,"meshCullWidth",0);G(this,"meshCullHeight",0);G(this,"meshStubTexture");G(this,"meshStubView");G(this,"bfcParamsBuffer");G(this,"meshOverlayPipeline",null);G(this,"meshOverlayEnabled",!1);G(this,"bgColor",[0,0,0,0]);G(this,"showPerfDialogNext",!1);G(this,"requestReorderNextFrame",!1);G(this,"reorderInFlight",!1);G(this,"downloadOnceNextRead",!1);G(this,"downloadOnceFileName","fps_metrics");G(this,"allFrameTimes",[]);G(this,"lastStageBreakdownMs",null);G(this,"timeQueryEnabled");G(this,"atlas");G(this,"atlasParamsBuffer");this.mesh=F;const L=C.includes("timestamp-query");this.timeQueryEnabled=L,L&&Mt("⏰ using timestamp-query"),this.pc=a,this.device=h,this.presentationFormat=S,this.camera_buffer=g,this.atlas=M??_c(h),this.atlasParamsBuffer=h.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),h.addEventListener("uncapturederror",re=>{console.error("A WebGPU error was not captured:",re.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+ln-1)/ln)+1)*ln,$=Math.ceil(R/ln);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const N=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=fc(h);const Y=[ci(R,h),ci(R,h)],V=h.createBuffer({label:"workgroup histograms",size:$*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=h.createBuffer({label:"workgroup prefixes",size:$*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=h.createBuffer({label:"digit base",size:Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),D=Math.ceil($/ln),Q=Math.ceil(D/ln),I=h.createBuffer({label:"prefix l0 sums",size:D*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=h.createBuffer({label:"prefix l0 offsets",size:D*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=h.createBuffer({label:"prefix l1 sums",size:Q*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=h.createBuffer({label:"prefix l1 offsets",size:Q*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:O}},{binding:3,resource:{buffer:I}},{binding:4,resource:{buffer:j}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:oe}},{binding:7,resource:{buffer:U}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:Y[0].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:Y[1].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:Y[0].sort_depths_buffer}},{binding:3,resource:{buffer:Y[1].sort_depths_buffer}},{binding:4,resource:{buffer:Y[0].sort_indices_buffer}},{binding:5,resource:{buffer:Y[1].sort_indices_buffer}},{binding:6,resource:{buffer:O}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:Y[1].sort_depths_buffer}},{binding:3,resource:{buffer:Y[0].sort_depths_buffer}},{binding:4,resource:{buffer:Y[1].sort_indices_buffer}},{binding:5,resource:{buffer:Y[0].sort_indices_buffer}},{binding:6,resource:{buffer:O}}]})],this.sort_info_buffer=N,this.sort_ping_pong=Y;const ge=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ue=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),se=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),_e=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ge,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ue,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:_e,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const te=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Oe=this.device.createShaderModule({code:Xl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,ue,se,this.meshCullBindGroupLayout]}),compute:{module:Oe,entryPoint:"surfel_cull"}}),this.mesh!==null){const re=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:re,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ie,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const me=this.device.createShaderModule({code:Ql});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[re,ie]}),vertex:{module:me,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ge=this.device.createShaderModule({code:Hl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,_e]}),compute:{module:Ge,entryPoint:"preprocess"}});const Ie=this.device.createShaderModule({code:Kl});Ie.getCompilationInfo().then(re=>{re.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),re.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Te=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ve=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ye=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),le=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Te,ve,ye]}),vertex:{module:Ie,entryPoint:"vs_main"},fragment:{module:Ie,entryPoint:"fs_main",constants:{BETA_KERNEL:le},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(re=>{re?console.error("[render_2dgs] pipeline create validation error:",re.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Te,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ve,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[li].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ye,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Ie,this.betaKernel=le,this.renderSettingsBgl=Te,this.renderSplatsBgl=ve,this.atlasBgl=ye}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,0,0,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){an({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,h){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,h[0],h[1],h[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),h=new Uint32Array(a),S=new Float32Array(a);h[0]=this.atlas.meta.width|0,h[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,h[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureHtResources(a,h){var C,M,F,L;if(this.htCorePipeline===null){const R=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,0,0,0]));const $=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:$,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:$,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const N=this.device.createShaderModule({label:"ht_composite",code:Yl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:N,entryPoint:"vs_main"},fragment:{module:N,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===h)return;(C=this.htDepthTexture)==null||C.destroy(),(M=this.htCoreTexture)==null||M.destroy(),(F=this.htAccumTexture)==null||F.destroy(),(L=this.htTransTexture)==null||L.destroy();const S={width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},g=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:S,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:S,format:"rgba16float",usage:g}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:S,format:"rgba16float",usage:g}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:S,format:"r16float",usage:g}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]}),this.htW=a,this.htH=h}ensureMeshDepthTexture(a,h){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===h||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=h))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&mi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a)}async debugReadSortedIndices(a=30){const h=Math.max(0,Math.min(a,this.pc.num_points)),S=h*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[li].sort_indices_buffer,0,g,0,S),this.device.queue.submit([C.finish()]),await g.mapAsync(GPUMapMode.READ);const M=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(M)),g.unmap()}frame(a,h,S=!0){var R,$,N,Y;const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(at.accel_flags[0]&Os)!==0){const V=at.canvas_size[0],O=at.canvas_size[1];this.ensureMeshDepthTexture(V,O);const U={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},D=a.beginRenderPass(U);D.setPipeline(this.meshDepthPipeline),D.setBindGroup(0,this.meshDepthCameraBindGroup),D.setBindGroup(1,this.meshDepthMarginBindGroup),D.setVertexBuffer(0,this.mesh.vertexBuffer),D.setVertexBuffer(1,this.mesh.normalBuffer),D.setIndexBuffer(this.mesh.indexBuffer,"uint32"),D.drawIndexed(this.mesh.numIndices),D.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const V={label:"cull"};M&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const O=a.beginComputePass(V);O.setPipeline(this.cullPipeline),O.setBindGroup(0,this.crsBg),O.setBindGroup(1,this.gsBg),O.setBindGroup(2,this.cullBg2),O.setBindGroup(3,this.meshCullBindGroup);const U=Math.ceil(this.pc.num_points/oc);O.dispatchWorkgroups(U,1,1),O.end()}{const V=a.beginComputePass({label:"calculate indirect dispatch"});V.setPipeline(this.indirectPipeline),V.setBindGroup(0,this.indirectBindGroup),V.dispatchWorkgroups(1,1,1),V.end()}{const V={label:"preprocess"};M&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const O=a.beginComputePass(V);O.setPipeline(this.preprocessPipeline),O.setBindGroup(0,this.crsBg),O.setBindGroup(1,this.preprocessBg1),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}const L=this.wsrEnabled&&((($=(R=this.atlas)==null?void 0:R.meta)==null?void 0:$.probe_mode)|0)===2;if(!this.htEnabled&&!L||this.htSortedTail)for(let V=0;V<is;V++){const O=V&1,U=this.sort_pipelines.passes[V],D=this.sort_localHistogramBindGroups[O],Q=this.sort_scatterBindGroups[O];{const I={label:`upsweep_round${V}`};M&&!this.htEnabled&&V==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const j=a.beginComputePass(I);j.setPipeline(U.localHistogram),j.setBindGroup(0,D),j.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),j.end()}{const I=a.beginComputePass({label:`prefix_round${V} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=a.beginComputePass({label:`prefix_round${V} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=a.beginComputePass({label:`prefix_round${V} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,Gt,1),I.end()}{const I=a.beginComputePass({label:`prefix_round${V} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=a.beginComputePass({label:`prefix_round${V} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=a.beginComputePass({label:`prefix_round${V} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${V}`};M&&!this.htEnabled&&V==is-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const j=a.beginComputePass(I);j.setPipeline(U.scatterElements),j.setBindGroup(0,Q),j.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),j.end()}}if(L){const V=at.canvas_size[0],O=at.canvas_size[1];this.ensureHtResources(V,O);{const U={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};M&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5});const D=a.beginRenderPass(U);D.setPipeline(this.wsrPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const U={label:"wsr_composite",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const D=a.beginRenderPass(U);D.setPipeline(this.wsrCompositePipeline),D.setBindGroup(0,this.htCompositeBindGroup),D.draw(3),D.end()}}else if(this.htEnabled){const V=at.canvas_size[0],O=at.canvas_size[1];this.ensureHtResources(V,O);{const U={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};M&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5});const D=a.beginRenderPass(U);D.setPipeline(this.htCorePipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}if(this.htSortedTail){const U={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};M&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const D=a.beginRenderPass(U);D.setPipeline(this.htTail2Pipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}else{const U={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};M&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const D=a.beginRenderPass(U),Q=this.htOccTail&&(((Y=(N=this.atlas)==null?void 0:N.meta)==null?void 0:Y.probe_mode)|0)===2;D.setPipeline(Q?this.htTailOccPipeline:this.htTailPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.setBindGroup(3,this.htTailBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const U={label:"ht_composite",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const D=a.beginRenderPass(U);D.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),D.setBindGroup(0,this.htCompositeBindGroup),D.draw(3),D.end()}}else{const V={label:"render",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,endOfPassWriteIndex:C+7});const O=a.beginRenderPass(V);O.setPipeline(this.renderPipeline),O.setBindGroup(0,this.renderSettingsBindGroup),O.setBindGroup(1,this.renderSplatsBindGroup),O.setBindGroup(2,this.atlasBindGroup),O.drawIndirect(this.draw_indirect_buffer,0),O.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const U=this.device.createShaderModule({code:Jl}),D=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Q=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[D,Q]}),vertex:{module:U,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:U,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const V={label:"mesh_overlay",colorAttachments:[{view:h,loadOp:"load",storeOp:"store"}]},O=a.beginRenderPass(V);O.setPipeline(this.meshOverlayPipeline),O.setBindGroup(0,this.meshDepthCameraBindGroup),O.setBindGroup(1,this.meshDepthMarginBindGroup),O.setVertexBuffer(0,this.mesh.vertexBuffer),O.setVertexBuffer(1,this.mesh.normalBuffer),O.setIndexBuffer(this.mesh.indexBuffer,"uint32"),O.drawIndexed(this.mesh.numIndices),O.end()}this.frameCount++}async readPerfMetrics(a){const h=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),F=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,L=Array.from({length:g.length},()=>[]);let R=0;for(let Q=0;Q<M;Q++){const I=(F+Q)%this.queryCapacityFrames,j=I*this.queriesPerFrame;let K=!0;for(let oe=0;oe<g.length;oe++){const[ge,ue,se]=g[oe];if(C[j+se]===0n||C[j+ue]===0n||C[j+ue]<C[j+se]){K=!1;break}}if(!K){!h&&I%60===0&&console.debug("[timestamp] frame slot",I,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let oe=0;oe<g.length;oe++){const[ge,ue,se]=g[oe],_e=Number(C[j+se]),te=Number(C[j+ue]);L[oe].push((te-_e)/1e6)}}if(R===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...L[0]);const $=[];let N=0,Y=0,V=0;for(let Q=0;Q<g.length;Q++){const I=g[Q][0],j=L[Q];let K=0;if(I==="Total"){const oe=this.allFrameTimes;K=oe.reduce((se,_e)=>se+_e,0)/oe.length;const ge=[...oe].sort((se,_e)=>se-_e);N=ge[Math.floor(ge.length*.99)]||0;const ue=oe.reduce((se,_e)=>se+Math.pow(_e-K,2),0)/oe.length;Y=Math.sqrt(ue),V=K}else K=j.reduce((oe,ge)=>oe+ge,0)/j.length;$.push([I,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const O=Object.fromEntries($);this.lastStageBreakdownMs={cull:O.Culling??0,preprocess:O.Preprocess??0,sort:O.Sort??0,render:O.Render??0,total:O.Total??0};const D=`[TIMESTAMP - ${this.constructor.name}]
`+$.map(([Q,I])=>`${Q}: ${I.toFixed(3)}ms`).join(`
`)+`
Total P99: ${N.toFixed(3)}ms
Total STD: ${Y.toFixed(3)}ms
Total AVG: ${V.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(D),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Q=`Stage,ms
`,I=$.map(([oe,ge])=>`${oe},${ge.toFixed(3)}`).join(`
`),j="data:text/csv;charset=utf-8,"+encodeURIComponent(Q+I),K=document.createElement("a");K.href=j,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(D)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ac,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),h=a?a.width:1,S=a?a.height:1;ic({width:h,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),wi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:In(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:In(this.pc.num_points*uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const h=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,S=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function bc(o,a){return 2*Math.atan(a/(2*o))}function vc(o,a,h,S){const g=Math.tan(S/2),C=Math.tan(h/2),M=g*o,F=-M,L=C*o,R=-L,$=dt.create();return $[0]=2*o/(L-R),$[5]=-2*o/(M-F),$[2]=(L+R)/(L-R),$[6]=(M+F)/(M-F),$[14]=1,$[10]=a/(a-o),$[11]=-(a*o)/(a-o),dt.transpose($,$),$}async function gc(o){Mt(`loading scene camera file... : ${o}`);const h=await(await fetch(o)).json();return Mt(`loaded cameras count: ${h.length}`),h.map(S=>{const g=z.clone(S.position),C=Et.create(...S.rotation.flat()),M=C[0],F=C[4],L=C[8],R=C[1],$=C[5],N=C[9],Y=C[2],V=C[6],O=C[10];M*($*O-N*V)-F*(R*O-N*Y)+L*(R*V-$*Y)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const D=dt.fromMat3(C);return{position:g,rotation:D,img_name:S.img_name,id:S.id}})}const wc=4*2,xc=4*16,xi=4*xc+2*wc;function yc(o){return o.createBuffer({label:"camera uniform",size:xi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const on=new Float32Array(xi/Float32Array.BYTES_PER_ELEMENT),os=class os{constructor(a,h){G(this,"uniform_buffer");G(this,"position",z.create());G(this,"rotation",dt.create());G(this,"fovY",45/180*Math.PI);G(this,"fovX");G(this,"focal",Jr.create());G(this,"viewport",Jr.create());G(this,"view_matrix",dt.identity());G(this,"view_inv_matrix",dt.identity());G(this,"proj_matrix",dt.identity());G(this,"proj_inv_matrix",dt.identity());G(this,"_negPos",z.create());G(this,"look",z.create(0,0,1));G(this,"up",z.create(0,1,0));G(this,"right",z.create(1,0,0));this.canvas=a,this.device=h,this.uniform_buffer=yc(h),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=bc(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=vc(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(os.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let a=0;on.set(this.view_matrix,a),a+=16,on.set(this.view_inv_matrix,a),a+=16,on.set(this.proj_matrix,a),a+=16,on.set(this.proj_inv_matrix,a),a+=16,on.set(this.viewport,a),a+=2,on.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,on)}set_preset(a){z.copy(a.position,this.position),dt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};G(os,"Z_AXIS",z.create(0,0,1));let Fs=os;const Pc=z.create(1,0,0),Sc=z.create(0,1,0);function Ec(o,a){const h=o[0],S=o[4],g=o[8],C=o[1],M=o[5],F=o[9],L=o[2],R=o[6],$=o[10],N=h+M+$;let Y,V,O,U;if(N>0){const D=.5/Math.sqrt(N+1);Y=.25/D,V=(R-F)*D,O=(g-L)*D,U=(C-S)*D}else if(h>M&&h>$){const D=2*Math.sqrt(1+h-M-$);Y=(R-F)/D,V=.25*D,O=(S+C)/D,U=(g+L)/D}else if(M>$){const D=2*Math.sqrt(1+M-h-$);Y=(g-L)/D,V=(S+C)/D,O=.25*D,U=(F+R)/D}else{const D=2*Math.sqrt(1+$-h-M);Y=(C-S)/D,V=(g+L)/D,O=(F+R)/D,U=.25*D}return a[0]=V,a[1]=O,a[2]=U,a[3]=Y,a}class Cc{constructor(a){G(this,"element");G(this,"enabled",!0);G(this,"center",z.create(0,0,0));G(this,"up",z.create(0,1,0));G(this,"rotation",[0,0]);G(this,"shift",[0,0]);G(this,"scroll",0);G(this,"speed",.1);G(this,"sensitivity",.08);G(this,"leftPressed",!1);G(this,"rightPressed",!1);G(this,"leftDragPans",!1);G(this,"lastX",0);G(this,"lastY",0);G(this,"touches",new Map);G(this,"lastTouchCenter",null);G(this,"lastPinchDistance",null);G(this,"lastTwoFingerAngle",null);G(this,"lastTouchCount",0);G(this,"roll",0);G(this,"_dir",z.create());G(this,"_right",z.create());G(this,"_upCam",z.create());G(this,"_scratch",z.create());G(this,"_qY",ht.create());G(this,"_qX",ht.create());G(this,"_qRot",ht.create());G(this,"_qLocal",ht.create());G(this,"_qWorldToCam",ht.create());G(this,"_scratchMat3",Et.create());G(this,"bboxMin",null);G(this,"bboxMax",null);G(this,"anchor",z.create(0,0,0));G(this,"downCallback",a=>{var h,S,g,C;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(S=(h=a.target)==null?void 0:h.setPointerCapture)==null||S.call(h,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(C=(g=a.target)==null?void 0:g.setPointerCapture)==null||C.call(g,a.pointerId),a.preventDefault())}});G(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const h=a.pageX-this.lastX,S=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=S)});G(this,"upCallback",a=>{var h,S,g,C;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(S=(h=a.target)==null?void 0:h.releasePointerCapture)==null||S.call(h,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(g=a.target)==null?void 0:g.releasePointerCapture)==null||C.call(g,a.pointerId),a.preventDefault()});G(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let h=a.deltaY;a.deltaMode===1?h*=16:a.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(a){z.copy(a,this.center),z.copy(a,this.anchor)}setOrbitPivot(a){z.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const h=this.camera.rotation;z.set(h[2],h[6],h[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,a,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(z.subtract(this.center,a.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const h=a.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,a.update_buffer()}setBbox(a,h){this.bboxMin=z.create(a[0],a[1],a[2]),this.bboxMax=z.create(h[0],h[1],h[2]);const S=(a[0]+h[0])*.5,g=(a[1]+h[1])*.5,C=(a[2]+h[2])*.5;z.set(S,g,C,this.center),z.set(S,g,C,this.anchor)}resetToCamera(){const a=this.camera.rotation;z.set(a[2],a[6],a[10],this._dir),z.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,g=1/0,C=!1;for(let M=0;M<3;M++){const F=this._dir[M],L=this.bboxMin[M]-this.camera.position[M],R=this.bboxMax[M]-this.camera.position[M];if(Math.abs(F)>1e-8){const $=L/F,N=R/F;S=Math.max(S,Math.min($,N)),g=Math.min(g,Math.max($,N))}else if(L>0||R<0){C=!0;break}}!C&&S<=g&&g>0&&(h=(Math.max(S,0)+g)*.5)}if(h===null||!isFinite(h)||h<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const S=z.dot(this._scratch,this._dir);h=S>.001?S:z.length(this._scratch)}h=Math.max(.1,h),z.scale(this._dir,h,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const S=h.x-this.lastTouchCenter[0],g=h.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[h.x,h.y]}else if(a===2){const h=Array.from(this.touches.values()),S=(h[0].x+h[1].x)*.5,g=(h[0].y+h[1].y)*.5,C=h[1].x-h[0].x,M=h[1].y-h[0].y,F=Math.hypot(C,M),L=Math.atan2(M,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=S-this.lastTouchCenter[0],$=g-this.lastTouchCenter[1],N=Math.hypot(R,$),Y=Math.abs(F-this.lastPinchDistance);let V=L-this.lastTwoFingerAngle;V>Math.PI&&(V-=2*Math.PI),V<-Math.PI&&(V+=2*Math.PI),N>.5&&(this.shift[1]-=R,this.shift[0]+=$),Y>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(F/this.lastPinchDistance)*10),Math.abs(V)>.0087&&(this.roll+=-V)}this.lastTouchCenter=[S,g],this.lastPinchDistance=F,this.lastTwoFingerAngle=L}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const U=h.rotation;this.up[0]=U[1],this.up[1]=U[5],this.up[2]=U[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const U=h.rotation;z.set(U[2],U[6],U[10],this._scratch),z.normalize(this._scratch,this._scratch),ht.fromAxisAngle(this._scratch,this.roll,this._qRot),z.transformQuat(this.up,this._qRot,this.up),z.normalize(this.up,this.up),this.roll=0,S=!0}z.subtract(h.position,this.center,this._dir);let g=z.length(this._dir);g<1e-6&&(g=1e-6);const C=Math.exp(Math.log(g)+this.scroll*a*10*this.speed);z.scale(this._dir,C/g,this._dir),g=C;const M=h.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const F=z.create(M[1],M[5],M[9]);z.normalize(F,F),z.length(F)<1e-6&&z.set(0,1,0,F);const L=a*this.speed*.1*g,R=this.shift[1]*L,$=-this.shift[0]*L;z.scale(this._right,R,this._scratch),z.add(this.center,this._scratch,this.center),z.add(h.position,this._scratch,h.position),z.scale(F,$,this._scratch),z.add(this.center,this._scratch,this.center),z.add(h.position,this._scratch,h.position);const N=this.rotation[0]*a*this.sensitivity,Y=this.rotation[1]*a*this.sensitivity;if(Math.abs(N)>1e-5||Math.abs(Y)>1e-5||S){const U=h.rotation;Ec(U,this._qWorldToCam),ht.fromAxisAngle(Pc,-Y,this._qX),ht.fromAxisAngle(Sc,-N,this._qY),ht.multiply(this._qX,this._qY,this._qLocal),ht.normalize(this._qLocal,this._qLocal),ht.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ht.normalize(this._qWorldToCam,this._qWorldToCam),Et.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,h.rotation);const D=h.rotation,Q=D[2],I=D[6],j=D[10];h.position[0]=this.center[0]-Q*g,h.position[1]=this.center[1]-I*g,h.position[2]=this.center[2]-j*g,this.up[0]=D[1],this.up[1]=D[5],this.up[2]=D[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,h.position);h.update_buffer();const O=Math.pow(.8,a*60);this.rotation[0]*=O,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=O,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=O,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=O,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=O,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function yi(o){const a=z.create();for(const h of o)z.add(a,h,a);return z.scale(a,1/Math.max(o.length,1),a)}function Pi(o,a){const h=Et.create();Et.inverse(o,h);const S=z.create();return S[0]=h[0]*a[0]+h[4]*a[1]+h[8]*a[2],S[1]=h[1]*a[0]+h[5]*a[1]+h[9]*a[2],S[2]=h[2]*a[0]+h[6]*a[1]+h[10]*a[2],S}function kc(o){const a=o.slice(),h=[1,0,0,0,1,0,0,0,1],S=(L,R)=>a[L*3+R],g=(L,R,$)=>{a[L*3+R]=$},C=(L,R)=>h[L*3+R],M=(L,R,$)=>{h[L*3+R]=$};for(let L=0;L<30;L++){let R=0,$=1,N=Math.abs(S(0,1));if(Math.abs(S(0,2))>N&&(R=0,$=2,N=Math.abs(S(0,2))),Math.abs(S(1,2))>N&&(R=1,$=2,N=Math.abs(S(1,2))),N<1e-12)break;const Y=S(R,R),V=S($,$),O=S(R,$);let U;Math.abs(Y-V)<1e-30?U=Math.PI/4*Math.sign(O):U=.5*Math.atan2(2*O,Y-V);const D=Math.cos(U),Q=Math.sin(U);for(let I=0;I<3;I++){const j=S(I,R),K=S(I,$);g(I,R,D*j+Q*K),g(I,$,-Q*j+D*K)}for(let I=0;I<3;I++){const j=S(R,I),K=S($,I);g(R,I,D*j+Q*K),g($,I,-Q*j+D*K)}for(let I=0;I<3;I++){const j=C(I,R),K=C(I,$);M(I,R,D*j+Q*K),M(I,$,-Q*j+D*K)}}const F=[];for(let L=0;L<3;L++)F.push({val:S(L,L),vec:z.create(C(0,L),C(1,L),C(2,L))});return F.sort((L,R)=>R.val-L.val),{vals:[F[0].val,F[1].val,F[2].val],vecs:[F[0].vec,F[1].vec,F[2].vec]}}function Mc(o,a){const h=yi(o);let S=0,g=0,C=0,M=0,F=0,L=0;for(const O of o){const U=O[0]-h[0],D=O[1]-h[1],Q=O[2]-h[2];S+=U*U,g+=U*D,C+=U*Q,M+=D*D,F+=D*Q,L+=Q*Q}const R=[S,g,C,g,M,F,C,F,L],{vecs:$}=kc(R);let N=$[0],Y=$[1],V=$[2];return z.dot(V,a)<0&&(z.scale(V,-1,V),z.scale(Y,-1,Y)),{centroid:h,normal:V,u:N,v:Y}}function Bc(o){let a=0,h=0,S=0,g=0,C=0,M=0,F=0,L=0,R=0;for(const[D,Q]of o){const I=-2*D,j=-2*Q,K=1,oe=-(D*D+Q*Q);a+=I*I,h+=I*j,S+=I*K,g+=j*j,C+=j*K,M+=K*K,F+=I*oe,L+=j*oe,R+=K*oe}const $=Et.create(a,h,S,h,g,C,S,C,M),N=Pi($,z.create(F,L,R)),Y=N[0],V=N[1],O=N[2],U=Y*Y+V*V-O;return{center:[Y,V],radius:Math.sqrt(Math.max(U,1e-12))}}function Tc(o,a){let h=0,S=0,g=0,C=0,M=0,F=0,L=0,R=0,$=0;for(let Y=0;Y<o.length;Y++){const V=o[Y],O=z.normalize(a[Y],z.create()),U=1-O[0]*O[0],D=-O[0]*O[1],Q=-O[0]*O[2],I=1-O[1]*O[1],j=-O[1]*O[2],K=1-O[2]*O[2];h+=U,S+=D,g+=Q,C+=I,M+=j,F+=K,L+=U*V[0]+D*V[1]+Q*V[2],R+=D*V[0]+I*V[1]+j*V[2],$+=Q*V[0]+j*V[1]+K*V[2]}const N=Et.create(h,S,g,S,C,M,g,M,F);return Pi(N,z.create(L,R,$))}function Si(o,a={}){if(o.length===0)return null;const h=a.tiltDownDeg??8,S=a.radiusScale??1,g=a.alignFirst??!0,C=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(se=>z.clone(se.position)),F=o.map(se=>{const _e=se.rotation;return z.create(_e[8],_e[9],_e[10])}),L=o.map(se=>{const _e=se.rotation;return z.create(_e[4],_e[5],_e[6])}),R=yi(L),$=z.normalize(z.scale(R,-1,z.create())),{centroid:N,normal:Y,u:V,v:O}=Mc(M,$),U=M.map(se=>{const _e=z.sub(se,N,z.create());return[z.dot(_e,V),z.dot(_e,O)]}),{center:D,radius:Q}=Bc(U),I=Q*S,j=z.add(N,z.add(z.scale(V,D[0],z.create()),z.scale(O,D[1],z.create()),z.create()),z.create()),K=Tc(M,F),oe=I*Math.tan(h*Math.PI/180),ge=z.sub(K,z.scale(Y,oe,z.create()),z.create());let ue=0;if(g){const se=z.sub(M[0],j,z.create());ue=Math.atan2(z.dot(se,O),z.dot(se,V))/(2*Math.PI)%1,ue<0&&(ue+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${I.toFixed(2)}, tilt=${h}°, normal=[${Y[0].toFixed(2)}, ${Y[1].toFixed(2)}, ${Y[2].toFixed(2)}], startPhase=${ue.toFixed(3)}`),{center:j,radius:I,normal:Y,u:V,v:O,lookAt:ge,startPhase:ue,direction:C}}function Ei(o,a){const h=(o.startPhase+a*o.direction)*2*Math.PI,S=Math.cos(h),g=Math.sin(h),C=z.add(o.center,z.add(z.scale(o.u,o.radius*S,z.create()),z.scale(o.v,o.radius*g,z.create()),z.create()),z.create()),M=z.normalize(z.sub(o.lookAt,C,z.create())),F=z.cross(M,o.normal,z.create());z.length(F)<1e-6&&z.copy(o.u,F),z.normalize(F,F);const L=z.cross(M,F,z.create());z.normalize(L,L);const R=dt.create();return R[0]=F[0],R[1]=L[0],R[2]=M[0],R[3]=0,R[4]=F[1],R[5]=L[1],R[6]=M[1],R[7]=0,R[8]=F[2],R[9]=L[2],R[10]=M[2],R[11]=0,R[12]=0,R[13]=0,R[14]=0,R[15]=1,{position:C,rotation:R,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Ac(o,a={}){const h=Si(o,a);if(!h)return[];const S=a.numViews??120;return Array.from({length:S},(g,C)=>({...Ei(h,C/S),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}function Dc(o){const a=new Uint8Array(o),h=Math.min(a.byteLength,65536),S=new TextDecoder("ascii").decode(a.subarray(0,h)),g=S.indexOf("end_header");if(g<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const C=g+10+1,M=S.slice(0,g).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const F=M.find(ie=>ie.startsWith("format"));if(!F||!F.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${F??"<none>"})`);const L={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},R=[];let $=null;for(const ie of M)if(ie.startsWith("element ")){const[,me,he]=ie.split(/\s+/);$={name:me,count:parseInt(he,10),props:[],bytesPerRecord:0,hasList:!1},R.push($)}else if(ie.startsWith("property ")&&$){const me=ie.split(/\s+/);if(me[1]==="list"){const he=me[2],be=me[3],Ae=me[4];$.props.push({name:Ae,type:be,isList:!0,listCountType:he,listItemType:be}),$.hasList=!0}else{const he=me[1],be=me[2];if($.props.push({name:be,type:he,isList:!1}),L[he]===void 0)throw new Error(`mesh PLY: unsupported prop type '${he}'`);$.bytesPerRecord+=L[he]}}const N=R.find(ie=>ie.name==="vertex"),Y=R.find(ie=>ie.name==="face"||ie.name==="faces");if(!N)throw new Error("mesh PLY: missing 'element vertex'");if(!Y)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(N.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const V=N.props.find(ie=>ie.name==="x"),O=N.props.find(ie=>ie.name==="y"),U=N.props.find(ie=>ie.name==="z");if(!V||!O||!U)throw new Error("mesh PLY: vertex must have x/y/z");let D=0;const Q=new Map;for(const ie of N.props)Q.set(ie.name,{off:D,type:ie.type}),D+=L[ie.type];const I=Q.get("x"),j=Q.get("y"),K=Q.get("z");if(I.type!==j.type||I.type!==K.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${I.type}/${j.type}/${K.type})`);const oe=I.type,ge=oe==="double"||oe==="float64";if(!ge&&oe!=="float"&&oe!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${oe}')`);const ue=new Float32Array(N.count*3),se=new DataView(o),_e=C,te=N.bytesPerRecord;for(let ie=0;ie<N.count;ie++){const me=_e+ie*te;ge?(ue[ie*3+0]=se.getFloat64(me+I.off,!0),ue[ie*3+1]=se.getFloat64(me+j.off,!0),ue[ie*3+2]=se.getFloat64(me+K.off,!0)):(ue[ie*3+0]=se.getFloat32(me+I.off,!0),ue[ie*3+1]=se.getFloat32(me+j.off,!0),ue[ie*3+2]=se.getFloat32(me+K.off,!0))}const Oe=_e+N.count*te,Ge=Y.props.find(ie=>ie.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Ie=L[Ge.listCountType],Te=L[Ge.listItemType];if(Ie!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ie}`);let ve=Oe,ye=0;for(let ie=0;ie<Y.count;ie++){const me=se.getUint8(ve);me===3&&ye++,ve+=1+me*Te}const le=new Uint32Array(ye*3);ve=Oe;let re=0;for(let ie=0;ie<Y.count;ie++){const me=se.getUint8(ve);if(ve+=1,me===3)for(let he=0;he<3;he++){const be=ve+he*Te;let Ae;if(Te===4)Ae=se.getUint32(be,!0);else if(Te===2)Ae=se.getUint16(be,!0);else if(Te===1)Ae=se.getUint8(be);else throw new Error(`mesh PLY: unsupported face index size ${Te}`);le[re++]=Ae}ve+=me*Te}return{positions:ue,indices:le}}function zc(o){const a=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const h=a.getUint32(0,!0),S=a.getUint32(4,!0),g=h*12,C=S*4;if(o.byteLength<8+g+C)throw new Error(`mesh .bin: truncated (expected ${8+g+C} B, got ${o.byteLength} B)`);const M=new Float32Array(o.slice(8,8+g)),F=new Uint32Array(o.slice(8+g,8+g+C));return{positions:M,indices:F}}function Ci(o,a){return(a??"").toLowerCase().endsWith(".ply")?Dc(o):zc(o)}function Lc(o,a){const h=o.length/3,S=new Float32Array(h*3);for(let g=0;g<a.length;g+=3){const C=a[g]*3,M=a[g+1]*3,F=a[g+2]*3,L=o[C],R=o[C+1],$=o[C+2],N=o[M],Y=o[M+1],V=o[M+2],O=o[F],U=o[F+1],D=o[F+2],Q=N-L,I=Y-R,j=V-$,K=O-L,oe=U-R,ge=D-$,ue=I*ge-j*oe,se=j*K-Q*ge,_e=Q*oe-I*K;S[C]+=ue,S[C+1]+=se,S[C+2]+=_e,S[M]+=ue,S[M+1]+=se,S[M+2]+=_e,S[F]+=ue,S[F+1]+=se,S[F+2]+=_e}for(let g=0;g<h;g++){const C=g*3,M=S[C],F=S[C+1],L=S[C+2],R=Math.sqrt(M*M+F*F+L*L);if(R>1e-12){const $=1/R;S[C]=M*$,S[C+1]=F*$,S[C+2]=L*$}}return S}function ki(o,a){const h=o.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(h,0,a.positions);const S=Lc(a.positions,a.indices),g=o.createBuffer({label:"mesh-cull normal buffer",size:S.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(g,0,S);const C=o.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(C,0,a.indices),{vertexBuffer:h,normalBuffer:g,indexBuffer:C,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function Gc(o,a){try{const h=await fetch(a);if(!h.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${h.status}`),null;const S=await h.arrayBuffer(),g=Ci(S,a);return console.log(`[mesh-cull] loaded ${a}: ${g.positions.length/3} verts, ${g.indices.length/3} tris`),ki(o,g)}catch(h){return console.warn(`[mesh-cull] load error for ${a}:`,h),null}}function Ic(o,a,h){try{const S=Ci(a,h);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),ki(o,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const Mi="BITYMI01",Rc=0,Uc=1,Vc=2,Oc=3,Fc=4,Nc=5,$c=6;function ts(o){const a=(o&32768)>>15,h=(o&31744)>>10,S=o&1023;return h===0?(a?-1:1)*Math.pow(2,-14)*(S/1024):h===31?S?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,h-15)*(1+S/1024)}function ui(o,a,h,S,g,C){const M=(o-h.width*.5)/S.focal[0],F=-((a-h.height*.5)/S.focal[1]),L=S.rotation,R=L[0],$=L[4],N=L[8],Y=L[1],V=L[5],O=L[9],U=L[2],D=L[6],Q=L[10];let I=M*R+F*Y+U,j=M*$+F*V+D,K=M*N+F*O+Q;const oe=Math.hypot(I,j,K)||1;I/=oe,j/=oe,K/=oe;const ge=S.position[0],ue=S.position[1],se=S.position[2],_e=C*.005,te=_e*_e,Oe=new Uint32Array(g.buffer,g.byteOffset,g.length),Ge=g.length/8;let Ie=1/0,Te=0,ve=0,ye=0,le=-1;for(let re=0;re<Ge;re++){const ie=re*8,me=g[ie+0]-ge,he=g[ie+1]-ue,be=g[ie+2]-se,Ae=me*I+he*j+be*K;if(Ae<=0)continue;const xe=me-Ae*I,ke=he-Ae*j,Ue=be-Ae*K;if(xe*xe+ke*ke+Ue*Ue>=te||!(Oe[ie+7]>>>16&1))continue;const x=Oe[ie+5],i=Oe[ie+6],f=ts(x&65535),c=ts(x>>>16&65535),v=ts(i&65535),P=ts(i>>>16&65535),k=Math.hypot(f,c,v,P)||1,w=f/k,r=c/k,_=v/k,d=P/k,p=2*(r*d+w*_),l=2*(_*d-w*r),m=1-2*(r*r+_*_),y=I*p+j*l+K*m;let b;Math.abs(y)>1e-6?(b=(me*p+he*l+be*m)/y,(!isFinite(b)||b<=0)&&(b=Ae)):b=Ae,b<Ie&&(Ie=b,Te=ge+b*I,ve=ue+b*j,ye=se+b*K,le=re)}return le<0?null:[Te,ve,ye]}function Bi(o){const a=new Uint8Array(o),h=new TextDecoder().decode(a.subarray(0,8));if(h!==Mi)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const S=new DataView(o),g=S.getUint32(8,!0),C=12,M=20;let F=null,L=null,R=null,$=null;for(let N=0;N<g;N++){const Y=C+N*M,V=S.getUint32(Y+0,!0),O=Number(S.getBigUint64(Y+4,!0)),U=Number(S.getBigUint64(Y+12,!0)),D=a.slice(O,O+U).buffer;V===Rc||V===Uc||V===Nc?F=D:V===Vc?L=D:V===Oc||V===Fc?R=D:V===$c&&($=D)}if(F===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:F,camerasBuffer:L,atlasBuffer:R,meshBuffer:$}}async function Wc(o,a){var M;const h=await fetch(o);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const S=(()=>{const F=h.headers.get("content-length");return F&&parseInt(F,10)||void 0})(),g=(M=h.body)==null?void 0:M.getReader();let C;if(!g)C=await h.arrayBuffer(),a&&a(C.byteLength,S,0);else{const F=[];let L=0,R=performance.now(),$=0;for(;;){const{done:V,value:O}=await g.read();if(V)break;F.push(O),L+=O.byteLength;const U=performance.now();if(U-R>=150&&a){const D=(L-$)/((U-R)/1e3);a(L,S,D),R=U,$=L}}const N=new Uint8Array(L);let Y=0;for(const V of F)N.set(V,Y),Y+=V.byteLength;C=N.buffer,a&&a(L,S,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===Mi?{bundle:Bi(C),rawPly:null}:{bundle:null,rawPly:C}}function qc(o){return new Promise(a=>{const h=document.createElement("input");h.type="file",h.accept=o,h.style.display="none",h.onchange=()=>{var S;return a(((S=h.files)==null?void 0:S[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function jc(o,a,h){const S=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),C=document.getElementById("quick-links");g&&(g.onclick=async()=>{const $=await qc(".ply,.bitymi");if($)if(S&&(S.style.display="none"),$.name.toLowerCase().endsWith(".bitymi")){const N=await $.arrayBuffer(),{pcBuffer:Y}=Bi(N),V=new File([Y],$.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),O=await Is(V,o);a(O)}else{const N=await Is($,o);a(N)}}),C&&(C.innerHTML="");const M=new URLSearchParams(window.location.search),F=M.get("bundle")??M.get("model_url"),L=M.get("camera_url"),R=M.get("mesh_url");F&&(S&&(S.style.display="none"),h(F,L,R))}async function Hc(o,a,h,S){const g=new Fs(o,h),C=new Cc(g);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const F=typeof window<"u"&&window.parent!==window,L={pos:new Float32Array(3),rot:new Float32Array(16)};if(F){window.addEventListener("message",w=>{const r=w.data;if(!(!r||r.type!=="halloumi_sync_pose")&&!(!Array.isArray(r.position)||r.position.length!==3)&&!(!Array.isArray(r.rotation)||r.rotation.length!==16)){for(let _=0;_<3;_++)g.position[_]=r.position[_];for(let _=0;_<16;_++)g.rotation[_]=r.rotation[_];g.update_buffer(),C.resetToCamera();for(let _=0;_<3;_++)L.pos[_]=g.position[_];for(let _=0;_<16;_++)L.rot[_]=g.rotation[_]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const R=()=>{if(!F)return;const w=g.position,r=g.rotation;let _=!1;for(let d=0;d<3;d++)if(Math.abs(w[d]-L.pos[d])>1e-6){_=!0;break}if(!_){for(let d=0;d<16;d++)if(Math.abs(r[d]-L.rot[d])>1e-6){_=!0;break}}if(_){for(let d=0;d<3;d++)L.pos[d]=w[d];for(let d=0;d<16;d++)L.rot[d]=r[d];try{window.parent.postMessage({type:"halloumi_camera_state",position:[w[0],w[1],w[2]],rotation:Array.from(r)},"*")}catch{}}},$="rgba8unorm";a.configure({device:h,format:$,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let N=null;const Y=()=>{g.on_update_canvas(),N!==null&&es(o.width,o.height,h,N.render_settings_buffer)};new ResizeObserver(()=>{const w=Math.max(.25,c.render_scale),r=Math.max(1,Math.ceil(w*o.clientWidth)),_=Math.max(1,Math.ceil(w*o.clientHeight));o.width===r&&o.height===_||(o.width=r,o.height=_,Y())}).observe(o);let O=0,U=0;const D=()=>{(o.width!==O||o.height!==U)&&(O=o.width,U=o.height,Y())},Q=new URLSearchParams(window.location.search);let j=Q.get("animation")==="1";C.enabled=!j;const K=Q.get("camera_url"),oe=Q.get("mesh_cull"),ge=oe==="1"||oe==="true",ue=Q.get("mesh_normal_margin")??Q.get("mesh_margin"),se=ue!==null?Number(ue):NaN,_e=Number.isFinite(se)?se:0,te=Q.get("mesh_debug"),Oe=te==="1"||te==="true",Ge=Q.get("bfc"),Ie=Ge==="1"||Ge==="true",Te=Q.get("bfc_cos"),ve=Te!==null?Number(Te):NaN,ye=Number.isFinite(ve)?ve:2,le=Q.get("mesh_sample_mode"),re=le!==null?parseInt(le,10):NaN,ie=Number.isFinite(re)&&re>=0&&re<=7?re:1,me=Q.get("mesh_silhouette"),he=me==="1"||me==="true",be=Q.get("mesh_invert_depth"),Ae=be==="1"||be==="true",xe=Q.get("ht"),ke=xe==="3"?3:xe==="2"?2:xe==="1"||xe==="true"?1:0,Ue=Q.get("ht_k"),T=Ue!==null?Number(Ue):NaN,H=Number.isFinite(T)?T:150,x=Q.get("wsr"),i=x==="1"||x==="true",f=Math.max(1,window.devicePixelRatio||1),c={gaussian_scaling:1,sh_bias:.5,animate:j,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Ie,bfc_cos:ye,ht_mode:ke,ht_k:H,wsr:i,mesh_cull:ge,mesh_margin:_e,mesh_debug:Oe,mesh_sample_mode:ie,mesh_silhouette:he,mesh_invert_depth:Ae,render_scale:1},v=new jl.Pane({title:"Config",expanded:!0});v.addInput(c,"animate",{label:"Animate"}).on("change",w=>{const r=j;j=w.value,C.enabled=!w.value,!r&&j&&P.value&&P.value.onAnimateStart(),r&&!j&&P.value&&P.value.onAnimateStop()}),v.addInput(c,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const P={value:null};jc(h,w=>k(w,[],null,null),async(w,r,_)=>{let d=r??K,p,l=null,m=null;const y=w.toLowerCase();if(y.endsWith(".bitymi")||y.includes(".bitymi?")){$s("downloading bundle ...");try{const{bundle:B}=await Wc(w,(q,ne,ee)=>{const Z=q/1048576,fe=ne?ne/(1024*1024):void 0,we=ee/(1024*1024),de=ne?Math.min(99,Math.floor(q/ne*100)):void 0,ae=fe?`total ${fe.toFixed(1)} MB`:"total -- MB",Me=fe&&de!==void 0?`${Z.toFixed(1)} MB downloaded (${de}%)`:`${Z.toFixed(1)} MB downloaded`,Be=`${we.toFixed(2)} MB/s`;It(`downloading bundle ...
${ae}, ${Me}
${Be}`)});if(!B)throw new Error("Expected a .bitymi bundle");It("parsing PLY ...");const W=new File([B.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(p=await Is(W,h),!d&&B.camerasBuffer&&(d=URL.createObjectURL(new Blob([B.camerasBuffer],{type:"application/json"}))),B.atlasBuffer){const q=B.atlasBuffer.byteLength/1048576;It(`uploading atlas ...
${q.toFixed(1)} MB BC7`);try{const ne=Fl(B.atlasBuffer);l=$l(h,ne,!0)}catch(ne){console.warn("[atlas] failed to parse/upload atlas:",ne)}}B.meshBuffer&&!_&&(It("uploading mesh ..."),m=Ic(h,B.meshBuffer,"bundle.mesh"))}catch(B){throw Ln(),B}}else p=await Wl(w,h);_&&(It("loading mesh ..."),m=await Gc(h,_));const b=d?await gc(d):[];b.length>0&&g.set_preset(b[0]),k(p,b,l,m)});function k(w,r=[],_=null,d=null){const p=[(w.bbox.min[0]+w.bbox.max[0])/2,(w.bbox.min[1]+w.bbox.max[1])/2,(w.bbox.min[2]+w.bbox.max[2])/2];C.setBbox(w.bbox.min,w.bbox.max);const l=.5*Math.sqrt((w.bbox.max[0]-w.bbox.min[0])**2+(w.bbox.max[1]-w.bbox.min[1])**2+(w.bbox.max[2]-w.bbox.min[2])**2);function m(X,pe){const ce=ui(X,pe,o,g,w.surfel_data,l);ce&&(C.setOrbitPivot(ce),console.log(`[pick] orbit pivot → (${ce[0].toFixed(3)}, ${ce[1].toFixed(3)}, ${ce[2].toFixed(3)})`))}function y(){const X=o.width*.5,pe=o.height*.5,ce=ui(X,pe,o,g,w.surfel_data,l);if(!ce)return;const De=g.rotation,Ve=De[2],Se=De[6],Ce=De[10],$e=ce[0]-g.position[0],Ze=ce[1]-g.position[1],lt=ce[2]-g.position[2],wt=$e*Ve+Ze*Se+lt*Ce;wt>0&&C.setOrbitDepth(wt)}if(r.length===0){const X=w.bbox.max[0]-w.bbox.min[0],pe=w.bbox.max[1]-w.bbox.min[1],ce=w.bbox.max[2]-w.bbox.min[2],Ve=.5*Math.sqrt(X*X+pe*pe+ce*ce)*.5;z.set(p[0]-Ve,p[1]-Ve,p[2]-Ve,g.position);const Se=z.create(Ve,Ve,Ve);z.normalize(Se,Se);const Ce=z.create(0,1,0),$e=z.create();z.cross(Ce,Se,$e),z.normalize($e,$e);const Ze=z.create();z.cross(Se,$e,Ze);const lt=Et.create($e[0],Ze[0],Se[0],$e[1],Ze[1],Se[1],$e[2],Ze[2],Se[2]);dt.fromMat3(lt,g.rotation),g.update_buffer()}C.setCenter(z.create(w.centroid[0],w.centroid[1],w.centroid[2]));const b=new mc(w,h,$,g.uniform_buffer,S,_,d);N=b,es(o.width,o.height,h,b.render_settings_buffer),c.atlas_enabled=_!==null,d===null&&(c.mesh_cull=!1),b.setMeshCullEnabled(c.mesh_cull),b.setMeshMargin(c.mesh_margin),d===null&&(c.mesh_debug=!1),b.setMeshOverlayEnabled(c.mesh_debug);{const X=w.surfel_data,pe=X.length/8;let ce=0,De=0,Ve=0;for(let Ce=0;Ce<pe;Ce++)ce+=X[Ce*8],De+=X[Ce*8+1],Ve+=X[Ce*8+2];const Se=pe>0?[ce/pe,De/pe,Ve/pe]:[0,0,0];b.setBfcParams(c.bfc_cos,Se),an({bfc:c.bfc},h,b.render_settings_buffer),console.log(`[bfc] flag=${c.bfc} cos=${c.bfc_cos} centroid=(${Se[0].toFixed(3)}, ${Se[1].toFixed(3)}, ${Se[2].toFixed(3)})`)}b.htEnabled=c.ht_mode>0,b.htSortedTail=c.ht_mode===2,b.htOccTail=c.ht_mode===3,b.setHtTailK(c.ht_k),c.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${c.ht_mode}: ${c.ht_mode===2?"exact core + SORTED tail":c.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${c.ht_k})`),b.wsrEnabled=c.wsr,c.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),an({meshSampleMode:c.mesh_sample_mode,meshSilhouetteCull:c.mesh_silhouette,meshInvertDepth:c.mesh_invert_depth},h,b.render_settings_buffer),console.log(`[mesh-cull] ${d!==null?"mesh loaded":"no mesh"} · toggle=${c.mesh_cull} · margin=${c.mesh_margin}m · debug=${c.mesh_debug} · sample_mode=${c.mesh_sample_mode} · silhouette=${c.mesh_silhouette} · invert=${c.mesh_invert_depth}`);let B=!1;const W=(()=>{if(_!==null)return`${_.meta.format===2?"BC7":_.meta.format===3?"ASTC 4×4":_.meta.format===7?"BC7 codebook gather (typeD)":`format=${_.meta.format}`} ${_.meta.width}×${_.meta.height}, ${_.meta.n_layers} layers`;const X=h.features.has("texture-compression-bc"),pe=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(X?["BC7"]:[]).concat(pe?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",W),ai(w.sh_bias,h,b.render_settings_buffer),oi(c.gaussian_scaling,h,b.render_settings_buffer),c.sh_bias=w.sh_bias;const q=w.num_points.toLocaleString(),ne={stats:`${q} surfels · -- fps`};v.addMonitor(ne,"stats",{label:"Stats",interval:200}),v.addMonitor({atlas:W},"atlas",{label:"Atlas"});const ee={stages:"— ms · awaiting timestamp data"};v.addMonitor(ee,"stages",{label:"Stages",interval:500});let Z=null;if(b.timeQueryEnabled){Z=document.createElement("canvas"),Z.width=280,Z.height=24,Z.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(Z);const X=ce=>{const De=Z.getContext("2d");if(!De)return;const Ve=Z.width,Se=Z.height;if(De.clearRect(0,0,Ve,Se),!ce||ce.total<=0){De.fillStyle="#888",De.font="11px ui-monospace,Menlo,monospace",De.fillText("awaiting GPU timestamps…",8,16);return}const Ce=[{label:"cull",ms:ce.cull,color:"#3aa3ff"},{label:"pre",ms:ce.preprocess,color:"#3ad27a"},{label:"sort",ms:ce.sort,color:"#ffa53a"},{label:"render",ms:ce.render,color:"#ff5566"}],$e=Math.max(.001,Ce.reduce((lt,wt)=>lt+wt.ms,0));let Ze=0;De.font="10px ui-monospace,Menlo,monospace",De.textBaseline="middle";for(const lt of Ce){const wt=lt.ms/$e*Ve;De.fillStyle=lt.color,De.fillRect(Ze,0,wt,Se),wt>=38&&(De.fillStyle="#000c",De.fillText(`${lt.label} ${lt.ms.toFixed(1)}`,Ze+4,Se/2)),Ze+=wt}};setInterval(()=>{B||b.readPerfMetrics({silent:!0}).then(()=>{const ce=b.lastStageBreakdownMs;X(ce),ce&&(ee.stages=`${ce.total.toFixed(1)} ms · cull ${ce.cull.toFixed(1)} / pre ${ce.preprocess.toFixed(1)} / sort ${ce.sort.toFixed(1)} / render ${ce.render.toFixed(1)}`)}).catch(ce=>console.warn("[perf] readPerfMetrics failed:",ce))},500)}const fe=.4,we=3,de=.3;let ae=null,Me=0,Be=0;const We=ht.create(),Xe=Et.create();let ze=r.length>0?0:-1;const je={view:r.length>0?`${ze+1} / ${r.length}: ${r[ze].img_name??ze}`:"— no presets —"};v.addMonitor(je,"view",{label:"View",interval:100});function et(X){const pe=Et.create(X[0],X[1],X[2],X[4],X[5],X[6],X[8],X[9],X[10]);return ht.fromMat(pe)}function rt(X,pe){ae={fromPos:z.clone(g.position),toPos:z.clone(X.position),fromQuat:ht.normalize(et(g.rotation)),toQuat:ht.normalize(et(X.rotation)),target:X,t:0,duration:Math.max(.01,pe)}}const Qe=(X,pe=!0)=>{if(r.length===0)return;ze=(X%r.length+r.length)%r.length;const ce=r[ze];pe?rt(ce,fe):(g.set_preset(ce),C.resetToCamera(),y()),je.view=`${ze+1} / ${r.length}: ${r[ze].img_name??ze}`};r.length>0&&(v.addButton({title:"◀ Prev view"}).on("click",()=>Qe(ze-1)),v.addButton({title:"Next view ▶"}).on("click",()=>Qe(ze+1)));const tt=r.length>0?Si(r,{tiltDownDeg:15,alignFirst:!0}):null,it=tt?Ac(r,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let He=0;const ot=12;P.value={onAnimateStart:()=>{He=0},onAnimateStop:()=>{C.resetToCamera(),y()}},v.addInput(c,"render_scale",{label:"Render scale",min:.25,max:f,step:.25}).on("change",X=>{const pe=Math.max(.25,X.value),ce=Math.max(1,Math.ceil(pe*o.clientWidth)),De=Math.max(1,Math.ceil(pe*o.clientHeight));(o.width!==ce||o.height!==De)&&(o.width=ce,o.height=De,Y())}),v.addInput(c,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",X=>oi(X.value,h,b.render_settings_buffer)),v.addInput(c,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",X=>ai(X.value,h,b.render_settings_buffer)),v.addInput(c,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",X=>{b.bgColor=[X.value.r,X.value.g,X.value.b,X.value.a]});const qe=_?_.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";v.addInput(c,"atlas_enabled",{label:qe}).on("change",X=>b.setAtlasEnabled(X.value)),v.addInput(c,"bfc",{label:"Backface"}).on("change",X=>an({bfc:X.value},h,b.render_settings_buffer)),v.addInput(c,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",X=>{b.htEnabled=X.value>0,b.htSortedTail=X.value===2,b.htOccTail=X.value===3}),v.addInput(c,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",X=>b.setHtTailK(X.value)),v.addInput(c,"wsr",{label:"WSR (sort-free)"}).on("change",X=>{b.wsrEnabled=X.value});const nt=v.addInput(c,"mesh_cull",{label:"Mesh cull"});nt.on("change",X=>b.setMeshCullEnabled(X.value)),b.hasMesh||(nt.disabled=!0);const Ke=v.addInput(c,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});Ke.on("change",X=>b.setMeshMargin(X.value)),b.hasMesh||(Ke.disabled=!0);const ut=v.addInput(c,"mesh_debug",{label:"Mesh debug"});ut.on("change",X=>b.setMeshOverlayEnabled(X.value)),b.hasMesh||(ut.disabled=!0);const st=v.addInput(c,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});st.on("change",X=>an({meshSampleMode:X.value},h,b.render_settings_buffer)),b.hasMesh||(st.disabled=!0);const Bt=v.addInput(c,"mesh_silhouette",{label:"Silhouette cull"});Bt.on("change",X=>an({meshSilhouetteCull:X.value},h,b.render_settings_buffer)),b.hasMesh||(Bt.disabled=!0);const yt=v.addInput(c,"mesh_invert_depth",{label:"Invert depth cull"});yt.on("change",X=>an({meshInvertDepth:X.value},h,b.render_settings_buffer)),b.hasMesh||(yt.disabled=!0),v.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(r.length>0)g.set_preset(r[0]);else{const X=w.bbox.max[0]-w.bbox.min[0],pe=w.bbox.max[1]-w.bbox.min[1],ce=w.bbox.max[2]-w.bbox.min[2],Ve=.5*Math.sqrt(X*X+pe*pe+ce*ce)*.5;z.set(p[0]-Ve,p[1]-Ve,p[2]-Ve,g.position);const Se=z.create(Ve,Ve,Ve);z.normalize(Se,Se);const Ce=z.create();z.cross(z.create(0,1,0),Se,Ce),z.normalize(Ce,Ce);const $e=z.create();z.cross(Se,Ce,$e);const Ze=Et.create(Ce[0],$e[0],Se[0],Ce[1],$e[1],Se[1],Ce[2],$e[2],Se[2]);dt.fromMat3(Ze,g.rotation),g.update_buffer()}C.resetToCamera(),y()});const vt={result:"— click Benchmark —"};v.addMonitor(vt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Ct={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Rt(){const pe=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ce of Object.keys(Ct))if(pe.startsWith(ce))return ce;return null}const gt=document.createElement("div");gt.id="bench-overlay",gt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(gt);function Tt(X,pe,ce){const De=Math.floor(pe/Math.max(1,ce)*100),Ve=32,Se=Math.floor(pe/Math.max(1,ce)*Ve),Ce="█".repeat(Se)+"░".repeat(Ve-Se);gt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${X}</div><div>[${Ce}] ${De}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${pe} / ${ce} frames · offscreen · pipelined · no vsync</div>`,gt.style.display="block"}function un(){gt.style.display="none"}async function Ut(X=10,pe=200){if(B)return;if(r.length===0){vt.result="no cameras to benchmark";return}B=!0;const ce=j,De=c.animate,Ve=new Float32Array(g.position),Se=new Float32Array(g.rotation);j=!1,c.animate=!1,v.refresh(),ae=null,C.enabled=!1;const Ce=Rt(),$e=Ce?Ct[Ce]:null,Ze=($e==null?void 0:$e.w)??o.width,lt=($e==null?void 0:$e.h)??o.height,wt=($e==null?void 0:$e.fovY)??g.getFov(),Zt=Ce?`${Ce} · ${Ze>=4e3/4+500?"images_4":"images_2"}`:"custom",Un=o.width,yn=o.height,Vn=g.getFov();o.width=Ze,o.height=lt,g.setFov(wt),es(Ze,lt,h,b.render_settings_buffer);const On=h.createTexture({size:[Ze,lt,1],format:$,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),cs=On.createView(),us=()=>{const ft=h.createCommandEncoder();b.frame(ft,cs,!1),h.queue.submit([ft.finish()])},Fn=()=>new Promise(ft=>setTimeout(ft,0)),Nn=20,$n=async(ft,Xt)=>{let pn=0,xt=0;for(Tt(Xt,0,ft),await Fn();xt<ft;){const _t=Math.min(Nn,ft-xt),kt=performance.now();for(let hn=0;hn<_t;hn++)g.set_preset(r[(xt+hn)%r.length]),us();await h.queue.onSubmittedWorkDone();const Qt=performance.now();pn+=Qt-kt,xt+=_t,Tt(Xt,xt,ft),await Fn()}return pn};try{await $n(X,"Warming up");const Xt=await $n(pe,"Benchmarking")/pe,pn=1e3/Xt,xt=w.num_points??w.surfel_data.length/8,_t=(wt*180/Math.PI).toFixed(1),kt=`${pn.toFixed(1)} FPS  (${Xt.toFixed(2)} ms/frame)
${Ze}×${lt} · fovY ${_t}° · ${Zt}
${xt.toLocaleString()} surfels · ${X}w+${pe}b · pipelined`;vt.result=kt,console.log("[bench]",kt.replace(/\n/g,"  |  "))}catch(ft){console.error("[bench] failed:",ft),vt.result=`bench failed: ${ft}`}finally{un(),On.destroy(),o.width=Un,o.height=yn,g.setFov(Vn),es(Un,yn,h,b.render_settings_buffer),g.position.set(Ve),g.rotation.set(Se),g.update_buffer(),C.enabled=!ce,j=ce,c.animate=De,v.refresh(),B=!1}}v.addButton({title:"📊 Benchmark"}).on("click",()=>Ut()),document.addEventListener("keydown",X=>{const pe=X.key;if(pe>="0"&&pe<="9"&&r.length>0){const ce=parseInt(pe);ce<r.length&&Qe(ce)}else pe==="ArrowLeft"||pe==="PageUp"?(Qe(ze-1),X.preventDefault()):pe==="ArrowRight"||pe==="PageDown"?(Qe(ze+1),X.preventDefault()):(pe==="d"||pe==="D")&&b.debugReadSortedIndices(30).catch(ce=>console.error("[DEBUG] readback failed:",ce))});function Ht(X,pe){const ce=o.getBoundingClientRect(),De=window.devicePixelRatio||1;return[(X-ce.left)*De,(pe-ce.top)*De]}o.addEventListener("dblclick",X=>{const[pe,ce]=Ht(X.clientX,X.clientY);m(pe,ce)});let Vt=0,Ye=0,wn=0;o.addEventListener("pointerdown",X=>{if(X.pointerType!=="touch")return;const pe=performance.now(),ce=pe-Vt,De=X.clientX-Ye,Ve=X.clientY-wn;if(ce>0&&ce<300&&De*De+Ve*Ve<40*40){const[Se,Ce]=Ht(X.clientX,X.clientY);m(Se,Ce),Vt=0}else Vt=pe,Ye=X.clientX,wn=X.clientY});function Rn(){return M}let dn=performance.now(),xn=60,At=Promise.resolve(),Kt=0;async function Yt(){var Ve;const X=performance.now(),pe=Math.min((X-dn)/1e3,.1);if(dn=X,pe>0){const Se=((Ve=b.lastStageBreakdownMs)==null?void 0:Ve.total)??0,Ce=Se>.5?1e3/Se:1/pe;xn=xn*.9+Ce*.1,ne.stats=`${q} surfels · ${Math.round(xn)} fps`}if(B){requestAnimationFrame(Yt);return}if(Rn()&&(ae||j)&&(ae=null,C.resetToCamera(),y(),j&&(j=!1,c.animate=!1,v.refresh())),j&&c.animateMode==="circle"&&tt){He+=pe/ot,He>=1&&(He-=1);const Se=Ei(tt,He);g.set_preset(Se),C.update(pe);const Ce=h.createCommandEncoder();b.frame(Ce,a.getCurrentTexture().createView()),h.queue.submit([Ce.finish()]),Kt++,Kt===2&&Ln(),requestAnimationFrame(Yt);return}if(ae){ae.t+=pe/ae.duration;const Se=Math.min(1,ae.t),Ce=Se*Se*(3-2*Se);z.lerp(ae.fromPos,ae.toPos,Ce,g.position),ht.slerp(ae.fromQuat,ae.toQuat,Ce,We),Et.fromQuat(We,Xe),dt.fromMat3(Xe,g.rotation),g.update_buffer(),ae.t>=1&&(g.set_preset(ae.target),ae=null,j?r.length>0&&(Me=de):(C.resetToCamera(),y()))}else if(j&&!Rn()){const Se=c.animateMode==="circle"&&it.length>0,Ce=Se?it:r;if(Ce.length!==0){if(Me-=pe,Me<=0){const Ze=((Se?Be:ze)+1)%Ce.length;Se?Be=Ze:ze=Ze;const lt=Se?we/8:we;rt(Ce[Ze],lt),Se||(je.view=`${ze+1} / ${r.length}: ${r[ze].img_name??ze}`)}}}C.update(pe),R(),D(),await At;const ce=h.createCommandEncoder(),De=a.getCurrentTexture().createView();b.frame(ce,De),h.queue.submit([ce.finish()]),At=h.queue.onSubmittedWorkDone(),Kt++,Kt===2&&Ln(),requestAnimationFrame(Yt)}requestAnimationFrame(Yt)}}(function(){let a="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const C=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){a=C[1];break}}const h=document.createElement("div");h.textContent="v "+a,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const h=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Il(S!==null);const g=S.getContext("webgpu");Hc(S,g,h,a)})();
